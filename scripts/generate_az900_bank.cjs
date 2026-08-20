const fs = require('node:fs');
const path = require('node:path');

const sourceDir = process.argv[2];
const ocrPath = process.argv[3];
const matchesPath = process.argv[4];
const projectDir = path.resolve(__dirname, '..');

if (!sourceDir || !ocrPath || !matchesPath) {
  throw new Error('Usage: node generate_az900_bank.cjs <source-dir> <ocr-json> <matches-json>');
}

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
  return rows.filter(values => values.some(Boolean)).map(values =>
    Object.fromEntries(headers.map((header, index) => [header, values[index] || '']))
  );
}

const normalizeSpace = value => String(value || '').replace(/\s+/g, ' ').trim();
const normalizeKey = value => normalizeSpace(value).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const normalizeAzureTerms = value => normalizeSpace(value)
  .replace(/\b(?:1|l)aaS\b/g, 'IaaS')
  .replace(/\bPaaS\b/gi, 'PaaS')
  .replace(/\bSaaS\b/gi, 'SaaS');

function parseOptions(value) {
  return String(value || '').split(/\s*\|\s*/).map(item => item.trim()).filter(Boolean).map((item, index) => {
    const match = item.match(/^([A-Z])\s*[.)-]\s*(.+)$/s);
    return match
      ? { key: match[1], text: normalizeAzureTerms(match[2]) }
      : { key: String.fromCharCode(65 + index), text: normalizeAzureTerms(item) };
  });
}

function parseChoiceAnswers(value, options) {
  const text = normalizeSpace(value).toUpperCase();
  const keys = options.map(option => option.key);
  if (!text || /XEM GIẢI THÍCH/.test(text)) return [];
  if (/^[A-F](?:[\s,;/+-]*[A-F])*$/.test(text)) {
    return [...new Set(text.match(/[A-F]/g) || [])].filter(key => keys.includes(key));
  }
  return keys.filter(key => new RegExp(`(?:^|[^A-Z])${key}(?:[^A-Z]|$)`).test(text));
}

function parseYesNoAnswers(row, expectedCount = 0) {
  const direct = String(row['ĐÁP ÁN ĐÚNG'] || '').match(/\b(?:YES|NO)\b/gi) || [];
  if (direct.length) return direct.map(value => /^yes$/i.test(value) ? 'Yes' : 'No');
  const explanation = String(row['GIẢI THÍCH'] || '');
  const boxes = [...explanation.matchAll(/Box\s*\d+\s*:\s*(Yes|No)\b/gi)]
    .map(match => /^yes$/i.test(match[1]) ? 'Yes' : 'No');
  if (boxes.length) return boxes;
  const leading = explanation.slice(0, 80).match(/\b(?:YES|NO)\b/gi) || [];
  const answers = leading.map(value => /^yes$/i.test(value) ? 'Yes' : 'No');
  return expectedCount ? answers.slice(0, expectedCount) : answers;
}

function cleanExplanation(value) {
  let text = normalizeSpace(value)
    .replace(/\$\\rightarrow\$/g, '→')
    .replace(/\bAzure Active Directory \(Azure AD\)/gi, 'Microsoft Entra ID (formerly Azure AD)')
    .replace(/\bAzure AD\b/g, 'Microsoft Entra ID')
    .replace(/\s+(?:Incorrect Answers?|References?)\s*:[\s\S]*$/i, '')
    .replace(/>{3,}/g, ' ');
  if (!text) text = 'Review the selected answer against the relevant Microsoft Azure concept and service responsibility.';
  if (text.length > 900) {
    const shortened = text.slice(0, 900);
    const sentenceEnd = Math.max(shortened.lastIndexOf('.'), shortened.lastIndexOf('!'), shortened.lastIndexOf('?'));
    text = sentenceEnd >= 120 ? shortened.slice(0, sentenceEnd + 1) : `${shortened.trim()}…`;
  } else if (!/[.!?)]$/.test(text)) {
    const sentenceEnd = Math.max(text.lastIndexOf('.'), text.lastIndexOf('!'), text.lastIndexOf('?'));
    if (sentenceEnd >= 80) text = text.slice(0, sentenceEnd + 1);
  }
  return text;
}

function categoryAndTags(row, extraText = '') {
  const text = normalizeKey([
    row['CÂU HỎI'], row['CÁC CÂU TRẢ LỜI'], row['GIẢI THÍCH'], extraText,
  ].join(' '));
  const tags = ['AZ-900'];
  let category = 'Azure Architecture and Services';

  const add = (tag, pattern) => {
    if (pattern.test(text) && !tags.includes(tag)) tags.push(tag);
  };

  if (/cloud model|public cloud|private cloud|hybrid cloud|iaas|paas|saas|capex|opex|consumption|pay as you go|scalab|elastic|agility|fault tolerance|high availability|shared responsibility|serverless/.test(text)) {
    category = 'Cloud Concepts';
  } else if (/pricing|cost management|calculator|service health|advisor|monitor|log analytics|application insights|policy|resource lock|purview|compliance|governance|tag\b|cloud shell|powershell|azure cli|resource manager|arm template|azure arc/.test(text)) {
    category = 'Azure Management and Governance';
  }

  add('Cloud Models', /public cloud|private cloud|hybrid cloud/);
  add('Cloud Service Models', /iaas|paas|saas|infrastructure as a service|platform as a service|software as a service/);
  add('Cloud Benefits', /scalab|elastic|agility|fault tolerance|high availability|reliability|predictability/);
  add('Compute', /virtual machine|vm\b|container|function|app service|virtual desktop|scale set/);
  add('Networking', /virtual network|vnet|subnet|vpn|expressroute|dns|network security group|nsg|endpoint/);
  add('Storage', /storage|blob|file sync|azcopy|data box|redundan|lrs|grs|zrs|archive tier|hot tier|cool tier/);
  add('Identity and Security', /entra|active directory|rbac|multifactor|mfa|conditional access|zero trust|defender for cloud|security center/);
  add('Architecture', /region|availability zone|datacenter|resource group|subscription|management group/);
  add('Cost Management', /pricing|cost|calculator|capex|opex|reservation|pay as you go/);
  add('Governance', /policy|resource lock|purview|compliance|governance|tag\b/);
  add('Management Tools', /portal|cloud shell|powershell|azure cli|resource manager|arm template|azure arc/);
  add('Monitoring', /service health|advisor|monitor|log analytics|application insights|alert/);
  return { category, tags: tags.slice(0, 4) };
}

function classifyImage(image) {
  const text = image.text.toLowerCase();
  if (/statements/.test(text) && /\byes\b/.test(text) && /\bno\b/.test(text)) return 'matrix';
  if (/benefits|descriptions|requirements|cloud models|services/.test(text) && image.lines.length >= 5) return 'matching';
  if (image.lines.length >= 3) return 'dropdown';
  return 'diagram';
}

function compatibility(kind, type) {
  if (kind === 'matrix') return type === 'Yes/No' ? 0.45 : type === 'Hình ảnh' ? 0.05 : -0.3;
  if (kind === 'matching') return type === 'Drag Drop' ? 0.3 : type === 'Hình ảnh' ? 0.12 : 0;
  if (kind === 'dropdown') return type === 'Hình ảnh' ? 0.25 : type === 'Drag Drop' ? 0.08 : 0;
  return type === 'Hình ảnh' ? 0.12 : 0.05;
}

function proximityBonus(imageFiles, stt) {
  const rowNumber = Number.parseInt(stt, 10);
  if (!Number.isFinite(rowNumber)) return 0;
  const distance = Math.min(...imageFiles
    .map(file => Number.parseInt(file, 10))
    .filter(Number.isFinite)
    .map(imageNumber => Math.abs(imageNumber - rowNumber)));
  if (distance === 0) return 0.35;
  if (distance === 1) return 0.3;
  if (distance === 2) return 0.22;
  if (distance <= 5) return 0.08;
  return 0;
}

function cleanOcrLine(text) {
  return normalizeSpace(text)
    .replace(/\bexponditure\b/gi, 'expenditure')
    .replace(/\b(?:1|l)aaS\b/g, 'IaaS')
    .replace(/\bSaas\b/g, 'SaaS')
    .replace(/\bitsown\b/gi, 'its own')
    .replace(/\s+(?:fo\)|fe\)|\[?e?o\]?|[a-z]\s+[zzi])(?:\s+|$)/gi, ' ')
    .replace(/\s+(?:[@©®O0|\[\](){}~]+\s*)+$/g, '')
    .replace(/^[^A-Za-z0-9]+|[^A-Za-z0-9.)]+$/g, '')
    .trim();
}

