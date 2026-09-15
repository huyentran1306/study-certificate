const https = require('https');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const agent = new https.Agent({ keepAlive: true, maxSockets: 8 });

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function fetchUrl(url, attempt = 1) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      agent,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br'
      }
    }, async (res) => {
      if (res.statusCode === 429) {
        const retryAfterSec = parseInt(res.headers['retry-after'] || '15', 10);
        console.log(`\nRate limit hit (429) on ${url}. Waiting ${retryAfterSec + 2}s (attempt ${attempt})...`);
        await sleep((retryAfterSec + 2) * 1000);
        return fetchUrl(url, attempt + 1).then(resolve, reject);
      }

      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (redirectUrl.startsWith('/')) redirectUrl = 'https://examcademy.com' + redirectUrl;
        return fetchUrl(redirectUrl, attempt).then(resolve, reject);
      }

      if (res.statusCode === 404) {
        return resolve({ statusCode: 404, data: null, url });
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
        await sleep(3000 * attempt);
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
      .replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**')
      .replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*')
      .replace(/<code[^>]*>(.*?)<\/code>/gi, '`$1`')
      .replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)')
      .replace(/<[^>]+>/g, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&#x27;/g, "'")
      .replace(/&quot;/g, '"')
      .trim();
  }

  const links = [];
  const linkMatches = html.matchAll(/<a[^>]*class="[^"]*underline[^"]*"[^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/gi);
  for (const m of linkMatches) {
    const href = m[1];
    const text = m[2].replace(/<[^>]+>/g, '').trim();
    if (href.startsWith('http') && text) {
      links.push({ text, url: href });
    }
  }

  return { expText, links };
}

function parseQuestionPage(html, qNum, url, certSlug) {
  let category = 'General';
  const catMatch = html.match(/<div[^>]*class="[^"]*text-muted-foreground[^"]*"[^>]*>([\s\S]*?)<\/div>/i);
  if (catMatch) {
    const rawCat = catMatch[1].replace(/<[^>]+>/g, '').trim();
    if (rawCat && !rawCat.includes('Question') && !rawCat.includes('Flag') && rawCat.length > 3) {
      category = rawCat;
    }
  }

  let ldQuestion = null;
  const ldJsonMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (ldJsonMatch) {
    try {
      const parsedLd = JSON.parse(ldJsonMatch[1]);
      if (parsedLd['@type'] === 'Question') ldQuestion = parsedLd;
    } catch (e) {}
  }

  const { expText, links } = extractExplanationFromHtml(html);

  const scripts = html.split('<script>');
  let definition = null;
  let questionId = `${certSlug.replace(/[^a-z0-9]/g, '')}-q${qNum}`;

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
    if (ldQuestion) {
      definition = {
        type: 'multiple_choice',
        stemRaw: ldQuestion.text,
        choices: (ldQuestion.suggestedAnswer || []).map((ans, idx) => ({
          label: String.fromCharCode(65 + idx),
          text: ans.text
        })),
        answers: (ldQuestion.acceptedAnswer ? [ldQuestion.acceptedAnswer.text] : [])
      };
    } else {
      definition = {
        type: 'multiple_choice',
        stemRaw: `Question ${qNum}`,
        choices: [],
        answers: []
      };
    }
  }

  let finalExplanation = expText;
  if (!finalExplanation && ldQuestion && ldQuestion.comment && ldQuestion.comment.text) {
    finalExplanation = ldQuestion.comment.text;
  }
  if (!finalExplanation && definition.explanation) {
    finalExplanation = definition.explanation;
  }

  if (links.length > 0) {
    const formattedLinks = links.map(l => `[${l.text}](${l.url})`).join(' · ');
    if (finalExplanation) {
      if (!finalExplanation.includes('http')) {
        finalExplanation += `\n\n**Tài liệu tham khảo:**\n${formattedLinks}`;
      }
    } else {
      finalExplanation = `**Tài liệu tham khảo:**\n${formattedLinks}`;
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

async function crawlExam(certSlug, totalQuestions, concurrency = 6) {
  const certIdNoHyphen = certSlug.replace(/-/g, '');
  const outPath = path.join(__dirname, `raw_${certIdNoHyphen}_data.json`);

  const existingMap = new Map();
  if (fs.existsSync(outPath)) {
    try {
      const existing = JSON.parse(fs.readFileSync(outPath, 'utf8'));
      existing.forEach(q => existingMap.set(q.qNum, q));
      console.log(`[${certSlug.toUpperCase()}] Loaded ${existing.length}/${totalQuestions} existing questions from cache.`);
    } catch {}
  }

  const pending = [];
  for (let q = 1; q <= totalQuestions; q++) {
    if (!existingMap.has(q)) pending.push(q);
  }

  if (pending.length === 0) {
    console.log(`[${certSlug.toUpperCase()}] All ${totalQuestions} questions already crawled!`);
    return Array.from(existingMap.values()).sort((a, b) => a.qNum - b.qNum);
  }

  console.log(`[${certSlug.toUpperCase()}] Crawling ${pending.length} pending questions with concurrency ${concurrency}...`);
  let cursor = 0;
  let done = existingMap.size;

  async function worker() {
    while (cursor < pending.length) {
      const qNum = pending[cursor++];
      const url = `https://examcademy.com/exams/microsoft/${certSlug}/q/${qNum}`;
      try {
        const res = await fetchUrl(url);
        if (res.statusCode === 200 && res.data) {
          const parsed = parseQuestionPage(res.data, qNum, res.url, certSlug);
          existingMap.set(qNum, parsed);
          done++;
        } else if (res.statusCode === 404) {
          console.log(`[${certSlug.toUpperCase()}] Q${qNum} returned 404 (End of question bank).`);
        }
      } catch (err) {
        console.warn(`[${certSlug.toUpperCase()}] Failed Q${qNum}: ${err.message}`);
      }

      if (done % 10 === 0 || cursor >= pending.length) {
        const sorted = Array.from(existingMap.values()).sort((a, b) => a.qNum - b.qNum);
        fs.writeFileSync(outPath, JSON.stringify(sorted, null, 2));
        process.stdout.write(`[${certSlug.toUpperCase()}] Progress: ${done}/${totalQuestions} questions...\r`);
      }
      await sleep(250);
    }
  }

  const workers = Array.from({ length: concurrency }, () => worker());
  await Promise.all(workers);

  const finalSorted = Array.from(existingMap.values()).sort((a, b) => a.qNum - b.qNum);
  fs.writeFileSync(outPath, JSON.stringify(finalSorted, null, 2));
  console.log(`\n[${certSlug.toUpperCase()}] Completed! Total: ${finalSorted.length} questions saved to ${outPath}`);
  return finalSorted;
}

module.exports = { crawlExam, fetchUrl, parseQuestionPage };
