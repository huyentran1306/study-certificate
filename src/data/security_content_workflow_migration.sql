-- Security + editorial workflow migration
-- Safe to run repeatedly. Existing question/progress rows are preserved.

BEGIN;

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT NOT NULL DEFAULT 'Học viên',
  role TEXT NOT NULL DEFAULT 'student' CHECK (role IN ('student', 'editor', 'admin')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE OR REPLACE FUNCTION public.handle_new_user_profile()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles(id, display_name)
  VALUES (
    NEW.id,
    COALESCE(NULLIF(NEW.raw_user_meta_data ->> 'display_name', ''), split_part(COALESCE(NEW.email, 'Học viên'), '@', 1))
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created_create_profile ON auth.users;
CREATE TRIGGER on_auth_user_created_create_profile
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user_profile();

INSERT INTO public.profiles(id, display_name)
SELECT id, COALESCE(NULLIF(raw_user_meta_data ->> 'display_name', ''), split_part(COALESCE(email, 'Học viên'), '@', 1))
FROM auth.users
ON CONFLICT (id) DO NOTHING;

CREATE OR REPLACE FUNCTION public.is_content_admin()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role IN ('editor', 'admin')
  );
$$;

CREATE OR REPLACE FUNCTION public.is_app_admin()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role = 'admin'
  );
$$;

ALTER TABLE IF EXISTS public.questions ADD COLUMN IF NOT EXISTS status TEXT NOT NULL DEFAULT 'published';
ALTER TABLE IF EXISTS public.questions ADD COLUMN IF NOT EXISTS source_title TEXT;
ALTER TABLE IF EXISTS public.questions ADD COLUMN IF NOT EXISTS source_url TEXT;
ALTER TABLE IF EXISTS public.questions ADD COLUMN IF NOT EXISTS last_verified_at DATE;
ALTER TABLE IF EXISTS public.questions ADD COLUMN IF NOT EXISTS created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL;
ALTER TABLE IF EXISTS public.questions ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW();

DO $$
BEGIN
  IF to_regclass('public.questions') IS NOT NULL
     AND NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'questions_status_check') THEN
    ALTER TABLE public.questions
      ADD CONSTRAINT questions_status_check CHECK (status IN ('draft', 'review', 'published', 'archived'));
  END IF;
END $$;

CREATE TABLE IF NOT EXISTS public.question_reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  cert_id TEXT NOT NULL,
  question_id TEXT NOT NULL,
  question_number INTEGER NOT NULL,
  reporter_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  reporter_name TEXT,
  report_type TEXT NOT NULL CHECK (report_type IN ('wrong_answer', 'outdated', 'formatting', 'unclear', 'other')),
  details TEXT NOT NULL CHECK (char_length(details) BETWEEN 5 AND 4000),
  status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'reviewing', 'resolved', 'dismissed')),
  resolution_note TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  resolved_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS question_reports_cert_status_idx ON public.question_reports(cert_id, status, created_at DESC);

CREATE TABLE IF NOT EXISTS public.question_import_batches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  cert_id TEXT NOT NULL,
  previous_count INTEGER NOT NULL,
  next_count INTEGER NOT NULL,
  snapshot JSONB NOT NULL,
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS question_import_batches_cert_created_idx ON public.question_import_batches(cert_id, created_at DESC);

CREATE TABLE IF NOT EXISTS public.vip_key_configs (
  cert_id TEXT NOT NULL,
  key TEXT NOT NULL,
  expiry_date DATE,
  disabled BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (cert_id, key)
);
ALTER TABLE public.vip_key_configs ADD COLUMN IF NOT EXISTS expiry_date DATE;
ALTER TABLE public.vip_key_configs ADD COLUMN IF NOT EXISTS disabled BOOLEAN NOT NULL DEFAULT FALSE;
ALTER TABLE public.vip_key_configs ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ NOT NULL DEFAULT NOW();
ALTER TABLE public.vip_key_configs ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW();
CREATE UNIQUE INDEX IF NOT EXISTS vip_key_configs_cert_key_uidx ON public.vip_key_configs(cert_id, key);