function makeManualMatrix(statements, answers, explanation, category, tags) {
  const structured = statements.map((text, index) => ({ id: String(index + 1), text, correctAnswer: answers[index] }));
  return {
    text: 'For each statement, select Yes if it is true. Otherwise, select No.',
    questionType: 'statement_matrix', statements: structured, options: [],
    correctAnswers: structured.map(statement => `${statement.id}:${statement.correctAnswer}`),
    explanation, category, tags: ['AZ-900', ...tags],
  };
}

function makeManualDropdown(statement, choices, answer, explanation, category, tags) {
  const options = choices.map((text, index) => ({ key: String.fromCharCode(65 + index), text }));
  const correct = options.find(option => option.text === answer);
  return {
    text: 'Select the answer that correctly completes the sentence.',
    questionType: 'matching_dropdown',
    statements: [{ id: '1', text: statement, correctAnswer: correct.key }],
    choices: options, options, correctAnswers: [`1=${correct.key}`], explanation, category,
    tags: ['AZ-900', ...tags],
  };
}

function makeManualMatching(text, choices, mappings, explanation, category, tags) {
  const options = choices.map((choice, index) => ({ key: String.fromCharCode(65 + index), text: choice }));
  const statements = mappings.map((mapping, index) => ({
    id: String(index + 1), text: mapping.description,
    correctAnswer: options.find(option => option.text === mapping.answer).key,
  }));
  return {
    text, questionType: 'matching_drag_drop', statements, choices: options, options,
    correctAnswers: statements.map(statement => `${statement.id}=${statement.correctAnswer}`),
    explanation, category, tags: ['AZ-900', ...tags],
  };
}

function makeManualChoice(text, optionTexts, correctIndex, explanation, category, tags) {
  const options = optionTexts.map((option, index) => ({ key: String.fromCharCode(65 + index), text: option }));
  return {
    text, questionType: 'multiple_choice', options, correctAnswers: [options[correctIndex].key],
    explanation, category, tags: ['AZ-900', ...tags],
  };
}

function makeManualHotspot(text, areas, correctIndex, explanation, category, tags) {
  const options = areas.map((area, index) => ({
    key: String.fromCharCode(65 + index),
    text: area.text,
    hotspot: { x: area.x, y: area.y, width: area.width, height: area.height },
  }));
  return {
    text, questionType: 'image_hotspot', options, correctAnswers: [options[correctIndex].key],
    explanation, category, tags: ['AZ-900', ...tags],
  };
}

