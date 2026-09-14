-- ============================================================
-- CERTIFICATE: AI-103 - Developing AI Apps and Agents on Azure
-- Total questions: 135
-- ============================================================

-- 1. Ensure Certificate is registered in custom_certificates table
INSERT INTO public.custom_certificates (
  id, name, code, description, difficulty, estimated_hours, color_class, icon_name, is_vip, is_disabled, badge
) VALUES (
  'ai-103',
  'Developing AI Apps and Agents on Azure',
  'AI-103',
  'Chinh phục chứng chỉ Microsoft AI-103: Developing AI Apps and Agents on Azure. Bộ 135 câu hỏi bao quát xây dựng và quản trị Azure AI solutions, Agentic solutions, Microsoft Foundry, Computer Vision, Text Analysis và Trích xuất thông tin.',
  'Trung cấp',
  '14-18 Giờ',
  'bg-gradient-to-br from-cyan-600 via-teal-700 to-indigo-950 text-white',
  'Bot',
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
  ('ai103-1', 'ai-103', 1, 'You have a Microsoft Foundry project that contains an agent. The agent accepts user-uploaded screenshots and relies on a multimodal chat model. Some of the screenshots contain potentially malicious embedded text. You need to prevent a prompt injection attack and ensure that third-party content is treated as lower trust. How should you configure Prompt Shields for document attacks?', '{"type":"matching_dropdown","statements":[{"id":"1","text":"Prompt shields action:","correctAnswer":"B","choiceKeys":["A","B","C"]},{"id":"2","text":"Additional mitigation:","correctAnswer":"D","choiceKeys":["D","E","F"]}],"choices":[{"key":"A","text":"Disable the shield."},{"key":"B","text":"Set action to block."},{"key":"C","text":"Set action to annotate."},{"key":"D","text":"Enable Spotlighting."},{"key":"E","text":"Create a custom blocklist."},{"key":"F","text":"Use optical character recognition (OCR) to extract the text from the images first."}]}'::jsonb, ARRAY['1=B', '2=D']::text[], 'Prompt Shields dành cho các cuộc tấn công tài liệu kiểm tra nội dung có nguồn gốc bên ngoài thông tin nhập trực tiếp của người dùng, chẳng hạn như văn bản được nhúng trong hình ảnh hoặc tài liệu đã tải lên, để phát hiện các nỗ lực chèn gián tiếp (dấu nhắc chéo). Việc đặt hành động của lá chắn thành Chặn sẽ khiến dịch vụ chặn yêu cầu khi phát hiện các hướng dẫn nhúng cố gắng chiếm quyền điều khiển mô hình, điều này ngăn chặn cuộc tấn công prompt injection. Spotlighting là khả năng Prompt Shields bổ sung đánh dấu nội dung của bên thứ ba đã được nhập, chẳng hạn như văn bản được trích xuất từ ​​ảnh chụp màn hình, là khác biệt và có độ tin cậy thấp hơn so với hướng dẫn của chính người dùng và hệ thống, do đó, mô hình không coi văn bản được nhúng là lệnh có thẩm quyền, trực tiếp đáp ứng yêu cầu coi nội dung của bên thứ ba là có độ tin cậy thấp hơn. Danh sách chặn tùy chỉnh chỉ khớp với các chuỗi xấu đã biết và việc chạy OCR trước tiên không tự thiết lập nguồn gốc hoặc sự phân tách tin cậy.

**Tài liệu tham khảo:**
- [Prompt Shields in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/content-filter-prompt-shields)
- [Introducing Spotlighting in Azure AI Foundry: Detect and Block Cross Prompt Injection Attacks](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/better-detecting-cross-prompt-injection-attacks-introducing-spotlighting-in-azur/4458404)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-2', 'ai-103', 2, 'You need to recommend a plan for creating a customer support agent using the Microsoft Foundry Agent Service. The agent must meet these requirements:  
  
- Retain user preferences across multiple conversations.  
- Let users provide contextual grounding by uploading documents directly during a chat.  
  
Which Foundry capability should you recommend for each requirement?', '{"type":"matching_dropdown","statements":[{"id":"1","text":"To retain user preferences across conversations, use:","correctAnswer":"A","choiceKeys":["A","B","C"]},{"id":"2","text":"To enable users to provide contextual grounding during chats, use the:","correctAnswer":"F","choiceKeys":["D","E","F"]}],"choices":[{"key":"A","text":"Agent memory that uses persistent storage"},{"key":"B","text":"Conversation history"},{"key":"C","text":"Orchestration-managed session context"},{"key":"D","text":"Azure AI Search tool"},{"key":"E","text":"Code interpreter tool"},{"key":"F","text":"File search tool"}]}'::jsonb, ARRAY['1=A', '2=F']::text[], 'Bộ nhớ tác nhân sử dụng bộ nhớ liên tục sẽ lưu giữ thông tin được quản lý, tồn tại lâu dài, chẳng hạn như tùy chọn của người dùng bên ngoài bất kỳ chuỗi cuộc trò chuyện nào, do đó, thông tin này có thể được gọi lại trong các phiên sau và đáp ứng yêu cầu giữ lại tùy chọn trong các cuộc hội thoại; lịch sử hội thoại đơn giản và bối cảnh phiên do điều phối quản lý nằm trong phạm vi chuỗi hoặc phiên hiện tại và không tồn tại sau đó. Công cụ tìm kiếm tệp cho phép người dùng đính kèm tài liệu trực tiếp trong cuộc trò chuyện và căn cứ phản hồi trong nội dung được tải lên đó một cách nhanh chóng, trong khi công cụ Azure AI Search truy vấn chỉ mục tìm kiếm được lập chỉ mục trước, được tạo sẵn thay vì các tệp được tải lên tại thời điểm đó và công cụ trình thông dịch mã thực thi mã thay vì thực hiện truy xuất tài liệu.

**Tài liệu tham khảo:**
- [Memory in Microsoft Foundry Agent Service (preview)](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-memory)
- [Create and use memory in Foundry Agent Service (preview)](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/memory-usage)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-3', 'ai-103', 3, 'You have an application named App1 that uses Azure Speech in Foundry Tools to transcribe live calls.  
  
Transcript segments frequently contain both English and Spanish. App1 sends each segment to Azure Translator in Foundry Tools for translation into another language, but mixed-language segments sometimes produce incomplete or incorrect translations.  
  
You need to reduce translation errors, ensuring that the entire transcript is translated successfully.  
  
What should you do before sending the segments to Translator?', '[{"key":"A","text":"Use document translation to translate the entire transcript as a single document."},{"key":"B","text":"Split the mixed-language segments into single-language segments and translate each segment separately."},{"key":"C","text":"Enable automatic language detection for the translation request."},{"key":"D","text":"Specify English as the source language in the translation request for all the segments."}]'::jsonb, ARRAY['B']::text[], 'Azure Translator hoạt động tốt nhất khi nội dung nguồn của yêu cầu là một ngôn ngữ duy nhất, vì cả nhận dạng và dịch ngôn ngữ đều hoạt động dựa trên giả định về một ngôn ngữ nguồn chính cho mỗi yêu cầu; một phân đoạn trộn lẫn tiếng Anh và tiếng Tây Ban Nha khiến dịch vụ phát hiện sai hoặc dịch sai phần đó bằng ngôn ngữ không phổ biến. Việc chia từng đoạn bản ghi ngôn ngữ hỗn hợp thành các phân đoạn phụ ngôn ngữ đơn trước khi dịch từng đoạn riêng biệt sẽ đảm bảo mọi phần đều được dịch chính xác và toàn bộ bản ghi được dịch thành công. Việc coi toàn bộ bản ghi là một tài liệu không giải quyết được nội dung ngôn ngữ hỗn hợp trong một đoạn duy nhất, việc bật tính năng phát hiện ngôn ngữ tự động vẫn chỉ chọn một ngôn ngữ nguồn cho mỗi yêu cầu và việc buộc tiếng Anh làm ngôn ngữ nguồn cho mọi phân đoạn sẽ dịch sai các phần tiếng Tây Ban Nha.

**Tài liệu tham khảo:**
[What is Azure Translator?](https://learn.microsoft.com/en-us/azure/ai-services/translator/translator-overview)', 'Implement text analysis solutions', ARRAY['AI-103', 'Implement text analysis solutions']::text[], NULL, 'published'),
  ('ai103-4', 'ai-103', 4, 'You have a Microsoft Foundry project named Project1 that contains an agent, and the agent uses an OpenAPI 3.0 specification to call an external weather service.  
  
The weather service requires a key that must be passed in an HTTP header, and the key value is stored as a connection in Project1.  
  
You need to ensure that the key value from the connection is automatically included whenever the OpenAPI tool is invoked.  
  
What should you configure in the OpenAPI specification?', '[{"key":"A","text":"a header parameter defined for each operation"},{"key":"B","text":"an Azure Key Vault connection"},{"key":"C","text":"an API key security scheme"},{"key":"D","text":"a Bearer token security scheme"}]'::jsonb, ARRAY['C']::text[], 'Khi thông số kỹ thuật OpenAPI 3.0 khai báo mục nhập securitySchemes thuộc loại apiKey (khóa được truyền trong tiêu đề, truy vấn hoặc cookie), công cụ OpenAPI của Foundry liên kết sơ đồ đó với kết nối được liên kết với công cụ và tự động đưa giá trị khóa được lưu trữ của kết nối vào mọi yêu cầu khớp mà không cần người gọi cung cấp thủ công. Việc xác định tham số tiêu đề đơn giản cho mỗi hoạt động sẽ yêu cầu giá trị được cung cấp tại thời điểm gọi thay vì lấy nguồn tự động từ kết nối, kết nối Azure Key Vault không phải là cách công cụ OpenAPI xác thực các cuộc gọi đi và sơ đồ bảo mật mã thông báo Bearer dành cho mã thông báo mang OAuth/JWT thay vì tiêu đề khóa API tĩnh.

**Tài liệu tham khảo:**
[Connect OpenAPI tools to Microsoft Foundry agents](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/tools/openapi)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-5', 'ai-103', 5, 'You have a Microsoft Foundry project that contains an agent. You use a GitHub Actions workflow for CI/CD. You need to configure the workflow to automatically evaluate the agent whenever a pull request (PR) is created, and to prevent branches from merging if the evaluation results do not meet the defined thresholds.', '{"type":"matching_dropdown","statements":[{"id":"1","text":"Authentication method:","correctAnswer":"C","choiceKeys":["A","B","C"]},{"id":"2","text":"If the evaluation results are NOT met, configure the workflow to:","correctAnswer":"F","choiceKeys":["D","E","F"]}],"choices":[{"key":"A","text":"A personal access token (PAT)"},{"key":"B","text":"A user-assigned managed identity"},{"key":"C","text":"An Azure Login action that uses OpenID Connect (OIDC)"},{"key":"D","text":"Lock the target branch"},{"key":"E","text":"Send an alert"},{"key":"F","text":"Fail"}]}'::jsonb, ARRAY['1=C', '2=F']::text[], 'Quy trình làm việc của Hành động GitHub phải xác thực với Azure bằng hành động Đăng nhập Azure được định cấu hình cho thông tin xác thực liên kết OpenID Connect (OIDC), cho phép quy trình làm việc nhận được mã thông báo Microsoft Entra ID tồn tại trong thời gian ngắn mà không lưu trữ mã thông báo truy cập cá nhân hoặc bí mật nhận dạng được quản lý trong kho lưu trữ. Đây là mẫu xác thực bí mật được đề xuất cho các trình chạy được lưu trữ trên GitHub cần gọi các tài nguyên Azure, chẳng hạn như dự án Foundry. Để chuyển một yêu cầu kéo về kết quả đánh giá, bước quy trình làm việc chạy đánh giá phải được đặt cấu hình để không thành công (trả về mã thoát khác 0) khi kết quả không đáp ứng các ngưỡng đã xác định; khi các quy tắc bảo vệ nhánh của kho lưu trữ yêu cầu kiểm tra đó phải vượt qua, một bước không thành công sẽ ngăn PR hợp nhất. Việc gửi cảnh báo hoặc khóa nhánh mục tiêu không ràng buộc việc kiểm tra trạng thái PR với kết quả đánh giá, do đó, không hành động nào ngăn cản việc hợp nhất.

**Tài liệu tham khảo:**
- [How to run an evaluation in GitHub Action - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/how-to/evaluation-github-action)
- [Set up CI/CD for hosted agents with the Azure Developer CLI - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/set-up-ci-cd-cli)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-6', 'ai-103', 6, 'You have a Microsoft Foundry project named Project1 that contains the following:  
  
- An OpenAPI tool that calls an external API  
- A project connection named Connection1 that stores the API key for the external API  
  
When an agent calls the OpenAPI tool, the API returns a 401 Unauthorized error, and traces show that the API key header is not being sent.  
  
You need to ensure that the OpenAPI tool automatically includes the API key from Connection1 on every request.  
  
What should you do?', '[{"key":"A","text":"Enable identity passthrough so that the tool uses the Microsoft Entra token of the caller."},{"key":"B","text":"Add the API key header manually to the OpenAPI specification."},{"key":"C","text":"Configure the tool to use the default connection of Project1."},{"key":"D","text":"Connect the tool to Connection1."}]'::jsonb, ARRAY['D']::text[], 'Công cụ OpenAPI của Foundry chỉ đưa thông tin xác thực được lưu trữ vào các lệnh gọi đi khi công cụ này được liên kết rõ ràng với kết nối chứa thông tin xác thực đó; nếu công cụ không được kết nối với Connection1 thì sẽ có thông tin xác thực no để nền tảng đính kèm, đó là lý do tại sao tiêu đề khóa API bị thiếu và lệnh gọi trả về 401. Việc kết nối công cụ với Connection1 khiến nền tảng tự động đính kèm khóa API được lưu trữ của kết nối với mọi yêu cầu mà công cụ đưa ra. Thông qua nhận dạng sẽ chuyển tiếp mã thông báo Microsoft Entra của người gọi thay vì khóa API được lưu trữ, việc mã hóa tiêu đề theo cách thủ công trong thông số kỹ thuật sẽ làm mất mục đích lưu trữ bí mật trong kết nối và việc dựa vào kết nối mặc định của Project1 không đảm bảo rằng mặc định là Connection1.

**Tài liệu tham khảo:**
[Connect OpenAPI tools to Microsoft Foundry agents](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/tools/openapi)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-7', 'ai-103', 7, 'You have a Microsoft Foundry project that contains an agent, and the agent uses Azure Speech in Foundry Tools.  
  
You fine-tune a baseline speech-to-text model for the en-US locale and publish it.  
  
When the agent calls the Speech to text REST API, it returns an error indicating that the project ID is invalid.  
  
You need to set the project property to the correct value.  
  
What should you set the project property to?', '[{"key":"A","text":"the project URL"},{"key":"B","text":"the custom speech project ID"},{"key":"C","text":"the project ID"},{"key":"D","text":"the custom speech endpoint URL"}]'::jsonb, ARRAY['B']::text[], 'Khi bạn gọi API REST Lời nói thành văn bản cho giọng nói tùy chỉnh, bạn đặt thuộc tính dự án thành ID của dự án giọng nói tùy chỉnh — GUID xuất hiện trong URL fine-tuning trong cổng Microsoft Foundry (ví dụ: 00001111-aaaa-2222-bbbb-3333cccc4444). Tài liệu của Microsoft cảnh báo rõ ràng rằng ID dự án giọng nói tùy chỉnh này KHÔNG giống với ID dự án Microsoft Foundry, do đó, việc cung cấp "ID dự án" chung (ID dự án Foundry) là nguyên nhân tạo ra lỗi "ID dự án không hợp lệ" được mô tả và thay vào đó, bạn phải sử dụng ID dự án giọng nói tùy chỉnh. URL dự án và URL điểm cuối giọng nói tùy chỉnh là các liên kết tự/tham chiếu được trả về trong phản hồi API chứ không phải giá trị bạn chỉ định cho thuộc tính dự án, do đó, cả URL dự án và URL điểm cuối đều không chính xác.

**Tài liệu tham khảo:**
[Get the project ID for the REST API](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/how-to-custom-speech-create-project)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-8', 'ai-103', 8, 'You have a Microsoft Foundry project containing a customer support agent that is grounded in internal documentation.  
  
Following a recent update, users report the following issues:  
  
- Some answers are not supported by the retrieved documents.  
- A small number of responses are flagged for policy violations.  
  
You need to evaluate each issue. Which observability signal should you use for each one? An observability signal can be used once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"1","text":"Unsupported responses:","correctAnswer":"A"},{"id":"2","text":"Policy violations:","correctAnswer":"C"}],"choices":[{"key":"A","text":"Groundedness evaluation metrics"},{"key":"B","text":"Latency breakdown traces"},{"key":"C","text":"Risk and safety metrics"},{"key":"D","text":"Token usage analytics"}]}'::jsonb, ARRAY['1=A', '2=C']::text[], 'Đánh giá căn cứ đo lường xem phản hồi được tạo có thực sự được hỗ trợ bởi nội dung được truy xuất từ ​​tài liệu grounding hay không, do đó, đây là tín hiệu chính xác để bắt các câu trả lời không được hỗ trợ bởi tài liệu được truy xuất. Các chỉ số về rủi ro và an toàn đánh giá nội dung được tạo để phát hiện tài liệu vi phạm chính sách, chẳng hạn như nội dung có hại, không an toàn hoặc không tuân thủ. Vì vậy, chúng là tín hiệu chính xác cho các phản hồi bị gắn cờ do vi phạm chính sách. Dấu vết phân tích độ trễ và phân tích mức sử dụng mã thông báo đo lường hiệu suất và chi phí, chứ không trả lời chất lượng hoặc độ an toàn, vì vậy chúng không giải quyết được cả hai vấn đề.

**Tài liệu tham khảo:**
[Built-in Evaluators Reference - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/built-in-evaluators) · [Risk and Safety Evaluators for Generative AI - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/evaluation-evaluators/risk-safety-evaluators)', 'Plan and manage an Azure AI solution', ARRAY['AI-103', 'Plan and manage an Azure AI solution']::text[], NULL, 'published'),
  ('ai103-9', 'ai-103', 9, 'You have a Microsoft Foundry project containing a workflow for a customer support triage process. The workflow includes an Ask a question node that stores the user''s response in a local variable named Var01. You need to build the following Power Fx expressions:  
  
- An if/else condition expression that confirms Var01 holds a value.  
- A Send message expression that returns the stored user response converted to uppercase.  
  
How should you configure these expressions?', '{"type":"matching_dropdown","statements":[{"id":"1","text":"If/else condition expression:","correctAnswer":"C","choiceKeys":["A","B","C"]},{"id":"2","text":"Send message expression:","correctAnswer":"E","choiceKeys":["D","E","F"]}],"choices":[{"key":"A","text":"IsBlank(Local.Var01)"},{"key":"B","text":"IsEmpty(Local.Var01)"},{"key":"C","text":"Not(IsBlank(Local.Var01))"},{"key":"D","text":"{Local.Var01}"},{"key":"E","text":"{Upper(Local.Var01)}"},{"key":"F","text":"{Upper(Var01)}"}]}'::jsonb, ARRAY['1=C', '2=E']::text[], 'Trong Power Fx, IsBlank() kiểm tra xem giá trị có trống hay không; gói nó trong Not() - Not(IsBlank(Local.Var01)) - chỉ đánh giá thành true khi biến cục bộ thực sự giữ một giá trị, đây là bộ bảo vệ if/else chính xác để xác nhận rằng Var01 có chứa một giá trị. IsEmpty() là một hàm định hướng bảng và không phải là hàm kiểm tra trống chính xác cho biến vô hướng. Để tham chiếu biến cục bộ của quy trình làm việc bên trong biểu thức Power Fx, bạn phải sử dụng Local. tiền tố phạm vi, do đó biểu thức Gửi tin nhắn trả về phản hồi bằng chữ in hoa là {Upper(Local.Var01)}; Upper(Var01) bỏ qua tiền tố phạm vi được yêu cầu và không giải quyết biến được lưu trữ.

**Tài liệu tham khảo:**
[Build a workflow in Microsoft Foundry (Preview)](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/workflow)', 'Implement text analysis solutions', ARRAY['AI-103', 'Implement text analysis solutions']::text[], NULL, 'published'),
  ('ai103-10', 'ai-103', 10, 'You have a Microsoft Foundry project with a customer support agent built using the Foundry Agent Service. The agent uploads user-provided screenshots to Azure Storage via a ticketing tool and receives back a blob URL for further reasoning.  
  
You need to apply image moderation during agent runs so that harmful content is never returned, with Azure AI Content Safety accessing the images through the blob URL. The solution must follow the principle of least privilege.  
  
What should you configure for Content Safety?', '{"type":"matching_dropdown","statements":[{"id":"1","text":"Guardrails:","correctAnswer":"D","choiceKeys":["A","B","C","D"]},{"id":"2","text":"Storage access:","correctAnswer":"H","choiceKeys":["E","F","G","H"]}],"choices":[{"key":"A","text":"Select Tool call and set Action to Block."},{"key":"B","text":"Select User input and Output and set Action to Annotate."},{"key":"C","text":"Select User input and Tool response and set Action to Annotate."},{"key":"D","text":"Select User input, Output, Tool response, and Tool call and set Action to Block."},{"key":"E","text":"Storage account access keys"},{"key":"F","text":"A user-assigned identity that is assigned the Storage Queue Data Contributor role"},{"key":"G","text":"A system-assigned managed identity that is assigned the Storage Blob Data Reader role"},{"key":"H","text":"A system-assigned managed identity that is assigned the Storage Blob Data Contributor role"}]}'::jsonb, ARRAY['1=D', '2=H']::text[], 'Các lan can Foundry Agent Service hỗ trợ bốn điểm can thiệp - đầu vào của người dùng, lệnh gọi công cụ, phản hồi của công cụ và đầu ra - và đối với các tác nhân (trái ngược với mô hình), hành động phản hồi khả dụng duy nhất là Chú thích và chặn; một hành động đơn giản chỉ có Chú thích không được cung cấp cho các tổng đài viên, do đó, bất kỳ biện pháp kiểm soát nào nhằm ngăn chặn việc trả lại nội dung có hại đều phải sử dụng Chặn. Vì URL blob của ảnh chụp màn hình do công cụ tạo yêu cầu tạo ra và chỉ khả dụng cho tác nhân khi nội dung được công cụ đó trả về nên lan can phải bao gồm phản hồi của công cụ - cùng với thông tin đầu vào, lệnh gọi công cụ và đầu ra của người dùng - để nội dung hình ảnh được sàng lọc ở bất cứ nơi nào nó có thể vào hoặc rời khỏi hoạt động, với tính năng Chặn thực thi rằng nội dung có hại bị gắn cờ sẽ bị dừng thay vì chỉ được ghi lại. Đối với quyền truy cập vào bộ lưu trữ, yêu cầu được ghi thành văn bản của An toàn nội dung Azure AI là danh tính tài nguyên của nó giữ vai trò Người đóng góp dữ liệu (hoặc Chủ sở hữu) của Storage Blob để đọc blob thông qua blobUrl; Trình đọc dữ liệu Storage Blob không phải là vai trò được hỗ trợ cho trường hợp này. Do đó, cấu hình hoạt động có ít đặc quyền nhất là Bộ đóng góp dữ liệu Storage Blob được cấp system-assigned managed identity, giúp tránh cả khóa tài khoản lưu trữ và vai trò hàng đợi do người dùng chỉ định không liên quan.

**Tài liệu tham khảo:**
- [Quickstart: Analyze image content - Azure AI Content Safety](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/quickstart-image)
- [Guardrails and controls overview in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/guardrails/guardrails-overview)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-11', 'ai-103', 11, 'You are building a speech processing solution in Microsoft Foundry for a customer support platform.  
  
The platform will transcribe live phone calls so that supervisors at your company can view the call transcripts and detect issues while calls are still in progress. The call audio arrives as a continuous stream from the telephony system.  
  
You need the call transcripts to appear within only a few seconds of the audio stream.  
  
What should you do?', '[{"key":"A","text":"Use text to speech by using a custom neural voice."},{"key":"B","text":"Use speech translation to generate the transcripts into multiple languages."},{"key":"C","text":"Run a batch transcription job on recorded audio files."},{"key":"D","text":"Use real-time speech to text to process streaming audio input."}]'::jsonb, ARRAY['D']::text[], 'Lời nói thành văn bản trong thời gian thực xử lý luồng âm thanh liên tục và trả về kết quả phiên âm một phần và cuối cùng trong vòng vài giây, điều này được yêu cầu để người giám sát xem bản ghi trong khi cuộc gọi vẫn đang diễn ra. Phiên âm hàng loạt được thiết kế để xử lý không đồng bộ các tệp âm thanh đã được ghi và có độ trễ cao hơn nhiều, khiến nó không phù hợp để theo dõi trực tiếp. Chuyển văn bản thành giọng nói bằng giọng nói thần kinh tùy chỉnh sẽ tạo ra âm thanh từ văn bản thay vì phiên âm nó và dịch giọng nói sẽ chuyển đổi giọng nói được phiên âm sang ngôn ngữ khác thay vì tự cung cấp bản phiên âm có độ trễ thấp.

**Tài liệu tham khảo:**
[What is real-time speech to text?](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speech-to-text)', 'Implement text analysis solutions', ARRAY['AI-103', 'Implement text analysis solutions']::text[], NULL, 'published'),
  ('ai103-12', 'ai-103', 12, 'You have a Python application named App1 that integrates with a Microsoft Foundry project named Project1. You need App1 to meet the following requirements:  
  
- Authenticate by using a Microsoft Entra managed identity.  
- Send prompts to a deployed model using the Azure OpenAI Responses API.  
  
How should you complete the Python code?', '{"type":"matching_dropdown","statements":[{"id":"cred","text":"Option 1:","correctAnswer":"C","choiceKeys":["A","B","C"]},{"id":"method","text":"Option 2:","correctAnswer":"E","choiceKeys":["D","E","F"]}],"choices":[{"key":"A","text":"AzureKeyCredential"},{"key":"B","text":"ClientSecretCredential"},{"key":"C","text":"DefaultAzureCredential"},{"key":"D","text":"compact"},{"key":"E","text":"create"},{"key":"F","text":"retrieve"}]}'::jsonb, ARRAY['cred=C', 'method=E']::text[], 'managed identity được sử dụng trong Azure SDK thông qua azure.identity.DefaultAzureCredential, tự động phát hiện và sử dụng managed identity được chỉ định (hoặc các nguồn thông tin xác thực có sẵn khác) mà không yêu cầu khóa được lưu trữ hoặc bí mật ứng dụng khách - không giống như AzureKeyCredential (xác thực khóa API) hoặc ClientSecretCredential (yêu cầu bí mật ứng dụng được lưu trữ). Khi AIProjectClient hiển thị một ứng dụng khách tương thích với OpenAI thông qua get_openai_client(), việc gửi lời nhắc mới thông qua API phản hồi sẽ được thực hiện bằng cách gọi Reply.create(model=., input=.); create() đưa ra phản hồi mô hình mới, trong khi lấy() chỉ tìm nạp phản hồi hiện có và compact() không liên quan đến việc gửi lời nhắc.

**Tài liệu tham khảo:**
[Use the Azure OpenAI Responses API](https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/responses) · [Quickstart: Build agents using the Responses API](https://learn.microsoft.com/en-us/azure/foundry/agents/quickstarts/responses-api)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-13', 'ai-103', 13, 'You have a Microsoft Foundry project that contains an agent, and the agent has a Model Context Protocol (MCP) tool that queries a knowledge base stored in Azure AI Search.  
  
Some agent runs return answers straight from the base model without invoking the knowledge base, so those responses lack grounded citations.  
  
You are given the following code snippet, which runs the agent:  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783676238651-7e94yywb.png)  
  
You need to add the correct `tool_choice` parameter to the code so that the agent is deterministically forced to invoke the MCP tool on every run.  
  
What should you add?', '[{"key":"A","text":"tool_choice={“required”}"},{"key":"B","text":"tool_choice={“auto”}"},{"key":"C","text":"tool_choice={“type”:“knowledge_base”}"},{"key":"D","text":"tool_choice ={“type”:“mcp”}"}]'::jsonb, ARRAY['D']::text[], 'Tham số tool_choice của Azure AI Agents SDK chấp nhận chuỗi chế độ (tự động, bắt buộc, không có) hoặc đối tượng lựa chọn công cụ được đặt tên để ghim hoạt động chạy đến một công cụ cụ thể theo loại của nó — ví dụ: giá trị tương đương với {"type": "mcp"} — buộc tác nhân gọi công cụ cụ thể đó thay vì bất kỳ công cụ nào mà mô hình chọn. Đặt tool_choice thành "bắt buộc" chỉ đảm bảo rằng một số công cụ được gọi; nếu tác nhân có sẵn nhiều công cụ thì điều đó sẽ không đảm bảo công cụ MCP cụ thể là công cụ được gọi. Bởi vì mục tiêu là buộc phải gọi công cụ MCP một cách cụ thể (không chỉ đơn thuần là bất kỳ công cụ nào), nên giá trị tool_choice được nhập/đặt tên nhắm mục tiêu loại công cụ mcp là bắt buộc.

**Tài liệu tham khảo:**
- [azure.ai.agents.models.AgentsNamedToolChoice class](https://learn.microsoft.com/en-us/python/api/azure-ai-agents/azure.ai.agents.models.agentsnamedtoolchoice)
- [Tool best practices for Microsoft Foundry Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/tool-best-practice)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], 'https://cdn.examcademy.com/images/questions/1783676238651-7e94yywb.png', 'published'),
  ('ai103-14', 'ai-103', 14, 'You have a Microsoft Foundry project.  
  
You are planning a customer support solution built around an agent. The solution must:  
  
- Provide accurate, context-aware responses grounded in internal product documentation stored in Azure AI Search.  
- Require deep, multi-step reasoning across long contexts.  
- Generate detailed natural language responses.  
  
Which type of model should you use to power the agent?', '[{"key":"A","text":"a multimodal model"},{"key":"B","text":"a small language model (SLM)"},{"key":"C","text":"a key phrase extraction model"},{"key":"D","text":"a large language model (LLM)"}]'::jsonb, ARRAY['D']::text[], 'Các mô hình ngôn ngữ lớn được xây dựng để lý luận sâu, nhiều bước trên các cửa sổ ngữ cảnh dài và để tạo ra đầu ra ngôn ngữ tự nhiên chi tiết, trôi chảy, đó chính xác là những gì lý luận hỗ trợ khách hàng dựa trên truy xuất, có căn cứ yêu cầu. Các mô hình ngôn ngữ nhỏ đánh đổi độ sâu lý luận và kích thước cửa sổ ngữ cảnh để có chi phí và độ trễ thấp hơn, một mô hình đa phương thức bổ sung khả năng xử lý hình ảnh/âm thanh không được yêu cầu ở đây và mô hình trích xuất cụm từ khóa thực hiện trích xuất văn bản hẹp thay vì tạo và lập luận mở.', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-15', 'ai-103', 15, 'You have a Microsoft Foundry project that contains an agent.  
  
The agent ingests scanned PDF vendor invoices that contain tables and embedded QR codes. The agent must preserve the PDF layout in the extracted output so that downstream processing can reference sections and tables.  
  
You plan to call Azure Content Understanding in Foundry Tools.  
  
You need to extract the content and layout elements and detect the QR codes, without requiring a language model deployment.  
  
Which built-in analyzer should you use?', '[{"key":"A","text":"prebuilt-documentFieldSchema"},{"key":"B","text":"prebuilt-read"},{"key":"C","text":"prebuilt-documentSearch"},{"key":"D","text":"prebuilt-layout"}]'::jsonb, ARRAY['D']::text[], 'Trình phân tích bố cục dựng sẵn sẽ trích xuất các thành phần nội dung và bố cục — từ, đoạn văn, bảng và cấu trúc phần — trong khi vẫn giữ nguyên bố cục tài liệu, đồng thời nó cũng phát hiện và giải mã mã vạch, bao gồm cả mã QR, như một phần đầu ra của nó; nó chạy như một bộ phân tích dựa trên bố cục/OCR và không yêu cầu triển khai mô hình ngôn ngữ. chế độ đọc dựng sẵn chỉ thực hiện trích xuất văn bản OCR, không có cấu trúc bảng hoặc bố cục, đồng thời-documentFieldSchema dựng sẵn và tìm kiếm tài liệu dựng sẵn không phải là trình phân tích trích xuất bố cục và mã vạch.

**Tài liệu tham khảo:**
[Azure Content Understanding in Foundry Tools - analyzer reference](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/concepts/analyzer-reference) · [Document layout analysis - Document Intelligence](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/prebuilt/layout?view=doc-intel-4.0.0)', 'Implement information extraction solutions', ARRAY['AI-103', 'Implement information extraction solutions']::text[], NULL, 'published'),
  ('ai103-16', 'ai-103', 16, 'You are deploying a support agent that lets users upload photos.  
  
You need to automatically classify the uploaded images for harmful content. The solution must block content according to severity levels.  
  
What should you do?', '[{"key":"A","text":"Apply keyword scanning to optical character recognition (OCR) output by using Azure Vision in Foundry Tools."},{"key":"B","text":"Enable prompt shields."},{"key":"C","text":"Use blocklists."},{"key":"D","text":"Implement image moderation."}]'::jsonb, ARRAY['D']::text[], 'Khả năng kiểm duyệt hình ảnh của Azure AI Content Safety sẽ phân tích hình ảnh và trả về từng danh mục tác hại (chẳng hạn như bạo lực, nội dung khiêu dâm, tự làm hại bản thân và thù hận), mức độ nghiêm trọng (0-An toàn, 2-Thấp, 4-Trung bình, 6-Cao). Ứng dụng có thể định cấu hình ngưỡng mức độ nghiêm trọng được phép/bị cấm cho mỗi danh mục để dịch vụ trả về quyết định chấp nhận/từ chối, cho phép tự động chặn các nội dung tải lên có hại dựa trên mức độ nghiêm trọng. Việc chạy quét từ khóa OCR chỉ phát hiện văn bản được nhúng trong hình ảnh và bỏ sót tác hại hoàn toàn về mặt hình ảnh; prompt shields bảo vệ chống lại các cuộc tấn công tiêm nhắc thay vì phân loại nội dung hình ảnh; và danh sách chặn khớp với các cụm từ cụ thể đã biết thay vì đánh giá mức độ nghiêm trọng của tổn hại hình ảnh.

**Tài liệu tham khảo:**
[Quickstart: Analyze image content - Azure AI Content Safety](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/quickstart-image) · [Harm categories in Azure AI Content Safety](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/harm-categories)', 'Implement computer vision solutions', ARRAY['AI-103', 'Implement computer vision solutions']::text[], NULL, 'published'),
  ('ai103-17', 'ai-103', 17, 'Solution: You increase the value of the `max_tokens` parameter.  
  
Does this solution meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], 'Lỗi được báo cáo là các điều khoản quy định bắt buộc đã có trong nội dung được truy xuất nhưng bị loại khỏi bản tóm tắt được tạo - vấn đề về lựa chọn nội dung/độ trung thực, không phải giới hạn độ dài đầu ra. Việc tăng max_tokens chỉ làm tăng mức trần về số lượng mã thông báo mà mô hình được phép tạo; nó không hướng dẫn hoặc buộc mô hình phải đưa vào các mệnh đề cụ thể mà nó hiện đang chọn bỏ qua, do đó, nó không khắc phục được thiếu sót một cách đáng tin cậy và không đáp ứng được mục tiêu cải thiện tính hoàn thiện.', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-18', 'ai-103', 18, 'Solution: You add a reflection pass that regenerates the response if the required clauses are missing.  
  
Does this solution meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[], 'Việc thêm thẻ phản ánh sẽ trực tiếp đóng vòng lặp giữa phát hiện và sửa lỗi: quy trình kiểm tra bản tóm tắt đã tạo để tìm các điều khoản quy định bắt buộc và nếu thiếu bất kỳ điều khoản nào, sẽ kích hoạt quá trình tái tạo trước khi phản hồi được trả về. Bởi vì mẫu này cố gắng tạo lại một cách rõ ràng cho đến khi đưa vào nội dung bị thiếu nên nó trực tiếp giải quyết lỗi về tính đầy đủ được báo cáo và đáp ứng mục tiêu.

**Tài liệu tham khảo:**
[Agent Evaluators for Generative AI - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/evaluation-evaluators/agent-evaluators)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-19', 'ai-103', 19, 'Solution: You increase the value of the `temperature` parameter.  
  
Does this solution meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], 'Tham số nhiệt độ kiểm soát tính ngẫu nhiên của việc lấy mẫu mã thông báo; nó có cơ chế no để đảm bảo rằng các mệnh đề bắt buộc cụ thể từ nội dung truy xuất được chọn và đưa vào đầu ra. Nhiệt độ tăng làm cho kết quả đầu ra khó dự đoán hơn và, nếu có, sẽ làm tăng nguy cơ bỏ sót hoặc thay đổi nội dung được yêu cầu thay vì đảm bảo đưa nội dung đó vào, do đó nó không đáp ứng được mục tiêu cải thiện tính hoàn chỉnh.', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-20', 'ai-103', 20, 'Solution: You run an evaluation flow that scores responses for completeness and blocks any response that falls below a defined threshold.  
  
Does this solution meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], 'Luồng đánh giá chấm điểm tính đầy đủ và chặn các câu trả lời có điểm thấp là cổng chất lượng, không phải là cơ chế khắc phục — nó chỉ có thể cho phép các câu trả lời đã hoàn chỉnh thông qua hoặc giữ lại những câu trả lời chưa hoàn chỉnh; nó không bổ sung các điều khoản quy định còn thiếu hoặc khiến tác nhân thực sự tạo ra phản hồi hoàn chỉnh. Vì mục tiêu là cải thiện tính đầy đủ của các phản hồi mà người dùng nhận được (không chỉ đơn thuần là lọc ra những phản hồi chưa hoàn chỉnh), nên luồng đánh giá chỉ theo khối sẽ không tự mình đáp ứng được mục tiêu trừ khi nó được kết hợp với bước tái tạo hoặc phản ánh.

**Tài liệu tham khảo:**
[Agent Evaluators for Generative AI - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/evaluation-evaluators/agent-evaluators)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-21', 'ai-103', 21, 'You have a customer support agent built with the Microsoft Foundry Agent Service. The agent calls an Azure OpenAI model deployment.  
  
During load testing, calls intermittently fail with an HTTP 429 "rate limit exceeded" error.  
  
You need to handle the throttling to reduce call failures and improve reliability under load. The solution must stay within the service and model limits.  
  
What should you do?', '[{"key":"A","text":"Create a new thread and retry the calls immediately."},{"key":"B","text":"Reduce the number of registered tools."},{"key":"C","text":"Implement a retry policy that uses exponential backoff and jitter."},{"key":"D","text":"Spit uploaded content into smaller files."}]'::jsonb, ARRAY['C']::text[], 'Mẫu được đề xuất để xử lý phản hồi Azure OpenAI HTTP 429 là chính sách thử lại phía máy khách sử dụng thời gian chờ theo cấp số nhân kết hợp với jitter ngẫu nhiên (tôn trọng bất kỳ tiêu đề Thử lại sau nào khi có). Điều này dàn trải số lần thử lại theo thời gian để máy khách tự động chậm lại và duy trì trong giới hạn tốc độ triển khai thay vì liên tục cản trở nó, cải thiện độ tin cậy mà không yêu cầu hạn ngạch bổ sung. Việc thử lại ngay lập tức trên một luồng mới chỉ làm phức tạp thêm việc điều tiết và việc giảm số lượng công cụ hoặc chia nhỏ các tệp đã tải lên không giải quyết được giới hạn mã thông báo/tốc độ yêu cầu.

**Tài liệu tham khảo:**
[Quotas and limits for Microsoft Foundry Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/limits-quotas-regions)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-22', 'ai-103', 22, 'You have a Microsoft Foundry project containing an agent that your company''s financial analysts use.  
  
You need to optimize the agent workflow by adding data access and processing capabilities that meet these requirements:  
  
- The agent must be able to perform calculations during conversations.  
- The agent must be able to access up-to-date information from public websites.  
- The agent must be able to retrieve information from documents uploaded directly to it.  
  
Which tool should you use for each requirement? A tool can be used once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"1","text":"Access up-to-date information from public websites:","correctAnswer":"D"},{"id":"2","text":"Perform calculations during conversations:","correctAnswer":"A"},{"id":"3","text":"Retrieve information from documents uploaded directly to the agent:","correctAnswer":"C"}],"choices":[{"key":"A","text":"Code interpreter"},{"key":"B","text":"Computer use"},{"key":"C","text":"File search"},{"key":"D","text":"Grounding with Bing Search"},{"key":"E","text":"Microsoft Fabric"}]}'::jsonb, ARRAY['1=D', '2=A', '3=C']::text[], 'Grounding với Tìm kiếm Bing cho phép nhân viên truy xuất thông tin hiện tại, theo thời gian thực từ web công cộng. Thông tin này được yêu cầu để trả lời bằng thông tin cập nhật từ các trang web công cộng. Trình thông dịch mã chạy mã trong môi trường thực thi hộp cát, cho phép tổng đài viên thực hiện các phép tính và xử lý dữ liệu trong cuộc trò chuyện. Lập chỉ mục tìm kiếm tệp và truy xuất nội dung từ các tài liệu được tải trực tiếp lên tác nhân, đáp ứng yêu cầu thứ ba. Việc sử dụng máy tính và Microsoft Fabric không được thiết kế cho các trường hợp sau: việc sử dụng máy tính thúc đẩy môi trường GUI/OS và việc tích hợp Microsoft Fabric nhắm mục tiêu tài sản nền tảng dữ liệu doanh nghiệp thay vì các tệp được tải trực tiếp lên tác nhân.

