const fs = require('node:fs');
const path = require('node:path');

const projectDir = path.resolve(__dirname, '..');
const questionsPath = path.join(projectDir, 'src', 'data', 'az900_questions_import.json');
const outputPath = path.join(projectDir, 'src', 'data', 'az900_explanations_vi.json');
const questions = JSON.parse(fs.readFileSync(questionsPath, 'utf8'));
const existing = fs.existsSync(outputPath) ? JSON.parse(fs.readFileSync(outputPath, 'utf8')) : {};

const glossary = [
  'Microsoft Entra ID', 'Microsoft Defender for Cloud', 'Microsoft Sentinel', 'Microsoft Purview',
  'Microsoft Service Trust Portal', 'Microsoft Privacy Statement', 'Microsoft Azure', 'Microsoft Dynamics 365',
  'Azure Resource Manager', 'Azure Policy', 'Azure Blueprints', 'Azure Advisor', 'Azure Monitor',
  'Azure Service Health', 'Azure Marketplace', 'Azure Government', 'Azure App Service', 'Azure Functions',
  'Azure Container Instances', 'Azure Kubernetes Service', 'Azure Virtual Desktop', 'Azure Machine Learning',
  'Azure AI services', 'Azure Bot Service', 'Azure IoT Hub', 'Azure Sphere', 'Azure Synapse Analytics',
  'Azure Data Lake Analytics', 'Azure HDInsight', 'Azure SQL Database', 'Azure Cosmos DB', 'Azure Databricks',
  'Azure Storage', 'Azure Blob Storage', 'Azure Files', 'Azure Queue Storage', 'Azure Disk Storage',
  'Azure Key Vault', 'Azure Information Protection', 'Azure Activity Log', 'Azure Cloud Shell',
  'Azure PowerShell', 'Azure CLI', 'Azure Portal', 'Azure portal', 'Azure Firewall', 'Azure DDoS Protection',
  'Azure ExpressRoute', 'ExpressRoute', 'VPN Gateway', 'Application Insights', 'Log Analytics',
  'Service Trust Portal', 'Compliance Manager', 'Online Services Terms', 'Data Protection Addendum',
  'Infrastructure as a Service', 'Platform as a Service', 'Software as a Service',
  'Infrastructure as a service', 'Platform as a service', 'Software as a service',
  'Professional Direct', 'Premier', 'Developer', 'Standard', 'Basic',
  'IaaS', 'PaaS', 'SaaS', 'ARM', 'RBAC', 'MFA', 'SSO', 'GDPR', 'ISO', 'NIST',
  'LRS', 'ZRS', 'GRS', 'RA-GRS', 'RAG', 'JSON', 'SQL', 'HTTP', 'HTTPS', 'DNS', 'VPN', 'VNet', 'VM',
].sort((a, b) => b.length - a.length);

const escapeRegExp = value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function protectTerms(text) {
  const values = [];
  let protectedText = text;
  const protect = value => {
    const index = values.push(value) - 1;
    return `ZXQTERM${String(index).padStart(4, '0')}QXZ`;
  };

  // Protect code, URLs, identifiers, paths, and Microsoft product names from machine translation.
  protectedText = protectedText.replace(/`[^`]+`|https?:\/\/\S+|\$\.?[A-Za-z0-9_[\].]+|@[A-Za-z_][A-Za-z0-9_]*|\b[A-Z_][A-Z0-9_]{2,}\b|\b[A-Za-z_][A-Za-z0-9_]*\([^)]*\)/g, protect);
  for (const term of glossary) {
    protectedText = protectedText.replace(new RegExp(`\\b${escapeRegExp(term)}\\b`, 'g'), protect);
  }
  return { protectedText, values };
}

function restoreTerms(text, values) {
  let restored = text;
  values.forEach((value, index) => {
    const token = `ZXQTERM${String(index).padStart(4, '0')}QXZ`;
    restored = restored.replaceAll(token, value);
  });
  if (/ZXQTERM\d+QXZ/.test(restored)) throw new Error('A protected technical term could not be restored.');
  return cleanLocalized(restored);
}

function cleanLocalized(value) {
  return String(value || '')
    .replace(/https?:\/\/\S+/gi, '')
    .replace(/\S*%[0-9A-F]{2}\S*(?:\s+\S*%[0-9A-F]{2}\S*)*/gi, '')
    .replace(/\b(?:Cảm ơn bạn|Thank you)[\s\S]*$/i, '')
    .replace(/\bTôi rất vui khi biết[\s\S]*$/i, '')
    .replace(/\b(?:Vui lòng xem|Xem thêm|Tham khảo)\s*:\s*(?=[.;]|$)/gi, '')
    .replace(/tầng truy cập thú vị/gi, 'tầng truy cập Cool')
    .replace(/vai trò Người đọc/g, 'vai trò Reader')
    .replace(/Developer và tiêu chuẩn/g, 'Developer và Standard')
    .replace(/\s+([,.;:!?])/g, '$1')
    .replace(/(?:\s*[.;]){2,}/g, '.')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

async function translate(text, attempt = 1) {
  const { protectedText, values } = protectTerms(text);
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=vi&dt=t&q=${encodeURIComponent(protectedText)}`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    const translated = payload[0].map(segment => segment[0]).join('');
    return restoreTerms(translated, values);
  } catch (error) {
    if (attempt >= 4) throw error;
    await new Promise(resolve => setTimeout(resolve, attempt * 1200));
    return translate(text, attempt + 1);
  }
}

async function main() {
  const result = Object.fromEntries(Object.entries(existing).map(([id, explanation]) => [id, cleanLocalized(explanation)]));
  const pending = questions.filter(question => !result[question.id]);
  let cursor = 0;
  const worker = async () => {
    while (cursor < pending.length) {
      const question = pending[cursor];
      cursor += 1;
      result[question.id] = await translate(question.explanation);
      if (cursor % 20 === 0 || cursor === pending.length) {
        fs.writeFileSync(outputPath, `${JSON.stringify(result, null, 2)}\n`);
        process.stdout.write(`Translated ${Math.min(cursor, pending.length)}/${pending.length}\n`);
      }
    }
  };
  await Promise.all(Array.from({ length: Math.min(4, pending.length || 1) }, worker));
  fs.writeFileSync(outputPath, `${JSON.stringify(result, null, 2)}\n`);
  console.log(JSON.stringify({ questions: questions.length, localized: Object.keys(result).length }, null, 2));
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
