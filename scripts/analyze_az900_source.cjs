const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const { createWorker } = require('tesseract.js');

const sourceDir = process.argv[2];
const outputPath = process.argv[3] || path.join(os.tmpdir(), 'az900_image_ocr.json');

if (!sourceDir || !fs.existsSync(sourceDir)) {
  throw new Error('Usage: node analyze_az900_source.cjs <source-dir> [output-json]');
}

const imageDir = path.join(sourceDir, 'images');
const imageFiles = fs.readdirSync(imageDir)
  .filter(file => /\.png$/i.test(file))
  .sort((a, b) => Number.parseInt(a, 10) - Number.parseInt(b, 10));

const hashToFiles = new Map();
for (const file of imageFiles) {
  const bytes = fs.readFileSync(path.join(imageDir, file));
  const hash = crypto.createHash('sha256').update(bytes).digest('hex');
  const files = hashToFiles.get(hash) || [];
  files.push(file);
  hashToFiles.set(hash, files);
}

(async () => {
  const worker = await createWorker('eng');
  const uniqueImages = [...hashToFiles.entries()];
  const records = [];

  for (let index = 0; index < uniqueImages.length; index += 1) {
    const [hash, files] = uniqueImages[index];
    const representative = files[0];
    const { data } = await worker.recognize(
      path.join(imageDir, representative),
      {},
      { blocks: true }
    );
    const lines = (data.blocks || []).flatMap(block =>
      (block.paragraphs || []).flatMap(paragraph =>
        (paragraph.lines || []).map(line => ({
          text: line.text.replace(/\s+/g, ' ').trim(),
          confidence: line.confidence,
          bbox: line.bbox,
        }))
      )
    ).filter(line => line.text);
    records.push({
      hash,
      files,
      representative,
      text: data.text.replace(/\r/g, '').trim(),
      lines,
    });

    if ((index + 1) % 10 === 0 || index + 1 === uniqueImages.length) {
      console.log(`OCR ${index + 1}/${uniqueImages.length}`);
    }
  }

  await worker.terminate();
  fs.writeFileSync(outputPath, JSON.stringify({
    sourceDir,
    imageCount: imageFiles.length,
    uniqueImageCount: uniqueImages.length,
    records,
  }, null, 2));
  console.log(`Wrote ${outputPath}`);
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