**Tài liệu tham khảo:**
[Agent tools overview for Microsoft Foundry Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/tool-catalog)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-23', 'ai-103', 23, 'You need to configure the model deployment for Agent1 so that it satisfies the technical requirements. Which options should you configure?', '{"type":"matching_dropdown","statements":[{"id":"1","text":"Deployment type:","correctAnswer":"A","choiceKeys":["A","B","C"]},{"id":"2","text":"Version update policy:","correctAnswer":"E","choiceKeys":["D","E","F"]}],"choices":[{"key":"A","text":"Standard"},{"key":"B","text":"Global Standard"},{"key":"C","text":"Global Provisioned"},{"key":"D","text":"Once the current version expires"},{"key":"E","text":"Opt out of automatic model version upgrades"},{"key":"F","text":"Upgrade once a new default version becomes available"}]}'::jsonb, ARRAY['1=A', '2=E']::text[], 'Việc triển khai Azure OpenAI/Mô hình Foundry Tiêu chuẩn (khu vực) chỉ xử lý suy luận trong khu vực Azure nơi tài nguyên được triển khai, mang lại sự đảm bảo về nơi cư trú dữ liệu mạnh nhất, trong khi Tiêu chuẩn Toàn cầu và Tuyến đường được Cung cấp Toàn cầu yêu cầu trên cơ sở hạ tầng toàn cầu của Azure với bảo đảm khu vực cố định no. Vì dự án được triển khai ở khu vực EU và dữ liệu của nó phải nằm trong EU nên cần phải triển khai Tiêu chuẩn; Cung cấp toàn cầu cũng không phù hợp vì các bậc được cung cấp dự trữ công suất thông lượng chuyên dụng, mâu thuẫn với yêu cầu mở rộng quy mô một cách linh hoạt mà không có công suất dự trữ. Đối với phiên bản mô hình, việc chọn không tham gia nâng cấp phiên bản mô hình tự động sẽ ghim việc triển khai lên phiên bản mô hình cố định để chất lượng phản hồi và hành vi luôn nhất quán theo thời gian, thay vì thay đổi bất cứ khi nào Microsoft ngừng hoạt động hoặc quảng cáo phiên bản mặc định mới.

**Tài liệu tham khảo:**
- [Understanding deployment types in Microsoft Foundry Models](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/deployment-types)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-24', 'ai-103', 24, 'You need to configure Agent1 so that it satisfies the security and compliance requirements.  
  
Which capability should you use?', '[{"key":"A","text":"self-harm content filtering"},{"key":"B","text":"prompt shields"},{"key":"C","text":"Personally identifiable information (PII) Detection"},{"key":"D","text":"violence content filtering"}]'::jsonb, ARRAY['B']::text[], 'Prompt Shields là khả năng An toàn nội dung Azure AI được tích hợp vào Microsoft Foundry giúp phát hiện và chặn cả các cuộc tấn công trực tiếp theo lời nhắc của người dùng và "tấn công tài liệu" gián tiếp — các hướng dẫn ẩn được nhúng trong nội dung của bên thứ ba như tài liệu, hình ảnh, email hoặc trang web cố gắng chiếm quyền điều khiển phiên mô hình hoặc tác nhân. Vì trang sản phẩm là các tệp PDF bên ngoài có thể chứa hình ảnh có văn bản nhúng nên việc bật Prompt Shields sẽ bảo vệ tác nhân khỏi hành động theo các hướng dẫn độc hại ẩn trong văn bản nhúng đó, đây là yêu cầu cụ thể mà nó đáp ứng. Thay vào đó, tính năng Phát hiện PII xác định và biên tập lại dữ liệu cá nhân ở dạng văn bản và không giải quyết các cuộc tấn công chèn lệnh, trong khi tính năng lọc nội dung tự làm hại bản thân và bạo lực giải quyết các danh mục nội dung có hại thay vì hướng dẫn được đưa vào.

**Tài liệu tham khảo:**
[Prompt Shields in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/content-filter-prompt-shields)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-25', 'ai-103', 25, 'You need to recommend a solution for assessing the responses that Agent1 generates when it relies on the product information stored in storage1, and the solution must satisfy the technical requirements.  
  
What should you include in the recommendation?', '[{"key":"A","text":"a Retrieval Augmented Generation (RAG) evaluator"},{"key":"B","text":"a custom guardrail"},{"key":"C","text":"model fine-tuning"},{"key":"D","text":"a groundedness evaluator"}]'::jsonb, ARRAY['A']::text[], 'Yêu cầu kỹ thuật nêu rõ rằng các phản hồi được xây dựng từ nội dung trang sản phẩm phải phù hợp, đầy đủ và chính xác. Bộ đánh giá Thế hệ truy xuất-tăng cường truy xuất (RAG) của Microsoft Foundry là danh mục đánh giá tích hợp được xây dựng có mục đích cho các tình huống có căn cứ, dựa trên truy xuất và kết hợp chất lượng truy xuất, độ chính xác thực tế so với nguồn được truy xuất), mức độ liên quan và số liệu về tính đầy đủ của phản hồi — trực tiếp bao gồm cả ba phẩm chất mà yêu cầu yêu cầu. Trình đánh giá căn cứ độc lập chỉ chấm điểm độ chính xác/trung thực về mặt thực tế đối với bối cảnh được truy xuất và bản thân nó không cho điểm mức độ liên quan hoặc tính đầy đủ, do đó, nó sẽ không tự mình xác thực đầy đủ yêu cầu đã nêu.

**Tài liệu tham khảo:**
- [Retrieval-Augmented Generation (RAG) Evaluators for Generative AI - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/evaluation-evaluators/rag-evaluators)
- [Built-in Evaluators Reference - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/built-in-evaluators)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-26', 'ai-103', 26, 'You need to configure Agent1 so that it answers customer questions only about Contoso products, in line with the business requirements.  
  
What should you do?', '[{"key":"A","text":"Modify the system message instructions."},{"key":"B","text":"Add few-shot examples."},{"key":"C","text":"Apply top-p sampling."},{"key":"D","text":"Increase the value of the temperature parameter."}]'::jsonb, ARRAY['A']::text[], 'Hạn chế phạm vi chủ đề của tổng đài viên — hướng dẫn họ từ chối hoặc chuyển hướng các câu hỏi bên ngoài miền sản phẩm đã xác định — là một quy tắc hành vi lâu dài và thông báo hệ thống là cơ chế xác định vai trò, ranh giới và các ràng buộc không thể thương lượng của tổng đài viên trong mỗi lượt trò chuyện. Các ví dụ ngắn gọn chủ yếu định hình kiểu và định dạng đầu ra thay vì thực thi ranh giới phạm vi cứng một cách đáng tin cậy, đồng thời lấy mẫu top-p và tham số nhiệt độ chỉ kiểm soát tính ngẫu nhiên/đa dạng đầu ra chứ không kiểm soát chủ đề nào mà tác nhân được phép thảo luận.

**Tài liệu tham khảo:**
[System message design for Azure OpenAI - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/advanced-prompt-engineering)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-27', 'ai-103', 27, 'You need to recommend an invoice review solution that addresses the issue reported by the finance department.  
  
What should you include in the recommendation?', '[{"key":"A","text":"chat completions"},{"key":"B","text":"Azure Document Intelligence in Foundry Tools"},{"key":"C","text":"Azure Content Understanding in Foundry Tools"},{"key":"D","text":"Image Analysis"}]'::jsonb, ARRAY['C']::text[], 'Hóa đơn nhà cung cấp của bộ phận tài chính đi kèm với bảng, biểu tượng và bố cục rất đa dạng, đồng thời phải được xác minh theo các điều khoản hợp đồng với nhà cung cấp và thay đổi theo kế hoạch đòi hỏi giải pháp đánh giá cả bố cục trực quan và nội dung văn bản của hóa đơn. Hướng dẫn riêng của Microsoft về việc lựa chọn giữa Hiểu nội dung và Document Intelligence đặt hóa đơn với các mẫu có độ biến đổi cao, không nhất quán trong kịch bản "tài liệu bán cấu trúc có độ biến thiên cao", trong đó Microsoft đề xuất trình phân tích Hiểu nội dung vì nó tổng quát hóa trên các biến thể mẫu và bố cục mà không gắn nhãn và có thể suy luận về nội dung được trích xuất, bao gồm các giá trị tham chiếu chéo (chẳng hạn như đối với các điều khoản hợp đồng) — một khả năng lý luận mà các mô hình trích xuất trường có cấu trúc của Document Intelligence không có cung cấp. Thay vào đó, mô hình hóa đơn dựng sẵn của Document Intelligence được đề xuất cho các biểu mẫu một mẫu, được tiêu chuẩn hóa, không phù hợp với yêu cầu xác minh nhiều tài liệu, bố cục đa dạng được mô tả ở đây; hoàn thành trò chuyện và Phân tích hình ảnh không cung cấp khả năng trích xuất trường có cấu trúc tài liệu cũng như lý luận tài liệu nhận biết bố cục.

