-- SEED DATA FOR MICROSOFT DP-800: DEVELOPING AI-ENABLED DATABASE SOLUTIONS
-- Contains all 105 questions
-- Compatible with PostgreSQL / Supabase

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp1',
  'dp-800',
  1,
  'Contoso is deploying an Azure SQL database and wants to query data from the FeedbackJson column of the CustomerFeedback table. The query must:
1. Extract the customer feedback text from the JSON document.
2. Filter rows where the JSON text contains a keyword.
3. Calculate a fuzzy similarity score between the feedback text and a known issue description.
4. Order the results by similarity score, with the highest score first.
How should you construct the Transact-SQL query?',
  '[{"key":"A","text":"SELECT JSON_VALUE(f.FeedbackJson, ''$.text'') AS FeedbackText, EDIT_DISTANCE_SIMILARITY(JSON_VALUE(f.FeedbackJson, ''$.text''), @KnownIssueDescription) AS SimilarityScore FROM dbo.CustomerFeedback f WHERE EDIT_DISTANCE(JSON_VALUE(f.FeedbackJson, ''$.text''), @Keyword) < 3 ORDER BY SimilarityScore DESC"},{"key":"B","text":"SELECT JSON_QUERY(f.FeedbackJson, ''$.text'') AS FeedbackText, EDIT_DISTANCE_SIMILARITY(JSON_VALUE(f.FeedbackJson, ''$.text''), @KnownIssueDescription) AS SimilarityScore FROM dbo.CustomerFeedback f WHERE CONTAINS(FeedbackJson, @Keyword) ORDER BY SimilarityScore DESC"},{"key":"C","text":"SELECT JSON_VALUE(f.FeedbackJson, ''$.details.comment'') AS FeedbackText, EDIT_DISTANCE_SIMILARITY(JSON_VALUE(f.FeedbackJson, ''$.details.comment''), @Keyword) AS SimilarityScore FROM dbo.CustomerFeedback f WHERE EDIT_DISTANCE(JSON_VALUE(f.FeedbackJson, ''$.details.comment''), @Keyword) < 3 ORDER BY FeedbackText DESC"},{"key":"D","text":"SELECT JSON_VALUE(f.FeedbackJson, ''$.text'') AS FeedbackText, EDIT_DISTANCE_SIMILARITY(JSON_VALUE(f.FeedbackJson, ''$.text''), @KnownIssueDescription) AS SimilarityScore FROM dbo.CustomerFeedback f WHERE JSON_VALUE(f.FeedbackJson, ''$.text'') = @Keyword ORDER BY SimilarityScore ASC"}]'::jsonb,
  ARRAY['A']::text[],
  'Để trích xuất chuỗi thô từ cột JSON nvarchar(max), chúng ta sử dụng hàm JSON_VALUE(f.FeedbackJson, ''$.text''). Để lọc các dòng gần đúng với từ khóa nhất, ta dùng hàm EDIT_DISTANCE(...) < 3 trong mệnh đề WHERE. Để sắp xếp theo điểm tương đồng cao nhất trước, chúng ta tái sử dụng định danh cột (alias) trong SELECT là SimilarityScore và xếp giảm dần (DESC).',
  'SQL AI Querying & JSON',
  ARRAY['DP-800', 'JSON_VALUE', 'Fuzzy Search']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp2',
  'dp-800',
  2,
  'You need to implement robust error handling inside a stored procedure named dbo.usp_CreateOrder to insert rows into dbo.Orders. The transaction must abort on any insert failures, and return a consistent error to the caller. How should you complete the TRY/CATCH blocks in the procedure?',
  '[{"key":"A","text":"Trong TRY block, sau INSERT: SET @OrderId = SCOPE_IDENTITY(); Trong CATCH block: IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION; THROW;"},{"key":"B","text":"Trong TRY block, sau INSERT: SET @OrderId = SCOPE_IDENTITY(); Trong CATCH block: BEGIN CATCH; THROW;"},{"key":"C","text":"Trong TRY block, sau INSERT: RAISERROR(''CreateOrder failed'', 16, 1); Trong CATCH block: ROLLBACK TRANSACTION;"},{"key":"D","text":"Trong TRY block, sau INSERT: SET @OrderId = SCOPE_IDENTITY(); Trong CATCH block: IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION; THROW; THROW;"}]'::jsonb,
  ARRAY['A']::text[],
  'Hàm SCOPE_IDENTITY() là cách an toàn nhất để lấy ID của dòng vừa được chèn. Kiểm tra IF @@TRANCOUNT > 0 trước khi ROLLBACK TRANSACTION giúp ngăn chặn lỗi sập DB khi transaction đã bị hủy tự động trước đó. Việc sử dụng THROW; (re-raise) trong Catch block là best-practice để bảo toàn chi tiết lỗi ban đầu.',
  'Transaction Management & Error Handling',
  ARRAY['DP-800', 'ROLLBACK', 'THROW']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp3',
  'dp-800',
  3,
  'Your team is developing an Azure SQL dataset solution from a locally cloned GitHub repository by using Microsoft Visual Studio Code and GitHub Copilot Chat. You need to disable the GitHub Copilot repository-level instructions for yourself without affecting other users. What should you do?',
  '[{"key":"A","text":"From Visual Studio Code, modify your GitHub Copilot Chat user settings to disable loading repository-level custom instructions."},{"key":"B","text":"Add a --debug flag when you start the GitHub Copilot Chat extension."},{"key":"C","text":"Delete the .github/copilot-instructions.md file from your local workspace and push the deletion to origin."},{"key":"D","text":"Ask the GitHub Organization owner to disable repository-level instructions globally."}]'::jsonb,
  ARRAY['A']::text[],
  'Chỉnh sửa User Settings (Cấu hình Người dùng) trong VS Code cho phép tắt tính năng tự động tải tập tin hướng dẫn cấp repository một cách cục bộ trên máy của bạn, bảo đảm không gây ảnh hưởng đến cấu hình của các nhà phát triển khác trong nhóm.',
  'AI Tooling & Workspace',
  ARRAY['DP-800', 'GitHub Copilot', 'VS Code']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp4',
  'dp-800',
  4,
  'You have an Azure SQL database with SQL graph tables dbo.Person (NODE) and dbo.Knows (EDGE). You need to write a Transact-SQL query using the MATCH operator and exactly two directed Knows relationships to return PersonID and DisplayName of people reachable from @StartPersonId. Which query is correct?',
  '[{"key":"A","text":"SELECT p3.PersonId, p3.DisplayName FROM dbo.Person AS p1, dbo.Knows AS k1, dbo.Person AS p2, dbo.Knows AS k2, dbo.Person AS p3 WHERE p1.PersonId = @StartPersonId AND MATCH(p1-(k1)->p2-(k2)->p3);"},{"key":"B","text":"SELECT p3.PersonId, p3.DisplayName FROM dbo.Person AS p1 JOIN dbo.Knows AS k1 ON 1=1 WHERE p1.PersonId = @StartPersonId AND MATCH(p3<-(k2)-p2<-(k1)-p1);"},{"key":"C","text":"SELECT p3.PersonId, p3.DisplayName FROM dbo.Person AS p1, dbo.Knows AS k1, dbo.Person AS p2 WHERE p1.PersonId = @StartPersonId AND MATCH(p1-(k1)->p2) AND MATCH(p2-(k2)->p3);"},{"key":"D","text":"SELECT p2.PersonId, @StartPersonId FROM dbo.Person AS p1 WHERE p1.DisplayName = p2.DisplayName AND MATCH(p1-(k1)->p2-(k2)->p3);"}]'::jsonb,
  ARRAY['A']::text[],
  'Trong truy vấn SQL Graph, cấu trúc MATCH(p1-(k1)->p2-(k2)->p3) định nghĩa chính xác đường đi có hướng dài 2 bước nối các node thông qua các cạnh tương ứng. Không được chia thành hai mệnh đề MATCH độc lập ghép bằng AND vì SQL Graph không hỗ trợ cách viết tách rời này.',
  'Graph Databases',
  ARRAY['DP-800', 'SQL Graph', 'MATCH']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp5',
  'dp-800',
  5,
  'You have a SQL database in Microsoft Fabric with a table containing JSON documents in a column named Payload. You need to return a normalized email value that removes any subaddressing (e.g., user1+abc@contoso.com must be normalized to user1@contoso.com). Which Transact-SQL expression should you use?',
  '[{"key":"A","text":"REGEXP_REPLACE(JSON_VALUE(Payload, ''$.customer_email''), ''\\+.*$'', '''')"},{"key":"B","text":"REGEXP_SUBSTR(JSON_VALUE(Payload, ''$.customer_email''), ''^[^+]+@.*$='')"},{"key":"C","text":"REGEXP_REPLACE(JSON_VALUE(Payload, ''$.customer_email''), ''\\+.*@'', ''@'')"},{"key":"D","text":"REGEXP_REPLACE(JSON_VALUE(Payload, ''$.customer_email''), ''\\+.*.*'', '''')"}]'::jsonb,
  ARRAY['C']::text[],
  'Hàm REGEXP_REPLACE trích xuất giá trị email bằng JSON_VALUE, sau đó tìm kiếm chuỗi bắt đầu bằng dấu cộng \+ theo sau bởi bất kỳ ký tự nào cho đến khi chạm ký tự @ (''\+.*@''), và thay thế toàn bộ cụm đó bằng dấu ''@''. Cách này cắt bỏ phần subaddressing một cách an toàn và giữ nguyên phần tên miền.',
  'SQL AI Querying & JSON',
  ARRAY['DP-800', 'REGEXP_REPLACE', 'Email Normalization']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp6',
  'dp-800',
  6,
  'You have a table dbo.Orders with a CreateDate column containing order creation dates. You need to create a SARGable stored procedure that filters Orders for a single calendar day based on @StartDate input. Which approach is correct?',
  '[{"key":"A","text":"SET @EndDate = DATEADD(day, 1, @StartDate); SELECT ... WHERE o.CreateDate >= @StartDate AND o.CreateDate < @EndDate"},{"key":"B","text":"SELECT ... WHERE CONVERT(char(10), o.CreateDate, 121) = CONVERT(char(10), @StartDate, 121)"},{"key":"C","text":"SELECT ... WHERE CONVERT(date, o.CreateDate) = @StartDate"},{"key":"D","text":"SELECT ... WHERE o.CreateDate BETWEEN @StartDate AND GETDATE()"}]'::jsonb,
  ARRAY['A']::text[],
  'Để đảm bảo thuộc tính SARGable (Search Argumentable), ta không được áp dụng bất kỳ hàm chuyển đổi hay tính toán nào trực tiếp lên cột dữ liệu của bảng (như CONVERT). Thay vào đó, ta tính toán biên thời gian @EndDate trước bằng DATEADD và sử dụng toán tử so sánh phạm vi >= và < để bộ tối ưu hóa truy vấn SQL Server có thể điều hướng Index Seek trên cột CreateDate.',
  'Query Optimization & Indexes',
  ARRAY['DP-800', 'SARGable', 'Performance']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp7',
  'dp-800',
  7,
  'You need to create a scalar User-Defined Function (UDF) in Azure SQL Database that returns the number of whole years between @OrderDate input and the current date/time as a single positive integer. What should be inserted inside the function body?',
  '[{"key":"A","text":"RETURN DATEDIFF(year, GETDATE(), @OrderDate);"},{"key":"B","text":"DATEDIFF(month, @OrderDate, GETDATE()) / 12"},{"key":"C","text":"DATEPART(year, GETDATE()) - DATEPART(year, @OrderDate)"},{"key":"D","text":"RETURN DATEDIFF(year, @OrderDate, GETDATE());"}]'::jsonb,
  ARRAY['D']::text[],
  'Hàm DATEDIFF(year, startdate, enddate) tính toán số ranh giới năm bị vượt qua giữa hai mốc thời gian. Để có số nguyên dương, startdate phải là ngày cũ hơn (@OrderDate) và enddate là ngày hiện tại (GETDATE()). Đồng thời, vì đây là hàm vô hướng (Scalar UDF), bắt buộc phải có từ khóa RETURN để trả về giá trị.',
  'Database Programmability',
  ARRAY['DP-800', 'UDF', 'DATEDIFF']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp8',
  'dp-800',
  8,
  'You deploy Data API Builder (DAB) to Azure Container Apps and have a Container App secret named MSSQL_CONNECTION_STRING mapping to the database connection string. You need to initialize the DAB configuration to read this connection string securely from the environment. Which command should you run?',
  '[{"key":"A","text":"dab init --database-type mssql --connection-string \"secretref:DAB_CONFIG_BASE64\" --host-mode Production"},{"key":"B","text":"dab init --database-type mssql --connection-string \"@env(''MSSQL_CONNECTION_STRING'')\" --host-mode Production --config dab-config.json"},{"key":"C","text":"dab init --database-type mssql --connection-string \"secretref:mssql-connection-string\" --host-mode Production"},{"key":"D","text":"dab init --database-type mssql --connection-string \"@env(''DAB_CONFIG_BASE64'')\" --host-mode Production"}]'::jsonb,
  ARRAY['B']::text[],
  'DAB (Data API Builder) hỗ trợ cú pháp đặc biệt @env(''VARIABLE_NAME'') để thay thế giá trị biến môi trường động vào file dab-config.json lúc chạy thay vì lưu cứng chuỗi kết nối nhạy cảm. Do đó tùy chọn B là cách thức khởi tạo chính xác.',
  'Data API Builder (DAB)',
  ARRAY['DP-800', 'DAB', 'Security']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp9',
  'dp-800',
  9,
  'You have a SQL database in Microsoft Fabric with a table containing an nvarchar(max) column named MessageText. You need to write a query using REGEXP_SUBSTR to extract an ID from MessageText. Large object types (LOBs) like nvarchar(max) are not supported by regular expression functions. What should you do?',
  '[{"key":"A","text":"Apply STRING_ESCAPE(MessageText, ''json'') before calling REGEXP_SUBSTR."},{"key":"B","text":"Cast MessageText to nvarchar(4000) before calling REGEXP_SUBSTR."},{"key":"C","text":"Add a COLLATE Latin1_General_CS_AS clause to MessageText before calling REGEXP_SUBSTR."},{"key":"D","text":"Run TRY_CONVERT(varchar(max), MessageText) before calling REGEXP_SUBSTR."}]'::jsonb,
  ARRAY['B']::text[],
  'Các hàm biểu thức chính quy (regular expressions) như REGEXP_SUBSTR không chấp nhận trực tiếp dữ liệu loại LOBs như nvarchar(max) làm đối số đầu vào. Vì thông tin cần tìm nằm ở đoạn đầu văn bản, việc ép kiểu cột dữ liệu xuống kích thước chuẩn nvarchar(4000) giúp truy vấn chạy đúng cú pháp mà không gây mất mát thông tin mục tiêu.',
  'Database Programmability',
  ARRAY['DP-800', 'Casting', 'REGEXP_SUBSTR']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp10',
  'dp-800',
  10,
  'You need to prevent a database-level DDL trigger named ddl_Audit from firing during the next deployment. The trigger object must remain in place. Which Transact-SQL statement should you use?',
  '[{"key":"A","text":"ALTER TRIGGER ddl_Audit DISABLE ON DATABASE;"},{"key":"B","text":"ALTER DATABASE CURRENT SET AUTO_TRIGGER = OFF;"},{"key":"C","text":"DISABLE TRIGGER ddl_Audit ON DATABASE;"},{"key":"D","text":"DROP TRIGGER ddl_Audit ON DATABASE;"}]'::jsonb,
  ARRAY['C']::text[],
  'Để vô hiệu hóa tạm thời hoạt động của một trigger cấp database mà không xóa bỏ định nghĩa của nó khỏi hệ thống, câu lệnh chuẩn là DISABLE TRIGGER ddl_Audit ON DATABASE;.',
  'Database Security & Triggers',
  ARRAY['DP-800', 'DDL Trigger', 'DISABLE TRIGGER']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp11',
  'dp-800',
  11,
  'Your team uses GitHub Copilot Chat in Microsoft SQL Server Management Studio (SSMS) to write and execute queries against an Azure SQL database storing sensitive customer data. What prevents Copilot Chat-generated queries from accessing data beyond a developer''s authorized permissions?',
  '[{"key":"A","text":"GitHub Copilot Chat runs queries in an isolated read-only sandbox with zero connection to production schema."},{"key":"B","text":"GitHub Copilot Chat runs queries by using the developer''s active database login identity and permissions."},{"key":"C","text":"GitHub Copilot Chat filters query results on the client side to strip out unauthorized rows."},{"key":"D","text":"GitHub Copilot Chat uses an automatic built-in row-level security (RLS) system decoupled from standard SQL."}]'::jsonb,
  ARRAY['B']::text[],
  'GitHub Copilot Chat tích hợp trong SSMS không sở hữu định danh kết nối hay phân quyền độc lập. Mọi truy vấn sinh ra đều được gửi và thực thi thông qua ngữ cảnh kết nối (connection context) hiện tại của chính lập trình viên đó. Do vậy, các ràng buộc phân quyền SQL, RLS và kiểm soát truy cập thông thường vẫn được thực thi một cách tuyệt đối.',
  'AI Tooling & Workspace',
  ARRAY['DP-800', 'SSMS', 'Security']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp12',
  'dp-800',
  12,
  'You are setting up an event-driven architecture with an Azure SQL Trigger for Azure Functions to react to row changes in table dbo.Employee within 5 seconds and maximum 100 changes per batch. Which two database-side configurations must you perform?',
  '[{"key":"A","text":"Enable Change Tracking at the database level."},{"key":"B","text":"Enable Change Tracking on the dbo.Employee table."},{"key":"C","text":"Create an AFTER DML trigger on dbo.Employee."},{"key":"D","text":"Set Sql_Trigger_MaxBatchSize to 100 in the database settings."}]'::jsonb,
  ARRAY['A', 'B']::text[],
  'Để kích hoạt cơ chế kích hoạt sự kiện (SQL Trigger for Azure Functions), cơ sở dữ liệu Azure SQL phải bật tính năng SQL Change Tracking ở cả cấp cơ sở dữ liệu (ALTER DATABASE ... SET CHANGE_TRACKING = ON) lẫn cấp bảng mục tiêu (ALTER TABLE ... ENABLE CHANGE_TRACKING). Các thiết lập như batch size và polling interval là cấu hình thuộc phía ứng dụng Azure Functions chứ không phải cấu hình phía DB.',
  'Database Programmability',
  ARRAY['DP-800', 'Change Tracking', 'Azure Functions']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp13',
  'dp-800',
  13,
  'You need to write a SELECT query in SQL Server 2025 that returns:
