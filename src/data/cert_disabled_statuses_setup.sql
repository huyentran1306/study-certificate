-- =========================================================
-- SUPABASE DATABASE UPDATE SCRIPT: CERTIFICATE DISABLED STATUS
-- Execute this script in your Supabase SQL Editor to support disabling/hiding certificates
-- =========================================================

-- 1. Create table for certificate disabled statuses
CREATE TABLE IF NOT EXISTS cert_disabled_statuses (
    cert_id TEXT PRIMARY KEY,
    is_disabled BOOLEAN DEFAULT FALSE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 2. Enable Row Level Security (RLS) & permissive policies
ALTER TABLE cert_disabled_statuses ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public read access for cert_disabled_statuses" ON cert_disabled_statuses;
CREATE POLICY "Public read access for cert_disabled_statuses" ON cert_disabled_statuses
    FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public write access for cert_disabled_statuses" ON cert_disabled_statuses;
CREATE POLICY "Public write access for cert_disabled_statuses" ON cert_disabled_statuses
    FOR ALL USING (true) WITH CHECK (true);