function manualImageQuestion(representative, row) {
  const matrices = {
    '281.png': () => makeManualMatrix([
      'Microsoft Entra ID can be used to manage access to on-premises applications.',
      'Microsoft Entra ID provides single sign-on (SSO).',
      'iOS devices can be registered in Microsoft Entra ID.',
    ], ['Yes', 'Yes', 'Yes'], 'All three statements are true. Microsoft Entra ID supports access to published on-premises applications, single sign-on, and device registration for supported mobile platforms.', 'Azure Architecture and Services', ['Identity and Security']),
    '291.png': () => makeManualMatrix([
      'The Microsoft Service Trust Portal can be accessed by using a Microsoft cloud services account.',
      "Compliance Manager can be used to track an organization's regulatory compliance activities related to Microsoft cloud services.",
      'The My Library feature can be used to save Service Trust Portal documents and resources in one location.',
    ], ['Yes', 'Yes', 'Yes'], 'All three statements are true. The Service Trust Portal provides authenticated access to compliance resources, Compliance Manager tracks improvement actions, and My Library organizes saved content.', 'Azure Management and Governance', ['Governance']),
    '296.png': () => makeManualMatrix([
      'You can create Group Policies in Microsoft Entra ID.',
      'You can join Windows 10 devices to Microsoft Entra ID.',
      'You can join Android devices to Microsoft Entra ID.',
    ], ['No', 'Yes', 'No'], 'Traditional Group Policy is an on-premises Active Directory capability. Windows devices can be Microsoft Entra joined, while Android devices are registered and managed rather than Microsoft Entra joined.', 'Azure Architecture and Services', ['Identity and Security']),
    '299.png': () => makeManualMatrix([
      'The General Data Protection Regulation (GDPR) defines data protection and privacy rules.',
      'The GDPR applies to organizations that offer goods or services to individuals in the European Union.',
      'Azure services can be used to build infrastructure that supports GDPR compliance requirements.',
    ], ['Yes', 'Yes', 'Yes'], 'All three statements are true. GDPR establishes privacy requirements, has extraterritorial scope for organizations serving people in the EU, and Azure provides services and compliance capabilities that help customers meet their obligations.', 'Azure Management and Governance', ['Governance']),
    '329.png': () => makeManualMatrix([
      'The Azure portal identifies whether a service is generally available or in public preview.',
      'A service in general availability is no longer updated with new features.',
      'Resources created with a service in public preview must always be recreated when the service becomes generally available.',
    ], ['Yes', 'No', 'No'], 'The Azure portal labels preview services. General availability does not end feature development, and preview resources do not universally require recreation when a service reaches general availability.', 'Azure Management and Governance', ['Management Tools']),
    '349.png': () => makeManualMatrix([
      'A company has complete control of the resources and security for its private cloud.',
      'A hybrid cloud solution enables a company to control whether its applications run on-premises or in the cloud.',
      'Companies are responsible for capital expenditure when they scale up a virtual machine hosted in a public cloud.',
    ], ['Yes', 'Yes', 'No'], 'A private cloud gives the organization control over its environment, and a hybrid model provides placement flexibility. Scaling a public-cloud virtual machine is normally an operational, consumption-based expense rather than a capital purchase.', 'Cloud Concepts', ['Cloud Models', 'Cost Management']),
    '352.png': () => makeManualMatrix([
      'A company has complete control of the resources and security for its private cloud.',
      'A hybrid cloud solution enables a company to control whether its applications run on-premises or in the cloud.',
      'Companies are responsible for capital expenditure when they scale up a virtual machine hosted in a public cloud.',
    ], ['Yes', 'Yes', 'No'], 'A private cloud gives the organization control over its environment, and a hybrid model provides placement flexibility. Scaling a public-cloud virtual machine is normally an operational, consumption-based expense rather than a capital purchase.', 'Cloud Concepts', ['Cloud Models', 'Cost Management']),
    '397.png': () => makeManualMatrix([
      'Premium storage accounts can be configured as Azure file shares.',
      'Premium storage accounts can be configured as block blob storage.',
      'Premium storage accounts can be configured as general-purpose StorageV2 accounts.',
    ], ['Yes', 'Yes', 'No'], 'Premium Azure Files uses FileStorage accounts and premium block blobs use BlockBlobStorage accounts. General-purpose StorageV2 accounts use the standard performance tier, so they are not configured as premium accounts.', 'Azure Architecture and Services', ['Storage']),
    '124.png': () => makeManualMatrix([
      'A Windows Virtual Desktop session host can run Windows 10 only.',
      'A Windows Virtual Desktop host pool that includes 20 session hosts supports a maximum of 20 simultaneous user connections.',
      'Windows Virtual Desktop supports desktop and application virtualization.',
    ], ['No', 'No', 'Yes'], 'A session host can run supported Windows client or Windows Server operating systems, so it is not limited to Windows 10. A host pool can support many sessions per host according to its configuration and capacity. Windows Virtual Desktop supports both full desktop and RemoteApp virtualization.', 'Azure Architecture and Services', ['Compute']),
    '126.png': () => makeManualMatrix([
      'An Azure subscription can have multiple account administrators.',
      'An Azure subscription can be managed only by using a Microsoft account.',
      'An Azure resource group can contain resources from multiple Azure subscriptions.',
    ], ['No', 'No', 'No'], 'A subscription has one account administrator, although it can have additional service administrators and role assignments. Both personal Microsoft accounts and organizational Microsoft Entra accounts can manage Azure when authorized. A resource group belongs to one subscription and cannot contain resources from other subscriptions.', 'Azure Architecture and Services', ['Architecture', 'Identity and Security']),
    '447.png': () => makeManualMatrix([
      'In Platform as a Service (PaaS), updating the operating system is the customer’s responsibility.',
      'In Infrastructure as a Service (IaaS), controlling the virtual network is Microsoft’s responsibility.',
      'In Software as a Service (SaaS), identity and directory infrastructure management is a shared responsibility.',
    ], ['No', 'No', 'Yes'], 'In PaaS, Microsoft maintains the operating system. In IaaS, the customer controls its virtual networking configuration. Identity and directory responsibilities remain shared in SaaS.', 'Cloud Concepts', ['Cloud Service Models', 'Identity and Security']),
  };
  if (matrices[representative]) return matrices[representative]();

  if (representative === '1.png') {
    const question = makeManualMatching(normalizeSpace(row['CÂU HỎI']), ['Basic', 'Developer', 'Standard', 'Professional Direct', 'Premier'], [
      { description: 'Eligible technical support plan — 1 of 4', answer: 'Developer' },
      { description: 'Eligible technical support plan — 2 of 4', answer: 'Standard' },
      { description: 'Eligible technical support plan — 3 of 4', answer: 'Professional Direct' },
      { description: 'Eligible technical support plan — 4 of 4', answer: 'Premier' },
    ], 'Developer, Standard, Professional Direct, and Premier include technical support and allow technical support requests. Basic includes billing and subscription support but not technical support cases.', 'Azure Management and Governance', ['Management Tools']);
    question.omitImage = true;
    return question;
  }
  if (representative === '28.png') {
    const options = ['A United States government entity', 'A United States government contractor or eligible partner', 'A government entity from any country', 'A European government contractor'].map((text, index) => ({ key: String.fromCharCode(65 + index), text }));
    return {
      text: 'Which customer types are eligible to use Azure Government?', questionType: 'multiple_choice', options,
      correctAnswers: ['A', 'B'],
      explanation: 'Azure Government is intended for eligible United States federal, state, local, and tribal government entities and approved partners that handle government-controlled data. Eligibility is validated by Microsoft.',
      category: 'Azure Architecture and Services', tags: ['AZ-900', 'Architecture'],
    };
  }

  if (representative === '84.png') return makeManualDropdown('An Azure web app that queries an on-premises Microsoft SQL Server is an example of a ____ cloud.', ['hybrid', 'multi-vendor', 'private', 'public'], 'hybrid', 'The solution combines an Azure-hosted application with an on-premises database, so it spans public-cloud and private/on-premises resources and is a hybrid cloud.', 'Cloud Concepts', ['Cloud Models']);
  if (representative === '52.png') return makeManualDropdown('An Azure web app that queries an on-premises Microsoft SQL Server is an example of a ____ cloud.', ['hybrid', 'multi-vendor', 'private', 'public'], 'hybrid', 'The application spans Azure and an on-premises system, so the environment is a hybrid cloud.', 'Cloud Concepts', ['Cloud Models']);
  if (representative === '61.png') return makeManualMatrix([
    'A company can extend a private cloud by adding its own physical servers to the public cloud.',
    'To build a hybrid cloud, an organization deploys resources across private or on-premises infrastructure and a public cloud.',
    'A private cloud must be disconnected from the internet.',
  ], ['No', 'Yes', 'No'], 'A public cloud does not accept customer-owned physical servers. Hybrid cloud combines private/on-premises and public-cloud resources, while a private cloud can still have controlled internet connectivity.', 'Cloud Concepts', ['Cloud Models']);
  if (representative === '68.png') return makeManualDropdown('Azure Cosmos DB is an example of a ____ offering.', ['platform as a service (PaaS)', 'infrastructure as a service (IaaS)', 'serverless computing only', 'software as a service (SaaS)'], 'platform as a service (PaaS)', 'Azure Cosmos DB is a managed database platform: Microsoft manages the infrastructure and database service while customers manage their data and application usage.', 'Cloud Concepts', ['Cloud Service Models', 'Storage']);
  if (representative === '80.png') return makeManualMatrix([
    'You must own physical servers to use cloud computing.',
    'Internet or private network connectivity is required to access cloud computing services.',
    'Increasing cloud capacity is generally less capital-intensive than expanding an on-premises datacenter.',
  ], ['No', 'Yes', 'Yes'], 'Cloud consumers do not need to own the provider hardware, but they do need network connectivity. Consumption-based cloud scaling avoids purchasing and installing additional datacenter hardware.', 'Cloud Concepts', ['Cloud Benefits', 'Cost Management']);
  if (representative === '85.png') return makeManualDropdown('A Microsoft SQL Server database that is hosted in the cloud and has software updates managed by Azure is an example of ____.', ['disaster recovery as a service (DRaaS)', 'infrastructure as a service (IaaS)', 'platform as a service (PaaS)', 'software as a service (SaaS)'], 'platform as a service (PaaS)', 'A managed database service abstracts operating-system and database software maintenance while the customer manages data and application usage, which is the PaaS model.', 'Cloud Concepts', ['Cloud Service Models']);
  if (representative === '86.png') return makeManualDropdown('Autoscaling is an example of ____.', ['agility', 'elasticity', 'geo-distribution', 'predictability'], 'elasticity', 'Elasticity is the ability to automatically add or remove resources as demand changes. Autoscaling implements that behavior.', 'Cloud Concepts', ['Cloud Benefits']);
  if (representative === '109.png') return makeManualHotspot(normalizeSpace(row['CÂU HỎI']), [
    { text: 'Blob containers', x: 8.5, y: 17, width: 44, height: 38 },
    { text: 'Azure file shares', x: 54.2, y: 17, width: 44.2, height: 38 },
    { text: 'Azure Table Storage', x: 8.5, y: 59.3, width: 44, height: 38 },
    { text: 'Azure Queue Storage', x: 54.2, y: 59.3, width: 44.2, height: 38 },
  ], 0, 'Unmanaged Azure virtual machine disks are stored as page blobs in a blob container. Azure managed disks abstract the storage account from the user.', 'Azure Architecture and Services', ['Storage', 'Compute']);
  if (representative === '140.png') return makeManualDropdown('You have several virtual machines in an Azure subscription and create a new subscription. The virtual machines ____.', ['cannot be moved to the new subscription', 'can be moved to the new subscription', 'can be moved only when all are in one resource group', 'can be moved only if they run Windows Server'], 'can be moved to the new subscription', 'Supported Azure resources, including most virtual machines and their dependent resources, can be moved between subscriptions in the same Microsoft Entra tenant when move requirements are met.', 'Azure Management and Governance', ['Management Tools']);
  if (representative === '143.png') return makeManualDropdown('____ is a highly secure IoT solution that includes a microcontroller unit and a customized Linux operating system.', ['Azure Arc', 'Azure IoT Central', 'Azure IoT Hub', 'Azure Sphere'], 'Azure Sphere', 'Azure Sphere combines secured microcontroller hardware, the Azure Sphere OS, and cloud-based security services.', 'Azure Architecture and Services', ['Compute']);
  if (representative === '82.png') {
    const question = makeManualMatching('Select the appropriate cloud service model for each application.', ['Infrastructure as a Service (IaaS)', 'Platform as a Service (PaaS)', 'Software as a Service (SaaS)'], [
      { description: 'App1: You must be able to modify its code while minimizing operating-system administration.', answer: 'Platform as a Service (PaaS)' },
      { description: 'App2: The application must interact directly with the server operating system.', answer: 'Infrastructure as a Service (IaaS)' },
    ], 'PaaS lets developers modify application code while Microsoft manages the operating system. Direct operating-system interaction requires the control provided by IaaS.', 'Cloud Concepts', ['Cloud Service Models']);
    question.questionType = 'matching_dropdown';
    return question;
  }
  if (representative === '306.png') return makeManualDropdown('____ is the process of establishing the identity of a user or service that wants to access a resource.', ['Authentication', 'Authorization', 'Conditional Access', 'Synchronization'], 'Authentication', 'Authentication verifies who a user or service is. Authorization determines what an authenticated identity is allowed to access.', 'Azure Architecture and Services', ['Identity and Security']);

  if (representative === '81.png') return makeManualMatching('Match the cloud computing benefits to the appropriate descriptions.', ['Agility', 'Scalability', 'Geo-distribution'], [
    { description: 'Resources can be provisioned dynamically to meet changing demands.', answer: 'Scalability' },
    { description: 'Applications and data can be deployed to multiple regions.', answer: 'Geo-distribution' },
    { description: 'Applications can be developed, tested, and launched rapidly.', answer: 'Agility' },
  ], 'Scalability supports changing resource demand, geo-distribution places workloads in multiple regions, and agility enables rapid development and deployment.', 'Cloud Concepts', ['Cloud Benefits']);
  if (representative === '93.png') return makeManualMatching('Match the cloud computing benefits to the appropriate descriptions.', ['Disaster recovery', 'Geo-distribution', 'High availability', 'Scalability'], [
    { description: 'Increase the compute capacity of applications in the cloud.', answer: 'Scalability' },
    { description: 'Provide a continuous user experience with no apparent downtime.', answer: 'High availability' },
    { description: 'Deploy applications to regions close to users so they receive the best experience.', answer: 'Geo-distribution' },
  ], 'Scalability increases capacity, high availability minimizes downtime, and geo-distribution places workloads near users in multiple regions.', 'Cloud Concepts', ['Cloud Benefits']);
  if (representative === '161.png') return makeManualMatching('Arrange the storage redundancy options from least redundant to most redundant.', ['Locally-redundant storage (LRS)', 'Zone-redundant storage (ZRS)', 'Geo-redundant storage (GRS)'], [
    { description: 'Position 1 — least redundant', answer: 'Locally-redundant storage (LRS)' },
    { description: 'Position 2', answer: 'Zone-redundant storage (ZRS)' },
    { description: 'Position 3 — most redundant', answer: 'Geo-redundant storage (GRS)' },
  ], 'LRS keeps copies in one datacenter, ZRS distributes copies across availability zones in one region, and GRS replicates data to a secondary region.', 'Azure Architecture and Services', ['Storage']);
  if (representative === '168.png') return makeManualMatching('Match the Azure service to the correct definition.', ['Azure Advisor', 'Azure AI services', 'Application Insights', 'Azure DevOps'], [
    { description: 'An integrated solution for planning, developing, delivering, and operating code.', answer: 'Azure DevOps' },
    { description: 'A tool that provides guidance and recommendations to improve an Azure environment.', answer: 'Azure Advisor' },
    { description: 'Services and APIs used to build intelligent AI applications.', answer: 'Azure AI services' },
    { description: 'Monitors the performance and usage of web applications.', answer: 'Application Insights' },
  ], 'Azure DevOps supports the development lifecycle, Advisor recommends optimizations, Azure AI services provide prebuilt AI capabilities, and Application Insights provides application performance monitoring.', 'Azure Architecture and Services', ['Management Tools', 'Monitoring']);
  if (representative === '150.png') return makeManualMatching('Match the cloud service models to the appropriate solutions.', ['Infrastructure as a Service (IaaS)', 'Platform as a Service (PaaS)', 'Software as a Service (SaaS)'], [
    { description: 'A cloud-based file server', answer: 'Infrastructure as a Service (IaaS)' },
    { description: 'A cloud-based accounting system', answer: 'Software as a Service (SaaS)' },
    { description: 'A cloud-based service for custom apps', answer: 'Platform as a Service (PaaS)' },
  ], 'A file server normally requires control of a virtual machine (IaaS), a ready-to-use accounting application is SaaS, and a managed application hosting platform is PaaS.', 'Cloud Concepts', ['Cloud Service Models']);
  if (representative === '137.png') return makeManualMatching('Match the Azure governance feature to the correct description.', ['Azure Blueprints', 'Azure Policy', 'Azure resource locks', 'Azure tags'], [
    { description: 'Restrict which virtual machine types can be created in a subscription.', answer: 'Azure Policy' },
    { description: 'Identify Azure resources that are associated with specific cost centers.', answer: 'Azure tags' },
    { description: 'Deploy a complete Azure application environment, including resources, configuration, and role assignments.', answer: 'Azure Blueprints' },
  ], 'Azure Policy enforces resource rules, tags attach business metadata such as cost centers, and Azure Blueprints packages repeatable governance artifacts and deployments.', 'Azure Management and Governance', ['Governance']);
  if (representative === '149.png') return makeManualMatching('Match the cloud service models to the appropriate offerings.', ['Infrastructure as a Service (IaaS)', 'Platform as a Service (PaaS)', 'Software as a Service (SaaS)'], [
    { description: 'Azure App Service', answer: 'Platform as a Service (PaaS)' },
    { description: 'Azure virtual machines', answer: 'Infrastructure as a Service (IaaS)' },
    { description: 'Microsoft Dynamics 365', answer: 'Software as a Service (SaaS)' },
  ], 'App Service is a managed application platform (PaaS), virtual machines expose infrastructure control (IaaS), and Dynamics 365 is a complete hosted application (SaaS).', 'Cloud Concepts', ['Cloud Service Models']);
  if (representative === '169.png') return makeManualMatching('Match each Azure data service to the appropriate description.', ['Azure HDInsight', 'Azure Data Lake Analytics', 'Azure Synapse Analytics', 'Azure SQL Database'], [
    { description: 'A managed relational cloud database service.', answer: 'Azure SQL Database' },
    { description: 'A cloud analytics service that uses massively parallel processing to run complex relational queries across petabytes of data.', answer: 'Azure Synapse Analytics' },
    { description: 'Runs massively parallel data-transformation and processing programs across petabytes of data.', answer: 'Azure Data Lake Analytics' },
    { description: 'An open-source framework service for distributed processing and analysis of big-data sets in clusters.', answer: 'Azure HDInsight' },
  ], 'SQL Database is the managed relational database; Synapse provides MPP analytics; Data Lake Analytics runs large-scale processing jobs; and HDInsight hosts open-source big-data frameworks.', 'Azure Architecture and Services', ['Storage']);
  if (representative === '171.png') {
    const question = makeManualMatching('Select the appropriate Azure portal blade for each task.', ['Monitor', 'Subscriptions', 'Marketplace', 'Advisor'], [
      { description: 'Monitor the health of Azure services.', answer: 'Monitor' },
      { description: 'Browse available virtual machine images.', answer: 'Marketplace' },
      { description: 'View security and best-practice recommendations.', answer: 'Advisor' },
    ], 'Azure Monitor surfaces health and telemetry, Azure Marketplace contains available VM images, and Azure Advisor provides personalized recommendations.', 'Azure Management and Governance', ['Management Tools', 'Monitoring']);
    question.questionType = 'matching_dropdown';
    return question;
  }
  if (representative === '200.png') return makeManualHotspot(normalizeSpace(row['CÂU HỎI']), [
    { text: 'Overview', x: 0.9, y: 20.4, width: 21.5, height: 5.1 },
    { text: 'Activity log', x: 0.9, y: 25.5, width: 21.5, height: 4.7 },
    { text: 'Access control (IAM)', x: 0.9, y: 30.1, width: 21.5, height: 5.5 },
    { text: 'Tags', x: 0.9, y: 35.6, width: 21.5, height: 4.5 },
  ], 2, 'Role assignments for a resource-group scope are created from Access control (IAM). The Reader role grants read-only access to resources in that scope.', 'Azure Management and Governance', ['Identity and Security', 'Governance']);
  if (representative === '212.png') {
    const question = makeManualDropdown('____ is an Apache Spark-based analytics platform optimized for Azure.', ['Azure Databricks', 'Azure App Service', 'Azure Advisor', 'Azure Functions'], 'Azure Databricks', 'Azure Databricks is a managed Apache Spark-based analytics platform used for data engineering, analytics, and machine learning.', 'Azure Architecture and Services', ['Storage']);
    question.omitImage = true;
    return question;
  }
  if (representative === '219.png') return makeManualDropdown('From ____, you can identify which user stopped a specific virtual machine during the last 14 days.', ['Access control (IAM)', 'Azure Event Hubs', 'Azure Activity Log', 'Azure Service Health'], 'Azure Activity Log', 'The Azure Activity Log records subscription-level control-plane events, including who started, stopped, or modified a virtual machine. IAM manages permissions rather than historical operations.', 'Azure Management and Governance', ['Monitoring', 'Compute']);
  if (representative === '180.png') return makeManualMatching('Match the Azure services to the correct descriptions.', ['Azure Machine Learning', 'Azure Synapse Analytics', 'Azure IoT Hub', 'Azure Functions'], [
    { description: 'Provides a cloud-based enterprise data warehouse.', answer: 'Azure Synapse Analytics' },
    { description: 'Uses past training data to provide predictions with high probability.', answer: 'Azure Machine Learning' },
    { description: 'Provides serverless computing functionality.', answer: 'Azure Functions' },
    { description: 'Processes data from millions of sensors and devices.', answer: 'Azure IoT Hub' },
  ], 'Synapse supports enterprise analytics, Machine Learning trains predictive models, Functions runs event-driven serverless code, and IoT Hub connects and ingests data from large device fleets.', 'Azure Architecture and Services', ['Compute']);
  if (representative === '189.png') return makeManualMatching('Match the Azure service to the correct description.', ['Azure Machine Learning', 'Azure IoT Hub', 'Azure Bot Service', 'Azure Functions'], [
    { description: 'Provides a digital online assistant with speech support.', answer: 'Azure Bot Service' },
    { description: 'Uses past training data to provide predictions with high probability.', answer: 'Azure Machine Learning' },
    { description: 'Provides serverless computing functionality.', answer: 'Azure Functions' },
    { description: 'Processes data from millions of sensors and devices.', answer: 'Azure IoT Hub' },
  ], 'Bot Service supports conversational assistants, Machine Learning creates predictive models, Functions provides serverless execution, and IoT Hub handles device telemetry.', 'Azure Architecture and Services', ['Compute']);
  if (representative === '192.png') return makeManualMatching('Match the Azure compute services to the correct descriptions.', ['Azure Functions', 'Azure App Service', 'Azure virtual machines', 'Azure Container Instances'], [
    { description: 'Provides operating-system virtualization.', answer: 'Azure virtual machines' },
    { description: 'Provides a portable environment for virtualized applications.', answer: 'Azure Container Instances' },
    { description: 'Is used to build, deploy, and scale web apps.', answer: 'Azure App Service' },
    { description: 'Provides a platform for serverless code.', answer: 'Azure Functions' },
  ], 'Virtual machines virtualize operating systems, containers package portable applications, App Service hosts web apps, and Functions runs serverless code.', 'Azure Architecture and Services', ['Compute']);
  if (representative === '224.png') return makeManualMatching('Match the Azure security service to the correct description.', ['Microsoft Entra ID', 'Azure Key Vault', 'Azure Lighthouse', 'Microsoft Defender for Cloud', 'Microsoft Sentinel'], [
    { description: 'Analyzes security log files from Azure virtual machines.', answer: 'Microsoft Sentinel' },
    { description: 'Displays the secure score for an Azure subscription.', answer: 'Microsoft Defender for Cloud' },
    { description: 'Stores passwords and secrets for use by Azure Functions applications.', answer: 'Azure Key Vault' },
  ], 'Sentinel is the cloud-native SIEM for log analytics, Defender for Cloud reports secure score and posture recommendations, and Key Vault stores application secrets.', 'Azure Architecture and Services', ['Identity and Security', 'Monitoring']);
  if (representative === '227.png') return makeManualMatching('Complete the missing layers in the defense-in-depth model.', ['Perimeter', 'Application', 'Physical security'], [
    { description: 'Outermost layer, above Identity and access', answer: 'Physical security' },
    { description: 'Layer between Identity and access and Network', answer: 'Perimeter' },
    { description: 'Layer between Compute and Data', answer: 'Application' },
  ], 'The defense-in-depth layers from outermost to innermost are Physical security, Identity and access, Perimeter, Network, Compute, Application, and Data.', 'Azure Architecture and Services', ['Identity and Security']);
  if (representative === '243.png') return makeManualMatching('Match each identity term to the appropriate description.', ['Authorization', 'Multifactor authentication (MFA)', 'Single sign-on (SSO)'], [
    { description: 'Allows the same credentials to access multiple resources and applications.', answer: 'Single sign-on (SSO)' },
    { description: 'Determines the access level of a user or service.', answer: 'Authorization' },
    { description: 'Requires multiple verification factors to identify a user or service.', answer: 'Multifactor authentication (MFA)' },
  ], 'SSO reuses one authenticated identity across applications, authorization controls permissions, and MFA requires more than one verification factor.', 'Azure Architecture and Services', ['Identity and Security']);
  if (representative === '265.png') return makeManualDropdown('Your company implements ____ to automatically add a watermark to Microsoft Word documents that contain credit card information.', ['Azure Policy', 'Azure DDoS Protection', 'Azure Information Protection', 'Microsoft Entra ID Protection'], 'Azure Information Protection', 'Azure Information Protection can discover, classify, label, and protect sensitive documents, including applying visual markings such as watermarks.', 'Azure Architecture and Services', ['Identity and Security', 'Governance']);
  if (representative === '276.png') return makeManualHotspot(normalizeSpace(row['CÂU HỎI']), [
    { text: 'Quickstart', x: 18.8, y: 11.7, width: 69.2, height: 10.4 },
    { text: 'Deployments', x: 18.8, y: 37.2, width: 69.2, height: 10.4 },
    { text: 'Policies', x: 18.8, y: 50, width: 69.2, height: 10.4 },
    { text: 'Locks', x: 18.8, y: 75.1, width: 69.2, height: 10.4 },
  ], 3, 'Apply a CanNotDelete resource lock at the resource-group scope to prevent accidental deletion of the group and its resources.', 'Azure Management and Governance', ['Governance']);
  if (representative === '272.png') return makeManualMatching('Match each term to the correct definition.', ['Azure Government', 'GDPR', 'ISO', 'NIST'], [
    { description: 'An organization that defines international standards across industries.', answer: 'ISO' },
    { description: 'An organization that defines standards used by the United States government.', answer: 'NIST' },
    { description: 'A European regulation that governs data privacy and protection.', answer: 'GDPR' },
    { description: 'A dedicated public cloud for federal and state agencies in the United States.', answer: 'Azure Government' },
  ], 'ISO publishes international standards, NIST develops US standards and guidance, GDPR is the EU data-protection regulation, and Azure Government is the specialized US government cloud.', 'Azure Management and Governance', ['Governance']);
  if (representative === '287.png') return makeManualMatching('Match each Microsoft resource to the appropriate description.', ['Data Protection Addendum', 'Microsoft Privacy Statement', 'Online Services Terms'], [
    { description: 'Describes which personal data is collected, how the data is used, and what the data is used for.', answer: 'Microsoft Privacy Statement' },
    { description: 'A legal agreement detailing obligations between Microsoft and a customer regarding processing and security of customer and personal data.', answer: 'Online Services Terms' },
    { description: 'Defines data-processing and security terms for online services, including disclosure, transfer, retention, and deletion.', answer: 'Data Protection Addendum' },
  ], 'The Privacy Statement explains Microsoft data practices, the Online Services Terms define contractual service obligations, and the Data Protection Addendum provides detailed processing and security commitments.', 'Azure Management and Governance', ['Governance']);
  if (representative === '310.png') return makeManualDropdown('An Azure service is available to all Azure customers when it is in ____.', ['public preview', 'private preview', 'development', 'an Enterprise Agreement subscription'], 'public preview', 'Public preview features are available broadly for customer evaluation. Private preview access is restricted, while general availability is the production-ready release stage.', 'Azure Management and Governance', ['Management Tools']);
  if (representative === '317.png') return makeManualDropdown('After an Azure trial account expires, you are unable to ____.', ['create additional Microsoft Entra user accounts', 'start an existing Azure virtual machine', 'access data already stored in Azure', 'access the Azure portal'], 'start an existing Azure virtual machine', 'When the trial subscription is disabled, compute resources cannot be started. The portal remains accessible so the subscription can be upgraded, and identity objects are not charged as VM compute.', 'Azure Management and Governance', ['Cost Management', 'Compute']);
  if (representative === '387.png') return makeManualMatching('Match the Azure networking service to the appropriate description.', ['ExpressRoute', 'Virtual network peering', 'VPN gateway'], [
    { description: 'Extends on-premises networks to Microsoft cloud services through a private connection.', answer: 'ExpressRoute' },
    { description: 'Connects two or more Azure virtual networks so they communicate as one logical network.', answer: 'Virtual network peering' },
    { description: 'Provides an encrypted connection from an on-premises network to Azure over the public internet.', answer: 'VPN gateway' },
  ], 'ExpressRoute uses a private provider connection, virtual network peering connects VNets over the Azure backbone, and VPN Gateway encrypts traffic sent over the public internet.', 'Azure Architecture and Services', ['Networking']);
  if (representative === '393.png') return makeManualMatching('Match the Azure storage service to the appropriate description.', ['Azure Blob Storage', 'Azure Disk Storage', 'Azure Files', 'Azure Queue Storage'], [
    { description: 'Is used for reliable messaging between application components.', answer: 'Azure Queue Storage' },
    { description: 'Can be accessed as a network share from a Windows device.', answer: 'Azure Files' },
    { description: 'Can be configured to use the Archive access tier.', answer: 'Azure Blob Storage' },
  ], 'Queue Storage decouples applications with messages, Azure Files exposes SMB/NFS shares, and Blob Storage supports online and archive access tiers.', 'Azure Architecture and Services', ['Storage']);
  if (representative === '403.png') return makeManualHotspot(normalizeSpace(row['CÂU HỎI']), [
    { text: 'Create a resource', x: 7, y: 30.2, width: 7.2, height: 25.5 },
    { text: 'Subscriptions', x: 40.6, y: 30.2, width: 9.3, height: 25.5 },
    { text: 'Microsoft Entra ID', x: 51.8, y: 30.2, width: 9.9, height: 25.5 },
    { text: 'Resource groups', x: 7, y: 58.3, width: 7.6, height: 25.7 },
  ], 2, 'Create and manage tenant user identities in Microsoft Entra ID. After the identity exists, role-based access control can grant it access to a subscription.', 'Azure Architecture and Services', ['Identity and Security']);
  if (representative === '421.png') return makeManualDropdown('If Windows Server or Microsoft SQL Server licenses are covered by ____, you can repurpose the licenses on Azure virtual machines.', ['an End User License Agreement (EULA)', 'Microsoft Lifecycle Policy', 'Software Assurance'], 'Software Assurance', 'Azure Hybrid Benefit lets eligible customers use existing Windows Server and SQL Server licenses with active Software Assurance or qualifying subscriptions in Azure.', 'Azure Management and Governance', ['Cost Management']);
  if (representative === '426.png') return makeManualMatching('Match the cloud computing benefit to the appropriate requirement.', ['Agility', 'Elasticity', 'Disaster recovery'], [
    { description: 'Dynamically scale the resources available to a cloud application.', answer: 'Elasticity' },
    { description: 'Use cloud-based backups to restore resources after an outage.', answer: 'Disaster recovery' },
    { description: 'Quickly deploy and configure cloud resources as application requirements change.', answer: 'Agility' },
  ], 'Elasticity adjusts resources with demand, disaster recovery restores service after failure, and agility enables rapid deployment and change.', 'Cloud Concepts', ['Cloud Benefits']);
  if (representative === '344.png') return makeManualDropdown('To stop compute charges for an unused Azure virtual machine, you should ____.', ['disconnect the Remote Desktop session', 'put the virtual machine in sleep mode', 'select Stop for the virtual machine in the Azure portal', 'shut down Windows inside the Remote Desktop session'], 'select Stop for the virtual machine in the Azure portal', 'Stopping and deallocating the VM from Azure releases its compute allocation. Disconnecting or shutting down only inside the guest can leave the VM allocated and billable.', 'Azure Management and Governance', ['Cost Management', 'Compute']);
  if (representative === '372.png') return makeManualDropdown('____ can estimate savings from reduced electricity consumption when migrating on-premises Microsoft SQL Server workloads to Azure.', ['Azure Migrate: Server Assessment', 'Azure Total Cost of Ownership (TCO) calculator', 'Database Migration Assistant', 'Azure pricing calculator'], 'Azure Total Cost of Ownership (TCO) calculator', 'The TCO calculator compares estimated on-premises infrastructure costs, including power, with projected Azure costs.', 'Azure Management and Governance', ['Cost Management']);
  if (representative === '469.png') return makeManualMatching('Match each authentication method to its relative security and convenience level.', ['Multifactor authentication (MFA)', 'Password authentication', 'Passwordless authentication'], [
    { description: 'Higher security, less convenient', answer: 'Multifactor authentication (MFA)' },
    { description: 'Higher security, more convenient', answer: 'Passwordless authentication' },
    { description: 'Lower security, more convenient', answer: 'Password authentication' },
  ], 'MFA improves security but adds a verification step. Passwordless methods provide strong authentication with a streamlined experience, while passwords alone are comparatively weaker.', 'Azure Architecture and Services', ['Identity and Security']);
  if (representative === '466.png') return makeManualDropdown('You can use ____ to receive recommendations for reducing Azure costs.', ['Application Insights', 'Azure Advisor', 'Azure resource tags', 'Azure Service Health'], 'Azure Advisor', 'Azure Advisor analyzes resource configuration and usage and recommends improvements for cost, reliability, performance, security, and operational excellence.', 'Azure Management and Governance', ['Cost Management', 'Monitoring']);
  if (representative === '471.png') return makeManualDropdown('If you delete data from ____ before 30 days have elapsed, an early deletion charge applies.', ['Azure Cosmos DB', 'Azure SQL Database', 'the cool access tier of Azure Blob Storage', 'the hot access tier of Azure Blob Storage'], 'the cool access tier of Azure Blob Storage', 'Data in the Blob Storage cool tier has a minimum recommended retention period. Deleting or moving it earlier can incur an early-deletion charge.', 'Azure Architecture and Services', ['Storage', 'Cost Management']);
  if (representative === '473.png') return makeManualMatching('Match the cloud service model to the appropriate description.', ['Infrastructure as a Service (IaaS)', 'Platform as a Service (PaaS)', 'Software as a Service (SaaS)'], [
    { description: 'Provides the most control of a cloud environment.', answer: 'Infrastructure as a Service (IaaS)' },
    { description: 'Provides control of database design without requiring maintenance of the operating system.', answer: 'Platform as a Service (PaaS)' },
    { description: 'Is used to host Azure virtual machines.', answer: 'Infrastructure as a Service (IaaS)' },
  ], 'IaaS provides control over virtual machines and their operating systems. A managed database platform is PaaS because Microsoft maintains the underlying operating system.', 'Cloud Concepts', ['Cloud Service Models']);

  if (representative === '97.png') return makeManualHotspot(normalizeSpace(row['CÂU HỎI']), [
    { text: 'NAT gateways', x: 34.9, y: 16.8, width: 62, height: 8.5 },
    { text: 'Application gateways', x: 34.9, y: 27.2, width: 62, height: 8.5 },
    { text: 'Local network gateways', x: 34.9, y: 37.7, width: 62, height: 8.5 },
    { text: 'Virtual network gateways', x: 34.9, y: 48.1, width: 62, height: 8.5 },
  ], 2, 'A local network gateway represents the on-premises VPN device and its public IP address in Azure. A virtual network gateway is the Azure-side VPN endpoint.', 'Azure Architecture and Services', ['Networking']);
  if (representative === '112.png') return makeManualHotspot(normalizeSpace(row['CÂU HỎI']), [
    { text: 'Azure SQL Database', x: 51.5, y: 9.7, width: 47.5, height: 9 },
    { text: 'Azure Cosmos DB', x: 1.1, y: 9.7, width: 47.8, height: 9 },
    { text: 'Azure Database for MySQL', x: 1.1, y: 21, width: 47.8, height: 9 },
    { text: 'Azure Cache for Redis', x: 1.1, y: 54.5, width: 47.8, height: 9 },
  ], 1, 'Azure Cosmos DB is a globally distributed database that supports multi-region writes, low-latency access, and elastic scaling.', 'Azure Architecture and Services', ['Storage']);
  if (representative === '399.png') return makeManualHotspot(normalizeSpace(row['CÂU HỎI']), [
    { text: 'Resource groups', x: 4.1, y: 1.7, width: 88.2, height: 5.2 },
    { text: 'App Services', x: 4.1, y: 13.9, width: 88.2, height: 5.2 },
    { text: 'Storage accounts', x: 4.1, y: 50.4, width: 88.2, height: 5.2 },
    { text: 'Virtual networks', x: 4.1, y: 56.5, width: 88.2, height: 5.2 },
  ], 2, 'Azure file shares are created and managed within an Azure storage account.', 'Azure Architecture and Services', ['Storage', 'Management Tools']);
  return null;
}