1. RawNumber: The first substring matching a phone number format.
2. DigitsOnly: Removes all non-digit characters from RawNumber.
3. PhoneStatus: Returns ''Valid'' if a phone number exists exactly once, otherwise ''Missing''.
Which REGEXP functions should you use for these columns?',
  '[{"key":"A","text":"RawNumber: REGEXP_SUBSTR(); DigitsOnly: REGEXP_REPLACE(); PhoneStatus: REGEXP_COUNT() in CASE statement"},{"key":"B","text":"RawNumber: REGEXP_INSTR(); DigitsOnly: REGEXP_SUBSTR(); PhoneStatus: REGEXP_LIKE()"},{"key":"C","text":"RawNumber: REGEXP_SUBSTR(); DigitsOnly: REGEXP_REPLACE(); PhoneStatus: STRING_SIMILARITY()"},{"key":"D","text":"RawNumber: REGEXP_REPLACE(); DigitsOnly: REGEXP_SUBSTR(); PhoneStatus: REGEXP_COUNT()"}]'::jsonb,
  ARRAY['A']::text[],
  'Hàm REGEXP_SUBSTR được thiết kế chuyên biệt để trích xuất chuỗi con khớp mẫu Regex. Hàm REGEXP_REPLACE thay thế các ký tự không phải số (\D) bằng chuỗi rỗng để giữ lại chỉ chữ số. Hàm REGEXP_COUNT đếm tần suất xuất hiện của mẫu điện thoại trong thông điệp để xác minh tính duy nhất (bằng 1).',
  'SQL AI Querying & JSON',
  ARRAY['DP-800', 'REGEXP_SUBSTR', 'Data Cleaning']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp14',
  'dp-800',
  14,
  'You discover that some records in a table already contain NULL values in a field. You need to ensure that all future records must have a non-null value for this field, without immediately fixing the existing NULL rows. What should you add?',
  '[{"key":"A","text":"A standard NOT NULL column constraint."},{"key":"B","text":"A check constraint configured with the WITH NOCHECK option (e.g. CHECK (Owner IS NOT NULL))."},{"key":"C","text":"A nonclustered index on the field."},{"key":"D","text":"A unique constraint with NULL filtering."}]'::jsonb,
  ARRAY['B']::text[],
  'Vì bảng đang chứa dữ liệu NULL, việc thay đổi trực tiếp thuộc tính cột thành NOT NULL sẽ bị lỗi. Thay vào đó, ta có thể bổ sung một ràng buộc kiểm tra CHECK (Owner IS NOT NULL) đi kèm tùy chọn WITH NOCHECK. Ràng buộc này sẽ bỏ qua các dòng dữ liệu không hợp lệ đã tồn tại từ trước và chỉ bắt đầu kiểm tra, cưỡng chế quy tắc đối với các thao tác INSERT/UPDATE trong tương lai.',
  'Database Integrity',
  ARRAY['DP-800', 'Ràng buộc CHECK', 'NOCHECK']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp15',
  'dp-800',
  15,
  'You have a daily report filtering by a $.severity JSON property stored in a nvarchar(max) column. The query is causing performance issues due to full table scans. You need to optimize the table to allow index seek and avoid key lookups on returning fields (LogId, LogDateTime). What should you do?',
  '[{"key":"A","text":"Add computed column severity: AS JSON_VALUE(log, ''$.severity'') PERSISTED; and create an index on it: CREATE INDEX ix_severity ON Logs(severity) INCLUDE(LogId, LogDateTime, log);"},{"key":"B","text":"Create a JSON index using CREATE JSON INDEX on $.severity and include LogId and LogDateTime in the JSON schema."},{"key":"C","text":"Add computed column: AS JSON_QUERY(log, ''$.severity'') PERSISTED; and create a nonclustered index on it."},{"key":"D","text":"Create a clustered columnstore index on the entire table to optimize overall scans."}]'::jsonb,
  ARRAY['A']::text[],
  'Do severity là thuộc tính giá trị đơn lẻ (scalar), ta sử dụng JSON_VALUE để trích xuất. Gắn nhãn PERSISTED giúp giá trị này được lưu vật lý xuống ổ đĩa, cho phép lập index. Để tránh Key Lookup quay lại bảng gốc khi lấy LogId, LogDateTime và log, ta thêm chúng vào danh sách cột INCLUDE của chỉ mục phi cụm (covering index).',
  'Query Optimization & Indexes',
  ARRAY['DP-800', 'Computed Column', 'Covering Index']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp16',
  'dp-800',
  16,
  'You design a database schema combining Dynamic Data Masking (DDM) to obfuscate sensitive fields (email, phone) and Row-Level Security (RLS) to restrict regional access. Which of the following statements is true regarding how these security features interact?',
  '[{"key":"A","text":"RLS and DDM run sequentially. RLS filters out unauthorized rows first; if a row is filtered out, masking rules are never evaluated or applied to it."},{"key":"B","text":"DDM is applied first to obfuscate all data, then RLS is applied to the masked values."},{"key":"C","text":"Database administrators bypass RLS automatically when querying masked data via an application connection pool."},{"key":"D","text":"RLS and DDM cannot be enabled simultaneously on the same table."}]'::jsonb,
  ARRAY['A']::text[],
  'Row-Level Security (RLS) hoạt động ở giai đoạn đầu của luồng xử lý truy vấn để loại bỏ hoàn toàn các bản ghi không được phép truy cập. Chỉ những bản ghi vượt qua bộ lọc RLS mới đi tiếp và được áp dụng Dynamic Data Masking (DDM) để làm mờ dữ liệu nhạy cảm trước khi trả về cho khách hàng.',
  'Database Security & Triggers',
  ARRAY['DP-800', 'RLS', 'Dynamic Data Masking']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp17',
  'dp-800',
  17,
  'You write an AFTER UPDATE trigger on table dbo.MaintenanceEvents to update a LastModifiedUtc column. To prevent infinite trigger recursion (the trigger firing another update on the same table, looping indefinitely), what condition should you use?',
  '[{"key":"A","text":"INNER JOIN inserted i ON m.MaintenanceId = i.MaintenanceId WHERE m.LastModifiedUtc <> i.LastModifiedUtc"},{"key":"B","text":"INNER JOIN inserted i ON m.VehicleId = i.VehicleId WHERE i.MaintenanceId IS NOT NULL"},{"key":"C","text":"INNER JOIN deleted d ON m.MaintenanceId = d.MaintenanceId WHERE m.LastModifiedUtc = d.LastModifiedUtc"},{"key":"D","text":"No extra condition is needed because AFTER triggers do not support recursion by default in SQL Server."}]'::jsonb,
  ARRAY['A']::text[],
  'Nếu một trigger AFTER UPDATE tự thực hiện lệnh UPDATE lên chính bảng của nó, nó sẽ tự kích hoạt đệ quy. Bằng cách thêm điều kiện WHERE m.LastModifiedUtc <> i.LastModifiedUtc, ở lần đệ quy thứ hai giá trị thời gian trong bảng và bảng ảo ''inserted'' đã trùng khớp, làm cho điều kiện lọc trả về False và lập tức dừng vòng lặp.',
  'Database Programmability',
  ARRAY['DP-800', 'Trigger Recursion', 'AFTER TRIGGER']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp18',
  'dp-800',
  18,
  'Your ingestion pipeline sometimes fails due to malformed JSON and duplicate payloads being written to your Azure SQL database. Which two database-side solutions should you implement to enforce data quality at the tier level?',
  '[{"key":"A","text":"Create a deterministic computed column using a hash function like HASHBYTES and append a UNIQUE INDEX on it."},{"key":"B","text":"Add a CHECK constraint combined with the built-in ISJSON function (e.g. CHECK (ISJSON(FeedbackJson) > 0))."},{"key":"C","text":"Enable snapshot isolation on the database to handle concurrent duplicates."},{"key":"D","text":"Create a DML trigger that automatically parses and attempts to rewrite malformed JSON on the fly."}]'::jsonb,
  ARRAY['A', 'B']::text[],
  'Để chống trùng lặp dữ liệu lớn/phức tạp, giải pháp hiệu quả là sinh mã băm bằng HASHBYTES trên cột computed và đặt chỉ mục UNIQUE INDEX lên đó. Để chặn dữ liệu JSON bị lỗi cấu trúc, ta tạo ràng buộc CHECK sử dụng hàm ISJSON() > 0 nhằm loại bỏ ngay lập tức trước khi lưu trữ.',
  'Database Integrity',
  ARRAY['DP-800', 'ISJSON', 'HASHBYTES']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp19',
  'dp-800',
  19,
  'You need to configure your Microsoft SQL Server 2025 instance to call an Azure OpenAI REST endpoint for chat completions with the highest level of security. How should you define the DATABASE SCOPED CREDENTIAL?',
  '[{"key":"A","text":"CREATE DATABASE SCOPED CREDENTIAL AzureOpenAIHeaders WITH IDENTITY = ''Managed Identity'', SECRET = ''\"resourceid\":\"https://cognitiveservices.azure.com\"'';"},{"key":"B","text":"CREATE DATABASE SCOPED CREDENTIAL AzureOpenAIHeaders WITH IDENTITY = ''HTTPEnpointHeaders'', SECRET = N''\"api-key\":\"<your_key>\"'';"},{"key":"C","text":"CREATE DATABASE SCOPED CREDENTIAL AzureOpenAIHeaders WITH IDENTITY = ''AzureOpenAI'', SECRET = ''\"resourceid\":\"https://cognitiveservices.azure.com\"'';"},{"key":"D","text":"CREATE DATABASE SCOPED CREDENTIAL AzureOpenAIHeaders WITH IDENTITY = ''HTTPEndpointQueryString'', SECRET = N''\"api-key\":\"<your_key>\"'';"}]'::jsonb,
  ARRAY['A']::text[],
  'Sử dụng Managed Identity (Định danh quản lý) loại bỏ nhu cầu lưu trữ cứng các API key dạng văn bản rõ nguy hiểm. Khi tích hợp với dịch vụ Azure OpenAI hoặc Cognitive Services, SQL Server yêu cầu tham số SECRET phải chứa định danh tài nguyên (resourceid) hợp lệ trỏ tới endpoint đám mây bảo mật.',
  'Database Security & Triggers',
  ARRAY['DP-800', 'Managed Identity', 'Azure OpenAI']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp20',
  'dp-800',
  20,
  'You have a table containing two million articles with high-dimensional vector embeddings, which are updated frequently. The current embedding pipeline runs as a nightly batch, but users complain that search results are stale. You need near real-time embeddings updates while minimizing database CPU overhead. What should you do?',
  '[{"key":"A","text":"Enable Change Data Capture (CDC) on the table and use an external Azure Functions app to process rows changes and generate embeddings asynchronously."},{"key":"B","text":"Create an AFTER INSERT/UPDATE trigger that calls AI_GENERATE_EMBEDDINGS synchronously for each modified row."},{"key":"C","text":"Run a T-SQL scheduled Agent job every hour to scan the entire table and regenerate embeddings for all rows."},{"key":"D","text":"Modify the search query to use VECTOR_DISTANCE instead of VECTOR_SEARCH to bypass index latency."}]'::jsonb,
  ARRAY['A']::text[],
  'Việc gọi API ngoài để sinh embeddings trực tiếp trong Database trigger là phản mẫu (anti-pattern) vì nó làm nghẽn luồng transaction và gây quá tải CPU của Database. Bằng cách sử dụng CDC, các sự kiện thay đổi dòng được ghi nhận phi tuần tự và xử lý bất đồng bộ thông qua Azure Functions, giúp giải phóng hoàn toàn tài nguyên cho DB chính.',
  'Query Optimization & Indexes',
  ARRAY['DP-800', 'CDC', 'Asynchronous Processing']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp21',
  'dp-800',
  21,
  'Your company policy strictly prohibits sharing customer Personally Identifiable Information (PII), secrets, and query results with any external AI service. You need to use GitHub Copilot Chat to write a stored procedure joining two tables. What is the best practice to get accurate code while maintaining compliance?',
  '[{"key":"A","text":"Provide GitHub Copilot Chat with the table schema definitions (metadata) only, omitting any real customer rows."},{"key":"B","text":"Paste a representative subset of real customer email rows so the AI can understand edge cases."},{"key":"C","text":"Expose the SQL database connection string to Copilot Chat to let it validate the tables directly."},{"key":"D","text":"Run a query returning the data, and copy-paste the entire result set into the chat window."}]'::jsonb,
  ARRAY['A']::text[],
  'Để tuân thủ tuyệt đối quy định bảo mật thông tin khách hàng, lập trình viên chỉ cần cung cấp định nghĩa cấu trúc bảng (schema/metadata) cho mô hình AI. Copilot Chat hoàn toàn hiểu được các tên cột, kiểu dữ liệu và mối quan hệ khóa ngoại để sinh code chuẩn xác mà không cần tiếp cận bất kỳ bản ghi thực tế nào.',
  'AI Tooling & Workspace',
  ARRAY['DP-800', 'Data Privacy', 'PII']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp22',
  'dp-800',
  22,
  'You need to configure secure, passwordless authentication and isolated network access between an Azure App Service API and an Azure SQL database. The solution must ensure traffic remains within the Microsoft backbone fabric. What should you configure?',
  '[{"key":"A","text":"Authentication: Enable a system-assigned Managed Identity and Microsoft Entra authentication; Network: Create a Private Endpoint and disable public network access."},{"key":"B","text":"Authentication: Use SQL login with credentials stored in Azure Key Vault; Network: Enable ''Allow Azure Services'' firewall setting."},{"key":"C","text":"Authentication: Configure client certificate authentication on both tiers; Network: Add public outbound App Service IP addresses to SQL firewall rules."},{"key":"D","text":"Authentication: Use Managed Identity with password rotation; Network: Establish a public-facing Application Gateway."}]'::jsonb,
  ARRAY['A']::text[],
  'Kết hợp Managed Identity cùng bảo mật cấp mạng thông qua Private Endpoint (điểm cuối tư nhân) là giải pháp hoàn hảo nhất. Nó loại bỏ việc quản lý mật khẩu rõ, đồng thời chuyển toàn bộ lưu lượng truy cập sang mạng nội bộ của Microsoft Azure thay vì đi qua internet công cộng.',
  'Database Security & Triggers',
  ARRAY['DP-800', 'Managed Identity', 'Private Endpoint']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp23',
  'dp-800',
  23,
  'You need to ensure that database search embeddings are updated near real-time whenever documentation in a table changes, without using a nightly batch process or blocking live client transactions. Why is Change Tracking preferred over Table Triggers for this solution?',
  '[{"key":"A","text":"Change Tracking enables lightweight incremental queries of modified rows asynchronously, whereas table triggers block transactional workloads by initiating synchronous calls."},{"key":"B","text":"Table triggers can only track INSERT statements but cannot capture UPDATE or DELETE actions."},{"key":"C","text":"Change Tracking automatically generates embeddings inside the SQL engine without requiring external models."},{"key":"D","text":"Table triggers require converting all columns to float(32) which destroys index performance."}]'::jsonb,
  ARRAY['A']::text[],
  'Tính năng Change Tracking (Theo dõi thay đổi) của SQL Server cho phép các dịch vụ bên ngoài kéo dữ liệu thay đổi một cách gọn nhẹ thông qua cơ chế kéo (pull model) bất đồng bộ. Ngược lại, trigger hoạt động đồng thì (synchronous) trực tiếp trong tiến trình giao dịch, nên việc thực hiện các thao tác tốn tài nguyên như gọi AI model sẽ làm chậm toàn bộ hệ thống.',
  'Query Optimization & Indexes',
  ARRAY['DP-800', 'Change Tracking', 'Triggers']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp24',
  'dp-800',
  24,
  'You are designing a RAG pattern in an isolated Microsoft SQL Server 2025 environment with zero outbound network connectivity. You need to generate text embeddings natively inside the database. What two steps must you implement?',
  '[{"key":"A","text":"Create an external model project using the local ONNX Runtime and local disk paths; and GRANT EXECUTE ON EXTERNAL MODEL to the authorized database user."},{"key":"B","text":"Establish an Azure ExpressRoute connection to Microsoft Foundry; and grant CONTROL permissions to the system master."},{"key":"C","text":"Deploy an on-premises Azure OpenAI Edge container; and create a trigger executing sp_invoke_external_rest_endpoint."},{"key":"D","text":"Create a database scoped credential mapping directly to a public HuggingFace REST endpoint."}]'::jsonb,
  ARRAY['A']::text[],
  'Do môi trường bị cô lập mạng hoàn toàn, ta không thể gọi các API REST như Azure OpenAI. SQL Server 2025 hỗ trợ nạp mô hình học máy cục bộ qua định dạng ONNX và chạy trực tiếp trên máy chủ bằng thư viện ONNX Runtime. Đồng thời, ta phân quyền thực thi an toàn bằng lệnh GRANT EXECUTE ON EXTERNAL MODEL.',
  'Query Optimization & Indexes',
  ARRAY['DP-800', 'ONNX Runtime', 'SQL Server 2025']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp25',
  'dp-800',
  25,
  'Following a database deployment that updated indexes, an API stored procedure begins running significantly slower. Query Store reveals that a sub-optimal execution plan was generated and is currently in use, although a highly efficient older plan still exists in the history logs. How can you resolve this issue immediately without code changes?',
  '[{"key":"A","text":"Execute the stored procedure: sp_query_store_force_plan to force the database engine to use the historical, high-performing plan."},{"key":"B","text":"Run DBCC FREEPROCCACHE to clear the global plan cache across the entire SQL server."},{"key":"C","text":"Execute ALTER DATABASE SET AUTOMATIC_TUNING = FORCE_LAST_GOOD_PLAN to run automatic tuning."},{"key":"D","text":"Execute sp_query_store_set_hints to append custom MAXDOP hints to force quick compilation."}]'::jsonb,
  ARRAY['A']::text[],
  'Hàm hệ thống sp_query_store_force_plan cho phép quản trị viên cơ sở dữ liệu ghim trực tiếp kế hoạch thực thi cũ (đã được chứng minh có hiệu suất tốt) cho truy vấn cụ thể, lập tức khắc phục tình trạng Plan Regression (suy thoái kế hoạch) mà không cần can thiệp mã nguồn ứng dụng.',
  'Query Optimization & Indexes',
  ARRAY['DP-800', 'Query Store', 'Plan Regression']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp26',
  'dp-800',
  26,
  'You need to implement a semantic similarity search over an incident table to help customer service agents find similar issues. The table contains the columns: VehicleLocation (geography), IncidentDescription (nvarchar(max)), IncidentType (varchar(50)), and SeverityScore (int). Which column must you use to generate your vector embeddings?',
  '[{"key":"A","text":"IncidentDescription"},{"key":"B","text":"VehicleLocation"},{"key":"C","text":"IncidentType"},{"key":"D","text":"SeverityScore"}]'::jsonb,
  ARRAY['A']::text[],
  'Mô hình vector hóa văn bản (embeddings) hoạt động hiệu quả nhất trên các trường chứa ngôn ngữ tự nhiên, phong phú ngữ cảnh như IncidentDescription. Các trường phân loại ngắn (IncidentType) hay số (SeverityScore) không cung cấp đủ ngữ nghĩa để thực hiện tìm kiếm ngữ nghĩa.',
  'SQL AI Querying & JSON',
  ARRAY['DP-800', 'Embeddings', 'Semantic Search']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp27',
  'dp-800',
  27,
  'You are running semantic similarity queries over millions of 1,536-dimensional vectors. Running standard scans takes too long and causes database bottlenecks. How should you optimize the vector queries to meet strict low-latency requirements?',
  '[{"key":"A","text":"Create a specialized vector index on the vector(1536) column using DiskANN type."},{"key":"B","text":"Create a standard nonclustered B-tree index on the vector(1536) column."},{"key":"C","text":"Build a computed column comparing the vectors mathematically and index that column."},{"key":"D","text":"Create a full-text index on the vector column."}]'::jsonb,
  ARRAY['A']::text[],
  'Để tìm kiếm nhanh trên không gian vector nhiều chiều, SQL Server 2025 cung cấp cú pháp CREATE VECTOR INDEX sử dụng thuật toán DiskANN để dựng chỉ mục Láng giềng Gần nhất (Approximate Nearest Neighbor - ANN). Chỉ mục B-tree hay Full-text thông thường không thể hoạt động trên kiểu dữ liệu vector.',
  'Query Optimization & Indexes',
  ARRAY['DP-800', 'Vector Index', 'DiskANN']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp28',
  'dp-800',
  28,
  'You want to allow developers using GitHub Copilot Chat inside VS Code to query live catalog metadata and retrieve current schema changes dynamically from an Azure SQL database without using outdated static files. What should you configure?',
  '[{"key":"A","text":"Configure GitHub Copilot Chat to connect to an MCP (Model Context Protocol) server for SQL Server."},{"key":"B","text":"Export the database schema to a static .dacpac file and load it in the prompt window."},{"key":"C","text":"Add the database schema code into a local copilot-instructions.md file."},{"key":"D","text":"Include the entire visual studio database project in the source repository."}]'::jsonb,
  ARRAY['A']::text[],
  'MCP (Giao thức bối cảnh mô hình) là một chuẩn mở cho phép các mô hình AI kết nối và tương tác thời gian thực với các công cụ phát triển phần mềm bên ngoài. Sử dụng MCP server giúp Copilot truy vấn trực tiếp catalog hiện hành của database để sinh câu lệnh chính xác nhất.',
  'AI Tooling & Workspace',
  ARRAY['DP-800', 'MCP', 'Schema Discovery']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp29',
  'dp-800',
  29,
  'You plan to upgrade your Azure SQL Database semantic search from ''text-embedding-ada-002'' to the more accurate ''text-embedding-3-small'' model. Both models output vectors of 1,536 dimensions. What is the most critical first step before running VECTOR_SEARCH queries with the new model?',
  '[{"key":"A","text":"Regenerate all existing database embeddings using the new text-embedding-3-small model."},{"key":"B","text":"Convert the Embedding column from vector(1536) to nvarchar(max) temporarily."},{"key":"C","text":"Rebuild the vector index on the existing old embeddings without changes."},{"key":"D","text":"Normalize the vector lengths using L2 normalization before initiating queries."}]'::jsonb,
  ARRAY['A']::text[],
  'Mỗi mô hình embedding ánh xạ văn bản vào một không gian toán học có tọa độ hoàn toàn khác nhau. Cho dù cả hai mô hình cùng trả về độ dài 1536 chiều, các vector tạo bởi hai mô hình khác nhau không bao giờ có thể đối chiếu hay đo khoảng cách tương đồng với nhau. Bắt buộc phải tái sinh (regenerate) toàn bộ vector cũ.',
  'SQL AI Querying & JSON',
  ARRAY['DP-800', 'Model Upgrade', 'Vector Math']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp30',
  'dp-800',
  30,
  'You are designing an e-commerce semantic search feature where users can search for products using natural language and apply structured filters on brand and price. When constructing the text source to generate embeddings, which of the following is correct?',
  '[{"key":"A","text":"Concatenate rich text columns like product_name, category, and description; but exclude price since price filtering is better handled via standard SQL WHERE clauses."},{"key":"B","text":"Include the price column directly inside the concatenated text source because embeddings excel at numeric range comparisons."},{"key":"C","text":"Only embed the description column and use full-text index on brand names."},{"key":"D","text":"Price must be embedded separately as a float(32) vector to support similarity matching."}]'::jsonb,
  ARRAY['A']::text[],
  'Các mô hình embedding hoạt động tốt trên ngữ nghĩa văn bản mô tả để tìm sự tương đồng. Đối với các thuộc tính định lượng thay đổi liên tục như giá (price), việc nhúng vào text sẽ tạo ra nhiễu và làm sai lệch tìm kiếm. Giá cả được xử lý chính xác và tối ưu nhất bằng mệnh đề WHERE chuẩn trong SQL.',
  'SQL AI Querying & JSON',
  ARRAY['DP-800', 'Embedding Design', 'Best Practices']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp31',
  'dp-800',
  31,
  'When consuming the response from an Azure OpenAI REST endpoint call inside your T-SQL stored procedure, the engine returns a JSON string. Which T-SQL function is the most efficient and correct to extract the scalar string of the generated answer?',
  '[{"key":"A","text":"JSON_VALUE(@response, ''$.choices[0].message.content'')"},{"key":"B","text":"JSON_QUERY(@response, ''$.choices[0].message.content'')"},{"key":"C","text":"OPENJSON(@response) WITH (content nvarchar(max))"},{"key":"D","text":"JSON_MODIFY(@response, ''$.choices[0].message.content'', ''get'')"}]'::jsonb,
  ARRAY['A']::text[],
  'Hàm JSON_VALUE() dùng để trích xuất một giá trị đơn (scalar value) như chuỗi, số hoặc boolean từ một chuỗi định dạng JSON. Vì nội dung câu trả lời ở đường dẫn $.choices[0].message.content là một chuỗi văn bản, JSON_VALUE là sự lựa chọn tối ưu nhất so với JSON_QUERY (vốn dùng cho đối tượng hoặc mảng).',
  'SQL AI Querying & JSON',
  ARRAY['DP-800', 'JSON_VALUE', 'Azure OpenAI']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp32',
  'dp-800',
  32,
  'You have a Microsoft Fabric workspace named Workspace1 containing a SQL database named SalesDB and an API for GraphQL named SalesApi. You have a Microsoft Entra group named SqlUsers with the Viewer role in Workspace1. From Workspace1, you assign ''View and Edit GraphQL item'' permission to SalesApi for SqlUsers. The connection to SalesDB uses SSO. Which of the following statements is true?',
  '[{"key":"A","text":"The members of SqlUsers can modify the data in SalesDB via SalesAPI."},{"key":"B","text":"The members of SqlUsers can view the data in SalesDB via SalesAPI."},{"key":"C","text":"The members of SqlUsers can change the field mappings of SalesApi but cannot view or modify the actual data in SalesDB."},{"key":"D","text":"The members of SqlUsers can run mutations and queries in SalesDB."}]'::jsonb,
  ARRAY['C']::text[],
  'Thành viên của nhóm SqlUsers có quyền ''View and Edit GraphQL item'' và vai trò Viewer trong Workspace. Quyền này cho phép họ thay đổi cấu trúc ánh xạ trường (field mappings) của SalesApi. Tuy nhiên, họ không được cấp quyền ''Run Queries and Mutations'', vì vậy họ không thể đọc hay sửa đổi dữ liệu thực tế trong SalesDB thông qua GraphQL API.',
  'Microsoft Fabric & GraphQL',
  ARRAY['DP-800', 'Fabric', 'SSO', 'GraphQL']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp33',
  'dp-800',
  33,
  'During an incident window, you discover that Session 72 is sleeping with open_transaction_count = 1. Multiple other sessions show blocking_session_id = 72 in sys.dm_exec_requests. sys.dm_exec_input_buffer(72, NULL) returns ''BEGIN TRANSACTION UPDATE Sales.Orders''. Users report that updates to Sales.Orders intermittently time out. What is the cause of the blocking?',
  '[{"key":"A","text":"A long-running SELECT statement is blocking writers."},{"key":"B","text":"Session 72 caused a deadlock."},{"key":"C","text":"An explicit transaction was started but not committed or rolled back."},{"key":"D","text":"A lock escalation occurred."}]'::jsonb,
  ARRAY['C']::text[],
  'Trạng thái ''sleeping'' kết hợp với open_transaction_count = 1 chỉ ra rằng session 72 đã mở một transaction một cách tường minh (BEGIN TRANSACTION) và thực hiện cập nhật nhưng chưa bao giờ chạy COMMIT hoặc ROLLBACK TRANSACTION. Do đó, các khóa độc quyền (exclusive locks) vẫn bị giữ vô thời hạn, làm nghẽn các phiên làm việc khác cho đến khi phiên 72 bị ngắt kết nối.',
  'Transaction Management & Error Handling',
  ARRAY['DP-800', 'Blocking', 'sys.dm_exec_requests']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp34',
  'dp-800',
  34,
  'You have a SQL database in Microsoft Fabric containing a multi-statement table-valued function (TVF) named Sales.mstvf_OrderStatus() and a scalar function dbo.ufn_GetTaxMultiplier. Joins on Sales.mstvf_OrderStatus() produce inconsistent execution plans. Also, executing ufn_GetTaxMultiplier without schema prefix results in an error. How should you resolve these issues?',
  '[{"key":"A","text":"Rewrite Sales.mstvf_OrderStatus() as an inline table-valued function (ITVF) to allow the Optimizer to inline its code; and always call the scalar function using its two-part name (dbo.ufn_GetTaxMultiplier)."},{"key":"B","text":"Create a clustered index on Sales.mstvf_OrderStatus() and enable auto-tuning on ufn_GetTaxMultiplier."},{"key":"C","text":"Convert Sales.mstvf_OrderStatus() to a stored procedure and execute ufn_GetTaxMultiplier using the EXECUTE AS OWNER statement."},{"key":"D","text":"Rewrite Sales.mstvf_OrderStatus() as a scalar function and compile ufn_GetTaxMultiplier with SCHEMABINDING."}]'::jsonb,
  ARRAY['A']::text[],
  'Hàm TVF nhiều câu lệnh (MSTVF) hoạt động như một hộp đen đối với bộ tối ưu hóa truy vấn SQL Server, dẫn đến ước lượng số dòng sai và kế hoạch thực thi kém. Chuyển đổi nó thành hàm TVF nội tuyến (ITVF) giúp bộ tối ưu hóa gộp thân hàm trực tiếp vào truy vấn gọi nó. Đồng thời, SQL Server yêu cầu hàm vô hướng (scalar UDF) phải được gọi bằng tên đầy đủ gồm hai phần (schema_name.object_name).',
  'Database Programmability',
  ARRAY['DP-800', 'ITVF', 'UDF', 'MSTVF']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp35',
  'dp-800',
  35,
  'You have an Azure SQL database named SalesDB on logical server sales-sql01. You enable a user-assigned managed identity named OrderApi-Id for an Azure App Service web app named OrderApi. You need to configure OrderApi to connect to SalesDB using Microsoft Entra authentication with read and write permissions to SalesDB. Which T-SQL statements should you run in SalesDB?',
  '[{"key":"A","text":"CREATE LOGIN [OrderApi-Id] FROM EXTERNAL PROVIDER; ALTER SERVER ROLE sysadmin ADD MEMBER [OrderApi-Id];"},{"key":"B","text":"CREATE USER [OrderApi-Id] WITH PASSWORD = ''P@ssw0rd!''; ALTER ROLE db_datareader ADD MEMBER [OrderApi-Id];"},{"key":"C","text":"CREATE USER [OrderApi-Id] FROM EXTERNAL PROVIDER; ALTER ROLE db_datareader ADD MEMBER [OrderApi-Id]; ALTER ROLE db_datawriter ADD MEMBER [OrderApi-Id];"},{"key":"D","text":"CREATE LOGIN [OrderApi-Id] WITH PASSWORD = ''P@ssw0rd!''; ALTER ROLE db_owner ADD MEMBER [OrderApi-Id];"}]'::jsonb,
  ARRAY['C']::text[],
  'Trong Azure SQL Database, người dùng cơ sở dữ liệu độc lập (contained database users) được liên kết trực tiếp với định danh Microsoft Entra ID thông qua câu lệnh CREATE USER ... FROM EXTERNAL PROVIDER mà không cần tạo login ở cấp server. Sau đó ta cấp quyền đọc/ghi bằng cách thêm user này vào các vai trò db_datareader và db_datawriter.',
  'Database Security & Triggers',
  ARRAY['DP-800', 'Managed Identity', 'Entra ID', 'CREATE USER']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp36',
  'dp-800',
  36,
  'You need to encrypt a sensitive column named Notes using Always Encrypted. Neither the stored values nor the query inputs should reveal patterns or repetitions in the data. The solution must provide the highest level of security and prevent any user from inferring relationships from the encrypted values. Which encryption type should you use?',
  '[{"key":"A","text":"Always Encrypted with deterministic encryption."},{"key":"B","text":"Always Encrypted with randomized encryption."},{"key":"C","text":"Transparent Data Encryption (TDE)."},{"key":"D","text":"Dynamic Data Masking (DDM) with randomized mask."}]'::jsonb,
  ARRAY['B']::text[],
  'Mã hóa ngẫu nhiên (Randomized encryption) tạo ra các giá trị mã hóa khác nhau cho cùng một giá trị gốc mỗi lần ghi, giúp ngăn chặn việc phân tích mẫu dữ liệu hoặc suy đoán mối quan hệ từ văn bản mã hóa. Đây là cấp độ bảo mật cao nhất, tuy nhiên nó không hỗ trợ tìm kiếm bằng toán tử so sánh bằng (=).',
  'Database Security & Triggers',
  ARRAY['DP-800', 'Always Encrypted', 'Randomized Encryption']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp37',
  'dp-800',
  37,
  'You have an Azure SQL database. A reporting query aggregates monthly revenue per customer runs frequently. You need to reduce the retrieval time of these calculated values without altering any underlying table structure. What should you do?',
  '[{"key":"A","text":"Create a view by using ORDER BY without TOP, and then create a unique clustered index on the view."},{"key":"B","text":"Create a view without using WITH SCHEMABINDING, and then create a nonclustered index on the view."},{"key":"C","text":"Create a view by using GROUP BY, and then create a unique clustered index on the view."},{"key":"D","text":"Create a view by using WITH SCHEMABINDING, include COUNT_BIG(*), and then create a unique clustered index on the view."}]'::jsonb,
  ARRAY['D']::text[],
  'Để tạo một Indexed View (Chỉ mục trên View), view đó bắt buộc phải được khai báo với tùy chọn WITH SCHEMABINDING. Nếu view có sử dụng GROUP BY để gom nhóm dữ liệu, danh sách SELECT bắt buộc phải bao gồm hàm đếm COUNT_BIG(*). Khi tạo Unique Clustered Index trên view này, kết quả tính toán tổng hợp sẽ được lưu trữ vật lý, giúp truy vấn báo cáo chạy cực nhanh.',
  'Query Optimization & Indexes',
  ARRAY['DP-800', 'Indexed View', 'SCHEMABINDING', 'COUNT_BIG']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp38',
  'dp-800',
  38,
  'You have a GitHub Actions workflow that builds and deploys an Azure SQL database from an SDK-style SQL database project. You need to generate a report showing whether the production database schema has diverged from the model in source control. Which SqlPackage.exe action should you use?',
  '[{"key":"A","text":"SqlPackage.exe /Action:DriftReport"},{"key":"B","text":"SqlPackage.exe /Action:DeployReport"},{"key":"C","text":"SqlPackage.exe /Action:Extract"},{"key":"D","text":"SqlPackage.exe /Action:Script"}]'::jsonb,
  ARRAY['A']::text[],
  'Hành động /Action:DriftReport của công cụ SqlPackage được thiết kế để so sánh lược đồ của cơ sở dữ liệu đang hoạt động (production) với mô hình cơ sở dữ liệu gốc (DACPAC) trong mã nguồn, từ đó xuất ra báo cáo chi tiết về sự sai lệch (schema drift) như các đối tượng bị sửa đổi hoặc thiếu sót.',
  'CI/CD & Database Projects',
  ARRAY['DP-800', 'SqlPackage', 'CI/CD', 'DriftReport']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp39',
  'dp-800',
  39,
  'You have a partitioned table dbo.Orders in Microsoft Fabric containing three years of monthly data. You need to remove all rows for the oldest month while minimizing log generation, locking, and performance impact on concurrent queries. Which Transact-SQL statement meets the goal?',
  '[{"key":"A","text":"TRUNCATE TABLE dbo.Orders WITH (PARTITIONS (partition_number));"},{"key":"B","text":"DELETE FROM dbo.Orders WHERE OrderDate < DATEADD(month, -36, SYSUTCDATETIME());"},{"key":"C","text":"ALTER TABLE dbo.Orders DROP PARTITION SCHEME (partition_scheme_name);"},{"key":"D","text":"ALTER TABLE dbo.Orders MERGE RANGE (boundary_value);"}]'::jsonb,
  ARRAY['A']::text[],
  'Sử dụng TRUNCATE TABLE ... WITH (PARTITIONS (...)) cho phép xóa toàn bộ dữ liệu trong một phân vùng cụ thể mà không ghi log chi tiết từng dòng (minimal logging) và không khóa toàn bộ bảng lớn. Đây là thao tác siêu dữ liệu (metadata-only) có độ trễ cực thấp và hầu như không ảnh hưởng đến các truy vấn đồng thời khác.',
  'Query Optimization & Indexes',
  ARRAY['DP-800', 'Partitioning', 'TRUNCATE PARTITION']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp40',
  'dp-800',
  40,
  'You have an SDK-style SQL database project targeting Azure SQL Database. The CI build fails with unresolved reference errors when referencing system views (e.g. sys.*). You need to resolve this by adding the correct system objects in the database model. Which is the correct solution?',
  '[{"key":"A","text":"Add the Microsoft.SqlServer.Dacpacs.Azure.Master NuGet package to the project."},{"key":"B","text":"Add the Microsoft.SqlServer.Dacpacs.Master NuGet package to the project."},{"key":"C","text":"Include a hardcoded copy of master.mdf in the git repository."},{"key":"D","text":"Change the target platform of the SQL project to SQL Server 2022 on-premises."}]'::jsonb,
  ARRAY['A']::text[],
  'Gói NuGet Microsoft.SqlServer.Dacpacs.Azure.Master cung cấp mô hình cơ sở dữ liệu hệ thống master chuẩn hóa cho Azure SQL Database. Việc tham chiếu gói này trong dự án SDK-style giúp trình biên dịch dotnet build phân giải thành công các tham chiếu hệ thống như sys.dm_*, loại bỏ lỗi biên dịch CI.',
  'CI/CD & Database Projects',
  ARRAY['DP-800', 'CI/CD', 'NuGet', 'master.dacpac']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp41',
  'dp-800',
  41,
  'You are designing a database schema for telemetry data in Microsoft Fabric. You write a script that configures a System-Versioned Temporal Table but does not include any partition definitions. It also creates a JSON index on $.location.latitude, longitude, and accuracy properties. Which of the following statements is true?',
  '[{"key":"A","text":"The code meets database performance requirements for partitioning."},{"key":"B","text":"Queries that filter on $.location.heading will automatically utilize the created JSON index."},{"key":"C","text":"The code meets requirements for JSON property querying but does NOT partition the telemetry table."},{"key":"D","text":"System-versioned temporal tables automatically partition data by dateKey."}]'::jsonb,
  ARRAY['C']::text[],
  'Bảng Temporal (hệ thống phiên bản) theo dõi lịch sử thay đổi nhưng không tự động phân vùng dữ liệu vật lý. Ngoài ra, chỉ mục JSON hoạt động theo đường dẫn cụ thể được khai báo (path-specific). Do $.location.heading không nằm trong danh sách thuộc tính của JSON index, các truy vấn lọc theo heading sẽ bỏ qua index này và thực hiện scan.',
  'SQL AI Querying & JSON',
  ARRAY['DP-800', 'Temporal Table', 'JSON Index', 'Fabric']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp42',
  'dp-800',
  42,
  'An application returns phone numbers in the format ''+000 000-000-000-0000'' stored inside a JSON column named ProfileJson in Azure SQL Database. You need to write a query that returns customer ID and a PhoneNumerals column containing only the digits. How should you structure the query?',
  '[{"key":"A","text":"Extract using JSON_VALUE(ProfileJson, ''$.contact.phone'') and strip non-digits using REGEXP_REPLACE(PhoneRaw, ''[^0-9]'', '''');"},{"key":"B","text":"Extract using JSON_QUERY(ProfileJson, ''$.contact.phone'') and clean using REGEXP_SUBSTR(PhoneRaw, ''[0-9]+'');"},{"key":"C","text":"Extract using OPENJSON and search using REGEXP_LIKE(PhoneRaw, ''\\d+'');"},{"key":"D","text":"Extract using JSON_VALUE and cast directly to BIGINT."}]'::jsonb,
  ARRAY['A']::text[],
  'JSON_VALUE là hàm chính xác để lấy thuộc tính chuỗi đơn (scalar phone number) từ chuỗi JSON. Để làm sạch chuỗi, ta dùng hàm REGEXP_REPLACE với biểu thức phủ định ''[^0-9]'' (bất kỳ ký tự nào không phải là chữ số từ 0 đến 9) và thay thế bằng chuỗi rỗng '''', chỉ giữ lại các chữ số thô.',
  'SQL AI Querying & JSON',
  ARRAY['DP-800', 'JSON_VALUE', 'REGEXP_REPLACE', 'Clean Data']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp43',
  'dp-800',
  43,
  'You deploy Data API Builder (DAB) to Azure Container Apps in front of Azure SQL Database. Users report that /health works, but all queries to the ''Products'' entity fail with a connection error. You verify that the login credentials in the connection string are correct. How should you resolve this issue?',
  '[{"key":"A","text":"Create a firewall rule on the Azure SQL logical server that allows a start and end IP address of 0.0.0.0."},{"key":"B","text":"Enable Transparent Data Encryption (TDE) on the database."},{"key":"C","text":"Modify the Container Apps ingress settings to restrict all traffic to internal only."},{"key":"D","text":"Rebuild the DAB container using port 80."}]'::jsonb,
  ARRAY['A']::text[],
  'Trong Azure, việc đặt quy tắc tường lửa (firewall rule) có cả IP bắt đầu và kết thúc là 0.0.0.0 là cờ tích hợp đặc biệt kích hoạt tùy chọn ''Allow Azure services and resources to access this server''. Điều này cho phép ứng dụng chạy trong Azure Container Apps kết nối được qua tường lửa vào Azure SQL Database.',
  'Data API Builder (DAB)',
  ARRAY['DP-800', 'DAB', 'Firewall', 'Azure Container Apps']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp44',
  'dp-800',
  44,
  'You have a database role named AppSupport. You need to: 1. Prevent AppSupport from viewing column TaxID in Sales.Customer table. 2. Allow AppSupport to query other columns in Sales.Customer. 3. Allow AppSupport to execute stored procedure Sales.usp_GetCustomerByCustomerId. Which Transact-SQL statements should you run?',
  '[{"key":"A","text":"GRANT SELECT ON Sales.Customer TO AppSupport; DENY SELECT ON Sales.Customer(TaxID) TO AppSupport; GRANT EXECUTE ON Sales.usp_GetCustomerByCustomerId TO AppSupport;"},{"key":"B","text":"GRANT CONTROL ON Sales.Customer TO AppSupport; REVOKE SELECT ON Sales.Customer(TaxID) FROM AppSupport;"},{"key":"C","text":"ALTER ROLE db_datareader ADD MEMBER AppSupport; DENY CONTROL ON Sales.Customer TO AppSupport;"},{"key":"D","text":"GRANT SELECT, EXECUTE ON SCHEMA::Sales TO AppSupport; DENY SELECT ON Sales.Customer TO AppSupport;"}]'::jsonb,
  ARRAY['A']::text[],
  'Quyền DENY cấp cột (column-level DENY) luôn ghi đè lên quyền GRANT cấp bảng. Do đó, việc gán SELECT cấp bảng kết hợp DENY SELECT trên cột TaxID sẽ giúp AppSupport truy vấn được mọi trường ngoại trừ TaxID. Thêm vào đó, ta sử dụng GRANT EXECUTE trực tiếp trên stored procedure để cho phép chạy tác vụ nghiệp vụ.',
  'Database Security & Triggers',
  ARRAY['DP-800', 'Security', 'DENY SELECT', 'GRANT EXECUTE']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp45',
  'dp-800',
  45,
  'What is the primary benefit of embedding vectors in SQL databases compared to storing them in external vector-only databases?',
  '[{"key":"A","text":"Faster database backups and reduced storage overhead."},{"key":"B","text":"The ability to run hybrid queries combining vector similarity search and traditional relational SQL (filters, joins) in a single transaction."},{"key":"C","text":"Elimination of the need for index structures like DiskANN."},{"key":"D","text":"Automatic encryption of high-dimensional data at rest."}]'::jsonb,
  ARRAY['B']::text[],
  'Lợi ích cốt lõi của việc tích hợp Vector trực tiếp trong cơ sở dữ liệu quan hệ (như SQL Server 2025 hoặc Azure SQL) là khả năng kết hợp mượt mà phép tìm kiếm tương đồng ngữ nghĩa (VECTOR_SEARCH) với các phép lọc quan hệ, nối bảng (JOIN), phân quyền và transaction ACID trong một câu lệnh duy nhất.',
  'SQL AI Querying & JSON',
  ARRAY['DP-800', 'Vector Embedding', 'Hybrid Search', 'ACID']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp46',
  'dp-800',
  46,
  'You have an Azure SQL database named SalesDB and an Azure App Service app named sales-api. You need to: 1. Configure passwordless authentication for sales-api to access SalesDB. 2. Ensure credit card numbers are NOT stored as plain text. What should you recommend?',
  '[{"key":"A","text":"Enable system-assigned Managed Identity with Microsoft Entra ID authentication; and implement Always Encrypted on the credit card column."},{"key":"B","text":"Use SQL logins with passwords stored in Azure Key Vault; and enable Transparent Data Encryption (TDE)."},{"key":"C","text":"Implement Dynamic Data Masking (DDM); and configure a shared access signature key."},{"key":"D","text":"Use active directory integrated logins; and configure row-level security on credit card rows."}]'::jsonb,
  ARRAY['A']::text[],
  'Managed Identity giải quyết triệt để vấn đề passwordless bằng cách xác thực token tự động qua Entra ID. Always Encrypted mã hóa dữ liệu nhạy cảm ngay tại client trước khi gửi xuống cơ sở dữ liệu, đảm bảo số thẻ tín dụng không bao giờ xuất hiện dưới dạng văn bản rõ (plain text) ở cả vùng nhớ động lẫn ổ đĩa lưu trữ.',
  'Database Security & Triggers',
  ARRAY['DP-800', 'Managed Identity', 'Always Encrypted']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp47',
  'dp-800',
  47,
  'To find the total CPU time consumed across all executions within a specific interval in Query Store, which formula should you use inside your aggregation query?',
  '[{"key":"A","text":"SUM(count_executions * rs.avg_cpu_time)"},{"key":"B","text":"SUM(rs.last_cpu_time / count_executions)"},{"key":"C","text":"SUM(rs.avg_cpu_time + rs.last_cpu_time)"},{"key":"D","text":"SUM(rs.max_cpu_time)"}]'::jsonb,
  ARRAY['A']::text[],
  'Query Store theo dõi số lần chạy (count_executions) và thời gian CPU trung bình của mỗi lần chạy (avg_cpu_time) trong mỗi khoảng thời gian. Để tính tổng lượng CPU đã tiêu thụ thực tế của một câu truy vấn, ta phải nhân hai giá trị này với nhau và tính tổng (SUM).',
  'Query Optimization & Indexes',
  ARRAY['DP-800', 'Query Store', 'avg_cpu_time', 'Performance']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp48',
  'dp-800',
  48,
  'Query Store strictly records time values using which time standard? How should you look back precisely two hours from the current moment in your queries?',
  '[{"key":"A","text":"Coordinated Universal Time (UTC); use GETUTCDATETIME() to calculate the boundary."},{"key":"B","text":"Local system time; use GETDATE() to calculate the boundary."},{"key":"C","text":"Database server boot time; use sys.dm_os_sys_info."},{"key":"D","text":"Greenwich Mean Time (GMT); use DATEADD(hour, -2, GETDATE())."}]'::jsonb,
  ARRAY['A']::text[],
  'Query Store luôn ghi nhận thời gian theo múi giờ chuẩn quốc tế UTC. Vì vậy, để lọc dữ liệu trong vòng 2 giờ qua một cách chuẩn xác, ta bắt buộc phải sử dụng hàm thời gian UTC hệ thống là GETUTCDATETIME() thay vì GETDATE() (vốn trả về thời gian cục bộ của máy chủ).',
  'Query Optimization & Indexes',
  ARRAY['DP-800', 'Query Store', 'GETUTCDATETIME', 'UTC']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp49',
  'dp-800',
  49,
  'You need to deploy reference data to production as part of your CI/CD pipeline. The pipeline can be rerun automatically if a transient failure occurs. How can you ensure the deployment is idempotent and does not create duplicate rows?',
  '[{"key":"A","text":"Add a post-deployment script that inserts reference rows by using IF NOT EXISTS or MERGE logic."},{"key":"B","text":"Restore a complete database backup before each deployment step."},{"key":"C","text":"Store the reference data inside GitHub repository secrets."},{"key":"D","text":"Enable transaction log shipping on the target server."}]'::jsonb,
  ARRAY['A']::text[],
  'Sử dụng kịch bản sau triển khai (post-deployment script) đi kèm mệnh đề kiểm tra tồn tại (IF NOT EXISTS) hoặc cú pháp MERGE giúp tiến trình triển khai đạt tính lũy đẳng (idempotent). Khi chạy lại nhiều lần, mã lệnh chỉ bổ sung các dòng còn thiếu hoặc cập nhật các dòng có thay đổi, tránh phát sinh trùng lặp.',
  'CI/CD & Database Projects',
  ARRAY['DP-800', 'CI/CD', 'Idempotent', 'Post-Deployment']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp50',
  'dp-800',
  50,
  'You are configuring a DATABASE SCOPED CREDENTIAL to call an external REST endpoint using a system-assigned Managed Identity. How does the SECRET parameter behave in this security configuration?',
  '[{"key":"A","text":"The SECRET parameter must specify the platform''s canonical resource identifier, such as ''resourceid'':''https://cognitiveservices.azure.com''."},{"key":"B","text":"The SECRET parameter must contain the cleartext API key of your Azure OpenAI deployment."},{"key":"C","text":"The SECRET parameter is optional and can be left blank."},{"key":"D","text":"The SECRET parameter must contain the base64-encoded client secret of the App Registration."}]'::jsonb,
  ARRAY['A']::text[],
  'Khi dùng Managed Identity, ta không truyền API key hay mật khẩu rõ. Tham số SECRET trong DATABASE SCOPED CREDENTIAL đóng vai trò khai báo URI tài nguyên đích (canonical resource identifier) mà cơ sở dữ liệu SQL cần lấy token truy cập từ Microsoft Entra ID (ví dụ: ''resourceid'':''https://cognitiveservices.azure.com'').',
  'Database Security & Triggers',
  ARRAY['DP-800', 'Credential', 'Managed Identity', 'SECRET']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp51',
  'dp-800',
  51,
  'You are designing a high-availability and disaster recovery solution for an Azure SQL database. You configure Active Geo-Replication as shown in the diagram. A failover group is configured with a read-write grace period of 2 hours. If a primary region outage occurs, what happens to the database connections and data replication?',
  '[{"key":"A","text":"Read-write connections are automatically routed to the secondary database after 2 hours. Data replication is asynchronous, which may result in data loss."},{"key":"B","text":"Read-write connections fail over immediately, and synchronous replication guarantees zero data loss."},{"key":"C","text":"Read-only connections fail over, but read-write connections must be manually failed over using Azure CLI."},{"key":"D","text":"The database enters a read-only state, and replication is suspended until the primary region recovers."}]'::jsonb,
  ARRAY['A']::text[],
  'Khi cấu hình failover group với tham số read-write grace period (ở đây là 2 giờ), hệ thống sẽ tự động chuyển hướng kết nối ghi (read-write) sang vùng Secondary sau thời gian chờ nếu vùng Primary bị sập hoàn toàn. Vì Geo-Replication hoạt động theo chế độ bất đồng bộ (asynchronous), có thể xảy ra mất mát dữ liệu (data loss) đối với các giao dịch chưa kịp đồng bộ.',
  'High Availability & Disaster Recovery',
  ARRAY['DP-800', 'Geo-Replication', 'Failover Group', 'High Availability']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp52',
  'dp-800',
  52,
  'You have a JSON document stored in a table column as shown in the diagram. You need to write a Transact-SQL query using the JSON_TABLE function introduced in SQL Server 2025 to extract and flatten the nested ''items'' array into relational columns. Which query is correct?',
  '[{"key":"A","text":"SELECT * FROM dbo.Orders CROSS APPLY JSON_TABLE(OrderJson, ''$.items'' COLUMNS (ProductId INT PATH ''$.id'', Qty INT PATH ''$.quantity'')) AS jt;"},{"key":"B","text":"SELECT * FROM dbo.Orders JOIN OPENJSON(OrderJson, ''$.items'') WITH (ProductId INT ''$.id'', Qty INT ''$.quantity'');"},{"key":"C","text":"SELECT * FROM JSON_VALUE(OrderJson, ''$.items'') AS jt;"},{"key":"D","text":"SELECT * FROM dbo.Orders CROSS APPLY OPENJSON(OrderJson) AS jt;"}]'::jsonb,
  ARRAY['A']::text[],
  'Hàm JSON_TABLE mới trong SQL Server 2025 cho phép phân tách mảng JSON phức tạp và chuyển đổi thành dạng bảng quan hệ trực tiếp trong truy vấn bằng cú pháp JSON_TABLE(expression, path COLUMNS (...)). Đây là cách chuẩn SQL/JSON để flatten dữ liệu hiệu quả cao mà không cần dùng OPENJSON lồng nhau.',
  'SQL AI Querying & JSON',
  ARRAY['DP-800', 'JSON_TABLE', 'SQL Server 2025', 'JSON Parsing']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp53',
  'dp-800',
  53,
  'You are designing a generative AI search feature on an Azure SQL Database. You create a vector index using the DiskANN algorithm on a table of embeddings. Based on the index navigation graph shown in the diagram, how does DiskANN optimize the trade-off between search recall accuracy and query latency during a vector similarity query?',
  '[{"key":"A","text":"It constructs a Compressed Graph (Vamana graph) that resides on disk, and uses an in-memory cache for high-degree nodes to minimize costly disk I/O operations."},{"key":"B","text":"It forces the entire high-dimensional vector dataset to remain strictly in-memory during search."},{"key":"C","text":"It converts vectors into low-dimensional binary hashes using locality-sensitive hashing (LSH)."},{"key":"D","text":"It performs a brute-force cosine similarity scan across all rows but runs them in parallel."}]'::jsonb,
  ARRAY['A']::text[],
  'DiskANN là thuật toán tìm kiếm vector láng giềng gần nhất (ANN) được tối ưu hóa cho ổ đĩa SSD. Nó xây dựng một đồ thị nén Vamana lưu trữ trên ổ đĩa và chỉ giữ các node có bậc cao (high-degree nodes/hubs) cùng với thông tin nén vector trong bộ nhớ RAM để làm cache, giúp tăng tốc độ tìm kiếm mà không tốn dung lượng RAM khổng lồ.',
  'Vector Search & DiskANN',
  ARRAY['DP-800', 'DiskANN', 'Vector Index', 'Vamana Graph']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp54',
  'dp-800',
  54,
  'You are implementing an automated chat analysis solution using T-SQL. The database must call an Azure OpenAI completions model using a secure stored procedure. Based on the sequence diagram shown, which T-SQL function and security configuration must be implemented to authorize and invoke the Azure OpenAI service securely?',
  '[{"key":"A","text":"Create a DATABASE SCOPED CREDENTIAL using a Managed Identity, then execute sp_invoke_external_rest_endpoint passing the credential and REST parameters."},{"key":"B","text":"Store the API key directly inside a plain T-SQL variable and use sys.xp_cmdshell to execute a curl request."},{"key":"C","text":"Use sp_addlinkedserver to create a link to cognitive.azure.com and run a distributed query."},{"key":"D","text":"Create a CLR assembly in C# to establish a HTTPS connection to the endpoint."}]'::jsonb,
  ARRAY['A']::text[],
  'Để gọi Azure OpenAI từ SQL Server hoặc Azure SQL một cách an toàn và tối ưu, phương pháp tốt nhất là sử dụng thủ tục hệ thống sys.sp_invoke_external_rest_endpoint. Để bảo mật, ta gán quyền truy cập thông qua DATABASE SCOPED CREDENTIAL liên kết với Managed Identity của Azure SQL Database, tránh lộ API key dưới dạng clear text.',
  'Database Security & Triggers',
  ARRAY['DP-800', 'Azure OpenAI', 'sp_invoke_external_rest_endpoint', 'Managed Identity']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp55',
  'dp-800',
  55,
  'You need to implement Row-Level Security (RLS) on a sales transaction table in Azure SQL. Based on the security policy execution plan shown in the diagram, how should you define the security predicate function to ensure a salesperson can only see records belonging to their assigned territory, while maintaining high query performance?',
  '[{"key":"A","text":"Create an inline table-valued function (iTVF) that joins the territory table, and bind it as a FILTER PREDICATE on the Sales table."},{"key":"B","text":"Create a scalar function that queries the security mapping table and returns 1 or 0, and bind it as a BLOCK PREDICATE."},{"key":"C","text":"Write a multi-statement table-valued function (mTVF) to filter the rows, and bind it as a filter."},{"key":"D","text":"Create a trigger on the table that checks SUSER_SNAME() and deletes unauthorized rows."}]'::jsonb,
  ARRAY['A']::text[],
  'Trong Row-Level Security (RLS), hàm predicate bắt buộc phải là loại Inline Table-Valued Function (iTVF). Việc sử dụng iTVF cho phép SQL Server tích hợp trực tiếp điều kiện lọc vào trong cây thực thi truy vấn chính (Query Execution Plan), tối ưu hóa chỉ mục hiệu quả hơn nhiều so với hàm vô hướng (Scalar Function) hay Multi-statement TVF vốn làm sụt giảm nghiêm trọng hiệu suất.',
  'Database Security & Triggers',
  ARRAY['DP-800', 'Row-Level Security', 'RLS', 'iTVF']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp56',
  'dp-800',
  56,
  'You are writing a semantic search query in Azure SQL Database using the new vector search extensions. Based on the vector distance metrics compared in the diagram, when should you choose Cosine Distance over Euclidean Distance for measuring document similarity?',
  '[{"key":"A","text":"When document lengths vary significantly and you want to measure semantic orientation regardless of document size/magnitude."},{"key":"B","text":"When you want to prioritize exact search coordinate matching on a fixed, normalized coordinate system."},{"key":"C","text":"When the database requires the distance metric to be computed purely in-memory using a B-tree clustered index."},{"key":"D","text":"When the high-dimensional vectors must be compressed into 1-bit binary representations to fit in SSD cache."}]'::jsonb,
  ARRAY['A']::text[],
  'Khoảng cách Cosine (Cosine Distance) đo góc giữa hai vector bất kể độ dài (magnitude) của chúng, do đó cực kỳ phù hợp cho các bài toán tìm kiếm ngữ nghĩa văn bản (semantic search) nơi độ dài của các bài viết hoặc đoạn văn bản khác nhau đáng kể. Trong khi đó, Khoảng cách Euclidean (Euclidean Distance) bị ảnh hưởng trực tiếp bởi độ dài của các vector.',
  'Vector Search & DiskANN',
  ARRAY['DP-800', 'Cosine Distance', 'Vector Search', 'Embeddings']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp57',
  'dp-800',
  57,
  'You are comparing index structures for a large-scale vector similarity database containing over 10 million high-dimensional embeddings. Based on the index characteristics shown in the diagram, what is a primary operational advantage of choosing the DiskANN-based index over IVFFlat?',
  '[{"key":"A","text":"DiskANN achieves a significantly higher search recall with much lower RAM requirements by utilizing SSD storage for the Vamana index graph."},{"key":"B","text":"DiskANN performs a fully synchronous parallel brute-force scan, guaranteeing 100% recall."},{"key":"C","text":"DiskANN automatically converts dense high-dimensional vectors into relational JSON documents to avoid index rebuilds."},{"key":"D","text":"DiskANN stores the complete vector dataset inside the SQL transaction log, which simplifies transactional recovery."}]'::jsonb,
  ARRAY['A']::text[],
  'DiskANN được tối ưu hoá đặc biệt để giảm tải bộ nhớ RAM bằng cách lưu trữ đồ thị chỉ mục (Vamana) trực tiếp trên ổ đĩa SSD tốc độ cao và chỉ lưu các node bậc cao (hubs) làm bộ đệm trong bộ nhớ RAM. Nhờ đó, nó giúp đạt độ thu hồi (recall) rất cao mà không tốn chi phí bộ nhớ RAM khổng lồ như IVFFlat (yêu cầu giữ toàn bộ chỉ mục trong RAM).',
  'Vector Search & DiskANN',
  ARRAY['DP-800', 'DiskANN', 'IVFFlat', 'Index Comparison']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp58',
  'dp-800',
  58,
  'You are configuring Always Encrypted with secure enclaves in Azure SQL Database. Based on the security architecture shown in the diagram, how is confidential computation achieved when running an aggregation query on an encrypted column?',
  '[{"key":"A","text":"The client driver decrypts the entire table locally and performs the aggregation in the application memory tier."},{"key":"B","text":"SQL Server executes the query within a secure enclave—a protected region of memory where data is safely decrypted and computed, preventing database administrators (DBAs) from viewing the plaintext."},{"key":"C","text":"The database uses homomorphic encryption to perform mathematical operations directly on the ciphertexts without ever decrypting them."},{"key":"D","text":"The security policy dynamically downgrades column encryption to deterministic encryption during periods of high query execution."}]'::jsonb,
  ARRAY['B']::text[],
  'Tính năng Always Encrypted with Secure Enclaves cho phép thực hiện các phép toán phức tạp (như so sánh khớp mẫu, tìm kiếm dải, gom nhóm) trực tiếp trên máy chủ cơ sở dữ liệu. Việc giải mã và tính toán được diễn ra hoàn toàn bên trong vùng nhớ bảo mật (Secure Enclave - e.g., Intel SGX hoặc VBS). Vùng này hoàn toàn cô lập, ngăn chặn cả hệ điều hành lẫn quản trị viên hệ thống (DBAs) can thiệp hay nhìn thấy dữ liệu thô (plaintext).',
  'Database Security & Triggers',
  ARRAY['DP-800', 'Always Encrypted', 'Secure Enclaves', 'Security']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp59',
  'dp-800',
  59,
  'You are setting up a system-versioned temporal table in Azure SQL Database as shown in the diagram. When updating a row in the main table, how does SQL Server handle the temporal metadata and history logging?',
  '[{"key":"A","text":"The old version of the row is automatically written to the History Table, setting SysEndTime of the history row and SysStartTime of the new main row to the transaction commit time (UTC)."},{"key":"B","text":"A database trigger runs asynchronously to copy the modified row to a JSON-formatted transaction log table."},{"key":"C","text":"The main table is truncated, and the complete historical change tracking log is appended to a Fabric Delta Lake parquet file."},{"key":"D","text":"The updated row is immediately sent to the Secondary database, where the history is compiled during read-write failovers."}]'::jsonb,
  ARRAY['A']::text[],
  'Bảng Temporal hoạt động tự động ở mức nhân cơ sở dữ liệu. Khi có một câu lệnh UPDATE, dòng dữ liệu cũ sẽ được lưu chuyển xuống bảng Lịch sử (History Table), thời gian SysEndTime của dòng lịch sử này và SysStartTime của dòng mới tại bảng chính sẽ được gán khớp chính xác bằng thời gian bắt đầu của giao dịch hiện tại (tính theo múi giờ chuẩn UTC).',
  'Performance Tuning',
  ARRAY['DP-800', 'Temporal Tables', 'System-Versioned', 'History Logging']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp60',
  'dp-800',
  60,
  'You are writing a T-SQL query to parse user profiles in JSON format. Based on the path mode behaviors shown in the diagram, what is the consequence of query execution when using the ''strict'' path mode versus the default ''lax'' path mode on a missing property?',
  '[{"key":"A","text":"Strict mode raises an execution error immediately when the specified path does not exist, whereas lax mode silently returns NULL."},{"key":"B","text":"Strict mode automatically creates the missing JSON path and inserts default values, whereas lax mode suspends the query."},{"key":"C","text":"Strict mode converts the JSON document into XML, whereas lax mode forces a full-table table-valued scan."},{"key":"D","text":"Strict mode bypasses RLS rules, whereas lax mode is evaluated after security filters are applied."}]'::jsonb,
  ARRAY['A']::text[],
  'Trong cú pháp truy xuất JSON của SQL Server/Azure SQL, chế độ ''lax'' (mặc định) sẽ bỏ qua các lỗi không tồn tại đường dẫn và trả về giá trị NULL một cách êm đẹp. Ngược lại, chế độ ''strict'' sẽ ném ra lỗi thực thi (execution error) lập tức nếu đường dẫn JSON được chỉ định không thể tìm thấy trong tài liệu JSON, giúp lập trình viên phát hiện sớm các sai lệch về cấu trúc dữ liệu.',
  'SQL AI Querying & JSON',
  ARRAY['DP-800', 'JSON Path', 'Lax vs Strict', 'JSON Parsing']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp61',
  'dp-800',
  61,
  'You are implementing JSON search optimizations in Azure SQL Database. You need to create an index on a JSON property that is frequently queried. How should you define this index for optimal query performance?',
  '[{"key":"A","text":"Create a computed column using JSON_VALUE pointing to the property, persist the computed column, and then build a non-clustered index on it."},{"key":"B","text":"Create a clustered index directly on the NVARCHAR(MAX) column containing the raw JSON document."},{"key":"C","text":"Create a vector index with DiskANN topology using the JSON path as the distance metric."},{"key":"D","text":"Configure a database scoped credential pointing to an external JSON schema repository."}]'::jsonb,
  ARRAY['A']::text[],
  'Do SQL Server không hỗ trợ tạo chỉ mục trực tiếp trên thuộc tính con của cột chứa chuỗi JSON, giải pháp tối ưu hiệu năng là tạo một cột tính toán (Computed Column) trích xuất giá trị qua hàm JSON_VALUE, đặt thuộc tính PERSISTED (lưu trữ vật lý), sau đó xây dựng chỉ mục phi cụm (Non-clustered Index) trên cột tính toán này.',
  'SQL AI Querying & JSON',
  ARRAY['DP-800', 'JSON Indexing', 'Computed Column', 'Performance Optimization']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp62',
  'dp-800',
  62,
  'You are planning the database migration of an AI-enabled retail database to Azure SQL Database. The application requires high availability with zero-data-loss failover capability. Which tier and configuration of Azure SQL Database should you recommend?',
  '[{"key":"A","text":"Business Critical or Premium tier configured with Zone Redundancy and synchronous replica synchronization."},{"key":"B","text":"General Purpose tier with standard LRS (Locally Redundant Storage) and asynchronous geofencing."},{"key":"C","text":"Basic tier with auto-sync backups configured every 15 minutes to an external Azure Blob storage account."},{"key":"D","text":"Hyperscale tier configured with a single read-scale replica in a remote continent."}]'::jsonb,
  ARRAY['A']::text[],
  'Nhóm dịch vụ Business Critical hoặc Premium của Azure SQL Database hỗ trợ tính năng Zone Redundancy (Dự phòng vùng), sử dụng cơ chế đồng bộ hóa bản sao đồng thời (synchronous replication) giữa các Availability Zones trong cùng một khu vực. Điều này giúp đảm bảo khả năng chuyển mạch tự động tức thì khi có sự cố và đạt mức RPO = 0 (không mất mát dữ liệu).',
  'High Availability & Disaster Recovery',
  ARRAY['DP-800', 'High Availability', 'Zone Redundancy', 'Business Critical']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp63',
  'dp-800',
  63,
  'You are troubleshooting a performance issue where queries on a specific table are experiencing high compilations and parameter-sensitive plan (PSP) optimization issues. Which feature of SQL Server 2022 / 2025 can automatically mitigate this issue without rewriting code?',
  '[{"key":"A","text":"Parameter Sensitive Plan (PSP) Optimization, which automatically maintains multiple execution plans for a single parameterized query based on parameter size/cardinality."},{"key":"B","text":"Always Encrypted, which hashes the parameters to prevent the optimizer from sniffing their values."},{"key":"C","text":"System-Versioned Temporal Tables, which isolates historical executions in a separate plan cache."},{"key":"D","text":"Row-Level Security (RLS) block predicates, which forces the execution plan to compile with a static filter."}]'::jsonb,
  ARRAY['A']::text[],
  'Tính năng PSP Optimization (tối ưu hóa kế hoạch nhạy cảm tham số) được giới thiệu từ SQL Server 2022 tự động giải quyết lỗi nghẽn cổ chai Parameter Sniffing kinh điển. Hệ thống sẽ lưu giữ và sử dụng nhiều kế hoạch thực thi (execution plans) khác nhau cho cùng một câu lệnh tham số hóa tùy thuộc vào giá trị tham số truyền vào thực tế, tối ưu hóa tài nguyên cực kỳ thông minh.',
  'Query Optimization & Indexes',
  ARRAY['DP-800', 'PSP Optimization', 'Parameter Sniffing', 'Query Store']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp64',
  'dp-800',
  64,
  'You are designing an AI application that generates real-time recommendations. You store product embeddings in Azure SQL Database. How should you write a T-SQL query to return the top 5 products most similar to a query embedding vector stored in @QueryVector?',
  '[{"key":"A","text":"SELECT TOP 5 ProductId, VECTOR_DISTANCE(''cosine'', ProductEmbedding, @QueryVector) AS Distance FROM Products ORDER BY Distance ASC;"},{"key":"B","text":"SELECT TOP 5 ProductId FROM Products WHERE ProductEmbedding = @QueryVector."},{"key":"C","text":"SELECT TOP 5 ProductId FROM Products CROSS APPLY OPENJSON(ProductEmbedding) WHERE value = @QueryVector."},{"key":"D","text":"SELECT TOP 5 ProductId FROM Products JOIN sys.sp_invoke_external_rest_endpoint(@QueryVector) ON ProductId = id."}]'::jsonb,
  ARRAY['A']::text[],
  'Để tìm kiếm láng giềng gần nhất (nearest neighbors) trong Azure SQL hoặc SQL Server 2025, ta sử dụng hàm VECTOR_DISTANCE truyền vào loại khoảng cách (như ''cosine'', ''euclidean'' hoặc ''dot'') cùng hai vector cần so sánh, sau đó sắp xếp theo thứ tự khoảng cách tăng dần (ASC) để lấy ra các phần tử giống nhất.',
  'Vector Search & DiskANN',
  ARRAY['DP-800', 'VECTOR_DISTANCE', 'Vector Search', 'T-SQL']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp65',
  'dp-800',
  65,
  'You need to mask sensitive customer telephone numbers in an Azure SQL Database. The masking must prevent unauthorized application users from viewing the complete number but allow support agents with elevated privileges to view it. What should you configure?',
  '[{"key":"A","text":"Dynamic Data Masking (DDM) using the partial() function on the Phone column, and GRANT UNMASK to the support agent database role."},{"key":"B","text":"Row-Level Security (RLS) on the Phone table, and configure a secure enclave to decrypt the phone records."},{"key":"C","text":"Configure a vector index with DiskANN to encrypt and group phone numbers in a secure multidimensional space."},{"key":"D","text":"Enable Always Encrypted with randomized encryption on the Phone column and store the key in the database transaction log."}]'::jsonb,
  ARRAY['A']::text[],
  'Dynamic Data Masking (Mã hóa dữ liệu động) giúp che giấu thông tin nhạy cảm ở mức hiển thị kết quả truy vấn mà không làm thay đổi dữ liệu thực tế lưu trên đĩa. Hàm partial() cho phép chỉ định hiển thị vài ký tự đầu/cuối của số điện thoại và che phần giữa. Sau đó, ta cấp quyền UNMASK cho các nhóm tài khoản hỗ trợ để họ có thể xem thông tin rõ ràng (plaintext).',
  'Database Security & Triggers',
  ARRAY['DP-800', 'Dynamic Data Masking', 'Data Masking', 'Security']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp66',
  'dp-800',
  66,
  'You are creating a table to store customer profiles in Azure SQL Database using the following T-SQL code:

```sql
CREATE TABLE dbo.CustomerProfiles
(
  CustomerId BIGINT IDENTITY(1,1) PRIMARY KEY,
  FullName NVARCHAR(200) MASKED WITH (FUNCTION = ''partial(1,"xxxx",1)''),
  EmailAddress NVARCHAR(200) MASKED WITH (FUNCTION = ''email()''),
  PhoneNumber NVARCHAR(50) MASKED WITH (FUNCTION = ''default()''),
  RegionCode NVARCHAR(10) NOT NULL
);
GO
CREATE FUNCTION dbo.fn_FilterByRegion(@RegionCode NVARCHAR(10))
RETURNS TABLE
AS
RETURN
(
  SELECT 1
  FROM dbo.UserRegionAccess ura
  WHERE ura.UserPrincipalName = SUSER_SNAME()
    AND ura.RegionCode = @RegionCode
);
GO
CREATE SECURITY POLICY CustomerRegionPolicy
ADD FILTER PREDICATE dbo.fn_FilterByRegion(RegionCode)
ON dbo.CustomerProfiles
WITH (STATE = ON);
GO
```

Determine whether each of the following statements is True (Yes) or False (No):
1. The schema meets the security requirements for PII data.
2. Administrators of the Azure SQL server can see all the rows in dbo.CustomerProfiles when they use an application.
3. The masking rules will apply even when row-level security (RLS) filters out rows.',
  '[{"key":"A","text":"1: Yes, 2: No, 3: No"},{"key":"B","text":"1: Yes, 2: Yes, 3: No"},{"key":"C","text":"1: No, 2: No, 3: Yes"},{"key":"D","text":"1: Yes, 2: No, 3: Yes"}]'::jsonb,
  ARRAY['A']::text[],
  'Sử dụng kết hợp Dynamic Data Masking (DDM) để che giấu các trường thông tin nhạy cảm (như email, số điện thoại) cùng với Row-Level Security (RLS) để giới hạn quyền truy cập dòng dữ liệu theo vùng là giải pháp bảo mật mạnh mẽ của Microsoft đề xuất. Tuy nhiên, quản trị viên hệ thống (sysadmin) vẫn chịu sự chi phối của chính sách RLS (sẽ bị ẩn các dòng không được gán vùng trừ khi được cấu hình đặc biệt), và quy trình RLS lọc dòng trước khi áp dụng quy tắc che dữ liệu (masking), do đó các dòng bị RLS loại bỏ sẽ không bao giờ được áp dụng masking.',
  'Database Security & Triggers',
  ARRAY['DP-800', 'Dynamic Data Masking', 'Row-Level Security', 'Security']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp67',
  'dp-800',
  67,
  'You have an Azure SQL database named ProductsDB. You deploy Data API builder (DAB) to Azure Container Apps. Users report that the /health endpoint returns a healthy response, but all requests that query an entity named Products fail and generate a connection error. You confirm that the SQL login in the connection string is correct and the database exists. You need to ensure that the container app can establish connections to the Azure SQL logical server without changing the container app deployment settings or the DAB configuration file. What should you do on the Azure SQL logical server?',
  '[{"key":"A","text":"Create an auto-failover group for ProductsDB."},{"key":"B","text":"Run DBCC CHECKDB on ProductsDB."},{"key":"C","text":"Create a firewall rule that allows a start and end IP address of 0.0.0.0."},{"key":"D","text":"Enable FORCE_LAST_GOOD_PLAN automatic tuning for ProductsDB."}]'::jsonb,
  ARRAY['C']::text[],
  'Khi deploy Data API Builder lên Azure Container Apps, để container có thể kết nối thành công tới máy chủ Azure SQL mà không cần thay đổi cấu hình mạng phức tạp, ta cần thêm một quy tắc tường lửa (firewall rule) cho phép địa chỉ IP bắt đầu và kết thúc đều là 0.0.0.0. Đây là cờ đặc biệt (Allow Azure services) cho phép các tài nguyên chạy trong hạ tầng Azure truy cập được vào SQL Server.',
  'High Availability & Disaster Recovery',
  ARRAY['DP-800', 'Firewall', 'Container Apps', 'Connectivity']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp68',
  'dp-800',
  68,
  'You have an Azure SQL database that contains a table named Sales.Customer. Sales.Customer contains columns named CustomerId, FullName, Email, TaxID, and RegionId. You have a database role named AppSupport that is used by a support application. You need to implement a security solution for AppSupport that meets the following requirements:
- AppSupport must be prevented from viewing TaxID.
- AppSupport must be able to query Sales.Customer to troubleshoot issues.
- AppSupport must be able to run a stored procedure named Sales.usp_GetCustomerByCustomerId.

Which combination of T-SQL commands should you include in the solution?',
  '[{"key":"A","text":"GRANT EXECUTE ON OBJECT::Sales.usp_GetCustomerByCustomerId TO AppSupport; GRANT SELECT ON OBJECT::Sales.Customer TO AppSupport; DENY SELECT ON OBJECT::Sales.Customer(TaxID) TO AppSupport;"},{"key":"B","text":"GRANT EXECUTE ON OBJECT::Sales.usp_GetCustomerByCustomerId TO AppSupport; DENY SELECT ON OBJECT::Sales.Customer TO AppSupport; GRANT SELECT ON OBJECT::Sales.Customer(TaxID) TO AppSupport;"},{"key":"C","text":"REVOKE EXECUTE ON OBJECT::Sales.usp_GetCustomerByCustomerId TO AppSupport; GRANT SELECT ON OBJECT::Sales.Customer TO AppSupport; DENY SELECT ON OBJECT::Sales.Customer(TaxID) TO AppSupport;"},{"key":"D","text":"GRANT SELECT ON OBJECT::Sales.usp_GetCustomerByCustomerId TO AppSupport; GRANT SELECT ON OBJECT::Sales.Customer TO AppSupport; DENY SELECT ON OBJECT::Sales.Customer FROM AppSupport;"}]'::jsonb,
  ARRAY['A']::text[],
  'Để đáp ứng yêu cầu bảo mật: cho phép thực thi stored procedure (cần quyền GRANT EXECUTE), cho phép truy vấn bảng Customers (cần quyền GRANT SELECT ON OBJECT), và ngăn chặn quyền xem cột TaxID (áp dụng quyền DENY SELECT ON OBJECT cho riêng cột TaxID). Trong SQL Server, quyền DENY luôn ghi đè (override) lên mọi quyền GRANT khác.',
  'Database Security & Triggers',
  ARRAY['DP-800', 'Permissions', 'DENY', 'Stored Procedure']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp69',
  'dp-800',
  69,
  'You are developing an Azure SQL database solution from a locally cloned GitHub repository by using Microsoft Visual Studio Code and GitHub Copilot Chat. You need to ensure that GitHub Copilot Chat can call the hosted GitHub MCP Server tools by using OAuth. The MCP server configuration must be scoped to the repository. What should you do in Visual Studio Code?',
  '[{"key":"A","text":"Create a personal access token (PAT) that has the repo scope and store the PAT in the vscodelmcp.json file as the Authorization header."},{"key":"B","text":"From the Command Palette, enter MCP: add server, select HTTP (HTTP or Server-Sent Events), enter https://api.githubcopilot.com/mcp/, and then save the configuration to the workspace settings."},{"key":"C","text":"From the Command Palette, enter MCP: add server, select HTTP (HTTP or Server-Sent Events), enter https://api.githubcopilot.com/mcp/, and then save the configuration to the user settings."},{"key":"D","text":"Create a personal access token (PAT) that has the repo scope and store the PAT in the githublmcp.json file as the Authorization header."}]'::jsonb,
  ARRAY['B']::text[],
  'Để kết nối GitHub Copilot Chat trong VS Code với hosted GitHub MCP Server bằng OAuth và giới hạn cấu hình chỉ trong phạm vi kho lưu trữ (repository-wide), lập trình viên cần sử dụng lệnh MCP: add server từ Command Palette, chọn giao thức HTTP, nhập địa chỉ endpoint https://api.githubcopilot.com/mcp/, và lưu cấu hình vào Workspace Settings (.vscode/settings.json).',
  'Database Development & Tooling',
  ARRAY['DP-800', 'Visual Studio Code', 'GitHub Copilot', 'MCP Server']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp70',
  'dp-800',
  70,
  'What is the primary purpose of Azure AI in SQL development?',
  '[{"key":"A","text":"Replace SQL Server"},{"key":"B","text":"Automate infrastructure deployment"},{"key":"C","text":"Enhance querying and analytics with AI capabilities"},{"key":"D","text":"Eliminate the need for databases"}]'::jsonb,
  ARRAY['C']::text[],
  'Mục đích chính của việc tích hợp Azure AI vào quá trình phát triển SQL là tăng cường khả năng truy vấn và phân tích dữ liệu thông qua các công nghệ AI như truy vấn ngôn ngữ tự nhiên, tìm kiếm ngữ nghĩa (semantic search), nhúng vector (embeddings), và tích hợp RAG.',
  'Vector Search & DiskANN',
  ARRAY['DP-800', 'Azure AI', 'Overview']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp71',
  'dp-800',
  71,
  'You have a database that contains production data. The schema is stored in a Git repository as an SDK-style SQL database project and contains the following reference data:
- RefId (int identity)
- Code (nvarchar(10))
- CreateDate (datetime2)
- Description (nvarchar(255))

A deployment pipeline can be rerun automatically when a transient failure occurs. You need to deploy the reference data as part of the same CI/CD process. Rerunning the pipeline must produce the same outcome and must NOT create duplicate rows. What should you do?',
  '[{"key":"A","text":"Add a post-deployment script that inserts reference rows by using IF NOT EXISTS or MERGE logic."},{"key":"B","text":"Restore a backup after each deployment."},{"key":"C","text":"Store the reference values in GitHub repository secrets."},{"key":"D","text":"Recreate the table with a standard TRUNCATE and batch INSERT without any guard clause."}]'::jsonb,
  ARRAY['A']::text[],
  'Để đảm bảo tính lặp lại độc lập (idempotent) của pipeline triển khai dữ liệu mẫu (reference data), tránh việc tạo dòng trùng lặp khi chạy lại pipeline, giải pháp tối ưu là thêm một tệp lệnh post-deployment sử dụng câu lệnh MERGE hoặc kiểm tra điều kiện IF NOT EXISTS trước khi thực hiện chèn dữ liệu.',
  'Query Optimization & Indexes',
  ARRAY['DP-800', 'CI/CD', 'Post-Deployment', 'MERGE']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp72',
  'dp-800',
  72,
  'You have an Azure AI Search service and an index named hotels that includes a vector field named DescriptionVector. You query hotels by using the Search Documents REST API. You need to implement a hybrid search query that uses DescriptionVector and includes captions. How should you complete the REST request body configuration?',
  '[{"key":"A","text":"Set \"queryType\" to \"semantic\", \"semanticConfiguration\" to \"hotels\", and \"captions\" to \"extractive\"."},{"key":"B","text":"Set \"queryType\" to \"hybrid\", \"semanticConfiguration\" to \"hotels\", and \"captions\" to \"generative\"."},{"key":"C","text":"Set \"queryType\" to \"simple\", \"semanticConfiguration\" to \"default\", and \"captions\" to \"extractive\"."},{"key":"D","text":"Set \"queryType\" to \"semantic\", \"semanticConfiguration\" to \"default\", and \"captions\" to \"none\"."}]'::jsonb,
  ARRAY['A']::text[],
  'Để cấu hình tìm kiếm lai (hybrid search) kết hợp vector với trích xuất phần trích dẫn (captions) trong Azure AI Search, ta phải thiết lập thuộc tính queryType thành ''semantic'', chỉ định cấu hình ngữ nghĩa qua semanticConfiguration (ở đây là ''hotels''), và đặt captions thành ''extractive''.',
  'Vector Search & DiskANN',
  ARRAY['DP-800', 'Azure AI Search', 'Hybrid Search', 'Captions']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp73',
  'dp-800',
  73,
  'You need to recommend a solution for a TransactionProcessing application connecting to Azure SQL Database that meets the security requirements of passwordless authentication and automatic credential rotation. What should you include in the recommendation?',
  '[{"key":"A","text":"A service principal with client secrets."},{"key":"B","text":"A system-assigned managed identity."},{"key":"C","text":"A shared access key stored in application settings."},{"key":"D","text":"A user-assigned managed identity configured with a password."}]'::jsonb,
  ARRAY['B']::text[],
  'Sử dụng System-assigned Managed Identity (Danh tính được quản lý gán bởi hệ thống) là phương pháp tối ưu nhất để thiết lập kết nối không mật khẩu (passwordless) từ một tài nguyên Azure (như App Service) tới Azure SQL Database, giúp loại bỏ hoàn toàn việc lưu trữ hay quản lý mật khẩu thủ công và tự động xoay vòng khóa.',
  'Database Security & Triggers',
  ARRAY['DP-800', 'Managed Identity', 'Passwordless', 'Security']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp74',
  'dp-800',
  74,
  'You need to implement a tamper-evident history of transactions for a critical table in Azure SQL Database to provide cryptographic proof of data integrity to external auditors. The solution must minimize administrative overhead and require no changes to existing application query logic. What should you configure?',
  '[{"key":"A","text":"Configure the table as an updatable ledger table."},{"key":"B","text":"Enable Always Encrypted with secure enclaves."},{"key":"C","text":"Enable change tracking on the table and database levels."},{"key":"D","text":"Configure row-level security (RLS) with block predicates."}]'::jsonb,
  ARRAY['A']::text[],
  'Azure SQL Database Ledger cung cấp tính năng bảo vệ tính toàn vẹn dữ liệu thông qua cơ chế mật mã hóa tamper-evident. Khi thiết lập một bảng làm updatable ledger table, SQL Server sẽ tự động lưu lại lịch sử các thao tác cập nhật và xóa vào một bảng lịch sử kèm theo mã băm mật mã hóa mà ứng dụng không cần thay đổi bất kỳ câu lệnh SQL hay logic nào.',
  'Database Security & Triggers',
  ARRAY['DP-800', 'Ledger', 'Security', 'Tamper-Evident']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp75',
  'dp-800',
  75,
  'You have an Azure SQL database that contains a table named dbo.Customers, which contains a CustomerId (primary key) and a ProfileJson (nvarchar(max)) column. You have an application that returns phone numbers in a format of +000 000-000-000-0000 stored in ProfileJson under $.contact.phone. You need to write a query that returns CustomerId and a PhoneNumerals column that contains ONLY the digits. Which T-SQL query should you use?',
  '[{"key":"A","text":"WITH PhoneCTE AS (SELECT DISTINCT c.CustomerId, JSON_VALUE(c.ProfileJson, ''$.contact.phone'') AS PhoneRaw FROM dbo.Customers AS c) SELECT p.CustomerId, REGEXP_REPLACE(p.PhoneRaw, ''[^0-9]'', '''') AS PhoneNumerals FROM PhoneCTE AS p WHERE p.PhoneRaw IS NOT NULL;"},{"key":"B","text":"WITH PhoneCTE AS (SELECT DISTINCT c.CustomerId, JSON_QUERY(c.ProfileJson, ''$.contact.phone'') AS PhoneRaw FROM dbo.Customers AS c) SELECT p.CustomerId, REGEXP_SUBSTR(p.PhoneRaw, ''[0-9]+'') AS PhoneNumerals FROM PhoneCTE AS p WHERE p.PhoneRaw IS NOT NULL;"},{"key":"C","text":"WITH PhoneCTE AS (SELECT DISTINCT c.CustomerId, OPENJSON(c.ProfileJson, ''$.contact.phone'') AS PhoneRaw FROM dbo.Customers AS c) SELECT p.CustomerId, REGEXP_REPLACE(p.PhoneRaw, ''[^0-9]'', '''') AS PhoneNumerals FROM PhoneCTE AS p WHERE p.PhoneRaw IS NOT NULL;"},{"key":"D","text":"WITH PhoneCTE AS (SELECT DISTINCT c.CustomerId, JSON_VALUE(c.ProfileJson, ''$.contact.phone'') AS PhoneRaw FROM dbo.Customers AS c) SELECT p.CustomerId, REGEXP_LIKE(p.PhoneRaw, ''[^0-9]'') AS PhoneNumerals FROM PhoneCTE AS p;"}]'::jsonb,
  ARRAY['A']::text[],
  'Để trích xuất số điện thoại từ tài liệu JSON, ta sử dụng hàm JSON_VALUE (do số điện thoại là giá trị vô hướng/scalar). Để loại bỏ tất cả các ký tự không phải số (như +, khoảng trắng, gạch ngang), ta sử dụng hàm REGEXP_REPLACE kết hợp biểu thức chính quy (regular expression) ''[^0-9]'' để thay thế chúng bằng chuỗi rỗng.',
  'SQL AI Querying & JSON',
  ARRAY['DP-800', 'JSON_VALUE', 'REGEXP_REPLACE', 'Regex']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp76',
  'dp-800',
  76,
  'You have an SDK-style SQL database project stored in a Git repository. The project targets an Azure SQL database. The CI build fails with unresolved reference errors when the project references system objects. You need to update the SQL database project to ensure that dotnet build validates successfully by including the correct system objects in the database model for Azure SQL Database. What is the correct solution?',
  '[{"key":"A","text":"Add the Microsoft.SqlServer.Dacpacs.Azure.Master NuGet package to the project or add an artifact reference to the Azure SQL Database master dacpac file."},{"key":"B","text":"Add the Microsoft.SqlServer.Dacpacs.Master NuGet package targeting on-premises database systems."},{"key":"C","text":"Enable FORCE_LAST_GOOD_PLAN automatic tuning on the Logical Server."},{"key":"D","text":"Execute DBCC CHECKDB on the local build machine environment."}]'::jsonb,
  ARRAY['A']::text[],
  'Khi một dự án cơ sở dữ liệu dạng SDK-style SQL (.sqlproj) tham chiếu đến các đối tượng hệ thống (như sys.*) và bị lỗi build CI, giải pháp chuẩn xác và được khuyến nghị là thêm tham chiếu NuGet hoặc dacpac của master database cho Azure SQL Database (master.dacpac) vào mô hình cơ sở dữ liệu.',
  'Database Development & Tooling',
  ARRAY['DP-800', 'CI/CD', 'DACPAC', 'SDK-style']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp77',
  'dp-800',
  77,
  'You have an Azure container app named app1-contoso-001 that hosts a Data API builder (DAB) container in front of an Azure SQL database. You add an entity named Todo that uses a source named dbo.todos. Which URL pattern should clients use to access the Todo REST endpoint?',
  '[{"key":"A","text":"https://app1-contoso-001.azurestaticapps.net/data-api/graphql/Todo"},{"key":"B","text":"https://app1-contoso-001.azurestaticapps.net/api/Todo"},{"key":"C","text":"https://app1-contoso-001.azurestaticapps.net/data-api/Todo"},{"key":"D","text":"https://app1-contoso-001.azurestaticapps.net/data-api/api/Todo"}]'::jsonb,
  ARRAY['B']::text[],
  'Theo mặc định, Data API Builder (DAB) sẽ xuất bản các endpoint REST dưới tiền tố đường dẫn ''/api''. Vì vậy, một thực thể (entity) có tên ''Todo'' sẽ được truy cập thông qua mẫu URL có tiền tố là /api/Todo.',
  'Database Development & Tooling',
  ARRAY['DP-800', 'Data API Builder', 'REST API', 'Endpoints']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp78',
  'dp-800',
  78,
  'You have an Azure SQL database named SalesDB that supports an ecommerce application. SalesDB contains a table named dbo.Orders that has a clustered index on a column named OrderId. dbo.Orders receives continuous OLTP inserts and updates during business hours. Your analytics team runs hourly aggregate queries that scan dbo.Orders to calculate revenue trends. You need to improve the performance of the hourly analytics queries without significantly affecting OLTP throughput. The solution must support near-real-time (NRT) analytics on the table and support indexing only rows that match a predicate like Active = 1. Which types of indexes should you use?',
  '[{"key":"A","text":"A nonclustered columnstore index on the existing rowstore table for NRT analytics, and a filtered nonclustered index with a WHERE predicate for matching rows."},{"key":"B","text":"A clustered columnstore index, and a clustered rowstore index ordered by key columns."},{"key":"C","text":"A standard nonclustered B-Tree index with INCLUDE columns, and a filtered clustered index."},{"key":"D","text":"A full-text index on the active column, and a nonclustered columnstore index."}]'::jsonb,
  ARRAY['A']::text[],
  'Để hỗ trợ phân tích thời gian thực (NRT) trên bảng OLTP đang có lượng giao dịch lớn mà không ảnh hưởng nhiều tới hiệu năng ghi, ta xây dựng một nonclustered columnstore index trên bảng rowstore hiện tại. Để tối ưu hóa truy vấn lọc theo một điều kiện cụ thể (ví dụ: Active = 1), ta sử dụng filtered nonclustered index có mệnh đề WHERE để thu nhỏ kích thước chỉ mục và giảm thiểu chi phí bảo trì.',
  'Query Optimization & Indexes',
  ARRAY['DP-800', 'NRT Analytics', 'Columnstore Index', 'Filtered Index']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp79',
  'dp-800',
  79,
  'You are developing an Azure SQL solution by using Microsoft Visual Studio. The solution uses a GitHub repository. You plan to use GitHub Copilot Chat to access the GitHub repository tools by connecting to the GitHub MCP Server. You need to configure Visual Studio to support the planned configuration Solutions solutions-wide. What should you create?',
  '[{"key":"A","text":"The .vslsettings.json file in the solution directory containing personal access tokens."},{"key":"B","text":"The .mcp.json file in the solution directory containing the MCP URL https://api.githubcopilot.com/mcp/."},{"key":"C","text":"The .vscode/settings.json file containing repository rules."},{"key":"D","text":"The .github/mcp.json file containing credentials and API scopes."}]'::jsonb,
  ARRAY['B']::text[],
  'Trong môi trường Microsoft Visual Studio (không phải VS Code), cấu hình kết nối MCP server theo phạm vi giải pháp (solution-wide) được lưu trữ trong tệp .mcp.json nằm ở thư mục gốc của solution, chỉ định URL của MCP server sử dụng xác thực OAuth.',
  'Database Development & Tooling',
  ARRAY['DP-800', 'Visual Studio', 'MCP Server', 'Copilot']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp80',
  'dp-800',
  80,
  'Which tool helps orchestrate data pipelines for AI workflows in Azure?',
  '[{"key":"A","text":"Azure DevOps"},{"key":"B","text":"Azure Data Factory"},{"key":"C","text":"Power BI"},{"key":"D","text":"Azure Monitor"}]'::jsonb,
  ARRAY['B']::text[],
  'Azure Data Factory (ADF) là dịch vụ tích hợp dữ liệu và điều phối (orchestration) trên nền tảng đám mây của Microsoft, được sử dụng rộng rãi để xây dựng, lập lịch và quản lý các luồng xử lý dữ liệu phục vụ các tác vụ AI và học máy.',
  'Vector Search & DiskANN',
  ARRAY['DP-800', 'Azure Data Factory', 'Orchestration']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp81',
  'dp-800',
  81,
  'You have an Azure SQL database named SalesDB and an Azure App Service app named sales-api. SalesDB contains a table named dbo.Customers, which contains columns named CreditCardNumber and TenantId. Currently, sales-api connects to SalesDB by using SQL authentication. You need to recommend a solution that meets the following requirements:
- Provides a passwordless method for sales-api to access SalesDB.
- Ensures that credit card numbers are NOT stored as plain text.

What should you include in the recommendation?',
  '[{"key":"A","text":"Azure Key Vault and Always Encrypted"},{"key":"B","text":"Transparent Data Encryption (TDE) and row-level security (RLS)"},{"key":"C","text":"Managed identities and dynamic data masking"},{"key":"D","text":"Managed identities and Always Encrypted"}]'::jsonb,
  ARRAY['D']::text[],
  'Để đạt được kết nối không mật khẩu (passwordless), ta sử dụng Managed Identity (Danh tính được quản lý). Để đảm bảo các thông tin nhạy cảm như số thẻ tín dụng không bao giờ bị lưu trữ dưới dạng văn bản rõ (plain text) trên đĩa hoặc trong bộ nhớ của công cụ cơ sở dữ liệu, ta áp dụng công nghệ Always Encrypted để mã hóa dữ liệu ngay từ phía máy khách.',
  'Database Security & Triggers',
  ARRAY['DP-800', 'Managed Identities', 'Always Encrypted', 'Security']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp82',
  'dp-800',
  82,
  'You have an Azure SQL database that contains a table named Table1. Table1 contains 25,000,000 rows of data spanning the years 2020 through 2021. You need to partition the data in Table1 by year on a datetime2 column named DateKey. The solution must minimize how long it takes to rebuild or reindex the table. How should you complete the partition function?',
  '[{"key":"A","text":"CREATE PARTITION FUNCTION PartitionByYear (datetime2) AS RANGE RIGHT FOR VALUES (''2020-01-01 00:00:00'', ''2021-01-01 00:00:00'');"},{"key":"B","text":"CREATE PARTITION FUNCTION PartitionByYear (datetime2) AS RANGE LEFT FOR VALUES (''2019-12-31 23:59:59'', ''2020-12-31 23:59:59'');"},{"key":"C","text":"CREATE PARTITION FUNCTION PartitionByYear (datetime2) AS RANGE RIGHT FOR VALUES (''2020-01-01 00:00:00'', ''2020-02-01 00:00:00'', ''2020-03-01 00:00:00'');"},{"key":"D","text":"CREATE PARTITION FUNCTION PartitionByYear (datetime2) AS PARTITION BY RANGE RIGHT FOR VALUES (''2020-01-01 00:00:00'');"}]'::jsonb,
  ARRAY['A']::text[],
  'Đối với kiểu dữ liệu ngày tháng như datetime2, việc sử dụng RANGE RIGHT là một thực hành tốt nhất (best practice) vì nó giúp định nghĩa các biên thời gian nửa đêm (như 2020-01-01 00:00:00) một cách rõ ràng. Bất kỳ bản ghi nào rơi vào đúng thời điểm biên hoặc muộn hơn sẽ được đưa chính xác vào phân vùng của năm mới.',
  'Query Optimization & Indexes',
  ARRAY['DP-800', 'Partitioning', 'RANGE RIGHT', 'Table Maintenance']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp83',
  'dp-800',
  83,
  'You have an Azure SQL database named ProductsDB. You deploy Data API builder (DAB) to Azure Container Apps. You discover that the container app cannot connect to ProductsDB. Your development team reports that the container app is unreachable from the internet for integration tests. You need to update Azure SQL Database and Container Apps to:
- Ensure that the Azure SQL logical server allows connections from Azure services.
- Ensure that the Container Apps environment accepts inbound requests from the public internet.

What should you configure?',
  '[{"key":"A","text":"SQL Firewall Rule: Start/End IP set to 0.0.0.0; Container Apps Ingress: Set to External and target port 5000."},{"key":"B","text":"SQL Firewall Rule: Start/End IP set to 127.0.0.1; Container Apps Ingress: Set to Internal and target port 5000."},{"key":"C","text":"SQL Firewall Rule: Start/End IP set to 10.0.0.0 to 10.255.255.255; Container Apps Ingress: Restrict ingress to internal traffic only."},{"key":"D","text":"SQL Firewall Rule: Start/End IP set to 0.0.0.0; Container Apps Ingress: Set to Internal and target port 5000."}]'::jsonb,
  ARRAY['A']::text[],
  'Để cho phép kết nối từ các dịch vụ nội bộ của Azure (như Container Apps) tới SQL logical server mà không làm rò rỉ cổng ra internet, ta bật quy tắc firewall SQL từ 0.0.0.0 đến 0.0.0.0. Ngoài ra, để Container App có thể nhận các yêu cầu kiểm thử tích hợp từ internet công cộng, cấu hình ingress của Container App phải được đặt thành ''external'' và chuyển tiếp traffic tới cổng lắng nghe mặc định 5000 của DAB.',
  'High Availability & Disaster Recovery',
  ARRAY['DP-800', 'Firewall', 'Container Apps', 'Ingress']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp84',
  'dp-800',
  84,
  'You have a GitHub Enterprise subscription. Your team is developing an Azure SQL dataset solution from a locally cloned GitHub repository by using VS Code and GitHub Copilot Chat. A mix of GitHub Copilot instructions is configured at different levels, including organization-wide, repository-wide, agent-specific, and personal. Which instructions will take precedence over the others?',
  '[{"key":"A","text":"repository-wide"},{"key":"B","text":"personal"},{"key":"C","text":"organization-wide"},{"key":"D","text":"agent-specific"}]'::jsonb,
  ARRAY['B']::text[],
  'Trong cấu hình của GitHub Copilot, các hướng dẫn cá nhân (personal instructions) do lập trình viên tự định nghĩa luôn có độ ưu tiên cao nhất (highest precedence) và sẽ ghi đè lên các hướng dẫn cấp kho lưu trữ (repository-wide) hoặc cấp tổ chức (organization-wide).',
  'Database Development & Tooling',
  ARRAY['DP-800', 'GitHub Copilot', 'Precedence', 'Instructions']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp85',
  'dp-800',
  85,
  'You have an Azure SQL database that contains tables named dbo.Tickets and dbo.TicketNotes. You plan to implement a Retrieval Augmented Generation (RAG) pattern where you call an Azure OpenAI REST endpoint for chat completions. Which T-SQL function should you use to extract the scalar response text from the JSON object returned by the model?',
  '[{"key":"A","text":"JSON_MODIFY(@response, ''$.result'')"},{"key":"B","text":"OPENJSON(@response)"},{"key":"C","text":"JSON_QUERY(@response, ''$.choices'')"},{"key":"D","text":"JSON_VALUE(@response, ''$.choices[0].message.content'')"}]'::jsonb,
  ARRAY['D']::text[],
  'Phản hồi từ API hoàn thành trò chuyện của Azure OpenAI có cấu trúc JSON chứa mảng lồng nhau ''choices''. Để trích xuất nội dung tin nhắn dạng văn bản đơn giản (scalar text) từ phần tử đầu tiên của mảng này, ta sử dụng hàm JSON_VALUE chỉ định đường dẫn $.choices[0].message.content.',
  'SQL AI Querying & JSON',
  ARRAY['DP-800', 'JSON_VALUE', 'Azure OpenAI', 'RAG']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp86',
  'dp-800',
  86,
  'What is a key benefit of embedding vectors in SQL databases?',
  '[{"key":"A","text":"Faster backups"},{"key":"B","text":"Improved indexing"},{"key":"C","text":"Semantic search capability"},{"key":"D","text":"Reduced storage"}]'::jsonb,
  ARRAY['C']::text[],
  'Lợi ích cốt lõi của việc nhúng vector trực tiếp vào cơ sở dữ liệu SQL là mang lại khả năng tìm kiếm ngữ nghĩa (semantic search), cho phép tìm kiếm và truy xuất thông tin dựa trên ý nghĩa ngữ cảnh và độ tương đồng ngữ nghĩa thay vì chỉ khớp từ khóa chính xác.',
  'Vector Search & DiskANN',
  ARRAY['DP-800', 'Vector Embeddings', 'Semantic Search']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp87',
  'dp-800',
  87,
  'You need to create a scalar user-defined function (UDF) in T-SQL named dbo.ufn_DaysSinceOrder that returns the number of days between an input value of @OrderDate and the current date and time. Which query correctly defines this function?',
  '[{"key":"A","text":"CREATE FUNCTION dbo.ufn_DaysSinceOrder (@OrderDate datetime2(0)) RETURNS INT BEGIN DECLARE @Days int; SELECT @Days = DATEDIFF(day, @OrderDate, GETDATE()); RETURN @Days; END;"},{"key":"B","text":"CREATE FUNCTION dbo.ufn_DaysSinceOrder (@OrderDate datetime2(0)) RETURNS TABLE AS RETURN SELECT DATEDIFF(day, @OrderDate, GETDATE()) AS Days;"},{"key":"C","text":"CREATE FUNCTION dbo.ufn_DaysSinceOrder (@OrderDate datetime2(0)) RETURNS INT BEGIN DECLARE @Days int; SELECT @Days = DATEADD(day, @OrderDate, GETDATE()); RETURN @Days; END;"},{"key":"D","text":"CREATE FUNCTION dbo.ufn_DaysSinceOrder (@OrderDate datetime2(0)) RETURNS INT WITH SCHEMABINDING BEGIN DECLARE @Days int; SELECT @Days = DATEDIFF(day, GETDATE(), @OrderDate); RETURN @Days; END;"}]'::jsonb,
  ARRAY['A']::text[],
  'Trong định nghĩa hàm vô hướng (scalar function) của T-SQL, ta bắt buộc phải sử dụng từ khóa RETURNS kèm kiểu dữ liệu vô hướng (ví dụ: RETURNS INT). Bên trong thân hàm, ta sử dụng hàm DATEDIFF với đơn vị tính là ''day'', truyền vào ngày bắt đầu (@OrderDate) và ngày kết thúc (GETDATE()) để tính toán khoảng cách số ngày.',
  'Query Optimization & Indexes',
  ARRAY['DP-800', 'Scalar UDF', 'DATEDIFF', 'T-SQL']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp88',
  'dp-800',
  88,
  'What is the role of Azure Synapse in AI + SQL solutions?',
  '[{"key":"A","text":"Data warehousing and analytics"},{"key":"B","text":"Authentication"},{"key":"C","text":"DNS management"},{"key":"D","text":"Email services"}]'::jsonb,
  ARRAY['A']::text[],
  'Azure Synapse Analytics đóng vai trò là giải pháp lưu trữ kho dữ liệu (data warehousing) và phân tích dữ liệu lớn (big data analytics), giúp tích hợp dữ liệu từ nhiều nguồn khác nhau, chuẩn bị và phân tích quy mô lớn trước khi nạp vào các mô hình AI/ML.',
  'Vector Search & DiskANN',
  ARRAY['DP-800', 'Azure Synapse', 'Data Warehousing']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp89',
  'dp-800',
  89,
  'Which scenario best fits AI-enhanced SQL querying?',
  '[{"key":"A","text":"Static reports"},{"key":"B","text":"Manual backups"},{"key":"C","text":"Chatbot querying database data"},{"key":"D","text":"File compression"}]'::jsonb,
  ARRAY['C']::text[],
  'Kịch bản điển hình nhất cho truy vấn SQL tích hợp AI là phát triển một trợ lý ảo/chatbot cho phép người dùng đặt câu hỏi bằng ngôn ngữ tự nhiên, hệ thống sẽ tự động chuyển dịch câu hỏi đó thành câu lệnh SQL tương ứng để truy vấn dữ liệu từ cơ sở dữ liệu và phản hồi lại người dùng.',
  'SQL AI Querying & JSON',
  ARRAY['DP-800', 'Chatbot', 'Natural Language', 'AI Querying']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp90',
  'dp-800',
  90,
  'You have an Azure SQL database that contains a table named Customer. Customer contains NationalIDNumber (unique per customer) and InvestigationNotes (free-form text). You have a stored procedure that performs point lookups by NationalIDNumber and returns InvestigationNotes in the query results. You need to encrypt both columns by using Always Encrypted with the highest security possible. Which type of Always Encrypted encryption should you use for each column?',
  '[{"key":"A","text":"Deterministic for NationalIDNumber and randomized for InvestigationNotes"},{"key":"B","text":"Deterministic for both columns"},{"key":"C","text":"Randomized for both columns"},{"key":"D","text":"Randomized for NationalIDNumber and deterministic for InvestigationNotes"}]'::jsonb,
  ARRAY['A']::text[],
  'Để mã hóa cột bằng Always Encrypted: cột NationalIDNumber được dùng cho các truy vấn tìm kiếm chính xác (point lookups/equality searches) nên bắt buộc phải chọn mã hóa định mệnh (deterministic) để đảm bảo kết quả mã hóa của cùng một giá trị luôn trùng khớp. Đối với cột ghi chú tự do InvestigationNotes chỉ dùng để hiển thị và không tham gia vào các điều kiện lọc, ta chọn mã hóa ngẫu nhiên (randomized) để đạt mức độ bảo mật tối đa và ngăn chặn phân tích mẫu dữ liệu.',
  'Database Security & Triggers',
  ARRAY['DP-800', 'Always Encrypted', 'Deterministic', 'Randomized']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp91',
  'dp-800',
  91,
  'You have an Azure SQL database that contains a table named Tickets_Embeddings. Tickets_Embeddings contains a VECTOR(1536) column. Embeddings are generated by using text-embedding-ada-002. After a review, the following changes are requested:
- Switch to text-embedding-3-small.
- Authenticate by using Microsoft Entra managed identities only. Storing API keys in an application is prohibited.

