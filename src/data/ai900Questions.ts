import { Question } from '../types';

export const ai900Questions: Question[] = [
  {
    id: "ai1",
    questionNumber: 1,
    text: "Which of the six Microsoft Responsible AI principles ensures that AI systems are understandable, explainable, and documented?",
    options: [
      { key: "A", text: "Inclusiveness" },
      { key: "B", text: "Transparency" },
      { key: "C", text: "Fairness" },
      { key: "D", text: "Accountability" }
    ],
    correctAnswers: ["B"],
    category: "Responsible AI",
    explanation: "Tính minh bạch (Transparency) đòi hỏi hệ thống AI phải được giải thích rõ ràng và có tài liệu hóa đầy đủ để người dùng cuối hiểu được logic ra quyết định của mô hình.",
    tags: ["AI-900", "Transparency"]
  },
  {
    id: "ai2",
    questionNumber: 2,
    text: "You want to train a machine learning model to predict the monetary value of a home based on its size, location, and age. What type of ML task is this?",
    options: [
      { key: "A", text: "Classification" },
      { key: "B", text: "Regression" },
      { key: "C", text: "Clustering" },
      { key: "D", text: "Anomaly Detection" }
    ],
    correctAnswers: ["B"],
    category: "Machine Learning Concepts",
    explanation: "Hồi quy (Regression) được sử dụng để dự đoán một giá trị liên tục hay giá trị số lượng cụ thể (như giá tiền, nhiệt độ, doanh thu). Ngược lại, Phân loại (Classification) dùng để dự đoán nhãn danh mục (như Có/Không, Đạt/Trượt).",
    tags: ["AI-900", "Regression"]
  },
  {
    id: "ai3",
    questionNumber: 3,
    text: "Which Azure Cognitive Service allows you to extract text and data from receipts, invoices, and utility bills?",
    options: [
      { key: "A", text: "Azure AI Document Intelligence (Form Recognizer)" },
      { key: "B", text: "Azure AI Vision" },
      { key: "C", text: "Azure AI Language" },
      { key: "D", text: "Azure AI Speech" }
    ],
    correctAnswers: ["A"],
    category: "Computer Vision Services",
    explanation: "Azure AI Document Intelligence (tên gọi trước đây là Form Recognizer) sử dụng mô hình học máy để trích xuất các cặp khoá-giá trị, bảng biểu, và văn bản từ các tài liệu có cấu trúc như hoá đơn, biên lai.",
    tags: ["AI Services", "Document OCR"]
  },
  {
    id: "ai4",
    questionNumber: 4,
    text: "In natural language processing (NLP), which technique is used to determine the positive, negative, or neutral sentiment of text?",
    options: [
      { key: "A", text: "Entity Recognition" },
      { key: "B", text: "Translational mapping" },
      { key: "C", text: "Sentiment Analysis" },
      { key: "D", text: "Speech Synthesis" }
    ],
    correctAnswers: ["C"],
    category: "Natural Language Processing",
    explanation: "Phân tích cảm xúc (Sentiment Analysis) đánh giá thái độ tinh thần của văn bản viết (như phản hồi của khách hàng) để phân loại thành Tích cực (Positive), Tiêu cực (Negative) hoặc Trung tính (Neutral).",
    tags: ["NLP", "Sentiments"]
  },
  {
    id: "ai5",
    questionNumber: 5,
    text: "According to Microsoft’s Ethical guidelines, developers must have the code reviewed to assure it doesn’t exclude people with disabilities. Which AI principle is this?",
    options: [
      { key: "A", text: "Fairness" },
      { key: "B", text: "Inclusiveness" },
      { key: "C", text: "Reliability and Safety" },
      { key: "D", text: "Privacy and Security" }
    ],
    correctAnswers: ["B"],
    category: "Responsible AI",
    explanation: "Tính toàn diện (Inclusiveness) là nguyên tắc cốt lõi yêu cầu hệ thống AI phải mang lại lợi ích và rào cản truy cập tối thiểu cho mọi người dùng, đặc biệt là hỗ trợ tốt cho người dùng có khuyết tật.",
    tags: ["Inclusive AI", "Accessibility"]
  }
];
