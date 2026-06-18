-- ABSOLUTE NEW SYNCED QUESTIONS FOR BỘ ĐỀ GH-300 (GITHUB COPILOT)
-- Total absolute new questions added: 92
-- ON CONFLICT (id) DO NOTHING

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q61',
  'gh-300',
  61,
  'What types of prompts or code snippets might be flagged by the GitHub Copilot toxicity filter? Each correct answer presents part of the solution. (Choose two.)',
  '[{"key":"A","text":"Hate speech or discriminatory language (e.g., racial slurs, offensive stereotypes)"},{"key":"B","text":"Sexually suggestive or explicit content"},{"key":"C","text":"Code that contains logical errors or produces unexpected results"},{"key":"D","text":"Code comments containing strong opinions or criticisms"}]'::jsonb,
  ARRAY['A', 'B']::text[],
  'Bộ lọc toxicity của GitHub Copilot được thiết kế để gắn cờ nội dung độc hại như lời lẽ thù ghét hoặc phân biệt đối xử (hate speech) và nội dung khiêu dâm hay tình dục rõ ràng. Lỗi logic trong code hay ý kiến phê bình trong comment không thuộc phạm vi lọc của bộ lọc độc hại này.',
  'Responsible AI',
  ARRAY['Toxicity Filter', 'Content Moderation', 'Safety']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q62',
  'gh-300',
  62,
  'What are the potential risks associated with relying heavily on code generated from GitHub Copilot? Each correct answer presents part of the solution. (Choose two.)',
  '[{"key":"A","text":"GitHub Copilot may introduce security vulnerabilities by suggesting code with known exploits."},{"key":"B","text":"GitHub Copilot’s suggestions may not always reflect best practices or the latest coding standards."},{"key":"C","text":"GitHub Copilot may increase development lead time by providing irrelevant suggestions."},{"key":"D","text":"GitHub Copilot may decrease developer velocity by requiring too much time in prompt engineering."}]'::jsonb,
  ARRAY['A', 'B']::text[],
  'Phụ thuộc nhiều vào code do GitHub Copilot tạo ra có rủi ro: Copilot có thể đưa ra gợi ý chứa lỗ hổng bảo mật với các exploit đã biết, và các gợi ý không phải lúc nào cũng phản ánh best practices hay tiêu chuẩn coding mới nhất. Vì vậy lập trình viên luôn cần xem xét và kiểm thử lại code được gợi ý.',
  'Developer Use Cases',
  ARRAY['Security', 'Best Practices', 'Code Review']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q63',
  'gh-300',
  63,
  'What should developers consider when relying on GitHub Copilot for generating code that involves statistical analysis?',
  '[{"key":"A","text":"GitHub Copilot will automatically correct any statistical errors found in the user’s initial code."},{"key":"B","text":"GitHub Copilot can independently verify the statistical significance of results."},{"key":"C","text":"GitHub Copilot can design new statistical methods that have not been previously documented."},{"key":"D","text":"GitHub Copilot’s suggestions are based on statistical trends and may not always apply accurately to specific datasets."}]'::jsonb,
  ARRAY['D']::text[],
  'Khi dùng GitHub Copilot cho phân tích thống kê, lập trình viên cần lưu ý rằng các gợi ý dựa trên xu hướng thống kê (statistical trends) và có thể không áp dụng chính xác cho một bộ dữ liệu cụ thể. Copilot không tự xác minh ý nghĩa thống kê hay tự sửa lỗi, nên cần kiểm chứng thủ công.',
  'Developer Use Cases',
  ARRAY['Statistical Analysis', 'Limitations', 'Verification']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q64',
  'gh-300',
  64,
  'What is the primary role of the ‘/optimize’ slash command in Visual Studio?',
  '[{"key":"A","text":"Translates code into a more performant language."},{"key":"B","text":"Automatically formats the code according to the selected style guide."},{"key":"C","text":"Summarizes your documentation into more maintainable and readable formats."},{"key":"D","text":"Enhances the performance of the selected code by analyzing its runtime complexity."}]'::jsonb,
  ARRAY['D']::text[],
  'Lệnh slash `/optimize` trong Visual Studio nâng cao hiệu năng của đoạn code được chọn bằng cách phân tích độ phức tạp thời gian chạy (runtime complexity). Nó tập trung vào tối ưu hiệu suất chứ không phải định dạng code hay dịch sang ngôn ngữ khác.',
  'Tooling & Integrations',
  ARRAY['Slash Commands', 'Optimization', 'Visual Studio']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q65',
  'gh-300',
  65,
  'What type of information can you retrieve through GitHub Copilot Business Subscriptions via REST API? Each correct answer presents part of the solution. (Choose two.)',
  '[{"key":"A","text":"View code suggestions for a specific user"},{"key":"B","text":"List all GitHub Copilot seat assignments for an organization"},{"key":"C","text":"Get a summary of GitHub Copilot usage for organization members"},{"key":"D","text":"List of all unsubscribed GitHub Copilot members within an organization"}]'::jsonb,
  ARRAY['B', 'C']::text[],
  'Qua REST API của GitHub Copilot Business, bạn có thể liệt kê tất cả các phân bổ ghế (seat assignments) cho một tổ chức và lấy bản tóm tắt mức sử dụng Copilot của các thành viên. API quản lý tập trung vào dữ liệu quản trị về seat và usage, không hiển thị từng gợi ý code cho một người dùng cụ thể.',
  'Administration & Policies',
  ARRAY['REST API', 'Seat Management', 'Usage Metrics']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q66',
  'gh-300',
  66,
  'When using an IDE with a supported GitHub Copilot plug-in, which Chat features can be accessed from within the IDE? Each correct answer presents part of the solution. (Choose two.)',
  '[{"key":"A","text":"Explain code and suggest improvements"},{"key":"B","text":"Find out about releases and commits"},{"key":"C","text":"Generate unit tests"},{"key":"D","text":"Plan coding tasks"}]'::jsonb,
  ARRAY['A', 'C']::text[],
  'Trong IDE có plug-in Copilot được hỗ trợ, người dùng có thể truy cập tính năng Chat để giải thích code và đề xuất cải tiến, cũng như tạo unit tests. Các tác vụ như xem releases/commits hay lập kế hoạch coding không phải là tính năng Chat trong IDE.',
  'Tooling & Integrations',
  ARRAY['IDE', 'Copilot Chat', 'Unit Tests']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q67',
  'gh-300',
  67,
  'What two options navigate to configure duplicate detection? Each correct answer presents part of the solution. (Choose two.)',
  '[{"key":"A","text":"Organization settings → Copilot → Policies"},{"key":"B","text":"Enterprise settings → Copilot → Policies"},{"key":"C","text":"Repository settings → Copilot → Policies"},{"key":"D","text":"User settings → Copilot → Policies"}]'::jsonb,
  ARRAY['A', 'B']::text[],
  'Để cấu hình duplicate detection (phát hiện trùng lặp), bạn điều hướng qua Organization settings → Copilot → Policies hoặc Enterprise settings → Copilot → Policies. Việc cài đặt được thực hiện ở cấp tổ chức hoặc doanh nghiệp, không phải ở cấp repository hay user.',
  'Administration & Policies',
  ARRAY['Duplicate Detection', 'Policies', 'Configuration']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q68',
  'gh-300',
  68,
  'What kind of insights can the GitHub Copilot usage metrics API provide to help evaluate the effectiveness of GitHub Copilot? Each correct answer presents part of the solution. (Choose two.)',
  '[{"key":"A","text":"The API can generate detailed reports on code quality improvements made by GitHub Copilot."},{"key":"B","text":"The API can track the number of code suggestions accepted and used in the organization."},{"key":"C","text":"The API can provide feedback on coding style and standards compliance."},{"key":"D","text":"The API can provide Copilot Chat specific suggestions acceptance metrics."},{"key":"E","text":"The API can refactor your code to improve productivity."}]'::jsonb,
  ARRAY['B', 'D']::text[],
  'API chỉ số sử dụng (usage metrics API) của GitHub Copilot có thể theo dõi số lượng gợi ý code được chấp nhận và sử dụng trong tổ chức, cũng như cung cấp các chỉ số chấp nhận gợi ý riêng cho Copilot Chat. API tập trung vào dữ liệu sử dụng và tỷ lệ chấp nhận, không tự đánh giá chất lượng code hay refactor code.',
  'Administration & Policies',
  ARRAY['Usage Metrics', 'REST API', 'Adoption']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q69',
  'gh-300',
  69,
  'Which of the following are true about code suggestions? Each correct answer presents part of the solution. (Choose two.)',
  '[{"key":"A","text":"Code suggestions are limited to single-line suggestions"},{"key":"B","text":"Code suggestions are guaranteed to not expose known security vulnerabilities"},{"key":"C","text":"Code suggestions will always compile or run without modifications"},{"key":"D","text":"You can use keyboard shortcuts to accept the next word in a suggestion"},{"key":"E","text":"Alternative code suggestions can be shown in a new tab"}]'::jsonb,
  ARRAY['D', 'E']::text[],
  'Về code suggestions, bạn có thể dùng phím tắt để chấp nhận từng từ tiếp theo của một gợi ý, và các gợi ý thay thế (alternative suggestions) có thể được hiển thị trong một tab mới. Copilot không giới hạn ở gợi ý một dòng và không đảm bảo code luôn biên dịch chạy được hay không có lỗ hổng bảo mật.',
  'Developer Use Cases',
  ARRAY['Code Suggestions', 'Keyboard Shortcuts', 'IDE']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q70',
  'gh-300',
  70,
  'GitHub Copilot in the Command Line Interface (CLI) can be used to configure the following settings: Each correct answer presents part of the solution. (Choose two.)',
  '[{"key":"A","text":"Usage analytics"},{"key":"B","text":"The default editor"},{"key":"C","text":"The default execution confirmation"},{"key":"D","text":"GitHub CLI subcommands"}]'::jsonb,
  ARRAY['A', 'C']::text[],
  'GitHub Copilot in the CLI cho phép cấu hình usage analytics (bật/tắt việc gửi dữ liệu phân tích) và default execution confirmation (xác nhận trước khi chạy lệnh được đề xuất). Đây là các thiết lập riêng của tiện ích Copilot CLI, không phải các tham số của GitHub CLI thông thường.',
  'Tooling & Integrations',
  ARRAY['CLI', 'Configuration', 'Analytics']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q71',
  'gh-300',
  71,
  'What types of content can GitHub Copilot Knowledge Base answer questions about? Each correct answer presents part of the solution. (Choose three.)',
  '[{"key":"A","text":"compiled binaries"},{"key":"B","text":"code snippets"},{"key":"C","text":"design patterns"},{"key":"D","text":"screenshots"},{"key":"E","text":"documentation"}]'::jsonb,
  ARRAY['B', 'C', 'E']::text[],
  'GitHub Copilot Knowledge Base lập chỉ mục nội dung dạng văn bản trong các repository được chọn, nên nó có thể trả lời câu hỏi dựa trên code snippets, design patterns và documentation. Các nội dung nhị phân như compiled binaries hay screenshots không được lập chỉ mục nên không nằm trong phạm vi này.',
  'Plans & Features',
  ARRAY['Knowledge Base', 'Indexing', 'Enterprise']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q72',
  'gh-300',
  72,
  'If you are working on open source projects, GitHub Copilot Individual can be paid:',
  '[{"key":"A","text":"Through an invoice or a credit card"},{"key":"B","text":"Through an Azure Subscription"},{"key":"C","text":"Based on the payment method in your user profile"},{"key":"D","text":"N/A - Copilot Individual is a free service for all open source projects"}]'::jsonb,
  ARRAY['D']::text[],
  'GitHub cung cấp GitHub Copilot miễn phí cho người duy trì (maintainer) các dự án mã nguồn mở đủ điều kiện và sinh viên/giáo viên đã được xác minh. Do đó với dự án open source thì không cần phương thức thanh toán nào.',
  'Plans & Features',
  ARRAY['Open Source', 'Pricing', 'Copilot Individual']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q73',
  'gh-300',
  73,
  'How long does GitHub retain Copilot data for Business and Enterprise? Each correct answer presents part of the solution. (Choose two.)',
  '[{"key":"A","text":"Prompts and Suggestion: Retained for 28 days"},{"key":"B","text":"Prompts and Suggestions: Not retained"},{"key":"C","text":"User Engagement Data: Kept for Two Years"},{"key":"D","text":"User Engagement Data: Kept for 1 Year"}]'::jsonb,
  ARRAY['A', 'C']::text[],
  'Đối với Business và Enterprise, prompts và suggestions được lưu trữ trong 28 ngày rồi xóa, trong khi user engagement data (dữ liệu mức độ tương tác) được giữ trong hai năm. Chính sách lưu trữ này phản ánh cam kết của GitHub về quyền riêng tư dữ liệu code.',
  'Data Privacy & Content Exclusions',
  ARRAY['Data Retention', 'Privacy', 'Business']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q74',
  'gh-300',
  74,
  'What GitHub Copilot pricing plan gives you access to your company’s knowledge bases?',
  '[{"key":"A","text":"GitHub Copilot Enterprise"},{"key":"B","text":"GitHub Copilot Individual"},{"key":"C","text":"GitHub Copilot Business"},{"key":"D","text":"GitHub Copilot Professional"}]'::jsonb,
  ARRAY['A']::text[],
  'Truy cập vào knowledge bases của công ty là một tính năng độc quyền của GitHub Copilot Enterprise. Các gói thấp hơn như Individual hay Business không bao gồm khả năng này.',
  'Plans & Features',
  ARRAY['Knowledge Base', 'Enterprise', 'Pricing']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q75',
  'gh-300',
  75,
  'Which Copilot Individual features are available when using a supported extension for Visual Studio, VS Code, or JetBrains IDEs? Each correct answer presents part of the solution. (Choose two.)',
  '[{"key":"A","text":"Chat"},{"key":"B","text":"Pull Request Diff Analysis"},{"key":"C","text":"Code suggestions"},{"key":"D","text":"Knowledge Base"}]'::jsonb,
  ARRAY['A', 'C']::text[],
  'Với một extension được hỗ trợ trên Visual Studio, VS Code hoặc JetBrains, người dùng Copilot Individual có thể dùng Chat và Code suggestions ngay trong IDE. Các tính năng như Pull Request Diff Analysis và Knowledge Base thuộc về gói Enterprise nên không khả dụng.',
  'Plans & Features',
  ARRAY['Copilot Individual', 'IDE', 'Chat']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q76',
  'gh-300',
  76,
  'An independent contractor develops applications for a variety of different customers. Assuming no concerns from their customers, which GitHub Copilot plan is best suited?',
  '[{"key":"A","text":"GitHub Copilot Individual"},{"key":"B","text":"GitHub Copilot Enterprise"},{"key":"C","text":"GitHub Copilot Business"},{"key":"D","text":"GitHub Copilot Teams"},{"key":"E","text":"GitHub Copilot Business for non-GHE Customers"}]'::jsonb,
  ARRAY['A']::text[],
  'Một nhà thầu độc lập làm việc cho nhiều khách hàng khác nhau phù hợp nhất với GitHub Copilot Individual vì đây là gói theo cá nhân, không gắn với một tổ chức GitHub cụ thể. Với giả định khách hàng không có lo ngại nào, gói Individual là lựa chọn đơn giản và tiết kiệm nhất.',
  'Plans & Features',
  ARRAY['Copilot Individual', 'Use Case', 'Pricing']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q77',
  'gh-300',
  77,
  'Which GitHub Copilot plan allows for prompt and suggestion collection?',
  '[{"key":"A","text":"GitHub Copilot Individuals"},{"key":"B","text":"GitHub Copilot Codespace"},{"key":"C","text":"GitHub Copilot Business"},{"key":"D","text":"GitHub Copilot Enterprise"}]'::jsonb,
  ARRAY['D']::text[],
  'Khả năng thu thập (collection) prompts và suggestions cho mục đích cải thiện thuộc về cấu hình của GitHub Copilot Enterprise. Các gói Business và Individual có chính sách dữ liệu khác và không cho phép thu thập theo cùng cách.',
  'Data Privacy & Content Exclusions',
  ARRAY['Data Collection', 'Enterprise', 'Privacy']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q78',
  'gh-300',
  78,
  'How does GitHub Copilot Chat help in understanding the existing codebase?',
  '[{"key":"A","text":"By automatically refactoring code to improve readability."},{"key":"B","text":"By providing visual diagrams of the code structure."},{"key":"C","text":"By running code linters and formatters."},{"key":"D","text":"By answering questions about the code and generating explanations."}]'::jsonb,
  ARRAY['D']::text[],
  'GitHub Copilot Chat giúp hiểu codebase hiện có bằng cách trả lời câu hỏi về code và tạo ra các giải thích bằng ngôn ngữ tự nhiên. Người dùng có thể hỏi về chức năng của một đoạn code và nhận lời giải thích, thay vì chỉ refactor hay chạy linter.',
  'Developer Use Cases',
  ARRAY['Copilot Chat', 'Code Understanding', 'Explanation']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q79',
  'gh-300',
  79,
  'How is GitHub Copilot Individual billed? Each correct answer presents part of the solution. (Choose two.)',
  '[{"key":"A","text":"Free (not billed) for all open source projects"},{"key":"B","text":"Monthly, as metered service based on actual consumption"},{"key":"C","text":"Annually as a subscription"},{"key":"D","text":"Monthly as a subscription"}]'::jsonb,
  ARRAY['C', 'D']::text[],
  'GitHub Copilot Individual được tính phí dưới dạng đăng ký (subscription), có thể trả theo tháng hoặc theo năm. Đây là mô hình thuê bao cố định chứ không phải tính theo mức tiêu thụ thực tế.',
  'Plans & Features',
  ARRAY['Billing', 'Subscription', 'Copilot Individual']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q80',
  'gh-300',
  80,
  'Which REST API endpoint is used to modify details about a GitHub Copilot Business subscription? Each correct answer part of the solution. (Choose two.)',
  '[{"key":"A","text":"Add teams to the Copilot subscription for an organization."},{"key":"B","text":"Remove teams from the Copilot subscription for an organization."},{"key":"C","text":"Upgrade or downgrade the subscription tier"},{"key":"D","text":"Migrate Copilot seat assignments between GitHub organizations"},{"key":"E","text":"Reassign Copilot seats based on GitHub repository size"}]'::jsonb,
  ARRAY['A', 'B']::text[],
  'REST API của Copilot Business cung cấp các endpoint để thêm teams vào và xóa teams khỏi gói đăng ký Copilot của một tổ chức, qua đó quản lý việc gán seat. Đây là các thao tác chính thức để chỉnh sửa chi tiết subscription qua API.',
  'Tooling & Integrations',
  ARRAY['REST API', 'Seat Management', 'Business']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q81',
  'gh-300',
  81,
  'Which of the following is the correct way to access the audit log events for GitHub Copilot Business?',
  '[{"key":"A","text":"Use the Audit log section in the organization’s GitHub settings"},{"key":"B","text":"Navigate to the Insights tab in the repository settings"},{"key":"C","text":"Use the Code tab in the GitHub repository"},{"key":"D","text":"Navigate to the Security tab in the organization’s GitHub settings"}]'::jsonb,
  ARRAY['A']::text[],
  'Các sự kiện audit log của Copilot Business được truy cập qua mục Audit log trong phần settings của tổ chức trên GitHub. Đây là nơi tập trung ghi lại các hành động quản trị liên quan đến Copilot.',
  'Administration & Policies',
  ARRAY['Audit Logs', 'Organization Settings', 'Business']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q82',
  'gh-300',
  82,
  'Which of the following is correct about GitHub Copilot Knowledge Bases?',
  '[{"key":"A","text":"All file types are indexed"},{"key":"B","text":"Indexing is static"},{"key":"C","text":"All repos are indexed"},{"key":"D","text":"It is an Enterprise feature"}]'::jsonb,
  ARRAY['D']::text[],
  'Knowledge Bases là một tính năng dành riêng cho GitHub Copilot Enterprise. Không phải mọi repo hay mọi loại file đều được lập chỉ mục, và việc lập chỉ mục cũng không phải tĩnh mà được cập nhật, nên đáp án đúng là nó là tính năng Enterprise.',
  'Plans & Features',
  ARRAY['Knowledge Base', 'Enterprise', 'Indexing']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q83',
  'gh-300',
  83,
  'A company is currently storing code in BitBucket and would like to use GitHub Copilot. Which GitHub Copilot plan will be most cost effective to allow them to manage users with their Identity Provider (e.g. Okta)?',
  '[{"key":"A","text":"GitHub Copilot Individual"},{"key":"B","text":"GitHub Copilot Enterprise"},{"key":"C","text":"GitHub Copilot Teams"},{"key":"D","text":"GitHub Copilot Business for non-GHE customers"}]'::jsonb,
  ARRAY['D']::text[],
  'Khi code được lưu ở BitBucket (không dùng GitHub Enterprise) nhưng cần quản lý người dùng qua Identity Provider như Okta, gói GitHub Copilot Business for non-GHE customers là lựa chọn tiết kiệm và phù hợp nhất. Gói này hỗ trợ quản lý seat và SSO mà không yêu cầu lưu code trên GitHub.',
  'Plans & Features',
  ARRAY['Copilot Business', 'Identity Provider', 'Use Case']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q84',
  'gh-300',
  84,
  'What is a likely effect of GitHub Copilot being trained on commonly used code patterns?',
  '[{"key":"A","text":"Suggest completely novel projects, while reducing time on a project."},{"key":"B","text":"Suggest innovative coding solutions that are not yet popular."},{"key":"C","text":"Suggest homogeneous solutions if provided a diverse data set."},{"key":"D","text":"Suggest code snippets that reflect the most common practices in the training data."}]'::jsonb,
  ARRAY['D']::text[],
  'Vì GitHub Copilot được huấn luyện trên các mẫu code phổ biến, nó có xu hướng gợi ý những đoạn code phản ánh các thực hành thông dụng nhất trong dữ liệu huấn luyện. Do đó các gợi ý thường thiên về giải pháp quen thuộc, đã được sử dụng rộng rãi.',
  'How Copilot Works',
  ARRAY['Training Data', 'Suggestions', 'Model Behavior']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q85',
  'gh-300',
  85,
  'Identify the steps involved in the life cycle of a GitHub Copilot code suggestion? Each correct answer presents part of the solution. (Choose two.)',
  '[{"key":"A","text":"Processing telemetry data"},{"key":"B","text":"Generate suggestions"},{"key":"C","text":"Retraining the model"},{"key":"D","text":"Storing user data"},{"key":"E","text":"Capturing the user’s context"}]'::jsonb,
  ARRAY['B', 'E']::text[],
  'Vòng đời của một gợi ý code gồm việc nắm bắt ngữ cảnh của người dùng (capturing the user''s context) như code xung quanh và file đang mở, sau đó tạo ra gợi ý (generate suggestions). Các bước như retraining model hay lưu trữ dữ liệu người dùng không phải là một phần của vòng đời gợi ý này.',
  'How Copilot Works',
  ARRAY['Suggestion Lifecycle', 'Context', 'Code Completion']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q86',
  'gh-300',
  86,
  'What are the additional checks that need to pass before the GitHub Copilot responses are submitted to the user? Each correct answer presents part of the solution. (Choose two.)',
  '[{"key":"A","text":"Code quality"},{"key":"B","text":"Compatibility with user-specific settings"},{"key":"C","text":"Performance benchmarking"},{"key":"D","text":"Suggestions matching public code (optional based on settings)"}]'::jsonb,
  ARRAY['B', 'D']::text[],
  'Trước khi trả kết quả cho người dùng, Copilot thực hiện thêm các kiểm tra gồm đảm bảo tương thích với cấu hình riêng của người dùng (user-specific settings) và lọc các gợi ý trùng với public code (tùy theo cài đặt duplication detection). Đây là các bước kiểm soát ở tầng output chứ không phải đánh giá chất lượng mã hay benchmark hiệu năng.',
  'Responsible AI',
  ARRAY['Filtering', 'Public Code', 'Settings']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q87',
  'gh-300',
  87,
  'What are the potential limitations of GitHub Copilot Chat? Each correct answer presents part of the solution. (Choose two.)',
  '[{"key":"A","text":"Ability to handle complex code structures"},{"key":"B","text":"Limited training data"},{"key":"C","text":"Extensive support for all programming languages"},{"key":"D","text":"No biases in code suggestions"}]'::jsonb,
  ARRAY['A', 'B']::text[],
  'GitHub Copilot Chat có những hạn chế cố hữu như khả năng xử lý các cấu trúc mã phức tạp và bị giới hạn bởi dữ liệu huấn luyện (limited training data). Vì mô hình chỉ học từ dữ liệu đã có nên nó không thể hỗ trợ hoàn hảo mọi ngôn ngữ hay đảm bảo hoàn toàn không có thiên kiến.',
  'How Copilot Works',
  ARRAY['Limitations', 'Training Data', 'Complexity']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q88',
  'gh-300',
  88,
  'Which of the following statements correctly describes how GitHub Copilot Individual uses prompt data? Each correct answer presents part of the solution. (Choose two.)',
  '[{"key":"A","text":"Real-time user input helps generate context-aware code suggestions."},{"key":"B","text":"Prompt data is used internally by GitHub for improving the search engine."},{"key":"C","text":"Prompt data is used to train machine learning models for better code suggestions."},{"key":"D","text":"Prompt data is stored unencrypted for faster processing."}]'::jsonb,
  ARRAY['A', 'C']::text[],
  'Với GitHub Copilot Individual, dữ liệu prompt được dùng để tạo gợi ý mã theo ngữ cảnh thời gian thực từ đầu vào của người dùng, và cũng có thể được dùng để huấn luyện các mô hình machine learning nhằm cải thiện chất lượng gợi ý. Dữ liệu prompt không phục vụ mục đích cải thiện search engine hay lưu trữ không mã hóa.',
  'Data Privacy & Content Exclusions',
  ARRAY['Prompt Data', 'Individual', 'Training']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q89',
  'gh-300',
  89,
  'Which of the following does GitHub Copilot’s LLM derive context from when producing a response?',
  '[{"key":"A","text":"Version control system integrated with the IDE"},{"key":"B","text":"Syntax highlighting scheme of the code in the IDE"},{"key":"C","text":"Frequency of commits to the repository"},{"key":"D","text":"Neighboring or related files within a project"}]'::jsonb,
  ARRAY['D']::text[],
  'LLM của GitHub Copilot lấy ngữ cảnh từ các file lân cận hoặc liên quan trong project (neighboring/related files) để hiểu rõ hơn ý định của developer. Các yếu tố như hệ thống quản lý phiên bản, bảng màu syntax highlighting hay tần suất commit không được dùng làm ngữ cảnh sinh phản hồi.',
  'How Copilot Works',
  ARRAY['Context', 'Related Files', 'LLM']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q90',
  'gh-300',
  90,
  'What is a benefit of using custom models in GitHub Copilot?',
  '[{"key":"A","text":"Responses use the organization’s LLM engine"},{"key":"B","text":"Responses are faster to produce and appear sooner"},{"key":"C","text":"Responses are guaranteed to be correct"},{"key":"D","text":"Responses use practices and patterns in your repositories"}]'::jsonb,
  ARRAY['D']::text[],
  'Lợi ích của custom models trong GitHub Copilot là phản hồi sẽ phản ánh các practice và pattern có trong chính các repository của tổ chức bạn. Việc fine-tune trên codebase nội bộ giúp gợi ý nhất quán với phong cách và quy ước riêng, chứ không nhằm tăng tốc độ hay đảm bảo mã luôn đúng.',
  'Plans & Features',
  ARRAY['Custom Models', 'Personalization', 'Enterprise']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q91',
  'gh-300',
  91,
  'How does GitHub Copilot identify matching code and ensure that public code is appropriately handled or blocked? Each correct answer presents part of the solution. (Choose two.)',
  '[{"key":"A","text":"Implementing safeguards to detect and avoid suggesting verbatim snippets from public code"},{"key":"B","text":"Filtering out suggestions that match code from public repositories"},{"key":"C","text":"Using machine learning models trained only on private repositories"},{"key":"D","text":"Reviewing and storing user-specific private repository data for future suggestions"}]'::jsonb,
  ARRAY['A', 'B']::text[],
  'Copilot xử lý public code bằng cách triển khai các safeguard để phát hiện và tránh gợi ý nguyên văn (verbatim) các đoạn mã công khai, đồng thời lọc bỏ các gợi ý trùng khớp với mã từ public repository. Cơ chế này hoạt động qua duplication detection filter chứ không dựa vào việc chỉ huấn luyện trên private repo hay lưu trữ dữ liệu riêng tư của người dùng.',
  'Responsible AI',
  ARRAY['Public Code', 'Filtering', 'Safeguards']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q92',
  'gh-300',
  92,
  'How does GitHub Copilot utilize chat history to enhance its code completion capabilities?',
  '[{"key":"A","text":"By sharing chat history with third-party services to improve integration and functionality."},{"key":"B","text":"By analyzing past chat interactions to identify common programming patterns and errors."},{"key":"C","text":"By logging chat history to monitor user activity and ensure compliance with coding standards."},{"key":"D","text":"By using chat history to offer personalized code snippets based on previous prompts."}]'::jsonb,
  ARRAY['D']::text[],
  'GitHub Copilot tận dụng lịch sử chat để cung cấp các đoạn mã được cá nhân hóa dựa trên những prompt trước đó của người dùng. Nhờ ghi nhớ ngữ cảnh cuộc hội thoại, nó đưa ra gợi ý phù hợp hơn với nhu cầu cụ thể thay vì để giám sát hoạt động hay chia sẻ với bên thứ ba.',
  'How Copilot Works',
  ARRAY['Chat History', 'Personalization', 'Context']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q93',
  'gh-300',
  93,
  'What is the main purpose of the duplication detection filter in GitHub Copilot?',
  '[{"key":"A","text":"To compare user-generated code against a private repository for potential matches."},{"key":"B","text":"To encourage the user to follow coding best practices preventing code duplication."},{"key":"C","text":"To allow administrators to control which suggestions are visible to developers based on custom criteria."},{"key":"D","text":"To detect and block suggestions that match public code snippets on GitHub if they contain about 150 characters."}]'::jsonb,
  ARRAY['D']::text[],
  'Mục đích chính của duplication detection filter là phát hiện và chặn các gợi ý trùng khớp với public code snippet trên GitHub khi đoạn mã dài khoảng 150 ký tự. Bộ lọc này giúp tránh tái tạo nguyên văn mã công khai chứ không phải để so khớp với private repo hay áp đặt best practice.',
  'Responsible AI',
  ARRAY['Duplication Filter', 'Public Code', 'Matching']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q94',
  'gh-300',
  94,
  'Where is the proxy service hosted?',
  '[{"key":"A","text":"Amazon Web Service"},{"key":"B","text":"Self hosted"},{"key":"C","text":"Microsoft Azure"},{"key":"D","text":"Google Cloud Platform"}]'::jsonb,
  ARRAY['C']::text[],
  'Proxy service của GitHub Copilot được host trên Microsoft Azure. Dịch vụ proxy này nằm trong hạ tầng của GitHub/Microsoft và xử lý các yêu cầu giữa client và mô hình, chứ không tự host hay đặt trên AWS/GCP.',
  'How Copilot Works',
  ARRAY['Proxy', 'Azure', 'Architecture']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q95',
  'gh-300',
  95,
  'How can GitHub Copilot assist developers during the requirements analysis phase of the Software Development Life Cycle (SDLC)?',
  '[{"key":"A","text":"By managing stakeholder communication and meetings."},{"key":"B","text":"By automatically generating detailed requirements documents."},{"key":"C","text":"By providing templates and code snippets that help in documenting requirements."},{"key":"D","text":"By identifying and fixing potential requirement conflicts when using /help."}]'::jsonb,
  ARRAY['C']::text[],
  'Trong giai đoạn phân tích yêu cầu của SDLC, Copilot hỗ trợ bằng cách cung cấp các template và code snippet giúp tài liệu hóa yêu cầu. Nó là công cụ trợ giúp developer chứ không tự sinh tài liệu yêu cầu hoàn chỉnh hay quản lý giao tiếp với stakeholder.',
  'Developer Use Cases',
  ARRAY['SDLC', 'Requirements', 'Documentation']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q96',
  'gh-300',
  96,
  'How can you improve the context used by GitHub Copilot? Each correct answer presents part of the solution. (Choose two.)',
  '[{"key":"A","text":"By adding variables (#selection) to your prompt"},{"key":"B","text":"By adding the full file paths to your prompt of important files"},{"key":"C","text":"By adding the important files to your .gitconfig"},{"key":"D","text":"By opening the relevant tabs in your IDE"}]'::jsonb,
  ARRAY['A', 'B']::text[],
  'Có thể cải thiện ngữ cảnh cho Copilot bằng cách thêm các biến như #selection vào prompt và cung cấp đường dẫn đầy đủ (full file paths) tới những file quan trọng trong prompt. Những cách này giúp neo cuộc hội thoại vào đúng phần mã liên quan, trong khi .gitconfig không phải là cơ chế cấp ngữ cảnh.',
  'Prompt Engineering',
  ARRAY['Context', 'Variables', 'File Paths']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q97',
  'gh-300',
  97,
  'What is zero-shot prompting?',
  '[{"key":"A","text":"Giving GitHub Copilot examples of the algorithm and outcome you want to use"},{"key":"B","text":"Only giving GitHub Copilot a question as a prompt and no examples"},{"key":"C","text":"Giving GitHub Copilot examples of the problem you want to solve"},{"key":"D","text":"Giving as little context to GitHub Copilot as possible"},{"key":"E","text":"Telling GitHub Copilot it needs to show only the correct answer"}]'::jsonb,
  ARRAY['B']::text[],
  'Zero-shot prompting nghĩa là chỉ đưa cho GitHub Copilot một câu hỏi/yêu cầu mà không kèm theo bất kỳ ví dụ nào. Mô hình phải dựa hoàn toàn vào kiến thức sẵn có để trả lời, khác với few-shot vốn cung cấp ví dụ minh họa.',
  'Prompt Engineering',
  ARRAY['Zero-shot', 'Prompting', 'Examples']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q98',
  'gh-300',
  98,
  'What are the different ways to give context to GitHub Copilot to get more precise responses? Each correct answer presents part of the solution. (Choose two.)',
  '[{"key":"A","text":"Engage with chat participants such as @workspace to incorporate collaborative context into the responses."},{"key":"B","text":"Access developer’s previous projects and code repositories to understand their coding style without explicit permission."},{"key":"C","text":"Utilize to interpret developer’s thoughts and intentions without any code or comments."},{"key":"D","text":"Utilize chat variables like #file and #editors to anchor the conversation within the specific context of the files or editors in use."}]'::jsonb,
  ARRAY['A', 'D']::text[],
  'Để có phản hồi chính xác hơn, người dùng có thể tương tác với các chat participant như @workspace để đưa ngữ cảnh rộng của dự án vào, và dùng các chat variable như #file và #editors để neo cuộc hội thoại vào file hoặc editor cụ thể đang dùng. Đây là các cơ chế cấp ngữ cảnh hợp lệ, không phải truy cập dữ liệu riêng tư khi chưa được phép.',
  'Prompt Engineering',
  ARRAY['Chat Participants', 'Chat Variables', 'Context']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q99',
  'gh-300',
  99,
  'Select a strategy to increase the performance of GitHub Copilot Chat.',
  '[{"key":"A","text":"Use a single GitHub Copilot Chat query to find resolutions for the collection of technical requirements"},{"key":"B","text":"Optimize the usage of memory-intensive operations within generated code"},{"key":"C","text":"Apply prompt engineering techniques to be more specific"},{"key":"D","text":"Limit the number of concurrent users accessing GitHub Copilot Chat"}]'::jsonb,
  ARRAY['C']::text[],
  'Để tăng hiệu quả của GitHub Copilot Chat, nên áp dụng các kỹ thuật prompt engineering nhằm diễn đạt yêu cầu cụ thể và rõ ràng hơn. Prompt càng cụ thể thì gợi ý càng sát nhu cầu, thay vì gộp nhiều yêu cầu vào một truy vấn hay giới hạn số người dùng.',
  'Prompt Engineering',
  ARRAY['Prompting', 'Specificity', 'Performance']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q100',
  'gh-300',
  100,
  'What is few-shot prompting?',
  '[{"key":"A","text":"Telling GitHub Copilot to try multiple times to answer the prompt"},{"key":"B","text":"Telling GitHub Copilot to iterate several times on the answer before returning it to you"},{"key":"C","text":"Telling GitHub Copilot from which sources it should base the response on"},{"key":"D","text":"Telling GitHub Copilot about the mechanism you want it to use and how to incorporate that into the response"}]'::jsonb,
  ARRAY['D']::text[],
  'Few-shot prompting là việc nói cho GitHub Copilot biết cơ chế/cách tiếp cận bạn muốn nó sử dụng và cách kết hợp điều đó vào phản hồi, thông qua việc cung cấp ví dụ minh họa. Bằng cách đưa ra một vài mẫu, bạn định hướng mô hình tạo kết quả theo đúng khuôn mẫu mong muốn.',
  'Prompt Engineering',
  ARRAY['Few-shot', 'Prompting', 'Examples']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q101',
  'gh-300',
  101,
  'What role does chat history play in GitHub Copilot’s code suggestions?',
  '[{"key":"A","text":"Chat history is irrelevant to GitHub Copilot and does not affect its functionality."},{"key":"B","text":"Chat history provides context to GitHub Copilot, improving the relevance and accuracy of its code suggestions."},{"key":"C","text":"Chat history is stored and shared with other users to enhance collaboration."},{"key":"D","text":"Chat history is used to train the GitHub Copilot model in real-time."}]'::jsonb,
  ARRAY['B']::text[],
  'Lịch sử chat cung cấp ngữ cảnh cho GitHub Copilot, qua đó cải thiện độ liên quan và chính xác của các gợi ý mã. Khi nắm được nội dung trao đổi trước đó, Copilot hiểu rõ hơn ý định và đưa ra phản hồi phù hợp với mạch hội thoại.',
  'How Copilot Works',
  ARRAY['Chat History', 'Context', 'Accuracy']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q102',
  'gh-300',
  102,
  'What are two techniques that can be used to improve prompts to GitHub Copilot? (Choose two.)',
  '[{"key":"A","text":"Provide specific success criteria"},{"key":"B","text":"Provide links to supporting documentation"},{"key":"C","text":"Provide all information about the utilized files"},{"key":"D","text":"Provide insight on where to get the content from to get a response."}]'::jsonb,
  ARRAY['A', 'C']::text[],
  'Hai kỹ thuật cải thiện prompt là cung cấp tiêu chí thành công cụ thể (specific success criteria) và cung cấp đầy đủ thông tin về các file được sử dụng. Việc nêu rõ mục tiêu và bối cảnh file giúp Copilot tạo ra gợi ý sát với kết quả mong đợi hơn.',
  'Prompt Engineering',
  ARRAY['Success Criteria', 'Context', 'Prompting']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q103',
  'gh-300',
  103,
  'Which of the following describes role prompting?',
  '[{"key":"A","text":"Describing in your prompt what your role is to get a better suggestion"},{"key":"B","text":"Tell GitHub Copilot in what tone of voice it should respond"},{"key":"C","text":"Prompt GitHub Copilot to explain what was the role of a suggestion"},{"key":"D","text":"Giving GitHub Copilot multiple examples of the form of the data you want to use"}]'::jsonb,
  ARRAY['A']::text[],
  'Role prompting là việc mô tả trong prompt vai trò của bạn (ví dụ bạn là ai, đang làm việc gì) để nhận được gợi ý phù hợp hơn. Khi Copilot biết được góc nhìn và vai trò, nó điều chỉnh phản hồi cho khớp với bối cảnh và nhu cầu của vai trò đó.',
  'Prompt Engineering',
  ARRAY['Role Prompting', 'Context', 'Prompting']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q104',
  'gh-300',
  104,
  'In what ways can GitHub Copilot support a developer during the code refactoring process? Each correct answer presents part of the solution. (Choose two.)',
  '[{"key":"A","text":"By providing suggestions for improving code readability and maintainability based on best practices."},{"key":"B","text":"By offering code transformation examples that enhance performance and reduce complexity."},{"key":"C","text":"By independently ensuring compliance with regulatory standards across industries."},{"key":"D","text":"By autonomously refactoring entire codebases to the latest programming language."}]'::jsonb,
  ARRAY['A', 'B']::text[],
  'Trong quá trình refactoring, Copilot hỗ trợ bằng cách đưa ra gợi ý cải thiện độ dễ đọc và khả năng bảo trì dựa trên best practice, đồng thời cung cấp các ví dụ chuyển đổi mã giúp tăng hiệu năng và giảm độ phức tạp. Nó đóng vai trò trợ lý gợi ý chứ không tự động refactor toàn bộ codebase hay tự đảm bảo tuân thủ quy định pháp lý.',
  'Developer Use Cases',
  ARRAY['Refactoring', 'Best Practices', 'Maintainability']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q105',
  'gh-300',
  105,
  'What is one of the recommended practices when using GitHub Copilot Chat to enhance code quality?',
  '[{"key":"A","text":"Rely solely on Copilot’s suggestions without reviewing them."},{"key":"B","text":"Regularly review and refactor the code suggested by Copilot."},{"key":"C","text":"Disable Copilot’s inline suggestions."},{"key":"D","text":"Avoid using Copilot for complex tasks."}]'::jsonb,
  ARRAY['B']::text[],
  'Một thực hành được khuyến nghị để nâng cao chất lượng mã là thường xuyên review và refactor lại các đoạn mã do Copilot gợi ý. Developer luôn cần kiểm tra kết quả thay vì tin tưởng hoàn toàn, vì Copilot là công cụ hỗ trợ chứ không thay thế đánh giá của con người.',
  'Developer Use Cases',
  ARRAY['Code Review', 'Quality', 'Best Practices']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q106',
  'gh-300',
  106,
  'In what ways can GitHub Copilot contribute to the design phase of the Software Development Life Cycle (SDLC)?',
  '[{"key":"A","text":"GitHub Copilot can generate user interface (UI) prototypes without prompting."},{"key":"B","text":"GitHub Copilot can suggest design patterns and best practices relevant to the project."},{"key":"C","text":"GitHub Copilot can independently create a complete software design."},{"key":"D","text":"GitHub Copilot can manage design team collaboration and version control."}]'::jsonb,
  ARRAY['B']::text[],
  'Trong giai đoạn thiết kế của SDLC, GitHub Copilot có thể gợi ý các design pattern và best practice phù hợp với dự án. Nó hỗ trợ developer đưa ra lựa chọn thiết kế tốt hơn chứ không tự tạo ra thiết kế phần mềm hoàn chỉnh hay quản lý cộng tác nhóm.',
  'Developer Use Cases',
  ARRAY['SDLC', 'Design Patterns', 'Best Practices']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q107',
  'gh-300',
  107,
  'Are there any limitations to consider when using GitHub Copilot for code refactoring?',
  '[{"key":"A","text":"GitHub Copilot may not always produce optimized or best-practice code for refactoring."},{"key":"B","text":"GitHub Copilot always produces bug-free code during refactoring."},{"key":"C","text":"GitHub Copilot understands the context of your entire project and refactors code accordingly."},{"key":"D","text":"GitHub Copilot can only be used with a limited set of programming languages."}]'::jsonb,
  ARRAY['A']::text[],
  'GitHub Copilot dựa trên các mẫu (patterns) từ dữ liệu huấn luyện nên các gợi ý refactoring không phải lúc nào cũng tối ưu hay tuân theo best-practice. Vì vậy developer vẫn cần xem xét, đánh giá và điều chỉnh code mà Copilot tạo ra để đảm bảo chất lượng.',
  'Developer Use Cases',
  ARRAY['Refactoring', 'Limitations', 'Code Quality']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q108',
  'gh-300',
  108,
  'How does GitHub Copilot assist developers in minimizing context switching?',
  '[{"key":"A","text":"GitHub Copilot can predict and prevent bugs before they occur."},{"key":"B","text":"GitHub Copilot allows developers to stay in their IDE."},{"key":"C","text":"GitHub Copilot can completely replace the need for human collaboration."},{"key":"D","text":"GitHub Copilot can automatically handle project management tasks."}]'::jsonb,
  ARRAY['B']::text[],
  'GitHub Copilot giúp giảm context switching bằng cách cho phép developer ở lại trong IDE thay vì phải chuyển sang trình duyệt hay tài liệu khác để tìm câu trả lời. Nhờ tích hợp gợi ý và chat ngay trong môi trường lập trình, developer duy trì được luồng làm việc (flow) liên tục.',
  'Developer Use Cases',
  ARRAY['Productivity', 'IDE', 'Context Switching']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q109',
  'gh-300',
  109,
  'What are the potential limitations of GitHub Copilot in maintaining existing codebases?',
  '[{"key":"A","text":"GitHub Copilot’s suggestions are always aware of the entire codebase."},{"key":"B","text":"GitHub Copilot can refactor and optimize the entire codebase up to 10,000 lines of code."},{"key":"C","text":"GitHub Copilot can independently manage and resolve all merge conflicts in version control."},{"key":"D","text":"GitHub Copilot might not fully understand the context and dependencies within a large codebase."}]'::jsonb,
  ARRAY['D']::text[],
  'Copilot bị giới hạn về phạm vi ngữ cảnh (context window) nên có thể không hiểu đầy đủ ngữ cảnh và các phụ thuộc (dependencies) trong một codebase lớn. Điều này khiến gợi ý đôi khi thiếu chính xác khi áp dụng cho dự án phức tạp, nhiều tệp liên kết với nhau.',
  'How Copilot Works',
  ARRAY['Context', 'Large Codebase', 'Limitations']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q110',
  'gh-300',
  110,
  'How can GitHub Copilot aid developers in writing documentation for their code?',
  '[{"key":"A","text":"GitHub Copilot can suggest summaries or descriptions based on the code’s functionality."},{"key":"B","text":"GitHub Copilot can only generate content in markdown format."},{"key":"C","text":"GitHub Copilot can automatically generate complete and detailed documentation."},{"key":"D","text":"GitHub Copilot cannot assist in writing documentation or comments."}]'::jsonb,
  ARRAY['A']::text[],
  'GitHub Copilot có thể hỗ trợ viết tài liệu bằng cách gợi ý tóm tắt hoặc mô tả dựa trên chức năng (functionality) của code. Tuy nhiên đây chỉ là gợi ý hỗ trợ, không phải tài liệu hoàn chỉnh và chi tiết, nên developer vẫn cần bổ sung và kiểm tra lại.',
  'Developer Use Cases',
  ARRAY['Documentation', 'Code Comments', 'Productivity']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q111',
  'gh-300',
  111,
  'How does GitHub Copilot assist developers in reducing the amount of manual boilerplate code they write?',
  '[{"key":"A","text":"By refactoring the entire codebase to eliminate boilerplate code without developer input."},{"key":"B","text":"By suggesting code snippets that can be reused across different parts of the project."},{"key":"C","text":"By engaging in real-time collaboration with multiple developers to write boilerplate code."},{"key":"D","text":"By predicting future coding requirements and pre-emptively generating boilerplate code"}]'::jsonb,
  ARRAY['B']::text[],
  'Copilot giúp giảm boilerplate code thủ công bằng cách gợi ý các đoạn code (snippets) có thể tái sử dụng ở nhiều phần khác nhau của dự án. Nhờ nhận diện mẫu lặp lại, nó tự động đề xuất code mẫu giúp developer không phải gõ lại thủ công.',
  'Developer Use Cases',
  ARRAY['Boilerplate', 'Code Reuse', 'Productivity']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q112',
  'gh-300',
  112,
  'Which scenarios can GitHub Copilot Chat be used to increase productivity? Each correct answer presents part of the solution. (Choose two.)',
  '[{"key":"A","text":"Create a documentation file for the newly created code base."},{"key":"B","text":"Fast tracking of release management activities to move code to production main branch."},{"key":"C","text":"A project plan for the team needs to be generated using a project management software."},{"key":"D","text":"A developer is added to a new project and would like to understand the current software code."}]'::jsonb,
  ARRAY['A', 'D']::text[],
  'Copilot Chat tăng năng suất khi tạo tệp tài liệu (documentation) cho codebase mới và khi giúp developer mới hiểu code hiện có thông qua giải thích. Đây là các tác vụ liên quan đến hiểu và mô tả code, đúng thế mạnh của Copilot Chat, khác với quản lý dự án hay release management vốn không thuộc phạm vi của nó.',
  'Developer Use Cases',
  ARRAY['Documentation', 'Onboarding', 'Code Understanding']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q113',
  'gh-300',
  113,
  'How does GitHub Copilot Chat help to fix security issues in your codebase?',
  '[{"key":"A","text":"By automatically refactoring the entire codebase to remove vulnerabilities."},{"key":"B","text":"By annotating the given suggestions with known vulnerability patterns."},{"key":"C","text":"By enforcing strict coding standards that prevent the introduction of vulnerabilities."},{"key":"D","text":"By providing detailed reports on the security vulnerabilities present in the codebase."}]'::jsonb,
  ARRAY['B']::text[],
  'GitHub Copilot Chat giúp xử lý vấn đề bảo mật bằng cách chú thích (annotate) các gợi ý với những mẫu lỗ hổng đã biết (known vulnerability patterns). Cách này giúp cảnh báo developer về rủi ro thay vì tự động sửa toàn bộ codebase, vì việc đánh giá và khắc phục cuối cùng vẫn cần con người.',
  'Developer Use Cases',
  ARRAY['Security', 'Vulnerabilities', 'Code Suggestions']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q114',
  'gh-300',
  114,
  'Which of the following scenarios best describes the intended use of GitHub Copilot Chat as a tool?',
  '[{"key":"A","text":"A solution for software development, requiring no additional input or oversight."},{"key":"B","text":"A productivity tool that provides suggestions, but relying on human judgement."},{"key":"C","text":"A tool solely designed for debugging and error correction."},{"key":"D","text":"A complete replacement for developers generating code."}]'::jsonb,
  ARRAY['B']::text[],
  'Mục đích sử dụng đúng của Copilot Chat là một công cụ năng suất (productivity tool) đưa ra gợi ý nhưng vẫn dựa trên phán đoán của con người (human judgement). Nó không thay thế developer mà hỗ trợ họ, nên người dùng phải xem xét và quyết định việc chấp nhận gợi ý.',
  'Responsible AI',
  ARRAY['Human Oversight', 'Productivity', 'Intended Use']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q115',
  'gh-300',
  115,
  'Which of the following prompts can be used to guide GitHub Copilot Chat in refactoring code for quality improvements? Each correct answer presents part of the solution. (Choose two.)',
  '[{"key":"A","text":"“Suggest ways to enhance the maintainability of this code segment.”"},{"key":"B","text":"“Show me how to improve the readability of this function.”"},{"key":"C","text":"“Refactor my application to meet the latest coding standards.”"},{"key":"D","text":"“Predict future coding trends and update my codebase accordingly.”"}]'::jsonb,
  ARRAY['A', 'C']::text[],
  'Các prompt tốt để refactor cải thiện chất lượng nên tập trung vào mục tiêu cụ thể như nâng cao maintainability của đoạn code hoặc refactor theo coding standards mới nhất. Đây là những yêu cầu rõ ràng, khả thi mà Copilot có thể thực hiện, khác với việc dự đoán xu hướng coding tương lai vốn nằm ngoài khả năng.',
  'Prompt Engineering',
  ARRAY['Refactoring', 'Prompting', 'Code Quality']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q116',
  'gh-300',
  116,
  'In what way can GitHub Copilot and GitHub Copilot Chat aid developers in modernizing applications?',
  '[{"key":"A","text":"GitHub Copilot can suggest modern programming patterns based on your code."},{"key":"B","text":"GitHub Copilot can create and deploy full-stack applications based on a single query."},{"key":"C","text":"GitHub Copilot can automatically refactor applications to align with upcoming standards."},{"key":"D","text":"GitHub Copilot can directly convert legacy applications into cloud-native architectures."}]'::jsonb,
  ARRAY['C']::text[],
  'Copilot và Copilot Chat hỗ trợ hiện đại hóa ứng dụng bằng cách refactor code để phù hợp với các tiêu chuẩn (standards) mong muốn. Nó đề xuất và áp dụng các thay đổi giúp code bắt kịp chuẩn mực mới, hỗ trợ quá trình modernization của ứng dụng.',
  'Developer Use Cases',
  ARRAY['Modernization', 'Refactoring', 'Standards']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q117',
  'gh-300',
  117,
  'How can GitHub Copilot assist with code refactoring tasks?',
  '[{"key":"A","text":"GitHub Copilot can remove unnecessary files from the project directory."},{"key":"B","text":"GitHub Copilot can suggest refactoring improvements for better code quality."},{"key":"C","text":"GitHub Copilot can fix syntax errors without user input."},{"key":"D","text":"GitHub Copilot can automatically rewrite code to follow best practices."}]'::jsonb,
  ARRAY['D']::text[],
  'GitHub Copilot có thể hỗ trợ refactoring bằng cách tự động viết lại code để tuân theo best practices. Dựa trên ngữ cảnh code hiện tại, nó đề xuất phiên bản code cải thiện hơn, nhưng developer vẫn nên kiểm tra lại kết quả.',
  'Developer Use Cases',
  ARRAY['Refactoring', 'Best Practices', 'Code Quality']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q118',
  'gh-300',
  118,
  'How can GitHub Copilot facilitate a smoother learning experience when diving into a new programming language?',
  '[{"key":"A","text":"GitHub Copilot’s /understand command will help GitHub Copilot understand code written in a targeted programming language."},{"key":"B","text":"GitHub Copilot Chat can provide guidance and support for common coding tasks and challenges in the targeted programming language."},{"key":"C","text":"GitHub Copilot can convert comments into code to grasp the syntax and nuances of a new programming language."},{"key":"D","text":"GitHub Copilot can provide contextualized code suggestions and answer sources from an organization’s documentation."}]'::jsonb,
  ARRAY['B']::text[],
  'Khi học một ngôn ngữ lập trình mới, Copilot Chat có thể cung cấp hướng dẫn và hỗ trợ cho các tác vụ và thách thức coding phổ biến trong ngôn ngữ đó. Nhờ khả năng giải thích và trả lời theo ngữ cảnh, nó giúp developer làm quen nhanh hơn với cú pháp và cách dùng của ngôn ngữ mới.',
  'Developer Use Cases',
  ARRAY['Learning', 'Copilot Chat', 'Onboarding']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q119',
  'gh-300',
  119,
  'What method can a developer use to generate sample data with GitHub Copilot? Each correct answer presents part of the solution. (Choose two.)',
  '[{"key":"A","text":"Utilize GitHub Copilot’s capability to directly access and used databases to create sample data."},{"key":"B","text":"Leveraging GitHub Copilot’s ability to independently initiate and manage data storage services."},{"key":"C","text":"Leveraging GitHub Copilot’s suggestions to create a data based on API documentation in the repository."},{"key":"D","text":"Utilizing GitHub Copilot’s ability to create fictions information from patterns in training data."}]'::jsonb,
  ARRAY['C', 'D']::text[],
  'Developer có thể tạo sample data bằng cách dựa trên gợi ý của Copilot từ tài liệu API (API documentation) trong repository, hoặc tận dụng khả năng tạo thông tin hư cấu từ các mẫu trong dữ liệu huấn luyện. Cả hai cách đều dùng năng lực sinh nội dung theo mẫu của Copilot, không phải truy cập trực tiếp database hay quản lý dịch vụ lưu trữ.',
  'Developer Use Cases',
  ARRAY['Sample Data', 'API Documentation', 'Code Generation']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q120',
  'gh-300',
  120,
  'How can you use GitHub Copilot to get inline suggestions for refactoring your code? (Choose two.)',
  '[{"key":"A","text":"By using the “/fix” command in GitHub Copilot in-line chat."},{"key":"B","text":"By adding comments to your code and triggering a suggestion."},{"key":"C","text":"By highlighting the code, you want to fix, right-clicking, and selecting “Refactor using GitHub Copilot.”"},{"key":"D","text":"By highlighting the code you want to fix, right-clicking, and selecting “Fix using GitHub Copilot.”"},{"key":"E","text":"By running the gh copilot fix command."}]'::jsonb,
  ARRAY['A', 'C']::text[],
  'Để nhận gợi ý inline cho refactoring, developer có thể dùng lệnh `/fix` trong inline chat của Copilot, hoặc bôi đen code rồi nhấp chuột phải và chọn "Refactor using GitHub Copilot". Đây là các thao tác được tích hợp sẵn trong IDE để kích hoạt gợi ý chỉnh sửa code.',
  'Tooling & Integrations',
  ARRAY['Slash Commands', 'Refactoring', 'IDE']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q121',
  'gh-300',
  121,
  'What caution should developers exercise when using GitHub Copilot for assistance with mathematical computations?',
  '[{"key":"A","text":"GitHub Copilot’s capability to optimize complex mathematical algorithms beyond manual coding."},{"key":"B","text":"GitHub Copilot’s ability to execute and verify mathematical results in real-time."},{"key":"C","text":"GitHub Copilot’s automatic update of outdated mathematical formulas to modern standards."},{"key":"D","text":"GitHub Copilot’s reliance on pattern-based responses without verifying computation accuracy."}]'::jsonb,
  ARRAY['D']::text[],
  'Khi dùng Copilot cho tính toán toán học, developer cần thận trọng vì Copilot dựa trên phản hồi theo mẫu (pattern-based) mà không thực sự thực thi hay kiểm chứng độ chính xác của phép tính. Do đó kết quả tính toán có thể sai và cần được con người xác minh độc lập.',
  'How Copilot Works',
  ARRAY['Accuracy', 'Limitations', 'Verification']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q122',
  'gh-300',
  122,
  'When using GitHub Copilot Chat to generate boilerplate code for various test types, how can you guide the AI to follow the testing standards of your company?',
  '[{"key":"A","text":"By using a specific slash command in the prompt."},{"key":"B","text":"By using a specific command in the terminal."},{"key":"C","text":"By using a specific setting in GitHub Copilot’s configuration."},{"key":"D","text":"By using specific prompt examples in your chat request."}]'::jsonb,
  ARRAY['D']::text[],
  'Để hướng Copilot Chat theo chuẩn kiểm thử (testing standards) của công ty, cách hiệu quả là cung cấp các ví dụ prompt cụ thể (specific prompt examples) trong yêu cầu chat. Việc đưa ví dụ mẫu giúp Copilot hiểu phong cách và quy ước mong muốn để sinh boilerplate phù hợp.',
  'Prompt Engineering',
  ARRAY['Prompting', 'Testing', 'Examples']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q123',
  'gh-300',
  123,
  'When using GitHub Copilot to identify missing tests in your codebase, which of the following is the most important factor to consider?',
  '[{"key":"A","text":"Having a high test coverage percentage in the codebase."},{"key":"B","text":"Using well-known coding practices in your repository."},{"key":"C","text":"Ensuring that the correct context is available to GitHub Copilot."},{"key":"D","text":"Close all the tabs in your IDE that do not have tests in them."}]'::jsonb,
  ARRAY['C']::text[],
  'Yếu tố quan trọng nhất khi dùng Copilot để tìm các test còn thiếu là đảm bảo ngữ cảnh (context) đúng được cung cấp cho Copilot. Vì chất lượng gợi ý phụ thuộc trực tiếp vào ngữ cảnh, nếu Copilot thấy được code liên quan thì mới xác định chính xác phần nào chưa được kiểm thử.',
  'Prompt Engineering',
  ARRAY['Context', 'Testing', 'Test Coverage']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q124',
  'gh-300',
  124,
  'How can GitHub Copilot assist in maintaining consistency across your tests?',
  '[{"key":"A","text":"By providing documentation references based on industry best practices."},{"key":"B","text":"By automatically fixing all tests in the code based on the context."},{"key":"C","text":"By identifying a pattern in the way you write tests and suggesting similar patterns for future tests."},{"key":"D","text":"By writing the implementation code for the function based on context"}]'::jsonb,
  ARRAY['C']::text[],
  'Copilot giúp duy trì tính nhất quán trong test bằng cách nhận diện mẫu (pattern) trong cách bạn viết test và gợi ý các mẫu tương tự cho test tương lai. Nhờ học theo phong cách hiện có trong codebase, nó đề xuất test theo cùng quy ước.',
  'Developer Use Cases',
  ARRAY['Testing', 'Consistency', 'Patterns']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q125',
  'gh-300',
  125,
  'When using GitHub Copilot Chat to generate unit tests, which slash command would you use?',
  '[{"key":"A","text":"/create-tests"},{"key":"B","text":"/generate-tests"},{"key":"C","text":"/tests"},{"key":"D","text":"/init-tests"}]'::jsonb,
  ARRAY['C']::text[],
  'Để sinh unit test trong Copilot Chat, slash command đúng là `/tests`. Lệnh này tạo unit test cho đoạn code đang được chọn, là cú pháp được Copilot Chat hỗ trợ chính thức.',
  'Tooling & Integrations',
  ARRAY['Slash Commands', 'Unit Tests', 'Copilot Chat']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q126',
  'gh-300',
  126,
  'Which of the following statements best describes the impact of GitHub Copilot on the software development process?',
  '[{"key":"A","text":"It decreases software vulnerabilities from third party dependencies."},{"key":"B","text":"It increases productivity by automating repetitive coding tasks."},{"key":"C","text":"It reduces developer overhead by automating testing workflows."},{"key":"D","text":"It replaces the need for developers in the software development process."}]'::jsonb,
  ARRAY['C']::text[],
  'GitHub Copilot tác động tích cực đến quy trình phát triển phần mềm bằng cách giảm overhead cho developer thông qua tự động hóa các luồng kiểm thử (testing workflows). Nó hỗ trợ chứ không thay thế developer, giúp tiết kiệm công sức cho các tác vụ lặp lại như viết test.',
  'Developer Use Cases',
  ARRAY['Productivity', 'Testing', 'Automation']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q127',
  'gh-300',
  127,
  'Identify the right use cases where GitHub Copilot Chat is most effective. Each correct answer presents part of the solution. (Choose two.)',
  '[{"key":"A","text":"Creation of end-to-end performance testing scenarios for a web application"},{"key":"B","text":"Creation of a unit test scenario for newly developed Python code"},{"key":"C","text":"Create a technical requirement specification from the business requirement documentation"},{"key":"D","text":"Explain a legacy COBOL code and translate the code to another language like C#"}]'::jsonb,
  ARRAY['A', 'B']::text[],
  'Copilot Chat hiệu quả nhất ở các use case sinh code/test như tạo kịch bản performance testing end-to-end cho ứng dụng web và tạo unit test cho code Python mới viết. Đây là các tác vụ lập trình và kiểm thử cụ thể, đúng thế mạnh của công cụ hơn so với tạo tài liệu đặc tả nghiệp vụ hay dịch code legacy phức tạp.',
  'Developer Use Cases',
  ARRAY['Testing', 'Use Cases', 'Code Generation']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q128',
  'gh-300',
  128,
  'Why code reviewing still necessary when using GitHub Copilot to write tests?',
  '[{"key":"A","text":"Because GitHub Copilot generates the best code possible for the test scenario."},{"key":"B","text":"Because GitHub Copilot can cover all possible scenarios in your test cases."},{"key":"C","text":"Because GitHub Copilot replaces the need for manual testing."},{"key":"D","text":"Because GitHub Copilot’s generated test cases may not cover all possible scenarios."}]'::jsonb,
  ARRAY['D']::text[],
  'Code review vẫn cần thiết khi dùng Copilot viết test vì các test case mà Copilot tạo ra có thể không bao phủ hết mọi tình huống (scenarios). Do gợi ý dựa trên mẫu nên có thể bỏ sót edge case, vì vậy con người phải rà soát để đảm bảo độ bao phủ và chất lượng.',
  'Responsible AI',
  ARRAY['Code Review', 'Testing', 'Human Oversight']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q129',
  'gh-300',
  129,
  'How does the ‘/tests’ slash command assist developers?',
  '[{"key":"A","text":"Constructs detailed test documentation."},{"key":"B","text":"Creates unit tests for the selected code."},{"key":"C","text":"Executes test cases to find issues with the code."},{"key":"D","text":"Integrates with external testing frameworks."}]'::jsonb,
  ARRAY['B']::text[],
  'Lệnh slash `/tests` hỗ trợ developer bằng cách tạo unit test cho đoạn code được chọn (selected code). Đây là chức năng được thiết kế để nhanh chóng sinh test dựa trên code hiện tại trong editor.',
  'Tooling & Integrations',
  ARRAY['Slash Commands', 'Unit Tests', 'Testing']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q130',
  'gh-300',
  130,
  'How can GitHub Copilot be limited when it comes to suggesting unit tests?',
  '[{"key":"A","text":"GitHub Copilot’s limitations in generating unit tests can vary based on the IDE version you are using."},{"key":"B","text":"GitHub Copilot primarily suggest basic unit tests that focus on core functionalities, often requiring additional input from developers for comprehensive coverage."},{"key":"C","text":"GitHub Copilot can handle any complexity in code and automatically generate appropriate unit tests."},{"key":"D","text":"GitHub Copilot can generate all types of unit tests, including those for edge cases and complex integration scenarios."}]'::jsonb,
  ARRAY['B']::text[],
  'Một giới hạn của Copilot là nó chủ yếu gợi ý các unit test cơ bản tập trung vào chức năng cốt lõi (core functionalities), thường cần developer bổ sung thêm để đạt độ bao phủ toàn diện. Vì vậy nó không tự sinh được đầy đủ test cho mọi edge case hay kịch bản tích hợp phức tạp.',
  'How Copilot Works',
  ARRAY['Testing', 'Limitations', 'Test Coverage']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q131',
  'gh-300',
  131,
  'Where can you validate if GitHub Copilot is not returning suggestions because of content exclusions?',
  '[{"key":"A","text":"The GitHub Copilot errors panel in your IDE"},{"key":"B","text":"The GitHub Copilot logs on GitHub.com under your user settings"},{"key":"C","text":"The code suggestions window will display a warning message"},{"key":"D","text":"The GitHub Copilot icon in the status bar of the editor will display a message"}]'::jsonb,
  ARRAY['D']::text[],
  'Bạn có thể kiểm tra việc Copilot không trả về gợi ý do content exclusions thông qua biểu tượng GitHub Copilot trên thanh trạng thái (status bar) của editor, nơi sẽ hiển thị thông báo tương ứng. Đây là chỉ báo trực quan cho biết tệp hoặc kho lưu trữ hiện tại bị ảnh hưởng bởi content exclusions.',
  'Data Privacy & Content Exclusions',
  ARRAY['Content Exclusions', 'Status Bar', 'IDE']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q132',
  'gh-300',
  132,
  'When can GitHub Copilot still use content that was excluded using content exclusion?',
  '[{"key":"A","text":"When the user prompts with @workspace."},{"key":"B","text":"When the repository level settings allow overrides by the user."},{"key":"C","text":"If the content exclusion was configured at the enterprise level, and is overwritten at the organization level."},{"key":"D","text":"If the contents of an excluded file are referenced in code that is not excluded, for example function calls."}]'::jsonb,
  ARRAY['D']::text[],
  'Content exclusions ngăn Copilot dùng trực tiếp nội dung của file bị loại trừ làm context, nhưng không thể che giấu nội dung đó nếu nó được tham chiếu từ code không bị loại trừ. Khi một file không bị loại trừ gọi hàm hoặc tham chiếu tới nội dung của file bị loại trừ, các tham chiếu đó vẫn có thể xuất hiện trong gợi ý của Copilot.',
  'Data Privacy & Content Exclusions',
  ARRAY['Content Exclusions', 'Context', 'Limitations']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q133',
  'gh-300',
  133,
  'What GitHub Copilot configuration needs to be enabled to protect against IP infringements?',
  '[{"key":"A","text":"Blocking license check configuration"},{"key":"B","text":"Blocking public code matches"},{"key":"C","text":"Allowing license check configuration"},{"key":"D","text":"Allowing public code matches"}]'::jsonb,
  ARRAY['B']::text[],
  'Để bảo vệ chống vi phạm sở hữu trí tuệ (IP), cần bật cấu hình chặn các gợi ý trùng khớp với public code (Blocking public code matches). Cài đặt này ngăn Copilot đưa ra các đoạn mã trùng với mã công khai có sẵn, giảm rủi ro pháp lý về bản quyền.',
  'Administration & Policies',
  ARRAY['IP Protection', 'Duplication Detection', 'Public Code']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q134',
  'gh-300',
  134,
  'What is a limitation of content exclusions?',
  '[{"key":"A","text":"Content exclusions can be worked around as it is only available for Git repositories."},{"key":"B","text":"Repository administrators and organization owners cannot manage content exclusion settings."},{"key":"C","text":"Content exclusions are only available in the GitHub Copilot Individual plan."},{"key":"D","text":"Content exclusions can only be configured by an enterprise administrator."}]'::jsonb,
  ARRAY['A']::text[],
  'Một hạn chế của content exclusions là chúng chỉ áp dụng cho Git repositories, nên có thể bị lách qua. Nếu nội dung được truy cập ngoài bối cảnh Git repository, cơ chế loại trừ sẽ không có hiệu lực bảo vệ.',
  'Data Privacy & Content Exclusions',
  ARRAY['Content Exclusions', 'Limitations', 'Git']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q135',
  'gh-300',
  135,
  'What content can be configured to be excluded with content exclusions? Each correct answer presents part of the solution. (Choose three.)',
  '[{"key":"A","text":"Gists"},{"key":"B","text":"Repositories"},{"key":"C","text":"Files"},{"key":"D","text":"Lines in files"},{"key":"E","text":"Folders"}]'::jsonb,
  ARRAY['B', 'C', 'E']::text[],
  'Content exclusions có thể được cấu hình ở cấp độ Repositories, Files và Folders. Quản trị viên có thể chỉ định toàn bộ repository, các thư mục hoặc từng file cụ thể để Copilot không sử dụng làm context, chứ không loại trừ ở mức Gists huặc từng dòng lẻ trong file.',
  'Data Privacy & Content Exclusions',
  ARRAY['Content Exclusions', 'Scope', 'Configuration']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q136',
  'gh-300',
  136,
  'A team is using GitHub Copilot Individual in their daily development activities. They need to exclude specific files from being used to inform code completion suggestions. How can they achieve this?',
  '[{"key":"A","text":"Upgrade to Copilot Business"},{"key":"B","text":"Add a .gitignore file to the repo"},{"key":"C","text":"Have an organization owner configure content exclusions"},{"key":"D","text":"Have a repo administrator configure content exclusions"},{"key":"E","text":"Use the #file Chat variable to exclude the files"}]'::jsonb,
  ARRAY['A']::text[],
  'Content exclusions không khả dụng trong GitHub Copilot Individual; tính năng này chỉ có ở Copilot Business/Enterprise. Vì vậy để loại trừ các file khỏi gợi ý code completion, nhóm cần nâng cấp lên Copilot Business.',
  'Plans & Features',
  ARRAY['Copilot Business', 'Content Exclusions', 'Plans']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q137',
  'gh-300',
  137,
  'What do you check when GitHub Copilot content exclusions are not working? Each correct answer presents part of the solution. (Choose two.)',
  '[{"key":"A","text":"If GitHub Copilot can connect to the server selected in your user settings."},{"key":"B","text":"If the user is in an organization that has content exclusions configured."},{"key":"C","text":"If the content exclusion settings changed in the last 30 minutes or before that."},{"key":"D","text":"If the user is part of the content exclusion team that limits the use of content exclusions."}]'::jsonb,
  ARRAY['B', 'C']::text[],
  'Khi content exclusions không hoạt động, cần kiểm tra xem người dùng có thuộc tổ chức đã cấu hình content exclusions hay không, và liệu cài đặt loại trừ có thay đổi trong vòng 30 phút gần đây. Vì các thay đổi loại trừ cần đến 30 phút để có hiệu lực, một thay đổi quá mới có thể chưa được áp dụng.',
  'Data Privacy & Content Exclusions',
  ARRAY['Content Exclusions', 'Troubleshooting', 'Propagation']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q138',
  'gh-300',
  138,
  'What practices enhance the quality of suggestions provided GitHub Copilot? (Choose three.)',
  '[{"key":"A","text":"Using meaningful variable names"},{"key":"B","text":"Clearly defining the problem or task"},{"key":"C","text":"Including personal information in the code comments"},{"key":"D","text":"Providing examples of desired output"},{"key":"E","text":"Use a gitignore file to exclude irrelevant files"}]'::jsonb,
  ARRAY['A', 'B', 'D']::text[],
  'Chất lượng gợi ý của Copilot tăng lên khi dùng tên biến có ý nghĩa, xác định rõ vấn đề/nhiệm vụ, và cung cấp ví dụ về kết quả mong muốn. Những thực hành này cung cấp ngữ cảnh rõ ràng giúp Copilot hiểu đúng ý định và đưa ra mã phù hợp hơn.',
  'Prompt Engineering',
  ARRAY['Best Practices', 'Context', 'Suggestion Quality']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q139',
  'gh-300',
  139,
  'What is a key consideration when relying on GitHub Copilot Chat’s explanations of code functionality and proposed improvements?',
  '[{"key":"A","text":"The explanations are primarily derived from user-provided documentation."},{"key":"B","text":"The explanations are dynamically updated based on user feedback."},{"key":"C","text":"GitHub Copilot Chat uses a static database for generating explanations."},{"key":"D","text":"Reviewing and validating the generated output for accuracy and completeness."}]'::jsonb,
  ARRAY['D']::text[],
  'Vì Copilot Chat là công cụ AI sinh nội dung có thể sai sót, điều quan trọng là phải xem xét và xác thực kết quả tạo ra về độ chính xác và đầy đủ. Người dùng không nên tin tưởng tuyệt đối các giải thích mà cần tự kiểm chứng lại.',
  'Responsible AI',
  ARRAY['Validation', 'Human Oversight', 'Accuracy']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q140',
  'gh-300',
  140,
  'How does GitHub Copilot Chat ensure that a function works correctly?',
  '[{"key":"A","text":"By automatically writing all the tests for the function."},{"key":"B","text":"By suggesting assertions based on the code’s context and semantics."},{"key":"C","text":"By executing the test cases to validate the correctness of the code."},{"key":"D","text":"By writing the implementation code for the function."}]'::jsonb,
  ARRAY['A']::text[],
  'Copilot Chat hỗ trợ đảm bảo hàm hoạt động đúng bằng cách tự động viết các test cho hàm đó. Điều này giúp lập trình viên kiểm thử nhanh hành vi của hàm, dù vẫn cần xem xét lại các test được tạo.',
  'Developer Use Cases',
  ARRAY['Testing', 'Test Generation', 'Copilot Chat']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q141',
  'gh-300',
  141,
  'What is the process behind identifying public code matches when using a public code filter enabled in GitHub Copilot?',
  '[{"key":"A","text":"Running code suggestions through filters designed to detect public code"},{"key":"B","text":"Comparing suggestions against public code using machine learning"},{"key":"C","text":"Reviewing the user’s browsing history to identify public repositories"},{"key":"D","text":"Analyzing the context and structure of the code being written"}]'::jsonb,
  ARRAY['A']::text[],
  'Khi bật bộ lọc public code, quy trình xác định trùng khớp là chạy các gợi ý code qua các bộ lọc được thiết kế để phát hiện public code. Các gợi ý trùng với mã công khai sẽ bị bộ lọc này chặn lại.',
  'How Copilot Works',
  ARRAY['Public Code Filter', 'Duplication Detection', 'Mechanism']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q142',
  'gh-300',
  142,
  'What GitHub Copilot feature can be configured at the organization level to prevent GitHub Copilot suggesting publicly available code snippets?',
  '[{"key":"A","text":"GitHub Copilot Chat in the IDE"},{"key":"B","text":"GitHub Copilot access to Bing"},{"key":"C","text":"GitHub Copilot duplication detection filter"},{"key":"D","text":"GitHub Copilot Chat in GitHub Mobile"}]'::jsonb,
  ARRAY['C']::text[],
  'Tính năng có thể cấu hình ở cấp tổ chức để ngăn Copilot gợi ý các đoạn mã công khai là duplication detection filter (bộ lọc phát hiện trùng lặp). Khi bật, nó chặn các gợi ý trùng khớp với public code.',
  'Administration & Policies',
  ARRAY['Duplication Detection', 'Organization Settings', 'Public Code']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q143',
  'gh-300',
  143,
  'Which of the following GitHub Copilot Business related activities can be tracked using the organization audit logs?',
  '[{"key":"A","text":"Accepted chat suggestions"},{"key":"B","text":"Changes to content exclusion settings"},{"key":"C","text":"Code suggestions made by GitHub Copilot"},{"key":"D","text":"Suggestions blocked by duplication detection filtering"}]'::jsonb,
  ARRAY['B']::text[],
  'Trong các hoạt động liên quan đến Copilot Business, audit logs của tổ chức ghi lại các thay đổi đối với cài đặt content exclusion. Các sự kiện như gợi ý code hay các đề xuất bị chặn không được lưu trong audit log.',
  'Administration & Policies',
  ARRAY['Audit Logs', 'Content Exclusions', 'Monitoring']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q144',
  'gh-300',
  144,
  'How long does it take content exclusion to add or be updated?',
  '[{"key":"A","text":"Up to 30 minutes"},{"key":"B","text":"60-90 minutes"},{"key":"C","text":"45-60 minutes"},{"key":"D","text":"24 hours"}]'::jsonb,
  ARRAY['A']::text[],
  'Việc thêm hoặc cập nhật content exclusion có thể mất tới 30 phút để có hiệu lực trên các môi trường. Đây cũng là lý do khi loại trừ chưa hoạt động ngay, cần chờ khoảng thời gian này.',
  'Data Privacy & Content Exclusions',
  ARRAY['Content Exclusions', 'Propagation Time', 'Configuration']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q145',
  'gh-300',
  145,
  'What practices enhance the quality of suggestions provided by GitHub Copilot? (Select three)',
  '[{"key":"A","text":"Providing examples of desired output"},{"key":"B","text":"Clearly defining the problem or task"},{"key":"C","text":"Including personal information in the code comments"},{"key":"D","text":"Using meaningful variable names"},{"key":"E","text":"Use a .gitignore file to exclude irrelevant files"}]'::jsonb,
  ARRAY['A', 'B', 'D']::text[],
  'Chất lượng gợi ý của Copilot được nâng cao khi cung cấp ví dụ về kết quả mong muốn, xác định rõ vấn đề/nhiệm vụ, và dùng tên biến có ý nghĩa. Những yếu tố này cung cấp ngữ cảnh giúp Copilot suy luận đúng ý định của lập trình viên.',
  'Prompt Engineering',
  ARRAY['Best Practices', 'Context', 'Suggestion Quality']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q146',
  'gh-300',
  146,
  'What is the best way to share feedback about GitHub Copilot Chat with GitHub?',
  '[{"key":"A","text":"By tweeting at GitHub''s official X (previously known as Twitter) account."},{"key":"B","text":"Use the emojis in the Copilot Chat interface."},{"key":"C","text":"The Settings menu in the GitHub Mobile app."},{"key":"D","text":"The feedback section on the GitHub website."}]'::jsonb,
  ARRAY['B']::text[],
  'Cách tốt nhất để gửi phản hồi về Copilot Chat là dùng các biểu tượng cảm xúc (emojis) ngay trong giao diện Copilot Chat. Phản hồi này được gửi trực tiếp tới GitHub để cải thiện trải nghiệm.',
  'Tooling & Integrations',
  ARRAY['Feedback', 'Copilot Chat', 'User Experience']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q147',
  'gh-300',
  147,
  'Why is code reviewing still necessary when using GitHub Copilot to write tests?',
  '[{"key":"A","text":"Because GitHub Copilot replaces the need for manual testing."},{"key":"B","text":"Because GitHub Copilot''s generated test cases may not cover all possible scenarios."},{"key":"C","text":"Because GitHub Copilot can cover all possible scenarios in your test cases."},{"key":"D","text":"Because GitHub Copilot generates the best code possible for the test scenario."}]'::jsonb,
  ARRAY['B']::text[],
  'Việc review code vẫn cần thiết vì các test case do Copilot tạo có thể không bao phủ hết mọi tình huống có thể xảy ra. Lập trình viên phải kiểm tra để đảm bảo các trường hợp biên và kịch bản quan trọng đều được kiểm thử.',
  'Responsible AI',
  ARRAY['Testing', 'Code Review', 'Human Oversight']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q148',
  'gh-300',
  148,
  'What caution should developers exercise when using GitHub Copilot?',
  '[{"key":"A","text":"GitHub Copilot''s capability to optimize complex mathematical computations."},{"key":"B","text":"GitHub Copilot''s automatic update of outdated mathematical formulas to modern standards."},{"key":"C","text":"GitHub Copilot''s reliance on pattern-based responses, without verifying computation accuracy."},{"key":"D","text":"GitHub Copilot''s ability to execute and veri fy mathematical results in real-time."}]'::jsonb,
  ARRAY['C']::text[],
  'Lập trình viên cần thận trọng vì Copilot dựa trên phản hồi theo mẫu (pattern-based) mà không thực sự kiểm chứng độ chính xác của các phép tính. Do đó kết quả tính toán toán học có thể không đúng và cần được xác minh độc lập.',
  'Responsible AI',
  ARRAY['Accuracy', 'Limitations', 'Verification']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q149',
  'gh-300',
  149,
  'What is a key benefit of using GitHub Copilot within a team environment?',
  '[{"key":"A","text":"Automatically merges all team pull requests"},{"key":"B","text":"Encourages code consistency by offering similar suggestions to team members"},{"key":"C","text":"Generates team standup notes"},{"key":"D","text":"Replaces the need for any code review process"}]'::jsonb,
  ARRAY['B']::text[],
  'Lợi ích chính khi dùng Copilot trong môi trường nhóm là khuyến khích tính nhất quán của code bằng cách đưa ra các gợi ý tương tự cho các thành viên. Điều này giúp duy trì phong cách và mẫu code đồng nhất trong toàn nhóm.',
  'Developer Use Cases',
  ARRAY['Team Collaboration', 'Code Consistency', 'Productivity']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q150',
  'gh-300',
  150,
  'How can GitHub Copilot facilitate a smooth transition for developers to a new programming language? (Choose two)',
  '[{"key":"A","text":"GitHub Copilot can provide real-time guidance and support to help the developers learn the syntax and best practices of the new language."},{"key":"B","text":"GitHub Copilot’s /understand command will help GitHub Copilot to understand code written in a targeted programming language."},{"key":"C","text":"GitHub Copilot can convert comments into code to grasp the syntax and nuances of a new programming language."},{"key":"D","text":"GitHub Copilot Chat can provide guidance and support for common coding tasks and challenges in the targeted programming language."}]'::jsonb,
  ARRAY['A', 'D']::text[],
  'Copilot giúp chuyển đổi sang ngôn ngữ lập trình mới bằng cách cung cấp hướng dẫn và hỗ trợ thời gian thực để học cú pháp và best practices, đồng thời Copilot Chat hỗ trợ cho các tác vụ và thách thức coding phổ biến trong ngôn ngữ mục tiêu. Nhờ đó lập trình viên học nhanh hơn ngay trong quá trình làm việc.',
  'Developer Use Cases',
  ARRAY['Learning', 'Language Transition', 'Copilot Chat']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q151',
  'gh-300',
  151,
  'What are the potential risks associated with using GitHub Copilot? (Choose two)',
  '[{"key":"A","text":"GitHub Copilot may introduce security vulnerabilities by suggesting code with known exploits."},{"key":"B","text":"GitHub Copilot’s suggestions may not always reflect best practices or the latest coding standards."},{"key":"C","text":"GitHub Copilot may increase development lead time by providing irrelevant suggestions."},{"key":"D","text":"GitHub Copilot may decrease developer velocity by requiring too much time in prompt engineering."}]'::jsonb,
  ARRAY['A', 'B']::text[],
  'Các rủi ro tiềm ẩn gồm việc Copilot có thể đưa ra mã chứa lỗ hổng bảo mật với các exploit đã biết, và các gợi ý có thể không luôn phản ánh best practices hoặc tiêu chuẩn coding mới nhất. Vì vậy người dùng cần xem xét kỹ trước khi chấp nhận gợi ý.',
  'Responsible AI',
  ARRAY['Security', 'Best Practices', 'Risks']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q152',
  'gh-300',
  152,
  'What are the potential legal and ethical risks of using GitHub Copilot? (Select three)',
  '[{"key":"A","text":"GitHub Copilot may accidentally suggest hard-coded secrets from its training data."},{"key":"B","text":"GitHub Copilot''s suggestions may contain licensed code without providing necessary attribution."},{"key":"C","text":"GitHub Copilot may suggest code that contains security vulnerabilities."},{"key":"D","text":"GitHub Copilot may decrease developer productivity while processing far-fetched requests."}]'::jsonb,
  ARRAY['A', 'B', 'C']::text[],
  'Các rủi ro pháp lý và đạo đức bao gồm: Copilot có thể vô tình gợi ý hard-coded secrets từ dữ liệu huấn luyện, có thể chứa licensed code mà không kèm attribution cần thiết, và có thể gợi ý mã chứa lỗ hổng bảo mật. Những rủi ro này liên quan đến quyền riêng tư, bản quyền và an toàn.',
  'Responsible AI',
  ARRAY['Legal', 'Ethics', 'Security']::text[]
) ON CONFLICT (id) DO NOTHING;

