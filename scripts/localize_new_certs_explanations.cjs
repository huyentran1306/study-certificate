const fs = require('fs');
const path = require('path');

const projectDir = path.resolve(__dirname, '..');
const cachePath = path.join(__dirname, 'explanations_vi_cache.json');
const cache = fs.existsSync(cachePath) ? JSON.parse(fs.readFileSync(cachePath, 'utf8')) : {};

// Comprehensive technical glossary to protect from awkward machine translation
const glossary = [
  'Microsoft Copilot Studio', 'Copilot Studio', 'Microsoft Foundry', 'Foundry Agent Service',
  'Azure OpenAI Service', 'Azure OpenAI', 'Prompt Shields', 'Spotlighting', 'Document Intelligence',
  'Azure AI Search', 'Azure Cognitive Search', 'Azure Machine Learning', 'Azure AI services',
  'Azure Cosmos DB', 'Azure Blob Storage', 'Azure Files', 'Azure Queue Storage', 'Azure Table Storage',
  'Azure Disk Storage', 'Azure NetApp Files', 'Azure Data Lake Storage Gen2', 'Azure Data Lake Storage',
  'Azure SQL Database', 'Azure SQL Managed Instance', 'SQL Server', 'Azure Synapse Analytics',
  'Azure Databricks', 'Azure Data Factory', 'Azure Stream Analytics', 'Azure Event Hubs',
  'Azure Event Grid', 'Azure Service Bus', 'Azure Functions', 'Azure App Service',
  'Azure Container Apps', 'Azure Container Instances', 'Azure Kubernetes Service', 'AKS',
  'Azure Virtual Machines', 'Azure Virtual Machine', 'Azure Virtual Desktop',
  'Azure Virtual Network', 'Azure Key Vault', 'Azure Bastion', 'Azure Firewall',
  'Azure DDoS Protection', 'Azure Front Door', 'Azure Application Gateway', 'Azure Traffic Manager',
  'Azure ExpressRoute', 'VPN Gateway', 'Azure Monitor', 'Application Insights', 'Log Analytics',
  'Azure Sentinel', 'Microsoft Sentinel', 'Microsoft Defender for Cloud', 'Microsoft Purview',
  'Microsoft Entra ID', 'Entra ID', 'Active Directory', 'Managed Identity', 'Service Principal',
  'Private Endpoint', 'Private Link', 'Service Endpoint', 'Virtual Network Peering', 'VNet Peering',
  'Availability Zones', 'Availability Zone', 'Availability Sets', 'Availability Set',
  'Recovery Services Vault', 'Azure Backup', 'Azure Site Recovery',
  'Self-hosted Integration Runtime', 'Integration Runtime',
  'Copy Activity', 'Mapping Data Flow', 'Data Flow',
  'DirectQuery', 'Import mode', 'Dual mode', 'Power BI', 'Microsoft Fabric', 'OneLake',
  'Delta Lake', 'Lakehouse', 'Warehouse', 'Medallion Architecture', 'Bronze layer', 'Silver layer', 'Gold layer',
  'Geo-redundant storage', 'Locally redundant storage', 'Zone-redundant storage',
  'LRS', 'ZRS', 'GRS', 'GZRS', 'RA-GRS', 'RA-GZRS',
  'Hot tier', 'Cool tier', 'Cold tier', 'Archive tier',
  'LangChain', 'Semantic Kernel', 'OpenTelemetry', 'Vector Search', 'RAG',
  'Fine-tuning', 'LoRA', 'Grounding', 'Prompt Engineering', 'Prompt Injection',
  'Role-Based Access Control', 'RBAC', 'Access Control List', 'ACL',
  'System-assigned managed identity', 'User-assigned managed identity',
  'Option A', 'Option B', 'Option C', 'Option D', 'Option E', 'Option F',
  'Statement 1', 'Statement 2', 'Statement 3', 'Statement 4',
  'Box 1', 'Box 2', 'Box 3', 'Box 4',
  'liveness probe', 'readiness probe', 'initialDelaySeconds',
  'manifest digest', 'content harm', 'defect rate',
  'Yes', 'No'
].sort((a, b) => b.length - a.length);