-- Backward-compatible catalogue upgrade: older app builds query
-- custom_certificates with select('*'). Move legacy plaintext keys into the
-- admin-only key table, then scrub the legacy JSON column so granting SELECT
-- for the old catalogue query no longer exposes usable keys.
DO $$
BEGIN
  IF to_regclass('public.custom_certificates') IS NOT NULL
     AND EXISTS (
       SELECT 1 FROM information_schema.columns
       WHERE table_schema = 'public'
         AND table_name = 'custom_certificates'
         AND column_name = 'access_keys'
     ) THEN
    INSERT INTO public.vip_key_configs(cert_id, key, expiry_date, disabled)
    SELECT certificate.id, legacy_key.value, NULL, FALSE
    FROM public.custom_certificates AS certificate
    CROSS JOIN LATERAL jsonb_array_elements_text(
      COALESCE(certificate.access_keys, '[]'::JSONB)
    ) AS legacy_key(value)
    WHERE BTRIM(legacy_key.value) <> ''
    ON CONFLICT (cert_id, key) DO NOTHING;

    UPDATE public.custom_certificates
    SET access_keys = '[]'::JSONB
    WHERE access_keys IS DISTINCT FROM '[]'::JSONB;
  END IF;
END $$;

CREATE OR REPLACE FUNCTION public.validate_vip_key(p_cert_id TEXT, p_key TEXT)
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  matched public.vip_key_configs%ROWTYPE;
BEGIN
  IF auth.uid() IS NULL THEN RETURN 'unauthenticated'; END IF;
  SELECT * INTO matched
  FROM public.vip_key_configs
  WHERE cert_id = p_cert_id AND UPPER(BTRIM(key)) = UPPER(BTRIM(p_key))
  LIMIT 1;

  IF NOT FOUND THEN RETURN 'invalid'; END IF;
  IF matched.disabled THEN RETURN 'disabled'; END IF;
  IF matched.expiry_date IS NOT NULL AND matched.expiry_date < CURRENT_DATE THEN RETURN 'expired'; END IF;
  RETURN 'valid';
END;
$$;

