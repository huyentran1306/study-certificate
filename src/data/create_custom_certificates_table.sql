-- Run this entire script once in Supabase Dashboard -> SQL Editor.
-- It creates the shared certificate catalog used by the web app.

BEGIN;

CREATE TABLE IF NOT EXISTS public.custom_certificates (
  id TEXT PRIMARY KEY,
  code TEXT NOT NULL,
  name TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  difficulty TEXT NOT NULL DEFAULT 'Trung cấp'
    CHECK (difficulty IN ('Cơ bản', 'Trung cấp', 'Nâng cao')),
  estimated_hours TEXT NOT NULL DEFAULT '10-15 Giờ',
  color_class TEXT NOT NULL DEFAULT 'bg-gradient-to-br from-indigo-700 via-blue-800 to-slate-900 text-white',
  icon_name TEXT NOT NULL DEFAULT 'BookOpen',
  is_vip BOOLEAN NOT NULL DEFAULT FALSE,
  is_disabled BOOLEAN NOT NULL DEFAULT FALSE,
  access_keys JSONB NOT NULL DEFAULT '[]'::JSONB
    CHECK (jsonb_typeof(access_keys) = 'array'),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT custom_certificates_no_system_id CHECK (
    id NOT IN ('gh-300', 'az-900', 'ai-900', 'cca-f', 'dp-800', 'istqb-ai', 'ab-731')
  )
);

CREATE UNIQUE INDEX IF NOT EXISTS custom_certificates_code_unique_ci
  ON public.custom_certificates (UPPER(BTRIM(code)));

CREATE INDEX IF NOT EXISTS custom_certificates_created_at_idx
  ON public.custom_certificates (created_at DESC);

CREATE OR REPLACE FUNCTION public.set_custom_certificates_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at := NOW();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS custom_certificates_set_updated_at
  ON public.custom_certificates;

CREATE TRIGGER custom_certificates_set_updated_at
BEFORE UPDATE ON public.custom_certificates
FOR EACH ROW
EXECUTE FUNCTION public.set_custom_certificates_updated_at();

ALTER TABLE public.custom_certificates ENABLE ROW LEVEL SECURITY;

-- Safe bootstrap: the public app may read catalogue metadata, but this script
-- never grants anonymous writes and never exposes access_keys. Run
-- security_content_workflow_migration.sql afterwards to enable role-based
-- editor/admin writes.
DROP POLICY IF EXISTS "custom certificates shared read" ON public.custom_certificates;
DROP POLICY IF EXISTS "custom certificates shared insert" ON public.custom_certificates;
DROP POLICY IF EXISTS "custom certificates shared update" ON public.custom_certificates;
DROP POLICY IF EXISTS "custom certificates shared delete" ON public.custom_certificates;

CREATE POLICY "custom certificates shared read"
  ON public.custom_certificates
  FOR SELECT
  TO anon, authenticated
  USING (TRUE);

REVOKE ALL ON TABLE public.custom_certificates FROM anon, authenticated;
GRANT SELECT (
  id, code, name, description, difficulty, estimated_hours,
  color_class, icon_name, is_vip, is_disabled, created_at, updated_at
) ON public.custom_certificates TO anon, authenticated;

COMMIT;

-- Verification: should return the table with zero or more custom certificates.
SELECT id, code, name, created_at
FROM public.custom_certificates
ORDER BY created_at DESC;
