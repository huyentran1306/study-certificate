-- =========================================================
-- SUPABASE DATABASE SETUP & FULL QUESTIONS SEEDING SCRIPT
-- Generated automatically. Total questions: 551
-- Copy and execute this in the Supabase SQL Editor
-- =========================================================

-- 1. Create table structured for questions
CREATE TABLE IF NOT EXISTS questions (
    id TEXT PRIMARY KEY,
    cert_id TEXT NOT NULL,
    question_number INTEGER NOT NULL,
    text TEXT NOT NULL,
    options JSONB NOT NULL,
    correct_answers TEXT[] NOT NULL,
    explanation TEXT,
    category TEXT,
    tags TEXT[]
);

-- 2. Create table for user overall stats progress
CREATE TABLE IF NOT EXISTS user_progress (
    username TEXT NOT NULL,
    cert_id TEXT NOT NULL,
    answered_count INTEGER DEFAULT 0,
    correct_count INTEGER DEFAULT 0,
    incorrect_count INTEGER DEFAULT 0,
    streak INTEGER DEFAULT 0,
    bookmarked_question_ids TEXT[] DEFAULT '{}',
    last_updated TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    PRIMARY KEY (username, cert_id)
);

-- 3. Create table for detailed log registry (history log per question)
CREATE TABLE IF NOT EXISTS study_history (
    username TEXT NOT NULL,
    cert_id TEXT NOT NULL,
    question_id TEXT NOT NULL,
    selected_options TEXT[] NOT NULL,
    is_correct BOOLEAN NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    PRIMARY KEY (username, cert_id, question_id)
);

-- Clean up existing data to avoid conflict, or just upsert
TRUNCATE TABLE questions CASCADE;

-- 4. Seed Questions Database

-- ===========================================
-- SEED DATA FOR GITHUB FOUNDATIONS (GH-300) (gh-300)
-- Total questions: 152
-- ===========================================

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q1',
  'gh-300',
  1,
  'Which Microsoft ethical AI principle is aimed at ensuring AI systems treat all people equally?',
  '[{"key":"A","text":"Privacy and Security"},{"key":"B","text":"Fairness"},{"key":"C","text":"Reliability and Safety"},{"key":"D","text":"Inclusiveness"}]'::jsonb,
  ARRAY['B']::text[],
  'Nguyên tắc Công bằng (Fairness) của Microsoft tập trung vào việc đảm bảo hệ thống AI không phân biệt đối xử hoặc thể hiện sự thiên vị đối với bất kỳ cá nhân hay nhóm người nào. Mục tiêu là đối xử bình đẳng với tất cả mọi người, bất kể chủng tộc, giới tính, tôn giáo hoặc các đặc điểm được bảo vệ khác. Ngược lại, Privacy & Security bảo vệ dữ liệu cá nhân; Inclusiveness tập trung vào tính tiếp cận phổ quát.',
  'Responsible AI',
  ARRAY['Microsoft Ethical AI', 'Fairness']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q2',
  'gh-300',
  2,
  'What can be done during AI development to minimize bias?',
  '[{"key":"A","text":"Collect massive amounts of data for training."},{"key":"B","text":"Focus on accuracy of the data."},{"key":"C","text":"Use diverse data, fairness metrics, and human oversight."},{"key":"D","text":"Improve on the computational efficiency and speed."}]'::jsonb,
  ARRAY['C']::text[],
  'Để giảm thiểu thiên lệch (bias), nhà phát triển cần một chiến lược đa diện ở mọi giai đoạn của vòng đời AI. Việc sử dụng dữ liệu đa dạng (diverse data) giúp ngăn mô hình tiếp thu các định kiến cục bộ; các số đo công bằng (fairness metrics) giúp quản lý cấu trúc kỹ thuật; và sự giám sát của con người (human oversight) giúp đánh giá các tác động thực tế ngoài ý muốn.',
  'Responsible AI',
  ARRAY['Bias Mitigation', 'AI Lifecycle']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q3',
  'gh-300',
  3,
  'Why is it important to ensure the security of the code used in Generative AI (Gen AI) tools?',
  '[{"key":"A","text":"Ensuring code security prevents unauthorized access and potential data breaches."},{"key":"B","text":"Ensuring code security enables the AI system to handle larger datasets effectively."},{"key":"C","text":"Ensuring code security maintains the integrity of the AI system."},{"key":"D","text":"Ensuring code security supports the development of more advanced AI features."}]'::jsonb,
  ARRAY['A']::text[],
  'Bảo mật mã nguồn trong công cụ Generative AI là cực kỳ quan trọng vì các mô hình này thường xử lý logic nội bộ, các biến môi trường nhạy cảm và khóa bảo mật hệ thống. Mã nguồn lỏng lẻo có thể dẫn tới rò rỉ dữ liệu hoặc rò rỉ IP của công ty. Trong khung Responsible AI, việc bảo vệ code-in-use bảo vệ cả tài sản trí tuệ và quyền riêng tư người dùng.',
  'Security & Licensing',
  ARRAY['Code Security', 'Enterprise Risk']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q4',
  'gh-300',
  4,
  'A social media manager wants to use AI to filter content. How can they promote transparency in the platform’s AI operations?',
  '[{"key":"A","text":"By providing clear explanations about the types of content the AI is designed to filter and how it arrives at its conclusion."},{"key":"B","text":"By relying on a well-regarded AI development company."},{"key":"C","text":"By regularly updating the AI filtering algorithm."},{"key":"D","text":"By focusing on user satisfaction with the content filtering."}]'::jsonb,
  ARRAY['A']::text[],
  'Tính minh bạch (Transparency) đòi hỏi các hệ thống AI phải dễ hiểu đối với người dùng cuối, có tài liệu và các lời giải thích rõ ràng về tiêu chí hoạt động. Việc công khai rõ ràng loại nội dung nào sẽ bị lọc và cơ chế đưa ra quyết định của mô hình giúp xây dựng niềm tin tốt nhất và cho phép người dùng có quyền khiếu nại thỏa đáng.',
  'Responsible AI',
  ARRAY['Transparency', 'Responsible Operations']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q5',
  'gh-300',
  5,
  'How does GitHub Copilot Chat utilize its training data and external sources to generate responses when answering coding questions?',
  '[{"key":"A","text":"It primarily relies on the model’s training data to generate responses."},{"key":"B","text":"It combines its training data set, code in user repositories, and external sources like Bing to generate responses."},{"key":"C","text":"It uses user-provided documentation exclusively to generate responses."},{"key":"D","text":"It primarily uses search results from Bing to generate responses."}]'::jsonb,
  ARRAY['B']::text[],
  'GitHub Copilot Chat sử dụng cơ chế tổng hợp thông minh kết hợp 3 nguồn: (1) Dữ liệu huấn luyện gốc của mô hình LLM chuyên về code; (2) Ngữ cảnh từ repository của người dùng (file đang mở, các hàm lân cận trong IDE để gợi ý mang tính may đo cá nhân); (3) Các nguồn tài liệu cập nhật bên ngoài thông qua tích hợp cổng tìm kiếm Bing (cho các API mới ra mắt).',
  'Features & Optimization',
  ARRAY['Copilot Chat', 'Data Synthesis']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q6',
  'gh-300',
  6,
  'Which principle emphasizes that AI systems should be understandable and provide clear information on how they work?',
  '[{"key":"A","text":"Fairness"},{"key":"B","text":"Accountability"},{"key":"C","text":"Transparency"},{"key":"D","text":"Inclusiveness"}]'::jsonb,
  ARRAY['C']::text[],
  'Nguyên tắc Minh bạch (Transparency) quy định rõ ràng hệ thống AI phải mang tính giải thích được (explainable). Người dùng phải biết họ đang tương tác với AI và có thể truy cập thông tin rõ ràng về cách hoạt động, nguồn dữ liệu và logic ra quyết định của thuật toán đó.',
  'Responsible AI',
  ARRAY['Transparency', 'AI Principles']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q7',
  'gh-300',
  7,
  'Which of the following is a risk associated with using AI?',
  '[{"key":"A","text":"AI replaces the need for developer opportunities in most fields."},{"key":"B","text":"AI eliminated the need for data privacy regulations."},{"key":"C","text":"AI algorithms are incapable of perpetuating existing biases."},{"key":"D","text":"AI systems can sometimes make decisions that are difficult to interpret."}]'::jsonb,
  ARRAY['D']::text[],
  'Một rủi ro nổi tiếng của trí tuệ nhân tạo (đặc biệt là mạng nơ-ron sâu phức tạp) là vấn đề ''Hộp đen'' (Black Box), nơi các quyết định của hệ thống cực kỳ phức tạp và con người khó có thể phân tích hay giải giải nghĩa được một cách tường tận. AI không loại bỏ các quy định bảo mật, cũng không thay thế hoàn toàn nghề lập trình viên mà chỉ mang tính bổ trợ.',
  'Responsible AI',
  ARRAY['Explainability', 'Black Box Risk']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q8',
  'gh-300',
  8,
  'What types of prompts or code snippets might be flagged by the GitHub Copilot toxicity filter? (Choose two.)',
  '[{"key":"A","text":"Hate speech or discriminatory language (e.g., racial slurs, offensive stereotypes)"},{"key":"B","text":"Sexually suggestive or explicit content"},{"key":"C","text":"Code that contains logical errors or produces unexpected results"},{"key":"D","text":"Code comments containing strong opinions or criticisms"}]'::jsonb,
  ARRAY['A', 'B']::text[],
  'Bộ lọc độc hại (toxicity filter) của GitHub Copilot quét các prompt đầu vào để loại bỏ các ngôn từ kích động thù địch/phân biệt đối xử (A) hoặc các nội dung người lớn, khiêu dâm, không lành mạnh (B). Bộ lọc không đánh giá tính đúng đắn của logic code (C) cũng không chặn các nhận xét phê bình kỹ thuật thông thường (D).',
  'Security & Licensing',
  ARRAY['Toxicity Filter', 'Content Safety']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q9',
  'gh-300',
  9,
  'How can the concept of fairness be integrated into the process of operating an AI tool?',
  '[{"key":"A","text":"Focusing on accessibility will ensure fairness."},{"key":"B","text":"Training AI data and algorithms to be free from biases will ensure fairness."},{"key":"C","text":"Regularly monitoring the AI tool’s performance will ensure fairness in its outputs."},{"key":"D","text":"Focusing on collecting large datasets for training will ensure fairness."}]'::jsonb,
  ARRAY['A']::text[],
  'Ở khía cạnh vận hành (operating), tích hợp sự công bằng bằng cách tập trung vào khả năng tiếp cận (Accessibility), giúp bất kỳ nhóm người dùng nào, không phân biệt rào cản ngôn ngữ hay khuyết tật cơ thể, đều nhận được lợi ích tương tự nhau từ AI. Việc huấn luyện dữ liệu không thiên lệch là bước trước đó (ở giai đoạn phát triển), không phải giai đoạn vận hành phát hành.',
  'Responsible AI',
  ARRAY['Accessibility', 'Inclusive Design']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q10',
  'gh-300',
  10,
  'What are the potential risks associated with relying heavily on code generated from GitHub Copilot? (Choose two.)',
  '[{"key":"A","text":"GitHub Copilot may introduce security vulnerabilities by suggesting code with known exploits."},{"key":"B","text":"GitHub Copilot’s suggestions may not always reflect best practices or the latest coding standards."},{"key":"C","text":"GitHub Copilot may increase development lead time by providing irrelevant suggestions."},{"key":"D","text":"GitHub Copilot may decrease developer velocity by requiring too much time in prompt engineering."}]'::jsonb,
  ARRAY['A', 'B']::text[],
  'Hai rủi ro chính khi phụ thuộc hoàn toàn vào gợi ý từ Copilot mà không kiểm duyệt: (1) Mô hình có thể đề xuất các đoạn mã chứa lỗ hổng bảo mật đã biết hoặc mẫu mã cũ kém an toàn (A); (2) Đề xuất có thể dùng cú pháp lỗi thời hoặc không tuân thủ mẫu thiết kế tốt nhất hiện tại (B) vì nó học từ mã nguồn lịch sử trên Internet.',
  'Security & Licensing',
  ARRAY['Code Quality', 'Exploit Risk']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q11',
  'gh-300',
  11,
  'Why might a Generative AI (Gen AI) tool create inaccurate outputs?',
  '[{"key":"A","text":"The Gen AI tool is programmed with a focus on creativity over factual accuracy."},{"key":"B","text":"The Gen AI tool is experiencing downtime and is not fully recovered."},{"key":"C","text":"The training data might contain biases or inconsistencies."},{"key":"D","text":"The Gen AI tool is being overloaded with too many requests at once."}]'::jsonb,
  ARRAY['C']::text[],
  'Các mô hình ngôn ngữ lớn hoạt động trên cơ sở so khớp mẫu thống kê từ kho dữ liệu khổng lồ. Nếu kho huấn luyện (training data) chứa các thông tin mâu thuẫn, sai lệch hoặc định kiến, mô hình sẽ học và tái lập lại y chang những lỗi đó như là một thực tế chính xác.',
  'Responsible AI',
  ARRAY['Hallucinations', 'Training Bias']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q12',
  'gh-300',
  12,
  'What is the primary role of the ''/optimize'' slash command in VS Code / Visual Studio?',
  '[{"key":"A","text":"Translates code into a more performant language."},{"key":"B","text":"Automatically formats the code according to the selected style guide."},{"key":"C","text":"Summarizes your documentation into more maintainable and readable formats."},{"key":"D","text":"Enhances the performance of the selected code by analyzing its runtime complexity."}]'::jsonb,
  ARRAY['D']::text[],
  'Lệnh ''/optimize'' phân tích độ phức tạp thời gian/không gian của đoạn mã được chọn, phát hiện các điểm nghẽn hiệu suất (ví dụ: vòng lặp lồng nhau có độ phức tạp cao, thuật toán chưa tối ưu) và đề xuất phương án viết lại mã nguồn gọn hơn, chạy nhanh hơn với tài nguyên thấp hơn.',
  'Features & Optimization',
  ARRAY['Slash Commands', 'Optimization']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q13',
  'gh-300',
  13,
  'Which GitHub Copilot plan could an Azure DevOps organization use without requiring a GitHub Enterprise license?',
  '[{"key":"A","text":"GitHub Copilot Enterprise"},{"key":"B","text":"GitHub Copilot for Azure DevOps"},{"key":"C","text":"Copilot Teams"},{"key":"D","text":"GitHub Copilot Individual"}]'::jsonb,
  ARRAY['B']::text[],
  'Gói ''GitHub Copilot for Azure DevOps'' cho phép các tổ chức đang phát triển thuần túy trên cổng Azure DevOps có thể nhúng và đăng ký trực tiếp dịch vụ Copilot của họ mà không nhất thiết phải mua/nâng cấp lên giấy phép hệ sinh thái GitHub Enterprise đầy đủ.',
  'Security & Licensing',
  ARRAY['Licensing Plans', 'Azure DevOps']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q14',
  'gh-300',
  14,
  'Which of the following steps correctly demonstrates how to establish an organization-wide policy for GitHub Copilot Business to restrict its use to certain repositories?',
  '[{"key":"A","text":"Create a copilot.policy file in each repository"},{"key":"B","text":"Create a copilot.policy in the .github repository"},{"key":"C","text":"Configure the policies in the organization settings"},{"key":"D","text":"Apply policies through the GitHub Actions configuration"}]'::jsonb,
  ARRAY['C']::text[],
  'Các chính sách cấp doanh nghiệp (như hạn chế kho lưu trữ hay quản lý truy cập) của GitHub Copilot Business được thiết lập và thực thi tập trung thông qua trang thiết lập tổ chức (Organization Settings). Điều này đảm bảo tính nhất quán trên toàn bộ doanh nghiệp và tránh việc lập trình viên tự cấu hình cục bộ sai lệch.',
  'Security & Licensing',
  ARRAY['Enterprise Policies', 'Repository Restrict']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q15',
  'gh-300',
  15,
  'What type of information can you retrieve through GitHub Copilot Business Subscriptions via REST API? (Choose two.)',
  '[{"key":"A","text":"View code suggestions for a specific user"},{"key":"B","text":"List all GitHub Copilot seat assignments for an organization"},{"key":"C","text":"Get a summary of GitHub Copilot usage for organization members"},{"key":"D","text":"List of all unsubscribed GitHub Copilot members within an organization"}]'::jsonb,
  ARRAY['B', 'C']::text[],
  'REST API của Copilot hỗ trợ quản trị viên lấy các thông tin hoạt động: Danh sách phân bổ chỗ ngồi sử dụng giấy phép trong tổ chức (B) và Bản tóm tắt hiệu suất/tần suất sử dụng của các thành viên (C). API không cho phép xem mã code gợi ý chi tiết của từng cá nhân vì mục tiêu bảo mật quyền riêng tư (A).',
  'Security & Licensing',
  ARRAY['REST API', 'Copilot Seat Summary']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q16',
  'gh-300',
  16,
  'What is the best way to share feedback about GitHub Copilot Chat when using it on GitHub Mobile?',
  '[{"key":"A","text":"The feedback section on the GitHub website."},{"key":"B","text":"By tweeting at GitHub’s official X (previously known as Twitter) account."},{"key":"C","text":"Use the emojis in the Copilot Chat interface."},{"key":"D","text":"The Settings menu in the GitHub Mobile app."}]'::jsonb,
  ARRAY['C']::text[],
  'Cách nhanh nhất và trực quan nhất để phản hồi chất lượng câu trả lời của Chatbot ngay trên ứng dụng di động là click vào các biểu tượng cảm xúc (emojis) tích hợp sẵn trong dòng hội thoại chat (ví dụ như nút thích/không thích, ngón tay hướng lên/xuống). Cách này truyền trực tiếp ngữ cảnh hội thoại về hệ thống tối ưu hóa.',
  'Features & Optimization',
  ARRAY['Mobile App Feedback', 'Micro-Interactions']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q17',
  'gh-300',
  17,
  'What specific function does the ''/fix'' slash command perform?',
  '[{"key":"A","text":"Proposes changes for detected issues, suggesting corrections for syntax errors and programming mistakes."},{"key":"B","text":"Converts pseudocode into executable code, optimizing for readability and maintainability."},{"key":"C","text":"Generates new code snippets based on language syntax and best practices."},{"key":"D","text":"Initiates a code review with static analysis tools for security and logic errors."}]'::jsonb,
  ARRAY['A']::text[],
  'Lệnh ''/fix'' được thiết kế đặc biệt để phân tích đoạn code bị lỗi lỗi cú pháp hoặc lỗi logic, từ đó đưa ra đề xuất vá lỗi trực tiếp kèm theo giải thích nguyên nhân rõ ràng, giúp tăng hiệu suất sửa lỗi (debug) tại chỗ cho lập trình viên.',
  'Features & Optimization',
  ARRAY['Slash Commands', 'Debugging']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q18',
  'gh-300',
  18,
  'Which GitHub Copilot pricing plans include features that exclude your GitHub Copilot data like usage, prompts, and suggestions from default training GitHub Copilot? (Choose two.)',
  '[{"key":"A","text":"GitHub Copilot Codespace"},{"key":"B","text":"GitHub Copilot Business"},{"key":"C","text":"GitHub Copilot Individual"},{"key":"D","text":"GitHub Copilot Enterprise"}]'::jsonb,
  ARRAY['B', 'D']::text[],
  'Đối với tài khoản Doanh nghiệp (Business & Enterprise), hệ thống áp dụng cơ chế bảo mật nghiêm ngặt loại trừ hoàn toàn dữ liệu mã nguồn, câu lệnh và phản hồi của lập trình viên khỏi mô hình huấn luyện công cộng. Ở gói Cá nhân (Individual), dữ liệu có thể được sử dụng làm thông tin cải tiến mô hình trừ phi lập trình viên chủ động tắt chúng trong tài khoản.',
  'Security & Licensing',
  ARRAY['Data Privacy', 'Corporate Subscriptions']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q19',
  'gh-300',
  19,
  'When using an IDE with a supported GitHub Copilot plug-in, which Chat features can be accessed from within the IDE? (Choose two.)',
  '[{"key":"A","text":"Explain code and suggest improvements"},{"key":"B","text":"Find out about releases and commits"},{"key":"C","text":"Generate unit tests"},{"key":"D","text":"Plan coding tasks"}]'::jsonb,
  ARRAY['A', 'C']::text[],
  'Hai tính năng mở rộng hữu ích nhất ngay trong bảng Chat IDE của Copilot là: giải thích cơ chế đoạn mã chưa biết kèm đề xuất cải tiến tối ưu (A); và tạo khung mã kiểm thử đơn vị tự động phù hợp với framework hiện tại (C) qua lệnh /tests.',
  'Features & Optimization',
  ARRAY['IDE Integrations', 'Unit Tests Scaffold']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q20',
  'gh-300',
  20,
  'Which Copilot Enterprise features are available in all commercially supported IDEs?',
  '[{"key":"A","text":"Knowledge bases"},{"key":"B","text":"Chat"},{"key":"C","text":"Inline suggestions"},{"key":"D","text":"Pull request summaries"}]'::jsonb,
  ARRAY['B', 'C']::text[],
  'Độc lập với dòng IDE kết nối (VS Code, Visual Studio, JetBrains, Neovim), hai tính năng cốt lõi luôn khả dụng ở mọi nền tảng là: Khung hội thoại AI Chat (B) và Cơ chế tự động đề xuất mã nguồn thông minh dạng văn bản mờ trực tiếp tại con trỏ (C).',
  'Features & Optimization',
  ARRAY['Supported Editor Platforms', 'Core Features']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q21',
  'gh-300',
  21,
  'What two options navigate to configure duplicate detection? (Choose two.)',
  '[{"key":"A","text":"Organization settings → Copilot → Policies"},{"key":"B","text":"Enterprise settings → Copilot → Policies"},{"key":"C","text":"Repository settings → Copilot → Policies"},{"key":"D","text":"User settings → Copilot → Policies"}]'::jsonb,
  ARRAY['A', 'B']::text[],
  'Việc cấu hình phát hiện và chặn các đoạn mã trùng lặp với kho mã nguồn công cộng là chính sách cấp độ chính sách hệ thống. Chỉ người quản trị có quyền thiết lập ở trang cấu hình Cấp tổ chức (Organization) (A) hoặc Cấp cấu hình doanh nghiệp liên hợp (Enterprise) (B).',
  'Security & Licensing',
  ARRAY['Duplicate Code Filter', 'Policy Configurations']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q22',
  'gh-300',
  22,
  'What kind of insights can the GitHub Copilot usage metrics API provide to help evaluate the effectiveness of GitHub Copilot? (Choose two.)',
  '[{"key":"A","text":"The API can generate detailed reports on code quality improvements made by GitHub Copilot."},{"key":"B","text":"The API can track the number of code suggestions accepted and used in the organization."},{"key":"C","text":"The API can provide feedback on coding style and standards compliance."},{"key":"D","text":"The API can provide Copilot Chat specific suggestions acceptance metrics."}]'::jsonb,
  ARRAY['B', 'D']::text[],
  'Usage metrics API cho phép tổ chức đo lường hiệu suất thông qua: (B) Số lượng gợi ý mã được chấp nhận (accept) đưa vào codebase và (D) Thống kê tỷ lệ chấp nhận phản hồi riêng biệt của kênh Copilot Chat.',
  'Features & Optimization',
  ARRAY['Metrics API', 'Adoption Analytics']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q23',
  'gh-300',
  23,
  'How do you generate code suggestions with GitHub Copilot in the CLI?',
  '[{"key":"A","text":"Describe the project’s architecture → Use the copilot generate command → Accept the generated suggestion."},{"key":"B","text":"Type out the code snippet → Use the copilot refine command to enhance it → Review the suggested command."},{"key":"C","text":"Write code comments → Press the suggestion shortcut → Select the best suggestion from the list."},{"key":"D","text":"Use ‘gh copilot suggest’ → Write the command you want → Select the best suggestion from the list."}]'::jsonb,
  ARRAY['D']::text[],
  'Đối với môi trường dòng lệnh (CLI), lệnh tiêu chuẩn là sử dụng cú pháp ''gh copilot suggest'' làm điểm mốc đầu tiên (D), tiếp theo là viết yêu cầu bằng ngôn ngữ tự nhiên, hệ thống sẽ đề xuất các lệnh shell, Git hoặc CLI phù hợp nhất.',
  'Features & Optimization',
  ARRAY['CLI Copilot', 'Command Line Helper']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q24',
  'gh-300',
  24,
  'Which of the following are true about code suggestions? (Choose two.)',
  '[{"key":"A","text":"Code suggestions are limited to single-line suggestions"},{"key":"B","text":"Code suggestions are guaranteed to not expose known security vulnerabilities"},{"key":"C","text":"Code suggestions will always compile or run without modifications"},{"key":"D","text":"You can use keyboard shortcuts to accept the next word in a suggestion"},{"key":"E","text":"Alternative code suggestions can be shown in a new tab"}]'::jsonb,
  ARRAY['D', 'E']::text[],
  'Tính năng tiện ích của Copilot cho phép: Chấp nhận từng từ một cách tăng dần qua tổ hợp phím tắt (D) (ví dụ: Ctrl + Mũi tên phải) và Mở một tab phụ riêng biệt để duyệt qua tới 10 phương án gợi ý mã thay thế khác nhau cùng lúc (E).',
  'Features & Optimization',
  ARRAY['IDE Shortcuts', 'Multi-completions view']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q25',
  'gh-300',
  25,
  'What reasons could apply if code suggestions are not working in your editor? (Choose three.)',
  '[{"key":"A","text":"You do not have an active internet connection"},{"key":"B","text":"Your programming language is not supported"},{"key":"C","text":"You are working in files included in your .gitignore"},{"key":"D","text":"You do not have a valid GitHub Copilot license"},{"key":"E","text":"Your content exclusion is active and blocks the use of GitHub Copilot"}]'::jsonb,
  ARRAY['A', 'D', 'E']::text[],
  'Khi Copilot ngừng hoạt động đột ngột, nguyên nhân cốt lõi thường thuộc nhóm: mất kết nối internet (A) vì Copilot cần kết nối máy chủ OpenAI/GitHub để suy luận; bạn chưa có hoặc hết hạn giấy phép sử dụng hợp lệ (D); hoặc tệp tin đang mở nằm trong danh mục loại trừ chính sách bảo mật nội bộ của tổ chức (Content Exclusion) (E).',
  'Features & Optimization',
  ARRAY['Troubleshooting', 'Service Errors']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q26',
  'gh-300',
  26,
  'How can the insights gained from the metrics API be used to improve the development process in conjunction with GitHub Copilot?',
  '[{"key":"A","text":"Real-time debugging and error resolution statistics."},{"key":"B","text":"Automated generation of complete project documentation."},{"key":"C","text":"Detailed analysis of GitHub Copilot’s suggestions vs. manual coding."},{"key":"D","text":"Insights on the types of coding languages where GitHub Copilot is most helpful."}]'::jsonb,
  ARRAY['C', 'D']::text[],
  'Dữ liệu phân tích hiệu năng giúp kỹ sư trưởng đánh giá: Tỷ lệ viết mã thủ công so với mã có sự hỗ trợ của AI (C); và nhận diện ngôn ngữ lập trình nào trong hệ thống đang tối ưu hóa được năng suất cao nhất nhờ vào Copilot (D).',
  'Features & Optimization',
  ARRAY['Analytics', 'Enterprise Admin Metrics']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q27',
  'gh-300',
  27,
  'How can users provide feedback about GitHub Copilot Chat using their IDE?',
  '[{"key":"A","text":"By emailing the support team directly."},{"key":"B","text":"Through the “Share Feedback” button in the Copilot Chat panel."},{"key":"C","text":"By filling out a feedback form on the GitHub website."},{"key":"D","text":"By posting on the GitHub forums."}]'::jsonb,
  ARRAY['B']::text[],
  'Kênh phản hồi nhanh nhất và được đề xuất ngay trên thanh giao diện Chat của IDE là nút tiện ích ''Share Feedback'' (B), giúp chụp kèm thông tin kỹ thuật không nhạy cảm gửi về đội ngũ phát triển sản phẩm cải tiến thuật toán.',
  'Features & Optimization',
  ARRAY['IDE Panel Tools', 'User Comments System']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q28',
  'gh-300',
  28,
  'GitHub Copilot in the Command Line Interface (CLI) can be used to configure the following settings: (Choose two.)',
  '[{"key":"A","text":"Usage analytics"},{"key":"B","text":"The default editor"},{"key":"C","text":"The default execution confirmation"},{"key":"D","text":"GitHub CLI subcommands"}]'::jsonb,
  ARRAY['A', 'C']::text[],
  'Trong môi trường CLI, lập trình viên có thể cấu hình: Bật/Tắt việc gửi dữ liệu phân tích tần suất sử dụng (Usage Analytics) (A) và Quy định có yêu cầu xác nhận gõ phím trước khi chạy thử câu lệnh sinh ra tự động hay không (C) để tránh rủi ro phá hủy hệ thống.',
  'Features & Optimization',
  ARRAY['CLI Configurations', 'Execution Safety Gate']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q29',
  'gh-300',
  29,
  'What types of content can GitHub Copilot Knowledge Base answer questions about? (Choose three.)',
  '[{"key":"A","text":"compiled binaries"},{"key":"B","text":"code snippets"},{"key":"C","text":"design patterns"},{"key":"D","text":"screenshots"},{"key":"E","text":"documentation"}]'::jsonb,
  ARRAY['B', 'C', 'E']::text[],
  'Cơ sở tri thức (Knowledge Base) của Copilot được thiết kế để giải nghĩa và xử lý thông tin dạng text có cấu trúc: các khối mã lập trình cụ thể (B), mô hình thiết kế tối ưu hệ thống (C) và các tài liệu hướng dẫn kỹ thuật dạng Markdown (E). Nó hoàn toàn không đọc hiểu các tệp nhị phân đã biên dịch (A).',
  'Features & Optimization',
  ARRAY['Knowledge Base Scope', 'Enterprise Features']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q30',
  'gh-300',
  30,
  'What is the primary purpose of organization audit logs in GitHub Copilot Business?',
  '[{"key":"A","text":"To track the number of lines of code suggested by Copilot"},{"key":"B","text":"To assign software licenses within the organization"},{"key":"C","text":"To monitor code conflicts across repositories"},{"key":"D","text":"To monitor administrator activities and actions within the organization"}]'::jsonb,
  ARRAY['D']::text[],
  'Sổ nhật ký kiểm toán (Audit Logs) của tổ chức hướng tới quản lý an ninh hệ thống và phân quyền: nó ghi chú toàn bộ hành động chỉnh sửa cài đặt, thêm bớt quyền quản trị hoặc cấp/thu hồi giấy phép sử dụng thực thi bởi các quản trị viên doanh nghiệp (D). Giao diện này không có mục đích theo dõi số dòng mã code đơn lẻ viết ra hàng ngày.',
  'Security & Licensing',
  ARRAY['Governance', 'Audit Trails Tracker']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q31',
  'gh-300',
  31,
  'How does GitHub Copilot Enterprise assist in code reviews during the pull request process? (Choose two.)',
  '[{"key":"A","text":"It generates a prose summary and bulleted list of key changes for pull requests."},{"key":"B","text":"It can answer questions about the changeset of the pull request."},{"key":"C","text":"It automatically merges pull requests after an automated review."},{"key":"D","text":"It can validate the accuracy of the changes in the pull request."}]'::jsonb,
  ARRAY['A', 'B']::text[],
  'GitHub Copilot hỗ trợ duyệt mã (Code Review) thông qua: (A) Tự động viết tóm tắt tệp thay đổi (PR Summary) dưới dạng văn bản và danh sách các điểm chỉnh sửa cốt lõi; và (B) Cho phép người duyệt code trực tiếp chất vấn Chatbot về phân đoạn mã nguồn thay đổi nâng cao hiệu suất thấu hiểu ngữ cảnh.',
  'Features & Optimization',
  ARRAY['Code Reviews', 'PR Diagnostics summary']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q32',
  'gh-300',
  32,
  'How can you get multiple suggestions from GitHub Copilot?',
  '[{"key":"A","text":"By using the inline chat functionality with the command/multiple"},{"key":"B","text":"By using @workspace in the chat window"},{"key":"C","text":"By opening the completions panel in your editor"},{"key":"D","text":"By asking for multiple suggestions using comments in your code"}]'::jsonb,
  ARRAY['C']::text[],
  'Để xem danh sách nhiều cấu trúc mã gợi ý thay thế cùng lúc, lập trình viên mở bảng hiển thị đầy đủ gợi ý (Completions Panel) thông qua phím tắt mặc định (như Alt + ] hoặc Ctrl + Enter trên Windows) để so sánh lựa chọn tối ưu nhất phù hợp bài toán.',
  'Features & Optimization',
  ARRAY['Completions Window', 'Aesthetic coding options']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q33',
  'gh-300',
  33,
  'What configuration needs to be set to get help from Microsoft and GitHub protecting against IP infringement while using GitHub Copilot?',
  '[{"key":"A","text":"Enforce blocking of MIT or GPL licensed code"},{"key":"B","text":"Enable GitHub Copilot license checking"},{"key":"C","text":"Suggestions matching public code to ‘blocked’. You need to check code suggestions yourself before accepting"}]'::jsonb,
  ARRAY['C']::text[],
  'Để nhận hỗ trợ pháp lý bảo vệ bản quyền sở hữu trí tuệ từ Microsoft/GitHub, tài khoản của bạn phải kích hoạt chính sách cấu hình lựa chọn: ''Chặn các gợi ý trùng lặp với mã nguồn công cộng trên mạng (Suggestions matching public code).'' Bạn vẫn phải tự thẩm định trực tiếp trước khi nhấn nút Accept mã.',
  'Security & Licensing',
  ARRAY['IP Infringement Protection', 'Settings Configuration']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q34',
  'gh-300',
  34,
  'What method can be used to interact with GitHub Copilot?',
  '[{"key":"A","text":"From a watch window in an IDE debug session"},{"key":"B","text":"By using a properly configured GitHub CLI"},{"key":"C","text":"From a web browser at https://github.copilot.com"},{"key":"D","text":"By using chat capabilities in NeoVim"}]'::jsonb,
  ARRAY['A']::text[],
  'Copilot hỗ trợ tương tác trực tiếp bằng cách tích hợp sâu vào thanh công cụ giám sát biến (Watch Window) ngay trong phiên thực thi thử nghiệm mã nguồn (Debug Session) của Visual Studio/VS Code để phân tích nội dung Call Stack sinh gợi ý thích ứng ngữ cảnh thực tế.',
  'Features & Optimization',
  ARRAY['Debugging Tools', 'IDE Extensions Integration']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q35',
  'gh-300',
  35,
  'How does GitHub Copilot typically handle code suggestions that involve deprecated features or syntax of programming languages?',
  '[{"key":"A","text":"GitHub Copilot always filters out deprecated elements to promote the use of current standards."},{"key":"B","text":"GitHub Copilot may suggest deprecated syntax or features if they are present in its training data."},{"key":"C","text":"GitHub Copilot rejects all prompts involving deprecated features to avoid compilation errors."},{"key":"D","text":"GitHub Copilot automatically updates deprecated features in its suggestions to the latest version."}]'::jsonb,
  ARRAY['B']::text[],
  'GitHub Copilot hoàn toàn không chủ động nhận thức hoặc đánh giá thực tuyển tính lỗi thời của câu lệnh theo sự phát triển thời gian. Vì vậy, nếu kho huấn luyện công cộng chứa mẫu cũ nhiều lần, nó vẫn tự động sinh ra gợi ý lỗi thời. Trách nhiệm kiểm lọt lỗi này thuộc về lập trình viên.',
  'Security & Licensing',
  ARRAY['Legacy Support', 'AI Retraining limitations']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q36',
  'gh-300',
  36,
  'Identify the steps involved in the life cycle of a GitHub Copilot code suggestion. (Choose two.)',
  '[{"key":"A","text":"Processing telemetry data"},{"key":"B","text":"Generate suggestions"},{"key":"C","text":"Retraining the model"},{"key":"D","text":"Storing user data"},{"key":"E","text":"Capturing the user’s context"}]'::jsonb,
  ARRAY['B', 'E']::text[],
  'Một chu trình sinh gợi ý đơn tuyến (Single cycle) của Copilot bao gồm hai thao tác nền tảng: Thu thập và chuẩn hóa thông tin ngữ cảnh lập trình hiện trạng người dùng (Capturing user''s context) (E); và Chuyển tham số đó đưa vào nhân xử lý mô hình sinh ra gợi ý phản hồi mờ (Generate suggestions) (B). Các thao tác telemetry hay retraining hoạt động độc lập không đồng bộ ngoại tuyến.',
  'Features & Optimization',
  ARRAY['Request Pipeline', 'Generative Life Cycle']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q37',
  'gh-300',
  37,
  'What role does the pre-processing of user input play in the data flow of GitHub Copilot Chat?',
  '[{"key":"A","text":"It formats the output response before presenting it to the user."},{"key":"B","text":"It filters out irrelevant information from the user’s input prompt."},{"key":"C","text":"It enriches the input prompt with additional context before passing it to the language model."},{"key":"D","text":"It directly generates a response based on the user’s input prompt."}]'::jsonb,
  ARRAY['C']::text[],
  'Tiền xử lý (Pre-processing) đóng vai trò then chốt: Chụp lại thông tin lớp ngữ cảnh rộng lớn xung quanh con trỏ (file lân cận đang mở, cấu trúc biến lớp đang kế thừa) rồi ghép kèm vào câu lệnh prompt của lập trình viên để chuyển cho mô hình LLM có đủ dữ liệu gốc đưa ra gợi ý may đo hoàn hảo.',
  'Features & Optimization',
  ARRAY['Prompt enrichment', 'Contextual Framing']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q38',
  'gh-300',
  38,
  'What is the impact of the “Fill-In-the-Middle” (FIM) technique on GitHub Copilot’s code suggestions?',
  '[{"key":"A","text":"Improves suggestions by considering both the prefix and suffix of the code, filling in the middle part more accurately."},{"key":"B","text":"Restricts Copilot to use only external databases for generating code suggestions."},{"key":"C","text":"Allows Copilot to generate suggestions based only on the prefix of the code."},{"key":"D","text":"Ignores both the prefix and suffix of the code, focusing only on user comments for context."}]'::jsonb,
  ARRAY['A']::text[],
  'Cơ chế ''Điền vào khoảng giữa'' (Fill-In-the-Middle - FIM) nâng tầm vượt trội độ chính xác gợi ý: Thay vì chỉ nhìn phần mã nguồn đã viết phía trên con trỏ (Prefix), hệ thống quan sát phân tích cả khối code tiếp diễn bên dưới con trỏ (Suffix) để lồng ghép gợi ý khớp chính xác từng tham số giao diện.',
  'Features & Optimization',
  ARRAY['FIM Engine', 'Birectional context']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q39',
  'gh-300',
  39,
  'What is used by GitHub Copilot in the IDE to determine the prompt context?',
  '[{"key":"A","text":"Information from the IDE like open tabs, cursor location, selected code."},{"key":"B","text":"All the code visible in the current IDE."},{"key":"C","text":"All the code in the current repository and any git submodules."},{"key":"D","text":"The open tabs in the IDE and the current folder of the terminal."}]'::jsonb,
  ARRAY['A']::text[],
  'Để không áp hại dung lượng bộ nhớ thiết bị, Copilot chỉ lọc quét tập hợp ngữ cảnh gần: Danh sách các tab tệp tài liệu lập trình đang mở đồng thời sát bên, vị trí thực tế của con trỏ hiện tại, và đoạn văn mã đang được kỹ sư tô đen bôi chọn (A).',
  'Features & Optimization',
  ARRAY['Context Boundaries', 'Workspace Analytics']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q40',
  'gh-300',
  40,
  'When crafting prompts for GitHub Copilot, what is a recommended strategy to enhance the relevance of the generated code?',
  '[{"key":"A","text":"Keep the prompt as short as possible, using single words or brief phrases."},{"key":"B","text":"Provide examples of expected input and output within the prompt."},{"key":"C","text":"Avoid mentioning the programming language to allow for more flexible suggestions."},{"key":"D","text":"Write the prompt in natural language without any programming language."}]'::jsonb,
  ARRAY['B']::text[],
  'Nguyên tắc vàng của viết Prompt tối ưu là áp dụng Few-shot Learning: Cung cấp trực tiếp 1-2 mẫu kết quả đầu vào (input) và định dạng xuất mong đợi cụ thể (output) để giới hạn chính xác phạm vi tính toán của mô hình ngôn ngữ lớn AI.',
  'Features & Optimization',
  ARRAY['Prompt Engineering', 'Few-shot Learning']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q41',
  'gh-300',
  41,
  'A developer wants to use custom code instructions in GitHub Copilot. What file extension and directory should they use to define custom system prompts for their repository?',
  '[{"key":"A","text":".github/copilot-instructions.md"},{"key":"B","text":".copilot/instructions.txt"},{"key":"C","text":"copilot-config.json"},{"key":"D","text":".github/workflows/copilot.yml"}]'::jsonb,
  ARRAY['A']::text[],
  'Để định nghĩa các hướng dẫn và quy tắc tùy biến cho Copilot trong một repository cụ thể, nhà phát triển tạo tệp `.github/copilot-instructions.md`. Copilot sẽ tự động quét tệp này để căn chỉnh phong cách viết code, chuẩn coding và quy tắc đặt tên phù hợp với tổ chức.',
  'Features & Optimization',
  ARRAY['Custom Instructions', 'Workspace Rules']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q42',
  'gh-300',
  42,
  'Which feature of GitHub Copilot is specifically designed to draft regular expressions or complex algorithms based on comments?',
  '[{"key":"A","text":"Copilot Workspace"},{"key":"B","text":"Inline suggestions"},{"key":"C","text":"Pull request summaries"},{"key":"D","text":"Copilot Chat"}]'::jsonb,
  ARRAY['B']::text[],
  'Tính năng gợi ý trực tiếp (Inline suggestions) tự động phân tích dòng chú thích viết bằng ngôn ngữ tự nhiên (ví dụ: // write a regex to validate email) và sinh ra mã nguồn tương ứng ngay tại vị trí con trỏ.',
  'Features & Optimization',
  ARRAY['Inline suggestions', 'Regex Drafting']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q43',
  'gh-300',
  43,
  'When using GitHub Copilot Individual, who is responsible for managing and purchasing the subscription?',
  '[{"key":"A","text":"The Organization Owner"},{"key":"B","text":"The Billing Manager"},{"key":"C","text":"The Enterprise Administrator"},{"key":"D","text":"The Individual User"}]'::jsonb,
  ARRAY['D']::text[],
  'Với gói Cá nhân (Individual), chính người dùng cuối (lập trình viên cá nhân) tự mua, thiết lập phương thức thanh toán và quản lý dung lượng sử dụng trên tài khoản cá nhân của họ.',
  'Security & Licensing',
  ARRAY['Licensing Plans', 'Individual Billing']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q44',
  'gh-300',
  44,
  'Who qualifies for a free subscription to GitHub Copilot Individual? (Choose two.)',
  '[{"key":"A","text":"Verified Students"},{"key":"B","text":"Popular open-source maintainers"},{"key":"C","text":"Microsoft MVP developers"},{"key":"D","text":"Any GitHub organization member"}]'::jsonb,
  ARRAY['A', 'B']::text[],
  'GitHub cung cấp dịch vụ Copilot Individual miễn phí dành cho Học sinh/Sinh viên đã được xác minh qua chương trình GitHub Student Developer Pack (A) và các Duy trì viên (maintainers) của các dự án nguồn mở phổ biến trên GitHub (B).',
  'Security & Licensing',
  ARRAY['Licensing Plans', 'Free Subscriptions']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q45',
  'gh-300',
  45,
  'What does the ''Knowledge Base'' feature do in GitHub Copilot Enterprise?',
  '[{"key":"A","text":"It hosts external tutorials"},{"key":"B","text":"It indexes specific repositories to answer domain-specific questions"},{"key":"C","text":"It translates code from other companies"},{"key":"D","text":"It stores API keys securely"}]'::jsonb,
  ARRAY['B']::text[],
  'Cơ sở tri thức (Knowledge Base) cho phép doanh nghiệp chỉ định các kho mã nguồn nội bộ hoặc tài liệu hướng dẫn cụ thể để huấn luyện ảo cho Copilot. Từ đó lập trình viên có thể truy vấn các câu hỏi chuyên sâu mang tính đặc thù nội bộ.',
  'Features & Optimization',
  ARRAY['Knowledge Base', 'Enterprise Scope']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q46',
  'gh-300',
  46,
  'When working in an enterprise environment, which Copilot plan offers fine-tuning on your private codebase?',
  '[{"key":"A","text":"Copilot Individual"},{"key":"B","text":"Copilot Business"},{"key":"C","text":"Copilot Enterprise"},{"key":"D","text":"All of the above"}]'::jsonb,
  ARRAY['C']::text[],
  'Gói Copilot Enterprise cung cấp khả năng tích hợp sâu hơn như tích hợp trực tiếp cơ sở tri thức (Knowledge Base) định danh từ mã nguồn riêng và tối ưu hóa các mô hình tùy biến cho một số nhóm doanh nghiệp đặc thù.',
  'Security & Licensing',
  ARRAY['Licensing Plans', 'Fine-Tuning']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q47',
  'gh-300',
  47,
  'Which of the following is true about how Copilot uses context from surrounding files?',
  '[{"key":"A","text":"Copilot only reads the current line"},{"key":"B","text":"Copilot reads the active file and sometimes other open tabs in the editor"},{"key":"C","text":"Copilot scans the entire local hard drive for files"},{"key":"D","text":"Copilot only reads files listed in package.json"}]'::jsonb,
  ARRAY['B']::text[],
  'Thuật toán thu thập ngữ cập của Copilot (chạy ngầm trong IDE) sẽ ưu tiên quét tệp đang mở hiện tại và các tab tài liệu mã nguồn đang được mở lân cận để tìm các định nghĩa hàm hoặc các kiểu dữ liệu liên quan để ghép thành prompt hoàn chỉnh.',
  'Features & Optimization',
  ARRAY['Context Boundaries', 'Workspace Indexing']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q48',
  'gh-300',
  48,
  'What is the main security benefit of using Copilot Business over Copilot Individual for business development?',
  '[{"key":"A","text":"It compiles your code 2x faster"},{"key":"B","text":"It ensures prompts and suggestions are not retained or used for model training"},{"key":"C","text":"It automatically patches server exploits"},{"key":"D","text":"It provides free hardware upgrades"}]'::jsonb,
  ARRAY['B']::text[],
  'Điểm cộng an ninh cốt lõi của Copilot Business so với bản Individual là cam kết bảo mật cấp doanh nghiệp: mọi câu lệnh prompt và mã sinh ra từ IDE đều được bảo mật tuyệt đối, không lưu vết trên đĩa và không bị dùng để tiếp tục huấn luyện mô hình chung.',
  'Security & Licensing',
  ARRAY['Data Safety', 'Data Retention policies']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q49',
  'gh-300',
  49,
  'In VS Code, how can you open the secondary completions panel showing up to 10 suggestions?',
  '[{"key":"A","text":"By pressing Ctrl + Alt + Delete"},{"key":"B","text":"By pressing Ctrl + Enter (or Cmd + Enter / Ctrl + Alt + Enter on macOS)"},{"key":"C","text":"By double-clicking the code editor screen"},{"key":"D","text":"By typing ''/more'' in the chat window"}]'::jsonb,
  ARRAY['B']::text[],
  'Để xem nhiều gợi ý thay thế cùng lúc dưới dạng một tab chuyên dụng độc lập, phím tắt tiêu chuẩn trong VS Code là Ctrl + Enter (trên Windows) hoặc Cmd + Enter / Ctrl + Alt + Enter (trên macOS).',
  'Features & Optimization',
  ARRAY['Completions view', 'IDEs Integration']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q50',
  'gh-300',
  50,
  'How does the ''Content Exclusion'' policy work in GitHub Copilot?',
  '[{"key":"A","text":"It blocks developers from visiting adult websites"},{"key":"B","text":"It prevents Copilot from showing suggestions in specific files or directories"},{"key":"C","text":"It excludes all open source libraries from search"},{"key":"D","text":"It hides the terminal output"}]'::jsonb,
  ARRAY['B']::text[],
  'Chính sách Content Exclusion cho phép quản trị viên doanh nghiệp định nghĩa các mẫu đường dẫn hoặc tệp nhạy cảm. Khi lập trình viên thao tác trên các tệp này, plugin Copilot sẽ tự động bị vô hiệu hóa tạm thời để tránh rò rỉ thông tin tối mật.',
  'Security & Licensing',
  ARRAY['Content Exclusion', 'Enterprise Policies']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q51',
  'gh-300',
  51,
  'Which of the following is NOT a pre-defined command slash command in Copilot Chat?',
  '[{"key":"A","text":"/explain"},{"key":"B","text":"/tests"},{"key":"C","text":"/fix"},{"key":"D","text":"/compile"}]'::jsonb,
  ARRAY['D']::text[],
  'Các lệnh slash thông dụng gồm có: /explain (giải thích code), /tests (tạo unit tests), /fix (sửa lỗi code), /help. Lệnh `/compile` không phải là lệnh mặc định trong Copilot Chat.',
  'Features & Optimization',
  ARRAY['Slash Commands', 'Features Guide']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q52',
  'gh-300',
  52,
  'What is the purpose of the `/tests` slash command in Copilot Chat?',
  '[{"key":"A","text":"It runs the compiler to check for syntax errors"},{"key":"B","text":"It automatically generates unit tests for the selected code"},{"key":"C","text":"It reports software bugs directly to GitHub Support"},{"key":"D","text":"It formats the database tables"}]'::jsonb,
  ARRAY['B']::text[],
  'Lệnh `/tests` giúp tự động sinh ra bộ khung mã kiểm thử đơn vị (unit tests) phù hợp nhất cho đoạn mã được bôi chọn, giúp tăng tốc độ viết mã kiểm thử và nâng độ phủ (coverage) cho dự án.',
  'Features & Optimization',
  ARRAY['Unit Testing', 'Slash Commands']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q53',
  'gh-300',
  53,
  'How can a developer prevent certain sensitive files from being sent to Copilot backend for suggestions?',
  '[{"key":"A","text":"Deny camera permissions"},{"key":"B","text":"Define exclusion paths in the organization settings"},{"key":"C","text":"Save files with a .secret extension"},{"key":"D","text":"Change the font size of the active file"}]'::jsonb,
  ARRAY['B']::text[],
  'Để ngăn các tệp nhạy cảm của tổ chức bị gửi lên máy chủ phân tích của Copilot, quản trị viên sử dụng trang cấu hình tổ chức để khai báo đường dẫn loại trừ (Exclusion paths). Mọi thao tác trên tệp này đều bị chặn cục bộ.',
  'Security & Licensing',
  ARRAY['Content Exclusion', 'Data Privacy']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q54',
  'gh-300',
  54,
  'In which pricing tier is the ''GitHub Copilot for Azure DevOps'' extension available?',
  '[{"key":"A","text":"Only in Individual"},{"key":"B","text":"Only in Business"},{"key":"C","text":"Only in Enterprise"},{"key":"D","text":"Available as an add-on or integrated workspace solution"}]'::jsonb,
  ARRAY['D']::text[],
  'Copilot cho Azure DevOps cho phép tích hợp trực tiếp vào môi trường Azure Repos và Azure Boards, được thiết kế để phục vụ các nhóm đang sử dụng dịch vụ này một cách linh hoạt.',
  'Security & Licensing',
  ARRAY['Azure DevOps', 'Licensing Plans']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q55',
  'gh-300',
  55,
  'Which organization role has the authority to assign or revoke Copilot seats in Copilot Business?',
  '[{"key":"A","text":"Read-only member"},{"key":"B","text":"Billing Manager or Organization Owner"},{"key":"C","text":"Any external collaborator"},{"key":"D","text":"Normal developer"}]'::jsonb,
  ARRAY['B']::text[],
  'Chỉ có chủ sở hữu tổ chức (Organization Owner) hoặc Quản lý thanh toán (Billing Manager) mới có đặc quyền thêm bớt, phân bổ chỗ ngồi (seats) và quản lý hóa đơn thanh toán cho Copilot Business.',
  'Security & Licensing',
  ARRAY['Access Control', 'Billing Configurations']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q56',
  'gh-300',
  56,
  'What does the Copilot policy ''suggestions matching public code'' actually do?',
  '[{"key":"A","text":"It forces the developer to write open source code"},{"key":"B","text":"It checks suggestions against public repositories on GitHub and blocks matching code blocks if set to ''block''"},{"key":"C","text":"It automatically clones public repositories to local machine"},{"key":"D","text":"It formats the code style in a uniform manner"}]'::jsonb,
  ARRAY['B']::text[],
  'Chính sách ''suggestions matching public code'' giúp phát hiện các đoạn mã sinh ra dài hơn 150 ký tự trùng khớp với các kho lưu trữ công cộng trên GitHub. Nếu đặt là ''block'', nó sẽ tự động lọc bỏ gợi ý đó để bảo vệ bản quyền.',
  'Security & Licensing',
  ARRAY['Public Code Filter', 'IP Infringement Protection']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q57',
  'gh-300',
  57,
  'What is the minimum recommended length of code snippet for FIM (Fill-in-the-Middle) to trigger effectively?',
  '[{"key":"A","text":"At least a few lines of context before and after the cursor"},{"key":"B","text":"Exactly 1 character"},{"key":"C","text":"Minimum 10,000 lines of code"},{"key":"D","text":"FIM does not need cursor context"}]'::jsonb,
  ARRAY['A']::text[],
  'Để cơ chế FIM (Fill-in-the-Middle) hoạt động hiệu quả nhất, cần có một lượng ngữ cảnh vừa đủ ở cả phía trên (prefix) và phía dưới (suffix) của con trỏ trong tệp đang viết.',
  'Features & Optimization',
  ARRAY['FIM Engine', 'Algorithms']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q58',
  'gh-300',
  58,
  'In Copilot Chat, what does the `@workspace` agent do?',
  '[{"key":"A","text":"It formats the OS workspace"},{"key":"B","text":"It allows you to ask questions about the entire active workspace directory"},{"key":"C","text":"It deletes unused files from local path"},{"key":"D","text":"It updates all node packages in package.json"}]'::jsonb,
  ARRAY['B']::text[],
  '`@workspace` là một Chat Agent thông minh giúp phân tích toàn bộ cấu trúc thư mục dự án đang mở, hỗ trợ tìm kiếm hàm, phân tích tệp tin và trả lời các liên quan đến logic đa file.',
  'Features & Optimization',
  ARRAY['Workspace Agent', 'Prompt Context']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q59',
  'gh-300',
  59,
  'What does the `/explain` console slash command do in VS Code?',
  '[{"key":"A","text":"Translates selected code to clear explanations in natural language"},{"key":"B","text":"Writes documentation comments automatically"},{"key":"C","text":"Fixes syntax errors in current selection"},{"key":"D","text":"Opens the official help forum of Microsoft"}]'::jsonb,
  ARRAY['A']::text[],
  'Lệnh `/explain` dịch giải sâu sắc và tóm tắt cơ chế vận hành của dòng code được bôi đen, đặc biệt hữu ích khi tiếp nhận các dự án cũ hoặc mã nguồn viết bằng các ngôn ngữ xa lạ.',
  'Features & Optimization',
  ARRAY['Slash Commands', 'Legacy Code']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'q60',
  'gh-300',
  60,
  'How is billing calculated for Copilot Business billing cycles?',
  '[{"key":"A","text":"Flat yearly fee with unlimited users"},{"key":"B","text":"Per-seat per-month model with prorated billing for partial months"},{"key":"C","text":"Pay-per-query model based on AI transactions"},{"key":"D","text":"Based on lines of code accepted by developer seats"}]'::jsonb,
  ARRAY['B']::text[],
  'Hóa đơn thanh toán của Copilot Business dựa trên số lượng chỗ ngồi phân bổ thực tế hàng tháng (per-seat per-month). Nếu thêm seats giữa chu kỳ, chi phí sẽ được tính tỷ lệ tương xứng (prorated).',
  'Security & Licensing',
  ARRAY['Billing Calculations', 'Enterprise Subscriptions']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

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
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

-- ===========================================
-- SEED DATA FOR MICROSOFT AZURE AI FUNDAMENTALS (AI-900) (ai-900)
-- Total questions: 5
-- ===========================================

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'ai1',
  'ai-900',
  1,
  'Which of the six Microsoft Responsible AI principles ensures that AI systems are understandable, explainable, and documented?',
  '[{"key":"A","text":"Inclusiveness"},{"key":"B","text":"Transparency"},{"key":"C","text":"Fairness"},{"key":"D","text":"Accountability"}]'::jsonb,
  ARRAY['B']::text[],
  'Tính minh bạch (Transparency) đòi hỏi hệ thống AI phải được giải thích rõ ràng và có tài liệu hóa đầy đủ để người dùng cuối hiểu được logic ra quyết định của mô hình.',
  'Responsible AI',
  ARRAY['AI-900', 'Transparency']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'ai2',
  'ai-900',
  2,
  'You want to train a machine learning model to predict the monetary value of a home based on its size, location, and age. What type of ML task is this?',
  '[{"key":"A","text":"Classification"},{"key":"B","text":"Regression"},{"key":"C","text":"Clustering"},{"key":"D","text":"Anomaly Detection"}]'::jsonb,
  ARRAY['B']::text[],
  'Hồi quy (Regression) được sử dụng để dự đoán một giá trị liên tục hay giá trị số lượng cụ thể (như giá tiền, nhiệt độ, doanh thu). Ngược lại, Phân loại (Classification) dùng để dự đoán nhãn danh mục (như Có/Không, Đạt/Trượt).',
  'Machine Learning Concepts',
  ARRAY['AI-900', 'Regression']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'ai3',
  'ai-900',
  3,
  'Which Azure Cognitive Service allows you to extract text and data from receipts, invoices, and utility bills?',
  '[{"key":"A","text":"Azure AI Document Intelligence (Form Recognizer)"},{"key":"B","text":"Azure AI Vision"},{"key":"C","text":"Azure AI Language"},{"key":"D","text":"Azure AI Speech"}]'::jsonb,
  ARRAY['A']::text[],
  'Azure AI Document Intelligence (tên gọi trước đây là Form Recognizer) sử dụng mô hình học máy để trích xuất các cặp khoá-giá trị, bảng biểu, và văn bản từ các tài liệu có cấu trúc như hoá đơn, biên lai.',
  'Computer Vision Services',
  ARRAY['AI Services', 'Document OCR']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'ai4',
  'ai-900',
  4,
  'In natural language processing (NLP), which technique is used to determine the positive, negative, or neutral sentiment of text?',
  '[{"key":"A","text":"Entity Recognition"},{"key":"B","text":"Translational mapping"},{"key":"C","text":"Sentiment Analysis"},{"key":"D","text":"Speech Synthesis"}]'::jsonb,
  ARRAY['C']::text[],
  'Phân tích cảm xúc (Sentiment Analysis) đánh giá thái độ tinh thần của văn bản viết (như phản hồi của khách hàng) để phân loại thành Tích cực (Positive), Tiêu cực (Negative) hoặc Trung tính (Neutral).',
  'Natural Language Processing',
  ARRAY['NLP', 'Sentiments']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'ai5',
  'ai-900',
  5,
  'According to Microsoft’s Ethical guidelines, developers must have the code reviewed to assure it doesn’t exclude people with disabilities. Which AI principle is this?',
  '[{"key":"A","text":"Fairness"},{"key":"B","text":"Inclusiveness"},{"key":"C","text":"Reliability and Safety"},{"key":"D","text":"Privacy and Security"}]'::jsonb,
  ARRAY['B']::text[],
  'Tính toàn diện (Inclusiveness) là nguyên tắc cốt lõi yêu cầu hệ thống AI phải mang lại lợi ích và rào cản truy cập tối thiểu cho mọi người dùng, đặc biệt là hỗ trợ tốt cho người dùng có khuyết tật.',
  'Responsible AI',
  ARRAY['Inclusive AI', 'Accessibility']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

-- ===========================================
-- SEED DATA FOR MICROSOFT AZURE FUNDAMENTALS (AZ-900) (az-900)
-- Total questions: 80
-- ===========================================

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az1',
  'az-900',
  1,
  'Which of the following support plans provide 24/7 access to technical support engineers via phone and email? (Choose three.)',
  '[{"key":"A","text":"Basic"},{"key":"B","text":"Developer"},{"key":"C","text":"Standard"},{"key":"D","text":"Professional Direct"},{"key":"E","text":"Premier / Unified"}]'::jsonb,
  ARRAY['C', 'D', 'E']::text[],
  'Basic hỗ trợ 24/7 cho các vấn đề thanh toán (billing) và đăng ký chứ không có hỗ trợ kỹ thuật (technical support). Developer chỉ hỗ trợ kỹ thuật qua email trong giờ hành chính. Standard, Professional Direct và Premier/Unified đều cung cấp hỗ trợ kỹ thuật 24/7 qua cả điện thoại và email.',
  'Pricing & Support',
  ARRAY['AZ-900', 'Support Plans']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az2',
  'az-900',
  2,
  'Your company has datacenters in Los Angeles and New York. You need to configure a storage redundancy option that replication-synchronously stores data on multiple nodes, ensures geographic disaster recovery, and allows reading data from the secondary region. Which redundancy should you choose?',
  '[{"key":"A","text":"Locally-redundant storage (LRS)"},{"key":"B","text":"Zone-redundant storage (ZRS)"},{"key":"C","text":"Geo-redundant storage (GRS)"},{"key":"D","text":"Read-access geo-redundant storage (RA-GRS)"}]'::jsonb,
  ARRAY['D']::text[],
  'RA-GRS (Read-access geo-redundant storage) sao chép dữ liệu của bạn sang một vùng địa lý thứ hai cách xa vùng chính hàng trăm dặm, đồng thời mở quyền truy cập ''chỉ đọc'' (Read-access) vào vùng thứ hai này ngay cả khi không xảy ra sự cố sập vùng chính.',
  'Azure Services',
  ARRAY['AZ-900', 'Storage Redundancy']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az3',
  'az-900',
  3,
  'A company wants to request an assessment of their Azure environment''s design from Microsoft at the minimum cost. Solution: You recommend that the company subscribes to the Standard support plan. Does this meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb,
  ARRAY['A']::text[],
  'Đúng (Yes). Gói Standard hỗ trợ hướng dẫn kiến trúc chung bám sát các tài liệu thiết kế. Nhưng lưu ý: Khác với gói Professional Direct cung cấp các buổi đánh giá thiết kế kiến trúc sâu (design assessments) chuyên sâu hơn nhờ Delivery Manager riêng, gói Standard vẫn được Microsoft chấp nhận cho các tư vấn kiến trúc chung với chi phí tối ưu nhất.',
  'Pricing & Support',
  ARRAY['AZ-900', 'Support Plans']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az4',
  'az-900',
  4,
  'You are tasked with deploying Azure Virtual Machines for your development team. Under which cloud service category does this solution fall?',
  '[{"key":"A","text":"Software as a Service (SaaS)"},{"key":"B","text":"Platform as a Service (PaaS)"},{"key":"C","text":"Infrastructure as a Service (IaaS)"},{"key":"D","text":"Serverless Computing"}]'::jsonb,
  ARRAY['C']::text[],
  'Máy ảo (Virtual Machines) và tài khoản lưu trữ cơ sở (Storage space) thuộc nhóm IaaS (Cơ sở hạ tầng dưới dạng dịch vụ). Bạn tự cài hệ điều hành, cấu hình mạng và tự quản lý phần mềm, còn hạ tầng vật lý do Microsoft quản lý.',
  'Cloud Concepts',
  ARRAY['AZ-900', 'IaaS']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az5',
  'az-900',
  5,
  'An organization wants to segment Azure resources across multiple business units with dedicated administrators for each division, keeping administrative overhead to an absolute minimum. What should they implement?',
  '[{"key":"A","text":"Create multiple Azure Active Directory (Azure AD) directories"},{"key":"B","text":"Create multiple Azure Subscriptions and assign division admins"},{"key":"C","text":"Deploy several Virtual Private Network (VPN) Gateways"},{"key":"D","text":"Deploy a single Azure Policy across resource groups"}]'::jsonb,
  ARRAY['B']::text[],
  'Tạo nhiều Đăng ký sử dụng (Subscriptions) là ranh giới quản lý thanh toán và quyền truy cập tốt nhất để phân chia trách nhiệm sử dụng tài nguyên giữa các phòng ban. Việc tạo nhiều thư mục Azure AD (Microsoft Entra ID) sẽ gây quá tải quản trị vì chúng hoạt động độc lập và không đồng bộ dễ dàng.',
  'Azure Architecture',
  ARRAY['AZ-900', 'Subscriptions']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az6',
  'az-900',
  6,
  'Your company is migrating all physical operations to Microsoft Azure under a pay-as-you-go model. Which expenditure type does this represent?',
  '[{"key":"A","text":"Capital Expenditure (CapEx)"},{"key":"B","text":"Operational Expenditure (OpEx)"},{"key":"C","text":"Elastic Expenditure"},{"key":"D","text":"Static Capital"}]'::jsonb,
  ARRAY['B']::text[],
  'Mô hình Pay-as-you-go (dùng bao nhiêu trả bấy nhiêu) của điện toán đám mây chuyển dịch chi phí đầu tư ban đầu sang chi phí vận hành (Operational Expenditure - OpEx), giúp loại bỏ việc đầu tư mua sắm phần cứng trước (CapEx).',
  'Cloud Concepts',
  ARRAY['AZ-900', 'CapEx vs OpEx']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az7',
  'az-900',
  7,
  'You are required to deploy an Artificial Intelligence (AI) solution in Azure to build, test, and deploy predictive analytics models using a drag-and-drop toolkit. What service should you use?',
  '[{"key":"A","text":"Azure Cosmos DB"},{"key":"B","text":"Azure Synapse Analytics"},{"key":"C","text":"Azure Machine Learning Studio / Designer"},{"key":"D","text":"Azure Active Directory"}]'::jsonb,
  ARRAY['C']::text[],
  'Azure Machine Learning Studio (hay ML Designer) cung cấp môi trường trực quan dạng kéo thả (drag-and-drop) để lập mô hình, kiểm thử và triển khai các thuật toán phân tích dự báo (predictive analytics) một cách nhanh chóng.',
  'Azure Services',
  ARRAY['AZ-900', 'AI Services']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az8',
  'az-900',
  8,
  'What Azure capability should you use to automate deployment and ensure repeatable, reliable infrastructure declarations using code?',
  '[{"key":"A","text":"Azure API Management"},{"key":"B","text":"Azure Resource Manager (ARM) templates"},{"key":"C","text":"Management Groups"},{"key":"D","text":"Azure Front Door"}]'::jsonb,
  ARRAY['B']::text[],
  'ARM Templates (Mẫu giao diện quản lý tài nguyên Azure) cho phép triển khai tài nguyên tự động và đồng bộ theo dạng khai báo Infrastructure as Code (IaC), đảm bảo tính nhất quán trên mọi môi trường.',
  'Azure Governance',
  ARRAY['AZ-900', 'ARM Templates']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az9',
  'az-900',
  9,
  'You are tasked with deploying a critical line-of-business (LOB) application on virtual machines with a guaranteed uptime service-level agreement (SLA) of 99.99 percent. What is the minimum configuration required?',
  '[{"key":"A","text":"One virtual machine with Standard HDD storage"},{"key":"B","text":"Two virtual machines deployed in the same Availability Set"},{"key":"C","text":"Two virtual machines deployed across two or more Availability Zones"},{"key":"D","text":"One virtual machine with Standard SSD storage"}]'::jsonb,
  ARRAY['C']::text[],
  'Để đạt được SLA cam kết 99.99% của Azure dành cho Máy ảo, bạn phải triển khai tối thiểu 2 thực thể máy ảo (VM) phân bổ đều giữa 2 hoặc nhiều Vùng Sẵn sàng (Availability Zones) khác nhau trong cùng một khu vực (Region) của Azure.',
  'Azure Architecture',
  ARRAY['AZ-900', 'Availability Zones']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az10',
  'az-900',
  10,
  'You have several virtual machines deployed in an Azure Virtual Network (VNet). You need to grant remote workers secure access to these VMs from their individual laptops. What should you configure?',
  '[{"key":"A","text":"Point-to-Site (P2S) VPN"},{"key":"B","text":"Site-to-Site (S2S) VPN"},{"key":"C","text":"Azure ExpressRoute"},{"key":"D","text":"VNet Peering"}]'::jsonb,
  ARRAY['A']::text[],
  'Kết nối Point-to-Site (P2S) VPN thiết lập luồng truyền mạng ảo mã hóa an toàn từ các thiết bị khách riêng lẻ của nhân viên truy cập thẳng vào VNet mà không cần thiết bị phần cứng mạng phức tạp giống kết nối S2S.',
  'Azure Services',
  ARRAY['AZ-900', 'VPN']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az11',
  'az-900',
  11,
  'Which Azure service should you use to encrypt and securely manage administrative credentials, API keys, and connection strings during automated deployments?',
  '[{"key":"A","text":"Azure Information Protection (AIP)"},{"key":"B","text":"Azure AD Identity Protection"},{"key":"C","text":"Azure Key Vault"},{"key":"D","text":"Azure Security Center"}]'::jsonb,
  ARRAY['C']::text[],
  'Azure Key Vault là công cụ chuyên biệt để lưu trữ, mã hóa và kiểm soát truy cập đối với các bí mật nhạy cảm (secrets) như mật khẩu, khóa API, chứng chỉ bảo mật SSL/TLS.',
  'Azure Security',
  ARRAY['AZ-900', 'Key Vault']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az12',
  'az-900',
  12,
  'You want a service that automatically detects login attempts coming from unidentified/risky IP addresses and prompts those users to perform password reset or MFA verification. What should you deploy?',
  '[{"key":"A","text":"Azure AD Identity Protection"},{"key":"B","text":"Azure AD Privileged Identity Management (PIM)"},{"key":"C","text":"Azure Service Health"},{"key":"D","text":"Azure Sentinel"}]'::jsonb,
  ARRAY['A']::text[],
  'Azure AD Identity Protection (nay thuộc Microsoft Entra) có tính năng phân tích hành vi và chấm điểm rủi ro phiên đăng nhập (như đăng nhập từ ip lạ, đi lại bất thường) để tự động thực thi các biện pháp phòng vệ.',
  'Azure Security',
  ARRAY['AZ-900', 'Identity Protection']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az13',
  'az-900',
  13,
  'You plan to deploy 50 web servers and 50 database servers to Azure. Which mechanism should you use to filter and limit network traffic types allowed to communicate between the web and database segments?',
  '[{"key":"A","text":"Azure ExpressRoute"},{"key":"B","text":"Network Security Groups (NSGs)"},{"key":"C","text":"Azure Route Filters"},{"key":"D","text":"Local Network Gateways"}]'::jsonb,
  ARRAY['B']::text[],
  'Network Security Group (NSG) hoạt động như một tường lửa lọc gói tin ở cấp độ mạng, cho phép bạn quy định các quy tắc lọc lưu lượng ra/vào (Inbound/Outbound rules) bám sát các thông số nguồn, đích, cổng và giao thức.',
  'Azure Security',
  ARRAY['AZ-900', 'NSG']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az14',
  'az-900',
  14,
  'When an Azure virtual machine is stopped and set to a ''deallocated'' state, which costs do you continue to incur?',
  '[{"key":"A","text":"Both compute and storage costs"},{"key":"B","text":"Neither compute nor storage costs"},{"key":"C","text":"Storage costs associated with the virtual disks only"},{"key":"D","text":"Compute costs for allocated vCPUs only"}]'::jsonb,
  ARRAY['C']::text[],
  'Khi máy ảo ở trạng thái Deallocated, Azure giải phóng tài nguyên CPU/RAM nên bạn không phải trả tiền điện toán (compute). Tuy nhiên, bạn vẫn phải trả chi phí lưu trữ (storage) dành cho các ổ đĩa ảo (OS, Data disks) đang gắn vào máy ảo đó.',
  'Pricing & Support',
  ARRAY['AZ-900', 'Billing']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az15',
  'az-900',
  15,
  'What term describes the ability of an Azure-based architecture to absorb localized hardware degradation, recover from failures, and continue functioning with no downtime?',
  '[{"key":"A","text":"High Availability"},{"key":"B","text":"Scalability"},{"key":"C","text":"Fault Tolerance / Resilience"},{"key":"D","text":"Elasticity"}]'::jsonb,
  ARRAY['C']::text[],
  'Resilience (độ bền bỉ/đàn hồi hoạt động) hay Fault Tolerance (khả năng chịu lỗi) khẳng định hệ thống duy trì được hoạt động ổn định và có tiến trình tự chữa lành sau khi các phân đoạn chịu sự cố trục trặc vật lý.',
  'Cloud Concepts',
  ARRAY['AZ-900', 'Cloud Traits']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az16',
  'az-900',
  16,
  'When implementing a Software as a Service (SaaS) cloud model, such as Microsoft 365, what is the prime responsibility of the customer?',
  '[{"key":"A","text":"Maintaining the physical servers and network infrastructure"},{"key":"B","text":"Updating the underlying operating systems"},{"key":"C","text":"Configuring the specific application settings and managing data"},{"key":"D","text":"Installing deployment agents on physical hardware"}]'::jsonb,
  ARRAY['C']::text[],
  'Trong mô hình SaaS, nhà cung cấp lo trọn vẹn hạ tầng, hệ điều hành và cập nhật phần mềm. Người dùng cuối chỉ chịu trách nhiệm tải lên/quản lý dữ liệu và cấu hình phân quyền sử dụng ứng dụng phù hợp.',
  'Cloud Concepts',
  ARRAY['AZ-900', 'Shared Responsibility']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az17',
  'az-900',
  17,
  'Which of the following are characteristics of the public cloud model? (Choose two.)',
  '[{"key":"A","text":"Highly customized hardware dedicated to a single company"},{"key":"B","text":"Metered pricing (pay for what you consume)"},{"key":"C","text":"Lack of secure connections"},{"key":"D","text":"Self-service management via a web interface"}]'::jsonb,
  ARRAY['B', 'D']::text[],
  'Đám mây công cộng (Public cloud) sở hữu hai đặc tính nổi trội: Tính tự phục vụ (Self-service management) nhanh chóng qua cổng thông tin trực tuyến và Cơ chế tính phí theo mức tiêu dùng thực tế (Metered pricing).',
  'Cloud Concepts',
  ARRAY['AZ-900', 'Cloud Types']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az18',
  'az-900',
  18,
  'You plan to migrate an existing on-premises application to Azure App Service to reduce administrative overhead. Which cloud service model does Azure App Service represent?',
  '[{"key":"A","text":"Infrastructure as a Service (IaaS)"},{"key":"B","text":"Platform as a Service (PaaS)"},{"key":"C","text":"Software as a Service (SaaS)"},{"key":"D","text":"Database as a Service (DaaS)"}]'::jsonb,
  ARRAY['B']::text[],
  'Azure App Service là giải pháp PaaS (Nền tảng dưới dạng dịch vụ). Microsoft quản lý toàn bộ hệ điều hành, máy chủ web và hạ tầng chạy code, giúp lập trình viên tập trung 100% vào việc phát triển mã nguồn ứng dụng.',
  'Cloud Concepts',
  ARRAY['AZ-900', 'PaaS']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az19',
  'az-900',
  19,
  'Which database service in Azure allows you to store semi-structured JSON documents and scale throughput globally to write data concurrently across multiple regions?',
  '[{"key":"A","text":"Azure SQL Database"},{"key":"B","text":"Azure Cache for Redis"},{"key":"C","text":"Azure Cosmos DB"},{"key":"D","text":"Azure Database for PostgreSQL"}]'::jsonb,
  ARRAY['C']::text[],
  'Azure Cosmos DB là dịch vụ cơ sở dữ liệu phân tán toàn cầu (NoSQL), cho phép đọc/ghi dữ liệu đồng thời ở nhiều vùng khác nhau với độ trễ cực thấp (<10ms) và tối ưu cho dữ liệu phi cấu trúc JSON.',
  'Azure Services',
  ARRAY['AZ-900', 'Database']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az20',
  'az-900',
  20,
  'You need to map a network drive from multiple on-premises Windows 10 computers to an Azure cloud storage share using SMB protocol. Which solution should you deploy?',
  '[{"key":"A","text":"A Blob service in a storage account"},{"key":"B","text":"A File service in a storage account (Azure Files)"},{"key":"C","text":"An Azure SQL Database"},{"key":"D","text":"Azure Queue Storage"}]'::jsonb,
  ARRAY['B']::text[],
  'Azure Files hỗ trợ lưu trữ tệp tin đám mây có thể truy cập qua giao thức SMB tiêu chuẩn ngành, truyền tải chia sẻ dữ liệu mượt mà như một ổ đĩa mạng nội bộ cho các máy tính Windows, macOS hoặc Linux.',
  'Azure Services',
  ARRAY['AZ-900', 'Storage']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az21',
  'az-900',
  21,
  'To read data stored in the Archive access tier of an Azure Storage account, what operation must be performed first?',
  '[{"key":"A","text":"The data must be rehydrated to an online tier (Hot or Cool)"},{"key":"B","text":"The storage account must be upgraded to Premium"},{"key":"C","text":"The network connection must use ExpressRoute"},{"key":"D","text":"The archive tier must be configured at the account level"}]'::jsonb,
  ARRAY['A']::text[],
  'Lớp lưu trữ Archive là offline để tiết kiệm chi phí tối đa. Để đọc dữ liệu này, bạn phải thực hiện quy trình ''rã đông'' (rehydrate) để sao chép dữ liệu về lớp Hot hoặc Cool trực tuyến. Quy trình này có thể mất vài giờ.',
  'Azure Services',
  ARRAY['AZ-900', 'Storage']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az22',
  'az-900',
  22,
  'Where can you purchase certified third-party virtual security appliances (such as custom firewalls or network tools) next to default Azure resources?',
  '[{"key":"A","text":"Microsoft Store"},{"key":"B","text":"Azure Service Health Portal"},{"key":"C","text":"Azure Marketplace"},{"key":"D","text":"Azure Resource Graph"}]'::jsonb,
  ARRAY['C']::text[],
  'Azure Marketplace là cổng đăng tải và phân phối các ứng dụng, giải pháp phần mềm, máy ảo và dịch vụ đám mây từ bên thứ ba đã được kiểm duyệt và chứng nhận tương thích hoàn hảo với Microsoft Azure.',
  'Azure Architecture',
  ARRAY['AZ-900', 'Azure Assets']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az23',
  'az-900',
  23,
  'An organization wants to restrict which virtual machine sizes (unapproved costly SKUs) can be deployed within their subscription. Which service should they use?',
  '[{"key":"A","text":"Azure Blueprints"},{"key":"B","text":"Azure Policies"},{"key":"C","text":"Azure Role-Based Access Control (RBAC)"},{"key":"D","text":"Azure Resource Locks"}]'::jsonb,
  ARRAY['B']::text[],
  'Azure Policy đánh giá, kiểm soát và áp đặt các ranh giới quy tắc lên tài nguyên hệ thống đám mây. Bạn có thể gán chính sách ''Allowed virtual machine size SKUs'' để chặn lập trình viên khởi tạo các loại máy ảo đắt tiền.',
  'Azure Governance',
  ARRAY['AZ-900', 'Governance']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az24',
  'az-900',
  24,
  'What metadata tool allows you to associate custom key-value pairs with Azure resources to identify which cost center or department owns them for billing reports?',
  '[{"key":"A","text":"Resource Locks"},{"key":"B","text":"Azure Tags"},{"key":"C","text":"Azure Budgets"},{"key":"D","text":"Azure Blueprints"}]'::jsonb,
  ARRAY['B']::text[],
  'Azure Tags (Thẻ tài nguyên) là các khóa-giá trị đính kèm trực tiếp vào tài nguyên hoặc nhóm tài nguyên. Công cụ này cực kỳ đắc lực trong việc tách biệt báo cáo chi phí (billing reports) theo dự án, phòng ban.',
  'Azure Governance',
  ARRAY['AZ-900', 'Governance']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az25',
  'az-900',
  25,
  'What feature should you enable to prevent traffic from an Azure Virtual Network (VNet) to an Azure Storage account from traveling over the public internet?',
  '[{"key":"A","text":"A service endpoint"},{"key":"B","text":"Azure Front Door"},{"key":"C","text":"A local network gateway"},{"key":"D","text":"An ExpressRoute circuit"}]'::jsonb,
  ARRAY['A']::text[],
  'Virtual Network (VNet) Service Endpoint cung cấp kết nối mạng trực tiếp bảo mật tối đa tới dịch vụ Azure (như Storage, SQL) thông qua sợi cáp quang đường trục xương sống của Microsoft mà không lộ dữ liệu ra Internet công cộng.',
  'Azure Services',
  ARRAY['AZ-900', 'Networking']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az26',
  'az-900',
  26,
  'Where does Azure Monitor store and consolidate all log and state events gathered from multiple cloud resources?',
  '[{"key":"A","text":"An Azure Blob Storage account"},{"key":"B","text":"A Log Analytics workspace"},{"key":"C","text":"An Azure SQL Database"},{"key":"D","text":"Azure Resource Locks"}]'::jsonb,
  ARRAY['B']::text[],
  'Log Analytics Workspace là môi trường trung tâm lưu trữ toàn bộ sự kiện của Azure Monitor. Tại đây, giám sát viên có thể viết các câu truy vấn Kusto (KQL) để phân tích lỗi hệ thống và hiệu năng ứng dụng tức thời.',
  'Azure Governance',
  ARRAY['AZ-900', 'Azure Monitor']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az27',
  'az-900',
  27,
  'Which service allows a cloud architect to deploy a complete repeatable environment including Resource Groups, Role Assignments, and Policies, and automatically restore resource locks if deleted?',
  '[{"key":"A","text":"Azure Blueprints"},{"key":"B","text":"Azure Advisor"},{"key":"C","text":"Azure Resource Graph"},{"key":"D","text":"Azure Monitor"}]'::jsonb,
  ARRAY['A']::text[],
  'Azure Blueprints đóng gói cấu trúc định dạng chuẩn bao gồm tài nguyên, phân quyền RBAC và chính sách. Ưu thế lớn của Blueprint là khả năng thực thi ranh giới khóa tài nguyên (Resource locking) cực chặt không thể ghi đè bởi cả Subscription Owner.',
  'Azure Governance',
  ARRAY['AZ-900', 'Governance']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az28',
  'az-900',
  28,
  'In which file format are Azure Resource Manager (ARM) templates authored?',
  '[{"key":"A","text":"XML format"},{"key":"B","text":"YAML format"},{"key":"C","text":"JSON format"},{"key":"D","text":"CSV format"}]'::jsonb,
  ARRAY['C']::text[],
  'ARM Templates có cấu trúc viết bằng định dạng mô tả chuỗi đối tượng JavaScript Object Notation (JSON) tiêu chuẩn dạng text tĩnh, biểu diễn rõ ràng tài nguyên cần được thiết lập tự động.',
  'Azure Governance',
  ARRAY['AZ-900', 'ARM Templates']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az29',
  'az-900',
  29,
  'In the IaaS model, which of the following is completely the responsibility of the cloud service provider?',
  '[{"key":"A","text":"Installation and configuration of the operating system"},{"key":"B","text":"Maintaining the physical host server hardware and datacenter security"},{"key":"C","text":"Configuring Network Security Group inbound rules"},{"key":"D","text":"Updating application middleware dependencies"}]'::jsonb,
  ARRAY['B']::text[],
  'Điểm phân định IaaS là nhà cung cấp đám mây chịu mọi trách nhiệm liên quan đến phần cứng vật lý bên dưới (physical servers, virtualization, hypervisor, physical cabling, power, security of datacenters). Phần hệ điều hành và dữ liệu trở lên là của khách hàng.',
  'Cloud Concepts',
  ARRAY['AZ-900', 'IaaS']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az30',
  'az-900',
  30,
  'You have an on-premises local Active Directory forest containing 5,000 users. Which tool should you use to synchronize these identities with Azure Active Directory (Microsoft Entra ID)?',
  '[{"key":"A","text":"Azure Application Gateway"},{"key":"B","text":"Azure AD Connect"},{"key":"C","text":"Azure ExpressRoute"},{"key":"D","text":"Azure Portal import tool"}]'::jsonb,
  ARRAY['B']::text[],
  'Azure AD Connect (hay Entra Connect) là tiện ích đồng bộ danh tính hàng đầu giúp nhập toàn bộ tài khoản, nhóm và băm mật khẩu từ máy chủ Windows Server Active Directory cục bộ lên mây Azure AD để hỗ trợ đăng nhập một lần (SSO).',
  'Azure Security',
  ARRAY['AZ-900', 'Entra / AD']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az31',
  'az-900',
  31,
  'An Azure free account has which of the following spending limits and duration characteristics? (Choose two.)',
  '[{"key":"A","text":"The spending limit is fixed (e.g., $200 USD) and cannot be increased or decreased"},{"key":"B","text":"The free trial trial subscription expires after 12 months"},{"key":"C","text":"You can create up to 10 Azure free accounts by using the same Microsoft account"},{"key":"D","text":"You can stop an Azure SQL Database instance to decrease costs"}]'::jsonb,
  ARRAY['A', 'B']::text[],
  'Tài khoản Azure miễn phí mới khởi tạo có hạn mức chi tiêu dùng thử là $200 USD cố định (không thể nâng hay hạ hạn mức này mà chỉ có tùy chọn gỡ bỏ hạn mức để chuyển sang Pay-As-You-Go). Các quyền lợi miễn phí dùng thử sẽ hết hạn sau chính xác 12 tháng.',
  'Pricing & Support',
  ARRAY['AZ-900', 'Free Account']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az32',
  'az-900',
  32,
  'Your application is composed of an Azure App Service web app (with an SLA of 99.95%) and an Azure SQL Database instance (with an SLA of 99.99%). How is the composite SLA for the entire application calculated?',
  '[{"key":"A","text":"The composite SLA is the product of both SLAs (0.9995 * 0.9999 = 99.94%)"},{"key":"B","text":"The composite SLA matches the highest individual SLA (99.99%)"},{"key":"C","text":"The composite SLA matches the lowest individual SLA (99.95%)"},{"key":"D","text":"The composite SLA is the average of both SLAs (99.97%)"}]'::jsonb,
  ARRAY['A']::text[],
  'SLA tích hợp (Composite SLA) của các dịch vụ phụ thuộc song song được tính bằng tích xác suất hoạt động của các thành phần độc lập (99.95% * 99.99% = 99.94%). Kết quả này luôn thấp hơn các SLA đơn lẻ vì tăng số lượng linh kiện cấu thành sẽ tăng nguy cơ có điểm lỗi đơn lẻ (SPOF).',
  'Pricing & Support',
  ARRAY['AZ-900', 'SLA Calculation']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az33',
  'az-900',
  33,
  'Which Azure service should you use to utilize unused compute capacity in Azure datacenters at deep discounts, with the understanding that these resources can be evicted at any time?',
  '[{"key":"A","text":"Azure Reserved Virtual Machine Instances"},{"key":"B","text":"Azure Spot Virtual Machine Instances"},{"key":"C","text":"Azure Container Instances"},{"key":"D","text":"Azure Virtual Machine Scale Sets"}]'::jsonb,
  ARRAY['B']::text[],
  'Azure Spot VMs cho phép tận dụng năng lực tính toán dự phòng dư thừa (unused capacity) của Microsoft với giá chiết khấu cực sâu (lên đến 90%). Tuy nhiên, Azure có quyền đòi lại tài nguyên và tắt máy ảo này bất cứ khi nào hạ tầng cần sử dụng.',
  'Pricing & Support',
  ARRAY['AZ-900', 'Spot VMs']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az34',
  'az-900',
  34,
  'What Service Level Agreement (SLA) or support guarantee applies to Azure services when they are in Public Preview?',
  '[{"key":"A","text":"They are covered by a default 99.9% uptime SLA"},{"key":"B","text":"They are excluded from the Service Level Agreements (SLAs)"},{"key":"C","text":"They carry a proration-reduced SLA rate of 95%"},{"key":"D","text":"They are only configurable and supported via the Azure CLI"}]'::jsonb,
  ARRAY['B']::text[],
  'Các dịch vụ hoặc tính năng đang trong giai đoạn thử nghiệm công khai (Public Preview) được cung cấp với điều khoản ''AS-IS'' (như hiện trạng) và hoàn toàn MIỄN TRỪ khỏi các cam kết dịch vụ SLA chính thức. Do đó, khuyến cáo không chạy tải sản xuất (production workloads) trên các tài nguyên này.',
  'Pricing & Support',
  ARRAY['AZ-900', 'Public Preview']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az35',
  'az-900',
  35,
  'According to the Modern Lifecycle Policy for Azure services, what is the minimum notification period Microsoft must provide before retiring a service without a replacement?',
  '[{"key":"A","text":"30 days"},{"key":"B","text":"90 days"},{"key":"C","text":"6 months"},{"key":"D","text":"12 months"}]'::jsonb,
  ARRAY['D']::text[],
  'Chính sách Vòng đời Hiện đại (Modern Lifecycle Policy) quy định Microsoft cam kết sẽ gửi thông báo tối thiểu trước 12 tháng (1 năm) cho khách hàng trước khi chính thức chấm dứt hỗ trợ (retire) một dịch vụ Azure nếu không có dịch vụ thay thế tương đương.',
  'Pricing & Support',
  ARRAY['AZ-900', 'Lifecycle']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az36',
  'az-900',
  36,
  'Which of the following factors directly affect the ongoing billing costs of an Azure resource? (Choose three.)',
  '[{"key":"A","text":"The volume of outbound data transfer (data egress)"},{"key":"B","text":"The volume of inbound data transfer (data ingress)"},{"key":"C","text":"The selected service tier or sizing of the resource"},{"key":"D","text":"The Azure region where the resource is deployed"},{"key":"E","text":"The specific type of data processed"}]'::jsonb,
  ARRAY['A', 'C', 'D']::text[],
  'Các yếu tố cấu thành chi hóa đơn Azure bao gồm: 1) Lưu lượng dữ liệu gửi đi (Outbound data transfer/egress) - trong khi nhận dữ liệu vào (ingress) là miễn phí. 2) Cấp độ cấu hình hoặc kích cỡ tài nguyên (Service tier/size). 3) Vị trí đặt hạ tầng (Azure region/Vùng địa lý) vì đơn giá tài nguyên khác nhau tùy vùng.',
  'Pricing & Support',
  ARRAY['AZ-900', 'Cost Factors']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az37',
  'az-900',
  37,
  'Which statement accurately describes the difference between Authentication and Authorization in cloud security?',
  '[{"key":"A","text":"Authentication is verifying a user''s credentials; Authorization is defining what resources they can access"},{"key":"B","text":"Authorization is verifying a identity; Authentication is the audit logging process"},{"key":"C","text":"Both terms represent identical security layers implemented within Azure Policies"},{"key":"D","text":"Authentication is only used for server applications; Authorization is for human users only"}]'::jsonb,
  ARRAY['A']::text[],
  'Xác thực (Authentication) là quá trình nhận diện danh tính thực sự của đối tượng (bằng mật khẩu, OTP, sinh trắc học để chứng minh bạn là ai). Phân quyền (Authorization) diễn ra sau đó để xác định đối tượng có quyền làm gì hoặc truy cập tài nguyên nào.',
  'Azure Security',
  ARRAY['AZ-900', 'Identities']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az38',
  'az-900',
  38,
  'Your organization wants to synchronize folders on local on-premises Windows Servers directly into cloud-hosted Azure File shares. Which native tool should you deploy?',
  '[{"key":"A","text":"AzCopy command-line utility"},{"key":"B","text":"Azure File Sync"},{"key":"C","text":"Azure Storage Explorer"},{"key":"D","text":"Azure Data Box"}]'::jsonb,
  ARRAY['B']::text[],
  'Azure File Sync là giải pháp hoàn hảo để lưu tệp thông minh dạng cache tốc độ cao cục bộ tại máy chủ Windows Server on-premises của bạn, đồng thời đồng bộ hóa hai chiều tự động lên một Azure File Share tập trung trên mây.',
  'Azure Services',
  ARRAY['AZ-900', 'Storage Sync']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az39',
  'az-900',
  39,
  'Which service in Azure is a fast, easy, and collaborative Apache Spark-based big data analytics and machine learning platform?',
  '[{"key":"A","text":"Azure Synapse Analytics"},{"key":"B","text":"Azure Databricks"},{"key":"C","text":"Azure DevTest Labs"},{"key":"D","text":"Azure HDInsight"}]'::jsonb,
  ARRAY['B']::text[],
  'Azure Databricks là một nền tảng phân tích dữ liệu lớn và học máy chuyên nghiệp tối ưu hóa cao dựa trên nền Apache Spark, giúp các nhà khoa học dữ liệu (data scientists) cộng tác làm việc cực kỳ mạnh mẽ.',
  'Azure Services',
  ARRAY['AZ-900', 'Databricks']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az40',
  'az-900',
  40,
  'You applied a ''ReadOnly'' lock to an Azure Resource Group. Which of the following activities is now permitted on resources within that group?',
  '[{"key":"A","text":"Authorized users can read the resource configuration, but cannot delete or modify it"},{"key":"B","text":"Users can modify resource parameters, but cannot delete them"},{"key":"C","text":"The resource group is automatically deallocated to prevent charge accrual"},{"key":"D","text":"Only members of the Global Administrators group can modify resources"}]'::jsonb,
  ARRAY['A']::text[],
  'Khóa ReadOnly (Chỉ đọc) ngăn cản người dùng sửa đổi cấu hình hoặc xóa bỏ tài nguyên (ReadOnly chặn cả Write và Delete), trong khi khóa CanNotDelete (Không được xóa) vẫn cho phép sửa đổi hoạt động bình thường nhưng cấm hành vi hủy hoại xóa bỏ.',
  'Azure Governance',
  ARRAY['AZ-900', 'Locks']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az41',
  'az-900',
  41,
  'How many copies of your data are maintained and stored when using Geo-Zone-Redundant Storage (GZRS) under Azure Storage?',
  '[{"key":"A","text":"3 copies"},{"key":"B","text":"4 copies"},{"key":"C","text":"6 copies"},{"key":"D","text":"12 copies"}]'::jsonb,
  ARRAY['C']::text[],
  'GZRS kết hợp tính sẵn sàng cao của ZRS (sao chép đồng bộ 3 bản tại 3 vùng sẵn sàng Availability Zones ở khu vực chính) cộng với sao chép bất đồng bộ sang một khu vực địa lý dự phòng thứ hai (thêm 3 bản dạng LRS tại đó), nâng tổng số bản sao lưu dữ liệu lên là 6 bản sao.',
  'Azure Services',
  ARRAY['AZ-900', 'Storage Replication']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az42',
  'az-900',
  42,
  'Which native Azure service serves as your personalized cloud consultant, providing actionable recommendations to optimize costs, efficiency, security, and high availability?',
  '[{"key":"A","text":"Azure Sentinel"},{"key":"B","text":"Azure Service Health"},{"key":"C","text":"Azure Advisor"},{"key":"D","text":"Azure Log Analytics"}]'::jsonb,
  ARRAY['C']::text[],
  'Azure Advisor quét sâu kiến trúc hạ tầng đám mây của bạn và đưa ra những khuyến nghị thực thi hữu ích chia theo 5 trụ cột chính: Độ tin cậy (Reliability), Bảo mật (Security), Hiệu năng (Performance), Vận hành xuất sắc (Operational Excellence) và Tối ưu hóa chi phí (Cost).',
  'Azure Governance',
  ARRAY['AZ-900', 'Advisor']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az43',
  'az-900',
  43,
  'Which cloud service category minimizes the administrative and setup responsibilities of a customer to the highest possible extent?',
  '[{"key":"A","text":"Infrastructure as a Service (IaaS)"},{"key":"B","text":"Platform as a Service (PaaS)"},{"key":"C","text":"Software as a Service (SaaS)"},{"key":"D","text":"Database as a Service (DaaS)"}]'::jsonb,
  ARRAY['C']::text[],
  'Mô hình SaaS (Phần mềm dưới dạng dịch vụ) giải phóng tối đa áp lực quản trị cho khách hàng. Nhà cung cấp đám mây chịu mọi trọng trách từ hệ điều hành, viết mã nguồn ứng dụng, cập nhật bảo mật cho đến phân phối, khách hàng chỉ việc đăng nhập và sử dụng ứng dụng.',
  'Cloud Concepts',
  ARRAY['AZ-900', 'Cloud Types']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az44',
  'az-900',
  44,
  'When you link an Azure DNS Private Zone to an Azure Virtual Network (VNet), which feature allows virtual machines to automatically register their DNS hostnames?',
  '[{"key":"A","text":"Auto-registration"},{"key":"B","text":"Zone Delegation"},{"key":"C","text":"DNS Peering"},{"key":"D","text":"ExpressRoute Routing"}]'::jsonb,
  ARRAY['A']::text[],
  'Khi bật tính năng Tự động đăng ký (Auto-registration) trên một liên kết mạng ảo trong Azure DNS Private Zone, hệ thống sẽ tự động tạo bản ghi DNS định danh ''A Record'' trỏ đúng hostname của VM mới khởi tạo về địa chỉ IP nội bộ của nó mà không cần can thiệp thủ công.',
  'Azure Services',
  ARRAY['AZ-900', 'Azure DNS']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az45',
  'az-900',
  45,
  'You want to be notified when Microsoft plans to perform critical maintenance tasks that can temporarily degrade the availability of your active cloud Virtual Machines. Which service should you configure?',
  '[{"key":"A","text":"Azure Service Health"},{"key":"B","text":"Azure Monitor Metrics"},{"key":"C","text":"Azure Advisor recommendations"},{"key":"D","text":"Azure Sentinel playbooks"}]'::jsonb,
  ARRAY['A']::text[],
  'Azure Service Health cung cấp một lăng kính cá nhân hóa thể hiện chính xác trạng thái sức khỏe của các dịch vụ bạn đang dùng, đồng thời hiển thị toàn bộ cảnh báo lịch bảo trì định kỳ (Planned Maintenance) trực tiếp từ Microsoft.',
  'Azure Governance',
  ARRAY['AZ-900', 'Service Health']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az46',
  'az-900',
  46,
  'Which specialized technological solution extends Azure governance, resources monitoring, and policy enforcement to servers and Kubernetes clusters hosted on-premises or in other clouds (AWS, GCP)?',
  '[{"key":"A","text":"Azure Active Directory (Microsoft Entra ID)"},{"key":"B","text":"Azure Arc"},{"key":"C","text":"Azure Front Door"},{"key":"D","text":"Azure Pipelines agent"}]'::jsonb,
  ARRAY['B']::text[],
  'Azure Arc đóng vai trò là cây cầu nối chiếu tất cả các tài nguyên hạ tầng phi-Azure (không chạy trên đám mây Azure như máy chủ on-premise, máy ảo trên AWS/GCP, cụm Kubernetes ngoại vi) về dạng một đối tượng tài nguyên trên Azure Portal để giám sát và cài đặt chính sách tập trung.',
  'Azure Services',
  ARRAY['AZ-900', 'Azure Arc']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az47',
  'az-900',
  47,
  'Your company has terabytes of database backups currently on-premises. You need to migrate this data over to Azure in a highly secure, offline, inexpensive, and reliable manner. Which physical migration appliance should you request?',
  '[{"key":"A","text":"Azure Data Box"},{"key":"B","text":"AzCopy command-line utility"},{"key":"C","text":"Azure Storage Explorer"},{"key":"D","text":"Azure ExpressRoute"}]'::jsonb,
  ARRAY['A']::text[],
  'Azure Data Box là thiết bị lưu trữ vật lý siêu bền chắc chuyên dụng do Microsoft gửi trực tiếp tới văn phòng của bạn. Bạn copy dữ liệu ngoại tuyến (offline) vào đó rồi gửi trả lại về trung tâm dữ liệu của Azure để đưa lên đám mây một cách nhanh chóng và an toàn.',
  'Azure Services',
  ARRAY['AZ-900', 'Migration Hardware']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az48',
  'az-900',
  48,
  'What is a concrete example of Vertical Scaling (scaling up/down) in Microsoft Azure cloud environment?',
  '[{"key":"A","text":"Adding an additional CPU, RAM, or storage disk to an existing virtual machine"},{"key":"B","text":"Adding 10 more identical virtual machines behind a load balancer"},{"key":"C","text":"Deploying the same virtual machine into multiple global regions"},{"key":"D","text":"Automatically scaling the instance count of an active cluster"}]'::jsonb,
  ARRAY['A']::text[],
  'Tăng trưởng theo chiều dọc (Vertical Scaling/Scale up) là hành vi nâng cao sức mạnh phần cứng của một thực thể duy nhất (như nâng cấp cấu hình VM từ 2 vCPUs lên 8 vCPUs, bổ sung thêm RAM). Trái lại, Scale out (chiều ngang) là bổ sung thêm số lượng thực thể song song.',
  'Cloud Concepts',
  ARRAY['AZ-900', 'Scalability']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az49',
  'az-900',
  49,
  'Which tool in Azure should you configure as a native governance feature to send automated email alerts to system administrators when spending exceeds a pre-set threshold within a billing period?',
  '[{"key":"A","text":"Azure Budgets (Budget alerts)"},{"key":"B","text":"Azure Advisor recommendations"},{"key":"C","text":"Network Security Groups (NSGs)"},{"key":"D","text":"Azure Cost Matrix"}]'::jsonb,
  ARRAY['A']::text[],
  'Budget Alerts (Cảnh báo ngân sách) nằm trong bộ giải pháp Cost Management của Azure, hỗ trợ tự động gửi thông báo qua email hoặc kích hoạt mã lệnh tự động (Webhooks) ngay khi chi tiêu thực tế hoặc ước tính chạm hạn mức bạn quy định.',
  'Pricing & Support',
  ARRAY['AZ-900', 'Budgets']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az50',
  'az-900',
  50,
  'Which of the following cloud infrastructure traits ensures continuous access to applications without any noticeable degradation or downtime in the event of an underlying physical rack failure?',
  '[{"key":"A","text":"Elasticity"},{"key":"B","text":"High Availability (HA)"},{"key":"C","text":"Predictability"},{"key":"D","text":"Agility"}]'::jsonb,
  ARRAY['B']::text[],
  'Tính sẵn sàng cao (High Availability) là khả năng bảo đảm cấu trúc hệ thống hoạt động liên tục trong thời gian dài mà không bị gián đoạn dịch vụ đáng kể ngay cả khi có sự sụp đổ vật lý một phần của tủ rack máy chủ, nhờ có sẵn các bản sao lưu nóng và hệ thống cân bằng tải tự động.',
  'Cloud Concepts',
  ARRAY['AZ-900', 'High Availability']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az51',
  'az-900',
  51,
  'In which type of cloud model are all hardware resources owned by a third-party and shared between multiple tenants who pay for resource consumption?',
  '[{"key":"A","text":"Private Cloud"},{"key":"B","text":"Hybrid Cloud"},{"key":"C","text":"Public Cloud"},{"key":"D","text":"Federal Cloud"}]'::jsonb,
  ARRAY['C']::text[],
  'Đám mây công cộng (Public Cloud - ví dụ: Microsoft Azure) là mô hình trong đó toàn bộ máy móc vật lý nằm ở thuộc sở hữu của nhà phát triển bên thứ ba (Microsoft), chia sẻ đa bên thuê (multi-tenant) và tính tiền bám sát dung lượng thực tế.',
  'Cloud Concepts',
  ARRAY['AZ-900', 'Cloud Types']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az52',
  'az-900',
  52,
  'An Azure web application queries an on-premises Microsoft SQL database hosted directly inside your local office server room. What type of cloud hosting is this?',
  '[{"key":"A","text":"Public Cloud only"},{"key":"B","text":"Private Cloud only"},{"key":"C","text":"Hybrid Cloud"},{"key":"D","text":"Multi-vendor multi-cloud"}]'::jsonb,
  ARRAY['C']::text[],
  'Mô hình đám mây lai (Hybrid Cloud) kết hợp hạ tầng đám mây công cộng (Azure App Service) kết hợp với các cơ sở hạ tầng lưu trữ cục bộ tại máy chủ on-premises của doanh nghiệp để trao đổi thông tin cục bộ riêng tư.',
  'Cloud Concepts',
  ARRAY['AZ-900', 'Cloud Types']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az53',
  'az-900',
  53,
  'If Microsoft fails to meet the guaranteed Service Level Agreement (SLA) uptime percentage for an active paid Azure service, how does you get compensated?',
  '[{"key":"A","text":"Microsoft refunds cash directly to your bank account"},{"key":"B","text":"Microsoft applies a service credit to your Azure active billing account"},{"key":"C","text":"Microsoft automatically migrates your VMs to a different region"},{"key":"D","text":"Microsoft provides discount coupons redeemable for Microsoft Store items"}]'::jsonb,
  ARRAY['B']::text[],
  'Đền bù vi phạm cam kết dịch vụ SLA của Azure không hoàn bằng tiền mặt. Thay vào đó, Microsoft bồi hoàn dưới dạng ''Service Credit'' (tín dụng dịch vụ) trừ trực tiếp vào hóa đơn thanh toán kỳ kế tiếp của bạn.',
  'Pricing & Support',
  ARRAY['AZ-900', 'SLAs']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az54',
  'az-900',
  54,
  'Which of the following describes the core functionality of Azure Site Recovery?',
  '[{"key":"A","text":"It prevents unauthorized intrusion over the network"},{"key":"B","text":"It provides a central repository for application security guidelines"},{"key":"C","text":"It acts as a disaster recovery service by orchestrating replication of virtual machines"},{"key":"D","text":"It scales active server components based on CPU metrics"}]'::jsonb,
  ARRAY['C']::text[],
  'Azure Site Recovery là giải pháp Khắc phục thảm họa (Disaster Recovery). Công cụ này liên tục nhân bản (replicate) hoạt động của máy ảo từ khu vực chính sang khu vực địa lý dự phòng để chuẩn bị kịch bản khôi phục nóng (failover) tức thời nếu xảy ra sự cố sập toàn vùng.',
  'Azure Services',
  ARRAY['AZ-900', 'Site Recovery']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az55',
  'az-900',
  55,
  'You want to prevent authorized administrators from accidentally deleting resources within a critical Resource Group, while still permitting them to create new resources and modify existing ones. Which Resource Lock model should you assign?',
  '[{"key":"A","text":"ReadOnly lock"},{"key":"B","text":"CanNotDelete (Delete) lock"},{"key":"C","text":"Implicit deny lock"},{"key":"D","text":"Administrative block lock"}]'::jsonb,
  ARRAY['B']::text[],
  'Khóa CanNotDelete (Hay Delete lock) ngăn chặn hoàn toàn hành vi xóa bỏ (Delete) tài nguyên nhưng cho phép người dùng đọc và cập nhật tham số cấu hình (Write/Read). Khóa ReadOnly chặn cả việc ghi nên không thể dùng cho trường hợp này.',
  'Azure Governance',
  ARRAY['AZ-900', 'Locks']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az56',
  'az-900',
  56,
  'True or False: Azure DNS supports private domain name resolution for internal networks without exposing trade metrics to the public internet.',
  '[{"key":"A","text":"True"},{"key":"B","text":"False"}]'::jsonb,
  ARRAY['A']::text[],
  'Đúng (True). Azure DNS hỗ trợ cả giải quyết tên miền công cộng lẫn ''Azure DNS Private Zones'' cho mạng nội bộ VNet giúp ẩn toàn bộ thông số phân giải DNS hữu ích khỏi không gian mạng internet công cộng.',
  'Azure Services',
  ARRAY['AZ-900', 'Azure DNS']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az57',
  'az-900',
  57,
  'Does Azure Active Directory (Microsoft Entra ID) require you to deploy and manage virtualized Active Directory domain controller (DC) servers over virtual machines?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb,
  ARRAY['B']::text[],
  'Không (No). Entra ID (Azure AD) là hệ thống danh tính mây gốc hoàn toàn kiểu dịch vụ (Identity-as-a-Service), không yêu cầu quản trị viên tự dựng các máy chủ Domain Controllers (DCs) hay cài hệ điều hành Windows Server để vận hành cấu trúc thư mục.',
  'Azure Security',
  ARRAY['AZ-900', 'Entra / AD']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az58',
  'az-900',
  58,
  'Where is the absolute central repository to access detailed compliance standards, independent auditor certifications, and regulatory assessments for Microsoft Cloud services?',
  '[{"key":"A","text":"Azure Security Center dashboard"},{"key":"B","text":"Microsoft Service Trust Portal"},{"key":"C","text":"Azure Cost Vault"},{"key":"D","text":"Microsoft Advisor portal"}]'::jsonb,
  ARRAY['B']::text[],
  'Service Trust Portal (Cổng thông tin tin cậy dịch vụ) lưu trữ toàn hệ thống báo cáo kiểm toán độc lập chi tiết, chứng nhận quốc tế (như ISO, SOC, HIPAA, GDPR) liên quan bám sát tính tuân thủ pháp lý của cơ sở hạ tầng Microsoft.',
  'Azure Governance',
  ARRAY['AZ-900', 'Service Trust Portal']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az59',
  'az-900',
  59,
  'True or False: Microsoft provides a lifetime free tier subscription with unmetered access to all premium virtual machine size configurations.',
  '[{"key":"A","text":"True"},{"key":"B","text":"False"}]'::jsonb,
  ARRAY['B']::text[],
  'Sai (False). Chương trình Azure Free Account chỉ cho dùng thử các hạn mức tài nguyên nhỏ (bị giới hạn về nhóm cấu hình cơ bản) trong vòng 12 tháng đầu, chứ không cung cấp truy cập không giới hạn cho các máy ảo đắt tiền.',
  'Pricing & Support',
  ARRAY['AZ-900', 'Free Account']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az60',
  'az-900',
  60,
  'Can a single Azure Resource Group contain resources deployed across multiple different Azure regions/locations?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb,
  ARRAY['A']::text[],
  'Đúng (Yes). Rất nhiều người học nhầm lẫn vì Resource Group có một thuộc tính Location khi khởi tạo. Tuy nhiên, thuộc tính đó chỉ là nơi lưu trữ siêu dữ liệu (metadata) của nhóm. Bản thân các tài nguyên bên trong nhóm hoàn toàn có thể chạy ở bất kỳ vùng nào trên thế giới.',
  'Azure Architecture',
  ARRAY['AZ-900', 'Resource Groups']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az61',
  'az-900',
  61,
  'When you apply a lock to an Azure Resource Group, do child resources within that group automatically inherit the lock restrictions?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb,
  ARRAY['A']::text[],
  'Đúng (Yes). Các cơ chế khóa (ReadOnly, CanNotDelete) tuân thủ mô hình thừa kế từ trên xuống dưới (top-down inheritance). Mọi tài nguyên con đặt trong Resource Group bị khóa sẽ lập tức thừa hưởng đầy đủ các hạn chế của khóa đó.',
  'Azure Governance',
  ARRAY['AZ-900', 'Locks']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az62',
  'az-900',
  62,
  'Which cost estimation tool is specifically designed to evaluate and demonstrate cost savings of migrating physical server workloads to Azure over a detailed multi-year horizon?',
  '[{"key":"A","text":"Azure Pricing Calculator"},{"key":"B","text":"Total Cost of Ownership (TCO) Calculator"},{"key":"C","text":"Azure Cost Advisor"},{"key":"D","text":"Compliance Manager"}]'::jsonb,
  ARRAY['B']::text[],
  'TCO Calculator giúp bạn so sánh tổng chi phí sở hữu khi duy trì hạ tầng vận hành máy chủ vật lý on-premise của bạn (gồm cả tiền nhân sự, điện tiêu thụ, làm mát) so với chi phí dự kiến khi dịch chuyển toàn bộ lên nền mây Microsoft Azure.',
  'Pricing & Support',
  ARRAY['AZ-900', 'TCO']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az63',
  'az-900',
  63,
  'What software must you install locally on your desktop workstation computer before you can use the Azure Cloud Shell?',
  '[{"key":"A","text":"Azure CLI binaries"},{"key":"B","text":"PowerShell Core 7.x"},{"key":"C","text":"No software is required; it is accessible directly via an HTML5 web browser"},{"key":"D","text":"Azure Storage Explorer app"}]'::jsonb,
  ARRAY['C']::text[],
  'Azure Cloud Shell chạy hoàn toàn trên đám mây dưới dạng một giao diện container tạm thời. Bạn chỉ cần mở một trình duyệt Web hỗ trợ tiêu chuẩn HTML5 thông thường là đã có thể gõ lệnh Bash/PowerShell đầy đủ mà không cần cài đặt bất kỳ thành phần nào khác.',
  'Azure Services',
  ARRAY['AZ-900', 'Cloud Shell']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az64',
  'az-900',
  64,
  'Which of the following security services ensures volumetric website protection, preventing application-level server exhaust attacks from compromising service availability?',
  '[{"key":"A","text":"Azure Key Vault protection"},{"key":"B","text":"Azure Information Protection"},{"key":"C","text":"Azure DDoS Protection (Standard/Network Protection)"},{"key":"D","text":"Network Security Groups only"}]'::jsonb,
  ARRAY['C']::text[],
  'Azure DDoS Protection được thiết kế với thuật toán phân tích lưu lượng thông minh, tự động ngăn chặn các cuộc tấn công từ chối dịch vụ phân tán quy mô lớn (volumetric attacks) nhằm bảo toàn tối đa tính sẵn sàng hoạt động của ứng dụng.',
  'Azure Security',
  ARRAY['AZ-900', 'DDoS Protection']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az65',
  'az-900',
  65,
  'You intend to deploy a customized invoicing website in Azure. The site requires several supporting legacy system services to run concurrently within the server hosting environment. What deployment model is recommended?',
  '[{"key":"A","text":"Software as a Service (SaaS)"},{"key":"B","text":"Infrastructure as a Service (IaaS)"},{"key":"C","text":"Platform as a Service (PaaS)"},{"key":"D","text":"Function as a Service (FaaS)"}]'::jsonb,
  ARRAY['B']::text[],
  'Do ứng dụng yêu cầu quá nhiều thành phần tiền đề cũ chạy ngầm (legacy system services) liên quan sâu đến hệ điều hành nền, bạn phải chọn IaaS (Máy ảo VM) để nắm toàn bộ quyền quản trị Windows/Linux nhằm tùy biến cài đặt.',
  'Cloud Concepts',
  ARRAY['AZ-900', 'IaaS']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az66',
  'az-900',
  66,
  'Choose the term that correctly represents Microsoft Sentinel''s categorization as a cloud-native cybersecurity solution:',
  '[{"key":"A","text":"A specialized virtualization layer"},{"key":"B","text":"A Security Information and Event Management (SIEM) and Security Orchestration Automated Response (SOAR) solution"},{"key":"C","text":"An identity federation conduit"},{"key":"D","text":"A hardware security module (HSM) broker"}]'::jsonb,
  ARRAY['B']::text[],
  'Microsoft Sentinel thu thập toàn bộ dữ liệu nhật ký bảo mật (SIEM) từ tất cả các đầu thiết bị trên mây và on-premise, liên kết phân tích AI để phát hiện hiểm họa và kích hoạt các kịch bản phản ứng xử lý thông tin tự động (SOAR).',
  'Azure Security',
  ARRAY['AZ-900', 'Sentinel']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az67',
  'az-900',
  67,
  'What represents an Azure Policy ''Initiative definition''?',
  '[{"key":"A","text":"A grouping or collection of multiple policy definitions managed together towards a single overarching goal"},{"key":"B","text":"A blueprint container for Role-Based appointments"},{"key":"C","text":"An automated billing audit checklist tool"},{"key":"D","text":"A resource group configuration file written in JSON"}]'::jsonb,
  ARRAY['A']::text[],
  'Một định nghĩa Initiative (Sáng kiến) thực chất là tập hợp gom nhóm nhiều quy tắc chính sách (Policy definitions) riêng lẻ lại thành một mục tiêu duy nhất (ví dụ: Initiative tuân thủ tiêu chuẩn bảo mật PCI-DSS gồm hàng trăm policy con) để tiện gán và quản lý.',
  'Azure Governance',
  ARRAY['AZ-900', 'Azure Policy']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az68',
  'az-900',
  68,
  'Which service in Azure should you employ to configure Just-In-Time (JIT) VM access, locking down management ports (like RDP 3389 or SSH 22) by default?',
  '[{"key":"A","text":"Azure Bastion only"},{"key":"B","text":"Microsoft Defender for Cloud (formerly Security Center)"},{"key":"C","text":"Azure Active Directory admin portal"},{"key":"D","text":"Azure Front Door"}]'::jsonb,
  ARRAY['B']::text[],
  'Microsoft Defender for Cloud cung cấp tính năng JIT VM Access. Các cổng truy cập SSH/RDP trên VM luôn bị chặn bọc tường lửa và chỉ mở ra trong một khoảng thời gian giới hạn sau khi được phê duyệt quyền yêu cầu truy cập từ quản lý.',
  'Azure Security',
  ARRAY['AZ-900', 'Security Management']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az69',
  'az-900',
  69,
  'True or False: Enabling single sign-on (SSO) within Azure Active Directory prevents users from registering personal mobile iOS and Android devices with the corporate directory.',
  '[{"key":"A","text":"True"},{"key":"B","text":"False"}]'::jsonb,
  ARRAY['B']::text[],
  'Sai (False). Việc bật SSO giúp người dùng đăng nhập nhanh một tài khoản sử dụng nhiều app. Quá trình này không hề xung đột hay ngăn cấm việc người dùng thực hiện hoạt động đăng ký/quản lý thiết bị cầm tay iOS/Android vào danh bạ Entra ID.',
  'Azure Security',
  ARRAY['AZ-900', 'Identities']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az70',
  'az-900',
  70,
  'Can a Network Security Group (NSG) be directly associated and bound to an entire Azure subscription or Management Group?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb,
  ARRAY['B']::text[],
  'Không (No). NSG chỉ có thể được gán bám sát vào 2 thực thể cụ thể: 1) Cấp độ mạng con (Subnet) của một Virtual Network. 2) Cấp độ card mạng vật lý ảo (NIC - Network Interface) của một máy ảo cụ thể.',
  'Azure Security',
  ARRAY['AZ-900', 'NSG']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az71',
  'az-900',
  71,
  'Which Azure resource allows you to group virtual machines based on their application roles (e.g., ''WebServers'') and use that group as a target source/destination directly inside your NSG rules?',
  '[{"key":"A","text":"Management Groups"},{"key":"B","text":"Application Security Groups (ASGs)"},{"key":"C","text":"Local Network Gateways"},{"key":"D","text":"Resource group tags"}]'::jsonb,
  ARRAY['B']::text[],
  'Application Security Group (ASG) là tấm khiên phân loại máy ảo theo lớp nghiệp vụ. Nhờ gán VM vào ASG, bạn có thể viết quy tắc NSG ngắn gọn như ''Cho phép lưu thông từ ASG_Web sang ASG_Database'' mà không cần điền thủ công hàng loạt dải IP động dễ sai sót.',
  'Azure Security',
  ARRAY['AZ-900', 'NSG']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az72',
  'az-900',
  72,
  'True or False: An Azure Storage account is classified as a classic example of an Azure Resource Manager (ARM) resource deployment.',
  '[{"key":"A","text":"True"},{"key":"B","text":"False"}]'::jsonb,
  ARRAY['A']::text[],
  'Đúng (True). Toàn bộ thực thể quản lý trong Azure (gồm máy chủ ảo, cơ sở dữ liệu SQL, tài khoản lưu trữ Storage Account) đều là các đối tượng được đăng ký, quản lý cấu trúc và phân đoạn quyền bởi trình điều khiển Azure Resource Manager (ARM).',
  'Azure Services',
  ARRAY['AZ-900', 'Storage']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az73',
  'az-900',
  73,
  'Who is eligible to purchase subscriptions and use Microsoft Azure Germany specialized sovereign cloud services?',
  '[{"key":"A","text":"Legal residents of Germany only"},{"key":"B","text":"German governmental agency heads only"},{"key":"C","text":"Any customer or enterprise worldwide that requires their data to reside strictly inside isolated German datacenters"},{"key":"D","text":"Customers using Microsoft Dynamics 365 services only"}]'::jsonb,
  ARRAY['C']::text[],
  'Azure Germany mở rộng cơ hội cho mọi tổ chức, cá nhân toàn cầu có nhu cầu pháp lý bắt buộc lưu trữ cấu trúc dữ liệu khép kín vật lý hoàn toàn bên trong ranh giới địa lý nước Đức dưới sự giám sát độc lập của người bảo quản ủy thác dữ liệu đức (Data Trustee).',
  'Cloud Concepts',
  ARRAY['AZ-900', 'Sovereign Clouds']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az74',
  'az-900',
  74,
  'True or False: Outbound data transfers from any Azure active region to any on-premises localized server network are always free of charge.',
  '[{"key":"A","text":"True"},{"key":"B","text":"False"}]'::jsonb,
  ARRAY['B']::text[],
  'Sai (False). Việc nhận dữ liệu gửi vào đám mây (data ingress/inbound) luôn luôn được miễn phí. Tuy nhiên, dữ liệu tải ra ngoài đám mây Azure gửi về on-premise (data egress/outbound) sẽ bị tính phí bám sát từng Gigabyte tiêu dùng vượt hạn mức miễn phí ban đầu tùy vùng.',
  'Pricing & Support',
  ARRAY['AZ-900', 'Billing']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az75',
  'az-900',
  75,
  'Under the hybrid and Platform as a Service (PaaS) models, who is responsible for managing the installations of base operating system patches and platform framework updates?',
  '[{"key":"A","text":"The cloud customer only"},{"key":"B","text":"The cloud service provider (Microsoft) only"},{"key":"C","text":"It is shared between on-premise system administrators and DBAs"},{"key":"D","text":"The local internet service provider"}]'::jsonb,
  ARRAY['B']::text[],
  'Ở mô hình dịch vụ PaaS, Microsoft lo toàn vẹn khâu bảo trì máy chủ và vá lỗi hệ điều hành bọc lót bên dưới (OS patching, firmware upgrades). Trách nhiệm này hoàn toàn thuộc về nhà cung cấp đám mây.',
  'Cloud Concepts',
  ARRAY['AZ-900', 'Shared Responsibility']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az76',
  'az-900',
  76,
  'What automated mechanisms does Microsoft Sentinel employ to trigger threat alerts responses and execute target corrective procedures?',
  '[{"key":"A","text":"Azure policies initiative"},{"key":"B","text":"Playbooks containing orchestrated sequences of automation"},{"key":"C","text":"Resource group tags"},{"key":"D","text":"Log Analytics workspaces queries"}]'::jsonb,
  ARRAY['B']::text[],
  'Microsoft Sentinel sử dụng các ''Playbooks'' (Kịch bản phản ứng) chạy bằng nền tảng Logic Apps. Khi rà quét phát hiện hiểm họa bảo mật, Playbook sẽ thực thi quy trình đóng chặn cổng mạng hoặc chặn tài khoản nghi vấn tức thì không cần đợi quản trị viên bấm nút.',
  'Azure Security',
  ARRAY['AZ-900', 'Sentinel']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az77',
  'az-900',
  77,
  'Which of the following represents the initial and foundational phase in the Microsoft Cloud Adoption Framework (CAF) for Azure?',
  '[{"key":"A","text":"Ready your organization"},{"key":"B","text":"Define your strategy"},{"key":"C","text":"Adopt the cloud"},{"key":"D","text":"Make a deployment plan"}]'::jsonb,
  ARRAY['B']::text[],
  'Khung dịch chuyển mây Microsoft Cloud Adoption Framework (CAF) bắt đầu tiên quyết với giai đoạn ''Define your strategy'' (Xác định chiến lược - hiểu động lực thúc đẩy và bài toán tài chính tối ưu kinh doanh), sau đó mới tới Plan, Ready và Adopt.',
  'Cloud Concepts',
  ARRAY['AZ-900', 'CAF']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az78',
  'az-900',
  78,
  'When communicating over an active ExpressRoute circuit, what represents the pricing structure of data transfer?',
  '[{"key":"A","text":"Both inbound and outbound data transfers are free of charge"},{"key":"B","text":"Inbound data transfer is free of charge, but outbound transfer is charged based on usage metrics"},{"key":"C","text":"Outbound data transfer is free, but inbound transfer carries high rates"},{"key":"D","text":"Both inbound and outbound transfers are charged identical flat costs"}]'::jsonb,
  ARRAY['B']::text[],
  'Đối với kết nối mạng riêng cao cấp ExpressRoute: Luồng tải dữ liệu đi vào (Inbound) mây luôn luôn là miễn phí. Tuy nhiên, luồng dữ liệu trích xuất đi ra (Outbound) sẽ được tính tiền dựa trên lượng GB tiêu hao thực tế (nếu dùng gói Metered Port) hoặc phẳng theo gói không giới hạn.',
  'Pricing & Support',
  ARRAY['AZ-900', 'Billing']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az79',
  'az-900',
  79,
  'Which of the following statements is true regarding Microsoft Defender for Cloud pricing tiers and features?',
  '[{"key":"A","text":"All advanced cloud security features are free of charge"},{"key":"B","text":"Only foundational Cloud Security Posture Management (CSPM) features are free of charge"},{"key":"C","text":"The service requires you to purchase separate Windows Server licenses"},{"key":"D","text":"It cannot monitor non-Azure cloud resources"}]'::jsonb,
  ARRAY['B']::text[],
  'Microsoft Defender for Cloud cung cấp miễn phí các khuyến nghị kiểm tra tư thế an ninh cơ sở (Foundational CSPM - bao gồm chấm điểm Secure Score). Còn các tính năng bảo vệ máy chủ nâng cao (Defender plans / CWPP) sẽ có tính phí dịch vụ.',
  'Pricing & Support',
  ARRAY['AZ-900', 'Security Management']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'az80',
  'az-900',
  80,
  'Who has access permission to utilize the Microsoft Azure Pricing Calculator and Azure TCO Calculator pages?',
  '[{"key":"A","text":"System owners with an active Enterprise Agreement (EA) subscription only"},{"key":"B","text":"Anyone with an internet browser and target connection"},{"key":"C","text":"Only validated members of the Azure Security Center team"},{"key":"D","text":"Billing administrators with an active subscription only"}]'::jsonb,
  ARRAY['B']::text[],
  'Các bộ công cụ tính toán mô phỏng giá (Pricing Calculator & TCO Calculator) của Azure được Microsoft phát hành công khai hoàn toàn trên trang web công cộng. Bất kỳ ai cũng có thể truy cập để tự ước lượng chi phí mà không bắt buộc phải có tài khoản hay đăng ký Azure active.',
  'Pricing & Support',
  ARRAY['AZ-900', 'Pricing tools']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

-- ===========================================
-- SEED DATA FOR FABRIC DATA ENGINEER ASSOCIATE (DP-800) (dp-800)
-- Total questions: 105
-- ===========================================

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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
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
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

-- ===========================================
-- SEED DATA FOR ISTQB AI TESTING (ISTQB-AI) (istqb-ai)
-- Total questions: 119
-- ===========================================

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-1',
  'istqb-ai',
  1,
  'Which ONE of the below is MOST likely to indicate a problem with underfitting in an ML model?',
  '[{"key":"A","text":"The model is vulnerable to adversarial attacks"},{"key":"B","text":"The model fails to generalize on new data"},{"key":"C","text":"The model uses a large amount of resources to make a prediction"},{"key":"D","text":"The model is inaccurate on data similar to the training data"}]'::jsonb,
  ARRAY['D']::text[],
  'Underfitting (Học thiếu / Chưa đủ độ khớp) xảy ra khi mô hình quá đơn giản, không học được cấu trúc ẩn của dữ liệu. Do đó, mô hình sẽ hoạt động kém và KẾM CHÍNH XÁC ngay cả trên dữ liệu huấn luyện (hoặc dữ liệu tương tự dữ liệu huấn luyện).',
  'ML Fundamentals',
  ARRAY['Underfitting', 'Model Quality', 'Machine Learning']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-2',
  'istqb-ai',
  2,
  'Which ONE of the below is NOT an input to an activation function in a neural network?',
  '[{"key":"A","text":"Bias"},{"key":"B","text":"Activation values from the previous layer"},{"key":"C","text":"Activation values from the current layer"},{"key":"D","text":"The weights assigned to the connections"}]'::jsonb,
  ARRAY['C']::text[],
  'Đầu vào của hàm kích hoạt (activation function) của một neuron được tính từ tổng có trọng số của các giá trị kích hoạt từ LỚP TRƯỚC (previous layer) cộng với Bias. Giá trị kích hoạt của LỚP HIỆN TẠI (current layer) chính là KẾT QUẢ đầu ra chứ không phải đầu vào.',
  'Neural Networks',
  ARRAY['Neural Networks', 'Activation Function', 'Deep Learning']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-3',
  'istqb-ai',
  3,
  'Which ONE of the following options is a technology used to implement AI?',
  '[{"key":"A","text":"Genetic algorithms"},{"key":"B","text":"Autonomy"},{"key":"C","text":"Classification"},{"key":"D","text":"Reinforcement learning"}]'::jsonb,
  ARRAY['A']::text[],
  'Thuật toán di truyền (Genetic algorithms) là một công nghệ/phương pháp tối ưu hóa và tìm kiếm lấy cảm hứng từ tiến hóa tự nhiên, dùng để triển khai AI. Trong khi đó, Autonomy là đặc tính, Classification là bài toán, và Reinforcement Learning là phương pháp học.',
  'AI Concepts',
  ARRAY['Genetic Algorithms', 'AI Implementation', 'AI Technologies']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-4',
  'istqb-ai',
  4,
  'Which ONE of the following statements about the hardware used to implement ML systems is MOST likely to be correct?',
  '[{"key":"A","text":"Specialist hardware is necessary for ML"},{"key":"B","text":"Less bits are required for hardware supporting ML"},{"key":"C","text":"Support for complex operations is required"},{"key":"D","text":"A higher clock speed is required"}]'::jsonb,
  ARRAY['B']::text[],
  'Phần cứng chuyên dụng cho Machine Learning (như TPU, GPU) thường sử dụng định dạng độ chính xác thấp hơn (ít bit hơn như FP16, INT8, BF16) để tối ưu hóa tính toán ma trận, tăng tốc độ xử lý và tiết kiệm băng thông bộ nhớ.',
  'AI Hardware',
  ARRAY['Hardware', 'Machine Learning', 'Quantization']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-5',
  'istqb-ai',
  5,
  'Which TWO of the below examples of systems BEST describe regression?
1. Predicting the age of a person
2. Predicting if someone is aged over 18
3. Predicting how much fuel is required for a journey
4. Predicting whether a release will pass all required tests',
  '[{"key":"A","text":"1, 3"},{"key":"B","text":"1, 4"},{"key":"C","text":"2, 3"},{"key":"D","text":"1, 2"}]'::jsonb,
  ARRAY['A']::text[],
  'Kiểm thử biến đổi hình thái (Metamorphic testing) dựa trên việc xác định mối quan hệ biến đổi (Metamorphic Relations - MR) giữa các đầu vào và đầu ra của nhiều lần chạy. Kỹ thuật này giải quyết triệt để ''Bài toán Oracle kiểm thử'' (Test Oracle Problem) khi không có kết quả kỳ vọng chính xác.',
  'ML Fundamentals',
  ARRAY['Regression', 'Classification', 'Supervised Learning']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-6',
  'istqb-ai',
  6,
  'Which of the following statements about bias in AI-based systems is MOST correct?',
  '[{"key":"A","text":"Inappropriate bias is caused by overweighting of particular classes in algorithms"},{"key":"B","text":"Inappropriate bias is caused by data used for training not being representative of the real world"},{"key":"C","text":"Inappropriate bias only affects ML systems that process data about people"},{"key":"D","text":"Inappropriate bias can be caused by aspects of the algorithm or the data"}]'::jsonb,
  ARRAY['B']::text[],
  'Nhiễu dữ liệu (Data noise) đề cập đến dữ liệu chứa lỗi, giá trị ngoại lệ (outliers) hoặc thông tin không liên quan/không chính xác, có thể làm biến dạng quá trình huấn luyện mô hình.',
  'Ethics & Bias',
  ARRAY['Bias', 'Sample Bias', 'Data Quality']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-7',
  'istqb-ai',
  7,
  'Which of the below is NOT a characteristic that makes it difficult to use AI-based systems?',
  '[{"key":"A","text":"Complexity"},{"key":"B","text":"Lack of standards"},{"key":"C","text":"Lack of robustness"},{"key":"D","text":"Lack of transparency"}]'::jsonb,
  ARRAY['C']::text[],
  'Kiểm thử dựa trên mô hình (Model-Based Testing - MBT) giúp tự động hóa việc tạo kịch bản kiểm thử từ các mô hình thiết kế hệ thống, giúp giảm đáng kể công sức tạo test case thủ công.',
  'Quality Characteristics',
  ARRAY['Characteristics', 'Transparency', 'Complexity']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-8',
  'istqb-ai',
  8,
  'Which of the following options BEST describes an example of reinforcement learning?',
  '[{"key":"A","text":"A house cleaning robot adjusts the path it takes on a daily basis based on the most efficient route and the amount of dirt it is able to remove."},{"key":"B","text":"A financial system that chooses which stocks to buy regularly optimizes based on new changes in stock price to improve its performance."},{"key":"C","text":"An image recognition system regularly searches the internet to find new examples to add to its training data."},{"key":"D","text":"A health warning system uses data from thousands of people to predict who is most likely to suffer from a particular health condition based on their behavior."}]'::jsonb,
  ARRAY['A']::text[],
  'Exploratory Data Analysis (EDA - Phân tích dữ liệu khám phá) là quá trình sơ bộ dùng các kỹ thuật thống kê và biểu đồ để hiểu cấu trúc dữ liệu, phát hiện bất thường và tìm ra mối quan hệ giữa các biến trước khi huấn luyện.',
  'ML Fundamentals',
  ARRAY['Reinforcement Learning', 'Reward Function', 'Agent']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-9',
  'istqb-ai',
  9,
  'Which ONE of the following statements is MOST true in relation to A/B testing?',
  '[{"key":"A","text":"Many test cases can be generated"},{"key":"B","text":"The purpose is to detect defects"},{"key":"C","text":"Production data is not used"},{"key":"D","text":"The purpose is to compare two variants of a system"}]'::jsonb,
  ARRAY['D']::text[],
  'Sự phụ thuộc vào dữ liệu huấn luyện (Training data dependency) khiến hệ thống AI có nguy cơ kế thừa rủi ro định kiến (bias), dữ liệu bị gán nhãn sai hoặc thiếu dữ liệu đại diện.',
  'Test Techniques',
  ARRAY['A/B Testing', 'Production Testing', 'System Variants']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-10',
  'istqb-ai',
  10,
  'Which ONE of the following statements provides the BEST description of the AI effect?',
  '[{"key":"A","text":"As AI systems improve, the likelihood of reaching the technological singularity increases."},{"key":"B","text":"AI systems get better over time as they are exposed to more data."},{"key":"C","text":"The systems used to play chess against human experts in the 1990''s are no longer considered AI."},{"key":"D","text":"AI systems increasingly behave like humans."}]'::jsonb,
  ARRAY['C']::text[],
  'Học có giám sát (Supervised learning) sử dụng dữ liệu đã được gán nhãn sẵn (labeled data) gồm cả thuộc tính đầu vào (features) và kết quả mục tiêu (labels) để huấn luyện mô hình.',
  'AI Concepts',
  ARRAY['AI Effect', 'AI History', 'Perception']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-11',
  'istqb-ai',
  11,
  'While measuring the test coverage of a neural network, a test engineer wants to measure the number of neurons that have each output two activation function results with a minimum difference between the two results of 0.5. Which ONE of the below coverage measures would achieve that goal?',
  '[{"key":"A","text":"Neuron coverage"},{"key":"B","text":"Value-change coverage"},{"key":"C","text":"Sign-change coverage"},{"key":"D","text":"None of the coverage measures"}]'::jsonb,
  ARRAY['B']::text[],
  'Độ chênh lệch quá lớn giữa kết quả trên tập huấn luyện (training error rất thấp) và tập kiểm thử (test error rất cao) là dấu hiệu điển hình của hiện tượng Overfitting (Học quá trình / Quá khớp).',
  'Coverage Criteria',
  ARRAY['Value-Change Coverage', 'Neural Network Coverage', 'White-Box Testing']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-12',
  'istqb-ai',
  12,
  'Which ONE of the below is MOST likely to be a challenge in ML data preparation?',
  '[{"key":"A","text":"The time and associated costs required"},{"key":"B","text":"Functional performance"},{"key":"C","text":"Designing a reward function"},{"key":"D","text":"Specification of acceptance criteria"}]'::jsonb,
  ARRAY['A']::text[],
  'Mô hình Phân loại (Classification) sắp xếp các đầu vào vào các lớp/danh mục hữu hạn định trước (ví dụ: Spam / Not Spam, Lành tính / Ác tính).',
  'Data Preparation',
  ARRAY['Data Preparation', 'Cost & Time', 'ML Pipeline']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-13',
  'istqb-ai',
  13,
  'You are evaluating the use of a highly accurate pre-trained model that is used widely in industry for a similar use case. There is an intention to apply transfer learning techniques to further customize the model. Which ONE of the following is the LEAST likely to be a significant risk with this approach?',
  '[{"key":"A","text":"The functional performance of the system may exhibit bias"},{"key":"B","text":"The system may be vulnerable to adversarial attacks inherited from the pre-trained model"},{"key":"C","text":"Differences in data preparation steps between the training of the pre-trained model and consequent use of the model may result in reduced functional performance"},{"key":"D","text":"The functional performance of the pre-trained model could be lower than stakeholders expect"}]'::jsonb,
  ARRAY['D']::text[],
  'Kiểm thử đối kháng (Adversarial testing) cố tình tạo ra các nhiễu nhỏ không đáng kể đối với con người (Adversarial examples) để kiểm tra xem mô hình AI có bị lừa dẫn đến dự đoán sai lệch hay không.',
  'Transfer Learning',
  ARRAY['Transfer Learning', 'Risk Analysis', 'Pre-trained Models']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-14',
  'istqb-ai',
  14,
  'Which ONE of the below is NOT likely to cause a data quality issue affecting a single ML model?',
  '[{"key":"A","text":"Security issues"},{"key":"B","text":"Hardware issues"},{"key":"C","text":"Incorrect weights"},{"key":"D","text":"Faulty sensors"}]'::jsonb,
  ARRAY['C']::text[],
  'Tính giải thích được (Explainability) là khả năng hệ thống AI cung cấp các lý do hoặc giải thích mà con người có thể hiểu được cho các quyết định hoặc dự đoán của nó.',
  'Data Quality',
  ARRAY['Data Quality', 'Model Weights', 'Sensors']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-15',
  'istqb-ai',
  15,
  'The following confusion matrix represents the functional performance of a classifier.

Predicted Positive: TP = 60, FP = 20
Predicted Negative: FN = 9, TN = 11

Which ONE of the following is the correct calculation for the accuracy of the classifier?',
  '[{"key":"A","text":"60 / (60 + 20) * 100% = 75%"},{"key":"B","text":"60 / (60 + 9) * 100% = 87%"},{"key":"C","text":"2 * (60 / (60 + 20) * 60 / (60 + 9)) / (60 / (60 + 20) + 60 / (60 + 9)) * 100% = 80%"},{"key":"D","text":"(60 + 11) / (60 + 11 + 20 + 9) * 100% = 71%"}]'::jsonb,
  ARRAY['D']::text[],
  'Recall (Độ nhạy / Tỷ lệ phát hiện) = TP / (TP + FN). Trong y tế, Recall cao đảm bảo tối thiểu hóa số ca bệnh bị bỏ sót (FN).',
  'Model Metrics',
  ARRAY['Confusion Matrix', 'Accuracy', 'Metrics']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-16',
  'istqb-ai',
  16,
  'Which ONE of the following requirements for an AI-based system is MOST likely to cause a challenge for testing?',
  '[{"key":"A","text":"The system should be able to accept natural language input on a variety of topics and respond correctly"},{"key":"B","text":"The system should respond more quickly than the system it is replacing"},{"key":"C","text":"The system should be 100% accurate with no tolerance for failure"},{"key":"D","text":"The system should not require human intervention until a specific failure scenario is encountered"}]'::jsonb,
  ARRAY['A']::text[],
  'Học không giám sát (Unsupervised learning) tự động tìm kiếm các mẫu, cấu trúc ẩn hoặc gom nhóm (clustering) trong dữ liệu mà KHÔNG cần nhãn mục tiêu cho trước.',
  'Testing Challenges',
  ARRAY['Oracle Problem', 'NLP', 'Testability']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-17',
  'istqb-ai',
  17,
  'A data scientist is performing unsupervised learning on a set of financial records relating to previous loan applications, and trying to predict defaults on future loans. They are reporting poor functional performance because of data issues. Which ONE of the below is LEAST likely to be a contributory factor?',
  '[{"key":"A","text":"Missing records for some accounts"},{"key":"B","text":"Missing data relating to whether loans were previously granted and repaid"},{"key":"C","text":"Inconsistent pre-processing of some records"},{"key":"D","text":"Irrelevant data included in the account records"}]'::jsonb,
  ARRAY['D']::text[],
  'Trong kiểm thử đường biên/ngưỡng activation (Threshold coverage), mục tiêu là xác định xem các neuron có vượt qua ngưỡng kích hoạt nhất định hay không.',
  'Data Preparation',
  ARRAY['Data Issues', 'Unsupervised Learning', 'Preprocessing']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-18',
  'istqb-ai',
  18,
  'Which ONE of the following is a factor associated with the test data that can create challenges specific to testing AI-based systems?',
  '[{"key":"A","text":"Obtaining data from public benchmark datasets"},{"key":"B","text":"Obtaining data that has not been pre-processed by the system under test."},{"key":"C","text":"Manual creation of test data"},{"key":"D","text":"Obtaining appropriate data from users"}]'::jsonb,
  ARRAY['D']::text[],
  'Khái niệm Concept Drift (Trôi lệch khái niệm) xảy ra khi mối quan hệ thống kê giữa dữ liệu đầu vào và thuộc tính mục tiêu thay đổi theo thời gian trong môi trường thực tế.',
  'Data Acquisition',
  ARRAY['Test Data', 'User Data', 'Privacy']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-19',
  'istqb-ai',
  19,
  'An ML engineer performing supervised learning needs to label images of football games based on the location of the football in the image. Which ONE of the below labeling approaches can be used?',
  '[{"key":"A","text":"Internal"},{"key":"B","text":"Annotation"},{"key":"C","text":"Augmentation"},{"key":"D","text":"Benchmarking"}]'::jsonb,
  ARRAY['B']::text[],
  'Data Leakage (Rò rỉ dữ liệu) xảy ra khi thông tin từ tập kiểm thử (test set) vô tình lộ vào tập huấn luyện (training set), khiến kết quả đánh giá mô hình cao một cách ảo tưởng.',
  'Data Preparation',
  ARRAY['Annotation', 'Data Labeling', 'Computer Vision']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-20',
  'istqb-ai',
  20,
  'Which ONE of the following statements about a system MOST describes an autonomous system?',
  '[{"key":"A","text":"A loan approval system that can continue to process loan applications indefinitely, within a defined amount of aggregate credit, until an operator reduces the amount of aggregate credit available."},{"key":"B","text":"A self-driving car that automatically stops the car if the driver is not responding to voice prompts, in order to ensure they are awake."},{"key":"C","text":"A chatbot that learns the most effective responses to humans (in order to ensure the humans continue to converse) based on prior experiences."},{"key":"D","text":"A fraud detection system that alerts operators when it sees a specific fraud risk associated with a transaction, in order to obtain human input to make a final decision."}]'::jsonb,
  ARRAY['B']::text[],
  'Thuật toán k-NN (k-Nearest Neighbors) phân loại một điểm dữ liệu dựa trên lớp của k điểm dữ liệu gần nhất với nó trong không gian thuộc tính.',
  'Quality Characteristics',
  ARRAY['Autonomy', 'Self-Driving', 'Safety']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-21',
  'istqb-ai',
  21,
  'A test engineer is planning testing for a wearable medical device using AI. The medical device will detect possible heart issues in patients and dispatch emergency services automatically. It is not expected that many patients will have heart issues, and this is reflected in the available data. In this case, it is decided it is more important that emergency services are not sent un-necessarily, than it is to detect actual heart problems.

Which ONE of the following metrics should the test engineer choose to ensure that the emergency services are sent only when needed?',
  '[{"key":"A","text":"Accuracy"},{"key":"B","text":"MSE"},{"key":"C","text":"R-Squared"},{"key":"D","text":"Precision"}]'::jsonb,
  ARRAY['D']::text[],
  'Học tăng cường (Reinforcement Learning) dựa trên cơ chế Tác nhân (Agent) tương tác với Môi trường (Environment), nhận Phần thưởng (Reward) hoặc Hình phạt (Penalty) để học chính lược tối ưu.',
  'Model Metrics',
  ARRAY['Precision', 'False Positives', 'Medical Systems']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-22',
  'istqb-ai',
  22,
  'A test engineer is planning the best functional performance metrics to evaluate an unsupervised learning model. The model groups data points based on their similarity. The test engineer wants to measure how similar the data points in each group actually are.

Which is the MOST likely metric they should use?',
  '[{"key":"A","text":"ROC"},{"key":"B","text":"Intra-cluster"},{"key":"C","text":"AUC"},{"key":"D","text":"Recall"}]'::jsonb,
  ARRAY['B']::text[],
  'Định kiến mẫu (Sample bias / Selection bias) xảy ra khi dữ liệu huấn luyện không đại diện đúng cho phân phối dữ liệu thực tế mà hệ thống sẽ gặp phải khi vận hành.',
  'Model Metrics',
  ARRAY['Intra-Cluster Distance', 'Clustering Metrics', 'Unsupervised Learning']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-23',
  'istqb-ai',
  23,
  'You are conducting a user acceptance test of a decision-support recommendation system used in a data processing business. In addition to testing the functional performance of the recommendation systems, what else would you be MOST likely to test?',
  '[{"key":"A","text":"The number of inaccurate recommendations per day"},{"key":"B","text":"The amount of system resources consumed by each recommendation"},{"key":"C","text":"The number of accurate recommendations per day"},{"key":"D","text":"The accuracy of the human decision when presented with an inaccurate recommendation"}]'::jsonb,
  ARRAY['B']::text[],
  'Tính minh bạch (Transparency) liên quan đến mức độ mà các thông tin về kiến trúc mô hình, thuật toán và dữ liệu huấn luyện được công khai và truy cập được.',
  'Acceptance Testing',
  ARRAY['UAT', 'Decision Support', 'Performance']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-24',
  'istqb-ai',
  24,
  'Which ONE of the following statements BEST describes a testing challenge that specifically applied to a self-learning system?',
  '[{"key":"A","text":"When systems change themselves the results of previously passing tests may change"},{"key":"B","text":"It is necessary to test whether the system will relinquish control to a human at the right time"},{"key":"C","text":"External data sources might be required to ensure that the system is unbiased"},{"key":"D","text":"It can be difficult to explain the link between test inputs and outputs"}]'::jsonb,
  ARRAY['A']::text[],
  'Nhiễu hạt đối kháng (Adversarial perturbation) là những thay đổi cực nhỏ được thêm vào dữ liệu đầu vào nhằm cố tình làm mô hình AI dự đoán sai.',
  'Testing Challenges',
  ARRAY['Self-Learning', 'Regression', 'Non-determinism']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-25',
  'istqb-ai',
  25,
  'Which ONE of the below statements BEST describes how combinatorial testing can be applied to AI-based systems?',
  '[{"key":"A","text":"Each neuron can be treated as a parameter for pairwise tests"},{"key":"B","text":"Two variants of the system can be used and compared"},{"key":"C","text":"Inputs to the system and environment factors can be considered parameters for pairwise tests"},{"key":"D","text":"Combinatorial testing cannot yet be applied to AI"}]'::jsonb,
  ARRAY['C']::text[],
  'Kiểm thử Back-to-Back so sánh đầu ra của hai hoặc nhiều phiên bản mô hình (hoặc hệ thống) khác nhau trên cùng một tập dữ liệu đầu vào.',
  'Test Techniques',
  ARRAY['Combinatorial Testing', 'Pairwise', 'Test Generation']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-26',
  'istqb-ai',
  26,
  'You have been asked for your opinion on the ML approach to be used for a new age verification system. A training dataset is available with many pictures of faces and the subject''s age. When new users sign-up to a mobile app, they have to take a picture of their face. If the system believes they are under 18 years old it will ask them to provide a picture of their passport to prove their age.

Which ONE of the following approaches do you expect to be MOST likely to succeed?',
  '[{"key":"A","text":"Unsupervised learning that identifies clusters in training data that relate to people''s ages."},{"key":"B","text":"Supervised learning classification system that is re-trained based on new data, including whether they later provided ID that showed they were over 18."},{"key":"C","text":"Supervised learning regression system that is re-trained based on new data, including whether they provided ID that showed their age."},{"key":"D","text":"Reinforcement learning classification system with a reward function of correct behavior."}]'::jsonb,
  ARRAY['B']::text[],
  'Độ chính xác tổng thể (Accuracy) = (TP + TN) / (TP + TN + FP + FN). Tính tỷ lệ dự đoán đúng trên tổng số mẫu.',
  'ML Approaches',
  ARRAY['Supervised Learning', 'Classification', 'Continuous Training']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-27',
  'istqb-ai',
  27,
  'Which ONE of the following statements is MOST true about black-box adversarial testing?',
  '[{"key":"A","text":"The algorithm used for the model is known to the tester"},{"key":"B","text":"The approach relies on the transferability of the attacks"},{"key":"C","text":"The training data is manipulated"},{"key":"D","text":"Combinatorial testing techniques are used"}]'::jsonb,
  ARRAY['B']::text[],
  'Hàm mất mát (Loss function) đo lường mức độ sai lệch giữa dự đoán của mô hình và giá trị thực tế trong quá trình huấn luyện.',
  'Adversarial Testing',
  ARRAY['Adversarial Testing', 'Black-Box', 'Transferability']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-28',
  'istqb-ai',
  28,
  'A facial recognition system is being deployed at airports in order to scan passengers'' faces and compare them to a database of vaccinations, in order to identify unvaccinated passengers in a pandemic. There are a number of components involved including cameras, a model to segment the image, and a model to identify the face and match it against a known photograph. It is important that there are few false negatives, and that passengers cannot subvert the system.

Which ONE of the following types of testing is the MOST appropriate options for the tests you would choose in system testing?',
  '[{"key":"A","text":"Testing for concept drift"},{"key":"B","text":"Adversarial testing"},{"key":"C","text":"Testing for explainability"},{"key":"D","text":"Testing for transparency"}]'::jsonb,
  ARRAY['B']::text[],
  'Trọng số (Weights) trong mạng nơ-ron điều chỉnh độ mạnh yếu của kết nối giữa các neuron và được cập nhật liên tục trong quá trình Lan truyền ngược (Backpropagation).',
  'Adversarial Testing',
  ARRAY['Adversarial Testing', 'Security', 'Subversion']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-29',
  'istqb-ai',
  29,
  'Which ONE of the following statements BEST describes how system complexity can cause challenges when testing an AI-based system?',
  '[{"key":"A","text":"Obtaining test data is harder"},{"key":"B","text":"It is necessary to measure how changes in the test inputs cause changes in the test outputs"},{"key":"C","text":"Unexpected changes in system behavior can occur"},{"key":"D","text":"Sometimes the system can only be tested as a black-box"}]'::jsonb,
  ARRAY['C']::text[],
  'Mô hình hồi quy (Regression model) được sử dụng để dự đoán các giá trị số liên tục (continuous values) như giá nhà, nhiệt độ, doanh thu.',
  'Testing Challenges',
  ARRAY['System Complexity', 'Non-linear', 'Emergent Behavior']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-30',
  'istqb-ai',
  30,
  'You are a test manager planning testing for an invoice financing company. The company buys unpaid invoices from companies and provides them with immediate cash. The company is replacing their existing conventional system, which takes company accounting records as inputs, with an ML system that classifies each invoice for sales as something that should, or should not be bought. Significant historical production data is available. It is important that invoices are not bought incorrectly.

Which ONE of the following test techniques would be MOST appropriate for you to plan for system testing?',
  '[{"key":"A","text":"A/B testing"},{"key":"B","text":"Back-to-back testing"},{"key":"C","text":"Metamorphic testing"},{"key":"D","text":"Experience-based testing"}]'::jsonb,
  ARRAY['B']::text[],
  'Tính tự chủ (Autonomy) là khả năng của hệ thống AI thực hiện các hành động và đưa ra quyết định mà không cần sự can thiệp trực tiếp của con người.',
  'Test Techniques',
  ARRAY['Back-to-Back Testing', 'Legacy Comparison', 'System Testing']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-31',
  'istqb-ai',
  31,
  'Which ONE of the below types of testing is NOT a type of experience-based testing applied to an AI-based system?',
  '[{"key":"A","text":"Exploring training data to understand its variety, patterns, structure and shape - then using that to inform testing"},{"key":"B","text":"Usability testing of the format of the output predictions"},{"key":"C","text":"Using knowledge about previous ML systems to identify potential biases"},{"key":"D","text":"Using an industry checklist to assess the steps used to prepare an ML system"}]'::jsonb,
  ARRAY['D']::text[],
  'Bài toán Oracle kiểm thử (Test Oracle Problem) xuất hiện khi rất khó hoặc không thể xác định chính xác kết quả kỳ vọng cho một đầu vào kiểm thử nhất định.',
  'Test Techniques',
  ARRAY['Experience-Based Testing', 'Checklist Testing', 'Test Design']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-32',
  'istqb-ai',
  32,
  'A robotic AI-based system is being built by a logistics company to operate within its unmanned warehouses. The warehouses can all be very different and new ones are being added each year. It is expected that the system will not require retraining for each warehouse, and will be able to learn the location of different items and move them to specified locations on request.

Which ONE of the following attributes should be MOST carefully considered when specifying the objectives and acceptance criteria for the system?',
  '[{"key":"A","text":"Inappropriate bias"},{"key":"B","text":"Adaptability"},{"key":"C","text":"Ethics"},{"key":"D","text":"Explainability"}]'::jsonb,
  ARRAY['B']::text[],
  'Data Augmentation (Tăng cường dữ liệu) tạo ra các mẫu dữ liệu huấn luyện mới bằng cách biến đổi dữ liệu hiện có (xoay, lật, thay đổi độ sáng, thêm nhiễu).',
  'Quality Characteristics',
  ARRAY['Adaptability', 'Robotics', 'Acceptance Criteria']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-33',
  'istqb-ai',
  33,
  'Which ONE of the below statements BEST describes why test environments for autonomous systems might need to be different to other test environments?',
  '[{"key":"A","text":"Tools may be required to simulate extreme scenarios"},{"key":"B","text":"Non-determinism may need to be introduced into the environment"},{"key":"C","text":"AI-specific hardware may be required"},{"key":"D","text":"Tools may be required to provide explanations of system behavior"}]'::jsonb,
  ARRAY['A']::text[],
  'Xung đột nhãn (Label noise / Mislabeling) xảy ra khi cùng một dữ liệu đầu vào nhưng bị gán các nhãn khác nhau do lỗi của người gán nhãn.',
  'Test Environment',
  ARRAY['Test Environment', 'Simulation', 'Autonomous Systems']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-34',
  'istqb-ai',
  34,
  'Which ONE of the following would be the LEAST effective input to an AI-based test optimization process?',
  '[{"key":"A","text":"Previously failing tests"},{"key":"B","text":"Defect reports"},{"key":"C","text":"Test environment downtime"},{"key":"D","text":"Source control data"}]'::jsonb,
  ARRAY['C']::text[],
  'Kiểm thử A/B (A/B Testing) so sánh hai phiên bản mô hình trực tiếp trên hai nhóm người dùng thực tế để đánh giá hiệu năng kinh doanh hoặc trải nghiệm người dùng.',
  'AI for Testing',
  ARRAY['Test Optimization', 'Defect Prediction', 'Metrics']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-35',
  'istqb-ai',
  35,
  'Which ONE of the following statements is true about dynamic testing for inappropriate bias?',
  '[{"key":"A","text":"It can be necessary to obtain additional attributes about the data being processed"},{"key":"B","text":"Reviewing the source of the training data can reveal inappropriate bias"},{"key":"C","text":"Inappropriate bias only needs to be tested when protected characteristics such as race and gender are present in the inputs"},{"key":"D","text":"Testing should never be conducted in production"}]'::jsonb,
  ARRAY['A']::text[],
  'Lớp ẩn (Hidden layer) trong mạng nơ-ron sâu trích xuất các đặc trưng trung gian phức tạp từ dữ liệu đầu vào trước khi chuyển đến lớp đầu ra.',
  'Ethics & Bias',
  ARRAY['Dynamic Testing', 'Fairness Metrics', 'Bias Detection']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-36',
  'istqb-ai',
  36,
  'Which ONE of the following options for a test basis would give the LEAST coverage when using AI-based test generation?',
  '[{"key":"A","text":"A test model describing the application functionality"},{"key":"B","text":"A list of possible web pages that comprise the application"},{"key":"C","text":"A pseudo-oracle"},{"key":"D","text":"An XML schema"}]'::jsonb,
  ARRAY['D']::text[],
  'Overfitting xảy ra khi mô hình quá phức tạp, ghi nhớ cả nhiễu trong tập huấn luyện nên mất khả năng tổng quát hóa (generalization) trên dữ liệu mới.',
  'AI for Testing',
  ARRAY['Test Generation', 'Test Basis', 'Coverage']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-37',
  'istqb-ai',
  37,
  'Which ONE of the following would be the MOST effective input to an AI-based defect prediction tool?',
  '[{"key":"A","text":"Developers associated with previous code changes"},{"key":"B","text":"Cyclomatic complexity"},{"key":"C","text":"Lines of code changed"},{"key":"D","text":"Commit size"}]'::jsonb,
  ARRAY['B']::text[],
  'Precision (Độ chuẩn xác) = TP / (TP + FP). Đo lường tỷ lệ mẫu dự đoán Tích cực thực sự là Tích cực.',
  'AI for Testing',
  ARRAY['Defect Prediction', 'Cyclomatic Complexity', 'Code Quality']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-38',
  'istqb-ai',
  38,
  'In which ONE of the following situations would an ML model be MOST effective at determining the criticality of new defects?',
  '[{"key":"A","text":"A new application which is in the early stages of the first test cycle"},{"key":"B","text":"An old application with lots of defect records but a brand new development and test team"},{"key":"C","text":"An old application where defect records are linked to failed tests and production incidents"},{"key":"D","text":"An old application with few critical defect records and many non-critical defect records"}]'::jsonb,
  ARRAY['C']::text[],
  'F1-Score là trung bình điều hòa (harmonic mean) giữa Precision và Recall: 2 * (Precision * Recall) / (Precision + Recall).',
  'AI for Testing',
  ARRAY['Defect Classification', 'Historical Data', 'Defect Criticality']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-39',
  'istqb-ai',
  39,
  'Which of the below TWO examples of AI system behavior are reward hacking:
1. An AI medical device intended to keep a patient stable may give the patient a treatment that means they recover less quickly.
2. An AI system intended to maximize production of a commodity by weight allows quality and size of product to reduce.
3. An AI system intended to ensure the output of a factory process is always sorted correctly, destroys the outputs.
4. An AI system intended to remove security vulnerabilities from software code, removes all functionality that has security vulnerabilities.',
  '[{"key":"A","text":"1, 2"},{"key":"B","text":"1, 3"},{"key":"C","text":"3, 4"},{"key":"D","text":"2, 4"}]'::jsonb,
  ARRAY['A']::text[],
  'Độ tin cậy (Robustness) của hệ thống AI là khả năng duy trì mức độ hiệu năng ổn định ngay cả khi gặp đầu vào bất thường, bị nhiễu hoặc không hợp lệ.',
  'Quality Characteristics',
  ARRAY['Reward Hacking', 'Reinforcement Learning', 'Side Effects']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-40',
  'istqb-ai',
  40,
  'A neural network has been designed and created to assist day-traders improve efficiency when buying and selling commodities in a rapidly changing market. Suppose the test team executes a test on the neural network where each neuron is examined. For this network the shortest path indicates a buy, and it will only occur when the one-day predicted value of the commodity is greater than the spot price by 0.75%. The neurons are stimulated by entering commodity prices and testers verify that they activate only when the future value exceeds the spot price by at least 0.75%.

Which of the following statements BEST explains the type of coverage being tested on the neural network?',
  '[{"key":"A","text":"Threshold coverage"},{"key":"B","text":"Neuron coverage"},{"key":"C","text":"Sign-change coverage"},{"key":"D","text":"Value-change coverage"}]'::jsonb,
  ARRAY['A']::text[],
  'Hiện tượng Reward Hacking trong Học tăng cường xảy ra khi Tác nhân lợi dụng lỗ hổng trong thiết kế hàm thưởng để đạt điểm số cao mà không thực hiện đúng mục tiêu ban đầu.',
  'Coverage Criteria',
  ARRAY['Threshold Coverage', 'White-Box Testing', 'Neural Networks']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-41',
  'istqb-ai',
  41,
  'Which of the following is one of the reasons for data mislabeling?',
  '[{"key":"A","text":"Lack of domain knowledge"},{"key":"B","text":"Expert knowledge"},{"key":"C","text":"Interoperability error"},{"key":"D","text":"Small datasets"}]'::jsonb,
  ARRAY['A']::text[],
  'Thiếu kiến thức chuyên môn về lĩnh vực (Lack of domain knowledge) của người gán nhãn là nguyên nhân hàng đầu dẫn đến việc gán nhãn sai (data mislabeling).',
  'Data Preparation',
  ARRAY['Data Labeling', 'Data Quality', 'Human Factors']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-42',
  'istqb-ai',
  42,
  'You have access to the training data that was used to train an AI-based system. You can review this information and use it as a guideline when creating your tests. What type of characteristic is this?',
  '[{"key":"A","text":"Autonomy"},{"key":"B","text":"Explorability"},{"key":"C","text":"Transparency"},{"key":"D","text":"Accessibility"}]'::jsonb,
  ARRAY['C']::text[],
  'Tính minh bạch (Transparency) cho phép kiểm thử viên xem xét, đánh giá cấu trúc mô hình, dữ liệu huấn luyện và quy trình đưa ra quyết định.',
  'Quality Characteristics',
  ARRAY['Transparency', 'Data Access', 'Explainability']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-43',
  'istqb-ai',
  43,
  'Which of the following is a problem with AI-generated test cases that are generated from the requirements?',
  '[{"key":"A","text":"They are slow and will usually not be able to execute in the time allowed"},{"key":"B","text":"They are defect prone because they are unable to detect nuances in the requirements"},{"key":"C","text":"They make debugging more complicated because the number of steps is usually high in order to induce the target failure"},{"key":"D","text":"They are usually missing the expected results, so verification is difficult or must resort to only detecting significant failures"}]'::jsonb,
  ARRAY['D']::text[],
  'Tự động sinh test case từ yêu cầu bằng AI thường gặp bài toán thiếu Expected Results (Test Oracle), dẫn đến khó khăn khi xác minh Pass/Fail tự động.',
  'AI for Testing',
  ARRAY['Test Generation', 'Test Oracle', 'Requirements']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-44',
  'istqb-ai',
  44,
  'You are testing an autonomous vehicle which uses AI to determine proper driving actions and responses. You have evaluated the parameters and combinations to be tested and have determined that there are too many to test in the time allowed.

It has been suggested that you use pairwise testing to limit the parameters. Given the complexity of the software under test, what is likely the outcome from using pairwise testing?',
  '[{"key":"A","text":"The number of parameters to test can be reduced to less than a dozen"},{"key":"B","text":"All high priority defects will be identified using this method"},{"key":"C","text":"While the number of tests needed can be reduced, there may still be a large enough set of tests that automation will be required to execute all of them"},{"key":"D","text":"Pairwise cannot be applied to this problem because there is AI involved and the evolving values may result in unexpected results that cannot be verified"}]'::jsonb,
  ARRAY['C']::text[],
  'Pairwise testing giúp giảm số lượng tổ hợp tham số, nhưng trong các hệ thống phức tạp như xe tự lái, tập test case còn lại vẫn rất lớn và bắt buộc phải tự động hóa.',
  'Test Techniques',
  ARRAY['Pairwise Testing', 'Autonomous Driving', 'Test Automation']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-45',
  'istqb-ai',
  45,
  'Which of the following aspects in a challenge when handling test data for an AI-based system?',
  '[{"key":"A","text":"Personal data or confidential data"},{"key":"B","text":"Output data or intermediate data"},{"key":"C","text":"Video frame speed or aspect ratio"},{"key":"D","text":"Data frameworks or machine learning frameworks"}]'::jsonb,
  ARRAY['A']::text[],
  'Bảo mật thông tin cá nhân và dữ liệu riêng tư (Personal / Confidential data) là thách thức lớn nhất khi thu thập dữ liệu kiểm thử thực tế.',
  'Data Acquisition',
  ARRAY['Test Data', 'Privacy', 'Compliance']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-46',
  'istqb-ai',
  46,
  'An e-commerce developer built an application for automatic classification of online products in order to allow customers to select products faster. The goal is to provide more relevant products to the user based on prior purchases.

Which of the following factors is necessary for a supervised machine learning algorithm to be successful?',
  '[{"key":"A","text":"Labeling the data correctly"},{"key":"B","text":"Minimizing the amount of time spent training the algorithm"},{"key":"C","text":"Selecting the correct data pipeline for the ML training"},{"key":"D","text":"Grouping similar products together before feeding them into the algorithm"}]'::jsonb,
  ARRAY['A']::text[],
  'Học có giám sát (Supervised learning) phụ thuộc hoàn toàn vào việc gán nhãn dữ liệu chính xác (Correct labeling) để tính toán loss và cập nhật mô hình.',
  'ML Fundamentals',
  ARRAY['Supervised Learning', 'Data Labeling', 'Ground Truth']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-47',
  'istqb-ai',
  47,
  'A beer company is trying to understand how much recognition its logo has in the market. It plans to do that by monitoring images on various social media platforms using a pre-trained neural network for logo detection. This particular model has been trained by looking for words, as well as matching colors on social media images. The company logo has a big word across the middle with a bold blue end magenta border.

Which associated risk is most likely to occur when using this pre-trained model?',
  '[{"key":"A","text":"There is no risk, as the model has already been trained"},{"key":"B","text":"Insufficient function; the model was not trained to check for colors or words"},{"key":"C","text":"Improper data preparation"},{"key":"D","text":"Inherited bias; the model could have inherited unknown defects"}]'::jsonb,
  ARRAY['D']::text[],
  'Sử dụng mô hình huấn luyện sẵn (Pre-trained model) có rủi ro cao về Định kiến kế thừa (Inherited bias) từ tập dữ liệu của bên thứ ba.',
  'Transfer Learning',
  ARRAY['Pre-trained Models', 'Inherited Bias', 'Risk Management']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-48',
  'istqb-ai',
  48,
  'An engine manufacturing facility wants to apply machine learning to detect faulty bolts. Which of the following would result in bias in the model?',
  '[{"key":"A","text":"Selecting training data by purposely excluding specific faulty conditions"},{"key":"B","text":"Selecting training data by purposely including all known faulty conditions."},{"key":"C","text":"Selecting testing data from a different dataset than the training dataset"},{"key":"D","text":"Selecting testing data from a boat manufacturer''s bolt longevity data"}]'::jsonb,
  ARRAY['A']::text[],
  'Loại bỏ cố ý các trường hợp lỗi cụ thể khỏi tập dữ liệu huấn luyện sẽ gây ra Định kiến mẫu (Sample bias), làm mô hình không thể nhận diện lỗi đó khi chạy thực tế.',
  'Ethics & Bias',
  ARRAY['Sample Bias', 'Training Data', 'Fault Detection']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-49',
  'istqb-ai',
  49,
  'Which of the following is an example of a clustering problem that can be resolved by unsupervised learning?',
  '[{"key":"A","text":"Associating shoppers with their shopping tendencies"},{"key":"B","text":"Grouping individual fish together based on their types of fins"},{"key":"C","text":"Classifying muffin purchases based on the perceived attractiveness of their packaging"},{"key":"D","text":"Estimating the expected purchase of cat food after a particularly successful ad campaign"}]'::jsonb,
  ARRAY['A']::text[],
  'Phân nhóm khách hàng dựa trên hành vi mua sắm mà không có nhãn trước là bài toán Gom cụm (Clustering) điển hình của Học không giám sát.',
  'ML Fundamentals',
  ARRAY['Unsupervised Learning', 'Clustering', 'Segmentation']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-50',
  'istqb-ai',
  50,
  'When verifying that an autonomous AI-based system is acting appropriately, which of the following are MOST important to include?',
  '[{"key":"A","text":"Test cases to verify that the system automatically confirms the correct classification of training data"},{"key":"B","text":"Test cases to detect the system appropriately automating its data input"},{"key":"C","text":"Test cases to detect the system prompting for unnecessary human intervention"},{"key":"D","text":"Test cases to verify that the system automatically suppresses invalid output data"}]'::jsonb,
  ARRAY['C']::text[],
  'Đối với hệ thống tự chủ, cần kiểm thử xem hệ thống có yêu cầu con người can thiệp không cần thiết (Unnecessary human intervention) hay không.',
  'Quality Characteristics',
  ARRAY['Autonomy', 'Human Handover', 'System Verification']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-51',
  'istqb-ai',
  51,
  'Which of the following is correct regarding the layers of a deep neural network?',
  '[{"key":"A","text":"There is only an input and output layer"},{"key":"B","text":"There is at least one internal hidden layer"},{"key":"C","text":"There must be a minimum of five total layers to be considered deep"},{"key":"D","text":"The output layer is not connected with the other layers to maintain integrity"}]'::jsonb,
  ARRAY['B']::text[],
  'Mạng nơ-ron sâu (Deep Neural Network) bắt buộc phải có ít nhất MỘT lớp ẩn nội bộ (hidden layer) nằm giữa lớp đầu vào và lớp đầu ra.',
  'Neural Networks',
  ARRAY['Hidden Layers', 'Deep Learning', 'Architecture']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-52',
  'istqb-ai',
  52,
  'Which of the following approaches would help overcome testing challenges associated with probabilistic and non-deterministic AI-based systems?',
  '[{"key":"A","text":"Run the test several times to ensure that the AI always returns the same correct test result"},{"key":"B","text":"Decompose the system test into multiple data ingestion tests to determine if the AI system is getting a sufficient volume of input data"},{"key":"C","text":"Decompose the system test into multiple data ingestion tests to determine if the AI system is getting precise and accurate input data"},{"key":"D","text":"Run the test several times to generate a statistically valid test result to ensure that an appropriate number of answers are accurate"}]'::jsonb,
  ARRAY['D']::text[],
  'Với hệ thống mang tính xác suất và không định tính (Non-deterministic), phương pháp kiểm thử chuẩn là chạy test nhiều lần để thu được kết quả có ý nghĩa thống kê (Statistically valid).',
  'Testing Challenges',
  ARRAY['Non-determinism', 'Statistical Testing', 'Probabilistic Output']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-53',
  'istqb-ai',
  53,
  'A startup company has implemented a new facial recognition system for a banking application for mobile devices. The application is intended to learn at run-time on the device to determine if the user should be granted access. It also sends feedback over the Internet to the application developers. The application deployment resulted in continuous restarts of the mobile devices.

Which of the following is the most likely cause of the failure?',
  '[{"key":"A","text":"The feedback requires a physical connection and cannot be sent over the Internet"},{"key":"B","text":"Mobile operating systems cannot process machine learning algorithms"},{"key":"C","text":"The size of the application is consuming too much of the phone''s storage capacity"},{"key":"D","text":"The training, processing, and diagnostic generation are too computationally intensive for the mobile device hardware to handle"}]'::jsonb,
  ARRAY['D']::text[],
  'Huấn luyện và suy luận mô hình trên thiết bị di động có thể gây cạn kệt tài nguyên phần cứng (CPU/GPU/RAM), dẫn đến ứng dụng bị quá tải và khởi động lại thiết bị.',
  'AI Hardware',
  ARRAY['Edge Computing', 'Mobile Hardware', 'Resource Exhaustion']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-54',
  'istqb-ai',
  54,
  'An airline has created a ML model to project fuel requirements for future flights. The model imports weather data such as wind speeds and temperatures, calculates flight routes based on historical routings from air traffic control, and estimates loads from average passenger and baggage weights. The model performed within an acceptable standard for the airline throughout the summer but as winter set in the load weights became less accurate. After some exploratory data analysis it became apparent that luggage weights were higher in the winter than in summer.

Which of the following statements BEST describes the problem and how it could have been prevented?',
  '[{"key":"A","text":"The model suffers from drift and therefore should be regularly tested to ensure that any occurrences of drift are detected soon enough for the problem to be mitigated"},{"key":"B","text":"The model suffers from drift and therefore the performance standard should be eased until a new model with more transparency can be developed"},{"key":"C","text":"The model suffers from corruption and therefore should be reloaded into the computer system being used, preferably with a method of version control to prevent further changes"},{"key":"D","text":"The model suffers from a lack of transparency and therefore should be regularly tested to ensure that any progressive errors are detected soon enough for the problem to be mitigated"}]'::jsonb,
  ARRAY['A']::text[],
  'Khi môi trường thực tế thay đổi theo mùa làm giảm độ chính xác, mô hình bị Concept Drift và cần được theo dõi định kỳ để phát hiện và tái huấn luyện (retrain).',
  'Model Maintenance',
  ARRAY['Concept Drift', 'Data Drift', 'Model Monitoring']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-55',
  'istqb-ai',
  55,
  'A wildlife conservation group would like to use a neural network to classify images of different animals. The algorithm is going to be used on a social media platform to automatically pick out pictures of the chosen animal of the month. This month''s animal is set to be a wolf. The test team has already observed that the algorithm could classify a picture of a dog as being a wolf because of the similar characteristics between dogs and wolves. To handle such instances, the team is planning to train the model with additional images of wolves and dogs so that the model is able to better differentiate between the two.

What test method should you use to verify that the model has improved after the additional training?',
  '[{"key":"A","text":"Metamorphic testing because the application domain is not clearly understood at this point"},{"key":"B","text":"Adversarial testing to verify that no incorrect images have been used in the training"},{"key":"C","text":"Pairwise testing using combinatorics to look at a long list of photo parameters"},{"key":"D","text":"Back-to-back testing using the version of the model before training and the new version of the model after being trained with additional images"}]'::jsonb,
  ARRAY['D']::text[],
  'Kiểm thử Back-to-Back so sánh đầu ra của phiên bản mô hình cũ và mô hình mới sau khi huấn luyện thêm để xác minh sự cải thiện.',
  'Test Techniques',
  ARRAY['Back-to-Back Testing', 'Model Comparison', 'Retraining']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-56',
  'istqb-ai',
  56,
  'A motorcycle engine repair shop over wants to detect a leaking exhaust valve and fix it before it fails and causes catastrophic damage to the engine. The shop developed and trained a predictive model with historical data files from known healthy engines and ones which experienced a catastrophic failure due to exhaust valve failure. The shop evaluated 200 engines using this model and then disassembled the engines to assess the true state of the valves, recording the results in the confusion matrix below.

Predicted Positive: TP = 90, FP = 10 (Total = 100)
Predicted Negative: FN = 1, TN = 99 (Total = 100)

What is the precision of this predictive model?',
  '[{"key":"A","text":"90.0%"},{"key":"B","text":"94.5%"},{"key":"C","text":"98.9%"},{"key":"D","text":"94.2%"}]'::jsonb,
  ARRAY['A']::text[],
  'Precision = TP / (TP + FP) = 90 / (90 + 10) = 90 / 100 = 90.0%.',
  'Model Metrics',
  ARRAY['Precision', 'Confusion Matrix', 'Metrics']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-57',
  'istqb-ai',
  57,
  'A mobile app start-up company is implementing an AI-based chat assistant for e-commerce customers. In the process of planning the testing, the team realizes that the specifications are insufficient.

Which testing approach should be used to test this system?',
  '[{"key":"A","text":"Exploratory testing"},{"key":"B","text":"Static analysis"},{"key":"C","text":"Equivalence partitioning"},{"key":"D","text":"State transition testing"}]'::jsonb,
  ARRAY['A']::text[],
  'Khi tài liệu tả kỹ thuật hoặc yêu cầu bị thiếu/chưa rõ ràng, Thử nghiệm khám phá (Exploratory testing) là tiếp cận tối ưu nhất.',
  'Test Techniques',
  ARRAY['Exploratory Testing', 'Specification-Free', 'Chatbot']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-58',
  'istqb-ai',
  58,
  'A tourist calls an airline to book a ticket and is connected with an automated system which is able to recognize speech, understand requests related to purchasing a ticket, and provide relevant travel options. When the tourist asks about the expected weather at the destination or potential impacts on operations because of the tight labor market the only response from the automated system is, "I don''t understand your question."

This AI system should be categorized as?',
  '[{"key":"A","text":"General AI"},{"key":"B","text":"Narrow AI"},{"key":"C","text":"Super AI"},{"key":"D","text":"Conventional AI"}]'::jsonb,
  ARRAY['B']::text[],
  'Narrow AI (AI hẹp / AI yếu) chỉ thực hiện tốt một nhiệm vụ chuyên biệt trong phạm vi hẹp (như đặt vé máy bay) và thất bại khi hỏi ngoài phạm vi đó.',
  'AI Concepts',
  ARRAY['Narrow AI', 'AI Categories', 'Speech Recognition']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-59',
  'istqb-ai',
  59,
  'Which of the following are the three activities in the data acquisition activities for data preparation?',
  '[{"key":"A","text":"Cleaning, transforming, augmenting"},{"key":"B","text":"Feature selecting, feature growing, feature augmenting"},{"key":"C","text":"Identifying, gathering, labeling"},{"key":"D","text":"Building, approving, deploying"}]'::jsonb,
  ARRAY['C']::text[],
  'Ba hoạt động chính trong Thu thập dữ liệu (Data acquisition) bao gồm: Xác định (Identifying), Thu thập (Gathering) và Gán nhãn (Labeling).',
  'Data Preparation',
  ARRAY['Data Acquisition', 'Data Pipeline', 'Data Preparation']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-60',
  'istqb-ai',
  60,
  'A word processing company is developing an automatic text correction tool. A machine learning algorithm was used to develop the auto text correction feature. The testers have discovered when they start typing "Isle of Wight" it fills in "Isle of Eight". Several UAT testers have accepted this change without noticing. What type of bias is this?',
  '[{"key":"A","text":"Geographical/Locality"},{"key":"B","text":"Automation/Complacency"},{"key":"C","text":"Complacency/Disregard"},{"key":"D","text":"Ignorance/Cognitive"}]'::jsonb,
  ARRAY['B']::text[],
  'Automation Bias (Định kiến tự động hóa / Tính chủ quan) xảy ra khi con người quá tin tưởng vào gợi ý của máy tính và bỏ qua các lỗi rõ ràng.',
  'Ethics & Bias',
  ARRAY['Automation Bias', 'Human Factors', 'Complacency']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-61',
  'istqb-ai',
  61,
  'You are using a neural network to train a robot vacuum to navigate without bumping into objects. You set up a reward scheme that encourages speed but discourages hitting the bumper sensors. Instead of what you expected, the vacuum has now learned to drive backwards because there are no bumpers on the back.

This is an example of what type of behavior?',
  '[{"key":"A","text":"Error-short-circuiting"},{"key":"B","text":"Reward-hacking"},{"key":"C","text":"Transparency"},{"key":"D","text":"Interpretability"}]'::jsonb,
  ARRAY['B']::text[],
  'Reward Hacking xảy ra khi robot vacuum học được cách lái lùi để tránh va chạm cảm biến trước nhằm tối đa hóa điểm thưởng mà không đạt mục tiêu dọn dẹp.',
  'Quality Characteristics',
  ARRAY['Reward-Hacking', 'Reinforcement Learning', 'Side Effects']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-62',
  'istqb-ai',
  62,
  'There is a growing backlog of unresolved defects for your project. You know the developers have an ML model that they have created which has learned which developers work on which type of software and the speed with which they resolve issues. How could you use this model to help reduce the backlog and implement more efficient defect resolution?',
  '[{"key":"A","text":"Use it to prioritize defects automatically based on the time expected for the fix to be made, the speed of the fix, and the likelihood of regressions"},{"key":"B","text":"Use it to assign defects to the best developer to resolve the problem and to load balance the defect assignments among the developers"},{"key":"C","text":"Use it to determine the root cause of each defect and develop a process improvement plan that can be implemented to remove the most common root causes"},{"key":"D","text":"Use it to review the code and determine where more defects are likely to occur so that testing can be targeted to those areas"}]'::jsonb,
  ARRAY['B']::text[],
  'Sử dụng ML để phân tích kỹ năng và tốc độ xử lý của từng developer giúp Tự động phân chia và cân bằng tải công việc (Load balancing) giải quyết lỗi hiệu quả nhất.',
  'AI for Testing',
  ARRAY['Defect Assignment', 'Triage', 'AI Management']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-63',
  'istqb-ai',
  63,
  'Which of the following is an example of an input change where it would be expected that the AI system should be able to adapt?',
  '[{"key":"A","text":"It has been trained to recognize cats and is given an image of a dog"},{"key":"B","text":"It has been trained to recognize human faces at a particular resolution and it is given a human face image captured with a higher resolution"},{"key":"C","text":"It has been trained to analyze mathematical models and is given a set of landscape pictures to classify"},{"key":"D","text":"It has been trained to analyze customer buying trend data and is given information on supplier cost data"}]'::jsonb,
  ARRAY['B']::text[],
  'Mô hình nhận diện khuôn mặt được huấn luyện ở độ phân giải nhất định phải có khả năng thích ứng (Adaptability) khi nhận hình ảnh có độ phân giải cao hơn.',
  'Quality Characteristics',
  ARRAY['Adaptability', 'Robustness', 'Input Variation']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-64',
  'istqb-ai',
  64,
  'A bank wants to use an algorithm to determine which applicants should be given a loan. The bank hires a data scientist to construct a logistic regression model to predict whether the applicant will repay the loan or not. The bank has enough data on past customers to randomly split the data into a training data set and a test/validation data set. A logistic regression model is constructed on the training data set using the following independent variables: Gender, Marital status, Number of dependents, Education, Income, Loan amount, Loan term, Credit score. The model reveals that those with higher credit scores and larger total incomes are more likely to repay their loans. The data scientist has suggested that there might be bias present in the model based on previous models created for other banks.

Given this information, what is the best test approach to check for potential bias in the model?',
  '[{"key":"A","text":"Experienced-based testing should be used to confirm that the training data set is operationally relevant. This can include applying exploratory data analysis (EDA) to check for bias within the training data set."},{"key":"B","text":"Back-to-back testing should be used to compare the model created using the training data set to another model created using the test data set. If the two models significantly differ, it will indicate there is bias in the original model"},{"key":"C","text":"Acceptance testing should be used to make sure the algorithm is suitable for the customer. The team can re-work the acceptance criteria such that the algorithm is sure to correctly predict the remaining applicants that have been set aside for the validation data set ensuring no bias is present."},{"key":"D","text":"A/B testing should be used to verify that the test data set does not detect any bias that might have been introduced by the original training data. If the two models significantly differ, it will indicate there is bias in the original model."}]'::jsonb,
  ARRAY['A']::text[],
  'Sử dụng EDA (Exploratory Data Analysis) kết hợp với kinh nghiệm kiểm thử để kiểm tra sự phân phối và phát hiện định kiến (bias) tiềm ẩn trong tập dữ liệu huấn luyện.',
  'Ethics & Bias',
  ARRAY['EDA', 'Exploratory Data Analysis', 'Bias Detection']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-65',
  'istqb-ai',
  65,
  'A team of software testers is attempting to create an AI algorithm to assist in software testing. This particular team has gone through over 40 iterations of testing and cannot afford to spend as much time as it takes to run the full regression test suite. They are hoping to have the algorithm reduce the amount of testing required thus reducing the time needed for each testing cycle.

How can an AI-based tool be expected to assist in this reduction?',
  '[{"key":"A","text":"By using a clustering method to quantify the relationships between test cases and then assigning each test case to a category"},{"key":"B","text":"By performing optimization of the data from past iterations to see where the most common defects occurred and select the corresponding test cases"},{"key":"C","text":"By performing bayesian analysis to estimate the types of human interactions that are expected to be seen in the system and then selecting those test cases"},{"key":"D","text":"By using A/B testing to compare the last update with the newest change and compare metrics between the two"}]'::jsonb,
  ARRAY['B']::text[],
  'Sử dụng AI phân tích lịch sử lỗi và mức độ thay đổi mã nguồn để Tối ưu hóa và lựa chọn tập kiểm thử hồi quy (Regression Test Selection) trọng tâm nhất.',
  'AI for Testing',
  ARRAY['Regression Suite Optimization', 'Test Selection', 'Risk Prioritization']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-66',
  'istqb-ai',
  66,
  'A company is using a spam filter to attempt to identify which emails should be marked as spam. Detection rules are created by the filter that causes a message to be classified as spam. An attacker wishes to have all messages internal to the company be classified as spam. So, the attacker sends messages with obvious red flags in the body of the email and modifies the from portion of the email to make it appear that the emails have been sent by company members. The testers plan to use exploratory data analysis (EDA) to detect the attack and use this information to prevent future adversarial attacks.

How could EDA be used to detect this attack?',
  '[{"key":"A","text":"EDA can help detect the outlier emails from the real emails"},{"key":"B","text":"EDA can detect and remove the false emails"},{"key":"C","text":"EDA can restrict how many inputs can be provided by unique users"},{"key":"D","text":"EDA cannot be used to detect the attack"}]'::jsonb,
  ARRAY['A']::text[],
  'EDA giúp phát hiện các điểm dữ liệu bất thường / ngoại lệ (outliers) so với phân phối dữ liệu thông thường trong các cuộc tấn công dữ liệu.',
  'Adversarial Testing',
  ARRAY['EDA', 'Outlier Detection', 'Data Poisoning']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-67',
  'istqb-ai',
  67,
  'Which of the following characteristics of AI-based systems make it more difficult to ensure they are safe?',
  '[{"key":"A","text":"Simplicity"},{"key":"B","text":"Sustainability"},{"key":"C","text":"Non-determinism"},{"key":"D","text":"Robustness"}]'::jsonb,
  ARRAY['C']::text[],
  'Tính không định tính (Non-determinism) khiến hệ thống AI có thể cho ra các kết quả khác nhau với cùng một đầu vào, gây khó khăn lớn nhất cho việc đảm bảo an toàn (Safety).',
  'Quality Characteristics',
  ARRAY['Non-determinism', 'Safety', 'System Verification']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-68',
  'istqb-ai',
  68,
  'Consider a natural language processing (NLP) algorithm that attempts to predict the next word that you would like to type in a text message. An update to the algorithm has been created that should increase the accuracy of the predictions based on user typing patterns. The old algorithm was rated for accuracy by the users. Then, after the new update was released, the users rated the updated algorithm. A statistical test was used to compare between the two versions of the algorithm to see whether or not the update should remain in place.

This is an example of what type of testing?',
  '[{"key":"A","text":"Metamorphic testing"},{"key":"B","text":"A/B testing"},{"key":"C","text":"Exploratory testing"},{"key":"D","text":"Pairwise testing"}]'::jsonb,
  ARRAY['B']::text[],
  'So sánh đánh giá của người dùng giữa hai phiên bản thuật toán (cũ và mới) được triển khai thực tế là kiểm thử A/B (A/B testing).',
  'Test Techniques',
  ARRAY['A/B Testing', 'NLP', 'User Metrics']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-69',
  'istqb-ai',
  69,
  'A local business has a mail pickup/delivery robot for their office. The robot currently uses a track to move between pickup/drop off locations. When it arrives at a destination, the robot stops to allow a human to remove or deposit mail.

The office has decided to upgrade the robot to include AI capabilities that allow the robot to perform its duties without a track, without running into obstacles, and without human intervention.

The test team is creating a list of new and previously established test objectives and acceptance criteria to be used in the testing of the robot upgrade. Which of the following test objectives will test an AI quality characteristic for this system?',
  '[{"key":"A","text":"The robot must evolve to optimize its routing"},{"key":"B","text":"The robot must recharge for no more than six hours a day"},{"key":"C","text":"The robot must record the time of each delivery which is compiled into a report"},{"key":"D","text":"The robot must complete 99.99% of its deliveries each day"}]'::jsonb,
  ARRAY['A']::text[],
  'Đặc tính AI cốt lõi là khả năng tự tiến hóa và tối ưu hóa tuyến đường (Evolve to optimize routing) thông qua tự học (self-learning).',
  'Quality Characteristics',
  ARRAY['Adaptability', 'Self-Learning', 'AI Characteristics']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-70',
  'istqb-ai',
  70,
  'Consider an AI-system in which the complex internal structure has been generated by another software system. Why would the tester choose to do black-box testing on this particular system?',
  '[{"key":"A","text":"Test automation can be built quickly and easily from the test cases developed during black-box testing"},{"key":"B","text":"The tester wishes to better understand the logic of the software used to create the internal structure"},{"key":"C","text":"The black-box testing method will allow the tester to check the transparency of the algorithm used to create the internal structure"},{"key":"D","text":"Black-box testing eliminates the need for the tester to understand the internal structure of the AI-system"}]'::jsonb,
  ARRAY['D']::text[],
  'Black-box testing đánh giá hành vi chức năng dựa trên Input-Output mà KHÔNG cần phải hiểu cấu trúc bên trong phức tạp hoặc tự động sinh ra của mô hình AI.',
  'Test Techniques',
  ARRAY['Black-Box Testing', 'Complexity', 'Test Strategy']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-71',
  'istqb-ai',
  71,
  'Before deployment of an AI based system, a developer is expected to demonstrate in a test environment how decisions are made. Which of the following characteristics does decision making fall under?',
  '[{"key":"A","text":"Explainability"},{"key":"B","text":"Autonomy"},{"key":"C","text":"Self-learning"},{"key":"D","text":"Non-determinism"}]'::jsonb,
  ARRAY['A']::text[],
  'Explainability (Tính giải thích được) đề cập đến khả năng minh chứng và giải thích lý do tại sao hệ thống AI đưa ra quyết định đó.',
  'Quality Characteristics',
  ARRAY['Explainability', 'XAI', 'Interpretability']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-72',
  'istqb-ai',
  72,
  'Which of the following is an example of overfitting?',
  '[{"key":"A","text":"The model is not able to generalize to accommodate new types of data"},{"key":"B","text":"The model is too simplistic for the data"},{"key":"C","text":"The model is missing relationships between the inputs and outputs"},{"key":"D","text":"The model discards data it considers to be noise or outliers"}]'::jsonb,
  ARRAY['A']::text[],
  'Overfitting làm mô hình mất khả năng tổng quát hóa (generalize) trên dữ liệu mới chưa từng gặp, mặc dù đạt độ chính xác rất cao trên dữ liệu huấn luyện.',
  'ML Fundamentals',
  ARRAY['Overfitting', 'Generalization', 'Model Quality']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-73',
  'istqb-ai',
  73,
  'Consider a machine learning model predicting stroke risk. Confusion matrix for 80 patients:
TP = 15, FP = 10 (Total = 25)
FN = 5, TN = 50 (Total = 55)

The testers calculated a metric value of 2/3 (0.6667). Which metric did they calculate?',
  '[{"key":"A","text":"F1-score"},{"key":"B","text":"Precision"},{"key":"C","text":"Recall"},{"key":"D","text":"Accuracy"}]'::jsonb,
  ARRAY['A']::text[],
  'Precision = 15/25 = 0.6. Recall = 15/20 = 0.75. F1-Score = 2 * (0.6 * 0.75) / (0.6 + 0.75) = 0.9 / 1.35 = 2/3 (0.6667).',
  'Model Metrics',
  ARRAY['F1-Score', 'Precision', 'Recall']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-74',
  'istqb-ai',
  74,
  'Which of the following is a technique used in machine learning?',
  '[{"key":"A","text":"Decision trees"},{"key":"B","text":"Equivalence partitioning"},{"key":"C","text":"Boundary value analysis"},{"key":"D","text":"Decision tables"}]'::jsonb,
  ARRAY['A']::text[],
  'Cây quyết định (Decision trees) là một thuật toán Machine Learning phổ biến dùng cho cả bài toán Phân loại và Hồi quy.',
  'ML Fundamentals',
  ARRAY['Decision Trees', 'Machine Learning', 'Algorithms']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-75',
  'istqb-ai',
  75,
  'A transportation company created an AI-based program to plan routes. The test team uses data from medium-speed vehicles in metamorphic testing. Which of the following describes the next phase of metamorphic testing?',
  '[{"key":"A","text":"The team tests the time required for the fast and slow vehicles to travel the same route as the medium vehicle. Then, by calculating the speed difference, they verify that arrival time meets expected metamorphic relations."},{"key":"B","text":"The team decomposes each route into components affecting travel time and calculates fast and slow times."},{"key":"C","text":"The team uses an AI system to select dissimilar routes."},{"key":"D","text":"The team creates routes that are longer and shorter."}]'::jsonb,
  ARRAY['A']::text[],
  'Trong kiểm thử biến đổi hình thái (Metamorphic testing), sau khi thử nghiệm dữ liệu cơ bản, đội kiểm thử kiểm tra xem mối quan hệ Metamorphic (Metamorphic Relations) về thời gian/vận tốc có thỏa mãn không.',
  'Test Techniques',
  ARRAY['Metamorphic Testing', 'Metamorphic Relations', 'Route Planning']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-76',
  'istqb-ai',
  76,
  'The stakeholders of an ML model confirmed objectives, aligned business priorities, and selected a framework and model. What should be the next step in the ML workflow?',
  '[{"key":"A","text":"Prepare and pre-process the data that will be used to train and test the model"},{"key":"B","text":"Tune the machine learning algorithm based on objectives and business priorities"},{"key":"C","text":"Agree on defined acceptance criteria for the machine learning model"},{"key":"D","text":"Evaluate the selection of the framework and the model"}]'::jsonb,
  ARRAY['A']::text[],
  'Sau khi thống nhất mục tiêu và chọn mô hình/framework, bước tiếp theo trong quy trình ML là Chuẩn bị và Tiền xử lý dữ liệu (Data Preparation & Pre-processing).',
  'ML Workflow',
  ARRAY['ML Workflow', 'Data Preparation', 'Data Pipeline']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-77',
  'istqb-ai',
  77,
  'You are developing test automation for an e-commerce system. GUI object recognition frequently fails because developers change identifiers. How could AI help make automation more reliable?',
  '[{"key":"A","text":"It could identify the objects multiple ways and then determine the most commonly used and stable identification for each object"},{"key":"B","text":"It could modify the automation code to ignore unrecognizable objects to avoid failures."},{"key":"C","text":"It could dynamically name the objects, altering the source code, so the object names will match the object names used in the automation"},{"key":"D","text":"It could generate a model that will anticipate developer changes and pre-alter the test automation code accordingly"}]'::jsonb,
  ARRAY['A']::text[],
  'Công cụ tự động hóa AI (Self-healing) sử dụng nhiều phương thức định danh (Computer vision, thuộc tính DOM) để nhận diện object ổn định ngay cả khi ID thay đổi.',
  'AI for Testing',
  ARRAY['Self-Healing Automation', 'Test Automation', 'Object Recognition']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-78',
  'istqb-ai',
  78,
  'Which of the following is a dataset issue that can be resolved using pre-processing?',
  '[{"key":"A","text":"Insufficient data"},{"key":"B","text":"Invalid data"},{"key":"C","text":"Wanted outliers"},{"key":"D","text":"Numbers stored as strings"}]'::jsonb,
  ARRAY['D']::text[],
  'Chuyển đổi kiểu dữ liệu (chẳng hạn số đang lưu ở dạng chuỗi ''123'' thành kiểu float/int) là bài toán xử lý được ở bước Tiền xử lý dữ liệu (Data pre-processing).',
  'Data Preparation',
  ARRAY['Data Preprocessing', 'Data Cleaning', 'Data Types']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-79',
  'istqb-ai',
  79,
  'Which of the following problems would best be solved using the supervised learning category of regression?',
  '[{"key":"A","text":"Determining the optimal age for a chicken''s egg laying production using input data of the chicken''s age and average daily egg production for one million chickens"},{"key":"B","text":"Recognizing a knife in carry on luggage at a security checkpoint in an airport scanner"},{"key":"C","text":"Determining if an animal is a pig or a cow based on image recognition"},{"key":"D","text":"Predicting shopper purchasing behavior based on the category of shopper and the positioning of promotional displays within a store"}]'::jsonb,
  ARRAY['A']::text[],
  'Dự đoán sản lượng trứng trung bình (giá trị số liên tục) dựa trên độ tuổi gà là bài toán Hồi quy (Regression) trong Học có giám sát.',
  'ML Fundamentals',
  ARRAY['Regression', 'Supervised Learning', 'Continuous Output']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-80',
  'istqb-ai',
  80,
  'Which ONE of the following options describes the LEAST likely usage of AI for the detection of GUI changes resulting from changes in test objects?',
  '[{"key":"A","text":"Using an ML-based classifier to flag if changes in GUI are to be flagged for humans."},{"key":"B","text":"Using a computer vision to compare the GUI before and after the test object changes."},{"key":"C","text":"Using a pixel comparison of the GUI before and after the change to check the differences."},{"key":"D","text":"Using a vision-based detection of the GUI layout changes before and after test object changes."}]'::jsonb,
  ARRAY['C']::text[],
  'So sánh điểm ảnh thô (Pixel-by-pixel comparison) là kỹ thuật so sánh hình ảnh truyền thống dễ giòn gãy (brittle), không phải là công nghệ AI/Computer Vision hiện đại.',
  'AI for Testing',
  ARRAY['Visual Testing', 'Computer Vision', 'GUI Changes']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-81',
  'istqb-ai',
  81,
  'Which ONE of the following models BEST describes a way to model defect prediction by looking at the history of bugs in modules by using code quality metrics of modules of historical versions as input?',
  '[{"key":"A","text":"Clustering of similar code modules to predict based on similarity."},{"key":"B","text":"Search for similar code based on natural language processing."},{"key":"C","text":"Using a classification model to predict the presence of a defect by using code quality metrics as the input data."},{"key":"D","text":"Identifying the relationship between developers and the modules developed by them."}]'::jsonb,
  ARRAY['C']::text[],
  'Mô hình Phân loại (Classification) dự đoán khả năng có lỗi của module dựa trên các chỉ số chất lượng mã nguồn (code metrics) đầu vào.',
  'AI for Testing',
  ARRAY['Defect Prediction', 'Code Quality', 'Classification']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-82',
  'istqb-ai',
  82,
  'Which ONE of the following is the BEST option to optimize regression test selection and prevent the regression suite from growing large?',
  '[{"key":"A","text":"Identifying suitable tests by looking at the complexity of the test cases."},{"key":"B","text":"Using a random subset of tests."},{"key":"C","text":"Using an AI-based tool to optimize the regression test suite by analyzing past test results."},{"key":"D","text":"Automating test scripts using AI-based test automation tools."}]'::jsonb,
  ARRAY['C']::text[],
  'Sử dụng công cụ AI phân tích kết quả kiểm thử quá khứ và độ thay đổi mã nguồn để tối ưu hóa và thu gọn bộ kiểm thử hồi quy (Regression Test Suite).',
  'AI for Testing',
  ARRAY['Regression Optimization', 'Test Prioritization', 'Test Suite']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-83',
  'istqb-ai',
  83,
  'What requirements are given in text documents, which ONE of the following is the BEST way to generate test cases from these requirements?',
  '[{"key":"A","text":"Natural language processing on textual requirements"},{"key":"B","text":"Analyzing source code for generating test cases"},{"key":"C","text":"GUI analysis using computer vision"},{"key":"D","text":"Machine learning on logs of execution"}]'::jsonb,
  ARRAY['A']::text[],
  'Sử dụng Xử lý ngôn ngữ tự nhiên (NLP) trên tài liệu yêu cầu dạng văn bản để tự động trích xuất kịch bản kiểm thử.',
  'AI for Testing',
  ARRAY['NLP', 'Test Case Generation', 'Requirements']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-84',
  'istqb-ai',
  84,
  'Which ONE of the following does NOT describe an AI technology-related characteristic that differentiates AI test environments from other test environments?',
  '[{"key":"A","text":"Challenges resulting from low accuracy of the models"},{"key":"B","text":"The challenge of providing explainability to the decision made by the system"},{"key":"C","text":"The challenge of mimicking undefined scenarios generated due to self-learning"},{"key":"D","text":"Challenges in the creation of scenarios of human handover for autonomous systems"}]'::jsonb,
  ARRAY['D']::text[],
  'Quy trình giao tiếp bàn giao cho con người (Human handover) là yêu cầu an toàn chức năng, không phải đặc tính công nghệ AI đặc thù của môi trường kiểm thử.',
  'Test Environment',
  ARRAY['Test Environment', 'AI Characteristics', 'Human Handover']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-85',
  'istqb-ai',
  85,
  'A System was developed for screening X-rays of patients for cancer detection using multiple individually trained ML models chained together in a workflow. Order of chaining should not impact accuracy. Which kinds of tests are MOST APPROPRIATE?
1. Pairwise testing of various models
2. Testing the entire pipeline for accuracy
3. Testing of different sequences of chaining the model',
  '[{"key":"A","text":"1 and 3"},{"key":"B","text":"Only 3"},{"key":"C","text":"1 and 2"},{"key":"D","text":"Only 2"}]'::jsonb,
  ARRAY['C']::text[],
  'Kiểm thử Pairwise giữa các mô hình và Kiểm thử toàn bộ đường ống (End-to-End Pipeline) là hai phương pháp phù hợp nhất để đánh giá chuỗi mô hình ML.',
  'Test Strategy',
  ARRAY['Pipeline Testing', 'Pairwise', 'Medical AI']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-86',
  'istqb-ai',
  86,
  'An ML engineer is trying to determine the correctness of a new open-source implementation "X" of a supervised regression algorithm. Which ONE of the following would be an APPROPRIATE strategy?',
  '[{"key":"A","text":"Compare the R-Square score of the model X with a different model created using a different programming language while using the same algorithm and the same training and testing data."},{"key":"B","text":"Add 10% of the rows randomly, create another model, and compare the R-Square scores of both models."},{"key":"C","text":"Train various models by changing the order of input features and verify that the R-Square scores of these models varies significantly."},{"key":"D","text":"Drop 10% of the rows randomly, create another model, and compare the R-Square scores of both models."}]'::jsonb,
  ARRAY['A']::text[],
  'So sánh chỉ số R-Square của mô hình X với một mô hình tham chiếu được xây dựng bằng thuật toán tương tự trên cùng tập dữ liệu (Back-to-Back Testing).',
  'Model Verification',
  ARRAY['Back-to-Back Testing', 'Algorithm Verification', 'R-Squared']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-87',
  'istqb-ai',
  87,
  'Which ONE of the following options describes a scenario of A/B testing the MOST?',
  '[{"key":"A","text":"A performance comparison of two different ML implementations on the same input data."},{"key":"B","text":"A performance comparison of an ML system on two different input datasets."},{"key":"C","text":"A comparison of two different offers in a recommendation system to decide on the more effective offer for the same users."},{"key":"D","text":"A comparison of two different websites to observe from a user acceptance perspective."}]'::jsonb,
  ARRAY['C']::text[],
  'Kiểm thử đối kháng (Adversarial testing) cố tình tạo ra nhiễu đối kháng để kiểm tra khả năng phòng thủ và độ tin cậy của mô hình AI.',
  'Test Techniques',
  ARRAY['A/B Testing', 'Recommendation System', 'Production Comparison']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-88',
  'istqb-ai',
  88,
  'Which ONE of the following describes a situation of back-to-back testing the LEAST?',
  '[{"key":"A","text":"Comparison of the results of a home-grown neural network model ML model with results in a neural network model implemented in a standard implementation (e.g., Pytorch) for the same data."},{"key":"B","text":"Comparison of the results of a current neural network model ML model implemented in platform A (e.g. Pytorch) with a similar neural network model ML model implemented in platform B (e.g. Tensorflow), for the same data."},{"key":"C","text":"Comparison of the results of the current neural network ML model on the current data set with a slightly modified data set."},{"key":"D","text":"Comparison of the results of a neural network ML model with a current decision tree ML model for the same data."}]'::jsonb,
  ARRAY['C']::text[],
  'Kiểm thử sự chuyển giao cho con người (Human handover testing) cực kỳ quan trọng đối với xe tự lái cấp độ 3 khi gặp tình huống AI không thể xử lý.',
  'Test Techniques',
  ARRAY['Back-to-Back Testing', 'Model Comparison', 'Metamorphic Testing']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-89',
  'istqb-ai',
  89,
  'Pairwise testing can be used in self-driving cars to control parameter explosion. Which option is LEAST likely to be a reason for this parameter growth?',
  '[{"key":"A","text":"Different features like ADAS, lane change assistance, etc."},{"key":"B","text":"Different road types"},{"key":"C","text":"ML model metrics that evaluate functional performance"},{"key":"D","text":"Different weather conditions"}]'::jsonb,
  ARRAY['C']::text[],
  'Hiện tượng rò rỉ dữ liệu (Data Leakage) làm sai lệch đánh giá vì mô hình đã ''học thuộc'' dữ liệu kiểm thử trong quá trình huấn luyện.',
  'Test Techniques',
  ARRAY['Pairwise Testing', 'Autonomous Driving', 'Parameters']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-90',
  'istqb-ai',
  90,
  'Which ONE of the following statements is a CORRECT adversarial example in the context of machine learning systems working on image classifiers?',
  '[{"key":"A","text":"These attacks cannot be prevented by retraining the model with these examples augmented to the training data."},{"key":"B","text":"These attack examples cause a model to predict the correct class with slightly less accuracy even though they look like the original image."},{"key":"C","text":"Black box attacks based on adversarial examples create a duplicate model of the original."},{"key":"D","text":"These examples are model-specific and are not likely to cause another model trained on the same task to fail."}]'::jsonb,
  ARRAY['C']::text[],
  'Lớp ẩn (Hidden layer) thực hiện tính toán biến đổi phi tuyến tính và trích xuất đặc trưng từ các lớp trước đó.',
  'Adversarial Testing',
  ARRAY['Adversarial Testing', 'Black-Box Attack', 'Surrogate Model']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-91',
  'istqb-ai',
  91,
  'AI-enabled medical devices require safety-critical certification. Which THREE facets are MOST required for certification?
1. Autonomy
2. Maintainability
3. Safety
4. Transparency
5. Side effects/reward hacking',
  '[{"key":"A","text":"Aspects 1, 4, and 5"},{"key":"B","text":"Aspects 2, 3, and 4"},{"key":"C","text":"Aspects 1, 2, and 3"},{"key":"D","text":"Aspects 3, 4, and 5"}]'::jsonb,
  ARRAY['D']::text[],
  'Phương pháp gán nhãn thủ công (Manual labeling) có chi phí cao nhất và tốn nhiều thời gian nhất khi chuẩn bị dữ liệu.',
  'Quality Characteristics',
  ARRAY['Medical Device', 'Certification', 'Safety & Compliance']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-92',
  'istqb-ai',
  92,
  'Which ONE of the following tests is MOST likely to describe a useful test to help detect different kinds of biases in an ML pipeline?',
  '[{"key":"A","text":"Test the distribution shift in the training data for inappropriate bias."},{"key":"B","text":"Test the model during model evaluation for bias."},{"key":"C","text":"Check the input test data for potential sample bias."},{"key":"D","text":"Testing the data pipeline for any sources of algorithmic bias."}]'::jsonb,
  ARRAY['C']::text[],
  'Kiểm thử biến đổi hình thái (Metamorphic testing) sử dụng các mối quan hệ biến đổi để kiểm tra tính nhất quán của hệ thống mà không cần Oracle hoàn chỉnh.',
  'Ethics & Bias',
  ARRAY['Sample Bias', 'Data Auditing', 'Ethics']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-93',
  'istqb-ai',
  93,
  'Which ONE of the following options is the LEAST appropriate test to be performed for testing a feature related to autonomy?',
  '[{"key":"A","text":"Test for human handover after a given time interval"},{"key":"B","text":"Test for human handover when it should actually not be relinquishing control"},{"key":"C","text":"Test for human handover to give rest to the system"},{"key":"D","text":"Test for human handover requiring mandatory relinquishing control"}]'::jsonb,
  ARRAY['C']::text[],
  'Độ chính xác (Accuracy) không phản ánh đúng hiệu năng mô hình khi tập dữ liệu bị mất cân bằng lớp nghiêm trọng (Imbalanced dataset).',
  'Quality Characteristics',
  ARRAY['Autonomy', 'Human Handover', 'Safety Testing']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-94',
  'istqb-ai',
  94,
  'A self-learning combat flight model behaved poorly when exposed to real-world data despite passing quality tests on combat logs. Which option is LEAST likely to describe the reason?',
  '[{"key":"A","text":"The fast pace of change caused a deviation from the trained model."},{"key":"B","text":"There was an algorithmic bias in the AI system."},{"key":"C","text":"The unknown nature and insufficient specification of the operating environment might have caused the poor performance."},{"key":"D","text":"The difficulty of defining criteria for improvement before the model can be accepted."}]'::jsonb,
  ARRAY['D']::text[],
  'Hàm kích hoạt (Activation function) giới thiệu tính phi tuyến (non-linearity) giúp mạng nơ-ron học được các mẫu dữ liệu phức tạp.',
  'Testing Challenges',
  ARRAY['Self-Learning', 'Real-World Performance', 'Environment Drift']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-95',
  'istqb-ai',
  95,
  'A cancer prediction model had high accuracy in isolation but failed in clinical practice because it missed real cancer cases. What test planning deficiency caused this?',
  '[{"key":"A","text":"A lack of similarity between the training and testing data."},{"key":"B","text":"A lack of focus on choosing the right functional performance metrics."},{"key":"C","text":"A lack of focus on non-functional requirements testing."},{"key":"D","text":"The input data has not been tested for data quality before its use for model testing."}]'::jsonb,
  ARRAY['B']::text[],
  'Khả năng phục hồi và chống chịu nhiễu (Robustness) giúp hệ thống hoạt động ổn định khi dữ liệu đầu vào bị biến dạng nhẹ.',
  'Model Metrics',
  ARRAY['Recall', 'Accuracy Trap', 'Medical AI']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-96',
  'istqb-ai',
  96,
  'Storms in Colombia caused massive coffee production losses and stock price drops. Which type of testing SHOULD be performed on an ML stock prediction model to detect the influence of such events?',
  '[{"key":"A","text":"Testing for security"},{"key":"B","text":"Testing for accuracy"},{"key":"C","text":"Testing for concept drift"},{"key":"D","text":"Testing for bias"}]'::jsonb,
  ARRAY['C']::text[],
  'Gán nhãn tự động bằng quy tắc (Rule-based auto-labeling) giúp tăng tốc độ gán nhãn cho tập dữ liệu lớn.',
  'Model Maintenance',
  ARRAY['Concept Drift', 'External Events', 'Model Degradation']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-97',
  'istqb-ai',
  97,
  'Which ONE of the following does NOT describe a challenge for acquiring test data in ML systems?',
  '[{"key":"A","text":"The nature of data constantly changes with time."},{"key":"B","text":"The data for the use case is being generated at a fast pace."},{"key":"C","text":"Compliance with data privacy laws requires proper care to be taken of personal data."},{"key":"D","text":"Test data is being sourced from public sources."}]'::jsonb,
  ARRAY['D']::text[],
  'Kiểm thử A/B yêu cầu chia lưu lượng người dùng thực tế thành các nhóm để so sánh hiệu quả giữa phiên bản A và phiên bản B.',
  'Data Acquisition',
  ARRAY['Data Acquisition', 'Public Datasets', 'Test Data']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-98',
  'istqb-ai',
  98,
  'Which ONE of the following tests is LEAST likely to be performed during the ML model testing phase?',
  '[{"key":"A","text":"Testing the speed of the training of the model"},{"key":"B","text":"Testing the speed of the prediction of the model"},{"key":"C","text":"Testing the API of the service powered by the ML model"},{"key":"D","text":"Testing the accuracy of the classification model"}]'::jsonb,
  ARRAY['C']::text[],
  'Ma trận nhầm lẫn (Confusion Matrix) cung cấp cái nhìn chi tiết về số lượng TP, FP, TN, FN của mô hình phân loại.',
  'Test Strategy',
  ARRAY['Model Testing', 'Integration Testing', 'System Testing']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-99',
  'istqb-ai',
  99,
  'Which ONE of the following types of coverage SHOULD be used if test cases need to cause each neuron to achieve both positive and negative activation values?',
  '[{"key":"A","text":"Value coverage"},{"key":"B","text":"Sign change coverage"},{"key":"C","text":"Neuron coverage"},{"key":"D","text":"Threshold coverage"}]'::jsonb,
  ARRAY['B']::text[],
  'Định kiến thuật toán (Algorithmic bias) có thể phát sinh nếu thuật toán tối ưu hóa dựa trên các tham số không công bằng.',
  'Coverage Criteria',
  ARRAY['Sign-Change Coverage', 'Neural Networks', 'White-Box Testing']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-100',
  'istqb-ai',
  100,
  'Which ONE of the following options BEST describes the inputs used to compute the activation value of a neuron in a neural network?',
  '[{"key":"A","text":"Individual bias at the neuron level, activation values of neurons in the previous layer, and weights assigned to the connections between the neurons."},{"key":"B","text":"Activation values of neurons in the previous layer, and weights assigned to the connections between the neurons."},{"key":"C","text":"Individual bias at the neuron level, and activation values of neurons in the previous layer."},{"key":"D","text":"Individual bias at the neuron level, and weights assigned to the connections between the neurons."}]'::jsonb,
  ARRAY['A']::text[],
  'Lan truyền ngược (Backpropagation) tính toán đạo hàm của hàm mất mát theo từng trọng số để cập nhật trọng số mạng nơ-ron.',
  'Neural Networks',
  ARRAY['Activation Value', 'Bias', 'Weights']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-101',
  'istqb-ai',
  101,
  'A cancer detection system targets a disease with a 2% prevalence rate in the population. Which combination of functional metrics should be the MOST IMPORTANT target for improvement?',
  '[{"key":"A","text":"Maximize recall and precision"},{"key":"B","text":"Maximize specificity and number of classes"},{"key":"C","text":"Maximize precision and accuracy"},{"key":"D","text":"Maximize accuracy and recall"}]'::jsonb,
  ARRAY['A']::text[],
  'Kiểm thử hiệu năng mô hình AI cần đánh giá cả độ trễ suy luận (Inference latency) và mức tiêu thụ tài nguyên phần cứng.',
  'Model Metrics',
  ARRAY['Imbalanced Data', 'Precision', 'Recall']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-102',
  'istqb-ai',
  102,
  'Rotten tomato classification matrix:
Predicted Rotten: TP = 45, FP = 8
Predicted Fresh: FN = 5, TN = 42

Which set of values for accuracy, recall, and specificity (respectively) is CORRECT?',
  '[{"key":"A","text":"0.84, 1, 0.9"},{"key":"B","text":"0.87, 0.9, 0.84"},{"key":"C","text":"1, 0.9, 0.8"},{"key":"D","text":"1, 0.87, 0.84"}]'::jsonb,
  ARRAY['B']::text[],
  'Dữ liệu huấn luyện bị thiếu tính đa dạng sẽ làm giảm khả năng tổng quát hóa của mô hình khi triển khai thực tế.',
  'Model Metrics',
  ARRAY['Accuracy', 'Recall', 'Specificity']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-103',
  'istqb-ai',
  103,
  'Which ONE of the following factors is NOT a factor affecting the ML functional performance?',
  '[{"key":"A","text":"The number of classes"},{"key":"B","text":"The quality of the labeling"},{"key":"C","text":"Biased data"},{"key":"D","text":"The quality of the data pipeline"}]'::jsonb,
  ARRAY['D']::text[],
  'Cập nhật mô hình liên tục (Continuous retraining) giúp giảm thiểu ảnh hưởng của hiện tượng Data Drift và Concept Drift.',
  'Model Quality',
  ARRAY['Functional Performance', 'Data Pipeline', 'ML Factors']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-104',
  'istqb-ai',
  104,
  'Which ONE of the following approaches to labeling requires the least time and effort?',
  '[{"key":"A","text":"Pre-labeled dataset"},{"key":"B","text":"Internal"},{"key":"C","text":"Outsourced"},{"key":"D","text":"AI-assisted"}]'::jsonb,
  ARRAY['A']::text[],
  'Kiểm thử dựa trên rủi ro (Risk-based testing) giúp tập trung nguồn lực kiểm thử vào các tính năng AI có mức độ ảnh hưởng và rủi ro cao nhất.',
  'Data Preparation',
  ARRAY['Pre-labeled Data', 'Data Labeling', 'Efficiency']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-105',
  'istqb-ai',
  105,
  'Data used for an object detection ML system was found to have been labeled incorrectly in many cases. Which ONE of the following options is MOST likely the outcome?',
  '[{"key":"A","text":"Privacy issues"},{"key":"B","text":"Security issues"},{"key":"C","text":"Robustness issues"},{"key":"D","text":"Accuracy issues"}]'::jsonb,
  ARRAY['D']::text[],
  'Kỹ thuật Dropout ngẫu nhiên tắt một số neuron trong quá trình huấn luyện để chống Overfitting.',
  'Data Quality',
  ARRAY['Labeling Errors', 'Accuracy', 'Data Quality']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-106',
  'istqb-ai',
  106,
  'Which ONE of the following combinations of training, validation, and test data is used during the process of learning/creating a model?',
  '[{"key":"A","text":"Only training data and test data"},{"key":"B","text":"All three: training data, validation data, and test data"},{"key":"C","text":"Only training data and validation data"},{"key":"D","text":"Only validation data and test data"}]'::jsonb,
  ARRAY['C']::text[],
  'Kiểm thử hộp đen (Black-box testing) tập trung vào việc xác minh yêu cầu chức năng đầu ra mà không cần truy cập mã nguồn hay trọng số mô hình.',
  'ML Workflow',
  ARRAY['Training Data', 'Validation Data', 'Model Learning']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-107',
  'istqb-ai',
  107,
  'Which ONE of the following activities is MOST relevant when addressing the scenario where you have more than the required amount of data available for training?',
  '[{"key":"A","text":"Data labeling"},{"key":"B","text":"Data sampling"},{"key":"C","text":"Feature selection"},{"key":"D","text":"Data augmentation"}]'::jsonb,
  ARRAY['B']::text[],
  'Xác minh tính công bằng (Fairness verification) đảm bảo mô hình không đưa ra quyết định phân biệt đối xử dựa trên các thuộc tính nhạy cảm.',
  'Data Preparation',
  ARRAY['Data Sampling', 'Dataset Size', 'Subsampling']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-108',
  'istqb-ai',
  108,
  'A consumer goods company wants to identify groups of people with similar tastes to target products. Which ML type represents the BEST solution?',
  '[{"key":"A","text":"Association"},{"key":"B","text":"Clustering"},{"key":"C","text":"Regression"},{"key":"D","text":"Classification"}]'::jsonb,
  ARRAY['B']::text[],
  'Validation set được dùng để tinh chỉnh tham số siêu cấp (hyperparameters) và chọn mô hình tối ưu trước khi đánh giá trên Test set.',
  'ML Fundamentals',
  ARRAY['Clustering', 'Customer Segmentation', 'Unsupervised Learning']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-109',
  'istqb-ai',
  109,
  'Which ONE of the following options is the MOST APPROPRIATE stage of the ML workflow to set model and algorithm hyperparameters?',
  '[{"key":"A","text":"Deploying the model"},{"key":"B","text":"Data testing"},{"key":"C","text":"Tuning the model"},{"key":"D","text":"Evaluating the model"}]'::jsonb,
  ARRAY['C']::text[],
  'Mô hình sinh (Generative AI) yêu cầu các tiêu chí kiểm thử đặc thù về độ an toàn nội dung, bản quyền và tính chân thực.',
  'ML Workflow',
  ARRAY['Hyperparameters', 'Model Tuning', 'ML Workflow']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-110',
  'istqb-ai',
  110,
  'Which ONE of the following options BEST describes clustering?',
  '[{"key":"A","text":"Clustering is classification of a continuous quantity."},{"key":"B","text":"Clustering is done without prior knowledge of output classes."},{"key":"C","text":"Clustering is supervised learning."},{"key":"D","text":"Clustering requires you to know the classes."}]'::jsonb,
  ARRAY['B']::text[],
  'Giám sát sau triển khai (Post-deployment monitoring) giúp phát hiện sớm sự sụt giảm độ chính xác của mô hình trong môi trường thực tế.',
  'ML Fundamentals',
  ARRAY['Clustering', 'Unsupervised Learning', 'Class Labels']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-111',
  'istqb-ai',
  111,
  'A software component uses machine learning to recognize digits (0-9) from scans of handwritten numbers. Which type of ML is this?',
  '[{"key":"A","text":"Clustering"},{"key":"B","text":"Reinforcement learning"},{"key":"C","text":"Regression"},{"key":"D","text":"Classification"}]'::jsonb,
  ARRAY['D']::text[],
  'Độ phủ neuron (Neuron coverage) đo lường tỷ lệ các neuron được kích hoạt trong quá trình chạy tập kiểm thử white-box.',
  'ML Fundamentals',
  ARRAY['Classification', 'Handwritten Digits', 'Supervised Learning']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-112',
  'istqb-ai',
  112,
  'Which ONE of the following characteristics is the LEAST likely to cause safety-related issues for an AI system?',
  '[{"key":"A","text":"Non-determinism"},{"key":"B","text":"High complexity"},{"key":"C","text":"Robustness"},{"key":"D","text":"Self-learning"}]'::jsonb,
  ARRAY['C']::text[],
  'Kiểm thử gián đoạn (Disruption testing) đánh giá khả năng tự phục hồi của hệ thống AI khi mất kết nối mạng hoặc lỗi phần cứng.',
  'Quality Characteristics',
  ARRAY['Robustness', 'Safety', 'Quality Characteristics']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-113',
  'istqb-ai',
  113,
  'An image classification system for human faces has a training distribution of 70% for ethnicity A and 30% combined for ethnicities B, C, and D. Which option BEST describes this situation?',
  '[{"key":"A","text":"This is an example of algorithmic bias."},{"key":"B","text":"This is an example of hyperparameter bias."},{"key":"C","text":"This is an example of expert system bias."},{"key":"D","text":"This is an example of sample bias."}]'::jsonb,
  ARRAY['D']::text[],
  'Sử dụng dữ liệu tổng hợp (Synthetic data) giúp bổ sung các kịch bản hiếm gặp (edge cases) mà dữ liệu thực tế khó thu thập.',
  'Ethics & Bias',
  ARRAY['Sample Bias', 'Data Distribution', 'Ethics']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-114',
  'istqb-ai',
  114,
  'Which ONE of the following BEST describes an example of a system with AI-based autonomous functions?',
  '[{"key":"A","text":"A system that is fully able to respond to its environment."},{"key":"B","text":"A system that utilizes a tool like Selenium."},{"key":"C","text":"A fully automated manufacturing plant that uses no software."},{"key":"D","text":"A system that utilizes human beings for all important decisions."}]'::jsonb,
  ARRAY['A']::text[],
  'Mô hình cây quyết định có tính giải thích (Explainability) cao hơn so với các mô hình mạng nơ-ron sâu (Deep Learning).',
  'Quality Characteristics',
  ARRAY['Autonomy', 'Environment Response', 'AI Functions']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-115',
  'istqb-ai',
  115,
  'Which ONE of the following statements CORRECTLY describes the importance of flexibility for AI systems?',
  '[{"key":"A","text":"AI systems require changing operational environments; therefore, flexibility is required."},{"key":"B","text":"Flexible AI systems allow for easier modification of the system as a whole."},{"key":"C","text":"Self-learning systems are expected to deal with new situations without explicitly having to program for them."},{"key":"D","text":"AI systems are inherently flexible."}]'::jsonb,
  ARRAY['C']::text[],
  'Kiểm thử tính bảo mật của mô hình AI bao gồm việc phòng chống các cuộc tấn công đánh cắp mô hình (Model Inversion/Extraction).',
  'Quality Characteristics',
  ARRAY['Flexibility', 'Self-Learning', 'Generalization']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-116',
  'istqb-ai',
  116,
  'Which ONE of the following hardware is MOST SUITABLE for implementing AI when using Machine Learning (ML)?',
  '[{"key":"A","text":"Powerful CPUs"},{"key":"B","text":"Hardware supporting fast matrix multiplication"},{"key":"C","text":"Hardware supporting high-precision floating point operations"},{"key":"D","text":"64-bit CPUs"}]'::jsonb,
  ARRAY['B']::text[],
  'Quy trình MLOps tích hợp kiểm thử tự động ở các khâu chuẩn bị dữ liệu, huấn luyện mô hình và đóng gói triển khai.',
  'AI Hardware',
  ARRAY['Hardware', 'Matrix Multiplication', 'GPU/NPU']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-117',
  'istqb-ai',
  117,
  'Which ONE of the following technologies is MOST TYPICALLY used to implement AI?',
  '[{"key":"A","text":"Genetic algorithms"},{"key":"B","text":"Search engines"},{"key":"C","text":"Procedural programming"},{"key":"D","text":"Case-control structures"}]'::jsonb,
  ARRAY['A']::text[],
  'Kiểm thử chấp nhận người dùng (UAT) đối với ứng dụng AI cần đánh giá mức độ hài lòng và niềm tin của người dùng vào quyết định của AI.',
  'AI Concepts',
  ARRAY['Genetic Algorithms', 'Optimization', 'AI Technologies']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-118',
  'istqb-ai',
  118,
  'Quote: "In the near future, technology will have evolved, and AI will be able to learn multiple tasks by itself without needing to be retrained, allowing it to operate even in new environments. The cognitive abilities of AI will be similar to a child of 1-2 years." Which type of AI is this?',
  '[{"key":"A","text":"Narrow AI"},{"key":"B","text":"Super AI"},{"key":"C","text":"Technological singularity"},{"key":"D","text":"General AI"}]'::jsonb,
  ARRAY['D']::text[],
  'Hệ thống AI tự chủ cần có cơ chế an toàn dừng khẩn cấp (Fail-safe mechanism) khi phát hiện sự cố không thể khắc phục.',
  'AI Concepts',
  ARRAY['General AI', 'AGI', 'AI Evolution']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'istqb-119',
  'istqb-ai',
  119,
  'In a conference, a speaker stated: "the current implementation of AI using machine learning (ML) may NOT be considered AI in the future". Is this statement CORRECT or INCORRECT and why?',
  '[{"key":"A","text":"This statement is correct. In general, what is considered AI today may change over time."},{"key":"B","text":"This statement is incorrect. Current AI is true AI, and there is no reason to believe that this fact will change over time."},{"key":"C","text":"This statement is correct. In general, the term AI is presently utilized incorrectly."},{"key":"D","text":"This statement is incorrect. What is considered AI today will continue to be AI even as technology evolves and changes."}]'::jsonb,
  ARRAY['A']::text[],
  'Tài liệu kiểm thử AI cần ghi nhận rõ ràng các giả định về dữ liệu, ngưỡng chấp nhận độ chính xác và các giới hạn vận hành của mô hình.',
  'AI Concepts',
  ARRAY['AI Effect', 'Perception', 'AI Definition']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

-- ===========================================
-- SEED DATA FOR CLAUDE CERTIFIED ARCHITECT - FOUNDATIONS (CCA-F) (cca-f)
-- Total questions: 90
-- ===========================================

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca1',
  'cca-f',
  1,
  'Your structured data extraction system processes real estate listing documents. When listings describe property size with informal terms like "spacious" or "generous open-plan living area" instead of exact measurements, the model frequently fabricates numeric square footage values. Which approach would most effectively reduce these hallucinated values while preserving extraction accuracy for documents that contain explicit measurements?',
  '[{"key":"A","text":"Making the square_footage field required in the schema and adding a post-extraction validation step that rejects non-numeric values"},{"key":"B","text":"Removing the square_footage field from the extraction schema entirely to eliminate the possibility of fabrication"},{"key":"C","text":"Providing few-shot examples that demonstrate returning null for square footage when documents use informal descriptions, alongside examples that correctly extract explicit numeric measurements"},{"key":"D","text":"Adding the instruction \"only extract values you are certain about\" to the system prompt"}]'::jsonb,
  ARRAY['C']::text[],
  'Cung cấp các ví dụ few-shot chỉ ra việc trả về ''null'' cho các mô tả không chính thức là cách hiệu quả nhất để dạy cho LLM biết khi nào cần bỏ qua trường này, thay vì tự bịa đặt (hallucinate) dữ liệu số.',
  'Prompt Engineering',
  ARRAY['Few-shot', 'Structured Data', 'Hallucination']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca2',
  'cca-f',
  2,
  'A customer support agent calls the process_refund MCP tool, which fails because the requested refund amount exceeds the customer''s original order total. Currently the tool returns a generic "Operation failed" message, preventing the agent from explaining the issue to the customer. How should the tool''s error response be restructured to enable appropriate handling?',
  '[{"key":"A","text":"Return an error with errorCategory: \"validation\", isRetryable: false, and a description explaining the refund amount exceeds the order total"},{"key":"B","text":"Return a successful empty result with a warning field embedded in the response content indicating the amount was too high"},{"key":"C","text":"Return an error with errorCategory: \"permission\", isRetryable: true, and a description indicating the operation requires supervisor-level access"},{"key":"D","text":"Return an error with errorCategory: \"transient\", isRetryable: true, and a description suggesting the agent retry with the same parameters after a delay"}]'::jsonb,
  ARRAY['A']::text[],
  'Lỗi logic nghiệp vụ không được thử lại (như vượt quá số tiền) cần được phân loại là lỗi kiểm định đầu vào (''validation'') với ''isRetryable: false'' để tác nhân hiểu được nguyên nhân gốc rễ và xử lý phù hợp thay vì tự động chạy lại.',
  'Model Context Protocol',
  ARRAY['MCP Tools', 'Error Handling', 'Validation']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca3',
  'cca-f',
  3,
  'A developer asks Claude to generate a complex recursive algorithm, and then within the same conversation asks Claude to review the generated code for correctness. Claude reports no issues, but a peer reviewer later finds a subtle logic error. What best explains why the same-session review failed to catch this bug?',
  '[{"key":"A","text":"The review prompt did not include explicit criteria for checking recursive boundary conditions"},{"key":"B","text":"The generated code consumed most of the context window, leaving insufficient tokens for a thorough review"},{"key":"C","text":"The model defaults to positive assessments to maintain conversational coherence with the user"},{"key":"D","text":"The model retains its reasoning context from generation, making it less likely to question its own prior decisions in the same session"}]'::jsonb,
  ARRAY['D']::text[],
  'Do mô hình giữ nguyên ngữ cảnh suy luận từ quá trình tạo trước đó, nó dễ gặp phải thiên kiến xác nhận (confirmation bias) và khó khăn trong việc độc lập rà soát lại lỗi logic của chính nó trong cùng một phiên hội thoại.',
  'Evaluation & Bias',
  ARRAY['Confirmation Bias', 'Self-Review', 'Context']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca4',
  'cca-f',
  4,
  'The coordinator agent in the research platform is about to invoke the findings synthesis agent using a stateless agent call (so subagents do not inherit prior conversation context). Both the web search agent and the document analysis agent have already returned their results. How should the coordinator provide these prior findings to the synthesis agent?',
  '[{"key":"A","text":"Store the findings in an external database and give the synthesis agent credentials to query the results on its own"},{"key":"B","text":"Include the complete findings from both agents directly in the synthesis agent''s prompt so it has full access to all gathered information"},{"key":"C","text":"Instruct the synthesis agent to re-invoke the web search and document analysis agents independently to collect the information it needs"},{"key":"D","text":"Pass only a brief thematic summary to keep the synthesis agent''s context lean and avoid exceeding token limits"}]'::jsonb,
  ARRAY['B']::text[],
  'Do các tác nhân con chạy không trạng thái (stateless) và không kế thừa ngữ cảnh, tác nhân điều phối (orchestrator) phải thu thập toàn bộ dữ liệu thô thu được và đưa trực tiếp vào prompt của tác nhân tổng hợp kế tiếp.',
  'Agentic Architecture',
  ARRAY['Orchestrator-Worker', 'Subagents', 'Context Transfer']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca5',
  'cca-f',
  5,
  'During a prolonged codebase exploration session, an agent begins referencing "typical patterns" and giving vague descriptions instead of citing the specific classes and method signatures it discovered in earlier turns. What technique most effectively counteracts this context degradation?',
  '[{"key":"A","text":"Have the agent maintain a scratchpad file that records key findings such as class names, method signatures, and file paths, and reference it when answering subsequent questions"},{"key":"B","text":"Increase the max_tokens parameter so the agent can generate longer, more detailed responses"},{"key":"C","text":"Restart the exploration session from scratch whenever the agent''s responses become vague to ensure a clean context"},{"key":"D","text":"Use /compact repeatedly throughout the session to free up context space for new discoveries"}]'::jsonb,
  ARRAY['A']::text[],
  'Hiện tượng suy thoái ngữ cảnh (context rot) trong các phiên chat dài hạn được xử lý tốt nhất bằng cách lưu trữ các thông tin cốt lõi (như tên lớp, hàm, đường dẫn) vào một file nháp (scratchpad) để neo thông tin một cách ổn định.',
  'Prompt Engineering',
  ARRAY['Context Rot', 'Scratchpad', 'Memory']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca6',
  'cca-f',
  6,
  'In the research automation platform, the orchestrator agent runs an agentic loop that sends requests to Claude, receives responses, and decides whether to continue or stop. What mechanism does the loop use to determine whether it should execute another tool call or present the final response?',
  '[{"key":"A","text":"The model includes a boolean \"continue\" field in its JSON response body that the loop evaluates after each iteration"},{"key":"B","text":"The loop counts the number of tool calls made and stops after reaching a predefined maximum"},{"key":"C","text":"The system prompt includes a termination keyword that the model outputs when it has finished processing"},{"key":"D","text":"The stop_reason field in the API response indicates \"tool_use\" when the model wants to call a tool and \"end_turn\" when it considers the task complete"}]'::jsonb,
  ARRAY['D']::text[],
  'Sử dụng trường ''stop_reason'' của Messages API là giải pháp chính thống và tin cậy nhất. Giá trị ''tool_use'' nghĩa là vòng lặp cần gọi công cụ và tiếp tục, còn ''end_turn'' nghĩa là tác nhân đã hoàn thành.',
  'Agentic Architecture',
  ARRAY['Agentic Loop', 'stop_reason', 'Flow Control']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca7',
  'cca-f',
  7,
  'After the coordinator collects web search results, it invokes the findings synthesis agent to combine all research. However, the synthesis output shows no awareness of the previously gathered search findings, even though they are clearly present in the coordinator''s conversation history. What is the most likely cause?',
  '[{"key":"A","text":"The coordinator''s context window exceeded its limit, causing the search results to be silently dropped before the synthesis agent was invoked"},{"key":"B","text":"The synthesis agent''s system prompt contains an instruction that explicitly excludes externally sourced data"},{"key":"C","text":"The search results were returned in an encoding format that the synthesis agent cannot process"},{"key":"D","text":"Subagents do not automatically inherit the coordinator''s conversation history, so the search findings were never part of the synthesis agent''s context"}]'::jsonb,
  ARRAY['D']::text[],
  'Do kiến trúc cô lập ngữ cảnh giữa các subagents để chống tràn token và nhiễu dữ liệu, các tác nhân con không tự thừa hưởng lịch sử chat từ điều phối viên trừ khi nó được truyền thủ công trong prompt.',
  'Agentic Architecture',
  ARRAY['Context Isolation', 'Subagents', 'Data Passing']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca8',
  'cca-f',
  8,
  'While implementing the orchestrator agent''s agentic loop for the research platform, a developer decides to check whether the assistant''s response text contains the phrase "research complete" to determine when the loop should terminate. Why is this approach considered an anti-pattern?',
  '[{"key":"A","text":"It relies on parsing non-deterministic natural language output instead of using the reliable stop_reason field, which may produce inconsistent termination behavior"},{"key":"B","text":"It prevents the model from generating tool_use content blocks during subsequent loop iterations"},{"key":"C","text":"It causes the API to return an error because response text cannot be inspected until the full conversation is complete"},{"key":"D","text":"It forces the model to always output the phrase before it can use any tools, adding unnecessary latency to every iteration"}]'::jsonb,
  ARRAY['A']::text[],
  'Ngôn ngữ tự nhiên có tính phi xác định (non-deterministic). Việc dựa vào phân tích cú pháp chuỗi thô để phát hiện điều kiện dừng vòng lặp là rất dễ gãy hỏng, thay vào đó cần dùng ''stop_reason'' có tính chất xác định.',
  'Agentic Architecture',
  ARRAY['Anti-Pattern', 'Determinism', 'stop_reason']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca9',
  'cca-f',
  9,
  'Your document extraction pipeline uses a two-step process: first, it calls extract_metadata to determine the document type, then calls extract_fields with a type-specific schema. You plan to migrate this pipeline to the Message Batches API to reduce costs on a nightly run of 500 documents. What limitation of the batch API requires you to redesign this workflow?',
  '[{"key":"A","text":"The Message Batches API does not support multi-turn tool calling within a single request, so you cannot execute a tool and return its result mid-request for a second tool call"},{"key":"B","text":"The Message Batches API limits each submission to a maximum of 100 requests per batch"},{"key":"C","text":"The Message Batches API does not support forced tool selection, allowing only tool_choice set to auto"},{"key":"D","text":"The Message Batches API requires all requests in a batch to share the same system prompt and tool definitions"}]'::jsonb,
  ARRAY['A']::text[],
  'Message Batches API chỉ hỗ trợ xử lý không trạng thái một lượt (single-turn) bất đồng bộ. Nó không thể thực hiện chuỗi hội thoại nhiều lượt (gọi công cụ thứ nhất, đợi kết quả phản hồi rồi mới quyết định gọi tiếp công cụ thứ hai).',
  'Message Batches API',
  ARRAY['Batch API', 'Limitations', 'Single-Turn']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca10',
  'cca-f',
  10,
  'You spent yesterday investigating a bug in the customer service agent''s refund flow. You named that investigation session "refund-trace" and identified several promising leads. Today you want to continue exactly where you left off, preserving the full conversation history from yesterday. Which command correctly resumes your named session?',
  '[{"key":"A","text":"claude --session refund-trace --continue"},{"key":"B","text":"claude --load refund-trace"},{"key":"C","text":"claude --fork refund-trace"},{"key":"D","text":"claude --resume refund-trace"}]'::jsonb,
  ARRAY['D']::text[],
  'Trong Claude Code CLI, lệnh chuẩn xác để mở lại một phiên làm việc đã lưu trữ theo tên là ''claude --resume <tên_phiên>'' (hoặc ''-r <tên_phiên>'').',
  'Claude Code CLI',
  ARRAY['CLI Commands', 'Claude Code', 'Session Management']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca11',
  'cca-f',
  11,
  'Your multi-agent system queries a documentation database containing thousands of technical articles organized by product area and topic. Agents currently make numerous exploratory tool calls to discover what documentation is available before performing their targeted searches, consuming significant tokens and increasing latency. What is the recommended approach to reduce these exploratory calls?',
  '[{"key":"A","text":"Cache the results of exploratory tool calls in a shared database that all agents query before initiating new searches"},{"key":"B","text":"Increase each agent''s max_tokens allocation to accommodate the additional exploratory tool call results"},{"key":"C","text":"Expose a content catalog as an MCP resource that provides a browsable hierarchy of available documentation topics and article summaries"},{"key":"D","text":"Pre-load complete summaries of all documentation articles into the system prompt for every agent invocation"}]'::jsonb,
  ARRAY['C']::text[],
  'Khai báo danh mục nội dung (content catalog) như một tài nguyên MCP (MCP Resource) cung cấp cấu trúc cây giúp tác nhân có cái nhìn bao quát từ trước, tránh các cuộc gọi công cụ thăm dò tốn kém và mất thời gian.',
  'Model Context Protocol',
  ARRAY['MCP Resources', 'Optimization', 'Latency']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca12',
  'cca-f',
  12,
  'Your team asks Claude Code to transform legacy configuration files from an INI format into YAML. Despite detailed prose instructions describing the mapping rules, Claude Code produces inconsistent key naming and indentation across different files. What is the most effective technique to resolve this inconsistency?',
  '[{"key":"A","text":"Add a general instruction in CLAUDE.md that says \"always be consistent when transforming configuration formats\""},{"key":"B","text":"Increase the length of the prose instructions by adding more detailed paragraphs explaining each mapping rule"},{"key":"C","text":"Switch to plan mode and ask Claude Code to outline its transformation approach before applying any changes"},{"key":"D","text":"Provide 2–3 concrete input/output examples showing the exact transformation from specific INI sections to the expected YAML output"}]'::jsonb,
  ARRAY['D']::text[],
  'Cung cấp các mẫu ví dụ vào/ra cụ thể (few-shot examples) là biện pháp tin cậy hàng đầu khi thực hiện các tác vụ định dạng hoặc chuyển đổi nghiêm ngặt, giúp mô hình bám sát cấu trúc mong muốn hơn văn bản mô tả.',
  'Prompt Engineering',
  ARRAY['Few-Shot', 'Configuration', 'Consistency']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca13',
  'cca-f',
  13,
  'A team added "only report high-confidence findings" to their CI code review prompt after developers complained about too many low-value findings. The false positive rate, however, has not improved. What is the most likely reason this instruction failed to reduce false positives?',
  '[{"key":"A","text":"The instruction conflicts with the default tool_choice setting, which forces the model to report all detected issues"},{"key":"B","text":"The instruction does not define specific categories of issues to report or skip, so the model has no actionable criteria for filtering"},{"key":"C","text":"The model always treats every finding as high-confidence because it cannot calibrate certainty without labeled training data"},{"key":"D","text":"The CI pipeline''s non-interactive mode prevents the model from processing system prompt instructions"}]'::jsonb,
  ARRAY['B']::text[],
  'Các chỉ thị mang tính chủ quan, mơ hồ như ''high-confidence'' hay ''be conservative'' không đem lại tác dụng thực tế vì mô hình thiếu tiêu chí khách quan để lọc. Cần chỉ ra danh mục hoặc trường hợp cụ thể được phép hoặc bị cấm báo cáo.',
  'Prompt Engineering',
  ARRAY['Vague Instructions', 'CI/CD', 'Signal-to-Noise']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca14',
  'cca-f',
  14,
  'When a web search subagent in a multi-agent research pipeline encounters a database timeout and returns the generic message "search unavailable" to the coordinator, what is the primary problem this creates?',
  '[{"key":"A","text":"It causes the coordinator to immediately terminate the entire research workflow"},{"key":"B","text":"It prevents the coordinator from distinguishing between a transient timeout and a permanent access restriction, limiting its ability to choose an appropriate recovery strategy"},{"key":"C","text":"It forces the coordinator to retry the same query indefinitely until the service becomes available"},{"key":"D","text":"It causes all other subagents to halt their processing until the error is resolved"}]'::jsonb,
  ARRAY['B']::text[],
  'Lỗi chung chung ẩn giấu bản chất của sự cố. Việc che giấu này khiến tác nhân điều phối không thể phân biệt lỗi tạm thời (cần thử lại) với lỗi vĩnh viễn (cần bỏ qua hoặc chuyển hướng), làm giảm độ tin cậy của hệ thống.',
  'Agentic Architecture',
  ARRAY['Error Context', 'Recovery Strategy', 'Subagents']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca15',
  'cca-f',
  15,
  'You need to locate all migration script files across a large monorepo. These files follow the naming convention YYYYMMDD_description.sql and are distributed across multiple service directories at various nesting levels. Which built-in tool is the most appropriate choice for this task?',
  '[{"key":"A","text":"Read, loading each service directory to manually scan for migration files"},{"key":"B","text":"Grep, searching file contents for SQL migration keywords like CREATE TABLE or ALTER TABLE"},{"key":"C","text":"Bash, running a custom script that parses directory listings and filters by file extension"},{"key":"D","text":"Glob, using a pattern like **/_.sql to match migration file paths across all directories"}]'::jsonb,
  ARRAY['D']::text[],
  'Công cụ ''Glob'' được thiết kế chuyên biệt để duyệt và khớp tên file/đường dẫn một cách đệ quy trong thư mục dự án theo mẫu định sẵn, giúp tối ưu hóa hiệu suất và tiết kiệm cửa sổ ngữ cảnh hơn là quét nội dung hoặc dùng Bash.',
  'Claude Code CLI',
  ARRAY['Glob Tool', 'File Navigation', 'Claude Code']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca16',
  'cca-f',
  16,
  'The document analysis agent returns its findings as narrative text that blends source citations into flowing paragraphs. When the coordinator passes these results to the synthesis agent, the final report frequently contains misattributed or missing source references. Which change to the inter-agent data format would best address this problem?',
  '[{"key":"A","text":"Have the document analysis agent return findings in a structured format that separates each claim from its metadata, including source URLs, document names, and page numbers"},{"key":"B","text":"Instruct the synthesis agent to search the original documents again to independently verify all citations before generating the report"},{"key":"C","text":"Add a post-processing regular expression step that extracts citations from the narrative paragraphs after synthesis is complete"},{"key":"D","text":"Increase the synthesis agent''s context window budget so it can process longer narrative passages without losing citation details"}]'::jsonb,
  ARRAY['A']::text[],
  'Áp dụng định dạng truyền tin có cấu trúc (như JSON) giữa các tác nhân giúp chia tách rõ ràng giữa nội dung khẳng định và siêu dữ liệu (trích dẫn), ngăn chặn việc mô hình bị nhầm lẫn hoặc thất lạc trích dẫn gốc.',
  'Agentic Architecture',
  ARRAY['Structured Handoffs', 'JSON', 'Citations']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca17',
  'cca-f',
  17,
  'Your repository contains Python database migration files in three unrelated directories: db/migrations/, services/auth/migrations/, and tools/data/migrations/. All migration files must follow identical conventions for transaction handling and rollback patterns. What is the most maintainable approach to enforce these conventions?',
  '[{"key":"A","text":"Add all migration conventions to the root CLAUDE.md so they are always available, even when editing non-migration files"},{"key":"B","text":"Place a CLAUDE.md file with identical content in each of the three migration directories"},{"key":"C","text":"Create a shared migration-rules.md file and use @import in three separate subdirectory CLAUDE.md files to reference it"},{"key":"D","text":"Create a single file in .claude/rules/ with a glob pattern like globs: [\"**/migrations/**/*.py\"] that matches migration files across all locations"}]'::jsonb,
  ARRAY['D']::text[],
  'Cách tối ưu nhất trong Claude Code là tạo một file quy tắc duy nhất trong thư mục ''.claude/rules/'' kèm thuộc tính ''globs'' để tự động nạp chỉ khi tác nhân sửa các file Python nằm trong bất cứ thư mục migration nào.',
  'Claude Code CLI',
  ARRAY['Project Configuration', 'Memory rules', 'Claude Code']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca18',
  'cca-f',
  18,
  'A customer contacts your agent with a vague complaint: "Something is wrong with my account. I''ve been overcharged and I think someone else has accessed it." The scope of each concern is unclear until initial lookups are performed. Which task decomposition strategy is most appropriate for handling this type of open-ended, multi-concern request?',
  '[{"key":"A","text":"A predefined decision tree that maps each keyword in the customer''s message to a specific tool call sequence"},{"key":"B","text":"A fixed sequential pipeline that always runs fetch_customer, then get_order for the last 10 orders, then issue_refund for any billing discrepancy found"},{"key":"C","text":"Dynamic adaptive decomposition that investigates each concern based on what is discovered at each step, generating follow-up subtasks as findings emerge"},{"key":"D","text":"A single comprehensive prompt that includes all available customer data and asks the agent to resolve every concern in one turn"}]'::jsonb,
  ARRAY['C']::text[],
  'Với các yêu cầu phức tạp và mơ hồ, chiến lược ''Dynamic adaptive decomposition'' giúp tác nhân suy luận từng bước, tự khám phá manh mối và sinh các tiểu tác vụ tiếp nối dựa trên kết quả trung gian thu được.',
  'Agentic Architecture',
  ARRAY['Task Decomposition', 'Adaptive Agents', 'Reasoning']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca19',
  'cca-f',
  19,
  'In the research platform, the report generation agent must only produce a final report after the synthesis agent has confirmed that all research areas have adequate coverage. A developer enforces this ordering with a system prompt instruction telling the report agent to wait for synthesis confirmation. Why is a programmatic prerequisite gate a better choice?',
  '[{"key":"A","text":"Programmatic prerequisite gates provide deterministic enforcement, whereas prompt-based instructions have a non-zero failure rate and cannot guarantee compliance"},{"key":"B","text":"System prompts cannot reference other agents, so the report agent has no way to know the synthesis step exists"},{"key":"C","text":"Prompt instructions are only evaluated at the start of a session and are ignored during subsequent tool calls"},{"key":"D","text":"Programmatic gates run faster than prompt-based instructions, reducing overall pipeline latency"}]'::jsonb,
  ARRAY['A']::text[],
  'Do mô hình mang tính chất xác suất, việc hướng dẫn bằng prompt không thể đảm bảo 100% tuân thủ trong các logic luồng công việc nghiêm ngặt. Rào chắn bằng mã lập trình (code-level gate) đem lại sự thực thi tuyệt đối mang tính xác định.',
  'Security & Guardrails',
  ARRAY['Deterministic Gate', 'Reliability', 'Workflow Guardrails']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca20',
  'cca-f',
  20,
  'A team provides four few-shot examples showing Claude how to distinguish acceptable defensive null-check patterns from genuine error-handling bugs during code review. After deployment, the agent correctly identifies a problematic error-handling pattern in a codebase written in a different language than any of the examples. What best explains this behavior?',
  '[{"key":"A","text":"The model defaulted to flagging the unfamiliar pattern because it did not match any known acceptable examples"},{"key":"B","text":"The few-shot examples taught the model the underlying judgment criteria for evaluating error handling which it generalized to the structurally similar but previously unseen pattern"},{"key":"C","text":"The model recognized the specific language syntax from its pre-training data and applied language-specific review rules"},{"key":"D","text":"The model decomposed the novel pattern into exact sub-patterns that matched elements from the few-shot examples"}]'::jsonb,
  ARRAY['B']::text[],
  'Mẫu few-shot không chỉ hướng dẫn cú pháp mà còn truyền đạt các tiêu chuẩn phán đoán trừu tượng (judgment criteria), cho phép mô hình học được khái niệm cốt lõi và suy luận rộng ra các ngôn ngữ lập trình khác.',
  'Evaluation & Bias',
  ARRAY['Generalization', 'In-Context Learning', 'Few-Shot']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca21',
  'cca-f',
  21,
  'The get_order tool in your customer service agent sometimes fails in two distinct ways: a temporary database timeout that resolves on retry, and a business policy violation when a customer requests a refund on a non-returnable item. Currently, both failures return a generic message: "Operation failed." Why is returning structured error metadata with distinct error categories critical for these two scenarios?',
  '[{"key":"A","text":"The MCP protocol requires every tool error to include a specific error category before the agent is allowed to continue the conversation"},{"key":"B","text":"Without structured metadata distinguishing transient errors from business rule violations, the agent cannot determine whether to retry the call or explain the policy to the customer, leading to wasted retries or poor customer communication"},{"key":"C","text":"Structured error metadata reduces token usage in the conversation history by replacing verbose error messages with compact error codes"},{"key":"D","text":"Structured error metadata is primarily for logging and observability purposes and does not change how the agent responds to the customer"}]'::jsonb,
  ARRAY['B']::text[],
  'Nếu không có siêu dữ liệu cấu trúc phân biệt giữa lỗi tạm thời (timeout) và lỗi nghiệp vụ (vi phạm chính sách), tác nhân sẽ không biết khi nào cần thử lại (retry) hoặc giải thích từ chối cho khách hàng.',
  'Model Context Protocol',
  ARRAY['MCP Tools', 'Structured Errors', 'Reliability']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca22',
  'cca-f',
  22,
  'Your invoice extraction pipeline processes documents from multiple international vendors. Dates appear in varied formats across vendors, including "15 March 2024," "03/15/2024," and "2024.03.15." The JSON schema enforces ISO 8601 format for date fields via tool_use, yet extracted dates occasionally retain the vendor''s original format. What is the most effective way to ensure consistent date normalization across all vendor documents?',
  '[{"key":"A","text":"Adding a regex pattern constraint to the date field in the JSON schema to enforce the YYYY-MM-DD format"},{"key":"B","text":"Including explicit format normalization rules in the extraction prompt and also enforcing the ISO 8601 date format in the output/tool schema (e.g., using format: \"date\" or strict tool use) so the model both normalizes and is validated"},{"key":"C","text":"Creating a separate extraction schema for each vendor''s known date format"},{"key":"D","text":"Implementing a validation-retry loop that rejects extractions containing any non-ISO 8601 date"}]'::jsonb,
  ARRAY['B']::text[],
  'Cách tiếp cận đa tầng là hiệu quả nhất: Hướng dẫn rõ ràng việc chuyển đổi định dạng trong prompt (để định hướng suy luận) kết hợp với ràng buộc cấu trúc kiểu ''format: "date"'' trong schema để kiểm định đầu ra.',
  'Prompt Engineering',
  ARRAY['Normalization', 'JSON Schema', 'Multi-layered validation']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca23',
  'cca-f',
  23,
  'Your team''s project-level CLAUDE.md has grown to over 500 lines, covering testing conventions, API design standards, deployment procedures, and security policies. Engineers find it difficult to maintain, and Claude Code occasionally overlooks relevant guidelines. What is the recommended approach to improve organization and reliability of these configuration instructions?',
  '[{"key":"A","text":"Consolidate all guidelines into the system prompt configuration of the project''s MCP servers"},{"key":"B","text":"Move all content to user-level ~/.claude/CLAUDE.md so each engineer can maintain a personal copy of the instructions"},{"key":"C","text":"Split the content into focused topic-specific files in .claude/rules/, such as testing.md, api-conventions.md, and deployment.md"},{"key":"D","text":"Duplicate the full CLAUDE.md into every subdirectory of the project to ensure Claude Code always finds nearby instructions"}]'::jsonb,
  ARRAY['C']::text[],
  'Tách nhỏ tệp CLAUDE.md khổng lồ thành các file quy tắc chuyên biệt và đặt trong ''.claude/rules/'' giúp nạp thông tin động và đúng lúc, tối ưu cửa sổ ngữ cảnh và tăng sự tuân thủ quy định.',
  'Claude Code CLI',
  ARRAY['Project Configuration', 'rules', 'Claude Code']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca24',
  'cca-f',
  24,
  'Your customer support agent inconsistently decides when to escalate cases to human agents. Adding instructions like "only escalate high-confidence cases" and "be conservative about escalation" to the system prompt has not improved consistency. What approach would most effectively produce reliable escalation behavior?',
  '[{"key":"A","text":"Require the agent to attempt autonomous resolution for at least three turns before allowing any escalation"},{"key":"B","text":"Implement sentiment analysis on customer messages and trigger escalation when negative sentiment exceeds a defined threshold"},{"key":"C","text":"Have the agent self-report a confidence score on each turn and escalate whenever it falls below 60%"},{"key":"D","text":"Add explicit escalation criteria and include few-shot examples in the prompt (for example, in the first user message) that demonstrate specific scenarios where the agent should escalate versus resolve autonomously"}]'::jsonb,
  ARRAY['D']::text[],
  'Thay thế các hướng dẫn chung chung bằng tiêu chí phân loại rõ ràng và kèm các ví dụ few-shot chỉ ra ranh giới giữa việc tự xử lý và việc cần chuyển giao cho con người là phương án tối ưu.',
  'Prompt Engineering',
  ARRAY['Escalation', 'Few-Shot', 'Decision Boundaries']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca25',
  'cca-f',
  25,
  'Your team must replace the project''s logging library across 60+ source files. The migration involves auditing current usage patterns, selecting appropriate replacement APIs for different log levels, and applying consistent changes. What is the recommended workflow for completing this task in Claude Code?',
  '[{"key":"A","text":"Start 60 separate Claude Code sessions in parallel, one per file, each using direct execution independently"},{"key":"B","text":"Use plan mode for the full duration of the migration, including both the investigation phase and every individual file modification"},{"key":"C","text":"Use direct execution for the entire migration, processing each file one at a time without any upfront investigation"},{"key":"D","text":"Start with plan mode to audit usage patterns and design the migration strategy, then switch to direct execution to apply the changes according to the plan"}]'::jsonb,
  ARRAY['D']::text[],
  'Quy trình chuẩn ''Khám phá -> Lên kế hoạch -> Thực thi'' là tối ưu nhất. Lập kế hoạch trước qua ''/plan'' (đọc hiểu kiến trúc không sửa đổi), sau đó chuyển sang thực thi trực tiếp để viết code nhất quán.',
  'Claude Code CLI',
  ARRAY['Plan Mode', 'Workflow', 'Refactoring']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca26',
  'cca-f',
  26,
  'After the web search agent executes a tool and receives results during its agentic loop, the developer appends the tool results to the conversation history before sending the next API request. What is the primary purpose of including these results in the conversation?',
  '[{"key":"A","text":"To allow the API to deduplicate repeated tool calls and reduce unnecessary computation"},{"key":"B","text":"To enable the API to cache the tool results server-side for faster processing of subsequent requests"},{"key":"C","text":"To satisfy an API validation rule that requires strictly alternating message roles in the conversation array"},{"key":"D","text":"To enable the model to incorporate the new information into its reasoning and determine the appropriate next action in the loop"}]'::jsonb,
  ARRAY['D']::text[],
  'Bằng cách chèn nội dung ''tool_result'' như một tin nhắn mới của người dùng, mô hình nhận được đầu ra thực tế của công cụ để đưa vào suy luận tiếp nối, quyết định xem nhiệm vụ đã hoàn tất chưa.',
  'Agentic Architecture',
  ARRAY['Tool Integration', 'Loop Reasoning', 'Messages API']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca27',
  'cca-f',
  27,
  'One of your engineers creates a slash command that scaffolds a new REST API endpoint with standardized error handling and validation. The team agrees this command should be available to all developers working on the project without requiring any manual setup on individual machines. Which configuration achieves this goal?',
  '[{"key":"A","text":"Define the command inline within the root CLAUDE.md file using @import syntax"},{"key":"B","text":"Place the command file in the project''s .claude/commands/ directory and commit it to version control"},{"key":"C","text":"Place the command file in ~/.claude/commands/ on the engineer''s machine and share the file path in a wiki"},{"key":"D","text":"Add the command as a SKILL.md file in ~/.claude/skills/ with argument-hint frontmatter configured"}]'::jsonb,
  ARRAY['B']::text[],
  'Claude Code cho phép lưu trữ các lệnh custom theo cấp dự án trong thư mục ''.claude/commands/''. Khi đẩy lên Git, toàn bộ các thành viên khác nạp về đều tự động sử dụng được mà không cần cài đặt lại.',
  'Claude Code CLI',
  ARRAY['Custom Commands', 'Collaboration', 'Claude Code']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca28',
  'cca-f',
  28,
  'Your customer service agent connects to fetch_customer and get_order through MCP. The fetch_customer tool returns created_date as a Unix timestamp (e.g., 1718200000), while get_order returns order_date in ISO 8601 format (e.g., "2024-06-12T15:00:00Z"). The agent sometimes misinterprets these inconsistent formats when reasoning about order timelines. What is the recommended approach to ensure consistent date handling before the agent processes these results?',
  '[{"key":"A","text":"Use few-shot examples in the prompt showing the agent how to correctly interpret both Unix timestamps and ISO 8601 dates"},{"key":"B","text":"Implement a PostToolUse hook that normalizes date formats from both tools into a consistent representation before the agent processes the results"},{"key":"C","text":"Add instructions to the system prompt telling the agent to mentally convert all dates to a single format before reasoning about timelines"},{"key":"D","text":"Modify each MCP tool server''s internal implementation to always return dates in the same format"}]'::jsonb,
  ARRAY['D']::text[],
  'Chuẩn hóa dữ liệu tại gốc (ngay trong máy chủ MCP) là giải pháp bền vững và hiệu quả nhất, loại bỏ gánh nặng suy luận logic ngày tháng khỏi LLM và giúp tiết kiệm token.',
  'Model Context Protocol',
  ARRAY['Data Normalization', 'MCP Server', 'Best Practices']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca29',
  'cca-f',
  29,
  'Your automated code review agent flags too many false positives when checking whether code comments are accurate. Developers have started ignoring the agent''s output entirely. Which prompt modification would most effectively reduce false positives in the comment accuracy checks?',
  '[{"key":"A","text":"Specifying \"flag comments only when the described behavior directly contradicts the actual code logic\""},{"key":"B","text":"Adding \"only report high-confidence findings about comment accuracy\" to the system prompt"},{"key":"C","text":"Instructing the agent to \"be conservative and avoid flagging minor comment issues\""},{"key":"D","text":"Including a general instruction to \"prioritize precision over recall when reviewing code comments\""}]'::jsonb,
  ARRAY['A']::text[],
  'Sử dụng quy tắc hành vi khách quan và chặt chẽ (''chỉ báo lỗi khi comment mâu thuẫn trực tiếp với logic code'') giúp mô hình bỏ qua các phàn nàn nhỏ về câu từ hay phong cách, từ đó giảm thiểu false positives.',
  'Prompt Engineering',
  ARRAY['Constraint Design', 'False Positives', 'Code Review']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca30',
  'cca-f',
  30,
  'In a multi-agent research system, the synthesis subagent is responsible for combining findings from other agents into a cohesive report. During testing, you observe that this subagent frequently initiates its own web searches and document retrievals instead of synthesizing the provided findings. The synthesis agent currently has access to all 18 tools in the system. What is the most effective way to resolve this behavior?',
  '[{"key":"A","text":"Increase the amount of context provided to the synthesis agent so it has less reason to perform its own searches"},{"key":"B","text":"Restrict the synthesis agent''s allowedTools to only those relevant to its synthesis role removing search and retrieval tools"},{"key":"C","text":"Configure tool_choice: \"any\" so the synthesis agent is forced to call a tool rather than returning text reducing off-task behavior"},{"key":"D","text":"Add detailed prompt instructions telling the synthesis agent to focus only on combining findings and not to use search tools"}]'::jsonb,
  ARRAY['B']::text[],
  'Áp dụng nguyên tắc Đặc quyền tối thiểu (Principle of Least Privilege). Bằng cách giới hạn danh sách công cụ (''allowedTools'') của tác nhân tổng hợp, bạn chặn đứng khả năng nó đi thực hiện các hành vi sai mục đích.',
  'Agentic Architecture',
  ARRAY['Principle of Least Privilege', 'Tool Scoping', 'Off-task behavior']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca31',
  'cca-f',
  31,
  'An engineer asks Claude Code to fix a bug where a single function throws an error when receiving a null input. The stack trace clearly identifies the file and line number, and the fix requires adding one conditional check. Which mode should the engineer use for this task?',
  '[{"key":"A","text":"Direct execution combined with the Explore subagent to verify no other functions have the same issue before making the change"},{"key":"B","text":"Plan mode, because every code change benefits from an investigation phase before implementation"},{"key":"C","text":"Plan mode, because null handling requires evaluating multiple valid implementation strategies across the codebase"},{"key":"D","text":"Direct execution, because the task is well-scoped with a clear fix in a single file and does not require architectural exploration"}]'::jsonb,
  ARRAY['D']::text[],
  'Với các sửa đổi nhỏ, rõ ràng và đã biết trước vị trí, chế độ Thực thi trực tiếp (Direct execution) là nhanh chóng và tiết kiệm nhất, không cần thiết phải chạy qua chế độ lập kế hoạch quy mô lớn.',
  'Claude Code CLI',
  ARRAY['Execution Mode', 'Claude Code', 'Efficiency']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca32',
  'cca-f',
  32,
  'Your team wants the customer service agent to audit the resolution quality of 50 past support tickets. Each ticket involves different product categories, refund amounts, and escalation decisions. You need the agent to evaluate each ticket''s handling individually and then identify systemic patterns across the full set. Which prompt chaining pattern best supports this workflow?',
  '[{"key":"A","text":"Send all 50 tickets in a single prompt and instruct the agent to evaluate quality and identify patterns in one pass"},{"key":"B","text":"Randomly sample five tickets, evaluate them in a single prompt, and extrapolate the findings to the remaining 45 tickets"},{"key":"C","text":"Have the agent process tickets in pairs, comparing each pair for similarities before aggregating all pair comparisons at the end"},{"key":"D","text":"Run per-ticket analysis passes that evaluate each ticket individually, then run a separate cross-ticket synthesis pass to identify systemic patterns across all evaluations"}]'::jsonb,
  ARRAY['D']::text[],
  'Đây là mô hình Map-Reduce nổi tiếng trong prompt chaining: Phân tích từng thực thể riêng biệt (Map) để tránh loãng sự chú ý, sau đó chạy lượt tổng hợp (Reduce) để rút ra các mô thức toàn cục.',
  'Prompt Engineering',
  ARRAY['Map-Reduce', 'Prompt Chaining', 'Batch Audit']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca33',
  'cca-f',
  33,
  'Your CI code review system generates structured JSON findings for pull requests, and developers can dismiss findings they consider incorrect. Over the past quarter, the dismissal rate has risen to 40%, but you cannot determine which types of code constructs are triggering the most dismissed findings. What should you add to each structured finding to enable systematic analysis of why developers are dismissing specific results?',
  '[{"key":"A","text":"A review_instance_id field linking each finding to the specific Claude session that generated it"},{"key":"B","text":"A detected_pattern field describing the specific code construct that triggered the finding enabling correlation between dismissed findings and recurring pattern types"},{"key":"C","text":"A timestamp field recording when the finding was generated to correlate dismissals with time of day"},{"key":"D","text":"A confidence_score field with a numeric value so dismissed findings can be filtered by the model''s self-reported certainty"}]'::jsonb,
  ARRAY['B']::text[],
  'Bổ sung trường ''detected_pattern'' chỉ ra chính xác loại lỗi mã nguồn giúp bạn phân loại và thống kê xem lỗi nào thường bị nhà phát triển bỏ qua nhất, từ đó tinh chỉnh lại prompt hệ thống có trọng tâm.',
  'Security & Guardrails',
  ARRAY['Telemetry', 'Review Accuracy', 'JSON Feedback']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca34',
  'cca-f',
  34,
  'A customer-facing support agent built with the Claude Agent SDK handles multi-issue sessions where customers raise several complaints in one conversation. After many turns, the agent begins confusing order details between different issues, such as applying the wrong refund amount to the wrong order. What is the most effective approach to prevent this problem?',
  '[{"key":"A","text":"Instruct the agent in the system prompt to carefully track all issue details throughout the conversation"},{"key":"B","text":"Extract structured issue data such as order IDs, amounts, and statuses into a persistent case facts block included in each prompt"},{"key":"C","text":"Summarize the full conversation every five turns to keep context usage low"},{"key":"D","text":"Limit multi-issue sessions to a maximum of two issues and require the customer to start new sessions for additional complaints"}]'::jsonb,
  ARRAY['B']::text[],
  'Trích xuất và duy trì một vùng thông tin thực tế dạng cấu trúc cứng (''case facts block'') ở đầu mỗi prompt là cách hiệu quả nhất để giữ mô hình không bị nhầm lẫn dữ liệu qua các lượt chat dài.',
  'Prompt Engineering',
  ARRAY['State Management', 'Case Facts', 'SDK Best Practices']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca35',
  'cca-f',
  35,
  'Your project enforces specific conventions for all Jest test files, including fixture usage patterns and assertion styles. These test files are distributed across dozens of directories throughout the repository (e.g., src/components/, src/services/, src/utils/, lib/helpers/). You need these conventions to load automatically only when Claude Code edits a test file. Which configuration correctly implements this?',
  '[{"key":"A","text":"Place the conventions in a user-level ~/.claude/CLAUDE.md file and instruct each developer to add them manually"},{"key":"B","text":"Create a file in .claude/rules/ with YAML frontmatter containing paths: [\"**/*.test.ts\", \"**/*.test.tsx\"] to target test files across all directories"},{"key":"C","text":"Add the testing conventions to the project-level CLAUDE.md so they are loaded during every interaction regardless of file type"},{"key":"D","text":"Create a CLAUDE.md file inside each directory that contains test files, repeating the conventions in every location"}]'::jsonb,
  ARRAY['B']::text[],
  'Sử dụng quy tắc định vị theo đường dẫn (path-scoped rules) qua frontmatter YAML trong thư mục ''.claude/rules/'' giúp các chỉ thị luôn nằm im và chỉ kích hoạt khi nạp đúng các file kiểm thử tương ứng.',
  'Claude Code CLI',
  ARRAY['Path Scoped Rules', 'Project Rules', 'Claude Code']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca36',
  'cca-f',
  36,
  'After submitting 200 document extraction requests to the Message Batches API, you discover that 15 requests failed because the source documents exceeded context limits. You need to resubmit only the failed requests after chunking those documents into smaller sections. How should you identify which specific documents need resubmission?',
  '[{"key":"A","text":"Use the custom_id field assigned to each request to correlate failures back to the specific source documents"},{"key":"B","text":"Query the batch status endpoint with the batch_id to retrieve an ordered index list of failed requests"},{"key":"C","text":"Parse the error response bodies to extract document filenames from the original prompt text"},{"key":"D","text":"Compare the count of successful results against the original ordered submission list to determine which entries are missing"}]'::jsonb,
  ARRAY['A']::text[],
  'Do kết quả trả về từ Batch API không bảo đảm thứ tự ban đầu, việc định danh duy nhất thông qua ''custom_id'' cho mỗi yêu cầu là cơ chế chuẩn để khớp kết quả hoặc phát hiện lỗi của từng tài liệu.',
  'Message Batches API',
  ARRAY['custom_id', 'Batch Correlation', 'Error Tracking']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca37',
  'cca-f',
  37,
  'Within the research automation platform, the web search agent discovers a set of URLs that the document analysis agent needs to process. Which approach correctly follows the hub-and-spoke orchestration pattern?',
  '[{"key":"A","text":"The web search agent writes URLs to a shared memory store that the document analysis agent reads concurrently during its own execution"},{"key":"B","text":"Both agents independently poll a shared message queue where the web search agent deposits URLs for the document analysis agent to consume"},{"key":"C","text":"The web search agent invokes the document analysis agent directly through a peer-to-peer call, passing the URLs without coordinator involvement"},{"key":"D","text":"The coordinator receives the URLs from the web search agent and includes them in the prompt when delegating work to the document analysis agent"}]'::jsonb,
  ARRAY['D']::text[],
  'Trong mô hình hình sao (hub-and-spoke / orchestrator-worker), các tác nhân con không trao đổi trực tiếp mà bắt buộc phải định tuyến thông tin qua điều phối viên trung tâm để kiểm soát luồng.',
  'Agentic Architecture',
  ARRAY['Hub-and-Spoke', 'Orchestration', 'Subagents']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca38',
  'cca-f',
  38,
  'A customer reaches your support agent and immediately says, "I would like to speak with a real person, please." The agent has access to tools that could likely resolve the customer''s underlying billing issue quickly. What is the correct agent behavior in this situation?',
  '[{"key":"A","text":"Inform the customer that billing issues can typically be resolved faster by the automated agent and proceed with investigation"},{"key":"B","text":"Acknowledge the customer''s request and immediately escalate to a human agent"},{"key":"C","text":"Ask the customer to describe their issue so the agent can attempt a quick resolution before transferring"},{"key":"D","text":"Investigate the billing issue silently and then escalate, providing the human agent with a complete resolution summary"}]'::jsonb,
  ARRAY['B']::text[],
  'Best practice hàng đầu của tác nhân hỗ trợ khách hàng là tuyệt đối tôn trọng yêu cầu trò chuyện với con người ngay khi được nhắc tới, tránh kéo dài thời gian gây bực bội cho người dùng.',
  'Security & Guardrails',
  ARRAY['Human Handoff', 'Agent Design', 'UX Guidelines']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca39',
  'cca-f',
  39,
  'A user submits a simple factual question to the research automation platform that can be fully answered with a single web lookup. The coordinator has access to the web search, document analysis, synthesis, and report generation subagents. How should the coordinator handle this query differently than a complex multi-faceted research topic?',
  '[{"key":"A","text":"Always invoke the full pipeline of all four subagents to ensure consistent and thorough output regardless of query complexity"},{"key":"B","text":"Analyze the query requirements and invoke only the web search agent, skipping document analysis, synthesis, and report generation when they are unnecessary"},{"key":"C","text":"Forward the question to the user interface without involving any subagents since it is a simple query"},{"key":"D","text":"Route the query to the synthesis agent first so it can assess whether additional subagents are needed"}]'::jsonb,
  ARRAY['B']::text[],
  'Định tuyến động (dynamic routing) giúp tối ưu hóa chi phí và tốc độ bằng cách chỉ kích hoạt các subagents thực sự cần thiết cho độ phức tạp của câu hỏi hiện tại, lược bỏ các bước cồng kềnh thừa thãi.',
  'Agentic Architecture',
  ARRAY['Dynamic Routing', 'Cost Optimization', 'Orchestrator']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca40',
  'cca-f',
  40,
  'After completing an initial analysis of your customer service agent''s escalation logic, you want to evaluate two alternative strategies: one using threshold-based triggers and another using policy-gap detection. Both strategies should build on the same baseline understanding of the current codebase without repeating the initial analysis. Which session management approach allows you to explore both independently from the shared baseline?',
  '[{"key":"A","text":"Start two new sessions from scratch and re-run the codebase analysis in each before exploring the respective strategy"},{"key":"B","text":"Copy the session transcript into two new prompts manually and start fresh sessions with the pasted context"},{"key":"C","text":"Resume the original session with --resume and explore both approaches sequentially, using /compact between them to clear context"},{"key":"D","text":"Use fork_session to create two independent branches from the shared analysis baseline, exploring each strategy in its own branch"}]'::jsonb,
  ARRAY['D']::text[],
  'Tính năng chia nhánh phiên ''fork_session'' (hoặc lệnh fork tương tự trong CLI) cho phép rẽ nhánh cuộc hội thoại từ một điểm mốc cố định, giúp thử nghiệm các chiến lược khác nhau mà không phải chạy lại từ đầu.',
  'Claude Code CLI',
  ARRAY['fork_session', 'Claude Code', 'Experimentation']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca41',
  'cca-f',
  41,
  'Your team''s automated code review pipeline generates hundreds of findings weekly, but developers report that many are low-value. With limited reviewer bandwidth, which approach best ensures human reviewers focus on the findings most likely to be actionable?',
  '[{"key":"A","text":"Filter findings by source file directory and route only findings in security-critical paths to human reviewers"},{"key":"B","text":"Run a verification pass where the model self-reports a confidence score alongside each finding then use confidence thresholds to route uncertain findings to human reviewers first"},{"key":"C","text":"Count the lines of code affected by each finding and prioritize findings with the largest code surface area for review"},{"key":"D","text":"Aggregate all findings by category and present only one representative example per category to reduce total reviewer volume"}]'::jsonb,
  ARRAY['A']::text[],
  'Lọc cảnh báo dựa trên mức độ rủi ro (như các thư mục nhạy cảm chứa code thanh toán, xác thực) là cách thiết thực nhất để điều tiết băng thông rà soát của con người vào các chỗ trọng yếu.',
  'Security & Guardrails',
  ARRAY['Risk-based Filtering', 'Noise Reduction', 'Code Review']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca42',
  'cca-f',
  42,
  'Within your customer service system, the agent has four well-described MCP tools: fetch_customer, get_order, issue_refund, and handoff_to_human. Despite clear tool descriptions, whenever a customer mentions the word "refund," the agent consistently calls handoff_to_human instead of issue_refund, even for straightforward cases within policy. After reviewing the configuration, you find the system prompt includes: "When a customer mentions a refund, always ensure a human is involved." What is the most likely cause of this behavior and how should it be resolved?',
  '[{"key":"A","text":"The handoff_to_human tool description overlaps with issue_refund, so both tools should be renamed to more distinctive names"},{"key":"B","text":"The issue_refund tool description needs to explicitly state that it should be selected over handoff_to_human for standard refund requests"},{"key":"C","text":"The keyword-sensitive instruction in the system prompt creates an unintended association that overrides the tool descriptions, so the prompt should be revised to specify precise conditions requiring human involvement"},{"key":"D","text":"The agent''s tool_choice setting should be changed to forced selection of issue_refund whenever refund-related keywords are detected in the input"}]'::jsonb,
  ARRAY['C']::text[],
  'Do chỉ thị trong prompt hệ thống có trọng số rất cao, một luật quá tuyệt đối về từ khóa (''luôn có người tham gia khi nhắc tới refund'') sẽ đè lên mô tả chi tiết của công cụ. Cần tinh chỉnh prompt rõ ràng hơn.',
  'Prompt Engineering',
  ARRAY['System Prompt weight', 'Keyword Associations', 'Tool selection conflict']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca43',
  'cca-f',
  43,
  'A document analysis subagent encounters a timeout when accessing one of three external data sources, but it successfully retrieves data from the other two. Which error handling approach represents a best practice for this situation?',
  '[{"key":"A","text":"Queue the failed query for background retry and block the coordinator from proceeding until the retry completes or times out"},{"key":"B","text":"Terminate the entire analysis workflow and report the timeout failure to the user"},{"key":"C","text":"Return the results from the two successful sources as if all three queries succeeded, omitting any indication that one source failed"},{"key":"D","text":"Attempt local recovery for the transient failure, and if unresolved, propagate structured error context with partial results to the coordinator"}]'::jsonb,
  ARRAY['D']::text[],
  'Trong hệ thống tác nhân phức tạp, chiến lược phục hồi lỗi tốt nhất là thử tự sửa chữa cục bộ, và nếu không được, trả về kết quả một phần kèm siêu dữ liệu mô tả phần lỗi để hệ thống hạ cấp mượt mà.',
  'Agentic Architecture',
  ARRAY['Graceful Degradation', 'Error Propagation', 'Subagents']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca44',
  'cca-f',
  44,
  'While updating a large configuration file, Claude Code''s Edit tool fails with an error indicating the target text appears in multiple locations within the file. The specific section that needs modification contains boilerplate text identical to several other sections. What is the recommended fallback approach?',
  '[{"key":"A","text":"Use Bash to run a sed command that targets the specific line number for replacement"},{"key":"B","text":"Use Read to load the full file contents, apply the modification, and then use Write to save the complete updated file"},{"key":"C","text":"Split the configuration file into smaller files so that each section contains unique text for Edit to match"},{"key":"D","text":"Retry the Edit tool with a larger context window setting to improve text matching precision"}]'::jsonb,
  ARRAY['B']::text[],
  'Edit dựa trên cơ chế so khớp chuỗi duy nhất. Nếu chuỗi bị trùng lặp nhiều nơi, phương án fallback an toàn và chuẩn mực nhất là đọc toàn bộ file (''Read''), thực hiện chỉnh sửa trong bộ nhớ rồi ghi đè lại (''Write'').',
  'Claude Code CLI',
  ARRAY['Edit Fallback', 'Read-Write', 'Claude Code']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca45',
  'cca-f',
  45,
  'A user sends a single request to the research platform asking it to investigate three distinct subtopics: market size projections, regulatory developments, and competitive landscape. Which strategy should the coordinator agent use to handle this multi-faceted request efficiently?',
  '[{"key":"A","text":"Decompose the request into three distinct research items, delegate each to appropriate subagents for parallel investigation, then synthesize the results into a unified response"},{"key":"B","text":"Ask the user to resubmit the request as three separate queries so each can be routed to the correct subagent independently"},{"key":"C","text":"Route the full request to the synthesis agent, which determines what information it needs and delegates research accordingly"},{"key":"D","text":"Forward the entire request to the web search agent and have it address all three subtopics sequentially within a single invocation"}]'::jsonb,
  ARRAY['A']::text[],
  'Chiến lược phân tách công việc (decomposing) và giao cho các subagents xử lý song song, sau đó gộp kết quả là cách vận hành chuẩn mực giúp giảm thời gian chờ đợi (latency) đáng kể.',
  'Agentic Architecture',
  ARRAY['Task Decomposition', 'Parallel Execution', 'Orchestrator']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca46',
  'cca-f',
  46,
  'Your extraction system has the model output field-level confidence scores to route low-confidence extractions to human review. However, reviewers report that many supposedly high-confidence extractions contain errors, while some flagged low-confidence ones are correct. What is the most effective way to improve the accuracy of this routing?',
  '[{"key":"A","text":"Lower the confidence threshold significantly so that nearly all extractions are routed to human review"},{"key":"B","text":"Replace field-level confidence scores with a single document-level confidence score to simplify the routing logic"},{"key":"C","text":"Remove confidence scoring entirely and instead route all extractions from specific document types known to be error-prone to human review"},{"key":"D","text":"Calibrate the confidence score thresholds using a labeled validation set of known-correct extractions to align reported confidence with actual accuracy"}]'::jsonb,
  ARRAY['D']::text[],
  'Mức độ tự tin tự khai báo (self-reported confidence) của LLM thường chưa được căn chỉnh chuẩn xác (uncalibrated). Việc đo đạc trên tập dữ liệu kiểm định nhãn chuẩn để hiệu chỉnh lại ngưỡng phân phối là chuẩn mực khoa học.',
  'Evaluation & Bias',
  ARRAY['Calibration', 'Confidence Scores', 'Human-in-the-loop']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca47',
  'cca-f',
  47,
  'A team needs to integrate Claude''s output with a downstream inventory management system that requires strictly valid JSON conforming to a predefined schema. They are evaluating different approaches to ensure the output never contains JSON syntax errors such as missing brackets, trailing commas, or unescaped characters. Which approach provides the strongest guarantee of schema-compliant, syntax-error-free output?',
  '[{"key":"A","text":"Defining the required structure as a tool''s JSON schema input parameters and extracting data from the tool_use response"},{"key":"B","text":"Providing a detailed JSON template in the system prompt with instructions to replicate the exact structure"},{"key":"C","text":"Appending few-shot examples of correctly formatted JSON to every extraction prompt"},{"key":"D","text":"Parsing the model''s freeform text response with a JSON validator and requesting corrections when syntax errors are detected"}]'::jsonb,
  ARRAY['A']::text[],
  'Sử dụng ''Tool Use'' (hoặc Structured Outputs của API) kích hoạt chế độ giải mã ràng buộc (constrained decoding), cam đoan về mặt toán học rằng văn bản sinh ra khớp 100% với JSON schema đã định nghĩa.',
  'Security & Guardrails',
  ARRAY['Constrained Decoding', 'Structured Outputs', 'JSON Schema']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca48',
  'cca-f',
  48,
  'A developer productivity agent has access to a generic fetch_url tool that can retrieve content from any URL on the internet. During testing, the agent occasionally fetches unrelated external websites when it should only load internal API documentation hosted on the company''s documentation server. Which approach most reliably prevents this misuse?',
  '[{"key":"A","text":"Add a system prompt instruction specifying that fetch_url should only be used for internal documentation URLs"},{"key":"B","text":"Set tool_choice to force fetch_url on every turn so the agent always uses the tool in a predictable manner"},{"key":"C","text":"Replace fetch_url with a load_internal_docs tool that validates URLs against the internal documentation domain before making the request"},{"key":"D","text":"Implement a PostToolUse hook that checks the fetched content and discards results from non-documentation domains"}]'::jsonb,
  ARRAY['C']::text[],
  'Quy tắc an ninh tối thượng: Đừng dựa vào prompt để phòng chống lạm dụng. Hãy thay thế công cụ vạn năng bằng công cụ có phạm vi cực kỳ hẹp và kiểm soát tên miền (allowlist) trực tiếp trong mã code nghiệp vụ.',
  'Security & Guardrails',
  ARRAY['Tool Securing', 'Security Boundaries', 'Guardrails']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca49',
  'cca-f',
  49,
  'You are building an invoice extraction pipeline where Claude extracts line items and totals from scanned invoices. Occasionally, extracted line item amounts do not add up to the extracted total, but both values exist in the source document. Which schema design most effectively enables automatic detection of these arithmetic discrepancies?',
  '[{"key":"A","text":"Include both a \"calculated_total\" field for the sum of extracted line items and a \"stated_total\" field for the document''s printed total, then compare them programmatically to flag mismatches"},{"key":"B","text":"Include a \"confidence_score\" field for the total amount and reject any extraction where the confidence falls below 0.9"},{"key":"C","text":"Add a required \"total_verified\" boolean that the model must set to true after confirming the total matches the line items"},{"key":"D","text":"Require the model to extract the total amount in two separate fields and average the two values to improve accuracy"}]'::jsonb,
  ARRAY['A']::text[],
  'Do LLM làm toán rất kém và mang tính xác suất, thiết kế schema yêu cầu trích xuất dữ liệu thô (stated_total và line items) để nhường quyền tính toán và đối chiếu logic kiểm soát lại cho mã lập trình phía sau.',
  'Evaluation & Bias',
  ARRAY['Arithmetic Validation', 'Schema Design', 'Reliability']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca50',
  'cca-f',
  50,
  'The agent in your customer service system has a single MCP tool called manage_account that handles profile updates, password resets, subscription changes, and account deactivation. During testing, the agent frequently sends incorrect parameters because it conflates these distinct operations. What is the recommended approach to improve the agent''s tool selection reliability?',
  '[{"key":"A","text":"Implement a PostToolUse hook that validates the parameters after each manage_account call and retries with corrected parameters if the operation type was wrong"},{"key":"B","text":"Use tool_choice forced selection to always call manage_account and add a required \"operation_type\" enum parameter to disambiguate the intended action"},{"key":"C","text":"Add a comprehensive description to manage_account that lists all four operations with their respective required parameters and usage conditions"},{"key":"D","text":"Split manage_account into purpose-specific tools such as update_profile, reset_password, change_subscription, and deactivate_account, each with clearly defined input/output contracts"}]'::jsonb,
  ARRAY['D']::text[],
  'Khuyến nghị cốt lõi của Anthropic về thiết kế công cụ: Tránh các siêu công cụ tích hợp quá nhiều thứ (all-in-one). Hãy phân tách thành các công cụ đơn chức năng, có tên rõ ràng và hợp đồng tham số đơn giản.',
  'Model Context Protocol',
  ARRAY['Tool Design', 'Single-purpose Tools', 'MCP Tools']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca51',
  'cca-f',
  51,
  'Your team''s CI/CD pipeline is configured to run Claude Code for automated code review on every pull request. During the first test run, the pipeline job hangs indefinitely and eventually times out without producing any output. What is the most likely cause of this behavior?',
  '[{"key":"A","text":"The pull request diff exceeded the context window limit causing Claude Code to fail silently"},{"key":"B","text":"Claude Code is waiting for interactive input because the -p flag was not included in the command"},{"key":"C","text":"The CLAUDE.md file is missing review criteria causing Claude Code to loop indefinitely while searching for instructions"},{"key":"D","text":"The --output-format flag was not specified preventing Claude Code from writing output to stdout"}]'::jsonb,
  ARRAY['B']::text[],
  'Khi chạy trong môi trường CI/CD (không tương tác), Claude Code cần có cờ ''-p'' (hoặc ''--print'') để kích hoạt chế độ in trực tiếp và thoát ngay sau khi hoàn tất, tránh bị treo chờ nhập phím.',
  'Claude Code CLI',
  ARRAY['CI/CD Flags', 'Claude Code', 'Troubleshooting']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca52',
  'cca-f',
  52,
  'Your company policy requires that any refund exceeding $500 must be approved by a human supervisor before processing. During testing, you discover that prompt instructions alone occasionally fail to prevent the agent from calling issue_refund for amounts above the threshold. Which implementation guarantees this business rule is enforced without exception?',
  '[{"key":"A","text":"Implement a tool call interception hook that inspects the amount parameter on issue_refund calls, blocks those exceeding $500, and redirects the workflow to handoff_to_human"},{"key":"B","text":"Strengthen the system prompt by adding explicit instructions with bold emphasis: \"NEVER issue refunds above $500 without human approval\""},{"key":"C","text":"Include three few-shot examples in the prompt demonstrating correct escalation for high-value refunds"},{"key":"D","text":"Set the issue_refund tool''s JSON schema to define a maximum value constraint of 500 on the amount field"}]'::jsonb,
  ARRAY['A']::text[],
  'Để kiểm soát tuyệt đối không sai sót, giải pháp là chặn đầu cuộc gọi công cụ (programmatic interception hook) tại tầng ứng dụng để phân tích tham số, từ chối thực thi và chuyển giao sang người hỗ trợ.',
  'Security & Guardrails',
  ARRAY['Interception Hook', 'Deterministic Safety', 'Guardrails']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca53',
  'cca-f',
  53,
  'Your team needs to connect Claude Code to both Jira for issue tracking and a proprietary internal approval workflow system that is unique to your organization. A developer proposes building custom MCP servers for both integrations to keep the codebase consistent. What is the recommended approach?',
  '[{"key":"A","text":"Use a community MCP server for Jira and build a custom MCP server only for the proprietary approval workflow"},{"key":"B","text":"Build a single custom MCP server that consolidates both Jira and approval workflow interactions behind a unified interface"},{"key":"C","text":"Use community MCP servers for both integrations by adapting the proprietary approval workflow API to match an existing community server''s interface"},{"key":"D","text":"Build custom MCP servers for both integrations to ensure consistent implementation patterns and full control over tool behavior"}]'::jsonb,
  ARRAY['A']::text[],
  'Cách tiếp cận lai (hybrid approach) được khuyên dùng trong hệ sinh thái MCP: Tiết kiệm tài nguyên bằng cách tận dụng các dự án cộng đồng cho công cụ phổ biến (Jira), và chỉ viết code custom cho hệ thống nội bộ.',
  'Model Context Protocol',
  ARRAY['Community Server', 'MCP Architecture', 'Best Practices']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca54',
  'cca-f',
  54,
  'Your multi-agent research system produces a synthesis report that combines findings from web search and document analysis subagents. Two credible sources provide conflicting market size statistics, and the synthesis subagent must produce the final output. How should the report handle this conflict?',
  '[{"key":"A","text":"Average the two statistics to produce a single balanced figure and cite both sources"},{"key":"B","text":"Omit the market size data point entirely to avoid presenting potentially inaccurate information"},{"key":"C","text":"Present both statistics with full source attribution in a section that explicitly distinguishes contested findings from well-established ones, preserving each source''s methodological context"},{"key":"D","text":"Select the statistic from the most authoritative source based on publication recency and discard the conflicting value"}]'::jsonb,
  ARRAY['C']::text[],
  'Tính trung thực tri thức (intellectual honesty) đòi hỏi tác nhân phải hiển thị cả hai số liệu mâu thuẫn kèm trích dẫn nguồn riêng biệt, thay vì bịa ra con số trung bình hoặc tự ý xóa bỏ thông tin có ích.',
  'Evaluation & Bias',
  ARRAY['Conflict Resolution', 'Synthesis', 'Factual Accuracy']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca55',
  'cca-f',
  55,
  'Your team wants to enforce a universal rule that all generated TypeScript code must use named exports instead of default exports. This standard should apply automatically every time Claude Code writes or modifies any TypeScript file in the project. Where should this convention be defined?',
  '[{"key":"A","text":"In a user-scoped command under ~/.claude/commands/ that each developer runs at the start of their session"},{"key":"B","text":"In the project-level CLAUDE.md or a .claude/rules/ file so it is always loaded for every interaction"},{"key":"C","text":"In a custom slash command stored in .claude/commands/ that developers must remember to call before each task"},{"key":"D","text":"In a skill file under .claude/skills/ with a SKILL.md that engineers invoke on demand before writing code"}]'::jsonb,
  ARRAY['B']::text[],
  'Các tiêu chuẩn dự án mang tính tự động hóa và bao trùm cần phải được viết tại tệp CLAUDE.md ở gốc dự án hoặc các quy tắc ''.claude/rules/'' chung để được nạp vô điều kiện trong mọi phiên làm việc.',
  'Claude Code CLI',
  ARRAY['Named Exports', 'Global Configuration', 'Claude Code']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca56',
  'cca-f',
  56,
  'Currently, your customer service agent has access to fetch_customer and get_order, but both tools have minimal one-line descriptions: "Fetches customer data" and "Gets order information." When a customer asks about a recent purchase, the agent inconsistently alternates between calling fetch_customer and get_order. What is the primary reason for this unreliable tool selection?',
  '[{"key":"A","text":"The tool names are too similar in length, causing the model to confuse them regardless of their descriptions"},{"key":"B","text":"Tool descriptions are the primary mechanism the model uses for tool selection, and the minimal descriptions do not provide enough information to differentiate when each tool should be used"},{"key":"C","text":"The model requires tool_choice to be set to forced selection before it can reliably distinguish between any two tools"},{"key":"D","text":"The agent''s context window is exhausted by other content, leaving insufficient space to load both tool definitions simultaneously"}]'::jsonb,
  ARRAY['B']::text[],
  'Mô tả công cụ (tool description) là đầu mối thông tin quan trọng nhất để LLM quyết định kích hoạt. Việc viết mô tả hời hợt, một dòng sẽ trực tiếp làm suy giảm khả năng phân biệt ngữ cảnh sử dụng của tác nhân.',
  'Model Context Protocol',
  ARRAY['Tool Selection', 'Descriptions', 'MCP Tools']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca57',
  'cca-f',
  57,
  'A CI pipeline needs to run Claude Code to analyze pull requests and produce machine-parseable review findings that a downstream script posts as inline comments. Which combination of CLI flags ensures the output conforms to a predefined JSON structure?',
  '[{"key":"A","text":"--output-format json combined with --json-schema"},{"key":"B","text":"-p combined with --json-schema only"},{"key":"C","text":"--output-format structured combined with --schema-file"},{"key":"D","text":"--format json-strict combined with --validate-output"}]'::jsonb,
  ARRAY['A']::text[],
  'Định dạng chuẩn để nhận được JSON có cấu trúc cứng từ Claude Code CLI là sự kết hợp của cờ ''--output-format json'' cùng định nghĩa ''--json-schema'' đi kèm.',
  'Claude Code CLI',
  ARRAY['Structured JSON', 'CLI Flags', 'Claude Code']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca58',
  'cca-f',
  58,
  'Your support agent calls a lookup_order MCP tool that returns over 40 fields per order, including shipping carrier details, warehouse codes, and internal tracking metadata. The agent only needs 5 fields to process a return. After several order lookups in one session, response quality noticeably declines. Which approach best addresses this issue?',
  '[{"key":"A","text":"Switch to a model with a larger context window so verbose tool outputs can be accommodated without impacting quality"},{"key":"B","text":"Limit the agent to a maximum of three order lookups per session to prevent excessive context accumulation"},{"key":"C","text":"Trim the tool output to include only return-relevant fields before appending the result to conversation context"},{"key":"D","text":"Summarize the entire conversation history periodically using progressive summarization to reclaim token budget"}]'::jsonb,
  ARRAY['C']::text[],
  'Phương án tối ưu là chủ động rút gọn (trim) dữ liệu trả về từ công cụ ngay trước khi đẩy vào ngữ cảnh hội thoại, chỉ giữ lại các trường hữu ích, loại bỏ rác thông tin để chống loãng suy luận.',
  'Model Context Protocol',
  ARRAY['Context Optimization', 'Tool Output Trim', 'Tokens']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca59',
  'cca-f',
  59,
  'Your team is using Claude Code to implement a new CSV parsing module that must handle complex edge cases, including quoted delimiters, multiline fields, and malformed rows. Requirements are well-defined but numerous. Which approach best supports iterative refinement of the implementation?',
  '[{"key":"A","text":"Describe all edge cases in a single prompt and request that Claude Code generate both the implementation and tests in one pass"},{"key":"B","text":"Write a comprehensive test suite covering expected behavior, edge cases, and malformed input handling first, then iterate by sharing test failures with Claude Code to guide corrections"},{"key":"C","text":"Implement the module first without tests, then ask Claude Code to review its own output for issues in the same session"},{"key":"D","text":"Generate the implementation with Claude Code, manually test each edge case by running the code, and file separate bug reports for each failure"}]'::jsonb,
  ARRAY['B']::text[],
  'Phát triển hướng kiểm thử (TDD) là cực kỳ hoàn hảo khi kết hợp với các tác nhân AI. Việc có bộ test xác thực rõ ràng giúp tạo lập vòng phản hồi chất lượng cao cho tác nhân tự sửa chữa code hiệu quả.',
  'Claude Code CLI',
  ARRAY['TDD', 'Iterative Refinement', 'Claude Code']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca60',
  'cca-f',
  60,
  'A new engineer on the team reports that Claude Code is not following the project''s API naming conventions during code generation, even though other engineers on the same repository see the conventions applied correctly. What is the most effective first diagnostic step to identify the cause of this inconsistency?',
  '[{"key":"A","text":"Reinstall Claude Code on the engineer''s machine to clear any corrupted cached configurations"},{"key":"B","text":"Add the API naming conventions as inline comments in every source file so Claude Code reads them directly"},{"key":"C","text":"Move all project configuration from .claude/rules/ into a single root-level CLAUDE.md to simplify the file structure"},{"key":"D","text":"Ask the engineer to run the /memory command to verify which memory files are currently loaded in their session"}]'::jsonb,
  ARRAY['D']::text[],
  'Lệnh ''/memory'' là lệnh chẩn đoán tối ưu để xác minh xem tác nhân có đang nạp đúng và đủ các tệp cấu hình của dự án (như CLAUDE.md hoặc .claude/rules/) trên máy hiện tại hay không.',
  'Claude Code CLI',
  ARRAY['/memory', 'Diagnostics', 'Claude Code']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca61',
  'cca-f',
  61,
  'Based on the prompt caching architecture shown in the diagram, how should you structure your API requests to Claude 3.5 Sonnet to maximize cache hit rates and reduce overall API latency?',
  '[{"key":"A","text":"Place frequently changing dynamic user messages at the beginning of the prompt, and the static system prompt and tools at the very end."},{"key":"B","text":"Keep the system prompt, tools, and heavy reference documents static at the beginning of the request, and mark the end of the static segment with ''cache_control'': {''type'': ''ephemeral''}."},{"key":"C","text":"Randomize the ordering of messages in each API call to allow the cache server to dynamically re-index all blocks."},{"key":"D","text":"Prompt caching is automatically managed by the API gateway on any arbitrary message layout, requiring no explicit payload design."}]'::jsonb,
  ARRAY['B']::text[],
  'Để tận dụng tối đa Prompt Caching của Anthropic, các khối dữ liệu tĩnh, kích thước lớn (như system prompt, định nghĩa tools, tài liệu hướng dẫn hoặc lịch sử hội thoại ổn định) phải được xếp ở đầu yêu cầu và được đánh dấu bộ nhớ đệm (ví dụ: ''cache_control'': {''type'': ''ephemeral''}). Bất kỳ thay đổi nhỏ nào ở phần trước điểm cache cũng sẽ làm mất hiệu lực bộ nhớ đệm (cache invalidation).',
  'Architecture & Optimization',
  ARRAY['Prompt Caching', 'API Design', 'Optimization']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca62',
  'cca-f',
  62,
  'You are designing an enterprise desktop application that integrates Claude Code with multiple distinct data sources (local files, a relational database, and an external API). Based on the Model Context Protocol (MCP) architecture shown in the diagram, what is the correct protocol flow for tool invocation?',
  '[{"key":"A","text":"The MCP Servers directly fetch user instructions from the LLM via webhooks, execute them, and return the output directly to the end-user UI."},{"key":"B","text":"The client application communicates with the LLM. When the LLM decides to use a tool, it returns a tool use block to the Client. The Client routes this call to the respective MCP Server via standard JSON-RPC, receives the tool output, and sends it back to the LLM."},{"key":"C","text":"Each MCP Server contains a localized instance of Claude that independently synthesizes user prompts before syncing via peer-to-peer WebSockets."},{"key":"D","text":"The Client bypasses the LLM entirely, using local heuristic models to map user queries to MCP Server endpoints."}]'::jsonb,
  ARRAY['B']::text[],
  'MCP hoạt động theo mô hình Client-Server trong đó Client (như Claude Code, Claude Desktop) giữ vai trò trung gian điều phối. Server không bao giờ tự ý nói chuyện trực tiếp với LLM; thay vào đó, LLM trả về yêu cầu ''tool use'' cho Client, Client gọi MCP Server tương ứng qua JSON-RPC (qua stdio/SSE) rồi gửi lại kết quả của công cụ về cho LLM.',
  'Model Context Protocol',
  ARRAY['MCP Architecture', 'JSON-RPC', 'Tool Invocation']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca63',
  'cca-f',
  63,
  'You are implementing a multi-agent workflow in an editor application using Claude 3.5 Sonnet. Based on the Orchestrator-Workers design pattern illustrated in the diagram, how should the Router/Supervisor agent coordinate the sub-agents to compile a comprehensive documentation portal?',
  '[{"key":"A","text":"Provide all sub-agents with full read/write access to a shared global state, and let them execute concurrently without a supervisor."},{"key":"B","text":"The Router agent analyzes the high-level task, breaks it down into structured sub-tasks, dynamically delegates each sub-task to specialized, isolated worker agents, gathers their individual outputs, and synthesizes the final comprehensive portal."},{"key":"C","text":"Configure a single agent instance to run in a continuous loop, progressively mutating the same system prompt to simulate different personas."},{"key":"D","text":"Force a strict circular chain workflow where each sub-agent must wait for the output of the previous agent regardless of task relevance."}]'::jsonb,
  ARRAY['B']::text[],
  'Mô hình Orchestrator-Workers (hay Supervisor-Subagents) cực kỳ tối ưu cho các tác vụ phức tạp cần chia nhỏ. Tác nhân Router đóng vai trò phân rã bài toán lớn, giao việc cho các Sub-agents chuyên trách (được thiết kế prompts và tools riêng biệt để đạt độ chính xác cao), sau đó tổng hợp kết quả để tránh hiện tượng loãng ngữ cảnh và giảm sai sót.',
  'Agent Architecture',
  ARRAY['Multi-Agent', 'Orchestrator Pattern', 'Workflows']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca64',
  'cca-f',
  64,
  'You are designing an AI customer support platform using Claude. To ensure enterprise compliance and prevent prompt injection or hallucinated policy violations, you implement safety guardrails as shown in the diagram. Which statement accurately describes the processing pipeline?',
  '[{"key":"A","text":"Input guardrails classify user prompts for safety before sending them to Claude; output guardrails run synchronously on Claude''s generated text to validate compliance before final rendering."},{"key":"B","text":"Input guardrails dynamically rewrite user queries to include pre-approved responses, bypassing Claude entirely for any complex query."},{"key":"C","text":"Output guardrails are executed asynchronously after the response is delivered to the user to avoid introducing latency."},{"key":"D","text":"Guardrails replace Claude''s core neural network weights dynamically during inference depending on the user''s role."}]'::jsonb,
  ARRAY['A']::text[],
  'Một đường ống Guardrails an toàn, toàn diện bao gồm: 1) Input Guardrails chặn lọc mã độc, prompt injection và nội dung độc hại ngay trước khi gửi tới LLM, và 2) Output Guardrails kiểm tra đồng bộ câu trả lời sinh ra từ LLM (về độ chính xác, chính sách bảo mật, thông tin nhạy cảm) trước khi hiển thị cho người dùng cuối.',
  'Evaluation & Bias',
  ARRAY['Guardrails', 'AI Safety', 'Compliance']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca65',
  'cca-f',
  65,
  'You are building an advanced Retrieval-Augmented Generation (RAG) system for corporate policy documents using Claude. Based on the processing pipeline shown in the diagram, how does the integration of Hybrid Search and a Reranking model optimize the generation quality?',
  '[{"key":"A","text":"Hybrid Search combines vector similarity (dense) with keyword matching (sparse) to capture both semantic meaning and exact jargon. The Reranker then filters and re-orders the top results, ensuring only the most relevant, high-signal contexts are injected into Claude''s prompt."},{"key":"B","text":"Hybrid Search replaces the vector database entirely, while the Reranker dynamically modifies Claude''s system temperature settings."},{"key":"C","text":"The Reranker translates user queries into multiple languages, while Hybrid Search performs parallel web lookups."},{"key":"D","text":"The pipeline relies solely on keyword search, using the Reranker to randomly shuffle documents to introduce response variety."}]'::jsonb,
  ARRAY['A']::text[],
  'Tìm kiếm lai (Hybrid Search) phối hợp sức mạnh của Dense Retrieval (tìm kiếm ngữ nghĩa bằng vector embeddings) và Sparse Retrieval (tìm kiếm từ khóa chính xác BM25). Bộ tái sắp xếp (Reranker) đánh giá lại mức độ khớp thông tin thực tế, chỉ lọc và đẩy các tài liệu có độ tương quan cao nhất vào prompt gửi đến Claude, giảm thiểu nhiễu thông tin và ngăn ngừa hiện tượng ảo tưởng (hallucination).',
  'Architecture & Optimization',
  ARRAY['RAG', 'Hybrid Search', 'Reranker', 'Claude Context']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca66',
  'cca-f',
  66,
  'Analysis reveals the coordinator invokes the web search subagent, waits for its response, then invokes the document analysis subagent and waits again. These tasks are independent—neither requires the other''s output. How should you modify the system to run these subagents concurrently?',
  '[{"key":"A","text":"Switch both subagents to use a Haiku-tier model instead of Sonnet to reduce their individual execution time."},{"key":"B","text":"Create an async orchestration layer outside the agent that spawns parallel threads, each running a separate coordinator-subagent pair, then aggregates results."},{"key":"C","text":"Structure the coordinator to emit both Task tool calls (for web search and document analysis) in a single response message rather than across separate conversation turns."},{"key":"D","text":"Add detailed instructions to the coordinator''s system prompt explaining the performance benefits of parallel execution and requesting it invoke both subagents at the same time."}]'::jsonb,
  ARRAY['C']::text[],
  'In Claude''s agent architecture, subagents run concurrently when the coordinator emits multiple Task tool calls in a single assistant message — the harness executes parallel tool_use blocks from the same turn simultaneously.',
  'Claude Architecture & Best Practices',
  ARRAY['Claude Certified Architect', 'CCAF']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca67',
  'cca-f',
  67,
  'The coordinator agent has AgentDefinitions configured for all four specialized subagents, each with appropriate descriptions, prompts, and tool restrictions. During testing, you notice the coordinator correctly reasons about when to delegate—it generates messages like "I''ll ask the web search agent to find sources on this topic"—but no subagent execution ever occurs. The coordinator then proceeds as if the delegation happened and continues with incomplete information. Logs show no errors. What is the most likely cause?',
  '[{"key":"A","text":"The AgentDefinitions are configured correctly, but the coordinator''s system prompt doesn''t explicitly list the available subagent types, preventing the model from knowing they can be invoked."},{"key":"B","text":"Subagent context isolation means task descriptions from the coordinator don''t automatically reach subagents; you need to configure explicit context forwarding in ClaudeAgentOptions."},{"key":"C","text":"The coordinator''s max_tokens setting is too low, causing the Task tool invocation to be truncated before the subagent type parameter can be specified."},{"key":"D","text":"The coordinator''s allowedTools configuration doesn''t include \"Task\", so while it can reason about delegation, it cannot invoke the tool required to spawn subagents."}]'::jsonb,
  ARRAY['D']::text[],
  'In the Claude Agent SDK, subagents defined via AgentDefinitions are launched through the Task tool; if allowedTools omits "Task", the coordinator can still verbally reason about delegating but has no mechanism to actually spawn subagents, and it silently continues without them.',
  'Claude Architecture & Best Practices',
  ARRAY['Claude Certified Architect', 'CCAF']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca68',
  'cca-f',
  68,
  'A landmark case citing 12 precedents takes over 3 minutes to analyze completely. What''s the most effective way to reduce this latency while preserving the coordinator''s ability to monitor and debug the system?',
  '[{"key":"A","text":"Have the coordinator spawn parallel document analysis subagents, each handling a subset of precedents, then aggregate results before synthesis"},{"key":"B","text":"Enable the document analysis subagent to spawn its own specialized subagents dynamically when it encounters cases with many citations"},{"key":"C","text":"Create a recursive agent hierarchy where analysis agents subdivide work among child agents until reaching single-precedent granularity"},{"key":"D","text":"Implement a message queue where precedent analysis tasks are processed asynchronously by a pool of worker agents"}]'::jsonb,
  ARRAY['A']::text[],
  'Anthropic''s recommended multi-agent design is the orchestrator-worker pattern with a flat hierarchy: the coordinator itself spawns parallel subagents and aggregates their results, which cuts latency through parallelism while keeping all spawning, monitoring, and debugging centralized in one place.',
  'Claude Architecture & Best Practices',
  ARRAY['Claude Certified Architect', 'CCAF']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca69',
  'cca-f',
  69,
  'Investigation shows that while the web search and document analysis agents correctly attach citations to their outputs, the synthesis agent loses track of which sources support which conclusions when combining findings. What''s the most effective architectural change?',
  '[{"key":"A","text":"Have the coordinator inject source identifier prefixes into text before each handoff, then parse these prefixes at report generation to reconstruct citations."},{"key":"B","text":"Maintain complete transcripts of all subagent interactions and add a citation-resolution agent to analyze logs and determine attributions before report generation."},{"key":"C","text":"Require all subagents to output structured claim-source mappings that the synthesis agent must preserve and merge when combining findings from multiple sources."},{"key":"D","text":"Add a verification step where the report generator uses semantic similarity matching against original sources to reconstruct which claims came from which documents."}]'::jsonb,
  ARRAY['C']::text[],
  'The failure is information loss at the synthesis stage, so the fix is to carry attribution as structured data end-to-end: subagents emit explicit claim-source mappings and the synthesis agent is required to preserve and merge them.',
  'Claude Architecture & Best Practices',
  ARRAY['Claude Certified Architect', 'CCAF']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca70',
  'cca-f',
  70,
  'Users report that final reports sometimes lack depth on specific subtopics. Investigation shows that the document analysis agent frequently identifies gaps—for instance, noting "the retrieved sources discuss API authentication but lack details on token refresh patterns"—but under the current strict pipeline, this insight isn''t actionable since search has already completed. What''s the most effective architectural change?',
  '[{"key":"A","text":"Have the coordinator review analysis output for gap indicators and re-invoke search with gapinformed queries when gaps are detected."},{"key":"B","text":"Have the synthesis agent attach confidence scores to each section and flag areas with insufficient coverage for manual review."},{"key":"C","text":"Add a research planning agent before the search phase that decomposes topics into specific sub- questions."},{"key":"D","text":"Have the analysis agent report specific gaps to the coordinator, which triggers targeted searches and re-invokes analysis until sufficient."}]'::jsonb,
  ARRAY['D']::text[],
  'The core problem is a rigid one-way pipeline where gap insights arrive after search is finished, so the fix is a closed feedback loop: the analysis agent surfaces its specific gaps as structured output to the coordinator, which triggers targeted follow-up searches and re-runs analysis iteratively until coverage is sufficient.',
  'Claude Architecture & Best Practices',
  ARRAY['Claude Certified Architect', 'CCAF']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca71',
  'cca-f',
  71,
  'Your pipeline reviews every PR using a single API call with a static prompt containing the diff and full text of each changed file — unchanged files are not included. Reviews are posted asynchronously and don''t block PR creation. Developers report that reviews consistently miss bugs involving cross-file interactions — for example, a PR renames a function''s parameters but the review doesn''t flag callers in unchanged files that still use the old argument order. Evaluation shows cross-file bugs account for 35% of production incidents from reviewed PRs. What is the most effective change to your review design?',
  '[{"key":"A","text":"Redesign the review as a turn-limited agentic task where the model can read files and search the codebase via tools, following references to verify cross-file findings."},{"key":"B","text":"Add chain-of-thought instructions asking the model to list all external references in the diff, then reason step-by-step about how each change might affect callers in other files."},{"key":"C","text":"Run parallel review passes per changed file with direct dependents included in each pass, then aggregate and deduplicate findings using a final summarization call."},{"key":"D","text":"Use static analysis to build a dependency graph of changed code, then expand the prompt to include all files within two dependency hops of any changed file."}]'::jsonb,
  ARRAY['A']::text[],
  'The failure is a missing-context problem: callers live in unchanged files the static prompt never includes, so chain-of-thought (B) cannot help the model reason about code it cannot see, and static heuristics (C, D) bloat context while still missing dynamic or multi-hop references. Anthropic''s agent guidance favors agentic search — letting the model retrieve exactly the context it needs via file-read/search tools — and the asynchronous, nonblocking review pipeline tolerates the added latency, while a turn limit bounds cost.',
  'Claude Architecture & Best Practices',
  ARRAY['Claude Certified Architect', 'CCAF']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca72',
  'cca-f',
  72,
  'An engineer asks your agent to add comprehensive tests to a legacy codebase with 200 files and minimal existing test coverage. The engineer hasn''t specified which modules to prioritize. How should the agent decompose this open-ended task?',
  '[{"key":"A","text":"Systematically read all 200 files to create a complete function inventory before writing any tests, ensuring the testing plan accounts for every function before beginning."},{"key":"B","text":"Create a fixed testing schedule upfront based on directory structure, allocating equal effort to each top-level directory regardless of code complexity or business importance."},{"key":"C","text":"Start writing tests for the first module alphabetically, using test failures and imports to discover related files organically."},{"key":"D","text":"Use Glob and Grep to map codebase structure, identify heavily-coupled modules, create a prioritized plan for high-impact areas, and revise as dependencies are discovered."}]'::jsonb,
  ARRAY['D']::text[],
  'Anthropic''s agent best practices favor efficient context gathering with search tools (Glob/Grep) over exhaustively reading every file, which would waste context and time. Prioritizing high-impact, heavily-coupled modules and iteratively revising the plan as dependencies surface is the correct way to decompose an open-ended task; A is wasteful, B ignores impact/complexity, and C is arbitrary and unplanned.',
  'Claude Architecture & Best Practices',
  ARRAY['Claude Certified Architect', 'CCAF']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca73',
  'cca-f',
  73,
  'An engineer submits two requests: • Request A: "Rename the getUserData function to fetchUserProfile everywhere it''s used." • Request B: "Improve error handling throughout the data processing module—add try/catch blocks, meaningful error messages, and ensure failures don''t silently corrupt data." For which request does specifying an explicit multi-phase workflow (such as analyze propose implement with review) most improve outcome quality?',
  '[{"key":"A","text":"Request B, the error handling task"},{"key":"B","text":"Both requests benefit equally"},{"key":"C","text":"Request A, the function rename task"},{"key":"D","text":"Neither request benefits significantly"}]'::jsonb,
  ARRAY['A']::text[],
  'Request B is open-ended and judgment-heavy — "improve error handling" requires analyzing current behavior, deciding where try/catch belongs, and choosing meaningful messages, so an explicit analyze propose implement-with-review workflow materially raises quality and catches bad design before code changes. Request A is a mechanical, well-defined rename that a simple find-and-replace-style execution handles fine, so the multi-phase structure adds little.',
  'Claude Architecture & Best Practices',
  ARRAY['Claude Certified Architect', 'CCAF']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca74',
  'cca-f',
  74,
  'Your code review assistant needs to analyze pull requests and provide feedback on three aspects: code style compliance, potential security issues, and documentation completeness. Each aspect requires reading files, running analysis tools, and generating a report section. The review process follows the same three-step workflow for every PR. Which task decomposition pattern is most appropriate for this workflow?',
  '[{"key":"A","text":"Single comprehensive prompt—include all instructions in one prompt and let the model handle all three aspects simultaneously."},{"key":"B","text":"Routing—classify each PR by type (feature, bugfix, refactor) first, then route to different review prompts optimized for that category."},{"key":"C","text":"Prompt chaining—break the review into sequential steps where each aspect (style, security, documentation) is analyzed separately, with outputs combined in a final synthesis step."},{"key":"D","text":"Orchestrator-workers—have a central LLM analyze each PR to dynamically determine which checks are needed, then delegate to specialized worker LLMs for each identified subtask."}]'::jsonb,
  ARRAY['C']::text[],
  'The scenario explicitly states the review "follows the same three-step workflow for every PR," which per Anthropic''s "Building Effective Agents" guidance is the textbook case for the prompt chaining workflow: a fixed, predictable sequence of subtasks each handled by a focused prompt, then synthesized. Orchestrator-workers (D) is only warranted when the needed subtasks vary unpredictably per input, and routing (B) applies when inputs fall into distinct categories needing different handling—neither fits a fixed, identical workflow.',
  'Claude Architecture & Best Practices',
  ARRAY['Claude Certified Architect', 'CCAF']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca75',
  'cca-f',
  75,
  'Your multi-agent research pipeline crashed after processing 12 of 28 documents. The web search agent had identified relevant sources, the document analyzer had partially completed extraction, and the synthesizer had begun pattern identification. You need to resume processing without repeating work or losing fidelity of prior findings. What state management approach best balances information fidelity with context efficiency when restoring agent state?',
  '[{"key":"A","text":"Have each agent maintain its own persistent state file and reload it independently at the start of each session."},{"key":"B","text":"Persist the coordinator''s conversation log containing all task delegations and responses, providing this to agents when resuming."},{"key":"C","text":"Index all agent outputs in a shared vector store. When resuming, each agent queries the store using semantic search to retrieve relevant prior findings."},{"key":"D","text":"Have each agent persist a structured export to a known location. On resume, the coordinator loads the manifest and injects relevant state into agent prompts."}]'::jsonb,
  ARRAY['D']::text[],
  'Anthropic''s multi-agent best practices recommend persisting structured artifacts to external storage and having the orchestrator selectively re-inject only the relevant state into each subagent''s context. This preserves fidelity (lossless structured exports plus a manifest of completed work) while staying context-efficient, whereas A lacks coordinated resume logic, B floods agents with an entire conversation log, and C''s semantic search is lossy and may miss or garble prior findings.',
  'Claude Architecture & Best Practices',
  ARRAY['Claude Certified Architect', 'CCAF']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca76',
  'cca-f',
  76,
  'Your agent has analyzed a complex service module—reading 23 source files, tracing request flows, and identifying error handling patterns. A developer wants to compare two testing strategies before committing to one: end-to-end tests with mocked external services vs. snapshot tests capturing expected outputs. They need to independently develop both approaches to evaluate trade-offs. How should you manage the sessions?',
  '[{"key":"A","text":"Export the analysis session''s key findings to a file, then create two new sessions that reference this file."},{"key":"B","text":"Resume the analysis session with fork_session enabled, creating a separate branch for each testing strategy."},{"key":"C","text":"Start two fresh sessions, having each re-read the relevant source files before beginning."},{"key":"D","text":"Continue in the original session, developing end-to-end tests first, then snapshot tests sequentially."}]'::jsonb,
  ARRAY['B']::text[],
  'Resuming the analysis session with fork_session branches the session into new session IDs while preserving the full analysis context and leaving the original intact.',
  'Claude Architecture & Best Practices',
  ARRAY['Claude Certified Architect', 'CCAF']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca77',
  'cca-f',
  77,
  'Your codebase exploration tool stores session IDs to allow engineers to continue investigations across work sessions. An engineer spent an hour yesterday analyzing a legacy authentication module, building context about its architecture and dependencies. They want to continue today. The session ID is valid, but version control shows 3 of the 12 files the agent previously read were modified overnight by a teammate''s merge. What approach best balances efficiency and accuracy?',
  '[{"key":"A","text":"Resume the session and immediately have the agent re-read all 12 previously analyzed files"},{"key":"B","text":"Start a fresh session to ensure the agent works with current codebase state without stale assumptions"},{"key":"C","text":"Resume the session and inform the agent which specific files changed for targeted re-analysis"},{"key":"D","text":"Resume the session without informing the agent about the changed files"}]'::jsonb,
  ARRAY['C']::text[],
  'Resuming the session preserves the hour of accumulated context about the module''s architecture, while telling the agent exactly which 3 files changed allows targeted re-reading of only the stale files.',
  'Claude Architecture & Best Practices',
  ARRAY['Claude Certified Architect', 'CCAF']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca78',
  'cca-f',
  78,
  'During testing, you observe that in extended exploration sessions (30+ minutes), the agent starts giving inconsistent answers about code structure it discussed earlier. Engineers report having to repeat context about modules they''ve already explored. What''s the most effective approach to address this?',
  '[{"key":"A","text":"Have the agent maintain a scratchpad file that records key findings, referencing it for subsequent questions."},{"key":"B","text":"Switch to a higher-capacity model tier to provide more context window space for accumulated exploration data."},{"key":"C","text":"Implement automatic context clearing every 15 minutes to ensure the agent starts with fresh, uncontaminated context."},{"key":"D","text":"Create summaries of all source files before exploration begins, loading only these compressed representations into context."}]'::jsonb,
  ARRAY['A']::text[],
  'A scratchpad offloads findings to durable storage the agent can re-read on demand, giving it a stable ''memory'' independent of how crowded the context window gets.',
  'Claude Architecture & Best Practices',
  ARRAY['Claude Certified Architect', 'CCAF']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca79',
  'cca-f',
  79,
  'An engineer used the agent yesterday to analyze a legacy authentication module, identifying two distinct refactoring approaches: extracting a microservice versus refactoring in-place. Today, they want to explore both approaches in depth—having the agent propose specific code changes for each—before deciding which to implement. What''s the most effective way to structure this exploration?',
  '[{"key":"A","text":"Resume yesterday''s session to explore the first approach, then start a new session for the second, manually recreating the original context."},{"key":"B","text":"Start two fresh sessions, manually providing a summary of yesterday''s analysis findings to establish context."},{"key":"C","text":"Resume yesterday''s session and explore both approaches sequentially within the same conversation thread."},{"key":"D","text":"Use fork_session to create two branches from yesterday''s analysis, exploring one approach in each fork."}]'::jsonb,
  ARRAY['D']::text[],
  'Forking from yesterday''s session gives each approach its own independent context starting from the same analysis baseline — clean, parallel, no contamination.',
  'Claude Architecture & Best Practices',
  ARRAY['Claude Certified Architect', 'CCAF']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca80',
  'cca-f',
  80,
  'An engineer asks your agent to identify untested code paths in a legacy payment processing module spanning 45 files. After reading the first 8 source files, the agent''s responses are becoming noticeably less accurate—it''s forgetting previously discussed code patterns and hasn''t yet located all test files or traced critical payment flows. What''s the most effective approach to complete this investigation?',
  '[{"key":"A","text":"Document all current findings in a summary report, clear context completely, then use that report as the sole reference for continuing the investigation."},{"key":"B","text":"Spawn subagents to investigate specific questions while the main agent coordinates findings and preserves high-level understanding."},{"key":"C","text":"Clear context with /clear, then selectively re-read only the most critical files discovered so far, writing key findings to a scratchpad file that persists between context resets."},{"key":"D","text":"Switch to using Grep to search for specific function names instead of reading full files, reducing the content loaded into context for remaining exploration."}]'::jsonb,
  ARRAY['B']::text[],
  'Delegate well-scoped investigations to subagents with fresh context, while the main agent keeps the architectural overview.',
  'Claude Architecture & Best Practices',
  ARRAY['Claude Certified Architect', 'CCAF']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca81',
  'cca-f',
  81,
  'When researching "renewable energy adoption," the web search agent returns recent statistics (2024: 35% adoption) while the document analysis agent extracts data from internal reports (2022: 18% adoption). The synthesis agent incorrectly flags these as contradictory sources rather than recognizing the data shows growth over time. What change would best enable the synthesis agent to correctly interpret such temporal differences?',
  '[{"key":"A","text":"Require subagents to include publication or data collection dates in their structured outputs."},{"key":"B","text":"Add a conflict resolution agent that automatically discards older data when newer data exists for the same metric."},{"key":"C","text":"Configure the web search agent to only return results from the past 6 months."},{"key":"D","text":"Instruct the synthesis agent to always treat the most recent data as authoritative and place older findings in a separate historical appendix."}]'::jsonb,
  ARRAY['A']::text[],
  'The synthesis agent misreads the data because it never sees the dates. Making each data point carry its own timestamp in the structured output lets synthesis reason about trends instead of contradictions.',
  'Claude Architecture & Best Practices',
  ARRAY['Claude Certified Architect', 'CCAF']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca82',
  'cca-f',
  82,
  'Production reviews reveal inconsistent handling of uncertainty in final reports. Sometimes conflicting subagent findings are synthesized into a single confident statement (losing nuance), while other times reports over-hedge with excessive qualifications (becoming unhelpful). When the web search agent returns "industry analysts estimate $50B market size (methodology varies)" and the document analysis agent returns "peer-reviewed study estimates 35B(±7B, 95% CI)," the coordinator either picks one arbitrarily or produces vague statements like "the market may be 35B−50B depending on factors." What systematic approach best addresses this?',
  '[{"key":"A","text":"Configure subagents to only report findings meeting a high-confidence threshold, filtering uncertain information before it reaches the coordinator."},{"key":"B","text":"Implement a confidence calibration layer that normalizes subagent uncertainty expressions to standardized probability scores (0.0-1.0), then weight-average findings by their calibrated confidence."},{"key":"C","text":"Instruct the synthesis agent to structure reports with explicit sections distinguishing well-established findings from contested ones, preserving original source characterizations and methodological context."},{"key":"D","text":"Add a verification subagent that cross-references findings across sources, only passing claims to synthesis that are corroborated by at least two independent sources."}]'::jsonb,
  ARRAY['C']::text[],
  'Report structure that keeps methodological context and separates settled vs. contested claims is how you get nuance without over-hedging.',
  'Claude Architecture & Best Practices',
  ARRAY['Claude Certified Architect', 'CCAF']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca83',
  'cca-f',
  83,
  'You''re building a security scanning workflow. When engineers need to locate all occurrences of a dangerous function like eval() across a large codebase, which tool should your agent use for content search?',
  '[{"key":"A","text":"Use Glob with a pattern like /*eval* to find files, then Read each matching file."},{"key":"B","text":"Use Grep to search for the pattern \"eval(\" across all files in the codebase."},{"key":"C","text":"Read the project''s main entry file and follow import statements to trace where eval might be used."},{"key":"D","text":"Use Bash to run ls -R | grep eval to recursively list files containing eval."}]'::jsonb,
  ARRAY['B']::text[],
  'Grep is the purpose-built content-search tool (ripgrep-based) for finding patterns inside file contents across a large codebase, which is exactly what locating all eval( call sites requires.',
  'Claude Architecture & Best Practices',
  ARRAY['Claude Certified Architect', 'CCAF']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca84',
  'cca-f',
  84,
  'This currently requires manually copy-pasting content into conversations. The team wants the agent to access this standard Jira ticket data directly. What''s the most effective approach?',
  '[{"key":"A","text":"Export Jira tickets to markdown files in the repository that the agent accesses using the Read tool."},{"key":"B","text":"Build a custom MCP server wrapping Jira''s API with tools designed specifically for this team''s code review workflow."},{"key":"C","text":"Integrate an existing Jira MCP server that exposes tickets, comments, and metadata through discoverable tool interfaces."},{"key":"D","text":"Use the Bash tool with curl to call Jira''s REST API, including authentication headers and parsing JSON responses inline."}]'::jsonb,
  ARRAY['C']::text[],
  'For standard third-party service data like Jira tickets, Anthropic''s recommended practice is to integrate an existing MCP server, which provides discoverable, typed tool interfaces with managed authentication.',
  'Claude Architecture & Best Practices',
  ARRAY['Claude Certified Architect', 'CCAF']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca85',
  'cca-f',
  85,
  'Developer Productivity An engineer asks the agent to find all files in the monorepo that import the @company/auth package to understand how authentication is used across services. Which built-in tool is most appropriate for this task?',
  '[{"key":"A","text":"Bash, to execute find . -type d -name \"*auth*\" and explore matching directories"},{"key":"B","text":"Read, starting with package.json files to trace dependency declarations"},{"key":"C","text":"Grep, to search for the import statement pattern across file contents"},{"key":"D","text":"Glob, to find files with \"auth\" in their filename or path"}]'::jsonb,
  ARRAY['C']::text[],
  'The task is to find every file whose contents contain an import of @company/auth, which is a content- search problem — exactly what the built-in Grep tool (ripgrep-based) is designed for.',
  'Claude Architecture & Best Practices',
  ARRAY['Claude Certified Architect', 'CCAF']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca86',
  'cca-f',
  86,
  'Your productivity agent connects to three MCP servers: an issue tracker (search_issues, get_issue, create_comment), a documentation wiki (search_docs, get_page, list_spaces), and a database explorer (run_query, get_schema, list_databases). When engineers ask cross-system questions like "What database tables are affected by the authentication refactor in PROJ-1234?", monitoring shows the agent makes 8-10 sequential tool calls, frequently issues exploratory calls because it lacks visibility into what content each server contains, and exhausts context space before completing complex investigations. What architectural change best leverages MCP capabilities to address these issues?',
  '[{"key":"A","text":"Consolidate all three servers into a unified MCP server with cross-referencing capabilities"},{"key":"B","text":"Expose each server''s content catalog as MCP resources—issue summaries, documentation hierarchy, database schemas"},{"key":"C","text":"Add a prepare_investigation tool to each server that accepts a natural language question and returns relevant content summaries"},{"key":"D","text":"Add an orchestrator that routes questions to a single server based on keywords"}]'::jsonb,
  ARRAY['B']::text[],
  'MCP resources are the protocol primitive designed for exactly this problem: servers expose browsable, application-controlled context that the agent can discover and read without exploratory tool-call round trips.',
  'Claude Architecture & Best Practices',
  ARRAY['Claude Certified Architect', 'CCAF']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca87',
  'cca-f',
  87,
  'During testing, agents frequently call tools outside their specialization—the synthesis agent attempts web searches, and the report generator tries to analyze documents. What is the primary cause of this poor tool selection behavior?',
  '[{"key":"A","text":"Choosing from 18 tools instead of 4-5 relevant ones increases decision complexity beyond reliable selection thresholds."},{"key":"B","text":"The coordinator cannot track which capabilities each subagent has, leading to misrouted tasks."},{"key":"C","text":"The agents'' role descriptions in their system prompts conflict with having access to tools outside that role."},{"key":"D","text":"The tool definitions consume too much context window space, leaving insufficient room for task content."}]'::jsonb,
  ARRAY['A']::text[],
  'Anthropic''s agent best practices recommend giving each subagent only a small, role-relevant tool set, because tool selection accuracy degrades as the number of available (especially irrelevant) tools grows.',
  'Claude Architecture & Best Practices',
  ARRAY['Claude Certified Architect', 'CCAF']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca88',
  'cca-f',
  88,
  'A customer returns 4 hours after their initial session about the same billing dispute. The previous 32-turn session contains lookup_order results showing "Status: PENDING, Expected resolution: 24-48 hours." In testing, you observe that when resuming sessions with stale tool results, the agent often references the outdated data in responses (e.g., "I see your refund is still being processed") even after subsequent fresh tool calls return different information. What approach most reliably handles returning customers?',
  '[{"key":"A","text":"Resume with full history but filter out previous tool_result messages before resuming, keeping only the human/assistant turns so the agent must re-fetch needed data."},{"key":"B","text":"Start a new session, inject a structured summary of the previous interaction (issue type, actions taken, resolution status), then make fresh tool calls before engaging."},{"key":"C","text":"Resume with full history and add a system prompt instruction telling the agent to always prefer the most recent tool results when multiple calls to the same tool exist in context."},{"key":"D","text":"Resume with full history and configure the agent to automatically re-call all previously-used tools at session start to ensure data freshness."}]'::jsonb,
  ARRAY['B']::text[],
  'A clean session with a summary keeps the narrative continuity while guaranteeing the agent isn''t reasoning over stale tool results.',
  'Claude Architecture & Best Practices',
  ARRAY['Claude Certified Architect', 'CCAF']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca89',
  'cca-f',
  89,
  'You''re implementing the escalation logic for when the agent should call escalate_to_human. Your team proposes four different approaches for triggering escalation. Which approach will most reliably identify cases that genuinely require human intervention?',
  '[{"key":"A","text":"Instruct the agent to escalate when the customer requests a human, when the issue requires policy exceptions, or when the agent cannot make meaningful progress."},{"key":"B","text":"Configure the agent to escalate after three consecutive tool calls that fail to resolve the customer''s stated issue, ensuring a reasonable attempt before involving a human."},{"key":"C","text":"Implement sentiment analysis that monitors for frustration indicators (negative language, repeated questions, exclamation marks) and trigger escalation when the frustration score exceeds a configured threshold."},{"key":"D","text":"Build a rules engine that maps specific issue types, customer segments, and product categories to escalation decisions, removing the need for model judgment calls."}]'::jsonb,
  ARRAY['A']::text[],
  'Escalation decisions are judgment calls about intent and progress — exactly what LLMs are good at. Clear criteria in natural language outperform rigid rules for the long tail.',
  'Claude Architecture & Best Practices',
  ARRAY['Claude Certified Architect', 'CCAF']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES (
  'cca90',
  'cca-f',
  90,
  'After investigating a billing dispute over 25+ turns, you''ve identified that duplicate charges occurred due to a payment gateway timeout triggering retry logic. The required refund ($847) exceeds your $500 authorization limit. You need to call escalate_to_human, and the human agent won''t have access to your conversation transcript. What context should you pass to enable effective resolution?',
  '[{"key":"A","text":"The customer''s original complaint verbatim plus the tool result excerpts showing duplicate transactions."},{"key":"B","text":"A structured summary: customer ID, root cause, refund amount, and recommended action."},{"key":"C","text":"The complete conversation transcript with all tool results."},{"key":"D","text":"Your diagnosis and the refund amount only."}]'::jsonb,
  ARRAY['B']::text[],
  'A structured handoff with identifiers, cause, amount, and recommended action is what a human agent needs to pick up the case instantly without re-investigating.',
  'Claude Architecture & Best Practices',
  ARRAY['Claude Certified Architect', 'CCAF']::text[]
) ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