CREATE TABLE IF NOT EXISTS public.content_audit_log (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  table_name TEXT NOT NULL,
  row_id TEXT,
  action TEXT NOT NULL,
  actor_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  old_data JSONB,
  new_data JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE OR REPLACE FUNCTION public.audit_question_change()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.content_audit_log(table_name, row_id, action, actor_id, old_data, new_data)
  VALUES (
    TG_TABLE_NAME,
    COALESCE(NEW.id, OLD.id)::TEXT,
    TG_OP,
    auth.uid(),
    CASE WHEN TG_OP IN ('UPDATE', 'DELETE') THEN to_jsonb(OLD) ELSE NULL END,
    CASE WHEN TG_OP IN ('INSERT', 'UPDATE') THEN to_jsonb(NEW) ELSE NULL END
  );
  RETURN COALESCE(NEW, OLD);
END;
$$;

DROP TRIGGER IF EXISTS questions_content_audit ON public.questions;
CREATE TRIGGER questions_content_audit
AFTER INSERT OR UPDATE OR DELETE ON public.questions
FOR EACH ROW EXECUTE FUNCTION public.audit_question_change();

-- Add stable user ownership without deleting legacy nickname-based data.
ALTER TABLE IF EXISTS public.user_progress ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE DEFAULT auth.uid();
ALTER TABLE IF EXISTS public.study_history ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE DEFAULT auth.uid();
ALTER TABLE IF EXISTS public.exam_results ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE DEFAULT auth.uid();

CREATE UNIQUE INDEX IF NOT EXISTS user_progress_user_cert_uidx ON public.user_progress(user_id, cert_id);
CREATE UNIQUE INDEX IF NOT EXISTS study_history_user_cert_question_uidx ON public.study_history(user_id, cert_id, question_id);
CREATE INDEX IF NOT EXISTS exam_results_user_cert_idx ON public.exam_results(user_id, cert_id, timestamp DESC) WHERE user_id IS NOT NULL;

-- Remove permissive policies from the app tables this migration owns.
DO $$
DECLARE
  target_table TEXT;
  policy_row RECORD;
BEGIN
  FOREACH target_table IN ARRAY ARRAY[
    'profiles', 'questions', 'question_reports', 'question_import_batches', 'content_audit_log',
    'user_progress', 'study_history', 'exam_results', 'custom_certificates',
    'cert_vip_statuses', 'cert_disabled_statuses', 'vip_key_configs'
  ] LOOP
    IF to_regclass('public.' || target_table) IS NULL THEN CONTINUE; END IF;
    EXECUTE format('ALTER TABLE public.%I ENABLE ROW LEVEL SECURITY', target_table);
    FOR policy_row IN SELECT policyname FROM pg_policies WHERE schemaname = 'public' AND tablename = target_table LOOP
      EXECUTE format('DROP POLICY IF EXISTS %I ON public.%I', policy_row.policyname, target_table);
    END LOOP;
    EXECUTE format('REVOKE ALL ON TABLE public.%I FROM anon, authenticated', target_table);
  END LOOP;
END $$;

GRANT SELECT ON public.profiles TO authenticated;
GRANT UPDATE(display_name) ON public.profiles TO authenticated;
CREATE POLICY profiles_read_own ON public.profiles FOR SELECT TO authenticated USING (id = auth.uid() OR public.is_app_admin());
CREATE POLICY profiles_update_own ON public.profiles FOR UPDATE TO authenticated USING (id = auth.uid()) WITH CHECK (id = auth.uid());

GRANT SELECT ON public.questions TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.questions TO authenticated;
CREATE POLICY questions_read_published_or_editor ON public.questions FOR SELECT TO anon, authenticated
  USING (status = 'published' OR public.is_content_admin());
CREATE POLICY questions_insert_editor ON public.questions FOR INSERT TO authenticated
  WITH CHECK (public.is_content_admin());
CREATE POLICY questions_update_editor ON public.questions FOR UPDATE TO authenticated
  USING (public.is_content_admin()) WITH CHECK (public.is_content_admin());
CREATE POLICY questions_delete_editor ON public.questions FOR DELETE TO authenticated
  USING (public.is_content_admin());

GRANT INSERT ON public.question_reports TO anon, authenticated;
GRANT SELECT, UPDATE ON public.question_reports TO authenticated;
CREATE POLICY question_reports_insert_learner ON public.question_reports FOR INSERT TO anon, authenticated
  WITH CHECK (reporter_id IS NULL OR reporter_id = auth.uid());
CREATE POLICY question_reports_read_own_or_editor ON public.question_reports FOR SELECT TO authenticated
  USING (reporter_id = auth.uid() OR public.is_content_admin());
CREATE POLICY question_reports_update_editor ON public.question_reports FOR UPDATE TO authenticated
  USING (public.is_content_admin()) WITH CHECK (public.is_content_admin());

GRANT SELECT, INSERT ON public.question_import_batches TO authenticated;
CREATE POLICY question_import_batches_editor ON public.question_import_batches FOR ALL TO authenticated
  USING (public.is_content_admin()) WITH CHECK (public.is_content_admin());

GRANT SELECT ON public.content_audit_log TO authenticated;
CREATE POLICY content_audit_log_admin_read ON public.content_audit_log FOR SELECT TO authenticated
  USING (public.is_app_admin());

REVOKE ALL ON FUNCTION public.validate_vip_key(TEXT, TEXT) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.validate_vip_key(TEXT, TEXT) TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.vip_key_configs TO authenticated;
CREATE POLICY vip_key_configs_admin_only ON public.vip_key_configs FOR ALL TO authenticated
  USING (public.is_app_admin()) WITH CHECK (public.is_app_admin());

DO $$
BEGIN
  IF to_regclass('public.user_progress') IS NOT NULL THEN
    GRANT SELECT, INSERT, UPDATE, DELETE ON public.user_progress TO authenticated;
    CREATE POLICY user_progress_own_or_admin ON public.user_progress FOR ALL TO authenticated
      USING (user_id = auth.uid() OR public.is_app_admin())
      WITH CHECK (user_id = auth.uid() OR public.is_app_admin());
  END IF;
  IF to_regclass('public.study_history') IS NOT NULL THEN
    GRANT SELECT, INSERT, UPDATE, DELETE ON public.study_history TO authenticated;
    CREATE POLICY study_history_own ON public.study_history FOR ALL TO authenticated
      USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());
  END IF;
  IF to_regclass('public.exam_results') IS NOT NULL THEN
    GRANT SELECT, INSERT, UPDATE, DELETE ON public.exam_results TO authenticated;
    CREATE POLICY exam_results_own_or_admin ON public.exam_results FOR SELECT TO authenticated
      USING (user_id = auth.uid() OR public.is_app_admin());
    CREATE POLICY exam_results_insert_own ON public.exam_results FOR INSERT TO authenticated
      WITH CHECK (user_id = auth.uid());
    CREATE POLICY exam_results_delete_own_or_admin ON public.exam_results FOR DELETE TO authenticated
      USING (user_id = auth.uid() OR public.is_app_admin());
  END IF;