**Tài liệu tham khảo:**
- [Choose the right Azure AI tool for document processing](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/choosing-right-ai-tool)', 'Implement information extraction solutions', ARRAY['AI-103', 'Implement information extraction solutions']::text[], NULL, 'published'),
  ('ai103-28', 'ai-103', 28, 'You need to configure an indexing pipeline for Agent1 so that it can retrieve the relevant product information from storage1. The solution must satisfy the technical requirement.  
  
Which two built-in skills should you use? Each correct answer presents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Azure OpenAI Embedding"},{"key":"B","text":"Entity Recognition"},{"key":"C","text":"Text Split"},{"key":"D","text":"Merge"},{"key":"E","text":"Language Detection"},{"key":"F","text":"key phrase extraction"}]'::jsonb, ARRAY['A', 'C']::text[], 'Yêu cầu kỹ thuật yêu cầu một quy trình lập chỉ mục hỗ trợ ngữ nghĩa và vector search trên các trang sản phẩm PDF. Trong bộ kỹ năng Azure AI Search, kỹ năng Tách văn bản chia văn bản tài liệu được trích xuất thành các đoạn có kích thước phù hợp để xử lý tiếp theo và kỹ năng Nhúng Azure OpenAI chuyển đổi từng đoạn thành một vectơ được ghi vào trường vectơ trong chỉ mục. Cùng với nhau, hai kỹ năng tích hợp này tạo ra nội dung được vector hóa theo khối cần thiết cho chỉ mục ngữ nghĩa/vector search; Nhận dạng thực thể, Hợp nhất, Phát hiện ngôn ngữ và Trích xuất cụm từ khóa là các kỹ năng làm giàu không tạo ra các khối hoặc vectơ cần thiết để xây dựng chỉ mục.

**Tài liệu tham khảo:**
[Text Split skill - Azure AI Search](https://learn.microsoft.com/en-us/azure/search/cognitive-search-skill-textsplit) · [Azure OpenAI Embedding skill - Azure AI Search](https://learn.microsoft.com/en-us/azure/search/cognitive-search-skill-azure-openai-embedding)', 'Implement information extraction solutions', ARRAY['AI-103', 'Implement information extraction solutions']::text[], NULL, 'published'),
  ('ai103-29', 'ai-103', 29, 'You need to recommend a solution that supports the planned changes and technical requirements so that Agent1 can use the product information stored in storage1.  
  
What should you include in the recommendation?', '[{"key":"A","text":"Azure Translator in Foundry Tools"},{"key":"B","text":"Grounding with Bing Search"},{"key":"C","text":"Azure AI Search"},{"key":"D","text":"Azure Document intelligence in Foundry Tools"}]'::jsonb, ARRAY['C']::text[], 'Azure AI Search là dịch vụ truy xuất triển khai quy trình lập chỉ mục được mô tả trong các yêu cầu kỹ thuật: nó nhập các trang sản phẩm PDF, phân đoạn và vector hóa chúng thông qua một bộ kỹ năng, đồng thời hiển thị chỉ mục hỗ trợ ngữ nghĩa/vectơ mà Agent1 có thể truy vấn dưới dạng dữ liệu grounding để trả lời các câu hỏi về sản phẩm bằng ngôn ngữ tự nhiên. Azure Translator chỉ thực hiện dịch ngôn ngữ, Grounding với Tìm kiếm Bing truy xuất nội dung web công khai thay vì tài liệu riêng tư trong bộ lưu trữ1 và Azure Document Intelligence trích xuất nội dung tài liệu nhưng không tự cung cấp khả năng lập chỉ mục hoặc truy xuất.

**Tài liệu tham khảo:**
[What''s new in Azure AI Search / Integrated vectorization](https://learn.microsoft.com/en-us/azure/search/vector-search-integrated-vectorization) · [Retrieval Augmented Generation (RAG) overview - Azure AI Search](https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-30', 'ai-103', 30, 'You have a Microsoft Foundry project containing an internal Q&A agent.  
  
Users report the following issues when they ask the agent questions:  
  
- An increasing number of "No relevant information found" responses.  
- Periodic HTTP 429 rate limit exceeded errors during peak hours.  
  
You need to determine whether each issue results from model unavailability, resource limits, or inference failures. What should you do?', '{"type":"matching_dropdown","statements":[{"id":"1","text":"Metrics to enable:","correctAnswer":"A","choiceKeys":["A","B","C","D"]},{"id":"2","text":"Diagnostic log to collect:","correctAnswer":"G","choiceKeys":["E","F","G","H"]}],"choices":[{"key":"A","text":"Model Availability Rate and Provisioned Utilization"},{"key":"B","text":"Only Tokens Cache Match Rate"},{"key":"C","text":"Only Total Requests filtered to status code 200"},{"key":"D","text":"Time To Response and Total Tokens"},{"key":"E","text":"AllMetrics"},{"key":"F","text":"audit"},{"key":"G","text":"RequestResponse"},{"key":"H","text":"trace"}]}'::jsonb, ARRAY['1=A', '2=G']::text[], 'Việc bật chỉ số Tỷ lệ sẵn sàng của mô hình cho thấy sự sụt giảm về thời gian hoạt động của mô hình giải thích các lỗi do suy luận/không có sẵn, chẳng hạn như sự gia tăng trong các phản hồi "Đã tìm thấy thông tin liên quan No", trong khi chỉ số Mức sử dụng được cung cấp cho biết mức độ sử dụng công suất được cung cấp của triển khai, giải thích các lỗi giới hạn tốc độ HTTP 429 trong thời gian tải cao điểm do giới hạn tài nguyên gây ra. Việc thu thập nhật ký chẩn đoán Yêu cầu phản hồi sẽ ghi lại tên hoạt động, thời lượng và mã trạng thái HTTP của từng cuộc gọi, cho phép bạn liên hệ các cuộc gọi bị lỗi hoặc bị điều chỉnh cụ thể (bao gồm cả 429) với tín hiệu cấp số liệu để phân tích nguyên nhân gốc rễ; danh mục nhật ký Kiểm tra và Theo dõi không cung cấp chi tiết trạng thái/thời lượng mỗi cuộc gọi này và AllMetrics là danh mục xuất số liệu chứ không phải nhật ký chẩn đoán.

**Tài liệu tham khảo:**
- [Monitoring data reference for Azure OpenAI - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/openai/monitor-openai-reference)
- [Enable diagnostic logging - Foundry Tools](https://learn.microsoft.com/en-us/azure/ai-services/diagnostic-logging)', 'Plan and manage an Azure AI solution', ARRAY['AI-103', 'Plan and manage an Azure AI solution']::text[], NULL, 'published'),
  ('ai103-31', 'ai-103', 31, 'You have an application that processes scanned PDF invoices. The invoices use varied layouts and include tables that span multiple pages.  
  
Your pipeline uses optical character recognition (OCR) to extract totals and invoice numbers, but the results are frequently incorrect because the document''s structure is ignored.  
  
You need a solution that provides OCR, layout analysis, and field extraction that generalizes across templates. The solution must NOT require training a custom model, and it must minimize administrative effort.  
  
What should you include in the solution?', '[{"key":"A","text":"Azure Language in Foundry Tools"},{"key":"B","text":"Azure Content Understanding in Foundry Tools"},{"key":"C","text":"an Azure Machine Learning model"}]'::jsonb, ARRAY['B']::text[], 'Đối với các tài liệu có tính biến đổi cao, bán cấu trúc, chẳng hạn như hóa đơn từ nhiều nhà cung cấp có bố cục không nhất quán, Microsoft khuyên dùng trình phân tích tùy chỉnh Hiểu nội dung Azure: nó kết hợp OCR, phân tích bố cục và trích xuất trường, khái quát hóa tốt trên các biến thể mẫu và ngôn ngữ, đồng thời yêu cầu dữ liệu đào tạo được gắn nhãn no để bắt đầu, giúp giảm thiểu nỗ lực quản trị. Ngôn ngữ Azure trong Công cụ đúc thực hiện phân tích văn bản thay vì trích xuất trường nhận biết bố cục và việc xây dựng giải pháp trên mô hình Azure Machine Learning sẽ yêu cầu đào tạo và duy trì mô hình tùy chỉnh, yêu cầu này loại trừ rõ ràng.

**Tài liệu tham khảo:**
[Choose the right Azure AI tool for document processing](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/choosing-right-ai-tool)', 'Implement information extraction solutions', ARRAY['AI-103', 'Implement information extraction solutions']::text[], NULL, 'published'),
  ('ai103-32', 'ai-103', 32, 'You have a Microsoft Foundry project named Project1 that contains an application for processing PDF vendor invoices.  
  
You need to configure Azure Document Intelligence in Foundry Tools to produce Markdown output that preserves the sections and table structure of the PDFs. The solution must minimize development effort.  
  
What should you do?', '[{"key":"A","text":"Configure output=figures when you analyze the PDF."},{"key":"B","text":"Configure content=markdown when you analyze the document."},{"key":"C","text":"Increase the confidence threshold."},{"key":"D","text":"Set the output_content_format=ContentFormat.MARKDOWN value."}]'::jsonb, ARRAY['D']::text[], 'Lệnh gọi tài liệu phân tích Document Intelligence chấp nhận tham số out_content_format; đặt nó thành ContentFormat.MARKDOWN (outputContentFormat=markdown ở cấp độ REST) ​​sẽ hướng dẫn mô hình bố cục dựng sẵn trả về nội dung được trích xuất dưới dạng Markdown hương vị GitHub để duy trì các tiêu đề/phần và cấu trúc bảng. Điều này chỉ yêu cầu một thay đổi tham số duy nhất với quá trình xử lý hậu kỳ tùy chỉnh no. "output=figures" và "content=markdown" không phải là tên thông số SDK/API hợp lệ và việc tăng ngưỡng tin cậy có ảnh hưởng đến no ở định dạng đầu ra.

**Tài liệu tham khảo:**
[Document Intelligence supported Markdown elements - Foundry Tools](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/concept/markdown-elements?view=doc-intel-4.0.0) · [sample_analyze_documents_output_in_markdown.py - azure-sdk-for-python](https://github.com/Azure/azure-sdk-for-python/blob/main/sdk/documentintelligence/azure-ai-documentintelligence/samples/sample_analyze_documents_output_in_markdown.py)', 'Implement information extraction solutions', ARRAY['AI-103', 'Implement information extraction solutions']::text[], NULL, 'published'),
  ('ai103-33', 'ai-103', 33, 'You have a Microsoft Foundry project that processes procurement documents submitted by suppliers. You need to implement two pipelines using Azure Content Understanding in Foundry Tools that meet the following requirements:  
  
- Pipeline1 must support cost-effective, high-volume processing of standalone PDF invoices.  
- Pipeline2 must support cross-document validation using multi-step reasoning and reference data.  
  
How should you configure each pipeline? Each configuration can be used once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"1","text":"Pipeline1:","correctAnswer":"D"},{"id":"2","text":"Pipeline2:","correctAnswer":"A"}],"choices":[{"key":"A","text":"Multi-file task in pro mode"},{"key":"B","text":"Multi-file task in standard mode"},{"key":"C","text":"Single-file task in pro mode"},{"key":"D","text":"Single-file task in standard mode"}]}'::jsonb, ARRAY['1=D', '2=A']::text[], 'Chế độ hiểu nội dung Azure trong chế độ tiêu chuẩn của Foundry Tools xử lý một tài liệu đầu vào cho mỗi tác vụ và được tối ưu hóa để tiết kiệm chi phí cũng như độ trễ thấp, khiến chế độ này phù hợp cho việc xử lý hóa đơn PDF độc lập, khối lượng lớn. Chế độ chuyên nghiệp hoạt động trên các tác vụ nhiều tệp, hỗ trợ cung cấp dữ liệu tham chiếu tại thời điểm tạo máy phân tích và áp dụng lý luận nhiều bước để xác thực và đưa ra kết luận trên các tài liệu (ví dụ: kiểm tra xem hóa đơn có khớp với hợp đồng hay không) - chính xác là xác thực tài liệu chéo với dữ liệu tham chiếu mà quy trình thứ hai yêu cầu.

**Tài liệu tham khảo:**
[Azure Content Understanding in Foundry Tools standard and pro modes (preview)](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/concepts/standard-pro-modes)', 'Implement information extraction solutions', ARRAY['AI-103', 'Implement information extraction solutions']::text[], NULL, 'published'),
  ('ai103-34', 'ai-103', 34, 'You are building a web app named App1 that generates responses by using a model deployed to a Microsoft Foundry project named Project1.  
  
Before sending prompts to the model, App1 must retrieve documents by using Azure AI Search.  
  
You need to integrate Project1 and App1. The solution must meet the following requirements:  
  
- Multiple client applications must use the same search configuration.  
- A security policy must prevent key-based authentication.  
- Administrative effort must be minimized.  
  
What should you do?', '[{"key":"A","text":"Create a custom HTTP connection in Foundry and manually configure Azure AI Search endpoints per application."},{"key":"B","text":"Configure an Azure AI Search connection in Project1 and reference the connection in each application."},{"key":"C","text":"Call Azure AI Search directly from each application by using Microsoft Entra authentication."},{"key":"D","text":"Enable a managed identity for each application and call Azure AI Search directly."}]'::jsonb, ARRAY['B']::text[], 'Việc xác định một kết nối Azure AI Search duy nhất ở cấp Project1 cho phép mọi ứng dụng khách tham chiếu cùng một cấu hình tìm kiếm được quản lý tập trung thay vì sao chép cài đặt chỉ mục và điểm cuối cho mỗi ứng dụng. Các kết nối dự án Microsoft Foundry hỗ trợ xác thực Microsoft Entra ID (dựa trên mã thông báo, không cần khóa), do đó, các khóa API no cần được cấp hoặc xoay vòng, đáp ứng các yêu cầu về cấu hình dùng chung, no-key-based-auth và chi phí quản trị thấp cùng một lúc. Xây dựng kết nối HTTP tùy chỉnh cho mỗi ứng dụng hoặc yêu cầu mỗi ứng dụng gọi trực tiếp Azure AI Search (có hoặc không có managed identity riêng), cấu hình trùng lặp trên các ứng dụng và tăng nỗ lực quản trị liên tục.

**Tài liệu tham khảo:**
[Add a new connection to your project - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/how-to/connections-add) · [Connect an Azure AI Search index to Foundry agents](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/tools/ai-search)', 'Plan and manage an Azure AI solution', ARRAY['AI-103', 'Plan and manage an Azure AI solution']::text[], NULL, 'published'),
  ('ai103-35', 'ai-103', 35, 'You have an Azure Speech in Foundry Tools resource that hosts a custom speech-to-text model deployed to a custom endpoint, and an agent uses that endpoint for real-time speech recognition.  
  
The custom speech-to-text model is nearing its expiration date.  
  
What is the expected behavior once the model expires?', '[{"key":"A","text":"Speech recognition requests will return a 4xx error until a new custom model is deployed."},{"key":"B","text":"Speech recognition requests will continue to use the expired custom model until the model is removed manually."},{"key":"C","text":"Speech recognition requests will fall back to the most recent base model for the same locale."},{"key":"D","text":"The custom model will be deleted automatically when the model expires."}]'::jsonb, ARRAY['C']::text[], 'Các mô hình Lời nói tùy chỉnh và các điểm cuối được triển khai của chúng tuân theo vòng đời xác định và có ngày hết hạn. Khi mô hình tùy chỉnh đạt đến ngày đó, điểm cuối tùy chỉnh liên quan sẽ không tắt hoặc bắt đầu trả về lỗi; thay vào đó, dịch vụ Lời nói sẽ tự động quay lại sử dụng mô hình cơ sở gần đây nhất cho cùng một ngôn ngữ, do đó, các yêu cầu nhận dạng tiếp tục thành công, chỉ mất khả năng thích ứng tùy chỉnh thay vì thất bại hoàn toàn. Điểm cuối không tự động bị xóa và các mô hình tùy chỉnh đã hết hạn không được giữ lại vô thời hạn để tiếp tục sử dụng mà không cần can thiệp thủ công.

**Tài liệu tham khảo:**
[Model and endpoint lifecycle of Custom Speech](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/how-to-custom-speech-model-and-endpoint-lifecycle)', 'Plan and manage an Azure AI solution', ARRAY['AI-103', 'Plan and manage an Azure AI solution']::text[], NULL, 'published'),
  ('ai103-36', 'ai-103', 36, 'Your Microsoft Foundry project includes a customer support agent that calls an internal knowledge API tool before it generates responses.  
  
Users are reporting the following issues:  
  
- Certain requests take longer than 15 seconds to complete.  
- Certain responses are incorrect, even though the knowledge API returns the expected data.  
  
You need to inspect individual agent runs to view the ordered sequence of large language model (LLM) calls, tool invocations, and timing information.  
  
Which observability capability should you use?', '[{"key":"A","text":"token usage"},{"key":"B","text":"monitoring"},{"key":"C","text":"safety metrics"},{"key":"D","text":"tracing"}]'::jsonb, ARRAY['D']::text[], 'Theo dõi trong các bản ghi Microsoft Foundry, đối với mỗi lần chạy tác nhân riêng lẻ, một chuỗi các khoảng thời gian được sắp xếp theo thứ tự bao gồm các cuộc gọi LLM, lệnh gọi công cụ và thời lượng của chúng, cho phép bạn theo dõi chính xác những gì đã xảy ra trong một lần chạy để chẩn đoán cả mức tăng đột biến về độ trễ và các trường hợp trong đó kết quả công cụ chính xác vẫn tạo ra phản hồi sai. Việc sử dụng mã thông báo, bảng thông tin giám sát và số liệu an toàn là các tín hiệu tổng hợp được thu thập qua nhiều lần chạy và không hiển thị trình tự lệnh gọi mỗi lần chạy cần thiết cho loại kiểm tra nguyên nhân gốc rễ này.

**Tài liệu tham khảo:**
[Trace and Observe AI Agents in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/concepts/tracing)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-37', 'ai-103', 37, 'You have a Microsoft Foundry project that ingests scanned PDF invoices stored in Azure Blob Storage. Each invoice contains printed line items and uses a table-based layout.  
  
The extracted results are stored as structured JSON and used as grounding data for an agent in a Retrieval Augmented Generation (RAG) solution.  
  
You need to create a single analyzer that meets the following requirements:  
  
- Extracts the invoice number, invoice date, vendor name, and total amount across varying templates  
- Returns confidence scores so that results with confidence below 0.80 can be routed for supervisor review  
  
What should you use?', '[{"key":"A","text":"a Foundry agent that has groundedness guardrails enabled to extract invoice fields and confidence scores"},{"key":"B","text":"a custom Azure Content Understanding in Foundry Tools analyzer that defines the required fields as the extracted fields and the returned confidence scores for routing"},{"key":"C","text":"the Azure Content Understanding in Foundry Tools prebuilt-layout analyzer"},{"key":"D","text":"the Azure Content Understanding in Foundry Tools prebuilt-documentSearch analyzer and search.score from the Azure AI Search results for routing"}]'::jsonb, ARRAY['B']::text[], 'Trình phân tích Hiểu nội dung tùy chỉnh cho phép bạn xác định lược đồ chính xác của các trường cần trích xuất — số hóa đơn, ngày lập hóa đơn, tên nhà cung cấp và tổng số tiền — bất kể mẫu hóa đơn là gì và việc bật EstimateFieldSourceAndConfidence (hoặc EstimateSourceAndConfidence trên mỗi trường) sẽ khiến trình phân tích trả về điểm tin cậy cho từng trường được trích xuất. Sau đó, những điểm số đó có thể được so sánh với ngưỡng 0,80 để đưa ra các kết quả có độ tin cậy thấp để người giám sát xem xét. Trình phân tích bố cục dựng sẵn chỉ trích xuất các phần tử bố cục chung (văn bản, bảng) mà không có trường kinh doanh được đặt tên, Tìm kiếm tài liệu dựng sẵn cộng với điểm tìm kiếm của Azure AI Search phản ánh mức độ liên quan của việc truy xuất thay vì độ tin cậy của việc trích xuất trường và tác nhân Foundry với các rào cản tiếp đất sẽ đánh giá phản hồi grounding chứ không phải độ tin cậy trích xuất trên mỗi trường.

**Tài liệu tham khảo:**
- [Document analysis with confidence, grounding, and labeled samples - Content Understanding](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/document/analyzer-improvement)
- [What is an analyzer? Configuration and reference - Content Understanding](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/concepts/analyzer-reference)', 'Implement information extraction solutions', ARRAY['AI-103', 'Implement information extraction solutions']::text[], NULL, 'published'),
  ('ai103-38', 'ai-103', 38, 'You have a Microsoft Foundry project that contains an agent. The agent generates summaries from retrieved policy documents.  
  
You need to improve the completeness of the responses. The solution must be implemented in the application code''s logic before the responses are returned.  
  
What should you do?', '[{"key":"A","text":"Add a retry evaluation before the responses are returned."},{"key":"B","text":"Decrease the value of the max_tokens parameter."},{"key":"C","text":"Switch to Retrieval Augmented Generation (RAG)."},{"key":"D","text":"Replace the model with a smaller deployment."}]'::jsonb, ARRAY['A']::text[], 'Bước kiểm tra và thử lại tính đầy đủ được triển khai trong quy trình yêu cầu/phản hồi của chính ứng dụng — đánh giá phản hồi dự thảo cho nội dung được yêu cầu và tạo lại lệnh gọi trước khi phản hồi được chuyển lại cho người gọi — thực thi tính hoàn chỉnh ở lớp mã mà không thay đổi mô hình hoặc thiết kế truy xuất. Việc giảm max_tokens hoặc triển khai một mô hình nhỏ hơn đều làm giảm khả năng tạo ra đầu ra hoàn chỉnh của mô hình và việc chuyển sang RAG sẽ thay đổi cách truy xuất nội dung thay vì thêm kiểm tra tính đầy đủ trong mã trước khi trả về phản hồi.

**Tài liệu tham khảo:**
[Agent Evaluators for Generative AI - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/evaluation-evaluators/agent-evaluators)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-39', 'ai-103', 39, 'Your company is piloting a customer support agent within a Microsoft Foundry project called Project1. Project1 is connected to an existing Application Insights resource, and the support team reviews runs on the Traces tab.

The Foundry Agent Service is set up to:
- Retrieve the Application Insights connection string by calling project client.telemetry.get application insights connection string() .
- Call configure azure monitor(connection string=...) to enable telemetry.

A separate LangChain service uses OpenTelemetry and is configured as follows:
- It uses AzureAIOpenTelemetryTracer(connection string=..., enable content recording=False) .
- It passes the tracer with config={"callbacks":[azure tracer]} .

Company policy requires that:
- Telemetry from LangChain and OpenTelemetry must be distinguishable within the same Application Insights resource.
- Secrets and credentials must not be stored in prompts, tool arguments, or span attributes.

For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"type":"statement_matrix","statements":[{"id":"1","text":"The LangChain service will appear in Traces without configuring a tracer.","correctAnswer":"No"},{"id":"2","text":"Setting different OTEL_SERVICE_NAME values separates the services in Application Insights.","correctAnswer":"Yes"},{"id":"3","text":"When using enable_content_recording=False, prompts and tool data will be captured in the telemetry.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:No', '2:Yes', '3:No']::text[], 'AzureAIOpenTelemetryTracer phải được tạo và đính kèm rõ ràng với lần chạy LangChain/LangGraph (ví dụ: thông qua config={"callbacks": [tracer]}) để xuất các khoảng thời gian của dịch vụ đó sang Application Insights; không định cấu hình trình theo dõi cho một quy trình nhất định, phép đo từ xa của quy trình đó sẽ không được tự động ghi lại ở đó. Application Insights phân biệt phép đo từ xa với nhiều dịch vụ trong một tài nguyên bằng thuộc tính tài nguyên OpenTelemetry service.name cơ bản, thường được đặt thông qua biến môi trường OTEL_SERVICE_NAME, trở thành tên vai trò đám mây được hiển thị trong Azure Monitor - cung cấp cho mỗi dịch vụ vai trò nhận dạng riêng mặc dù cả hai đều ghi vào cùng một tài nguyên Application Insights. Việc đặt Enable_content_recording=False trên AzureAIOpenTelemetryTracer sẽ sắp xếp lại nội dung thông báo và đối số lệnh gọi công cụ từ các khoảng thời gian được phát ra, do đó, lời nhắc và dữ liệu công cụ KHÔNG được ghi lại trong phép đo từ xa khi cờ này là Sai, điều này thỏa mãn yêu cầu rằng bí mật và thông tin xác thực không được lưu trữ trong lời nhắc, đối số công cụ hoặc thuộc tính khoảng thời gian.

**Tài liệu tham khảo:**
- [Trace LangChain and LangGraph apps with Microsoft Foundry and Azure Monitor](https://learn.microsoft.com/en-us/azure/foundry/how-to/develop/langchain-traces)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-40', 'ai-103', 40, 'You have a Microsoft Foundry project containing a deployed ticket-triage agent.  
  
You notice that the agent sometimes responds without calling any tools, even in cases where a tool is required.  
  
You need to ensure the agent calls a tool during execution. How should you complete the Python code? A value can be used once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"key","text":"Slot 1:","correctAnswer":"D"},{"id":"value","text":"Slot 2:","correctAnswer":"B"}],"choices":[{"key":"A","text":"\"auto\""},{"key":"B","text":"\"required\""},{"key":"C","text":"\"response_format\""},{"key":"D","text":"\"tool_choice\""},{"key":"E","text":"\"tools\""},{"key":"F","text":"\"type\""}]}'::jsonb, ARRAY['key=D', 'value=B']::text[], 'Việc thêm "tool_choice": "bắt buộc" vào tải trọng chạy sẽ buộc Foundry Agent Service gọi một công cụ có sẵn trong mỗi lần chạy thay vì cho phép mô hình phản hồi trực tiếp mà không cần gọi, điều này giải quyết hành vi bỏ qua công cụ không liên tục của tác nhân phân loại vé; giá trị tự động mặc định cho phép mô hình bỏ qua các cuộc gọi công cụ, đây là điều kiện chính xác được báo cáo.

**Tài liệu tham khảo:**
[Tool best practices for Microsoft Foundry Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/tool-best-practice)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-41', 'ai-103', 41, 'You have a Microsoft Foundry project that contains a high-traffic agent. Following a recent update, operational costs rise significantly, even though monitoring confirms that the volume of user traffic to the agent has stayed the same.  
  
You suspect that changes to the request or response characteristics are behind the increase, and you need to determine whether the added cost comes from the model input size, the model output size, or expanded tool usage.  
  
Which observability capability should you use?', '[{"key":"A","text":"latency"},{"key":"B","text":"evaluation metrics"},{"key":"C","text":"run success rate"},{"key":"D","text":"token usage"}]'::jsonb, ARRAY['D']::text[], 'Phép đo từ xa việc sử dụng mã thông báo chia mức tiêu thụ thành mã thông báo nhắc (đầu vào), mã thông báo hoàn thành (đầu ra) và mã thông báo bổ sung được sử dụng bởi lệnh gọi công cụ hoặc chức năng trên mỗi lần chạy, do đó, nó có thể trực tiếp quy mức tăng chi phí cho bất kỳ thành phần nào trong số đó tăng lên — đầu vào lớn hơn, đầu ra dài hơn hoặc lệnh gọi công cụ nặng hơn — ngay cả khi số lượng yêu cầu không đổi. Độ trễ đo lường thời gian phản hồi, số liệu đánh giá đánh giá chất lượng phản hồi và tỷ lệ chạy thành công hay thất bại đo lường độ tin cậy; không có điều nào trong số này phân tách chi phí theo kích thước đầu vào, kích thước đầu ra hoặc mức sử dụng công cụ theo cách thực hiện phép đo từ xa việc sử dụng mã thông báo.

**Tài liệu tham khảo:**
[Observability in Generative AI - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/observability)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-42', 'ai-103', 42, 'You have a Microsoft Foundry project that contains an agent.  
  
The agent''s knowledge source is a set of scanned PDF troubleshooting guides stored in Azure Blob Storage. The guide pages use two-column layouts and contain tables. You use Azure Content Understanding in Foundry Tools to process the PDFs, and you plan to ingest the processed content into an index for Retrieval Augmented Generation (RAG) while storing the extracted fields for downstream automation.  
  
Stakeholders need to be able to verify where each extracted field value originated in the original PDF, and route low-reliability extractions for manual review.  
  
You need the Content Understanding document analyzer output to include a per-field confidence score and source grounding to locations within the source document.  
  
What should you do?', '[{"key":"A","text":"Set enableSegment to true."},{"key":"B","text":"Provide labeled samples."},{"key":"C","text":"Enable estimateFieldSourceAndConfidence."},{"key":"D","text":"Configure the analyzer to use generative extraction for all fields."}]'::jsonb, ARRAY['C']::text[], 'EstimateFieldSourceAndConfidence là thuộc tính tùy chọn tham gia của trình phân tích Tìm hiểu nội dung (có thể đặt ở cấp độ trình phân tích hoặc trên mỗi trường), đối với các trường trích xuất, sẽ thêm điểm tin cậy từ 0 đến 1 cộng với nguồn grounding — số trang và vùng giới hạn — cho mỗi giá trị trường được trích xuất. Đây chính xác là điều cho phép xác minh giá trị đến từ đâu trong tệp PDF nguồn và định tuyến các trích xuất có độ tin cậy thấp để con người đánh giá. EnableSegment kiểm soát phân đoạn tài liệu thay vì độ tin cậy/grounding, việc cung cấp các mẫu được gắn nhãn sẽ cải thiện độ chính xác của quá trình trích xuất theo thời gian nhưng bản thân nó không tạo ra đầu ra grounding có độ tin cậy và việc định cấu hình trích xuất tổng quát cho tất cả các trường sẽ thay đổi phương pháp trích xuất nhưng bản thân nó không cho phép độ tin cậy và nguồn grounding trên mỗi trường.

**Tài liệu tham khảo:**
[Document analysis with confidence, grounding, and labeled samples](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/document/analyzer-improvement)', 'Implement information extraction solutions', ARRAY['AI-103', 'Implement information extraction solutions']::text[], NULL, 'published'),
  ('ai103-43', 'ai-103', 43, 'You have a Microsoft Foundry project that contains three agents, as shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783676237999-9kfjzr06.png)  
  
You need to orchestrate these agents so that handling of customer requests meets the following requirements:  
  
- Support a deterministic, step-based process that uses conditional branching and shared state across the agents.  
- Optionally trigger a ticket action based on the triage result.  
- Minimize development effort.  
  
What should you include in the solution?', '[{"key":"A","text":"a workflow"},{"key":"B","text":"threads and runs without a workflow"},{"key":"C","text":"a multi-agent group chat session"},{"key":"D","text":"separate agent runs coordinated in the application code"}]'::jsonb, ARRAY['A']::text[], 'Quy trình công việc Foundry Agent Service của Microsoft cung cấp một cách dựa trên biểu đồ, mã ngắn để sắp xếp nhiều tác nhân thông qua quy trình xác định, dựa trên bước: người thực thi (tác nhân hoặc bước logic) được kết nối bằng các cạnh hỗ trợ phân nhánh có điều kiện (nếu/khác) và có thể chuyển trạng thái chia sẻ giữa các bước, bao gồm hành động xuôi dòng tùy chọn, chẳng hạn như gọi công cụ tạo yêu cầu dựa trên kết quả phân loại của tác nhân trước đó. Điều này đáp ứng yêu cầu phân nhánh xác định với trạng thái chia sẻ đồng thời giảm thiểu nỗ lực phát triển, vì logic phân nhánh và chuyển trạng thái không cần phải viết tay. Việc sử dụng các luồng và chạy trực tiếp hoặc phối hợp các lần chạy tác nhân riêng biệt trong mã ứng dụng, yêu cầu logic điều phối được viết tùy chỉnh và phiên trò chuyện nhóm nhiều tác nhân là một mẫu cộng tác hội thoại, không xác định chứ không phải là một quy trình phân nhánh xác định.

**Tài liệu tham khảo:**
- [Build a workflow in Microsoft Foundry (Preview)](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/workflow)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], 'https://cdn.examcademy.com/images/questions/1783676237999-9kfjzr06.png', 'published'),
  ('ai103-44', 'ai-103', 44, 'You have a Microsoft Foundry project that generates product marketing images from text prompts.  
  
After several images are published, your company''s legal team identifies a competitor''s logo on a sign in the background of one of the images.  
  
You need to remove only the logo while preserving the rest of the image.  
  
What should you do?', '[{"key":"A","text":"Apply a mask-based inpainting edit to the part of the image that contains the logo."},{"key":"B","text":"Increase the prompt guidance strength."},{"key":"C","text":"Modify the original prompt to exclude brand names."},{"key":"D","text":"Rerun the prompt by using a different random seed."}]'::jsonb, ARRAY['A']::text[], 'Inpainting dựa trên mặt nạ cho phép bạn hạn chế chỉnh sửa ở một vùng cụ thể bằng cách chỉ cung cấp mặt nạ trên biểu tượng, do đó, chỉ các pixel bên trong vùng đó được tạo lại trong khi phần còn lại của hình ảnh được giữ nguyên. Việc tăng cường độ hướng dẫn lời nhắc, chỉnh sửa lời nhắc hoặc thay đổi hạt giống ngẫu nhiên đều khiến mô hình tái tạo hình ảnh trên diện rộng (hoặc tạo ra một hình ảnh khác hoàn toàn), với no đảm bảo rằng chỉ logo bị ảnh hưởng và phần còn lại của bố cục được giữ nguyên.

**Tài liệu tham khảo:**
[How to use image generation models from OpenAI - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/dall-e)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-45', 'ai-103', 45, 'You have a Microsoft Foundry project that contains a model deployment, and an application calls that deployment by using the Azure OpenAI v1 API together with DefaultAzureCredential.  
  
Developers at your company receive HTTP 403 errors when they send inference requests, even after they run `az login`.  
  
You need to ensure that the developers can perform model inference, and the solution must follow the principle of least privilege.  
  
Which role-based access control (RBAC) role should you assign to the developers?', '[{"key":"A","text":"Cognitive Services User"},{"key":"B","text":"Cognitive Services OpenAI User"},{"key":"C","text":"Contributor"},{"key":"D","text":"Cognitive Services Data Reader"}]'::jsonb, ARRAY['B']::text[], 'Dịch vụ nhận thức Người dùng OpenAI là vai trò RBAC tích hợp sẵn, cấp quyền mặt phẳng dữ liệu cần thiết để thực hiện các cuộc gọi suy luận (chẳng hạn như hoàn thành trò chuyện) đối với việc triển khai mô hình Azure OpenAI/Foundry khi xác thực bằng Microsoft Entra ID, chẳng hạn như thông qua DefaultAzureCredential; nó cấp cho no quyền quản lý mặt phẳng điều khiển, đáp ứng đặc quyền tối thiểu. Người dùng Dịch vụ Nhận thức cấp quyền truy cập vào các hành động dữ liệu Dịch vụ Nhận thức khác chứ không phải suy luận Azure OpenAI, Contributor cấp các quyền quản lý tài nguyên rộng rãi vượt xa những gì cần thiết và Trình đọc dữ liệu Dịch vụ Nhận thức chỉ cho phép đọc siêu dữ liệu/cấu hình thay vì gọi suy luận — không cái nào trong ba điều này giải quyết được 403 với phép gán đặc quyền ít nhất trực tiếp như Người dùng OpenAI Dịch vụ Nhận thức.

**Tài liệu tham khảo:**
[Role-based access control for Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/role-based-access-control)', 'Plan and manage an Azure AI solution', ARRAY['AI-103', 'Plan and manage an Azure AI solution']::text[], NULL, 'published'),
  ('ai103-46', 'ai-103', 46, 'You have a Microsoft Foundry project that uses Azure AI Search to ground an agent in internal documentation.  
  
After a recent content update, users report that the agent''s answers have become less accurate.  
  
You need to determine whether the retrieved content is negatively affecting the model''s generated responses.  
  
Which observability signal should you review?', '[{"key":"A","text":"indexer status and failure history"},{"key":"B","text":"latency breakdown traces"},{"key":"C","text":"prediction drift metrics"},{"key":"D","text":"groundedness evaluation metrics"}]'::jsonb, ARRAY['D']::text[], 'Số liệu đánh giá độ tiếp đất trong khả năng quan sát của Microsoft Foundry đo lường xem phản hồi được tạo có thực sự được hỗ trợ bởi nội dung được truy xuất cho tác nhân hay không, do đó, việc giảm độ tiếp đất sau khi cập nhật nội dung sẽ chỉ thẳng vào nội dung được truy xuất là nguồn gốc của chất lượng câu trả lời bị suy giảm. Trạng thái của trình lập chỉ mục và lịch sử lỗi chỉ cho biết liệu quá trình nhập có thành công hay không, các dấu vết phân tích độ trễ hiển thị thời gian hiệu suất và các chỉ số sai lệch dự đoán theo dõi các thay đổi trong phân phối đầu ra của mô hình theo thời gian — không điều nào trong số này tiết lộ trực tiếp liệu nội dung được truy xuất có làm suy yếu độ chính xác của phản hồi hay không.

**Tài liệu tham khảo:**
[Observability in generative AI - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/observability) · [Generally Available: Evaluations, Monitoring, and Tracing in Microsoft Foundry](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/generally-available-evaluations-monitoring-and-tracing-in-microsoft-foundry/4502760)', 'Plan and manage an Azure AI solution', ARRAY['AI-103', 'Plan and manage an Azure AI solution']::text[], NULL, 'published'),
  ('ai103-47', 'ai-103', 47, 'You have a chat application in a Microsoft Foundry project and a vectorized index in Azure AI Search.  
  
You need to connect to the index so that the solution meets the following requirements:  
  
- Complex questions must retrieve information from multiple chunks.  
- Multi-turn conversations must influence retrieval planning.  
- Retrievals must run in parallel to reduce latency.  
  
Which retrieval approach should you use?', '[{"key":"A","text":"iterative retrieval"},{"key":"B","text":"agentic Retrieval Augmented Generation (RAG)"},{"key":"C","text":"chain of thought"},{"key":"D","text":"classic Retrieval Augmented Generation (RAG)"}]'::jsonb, ARRAY['B']::text[], 'Truy xuất tác nhân trong Azure AI Search sử dụng tác nhân tri thức được hỗ trợ bởi LLM để phân tách một câu hỏi phức tạp của người dùng thành nhiều truy vấn con tập trung, kết hợp lịch sử hội thoại vào lập kế hoạch truy vấn, thực thi các truy vấn phụ song song với (các) nguồn kiến ​​thức cơ bản, sau đó xếp hạng lại và hợp nhất các kết quả về mặt ngữ nghĩa — đáp ứng truy xuất nhiều đoạn, lập kế hoạch nhận biết hội thoại và giảm độ trễ cùng một lúc. RAG cổ điển đưa ra một lệnh gọi truy xuất mỗi lượt với sự phân tách hoặc song song no, truy xuất lặp lại thực hiện các vòng truy xuất tuần tự (không song song) và chuỗi suy nghĩ là một kỹ thuật nhắc nhở không liên quan đến kiến ​​trúc truy xuất.

**Tài liệu tham khảo:**
[Agentic retrieval overview - Azure AI Search](https://learn.microsoft.com/en-us/azure/search/agentic-retrieval-overview)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-48', 'ai-103', 48, 'You have a customer support agent that uses the Microsoft Foundry Agent Service.  
  
Customers sometimes return to a session days later to continue the same support case, and the agent must resume with the full historical context. The agent must provide:  
  
- Multi-turn continuity within the session.  
- Cross-session continuity for the same case.  
- Access to the full interaction history, including user messages, agent messages, tool calls, and tool outputs.  
  
You need to ensure that the agent automatically reloads the complete history on every new turn.  
  
What should you do?', '[{"key":"A","text":"Create and reuse a conversation by storing the conversation’s ID and supplying the ID on subsequent requests."},{"key":"B","text":"Persist only the final model response stored in the client application and prepend the response to future prompts."},{"key":"C","text":"Enable memory summarization on the agent definition to persist the context automatically."}]'::jsonb, ARRAY['A']::text[], 'Foundry Agent Service lưu giữ toàn bộ lịch sử tương tác — tin nhắn của người dùng, tin nhắn tổng đài viên, lệnh gọi công cụ và đầu ra của công cụ — phía máy chủ dưới một mã định danh cuộc hội thoại lâu dài. Việc lưu trữ ID cuộc trò chuyện đó và cung cấp ID đó cho mọi yêu cầu tiếp theo sẽ khiến dịch vụ tự động tải lại toàn bộ lịch sử cho trường hợp đó vào mỗi lượt mới, mang lại tính liên tục cho nhiều lượt trong một phiên và tính liên tục giữa các phiên khi khách hàng quay lại sau. Chỉ duy trì phản hồi mô hình cuối cùng sẽ loại bỏ tất cả chi tiết lệnh gọi công cụ và đầu ra công cụ, đồng thời cho phép tóm tắt bộ nhớ sẽ cô đọng lịch sử thành một bản tóm tắt thay vì tải lại toàn bộ.

**Tài liệu tham khảo:**
[Build with agents, conversations, and responses in Foundry Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/runtime-components)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-49', 'ai-103', 49, 'You have an application named App1 that uses a Microsoft Foundry multimodal model deployment.  
  
App1 performs optical character recognition (OCR) on uploaded images and appends the OCR results to the prompt as additional context. Some of the uploaded images contain embedded text.  
  
You need to prevent the model from processing potentially malicious instructions contained in that text.  
  
What should you use?', '[{"key":"A","text":"image moderation"},{"key":"B","text":"prompt shields for documents"},{"key":"C","text":"protected material text"},{"key":"D","text":"prompt shields for user prompts"}]'::jsonb, ARRAY['B']::text[], 'An toàn nội dung Azure AI Prompt Shields phân tích hai bề mặt tấn công riêng biệt: Lời nhắc của người dùng, dành cho các nỗ lực bẻ khóa trực tiếp do người dùng nhập và Tài liệu, dành cho các cuộc tấn công chèn lời nhắc gián tiếp (trên nhiều miền), trong đó các hướng dẫn độc hại được ẩn bên trong nội dung của bên thứ ba — chẳng hạn như tài liệu, email hoặc, như ở đây, văn bản OCR được trích xuất từ ​​một hình ảnh — được thêm vào lời nhắc dưới dạng ngữ cảnh bổ sung chứ không phải do người dùng tạo. Vì văn bản được nhúng xuất hiện dưới dạng nội dung bên ngoài được xếp vào dấu nhắc, Prompt Shields dành cho tài liệu là điều khiển được thiết kế để phát hiện và chặn các hướng dẫn ẩn trong đó. Màn hình kiểm duyệt hình ảnh dành cho các danh mục gây tổn hại về mặt thị giác, không phải hướng dẫn; phát hiện tài liệu được bảo vệ nhắm vào nội dung có bản quyền; và Prompt Shields dành cho lời nhắc của người dùng nhằm giải quyết các nỗ lực bẻ khóa trực tiếp do người dùng nhập chứ không phải nội dung của bên thứ ba.

**Tài liệu tham khảo:**
- [Prompt Shields in Azure AI Content Safety](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/jailbreak-detection)
- [Quickstart: Detect prompt attacks with Prompt Shields](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/quickstart-jailbreak)', 'Implement text analysis solutions', ARRAY['AI-103', 'Implement text analysis solutions']::text[], NULL, 'published'),
  ('ai103-50', 'ai-103', 50, 'You have a Microsoft Foundry project that contains an agent and an image-generation model deployment.  
  
The agent generates new images from user-supplied product photos.  
  
You need to ensure that the generated images retain the product''s identity and visual characteristics from the supplied photo.  
  
What should you do?', '[{"key":"A","text":"Set the input_fidelity parameter to high."},{"key":"B","text":"Apply a groundedness detection filter."},{"key":"C","text":"Include a prompt and input image in the request."},{"key":"D","text":"Decrease the value of the temperature parameter."}]'::jsonb, ARRAY['A']::text[], 'Tham số input_fift trên yêu cầu chỉnh sửa hình ảnh kiểm soát mức độ đầu ra được tạo bảo tồn các chi tiết hình ảnh, nhận dạng và đặc điểm của hình ảnh đầu vào; đặt nó ở mức cao nhằm mục đích chính xác cho các chỉnh sửa liên quan đến khuôn mặt, biểu tượng hoặc sản phẩm trong đó các chi tiết đó phải được duy trì ở đầu ra, với chi phí tiêu thụ nhiều mã thông báo đầu vào hình ảnh hơn mặc định. Việc bao gồm lời nhắc và hình ảnh đầu vào chỉ đơn giản là điều mà bất kỳ lệnh chỉnh sửa hình ảnh nào cũng yêu cầu và bản thân nó không kiểm soát việc bảo toàn danh tính, bộ lọc phát hiện căn cứ sẽ kiểm tra các xác nhận văn bản đối với nội dung nguồn (không liên quan đến độ trung thực của hình ảnh) và việc giảm nhiệt độ sẽ ảnh hưởng đến tính ngẫu nhiên của việc lấy mẫu thay vì độ trung thực của quá trình chỉnh sửa hình ảnh.

**Tài liệu tham khảo:**
[Generate images with high input fidelity](https://cookbook.openai.com/examples/generate_images_with_high_input_fidelity)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-51', 'ai-103', 51, 'You have a Microsoft Foundry project that contains an agent.  
  
The agent uses a knowledge source built from documents stored in Azure Blob Storage. The documents include digitally scanned PDFs containing tables that span multiple pages.  
  
Your current ingestion job extracts only plain text, which causes the loss of table structure, headings, and page-number metadata. Users frequently ask questions that require retrieving specific table rows across pages.  
  
You need to configure an ingestion job for a Retrieval Augmented Generation (RAG) pipeline that:  

- Performs optical character recognition (OCR) on the scanned PDFs  
- Preserves tables and headings as structure-aware chunks  
- Stores page-number metadata with each chunk  
  
How should you configure the ingestion job?', '[{"key":"A","text":"Use advanced data parsing to reingest the documents."},{"key":"B","text":"Use OCR and page-level chunking."},{"key":"C","text":"Use page-level OCR extraction and store each page as a single chunk."},{"key":"D","text":"Use basic parsing and fixed-size chunking."}]'::jsonb, ARRAY['A']::text[], 'Tính năng phân tích cú pháp dữ liệu nâng cao để nhập nguồn kiến ​​thức Foundry thực hiện OCR (bao gồm cả trên các tài liệu được quét), phát hiện và hợp nhất các bảng trải rộng trên nhiều trang trong khi khôi phục tiêu đề cột, giữ nguyên các tiêu đề và phân cấp tài liệu, đồng thời tạo ra các đoạn ngữ nghĩa, nhận biết cấu trúc mang siêu dữ liệu số trang và tiêu đề — chính xác là sự kết hợp giữa OCR cộng với việc phân chia theo trang, nhận biết cấu trúc mà kịch bản yêu cầu. Việc nhập lại bằng tính năng phân tích dữ liệu nâng cao sẽ thay thế tính năng trích xuất văn bản thuần túy hiện tại và trực tiếp giải quyết vấn đề được mô tả. OCR cơ bản với phân đoạn cấp trang hoặc lưu trữ toàn bộ từng trang dưới dạng một đoạn duy nhất, vẫn mất cấu trúc bảng cấp hàng vì toàn bộ trang (hoặc chạy OCR đơn giản) không được phân tách thành các đơn vị nhận biết cấu trúc và phân tích cú pháp cơ bản với phân nhóm kích thước cố định hoàn toàn bỏ qua cấu trúc tài liệu.

**Tài liệu tham khảo:**
[Data parsing for Agentic Retrieval in Foundry](https://learn.microsoft.com/en-us/azure/azure-arc/agents-tools-foundry-local/advanced-data-parsing)', 'Implement information extraction solutions', ARRAY['AI-103', 'Implement information extraction solutions']::text[], NULL, 'published'),
  ('ai103-52', 'ai-103', 52, 'Proposed solution: Configure a prompt shield for user prompts.  
  
Does this solution meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], 'Prompt Shields dành cho Lời nhắc của Người dùng được thiết kế để phát hiện các nỗ lực bẻ khóa trực tiếp mà người dùng nhập vào cuộc trò chuyện; nó không kiểm tra nội dung của bên thứ ba, chẳng hạn như văn bản được trích xuất từ ​​hình ảnh được tải lên, vì vậy nó không thể nắm bắt được các hướng dẫn ẩn bên trong hình ảnh. Nó cũng thực hiện kiểm duyệt nội dung hình ảnh no. Vì rủi ro đã nêu bao gồm cả nội dung hình ảnh không an toàn và prompt injection gián tiếp (kiểu tài liệu) được chứa bên trong văn bản hình ảnh, nên chỉ riêng tấm chắn nhắc nhở người dùng sẽ không giải quyết được cả hai vấn đề.

**Tài liệu tham khảo:**
[Prompt Shields in Azure AI Content Safety](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/jailbreak-detection)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-53', 'ai-103', 53, 'Proposed solution: Configure image moderation to block unsafe content before the images are processed.  
  
Does this solution meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], 'Kiểm duyệt hình ảnh An toàn nội dung Azure AI sẽ sàng lọc nội dung trực quan theo các danh mục gây hại như bạo lực, nội dung khiêu dâm, tự làm hại bản thân và thù hận, nhằm giải quyết một nửa rủi ro về hình ảnh không an toàn. Nó không phân tích bất kỳ văn bản nào được trích xuất từ ​​hình ảnh cho các hướng dẫn được nhúng, do đó, nội dung nhắc nhở ẩn được truyền qua OCR/trích xuất văn bản vẫn đến được mô hình mà không được giảm thiểu, khiến mục tiêu chỉ đạt được một phần.

**Tài liệu tham khảo:**
[Harm categories in Azure AI Content Safety](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/harm-categories) · [Quickstart: Analyze image content - Azure AI Content Safety](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/quickstart-image)', 'Implement computer vision solutions', ARRAY['AI-103', 'Implement computer vision solutions']::text[], NULL, 'published'),
  ('ai103-54', 'ai-103', 54, 'Proposed solution: Configure a prompt shield for documents.  
  
Does this solution meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], 'Prompt Shields dành cho Tài liệu kiểm tra nội dung mà mô hình không nhận được trực tiếp từ người dùng — chẳng hạn như văn bản được trích xuất từ ​​hình ảnh đã tải lên — đối với các hướng dẫn chèn lời nhắc gián tiếp, được nhúng, nhằm giải quyết một nửa rủi ro về hướng dẫn ẩn. Tuy nhiên, nó thực hiện kiểm duyệt nội dung hình ảnh no, do đó, nó không phát hiện hoặc chặn nội dung hình ảnh không an toàn (bạo lực, tục tĩu hoặc không phù hợp), khiến một nửa rủi ro đã nêu không được giải quyết.

**Tài liệu tham khảo:**
[Prompt Shields in Azure AI Content Safety](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/jailbreak-detection) · [Quickstart: Analyze image content - Azure AI Content Safety](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/quickstart-image)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-55', 'ai-103', 55, 'Proposed solution: Configure protected material detection.  
  
Does this solution meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], 'Tính năng phát hiện tài liệu được bảo vệ quét đầu ra do AI tạo để tìm nội dung đã biết có bản quyền hoặc được cấp phép của bên thứ ba, chẳng hạn như lời bài hát, bài viết hoặc mã nguồn công cộng, do đó, đầu ra không sao chép nguyên văn. Nó có vai trò no trong việc sàng lọc các hình ảnh được tải lên để tìm nội dung không an toàn và vai trò no trong việc phát hiện các hướng dẫn ẩn bên trong văn bản hình ảnh, do đó, nó không giải quyết được một phần rủi ro đã nêu.

**Tài liệu tham khảo:**
[Protected material detection in Azure AI Content Safety](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/protected-material)', 'Implement text analysis solutions', ARRAY['AI-103', 'Implement text analysis solutions']::text[], NULL, 'published'),
  ('ai103-56', 'ai-103', 56, 'You have a Microsoft Foundry project containing an agent named PaymentAgent. PaymentAgent has a function tool that issues customer refunds through an external API. You are authoring a workflow in YAML and need the workflow to pause for human approval, proceeding to the refund step only once approval has been granted.  
  
How should you complete the workflow definition?', '{"type":"matching_dropdown","statements":[{"id":"approval_type","text":"Option 1:","correctAnswer":"A","choiceKeys":["A","B","C"]},{"id":"condition","text":"Option 2:","correctAnswer":"D","choiceKeys":["D","E","F"]}],"choices":[{"key":"A","text":"ask_question"},{"key":"B","text":"basic_chat"},{"key":"C","text":"data_transformation"},{"key":"D","text":"approval == \"approved\""},{"key":"E","text":"propose_refund.output != null"},{"key":"F","text":"true"}]}'::jsonb, ARRAY['approval_type=A', 'condition=D']::text[], 'Mẫu quy trình làm việc con người trong vòng lặp của Microsoft Foundry sử dụng bước Đặt câu hỏi để tạm dừng thực thi và chờ phản hồi của một người trước khi tiếp tục, đây là cơ chế được sử dụng để hoàn lại tiền khi con người phê duyệt; bước trò chuyện cơ bản (gửi tin nhắn) không chờ đầu vào và bước chuyển đổi dữ liệu chỉ đặt hoặc phân tích một biến. Điều kiện của bước hoàn tiền tiếp theo phải kiểm tra giá trị mà bước phê duyệt nắm bắt, vì vậy điều kiện: phê duyệt == "được phê duyệt" chỉ tiếp tục khi con người chấp thuận yêu cầu một cách rõ ràng; việc kiểm tra đề xuất_refund.output!= null chỉ xác nhận kết quả đầu ra được tạo ra từ đề xuất ban đầu (không phải ai đã phê duyệt nó) và một sự thật đúng nghĩa sẽ thực hiện hoàn tiền vô điều kiện, đánh bại cổng phê duyệt.

**Tài liệu tham khảo:**
[Build a workflow in Microsoft Foundry (Preview)](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/workflow)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-57', 'ai-103', 57, 'You have a Microsoft Foundry project that contains an agent.  
  
The agent uses Azure AI Search as its retriever. You plan to ingest PDFs into an Azure AI Search index so the agent can ground its responses in text from both the documents and their embedded images. Users require citations that link back to the source files.  
  
You need to ensure that, during indexing, the images are extracted into a structure that the built-in optical character recognition (OCR) skill can use as input.  
  
Which indexing approach should you use?', '[{"key":"A","text":"an indexer to extract image data into a normalized_images collection"},{"key":"B","text":"a Shaper skill to restructure the OCR input"},{"key":"C","text":"a skillset to run the OCR skill directly against the content field of the index"},{"key":"D","text":"the outputFieldMappings parameter to write image data to a searchable field"}]'::jsonb, ARRAY['A']::text[], 'Trong Azure AI Search, việc đặt imageAction của người lập chỉ mục để tạo raNormalizedImages trong quá trình bẻ khóa tài liệu sẽ trích xuất các hình ảnh được nhúng từ các tệp nguồn (chẳng hạn như tệp PDF) vào trường/bộ sưu tập normalized_images. Các kỹ năng hoạt động trên hình ảnh, bao gồm cả kỹ năng OCR tích hợp, mong đợi bộ sưu tập normalized_images này làm bối cảnh đầu vào của chúng ("/document/normalized_images/*"); hình ảnh không thể được đưa vào OCR mà không được chuẩn hóa theo cách này trước tiên. Kỹ năng Shaper chỉ cơ cấu lại đầu ra nội dung phong phú hiện có, việc chạy OCR trực tiếp trên trường nội dung là không hợp lệ vì OCR yêu cầu nhập hình ảnh thay vì nội dung văn bản của tài liệu và outFieldMappings ánh xạ kết quả nội dung phong phú tới các trường chỉ mục có thể tìm kiếm nhưng không trích xuất hình ảnh ngay từ đầu.

**Tài liệu tham khảo:**
- [OCR skill - Azure AI Search](https://learn.microsoft.com/en-us/azure/search/cognitive-search-skill-ocr)
- [Extract text from images by using AI enrichment (image scenarios)](https://learn.microsoft.com/en-us/azure/search/cognitive-search-concept-image-scenarios)', 'Implement information extraction solutions', ARRAY['AI-103', 'Implement information extraction solutions']::text[], NULL, 'published'),
  ('ai103-58', 'ai-103', 58, 'You have a Microsoft Foundry project that contains a prompt agent used by a customer support web app.  
  
The agent is invoked from a Python service that does not run in the Foundry portal.  
  
You need to implement end-to-end tracing to capture latency breakdowns and exceptions across agent runs.  
  
Which two components can you use? Each correct answer presents a complete solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"a Log Analytics workspace"},{"key":"B","text":"Application Insights"},{"key":"C","text":"OpenTelemetry"},{"key":"D","text":"the Azure Monitor Agent"},{"key":"E","text":"Microsoft Sentinel"}]'::jsonb, ARRAY['B', 'C']::text[], 'OpenTelemetry cho phép bạn trang bị dịch vụ Python bên ngoài để phát ra các khoảng thời gian được tiêu chuẩn hóa bao gồm lệnh gọi LLM, lệnh gọi công cụ, độ trễ và ngoại lệ ngay cả khi nó chạy bên ngoài cổng Foundry và Application Insights (Azure Monitor) là phần phụ trợ mà Microsoft Foundry sử dụng để nhập, lưu trữ và trực quan hóa các dấu vết OpenTelemetry đó kết thúc. Chúng cùng nhau tạo thành một giải pháp theo dõi cấp mã hoàn chỉnh cho một tác nhân được gọi từ mã bên ngoài. Không gian làm việc Log Analytics chỉ là kho lưu trữ dữ liệu cơ bản đằng sau Application Insights chứ không phải là khả năng theo dõi theo đúng nghĩa của nó và Azure Monitor Agent và Microsoft Sentinel là các công cụ SIEM và giám sát cơ sở hạ tầng, không phải là cơ chế theo dõi tác nhân mỗi lần chạy.

**Tài liệu tham khảo:**
- [Configure tracing for AI agent frameworks - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/observability/how-to/trace-agent-framework)
- [Add client-side tracing to Foundry agents - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/observability/how-to/trace-agent-client-side)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-59', 'ai-103', 59, 'You have a Microsoft Foundry project that contains an agent.  
  
You need to process mixed-format documents containing scanned text, tables, and multicolumn layouts. The extracted content must preserve the document''s structure and be converted to Markdown format for downstream reasoning.  
  
What should you configure first?', '[{"key":"A","text":"an Azure Language in Foundry Tools text analysis model deployment"},{"key":"B","text":"a generative chat completion request"},{"key":"C","text":"an Azure OpenAI Responses API call that uses a multimodal model"},{"key":"D","text":"an Azure Content Understanding in Foundry Tools analyzer"}]'::jsonb, ARRAY['D']::text[], 'Hiểu nội dung Azure trong Công cụ đúc được thiết kế có mục đích để chuyển đổi các tài liệu có định dạng hỗn hợp — bao gồm văn bản được quét, bảng và bố cục nhiều cột — thành đầu ra Markdown có cấu trúc, bảo toàn bố cục mà các tác nhân và mô hình lý luận phía dưới có thể sử dụng. Đây là bước đầu tiên được đề xuất trong quy trình xử lý tài liệu vì nó tạo ra đầu ra nhận biết cấu trúc trước khi bất kỳ lý luận tổng quát nào xảy ra. Quá trình triển khai phân tích văn bản Ngôn ngữ Azure thực hiện phân tích văn bản (không phải trích xuất cấu trúc), yêu cầu hoàn thành trò chuyện chung có khả năng phân tích cú pháp tài liệu no của riêng nó và gọi API phản hồi bằng mô hình đa phương thức lý giải về nội dung nhưng bản thân nó không thực hiện chuyển đổi OCR và Markdown bảo toàn cấu trúc.

**Tài liệu tham khảo:**
[Azure Content Understanding document overview](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/document/overview)', 'Implement information extraction solutions', ARRAY['AI-103', 'Implement information extraction solutions']::text[], NULL, 'published'),
  ('ai103-60', 'ai-103', 60, 'You have a Microsoft Foundry project containing a deployed chat model.  
  
A Python service sends API requests to the model. The service is integrated with an automated validation system that compares the generated output against approved response patterns.  
  
Stakeholders report that minor wording differences are causing validation mismatches.  
  
You need to update the request parameters to improve output stability while maximizing reasoning quality. How should you complete the Python code?', '{"type":"matching_dropdown","statements":[{"id":"temperature","text":"Option 1:","correctAnswer":"A","choiceKeys":["A","B","C"]},{"id":"effort","text":"Option 2:","correctAnswer":"D","choiceKeys":["D","E","F"]}],"choices":[{"key":"A","text":"0"},{"key":"B","text":"1"},{"key":"C","text":"2"},{"key":"D","text":"\"high\""},{"key":"E","text":"\"low\""},{"key":"F","text":"\"medium\""}]}'::jsonb, ARRAY['temperature=A', 'effort=D']::text[], 'Việc đặt nhiệt độ thành 0 sẽ loại bỏ tính ngẫu nhiên của việc lấy mẫu để đầu ra của mô hình trở nên xác định nhất có thể đối với cùng một đầu vào, giúp loại bỏ các biến thể từ ngữ nhỏ đang phá vỡ quá trình xác thực đầu ra dựa trên mẫu. Việc đặt nỗ lực lý luận ở mức "cao" sẽ phân bổ cho mô hình số lượng tính toán lý luận lớn nhất trước khi nó tạo ra phản hồi, đáp ứng yêu cầu tối đa hóa chất lượng lý luận; độ sâu lý luận thương mại "thấp" và "trung bình" cho tốc độ và sẽ không tối đa hóa chất lượng, đồng thời các giá trị nhiệt độ trên 0 làm tăng độ biến thiên đầu ra hơn là độ ổn định.

**Tài liệu tham khảo:**
[Azure OpenAI reasoning models - GPT-5 series, o3-mini, o1, o1-mini](https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/reasoning)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-61', 'ai-103', 61, 'You are building an image-editing workflow in a Microsoft Foundry project.  
  
The workflow must meet the following requirements:  
  
- Background objects can be removed by applying a mask-based inpainting edit.  
- The original lighting and style of the edited images are preserved.  
- The built-in image editing controls are used, NOT a custom model.  
  
You need to ensure that image edits are applied exclusively inside the masked area.  
  
How should you configure the workflow?', '[{"key":"A","text":"Set generation mode to image_variation and provide the original image as a reference."},{"key":"B","text":"Enable text_to_image mode and a prompt describing the desired background removal."},{"key":"C","text":"Enable image_to_image mode and a high-strength value to regenerate the full image based on the prompt."},{"key":"D","text":"Enable mask_inpainting and supply both the input image and a mask indicating which part of the image to modify."}]'::jsonb, ARRAY['D']::text[], 'Inpainting dựa trên mặt nạ là chế độ chỉnh sửa hình ảnh tích hợp được thiết kế để hạn chế chỉnh sửa ở một vùng cụ thể: bạn cung cấp hình ảnh gốc cùng với mặt nạ đánh dấu chính xác những pixel nào có thể thay đổi và mô hình chỉ tạo lại nội dung bên trong vùng được che trong khi để mọi thứ bên ngoài nó — bao gồm cả ánh sáng và phong cách xung quanh — không bị ảnh hưởng. image_variation và text_to_image tái tạo rộng rãi mà không có bất kỳ ràng buộc mặt nạ nào và image_to_image ở cường độ cao sẽ tái tạo toàn bộ hình ảnh thay vì một vùng giới hạn.

**Tài liệu tham khảo:**
[How to use image generation models from OpenAI - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/dall-e)', 'Implement computer vision solutions', ARRAY['AI-103', 'Implement computer vision solutions']::text[], NULL, 'published'),
  ('ai103-62', 'ai-103', 62, 'You have a Microsoft Foundry project that serves a high-volume chat application. Most of the requests are simple FAQs, but some require advanced reasoning.  
  
You need to reduce cost and latency for the common queries without degrading the quality of responses to the complex questions.  
  
What should you do?', '[{"key":"A","text":"Route all the requests to a smaller model."},{"key":"B","text":"Use a model cascade that routes the requests to different models."},{"key":"C","text":"Increase the value of the max_tokens parameter for all the requests."},{"key":"D","text":"Route all the requests to the most capable model."}]'::jsonb, ARRAY['B']::text[], 'Một tầng mô hình (định tuyến mô hình) đánh giá từng yêu cầu và chuyển tiếp các truy vấn đơn giản đến một mô hình nhỏ, nhanh, không tốn kém trong khi chuyển các yêu cầu cần suy luận nâng cao sang một mô hình lớn hơn, có khả năng hơn, để lưu lượng truy cập Câu hỏi thường gặp phổ biến được cung cấp với chi phí thấp và nhanh chóng trong khi các câu hỏi phức tạp vẫn tiếp cận được một mô hình có khả năng, duy trì chất lượng câu trả lời của chúng. Việc định tuyến mọi yêu cầu đến một mô hình nhỏ hơn sẽ làm suy giảm các câu trả lời phức tạp, định tuyến mọi thứ đến mô hình có khả năng nhất giúp duy trì chi phí và độ trễ ở mức cao ngay cả đối với các truy vấn đơn giản và việc tăng max_tokens sẽ thay đổi lượng đầu ra mà một phản hồi có thể chứa, chứ không phải mô hình nào xử lý yêu cầu hoặc hồ sơ chi phí và độ trễ của nó.

**Tài liệu tham khảo:**
[Model router for Microsoft Foundry concepts](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-router)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-63', 'ai-103', 63, 'You are creating an agent workflow in a Microsoft Foundry project to support natural voice interactions.  
  
The agent must receive continuous audio input, convert that input into text for reasoning, and return spoken responses to the user. The workflow must meet the following requirements:  

- Support turn-taking dynamics, where the agent can begin generating speech output before the user finishes speaking  
- Operate with low latency to maintain a conversational experience  
  
You need to enable both speech-to-text and text-to-speech in a real-time agent interaction.  
  
What should you do?', '[{"key":"A","text":"Use batch transcription to convert the audio input and return text responses from the agent."},{"key":"B","text":"Use real-time speech to text for incoming audio and text to speech for agent responses."},{"key":"C","text":"Use an embeddings model to encode the audio, and then decode the audio into text and speech."},{"key":"D","text":"Use speech translation to convert the audio into another language and return the translated text."}]'::jsonb, ARRAY['B']::text[], 'Lời nói trong thời gian thực thành văn bản liên tục chuyển đổi âm thanh trực tuyến thành văn bản với độ trễ thấp khi người dùng nói, trong khi văn bản thành giọng nói tổng hợp phản hồi văn bản của tác nhân thành âm thanh; được sử dụng cùng nhau, việc ghép nối này hỗ trợ động lực đàm thoại luân phiên, có độ trễ thấp mà kịch bản yêu cầu, bao gồm cả việc tổng đài viên bắt đầu phản hồi trước khi người dùng nói xong. Quá trình sao chép hàng loạt các tệp được ghi không đồng bộ và không thể hỗ trợ chuyển lượt trực tiếp, mô hình nhúng mã hóa dữ liệu để tương tự/truy xuất thay vì thực hiện sao chép hoặc tổng hợp và bản dịch giọng nói sẽ thay đổi ngôn ngữ nói thay vì cho phép tạo phản hồi bằng giọng nói.

**Tài liệu tham khảo:**
[What is real-time speech to text?](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speech-to-text) · [What is text to speech?](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/text-to-speech)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-64', 'ai-103', 64, 'You have a Microsoft Foundry project containing an agent.  
  
The agent uses tools to retrieve internal content and call external APIs, and it is currently configured to let the model decide when to invoke those tools.  
  
You need to publish the agent for a compliance workflow that meets these requirements:  
  
- Every workflow run must perform a retrieval step before a response is generated.  
- Tool calls must authenticate using the published agent''s own identity.  
- Tool access must use an identity that is isolated from other project resources.  
- Tool access must support audit tracing.  
  
What should you configure?', '{"type":"matching_dropdown","statements":[{"id":"1","text":"Set tool_choice to:","correctAnswer":"C","choiceKeys":["A","B","C"]},{"id":"2","text":"Configure the tool to authenticate by:","correctAnswer":"F","choiceKeys":["D","E","F"]}],"choices":[{"key":"A","text":"auto"},{"key":"B","text":"none"},{"key":"C","text":"required"},{"key":"D","text":"Storing API keys in prompts"},{"key":"E","text":"Using the shared project agent identity"},{"key":"F","text":"Using a distinct agent identity bound to the client application"}]}'::jsonb, ARRAY['1=C', '2=F']::text[], 'Việc đặt tool_choice thành bắt buộc sẽ buộc mô hình gọi một công cụ trong mỗi lần chạy thay vì để mô hình đó quyết định, đảm bảo bước truy xuất xảy ra trước khi tạo phản hồi; tự động cho phép mô hình bỏ qua hoàn toàn các lệnh gọi công cụ và không có lệnh nào vô hiệu hóa việc sử dụng công cụ. Việc định cấu hình công cụ để xác thực bằng cách sử dụng danh tính tác nhân riêng biệt được liên kết với ứng dụng khách sẽ cung cấp cho tác nhân được xuất bản danh tính Microsoft Entra ID chuyên dụng của riêng nó, danh tính này được tách biệt khỏi các tài nguyên khác trong dự án và các lệnh gọi của tác nhân đó có thể được theo dõi kiểm tra riêng lẻ; việc lưu trữ khóa API trong lời nhắc là một kiểu chống mẫu không an toàn và danh tính tác nhân dự án dùng chung không bị cô lập với tác nhân đã xuất bản.

**Tài liệu tham khảo:**
[Tool best practices for Microsoft Foundry Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/tool-best-practice) · [What is Microsoft Foundry Agent Service?](https://learn.microsoft.com/en-us/azure/foundry/agents/overview)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-65', 'ai-103', 65, 'You are planning a Microsoft Foundry project named Project1 that will host multiple agents, and every agent will need to access the same Azure AI Search resource.  
  
You need to recommend a solution that centrally manages the Azure AI Search credentials within Project1, and the solution must be applied across all the agents.  
  
What should you recommend?', '[{"key":"A","text":"Enable role-based access control (RBAC) for the Azure AI Search resource."},{"key":"B","text":"Disable key-based access control on the Azure AI Search resource."},{"key":"C","text":"Add a connection to the Azure AI Search resource."},{"key":"D","text":"Create a managed private endpoint that connects to the Azure AI Search resource."}]'::jsonb, ARRAY['C']::text[], 'Kết nối dự án Microsoft Foundry lưu trữ chi tiết xác thực như khóa API hoặc điểm cuối một lần ở cấp dự án và bất kỳ tác nhân hoặc công cụ nào trong dự án đó đều có thể tham chiếu cùng một kết nối thay vì mỗi tác nhân giữ một bản sao riêng biệt của thông tin xác thực Azure AI Search. Do đó, việc thêm kết nối vào tài nguyên Azure AI Search là cơ chế tập trung việc lưu trữ và quản lý thông tin xác thực, đồng thời giúp kết nối này có thể tái sử dụng được trên mọi tác nhân trong Project1. Kích hoạt RBAC và vô hiệu hóa quyền truy cập dựa trên khóa là các bước tăng cường bổ sung tốt nhưng bản thân chúng không tập trung vào việc quản lý thông tin xác thực và private endpoint được quản lý giải quyết kết nối cấp mạng với tài nguyên chứ không phải cách các tác nhân lấy hoặc chia sẻ thông tin xác thực.

**Tài liệu tham khảo:**
[Add a new connection to your project - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/how-to/connections-add)', 'Plan and manage an Azure AI solution', ARRAY['AI-103', 'Plan and manage an Azure AI solution']::text[], NULL, 'published'),
  ('ai103-66', 'ai-103', 66, 'Contoso needs the marketing department to be able to generate videos using the model deployed to Project2. Complete the Python code shown by selecting the correct method for each dropdown.', '{"type":"matching_dropdown","statements":[{"id":"b1","text":"Option 1:","correctAnswer":"A","choiceKeys":["A","B","C","D"]},{"id":"b2","text":"Option 2:","correctAnswer":"D","choiceKeys":["A","B","C","D"]}],"choices":[{"key":"A","text":"create"},{"key":"B","text":"download_content"},{"key":"C","text":"list"},{"key":"D","text":"retrieve"}]}'::jsonb, ARRAY['b1=A', 'b2=D']::text[], 'Tài nguyên video của OpenAI/Azure OpenAI Python SDK hỗ trợ các hoạt động tạo, truy xuất, liệt kê và download_content. client.videos.create(model=., nhắc=.) gửi một công việc tạo video không đồng bộ mới và trả về một đối tượng video có id và trạng thái. Vì quá trình tạo video không đồng bộ nên trạng thái phải được thăm dò cho đến khi đạt đến trạng thái cuối (hoàn thành, không thành công hoặc bị hủy). Điều này được thực hiện bằng cách gọi client.videos.retrieve(video.id), tìm nạp trạng thái hiện tại của công việc tạo video cụ thể theo id của nó, cho phép vòng lặp kiểm tra lại video.status. list sẽ liệt kê nhiều công việc video thay vì kiểm tra một công việc cụ thể và download_content chỉ được sử dụng sau khi công việc hoàn thành để tìm nạp byte video kết quả, do đó không phù hợp với vòng lặp bỏ phiếu.

**Tài liệu tham khảo:**
- [Quickstart: Generate video with Sora - Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-services/openai/video-generation-quickstart)
- [Sora 2 video generation overview (preview) - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/video-generation-quickstart)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-67', 'ai-103', 67, 'You need to configure personalized interactions for Agent1 so that the solution satisfies the business requirements.  
  
What should you include in the solution?', '[{"key":"A","text":"knowledge"},{"key":"B","text":"memory"},{"key":"C","text":"guardrails"},{"key":"D","text":"tools"}]'::jsonb, ARRAY['B']::text[], 'Yêu cầu kinh doanh nêu rõ rằng Tác nhân1 phải giữ lại bối cảnh cuộc trò chuyện và gợi lại thông tin liên quan từ các lần tương tác trước đó để mang lại trải nghiệm được cá nhân hóa trong các cuộc trò chuyện trong tương lai. Khả năng này được cung cấp bởi tính năng bộ nhớ của tổng đài viên trong Microsoft Foundry Agent Service, cho phép tổng đài viên duy trì trạng thái và thu hồi thông tin chi tiết từ các phiên trước đó với người dùng, cho phép tính liên tục và cá nhân hóa trong các tương tác. Các nguồn kiến ​​thức (chẳng hạn như bảng sản phẩm được lập chỉ mục) cung cấp dữ liệu grounding để trả lời các câu hỏi về miền, các biện pháp bảo vệ thực thi các chính sách nội dung và an toàn cũng như các công cụ cho phép tác nhân gọi các chức năng hoặc dịch vụ bên ngoài — không có công cụ nào trong số này trực tiếp giải quyết việc lưu giữ và thu hồi lịch sử hội thoại để cá nhân hóa.

**Tài liệu tham khảo:**
[Agent memory - Azure AI Foundry Agent Service](https://learn.microsoft.com/en-us/azure/ai-services/agents/concepts/memory)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-68', 'ai-103', 68, 'You need to ensure that Agent1Dev Team can access Agent1. The solution must meet the security and compliance requirements.  
  
How should you complete the Python code?', '{"type":"matching_dropdown","statements":[{"id":"cred","text":"Option 1:","correctAnswer":"B","choiceKeys":["A","B","C"]},{"id":"method","text":"Option 2:","correctAnswer":"E","choiceKeys":["D","E","F"]}],"choices":[{"key":"A","text":"AzureKeyCredential()"},{"key":"B","text":"DefaultAzureCredential()"},{"key":"C","text":"None"},{"key":"D","text":"create_version"},{"key":"E","text":"get"},{"key":"F","text":"get_version"}]}'::jsonb, ARRAY['cred=B', 'method=E']::text[], 'Các yêu cầu về tuân thủ và bảo mật của Contoso yêu cầu không được sử dụng khóa API để truy cập vào tài nguyên do Foundry triển khai và các nhà phát triển phải xác thực thông qua Microsoft Entra ID. DefaultAzureCredential triển khai xác thực dựa trên Entra ID (Azure AD) (sử dụng danh tính đã đăng nhập của nhà phát triển, managed identity hoặc các nguồn thông tin xác thực tích hợp Entra khác) và chứa khóa nhúng no, đáp ứng cả hai ràng buộc; AzureKeyCredential dựa trên khóa API tĩnh, rõ ràng là không được phép và Không có thông tin xác thực hợp lệ nào cho AIProjectClient. Để truy xuất tác nhân hiện có có tên ''Agent1'' để có thể in tên của nó, phương thức AgentsOperations.get(agent_name) là lệnh gọi chính xác — nó truy xuất định nghĩa của tác nhân (AgentDetails) bằng tên duy nhất của nó chỉ bằng cách sử dụng đối số Agent_name, khớp với lệnh gọi một đối số trong mã. create_version() tạo một phiên bản mới thay vì truy xuất một phiên bản và get_version() yêu cầu tham số Agent_version bổ sung, vì vậy cả hai đều không tương thích với mã như đã viết.

**Tài liệu tham khảo:**
- [AgentsOperations class - Azure AI Projects Python SDK](https://learn.microsoft.com/en-us/python/api/azure-ai-projects/azure.ai.projects.operations.agentsoperations?view=azure-python)
- [Authenticate to Azure AI Foundry using Microsoft Entra ID](https://learn.microsoft.com/en-us/azure/ai-foundry/concepts/rbac-azure-ai-foundry)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-69', 'ai-103', 69, 'You have a Microsoft Foundry project containing a Retrieval Augmented Generation (RAG) chat solution used by customer support agents.  
  
You are adding an automated pre-production evaluation step to a CI/CD pipeline named Pipeline1. The evaluation will run against a labeled test dataset containing support questions along with the expected grounding context.  
  
You need to ensure that Pipeline1 fails if unsupported content or a retrieval mismatch exceeds a defined threshold, where:  
  
- Responses include claims that are not supported by the retrieved source content.  
- The retrieved source content does not align with the labeled expected context.  
  
Which two built-in evaluators should you use in Pipeline1? (Each correct answer presents part of the solution.)  
  
Note: Each correct selection is worth one point.', '[{"key":"A","text":"Retrieval"},{"key":"B","text":"Fluency"},{"key":"C","text":"Coherence"},{"key":"D","text":"Groundedness"},{"key":"E","text":"Response Completeness"}]'::jsonb, ARRAY['A', 'D']::text[], 'Các bộ đánh giá RAG tích hợp của Azure AI Foundry bao gồm Groundedness và Retrieval. Trình đánh giá Groundedness đo lường xem các tuyên bố của phản hồi được tạo có được hỗ trợ đầy đủ bởi nội dung nguồn được truy xuất hay không, phát hiện các tuyên bố ảo giác hoặc không được hỗ trợ. Người đánh giá Truy xuất đánh giá chất lượng và mức độ liên quan của các đoạn được truy xuất liên quan đến truy vấn, cho phép phát hiện các trường hợp trong đó nội dung được truy xuất không phù hợp với ngữ cảnh được gắn nhãn dự kiến. Độ trôi chảy và mạch lạc đo lường chất lượng ngôn ngữ của văn bản phản hồi thay vì grounding thực tế hoặc độ chính xác khi truy xuất, còn Độ đầy đủ của phản hồi đo lường mức độ bao phủ liên quan đến câu trả lời dựa trên cơ sở thay vì căn chỉnh truy xuất, do đó những điều này không đáp ứng các yêu cầu đã nêu.

**Tài liệu tham khảo:**
- [Evaluation and monitoring metrics for generative AI - Azure AI Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/concepts/evaluation-metrics-built-in)
- [Groundedness evaluator - Azure AI Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/how-to/develop/evaluate-sdk)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-70', 'ai-103', 70, 'You have a Microsoft Foundry project containing a support-ticket triage agent built with Foundry Agent Service.  
  
The agent uses a tool to classify the ticket type and set the ticket priority.  
  
Sometimes the same support case spans multiple sessions over several days.  
  
You need to persist state using a durable ID so that the agent automatically reuses the complete interaction history. The solution must retain previous user messages, tool calls, and tool outputs across turns and across sessions.  
  
Which runtime component should you use?', '[{"key":"A","text":"output item"},{"key":"B","text":"agent"},{"key":"C","text":"conversation"},{"key":"D","text":"response"}]'::jsonb, ARRAY['C']::text[], 'Đối tượng hội thoại trong Foundry Agent Service là bản ghi phía máy chủ lâu bền—được xác định bằng ID hội thoại—lưu trữ toàn bộ lịch sử tương tác, bao gồm tin nhắn của người dùng, lệnh gọi công cụ và đầu ra của công cụ. Vì nó được tồn tại độc lập với bất kỳ phiên đơn lẻ nào (được lưu trữ lâu dài, ví dụ: trong Cosmos DB), việc tham chiếu cùng một ID cuộc trò chuyện trong các yêu cầu sau này, thậm chí vài ngày sau, cho phép tổng đài viên tự động truy cập và tiếp tục từ toàn bộ lịch sử trước đó mà không cần người gọi gửi lại. Điều này đáp ứng yêu cầu về một ID bền bỉ giúp duy trì toàn bộ bối cảnh qua các lượt và phiên, phân biệt nó với một tác nhân (định nghĩa có thể sử dụng lại về hướng dẫn/công cụ/mô hình), một phản hồi (đầu ra của một lượt thế hệ) hoặc một mục đầu ra (một thông báo riêng lẻ hoặc mục nhập lệnh gọi công cụ trong một phản hồi).

**Tài liệu tham khảo:**
- [Build with agents, conversations, and responses in Foundry Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/runtime-components)
- [Manage hosted agent sessions - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/manage-hosted-sessions)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-71', 'ai-103', 71, 'You have a Microsoft Foundry project containing a Retrieval Augmented Generation (RAG) solution. You need to run a pre-production evaluation using a labeled CSV dataset containing the query, context, response, and ground truth. The evaluation must measure:  
  
- Whether responses address the user query  
- Whether responses are supported by the provided context  
- Whether responses contain sensitive or proprietary information  
  
Which AI quality evaluation metrics should you use?', '{"type":"matching_dropdown","statements":[{"id":"b1","text":"To measure whether the responses are supported by the provided context and address the user query:","correctAnswer":"C","choiceKeys":["A","B","C","D"]},{"id":"b2","text":"To measure whether responses contain sensitive or proprietary information:","correctAnswer":"G","choiceKeys":["E","F","G","H"]}],"choices":[{"key":"A","text":"Coherence and Fluency"},{"key":"B","text":"GPT similarity and F1 score"},{"key":"C","text":"Groundedness and Relevance"},{"key":"D","text":"Groundedness and ROUGE score"},{"key":"E","text":"Hateful and unfair content"},{"key":"F","text":"Indirect attack"},{"key":"G","text":"Protected material"},{"key":"H","text":"Violent content"}]}'::jsonb, ARRAY['b1=C', 'b2=G']::text[], 'Trong SDK đánh giá Azure AI Foundry (trước đây là Azure AI Studio), chỉ số Groundedness đo lường xem phản hồi có nhất quán về mặt thực tế và được hỗ trợ bởi bối cảnh được cung cấp hay không, trong khi chỉ số Mức độ liên quan đo lường mức độ phản hồi giải quyết truy vấn của người dùng. Những điều này cùng nhau đáp ứng trực tiếp yêu cầu kiểm tra cả hỗ trợ ngữ cảnh và mức độ liên quan của truy vấn. Để phát hiện nội dung nhạy cảm hoặc độc quyền, người đánh giá/kiểm tra số liệu Tài liệu được bảo vệ đã tạo nội dung dựa trên văn bản, bài hát có bản quyền hoặc độc quyền đã biết hoặc tài liệu được bảo vệ khác. Các tùy chọn khác (Nội dung thù địch và không công bằng, Tấn công gián tiếp, Nội dung bạo lực) là các công cụ đánh giá rủi ro về an toàn nội dung không liên quan đến việc phát hiện tài liệu độc quyền/có bản quyền và Tính mạch lạc/Linh hoạt, độ tương tự GPT/điểm F1 và điểm ROUGE đo lường chất lượng ngôn ngữ hoặc độ tương tự với sự thật cơ bản chứ không phải là ngữ cảnh grounding hoặc mức độ liên quan của truy vấn.

**Tài liệu tham khảo:**
- [Evaluation and monitoring metrics for generative AI - Azure AI Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/concepts/evaluation-metrics-built-in)
- [Groundedness and Relevance evaluators - Azure AI Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/how-to/develop/evaluate-sdk)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-72', 'ai-103', 72, 'You are configuring an evaluation in Microsoft Foundry for a Retrieval Augmented Generation (RAG) chat application.  
  
You need to obtain scores for the following:  
  
- Groundedness  
- Relevance  
- Harmful content categories  
  
Which two evaluation categories should you use, where each correct answer represents a complete solution? (Choose two.)', '[{"key":"A","text":"risk and safety metrics"},{"key":"B","text":"fluency evaluator"},{"key":"C","text":"similarity evaluators"},{"key":"D","text":"AI quality (NLP) metrics"},{"key":"E","text":"AI quality (AI assisted) metrics"}]'::jsonb, ARRAY['A', 'E']::text[], 'Tính căn cứ và mức độ liên quan là các chỉ số chất lượng được AI hỗ trợ trong Microsoft Foundry — chúng yêu cầu một mô hình để đánh giá kết quả đầu ra dựa trên bối cảnh được truy xuất và truy vấn của người dùng, vì vậy chúng thuộc danh mục ''chỉ số chất lượng AI (được AI hỗ trợ)'' (không giống như ''chỉ số chất lượng AI (NLP)'', bao gồm các chỉ số NLP thống kê truyền thống không bao gồm tính căn cứ hoặc mức độ liên quan). Các danh mục nội dung có hại, chẳng hạn như nội dung thù hận và không công bằng, nội dung khiêu dâm, nội dung bạo lực và nội dung liên quan đến hành vi tự làm hại bản thân, được đánh giá thông qua danh mục ''chỉ số rủi ro và an toàn''. Cùng với nhau, hai danh mục này cung cấp điểm số có căn cứ, mức độ liên quan và nội dung có hại cần thiết để đánh giá ứng dụng trò chuyện RAG.

**Tài liệu tham khảo:**
- [Observability in Generative AI - Microsoft Foundry | Microsoft Learn](https://learn.microsoft.com/en-us/azure/foundry/concepts/observability)
- [Microsoft Foundry risk and safety evaluations Transparency Note - Microsoft Foundry | Microsoft Learn](https://learn.microsoft.com/en-us/azure/foundry/concepts/safety-evaluations-transparency-note)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-73', 'ai-103', 73, 'You have a Microsoft Foundry project containing an agent. The agent uses two tools:  
  
- Azure AI Search, to retrieve answers from a private product documentation index.  
- The web search tool, to retrieve public information from the internet.  
  
For a specific run, you need the agent to deterministically retrieve information only from the internet.  
  
What should you set `tool_choice` to?', '[{"key":"A","text":"{“type”: “bing_grouding”}"},{"key":"B","text":"{“type”: “azure_ai-search”}"},{"key":"C","text":"“auto”"},{"key":"D","text":"“required”"}]'::jsonb, ARRAY['A']::text[], 'Trong Foundry Agent Service, tool_choice là cơ chế kiểm soát một cách xác định công cụ nào mà tác nhân gọi trong một lần chạy nhất định. Bạn có thể đặt thành "tự động" (mô hình quyết định), "bắt buộc" (mô hình phải gọi một số công cụ, nhưng không nhất thiết phải là một công cụ cụ thể), "none" (các công cụ no được gọi) hoặc cho một đối tượng loại công cụ cụ thể, chẳng hạn như {"type": "bing_grounding"} hoặc {"type": "azure_ai_search"} để buộc sử dụng công cụ chính xác đó. Để đảm bảo rằng một lần chạy chỉ truy xuất thông tin từ internet (chứ không phải từ chỉ mục Azure AI Search riêng tư), bạn phải buộc công cụ grounding tìm kiếm trên Bing/web một cách rõ ràng bằng cách đặt tool_choice thành đối tượng loại công cụ tham chiếu đến công cụ tìm kiếm trên web, thay vì để lại quyết định cho mô hình ("tự động") hoặc chỉ yêu cầu một số lệnh gọi công cụ không xác định ("bắt buộc"). Thay vào đó, việc buộc {"type": "azure_ai_search"} sẽ đảm bảo việc sử dụng chỉ mục tài liệu riêng tư, đây không phải là mục tiêu ở đây.

**Tài liệu tham khảo:**
- [Tool best practices for Microsoft Foundry Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/tool-best-practice)
- [Use Grounding with Bing Search tools with the agents API - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/tools/bing-tools)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-74', 'ai-103', 74, 'You have a Microsoft Foundry project containing a customer support agent that is built on a deployed chat model.  
  
The agent''s responses are validated by an automated testing system that compares the generated answers against stored expected outputs. Identical prompts must produce consistent responses so that the automated tests do not fail.  
  
You need to reduce the variability of the model''s responses, without changing the prompt or reducing factual accuracy.  
  
What should you do for the model?', '[{"key":"A","text":"Increase the max_tokens parameter."},{"key":"B","text":"Remove stop sequences from the requests."},{"key":"C","text":"Decrease the temperature parameter."},{"key":"D","text":"Increase the temperature parameter."}]'::jsonb, ARRAY['C']::text[], 'Tham số nhiệt độ kiểm soát mức độ ngẫu nhiên được đưa vào khi mô hình lấy mẫu mã thông báo tiếp theo: giá trị cao hơn làm tăng tính đa dạng và tính không thể đoán trước của đầu ra, trong khi giá trị thấp hơn làm cho mô hình ưu tiên các mã thông báo có khả năng xảy ra nhất, tạo ra nhiều phản hồi xác định và lặp lại hơn cho cùng một dấu nhắc đầu vào. Do đó, việc giảm (giảm) nhiệt độ sẽ làm giảm độ biến thiên của phản hồi trong các cuộc gọi lặp lại với lời nhắc giống hệt nhau, đáp ứng yêu cầu kiểm tra tự động mà không yêu cầu bất kỳ thay đổi nào đối với văn bản lời nhắc và không làm giảm độ chính xác thực tế—trên thực tế, cài đặt nhiệt độ thấp thường được đề xuất cho các trường hợp sử dụng xác định, nhạy cảm với độ chính xác, chẳng hạn như RAG và xác thực Hỏi & Đáp đàm thoại. Việc thay đổi max_tokens chỉ ảnh hưởng đến giới hạn độ dài phản hồi và việc xóa chuỗi dừng chỉ ảnh hưởng đến nơi quá trình tạo bị cắt; không kiểm soát tính ngẫu nhiên của việc lấy mẫu.

**Tài liệu tham khảo:**
- [How to use the reproducible output feature in Azure OpenAI (temperature/top_p guidance)](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/reproducible-output)
- [Reducing randomness of responses in turbo model - Microsoft Q&A](https://learn.microsoft.com/en-us/answers/questions/1439994/reducing-randomness-of-responses-in-turbo-model)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-75', 'ai-103', 75, 'You are developing prompts for a Microsoft Foundry project that classifies incoming support tickets by category.  
  
You need to improve accuracy by showing the model examples of correct classifications, without retraining the model or storing knowledge permanently.  
  
Which prompt engineering approach should you use?', '[{"key":"A","text":"Retrieval Augmented Generation (RAG)"},{"key":"B","text":"zero-shot learning"},{"key":"C","text":"chain of thought"},{"key":"D","text":"few-shot learning"}]'::jsonb, ARRAY['D']::text[], 'Học vài lần liên quan đến việc nhúng một số lượng nhỏ các cặp đầu vào-đầu ra mẫu trực tiếp trong lời nhắc để mô hình có thể suy ra mẫu mong muốn cho nhiệm vụ hiện tại mà không cần đào tạo lại mô hình hoặc lưu trữ kiến ​​thức bên ngoài. Điều này trực tiếp đáp ứng yêu cầu thể hiện sự phân loại chính xác trong ngữ cảnh trong khi vẫn giữ cho mô hình và trọng số của nó không thay đổi và không lưu giữ dữ liệu bên ngoài dấu nhắc. Phương pháp học không cần bắn cung cấp các ví dụ no, chuỗi suy nghĩ tập trung vào việc suy ra lý luận từng bước thay vì trình diễn các ví dụ được gắn nhãn và RAG dựa vào việc truy xuất và đưa kiến ​​thức được lưu trữ bên ngoài vào thời điểm truy vấn, điều này mâu thuẫn với yêu cầu ''lưu trữ kiến ​​thức vĩnh viễn no''.

**Tài liệu tham khảo:**
[Prompt engineering techniques - Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/prompt-engineering)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-76', 'ai-103', 76, 'You have a Microsoft Foundry project containing an agent used for a customer support chat application. The agent uses a memory store together with a memory search tool.  
  
You need to make sure the conversation history does **not** persist across separate sessions.  
  
What should you set as the scope of the memory tool?', '[{"key":"A","text":"session"},{"key":"B","text":"{{$conversationId}}"},{"key":"C","text":"{{$userId}}"},{"key":"D","text":"global"}]'::jsonb, ARRAY['B']::text[], 'Trong Foundry Agent Service, tham số phạm vi của công cụ bộ nhớ xác định nhóm mục bộ nhớ được lưu trữ mà một yêu cầu nhất định có thể đọc và ghi vào. Việc đặt phạm vi thành biến {{$conversationId}} động liên kết các mục bộ nhớ với ID duy nhất của cuộc trò chuyện/chuỗi hiện tại, do đó, mỗi phiên mới (có ID cuộc trò chuyện mới) không thể thấy bộ nhớ được ghi lại trong một cuộc trò chuyện khác, trước đó. Ngược lại, phạm vi {{$userId}} cố tình giữ cùng một khóa nhận dạng trong các phiên để bộ nhớ vẫn tồn tại và cá nhân hóa các phiên trong tương lai cho người dùng đó — ngược lại với yêu cầu — trong khi giá trị ''phiên'' hoặc ''toàn cầu'' tĩnh sẽ tạo ra một nhóm dùng chung, không thay đổi được sử dụng bởi tất cả các cuộc gọi thay vì cách ly bộ nhớ cho mỗi phiên riêng lẻ.

**Tài liệu tham khảo:**
- [What is Memory? - Microsoft Foundry | Microsoft Learn](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-memory)
- [Create and use memory in Foundry Agent Service (preview) - Microsoft Foundry | Microsoft Learn](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/memory-usage)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-77', 'ai-103', 77, 'You have a Microsoft Foundry project that contains an agent.  
  
You need to enable long-term memory so that the agent can recall user preferences across separate conversations. Stored memories must be isolated per authenticated user, and the client application must not have to manually generate user IDs.  
  
How should you complete the Python code? Each value may be used once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"scope","text":"Slot 1:","correctAnswer":"C"},{"id":"tools","text":"Slot 2:","correctAnswer":"E"}],"choices":[{"key":"A","text":"\"session\""},{"key":"B","text":"\"{{$conversationId}}\""},{"key":"C","text":"\"{{$userId}}\""},{"key":"D","text":"[mem_store_name]"},{"key":"E","text":"[memory_tool]"},{"key":"F","text":"MemorySearchTool(\"support_mem_store\")"}]}'::jsonb, ARRAY['scope=C', 'tools=E']::text[], 'Tham số phạm vi của MemorySearchTool xác định ranh giới cách ly cho các bộ nhớ được lưu trữ. Để duy trì và thu hồi tùy chọn của người dùng trong các cuộc trò chuyện riêng biệt, phạm vi phải được gắn với danh tính người dùng thay vì phiên hoặc cuộc trò chuyện. Mã thông báo động "{$userId}}" tự động phân giải thành ID người dùng được xác thực từ ngữ cảnh gọi điện, do đó, bộ nhớ được tách biệt cho mỗi người dùng mà không yêu cầu ứng dụng khách tạo hoặc cung cấp ID người dùng theo cách thủ công. Ngược lại, "phiên" hoặc "{{$conversationId}}" đặt phạm vi bộ nhớ vào một cuộc trò chuyện duy nhất, điều này sẽ không cho phép thu hồi qua các cuộc trò chuyện riêng biệt. Tham số công cụ của NhắcAgentDefinition phải tham chiếu phiên bản Memory_tool đã được định cấu hình sẵn (được chuyển dưới dạng [memory_tool]) để tác nhân sử dụng đối tượng MemorySearchTool với đúng tên_store_store và phạm vi đã được đặt, thay vì khởi tạo một công cụ mới được định cấu hình khác.

**Tài liệu tham khảo:**
- [Azure AI Foundry Agent Service - Memory (preview)](https://learn.microsoft.com/en-us/azure/ai-services/agents/how-to/tools/memory)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-78', 'ai-103', 78, 'You have a web app named App1 that integrates with a Microsoft Foundry project named Project1 to process user prompts. App1 performs the following actions:  
  
- Sends prompts directly to a model by using the Azure OpenAI Responses API  
- Invokes the Azure AI Content Safety tool by using a Foundry connection within the same request  
  
You need to configure end-to-end visibility into each step of the request workflow.  
  
What should you do?', '[{"key":"A","text":"Enable logging by using the client SDK for Content Safety."},{"key":"B","text":"Enable logging by using Foundry Local."},{"key":"C","text":"Enable application tracing in Project1."},{"key":"D","text":"Route requests through the Azure OpenAI endpoint."}]'::jsonb, ARRAY['C']::text[], 'Microsoft Foundry cung cấp khả năng theo dõi tác nhân/ứng dụng tích hợp sẵn dựa trên OpenTelemetry, nắm bắt mọi bước của yêu cầu dưới dạng các khoảng tương quan — bao gồm cả lệnh gọi mô hình thông qua API phản hồi và bất kỳ lệnh gọi công cụ nào được thực hiện thông qua kết nối Foundry, chẳng hạn như Azure AI Content Safety. Khi tính năng theo dõi ứng dụng được bật trong dự án (thường bằng cách kết nối tài nguyên Application Insights), Foundry sẽ tự động thiết lập công cụ và liên kết các bước này thành một dấu vết đầu cuối duy nhất có thể xem được trong chế độ xem Dấu vết của cổng Foundry, mang lại khả năng hiển thị đầu vào, đầu ra, độ trễ và lỗi ở từng giai đoạn của quy trình làm việc. Việc chỉ bật ghi nhật ký trong SDK máy khách An toàn nội dung sẽ tách biệt lệnh gọi đó và không tương quan với lệnh gọi đó với yêu cầu mô hình, Foundry Local áp dụng cho việc thực thi mô hình cục bộ thay vì quy trình làm việc được lưu trữ trên đám mây này và việc chỉ định tuyến các yêu cầu thông qua điểm cuối Azure OpenAI không tự nó tạo ra bất kỳ dấu vết hoặc khả năng hiển thị nào trong các bước của quy trình làm việc.

**Tài liệu tham khảo:**
- [Set Up Tracing for AI Agents in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/observability/how-to/trace-agent-setup)
- [Agent tracing in Microsoft Foundry (preview) - Concepts](https://learn.microsoft.com/en-us/azure/foundry/observability/concepts/trace-agent-concept)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-79', 'ai-103', 79, 'You have a Microsoft Foundry project containing an agent named Agent1.  
  
The agent runs successfully, but the Foundry Control Plane does not show values for:  
  
- Error rates  
- Runs  
- Token usage  
  
Additionally, the Traces tab is empty.  
  
You need to ensure that the Foundry Control Plane displays the appropriate values for Agent1.  
  
What should you do?', '[{"key":"A","text":"Update Agent1 to a new version."},{"key":"B","text":"Restart Agent from Foundry Control Plan"},{"key":"C","text":"Assign to a Log Analytics workspace to Agent1."},{"key":"D","text":"Enable Application Insights for Agent1."}]'::jsonb, ARRAY['D']::text[], 'Bảng thông tin giám sát và tab Dấu vết của Foundry Control Plane phụ thuộc vào dữ liệu OpenTelemetry được gửi tới tài nguyên Azure Monitor Application Insights được kết nối với tài nguyên lưu trữ của tác nhân. Nếu không bật Application Insights, các tác nhân sẽ thiếu số liệu tình trạng, theo dõi chi phí/mã thông báo và dấu vết chi tiết, điều này giải thích tỷ lệ lỗi bị thiếu, số lần chạy, mức sử dụng mã thông báo và tab Dấu vết trống. Việc kích hoạt và kết nối Application Insights cho Agent1 cho phép phép đo từ xa này (tên hoạt động, thời lượng, lệnh gọi mô hình, lệnh gọi công cụ, cách sử dụng mã thông báo) để đưa vào các chế độ xem Mặt phẳng điều khiển trong vòng vài phút sau khi thực thi tác nhân.

**Tài liệu tham khảo:**
[Monitor agents with the Agent Monitoring Dashboard - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/observability/how-to/how-to-monitor-agents-dashboard) · [Monitor AI agent fleet health and performance - Microsoft Foundry Control Plane](https://learn.microsoft.com/en-us/azure/foundry/control-plane/monitoring-across-fleet)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-80', 'ai-103', 80, 'You have a Microsoft Foundry project that contains an agent.  
  
The agent uses Azure Content Understanding in Foundry Tools to process vendor onboarding packets. The packets include digital PDFs that contain tables and hyperlinks.  
  
The extracted content is indexed for search and provided to a downstream agent in Markdown format.  
  
You need to produce a Markdown output whose layout and semantic structure are optimized for Retrieval Augmented Generation (RAG) workflows.  
  
Which built-in analyzer should you use?', '[{"key":"A","text":"prebuilt-documentFieldSchema"},{"key":"B","text":"prebuilt-documentSearch"},{"key":"C","text":"prebuilt-read"},{"key":"D","text":"prebuilt-layout"}]'::jsonb, ARRAY['B']::text[], 'Azure Content Hiểu cung cấp một danh mục chuyên dụng của máy phân tích RAG trích xuất nội dung có bố cục được biểu thị dưới dạng đánh dấu và áp dụng phân tích ngữ nghĩa để cải thiện chất lượng truy xuất cho các ứng dụng tiếp theo. Trong danh mục này, Tìm kiếm tài liệu dựng sẵn sẽ trích xuất các đoạn văn, bảng và hình; tạo mô tả hình/biểu đồ/sơ đồ chi tiết; chụp các chú thích viết tay; và tạo ra một bản tóm tắt tài liệu, đồng thời đây là bộ phân tích mà Microsoft khuyến nghị rõ ràng cho việc nhập tài liệu trong quy trình công việc RAG. Các tùy chọn khác không đáp ứng yêu cầu này: bố cục dựng sẵn và đọc sẵn là các công cụ phân tích trích xuất nội dung tập trung vào OCR và trích xuất bố cục/cấu trúc thô thay vì đánh dấu ngữ nghĩa được tối ưu hóa RAG và tài liệu dựng sẵnFieldSchema là một công cụ phân tích tiện ích dùng để đề xuất lược đồ trường chứ không phải để tạo ra đánh dấu sẵn sàng cho RAG.

**Tài liệu tham khảo:**
- [Azure Content Understanding in Foundry Tools prebuilt analyzers](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/concepts/prebuilt-analyzers)
- [What is Azure Content Understanding in Foundry Tools?](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/overview)', 'Implement information extraction solutions', ARRAY['AI-103', 'Implement information extraction solutions']::text[], NULL, 'published'),
  ('ai103-81', 'ai-103', 81, 'You have a Microsoft Foundry project containing an agent. The agent uses Azure AI Search for Retrieval Augmented Generation (RAG).  
  
You plan to ingest and index PDF product manuals.  
  
You need to design a solution that supports semantic similarity matching, ensuring the agent retrieves relevant data even when user questions are phrased differently than the wording used in the product manuals.  
  
Which indexing approach should you use?', '[{"key":"A","text":"vector search"},{"key":"B","text":"semantic ranking"},{"key":"C","text":"suggesters"},{"key":"D","text":"analyzers"}]'::jsonb, ARRAY['A']::text[], 'Vector search trong Azure AI Search lập chỉ mục nội dung dưới dạng các phần nhúng có chiều cao nắm bắt ý nghĩa ngữ nghĩa thay vì văn bản chính xác. Điều này cho phép các truy vấn được diễn đạt khác với tài liệu nguồn vẫn khớp với nội dung có liên quan dựa trên sự tương đồng về khái niệm/ngữ nghĩa, điều này rất cần thiết cho các tình huống RAG trong đó các câu hỏi của người dùng có thể không sử dụng cùng thuật ngữ như hướng dẫn sử dụng sản phẩm cơ bản. Xếp hạng ngữ nghĩa chỉ xếp hạng lại các kết quả từ từ khóa ban đầu hoặc tìm kiếm kết hợp và bản thân nó không tạo ra các phần nhúng cần thiết để so khớp độ tương tự; người đề xuất cung cấp chức năng tự động hoàn thành; và máy phân tích xử lý văn bản để tìm kiếm từ vựng (từ khóa), chứ không phải để hiểu ngữ nghĩa.

**Tài liệu tham khảo:**
[Vector search in Azure AI Search](https://learn.microsoft.com/en-us/azure/search/vector-search-overview) · [Retrieval Augmented Generation (RAG) in Azure AI Search](https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-82', 'ai-103', 82, 'You have a Microsoft Foundry agent that grounds its responses using an Azure Search index. The index includes:  
  
- Searchable text fields for product names and product codes  
- A vector field that stores embeddings for product descriptions  
  
You need to ensure that users can query the index using:  
  
- Exact product names or codes  
- Natural language descriptions of the products  
  
What should you configure?', '[{"key":"A","text":"vector search only"},{"key":"B","text":"hybrid search"},{"key":"C","text":"keyword search only"},{"key":"D","text":"semantic search only"}]'::jsonb, ARRAY['B']::text[], 'Tìm kiếm kết hợp trong Azure AI Search kết hợp tìm kiếm toàn văn bản (từ khóa) truyền thống với vector search trong một yêu cầu truy vấn duy nhất. Điều này cho phép giải quyết các truy vấn khớp chính xác đối với các trường văn bản (như tên và mã sản phẩm) thông qua tìm kiếm từ khóa, trong khi các truy vấn ngôn ngữ tự nhiên được giải quyết thông qua tìm kiếm tương tự vectơ đối với trường nhúng, với các kết quả được hợp nhất và xếp hạng cùng nhau. Chỉ sử dụng vector search sẽ làm suy giảm khả năng truy xuất tên/mã khớp chính xác và việc chỉ sử dụng tìm kiếm từ khóa hoặc ngữ nghĩa sẽ không tận dụng được việc nhúng vectơ để khớp mô tả ngôn ngữ tự nhiên.

**Tài liệu tham khảo:**
[Hybrid search - Azure AI Search](https://learn.microsoft.com/en-us/azure/search/hybrid-search-overview)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-83', 'ai-103', 83, 'You have an Azure AI Search indexer that ingests PDF policy manuals.  
  
Client applications must display page-level citations that include bounding polygons for both text and images.  
  
You need to add a single built-in multimodal content extraction skill to the Azure AI Search skillset. The solution must meet the following requirements:  
  
- Provide text and image location metadata.  
- Extract tables that span multiple pages.  
  
What should you add?', '[{"key":"A","text":"Document Extraction"},{"key":"B","text":"Azure Content Understanding in Foundry Tools"},{"key":"C","text":"GenAI Prompt"},{"key":"D","text":"Document Layout"}]'::jsonb, ARRAY['B']::text[], 'Kỹ năng Hiểu nội dung Azure (Microsoft.Skills.Util.ContentUnderstandingSkill) sử dụng bộ phân tích tài liệu Hiểu nội dung Azure trong Công cụ Foundry để trích xuất cả văn bản và hình ảnh trong khi trả về siêu dữ liệu vị trí (số trang và dữ liệu vị trí nguồn/đa giác giới hạn) cho từng đoạn văn bản và từng hình ảnh được chuẩn hóa. Đây chính xác là những gì cần thiết để xây dựng các trích dẫn cấp trang với các vùng giới hạn cho cả hai loại nội dung. Quan trọng hơn, tài liệu của Microsoft nêu rõ rằng đối với các bảng trải rộng trên nhiều trang, kỹ năng Hiểu nội dung Azure có thể nhận dạng và trích xuất các bảng nhiều trang dưới dạng một đơn vị duy nhất — một khả năng mà kỹ năng Bố cục Tài liệu thay thế thiếu (nó xuất ra các bảng dưới dạng văn bản thuần túy trên cơ sở mỗi trang và không hợp nhất chúng trên các trang mà không có logic tùy chỉnh bổ sung). Kỹ năng Trích xuất tài liệu không cung cấp siêu dữ liệu vị trí văn bản (dữ liệu đa giác/số trang no cho văn bản) và kỹ năng GenAI Nhắc là kỹ năng tổng hợp/LLM để tạo nội dung mới (ví dụ: tóm tắt hoặc chú thích hình ảnh), không phải là kỹ năng trích xuất nội dung, do đó cả hai đều không đáp ứng các yêu cầu đã nêu.

**Tài liệu tham khảo:**
- [Azure Content Understanding Skill - Azure AI Search | Microsoft Learn](https://learn.microsoft.com/en-us/azure/search/cognitive-search-skill-content-understanding)
- [Document Layout Skill - Azure AI Search | Microsoft Learn](https://learn.microsoft.com/en-us/azure/search/cognitive-search-skill-document-intelligence-layout)', 'Implement information extraction solutions', ARRAY['AI-103', 'Implement information extraction solutions']::text[], NULL, 'published'),
  ('ai103-84', 'ai-103', 84, 'You are building an Azure AI Search indexing pipeline named Pipeline1 that ingests invoices stored in Azure Blob Storage. The invoices are stored as scanned images.  
  
You need to enable users to search invoice data across the invoice fields.  
  
Which built-in skill should you add to the skillset of Pipeline1?', '[{"key":"A","text":"Text Split"},{"key":"B","text":"Text Translation"},{"key":"C","text":"optical character recognition (OCR)"},{"key":"D","text":"Image Analysis"}]'::jsonb, ARRAY['C']::text[], 'Vì hóa đơn chỉ tồn tại dưới dạng hình ảnh được quét nên có lớp văn bản có thể trích xuất no để người lập chỉ mục sử dụng trực tiếp. Kỹ năng Nhận dạng Ký tự Quang học (OCR) tích hợp trong Azure AI Search đọc văn bản in và viết tay từ nội dung hình ảnh trong quá trình làm giàu và văn bản được trích xuất sau đó có thể được chiếu vào các trường chỉ mục có thể tìm kiếm, cho phép tìm kiếm toàn văn bản trên dữ liệu hóa đơn. Tách văn bản chỉ tách các đoạn văn bản đã được trích xuất, Dịch văn bản chuyển đổi văn bản hiện có giữa các ngôn ngữ và Phân tích hình ảnh tạo ra thẻ hình ảnh/chú thích/mô tả hình ảnh thay vì trích xuất nội dung văn bản thực tế cần thiết để tìm kiếm các trường hóa đơn.

**Tài liệu tham khảo:**
[OCR Skill - Azure AI Search | Microsoft Learn](https://learn.microsoft.com/en-us/azure/search/cognitive-search-skill-ocr) · [Extract Text from Images by Using AI Enrichment - Azure AI Search | Microsoft Learn](https://learn.microsoft.com/en-us/azure/search/cognitive-search-concept-image-scenarios)', 'Implement computer vision solutions', ARRAY['AI-103', 'Implement computer vision solutions']::text[], NULL, 'published'),
  ('ai103-85', 'ai-103', 85, 'You have a Microsoft Foundry project that uses Azure Content Understanding in Foundry Tools to analyze marketing videos.  
  
Video segmentation is enabled.  
  
You need to configure an analyzer to output a generated JSON field that describes the color scheme of each video segment.  
  
How should you configure the analyzer? Each value may be used once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"valuetype","text":"Field value type:","correctAnswer":"D"},{"id":"fieldmethod","text":"Field method:","correctAnswer":"B"}],"choices":[{"key":"A","text":"classify"},{"key":"B","text":"generate"},{"key":"C","text":"group"},{"key":"D","text":"string"},{"key":"E","text":"table"}]}'::jsonb, ARRAY['valuetype=D', 'fieldmethod=B']::text[], 'Trong Sơ đồ trường của Hiểu nội dung Azure, mỗi trường xác định một ''loại'' (loại giá trị) và một ''phương thức'' (cách điền giá trị). Loại giá trị ''chuỗi'' được sử dụng cho đầu ra văn bản bằng ngôn ngữ tự nhiên, chẳng hạn như mô tả bảng màu. Phương thức ''tạo'' được sử dụng khi mô hình phải suy luận hoặc diễn giải nội dung thay vì trích xuất văn bản bằng chữ hoặc phân loại thành một enum cố định — điều này là bắt buộc đối với máy phân tích video vì ''trích xuất'' chỉ được hỗ trợ cho máy phân tích tài liệu. Tài liệu video chính thức của Microsoft trích dẫn rõ ràng ''Lược đồ màu'' làm trường tùy chỉnh mẫu được sử dụng để truyền tải tâm trạng và bầu không khí trong từng phân đoạn video, đồng thời minh họa các trường mô tả có thể so sánh (ví dụ: brandLogo) được định cấu hình bằng "type": "string" và "method": "generate". Vì việc mô tả sơ đồ màu của phân đoạn yêu cầu mô hình tổng quát diễn giải và tổng hợp mô tả từ khung hình trực quan thay vì sao chép văn bản bằng chữ hoặc chọn từ danh sách danh mục cố định nên ''chuỗi'' + ''tạo'' là cấu hình chính xác.

**Tài liệu tham khảo:**
- [Azure Content Understanding in Foundry Tools video overview](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/video/overview)
- [Azure Content Understanding in Foundry Tools - What is an analyzer? Configuration and reference](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/concepts/analyzer-reference)', 'Implement computer vision solutions', ARRAY['AI-103', 'Implement computer vision solutions']::text[], NULL, 'published'),
  ('ai103-86', 'ai-103', 86, 'You have an invoice-processing application named App1 that uses Azure Content Understanding in Foundry Tools.  
  
You are building a new Content Understanding pipeline named Pipeline1 that must meet the following requirements:  
  
- Compare an invoice to its related purchase order  
- Validate the invoice against static vendor contact documents  
- Return a single structured output that includes discrepancy findings  
  
You need to configure Pipeline1 and expose the pipeline as a single analyzer endpoint. What should you configure?', '[{"key":"A","text":"a single-file task in standard mode that uses the vendor contract provided as an additional document during analysis."},{"key":"B","text":"a single-file task in standard mode that uses confidence scores enabled for the extracted fields."},{"key":"C","text":"a multiple-file task in pro mode that uses the vendor contract files as reference data"},{"key":"D","text":"a multi-file task in standard mode that uses the invoice and purchase order as input to the analyzer"}]'::jsonb, ARRAY['C']::text[], 'Chế độ Azure Content Hiểu biết chuyên nghiệp được thiết kế đặc biệt cho các trường hợp sử dụng nâng cao yêu cầu lý luận nhiều bước và ra quyết định phức tạp, chẳng hạn như xác định sự không nhất quán giữa các tài liệu. Chế độ chuyên nghiệp được bật bằng cách định cấu hình tác vụ nhiều tệp, hỗ trợ nhiều tài liệu đầu vào (hóa đơn và đơn đặt hàng) và cho phép bạn cung cấp dữ liệu tham chiếu (hợp đồng nhà cung cấp/tài liệu liên hệ) tại thời điểm tạo máy phân tích. Sau đó, dịch vụ sẽ áp dụng lý do để xác thực các tài liệu đầu vào dựa trên dữ liệu tham chiếu theo một lược đồ đã xác định, gắn cờ những khác biệt để xem xét và trả về dữ liệu này dưới dạng một đầu ra có cấu trúc duy nhất thông qua một điểm cuối của máy phân tích. Chế độ tiêu chuẩn chỉ hỗ trợ các tác vụ một tệp và không hỗ trợ xử lý nhiều tài liệu đầu vào, tích hợp tập dữ liệu tham chiếu hoặc lý luận nhiều bước nên không thể đáp ứng các yêu cầu so sánh và xác thực.

**Tài liệu tham khảo:**
- [Azure Content Understanding in Foundry Tools standard and pro modes (preview)](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/concepts/standard-pro-modes)
- [Create an Azure AI Content Understanding multi-file task in the Azure AI Foundry portal](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/quickstart/use-ai-foundry-pro-mode)', 'Implement information extraction solutions', ARRAY['AI-103', 'Implement information extraction solutions']::text[], NULL, 'published'),
  ('ai103-87', 'ai-103', 87, 'You have a Microsoft Foundry project that is used to generate short promotional product videos.  
  
After several clips have been approved, reviewers notice a small watermark in the top-right corner of some of the videos.  
  
You need to remove the watermark without regenerating the videos.  
  
What should you do?', '[{"key":"A","text":"Modify the original prompt to exclude watermarks."},{"key":"B","text":"Crop the video by using the size parameter."},{"key":"C","text":"Increase the guidance scale."},{"key":"D","text":"Apply a mask-based inpainting edit to the affected part of the video."}]'::jsonb, ARRAY['D']::text[], 'Tính năng tạo video Sora 2 của Azure AI Foundry hỗ trợ lồng ghép video vào video, trong đó bạn cung cấp mặt nạ cho vùng cụ thể của video hiện có, đã được tạo (chẳng hạn như vùng hình mờ) và mô hình chỉ chỉnh sửa vùng bị che đó. Cách tiếp cận có mục tiêu này bảo tồn phần còn lại của nội dung video đã được phê duyệt và tránh nhu cầu tạo lại toàn bộ clip, không giống như thay đổi lời nhắc, điều chỉnh tỷ lệ hướng dẫn (cả hai đều yêu cầu chạy thế hệ mới) hoặc cắt xén (làm thay đổi khung/bố cục thay vì phẫu thuật loại bỏ hiện vật).

**Tài liệu tham khảo:**
[Video generation with Sora 2 (preview) - Azure AI Foundry](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/video-generation) · [Sora 2 video generation overview (preview) - Microsoft Foundry | Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/video-generation-quickstart)', 'Implement computer vision solutions', ARRAY['AI-103', 'Implement computer vision solutions']::text[], NULL, 'published'),
  ('ai103-88', 'ai-103', 88, 'You have a web app named App1 that sends requests to a multimodal chat model deployment in a Microsoft Foundry project.  
  
User messages can contain both text and images.  
  
Currently, App1 embeds the image URL as plain text within the message content, so the model cannot recognize it as an image.  
  
Traces show that the requests contain a single text message rather than a multimodal content array.  
  
You need to send the message as a structured array that includes both the text portion and the image reference, so that the model can process the image correctly.  
  
What should you do?', '[{"key":"A","text":"Set the user message content array to include items that have type: text and type: image_url."},{"key":"B","text":"Encode the image to base64 and include the encoded data inside the content string of the user message."},{"key":"C","text":"Add the image URL to the request metadata section, so the model can resolve the processing issue automatically."},{"key":"D","text":"Place the image URL inside the System Message and set type to image_url so the model loads the image at initialization."}]'::jsonb, ARRAY['A']::text[], 'Các mô hình hoàn thành trò chuyện Microsoft Foundry (Azure OpenAI) hỗ trợ tầm nhìn mong muốn trường ''nội dung'' của tin nhắn người dùng là một mảng các đối tượng phần nội dung thay vì một chuỗi đơn giản khi tin nhắn bao gồm cả văn bản và hình ảnh. Mỗi phần tử trong mảng phải chỉ định một ''loại'': một phần tử có loại ''văn bản'' chứa trường văn bản và phần tử khác có loại ''image_url'' chứa đối tượng ''image_url'' có URL của hình ảnh (hoặc URI dữ liệu base64). Định dạng có cấu trúc này cho phép mô hình phân biệt văn bản với các tham chiếu hình ảnh và xử lý hình ảnh một cách chính xác, như được ghi lại trong hướng dẫn của Microsoft về cách sử dụng đầu vào hình ảnh và âm thanh khi hoàn tất trò chuyện với Foundry Models.

**Tài liệu tham khảo:**
- [How to use image and audio in chat completions with Azure AI Foundry Models - Azure AI Foundry | Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-foundry/model-inference/how-to/use-chat-multi-modal)
- [How to use vision-enabled chat models - Microsoft Foundry | Microsoft Learn](https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/gpt-with-vision)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-89', 'ai-103', 89, 'You are developing a customer support web application called App1 in Microsoft Foundry that uses a GPT realtime model.  
  
App1 must support:  
  
- Live, low-latency voice conversations powered by Azure OpenAI  
- Streaming audio input from users, along with playback of audio responses  
  
You need to select a connection method that supports real-time audio streaming within the client application and achieves approximately 100 ms of latency.  
  
Which connection method should you choose?', '[{"key":"A","text":"RTMP"},{"key":"B","text":"WebRTC"},{"key":"C","text":"SIP"},{"key":"D","text":"WebSocket"}]'::jsonb, ARRAY['B']::text[], 'WebRTC được thiết kế nhằm mục đích giao tiếp âm thanh (và video) ngang hàng, theo thời gian thực và là phương thức kết nối mà Microsoft khuyến nghị cho các ứng dụng phía máy khách—chẳng hạn như ứng dụng trên trình duyệt hoặc ứng dụng dành cho thiết bị di động—sử dụng API thời gian thực Azure OpenAI GPT để truyền âm thanh micrô đến mô hình và phát lại giọng nói được tạo với độ trễ tối thiểu, thường đạt được độ trễ khứ hồi khoảng 100 mili giây. WebSocket, mặc dù được API thời gian thực hỗ trợ, nhưng được thiết kế để tích hợp từ máy chủ đến máy chủ trong đó không yêu cầu độ trễ nghiêm ngặt ở mức thấp vì nó gây ra độ trễ từ đầu đến cuối cao hơn WebRTC. SIP được thiết kế để tích hợp cuộc gọi điện thoại/PSTN thay vì phát trực tuyến ứng dụng khách trong trình duyệt hoặc trong ứng dụng và RTMP hoàn toàn không phải là giao thức được hỗ trợ cho API thời gian thực.

**Tài liệu tham khảo:**
- [Use the GPT Realtime API via WebRTC - Microsoft Foundry | Microsoft Learn](https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/realtime-audio-webrtc)
- [Use the GPT Realtime API via WebSockets - Microsoft Foundry | Microsoft Learn](https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/realtime-audio-websockets)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-90', 'ai-103', 90, 'You have a Microsoft Foundry project that includes an agent and is connected to a GitHub repository. The repository contains a YAML file named File1 that defines the agent''s evaluation settings.  
  
You need to create a GitHub Actions workflow that runs the evaluation defined in File1 whenever a pull request (PR) is opened.  
  
How should you configure the workflow?', '[{"key":"A","text":"Set project-endpoint to the endpoint of the project."},{"key":"B","text":"Set evaluation-config to the path of the YAML file."},{"key":"C","text":"Set model-deployment-name to the deployed model."},{"key":"D","text":"Set tenant-id to the Microsoft Entra tenant ID"}]'::jsonb, ARRAY['B']::text[], 'Tích hợp GitHub Actions cho các đánh giá Microsoft Foundry chạy đánh giá dựa trên tệp cấu hình YAML chỉ định người đánh giá, tập dữ liệu và mục tiêu sẽ sử dụng. Để quy trình làm việc thực thi đánh giá cụ thể được xác định trong Tệp1, quy trình làm việc phải đặt đầu vào cấu hình đánh giá thành đường dẫn của tệp YAML đó để hành động biết định nghĩa đánh giá nào sẽ tải và chạy khi kích hoạt PR kích hoạt.', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-91', 'ai-103', 91, 'You have a Microsoft Foundry project that contains an agent.  
  
The agent uses a stored access key to retrieve secrets from an Azure key vault, which violates a keyless-credentials requirement.  
  
You need to ensure that the agent can retrieve the secrets. The solution must follow the principle of least privilege.  
  
What should you configure?', '{"type":"matching_dropdown","statements":[{"id":"scope","text":"Managed identity scope:","correctAnswer":"B","choiceKeys":["A","B","C"]},{"id":"auth","text":"Key Vault authorization method:","correctAnswer":"F","choiceKeys":["D","E","F"]}],"choices":[{"key":"A","text":"Enable a system-assigned managed identity at the Foundry level."},{"key":"B","text":"Enable a system-assigned managed identity at the project level."},{"key":"C","text":"Create a service principal and store the principal''s client secret."},{"key":"D","text":"Add an API key to application settings."},{"key":"E","text":"Add a Key Vault access policy for the secrets."},{"key":"F","text":"Assign the Key Vault Secrets User role to the managed identity."}]}'::jsonb, ARRAY['scope=B', 'auth=F']::text[], 'system-assigned managed identity loại bỏ nhu cầu về thông tin xác thực được lưu trữ như khóa truy cập, đáp ứng yêu cầu thông tin xác thực không cần chìa khóa. Việc đưa managed identity vào dự án (chứ không phải toàn bộ tài nguyên của Foundry) sẽ giữ cho các quyền của danh tính và bán kính vụ nổ càng hẹp càng tốt, điều này phù hợp với ít đặc quyền nhất. Để truy cập Key Vault, Azure RBAC là mô hình ủy quyền hiện đại, được đề xuất thay vì mô hình chính sách truy cập cũ; vai trò ''Người dùng bí mật kho khóa'' tích hợp chỉ cấp khả năng đọc (lấy/liệt kê) nội dung bí mật mà không cấp quyền quản lý kho tiền hoặc các loại đối tượng khác, khiến vai trò này trở thành nhiệm vụ có đặc quyền ít nhất cần thiết cho managed identity của tác nhân để truy xuất bí mật.

**Tài liệu tham khảo:**
- [Agent identity concepts in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/agent-identity)
- [Provide access to Key Vault keys, certificates, and secrets with an Azure role-based access control](https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-92', 'ai-103', 92, 'You have a Microsoft Foundry project that contains a customer support application.

You create an evaluation named Run1 with the following configuration:
- Includes risk and safety metrics
- Includes the protected material evaluation
- Includes harmful content metrics that use a medium severity threshold

You create an evaluation named Run2 with the following configuration:
- Includes risk and safety metrics
- Includes the protected material evaluation
- Includes harmful content metrics that use a high severity threshold

You run both evaluations against a dataset named DB1 and get the following results:
- Content harm defect rate of Run1: 12%
- Content harm defect rate of Run2: 4%
- Protected material evaluation of Run1: 6%
- Protected material evaluation of Run2: 6%

You start a fine-tuning job using DB1. The job fails during the automatic RAI checks for multiple content harm types. You discover that the content filtering configuration is set to high severity.

For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"type":"statement_matrix","statements":[{"id":"1","text":"Changing the content filtering configuration to low severity will resolve the fine-tuning job issues.","correctAnswer":"No"},{"id":"2","text":"The difference between the 12% and 4% content harm defect rate is consistent with the different severity thresholds used in Run1 and Run2.","correctAnswer":"Yes"},{"id":"3","text":"The identical 6% protected material evaluation values across Run1 and Run2 indicate that this metric is unaffected by the change in the severity threshold.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:No', '2:Yes', '3:Yes']::text[], 'Ngưỡng lọc nội dung/ngưỡng nghiêm trọng được đặt thành ''Cao'' là cấu hình dễ dãi nhất — nó chỉ chặn nội dung nghiêm trọng nhất (mức độ nghiêm trọng cao), trong khi ngưỡng ''Thấp'' là nghiêm ngặt nhất, chặn nội dung ở mức độ nghiêm trọng thấp, trung bình và cao. Vì công việc fine-tuning đã không kiểm tra được RAI trong khi bộ lọc ở cài đặt ''Cao'' cho phép nên dữ liệu huấn luyện chứa nội dung đủ nghiêm trọng để kích hoạt chặn ngay cả khi lọc ở mức tối thiểu; việc chuyển sang ''Thấp'' sẽ chỉ khiến việc lọc trở nên chặt chẽ hơn (bắt được nhiều nội dung hơn), do đó, nó sẽ không giải quyết được — và có thể sẽ khiến các lỗi trở nên trầm trọng hơn. Ngoài ra, theo tài liệu đánh giá an toàn fine-tuning của Microsoft, các bước kiểm tra RAI được thực hiện trong fine-tuning sử dụng các ngưỡng được xác định trước không bị ràng buộc với bất kỳ cấu hình lọc nội dung tùy chỉnh nào, do đó việc thay đổi cấu hình bộ lọc hoàn toàn không ảnh hưởng đến đánh giá này. Content harm defect rate được định nghĩa là phần trăm phản hồi của tập dữ liệu có điểm nghiêm trọng vượt quá ngưỡng được định cấu hình. Ngưỡng trung bình (được sử dụng trong Run1) nhạy cảm hơn và gắn cờ nội dung ở mức độ nghiêm trọng trung bình và cao, dẫn đến defect rate cao hơn (12%); ngưỡng cao (được sử dụng trong Run2) chỉ gắn cờ nội dung nghiêm trọng nhất, dẫn đến defect rate thấp hơn (4%). Sự sụt giảm này chính xác là hành vi được mong đợi khi chuyển từ ngưỡng chặt chẽ hơn sang ngưỡng khoan dung hơn, xác nhận sự khác biệt phù hợp với sự thay đổi ngưỡng. Trình đánh giá tài liệu được bảo vệ là trình phân loại nhị phân phát hiện sự hiện diện của văn bản có bản quyền (ví dụ: lời bài hát, bài viết) trong đầu ra mô hình; nó hoạt động độc lập với thang đo mức độ nghiêm trọng có thể định cấu hình được sử dụng cho các danh mục nội dung có hại (thù ghét, tình dục, bạo lực, tự làm hại bản thân). Vì cài đặt ngưỡng mức độ nghiêm trọng có no liên quan đến việc phát hiện tài liệu được bảo vệ nên dự kiến ​​Run1 và Run2 — chỉ khác nhau ở ngưỡng mức độ nghiêm trọng của nội dung có hại — sẽ tạo ra kết quả đánh giá tài liệu được bảo vệ giống nhau (6% ở cả hai).

**Tài liệu tham khảo:**
- [Safety evaluation for fine-tuning (preview) - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/fine-tuning-safety-evaluation)
- [Content filtering for Microsoft Foundry Models (classic)](https://learn.microsoft.com/en-us/azure/foundry-classic/foundry-models/concepts/content-filter)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-93', 'ai-103', 93, 'You have a Microsoft Foundry project that contains a multi-agent solution. The agents use tool calling to query internal systems.  
  
You need to implement responsible AI auditing to meet the following requirements:  
  
- Capture all the nested operations across the entire agent run.  
- Record tool invocation arguments and returned results as metadata.  
  
What should you use for each requirement? Each option may be used once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"1","text":"Capture all the nested operations across the entire agent run:","correctAnswer":"A"},{"id":"2","text":"Record tool invocation arguments and results:","correctAnswer":"D"}],"choices":[{"key":"A","text":"Hierarchical spans"},{"key":"B","text":"A KQL query filter"},{"key":"C","text":"Sampling"},{"key":"D","text":"Tool call attributes"},{"key":"E","text":"Trace sampling policy"}]}'::jsonb, ARRAY['1=A', '2=D']::text[], 'Trong tính năng theo dõi tác nhân dựa trên OpenTelemetry của Microsoft Foundry, một dấu vết bao gồm các khoảng có thể được lồng vào nhau dưới dạng các khoảng cha/con, tạo thành một cây phân cấp phản ánh toàn bộ ngăn xếp lệnh gọi của một lần chạy tác nhân — bao gồm các lệnh gọi tác nhân phụ và lệnh gọi công cụ. Cấu trúc nhịp phân cấp này cho phép nắm bắt tất cả các hoạt động lồng nhau trong toàn bộ quá trình chạy tác nhân và được hiển thị dưới dạng cây/quỹ đạo phân cấp trong chế độ xem Khả năng quan sát > Dấu vết của cổng Foundry. Riêng biệt, mỗi khoảng lệnh gọi công cụ mang các thuộc tính (siêu dữ liệu) ghi lại các đối số gọi và kết quả trả về của công cụ, tuân theo các quy ước ngữ nghĩa OpenTelemetry cho các lệnh gọi công cụ, giúp dữ liệu này có thể truy vấn và kiểm tra được. Bộ lọc truy vấn KQL và chính sách lấy mẫu/dấu vết liên quan đến việc truy vấn phép đo từ xa được lưu trữ hoặc kiểm soát dấu vết nào được thu thập, chứ không liên quan đến việc nắm bắt cấu trúc của các hoạt động lồng nhau hoặc ghi lại đầu vào/đầu ra của lệnh gọi công cụ.

**Tài liệu tham khảo:**
- [Agent tracing in Microsoft Foundry (preview) - Concepts](https://learn.microsoft.com/en-us/azure/foundry/observability/concepts/trace-agent-concept)
- [Configure tracing for AI agent frameworks - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/observability/how-to/trace-agent-framework)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-94', 'ai-103', 94, 'You have a Microsoft Foundry project that contains an agent. The agent uses threads and file uploads, and it calls an Azure OpenAI model deployment.  
  
During load testing, calls intermittently fail and return an HTTP 429 rate limit exceeded error. Some user uploads fail and generate an HTTP 400 file size exceeded error.  
  
You need to mitigate the errors and reduce call failures. The solution must remain within the service and model limits.  
  
What should you do to resolve each error? Drag the appropriate actions to the correct errors. Each action may be used once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"http429","text":"HTTP 429:","correctAnswer":"D"},{"id":"http400","text":"HTTP 400:","correctAnswer":"E"}],"choices":[{"key":"A","text":"Increase tenant-wide quotas."},{"key":"B","text":"Move large content to files and use file search."},{"key":"C","text":"Use additional agent tools to reduce the message size."},{"key":"D","text":"Implement exponential backoff and jitter in the retry logic."},{"key":"E","text":"Split content into smaller files before uploading the files."}]}'::jsonb, ARRAY['http429=D', 'http400=E']::text[], 'Tài liệu Microsoft Foundry Agent Service xác định rõ ràng bảng tham chiếu lỗi giới hạn: lỗi 429 rate_limit_exceeded từ quá trình triển khai mô hình được giảm thiểu bằng cách triển khai tính năng lùi theo cấp số nhân với jitter trong logic thử lại của máy khách, giúp loại bỏ các lần thử lại để cho phép điều chỉnh khôi phục mà không vượt quá hạn mức mã thông báo mỗi phút/yêu cầu mỗi phút. Lỗi 400 file_size_exceeded khi tải tệp lên được giảm thiểu bằng cách chia nội dung thành các tệp nhỏ hơn (hoặc giảm kích thước tệp) trước khi tải lên, vì giới hạn kích thước mỗi tệp là giới hạn dịch vụ cố định không thể tăng lên. Cả hai biện pháp khắc phục đều hoạt động trong giới hạn mô hình và dịch vụ hiện có, theo yêu cầu, thay vì yêu cầu hạn ngạch mới (được áp dụng cho đăng ký/triển khai, không phải trên toàn đối tượng thuê và là một hành động riêng biệt với việc giảm lỗi trong giới hạn hiện tại).

**Tài liệu tham khảo:**
- [Quotas and limits for Microsoft Foundry Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/limits-quotas-regions)
- [Azure OpenAI in Microsoft Foundry Models Quotas and Limits](https://learn.microsoft.com/en-us/azure/foundry/openai/quotas-limits)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-95', 'ai-103', 95, 'You have a Microsoft Foundry project.  
  
You need to deploy a model from the model catalog to support a search solution for internal policy documents. The model must generate vector representations of the text in the documents and of user queries.  
  
Which type of model should you use?', '[{"key":"A","text":"an embedding model"},{"key":"B","text":"an image generation model"},{"key":"C","text":"a large language model (LLM)"},{"key":"D","text":"a small language model (SLM)"}]'::jsonb, ARRAY['A']::text[], 'Một mô hình nhúng được thiết kế để chuyển đổi văn bản (tài liệu và truy vấn) thành các biểu diễn vectơ số nhằm nắm bắt ý nghĩa ngữ nghĩa. Các vectơ này cho phép tìm kiếm dựa trên sự tương tự, chẳng hạn như vector search hoặc tạo tăng cường truy xuất (RAG), bằng cách cho phép hệ thống so sánh vectơ của truy vấn người dùng với vectơ của tài liệu được lập chỉ mục để tìm ra kết quả phù hợp nhất. Danh mục mô hình Azure AI Foundry (Microsoft Foundry) bao gồm các mô hình nhúng như text-embedding-ada-002 và các mô hình nhúng khác dành riêng cho mục đích này, khác với LLM hoặc SLM được tối ưu hóa cho việc tạo văn bản thay vì tạo ra các nội dung nhúng.

**Tài liệu tham khảo:**
[Embeddings - Azure OpenAI Service](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/understand-embeddings) · [Model catalog and collections in Azure AI Foundry portal](https://learn.microsoft.com/en-us/azure/ai-foundry/how-to/model-catalog-overview)', 'Implement text analysis solutions', ARRAY['AI-103', 'Implement text analysis solutions']::text[], NULL, 'published'),
  ('ai103-96', 'ai-103', 96, 'You have a Microsoft Foundry project.  
  
You need to deploy a model from the model catalog to support real-time inference. The solution must meet the following requirements:  
  
- Use key-based authentication.  
- Support real-time REST API access.  
- Must NOT consume the vCPU quota of the virtual machines in the Azure subscription.  
  
Which type of deployment should you use?', '[{"key":"A","text":"serverless API"},{"key":"B","text":"batch"},{"key":"C","text":"self-hosted container"},{"key":"D","text":"standard"}]'::jsonb, ARRAY['A']::text[], 'Việc triển khai Serverless API (Mô hình dưới dạng dịch vụ) trong Azure AI Foundry được Microsoft lưu trữ và tính phí theo mức sử dụng thay vì được cung cấp trên các phiên bản VM chuyên dụng trong đăng ký của khách hàng, vì vậy chúng không được tính từ hạn mức vCPU của đăng ký. Chúng hiển thị điểm cuối API REST thời gian thực và được xác thực bằng khóa API (xác thực dựa trên khóa), đáp ứng tất cả các yêu cầu đã nêu. Ngược lại, triển khai vùng chứa tiêu chuẩn (điện toán được quản lý) và vùng chứa tự lưu trữ cung cấp các phiên bản VM chuyên dụng sử dụng hạn mức vCPU đăng ký và triển khai hàng loạt được thiết kế để xử lý không đồng bộ/ngoại tuyến thay vì lệnh gọi REST theo thời gian thực.

**Tài liệu tham khảo:**
[Deploy models as serverless API deployments - Azure AI Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/how-to/deploy-models-serverless) · [Overview: Deploy models, flows, and web apps with Azure AI Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/concepts/deployments-overview)', 'Plan and manage an Azure AI solution', ARRAY['AI-103', 'Plan and manage an Azure AI solution']::text[], NULL, 'published'),
  ('ai103-97', 'ai-103', 97, 'You have a Microsoft Foundry project. You need to create a customer support agent that meets the following requirements:  
  
- Grounds responses only in company policy documents stored in curated repositories  
- Retains customer preferences across separate chat sessions  
  
How should you configure the agent? Select the appropriate options in the answer area.', '{"type":"matching_dropdown","statements":[{"id":"grounding","text":"Knowledge grounding:","correctAnswer":"A","choiceKeys":["A","B","C"]},{"id":"memory","text":"Memory:","correctAnswer":"E","choiceKeys":["D","E","F"]}],"choices":[{"key":"A","text":"Configure revival from approved data sources."},{"key":"B","text":"Upload the policy documents direct to the agent."},{"key":"C","text":"Embed the policy documents directly into the agent instructions."},{"key":"D","text":"Use orchestration-managed session context."},{"key":"E","text":"Enable agent memory that uses persistent storage."},{"key":"F","text":"Retain user preferences in the state of the client application"}]}'::jsonb, ARRAY['grounding=A', 'memory=E']::text[], 'Đối với grounding, các tác nhân Microsoft Foundry phải được cấu hình để chỉ truy xuất kiến ​​thức từ các nguồn dữ liệu được quản lý, đã được phê duyệt (chẳng hạn như cơ sở kiến ​​thức hoặc chỉ mục được xây dựng từ các kho lưu trữ đã được hiệu đính) thay vì tải tệp trực tiếp lên tác nhân hoặc nhúng nội dung vào các hướng dẫn, cả hai đều bỏ qua các biện pháp kiểm soát quản lý và quản lý ở cấp kho lưu trữ. Đối với bộ nhớ, Microsoft Foundry Agent Service hỗ trợ bộ nhớ tác nhân được hỗ trợ bởi bộ lưu trữ liên tục (ví dụ: kho lưu trữ bộ nhớ được hỗ trợ bởi Cosmos DB), cho phép giữ lại tùy chọn và ngữ cảnh của khách hàng trong các phiên trò chuyện riêng biệt. Bối cảnh phiên được quản lý điều phối chỉ tồn tại trong vòng đời của một phiên/luồng duy nhất và việc lưu trữ các tùy chọn ở trạng thái ứng dụng khách sẽ liên kết việc duy trì với khách hàng đó chứ không phải với tổng đài viên, do đó cả hai đều không đáp ứng yêu cầu lưu giữ giữa các phiên.

**Tài liệu tham khảo:**
- [Overview of Memory - Microsoft Foundry | Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/concepts/what-is-memory)
- [Create and Use Memory - Microsoft Foundry | Microsoft Learn](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/memory-usage)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-98', 'ai-103', 98, 'You have a Microsoft Foundry project containing an agent that generates summaries from retrieved policy documents.  
  
You need to improve the completeness of the agent''s responses. The solution must be implemented in the application code logic, and it must take effect before responses are returned to the caller.  
  
What should you do?', '[{"key":"A","text":"Add a retry evaluation before the responses are returned."},{"key":"B","text":"Decrease the value of the temperature parameter."},{"key":"C","text":"Increase the value of the presence_penalty parameter"},{"key":"D","text":"Replace the model with a smaller deployment."}]'::jsonb, ARRAY['A']::text[], 'Microsoft Foundry cung cấp các công cụ đánh giá chất lượng phản hồi tích hợp sẵn (bao gồm số liệu về tính đầy đủ/tính đầy đủ của câu trả lời) có thể được gọi từ mã ứng dụng để đánh giá phản hồi được tạo trước khi trả lại cho người dùng. Bằng cách thêm bước đánh giá lại trong logic ứng dụng—đánh giá mức độ đầy đủ của phản hồi dự thảo và kích hoạt thử lại (tái tạo hoặc truy xuất bổ sung) khi không đạt ngưỡng—ứng dụng sẽ thực thi tính hoàn chỉnh trong thời gian chạy, trước khi trả về phản hồi cuối cùng. Điều này khác với việc điều chỉnh các tham số lấy mẫu mô hình (nhiệt độ, hiện diện_penalty) hoặc hoán đổi sang một mô hình nhỏ hơn, không có mô hình nào trong số đó là cổng chất lượng trước khi trả về cấp mã và không có mô hình nào đảm bảo tính đầy đủ của phản hồi một cách đáng tin cậy.

**Tài liệu tham khảo:**
- [Agent Evaluators for Generative AI - Microsoft Foundry | Microsoft Learn](https://learn.microsoft.com/en-us/azure/foundry/concepts/evaluation-evaluators/agent-evaluators)
- [Evaluate your AI agents - Microsoft Foundry | Microsoft Learn](https://learn.microsoft.com/en-us/azure/foundry/observability/how-to/evaluate-agent)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-99', 'ai-103', 99, 'You have an Azure subscription.  
  
You are planning to build an application that will use the Azure AI DALL-E model.  
  
You need to deploy the model.  
  
What should you use?', '[{"key":"A","text":"the Azure SDK for Python and PowerShell cmdlets."},{"key":"B","text":"the Azure SDK for JavaScript and Azure Machine Learning Studio."},{"key":"C","text":"Microsoft Foundry and the Azure Command Line Interface (CLI)"},{"key":"D","text":"the Azure portal and Microsoft Graph API"}]'::jsonb, ARRAY['C']::text[], 'Việc triển khai mô hình Azure OpenAI như DALL-E yêu cầu tạo triển khai mô hình bên trong tài nguyên AI Azure OpenAI/Azure. Microsoft Foundry (trải nghiệm cổng thông tin hiện tại dành cho tài nguyên Azure AI/Azure OpenAI) là giao diện chính để tạo và triển khai các mô hình đó, đồng thời Azure CLI (sử dụng tiện ích mở rộng dịch vụ nhận thức, ví dụ: tạo tài khoản triển khai dịch vụ nhận thức az) cung cấp phương thức dòng lệnh/tự động hóa được hỗ trợ để tạo các hoạt động triển khai đó. Sự kết hợp này được ghi lại trong hướng dẫn chính thức của Microsoft về việc triển khai các mô hình trong Microsoft Foundry, trong khi các kết hợp công cụ khác được liệt kê (Azure ML Studio, Microsoft Graph API hoặc ghép nối Python/PowerShell SDK/lệnh ghép ngắn) không phải là cơ chế được hỗ trợ để triển khai mô hình DALL-E của Azure OpenAI.

**Tài liệu tham khảo:**
- [Deploy models using Azure CLI and Bicep - Microsoft Foundry | Microsoft Learn](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/how-to/create-model-deployments)
- [How to Use Image Generation Models from OpenAI - Microsoft Foundry | Microsoft Learn](https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/dall-e)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-100', 'ai-103', 100, 'You are developing a test method to verify results retrieved from a call to the Azure Vision in Foundry Tools API. The call is used to analyze the existence of company logos in images, and it returns a collection of brands named brands. You have the following code segment:  
  
![Question Image](https://cdn.examcademy.com/images/questions/1785303416283-1vw0fjnu.png)  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"type":"statement_matrix","statements":[{"id":"1","text":"The code will display the name of each detected brand with a confidence equal to or higher than 75 percent.","correctAnswer":"Yes"},{"id":"2","text":"The code will display coordinates for the top-left corner of the rectangle that contains the brand logo of the displayed brands.","correctAnswer":"Yes"},{"id":"3","text":"The code will display coordinates for the bottom-right corner of the rectangle that contains the brand logo of the displayed brands.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:Yes', '2:Yes', '3:No']::text[], 'Trong phản hồi phát hiện thương hiệu Azure Vision (Phân tích hình ảnh), mỗi đối tượng thương hiệu được phát hiện bao gồm tên, điểm tin cậy và đối tượng hình chữ nhật có các thuộc tính x, y, w và h. Giá trị x và y biểu thị tọa độ của góc trên cùng bên trái của hộp giới hạn xung quanh logo, trong khi w và h biểu thị chiều rộng và chiều cao của hộp đó — chúng không biểu thị tọa độ của góc dưới cùng bên phải. Để tính góc dưới bên phải, người ta cần tính x + w và y + h, điều mà đoạn mã không thực hiện được; nó chỉ in trực tiếp hình chữ nhật.w và hình chữ nhật.h. Do đó, mã hiển thị chính xác từng tên thương hiệu được phát hiện khi độ tin cậy tối thiểu là 0,75 và hiển thị chính xác tọa độ góc trên cùng bên trái (x, y), nhưng không hiển thị tọa độ góc dưới cùng bên phải.

**Tài liệu tham khảo:**
[Brand detection - Azure Vision in Foundry Tools](https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/concept-brand-detection)', 'Implement computer vision solutions', ARRAY['AI-103', 'Implement computer vision solutions']::text[], 'https://cdn.examcademy.com/images/questions/1785303416283-1vw0fjnu.png', 'published'),
  ('ai103-101', 'ai-103', 101, 'You are creating a Microsoft Foundry project named Project1 that will contain an agent and use an Azure key vault named KV1. You need to configure a connection from Project1 to KV1. How should you complete the Bicep code?  
  
![Question Image](https://cdn.examcademy.com/images/questions/1785303415876-cm82wv7p.png)', '{"type":"matching_dropdown","statements":[{"id":"category","text":"Option 1:","correctAnswer":"B","choiceKeys":["A","B","C"]},{"id":"authType","text":"Option 2:","correctAnswer":"E","choiceKeys":["D","E","F"]}],"choices":[{"key":"A","text":"''AzureAIService''"},{"key":"B","text":"''AzureKeyVault''"},{"key":"C","text":"''AzureOpenAI''"},{"key":"D","text":"''AccountKey''"},{"key":"E","text":"''AccountManagedIdentity''"},{"key":"F","text":"''ApiKey''"}]}'::jsonb, ARRAY['category=B', 'authType=E']::text[], 'Để kết nối tài nguyên hoặc dự án Microsoft Foundry (Azure AI Foundry) với Azure Key Vault do khách hàng sở hữu bằng cách sử dụng Bicept, tài nguyên Microsoft.CognitiveServices/accounts/connections phải chỉ định danh mục: ''AzureKeyVault'', thông báo này cho Foundry biết rằng kết nối này nhắm mục tiêu vào Key Vault thay vì dịch vụ AI hoặc tài nguyên Azure OpenAI. authType phải được đặt thành ''Account ManagedIdentity'' để tài nguyên Foundry xác thực với Key Vault bằng cách sử dụng managed identity thay vì khóa được lưu trữ hoặc khóa API; managed identity sau đó được cấp vai trò RBAC (ví dụ: Nhân viên bí mật của Key Vault) trên kho tiền để Foundry có thể đọc và ghi bí mật. Đây là mẫu chính xác được Microsoft ghi lại để đưa Key Vault của riêng bạn đến tài nguyên Foundry và nó cũng phù hợp với phương pháp hay nhất là sử dụng xác thực dựa trên Microsoft Entra ID (managed identity) thay vì xác thực dựa trên khóa để truy cập Key Vault.

**Tài liệu tham khảo:**
- [Set up an Azure Key Vault Connection - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/how-to/set-up-key-vault-connection)
- [Microsoft.CognitiveServices/accounts/connections reference](https://learn.microsoft.com/en-us/azure/templates/microsoft.cognitiveservices/accounts/connections)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], 'https://cdn.examcademy.com/images/questions/1785303415876-cm82wv7p.png', 'published'),
  ('ai103-102', 'ai-103', 102, 'You are working on a custom named entity recognition (NER) project in Azure Language in Foundry Tools for support tickets. The project schema includes an entity type called ContactInfo.  
  
In the tagged training files, ContactInfo is applied to:  
  
- Phone numbers  
- Email addresses  
- Social media handles  
  
When you evaluate the model, you observe low precision for the ContactInfo entity, including false positives where nearby text is incorrectly extracted as ContactInfo.  
  
You need to improve the precision of the project.  
  
What should you do before retraining the model?', '[{"key":"A","text":"Lower the confidence threshold for ContactInfo."},{"key":"B","text":"Trigger an auto-labeling job."},{"key":"C","text":"Add more support tickets as training data and label more ContactInfo entities."},{"key":"D","text":"Replace ContactInfo by using Phone, Email, and SocialMedia entities. Relabel every matching span."}]'::jsonb, ARRAY['D']::text[], 'Hướng dẫn thiết kế lược đồ NER tùy chỉnh của Azure nêu rõ rằng bạn nên tránh ''các thực thể phức tạp'' — các loại thực thể kết hợp nhiều loại thông tin riêng biệt với các mẫu bề mặt khác nhau — vì các thực thể đó khó để mô hình chọn ra chính xác từ văn bản, dẫn đến nhầm lẫn ranh giới và dương tính giả. Biện pháp khắc phục được ghi lại là chia thực thể phức tạp thành nhiều loại thực thể cụ thể hơn để mỗi loại có mẫu hẹp hơn, nhất quán hơn, yêu cầu ít nhãn hơn để tìm hiểu chính xác (ví dụ chính thức thay thế một thực thể ''Địa chỉ'' bằng ''Tên đường'', ''Hộp thư bưu điện'', ''Thành phố'', ''Tiểu bang'' và ''Mã zip''). Trong dự án này, ContactInfo kết hợp số điện thoại, địa chỉ email và địa chỉ mạng xã hội — ba mẫu văn bản rất khác nhau — dưới một nhãn, đây chính xác là loại thiết kế thực thể phức tạp/mơ hồ gây ra kết quả dương tính giả với văn bản lân cận và độ chính xác thấp. Việc thay thế ContactInfo bằng các thực thể Điện thoại, Email và SocialMedia riêng biệt cũng như gắn nhãn lại các khoảng tương ứng trong dữ liệu đào tạo sẽ giải quyết vấn đề về lược đồ gốc trước khi đào tạo lại, trong khi việc điều chỉnh ngưỡng tin cậy, chạy gắn nhãn tự động hoặc chỉ đơn giản là thêm nhiều dữ liệu đào tạo hơn với cùng một lược đồ thiếu sót sẽ không giải quyết được sự mơ hồ cơ bản.

**Tài liệu tham khảo:**
- [Preparing data and designing a schema for custom named entity recognition (NER) - Foundry Tools | Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-services/language-service/custom-named-entity-recognition/how-to/design-schema)
- [Custom Named Entity Recognition (NER) FAQ - Foundry Tools | Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-services/language-service/custom-named-entity-recognition/faq)', 'Implement information extraction solutions', ARRAY['AI-103', 'Implement information extraction solutions']::text[], NULL, 'published'),
  ('ai103-103', 'ai-103', 103, 'You are building a Python application that collects customer comments before they are posted to a public forum. You need to send a text comment to Azure AI Content Safety and return the self-harm severity value from the response. How should the code be completed?  
  
![Question Image](https://cdn.examcademy.com/images/questions/1785303417103-i4z0h359.png)', '{"type":"matching_dropdown","statements":[{"id":"request","text":"Option 1:","correctAnswer":"C","choiceKeys":["A","B","C","D"]},{"id":"response","text":"Option 2:","correctAnswer":"F","choiceKeys":["E","F","G","H"]}],"choices":[{"key":"A","text":"AnalyzeTextOptions(categories=comment)"},{"key":"B","text":"AnalyzeTextOptions(text=[comment])"},{"key":"C","text":"AnalyzeTextOptions(text=comment)"},{"key":"D","text":"TextCategory.SELF_HARM(comment)"},{"key":"E","text":"client.analyze_image(request)"},{"key":"F","text":"client.analyze_text(request)"},{"key":"G","text":"client.moderate_text(request)"},{"key":"H","text":"client.path(\"/text:analyze\").post(request)"}]}'::jsonb, ARRAY['request=C', 'response=F']::text[], 'Lớp AnalyTextOptions của SDK Python An toàn nội dung Azure AI yêu cầu tham số ''văn bản'' thuộc loại str, do đó, yêu cầu phải được xây dựng dưới dạng Phân tích văn bản(text=comment) — truyền chuỗi thô chứ không phải danh sách và không sử dụng sai tham số ''danh mục'' hoặc cố gắng gọi TextCategory.SELF_HARM làm hàm tạo. Để gửi yêu cầu, ContentSafetyClient hiển thị phương thức analyze_text(request) (analyze_image dành cho hình ảnh, văn bản vừa phải không tồn tại trong SDK này và cú pháp.path(.).post(.) thuộc về ứng dụng khách JavaScript REST chứ không phải SDK Python). Kết quả Phân tích văn bản kết quả hiển thị một bộ sưu tập phân tích danh mục được lọc cho TextCategory.SELF_HARM để thu thập và trả về giá trị mức độ nghiêm trọng của nó, khớp với mẫu được hiển thị trong phần khởi động nhanh Python chính thức về An toàn nội dung của Microsoft.

**Tài liệu tham khảo:**
- [Quickstart: Analyze text content - Azure AI Content Safety](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/quickstart-text)
- [AnalyzeTextOptions Class - Python API reference](https://learn.microsoft.com/en-us/python/api/azure-ai-contentsafety/azure.ai.contentsafety.models.analyzetextoptions)', 'Implement text analysis solutions', ARRAY['AI-103', 'Implement text analysis solutions']::text[], 'https://cdn.examcademy.com/images/questions/1785303417103-i4z0h359.png', 'published'),
  ('ai103-104', 'ai-103', 104, 'You are creating a text-to-speech solution using Azure Speech in Foundry Tools that reads instructions aloud from a script contained in a text file.  
  
You notice that the solution frequently mispronounces technical terms.  
  
You need to stop these incorrect pronunciations from occurring. The solution must minimize development effort.  
  
What should you do?', '[{"key":"A","text":"From Speech Studio, train a custom neural voice"},{"key":"B","text":"Use Speech Synthesis Markup Language (SSML) to specify phonemes."},{"key":"C","text":"Use Speech Synthesis Markup Language (SSML) to apply say as rules."},{"key":"D","text":"Use Speech Synthesis Markup Language (SSML) to adjust the prosody of the voice."},{"key":"E","text":"From Azure OpenAI use the Whisper model."}]'::jsonb, ARRAY['B']::text[], 'Phần tử âm vị SSML cho phép bạn chỉ định cách phát âm chính xác của một từ bằng cách sử dụng bảng chữ cái phiên âm như IPA hoặc SAPI. Điều này trực tiếp giải quyết việc phát âm sai các thuật ngữ kỹ thuật cụ thể mà không tốn nhiều công sức vì bạn chỉ cần chú thích các từ có vấn đề trong mã đánh dấu SSML thay vì đào tạo lại mô hình. Ngược lại, nói như được dùng để diễn giải các loại nội dung (như ngày tháng hoặc số) thay vì sửa cách phát âm, ngữ điệu điều chỉnh cao độ/tốc độ/âm lượng thay vì phát âm, việc đào tạo giọng nói thần kinh tùy chỉnh yêu cầu nỗ lực thu thập dữ liệu và đào tạo mô hình đáng kể và Whisper là mô hình chuyển lời nói thành văn bản, không áp dụng cho vấn đề phát âm chuyển văn bản thành giọng nói.

**Tài liệu tham khảo:**
- [Pronunciation with Speech Synthesis Markup Language (SSML) - Speech service - Foundry Tools | Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speech-synthesis-markup-pronunciation)
- [Phonetic sets for Speech Synthesis Markup Language (SSML) - Microsoft Learn](https://github.com/MicrosoftDocs/azure-ai-docs/blob/main/articles/ai-services/speech-service/speech-ssml-phonetic-sets.md)', 'Implement text analysis solutions', ARRAY['AI-103', 'Implement text analysis solutions']::text[], NULL, 'published'),
  ('ai103-105', 'ai-103', 105, 'You have an Azure subscription. You need to create a new resource that will generate fictional stories in response to user prompts. The solution must ensure that the resource uses a customer-managed key to protect data.  
  
How should you complete the script?  
  
![Question Image](https://cdn.examcademy.com/images/questions/1785303417191-ibxgjlsc.png)', '{"type":"matching_dropdown","statements":[{"id":"kind","text":"Option 1:","correctAnswer":"C","choiceKeys":["A","B","C"]},{"id":"param","text":"Option 2:","correctAnswer":"F","choiceKeys":["D","E","F"]}],"choices":[{"key":"A","text":"AIServices"},{"key":"B","text":"LanguageAuthoring"},{"key":"C","text":"OpenAI"},{"key":"D","text":"--api-properties"},{"key":"E","text":"--assign-identity"},{"key":"F","text":"--encryption"}]}'::jsonb, ARRAY['kind=C', 'param=F']::text[], 'Tạo các câu chuyện hư cấu từ lời nhắc là một nhiệm vụ AI tổng hợp được thực hiện bởi Azure OpenAI Service, vì vậy tài nguyên Dịch vụ nhận thức phải được tạo bằng --kind OpenAI. Để bảo vệ dữ liệu của tài nguyên bằng khóa do khách hàng quản lý, lệnh tạo tài khoản az cognitiveservices sử dụng tham số --encryption, chấp nhận tải trọng JSON chỉ định keySource là Microsoft.KeyVault cùng với keyVaultProperties (keyName, keyVersion, keyVaultUri) — chính xác là cấu trúc được hiển thị trong tập lệnh. --sign-identity chỉ cấp cho tài nguyên managed identity (cần thiết để truy cập Key Vault) nhưng không tự cấu hình mã hóa và --api-properties không liên quan đến cấu hình mã hóa.

**Tài liệu tham khảo:**
- [az cognitiveservices account create](https://learn.microsoft.com/en-us/cli/azure/cognitiveservices/account?view=azure-cli-latest#az-cognitiveservices-account-create)
- [Configure customer-managed keys for Azure AI services](https://learn.microsoft.com/en-us/azure/ai-services/encryption/cognitive-services-encryption-keys-portal)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], 'https://cdn.examcademy.com/images/questions/1785303417191-ibxgjlsc.png', 'published'),
  ('ai103-106', 'ai-103', 106, 'You are developing an application that will detect faulty components produced on a factory production line. The components are specific to your business.  
  
You need to use the Azure Custom Vision API to help detect common faults.  
  
Which three actions should you perform in sequence? Move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.', '{"type":"matching_drag_drop","statements":[{"id":"1","text":"1","correctAnswer":"C"},{"id":"2","text":"2","correctAnswer":"D"},{"id":"3","text":"3","correctAnswer":"B"}],"choices":[{"key":"A","text":"Initialize the training dataset."},{"key":"B","text":"Train the classifier model."},{"key":"C","text":"Create a project."},{"key":"D","text":"Upload and tag images."},{"key":"E","text":"Train the object detection model."}]}'::jsonb, ARRAY['1=C', '2=D', '3=B']::text[], 'Để phát hiện lỗi bằng Azure Custom Vision, trước tiên bạn tạo dự án Custom Vision, chỉ định loại dự án (Phân loại, vì bạn đang xác định xem một thành phần có bị lỗi hay không). Tiếp theo, bạn tải lên hình ảnh đại diện của các thành phần và gắn thẻ chúng (ví dụ: ''bị lỗi'' hoặc ''tốt'') để dịch vụ gắn nhãn dữ liệu đào tạo. Cuối cùng, bạn huấn luyện mô hình phân loại, mô hình này sử dụng các hình ảnh được gắn thẻ để tìm hiểu các đặc điểm hình ảnh giúp phân biệt các thành phần bị lỗi và không bị lỗi. Ở đây, việc đào tạo phát hiện đối tượng là không cần thiết vì mục tiêu là phân loại tình trạng chung của một thành phần chứ không phải để xác định và định vị nhiều đối tượng riêng biệt hoặc vùng khiếm khuyết trong mỗi hình ảnh.

**Tài liệu tham khảo:**
[Quickstart: Build an image classification model with the Custom Vision portal](https://learn.microsoft.com/en-us/azure/ai-services/custom-vision-service/getting-started-build-a-classifier) · [What is Custom Vision?](https://learn.microsoft.com/en-us/azure/ai-services/custom-vision-service/overview)', 'Implement computer vision solutions', ARRAY['AI-103', 'Implement computer vision solutions']::text[], NULL, 'published'),
  ('ai103-107', 'ai-103', 107, 'You are building a new sales system that will process user-generated video and text submitted through a public-facing website.  
  
You plan to notify users that their data has been processed by the sales system.  
  
Which responsible AI principle does this help satisfy?', '[{"key":"A","text":"fairness"},{"key":"B","text":"transparency"},{"key":"C","text":"inclusiveness"},{"key":"D","text":"reliability and safety"}]'::jsonb, ARRAY['B']::text[], 'Tính minh bạch là một trong sáu nguyên tắc AI có trách nhiệm của Microsoft (công bằng, độ tin cậy và an toàn, quyền riêng tư và bảo mật, tính toàn diện, tính minh bạch và trách nhiệm giải trình). Nó yêu cầu các tổ chức phải cởi mở về cách thu thập, sử dụng và lưu trữ dữ liệu cũng như mọi người hiểu cách hệ thống AI xử lý thông tin của họ và đưa ra quyết định. Việc thông báo cho người dùng rằng dữ liệu của họ đã được xử lý sẽ đáp ứng yêu cầu này về tính minh bạch trong việc thu thập và sử dụng dữ liệu, giúp xây dựng lòng tin của người dùng và mang lại những lựa chọn sáng suốt về cách xử lý dữ liệu của họ.

**Tài liệu tham khảo:**
[What is Responsible AI - Azure Machine Learning | Microsoft Learn](https://learn.microsoft.com/en-us/azure/machine-learning/concept-responsible-ai?view=azureml-api-2) · [Responsible AI Principles and Approach | Microsoft AI](https://www.microsoft.com/en-us/ai/principles-and-approach)', 'Plan and manage an Azure AI solution', ARRAY['AI-103', 'Plan and manage an Azure AI solution']::text[], NULL, 'published'),
  ('ai103-108', 'ai-103', 108, 'You are designing a content management system.  
  
You need to ensure that the reading experience is optimized for users who have reduced comprehension and learning differences, such as dyslexia. The solution must minimize development effort.  
  
Which Azure service should you include in the solution?', '[{"key":"A","text":"Azure Document Intelligence in Foundry Tools"},{"key":"B","text":"Azure Language in Foundry Tools"},{"key":"C","text":"Azure AI Immersive Reader"},{"key":"D","text":"Azure Translator in Foundry Tools"}]'::jsonb, ARRAY['C']::text[], 'Azure AI Immersive Reader được thiết kế đặc biệt để cải thiện khả năng đọc hiểu cho những người gặp khó khăn trong học tập như chứng khó đọc, cũng như cho những người đọc và người mới học ngôn ngữ. Nó cung cấp các tính năng trợ năng tích hợp sẵn, đã được chứng minh—đọc to văn bản thành giọng nói, âm tiết, đánh dấu các phần của giọng nói, tiêu điểm dòng, khoảng cách/phông chữ có thể điều chỉnh và từ điển hình ảnh—thông qua thư viện ứng dụng khách và giao diện người dùng sẵn sàng sử dụng, có thể được nhúng vào một ứng dụng với sự phát triển tùy chỉnh tối thiểu. Điều này giúp phân biệt nó với Document Intelligence (trích xuất dữ liệu tài liệu), Ngôn ngữ (các tác vụ NLP chung như phân tích cảm xúc/cụm từ khóa) và Translator (dịch ngôn ngữ), không mục tiêu nào trong số đó nhắm đến khả năng đọc hiểu.

**Tài liệu tham khảo:**
- [What is Azure AI Immersive Reader? - Azure AI services | Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-services/immersive-reader/overview)
- [Azure AI Immersive Reader | Microsoft Azure](https://azure.microsoft.com/en-us/products/ai-services/ai-immersive-reader)', 'Implement text analysis solutions', ARRAY['AI-103', 'Implement text analysis solutions']::text[], NULL, 'published'),
  ('ai103-109', 'ai-103', 109, 'You have an Azure subscription that contains an Azure App Service app named App1.  
  
You provision a Microsoft Foundry Service resource named CSAccount1.  
  
You need to configure App1 to access CSAccount1, using a solution that minimizes administrative effort.  
  
What should you use to configure App1?', '[{"key":"A","text":"the endpoint URI and subscription key"},{"key":"B","text":"the endpoint URI and an OAuth token"},{"key":"C","text":"the endpoint URI and a shared access signature (SAS) token"},{"key":"D","text":"a system assigned managed identity and an X.509 certificate"}]'::jsonb, ARRAY['D']::text[], 'system-assigned managed identity cung cấp cho App1 một managed identity được tạo tự động trong Microsoft Entra ID. Đằng sau hậu trường, Azure phát hành và tự động xoay vòng chứng chỉ X.509 làm thông tin xác thực cho danh tính này, do đó, quản trị viên cần phải tạo, lưu trữ hoặc xoay vòng bí mật no theo cách thủ công. Sau khi bật managed identity, bạn chỉ cần gán vai trò RBAC thích hợp cho danh tính của App1 (chẳng hạn như Người dùng dịch vụ nhận thức) trên CSAccount1 và ứng dụng sẽ xác thực bằng cách sử dụng mã thông báo Microsoft Entra ID có được một cách minh bạch thông qua thông tin xác thực được quản lý này. Cách tiếp cận không cần chìa khóa này yêu cầu ít nỗ lực quản trị liên tục nhất so với việc quản lý khóa đăng ký, mã thông báo OAuth hoặc mã thông báo SAS theo cách thủ công.

**Tài liệu tham khảo:**
- [Managed identities for Azure resources - overview](https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview)
- [How to use managed identities for App Service and Azure Functions](https://learn.microsoft.com/en-us/azure/app-service/overview-managed-identity)', 'Plan and manage an Azure AI solution', ARRAY['AI-103', 'Plan and manage an Azure AI solution']::text[], NULL, 'published'),
  ('ai103-110', 'ai-103', 110, 'You have a web app that uses Azure AI Search.  
  
While reviewing activity, you notice greater than expected search query volumes and suspect that the query key has been compromised.  
  
You need to prevent unauthorized access to the search endpoint while ensuring that users retain read-only access to the documents collection. The solution must minimize app downtime.  
  
Which three actions should you perform, in sequence? Move the appropriate actions from the list into the answer area and arrange them in the correct order.', '{"type":"matching_drag_drop","statements":[{"id":"1","text":"1","correctAnswer":"D"},{"id":"2","text":"2","correctAnswer":"E"},{"id":"3","text":"3","correctAnswer":"F"}],"choices":[{"key":"A","text":"Regenerate the primary admin key"},{"key":"B","text":"Regenerate the secondary admin key"},{"key":"C","text":"Change the app to use the secondary admin key"},{"key":"D","text":"Add a new query key"},{"key":"E","text":"Change the app to use the new key"},{"key":"F","text":"Delete the compromised key"}]}'::jsonb, ARRAY['1=D', '2=E', '3=F']::text[], 'Không thể tạo lại các khóa truy vấn Azure AI Search (không giống như khóa quản trị viên) - có cơ chế xoay vòng chính/phụ no cho chúng. Để thay thế khóa truy vấn bị nghi ngờ bị xâm phạm mà không gây ra thời gian ngừng hoạt động, trước tiên bạn hãy cung cấp khóa truy vấn mới, cập nhật cấu hình ứng dụng để sử dụng khóa mới đó để ứng dụng tiếp tục hoạt động và cuối cùng xóa khóa bị xâm phạm để thu hồi quyền truy cập của nó. Các khóa truy vấn vốn chỉ có thể đọc, do đó phương pháp này đáp ứng yêu cầu người dùng giữ quyền truy cập chỉ đọc vào bộ sưu tập tài liệu trong khi loại bỏ khóa bị lộ.

**Tài liệu tham khảo:**
[Create and manage api keys - Azure AI Search](https://learn.microsoft.com/en-us/azure/search/search-security-api-keys)', 'Plan and manage an Azure AI solution', ARRAY['AI-103', 'Plan and manage an Azure AI solution']::text[], NULL, 'published'),
  ('ai103-111', 'ai-103', 111, 'You have a Microsoft Foundry project containing two agents, named PolicyWriter and RskReviewer.  
  
PolicyWriter produces draft updates for customer policies, and RiskReviewer reviews those drafts.  
  
In the visual builder, create a workflow that meets these requirements:  
  
- Finalize low-risk updates without manual intervention.  
- Ensure predictable execution between the agents.  
- Require user approval for high-risk updates.  
  
What should you configure?', '{"type":"matching_dropdown","statements":[{"id":"orchestration_pattern","text":"Orchestration pattern:","correctAnswer":"A","choiceKeys":["A","B","C"]},{"id":"approval_checkpoints","text":"Approval checkpoints:","correctAnswer":"F","choiceKeys":["D","E","F"]}],"choices":[{"key":"A","text":"The sequential template that passes outputs node by-node"},{"key":"B","text":"The group chat template to dynamically route control between the agents"},{"key":"C","text":"The human-in-the-loop template that pauses execution of the workflow for input"},{"key":"D","text":"Add a Basic chat node."},{"key":"E","text":"Add a Condition statement."},{"key":"F","text":"Add an Ask a question node."}]}'::jsonb, ARRAY['orchestration_pattern=A', 'approval_checkpoints=F']::text[], 'Quy trình làm việc tuần tự của Foundry chuyển kết quả của từng tác nhân sang kết quả tiếp theo theo thứ tự xác định, giúp cho quy trình PolicyWriter-to-RiskReviewer có thể dự đoán được. Nút Hỏi câu hỏi chờ thông tin đầu vào của người dùng, do đó, nút này có thể đóng vai trò là điểm kiểm tra phê duyệt đối với các bản cập nhật có rủi ro cao trong khi các bản cập nhật có rủi ro thấp được tiến hành tự động.

**Tài liệu tham khảo:**
[Build a workflow in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/workflow)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-112', 'ai-103', 112, 'You have a Python application that redacts sensitive information before sending prompt text to a language model. The application contains the following code:  
  
![Question Image](https://cdn.examcademy.com/images/questions/1785303422561-llcsxkxd.png)  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"type":"statement_matrix","statements":[{"id":"1","text":"For sample_text, audit will include entity records for Contact and SSN.","correctAnswer":"No"},{"id":"2","text":"For sample_text, text_for_model will include john.doe@contoso.com and 859-98-0987.","correctAnswer":"Yes"},{"id":"3","text":"For sample_text, text_for_model will contain entity type masks for John Doe and 312-555-1234.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:No', '2:Yes', '3:Yes']::text[], 'Tham số piiCategories trong yêu cầu phát hiện PII Ngôn ngữ Azure AI giới hạn danh mục thực thể nào được dịch vụ phát hiện và trả về — ở đây chỉ có "Người" và "Số điện thoại". Các thực thể bên ngoài các danh mục đó, chẳng hạn như Số an sinh xã hội hoặc địa chỉ email, hoàn toàn không được phát hiện, vì vậy chúng không bao giờ xuất hiện trong doc["entities"] (có nghĩa là quá trình kiểm tra sẽ không bao gồm các bản ghi SSN và ''Liên hệ'' không phải là một thực thể PII ngay từ đầu) và chúng không bao giờ được biên tập lại trong redactedText (vì vậy email và SSN vẫn hiển thị trong text_for_model). Ngược lại, các thực thể được phát hiện trong các danh mục được chỉ định — tên người ''John Doe'' và số điện thoại ''312-555-1234'' — được biên tập lại theo Chính sách redactionMask thực thể, thay thế văn bản thực thể bằng mã thông báo biểu thị loại thực thể của nó (ví dụ: [PERSON_1], [PHONENUMBER_1]) trong đầu ra Văn bản biên tập.

**Tài liệu tham khảo:**
- [Identify and extract Personally Identifiable Information (PII) from text - Azure AI Language](https://learn.microsoft.com/en-us/azure/ai-services/language-service/personally-identifiable-information/how-to/redact-text-pii)
- [What is the Personally Identifiable Information (PII) detection feature in Azure Language?](https://learn.microsoft.com/en-us/azure/ai-services/language-service/personally-identifiable-information/overview)', 'Implement information extraction solutions', ARRAY['AI-103', 'Implement information extraction solutions']::text[], 'https://cdn.examcademy.com/images/questions/1785303422561-llcsxkxd.png', 'published'),
  ('ai103-113', 'ai-103', 113, 'You are developing an application that will use Azure AI Search for internal documents.  
  
You need to implement document-level filtering for Azure AI Search.  
  
Which three actions should you include in the solution? Each correct answer presents part of the solution.  
  
(Choose three.)', '[{"key":"A","text":"Add allowed groups to each index entry"},{"key":"B","text":"Create one index per group."},{"key":"C","text":"Send access tokens from Microsoft Entra ID, with the search request."},{"key":"D","text":"Retrieve all the groups."},{"key":"E","text":"Retrieve the group memberships of the user"},{"key":"F","text":"Supply the groups as a filter for the search requests"}]'::jsonb, ARRAY['A', 'E', 'F']::text[], 'Azure AI Search không cung cấp bảo mật cấp hàng hoặc cấp tài liệu tích hợp, do đó, việc lọc phải được triển khai thủ công bằng cách sử dụng mẫu bộ lọc bảo mật do Microsoft ghi lại. Mẫu này yêu cầu: thêm trường có thể lọc vào từng tài liệu chỉ mục liệt kê ID nhóm (hoặc ID người dùng) được phép xem tài liệu đó; truy xuất tư cách thành viên nhóm của người dùng yêu cầu (ví dụ: thông qua Microsoft Graph hoặc yêu cầu mã thông báo) tại thời điểm truy vấn; và cung cấp các ID nhóm đó dưới dạng biểu thức bộ lọc OData theo yêu cầu tìm kiếm (chẳng hạn như group_ids/any(g:search.in(g, ''group_id1,group_id2''))) để chỉ những tài liệu phù hợp với tư cách thành viên nhóm của người dùng mới được trả về trong kết quả.

**Tài liệu tham khảo:**
[Security filters for trimming results - Azure AI Search](https://learn.microsoft.com/en-us/azure/search/search-security-trimming-for-azure-search) · [Security trimming example using Microsoft Entra ID - Azure AI Search](https://learn.microsoft.com/en-us/azure/search/search-security-trimming-for-azure-search-with-aad)', 'Implement information extraction solutions', ARRAY['AI-103', 'Implement information extraction solutions']::text[], NULL, 'published'),
  ('ai103-114', 'ai-103', 114, 'You need to create a new resource that will be used to perform sentiment analysis and optical character recognition (OCR). The solution must meet the following requirements:  
  
- Use a single key and endpoint to access multiple services.  
- Consolidate billing for future services that you might use.  
- Support the use of Azure Vision in Foundry Tools in the future.  
  
How should you complete the HTTP request to create the new resource?', '{"type":"matching_dropdown","statements":[{"id":"method","text":"Option 1:","correctAnswer":"C","choiceKeys":["A","B","C"]},{"id":"kind","text":"Option 2:","correctAnswer":"D","choiceKeys":["D","E","F"]}],"choices":[{"key":"A","text":"PATCH"},{"key":"B","text":"POST"},{"key":"C","text":"PUT"},{"key":"D","text":"CognitiveServices"},{"key":"E","text":"ComputerVision"},{"key":"F","text":"TextAnalytics"}]}'::jsonb, ARRAY['method=C', 'kind=D']::text[], 'Creating or replacing an Azure resource via the Azure Resource Manager REST API is done with the PUT verb targeting the resource''s URI. Để đáp ứng yêu cầu sử dụng một khóa và điểm cuối cho nhiều dịch vụ AI (Phân tích văn bản để phân tích cảm tính và Thị giác máy tính cho OCR), với tính năng thanh toán tổng hợp và hỗ trợ trong tương lai cho Azure AI Vision trong Azure AI Foundry, tài khoản phải được cung cấp dưới dạng tài nguyên Dịch vụ nhận thức đa dịch vụ, được chỉ định bởi "loại": "CognitiveServices". Các loại dịch vụ đơn "ComputerVision" và "TextAnalytics" chỉ cung cấp một dịch vụ cho mỗi dịch vụ và sẽ không đáp ứng yêu cầu về một khóa/điểm cuối, đa dịch vụ.

**Tài liệu tham khảo:**
[Create a Cognitive Services resource - Azure AI services](https://learn.microsoft.com/en-us/azure/ai-services/multi-service-resource) · [Accounts - Create - REST API (Azure Cognitive Services)](https://learn.microsoft.com/en-us/rest/api/aiservices/accountmanagement/accounts/create)', 'Plan and manage an Azure AI solution', ARRAY['AI-103', 'Plan and manage an Azure AI solution']::text[], NULL, 'published'),
  ('ai103-115', 'ai-103', 115, 'You have an Azure AI Search indexer that ingests PDF policy manuals.  
  
Client applications must display page-level citations that include bounding polygons for both text and images.  
  
You need to add a single built-in multimodal content extraction skill to the Azure AI Search skillset. The solution must meet the following requirements:  
  
- Provide text and image location metadata.  
- Extract tables that span multiple pages.  
  
What should you add?', '[{"key":"A","text":"Document Layout"},{"key":"B","text":"Document Extraction"},{"key":"C","text":"Azure Content Understanding"},{"key":"D","text":"GenAI Prompt"}]'::jsonb, ARRAY['A']::text[], 'Kỹ năng Bố cục Tài liệu (Microsoft.Skills.Util.DocumentIntelligenceLayoutSkill) gọi mô hình bố cục Azure Document Intelligence để phân tích cấu trúc tài liệu. Khi tham số extractOptions của nó bao gồm "hình ảnh" và "locationMetadata", mỗi đầu ra của kỹ năng (text_sections và normalized_images) đều bao gồm một đối tượng locationMetadata chứa pageNumber vàboundingPolygons, cung cấp dữ liệu trích dẫn cấp trang chính xác cho cả văn bản và hình ảnh. Vì dựa trên mô hình bố cục Document Intelligence nên nó cũng phát hiện và bảo toàn cấu trúc bảng, bao gồm các bảng trải rộng trên nhiều trang, như một phần của phân tích cấu trúc. Điều này làm cho nó trở thành kỹ năng tích hợp duy nhất đáp ứng cả yêu cầu siêu dữ liệu vị trí văn bản/hình ảnh và yêu cầu trích xuất bảng nhiều trang, không giống như Trích xuất tài liệu (siêu dữ liệu vị trí no), Dấu nhắc GenAI (làm giàu nội dung, không phải trích xuất cấu trúc) hoặc Hiểu nội dung Azure (một dịch vụ/kỹ năng phân tích nội dung riêng biệt không phù hợp với đầu ra đa giác giới hạn dựa trên bố cục cổ điển này).

**Tài liệu tham khảo:**
- [Document Layout Skill - Azure AI Search | Microsoft Learn](https://learn.microsoft.com/en-us/azure/search/cognitive-search-skill-document-intelligence-layout)
- [Tutorial: Multimodal Chunking and Embedding with the Document Layout Skill - Azure AI Search | Microsoft Learn](https://learn.microsoft.com/en-us/azure/search/tutorial-document-layout-multimodal-embeddings)', 'Implement information extraction solutions', ARRAY['AI-103', 'Implement information extraction solutions']::text[], NULL, 'published'),
  ('ai103-116', 'ai-103', 116, 'You are creating an enrichment pipeline that will use Azure AI Search. The knowledge store contains unstructured JSON data and the text from scanned PDF documents.  
  
Which projection type should you use for each data type?', '{"type":"matching_dropdown","statements":[{"id":"json","text":"JSON data:","correctAnswer":"B","choiceKeys":["A","B","C"]},{"id":"text","text":"Extracted text data:","correctAnswer":"A","choiceKeys":["A","B","C"]}],"choices":[{"key":"A","text":"File projection"},{"key":"B","text":"Object projection"},{"key":"C","text":"Table projection"}]}'::jsonb, ARRAY['json=B', 'text=A']::text[], 'Azure AI Search knowledge stores support three projection types, each mapping to a specific Azure Storage destination and data shape. Các phép chiếu bảng ghi vào Azure Table Storage và yêu cầu hình dạng hàng và cột được sơ đồ hóa, phù hợp nhất với đầu ra làm giàu dạng bảng, có cấu trúc. Phép chiếu đối tượng ghi tài liệu JSON vào Azure Blob Storage và được sử dụng khi bạn cần biểu diễn JSON đầy đủ của cây làm giàu hoặc toàn bộ tài liệu - điều này làm cho phép chiếu đối tượng trở thành lựa chọn chính xác cho dữ liệu JSON phi cấu trúc, vì nó bảo toàn cấu trúc JSON mà không buộc nó vào một lược đồ bảng cứng nhắc. Phép chiếu tệp cũng ghi vào Azure Blob Storage nhưng được sử dụng đặc biệt để duy trì nội dung nhị phân được trích xuất/chuẩn hóa từ tài liệu nguồn (chẳng hạn như hình ảnh được chuẩn hóa và văn bản/nội dung bắt nguồn từ tài liệu PDF được quét được xử lý thông qua OCR), khiến cho phép chiếu tệp trở thành lựa chọn chính xác cho dữ liệu văn bản được trích xuất có nguồn gốc từ các tệp PDF được quét. Sự khác biệt này — Bảng dành cho dữ liệu dạng bảng, Đối tượng dành cho toàn bộ tài liệu JSON, Tệp dành cho nội dung nhị phân được trích xuất/chuẩn hóa từ tài liệu nguồn — được ghi lại trong các khái niệm phép chiếu kho kiến ​​thức Azure AI Search.

**Tài liệu tham khảo:**
- [Knowledge store "projections" in Azure AI Search](https://learn.microsoft.com/en-us/azure/search/knowledge-store-projection-overview)
- [Define Projections - Azure AI Search](https://learn.microsoft.com/en-us/azure/search/knowledge-store-projections-examples)', 'Implement information extraction solutions', ARRAY['AI-103', 'Implement information extraction solutions']::text[], NULL, 'published'),
  ('ai103-117', 'ai-103', 117, 'You are building a model to detect objects in images. The performance of the model based on training data is shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1785304946291-8i612741.png)  
  
Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.', '{"type":"matching_dropdown","statements":[{"id":"fp","text":"The percentage of false positives is:","correctAnswer":"A","choiceKeys":["A","B","C","D","E"]},{"id":"recall","text":"The value for the number of true positives divided by the total number of true positives and false negatives is:","correctAnswer":"B","choiceKeys":["A","B","C","D","E"]}],"choices":[{"key":"A","text":"0"},{"key":"B","text":"25"},{"key":"C","text":"30"},{"key":"D","text":"50"},{"key":"E","text":"100"}]}'::jsonb, ARRAY['fp=A', 'recall=B']::text[], 'Độ chính xác được định nghĩa là TP/(TP+FP). Triển lãm cho thấy Độ chính xác = 100,0%, điều này chỉ có thể thực hiện được khi FP = 0, do đó tỷ lệ dương tính giả là 0%. Việc thu hồi được xác định là TP/(TP+FN) và biểu đồ hiển thị Tỷ lệ thu hồi = 25,0%, khớp chính xác với tỷ lệ được mô tả là dương tính thật chia cho tổng số dương tính thật và âm tính giả.

**Tài liệu tham khảo:**
[Evaluate and improve a model - Custom Vision](https://learn.microsoft.com/en-us/azure/ai-services/custom-vision-service/getting-started-improving-your-classifier)', 'Implement computer vision solutions', ARRAY['AI-103', 'Implement computer vision solutions']::text[], 'https://cdn.examcademy.com/images/questions/1785304946291-8i612741.png', 'published'),
  ('ai103-118', 'ai-103', 118, 'You have a Microsoft Foundry project for a support ticket triage app that reads ticket text from a database.  
  
You need to ensure that the app meets the following requirements:  
  
- Compares candidate models by quality, cost, and throughput  
- Prevents hosting model weights in the Azure subscription  
  
What should you configure?', '{"type":"matching_dropdown","statements":[{"id":"model_evaluation","text":"Model evaluation:","correctAnswer":"D","choiceKeys":["A","B","C","D"]},{"id":"deployment_option","text":"Deployment option:","correctAnswer":"G","choiceKeys":["E","F","G","H"]}],"choices":[{"key":"A","text":"Configure private endpoint access."},{"key":"B","text":"Use deployment lists and license tabs."},{"key":"C","text":"Use tool catalog connections and run traces."},{"key":"D","text":"Use model catalog leaderboards and model cards."},{"key":"E","text":"Bring your own model."},{"key":"F","text":"Build a vector index."},{"key":"G","text":"Use a serverless deployment."},{"key":"H","text":"Use a managed compute deployment."}]}'::jsonb, ARRAY['model_evaluation=D', 'deployment_option=G']::text[], 'Mô hình Microsoft Foundry xếp hạng các mô hình điểm chuẩn theo chất lượng, chi phí và thông lượng, cho phép so sánh mô hình ứng viên. Triển khai serverless cung cấp quyền truy cập API vào các mô hình do Microsoft lưu trữ và quản lý, thay vì triển khai trọng số mô hình để tính toán trong đăng ký Azure.

**Tài liệu tham khảo:**
[Model benchmarks and leaderboards in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/model-benchmarks) · [Microsoft Foundry Models overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/foundry-models-overview)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-119', 'ai-103', 119, 'HOTSPOT  
  
You have a collection of press releases saved as PDF files.  
  
You need to extract text from the files and perform sentiment analysis.  
  
Which service should you use for each task?', '{"type":"matching_dropdown","statements":[{"id":"extract_text","text":"Extract text:","correctAnswer":"C","choiceKeys":["A","B","C"]},{"id":"sentiment_analysis","text":"Perform sentiment analysis:","correctAnswer":"E","choiceKeys":["A","D","C","E"]}],"choices":[{"key":"A","text":"Azure AI Search"},{"key":"B","text":"Azure Vision in Foundry Tools"},{"key":"C","text":"Azure Document Intelligence in Foundry Tools"},{"key":"D","text":"Azure AI Computer Vision"},{"key":"E","text":"Azure Language in Foundry Tools"}]}'::jsonb, ARRAY['extract_text=C', 'sentiment_analysis=E']::text[], 'Azure Document Intelligence trích xuất văn bản từ tài liệu PDF thông qua khả năng phân tích tài liệu và OCR. Ngôn ngữ Azure cung cấp phân tích cảm xúc cho văn bản, xác định cảm xúc tích cực, tiêu cực, trung tính và hỗn hợp.

**Tài liệu tham khảo:**
[Azure AI Document Intelligence documentation](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/) · [Sentiment analysis and opinion mining](https://learn.microsoft.com/en-us/azure/ai-services/language-service/sentiment-opinion-mining/overview)', 'Implement information extraction solutions', ARRAY['AI-103', 'Implement information extraction solutions']::text[], NULL, 'published'),
  ('ai103-120', 'ai-103', 120, 'You are creating a Custom Vision model to deploy as part of an iOS app.  
  
You have cat and dog images, and each image contains either a cat or a dog.  
  
You need to use Azure Custom Vision to determine whether an image shows a cat or a dog.  
  
How should you configure the project in the Azure Custom Vision portal?', '{"type":"matching_dropdown","statements":[{"id":"project_types","text":"Project Types:","correctAnswer":"A","choiceKeys":["A","B"]},{"id":"classification_types","text":"Classification Types:","correctAnswer":"C","choiceKeys":["C","D"]},{"id":"domains","text":"Domains:","correctAnswer":"H","choiceKeys":["E","F","G","H","I","J","K","L"]}],"choices":[{"key":"A","text":"Classification"},{"key":"B","text":"Object Detection"},{"key":"C","text":"Multiclass (Single tag per image)"},{"key":"D","text":"Multilabel (Multiple tags per image)"},{"key":"E","text":"Adult"},{"key":"F","text":"Food"},{"key":"G","text":"General"},{"key":"H","text":"General (compact)"},{"key":"I","text":"Landmarks"},{"key":"J","text":"Landmarks (compact)"},{"key":"K","text":"Retail"},{"key":"L","text":"Retail (compact)"}]}'::jsonb, ARRAY['project_types=A', 'classification_types=C', 'domains=H']::text[], 'Phân loại gán nhãn cho toàn bộ hình ảnh, phù hợp với hình ảnh chứa chính xác một con mèo hoặc một con chó. Trình phân loại nhiều lớp phù hợp khi mỗi hình ảnh có chính xác một thẻ. Miền chung nhỏ gọn nhằm mục đích xuất sang thiết bị di động và thiết bị biên, hỗ trợ triển khai trong ứng dụng iOS.

**Tài liệu tham khảo:**
[Microsoft Learn: Build a classifier with Custom Vision](https://learn.microsoft.com/en-us/azure/ai-services/custom-vision-service/getting-started-build-a-classifier) · [Microsoft Learn: Custom Vision domains](https://learn.microsoft.com/en-us/azure/ai-services/custom-vision-service/select-domain)', 'Implement computer vision solutions', ARRAY['AI-103', 'Implement computer vision solutions']::text[], NULL, 'published'),
  ('ai103-121', 'ai-103', 121, 'You are developing an Azure solution that will use Azure Language in Foundry Tools to process sensitive customer data.  
  
You must ensure that only specified Azure processes can access the Language service while minimizing administrative effort.  
  
What should you include in the solution?', '[{"key":"A","text":"Azure Application Gateway"},{"key":"B","text":"a virtual network gateway"},{"key":"C","text":"IPsec rules"},{"key":"D","text":"virtual network rules"}]'::jsonb, ARRAY['D']::text[], 'Các quy tắc mạng của Công cụ Foundry có thể chặn quyền truy cập theo mặc định và chỉ cho phép lưu lượng truy cập bắt nguồn từ các mạng con mạng ảo Azure được phép. Virtual network rules therefore restrict Azure Language service access to the specified Azure workloads without managing individual IPsec configurations.

**Tài liệu tham khảo:**
[Configure Foundry Tools virtual networks](https://learn.microsoft.com/en-us/azure/ai-services/cognitive-services-virtual-networks)', 'Plan and manage an Azure AI solution', ARRAY['AI-103', 'Plan and manage an Azure AI solution']::text[], NULL, 'published'),
  ('ai103-122', 'ai-103', 122, 'You have a Microsoft Foundry project that includes an agent. The agent has a Model Context Protocol (MCP) tool named `kbsearch` that queries a knowledge base stored in Azure AI Search.  
  
Some agent runs produce answers from the base model without calling the knowledge base, resulting in responses that lack grounded citations.  
  
You are given the following code snippet used to run the agent.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1786767511858-jnet4i48.png)  
  
You need to deterministically require the agent to invoke `kbsearch` on every run.  
  
What should you do?', '[{"key":"A","text":"Add the response_format parameter to the create_and_process() method call."},{"key":"B","text":"Replace create_and_process() method with the create_thread_and_process_run() method."},{"key":"C","text":"Add the toolset parameter to the create_and_process() method call."},{"key":"D","text":"Add the tool_choice parameter to the create_and_process() method call."}]'::jsonb, ARRAY['D']::text[], '`tool_choice` là điều khiển cấp độ chạy xác định để yêu cầu lệnh gọi công cụ cụ thể. Setting it in `create_and_process()` to select `kbsearch` prevents the default automatic model decision from bypassing the knowledge-base tool, so responses are grounded in its results.

**Tài liệu tham khảo:**
[What are tools in Foundry Agent Service (classic)](https://learn.microsoft.com/en-za/azure/ai-foundry/agents/how-to/tools/overview?view=foundry-classic)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], 'https://cdn.examcademy.com/images/questions/1786767511858-jnet4i48.png', 'published'),
  ('ai103-123', 'ai-103', 123, 'HOTSPOT  
  
You run the following command.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1786767512062-v1ye8uok.png)  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"type":"statement_matrix","statements":[{"id":"1","text":"Going to http://localhost:5000/status will query the Azure endpoint to verify whether the API key used to start the container is valid.","correctAnswer":"No"},{"id":"2","text":"The container logging provider will write log data.","correctAnswer":"No"},{"id":"3","text":"Going to http://localhost:5000/swagger will provide the details to access the documentation for the available endpoints.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:No', '2:No', '3:Yes']::text[], 'GET /status xác thực khóa API khởi động mà không thực hiện truy vấn điểm cuối, vì vậy câu lệnh đầu tiên là sai. Nhà cung cấp ghi nhật ký No hoặc giá đỡ đầu ra được định cấu hình; ghi nhật ký đĩa yêu cầu cả cấu hình và giá trị đầu ra, vì vậy câu lệnh thứ hai là sai. Điểm cuối /swagger cung cấp tài liệu cho các điểm cuối vùng chứa, vì vậy câu lệnh thứ ba là đúng.

**Tài liệu tham khảo:**
[Install and run Docker containers for Sentiment Analysis - Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-services/language-service/sentiment-opinion-mining/how-to/use-containers) · [Configure containers - Language service - Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-services/language-service/concepts/configure-containers)', 'Implement text analysis solutions', ARRAY['AI-103', 'Implement text analysis solutions']::text[], 'https://cdn.examcademy.com/images/questions/1786767512062-v1ye8uok.png', 'published'),
  ('ai103-124', 'ai-103', 124, 'You are developing an app that will give users definitions of common AI terms.  
  
You create the following Python code.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1786767513061-wlqjq4bh.png)  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"type":"statement_matrix","statements":[{"id":"1","text":"The response will contain an explanation of large language models (LLMs) that has a high degree of certainty.","correctAnswer":"No"},{"id":"2","text":"Changing \"What is an LLM?\" to \"What is an LLM in the context of AI models?\" will produce the intended response.","correctAnswer":"Yes"},{"id":"3","text":"Changing \"You are a helpful assistant.\" to \"You must answer only within the context of AI language models.\" will give a higher likelihood of producing the intended response.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:No', '2:Yes', '3:Yes']::text[], 'Đầu ra của mô hình ngôn ngữ mang tính xác suất, vì vậy một dấu nhắc rộng không thể đảm bảo một lời giải thích nhất định. Making the user prompt more specific supplies clearer context, while a system message that limits the answer’s domain steers the model toward the intended subject and increases the likelihood of the desired response.

**Tài liệu tham khảo:**
[System message design for Azure OpenAI](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/advanced-prompt-engineering)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], 'https://cdn.examcademy.com/images/questions/1786767513061-wlqjq4bh.png', 'published'),
  ('ai103-125', 'ai-103', 125, 'You are creating a text-processing solution.  
  
You have the following function.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1786767512878-y41gmb38.png)  
  
You invoke the function, using the following string as its second argument.  
  
Our tour of London included a visit to Buckingham Palace  
  
What is the function''s output?', '[{"key":"A","text":"London and Buckingham Palace only"},{"key":"B","text":"Tour and visit only"},{"key":"C","text":"Our tour of London included a visit to Buckingham Palace"},{"key":"D","text":"London and Tour only"}]'::jsonb, ARRAY['A']::text[], 'Phân tích văn bản Azure Nhận dạng thực thể được đặt tên trả về các thực thể được nhận dạng từ tài liệu và lặp qua `response.entities` sẽ in `text` của từng thực thể. Luân Đôn được công nhận là một địa điểm và Cung điện Buckingham là địa điểm/cột mốc được đặt tên, vì vậy hai văn bản thực thể đó sẽ được in. [Microsoft Learn: Use the NER client library](https://learn.microsoft.com/en-us/azure/ai-services/language-service/named-entity-recognition/quickstart)

**Tài liệu tham khảo:**
[Microsoft Learn: Use the NER client library](https://learn.microsoft.com/en-us/azure/ai-services/language-service/named-entity-recognition/quickstart) · [Microsoft Learn: Azure Text Analytics client library for Python](https://learn.microsoft.com/en-us/python/api/overview/azure/ai-textanalytics-readme?view=azure-python)', 'Implement text analysis solutions', ARRAY['AI-103', 'Implement text analysis solutions']::text[], 'https://cdn.examcademy.com/images/questions/1786767512878-y41gmb38.png', 'published'),
  ('ai103-126', 'ai-103', 126, 'You have an Azure subscription.  
  
You need to create an app that compares documents for semantic similarity. The solution must satisfy these requirements:  
  
- Return numeric vectors representing the tokens in each document.  
- Minimize development effort.  
  
Which Azure OpenAI model should you use?', '[{"key":"A","text":"GPT-3.5"},{"key":"B","text":"embeddings"},{"key":"C","text":"GPT-4"},{"key":"D","text":"DALL-E"}]'::jsonb, ARRAY['B']::text[], 'Các mô hình nhúng Azure OpenAI tạo ra các biểu diễn vectơ số của văn bản và độ tương tự khoảng cách hoặc cosin giữa các vectơ đó tương quan với độ tương tự về ngữ nghĩa của tài liệu nguồn. Điều này cung cấp khả năng so sánh tài liệu cần thiết mà không cần xây dựng mô hình biểu diễn tùy chỉnh.

**Tài liệu tham khảo:**
[Understand embeddings in Azure OpenAI in Microsoft Foundry Models](https://learn.microsoft.com/en-us/azure/foundry-classic/openai/concepts/understand-embeddings)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-127', 'ai-103', 127, 'You are developing an app that will use the Azure Vision in Foundry Tools API to analyze an image.  
  
You need to configure the request used by the app to determine whether an image is clipart or a line drawing.  
  
How should you complete the request?', '{"type":"matching_dropdown","statements":[{"id":"method","text":"Option 1:","correctAnswer":"C","choiceKeys":["A","B","C"]},{"id":"visualFeatures","text":"Option 2:","correctAnswer":"E","choiceKeys":["D","E","F","G"]}],"choices":[{"key":"A","text":"GET"},{"key":"B","text":"PATCH"},{"key":"C","text":"POST"},{"key":"D","text":"description"},{"key":"E","text":"imageType"},{"key":"F","text":"objects"},{"key":"G","text":"tags"}]}'::jsonb, ARRAY['method=C', 'visualFeatures=E']::text[], 'Hoạt động REST hình ảnh phân tích v3.2 được gọi bằng POST. Việc chọn tính năng hình ảnh ImageType sẽ trả về các phân loại clipart và đường vẽ.

**Tài liệu tham khảo:**
[Analyze Image - REST API (Computer Vision v3.2)](https://learn.microsoft.com/en-us/rest/api/computervision/analyze-image/analyze-image?view=rest-computervision-v3.2)', 'Implement computer vision solutions', ARRAY['AI-103', 'Implement computer vision solutions']::text[], NULL, 'published'),
  ('ai103-128', 'ai-103', 128, 'You are building an app that will use the Speech and Language APIs.  
  
You need to provision resources for the app. The solution must ensure that each service is accessed through a single endpoint and credential.  
  
Which resource type should you create?', '[{"key":"A","text":"Azure Language in Foundry Tools"},{"key":"B","text":"Microsoft Foundry service"},{"key":"C","text":"Azure Speech in Foundry Tools"},{"key":"D","text":"Content Safety in Foundry Control Plane"}]'::jsonb, ARRAY['B']::text[], 'Dịch vụ Microsoft Foundry là tài nguyên đa dịch vụ bao gồm cả Ngôn ngữ và Lời nói. Nó cho phép các dịch vụ đó sử dụng điểm cuối và thông tin xác thực được chia sẻ, không giống như các tài nguyên Ngôn ngữ hoặc Ngôn ngữ dành cho một dịch vụ. Microsoft liệt kê Ngôn ngữ và Lời nói trong số các dịch vụ đi kèm với tài nguyên Foundry.

**Tài liệu tham khảo:**
[Create a Foundry resource](https://learn.microsoft.com/en-us/azure/ai-services/multi-service-resource?tabs=speech)', 'Plan and manage an Azure AI solution', ARRAY['AI-103', 'Plan and manage an Azure AI solution']::text[], NULL, 'published'),
  ('ai103-129', 'ai-103', 129, 'An Azure subscription contains a Microsoft Foundry Service resource named CSAccount1 and a virtual network named VNet1. CSAaccount1 is connected to VNet1.  
  
You need to ensure that only specified resources can access CSAccount1. The solution must satisfy these requirements:  
  
- Prevent external access to CSAccount1.  
- Minimize administrative effort.  
  
Which two actions should you take? Each correct answer is part of the solution.  
  
NOTE: Each correct answer is worth one point.', '[{"key":"A","text":"In CSAccount1, modify the virtual network settings."},{"key":"B","text":"In VNet1, create a virtual subnet."},{"key":"C","text":"In VNet1, enable a service endpoint for CSAccount1."},{"key":"D","text":"In CSAccount1, configure the Access control (IAM) settings."},{"key":"E","text":"In VNet1, modify the virtual network settings."}]'::jsonb, ARRAY['A', 'C']::text[], 'Foundry Tools network rules can deny access by default and allow only selected virtual networks or subnets. Mạng con mạng ảo được phép phải bật Công cụ đúc (`Microsoft.CognitiveServices`) service endpoint, xác định mạng con cho dịch vụ. Định cấu hình cài đặt mạng ảo của tài nguyên và kích hoạt service endpoint do đó hạn chế quyền truy cập mà không yêu cầu quyền nhận dạng riêng hoặc thay đổi mạng không cần thiết.

**Tài liệu tham khảo:**
[Configure Foundry Tools virtual networks](https://learn.microsoft.com/en-us/azure/ai-services/cognitive-services-virtual-networks)', 'Plan and manage an Azure AI solution', ARRAY['AI-103', 'Plan and manage an Azure AI solution']::text[], NULL, 'published'),
  ('ai103-130', 'ai-103', 130, 'You use the Azure Custom Vision service to create a classifier.  
  
After training has finished, you must evaluate the classifier.  
  
Which two metrics are available to review? Each correct answer provides a complete solution.  
  
NOTE: Each correct choice is worth one point.', '[{"key":"A","text":"F-score"},{"key":"B","text":"area under the curve (AUC)"},{"key":"C","text":"precision"},{"key":"D","text":"weighted accuracy"},{"key":"E","text":"recall"}]'::jsonb, ARRAY['C', 'E']::text[], 'Azure Custom Vision tính toán và hiển thị độ chính xác cũng như thu hồi cho bộ phân loại hình ảnh đã được đào tạo. Độ chính xác đo lường tỷ lệ phân loại được dự đoán là chính xác, trong khi thu hồi đo tỷ lệ phân loại thực tế được xác định chính xác.

**Tài liệu tham khảo:**
[Quickstart: Build an image classification model with the Custom Vision portal](https://learn.microsoft.com/en-us/azure/ai-services/custom-vision-service/getting-started-build-a-classifier)', 'Implement computer vision solutions', ARRAY['AI-103', 'Implement computer vision solutions']::text[], NULL, 'published'),
  ('ai103-131', 'ai-103', 131, 'You are developing an app that will contain one million scanned magazine articles. Each article will be saved as an image file.  
  
You need to configure the app to extract text from those images. The solution must minimize development effort.  
  
What should you include in the solution?', '[{"key":"A","text":"Azure Document Intelligence in Foundry Tools"},{"key":"B","text":"the Read API in Azure Vision in Foundry Tools"},{"key":"C","text":"Azure Vision in Foundry Tools Image Analysis"},{"key":"D","text":"Azure Language in Foundry Tools"}]'::jsonb, ARRAY['A']::text[], 'Hướng dẫn OCR của riêng Microsoft vạch ra ranh giới trực tiếp giữa loại đầu vào và dịch vụ được đề xuất: các hình ảnh chung, thực tế như nhãn, biển báo và áp phích nên sử dụng API Azure Vision Read OCR, trong khi các tài liệu kỹ thuật số và văn bản được quét như sách, bài viết và báo cáo nên sử dụng mô hình Document Intelligence Read, được xây dựng có mục đích và tối ưu hóa để tự động hóa quá trình xử lý tài liệu thông minh trên quy mô lớn với API không đồng bộ. Một triệu bài báo trên tạp chí được quét chính xác là kịch bản có quy mô tài liệu, nặng văn bản mà Document Intelligence nhắm đến và việc sử dụng mô hình Đọc dựng sẵn của nó chỉ yêu cầu gọi API được quản lý thay vì xây dựng logic quy trình OCR tùy chỉnh, giúp giảm thiểu nỗ lực phát triển so với các API hình ảnh cấp thấp hơn.

**Tài liệu tham khảo:**
- [OCR - Optical Character Recognition - Foundry Tools | Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/overview-ocr)
- [Document Intelligence read model - Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/prebuilt/read)', 'Implement computer vision solutions', ARRAY['AI-103', 'Implement computer vision solutions']::text[], NULL, 'published'),
  ('ai103-132', 'ai-103', 132, 'You are developing an app that scans confidential documents and uses the Azure Language in Foundry Tools service to analyze their contents.  
  
You provision a Microsoft Foundry Service resource.  
  
Ensure that the app can make requests to the Azure Language in Foundry Tools service endpoint while confidential documents remain on-premises.  
  
Which three actions should you perform, in sequence?', '{"type":"matching_drag_drop","statements":[{"id":"1","text":"1","correctAnswer":"D"},{"id":"2","text":"2","correctAnswer":"G"},{"id":"3","text":"3","correctAnswer":"B"}],"choices":[{"key":"A","text":"Pull an image from Docker Hub."},{"key":"B","text":"Run the container and specify an API key and the Endpoint URL of the Azure AI resource."},{"key":"C","text":"Provision an on-premises Kubernetes cluster that is isolated from the internet."},{"key":"D","text":"Provision an on-premises Kubernetes cluster that has internet connectivity."},{"key":"E","text":"Provision an Azure Kubernetes Service (AKS) resource."},{"key":"F","text":"Run the container and specify an App ID and Client Secret."},{"key":"G","text":"Pull an image from the Microsoft Container Registry (MCR)."}]}'::jsonb, ARRAY['1=D', '2=G', '3=B']::text[], 'Bộ chứa Ngôn ngữ AI của Azure phân tích nội dung cục bộ nên các tài liệu bí mật vẫn được lưu giữ tại chỗ. Một vùng chứa được kết nối cần có kết nối ra bên ngoài để báo cáo thanh toán cho Azure, hình ảnh của nó được lấy từ Microsoft Container Register và phải được khởi động bằng khóa API và điểm cuối tài nguyên Azure AI.

**Tài liệu tham khảo:**
[Use language detection Docker containers on-premises - Foundry Tools](https://learn.microsoft.com/en-us/azure/ai-services/language-service/language-detection/how-to/use-containers) · [Configure containers - Language service - Foundry Tools](https://learn.microsoft.com/en-us/azure/ai-services/language-service/concepts/configure-containers)', 'Implement text analysis solutions', ARRAY['AI-103', 'Implement text analysis solutions']::text[], NULL, 'published'),
  ('ai103-133', 'ai-103', 133, 'You have an Azure OpenAI model called AI1.  
  
You are developing a web app named App1 by using the Azure OpenAI SDK.  
  
You need to configure App1 to connect to AI1.  
  
Which information must you provide?', '[{"key":"A","text":"the deployment name, key, and model name"},{"key":"B","text":"the endpoint, key, and model type"},{"key":"C","text":"the deployment name, endpoint, and key"},{"key":"D","text":"the endpoint, key, and model name"}]'::jsonb, ARRAY['C']::text[], 'Máy khách SDK Azure OpenAI cần điểm cuối tài nguyên Azure OpenAI và khóa API để xác thực khóa API. Yêu cầu cũng phải chỉ định tên triển khai Azure OpenAI; SDK sử dụng tên triển khai đó làm mã định danh mô hình, thay vì tên mô hình hoặc loại mô hình cơ bản.

**Tài liệu tham khảo:**
[How to use vision-enabled chat models - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/gpt-v-quickstart?pivots=rest-api&source=recommendations&tabs=image%2Ccommand-line)

**Tài liệu tham khảo:**
- [How to use vision-enabled chat models - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/gpt-v-quickstart?pivots=rest-api&source=recommendations&tabs=image%2Ccommand-line)', 'Implement generative AI and agentic solutions', ARRAY['AI-103', 'Implement generative AI and agentic solutions']::text[], NULL, 'published'),
  ('ai103-134', 'ai-103', 134, 'You are designing an Azure AI solution to detect defective products on a production line.  
  
You have a real-time video feed and an image library of sample products that were manually approved or rejected.  
  
You need to recommend a service that fulfills the following requirements:  
  
- Monitors the video feed and detects defective products.  
- Can train a new model by using the image library.  
- Minimizes development effort.  
  
What should you recommend?', '[{"key":"A","text":"Azure Vision in Foundry Tools"},{"key":"B","text":"Azure AI Video Indexer"},{"key":"C","text":"Azure AI Custom Vision"},{"key":"D","text":"Azure Machine Learning"}]'::jsonb, ARRAY['C']::text[], 'Azure AI Custom Vision hỗ trợ đào tạo các mô hình phân loại hình ảnh và phát hiện đối tượng tùy chỉnh từ các hình ảnh được gắn nhãn, sau đó triển khai mô hình đã đào tạo để dự đoán. A production-line video feed can be evaluated by submitting frames to that custom model, while the managed training and prediction service minimizes implementation effort compared with building a model in Azure Machine Learning.

**Tài liệu tham khảo:**
[What is Custom Vision? - Foundry Tools | Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-services/custom-vision-service/overview) · [Quickstart: Build an object detector with the Custom Vision website - Foundry Tools | Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-services/custom-vision-service/get-started-build-detector)', 'Implement computer vision solutions', ARRAY['AI-103', 'Implement computer vision solutions']::text[], NULL, 'published'),
  ('ai103-135', 'ai-103', 135, 'HOTSPOT  
  
You are developing a solution that students will use to locate references for essays.  
  
Use the following code as the starting point for the solution.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1787531559190-u9sg14qy.png)  
  
For each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.', '{"type":"statement_matrix","statements":[{"id":"1","text":"The code will detect the language of documents.","correctAnswer":"No"},{"id":"2","text":"The url attribute returned for each linked entity will be a Bing search link.","correctAnswer":"No"},{"id":"3","text":"The matches attribute returned for each linked entity will provide the location in a document where the entity is referenced.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:No', '2:No', '3:Yes']::text[], 'Liên kết thực thể xác định và phân biệt các thực thể và cung cấp URL cho mục nhập cơ sở kiến ​​thức, thường là Wikipedia; nó không phải là một hoạt động phát hiện ngôn ngữ tài liệu. Thực thể được liên kết có thể bao gồm ID tìm kiếm thực thể Bing nhưng `url` của nó là URL trang thực thể chứ không phải liên kết kết quả tìm kiếm Bing. Bộ sưu tập `matches` chứa mỗi lần xuất hiện của thực thể, với các giá trị độ lệch và độ dài xác định vị trí của nó trong tài liệu.

**Tài liệu tham khảo:**
[Entity linking quickstart — Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-services/language-service/entity-linking/quickstart) · [LinkedEntityMatch class — Azure SDK for Python](https://learn.microsoft.com/en-us/python/api/azure-ai-textanalytics/azure.ai.textanalytics.linkedentitymatch?view=azure-python)', 'Implement text analysis solutions', ARRAY['AI-103', 'Implement text analysis solutions']::text[], 'https://cdn.examcademy.com/images/questions/1787531559190-u9sg14qy.png', 'published')
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
