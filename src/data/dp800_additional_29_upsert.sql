-- DP-800: 29 additional source-variant questions only
-- IDs: dp-800-106 through dp-800-134
-- Safe to run repeatedly. This script does not update/delete the existing first 105 questions.

BEGIN;

INSERT INTO questions
  (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags)
VALUES
(
    'dp-800-106', 'dp-800', 106, 'You have an Azure SQL database named ToDo that contains a table named dbo.ToDo. An Azure Functions app must process INSERT, UPDATE, and DELETE events by using the Azure SQL trigger binding. What should you configure?',
    '[{"key":"A","text":"Enable change tracking at the ToDo database level and on dbo.ToDo."},{"key":"B","text":"Create a DML trigger on dbo.ToDo that calls the Azure Functions HTTP endpoint."},{"key":"C","text":"Enable change data capture (CDC) on the ToDo database and dbo.ToDo."},{"key":"D","text":"Create a DDL trigger on dbo.ToDo that calls the Azure Functions HTTP endpoint."}]'::jsonb, ARRAY['A']::text[],
    'Azure SQL trigger binding dựa trên Change Tracking. Cần bật Change Tracking ở cả cấp database và cấp bảng để Azure Functions nhận được các thay đổi INSERT, UPDATE và DELETE mà không phải gọi HTTP đồng bộ trong giao dịch.', 'Database Programmability',
    ARRAY['DP-800', 'Azure Functions', 'Change Tracking', 'Source PDF Q17']::text[]
  ),
(
    'dp-800-107', 'dp-800', 107, 'An Azure SQL database contains a 10-TB Sales table loaded nightly and a small Products table. Reporting queries scan and aggregate large portions of Sales, while Products is used for point lookups and joins. Which indexes minimize storage and optimize these workloads?',
    '[{"key":"A","text":"Sales: clustered columnstore index; Products: clustered rowstore index."},{"key":"B","text":"Sales: clustered rowstore index; Products: clustered columnstore index."},{"key":"C","text":"Sales: nonclustered rowstore index; Products: heap."},{"key":"D","text":"Sales: heap; Products: nonclustered columnstore index."}]'::jsonb, ARRAY['A']::text[],
    'Clustered columnstore phù hợp với bảng fact Sales rất lớn và các truy vấn scan/aggregate, đồng thời nén dữ liệu tốt. Bảng Products nhỏ, phục vụ point lookup và join, nên clustered rowstore index phù hợp hơn.', 'Query Optimization & Indexes',
    ARRAY['DP-800', 'Columnstore', 'Index Design', 'Source PDF Q20']::text[]
  ),
(
    'dp-800-108', 'dp-800', 108, 'dbo.SupportTickets contains JSON column Payload and datetime column CreatedAt. Return exactly one earliest ticket per customer per day for the last seven days, including the customer ID stored at $.CustomerId. Which query pattern is correct?',
    '[{"key":"A","text":"Filter CreatedAt for the last seven days; use ROW_NUMBER() OVER (PARTITION BY JSON_VALUE(Payload, ''$.CustomerId''), CAST(CreatedAt AS date) ORDER BY CreatedAt ASC); return rows where row_number = 1."},{"key":"B","text":"Group only by CAST(CreatedAt AS date) and use MAX(CreatedAt)."},{"key":"C","text":"Use DISTINCT JSON_QUERY(Payload, ''$.CustomerId'') and order by CreatedAt DESC."},{"key":"D","text":"Partition by the complete Payload document and order by CreatedAt DESC."}]'::jsonb, ARRAY['A']::text[],
    'JSON_VALUE lấy CustomerId dạng scalar. ROW_NUMBER phân vùng theo CustomerId và ngày, sắp xếp CreatedAt tăng dần; giữ rn = 1 sẽ trả đúng ticket sớm nhất của mỗi khách hàng trong từng ngày.', 'SQL AI Querying & JSON',
    ARRAY['DP-800', 'JSON_VALUE', 'ROW_NUMBER', 'Source PDF Q21']::text[]
  ),