function extractMatrixStatements(image, answerCount) {
  const maxX = Math.max(...image.lines.map(line => line.bbox.x1), 1);
  const header = image.lines.find(line => /statements/i.test(line.text));
  const headerY = header?.bbox.y1 || 0;
  const lines = image.lines
    .filter(line => line.bbox.y0 > headerY && line.bbox.x0 < maxX * 0.7 && line.confidence >= 35)
    .map(line => ({ ...line, text: cleanOcrLine(line.text) }))
    .filter(line => (line.text.match(/[A-Za-z]/g) || []).length >= 3)
    .sort((a, b) => a.bbox.y0 - b.bbox.y0);

  if (!lines.length || !answerCount) return [];
  const gaps = lines.slice(0, -1).map((line, index) => ({
    index,
    gap: lines[index + 1].bbox.y0 - line.bbox.y1,
  })).sort((a, b) => b.gap - a.gap);
  const splits = new Set(gaps.slice(0, Math.max(0, answerCount - 1)).map(item => item.index));
  const groups = [];
  let current = [];
  lines.forEach((line, index) => {
    current.push(line.text);
    if (splits.has(index) || index === lines.length - 1) {
      groups.push(normalizeSpace(current.join(' ')));
      current = [];
    }
  });
  return groups.slice(0, answerCount);
}

