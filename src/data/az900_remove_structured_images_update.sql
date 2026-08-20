-- Hide obsolete source answer-area images after rebuilding structured interactions in the UI.
-- Keeps image_hotspot and ordinary diagram questions unchanged.
BEGIN;

UPDATE questions
SET image_url = NULL
WHERE cert_id = 'az-900'
  AND options->>'type' IN ('statement_matrix', 'matching_dropdown', 'matching_drag_drop');

COMMIT;
