-- Fix mixed Vietnamese/English text inside DP-800 dropdown and drag-drop controls.
-- Safe to run repeatedly. Explanations remain unchanged.

BEGIN;

WITH fixes(id, options) AS (
  VALUES
    (
      'dp1',
      '{"type":"matching_dropdown","statements":[{"id":"1","text":"SELECT f.FeedbackId, f.VehicleId, [select the FeedbackText expression]","correctAnswer":"E"},{"id":"2","text":"WHERE [select the keyword filter predicate]","correctAnswer":"C"},{"id":"3","text":"ORDER BY [select the sort expression] DESC","correctAnswer":"F"}],"choices":[{"key":"A","text":"CONTAINS(FeedbackJson, @Keyword)"},{"key":"B","text":"EDIT_DISTANCE(JSON_VALUE(f.FeedbackJson, ''$.details.comment''), @Keyword) < 3"},{"key":"C","text":"EDIT_DISTANCE(JSON_VALUE(f.FeedbackJson, ''$.text''), @Keyword) < 3"},{"key":"D","text":"JSON_QUERY(f.FeedbackJson, ''$.text'', @KnownIssueDescription) AS FeedbackText"},{"key":"E","text":"JSON_VALUE(f.FeedbackJson, ''$.text'') AS FeedbackText"},{"key":"F","text":"SimilarityScore"}]}'::jsonb
    ),
    (
      'dp2',
      '{"type":"matching_drag_drop","statements":[{"id":"1","text":"In the TRY block, immediately after INSERT and before COMMIT TRANSACTION","correctAnswer":"E"},{"id":"2","text":"In the CATCH block, immediately before THROW","correctAnswer":"B"}],"choices":[{"key":"A","text":"BEGIN CATCH"},{"key":"B","text":"IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION"},{"key":"C","text":"RAISERROR(''CreateOrder failed'', 16, 1)"},{"key":"D","text":"ROLLBACK TRANSACTION"},{"key":"E","text":"SET @OrderId = SCOPE_IDENTITY()"},{"key":"F","text":"THROW"}]}'::jsonb
    ),
    (
      'dp6',
      '{"type":"matching_drag_drop","statements":[{"id":"1","text":"Calculate the exclusive @EndDate boundary for one calendar day","correctAnswer":"A"},{"id":"2","text":"Use a SARGable WHERE predicate that supports an Index Seek","correctAnswer":"B"}],"choices":[{"key":"A","text":"SET @EndDate = DATEADD(day, 1, @StartDate)"},{"key":"B","text":"WHERE o.CreateDate >= @StartDate AND o.CreateDate < @EndDate"},{"key":"C","text":"WHERE CONVERT(date, o.CreateDate) = @StartDate"},{"key":"D","text":"WHERE o.CreateDate BETWEEN @StartDate AND GETDATE()"}]}'::jsonb
    ),
    (
      'dp13',
      '{"type":"matching_drag_drop","statements":[{"id":"1","text":"RawNumber — extract the first substring that matches the pattern","correctAnswer":"A"},{"id":"2","text":"DigitsOnly — remove every non-digit character","correctAnswer":"B"},{"id":"3","text":"PhoneStatus — verify that the pattern occurs exactly once","correctAnswer":"C"}],"choices":[{"key":"A","text":"REGEXP_SUBSTR()"},{"key":"B","text":"REGEXP_REPLACE()"},{"key":"C","text":"REGEXP_COUNT() in a CASE expression"},{"key":"D","text":"REGEXP_INSTR()"},{"key":"E","text":"REGEXP_LIKE()"},{"key":"F","text":"STRING_SIMILARITY()"}]}'::jsonb
    ),
    (
      'dp15',
      '{"type":"matching_drag_drop","statements":[{"id":"1","text":"Computed column for the $.severity property","correctAnswer":"A"},{"id":"2","text":"Covering index that avoids a Key Lookup when returning LogId and LogDateTime","correctAnswer":"B"}],"choices":[{"key":"A","text":"severity AS JSON_VALUE(log, ''$.severity'') PERSISTED"},{"key":"B","text":"CREATE INDEX ix_severity ON Logs(severity) INCLUDE(LogId, LogDateTime, log)"},{"key":"C","text":"severity AS JSON_QUERY(log, ''$.severity'') PERSISTED"},{"key":"D","text":"CREATE CLUSTERED COLUMNSTORE INDEX ON Logs"}]}'::jsonb
    )
)
UPDATE questions AS q
SET options = fixes.options
FROM fixes
WHERE q.cert_id = 'dp-800'
  AND q.id = fixes.id;

DO $$
DECLARE
  updated_count integer;
BEGIN
  SELECT count(*)
  INTO updated_count
  FROM questions
  WHERE cert_id = 'dp-800'
    AND id IN ('dp1', 'dp2', 'dp6', 'dp13', 'dp15')
    AND options::text !~* '(chọn|trong TRY|trong CATCH|tính cận|điều kiện WHERE|trích xuất|loại bỏ|kiểm tra mẫu|cho thuộc tính|tránh Key Lookup)';

  IF updated_count <> 5 THEN
    RAISE EXCEPTION 'Expected 5 corrected DP-800 questions, found %', updated_count;
  END IF;
END $$;

COMMIT;

SELECT id, question_number, options->>'type' AS question_type
FROM questions
WHERE cert_id = 'dp-800'
  AND id IN ('dp1', 'dp2', 'dp6', 'dp13', 'dp15')
ORDER BY question_number;