(
    'dp-800-109', 'dp-800', 109, 'A dashboard query filters VehicleHealthSummary by FleetId, returns LastUpdatedUtc, EngineStatus, and BatteryHealth, and orders by LastUpdatedUtc DESC. The current plan uses a clustered index scan. What should you recommend?',
    '[{"key":"A","text":"Create a clustered index on LastUpdatedUtc."},{"key":"B","text":"Create a nonclustered index on FleetId that includes LastUpdatedUtc, EngineStatus, and BatteryHealth."},{"key":"C","text":"Create a nonclustered index on LastUpdatedUtc that includes FleetId."},{"key":"D","text":"Create a filtered index on FleetId where LastUpdatedUtc > DATEADD(day, -7, SYSUTCDATETIME())."}]'::jsonb, ARRAY['B']::text[],
    'FleetId là cột lọc nên phải là key dẫn đầu. Các cột còn lại được INCLUDE để tạo covering index, cho phép index seek và tránh key lookup. Hàm không xác định như SYSUTCDATETIME() không dùng được trong định nghĩa filtered index.', 'Query Optimization & Indexes',
    ARRAY['DP-800', 'Covering Index', 'Index Seek', 'Source PDF Q30']::text[]
  ),
(
    'dp-800-110', 'dp-800', 110, 'An SDK-style SQL database project uses a feature branch. You need to update the local feature branch with the latest remote main branch and then create a pull request for review. Which command sequence should you use?',
    '[{"key":"A","text":"git fetch origin; git merge origin/main; gh pr create"},{"key":"B","text":"git pull feature; git push --force main; gh repo create"},{"key":"C","text":"git clone main; git rebase --abort; gh issue create"},{"key":"D","text":"dotnet build; git tag main; gh release create"}]'::jsonb, ARRAY['A']::text[],
    'git fetch origin cập nhật remote references mà không ghi đè working tree; git merge origin/main đưa thay đổi mới nhất vào feature branch; gh pr create tạo pull request vào main.', 'CI/CD & Database Projects',
    ARRAY['DP-800', 'GitHub CLI', 'SQL Project', 'Source PDF Q36']::text[]
  ),
(
    'dp-800-111', 'dp-800', 111, 'A GitHub Actions workflow for an SDK-style SQL database project runs on pushes to main, builds the project, and then deploys the generated artifact. Evaluate these statements in order: (1) Unit tests run automatically when changes are pushed to main. (2) Schema validation occurs during Build. (3) Schema validation occurs during Deploy.',
    '[{"key":"A","text":"Yes; Yes; No"},{"key":"B","text":"Yes; No; Yes"},{"key":"C","text":"No; Yes; Yes"},{"key":"D","text":"No; No; Yes"}]'::jsonb, ARRAY['A']::text[],
    'Trigger push trên nhánh main khởi chạy workflow và các bước test. dotnet build tạo và kiểm tra mô hình schema; bước deploy áp dụng DACPAC đã build, không phải giai đoạn kiểm tra schema cơ bản.', 'CI/CD & Database Projects',
    ARRAY['DP-800', 'GitHub Actions', 'Schema Validation', 'Source PDF Q38']::text[]
  ),
(
    'dp-800-112', 'dp-800', 112, 'You need T-SQL that returns only sessions that are blocked or are blocking other sessions, including sleeping sessions with open transactions and the last submitted batch. Which DMV and APPLY combination is correct?',
    '[{"key":"A","text":"Use sys.dm_exec_requests for active requests; LEFT OUTER JOIN sys.dm_exec_requests to preserve sleeping blockers; OUTER APPLY sys.dm_exec_sql_text(r.sql_handle); OUTER APPLY sys.dm_exec_input_buffer(s.session_id, NULL)."},{"key":"B","text":"Use only sys.dm_exec_requests with INNER JOIN and CROSS APPLY sys.dm_exec_sql_text."},{"key":"C","text":"Use sys.dm_os_wait_stats joined to sys.dm_db_index_usage_stats."},{"key":"D","text":"Use DBCC INPUTBUFFER for every session and exclude rows without an active request."}]'::jsonb, ARRAY['A']::text[],
    'LEFT OUTER JOIN giữ lại phiên đang sleeping nhưng vẫn giữ khóa do transaction chưa commit. OUTER APPLY trả SQL text khi có request và input buffer của phiên, nhờ đó vẫn xác định được blocker ngay cả khi không có request đang chạy.', 'Performance Tuning',
    ARRAY['DP-800', 'Blocking Chain', 'DMVs', 'Source PDF Q40']::text[]
  ),