function makeMatrixQuestion(row, image) {
  const answers = parseYesNoAnswers(row);
  let texts = extractMatrixStatements(image, answers.length);
  if (texts.length !== answers.length) {
    texts = answers.map((_, index) => `Statement ${index + 1} shown in the answer-area image.`);
  }
  const statements = texts.map((text, index) => ({ id: String(index + 1), text, correctAnswer: answers[index] }));
  const answerSummary = statements.map(statement => `${statement.id}: ${statement.correctAnswer}`).join('; ');
  const { category, tags } = categoryAndTags(row, image.text);
  return {
    text: 'For each statement, select Yes if it is true. Otherwise, select No.',
    questionType: 'statement_matrix',
    statements,
    options: [],
    correctAnswers: statements.map(statement => `${statement.id}:${statement.correctAnswer}`),
    explanation: `${cleanExplanation(row['GIẢI THÍCH'])} Correct responses: ${answerSummary}.`,
    category,
    tags,
  };
}

function extractBoxMappings(explanation) {
  const normalized = normalizeSpace(explanation);
  const matches = [...normalized.matchAll(/(?:Box\s*)?(\d+)\s*[:.)-]\s*(.*?)(?=(?:Box\s*)?\d+\s*[:.)-]|$)/gi)];
  return matches.map(match => match[2].trim()).filter(Boolean);
}

