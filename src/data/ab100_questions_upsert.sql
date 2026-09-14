-- ============================================================
-- CERTIFICATE: AB-100 - Agentic AI Business Solutions Architect
-- Total questions: 120
-- ============================================================

-- 1. Ensure Certificate is registered in custom_certificates table
INSERT INTO public.custom_certificates (
  id, name, code, description, difficulty, estimated_hours, color_class, icon_name, is_vip, is_disabled, badge
) VALUES (
  'ab-100',
  'Agentic AI Business Solutions Architect',
  'AB-100',
  'Chinh phục chứng chỉ Microsoft AB-100: Agentic AI Business Solutions Architect. Bộ 120 câu hỏi bao quát lập kế hoạch, thiết kế kiến trúc và triển khai các giải pháp AI Agentic tích hợp Copilot Studio, Microsoft Foundry và Azure AI.',
  'Nâng cao',
  '14-18 Giờ',
  'bg-gradient-to-br from-emerald-600 via-teal-800 to-slate-950 text-white',
  'Sparkles',
  false,
  false,
  'new'
) ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  code = EXCLUDED.code,
  description = EXCLUDED.description,
  difficulty = EXCLUDED.difficulty,
  estimated_hours = EXCLUDED.estimated_hours,
  color_class = EXCLUDED.color_class,
  icon_name = EXCLUDED.icon_name,
  badge = EXCLUDED.badge;

-- 2. Upsert Questions into questions table
INSERT INTO public.questions (
  id, cert_id, question_number, text, options,
  correct_answers, explanation, category, tags, image_url, status
) VALUES
  ('ab100-1', 'ab-100', 1, 'A company has had a Microsoft Copilot Studio agent in production for three months, and it has received positive user feedback.  
  
You need to identify the number of questions the agent did not answer and the number of sessions between users and the agent that were abandoned.  
  
Which Copilot Studio insights should you use? Each insight may be used once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"unanswered_questions","text":"The number of unanswered questions:","correctAnswer":"B"},{"id":"abandoned_sessions","text":"The number of abandoned sessions:","correctAnswer":"A"}],"choices":[{"key":"A","text":"Conversation outcomes"},{"key":"B","text":"Generated answer rate and quality"},{"key":"C","text":"Reactions"},{"key":"D","text":"Survey results"}]}'::jsonb, ARRAY['unanswered_questions=B', 'abandoned_sessions=A']::text[], 'Tỷ lệ câu trả lời được tạo và chất lượng theo dõi các truy vấn đã trả lời và chưa được trả lời. Kết quả hội thoại ghi lại kết quả của từng phiên, bao gồm cả những phiên bị bỏ dở.

**Tài liệu tham khảo:**
[Explore user questions, session, and feedback data - Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-questions-sessions)', 'Deploy AI Powered Business Solutions', ARRAY['AB-100', 'Deploy AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-2', 'ab-100', 2, 'A company uses Microsoft Copilot Studio agents.  
  
The company plans to deploy custom connectors across development, test, and production environments.  
  
You need to design an application lifecycle management (ALM) process that ensures consistency and prevents direct editing in production.  
  
Which two actions should you include in the design? Each correct answer presents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Deploy managed solutions to production."},{"key":"B","text":"Deploy unmanaged solutions to production."},{"key":"C","text":"Manually rebuild the agents in each environment."},{"key":"D","text":"Move the agents between the environments by using data export and import."},{"key":"E","text":"Include agents and connectors in a solution."}]'::jsonb, ARRAY['A', 'E']::text[], 'Các giải pháp được quản lý nhằm mục đích triển khai sản xuất và giúp ngăn chặn những thay đổi trực tiếp đối với các thành phần được triển khai. Các thành phần gói giải pháp Power Platform để truyền tải giữa các môi trường và có thể bao gồm các trình kết nối tùy chỉnh; Các tác nhân Copilot Studio được quản lý và triển khai trên nhiều môi trường bằng cách sử dụng các giải pháp.