(
    'dp-800-113', 'dp-800', 113, 'A query filters dbo.Orders by CustomerId, applies an OrderDate range, orders by OrderDate DESC, and returns TOP 50 rows. The current index on OrderDate causes key lookups and an explicit sort. Evaluate: (1) An index keyed on (CustomerId, OrderDate DESC) can avoid the explicit sort. (2) Adding CustomerId only as an included column can eliminate the sort. (3) The shown bottleneck indicates a suboptimal plan rather than locking.',
    '[{"key":"A","text":"Yes; No; Yes"},{"key":"B","text":"Yes; Yes; No"},{"key":"C","text":"No; Yes; Yes"},{"key":"D","text":"No; No; Yes"}]'::jsonb, ARRAY['A']::text[],
    'CustomerId và OrderDate phải là key columns theo thứ tự lọc/sắp xếp để seek và đọc dữ liệu đã có thứ tự. INCLUDE không quyết định thứ tự B-tree. Sort và key lookup trong execution plan là vấn đề kế hoạch/index, không phải bằng chứng của locking.', 'Query Optimization & Indexes',
    ARRAY['DP-800', 'Composite Index', 'Query Plan', 'Source PDF Q42']::text[]
  ),
(
    'dp-800-114', 'dp-800', 114, 'A monthly partitioned dbo.Orders table contains three years of data. Proposed solution: DELETE rows older than 36 months by using DATEADD(month, -36, SYSUTCDATETIME()). The goal is to remove the oldest month with minimal impact on concurrent queries. Does the solution meet the goal?',
    '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
    'DELETE xử lý từng dòng, tạo nhiều transaction log và khóa, không tận dụng thao tác partition metadata. Partition switching hoặc truncate đúng partition mới đáp ứng yêu cầu ảnh hưởng thấp.', 'Partitioning',
    ARRAY['DP-800', 'Partitioning', 'DELETE', 'Source PDF Q52']::text[]
  ),
(
    'dp-800-115', 'dp-800', 115, 'A monthly partitioned dbo.Orders table contains three years of data. Proposed solution: identify the partition scheme for the oldest month and run ALTER TABLE dbo.Orders DROP PARTITION SCHEME. Does this remove only the oldest month''s rows with minimal impact?',
    '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
    'Partition scheme chỉ ánh xạ partition đến filegroup; không thể DROP partition scheme để xóa dữ liệu của một tháng. Cần switch/truncate đúng partition hoặc thực hiện partition maintenance phù hợp.', 'Partitioning',
    ARRAY['DP-800', 'Partition Scheme', 'Partition Maintenance', 'Source PDF Q53']::text[]
  ),
(
    'dp-800-116', 'dp-800', 116, 'An SDK-style SQL database project targets Azure SQL Database and fails to resolve system objects. Proposed solution: add the Microsoft.SqlServer.Dacpacs.Master NuGet package. Does this meet the goal?',
    '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
    'Microsoft.SqlServer.Dacpacs.Master nhắm đến SQL Server tại chỗ. Dự án Azure SQL cần Microsoft.SqlServer.Dacpacs.Azure.Master hoặc Azure SQL master.dacpac để mô hình hệ thống khớp đúng target platform.', 'CI/CD & Database Projects',
    ARRAY['DP-800', 'DACPAC', 'NuGet', 'Source PDF Q55']::text[]
  ),
(
    'dp-800-117', 'dp-800', 117, 'An SDK-style SQL database project targets Azure SQL Database and fails to resolve system objects. Proposed solution: add an artifact reference to the Azure SQL Database master.dacpac file. Does this meet the goal?',
    '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[],
    'Azure SQL Database master.dacpac cung cấp mô hình các system objects để compiler phân giải tham chiếu khi chạy dotnet build, vì vậy artifact reference này đáp ứng mục tiêu.', 'CI/CD & Database Projects',
    ARRAY['DP-800', 'master.dacpac', 'Artifact Reference', 'Source PDF Q56']::text[]
  ),
(
    'dp-800-118', 'dp-800', 118, 'A monthly partitioned dbo.Orders table contains three years of data. Proposed solution: run TRUNCATE TABLE dbo.Orders. Does this remove only the oldest month while preserving newer data?',
    '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
    'TRUNCATE TABLE không chỉ định partition sẽ xóa toàn bộ dữ liệu của bảng. Yêu cầu chỉ xóa tháng cũ nhất nên phải truncate đúng partition hoặc switch partition trước.', 'Partitioning',
    ARRAY['DP-800', 'TRUNCATE TABLE', 'Partitioning', 'Source PDF Q61']::text[]
  ),
