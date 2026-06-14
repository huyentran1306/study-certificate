import { writeFileSync } from 'fs';
import { initialQuestions } from '../src/data/initialQuestions';
import { az900Questions } from '../src/data/az900Questions';
import { ai900Questions } from '../src/data/ai900Questions';

// Utility to escape single quotes for SQL insertion
function escapeSqlString(str: string): string {
  if (!str) return 'NULL';
  return `'${str.replace(/'/g, "''")}'`;
}

// Convert JavaScript array of strings to postgres array format e.g. ARRAY['val1', 'val2']
function toPgTextArray(arr: string[] | undefined): string {
  if (!arr || arr.length === 0) return "'{}'::text[]";
  const escapedElements = arr.map(el => `'${el.replace(/'/g, "''")}'`);
  return `ARRAY[${escapedElements.join(', ')}]::text[]`;
}

// Convert JSON object/array to Postgres JSONB literal
function toPgJsonb(obj: any): string {
  const jsonStr = JSON.stringify(obj);
  return `'${jsonStr.replace(/'/g, "''")}'::jsonb`;
}

function generateSqlDump() {
  let sql = `-- SUPABASE DATABASE SETUP & QUESTIONS SEEDING SCRIPT
-- Copy and execute this in the Supabase SQL Editor (https://supabase.com)

-- 1. Create table structured for questions
CREATE TABLE IF NOT EXISTS questions (
    id TEXT PRIMARY KEY,
    cert_id TEXT NOT NULL,
    question_number INTEGER NOT NULL,
    text TEXT NOT NULL,
    options JSONB NOT NULL,
    correct_answers TEXT[] NOT NULL,
    explanation TEXT,
    category TEXT,
    tags TEXT[]
);

-- 2. Create table for user overall stats progress
CREATE TABLE IF NOT EXISTS user_progress (
    username TEXT NOT NULL,
    cert_id TEXT NOT NULL,
    answered_count INTEGER DEFAULT 0,
    correct_count INTEGER DEFAULT 0,
    incorrect_count INTEGER DEFAULT 0,
    streak INTEGER DEFAULT 0,
    bookmarked_question_ids TEXT[] DEFAULT '{}',
    last_updated TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    PRIMARY KEY (username, cert_id)
);

-- 3. Create table for detailed log registry (history log per question)
CREATE TABLE IF NOT EXISTS study_history (
    username TEXT NOT NULL,
    cert_id TEXT NOT NULL,
    question_id TEXT NOT NULL,
    selected_options TEXT[] NOT NULL,
    is_correct BOOLEAN NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    PRIMARY KEY (username, cert_id, question_id)
);

-- Clean up existing data to avoid conflict, or just upsert
TRUNCATE TABLE questions CASCADE;

-- 4. Seed Questions Database
`;

  // Process GH-300 Github Foundations
  sql += `\n-- ===========================================\n-- SEED DATA FOR GITHUB FOUNDATIONS (gh-300)\n-- ===========================================\n`;
  initialQuestions.forEach(q => {
    sql += `INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (\n  ${escapeSqlString(q.id)},\n  'gh-300',\n  ${q.questionNumber},\n  ${escapeSqlString(q.text)},\n  ${toPgJsonb(q.options)},\n  ${toPgTextArray(q.correctAnswers)},\n  ${escapeSqlString(q.explanation)},\n  ${escapeSqlString(q.category)},\n  ${toPgTextArray(q.tags || [])}\n) ON CONFLICT (id) DO UPDATE SET\n  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;\n\n`;
  });

  // Process AZ-900 Azure Fundamentals
  sql += `\n-- ===========================================\n-- SEED DATA FOR AZURE FUNDAMENTALS (az-900)\n-- ===========================================\n`;
  az900Questions.forEach(q => {
    sql += `INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (\n  ${escapeSqlString(q.id)},\n  'az-900',\n  ${q.questionNumber},\n  ${escapeSqlString(q.text)},\n  ${toPgJsonb(q.options)},\n  ${toPgTextArray(q.correctAnswers)},\n  ${escapeSqlString(q.explanation)},\n  ${escapeSqlString(q.category)},\n  ${toPgTextArray(q.tags || [])}\n) ON CONFLICT (id) DO UPDATE SET\n  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;\n\n`;
  });

  // Process AI-900 Azure AI Fundamentals
  sql += `\n-- ===========================================\n-- SEED DATA FOR AZURE AI FUNDAMENTALS (ai-900)\n-- ===========================================\n`;
  ai900Questions.forEach(q => {
    sql += `INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (\n  ${escapeSqlString(q.id)},\n  'ai-900',\n  ${q.questionNumber},\n  ${escapeSqlString(q.text)},\n  ${toPgJsonb(q.options)},\n  ${toPgTextArray(q.correctAnswers)},\n  ${escapeSqlString(q.explanation)},\n  ${escapeSqlString(q.category)},\n  ${toPgTextArray(q.tags || [])}\n) ON CONFLICT (id) DO UPDATE SET\n  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;\n\n`;
  });

  sql += `\n-- SETUP COMPLETE. Database is ready with questions loaded.\n`;

  writeFileSync('./src/data/supabase_setup.sql', sql);
  console.log('Successfully generated src/data/supabase_setup.sql!');
}

generateSqlDump();
