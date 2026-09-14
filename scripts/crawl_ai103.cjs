const https = require('https');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const agent = new https.Agent({ keepAlive: true, maxSockets: 10 });

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      agent,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml',
        'Accept-Encoding': 'gzip, deflate, br'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (redirectUrl.startsWith('/')) redirectUrl = 'https://examcademy.com' + redirectUrl;
        return fetchUrl(redirectUrl).then(resolve, reject);
      }

      let stream = res;
      const encoding = res.headers['content-encoding'];
      if (encoding === 'gzip') stream = res.pipe(zlib.createGunzip());
      else if (encoding === 'deflate') stream = res.pipe(zlib.createInflate());
      else if (encoding === 'br') stream = res.pipe(zlib.createBrotliDecompress());

      let data = '';
      stream.on('data', chunk => data += chunk);
      stream.on('end', () => resolve({ statusCode: res.statusCode, data, url }));
      stream.on('error', reject);
    });
    req.on('error', reject);
    req.setTimeout(20000, () => {
      req.destroy();
      reject(new Error(`Timeout fetching ${url}`));
    });
  });
}

function extractExplanationFromHtml(html) {
  // 1. Explanation fieldset
  const expMatch = html.match(/<fieldset[^>]*class="[^"]*explanation-content[^"]*"[^>]*>(?:<legend[^>]*>.*?<\/legend>)?([\s\S]*?)<\/fieldset>/i);
  let expText = '';
  if (expMatch) {
    expText = expMatch[1]
      .replace(/<p[^>]*>/gi, '')
      .replace(/<\/p>/gi, '\n\n')
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<[^>]+>/g, '')
      .replace(/&#x27;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .trim();
  }

  // 2. Learn more links
  const lmMatch = html.match(/<fieldset[^>]*class="[^"]*learn-more-box[^"]*"[^>]*>([\s\S]*?)<\/fieldset>/i);
  const links = [];
  if (lmMatch) {
    const linkRegex = /<a\s+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
    let lm;
    while ((lm = linkRegex.exec(lmMatch[1])) !== null) {
      const href = lm[1];
      const title = lm[2].replace(/<[^>]+>/g, '').trim();
      links.push({ title, href });
    }
  }

  return { expText, links };
}

function parseQuestionPage(html, qNum, url) {
  // Extract category / topic from URL
  let category = 'Implement generative AI and agentic solutions';
  const slugMatch = url.match(/\/q\/\d+-([a-z0-9\-]+)/);
  if (slugMatch) {
    const topicSlug = slugMatch[1];
    if (topicSlug.includes('plan-and-manage')) {
      category = 'Plan and manage an Azure AI solution';
    } else if (topicSlug.includes('generative-ai') || topicSlug.includes('agentic')) {
      category = 'Implement generative AI and agentic solutions';
    } else if (topicSlug.includes('computer-vision')) {
      category = 'Implement computer vision solutions';
    } else if (topicSlug.includes('text-analysis')) {
      category = 'Implement text analysis solutions';
    } else if (topicSlug.includes('information-extraction')) {
      category = 'Implement information extraction solutions';
    } else {
      category = topicSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    }
  }

  // Extract explanation & links from HTML
  const { expText, links } = extractExplanationFromHtml(html);

  // Extract definition from RSC payload
  const scripts = html.split('<script>');
  let definition = null;
  let questionId = `ai103-q${qNum}`;

  for (const s of scripts) {
    if (s.includes('stemRaw') && s.includes('self.__next_f.push(')) {
      const callStart = s.indexOf('self.__next_f.push(');
      if (callStart !== -1) {
        const argStart = callStart + 'self.__next_f.push('.length;
        const argEnd = s.lastIndexOf(')');
        const argStr = s.substring(argStart, argEnd);
        try {
          const parsed = JSON.parse(argStr);
          const rscPayload = parsed[1];
          
          const qIdMatch = rscPayload.match(/"questionId":"([a-f0-9\-]+)"/);
          if (qIdMatch) questionId = qIdMatch[1];

          const defIdx = rscPayload.indexOf('"definition":');
          if (defIdx !== -1) {
            const start = rscPayload.indexOf('{', defIdx);
            let depth = 0, end = -1;
            for (let i = start; i < rscPayload.length; i++) {
              if (rscPayload[i] === '{') depth++;
              else if (rscPayload[i] === '}') {
                depth--;
                if (depth === 0) { end = i + 1; break; }
              }
            }
            if (end !== -1) {
              definition = JSON.parse(rscPayload.substring(start, end));
            }
          }
        } catch (e) {}
      }
    }
  }

  if (!definition) {
    throw new Error(`Could not parse definition for question ${qNum}`);
  }

  // Combine explanation
  let finalExplanation = '';
  if (definition.explanation && typeof definition.explanation === 'string' && !definition.explanation.startsWith('$')) {
    finalExplanation = definition.explanation;
  } else if (expText) {
    finalExplanation = expText;
  }

  if (links.length > 0) {
    const linkLines = links.map(l => `- [${l.title}](${l.href})`).join('\n');
    if (!finalExplanation.includes(links[0].href)) {
      finalExplanation += (finalExplanation ? '\n\n**Tài liệu tham khảo:**\n' : '**Tài liệu tham khảo:**\n') + linkLines;
    }
  }

  return {
    qNum,
    questionId,
    category,
    url,
    definition,
    finalExplanation
  };
}

async function run() {
  const t0 = Date.now();
  console.log('Starting fetch of all 135 AI-103 questions...');
  
  const numbers = Array.from({ length: 135 }, (_, i) => i + 1);
  const parsedQuestions = [];
  const concurrency = 10;
  
  for (let i = 0; i < numbers.length; i += concurrency) {
    const chunk = numbers.slice(i, i + concurrency);
    const chunkResults = await Promise.all(
      chunk.map(async (num) => {
        try {
          const res = await fetchUrl(`https://examcademy.com/exams/microsoft/ai-103/q/${num}`);
          const parsed = parseQuestionPage(res.data, num, res.url);
          return parsed;
        } catch (err) {
          console.error(`Error on Q${num}:`, err.message);
          return null;
        }
      })
    );
    for (const res of chunkResults) {
      if (res) parsedQuestions.push(res);
    }
    process.stdout.write(`Progress: ${parsedQuestions.length}/135 questions fetched...\r`);
  }

  console.log(`\nCompleted fetching in ${((Date.now() - t0)/1000).toFixed(1)}s. Total: ${parsedQuestions.length} questions.`);
  fs.writeFileSync(path.join(__dirname, 'raw_ai103_data.json'), JSON.stringify(parsedQuestions, null, 2));
  console.log('Saved raw data to scripts/raw_ai103_data.json');
}

run();