(
    'dp-800-119', 'dp-800', 119, 'An SDK-style SQL database project targets Azure SQL Database and has unresolved system-object references. Proposed solution: run dotnet build -bl -flp:v=diag. Does this meet the goal?',
    '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
    '-bl và -flp:v=diag chỉ tạo binary log và tăng mức chi tiết chẩn đoán. Chúng giúp điều tra nhưng không bổ sung mô hình system objects; cần Azure master DACPAC/package reference.', 'CI/CD & Database Projects',
    ARRAY['DP-800', 'dotnet build', 'Diagnostics', 'Source PDF Q62']::text[]
  ),
(
    'dp-800-120', 'dp-800', 120, 'A successful GitHub Actions workflow builds an SDK-style SQL project from a private repository and publishes its DACPAC to Azure SQL using an AZURE_SQL_CONNECTION_STRING secret. Evaluate: (1) The workflow publishes the database project to Azure SQL. (2) It uses SQL authentication credentials from the secret. (3) Deployment uses the DACPAC generated by Build.',
    '[{"key":"A","text":"Yes; Yes; Yes"},{"key":"B","text":"Yes; No; Yes"},{"key":"C","text":"No; Yes; Yes"},{"key":"D","text":"Yes; Yes; No"}]'::jsonb, ARRAY['A']::text[],
    'Theo workflow trong đề, build tạo DACPAC, connection string secret chứa thông tin SQL authentication và bước publish dùng chính DACPAC đó để triển khai đến Azure SQL.', 'CI/CD & Database Projects',
    ARRAY['DP-800', 'GitHub Actions', 'DACPAC Deployment', 'Source PDF Q63']::text[]
  ),
(
    'dp-800-121', 'dp-800', 121, 'A sleeping session has open_transaction_count = 1 after BEGIN TRANSACTION UPDATE Sales.Orders, while other sessions wait with LCK_M_X. Evaluate: (1) The blocker is an uncommitted explicit transaction holding locks. (2) Under the database''s default settings, SELECT statements are blocked while the UPDATE occurs. (3) Joining sys.dm_tran_locks to sys.dm_exec_requests can identify sessions holding locks in the blocking chain.',
    '[{"key":"A","text":"Yes; No; Yes"},{"key":"B","text":"Yes; Yes; No"},{"key":"C","text":"No; Yes; Yes"},{"key":"D","text":"No; No; Yes"}]'::jsonb, ARRAY['A']::text[],
    'Phiên sleeping vẫn giữ khóa vì transaction chưa COMMIT/ROLLBACK. Với mặc định mới của Fabric SQL database, đọc có thể dùng row versioning nên SELECT không nhất thiết bị khóa bởi UPDATE. sys.dm_tran_locks kết hợp sys.dm_exec_requests giúp truy vết chuỗi khóa.', 'Performance Tuning',
    ARRAY['DP-800', 'Blocking', 'LCK_M_X', 'Source PDF Q71']::text[]
  ),
(
    'dp-800-122', 'dp-800', 122, 'SalesDB has Query Store enabled. You must identify long-running queries, verify whether a query has multiple persisted plans, and restore a previous plan without changing API code. Which sequence is correct?',
    '[{"key":"A","text":"Query Performance Insight; Query Store plan store; Plan forcing in Query Store."},{"key":"B","text":"Azure Monitor; Log Analytics; create a plan guide in application code."},{"key":"C","text":"Query Performance Insight; sys.dm_os_wait_stats; rebuild all indexes."},{"key":"D","text":"Log Analytics; Query Store runtime statistics; change the stored procedure text."}]'::jsonb, ARRAY['A']::text[],
    'Query Performance Insight giúp định vị truy vấn chậm; Query Store plan store cho thấy các plan đã lưu theo thời gian; Plan forcing/sp_query_store_force_plan khôi phục plan tốt mà không sửa mã ứng dụng.', 'Performance Tuning',
    ARRAY['DP-800', 'Query Store', 'Plan Forcing', 'Source PDF Q72']::text[]
  ),
