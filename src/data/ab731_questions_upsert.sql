-- AB-731 question bank: 100 unique questions
-- multiple_choice: 45
-- statement_matrix: 29
-- matching_dropdown: 23
-- matching_drag_drop: 3
-- Safe to run repeatedly. Existing AB-731 rows are updated and stale AB-731 rows are removed.

BEGIN;

INSERT INTO questions (
  id, cert_id, question_number, text, options,
  correct_answers, explanation, category, tags
) VALUES
(
  'ab-731-question-001',
  'ab-731',
  1,
  'Your company manages an online catalog of office supplies. You plan to use a generative AI solution to create product
descriptions for your company’s website. The solution must meet the following requirements:
• Ensure that the descriptions can be posted immediately after they are created.
• Enable the selection and inclusion of product details in each description.
• Be fast and simple for non-technical staff to use.
What is the best type of solution to use?',
  '[{"key":"A","text":"custom Azure Machine Learning model"},{"key":"B","text":"the Researcher agent in Microsoft 365 Copilot"},{"key":"C","text":"an interactive AI agent"},{"key":"D","text":"a fine-tuned large language model (LLM)"}]'::jsonb,
  ARRAY['C']::text[],
  'Tác nhân AI tương tác phù hợp vì có thể hỏi thêm thông tin, cho người dùng chọn chi tiết sản phẩm và tạo mô tả sẵn sàng đăng ngay qua giao diện đơn giản. Mô hình tùy chỉnh hoặc tinh chỉnh sẽ cần nhiều công sức triển khai hơn.',
  'Generative AI and Machine Learning',
  ARRAY['Generative AI and Machine Learning']::text[]
),
(
  'ab-731-question-002',
  'ab-731',
  2,
  'Your company plans to use generative AI to help build a website that will showcase various existing products.
Which capability best describes a benefit of using generative AI for this project?',
  '[{"key":"A","text":"creating product descriptions based on product specifications"},{"key":"B","text":"designing a new product based on customer requirements"},{"key":"C","text":"translating product descriptions into a different language"},{"key":"D","text":"analyzing product sales to identify patterns and trends"}]'::jsonb,
  ARRAY['A']::text[],
  'Generative AI có thế mạnh tạo nội dung mới từ dữ liệu đầu vào. Từ thông số sản phẩm, hệ thống có thể sinh mô tả phù hợp để đưa lên website; đây là giá trị trực tiếp nhất cho yêu cầu của bài toán.',
  'Generative AI and Machine Learning',
  ARRAY['Generative AI and Machine Learning']::text[]
),
(
  'ab-731-question-003',
  'ab-731',
  3,
  'Your company wants to ensure that AI solutions are used responsibly and align with company values and compliance
requirements.
You need to establish governance principles for AI use.
Which two actions should you perform?',
  '[{"key":"A","text":"Allow each department to tailor governance processes for its own AI initiatives."},{"key":"B","text":"Define accountability norms for AI decisions across business and technical teams."},{"key":"C","text":"Create a process to review AI initiatives for responsible AI alignment."},{"key":"D","text":"Assign governance ownership primarily to the AI engineering and data science teams."},{"key":"E","text":"Focus governance efforts on AI systems that handle regulated or sensitive data."}]'::jsonb,
  ARRAY['B', 'C']::text[],
  'Quản trị AI cần quy định rõ ai chịu trách nhiệm cho từng quyết định và có quy trình rà soát các sáng kiến theo nguyên tắc Responsible AI. Chỉ giao cho nhóm kỹ thuật hoặc để từng phòng ban tự đặt quy tắc sẽ thiếu tính nhất quán và giám sát liên chức năng.',
  'Responsible AI and Governance',
  ARRAY['Responsible AI and Governance']::text[]
),
(
  'ab-731-question-004',
  'ab-731',
  4,
  'For each statement, select Yes if it is true; otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"Using incomplete or poor-quality data during generative AI model training can increase costs.","correctAnswer":"Yes"},{"id":"2","text":"AI models rely on training data to learn patterns and identify relationships to produce outputs.","correctAnswer":"Yes"},{"id":"3","text":"Generative AI models trained on non-representative datasets can produce inaccurate or unbalanced results.","correctAnswer":"Yes"}],"choices":[]}'::jsonb,
  ARRAY['1:Yes', '2:Yes', '3:Yes']::text[],
  'Dữ liệu thiếu hoặc kém chất lượng làm tăng chi phí làm sạch, huấn luyện lại và sửa lỗi. Mô hình học mẫu và quan hệ từ dữ liệu huấn luyện; nếu dữ liệu không đại diện, kết quả có thể sai lệch hoặc mất cân bằng. Vì vậy cả ba nhận định đều đúng.',
  'Generative AI and Machine Learning',
  ARRAY['Generative AI and Machine Learning']::text[]
),
(
  'ab-731-question-005',
  'ab-731',
  5,
  'Your company plans to use generative AI to help summarize and analyze internal business documents.
You need to recommend a solution to prevent generative AI from accessing confidential or classified information. What
should you include in the recommendation?',
  '[{"key":"A","text":"an information barrier (IB) policy"},{"key":"B","text":"communication monitoring"},{"key":"C","text":"a data retention policy"},{"key":"D","text":"data governance"}]'::jsonb,
  ARRAY['D']::text[],
  'Data governance xác định cách phân loại, cấp quyền, bảo vệ và kiểm soát vòng đời dữ liệu. Nhờ đó nguồn bí mật hoặc phân loại có thể bị loại khỏi phạm vi mà giải pháp generative AI được phép truy cập; các chính sách lưu giữ hay giám sát liên lạc không giải quyết đầy đủ quyền truy cập dữ liệu.',
  'Responsible AI and Governance',
  ARRAY['Responsible AI and Governance']::text[]
),
(
  'ab-731-question-006',
  'ab-731',
  6,
  'Your company sells hiking and camping gear online.
You need a generative AI solution that can interact with customers and ask questions about their needs. What should you
include in the solution?',
  '[{"key":"A","text":"a chatbot"},{"key":"B","text":"predictive AI"},{"key":"C","text":"computer vision"},{"key":"D","text":"a recommendation engine"}]'::jsonb,
  ARRAY['A']::text[],
  'Chatbot hỗ trợ hội thoại hai chiều, đặt câu hỏi làm rõ nhu cầu và phản hồi theo ngữ cảnh. Predictive AI, computer vision hay recommendation engine không tự cung cấp trải nghiệm hội thoại tương tác hoàn chỉnh.',
  'Generative AI and Machine Learning',
  ARRAY['Generative AI and Machine Learning']::text[]
),
(
  'ab-731-question-007',
  'ab-731',
  7,
  'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Select the answer that correctly completes the sentence.","correctAnswer":"1=B"}],"choices":[{"key":"A","text":"Azure AI Search"},{"key":"B","text":"Microsoft Graph"},{"key":"C","text":"Microsoft Purview"},{"key":"D","text":"Microsoft SharePoint"}]}'::jsonb,
  ARRAY['1=1=B']::text[],
  'Microsoft 365 Copilot connectors đưa và lập chỉ mục nội dung bên ngoài vào Microsoft Graph. Copilot sau đó có thể tìm kiếm, tóm tắt và suy luận trên dữ liệu nghiệp vụ bằng ngôn ngữ tự nhiên, đồng thời vẫn áp dụng quyền truy cập hiện có.',
  'Microsoft 365 Copilot and Copilot Studio',
  ARRAY['Microsoft 365 Copilot and Copilot Studio']::text[]
),
(
  'ab-731-question-008',
  'ab-731',
  8,
  'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Select the answer that correctly completes the sentence.","correctAnswer":"1=B"}],"choices":[{"key":"A","text":"Batch API"},{"key":"B","text":"Provisioned (PTUs)"},{"key":"C","text":"Standard (On-Demand)"}]}'::jsonb,
  ARRAY['1=1=B']::text[],
  'Provisioned Throughput Units dành trước năng lực xử lý, phù hợp với khối lượng lớn, liên tục và cần hiệu năng dự đoán được. Standard theo nhu cầu phù hợp hơn khi tải biến động hoặc mới thử nghiệm.',
  'AI Adoption Strategy Licensing and Cost',
  ARRAY['AI Adoption Strategy Licensing and Cost']::text[]
),
(
  'ab-731-question-009',
  'ab-731',
  9,
  'For each statement, select Yes if it is true; otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"Microsoft Copilot in Outlook can automatically send follow-up replies to emails.","correctAnswer":"No"},{"id":"2","text":"Microsoft Copilot in Outlook can identify and surface tasks mentioned in your emails.","correctAnswer":"Yes"},{"id":"3","text":"Microsoft Copilot in Outlook can summarize long email threads and highlight action items and deadlines.","correctAnswer":"Yes"}],"choices":[]}'::jsonb,
  ARRAY['1:No', '2:Yes', '3:Yes']::text[],
  'Copilot trong Outlook có thể nhận diện công việc được nhắc tới và tóm tắt chuỗi email kèm hành động, thời hạn. Copilot không tự ý gửi thư trả lời tiếp theo mà không có sự kiểm soát hoặc xác nhận của người dùng.',
  'Microsoft 365 Copilot and Copilot Studio',
  ARRAY['Microsoft 365 Copilot and Copilot Studio']::text[]
),
(
  'ab-731-question-010',
  'ab-731',
  10,
  'You have a business unit that uses an AI solution to process loan applications.
You discover that the solution rejects the application of all applicants that are older than 60 years of age. Which Microsoft
responsible AI principle is this violating?',
  '[{"key":"A","text":"accountability"},{"key":"B","text":"transparency"},{"key":"C","text":"reliability and safety"},{"key":"D","text":"fairness"}]'::jsonb,
  ARRAY['D']::text[],
  'Từ chối toàn bộ hồ sơ chỉ vì người nộp đơn trên 60 tuổi tạo ra đối xử bất lợi dựa trên tuổi. Đây là vi phạm nguyên tắc fairness vì kết quả không công bằng giữa các nhóm người dùng.',
  'Responsible AI and Governance',
  ARRAY['Responsible AI and Governance']::text[]
),
(
  'ab-731-question-011',
  'ab-731',
  11,
  'Match the Microsoft responsible AI principles to the descriptions.',
  '{"type":"matching_drag_drop","statements":[{"id":"1","text":"Protect personal information and apply strong safeguards to keep data secure.","correctAnswer":"C"},{"id":"2","text":"Make AI solutions understandable by explaining how and why decisions are made.","correctAnswer":"E"},{"id":"3","text":"Design AI solutions that are accessible to people of all abilities and experiences.","correctAnswer":"D"},{"id":"4","text":"Involve human oversight in the control of AI solutions.","correctAnswer":"F"}],"choices":[{"key":"A","text":"Fairness"},{"key":"B","text":"Reliability and safety"},{"key":"C","text":"Privacy and security"},{"key":"D","text":"Inclusiveness"},{"key":"E","text":"Transparency"},{"key":"F","text":"Accountability"}]}'::jsonb,
  ARRAY['1=C', '2=E', '3=D', '4=F']::text[],
  'Privacy and security bảo vệ thông tin cá nhân; Transparency giải thích cách và lý do AI đưa ra quyết định; Inclusiveness bảo đảm khả năng tiếp cận cho nhiều nhóm người dùng; Accountability yêu cầu con người chịu trách nhiệm và giám sát hệ thống.',
  'Responsible AI and Governance',
  ARRAY['Responsible AI and Governance']::text[]
),
(
  'ab-731-question-012',
  'ab-731',
  12,
  'For each statement, select Yes if it is true; otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"Retrieval Augmented Generation (RAG) architectures require that a large language model (LLM) be retrained on proprietary data.","correctAnswer":"No"},{"id":"2","text":"Retrieval-Augmented Generation (RAG) grounds a language model to produce more factual and context-relevant responses.","correctAnswer":"Yes"},{"id":"3","text":"Retrieval Augmented Generation (RAG) retrieves information from external knowledge sources at runtime instead of relying solely on the knowledge of a generative AI model.","correctAnswer":"Yes"}],"choices":[]}'::jsonb,
  ARRAY['1:No', '2:Yes', '3:Yes']::text[],
  'RAG không yêu cầu huấn luyện lại LLM bằng dữ liệu độc quyền. Nó truy xuất nguồn tri thức bên ngoài tại thời điểm chạy rồi đưa ngữ cảnh đó vào prompt, giúp câu trả lời cập nhật, có căn cứ và phù hợp hơn.',
  'Generative AI and Machine Learning',
  ARRAY['Generative AI and Machine Learning']::text[]
),
(
  'ab-731-question-013',
  'ab-731',
  13,
  'Your company is deploying Microsoft 365 Copilot. The deployment must provide users with access to the Researcher
agent to search across data in Microsoft SharePoint.
You need to recommend a licensing plan for the solution. What should you recommend?',
  '[{"key":"A","text":"a Microsoft 365 Copilot per-user add-on license"},{"key":"B","text":"pay-as-you-go"},{"key":"C","text":"a Microsoft 365 subscription entitlement"},{"key":"D","text":"ausage-based consumption license in Azure"}]'::jsonb,
  ARRAY['A']::text[],
  'Researcher sử dụng dữ liệu công việc trong Microsoft 365 và là năng lực nâng cao của Microsoft 365 Copilot. Vì vậy người dùng cần giấy phép bổ trợ Microsoft 365 Copilot theo người dùng, không chỉ gói Microsoft 365 cơ bản.',
  'Microsoft 365 Copilot and Copilot Studio',
  ARRAY['Microsoft 365 Copilot and Copilot Studio']::text[]
),
(
  'ab-731-question-014',
  'ab-731',
  14,
  'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Select the answer that correctly completes the sentence.","correctAnswer":"1=D"}],"choices":[{"key":"A","text":"creates visual dashboards from structured data in Microsoft Excel and Power BI."},{"key":"B","text":"generates a pivot table and performs time series forecasting."},{"key":"C","text":"performs complex, multi-step, data analysis and code execution tasks over arbitrary datasets."},{"key":"D","text":"uses reasoning capabilities to generate deep insights based on organizational data and the web."}]}'::jsonb,
  ARRAY['1=1=D']::text[],
  'Researcher được thiết kế cho nghiên cứu chuyên sâu: lập kế hoạch nhiều bước, suy luận và tổng hợp thông tin từ dữ liệu tổ chức lẫn web. Các tác vụ phân tích bảng, dự báo và biểu đồ phù hợp hơn với Analyst.',
  'Microsoft 365 Copilot and Copilot Studio',
  ARRAY['Microsoft 365 Copilot and Copilot Studio']::text[]
),
(
  'ab-731-question-015',
  'ab-731',
  15,
  'You plan to meet with a group of stakeholders to discuss how generative AI can benefit your company.
You need to provide the stakeholders with a relevant description of generative AI during the meeting. Which description
should you use?',
  '[{"key":"A","text":"Generative AI is designed to generate responses based on a user’s natural language prompts."},{"key":"B","text":"Generative AI is designed to translate documents into other languages."},{"key":"C","text":"Generative AI is designed to predict future trends based on historical data."},{"key":"D","text":"Generative AI is designed to recommend products based on user behavior."}]'::jsonb,
  ARRAY['A']::text[],
  'Generative AI nhận chỉ dẫn bằng ngôn ngữ tự nhiên và tạo phản hồi hoặc nội dung mới dựa trên prompt. Đây là đặc điểm cốt lõi phân biệt nó với các mô hình chỉ phân loại hay dự báo.',
  'Generative AI and Machine Learning',
  ARRAY['Generative AI and Machine Learning']::text[]
),
(
  'ab-731-question-016',
  'ab-731',
  16,
  'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Select the answer that correctly completes the sentence.","correctAnswer":"1=C"}],"choices":[{"key":"A","text":"storage capacity required for AI data."},{"key":"B","text":"training time required for generative AI models."},{"key":"C","text":"accuracy and relevance of AI-generated responses."}]}'::jsonb,
  ARRAY['1=1=C']::text[],
  'Prompt rõ mục tiêu, ngữ cảnh, ràng buộc và định dạng mong muốn giúp mô hình hiểu đúng yêu cầu, nên tăng độ chính xác và liên quan của phản hồi. Prompt engineering không làm tăng dung lượng lưu trữ hay thời gian huấn luyện mô hình.',
  'Generative AI and Machine Learning',
  ARRAY['Generative AI and Machine Learning']::text[]
),
(
  'ab-731-question-017',
  'ab-731',
  17,
  'Your company uses a generative AI solution.
You need to improve the quality of responses by using grounding.
Which statement accurately describes how grounding improves accuracy and relevancy?',
  '[{"key":"A","text":"references a diverse set of people, disciplines, and perspectives"},{"key":"B","text":"explains how and why AI models generate content"},{"key":"C","text":"anchors the responses in specific data sources"},{"key":"D","text":"specifies the strengths and weaknesses of the AI model"}]'::jsonb,
  ARRAY['C']::text[],
  'Grounding neo câu trả lời vào nguồn dữ liệu cụ thể và đáng tin cậy. Việc cung cấp ngữ cảnh có thẩm quyền giúp giảm nội dung bịa đặt và làm cho kết quả dễ kiểm chứng hơn.',
  'Generative AI and Machine Learning',
  ARRAY['Generative AI and Machine Learning']::text[]
),
(
  'ab-731-question-018',
  'ab-731',
  18,
  'Your company uses Microsoft 365 Copilot.
You identify several business processes that require custom workflows and specialized automation.
You need to recommend a solution that extends Copilot capabilities while minimizing development effort and costs.
What should you recommend?',
  '[{"key":"A","text":"Create an agent by using Microsoft Foundry."},{"key":"B","text":"Deploy a Copilot connector."},{"key":"C","text":"Build a custom agent by using the full experience of Microsoft Copilot Studio."},{"key":"D","text":"Build a declarative agent by using the lite experience of Microsoft Copilot Studio."}]'::jsonb,
  ARRAY['D']::text[],
  'Lite experience của Microsoft Copilot Studio cho phép tạo declarative agent nhanh bằng cấu hình và hướng dẫn, phù hợp khi muốn mở rộng Microsoft 365 Copilot mà không xây dựng giải pháp mã tùy chỉnh phức tạp.',
  'Microsoft 365 Copilot and Copilot Studio',
  ARRAY['Microsoft 365 Copilot and Copilot Studio']::text[]
),
(
  'ab-731-question-019',
  'ab-731',
  19,
  'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Select the answer that correctly completes the sentence.","correctAnswer":"1=D"}],"choices":[{"key":"A","text":"compiles background research for a new market or initiative."},{"key":"B","text":"enables you to generate audio summaries of select references."},{"key":"C","text":"uses a conversational agent to answer employee FAQs."},{"key":"D","text":"uses structured data and provides insights by using text, charts, tables, and other visuals."}]}'::jsonb,
  ARRAY['1=1=D']::text[],
  'Analyst chuyên làm việc với dữ liệu có cấu trúc, thực hiện phân tích và trình bày kết quả bằng văn bản, bảng, biểu đồ cùng các trực quan khác. Researcher tập trung nhiều hơn vào tổng hợp nghiên cứu từ nhiều nguồn.',
  'Microsoft 365 Copilot and Copilot Studio',
  ARRAY['Microsoft 365 Copilot and Copilot Studio']::text[]
),
(
  'ab-731-question-020',
  'ab-731',
  20,
  'For each statement, select Yes if it is true; otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"A manufacturer can use Azure Vision in Foundry Tools to identify product defects on an assembly line.","correctAnswer":"Yes"},{"id":"2","text":"A logistics company can use Azure Vision in Foundry Tools to recognize package shipping labels.","correctAnswer":"Yes"},{"id":"3","text":"The HR department at your company can only use Azure Vision in Foundry Tools to extract written content from Microsoft Word files.","correctAnswer":"No"}],"choices":[]}'::jsonb,
  ARRAY['1:Yes', '2:Yes', '3:No']::text[],
  'Azure Vision có thể phân tích hình ảnh để phát hiện lỗi sản phẩm và nhận dạng nội dung trên nhãn vận chuyển. Việc trích xuất nội dung có cấu trúc từ tài liệu Word không phải khả năng duy nhất của Vision và thường phù hợp hơn với Document Intelligence.',
  'Microsoft Foundry and Foundry Tools',
  ARRAY['Microsoft Foundry and Foundry Tools']::text[]
),
(
  'ab-731-question-021',
  'ab-731',
  21,
  'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Select the answer that correctly completes the sentence.","correctAnswer":"1=A"}],"choices":[{"key":"A","text":"Azure Language in Foundry Tools"},{"key":"B","text":"Azure AI Search"},{"key":"C","text":"Azure Vision in Foundry Tools"},{"key":"D","text":"Azure Document Intelligence in Foundry Tools"}]}'::jsonb,
  ARRAY['1=1=A']::text[],
  'Azure Language có tính năng nhận diện PII trong văn bản và có thể trả về nội dung đã che hoặc loại bỏ thông tin nhạy cảm. Azure AI Search dùng để truy xuất; Vision và Document Intelligence tập trung vào hình ảnh, biểu mẫu và tài liệu.',
  'Microsoft Foundry and Foundry Tools',
  ARRAY['Microsoft Foundry and Foundry Tools']::text[]
),
(
  'ab-731-question-022',
  'ab-731',
  22,
  'For each statement, select Yes if it is true; otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"Microsoft 365 Copilot can help users compose professional emails and summarize conversations.","correctAnswer":"Yes"},{"id":"2","text":"When prompted, Microsoft 365 Copilot can autonomously update a spreadsheet that contains sales data.","correctAnswer":"No"},{"id":"3","text":"Microsoft 365 Copilot can summarize recent updates in business documents, spreadsheets, and presentations.","correctAnswer":"Yes"}],"choices":[]}'::jsonb,
  ARRAY['1:Yes', '2:No', '3:Yes']::text[],
  'Microsoft 365 Copilot hỗ trợ soạn email, tóm tắt hội thoại và tổng hợp cập nhật trong tài liệu, bảng tính, bài trình bày. Nó không tự trị sửa bảng tính chỉ vì được nhắc; thao tác thay đổi vẫn cần ngữ cảnh ứng dụng và sự kiểm soát của người dùng.',
  'Microsoft 365 Copilot and Copilot Studio',
  ARRAY['Microsoft 365 Copilot and Copilot Studio']::text[]
),
(
  'ab-731-question-023',
  'ab-731',
  23,
  'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Select the answer that correctly completes the sentence.","correctAnswer":"1=D"}],"choices":[{"key":"A","text":"data classification"},{"key":"B","text":"data compliance"},{"key":"C","text":"data loss prevention (DLP)"},{"key":"D","text":"data security"}]}'::jsonb,
  ARRAY['1=1=D']::text[],
  'Nguyên tắc đặc quyền tối thiểu giới hạn người dùng và Copilot chỉ được truy cập dữ liệu cần thiết. Đây là kiểm soát data security vì nó trực tiếp quản lý quyền và ngăn truy cập trái phép.',
  'Microsoft 365 Copilot and Copilot Studio',
  ARRAY['Microsoft 365 Copilot and Copilot Studio']::text[]
),
(
  'ab-731-question-024',
  'ab-731',
  24,
  'For each statement, select Yes if it is true; otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"Generative AI can be used in the automation of complex workflows.","correctAnswer":"Yes"},{"id":"2","text":"Generative AI can be used to generate new content, such as text, images, and music.","correctAnswer":"Yes"},{"id":"3","text":"Generative AI is best suited to perform mathematical calculations and solve equations.","correctAnswer":"No"}],"choices":[]}'::jsonb,
  ARRAY['1:Yes', '2:Yes', '3:No']::text[],
  'Generative AI có thể tạo nội dung mới và tham gia tự động hóa quy trình phức tạp thông qua agent hoặc tích hợp công cụ. Nó không phải lựa chọn tối ưu cho phép tính xác định, nơi công cụ tính toán truyền thống đáng tin cậy hơn.',
  'Generative AI and Machine Learning',
  ARRAY['Generative AI and Machine Learning']::text[]
),
(
  'ab-731-question-025',
  'ab-731',
  25,
  'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Select the answer that correctly completes the sentence.","correctAnswer":"1=C"}],"choices":[{"key":"A","text":"ensure that AI models deliver consistent and equitable results."},{"key":"B","text":"help organizations increase trust in fully autonomous AI systems."},{"key":"C","text":"promote the ethical and accountable use of AI."},{"key":"D","text":"standardize model development practices across AI teams."}]}'::jsonb,
  ARRAY['1=1=C']::text[],
  'Các nguyên tắc Responsible AI hướng tổ chức sử dụng AI một cách có đạo đức, minh bạch và có trách nhiệm. Chúng là khung quản trị rủi ro, không bảo đảm tuyệt đối mọi kết quả luôn công bằng hay biến hệ thống thành hoàn toàn tự trị.',
  'Responsible AI and Governance',
  ARRAY['Responsible AI and Governance']::text[]
),
(
  'ab-731-question-026',
  'ab-731',
  26,
  'Your company has a Microsoft 365 subscription and uses Microsoft 365 Copilot Chat. Some users need to build and
use declarative agents that can access work data.
Which type of license should you recommend for the users?',
  '[{"key":"A","text":"a Microsoft 365 Copilot add-on license"},{"key":"B","text":"Microsoft Copilot Studio user license"},{"key":"C","text":"a Copilot Chat pay-as-you-go plan"}]'::jsonb,
  ARRAY['A']::text[],
  'Declarative agent truy cập dữ liệu công việc dựa trên các khả năng của Microsoft 365 Copilot. Người dùng vì vậy cần giấy phép bổ trợ Microsoft 365 Copilot, thay vì chỉ có Microsoft 365 Copilot Chat cơ bản.',
  'Microsoft 365 Copilot and Copilot Studio',
  ARRAY['Microsoft 365 Copilot and Copilot Studio']::text[]
),
(
  'ab-731-question-027',
  'ab-731',
  27,
  'For each statement, select Yes if it is true; otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"Microsoft Foundry helps organizations securely build and manage generative AI solutions in a governed environment.","correctAnswer":"Yes"},{"id":"2","text":"Microsoft Foundry provides built-in scalability to enable organizations to expand AI workloads as usage increases.","correctAnswer":"Yes"},{"id":"3","text":"Microsoft Foundry can be used for image recognition and computer vision tasks.","correctAnswer":"Yes"}],"choices":[]}'::jsonb,
  ARRAY['1:Yes', '2:Yes', '3:Yes']::text[],
  'Microsoft Foundry cung cấp môi trường được quản trị để xây dựng và vận hành giải pháp AI, có khả năng mở rộng theo tải. Nền tảng cũng tích hợp các mô hình và Foundry Tools cho thị giác máy tính, nên cả ba nhận định đều đúng.',
  'Microsoft Foundry and Foundry Tools',
  ARRAY['Microsoft Foundry and Foundry Tools']::text[]
),
(
  'ab-731-question-028',
  'ab-731',
  28,
  'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Select the answer that correctly completes the sentence.","correctAnswer":"1=D"}],"choices":[{"key":"A","text":"integrating AI-powered tools into business workflows."},{"key":"B","text":"identifying and fixing errors in AI-generated content."},{"key":"C","text":"designing, developing, and training generative AI models to produce contextually relevant content."},{"key":"D","text":"crafting clear instructions to guide generative AI solutions in generating context-appropriate content."}]}'::jsonb,
  ARRAY['1=1=D']::text[],
  'Prompt engineering là việc thiết kế chỉ dẫn rõ ràng để điều khiển mô hình tạo nội dung đúng ngữ cảnh và mục tiêu. Nó không phải quá trình huấn luyện mô hình hay chỉ sửa lỗi sau khi nội dung đã được sinh ra.',
  'Generative AI and Machine Learning',
  ARRAY['Generative AI and Machine Learning']::text[]
),
(
  'ab-731-question-029',
  'ab-731',
  29,
  'Your company plans to build a generative AI solution based on internal data.
You recommend using Microsoft Foundry as a starting point to develop and manage the solution. What is a key benefit of
using Microsoft Foundry for this project?',
  '[{"key":"A","text":"Provides a scalable platform for developing and deploying generative AI solutions."},{"key":"B","text":"Removes the need to select or configure the underlying AI model."},{"key":"C","text":"Enables business users to build generative AI solutions."},{"key":"D","text":"Offers a low-code platform for developing generative AI solutions."}]'::jsonb,
  ARRAY['A']::text[],
  'Microsoft Foundry cung cấp nền tảng hợp nhất để chọn mô hình, phát triển, đánh giá, triển khai và quản lý giải pháp AI. Khả năng quản trị và mở rộng giúp bắt đầu từ dữ liệu nội bộ rồi đưa giải pháp lên quy mô sản xuất.',
  'Microsoft Foundry and Foundry Tools',
  ARRAY['Microsoft Foundry and Foundry Tools']::text[]
),
(
  'ab-731-question-030',
  'ab-731',
  30,
  'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Select the answer that correctly completes the sentence.","correctAnswer":"1=B"}],"choices":[{"key":"A","text":"to analyze trends and classify data sources."},{"key":"B","text":"to create new content, such as text, images, or code."},{"key":"C","text":"to make predictions based on historical data."}]}'::jsonb,
  ARRAY['1=1=B']::text[],
  'Mục tiêu chính của generative AI là tạo ra nội dung mới như văn bản, hình ảnh hoặc mã. Phân loại và dự báo là các bài toán điển hình của predictive hoặc machine learning truyền thống.',
  'Generative AI and Machine Learning',
  ARRAY['Generative AI and Machine Learning']::text[]
),
(
  'ab-731-question-031',
  'ab-731',
  31,
  'Your company uses generative AI to assist with content creation and customer interactions.
You need to evaluate whether Azure Machine Learning can add value to the current customer management. For which use
case should you use Machine Learning?',
  '[{"key":"A","text":"predicting customer retention"},{"key":"B","text":"creating product descriptions from images"},{"key":"C","text":"generating marketing campaigns"},{"key":"D","text":"summarizing customer service transcripts"}]'::jsonb,
  ARRAY['A']::text[],
  'Dự đoán khả năng giữ chân khách hàng là bài toán học từ dữ liệu lịch sử để ước lượng kết quả tương lai, phù hợp với Azure Machine Learning. Soạn nội dung và hội thoại là phần mà generative AI đã đảm nhiệm.',
  'Generative AI and Machine Learning',
  ARRAY['Generative AI and Machine Learning']::text[]
),
(
  'ab-731-question-032',
  'ab-731',
  32,
  'For each statement, select Yes if it is true; otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"Lack of trust in the security and accuracy of AI solutions is a common barrier to AI adoption.","correctAnswer":"Yes"},{"id":"2","text":"AI adoption efforts often fail when organizations overlook the importance of high-quality data.","correctAnswer":"Yes"},{"id":"3","text":"AI adoption is most successful when implemented with business and compliance stakeholders.","correctAnswer":"Yes"}],"choices":[]}'::jsonb,
  ARRAY['1:Yes', '2:Yes', '3:Yes']::text[],
  'Thiếu niềm tin, dữ liệu kém chất lượng và thiếu sự tham gia của khối kinh doanh hoặc tuân thủ đều là rào cản phổ biến. Chuyển đổi AI thành công cần use case rõ ràng, dữ liệu tốt và hợp tác liên chức năng, nên cả ba nhận định đều đúng.',
  'AI Adoption Strategy Licensing and Cost',
  ARRAY['AI Adoption Strategy Licensing and Cost']::text[]
),
(
  'ab-731-question-033',
  'ab-731',
  33,
  'Your company plans to use an AI-powered solution to analyze customer feedback for insights related to future product
designs.
You need to mitigate the privacy risks associated with the solution.
What is the best approach to achieve the goal?',
  '[{"key":"A","text":"Delete all the feedback data immediately after analysis."},{"key":"B","text":"Ensure that feedback is attributable to the customer so that it can be deleted upon request."},{"key":"C","text":"Limit privacy reviews to the final stage of the AI project lifecycle."},{"key":"D","text":"Anonymize the source data to remove customer Personally Identifiable Information (PII) from the feedback."}]'::jsonb,
  ARRAY['D']::text[],
  'Ẩn danh PII trước khi phân tích giúp giảm khả năng nhận dạng khách hàng nhưng vẫn giữ được nội dung cần thiết để tìm insight. Đây là biện pháp giảm thiểu quyền riêng tư trực tiếp tại nguồn dữ liệu.',
  'Responsible AI and Governance',
  ARRAY['Responsible AI and Governance']::text[]
),
(
  'ab-731-question-034',
  'ab-731',
  34,
  'Your company creates a custom Azure Machine Learning model that uses a generative AI assistant.
The model initially delivers strong results. However, six months later, the model predictions become noticeably less
accurate.
What is a possible cause of the issue?',
  '[{"key":"A","text":"The model requires additional compute resources."},{"key":"B","text":"The input data changed over time."},{"key":"C","text":"The model was trained incorrectly."}]'::jsonb,
  ARRAY['B']::text[],
  'Khi phân phối hoặc đặc điểm dữ liệu đầu vào thay đổi theo thời gian, mô hình có thể gặp data drift và độ chính xác giảm. Cần theo dõi hiệu năng, phát hiện drift và huấn luyện hoặc hiệu chỉnh lại khi cần.',
  'Generative AI and Machine Learning',
  ARRAY['Generative AI and Machine Learning']::text[]
),
(
  'ab-731-question-035',
  'ab-731',
  35,
  'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Select the answer that correctly completes the sentence.","correctAnswer":"1=A"}],"choices":[{"key":"A","text":"Azure Machine Learning"},{"key":"B","text":"Azure AI Search"},{"key":"C","text":"Azure OpenAI"},{"key":"D","text":"Microsoft Foundry"}]}'::jsonb,
  ARRAY['1=1=A']::text[],
  'Azure Machine Learning hỗ trợ chuẩn bị dữ liệu, huấn luyện, đánh giá và triển khai mô hình dự báo. Dự báo nhu cầu từ doanh số lịch sử là một use case machine learning điển hình.',
  'Generative AI and Machine Learning',
  ARRAY['Generative AI and Machine Learning']::text[]
),
(
  'ab-731-question-036',
  'ab-731',
  36,
  'Your company uses a non-reasoning generative AI model to create textual content.
You discover that the model''s responses are inconsistent and do NOT meet expectations. You need to improve the prompts.
What should you do?',
  '[{"key":"A","text":"Provide the prompts with extensive examples of the expected output."},{"key":"B","text":"Add the context, sources, and expectations to the prompts."},{"key":"C","text":"Use technical terms in the prompts to enhance AI comprehension."},{"key":"D","text":"Add only a single concise requirement to the prompts."}]'::jsonb,
  ARRAY['B']::text[],
  'Mô hình không reasoning phụ thuộc nhiều vào prompt rõ ràng. Bổ sung ngữ cảnh, nguồn tham chiếu và kỳ vọng đầu ra làm giảm mơ hồ, giúp phản hồi nhất quán và sát yêu cầu hơn.',
  'Generative AI and Machine Learning',
  ARRAY['Generative AI and Machine Learning']::text[]
),
(
  'ab-731-question-037',
  'ab-731',
  37,
  'You have a historical dataset that contains 1,000 records.
You need an AI solution that can analyze the data to identify patterns and predict future outcomes. What should you include
in the solution?',
  '[{"key":"A","text":"Microsoft Foundry"},{"key":"B","text":"Azure Document Intelligence in Foundry Tools"},{"key":"C","text":"Azure Machine Learning"},{"key":"D","text":"Azure Content Understanding in Foundry Tools"}]'::jsonb,
  ARRAY['C']::text[],
  'Azure Machine Learning phù hợp để phân tích dữ liệu lịch sử, học các mẫu và dự đoán kết quả tương lai. Azure AI Search hay các dịch vụ tạo sinh không thay thế quy trình huấn luyện mô hình dự báo tùy chỉnh.',
  'Generative AI and Machine Learning',
  ARRAY['Generative AI and Machine Learning']::text[]
),
(
  'ab-731-question-038',
  'ab-731',
  38,
  'For each statement, select Yes if it is true; otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"Microsoft Copilot provides a single AI app that has identical features and experiences across all Microsoft products.","correctAnswer":"No"},{"id":"2","text":"Microsoft 365 Copilot delivers AI capabilities for business users that use Microsoft 365 apps.","correctAnswer":"Yes"},{"id":"3","text":"Microsoft Security Copilot helps companies understand risks and the organizational security posture.","correctAnswer":"Yes"}],"choices":[]}'::jsonb,
  ARRAY['1:No', '2:Yes', '3:Yes']::text[],
  'Các sản phẩm Copilot không có trải nghiệm và chức năng hoàn toàn giống nhau. Microsoft 365 Copilot phục vụ người dùng trong các ứng dụng Microsoft 365, còn Security Copilot hỗ trợ phân tích rủi ro và tư thế bảo mật của tổ chức.',
  'Microsoft 365 Copilot and Copilot Studio',
  ARRAY['Microsoft 365 Copilot and Copilot Studio']::text[]
),
(
  'ab-731-question-039',
  'ab-731',
  39,
  'Your company plans to adopt AI across multiple business units.
You need to ensure that all AI projects align with the company’s business strategy and are implemented responsibly.
What is the best approach to achieve the goal?',
  '[{"key":"A","text":"Allow each department to deploy its own AI tools and workflows."},{"key":"B","text":"Delegate AI decision-making to the company’s IT department."},{"key":"C","text":"Outsource AI development to an external vendor."},{"key":"D","text":"Establish an AI council to provide guidance, oversight, and coordination."}]'::jsonb,
  ARRAY['D']::text[],
  'AI council tạo cơ chế liên chức năng để định hướng chiến lược, giám sát và phối hợp các sáng kiến AI. Nhờ đó dự án giữa nhiều đơn vị kinh doanh vẫn thống nhất với mục tiêu và nguyên tắc Responsible AI.',
  'Responsible AI and Governance',
  ARRAY['Responsible AI and Governance']::text[]
),
(
  'ab-731-question-040',
  'ab-731',
  40,
  'Your company stores hundreds of internal business reports.
You need to recommend a generative AI solution that uses an agent to answer questions based on the content in the
reports.
What should you include in the recommendation?',
  '[{"key":"A","text":"natural language processing"},{"key":"B","text":"Azure Machine Learning"},{"key":"C","text":"Retrieval Augmented Generation (RAG)"},{"key":"D","text":"Generative Adversarial Network (GAN)"}]'::jsonb,
  ARRAY['C']::text[],
  'RAG truy xuất các đoạn liên quan từ kho báo cáo nội bộ rồi đưa chúng vào ngữ cảnh cho agent. Cách này giúp câu trả lời bám sát tài liệu tổ chức mà không phải huấn luyện lại mô hình nền.',
  'Generative AI and Machine Learning',
  ARRAY['Generative AI and Machine Learning']::text[]
),
(
  'ab-731-question-041',
  'ab-731',
  41,
  'Recommend a prebuilt AI capability for each task.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Extract information from invoices and credit notes.","correctAnswer":"B","choiceKeys":["A","B","C"]},{"id":"2","text":"Identify discussion topics in customer service call recordings.","correctAnswer":"E","choiceKeys":["D","E","B"]},{"id":"3","text":"Detect customer sentiment and opinions.","correctAnswer":"F","choiceKeys":["F","C","B"]}],"choices":[{"key":"A","text":"Azure AI Search"},{"key":"B","text":"Azure Document Intelligence in Foundry Tools"},{"key":"C","text":"Azure Machine Learning"},{"key":"D","text":"Azure Content Understanding in Foundry Tools"},{"key":"E","text":"Azure Speech in Foundry Tools"},{"key":"F","text":"Azure Language in Foundry Tools"}]}'::jsonb,
  ARRAY['1=B', '2=E', '3=F']::text[],
  'Document Intelligence trích xuất trường từ hóa đơn; Speech xử lý bản ghi cuộc gọi để chuyển lời nói thành dữ liệu có thể phân tích; Language nhận diện cảm xúc và ý kiến trong văn bản. Mỗi công cụ được ghép với loại dữ liệu và nhiệm vụ phù hợp.',
  'Microsoft Foundry and Foundry Tools',
  ARRAY['Microsoft Foundry and Foundry Tools']::text[]
),
(
  'ab-731-question-042',
  'ab-731',
  42,
  'Your company sells hiking and camping gear online.
You need a generative AI solution that can interact with customers, ask questions about their needs, and escalate to a
human agent if necessary.
What solution should you use?',
  '[{"key":"A","text":"a chatbot"},{"key":"B","text":"predictive AI"},{"key":"C","text":"a recommendation engine"},{"key":"D","text":"computer vision"}]'::jsonb,
  ARRAY['A']::text[],
  'Chatbot cung cấp hội thoại, đặt câu hỏi làm rõ và có thể chuyển tiếp sang nhân viên khi vượt ngoài khả năng. Đây là giải pháp phù hợp hơn công cụ dự báo, thị giác hay gợi ý đơn lẻ.',
  'Generative AI and Machine Learning',
  ARRAY['Generative AI and Machine Learning']::text[]
),
(
  'ab-731-question-043',
  'ab-731',
  43,
  'For each statement, select Yes if it is true; otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"Azure Vision in Foundry Tools can extract and analyze key phrases from PDF files.","correctAnswer":"No"},{"id":"2","text":"Azure Vision in Foundry Tools can generate images based on natural language descriptions.","correctAnswer":"No"},{"id":"3","text":"Azure Document Intelligence in Foundry Tools can be used to automate the processing of invoices and credit notes.","correctAnswer":"Yes"}],"choices":[]}'::jsonb,
  ARRAY['1:No', '2:No', '3:Yes']::text[],
  'Phân tích cụm từ khóa thuộc Azure Language, còn tạo ảnh từ mô tả thường dùng mô hình tạo ảnh chứ không phải Azure Vision. Azure Document Intelligence có mô hình tài liệu để tự động trích xuất dữ liệu từ hóa đơn và phiếu tín dụng.',
  'Microsoft Foundry and Foundry Tools',
  ARRAY['Microsoft Foundry and Foundry Tools']::text[]
),
(
  'ab-731-question-044',
  'ab-731',
  44,
  'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Select the answer that correctly completes the sentence.","correctAnswer":"1=C"}],"choices":[{"key":"A","text":"prescriptive"},{"key":"B","text":"predictive"},{"key":"C","text":"generative"}]}'::jsonb,
  ARRAY['1=1=C']::text[],
  'Generative AI học mẫu từ dữ liệu để tạo nội dung mới và nguyên bản. Predictive AI dự đoán kết quả; prescriptive analytics đề xuất hành động dựa trên kết quả phân tích.',
  'Generative AI and Machine Learning',
  ARRAY['Generative AI and Machine Learning']::text[]
),
(
  'ab-731-question-045',
  'ab-731',
  45,
  'For each statement, select Yes if it is true; otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"Microsoft 365 Copilot enables users to search across emails, files, chats, meetings, and connected apps, by using natural language queries.","correctAnswer":"Yes"},{"id":"2","text":"Microsoft 365 Copilot provides data protection, and helps ensure that user prompts and chat data are secure.","correctAnswer":"Yes"},{"id":"3","text":"Microsoft 365 Copilot is included in all Microsoft 365 subscriptions.","correctAnswer":"No"}],"choices":[]}'::jsonb,
  ARRAY['1:Yes', '2:Yes', '3:No']::text[],
  'Microsoft 365 Copilot có thể tìm kiếm bằng ngôn ngữ tự nhiên trên dữ liệu Microsoft 365 và áp dụng cơ chế bảo vệ dữ liệu doanh nghiệp. Sản phẩm không được bao gồm mặc định trong mọi gói Microsoft 365 mà thường cần giấy phép phù hợp.',
  'Microsoft 365 Copilot and Copilot Studio',
  ARRAY['Microsoft 365 Copilot and Copilot Studio']::text[]
),
(
  'ab-731-question-046',
  'ab-731',
  46,
  'Your company’s HR department spends a large amount time answering repetitive questions and updating policy
documents.
You need a solution that can automate employee interactions, respond to HR-related questions, and connect to internal
business data sources.
What solution should you recommend?',
  '[{"key":"A","text":"Microsoft Security Copilot"},{"key":"B","text":"Microsoft Copilot Studio"},{"key":"C","text":"Microsoft 365 Copilot"},{"key":"D","text":"Microsoft Copilot in Azure"}]'::jsonb,
  ARRAY['B']::text[],
  'Microsoft Copilot Studio dùng để xây dựng agent hội thoại, kết nối nguồn dữ liệu nội bộ và tự động hóa tương tác. Điều này đáp ứng yêu cầu HR tốt hơn một Copilot chỉ hỗ trợ cá nhân trong một ứng dụng.',
  'Microsoft 365 Copilot and Copilot Studio',
  ARRAY['Microsoft 365 Copilot and Copilot Studio']::text[]
),
(
  'ab-731-question-047',
  'ab-731',
  47,
  'For each statement, select Yes if it is true; otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"Larger datasets can increase the cost of a generative AI solution that uses an Azure Machine Learning workspace.","correctAnswer":"Yes"},{"id":"2","text":"The cost of consuming Azure OpenAI models is primarily identified by the number of input and output tokens processed.","correctAnswer":"Yes"},{"id":"3","text":"The cost of custom generative AI solutions always remains the same regardless of the model version or capability used.","correctAnswer":"No"}],"choices":[]}'::jsonb,
  ARRAY['1:Yes', '2:Yes', '3:No']::text[],
  'Dữ liệu lớn hơn có thể làm tăng chi phí lưu trữ và xử lý trong Azure Machine Learning. Azure OpenAI thường tính theo token đầu vào và đầu ra; giá còn thay đổi theo mô hình, phiên bản, năng lực và kiểu triển khai nên không phải lúc nào cũng cố định.',
  'AI Adoption Strategy Licensing and Cost',
  ARRAY['AI Adoption Strategy Licensing and Cost']::text[]
),
(
  'ab-731-question-048',
  'ab-731',
  48,
  'You need to recommend a service that supports indexing information and knowledge mining by extracting insights
from documents.
What should you recommend?',
  '[{"key":"A","text":"Microsoft Foundry"},{"key":"B","text":"Azure Vision in Foundry Tools"},{"key":"C","text":"Azure Document Intelligence in Foundry Tools"},{"key":"D","text":"Azure AI Search"}]'::jsonb,
  ARRAY['D']::text[],
  'Azure AI Search lập chỉ mục nội dung, hỗ trợ tìm kiếm ngữ nghĩa hoặc vector và knowledge mining để trích xuất insight từ tài liệu. Đây là dịch vụ phù hợp cho lớp truy xuất thông tin của giải pháp AI.',
  'Microsoft Foundry and Foundry Tools',
  ARRAY['Microsoft Foundry and Foundry Tools']::text[]
),
(
  'ab-731-question-049',
  'ab-731',
  49,
  'Your company uses a fine-tuned generative AI solution trained on data that is representative of the general population.
You discover that some of the generated responses include inappropriate or exclusionary language based on ableist
assumptions.
You need to prevent the inappropriate responses. Your solution must minimize costs. What should you do?',
  '[{"key":"A","text":"Apply a newer version of the generative AI model."},{"key":"B","text":"Apply a content-moderation filter."},{"key":"C","text":"Create a new version of the solution that is trained on only inclusive and representative content."},{"key":"D","text":"Create a new version of the solution that is trained on only exclusionary content."}]'::jsonb,
  ARRAY['B']::text[],
  'Content-moderation filter chặn hoặc giảm nội dung xúc phạm, loại trừ ngay ở đầu vào hoặc đầu ra mà không cần huấn luyện lại mô hình, nên là biện pháp nhanh và tiết kiệm để xử lý ngôn ngữ không phù hợp.',
  'Responsible AI and Governance',
  ARRAY['Responsible AI and Governance']::text[]
),
(
  'ab-731-question-050',
  'ab-731',
  50,
  'For each statement, select Yes if it is true; otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"A generative AI model guarantees factually accurate responses if the model is trained on a large dataset.","correctAnswer":"No"},{"id":"2","text":"Content filtering and responsible AI safeguards help a generative AI model generate safe and inoffensive content.","correctAnswer":"Yes"},{"id":"3","text":"A generative AI model always produces fair and unbiased results when the training data has been properly prepared and reviewed for fairness.","correctAnswer":"No"}],"choices":[]}'::jsonb,
  ARRAY['1:No', '2:Yes', '3:No']::text[],
  'Tập dữ liệu lớn không bảo đảm câu trả lời luôn đúng và dữ liệu đã rà soát cũng không loại bỏ tuyệt đối thiên lệch. Bộ lọc nội dung cùng các safeguard Responsible AI giúp giảm nội dung nguy hiểm hoặc xúc phạm, vì vậy chỉ nhận định thứ hai đúng.',
  'Responsible AI and Governance',
  ARRAY['Responsible AI and Governance']::text[]
),
(
  'ab-731-question-051',
  'ab-731',
  51,
  'What is considered a best practice when forming an AI adoption team in an enterprise environment?',
  '[{"key":"A","text":"Include primarily IT and project management staff initially to streamline deployment, adding governance and compliance roles later."},{"key":"B","text":"Include procurement and vendor management specialists early to evaluate AI tools, involving business teams once a platform is selected."},{"key":"C","text":"Include representatives from legal, leadership, and business units to align AI initiatives with organizational priorities."},{"key":"D","text":"Include only data scientists and engineers at first to validate technical feasibility, then add other stakeholders later."}]'::jsonb,
  ARRAY['C']::text[],
  'Nhóm adoption nên có pháp lý, lãnh đạo và đại diện các đơn vị kinh doanh để cân bằng tuân thủ, chiến lược và nhu cầu thực tế. Chỉ có kỹ thuật sẽ khó xác định đúng ưu tiên và quản lý thay đổi trong toàn doanh nghiệp.',
  'AI Adoption Strategy Licensing and Cost',
  ARRAY['AI Adoption Strategy Licensing and Cost']::text[]
),
(
  'ab-731-question-052',
  'ab-731',
  52,
  'For each statement, select Yes if it is true; otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"You can use Azure Language in Foundry Tools to analyze the sentiment of customer reviews.","correctAnswer":"Yes"},{"id":"2","text":"You can use Azure Language in Foundry Tools to translate internal reports into multiple languages.","correctAnswer":"Yes"},{"id":"3","text":"You can use Azure Language in Foundry Tools to extract text from scanned documents.","correctAnswer":"No"}],"choices":[]}'::jsonb,
  ARRAY['1:Yes', '2:Yes', '3:No']::text[],
  'Azure Language hỗ trợ sentiment analysis và translation cho văn bản. Trích xuất chữ từ tài liệu quét là bài toán OCR hoặc Document Intelligence/Vision, không phải chức năng chính của Language.',
  'Microsoft Foundry and Foundry Tools',
  ARRAY['Microsoft Foundry and Foundry Tools']::text[]
),
(
  'ab-731-question-053',
  'ab-731',
  53,
  'Select the appropriate service for each task.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Extracting structured data from forms and invoices.","correctAnswer":"B"},{"id":"2","text":"Summarizing written content from business reports.","correctAnswer":"A"},{"id":"3","text":"Generating descriptive text for uploaded images.","correctAnswer":"C"}],"choices":[{"key":"A","text":"Azure Language in Foundry Tools"},{"key":"B","text":"Azure Document Intelligence in Foundry Tools"},{"key":"C","text":"Azure Vision in Foundry Tools"}]}'::jsonb,
  ARRAY['1=B', '2=A', '3=C']::text[],
  'Document Intelligence phù hợp với biểu mẫu và hóa đơn; Language phù hợp tóm tắt nội dung văn bản; Vision có thể phân tích ảnh và sinh mô tả. Việc ghép đúng dịch vụ giúp giảm thời gian xây dựng giải pháp tùy chỉnh.',
  'Microsoft Foundry and Foundry Tools',
  ARRAY['Microsoft Foundry and Foundry Tools']::text[]
),
(
  'ab-731-question-054',
  'ab-731',
  54,
  'You are exploring how Microsoft 365 Copilot uses Microsoft Graph to deliver AI-powered experiences. Which information
in Microsoft Graph can Copilot use by default?',
  '[{"key":"A","text":"emails, files, meetings, and chats in Microsoft 365"},{"key":"B","text":"data stored in a file share"},{"key":"C","text":"social media activity"},{"key":"D","text":"content from public websites"}]'::jsonb,
  ARRAY['A']::text[],
  'Microsoft Graph cung cấp cho Copilot dữ liệu như email, tệp, cuộc họp và trò chuyện trong phạm vi quyền hiện có của người dùng. Copilot không bỏ qua quyền hoặc tự truy cập mọi dữ liệu của tổ chức.',
  'Microsoft 365 Copilot and Copilot Studio',
  ARRAY['Microsoft 365 Copilot and Copilot Studio']::text[]
),
(
  'ab-731-question-055',
  'ab-731',
  55,
  'For each statement, select Yes if it is true; otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"A barrier to AI adoption can include data limitations and a lack of AI readiness and skills.","correctAnswer":"Yes"},{"id":"2","text":"Organizations often struggle with AI adoption because they prioritize technology selection before defining clear business use cases.","correctAnswer":"Yes"},{"id":"3","text":"A lack of cross-functional collaboration is a common barrier to AI adoption.","correctAnswer":"Yes"}],"choices":[]}'::jsonb,
  ARRAY['1:Yes', '2:Yes', '3:Yes']::text[],
  'Hạn chế dữ liệu, thiếu kỹ năng/sẵn sàng AI, chọn công nghệ trước khi có use case và thiếu cộng tác liên chức năng đều làm adoption thất bại. Vì vậy cả ba nhận định đều là rào cản thực tế.',
  'AI Adoption Strategy Licensing and Cost',
  ARRAY['AI Adoption Strategy Licensing and Cost']::text[]
),
(
  'ab-731-question-056',
  'ab-731',
  56,
  'Your company is building a portfolio of AI-powered business solutions.
Company executives want to understand how Microsoft responsible AI principles can support the company’s long-term goals.
Which benefit best demonstrates the importance of responsible AI?',
  '[{"key":"A","text":"reduces the need for executive oversight in AI decision-making"},{"key":"B","text":"enhances stakeholder trust and fosters sustainable AI adoption throughout the organization"},{"key":"C","text":"guarantees that AI models provide accurate and relevant responses"},{"key":"D","text":"reduces the need for data protection policies and governance"}]'::jsonb,
  ARRAY['B']::text[],
  'Thực hành Responsible AI làm tăng niềm tin của khách hàng, nhân viên và cơ quan quản lý, đồng thời giảm rủi ro. Niềm tin này giúp tổ chức mở rộng và duy trì việc áp dụng AI lâu dài.',
  'Responsible AI and Governance',
  ARRAY['Responsible AI and Governance']::text[]
),
(
  'ab-731-question-057',
  'ab-731',
  57,
  'For each statement, select Yes if it is true; otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"To use Microsoft 365 Copilot Chat, you must have a Microsoft 365 Copilot license.","correctAnswer":"No"},{"id":"2","text":"Microsoft 365 Copilot Chat provides context-aware assistance in Microsoft 365 apps.","correctAnswer":"Yes"},{"id":"3","text":"Microsoft 365 Copilot Chat can only access information in open files and read emails.","correctAnswer":"No"}],"choices":[]}'::jsonb,
  ARRAY['1:No', '2:Yes', '3:No']::text[],
  'Copilot Chat có thể được sử dụng mà không nhất thiết phải mua add-on Microsoft 365 Copilot. Khi có năng lực phù hợp, nó cung cấp hỗ trợ theo ngữ cảnh trong ứng dụng; khả năng truy cập không chỉ giới hạn ở tệp đang mở và email đã đọc.',
  'Microsoft 365 Copilot and Copilot Studio',
  ARRAY['Microsoft 365 Copilot and Copilot Studio']::text[]
),
(
  'ab-731-question-058',
  'ab-731',
  58,
  'Which statement accurately describes the difference between a pretrained generative AI model and a fine-tuned
generative AI model?',
  '[{"key":"A","text":"A pretrained model requires labeled data, while a fine-tuned model does not."},{"key":"B","text":"A pretrained model is faster to train than a fine-tuned model because the pretrained model uses fewer parameters."},{"key":"C","text":"A pretrained model is trained on broad datasets, while a fine-tuned model is adapted to perform well on a narrower, domain-specific dataset."},{"key":"D","text":"A pretrained model is optimized for a specific task, while a fine-tuned model is designed for general-purpose use."}]'::jsonb,
  ARRAY['C']::text[],
  'Pretrained model học từ tập dữ liệu rộng để có năng lực tổng quát. Fine-tuning tiếp tục điều chỉnh mô hình bằng tập dữ liệu hẹp, đặc thù miền để tối ưu hành vi hoặc hiệu năng cho một nhiệm vụ cụ thể.',
  'Generative AI and Machine Learning',
  ARRAY['Generative AI and Machine Learning']::text[]
),
(
  'ab-731-question-059',
  'ab-731',
  59,
  'For each statement, select Yes if it is true; otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"Microsoft Foundry provides a unified platform for developers and data professionals to create custom end-to-end AI solutions.","correctAnswer":"Yes"},{"id":"2","text":"Microsoft Foundry provides a unified platform for low-code developers and business users to create custom end-to-end AI solutions.","correctAnswer":"No"},{"id":"3","text":"You need a Microsoft 365 Copilot license to access Microsoft Foundry services.","correctAnswer":"No"}],"choices":[]}'::jsonb,
  ARRAY['1:Yes', '2:No', '3:No']::text[],
  'Microsoft Foundry hướng đến nhà phát triển và chuyên gia dữ liệu xây dựng giải pháp AI end-to-end. Trải nghiệm low-code phù hợp hơn với Copilot Studio, và việc dùng Foundry không phụ thuộc vào giấy phép Microsoft 365 Copilot.',
  'Microsoft Foundry and Foundry Tools',
  ARRAY['Microsoft Foundry and Foundry Tools']::text[]
),
(
  'ab-731-question-060',
  'ab-731',
  60,
  'Your company deploys an AI-powered loan approval solution that enables applicants to request an explanation as to why
their loan application was denied.
Which Microsoft responsible AI principle is this an example of?',
  '[{"key":"A","text":"fairness"},{"key":"B","text":"privacy and security"},{"key":"C","text":"transparency"},{"key":"D","text":"inclusiveness"}]'::jsonb,
  ARRAY['C']::text[],
  'Cho người nộp đơn biết lý do bị từ chối giúp họ hiểu cách hệ thống đưa ra quyết định. Đây là transparency; giải thích không tự động chứng minh fairness hay reliability nhưng làm quyết định dễ xem xét hơn.',
  'Responsible AI and Governance',
  ARRAY['Responsible AI and Governance']::text[]
),
(
  'ab-731-question-061',
  'ab-731',
  61,
  'Your company is developing an AI-powered customer support agent.
You need to ensure that the solution follows Microsoft responsible AI principles.
Which two actions should you perform?',
  '[{"key":"A","text":"Retain all customer conversations."},{"key":"B","text":"Test the agent to ensure that responses are inclusive and culturally sensitive."},{"key":"C","text":"Enable the agent to operate independently."},{"key":"D","text":"Ensure that the agent can be used for multiple purposes."},{"key":"E","text":"Provide a clear disclaimer that users are interacting with an AI solution."}]'::jsonb,
  ARRAY['B', 'E']::text[],
  'Kiểm thử tính bao hàm và độ nhạy văn hóa giúp phát hiện phản hồi gây thiên lệch. Thông báo rõ người dùng đang tương tác với AI đáp ứng tính minh bạch; hai biện pháp này trực tiếp hỗ trợ Responsible AI.',
  'Responsible AI and Governance',
  ARRAY['Responsible AI and Governance']::text[]
),
(
  'ab-731-question-062',
  'ab-731',
  62,
  'For each statement, select Yes if it is true; otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"A generative AI solution is well-suited to predict next-quarter sales trends.","correctAnswer":"No"},{"id":"2","text":"A generative AI solution can summarize lengthy policy documents.","correctAnswer":"Yes"},{"id":"3","text":"A generative AI solution can create product descriptions from product specifications.","correctAnswer":"Yes"}],"choices":[]}'::jsonb,
  ARRAY['1:No', '2:Yes', '3:Yes']::text[],
  'Tóm tắt tài liệu dài và tạo mô tả sản phẩm là các tác vụ tạo sinh. Dự đoán xu hướng bán hàng quý tới là bài toán predictive analytics dựa trên dữ liệu lịch sử, nên không phải use case phù hợp nhất cho generative AI.',
  'Generative AI and Machine Learning',
  ARRAY['Generative AI and Machine Learning']::text[]
),
(
  'ab-731-question-063',
  'ab-731',
  63,
  'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Select the answer that correctly completes the sentence.","correctAnswer":"1=B"}],"choices":[{"key":"A","text":"technical teams responsible for designing advanced analytics solutions to track adoption."},{"key":"B","text":"users who advocate for the value of AI by learning, sharing, and identifying use cases."},{"key":"C","text":"users who are dedicated to building the infrastructure required to support AI across the organization."},{"key":"D","text":"users who come together and define the organization''s overall AI strategy."}]}'::jsonb,
  ARRAY['1=1=B']::text[],
  'AI champions là những người dùng tích cực học hỏi, chia sẻ kinh nghiệm và phát hiện use case có giá trị. Họ thúc đẩy adoption từ cộng đồng, không phải nhóm xây hạ tầng hoặc cơ quan duy nhất quyết định chiến lược.',
  'AI Adoption Strategy Licensing and Cost',
  ARRAY['AI Adoption Strategy Licensing and Cost']::text[]
),
(
  'ab-731-question-064',
  'ab-731',
  64,
  'Your company plans to implement a proof of concept (PoC) agent that uses Azure OpenAI. The solution must start small
and provide flexibility to scale usage as demand grows.
Which pricing model should you use?',
  '[{"key":"A","text":"Microsoft 365 Copilot"},{"key":"B","text":"Batch API"},{"key":"C","text":"Provisioned (PTUs)"},{"key":"D","text":"Standard (On-Demand)"}]'::jsonb,
  ARRAY['D']::text[],
  'Standard (On-Demand) tính phí theo mức sử dụng, cho phép PoC bắt đầu nhỏ rồi tăng tải linh hoạt. Provisioned phù hợp hơn khi lưu lượng lớn và ổn định cần năng lực dành trước.',
  'AI Adoption Strategy Licensing and Cost',
  ARRAY['AI Adoption Strategy Licensing and Cost']::text[]
),
(
  'ab-731-question-065',
  'ab-731',
  65,
  'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Select the answer that correctly completes the sentence.","correctAnswer":"1=D"}],"choices":[{"key":"A","text":"launch an internal campaign to promote AI awareness."},{"key":"B","text":"offer a self-paced online training course for employees."},{"key":"C","text":"define performance metrics for AI tool usage."},{"key":"D","text":"establish a champions program for your company."}]}'::jsonb,
  ARRAY['1=1=D']::text[],
  'Champions program tạo mạng lưới người dùng hỗ trợ đồng nghiệp, chia sẻ thực hành tốt và nhân rộng use case. Cách này bền vững hơn một chiến dịch nhận thức hoặc khóa học đơn lẻ.',
  'AI Adoption Strategy Licensing and Cost',
  ARRAY['AI Adoption Strategy Licensing and Cost']::text[]
),
(
  'ab-731-question-066',
  'ab-731',
  66,
  'Your company manages a website that publishes daily news articles.
You need to recommend an AI solution that can analyze text and identify the main people, locations, and companies mentioned
in the articles.
What should you include in the recommendation?',
  '[{"key":"A","text":"Azure Language in Foundry Tools"},{"key":"B","text":"Azure Vision in Foundry Tools"},{"key":"C","text":"Content Safety in Foundry Control Plane"},{"key":"D","text":"Azure Speech in Foundry Tools"}]'::jsonb,
  ARRAY['A']::text[],
  'Azure Language có Named Entity Recognition để xác định người, địa điểm, tổ chức và các thực thể khác trong bài viết. Đây là phân tích ngôn ngữ, không phải bài toán thị giác hay tìm kiếm thuần túy.',
  'Microsoft Foundry and Foundry Tools',
  ARRAY['Microsoft Foundry and Foundry Tools']::text[]
),
(
  'ab-731-question-067',
  'ab-731',
  67,
  'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Select the answer that correctly completes the sentence.","correctAnswer":"1=C"}],"choices":[{"key":"A","text":"documents"},{"key":"B","text":"requests"},{"key":"C","text":"tokens"},{"key":"D","text":"words"}]}'::jsonb,
  ARRAY['1=1=C']::text[],
  'Mô hình ngôn ngữ xử lý văn bản dưới dạng token, và chi phí thường dựa trên tổng token đầu vào cùng đầu ra. Số từ hoặc số yêu cầu không phản ánh chính xác lượng tính toán như token.',
  'AI Adoption Strategy Licensing and Cost',
  ARRAY['AI Adoption Strategy Licensing and Cost']::text[]
),
(
  'ab-731-question-068',
  'ab-731',
  68,
  'Your company is preparing to adopt Microsoft 365 Copilot and wants to follow Microsoft responsible AI principles. As a
business leader, you propose establishing an AI governance council to ensure alignment with the responsible AI principles.
What is the primary purpose of the council?',
  '[{"key":"A","text":"to monitor user behavior and enforce compliance with internal IT policies"},{"key":"B","text":"to train employees on how to use Copilot features effectively"},{"key":"C","text":"to oversee implementation, manage technical performance, and ensure successful AI deployment"},{"key":"D","text":"to guide strategy, provide oversight, and ensure cross-functional alignment for responsible AI adoption"}]'::jsonb,
  ARRAY['D']::text[],
  'AI governance council định hướng chiến lược, giám sát Responsible AI và kết nối các bộ phận pháp lý, kỹ thuật, kinh doanh. Hội đồng không thay thế nhóm vận hành hằng ngày mà bảo đảm sự liên kết và trách nhiệm ở cấp tổ chức.',
  'Responsible AI and Governance',
  ARRAY['Responsible AI and Governance']::text[]
),
(
  'ab-731-question-069',
  'ab-731',
  69,
  'For each statement, select Yes if it is true; otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"Users that want to reason over work data by using a natural language prompt in Microsoft 365 Copilot must have a Copilot add-on license.","correctAnswer":"Yes"},{"id":"2","text":"Microsoft 365 Copilot is included in Microsoft 365 E3 and Microsoft 365 ES licenses.","correctAnswer":"No"},{"id":"3","text":"Some Microsoft 365 Copilot services are available through a pay-as-you-go plan.","correctAnswer":"Yes"}],"choices":[]}'::jsonb,
  ARRAY['1:Yes', '2:No', '3:Yes']::text[],
  'Suy luận trên dữ liệu công việc qua Microsoft Graph cần giấy phép Copilot phù hợp; Microsoft 365 Copilot không mặc định nằm trong E3/E5. Một số dịch vụ hoặc tác vụ có tùy chọn pay-as-you-go, nên đáp án lần lượt là Yes, No, Yes.',
  'AI Adoption Strategy Licensing and Cost',
  ARRAY['AI Adoption Strategy Licensing and Cost']::text[]
),
(
  'ab-731-question-070',
  'ab-731',
  70,
  'Your company receives thousands of scanned invoices each month.
You need to recommend an AI solution that can automatically extract key details, such as invoice numbers, vendor names, and
total amounts.
What is the best solution to recommend?',
  '[{"key":"A","text":"Azure Document Intelligence in Foundry Tools"},{"key":"B","text":"Azure Vision in Foundry Tools"},{"key":"C","text":"Azure AI Search"},{"key":"D","text":"Azure Machine Learning"}]'::jsonb,
  ARRAY['A']::text[],
  'Azure Document Intelligence kết hợp OCR và mô hình tài liệu để trích xuất các trường như số hóa đơn, nhà cung cấp và tổng tiền từ tài liệu quét. Kết quả được trả về dưới dạng có cấu trúc để tự động hóa xử lý.',
  'Microsoft Foundry and Foundry Tools',
  ARRAY['Microsoft Foundry and Foundry Tools']::text[]
),
(
  'ab-731-question-071',
  'ab-731',
  71,
  'Match each business scenario to the appropriate AI solution design approach.',
  '{"type":"matching_drag_drop","statements":[{"id":"1","text":"Marketing wants AI to summarize emails and create presentations.","correctAnswer":"D"},{"id":"2","text":"HR wants a conversational agent for policy questions and leave requests.","correctAnswer":"B"},{"id":"3","text":"Manufacturing wants AI to predict maintenance schedules.","correctAnswer":"A"},{"id":"4","text":"Finance wants AI-powered access to ERP data by using familiar productivity tools.","correctAnswer":"C"}],"choices":[{"key":"A","text":"Build with Azure Machine Learning"},{"key":"B","text":"Build with Microsoft Copilot Studio"},{"key":"C","text":"Extend with Microsoft 365 Copilot connectors"},{"key":"D","text":"Use Microsoft 365 Copilot"}]}'::jsonb,
  ARRAY['1=D', '2=B', '3=A', '4=C']::text[],
  'Microsoft 365 Copilot phù hợp tóm tắt email và tạo bài trình bày; Copilot Studio xây agent HR low-code; Azure Machine Learning dự báo bảo trì; Copilot connectors đưa dữ liệu ERP vào trải nghiệm năng suất quen thuộc.',
  'Microsoft 365 Copilot and Copilot Studio',
  ARRAY['Microsoft 365 Copilot and Copilot Studio']::text[]
),
(
  'ab-731-question-072',
  'ab-731',
  72,
  'For each statement, select Yes if it is true; otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"Prompt engineering involves specifying guidelines that help a generative AI model generate useful and accurate responses.","correctAnswer":"Yes"},{"id":"2","text":"The instruction is the part of the prompt that includes examples to show the AI what its response should look like.","correctAnswer":"No"},{"id":"3","text":"The context is the part of the prompt that helps a generative AI model understand which information to use when generating a response.","correctAnswer":"Yes"}],"choices":[]}'::jsonb,
  ARRAY['1:Yes', '2:No', '3:Yes']::text[],
  'Prompt engineering xác định hướng dẫn để tạo phản hồi hữu ích; ví dụ mẫu thuộc phần demonstration chứ không phải instruction. Context cung cấp thông tin nền mà mô hình phải dùng, nên các đáp án là Yes, No, Yes.',
  'Generative AI and Machine Learning',
  ARRAY['Generative AI and Machine Learning']::text[]
),
(
  'ab-731-question-073',
  'ab-731',
  73,
  'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Select the answer that correctly completes the sentence.","correctAnswer":"1=B"}],"choices":[{"key":"A","text":"configure and deploy AI models in the organization''s Azure environment."},{"key":"B","text":"guide AI strategy, ensure responsible AI oversight, and promote alignment across business units."},{"key":"C","text":"manage day-to-day model training and labeling tasks for AI development teams."}]}'::jsonb,
  ARRAY['1=1=B']::text[],
  'Hội đồng quản trị AI phải định hướng chiến lược, giám sát Responsible AI và tạo sự thống nhất giữa các đơn vị. Cấu hình mô hình hoặc gắn nhãn dữ liệu hằng ngày là trách nhiệm vận hành của các nhóm chuyên môn.',
  'Responsible AI and Governance',
  ARRAY['Responsible AI and Governance']::text[]
),
(
  'ab-731-question-074',
  'ab-731',
  74,
  'For each statement, select Yes if it is true; otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"Allowing AI models to make autonomous decisions supports the Microsoft responsible AI principle of accountability.","correctAnswer":"No"},{"id":"2","text":"Regularly testing AI models for fairness and inclusiveness helps ensure they align with Microsoft''s Responsible AI principles.","correctAnswer":"Yes"},{"id":"3","text":"Protecting user data and limiting access to personal information supports the Microsoft responsible AI principles of privacy and security.","correctAnswer":"Yes"}],"choices":[]}'::jsonb,
  ARRAY['1:No', '2:Yes', '3:Yes']::text[],
  'Accountability cần trách nhiệm và giám sát của con người, không phải trao quyền tự trị không kiểm soát. Kiểm thử fairness/inclusiveness và bảo vệ dữ liệu cá nhân lần lượt hỗ trợ các nguyên tắc công bằng, bao hàm, riêng tư và bảo mật.',
  'Responsible AI and Governance',
  ARRAY['Responsible AI and Governance']::text[]
),
(
  'ab-731-question-075',
  'ab-731',
  75,
  'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Select the answer that correctly completes the sentence.","correctAnswer":"1=A"}],"choices":[{"key":"A","text":"Microsoft Foundry"},{"key":"B","text":"Microsoft Power Platform"},{"key":"C","text":"Azure Machine Learning"}]}'::jsonb,
  ARRAY['1=1=A']::text[],
  'Microsoft Foundry là nền tảng hợp nhất cho phát triển AI doanh nghiệp, hỗ trợ xây dựng, tùy chỉnh, đánh giá và quản lý ứng dụng cùng mô hình. Power Platform và Azure Machine Learning có phạm vi khác hoặc hẹp hơn đối với mô tả này.',
  'Microsoft Foundry and Foundry Tools',
  ARRAY['Microsoft Foundry and Foundry Tools']::text[]
),
(
  'ab-731-question-076',
  'ab-731',
  76,
  'For each statement, select Yes if it is true; otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"Prompt engineering changes how a generative AI model was trained.","correctAnswer":"No"},{"id":"2","text":"Prompt engineering focuses on designing clear, concise, and context-rich instructions.","correctAnswer":"Yes"},{"id":"3","text":"Effective prompt engineering involves maximizing the number of tokens used in each request.","correctAnswer":"No"}],"choices":[]}'::jsonb,
  ARRAY['1:No', '2:Yes', '3:No']::text[],
  'Prompt engineering thay đổi cách đặt yêu cầu chứ không thay đổi trọng số đã huấn luyện của mô hình. Prompt tốt cần rõ ràng, ngắn gọn và giàu ngữ cảnh; dùng càng nhiều token không đồng nghĩa chất lượng càng cao.',
  'Generative AI and Machine Learning',
  ARRAY['Generative AI and Machine Learning']::text[]
),
(
  'ab-731-question-077',
  'ab-731',
  77,
  'You need to create a custom Azure Machine Learning model. The data used to train the model is consistent and uniform.
What should you do first?',
  '[{"key":"A","text":"Prepare the training data."},{"key":"B","text":"Evaluate the model."},{"key":"C","text":"Train the model."},{"key":"D","text":"Tune hyperparameters."},{"key":"E","text":"Deploy the model."}]'::jsonb,
  ARRAY['A']::text[],
  'Bước đầu của quy trình machine learning là chuẩn bị và kiểm tra dữ liệu: xác thực chất lượng, định dạng, đặc trưng và chia tập. Dữ liệu nhìn có vẻ đồng nhất vẫn cần được chuẩn bị trước khi huấn luyện.',
  'Generative AI and Machine Learning',
  ARRAY['Generative AI and Machine Learning']::text[]
),
(
  'ab-731-question-078',
  'ab-731',
  78,
  'For each statement, select Yes if it is true; otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"A text-to-image generator can be used to translate content into other languages.","correctAnswer":"No"},{"id":"2","text":"A predictive analytics model can generate new marketing content for a company’s online ads.","correctAnswer":"No"},{"id":"3","text":"A generative AI chatbot can engage customers in personalized conversations and recommend products.","correctAnswer":"Yes"}],"choices":[]}'::jsonb,
  ARRAY['1:No', '2:No', '3:Yes']::text[],
  'Text-to-image tạo hình ảnh chứ không dịch ngôn ngữ; predictive analytics dự báo chứ không tạo quảng cáo mới. Generative AI chatbot có thể trò chuyện cá nhân hóa và tạo gợi ý sản phẩm theo ngữ cảnh.',
  'Generative AI and Machine Learning',
  ARRAY['Generative AI and Machine Learning']::text[]
),
(
  'ab-731-question-079',
  'ab-731',
  79,
  'What is a key feature of Microsoft 365 Copilot that aligns with the Microsoft responsible AI principles of transparency,
reliability, and safety?',
  '[{"key":"A","text":"Automatically approves AI-generated content for company-wide publishing."},{"key":"B","text":"Removes the need for a human to review AI-generated outputs."},{"key":"C","text":"Provides grounded, verifiable responses based on organizational data."},{"key":"D","text":"Enables users to select from an authorized catalog of AI models."}]'::jsonb,
  ARRAY['C']::text[],
  'Câu trả lời được grounding trên dữ liệu tổ chức có thể truy vết và kiểm chứng, giúp người dùng hiểu nguồn thông tin và giảm kết quả thiếu căn cứ. Điều này hỗ trợ transparency, reliability và safety.',
  'Microsoft 365 Copilot and Copilot Studio',
  ARRAY['Microsoft 365 Copilot and Copilot Studio']::text[]
),
(
  'ab-731-question-080',
  'ab-731',
  80,
  'For each statement, select Yes if it is true; otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"For a user to access organizational data from a mobile device, the user needs a Microsoft 365 Copilot license.","correctAnswer":"No"},{"id":"2","text":"To reason over your organizational data by using Microsoft Graph, you need a Microsoft 365 Copilot license.","correctAnswer":"Yes"},{"id":"3","text":"To use the Analyst agent, you need a Microsoft 365 Copilot license.","correctAnswer":"Yes"}],"choices":[]}'::jsonb,
  ARRAY['1:No', '2:Yes', '3:Yes']::text[],
  'Chỉ truy cập dữ liệu tổ chức từ thiết bị di động không tự động đòi hỏi giấy phép Copilot. Tuy nhiên suy luận trên dữ liệu qua Microsoft Graph và dùng Analyst là các năng lực Microsoft 365 Copilot nên cần giấy phép phù hợp.',
  'Microsoft 365 Copilot and Copilot Studio',
  ARRAY['Microsoft 365 Copilot and Copilot Studio']::text[]
),
(
  'ab-731-question-081',
  'ab-731',
  81,
  'Match the business processes to the appropriate Microsoft Copilot solutions.',
  '{"type":"matching_drag_drop","statements":[{"id":"1","text":"Creating financial summaries and visual reports from Microsoft Excel workbooks.","correctAnswer":"C"},{"id":"2","text":"Building an autonomous agent by using a low-code approach.","correctAnswer":"D"}],"choices":[{"key":"A","text":"Copilot in Power Automate"},{"key":"B","text":"GitHub Copilot"},{"key":"C","text":"Microsoft 365 Copilot"},{"key":"D","text":"Microsoft Copilot Studio"}]}'::jsonb,
  ARRAY['1=C', '2=D']::text[],
  'Microsoft 365 Copilot làm việc trực tiếp với Excel để tạo tóm tắt và báo cáo trực quan. Microsoft Copilot Studio cung cấp môi trường low-code để xây dựng agent tự chủ kết nối dữ liệu và hành động.',
  'Microsoft 365 Copilot and Copilot Studio',
  ARRAY['Microsoft 365 Copilot and Copilot Studio']::text[]
),
(
  'ab-731-question-082',
  'ab-731',
  82,
  'For each statement, select Yes if it is true; otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"Microsoft 365 Copilot can amplify existing data governance challenges.","correctAnswer":"Yes"},{"id":"2","text":"Implementing Microsoft 365 Copilot reduces data management costs.","correctAnswer":"No"},{"id":"3","text":"Microsoft 365 Copilot can help IT teams manage data risks.","correctAnswer":"Yes"}],"choices":[]}'::jsonb,
  ARRAY['1:Yes', '2:No', '3:Yes']::text[],
  'Copilot có thể khuếch đại vấn đề quản trị sẵn có, chẳng hạn quyền chia sẻ quá rộng; triển khai không bảo đảm tự động giảm chi phí quản lý dữ liệu. Đồng thời Copilot và các công cụ quản trị liên quan giúp IT phát hiện, kiểm soát rủi ro dữ liệu.',
  'Microsoft 365 Copilot and Copilot Studio',
  ARRAY['Microsoft 365 Copilot and Copilot Studio']::text[]
),
(
  'ab-731-question-083',
  'ab-731',
  83,
  'You have a large language model (LLM) that was pretrained by using public data.
You want the LLM to generate responses that incorporate frequently updated proprietary content, such as internal documents
and knowledge bases.
You need to recommend a solution to ensure that the LLM uses the most current information without retraining the model.
What should you include in the recommendation?',
  '[{"key":"A","text":"Retrieval Augmented Generation (RAG)"},{"key":"B","text":"prompt engineering"},{"key":"C","text":"content filtering"},{"key":"D","text":"model fine-tuning"}]'::jsonb,
  ARRAY['A']::text[],
  'RAG truy xuất nội dung độc quyền được cập nhật thường xuyên tại thời điểm chạy và đưa vào ngữ cảnh cho LLM. Nhờ đó mô hình dùng thông tin mới mà không phải fine-tune hoặc huấn luyện lại mỗi lần tài liệu thay đổi.',
  'Generative AI and Machine Learning',
  ARRAY['Generative AI and Machine Learning']::text[]
),
(
  'ab-731-question-084',
  'ab-731',
  84,
  'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Select the answer that correctly completes the sentence.","correctAnswer":"1=B"}],"choices":[{"key":"A","text":"monitor network traffic and alerts in real time."},{"key":"B","text":"create a Microsoft Word document."},{"key":"C","text":"create a list in Microsoft SharePoint."},{"key":"D","text":"modify administrative permissions for Microsoft SharePoint files."}]}'::jsonb,
  ARRAY['1=1=B']::text[],
  'Microsoft 365 Copilot tích hợp với Word nên có thể hỗ trợ tạo tài liệu Word từ prompt và dữ liệu công việc. Các tác vụ giám sát mạng hoặc thay đổi quyền quản trị không phải chức năng soạn thảo của Copilot.',
  'Microsoft 365 Copilot and Copilot Studio',
  ARRAY['Microsoft 365 Copilot and Copilot Studio']::text[]
),
(
  'ab-731-question-085',
  'ab-731',
  85,
  'Which business requirement most closely relates to grounding a generative AI model?',
  '[{"key":"A","text":"supporting multiple languages"},{"key":"B","text":"measuring the number of user interactions per day"},{"key":"C","text":"enabling users to interact by using natural language queries"},{"key":"D","text":"ensuring that verified company data sources are used for response generation"}]'::jsonb,
  ARRAY['D']::text[],
  'Grounding yêu cầu dùng nguồn dữ liệu doanh nghiệp đã xác minh để tạo phản hồi. Mục tiêu là cung cấp căn cứ có thẩm quyền và phù hợp, không phải thay đổi cấu trúc hay huấn luyện lại mô hình.',
  'Generative AI and Machine Learning',
  ARRAY['Generative AI and Machine Learning']::text[]
),
(
  'ab-731-question-086',
  'ab-731',
  86,
  'For each statement, select Yes if it is true; otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"Microsoft 365 Copilot helps users create and analyze content in Microsoft 365 apps.","correctAnswer":"Yes"},{"id":"2","text":"Microsoft Copilot Studio can only be used to customize Microsoft 365 Copilot.","correctAnswer":"No"},{"id":"3","text":"Microsoft Security Copilot uses AI to assign sensitivity labels to documents.","correctAnswer":"No"}],"choices":[]}'::jsonb,
  ARRAY['1:Yes', '2:No', '3:No']::text[],
  'Microsoft 365 Copilot hỗ trợ tạo và phân tích nội dung trong các ứng dụng Microsoft 365. Copilot Studio có thể xây nhiều loại agent chứ không chỉ tùy chỉnh Copilot; Security Copilot phân tích bảo mật chứ không phải công cụ tự gán sensitivity label cho tài liệu.',
  'Microsoft 365 Copilot and Copilot Studio',
  ARRAY['Microsoft 365 Copilot and Copilot Studio']::text[]
),
(
  'ab-731-question-087',
  'ab-731',
  87,
  'Your company stores thousands of reports and documents across multiple systems.
You recommend using Azure AI Search as part of a new generative AI solution to improve information discovery. What is a key
benefit of using Azure AI Search in this scenario?',
  '[{"key":"A","text":"generates responses to customer questions without referencing the existing data"},{"key":"B","text":"queries and retrieves information from large collections of data by using natural language"},{"key":"C","text":"automates document workflows based on the document content"},{"key":"D","text":"improves model accuracy by fine-tuning organizational data"}]'::jsonb,
  ARRAY['B']::text[],
  'Azure AI Search lập chỉ mục nội dung phân tán và hỗ trợ truy vấn ngôn ngữ tự nhiên, semantic hoặc vector trên tập dữ liệu lớn. Nó cung cấp lớp truy xuất phù hợp để tìm tài liệu liên quan cho người dùng hoặc cho RAG.',
  'Microsoft Foundry and Foundry Tools',
  ARRAY['Microsoft Foundry and Foundry Tools']::text[]
),
(
  'ab-731-question-088',
  'ab-731',
  88,
  'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Select the answer that correctly completes the sentence.","correctAnswer":"1=C"}],"choices":[{"key":"A","text":"uses a smaller dataset."},{"key":"B","text":"produces more accurate results."},{"key":"C","text":"can produce new and original content."}]}'::jsonb,
  ARRAY['1=1=C']::text[],
  'Generative AI có khả năng tạo nội dung mới và nguyên bản từ mẫu đã học. Predictive AI chủ yếu ước lượng kết quả hoặc xu hướng tương lai từ dữ liệu lịch sử.',
  'Generative AI and Machine Learning',
  ARRAY['Generative AI and Machine Learning']::text[]
),
(
  'ab-731-question-089',
  'ab-731',
  89,
  'You need to recommend a generative AI solution that meets the following business requirements:
• Processes both images and text
• Summarizes the design of a building
• Answers user questions about a building’s design
• Extracts information from blueprints, such as the location of electrical, heating, and plumbing systems
What should you recommend?',
  '[{"key":"A","text":"a multi-modal solution"},{"key":"B","text":"an optical character recognition (OCR) solution"},{"key":"C","text":"a text completion solution"},{"key":"D","text":"a document summarization solution"}]'::jsonb,
  ARRAY['A']::text[],
  'Giải pháp đa phương thức có thể hiểu đồng thời hình ảnh và văn bản. Vì vậy nó phù hợp đọc bản thiết kế, trích xuất vị trí hệ thống kỹ thuật, tóm tắt thiết kế và trả lời câu hỏi bằng ngôn ngữ tự nhiên.',
  'Generative AI and Machine Learning',
  ARRAY['Generative AI and Machine Learning']::text[]
),
(
  'ab-731-question-090',
  'ab-731',
  90,
  'Your company discovers that several employees use personal ChatGPT accounts to assist with work tasks. You are
concerned about proprietary data being shared externally.
You need to evaluate the business value of rolling out Microsoft 365 Copilot.
Which capability is a key benefit of using Copilot instead of a personal ChatGPT account?',
  '[{"key":"A","text":"analyzing and producing reports based on complex data"},{"key":"B","text":"generating ideas and solving issues"},{"key":"C","text":"drafting documents, emails, presentations, and marketing materials"},{"key":"D","text":"accessing internal data in accordance with existing Microsoft 365 policies"}]'::jsonb,
  ARRAY['D']::text[],
  'Microsoft 365 Copilot truy cập dữ liệu nội bộ theo quyền, chính sách bảo mật, tuân thủ và quản trị hiện có của Microsoft 365. Điều này giảm rủi ro nhân viên đưa dữ liệu độc quyền vào tài khoản AI cá nhân không được tổ chức quản lý.',
  'Microsoft 365 Copilot and Copilot Studio',
  ARRAY['Microsoft 365 Copilot and Copilot Studio']::text[]
),
(
  'ab-731-question-091',
  'ab-731',
  91,
  'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Select the answer that correctly completes the sentence.","correctAnswer":"1=B"}],"choices":[{"key":"A","text":"data leakage."},{"key":"B","text":"model inaccuracy."},{"key":"C","text":"overreliance."},{"key":"D","text":"prompt injection."}]}'::jsonb,
  ARRAY['1=1=B']::text[],
  'Nội dung nghe hợp lý nhưng sai sự thật là hiện tượng model inaccuracy, thường được gọi là hallucination. Cần grounding, kiểm chứng và đánh giá thay vì mặc định tin mọi phản hồi.',
  'Generative AI and Machine Learning',
  ARRAY['Generative AI and Machine Learning']::text[]
),
(
  'ab-731-question-092',
  'ab-731',
  92,
  'Your company is evaluating the use of Microsoft Copilot Studio to support business process automation and employee
self-service.
Which two capabilities are directly supported in Copilot Studio?',
  '[{"key":"A","text":"drafting and summarizing files in Microsoft Word and PowerPoint"},{"key":"B","text":"customizing agent behavior and responses"},{"key":"C","text":"using agents to identify and respond to security incidents"},{"key":"D","text":"building agents that connect to business data and automate user interactions"},{"key":"E","text":"configuring document security"}]'::jsonb,
  ARRAY['B', 'D']::text[],
  'Copilot Studio cho phép tùy chỉnh hành vi và phản hồi của agent, kết nối dữ liệu doanh nghiệp, gọi hành động và tự động hóa tương tác. Đây là hai năng lực cốt lõi cho self-service và quy trình nghiệp vụ.',
  'Microsoft 365 Copilot and Copilot Studio',
  ARRAY['Microsoft 365 Copilot and Copilot Studio']::text[]
),
(
  'ab-731-question-093',
  'ab-731',
  93,
  'For each statement, select Yes if it is true; otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"Microsoft 365 Copilot connectors enable you to index data from multiple sources to make the data available in Copilot.","correctAnswer":"Yes"},{"id":"2","text":"You can build a custom Microsoft 365 Copilot connector when the available connectors do NOT meet your data integration requirements.","correctAnswer":"Yes"},{"id":"3","text":"To use Microsoft 365 Copilot connectors, you need a Microsoft Copilot Studio license.","correctAnswer":"No"}],"choices":[]}'::jsonb,
  ARRAY['1:Yes', '2:Yes', '3:No']::text[],
  'Microsoft 365 Copilot connectors lập chỉ mục dữ liệu từ nhiều nguồn và có thể được xây tùy chỉnh khi connector có sẵn không đáp ứng yêu cầu. Việc dùng connector không mặc định yêu cầu giấy phép Microsoft Copilot Studio.',
  'Microsoft 365 Copilot and Copilot Studio',
  ARRAY['Microsoft 365 Copilot and Copilot Studio']::text[]
),
(
  'ab-731-question-094',
  'ab-731',
  94,
  'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Select the answer that correctly completes the sentence.","correctAnswer":"1=C"}],"choices":[{"key":"A","text":"ensures that all responses are factually accurate."},{"key":"B","text":"increases performance of an AI model."},{"key":"C","text":"improves the accuracy and reliability of the predictions and outputs of AI."},{"key":"D","text":"increases the amount of storage required to host an AI model."}]}'::jsonb,
  ARRAY['1=1=C']::text[],
  'Dữ liệu grounding chất lượng cao làm tăng tính liên quan, độ chính xác và khả năng kiểm chứng của đầu ra. Nó giảm rủi ro nhưng không thể bảo đảm tuyệt đối mọi phản hồi đều đúng.',
  'Generative AI and Machine Learning',
  ARRAY['Generative AI and Machine Learning']::text[]
),
(
  'ab-731-question-095',
  'ab-731',
  95,
  'Your company purchases Microsoft 365 Copilot for its sales department.
The sales department needs to find and summarize information across internal documents quickly.
From which two data sources can the sales department obtain results by default?',
  '[{"key":"A","text":"Microsoft OneDrive"},{"key":"B","text":"an on-premises file share"},{"key":"C","text":"Microsoft SharePoint"},{"key":"D","text":"Microsoft Sway"},{"key":"E","text":"acustom customer relationship management (CRM) system"}]'::jsonb,
  ARRAY['A', 'C']::text[],
  'Microsoft Graph cho phép Microsoft 365 Copilot tìm dữ liệu mà người dùng được phép truy cập trong OneDrive và SharePoint theo mặc định. Nguồn tại chỗ hoặc hệ thống khác cần connector hay tích hợp bổ sung.',
  'Microsoft 365 Copilot and Copilot Studio',
  ARRAY['Microsoft 365 Copilot and Copilot Studio']::text[]
),
(
  'ab-731-question-096',
  'ab-731',
  96,
  'For each statement, select Yes if it is true; otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"Content filtering controls can prevent AI-generated responses from exposing confidential and sensitive information.","correctAnswer":"Yes"},{"id":"2","text":"AI-generated content can unintentionally reveal sensitive information if the generative AI model has access to unsecured data sources.","correctAnswer":"Yes"},{"id":"3","text":"To prevent data exposure, only the prompts used by users must be protected by using policies.","correctAnswer":"No"}],"choices":[]}'::jsonb,
  ARRAY['1:Yes', '2:Yes', '3:No']::text[],
  'Content filtering giúp chặn nội dung nhạy cảm, nhưng mô hình vẫn có thể làm lộ dữ liệu nếu nguồn không được bảo vệ. Phòng ngừa phải bao phủ prompt, nguồn dữ liệu, quyền truy cập và đầu ra chứ không chỉ riêng prompt.',
  'Responsible AI and Governance',
  ARRAY['Responsible AI and Governance']::text[]
),
(
  'ab-731-question-097',
  'ab-731',
  97,
  'Your company is reviewing a new AI solution before deploying it. The company wants to ensure that the solution follows
Microsoft responsible AI principles.
What is the best approach to achieve the goal?',
  '[{"key":"A","text":"Design the AI solution to automatically approve or reject customer loan applications."},{"key":"B","text":"Test the AI solution to identify and mitigate potential unfair or inconsistent outcomes in its outputs."},{"key":"C","text":"Prioritize model performance when tuning the AI solution."},{"key":"D","text":"Enable the AI solution to collect and store personal data."}]'::jsonb,
  ARRAY['B']::text[],
  'Kiểm thử trước triển khai giúp phát hiện kết quả không công bằng hoặc thiếu nhất quán và cho phép giảm thiểu rủi ro. Tự động hóa quyết định hay ưu tiên hiệu năng không thay thế việc đánh giá Responsible AI.',
  'Responsible AI and Governance',
  ARRAY['Responsible AI and Governance']::text[]
),
(
  'ab-731-question-098',
  'ab-731',
  98,
  'Your company has an AI solution that uses a prebuilt Azure OpenAI model to generate content.
You need to reduce the cost of solution while minimizing the impact on the quality of the generated output. Which two actions
should you perform?',
  '[{"key":"A","text":"Switch to an alternate model."},{"key":"B","text":"Apply content moderation."},{"key":"C","text":"Optimize the prompts."},{"key":"D","text":"Decrease the number of hosting hours for the model."},{"key":"E","text":"Fine-tune the existing model."}]'::jsonb,
  ARRAY['A', 'C']::text[],
  'Chuyển sang mô hình khác có chi phí thấp hơn và tối ưu prompt để giảm token có thể tiết kiệm chi phí mà vẫn giữ chất lượng. Fine-tuning hoặc giảm giờ hosting không nhất thiết áp dụng cho mô hình Azure OpenAI dựng sẵn.',
  'AI Adoption Strategy Licensing and Cost',
  ARRAY['AI Adoption Strategy Licensing and Cost']::text[]
),
(
  'ab-731-question-099',
  'ab-731',
  99,
  'For each statement, select Yes if it is true; otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"Retrieval Augmented Generation (RAG) requires model fine-tuning.","correctAnswer":"No"},{"id":"2","text":"Retrieval Augmented Generation (RAG) is helpful when you need a generative AI solution that can access current, verifiable information.","correctAnswer":"Yes"},{"id":"3","text":"Retrieval Augmented Generation (RAG) enables you to get more relevant responses based on your organization’s documents without retraining the base model.","correctAnswer":"Yes"}],"choices":[]}'::jsonb,
  ARRAY['1:No', '2:Yes', '3:Yes']::text[],
  'RAG không bắt buộc fine-tuning. Nó truy xuất thông tin hiện tại, có thể kiểm chứng và dùng tài liệu tổ chức để tạo phản hồi liên quan hơn mà không thay đổi mô hình nền.',
  'Generative AI and Machine Learning',
  ARRAY['Generative AI and Machine Learning']::text[]
),
(
  'ab-731-question-100',
  'ab-731',
  100,
  'In which scenario is Azure Machine Learning most likely to deliver strategic value for an organization?',
  '[{"key":"A","text":"Using historical sales data to forecast demand across product categories."},{"key":"B","text":"Digitizing a paper-based process to reduce errors."},{"key":"C","text":"Entering customer feedback into a spreadsheet to understand sentiment."},{"key":"D","text":"Sending personalized emails to customers based on the customer location."}]'::jsonb,
  ARRAY['A']::text[],
  'Dự báo nhu cầu theo nhóm sản phẩm từ dữ liệu bán hàng lịch sử tạo giá trị chiến lược bằng cách hỗ trợ tồn kho, mua hàng và lập kế hoạch. Đây là use case predictive machine learning phù hợp với Azure Machine Learning.',
  'Generative AI and Machine Learning',
  ARRAY['Generative AI and Machine Learning']::text[]
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

DELETE FROM questions
WHERE cert_id = 'ab-731'
  AND id NOT IN ('ab-731-question-001', 'ab-731-question-002', 'ab-731-question-003', 'ab-731-question-004', 'ab-731-question-005', 'ab-731-question-006', 'ab-731-question-007', 'ab-731-question-008', 'ab-731-question-009', 'ab-731-question-010', 'ab-731-question-011', 'ab-731-question-012', 'ab-731-question-013', 'ab-731-question-014', 'ab-731-question-015', 'ab-731-question-016', 'ab-731-question-017', 'ab-731-question-018', 'ab-731-question-019', 'ab-731-question-020', 'ab-731-question-021', 'ab-731-question-022', 'ab-731-question-023', 'ab-731-question-024', 'ab-731-question-025', 'ab-731-question-026', 'ab-731-question-027', 'ab-731-question-028', 'ab-731-question-029', 'ab-731-question-030', 'ab-731-question-031', 'ab-731-question-032', 'ab-731-question-033', 'ab-731-question-034', 'ab-731-question-035', 'ab-731-question-036', 'ab-731-question-037', 'ab-731-question-038', 'ab-731-question-039', 'ab-731-question-040', 'ab-731-question-041', 'ab-731-question-042', 'ab-731-question-043', 'ab-731-question-044', 'ab-731-question-045', 'ab-731-question-046', 'ab-731-question-047', 'ab-731-question-048', 'ab-731-question-049', 'ab-731-question-050', 'ab-731-question-051', 'ab-731-question-052', 'ab-731-question-053', 'ab-731-question-054', 'ab-731-question-055', 'ab-731-question-056', 'ab-731-question-057', 'ab-731-question-058', 'ab-731-question-059', 'ab-731-question-060', 'ab-731-question-061', 'ab-731-question-062', 'ab-731-question-063', 'ab-731-question-064', 'ab-731-question-065', 'ab-731-question-066', 'ab-731-question-067', 'ab-731-question-068', 'ab-731-question-069', 'ab-731-question-070', 'ab-731-question-071', 'ab-731-question-072', 'ab-731-question-073', 'ab-731-question-074', 'ab-731-question-075', 'ab-731-question-076', 'ab-731-question-077', 'ab-731-question-078', 'ab-731-question-079', 'ab-731-question-080', 'ab-731-question-081', 'ab-731-question-082', 'ab-731-question-083', 'ab-731-question-084', 'ab-731-question-085', 'ab-731-question-086', 'ab-731-question-087', 'ab-731-question-088', 'ab-731-question-089', 'ab-731-question-090', 'ab-731-question-091', 'ab-731-question-092', 'ab-731-question-093', 'ab-731-question-094', 'ab-731-question-095', 'ab-731-question-096', 'ab-731-question-097', 'ab-731-question-098', 'ab-731-question-099', 'ab-731-question-100');

COMMIT;
