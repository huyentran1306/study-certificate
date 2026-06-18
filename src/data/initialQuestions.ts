import { Question } from '../types';

export const initialQuestions: Question[] = [
  {
    id: "q1",
    questionNumber: 1,
    text: "Which Microsoft ethical AI principle is aimed at ensuring AI systems treat all people equally?",
    options: [
      { key: "A", text: "Privacy and Security" },
      { key: "B", text: "Fairness" },
      { key: "C", text: "Reliability and Safety" },
      { key: "D", text: "Inclusiveness" },
    ],
    correctAnswers: ["B"],
    category: "Responsible AI",
    explanation: "Nguyên tắc Công bằng (Fairness) của Microsoft tập trung vào việc đảm bảo hệ thống AI không phân biệt đối xử hoặc thể hiện sự thiên vị đối với bất kỳ cá nhân hay nhóm người nào. Mục tiêu là đối xử bình đẳng với tất cả mọi người, bất kể chủng tộc, giới tính, tôn giáo hoặc các đặc điểm được bảo vệ khác. Ngược lại, Privacy & Security bảo vệ dữ liệu cá nhân; Inclusiveness tập trung vào tính tiếp cận phổ quát.",
    tags: ["Microsoft Ethical AI","Fairness"]
  },
  {
    id: "q2",
    questionNumber: 2,
    text: "What can be done during AI development to minimize bias?",
    options: [
      { key: "A", text: "Collect massive amounts of data for training." },
      { key: "B", text: "Focus on accuracy of the data." },
      { key: "C", text: "Use diverse data, fairness metrics, and human oversight." },
      { key: "D", text: "Improve on the computational efficiency and speed." },
    ],
    correctAnswers: ["C"],
    category: "Responsible AI",
    explanation: "Để giảm thiểu thiên lệch (bias), nhà phát triển cần một chiến lược đa diện ở mọi giai đoạn của vòng đời AI. Việc sử dụng dữ liệu đa dạng (diverse data) giúp ngăn mô hình tiếp thu các định kiến cục bộ; các số đo công bằng (fairness metrics) giúp quản lý cấu trúc kỹ thuật; và sự giám sát của con người (human oversight) giúp đánh giá các tác động thực tế ngoài ý muốn.",
    tags: ["Bias Mitigation","AI Lifecycle"]
  },
  {
    id: "q3",
    questionNumber: 3,
    text: "Why is it important to ensure the security of the code used in Generative AI (Gen AI) tools?",
    options: [
      { key: "A", text: "Ensuring code security prevents unauthorized access and potential data breaches." },
      { key: "B", text: "Ensuring code security enables the AI system to handle larger datasets effectively." },
      { key: "C", text: "Ensuring code security maintains the integrity of the AI system." },
      { key: "D", text: "Ensuring code security supports the development of more advanced AI features." },
    ],
    correctAnswers: ["A"],
    category: "Security & Licensing",
    explanation: "Bảo mật mã nguồn trong công cụ Generative AI là cực kỳ quan trọng vì các mô hình này thường xử lý logic nội bộ, các biến môi trường nhạy cảm và khóa bảo mật hệ thống. Mã nguồn lỏng lẻo có thể dẫn tới rò rỉ dữ liệu hoặc rò rỉ IP của công ty. Trong khung Responsible AI, việc bảo vệ code-in-use bảo vệ cả tài sản trí tuệ và quyền riêng tư người dùng.",
    tags: ["Code Security","Enterprise Risk"]
  },
  {
    id: "q4",
    questionNumber: 4,
    text: "A social media manager wants to use AI to filter content. How can they promote transparency in the platform’s AI operations?",
    options: [
      { key: "A", text: "By providing clear explanations about the types of content the AI is designed to filter and how it arrives at its conclusion." },
      { key: "B", text: "By relying on a well-regarded AI development company." },
      { key: "C", text: "By regularly updating the AI filtering algorithm." },
      { key: "D", text: "By focusing on user satisfaction with the content filtering." },
    ],
    correctAnswers: ["A"],
    category: "Responsible AI",
    explanation: "Tính minh bạch (Transparency) đòi hỏi các hệ thống AI phải dễ hiểu đối với người dùng cuối, có tài liệu và các lời giải thích rõ ràng về tiêu chí hoạt động. Việc công khai rõ ràng loại nội dung nào sẽ bị lọc và cơ chế đưa ra quyết định của mô hình giúp xây dựng niềm tin tốt nhất và cho phép người dùng có quyền khiếu nại thỏa đáng.",
    tags: ["Transparency","Responsible Operations"]
  },
  {
    id: "q5",
    questionNumber: 5,
    text: "How does GitHub Copilot Chat utilize its training data and external sources to generate responses when answering coding questions?",
    options: [
      { key: "A", text: "It primarily relies on the model’s training data to generate responses." },
      { key: "B", text: "It combines its training data set, code in user repositories, and external sources like Bing to generate responses." },
      { key: "C", text: "It uses user-provided documentation exclusively to generate responses." },
      { key: "D", text: "It primarily uses search results from Bing to generate responses." },
    ],
    correctAnswers: ["B"],
    category: "Features & Optimization",
    explanation: "GitHub Copilot Chat sử dụng cơ chế tổng hợp thông minh kết hợp 3 nguồn: (1) Dữ liệu huấn luyện gốc của mô hình LLM chuyên về code; (2) Ngữ cảnh từ repository của người dùng (file đang mở, các hàm lân cận trong IDE để gợi ý mang tính may đo cá nhân); (3) Các nguồn tài liệu cập nhật bên ngoài thông qua tích hợp cổng tìm kiếm Bing (cho các API mới ra mắt).",
    tags: ["Copilot Chat","Data Synthesis"]
  },
  {
    id: "q6",
    questionNumber: 6,
    text: "Which principle emphasizes that AI systems should be understandable and provide clear information on how they work?",
    options: [
      { key: "A", text: "Fairness" },
      { key: "B", text: "Accountability" },
      { key: "C", text: "Transparency" },
      { key: "D", text: "Inclusiveness" },
    ],
    correctAnswers: ["C"],
    category: "Responsible AI",
    explanation: "Nguyên tắc Minh bạch (Transparency) quy định rõ ràng hệ thống AI phải mang tính giải thích được (explainable). Người dùng phải biết họ đang tương tác với AI và có thể truy cập thông tin rõ ràng về cách hoạt động, nguồn dữ liệu và logic ra quyết định của thuật toán đó.",
    tags: ["Transparency","AI Principles"]
  },
  {
    id: "q7",
    questionNumber: 7,
    text: "Which of the following is a risk associated with using AI?",
    options: [
      { key: "A", text: "AI replaces the need for developer opportunities in most fields." },
      { key: "B", text: "AI eliminated the need for data privacy regulations." },
      { key: "C", text: "AI algorithms are incapable of perpetuating existing biases." },
      { key: "D", text: "AI systems can sometimes make decisions that are difficult to interpret." },
    ],
    correctAnswers: ["D"],
    category: "Responsible AI",
    explanation: "Một rủi ro nổi tiếng của trí tuệ nhân tạo (đặc biệt là mạng nơ-ron sâu phức tạp) là vấn đề 'Hộp đen' (Black Box), nơi các quyết định của hệ thống cực kỳ phức tạp và con người khó có thể phân tích hay giải giải nghĩa được một cách tường tận. AI không loại bỏ các quy định bảo mật, cũng không thay thế hoàn toàn nghề lập trình viên mà chỉ mang tính bổ trợ.",
    tags: ["Explainability","Black Box Risk"]
  },
  {
    id: "q8",
    questionNumber: 8,
    text: "What types of prompts or code snippets might be flagged by the GitHub Copilot toxicity filter? (Choose two.)",
    options: [
      { key: "A", text: "Hate speech or discriminatory language (e.g., racial slurs, offensive stereotypes)" },
      { key: "B", text: "Sexually suggestive or explicit content" },
      { key: "C", text: "Code that contains logical errors or produces unexpected results" },
      { key: "D", text: "Code comments containing strong opinions or criticisms" },
    ],
    correctAnswers: ["A","B"],
    category: "Security & Licensing",
    explanation: "Bộ lọc độc hại (toxicity filter) của GitHub Copilot quét các prompt đầu vào để loại bỏ các ngôn từ kích động thù địch/phân biệt đối xử (A) hoặc các nội dung người lớn, khiêu dâm, không lành mạnh (B). Bộ lọc không đánh giá tính đúng đắn của logic code (C) cũng không chặn các nhận xét phê bình kỹ thuật thông thường (D).",
    tags: ["Toxicity Filter","Content Safety"]
  },
  {
    id: "q9",
    questionNumber: 9,
    text: "How can the concept of fairness be integrated into the process of operating an AI tool?",
    options: [
      { key: "A", text: "Focusing on accessibility will ensure fairness." },
      { key: "B", text: "Training AI data and algorithms to be free from biases will ensure fairness." },
      { key: "C", text: "Regularly monitoring the AI tool’s performance will ensure fairness in its outputs." },
      { key: "D", text: "Focusing on collecting large datasets for training will ensure fairness." },
    ],
    correctAnswers: ["A"],
    category: "Responsible AI",
    explanation: "Ở khía cạnh vận hành (operating), tích hợp sự công bằng bằng cách tập trung vào khả năng tiếp cận (Accessibility), giúp bất kỳ nhóm người dùng nào, không phân biệt rào cản ngôn ngữ hay khuyết tật cơ thể, đều nhận được lợi ích tương tự nhau từ AI. Việc huấn luyện dữ liệu không thiên lệch là bước trước đó (ở giai đoạn phát triển), không phải giai đoạn vận hành phát hành.",
    tags: ["Accessibility","Inclusive Design"]
  },
  {
    id: "q10",
    questionNumber: 10,
    text: "What are the potential risks associated with relying heavily on code generated from GitHub Copilot? (Choose two.)",
    options: [
      { key: "A", text: "GitHub Copilot may introduce security vulnerabilities by suggesting code with known exploits." },
      { key: "B", text: "GitHub Copilot’s suggestions may not always reflect best practices or the latest coding standards." },
      { key: "C", text: "GitHub Copilot may increase development lead time by providing irrelevant suggestions." },
      { key: "D", text: "GitHub Copilot may decrease developer velocity by requiring too much time in prompt engineering." },
    ],
    correctAnswers: ["A","B"],
    category: "Security & Licensing",
    explanation: "Hai rủi ro chính khi phụ thuộc hoàn toàn vào gợi ý từ Copilot mà không kiểm duyệt: (1) Mô hình có thể đề xuất các đoạn mã chứa lỗ hổng bảo mật đã biết hoặc mẫu mã cũ kém an toàn (A); (2) Đề xuất có thể dùng cú pháp lỗi thời hoặc không tuân thủ mẫu thiết kế tốt nhất hiện tại (B) vì nó học từ mã nguồn lịch sử trên Internet.",
    tags: ["Code Quality","Exploit Risk"]
  },
  {
    id: "q11",
    questionNumber: 11,
    text: "Why might a Generative AI (Gen AI) tool create inaccurate outputs?",
    options: [
      { key: "A", text: "The Gen AI tool is programmed with a focus on creativity over factual accuracy." },
      { key: "B", text: "The Gen AI tool is experiencing downtime and is not fully recovered." },
      { key: "C", text: "The training data might contain biases or inconsistencies." },
      { key: "D", text: "The Gen AI tool is being overloaded with too many requests at once." },
    ],
    correctAnswers: ["C"],
    category: "Responsible AI",
    explanation: "Các mô hình ngôn ngữ lớn hoạt động trên cơ sở so khớp mẫu thống kê từ kho dữ liệu khổng lồ. Nếu kho huấn luyện (training data) chứa các thông tin mâu thuẫn, sai lệch hoặc định kiến, mô hình sẽ học và tái lập lại y chang những lỗi đó như là một thực tế chính xác.",
    tags: ["Hallucinations","Training Bias"]
  },
  {
    id: "q12",
    questionNumber: 12,
    text: "What is the primary role of the '/optimize' slash command in VS Code / Visual Studio?",
    options: [
      { key: "A", text: "Translates code into a more performant language." },
      { key: "B", text: "Automatically formats the code according to the selected style guide." },
      { key: "C", text: "Summarizes your documentation into more maintainable and readable formats." },
      { key: "D", text: "Enhances the performance of the selected code by analyzing its runtime complexity." },
    ],
    correctAnswers: ["D"],
    category: "Features & Optimization",
    explanation: "Lệnh '/optimize' phân tích độ phức tạp thời gian/không gian của đoạn mã được chọn, phát hiện các điểm nghẽn hiệu suất (ví dụ: vòng lặp lồng nhau có độ phức tạp cao, thuật toán chưa tối ưu) và đề xuất phương án viết lại mã nguồn gọn hơn, chạy nhanh hơn với tài nguyên thấp hơn.",
    tags: ["Slash Commands","Optimization"]
  },
  {
    id: "q13",
    questionNumber: 13,
    text: "Which GitHub Copilot plan could an Azure DevOps organization use without requiring a GitHub Enterprise license?",
    options: [
      { key: "A", text: "GitHub Copilot Enterprise" },
      { key: "B", text: "GitHub Copilot for Azure DevOps" },
      { key: "C", text: "Copilot Teams" },
      { key: "D", text: "GitHub Copilot Individual" },
    ],
    correctAnswers: ["B"],
    category: "Security & Licensing",
    explanation: "Gói 'GitHub Copilot for Azure DevOps' cho phép các tổ chức đang phát triển thuần túy trên cổng Azure DevOps có thể nhúng và đăng ký trực tiếp dịch vụ Copilot của họ mà không nhất thiết phải mua/nâng cấp lên giấy phép hệ sinh thái GitHub Enterprise đầy đủ.",
    tags: ["Licensing Plans","Azure DevOps"]
  },
  {
    id: "q14",
    questionNumber: 14,
    text: "Which of the following steps correctly demonstrates how to establish an organization-wide policy for GitHub Copilot Business to restrict its use to certain repositories?",
    options: [
      { key: "A", text: "Create a copilot.policy file in each repository" },
      { key: "B", text: "Create a copilot.policy in the .github repository" },
      { key: "C", text: "Configure the policies in the organization settings" },
      { key: "D", text: "Apply policies through the GitHub Actions configuration" },
    ],
    correctAnswers: ["C"],
    category: "Security & Licensing",
    explanation: "Các chính sách cấp doanh nghiệp (như hạn chế kho lưu trữ hay quản lý truy cập) của GitHub Copilot Business được thiết lập và thực thi tập trung thông qua trang thiết lập tổ chức (Organization Settings). Điều này đảm bảo tính nhất quán trên toàn bộ doanh nghiệp và tránh việc lập trình viên tự cấu hình cục bộ sai lệch.",
    tags: ["Enterprise Policies","Repository Restrict"]
  },
  {
    id: "q15",
    questionNumber: 15,
    text: "What type of information can you retrieve through GitHub Copilot Business Subscriptions via REST API? (Choose two.)",
    options: [
      { key: "A", text: "View code suggestions for a specific user" },
      { key: "B", text: "List all GitHub Copilot seat assignments for an organization" },
      { key: "C", text: "Get a summary of GitHub Copilot usage for organization members" },
      { key: "D", text: "List of all unsubscribed GitHub Copilot members within an organization" },
    ],
    correctAnswers: ["B","C"],
    category: "Security & Licensing",
    explanation: "REST API của Copilot hỗ trợ quản trị viên lấy các thông tin hoạt động: Danh sách phân bổ chỗ ngồi sử dụng giấy phép trong tổ chức (B) và Bản tóm tắt hiệu suất/tần suất sử dụng của các thành viên (C). API không cho phép xem mã code gợi ý chi tiết của từng cá nhân vì mục tiêu bảo mật quyền riêng tư (A).",
    tags: ["REST API","Copilot Seat Summary"]
  },
  {
    id: "q16",
    questionNumber: 16,
    text: "What is the best way to share feedback about GitHub Copilot Chat when using it on GitHub Mobile?",
    options: [
      { key: "A", text: "The feedback section on the GitHub website." },
      { key: "B", text: "By tweeting at GitHub’s official X (previously known as Twitter) account." },
      { key: "C", text: "Use the emojis in the Copilot Chat interface." },
      { key: "D", text: "The Settings menu in the GitHub Mobile app." },
    ],
    correctAnswers: ["C"],
    category: "Features & Optimization",
    explanation: "Cách nhanh nhất và trực quan nhất để phản hồi chất lượng câu trả lời của Chatbot ngay trên ứng dụng di động là click vào các biểu tượng cảm xúc (emojis) tích hợp sẵn trong dòng hội thoại chat (ví dụ như nút thích/không thích, ngón tay hướng lên/xuống). Cách này truyền trực tiếp ngữ cảnh hội thoại về hệ thống tối ưu hóa.",
    tags: ["Mobile App Feedback","Micro-Interactions"]
  },
  {
    id: "q17",
    questionNumber: 17,
    text: "What specific function does the '/fix' slash command perform?",
    options: [
      { key: "A", text: "Proposes changes for detected issues, suggesting corrections for syntax errors and programming mistakes." },
      { key: "B", text: "Converts pseudocode into executable code, optimizing for readability and maintainability." },
      { key: "C", text: "Generates new code snippets based on language syntax and best practices." },
      { key: "D", text: "Initiates a code review with static analysis tools for security and logic errors." },
    ],
    correctAnswers: ["A"],
    category: "Features & Optimization",
    explanation: "Lệnh '/fix' được thiết kế đặc biệt để phân tích đoạn code bị lỗi lỗi cú pháp hoặc lỗi logic, từ đó đưa ra đề xuất vá lỗi trực tiếp kèm theo giải thích nguyên nhân rõ ràng, giúp tăng hiệu suất sửa lỗi (debug) tại chỗ cho lập trình viên.",
    tags: ["Slash Commands","Debugging"]
  },
  {
    id: "q18",
    questionNumber: 18,
    text: "Which GitHub Copilot pricing plans include features that exclude your GitHub Copilot data like usage, prompts, and suggestions from default training GitHub Copilot? (Choose two.)",
    options: [
      { key: "A", text: "GitHub Copilot Codespace" },
      { key: "B", text: "GitHub Copilot Business" },
      { key: "C", text: "GitHub Copilot Individual" },
      { key: "D", text: "GitHub Copilot Enterprise" },
    ],
    correctAnswers: ["B","D"],
    category: "Security & Licensing",
    explanation: "Đối với tài khoản Doanh nghiệp (Business & Enterprise), hệ thống áp dụng cơ chế bảo mật nghiêm ngặt loại trừ hoàn toàn dữ liệu mã nguồn, câu lệnh và phản hồi của lập trình viên khỏi mô hình huấn luyện công cộng. Ở gói Cá nhân (Individual), dữ liệu có thể được sử dụng làm thông tin cải tiến mô hình trừ phi lập trình viên chủ động tắt chúng trong tài khoản.",
    tags: ["Data Privacy","Corporate Subscriptions"]
  },
  {
    id: "q19",
    questionNumber: 19,
    text: "When using an IDE with a supported GitHub Copilot plug-in, which Chat features can be accessed from within the IDE? (Choose two.)",
    options: [
      { key: "A", text: "Explain code and suggest improvements" },
      { key: "B", text: "Find out about releases and commits" },
      { key: "C", text: "Generate unit tests" },
      { key: "D", text: "Plan coding tasks" },
    ],
    correctAnswers: ["A","C"],
    category: "Features & Optimization",
    explanation: "Hai tính năng mở rộng hữu ích nhất ngay trong bảng Chat IDE của Copilot là: giải thích cơ chế đoạn mã chưa biết kèm đề xuất cải tiến tối ưu (A); và tạo khung mã kiểm thử đơn vị tự động phù hợp với framework hiện tại (C) qua lệnh /tests.",
    tags: ["IDE Integrations","Unit Tests Scaffold"]
  },
  {
    id: "q20",
    questionNumber: 20,
    text: "Which Copilot Enterprise features are available in all commercially supported IDEs?",
    options: [
      { key: "A", text: "Knowledge bases" },
      { key: "B", text: "Chat" },
      { key: "C", text: "Inline suggestions" },
      { key: "D", text: "Pull request summaries" },
    ],
    correctAnswers: ["B","C"],
    category: "Features & Optimization",
    explanation: "Độc lập với dòng IDE kết nối (VS Code, Visual Studio, JetBrains, Neovim), hai tính năng cốt lõi luôn khả dụng ở mọi nền tảng là: Khung hội thoại AI Chat (B) và Cơ chế tự động đề xuất mã nguồn thông minh dạng văn bản mờ trực tiếp tại con trỏ (C).",
    tags: ["Supported Editor Platforms","Core Features"]
  },
  {
    id: "q21",
    questionNumber: 21,
    text: "What two options navigate to configure duplicate detection? (Choose two.)",
    options: [
      { key: "A", text: "Organization settings → Copilot → Policies" },
      { key: "B", text: "Enterprise settings → Copilot → Policies" },
      { key: "C", text: "Repository settings → Copilot → Policies" },
      { key: "D", text: "User settings → Copilot → Policies" },
    ],
    correctAnswers: ["A","B"],
    category: "Security & Licensing",
    explanation: "Việc cấu hình phát hiện và chặn các đoạn mã trùng lặp với kho mã nguồn công cộng là chính sách cấp độ chính sách hệ thống. Chỉ người quản trị có quyền thiết lập ở trang cấu hình Cấp tổ chức (Organization) (A) hoặc Cấp cấu hình doanh nghiệp liên hợp (Enterprise) (B).",
    tags: ["Duplicate Code Filter","Policy Configurations"]
  },
  {
    id: "q22",
    questionNumber: 22,
    text: "What kind of insights can the GitHub Copilot usage metrics API provide to help evaluate the effectiveness of GitHub Copilot? (Choose two.)",
    options: [
      { key: "A", text: "The API can generate detailed reports on code quality improvements made by GitHub Copilot." },
      { key: "B", text: "The API can track the number of code suggestions accepted and used in the organization." },
      { key: "C", text: "The API can provide feedback on coding style and standards compliance." },
      { key: "D", text: "The API can provide Copilot Chat specific suggestions acceptance metrics." },
    ],
    correctAnswers: ["B","D"],
    category: "Features & Optimization",
    explanation: "Usage metrics API cho phép tổ chức đo lường hiệu suất thông qua: (B) Số lượng gợi ý mã được chấp nhận (accept) đưa vào codebase và (D) Thống kê tỷ lệ chấp nhận phản hồi riêng biệt của kênh Copilot Chat.",
    tags: ["Metrics API","Adoption Analytics"]
  },
  {
    id: "q23",
    questionNumber: 23,
    text: "How do you generate code suggestions with GitHub Copilot in the CLI?",
    options: [
      { key: "A", text: "Describe the project’s architecture → Use the copilot generate command → Accept the generated suggestion." },
      { key: "B", text: "Type out the code snippet → Use the copilot refine command to enhance it → Review the suggested command." },
      { key: "C", text: "Write code comments → Press the suggestion shortcut → Select the best suggestion from the list." },
      { key: "D", text: "Use ‘gh copilot suggest’ → Write the command you want → Select the best suggestion from the list." },
    ],
    correctAnswers: ["D"],
    category: "Features & Optimization",
    explanation: "Đối với môi trường dòng lệnh (CLI), lệnh tiêu chuẩn là sử dụng cú pháp 'gh copilot suggest' làm điểm mốc đầu tiên (D), tiếp theo là viết yêu cầu bằng ngôn ngữ tự nhiên, hệ thống sẽ đề xuất các lệnh shell, Git hoặc CLI phù hợp nhất.",
    tags: ["CLI Copilot","Command Line Helper"]
  },
  {
    id: "q24",
    questionNumber: 24,
    text: "Which of the following are true about code suggestions? (Choose two.)",
    options: [
      { key: "A", text: "Code suggestions are limited to single-line suggestions" },
      { key: "B", text: "Code suggestions are guaranteed to not expose known security vulnerabilities" },
      { key: "C", text: "Code suggestions will always compile or run without modifications" },
      { key: "D", text: "You can use keyboard shortcuts to accept the next word in a suggestion" },
      { key: "E", text: "Alternative code suggestions can be shown in a new tab" },
    ],
    correctAnswers: ["D","E"],
    category: "Features & Optimization",
    explanation: "Tính năng tiện ích của Copilot cho phép: Chấp nhận từng từ một cách tăng dần qua tổ hợp phím tắt (D) (ví dụ: Ctrl + Mũi tên phải) và Mở một tab phụ riêng biệt để duyệt qua tới 10 phương án gợi ý mã thay thế khác nhau cùng lúc (E).",
    tags: ["IDE Shortcuts","Multi-completions view"]
  },
  {
    id: "q25",
    questionNumber: 25,
    text: "What reasons could apply if code suggestions are not working in your editor? (Choose three.)",
    options: [
      { key: "A", text: "You do not have an active internet connection" },
      { key: "B", text: "Your programming language is not supported" },
      { key: "C", text: "You are working in files included in your .gitignore" },
      { key: "D", text: "You do not have a valid GitHub Copilot license" },
      { key: "E", text: "Your content exclusion is active and blocks the use of GitHub Copilot" },
    ],
    correctAnswers: ["A","D","E"],
    category: "Features & Optimization",
    explanation: "Khi Copilot ngừng hoạt động đột ngột, nguyên nhân cốt lõi thường thuộc nhóm: mất kết nối internet (A) vì Copilot cần kết nối máy chủ OpenAI/GitHub để suy luận; bạn chưa có hoặc hết hạn giấy phép sử dụng hợp lệ (D); hoặc tệp tin đang mở nằm trong danh mục loại trừ chính sách bảo mật nội bộ của tổ chức (Content Exclusion) (E).",
    tags: ["Troubleshooting","Service Errors"]
  },
  {
    id: "q26",
    questionNumber: 26,
    text: "How can the insights gained from the metrics API be used to improve the development process in conjunction with GitHub Copilot?",
    options: [
      { key: "A", text: "Real-time debugging and error resolution statistics." },
      { key: "B", text: "Automated generation of complete project documentation." },
      { key: "C", text: "Detailed analysis of GitHub Copilot’s suggestions vs. manual coding." },
      { key: "D", text: "Insights on the types of coding languages where GitHub Copilot is most helpful." },
    ],
    correctAnswers: ["C","D"],
    category: "Features & Optimization",
    explanation: "Dữ liệu phân tích hiệu năng giúp kỹ sư trưởng đánh giá: Tỷ lệ viết mã thủ công so với mã có sự hỗ trợ của AI (C); và nhận diện ngôn ngữ lập trình nào trong hệ thống đang tối ưu hóa được năng suất cao nhất nhờ vào Copilot (D).",
    tags: ["Analytics","Enterprise Admin Metrics"]
  },
  {
    id: "q27",
    questionNumber: 27,
    text: "How can users provide feedback about GitHub Copilot Chat using their IDE?",
    options: [
      { key: "A", text: "By emailing the support team directly." },
      { key: "B", text: "Through the “Share Feedback” button in the Copilot Chat panel." },
      { key: "C", text: "By filling out a feedback form on the GitHub website." },
      { key: "D", text: "By posting on the GitHub forums." },
    ],
    correctAnswers: ["B"],
    category: "Features & Optimization",
    explanation: "Kênh phản hồi nhanh nhất và được đề xuất ngay trên thanh giao diện Chat của IDE là nút tiện ích 'Share Feedback' (B), giúp chụp kèm thông tin kỹ thuật không nhạy cảm gửi về đội ngũ phát triển sản phẩm cải tiến thuật toán.",
    tags: ["IDE Panel Tools","User Comments System"]
  },
  {
    id: "q28",
    questionNumber: 28,
    text: "GitHub Copilot in the Command Line Interface (CLI) can be used to configure the following settings: (Choose two.)",
    options: [
      { key: "A", text: "Usage analytics" },
      { key: "B", text: "The default editor" },
      { key: "C", text: "The default execution confirmation" },
      { key: "D", text: "GitHub CLI subcommands" },
    ],
    correctAnswers: ["A","C"],
    category: "Features & Optimization",
    explanation: "Trong môi trường CLI, lập trình viên có thể cấu hình: Bật/Tắt việc gửi dữ liệu phân tích tần suất sử dụng (Usage Analytics) (A) và Quy định có yêu cầu xác nhận gõ phím trước khi chạy thử câu lệnh sinh ra tự động hay không (C) để tránh rủi ro phá hủy hệ thống.",
    tags: ["CLI Configurations","Execution Safety Gate"]
  },
  {
    id: "q29",
    questionNumber: 29,
    text: "What types of content can GitHub Copilot Knowledge Base answer questions about? (Choose three.)",
    options: [
      { key: "A", text: "compiled binaries" },
      { key: "B", text: "code snippets" },
      { key: "C", text: "design patterns" },
      { key: "D", text: "screenshots" },
      { key: "E", text: "documentation" },
    ],
    correctAnswers: ["B","C","E"],
    category: "Features & Optimization",
    explanation: "Cơ sở tri thức (Knowledge Base) của Copilot được thiết kế để giải nghĩa và xử lý thông tin dạng text có cấu trúc: các khối mã lập trình cụ thể (B), mô hình thiết kế tối ưu hệ thống (C) và các tài liệu hướng dẫn kỹ thuật dạng Markdown (E). Nó hoàn toàn không đọc hiểu các tệp nhị phân đã biên dịch (A).",
    tags: ["Knowledge Base Scope","Enterprise Features"]
  },
  {
    id: "q30",
    questionNumber: 30,
    text: "What is the primary purpose of organization audit logs in GitHub Copilot Business?",
    options: [
      { key: "A", text: "To track the number of lines of code suggested by Copilot" },
      { key: "B", text: "To assign software licenses within the organization" },
      { key: "C", text: "To monitor code conflicts across repositories" },
      { key: "D", text: "To monitor administrator activities and actions within the organization" },
    ],
    correctAnswers: ["D"],
    category: "Security & Licensing",
    explanation: "Sổ nhật ký kiểm toán (Audit Logs) của tổ chức hướng tới quản lý an ninh hệ thống và phân quyền: nó ghi chú toàn bộ hành động chỉnh sửa cài đặt, thêm bớt quyền quản trị hoặc cấp/thu hồi giấy phép sử dụng thực thi bởi các quản trị viên doanh nghiệp (D). Giao diện này không có mục đích theo dõi số dòng mã code đơn lẻ viết ra hàng ngày.",
    tags: ["Governance","Audit Trails Tracker"]
  },
  {
    id: "q31",
    questionNumber: 31,
    text: "How does GitHub Copilot Enterprise assist in code reviews during the pull request process? (Choose two.)",
    options: [
      { key: "A", text: "It generates a prose summary and bulleted list of key changes for pull requests." },
      { key: "B", text: "It can answer questions about the changeset of the pull request." },
      { key: "C", text: "It automatically merges pull requests after an automated review." },
      { key: "D", text: "It can validate the accuracy of the changes in the pull request." },
    ],
    correctAnswers: ["A","B"],
    category: "Features & Optimization",
    explanation: "GitHub Copilot hỗ trợ duyệt mã (Code Review) thông qua: (A) Tự động viết tóm tắt tệp thay đổi (PR Summary) dưới dạng văn bản và danh sách các điểm chỉnh sửa cốt lõi; và (B) Cho phép người duyệt code trực tiếp chất vấn Chatbot về phân đoạn mã nguồn thay đổi nâng cao hiệu suất thấu hiểu ngữ cảnh.",
    tags: ["Code Reviews","PR Diagnostics summary"]
  },
  {
    id: "q32",
    questionNumber: 32,
    text: "How can you get multiple suggestions from GitHub Copilot?",
    options: [
      { key: "A", text: "By using the inline chat functionality with the command/multiple" },
      { key: "B", text: "By using @workspace in the chat window" },
      { key: "C", text: "By opening the completions panel in your editor" },
      { key: "D", text: "By asking for multiple suggestions using comments in your code" },
    ],
    correctAnswers: ["C"],
    category: "Features & Optimization",
    explanation: "Để xem danh sách nhiều cấu trúc mã gợi ý thay thế cùng lúc, lập trình viên mở bảng hiển thị đầy đủ gợi ý (Completions Panel) thông qua phím tắt mặc định (như Alt + ] hoặc Ctrl + Enter trên Windows) để so sánh lựa chọn tối ưu nhất phù hợp bài toán.",
    tags: ["Completions Window","Aesthetic coding options"]
  },
  {
    id: "q33",
    questionNumber: 33,
    text: "What configuration needs to be set to get help from Microsoft and GitHub protecting against IP infringement while using GitHub Copilot?",
    options: [
      { key: "A", text: "Enforce blocking of MIT or GPL licensed code" },
      { key: "B", text: "Enable GitHub Copilot license checking" },
      { key: "C", text: "Suggestions matching public code to ‘blocked’. You need to check code suggestions yourself before accepting" },
    ],
    correctAnswers: ["C"],
    category: "Security & Licensing",
    explanation: "Để nhận hỗ trợ pháp lý bảo vệ bản quyền sở hữu trí tuệ từ Microsoft/GitHub, tài khoản của bạn phải kích hoạt chính sách cấu hình lựa chọn: 'Chặn các gợi ý trùng lặp với mã nguồn công cộng trên mạng (Suggestions matching public code).' Bạn vẫn phải tự thẩm định trực tiếp trước khi nhấn nút Accept mã.",
    tags: ["IP Infringement Protection","Settings Configuration"]
  },
  {
    id: "q34",
    questionNumber: 34,
    text: "What method can be used to interact with GitHub Copilot?",
    options: [
      { key: "A", text: "From a watch window in an IDE debug session" },
      { key: "B", text: "By using a properly configured GitHub CLI" },
      { key: "C", text: "From a web browser at https://github.copilot.com" },
      { key: "D", text: "By using chat capabilities in NeoVim" },
    ],
    correctAnswers: ["A"],
    category: "Features & Optimization",
    explanation: "Copilot hỗ trợ tương tác trực tiếp bằng cách tích hợp sâu vào thanh công cụ giám sát biến (Watch Window) ngay trong phiên thực thi thử nghiệm mã nguồn (Debug Session) của Visual Studio/VS Code để phân tích nội dung Call Stack sinh gợi ý thích ứng ngữ cảnh thực tế.",
    tags: ["Debugging Tools","IDE Extensions Integration"]
  },
  {
    id: "q35",
    questionNumber: 35,
    text: "How does GitHub Copilot typically handle code suggestions that involve deprecated features or syntax of programming languages?",
    options: [
      { key: "A", text: "GitHub Copilot always filters out deprecated elements to promote the use of current standards." },
      { key: "B", text: "GitHub Copilot may suggest deprecated syntax or features if they are present in its training data." },
      { key: "C", text: "GitHub Copilot rejects all prompts involving deprecated features to avoid compilation errors." },
      { key: "D", text: "GitHub Copilot automatically updates deprecated features in its suggestions to the latest version." },
    ],
    correctAnswers: ["B"],
    category: "Security & Licensing",
    explanation: "GitHub Copilot hoàn toàn không chủ động nhận thức hoặc đánh giá thực tuyển tính lỗi thời của câu lệnh theo sự phát triển thời gian. Vì vậy, nếu kho huấn luyện công cộng chứa mẫu cũ nhiều lần, nó vẫn tự động sinh ra gợi ý lỗi thời. Trách nhiệm kiểm lọt lỗi này thuộc về lập trình viên.",
    tags: ["Legacy Support","AI Retraining limitations"]
  },
  {
    id: "q36",
    questionNumber: 36,
    text: "Identify the steps involved in the life cycle of a GitHub Copilot code suggestion. (Choose two.)",
    options: [
      { key: "A", text: "Processing telemetry data" },
      { key: "B", text: "Generate suggestions" },
      { key: "C", text: "Retraining the model" },
      { key: "D", text: "Storing user data" },
      { key: "E", text: "Capturing the user’s context" },
    ],
    correctAnswers: ["B","E"],
    category: "Features & Optimization",
    explanation: "Một chu trình sinh gợi ý đơn tuyến (Single cycle) của Copilot bao gồm hai thao tác nền tảng: Thu thập và chuẩn hóa thông tin ngữ cảnh lập trình hiện trạng người dùng (Capturing user's context) (E); và Chuyển tham số đó đưa vào nhân xử lý mô hình sinh ra gợi ý phản hồi mờ (Generate suggestions) (B). Các thao tác telemetry hay retraining hoạt động độc lập không đồng bộ ngoại tuyến.",
    tags: ["Request Pipeline","Generative Life Cycle"]
  },
  {
    id: "q37",
    questionNumber: 37,
    text: "What role does the pre-processing of user input play in the data flow of GitHub Copilot Chat?",
    options: [
      { key: "A", text: "It formats the output response before presenting it to the user." },
      { key: "B", text: "It filters out irrelevant information from the user’s input prompt." },
      { key: "C", text: "It enriches the input prompt with additional context before passing it to the language model." },
      { key: "D", text: "It directly generates a response based on the user’s input prompt." },
    ],
    correctAnswers: ["C"],
    category: "Features & Optimization",
    explanation: "Tiền xử lý (Pre-processing) đóng vai trò then chốt: Chụp lại thông tin lớp ngữ cảnh rộng lớn xung quanh con trỏ (file lân cận đang mở, cấu trúc biến lớp đang kế thừa) rồi ghép kèm vào câu lệnh prompt của lập trình viên để chuyển cho mô hình LLM có đủ dữ liệu gốc đưa ra gợi ý may đo hoàn hảo.",
    tags: ["Prompt enrichment","Contextual Framing"]
  },
  {
    id: "q38",
    questionNumber: 38,
    text: "What is the impact of the “Fill-In-the-Middle” (FIM) technique on GitHub Copilot’s code suggestions?",
    options: [
      { key: "A", text: "Improves suggestions by considering both the prefix and suffix of the code, filling in the middle part more accurately." },
      { key: "B", text: "Restricts Copilot to use only external databases for generating code suggestions." },
      { key: "C", text: "Allows Copilot to generate suggestions based only on the prefix of the code." },
      { key: "D", text: "Ignores both the prefix and suffix of the code, focusing only on user comments for context." },
    ],
    correctAnswers: ["A"],
    category: "Features & Optimization",
    explanation: "Cơ chế 'Điền vào khoảng giữa' (Fill-In-the-Middle - FIM) nâng tầm vượt trội độ chính xác gợi ý: Thay vì chỉ nhìn phần mã nguồn đã viết phía trên con trỏ (Prefix), hệ thống quan sát phân tích cả khối code tiếp diễn bên dưới con trỏ (Suffix) để lồng ghép gợi ý khớp chính xác từng tham số giao diện.",
    tags: ["FIM Engine","Birectional context"]
  },
  {
    id: "q39",
    questionNumber: 39,
    text: "What is used by GitHub Copilot in the IDE to determine the prompt context?",
    options: [
      { key: "A", text: "Information from the IDE like open tabs, cursor location, selected code." },
      { key: "B", text: "All the code visible in the current IDE." },
      { key: "C", text: "All the code in the current repository and any git submodules." },
      { key: "D", text: "The open tabs in the IDE and the current folder of the terminal." },
    ],
    correctAnswers: ["A"],
    category: "Features & Optimization",
    explanation: "Để không áp hại dung lượng bộ nhớ thiết bị, Copilot chỉ lọc quét tập hợp ngữ cảnh gần: Danh sách các tab tệp tài liệu lập trình đang mở đồng thời sát bên, vị trí thực tế của con trỏ hiện tại, và đoạn văn mã đang được kỹ sư tô đen bôi chọn (A).",
    tags: ["Context Boundaries","Workspace Analytics"]
  },
  {
    id: "q40",
    questionNumber: 40,
    text: "When crafting prompts for GitHub Copilot, what is a recommended strategy to enhance the relevance of the generated code?",
    options: [
      { key: "A", text: "Keep the prompt as short as possible, using single words or brief phrases." },
      { key: "B", text: "Provide examples of expected input and output within the prompt." },
      { key: "C", text: "Avoid mentioning the programming language to allow for more flexible suggestions." },
      { key: "D", text: "Write the prompt in natural language without any programming language." },
    ],
    correctAnswers: ["B"],
    category: "Features & Optimization",
    explanation: "Nguyên tắc vàng của viết Prompt tối ưu là áp dụng Few-shot Learning: Cung cấp trực tiếp 1-2 mẫu kết quả đầu vào (input) và định dạng xuất mong đợi cụ thể (output) để giới hạn chính xác phạm vi tính toán của mô hình ngôn ngữ lớn AI.",
    tags: ["Prompt Engineering","Few-shot Learning"]
  },
  {
    id: "q41",
    questionNumber: 41,
    text: "A developer wants to use custom code instructions in GitHub Copilot. What file extension and directory should they use to define custom system prompts for their repository?",
    options: [
      { key: "A", text: ".github/copilot-instructions.md" },
      { key: "B", text: ".copilot/instructions.txt" },
      { key: "C", text: "copilot-config.json" },
      { key: "D", text: ".github/workflows/copilot.yml" },
    ],
    correctAnswers: ["A"],
    category: "Features & Optimization",
    explanation: "Để định nghĩa các hướng dẫn và quy tắc tùy biến cho Copilot trong một repository cụ thể, nhà phát triển tạo tệp `.github/copilot-instructions.md`. Copilot sẽ tự động quét tệp này để căn chỉnh phong cách viết code, chuẩn coding và quy tắc đặt tên phù hợp với tổ chức.",
    tags: ["Custom Instructions","Workspace Rules"]
  },
  {
    id: "q42",
    questionNumber: 42,
    text: "Which feature of GitHub Copilot is specifically designed to draft regular expressions or complex algorithms based on comments?",
    options: [
      { key: "A", text: "Copilot Workspace" },
      { key: "B", text: "Inline suggestions" },
      { key: "C", text: "Pull request summaries" },
      { key: "D", text: "Copilot Chat" },
    ],
    correctAnswers: ["B"],
    category: "Features & Optimization",
    explanation: "Tính năng gợi ý trực tiếp (Inline suggestions) tự động phân tích dòng chú thích viết bằng ngôn ngữ tự nhiên (ví dụ: // write a regex to validate email) và sinh ra mã nguồn tương ứng ngay tại vị trí con trỏ.",
    tags: ["Inline suggestions","Regex Drafting"]
  },
  {
    id: "q43",
    questionNumber: 43,
    text: "When using GitHub Copilot Individual, who is responsible for managing and purchasing the subscription?",
    options: [
      { key: "A", text: "The Organization Owner" },
      { key: "B", text: "The Billing Manager" },
      { key: "C", text: "The Enterprise Administrator" },
      { key: "D", text: "The Individual User" },
    ],
    correctAnswers: ["D"],
    category: "Security & Licensing",
    explanation: "Với gói Cá nhân (Individual), chính người dùng cuối (lập trình viên cá nhân) tự mua, thiết lập phương thức thanh toán và quản lý dung lượng sử dụng trên tài khoản cá nhân của họ.",
    tags: ["Licensing Plans","Individual Billing"]
  },
  {
    id: "q44",
    questionNumber: 44,
    text: "Who qualifies for a free subscription to GitHub Copilot Individual? (Choose two.)",
    options: [
      { key: "A", text: "Verified Students" },
      { key: "B", text: "Popular open-source maintainers" },
      { key: "C", text: "Microsoft MVP developers" },
      { key: "D", text: "Any GitHub organization member" },
    ],
    correctAnswers: ["A","B"],
    category: "Security & Licensing",
    explanation: "GitHub cung cấp dịch vụ Copilot Individual miễn phí dành cho Học sinh/Sinh viên đã được xác minh qua chương trình GitHub Student Developer Pack (A) và các Duy trì viên (maintainers) của các dự án nguồn mở phổ biến trên GitHub (B).",
    tags: ["Licensing Plans","Free Subscriptions"]
  },
  {
    id: "q45",
    questionNumber: 45,
    text: "What does the 'Knowledge Base' feature do in GitHub Copilot Enterprise?",
    options: [
      { key: "A", text: "It hosts external tutorials" },
      { key: "B", text: "It indexes specific repositories to answer domain-specific questions" },
      { key: "C", text: "It translates code from other companies" },
      { key: "D", text: "It stores API keys securely" },
    ],
    correctAnswers: ["B"],
    category: "Features & Optimization",
    explanation: "Cơ sở tri thức (Knowledge Base) cho phép doanh nghiệp chỉ định các kho mã nguồn nội bộ hoặc tài liệu hướng dẫn cụ thể để huấn luyện ảo cho Copilot. Từ đó lập trình viên có thể truy vấn các câu hỏi chuyên sâu mang tính đặc thù nội bộ.",
    tags: ["Knowledge Base","Enterprise Scope"]
  },
  {
    id: "q46",
    questionNumber: 46,
    text: "When working in an enterprise environment, which Copilot plan offers fine-tuning on your private codebase?",
    options: [
      { key: "A", text: "Copilot Individual" },
      { key: "B", text: "Copilot Business" },
      { key: "C", text: "Copilot Enterprise" },
      { key: "D", text: "All of the above" },
    ],
    correctAnswers: ["C"],
    category: "Security & Licensing",
    explanation: "Gói Copilot Enterprise cung cấp khả năng tích hợp sâu hơn như tích hợp trực tiếp cơ sở tri thức (Knowledge Base) định danh từ mã nguồn riêng và tối ưu hóa các mô hình tùy biến cho một số nhóm doanh nghiệp đặc thù.",
    tags: ["Licensing Plans","Fine-Tuning"]
  },
  {
    id: "q47",
    questionNumber: 47,
    text: "Which of the following is true about how Copilot uses context from surrounding files?",
    options: [
      { key: "A", text: "Copilot only reads the current line" },
      { key: "B", text: "Copilot reads the active file and sometimes other open tabs in the editor" },
      { key: "C", text: "Copilot scans the entire local hard drive for files" },
      { key: "D", text: "Copilot only reads files listed in package.json" },
    ],
    correctAnswers: ["B"],
    category: "Features & Optimization",
    explanation: "Thuật toán thu thập ngữ cập của Copilot (chạy ngầm trong IDE) sẽ ưu tiên quét tệp đang mở hiện tại và các tab tài liệu mã nguồn đang được mở lân cận để tìm các định nghĩa hàm hoặc các kiểu dữ liệu liên quan để ghép thành prompt hoàn chỉnh.",
    tags: ["Context Boundaries","Workspace Indexing"]
  },
  {
    id: "q48",
    questionNumber: 48,
    text: "What is the main security benefit of using Copilot Business over Copilot Individual for business development?",
    options: [
      { key: "A", text: "It compiles your code 2x faster" },
      { key: "B", text: "It ensures prompts and suggestions are not retained or used for model training" },
      { key: "C", text: "It automatically patches server exploits" },
      { key: "D", text: "It provides free hardware upgrades" },
    ],
    correctAnswers: ["B"],
    category: "Security & Licensing",
    explanation: "Điểm cộng an ninh cốt lõi của Copilot Business so với bản Individual là cam kết bảo mật cấp doanh nghiệp: mọi câu lệnh prompt và mã sinh ra từ IDE đều được bảo mật tuyệt đối, không lưu vết trên đĩa và không bị dùng để tiếp tục huấn luyện mô hình chung.",
    tags: ["Data Safety","Data Retention policies"]
  },
  {
    id: "q49",
    questionNumber: 49,
    text: "In VS Code, how can you open the secondary completions panel showing up to 10 suggestions?",
    options: [
      { key: "A", text: "By pressing Ctrl + Alt + Delete" },
      { key: "B", text: "By pressing Ctrl + Enter (or Cmd + Enter / Ctrl + Alt + Enter on macOS)" },
      { key: "C", text: "By double-clicking the code editor screen" },
      { key: "D", text: "By typing '/more' in the chat window" },
    ],
    correctAnswers: ["B"],
    category: "Features & Optimization",
    explanation: "Để xem nhiều gợi ý thay thế cùng lúc dưới dạng một tab chuyên dụng độc lập, phím tắt tiêu chuẩn trong VS Code là Ctrl + Enter (trên Windows) hoặc Cmd + Enter / Ctrl + Alt + Enter (trên macOS).",
    tags: ["Completions view","IDEs Integration"]
  },
  {
    id: "q50",
    questionNumber: 50,
    text: "How does the 'Content Exclusion' policy work in GitHub Copilot?",
    options: [
      { key: "A", text: "It blocks developers from visiting adult websites" },
      { key: "B", text: "It prevents Copilot from showing suggestions in specific files or directories" },
      { key: "C", text: "It excludes all open source libraries from search" },
      { key: "D", text: "It hides the terminal output" },
    ],
    correctAnswers: ["B"],
    category: "Security & Licensing",
    explanation: "Chính sách Content Exclusion cho phép quản trị viên doanh nghiệp định nghĩa các mẫu đường dẫn hoặc tệp nhạy cảm. Khi lập trình viên thao tác trên các tệp này, plugin Copilot sẽ tự động bị vô hiệu hóa tạm thời để tránh rò rỉ thông tin tối mật.",
    tags: ["Content Exclusion","Enterprise Policies"]
  },
  {
    id: "q51",
    questionNumber: 51,
    text: "Which of the following is NOT a pre-defined command slash command in Copilot Chat?",
    options: [
      { key: "A", text: "/explain" },
      { key: "B", text: "/tests" },
      { key: "C", text: "/fix" },
      { key: "D", text: "/compile" },
    ],
    correctAnswers: ["D"],
    category: "Features & Optimization",
    explanation: "Các lệnh slash thông dụng gồm có: /explain (giải thích code), /tests (tạo unit tests), /fix (sửa lỗi code), /help. Lệnh `/compile` không phải là lệnh mặc định trong Copilot Chat.",
    tags: ["Slash Commands","Features Guide"]
  },
  {
    id: "q52",
    questionNumber: 52,
    text: "What is the purpose of the `/tests` slash command in Copilot Chat?",
    options: [
      { key: "A", text: "It runs the compiler to check for syntax errors" },
      { key: "B", text: "It automatically generates unit tests for the selected code" },
      { key: "C", text: "It reports software bugs directly to GitHub Support" },
      { key: "D", text: "It formats the database tables" },
    ],
    correctAnswers: ["B"],
    category: "Features & Optimization",
    explanation: "Lệnh `/tests` giúp tự động sinh ra bộ khung mã kiểm thử đơn vị (unit tests) phù hợp nhất cho đoạn mã được bôi chọn, giúp tăng tốc độ viết mã kiểm thử và nâng độ phủ (coverage) cho dự án.",
    tags: ["Unit Testing","Slash Commands"]
  },
  {
    id: "q53",
    questionNumber: 53,
    text: "How can a developer prevent certain sensitive files from being sent to Copilot backend for suggestions?",
    options: [
      { key: "A", text: "Deny camera permissions" },
      { key: "B", text: "Define exclusion paths in the organization settings" },
      { key: "C", text: "Save files with a .secret extension" },
      { key: "D", text: "Change the font size of the active file" },
    ],
    correctAnswers: ["B"],
    category: "Security & Licensing",
    explanation: "Để ngăn các tệp nhạy cảm của tổ chức bị gửi lên máy chủ phân tích của Copilot, quản trị viên sử dụng trang cấu hình tổ chức để khai báo đường dẫn loại trừ (Exclusion paths). Mọi thao tác trên tệp này đều bị chặn cục bộ.",
    tags: ["Content Exclusion","Data Privacy"]
  },
  {
    id: "q54",
    questionNumber: 54,
    text: "In which pricing tier is the 'GitHub Copilot for Azure DevOps' extension available?",
    options: [
      { key: "A", text: "Only in Individual" },
      { key: "B", text: "Only in Business" },
      { key: "C", text: "Only in Enterprise" },
      { key: "D", text: "Available as an add-on or integrated workspace solution" },
    ],
    correctAnswers: ["D"],
    category: "Security & Licensing",
    explanation: "Copilot cho Azure DevOps cho phép tích hợp trực tiếp vào môi trường Azure Repos và Azure Boards, được thiết kế để phục vụ các nhóm đang sử dụng dịch vụ này một cách linh hoạt.",
    tags: ["Azure DevOps","Licensing Plans"]
  },
  {
    id: "q55",
    questionNumber: 55,
    text: "Which organization role has the authority to assign or revoke Copilot seats in Copilot Business?",
    options: [
      { key: "A", text: "Read-only member" },
      { key: "B", text: "Billing Manager or Organization Owner" },
      { key: "C", text: "Any external collaborator" },
      { key: "D", text: "Normal developer" },
    ],
    correctAnswers: ["B"],
    category: "Security & Licensing",
    explanation: "Chỉ có chủ sở hữu tổ chức (Organization Owner) hoặc Quản lý thanh toán (Billing Manager) mới có đặc quyền thêm bớt, phân bổ chỗ ngồi (seats) và quản lý hóa đơn thanh toán cho Copilot Business.",
    tags: ["Access Control","Billing Configurations"]
  },
  {
    id: "q56",
    questionNumber: 56,
    text: "What does the Copilot policy 'suggestions matching public code' actually do?",
    options: [
      { key: "A", text: "It forces the developer to write open source code" },
      { key: "B", text: "It checks suggestions against public repositories on GitHub and blocks matching code blocks if set to 'block'" },
      { key: "C", text: "It automatically clones public repositories to local machine" },
      { key: "D", text: "It formats the code style in a uniform manner" },
    ],
    correctAnswers: ["B"],
    category: "Security & Licensing",
    explanation: "Chính sách 'suggestions matching public code' giúp phát hiện các đoạn mã sinh ra dài hơn 150 ký tự trùng khớp với các kho lưu trữ công cộng trên GitHub. Nếu đặt là 'block', nó sẽ tự động lọc bỏ gợi ý đó để bảo vệ bản quyền.",
    tags: ["Public Code Filter","IP Infringement Protection"]
  },
  {
    id: "q57",
    questionNumber: 57,
    text: "What is the minimum recommended length of code snippet for FIM (Fill-in-the-Middle) to trigger effectively?",
    options: [
      { key: "A", text: "At least a few lines of context before and after the cursor" },
      { key: "B", text: "Exactly 1 character" },
      { key: "C", text: "Minimum 10,000 lines of code" },
      { key: "D", text: "FIM does not need cursor context" },
    ],
    correctAnswers: ["A"],
    category: "Features & Optimization",
    explanation: "Để cơ chế FIM (Fill-in-the-Middle) hoạt động hiệu quả nhất, cần có một lượng ngữ cảnh vừa đủ ở cả phía trên (prefix) và phía dưới (suffix) của con trỏ trong tệp đang viết.",
    tags: ["FIM Engine","Algorithms"]
  },
  {
    id: "q58",
    questionNumber: 58,
    text: "In Copilot Chat, what does the `@workspace` agent do?",
    options: [
      { key: "A", text: "It formats the OS workspace" },
      { key: "B", text: "It allows you to ask questions about the entire active workspace directory" },
      { key: "C", text: "It deletes unused files from local path" },
      { key: "D", text: "It updates all node packages in package.json" },
    ],
    correctAnswers: ["B"],
    category: "Features & Optimization",
    explanation: "`@workspace` là một Chat Agent thông minh giúp phân tích toàn bộ cấu trúc thư mục dự án đang mở, hỗ trợ tìm kiếm hàm, phân tích tệp tin và trả lời các liên quan đến logic đa file.",
    tags: ["Workspace Agent","Prompt Context"]
  },
  {
    id: "q59",
    questionNumber: 59,
    text: "What does the `/explain` console slash command do in VS Code?",
    options: [
      { key: "A", text: "Translates selected code to clear explanations in natural language" },
      { key: "B", text: "Writes documentation comments automatically" },
      { key: "C", text: "Fixes syntax errors in current selection" },
      { key: "D", text: "Opens the official help forum of Microsoft" },
    ],
    correctAnswers: ["A"],
    category: "Features & Optimization",
    explanation: "Lệnh `/explain` dịch giải sâu sắc và tóm tắt cơ chế vận hành của dòng code được bôi đen, đặc biệt hữu ích khi tiếp nhận các dự án cũ hoặc mã nguồn viết bằng các ngôn ngữ xa lạ.",
    tags: ["Slash Commands","Legacy Code"]
  },
  {
    id: "q60",
    questionNumber: 60,
    text: "How is billing calculated for Copilot Business billing cycles?",
    options: [
      { key: "A", text: "Flat yearly fee with unlimited users" },
      { key: "B", text: "Per-seat per-month model with prorated billing for partial months" },
      { key: "C", text: "Pay-per-query model based on AI transactions" },
      { key: "D", text: "Based on lines of code accepted by developer seats" },
    ],
    correctAnswers: ["B"],
    category: "Security & Licensing",
    explanation: "Hóa đơn thanh toán của Copilot Business dựa trên số lượng chỗ ngồi phân bổ thực tế hàng tháng (per-seat per-month). Nếu thêm seats giữa chu kỳ, chi phí sẽ được tính tỷ lệ tương xứng (prorated).",
    tags: ["Billing Calculations","Enterprise Subscriptions"]
  },
  {
    id: "q61",
    questionNumber: 61,
    text: "What types of prompts or code snippets might be flagged by the GitHub Copilot toxicity filter? Each correct answer presents part of the solution. (Choose two.)",
    options: [
      { key: "A", text: "Hate speech or discriminatory language (e.g., racial slurs, offensive stereotypes)" },
      { key: "B", text: "Sexually suggestive or explicit content" },
      { key: "C", text: "Code that contains logical errors or produces unexpected results" },
      { key: "D", text: "Code comments containing strong opinions or criticisms" },
    ],
    correctAnswers: ["A","B"],
    category: "Responsible AI",
    explanation: "Bộ lọc toxicity của GitHub Copilot được thiết kế để gắn cờ nội dung độc hại như lời lẽ thù ghét hoặc phân biệt đối xử (hate speech) và nội dung khiêu dâm hay tình dục rõ ràng. Lỗi logic trong code hay ý kiến phê bình trong comment không thuộc phạm vi lọc của bộ lọc độc hại này.",
    tags: ["Toxicity Filter","Content Moderation","Safety"]
  },
  {
    id: "q62",
    questionNumber: 62,
    text: "What are the potential risks associated with relying heavily on code generated from GitHub Copilot? Each correct answer presents part of the solution. (Choose two.)",
    options: [
      { key: "A", text: "GitHub Copilot may introduce security vulnerabilities by suggesting code with known exploits." },
      { key: "B", text: "GitHub Copilot’s suggestions may not always reflect best practices or the latest coding standards." },
      { key: "C", text: "GitHub Copilot may increase development lead time by providing irrelevant suggestions." },
      { key: "D", text: "GitHub Copilot may decrease developer velocity by requiring too much time in prompt engineering." },
    ],
    correctAnswers: ["A","B"],
    category: "Developer Use Cases",
    explanation: "Phụ thuộc nhiều vào code do GitHub Copilot tạo ra có rủi ro: Copilot có thể đưa ra gợi ý chứa lỗ hổng bảo mật với các exploit đã biết, và các gợi ý không phải lúc nào cũng phản ánh best practices hay tiêu chuẩn coding mới nhất. Vì vậy lập trình viên luôn cần xem xét và kiểm thử lại code được gợi ý.",
    tags: ["Security","Best Practices","Code Review"]
  },
  {
    id: "q63",
    questionNumber: 63,
    text: "What should developers consider when relying on GitHub Copilot for generating code that involves statistical analysis?",
    options: [
      { key: "A", text: "GitHub Copilot will automatically correct any statistical errors found in the user’s initial code." },
      { key: "B", text: "GitHub Copilot can independently verify the statistical significance of results." },
      { key: "C", text: "GitHub Copilot can design new statistical methods that have not been previously documented." },
      { key: "D", text: "GitHub Copilot’s suggestions are based on statistical trends and may not always apply accurately to specific datasets." },
    ],
    correctAnswers: ["D"],
    category: "Developer Use Cases",
    explanation: "Khi dùng GitHub Copilot cho phân tích thống kê, lập trình viên cần lưu ý rằng các gợi ý dựa trên xu hướng thống kê (statistical trends) và có thể không áp dụng chính xác cho một bộ dữ liệu cụ thể. Copilot không tự xác minh ý nghĩa thống kê hay tự sửa lỗi, nên cần kiểm chứng thủ công.",
    tags: ["Statistical Analysis","Limitations","Verification"]
  },
  {
    id: "q64",
    questionNumber: 64,
    text: "What is the primary role of the ‘/optimize’ slash command in Visual Studio?",
    options: [
      { key: "A", text: "Translates code into a more performant language." },
      { key: "B", text: "Automatically formats the code according to the selected style guide." },
      { key: "C", text: "Summarizes your documentation into more maintainable and readable formats." },
      { key: "D", text: "Enhances the performance of the selected code by analyzing its runtime complexity." },
    ],
    correctAnswers: ["D"],
    category: "Tooling & Integrations",
    explanation: "Lệnh slash `/optimize` trong Visual Studio nâng cao hiệu năng của đoạn code được chọn bằng cách phân tích độ phức tạp thời gian chạy (runtime complexity). Nó tập trung vào tối ưu hiệu suất chứ không phải định dạng code hay dịch sang ngôn ngữ khác.",
    tags: ["Slash Commands","Optimization","Visual Studio"]
  },
  {
    id: "q65",
    questionNumber: 65,
    text: "What type of information can you retrieve through GitHub Copilot Business Subscriptions via REST API? Each correct answer presents part of the solution. (Choose two.)",
    options: [
      { key: "A", text: "View code suggestions for a specific user" },
      { key: "B", text: "List all GitHub Copilot seat assignments for an organization" },
      { key: "C", text: "Get a summary of GitHub Copilot usage for organization members" },
      { key: "D", text: "List of all unsubscribed GitHub Copilot members within an organization" },
    ],
    correctAnswers: ["B","C"],
    category: "Administration & Policies",
    explanation: "Qua REST API của GitHub Copilot Business, bạn có thể liệt kê tất cả các phân bổ ghế (seat assignments) cho một tổ chức và lấy bản tóm tắt mức sử dụng Copilot của các thành viên. API quản lý tập trung vào dữ liệu quản trị về seat và usage, không hiển thị từng gợi ý code cho một người dùng cụ thể.",
    tags: ["REST API","Seat Management","Usage Metrics"]
  },
  {
    id: "q66",
    questionNumber: 66,
    text: "When using an IDE with a supported GitHub Copilot plug-in, which Chat features can be accessed from within the IDE? Each correct answer presents part of the solution. (Choose two.)",
    options: [
      { key: "A", text: "Explain code and suggest improvements" },
      { key: "B", text: "Find out about releases and commits" },
      { key: "C", text: "Generate unit tests" },
      { key: "D", text: "Plan coding tasks" },
    ],
    correctAnswers: ["A","C"],
    category: "Tooling & Integrations",
    explanation: "Trong IDE có plug-in Copilot được hỗ trợ, người dùng có thể truy cập tính năng Chat để giải thích code và đề xuất cải tiến, cũng như tạo unit tests. Các tác vụ như xem releases/commits hay lập kế hoạch coding không phải là tính năng Chat trong IDE.",
    tags: ["IDE","Copilot Chat","Unit Tests"]
  },
  {
    id: "q67",
    questionNumber: 67,
    text: "What two options navigate to configure duplicate detection? Each correct answer presents part of the solution. (Choose two.)",
    options: [
      { key: "A", text: "Organization settings → Copilot → Policies" },
      { key: "B", text: "Enterprise settings → Copilot → Policies" },
      { key: "C", text: "Repository settings → Copilot → Policies" },
      { key: "D", text: "User settings → Copilot → Policies" },
    ],
    correctAnswers: ["A","B"],
    category: "Administration & Policies",
    explanation: "Để cấu hình duplicate detection (phát hiện trùng lặp), bạn điều hướng qua Organization settings → Copilot → Policies hoặc Enterprise settings → Copilot → Policies. Việc cài đặt được thực hiện ở cấp tổ chức hoặc doanh nghiệp, không phải ở cấp repository hay user.",
    tags: ["Duplicate Detection","Policies","Configuration"]
  },
  {
    id: "q68",
    questionNumber: 68,
    text: "What kind of insights can the GitHub Copilot usage metrics API provide to help evaluate the effectiveness of GitHub Copilot? Each correct answer presents part of the solution. (Choose two.)",
    options: [
      { key: "A", text: "The API can generate detailed reports on code quality improvements made by GitHub Copilot." },
      { key: "B", text: "The API can track the number of code suggestions accepted and used in the organization." },
      { key: "C", text: "The API can provide feedback on coding style and standards compliance." },
      { key: "D", text: "The API can provide Copilot Chat specific suggestions acceptance metrics." },
      { key: "E", text: "The API can refactor your code to improve productivity." },
    ],
    correctAnswers: ["B","D"],
    category: "Administration & Policies",
    explanation: "API chỉ số sử dụng (usage metrics API) của GitHub Copilot có thể theo dõi số lượng gợi ý code được chấp nhận và sử dụng trong tổ chức, cũng như cung cấp các chỉ số chấp nhận gợi ý riêng cho Copilot Chat. API tập trung vào dữ liệu sử dụng và tỷ lệ chấp nhận, không tự đánh giá chất lượng code hay refactor code.",
    tags: ["Usage Metrics","REST API","Adoption"]
  },
  {
    id: "q69",
    questionNumber: 69,
    text: "Which of the following are true about code suggestions? Each correct answer presents part of the solution. (Choose two.)",
    options: [
      { key: "A", text: "Code suggestions are limited to single-line suggestions" },
      { key: "B", text: "Code suggestions are guaranteed to not expose known security vulnerabilities" },
      { key: "C", text: "Code suggestions will always compile or run without modifications" },
      { key: "D", text: "You can use keyboard shortcuts to accept the next word in a suggestion" },
      { key: "E", text: "Alternative code suggestions can be shown in a new tab" },
    ],
    correctAnswers: ["D","E"],
    category: "Developer Use Cases",
    explanation: "Về code suggestions, bạn có thể dùng phím tắt để chấp nhận từng từ tiếp theo của một gợi ý, và các gợi ý thay thế (alternative suggestions) có thể được hiển thị trong một tab mới. Copilot không giới hạn ở gợi ý một dòng và không đảm bảo code luôn biên dịch chạy được hay không có lỗ hổng bảo mật.",
    tags: ["Code Suggestions","Keyboard Shortcuts","IDE"]
  },
  {
    id: "q70",
    questionNumber: 70,
    text: "GitHub Copilot in the Command Line Interface (CLI) can be used to configure the following settings: Each correct answer presents part of the solution. (Choose two.)",
    options: [
      { key: "A", text: "Usage analytics" },
      { key: "B", text: "The default editor" },
      { key: "C", text: "The default execution confirmation" },
      { key: "D", text: "GitHub CLI subcommands" },
    ],
    correctAnswers: ["A","C"],
    category: "Tooling & Integrations",
    explanation: "GitHub Copilot in the CLI cho phép cấu hình usage analytics (bật/tắt việc gửi dữ liệu phân tích) và default execution confirmation (xác nhận trước khi chạy lệnh được đề xuất). Đây là các thiết lập riêng của tiện ích Copilot CLI, không phải các tham số của GitHub CLI thông thường.",
    tags: ["CLI","Configuration","Analytics"]
  },
  {
    id: "q71",
    questionNumber: 71,
    text: "What types of content can GitHub Copilot Knowledge Base answer questions about? Each correct answer presents part of the solution. (Choose three.)",
    options: [
      { key: "A", text: "compiled binaries" },
      { key: "B", text: "code snippets" },
      { key: "C", text: "design patterns" },
      { key: "D", text: "screenshots" },
      { key: "E", text: "documentation" },
    ],
    correctAnswers: ["B","C","E"],
    category: "Plans & Features",
    explanation: "GitHub Copilot Knowledge Base lập chỉ mục nội dung dạng văn bản trong các repository được chọn, nên nó có thể trả lời câu hỏi dựa trên code snippets, design patterns và documentation. Các nội dung nhị phân như compiled binaries hay screenshots không được lập chỉ mục nên không nằm trong phạm vi này.",
    tags: ["Knowledge Base","Indexing","Enterprise"]
  },
  {
    id: "q72",
    questionNumber: 72,
    text: "If you are working on open source projects, GitHub Copilot Individual can be paid:",
    options: [
      { key: "A", text: "Through an invoice or a credit card" },
      { key: "B", text: "Through an Azure Subscription" },
      { key: "C", text: "Based on the payment method in your user profile" },
      { key: "D", text: "N/A - Copilot Individual is a free service for all open source projects" },
    ],
    correctAnswers: ["D"],
    category: "Plans & Features",
    explanation: "GitHub cung cấp GitHub Copilot miễn phí cho người duy trì (maintainer) các dự án mã nguồn mở đủ điều kiện và sinh viên/giáo viên đã được xác minh. Do đó với dự án open source thì không cần phương thức thanh toán nào.",
    tags: ["Open Source","Pricing","Copilot Individual"]
  },
  {
    id: "q73",
    questionNumber: 73,
    text: "How long does GitHub retain Copilot data for Business and Enterprise? Each correct answer presents part of the solution. (Choose two.)",
    options: [
      { key: "A", text: "Prompts and Suggestion: Retained for 28 days" },
      { key: "B", text: "Prompts and Suggestions: Not retained" },
      { key: "C", text: "User Engagement Data: Kept for Two Years" },
      { key: "D", text: "User Engagement Data: Kept for 1 Year" },
    ],
    correctAnswers: ["A","C"],
    category: "Data Privacy & Content Exclusions",
    explanation: "Đối với Business và Enterprise, prompts và suggestions được lưu trữ trong 28 ngày rồi xóa, trong khi user engagement data (dữ liệu mức độ tương tác) được giữ trong hai năm. Chính sách lưu trữ này phản ánh cam kết của GitHub về quyền riêng tư dữ liệu code.",
    tags: ["Data Retention","Privacy","Business"]
  },
  {
    id: "q74",
    questionNumber: 74,
    text: "What GitHub Copilot pricing plan gives you access to your company’s knowledge bases?",
    options: [
      { key: "A", text: "GitHub Copilot Enterprise" },
      { key: "B", text: "GitHub Copilot Individual" },
      { key: "C", text: "GitHub Copilot Business" },
      { key: "D", text: "GitHub Copilot Professional" },
    ],
    correctAnswers: ["A"],
    category: "Plans & Features",
    explanation: "Truy cập vào knowledge bases của công ty là một tính năng độc quyền của GitHub Copilot Enterprise. Các gói thấp hơn như Individual hay Business không bao gồm khả năng này.",
    tags: ["Knowledge Base","Enterprise","Pricing"]
  },
  {
    id: "q75",
    questionNumber: 75,
    text: "Which Copilot Individual features are available when using a supported extension for Visual Studio, VS Code, or JetBrains IDEs? Each correct answer presents part of the solution. (Choose two.)",
    options: [
      { key: "A", text: "Chat" },
      { key: "B", text: "Pull Request Diff Analysis" },
      { key: "C", text: "Code suggestions" },
      { key: "D", text: "Knowledge Base" },
    ],
    correctAnswers: ["A","C"],
    category: "Plans & Features",
    explanation: "Với một extension được hỗ trợ trên Visual Studio, VS Code hoặc JetBrains, người dùng Copilot Individual có thể dùng Chat và Code suggestions ngay trong IDE. Các tính năng như Pull Request Diff Analysis và Knowledge Base thuộc về gói Enterprise nên không khả dụng.",
    tags: ["Copilot Individual","IDE","Chat"]
  },
  {
    id: "q76",
    questionNumber: 76,
    text: "An independent contractor develops applications for a variety of different customers. Assuming no concerns from their customers, which GitHub Copilot plan is best suited?",
    options: [
      { key: "A", text: "GitHub Copilot Individual" },
      { key: "B", text: "GitHub Copilot Enterprise" },
      { key: "C", text: "GitHub Copilot Business" },
      { key: "D", text: "GitHub Copilot Teams" },
      { key: "E", text: "GitHub Copilot Business for non-GHE Customers" },
    ],
    correctAnswers: ["A"],
    category: "Plans & Features",
    explanation: "Một nhà thầu độc lập làm việc cho nhiều khách hàng khác nhau phù hợp nhất với GitHub Copilot Individual vì đây là gói theo cá nhân, không gắn với một tổ chức GitHub cụ thể. Với giả định khách hàng không có lo ngại nào, gói Individual là lựa chọn đơn giản và tiết kiệm nhất.",
    tags: ["Copilot Individual","Use Case","Pricing"]
  },
  {
    id: "q77",
    questionNumber: 77,
    text: "Which GitHub Copilot plan allows for prompt and suggestion collection?",
    options: [
      { key: "A", text: "GitHub Copilot Individuals" },
      { key: "B", text: "GitHub Copilot Codespace" },
      { key: "C", text: "GitHub Copilot Business" },
      { key: "D", text: "GitHub Copilot Enterprise" },
    ],
    correctAnswers: ["D"],
    category: "Data Privacy & Content Exclusions",
    explanation: "Khả năng thu thập (collection) prompts và suggestions cho mục đích cải thiện thuộc về cấu hình của GitHub Copilot Enterprise. Các gói Business và Individual có chính sách dữ liệu khác và không cho phép thu thập theo cùng cách.",
    tags: ["Data Collection","Enterprise","Privacy"]
  },
  {
    id: "q78",
    questionNumber: 78,
    text: "How does GitHub Copilot Chat help in understanding the existing codebase?",
    options: [
      { key: "A", text: "By automatically refactoring code to improve readability." },
      { key: "B", text: "By providing visual diagrams of the code structure." },
      { key: "C", text: "By running code linters and formatters." },
      { key: "D", text: "By answering questions about the code and generating explanations." },
    ],
    correctAnswers: ["D"],
    category: "Developer Use Cases",
    explanation: "GitHub Copilot Chat giúp hiểu codebase hiện có bằng cách trả lời câu hỏi về code và tạo ra các giải thích bằng ngôn ngữ tự nhiên. Người dùng có thể hỏi về chức năng của một đoạn code và nhận lời giải thích, thay vì chỉ refactor hay chạy linter.",
    tags: ["Copilot Chat","Code Understanding","Explanation"]
  },
  {
    id: "q79",
    questionNumber: 79,
    text: "How is GitHub Copilot Individual billed? Each correct answer presents part of the solution. (Choose two.)",
    options: [
      { key: "A", text: "Free (not billed) for all open source projects" },
      { key: "B", text: "Monthly, as metered service based on actual consumption" },
      { key: "C", text: "Annually as a subscription" },
      { key: "D", text: "Monthly as a subscription" },
    ],
    correctAnswers: ["C","D"],
    category: "Plans & Features",
    explanation: "GitHub Copilot Individual được tính phí dưới dạng đăng ký (subscription), có thể trả theo tháng hoặc theo năm. Đây là mô hình thuê bao cố định chứ không phải tính theo mức tiêu thụ thực tế.",
    tags: ["Billing","Subscription","Copilot Individual"]
  },
  {
    id: "q80",
    questionNumber: 80,
    text: "Which REST API endpoint is used to modify details about a GitHub Copilot Business subscription? Each correct answer part of the solution. (Choose two.)",
    options: [
      { key: "A", text: "Add teams to the Copilot subscription for an organization." },
      { key: "B", text: "Remove teams from the Copilot subscription for an organization." },
      { key: "C", text: "Upgrade or downgrade the subscription tier" },
      { key: "D", text: "Migrate Copilot seat assignments between GitHub organizations" },
      { key: "E", text: "Reassign Copilot seats based on GitHub repository size" },
    ],
    correctAnswers: ["A","B"],
    category: "Tooling & Integrations",
    explanation: "REST API của Copilot Business cung cấp các endpoint để thêm teams vào và xóa teams khỏi gói đăng ký Copilot của một tổ chức, qua đó quản lý việc gán seat. Đây là các thao tác chính thức để chỉnh sửa chi tiết subscription qua API.",
    tags: ["REST API","Seat Management","Business"]
  },
  {
    id: "q81",
    questionNumber: 81,
    text: "Which of the following is the correct way to access the audit log events for GitHub Copilot Business?",
    options: [
      { key: "A", text: "Use the Audit log section in the organization’s GitHub settings" },
      { key: "B", text: "Navigate to the Insights tab in the repository settings" },
      { key: "C", text: "Use the Code tab in the GitHub repository" },
      { key: "D", text: "Navigate to the Security tab in the organization’s GitHub settings" },
    ],
    correctAnswers: ["A"],
    category: "Administration & Policies",
    explanation: "Các sự kiện audit log của Copilot Business được truy cập qua mục Audit log trong phần settings của tổ chức trên GitHub. Đây là nơi tập trung ghi lại các hành động quản trị liên quan đến Copilot.",
    tags: ["Audit Logs","Organization Settings","Business"]
  },
  {
    id: "q82",
    questionNumber: 82,
    text: "Which of the following is correct about GitHub Copilot Knowledge Bases?",
    options: [
      { key: "A", text: "All file types are indexed" },
      { key: "B", text: "Indexing is static" },
      { key: "C", text: "All repos are indexed" },
      { key: "D", text: "It is an Enterprise feature" },
    ],
    correctAnswers: ["D"],
    category: "Plans & Features",
    explanation: "Knowledge Bases là một tính năng dành riêng cho GitHub Copilot Enterprise. Không phải mọi repo hay mọi loại file đều được lập chỉ mục, và việc lập chỉ mục cũng không phải tĩnh mà được cập nhật, nên đáp án đúng là nó là tính năng Enterprise.",
    tags: ["Knowledge Base","Enterprise","Indexing"]
  },
  {
    id: "q83",
    questionNumber: 83,
    text: "A company is currently storing code in BitBucket and would like to use GitHub Copilot. Which GitHub Copilot plan will be most cost effective to allow them to manage users with their Identity Provider (e.g. Okta)?",
    options: [
      { key: "A", text: "GitHub Copilot Individual" },
      { key: "B", text: "GitHub Copilot Enterprise" },
      { key: "C", text: "GitHub Copilot Teams" },
      { key: "D", text: "GitHub Copilot Business for non-GHE customers" },
    ],
    correctAnswers: ["D"],
    category: "Plans & Features",
    explanation: "Khi code được lưu ở BitBucket (không dùng GitHub Enterprise) nhưng cần quản lý người dùng qua Identity Provider như Okta, gói GitHub Copilot Business for non-GHE customers là lựa chọn tiết kiệm và phù hợp nhất. Gói này hỗ trợ quản lý seat và SSO mà không yêu cầu lưu code trên GitHub.",
    tags: ["Copilot Business","Identity Provider","Use Case"]
  },
  {
    id: "q84",
    questionNumber: 84,
    text: "What is a likely effect of GitHub Copilot being trained on commonly used code patterns?",
    options: [
      { key: "A", text: "Suggest completely novel projects, while reducing time on a project." },
      { key: "B", text: "Suggest innovative coding solutions that are not yet popular." },
      { key: "C", text: "Suggest homogeneous solutions if provided a diverse data set." },
      { key: "D", text: "Suggest code snippets that reflect the most common practices in the training data." },
    ],
    correctAnswers: ["D"],
    category: "How Copilot Works",
    explanation: "Vì GitHub Copilot được huấn luyện trên các mẫu code phổ biến, nó có xu hướng gợi ý những đoạn code phản ánh các thực hành thông dụng nhất trong dữ liệu huấn luyện. Do đó các gợi ý thường thiên về giải pháp quen thuộc, đã được sử dụng rộng rãi.",
    tags: ["Training Data","Suggestions","Model Behavior"]
  },
  {
    id: "q85",
    questionNumber: 85,
    text: "Identify the steps involved in the life cycle of a GitHub Copilot code suggestion? Each correct answer presents part of the solution. (Choose two.)",
    options: [
      { key: "A", text: "Processing telemetry data" },
      { key: "B", text: "Generate suggestions" },
      { key: "C", text: "Retraining the model" },
      { key: "D", text: "Storing user data" },
      { key: "E", text: "Capturing the user’s context" },
    ],
    correctAnswers: ["B","E"],
    category: "How Copilot Works",
    explanation: "Vòng đời của một gợi ý code gồm việc nắm bắt ngữ cảnh của người dùng (capturing the user's context) như code xung quanh và file đang mở, sau đó tạo ra gợi ý (generate suggestions). Các bước như retraining model hay lưu trữ dữ liệu người dùng không phải là một phần của vòng đời gợi ý này.",
    tags: ["Suggestion Lifecycle","Context","Code Completion"]
  },
  {
    id: "q86",
    questionNumber: 86,
    text: "What are the additional checks that need to pass before the GitHub Copilot responses are submitted to the user? Each correct answer presents part of the solution. (Choose two.)",
    options: [
      { key: "A", text: "Code quality" },
      { key: "B", text: "Compatibility with user-specific settings" },
      { key: "C", text: "Performance benchmarking" },
      { key: "D", text: "Suggestions matching public code (optional based on settings)" },
    ],
    correctAnswers: ["B","D"],
    category: "Responsible AI",
    explanation: "Trước khi trả kết quả cho người dùng, Copilot thực hiện thêm các kiểm tra gồm đảm bảo tương thích với cấu hình riêng của người dùng (user-specific settings) và lọc các gợi ý trùng với public code (tùy theo cài đặt duplication detection). Đây là các bước kiểm soát ở tầng output chứ không phải đánh giá chất lượng mã hay benchmark hiệu năng.",
    tags: ["Filtering","Public Code","Settings"]
  },
  {
    id: "q87",
    questionNumber: 87,
    text: "What are the potential limitations of GitHub Copilot Chat? Each correct answer presents part of the solution. (Choose two.)",
    options: [
      { key: "A", text: "Ability to handle complex code structures" },
      { key: "B", text: "Limited training data" },
      { key: "C", text: "Extensive support for all programming languages" },
      { key: "D", text: "No biases in code suggestions" },
    ],
    correctAnswers: ["A","B"],
    category: "How Copilot Works",
    explanation: "GitHub Copilot Chat có những hạn chế cố hữu như khả năng xử lý các cấu trúc mã phức tạp và bị giới hạn bởi dữ liệu huấn luyện (limited training data). Vì mô hình chỉ học từ dữ liệu đã có nên nó không thể hỗ trợ hoàn hảo mọi ngôn ngữ hay đảm bảo hoàn toàn không có thiên kiến.",
    tags: ["Limitations","Training Data","Complexity"]
  },
  {
    id: "q88",
    questionNumber: 88,
    text: "Which of the following statements correctly describes how GitHub Copilot Individual uses prompt data? Each correct answer presents part of the solution. (Choose two.)",
    options: [
      { key: "A", text: "Real-time user input helps generate context-aware code suggestions." },
      { key: "B", text: "Prompt data is used internally by GitHub for improving the search engine." },
      { key: "C", text: "Prompt data is used to train machine learning models for better code suggestions." },
      { key: "D", text: "Prompt data is stored unencrypted for faster processing." },
    ],
    correctAnswers: ["A","C"],
    category: "Data Privacy & Content Exclusions",
    explanation: "Với GitHub Copilot Individual, dữ liệu prompt được dùng để tạo gợi ý mã theo ngữ cảnh thời gian thực từ đầu vào của người dùng, và cũng có thể được dùng để huấn luyện các mô hình machine learning nhằm cải thiện chất lượng gợi ý. Dữ liệu prompt không phục vụ mục đích cải thiện search engine hay lưu trữ không mã hóa.",
    tags: ["Prompt Data","Individual","Training"]
  },
  {
    id: "q89",
    questionNumber: 89,
    text: "Which of the following does GitHub Copilot’s LLM derive context from when producing a response?",
    options: [
      { key: "A", text: "Version control system integrated with the IDE" },
      { key: "B", text: "Syntax highlighting scheme of the code in the IDE" },
      { key: "C", text: "Frequency of commits to the repository" },
      { key: "D", text: "Neighboring or related files within a project" },
    ],
    correctAnswers: ["D"],
    category: "How Copilot Works",
    explanation: "LLM của GitHub Copilot lấy ngữ cảnh từ các file lân cận hoặc liên quan trong project (neighboring/related files) để hiểu rõ hơn ý định của developer. Các yếu tố như hệ thống quản lý phiên bản, bảng màu syntax highlighting hay tần suất commit không được dùng làm ngữ cảnh sinh phản hồi.",
    tags: ["Context","Related Files","LLM"]
  },
  {
    id: "q90",
    questionNumber: 90,
    text: "What is a benefit of using custom models in GitHub Copilot?",
    options: [
      { key: "A", text: "Responses use the organization’s LLM engine" },
      { key: "B", text: "Responses are faster to produce and appear sooner" },
      { key: "C", text: "Responses are guaranteed to be correct" },
      { key: "D", text: "Responses use practices and patterns in your repositories" },
    ],
    correctAnswers: ["D"],
    category: "Plans & Features",
    explanation: "Lợi ích của custom models trong GitHub Copilot là phản hồi sẽ phản ánh các practice và pattern có trong chính các repository của tổ chức bạn. Việc fine-tune trên codebase nội bộ giúp gợi ý nhất quán với phong cách và quy ước riêng, chứ không nhằm tăng tốc độ hay đảm bảo mã luôn đúng.",
    tags: ["Custom Models","Personalization","Enterprise"]
  },
  {
    id: "q91",
    questionNumber: 91,
    text: "How does GitHub Copilot identify matching code and ensure that public code is appropriately handled or blocked? Each correct answer presents part of the solution. (Choose two.)",
    options: [
      { key: "A", text: "Implementing safeguards to detect and avoid suggesting verbatim snippets from public code" },
      { key: "B", text: "Filtering out suggestions that match code from public repositories" },
      { key: "C", text: "Using machine learning models trained only on private repositories" },
      { key: "D", text: "Reviewing and storing user-specific private repository data for future suggestions" },
    ],
    correctAnswers: ["A","B"],
    category: "Responsible AI",
    explanation: "Copilot xử lý public code bằng cách triển khai các safeguard để phát hiện và tránh gợi ý nguyên văn (verbatim) các đoạn mã công khai, đồng thời lọc bỏ các gợi ý trùng khớp với mã từ public repository. Cơ chế này hoạt động qua duplication detection filter chứ không dựa vào việc chỉ huấn luyện trên private repo hay lưu trữ dữ liệu riêng tư của người dùng.",
    tags: ["Public Code","Filtering","Safeguards"]
  },
  {
    id: "q92",
    questionNumber: 92,
    text: "How does GitHub Copilot utilize chat history to enhance its code completion capabilities?",
    options: [
      { key: "A", text: "By sharing chat history with third-party services to improve integration and functionality." },
      { key: "B", text: "By analyzing past chat interactions to identify common programming patterns and errors." },
      { key: "C", text: "By logging chat history to monitor user activity and ensure compliance with coding standards." },
      { key: "D", text: "By using chat history to offer personalized code snippets based on previous prompts." },
    ],
    correctAnswers: ["D"],
    category: "How Copilot Works",
    explanation: "GitHub Copilot tận dụng lịch sử chat để cung cấp các đoạn mã được cá nhân hóa dựa trên những prompt trước đó của người dùng. Nhờ ghi nhớ ngữ cảnh cuộc hội thoại, nó đưa ra gợi ý phù hợp hơn với nhu cầu cụ thể thay vì để giám sát hoạt động hay chia sẻ với bên thứ ba.",
    tags: ["Chat History","Personalization","Context"]
  },
  {
    id: "q93",
    questionNumber: 93,
    text: "What is the main purpose of the duplication detection filter in GitHub Copilot?",
    options: [
      { key: "A", text: "To compare user-generated code against a private repository for potential matches." },
      { key: "B", text: "To encourage the user to follow coding best practices preventing code duplication." },
      { key: "C", text: "To allow administrators to control which suggestions are visible to developers based on custom criteria." },
      { key: "D", text: "To detect and block suggestions that match public code snippets on GitHub if they contain about 150 characters." },
    ],
    correctAnswers: ["D"],
    category: "Responsible AI",
    explanation: "Mục đích chính của duplication detection filter là phát hiện và chặn các gợi ý trùng khớp với public code snippet trên GitHub khi đoạn mã dài khoảng 150 ký tự. Bộ lọc này giúp tránh tái tạo nguyên văn mã công khai chứ không phải để so khớp với private repo hay áp đặt best practice.",
    tags: ["Duplication Filter","Public Code","Matching"]
  },
  {
    id: "q94",
    questionNumber: 94,
    text: "Where is the proxy service hosted?",
    options: [
      { key: "A", text: "Amazon Web Service" },
      { key: "B", text: "Self hosted" },
      { key: "C", text: "Microsoft Azure" },
      { key: "D", text: "Google Cloud Platform" },
    ],
    correctAnswers: ["C"],
    category: "How Copilot Works",
    explanation: "Proxy service của GitHub Copilot được host trên Microsoft Azure. Dịch vụ proxy này nằm trong hạ tầng của GitHub/Microsoft và xử lý các yêu cầu giữa client và mô hình, chứ không tự host hay đặt trên AWS/GCP.",
    tags: ["Proxy","Azure","Architecture"]
  },
  {
    id: "q95",
    questionNumber: 95,
    text: "How can GitHub Copilot assist developers during the requirements analysis phase of the Software Development Life Cycle (SDLC)?",
    options: [
      { key: "A", text: "By managing stakeholder communication and meetings." },
      { key: "B", text: "By automatically generating detailed requirements documents." },
      { key: "C", text: "By providing templates and code snippets that help in documenting requirements." },
      { key: "D", text: "By identifying and fixing potential requirement conflicts when using /help." },
    ],
    correctAnswers: ["C"],
    category: "Developer Use Cases",
    explanation: "Trong giai đoạn phân tích yêu cầu của SDLC, Copilot hỗ trợ bằng cách cung cấp các template và code snippet giúp tài liệu hóa yêu cầu. Nó là công cụ trợ giúp developer chứ không tự sinh tài liệu yêu cầu hoàn chỉnh hay quản lý giao tiếp với stakeholder.",
    tags: ["SDLC","Requirements","Documentation"]
  },
  {
    id: "q96",
    questionNumber: 96,
    text: "How can you improve the context used by GitHub Copilot? Each correct answer presents part of the solution. (Choose two.)",
    options: [
      { key: "A", text: "By adding variables (#selection) to your prompt" },
      { key: "B", text: "By adding the full file paths to your prompt of important files" },
      { key: "C", text: "By adding the important files to your .gitconfig" },
      { key: "D", text: "By opening the relevant tabs in your IDE" },
    ],
    correctAnswers: ["A","B"],
    category: "Prompt Engineering",
    explanation: "Có thể cải thiện ngữ cảnh cho Copilot bằng cách thêm các biến như #selection vào prompt và cung cấp đường dẫn đầy đủ (full file paths) tới những file quan trọng trong prompt. Những cách này giúp neo cuộc hội thoại vào đúng phần mã liên quan, trong khi .gitconfig không phải là cơ chế cấp ngữ cảnh.",
    tags: ["Context","Variables","File Paths"]
  },
  {
    id: "q97",
    questionNumber: 97,
    text: "What is zero-shot prompting?",
    options: [
      { key: "A", text: "Giving GitHub Copilot examples of the algorithm and outcome you want to use" },
      { key: "B", text: "Only giving GitHub Copilot a question as a prompt and no examples" },
      { key: "C", text: "Giving GitHub Copilot examples of the problem you want to solve" },
      { key: "D", text: "Giving as little context to GitHub Copilot as possible" },
      { key: "E", text: "Telling GitHub Copilot it needs to show only the correct answer" },
    ],
    correctAnswers: ["B"],
    category: "Prompt Engineering",
    explanation: "Zero-shot prompting nghĩa là chỉ đưa cho GitHub Copilot một câu hỏi/yêu cầu mà không kèm theo bất kỳ ví dụ nào. Mô hình phải dựa hoàn toàn vào kiến thức sẵn có để trả lời, khác với few-shot vốn cung cấp ví dụ minh họa.",
    tags: ["Zero-shot","Prompting","Examples"]
  },
  {
    id: "q98",
    questionNumber: 98,
    text: "What are the different ways to give context to GitHub Copilot to get more precise responses? Each correct answer presents part of the solution. (Choose two.)",
    options: [
      { key: "A", text: "Engage with chat participants such as @workspace to incorporate collaborative context into the responses." },
      { key: "B", text: "Access developer’s previous projects and code repositories to understand their coding style without explicit permission." },
      { key: "C", text: "Utilize to interpret developer’s thoughts and intentions without any code or comments." },
      { key: "D", text: "Utilize chat variables like #file and #editors to anchor the conversation within the specific context of the files or editors in use." },
    ],
    correctAnswers: ["A","D"],
    category: "Prompt Engineering",
    explanation: "Để có phản hồi chính xác hơn, người dùng có thể tương tác với các chat participant như @workspace để đưa ngữ cảnh rộng của dự án vào, và dùng các chat variable như #file và #editors để neo cuộc hội thoại vào file hoặc editor cụ thể đang dùng. Đây là các cơ chế cấp ngữ cảnh hợp lệ, không phải truy cập dữ liệu riêng tư khi chưa được phép.",
    tags: ["Chat Participants","Chat Variables","Context"]
  },
  {
    id: "q99",
    questionNumber: 99,
    text: "Select a strategy to increase the performance of GitHub Copilot Chat.",
    options: [
      { key: "A", text: "Use a single GitHub Copilot Chat query to find resolutions for the collection of technical requirements" },
      { key: "B", text: "Optimize the usage of memory-intensive operations within generated code" },
      { key: "C", text: "Apply prompt engineering techniques to be more specific" },
      { key: "D", text: "Limit the number of concurrent users accessing GitHub Copilot Chat" },
    ],
    correctAnswers: ["C"],
    category: "Prompt Engineering",
    explanation: "Để tăng hiệu quả của GitHub Copilot Chat, nên áp dụng các kỹ thuật prompt engineering nhằm diễn đạt yêu cầu cụ thể và rõ ràng hơn. Prompt càng cụ thể thì gợi ý càng sát nhu cầu, thay vì gộp nhiều yêu cầu vào một truy vấn hay giới hạn số người dùng.",
    tags: ["Prompting","Specificity","Performance"]
  },
  {
    id: "q100",
    questionNumber: 100,
    text: "What is few-shot prompting?",
    options: [
      { key: "A", text: "Telling GitHub Copilot to try multiple times to answer the prompt" },
      { key: "B", text: "Telling GitHub Copilot to iterate several times on the answer before returning it to you" },
      { key: "C", text: "Telling GitHub Copilot from which sources it should base the response on" },
      { key: "D", text: "Telling GitHub Copilot about the mechanism you want it to use and how to incorporate that into the response" },
    ],
    correctAnswers: ["D"],
    category: "Prompt Engineering",
    explanation: "Few-shot prompting là việc nói cho GitHub Copilot biết cơ chế/cách tiếp cận bạn muốn nó sử dụng và cách kết hợp điều đó vào phản hồi, thông qua việc cung cấp ví dụ minh họa. Bằng cách đưa ra một vài mẫu, bạn định hướng mô hình tạo kết quả theo đúng khuôn mẫu mong muốn.",
    tags: ["Few-shot","Prompting","Examples"]
  },
  {
    id: "q101",
    questionNumber: 101,
    text: "What role does chat history play in GitHub Copilot’s code suggestions?",
    options: [
      { key: "A", text: "Chat history is irrelevant to GitHub Copilot and does not affect its functionality." },
      { key: "B", text: "Chat history provides context to GitHub Copilot, improving the relevance and accuracy of its code suggestions." },
      { key: "C", text: "Chat history is stored and shared with other users to enhance collaboration." },
      { key: "D", text: "Chat history is used to train the GitHub Copilot model in real-time." },
    ],
    correctAnswers: ["B"],
    category: "How Copilot Works",
    explanation: "Lịch sử chat cung cấp ngữ cảnh cho GitHub Copilot, qua đó cải thiện độ liên quan và chính xác của các gợi ý mã. Khi nắm được nội dung trao đổi trước đó, Copilot hiểu rõ hơn ý định và đưa ra phản hồi phù hợp với mạch hội thoại.",
    tags: ["Chat History","Context","Accuracy"]
  },
  {
    id: "q102",
    questionNumber: 102,
    text: "What are two techniques that can be used to improve prompts to GitHub Copilot? (Choose two.)",
    options: [
      { key: "A", text: "Provide specific success criteria" },
      { key: "B", text: "Provide links to supporting documentation" },
      { key: "C", text: "Provide all information about the utilized files" },
      { key: "D", text: "Provide insight on where to get the content from to get a response." },
    ],
    correctAnswers: ["A","C"],
    category: "Prompt Engineering",
    explanation: "Hai kỹ thuật cải thiện prompt là cung cấp tiêu chí thành công cụ thể (specific success criteria) và cung cấp đầy đủ thông tin về các file được sử dụng. Việc nêu rõ mục tiêu và bối cảnh file giúp Copilot tạo ra gợi ý sát với kết quả mong đợi hơn.",
    tags: ["Success Criteria","Context","Prompting"]
  },
  {
    id: "q103",
    questionNumber: 103,
    text: "Which of the following describes role prompting?",
    options: [
      { key: "A", text: "Describing in your prompt what your role is to get a better suggestion" },
      { key: "B", text: "Tell GitHub Copilot in what tone of voice it should respond" },
      { key: "C", text: "Prompt GitHub Copilot to explain what was the role of a suggestion" },
      { key: "D", text: "Giving GitHub Copilot multiple examples of the form of the data you want to use" },
    ],
    correctAnswers: ["A"],
    category: "Prompt Engineering",
    explanation: "Role prompting là việc mô tả trong prompt vai trò của bạn (ví dụ bạn là ai, đang làm việc gì) để nhận được gợi ý phù hợp hơn. Khi Copilot biết được góc nhìn và vai trò, nó điều chỉnh phản hồi cho khớp với bối cảnh và nhu cầu của vai trò đó.",
    tags: ["Role Prompting","Context","Prompting"]
  },
  {
    id: "q104",
    questionNumber: 104,
    text: "In what ways can GitHub Copilot support a developer during the code refactoring process? Each correct answer presents part of the solution. (Choose two.)",
    options: [
      { key: "A", text: "By providing suggestions for improving code readability and maintainability based on best practices." },
      { key: "B", text: "By offering code transformation examples that enhance performance and reduce complexity." },
      { key: "C", text: "By independently ensuring compliance with regulatory standards across industries." },
      { key: "D", text: "By autonomously refactoring entire codebases to the latest programming language." },
    ],
    correctAnswers: ["A","B"],
    category: "Developer Use Cases",
    explanation: "Trong quá trình refactoring, Copilot hỗ trợ bằng cách đưa ra gợi ý cải thiện độ dễ đọc và khả năng bảo trì dựa trên best practice, đồng thời cung cấp các ví dụ chuyển đổi mã giúp tăng hiệu năng và giảm độ phức tạp. Nó đóng vai trò trợ lý gợi ý chứ không tự động refactor toàn bộ codebase hay tự đảm bảo tuân thủ quy định pháp lý.",
    tags: ["Refactoring","Best Practices","Maintainability"]
  },
  {
    id: "q105",
    questionNumber: 105,
    text: "What is one of the recommended practices when using GitHub Copilot Chat to enhance code quality?",
    options: [
      { key: "A", text: "Rely solely on Copilot’s suggestions without reviewing them." },
      { key: "B", text: "Regularly review and refactor the code suggested by Copilot." },
      { key: "C", text: "Disable Copilot’s inline suggestions." },
      { key: "D", text: "Avoid using Copilot for complex tasks." },
    ],
    correctAnswers: ["B"],
    category: "Developer Use Cases",
    explanation: "Một thực hành được khuyến nghị để nâng cao chất lượng mã là thường xuyên review và refactor lại các đoạn mã do Copilot gợi ý. Developer luôn cần kiểm tra kết quả thay vì tin tưởng hoàn toàn, vì Copilot là công cụ hỗ trợ chứ không thay thế đánh giá của con người.",
    tags: ["Code Review","Quality","Best Practices"]
  },
  {
    id: "q106",
    questionNumber: 106,
    text: "In what ways can GitHub Copilot contribute to the design phase of the Software Development Life Cycle (SDLC)?",
    options: [
      { key: "A", text: "GitHub Copilot can generate user interface (UI) prototypes without prompting." },
      { key: "B", text: "GitHub Copilot can suggest design patterns and best practices relevant to the project." },
      { key: "C", text: "GitHub Copilot can independently create a complete software design." },
      { key: "D", text: "GitHub Copilot can manage design team collaboration and version control." },
    ],
    correctAnswers: ["B"],
    category: "Developer Use Cases",
    explanation: "Trong giai đoạn thiết kế của SDLC, GitHub Copilot có thể gợi ý các design pattern và best practice phù hợp với dự án. Nó hỗ trợ developer đưa ra lựa chọn thiết kế tốt hơn chứ không tự tạo ra thiết kế phần mềm hoàn chỉnh hay quản lý cộng tác nhóm.",
    tags: ["SDLC","Design Patterns","Best Practices"]
  },
  {
    id: "q107",
    questionNumber: 107,
    text: "Are there any limitations to consider when using GitHub Copilot for code refactoring?",
    options: [
      { key: "A", text: "GitHub Copilot may not always produce optimized or best-practice code for refactoring." },
      { key: "B", text: "GitHub Copilot always produces bug-free code during refactoring." },
      { key: "C", text: "GitHub Copilot understands the context of your entire project and refactors code accordingly." },
      { key: "D", text: "GitHub Copilot can only be used with a limited set of programming languages." },
    ],
    correctAnswers: ["A"],
    category: "Developer Use Cases",
    explanation: "GitHub Copilot dựa trên các mẫu (patterns) từ dữ liệu huấn luyện nên các gợi ý refactoring không phải lúc nào cũng tối ưu hay tuân theo best-practice. Vì vậy developer vẫn cần xem xét, đánh giá và điều chỉnh code mà Copilot tạo ra để đảm bảo chất lượng.",
    tags: ["Refactoring","Limitations","Code Quality"]
  },
  {
    id: "q108",
    questionNumber: 108,
    text: "How does GitHub Copilot assist developers in minimizing context switching?",
    options: [
      { key: "A", text: "GitHub Copilot can predict and prevent bugs before they occur." },
      { key: "B", text: "GitHub Copilot allows developers to stay in their IDE." },
      { key: "C", text: "GitHub Copilot can completely replace the need for human collaboration." },
      { key: "D", text: "GitHub Copilot can automatically handle project management tasks." },
    ],
    correctAnswers: ["B"],
    category: "Developer Use Cases",
    explanation: "GitHub Copilot giúp giảm context switching bằng cách cho phép developer ở lại trong IDE thay vì phải chuyển sang trình duyệt hay tài liệu khác để tìm câu trả lời. Nhờ tích hợp gợi ý và chat ngay trong môi trường lập trình, developer duy trì được luồng làm việc (flow) liên tục.",
    tags: ["Productivity","IDE","Context Switching"]
  },
  {
    id: "q109",
    questionNumber: 109,
    text: "What are the potential limitations of GitHub Copilot in maintaining existing codebases?",
    options: [
      { key: "A", text: "GitHub Copilot’s suggestions are always aware of the entire codebase." },
      { key: "B", text: "GitHub Copilot can refactor and optimize the entire codebase up to 10,000 lines of code." },
      { key: "C", text: "GitHub Copilot can independently manage and resolve all merge conflicts in version control." },
      { key: "D", text: "GitHub Copilot might not fully understand the context and dependencies within a large codebase." },
    ],
    correctAnswers: ["D"],
    category: "How Copilot Works",
    explanation: "Copilot bị giới hạn về phạm vi ngữ cảnh (context window) nên có thể không hiểu đầy đủ ngữ cảnh và các phụ thuộc (dependencies) trong một codebase lớn. Điều này khiến gợi ý đôi khi thiếu chính xác khi áp dụng cho dự án phức tạp, nhiều tệp liên kết với nhau.",
    tags: ["Context","Large Codebase","Limitations"]
  },
  {
    id: "q110",
    questionNumber: 110,
    text: "How can GitHub Copilot aid developers in writing documentation for their code?",
    options: [
      { key: "A", text: "GitHub Copilot can suggest summaries or descriptions based on the code’s functionality." },
      { key: "B", text: "GitHub Copilot can only generate content in markdown format." },
      { key: "C", text: "GitHub Copilot can automatically generate complete and detailed documentation." },
      { key: "D", text: "GitHub Copilot cannot assist in writing documentation or comments." },
    ],
    correctAnswers: ["A"],
    category: "Developer Use Cases",
    explanation: "GitHub Copilot có thể hỗ trợ viết tài liệu bằng cách gợi ý tóm tắt hoặc mô tả dựa trên chức năng (functionality) của code. Tuy nhiên đây chỉ là gợi ý hỗ trợ, không phải tài liệu hoàn chỉnh và chi tiết, nên developer vẫn cần bổ sung và kiểm tra lại.",
    tags: ["Documentation","Code Comments","Productivity"]
  },
  {
    id: "q111",
    questionNumber: 111,
    text: "How does GitHub Copilot assist developers in reducing the amount of manual boilerplate code they write?",
    options: [
      { key: "A", text: "By refactoring the entire codebase to eliminate boilerplate code without developer input." },
      { key: "B", text: "By suggesting code snippets that can be reused across different parts of the project." },
      { key: "C", text: "By engaging in real-time collaboration with multiple developers to write boilerplate code." },
      { key: "D", text: "By predicting future coding requirements and pre-emptively generating boilerplate code" },
    ],
    correctAnswers: ["B"],
    category: "Developer Use Cases",
    explanation: "Copilot giúp giảm boilerplate code thủ công bằng cách gợi ý các đoạn code (snippets) có thể tái sử dụng ở nhiều phần khác nhau của dự án. Nhờ nhận diện mẫu lặp lại, nó tự động đề xuất code mẫu giúp developer không phải gõ lại thủ công.",
    tags: ["Boilerplate","Code Reuse","Productivity"]
  },
  {
    id: "q112",
    questionNumber: 112,
    text: "Which scenarios can GitHub Copilot Chat be used to increase productivity? Each correct answer presents part of the solution. (Choose two.)",
    options: [
      { key: "A", text: "Create a documentation file for the newly created code base." },
      { key: "B", text: "Fast tracking of release management activities to move code to production main branch." },
      { key: "C", text: "A project plan for the team needs to be generated using a project management software." },
      { key: "D", text: "A developer is added to a new project and would like to understand the current software code." },
    ],
    correctAnswers: ["A","D"],
    category: "Developer Use Cases",
    explanation: "Copilot Chat tăng năng suất khi tạo tệp tài liệu (documentation) cho codebase mới và khi giúp developer mới hiểu code hiện có thông qua giải thích. Đây là các tác vụ liên quan đến hiểu và mô tả code, đúng thế mạnh của Copilot Chat, khác với quản lý dự án hay release management vốn không thuộc phạm vi của nó.",
    tags: ["Documentation","Onboarding","Code Understanding"]
  },
  {
    id: "q113",
    questionNumber: 113,
    text: "How does GitHub Copilot Chat help to fix security issues in your codebase?",
    options: [
      { key: "A", text: "By automatically refactoring the entire codebase to remove vulnerabilities." },
      { key: "B", text: "By annotating the given suggestions with known vulnerability patterns." },
      { key: "C", text: "By enforcing strict coding standards that prevent the introduction of vulnerabilities." },
      { key: "D", text: "By providing detailed reports on the security vulnerabilities present in the codebase." },
    ],
    correctAnswers: ["B"],
    category: "Developer Use Cases",
    explanation: "GitHub Copilot Chat giúp xử lý vấn đề bảo mật bằng cách chú thích (annotate) các gợi ý với những mẫu lỗ hổng đã biết (known vulnerability patterns). Cách này giúp cảnh báo developer về rủi ro thay vì tự động sửa toàn bộ codebase, vì việc đánh giá và khắc phục cuối cùng vẫn cần con người.",
    tags: ["Security","Vulnerabilities","Code Suggestions"]
  },
  {
    id: "q114",
    questionNumber: 114,
    text: "Which of the following scenarios best describes the intended use of GitHub Copilot Chat as a tool?",
    options: [
      { key: "A", text: "A solution for software development, requiring no additional input or oversight." },
      { key: "B", text: "A productivity tool that provides suggestions, but relying on human judgement." },
      { key: "C", text: "A tool solely designed for debugging and error correction." },
      { key: "D", text: "A complete replacement for developers generating code." },
    ],
    correctAnswers: ["B"],
    category: "Responsible AI",
    explanation: "Mục đích sử dụng đúng của Copilot Chat là một công cụ năng suất (productivity tool) đưa ra gợi ý nhưng vẫn dựa trên phán đoán của con người (human judgement). Nó không thay thế developer mà hỗ trợ họ, nên người dùng phải xem xét và quyết định việc chấp nhận gợi ý.",
    tags: ["Human Oversight","Productivity","Intended Use"]
  },
  {
    id: "q115",
    questionNumber: 115,
    text: "Which of the following prompts can be used to guide GitHub Copilot Chat in refactoring code for quality improvements? Each correct answer presents part of the solution. (Choose two.)",
    options: [
      { key: "A", text: "“Suggest ways to enhance the maintainability of this code segment.”" },
      { key: "B", text: "“Show me how to improve the readability of this function.”" },
      { key: "C", text: "“Refactor my application to meet the latest coding standards.”" },
      { key: "D", text: "“Predict future coding trends and update my codebase accordingly.”" },
    ],
    correctAnswers: ["A","C"],
    category: "Prompt Engineering",
    explanation: "Các prompt tốt để refactor cải thiện chất lượng nên tập trung vào mục tiêu cụ thể như nâng cao maintainability của đoạn code hoặc refactor theo coding standards mới nhất. Đây là những yêu cầu rõ ràng, khả thi mà Copilot có thể thực hiện, khác với việc dự đoán xu hướng coding tương lai vốn nằm ngoài khả năng.",
    tags: ["Refactoring","Prompting","Code Quality"]
  },
  {
    id: "q116",
    questionNumber: 116,
    text: "In what way can GitHub Copilot and GitHub Copilot Chat aid developers in modernizing applications?",
    options: [
      { key: "A", text: "GitHub Copilot can suggest modern programming patterns based on your code." },
      { key: "B", text: "GitHub Copilot can create and deploy full-stack applications based on a single query." },
      { key: "C", text: "GitHub Copilot can automatically refactor applications to align with upcoming standards." },
      { key: "D", text: "GitHub Copilot can directly convert legacy applications into cloud-native architectures." },
    ],
    correctAnswers: ["C"],
    category: "Developer Use Cases",
    explanation: "Copilot và Copilot Chat hỗ trợ hiện đại hóa ứng dụng bằng cách refactor code để phù hợp với các tiêu chuẩn (standards) mong muốn. Nó đề xuất và áp dụng các thay đổi giúp code bắt kịp chuẩn mực mới, hỗ trợ quá trình modernization của ứng dụng.",
    tags: ["Modernization","Refactoring","Standards"]
  },
  {
    id: "q117",
    questionNumber: 117,
    text: "How can GitHub Copilot assist with code refactoring tasks?",
    options: [
      { key: "A", text: "GitHub Copilot can remove unnecessary files from the project directory." },
      { key: "B", text: "GitHub Copilot can suggest refactoring improvements for better code quality." },
      { key: "C", text: "GitHub Copilot can fix syntax errors without user input." },
      { key: "D", text: "GitHub Copilot can automatically rewrite code to follow best practices." },
    ],
    correctAnswers: ["D"],
    category: "Developer Use Cases",
    explanation: "GitHub Copilot có thể hỗ trợ refactoring bằng cách tự động viết lại code để tuân theo best practices. Dựa trên ngữ cảnh code hiện tại, nó đề xuất phiên bản code cải thiện hơn, nhưng developer vẫn nên kiểm tra lại kết quả.",
    tags: ["Refactoring","Best Practices","Code Quality"]
  },
  {
    id: "q118",
    questionNumber: 118,
    text: "How can GitHub Copilot facilitate a smoother learning experience when diving into a new programming language?",
    options: [
      { key: "A", text: "GitHub Copilot’s /understand command will help GitHub Copilot understand code written in a targeted programming language." },
      { key: "B", text: "GitHub Copilot Chat can provide guidance and support for common coding tasks and challenges in the targeted programming language." },
      { key: "C", text: "GitHub Copilot can convert comments into code to grasp the syntax and nuances of a new programming language." },
      { key: "D", text: "GitHub Copilot can provide contextualized code suggestions and answer sources from an organization’s documentation." },
    ],
    correctAnswers: ["B"],
    category: "Developer Use Cases",
    explanation: "Khi học một ngôn ngữ lập trình mới, Copilot Chat có thể cung cấp hướng dẫn và hỗ trợ cho các tác vụ và thách thức coding phổ biến trong ngôn ngữ đó. Nhờ khả năng giải thích và trả lời theo ngữ cảnh, nó giúp developer làm quen nhanh hơn với cú pháp và cách dùng của ngôn ngữ mới.",
    tags: ["Learning","Copilot Chat","Onboarding"]
  },
  {
    id: "q119",
    questionNumber: 119,
    text: "What method can a developer use to generate sample data with GitHub Copilot? Each correct answer presents part of the solution. (Choose two.)",
    options: [
      { key: "A", text: "Utilize GitHub Copilot’s capability to directly access and used databases to create sample data." },
      { key: "B", text: "Leveraging GitHub Copilot’s ability to independently initiate and manage data storage services." },
      { key: "C", text: "Leveraging GitHub Copilot’s suggestions to create a data based on API documentation in the repository." },
      { key: "D", text: "Utilizing GitHub Copilot’s ability to create fictions information from patterns in training data." },
    ],
    correctAnswers: ["C","D"],
    category: "Developer Use Cases",
    explanation: "Developer có thể tạo sample data bằng cách dựa trên gợi ý của Copilot từ tài liệu API (API documentation) trong repository, hoặc tận dụng khả năng tạo thông tin hư cấu từ các mẫu trong dữ liệu huấn luyện. Cả hai cách đều dùng năng lực sinh nội dung theo mẫu của Copilot, không phải truy cập trực tiếp database hay quản lý dịch vụ lưu trữ.",
    tags: ["Sample Data","API Documentation","Code Generation"]
  },
  {
    id: "q120",
    questionNumber: 120,
    text: "How can you use GitHub Copilot to get inline suggestions for refactoring your code? (Choose two.)",
    options: [
      { key: "A", text: "By using the “/fix” command in GitHub Copilot in-line chat." },
      { key: "B", text: "By adding comments to your code and triggering a suggestion." },
      { key: "C", text: "By highlighting the code, you want to fix, right-clicking, and selecting “Refactor using GitHub Copilot.”" },
      { key: "D", text: "By highlighting the code you want to fix, right-clicking, and selecting “Fix using GitHub Copilot.”" },
      { key: "E", text: "By running the gh copilot fix command." },
    ],
    correctAnswers: ["A","C"],
    category: "Tooling & Integrations",
    explanation: "Để nhận gợi ý inline cho refactoring, developer có thể dùng lệnh `/fix` trong inline chat của Copilot, hoặc bôi đen code rồi nhấp chuột phải và chọn \"Refactor using GitHub Copilot\". Đây là các thao tác được tích hợp sẵn trong IDE để kích hoạt gợi ý chỉnh sửa code.",
    tags: ["Slash Commands","Refactoring","IDE"]
  },
  {
    id: "q121",
    questionNumber: 121,
    text: "What caution should developers exercise when using GitHub Copilot for assistance with mathematical computations?",
    options: [
      { key: "A", text: "GitHub Copilot’s capability to optimize complex mathematical algorithms beyond manual coding." },
      { key: "B", text: "GitHub Copilot’s ability to execute and verify mathematical results in real-time." },
      { key: "C", text: "GitHub Copilot’s automatic update of outdated mathematical formulas to modern standards." },
      { key: "D", text: "GitHub Copilot’s reliance on pattern-based responses without verifying computation accuracy." },
    ],
    correctAnswers: ["D"],
    category: "How Copilot Works",
    explanation: "Khi dùng Copilot cho tính toán toán học, developer cần thận trọng vì Copilot dựa trên phản hồi theo mẫu (pattern-based) mà không thực sự thực thi hay kiểm chứng độ chính xác của phép tính. Do đó kết quả tính toán có thể sai và cần được con người xác minh độc lập.",
    tags: ["Accuracy","Limitations","Verification"]
  },
  {
    id: "q122",
    questionNumber: 122,
    text: "When using GitHub Copilot Chat to generate boilerplate code for various test types, how can you guide the AI to follow the testing standards of your company?",
    options: [
      { key: "A", text: "By using a specific slash command in the prompt." },
      { key: "B", text: "By using a specific command in the terminal." },
      { key: "C", text: "By using a specific setting in GitHub Copilot’s configuration." },
      { key: "D", text: "By using specific prompt examples in your chat request." },
    ],
    correctAnswers: ["D"],
    category: "Prompt Engineering",
    explanation: "Để hướng Copilot Chat theo chuẩn kiểm thử (testing standards) của công ty, cách hiệu quả là cung cấp các ví dụ prompt cụ thể (specific prompt examples) trong yêu cầu chat. Việc đưa ví dụ mẫu giúp Copilot hiểu phong cách và quy ước mong muốn để sinh boilerplate phù hợp.",
    tags: ["Prompting","Testing","Examples"]
  },
  {
    id: "q123",
    questionNumber: 123,
    text: "When using GitHub Copilot to identify missing tests in your codebase, which of the following is the most important factor to consider?",
    options: [
      { key: "A", text: "Having a high test coverage percentage in the codebase." },
      { key: "B", text: "Using well-known coding practices in your repository." },
      { key: "C", text: "Ensuring that the correct context is available to GitHub Copilot." },
      { key: "D", text: "Close all the tabs in your IDE that do not have tests in them." },
    ],
    correctAnswers: ["C"],
    category: "Prompt Engineering",
    explanation: "Yếu tố quan trọng nhất khi dùng Copilot để tìm các test còn thiếu là đảm bảo ngữ cảnh (context) đúng được cung cấp cho Copilot. Vì chất lượng gợi ý phụ thuộc trực tiếp vào ngữ cảnh, nếu Copilot thấy được code liên quan thì mới xác định chính xác phần nào chưa được kiểm thử.",
    tags: ["Context","Testing","Test Coverage"]
  },
  {
    id: "q124",
    questionNumber: 124,
    text: "How can GitHub Copilot assist in maintaining consistency across your tests?",
    options: [
      { key: "A", text: "By providing documentation references based on industry best practices." },
      { key: "B", text: "By automatically fixing all tests in the code based on the context." },
      { key: "C", text: "By identifying a pattern in the way you write tests and suggesting similar patterns for future tests." },
      { key: "D", text: "By writing the implementation code for the function based on context" },
    ],
    correctAnswers: ["C"],
    category: "Developer Use Cases",
    explanation: "Copilot giúp duy trì tính nhất quán trong test bằng cách nhận diện mẫu (pattern) trong cách bạn viết test và gợi ý các mẫu tương tự cho test tương lai. Nhờ học theo phong cách hiện có trong codebase, nó đề xuất test theo cùng quy ước.",
    tags: ["Testing","Consistency","Patterns"]
  },
  {
    id: "q125",
    questionNumber: 125,
    text: "When using GitHub Copilot Chat to generate unit tests, which slash command would you use?",
    options: [
      { key: "A", text: "/create-tests" },
      { key: "B", text: "/generate-tests" },
      { key: "C", text: "/tests" },
      { key: "D", text: "/init-tests" },
    ],
    correctAnswers: ["C"],
    category: "Tooling & Integrations",
    explanation: "Để sinh unit test trong Copilot Chat, slash command đúng là `/tests`. Lệnh này tạo unit test cho đoạn code đang được chọn, là cú pháp được Copilot Chat hỗ trợ chính thức.",
    tags: ["Slash Commands","Unit Tests","Copilot Chat"]
  },
  {
    id: "q126",
    questionNumber: 126,
    text: "Which of the following statements best describes the impact of GitHub Copilot on the software development process?",
    options: [
      { key: "A", text: "It decreases software vulnerabilities from third party dependencies." },
      { key: "B", text: "It increases productivity by automating repetitive coding tasks." },
      { key: "C", text: "It reduces developer overhead by automating testing workflows." },
      { key: "D", text: "It replaces the need for developers in the software development process." },
    ],
    correctAnswers: ["C"],
    category: "Developer Use Cases",
    explanation: "GitHub Copilot tác động tích cực đến quy trình phát triển phần mềm bằng cách giảm overhead cho developer thông qua tự động hóa các luồng kiểm thử (testing workflows). Nó hỗ trợ chứ không thay thế developer, giúp tiết kiệm công sức cho các tác vụ lặp lại như viết test.",
    tags: ["Productivity","Testing","Automation"]
  },
  {
    id: "q127",
    questionNumber: 127,
    text: "Identify the right use cases where GitHub Copilot Chat is most effective. Each correct answer presents part of the solution. (Choose two.)",
    options: [
      { key: "A", text: "Creation of end-to-end performance testing scenarios for a web application" },
      { key: "B", text: "Creation of a unit test scenario for newly developed Python code" },
      { key: "C", text: "Create a technical requirement specification from the business requirement documentation" },
      { key: "D", text: "Explain a legacy COBOL code and translate the code to another language like C#" },
    ],
    correctAnswers: ["A","B"],
    category: "Developer Use Cases",
    explanation: "Copilot Chat hiệu quả nhất ở các use case sinh code/test như tạo kịch bản performance testing end-to-end cho ứng dụng web và tạo unit test cho code Python mới viết. Đây là các tác vụ lập trình và kiểm thử cụ thể, đúng thế mạnh của công cụ hơn so với tạo tài liệu đặc tả nghiệp vụ hay dịch code legacy phức tạp.",
    tags: ["Testing","Use Cases","Code Generation"]
  },
  {
    id: "q128",
    questionNumber: 128,
    text: "Why code reviewing still necessary when using GitHub Copilot to write tests?",
    options: [
      { key: "A", text: "Because GitHub Copilot generates the best code possible for the test scenario." },
      { key: "B", text: "Because GitHub Copilot can cover all possible scenarios in your test cases." },
      { key: "C", text: "Because GitHub Copilot replaces the need for manual testing." },
      { key: "D", text: "Because GitHub Copilot’s generated test cases may not cover all possible scenarios." },
    ],
    correctAnswers: ["D"],
    category: "Responsible AI",
    explanation: "Code review vẫn cần thiết khi dùng Copilot viết test vì các test case mà Copilot tạo ra có thể không bao phủ hết mọi tình huống (scenarios). Do gợi ý dựa trên mẫu nên có thể bỏ sót edge case, vì vậy con người phải rà soát để đảm bảo độ bao phủ và chất lượng.",
    tags: ["Code Review","Testing","Human Oversight"]
  },
  {
    id: "q129",
    questionNumber: 129,
    text: "How does the ‘/tests’ slash command assist developers?",
    options: [
      { key: "A", text: "Constructs detailed test documentation." },
      { key: "B", text: "Creates unit tests for the selected code." },
      { key: "C", text: "Executes test cases to find issues with the code." },
      { key: "D", text: "Integrates with external testing frameworks." },
    ],
    correctAnswers: ["B"],
    category: "Tooling & Integrations",
    explanation: "Lệnh slash `/tests` hỗ trợ developer bằng cách tạo unit test cho đoạn code được chọn (selected code). Đây là chức năng được thiết kế để nhanh chóng sinh test dựa trên code hiện tại trong editor.",
    tags: ["Slash Commands","Unit Tests","Testing"]
  },
  {
    id: "q130",
    questionNumber: 130,
    text: "How can GitHub Copilot be limited when it comes to suggesting unit tests?",
    options: [
      { key: "A", text: "GitHub Copilot’s limitations in generating unit tests can vary based on the IDE version you are using." },
      { key: "B", text: "GitHub Copilot primarily suggest basic unit tests that focus on core functionalities, often requiring additional input from developers for comprehensive coverage." },
      { key: "C", text: "GitHub Copilot can handle any complexity in code and automatically generate appropriate unit tests." },
      { key: "D", text: "GitHub Copilot can generate all types of unit tests, including those for edge cases and complex integration scenarios." },
    ],
    correctAnswers: ["B"],
    category: "How Copilot Works",
    explanation: "Một giới hạn của Copilot là nó chủ yếu gợi ý các unit test cơ bản tập trung vào chức năng cốt lõi (core functionalities), thường cần developer bổ sung thêm để đạt độ bao phủ toàn diện. Vì vậy nó không tự sinh được đầy đủ test cho mọi edge case hay kịch bản tích hợp phức tạp.",
    tags: ["Testing","Limitations","Test Coverage"]
  },
  {
    id: "q131",
    questionNumber: 131,
    text: "Where can you validate if GitHub Copilot is not returning suggestions because of content exclusions?",
    options: [
      { key: "A", text: "The GitHub Copilot errors panel in your IDE" },
      { key: "B", text: "The GitHub Copilot logs on GitHub.com under your user settings" },
      { key: "C", text: "The code suggestions window will display a warning message" },
      { key: "D", text: "The GitHub Copilot icon in the status bar of the editor will display a message" },
    ],
    correctAnswers: ["D"],
    category: "Data Privacy & Content Exclusions",
    explanation: "Bạn có thể kiểm tra việc Copilot không trả về gợi ý do content exclusions thông qua biểu tượng GitHub Copilot trên thanh trạng thái (status bar) của editor, nơi sẽ hiển thị thông báo tương ứng. Đây là chỉ báo trực quan cho biết tệp hoặc kho lưu trữ hiện tại bị ảnh hưởng bởi content exclusions.",
    tags: ["Content Exclusions","Status Bar","IDE"]
  },
  {
    id: "q132",
    questionNumber: 132,
    text: "When can GitHub Copilot still use content that was excluded using content exclusion?",
    options: [
      { key: "A", text: "When the user prompts with @workspace." },
      { key: "B", text: "When the repository level settings allow overrides by the user." },
      { key: "C", text: "If the content exclusion was configured at the enterprise level, and is overwritten at the organization level." },
      { key: "D", text: "If the contents of an excluded file are referenced in code that is not excluded, for example function calls." },
    ],
    correctAnswers: ["D"],
    category: "Data Privacy & Content Exclusions",
    explanation: "Content exclusions ngăn Copilot dùng trực tiếp nội dung của file bị loại trừ làm context, nhưng không thể che giấu nội dung đó nếu nó được tham chiếu từ code không bị loại trừ. Khi một file không bị loại trừ gọi hàm hoặc tham chiếu tới nội dung của file bị loại trừ, các tham chiếu đó vẫn có thể xuất hiện trong gợi ý của Copilot.",
    tags: ["Content Exclusions","Context","Limitations"]
  },
  {
    id: "q133",
    questionNumber: 133,
    text: "What GitHub Copilot configuration needs to be enabled to protect against IP infringements?",
    options: [
      { key: "A", text: "Blocking license check configuration" },
      { key: "B", text: "Blocking public code matches" },
      { key: "C", text: "Allowing license check configuration" },
      { key: "D", text: "Allowing public code matches" },
    ],
    correctAnswers: ["B"],
    category: "Administration & Policies",
    explanation: "Để bảo vệ chống vi phạm sở hữu trí tuệ (IP), cần bật cấu hình chặn các gợi ý trùng khớp với public code (Blocking public code matches). Cài đặt này ngăn Copilot đưa ra các đoạn mã trùng với mã công khai có sẵn, giảm rủi ro pháp lý về bản quyền.",
    tags: ["IP Protection","Duplication Detection","Public Code"]
  },
  {
    id: "q134",
    questionNumber: 134,
    text: "What is a limitation of content exclusions?",
    options: [
      { key: "A", text: "Content exclusions can be worked around as it is only available for Git repositories." },
      { key: "B", text: "Repository administrators and organization owners cannot manage content exclusion settings." },
      { key: "C", text: "Content exclusions are only available in the GitHub Copilot Individual plan." },
      { key: "D", text: "Content exclusions can only be configured by an enterprise administrator." },
    ],
    correctAnswers: ["A"],
    category: "Data Privacy & Content Exclusions",
    explanation: "Một hạn chế của content exclusions là chúng chỉ áp dụng cho Git repositories, nên có thể bị lách qua. Nếu nội dung được truy cập ngoài bối cảnh Git repository, cơ chế loại trừ sẽ không có hiệu lực bảo vệ.",
    tags: ["Content Exclusions","Limitations","Git"]
  },
  {
    id: "q135",
    questionNumber: 135,
    text: "What content can be configured to be excluded with content exclusions? Each correct answer presents part of the solution. (Choose three.)",
    options: [
      { key: "A", text: "Gists" },
      { key: "B", text: "Repositories" },
      { key: "C", text: "Files" },
      { key: "D", text: "Lines in files" },
      { key: "E", text: "Folders" },
    ],
    correctAnswers: ["B","C","E"],
    category: "Data Privacy & Content Exclusions",
    explanation: "Content exclusions có thể được cấu hình ở cấp độ Repositories, Files và Folders. Quản trị viên có thể chỉ định toàn bộ repository, các thư mục hoặc từng file cụ thể để Copilot không sử dụng làm context, chứ không loại trừ ở mức Gists huặc từng dòng lẻ trong file.",
    tags: ["Content Exclusions","Scope","Configuration"]
  },
  {
    id: "q136",
    questionNumber: 136,
    text: "A team is using GitHub Copilot Individual in their daily development activities. They need to exclude specific files from being used to inform code completion suggestions. How can they achieve this?",
    options: [
      { key: "A", text: "Upgrade to Copilot Business" },
      { key: "B", text: "Add a .gitignore file to the repo" },
      { key: "C", text: "Have an organization owner configure content exclusions" },
      { key: "D", text: "Have a repo administrator configure content exclusions" },
      { key: "E", text: "Use the #file Chat variable to exclude the files" },
    ],
    correctAnswers: ["A"],
    category: "Plans & Features",
    explanation: "Content exclusions không khả dụng trong GitHub Copilot Individual; tính năng này chỉ có ở Copilot Business/Enterprise. Vì vậy để loại trừ các file khỏi gợi ý code completion, nhóm cần nâng cấp lên Copilot Business.",
    tags: ["Copilot Business","Content Exclusions","Plans"]
  },
  {
    id: "q137",
    questionNumber: 137,
    text: "What do you check when GitHub Copilot content exclusions are not working? Each correct answer presents part of the solution. (Choose two.)",
    options: [
      { key: "A", text: "If GitHub Copilot can connect to the server selected in your user settings." },
      { key: "B", text: "If the user is in an organization that has content exclusions configured." },
      { key: "C", text: "If the content exclusion settings changed in the last 30 minutes or before that." },
      { key: "D", text: "If the user is part of the content exclusion team that limits the use of content exclusions." },
    ],
    correctAnswers: ["B","C"],
    category: "Data Privacy & Content Exclusions",
    explanation: "Khi content exclusions không hoạt động, cần kiểm tra xem người dùng có thuộc tổ chức đã cấu hình content exclusions hay không, và liệu cài đặt loại trừ có thay đổi trong vòng 30 phút gần đây. Vì các thay đổi loại trừ cần đến 30 phút để có hiệu lực, một thay đổi quá mới có thể chưa được áp dụng.",
    tags: ["Content Exclusions","Troubleshooting","Propagation"]
  },
  {
    id: "q138",
    questionNumber: 138,
    text: "What practices enhance the quality of suggestions provided GitHub Copilot? (Choose three.)",
    options: [
      { key: "A", text: "Using meaningful variable names" },
      { key: "B", text: "Clearly defining the problem or task" },
      { key: "C", text: "Including personal information in the code comments" },
      { key: "D", text: "Providing examples of desired output" },
      { key: "E", text: "Use a gitignore file to exclude irrelevant files" },
    ],
    correctAnswers: ["A","B","D"],
    category: "Prompt Engineering",
    explanation: "Chất lượng gợi ý của Copilot tăng lên khi dùng tên biến có ý nghĩa, xác định rõ vấn đề/nhiệm vụ, và cung cấp ví dụ về kết quả mong muốn. Những thực hành này cung cấp ngữ cảnh rõ ràng giúp Copilot hiểu đúng ý định và đưa ra mã phù hợp hơn.",
    tags: ["Best Practices","Context","Suggestion Quality"]
  },
  {
    id: "q139",
    questionNumber: 139,
    text: "What is a key consideration when relying on GitHub Copilot Chat’s explanations of code functionality and proposed improvements?",
    options: [
      { key: "A", text: "The explanations are primarily derived from user-provided documentation." },
      { key: "B", text: "The explanations are dynamically updated based on user feedback." },
      { key: "C", text: "GitHub Copilot Chat uses a static database for generating explanations." },
      { key: "D", text: "Reviewing and validating the generated output for accuracy and completeness." },
    ],
    correctAnswers: ["D"],
    category: "Responsible AI",
    explanation: "Vì Copilot Chat là công cụ AI sinh nội dung có thể sai sót, điều quan trọng là phải xem xét và xác thực kết quả tạo ra về độ chính xác và đầy đủ. Người dùng không nên tin tưởng tuyệt đối các giải thích mà cần tự kiểm chứng lại.",
    tags: ["Validation","Human Oversight","Accuracy"]
  },
  {
    id: "q140",
    questionNumber: 140,
    text: "How does GitHub Copilot Chat ensure that a function works correctly?",
    options: [
      { key: "A", text: "By automatically writing all the tests for the function." },
      { key: "B", text: "By suggesting assertions based on the code’s context and semantics." },
      { key: "C", text: "By executing the test cases to validate the correctness of the code." },
      { key: "D", text: "By writing the implementation code for the function." },
    ],
    correctAnswers: ["A"],
    category: "Developer Use Cases",
    explanation: "Copilot Chat hỗ trợ đảm bảo hàm hoạt động đúng bằng cách tự động viết các test cho hàm đó. Điều này giúp lập trình viên kiểm thử nhanh hành vi của hàm, dù vẫn cần xem xét lại các test được tạo.",
    tags: ["Testing","Test Generation","Copilot Chat"]
  },
  {
    id: "q141",
    questionNumber: 141,
    text: "What is the process behind identifying public code matches when using a public code filter enabled in GitHub Copilot?",
    options: [
      { key: "A", text: "Running code suggestions through filters designed to detect public code" },
      { key: "B", text: "Comparing suggestions against public code using machine learning" },
      { key: "C", text: "Reviewing the user’s browsing history to identify public repositories" },
      { key: "D", text: "Analyzing the context and structure of the code being written" },
    ],
    correctAnswers: ["A"],
    category: "How Copilot Works",
    explanation: "Khi bật bộ lọc public code, quy trình xác định trùng khớp là chạy các gợi ý code qua các bộ lọc được thiết kế để phát hiện public code. Các gợi ý trùng với mã công khai sẽ bị bộ lọc này chặn lại.",
    tags: ["Public Code Filter","Duplication Detection","Mechanism"]
  },
  {
    id: "q142",
    questionNumber: 142,
    text: "What GitHub Copilot feature can be configured at the organization level to prevent GitHub Copilot suggesting publicly available code snippets?",
    options: [
      { key: "A", text: "GitHub Copilot Chat in the IDE" },
      { key: "B", text: "GitHub Copilot access to Bing" },
      { key: "C", text: "GitHub Copilot duplication detection filter" },
      { key: "D", text: "GitHub Copilot Chat in GitHub Mobile" },
    ],
    correctAnswers: ["C"],
    category: "Administration & Policies",
    explanation: "Tính năng có thể cấu hình ở cấp tổ chức để ngăn Copilot gợi ý các đoạn mã công khai là duplication detection filter (bộ lọc phát hiện trùng lặp). Khi bật, nó chặn các gợi ý trùng khớp với public code.",
    tags: ["Duplication Detection","Organization Settings","Public Code"]
  },
  {
    id: "q143",
    questionNumber: 143,
    text: "Which of the following GitHub Copilot Business related activities can be tracked using the organization audit logs?",
    options: [
      { key: "A", text: "Accepted chat suggestions" },
      { key: "B", text: "Changes to content exclusion settings" },
      { key: "C", text: "Code suggestions made by GitHub Copilot" },
      { key: "D", text: "Suggestions blocked by duplication detection filtering" },
    ],
    correctAnswers: ["B"],
    category: "Administration & Policies",
    explanation: "Trong các hoạt động liên quan đến Copilot Business, audit logs của tổ chức ghi lại các thay đổi đối với cài đặt content exclusion. Các sự kiện như gợi ý code hay các đề xuất bị chặn không được lưu trong audit log.",
    tags: ["Audit Logs","Content Exclusions","Monitoring"]
  },
  {
    id: "q144",
    questionNumber: 144,
    text: "How long does it take content exclusion to add or be updated?",
    options: [
      { key: "A", text: "Up to 30 minutes" },
      { key: "B", text: "60-90 minutes" },
      { key: "C", text: "45-60 minutes" },
      { key: "D", text: "24 hours" },
    ],
    correctAnswers: ["A"],
    category: "Data Privacy & Content Exclusions",
    explanation: "Việc thêm hoặc cập nhật content exclusion có thể mất tới 30 phút để có hiệu lực trên các môi trường. Đây cũng là lý do khi loại trừ chưa hoạt động ngay, cần chờ khoảng thời gian này.",
    tags: ["Content Exclusions","Propagation Time","Configuration"]
  },
  {
    id: "q145",
    questionNumber: 145,
    text: "What practices enhance the quality of suggestions provided by GitHub Copilot? (Select three)",
    options: [
      { key: "A", text: "Providing examples of desired output" },
      { key: "B", text: "Clearly defining the problem or task" },
      { key: "C", text: "Including personal information in the code comments" },
      { key: "D", text: "Using meaningful variable names" },
      { key: "E", text: "Use a .gitignore file to exclude irrelevant files" },
    ],
    correctAnswers: ["A","B","D"],
    category: "Prompt Engineering",
    explanation: "Chất lượng gợi ý của Copilot được nâng cao khi cung cấp ví dụ về kết quả mong muốn, xác định rõ vấn đề/nhiệm vụ, và dùng tên biến có ý nghĩa. Những yếu tố này cung cấp ngữ cảnh giúp Copilot suy luận đúng ý định của lập trình viên.",
    tags: ["Best Practices","Context","Suggestion Quality"]
  },
  {
    id: "q146",
    questionNumber: 146,
    text: "What is the best way to share feedback about GitHub Copilot Chat with GitHub?",
    options: [
      { key: "A", text: "By tweeting at GitHub's official X (previously known as Twitter) account." },
      { key: "B", text: "Use the emojis in the Copilot Chat interface." },
      { key: "C", text: "The Settings menu in the GitHub Mobile app." },
      { key: "D", text: "The feedback section on the GitHub website." },
    ],
    correctAnswers: ["B"],
    category: "Tooling & Integrations",
    explanation: "Cách tốt nhất để gửi phản hồi về Copilot Chat là dùng các biểu tượng cảm xúc (emojis) ngay trong giao diện Copilot Chat. Phản hồi này được gửi trực tiếp tới GitHub để cải thiện trải nghiệm.",
    tags: ["Feedback","Copilot Chat","User Experience"]
  },
  {
    id: "q147",
    questionNumber: 147,
    text: "Why is code reviewing still necessary when using GitHub Copilot to write tests?",
    options: [
      { key: "A", text: "Because GitHub Copilot replaces the need for manual testing." },
      { key: "B", text: "Because GitHub Copilot's generated test cases may not cover all possible scenarios." },
      { key: "C", text: "Because GitHub Copilot can cover all possible scenarios in your test cases." },
      { key: "D", text: "Because GitHub Copilot generates the best code possible for the test scenario." },
    ],
    correctAnswers: ["B"],
    category: "Responsible AI",
    explanation: "Việc review code vẫn cần thiết vì các test case do Copilot tạo có thể không bao phủ hết mọi tình huống có thể xảy ra. Lập trình viên phải kiểm tra để đảm bảo các trường hợp biên và kịch bản quan trọng đều được kiểm thử.",
    tags: ["Testing","Code Review","Human Oversight"]
  },
  {
    id: "q148",
    questionNumber: 148,
    text: "What caution should developers exercise when using GitHub Copilot?",
    options: [
      { key: "A", text: "GitHub Copilot's capability to optimize complex mathematical computations." },
      { key: "B", text: "GitHub Copilot's automatic update of outdated mathematical formulas to modern standards." },
      { key: "C", text: "GitHub Copilot's reliance on pattern-based responses, without verifying computation accuracy." },
      { key: "D", text: "GitHub Copilot's ability to execute and veri fy mathematical results in real-time." },
    ],
    correctAnswers: ["C"],
    category: "Responsible AI",
    explanation: "Lập trình viên cần thận trọng vì Copilot dựa trên phản hồi theo mẫu (pattern-based) mà không thực sự kiểm chứng độ chính xác của các phép tính. Do đó kết quả tính toán toán học có thể không đúng và cần được xác minh độc lập.",
    tags: ["Accuracy","Limitations","Verification"]
  },
  {
    id: "q149",
    questionNumber: 149,
    text: "What is a key benefit of using GitHub Copilot within a team environment?",
    options: [
      { key: "A", text: "Automatically merges all team pull requests" },
      { key: "B", text: "Encourages code consistency by offering similar suggestions to team members" },
      { key: "C", text: "Generates team standup notes" },
      { key: "D", text: "Replaces the need for any code review process" },
    ],
    correctAnswers: ["B"],
    category: "Developer Use Cases",
    explanation: "Lợi ích chính khi dùng Copilot trong môi trường nhóm là khuyến khích tính nhất quán của code bằng cách đưa ra các gợi ý tương tự cho các thành viên. Điều này giúp duy trì phong cách và mẫu code đồng nhất trong toàn nhóm.",
    tags: ["Team Collaboration","Code Consistency","Productivity"]
  },
  {
    id: "q150",
    questionNumber: 150,
    text: "How can GitHub Copilot facilitate a smooth transition for developers to a new programming language? (Choose two)",
    options: [
      { key: "A", text: "GitHub Copilot can provide real-time guidance and support to help the developers learn the syntax and best practices of the new language." },
      { key: "B", text: "GitHub Copilot’s /understand command will help GitHub Copilot to understand code written in a targeted programming language." },
      { key: "C", text: "GitHub Copilot can convert comments into code to grasp the syntax and nuances of a new programming language." },
      { key: "D", text: "GitHub Copilot Chat can provide guidance and support for common coding tasks and challenges in the targeted programming language." },
    ],
    correctAnswers: ["A","D"],
    category: "Developer Use Cases",
    explanation: "Copilot giúp chuyển đổi sang ngôn ngữ lập trình mới bằng cách cung cấp hướng dẫn và hỗ trợ thời gian thực để học cú pháp và best practices, đồng thời Copilot Chat hỗ trợ cho các tác vụ và thách thức coding phổ biến trong ngôn ngữ mục tiêu. Nhờ đó lập trình viên học nhanh hơn ngay trong quá trình làm việc.",
    tags: ["Learning","Language Transition","Copilot Chat"]
  },
  {
    id: "q151",
    questionNumber: 151,
    text: "What are the potential risks associated with using GitHub Copilot? (Choose two)",
    options: [
      { key: "A", text: "GitHub Copilot may introduce security vulnerabilities by suggesting code with known exploits." },
      { key: "B", text: "GitHub Copilot’s suggestions may not always reflect best practices or the latest coding standards." },
      { key: "C", text: "GitHub Copilot may increase development lead time by providing irrelevant suggestions." },
      { key: "D", text: "GitHub Copilot may decrease developer velocity by requiring too much time in prompt engineering." },
    ],
    correctAnswers: ["A","B"],
    category: "Responsible AI",
    explanation: "Các rủi ro tiềm ẩn gồm việc Copilot có thể đưa ra mã chứa lỗ hổng bảo mật với các exploit đã biết, và các gợi ý có thể không luôn phản ánh best practices hoặc tiêu chuẩn coding mới nhất. Vì vậy người dùng cần xem xét kỹ trước khi chấp nhận gợi ý.",
    tags: ["Security","Best Practices","Risks"]
  },
  {
    id: "q152",
    questionNumber: 152,
    text: "What are the potential legal and ethical risks of using GitHub Copilot? (Select three)",
    options: [
      { key: "A", text: "GitHub Copilot may accidentally suggest hard-coded secrets from its training data." },
      { key: "B", text: "GitHub Copilot's suggestions may contain licensed code without providing necessary attribution." },
      { key: "C", text: "GitHub Copilot may suggest code that contains security vulnerabilities." },
      { key: "D", text: "GitHub Copilot may decrease developer productivity while processing far-fetched requests." },
    ],
    correctAnswers: ["A","B","C"],
    category: "Responsible AI",
    explanation: "Các rủi ro pháp lý và đạo đức bao gồm: Copilot có thể vô tình gợi ý hard-coded secrets từ dữ liệu huấn luyện, có thể chứa licensed code mà không kèm attribution cần thiết, và có thể gợi ý mã chứa lỗ hổng bảo mật. Những rủi ro này liên quan đến quyền riêng tư, bản quyền và an toàn.",
    tags: ["Legal","Ethics","Security"]
  },
];
