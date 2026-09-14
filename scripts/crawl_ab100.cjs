const https = require('https');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const agent = new https.Agent({ keepAlive: true, maxSockets: 5 });

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function fetchUrl(url, attempt = 1) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      agent,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br'
      }
    }, async (res) => {
      if (res.statusCode === 429) {
        const retryAfterSec = parseInt(res.headers['retry-after'] || '20', 10);
        console.log(`\nRate limit hit (429) on ${url}. Waiting ${retryAfterSec + 2}s (attempt ${attempt})...`);
        await sleep((retryAfterSec + 2) * 1000);
        return fetchUrl(url, attempt + 1).then(resolve, reject);
      }

      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (redirectUrl.startsWith('/')) redirectUrl = 'https://examcademy.com' + redirectUrl;
        return fetchUrl(redirectUrl, attempt).then(resolve, reject);
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

    req.on('error', async (err) => {
      if (attempt <= 3) {
        console.log(`\nNetwork error on ${url}: ${err.message}. Retrying in 5s...`);
        await sleep(5000);
        return fetchUrl(url, attempt + 1).then(resolve, reject);
      }
      reject(err);
    });

    req.setTimeout(25000, () => {
      req.destroy();
      reject(new Error(`Timeout fetching ${url}`));
    });
  });
}

function extractExplanationFromHtml(html) {
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

function formatCategory(slug) {
  if (!slug) return 'Agentic AI Business Solutions Architect';
  const words = slug.split('-');
  return words.map(w => {
    if (['ai', 'ci', 'cd', 'api', 'iot', 'ml', 'ocr', 'sdk'].includes(w.toLowerCase())) return w.toUpperCase();
    return w.charAt(0).toUpperCase() + w.slice(1);
  }).join(' ');
}

function parseQuestionPage(html, qNum, url) {
  let category = 'Agentic AI Business Solutions Architect';
  const slugMatch = url.match(/\/q\/\d+-([a-z0-9\-]+)/);
  if (slugMatch) {
    category = formatCategory(slugMatch[1]);
  }

  let ldText = '';
  const ldMatches = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)];
  for (const m of ldMatches) {
    try {
      const parsed = JSON.parse(m[1]);
      if (parsed['@type'] === 'QAPage' && parsed.mainEntity && parsed.mainEntity.text) {
        ldText = parsed.mainEntity.text;
      }
    } catch (e) {}
  }

  const { expText, links } = extractExplanationFromHtml(html);

  const scripts = html.split('<script>');
  let definition = null;
  let questionId = `ab100-q${qNum}`;

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
            // String-aware balanced brace parser
            let inString = false, escape = false, depth = 0, end = -1;
            for (let i = start; i < rscPayload.length; i++) {
              const c = rscPayload[i];
              if (escape) { escape = false; continue; }
              if (c === '\\') { escape = true; continue; }
              if (c === '"') { inString = !inString; continue; }
              if (!inString) {
                if (c === '{') depth++;
                else if (c === '}') {
                  depth--;
                  if (depth === 0) { end = i + 1; break; }
                }
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

  if (definition.stemRaw && definition.stemRaw.startsWith('$') && ldText) {
    definition.stemRaw = ldText;
  }

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

async function main() {
  const dataFilePath = path.join(__dirname, 'raw_ab100_data.json');
  let existing = [];
  if (fs.existsSync(dataFilePath)) {
    try {
      existing = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
    } catch (e) {
      existing = [];
    }
  }

  const existingMap = new Map();
  existing.forEach(q => existingMap.set(q.qNum, q));

  console.log(`Loaded ${existing.length} existing AB-100 questions.`);

  const TOTAL_QUESTIONS = 120;

  for (let qNum = 1; qNum <= TOTAL_QUESTIONS; qNum++) {
    if (existingMap.has(qNum)) {
      continue;
    }

    try {
      const res = await fetchUrl(`https://examcademy.com/exams/microsoft/ab-100/q/${qNum}`);
      const parsed = parseQuestionPage(res.data, qNum, res.url);
      existingMap.set(qNum, parsed);
      console.log(`[Q${qNum}/${TOTAL_QUESTIONS}] Fetched (${parsed.definition.type}) - ${parsed.category}`);

      if (qNum % 5 === 0 || qNum === TOTAL_QUESTIONS) {
        const sorted = Array.from(existingMap.values()).sort((a, b) => a.qNum - b.qNum);
        fs.writeFileSync(dataFilePath, JSON.stringify(sorted, null, 2));
      }

      await sleep(650);
    } catch (err) {
      console.error(`Error on Q${qNum}:`, err.message);
      await sleep(3000);
    }
  }

  const finalSorted = Array.from(existingMap.values()).sort((a, b) => a.qNum - b.qNum);
  fs.writeFileSync(dataFilePath, JSON.stringify(finalSorted, null, 2));
  console.log(`\nDONE AB-100! Total questions saved: ${finalSorted.length}/${TOTAL_QUESTIONS}`);
}

main();
