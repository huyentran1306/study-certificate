-- SUPABASE DATABASE SETUP & QUESTIONS SEEDING SCRIPT
-- Copy and execute this in the Supabase SQL Editor (https://supabase.com)

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

-- 4. Create table for mock exam results history
CREATE TABLE IF NOT EXISTS exam_results (
    id BIGSERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    cert_id TEXT NOT NULL,
    cert_code TEXT NOT NULL,
    score INTEGER NOT NULL,
    total_questions INTEGER NOT NULL,
    accuracy INTEGER NOT NULL,
    elapsed_seconds INTEGER DEFAULT 0,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Clean up existing data to avoid conflict, or just upsert
TRUNCATE TABLE questions CASCADE;

-- 4. Seed Questions Database

-- ===========================================
-- SEED DATA FOR GITHUB FOUNDATIONS (gh-300)
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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;


-- ===========================================
-- SEED DATA FOR AZURE FUNDAMENTALS (az-900)
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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;


-- ===========================================
-- SEED DATA FOR AZURE AI FUNDAMENTALS (ai-900)
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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;

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
  question_number = EXCLUDED.question_number, text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers, explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags;


-- SETUP COMPLETE. Database is ready with questions loaded.
