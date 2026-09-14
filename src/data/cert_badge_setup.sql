-- =========================================================================
-- CERTIFICATE BADGE STATUSES SCHEMA & CONFIGURATION
-- Creates table cert_badge_statuses and sets initial badge values
-- =========================================================================

CREATE TABLE IF NOT EXISTS public.cert_badge_statuses (
  cert_id TEXT PRIMARY KEY,
  badge TEXT NOT NULL DEFAULT 'none',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

ALTER TABLE public.cert_badge_statuses ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'cert_badge_statuses' AND policyname = 'Allow public read cert_badge_statuses'
  ) THEN
    CREATE POLICY "Allow public read cert_badge_statuses" ON public.cert_badge_statuses
      FOR SELECT USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'cert_badge_statuses' AND policyname = 'Allow public upsert cert_badge_statuses'
  ) THEN
    CREATE POLICY "Allow public upsert cert_badge_statuses" ON public.cert_badge_statuses
      FOR ALL USING (true) WITH CHECK (true);
  END IF;
END $$;

-- Ensure custom_certificates table has badge column
ALTER TABLE public.custom_certificates ADD COLUMN IF NOT EXISTS badge TEXT DEFAULT 'none';

-- Upsert default badge statuses (Verified: GH-300, AZ-900, AI-900, CCA-F, DP-800, ISTQB-AI, AB-731; New: AI-103, AI-200, AB-100)
INSERT INTO public.cert_badge_statuses (cert_id, badge, updated_at)
VALUES
  ('gh-300', 'verified', now()),
  ('az-900', 'verified', now()),
  ('ai-900', 'verified', now()),
  ('cca-f', 'verified', now()),
  ('dp-800', 'verified', now()),
  ('istqb-ai', 'verified', now()),
  ('ab-731', 'verified', now()),
  ('ai-103', 'new', now()),
  ('ai-200', 'new', now()),
  ('ab-100', 'new', now())
ON CONFLICT (cert_id) DO UPDATE SET
  badge = EXCLUDED.badge,
  updated_at = EXCLUDED.updated_at;