function mappingFromSegment(segment, index) {
  const arrow = segment.match(/^(.{2,80}?)\s*(?:→|->|–|—)\s*(.+)$/);
  if (arrow) return { answer: normalizeSpace(arrow[1]), description: normalizeSpace(arrow[2]) };
  const definition = segment.match(/^([A-Z][A-Za-z0-9 .()/-]{1,55}?)\s+(?:is|are|refers to|provides|allows|enables)\s+(.+)$/i);
  if (definition) {
    return {
      answer: normalizeSpace(definition[1]),
      description: normalizeSpace(`${definition[2]}`),
    };
  }
  return { answer: `Option ${index + 1}`, description: normalizeSpace(segment) };
}

function makeMatchingQuestion(row, image) {
  let segments = extractBoxMappings(row['GIẢI THÍCH']);
  if (segments.length < 2) {
    segments = String(row['ĐÁP ÁN ĐÚNG'] || '').split(/\s*\|\s*/).map(normalizeSpace).filter(Boolean);
  }
  const mappings = segments.slice(0, 6).map(mappingFromSegment).filter(item => item.description);
  if (mappings.length < 2) return null;
  const choiceTexts = [...new Set(mappings.map(item => item.answer))];
  const choices = choiceTexts.map((text, index) => ({ key: String.fromCharCode(65 + index), text }));
  const statements = mappings.map((mapping, index) => ({
    id: String(index + 1),
    text: mapping.description,
    correctAnswer: choices.find(choice => choice.text === mapping.answer).key,
  }));
  const { category, tags } = categoryAndTags(row, image.text);
  return {
    text: normalizeSpace(row['CÂU HỎI']) || 'Match each item to the appropriate description.',
    questionType: 'matching_drag_drop',
    statements,
    choices,
    options: choices,
    correctAnswers: statements.map(statement => `${statement.id}=${statement.correctAnswer}`),
    explanation: `${cleanExplanation(row['GIẢI THÍCH'])} Correct matches: ${mappings.map((item, index) => `${index + 1} — ${item.answer}`).join('; ')}.`,
    category,
    tags,
  };
}

