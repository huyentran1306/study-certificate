import fs from 'fs';
import path from 'path';
import { initialQuestions } from '../src/data/initialQuestions';
import { ai900Questions } from '../src/data/ai900Questions';
import { az900Questions } from '../src/data/az900Questions';
import { dp800Questions } from '../src/data/dp800Questions';
import { istqbAiQuestions } from '../src/data/istqbAiQuestions';
import { ccaQuestions } from '../src/data/ccaQuestions';
import { Question } from '../src/types';

interface CertGroup {
  certId: string;
  certName: string;
  questions: Question[];
}

const certGroups: CertGroup[] = [
  { certId: 'gh-300', certName: 'GitHub Foundations (GH-300)', questions: initialQuestions },
  { certId: 'ai-900', certName: 'Microsoft Azure AI Fundamentals (AI-900)', questions: ai900Questions },
  { certId: 'az-900', certName: 'Microsoft Azure Fundamentals (AZ-900)', questions: az900Questions },
  { certId: 'dp-800', certName: 'Fabric Data Engineer Associate (DP-800)', questions: dp800Questions },
  { certId: 'istqb-ai', certName: 'ISTQB AI Testing (ISTQB-AI)', questions: istqbAiQuestions },
  { certId: 'cca-f', certName: 'Claude Certified Architect - Foundations (CCA-F)', questions: ccaQuestions },
];

function generateSqlForGroup(certId: string, certName: string, questions: Question[]): string {
  let sql = `-- ===========================================\n`;
  sql += `-- SEED DATA FOR ${certName.toUpperCase()} (${certId})\n`;
  sql += `-- Total questions: ${questions.length}\n`;
  sql += `-- ===========================================\n\n`;

  for (const q of questions) {
    const escText = q.text.replace(/'/g, "''");
    const escOpts = JSON.stringify(q.options).replace(/'/g, "''");
    const escCorr = `ARRAY[${q.correctAnswers.map(a => `'${a.replace(/'/g, "''")}'`).join(', ')}]::text[]`;
    const escExp = (q.explanation || '').replace(/'/g, "''");
    const escCat = (q.category || '').replace(/'/g, "''");
    const escTags = `ARRAY[${(q.tags || [certId]).map(t => `'${t.replace(/'/g, "''")}'`).join(', ')}]::text[]`;

    sql += `INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (\n`;
    sql += `  '${q.id}',\n`;
    sql += `  '${certId}',\n`;
    sql += `  ${q.questionNumber},\n`;
    sql += `  '${escText}',\n`;
    sql += `  '${escOpts}'::jsonb,\n`;
    sql += `  ${escCorr},\n`;
    sql += `  '${escExp}',\n`;
    sql += `  '${escCat}',\n`;
    sql += `  ${escTags}\n`;
    sql += `) ON CONFLICT (id) DO UPDATE SET\n`;
    sql += `  cert_id = EXCLUDED.cert_id,\n`;
    sql += `  question_number = EXCLUDED.question_number,\n`;
    sql += `  text = EXCLUDED.text,\n`;
    sql += `  options = EXCLUDED.options,\n`;
    sql += `  correct_answers = EXCLUDED.correct_answers,\n`;
    sql += `  explanation = EXCLUDED.explanation,\n`;
    sql += `  category = EXCLUDED.category,\n`;
    sql += `  tags = EXCLUDED.tags;\n\n`;
  }

  return sql;
}