**Tài liệu tham khảo:**
[ALM basics with Microsoft Power Platform](https://learn.microsoft.com/en-us/power-platform/alm/basics-alm) · [Create and manage solutions in Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-solutions-overview)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-3', 'ab-100', 3, 'A company uses a Microsoft Copilot Studio agent for customer support.  
  
You are reviewing and validating these prompts:  
  
- A prompt instructing the agent to “help the customer as best you can”  
- A prompt that retrieves product information from a knowledge base  
  
You must ensure the agent provides consistent, accurate responses. What should you do for each prompt?', '{"type":"matching_dropdown","statements":[{"id":"prompt_instructions","text":"A prompt that has instructions to \"help the customer as best you can\":","correctAnswer":"C","choiceKeys":["A","B","C"]},{"id":"knowledge_base_prompt","text":"A prompt that helps retrieve product information from a knowledge base:","correctAnswer":"E","choiceKeys":["D","E","F"]}],"choices":[{"key":"A","text":"Add filler words to make the prompt sound more natural and conversational."},{"key":"B","text":"Keep the prompt vague to enable model flexibility."},{"key":"C","text":"Rewrite the prompt with clear and task-specific instructions."},{"key":"D","text":"Add several open-ended questions to give the model broader context."},{"key":"E","text":"Use responses with only reference sources and limit the response scope."},{"key":"F","text":"Remove the knowledge source so that the model responds freely with general product information."}]}'::jsonb, ARRAY['prompt_instructions=C', 'knowledge_base_prompt=E']::text[], 'Các hướng dẫn rõ ràng, cụ thể về nhiệm vụ giúp giảm sự mơ hồ và làm cho hành vi của tổng đài viên nhất quán hơn. Đối với thông tin sản phẩm dựa trên kiến ​​thức, phản hồi grounding chỉ có trong các nguồn tham chiếu và giới hạn phạm vi phản hồi giúp ngăn chặn nội dung không được hỗ trợ và cải thiện độ chính xác.', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-4', 'ab-100', 4, 'A company has Microsoft Foundry agents that generate responses by using Azure OpenAI resources. The agents are deployed in both the United States and Europe.  
  
A company mandate requires that the agents and their grounding data comply with data-residency and data-movement regulations.  
  
You need to recommend a governance solution for the agents.  
  
What should you include in the recommendation?', '[{"key":"A","text":"Microsoft Defender for Cloud"},{"key":"B","text":"Azure Policy"},{"key":"C","text":"Azure Monitor"},{"key":"D","text":"Microsoft Purview"}]'::jsonb, ARRAY['D']::text[], 'Microsoft Purview cung cấp các biện pháp kiểm soát tuân thủ và quản trị dữ liệu cho các tác nhân Microsoft Foundry, bao gồm phân loại dữ liệu, nhãn nhạy cảm, ngăn ngừa mất dữ liệu và quản lý tuân thủ cho các tương tác AI. Những khả năng này giúp quản lý dữ liệu grounding và cách xử lý được quy định trong quá trình triển khai trong khu vực.

**Tài liệu tham khảo:**
[Use Microsoft Purview to manage data security & compliance for AI agents](https://learn.microsoft.com/en-us/purview/ai-agents) · [Microsoft Foundry Agent Service overview](https://learn.microsoft.com/en-us/azure/foundry/agents/overview)', 'Plan AI Powered Business Solutions', ARRAY['AB-100', 'Plan AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-5', 'ab-100', 5, 'Which tool should be used for the prospect-communication requirements in Dynamics 365 Sales?', '[{"key":"A","text":"Azure AI Search"},{"key":"B","text":"Copilot email assist"},{"key":"C","text":"the Voice template Microsoft Copilot Studio"},{"key":"D","text":"Deep Research in Microsoft Foundry Agent Service"}]'::jsonb, ARRAY['B']::text[], 'Hỗ trợ email Copilot giúp người bán Dynamics 365 Sales soạn nội dung email dành riêng cho khách hàng và được hỗ trợ cho các bản ghi cơ hội và khách hàng tiềm năng thông qua email Dynamics 365, trực tiếp cho phép trao đổi thư từ với khách hàng tiềm năng nhanh hơn.

**Tài liệu tham khảo:**
[Enable Copilot email assist](https://learn.microsoft.com/en-us/dynamics365/sales/enable-copilot-email-assist)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-6', 'ab-100', 6, 'What should you recommend to help the CEO fulfill their specific responsibilities?', '[{"key":"A","text":"the Microsoft Service Trust Portal"},{"key":"B","text":"Microsoft Foundry Tools"},{"key":"C","text":"Microsoft Purview"},{"key":"D","text":"the Responsible AI dashboard"},{"key":"E","text":"Compliance Center"}]'::jsonb, ARRAY['D']::text[], 'Bảng điều khiển AI có trách nhiệm cung cấp đánh giá thống nhất về hiệu suất, tính công bằng, khả năng diễn giải và phân tích lỗi của mô hình. Những khả năng này hỗ trợ đánh giá độ tin cậy, khả năng diễn giải, tính công bằng và tính tuân thủ như một phần của hoạt động thực hành AI có trách nhiệm.

**Tài liệu tham khảo:**
[Assess AI systems by using the Responsible AI dashboard](https://learn.microsoft.com/lb-lu/azure/machine-learning/concept-responsible-ai-dashboard?view=azureml-api-2) · [What is Responsible AI?](https://learn.microsoft.com/en-us/azure/machine-learning/concept-responsible-ai?view=azureml-api-2)', 'Plan AI Powered Business Solutions', ARRAY['AB-100', 'Plan AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-7', 'ab-100', 7, 'Which two components of the custom AI agent should be included in the application lifecycle management (AIM) process? Each correct answer represents part of the solution.  
  
**NOTE:** Each correct selection is worth one point.', '[{"key":"A","text":"an Azure package"},{"key":"B","text":"a ZIP package"},{"key":"C","text":"a Microsoft Power Platform solution"},{"key":"D","text":"a Cloud Scale Unit (CSU) package"},{"key":"E","text":"an X++model"}]'::jsonb, ARRAY['C', 'E']::text[], 'Giải pháp Microsoft Power Platform là bộ chứa ALM cho tác nhân Copilot Studio và các thành phần mã ngắn của nó trên các môi trường. Cần có mô hình X++ để quản lý phần mở rộng Quản lý chuỗi cung ứng Dynamics 365 và logic kinh doanh bên ngoài mà tổng đài viên phải sử dụng. Tệp ZIP là định dạng xuất cho một giải pháp, không phải là một thành phần ứng dụng riêng biệt.

**Tài liệu tham khảo:**
[Create and manage solutions in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-solutions-overview) · [Export and import agents using solutions](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-solutions-import-export)', 'Plan AI Powered Business Solutions', ARRAY['AB-100', 'Plan AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-8', 'ab-100', 8, 'A company uses a Microsoft Foundry agent that summarizes customer feedback and suggests products to customers. The agent accesses data from multiple knowledge sources.  
  
Users report slow agent response times.  
  
Telemetry indicates that the agent frequently hits its token-usage limit.  
  
You need to recommend a solution that reduces token usage without reducing the quality of generated responses.  
  
What should you recommend?', '[{"key":"A","text":"Chunk documents during indexing."},{"key":"B","text":"Reduce the number of knowledge sources used by the agent."},{"key":"C","text":"Reconfigure the prompts to limit the amount of retrieved content from the knowledge sources."},{"key":"D","text":"Lower the maximum token usage limit for the responses."}]'::jsonb, ARRAY['A']::text[], 'Phân đoạn tài liệu trong quá trình lập chỉ mục để việc truy xuất trả về các đoạn nhỏ hơn, có liên quan thay vì toàn bộ hoặc tài liệu quá khổ. Trong RAG và truy xuất tác nhân, các đoạn được truy xuất được đưa vào đầu vào mô hình; phân đoạn thích hợp giúp đáp ứng các giới hạn mã thông báo đầu vào và ngăn chặn việc cắt bớt trong khi vẫn giữ được nội dung grounding có liên quan.

**Tài liệu tham khảo:**
[Chunk large documents for RAG and vector search in Azure AI Search](https://learn.microsoft.com/en-us/azure/search/vector-search-how-to-chunk-documents) · [Retrieval augmented generation (RAG) and indexes in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation?view=foundry-classic)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-9', 'ab-100', 9, 'What should you include in the custom AI agent design to meet the R&D product specifications and compliance information requirements?', '{"type":"matching_dropdown","statements":[{"id":"expose_data","text":"To expose the data to the agent, create:","correctAnswer":"B","choiceKeys":["A","B","C","D"]},{"id":"add_to_agent","text":"Add to the agent:","correctAnswer":"F","choiceKeys":["E","F","G","H"]}],"choices":[{"key":"A","text":"an Azure AI Bot Service channel"},{"key":"B","text":"a custom connector"},{"key":"C","text":"a custom OData entity"},{"key":"D","text":"the Semantic Kernel"},{"key":"E","text":"an event trigger"},{"key":"F","text":"the MCP server"},{"key":"G","text":"a REST API"},{"key":"H","text":"a tool"}]}'::jsonb, ARRAY['expose_data=B', 'add_to_agent=F']::text[], 'Trình kết nối tùy chỉnh thiết lập kết nối Power Platform với máy chủ MCP hiện có. Việc thêm máy chủ MCP đó vào tác nhân Copilot Studio sẽ cung cấp các công cụ và tài nguyên đã xuất bản của nó để tác nhân có thể truy xuất dữ liệu tuân thủ và thông số kỹ thuật của sản phẩm R&D.

**Tài liệu tham khảo:**
[Connect your agent to an existing Model Context Protocol (MCP) server](https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-add-existing-server-to-agent) · [Add tools and resources from a Model Context Protocol (MCP) server to your agent](https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-add-components-to-agent)', 'Plan AI Powered Business Solutions', ARRAY['AB-100', 'Plan AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-10', 'ab-100', 10, 'A company intends to deploy a Microsoft Copilot Studio agent that analyzes historical business data to predict customer behavior.  
  
The data is presently stored in an Azure SQL database, flat files, APIs, and logs.  
  
You need to organize the data into a format that Copilot Studio can use as a knowledge source.  
  
What should the solution include?', '[{"key":"A","text":"Azure AI Search"},{"key":"B","text":"Azure Data Lake Storage"},{"key":"C","text":"Azure Cosmos DB"},{"key":"D","text":"Azure Translator in Foundry Tools"}]'::jsonb, ARRAY['A']::text[], 'Azure AI Search tạo chỉ mục có thể tìm kiếm trên nội dung doanh nghiệp và được Microsoft Copilot Studio hỗ trợ như một nguồn kiến ​​thức. Nó cung cấp lớp truy xuất cần thiết để tổ chức nội dung không đồng nhất cho tác nhân grounding, thay vì chỉ lưu trữ dữ liệu.

**Tài liệu tham khảo:**
[Add Azure AI Search as a knowledge source - Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-azure-ai-search)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-11', 'ab-100', 11, 'A company has a Microsoft 365 E5 subscription and uses Microsoft Copilot Studio.  
  
The company has a Microsoft SharePoint Online library that contains 10,000 policy PDFs from various departments. Each PDF has a populated **Department** column.  
  
Design a Copilot Studio agent that uses the SharePoint library as a knowledge source and meets these requirements:  
  
- Enable the agent to answer user questions about company policies.  
- Ensure that the agent can identify the departments and policies that are connected.  
  
What should the design include for each requirement?', '{"type":"matching_dropdown","statements":[{"id":"policy_questions","text":"Enable the agent to answer questions about company policies:","correctAnswer":"B","choiceKeys":["A","B","C","D"]},{"id":"department_connections","text":"Identify which departments and policies are connected:","correctAnswer":"G","choiceKeys":["E","F","G","H"]}],"choices":[{"key":"A","text":"Build a custom model in Microsoft Foundry."},{"key":"B","text":"From Copilot Studio, add SharePoint as a knowledge source."},{"key":"C","text":"Import the PDFs into Microsoft Dataverse."},{"key":"D","text":"Use AI Builder to process and feed SharePoint content."},{"key":"E","text":"Apply Microsoft Purview sensitivity labels."},{"key":"F","text":"Create a Microsoft Dataverse table for the departments."},{"key":"G","text":"From Copilot Studio, configure the SharePoint tool."},{"key":"H","text":"Upgrade to SharePoint Premium."}]}'::jsonb, ARRAY['policy_questions=B', 'department_connections=G']::text[], 'Việc thêm SharePoint làm nguồn kiến ​​thức Copilot Studio sẽ căn cứ vào câu trả lời của tổng đài viên trong các tệp PDF chính sách. Việc đặt cấu hình công cụ SharePoint cho phép tổng đài viên truy vấn nội dung SharePoint và sử dụng siêu dữ liệu Phòng ban của thư viện để kết nối các phòng ban với các chính sách liên quan.

**Tài liệu tham khảo:**
[Add SharePoint as a knowledge source in Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-sharepoint) · [Use the SharePoint tool in Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-tools/sharepoint)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-12', 'ab-100', 12, 'A company deploys agents that generate responses by using Azure OpenAI resources. The agents are deployed in both the United States and Europe.  
  
Recommend a governance solution that meets these requirements:  
  
- Enforce deployment of resources only to approved Azure regions.  
- Provide ongoing compliance verification for the resources.  
  
What should be included in the recommendation for each requirement?', '{"type":"matching_dropdown","statements":[{"id":"approved_regions","text":"Enforces the deployment of the resources to only approved regions:","correctAnswer":"B","choiceKeys":["A","B","C","D","E"]},{"id":"continuous_compliance","text":"Provides continuous compliance verification of the resources:","correctAnswer":"B","choiceKeys":["A","B","C","D","E"]}],"choices":[{"key":"A","text":"Azure Monitor"},{"key":"B","text":"Azure Policy"},{"key":"C","text":"Microsoft Defender for Cloud"},{"key":"D","text":"Microsoft Purview"},{"key":"E","text":"Microsoft Sentinel"}]}'::jsonb, ARRAY['approved_regions=B', 'continuous_compliance=B']::text[], 'Chính sách Azure có thể thực thi chính sách Vị trí được phép với hiệu ứng từ chối, ngăn tài nguyên được triển khai bên ngoài khu vực được phê duyệt. Nó cũng liên tục đánh giá các chính sách được giao và báo cáo trạng thái tuân thủ tài nguyên.

**Tài liệu tham khảo:**
[What is Azure Policy?](https://learn.microsoft.com/en-us/azure/governance/policy/overview) · [Azure Policy compliance states](https://learn.microsoft.com/en-us/azure/governance/policy/concepts/compliance-states)', 'Deploy AI Powered Business Solutions', ARRAY['AB-100', 'Deploy AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-13', 'ab-100', 13, 'What should be configured for the custom AI agent?', '[{"key":"A","text":"AI-assisted evaluators"},{"key":"B","text":"classic orchestration"},{"key":"C","text":"generative orchestration"},{"key":"D","text":"Azure OpenAI reasoning models"}]'::jsonb, ARRAY['C']::text[], 'Điều phối sáng tạo chọn chủ đề, công cụ, nguồn kiến ​​thức và các tác nhân khác bằng cách sử dụng mô tả của chúng và mục đích của người dùng. Nó hỗ trợ định tuyến hội thoại mà không cần dựa vào các cụm từ kích hoạt được tạo và có thể chọn các tác nhân được kết nối dựa trên mô tả của chúng.

**Tài liệu tham khảo:**
[Orchestrate agent behavior with generative AI](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-generative-actions) · [Set topic triggers - Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-triggers)', 'Deploy AI Powered Business Solutions', ARRAY['AB-100', 'Deploy AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-14', 'ab-100', 14, 'What should be recommended to help the CTO select a prebuilt agent?', '[{"key":"A","text":"Agent management"},{"key":"B","text":"Copilot Studio"},{"key":"C","text":"Lifecycle Services (LCS)"},{"key":"D","text":"Immersive Home"}]'::jsonb, ARRAY['A']::text[], 'Quản lý tổng đài viên cung cấp Thư viện để khám phá và kích hoạt tổng đài viên, đồng thời hỗ trợ xem trước khả năng của tổng đài viên trước khi kích hoạt. Điều này cho phép đánh giá các tác nhân dựng sẵn sẵn có và trình diễn các bên liên quan trước khi triển khai.

**Tài liệu tham khảo:**
[Responsible AI FAQ for agent management in finance and operations apps](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/fin-ops/copilot/faq-agent-mgmt)', 'Plan AI Powered Business Solutions', ARRAY['AB-100', 'Plan AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-15', 'ab-100', 15, 'Solution: Recommend Microsoft 365 Copilot for Sales.  
  
Does this fulfill the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[], 'Microsoft 365 Copilot for Sales cung cấp các chức năng của Outlook để tóm tắt chuỗi email và tạo thư trả lời nháp, trong khi trải nghiệm chuẩn bị cuộc họp Microsoft 365 Copilot cung cấp thông tin chuyên sâu từ dữ liệu cơ hội CRM. Những khả năng này bao gồm tóm tắt email, trả lời đề xuất và chuẩn bị cuộc họp được thông báo bằng CRM.

**Tài liệu tham khảo:**
[Sales agent FAQ](https://learn.microsoft.com/en-us/microsoft-sales-copilot/sales-m365-copilot-faq) · [FAQs for customer communication feature in Outlook and Microsoft 365 Copilot](https://learn.microsoft.com/en-us/microsoft-sales-copilot/faqs-customer-communication)', 'Plan AI Powered Business Solutions', ARRAY['AB-100', 'Plan AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-16', 'ab-100', 16, 'Solution: Recommend a classic Microsoft Dataverse workflow.  
  
Does this satisfy the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], 'Quy trình làm việc cổ điển của Microsoft Dataverse cung cấp khả năng tự động hóa quy trình dựa trên quy tắc; nó không cung cấp các khả năng AI tổng hợp để tóm tắt các chuỗi email Outlook, tạo các câu trả lời được đề xuất hoặc tạo các bản tóm tắt chuẩn bị cho cuộc họp được làm phong phú bằng dữ liệu CRM. Các khả năng của đại lý Bán hàng và Copilot của Microsoft cung cấp các tính năng tích hợp Outlook và Dynamics 365 đó.

**Tài liệu tham khảo:**
[Agents, Copilot, and AI capabilities in Dynamics 365 apps](https://learn.microsoft.com/en-us/dynamics365/copilot/ai-get-started) · [Boost sales efficiency with CRM-enriched email summaries in Outlook](https://learn.microsoft.com/en-us/microsoft-sales-copilot/email-summary-premium)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-17', 'ab-100', 17, 'Solution: Recommend a Microsoft 365 Copilot agent template.  
  
Does this satisfy the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], 'Mẫu tác nhân Microsoft 365 Copilot là điểm khởi đầu để xây dựng tác nhân khai báo; bản thân nó không cung cấp các bản tóm tắt chuỗi email Outlook bắt buộc và các câu trả lời đề xuất cùng với các bản tóm tắt chuẩn bị cuộc họp dựa trên dữ liệu Dynamics 365 CRM. Những khả năng đó yêu cầu tích hợp Outlook Copilot và Dynamics/Sales tích hợp sẵn thích hợp hoặc một tổng đài viên được đặt cấu hình cụ thể với các hướng dẫn và kết nối CRM cần thiết.

**Tài liệu tham khảo:**
[Templates for agents for Microsoft 365 Copilot](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-templates-overview) · [Microsoft 365 Copilot application card](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-application-card)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-18', 'ab-100', 18, 'You are creating end-to-end test scenarios for a business solution that uses Microsoft Dynamics 365 Sales and Dynamics 365 Finance.  
  
Ensure that the solution meets these test requirements:  
  
- Properly exchanges data between the Dynamics 365 apps  
- Aligns with defined user workflows and business processes  
  
Which testing type should be used for each requirement? Each testing type may be used once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"slot1","text":"Properly exchanges data between the Dynamics 365 apps","correctAnswer":"C"},{"id":"slot2","text":"Aligns with defined user workflows and business processes","correctAnswer":"E"}],"choices":[{"key":"A","text":"Drift"},{"key":"B","text":"Exploratory"},{"key":"C","text":"Integration"},{"key":"D","text":"Performance"},{"key":"E","text":"User acceptance"}]}'::jsonb, ARRAY['slot1=C', 'slot2=E']::text[], 'Kiểm thử tích hợp xác nhận cách các thành phần và hệ thống hoạt động cùng nhau, bao gồm các luồng dữ liệu và giao diện. Thử nghiệm chấp nhận của người dùng đánh giá giải pháp từ quan điểm của người dùng để xác nhận rằng nó đáp ứng nhu cầu kinh doanh, quy trình làm việc và mong đợi.

**Tài liệu tham khảo:**
[Test your Dynamics 365 solution before deployment](https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/testing-strategy) · [Types of tests that implementation projects use](https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/testing-strategy-test-types)', 'Plan AI Powered Business Solutions', ARRAY['AB-100', 'Plan AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-19', 'ab-100', 19, 'A company has an AI solution that uses Azure OpenAI models.  
  
You need to recommend a governance solution that monitors and audits changes to model configurations and data usage. The solution must minimize administrative effort.  
  
What should you include in the recommendation?', '[{"key":"A","text":"Azure Monitor"},{"key":"B","text":"Azure Stream Analytics"},{"key":"C","text":"Azure API Management"},{"key":"D","text":"Azure Policy"},{"key":"E","text":"Microsoft Purview"}]'::jsonb, ARRAY['E']::text[], 'Microsoft Purview cung cấp khả năng quản trị dữ liệu và AI tập trung, bao gồm hồ sơ kiểm toán và giám sát các tương tác AI cũng như việc sử dụng dữ liệu. Các tính năng quản trị và tuân thủ tích hợp của nó giúp giảm chi phí quản trị trong việc xây dựng các quy trình kiểm toán, chính sách và đo từ xa riêng biệt.

**Tài liệu tham khảo:**
[Develop and deploy secure and compliant AI apps in Microsoft Foundry with Microsoft Purview](https://learn.microsoft.com/en-us/purview/developer/secure-ai-with-purview) · [Azure AI security best practices](https://learn.microsoft.com/en-us/azure/security/fundamentals/ai-security-best-practices)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-20', 'ab-100', 20, 'A company intends to deploy a Microsoft Dynamics 365 Contact Center agent.  
  
You must ensure that the agent can transfer a conversation to a live customer service representative.  
  
Which two components should be included in the solution? Each correct answer presents part of the solution.  
  
**NOTE:** Each correct selection is worth one point.', '[{"key":"A","text":"Microsoft Foundry"},{"key":"B","text":"Microsoft Copilot Studio"},{"key":"C","text":"Microsoft 365 Agents Toolkit"},{"key":"D","text":"an Azure AI Bot Service skill"},{"key":"E","text":"Customer engagement hub"}]'::jsonb, ARRAY['B', 'E']::text[], 'Microsoft Copilot Studio cung cấp cho tác nhân và khả năng hội thoại Chuyển giao của nó. Trung tâm tương tác khách hàng được kết nối—cụ thể là Dynamics 365 Customer Service—nhận được báo cáo, chuyển nó đến hàng đợi thích hợp và cho phép đại diện dịch vụ khách hàng trực tiếp tiếp tục cuộc trò chuyện với ngữ cảnh của nó.

**Tài liệu tham khảo:**
[Configure handoff to Dynamics 365 Customer Service](https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-hand-off-omnichannel) · [Hand off to a live agent](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-hand-off)', 'Deploy AI Powered Business Solutions', ARRAY['AB-100', 'Deploy AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-21', 'ab-100', 21, 'A company has an Azure environment that supports several business units.  
  
The company intends to implement an AI solution that will perform sentiment analysis on customer product reviews.  
  
You need to assess the solution’s potential cost to support return on AI investment (ROAI) analysis.  
  
What should you use?', '[{"key":"A","text":"Total Cost of Ownership (TCO) Calculator"},{"key":"B","text":"Azure Reservations"},{"key":"C","text":"Azure pricing calculator"},{"key":"D","text":"Azure Monitor"}]'::jsonb, ARRAY['C']::text[], 'Công cụ tính giá Azure chuyển đổi việc sử dụng và cấu hình dịch vụ Azure dự kiến ​​thành chi phí ước tính, cho phép lập kế hoạch chi phí và phân tích lợi tức đầu tư cho giải pháp AI được đề xuất. Công cụ tính tổng chi phí sở hữu nhằm mục đích so sánh chi phí cơ sở hạ tầng tại chỗ với chi phí Azure, trong khi việc đặt trước cung cấp các cam kết về giá chiết khấu và Azure Monitor thu thập dữ liệu đo từ xa hoạt động.

**Tài liệu tham khảo:**
[Estimate costs with the Azure pricing calculator](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/pricing-calculator)', 'Plan AI Powered Business Solutions', ARRAY['AB-100', 'Plan AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-22', 'ab-100', 22, 'You need to recommend a Microsoft Power Platform customer-support solution with AI capabilities in Microsoft Power Automate that meets these requirements:  
  
- Use a centralized workspace for AI models.  
- Generate brief overviews from large volumes of unstructured text, such as case notes or transcripts, without extra training or coding.  
  
What should be included in the recommendation for each requirement?', '{"type":"matching_dropdown","statements":[{"id":"centralized_workspace","text":"Use a centralized workspace:","correctAnswer":"A","choiceKeys":["A","B","C","D"]},{"id":"short_overviews","text":"Generate short overviews:","correctAnswer":"F","choiceKeys":["E","F","G","H","I"]}],"choices":[{"key":"A","text":"An Microsoft Foundry hub"},{"key":"B","text":"Azure OpenAI Foundry"},{"key":"C","text":"Microsoft Copilot Studio"},{"key":"D","text":"Microsoft Dataverse"},{"key":"E","text":"An AI Builder prebuilt model"},{"key":"F","text":"An AI Builder prebuilt prompt"},{"key":"G","text":"Azure OpenAI"},{"key":"H","text":"GitHub Copilot"},{"key":"I","text":"Microsoft Copilot in Power Automate"}]}'::jsonb, ARRAY['centralized_workspace=A', 'short_overviews=F']::text[], 'Trung tâm Microsoft Foundry tập trung các tài nguyên và dự án AI được chia sẻ. Lời nhắc dựng sẵn AISummarize của AI Builder tóm tắt văn bản được cung cấp và có thể được sử dụng từ Power Automate mà không cần tạo hoặc đào tạo mô hình tùy chỉnh hay viết mã.

**Tài liệu tham khảo:**
[Get started with prebuilt prompts](https://learn.microsoft.com/en-us/ai-builder/prebuilt-prompts) · [Baseline Microsoft Foundry Chat reference architecture in an Azure landing zone](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/architecture/baseline-microsoft-foundry-landing-zone)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-23', 'ab-100', 23, 'You are designing a testing solution for a Microsoft Copilot Studio agent that integrates with Microsoft Dynamics 365 Customer Service and Dynamics 365 Sales.  
  
Design end-to-end scenarios to test the agent’s ability to:  
  
- Coordinate tasks and data interactions across both Dynamics 365 apps.  
- Interpret user input and produce contextually relevant outputs.  
  
Which test scenario and metric should be included in the design?', '{"type":"matching_dropdown","statements":[{"id":"test_scenario","text":"Test scenario:","correctAnswer":"B","choiceKeys":["A","B","C"]},{"id":"metric","text":"Metric:","correctAnswer":"F","choiceKeys":["D","E","F"]}],"choices":[{"key":"A","text":"In each app, test isolated tasks without using workflows."},{"key":"B","text":"Run task-based scenarios that involve both apps."},{"key":"C","text":"Test visual consistency across both apps."},{"key":"D","text":"Measure the initial prompt response time for each app."},{"key":"E","text":"Track the average click rate across both apps."},{"key":"F","text":"Track the successful completion of cross-app tasks."}]}'::jsonb, ARRAY['test_scenario=B', 'metric=F']::text[], 'Thử nghiệm toàn diện sẽ thực hiện các luồng nhiệm vụ thực tế trải rộng trên cả ứng dụng Dynamics 365 được kết nối. Chỉ số kết quả có ý nghĩa là việc hoàn thành thành công các nhiệm vụ ứng dụng chéo đó, giúp xác thực sự điều phối, tương tác dữ liệu và phản hồi theo ngữ cảnh của tác nhân.', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-24', 'ab-100', 24, 'A company operates an ecommerce support portal that uses Microsoft Dataverse.  
  
You are designing a Microsoft Copilot Studio agent for the portal. The agent must meet these requirements:  
  
- Respond with a default help message when user input is unclear.  
- Start external processes, such as retrieving order status, when users make specific requests.  
  
Generative orchestration will be enabled for the solution.  
  
Recommend a feature for each requirement. Each feature may be used once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"default_help","text":"Respond with a default help message when the user input is unclear:","correctAnswer":"C"},{"id":"external_processes","text":"Initiate external processes when requested:","correctAnswer":"A"}],"choices":[{"key":"A","text":"A tool (connector)"},{"key":"B","text":"A trigger phrase"},{"key":"C","text":"The Fallback topic"},{"key":"D","text":"A skill"},{"key":"E","text":"The Escalate topic"}]}'::jsonb, ARRAY['default_help=C', 'external_processes=A']::text[], 'Chủ đề dự phòng Copilot Studio xử lý thông tin đầu vào không khớp với chủ đề dự kiến, do đó, chủ đề này có thể cung cấp phản hồi trợ giúp mặc định. Công cụ dựa trên trình kết nối cho phép tác nhân gọi một hành động bên ngoài, chẳng hạn như tra cứu trạng thái đơn hàng; điều phối sáng tạo có thể chọn và gọi một công cụ thích hợp theo yêu cầu của người dùng.

**Tài liệu tham khảo:**
[Configure the system fallback topic - Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-system-fallback-topic) · [Add tools to custom agents - Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-tools-custom-agent)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-25', 'ab-100', 25, 'You are planning an AI strategy for Microsoft Dynamics 365 finance and operations apps and are assessing Microsoft Copilot Studio for in-app help and guidance using generative AI general knowledge.  
  
Recommend which knowledge sources to include in the generative help and guidance agent while minimizing the likelihood of inaccurate responses.', '{"type":"matching_dropdown","statements":[{"id":"custom_knowledge_sources","text":"Custom knowledge sources:","correctAnswer":"A","choiceKeys":["A","B","C"]},{"id":"ai_general_knowledge","text":"AI general knowledge:","correctAnswer":"E","choiceKeys":["D","E","F"]}],"choices":[{"key":"A","text":"Must be uploaded to the agent"},{"key":"B","text":"Must be excluded from the agent"},{"key":"C","text":"Are not supported"},{"key":"D","text":"Must be enabled for the agent"},{"key":"E","text":"Must be disabled for the agent"},{"key":"F","text":"Is not supported"}]}'::jsonb, ARRAY['custom_knowledge_sources=A', 'ai_general_knowledge=E']::text[], 'Các nguồn kiến ​​thức tùy chỉnh đã tải lên cho phép nhân viên Copilot Studio sử dụng nội dung dành riêng cho tổ chức đã được phê duyệt cho phản hồi của mình. Kiến thức chung về AI dựa trên kiến ​​thức mô hình công cộng rộng rãi; việc vô hiệu hóa nó sẽ khiến tác nhân bị hạn chế trong các nguồn kiến ​​thức được quản lý và giảm nguy cơ phản hồi không chính xác hoặc không có căn cứ.

**Tài liệu tham khảo:**
[Microsoft Copilot Studio – Generative AI](https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-gpt-overview)', 'Plan AI Powered Business Solutions', ARRAY['AB-100', 'Plan AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-26', 'ab-100', 26, 'A company maintains Microsoft Power Platform development, staging, and production environments. Each environment has separate Microsoft Dataverse tables and an Azure AI Search index.  
  
You are designing an application lifecycle management (ALM) process to deploy a Microsoft Copilot Studio agent between those environments.  
  
The company has a Copilot Studio agent called Agent1 in development. Agent1 uses these grounding data sources:  
  
- A Dataverse table named CustomerOrders  
- An Azure AI Search index named customer-knowledge  
  
You need to deploy Agent1 to production. The solution must ensure the agent uses the production grounding sources, minimize downtime, and handle credentials and endpoints securely.  
  
What should be included in the deployment-package solution, and what should be reconfigured after deployment?', '{"type":"matching_dropdown","statements":[{"id":"include","text":"Include in the deployment package solution:","correctAnswer":"D","choiceKeys":["A","B","C","D","E"]},{"id":"reconfigure","text":"Reconfigure after the deployment:","correctAnswer":"J","choiceKeys":["F","G","H","I","J"]}],"choices":[{"key":"A","text":"Agent1 only"},{"key":"B","text":"The data sources only"},{"key":"C","text":"Agent1 and the data source connections"},{"key":"D","text":"Agent1 and references to the data sources"},{"key":"E","text":"Agent1, the data sources, and the data source connections"},{"key":"F","text":"The Dataverse connection only"},{"key":"G","text":"The Azure AI Search connection only"},{"key":"H","text":"The Dataverse and Azure AI Search connections"},{"key":"I","text":"The Agent1 configuration"},{"key":"J","text":"The environment variables"}]}'::jsonb, ARRAY['include=D', 'reconfigure=J']::text[], 'Trong Copilot Studio, tác nhân là tạo phẩm giải pháp Power Platform hạng nhất và giải pháp phải chứa tác nhân cùng với các tham chiếu đến kiến ​​thức/nguồn grounding của nó — chứ không phải các hàng Dataverse cơ bản hoặc bản thân chỉ mục Azure AI Search vốn đã tồn tại độc lập trong từng môi trường. Biến môi trường là cơ chế ALM giúp giải pháp có thể di động: chúng chứa các điểm cuối dành riêng cho môi trường (ví dụ: tên chỉ mục và điểm cuối Azure AI Search sản xuất) và có thể lấy các giá trị một cách an toàn từ Azure Key Vault, do đó, bạn trỏ tác nhân vào các nguồn grounding sản xuất bằng cách đặt các giá trị biến sau khi nhập thay vì chỉnh sửa tác nhân đã xuất bản, giúp giảm thiểu thời gian ngừng hoạt động. Việc vận chuyển các nguồn dữ liệu hoặc kết nối trực tiếp trong gói sẽ ghi đè lên dữ liệu sản xuất hoặc làm rò rỉ thông tin xác thực của nhà phát triển, vì vậy các tùy chọn đó là sai. Các tham chiếu kết nối xử lý ràng buộc thông tin xác thực trong trình hướng dẫn nhập, nhưng việc nhắm mục tiêu lại điểm cuối/nguồn mà câu hỏi nhấn mạnh được thực hiện thông qua các biến môi trường.

**Tài liệu tham khảo:**
- [Copilot Studio ALM strategy](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/alm)
- [Environment variables overview](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/environmentvariables)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-27', 'ab-100', 27, 'A company uses multiple Microsoft Copilot Studio agents in different channels.  
  
You need to recommend a monitoring solution that delivers comprehensive telemetry data and performance insights for the agents.  
  
What should you include in the recommendation?', '[{"key":"A","text":"Application Insights"},{"key":"B","text":"Azure Advisor"},{"key":"C","text":"Azure DevOps"},{"key":"D","text":"Microsoft Dynamics 365 Customer Voice"}]'::jsonb, ARRAY['A']::text[], 'Application Insights cung cấp chức năng giám sát chẩn đoán và đo từ xa cho các tác nhân Copilot Studio. Trải nghiệm giám sát tác nhân của nó hợp nhất phép đo từ xa giữa các nguồn, cho phép phân tích hiệu suất, khắc phục lỗi và tối ưu hóa.

**Tài liệu tham khảo:**
[Monitor AI agents with Application Insights](https://learn.microsoft.com/en-us/azure/azure-monitor/app/agents-view) · [Capture telemetry with Application Insights](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-bot-framework-composer-capture-telemetry)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-28', 'ab-100', 28, 'A company operates multiple AI models that generate sales transactions.  
  
Every model release must be reviewed by a security and compliance team before deployment to the production environment. To properly identify potential exposures introduced, the security and compliance team must be able to access earlier versions.  
  
You need to recommend a solution for evaluating the impact of every production deployment. The solution must improve business continuity.  
  
What should you recommend?', '[{"key":"A","text":"Create a central model registry that uses version history."},{"key":"B","text":"Establish a promotion process by using a quality gate."},{"key":"C","text":"Implement version control for all the AI system components."},{"key":"D","text":"Track model retirement schedules to prevent service disruptions."}]'::jsonb, ARRAY['C']::text[], 'Kiểm soát phiên bản cho tất cả các thành phần hệ thống AI tạo ra một bản kiểm tra các thay đổi và cho phép xác định và khôi phục nhanh chóng các mô hình, đường dẫn dữ liệu và cấu hình hệ thống có vấn đề. Điều này hỗ trợ việc đánh giá tính bảo mật và tuân thủ của các trạng thái trước đó, đồng thời cải thiện tính liên tục của hoạt động kinh doanh bằng cách cho phép khôi phục cấu hình đã biết rõ.

**Tài liệu tham khảo:**
[Manage AI — Cloud Adoption Framework](https://learn.microsoft.com/ar-sa/azure/cloud-adoption-framework/scenarios/ai/manage)', 'Plan AI Powered Business Solutions', ARRAY['AB-100', 'Plan AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-29', 'ab-100', 29, 'A company uses Azure OpenAI models that use Microsoft Fabric grounding data for agents. The models are fine-tuned using proprietary datasets.  
  
Design a governance solution that meets these requirements:  
  
- Limit access to the grounding data to assigned roles.  
- Limit model fine-tuning to only the AI engineering team.  
  
What should the design include?', '{"type":"matching_dropdown","statements":[{"id":"grounding_access","text":"Restricts access to the grounding data:","correctAnswer":"D","choiceKeys":["A","B","C","D"]},{"id":"fine_tuning_access","text":"Restricts model fine-tuning:","correctAnswer":"G","choiceKeys":["C","E","F","G"]}],"choices":[{"key":"A","text":"Azure AI Content Safety"},{"key":"B","text":"Azure Monitor alerts"},{"key":"C","text":"Azure Policy compliance rules"},{"key":"D","text":"Microsoft Purview access policies"},{"key":"E","text":"Azure Resource Manager (ARM) resource locks"},{"key":"F","text":"Microsoft Entra Conditional Access"},{"key":"G","text":"Role-based access control (RBAC) in Microsoft Foundry"}]}'::jsonb, ARRAY['grounding_access=D', 'fine_tuning_access=G']::text[], 'Chính sách truy cập Microsoft Purview cung cấp khả năng quản lý tập trung, dựa trên vai trò để truy cập vào các nội dung dữ liệu được hỗ trợ, bao gồm cả dữ liệu được quản lý được sử dụng cho grounding. Azure AI Foundry sử dụng Azure RBAC để kiểm soát các hành động và quyền; chỉ gán quyền fine-tuning cho nhóm kỹ thuật AI sẽ hạn chế những người có thể tinh chỉnh các mô hình.

**Tài liệu tham khảo:**
[Microsoft Purview data access policies](https://learn.microsoft.com/en-us/purview/data-access-policies) · [Azure AI Foundry role-based access control](https://learn.microsoft.com/en-us/azure/ai-foundry/concepts/rbac-azure-ai-foundry)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-30', 'ab-100', 30, 'A company has an AI agent that automates reviewing customer feedback stored in a cloud database.  
  
You plan to create monthly reports from the agent''s output to gain insight into customer sentiment and inform product development and marketing.  
  
You must ensure the data ingested by the agent is clean and appropriate for its intended use.  
  
What should you do to prepare the data?', '[{"key":"A","text":"Create a workflow in Microsoft Power Automate."},{"key":"B","text":"Identify and address biased data."},{"key":"C","text":"Create an agent flow in Microsoft Copilot Studio."},{"key":"D","text":"Sort the database by customer last name."}]'::jsonb, ARRAY['B']::text[], 'Dữ liệu sai lệch có thể khiến hệ thống AI tạo ra những hiểu biết sâu sắc về cảm tính không công bằng, không chính xác hoặc gây hiểu lầm. Việc chuẩn bị dữ liệu phải xác định sai lệch và điều chỉnh sự mất cân bằng để đầu vào mang tính đại diện và phù hợp với mục đích báo cáo. Hướng dẫn của Microsoft khuyến nghị kiểm tra dữ liệu để phát hiện những sai lệch và mất cân bằng cũng như thực hiện hành động khắc phục.

**Tài liệu tham khảo:**
[Apply responsible AI principles - Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/responsible-ai)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-31', 'ab-100', 31, 'You are designing an AI business solution that includes the following components:  
  
- A Microsoft Power Automate workflow  
- A Microsoft Copilot Studio agent  
- A Microsoft Dataverse database  
- A Microsoft Power Apps app  
  
As part of the application lifecycle management (ALM) process, you plan to package these components so they can be deployed together to other environments.  
  
You need to recommend a solution that supports versioning, dependencies, and deployments.  
  
What should you include in the recommendation?', '[{"key":"A","text":"GitHub Actions"},{"key":"B","text":"Azure DevOps"},{"key":"C","text":"Microsoft Power Platform solutions"}]'::jsonb, ARRAY['C']::text[], 'Các giải pháp Microsoft Power Platform đóng gói các thành phần Dataverse và Power Apps liên quan, luồng Power Automate và tác nhân Copilot Studio vào một đơn vị có thể triển khai. Các giải pháp theo dõi các phiên bản, quản lý các phần phụ thuộc của thành phần và hỗ trợ di chuyển ứng dụng được nhóm giữa các môi trường như một phần của ALM.', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-32', 'ab-100', 32, 'A company uses a Microsoft Copilot Studio agent to automate tasks in a web application.  
  
During testing, you find that the automation occasionally fails because the app’s user interface changes frequently.  
  
You need to recommend a solution that ensures the agent can successfully automate the tasks. The solution must minimize changes to the agent.  
  
What should you include in the recommendation?', '[{"key":"A","text":"Computer Use in Copilot Studio"},{"key":"B","text":"custom models in Azure AI Studio"},{"key":"C","text":"conversation topics in Copilot Studio"},{"key":"D","text":"an agent flow in Copilot Studio"}]'::jsonb, ARRAY['A']::text[], 'Sử dụng máy tính trong Copilot Studio thực hiện tự động hóa GUI bằng cách sử dụng lý luận trực quan và hướng dẫn ngôn ngữ tự nhiên. Nó có thể thích ứng với những thay đổi về giao diện người dùng, chẳng hạn như các nút hoặc bố cục đã được dịch chuyển, giảm nhu cầu sửa đổi tính năng tự động hóa của tác nhân khi giao diện người dùng ứng dụng web thay đổi.

**Tài liệu tham khảo:**
[Automate web and desktop apps with computer use](https://learn.microsoft.com/en-us/power-platform/release-plan/2026wave1/microsoft-copilot-studio/automate-web-desktop-apps-computer-use)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-33', 'ab-100', 33, 'A company uses Microsoft Dynamics 365 Sales to manage leads stored in a Microsoft Dataverse table named **Lead**, using non-standard terminology and custom columns.  
  
You need to configure business terms for the **Lead** table so Microsoft Copilot controls can summarize the leads efficiently. The solution must minimize administrative effort.  
  
How should you configure the business terms?', '[{"key":"A","text":"Combine all the fields into one custom field."},{"key":"B","text":"Map the field display names as business terms."},{"key":"C","text":"Add the schema names as business terms."},{"key":"D","text":"Create new business terms for each field."}]'::jsonb, ARRAY['B']::text[], 'Việc ánh xạ tên hiển thị trường dưới dạng thuật ngữ kinh doanh mang lại cho người dùng Microsoft Copilot nhãn ngữ nghĩa cho các cột Khách hàng tiềm năng tùy chỉnh mà không yêu cầu tạo bản ghi thuật ngữ kinh doanh riêng biệt cho từng trường. Tên lược đồ là định danh kỹ thuật chứ không phải là thuật ngữ kinh doanh thích hợp.', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-34', 'ab-100', 34, 'You use Microsoft Copilot Studio analytics to evaluate the performance of a deployed Copilot Studio agent.  
  
Identify the performance metric to use for each listed requirement.', '{"type":"matching_dropdown","statements":[{"id":"escalated_engaged_sessions","text":"The percentage of engaged sessions that are escalated to a representative:","correctAnswer":"D","choiceKeys":["A","B","C","D"]},{"id":"knowledge_source_error_queries","text":"The number of agent queries that cause a knowledge source error:","correctAnswer":"A","choiceKeys":["A","C","D"]}],"choices":[{"key":"A","text":"Answer quality"},{"key":"B","text":"Customer Satisfaction (CSAT) score"},{"key":"C","text":"Engagement rate"},{"key":"D","text":"Escalation rate"}]}'::jsonb, ARRAY['escalated_engaged_sessions=D', 'knowledge_source_error_queries=A']::text[], 'Tỷ lệ leo thang là tỷ lệ các phiên tham gia được chuyển giao cho người đại diện. Phân tích chất lượng câu trả lời bao gồm chất lượng câu trả lời nguồn kiến ​​thức và thông tin lỗi, làm cho nó trở thành thước đo có thể áp dụng cho các truy vấn gây ra lỗi nguồn kiến ​​thức.

**Tài liệu tham khảo:**
[Deflection overview - Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/deflection-overview) · [Explore user questions, session, and feedback data - Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-questions-sessions)', 'Deploy AI Powered Business Solutions', ARRAY['AB-100', 'Deploy AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-35', 'ab-100', 35, 'A company is extending Copilot in Microsoft Dynamics 365 Customer Service.  
  
You need to recommend an automated application lifecycle management (ALM) process that enables the Copilot components to be developed safely, tested, and promoted to production.  
  
Which two actions should be included in the ALM process? Each correct answer presents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Use an unmanaged solution in production."},{"key":"B","text":"Rebuild the agents in each environment."},{"key":"C","text":"Use Microsoft Power Platform pipelines."},{"key":"D","text":"Include the components in a solution."},{"key":"E","text":"Store the agent transcripts in source control."}]'::jsonb, ARRAY['C', 'D']::text[], 'Các tác nhân và thành phần Copilot Studio được tạo và quản lý trong các giải pháp Power Platform, hỗ trợ di chuyển các thành phần được đóng gói giống nhau trên các môi trường. Quy trình Power Platform tự động hóa việc triển khai các giải pháp đó thông qua các giai đoạn phát triển, thử nghiệm và sản xuất.

**Tài liệu tham khảo:**
[Create and manage solutions in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-solutions-overview) · [Application lifecycle management (ALM) with Microsoft Power Platform](https://learn.microsoft.com/en-us/power-platform/alm/)', 'Plan AI Powered Business Solutions', ARRAY['AB-100', 'Plan AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-36', 'ab-100', 36, 'A company has an AI solution that uses a Microsoft Copilot Studio agent.  
  
You must monitor the agent’s performance and meet these requirements:  
  
- Monitor the agent’s telemetry in near-real-time (NRT).  
- Download transcripts of full conversations.  
- Monitor the agent’s usage and performance.  
  
What should you use for each requirement? Each option may be used once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"nrt_telemetry","text":"Monitor the agent''s telemetry in NRT:","correctAnswer":"A"},{"id":"download_transcripts","text":"Download transcripts of full conversations:","correctAnswer":"D"},{"id":"usage_performance","text":"Monitor the agent''s usage and performance:","correctAnswer":"B"}],"choices":[{"key":"A","text":"Application Insights"},{"key":"B","text":"Copilot Studio"},{"key":"C","text":"Log Analytics"},{"key":"D","text":"Microsoft Power Apps"}]}'::jsonb, ARRAY['nrt_telemetry=A', 'download_transcripts=D', 'usage_performance=B']::text[], 'Application Insights ghi lại phép đo từ xa của tác nhân Copilot Studio và có thể hiển thị nó trong thời gian thực. Power Apps cung cấp bản tải xuống bản ghi hoàn chỉnh, trong khi bản tải xuống của Copilot Studio là một tập hợp con và có thể cắt bớt các câu trả lời. Phân tích tích hợp của Copilot Studio cung cấp khả năng giám sát hiệu suất và mức sử dụng.

**Tài liệu tham khảo:**
[Understand downloaded session data from Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-transcripts-studio) · [Understand downloaded conversation transcripts from Power Apps](https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-transcripts-powerapps)', 'Deploy AI Powered Business Solutions', ARRAY['AB-100', 'Deploy AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-37', 'ab-100', 37, 'Which two components of the custom AI agent design should the CFO assess in the quarterly agent analysis? Each correct answer represents part of the solution.  
  
**NOTE:** Each correct selection is worth one point.', '[{"key":"A","text":"the GPT models used for the agent"},{"key":"B","text":"the average characters in a chat message"},{"key":"C","text":"the agent orchestration method"},{"key":"D","text":"the average session time per agent"}]'::jsonb, ARRAY['C', 'D']::text[], 'Đánh giá hàng quý của CFO về một tác nhân tùy chỉnh là một bài tập về chi phí/ROI và trung tâm phân tích việc sử dụng Copilot Studio / Foundry sẽ xem xét cách thức hoạt động của tác nhân và mức độ sử dụng của nó. Phương pháp điều phối tác nhân (C) điều khiển số lượng lệnh gọi mô hình, lệnh gọi công cụ và truy xuất nguồn kiến ​​thức xảy ra, điều này trực tiếp định hình mức tiêu thụ và chi phí, trong khi thời gian phiên trung bình trên mỗi tác nhân (D) cho biết mức độ tương tác và liệu các phiên (và tín dụng/mã thông báo mà chúng tiêu thụ) có đang được sử dụng hiệu quả hay không. Danh sách mô hình GPT cụ thể (A) và ký tự trung bình trên mỗi tin nhắn (B) là các chi tiết triển khai cấp thấp chứ không phải là các thành phần mà CFO đánh giá để phân tích chi phí hàng quý.

**Tài liệu tham khảo:**
[Plan and manage costs for Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/manage-costs) · [AB-100 Study Guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-100)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-38', 'ab-100', 38, 'A company has two Microsoft Power Platform environments, named Dev1 and Prod1. A Microsoft Copilot Studio agent named Agent1 is created within a solution in the Dev1 environment.  
  
You plan to deploy Agent1 to Prod1.  
  
You need to make Agent1 available to users in Prod1 while minimizing administrative effort.  
  
What should you do?', '[{"key":"A","text":"Share Agent1 with the users in Prod1."},{"key":"B","text":"Export the solution as an unmanaged solution and import the solution into Prod1."},{"key":"C","text":"Export the solution as a managed solution and import the solution into Prod1."},{"key":"D","text":"Create a new Copilot Studio agent in Prod1 by replicating the configuration of Agent1."}]'::jsonb, ARRAY['C']::text[], 'Các giải pháp được quản lý là thành phần triển khai được đề xuất cho môi trường sản xuất Power Platform. Việc xuất giải pháp phát triển không được quản lý dưới dạng được quản lý và nhập giải pháp đó vào Prod1 sẽ chuyển Agent1 dưới dạng triển khai sản xuất được quản lý, thay vì yêu cầu giải trí thủ công hoặc để các thành phần sản xuất ở dạng tùy chỉnh không được quản lý. Tác nhân Copilot Studio đã nhập phải được xuất bản trước khi có thể chia sẻ với người dùng.

**Tài liệu tham khảo:**
[Solution concepts with Power Platform](https://learn.microsoft.com/en-us/power-platform/alm/solution-concepts-alm) · [Export and import agents using solutions](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-solutions-import-export)', 'Deploy AI Powered Business Solutions', ARRAY['AB-100', 'Deploy AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-39', 'ab-100', 39, 'A company has an Azure environment that supports multiple business units.  
  
The company plans to implement an AI solution to perform sentiment analysis on customer product reviews.  
  
You need to assess the solution’s potential cost to support return on AI investment (ROAI) analysis.  
  
What should you use?', '[{"key":"A","text":"Cost Management + Billing"},{"key":"B","text":"Microsoft Fabric SKU Estimator"},{"key":"C","text":"Total Cost of Ownership (TCO) Calculator"},{"key":"D","text":"Azure Reservations"}]'::jsonb, ARRAY['A']::text[], 'Microsoft Cost Management + Billing cung cấp khả năng phân tích, báo cáo, giám sát và tối ưu hóa chi phí trên phạm vi tài nguyên và thanh toán Azure. Những khả năng này cho phép tổ chức đánh giá và theo dõi chi phí của giải pháp AI để hỗ trợ phân tích ROAI. [Microsoft Cost Management overview](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/overview-cost-management)

**Tài liệu tham khảo:**
[Overview of Cost Management - Microsoft Cost Management](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/overview-cost-management)', 'Plan AI Powered Business Solutions', ARRAY['AB-100', 'Plan AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-40', 'ab-100', 40, 'A company uses Microsoft Dynamics 365 to manage its service operations. Dispatchers coordinate service requests, while technicians carry out scheduled onsite work.  
  
You need to design a solution that uses Microsoft Copilot to increase the efficiency of service operations. The solution must meet these requirements:  
  
- Provide AI-driven assistance that helps staff organize and resolve work orders.  
- Provide contextual AI support to frontline workers as they prepare for and complete customer appointments.  
  
Which two components should you include in the design? Each correct answer presents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Copilot Service workspace"},{"key":"B","text":"Copilot in Outlook"},{"key":"C","text":"Dynamics 365 Customer Service"},{"key":"D","text":"Copilot in Customer Service"},{"key":"E","text":"Copilot in Field Service"},{"key":"F","text":"the Dynamics 365 Field Service mobile app"}]'::jsonb, ARRAY['E', 'F']::text[], 'Copilot trong Dynamics 365 Field Service cung cấp hỗ trợ AI cho công việc theo lệnh sản xuất, bao gồm các bản tóm tắt, truy vấn bằng ngôn ngữ tự nhiên và cập nhật lệnh sản xuất. Ứng dụng di động Dynamics 365 Field Service được các kỹ thuật viên tuyến đầu sử dụng cho các công việc tại chỗ và hiển thị thông tin lệnh sản xuất theo ngữ cảnh cũng như khả năng của Phi công phụ khi họ chuẩn bị và thực hiện các cuộc hẹn.

**Tài liệu tham khảo:**
[Copilot features in Dynamics 365 Field Service](https://learn.microsoft.com/en-us/dynamics365/field-service/copilot-overview) · [Overview of Dynamics 365 Field Service](https://learn.microsoft.com/en-us/dynamics365/field-service/overview)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-41', 'ab-100', 41, 'A company plans to deploy a Microsoft Copilot Studio agent to improve customer support.  
  
The company stores customer data across ServiceNow, Microsoft Dynamics 365 Finance, Dynamics 365 Supply Chain Management, and Excel files in SharePoint Online.  
  
You need to recommend a solution that ensures the agent can provide accurate and timely responses.  
  
What should you recommend?', '[{"key":"A","text":"Implement a model router for query handling."},{"key":"B","text":"Create custom prompts."},{"key":"C","text":"Implement Microsoft Power Platform connectors."},{"key":"D","text":"Enable incremental indexing in Azure AI Search."}]'::jsonb, ARRAY['C']::text[], 'Trình kết nối Microsoft Power Platform cung cấp cho Copilot Studio quyền truy cập trực tiếp, được xác thực vào các nguồn dữ liệu doanh nghiệp, bao gồm ServiceNow, Dynamics 365 và SharePoint. Là nguồn kiến ​​thức thời gian thực, chúng xử lý các yêu cầu đối với hệ thống đích trong thời gian chạy, cho phép phản hồi sử dụng dữ liệu nguồn hiện tại thay vì dữ liệu sao chép cũ.

**Tài liệu tham khảo:**
[Add Power Platform connectors as knowledge (preview)](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-real-time-connectors) · [Copilot connectors versus Power Platform connectors as knowledge sources](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-graph-vs-power-platform-connectors)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-42', 'ab-100', 42, 'You are designing a low-code AI business solution by using Microsoft Copilot Studio.  
  
The solution must include an agent that automates tasks by simulating user interactions across third-party apps and websites, such as clicking buttons, entering text, and extracting information from screens.  
  
You need to recommend what to include in the agent.  
  
What should you recommend?', '[{"key":"A","text":"Model Context Protocol (MCP)"},{"key":"B","text":"a natural language understanding + (NLU+) model in Copilot Studio"},{"key":"C","text":"Computer Use in Copilot Studio"},{"key":"D","text":"Copilot skills"}]'::jsonb, ARRAY['C']::text[], 'Việc sử dụng máy tính trong Copilot Studio cho phép các tác nhân tự động hóa các tương tác giao diện người dùng với các ứng dụng và trang web của bên thứ ba, bao gồm các điều khiển nhấp chuột, nhập văn bản và trích xuất thông tin hiển thị trên màn hình.

**Tài liệu tham khảo:**
[Use computer use in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/computer-use)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-43', 'ab-100', 43, 'A company uses Microsoft Dynamics 365 Supply Chain Management.  
  
You are designing an AI supply chain process that must meet these requirements:  
  
- Provide managers with AI-driven insights that surface key information from customer orders.  
- Help planners use AI to anticipate future product needs more accurately.  
  
Recommend the Microsoft Copilot feature for each requirement.', '{"type":"matching_dropdown","statements":[{"id":"customer_order_insights","text":"Provide AI-driven insights from customer orders:","correctAnswer":"A","choiceKeys":["A","B","C","D"]},{"id":"future_product_needs","text":"Anticipate future product needs:","correctAnswer":"B","choiceKeys":["B","E","F","G"]}],"choices":[{"key":"A","text":"AI Summaries with Copilot"},{"key":"B","text":"Generative insights for Demand planning"},{"key":"C","text":"The Customer credit and collections workspace"},{"key":"D","text":"Workload insights with Copilot"},{"key":"E","text":"Microsoft Power BI"},{"key":"F","text":"Product information management"},{"key":"G","text":"The Supplier Communications Agent"}]}'::jsonb, ARRAY['customer_order_insights=A', 'future_product_needs=B']::text[], 'Tóm tắt AI với Copilot tạo ra các bản tóm tắt AI ngắn gọn về thông tin đơn đặt hàng, cho phép người quản lý nhanh chóng xác định các chi tiết quan trọng về đơn đặt hàng của khách hàng. Thông tin chi tiết tổng hợp để lập kế hoạch nhu cầu sử dụng AI tổng hợp để hỗ trợ phân tích nhu cầu và dự đoán chính xác hơn về nhu cầu sản phẩm trong tương lai.

**Tài liệu tham khảo:**
[AI summaries with Copilot in Dynamics 365 Supply Chain Management](https://learn.microsoft.com/en-us/dynamics365/supply-chain/sales-marketing/ai-summaries-sales-order) · [Generative insights for Demand planning](https://learn.microsoft.com/en-us/dynamics365/supply-chain/demand-planning/generative-insights)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-44', 'ab-100', 44, 'A company plans to implement an AI solution containing a Microsoft Copilot Studio agent and a Microsoft Foundry agent. The solution will be stored in a source-code repository.  
  
Recommend a deployment method for each agent. The solution must meet these requirements:  
  
- A test environment is used before deployment to production.  
- Production is isolated from development and testing.  
- Deployment is repeatable and fully automated.  
- No manual intervention is required.  
  
Which deployment method should be recommended for each agent?', '{"type":"matching_dropdown","statements":[{"id":"copilot_studio","text":"Copilot Studio:","correctAnswer":"C","choiceKeys":["A","B","C"]},{"id":"microsoft_foundry","text":"Microsoft Foundry:","correctAnswer":"D","choiceKeys":["B","C","D"]}],"choices":[{"key":"A","text":"Export from the source code repository and import to the target environment."},{"key":"B","text":"Use a Bicep file."},{"key":"C","text":"Use a Microsoft Power Platform deployment pipeline."},{"key":"D","text":"Use an Azure DevOps pipeline."}]}'::jsonb, ARRAY['copilot_studio=C', 'microsoft_foundry=D']::text[], 'Quy trình triển khai Power Platform tự động hóa việc quảng bá giải pháp Copilot Studio trên các môi trường riêng biệt. Azure DevOps cung cấp CI/CD cho mã nguồn tác nhân Microsoft Foundry, hỗ trợ triển khai và xác thực tự động từ kho lưu trữ. Bicept có thể cung cấp cơ sở hạ tầng Azure nhưng bản thân nó không cung cấp quy trình làm việc CI/CD tác nhân đầu cuối cần thiết.

**Tài liệu tham khảo:**
[Create and manage solutions in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-solutions-overview) · [Set up CI/CD for hosted agents with the Azure Developer CLI](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/set-up-ci-cd-cli)', 'Deploy AI Powered Business Solutions', ARRAY['AB-100', 'Deploy AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-45', 'ab-100', 45, 'You must recommend a security solution for agents in a Microsoft Power Platform environment.  
  
The agents must use only approved connectors and services. The solution must prevent the agents from accessing sensitive data.  
  
What should you recommend?', '[{"key":"A","text":"Configure Azure Monitor to capture connector activity logs."},{"key":"B","text":"Enable a Microsoft Dataverse audit."},{"key":"C","text":"Deploy data loss prevention (DLP) policies in Power Platform."},{"key":"D","text":"Enable customer-managed keys in Microsoft Dataverse."}]'::jsonb, ARRAY['C']::text[], 'Chính sách ngăn ngừa mất dữ liệu (DLP) của Power Platform thực thi quản trị trình kết nối bằng cách cho phép, nhóm hoặc chặn trình kết nối và kiểm soát những trình kết nối nào có thể trao đổi dữ liệu. Chúng hoạt động như các rào chắn giúp giảm việc lộ dữ liệu của tổ chức một cách trái phép, bao gồm cả đối với các đại lý. [Microsoft Learn: Data policies](https://learn.microsoft.com/en-us/power-platform/admin/wp-data-loss-prevention)

**Tài liệu tham khảo:**
[Data policies - Power Platform | Microsoft Learn](https://learn.microsoft.com/en-us/power-platform/admin/wp-data-loss-prevention) · [Implement a data policy strategy - Power Platform | Microsoft Learn](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/dlp-strategy)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-46', 'ab-100', 46, 'You need to design a Microsoft 365 Copilot solution that optimizes employee productivity. The solution must meet these requirements:  
  
- Ensure employees can use natural language-based prompt actions to query content stored in a subset of Microsoft SharePoint Online sites and in Teams.  
- Ensure employees receive contextually relevant responses in Microsoft 365 Copilot.  
  
What should be included in the design?', '[{"key":"A","text":"Build a Microsoft Power Automate desktop flow to read the SharePoint content and post the responses to Teams."},{"key":"B","text":"Modify SharePoint settings."},{"key":"C","text":"Create a custom REST API that crawls the SharePoint content."},{"key":"D","text":"Configure Microsoft Graph access."}]'::jsonb, ARRAY['D']::text[], 'Microsoft 365 Copilot sử dụng Microsoft Graph để truy cập vào nội dung tổ chức và bối cảnh làm việc của người dùng, bao gồm tài liệu SharePoint và cuộc trò chuyện trong Teams, để tạo ra các lời nhắc bằng ngôn ngữ tự nhiên và tạo ra các phản hồi phù hợp, theo ngữ cảnh. Nó tôn trọng các quyền hiện có của người dùng khi truy xuất dữ liệu đó.

**Tài liệu tham khảo:**
[How Microsoft 365 Copilot works](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-architecture) · [Data, Privacy, and Security for Microsoft 365 Copilot](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-47', 'ab-100', 47, 'A financial services company uses Microsoft Dynamics 365 Finance.  
  
At present, the company’s support staff manually review customer transaction histories to identify potential fraud cases before escalating them.  
  
You need to recommend an automation solution for the review process. The solution must ensure that escalations are sent to a human analyst for the final decision. What should you recommend?', '[{"key":"A","text":"Deploy an autonomous agent that closes non-fraud cases automatically."},{"key":"B","text":"Use Microsoft 365 Copilot in Word to automatically finalize fraud detection policies."},{"key":"C","text":"Configure a task agent to generate fraud risk scores for the human analyst to review."},{"key":"D","text":"Export the data to a data lake for analysis in Microsoft Power BI."}]'::jsonb, ARRAY['C']::text[], 'Một tác nhân đặc nhiệm có thể tự động hóa việc phân tích lịch sử giao dịch của khách hàng và đưa ra điểm số rủi ro gian lận cho nhà phân tích con người. Điều này đảm bảo việc đưa ra quyết định cuối cùng của con người trong vòng lặp đối với các trường hợp được chuyển lên cấp cao hơn, đồng thời giảm nỗ lực đánh giá thủ công. Hướng dẫn của Microsoft mô tả quy trình làm việc dựa trên tác nhân, hiển thị các nhiệm vụ do tác nhân tạo để mọi người xem xét, xác thực và hoàn thành.

**Tài liệu tham khảo:**
[Supervise agents in model-driven apps with agent feed](https://learn.microsoft.com/en-us/dynamics365/customer-insights/journeys/supervise-agents-with-agent-feed)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-48', 'ab-100', 48, 'Contoso, Ltd. is a high-tech manufacturing company that uses Microsoft Dynamics 365 Finance, Dynamics 365 Supply Chain Management, and Dynamics 365 Commerce for North American operations. It designs innovative products with many patents and proprietary technologies. The patents and engineering designs are closely protected secrets. Contoso executives plan to integrate and adopt AI solutions to help scale the company for an anticipated period of rapid growth. The company has multiple legal entities and Azure subscriptions that will be used by the adopted AI solutions. The following executives have specific responsibilities for the overall AI adoption: - Chief Technology Officer (CTO): Select one prebuilt AI agent for Dynamics 365 Finance, Dynamics 365 Supply Chain Management, or Dynamics 365 Commerce, and one custom Microsoft Copilot Studio AI agent, to prioritize and deploy during the initial adoption phase. - Chief Information Officer (CIO): Ensure appropriate security labels are assigned to data used by the AI agents. - Chief Financial Officer (CFO): Analyze the return on investment (ROI) for the AI agents being deployed. - Chief Information Security Officer (CISO): Discover and inventory AI resources for auditing. - Chief Executive Officer (CEO): Ensure all solutions follow industry-standard responsible AI practices. Every AI initiative and agent will have a detailed business use case, a defined audience profile, and an estimated ROI that compares cost savings from the current process with estimated costs of the new AI solutions. The research and development (R&D) department already has a custom Model Context Protocol (MCP) server containing comprehensive product specifications and compliance data. The CTO has not yet chosen a prebuilt agent for Dynamics 365 Supply Chain Management and wants to view available agent templates to determine which agent provides the greatest business value. Depending on the high-priority AI agents identified, their capabilities must be previewed during a discovery meeting with the relevant business-operation stakeholders. Contoso has identified these requirements for a custom AI agent: - It will use Dynamics 365 Supply Chain Management data to answer manufacturing-team questions as a low-code solution. - It will be available from within Microsoft Teams. - It must be designed to eventually connect to other agents selected according to their description. - Its topics will be selected based on a description of the query’s purpose, rather than a trigger phrase, to make interactions more conversational. - It must answer questions about product specifications by using existing technologies. The R&D department maintains the product specifications. - It must be integrated with, and accessible from, Dynamics 365 Supply Chain Management. - It must use Dynamics 365 Supply Chain Management business logic stored outside the application. Contoso has the following analysis, reporting, and troubleshooting requirements: - The CISO will audit all AI solutions monthly for compliance and security. - The CFO will analyze all AI solutions quarterly to compare estimated ROI with actual measured efficiencies and adoption. The CFO will use the Copilot Studio agent usage estimator for this analysis. - The CISO wants to determine how much sensitive data was accessed in a given AI agent run and who accessed it. Excessive sensitive-data access by one user might indicate a high security risk. - The CTO wants to track user feedback on the quality of AI agent responses during interactions. Consistently poor feedback will initiate an escalated reengineering discussion. - The CEO wants a quarterly assessment of every required metric for the executives’ specific responsibilities. The assessment tools must be Microsoft-recommended and verify reliability, interpretability, fairness, and compliance. - The CFO wants to determine how many daily AI-agent interactions are abandoned compared with resolved conversations. Too many abandoned sessions might mean Copilot Studio credits are used inefficiently by end users. Which Copilot Studio analytics metrics should you recommend to assist the executives with their specific responsibilities? Each metric may be used once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"cfo_credit_usage","text":"CFO concerns about Copilot Studio credit usage:","correctAnswer":"A"},{"id":"cto_feedback","text":"CTO concerns about poor feedback on AI agent responses:","correctAnswer":"C"}],"choices":[{"key":"A","text":"Effectiveness"},{"key":"B","text":"Tool use"},{"key":"C","text":"Satisfaction"},{"key":"D","text":"Use"}]}'::jsonb, ARRAY['cfo_credit_usage=A', 'cto_feedback=C']::text[], 'Phân tích hiệu quả theo dõi kết quả của cuộc trò chuyện, bao gồm cả việc cuộc trò chuyện được giải quyết hay bị hủy bỏ; điều này xác định mức tiêu thụ tín dụng không hiệu quả từ các phiên bị bỏ rơi. Phân tích mức độ hài lòng ghi lại phản ứng của người dùng và phản hồi về phản hồi của tổng đài viên, hỗ trợ giám sát các mối lo ngại về chất lượng phản hồi.

**Tài liệu tham khảo:**
[Analyze conversational agent effectiveness — Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-improve-agent-effectiveness) · [View agent''s billing consumption — Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-consumption)', 'Deploy AI Powered Business Solutions', ARRAY['AB-100', 'Deploy AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-49', 'ab-100', 49, 'A company has an Azure environment that supports multiple business units.  
  
The company plans to implement an AI solution that will perform sentiment analysis on customer product reviews.  
  
You need to assess the solution’s potential cost to support return on AI investment (ROAI) analysis.  
  
What should you use?', '[{"key":"A","text":"Azure Reservations"},{"key":"B","text":"Microsoft Fabric SKU Estimator"},{"key":"C","text":"Anomaly Detection in Azure Cost Management"},{"key":"D","text":"Azure pricing calculator"}]'::jsonb, ARRAY['D']::text[], 'Công cụ tính giá Azure ước tính chi phí dự kiến ​​cho các dịch vụ và mức sử dụng Azure đã chọn trước khi triển khai, cho phép phân tích chi phí dự kiến ​​cho giải pháp phân tích cảm tính AI và tính toán ROAI.

**Tài liệu tham khảo:**
[Use the Azure pricing calculator](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/pricing-calculator)', 'Plan AI Powered Business Solutions', ARRAY['AB-100', 'Plan AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-50', 'ab-100', 50, 'A company uses Microsoft 365 Copilot agents.  
  
You need to design a security solution for these agents. The solution must meet the following requirements:  
  
- Identify and mitigate potential risks associated with AI use.  
- Protect AI apps and the sensitive data that the agents process or generate.  
- Support responsible AI governance by retaining and logging interactions, detecting policy violations, and investigating incidents.  
  
Which two components should you include in the design? Each correct answer presents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Microsoft Purview"},{"key":"B","text":"Azure AI Content Safety"},{"key":"C","text":"role-based access control (RBAC) in Microsoft Foundry"},{"key":"D","text":"Microsoft Defender"}]'::jsonb, ARRAY['A', 'D']::text[], 'Microsoft Purview quản lý tính tuân thủ và bảo mật dữ liệu liên quan đến AI cho các tác nhân Microsoft 365 Copilot, bao gồm quản lý rủi ro, bảo vệ dữ liệu nhạy cảm, kiểm tra, lưu giữ, phát hiện chính sách tuân thủ giao tiếp và điều tra Khám phá điện tử. Bộ bảo vệ Microsoft bảo vệ các tác nhân và ứng dụng AI bằng cách đánh giá mức độ phơi nhiễm, phát hiện và ngăn chặn các mối đe dọa dành riêng cho AI, đồng thời hỗ trợ điều tra và ứng phó sự cố.

**Tài liệu tham khảo:**
[Use Microsoft Purview to manage data security and compliance for AI agents](https://learn.microsoft.com/en-us/purview/ai-agents) · [Step 4: Govern interactions for Microsoft 365 Copilot agents](https://learn.microsoft.com/en-us/purview/deploymentmodels/depmod-sc-agents-step4)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-51', 'ab-100', 51, 'A company processes invoices that are stored in multiple systems and formats.  
  
You need to implement an AI solution to automate invoice processing. The solution must meet the following requirements:  
  
- Automate multi-step invoice-processing tasks, including document analysis, data validation, and approval routing.  
- Allow users to interact directly in Microsoft Teams to review and approve invoices.  
- Minimize the development effort needed to define and customize approval workflows.  
  
What should you include in the solution?', '[{"key":"A","text":"Azure Document Intelligence in Foundry Tools and Azure Logic Apps"},{"key":"B","text":"a SharePoint agent"},{"key":"C","text":"Microsoft Copilot Studio and AI Builder"},{"key":"D","text":"Azure OpenAI and Azure Functions"}]'::jsonb, ARRAY['C']::text[], 'Microsoft Copilot Studio hỗ trợ các tác nhân và quy trình làm việc mã thấp có thể tự động hóa các quy trình kinh doanh nhiều bước, bao gồm các hành động đánh giá của con người và tích hợp với Microsoft Teams. AI Builder cung cấp khả năng xử lý tài liệu AI để trích xuất và xác thực thông tin từ các tài liệu như hóa đơn. Sự kết hợp này cung cấp sự tương tác cần thiết của Teams, tùy chỉnh quy trình làm việc, phân tích tài liệu, xác thực và định tuyến phê duyệt với sự phát triển tùy chỉnh tối thiểu.

**Tài liệu tham khảo:**
[Microsoft Copilot Studio workflows overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/workflows-experience/flows-overview) · [Streamline document processing with AI Builder](https://learn.microsoft.com/en-us/power-platform/architecture/reference-architectures/ai-document-processing)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-52', 'ab-100', 52, 'A company has an AI business solution that uses Microsoft Copilot Studio agents.  
  
You need to recommend prompt best practices to improve the effectiveness of agent interactions.  
  
Which two actions should be included in the recommendation? Each correct answer presents part of the solution.  
  
> **NOTE:** Each correct selection is worth one point.', '[{"key":"A","text":"Track the duration of the average user session."},{"key":"B","text":"Analyze the prompt length distribution."},{"key":"C","text":"Regularly test and refine the prompts based on user input."},{"key":"D","text":"Use clear and specific instructions in the prompts."},{"key":"E","text":"Measure system resource usage during prompt processing."}]'::jsonb, ARRAY['C', 'D']::text[], 'Lời nhắc Copilot Studio hiệu quả sử dụng hướng dẫn rõ ràng, cụ thể để tổng đài viên có thể diễn giải nhiệm vụ dự định một cách đáng tin cậy. Lời nhắc cũng cần được kiểm tra thường xuyên và tinh chỉnh dựa trên kết quả cũng như phản hồi của người dùng để cải thiện chất lượng phản hồi và hiệu quả của tác nhân.

**Tài liệu tham khảo:**
[Use prompt modification to provide custom instructions in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-generative-answers-prompt-modification) · [Optimize prompts with custom instructions](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/optimize-prompts-custom-instructions)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-53', 'ab-100', 53, 'A company has a Microsoft 365 tenant in Canada and several Microsoft Power Platform environments in Canada and the United States.  
  
The company intends to deploy a Microsoft Copilot Studio agent to the Canadian environment that will use:  
  
- Microsoft Dataverse data stored in Canada  
- A connector that connects to an Azure OpenAI instance in the United States  
  
You need to ensure that the agent complies with data residency and data-movement policies before deployment.  
  
What should you do?', '[{"key":"A","text":"Ensure that the data processed by Azure OpenAI is stored in the United States."},{"key":"B","text":"From the Microsoft Purview portal, validate the Data loss prevention settings."},{"key":"C","text":"Migrate the tenant to the United States."},{"key":"D","text":"Ensure that cross-region data movement is enabled for the Canadian environment and connector dependencies."}]'::jsonb, ARRAY['D']::text[], 'Sử dụng AI tạo Copilot Studio từ môi trường bên ngoài Hoa Kỳ có thể di chuyển dữ liệu qua các ranh giới khu vực khi quá trình xử lý Azure OpenAI diễn ra ở một khu vực khác. Do đó, môi trường Canada và các phần phụ thuộc của trình kết nối của nó phải được kích hoạt tính năng di chuyển dữ liệu giữa các khu vực trước khi triển khai tác nhân.

**Tài liệu tham khảo:**
[Configure data movement across geographic locations for generative AI - Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/manage-data-movement-outside-us)', 'Plan AI Powered Business Solutions', ARRAY['AB-100', 'Plan AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-54', 'ab-100', 54, 'A company uses a Microsoft Copilot Studio agent to provide customer-support answers from a knowledge base.  
  
Users report that the agent occasionally gives inaccurate answers. You need to use metrics from the Analytics tab in Copilot Studio to determine the cause of the inaccuracies.  
  
Which two options should you use? Each correct answer presents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"survey results"},{"key":"B","text":"session information and session outcomes"},{"key":"C","text":"topic usage and topics with low resolution"},{"key":"D","text":"engagement, resolution, and escalation rates"},{"key":"E","text":"quality of generated answers"}]'::jsonb, ARRAY['B', 'E']::text[], 'Chất lượng của các câu trả lời được tạo ra xác định các câu trả lời lấy mẫu được xếp hạng kém và đưa ra các lý do về chất lượng như mức độ liên quan, tính đầy đủ hoặc tính căn cứ, giúp phát hiện các vấn đề về câu trả lời dựa trên kiến ​​thức. Thông tin phiên và kết quả phiên cung cấp bối cảnh cuộc trò chuyện chi tiết và dữ liệu kết quả cần thiết để điều tra các điều kiện xung quanh những phản hồi đó.

**Tài liệu tham khảo:**
[Explore user questions, session, and feedback data - Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-questions-sessions) · [Analytics overview - Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-overview)', 'Deploy AI Powered Business Solutions', ARRAY['AB-100', 'Deploy AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-55', 'ab-100', 55, 'A company uses Microsoft Dynamics 365 Finance to manage its accounts payable.  
  
You are designing an AI-based invoice-processing solution.  
  
You need to recommend the prerequisites for configuring a prebuilt copilot for accounts payable.  
  
What should you recommend?', '[{"key":"A","text":"From Microsoft Copilot Studio, create an accounts payable agent."},{"key":"B","text":"Extend Microsoft 365 Copilot for Sales to an accounts payable agent."},{"key":"C","text":"Build an AI tool in Microsoft Foundry."},{"key":"D","text":"From the Power Platform admin center, assign the Finance and Operations AI security role to users."}]'::jsonb, ARRAY['D']::text[], 'Việc truy cập vào các khả năng của Copilot trong Dynamics 365 Finance yêu cầu chỉ định vai trò bảo mật **Tài chính và Hoạt động** trong môi trường Dataverse được liên kết. Vai trò này được chỉ định cho người dùng hoặc nhóm thông qua trung tâm quản trị Power Platform.

**Tài liệu tham khảo:**
[Enable Copilot in Dynamics 365 Finance](https://learn.microsoft.com/en-us/dynamics365/finance/accounts-receivable/enable-copilot-in-finance)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-56', 'ab-100', 56, 'A company has an AI solution called Solution1 deployed in the production environment. Solution1 uses an Azure OpenAI model to generate marketing emails for existing customers.  
  
During an internal review, you discover that Solution1 generates different emails based on customers’ traits.  
  
You need to recommend a bias-mitigation strategy. The strategy must comply with Microsoft responsible AI principles.  
  
What should you recommend?', '[{"key":"A","text":"Modify Solution1 to randomly generate emails for different traits."},{"key":"B","text":"Modify the system instructions of Solution1."},{"key":"C","text":"Retrain the model by using a larger dataset."},{"key":"D","text":"Modify the contents of the training dataset."}]'::jsonb, ARRAY['B']::text[], 'Hướng dẫn hệ thống có thể điều khiển hành vi của mô hình Azure OpenAI và thêm các ràng buộc rõ ràng về an toàn và công bằng. Prompt engineering, bao gồm điều chỉnh siêu nhắc nhở hoặc thông báo hệ thống, là một biện pháp giảm thiểu ở cấp ứng dụng mà Microsoft khuyến nghị đối với các tác hại tiềm ẩn của AI có trách nhiệm; hướng dẫn có thể yêu cầu cách đối xử nhất quán với khách hàng và cấm nội dung khác biệt dựa trên các đặc điểm được bảo vệ hoặc không phù hợp.

**Tài liệu tham khảo:**
[Overview of Responsible AI practices for Azure OpenAI in Foundry Models](https://learn.microsoft.com/en-us/azure/ai-foundry/responsible-ai/openai/overview?context=%2Fazure%2Fai-services%2Fopenai%2Fcontext%2Fcontext&view=foundry-classic) · [Safety system messages](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/system-message)

**Tài liệu tham khảo:**
- [Overview of Responsible AI practices for Azure OpenAI in Foundry Models](https://learn.microsoft.com/en-us/azure/ai-foundry/responsible-ai/openai/overview?context=%2Fazure%2Fai-services%2Fopenai%2Fcontext%2Fcontext&view=foundry-classic)
- [Safety system messages](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/system-message)', 'Deploy AI Powered Business Solutions', ARRAY['AB-100', 'Deploy AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-57', 'ab-100', 57, 'You are designing two Microsoft Copilot Studio agents, Agent1 and Agent2. Each agent must meet these requirements:  
  
- Use a standard model.  
- Not use generative orchestration.  
- Agent1 must support simple, short phrases for a specified topic.  
- Agent2 must integrate with the Microsoft Dynamics 365 Contact Center voice channel.  
  
Recommend a language model for each agent. Each language model can be used once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"agent1","text":"Agent1:","correctAnswer":"D"},{"id":"agent2","text":"Agent2:","correctAnswer":"E"}],"choices":[{"key":"A","text":"Azure Language in Foundry Tools"},{"key":"B","text":"Azure OpenAI"},{"key":"C","text":"Conversational language understanding (CLU)"},{"key":"D","text":"Natural language understanding (NLU)"},{"key":"E","text":"Natural language understanding + (NLU+)"}]}'::jsonb, ARRAY['agent1=D', 'agent2=E']::text[], 'NLU cổ điển được thiết kế để phối hợp đơn giản hơn và cho phép người tạo nhanh chóng thêm 5 đến 20 cụm từ ngắn cho mỗi chủ đề. NLU+ cung cấp khả năng phối hợp cổ điển xác định và có sẵn với các kênh trò chuyện hoặc thoại do Trung tâm Liên hệ quản lý Dynamics 365; đối với các tổng đài viên hỗ trợ giọng nói, dữ liệu đào tạo của nó cũng tối ưu hóa khả năng nhận dạng giọng nói.

**Tài liệu tham khảo:**
[Natural language understanding (NLU) overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-overview) · [Configure NLU+](https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-plus-configure)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-58', 'ab-100', 58, 'A company has an Azure environment that supports multiple business units.  
  
The company intends to implement an AI solution to perform sentiment analysis on customer product reviews.  
  
You need to assess the solution’s potential cost to support return on AI investment (ROAI) analysis.  
  
What should you use?', '[{"key":"A","text":"Azure savings plans"},{"key":"B","text":"Microsoft Fabric SKU Estimator"},{"key":"C","text":"Cost Management + Billing"},{"key":"D","text":"Azure Monitor"}]'::jsonb, ARRAY['C']::text[], 'Quản lý chi phí Azure + Thanh toán cung cấp khả năng định giá và ước tính, bao gồm Công cụ tính giá Azure, để chuyển đổi mức sử dụng dịch vụ Azure dự kiến ​​thành chi phí ước tính cho việc lập kế hoạch và phân tích đầu tư. Nó cũng có thể sử dụng giá thương lượng của tổ chức khi áp dụng.

**Tài liệu tham khảo:**
[Estimate costs with the Azure pricing calculator](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/pricing-calculator) · [Plan to manage Azure costs](https://learn.microsoft.com/en-us/azure/cost-management-billing/understand/plan-manage-costs)', 'Plan AI Powered Business Solutions', ARRAY['AB-100', 'Plan AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-59', 'ab-100', 59, 'Which template should be used for the AI agent to satisfy the sales executives’ requirements?', '[{"key":"A","text":"IT Helpdesk in Microsoft Copilot Studio"},{"key":"B","text":"AI agents in Microsoft Foundry"},{"key":"C","text":"Voice in Microsoft Copilot Studio"},{"key":"D","text":"AI chat in Microsoft Foundry"}]'::jsonb, ARRAY['C']::text[], 'Mẫu Microsoft Copilot Studio Voice cung cấp trải nghiệm nhân viên rảnh tay, hỗ trợ bằng giọng nói, phù hợp với yêu cầu giám đốc bán hàng sử dụng tai nghe khi hỏi về chính sách nội bộ hoặc dữ liệu khách hàng. Nó bao gồm các khả năng định hướng bằng giọng nói như phương thức giọng nói và các chủ đề về hệ thống giọng nói.

**Tài liệu tham khảo:**
[Configure voice capabilities - Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/voice-configuration) · [Voice - Microsoft Copilot Studio](https://learn.microsoft.com/is-is/microsoft-copilot-studio/voice-build-from-template)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-60', 'ab-100', 60, 'A company has an AI business solution.  
  
You need to extend the solution so Microsoft 365 Copilot can call external logic hosted in Azure services.  
  
What should the solution include?', '[{"key":"A","text":"Microsoft Copilot Studio skills"},{"key":"B","text":"Microsoft Power Platform connectors"},{"key":"C","text":"custom engine agents"}]'::jsonb, ARRAY['C']::text[], 'Tác nhân công cụ tùy chỉnh mở rộng Microsoft 365 Copilot với khả năng điều phối và lệnh gọi tùy chỉnh tới các dịch vụ bên ngoài, bao gồm cả logic được lưu trữ trong Azure.', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-61', 'ab-100', 61, 'A company plans to implement an AI business solution for a consumer goods company.  
  
Create agents that meet the following requirements:  
  
- Orchestrate the sales order fulfillment and shipping of goods to customers.  
- Analyze historical data and trends to replenish stock.  
  
Which type of agent should you use for each requirement? Each agent type may be used once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"fulfillment_shipping","text":"Slot 1:","correctAnswer":"A"},{"id":"stock_replenishment","text":"Slot 2:","correctAnswer":"A"}],"choices":[{"key":"A","text":"Autonomous"},{"key":"B","text":"Prompt-and-response"},{"key":"C","text":"Task"}]}'::jsonb, ARRAY['fulfillment_shipping=A', 'stock_replenishment=A']::text[], 'Cả hai yêu cầu đều mô tả các tác nhân phải nhận biết sự kiện, đưa ra quyết định và chạy quy trình công việc gồm nhiều bước mà không cần chờ lời nhắc của người dùng, đây là hành vi xác định của tác nhân tự trị trong Copilot Studio. Việc điều phối việc thực hiện đơn đặt hàng và vận chuyển là một quá trình liên tục, được điều khiển bởi kích hoạt, trải rộng trên nhiều hệ thống, vì vậy nó cần một tác nhân tự trị. Phân tích dữ liệu lịch sử và xu hướng để bổ sung hàng tồn kho là một nhiệm vụ chủ động, được lên lịch/giám sát (ví dụ: đại lý bổ sung hàng tồn kho dự báo nhu cầu và đẩy đơn đặt hàng lên ERP), lại có tính tự chủ. Tác nhân nhắc và phản hồi chỉ phản ứng bằng cách trò chuyện với thông tin đầu vào của người dùng và không thể điều khiển các quy trình nền này.

**Tài liệu tham khảo:**
[Design autonomous agent capabilities](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/autonomous-agents) · [Unlocking autonomous agent capabilities](https://www.microsoft.com/en-us/microsoft-copilot/blog/copilot-studio/unlocking-autonomous-agent-capabilities-with-microsoft-copilot-studio/)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-62', 'ab-100', 62, 'You are creating a testing solution for Microsoft Copilot Studio agents.  
  
You need to validate prompt-engineering best practices so that the agents produce accurate, contextually relevant responses.  
  
Which prompt validation techniques and metrics should the solution include?', '{"type":"matching_dropdown","statements":[{"id":"prompt_validation_techniques","text":"Prompt validation techniques:","correctAnswer":"B","choiceKeys":["A","B","C"]},{"id":"metrics","text":"Metrics:","correctAnswer":"E","choiceKeys":["D","E","F"]}],"choices":[{"key":"A","text":"Exclude domain-specific terminology from the prompts."},{"key":"B","text":"Use prompts that have varied phrasing."},{"key":"C","text":"Use only simple, one-word prompts."},{"key":"D","text":"The number of words generated per response"},{"key":"E","text":"Response relevance and accuracy"},{"key":"F","text":"The response generation time"}]}'::jsonb, ARRAY['prompt_validation_techniques=B', 'metrics=E']::text[], 'Việc thay đổi cách diễn đạt lời nhắc sẽ kiểm tra xem liệu một tác nhân có khái quát hóa theo những cách thực tế mà người dùng thể hiện cùng một ý định hay không. Mức độ liên quan và độ chính xác của phản hồi trực tiếp đo lường xem các phản hồi có đáp ứng được tính hữu ích và chính xác theo ngữ cảnh cần thiết hay không; độ dài phản hồi và thời gian tạo không đánh giá được những phẩm chất đó.

**Tài liệu tham khảo:**
[Design evaluation prompts for Copilot agent evaluation](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/evaluation-design-prompts) · [About agent evaluation - Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-intro)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-63', 'ab-100', 63, 'A company uses a Microsoft Copilot Studio prompt-and-response agent.  
  
You need to ensure that the agent meets these requirements:  
  
- Provides effective and relevant responses  
- Provides conversational outcomes  
  
Which metric should be used for each requirement?', '{"type":"matching_dropdown","statements":[{"id":"effective_relevant","text":"Provides effective and relevant responses:","correctAnswer":"A","choiceKeys":["A","B","C"]},{"id":"conversational_outcomes","text":"Provides conversational outcomes:","correctAnswer":"E","choiceKeys":["D","C","E"]}],"choices":[{"key":"A","text":"Generated answer rate and quality"},{"key":"B","text":"Reactions"},{"key":"C","text":"Tool use"},{"key":"D","text":"Satisfaction"},{"key":"E","text":"Topics by outcome"}]}'::jsonb, ARRAY['effective_relevant=A', 'conversational_outcomes=E']::text[], 'Tỷ lệ câu trả lời được tạo và chất lượng theo dõi các truy vấn được trả lời so với các truy vấn chưa được trả lời và đánh giá chất lượng phản hồi, bao gồm cả mức độ liên quan. Các chủ đề theo kết quả xác định các chủ đề dẫn đến kết quả phiên như đã giải quyết, chuyển cấp, bị bỏ qua và không bị tương tác, cho phép phân tích kết quả cuộc trò chuyện.

**Tài liệu tham khảo:**
[Analyze conversational agents - Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-improve-agent-effectiveness)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-64', 'ab-100', 64, 'A company has a Microsoft Power Platform solution containing the following components:  
  
- Microsoft Dataverse tables  
- A Microsoft Power BI workspace named WS1  
- A canvas app named App1 that uses Dataverse  
- A Power BI semantic model that connects to Dataverse by using DirectQuery  
  
The company plans to use generative AI to answer queries based on a subset of corporate data.  
  
You need to ensure that the data is available as a grounding data source for AI systems.  
  
What should you do?', '[{"key":"A","text":"Populate a Dataverse table."},{"key":"B","text":"Share WS1."},{"key":"C","text":"Endorse the semantic model."},{"key":"D","text":"Export the semantic model."}]'::jsonb, ARRAY['C']::text[], 'Mô hình ngữ nghĩa Power BI được chứng thực được chỉ định là nguồn dữ liệu chất lượng, đáng tin cậy. Mô hình ngữ nghĩa cung cấp tập hợp con được quản lý và ngữ nghĩa kinh doanh của nó để AI sử dụng khi trả lời các câu hỏi về dữ liệu, trong khi DirectQuery giữ cho mô hình được kết nối với nguồn Dataverse. Chia sẻ không gian làm việc chỉ cấp quyền truy cập; nó không thiết lập mô hình ngữ nghĩa làm tài sản dữ liệu đáng tin cậy.

**Tài liệu tham khảo:**
[Semantic model discoverability - Power BI](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-discovery) · [Use Copilot with semantic models in Power BI](https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-semantic-models)', 'Plan AI Powered Business Solutions', ARRAY['AB-100', 'Plan AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-65', 'ab-100', 65, 'A company has a Microsoft Copilot Studio agent that uses custom connectors to communicate with enterprise APIs.  
  
You need to recommend an application lifecycle management (ALM) process that ensures the connectors are deployed consistently across development, test, and production environments while satisfying governance and traceability requirements.  
  
What should you recommend?', '[{"key":"A","text":"Deploy the APIs as Azure Functions."},{"key":"B","text":"Manage the connectors as solution components and deploy the components by using ALM pipelines."},{"key":"C","text":"Maintain connector definitions in environment variables."},{"key":"D","text":"Export and import the connectors between the environments as unmanaged solutions."}]'::jsonb, ARRAY['B']::text[], 'Trình kết nối tùy chỉnh có thể được đưa vào dưới dạng thành phần giải pháp Power Platform. Quản lý chúng trong các giải pháp và triển khai các giải pháp đó thông qua quy trình ALM cho phép quảng bá lặp lại trên các môi trường, với các biện pháp kiểm soát triển khai tập trung và khả năng truy xuất nguồn gốc. Microsoft khuyến nghị các giải pháp được quản lý cho môi trường không phát triển.

**Tài liệu tham khảo:**
[Application lifecycle management (ALM) basics with Microsoft Power Platform](https://learn.microsoft.com/en-us/power-platform/alm/basics-alm) · [Overview of pipelines in Power Platform](https://learn.microsoft.com/en-us/power-platform/alm/pipelines)', 'Deploy AI Powered Business Solutions', ARRAY['AB-100', 'Deploy AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-66', 'ab-100', 66, 'A company intends to deploy a Microsoft Foundry agent.  
  
You need to recommend an application lifecycle management (ALM) process that ensures the agent is evaluated against baseline accuracy metrics before deployment.  
  
What should you recommend?', '[{"key":"A","text":"Configure GitHub Actions for new agent versions."},{"key":"B","text":"Deploy each new agent version directly to production."},{"key":"C","text":"Use Observability in Foundry Control Plane with evaluation and drift monitoring."},{"key":"D","text":"Enable Application Insights and use Azure Monitor."}]'::jsonb, ARRAY['C']::text[], 'Khả năng quan sát của Mặt phẳng điều khiển Microsoft Foundry hỗ trợ kết quả đánh giá và thông tin chi tiết trước khi triển khai, trong khi giám sát Foundry hỗ trợ đánh giá liên tục hoặc theo lịch trình so với điểm chuẩn và phát hiện sai lệch. Điều này cho phép phiên bản tác nhân được xác thực dựa trên các số liệu về độ chính xác cơ bản như một phần trong vòng đời của nó trước khi phát hành.

**Tài liệu tham khảo:**
[What is Microsoft Foundry Control Plane?](https://learn.microsoft.com/en-us/azure/foundry/control-plane/overview) · [Observability in Generative AI](https://learn.microsoft.com/en-us/azure/foundry/concepts/observability)', 'Plan AI Powered Business Solutions', ARRAY['AB-100', 'Plan AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-67', 'ab-100', 67, 'Which tool should be recommended to address concerns about sensitive information in the sales process?', '[{"key":"A","text":"the Analytics tab in Microsoft Copilot Studio"},{"key":"B","text":"Model Context Protocol (MCP)"},{"key":"C","text":"Application Insights"},{"key":"D","text":"Microsoft Foundry Tracing UI"},{"key":"E","text":"Monitoring in Microsoft Foundry"}]'::jsonb, ARRAY['E']::text[], 'Giám sát Microsoft Foundry có thể liên tục đánh giá lưu lượng sản xuất để tìm rủi ro an toàn. Công cụ đánh giá Rò rỉ dữ liệu nhạy cảm của nó đánh giá xem liệu một đại lý có tiết lộ thông tin nhạy cảm hay không, bao gồm dữ liệu tài chính, thông tin nhận dạng cá nhân và dữ liệu sức khỏe, cho phép các nhóm xác định và giải quyết rủi ro tiết lộ trong quy trình bán hàng.

**Tài liệu tham khảo:**
[Observability in generative AI — Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/observability) · [Risk and safety evaluators — Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/evaluation-evaluators/risk-safety-evaluators)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-68', 'ab-100', 68, 'A company uses multiple Microsoft Copilot Studio agents across various channels.  
  
You need to recommend a monitoring solution that delivers comprehensive telemetry data and performance insights for the agents.  
  
What should be included in the recommendation?', '[{"key":"A","text":"Microsoft Power BI"},{"key":"B","text":"the Analytics tab in Copilot Studio"},{"key":"C","text":"Log Analytics"},{"key":"D","text":"Azure Advisor"}]'::jsonb, ARRAY['B']::text[], 'Tab Phân tích trong Microsoft Copilot Studio cung cấp dữ liệu toàn diện về hiệu suất của tổng đài viên, từ các số liệu chính đến phân tích sử dụng chi tiết, cho phép phân tích mức độ tương tác, kết quả và hiệu suất trên các tương tác của tổng đài viên.

**Tài liệu tham khảo:**
[Analytics overview - Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-overview)', 'Deploy AI Powered Business Solutions', ARRAY['AB-100', 'Deploy AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-69', 'ab-100', 69, 'Which framework is appropriate for the infrastructure migration?', '[{"key":"A","text":"Microsoft Cloud Adoption Framework for Azure"},{"key":"B","text":"Success by Design"},{"key":"C","text":"Microsoft Power Platform Center of Excellence (CoE)"},{"key":"D","text":"Microsoft Power Platform Project Setup Wizard"}]'::jsonb, ARRAY['A']::text[], 'Khung áp dụng đám mây của Microsoft dành cho Azure là phương pháp có cấu trúc của Microsoft để áp dụng Azure, bao gồm lập kế hoạch và chuẩn bị môi trường Azure, di chuyển khối lượng công việc hiện có cũng như quản lý, bảo mật và quản lý tài sản đám mây kết quả. Nó trực tiếp đáp ứng yêu cầu sử dụng Azure và tuân theo các phương pháp di chuyển đám mây do Microsoft khuyến nghị. [Microsoft’s Cloud Adoption Framework](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/overview)

**Tài liệu tham khảo:**
[Microsoft''s Cloud Adoption Framework](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/overview) · [Prepare your organization for the cloud](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/plan/prepare-organization-for-cloud)', 'Deploy AI Powered Business Solutions', ARRAY['AB-100', 'Deploy AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-70', 'ab-100', 70, 'A company has a generative AI model in Microsoft Foundry.  
  
You need to evaluate the model output to assess the overall quality and coherence of generated responses. The evaluation must use GPT-4o as a judge and return a numeric score for each output.  
  
Which metric type should you use?', '[{"key":"A","text":"AI quality (NLP)"},{"key":"B","text":"risk and safety"},{"key":"C","text":"Groundedness"},{"key":"D","text":"AI quality (AI assisted)"}]'::jsonb, ARRAY['D']::text[], 'Các chỉ số về chất lượng AI (được AI hỗ trợ) sử dụng mô hình GPT đã triển khai làm đánh giá LLM để chấm điểm chất lượng tổng thể và tính mạch lạc của các phản hồi được tạo ra. Chỉ số chất lượng AI (NLP) là các phép đo toán học thường yêu cầu dữ liệu thực tế, trong khi các chỉ số rủi ro và an toàn đánh giá nội dung có hại và tính căn cứ đo lường khía cạnh hỗ trợ thực tế hẹp hơn.

**Tài liệu tham khảo:**
[Run evaluations from the Microsoft Foundry portal](https://learn.microsoft.com/en-us/azure/foundry/how-to/evaluate-generative-ai-app) · [Evaluate Generative AI Models and Apps with Microsoft Foundry](https://learn.microsoft.com/en-za/azure/ai-foundry/how-to/evaluate-generative-ai-app?view=foundry-classic)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-71', 'ab-100', 71, 'Fabrikam, Inc. is a global consumer-goods company undertaking a digital-transformation initiative to migrate all its infrastructure to the Microsoft cloud. As a key part of that migration, it will implement Microsoft Dynamics 365 Sales and move its B2B sales team away from its current proprietary on-premises technologies. Fabrikam will adopt an AI-first approach to its business solutions and implement AI solutions wherever possible to streamline operations. Its on-premises systems require sales executives to use corporate computers and physical keyboards to access business information during customer interactions. Mobile phones cannot be used because the systems require keyboard input. Consequently, sales executives spend considerable time using keyboards to search multiple separate systems and file servers instead of focusing on customers, which harms the customer experience. Stakeholders are concerned that users might resist adopting AI. Without adoption, the cost savings will not be achieved, and funding for future AI initiatives depends on showing month-over-month growth in AI adoption. Because the sales team''s agent will be Fabrikam''s first, rapid adoption is a high priority. Fabrikam has prioritized AI-driven projects to improve efficiency, customer engagement, and responsible AI adoption. Its current on-premises application infrastructure must move to the cloud to enable these technologies. Fabrikam plans to move from its on-premises infrastructure to a fully cloud-based topology, including user authentication, the security framework, and especially end-user service adoption. Data from the different systems will be consolidated into one common-data-model data source that uses a Microsoft Dataverse environment as the sales team''s single source of truth (SSOT). To improve the sales cycle, Fabrikam plans to: - Use low-code development to build one AI agent with Dataverse as its core component. - Ensure sales managers can view unanswered prospect correspondence and intervene when appropriate. - Replace the proprietary software with Dynamics 365 Sales to track sales cycles and customer interactions. - Have sales executives use Dynamics 365 Sales to record interactions for open opportunities and send follow-up communications to prospects. - Have sales executives use hands-free headsets to ask an AI agent questions about internal policies or customer data. Infrastructure migration requirements are: - Azure must support all future infrastructure workloads. - Microsoft-recommended cloud-migration methods must be followed. - The ROI of every created AI agent must be calculated to confirm that it saves money. Sales-cycle-enablement requirements are: - The final AI agent must follow Microsoft''s recommendations for a conversational user experience. - A designated checklist must be reviewed to verify that the AI agent follows Microsoft''s deployment recommendations for a compliant solution. - Detailed telemetry must be collected for the first AI agent to support troubleshooting and optimization during the initial adoption process. - Unexpected AI-agent actions must escalate to a live representative. For example, after two unsuccessful attempts to answer a question, the agent must reroute a sales executive to a representative. - Stakeholders require ROI for changing from the current process to the future process before sign-off. - The sales team must use Dynamics 365 Sales to correspond with prospects more quickly and efficiently than it does now. - Sales managers must report AI-agent adoption to key Fabrikam stakeholders every month. - Sensitive information shared through the AI agent, including user IDs and names, must be tracked for future auditing. Which framework should be used to satisfy the AI-agent requirements for sales-cycle enablement?', '{"type":"matching_dropdown","statements":[{"id":"copilot_best_practices","text":"For Microsoft Copilot Studio best practices:","correctAnswer":"C","choiceKeys":["A","B","C","D"]},{"id":"conversational_user_experiences","text":"For conversational user experiences:","correctAnswer":"C","choiceKeys":["A","B","C","D"]}],"choices":[{"key":"A","text":"the ALM Accelerator for Microsoft Power Platform"},{"key":"B","text":"Microsoft Cloud Adoption Framework for Azure"},{"key":"C","text":"Microsoft Power Platform Well-Architected framework"},{"key":"D","text":"Success by Design"}]}'::jsonb, ARRAY['copilot_best_practices=C', 'conversational_user_experiences=C']::text[], 'Microsoft Power Platform Well-Architected cung cấp khung đánh giá và hướng dẫn thực hành tốt nhất cho khối lượng công việc Power Platform, bao gồm các giải pháp Copilot Studio. Trụ cột Tối ưu hóa Trải nghiệm của nó đặc biệt bao gồm các đề xuất để thiết kế trải nghiệm người dùng đàm thoại, bao gồm các tương tác tự nhiên, khả năng rõ ràng và cơ chế dự phòng như leo thang sau những nỗ lực không thành công.

**Tài liệu tham khảo:**
[Power Platform Well-Architected](https://learn.microsoft.com/en-us/power-platform/well-architected/) · [Recommendations for designing conversational user experiences](https://learn.microsoft.com/en-us/power-platform/well-architected/experience-optimization/conversation-design)', 'Deploy AI Powered Business Solutions', ARRAY['AB-100', 'Deploy AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-72', 'ab-100', 72, 'A company uses an AI agent to automate reviews of customer feedback held in a cloud database.  
  
You plan to create monthly reports from the agent’s output to gain insight into customer sentiment and inform product development and marketing.  
  
You must ensure that the data ingested by the agent is clean and appropriate for its intended use.  
  
What should you do to prepare the data?', '[{"key":"A","text":"Ensure that the size of the database does not exceed 100 GB."},{"key":"B","text":"Translate the data into a single language."},{"key":"C","text":"Identify and address biased data."},{"key":"D","text":"Sort the database by customer last name."}]'::jsonb, ARRAY['C']::text[], 'Dữ liệu phản hồi thiên vị có thể tạo ra những hiểu biết sâu sắc về tình cảm không công bằng hoặc bị bóp méo một cách có hệ thống, có thể dẫn đến các quyết định tiếp thị và phát triển sản phẩm sai lệch. Do đó, việc chuẩn bị dữ liệu phải bao gồm việc phát hiện sự thiên vị hoặc sự mất cân bằng trong biểu diễn và thực hiện hành động khắc phục để cải thiện tính công bằng và phù hợp cho khối lượng công việc AI.

**Tài liệu tham khảo:**
[Apply responsible AI principles - Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/responsible-ai) · [Machine learning fairness - Azure Machine Learning](https://learn.microsoft.com/en-us/azure/machine-learning/concept-fairness-ml?view=azureml-api-2)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-73', 'ab-100', 73, 'Contoso needs tools to help the CISO and CIO fulfill their specific responsibilities. Each tool can be used once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"ciso","text":"CISO:","correctAnswer":"B"},{"id":"cio","text":"CIO:","correctAnswer":"D"}],"choices":[{"key":"A","text":"Azure Blob Storage"},{"key":"B","text":"Azure Resource Graph Explorer"},{"key":"C","text":"Copilot Studio"},{"key":"D","text":"Microsoft Purview"}]}'::jsonb, ARRAY['ciso=B', 'cio=D']::text[], 'Azure Resource Graph Explorer có thể truy vấn tài nguyên Azure trên các đăng ký, hỗ trợ khám phá và kiểm kê cho các hoạt động kiểm tra. Nhãn nhạy cảm Microsoft Purview phân loại và bảo vệ dữ liệu của tổ chức, hỗ trợ gán nhãn bảo mật phù hợp cho dữ liệu được các tác nhân AI sử dụng.

**Tài liệu tham khảo:**
[Azure Resource Graph Explorer overview](https://learn.microsoft.com/en-us/azure/governance/resource-graph/concepts/explore-resources) · [Learn about sensitivity labels](https://learn.microsoft.com/en-us/purview/sensitivity-labels)', 'Plan AI Powered Business Solutions', ARRAY['AB-100', 'Plan AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-74', 'ab-100', 74, 'A company deploys a Microsoft Copilot Studio agent that integrates with a Microsoft Power Automate desktop flow.  
  
Recommend a testing solution that meets these requirements:  
  
- Test cases must validate the agent’s most recent changes before the agent is released.  
- The flow must be validated as part of the agent’s orchestration.  
  
What should you recommend for each requirement?', '{"type":"matching_dropdown","statements":[{"id":"agent_release","text":"Validate the most recent changes to the agent before release:","correctAnswer":"B","choiceKeys":["A","B","C"]},{"id":"flow_orchestration","text":"Validate the flow as part of the agent''s orchestration:","correctAnswer":"D","choiceKeys":["D","E","F"]}],"choices":[{"key":"A","text":"Publish the agent to a channel and test the agent on live users."},{"key":"B","text":"Run tests against the latest unpublished version of the agent."},{"key":"C","text":"Run tests against the production version of the agent."},{"key":"D","text":"Add the flow to the agent as a tool."},{"key":"E","text":"Add the flow to a canvas app."},{"key":"F","text":"Use the Power Automate for desktop console."}]}'::jsonb, ARRAY['agent_release=B', 'flow_orchestration=D']::text[], 'Thử nghiệm/xem trước Copilot Studio xác thực tác nhân dự thảo trước khi xuất bản, bao gồm cả việc thực thi công cụ của nó. Việc xuất bản sẽ tạo ra phiên bản trực tiếp có sẵn cho người dùng. Việc thêm quy trình làm việc làm công cụ tổng đài cho phép tổng đài viên gọi luồng như một phần trong quá trình điều phối của nó; việc kiểm tra luồng máy tính để bàn trong bảng điều khiển máy tính để bàn không xác thực sự phối hợp giữa tác nhân với luồng đó.

**Tài liệu tham khảo:**
[Test an agent (preview) - Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/authoring-test-bot) · [Add a workflow as a tool to an agent - Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/workflows-experience/flow-agent)', 'Deploy AI Powered Business Solutions', ARRAY['AB-100', 'Deploy AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-75', 'ab-100', 75, 'You must design a Microsoft Copilot Studio agent for customer support.  
  
The agent needs to securely retrieve product warranty data from a REST API while minimizing development effort.  
  
What should the design include?', '[{"key":"A","text":"Export the agent as a managed solution and customize the agent in Power Apps."},{"key":"B","text":"Create a custom connector in Copilot Studio and use the connector to call the API."},{"key":"C","text":"Use a Microsoft Power Automate desktop flow to screen scrape the warranty data."},{"key":"D","text":"Add the warranty data to the Fallback topic."}]'::jsonb, ARRAY['B']::text[], 'Trình kết nối tùy chỉnh cung cấp cách thức mã ngắn, có thể sử dụng lại để tác nhân Copilot Studio gọi API REST và định cấu hình xác thực của nó. Điều này hỗ trợ truy xuất an toàn dữ liệu bảo hành với nỗ lực phát triển tối thiểu.', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-76', 'ab-100', 76, 'Solution: Build Microsoft Power Automate flows that trigger customized Copilot summaries.  
  
Does this fulfill the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], 'Microsoft Power Automate có thể điều phối quy trình công việc kinh doanh nhưng không cung cấp cơ chế được hỗ trợ để điều chỉnh nội dung tóm tắt cơ hội Dynamics 365 Sales Copilot tích hợp sẵn hoặc bản trình bày của nó. Hành vi tóm tắt của Copilot được đặt cấu hình thông qua cài đặt Dynamics 365 Sales Copilot, bao gồm các trường được sử dụng để tạo bản tóm tắt.

**Tài liệu tham khảo:**
[Configure fields for generating summaries and recent changes](https://learn.microsoft.com/en-us/dynamics365/sales/copilot-configure-summary-fields) · [Copilot in Dynamics 365 Sales overview](https://learn.microsoft.com/en-us/dynamics365/sales/copilot-overview)', 'Deploy AI Powered Business Solutions', ARRAY['AB-100', 'Deploy AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-77', 'ab-100', 77, 'Solution: You add fields to the opportunity summary.  
  
Does this fulfill the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[], 'Các trường tóm tắt cơ hội có thể định cấu hình ở cấp tổ chức. Việc thêm các trường sẽ thay đổi thông tin Copilot sử dụng để tạo bản tóm tắt cơ hội và làm cho các trường đó có sẵn trong bản tóm tắt kết quả.

**Tài liệu tham khảo:**
[Get information from Copilot](https://learn.microsoft.com/en-gb/dynamics365/sales/copilot-get-information)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-78', 'ab-100', 78, 'Solution: Configure AI Builder lead-scoring models to affect opportunity summaries.  
  
Does this satisfy the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], 'Ghi điểm khách hàng tiềm năng là khả năng dự đoán để ưu tiên khách hàng tiềm năng dựa trên khả năng đủ điều kiện hoặc chuyển đổi của họ. Tóm tắt bản ghi của phi công phụ là một khả năng riêng biệt tạo ra bản tóm tắt các bản ghi cơ hội; việc định cấu hình mô hình ghi điểm khách hàng tiềm năng không tùy chỉnh nội dung tóm tắt cơ hội được tạo hoặc cách hiển thị bản tóm tắt đó.

**Tài liệu tham khảo:**
[Lead and opportunity scoring](https://learn.microsoft.com/en-us/dynamics365/sales/digital-selling-scoring) · [Summarize records with Copilot](https://learn.microsoft.com/en-us/dynamics365/sales/copilot-summarize-records)', 'Deploy AI Powered Business Solutions', ARRAY['AB-100', 'Deploy AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-79', 'ab-100', 79, 'Solution: Add the opportunity summary widget to the Opportunity form.  
  
Does this satisfy the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[], 'Tiện ích tóm tắt cơ hội nhúng trực tiếp thông tin chi tiết về cơ hội do Copilot tạo vào biểu mẫu Cơ hội, cho phép người dùng xem bản tóm tắt ở vị trí biểu mẫu được tùy chỉnh đó. Điều này tùy chỉnh việc trình bày tóm tắt cơ hội.

**Tài liệu tham khảo:**
[Get information from Copilot](https://learn.microsoft.com/en-us/dynamics365/sales/copilot-get-information) · [Copilot in Dynamics 365 Sales overview](https://learn.microsoft.com/en-us/dynamics365/sales/copilot-overview)', 'Deploy AI Powered Business Solutions', ARRAY['AB-100', 'Deploy AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-80', 'ab-100', 80, 'A company uses several Microsoft Copilot Studio agents across different channels.  
  
You need to recommend a monitoring solution that delivers comprehensive telemetry and performance insights for the agents.  
  
What should the recommendation include?', '[{"key":"A","text":"Application Insights"},{"key":"B","text":"Microsoft Dynamics 365 Customer Voice"},{"key":"C","text":"Log Analytics"},{"key":"D","text":"Microsoft Purview"}]'::jsonb, ARRAY['A']::text[], 'Application Insights ghi lại hoạt động đo từ xa của tác nhân Microsoft Copilot Studio, bao gồm các thông báo và sự kiện đã ghi lại, chủ đề được kích hoạt và các sự kiện đo từ xa tùy chỉnh. Là dịch vụ quản lý hiệu suất ứng dụng Azure Monitor, nó hỗ trợ giám sát các tác nhân trực tiếp và phân tích hiệu suất cũng như cách sử dụng của chúng.

**Tài liệu tham khảo:**
[Capture telemetry with Application Insights - Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-bot-framework-composer-capture-telemetry)', 'Deploy AI Powered Business Solutions', ARRAY['AB-100', 'Deploy AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-81', 'ab-100', 81, '— Fabrikam, Inc. is a global consumer-goods company undertaking a digital-transformation initiative to move all its infrastructure to the Microsoft cloud. A key part of this migration is implementing Microsoft Dynamics 365 Sales to replace the proprietary on-premises technologies currently used by its business-to-business (B2B) sales team. Fabrikam will take an AI-first approach to its business solutions and implement AI solutions where possible to streamline operations. Its on-premises systems require sales executives to use corporate computers and physical keyboards to access business information during customer interactions. Mobile phones cannot be used because those systems depend on keyboard input. Consequently, sales executives spend considerable time using keyboards to search disparate systems and file servers instead of focusing on customers, harming the customer experience. Stakeholders are concerned that users may be reluctant to adopt AI. Without adoption, cost savings will not be realized, and funding for future AI initiatives depends on demonstrating month-over-month growth in AI adoption. Because the sales-team agent is Fabrikam’s first AI agent, rapid adoption is a high priority. Fabrikam has prioritized AI-driven projects to improve efficiency, customer engagement, and responsible AI adoption. Its application infrastructure is on-premises and must move to the cloud to enable these technologies. The company will migrate to a fully cloud-based topology, including user authentication, the security framework, and chiefly end-user service adoption. Data from the different systems will be consolidated into one common-data-model data source, using a Microsoft Dataverse environment as the sales team’s single source of truth (SSOT). To improve the sales cycle, Fabrikam plans to: - Use low-code development to build one AI agent with Dataverse as its core component. - Ensure sales managers can access unanswered prospect correspondence and intervene when appropriate. - Replace the proprietary software with Dynamics 365 Sales to track sales cycles and customer interactions. - Have sales executives use Dynamics 365 Sales to record interactions for open opportunities and send follow-up communications to prospects. - Have sales executives use hands-free headsets to interact with an AI agent when asking about internal policies or customer data. Infrastructure-migration requirements include using Azure for all future infrastructure workloads, following Microsoft-recommended cloud-migration methodologies, and calculating the return on investment (ROI) for every created AI agent to confirm it saves money. Sales-cycle-enablement requirements include following Microsoft’s recommendations for a conversational user experience; reviewing a designated checklist for compliant AI-agent deployment recommendations; logging detailed telemetry for the first agent to support troubleshooting and optimization during initial adoption; escalating unexpected agent actions to a live representative, such as routing a sales executive to a representative after two unsuccessful answer attempts; obtaining stakeholder sign-off on the ROI of replacing the current process with the future process; enabling faster and more efficient prospect correspondence through Dynamics 365 Sales; having sales managers report AI-agent adoption monthly to key stakeholders; and tracking sensitive information, including user IDs and names, shared through the AI agent for future auditing. Which existing tool and data should be used to collect the metrics required for stakeholder sign-off for the AI agents?', '{"type":"matching_dropdown","statements":[{"id":"tool","text":"Tool:","correctAnswer":"D","choiceKeys":["A","B","C","D"]},{"id":"data","text":"Data required for the tool:","correctAnswer":"G","choiceKeys":["E","F","G","H"]}],"choices":[{"key":"A","text":"Microsoft Foundry"},{"key":"B","text":"Azure Resource Monitor (ARM)"},{"key":"C","text":"Dynamics 365 Sales"},{"key":"D","text":"Microsoft Copilot Studio"},{"key":"E","text":"the cumulative time spent on the task over the past year"},{"key":"F","text":"the current cost to complete the tasks per instance"},{"key":"G","text":"the current time to complete the task today per instance"},{"key":"H","text":"the current cost of the Dynamics 365 Sales licenses"}]}'::jsonb, ARRAY['tool=D', 'data=G']::text[], 'Phân tích tiết kiệm Microsoft Copilot Studio ước tính tác động kinh doanh và ROI của đại lý bằng cách so sánh từng lần chạy đại lý hoặc thực thi công cụ với quy trình thay thế. Đối với tính toán dựa trên thời gian, đường cơ sở bắt buộc là thời gian ước tính mà phương pháp hiện tại cần để hoàn thành nhiệm vụ đó trên mỗi phiên bản. Điều này trực tiếp đo lường thời gian được tiết kiệm bởi quy trình tác nhân AI trong tương lai.

**Tài liệu tham khảo:**
[Analyze time and cost savings for agents - Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-cost-savings)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-82', 'ab-100', 82, 'A company is designing a Microsoft Power Platform solution to reduce the manual steps in a business process by deploying an existing AI model.  
  
You need to calculate the return on AI investment (ROAI) by identifying the solution’s metadata and telemetry.  
  
What should you use?', '[{"key":"A","text":"Microsoft Power Platform admin center"},{"key":"B","text":"Success by Design"},{"key":"C","text":"the Business value toolkit"},{"key":"D","text":"Microsoft Cloud Adoption Framework for Azure"}]'::jsonb, ARRAY['C']::text[], 'Bộ công cụ Giá trị doanh nghiệp là công cụ Power Platform để nắm bắt và truyền đạt giá trị giải pháp cũng như hỗ trợ đo lường ROI. Hướng dẫn của Microsoft liên kết cụ thể siêu dữ liệu và phép đo từ xa với bộ công cụ Giá trị doanh nghiệp khi đo lường giá trị doanh nghiệp trên quy mô lớn.

**Tài liệu tham khảo:**
[Choose the best methods and tools to measure business value - Power Platform](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/business-value-methods) · [Capture and communicate value with the Business value toolkit - Power Platform](https://learn.microsoft.com/en-us/power-platform/guidance/coe/business-value-toolkit)', 'Plan AI Powered Business Solutions', ARRAY['AB-100', 'Plan AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-83', 'ab-100', 83, 'A company uses a fine-tuned Microsoft Foundry model that needs frequent updates as new customer feedback is received.  
  
You need to design an application lifecycle management (ALM) process that satisfies these requirements:  
  
- Data changes must be tracked and versioned.  
- The model must be retrained consistently by using approved training data.  
  
Which two actions should be included in the design? Each correct answer presents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Associate the storage location to the fine-tuning job."},{"key":"B","text":"Create a content filter."},{"key":"C","text":"Store the training data in Azure Files."},{"key":"D","text":"Upload the training data to Microsoft Foundry data files"},{"key":"E","text":"Store the training data in Azure Blob Storage that has version control enabled."}]'::jsonb, ARRAY['D', 'E']::text[], 'Phiên bản Azure Blob Storage giữ nguyên các phiên bản blob trước đó khi dữ liệu đào tạo thay đổi, cho phép giữ lại và sử dụng lại phiên bản tập dữ liệu đã được phê duyệt. Microsoft Foundry fine-tuning sử dụng các tệp dữ liệu đào tạo đã tải lên làm đầu vào cho công việc fine-tuning, do đó việc tải dữ liệu đã được phê duyệt lên Microsoft Foundry sẽ hỗ trợ đào tạo lại nhất quán.

**Tài liệu tham khảo:**
[Customize a model with fine-tuning - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/fine-tuning) · [Blob versioning - Azure Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/versioning-overview)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-84', 'ab-100', 84, 'A company has an AI solution built using Microsoft Copilot Studio and Power Platform. The solution is used by the company’s sales, marketing, and customer service teams.  
  
You are conducting a return on AI investment (ROAI) analysis to assess the solution’s impact.  
  
You need to identify the measurable business drivers to include in the analysis.  
  
Which two business drivers should you identify? Each correct answer presents part of the solution.  
  
**NOTE:** Each correct selection is worth one point.', '[{"key":"A","text":"the reduced average case resolution time"},{"key":"B","text":"market capitalization"},{"key":"C","text":"economic market predictability"},{"key":"D","text":"increased employee productivity"},{"key":"E","text":"brand awareness"}]'::jsonb, ARRAY['A', 'D']::text[], 'Giảm thời gian giải quyết trường hợp trung bình là kết quả đo lường được hiệu quả dịch vụ khách hàng và tăng năng suất của nhân viên là kết quả đo lường được hiệu quả lực lượng lao động. Cả hai đều có thể được căn cứ và so sánh sau khi triển khai để định lượng giá trị kinh doanh của giải pháp và lợi tức đầu tư vào AI. Hướng dẫn của Microsoft xác định các biện pháp liên quan đến thời gian xử lý trung bình và năng suất làm số liệu giá trị tác nhân có liên quan.

**Tài liệu tham khảo:**
[Use case blueprints for measuring agent value](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/agent-business-value-use-case-blueprints) · [Agent metrics reference](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/agent-business-value-metrics-reference)', 'Plan AI Powered Business Solutions', ARRAY['AB-100', 'Plan AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-85', 'ab-100', 85, 'A company intends to deploy an AI-based customer service application that will autonomously handle interactions, escalate complex cases, and learn from historical ticket data.  
  
You need to conduct a return on AI investment (ROAI) analysis for deploying the application. The solution must ensure the analysis is accurate.  
  
What should you do first?', '[{"key":"A","text":"Establish the AI performance metrics."},{"key":"B","text":"Conduct an AI market benchmarking study."},{"key":"C","text":"Model the customer experience."},{"key":"D","text":"Identify and quantify all the development, deployment, and operating costs."}]'::jsonb, ARRAY['D']::text[], 'Việc tính toán ROAI chính xác bắt đầu từ tổng chi phí của giải pháp AI. Chi phí phát triển, triển khai và vận hành liên tục thiết lập cơ sở đầu tư cần thiết để đánh giá liệu các lợi ích như giảm nỗ lực hỗ trợ hay kết quả dịch vụ được cải thiện có mang lại lợi nhuận tích cực hay không.', 'Plan AI Powered Business Solutions', ARRAY['AB-100', 'Plan AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-86', 'ab-100', 86, 'Which components should be used to meet the sales cycle enablement requirements?', '{"type":"matching_dropdown","statements":[{"id":"agent_creation","text":"For AI agent creation:","correctAnswer":"C","choiceKeys":["A","B","C","D"]},{"id":"unexpected_actions","text":"For unexpected AI agent actions:","correctAnswer":"G","choiceKeys":["E","F","G","H"]}],"choices":[{"key":"A","text":"Microsoft Foundry"},{"key":"B","text":"Dynamics 365 Sales"},{"key":"C","text":"Microsoft Copilot Studio"},{"key":"D","text":"the Power Platform admin center"},{"key":"E","text":"a custom connector"},{"key":"F","text":"an event trigger"},{"key":"G","text":"a fallback topic"},{"key":"H","text":"a REST API"}]}'::jsonb, ARRAY['agent_creation=C', 'unexpected_actions=G']::text[], 'Microsoft Copilot Studio là công cụ mã ngắn đồ họa của Microsoft để xây dựng các tác nhân và luồng tác nhân, bao gồm các tác nhân sử dụng dữ liệu tổ chức như Dataverse. Chủ đề dự phòng xử lý dữ liệu đầu vào không được nhận dạng; sau hai lời nhắc, hệ thống có thể chuyển cuộc trò chuyện sang người đại diện trực tiếp.

**Tài liệu tham khảo:**
[Copilot Studio overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio) · [Configure the system fallback topic](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-system-fallback-topic)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-87', 'ab-100', 87, 'You need to recommend a Microsoft Power Platform business solution that brings together data from multiple internal and external data sources. The solution must meet these requirements:  
  
- Make the data available as a centralized source for multiple AI systems, including Microsoft Copilot Studio agents, Dynamics 365 applications, and external AI models.  
- Support built-in data-classification and protection policies.  
- Supply data for grounding and analytics.  
  
What should you include in the recommendation?', '[{"key":"A","text":"Microsoft Dataverse"},{"key":"B","text":"Azure Data Lake Storage"},{"key":"C","text":"a Microsoft Power BI semantic model"},{"key":"D","text":"Azure Cosmos DB"}]'::jsonb, ARRAY['A']::text[], 'Microsoft Dataverse là nền tảng dữ liệu kinh doanh tập trung dành cho Power Platform và nền tảng dữ liệu cơ bản cho các ứng dụng Dynamics 365. Các bảng Dataverse có thể được sử dụng làm nguồn kiến ​​thức Copilot Studio cho các tác nhân mặt đất và Dataverse cũng có thể được truy cập bởi các ứng dụng AI bên ngoài thông qua các công cụ Giao thức bối cảnh mô hình. Chính sách dữ liệu Power Platform cung cấp khả năng quản trị và bảo vệ cho việc truy cập và di chuyển dữ liệu, trong khi dữ liệu Dataverse có thể hỗ trợ phân tích.

**Tài liệu tham khảo:**
[Add Dataverse tables as a knowledge source - Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-dataverse) · [Connect to Dataverse with model context protocol (MCP) - Power Apps](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-mcp)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-88', 'ab-100', 88, 'A retail company intends to deploy Microsoft Copilot Studio agents to support:  
  
- Microsoft Dynamics 365 Commerce scenarios.  
- A Microsoft Power Apps inventory-management solution.  
  
You need to recommend a solution for organizing product catalog data as a consistent source for multiple AI systems.  
  
What should you recommend?', '[{"key":"A","text":"Let each agent scrape product details from Microsoft SharePoint Online libraries."},{"key":"B","text":"Store the product catalog data in a separate custom table for each agent."},{"key":"C","text":"Configure prompts to pull product details from the PDFs of external vendors."},{"key":"D","text":"Centralize the product catalog data in Microsoft Dataverse and expose the data to both agents."}]'::jsonb, ARRAY['D']::text[], 'Microsoft Dataverse cung cấp kho lưu trữ dữ liệu doanh nghiệp có cấu trúc, tập trung mà Power Apps có thể sử dụng và các tác nhân Copilot Studio có thể truy cập thông qua các bảng Dataverse dưới dạng nguồn kiến ​​thức. Việc duy trì một danh mục sản phẩm ở đó sẽ cung cấp dữ liệu nhất quán cho cả hai giải pháp và tránh sự trùng lặp trên mỗi tác nhân hoặc truy xuất dựa trên tài liệu không đáng tin cậy.

**Tài liệu tham khảo:**
[Add Dataverse tables as a knowledge source - Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-dataverse) · [Dataverse data in Microsoft 365 Copilot - Power Apps](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-data-copilot)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-89', 'ab-100', 89, 'A company has a cloud-based AI solution that uses Azure OpenAI models.  
  
Design a monitoring solution that meets these requirements:  
  
- Monitor performance metrics and operational health for the models.  
- Monitor AI apps and agents for compliance.  
- Use Azure-native capabilities.  
- Minimize development effort.  
  
What should be used for each requirement? Each option may be used once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"compliance","text":"Monitors AI app and agents for compliance:","correctAnswer":"F"},{"id":"operational_health","text":"Monitors performance metrics and operational health:","correctAnswer":"D"}],"choices":[{"key":"A","text":"Azure API Management"},{"key":"B","text":"Azure Policy"},{"key":"C","text":"Microsoft Defender"},{"key":"D","text":"Azure Monitor"},{"key":"E","text":"Azure Stream Analytics"},{"key":"F","text":"Microsoft Purview"}]}'::jsonb, ARRAY['compliance=F', 'operational_health=D']::text[], 'Azure Monitor cung cấp số liệu và nhật ký cho việc triển khai mô hình, cho phép giám sát tính khả dụng, hiệu suất, mức sử dụng và tình trạng hoạt động. Microsoft Purview cung cấp khả năng quản trị, bảo mật dữ liệu và tuân thủ cho các ứng dụng và tác nhân AI, bao gồm giám sát các tương tác AI và áp dụng các biện pháp kiểm soát tuân thủ.

**Tài liệu tham khảo:**
[Monitor model deployments in Microsoft Foundry Models](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/how-to/monitor-models) · [Use Microsoft Purview to manage data security & compliance for AI agents](https://learn.microsoft.com/en-us/purview/ai-agents)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-90', 'ab-100', 90, 'A company uses Microsoft Dynamics 365 finance and operations apps.  
  
The company plans to use Microsoft Copilot in-app help and guidance to generate responses for internal business processes.  
  
You need to add an extra knowledge source for the business processes. The solution must **not** add new topics to the Copilot agent for the finance and operations apps.  
  
Which knowledge source should you add?', '[{"key":"A","text":"Microsoft Dataverse"},{"key":"B","text":"a public website"},{"key":"C","text":"Azure AI Search"},{"key":"D","text":"a file upload"}]'::jsonb, ARRAY['D']::text[], 'Để được trợ giúp và hướng dẫn tổng quát về các ứng dụng tài chính và hoạt động, các tệp như tài liệu PDF, RTF và Word có thể được tải lên trực tiếp dưới dạng kiến ​​thức Copilot bổ sung. Các loại nguồn kiến ​​thức khác yêu cầu thêm chủ đề tùy chỉnh vào Copilot dành cho tác nhân ứng dụng tài chính và hoạt động, do đó việc tải tệp lên đáp ứng ràng buộc đã nêu.

**Tài liệu tham khảo:**
[Add knowledge to generative help and guidance with Copilot](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/copilot/extend-copilot-generative-help)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-91', 'ab-100', 91, 'A company has a Microsoft Copilot Studio agent that uses generative AI to help Microsoft Dynamics 365 Customer Service representatives.  
  
The agent currently has a low resolution rate and a high escalation rate.  
  
You need to identify the issue.  
  
What should you use?', '[{"key":"A","text":"the Agent dashboard of Dynamics 365 Customer Service historical analytics"},{"key":"B","text":"the Insights tab from the Search & intelligence settings of the Microsoft 365 admin center"},{"key":"C","text":"the Copilot hub in the Power Platform admin center"},{"key":"D","text":"the Analytics tab in Copilot Studio"}]'::jsonb, ARRAY['D']::text[], 'Tab Phân tích trong Copilot Studio cung cấp dữ liệu hiệu suất của tổng đài viên, bao gồm cả kết quả giải quyết và báo cáo, cho phép điều tra lý do tại sao tổng đài viên không giải quyết các cuộc hội thoại và thường xuyên chuyển chúng lên cấp trên.', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-92', 'ab-100', 92, 'A manufacturing company plans to deploy an agent to automate supplier-invoice processing.  
  
You are designing a solution to assess the financial implications of the deployment. The company is particularly concerned about budget overruns.  
  
You need to ensure that the solution accounts for the total cost of ownership (TCO), the anticipated savings from automation, and whether to extend the current AI capabilities.  
  
What should you include in the design?', '[{"key":"A","text":"a break-even analysis only"},{"key":"B","text":"adopting prebuilt agents to reduce the deployment time"},{"key":"C","text":"training a custom model"},{"key":"D","text":"a return on AI investment (ROAI) analysis"}]'::jsonb, ARRAY['D']::text[], 'Phân tích lợi tức đầu tư AI (ROAI) ​​so sánh toàn bộ chi phí sở hữu, triển khai, vận hành và mở rộng giải pháp AI với lợi ích tài chính dự kiến, bao gồm cả tiết kiệm tự động hóa. Do đó, nó hỗ trợ các quyết định về khả năng chi trả, khả năng vượt ngân sách và liệu việc đầu tư thêm vào năng lực AI có hợp lý hay không. Tương tự, hướng dẫn của Microsoft dành cho các đại lý AI cũng đề xuất các khuôn khổ ROI để định lượng tác động tài chính và hướng dẫn các quyết định đầu tư.

**Tài liệu tham khảo:**
[Forecast the return on investment (ROI) of AI agents](https://learn.microsoft.com/en-us/training/modules/forecast-agent-return-investment/)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-93', 'ab-100', 93, 'Which tool should you recommend to help obtain funding for future AI agent development?', '[{"key":"A","text":"Evaluations in Microsoft Foundry"},{"key":"B","text":"the Azure Cost Optimization workbook"},{"key":"C","text":"Azure Operator Insights"},{"key":"D","text":"the Analytics tab in Microsoft Copilot Studio"},{"key":"E","text":"Direct Preference Optimization (DPO)"}]'::jsonb, ARRAY['D']::text[], 'Tab Analytics trong Microsoft Copilot Studio cung cấp số liệu sử dụng và áp dụng cho tổng đài viên. Các số liệu đó cho phép báo cáo hàng tháng thể hiện mức độ tăng trưởng áp dụng hàng tháng cho các bên liên quan, hỗ trợ trường hợp tài trợ cho việc phát triển tác nhân AI trong tương lai.', 'Plan AI Powered Business Solutions', ARRAY['AB-100', 'Plan AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-94', 'ab-100', 94, 'You must design a multi-agent solution that includes a custom agent. The solution has these requirements:  
  
- Define the rules and constraints the agent must follow.  
- Automate a backend process involving data movement between services that runs independently of the agent’s reasoning steps.  
  
What should the design include for each requirement?', '{"type":"matching_dropdown","statements":[{"id":"define_rules","text":"Define rules and constraints:","correctAnswer":"B","choiceKeys":["A","B","C"]},{"id":"automate_backend","text":"Automate a backend process:","correctAnswer":"C","choiceKeys":["B","C","D"]}],"choices":[{"key":"A","text":"Agent flows"},{"key":"B","text":"Conversation topics"},{"key":"C","text":"Microsoft Power Automate cloud flow"},{"key":"D","text":"Microsoft Power Pages"}]}'::jsonb, ARRAY['define_rules=B', 'automate_backend=C']::text[], 'Chủ đề hội thoại xác định logic và hành vi hội thoại của tổng đài viên. Luồng đám mây Power Automate tự động hóa hoạt động tích hợp và di chuyển dữ liệu trên các dịch vụ một cách độc lập với quy trình suy luận của tổng đài viên.

**Tài liệu tham khảo:**
[Design agent conversations using topics](https://learn.microsoft.com/en-us/training/modules/copilot-studio-topics/) · [Use Agent Flows in Copilot Studio](https://learn.microsoft.com/en-us/training/modules/use-agent-flows/)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-95', 'ab-100', 95, 'A company has a Microsoft Power Platform environment.  
  
You need to build two agents named Agent1 and Agent2. The solution must meet these requirements:  
  
- Agent1 must be extendable by using the Semantic Kernel and connect to multiple business apps and APIs.  
- Agent2 must connect directly to data stored in Microsoft Dataverse and be embeddable in a Microsoft Power Apps canvas app.  
  
What should you use to build each agent?', '{"type":"matching_dropdown","statements":[{"id":"agent1","text":"Agent1:","correctAnswer":"D","choiceKeys":["A","B","C","D"]},{"id":"agent2","text":"Agent2:","correctAnswer":"C","choiceKeys":["A","B","C","D"]}],"choices":[{"key":"A","text":"Microsoft Foundry"},{"key":"B","text":"Azure Logic Apps"},{"key":"C","text":"Copilot in Power Apps"},{"key":"D","text":"Microsoft Copilot Studio"}]}'::jsonb, ARRAY['agent1=D', 'agent2=C']::text[], 'Các tác nhân Microsoft Copilot Studio có thể được sử dụng thông qua tích hợp Semantic Kernel CopilotStudioAgent và có thể được định cấu hình bằng các công cụ và tích hợp API. Copilot trong Power Apps cung cấp điều khiển Copilot có thể được nhúng trong ứng dụng canvas; điều khiển đó sử dụng bảng Dataverse làm nguồn dữ liệu được hỗ trợ.

**Tài liệu tham khảo:**
[Exploring the Semantic Kernel Copilot Studio Agent](https://learn.microsoft.com/en-us/semantic-kernel/frameworks/agent/agent-types/copilot-studio-agent) · [Add a Copilot control to a canvas app](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/add-ai-copilot)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-96', 'ab-100', 96, 'You need to create a shared prompt library for use across multiple business units. The solution must meet these requirements:  
  
- Ensure consistent AI responses through reusable formats.  
- Support governance and version control.  
- Minimize administrative effort.  
- Minimize ongoing costs.  
  
What should you recommend for each requirement?', '{"type":"matching_dropdown","statements":[{"id":"consistent_responses","text":"Ensure consistent AI responses:","correctAnswer":"B","choiceKeys":["A","B","C"]},{"id":"governance_version_control","text":"Support governance and version control:","correctAnswer":"D","choiceKeys":["B","D","E"]}],"choices":[{"key":"A","text":"Delegate department-specific prompt templates."},{"key":"B","text":"Define standardized prompt templates."},{"key":"C","text":"Maintain a prompt history."},{"key":"D","text":"Store prompts in a Git repository."},{"key":"E","text":"Categorize prompts by business function."}]}'::jsonb, ARRAY['consistent_responses=B', 'governance_version_control=D']::text[], 'Các mẫu lời nhắc được tiêu chuẩn hóa tạo ra các hướng dẫn và định dạng đầu ra thống nhất, có thể tái sử dụng, cải thiện tính nhất quán giữa các đơn vị kinh doanh. Việc lưu trữ lời nhắc trong kho lưu trữ Git coi lời nhắc là nội dung mã được phiên bản, cho phép lịch sử thay đổi, đánh giá, cộng tác và quản trị với chi phí hoạt động liên tục thấp.

**Tài liệu tham khảo:**
[Manage prompts for agents in Microsoft Foundry with GitHub](https://learn.microsoft.com/en-us/training/modules/prompt-versioning-genaiops/) · [Prompt engineering techniques - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/prompt-engineering)', 'Plan AI Powered Business Solutions', ARRAY['AB-100', 'Plan AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-97', 'ab-100', 97, 'A company has a Microsoft Foundry project that uses a single agent and a single prompt to complete a series of tasks.  
  
The agent has the following issues:  
  
- It frequently produces incomplete results.  
- It struggles with domain-specific reasoning.  
- Agent response times are remarkably slow.  
  
You need to recommend a solution to improve the agent’s overall performance and accuracy. Each action may be used once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"performance","text":"To improve performance:","correctAnswer":"C"},{"id":"accuracy","text":"To improve accuracy:","correctAnswer":"A"}],"choices":[{"key":"A","text":"Add a grounding data source."},{"key":"B","text":"Add a prebuilt connector."},{"key":"C","text":"Move to a multi-agent architecture."},{"key":"D","text":"Upgrade to a larger generative AI model."}]}'::jsonb, ARRAY['performance=C', 'accuracy=A']::text[], 'Kiến trúc đa tác nhân phân phối khối lượng công việc phức tạp, gồm nhiều bước trên các tác nhân chuyên biệt; Microsoft xác định các kết quả chưa hoàn chỉnh, các tắc nghẽn do lý do và nhu cầu kiến ​​thức sâu rộng về miền là những dấu hiệu cho thấy hệ thống một tác nhân có thể hưởng lợi từ quá trình chuyển đổi này. Dữ liệu Grounding bổ sung ngữ cảnh miền có liên quan trong quá trình suy luận, tăng độ chính xác và mức độ liên quan của phản hồi. Trình kết nối dựng sẵn chủ yếu tích hợp hệ thống bên ngoài và việc tăng kích thước mô hình không trực tiếp giải quyết việc phân tách tác vụ bắt buộc và grounding.

**Tài liệu tham khảo:**
[Transparency Note for Azure Agent Service](https://learn.microsoft.com/en-us/azure/foundry/responsible-ai/agents/transparency-note?view=foundry-classic) · [Grounding Data Design for AI Workloads on Azure](https://learn.microsoft.com/en-us/azure/well-architected/ai/grounding-data-design)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-98', 'ab-100', 98, 'A company has a customer-order system in which sales orders are created manually.  
  
You need to design an AI solution that automates these tasks as part of the system:  
  
- Save order details to a database.  
- Update the order status in the database.  
- Extract order details from an order file.  
- Prepare and send a confirmation email to customers.  
  
The solution must minimize development effort and support intelligent automation and solution integration.  
  
What should you include in the design?', '[{"key":"A","text":"a workflow in Azure Logic Apps"},{"key":"B","text":"a multi-agent solution that uses the Semantic Kernel SDK"},{"key":"C","text":"a multi-agent solution that uses Microsoft Foundry Agent Service"},{"key":"D","text":"a Microsoft Copilot Studio agent that uses Microsoft Power Automate workflows"}]'::jsonb, ARRAY['D']::text[], 'Microsoft Copilot Studio cung cấp các khả năng của tác nhân thông minh mã thấp để diễn giải các tệp đơn đặt hàng và soạn thảo thông tin liên lạc của khách hàng. Quy trình làm việc Power Automate cung cấp các hành động và trình kết nối mã ngắn để tích hợp với cơ sở dữ liệu và dịch vụ email, cho phép duy trì, cập nhật trạng thái và gửi tin nhắn một cách đáng tin cậy. Các tác nhân Copilot Studio có thể gọi các luồng dưới dạng công cụ, kết hợp tự động hóa thông minh với tích hợp hệ thống đầu cuối.

**Tài liệu tham khảo:**
[Add an agent flow to an agent — Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/flow-agent) · [Use agent flows with your agent — Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-flow)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-99', 'ab-100', 99, 'You are designing a Microsoft Copilot Studio agent that uses a custom Microsoft Foundry model to generate responses.  
  
You need to ensure the agent can securely connect to and invoke the custom model during user interactions.  
  
What should you include in the design?', '[{"key":"A","text":"Configure the agent to use classic orchestration."},{"key":"B","text":"Create a connection to Microsoft Foundry in the agent."},{"key":"C","text":"Add the Microsoft Foundry model as a Copilot Studio skill."},{"key":"D","text":"Create a custom engine agent."}]'::jsonb, ARRAY['B']::text[], 'Kết nối Microsoft Foundry cung cấp liên kết được xác thực, được định cấu hình cho phép tác nhân Copilot Studio truy cập và gọi mô hình Foundry tùy chỉnh trong quá trình tương tác.

**Tài liệu tham khảo:**
[Bring your own model for your prompts - Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/bring-your-own-model-prompts)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-100', 'ab-100', 100, 'You are assessing a Microsoft Copilot Studio agent that supports Microsoft Dynamics 365 Customer Service representatives.  
  
You need to recommend a testing solution that meets these requirements:  
  
- Evaluates agent effectiveness during active sessions  
- Validates that the agent provides accurate and helpful responses  
- Supplies measurable, actionable insights for continuous improvement  
  
What should you recommend?', '[{"key":"A","text":"Track resolution, deflection, and accuracy by using dashboards and use scripts to ensure consistent responses."},{"key":"B","text":"Perform load testing to validate how the agent scales under a high chat volume."},{"key":"C","text":"Review historical tickets to find agents that have the shortest resolution times."},{"key":"D","text":"Measure uptime and page load times."}]'::jsonb, ARRAY['A']::text[], 'Phân tích Copilot Studio theo dõi các phiên hội thoại và kết quả của chúng, bao gồm các biện pháp liên quan đến giải pháp và leo thang/chuyển hướng, thông qua bảng điều khiển phân tích. KPI và phân tích của nó nhằm mục đích đo lường hiệu suất của tổng đài viên, đánh giá chất lượng phản hồi và phát hiện những lỗ hổng có thể thúc đẩy cải tiến liên tục. [Measure agent outcomes — Microsoft Learn](https://learn.microsoft.com/en-in/microsoft-copilot-studio/guidance/measuring-outcomes) [Measure and improve agent performance with KPIs and analytics — Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/analytics)

**Tài liệu tham khảo:**
[Measure agent outcomes — Microsoft Learn](https://learn.microsoft.com/en-in/microsoft-copilot-studio/guidance/measuring-outcomes) · [Measure and improve agent performance with KPIs and analytics — Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/analytics)', 'Plan AI Powered Business Solutions', ARRAY['AB-100', 'Plan AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-101', 'ab-100', 101, 'A company has a canvas app named App1 in a Microsoft Power Platform environment called Env1.  
  
Env1 uses a customer-managed key to encrypt data. App1 connects to multiple data sources to retrieve and update customer and order information.  
  
You need to recommend a solution for adding Microsoft Copilot components to App1. The solution must **not** change Env1''s current security or encryption configurations.  
  
What should the recommendation include?', '[{"key":"A","text":"Modify the data sources of App1 to make them compatible with Copilot."},{"key":"B","text":"Duplicate App1 and republish the app in Env1."},{"key":"C","text":"Enable Copilot features for Env1."},{"key":"D","text":"Move App1 to a new environment that uses Microsoft-managed keys."}]'::jsonb, ARRAY['D']::text[], 'Điều khiển Copilot trong ứng dụng canvas Power Apps không hoạt động trong môi trường sử dụng khóa do khách hàng quản lý. Di chuyển ứng dụng sang môi trường sử dụng khóa do Microsoft quản lý sẽ kích hoạt khả năng Copilot mà không thay đổi cấu hình mã hóa hoặc bảo mật của Env1.

**Tài liệu tham khảo:**
[Add a Copilot control to a canvas app (preview)](https://learn.microsoft.com/ga-ie/power-apps/maker/canvas-apps/add-ai-copilot)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-102', 'ab-100', 102, 'Solution: You recommend using GitHub Copilot.  
  
Does this meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], 'GitHub Copilot được thiết kế để hỗ trợ phát triển phần mềm, thay vì cung cấp nền tảng đại lý phân tích khách hàng với các phân tích hiệu suất AI tích hợp và nhận dạng nhân khẩu học đồng thời giảm thiểu sự phát triển tùy chỉnh.', 'Plan AI Powered Business Solutions', ARRAY['AB-100', 'Plan AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-103', 'ab-100', 103, 'Solution: You recommend Microsoft Security Copilot.  
  
Does this satisfy the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], 'Microsoft Security Copilot dành cho các chuyên gia CNTT và bảo mật để điều tra các mối đe dọa, quản lý tình trạng bảo mật và tự động hóa quy trình bảo mật. Nó không được thiết kế như một nền tảng đại lý phân tích khách hàng nhằm xác định nhân khẩu học của khách hàng và cung cấp phân tích hiệu suất để trả lời các câu hỏi phổ biến của khách hàng với sự phát triển tùy chỉnh tối thiểu.

**Tài liệu tham khảo:**
[What is Microsoft Security Copilot?](https://learn.microsoft.com/en-us/copilot/security/microsoft-security-copilot) · [Microsoft Security Copilot Frequently Asked Questions](https://learn.microsoft.com/en-us/copilot/security/faq-security-copilot)', 'Plan AI Powered Business Solutions', ARRAY['AB-100', 'Plan AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-104', 'ab-100', 104, 'Solution: Microsoft Copilot Studio is recommended.  
  
Does this satisfy the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], 'Microsoft Copilot Studio cung cấp các câu trả lời tổng quát, phát triển tác nhân mã ngắn và phân tích tích hợp để sử dụng tác nhân, kết quả và phản hồi của người dùng. Phân tích tiêu chuẩn của nó tập trung vào hiệu suất của tổng đài viên và cuộc trò chuyện thay vì xác định nhân khẩu học của khách hàng; do đó, chỉ riêng Copilot Studio không đáp ứng được mọi yêu cầu đã nêu.

**Tài liệu tham khảo:**
[Explore AI capabilities in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/ai-capabilities) · [Analytics overview - Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-overview)', 'Plan AI Powered Business Solutions', ARRAY['AB-100', 'Plan AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-105', 'ab-100', 105, 'A company uses Microsoft Foundry agents.  
  
You need to ensure that an agent can dynamically use external tools at runtime without modifying the agent.  
  
What should you include in the solution?', '[{"key":"A","text":"a Microsoft Foundry hub"},{"key":"B","text":"a Model Context Protocol (MCP) server"},{"key":"C","text":"Azure AI Search"},{"key":"D","text":"Microsoft Copilot Studio"}]'::jsonb, ARRAY['B']::text[], 'Máy chủ Giao thức ngữ cảnh mô hình (MCP) hiển thị các công cụ được lưu trữ bên ngoài thông qua giao diện chuẩn mà Microsoft Foundry Agent Service có thể kết nối và gọi trong thời gian chạy. Điều này mở rộng tác nhân bằng các công cụ và nguồn dữ liệu bên ngoài mà không cần nhúng từng công cụ triển khai vào tác nhân.

**Tài liệu tham khảo:**
[Connect agents to Model Context Protocol servers](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/tools/model-context-protocol) · [Agent tools overview for Microsoft Foundry Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/tool-catalog)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-106', 'ab-100', 106, 'A company has a Microsoft Power Platform environment that includes Microsoft Dataverse data.  
  
You create a Microsoft Copilot Studio agent named Agent1 that processes the Dataverse data.  
  
You discover that Agent1 does not return relevant or accurate results.  
  
You need to improve the quality and reliability of data grounding.  
  
What should you do?', '[{"key":"A","text":"Retrain Agent1."},{"key":"B","text":"Verify and cleanse the Dataverse data."},{"key":"C","text":"Use an adaptive card in Agent1."},{"key":"D","text":"Add example user inputs to the training data of Agent1."}]'::jsonb, ARRAY['B']::text[], 'Các phản hồi có căn cứ chỉ đáng tin cậy như dữ liệu Dataverse và mô hình hóa của nó. Việc xác thực và làm sạch hồ sơ sẽ cải thiện mức độ liên quan và độ chính xác của thông tin được truy xuất cho các phản hồi của đại lý. Microsoft lưu ý rằng kết quả dựa trên dữ liệu Dataverse phụ thuộc vào chất lượng dữ liệu cũng như cách các bảng và mối quan hệ được mô hình hóa.

**Tài liệu tham khảo:**
[Dataverse data in Microsoft 365 Copilot](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-data-copilot) · [Explore AI capabilities in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/ai-capabilities)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-107', 'ab-100', 107, 'You need to design a Microsoft Copilot Studio agent that meets these requirements:  
  
- Supports interactive speech responses  
- Optimizes decision-making and the accuracy of responses  
  
What should the design include for each requirement? Each option may be used once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"interactive_speech","text":"Supports interactive speech responses:","correctAnswer":"D"},{"id":"decision_accuracy","text":"Optimizes decision-making and response accuracy:","correctAnswer":"A"}],"choices":[{"key":"A","text":"A deep reasoning model"},{"key":"B","text":"Azure Language in Foundry Tools"},{"key":"C","text":"Azure AI Speech"},{"key":"D","text":"Copilot Studio voice features"},{"key":"E","text":"Speech Synthesis Markup Language (SSML)"}]}'::jsonb, ARRAY['interactive_speech=D', 'decision_accuracy=A']::text[], 'Các tính năng giọng nói của Copilot Studio hỗ trợ các tình huống phản hồi bằng giọng nói tương tác, bao gồm cả phản hồi bằng giọng nói và phản hồi của tác nhân bằng giọng nói. Các mô hình lý luận sâu dành cho lý luận phức tạp và cải thiện khả năng ra quyết định cũng như độ chính xác của phản hồi.

**Tài liệu tham khảo:**
[Use interactive voice response in your agents - Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/voice-overview) · [Use deep reasoning models for complex tasks - Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-reasoning-models)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-108', 'ab-100', 108, 'You must design an application lifecycle management (ALM) process for a Microsoft Power Platform environment that contains a solution named Solution1.  
  
Solution1 must include a custom connector for Copilot in Microsoft Dynamics 365 Customer Service. Solution1 must satisfy these requirements:  
  
- Ensure the custom connector can be deployed consistently across environments as part of the ALM process.  
- Permit the custom connector to be edited only in the development environment.  
  
What should you include in the design?', '[{"key":"A","text":"Add the custom connector to GitHub."},{"key":"B","text":"Share the custom connector."},{"key":"C","text":"Create the custom connector in the default solution."},{"key":"D","text":"Add the custom connector to Solution1."}]'::jsonb, ARRAY['D']::text[], 'Các giải pháp có thể chứa các trình kết nối tùy chỉnh và được đóng gói để xuất và nhập trên các môi trường. Việc phát triển trình kết nối trong Giải pháp1 không được quản lý và triển khai nó vào các môi trường không phát triển dưới dạng giải pháp được quản lý sẽ mang lại khả năng triển khai nhất quán đồng thời hạn chế các thay đổi đối với môi trường phát triển.

**Tài liệu tham khảo:**
[Application lifecycle management basics with Microsoft Power Platform](https://learn.microsoft.com/en-us/power-platform/alm/basics-alm) · [Use a solution to customize](https://learn.microsoft.com/en-us/power-platform/alm/use-solutions-for-your-customizations)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-109', 'ab-100', 109, 'A company uses Microsoft Dynamics 365 Finance for accounts payable and customer debt recovery.  
  
You are designing an AI finance process that must meet these requirements:  
  
- Provide AI-driven details that help staff identify overdue vendor invoices and outstanding balances.  
- Help staff reduce the time needed to review overdue invoices and payment history.  
  
Recommend the Microsoft Copilot feature to include for each requirement.', '{"type":"matching_dropdown","statements":[{"id":"vendor_overdue","text":"Help identify vendor overdue invoices and outstanding balances:","correctAnswer":"B","choiceKeys":["A","B","C","D"]},{"id":"review_collections","text":"Reduce how long it takes to review overdue invoices and payment history:","correctAnswer":"F","choiceKeys":["E","F","C","D"]}],"choices":[{"key":"A","text":"Agent management"},{"key":"B","text":"AI Summaries with Copilot"},{"key":"C","text":"The Account Reconciliation agent"},{"key":"D","text":"The Supplier Communication agent"},{"key":"E","text":"Analyze demand plans with Copilot"},{"key":"F","text":"Collections coordinator summary"}]}'::jsonb, ARRAY['vendor_overdue=B', 'review_collections=F']::text[], 'Tóm tắt AI với Copilot có thể cung cấp bản tóm tắt nhà cung cấp bao gồm hóa đơn nhà cung cấp đã đăng, trạng thái thanh toán và hóa đơn nhà cung cấp quá hạn. Bản tóm tắt điều phối viên thu nợ sử dụng dữ liệu thu nợ của khách hàng để tạo bản tóm tắt các hóa đơn quá hạn, lịch sử thanh toán và nợ tồn đọng, giúp giảm thời gian xem xét chi tiết thu nợ.

**Tài liệu tham khảo:**
[AI summaries with Copilot - Supply Chain Management](https://learn.microsoft.com/en-us/dynamics365/supply-chain/get-started/copilot-summaries-overview) · [Collections coordinator summary - Finance | Dynamics 365](https://learn.microsoft.com/en-us/dynamics365/finance/accounts-receivable/collectionscoordinatorsummary)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-110', 'ab-100', 110, 'A company has a portfolio of AI initiatives at varying stages of development.  
  
You need to recommend a structured approach for evaluating return on AI investment (ROAI) across all initiatives. The solution must balance immediate results with long-term value and strategic innovation.  
  
What should the recommendation include?', '[{"key":"A","text":"a simple cost and benefit analysis"},{"key":"B","text":"a horizon-based framework"},{"key":"C","text":"the internal rate of return (IRR) function"},{"key":"D","text":"a prioritization grid"}]'::jsonb, ARRAY['B']::text[], 'Một khuôn khổ dựa trên tầm nhìn đánh giá các sáng kiến ​​AI theo giá trị kỳ vọng của chúng trong tầm nhìn ngắn hạn, trung hạn và dài hạn. Nó hỗ trợ cân bằng các kết quả có thể đo lường ngay lập tức với giá trị kinh doanh bền vững và đầu tư đổi mới chiến lược hơn.', 'Plan AI Powered Business Solutions', ARRAY['AB-100', 'Plan AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-111', 'ab-100', 111, 'You need to recommend a solution for integrating a Microsoft Copilot agent with a Microsoft Dynamics 365 Contact Center chat channel.  
  
The agent must answer customer questions and transfer the conversation to a live customer service representative when the customer requests escalation.  
  
What should you recommend?', '[{"key":"A","text":"Build an agent flow."},{"key":"B","text":"Configure the Conversation Start topic."},{"key":"C","text":"Configure a skill."},{"key":"D","text":"Call a Microsoft Power Automate connector."},{"key":"E","text":"Configure the Escalate topic."}]'::jsonb, ARRAY['E']::text[], 'Chủ đề của hệ thống Nâng cấp là cơ chế Copilot Studio để chuyển giao con người. Khi được định cấu hình bằng nút Chuyển cuộc trò chuyện và được kết nối với Dynamics 365 Customer Service hoặc Trung tâm liên hệ, nút này sẽ định tuyến cuộc trò chuyện được chuyển cấp đến một hàng đợi thích hợp để đại diện dịch vụ khách hàng trực tiếp có thể tiếp tục cuộc trò chuyện.

**Tài liệu tham khảo:**
[Hand off to a live agent - Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-hand-off) · [Integrate a Copilot agent in Dynamics 365 Contact Center](https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/configure-bot-virtual-agent)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-112', 'ab-100', 112, 'You are developing validation criteria for a custom generative AI model that creates business reports from internal enterprise data.  
  
You need to evaluate whether the model’s outputs are suitable and meaningful for the business reports.  
  
Which metric should you use?', '[{"key":"A","text":"the number of active users interacting with the model"},{"key":"B","text":"alignment of the output to domain-specific tasks"},{"key":"C","text":"the average system resource usage during inference"},{"key":"D","text":"the model training duration"}]'::jsonb, ARRAY['B']::text[], 'Sự liên kết đầu ra với các nhiệm vụ theo miền cụ thể đo lường xem các báo cáo kinh doanh được tạo ra có đáp ứng được bối cảnh, yêu cầu và mục đích sử dụng dự kiến ​​của doanh nghiệp liên quan hay không. Số lượng người dùng đang hoạt động, việc sử dụng tài nguyên suy luận và thời lượng đào tạo không đánh giá được mức độ phù hợp hoặc ý nghĩa của nội dung được tạo ra.', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-113', 'ab-100', 113, 'A company has an Azure environment that supports multiple business units.  
  
The company plans to implement an AI solution to perform sentiment analysis on customer product reviews.  
  
You need to assess the solution’s potential cost to support return on AI investment (ROAI) analysis.  
  
What should you use?', '[{"key":"A","text":"Anomaly Detection in Azure Cost Management"},{"key":"B","text":"Azure pricing calculator"},{"key":"C","text":"Azure savings plans"},{"key":"D","text":"Microsoft Fabric SKU Estimator"}]'::jsonb, ARRAY['B']::text[], 'Công cụ tính giá Azure chuyển đổi mức sử dụng dự kiến ​​và các cấu hình dịch vụ Azure đã chọn thành chi phí ước tính, cho phép lập kế hoạch chi phí và phân tích ROAI cho giải pháp AI trước khi triển khai. Phát hiện bất thường là để xác định các chi phí phát sinh ngoài dự kiến, trong khi các kế hoạch tiết kiệm và ước tính SKU vải không cung cấp ước tính chi phí chung cho giải pháp Azure tiềm năng cần thiết.

**Tài liệu tham khảo:**
[Estimate costs with the Azure pricing calculator](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/pricing-calculator)', 'Plan AI Powered Business Solutions', ARRAY['AB-100', 'Plan AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-114', 'ab-100', 114, 'A company has an Azure environment that supports several business units.  
  
The company intends to implement an AI solution that will conduct sentiment analysis of customer product reviews.  
  
You need to assess the solution’s potential cost to support return on AI investment (ROAI) analysis.  
  
What should you use?', '[{"key":"A","text":"Azure savings plans"},{"key":"B","text":"Anomaly Detection in Azure Cost Management"},{"key":"C","text":"Azure Monitor"},{"key":"D","text":"Cost Management + Billing"}]'::jsonb, ARRAY['D']::text[], 'Quản lý chi phí + Thanh toán cung cấp khả năng quản lý chi phí Azure để ước tính, phân tích và tối ưu hóa chi tiêu trên đám mây, hỗ trợ đánh giá chi phí của giải pháp AI theo kế hoạch để phân tích ROAI. Gói tiết kiệm Azure là cơ chế giảm giá, phát hiện bất thường xác định chi phí hiện có ngoài dự kiến ​​và Azure Monitor dùng để giám sát tài nguyên và đo lường ứng dụng từ xa.

**Tài liệu tham khảo:**
[Overview of Cost Management](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/overview-cost-management) · [Plan to manage Azure costs](https://learn.microsoft.com/en-us/azure/cost-management-billing/understand/plan-manage-costs)', 'Plan AI Powered Business Solutions', ARRAY['AB-100', 'Plan AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-115', 'ab-100', 115, 'A company uses an AI agent to automate the review of customer feedback held in a cloud database.  
  
You intend to create monthly reports from the agent’s output to gain insight into customer sentiment and inform product development and marketing.  
  
You must ensure the data the agent ingests is clean and appropriate for its intended use.  
  
What should you do to prepare the data?', '[{"key":"A","text":"Identify and address missing or inconsistent data."},{"key":"B","text":"Sort the database by customer last name."},{"key":"C","text":"Ensure that the size of the database does not exceed 100 GB."},{"key":"D","text":"Verify data privacy and security compliance."}]'::jsonb, ARRAY['A']::text[], 'Việc chuẩn bị dữ liệu để báo cáo cảm tính đáng tin cậy bao gồm việc phát hiện và giải quyết các giá trị bị thiếu và các bản ghi không nhất quán để tác nhân AI nhận được dữ liệu đầy đủ, chuẩn hóa phù hợp để phân tích.', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-116', 'ab-100', 116, 'A company uses multiple Microsoft Copilot Studio agents across various channels.  
  
You need to recommend a monitoring solution that delivers comprehensive telemetry data and performance insights for the agents.  
  
What should be included in the recommendation?', '[{"key":"A","text":"Azure DevOps"},{"key":"B","text":"Microsoft Power BI"},{"key":"C","text":"Microsoft Dynamics 365 Customer Voice"},{"key":"D","text":"Application Insights"}]'::jsonb, ARRAY['D']::text[], 'Azure Application Insights tích hợp với Microsoft Copilot Studio để thu thập dữ liệu đo từ xa của tổng đài viên, bao gồm các sự kiện hội thoại, thời gian phản hồi, trình kích hoạt chủ đề, lệnh gọi công cụ và lỗi. Những dữ liệu này hỗ trợ giám sát hiệu suất, khắc phục sự cố và hiểu biết sâu sắc về hoạt động của các tổng đài viên.

**Tài liệu tham khảo:**
[Capture telemetry with Application Insights - Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-bot-framework-composer-capture-telemetry) · [Monitor agent performance with Agent Insights Hub in Copilot Agent Kit - Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/kit-agent-insights-hub)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-117', 'ab-100', 117, 'A company uses multiple Microsoft Copilot Studio agents across various channels.  
  
You need to recommend a monitoring solution that delivers comprehensive telemetry data and performance insights for the agents.  
  
What should you include in the recommendation?', '[{"key":"A","text":"the Analytics tab in Copilot Studio"},{"key":"B","text":"Microsoft Power BI"},{"key":"C","text":"Microsoft Dynamics 365 Customer Voice"},{"key":"D","text":"Microsoft Purview"}]'::jsonb, ARRAY['B']::text[], 'Microsoft Power BI có thể hợp nhất và trực quan hóa dữ liệu vận hành và đo từ xa Copilot Studio trong bảng điều khiển tập trung, cho phép phân tích hiệu suất trên nhiều tác nhân và kênh. Phân tích tích hợp của Copilot Studio hướng đến việc sử dụng và hiệu quả của từng tác nhân, trong khi Customer Voice thu thập phản hồi và Purview tập trung vào quản trị, tuân thủ và kiểm tra.

**Tài liệu tham khảo:**
[Nexi Group revolutionizes customer support with Copilot Studio](https://learn.microsoft.com/en-us/power-platform/guidance/case-studies/nexi-revolutionizes-customer-support) · [Communicate the value story to stakeholders](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/agent-business-value-tell-value-story)', 'Deploy AI Powered Business Solutions', ARRAY['AB-100', 'Deploy AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-118', 'ab-100', 118, 'A company uses multiple Microsoft Copilot Studio agents across various channels.  
  
You need to recommend a monitoring solution that delivers comprehensive telemetry data and performance insights for the agents.  
  
What should you include in the recommendation?', '[{"key":"A","text":"Azure Advisor"},{"key":"B","text":"Microsoft Dynamics 365 Customer Voice"},{"key":"C","text":"Application Insights"},{"key":"D","text":"Log Analytics"}]'::jsonb, ARRAY['C']::text[], 'Azure Application Insights là sự tích hợp Copilot Studio để thu thập dữ liệu đo từ xa và giám sát hiệu suất của tác nhân. Nó ghi lại cuộc trò chuyện và các sự kiện tùy chỉnh, đồng thời hỗ trợ phân tích thời gian phản hồi, hoạt động theo chủ đề, lệnh gọi công cụ và lỗi giữa các tổng đài viên.

**Tài liệu tham khảo:**
[Monitor agent performance with Agent Insights Hub in Copilot Agent Kit](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/kit-agent-insights-hub) · [Capture telemetry with Application Insights](https://learn.microsoft.com/en-au/microsoft-copilot-studio/advanced-bot-framework-composer-capture-telemetry)', 'Deploy AI Powered Business Solutions', ARRAY['AB-100', 'Deploy AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-119', 'ab-100', 119, 'A company uses multiple Microsoft Copilot Studio agents through different channels.  
  
You need to recommend a monitoring solution that delivers comprehensive telemetry data and performance insights for the agents.  
  
What should you include in the recommendation?', '[{"key":"A","text":"the Analytics tab in Copilot Studio"},{"key":"B","text":"Azure Advisor"},{"key":"C","text":"Log Analytics"},{"key":"D","text":"Microsoft Purview"}]'::jsonb, ARRAY['A']::text[], 'Tab Phân tích trong Copilot Studio cung cấp dữ liệu tác nhân toàn diện, bao gồm các số liệu hiệu suất chính và phân tích sử dụng chi tiết cho các thành phần tác nhân, cho phép theo dõi và cải thiện hiệu suất.

**Tài liệu tham khảo:**
[Analytics overview - Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-overview)', 'Deploy AI Powered Business Solutions', ARRAY['AB-100', 'Deploy AI Powered Business Solutions']::text[], NULL, 'published'),
  ('ab100-120', 'ab-100', 120, 'A company uses an AI agent to automate reviews of customer feedback held in a cloud database.  
  
You intend to produce monthly reports from the agent’s output to gain insights into customer sentiment and inform product development and marketing.  
  
You must ensure that the data the agent ingests is clean and appropriate for its intended use.  
  
What should you do to prepare the data?', '[{"key":"A","text":"Identify and address biased data."},{"key":"B","text":"Ensure that the size of the database does not exceed 100 GB."},{"key":"C","text":"Verify data privacy and security compliance."},{"key":"D","text":"Translate the data into a single language."}]'::jsonb, ARRAY['A']::text[], 'Phản hồi thiên vị hoặc không mang tính đại diện có thể làm sai lệch kết quả cảm tính và dẫn đến những hiểu biết sâu sắc về tiếp thị và phát triển sản phẩm không đáng tin cậy. Việc xác định và giảm thiểu sai lệch sẽ cải thiện tính công bằng và phù hợp của dữ liệu được tác nhân AI sử dụng. Hướng dẫn của Microsoft về chuẩn bị dữ liệu AI đặc biệt yêu cầu giảm sai lệch và hướng dẫn AI có trách nhiệm của Microsoft xác định các vấn đề về phân phối dữ liệu, trình bày và gắn nhãn sai lệch là nguyên nhân dẫn đến kết quả không công bằng.

**Tài liệu tham khảo:**
[Grounding Data Design for AI Workloads on Azure](https://learn.microsoft.com/en-us/azure/well-architected/ai/grounding-data-design) · [Understand your datasets - Azure Machine Learning](https://learn.microsoft.com/en-us/azure/machine-learning/concept-data-analysis?view=azureml-api-2)', 'Design AI Powered Business Solutions', ARRAY['AB-100', 'Design AI Powered Business Solutions']::text[], NULL, 'published')
ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;