(
    'dp-800-123', 'dp-800', 123, 'Sales.Orders and Sales.OrderLines must be serialized for an LLM as one JSON array of orders, each with a nested lines array. Which commands should be used for order-level serialization, embedding the nested array, and extracting a scalar from JSON?',
    '[{"key":"A","text":"FOR JSON PATH; JSON_QUERY; JSON_VALUE"},{"key":"B","text":"OPENJSON; JSON_VALUE; JSON_MODIFY"},{"key":"C","text":"JSON_MODIFY; FOR XML PATH; OPENJSON"},{"key":"D","text":"JSON_VALUE; OPENJSON; JSON_QUERY"}]'::jsonb, ARRAY['A']::text[],
    'FOR JSON PATH biến các hàng quan hệ thành JSON. JSON_QUERY đánh dấu JSON con là object/array hợp lệ để không bị escape khi lồng vào parent. JSON_VALUE dùng để lấy một giá trị scalar.', 'SQL AI Querying & JSON',
    ARRAY['DP-800', 'FOR JSON PATH', 'JSON_QUERY', 'Source PDF Q80']::text[]
  ),
(
    'dp-800-124', 'dp-800', 124, 'Two embedding tables were generated from different source fields and with different chunk sizes. You need approximate nearest neighbor searches while minimizing the effect of magnitude differences. Which function and metric should you use?',
    '[{"key":"A","text":"VECTOR_SEARCH with cosine distance."},{"key":"B","text":"VECTOR_DISTANCE with Euclidean distance over every row."},{"key":"C","text":"VECTOR_NORM with dot product."},{"key":"D","text":"OPENJSON with edit distance."}]'::jsonb, ARRAY['A']::text[],
    'VECTOR_SEARCH tận dụng ANN index. Cosine distance đo hướng vector và ít bị ảnh hưởng bởi độ lớn, phù hợp khi các chunk có kích thước khác nhau.', 'Vector Search & DiskANN',
    ARRAY['DP-800', 'VECTOR_SEARCH', 'Cosine Distance', 'Source PDF Q81']::text[]
  ),
(
    'dp-800-125', 'dp-800', 125, 'A Microsoft Fabric SQL database contains dbo.Products and must create a vector index on the correct column and query a supplied natural-language vector. Which completion is correct?',
    '[{"key":"A","text":"Create the vector index on embedding; query it with VECTOR_SEARCH; order results by s.distance ascending."},{"key":"B","text":"Create the vector index on ProductId; query it with JSON_VALUE; order by ProductId."},{"key":"C","text":"Create a B-tree index on description; query it with VECTOR_NORM."},{"key":"D","text":"Create the vector index on price; query it with CONTAINSTABLE."}]'::jsonb, ARRAY['A']::text[],
    'Vector index phải đặt trên cột kiểu VECTOR là embedding. VECTOR_SEARCH thực hiện ANN search và distance thấp hơn biểu thị kết quả gần hơn, nên sắp xếp s.distance tăng dần.', 'Vector Search & DiskANN',
    ARRAY['DP-800', 'Vector Index', 'Microsoft Fabric', 'Source PDF Q82']::text[]
  ),
(
    'dp-800-126', 'dp-800', 126, 'DB1 contains knowledge_base and query_cache for an AI chat agent. Which T-SQL commands should be used to (1) serialize retrieved relational rows, (2) extract a scalar answer field, and (3) extract an embedding array?',
    '[{"key":"A","text":"FOR JSON PATH; JSON_VALUE; JSON_QUERY"},{"key":"B","text":"OPENJSON; JSON_QUERY; JSON_VALUE"},{"key":"C","text":"JSON_MODIFY; FOR JSON PATH; OPENJSON"},{"key":"D","text":"JSON_VALUE; OPENJSON; JSON_MODIFY"}]'::jsonb, ARRAY['A']::text[],
    'FOR JSON PATH serialize dữ liệu quan hệ. answer là scalar nên dùng JSON_VALUE. Embedding là một mảng số nên phải dùng JSON_QUERY để lấy nguyên cấu trúc array.', 'SQL AI Querying & JSON',
    ARRAY['DP-800', 'JSON Serialization', 'Embeddings', 'Source PDF Q84']::text[]
  ),