function optionSimilarity(option, explanation) {
  const words = new Set(normalizeKey(option).split(' ').filter(word => word.length > 2));
  if (!words.size) return 0;
  const source = new Set(normalizeKey(explanation).split(' '));
  return [...words].filter(word => source.has(word)).length / words.size;
}

function extractDropdown(image, row) {
  const lines = image.lines
    .filter(line => line.confidence >= 35)
    .map(line => ({ ...line, text: cleanOcrLine(line.text) }))
    .filter(line => line.text && !/^answer area$/i.test(line.text))
    .sort((a, b) => a.bbox.y0 - b.bbox.y0 || a.bbox.x0 - b.bbox.x0);
  const shortLines = lines.filter(line => line.text.length <= 90);
  let bestCluster = [];
  for (const anchor of shortLines) {
    const cluster = shortLines.filter(line =>
      line.bbox.y0 >= anchor.bbox.y0 - 3 && Math.abs(line.bbox.x0 - anchor.bbox.x0) <= 45
    );
    if (cluster.length > bestCluster.length) bestCluster = cluster;
  }
  let optionTexts = [...new Set(bestCluster.map(line => line.text))].filter(text => text.length >= 2).slice(0, 8);
  if (optionTexts.length < 2) {
    optionTexts = [...new Set(shortLines.slice(-6).map(line => line.text))].slice(0, 6);
  }
  if (optionTexts.length < 2) return null;
  const firstOptionY = Math.min(...bestCluster.map(line => line.bbox.y0), Infinity);
  let statement = lines.filter(line => line.bbox.y0 < firstOptionY - 2).map(line => line.text).join(' ');
  if (!statement) statement = normalizeSpace(row['CÂU HỎI']);
  const choices = optionTexts.map((text, index) => ({ key: String.fromCharCode(65 + index), text }));
  const explanation = cleanExplanation(row['GIẢI THÍCH']);
  const ranked = choices.map(choice => ({
    key: choice.key,
    score: optionSimilarity(choice.text, explanation),
  })).sort((a, b) => b.score - a.score);
  const correctKey = ranked[0]?.key || choices[0].key;
  const { category, tags } = categoryAndTags(row, image.text);
  return {
    text: 'Select the answer that correctly completes the sentence.',
    questionType: 'matching_dropdown',
    statements: [{ id: '1', text: statement, correctAnswer: correctKey }],
    choices,
    options: choices,
    correctAnswers: [`1=${correctKey}`],
    explanation: `${explanation} Correct completion: ${choices.find(choice => choice.key === correctKey).text}.`,
    category,
    tags,
  };
}

function makeStandardQuestion(row) {
  const options = parseOptions(row['CÁC CÂU TRẢ LỜI']);
  const correctAnswers = parseChoiceAnswers(row['ĐÁP ÁN ĐÚNG'], options);
  if (options.length < 2 || !correctAnswers.length) return null;
  const correctLabels = correctAnswers.map(key => {
    const option = options.find(item => item.key === key);
    return option ? `${key} — ${option.text}` : key;
  }).join('; ');
  const { category, tags } = categoryAndTags(row);
  return {
    text: normalizeSpace(row['CÂU HỎI']),
    questionType: 'multiple_choice',
    options,
    correctAnswers,
    explanation: `Correct answer${correctAnswers.length > 1 ? 's' : ''}: ${correctLabels}. ${cleanExplanation(row['GIẢI THÍCH'])}`,
    category,
    tags,
  };
}

function sqlText(value) {
  return `'${String(value ?? '').replaceAll("'", "''")}'`;
}
function sqlArray(values) {
  return `ARRAY[${(values || []).map(sqlText).join(', ')}]::text[]`;
}

const rows = parseCsv(fs.readFileSync(path.join(sourceDir, 'AZ900_Questions.csv'), 'utf8'));
const rowByStt = new Map(rows.map(row => [row.STT, row]));
const ocr = JSON.parse(fs.readFileSync(ocrPath, 'utf8'));
const matchData = JSON.parse(fs.readFileSync(matchesPath, 'utf8'));
const ocrByRepresentative = new Map(ocr.records.map(record => [record.representative, record]));

const manualImageRowOverrides = new Map([
  ['36.png', '35'],
  ['54.png', '48'],
  ['81.png', '80'],
  ['82.png', '82'],
  ['84.png', '85'],
  ['85.png', '86'],
  ['86.png', '88'],
  ['97.png', '97'],
  ['104.png', '103'],
  ['112.png', '112'],
  ['124.png', '125'],
  ['126.png', '128'],
  ['150.png', '150'],
  ['168.png', '169'],
  ['169.png', '170'],
  ['200.png', '199'],
  ['281.png', '283'],
  ['291.png', '292'],
  ['296.png', '295'],
  ['299.png', '300'],
  ['306.png', '306'],
  ['329.png', '315'],
  ['349.png', '350'],
  ['352.png', '353'],
  ['397.png', '396'],
  ['399.png', '399'],
  ['447.png', '448'],
]);
const ignoredImageRepresentatives = new Set(['199.png']);