function run() {
  console.log('Generating consolidated SQL scripts...');

  let totalCount = 0;
  certGroups.forEach(g => {
    console.log(`- ${g.certName} (${g.certId}): ${g.questions.length} questions`);
    totalCount += g.questions.length;
  });
  console.log(`TOTAL QUESTIONS ACROSS ALL CERTS: ${totalCount}`);

  // Table setup SQL header
  const header = `-- =========================================================\n` +
    `-- SUPABASE DATABASE SETUP & FULL QUESTIONS SEEDING SCRIPT\n` +
    `-- Generated automatically. Total questions: ${totalCount}\n` +
    `-- Copy and execute this in the Supabase SQL Editor\n` +
    `-- =========================================================\n\n` +
    `-- 1. Create table structured for questions\n` +
    `CREATE TABLE IF NOT EXISTS questions (\n` +
    `    id TEXT PRIMARY KEY,\n` +
    `    cert_id TEXT NOT NULL,\n` +
    `    question_number INTEGER NOT NULL,\n` +
    `    text TEXT NOT NULL,\n` +
    `    options JSONB NOT NULL,\n` +
    `    correct_answers TEXT[] NOT NULL,\n` +
    `    explanation TEXT,\n` +
    `    category TEXT,\n` +
    `    tags TEXT[]\n` +
    `);\n\n` +
    `-- 2. Create table for user overall stats progress\n` +
    `CREATE TABLE IF NOT EXISTS user_progress (\n` +
    `    username TEXT NOT NULL,\n` +
    `    cert_id TEXT NOT NULL,\n` +
    `    answered_count INTEGER DEFAULT 0,\n` +
    `    correct_count INTEGER DEFAULT 0,\n` +
    `    incorrect_count INTEGER DEFAULT 0,\n` +
    `    streak INTEGER DEFAULT 0,\n` +
    `    bookmarked_question_ids TEXT[] DEFAULT '{}',\n` +
    `    last_updated TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),\n` +
    `    PRIMARY KEY (username, cert_id)\n` +
    `);\n\n` +
    `-- 3. Create table for detailed log registry (history log per question)\n` +
    `CREATE TABLE IF NOT EXISTS study_history (\n` +
    `    username TEXT NOT NULL,\n` +
    `    cert_id TEXT NOT NULL,\n` +
    `    question_id TEXT NOT NULL,\n` +
    `    selected_options TEXT[] NOT NULL,\n` +
    `    is_correct BOOLEAN NOT NULL,\n` +
    `    timestamp TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),\n` +
    `    PRIMARY KEY (username, cert_id, question_id)\n` +
    `);\n\n` +
    `-- Clean up existing data to avoid conflict, or just upsert\n` +
    `TRUNCATE TABLE questions CASCADE;\n\n` +
    `-- 4. Seed Questions Database\n\n`;

  let fullBody = '';
  for (const group of certGroups) {
    fullBody += generateSqlForGroup(group.certId, group.certName, group.questions);
  }

  const fullSqlContent = header + fullBody;

  // Write to src/data/supabase_setup.sql
  fs.writeFileSync(path.join(process.cwd(), 'src/data/supabase_setup.sql'), fullSqlContent, 'utf-8');
  console.log('✅ Successfully updated src/data/supabase_setup.sql');

  // Write to src/data/all_questions_insert.sql
  fs.writeFileSync(path.join(process.cwd(), 'src/data/all_questions_insert.sql'), fullSqlContent, 'utf-8');
  console.log('✅ Successfully created src/data/all_questions_insert.sql');

  // Write cca_questions_insert.sql specifically for CCA-F
  const ccaGroup = certGroups.find(g => g.certId === 'cca-f')!;
  const ccaHeader = `-- =========================================================\n` +
    `-- CLAUDE CERTIFIED ARCHITECT - FOUNDATIONS (CCA-F) SQL INSERT SCRIPT\n` +
    `-- Total questions: ${ccaGroup.questions.length}\n` +
    `-- =========================================================\n\n`;
  const ccaSql = ccaHeader + generateSqlForGroup('cca-f', ccaGroup.certName, ccaGroup.questions);
  fs.writeFileSync(path.join(process.cwd(), 'src/data/cca_questions_insert.sql'), ccaSql, 'utf-8');
  console.log('✅ Successfully updated src/data/cca_questions_insert.sql');
}

run();