END $$;

DO $$
BEGIN
  IF to_regclass('public.custom_certificates') IS NOT NULL THEN
    -- access_keys has been migrated and scrubbed above. Table-level SELECT is
    -- intentionally kept for compatibility with old deployments using
    -- select('*'); current builds request only catalogue metadata.
    GRANT SELECT ON public.custom_certificates TO anon, authenticated;
    GRANT INSERT, UPDATE, DELETE ON public.custom_certificates TO authenticated;
    CREATE POLICY custom_certificates_read ON public.custom_certificates FOR SELECT TO anon, authenticated USING (true);
    CREATE POLICY custom_certificates_write_editor ON public.custom_certificates FOR ALL TO authenticated
      USING (public.is_content_admin()) WITH CHECK (public.is_content_admin());
  END IF;
  IF to_regclass('public.cert_vip_statuses') IS NOT NULL THEN
    GRANT SELECT ON public.cert_vip_statuses TO anon, authenticated;
    GRANT INSERT, UPDATE, DELETE ON public.cert_vip_statuses TO authenticated;
    CREATE POLICY cert_vip_read ON public.cert_vip_statuses FOR SELECT TO anon, authenticated USING (true);
    CREATE POLICY cert_vip_write_admin ON public.cert_vip_statuses FOR ALL TO authenticated
      USING (public.is_app_admin()) WITH CHECK (public.is_app_admin());
  END IF;
  IF to_regclass('public.cert_disabled_statuses') IS NOT NULL THEN
    GRANT SELECT ON public.cert_disabled_statuses TO anon, authenticated;
    GRANT INSERT, UPDATE, DELETE ON public.cert_disabled_statuses TO authenticated;
    CREATE POLICY cert_disabled_read ON public.cert_disabled_statuses FOR SELECT TO anon, authenticated USING (true);
    CREATE POLICY cert_disabled_write_admin ON public.cert_disabled_statuses FOR ALL TO authenticated
      USING (public.is_app_admin()) WITH CHECK (public.is_app_admin());
  END IF;
END $$;

COMMIT;

-- After creating your own account, run this once with your actual email:
-- UPDATE public.profiles SET role = 'admin'
-- WHERE id = (SELECT id FROM auth.users WHERE email = 'your-email@example.com');

-- Legacy nickname rows are intentionally preserved with user_id = NULL. Assign
-- them manually after confirming ownership; the migration never guesses owners.
