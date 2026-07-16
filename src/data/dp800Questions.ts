import { Question } from '../types';

export const dp800Questions: Question[] = [
  {
    "id": "dp1",
    "questionNumber": 1,
    "text": "Contoso is deploying an Azure SQL database and wants to query data from the FeedbackJson column of the CustomerFeedback table. The query must:\n1. Extract the customer feedback text from the JSON document.\n2. Filter rows where the JSON text contains a keyword.\n3. Calculate a fuzzy similarity score between the feedback text and a known issue description.\n4. Order the results by similarity score, with the highest score first.\nHow should you construct the Transact-SQL query?",
    "options": [
      {
        "key": "A",
        "text": "SELECT JSON_VALUE(f.FeedbackJson, '$.text') AS FeedbackText, EDIT_DISTANCE_SIMILARITY(JSON_VALUE(f.FeedbackJson, '$.text'), @KnownIssueDescription) AS SimilarityScore FROM dbo.CustomerFeedback f WHERE EDIT_DISTANCE(JSON_VALUE(f.FeedbackJson, '$.text'), @Keyword) < 3 ORDER BY SimilarityScore DESC"
      },
      {
        "key": "B",
        "text": "SELECT JSON_QUERY(f.FeedbackJson, '$.text') AS FeedbackText, EDIT_DISTANCE_SIMILARITY(JSON_VALUE(f.FeedbackJson, '$.text'), @KnownIssueDescription) AS SimilarityScore FROM dbo.CustomerFeedback f WHERE CONTAINS(FeedbackJson, @Keyword) ORDER BY SimilarityScore DESC"
      },
      {
        "key": "C",
        "text": "SELECT JSON_VALUE(f.FeedbackJson, '$.details.comment') AS FeedbackText, EDIT_DISTANCE_SIMILARITY(JSON_VALUE(f.FeedbackJson, '$.details.comment'), @Keyword) AS SimilarityScore FROM dbo.CustomerFeedback f WHERE EDIT_DISTANCE(JSON_VALUE(f.FeedbackJson, '$.details.comment'), @Keyword) < 3 ORDER BY FeedbackText DESC"
      },
      {
        "key": "D",
        "text": "SELECT JSON_VALUE(f.FeedbackJson, '$.text') AS FeedbackText, EDIT_DISTANCE_SIMILARITY(JSON_VALUE(f.FeedbackJson, '$.text'), @KnownIssueDescription) AS SimilarityScore FROM dbo.CustomerFeedback f WHERE JSON_VALUE(f.FeedbackJson, '$.text') = @Keyword ORDER BY SimilarityScore ASC"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "category": "SQL AI Querying & JSON",
    "explanation": "Để trích xuất chuỗi thô từ cột JSON nvarchar(max), chúng ta sử dụng hàm JSON_VALUE(f.FeedbackJson, '$.text'). Để lọc các dòng gần đúng với từ khóa nhất, ta dùng hàm EDIT_DISTANCE(...) < 3 trong mệnh đề WHERE. Để sắp xếp theo điểm tương đồng cao nhất trước, chúng ta tái sử dụng định danh cột (alias) trong SELECT là SimilarityScore và xếp giảm dần (DESC).",
    "tags": [
      "DP-800",
      "JSON_VALUE",
      "Fuzzy Search"
    ]
  },
  {
    "id": "dp2",
    "questionNumber": 2,
    "text": "You need to implement robust error handling inside a stored procedure named dbo.usp_CreateOrder to insert rows into dbo.Orders. The transaction must abort on any insert failures, and return a consistent error to the caller. How should you complete the TRY/CATCH blocks in the procedure?",
    "options": [
      {
        "key": "A",
        "text": "Trong TRY block, sau INSERT: SET @OrderId = SCOPE_IDENTITY(); Trong CATCH block: IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION; THROW;"
      },
      {
        "key": "B",
        "text": "Trong TRY block, sau INSERT: SET @OrderId = SCOPE_IDENTITY(); Trong CATCH block: BEGIN CATCH; THROW;"
      },
      {
        "key": "C",
        "text": "Trong TRY block, sau INSERT: RAISERROR('CreateOrder failed', 16, 1); Trong CATCH block: ROLLBACK TRANSACTION;"
      },
      {
        "key": "D",
        "text": "Trong TRY block, sau INSERT: SET @OrderId = SCOPE_IDENTITY(); Trong CATCH block: IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION; THROW; THROW;"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "category": "Transaction Management & Error Handling",
    "explanation": "Hàm SCOPE_IDENTITY() là cách an toàn nhất để lấy ID của dòng vừa được chèn. Kiểm tra IF @@TRANCOUNT > 0 trước khi ROLLBACK TRANSACTION giúp ngăn chặn lỗi sập DB khi transaction đã bị hủy tự động trước đó. Việc sử dụng THROW; (re-raise) trong Catch block là best-practice để bảo toàn chi tiết lỗi ban đầu.",
    "tags": [
      "DP-800",
      "ROLLBACK",
      "THROW"
    ]
  },
  {
    "id": "dp3",
    "questionNumber": 3,
    "text": "Your team is developing an Azure SQL dataset solution from a locally cloned GitHub repository by using Microsoft Visual Studio Code and GitHub Copilot Chat. You need to disable the GitHub Copilot repository-level instructions for yourself without affecting other users. What should you do?",
    "options": [
      {
        "key": "A",
        "text": "From Visual Studio Code, modify your GitHub Copilot Chat user settings to disable loading repository-level custom instructions."
      },
      {
        "key": "B",
        "text": "Add a --debug flag when you start the GitHub Copilot Chat extension."
      },
      {
        "key": "C",
        "text": "Delete the .github/copilot-instructions.md file from your local workspace and push the deletion to origin."
      },
      {
        "key": "D",
        "text": "Ask the GitHub Organization owner to disable repository-level instructions globally."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "category": "AI Tooling & Workspace",
    "explanation": "Chỉnh sửa User Settings (Cấu hình Người dùng) trong VS Code cho phép tắt tính năng tự động tải tập tin hướng dẫn cấp repository một cách cục bộ trên máy của bạn, bảo đảm không gây ảnh hưởng đến cấu hình của các nhà phát triển khác trong nhóm.",
    "tags": [
      "DP-800",
      "GitHub Copilot",
      "VS Code"
    ]
  },
  {
    "id": "dp4",
    "questionNumber": 4,
    "text": "You have an Azure SQL database with SQL graph tables dbo.Person (NODE) and dbo.Knows (EDGE). You need to write a Transact-SQL query using the MATCH operator and exactly two directed Knows relationships to return PersonID and DisplayName of people reachable from @StartPersonId. Which query is correct?",
    "options": [
      {
        "key": "A",
        "text": "SELECT p3.PersonId, p3.DisplayName FROM dbo.Person AS p1, dbo.Knows AS k1, dbo.Person AS p2, dbo.Knows AS k2, dbo.Person AS p3 WHERE p1.PersonId = @StartPersonId AND MATCH(p1-(k1)->p2-(k2)->p3);"
      },
      {
        "key": "B",
        "text": "SELECT p3.PersonId, p3.DisplayName FROM dbo.Person AS p1 JOIN dbo.Knows AS k1 ON 1=1 WHERE p1.PersonId = @StartPersonId AND MATCH(p3<-(k2)-p2<-(k1)-p1);"
      },
      {
        "key": "C",
        "text": "SELECT p3.PersonId, p3.DisplayName FROM dbo.Person AS p1, dbo.Knows AS k1, dbo.Person AS p2 WHERE p1.PersonId = @StartPersonId AND MATCH(p1-(k1)->p2) AND MATCH(p2-(k2)->p3);"
      },
      {
        "key": "D",
        "text": "SELECT p2.PersonId, @StartPersonId FROM dbo.Person AS p1 WHERE p1.DisplayName = p2.DisplayName AND MATCH(p1-(k1)->p2-(k2)->p3);"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "category": "Graph Databases",
    "explanation": "Trong truy vấn SQL Graph, cấu trúc MATCH(p1-(k1)->p2-(k2)->p3) định nghĩa chính xác đường đi có hướng dài 2 bước nối các node thông qua các cạnh tương ứng. Không được chia thành hai mệnh đề MATCH độc lập ghép bằng AND vì SQL Graph không hỗ trợ cách viết tách rời này.",
    "tags": [
      "DP-800",
      "SQL Graph",
      "MATCH"
    ]
  },
  {
    "id": "dp5",
    "questionNumber": 5,
    "text": "You have a SQL database in Microsoft Fabric with a table containing JSON documents in a column named Payload. You need to return a normalized email value that removes any subaddressing (e.g., user1+abc@contoso.com must be normalized to user1@contoso.com). Which Transact-SQL expression should you use?",
    "options": [
      {
        "key": "A",
        "text": "REGEXP_REPLACE(JSON_VALUE(Payload, '$.customer_email'), '\\+.*$', '')"
      },
      {
        "key": "B",
        "text": "REGEXP_SUBSTR(JSON_VALUE(Payload, '$.customer_email'), '^[^+]+@.*$=')"
      },
      {
        "key": "C",
        "text": "REGEXP_REPLACE(JSON_VALUE(Payload, '$.customer_email'), '\\+.*@', '@')"
      },
      {
        "key": "D",
        "text": "REGEXP_REPLACE(JSON_VALUE(Payload, '$.customer_email'), '\\+.*.*', '')"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "category": "SQL AI Querying & JSON",
    "explanation": "Hàm REGEXP_REPLACE trích xuất giá trị email bằng JSON_VALUE, sau đó tìm kiếm chuỗi bắt đầu bằng dấu cộng \\+ theo sau bởi bất kỳ ký tự nào cho đến khi chạm ký tự @ ('\\+.*@'), và thay thế toàn bộ cụm đó bằng dấu '@'. Cách này cắt bỏ phần subaddressing một cách an toàn và giữ nguyên phần tên miền.",
    "tags": [
      "DP-800",
      "REGEXP_REPLACE",
      "Email Normalization"
    ]
  },
  {
    "id": "dp6",
    "questionNumber": 6,
    "text": "You have a table dbo.Orders with a CreateDate column containing order creation dates. You need to create a SARGable stored procedure that filters Orders for a single calendar day based on @StartDate input. Which approach is correct?",
    "options": [
      {
        "key": "A",
        "text": "SET @EndDate = DATEADD(day, 1, @StartDate); SELECT ... WHERE o.CreateDate >= @StartDate AND o.CreateDate < @EndDate"
      },
      {
        "key": "B",
        "text": "SELECT ... WHERE CONVERT(char(10), o.CreateDate, 121) = CONVERT(char(10), @StartDate, 121)"
      },
      {
        "key": "C",
        "text": "SELECT ... WHERE CONVERT(date, o.CreateDate) = @StartDate"
      },
      {
        "key": "D",
        "text": "SELECT ... WHERE o.CreateDate BETWEEN @StartDate AND GETDATE()"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "category": "Query Optimization & Indexes",
    "explanation": "Để đảm bảo thuộc tính SARGable (Search Argumentable), ta không được áp dụng bất kỳ hàm chuyển đổi hay tính toán nào trực tiếp lên cột dữ liệu của bảng (như CONVERT). Thay vào đó, ta tính toán biên thời gian @EndDate trước bằng DATEADD và sử dụng toán tử so sánh phạm vi >= và < để bộ tối ưu hóa truy vấn SQL Server có thể điều hướng Index Seek trên cột CreateDate.",
    "tags": [
      "DP-800",
      "SARGable",
      "Performance"
    ]
  },
  {
    "id": "dp7",
    "questionNumber": 7,
    "text": "You need to create a scalar User-Defined Function (UDF) in Azure SQL Database that returns the number of whole years between @OrderDate input and the current date/time as a single positive integer. What should be inserted inside the function body?",
    "options": [
      {
        "key": "A",
        "text": "RETURN DATEDIFF(year, GETDATE(), @OrderDate);"
      },
      {
        "key": "B",
        "text": "DATEDIFF(month, @OrderDate, GETDATE()) / 12"
      },
      {
        "key": "C",
        "text": "DATEPART(year, GETDATE()) - DATEPART(year, @OrderDate)"
      },
      {
        "key": "D",
        "text": "RETURN DATEDIFF(year, @OrderDate, GETDATE());"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "category": "Database Programmability",
    "explanation": "Hàm DATEDIFF(year, startdate, enddate) tính toán số ranh giới năm bị vượt qua giữa hai mốc thời gian. Để có số nguyên dương, startdate phải là ngày cũ hơn (@OrderDate) và enddate là ngày hiện tại (GETDATE()). Đồng thời, vì đây là hàm vô hướng (Scalar UDF), bắt buộc phải có từ khóa RETURN để trả về giá trị.",
    "tags": [
      "DP-800",
      "UDF",
      "DATEDIFF"
    ]
  },
  {
    "id": "dp8",
    "questionNumber": 8,
    "text": "You deploy Data API Builder (DAB) to Azure Container Apps and have a Container App secret named MSSQL_CONNECTION_STRING mapping to the database connection string. You need to initialize the DAB configuration to read this connection string securely from the environment. Which command should you run?",
    "options": [
      {
        "key": "A",
        "text": "dab init --database-type mssql --connection-string \"secretref:DAB_CONFIG_BASE64\" --host-mode Production"
      },
      {
        "key": "B",
        "text": "dab init --database-type mssql --connection-string \"@env('MSSQL_CONNECTION_STRING')\" --host-mode Production --config dab-config.json"
      },
      {
        "key": "C",
        "text": "dab init --database-type mssql --connection-string \"secretref:mssql-connection-string\" --host-mode Production"
      },
      {
        "key": "D",
        "text": "dab init --database-type mssql --connection-string \"@env('DAB_CONFIG_BASE64')\" --host-mode Production"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "category": "Data API Builder (DAB)",
    "explanation": "DAB (Data API Builder) hỗ trợ cú pháp đặc biệt @env('VARIABLE_NAME') để thay thế giá trị biến môi trường động vào file dab-config.json lúc chạy thay vì lưu cứng chuỗi kết nối nhạy cảm. Do đó tùy chọn B là cách thức khởi tạo chính xác.",
    "tags": [
      "DP-800",
      "DAB",
      "Security"
    ]
  },
  {
    "id": "dp9",
    "questionNumber": 9,
    "text": "You have a SQL database in Microsoft Fabric with a table containing an nvarchar(max) column named MessageText. You need to write a query using REGEXP_SUBSTR to extract an ID from MessageText. Large object types (LOBs) like nvarchar(max) are not supported by regular expression functions. What should you do?",
    "options": [
      {
        "key": "A",
        "text": "Apply STRING_ESCAPE(MessageText, 'json') before calling REGEXP_SUBSTR."
      },
      {
        "key": "B",
        "text": "Cast MessageText to nvarchar(4000) before calling REGEXP_SUBSTR."
      },
      {
        "key": "C",
        "text": "Add a COLLATE Latin1_General_CS_AS clause to MessageText before calling REGEXP_SUBSTR."
      },
      {
        "key": "D",
        "text": "Run TRY_CONVERT(varchar(max), MessageText) before calling REGEXP_SUBSTR."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "category": "Database Programmability",
    "explanation": "Các hàm biểu thức chính quy (regular expressions) như REGEXP_SUBSTR không chấp nhận trực tiếp dữ liệu loại LOBs như nvarchar(max) làm đối số đầu vào. Vì thông tin cần tìm nằm ở đoạn đầu văn bản, việc ép kiểu cột dữ liệu xuống kích thước chuẩn nvarchar(4000) giúp truy vấn chạy đúng cú pháp mà không gây mất mát thông tin mục tiêu.",
    "tags": [
      "DP-800",
      "Casting",
      "REGEXP_SUBSTR"
    ]
  },
  {
    "id": "dp10",
    "questionNumber": 10,
    "text": "You need to prevent a database-level DDL trigger named ddl_Audit from firing during the next deployment. The trigger object must remain in place. Which Transact-SQL statement should you use?",
    "options": [
      {
        "key": "A",
        "text": "ALTER TRIGGER ddl_Audit DISABLE ON DATABASE;"
      },
      {
        "key": "B",
        "text": "ALTER DATABASE CURRENT SET AUTO_TRIGGER = OFF;"
      },
      {
        "key": "C",
        "text": "DISABLE TRIGGER ddl_Audit ON DATABASE;"
      },
      {
        "key": "D",
        "text": "DROP TRIGGER ddl_Audit ON DATABASE;"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "category": "Database Security & Triggers",
    "explanation": "Để vô hiệu hóa tạm thời hoạt động của một trigger cấp database mà không xóa bỏ định nghĩa của nó khỏi hệ thống, câu lệnh chuẩn là DISABLE TRIGGER ddl_Audit ON DATABASE;.",
    "tags": [
      "DP-800",
      "DDL Trigger",
      "DISABLE TRIGGER"
    ]
  },
  {
    "id": "dp11",
    "questionNumber": 11,
    "text": "Your team uses GitHub Copilot Chat in Microsoft SQL Server Management Studio (SSMS) to write and execute queries against an Azure SQL database storing sensitive customer data. What prevents Copilot Chat-generated queries from accessing data beyond a developer's authorized permissions?",
    "options": [
      {
        "key": "A",
        "text": "GitHub Copilot Chat runs queries in an isolated read-only sandbox with zero connection to production schema."
      },
      {
        "key": "B",
        "text": "GitHub Copilot Chat runs queries by using the developer's active database login identity and permissions."
      },
      {
        "key": "C",
        "text": "GitHub Copilot Chat filters query results on the client side to strip out unauthorized rows."
      },
      {
        "key": "D",
        "text": "GitHub Copilot Chat uses an automatic built-in row-level security (RLS) system decoupled from standard SQL."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "category": "AI Tooling & Workspace",
    "explanation": "GitHub Copilot Chat tích hợp trong SSMS không sở hữu định danh kết nối hay phân quyền độc lập. Mọi truy vấn sinh ra đều được gửi và thực thi thông qua ngữ cảnh kết nối (connection context) hiện tại của chính lập trình viên đó. Do vậy, các ràng buộc phân quyền SQL, RLS và kiểm soát truy cập thông thường vẫn được thực thi một cách tuyệt đối.",
    "tags": [
      "DP-800",
      "SSMS",
      "Security"
    ]
  },
  {
    "id": "dp12",
    "questionNumber": 12,
    "text": "You are setting up an event-driven architecture with an Azure SQL Trigger for Azure Functions to react to row changes in table dbo.Employee within 5 seconds and maximum 100 changes per batch. Which two database-side configurations must you perform?",
    "options": [
      {
        "key": "A",
        "text": "Enable Change Tracking at the database level."
      },
      {
        "key": "B",
        "text": "Enable Change Tracking on the dbo.Employee table."
      },
      {
        "key": "C",
        "text": "Create an AFTER DML trigger on dbo.Employee."
      },
      {
        "key": "D",
        "text": "Set Sql_Trigger_MaxBatchSize to 100 in the database settings."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "category": "Database Programmability",
    "explanation": "Để kích hoạt cơ chế kích hoạt sự kiện (SQL Trigger for Azure Functions), cơ sở dữ liệu Azure SQL phải bật tính năng SQL Change Tracking ở cả cấp cơ sở dữ liệu (ALTER DATABASE ... SET CHANGE_TRACKING = ON) lẫn cấp bảng mục tiêu (ALTER TABLE ... ENABLE CHANGE_TRACKING). Các thiết lập như batch size và polling interval là cấu hình thuộc phía ứng dụng Azure Functions chứ không phải cấu hình phía DB.",
    "tags": [
      "DP-800",
      "Change Tracking",
      "Azure Functions"
    ]
  },
  {
    "id": "dp13",
    "questionNumber": 13,
    "text": "You need to write a SELECT query in SQL Server 2025 that returns:\n1. RawNumber: The first substring matching a phone number format.\n2. DigitsOnly: Removes all non-digit characters from RawNumber.\n3. PhoneStatus: Returns 'Valid' if a phone number exists exactly once, otherwise 'Missing'.\nWhich REGEXP functions should you use for these columns?",
    "options": [
      {
        "key": "A",
        "text": "RawNumber: REGEXP_SUBSTR(); DigitsOnly: REGEXP_REPLACE(); PhoneStatus: REGEXP_COUNT() in CASE statement"
      },
      {
        "key": "B",
        "text": "RawNumber: REGEXP_INSTR(); DigitsOnly: REGEXP_SUBSTR(); PhoneStatus: REGEXP_LIKE()"
      },
      {
        "key": "C",
        "text": "RawNumber: REGEXP_SUBSTR(); DigitsOnly: REGEXP_REPLACE(); PhoneStatus: STRING_SIMILARITY()"
      },
      {
        "key": "D",
        "text": "RawNumber: REGEXP_REPLACE(); DigitsOnly: REGEXP_SUBSTR(); PhoneStatus: REGEXP_COUNT()"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "category": "SQL AI Querying & JSON",
    "explanation": "Hàm REGEXP_SUBSTR được thiết kế chuyên biệt để trích xuất chuỗi con khớp mẫu Regex. Hàm REGEXP_REPLACE thay thế các ký tự không phải số (\\D) bằng chuỗi rỗng để giữ lại chỉ chữ số. Hàm REGEXP_COUNT đếm tần suất xuất hiện của mẫu điện thoại trong thông điệp để xác minh tính duy nhất (bằng 1).",
    "tags": [
      "DP-800",
      "REGEXP_SUBSTR",
      "Data Cleaning"
    ]
  },
  {
    "id": "dp14",
    "questionNumber": 14,
    "text": "You discover that some records in a table already contain NULL values in a field. You need to ensure that all future records must have a non-null value for this field, without immediately fixing the existing NULL rows. What should you add?",
    "options": [
      {
        "key": "A",
        "text": "A standard NOT NULL column constraint."
      },
      {
        "key": "B",
        "text": "A check constraint configured with the WITH NOCHECK option (e.g. CHECK (Owner IS NOT NULL))."
      },
      {
        "key": "C",
        "text": "A nonclustered index on the field."
      },
      {
        "key": "D",
        "text": "A unique constraint with NULL filtering."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "category": "Database Integrity",
    "explanation": "Vì bảng đang chứa dữ liệu NULL, việc thay đổi trực tiếp thuộc tính cột thành NOT NULL sẽ bị lỗi. Thay vào đó, ta có thể bổ sung một ràng buộc kiểm tra CHECK (Owner IS NOT NULL) đi kèm tùy chọn WITH NOCHECK. Ràng buộc này sẽ bỏ qua các dòng dữ liệu không hợp lệ đã tồn tại từ trước và chỉ bắt đầu kiểm tra, cưỡng chế quy tắc đối với các thao tác INSERT/UPDATE trong tương lai.",
    "tags": [
      "DP-800",
      "Ràng buộc CHECK",
      "NOCHECK"
    ]
  },
  {
    "id": "dp15",
    "questionNumber": 15,
    "text": "You have a daily report filtering by a $.severity JSON property stored in a nvarchar(max) column. The query is causing performance issues due to full table scans. You need to optimize the table to allow index seek and avoid key lookups on returning fields (LogId, LogDateTime). What should you do?",
    "options": [
      {
        "key": "A",
        "text": "Add computed column severity: AS JSON_VALUE(log, '$.severity') PERSISTED; and create an index on it: CREATE INDEX ix_severity ON Logs(severity) INCLUDE(LogId, LogDateTime, log);"
      },
      {
        "key": "B",
        "text": "Create a JSON index using CREATE JSON INDEX on $.severity and include LogId and LogDateTime in the JSON schema."
      },
      {
        "key": "C",
        "text": "Add computed column: AS JSON_QUERY(log, '$.severity') PERSISTED; and create a nonclustered index on it."
      },
      {
        "key": "D",
        "text": "Create a clustered columnstore index on the entire table to optimize overall scans."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "category": "Query Optimization & Indexes",
    "explanation": "Do severity là thuộc tính giá trị đơn lẻ (scalar), ta sử dụng JSON_VALUE để trích xuất. Gắn nhãn PERSISTED giúp giá trị này được lưu vật lý xuống ổ đĩa, cho phép lập index. Để tránh Key Lookup quay lại bảng gốc khi lấy LogId, LogDateTime và log, ta thêm chúng vào danh sách cột INCLUDE của chỉ mục phi cụm (covering index).",
    "tags": [
      "DP-800",
      "Computed Column",
      "Covering Index"
    ]
  },
  {
    "id": "dp16",
    "questionNumber": 16,
    "text": "You design a database schema combining Dynamic Data Masking (DDM) to obfuscate sensitive fields (email, phone) and Row-Level Security (RLS) to restrict regional access. Which of the following statements is true regarding how these security features interact?",
    "options": [
      {
        "key": "A",
        "text": "RLS and DDM run sequentially. RLS filters out unauthorized rows first; if a row is filtered out, masking rules are never evaluated or applied to it."
      },
      {
        "key": "B",
        "text": "DDM is applied first to obfuscate all data, then RLS is applied to the masked values."
      },
      {
        "key": "C",
        "text": "Database administrators bypass RLS automatically when querying masked data via an application connection pool."
      },
      {
        "key": "D",
        "text": "RLS and DDM cannot be enabled simultaneously on the same table."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "category": "Database Security & Triggers",
    "explanation": "Row-Level Security (RLS) hoạt động ở giai đoạn đầu của luồng xử lý truy vấn để loại bỏ hoàn toàn các bản ghi không được phép truy cập. Chỉ những bản ghi vượt qua bộ lọc RLS mới đi tiếp và được áp dụng Dynamic Data Masking (DDM) để làm mờ dữ liệu nhạy cảm trước khi trả về cho khách hàng.",
    "tags": [
      "DP-800",
      "RLS",
      "Dynamic Data Masking"
    ]
  },
  {
    "id": "dp17",
    "questionNumber": 17,
    "text": "You write an AFTER UPDATE trigger on table dbo.MaintenanceEvents to update a LastModifiedUtc column. To prevent infinite trigger recursion (the trigger firing another update on the same table, looping indefinitely), what condition should you use?",
    "options": [
      {
        "key": "A",
        "text": "INNER JOIN inserted i ON m.MaintenanceId = i.MaintenanceId WHERE m.LastModifiedUtc <> i.LastModifiedUtc"
      },
      {
        "key": "B",
        "text": "INNER JOIN inserted i ON m.VehicleId = i.VehicleId WHERE i.MaintenanceId IS NOT NULL"
      },
      {
        "key": "C",
        "text": "INNER JOIN deleted d ON m.MaintenanceId = d.MaintenanceId WHERE m.LastModifiedUtc = d.LastModifiedUtc"
      },
      {
        "key": "D",
        "text": "No extra condition is needed because AFTER triggers do not support recursion by default in SQL Server."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "category": "Database Programmability",
    "explanation": "Nếu một trigger AFTER UPDATE tự thực hiện lệnh UPDATE lên chính bảng của nó, nó sẽ tự kích hoạt đệ quy. Bằng cách thêm điều kiện WHERE m.LastModifiedUtc <> i.LastModifiedUtc, ở lần đệ quy thứ hai giá trị thời gian trong bảng và bảng ảo 'inserted' đã trùng khớp, làm cho điều kiện lọc trả về False và lập tức dừng vòng lặp.",
    "tags": [
      "DP-800",
      "Trigger Recursion",
      "AFTER TRIGGER"
    ]
  },
  {
    "id": "dp18",
    "questionNumber": 18,
    "text": "Your ingestion pipeline sometimes fails due to malformed JSON and duplicate payloads being written to your Azure SQL database. Which two database-side solutions should you implement to enforce data quality at the tier level?",
    "options": [
      {
        "key": "A",
        "text": "Create a deterministic computed column using a hash function like HASHBYTES and append a UNIQUE INDEX on it."
      },
      {
        "key": "B",
        "text": "Add a CHECK constraint combined with the built-in ISJSON function (e.g. CHECK (ISJSON(FeedbackJson) > 0))."
      },
      {
        "key": "C",
        "text": "Enable snapshot isolation on the database to handle concurrent duplicates."
      },
      {
        "key": "D",
        "text": "Create a DML trigger that automatically parses and attempts to rewrite malformed JSON on the fly."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "category": "Database Integrity",
    "explanation": "Để chống trùng lặp dữ liệu lớn/phức tạp, giải pháp hiệu quả là sinh mã băm bằng HASHBYTES trên cột computed và đặt chỉ mục UNIQUE INDEX lên đó. Để chặn dữ liệu JSON bị lỗi cấu trúc, ta tạo ràng buộc CHECK sử dụng hàm ISJSON() > 0 nhằm loại bỏ ngay lập tức trước khi lưu trữ.",
    "tags": [
      "DP-800",
      "ISJSON",
      "HASHBYTES"
    ]
  },
  {
    "id": "dp19",
    "questionNumber": 19,
    "text": "You need to configure your Microsoft SQL Server 2025 instance to call an Azure OpenAI REST endpoint for chat completions with the highest level of security. How should you define the DATABASE SCOPED CREDENTIAL?",
    "options": [
      {
        "key": "A",
        "text": "CREATE DATABASE SCOPED CREDENTIAL AzureOpenAIHeaders WITH IDENTITY = 'Managed Identity', SECRET = '\"resourceid\":\"https://cognitiveservices.azure.com\"';"
      },
      {
        "key": "B",
        "text": "CREATE DATABASE SCOPED CREDENTIAL AzureOpenAIHeaders WITH IDENTITY = 'HTTPEnpointHeaders', SECRET = N'\"api-key\":\"<your_key>\"';"
      },
      {
        "key": "C",
        "text": "CREATE DATABASE SCOPED CREDENTIAL AzureOpenAIHeaders WITH IDENTITY = 'AzureOpenAI', SECRET = '\"resourceid\":\"https://cognitiveservices.azure.com\"';"
      },
      {
        "key": "D",
        "text": "CREATE DATABASE SCOPED CREDENTIAL AzureOpenAIHeaders WITH IDENTITY = 'HTTPEndpointQueryString', SECRET = N'\"api-key\":\"<your_key>\"';"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "category": "Database Security & Triggers",
    "explanation": "Sử dụng Managed Identity (Định danh quản lý) loại bỏ nhu cầu lưu trữ cứng các API key dạng văn bản rõ nguy hiểm. Khi tích hợp với dịch vụ Azure OpenAI hoặc Cognitive Services, SQL Server yêu cầu tham số SECRET phải chứa định danh tài nguyên (resourceid) hợp lệ trỏ tới endpoint đám mây bảo mật.",
    "tags": [
      "DP-800",
      "Managed Identity",
      "Azure OpenAI"
    ]
  },
  {
    "id": "dp20",
    "questionNumber": 20,
    "text": "You have a table containing two million articles with high-dimensional vector embeddings, which are updated frequently. The current embedding pipeline runs as a nightly batch, but users complain that search results are stale. You need near real-time embeddings updates while minimizing database CPU overhead. What should you do?",
    "options": [
      {
        "key": "A",
        "text": "Enable Change Data Capture (CDC) on the table and use an external Azure Functions app to process rows changes and generate embeddings asynchronously."
      },
      {
        "key": "B",
        "text": "Create an AFTER INSERT/UPDATE trigger that calls AI_GENERATE_EMBEDDINGS synchronously for each modified row."
      },
      {
        "key": "C",
        "text": "Run a T-SQL scheduled Agent job every hour to scan the entire table and regenerate embeddings for all rows."
      },
      {
        "key": "D",
        "text": "Modify the search query to use VECTOR_DISTANCE instead of VECTOR_SEARCH to bypass index latency."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "category": "Query Optimization & Indexes",
    "explanation": "Việc gọi API ngoài để sinh embeddings trực tiếp trong Database trigger là phản mẫu (anti-pattern) vì nó làm nghẽn luồng transaction và gây quá tải CPU của Database. Bằng cách sử dụng CDC, các sự kiện thay đổi dòng được ghi nhận phi tuần tự và xử lý bất đồng bộ thông qua Azure Functions, giúp giải phóng hoàn toàn tài nguyên cho DB chính.",
    "tags": [
      "DP-800",
      "CDC",
      "Asynchronous Processing"
    ]
  },
  {
    "id": "dp21",
    "questionNumber": 21,
    "text": "Your company policy strictly prohibits sharing customer Personally Identifiable Information (PII), secrets, and query results with any external AI service. You need to use GitHub Copilot Chat to write a stored procedure joining two tables. What is the best practice to get accurate code while maintaining compliance?",
    "options": [
      {
        "key": "A",
        "text": "Provide GitHub Copilot Chat with the table schema definitions (metadata) only, omitting any real customer rows."
      },
      {
        "key": "B",
        "text": "Paste a representative subset of real customer email rows so the AI can understand edge cases."
      },
      {
        "key": "C",
        "text": "Expose the SQL database connection string to Copilot Chat to let it validate the tables directly."
      },
      {
        "key": "D",
        "text": "Run a query returning the data, and copy-paste the entire result set into the chat window."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "category": "AI Tooling & Workspace",
    "explanation": "Để tuân thủ tuyệt đối quy định bảo mật thông tin khách hàng, lập trình viên chỉ cần cung cấp định nghĩa cấu trúc bảng (schema/metadata) cho mô hình AI. Copilot Chat hoàn toàn hiểu được các tên cột, kiểu dữ liệu và mối quan hệ khóa ngoại để sinh code chuẩn xác mà không cần tiếp cận bất kỳ bản ghi thực tế nào.",
    "tags": [
      "DP-800",
      "Data Privacy",
      "PII"
    ]
  },
  {
    "id": "dp22",
    "questionNumber": 22,
    "text": "You need to configure secure, passwordless authentication and isolated network access between an Azure App Service API and an Azure SQL database. The solution must ensure traffic remains within the Microsoft backbone fabric. What should you configure?",
    "options": [
      {
        "key": "A",
        "text": "Authentication: Enable a system-assigned Managed Identity and Microsoft Entra authentication; Network: Create a Private Endpoint and disable public network access."
      },
      {
        "key": "B",
        "text": "Authentication: Use SQL login with credentials stored in Azure Key Vault; Network: Enable 'Allow Azure Services' firewall setting."
      },
      {
        "key": "C",
        "text": "Authentication: Configure client certificate authentication on both tiers; Network: Add public outbound App Service IP addresses to SQL firewall rules."
      },
      {
        "key": "D",
        "text": "Authentication: Use Managed Identity with password rotation; Network: Establish a public-facing Application Gateway."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "category": "Database Security & Triggers",
    "explanation": "Kết hợp Managed Identity cùng bảo mật cấp mạng thông qua Private Endpoint (điểm cuối tư nhân) là giải pháp hoàn hảo nhất. Nó loại bỏ việc quản lý mật khẩu rõ, đồng thời chuyển toàn bộ lưu lượng truy cập sang mạng nội bộ của Microsoft Azure thay vì đi qua internet công cộng.",
    "tags": [
      "DP-800",
      "Managed Identity",
      "Private Endpoint"
    ]
  },
  {
    "id": "dp23",
    "questionNumber": 23,
    "text": "You need to ensure that database search embeddings are updated near real-time whenever documentation in a table changes, without using a nightly batch process or blocking live client transactions. Why is Change Tracking preferred over Table Triggers for this solution?",
    "options": [
      {
        "key": "A",
        "text": "Change Tracking enables lightweight incremental queries of modified rows asynchronously, whereas table triggers block transactional workloads by initiating synchronous calls."
      },
      {
        "key": "B",
        "text": "Table triggers can only track INSERT statements but cannot capture UPDATE or DELETE actions."
      },
      {
        "key": "C",
        "text": "Change Tracking automatically generates embeddings inside the SQL engine without requiring external models."
      },
      {
        "key": "D",
        "text": "Table triggers require converting all columns to float(32) which destroys index performance."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "category": "Query Optimization & Indexes",
    "explanation": "Tính năng Change Tracking (Theo dõi thay đổi) của SQL Server cho phép các dịch vụ bên ngoài kéo dữ liệu thay đổi một cách gọn nhẹ thông qua cơ chế kéo (pull model) bất đồng bộ. Ngược lại, trigger hoạt động đồng thì (synchronous) trực tiếp trong tiến trình giao dịch, nên việc thực hiện các thao tác tốn tài nguyên như gọi AI model sẽ làm chậm toàn bộ hệ thống.",
    "tags": [
      "DP-800",
      "Change Tracking",
      "Triggers"
    ]
  },
  {
    "id": "dp24",
    "questionNumber": 24,
    "text": "You are designing a RAG pattern in an isolated Microsoft SQL Server 2025 environment with zero outbound network connectivity. You need to generate text embeddings natively inside the database. What two steps must you implement?",
    "options": [
      {
        "key": "A",
        "text": "Create an external model project using the local ONNX Runtime and local disk paths; and GRANT EXECUTE ON EXTERNAL MODEL to the authorized database user."
      },
      {
        "key": "B",
        "text": "Establish an Azure ExpressRoute connection to Microsoft Foundry; and grant CONTROL permissions to the system master."
      },
      {
        "key": "C",
        "text": "Deploy an on-premises Azure OpenAI Edge container; and create a trigger executing sp_invoke_external_rest_endpoint."
      },
      {
        "key": "D",
        "text": "Create a database scoped credential mapping directly to a public HuggingFace REST endpoint."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "category": "Query Optimization & Indexes",
    "explanation": "Do môi trường bị cô lập mạng hoàn toàn, ta không thể gọi các API REST như Azure OpenAI. SQL Server 2025 hỗ trợ nạp mô hình học máy cục bộ qua định dạng ONNX và chạy trực tiếp trên máy chủ bằng thư viện ONNX Runtime. Đồng thời, ta phân quyền thực thi an toàn bằng lệnh GRANT EXECUTE ON EXTERNAL MODEL.",
    "tags": [
      "DP-800",
      "ONNX Runtime",
      "SQL Server 2025"
    ]
  },
  {
    "id": "dp25",
    "questionNumber": 25,
    "text": "Following a database deployment that updated indexes, an API stored procedure begins running significantly slower. Query Store reveals that a sub-optimal execution plan was generated and is currently in use, although a highly efficient older plan still exists in the history logs. How can you resolve this issue immediately without code changes?",
    "options": [
      {
        "key": "A",
        "text": "Execute the stored procedure: sp_query_store_force_plan to force the database engine to use the historical, high-performing plan."
      },
      {
        "key": "B",
        "text": "Run DBCC FREEPROCCACHE to clear the global plan cache across the entire SQL server."
      },
      {
        "key": "C",
        "text": "Execute ALTER DATABASE SET AUTOMATIC_TUNING = FORCE_LAST_GOOD_PLAN to run automatic tuning."
      },
      {
        "key": "D",
        "text": "Execute sp_query_store_set_hints to append custom MAXDOP hints to force quick compilation."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "category": "Query Optimization & Indexes",
    "explanation": "Hàm hệ thống sp_query_store_force_plan cho phép quản trị viên cơ sở dữ liệu ghim trực tiếp kế hoạch thực thi cũ (đã được chứng minh có hiệu suất tốt) cho truy vấn cụ thể, lập tức khắc phục tình trạng Plan Regression (suy thoái kế hoạch) mà không cần can thiệp mã nguồn ứng dụng.",
    "tags": [
      "DP-800",
      "Query Store",
      "Plan Regression"
    ]
  },
  {
    "id": "dp26",
    "questionNumber": 26,
    "text": "You need to implement a semantic similarity search over an incident table to help customer service agents find similar issues. The table contains the columns: VehicleLocation (geography), IncidentDescription (nvarchar(max)), IncidentType (varchar(50)), and SeverityScore (int). Which column must you use to generate your vector embeddings?",
    "options": [
      {
        "key": "A",
        "text": "IncidentDescription"
      },
      {
        "key": "B",
        "text": "VehicleLocation"
      },
      {
        "key": "C",
        "text": "IncidentType"
      },
      {
        "key": "D",
        "text": "SeverityScore"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "category": "SQL AI Querying & JSON",
    "explanation": "Mô hình vector hóa văn bản (embeddings) hoạt động hiệu quả nhất trên các trường chứa ngôn ngữ tự nhiên, phong phú ngữ cảnh như IncidentDescription. Các trường phân loại ngắn (IncidentType) hay số (SeverityScore) không cung cấp đủ ngữ nghĩa để thực hiện tìm kiếm ngữ nghĩa.",
    "tags": [
      "DP-800",
      "Embeddings",
      "Semantic Search"
    ]
  },
  {
    "id": "dp27",
    "questionNumber": 27,
    "text": "You are running semantic similarity queries over millions of 1,536-dimensional vectors. Running standard scans takes too long and causes database bottlenecks. How should you optimize the vector queries to meet strict low-latency requirements?",
    "options": [
      {
        "key": "A",
        "text": "Create a specialized vector index on the vector(1536) column using DiskANN type."
      },
      {
        "key": "B",
        "text": "Create a standard nonclustered B-tree index on the vector(1536) column."
      },
      {
        "key": "C",
        "text": "Build a computed column comparing the vectors mathematically and index that column."
      },
      {
        "key": "D",
        "text": "Create a full-text index on the vector column."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "category": "Query Optimization & Indexes",
    "explanation": "Để tìm kiếm nhanh trên không gian vector nhiều chiều, SQL Server 2025 cung cấp cú pháp CREATE VECTOR INDEX sử dụng thuật toán DiskANN để dựng chỉ mục Láng giềng Gần nhất (Approximate Nearest Neighbor - ANN). Chỉ mục B-tree hay Full-text thông thường không thể hoạt động trên kiểu dữ liệu vector.",
    "tags": [
      "DP-800",
      "Vector Index",
      "DiskANN"
    ]
  },
  {
    "id": "dp28",
    "questionNumber": 28,
    "text": "You want to allow developers using GitHub Copilot Chat inside VS Code to query live catalog metadata and retrieve current schema changes dynamically from an Azure SQL database without using outdated static files. What should you configure?",
    "options": [
      {
        "key": "A",
        "text": "Configure GitHub Copilot Chat to connect to an MCP (Model Context Protocol) server for SQL Server."
      },
      {
        "key": "B",
        "text": "Export the database schema to a static .dacpac file and load it in the prompt window."
      },
      {
        "key": "C",
        "text": "Add the database schema code into a local copilot-instructions.md file."
      },
      {
        "key": "D",
        "text": "Include the entire visual studio database project in the source repository."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "category": "AI Tooling & Workspace",
    "explanation": "MCP (Giao thức bối cảnh mô hình) là một chuẩn mở cho phép các mô hình AI kết nối và tương tác thời gian thực với các công cụ phát triển phần mềm bên ngoài. Sử dụng MCP server giúp Copilot truy vấn trực tiếp catalog hiện hành của database để sinh câu lệnh chính xác nhất.",
    "tags": [
      "DP-800",
      "MCP",
      "Schema Discovery"
    ]
  },
  {
    "id": "dp29",
    "questionNumber": 29,
    "text": "You plan to upgrade your Azure SQL Database semantic search from 'text-embedding-ada-002' to the more accurate 'text-embedding-3-small' model. Both models output vectors of 1,536 dimensions. What is the most critical first step before running VECTOR_SEARCH queries with the new model?",
    "options": [
      {
        "key": "A",
        "text": "Regenerate all existing database embeddings using the new text-embedding-3-small model."
      },
      {
        "key": "B",
        "text": "Convert the Embedding column from vector(1536) to nvarchar(max) temporarily."
      },
      {
        "key": "C",
        "text": "Rebuild the vector index on the existing old embeddings without changes."
      },
      {
        "key": "D",
        "text": "Normalize the vector lengths using L2 normalization before initiating queries."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "category": "SQL AI Querying & JSON",
    "explanation": "Mỗi mô hình embedding ánh xạ văn bản vào một không gian toán học có tọa độ hoàn toàn khác nhau. Cho dù cả hai mô hình cùng trả về độ dài 1536 chiều, các vector tạo bởi hai mô hình khác nhau không bao giờ có thể đối chiếu hay đo khoảng cách tương đồng với nhau. Bắt buộc phải tái sinh (regenerate) toàn bộ vector cũ.",
    "tags": [
      "DP-800",
      "Model Upgrade",
      "Vector Math"
    ]
  },
  {
    "id": "dp30",
    "questionNumber": 30,
    "text": "You are designing an e-commerce semantic search feature where users can search for products using natural language and apply structured filters on brand and price. When constructing the text source to generate embeddings, which of the following is correct?",
    "options": [
      {
        "key": "A",
        "text": "Concatenate rich text columns like product_name, category, and description; but exclude price since price filtering is better handled via standard SQL WHERE clauses."
      },
      {
        "key": "B",
        "text": "Include the price column directly inside the concatenated text source because embeddings excel at numeric range comparisons."
      },
      {
        "key": "C",
        "text": "Only embed the description column and use full-text index on brand names."
      },
      {
        "key": "D",
        "text": "Price must be embedded separately as a float(32) vector to support similarity matching."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "category": "SQL AI Querying & JSON",
    "explanation": "Các mô hình embedding hoạt động tốt trên ngữ nghĩa văn bản mô tả để tìm sự tương đồng. Đối với các thuộc tính định lượng thay đổi liên tục như giá (price), việc nhúng vào text sẽ tạo ra nhiễu và làm sai lệch tìm kiếm. Giá cả được xử lý chính xác và tối ưu nhất bằng mệnh đề WHERE chuẩn trong SQL.",
    "tags": [
      "DP-800",
      "Embedding Design",
      "Best Practices"
    ]
  },
  {
    "id": "dp31",
    "questionNumber": 31,
    "text": "When consuming the response from an Azure OpenAI REST endpoint call inside your T-SQL stored procedure, the engine returns a JSON string. Which T-SQL function is the most efficient and correct to extract the scalar string of the generated answer?",
    "options": [
      {
        "key": "A",
        "text": "JSON_VALUE(@response, '$.choices[0].message.content')"
      },
      {
        "key": "B",
        "text": "JSON_QUERY(@response, '$.choices[0].message.content')"
      },
      {
        "key": "C",
        "text": "OPENJSON(@response) WITH (content nvarchar(max))"
      },
      {
        "key": "D",
        "text": "JSON_MODIFY(@response, '$.choices[0].message.content', 'get')"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "category": "SQL AI Querying & JSON",
    "explanation": "Hàm JSON_VALUE() dùng để trích xuất một giá trị đơn (scalar value) như chuỗi, số hoặc boolean từ một chuỗi định dạng JSON. Vì nội dung câu trả lời ở đường dẫn $.choices[0].message.content là một chuỗi văn bản, JSON_VALUE là sự lựa chọn tối ưu nhất so với JSON_QUERY (vốn dùng cho đối tượng hoặc mảng).",
    "tags": [
      "DP-800",
      "JSON_VALUE",
      "Azure OpenAI"
    ]
  },
  {
    "id": "dp32",
    "questionNumber": 32,
    "text": "You have a Microsoft Fabric workspace named Workspace1 containing a SQL database named SalesDB and an API for GraphQL named SalesApi. You have a Microsoft Entra group named SqlUsers with the Viewer role in Workspace1. From Workspace1, you assign 'View and Edit GraphQL item' permission to SalesApi for SqlUsers. The connection to SalesDB uses SSO. Which of the following statements is true?",
    "options": [
      {
        "key": "A",
        "text": "The members of SqlUsers can modify the data in SalesDB via SalesAPI."
      },
      {
        "key": "B",
        "text": "The members of SqlUsers can view the data in SalesDB via SalesAPI."
      },
      {
        "key": "C",
        "text": "The members of SqlUsers can change the field mappings of SalesApi but cannot view or modify the actual data in SalesDB."
      },
      {
        "key": "D",
        "text": "The members of SqlUsers can run mutations and queries in SalesDB."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "category": "Microsoft Fabric & GraphQL",
    "explanation": "Thành viên của nhóm SqlUsers có quyền 'View and Edit GraphQL item' và vai trò Viewer trong Workspace. Quyền này cho phép họ thay đổi cấu trúc ánh xạ trường (field mappings) của SalesApi. Tuy nhiên, họ không được cấp quyền 'Run Queries and Mutations', vì vậy họ không thể đọc hay sửa đổi dữ liệu thực tế trong SalesDB thông qua GraphQL API.",
    "tags": [
      "DP-800",
      "Fabric",
      "SSO",
      "GraphQL"
    ]
  },
  {
    "id": "dp33",
    "questionNumber": 33,
    "text": "During an incident window, you discover that Session 72 is sleeping with open_transaction_count = 1. Multiple other sessions show blocking_session_id = 72 in sys.dm_exec_requests. sys.dm_exec_input_buffer(72, NULL) returns 'BEGIN TRANSACTION UPDATE Sales.Orders'. Users report that updates to Sales.Orders intermittently time out. What is the cause of the blocking?",
    "options": [
      {
        "key": "A",
        "text": "A long-running SELECT statement is blocking writers."
      },
      {
        "key": "B",
        "text": "Session 72 caused a deadlock."
      },
      {
        "key": "C",
        "text": "An explicit transaction was started but not committed or rolled back."
      },
      {
        "key": "D",
        "text": "A lock escalation occurred."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "category": "Transaction Management & Error Handling",
    "explanation": "Trạng thái 'sleeping' kết hợp với open_transaction_count = 1 chỉ ra rằng session 72 đã mở một transaction một cách tường minh (BEGIN TRANSACTION) và thực hiện cập nhật nhưng chưa bao giờ chạy COMMIT hoặc ROLLBACK TRANSACTION. Do đó, các khóa độc quyền (exclusive locks) vẫn bị giữ vô thời hạn, làm nghẽn các phiên làm việc khác cho đến khi phiên 72 bị ngắt kết nối.",
    "tags": [
      "DP-800",
      "Blocking",
      "sys.dm_exec_requests"
    ]
  },
  {
    "id": "dp34",
    "questionNumber": 34,
    "text": "You have a SQL database in Microsoft Fabric containing a multi-statement table-valued function (TVF) named Sales.mstvf_OrderStatus() and a scalar function dbo.ufn_GetTaxMultiplier. Joins on Sales.mstvf_OrderStatus() produce inconsistent execution plans. Also, executing ufn_GetTaxMultiplier without schema prefix results in an error. How should you resolve these issues?",
    "options": [
      {
        "key": "A",
        "text": "Rewrite Sales.mstvf_OrderStatus() as an inline table-valued function (ITVF) to allow the Optimizer to inline its code; and always call the scalar function using its two-part name (dbo.ufn_GetTaxMultiplier)."
      },
      {
        "key": "B",
        "text": "Create a clustered index on Sales.mstvf_OrderStatus() and enable auto-tuning on ufn_GetTaxMultiplier."
      },
      {
        "key": "C",
        "text": "Convert Sales.mstvf_OrderStatus() to a stored procedure and execute ufn_GetTaxMultiplier using the EXECUTE AS OWNER statement."
      },
      {
        "key": "D",
        "text": "Rewrite Sales.mstvf_OrderStatus() as a scalar function and compile ufn_GetTaxMultiplier with SCHEMABINDING."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "category": "Database Programmability",
    "explanation": "Hàm TVF nhiều câu lệnh (MSTVF) hoạt động như một hộp đen đối với bộ tối ưu hóa truy vấn SQL Server, dẫn đến ước lượng số dòng sai và kế hoạch thực thi kém. Chuyển đổi nó thành hàm TVF nội tuyến (ITVF) giúp bộ tối ưu hóa gộp thân hàm trực tiếp vào truy vấn gọi nó. Đồng thời, SQL Server yêu cầu hàm vô hướng (scalar UDF) phải được gọi bằng tên đầy đủ gồm hai phần (schema_name.object_name).",
    "tags": [
      "DP-800",
      "ITVF",
      "UDF",
      "MSTVF"
    ]
  },
  {
    "id": "dp35",
    "questionNumber": 35,
    "text": "You have an Azure SQL database named SalesDB on logical server sales-sql01. You enable a user-assigned managed identity named OrderApi-Id for an Azure App Service web app named OrderApi. You need to configure OrderApi to connect to SalesDB using Microsoft Entra authentication with read and write permissions to SalesDB. Which T-SQL statements should you run in SalesDB?",
    "options": [
      {
        "key": "A",
        "text": "CREATE LOGIN [OrderApi-Id] FROM EXTERNAL PROVIDER; ALTER SERVER ROLE sysadmin ADD MEMBER [OrderApi-Id];"
      },
      {
        "key": "B",
        "text": "CREATE USER [OrderApi-Id] WITH PASSWORD = 'P@ssw0rd!'; ALTER ROLE db_datareader ADD MEMBER [OrderApi-Id];"
      },
      {
        "key": "C",
        "text": "CREATE USER [OrderApi-Id] FROM EXTERNAL PROVIDER; ALTER ROLE db_datareader ADD MEMBER [OrderApi-Id]; ALTER ROLE db_datawriter ADD MEMBER [OrderApi-Id];"
      },
      {
        "key": "D",
        "text": "CREATE LOGIN [OrderApi-Id] WITH PASSWORD = 'P@ssw0rd!'; ALTER ROLE db_owner ADD MEMBER [OrderApi-Id];"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "category": "Database Security & Triggers",
    "explanation": "Trong Azure SQL Database, người dùng cơ sở dữ liệu độc lập (contained database users) được liên kết trực tiếp với định danh Microsoft Entra ID thông qua câu lệnh CREATE USER ... FROM EXTERNAL PROVIDER mà không cần tạo login ở cấp server. Sau đó ta cấp quyền đọc/ghi bằng cách thêm user này vào các vai trò db_datareader và db_datawriter.",
    "tags": [
      "DP-800",
      "Managed Identity",
      "Entra ID",
      "CREATE USER"
    ]
  },
  {
    "id": "dp36",
    "questionNumber": 36,
    "text": "You need to encrypt a sensitive column named Notes using Always Encrypted. Neither the stored values nor the query inputs should reveal patterns or repetitions in the data. The solution must provide the highest level of security and prevent any user from inferring relationships from the encrypted values. Which encryption type should you use?",
    "options": [
      {
        "key": "A",
        "text": "Always Encrypted with deterministic encryption."
      },
      {
        "key": "B",
        "text": "Always Encrypted with randomized encryption."
      },
      {
        "key": "C",
        "text": "Transparent Data Encryption (TDE)."
      },
      {
        "key": "D",
        "text": "Dynamic Data Masking (DDM) with randomized mask."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "category": "Database Security & Triggers",
    "explanation": "Mã hóa ngẫu nhiên (Randomized encryption) tạo ra các giá trị mã hóa khác nhau cho cùng một giá trị gốc mỗi lần ghi, giúp ngăn chặn việc phân tích mẫu dữ liệu hoặc suy đoán mối quan hệ từ văn bản mã hóa. Đây là cấp độ bảo mật cao nhất, tuy nhiên nó không hỗ trợ tìm kiếm bằng toán tử so sánh bằng (=).",
    "tags": [
      "DP-800",
      "Always Encrypted",
      "Randomized Encryption"
    ]
  },
  {
    "id": "dp37",
    "questionNumber": 37,
    "text": "You have an Azure SQL database. A reporting query aggregates monthly revenue per customer runs frequently. You need to reduce the retrieval time of these calculated values without altering any underlying table structure. What should you do?",
    "options": [
      {
        "key": "A",
        "text": "Create a view by using ORDER BY without TOP, and then create a unique clustered index on the view."
      },
      {
        "key": "B",
        "text": "Create a view without using WITH SCHEMABINDING, and then create a nonclustered index on the view."
      },
      {
        "key": "C",
        "text": "Create a view by using GROUP BY, and then create a unique clustered index on the view."
      },
      {
        "key": "D",
        "text": "Create a view by using WITH SCHEMABINDING, include COUNT_BIG(*), and then create a unique clustered index on the view."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "category": "Query Optimization & Indexes",
    "explanation": "Để tạo một Indexed View (Chỉ mục trên View), view đó bắt buộc phải được khai báo với tùy chọn WITH SCHEMABINDING. Nếu view có sử dụng GROUP BY để gom nhóm dữ liệu, danh sách SELECT bắt buộc phải bao gồm hàm đếm COUNT_BIG(*). Khi tạo Unique Clustered Index trên view này, kết quả tính toán tổng hợp sẽ được lưu trữ vật lý, giúp truy vấn báo cáo chạy cực nhanh.",
    "tags": [
      "DP-800",
      "Indexed View",
      "SCHEMABINDING",
      "COUNT_BIG"
    ]
  },
  {
    "id": "dp38",
    "questionNumber": 38,
    "text": "You have a GitHub Actions workflow that builds and deploys an Azure SQL database from an SDK-style SQL database project. You need to generate a report showing whether the production database schema has diverged from the model in source control. Which SqlPackage.exe action should you use?",
    "options": [
      {
        "key": "A",
        "text": "SqlPackage.exe /Action:DriftReport"
      },
      {
        "key": "B",
        "text": "SqlPackage.exe /Action:DeployReport"
      },
      {
        "key": "C",
        "text": "SqlPackage.exe /Action:Extract"
      },
      {
        "key": "D",
        "text": "SqlPackage.exe /Action:Script"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "category": "CI/CD & Database Projects",
    "explanation": "Hành động /Action:DriftReport của công cụ SqlPackage được thiết kế để so sánh lược đồ của cơ sở dữ liệu đang hoạt động (production) với mô hình cơ sở dữ liệu gốc (DACPAC) trong mã nguồn, từ đó xuất ra báo cáo chi tiết về sự sai lệch (schema drift) như các đối tượng bị sửa đổi hoặc thiếu sót.",
    "tags": [
      "DP-800",
      "SqlPackage",
      "CI/CD",
      "DriftReport"
    ]
  },
  {
    "id": "dp39",
    "questionNumber": 39,
    "text": "You have a partitioned table dbo.Orders in Microsoft Fabric containing three years of monthly data. You need to remove all rows for the oldest month while minimizing log generation, locking, and performance impact on concurrent queries. Which Transact-SQL statement meets the goal?",
    "options": [
      {
        "key": "A",
        "text": "TRUNCATE TABLE dbo.Orders WITH (PARTITIONS (partition_number));"
      },
      {
        "key": "B",
        "text": "DELETE FROM dbo.Orders WHERE OrderDate < DATEADD(month, -36, SYSUTCDATETIME());"
      },
      {
        "key": "C",
        "text": "ALTER TABLE dbo.Orders DROP PARTITION SCHEME (partition_scheme_name);"
      },
      {
        "key": "D",
        "text": "ALTER TABLE dbo.Orders MERGE RANGE (boundary_value);"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "category": "Query Optimization & Indexes",
    "explanation": "Sử dụng TRUNCATE TABLE ... WITH (PARTITIONS (...)) cho phép xóa toàn bộ dữ liệu trong một phân vùng cụ thể mà không ghi log chi tiết từng dòng (minimal logging) và không khóa toàn bộ bảng lớn. Đây là thao tác siêu dữ liệu (metadata-only) có độ trễ cực thấp và hầu như không ảnh hưởng đến các truy vấn đồng thời khác.",
    "tags": [
      "DP-800",
      "Partitioning",
      "TRUNCATE PARTITION"
    ]
  },
  {
    "id": "dp40",
    "questionNumber": 40,
    "text": "You have an SDK-style SQL database project targeting Azure SQL Database. The CI build fails with unresolved reference errors when referencing system views (e.g. sys.*). You need to resolve this by adding the correct system objects in the database model. Which is the correct solution?",
    "options": [
      {
        "key": "A",
        "text": "Add the Microsoft.SqlServer.Dacpacs.Azure.Master NuGet package to the project."
      },
      {
        "key": "B",
        "text": "Add the Microsoft.SqlServer.Dacpacs.Master NuGet package to the project."
      },
      {
        "key": "C",
        "text": "Include a hardcoded copy of master.mdf in the git repository."
      },
      {
        "key": "D",
        "text": "Change the target platform of the SQL project to SQL Server 2022 on-premises."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "category": "CI/CD & Database Projects",
    "explanation": "Gói NuGet Microsoft.SqlServer.Dacpacs.Azure.Master cung cấp mô hình cơ sở dữ liệu hệ thống master chuẩn hóa cho Azure SQL Database. Việc tham chiếu gói này trong dự án SDK-style giúp trình biên dịch dotnet build phân giải thành công các tham chiếu hệ thống như sys.dm_*, loại bỏ lỗi biên dịch CI.",
    "tags": [
      "DP-800",
      "CI/CD",
      "NuGet",
      "master.dacpac"
    ]
  },
  {
    "id": "dp41",
    "questionNumber": 41,
    "text": "You are designing a database schema for telemetry data in Microsoft Fabric. You write a script that configures a System-Versioned Temporal Table but does not include any partition definitions. It also creates a JSON index on $.location.latitude, longitude, and accuracy properties. Which of the following statements is true?",
    "options": [
      {
        "key": "A",
        "text": "The code meets database performance requirements for partitioning."
      },
      {
        "key": "B",
        "text": "Queries that filter on $.location.heading will automatically utilize the created JSON index."
      },
      {
        "key": "C",
        "text": "The code meets requirements for JSON property querying but does NOT partition the telemetry table."
      },
      {
        "key": "D",
        "text": "System-versioned temporal tables automatically partition data by dateKey."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "category": "SQL AI Querying & JSON",
    "explanation": "Bảng Temporal (hệ thống phiên bản) theo dõi lịch sử thay đổi nhưng không tự động phân vùng dữ liệu vật lý. Ngoài ra, chỉ mục JSON hoạt động theo đường dẫn cụ thể được khai báo (path-specific). Do $.location.heading không nằm trong danh sách thuộc tính của JSON index, các truy vấn lọc theo heading sẽ bỏ qua index này và thực hiện scan.",
    "tags": [
      "DP-800",
      "Temporal Table",
      "JSON Index",
      "Fabric"
    ]
  },
  {
    "id": "dp42",
    "questionNumber": 42,
    "text": "An application returns phone numbers in the format '+000 000-000-000-0000' stored inside a JSON column named ProfileJson in Azure SQL Database. You need to write a query that returns customer ID and a PhoneNumerals column containing only the digits. How should you structure the query?",
    "options": [
      {
        "key": "A",
        "text": "Extract using JSON_VALUE(ProfileJson, '$.contact.phone') and strip non-digits using REGEXP_REPLACE(PhoneRaw, '[^0-9]', '');"
      },
      {
        "key": "B",
        "text": "Extract using JSON_QUERY(ProfileJson, '$.contact.phone') and clean using REGEXP_SUBSTR(PhoneRaw, '[0-9]+');"
      },
      {
        "key": "C",
        "text": "Extract using OPENJSON and search using REGEXP_LIKE(PhoneRaw, '\\d+');"
      },
      {
        "key": "D",
        "text": "Extract using JSON_VALUE and cast directly to BIGINT."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "category": "SQL AI Querying & JSON",
    "explanation": "JSON_VALUE là hàm chính xác để lấy thuộc tính chuỗi đơn (scalar phone number) từ chuỗi JSON. Để làm sạch chuỗi, ta dùng hàm REGEXP_REPLACE với biểu thức phủ định '[^0-9]' (bất kỳ ký tự nào không phải là chữ số từ 0 đến 9) và thay thế bằng chuỗi rỗng '', chỉ giữ lại các chữ số thô.",
    "tags": [
      "DP-800",
      "JSON_VALUE",
      "REGEXP_REPLACE",
      "Clean Data"
    ]
  },
  {
    "id": "dp43",
    "questionNumber": 43,
    "text": "You deploy Data API Builder (DAB) to Azure Container Apps in front of Azure SQL Database. Users report that /health works, but all queries to the 'Products' entity fail with a connection error. You verify that the login credentials in the connection string are correct. How should you resolve this issue?",
    "options": [
      {
        "key": "A",
        "text": "Create a firewall rule on the Azure SQL logical server that allows a start and end IP address of 0.0.0.0."
      },
      {
        "key": "B",
        "text": "Enable Transparent Data Encryption (TDE) on the database."
      },
      {
        "key": "C",
        "text": "Modify the Container Apps ingress settings to restrict all traffic to internal only."
      },
      {
        "key": "D",
        "text": "Rebuild the DAB container using port 80."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "category": "Data API Builder (DAB)",
    "explanation": "Trong Azure, việc đặt quy tắc tường lửa (firewall rule) có cả IP bắt đầu và kết thúc là 0.0.0.0 là cờ tích hợp đặc biệt kích hoạt tùy chọn 'Allow Azure services and resources to access this server'. Điều này cho phép ứng dụng chạy trong Azure Container Apps kết nối được qua tường lửa vào Azure SQL Database.",
    "tags": [
      "DP-800",
      "DAB",
      "Firewall",
      "Azure Container Apps"
    ]
  },
  {
    "id": "dp44",
    "questionNumber": 44,
    "text": "You have a database role named AppSupport. You need to: 1. Prevent AppSupport from viewing column TaxID in Sales.Customer table. 2. Allow AppSupport to query other columns in Sales.Customer. 3. Allow AppSupport to execute stored procedure Sales.usp_GetCustomerByCustomerId. Which Transact-SQL statements should you run?",
    "options": [
      {
        "key": "A",
        "text": "GRANT SELECT ON Sales.Customer TO AppSupport; DENY SELECT ON Sales.Customer(TaxID) TO AppSupport; GRANT EXECUTE ON Sales.usp_GetCustomerByCustomerId TO AppSupport;"
      },
      {
        "key": "B",
        "text": "GRANT CONTROL ON Sales.Customer TO AppSupport; REVOKE SELECT ON Sales.Customer(TaxID) FROM AppSupport;"
      },
      {
        "key": "C",
        "text": "ALTER ROLE db_datareader ADD MEMBER AppSupport; DENY CONTROL ON Sales.Customer TO AppSupport;"
      },
      {
        "key": "D",
        "text": "GRANT SELECT, EXECUTE ON SCHEMA::Sales TO AppSupport; DENY SELECT ON Sales.Customer TO AppSupport;"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "category": "Database Security & Triggers",
    "explanation": "Quyền DENY cấp cột (column-level DENY) luôn ghi đè lên quyền GRANT cấp bảng. Do đó, việc gán SELECT cấp bảng kết hợp DENY SELECT trên cột TaxID sẽ giúp AppSupport truy vấn được mọi trường ngoại trừ TaxID. Thêm vào đó, ta sử dụng GRANT EXECUTE trực tiếp trên stored procedure để cho phép chạy tác vụ nghiệp vụ.",
    "tags": [
      "DP-800",
      "Security",
      "DENY SELECT",
      "GRANT EXECUTE"
    ]
  },
  {
    "id": "dp45",
    "questionNumber": 45,
    "text": "What is the primary benefit of embedding vectors in SQL databases compared to storing them in external vector-only databases?",
    "options": [
      {
        "key": "A",
        "text": "Faster database backups and reduced storage overhead."
      },
      {
        "key": "B",
        "text": "The ability to run hybrid queries combining vector similarity search and traditional relational SQL (filters, joins) in a single transaction."
      },
      {
        "key": "C",
        "text": "Elimination of the need for index structures like DiskANN."
      },
      {
        "key": "D",
        "text": "Automatic encryption of high-dimensional data at rest."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "category": "SQL AI Querying & JSON",
    "explanation": "Lợi ích cốt lõi của việc tích hợp Vector trực tiếp trong cơ sở dữ liệu quan hệ (như SQL Server 2025 hoặc Azure SQL) là khả năng kết hợp mượt mà phép tìm kiếm tương đồng ngữ nghĩa (VECTOR_SEARCH) với các phép lọc quan hệ, nối bảng (JOIN), phân quyền và transaction ACID trong một câu lệnh duy nhất.",
    "tags": [
      "DP-800",
      "Vector Embedding",
      "Hybrid Search",
      "ACID"
    ]
  },
  {
    "id": "dp46",
    "questionNumber": 46,
    "text": "You have an Azure SQL database named SalesDB and an Azure App Service app named sales-api. You need to: 1. Configure passwordless authentication for sales-api to access SalesDB. 2. Ensure credit card numbers are NOT stored as plain text. What should you recommend?",
    "options": [
      {
        "key": "A",
        "text": "Enable system-assigned Managed Identity with Microsoft Entra ID authentication; and implement Always Encrypted on the credit card column."
      },
      {
        "key": "B",
        "text": "Use SQL logins with passwords stored in Azure Key Vault; and enable Transparent Data Encryption (TDE)."
      },
      {
        "key": "C",
        "text": "Implement Dynamic Data Masking (DDM); and configure a shared access signature key."
      },
      {
        "key": "D",
        "text": "Use active directory integrated logins; and configure row-level security on credit card rows."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "category": "Database Security & Triggers",
    "explanation": "Managed Identity giải quyết triệt để vấn đề passwordless bằng cách xác thực token tự động qua Entra ID. Always Encrypted mã hóa dữ liệu nhạy cảm ngay tại client trước khi gửi xuống cơ sở dữ liệu, đảm bảo số thẻ tín dụng không bao giờ xuất hiện dưới dạng văn bản rõ (plain text) ở cả vùng nhớ động lẫn ổ đĩa lưu trữ.",
    "tags": [
      "DP-800",
      "Managed Identity",
      "Always Encrypted"
    ]
  },
  {
    "id": "dp47",
    "questionNumber": 47,
    "text": "To find the total CPU time consumed across all executions within a specific interval in Query Store, which formula should you use inside your aggregation query?",
    "options": [
      {
        "key": "A",
        "text": "SUM(count_executions * rs.avg_cpu_time)"
      },
      {
        "key": "B",
        "text": "SUM(rs.last_cpu_time / count_executions)"
      },
      {
        "key": "C",
        "text": "SUM(rs.avg_cpu_time + rs.last_cpu_time)"
      },
      {
        "key": "D",
        "text": "SUM(rs.max_cpu_time)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "category": "Query Optimization & Indexes",
    "explanation": "Query Store theo dõi số lần chạy (count_executions) và thời gian CPU trung bình của mỗi lần chạy (avg_cpu_time) trong mỗi khoảng thời gian. Để tính tổng lượng CPU đã tiêu thụ thực tế của một câu truy vấn, ta phải nhân hai giá trị này với nhau và tính tổng (SUM).",
    "tags": [
      "DP-800",
      "Query Store",
      "avg_cpu_time",
      "Performance"
    ]
  },
  {
    "id": "dp48",
    "questionNumber": 48,
    "text": "Query Store strictly records time values using which time standard? How should you look back precisely two hours from the current moment in your queries?",
    "options": [
      {
        "key": "A",
        "text": "Coordinated Universal Time (UTC); use GETUTCDATETIME() to calculate the boundary."
      },
      {
        "key": "B",
        "text": "Local system time; use GETDATE() to calculate the boundary."
      },
      {
        "key": "C",
        "text": "Database server boot time; use sys.dm_os_sys_info."
      },
      {
        "key": "D",
        "text": "Greenwich Mean Time (GMT); use DATEADD(hour, -2, GETDATE())."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "category": "Query Optimization & Indexes",
    "explanation": "Query Store luôn ghi nhận thời gian theo múi giờ chuẩn quốc tế UTC. Vì vậy, để lọc dữ liệu trong vòng 2 giờ qua một cách chuẩn xác, ta bắt buộc phải sử dụng hàm thời gian UTC hệ thống là GETUTCDATETIME() thay vì GETDATE() (vốn trả về thời gian cục bộ của máy chủ).",
    "tags": [
      "DP-800",
      "Query Store",
      "GETUTCDATETIME",
      "UTC"
    ]
  },
  {
    "id": "dp49",
    "questionNumber": 49,
    "text": "You need to deploy reference data to production as part of your CI/CD pipeline. The pipeline can be rerun automatically if a transient failure occurs. How can you ensure the deployment is idempotent and does not create duplicate rows?",
    "options": [
      {
        "key": "A",
        "text": "Add a post-deployment script that inserts reference rows by using IF NOT EXISTS or MERGE logic."
      },
      {
        "key": "B",
        "text": "Restore a complete database backup before each deployment step."
      },
      {
        "key": "C",
        "text": "Store the reference data inside GitHub repository secrets."
      },
      {
        "key": "D",
        "text": "Enable transaction log shipping on the target server."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "category": "CI/CD & Database Projects",
    "explanation": "Sử dụng kịch bản sau triển khai (post-deployment script) đi kèm mệnh đề kiểm tra tồn tại (IF NOT EXISTS) hoặc cú pháp MERGE giúp tiến trình triển khai đạt tính lũy đẳng (idempotent). Khi chạy lại nhiều lần, mã lệnh chỉ bổ sung các dòng còn thiếu hoặc cập nhật các dòng có thay đổi, tránh phát sinh trùng lặp.",
    "tags": [
      "DP-800",
      "CI/CD",
      "Idempotent",
      "Post-Deployment"
    ]
  },
  {
    "id": "dp50",
    "questionNumber": 50,
    "text": "You are configuring a DATABASE SCOPED CREDENTIAL to call an external REST endpoint using a system-assigned Managed Identity. How does the SECRET parameter behave in this security configuration?",
    "options": [
      {
        "key": "A",
        "text": "The SECRET parameter must specify the platform's canonical resource identifier, such as 'resourceid':'https://cognitiveservices.azure.com'."
      },
      {
        "key": "B",
        "text": "The SECRET parameter must contain the cleartext API key of your Azure OpenAI deployment."
      },
      {
        "key": "C",
        "text": "The SECRET parameter is optional and can be left blank."
      },
      {
        "key": "D",
        "text": "The SECRET parameter must contain the base64-encoded client secret of the App Registration."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "category": "Database Security & Triggers",
    "explanation": "Khi dùng Managed Identity, ta không truyền API key hay mật khẩu rõ. Tham số SECRET trong DATABASE SCOPED CREDENTIAL đóng vai trò khai báo URI tài nguyên đích (canonical resource identifier) mà cơ sở dữ liệu SQL cần lấy token truy cập từ Microsoft Entra ID (ví dụ: 'resourceid':'https://cognitiveservices.azure.com').",
    "tags": [
      "DP-800",
      "Credential",
      "Managed Identity",
      "SECRET"
    ]
  }
];
