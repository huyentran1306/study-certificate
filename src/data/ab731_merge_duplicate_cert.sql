-- Remove the duplicate AB-731 certificate ID and keep the canonical `ab-731` ID.
-- Run this entire file once in the Supabase SQL Editor.
-- This script is idempotent: rerunning it is safe.

BEGIN;

-- These updates are no-ops when the rows have already been migrated.
UPDATE questions
SET cert_id = 'ab-731'
WHERE cert_id = 'custom_ab_731_1787123821491';

UPDATE study_history
SET cert_id = 'ab-731'
WHERE cert_id = 'custom_ab_731_1787123821491';

UPDATE user_progress
SET cert_id = 'ab-731'
WHERE cert_id = 'custom_ab_731_1787123821491';

-- Remove settings that belong only to the duplicate certificate.
DELETE FROM cert_disabled_statuses
WHERE cert_id = 'custom_ab_731_1787123821491';

DELETE FROM cert_vip_statuses
WHERE cert_id = 'custom_ab_731_1787123821491';

DELETE FROM vip_key_configs
WHERE cert_id = 'custom_ab_731_1787123821491';

COMMIT;

-- Expected output: one row, `ab-731 | 100`.
SELECT cert_id, count(*) AS question_count
FROM questions
WHERE cert_id IN ('ab-731', 'custom_ab_731_1787123821491')
GROUP BY cert_id
ORDER BY cert_id;