const escapeRegExp = value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function protectTerms(text) {
  const values = [];
  let protectedText = text;
  const protect = value => {
    const index = values.push(value) - 1;
    return `ZXQTERM${String(index).padStart(4, '0')}QXZ`;
  };

  // Protect code in backticks, Markdown links, URLs, and identifiers
  protectedText = protectedText.replace(/`[^`]+`/g, protect);
  protectedText = protectedText.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, protect);
  protectedText = protectedText.replace(/https?:\/\/[^\s)\]]+/g, protect);

  for (const term of glossary) {
    protectedText = protectedText.replace(new RegExp(`\\b${escapeRegExp(term)}\\b`, 'gi'), protect);
  }

  return { protectedText, values };
}

function restoreTerms(text, values) {
  let restored = text;
  values.forEach((value, index) => {
    const token = `ZXQTERM${String(index).padStart(4, '0')}QXZ`;
    restored = restored.replaceAll(token, value);
  });
  return cleanLocalized(restored);
}

function cleanLocalized(value) {
  return String(value || '')
    .replace(/\b(?:Cảm ơn bạn|Thank you)[\s\S]*$/i, '')
    .replace(/\s+([,.;:!?])/g, '$1')
    .replace(/(?:\s*[.;]){2,}/g, '.')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

/**
 * Splits an explanation into the main narrative and trailing references (links).
 */
function splitExplanation(explanation) {
  if (!explanation) return { body: '', refBlock: '' };

  // Match "**Learn more:** ...", "**References:** ...", "**Tài liệu tham khảo:** ...", or standalone links at bottom
  const refRegex = /\n\n(?:\*\*(?:Learn more|References|Tài liệu tham khảo):?\*\*|\[.+?\]\(https?:\/\/)([\s\S]*)$/i;
  const match = explanation.match(refRegex);

  if (match) {
    const body = explanation.slice(0, match.index).trim();
    let refContent = explanation.slice(match.index).trim();

    // Standardize reference header to Vietnamese
    refContent = refContent
      .replace(/^\*\*(?:Learn more|References|Tài liệu tham khảo):?\*\*\s*/i, '')
      .trim();

    const formattedRefs = `\n\n**Tài liệu tham khảo:**\n${refContent}`;
    return { body, refBlock: formattedRefs };
  }

  return { body: explanation.trim(), refBlock: '' };
}

async function translateText(text, attempt = 1) {
  if (!text || !text.trim()) return '';

  const { protectedText, values } = protectTerms(text);
  const endpoints = [
    `https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl=en&tl=vi&q=${encodeURIComponent(protectedText)}`,
    `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=vi&dt=t&q=${encodeURIComponent(protectedText)}`
  ];
  const url = endpoints[(attempt - 1) % endpoints.length];

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    let translated = '';
    if (typeof payload[0] === 'string') {
      translated = payload[0];
    } else if (Array.isArray(payload[0])) {
      translated = payload[0].map(segment => segment[0]).join('');
    }
    if (!translated) throw new Error('Empty translation received');
    return restoreTerms(translated, values);
  } catch (error) {
    if (attempt >= 5) {
      console.warn(`Translation failed after ${attempt} attempts: ${error.message}`);
      return ''; // Do not fallback to English
    }
    const delay = error.message.includes('429') ? 8000 : attempt * 1200;
    await new Promise(resolve => setTimeout(resolve, delay));
    return translateText(text, attempt + 1);
  }
}

async function translateExplanation(rawExplanation) {
  if (!rawExplanation) return '';

  const { body, refBlock } = splitExplanation(rawExplanation);
  if (!body) return refBlock ? refBlock.trim() : '';

  const translatedBody = await translateText(body);
  return refBlock ? `${translatedBody}${refBlock}` : translatedBody;
}

module.exports = {
  translateExplanation,
  cache,
  cachePath,
  saveCache: () => fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2))
};
