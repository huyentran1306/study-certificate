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
      { key: "D", text: "Inclusiveness" }
    ],
    correctAnswers: ["B"],
    category: "Responsible AI",
    explanation: "Nguyên tắc Công bằng (Fairness) của Microsoft tập trung vào việc đảm bảo hệ thống AI không phân biệt đối xử hoặc thể hiện sự thiên vị đối với bất kỳ cá nhân hay nhóm người nào. Mục tiêu là đối xử bình đẳng với tất cả mọi người, bất kể chủng tộc, giới tính, tôn giáo hoặc các đặc điểm được bảo vệ khác. Ngược lại, Privacy & Security bảo vệ dữ liệu cá nhân; Inclusiveness tập trung vào tính tiếp cận phổ quát.",
    tags: ["Microsoft Ethical AI", "Fairness"]
  },
  {
    id: "q2",
    questionNumber: 2,
    text: "What can be done during AI development to minimize bias?",
    options: [
      { key: "A", text: "Collect massive amounts of data for training." },
      { key: "B", text: "Focus on accuracy of the data." },
      { key: "C", text: "Use diverse data, fairness metrics, and human oversight." },
      { key: "D", text: "Improve on the computational efficiency and speed." }
    ],
    correctAnswers: ["C"],
    category: "Responsible AI",
    explanation: "Để giảm thiểu thiên lệch (bias), nhà phát triển cần một chiến lược đa diện ở mọi giai đoạn của vòng đời AI. Việc sử dụng dữ liệu đa dạng (diverse data) giúp ngăn mô hình tiếp thu các định kiến cục bộ; các số đo công bằng (fairness metrics) giúp quản lý cấu trúc kỹ thuật; và sự giám sát của con người (human oversight) giúp đánh giá các tác động thực tế ngoài ý muốn.",
    tags: ["Bias Mitigation", "AI Lifecycle"]
  },
  {
    id: "q3",
    questionNumber: 3,
    text: "Why is it important to ensure the security of the code used in Generative AI (Gen AI) tools?",
    options: [
      { key: "A", text: "Ensuring code security prevents unauthorized access and potential data breaches." },
      { key: "B", text: "Ensuring code security enables the AI system to handle larger datasets effectively." },
      { key: "C", text: "Ensuring code security maintains the integrity of the AI system." },
      { key: "D", text: "Ensuring code security supports the development of more advanced AI features." }
    ],
    correctAnswers: ["A"],
    category: "Security & Licensing",
    explanation: "Bảo mật mã nguồn trong công cụ Generative AI là cực kỳ quan trọng vì các mô hình này thường xử lý logic nội bộ, các biến môi trường nhạy cảm và khóa bảo mật hệ thống. Mã nguồn lỏng lẻo có thể dẫn tới rò rỉ dữ liệu hoặc rò rỉ IP của công ty. Trong khung Responsible AI, việc bảo vệ code-in-use bảo vệ cả tài sản trí tuệ và quyền riêng tư người dùng.",
    tags: ["Code Security", "Enterprise Risk"]
  },
  {
    id: "q4",
    questionNumber: 4,
    text: "A social media manager wants to use AI to filter content. How can they promote transparency in the platform’s AI operations?",
    options: [
      { key: "A", text: "By providing clear explanations about the types of content the AI is designed to filter and how it arrives at its conclusion." },
      { key: "B", text: "By relying on a well-regarded AI development company." },
      { key: "C", text: "By regularly updating the AI filtering algorithm." },
      { key: "D", text: "By focusing on user satisfaction with the content filtering." }
    ],
    correctAnswers: ["A"],
    category: "Responsible AI",
    explanation: "Tính minh bạch (Transparency) đòi hỏi các hệ thống AI phải dễ hiểu đối với người dùng cuối, có tài liệu và các lời giải thích rõ ràng về tiêu chí hoạt động. Việc công khai rõ ràng loại nội dung nào sẽ bị lọc và cơ chế đưa ra quyết định của mô hình giúp xây dựng niềm tin tốt nhất và cho phép người dùng có quyền khiếu nại thỏa đáng.",
    tags: ["Transparency", "Responsible Operations"]
  },
  {
    id: "q5",
    questionNumber: 5,
    text: "How does GitHub Copilot Chat utilize its training data and external sources to generate responses when answering coding questions?",
    options: [
      { key: "A", text: "It primarily relies on the model’s training data to generate responses." },
      { key: "B", text: "It combines its training data set, code in user repositories, and external sources like Bing to generate responses." },
      { key: "C", text: "It uses user-provided documentation exclusively to generate responses." },
      { key: "D", text: "It primarily uses search results from Bing to generate responses." }
    ],
    correctAnswers: ["B"],
    category: "Features & Optimization",
    explanation: "GitHub Copilot Chat sử dụng cơ chế tổng hợp thông minh kết hợp 3 nguồn: (1) Dữ liệu huấn luyện gốc của mô hình LLM chuyên về code; (2) Ngữ cảnh từ repository của người dùng (file đang mở, các hàm lân cận trong IDE để gợi ý mang tính may đo cá nhân); (3) Các nguồn tài liệu cập nhật bên ngoài thông qua tích hợp cổng tìm kiếm Bing (cho các API mới ra mắt).",
    tags: ["Copilot Chat", "Data Synthesis"]
  },
  {
    id: "q6",
    questionNumber: 6,
    text: "Which principle emphasizes that AI systems should be understandable and provide clear information on how they work?",
    options: [
      { key: "A", text: "Fairness" },
      { key: "B", text: "Accountability" },
      { key: "C", text: "Transparency" },
      { key: "D", text: "Inclusiveness" }
    ],
    correctAnswers: ["C"],
    category: "Responsible AI",
    explanation: "Nguyên tắc Minh bạch (Transparency) quy định rõ ràng hệ thống AI phải mang tính giải thích được (explainable). Người dùng phải biết họ đang tương tác với AI và có thể truy cập thông tin rõ ràng về cách hoạt động, nguồn dữ liệu và logic ra quyết định của thuật toán đó.",
    tags: ["Transparency", "AI Principles"]
  },
  {
    id: "q7",
    questionNumber: 7,
    text: "Which of the following is a risk associated with using AI?",
    options: [
      { key: "A", text: "AI replaces the need for developer opportunities in most fields." },
      { key: "B", text: "AI eliminated the need for data privacy regulations." },
      { key: "C", text: "AI algorithms are incapable of perpetuating existing biases." },
      { key: "D", text: "AI systems can sometimes make decisions that are difficult to interpret." }
    ],
    correctAnswers: ["D"],
    category: "Responsible AI",
    explanation: "Một rủi ro nổi tiếng của trí tuệ nhân tạo (đặc biệt là mạng nơ-ron sâu phức tạp) là vấn đề 'Hộp đen' (Black Box), nơi các quyết định của hệ thống cực kỳ phức tạp và con người khó có thể phân tích hay giải giải nghĩa được một cách tường tận. AI không loại bỏ các quy định bảo mật, cũng không thay thế hoàn toàn nghề lập trình viên mà chỉ mang tính bổ trợ.",
    tags: ["Explainability", "Black Box Risk"]
  },
  {
    id: "q8",
    questionNumber: 8,
    text: "What types of prompts or code snippets might be flagged by the GitHub Copilot toxicity filter? (Choose two.)",
    options: [
      { key: "A", text: "Hate speech or discriminatory language (e.g., racial slurs, offensive stereotypes)" },
      { key: "B", text: "Sexually suggestive or explicit content" },
      { key: "C", text: "Code that contains logical errors or produces unexpected results" },
      { key: "D", text: "Code comments containing strong opinions or criticisms" }
    ],
    correctAnswers: ["A", "B"],
    category: "Security & Licensing",
    explanation: "Bộ lọc độc hại (toxicity filter) của GitHub Copilot quét các prompt đầu vào để loại bỏ các ngôn từ kích động thù địch/phân biệt đối xử (A) hoặc các nội dung người lớn, khiêu dâm, không lành mạnh (B). Bộ lọc không đánh giá tính đúng đắn của logic code (C) cũng không chặn các nhận xét phê bình kỹ thuật thông thường (D).",
    tags: ["Toxicity Filter", "Content Safety"]
  },
  {
    id: "q9",
    questionNumber: 9,
    text: "How can the concept of fairness be integrated into the process of operating an AI tool?",
    options: [
      { key: "A", text: "Focusing on accessibility will ensure fairness." },
      { key: "B", text: "Training AI data and algorithms to be free from biases will ensure fairness." },
      { key: "C", text: "Regularly monitoring the AI tool’s performance will ensure fairness in its outputs." },
      { key: "D", text: "Focusing on collecting large datasets for training will ensure fairness." }
    ],
    correctAnswers: ["A"],
    category: "Responsible AI",
    explanation: "Ở khía cạnh vận hành (operating), tích hợp sự công bằng bằng cách tập trung vào khả năng tiếp cận (Accessibility), giúp bất kỳ nhóm người dùng nào, không phân biệt rào cản ngôn ngữ hay khuyết tật cơ thể, đều nhận được lợi ích tương tự nhau từ AI. Việc huấn luyện dữ liệu không thiên lệch là bước trước đó (ở giai đoạn phát triển), không phải giai đoạn vận hành phát hành.",
    tags: ["Accessibility", "Inclusive Design"]
  },
  {
    id: "q10",
    questionNumber: 10,
    text: "What are the potential risks associated with relying heavily on code generated from GitHub Copilot? (Choose two.)",
    options: [
      { key: "A", text: "GitHub Copilot may introduce security vulnerabilities by suggesting code with known exploits." },
      { key: "B", text: "GitHub Copilot’s suggestions may not always reflect best practices or the latest coding standards." },
      { key: "C", text: "GitHub Copilot may increase development lead time by providing irrelevant suggestions." },
      { key: "D", text: "GitHub Copilot may decrease developer velocity by requiring too much time in prompt engineering." }
    ],
    correctAnswers: ["A", "B"],
    category: "Security & Licensing",
    explanation: "Hai rủi ro chính khi phụ thuộc hoàn toàn vào gợi ý từ Copilot mà không kiểm duyệt: (1) Mô hình có thể đề xuất các đoạn mã chứa lỗ hổng bảo mật đã biết hoặc mẫu mã cũ kém an toàn (A); (2) Đề xuất có thể dùng cú pháp lỗi thời hoặc không tuân thủ mẫu thiết kế tốt nhất hiện tại (B) vì nó học từ mã nguồn lịch sử trên Internet.",
    tags: ["Code Quality", "Exploit Risk"]
  },
  {
    id: "q11",
    questionNumber: 11,
    text: "Why might a Generative AI (Gen AI) tool create inaccurate outputs?",
    options: [
      { key: "A", text: "The Gen AI tool is programmed with a focus on creativity over factual accuracy." },
      { key: "B", text: "The Gen AI tool is experiencing downtime and is not fully recovered." },
      { key: "C", text: "The training data might contain biases or inconsistencies." },
      { key: "D", text: "The Gen AI tool is being overloaded with too many requests at once." }
    ],
    correctAnswers: ["C"],
    category: "Responsible AI",
    explanation: "Các mô hình ngôn ngữ lớn hoạt động trên cơ sở so khớp mẫu thống kê từ kho dữ liệu khổng lồ. Nếu kho huấn luyện (training data) chứa các thông tin mâu thuẫn, sai lệch hoặc định kiến, mô hình sẽ học và tái lập lại y chang những lỗi đó như là một thực tế chính xác.",
    tags: ["Hallucinations", "Training Bias"]
  },
  {
    id: "q12",
    questionNumber: 12,
    text: "What is the primary role of the '/optimize' slash command in VS Code / Visual Studio?",
    options: [
      { key: "A", text: "Translates code into a more performant language." },
      { key: "B", text: "Automatically formats the code according to the selected style guide." },
      { key: "C", text: "Summarizes your documentation into more maintainable and readable formats." },
      { key: "D", text: "Enhances the performance of the selected code by analyzing its runtime complexity." }
    ],
    correctAnswers: ["D"],
    category: "Features & Optimization",
    explanation: "Lệnh '/optimize' phân tích độ phức tạp thời gian/không gian của đoạn mã được chọn, phát hiện các điểm nghẽn hiệu suất (ví dụ: vòng lặp lồng nhau có độ phức tạp cao, thuật toán chưa tối ưu) và đề xuất phương án viết lại mã nguồn gọn hơn, chạy nhanh hơn với tài nguyên thấp hơn.",
    tags: ["Slash Commands", "Optimization"]
  },
  {
    id: "q13",
    questionNumber: 13,
    text: "Which GitHub Copilot plan could an Azure DevOps organization use without requiring a GitHub Enterprise license?",
    options: [
      { key: "A", text: "GitHub Copilot Enterprise" },
      { key: "B", text: "GitHub Copilot for Azure DevOps" },
      { key: "C", text: "Copilot Teams" },
      { key: "D", text: "GitHub Copilot Individual" }
    ],
    correctAnswers: ["B"],
    category: "Security & Licensing",
    explanation: "Gói 'GitHub Copilot for Azure DevOps' cho phép các tổ chức đang phát triển thuần túy trên cổng Azure DevOps có thể nhúng và đăng ký trực tiếp dịch vụ Copilot của họ mà không nhất thiết phải mua/nâng cấp lên giấy phép hệ sinh thái GitHub Enterprise đầy đủ.",
    tags: ["Licensing Plans", "Azure DevOps"]
  },
  {
    id: "q14",
    questionNumber: 14,
    text: "Which of the following steps correctly demonstrates how to establish an organization-wide policy for GitHub Copilot Business to restrict its use to certain repositories?",
    options: [
      { key: "A", text: "Create a copilot.policy file in each repository" },
      { key: "B", text: "Create a copilot.policy in the .github repository" },
      { key: "C", text: "Configure the policies in the organization settings" },
      { key: "D", text: "Apply policies through the GitHub Actions configuration" }
    ],
    correctAnswers: ["C"],
    category: "Security & Licensing",
    explanation: "Các chính sách cấp doanh nghiệp (như hạn chế kho lưu trữ hay quản lý truy cập) của GitHub Copilot Business được thiết lập và thực thi tập trung thông qua trang thiết lập tổ chức (Organization Settings). Điều này đảm bảo tính nhất quán trên toàn bộ doanh nghiệp và tránh việc lập trình viên tự cấu hình cục bộ sai lệch.",
    tags: ["Enterprise Policies", "Repository Restrict"]
  },
  {
    id: "q15",
    questionNumber: 15,
    text: "What type of information can you retrieve through GitHub Copilot Business Subscriptions via REST API? (Choose two.)",
    options: [
      { key: "A", text: "View code suggestions for a specific user" },
      { key: "B", text: "List all GitHub Copilot seat assignments for an organization" },
      { key: "C", text: "Get a summary of GitHub Copilot usage for organization members" },
      { key: "D", text: "List of all unsubscribed GitHub Copilot members within an organization" }
    ],
    correctAnswers: ["B", "C"],
    category: "Security & Licensing",
    explanation: "REST API của Copilot hỗ trợ quản trị viên lấy các thông tin hoạt động: Danh sách phân bổ chỗ ngồi sử dụng giấy phép trong tổ chức (B) và Bản tóm tắt hiệu suất/tần suất sử dụng của các thành viên (C). API không cho phép xem mã code gợi ý chi tiết của từng cá nhân vì mục tiêu bảo mật quyền riêng tư (A).",
    tags: ["REST API", "Copilot Seat Summary"]
  },
  {
    id: "q16",
    questionNumber: 16,
    text: "What is the best way to share feedback about GitHub Copilot Chat when using it on GitHub Mobile?",
    options: [
      { key: "A", text: "The feedback section on the GitHub website." },
      { key: "B", text: "By tweeting at GitHub’s official X (previously known as Twitter) account." },
      { key: "C", text: "Use the emojis in the Copilot Chat interface." },
      { key: "D", text: "The Settings menu in the GitHub Mobile app." }
    ],
    correctAnswers: ["C"],
    category: "Features & Optimization",
    explanation: "Cách nhanh nhất và trực quan nhất để phản hồi chất lượng câu trả lời của Chatbot ngay trên ứng dụng di động là click vào các biểu tượng cảm xúc (emojis) tích hợp sẵn trong dòng hội thoại chat (ví dụ như nút thích/không thích, ngón tay hướng lên/xuống). Cách này truyền trực tiếp ngữ cảnh hội thoại về hệ thống tối ưu hóa.",
    tags: ["Mobile App Feedback", "Micro-Interactions"]
  },
  {
    id: "q17",
    questionNumber: 17,
    text: "What specific function does the '/fix' slash command perform?",
    options: [
      { key: "A", text: "Proposes changes for detected issues, suggesting corrections for syntax errors and programming mistakes." },
      { key: "B", text: "Converts pseudocode into executable code, optimizing for readability and maintainability." },
      { key: "C", text: "Generates new code snippets based on language syntax and best practices." },
      { key: "D", text: "Initiates a code review with static analysis tools for security and logic errors." }
    ],
    correctAnswers: ["A"],
    category: "Features & Optimization",
    explanation: "Lệnh '/fix' được thiết kế đặc biệt để phân tích đoạn code bị lỗi lỗi cú pháp hoặc lỗi logic, từ đó đưa ra đề xuất vá lỗi trực tiếp kèm theo giải thích nguyên nhân rõ ràng, giúp tăng hiệu suất sửa lỗi (debug) tại chỗ cho lập trình viên.",
    tags: ["Slash Commands", "Debugging"]
  },
  {
    id: "q18",
    questionNumber: 18,
    text: "Which GitHub Copilot pricing plans include features that exclude your GitHub Copilot data like usage, prompts, and suggestions from default training GitHub Copilot? (Choose two.)",
    options: [
      { key: "A", text: "GitHub Copilot Codespace" },
      { key: "B", text: "GitHub Copilot Business" },
      { key: "C", text: "GitHub Copilot Individual" },
      { key: "D", text: "GitHub Copilot Enterprise" }
    ],
    correctAnswers: ["B", "D"],
    category: "Security & Licensing",
    explanation: "Đối với tài khoản Doanh nghiệp (Business & Enterprise), hệ thống áp dụng cơ chế bảo mật nghiêm ngặt loại trừ hoàn toàn dữ liệu mã nguồn, câu lệnh và phản hồi của lập trình viên khỏi mô hình huấn luyện công cộng. Ở gói Cá nhân (Individual), dữ liệu có thể được sử dụng làm thông tin cải tiến mô hình trừ phi lập trình viên chủ động tắt chúng trong tài khoản.",
    tags: ["Data Privacy", "Corporate Subscriptions"]
  },
  {
    id: "q19",
    questionNumber: 19,
    text: "When using an IDE with a supported GitHub Copilot plug-in, which Chat features can be accessed from within the IDE? (Choose two.)",
    options: [
      { key: "A", text: "Explain code and suggest improvements" },
      { key: "B", text: "Find out about releases and commits" },
      { key: "C", text: "Generate unit tests" },
      { key: "D", text: "Plan coding tasks" }
    ],
    correctAnswers: ["A", "C"],
    category: "Features & Optimization",
    explanation: "Hai tính năng mở rộng hữu ích nhất ngay trong bảng Chat IDE của Copilot là: giải thích cơ chế đoạn mã chưa biết kèm đề xuất cải tiến tối ưu (A); và tạo khung mã kiểm thử đơn vị tự động phù hợp với framework hiện tại (C) qua lệnh /tests.",
    tags: ["IDE Integrations", "Unit Tests Scaffold"]
  },
  {
    id: "q20",
    questionNumber: 20,
    text: "Which Copilot Enterprise features are available in all commercially supported IDEs?",
    options: [
      { key: "A", text: "Knowledge bases" },
      { key: "B", text: "Chat" },
      { key: "C", text: "Inline suggestions" },
      { key: "D", text: "Pull request summaries" }
    ],
    correctAnswers: ["B", "C"],
    category: "Features & Optimization",
    explanation: "Độc lập với dòng IDE kết nối (VS Code, Visual Studio, JetBrains, Neovim), hai tính năng cốt lõi luôn khả dụng ở mọi nền tảng là: Khung hội thoại AI Chat (B) và Cơ chế tự động đề xuất mã nguồn thông minh dạng văn bản mờ trực tiếp tại con trỏ (C).",
    tags: ["Supported Editor Platforms", "Core Features"]
  },
  {
    id: "q21",
    questionNumber: 21,
    text: "What two options navigate to configure duplicate detection? (Choose two.)",
    options: [
      { key: "A", text: "Organization settings → Copilot → Policies" },
      { key: "B", text: "Enterprise settings → Copilot → Policies" },
      { key: "C", text: "Repository settings → Copilot → Policies" },
      { key: "D", text: "User settings → Copilot → Policies" }
    ],
    correctAnswers: ["A", "B"],
    category: "Security & Licensing",
    explanation: "Việc cấu hình phát hiện và chặn các đoạn mã trùng lặp với kho mã nguồn công cộng là chính sách cấp độ chính sách hệ thống. Chỉ người quản trị có quyền thiết lập ở trang cấu hình Cấp tổ chức (Organization) (A) hoặc Cấp cấu hình doanh nghiệp liên hợp (Enterprise) (B).",
    tags: ["Duplicate Code Filter", "Policy Configurations"]
  },
  {
    id: "q22",
    questionNumber: 22,
    text: "What kind of insights can the GitHub Copilot usage metrics API provide to help evaluate the effectiveness of GitHub Copilot? (Choose two.)",
    options: [
      { key: "A", text: "The API can generate detailed reports on code quality improvements made by GitHub Copilot." },
      { key: "B", text: "The API can track the number of code suggestions accepted and used in the organization." },
      { key: "C", text: "The API can provide feedback on coding style and standards compliance." },
      { key: "D", text: "The API can provide Copilot Chat specific suggestions acceptance metrics." }
    ],
    correctAnswers: ["B", "D"],
    category: "Features & Optimization",
    explanation: "Usage metrics API cho phép tổ chức đo lường hiệu suất thông qua: (B) Số lượng gợi ý mã được chấp nhận (accept) đưa vào codebase và (D) Thống kê tỷ lệ chấp nhận phản hồi riêng biệt của kênh Copilot Chat.",
    tags: ["Metrics API", "Adoption Analytics"]
  },
  {
    id: "q23",
    questionNumber: 23,
    text: "How do you generate code suggestions with GitHub Copilot in the CLI?",
    options: [
      { key: "A", text: "Describe the project’s architecture → Use the copilot generate command → Accept the generated suggestion." },
      { key: "B", text: "Type out the code snippet → Use the copilot refine command to enhance it → Review the suggested command." },
      { key: "C", text: "Write code comments → Press the suggestion shortcut → Select the best suggestion from the list." },
      { key: "D", text: "Use ‘gh copilot suggest’ → Write the command you want → Select the best suggestion from the list." }
    ],
    correctAnswers: ["D"],
    category: "Features & Optimization",
    explanation: "Đối với môi trường dòng lệnh (CLI), lệnh tiêu chuẩn là sử dụng cú pháp 'gh copilot suggest' làm điểm mốc đầu tiên (D), tiếp theo là viết yêu cầu bằng ngôn ngữ tự nhiên, hệ thống sẽ đề xuất các lệnh shell, Git hoặc CLI phù hợp nhất.",
    tags: ["CLI Copilot", "Command Line Helper"]
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
      { key: "E", text: "Alternative code suggestions can be shown in a new tab" }
    ],
    correctAnswers: ["D", "E"],
    category: "Features & Optimization",
    explanation: "Tính năng tiện ích của Copilot cho phép: Chấp nhận từng từ một cách tăng dần qua tổ hợp phím tắt (D) (ví dụ: Ctrl + Mũi tên phải) và Mở một tab phụ riêng biệt để duyệt qua tới 10 phương án gợi ý mã thay thế khác nhau cùng lúc (E).",
    tags: ["IDE Shortcuts", "Multi-completions view"]
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
      { key: "E", text: "Your content exclusion is active and blocks the use of GitHub Copilot" }
    ],
    correctAnswers: ["A", "D", "E"],
    category: "Features & Optimization",
    explanation: "Khi Copilot ngừng hoạt động đột ngột, nguyên nhân cốt lõi thường thuộc nhóm: mất kết nối internet (A) vì Copilot cần kết nối máy chủ OpenAI/GitHub để suy luận; bạn chưa có hoặc hết hạn giấy phép sử dụng hợp lệ (D); hoặc tệp tin đang mở nằm trong danh mục loại trừ chính sách bảo mật nội bộ của tổ chức (Content Exclusion) (E).",
    tags: ["Troubleshooting", "Service Errors"]
  },
  {
    id: "q26",
    questionNumber: 26,
    text: "How can the insights gained from the metrics API be used to improve the development process in conjunction with GitHub Copilot?",
    options: [
      { key: "A", text: "Real-time debugging and error resolution statistics." },
      { key: "B", text: "Automated generation of complete project documentation." },
      { key: "C", text: "Detailed analysis of GitHub Copilot’s suggestions vs. manual coding." },
      { key: "D", text: "Insights on the types of coding languages where GitHub Copilot is most helpful." }
    ],
    correctAnswers: ["C", "D"],
    category: "Features & Optimization",
    explanation: "Dữ liệu phân tích hiệu năng giúp kỹ sư trưởng đánh giá: Tỷ lệ viết mã thủ công so với mã có sự hỗ trợ của AI (C); và nhận diện ngôn ngữ lập trình nào trong hệ thống đang tối ưu hóa được năng suất cao nhất nhờ vào Copilot (D).",
    tags: ["Analytics", "Enterprise Admin Metrics"]
  },
  {
    id: "q27",
    questionNumber: 27,
    text: "How can users provide feedback about GitHub Copilot Chat using their IDE?",
    options: [
      { key: "A", text: "By emailing the support team directly." },
      { key: "B", text: "Through the “Share Feedback” button in the Copilot Chat panel." },
      { key: "C", text: "By filling out a feedback form on the GitHub website." },
      { key: "D", text: "By posting on the GitHub forums." }
    ],
    correctAnswers: ["B"],
    category: "Features & Optimization",
    explanation: "Kênh phản hồi nhanh nhất và được đề xuất ngay trên thanh giao diện Chat của IDE là nút tiện ích 'Share Feedback' (B), giúp chụp kèm thông tin kỹ thuật không nhạy cảm gửi về đội ngũ phát triển sản phẩm cải tiến thuật toán.",
    tags: ["IDE Panel Tools", "User Comments System"]
  },
  {
    id: "q28",
    questionNumber: 28,
    text: "GitHub Copilot in the Command Line Interface (CLI) can be used to configure the following settings: (Choose two.)",
    options: [
      { key: "A", text: "Usage analytics" },
      { key: "B", text: "The default editor" },
      { key: "C", text: "The default execution confirmation" },
      { key: "D", text: "GitHub CLI subcommands" }
    ],
    correctAnswers: ["A", "C"],
    category: "Features & Optimization",
    explanation: "Trong môi trường CLI, lập trình viên có thể cấu hình: Bật/Tắt việc gửi dữ liệu phân tích tần suất sử dụng (Usage Analytics) (A) và Quy định có yêu cầu xác nhận gõ phím trước khi chạy thử câu lệnh sinh ra tự động hay không (C) để tránh rủi ro phá hủy hệ thống.",
    tags: ["CLI Configurations", "Execution Safety Gate"]
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
      { key: "E", text: "documentation" }
    ],
    correctAnswers: ["B", "C", "E"],
    category: "Features & Optimization",
    explanation: "Cơ sở tri thức (Knowledge Base) của Copilot được thiết kế để giải nghĩa và xử lý thông tin dạng text có cấu trúc: các khối mã lập trình cụ thể (B), mô hình thiết kế tối ưu hệ thống (C) và các tài liệu hướng dẫn kỹ thuật dạng Markdown (E). Nó hoàn toàn không đọc hiểu các tệp nhị phân đã biên dịch (A).",
    tags: ["Knowledge Base Scope", "Enterprise Features"]
  },
  {
    id: "q30",
    questionNumber: 30,
    text: "What is the primary purpose of organization audit logs in GitHub Copilot Business?",
    options: [
      { key: "A", text: "To track the number of lines of code suggested by Copilot" },
      { key: "B", text: "To assign software licenses within the organization" },
      { key: "C", text: "To monitor code conflicts across repositories" },
      { key: "D", text: "To monitor administrator activities and actions within the organization" }
    ],
    correctAnswers: ["D"],
    category: "Security & Licensing",
    explanation: "Sổ nhật ký kiểm toán (Audit Logs) của tổ chức hướng tới quản lý an ninh hệ thống và phân quyền: nó ghi chú toàn bộ hành động chỉnh sửa cài đặt, thêm bớt quyền quản trị hoặc cấp/thu hồi giấy phép sử dụng thực thi bởi các quản trị viên doanh nghiệp (D). Giao diện này không có mục đích theo dõi số dòng mã code đơn lẻ viết ra hàng ngày.",
    tags: ["Governance", "Audit Trails Tracker"]
  },
  {
    id: "q31",
    questionNumber: 31,
    text: "How does GitHub Copilot Enterprise assist in code reviews during the pull request process? (Choose two.)",
    options: [
      { key: "A", text: "It generates a prose summary and bulleted list of key changes for pull requests." },
      { key: "B", text: "It can answer questions about the changeset of the pull request." },
      { key: "C", text: "It automatically merges pull requests after an automated review." },
      { key: "D", text: "It can validate the accuracy of the changes in the pull request." }
    ],
    correctAnswers: ["A", "B"],
    category: "Features & Optimization",
    explanation: "GitHub Copilot hỗ trợ duyệt mã (Code Review) thông qua: (A) Tự động viết tóm tắt tệp thay đổi (PR Summary) dưới dạng văn bản và danh sách các điểm chỉnh sửa cốt lõi; và (B) Cho phép người duyệt code trực tiếp chất vấn Chatbot về phân đoạn mã nguồn thay đổi nâng cao hiệu suất thấu hiểu ngữ cảnh.",
    tags: ["Code Reviews", "PR Diagnostics summary"]
  },
  {
    id: "q32",
    questionNumber: 32,
    text: "How can you get multiple suggestions from GitHub Copilot?",
    options: [
      { key: "A", text: "By using the inline chat functionality with the command/multiple" },
      { key: "B", text: "By using @workspace in the chat window" },
      { key: "C", text: "By opening the completions panel in your editor" },
      { key: "D", text: "By asking for multiple suggestions using comments in your code" }
    ],
    correctAnswers: ["C"],
    category: "Features & Optimization",
    explanation: "Để xem danh sách nhiều cấu trúc mã gợi ý thay thế cùng lúc, lập trình viên mở bảng hiển thị đầy đủ gợi ý (Completions Panel) thông qua phím tắt mặc định (như Alt + ] hoặc Ctrl + Enter trên Windows) để so sánh lựa chọn tối ưu nhất phù hợp bài toán.",
    tags: ["Completions Window", "Aesthetic coding options"]
  },
  {
    id: "q33",
    questionNumber: 33,
    text: "What configuration needs to be set to get help from Microsoft and GitHub protecting against IP infringement while using GitHub Copilot?",
    options: [
      { key: "A", text: "Enforce blocking of MIT or GPL licensed code" },
      { key: "B", text: "Enable GitHub Copilot license checking" },
      { key: "C", text: "Suggestions matching public code to ‘blocked’. You need to check code suggestions yourself before accepting" }
    ],
    correctAnswers: ["C"],
    category: "Security & Licensing",
    explanation: "Để nhận hỗ trợ pháp lý bảo vệ bản quyền sở hữu trí tuệ từ Microsoft/GitHub, tài khoản của bạn phải kích hoạt chính sách cấu hình lựa chọn: 'Chặn các gợi ý trùng lặp với mã nguồn công cộng trên mạng (Suggestions matching public code).' Bạn vẫn phải tự thẩm định trực tiếp trước khi nhấn nút Accept mã.",
    tags: ["IP Infringement Protection", "Settings Configuration"]
  },
  {
    id: "q34",
    questionNumber: 34,
    text: "What method can be used to interact with GitHub Copilot?",
    options: [
      { key: "A", text: "From a watch window in an IDE debug session" },
      { key: "B", text: "By using a properly configured GitHub CLI" },
      { key: "C", text: "From a web browser at https://github.copilot.com" },
      { key: "D", text: "By using chat capabilities in NeoVim" }
    ],
    correctAnswers: ["A"],
    category: "Features & Optimization",
    explanation: "Copilot hỗ trợ tương tác trực tiếp bằng cách tích hợp sâu vào thanh công cụ giám sát biến (Watch Window) ngay trong phiên thực thi thử nghiệm mã nguồn (Debug Session) của Visual Studio/VS Code để phân tích nội dung Call Stack sinh gợi ý thích ứng ngữ cảnh thực tế.",
    tags: ["Debugging Tools", "IDE Extensions Integration"]
  },
  {
    id: "q35",
    questionNumber: 35,
    text: "How does GitHub Copilot typically handle code suggestions that involve deprecated features or syntax of programming languages?",
    options: [
      { key: "A", text: "GitHub Copilot always filters out deprecated elements to promote the use of current standards." },
      { key: "B", text: "GitHub Copilot may suggest deprecated syntax or features if they are present in its training data." },
      { key: "C", text: "GitHub Copilot rejects all prompts involving deprecated features to avoid compilation errors." },
      { key: "D", text: "GitHub Copilot automatically updates deprecated features in its suggestions to the latest version." }
    ],
    correctAnswers: ["B"],
    category: "Security & Licensing",
    explanation: "GitHub Copilot hoàn toàn không chủ động nhận thức hoặc đánh giá thực tuyển tính lỗi thời của câu lệnh theo sự phát triển thời gian. Vì vậy, nếu kho huấn luyện công cộng chứa mẫu cũ nhiều lần, nó vẫn tự động sinh ra gợi ý lỗi thời. Trách nhiệm kiểm lọt lỗi này thuộc về lập trình viên.",
    tags: ["Legacy Support", "AI Retraining limitations"]
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
      { key: "E", text: "Capturing the user’s context" }
    ],
    correctAnswers: ["B", "E"],
    category: "Features & Optimization",
    explanation: "Một chu trình sinh gợi ý đơn tuyến (Single cycle) của Copilot bao gồm hai thao tác nền tảng: Thu thập và chuẩn hóa thông tin ngữ cảnh lập trình hiện trạng người dùng (Capturing user's context) (E); và Chuyển tham số đó đưa vào nhân xử lý mô hình sinh ra gợi ý phản hồi mờ (Generate suggestions) (B). Các thao tác telemetry hay retraining hoạt động độc lập không đồng bộ ngoại tuyến.",
    tags: ["Request Pipeline", "Generative Life Cycle"]
  },
  {
    id: "q37",
    questionNumber: 37,
    text: "What role does the pre-processing of user input play in the data flow of GitHub Copilot Chat?",
    options: [
      { key: "A", text: "It formats the output response before presenting it to the user." },
      { key: "B", text: "It filters out irrelevant information from the user’s input prompt." },
      { key: "C", text: "It enriches the input prompt with additional context before passing it to the language model." },
      { key: "D", text: "It directly generates a response based on the user’s input prompt." }
    ],
    correctAnswers: ["C"],
    category: "Features & Optimization",
    explanation: "Tiền xử lý (Pre-processing) đóng vai trò then chốt: Chụp lại thông tin lớp ngữ cảnh rộng lớn xung quanh con trỏ (file lân cận đang mở, cấu trúc biến lớp đang kế thừa) rồi ghép kèm vào câu lệnh prompt của lập trình viên để chuyển cho mô hình LLM có đủ dữ liệu gốc đưa ra gợi ý may đo hoàn hảo.",
    tags: ["Prompt enrichment", "Contextual Framing"]
  },
  {
    id: "q38",
    questionNumber: 38,
    text: "What is the impact of the “Fill-In-the-Middle” (FIM) technique on GitHub Copilot’s code suggestions?",
    options: [
      { key: "A", text: "Improves suggestions by considering both the prefix and suffix of the code, filling in the middle part more accurately." },
      { key: "B", text: "Restricts Copilot to use only external databases for generating code suggestions." },
      { key: "C", text: "Allows Copilot to generate suggestions based only on the prefix of the code." },
      { key: "D", text: "Ignores both the prefix and suffix of the code, focusing only on user comments for context." }
    ],
    correctAnswers: ["A"],
    category: "Features & Optimization",
    explanation: "Cơ chế 'Điền vào khoảng giữa' (Fill-In-the-Middle - FIM) nâng tầm vượt trội độ chính xác gợi ý: Thay vì chỉ nhìn phần mã nguồn đã viết phía trên con trỏ (Prefix), hệ thống quan sát phân tích cả khối code tiếp diễn bên dưới con trỏ (Suffix) để lồng ghép gợi ý khớp chính xác từng tham số giao diện.",
    tags: ["FIM Engine", "Birectional context"]
  },
  {
    id: "q39",
    questionNumber: 39,
    text: "What is used by GitHub Copilot in the IDE to determine the prompt context?",
    options: [
      { key: "A", text: "Information from the IDE like open tabs, cursor location, selected code." },
      { key: "B", text: "All the code visible in the current IDE." },
      { key: "C", text: "All the code in the current repository and any git submodules." },
      { key: "D", text: "The open tabs in the IDE and the current folder of the terminal." }
    ],
    correctAnswers: ["A"],
    category: "Features & Optimization",
    explanation: "Để không áp hại dung lượng bộ nhớ thiết bị, Copilot chỉ lọc quét tập hợp ngữ cảnh gần: Danh sách các tab tệp tài liệu lập trình đang mở đồng thời sát bên, vị trí thực tế của con trỏ hiện tại, và đoạn văn mã đang được kỹ sư tô đen bôi chọn (A).",
    tags: ["Context Boundaries", "Workspace Analytics"]
  },
  {
    id: "q40",
    questionNumber: 40,
    text: "When crafting prompts for GitHub Copilot, what is a recommended strategy to enhance the relevance of the generated code?",
    options: [
      { key: "A", text: "Keep the prompt as short as possible, using single words or brief phrases." },
      { key: "B", text: "Provide examples of expected input and output within the prompt." },
      { key: "C", text: "Avoid mentioning the programming language to allow for more flexible suggestions." },
      { key: "D", text: "Write the prompt in natural language without any programming language." }
    ],
    correctAnswers: ["B"],
    category: "Features & Optimization",
    explanation: "Nguyên tắc vàng của viết Prompt tối ưu là áp dụng Few-shot Learning: Cung cấp trực tiếp 1-2 mẫu kết quả đầu vào (input) và định dạng xuất mong đợi cụ thể (output) để giới hạn chính xác phạm vi tính toán của mô hình ngôn ngữ lớn AI.",
    tags: ["Prompt Engineering", "Few-shot Learning"]
  },
  {
    id: "q41",
    questionNumber: 41,
    text: "A developer wants to use custom code instructions in GitHub Copilot. What file extension and directory should they use to define custom system prompts for their repository?",
    options: [
      { key: "A", text: ".github/copilot-instructions.md" },
      { key: "B", text: ".copilot/instructions.txt" },
      { key: "C", text: "copilot-config.json" },
      { key: "D", text: ".github/workflows/copilot.yml" }
    ],
    correctAnswers: ["A"],
    category: "Features & Optimization",
    explanation: "Để định nghĩa các hướng dẫn và quy tắc tùy biến cho Copilot trong một repository cụ thể, nhà phát triển tạo tệp `.github/copilot-instructions.md`. Copilot sẽ tự động quét tệp này để căn chỉnh phong cách viết code, chuẩn coding và quy tắc đặt tên phù hợp với tổ chức.",
    tags: ["Custom Instructions", "Workspace Rules"]
  },
  {
    id: "q42",
    questionNumber: 42,
    text: "Which feature of GitHub Copilot is specifically designed to draft regular expressions or complex algorithms based on comments?",
    options: [
      { key: "A", text: "Copilot Workspace" },
      { key: "B", text: "Inline suggestions" },
      { key: "C", text: "Pull request summaries" },
      { key: "D", text: "Copilot Chat" }
    ],
    correctAnswers: ["B"],
    category: "Features & Optimization",
    explanation: "Tính năng gợi ý trực tiếp (Inline suggestions) tự động phân tích dòng chú thích viết bằng ngôn ngữ tự nhiên (ví dụ: // write a regex to validate email) và sinh ra mã nguồn tương ứng ngay tại vị trí con trỏ.",
    tags: ["Inline suggestions", "Regex Drafting"]
  },
  {
    id: "q43",
    questionNumber: 43,
    text: "When using GitHub Copilot Individual, who is responsible for managing and purchasing the subscription?",
    options: [
      { key: "A", text: "The Organization Owner" },
      { key: "B", text: "The Billing Manager" },
      { key: "C", text: "The Enterprise Administrator" },
      { key: "D", text: "The Individual User" }
    ],
    correctAnswers: ["D"],
    category: "Security & Licensing",
    explanation: "Với gói Cá nhân (Individual), chính người dùng cuối (lập trình viên cá nhân) tự mua, thiết lập phương thức thanh toán và quản lý dung lượng sử dụng trên tài khoản cá nhân của họ.",
    tags: ["Licensing Plans", "Individual Billing"]
  },
  {
    id: "q44",
    questionNumber: 44,
    text: "Who qualifies for a free subscription to GitHub Copilot Individual? (Choose two.)",
    options: [
      { key: "A", text: "Verified Students" },
      { key: "B", text: "Popular open-source maintainers" },
      { key: "C", text: "Microsoft MVP developers" },
      { key: "D", text: "Any GitHub organization member" }
    ],
    correctAnswers: ["A", "B"],
    category: "Security & Licensing",
    explanation: "GitHub cung cấp dịch vụ Copilot Individual miễn phí dành cho Học sinh/Sinh viên đã được xác minh qua chương trình GitHub Student Developer Pack (A) và các Duy trì viên (maintainers) của các dự án nguồn mở phổ biến trên GitHub (B).",
    tags: ["Licensing Plans", "Free Subscriptions"]
  },
  {
    id: "q45",
    questionNumber: 45,
    text: "What does the 'Knowledge Base' feature do in GitHub Copilot Enterprise?",
    options: [
      { key: "A", text: "It hosts external tutorials" },
      { key: "B", text: "It indexes specific repositories to answer domain-specific questions" },
      { key: "C", text: "It translates code from other companies" },
      { key: "D", text: "It stores API keys securely" }
    ],
    correctAnswers: ["B"],
    category: "Features & Optimization",
    explanation: "Cơ sở tri thức (Knowledge Base) cho phép doanh nghiệp chỉ định các kho mã nguồn nội bộ hoặc tài liệu hướng dẫn cụ thể để huấn luyện ảo cho Copilot. Từ đó lập trình viên có thể truy vấn các câu hỏi chuyên sâu mang tính đặc thù nội bộ.",
    tags: ["Knowledge Base", "Enterprise Scope"]
  },
  {
    id: "q46",
    questionNumber: 46,
    text: "When working in an enterprise environment, which Copilot plan offers fine-tuning on your private codebase?",
    options: [
      { key: "A", text: "Copilot Individual" },
      { key: "B", text: "Copilot Business" },
      { key: "C", text: "Copilot Enterprise" },
      { key: "D", text: "All of the above" }
    ],
    correctAnswers: ["C"],
    category: "Security & Licensing",
    explanation: "Gói Copilot Enterprise cung cấp khả năng tích hợp sâu hơn như tích hợp trực tiếp cơ sở tri thức (Knowledge Base) định danh từ mã nguồn riêng và tối ưu hóa các mô hình tùy biến cho một số nhóm doanh nghiệp đặc thù.",
    tags: ["Licensing Plans", "Fine-Tuning"]
  },
  {
    id: "q47",
    questionNumber: 47,
    text: "Which of the following is true about how Copilot uses context from surrounding files?",
    options: [
      { key: "A", text: "Copilot only reads the current line" },
      { key: "B", text: "Copilot reads the active file and sometimes other open tabs in the editor" },
      { key: "C", text: "Copilot scans the entire local hard drive for files" },
      { key: "D", text: "Copilot only reads files listed in package.json" }
    ],
    correctAnswers: ["B"],
    category: "Features & Optimization",
    explanation: "Thuật toán thu thập ngữ cập của Copilot (chạy ngầm trong IDE) sẽ ưu tiên quét tệp đang mở hiện tại và các tab tài liệu mã nguồn đang được mở lân cận để tìm các định nghĩa hàm hoặc các kiểu dữ liệu liên quan để ghép thành prompt hoàn chỉnh.",
    tags: ["Context Boundaries", "Workspace Indexing"]
  },
  {
    id: "q48",
    questionNumber: 48,
    text: "What is the main security benefit of using Copilot Business over Copilot Individual for business development?",
    options: [
      { key: "A", text: "It compiles your code 2x faster" },
      { key: "B", text: "It ensures prompts and suggestions are not retained or used for model training" },
      { key: "C", text: "It automatically patches server exploits" },
      { key: "D", text: "It provides free hardware upgrades" }
    ],
    correctAnswers: ["B"],
    category: "Security & Licensing",
    explanation: "Điểm cộng an ninh cốt lõi của Copilot Business so với bản Individual là cam kết bảo mật cấp doanh nghiệp: mọi câu lệnh prompt và mã sinh ra từ IDE đều được bảo mật tuyệt đối, không lưu vết trên đĩa và không bị dùng để tiếp tục huấn luyện mô hình chung.",
    tags: ["Data Safety", "Data Retention policies"]
  },
  {
    id: "q49",
    questionNumber: 49,
    text: "In VS Code, how can you open the secondary completions panel showing up to 10 suggestions?",
    options: [
      { key: "A", text: "By pressing Ctrl + Alt + Delete" },
      { key: "B", text: "By pressing Ctrl + Enter (or Cmd + Enter / Ctrl + Alt + Enter on macOS)" },
      { key: "C", text: "By double-clicking the code editor screen" },
      { key: "D", text: "By typing '/more' in the chat window" }
    ],
    correctAnswers: ["B"],
    category: "Features & Optimization",
    explanation: "Để xem nhiều gợi ý thay thế cùng lúc dưới dạng một tab chuyên dụng độc lập, phím tắt tiêu chuẩn trong VS Code là Ctrl + Enter (trên Windows) hoặc Cmd + Enter / Ctrl + Alt + Enter (trên macOS).",
    tags: ["Completions view", "IDEs Integration"]
  },
  {
    id: "q50",
    questionNumber: 50,
    text: "How does the 'Content Exclusion' policy work in GitHub Copilot?",
    options: [
      { key: "A", text: "It blocks developers from visiting adult websites" },
      { key: "B", text: "It prevents Copilot from showing suggestions in specific files or directories" },
      { key: "C", text: "It excludes all open source libraries from search" },
      { key: "D", text: "It hides the terminal output" }
    ],
    correctAnswers: ["B"],
    category: "Security & Licensing",
    explanation: "Chính sách Content Exclusion cho phép quản trị viên doanh nghiệp định nghĩa các mẫu đường dẫn hoặc tệp nhạy cảm. Khi lập trình viên thao tác trên các tệp này, plugin Copilot sẽ tự động bị vô hiệu hóa tạm thời để tránh rò rỉ thông tin tối mật.",
    tags: ["Content Exclusion", "Enterprise Policies"]
  },
  {
    id: "q51",
    questionNumber: 51,
    text: "Which of the following is NOT a pre-defined command slash command in Copilot Chat?",
    options: [
      { key: "A", text: "/explain" },
      { key: "B", text: "/tests" },
      { key: "C", text: "/fix" },
      { key: "D", text: "/compile" }
    ],
    correctAnswers: ["D"],
    category: "Features & Optimization",
    explanation: "Các lệnh slash thông dụng gồm có: /explain (giải thích code), /tests (tạo unit tests), /fix (sửa lỗi code), /help. Lệnh `/compile` không phải là lệnh mặc định trong Copilot Chat.",
    tags: ["Slash Commands", "Features Guide"]
  },
  {
    id: "q52",
    questionNumber: 52,
    text: "What is the purpose of the `/tests` slash command in Copilot Chat?",
    options: [
      { key: "A", text: "It runs the compiler to check for syntax errors" },
      { key: "B", text: "It automatically generates unit tests for the selected code" },
      { key: "C", text: "It reports software bugs directly to GitHub Support" },
      { key: "D", text: "It formats the database tables" }
    ],
    correctAnswers: ["B"],
    category: "Features & Optimization",
    explanation: "Lệnh `/tests` giúp tự động sinh ra bộ khung mã kiểm thử đơn vị (unit tests) phù hợp nhất cho đoạn mã được bôi chọn, giúp tăng tốc độ viết mã kiểm thử và nâng độ phủ (coverage) cho dự án.",
    tags: ["Unit Testing", "Slash Commands"]
  },
  {
    id: "q53",
    questionNumber: 53,
    text: "How can a developer prevent certain sensitive files from being sent to Copilot backend for suggestions?",
    options: [
      { key: "A", text: "Deny camera permissions" },
      { key: "B", text: "Define exclusion paths in the organization settings" },
      { key: "C", text: "Save files with a .secret extension" },
      { key: "D", text: "Change the font size of the active file" }
    ],
    correctAnswers: ["B"],
    category: "Security & Licensing",
    explanation: "Để ngăn các tệp nhạy cảm của tổ chức bị gửi lên máy chủ phân tích của Copilot, quản trị viên sử dụng trang cấu hình tổ chức để khai báo đường dẫn loại trừ (Exclusion paths). Mọi thao tác trên tệp này đều bị chặn cục bộ.",
    tags: ["Content Exclusion", "Data Privacy"]
  },
  {
    id: "q54",
    questionNumber: 54,
    text: "In which pricing tier is the 'GitHub Copilot for Azure DevOps' extension available?",
    options: [
      { key: "A", text: "Only in Individual" },
      { key: "B", text: "Only in Business" },
      { key: "C", text: "Only in Enterprise" },
      { key: "D", text: "Available as an add-on or integrated workspace solution" }
    ],
    correctAnswers: ["D"],
    category: "Security & Licensing",
    explanation: "Copilot cho Azure DevOps cho phép tích hợp trực tiếp vào môi trường Azure Repos và Azure Boards, được thiết kế để phục vụ các nhóm đang sử dụng dịch vụ này một cách linh hoạt.",
    tags: ["Azure DevOps", "Licensing Plans"]
  },
  {
    id: "q55",
    questionNumber: 55,
    text: "Which organization role has the authority to assign or revoke Copilot seats in Copilot Business?",
    options: [
      { key: "A", text: "Read-only member" },
      { key: "B", text: "Billing Manager or Organization Owner" },
      { key: "C", text: "Any external collaborator" },
      { key: "D", text: "Normal developer" }
    ],
    correctAnswers: ["B"],
    category: "Security & Licensing",
    explanation: "Chỉ có chủ sở hữu tổ chức (Organization Owner) hoặc Quản lý thanh toán (Billing Manager) mới có đặc quyền thêm bớt, phân bổ chỗ ngồi (seats) và quản lý hóa đơn thanh toán cho Copilot Business.",
    tags: ["Access Control", "Billing Configurations"]
  },
  {
    id: "q56",
    questionNumber: 56,
    text: "What does the Copilot policy 'suggestions matching public code' actually do?",
    options: [
      { key: "A", text: "It forces the developer to write open source code" },
      { key: "B", text: "It checks suggestions against public repositories on GitHub and blocks matching code blocks if set to 'block'" },
      { key: "C", text: "It automatically clones public repositories to local machine" },
      { key: "D", text: "It formats the code style in a uniform manner" }
    ],
    correctAnswers: ["B"],
    category: "Security & Licensing",
    explanation: "Chính sách 'suggestions matching public code' giúp phát hiện các đoạn mã sinh ra dài hơn 150 ký tự trùng khớp với các kho lưu trữ công cộng trên GitHub. Nếu đặt là 'block', nó sẽ tự động lọc bỏ gợi ý đó để bảo vệ bản quyền.",
    tags: ["Public Code Filter", "IP Infringement Protection"]
  },
  {
    id: "q57",
    questionNumber: 57,
    text: "What is the minimum recommended length of code snippet for FIM (Fill-in-the-Middle) to trigger effectively?",
    options: [
      { key: "A", text: "At least a few lines of context before and after the cursor" },
      { key: "B", text: "Exactly 1 character" },
      { key: "C", text: "Minimum 10,000 lines of code" },
      { key: "D", text: "FIM does not need cursor context" }
    ],
    correctAnswers: ["A"],
    category: "Features & Optimization",
    explanation: "Để cơ chế FIM (Fill-in-the-Middle) hoạt động hiệu quả nhất, cần có một lượng ngữ cảnh vừa đủ ở cả phía trên (prefix) và phía dưới (suffix) của con trỏ trong tệp đang viết.",
    tags: ["FIM Engine", "Algorithms"]
  },
  {
    id: "q58",
    questionNumber: 58,
    text: "In Copilot Chat, what does the `@workspace` agent do?",
    options: [
      { key: "A", text: "It formats the OS workspace" },
      { key: "B", text: "It allows you to ask questions about the entire active workspace directory" },
      { key: "C", text: "It deletes unused files from local path" },
      { key: "D", text: "It updates all node packages in package.json" }
    ],
    correctAnswers: ["B"],
    category: "Features & Optimization",
    explanation: "`@workspace` là một Chat Agent thông minh giúp phân tích toàn bộ cấu trúc thư mục dự án đang mở, hỗ trợ tìm kiếm hàm, phân tích tệp tin và trả lời các liên quan đến logic đa file.",
    tags: ["Workspace Agent", "Prompt Context"]
  },
  {
    id: "q59",
    questionNumber: 59,
    text: "What does the `/explain` console slash command do in VS Code?",
    options: [
      { key: "A", text: "Translates selected code to clear explanations in natural language" },
      { key: "B", text: "Writes documentation comments automatically" },
      { key: "C", text: "Fixes syntax errors in current selection" },
      { key: "D", text: "Opens the official help forum of Microsoft" }
    ],
    correctAnswers: ["A"],
    category: "Features & Optimization",
    explanation: "Lệnh `/explain` dịch giải sâu sắc và tóm tắt cơ chế vận hành của dòng code được bôi đen, đặc biệt hữu ích khi tiếp nhận các dự án cũ hoặc mã nguồn viết bằng các ngôn ngữ xa lạ.",
    tags: ["Slash Commands", "Legacy Code"]
  },
  {
    id: "q60",
    questionNumber: 60,
    text: "How is billing calculated for Copilot Business billing cycles?",
    options: [
      { key: "A", text: "Flat yearly fee with unlimited users" },
      { key: "B", text: "Per-seat per-month model with prorated billing for partial months" },
      { key: "C", text: "Pay-per-query model based on AI transactions" },
      { key: "D", text: "Based on lines of code accepted by developer seats" }
    ],
    correctAnswers: ["B"],
    category: "Security & Licensing",
    explanation: "Hóa đơn thanh toán của Copilot Business dựa trên số lượng chỗ ngồi phân bổ thực tế hàng tháng (per-seat per-month). Nếu thêm seats giữa chu kỳ, chi phí sẽ được tính tỷ lệ tương xứng (prorated).",
    tags: ["Billing Calculations", "Enterprise Subscriptions"]
  }
];