Which two actions should you include in the solution?',
  '[{"key":"A","text":"Alter the database tables to modify the vector dimensions, and add a firewall rule."},{"key":"B","text":"Regenerate all the embeddings, and change the API endpoint to Azure OpenAI resource endpoint."},{"key":"C","text":"Change the primary keys for the tickets, and enable Transparent Data Encryption (TDE)."},{"key":"D","text":"Configure SQL Server 2025 local ONNX runtime, and grant CONTROL permission to the user."}]'::jsonb,
  ARRAY['B']::text[],
  'Khi chuyển đổi mô hình nhúng từ text-embedding-ada-002 sang text-embedding-3-small: 1) Toàn bộ các vector nhúng cũ cần phải được tạo lại (regenerate) vì hai mô hình này sử dụng không gian toán học vector hoàn toàn khác nhau và không thể so sánh chéo. 2) Cần thay đổi endpoint kết nối sang Azure OpenAI endpoint để hỗ trợ xác thực không mật khẩu bằng danh tính được quản lý Microsoft Entra ID (không cần chiều dài vector mới vì cả hai đều là 1536 kích thước).',
  'Vector Search & DiskANN',
  ARRAY['DP-800', 'Model Migration', 'Azure OpenAI', 'Managed Identity']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp92',
  'dp-800',
  92,
  'You have a database named DB1. The schema is stored in a GitHub repository as an SDK-style SQL database project. You use a feature branch workflow to deploy changes to DB1. You need to configure a GitHub Actions workflow to support the planned changes for DB1. Which trigger and command should you complete in the workflow?',
  '[{"key":"A","text":"Trigger on push to branch main; Command: run: dotnet build Database.sqlproj -c Release"},{"key":"B","text":"Trigger on pull_request to branch main; Command: run: dotnet pack Database.sqlproj"},{"key":"C","text":"Trigger on merge; Command: run: dotnet publish Database.sqlproj -c Production"},{"key":"D","text":"Trigger on push to branch main; Command: run: dotnet publish Database.sqlproj -c Release"}]'::jsonb,
  ARRAY['A']::text[],
  'Để tự động kiểm tra tính hợp lệ của dự án cơ sở dữ liệu SQL (.sqlproj) mỗi khi có thay đổi được đẩy lên nhánh chính (main branch), ta cấu hình trigger ''push'' trên nhánh main. Bước thực thi sẽ chạy lệnh ''dotnet build Database.sqlproj -c Release'' để biên dịch dự án, kiểm tra cú pháp và phát hiện các lỗi liên kết đối tượng.',
  'Database Development & Tooling',
  ARRAY['DP-800', 'GitHub Actions', 'CI/CD', 'dotnet build']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp93',
  'dp-800',
  93,
  'You need to create a T-SQL stored procedure dbo.GetActivePatients that retrieves active patient names from dbo.Patients who have underwent medical procedures during the last 30 days. The solution must use the most efficient EXISTS semi-join method to validate the existence of matching rows. Which query should you use?',
  '[{"key":"A","text":"CREATE PROCEDURE dbo.GetActivePatients AS BEGIN SET NOCOUNT ON; SELECT p.Name FROM dbo.Patients AS p WHERE EXISTS (SELECT 1 FROM dbo.Procedures AS pr WHERE p.PatientId = pr.PatientId AND pr.TransactionDate >= DATEADD(DAY, -30, SYSUTCDATETIME())); END;"},{"key":"B","text":"CREATE PROCEDURE dbo.GetActivePatients AS BEGIN SET NOCOUNT ON; SELECT p.Name FROM dbo.Patients AS p WHERE NOT EXISTS (SELECT 1 FROM dbo.Procedures AS pr WHERE p.PatientId = pr.PatientId AND pr.TransactionDate >= DATEADD(DAY, -30, SYSUTCDATETIME())); END;"},{"key":"C","text":"CREATE PROCEDURE dbo.GetActivePatients AS BEGIN SET NOCOUNT ON; SELECT p.Name FROM dbo.Patients AS p WHERE p.PatientId IN (SELECT PatientId FROM dbo.Procedures AS pr HAVING p.PatientId = pr.PatientId); END;"},{"key":"D","text":"CREATE PROCEDURE dbo.GetActivePatients AS BEGIN SET NOCOUNT ON; SELECT p.Name FROM dbo.Patients AS p WHERE p.PatientId NOT IN (SELECT PatientId FROM dbo.Procedures AS pr WHERE p.TransactionId = pr.TransactionId); END;"}]'::jsonb,
  ARRAY['A']::text[],
  'Toán tử EXISTS là phương thức tối ưu và hiệu quả nhất trong T-SQL để thực hiện các truy vấn bán liên kết (semi-join) nhằm kiểm tra sự tồn tại của các dòng dữ liệu trong truy vấn con. EXISTS sẽ dừng quét ngay khi tìm thấy bản ghi khớp đầu tiên (short-circuit evaluation), giúp cải thiện đáng kể tốc độ truy vấn so với sử dụng IN.',
  'Query Optimization & Indexes',
  ARRAY['DP-800', 'EXISTS', 'Query Tuning', 'Semi-Join']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp94',
  'dp-800',
  94,
  'You have an on-premises application named TransactionProcessing that needs to connect securely to Azure SQL Database. The application requires its own identity that is managed independently of other Azure resources. What should you recommend for authentication?',
  '[{"key":"A","text":"A Service Principal registered in Microsoft Entra ID."},{"key":"B","text":"A system-assigned managed identity."},{"key":"C","text":"A shared access key stored in database credentials."},{"key":"D","text":"A user-assigned managed identity."}]'::jsonb,
  ARRAY['A']::text[],
  'Khi một ứng dụng chạy ngoài hạ tầng Azure (on-premises) cần kết nối bảo mật bằng danh tính tới Azure SQL Database độc lập và không phụ thuộc vào vòng đời của các tài nguyên đám mây khác, lựa chọn phù hợp nhất là sử dụng một Service Principal (Tài khoản dịch vụ) đăng ký trong Microsoft Entra ID.',
  'Database Security & Triggers',
  ARRAY['DP-800', 'Service Principal', 'On-premises', 'Security']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp95',
  'dp-800',
  95,
  'You plan to implement changes to a long-running stored procedure named sp_UpdateProcedureForPatient to prevent records accessed by the procedure from being changed by other transactions while the stored procedure runs, maximizing concurrency over serializability. Which transaction isolation level should you use?',
  '[{"key":"A","text":"REPEATABLE READ"},{"key":"B","text":"SERIALIZABLE"},{"key":"C","text":"SNAPSHOT"},{"key":"D","text":"READ COMMITTED SNAPSHOT"}]'::jsonb,
  ARRAY['A']::text[],
  'Mức cô lập giao dịch REPEATABLE READ đảm bảo rằng các dữ liệu đã được đọc trong suốt quá trình giao dịch chạy sẽ không bị sửa đổi bởi bất kỳ giao dịch nào khác cho đến khi giao dịch hiện tại hoàn tất. Điều này giải quyết triệt đến vấn đề dữ liệu không nhất quán do các phiên làm việc song song cập nhật đè, đồng thời cung cấp khả năng đồng thời (concurrency) tốt hơn mức SERIALIZABLE.',
  'Query Optimization & Indexes',
  ARRAY['DP-800', 'Isolation Levels', 'REPEATABLE READ', 'Concurrency']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp96',
  'dp-800',
  96,
  'You need to create a solution for retrieving patient transaction data that allows database developers to join the resulting data to other tables, accepting parameters and calculating a chronological running total per customer. How should you define this object in T-SQL?',
  '[{"key":"A","text":"CREATE FUNCTION dbo.CustomerTransactionInformation (@CustomerId INT, @StartDate DATETIME2, @EndDate DATETIME2) RETURNS TABLE AS RETURN ( SELECT t.TransactionId, t.CustomerId, t.TransactionDate, t.Amount, SUM(t.Amount) OVER (PARTITION BY t.CustomerId ORDER BY t.TransactionDate, t.TransactionId ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS RunningTotal FROM dbo.Transactions AS t WHERE t.CustomerId = @CustomerId AND t.TransactionDate >= @StartDate AND t.TransactionDate <= @EndDate );"},{"key":"B","text":"CREATE PROCEDURE dbo.CustomerTransactionInformation (@CustomerId INT, @StartDate DATETIME2, @EndDate DATETIME2) AS BEGIN SELECT t.TransactionId, t.CustomerId, t.TransactionDate, t.Amount, SUM(t.Amount) OVER (GROUP BY t.CustomerId ORDER BY t.TransactionId, t.CustomerId ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS RunningTotal FROM dbo.Transactions AS t; END;"},{"key":"C","text":"CREATE VIEW dbo.CustomerTransactionInformation AS SELECT t.TransactionId, t.CustomerId, t.TransactionDate, t.Amount, SUM(t.Amount) OVER (PARTITION BY t.TransactionDate ORDER BY t.TransactionDate, t.TransactionId) AS RunningTotal FROM dbo.Transactions AS t;"},{"key":"D","text":"CREATE FUNCTION dbo.CustomerTransactionInformation (@CustomerId INT) RETURNS TABLE AS RETURN ( SELECT t.TransactionId, t.CustomerId, t.TransactionDate, t.Amount, SUM(t.Amount) OVER (PARTITION BY t.TransactionDate ORDER BY t.TransactionId, t.CustomerId) AS RunningTotal FROM dbo.Transactions AS t );"}]'::jsonb,
  ARRAY['A']::text[],
  'Để cho phép các lập trình viên cơ sở dữ liệu có thể thực hiện liên kết (JOIN) linh hoạt kết quả trả về với các bảng khác, ta cần viết mã dưới dạng một Inline Table-Valued Function (ITVF). Hàm tính toán tổng lũy kế (running total) sử dụng hàm cửa sổ SUM() OVER, chia nhóm theo khách hàng bằng PARTITION BY t.CustomerId, và sắp xếp thứ tự giao dịch tăng dần bằng ORDER BY t.TransactionDate, t.TransactionId.',
  'Query Optimization & Indexes',
  ARRAY['DP-800', 'Inline TVF', 'OVER', 'Running Total']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp97',
  'dp-800',
  97,
  'You need to store prompts in a table named UsefulPrompts that doctors can use to help diagnose patient illnesses by connecting to an Azure OpenAI endpoint directly from Azure SQL Database. Which stored procedure should you use to call the REST endpoint?',
  '[{"key":"A","text":"sp_OACreate"},{"key":"B","text":"sp_addendpoint"},{"key":"C","text":"xp_cmdshell"},{"key":"D","text":"sp_invoke_external_rest_endpoint"}]'::jsonb,
  ARRAY['D']::text[],
  'Thủ tục hệ thống sp_invoke_external_rest_endpoint được thiết kế chuyên biệt để gọi trực tiếp các API REST bên ngoài từ Azure SQL Database, cho phép gửi các prompt tới Azure OpenAI một cách an toàn và tối ưu.',
  'Vector Search & DiskANN',
  ARRAY['DP-800', 'REST API', 'sp_invoke_external_rest_endpoint', 'Azure OpenAI']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp98',
  'dp-800',
  98,
  'You have defined the following permissions inside a Data API builder (DAB) configuration file:
- ''Procedures'' table has role ''anonymous'' with action ''read''.
- ''Transactions'' table has role ''authenticated'' with actions ''read'' and ''create''.
- ''UpdateProcedurePatient'' stored procedure has role ''authenticated'' with action ''execute''.

Evaluate the following statements and determine which one is TRUE:',
  '[{"key":"A","text":"Applications can read data in the Procedures table without authentication, and authenticated applications can execute the update stored procedure, but they cannot update existing Transactions records directly."},{"key":"B","text":"Applications can read and update data in the Transactions table once authenticated, but anonymous users can execute the stored procedure."},{"key":"C","text":"No users can read the Procedures table unless they are authenticated with a valid Azure AD token."},{"key":"D","text":"Authenticated applications can write to the Procedures table, but anonymous users can create transactions."}]'::jsonb,
  ARRAY['A']::text[],
  'Dựa vào tệp cấu hình DAB cung cấp: Thực thể ''Procedures'' có quyền đọc ''read'' cho vai trò ''anonymous'' (không cần xác thực), thực thể ''Transactions'' chỉ cấp quyền ''read'' và ''create'' cho vai trò ''authenticated'' (không cho phép sửa đổi/update), và ''UpdateProcedurePatient'' cho phép thực thi stored procedure đối với tài khoản đã xác thực.',
  'Database Development & Tooling',
  ARRAY['DP-800', 'Data API Builder', 'Role-Based Security', 'Anonymous Access']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp99',
  'dp-800',
  99,
  'You implement ProcedureDocuments to support a RAG pattern. When users consume data through the RAG pattern, they experience data retrieval delays. You need to improve the data retrieval performance and reduce the number of tokens per retrieval. What should you implement?',
  '[{"key":"A","text":"chunking"},{"key":"B","text":"embeddings"},{"key":"C","text":"a small language model (SLM)"},{"key":"D","text":"JSON content"}]'::jsonb,
  ARRAY['A']::text[],
  'Cắt nhỏ tài liệu (chunking) thành các đoạn văn bản ngắn, có nghĩa là kỹ thuật cơ bản và hiệu quả nhất để cải thiện tốc độ truy xuất và giảm số lượng token tiêu thụ khi gửi dữ liệu ngữ cảnh tới các mô hình ngôn ngữ lớn (LLM).',
  'Vector Search & DiskANN',
  ARRAY['DP-800', 'Chunking', 'RAG', 'Token Optimization']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp100',
  'dp-800',
  100,
  'You need to identify the top CPU-consuming queries from the last two hours by querying Query Store in Azure SQL Database. The solution must aggregate CPU consumption across executions and return only the top 15 query hashes. Which query component configuration is correct?',
  '[{"key":"A","text":"CPU calculation: SUM(count_executions * rs.avg_cpu_time); Interval Join: sys.query_store_runtime_stats_interval AS rsi; Start time filter: DATEADD(HOUR, -2, GETUTCDATETIME())"},{"key":"B","text":"CPU calculation: SUM(count_executions * rs.last_cpu_time); Interval Join: sys.dm_exec_query_stats AS rsi; Start time filter: DATEADD(DAY, -2, GETDATE())"},{"key":"C","text":"CPU calculation: SUM(count_executions * rs.avg_cpu_time); Interval Join: sys.query_store_runtime_stats_interval AS rsi; Start time filter: DATEADD(HOUR, -2, GETDATE())"},{"key":"D","text":"CPU calculation: SUM(count_executions * rs.last_cpu_time); Interval Join: sys.query_store_runtime_stats_interval AS rsi; Start time filter: DATEADD(HOUR, -2, GETUTCDATETIME())"}]'::jsonb,
  ARRAY['A']::text[],
  'Để tính toán tổng thời gian CPU tiêu thụ trong Query Store, ta nhân số lần chạy (count_executions) với thời gian CPU trung bình mỗi lần chạy (rs.avg_cpu_time). Ta thực hiện kết nối với bảng khoảng thời gian sys.query_store_runtime_stats_interval (rsi), và lọc mốc thời gian UTC bằng hàm GETUTCDATETIME() để khớp với Query Store (Query Store lưu theo chuẩn giờ UTC).',
  'Query Optimization & Indexes',
  ARRAY['DP-800', 'Query Store', 'GETUTCDATETIME', 'CPU Aggregation']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp101',
  'dp-800',
  101,
  'You have an Azure SQL database named sqldb-ai-prod that contains a table named Tickets. Tickets contains TenantId, TicketId, CustomerEmail, CustomerPhone, and Notes. You need to configure security to ensure support agents see only the rows of their own TenantId column, and see only the domain name portion of the CustomerEmail column. Which combination of security features meets these requirements?',
  '[{"key":"A","text":"TenantId limit: Create a Row-Level Security (RLS) predicate using user context; CustomerEmail limit: Configure Dynamic Data Masking (DDM) on the email column."},{"key":"B","text":"TenantId limit: Enable Transparent Data Encryption (TDE) with customer-managed keys; CustomerEmail limit: Configure Always Encrypted with randomized encryption."},{"key":"C","text":"TenantId limit: Create a Row-Level Security (RLS) predicate; CustomerEmail limit: Configure Always Encrypted with deterministic encryption."},{"key":"D","text":"TenantId limit: Configure Dynamic Data Masking (DDM); CustomerEmail limit: Create a Row-Level Security (RLS) predicate."}]'::jsonb,
  ARRAY['A']::text[],
  'Để giới hạn quyền truy cập dòng dữ liệu của các nhóm hỗ trợ theo TenantId, ta xây dựng chính sách Row-Level Security (RLS) dựa trên ngữ cảnh người dùng. Để che giấu thông tin email của khách hàng chỉ hiển thị phần tên miền, ta cấu hình tính năng Dynamic Data Masking (DDM) trên cột email.',
  'Database Security & Triggers',
  ARRAY['DP-800', 'Row-Level Security', 'Dynamic Data Masking', 'SaaS']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp102',
  'dp-800',
  102,
  'You have an Azure SQL database named SalesDB with a table named dbo.Articles. You need to implement an incremental embedding maintenance method using change data capture (CDC) to update embeddings in a column named EmbeddingVector only when Title or Body columns change, supporting net changes query. Which T-SQL configurations should you use?',
  '[{"key":"A","text":"Activate CDC on Database: EXEC sys.sp_cdc_enable_db; Capture columns list: N''ArticleId, Title, Body''; Net changes support: @supports_net_changes = 1;"},{"key":"B","text":"Activate CDC on Database: EXEC sys.sp_cdc_enable_db; Capture columns list: N''Title, Body, LastModifiedUtc, EmbeddingVector''; Net changes support: @supports_net_changes = 0;"},{"key":"C","text":"Activate CDC on Database: EXEC sys.sp_cdc_disable_db; Capture columns list: N''ArticleId, Title, Body''; Net changes support: @supports_net_changes = 1;"},{"key":"D","text":"Activate CDC on Database: EXEC sys.sp_cdc_enable_db; Capture columns list: N''Title, Body''; Net changes support: @supports_net_changes = 0;"}]'::jsonb,
  ARRAY['A']::text[],
  'Để kích hoạt Change Data Capture (CDC) ở mức cơ sở dữ liệu, ta gọi thủ tục sys.sp_cdc_enable_db. Khi bật CDC cho bảng Articles, ta chỉ định danh sách cột cần theo dõi qua tham số @captured_column_list (bao gồm khóa chính ArticleId cùng Title và Body để tạo nhúng), và đặt @supports_net_changes = 1 để hệ thống sinh ra hàm truy vấn những thay đổi ròng.',
  'Vector Search & DiskANN',
  ARRAY['DP-800', 'Change Data Capture', 'Incremental embeddings', 'Net Changes']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp103',
  'dp-800',
  103,
  'You have a SQL database in Microsoft Fabric that contains a table named WebSite.Logs. WebSite.Logs stores application telemetry data in a nvarchar(max) column named log containing JSON. You have a daily report that filters by the $.severity JSON property and returns LogId, LogDateTime, and log. The report frequently causes full table scans. You need to modify WebSite.Logs to support efficient filtering by $.severity and avoid key lookups. Which configuration should you perform?',
  '[{"key":"A","text":"Add a computed column: ADD severity AS JSON_VALUE([log], ''$.severity'') PERSISTED; and create an index on severity including LogId, LogDateTime, and [log]."},{"key":"B","text":"Add a computed column: ADD severity AS JSON_QUERY([log], ''$.severity''); and create a clustered index directly on log."},{"key":"C","text":"Add a computed column: ADD severity AS JSON_VALUE([log], ''$.severity''); and create a vector index on severity."},{"key":"D","text":"Add a computed column: ADD severity AS JSON_QUERY([log], ''$.severity'') PERSISTED; and create an index on severity including log."}]'::jsonb,
  ARRAY['A']::text[],
  'Giải pháp để tối ưu hóa việc truy vấn thuộc tính JSON vô hướng (scalar) $.severity mà không gây ra Full Table Scan và Key Lookup là tạo một cột tính toán PERSISTED bằng hàm JSON_VALUE, sau đó tạo một chỉ mục bao phủ (covering index) trên cột tính toán này và INCLUDE các cột còn lại trong báo cáo (LogId, LogDateTime, [log]).',
  'SQL AI Querying & JSON',
  ARRAY['DP-800', 'JSON_VALUE', 'PERSISTED', 'Covering Index']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp104',
  'dp-800',
  104,
  'You are designing an Azure SQL Database instance to support a high-throughput gaming leaderboard application. The solution must reduce write latency as much as possible during peak gaming events, efficiently support high-frequency point lookups by PlayerID, and leaderboard data is transient (it does NOT need to persist after a database restart or failover event). What should you configure for db.leaderboard table type and index type?',
  '[{"key":"A","text":"Table type: Memory-optimized table with SCHEMA_ONLY durability; Index type: Nonclustered hash index."},{"key":"B","text":"Table type: Memory-optimized table with SCHEMA_AND_DATA durability; Index type: Nonclustered index."},{"key":"C","text":"Table type: Standard table with clustered index; Index type: Clustered index."},{"key":"D","text":"Table type: Memory-optimized table with SCHEMA_ONLY durability; Index type: Clustered columnstore index."}]'::jsonb,
  ARRAY['A']::text[],
  'Đối với bảng lưu trữ dữ liệu bảng xếp hạng game có tần suất đọc ghi cực kỳ cao, dữ liệu mang tính tạm thời (transient) và không cần bảo toàn khi khởi động lại máy chủ, cấu hình tối ưu nhất là tạo bảng tối ưu bộ nhớ (Memory-optimized table) có thuộc tính SCHEMA_ONLY (bỏ qua ghi log giao dịch lên đĩa) và xây dựng chỉ mục băm (Nonclustered hash index) để tăng tốc truy vấn điểm tìm kiếm chính xác (point lookups).',
  'Query Optimization & Indexes',
  ARRAY['DP-800', 'Memory-Optimized', 'SCHEMA_ONLY', 'Hash Index']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'dp105',
  'dp-800',
  105,
  'Your development team uses Microsoft Visual Studio Code with the mssql extension and the GitHub Copilot Chat extension. The team connects to an Azure SQL database by using individual database logins and uses the database chat participant to generate and run Transact-SQL queries from prompts. What is used to ensure that GitHub Copilot Chat-generated queries run in the context of the developer?',
  '[{"key":"A","text":"Azure role-based access control (Azure RBAC) permissions"},{"key":"B","text":"GitHub organization permissions"},{"key":"C","text":"SQL permissions"},{"key":"D","text":"shared MCP instruction files"}]'::jsonb,
  ARRAY['C']::text[],
  'Để đảm bảo các câu lệnh T-SQL do GitHub Copilot Chat sinh ra khi chạy trong môi trường của nhà phát triển không vượt quá quyền hạn của họ, hệ thống luôn dựa trên chính các quyền hạn SQL (SQL permissions) trực tiếp của tài khoản cơ sở dữ liệu đang kết nối.',
  'Database Security & Triggers',
  ARRAY['DP-800', 'GitHub Copilot', 'SQL Permissions', 'Security Context']::text[]
) ON CONFLICT (id) DO UPDATE SET
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

