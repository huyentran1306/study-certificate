-- =========================================================================
-- MASTER SQL IMPORT FOR 3 NEW CERTIFICATES: AI-103, AI-200, AB-100 & BADGE CONFIG
-- Total questions: 383 questions (135 + 128 + 120)
-- Run this entire script in your Supabase SQL Editor to populate the DB.
-- =========================================================================

-- =========================================================================
-- CERTIFICATE BADGE STATUSES SCHEMA & CONFIGURATION
-- Creates table cert_badge_statuses and sets initial badge values
-- =========================================================================

CREATE TABLE IF NOT EXISTS public.cert_badge_statuses (
  cert_id TEXT PRIMARY KEY,
  badge TEXT NOT NULL DEFAULT 'none',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

ALTER TABLE public.cert_badge_statuses ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'cert_badge_statuses' AND policyname = 'Allow public read cert_badge_statuses'
  ) THEN
    CREATE POLICY "Allow public read cert_badge_statuses" ON public.cert_badge_statuses
      FOR SELECT USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'cert_badge_statuses' AND policyname = 'Allow public upsert cert_badge_statuses'
  ) THEN
    CREATE POLICY "Allow public upsert cert_badge_statuses" ON public.cert_badge_statuses
      FOR ALL USING (true) WITH CHECK (true);
  END IF;
END $$;

-- Ensure custom_certificates table has badge column
ALTER TABLE public.custom_certificates ADD COLUMN IF NOT EXISTS badge TEXT DEFAULT 'none';

-- Upsert default badge statuses (Verified: GH-300, AZ-900, AI-900, CCA-F, DP-800, ISTQB-AI, AB-731; New: AI-103, AI-200, AB-100)
INSERT INTO public.cert_badge_statuses (cert_id, badge, updated_at)
VALUES
  ('gh-300', 'verified', now()),
  ('az-900', 'verified', now()),
  ('ai-900', 'verified', now()),
  ('cca-f', 'verified', now()),
  ('dp-800', 'verified', now()),
  ('istqb-ai', 'verified', now()),
  ('ab-731', 'verified', now()),
  ('ai-103', 'new', now()),
  ('ai-200', 'new', now()),
  ('ab-100', 'new', now())
ON CONFLICT (cert_id) DO UPDATE SET
  badge = EXCLUDED.badge,
  updated_at = EXCLUDED.updated_at;

BEGIN;

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

-- ============================================================
-- CERTIFICATE: AI-200 - Developing AI Cloud Solutions on Azure
-- Total questions: 128
-- ============================================================

