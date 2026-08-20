const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');

const sourceDir = process.argv[2];
const ocrPath = process.argv[3] || path.join(os.tmpdir(), 'az900_image_ocr.json');
const outputPath = process.argv[4] || path.join(os.tmpdir(), 'az900_image_matches.json');

function parseCsv(text) {
  const rows = [];
  let row = [];
  let value = '';
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    if (quoted) {
      if (char === '"' && text[index + 1] === '"') {
        value += '"';
        index += 1;
      } else if (char === '"') {
        quoted = false;
      } else {
        value += char;
      }
    } else if (char === '"') {
      quoted = true;
    } else if (char === ',') {
      row.push(value);
      value = '';
    } else if (char === '\n') {
      row.push(value.replace(/\r$/, ''));
      rows.push(row);
      row = [];
      value = '';
    } else {
      value += char;
    }
  }
  if (value || row.length) {
    row.push(value);
    rows.push(row);
  }

  const headers = rows.shift().map(header => header.replace(/^\uFEFF/, ''));
  return rows
    .filter(values => values.some(Boolean))
    .map(values => Object.fromEntries(headers.map((header, index) => [header, values[index] || ''])));
}

const stopWords = new Set(`
  the a an and or of to in on for from by with is are be been being this that these those
  you your company azure each correct answer answers question questions select appropriate area
  following statement statements otherwise note point points box solution use using used
`.trim().split(/\s+/));

function tokens(text) {
  return (text.toLowerCase().match(/[a-z][a-z0-9-]{2,}/g) || [])
    .filter(token => !stopWords.has(token));
}

function termFrequency(items) {
  const result = new Map();
  for (const item of items) result.set(item, (result.get(item) || 0) + 1);
  return result;
}

const csvPath = path.join(sourceDir, 'AZ900_Questions.csv');
const rows = parseCsv(fs.readFileSync(csvPath, 'utf8'));
const ocr = JSON.parse(fs.readFileSync(ocrPath, 'utf8'));

const rowTokens = rows.map(row => tokens([
  row['CÂU HỎI'],
  row['CÁC CÂU TRẢ LỜI'],
  row['ĐÁP ÁN ĐÚNG'],
  row['GIẢI THÍCH'],
].join(' ')));

const documentFrequency = new Map();
for (const items of rowTokens) {
  for (const token of new Set(items)) {
    documentFrequency.set(token, (documentFrequency.get(token) || 0) + 1);
  }
}

function vector(items) {
  const tf = termFrequency(items);
  const values = new Map();
  let magnitudeSquared = 0;
  for (const [token, count] of tf) {
    const idf = Math.log((rows.length + 1) / ((documentFrequency.get(token) || 0) + 1)) + 1;
    const value = (1 + Math.log(count)) * idf;
    values.set(token, value);
    magnitudeSquared += value * value;
  }
  return { values, magnitude: Math.sqrt(magnitudeSquared) };
}

const rowVectors = rowTokens.map(vector);

function similarity(left, right) {
  if (!left.magnitude || !right.magnitude) return 0;
  let dot = 0;
  const [smaller, larger] = left.values.size < right.values.size
    ? [left.values, right.values]
    : [right.values, left.values];
  for (const [token, value] of smaller) {
    dot += value * (larger.get(token) || 0);
  }
  return dot / (left.magnitude * right.magnitude);
}

const imageMatches = ocr.records.map(image => {
  const imageVector = vector(tokens(image.text));
  const matches = rows.map((row, index) => ({
    stt: row.STT,
    type: row['LOẠI'],
    score: Number(similarity(imageVector, rowVectors[index]).toFixed(4)),
    question: row['CÂU HỎI'].replace(/\s+/g, ' ').trim().slice(0, 180),
  })).sort((a, b) => b.score - a.score).slice(0, 30);

  return {
    representative: image.representative,
    files: image.files,
    text: image.text,
    matches,
    margin: Number(((matches[0]?.score || 0) - (matches[1]?.score || 0)).toFixed(4)),
  };
});

fs.writeFileSync(outputPath, JSON.stringify({ rows: rows.length, imageMatches }, null, 2));

const confident = imageMatches.filter(item => item.matches[0].score >= 0.25 && item.margin >= 0.03).length;
const low = imageMatches.filter(item => item.matches[0].score < 0.15).length;
console.log(JSON.stringify({
  rows: rows.length,
  images: imageMatches.length,
  confident,
  low,
  outputPath,
}, null, 2));

for (const file of ['36.png', '54.png', '81.png', '104.png']) {
  const item = imageMatches.find(match => match.files.includes(file));
  console.log(file, item?.matches.slice(0, 3));
}