const pairCandidates = [];
for (const imageMatch of matchData.imageMatches) {
  if (ignoredImageRepresentatives.has(imageMatch.representative)) continue;
  const image = ocrByRepresentative.get(imageMatch.representative);
  const kind = classifyImage(image);
  const matchesByStt = new Map(imageMatch.matches.map(match => [match.stt, match]));
  for (const file of imageMatch.files) {
    const imageNumber = Number.parseInt(file, 10);
    for (let offset = -3; offset <= 3; offset += 1) {
      const nearbyStt = String(imageNumber + offset);
      const nearbyRow = rowByStt.get(nearbyStt);
      if (nearbyRow && !matchesByStt.has(nearbyStt)) {
        matchesByStt.set(nearbyStt, {
          stt: nearbyStt,
          type: nearbyRow['LOẠI'],
          score: 0,
        });
      }
    }
  }
  for (const match of matchesByStt.values()) {
    const forced = manualImageRowOverrides.get(imageMatch.representative) === match.stt;
    pairCandidates.push({
      representative: imageMatch.representative,
      stt: match.stt,
      score: forced
        ? 100
        : match.score + compatibility(kind, match.type) + proximityBonus(imageMatch.files, match.stt),
      rawScore: match.score,
      kind,
    });
  }
}
pairCandidates.sort((a, b) => b.score - a.score);
const assignedImages = new Set();
const assignedRows = new Set();
const assignments = [];
for (const candidate of pairCandidates) {
  if (assignedImages.has(candidate.representative) || assignedRows.has(candidate.stt)) continue;
  assignedImages.add(candidate.representative);
  assignedRows.add(candidate.stt);
  assignments.push(candidate);
}
for (const imageMatch of matchData.imageMatches) {
  if (ignoredImageRepresentatives.has(imageMatch.representative)) continue;
  if (assignedImages.has(imageMatch.representative)) continue;
  const fallback = imageMatch.matches.find(match => !assignedRows.has(match.stt)) || imageMatch.matches[0];
  if (!fallback) continue;
  assignedImages.add(imageMatch.representative);
  assignedRows.add(fallback.stt);
  assignments.push({
    representative: imageMatch.representative,
    stt: fallback.stt,
    score: fallback.score,
    rawScore: fallback.score,
    kind: classifyImage(ocrByRepresentative.get(imageMatch.representative)),
  });
}

const imageByRow = new Map(assignments.map(item => [item.stt, item]));
const candidates = [];
const seenStandard = new Set();
for (const row of rows) {
  const standard = makeStandardQuestion(row);
  const imageAssignment = imageByRow.get(row.STT);
  if (standard) {
    const signature = `${normalizeKey(standard.text)}|${standard.options.map(option => normalizeKey(option.text)).join('|')}`;
    if (seenStandard.has(signature)) continue;
    seenStandard.add(signature);
    candidates.push({ sourceStt: Number(row.STT), question: standard, imageAssignment });
    continue;
  }
  if (!imageAssignment) continue;
  const image = ocrByRepresentative.get(imageAssignment.representative);
  let question = manualImageQuestion(imageAssignment.representative, row);
  if (!question && (imageAssignment.kind === 'matrix' || row['LOẠI'] === 'Yes/No')) {
    question = makeMatrixQuestion(row, image);
  } else if (!question && (imageAssignment.kind === 'matching' || row['LOẠI'] === 'Drag Drop')) {
    question = makeMatchingQuestion(row, image);
  }
  if (!question) question = extractDropdown(image, row);
  if (!question) continue;
  candidates.push({ sourceStt: Number(row.STT), question, imageAssignment });
}

candidates.sort((a, b) => a.sourceStt - b.sourceStt);
const uniqueCandidateSignatures = new Set();
const uniqueCandidates = candidates.filter(candidate => {
  const question = candidate.question;
  const signature = [
    normalizeKey(question.text),
    (question.options || []).map(option => normalizeKey(option.text)).join('|'),
    (question.statements || []).map(statement => normalizeKey(statement.text)).join('|'),
  ].join('||');
  if (uniqueCandidateSignatures.has(signature)) return false;
  uniqueCandidateSignatures.add(signature);
  return true;
});
const publicImageDir = path.join(projectDir, 'public', 'az900', 'images');
fs.mkdirSync(publicImageDir, { recursive: true });

const questions = uniqueCandidates.map((candidate, index) => {
  const questionNumber = index + 1;
  const reconstructedInteractionTypes = new Set(['statement_matrix', 'matching_dropdown', 'matching_drag_drop']);
  const imageUrl = candidate.imageAssignment && !candidate.question.omitImage && !reconstructedInteractionTypes.has(candidate.question.questionType)
    ? `az900/images/${candidate.imageAssignment.representative}`
    : undefined;
  if (candidate.imageAssignment && !candidate.question.omitImage) {
    fs.copyFileSync(
      path.join(sourceDir, 'images', candidate.imageAssignment.representative),
      path.join(publicImageDir, candidate.imageAssignment.representative)
    );
  }
  const { omitImage, ...question } = candidate.question;
  return {
    id: `az-900-question-${String(questionNumber).padStart(3, '0')}`,
    questionNumber,
    ...question,
    ...(imageUrl ? { imageUrl } : {}),
    sourceStt: candidate.sourceStt,
  };
});

const counts = questions.reduce((result, question) => {
  result[question.questionType] = (result[question.questionType] || 0) + 1;
  return result;
}, {});
const categoryCounts = questions.reduce((result, question) => {
  result[question.category] = (result[question.category] || 0) + 1;
  return result;
}, {});

const explanationMapPath = path.join(projectDir, 'src', 'data', 'az900_explanations_vi.json');
const localizedExplanations = fs.existsSync(explanationMapPath)
  ? JSON.parse(fs.readFileSync(explanationMapPath, 'utf8'))
  : {};
const jsonQuestions = questions.map(({ sourceStt, ...question }) => ({
  ...question,
  explanation: localizedExplanations[question.id] || question.explanation,
}));
const jsonPath = path.join(projectDir, 'src', 'data', 'az900_questions_import.json');
fs.writeFileSync(jsonPath, JSON.stringify(jsonQuestions, null, 2));
const tsPath = path.join(projectDir, 'src', 'data', 'az900Questions.ts');
fs.writeFileSync(tsPath, `import { Question } from '../types';\n\nexport const az900Questions: Question[] = ${JSON.stringify(jsonQuestions, null, 2)};\n`);

const sqlRows = jsonQuestions.map(question => {
  const structured = question.questionType !== 'multiple_choice';
  const optionsPayload = structured
    ? { type: question.questionType, statements: question.statements, choices: question.choices || question.options }
    : question.options;
  return `(
  ${sqlText(question.id)}, 'az-900', ${question.questionNumber}, ${sqlText(question.text)},
  ${sqlText(JSON.stringify(optionsPayload))}::jsonb, ${sqlArray(question.correctAnswers)},
  ${sqlText(question.explanation)}, ${sqlText(question.category)}, ${sqlArray(question.tags)},
  ${sqlText(question.imageUrl || '')}
)`;
});
const ids = jsonQuestions.map(question => sqlText(question.id));
const sql = `-- AZ-900 normalized question bank generated from AZ900_Questions.csv and its answer-area images.
-- Total: ${jsonQuestions.length}
-- Types: ${JSON.stringify(counts)}
-- Safe to run repeatedly. Stale AZ-900 rows are removed after the upsert.

BEGIN;

ALTER TABLE questions ADD COLUMN IF NOT EXISTS image_url TEXT;

INSERT INTO questions (
  id, cert_id, question_number, text, options,
  correct_answers, explanation, category, tags, image_url
) VALUES
${sqlRows.join(',\n')}
ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags,
  image_url = EXCLUDED.image_url;

DELETE FROM questions
WHERE cert_id = 'az-900'
  AND id NOT IN (${ids.join(', ')});

COMMIT;

SELECT cert_id, count(*) AS question_count
FROM questions
WHERE cert_id = 'az-900'
GROUP BY cert_id;
`;
const sqlPath = path.join(projectDir, 'src', 'data', 'az900_questions_upsert.sql');
fs.writeFileSync(sqlPath, sql);

const audit = {
  sourceRows: rows.length,
  uniqueImages: ocr.records.length,
  assignments: assignments.length,
  questions: jsonQuestions.length,
  counts,
  categoryCounts,
  skippedRows: rows.length - uniqueCandidates.length,
  lowConfidenceAssignments: assignments.filter(item => item.rawScore < 0.15),
};
const auditPath = path.join(projectDir, 'src', 'data', 'az900_generation_audit.json');
fs.writeFileSync(auditPath, JSON.stringify(audit, null, 2));
console.log(JSON.stringify(audit, null, 2));