-- 1. Ensure Certificate is registered in custom_certificates table
INSERT INTO public.custom_certificates (
  id, name, code, description, difficulty, estimated_hours, color_class, icon_name, is_vip, is_disabled, badge
) VALUES (
  'ai-200',
  'Developing AI Cloud Solutions on Azure',
  'AI-200',
  'Chinh phục chứng chỉ Microsoft AI-200: Developing AI Cloud Solutions on Azure. Bộ 128 câu hỏi bao quát phát triển giải pháp container hóa, kết nối và tiêu thụ dịch vụ Azure AI, quản trị dữ liệu AI, bảo mật và giám sát.',
  'Trung cấp',
  '12-16 Giờ',
  'bg-gradient-to-br from-violet-700 via-indigo-800 to-slate-950 text-white',
  'Cpu',
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
  ('ai200-1', 'ai-200', 1, 'You manage several versions of a container image in Azure Container Registry.  
  
The production deployment must consistently run the identical image build, even if tags change later.  
  
You need to guarantee predictable, immutable image selection during deployment. What should you do?', '[{"key":"A","text":"Tag the image as production and deploy it by using the production tag."},{"key":"B","text":"Schedule nightly rebuilds of the image."},{"key":"C","text":"Configure deployment to use the latest tag."},{"key":"D","text":"Identify the image by using its SHA digest."}]'::jsonb, ARRAY['D']::text[], 'Hình ảnh vùng chứa manifest digest là mã nhận dạng nội dung SHA-256 duy nhất cho bản dựng hình ảnh chính xác đó. Việc triển khai bằng thông báo sẽ ghim việc triển khai vào hình ảnh đó ngay cả khi một thẻ như `production` hoặc `latest` sau đó được chuyển sang một bản dựng khác. [About Registries, Repositories, Images, and Artifacts – Azure Container Registry](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-concepts)

**Tài liệu tham khảo:**
[About Registries, Repositories, Images, and Artifacts – Azure Container Registry](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-concepts)', 'Develop Containerized Solutions On Azure', ARRAY['AI-200', 'Develop Containerized Solutions On Azure']::text[], NULL, 'published'),
  ('ai200-2', 'ai-200', 2, 'A container in an AKS cluster is restarting repeatedly.  
  
Pod events indicate probe failures, while node-level CPU and memory metrics are normal.  
  
You need to identify the cause of the recurring restarts. What should you do first?', '[{"key":"A","text":"Scale the deployment to more replicas."},{"key":"B","text":"Decrease the initialDelaySeconds for the container liveness probe."},{"key":"C","text":"Drain and reboot the node hosting the pod."},{"key":"D","text":"Inspect the pod events and container logs."}]'::jsonb, ARRAY['D']::text[], 'Lỗi Liveness hoặc readiness probe có thể khiến vùng chứa khởi động lại định kỳ ngay cả khi tài nguyên nút vẫn hoạt động bình thường. Các sự kiện nhóm cung cấp thông tin chi tiết về lỗi thăm dò và nhật ký vùng chứa—đặc biệt là nhật ký từ phiên bản vùng chứa trước đó—cho thấy các lỗi khởi động, điểm cuối và chấm dứt ứng dụng cần thiết để xác định nguyên nhân gốc.

**Tài liệu tham khảo:**
[Troubleshoot pod workload restarts in AKS](https://learn.microsoft.com/en-us/troubleshoot/azure/azure-kubernetes/availability-performance/troubleshoot-pod-workload-restart) · [Troubleshoot app connection issues in an AKS cluster](https://learn.microsoft.com/en-us/troubleshoot/azure/azure-kubernetes/connectivity/connection-issues-application-hosted-aks-cluster)', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-3', 'ai-200', 3, 'You develop a message-processing service that is deployed to Azure Container Apps. The service reads messages from an Azure Service Bus queue.  
  
The solution must minimize costs by ensuring that **no compute resources** are consumed when the queue is empty.  
  
You need to configure scaling for the service.  
  
Which two actions should you take? Each correct answer presents part of the solution.  
  
> NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Increase the scaling rule to allow for the maximum running replica count."},{"key":"B","text":"Configure the scaling rule to allow for the termination of all active replicas."},{"key":"C","text":"Configure a Kubernetes Event-driven Autoscaler rule that monitors queue length."},{"key":"D","text":"Enable HTTP ingress concurrency scaling."}]'::jsonb, ARRAY['B', 'C']::text[], 'Azure Container Apps sử dụng quy tắc chia tỷ lệ tùy chỉnh dựa trên KEDA để chia tỷ lệ trên các thông báo hàng đợi Azure Service Bus. Việc định cấu hình quy tắc KEDA để theo dõi độ dài hàng đợi sẽ bắt đầu các bản sao khi tin nhắn đang chờ xử lý và cho phép tất cả các bản sao chấm dứt cho phép ứng dụng có tỷ lệ về 0 khi hàng đợi trống, loại bỏ mức tiêu thụ điện toán nhàn rỗi.

**Tài liệu tham khảo:**
[Scaling in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/scale-app)', 'Develop Containerized Solutions On Azure', ARRAY['AI-200', 'Develop Containerized Solutions On Azure']::text[], NULL, 'published'),
  ('ai200-4', 'ai-200', 4, 'You configure ACR Tasks to automate container image builds.  
  
Container images must be rebuilt when:  
  
- Application updates occur.  
- Base image updates occur, such as when the underlying OS image is updated.  
- Regular scheduled rebuilds are needed.  
  
You need to configure ACR Tasks to support automated image rebuilds.  
  
Which three triggers should you configure? Each correct answer presents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Timer trigger"},{"key":"B","text":"Source code commit trigger"},{"key":"C","text":"Registry event trigger"},{"key":"D","text":"Base image update trigger"},{"key":"E","text":"Webhook notification trigger"}]'::jsonb, ARRAY['A', 'B', 'D']::text[], 'Nhiệm vụ đăng ký vùng chứa Azure có thể tự động chạy các bản dựng dựa trên các cam kết mã nguồn, cập nhật hình ảnh cơ sở và lịch hẹn giờ. Các trình kích hoạt này lần lượt xử lý các thay đổi của ứng dụng, hình ảnh gốc được cập nhật chẳng hạn như hình ảnh hệ điều hành và các bản dựng lại định kỳ.

**Tài liệu tham khảo:**
[Automate container image builds and maintenance with Azure Container Registry tasks](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-overview) · [Schedule Azure Container Registry (ACR) Tasks](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-scheduled)', 'Develop Containerized Solutions On Azure', ARRAY['AI-200', 'Develop Containerized Solutions On Azure']::text[], NULL, 'published'),
  ('ai200-5', 'ai-200', 5, 'You are developing several microservices to run on Azure Container Apps.  
  
The microservices must permit HTTPS access by using a custom domain.  
  
You need to configure the custom domain in Azure Container Apps.  
  
In which order should you perform the actions?', '{"type":"matching_drag_drop","statements":[{"id":"1","text":"Slot 1:","correctAnswer":"C"},{"id":"2","text":"Slot 2:","correctAnswer":"A"},{"id":"3","text":"Slot 3:","correctAnswer":"E"},{"id":"4","text":"Slot 4:","correctAnswer":"D"},{"id":"5","text":"Slot 5:","correctAnswer":"B"}],"choices":[{"key":"A","text":"Add the custom domain name."},{"key":"B","text":"Bind the certificate."},{"key":"C","text":"Enable ingress."},{"key":"D","text":"Validate the custom domain name."},{"key":"E","text":"Add DNS records to the domain provider."}]}'::jsonb, ARRAY['1=C', '2=A', '3=E', '4=D', '5=B']::text[], 'Azure Container Apps yêu cầu xâm nhập vào điểm cuối miền tùy chỉnh. Việc thêm miền sẽ cung cấp các giá trị được sử dụng để tạo bản ghi định tuyến và quyền sở hữu DNS cần thiết. Azure chỉ có thể xác thực miền sau khi các bản ghi đó được giải quyết và chứng chỉ TLS bị ràng buộc sau khi xác thực thành công để bật HTTPS.

**Tài liệu tham khảo:**
[Custom domain names and free managed certificates in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/custom-domains-managed-certificates)', 'Develop Containerized Solutions On Azure', ARRAY['AI-200', 'Develop Containerized Solutions On Azure']::text[], NULL, 'published'),
  ('ai200-6', 'ai-200', 6, 'You need to increase throughput for simultaneous application requests to PostgreSQL.  
  
What should you implement?', '[{"key":"A","text":"Implement connection pooling."},{"key":"B","text":"Increase shared_buffers."},{"key":"C","text":"Enable read replicas."},{"key":"D","text":"Increase max_connections."}]'::jsonb, ARRAY['A']::text[], 'Nhóm kết nối duy trì và tái sử dụng một tập hợp các kết nối PostgreSQL được kiểm soát, giảm chi phí tạo kết nối nhiều lần và hỗ trợ lưu lượng ứng dụng đồng thời cao với độ trễ thấp hơn. Tài liệu Cơ sở dữ liệu Azure cho PostgreSQL đề xuất một trình tổng hợp kết nối như PgBouncer để quản lý kết nối một cách hiệu quả.

**Tài liệu tham khảo:**
[Azure Database for PostgreSQL flexible server - Connection pooling concepts](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/concepts-connection-pooling)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-7', 'ai-200', 7, 'You need to optimize vector-search queries according to the technical requirements.  
  
What should you do?', '[{"key":"A","text":"Create a B-tree index on metadata filter columns."},{"key":"B","text":"Increase the max_connections parameter."},{"key":"C","text":"Increase the shared_buffers setting."},{"key":"D","text":"Create an IVFFlat index on the embedding column."}]'::jsonb, ARRAY['D']::text[], 'Chỉ mục IVFFlat trên cột nhúng cho phép pgvector tìm kiếm lân cận gần nhất, phân vùng vectơ thành danh sách để tìm kiếm đánh giá các ứng cử viên có khả năng thay vì thực hiện so sánh chính xác với mỗi lần nhúng. Điều này cải thiện độ trễ tìm kiếm vectơ và nên được tạo sau khi nhập hàng loạt để xây dựng chỉ mục nhanh hơn, tối ưu hơn. [Optimize Performance when Using pgvector in Azure Database for PostgreSQL Flexible Server](https://learn.microsoft.com/sk-sk/azure/postgresql/extensions/how-to-optimize-performance-pgvector)

**Tài liệu tham khảo:**
[Optimize Performance when Using pgvector in Azure Database for PostgreSQL Flexible Server](https://learn.microsoft.com/sk-sk/azure/postgresql/extensions/how-to-optimize-performance-pgvector)', 'Develop AI Solutions By Using Azure Data Management Services', ARRAY['AI-200', 'Develop AI Solutions By Using Azure Data Management Services']::text[], NULL, 'published'),
  ('ai200-8', 'ai-200', 8, 'You need to implement the recommendation engine’s semantic-retrieval workflow so that it meets Fabrikam Inc.’s technical and performance requirements.  
  
Which four actions should you take, in sequence?', '{"type":"matching_drag_drop","statements":[{"id":"1","text":"1.","correctAnswer":"C"},{"id":"2","text":"2.","correctAnswer":"E"},{"id":"3","text":"3.","correctAnswer":"F"},{"id":"4","text":"4.","correctAnswer":"B"}],"choices":[{"key":"A","text":"Increase the Redis memory allocation for the caching layer."},{"key":"B","text":"Perform a similarity search using a WHERE clause and the <=> operator."},{"key":"C","text":"Define a table schema with vector and metadata columns."},{"key":"D","text":"Create a B-tree index on the embedding vector columns."},{"key":"E","text":"Load embedding vectors and associated product metadata."},{"key":"F","text":"Configure a Hierarchical Navigable Small World (HNSW) index on the embedding vector columns."}]}'::jsonb, ARRAY['1=C', '2=E', '3=F', '4=B']::text[], 'Lược đồ vectơ và siêu dữ liệu phải tồn tại trước khi có thể tải nội dung nhúng. Việc tải dữ liệu ban đầu trước khi tạo chỉ mục phụ sẽ tối đa hóa thông lượng nhập. Chỉ mục HNSW là chỉ mục lân cận gần nhất pgvector cho vector search có độ trễ thấp; chỉ mục cây B không phải là chỉ mục tương tự vectơ. Truy vấn cuối cùng áp dụng vị từ siêu dữ liệu bắt buộc trong WHERE và sử dụng <=> để sắp xếp độ tương tự khoảng cách cosine.

**Tài liệu tham khảo:**
[pgvector documentation](https://github.com/pgvector/pgvector)', 'Develop AI Solutions By Using Azure Data Management Services', ARRAY['AI-200', 'Develop AI Solutions By Using Azure Data Management Services']::text[], NULL, 'published'),
  ('ai200-9', 'ai-200', 9, 'You need to optimize secure database connectivity from the containerized Recommendation API.  
  
How should you configure the application?', '{"type":"matching_dropdown","statements":[{"id":"authentication","text":"Comply with the authentication policy for database access.","correctAnswer":"B","choiceKeys":["A","B","C"]},{"id":"concurrency","text":"Support high-concurrency requests with minimal latency.","correctAnswer":"E","choiceKeys":["D","E","F"]},{"id":"stability","text":"Protect database stability during traffic spikes.","correctAnswer":"G","choiceKeys":["G","H","I"]}],"choices":[{"key":"A","text":"Use connection pooling library."},{"key":"B","text":"Use managed identity authentication."},{"key":"C","text":"Store credentials in environment variables."},{"key":"D","text":"Use unlimited pool size."},{"key":"E","text":"Use a connection pooling library."},{"key":"F","text":"Increase the database max_connections parameter."},{"key":"G","text":"Configure maximum pool size."},{"key":"H","text":"Enable asynchronous query execution."},{"key":"I","text":"Implement a retry policy with exponential backoff."}]}'::jsonb, ARRAY['authentication=B', 'concurrency=E', 'stability=G']::text[], 'Managed identity loại bỏ thông tin xác thực cơ sở dữ liệu tồn tại lâu dài và đáp ứng yêu cầu Zero Trust. Nhóm kết nối tái sử dụng các kết nối cơ sở dữ liệu đã thiết lập, giảm chi phí thiết lập kết nối theo nhu cầu đồng thời. Kích thước nhóm tối đa giới hạn áp lực kết nối ứng dụng, giúp ngăn chặn lưu lượng truy cập tăng đột biến làm cạn kiệt tài nguyên cơ sở dữ liệu.', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-10', 'ai-200', 10, 'You need to set up the Redis integration for the Recommendation API. Choose the appropriate configurations for each requirement. A configuration may be used once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"slot1","text":"Comply with the defined expiration policy for recommendation results.","correctAnswer":"B"},{"id":"slot2","text":"Support the data integrity and freshness requirement for catalog updates.","correctAnswer":"C"},{"id":"slot3","text":"Meet the search latency target for recurring product requests.","correctAnswer":"D"}],"choices":[{"key":"A","text":"Enable Redis RDB persistence."},{"key":"B","text":"Configure Time to Live on each cache key."},{"key":"C","text":"Publish invalidation events to a Redis channel."},{"key":"D","text":"Implement cache-aside pattern with lazy loading."}]}'::jsonb, ARRAY['slot1=B', 'slot2=C', 'slot3=D']::text[], 'TTL tự động hết hạn các kết quả đề xuất được lưu trong bộ nhớ đệm sau khoảng thời gian được yêu cầu. Việc xuất bản các sự kiện không hợp lệ cho phép loại bỏ kịp thời các mục nhập trong bộ nhớ đệm bị ảnh hưởng bởi siêu dữ liệu danh mục hoặc cập nhật giá, ngăn chặn các đề xuất cũ. Bỏ bộ nhớ đệm bằng tính năng tải chậm cung cấp phản hồi có độ trễ thấp cho các yêu cầu lặp lại thông qua các lần truy cập bộ đệm trong khi chỉ tải dữ liệu bị thiếu từ cửa hàng có thẩm quyền. Tính bền vững của RDB là để phục hồi và duy trì độ bền sau các lỗi Redis, chứ không phải để hết hạn, làm mới hoặc độ trễ yêu cầu định kỳ.

**Tài liệu tham khảo:**
[Cache-Aside Pattern - Azure Architecture Center](https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside) · [What is Azure Managed Redis?](https://learn.microsoft.com/en-us/azure/redis/overview)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-11', 'ai-200', 11, 'You deploy multiple instances of a change feed processor to manage a high ingestion rate in Azure Cosmos DB for NoSQL.  
  
Each processor instance must handle a distinct subset of partitions. You need to make sure the workload is load-balanced across all processor instances.  
  
What should you configure?', '[{"key":"A","text":"indexing precision"},{"key":"B","text":"strong consistency"},{"key":"C","text":"lease container"},{"key":"D","text":"autoscale throughput"}]'::jsonb, ARRAY['C']::text[], 'Bộ chứa cho thuê lưu trữ trạng thái cho thuê và điều phối quyền sở hữu phạm vi phân vùng giữa các phiên bản bộ xử lý nguồn cấp dữ liệu thay đổi. Khi các phiên bản sử dụng cùng một cấu hình container cho thuê, bộ xử lý sẽ phân phối các hợp đồng thuê trên chúng và tự động cân bằng lại khối lượng công việc khi các phiên bản thay đổi.

**Tài liệu tham khảo:**
[Change Feed Processor - Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/change-feed-processor)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-12', 'ai-200', 12, 'An application runs similarity searches across 5 million embeddings kept in Azure Database for PostgreSQL with pgvector. Queries frequently filter by department before they rank results by cosine distance.  
  
P95 latency for vector similarity queries is above the SLA target. Monitoring indicates sustained high CPU utilization during query execution.  
  
You need to lower P95 latency for filtered vector similarity queries.  
  
What should you do?', '[{"key":"A","text":"Create B-tree indexes on frequently filtered metadata columns."},{"key":"B","text":"Store embeddings as JSON."},{"key":"C","text":"Increase embedding dimensionality."},{"key":"D","text":"Increase statement timeout."}]'::jsonb, ARRAY['A']::text[], 'Chỉ mục cây B trên cột siêu dữ liệu vô hướng được lọc thường xuyên như `department` có thể thu hẹp các hàng ứng cử viên một cách hiệu quả trước khi xếp hạng khoảng cách cosine. Việc giảm các hàng phải được xem xét sẽ làm giảm công việc của CPU và cải thiện độ trễ cho mẫu bộ lọc này. Hướng dẫn của Azure cũng khuyến nghị lập chỉ mục và tối ưu hóa kế hoạch truy vấn để cải thiện hiệu suất tìm kiếm pgvector.

**Tài liệu tham khảo:**
[Optimize performance when using pgvector in Azure Database for PostgreSQL flexible server](https://learn.microsoft.com/sk-sk/azure/postgresql/extensions/how-to-optimize-performance-pgvector)', 'Develop AI Solutions By Using Azure Data Management Services', ARRAY['AI-200', 'Develop AI Solutions By Using Azure Data Management Services']::text[], NULL, 'published'),
  ('ai200-13', 'ai-200', 13, 'You store embeddings in a property called `embedding` within an Azure Cosmos DB for NoSQL container.  
  
You must retrieve the five documents most similar to an input embedding.  
  
You need to build the similarity query. What should you do?', '[{"key":"A","text":"Use offset pagination."},{"key":"B","text":"Enforce strong consistency."},{"key":"C","text":"Group by embedding value."},{"key":"D","text":"Limit the number of results."}]'::jsonb, ARRAY['D']::text[], 'Azure Cosmos DB dành cho truy vấn vectơ NoSQL sắp xếp các mục theo `VectorDistance` và sử dụng `TOP N` để trả về số lượng kết quả khớp gần nhất được yêu cầu. Mệnh đề `TOP 5` giới hạn tập kết quả ở năm tài liệu giống nhau nhất; Microsoft khuyên bạn nên sử dụng `TOP N` cho tìm kiếm vectơ để tránh trả về các kết quả không cần thiết.

**Tài liệu tham khảo:**
[Integrated Vector Store - Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search)', 'Develop AI Solutions By Using Azure Data Management Services', ARRAY['AI-200', 'Develop AI Solutions By Using Azure Data Management Services']::text[], NULL, 'published'),
  ('ai200-14', 'ai-200', 14, 'You are building a Java application that will be deployed in Azure. The application stores sensitive data in Azure Cosmos DB.  
  
You need to configure Always Encrypted so that the sensitive data is encrypted within the application.  
  
What should you do first?', '[{"key":"A","text":"Create a customer-managed key (CMK) and store the key in a new Azure Key Vault instance."},{"key":"B","text":"Create a data encryption key (DEK) by using the Azure Cosmos DB SDK and store the key in Azure Cosmos DB."},{"key":"C","text":"Create a Microsoft Entra ID managed identity and assign the identity to a new Azure Key Vault instance."},{"key":"D","text":"Create a new container to include an encryption policy with the JSON properties to be encrypted."}]'::jsonb, ARRAY['A']::text[], 'Azure Cosmos DB Luôn được mã hóa mã hóa dữ liệu bằng DEK được tạo phía máy khách và được lưu trữ trong Cosmos DB. Trước khi DEK đó có thể được lưu trữ, nó phải được bọc bằng CMK; việc triển khai CMK mặc định sử dụng Azure Key Vault. Chính sách mã hóa vùng chứa chỉ được tạo sau khi DEK được yêu cầu tồn tại.

**Tài liệu tham khảo:**
[Use client-side encryption with Always Encrypted for Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/how-to-always-encrypted)', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-15', 'ai-200', 15, 'You are building an AI search API that stores semantic-search results in Redis.  
  
Search results must stay cached for 10 minutes. If the underlying data is modified, cached entries must **not** be returned.  
  
You need to implement a cache-aside strategy that maintains data consistency.  
  
Which two actions should you take? Each correct answer represents part of the solution.  
  
**NOTE:** Each correct selection is worth one point.', '[{"key":"A","text":"Configure a cache notification for key space events."},{"key":"B","text":"Delete related cache keys when the source data changes."},{"key":"C","text":"Implement sliding expiration based on key access."},{"key":"D","text":"Configure a 10-minute Time to Live on each key."}]'::jsonb, ARRAY['B', 'D']::text[], 'Bộ đệm ẩn lưu trữ các mục có TTL để giới hạn thời gian tồn tại của chúng và vô hiệu hóa rõ ràng các khóa bộ đệm bị ảnh hưởng khi dữ liệu nguồn được cập nhật. TTL 10 phút đáp ứng thời lượng bộ đệm cần thiết và việc xóa các khóa liên quan khi thay đổi dữ liệu sẽ buộc lần đọc tiếp theo truy xuất và lưu vào bộ đệm dữ liệu hiện tại thay vì trả về giá trị cũ. Làm lại tài liệu sang một bên trong bộ đệm bằng cách sử dụng TTL cho mỗi khóa cùng với việc xóa khi ghi để vô hiệu hóa rõ ràng.

**Tài liệu tham khảo:**
[Redis cache-aside documentation](https://redis.io/docs/latest/develop/use-cases/cache-aside/)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-16', 'ai-200', 16, 'Embeddings are stored in Redis with keys formatted as `doc:(id)`. Some embeddings are accessed frequently, while others are rarely used.  
  
You need to implement a caching strategy that retains only frequently accessed embeddings in memory.  
  
What should you use?', '[{"key":"A","text":"volatile-ttl"},{"key":"B","text":"allkeys-lru"},{"key":"C","text":"EXPIRE command"},{"key":"D","text":"time-window expiration"}]'::jsonb, ARRAY['B']::text[], 'Chính sách trục xuất `allkeys-lru` của Redis áp dụng cho tất cả các khóa và trục xuất những khóa ít được sử dụng gần đây nhất khi đạt đến giới hạn bộ nhớ được định cấu hình. Điều này giữ cho các phần nhúng được truy cập thường xuyên trong bộ nhớ đồng thời cho phép loại bỏ các phần nhúng hiếm khi được sử dụng.

**Tài liệu tham khảo:**
[Redis key eviction documentation](https://redis.io/docs/latest/develop/reference/eviction/)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-17', 'ai-200', 17, 'You deploy an AI application in multiple Azure regions.  
  
The application must be able to see writes across every region within a predictable time window.  
  
You need to identify the appropriate consistency level.  
  
Which two consistency levels can you use to meet the goal? Each correct answer provides a complete solution.  
  
**NOTE:** Each correct selection is worth one point.', '[{"key":"A","text":"Session"},{"key":"B","text":"Strong"},{"key":"C","text":"Bounded staleness"},{"key":"D","text":"Eventual"}]'::jsonb, ARRAY['B', 'C']::text[], 'Tính nhất quán mạnh mẽ đảm bảo rằng các lần đọc sẽ trả về phiên bản đã cam kết gần đây nhất trên khắp các khu vực, mang lại độ ổn định cho bản sao no. Độ ổn định giới hạn đảm bảo rằng độ trễ đọc do no ghi nhiều hơn khoảng thời gian hoặc số lượng phiên bản tối đa đã được định cấu hình, cung cấp khoảng thời gian làm mới giữa các khu vực có thể dự đoán được.

**Tài liệu tham khảo:**
[Consistency level choices - Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels)', 'Develop AI Solutions By Using Azure Data Management Services', ARRAY['AI-200', 'Develop AI Solutions By Using Azure Data Management Services']::text[], NULL, 'published'),
  ('ai200-18', 'ai-200', 18, 'You are building an event-driven system that responds to new or updated documents in Azure Cosmos DB for NoSQL.  
  
The application must process documents as they are created or updated in a container by using a change feed processor, and it must preserve processor state across runs.  
  
Configure the components required for stateful change feed processing.', '{"type":"matching_dropdown","statements":[{"id":"source","text":"Read changes from the source container.","correctAnswer":"B","choiceKeys":["A","B","C"]},{"id":"state","text":"Store continuation state and partition ownership.","correctAnswer":"A","choiceKeys":["D","A","B"]},{"id":"mode","text":"Process new or updated items in the default change feed mode.","correctAnswer":"F","choiceKeys":["E","F","G"]}],"choices":[{"key":"A","text":"Lease container"},{"key":"B","text":"Monitored container"},{"key":"C","text":"Vector container"},{"key":"D","text":"Indexing container"},{"key":"E","text":"Full scan mode"},{"key":"F","text":"Latest version mode"},{"key":"G","text":"Strong consistency mode"}]}'::jsonb, ARRAY['source=B', 'state=A', 'mode=F']::text[], 'Bộ xử lý nguồn cấp dữ liệu thay đổi sẽ đọc từ vùng chứa được giám sát. Vùng chứa cho thuê của nó lưu trữ các mã thông báo tiếp tục và điều phối quyền sở hữu phân vùng vật lý giữa các phiên bản bộ xử lý. Chế độ nguồn cấp dữ liệu thay đổi mặc định là chế độ phiên bản mới nhất, cung cấp phiên bản mới nhất của các mặt hàng đã được tạo hoặc cập nhật.

**Tài liệu tham khảo:**
[Azure Cosmos DB change feed processor](https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/change-feed-processor) · [Change feed in Azure Cosmos DB for NoSQL](https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/change-feed)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-19', 'ai-200', 19, 'You are developing an application that uses a Python API to run similarity queries against Azure Database for PostgreSQL. The application opens a new database connection for every request.  
  
At peak traffic, the application sometimes cannot open new database sessions, and logs show that the maximum connection count has been reached.  
  
Configure a connection-pooling strategy that reduces connection-establishment overhead and maximizes reuse for this high-concurrency workload.', '{"type":"matching_dropdown","statements":[{"id":"connection_pooling_technology","text":"Connection pooling technology","correctAnswer":"A","choiceKeys":["A","B","C","D"]},{"id":"pooling_mode","text":"Pooling mode","correctAnswer":"H","choiceKeys":["E","F","G","H"]}],"choices":[{"key":"A","text":"PgBouncer"},{"key":"B","text":"Compute tier scaling"},{"key":"C","text":"Automatic vacuum"},{"key":"D","text":"Connection timeout extension"},{"key":"E","text":"Session pooling mode"},{"key":"F","text":"Direct connection mode"},{"key":"G","text":"Statement pooling mode"},{"key":"H","text":"Transaction pooling mode"}]}'::jsonb, ARRAY['connection_pooling_technology=A', 'pooling_mode=H']::text[], 'PGBouncer cung cấp tính năng tổng hợp kết nối PostgreSQL. Chế độ gộp giao dịch của nó trả về một kết nối máy chủ đến nhóm khi giao dịch hoàn tất, do đó, khối lượng công việc ở cấp yêu cầu đồng thời có thể sử dụng lại một nhóm kết nối phụ trợ nhỏ hơn. Điều này tránh việc giữ một kết nối phụ trợ chuyên dụng cho toàn bộ phiên máy khách, giống như việc gộp phiên.

**Tài liệu tham khảo:**
[PgBouncer in Azure Database for PostgreSQL flexible server](https://learn.microsoft.com/en-us/azure/postgresql/connectivity/concepts-pgbouncer)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-20', 'ai-200', 20, 'You are developing a Retrieval-Augmented Generation (RAG) solution for a company. AI responses and embedding vectors are cached in Redis. Configure Redis to meet these requirements:  
  
- AI responses must expire exactly 24 hours after they are cached.  
- Cached embeddings must always reflect the current source data.', '{"type":"matching_dropdown","statements":[{"id":"responses","text":"AI responses must expire exactly 24 hours after they are cached.","correctAnswer":"C","choiceKeys":["A","B","C"]},{"id":"embeddings","text":"Cached embeddings must always reflect the current source data.","correctAnswer":"E","choiceKeys":["D","E","F"]}],"choices":[{"key":"A","text":"Configure allkeys-lru eviction."},{"key":"B","text":"Reset expiration on every read."},{"key":"C","text":"Set a Time to Live (TTL) on each key."},{"key":"D","text":"Configure volatile-lru eviction."},{"key":"E","text":"Delete related keys when the document changes."},{"key":"F","text":"Increase maximum memory allocation."}]}'::jsonb, ARRAY['responses=C', 'embeddings=E']::text[], 'Redis TTL tự động xóa khóa sau khi hết thời gian chờ được định cấu hình, do đó, TTL 24 giờ sẽ thực thi thời gian tồn tại của bộ đệm phản hồi. Phần nhúng có nguồn gốc từ nội dung tài liệu; việc vô hiệu hóa các khóa liên quan khi tài liệu đó thay đổi sẽ ngăn việc cung cấp các vectơ cũ và tạo ra các phần nhúng được làm mới. Việc trục xuất LRU dựa trên áp lực bộ nhớ và không thể đảm bảo độ mới hoặc thời gian hết hạn cố định.

**Tài liệu tham khảo:**
[Redis EXPIRE command](https://redis.io/docs/latest/commands/expire/) · [Redis cache-aside pattern](https://redis.io/docs/latest/develop/use-cases/cache-aside/)', 'Develop AI Solutions By Using Azure Data Management Services', ARRAY['AI-200', 'Develop AI Solutions By Using Azure Data Management Services']::text[], NULL, 'published'),
  ('ai200-21', 'ai-200', 21, 'You are implementing semantic retrieval in Redis. The solution must provide low-latency, approximate nearest-neighbor (ANN) vector similarity search for large-scale AI retrieval workloads.  
  
Choose the appropriate vector schema configuration values.', '{"type":"matching_dropdown","statements":[{"id":"field_type","text":"Field type for embedding","correctAnswer":"C","choiceKeys":["A","B","C"]},{"id":"index_configuration","text":"Index configuration","correctAnswer":"E","choiceKeys":["D","E","F"]}],"choices":[{"key":"A","text":"Numeric"},{"key":"B","text":"Tag"},{"key":"C","text":"Vector"},{"key":"D","text":"Flat index"},{"key":"E","text":"HNSW index"},{"key":"F","text":"Metadata index"}]}'::jsonb, ARRAY['field_type=C', 'index_configuration=E']::text[], 'Các phần nhúng phải được lập chỉ mục dưới dạng trường Vector. HNSW thực hiện tìm kiếm lân cận gần nhất và phù hợp khi khả năng mở rộng và hiệu suất tìm kiếm quan trọng đối với các tập dữ liệu lớn; thay vào đó, chỉ mục FLAT thực hiện tìm kiếm toàn diện và chính xác.

**Tài liệu tham khảo:**
[Redis vector search concepts](https://redis.io/docs/latest/develop/ai/search-and-query/vectors/)', 'Develop AI Solutions By Using Azure Data Management Services', ARRAY['AI-200', 'Develop AI Solutions By Using Azure Data Management Services']::text[], NULL, 'published'),
  ('ai200-22', 'ai-200', 22, 'You are developing a .NET application that uses Azure Cosmos DB for NoSQL to store application data.  
  
The application uses the Azure Cosmos DB for NoSQL SDK to interact with the database account.  
  
The application must perform the following tasks:  
  
- Initialize the connection by using the account endpoint and key.  
- Define shared throughput.  
- Perform create, read, update, and delete (CRUD) operations on items stored in a container.  
  
You need to implement the SDK components required for the application to access and manage data in Azure Cosmos DB for NoSQL. Which SDK components should you use?  
  
Each component may be used once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"initialize_connection","text":"Initialize the connection by using the account endpoint and key.","correctAnswer":"B"},{"id":"define_shared_throughput","text":"Define shared throughput.","correctAnswer":"A"},{"id":"perform_item_crud","text":"Perform item CRUD operations.","correctAnswer":"C"}],"choices":[{"key":"A","text":"Database"},{"key":"B","text":"CosmosClient"},{"key":"C","text":"Container"},{"key":"D","text":"Indexing policy"}]}'::jsonb, ARRAY['initialize_connection=B', 'define_shared_throughput=A', 'perform_item_crud=C']::text[], 'CosmosClient là điểm vào SDK được tạo bằng điểm cuối tài khoản và thông tin xác thực/khóa. Thông lượng được chia sẻ được cung cấp trên cơ sở dữ liệu và được chia sẻ giữa các vùng chứa của nó. Vùng chứa cung cấp các thao tác mục bao gồm tạo, đọc, cập nhật và xóa. Chính sách lập chỉ mục kiểm soát hành vi lập chỉ mục thay vì phục vụ bất kỳ vai trò nào trong số này.

**Tài liệu tham khảo:**
[Get started with Azure Cosmos DB for NoSQL using .NET](https://learn.microsoft.com/en-us/azure/cosmos-db/how-to-dotnet-get-started) · [Set throughput in Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/set-throughput)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-23', 'ai-200', 23, 'An ACA app handles messages from an Azure Storage queue.  
  
The app must automatically scale according to messages in a particular Azure Storage queue by using a Kubernetes Event-driven Autoscaler (KEDA) custom scale rule.  
  
You need to configure the required scale-rule values.  
  
Which two values should you configure? Each correct answer presents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Queue name"},{"key":"B","text":"Polling interval"},{"key":"C","text":"Trigger type"},{"key":"D","text":"Maximum replicas"}]'::jsonb, ARRAY['A', 'C']::text[], 'Quy tắc tỷ lệ Azure Container Apps tùy chỉnh phải chỉ định loại trình chia tỷ lệ KEDA và siêu dữ liệu mà trình chia tỷ lệ đó yêu cầu. Bộ chia tỷ lệ Hàng đợi lưu trữ Azure sử dụng loại trình kích hoạt `azure-queue` và yêu cầu `queueName` đích làm siêu dữ liệu. `pollingInterval` và `maxReplicas` là các cài đặt trên cấu hình thang đo tổng thể của Ứng dụng vùng chứa thay vì các giá trị được yêu cầu trong quy tắc tùy chỉnh.

**Tài liệu tham khảo:**
[Scaling in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/scale-app)', 'Develop Containerized Solutions On Azure', ARRAY['AI-200', 'Develop Containerized Solutions On Azure']::text[], NULL, 'published'),
  ('ai200-24', 'ai-200', 24, 'An Event Grid subscription triggers an Azure Function.  
  
You need to avoid losing events when the endpoint returns an HTTP 400 response.  
  
Which action should you take?', '[{"key":"A","text":"Implement optimistic batching."},{"key":"B","text":"Implement asynchronous handshake validation."},{"key":"C","text":"Configure a dead-letter destination."},{"key":"D","text":"Configure a retry policy."}]'::jsonb, ARRAY['C']::text[], 'Azure Event Grid không thử lại lỗi phân phối HTTP 400 (Yêu cầu Không hợp lệ). Khi đích đến của thư chết được định cấu hình, Lưới sự kiện sẽ gửi sự kiện không thể gửi đến đó thay vì loại bỏ nó, cho phép nó được giữ lại và xử lý sau đó.

**Tài liệu tham khảo:**
[Azure Event Grid message delivery and retry](https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-25', 'ai-200', 25, 'You need to configure Azure Functions to generate vector embeddings in accordance with the planned application architecture.  
  
Which trigger type should you use?', '[{"key":"A","text":"Event Grid"},{"key":"B","text":"Azure Cosmos DB"},{"key":"C","text":"HTTP"},{"key":"D","text":"Service Bus"}]'::jsonb, ARRAY['B']::text[], 'Trình kích hoạt Azure Cosmos DB sử dụng nguồn cấp dữ liệu thay đổi Azure Cosmos DB để phát hiện các tài liệu được chèn và cập nhật cũng như gọi hàm. Điều này hỗ trợ việc tạo hoặc cập nhật các phần nhúng tự động khi Cosmos DB cho các tài liệu được lưu trữ trên máy chủ NoSQL được tạo hoặc cập nhật.

**Tài liệu tham khảo:**
[Azure Cosmos DB trigger for Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2-trigger) · [Serverless event-based architectures with Azure Cosmos DB and Azure Functions](https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/change-feed-functions)', 'Develop AI Solutions By Using Azure Data Management Services', ARRAY['AI-200', 'Develop AI Solutions By Using Azure Data Management Services']::text[], NULL, 'published'),
  ('ai200-26', 'ai-200', 26, 'You need to configure image build automation in accordance with the technical requirements.  
  
Which settings should you configure?', '{"type":"matching_dropdown","statements":[{"id":"trigger","text":"Trigger for container images build","correctAnswer":"C","choiceKeys":["A","B","C"]},{"id":"implementation","text":"Implementation of image builds","correctAnswer":"D","choiceKeys":["D","E","F"]}],"choices":[{"key":"A","text":"Commit"},{"key":"B","text":"Scheduled"},{"key":"C","text":"Base image update"},{"key":"D","text":"ACR Task"},{"key":"E","text":"GitHub workflow"},{"key":"F","text":"Docker Compose configuration"}]}'::jsonb, ARRAY['trigger=C', 'implementation=D']::text[], 'Nhiệm vụ ACR thực thi các bản dựng hình ảnh vùng chứa trong Azure Container Register và tự động xây dựng lại các hình ảnh ứng dụng phụ thuộc khi hình ảnh cơ sở được theo dõi, bao gồm hình ảnh cơ sở trong Docker Hub, được cập nhật. Điều này đáp ứng cả các yêu cầu về tự động hóa phía đăng ký và xây dựng lại hình ảnh cơ sở.

**Tài liệu tham khảo:**
[Automate Container Builds with Azure Container Registry Tasks](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-overview) · [Azure CLI: az acr task](https://learn.microsoft.com/en-us/cli/azure/acr/task?view=azure-cli-latest)', 'Develop Containerized Solutions On Azure', ARRAY['AI-200', 'Develop Containerized Solutions On Azure']::text[], NULL, 'published'),
  ('ai200-27', 'ai-200', 27, 'You need to deploy a batch embedding workload in accordance with the planned application architecture.  
  
What should you use?', '[{"key":"A","text":"YAML-formatted files"},{"key":"B","text":"kubectl run and create commands"},{"key":"C","text":"XML-formatted files"},{"key":"D","text":"az aks commands"}]'::jsonb, ARRAY['A']::text[], 'AKS chạy khối lượng công việc Kubernetes được xác định theo cách khai báo trong tệp kê khai YAML. Tệp kê khai YAML có thể chỉ định tài nguyên khối lượng công việc hàng loạt cần thiết, chẳng hạn như Công việc Kubernetes và được áp dụng cho cụm. Tài liệu Microsoft Learn triển khai các ứng dụng AKS bằng cách chỉ định tệp kê khai YAML với `kubectl apply`.

**Tài liệu tham khảo:**
[Deploy an application to Azure Kubernetes Service (AKS)](https://learn.microsoft.com/en-us/azure/aks/tutorial-kubernetes-deploy-application)', 'Develop AI Solutions By Using Azure Data Management Services', ARRAY['AI-200', 'Develop AI Solutions By Using Azure Data Management Services']::text[], NULL, 'published'),
  ('ai200-28', 'ai-200', 28, 'You are designing an Azure Function to process orders from a new Azure Service Bus queue.  
  
You need to ensure that messages are not processed more than once and that failed messages are retained for investigation.  
  
Which two actions should you implement? Each correct answer presents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Include a dead-letter handling process."},{"key":"B","text":"Process orders by using an HTTP trigger."},{"key":"C","text":"Enable duplicate detection on the queue."},{"key":"D","text":"Enable sessions on Service Bus."}]'::jsonb, ARRAY['A', 'C']::text[], 'Azure Service Bus phát hiện trùng lặp ghi lại ID thông báo cho một cửa sổ được định cấu hình và loại bỏ các lần gửi trùng lặp, hỗ trợ hiệu quả việc phân phối một lần duy nhất cho cửa sổ đó. Quy trình xử lý thư chết sẽ bảo tồn các thư không thể xử lý được trong hàng đợi thư chết để chúng có thể được điều tra.

**Tài liệu tham khảo:**
[Duplicate detection in Azure Service Bus](https://learn.microsoft.com/en-us/azure/service-bus-messaging/duplicate-detection) · [Enable dead lettering for Azure Service Bus queues and subscriptions](https://learn.microsoft.com/en-us/azure/service-bus-messaging/enable-dead-letter)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-29', 'ai-200', 29, 'You are designing an Azure Function app that exposes a public API.  
  
The solution must:  
  
- Validate incoming request data and return results immediately to the caller.  
- Support Microsoft Entra ID authentication.  
- Guarantee idempotent processing when the same request is retried.  
- Scale automatically under variable load.  
- Avoid duplicate processing.  
  
You need to implement a trigger. Which trigger should you use?', '[{"key":"A","text":"Service Bus topic"},{"key":"B","text":"HTTP"},{"key":"C","text":"Azure Event Grid"},{"key":"D","text":"Azure Queue storage"}]'::jsonb, ARRAY['B']::text[], 'Trình kích hoạt HTTP Azure Functions được thiết kế để xây dựng các API không có máy chủ: nó nhận được yêu cầu HTTP và có thể trả về phản hồi HTTP ngay lập tức. Xác thực Azure Functions có thể bảo vệ điểm cuối đó bằng Microsoft Entra ID. Tự động chia tỷ lệ được cung cấp bởi gói lưu trữ Hàm đã chọn, trong khi tính tạm thời và ngăn chặn trùng lặp phải được triển khai trong logic xử lý của API bằng cách ghi lại và nhận dạng một mã định danh yêu cầu ổn định.

**Tài liệu tham khảo:**
[Azure Functions HTTP trigger](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger) · [Azure Functions error handling and retry guidance](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-error-pages)', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-30', 'ai-200', 30, 'A large retail company runs online and physical stores. The company monitors inventory levels in real time to manage stock efficiently across every location. You develop an Azure Event Grid solution to process events produced by the inventory management system deployed in Azure.  
  
You need to implement a subscription filter that can dynamically adapt to seasonal changes in product demand.  
  
Which event filter should you use?', '[{"key":"A","text":"An advanced filter using a Boolean condition that evaluates multiple data fields, including a season field within the event data"},{"key":"B","text":"A prefix filter on the event type field that matches the current season''s name"},{"key":"C","text":"A subscription filter that uses a label filter to include events tagged with seasonal promotional codes"},{"key":"D","text":"A static subject filter that targets events with a subject ending in \"/seasonal/inventory\""}]'::jsonb, ARRAY['A']::text[], 'Tính năng lọc nâng cao Azure Event Grid có thể đánh giá các giá trị trong các trường dữ liệu sự kiện, bao gồm các trường Boolean và có thể áp dụng nhiều bộ lọc nâng cao cho đăng ký sự kiện. Điều này hỗ trợ lọc các sự kiện kiểm kê theo mùa dựa trên trường dữ liệu liên quan đến mùa cùng với dữ liệu sự kiện có liên quan khác. Kết hợp tiền tố chủ đề và loại sự kiện là các bộ lọc dựa trên chuỗi tĩnh và Lưới sự kiện không cung cấp bộ lọc đăng ký nhãn.

**Tài liệu tham khảo:**
[Understand event filtering for Event Grid subscriptions](https://learn.microsoft.com/en-us/azure/event-grid/event-filtering)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-31', 'ai-200', 31, 'You are creating an Azure Function that calls external APIs by supplying an access token for the API. The access token is stored in a secret named `token` in an Azure Key Vault named `mykeyvault`.  
  
You need to make sure that the Azure Function can access the token. Which value should you store in the Azure Functions app configuration?', '[{"key":"A","text":"KeyVault:mykeyvault;Secret:token"},{"key":"B","text":"App:Settings:Secret:mykeyvault:token"},{"key":"C","text":"@Microsoft.KeyVault(SecretUri=https://mykeyvault.vault.azure.net/secrets/token/)"},{"key":"D","text":"AZUREKVCONNSTR_ https://mykeyvault.vault.azure.net/secrets/token/"}]'::jsonb, ARRAY['C']::text[], 'Cài đặt ứng dụng Azure Functions có thể sử dụng tham chiếu Azure Key Vault ở dạng `@Microsoft.KeyVault(SecretUri=<secretUri>)`. URI mặt phẳng dữ liệu đầy đủ cho bí mật `token` trong `mykeyvault` là `https://mykeyvault.vault.azure.net/secrets/token/`; danh tính được định cấu hình của ứng dụng chức năng cũng phải có quyền đọc bí mật đó.

**Tài liệu tham khảo:**
[Use Key Vault references as app settings in Azure App Service, Azure Functions, and Azure Logic Apps (Standard)](https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references)', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-32', 'ai-200', 32, 'You process Azure Service Bus messages that require a dependent call to an external API.  
  
If the API is temporarily unavailable, you must postpone processing the message without increasing its delivery count. You need a way to process the message once the API is available while keeping the message accessible.  
  
Which message action should you take?', '[{"key":"A","text":"Dead-letter"},{"key":"B","text":"Defer"},{"key":"C","text":"Abandon"},{"key":"D","text":"Complete"}]'::jsonb, ARRAY['B']::text[], 'Trì hoãn đặt tin nhắn sang một bên trong hàng đợi chính để truy xuất sau, thường theo số thứ tự của nó, khi việc xử lý tạm thời không thể thực hiện được. Nó tránh được hành vi gửi lại là bỏ qua một tin nhắn bị khóa, làm tăng số lượng gửi; việc hoàn thành sẽ loại bỏ thông báo và việc gửi ký tự chết sẽ chuyển nó sang hàng đợi con có ký tự chết.

**Tài liệu tham khảo:**
[Azure Service Bus message deferral](https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-deferral) · [Azure Service Bus dead-letter queues](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-dead-letter-queues)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-33', 'ai-200', 33, 'You configure an Event Grid event subscription that routes AI file-upload events to an Azure Function endpoint.  
  
Events must be delivered only under these conditions:  
  
- The event path begins with `/uploads/ai/`.  
- The payload property `data.fileType` is `"pdf"`.  
- Undelivered events must be stored for later investigation and reprocessing when the subscriber endpoint cannot accept an event after multiple retries.  
  
You need to configure the filtering and reliability settings. Which configurations should you use?', '{"type":"matching_dropdown","statements":[{"id":"path_prefix_condition","text":"Path prefix condition","correctAnswer":"A","choiceKeys":["A","B","C"]},{"id":"payload_property_condition","text":"Payload property condition","correctAnswer":"B","choiceKeys":["A","B","D"]},{"id":"undelivered_events","text":"Undelivered events","correctAnswer":"F","choiceKeys":["A","E","F"]}],"choices":[{"key":"A","text":"Subject filter"},{"key":"B","text":"Advanced filter"},{"key":"C","text":"Message session"},{"key":"D","text":"Event type filter"},{"key":"E","text":"Duplicate detection"},{"key":"F","text":"Dead-letter destination"}]}'::jsonb, ARRAY['path_prefix_condition=A', 'payload_property_condition=B', 'undelivered_events=F']::text[], 'Tính năng lọc chủ đề của Lưới sự kiện hỗ trợ khớp chủ đề bắt đầu bằng tiền tố được chỉ định, phù hợp với yêu cầu đường dẫn `/uploads/ai/`. Tính năng lọc nâng cao đánh giá các trường dữ liệu sự kiện như `data.fileType` bằng cách sử dụng các toán tử bao gồm cả đẳng thức chuỗi. Đích thư chết lưu trữ các sự kiện không thể gửi được sau khi hết chính sách thử lại đã định cấu hình, cho phép điều tra và xử lý lại sau này.

**Tài liệu tham khảo:**
[Azure Event Grid event filtering](https://learn.microsoft.com/en-us/azure/event-grid/event-filtering) · [Azure Event Grid dead-letter and retry policy](https://learn.microsoft.com/en-us/azure/event-grid/manage-event-delivery)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-34', 'ai-200', 34, 'HOTSPOT -  
  
You are creating an app that uses Event Grid to connect with other services. Your app’s event data will be sent to a serverless function that performs compliance checks and is maintained by your company.  
  
You create a new event subscription at the scope of your resource. The event must be invalidated after a specific period of time.  
  
You need to configure Event Grid. What should you do?', '{"type":"matching_dropdown","statements":[{"id":"webhook_event_delivery","text":"WebHook event delivery","correctAnswer":"A","choiceKeys":["A","B","C"]},{"id":"topic_publishing","text":"Topic publishing","correctAnswer":"D","choiceKeys":["D","E","F"]}],"choices":[{"key":"A","text":"SAS tokens"},{"key":"B","text":"Key authentication"},{"key":"C","text":"Management Access Control"},{"key":"D","text":"ValidationCode handshake"},{"key":"E","text":"ValidationURL handshake"},{"key":"F","text":"JWT token"}]}'::jsonb, ARRAY['webhook_event_delivery=A', 'topic_publishing=D']::text[], 'Mã thông báo chữ ký truy cập chia sẻ (SAS) Azure Event Grid bị giới hạn thời gian: mỗi mã thông báo nhúng một tham số hết hạn và tự động trở thành không hợp lệ khi thời gian đó trôi qua, đó là lý do tại sao mã thông báo SAS (chứ không phải khóa truy cập, vẫn có hiệu lực vô thời hạn cho đến khi được tạo lại theo cách thủ công) được sử dụng để bảo mật việc phân phối sự kiện WebHook khi quyền truy cập phải hết hạn sau một khoảng thời gian đã đặt. Riêng biệt, trước khi Lưới sự kiện phân phối các sự kiện đến điểm cuối của người đăng ký mới, nó phải xác thực quyền sở hữu điểm cuối đó; đối với điểm cuối có mã được tổ chức của chính người đăng ký duy trì, việc này được thực hiện bằng cách bắt tay Mã xác thực đồng bộ, trong đó Lưới sự kiện gửi giá trị Mã xác thực trong sự kiện xác thực đăng ký và mã riêng của điểm cuối sẽ phản hồi mã đó trong phản hồi của nó, trong khi bắt tay URL xác thực không đồng bộ được dành riêng cho các điểm cuối không thể trả về mã theo chương trình, chẳng hạn như các dịch vụ tích hợp mã no của bên thứ ba.

**Tài liệu tham khảo:**
- [Authenticate Azure Event Grid clients using access keys or shared access signatures](https://learn.microsoft.com/en-us/azure/event-grid/authenticate-with-access-keys-shared-access-signatures)
- [Validate webhook endpoints with the Event Grid event schema](https://learn.microsoft.com/en-us/azure/event-grid/end-point-validation-event-grid-events-schema)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-35', 'ai-200', 35, 'You have an Azure Service Bus namespace containing a topic named Topic1.  
  
You plan to create a subscription named Sub1 for Topic1. In Sub1, you plan to filter Topic1 messages by their system properties and apply an action that annotates each filtered message.  
  
How should you configure the filtering?', '{"type":"matching_dropdown","statements":[{"id":"filter_type","text":"Filter type","correctAnswer":"A","choiceKeys":["A","B","C"]},{"id":"filtering_action","text":"Filtering action","correctAnswer":"E","choiceKeys":["D","E","F"]}],"choices":[{"key":"A","text":"Use the SQL type."},{"key":"B","text":"Use the Boolean type."},{"key":"C","text":"Use the Correlation type."},{"key":"D","text":"Copy a message and update its body."},{"key":"E","text":"Copy a message and annotate its metadata."},{"key":"F","text":"Annotate the metadata of the original message."}]}'::jsonb, ARRAY['filter_type=A', 'filtering_action=E']::text[], 'Bộ lọc SQL Azure Service Bus có thể đánh giá các thuộc tính hệ thống cũng như các thuộc tính ứng dụng. Một hành động quy tắc sẽ thực thi trên bản sao của thông báo trùng khớp và có thể sửa đổi các thuộc tính của bản sao đó, do đó, việc sao chép thông báo và chú thích siêu dữ liệu của nó sẽ áp dụng hành động bắt buộc mà không làm thay đổi thông báo được xuất bản ban đầu.

**Tài liệu tham khảo:**
[Azure Service Bus topic filters and actions](https://learn.microsoft.com/en-us/azure/service-bus-messaging/topic-filters)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-36', 'ai-200', 36, 'You plan to develop an Azure Functions app with an HTTP trigger. The app must support the following functionality:  
  
- Event-driven scaling  
- Ability to use custom Linux images for function execution  
  
You need to identify the app''s hosting plan and the maximum time the app function can take to respond to incoming requests.', '{"type":"matching_dropdown","statements":[{"id":"hosting_plan","text":"Hosting plan","correctAnswer":"C","choiceKeys":["A","B","C"]},{"id":"timeout_value","text":"Timeout value","correctAnswer":"D","choiceKeys":["D","E","F"]}],"choices":[{"key":"A","text":"Consumption"},{"key":"B","text":"Dedicated"},{"key":"C","text":"Premium"},{"key":"D","text":"230 seconds"},{"key":"E","text":"10 minutes"},{"key":"F","text":"unlimited"}]}'::jsonb, ARRAY['hosting_plan=C', 'timeout_value=D']::text[], 'Azure Functions Premium hỗ trợ mở rộng quy mô theo sự kiện và hình ảnh vùng chứa Linux tùy chỉnh. Bất kể thời gian chờ thực thi hàm đã định cấu hình là bao nhiêu, hàm được kích hoạt HTTP có thời gian phản hồi tối đa 230 giây do hết thời gian chờ của Azure Load Balancer.

**Tài liệu tham khảo:**
[Azure Functions scale and hosting](https://learn.microsoft.com/en-us/azure/azure-functions/functions-scale) · [Azure Functions Premium plan](https://learn.microsoft.com/en-us/azure/azure-functions/functions-premium-plan)', 'Develop Containerized Solutions On Azure', ARRAY['AI-200', 'Develop Containerized Solutions On Azure']::text[], NULL, 'published'),
  ('ai200-37', 'ai-200', 37, 'You are provisioning and configuring a Service Bus processor for AI batch jobs.  
  
The processor must connect to an existing queue, register handlers for message and error processing, and then start receiving messages.  
  
You need to provision and configure the Service Bus processor for message and error handling.  
  
Which four actions should you perform, in sequence?', '{"type":"matching_drag_drop","statements":[{"id":"1","text":"Slot 1:","correctAnswer":"C"},{"id":"2","text":"Slot 2:","correctAnswer":"D"},{"id":"3","text":"Slot 3:","correctAnswer":"A"},{"id":"4","text":"Slot 4:","correctAnswer":"B"}],"choices":[{"key":"A","text":"Register message and error handlers."},{"key":"B","text":"Start the message processor."},{"key":"C","text":"Create the Service Bus client."},{"key":"D","text":"Create the Service Bus processor for the queue."},{"key":"E","text":"Dead-letter failed messages."}]}'::jsonb, ARRAY['1=C', '2=D', '3=A', '4=B']::text[], 'ServiceBusProcessor được tạo từ ServiceBusClient cho hàng đợi mục tiêu. Trình xử lý ProcessMessageAsync và ProcessErrorAsync của nó phải được định cấu hình trước khi bắt đầu xử lý; khởi động bộ xử lý sẽ bắt đầu nhận tin nhắn. Việc viết chữ chết được thực hiện trong khi xử lý một thông báo lỗi riêng lẻ thay vì trong quá trình khởi tạo bộ xử lý.

**Tài liệu tham khảo:**
[ServiceBusProcessor Class (Azure.Messaging.ServiceBus)](https://learn.microsoft.com/en-us/dotnet/api/azure.messaging.servicebus.servicebusprocessor?view=azure-dotnet) · [ServiceBusProcessor.StartProcessingAsync Method](https://learn.microsoft.com/en-us/dotnet/api/azure.messaging.servicebus.servicebusprocessor.startprocessingasync?view=azure-dotnet)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-38', 'ai-200', 38, 'You need to implement a secret-management solution for the Recommendation API that meets Fabrikam Inc.''s security and identity requirements.  
  
Which service should you use?', '[{"key":"A","text":"Container environment variables"},{"key":"B","text":"Azure App Configuration"},{"key":"C","text":"Kubernetes secrets"},{"key":"D","text":"Azure Key Vault"}]'::jsonb, ARRAY['D']::text[], 'Azure Key Vault lưu trữ và kiểm soát tập trung quyền truy cập vào các bí mật. API đề xuất có thể xác thực bằng cách sử dụng managed identity, loại bỏ thông tin xác thực được mã hóa cứng hoặc văn bản thuần túy và Key Vault hỗ trợ các mẫu xoay vòng bí mật tự động.

**Tài liệu tham khảo:**
[Secure your Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/secure-key-vault) · [Understanding autorotation in Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/autorotation)', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-39', 'ai-200', 39, 'You need to troubleshoot connectivity failures between microservices running in AKS.  
  
Which troubleshooting actions should you perform? Each action may be used once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"service_communication","text":"Service fails to communicate with another service.","correctAnswer":"D"},{"id":"pod_restarts","text":"Pod restarts repeatedly.","correctAnswer":"A"},{"id":"readiness_probe","text":"Readiness probe failures are observed.","correctAnswer":"B"}],"choices":[{"key":"A","text":"Inspect container logs."},{"key":"B","text":"Inspect Pod descriptions."},{"key":"C","text":"Inspect Kubernetes events."},{"key":"D","text":"Inspect Kubernetes service endpoints."}]}'::jsonb, ARRAY['service_communication=D', 'pod_restarts=A', 'readiness_probe=B']::text[], 'Điểm cuối dịch vụ cho biết Dịch vụ đã đăng ký các cổng và địa chỉ IP Pod sẵn sàng dự kiến ​​hay chưa. Nhật ký vùng chứa, bao gồm nhật ký từ phiên bản vùng chứa trước đó, cho biết lỗi thoát sau nhiều lần khởi động lại. Mô tả Pod bao gồm thông tin chi tiết về tình trạng và sự kiện của các thăm dò mức độ sẵn sàng không thành công, giúp xác định cấu hình đầu dò hoặc lỗi phản hồi.

**Tài liệu tham khảo:**
[Troubleshoot connections to pods and services within an AKS cluster](https://learn.microsoft.com/en-us/troubleshoot/azure/azure-kubernetes/connectivity/troubleshoot-connection-pods-services-same-cluster) · [Troubleshoot pod workload restarts in AKS](https://learn.microsoft.com/en-us/troubleshoot/azure/azure-kubernetes/availability-performance/troubleshoot-pod-workload-restart)', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-40', 'ai-200', 40, 'You need to implement trace correlation in accordance with the business requirements.  
  
Which three actions should you perform, in sequence?  
  
More than one ordering of the answer choices is correct; any correct ordering receives credit.', '{"type":"matching_drag_drop","statements":[{"id":"1","text":"Slot 1:","correctAnswer":"E"},{"id":"2","text":"Slot 2:","correctAnswer":"B"},{"id":"3","text":"Slot 3:","correctAnswer":"A"}],"choices":[{"key":"A","text":"Redeploy the instrumented services."},{"key":"B","text":"Configure a trace exporter in the OpenTelemetry SDK."},{"key":"C","text":"Call TelemetryClient.TrackEvent() within service methods."},{"key":"D","text":"Implement a view in the OpenTelemetry SDK."},{"key":"E","text":"Instrument the application code by using the OpenTelemetry SDK."}]}'::jsonb, ARRAY['1=E', '2=B', '3=A']::text[], 'Công cụ OpenTelemetry tạo ra các dấu vết phân tán và truyền bá bối cảnh theo dõi giữa các dịch vụ. Trình xuất dấu vết sẽ gửi những dấu vết đó đến chương trình phụ trợ giám sát và việc triển khai lại sẽ áp dụng cấu hình và thiết bị đo đạc mới. Chế độ xem OpenTelemetry áp dụng cho các luồng số liệu, trong khi TelemetryClient.TrackEvent() tạo ra phép đo từ xa sự kiện tùy chỉnh thay vì theo dõi phân tán OpenTelemetry được yêu cầu.

**Tài liệu tham khảo:**
[Enable OpenTelemetry in Application Insights](https://learn.microsoft.com/en-us/azure/azure-monitor/app/opentelemetry-enable) · [Microsoft OpenTelemetry exporter for Azure Monitor](https://learn.microsoft.com/en-us/python/api/overview/azure/monitor-opentelemetry-exporter-readme?view=azure-python-preview)', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-41', 'ai-200', 41, 'You need to configure event-driven scaling for the backend API services to meet the technical requirements.  
  
Which settings should you use for each element? Each setting may be used once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"scaler","text":"Scaler","correctAnswer":"E"},{"id":"trigger_metadata","text":"Trigger metadata","correctAnswer":"D"},{"id":"min_replicas","text":"min-replicas","correctAnswer":"B"}],"choices":[{"key":"A","text":"0"},{"key":"B","text":"1"},{"key":"C","text":"queueLength"},{"key":"D","text":"messageCount"},{"key":"E","text":"Azure Service Bus"},{"key":"F","text":"Azure Container Apps"}]}'::jsonb, ARRAY['scaler=E', 'trigger_metadata=D', 'min_replicas=B']::text[], 'Azure Container Apps hỗ trợ quy tắc tỷ lệ `azure-servicebus` cho hàng đợi Bus dịch vụ, với `messageCount` làm siêu dữ liệu ngưỡng thông báo. Số lượng bản sao tối thiểu là 1 giúp phiên bản API phụ trợ luôn chạy, giảm thiểu độ trễ khi khởi động nguội.

**Tài liệu tham khảo:**
[Scaling in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/scale-app)', 'Develop Containerized Solutions On Azure', ARRAY['AI-200', 'Develop Containerized Solutions On Azure']::text[], NULL, 'published'),
  ('ai200-42', 'ai-200', 42, 'A production Azure Function app connects to an Azure SQL Database. The solution must provide the following functionality:  
  
- Prevent secrets from being exposed in source control.  
- Support secret rotation without redeploying the function app.  
- Avoid downtime during credential updates.  
  
You need to configure secure, maintainable secret management. What should you configure?', '[{"key":"A","text":"Application settings with Key Vault references"},{"key":"B","text":"Environment variables in local.settings.json"},{"key":"C","text":"Hard-coded connection string in the startup class"},{"key":"D","text":"Parameter file stored in source control"}]'::jsonb, ARRAY['A']::text[], 'Tham chiếu Azure Key Vault trong cài đặt ứng dụng lưu trữ thông tin xác thực Azure SQL tập trung thay vì trong các tệp hoặc mã ứng dụng được kiểm soát nguồn. Tham chiếu không có phiên bản sử dụng phiên bản bí mật Key Vault mới nhất sau khi xoay, cho phép ứng dụng Chức năng sử dụng thông tin xác thực đã xoay mà không cần triển khai lại; phiên bản thông tin xác thực có thể vẫn hợp lệ trong quá trình chuyển đổi để tránh bị gián đoạn.

**Tài liệu tham khảo:**
[Use Key Vault references as app settings in Azure App Service, Azure Functions, and Azure Logic Apps (Standard)](https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references)', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-43', 'ai-200', 43, 'An AI platform uses App Configuration for feature flags and endpoint routing.  
  
The platform keeps secrets together with configuration data and does **NOT** support dynamic refresh. The solution must enable dynamic configuration refresh while ensuring secrets are **NOT** stored in App Configuration.  
  
You need to enable secure dynamic configuration management for the platform.  
  
Which three actions should you take? Each correct answer is part of the solution.  
  
**NOTE:** Each correct selection is worth one point.', '[{"key":"A","text":"Allow configuration updates with a polling interval."},{"key":"B","text":"Use managed identity for both App Configuration and Key Vault access."},{"key":"C","text":"Store API keys in Key Vault."},{"key":"D","text":"Use a service principal secret for both App Configuration and Key Vault access."},{"key":"E","text":"Store configuration values in environment variables."}]'::jsonb, ARRAY['A', 'B', 'C']::text[], 'Cấu hình ứng dụng Azure hỗ trợ làm mới động thông qua các lần kiểm tra làm mới được điều chỉnh theo khoảng thời gian đã định cấu hình. Các bí mật như khóa API phải nằm trong Azure Key Vault và được truy cập thông qua tham chiếu Key Vault hoặc tích hợp Key Vault trực tiếp, thay vì được lưu trữ dưới dạng giá trị Cấu hình ứng dụng. managed identity cung cấp xác thực không cần mật khẩu cho cả Cấu hình ứng dụng và Key Vault, tránh bí mật chính của dịch vụ được lưu trữ.

**Tài liệu tham khảo:**
[Azure App Configuration .NET Configuration Provider reference](https://learn.microsoft.com/en-us/azure/azure-app-configuration/reference-dotnet-provider) · [Reload Secrets and Certificates Automatically - Azure App Configuration](https://learn.microsoft.com/en-us/azure/azure-app-configuration/reload-key-vault-secrets-dotnet)', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-44', 'ai-200', 44, 'You are developing an AI application. Its configuration will depend on a dynamically retrieved value for a designated key stored in an Azure App Configuration resource.  
  
You must deploy the application to the test, staging, and production environments, and you need to set a different value in each environment.  
  
Which Azure App Configuration resource feature should you use?', '[{"key":"A","text":"Labels"},{"key":"B","text":"Resource tags"},{"key":"C","text":"Content types"},{"key":"D","text":"Key prefixes"}]'::jsonb, ARRAY['A']::text[], 'Nhãn Cấu hình ứng dụng Azure cho phép nhiều khóa-giá trị có cùng khóa và các giá trị khác nhau. Việc chỉ định các nhãn như Kiểm tra, Dàn dựng và Sản xuất cho phép ứng dụng tải động giá trị tương ứng với môi trường hiện tại của nó.

**Tài liệu tham khảo:**
[Understand Azure App Configuration key-value store](https://learn.microsoft.com/en-us/azure/azure-app-configuration/concept-key-value) · [Use labels to provide per-environment configuration values](https://learn.microsoft.com/en-us/azure/azure-app-configuration/howto-labels-aspnet-core)', 'Develop AI Solutions By Using Azure Data Management Services', ARRAY['AI-200', 'Develop AI Solutions By Using Azure Data Management Services']::text[], NULL, 'published'),
  ('ai200-45', 'ai-200', 45, 'You are building an AI-powered API that retrieves connection strings and API keys from Azure Key Vault.  
  
You must configure a solution that provides the following security capabilities:  
  
- The API must authenticate to Key Vault without storing credentials in any application configuration files.  
- The API identity must have only the minimum permissions required to read secrets.  
- The configuration must limit the blast radius if an identity or credential is compromised.  
  
You need to implement a secure access strategy for the API.  
  
Which two actions should you take? Each correct answer presents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Assign the Key Vault Administrator role at subscription scope."},{"key":"B","text":"Grant the Key Vault Secrets User role at vault scope."},{"key":"C","text":"Use system-assigned managed identity."},{"key":"D","text":"Store a secret value in Azure App Configuration."}]'::jsonb, ARRAY['B', 'C']::text[], 'system-assigned managed identity cung cấp danh tính ứng dụng có thể xác thực với Azure Key Vault mà không cần thông tin xác thực do ứng dụng quản lý. Vai trò Người dùng Bí mật Key Vault cấp quyền đọc nội dung bí mật; việc chỉ định nó ở phạm vi vault sẽ giới hạn quyền truy cập vào vault đó và tuân theo đặc quyền tối thiểu. Quản trị viên Key Vault ở phạm vi đăng ký cấp quyền truy cập quản trị quá mức.

**Tài liệu tham khảo:**
[Authenticate to Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/authentication) · [Grant permission to applications to access an Azure key vault using Azure RBAC](https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide)', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-46', 'ai-200', 46, 'You are developing an AI API that is deployed to ACA. The API needs database credentials stored in Key Vault. Key Vault is configured to use Azure RBAC for access control.  
  
The security team rotates the database credentials periodically. The application must always use the newest version of every credential without redeployment and without exposing secrets in code or configuration.  
  
You need to implement a secure secret-access strategy that prevents credential exposure and retrieves the latest version of each secret at runtime without redeploying the container.  
  
Which three actions should you perform? Each correct answer presents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Configure a Key Vault RBAC role assignment."},{"key":"B","text":"Configure a Key Vault access policy."},{"key":"C","text":"Export the secret during deployment."},{"key":"D","text":"Assign a system-assigned managed identity."},{"key":"E","text":"Retrieve the secret at runtime by using the SDK."}]'::jsonb, ARRAY['A', 'D', 'E']::text[], 'Ủy quyền Azure RBAC yêu cầu gán vai trò Key Vault RBAC, chẳng hạn như Người dùng bí mật Key Vault, để nhận dạng khối lượng công việc; chính sách truy cập Key Vault không phải là mô hình ủy quyền trong cấu hình này. system-assigned managed identity cho phép ứng dụng trong vùng chứa xác thực với Key Vault mà không cần lưu trữ thông tin xác thực. Việc truy xuất URI bí mật chưa được phiên bản thông qua SDK Key Vault trong thời gian chạy sẽ nhận được phiên bản bí mật hiện tại, do đó việc xoay vòng thông tin xác thực không yêu cầu triển khai lại vùng chứa.

**Tài liệu tham khảo:**
[Manage secrets in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/manage-secrets) · [Managed identities in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/managed-identity)', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-47', 'ai-200', 47, 'Solution: Hardcode the API key as an environment variable in the Dockerfile.  
  
Does this solution achieve the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], 'Mã hóa cứng khóa API trong Dockerfile sẽ hiển thị nó thông qua kho lưu trữ nguồn và lịch sử cam kết Git, đồng thời có thể nhúng nó vào hình ảnh vùng chứa. Đối với vùng chứa tùy chỉnh Azure App Service, cài đặt ứng dụng được định cấu hình bên ngoài sẽ được đưa vào vùng chứa dưới dạng các biến môi trường thời gian chạy, cho phép bí mật vẫn ở bên ngoài kho lưu trữ.

**Tài liệu tham khảo:**
[Configure a Custom Container - Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/configure-custom-container)', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-48', 'ai-200', 48, 'Solution: Save the API key as a GitHub repository secret.  
  
Does this solution meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], 'Các bí mật của kho lưu trữ GitHub được thiết kế để sử dụng cho quy trình công việc của GitHub Actions và không được đưa vào vùng chứa Azure App Service khi chạy. Cần có kho lưu trữ bí mật có thể truy cập trong thời gian chạy hoặc cơ chế cấu hình Dịch vụ ứng dụng.', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-49', 'ai-200', 49, 'Solution: Store the API key in Azure Key Vault and reference it through an App Service application setting.  
  
Does this solution meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[], 'Azure App Service có thể giải quyết tham chiếu Azure Key Vault được sử dụng làm cài đặt ứng dụng, cho phép vùng chứa sử dụng khóa API khi chạy. Bí mật được lưu trữ trong Key Vault thay vì trong mã nguồn hoặc lịch sử cam kết Git.

**Tài liệu tham khảo:**
[Use Key Vault references as app settings in Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references)', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-50', 'ai-200', 50, 'Solution: Store environment-specific settings and secrets by using App Configuration with Key Vault references, and access them from the function app through a managed identity.  
  
Does this solution meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[], 'Cấu hình ứng dụng Azure hỗ trợ cấu hình dành riêng cho môi trường, được quản lý tập trung, trong khi các tham chiếu Key Vault giữ các giá trị bí mật trong Azure Key Vault thay vì kiểm soát nguồn. Ứng dụng chức năng managed identity có thể xác thực với Cấu hình ứng dụng và được cấp quyền đọc các bí mật Key Vault được tham chiếu mà không lưu trữ thông tin xác thực trong mã hoặc tệp cấu hình.

**Tài liệu tham khảo:**
[Use App Configuration references for Azure App Service and Azure Functions](https://learn.microsoft.com/en-us/azure/app-service/app-service-configuration-references) · [Azure App Configuration FAQ](https://learn.microsoft.com/en-us/azure/azure-app-configuration/faq)', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-51', 'ai-200', 51, 'Solution: Save production secrets in environment variables defined by the Dockerfile.  
  
Does this solution meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], 'Các biến môi trường do Dockerfile xác định đưa các giá trị bí mật vào hình ảnh vùng chứa hoặc siêu dữ liệu bản dựng của nó, vì vậy chúng không phải là cơ chế an toàn để giữ bí mật ngoài tầm kiểm soát nguồn hoặc để cung cấp các giá trị riêng biệt cho mỗi môi trường. Azure Functions hỗ trợ cấu hình thông qua cài đặt ứng dụng, được hiển thị cho ứng dụng dưới dạng các biến môi trường; bí mật phải được cung cấp thông qua cài đặt ứng dụng dành riêng cho môi trường hoặc kho lưu trữ bí mật được quản lý khi triển khai/thời gian chạy.

**Tài liệu tham khảo:**
[App settings reference for Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/functions-app-settings) · [Configure function app settings in Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/functions-how-to-use-azure-function-app-settings)', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-52', 'ai-200', 52, 'Solution: Save connection strings in the Function app application settings configured through the Azure portal.  
  
Does this solution meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[], 'Các chuỗi kết nối ứng dụng Azure Function và cài đặt ứng dụng được định cấu hình riêng cho từng ứng dụng chức năng và hiển thị với ứng dụng dưới dạng các biến môi trường. Việc giữ các chuỗi kết nối trong cấu hình cổng thông tin Azure hỗ trợ các giá trị trên mỗi môi trường mà không đảm bảo bí mật về kiểm soát nguồn; cài đặt ứng dụng được mã hóa ở phần còn lại.

**Tài liệu tham khảo:**
[Configure function app settings in Azure Functions](https://learn.microsoft.com/en-ie/azure/azure-functions/functions-how-to-use-azure-function-app-settings) · [Develop Azure Functions using Visual Studio](https://learn.microsoft.com/en-us/azure/azure-functions/functions-develop-vs)', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-53', 'ai-200', 53, 'HOTSPOT -  
  
You are reviewing message-processing code in a backend worker service.  
  
Review the following Python code that initializes and starts a Service Bus processor.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1785139237009-aa72xv4x.png)  
  
For each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.', '{"type":"statement_matrix","statements":[{"id":"1","text":"Messages are removed from the queue as soon as they are received by the processor.","correctAnswer":"No"},{"id":"2","text":"If message processing fails due to a transient service error, the message can be retried by another consumer.","correctAnswer":"Yes"},{"id":"3","text":"Messages with invalid JSON payloads are retried until the maximum delivery count is reached.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:No', '2:Yes', '3:No']::text[], 'Peek-Lock giữ lại tin nhắn cho đến khi nó được giải quyết rõ ràng khi hoàn thành, do đó, chỉ việc nhận sẽ không xóa nó. Việc bỏ tin nhắn bị khóa sẽ giải phóng nó để gửi lại cho người nhận. Việc gửi ký tự chết cho một tải trọng không đúng định dạng sẽ chuyển nó trực tiếp đến hàng đợi con có ký tự chết thay vì dựa vào các lần thử gửi lặp lại và số lần gửi tối đa.

**Tài liệu tham khảo:**
[Azure Service Bus client library for Python](https://learn.microsoft.com/en-us/python/api/overview/azure/servicebus-readme?view=azure-python) · [Message Transfers, Locks, and Settlement - Azure Service Bus](https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-transfers-locks-settlement)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], 'https://cdn.examcademy.com/images/questions/1785139237009-aa72xv4x.png', 'published'),
  ('ai200-54', 'ai-200', 54, 'You are developing several microservices to run on Azure Container Apps, with external HTTP ingress enabled.  
  
A deployed microservice must be updated so that users can test new features. The requirements are:  
  
- Enable and retain a single URL for the updated microservice to give test users.  
- Update the microservice that corresponds to the current microservice version.  
  
You need to configure Azure Container Apps. Which features should you configure?', '{"type":"matching_dropdown","statements":[{"id":"single_url_test_users","text":"Single URL for test users","correctAnswer":"A","choiceKeys":["A","B","C","D"]},{"id":"current_microservice_activation","text":"Current microservice activation","correctAnswer":"B","choiceKeys":["A","B","C","D"]}],"choices":[{"key":"A","text":"Revision label"},{"key":"B","text":"Revision mode"},{"key":"C","text":"Container image"},{"key":"D","text":"Container registry"}]}'::jsonb, ARRAY['single_url_test_users=A', 'current_microservice_activation=B']::text[], 'Nhãn sửa đổi cung cấp URL riêng cho bản sửa đổi Azure Container Apps, cho phép người kiểm tra sử dụng điểm cuối nhất quán cho bản sửa đổi đó. Chế độ sửa đổi kiểm soát kích hoạt sửa đổi; ở chế độ Bản sửa đổi đơn, việc tạo bản sửa đổi mới sẽ hủy kích hoạt bản sửa đổi đang hoạt động trước đó, vì vậy phiên bản hiện tại là phiên bản vi dịch vụ đang hoạt động.

**Tài liệu tham khảo:**
[Azure Container Apps revisions](https://learn.microsoft.com/en-us/azure/container-apps/revisions) · [Azure Container Apps traffic splitting](https://learn.microsoft.com/en-us/azure/container-apps/traffic-splitting)', 'Develop Containerized Solutions On Azure', ARRAY['AI-200', 'Develop Containerized Solutions On Azure']::text[], NULL, 'published'),
  ('ai200-55', 'ai-200', 55, 'You deploy a Linux container image to App Service. The container requires these environment variables at runtime:  
  
- A non-sensitive configuration value named `MODEL_VERSION`  
- A database password that must remain secure  
  
You need to configure App Service to provide these environment variables at runtime. Which configurations should you use?', '{"type":"matching_dropdown","statements":[{"id":"model_version","text":"MODEL_VERSION","correctAnswer":"A","choiceKeys":["A","B","C"]},{"id":"database_password","text":"Database password","correctAnswer":"E","choiceKeys":["A","D","E"]}],"choices":[{"key":"A","text":"App setting with plain text value"},{"key":"B","text":"Connection string"},{"key":"C","text":"Dockerfile ENV instruction"},{"key":"D","text":"Connection string with embedded password"},{"key":"E","text":"Key Vault reference syntax"}]}'::jsonb, ARRAY['model_version=A', 'database_password=E']::text[], 'Cài đặt ứng dụng Dịch vụ ứng dụng được đưa vào bộ chứa Linux dưới dạng các biến môi trường, điều này làm cho cài đặt ứng dụng văn bản thuần túy phù hợp với giá trị MODEL_VERSION không nhạy cảm. Tham chiếu Key Vault giữ mật khẩu cơ sở dữ liệu trong Azure Key Vault và cho phép Dịch vụ ứng dụng giải quyết mật khẩu đó một cách an toàn trong thời gian chạy, tránh mật khẩu được nhúng.

**Tài liệu tham khảo:**
[Configure app settings - Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/configure-common) · [Use Key Vault references as app settings - Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references)', 'Develop Containerized Solutions On Azure', ARRAY['AI-200', 'Develop Containerized Solutions On Azure']::text[], NULL, 'published'),
  ('ai200-56', 'ai-200', 56, 'You deploy a private container image from Azure Container Registry (ACR) to App Service.  
  
App Service must authenticate to ACR to pull the image. The solution must not store static registry credentials.  
  
You need to configure secure authentication for the image pull. Which configurations should you use?', '{"type":"matching_dropdown","statements":[{"id":"authenticate_acr","text":"Authenticate App Service to ACR.","correctAnswer":"A","choiceKeys":["A","B","C"]},{"id":"avoid_static_credentials","text":"Avoid storing static credentials.","correctAnswer":"F","choiceKeys":["D","E","F"]}],"choices":[{"key":"A","text":"Assign the Container Registry Repository Reader role to a managed identity."},{"key":"B","text":"Configure a webhook on ACR."},{"key":"C","text":"Enable the admin user."},{"key":"D","text":"Embed credentials in Dockerfile."},{"key":"E","text":"Store the registry password in application settings."},{"key":"F","text":"Use managed identity with role assignment."}]}'::jsonb, ARRAY['authenticate_acr=A', 'avoid_static_credentials=F']::text[], 'managed identity cho phép Dịch vụ ứng dụng lấy mã thông báo Microsoft Entra mà không cần lưu trữ tên người dùng hoặc mật khẩu đăng ký. Việc cấp danh tính đó cho vai trò Trình đọc kho lưu trữ sổ đăng ký vùng chứa sẽ cung cấp quyền truy cập kéo cho ACR hỗ trợ ABAC; Do đó, managed identity với sự phân công vai trò sẽ đáp ứng cả yêu cầu xác thực và thông tin xác thực no.

**Tài liệu tham khảo:**
[Configure a custom container for Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/configure-custom-container) · [Use a managed identity to authenticate to an Azure container registry](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-authentication-managed-identity)', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-57', 'ai-200', 57, 'You plan to deploy a web app to App Service on Linux. You create an App Service plan and create and push a custom Docker image that contains the web app to Azure Container Registry.  
  
You need to view console logs generated inside the container in real time.  
  
How should you complete the Azure CLI command?', '{"type":"matching_dropdown","statements":[{"id":"command1","text":"Option 1:","correctAnswer":"A","choiceKeys":["A","B","C","D"]},{"id":"logging_type","text":"Option 2:","correctAnswer":"F","choiceKeys":["E","F","G"]},{"id":"service","text":"Option 3:","correctAnswer":"H","choiceKeys":["H","I","J"]},{"id":"command2","text":"Option 4:","correctAnswer":"D","choiceKeys":["A","B","C","D"]}],"choices":[{"key":"A","text":"config"},{"key":"B","text":"download"},{"key":"C","text":"show"},{"key":"D","text":"tail"},{"key":"E","text":"--web-server-logging"},{"key":"F","text":"--docker-container-logging"},{"key":"G","text":"--application-logging"},{"key":"H","text":"webapp"},{"key":"I","text":"acr"},{"key":"J","text":"aks"}]}'::jsonb, ARRAY['command1=A', 'logging_type=F', 'service=H', 'command2=D']::text[], '`--docker-container-logging filesystem` định cấu hình bộ sưu tập đầu ra STDOUT và STDERR của vùng chứa. `az webapp log tail` sau đó bắt đầu theo dõi nhật ký trực tiếp cho ứng dụng web được chỉ định.

**Tài liệu tham khảo:**
[az webapp log — Azure CLI reference](https://learn.microsoft.com/en-us/cli/azure/webapp/log?view=azure-cli-latest)', 'Develop Containerized Solutions On Azure', ARRAY['AI-200', 'Develop Containerized Solutions On Azure']::text[], NULL, 'published'),
  ('ai200-58', 'ai-200', 58, 'You are developing a containerized AI application with the Python SDK to retrieve a runtime-setting value from Azure App Configuration. The application runs in Azure using a managed identity and must also work in a local development environment without code changes.  
  
Complete the code that performs the retrieval.', '{"type":"matching_dropdown","statements":[{"id":"credential","text":"Option 1:","correctAnswer":"B","choiceKeys":["A","B","C"]},{"id":"method","text":"Option 2:","correctAnswer":"E","choiceKeys":["D","E","F"]}],"choices":[{"key":"A","text":"ClientSecretCredential"},{"key":"B","text":"DefaultAzureCredential"},{"key":"C","text":"ManagedIdentityCredential"},{"key":"D","text":"list_labels"},{"key":"E","text":"get_configuration_setting"},{"key":"F","text":"list_configuration_settings"}]}'::jsonb, ARRAY['credential=B', 'method=E']::text[], 'DefaultAzureCredential sử dụng chuỗi thông tin xác thực: nó có thể xác thực thông qua managed identity của khối lượng công việc trong Azure và thông qua thông tin xác thực có sẵn của nhà phát triển cục bộ. Phương thức get_configuration_setting của Cấu hình ứng dụng Azure truy xuất khóa-giá trị duy nhất được xác định bởi khóa và nhãn; ở đây, khóa là "FeatureX" và nhãn là "sản xuất".

**Tài liệu tham khảo:**
[Using Azure App Configuration in Python apps with the Azure SDK for Python](https://learn.microsoft.com/en-us/azure/azure-app-configuration/quickstart-python) · [Access Azure App Configuration using Microsoft Entra ID](https://learn.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-59', 'ai-200', 59, 'A company uses Azure Monitor Application Insights to monitor application behavior, including incoming requests and dependencies.  
  
Identify failed requests from the last hour and calculate the average duration of failed-request dependency calls, grouped by operation name.  
  
Which operators should you use?', '{"type":"matching_dropdown","statements":[{"id":"op1","text":"Option 1:","correctAnswer":"C","choiceKeys":["A","B","C"]},{"id":"op2","text":"Option 2:","correctAnswer":"C","choiceKeys":["D","E","C"]},{"id":"op3","text":"Option 3:","correctAnswer":"F","choiceKeys":["A","B","F"]}],"choices":[{"key":"A","text":"extend"},{"key":"B","text":"project"},{"key":"C","text":"where"},{"key":"D","text":"distinct"},{"key":"E","text":"render"},{"key":"F","text":"summarize"}]}'::jsonb, ARRAY['op1=C', 'op2=C', 'op3=F']::text[], '`where` lọc các hàng bằng điều kiện Boolean, do đó, nó hạn chế cả yêu cầu và phần phụ thuộc trong phạm vi thời gian bắt buộc và điều kiện lỗi. `project` giữ lại khóa tham gia và gán bí danh thời lượng phụ thuộc. `summarize` thực hiện tổng hợp `avg()` và nhóm kết quả của nó theo `operation_Name`.', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-60', 'ai-200', 60, 'You are developing a new website page that uses Azure Cosmos DB for data storage. The feature uses documents in the following format:  
  
![Question Image](https://cdn.examcademy.com/images/questions/1785139233565-mnl3iunj.png)  
  
You must show data for the new page in a specified order. You create the following query for the page:  
  
![Question Image](https://cdn.examcademy.com/images/questions/1785139238284-6b45e0f7.png)  
  
You need to configure an Azure Cosmos DB policy that supports the query. Each JSON segment may be used once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"indexProperty","text":"Slot 1:","correctAnswer":"E"},{"id":"cityOrder","text":"Slot 2:","correctAnswer":"D"}],"choices":[{"key":"A","text":"or der By"},{"key":"B","text":"sortOrder"},{"key":"C","text":"ascending"},{"key":"D","text":"descending"},{"key":"E","text":"compositeIndexes"}]}'::jsonb, ARRAY['indexProperty=E', 'cityOrder=D']::text[], 'Azure Cosmos DB sử dụng chỉ mục tổng hợp để hỗ trợ các truy vấn sắp xếp theo nhiều thuộc tính. Chỉ mục tổng hợp phải liệt kê các thuộc tính theo trình tự ORDER BY và sử dụng các hướng sắp xếp phù hợp: /name tăng dần theo mặc định và /city giảm dần.', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], 'https://cdn.examcademy.com/images/questions/1785139233565-mnl3iunj.png', 'published'),
  ('ai200-61', 'ai-200', 61, 'A Python API uses a SQL statement to retrieve a document from Azure Database for PostgreSQL. The API receives the document ID from user input, and the current implementation inserts that ID directly into the SQL statement.  
  
You need to secure execution of the SQL statement while minimizing the chance of SQL injection. How should the current implementation be modified?  
  
Each configuration may be used once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"modify_sql","text":"Modify the SQL statement structure.","correctAnswer":"A"},{"id":"bind_input","text":"Bind user input.","correctAnswer":"B"},{"id":"execute","text":"Execute the statement.","correctAnswer":"D"}],"choices":[{"key":"A","text":"Use a parameterized query."},{"key":"B","text":"Pass the ID as an argument."},{"key":"C","text":"Escape quotation marks in the ID."},{"key":"D","text":"Supply the parameter tuple to the SDK method."}]}'::jsonb, ARRAY['modify_sql=A', 'bind_input=B', 'execute=D']::text[], 'Các truy vấn được tham số hóa giữ cú pháp SQL tách biệt khỏi giá trị ID tài liệu. ID được liên kết dưới dạng đối số và được chuyển trong một bộ tham số tới phương thức thực thi của SDK cơ sở dữ liệu, do đó, ID được coi là dữ liệu thay vì SQL thực thi. Việc thoát khỏi dấu ngoặc kép không phải là sự thay thế đáng tin cậy cho việc liên kết tham số.

**Tài liệu tham khảo:**
[Psycopg documentation: Passing parameters to SQL queries](https://www.psycopg.org/psycopg3/docs/basic/params.html)', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-62', 'ai-200', 62, 'You are deploying an Azure Function app that uses a managed identity to retrieve secrets from Key Vault.  
  
The deployment must ensure that the identity and secret configuration are ready before the function code is deployed.  
  
In which sequence should you perform the actions?', '{"type":"matching_drag_drop","statements":[{"id":"1","text":"1.","correctAnswer":"D"},{"id":"2","text":"2.","correctAnswer":"C"},{"id":"3","text":"3.","correctAnswer":"A"},{"id":"4","text":"4.","correctAnswer":"B"},{"id":"5","text":"5.","correctAnswer":"E"}],"choices":[{"key":"A","text":"Grant the managed identity access to Key Vault."},{"key":"B","text":"Add Key Vault references to application settings."},{"key":"C","text":"Assign a managed identity to the function app."},{"key":"D","text":"Create the function app."},{"key":"E","text":"Deploy the function code."}]}'::jsonb, ARRAY['1=D', '2=C', '3=A', '4=B', '5=E']::text[], 'system-assigned managed identity được tạo cho ứng dụng Chức năng hiện có, vì vậy ứng dụng này phải được tạo trước tiên. Sau đó, danh tính phải nhận được quyền đọc các bí mật từ Key Vault trước khi cài đặt ứng dụng sử dụng tham chiếu Key Vault. Với cài đặt danh tính và bí mật được định cấu hình, việc triển khai mã chức năng lần cuối sẽ đảm bảo ứng dụng có thể truy xuất các bí mật cần thiết khi khởi động.', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-63', 'ai-200', 63, 'You are developing a serverless Java application on Azure and create a new Azure Key Vault to use secrets from a new Azure Functions application.  
  
The application must meet these requirements:  
  
- Reference Azure Key Vault without requiring changes to the Java code.  
- Dynamically add and remove Azure Functions host instances according to the number of incoming application events.  
- Keep instances perpetually warm to prevent cold starts.  
- Connect to a VNet.  
- Remove authentication to the Azure Key Vault instance if the Azure Functions application is deleted.  
  
You need to grant the Azure Functions application access to the Azure Key Vault.  
  
Which three actions should you take, in sequence?', '{"type":"matching_drag_drop","statements":[{"id":"1","text":"Slot 1:","correctAnswer":"D"},{"id":"2","text":"Slot 2:","correctAnswer":"F"},{"id":"3","text":"Slot 3:","correctAnswer":"A"}],"choices":[{"key":"A","text":"Create an access policy in Azure Key Vault for the application identity."},{"key":"B","text":"Create the Azure Functions app with a Consumption plan type."},{"key":"C","text":"Create a user-assigned managed identity for the application."},{"key":"D","text":"Create the Azure Functions app with a Premium plan type."},{"key":"E","text":"Create an SSL certification in Azure Key Vault for the application identity."},{"key":"F","text":"Create a system-assigned managed identity for the application."},{"key":"G","text":"Create the Azure Functions app with an App Service plan type."}]}'::jsonb, ARRAY['1=D', '2=F', '3=A']::text[], 'Azure Functions Premium hỗ trợ mở rộng quy mô theo sự kiện, tích hợp VNet và các phiên bản được làm ấm trước để tránh khởi động nguội. system-assigned managed identity được tạo và gắn liền với vòng đời của Ứng dụng chức năng, vì vậy việc xóa ứng dụng sẽ xóa danh tính đó. Việc cấp quyền truy cập danh tính thông qua chính sách truy cập Key Vault cho phép ứng dụng xác thực với Key Vault mà không cần nhúng thông tin xác thực hoặc thay đổi mã Java.

**Tài liệu tham khảo:**
[Azure Functions hosting options](https://learn.microsoft.com/en-us/azure/azure-functions/functions-scale) · [Azure Functions managed identities](https://learn.microsoft.com/en-us/azure/azure-functions/functions-identity-based-connections-tutorial)', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-64', 'ai-200', 64, 'A Python API running in ACA must send distributed traces to Azure Monitor. The API creates spans, but no traces appear in Azure Monitor. Configure the OpenTelemetry SDK pipeline so that traces are exported to Azure Monitor.  
  
Each action may be used once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"register-global-tracer-provider","text":"Register a global tracer provider.","correctAnswer":"C"},{"id":"export-traces-azure-monitor","text":"Export traces to Azure Monitor.","correctAnswer":"E"},{"id":"connect-exporter-provider","text":"Connect the exporter to the provider.","correctAnswer":"D"},{"id":"generate-spans-app-code","text":"Generate spans in the application code.","correctAnswer":"B"}],"choices":[{"key":"A","text":"Enable log sampling."},{"key":"B","text":"Call tracer.start_as_current_span()."},{"key":"C","text":"Initialize the application’s TracerProvider for tracing."},{"key":"D","text":"Configure a span processor to send spans to the exporter."},{"key":"E","text":"Create the Azure Monitor component that sends trace data."}]}'::jsonb, ARRAY['register-global-tracer-provider=C', 'export-traces-azure-monitor=E', 'connect-exporter-provider=D', 'generate-spans-app-code=B']::text[], 'Thiết lập theo dõi Python Azure Monitor OpenTelemetry tạo và đăng ký TracerProvider, tạo AzureMonitorTraceExporter, gói nó trong bộ xử lý span được thêm vào nhà cung cấp và tạo các trải rộng ứng dụng thông qua tracer.start_as_current_span(). Lấy mẫu nhật ký không kết nối hoặc xuất các khoảng theo dõi.

**Tài liệu tham khảo:**
[Microsoft OpenTelemetry exporter for Azure Monitor](https://learn.microsoft.com/en-us/python/api/overview/azure/monitor-opentelemetry-exporter-readme?view=azure-python-preview)', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-65', 'ai-200', 65, 'A Python web API uses OpenTelemetry for tracing. The `call_downstream_service` function sends an outbound HTTP request using the `requests` library. The following code is the application''s only OpenTelemetry configuration:  
  
![Question Image](https://cdn.examcademy.com/images/questions/1785139245446-f7l968q9.png)  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"type":"statement_matrix","statements":[{"id":"1","text":"The code creates a span for each request.","correctAnswer":"Yes"},{"id":"2","text":"The code automatically propagates trace context to downstream HTTP services.","correctAnswer":"No"},{"id":"3","text":"The solution requires additional instrumentation for end-to-end trace correlation.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:Yes', '2:No', '3:Yes']::text[], '`tracer.start_as_current_span("process_request")` tạo và kích hoạt một khoảng thời gian trong quá trình cho mỗi lần thực thi `process_request()`. Chỉ riêng API OpenTelemetry không cung cấp thư viện `requests` hoặc đưa các tiêu đề truyền vào yêu cầu HTTP gửi đi. Cần phải cài đặt `requests` (hoặc chèn thủ công ngữ cảnh của bộ truyền đã định cấu hình) cho các dịch vụ hạ nguồn để tương quan yêu cầu với cùng một dấu vết được phân phối.

**Tài liệu tham khảo:**
[OpenTelemetry Python Requests Instrumentation](https://opentelemetry-python-contrib.readthedocs.io/en/latest/instrumentation/requests/requests.html) · [OpenTelemetry Python Context Propagation](https://opentelemetry-python.readthedocs.io/en/latest/api/propagate.html)', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], 'https://cdn.examcademy.com/images/questions/1785139245446-f7l968q9.png', 'published'),
  ('ai200-66', 'ai-200', 66, 'You are reviewing the Python tracing configuration for an application that must send distributed traces to Azure Monitor.  
  
The following code configures OpenTelemetry tracing:  
  
![Question Image](https://cdn.examcademy.com/images/questions/1785139245387-hyyq3lgh.png)  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"type":"statement_matrix","statements":[{"id":"1","text":"The code configures the tracer provider before any spans are created.","correctAnswer":"Yes"},{"id":"2","text":"The configuration exports traces synchronously.","correctAnswer":"No"},{"id":"3","text":"The configuration enables export to Azure Monitor.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:Yes', '2:No', '3:Yes']::text[], 'Nhà cung cấp công cụ theo dõi toàn cầu được định cấu hình trước khi lấy được công cụ theo dõi và trước khi bất kỳ khoảng thời gian nào được tạo. `BatchSpanProcessor` thực hiện xuất nền theo đợt thay vì xuất đồng bộ. Đăng ký `AzureMonitorTraceExporter` với bộ xử lý đó sẽ gửi dữ liệu theo dõi OpenTelemetry tới Azure Monitor.

**Tài liệu tham khảo:**
[Microsoft OpenTelemetry exporter for Azure Monitor](https://learn.microsoft.com/en-us/python/api/overview/azure/monitor-opentelemetry-exporter-readme?view=azure-python-preview)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], 'https://cdn.examcademy.com/images/questions/1785139245387-hyyq3lgh.png', 'published'),
  ('ai200-67', 'ai-200', 67, 'You have an existing AKS cluster and a container image in Azure Container Registry.  
  
You must deploy a new version without interrupting traffic.  
  
You need to use a manifest file to perform a rolling update.  
  
Which three actions should you take, in sequence?', '{"type":"matching_drag_drop","statements":[{"id":"slot1","text":"Slot 1:","correctAnswer":"B"},{"id":"slot2","text":"Slot 2:","correctAnswer":"A"},{"id":"slot3","text":"Slot 3:","correctAnswer":"C"}],"choices":[{"key":"A","text":"Apply the updated manifest."},{"key":"B","text":"Update the image tag in the deployment manifest."},{"key":"C","text":"Verify rollout status."},{"key":"D","text":"Delete the existing deployment and recreate it."},{"key":"E","text":"Scale deployment to zero before updating."}]}'::jsonb, ARRAY['slot1=B', 'slot2=A', 'slot3=C']::text[], 'Việc cập nhật mẫu nhóm của Triển khai bằng thẻ hình ảnh mới và áp dụng tệp kê khai đã sửa đổi sẽ kích hoạt quy trình cập nhật luân phiên Triển khai. Kubernetes thay thế dần các Pod cũ trong khi vẫn giữ nguyên ứng dụng theo chiến lược Triển khai. Chỉ xác minh việc triển khai sau khi áp dụng thay đổi. Việc mở rộng quy mô về 0 hoặc xóa Triển khai sẽ làm gián đoạn lưu lượng truy cập.

**Tài liệu tham khảo:**
[Kubernetes Deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/) · [Update an application in Azure Kubernetes Service (AKS)](https://learn.microsoft.com/en-us/azure/aks/tutorial-kubernetes-app-update)', 'Develop Containerized Solutions On Azure', ARRAY['AI-200', 'Develop Containerized Solutions On Azure']::text[], NULL, 'published'),
  ('ai200-68', 'ai-200', 68, 'An HTTP-triggered Azure Function needs to read a JSON configuration file that is stored in Azure Blob Storage.  
  
You need to obtain the contents of the configuration file.  
  
What should you use?', '[{"key":"A","text":"Output binding"},{"key":"B","text":"Input binding"},{"key":"C","text":"Timer trigger"},{"key":"D","text":"HTTP trigger"}]'::jsonb, ARRAY['B']::text[], 'Liên kết đầu vào Azure Blob Storage đọc nội dung của một blob hiện có và cung cấp những nội dung đó cho Hàm Azure. Trình kích hoạt HTTP gọi hàm, trong khi liên kết đầu ra ghi dữ liệu vào đích. Microsoft Learn phân loại việc đọc dữ liệu Blob Storage trong một hàm dưới dạng hành động liên kết đầu vào.

**Tài liệu tham khảo:**
[Azure Blob storage trigger and bindings for Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-blob)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-69', 'ai-200', 69, 'An Azure Storage Blob upload must initiate backend processing.  
  
The solution must:  
  
- Avoid polling.  
- Minimize latency.  
- Trigger automatically when the upload occurs.  
  
You need to make sure processing begins as soon as a file is uploaded.  
  
Which trigger should you implement?', '[{"key":"A","text":"Timer"},{"key":"B","text":"Event Grid"},{"key":"C","text":"Queue storage"},{"key":"D","text":"HTTP"}]'::jsonb, ARRAY['B']::text[], 'Azure Event Grid xuất bản các sự kiện Lưu trữ Blob khi các đốm màu được tạo và phân phối chúng đến những người xử lý đã đăng ký với độ trễ thấp. Cách tiếp cận theo hướng sự kiện này tránh việc thăm dò được sử dụng bởi trình kích hoạt blob quét vùng chứa tiêu chuẩn.

**Tài liệu tham khảo:**
[Azure Blob storage trigger for Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-blob-trigger)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-70', 'ai-200', 70, 'A recommendation system stores 3 million embeddings in Azure Database for PostgreSQL.  
  
During peak hours, P95 similarity-query latency rises and the cache hit ratio drops significantly.  
  
You suspect the vector-index working set no longer fits in memory, causing additional disk reads.  
  
You must scale server resources and validate the result.  
  
Which four actions should you take, in order?', '{"type":"matching_drag_drop","statements":[{"id":"slot1","text":"Slot 1:","correctAnswer":"E"},{"id":"slot2","text":"Slot 2:","correctAnswer":"A"},{"id":"slot3","text":"Slot 3:","correctAnswer":"B"},{"id":"slot4","text":"Slot 4:","correctAnswer":"F"}],"choices":[{"key":"A","text":"Scale to a tier with more memory per vCore."},{"key":"B","text":"Review memory pressure and cache hit ratio during peak hours and compare them to the baseline."},{"key":"C","text":"Increase embedding dimensionality."},{"key":"D","text":"Disable autovacuum."},{"key":"E","text":"Before peak hours, run a fixed workload to capture baseline P95 latency and capture EXPLAIN ANALYZE for the vector query."},{"key":"F","text":"Re-run the same benchmark and compare P95 and P99 latency."}]}'::jsonb, ARRAY['slot1=E', 'slot2=A', 'slot3=B', 'slot4=F']::text[], 'Tỷ lệ truy cập bộ đệm thấp cùng với độ trễ truy vấn tương tự tăng lên cho thấy nhiều lượt đọc đang được phân phát từ bộ lưu trữ hơn là bộ nhớ. Việc thiết lập một tiêu chuẩn và kế hoạch trước khi thay đổi sẽ cung cấp một điểm so sánh; tăng bộ nhớ trên mỗi vCore sẽ giải quyết tình trạng thiếu hụt bộ làm việc; quan sát áp lực bộ nhớ và hoạt động của bộ nhớ đệm trong thời gian tải cao điểm sẽ xác nhận cơ chế bị nghi ngờ; và việc lặp lại điểm chuẩn tương tự sẽ xác minh kết quả độ trễ P95/P99. Chiều nhúng cao hơn làm tăng yêu cầu về chỉ mục và bộ nhớ, đồng thời cài đặt tự động chân không không khắc phục được tình trạng thiếu bộ nhớ của bộ làm việc chỉ mục vectơ.', 'Develop AI Solutions By Using Azure Data Management Services', ARRAY['AI-200', 'Develop AI Solutions By Using Azure Data Management Services']::text[], NULL, 'published'),
  ('ai200-71', 'ai-200', 71, 'A semantic-search application queries Azure Database for PostgreSQL and stores document embeddings and metadata in a table with these columns:  
  
- `embedding` (`pgvector`)  
- `department`  
- `created_at`  
  
The application must return the five documents most similar to a supplied query embedding, limited to the finance department.  
  
Implement semantic retrieval with metadata filtering. Select the query components that meet each requirement. Each component may be used once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"filter_finance","text":"Filter rows to finance.","correctAnswer":"A"},{"id":"rank_similarity","text":"Rank by similarity and return the top five.","correctAnswer":"D"}],"choices":[{"key":"A","text":"WHERE department = ''Finance''"},{"key":"B","text":"WHERE department ILIKE ''fin%''"},{"key":"C","text":"ORDER BY created_at DESC LIMIT 5"},{"key":"D","text":"ORDER BY embedding <=> :query_embedding LIMIT 5"}]}'::jsonb, ARRAY['filter_finance=A', 'rank_similarity=D']::text[], 'Bộ lọc đẳng thức trên `department` hạn chế tập kết quả ở giá trị siêu dữ liệu Tài chính. Trong pgvector, `<=>` tính khoảng cách cosin, do đó, `ORDER BY embedding <=>:query_embedding` xếp các vectơ gần nhất (tương tự nhất) tăng dần trước tiên; `LIMIT 5` trả về năm kết quả. `created_at DESC` xếp hạng theo mức độ gần đây thay vì mức độ tương tự.

**Tài liệu tham khảo:**
[Vector Search in Azure Database for PostgreSQL Flexible Server](https://learn.microsoft.com/en-us/azure/postgresql/extensions/how-to-use-pgvector)', 'Develop AI Solutions By Using Azure Data Management Services', ARRAY['AI-200', 'Develop AI Solutions By Using Azure Data Management Services']::text[], NULL, 'published'),
  ('ai200-72', 'ai-200', 72, 'You are implementing the expiry requirement for AI-generated summaries in the Redis cache.  
  
You must remove the AI summaries five minutes after they are created, no matter how frequently they are accessed.  
  
What should you do?', '[{"key":"A","text":"Set the maxmemory-policy to allkeys-lru."},{"key":"B","text":"Configure absolute expiration on each cache key."},{"key":"C","text":"Use the PERSIST command after each successful read operation."},{"key":"D","text":"Implement sliding expiration on each cache key."}]'::jsonb, ARRAY['B']::text[], 'Khóa Redis có thời hạn hết hạn khi tạo sẽ có thời gian tồn tại cố định và bị xóa khi TTL đó trôi qua trừ khi thời hạn sử dụng của nó bị thay đổi rõ ràng. Điều này đáp ứng thời lượng năm phút không phụ thuộc vào hoạt động đọc; thay vào đó, việc trượt hết hạn sẽ kéo dài thời gian tồn tại sau khi truy cập.

**Tài liệu tham khảo:**
[Redis EXPIRE command documentation](https://redis.io/docs/latest/commands/expire/) · [Redis SET command documentation](https://redis.io/docs/latest/commands/set/)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-73', 'ai-200', 73, 'You are developing a solution that uses several Azure Service Bus queues. You create an Azure Event Grid subscription for the Azure Service Bus namespace, using Azure Functions as subscribers to process messages.  
  
You need the queues to emit events to Azure Event Grid while following least privilege and minimizing costs.  
  
Which Azure Service Bus values should you use?', '{"type":"matching_dropdown","statements":[{"id":"tier","text":"Tier","correctAnswer":"C","choiceKeys":["A","B","C"]},{"id":"iam_level","text":"Access control (IAM) level","correctAnswer":"D","choiceKeys":["D","E","F","G"]}],"choices":[{"key":"A","text":"Basic"},{"key":"B","text":"Standard"},{"key":"C","text":"Premium"},{"key":"D","text":"Contributor"},{"key":"E","text":"Data Receiver"},{"key":"F","text":"Data Sender"},{"key":"G","text":"Data Owner"}]}'::jsonb, ARRAY['tier=C', 'iam_level=D']::text[], 'Tích hợp Azure Service Bus với Lưới sự kiện chỉ khả dụng cho các không gian tên Cao cấp. Microsoft chỉ định quyền truy cập của Người đóng góp vào không gian tên Service Bus làm điều kiện tiên quyết để định cấu hình tích hợp này; các vai trò Người nhận dữ liệu, Người gửi dữ liệu và Chủ sở hữu dữ liệu là các vai trò trên mặt phẳng dữ liệu và không cấp quyền quản lý vùng tên cần thiết.

**Tài liệu tham khảo:**
[Azure Service Bus as an Event Grid source](https://learn.microsoft.com/en-us/azure/event-grid/event-schema-service-bus) · [Azure Service Bus to Event Grid integration overview](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-to-event-grid-integration-concept)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-74', 'ai-200', 74, 'You deploy an API to Azure Container Apps.  
  
The solution must provide the following functionality:  
  
- Support concurrent activation of multiple application versions.  
- Allocate a specific percentage of incoming requests to a secondary version.  
  
You need to configure revision behavior.  
  
Which configurations should you use? Move the appropriate configurations to the correct requirements. Each configuration may be used once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"slot1","text":"Test a new revision without affecting production traffic.","correctAnswer":"D"},{"id":"slot2","text":"Route 20 percent of traffic to a new revision.","correctAnswer":"A"}],"choices":[{"key":"A","text":"Traffic splitting"},{"key":"B","text":"Single revision mode"},{"key":"C","text":"Traffic isolation"},{"key":"D","text":"Multiple revision mode"}]}'::jsonb, ARRAY['slot1=D', 'slot2=A']::text[], 'Chế độ nhiều bản sửa đổi cho phép nhiều bản sửa đổi hoạt động, cho phép bản sửa đổi mới được hoạt động và thử nghiệm trong khi bản sửa đổi sản xuất vẫn hoạt động. Việc phân chia lưu lượng chỉ định trọng số phần trăm cho các bản sửa đổi đang hoạt động, do đó, nó có thể hướng 20% ​​yêu cầu đến bản sửa đổi mới.

**Tài liệu tham khảo:**
[Update and deploy changes in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/revisions) · [Traffic splitting in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/traffic-splitting)', 'Develop Containerized Solutions On Azure', ARRAY['AI-200', 'Develop Containerized Solutions On Azure']::text[], NULL, 'published'),
  ('ai200-75', 'ai-200', 75, 'You are designing Azure Functions for three distinct backend workloads.  
  
Each workload needs one of these dispatch models:  
  
- Return an immediate response to a client.  
- Process background work from a queue.  
- Run code on a fixed schedule.  
  
Select the trigger for each requirement. Each trigger may be used once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"immediate_response","text":"Return an immediate response to a client.","correctAnswer":"A"},{"id":"queue_background","text":"Process background work from a queue.","correctAnswer":"E"},{"id":"fixed_schedule","text":"Run code on a fixed schedule.","correctAnswer":"B"}],"choices":[{"key":"A","text":"HTTP trigger"},{"key":"B","text":"Timer trigger"},{"key":"C","text":"Event Grid trigger"},{"key":"D","text":"Blob Storage trigger"},{"key":"E","text":"Queue Storage trigger"}]}'::jsonb, ARRAY['immediate_response=A', 'queue_background=E', 'fixed_schedule=B']::text[], 'Trình kích hoạt HTTP gọi một hàm cho yêu cầu HTTP và hỗ trợ trả về phản hồi HTTP. Trình kích hoạt Lưu trữ hàng đợi sẽ gọi một chức năng khi một tin nhắn được thêm vào hàng đợi Lưu trữ Azure, giúp nó phù hợp với việc xử lý nền trong hàng đợi. Trình kích hoạt Bộ hẹn giờ gọi một hàm theo lịch trình đã xác định.

**Tài liệu tham khảo:**
[Azure Functions HTTP trigger](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger) · [Azure Functions Azure Queue Storage trigger](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-queue-trigger)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-76', 'ai-200', 76, 'You are preparing a container image for deployment to production.  
  
The container image build and deployment process must ensure:  
  
- The image is uniquely versioned.  
- Secure authentication is used when pushing the image to Azure Container Registry (ACR).  
- The image is stored in ACR for deployment.  
  
You need to ensure that the container image build-and-push process meets these requirements.  
  
Which action should you perform for each requirement? Each action may be used once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"versioned","text":"Ensure that the image is versioned.","correctAnswer":"C"},{"id":"secure_push","text":"Allow secure push to ACR.","correctAnswer":"D"},{"id":"store_for_deployment","text":"Store the image in the registry for deployment.","correctAnswer":"B"}],"choices":[{"key":"A","text":"Build the image locally."},{"key":"B","text":"Push the image to ACR."},{"key":"C","text":"Use a unique tag for the image."},{"key":"D","text":"Authenticate to ACR by using Microsoft Entra ID."}]}'::jsonb, ARRAY['versioned=C', 'secure_push=D', 'store_for_deployment=B']::text[], 'Một thẻ duy nhất, không thể thay đổi sẽ phân biệt một phiên bản hình ảnh cụ thể. Microsoft Entra ID có thể xác thực danh tính được ủy quyền với Azure Container Register để thực hiện các hoạt động đăng ký an toàn. Đẩy hình ảnh được gắn thẻ lên máy chủ đăng nhập ACR sẽ tải lên và lưu trữ hình ảnh trong sổ đăng ký đó để triển khai sau này.

**Tài liệu tham khảo:**
[Authenticate with an Azure container registry](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-authentication) · [Push and pull images to an Azure container registry](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-get-started-docker-cli)', 'Develop Containerized Solutions On Azure', ARRAY['AI-200', 'Develop Containerized Solutions On Azure']::text[], NULL, 'published'),
  ('ai200-77', 'ai-200', 77, 'You have a web service used to pay for food deliveries. It uses Azure Cosmos DB as its data store.  
  
You plan to add a feature that lets users set a tip amount. The feature requires a `tip` property on the Azure Cosmos DB document that is present and has a numeric value.  
  
Many existing websites and mobile apps that use the web service will not be updated to set the `tip` property for some time.  
  
How should you complete the trigger?', '{"type":"matching_dropdown","statements":[{"id":"context","text":"Option 1:","correctAnswer":"C","choiceKeys":["A","B","C","D"]},{"id":"condition","text":"Option 2:","correctAnswer":"E","choiceKeys":["E","F","G","H"]},{"id":"setbody","text":"Option 3:","correctAnswer":"I","choiceKeys":["I","J","K","L"]}],"choices":[{"key":"A","text":"__.value();"},{"key":"B","text":"__.readDocument(''item'');"},{"key":"C","text":"getContext().getRequest();"},{"key":"D","text":"getContext().getResponse();"},{"key":"E","text":"if (!(\"tip\" in i)) {"},{"key":"F","text":"if (request.getValue(\"tip\") === null) {"},{"key":"G","text":"if (isNaN(i[\"tip\"] || i[\"tip\"] === null) {"},{"key":"H","text":"if (typeof __.pluck(\"tip\") == ''number'') {"},{"key":"I","text":"r.setBody(i);"},{"key":"J","text":"r.setValue(i);"},{"key":"K","text":"__.upsertDocument(i);"},{"key":"L","text":"__.replaceDocument(i);"}]}'::jsonb, ARRAY['context=C', 'condition=E', 'setbody=I']::text[], 'Trình kích hoạt trước Cosmos DB truy cập mục đang được tạo hoặc sửa đổi thông qua `getContext().getRequest()`. Khi `tip` vắng mặt, việc gán `0` sẽ cung cấp mặc định số cho các máy khách cũ hơn. Gọi `setBody(i)` theo yêu cầu đó sẽ thay thế nội dung yêu cầu đang chờ xử lý để mục được lưu trữ với thuộc tính mới.

**Tài liệu tham khảo:**
[Write stored procedures, triggers, and UDFs in Azure Cosmos DB for NoSQL](https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/how-to-write-stored-procedures-triggers-udfs)', 'Develop AI Solutions By Using Azure Data Management Services', ARRAY['AI-200', 'Develop AI Solutions By Using Azure Data Management Services']::text[], NULL, 'published'),
  ('ai200-78', 'ai-200', 78, 'You are configuring sampling for a distributed application that sends traces to Azure Monitor.  
  
The solution must:  
  
- Preserve upstream sampling decisions across distributed traces.  
- Capture all spans during local testing.  
- Sample 10 percent of traces in production.  
  
Apply the appropriate sampling configuration to each requirement. Each configuration may be used once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"preserve-upstream","text":"Maintain parent sampling decisions.","correctAnswer":"C"},{"id":"testing","text":"Record all spans during testing.","correctAnswer":"A"},{"id":"production","text":"Sample 10 percent of traces in production.","correctAnswer":"E"}],"choices":[{"key":"A","text":"AlwaysOnSampler"},{"key":"B","text":"BatchSpanProcessor"},{"key":"C","text":"ParentBasedSampler"},{"key":"D","text":"AzureMonitorTraceExporter"},{"key":"E","text":"TraceIdRatioBasedSampler(0.1)"}]}'::jsonb, ARRAY['preserve-upstream=C', 'testing=A', 'production=E']::text[], 'ParentBasedSampler tôn trọng quyết định lấy mẫu của khoảng gốc, duy trì việc lấy mẫu nhất quán trên một dấu vết phân tán. AlwaysOnSampler lấy mẫu ở mọi nhịp, cung cấp khả năng đo từ xa hoàn chỉnh trong quá trình thử nghiệm. TraceIdRatioBasedSampler được định cấu hình với 0,1 mẫu, chiếm khoảng 10% dấu vết. Bộ xử lý hàng loạt và nhà xuất khẩu Azure Monitor xử lý việc xử lý và xuất chứ không phải lựa chọn lấy mẫu.

**Tài liệu tham khảo:**
[Sampling | OpenTelemetry .NET](https://opentelemetry.io/docs/languages/dotnet/sampling/)', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-79', 'ai-200', 79, 'An AI application retrieves configuration values from App Configuration and currently uses static configuration.  
  
You need to implement a solution that supports dynamic configuration updates while minimizing latency for application requests.  
  
What should you do?', '[{"key":"A","text":"Inject configuration values in environment variables."},{"key":"B","text":"Cache configuration values with a refresh interval."},{"key":"C","text":"Retrieve configuration values from App Configuration on each request."},{"key":"D","text":"Store configuration values in Key Vault"}]'::jsonb, ARRAY['B']::text[], 'Các giá trị cấu hình lưu vào bộ đệm với khoảng thời gian làm mới cho phép cập nhật Cấu hình ứng dụng động mà không cần truy xuất các giá trị từ xa theo mọi yêu cầu. Việc kiểm tra làm mới chỉ diễn ra sau khoảng thời gian đã định cấu hình và việc làm mới theo yêu cầu có thể chạy không đồng bộ trong khi ứng dụng tiếp tục sử dụng các giá trị được lưu trong bộ nhớ đệm, giảm thiểu độ trễ của yêu cầu.

**Tài liệu tham khảo:**
[Tutorial: Use dynamic configuration in an ASP.NET Core app](https://learn.microsoft.com/en-us/azure/azure-app-configuration/enable-dynamic-configuration-aspnet-core) · [Azure App Configuration best practices](https://learn.microsoft.com/en-us/azure/azure-app-configuration/howto-best-practices)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-80', 'ai-200', 80, 'You are troubleshooting a production Azure OpenAI service with intermittent connectivity problems. All telemetry is sent to a Log Analytics workspace.  
  
You must create a KQL query that analyzes the `AppRequests` table. The query must filter for requests that occurred during the last 30 minutes and that have a failed status.  
  
The final output must show the total number of failures for every unique operation.  
  
You need to select the KQL operators needed to filter the time range and aggregate the failure counts.  
  
Which two operators should you use? Each correct answer presents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"summarize"},{"key":"B","text":"project"},{"key":"C","text":"distinct"},{"key":"D","text":"where"}]'::jsonb, ARRAY['A', 'D']::text[], 'Toán tử `where` lọc các hàng theo vị từ, do đó, nó có thể hạn chế các yêu cầu theo cả dấu thời gian và trạng thái không thành công. Toán tử `summarize` thực hiện tổng hợp và hỗ trợ nhóm, cho phép `count()` chứa các yêu cầu không thành công được nhóm theo hoạt động.

**Tài liệu tham khảo:**
[where operator - Kusto | Microsoft Learn](https://learn.microsoft.com/en-us/kusto/query/where-operator?view=microsoft-fabric) · [summarize operator - Kusto | Microsoft Learn](https://learn.microsoft.com/en-us/kusto/query/summarize-operator?view=azure-monitor)', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-81', 'ai-200', 81, 'You are building several microservices that will run on Azure Container Apps.  
  
You need to monitor and diagnose the microservices.  
  
Which features should you use?', '{"type":"matching_dropdown","statements":[{"id":"logs","text":"View console logs from a container in near real-time.","correctAnswer":"A","choiceKeys":["A","B","C","D"]},{"id":"debug","text":"Debug the microservice from inside the container.","correctAnswer":"B","choiceKeys":["B","C","E","D"]}],"choices":[{"key":"A","text":"Log streaming"},{"key":"B","text":"Container console"},{"key":"C","text":"Azure Monitor metrics"},{"key":"D","text":"Azure Monitor Log Analytics"},{"key":"E","text":"Azure Container Registry"}]}'::jsonb, ARRAY['logs=A', 'debug=B']::text[], 'Truyền phát nhật ký hiển thị bảng điều khiển vùng chứa và nhật ký hệ thống gần như theo thời gian thực. Bảng điều khiển vùng chứa kết nối với bảng điều khiển Linux trong vùng chứa đang chạy, cho phép gỡ lỗi trong vùng chứa.

**Tài liệu tham khảo:**
[Observability in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/observability) · [Connect to a container console in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/container-console)', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-82', 'ai-200', 82, 'An application deployed to AKS relies on an internal API that is hosted in the same cluster. All pods are healthy and show a Ready status, but requests between the services time out.  
  
You need to determine whether the problem relates to Kubernetes Service configuration or application code.  
  
What should you do first?', '[{"key":"A","text":"Restart the failing deployment."},{"key":"B","text":"Inspect Service and Endpoints objects."},{"key":"C","text":"Increase replica count for both services."},{"key":"D","text":"Test DNS resolution from your workstation."}]'::jsonb, ARRAY['B']::text[], 'Dịch vụ Kubernetes phải chọn chính xác các nhóm dự định và ánh xạ cổng Dịch vụ của nó tới cổng nghe của nhóm. Việc kiểm tra Dịch vụ và các bản ghi điểm cuối của nó sẽ xác minh rằng các phần phụ trợ đã được chọn và phát hiện các lỗi về bộ chọn, điểm cuối và ánh xạ cổng. Chỉ riêng trạng thái nhóm sẵn sàng không xác minh được định tuyến Dịch vụ; Việc triển khai Kubernetes hiện tại đại diện cho các chương trình phụ trợ đã chọn dưới dạng EndpointSlices.

**Tài liệu tham khảo:**
[Kubernetes: Debug Services](https://kubernetes.io/docs/tasks/debug/debug-application/debug-service/)', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-83', 'ai-200', 83, 'You are investigating high latency in an AI search application that handles millions of requests each day. Telemetry is stored in Azure Monitor Logs.  
  
Create a KQL query that correlates information from the AppRequests table and the AppDependencies table. It must meet these requirements:  
  
- Include only data from the last 24 hours.  
- Filter for failed requests only.  
- Calculate the average duration of dependencies, grouped by operation.  
  
The query must be optimized for performance by minimizing the initial data scan.  
  
You need to create the query.  
  
Which five actions should you perform in sequence?', '{"type":"matching_drag_drop","statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"E"},{"id":"step2","text":"Slot 2:","correctAnswer":"C"},{"id":"step3","text":"Slot 3:","correctAnswer":"B"},{"id":"step4","text":"Slot 4:","correctAnswer":"D"},{"id":"step5","text":"Slot 5:","correctAnswer":"A"}],"choices":[{"key":"A","text":"Summarize average dependency duration by operation."},{"key":"B","text":"Filter the failed requests."},{"key":"C","text":"Apply a time filter."},{"key":"D","text":"Join the dependencies table."},{"key":"E","text":"Select the requests table."}]}'::jsonb, ARRAY['step1=E', 'step2=C', 'step3=B', 'step4=D', 'step5=A']::text[], 'Bắt đầu với AppRequests, áp dụng biến vị ngữ thời gian 24 giờ càng sớm càng tốt và lọc các yêu cầu không thành công trước khi tham gia để quá trình tham gia xử lý ít hàng yêu cầu hơn. Kết hợp các yêu cầu kết quả với AppDependency theo trường tương quan hoạt động, sau đó sử dụng tóm tắt với avg() được nhóm theo trường hoạt động để tính thời lượng phụ thuộc trung bình cho mỗi hoạt động.

**Tài liệu tham khảo:**
[Optimize log queries in Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/query-optimization) · [summarize operator - Kusto](https://learn.microsoft.com/en-us/kusto/query/summarize-operator?view=azure-monitor)', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-84', 'ai-200', 84, 'You are reviewing the secret-access patterns used by an AI application that retrieves credentials from Key Vault.  
  
Evaluate the security effect of each implementation approach. Each outcome may be used once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"retrieve_without_version","text":"Retrieve secret without specifying version.","correctAnswer":"B"},{"id":"retrieve_with_version","text":"Retrieve secret with version identifier.","correctAnswer":"D"},{"id":"managed_identity","text":"Use managed identity for authentication.","correctAnswer":"A"},{"id":"client_secret_env","text":"Use client secret stored in environment variables.","correctAnswer":"C"}],"choices":[{"key":"A","text":"Prevents credential storage"},{"key":"B","text":"Supports automatic rotation"},{"key":"C","text":"Introduces credential exposure"},{"key":"D","text":"Requires manual update after rotation"}]}'::jsonb, ARRAY['retrieve_without_version=B', 'retrieve_with_version=D', 'managed_identity=A', 'client_secret_env=C']::text[], 'Yêu cầu Key Vault không có phiên bản sẽ được giải quyết thành phiên bản bí mật hiện tại, do đó, vòng xoay bí mật sẽ tự động được chọn. Yêu cầu dành riêng cho phiên bản vẫn được ghim vào phiên bản đó và phải được thay đổi sau khi xoay. Danh tính được quản lý nhận được mã thông báo mà không cần thông tin xác thực do ứng dụng quản lý. Bí mật của máy khách trong các biến môi trường là thông tin xác thực được lưu trữ và có thể bị lộ thông qua việc truy cập hoặc ghi nhật ký môi trường/cấu hình.

**Tài liệu tham khảo:**
[Get-AzKeyVaultSecret](https://learn.microsoft.com/en-us/powershell/module/az.keyvault/get-azkeyvaultsecret?view=azps-16.1.0)', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-85', 'ai-200', 85, 'Solution: The query produces one row for every distinct `resultCode` value, showing the number of requests in each group.  
  
Does this solution achieve the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[], 'Toán tử Kusto `summarize` nhóm các hàng đầu vào theo `resultCode` và áp dụng `count()` cho mỗi nhóm, tạo ra một hàng kết quả cho mỗi giá trị mã kết quả riêng biệt. `order by request_count desc` tiếp theo sắp xếp các hàng đó từ số lượng yêu cầu cao nhất đến mức thấp nhất.

**Tài liệu tham khảo:**
[summarize operator - Kusto | Microsoft Learn](https://learn.microsoft.com/en-us/kusto/query/summarize-operator?view=azure-monitor) · [KQL Quick Reference - Kusto | Microsoft Learn](https://learn.microsoft.com/en-us/kusto/query/kql-quick-reference?view=microsoft-fabric)', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-86', 'ai-200', 86, 'You need to configure a connection string for the partner-facing service in accordance with the technical requirements.  
  
What should you use?', '[{"key":"A","text":"GitHub secrets"},{"key":"B","text":"Dockerfile ENV instructions"},{"key":"C","text":"Azure Container Registry Helm chart package"},{"key":"D","text":"App Service environment variables"}]'::jsonb, ARRAY['D']::text[], 'Các chuỗi kết nối và cài đặt ứng dụng Azure App Service được hiển thị cho ứng dụng dưới dạng các biến môi trường. Cài đặt Dịch vụ ứng dụng có thể sử dụng tham chiếu Azure Key Vault, cho phép Dịch vụ ứng dụng truy xuất bí mật được lưu trữ tập trung trong thời gian chạy thông qua managed identity mà không nhúng bí mật vào hình ảnh, kiểm soát nguồn hoặc cấu hình ứng dụng.

**Tài liệu tham khảo:**
[Use Key Vault references as app settings in Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references) · [Securely connect to Azure resources from Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/tutorial-connect-overview)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-87', 'ai-200', 87, 'Solution: The query displays each individual request together with its result code.  
  
Does the solution meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], 'Toán tử Kusto `summarize` nhóm các hàng đầu vào theo `resultCode` và tính toán `count()` cho mỗi nhóm, tạo ra một hàng tổng hợp cho mỗi mã kết quả riêng biệt thay vì một hàng cho mỗi yêu cầu riêng lẻ. Sắp xếp `request_count` theo thứ tự giảm dần các số lượng được nhóm từ cao nhất đến thấp nhất.

**Tài liệu tham khảo:**
[summarize operator - Kusto | Microsoft Learn](https://learn.microsoft.com/en-us/kusto/query/summarize-operator?view=azure-monitor) · [KQL Quick Reference - Kusto | Microsoft Learn](https://learn.microsoft.com/en-us/kusto/query/kql-quick-reference?view=microsoft-fabric)', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-88', 'ai-200', 88, 'Solution: Save the API key as an App Service application setting by using the Azure portal.  
  
Does this solution meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[], 'Azure App Service có thể lưu trữ các khóa API một cách an toàn trong cài đặt ứng dụng, mã hóa các cài đặt đó khi lưu trữ và đưa chúng vào mã ứng dụng dưới dạng các biến môi trường khi khởi động ứng dụng. Việc lưu trữ khóa trong cổng Azure giúp khóa này tách biệt khỏi kho lưu trữ Git và lịch sử cam kết của nó trong khi vẫn cung cấp khóa cho vùng chứa đang chạy.

**Tài liệu tham khảo:**
[Securely Connect to Azure Resources - Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/tutorial-connect-overview)', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-89', 'ai-200', 89, 'You need to conduct a one-time analysis of logs gathered from AKS, ACA, and Azure Function apps, in accordance with the business requirements.  
  
What should you use?', '[{"key":"A","text":"KQL query"},{"key":"B","text":"Azure activity log"},{"key":"C","text":"Python function"},{"key":"D","text":"Azure Monitor workbook"}]'::jsonb, ARRAY['A']::text[], 'Ngôn ngữ truy vấn Kusto (KQL) được sử dụng để thực hiện phân tích đặc biệt về dữ liệu nhật ký được thu thập trong Log Analytics, bao gồm nhật ký từ AKS, Azure Container Apps và Azure Functions. Truy vấn KQL có thể lọc, tương quan, tổng hợp và điều tra dữ liệu đo từ xa được thu thập để phân tích một lần.', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-90', 'ai-200', 90, 'You are using Application Insights in Azure Monitor to gather dependency data.  
  
You must be able to:  
  
- Correlate failed requests with dependency calls from the last hour.  
- Calculate the average dependency duration for each operation.  
  
You need to build the KOL query by using the fewest statements.  
  
Which three operators should you use? Each correct answer represents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"extend"},{"key":"B","text":"summarize"},{"key":"C","text":"join"},{"key":"D","text":"where"},{"key":"E","text":"distinct"}]'::jsonb, ARRAY['B', 'C', 'D']::text[], '`where` lọc phép đo từ xa theo các yêu cầu không thành công và khoảng thời gian bắt buộc là một giờ. `join` tương quan các cuộc gọi phụ thuộc với các bản ghi yêu cầu thông qua mã định danh hoạt động chung. `summarize` thực hiện tổng hợp thời lượng trung bình và nhóm các kết quả theo thao tác. Ví dụ về truy vấn phụ thuộc Application Insights của Microsoft sử dụng `where` và `join` để liên kết các phụ thuộc với yêu cầu.

**Tài liệu tham khảo:**
[Dependency tracking in Application Insights](https://learn.microsoft.com/en-us/azure/azure-monitor/app/dependencies)', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-91', 'ai-200', 91, 'You are building a Java application that uses Apache Cassandra to store key-value data. You plan to use a new Azure Cosmos DB resource and the Azure Cosmos DB for Apache Cassandra API in the application. You create a Microsoft Entra ID group named **Azure Cosmos DB Creators** to allow provisioning of Azure Cosmos DB accounts, databases, and containers.  
  
The Microsoft Entra ID group must not be able to access the keys required to access the data.  
  
You need to limit access for the Microsoft Entra ID group.  
  
Which role-based access control should you use?', '[{"key":"A","text":"Cosmos DB Operator"},{"key":"B","text":"Cosmos DB Account Reader"},{"key":"C","text":"Document DB Accounts Contributor"},{"key":"D","text":"Cosmos Backup Operator"}]'::jsonb, ARRAY['A']::text[], 'Vai trò Người vận hành Cosmos DB cho phép quản lý tài khoản Azure Cosmos DB đồng thời ngăn chặn quyền truy cập vào khóa tài khoản và chuỗi kết nối, do đó nhóm có thể thực hiện cấp phép mà không cần lấy thông tin xác thực để truy cập dữ liệu.

**Tài liệu tham khảo:**
[Azure built-in roles - Azure RBAC](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles) · [Connect using role-based access control and Microsoft Entra ID - Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/how-to-connect-role-based-access-control)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-92', 'ai-200', 92, 'Solution: The result codes are ordered alphabetically.  
  
Does this solution meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], 'Mệnh đề `order by request_count desc` sắp xếp các hàng được nhóm theo số lượng yêu cầu theo thứ tự giảm dần. Nó không sắp xếp các giá trị `resultCode` theo thứ tự bảng chữ cái, do đó việc sắp xếp theo thứ tự bảng chữ cái không đáp ứng yêu cầu liệt kê các mã kết quả từ thường xuyên nhất đến ít thường xuyên nhất.

**Tài liệu tham khảo:**
[sort operator - Kusto](https://learn.microsoft.com/en-us/kusto/query/sort-operator?view=microsoft-fabric)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-93', 'ai-200', 93, 'You are configuring an Azure-hosted AI application that uses Azure App Configuration to manage runtime settings.  
  
The application must provide the following functionality:  
  
- Support percentage-based, targeted rollouts.  
- Maximize token limits per request.  
- Store a key that is retrieved securely at runtime.  
- Reference a list of supported deployment regions.  
  
You need to configure the App Configuration features for the application. Each feature may be used once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"slot1","text":"Support percentage-based, targeted rollouts.","correctAnswer":"B"},{"id":"slot2","text":"Maximize token limits per request.","correctAnswer":"A"},{"id":"slot3","text":"Store a key that is retrieved securely at runtime.","correctAnswer":"C"},{"id":"slot4","text":"Reference a list of supported deployment regions.","correctAnswer":"A"}],"choices":[{"key":"A","text":"Key-value"},{"key":"B","text":"Feature flag"},{"key":"C","text":"Key Vault reference"}]}'::jsonb, ARRAY['slot1=B', 'slot2=A', 'slot3=C', 'slot4=A']::text[], 'Cờ tính năng cung cấp khả năng kích hoạt có điều kiện và triển khai theo mục tiêu hoặc dựa trên tỷ lệ phần trăm. Khóa-giá trị tiêu chuẩn chứa các cài đặt ứng dụng thông thường như giới hạn mã thông báo và danh sách khu vực. Tham chiếu Key Vault lưu trữ con trỏ tới một bí mật trong Azure Key Vault để ứng dụng có thể giải quyết bí mật đó một cách an toàn trong thời gian chạy.

**Tài liệu tham khảo:**
[Azure App Configuration documentation](https://learn.microsoft.com/en-us/azure/azure-app-configuration/) · [Understand Azure App Configuration key-value store](https://learn.microsoft.com/en-us/azure/azure-app-configuration/concept-key-value)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-94', 'ai-200', 94, 'An AI application uses a database, and its database credential rotates every 30 days.  
  
The application currently needs a manual update whenever the credential is rotated.  
  
You need to ensure that the application always uses the newest secret version without manual updates.  
  
Which two actions should you take? Each correct answer is part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Retrieve secrets without specifying a version identifier."},{"key":"B","text":"Retrieve secrets by specifying a version identifier."},{"key":"C","text":"Cache the secret for 30 days."},{"key":"D","text":"Configure a Key Vault rotation policy."}]'::jsonb, ARRAY['A', 'D']::text[], 'Việc truy xuất bí mật mà không có số nhận dạng phiên bản sẽ chuyển sang phiên bản mới nhất của nó, do đó ứng dụng không được ghim vào giá trị được xoay trước đó. Cấu hình xoay vòng cung cấp khả năng tạo định kỳ các phiên bản mới; cùng nhau, việc xoay vòng và truy xuất không phiên bản cho phép ứng dụng sử dụng giá trị hiện tại mà không cần cập nhật phiên bản thủ công. API chính sách xoay vòng gốc của Azure Key Vault dành riêng cho khóa mật mã; thông tin xác thực cơ sở dữ liệu được lưu trữ dưới dạng bí mật yêu cầu quy trình luân chuyển bí mật thích hợp để cập nhật cả thông tin xác thực cơ sở dữ liệu và bí mật Key Vault.

**Tài liệu tham khảo:**
[Get Secret - Azure Key Vault REST API](https://learn.microsoft.com/en-us/rest/api/keyvault/secrets/get-secret/get-secret?view=rest-keyvault-secrets-2025-07-01) · [Understanding autorotation in Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/autorotation)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-95', 'ai-200', 95, 'You are troubleshooting latency by using the requests table in Azure Monitor.  
  
You need to calculate the average request duration grouped by cloud role name while limiting results to the previous 30 minutes.  
  
Which code elements should you select?', '{"type":"matching_dropdown","statements":[{"id":"filter","text":"Option 1:","correctAnswer":"C","choiceKeys":["A","B","C"]},{"id":"aggregate","text":"Option 2:","correctAnswer":"F","choiceKeys":["D","E","F"]}],"choices":[{"key":"A","text":"distinct"},{"key":"B","text":"render"},{"key":"C","text":"where"},{"key":"D","text":"extend"},{"key":"E","text":"project"},{"key":"F","text":"summarize"}]}'::jsonb, ARRAY['filter=C', 'aggregate=F']::text[], '`where` lọc các bản ghi yêu cầu theo phạm vi thời gian đã chỉ định. `summarize` thực hiện tổng hợp `avg(duration)` và tạo ra một nhóm kết quả riêng cho mỗi `cloud_RoleName`.

**Tài liệu tham khảo:**
[summarize operator - Kusto](https://learn.microsoft.com/en-us/kusto/query/summarize-operator?view=azure-monitor) · [Get started with log queries in Azure Monitor Logs](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/get-started-queries)', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-96', 'ai-200', 96, 'You are reviewing an Azure Function app that handles incoming order requests for a company.  
  
The function must:  
  
- Accept order submissions from an external client application.  
- Require controlled access for security.  
- Return a response containing the processed request payload.  
  
Review the following code segment:  
  
![Question Image](https://cdn.examcademy.com/images/questions/1787286010124-8uv39bbd.png)  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"type":"statement_matrix","statements":[{"id":"1","text":"The function requires a key for invocation.","correctAnswer":"Yes"},{"id":"2","text":"The function supports HTTP GET requests.","correctAnswer":"No"},{"id":"3","text":"The response returns the request body.","correctAnswer":"Yes"},{"id":"4","text":"The function validates the request body before returning a response.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:Yes', '2:No', '3:Yes', '4:No']::text[], '`AuthorizationLevel.Function` yêu cầu phím chức năng. Trình kích hoạt chỉ cho phép phương thức POST một cách rõ ràng, do đó GET không được hỗ trợ. `ReadToEndAsync()` đọc nội dung yêu cầu và `OkObjectResult(result)` trả về nội dung yêu cầu đó với phản hồi thành công. Logic xác thực No xảy ra trước khi phản hồi được trả về.

**Tài liệu tham khảo:**
[Azure Functions HTTP triggers and bindings](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], 'https://cdn.examcademy.com/images/questions/1787286010124-8uv39bbd.png', 'published'),
  ('ai200-97', 'ai-200', 97, 'HOTSPOT  
  
You have an Azure Functions app on the Consumption hosting plan for a company. The app includes the following functions:  
  
![Question Image](https://cdn.examcademy.com/images/questions/1787286009288-y712ih7j.png)  
  
You plan to enable dynamic concurrency on the app. The company requires that each function’s concurrency level be managed separately.  
  
You need to configure the app for dynamic concurrency.  
  
Which file and function names should you use?', '{"type":"matching_dropdown","statements":[{"id":"file_name","text":"File name","correctAnswer":"B","choiceKeys":["A","B","C"]},{"id":"function_name","text":"Function name","correctAnswer":"F","choiceKeys":["D","E","F"]}],"choices":[{"key":"A","text":"function.json"},{"key":"B","text":"host.json"},{"key":"C","text":"local.settings.json"},{"key":"D","text":"f1"},{"key":"E","text":"f2"},{"key":"F","text":"f3"}]}'::jsonb, ARRAY['file_name=B', 'function_name=F']::text[], 'Tính đồng thời động được bật thông qua cấu hình `concurrency` trong Host.json. Trình kích hoạt Azure Queue Storage hỗ trợ đồng thời động và thời gian chạy điều chỉnh đồng thời một cách độc lập cho từng chức năng áp dụng, vì vậy f3 là chức năng áp dụng.

**Tài liệu tham khảo:**
[Concurrency in Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/functions-concurrency) · [host.json reference for Azure Functions 2.x and later](https://learn.microsoft.com/en-us/azure/azure-functions/functions-host-json)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], 'https://cdn.examcademy.com/images/questions/1787286009288-y712ih7j.png', 'published'),
  ('ai200-98', 'ai-200', 98, 'HOTSPOT  
  
You are developing an AI application that retrieves database credentials from Key Vault by using the Azure SDK for Python.  
  
The application must authenticate by using managed identity.  
  
Review the following code segment that retrieves a secret from Key Vault.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1787286011593-8eo6y920.png)  
  
For each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.', '{"type":"statement_matrix","statements":[{"id":"1","text":"The code retrieves the latest version of dbPassword.","correctAnswer":"No"},{"id":"2","text":"The code authenticates to Key Vault without storing client secrets in the application when deployed to an Azure-hosted environment that has a managed identity enabled.","correctAnswer":"Yes"},{"id":"3","text":"If dbPassword is rotated and a new version is created, subsequent calls to this code will retrieve the new version.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:No', '2:Yes', '3:No']::text[], 'Yêu cầu bí mật Key Vault với một phiên bản cụ thể sẽ truy xuất phiên bản bất biến đó; bỏ qua phiên bản sẽ lấy phiên bản mới nhất. `DefaultAzureCredential` hỗ trợ managed identity trong môi trường được lưu trữ trên Azure, cho phép xác thực mà không cần bí mật ứng dụng khách được lưu trữ. Vì yêu cầu sử dụng rõ ràng phiên bản `"123"` nên việc xoay vòng bí mật để tạo phiên bản mới hơn không ảnh hưởng đến các yêu cầu sau này đối với phiên bản đó.

**Tài liệu tham khảo:**
[Azure Key Vault Secrets client library for Python](https://learn.microsoft.com/en-us/python/api/overview/azure/keyvault-secrets-readme?view=azure-python) · [Azure Identity client library for Python](https://learn.microsoft.com/en-us/python/api/overview/azure/identity-readme?view=azure-python)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], 'https://cdn.examcademy.com/images/questions/1787286011593-8eo6y920.png', 'published'),
  ('ai200-99', 'ai-200', 99, 'You are deploying an AI service to ACA.  
  
The service must securely retrieve secrets from Key Vault by using managed identity.  
  
You need to configure secure access.  
  
Which three actions should you perform, in sequence?', '{"type":"matching_drag_drop","statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"D"},{"id":"step2","text":"Slot 2:","correctAnswer":"A"},{"id":"step3","text":"Slot 3:","correctAnswer":"C"}],"choices":[{"key":"A","text":"Grant the Key Vault Secrets User role to the managed identity."},{"key":"B","text":"Configure an access policy with the recover permission."},{"key":"C","text":"Retrieve the secret by using the SDK."},{"key":"D","text":"Assign a system-assigned managed identity."}]}'::jsonb, ARRAY['step1=D', 'step2=A', 'step3=C']::text[], 'Kích hoạt system-assigned managed identity trước khi gán quyền cho nó. Vai trò Key Vault Secrets của người dùng Azure RBAC cho phép managed identity đọc nội dung bí mật, cho phép ứng dụng truy xuất bí mật bằng thông tin xác thực SDK dựa trên danh tính đó. Quyền khôi phục chỉ liên quan đến việc khôi phục các đối tượng Key Vault đã xóa.

**Tài liệu tham khảo:**
[Manage secrets in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/manage-secrets)', 'Develop Containerized Solutions On Azure', ARRAY['AI-200', 'Develop Containerized Solutions On Azure']::text[], NULL, 'published'),
  ('ai200-100', 'ai-200', 100, 'You are designing an Azure Function app that handles large image uploads submitted by users through an HTTP endpoint.  
  
The solution must:  
  
- Prevent client timeouts by separating image processing from the initial upload request.  
- Support automatic retry behavior for unsuccessful processing attempts.  
- Scale background processing independently from the rate of incoming HTTP uploads.  
  
You need to design a scalable, reliable asynchronous processing solution.  
  
Which two actions should you implement? Each correct answer presents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Implement a queue-triggered function for image processing."},{"key":"B","text":"Configure retry policies on a storage queue."},{"key":"C","text":"Process the image inside the HTTP-triggered function."},{"key":"D","text":"Persist upload metadata to Azure Storage."}]'::jsonb, ARRAY['A', 'B']::text[], 'Chức năng Azure được kích hoạt hàng đợi sẽ xử lý các thông báo sau khi yêu cầu HTTP hoàn thành, tách công việc hình ảnh chạy dài khỏi độ trễ tải lên. Các hàm kích hoạt hàng đợi lưu trữ mở rộng quy mô theo các sự kiện hàng đợi và cung cấp khả năng xử lý thử lại tích hợp cho các tin nhắn không thành công thông qua cài đặt tiện ích mở rộng hàng đợi như thời gian chờ hiển thị và số lượng hàng đợi tối đa.

**Tài liệu tham khảo:**
[Azure Queue storage trigger for Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-queue-trigger) · [Azure Functions Scale and Hosting](https://learn.microsoft.com/en-us/azure/azure-functions/functions-scale)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-101', 'ai-200', 101, 'You build an AI application that stores telemetry documents in Azure Cosmos DB for NoSQL.  
  
Each document has 30 properties. Queries filter only by `deviceId` and `timestamp`.  
  
Write operations consume more RUs than anticipated.  
  
You need to lower RU consumption for write operations while preserving query performance.  
  
What should you do?', '[{"key":"A","text":"Exclude unused properties from indexing."},{"key":"B","text":"Configure selective indexing on queried properties."},{"key":"C","text":"Migrate to a different partition key."},{"key":"D","text":"Enable strong consistency for all requests."}]'::jsonb, ARRAY['A']::text[], 'Azure Cosmos DB dành cho NoSQL lập chỉ mục mọi thuộc tính theo mặc định và việc bảo trì chỉ mục góp phần tính phí ghi cho RU. Việc loại trừ các thuộc tính không bao giờ được truy vấn sẽ làm giảm các đường dẫn được lập chỉ mục và do đó ghi mức tiêu thụ RU, trong khi vẫn giữ lại các chỉ mục cho `deviceId` và `timestamp` sẽ duy trì hiệu suất truy vấn. Microsoft khuyến nghị phương pháp lập chỉ mục chọn không tham gia này để loại trừ có chọn lọc các đường dẫn không cần thiết.

**Tài liệu tham khảo:**
[Indexing policies in Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/index-policy) · [Manage indexing policies in Azure Cosmos DB for NoSQL](https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/how-to-manage-indexing-policy)', 'Develop AI Solutions By Using Azure Data Management Services', ARRAY['AI-200', 'Develop AI Solutions By Using Azure Data Management Services']::text[], NULL, 'published'),
  ('ai200-102', 'ai-200', 102, 'You are building a Python application that uses the `azure-cosmos` SDK to read data from Azure Cosmos DB for NoSQL.  
  
You must connect to an existing account and execute a SQL query against an existing container.  
  
Which four actions should you carry out in sequence?', '{"type":"matching_drag_drop","statements":[{"id":"slot1","text":"Slot 1:","correctAnswer":"E"},{"id":"slot2","text":"Slot 2:","correctAnswer":"C"},{"id":"slot3","text":"Slot 3:","correctAnswer":"D"},{"id":"slot4","text":"Slot 4:","correctAnswer":"B"}],"choices":[{"key":"A","text":"Initialize DatabaseProxy."},{"key":"B","text":"Run the query."},{"key":"C","text":"Specify the database name."},{"key":"D","text":"Obtain the container reference."},{"key":"E","text":"Initialize CosmosClient."}]}'::jsonb, ARRAY['slot1=E', 'slot2=C', 'slot3=D', 'slot4=B']::text[], '`CosmosClient` là ứng dụng khách SDK cấp tài khoản. Sử dụng nó để truy xuất cơ sở dữ liệu hiện có theo tên, sau đó sử dụng proxy cơ sở dữ liệu kết quả để truy xuất vùng chứa hiện có. SQL được thực thi thông qua phương thức `query_items` của vùng chứa, do đó truy vấn tuân theo việc truy xuất vùng chứa.

**Tài liệu tham khảo:**
[Quickstart - Azure SDK for Python - Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/quickstart-python) · [Azure Cosmos DB SQL API client library for Python](https://learn.microsoft.com/en-us/python/api/overview/azure/cosmos-readme?view=azure-python)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-103', 'ai-200', 103, 'You need to resolve the known issue caused by vector similarity queries.  
  
Which two actions should you take? Each correct answer provides part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Add a composite index on the vector fields and metadata properties of the container."},{"key":"B","text":"Modify the indexing precision of the vector fields."},{"key":"C","text":"Set the account consistency level to Strong."},{"key":"D","text":"Change the vector index type from Oat to quantizedFlat or diskANN."}]'::jsonb, ARRAY['B', 'D']::text[], 'Việc giảm độ chính xác của chỉ mục vectơ sẽ làm giảm dung lượng lưu trữ và xử lý cần thiết cho vector search, đánh đổi một số mức thu hồi/độ chính xác để lấy hiệu quả. `quantizedFlat` nén vectơ và cung cấp chi phí RU thấp hơn so với chỉ mục phẳng, trong khi `diskANN` được tối ưu hóa để tìm kiếm lân cận gần nhất gần đúng hiệu quả với mức tiêu thụ RU thấp trên quy mô lớn. Các chỉ mục tổng hợp không tối ưu hóa tìm kiếm theo khoảng cách vectơ và tính nhất quán cao sẽ làm tăng chi phí đọc.

**Tài liệu tham khảo:**
[Integrated Vector Store - Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search) · [Manage Indexing Policies - Azure Cosmos DB for NoSQL](https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/how-to-manage-indexing-policy)', 'Develop AI Solutions By Using Azure Data Management Services', ARRAY['AI-200', 'Develop AI Solutions By Using Azure Data Management Services']::text[], NULL, 'published'),
  ('ai200-104', 'ai-200', 104, 'You are deploying semantic retrieval for a chatbot.  
  
Embeddings are already saved in Redis; however, vector-similarity queries return no matches.  
  
You need to fix the vector similarity search issue.  
  
What should you do?', '[{"key":"A","text":"Configure a metadata-only secondary index."},{"key":"B","text":"Enable geo-replication."},{"key":"C","text":"Create a FLAT vector index on the embedding field."},{"key":"D","text":"Set a 24-hour Time to Live (TTL) on embedding keys."}]'::jsonb, ARRAY['C']::text[], 'Các truy vấn tương tự vectơ Redis yêu cầu chỉ mục tìm kiếm với trường nhúng được xác định là trường vectơ. Chỉ mục vectơ `FLAT` cung cấp tìm kiếm lân cận gần nhất chính xác trên trường đó; chỉ lưu trữ các phần nhúng không làm cho chúng có thể tìm kiếm được bằng độ tương tự của vectơ. Các cài đặt chỉ mục siêu dữ liệu, sao chép địa lý và TTL không cung cấp chỉ mục vectơ.

**Tài liệu tham khảo:**
[Redis vector search concepts](https://redis.io/docs/latest/develop/ai/search-and-query/vectors/)', 'Develop AI Solutions By Using Azure Data Management Services', ARRAY['AI-200', 'Develop AI Solutions By Using Azure Data Management Services']::text[], NULL, 'published'),
  ('ai200-105', 'ai-200', 105, 'You need to configure database resources for the Azure Database for PostgreSQL instance.  
  
How should you complete the configuration to satisfy the business and technical requirements?', '{"type":"matching_dropdown","statements":[{"id":"latency","text":"Meet the 200ms semantic search latency requirement.","correctAnswer":"A","choiceKeys":["A","B","C"]},{"id":"residency","text":"Optimize the environment for high-dimensional pgvector index residency.","correctAnswer":"C","choiceKeys":["D","B","C"]},{"id":"ingestion","text":"Support the continuous ingestion of transaction-based embeddings.","correctAnswer":"E","choiceKeys":["E","A","F"]}],"choices":[{"key":"A","text":"Increase compute vCores."},{"key":"B","text":"Increase max_connections."},{"key":"C","text":"Increase memory allocation."},{"key":"D","text":"Enable read replica."},{"key":"E","text":"Enable storage autoscale."},{"key":"F","text":"Increase backup retention."}]}'::jsonb, ARRAY['latency=A', 'residency=C', 'ingestion=E']::text[], 'Các vCore bổ sung cung cấp thông lượng toán học cần thiết để duy trì các tìm kiếm tương tự vectơ ở dưới mục tiêu độ trễ tải tối đa. Việc tăng bộ nhớ hỗ trợ duy trì các chỉ mục pgvector chiều cao trong RAM, tránh việc đọc đĩa chậm hơn. Tính năng tự động điều chỉnh lưu trữ sẽ tự động tăng dung lượng khi quá trình nhập nhúng liên tục tiêu tốn dung lượng lưu trữ, giúp cơ sở dữ liệu không bị hết dung lượng mà không làm gián đoạn khối lượng công việc.

**Tài liệu tham khảo:**
[Compute Options - Azure Database for PostgreSQL](https://learn.microsoft.com/en-us/azure/postgresql/compute-storage/concepts-compute) · [Configure storage autogrow in Azure Database for PostgreSQL flexible server](https://learn.microsoft.com/en-us/azure/postgresql/scale/how-to-auto-grow-storage)', 'Develop AI Solutions By Using Azure Data Management Services', ARRAY['AI-200', 'Develop AI Solutions By Using Azure Data Management Services']::text[], NULL, 'published'),
  ('ai200-106', 'ai-200', 106, 'You need to deploy a batch retraining workload.  
  
How should you complete the scaling configuration?', '{"type":"matching_dropdown","statements":[{"id":"scaler","text":"Trigger scaling based on queue depth.","correctAnswer":"B","choiceKeys":["A","B","C"]},{"id":"minimum","text":"Deallocate instances when the message queue is empty.","correctAnswer":"D","choiceKeys":["D","E"]},{"id":"maximum","text":"Prevent uncontrolled burst scaling.","correctAnswer":"F","choiceKeys":["F","G"]}],"choices":[{"key":"A","text":"CPU utilization scaler"},{"key":"B","text":"Azure Service Bus scaler"},{"key":"C","text":"HTTP concurrency scaler"},{"key":"D","text":"Minimum replicas = 0"},{"key":"E","text":"Minimum replicas = 1"},{"key":"F","text":"Maximum replicas = 10"},{"key":"G","text":"Allow the system to determine the maximum replicas"}]}'::jsonb, ARRAY['scaler=B', 'minimum=D', 'maximum=F']::text[], 'Bộ chia tỷ lệ Azure Service Bus KEDA chia tỷ lệ khối lượng công việc theo nhu cầu tin nhắn hàng đợi. Số lượng bản sao tối thiểu là 0 cho phép chuyển tỷ lệ thành 0 khi các tin nhắn no đang chờ xử lý, giảm chi phí nhàn rỗi. Cấu hình tối đa là 10 sẽ giới hạn số lượng bản sao mà KEDA có thể tạo, ngăn chặn việc mở rộng quy mô quá mức.

**Tài liệu tham khảo:**
[Kubernetes Event-Driven Autoscaling (KEDA) in Azure Kubernetes Service (AKS)](https://learn.microsoft.com/en-us/azure/aks/keda-about) · [Scaling in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/scale-app)', 'Develop Containerized Solutions On Azure', ARRAY['AI-200', 'Develop Containerized Solutions On Azure']::text[], NULL, 'published'),
  ('ai200-107', 'ai-200', 107, 'You are creating an Azure Functions app project in your local development environment by using Azure Functions Core Tools.  
  
You must create the project in either Python or C# without using a template.  
  
Specify the command and parameter required to create the Azure Functions app project.', '{"type":"matching_dropdown","statements":[{"id":"command","text":"Command","correctAnswer":"B","choiceKeys":["A","B","C"]},{"id":"parameter","text":"Parameter","correctAnswer":"E","choiceKeys":["D","E","F"]}],"choices":[{"key":"A","text":"func new"},{"key":"B","text":"func init"},{"key":"C","text":"func azure"},{"key":"D","text":"--language"},{"key":"E","text":"--worker-runtime"},{"key":"F","text":"--target-framework"}]}'::jsonb, ARRAY['command=B', 'parameter=E']::text[], '`func init` khởi tạo dự án Azure Functions mới. Tùy chọn `--worker-runtime` chọn thời gian chạy ngôn ngữ của nó, bao gồm các tùy chọn Python và C#. Thay vào đó, `func new` tạo một hàm từ mẫu trong dự án hiện có.

**Tài liệu tham khảo:**
[Azure Functions local runtime and tools reference](https://learn.microsoft.com/en-us/azure/azure-functions/functions-core-tools-reference#func-init)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-108', 'ai-200', 108, 'You have a newly provisioned Azure subscription and are designing a custom Event Grid workflow for AI inference events.  
  
You need to implement the Event Grid components that route high-confidence events to a downstream processor.  
  
Which three actions should you perform, in sequence?', '{"type":"matching_drag_drop","statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"B"},{"id":"step2","text":"Slot 2:","correctAnswer":"D"},{"id":"step3","text":"Slot 3:","correctAnswer":"E"}],"choices":[{"key":"A","text":"Create a domain."},{"key":"B","text":"Register the provider."},{"key":"C","text":"Create a partner topic."},{"key":"D","text":"Create a custom topic."},{"key":"E","text":"Create an event subscription."}]}'::jsonb, ARRAY['step1=B', 'step2=D', 'step3=E']::text[], 'Đăng ký mới có thể yêu cầu đăng ký nhà cung cấp tài nguyên Microsoft.EventGrid trước khi có thể triển khai tài nguyên Lưới sự kiện. Chủ đề tùy chỉnh là tài nguyên Lưới sự kiện để xuất bản các sự kiện do ứng dụng xác định và đăng ký sự kiện trên chủ đề đó cung cấp khả năng định tuyến và lọc cho trình xử lý sự kiện xuôi dòng. Các miền Lưới sự kiện và chủ đề đối tác giải quyết các mô hình xuất bản khác và không cần thiết cho quy trình làm việc theo chủ đề tùy chỉnh này.

**Tài liệu tham khảo:**
[Quickstart: Route custom events to web endpoint with Azure CLI and Event Grid](https://learn.microsoft.com/en-us/azure/event-grid/custom-event-quickstart) · [Create a custom topic or a domain in Azure Event Grid](https://learn.microsoft.com/en-us/azure/event-grid/create-custom-topic)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-109', 'ai-200', 109, 'A new revision of an app is deployed in ACA.  
  
You must progressively shift production traffic to that revision while monitoring its performance. You also need to be able to roll back quickly.  
  
Which two actions should you take? Each correct answer is part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Use single revision mode."},{"key":"B","text":"Restart the revision."},{"key":"C","text":"Enable multiple revision mode."},{"key":"D","text":"Increase replica count."},{"key":"E","text":"Use traffic splitting."}]'::jsonb, ARRAY['C', 'E']::text[], 'Chế độ nhiều bản sửa đổi giữ cho nhiều bản sửa đổi hoạt động, cho phép bản sửa đổi sản xuất trước đó vẫn có sẵn để khôi phục. Phân chia lưu lượng truy cập phân phối trọng số phần trăm có thể định cấu hình trên các bản sửa đổi đang hoạt động, cho phép triển khai dần dần trong khi hiệu suất được theo dõi.

**Tài liệu tham khảo:**
[Update and deploy changes in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/revisions) · [Traffic splitting in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/traffic-splitting)', 'Develop Containerized Solutions On Azure', ARRAY['AI-200', 'Develop Containerized Solutions On Azure']::text[], NULL, 'published'),
  ('ai200-110', 'ai-200', 110, 'You are optimizing an AI inference API that uses Redis caching.  
  
You must lower the risk of returning outdated data while keeping cache-management overhead to a minimum.  
  
You need to implement the caching strategy that meets these requirements.  
  
What should you do?', '[{"key":"A","text":"Trigger invalidation when source data changes."},{"key":"B","text":"Set eviction policy to allkeys-lru."},{"key":"C","text":"Increase memory allocation."},{"key":"D","text":"Reset expiration on each read."}]'::jsonb, ARRAY['A']::text[], 'Việc vô hiệu hóa bộ đệm được kích hoạt bởi các thay đổi dữ liệu nguồn sẽ xóa hoặc làm mới các giá trị được lưu trong bộ nhớ đệm bị ảnh hưởng ngay khi chúng trở nên lỗi thời. Điều này trực tiếp hạn chế các phản hồi cũ đồng thời tránh tình trạng xáo trộn bộ đệm không cần thiết khi đặt lại hết hạn hoặc trục xuất bừa bãi.', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-111', 'ai-200', 111, 'You plan to deploy a web application to AKS.  
  
The solution must:  
  
- Scale out the application by adding more pods during periods of peak CPU usage.  
- Expose the application only internally within the cluster.  
  
You need to configure a Kubernetes resource for each requirement. You may use each resource once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"scale-out-application","text":"Scale out the application.","correctAnswer":"E"},{"id":"internal-only-exposure","text":"Expose the application internally only.","correctAnswer":"C"}],"choices":[{"key":"A","text":"Ingress"},{"key":"B","text":"Deployment"},{"key":"C","text":"ClusterIP service"},{"key":"D","text":"VerticalPodAutoscaler"},{"key":"E","text":"HorizontalPodAutoscaler"}]}'::jsonb, ARRAY['scale-out-application=E', 'internal-only-exposure=C']::text[], 'HorizontalPodAutoscaler chia tỷ lệ khối lượng công việc bằng cách thay đổi số lượng bản sao của nó để đáp ứng với các số liệu được quan sát, bao gồm cả việc sử dụng CPU. Dịch vụ ClusterIP chỉ có thể truy cập được trong cụm Kubernetes, khiến nó trở thành cơ chế tiếp xúc chỉ dành cho nội bộ thích hợp.

**Tài liệu tham khảo:**
[Kubernetes Horizontal Pod Autoscaling](https://kubernetes.io/docs/concepts/workloads/autoscaling/horizontal-pod-autoscale/) · [Kubernetes Service types](https://kubernetes.io/docs/concepts/services-networking/service/#type-clusterip)', 'Develop Containerized Solutions On Azure', ARRAY['AI-200', 'Develop Containerized Solutions On Azure']::text[], NULL, 'published'),
  ('ai200-112', 'ai-200', 112, 'You have container source code in a Git repository.  
  
The container registry must automatically build and store a new container image whenever a developer commits code to the Git repository.  
  
You must minimize reliance on external build infrastructure.  
  
You need to configure Azure Container Registry (ACR) to natively and automatically manage the build process.  
  
Which two ACR components should you use? Each correct answer presents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Webhook"},{"key":"B","text":"Quick task"},{"key":"C","text":"Artifact Cache rule"},{"key":"D","text":"Source-triggered task"}]'::jsonb, ARRAY['A', 'D']::text[], 'Tác vụ do nguồn ACR kích hoạt thực hiện quá trình xây dựng hình ảnh vùng chứa tự động khi mã nguồn được cam kết với kho lưu trữ Git được hỗ trợ. Tác vụ ACR sử dụng webhook trong kho lưu trữ để nhận sự kiện cập nhật nguồn kích hoạt tác vụ. Các tác vụ nhanh được bắt đầu theo cách thủ công, trong khi Artifact Cache quy tắc lưu trữ các tạo phẩm ngược dòng và không xây dựng mã nguồn.

**Tài liệu tham khảo:**
[Automate container builds with Azure Container Registry Tasks](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-overview)', 'Develop Containerized Solutions On Azure', ARRAY['AI-200', 'Develop Containerized Solutions On Azure']::text[], NULL, 'published'),
  ('ai200-113', 'ai-200', 113, 'You develop an application that sells AI-generated images from user input. A recent marketing campaign displays unique ads every second day.  
  
Sales data is stored in Azure Cosmos DB, and each sale date is in a property named `whenFinished`.  
  
The marketing department requires a view showing the number of sales for each unique ad.  
  
Complete the query for the view.', '{"type":"matching_dropdown","statements":[{"id":"select_aggregate","text":"Option 1:","correctAnswer":"C","choiceKeys":["A","B","C"]},{"id":"select_bin","text":"Option 2:","correctAnswer":"D","choiceKeys":["D","E","F","G"]},{"id":"group_bin","text":"Option 3:","correctAnswer":"D","choiceKeys":["D","E","F","G"]}],"choices":[{"key":"A","text":"max(c.whenFinished)"},{"key":"B","text":"sum(c.whenFinished)"},{"key":"C","text":"count(c.whenFinished)"},{"key":"D","text":"DateTimeBin(c.whenFinished, ''day'', 2)"},{"key":"E","text":"DateTimePart(c.whenFinished, ''day'', 2)"},{"key":"F","text":"DateTimeBin(c.whenFinished, ''hour'', 12)"},{"key":"G","text":"DateTimePart(c.whenFinished, ''hour'', 12)"}]}'::jsonb, ARRAY['select_aggregate=C', 'select_bin=D', 'group_bin=D']::text[], '`COUNT` tạo ra tổng doanh số. `DateTimeBin` làm tròn mỗi dấu thời gian bán hàng thành một khoảng thời gian cố định; thùng hai ngày (`''day'', 2`) tương ứng với nhịp quảng cáo duy nhất của chiến dịch. Biểu thức nhóm phải khớp với thùng đã chọn để mỗi hàng trả về là tổng số cho một khoảng thời gian quảng cáo hai ngày.

**Tài liệu tham khảo:**
[DATETIMEBIN - Query Language for Cosmos DB](https://learn.microsoft.com/en-us/cosmos-db/query/datetimebin) · [COUNT - Query Language for Cosmos DB](https://learn.microsoft.com/en-us/cosmos-db/query/count)', 'Develop AI Solutions By Using Azure Data Management Services', ARRAY['AI-200', 'Develop AI Solutions By Using Azure Data Management Services']::text[], NULL, 'published'),
  ('ai200-114', 'ai-200', 114, 'You are building a back-end pipeline that receives AI inference requests.  
  
The pipeline must perform these actions:  
  
- Publish a message so that multiple independent consumers receive it.  
- Process messages in first-in, first-out (FIFO) order.  
- Isolate any failed messages.  
  
You need to configure the appropriate Service Bus entities.  
  
How should you configure the Service Bus entities?  
  
Each configuration may be used once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"slot1","text":"Publish a message for multiple consumers to receive.","correctAnswer":"A"},{"id":"slot2","text":"Process messages in FIFO order.","correctAnswer":"B"},{"id":"slot3","text":"Isolate any failed messages.","correctAnswer":"E"}],"choices":[{"key":"A","text":"topic"},{"key":"B","text":"queue"},{"key":"C","text":"subscription rule"},{"key":"D","text":"subscription filter"},{"key":"E","text":"dead-letter queue"},{"key":"F","text":"auto-forward destination"}]}'::jsonb, ARRAY['slot1=A', 'slot2=B', 'slot3=E']::text[], 'Chủ đề Bus dịch vụ triển khai mẫu xuất bản/đăng ký một-nhiều: mỗi đăng ký có thể nhận được một bản sao của thư đã xuất bản. Hàng đợi là thực thể Service Bus để gửi tin nhắn FIFO; phiên được yêu cầu khi cần đảm bảo xử lý FIFO nghiêm ngặt. Hàng đợi thư chết là hàng đợi phụ chứa các tin nhắn không thể gửi hoặc xử lý thành công, cách ly các lỗi.

**Tài liệu tham khảo:**
[Azure Service Bus queues, topics, and subscriptions](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions) · [Azure Service Bus message sessions](https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-sessions)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-115', 'ai-200', 115, 'You are designing a messaging solution that uses Service Bus for AI document processing.  
  
You must ensure that a published message is delivered to multiple independent consumers. Every consumer must receive its own copy of the message.  
  
Which two Service Bus entities should you use? Each correct answer represents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"topic"},{"key":"B","text":"subscription"},{"key":"C","text":"queue"},{"key":"D","text":"dead-letter queue"},{"key":"E","text":"message session"}]'::jsonb, ARRAY['A', 'B']::text[], 'Các chủ đề và đăng ký Azure Service Bus triển khai tin nhắn xuất bản/đăng ký một-nhiều. Nhà sản xuất gửi đến một chủ đề và mỗi người đăng ký đăng ký chủ đề đó sẽ nhận được một bản sao riêng để xử lý độc lập. Thay vào đó, hàng đợi sẽ gửi một thông điệp đến một người tiêu dùng.

**Tài liệu tham khảo:**
[Azure Service Bus queues, topics, and subscriptions](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-116', 'ai-200', 116, 'You plan to deploy an Azure Container Apps app named App1. App1 will use an access key to connect to a backend API.  
  
The solution must store the key outside the App1 environment and minimize maintenance effort.  
  
You need to configure secure key storage for App1.  
  
Which configurations should you use?', '{"type":"matching_dropdown","statements":[{"id":"key_storage","text":"Provide the key storage for App1.","correctAnswer":"B","choiceKeys":["A","B","C"]},{"id":"access","text":"Secure App1 access to the key storage.","correctAnswer":"E","choiceKeys":["D","E","F"]}],"choices":[{"key":"A","text":"Azure Key Vault key"},{"key":"B","text":"Azure Key Vault secret"},{"key":"C","text":"Azure Container Apps secret"},{"key":"D","text":"Service principal"},{"key":"E","text":"Managed identity"},{"key":"F","text":"Workload identity"}]}'::jsonb, ARRAY['key_storage=B', 'access=E']::text[], 'Khóa truy cập API được lưu trữ dưới dạng bí mật Azure Key Vault. Ứng dụng vùng chứa managed identity xác thực với Key Vault mà không có thông tin xác thực được quản lý riêng; cấp quyền nhận dạng đó để đọc bí mật (ví dụ: vai trò Người dùng bí mật Key Vault).

**Tài liệu tham khảo:**
[Manage secrets in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/manage-secrets) · [Security overview in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/security)', 'Secure Monitor Troubleshoot Azure Solutions', ARRAY['AI-200', 'Secure Monitor Troubleshoot Azure Solutions']::text[], NULL, 'published'),
  ('ai200-117', 'ai-200', 117, 'You plan to create a Docker image that runs an ASP.NET Core application named ContosoApp. You have a setup script named setupScript.ps1 and a set of application files that includes ContosoApp.dll.  
  
You need to create a Dockerfile that meets these requirements:  
  
- Call setupScript.ps1 while the container is built.  
- Run ContosoApp.dll when the container starts.  
  
The Dockerfile must be created in the same folder that stores ContosoApp.dll and setupScript.ps1.  
  
Which five commands should you use to develop the solution, arranged in the correct order?', '{"type":"matching_drag_drop","statements":[{"id":"line1","text":"Slot 1:","correctAnswer":"C"},{"id":"line2","text":"Slot 2:","correctAnswer":"E"},{"id":"line3","text":"Slot 3:","correctAnswer":"B"},{"id":"line4","text":"Slot 4:","correctAnswer":"D"},{"id":"line5","text":"Slot 5:","correctAnswer":"A"}],"choices":[{"key":"A","text":"CMD [\"dotnet\", \"ContosoApp.dll\"]"},{"key":"B","text":"COPY ./ ."},{"key":"C","text":"FROM microsoft/aspnetcore:latest"},{"key":"D","text":"RUN powershell ./setupScript.ps1"},{"key":"E","text":"WORKDIR /apps/ContosoApp"}]}'::jsonb, ARRAY['line1=C', 'line2=E', 'line3=B', 'line4=D', 'line5=A']::text[], '`FROM` chọn hình ảnh cơ sở ASP.NET Core. `WORKDIR` đặt thư mục cho các hướng dẫn tiếp theo; `COPY./.` sao chép nội dung bối cảnh xây dựng Docker vào đó. `RUN` thực thi trong quá trình xây dựng hình ảnh, do đó, nó gọi setupScript.ps1 vào thời điểm cần thiết. `CMD` xác định lệnh mặc định chạy khi vùng chứa khởi động, gọi ứng dụng thông qua `dotnet`.

**Tài liệu tham khảo:**
[Dockerfile reference](https://docs.docker.com/reference/dockerfile/)', 'Develop Containerized Solutions On Azure', ARRAY['AI-200', 'Develop Containerized Solutions On Azure']::text[], NULL, 'published'),
  ('ai200-118', 'ai-200', 118, 'An Azure Service Bus queue handles AI enrichment jobs.  
  
Some messages repeatedly fail because their payload is malformed.  
  
You need to ensure repeatedly failing messages do **not** block valid messages and that they can be inspected separately.  
  
Which message action should you take?', '[{"key":"A","text":"complete"},{"key":"B","text":"defer"},{"key":"C","text":"dead-letter"},{"key":"D","text":"abandon"}]'::jsonb, ARRAY['C']::text[], 'Hành động **dead-letter** di chuyển một thông báo không thể xử lý đến hàng đợi con chứa các thông báo chết của hàng đợi, tách biệt nó khỏi các thông báo hợp lệ trong khi vẫn lưu giữ nó để kiểm tra và có thể sửa chữa. Azure Service Bus xác định cụ thể các tải trọng không đúng định dạng là các thông báo mà ứng dụng có thể gửi thư chết một cách rõ ràng.

**Tài liệu tham khảo:**
[Service Bus dead-letter queues — Azure Service Bus](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-dead-letter-queues)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-119', 'ai-200', 119, 'You are building a Retrieval-Augmented Generation (RAG) system using native vector search in Azure Cosmos DB for NoSQL API.  
  
A container named Documents stores technical articles, and every article has an `embedding` property.  
  
Ensure the system can efficiently run similarity searches between user queries and stored articles. Configure the database resources to support semantic retrieval.  
  
Each configuration may be used once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"distance_calculations","text":"Facilitate mathematical distance calculations between data points.","correctAnswer":"A"},{"id":"document_schema","text":"Define the document schema for high-dimensional data.","correctAnswer":"C"}],"choices":[{"key":"A","text":"Configure a vector index."},{"key":"B","text":"Configure a composite index."},{"key":"C","text":"Store data as a numeric array."},{"key":"D","text":"Store data as a Base64 encoded string."}]}'::jsonb, ARRAY['distance_calculations=A', 'document_schema=C']::text[], 'Chỉ mục vectơ giúp tìm kiếm độ tương tự vectơ Azure Cosmos DB bằng `VectorDistance` hiệu quả hơn. Các phần nhúng vectơ được lưu trữ dưới dạng mảng JSON chứa các giá trị số. Các chỉ mục tổng hợp hỗ trợ các truy vấn vô hướng đa thuộc tính, trong khi các chuỗi Base64 không phải là biểu diễn vectơ gốc.

**Tài liệu tham khảo:**
[Vector search in Azure Cosmos DB for NoSQL](https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search) · [Quickstart: Azure Cosmos DB vector search with Go](https://learn.microsoft.com/en-us/azure/cosmos-db/quickstart-vector-store-go)', 'Develop AI Solutions By Using Azure Data Management Services', ARRAY['AI-200', 'Develop AI Solutions By Using Azure Data Management Services']::text[], NULL, 'published'),
  ('ai200-120', 'ai-200', 120, 'You are developing a hospital solution using Azure Cosmos DB for NoSQL. The database account’s default consistency level is **Strong**, and its Indexing Mode is set to **Consistent**.  
  
Override consistency at the query level to meet the stated consistency guarantees while minimizing latency and availability impact. Each consistency level may be used once, more than once, or not at all.', '{"type":"matching_drag_drop","statements":[{"id":"patient_status","text":"Return the most recent patient status.","correctAnswer":"A"},{"id":"health_monitoring","text":"Return health monitoring data that is no less than one version behind.","correctAnswer":"C"},{"id":"billing_data","text":"After patient is discharged and all charges are assessed, retrieve the correct billing data with the final charges.","correctAnswer":"B"}],"choices":[{"key":"A","text":"Strong"},{"key":"B","text":"Eventual"},{"key":"C","text":"Bounded Staleness"},{"key":"D","text":"Consistent Prefix"}]}'::jsonb, ARRAY['patient_status=A', 'health_monitoring=C', 'billing_data=B']::text[], 'Tính nhất quán mạnh mẽ đảm bảo các lần đọc sẽ trả về phiên bản mục đã cam kết mới nhất. Mức độ ổn định bị giới hạn giới hạn độ trễ sao chép theo số lượng phiên bản hoặc thời gian của mục đã được định cấu hình, do đó, giới hạn một phiên bản sẽ đáp ứng yêu cầu giám sát. Sau khi các khoản phí thanh toán là cuối cùng và no dự kiến ​​sẽ có những thay đổi tiếp theo, tính nhất quán cuối cùng sẽ hội tụ đến bản ghi cuối cùng đó đồng thời tránh được độ trễ và chi phí sẵn có để có tính nhất quán cao hơn.

**Tài liệu tham khảo:**
[Consistency level choices - Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels) · [Manage consistency in Azure Cosmos DB for NoSQL](https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/how-to-manage-consistency)', 'Develop AI Solutions By Using Azure Data Management Services', ARRAY['AI-200', 'Develop AI Solutions By Using Azure Data Management Services']::text[], NULL, 'published'),
  ('ai200-121', 'ai-200', 121, 'You need to deploy Azure Function resources and applications in order to satisfy the business and technical requirements.  
  
What should you use?', '[{"key":"A","text":"GitHub Actions"},{"key":"B","text":"Azure Functions Core Tools"},{"key":"C","text":"Azure CLI"},{"key":"D","text":"Local Git deployment"}]'::jsonb, ARRAY['A']::text[], 'GitHub Actions cung cấp quy trình làm việc CI/CD được kiểm soát theo phiên bản có thể tự động triển khai các tài nguyên Azure do Bicept xác định và mã ứng dụng Chức năng Azure từ kho lưu trữ GitHub. Điều này đáp ứng yêu cầu triển khai Bicept tự động, có thể lặp lại, có thể kiểm tra trong khi loại bỏ việc triển khai cục bộ và dòng lệnh.

**Tài liệu tham khảo:**
[Deploy Bicep files by using GitHub Actions](https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/deploy-github-actions) · [Deploy to Azure Functions by using GitHub Actions](https://learn.microsoft.com/en-us/azure/azure-functions/functions-how-to-github-actions)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-122', 'ai-200', 122, 'You plan to deploy an Azure Container App.  
  
You need to configure the container app to provide session affinity.  
  
Which ingress type and revision mode should you assign to the container app?', '[{"key":"A","text":"TCP ingress type and single revision mode"},{"key":"B","text":"TCP ingress type and multiple revision mode"},{"key":"C","text":"HTTP ingress type and multiple revision mode"},{"key":"D","text":"HTTP ingress type and single revision mode"}]'::jsonb, ARRAY['D']::text[], 'Mối quan hệ phiên Azure Container Apps sử dụng cookie HTTP và chỉ được hỗ trợ khi bật tính năng nhập HTTP và ứng dụng sử dụng chế độ sửa đổi duy nhất.

**Tài liệu tham khảo:**
[Session Affinity in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/sticky-sessions)', 'Develop Containerized Solutions On Azure', ARRAY['AI-200', 'Develop Containerized Solutions On Azure']::text[], NULL, 'published'),
  ('ai200-123', 'ai-200', 123, 'You publish custom AI inference events to an Event Grid topic.  
  
Downstream services must receive events only when the `confidenceScore` value exceeds `0.80`.  
  
You need to filter events by a numeric value in the event payload.  
  
Which filter should you configure?', '[{"key":"A","text":"event type"},{"key":"B","text":"subject"},{"key":"C","text":"advanced"}]'::jsonb, ARRAY['C']::text[], 'Tính năng lọc nâng cao Azure Event Grid hỗ trợ so sánh trên các trường trong dữ liệu sự kiện, bao gồm toán tử `NumberGreaterThan`. Bộ lọc nâng cao trên `confidenceScore` có ngưỡng `0.80` chỉ phân phối các sự kiện có giá trị tải trọng số lớn hơn ngưỡng đó.

**Tài liệu tham khảo:**
[Understand event filtering for Event Grid subscriptions](https://learn.microsoft.com/en-us/azure/event-grid/event-filtering)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-124', 'ai-200', 124, 'You plan to configure an Event Grid subscription for AI inference events.  
  
The solution must:  
  
- Filter events by payload data.  
- Retain undelivered events.  
- Limit retry attempts.  
  
You need to configure Event Grid. Which configurations should you use?', '{"type":"matching_dropdown","statements":[{"id":"filter_payload","text":"Filter events by payload data.","correctAnswer":"A","choiceKeys":["A","B","C"]},{"id":"retain_undelivered","text":"Retain undelivered events.","correctAnswer":"D","choiceKeys":["D","E","F"]},{"id":"limit_retries","text":"Limit retry behavior.","correctAnswer":"G","choiceKeys":["G","H","I"]}],"choices":[{"key":"A","text":"Advanced filter"},{"key":"B","text":"Subject filter"},{"key":"C","text":"Service Bus session"},{"key":"D","text":"Dead-letter destination"},{"key":"E","text":"Endpoint validation"},{"key":"F","text":"Duplicate detection"},{"key":"G","text":"Maximum delivery attempts"},{"key":"H","text":"Message sessions"},{"key":"I","text":"Auto-complete"}]}'::jsonb, ARRAY['filter_payload=A', 'retain_undelivered=D', 'limit_retries=G']::text[], 'Tính năng lọc nâng cao của Lưới sự kiện hỗ trợ lọc trên các thuộc tính sự kiện, bao gồm các thuộc tính trong tải trọng `data`. Đích gửi thư chết sẽ giữ lại các sự kiện không thể gửi được và cài đặt Số lần gửi tối đa của chính sách thử lại sẽ giới hạn số lần thử gửi.

**Tài liệu tham khảo:**
[Event Filtering in Azure Event Grid](https://learn.microsoft.com/en-us/azure/event-grid/event-filtering) · [Azure Event Grid delivery and retry](https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry)', 'Connect To And Consume Azure Services', ARRAY['AI-200', 'Connect To And Consume Azure Services']::text[], NULL, 'published'),
  ('ai200-125', 'ai-200', 125, 'You are designing an Azure Database for PostgreSQL table for semantic search. Queries often filter on the `created_at` column.  
  
The schema must support vector similarity search and dependable date filtering.  
  
You need to ensure that the table satisfies these requirements.  
  
Which two actions should you take? Each correct answer represents part of the solution.  
  
> NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Store created_at as a free-form string."},{"key":"B","text":"Store embeddings in a pg vector column."},{"key":"C","text":"Store embeddings in a varchar column."},{"key":"D","text":"Use a typed timestamp column for created_at."}]'::jsonb, ARRAY['B', 'D']::text[], 'Tiện ích mở rộng `pgvector` cung cấp các hoạt động tương tự vectơ cho các phần nhúng được lưu trữ trong cột `vector`. Cột `timestamp` gốc biểu thị ngày và giờ dưới dạng giá trị tạm thời, cho phép so sánh và lọc theo trình tự thời gian đáng tin cậy; Các chuỗi dạng tự do và các phần nhúng `varchar` không cung cấp vectơ hoặc ngữ nghĩa thời gian cần thiết.

**Tài liệu tham khảo:**
[Enable and use pgvector in Azure Database for PostgreSQL flexible server](https://learn.microsoft.com/en-us/azure/postgresql/extensions/how-to-use-pgvector) · [PostgreSQL documentation: Date/Time Types](https://www.postgresql.org/docs/current/datatype-datetime.html)', 'Develop AI Solutions By Using Azure Data Management Services', ARRAY['AI-200', 'Develop AI Solutions By Using Azure Data Management Services']::text[], NULL, 'published'),
  ('ai200-126', 'ai-200', 126, 'HOTSPOT  
  
You are developing a semantic search capability for a chatbot and storing document embeddings in Redis.  
  
Review the following Python code that connects to Redis and stores an embedding value:  
  
![Question Image](https://cdn.examcademy.com/images/questions/1787531765848-eheiyetj.png)  
  
For each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.', '{"type":"statement_matrix","statements":[{"id":"1","text":"The embedding is stored as a hash field.","correctAnswer":"Yes"},{"id":"2","text":"The code enables similarity search on the embedding field.","correctAnswer":"No"},{"id":"3","text":"The key will expire after 10 minutes.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:Yes', '2:No', '3:Yes']::text[], '`HSET` ghi phần nhúng dưới dạng trường của hàm băm Redis. Chỉ lưu trữ biểu diễn byte không tạo ra chỉ mục vectơ hoặc thực hiện truy vấn tìm kiếm tương tự. `EXPIRE` chấp nhận TTL tính bằng giây, vì vậy 600 giây là 10 phút.

**Tài liệu tham khảo:**
[Redis-py guide](https://redis.io/docs/latest/develop/clients/redis-py/) · [EXPIRE command](https://redis.io/docs/latest/commands/expire/)', 'Develop AI Solutions By Using Azure Data Management Services', ARRAY['AI-200', 'Develop AI Solutions By Using Azure Data Management Services']::text[], 'https://cdn.examcademy.com/images/questions/1787531765848-eheiyetj.png', 'published'),
  ('ai200-127', 'ai-200', 127, 'You need to set up image builds for a new service to satisfy the technical requirements.  
  
Which two actions should you take? Each correct answer represents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Deploy the container image to Azure Kubernetes Service."},{"key":"B","text":"Create a GitHub Action to rebuild the application on every push."},{"key":"C","text":"Configure a base image update trigger for the ACR Task."},{"key":"D","text":"Create and configure an ACR Task with a source repository context."},{"key":"E","text":"Create an Azure DevOps pipeline with a source repository context."},{"key":"F","text":"Push updated code to the source repository."}]'::jsonb, ARRAY['D', 'F']::text[], 'Nhiệm vụ đăng ký vùng chứa Azure có thể sử dụng kho lưu trữ Git làm ngữ cảnh tác vụ và tự động xây dựng hình ảnh vùng chứa khi mã được cam kết vào kho lưu trữ đó. Việc tạo Tác vụ ACR bằng ngữ cảnh kho lưu trữ sẽ thiết lập cấu hình bản dựng và việc đẩy mã cập nhật sẽ kích hoạt bản dựng dựa trên cam kết thông qua webhook Tác vụ ACR. Trình kích hoạt cập nhật hình ảnh cơ sở là tùy chọn và phục vụ một điều kiện kích hoạt khác.

**Tài liệu tham khảo:**
[Automate Container Builds with Azure Container Registry Tasks](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-overview) · [Tutorial: Automate container image builds in the cloud when you commit source code](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tutorial-build-task)', 'Develop Containerized Solutions On Azure', ARRAY['AI-200', 'Develop Containerized Solutions On Azure']::text[], NULL, 'published'),
  ('ai200-128', 'ai-200', 128, 'You need to configure vector embedding updates in accordance with the business and technical requirements.  
  
Which configurations should you use?', '{"type":"matching_dropdown","statements":[{"id":"identify_changes","text":"Identify document changes that should trigger vectorization.","correctAnswer":"A","choiceKeys":["A","B","C"]},{"id":"scale_vectorization","text":"Scale out the vectorization processing.","correctAnswer":"D","choiceKeys":["D","E","F"]}],"choices":[{"key":"A","text":"Change feed processor"},{"key":"B","text":"Periodic full container scan"},{"key":"C","text":"Cross-partition SELECT query"},{"key":"D","text":"Lease container"},{"key":"E","text":"Strong consistency level"},{"key":"F","text":"RU throughput on the container"}]}'::jsonb, ARRAY['identify_changes=A', 'scale_vectorization=D']::text[], 'Bộ xử lý nguồn cấp dữ liệu thay đổi Azure Cosmos DB tự động xử lý các phần chèn và cập nhật, do đó, nó có thể kích hoạt việc tạo nhúng mà không cần quét toàn bộ vùng chứa. Bộ chứa cho thuê của nó lưu trữ và điều phối trạng thái cho thuê trên các phiên bản bộ xử lý, cho phép công việc được phân phối và mở rộng quy mô. Điều này tránh việc tiêu thụ RU không cần thiết khi quét toàn bộ định kỳ hoặc truy vấn nhiều phân vùng.

**Tài liệu tham khảo:**
[Change feed processor in Azure Cosmos DB](https://learn.microsoft.com/azure/cosmos-db/nosql/change-feed-processor) · [Azure Cosmos DB change feed overview](https://learn.microsoft.com/azure/cosmos-db/nosql/change-feed-design-patterns)', 'Develop AI Solutions By Using Azure Data Management Services', ARRAY['AI-200', 'Develop AI Solutions By Using Azure Data Management Services']::text[], NULL, 'published')
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

COMMIT;