(
    'dp-800-127', 'dp-800', 127, 'An Azure AI Search hybrid query uses semantic ranking but sometimes returns too few results and omits captions and answers. Which REST request settings meet the requirements?',
    '[{"key":"A","text":"Set vector k to 50, queryType to semantic, captions to extractive, and answers to extractive."},{"key":"B","text":"Set k to 3, queryType to simple, and omit captions and answers."},{"key":"C","text":"Set k to 10, queryType to full, captions to none, and answers to none."},{"key":"D","text":"Set k to 1 and use only the vector query without semantic ranking."}]'::jsonb, ARRAY['A']::text[],
    'Semantic ranker cần đủ candidate documents; k = 50 là cấu hình khuyến nghị. queryType=semantic kích hoạt semantic ranking, còn captions/answers=extractive yêu cầu trả phần trích xuất tương ứng.', 'Azure AI Search',
    ARRAY['DP-800', 'Azure AI Search', 'Semantic Ranker', 'Source PDF Q85']::text[]
  ),
(
    'dp-800-128', 'dp-800', 128, 'An HR chatbot gives outdated answers and cannot answer questions about internal policy documents stored in knowledge_base with an embedding column. What RAG design should you recommend?',
    '[{"key":"A","text":"Use knowledge_base as grounding data; generate an embedding for the user query and run vector similarity search before calling the LLM."},{"key":"B","text":"Retrain the LLM whenever a policy changes and do not retrieve database content."},{"key":"C","text":"Query only employee_profiles by primary key and send no policy context."},{"key":"D","text":"Use keyword equality on the embedding column without generating a query embedding."}]'::jsonb, ARRAY['A']::text[],
    'RAG lấy dữ liệu cập nhật từ knowledge_base tại thời điểm inference. Query embedding và vector similarity search tìm các policy liên quan về ngữ nghĩa rồi đưa chúng vào prompt để giảm hallucination và tránh retraining.', 'RAG & Embeddings',
    ARRAY['DP-800', 'RAG', 'Grounding Data', 'Source PDF Q87']::text[]
  ),
(
    'dp-800-129', 'dp-800', 129, 'A SQL Server 2025 generative AI solution must use the latest DB1 data, avoid model retraining when data changes, and support citations. Which scenario is the best RAG use case?',
    '[{"key":"A","text":"Summarizing free-form text supplied entirely by the user."},{"key":"B","text":"Training a custom language model on historical database data."},{"key":"C","text":"Answering user questions based on company-specific knowledge retrieved from DB1."},{"key":"D","text":"Generating marketing slogans from sentiment analysis."}]'::jsonb, ARRAY['C']::text[],
    'RAG truy xuất dữ liệu doanh nghiệp mới nhất khi chạy, đưa nguồn vào context và có thể giữ metadata để trích dẫn. Nó không yêu cầu fine-tune hoặc retrain mô hình khi dữ liệu thay đổi.', 'RAG & Embeddings',
    ARRAY['DP-800', 'RAG', 'SQL Server 2025', 'Source PDF Q89']::text[]
  ),
(
    'dp-800-130', 'dp-800', 130, 'An Azure SQL stores table has description text and an embedding vector. Implement hybrid search using full-text keywords and a combined score of 60% vector distance plus 40% full-text rank. Which configuration is correct?',
    '[{"key":"A","text":"Use VECTOR_DISTANCE ordered ascending; use CONTAINSTABLE on description; order by (distance * 0.6) + ((1.0 - RANK / 1000.0) * 0.4)."},{"key":"B","text":"Use VECTORPROPERTY; use JSON_VALUE; order by distance + RANK."},{"key":"C","text":"Use VECTOR_DISTANCE ordered descending; use FREETEXTTABLE; order by distance * RANK."},{"key":"D","text":"Use only CONTAINSTABLE and ignore the embedding column."}]'::jsonb, ARRAY['A']::text[],
    'Vector distance càng thấp càng tốt, trong khi full-text RANK càng cao càng tốt. Vì vậy phải đảo và chuẩn hóa RANK trước khi cộng trọng số. CONTAINSTABLE cung cấp điểm RANK cho phần keyword.', 'Hybrid Search',
    ARRAY['DP-800', 'Hybrid Search', 'CONTAINSTABLE', 'Source PDF Q90']::text[]
  ),
(
    'dp-800-131', 'dp-800', 131, 'Your team uses GitHub Copilot Chat in Visual Studio Code and needs repository-wide Transact-SQL coding standards to apply to generated code. What should you use?',
    '[{"key":"A","text":".github/copilot-instructions.md"},{"key":"B","text":".vscode/settings.json"},{"key":"C","text":"%APPDATA%\\Code\\User\\settings.json"},{"key":"D","text":"%APPDATA%\\Code\\User\\copilot-instructions.md"}]'::jsonb, ARRAY['A']::text[],
    'File .github/copilot-instructions.md nằm trong repository nên được chia sẻ cho cả nhóm và là vị trí Copilot nhận custom instructions cấp repository.', 'AI Tooling & Workspace',
    ARRAY['DP-800', 'GitHub Copilot', 'Repository Instructions', 'Source PDF Q93']::text[]
  ),
