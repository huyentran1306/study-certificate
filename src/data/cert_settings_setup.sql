-- =========================================================
-- SUPABASE DATABASE UPDATE SCRIPT: CERTIFICATE SETTINGS & STATUSES
-- Execute this script in your Supabase SQL Editor to support:
-- 1) Disabling / Hiding certificates across all users
-- 2) Enabling / Disabling VIP Key requirement for any certification
-- =========================================================

-- 1. Table for Certificate VIP Statuses
CREATE TABLE IF NOT EXISTS cert_vip_statuses (
    cert_id TEXT PRIMARY KEY,
    is_vip BOOLEAN DEFAULT FALSE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

ALTER TABLE cert_vip_statuses ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public read access for cert_vip_statuses" ON cert_vip_statuses;
CREATE POLICY "Public read access for cert_vip_statuses" ON cert_vip_statuses
    FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public write access for cert_vip_statuses" ON cert_vip_statuses;
REVOKE ALL ON TABLE cert_vip_statuses FROM anon, authenticated;
GRANT SELECT ON TABLE cert_vip_statuses TO anon, authenticated;

-- 2. Table for Certificate Disabled Statuses
CREATE TABLE IF NOT EXISTS cert_disabled_statuses (
    cert_id TEXT PRIMARY KEY,
    is_disabled BOOLEAN DEFAULT FALSE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

ALTER TABLE cert_disabled_statuses ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public read access for cert_disabled_statuses" ON cert_disabled_statuses;
CREATE POLICY "Public read access for cert_disabled_statuses" ON cert_disabled_statuses
    FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public write access for cert_disabled_statuses" ON cert_disabled_statuses;
REVOKE ALL ON TABLE cert_disabled_statuses FROM anon, authenticated;
GRANT SELECT ON TABLE cert_disabled_statuses TO anon, authenticated;

-- This bootstrap intentionally grants read-only access. Run
-- security_content_workflow_migration.sql to enable role-based Admin writes.