(
    'dp-800-132', 'dp-800', 132, 'A Microsoft Fabric SQL stored procedure must generate a query embedding, retrieve the top 20 vector candidates, and re-rank only candidates matching a full-text query. Which pattern matches the source answer?',
    '[{"key":"A","text":"Generate the embedding with AI_GENERATE_EMBEDDINGS; select TOP 20 ordered by VECTOR_DISTANCE(''cosine'', embedding, @query_embedding); apply CONTAINS(product_description, @search_text)."},{"key":"B","text":"Use OPENJSON to generate the embedding and sort by ProductId."},{"key":"C","text":"Run only CONTAINSTABLE and do not generate an embedding."},{"key":"D","text":"Scan every product with edit distance and return all rows."}]'::jsonb, ARRAY['A']::text[],
    'Theo đáp án trong PDF, query embedding được tạo trong SQL, tập candidate giới hạn TOP 20 theo khoảng cách cosine, sau đó điều kiện full-text giữ lại các sản phẩm khớp nội dung để tạo hybrid search.', 'Hybrid Search',
    ARRAY['DP-800', 'Hybrid Search', 'AI_GENERATE_EMBEDDINGS', 'Source PDF Q95']::text[]
  ),
(
    'dp-800-133', 'dp-800', 133, 'A Microsoft Fabric SQL database named SalesDB contains dbo.Products. You must create a vector index on the appropriate column and search it with a supplied natural-language query vector. Which completion is correct?',
    '[{"key":"A","text":"Create the vector index on embedding and use VECTOR_SEARCH against dbo.Products.embedding."},{"key":"B","text":"Create the vector index on ProductId and use VECTOR_DISTANCE on price."},{"key":"C","text":"Create a JSON index on description and use OPENJSON for vector search."},{"key":"D","text":"Create a full-text index on embedding and use CONTAINSTABLE only."}]'::jsonb, ARRAY['A']::text[],
    'Cột embedding chứa vector nên là đích của CREATE VECTOR INDEX. VECTOR_SEARCH là table-valued function dùng vector index để trả các hàng gần nhất cùng distance.', 'Vector Search & DiskANN',
    ARRAY['DP-800', 'Vector Index', 'VECTOR_SEARCH', 'Source PDF Q104']::text[]
  ),
(
    'dp-800-134', 'dp-800', 134, 'An Azure SQL FAQ table will be sent as context to an LLM. Which format minimizes token usage?',
    '[{"key":"A","text":"Include FaqId, ProductName, Question, and Answer for every row."},{"key":"B","text":"Send only the essential prompt/answer text and omit repeated IDs, product names, and redundant schema metadata."},{"key":"C","text":"Repeat the Question and Answer property names multiple times for each field."},{"key":"D","text":"Serialize the full table schema together with every row."}]'::jsonb, ARRAY['B']::text[],
    'Token usage tăng theo toàn bộ ký tự được gửi. Bỏ ID, metadata và các key lặp lại không cần thiết, chỉ giữ nội dung thiết yếu cho prompt sẽ giảm số token nhiều nhất.', 'RAG & Embeddings',
    ARRAY['DP-800', 'LLM Context', 'Token Optimization', 'Source PDF Q105']::text[]
  )
ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

COMMIT;

-- Verification: expected result = 29 rows.
SELECT COUNT(*) AS additional_question_count
FROM questions
WHERE cert_id = 'dp-800'
  AND id IN ('dp-800-106', 'dp-800-107', 'dp-800-108', 'dp-800-109', 'dp-800-110', 'dp-800-111', 'dp-800-112', 'dp-800-113', 'dp-800-114', 'dp-800-115', 'dp-800-116', 'dp-800-117', 'dp-800-118', 'dp-800-119', 'dp-800-120', 'dp-800-121', 'dp-800-122', 'dp-800-123', 'dp-800-124', 'dp-800-125', 'dp-800-126', 'dp-800-127', 'dp-800-128', 'dp-800-129', 'dp-800-130', 'dp-800-131', 'dp-800-132', 'dp-800-133', 'dp-800-134');
