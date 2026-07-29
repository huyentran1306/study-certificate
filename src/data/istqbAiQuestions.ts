import { Question } from '../types';

export const istqbAiQuestions: Question[] = [
  {
    "id": "istqb-1",
    "questionNumber": 1,
    "text": "Which ONE of the below is MOST likely to indicate a problem with underfitting in an ML model?",
    "options": [
      {
        "key": "A",
        "text": "The model is vulnerable to adversarial attacks"
      },
      {
        "key": "B",
        "text": "The model fails to generalize on new data"
      },
      {
        "key": "C",
        "text": "The model uses a large amount of resources to make a prediction"
      },
      {
        "key": "D",
        "text": "The model is inaccurate on data similar to the training data"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Underfitting (Học thiếu / Chưa đủ độ khớp) xảy ra khi mô hình quá đơn giản, không học được cấu trúc ẩn của dữ liệu. Do đó, mô hình sẽ hoạt động kém và KẾM CHÍNH XÁC ngay cả trên dữ liệu huấn luyện (hoặc dữ liệu tương tự dữ liệu huấn luyện).",
    "category": "ML Fundamentals",
    "tags": [
      "Underfitting",
      "Model Quality",
      "Machine Learning"
    ]
  },
  {
    "id": "istqb-2",
    "questionNumber": 2,
    "text": "Which ONE of the below is NOT an input to an activation function in a neural network?",
    "options": [
      {
        "key": "A",
        "text": "Bias"
      },
      {
        "key": "B",
        "text": "Activation values from the previous layer"
      },
      {
        "key": "C",
        "text": "Activation values from the current layer"
      },
      {
        "key": "D",
        "text": "The weights assigned to the connections"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Đầu vào của hàm kích hoạt (activation function) của một neuron được tính từ tổng có trọng số của các giá trị kích hoạt từ LỚP TRƯỚC (previous layer) cộng với Bias. Giá trị kích hoạt của LỚP HIỆN TẠI (current layer) chính là KẾT QUẢ đầu ra chứ không phải đầu vào.",
    "category": "Neural Networks",
    "tags": [
      "Neural Networks",
      "Activation Function",
      "Deep Learning"
    ]
  },
  {
    "id": "istqb-3",
    "questionNumber": 3,
    "text": "Which ONE of the following options is a technology used to implement AI?",
    "options": [
      {
        "key": "A",
        "text": "Genetic algorithms"
      },
      {
        "key": "B",
        "text": "Autonomy"
      },
      {
        "key": "C",
        "text": "Classification"
      },
      {
        "key": "D",
        "text": "Reinforcement learning"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Thuật toán di truyền (Genetic algorithms) là một công nghệ/phương pháp tối ưu hóa và tìm kiếm lấy cảm hứng từ tiến hóa tự nhiên, dùng để triển khai AI. Trong khi đó, Autonomy là đặc tính, Classification là bài toán, và Reinforcement Learning là phương pháp học.",
    "category": "AI Concepts",
    "tags": [
      "Genetic Algorithms",
      "AI Implementation",
      "AI Technologies"
    ]
  },
  {
    "id": "istqb-4",
    "questionNumber": 4,
    "text": "Which ONE of the following statements about the hardware used to implement ML systems is MOST likely to be correct?",
    "options": [
      {
        "key": "A",
        "text": "Specialist hardware is necessary for ML"
      },
      {
        "key": "B",
        "text": "Less bits are required for hardware supporting ML"
      },
      {
        "key": "C",
        "text": "Support for complex operations is required"
      },
      {
        "key": "D",
        "text": "A higher clock speed is required"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Phần cứng chuyên dụng cho Machine Learning (như TPU, GPU) thường sử dụng định dạng độ chính xác thấp hơn (ít bit hơn như FP16, INT8, BF16) để tối ưu hóa tính toán ma trận, tăng tốc độ xử lý và tiết kiệm băng thông bộ nhớ.",
    "category": "AI Hardware",
    "tags": [
      "Hardware",
      "Machine Learning",
      "Quantization"
    ]
  },
  {
    "id": "istqb-5",
    "questionNumber": 5,
    "text": "Which TWO of the below examples of systems BEST describe regression?\n1. Predicting the age of a person\n2. Predicting if someone is aged over 18\n3. Predicting how much fuel is required for a journey\n4. Predicting whether a release will pass all required tests",
    "options": [
      {
        "key": "A",
        "text": "1, 3"
      },
      {
        "key": "B",
        "text": "1, 4"
      },
      {
        "key": "C",
        "text": "2, 3"
      },
      {
        "key": "D",
        "text": "1, 2"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Kiểm thử biến đổi hình thái (Metamorphic testing) dựa trên việc xác định mối quan hệ biến đổi (Metamorphic Relations - MR) giữa các đầu vào và đầu ra của nhiều lần chạy. Kỹ thuật này giải quyết triệt để 'Bài toán Oracle kiểm thử' (Test Oracle Problem) khi không có kết quả kỳ vọng chính xác.",
    "category": "ML Fundamentals",
    "tags": [
      "Regression",
      "Classification",
      "Supervised Learning"
    ]
  },
  {
    "id": "istqb-6",
    "questionNumber": 6,
    "text": "Which of the following statements about bias in AI-based systems is MOST correct?",
    "options": [
      {
        "key": "A",
        "text": "Inappropriate bias is caused by overweighting of particular classes in algorithms"
      },
      {
        "key": "B",
        "text": "Inappropriate bias is caused by data used for training not being representative of the real world"
      },
      {
        "key": "C",
        "text": "Inappropriate bias only affects ML systems that process data about people"
      },
      {
        "key": "D",
        "text": "Inappropriate bias can be caused by aspects of the algorithm or the data"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Nhiễu dữ liệu (Data noise) đề cập đến dữ liệu chứa lỗi, giá trị ngoại lệ (outliers) hoặc thông tin không liên quan/không chính xác, có thể làm biến dạng quá trình huấn luyện mô hình.",
    "category": "Ethics & Bias",
    "tags": [
      "Bias",
      "Sample Bias",
      "Data Quality"
    ]
  },
  {
    "id": "istqb-7",
    "questionNumber": 7,
    "text": "Which of the below is NOT a characteristic that makes it difficult to use AI-based systems?",
    "options": [
      {
        "key": "A",
        "text": "Complexity"
      },
      {
        "key": "B",
        "text": "Lack of standards"
      },
      {
        "key": "C",
        "text": "Lack of robustness"
      },
      {
        "key": "D",
        "text": "Lack of transparency"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Kiểm thử dựa trên mô hình (Model-Based Testing - MBT) giúp tự động hóa việc tạo kịch bản kiểm thử từ các mô hình thiết kế hệ thống, giúp giảm đáng kể công sức tạo test case thủ công.",
    "category": "Quality Characteristics",
    "tags": [
      "Characteristics",
      "Transparency",
      "Complexity"
    ]
  },
  {
    "id": "istqb-8",
    "questionNumber": 8,
    "text": "Which of the following options BEST describes an example of reinforcement learning?",
    "options": [
      {
        "key": "A",
        "text": "A house cleaning robot adjusts the path it takes on a daily basis based on the most efficient route and the amount of dirt it is able to remove."
      },
      {
        "key": "B",
        "text": "A financial system that chooses which stocks to buy regularly optimizes based on new changes in stock price to improve its performance."
      },
      {
        "key": "C",
        "text": "An image recognition system regularly searches the internet to find new examples to add to its training data."
      },
      {
        "key": "D",
        "text": "A health warning system uses data from thousands of people to predict who is most likely to suffer from a particular health condition based on their behavior."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Exploratory Data Analysis (EDA - Phân tích dữ liệu khám phá) là quá trình sơ bộ dùng các kỹ thuật thống kê và biểu đồ để hiểu cấu trúc dữ liệu, phát hiện bất thường và tìm ra mối quan hệ giữa các biến trước khi huấn luyện.",
    "category": "ML Fundamentals",
    "tags": [
      "Reinforcement Learning",
      "Reward Function",
      "Agent"
    ]
  },
  {
    "id": "istqb-9",
    "questionNumber": 9,
    "text": "Which ONE of the following statements is MOST true in relation to A/B testing?",
    "options": [
      {
        "key": "A",
        "text": "Many test cases can be generated"
      },
      {
        "key": "B",
        "text": "The purpose is to detect defects"
      },
      {
        "key": "C",
        "text": "Production data is not used"
      },
      {
        "key": "D",
        "text": "The purpose is to compare two variants of a system"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Sự phụ thuộc vào dữ liệu huấn luyện (Training data dependency) khiến hệ thống AI có nguy cơ kế thừa rủi ro định kiến (bias), dữ liệu bị gán nhãn sai hoặc thiếu dữ liệu đại diện.",
    "category": "Test Techniques",
    "tags": [
      "A/B Testing",
      "Production Testing",
      "System Variants"
    ]
  },
  {
    "id": "istqb-10",
    "questionNumber": 10,
    "text": "Which ONE of the following statements provides the BEST description of the AI effect?",
    "options": [
      {
        "key": "A",
        "text": "As AI systems improve, the likelihood of reaching the technological singularity increases."
      },
      {
        "key": "B",
        "text": "AI systems get better over time as they are exposed to more data."
      },
      {
        "key": "C",
        "text": "The systems used to play chess against human experts in the 1990's are no longer considered AI."
      },
      {
        "key": "D",
        "text": "AI systems increasingly behave like humans."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Học có giám sát (Supervised learning) sử dụng dữ liệu đã được gán nhãn sẵn (labeled data) gồm cả thuộc tính đầu vào (features) và kết quả mục tiêu (labels) để huấn luyện mô hình.",
    "category": "AI Concepts",
    "tags": [
      "AI Effect",
      "AI History",
      "Perception"
    ]
  },
  {
    "id": "istqb-11",
    "questionNumber": 11,
    "text": "While measuring the test coverage of a neural network, a test engineer wants to measure the number of neurons that have each output two activation function results with a minimum difference between the two results of 0.5. Which ONE of the below coverage measures would achieve that goal?",
    "options": [
      {
        "key": "A",
        "text": "Neuron coverage"
      },
      {
        "key": "B",
        "text": "Value-change coverage"
      },
      {
        "key": "C",
        "text": "Sign-change coverage"
      },
      {
        "key": "D",
        "text": "None of the coverage measures"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Độ chênh lệch quá lớn giữa kết quả trên tập huấn luyện (training error rất thấp) và tập kiểm thử (test error rất cao) là dấu hiệu điển hình của hiện tượng Overfitting (Học quá trình / Quá khớp).",
    "category": "Coverage Criteria",
    "tags": [
      "Value-Change Coverage",
      "Neural Network Coverage",
      "White-Box Testing"
    ]
  },
  {
    "id": "istqb-12",
    "questionNumber": 12,
    "text": "Which ONE of the below is MOST likely to be a challenge in ML data preparation?",
    "options": [
      {
        "key": "A",
        "text": "The time and associated costs required"
      },
      {
        "key": "B",
        "text": "Functional performance"
      },
      {
        "key": "C",
        "text": "Designing a reward function"
      },
      {
        "key": "D",
        "text": "Specification of acceptance criteria"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Mô hình Phân loại (Classification) sắp xếp các đầu vào vào các lớp/danh mục hữu hạn định trước (ví dụ: Spam / Not Spam, Lành tính / Ác tính).",
    "category": "Data Preparation",
    "tags": [
      "Data Preparation",
      "Cost & Time",
      "ML Pipeline"
    ]
  },
  {
    "id": "istqb-13",
    "questionNumber": 13,
    "text": "You are evaluating the use of a highly accurate pre-trained model that is used widely in industry for a similar use case. There is an intention to apply transfer learning techniques to further customize the model. Which ONE of the following is the LEAST likely to be a significant risk with this approach?",
    "options": [
      {
        "key": "A",
        "text": "The functional performance of the system may exhibit bias"
      },
      {
        "key": "B",
        "text": "The system may be vulnerable to adversarial attacks inherited from the pre-trained model"
      },
      {
        "key": "C",
        "text": "Differences in data preparation steps between the training of the pre-trained model and consequent use of the model may result in reduced functional performance"
      },
      {
        "key": "D",
        "text": "The functional performance of the pre-trained model could be lower than stakeholders expect"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Kiểm thử đối kháng (Adversarial testing) cố tình tạo ra các nhiễu nhỏ không đáng kể đối với con người (Adversarial examples) để kiểm tra xem mô hình AI có bị lừa dẫn đến dự đoán sai lệch hay không.",
    "category": "Transfer Learning",
    "tags": [
      "Transfer Learning",
      "Risk Analysis",
      "Pre-trained Models"
    ]
  },
  {
    "id": "istqb-14",
    "questionNumber": 14,
    "text": "Which ONE of the below is NOT likely to cause a data quality issue affecting a single ML model?",
    "options": [
      {
        "key": "A",
        "text": "Security issues"
      },
      {
        "key": "B",
        "text": "Hardware issues"
      },
      {
        "key": "C",
        "text": "Incorrect weights"
      },
      {
        "key": "D",
        "text": "Faulty sensors"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Tính giải thích được (Explainability) là khả năng hệ thống AI cung cấp các lý do hoặc giải thích mà con người có thể hiểu được cho các quyết định hoặc dự đoán của nó.",
    "category": "Data Quality",
    "tags": [
      "Data Quality",
      "Model Weights",
      "Sensors"
    ]
  },
  {
    "id": "istqb-15",
    "questionNumber": 15,
    "text": "The following confusion matrix represents the functional performance of a classifier.\n\nPredicted Positive: TP = 60, FP = 20\nPredicted Negative: FN = 9, TN = 11\n\nWhich ONE of the following is the correct calculation for the accuracy of the classifier?",
    "options": [
      {
        "key": "A",
        "text": "60 / (60 + 20) * 100% = 75%"
      },
      {
        "key": "B",
        "text": "60 / (60 + 9) * 100% = 87%"
      },
      {
        "key": "C",
        "text": "2 * (60 / (60 + 20) * 60 / (60 + 9)) / (60 / (60 + 20) + 60 / (60 + 9)) * 100% = 80%"
      },
      {
        "key": "D",
        "text": "(60 + 11) / (60 + 11 + 20 + 9) * 100% = 71%"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Recall (Độ nhạy / Tỷ lệ phát hiện) = TP / (TP + FN). Trong y tế, Recall cao đảm bảo tối thiểu hóa số ca bệnh bị bỏ sót (FN).",
    "category": "Model Metrics",
    "tags": [
      "Confusion Matrix",
      "Accuracy",
      "Metrics"
    ]
  },
  {
    "id": "istqb-16",
    "questionNumber": 16,
    "text": "Which ONE of the following requirements for an AI-based system is MOST likely to cause a challenge for testing?",
    "options": [
      {
        "key": "A",
        "text": "The system should be able to accept natural language input on a variety of topics and respond correctly"
      },
      {
        "key": "B",
        "text": "The system should respond more quickly than the system it is replacing"
      },
      {
        "key": "C",
        "text": "The system should be 100% accurate with no tolerance for failure"
      },
      {
        "key": "D",
        "text": "The system should not require human intervention until a specific failure scenario is encountered"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Học không giám sát (Unsupervised learning) tự động tìm kiếm các mẫu, cấu trúc ẩn hoặc gom nhóm (clustering) trong dữ liệu mà KHÔNG cần nhãn mục tiêu cho trước.",
    "category": "Testing Challenges",
    "tags": [
      "Oracle Problem",
      "NLP",
      "Testability"
    ]
  },
  {
    "id": "istqb-17",
    "questionNumber": 17,
    "text": "A data scientist is performing unsupervised learning on a set of financial records relating to previous loan applications, and trying to predict defaults on future loans. They are reporting poor functional performance because of data issues. Which ONE of the below is LEAST likely to be a contributory factor?",
    "options": [
      {
        "key": "A",
        "text": "Missing records for some accounts"
      },
      {
        "key": "B",
        "text": "Missing data relating to whether loans were previously granted and repaid"
      },
      {
        "key": "C",
        "text": "Inconsistent pre-processing of some records"
      },
      {
        "key": "D",
        "text": "Irrelevant data included in the account records"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Trong kiểm thử đường biên/ngưỡng activation (Threshold coverage), mục tiêu là xác định xem các neuron có vượt qua ngưỡng kích hoạt nhất định hay không.",
    "category": "Data Preparation",
    "tags": [
      "Data Issues",
      "Unsupervised Learning",
      "Preprocessing"
    ]
  },
  {
    "id": "istqb-18",
    "questionNumber": 18,
    "text": "Which ONE of the following is a factor associated with the test data that can create challenges specific to testing AI-based systems?",
    "options": [
      {
        "key": "A",
        "text": "Obtaining data from public benchmark datasets"
      },
      {
        "key": "B",
        "text": "Obtaining data that has not been pre-processed by the system under test."
      },
      {
        "key": "C",
        "text": "Manual creation of test data"
      },
      {
        "key": "D",
        "text": "Obtaining appropriate data from users"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Khái niệm Concept Drift (Trôi lệch khái niệm) xảy ra khi mối quan hệ thống kê giữa dữ liệu đầu vào và thuộc tính mục tiêu thay đổi theo thời gian trong môi trường thực tế.",
    "category": "Data Acquisition",
    "tags": [
      "Test Data",
      "User Data",
      "Privacy"
    ]
  },
  {
    "id": "istqb-19",
    "questionNumber": 19,
    "text": "An ML engineer performing supervised learning needs to label images of football games based on the location of the football in the image. Which ONE of the below labeling approaches can be used?",
    "options": [
      {
        "key": "A",
        "text": "Internal"
      },
      {
        "key": "B",
        "text": "Annotation"
      },
      {
        "key": "C",
        "text": "Augmentation"
      },
      {
        "key": "D",
        "text": "Benchmarking"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Data Leakage (Rò rỉ dữ liệu) xảy ra khi thông tin từ tập kiểm thử (test set) vô tình lộ vào tập huấn luyện (training set), khiến kết quả đánh giá mô hình cao một cách ảo tưởng.",
    "category": "Data Preparation",
    "tags": [
      "Annotation",
      "Data Labeling",
      "Computer Vision"
    ]
  },
  {
    "id": "istqb-20",
    "questionNumber": 20,
    "text": "Which ONE of the following statements about a system MOST describes an autonomous system?",
    "options": [
      {
        "key": "A",
        "text": "A loan approval system that can continue to process loan applications indefinitely, within a defined amount of aggregate credit, until an operator reduces the amount of aggregate credit available."
      },
      {
        "key": "B",
        "text": "A self-driving car that automatically stops the car if the driver is not responding to voice prompts, in order to ensure they are awake."
      },
      {
        "key": "C",
        "text": "A chatbot that learns the most effective responses to humans (in order to ensure the humans continue to converse) based on prior experiences."
      },
      {
        "key": "D",
        "text": "A fraud detection system that alerts operators when it sees a specific fraud risk associated with a transaction, in order to obtain human input to make a final decision."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Thuật toán k-NN (k-Nearest Neighbors) phân loại một điểm dữ liệu dựa trên lớp của k điểm dữ liệu gần nhất với nó trong không gian thuộc tính.",
    "category": "Quality Characteristics",
    "tags": [
      "Autonomy",
      "Self-Driving",
      "Safety"
    ]
  },
  {
    "id": "istqb-21",
    "questionNumber": 21,
    "text": "A test engineer is planning testing for a wearable medical device using AI. The medical device will detect possible heart issues in patients and dispatch emergency services automatically. It is not expected that many patients will have heart issues, and this is reflected in the available data. In this case, it is decided it is more important that emergency services are not sent un-necessarily, than it is to detect actual heart problems.\n\nWhich ONE of the following metrics should the test engineer choose to ensure that the emergency services are sent only when needed?",
    "options": [
      {
        "key": "A",
        "text": "Accuracy"
      },
      {
        "key": "B",
        "text": "MSE"
      },
      {
        "key": "C",
        "text": "R-Squared"
      },
      {
        "key": "D",
        "text": "Precision"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Học tăng cường (Reinforcement Learning) dựa trên cơ chế Tác nhân (Agent) tương tác với Môi trường (Environment), nhận Phần thưởng (Reward) hoặc Hình phạt (Penalty) để học chính lược tối ưu.",
    "category": "Model Metrics",
    "tags": [
      "Precision",
      "False Positives",
      "Medical Systems"
    ]
  },
  {
    "id": "istqb-22",
    "questionNumber": 22,
    "text": "A test engineer is planning the best functional performance metrics to evaluate an unsupervised learning model. The model groups data points based on their similarity. The test engineer wants to measure how similar the data points in each group actually are.\n\nWhich is the MOST likely metric they should use?",
    "options": [
      {
        "key": "A",
        "text": "ROC"
      },
      {
        "key": "B",
        "text": "Intra-cluster"
      },
      {
        "key": "C",
        "text": "AUC"
      },
      {
        "key": "D",
        "text": "Recall"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Định kiến mẫu (Sample bias / Selection bias) xảy ra khi dữ liệu huấn luyện không đại diện đúng cho phân phối dữ liệu thực tế mà hệ thống sẽ gặp phải khi vận hành.",
    "category": "Model Metrics",
    "tags": [
      "Intra-Cluster Distance",
      "Clustering Metrics",
      "Unsupervised Learning"
    ]
  },
  {
    "id": "istqb-23",
    "questionNumber": 23,
    "text": "You are conducting a user acceptance test of a decision-support recommendation system used in a data processing business. In addition to testing the functional performance of the recommendation systems, what else would you be MOST likely to test?",
    "options": [
      {
        "key": "A",
        "text": "The number of inaccurate recommendations per day"
      },
      {
        "key": "B",
        "text": "The amount of system resources consumed by each recommendation"
      },
      {
        "key": "C",
        "text": "The number of accurate recommendations per day"
      },
      {
        "key": "D",
        "text": "The accuracy of the human decision when presented with an inaccurate recommendation"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Tính minh bạch (Transparency) liên quan đến mức độ mà các thông tin về kiến trúc mô hình, thuật toán và dữ liệu huấn luyện được công khai và truy cập được.",
    "category": "Acceptance Testing",
    "tags": [
      "UAT",
      "Decision Support",
      "Performance"
    ]
  },
  {
    "id": "istqb-24",
    "questionNumber": 24,
    "text": "Which ONE of the following statements BEST describes a testing challenge that specifically applied to a self-learning system?",
    "options": [
      {
        "key": "A",
        "text": "When systems change themselves the results of previously passing tests may change"
      },
      {
        "key": "B",
        "text": "It is necessary to test whether the system will relinquish control to a human at the right time"
      },
      {
        "key": "C",
        "text": "External data sources might be required to ensure that the system is unbiased"
      },
      {
        "key": "D",
        "text": "It can be difficult to explain the link between test inputs and outputs"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Nhiễu hạt đối kháng (Adversarial perturbation) là những thay đổi cực nhỏ được thêm vào dữ liệu đầu vào nhằm cố tình làm mô hình AI dự đoán sai.",
    "category": "Testing Challenges",
    "tags": [
      "Self-Learning",
      "Regression",
      "Non-determinism"
    ]
  },
  {
    "id": "istqb-25",
    "questionNumber": 25,
    "text": "Which ONE of the below statements BEST describes how combinatorial testing can be applied to AI-based systems?",
    "options": [
      {
        "key": "A",
        "text": "Each neuron can be treated as a parameter for pairwise tests"
      },
      {
        "key": "B",
        "text": "Two variants of the system can be used and compared"
      },
      {
        "key": "C",
        "text": "Inputs to the system and environment factors can be considered parameters for pairwise tests"
      },
      {
        "key": "D",
        "text": "Combinatorial testing cannot yet be applied to AI"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Kiểm thử Back-to-Back so sánh đầu ra của hai hoặc nhiều phiên bản mô hình (hoặc hệ thống) khác nhau trên cùng một tập dữ liệu đầu vào.",
    "category": "Test Techniques",
    "tags": [
      "Combinatorial Testing",
      "Pairwise",
      "Test Generation"
    ]
  },
  {
    "id": "istqb-26",
    "questionNumber": 26,
    "text": "You have been asked for your opinion on the ML approach to be used for a new age verification system. A training dataset is available with many pictures of faces and the subject's age. When new users sign-up to a mobile app, they have to take a picture of their face. If the system believes they are under 18 years old it will ask them to provide a picture of their passport to prove their age.\n\nWhich ONE of the following approaches do you expect to be MOST likely to succeed?",
    "options": [
      {
        "key": "A",
        "text": "Unsupervised learning that identifies clusters in training data that relate to people's ages."
      },
      {
        "key": "B",
        "text": "Supervised learning classification system that is re-trained based on new data, including whether they later provided ID that showed they were over 18."
      },
      {
        "key": "C",
        "text": "Supervised learning regression system that is re-trained based on new data, including whether they provided ID that showed their age."
      },
      {
        "key": "D",
        "text": "Reinforcement learning classification system with a reward function of correct behavior."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Độ chính xác tổng thể (Accuracy) = (TP + TN) / (TP + TN + FP + FN). Tính tỷ lệ dự đoán đúng trên tổng số mẫu.",
    "category": "ML Approaches",
    "tags": [
      "Supervised Learning",
      "Classification",
      "Continuous Training"
    ]
  },
  {
    "id": "istqb-27",
    "questionNumber": 27,
    "text": "Which ONE of the following statements is MOST true about black-box adversarial testing?",
    "options": [
      {
        "key": "A",
        "text": "The algorithm used for the model is known to the tester"
      },
      {
        "key": "B",
        "text": "The approach relies on the transferability of the attacks"
      },
      {
        "key": "C",
        "text": "The training data is manipulated"
      },
      {
        "key": "D",
        "text": "Combinatorial testing techniques are used"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Hàm mất mát (Loss function) đo lường mức độ sai lệch giữa dự đoán của mô hình và giá trị thực tế trong quá trình huấn luyện.",
    "category": "Adversarial Testing",
    "tags": [
      "Adversarial Testing",
      "Black-Box",
      "Transferability"
    ]
  },
  {
    "id": "istqb-28",
    "questionNumber": 28,
    "text": "A facial recognition system is being deployed at airports in order to scan passengers' faces and compare them to a database of vaccinations, in order to identify unvaccinated passengers in a pandemic. There are a number of components involved including cameras, a model to segment the image, and a model to identify the face and match it against a known photograph. It is important that there are few false negatives, and that passengers cannot subvert the system.\n\nWhich ONE of the following types of testing is the MOST appropriate options for the tests you would choose in system testing?",
    "options": [
      {
        "key": "A",
        "text": "Testing for concept drift"
      },
      {
        "key": "B",
        "text": "Adversarial testing"
      },
      {
        "key": "C",
        "text": "Testing for explainability"
      },
      {
        "key": "D",
        "text": "Testing for transparency"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Trọng số (Weights) trong mạng nơ-ron điều chỉnh độ mạnh yếu của kết nối giữa các neuron và được cập nhật liên tục trong quá trình Lan truyền ngược (Backpropagation).",
    "category": "Adversarial Testing",
    "tags": [
      "Adversarial Testing",
      "Security",
      "Subversion"
    ]
  },
  {
    "id": "istqb-29",
    "questionNumber": 29,
    "text": "Which ONE of the following statements BEST describes how system complexity can cause challenges when testing an AI-based system?",
    "options": [
      {
        "key": "A",
        "text": "Obtaining test data is harder"
      },
      {
        "key": "B",
        "text": "It is necessary to measure how changes in the test inputs cause changes in the test outputs"
      },
      {
        "key": "C",
        "text": "Unexpected changes in system behavior can occur"
      },
      {
        "key": "D",
        "text": "Sometimes the system can only be tested as a black-box"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Mô hình hồi quy (Regression model) được sử dụng để dự đoán các giá trị số liên tục (continuous values) như giá nhà, nhiệt độ, doanh thu.",
    "category": "Testing Challenges",
    "tags": [
      "System Complexity",
      "Non-linear",
      "Emergent Behavior"
    ]
  },
  {
    "id": "istqb-30",
    "questionNumber": 30,
    "text": "You are a test manager planning testing for an invoice financing company. The company buys unpaid invoices from companies and provides them with immediate cash. The company is replacing their existing conventional system, which takes company accounting records as inputs, with an ML system that classifies each invoice for sales as something that should, or should not be bought. Significant historical production data is available. It is important that invoices are not bought incorrectly.\n\nWhich ONE of the following test techniques would be MOST appropriate for you to plan for system testing?",
    "options": [
      {
        "key": "A",
        "text": "A/B testing"
      },
      {
        "key": "B",
        "text": "Back-to-back testing"
      },
      {
        "key": "C",
        "text": "Metamorphic testing"
      },
      {
        "key": "D",
        "text": "Experience-based testing"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Tính tự chủ (Autonomy) là khả năng của hệ thống AI thực hiện các hành động và đưa ra quyết định mà không cần sự can thiệp trực tiếp của con người.",
    "category": "Test Techniques",
    "tags": [
      "Back-to-Back Testing",
      "Legacy Comparison",
      "System Testing"
    ]
  },
  {
    "id": "istqb-31",
    "questionNumber": 31,
    "text": "Which ONE of the below types of testing is NOT a type of experience-based testing applied to an AI-based system?",
    "options": [
      {
        "key": "A",
        "text": "Exploring training data to understand its variety, patterns, structure and shape - then using that to inform testing"
      },
      {
        "key": "B",
        "text": "Usability testing of the format of the output predictions"
      },
      {
        "key": "C",
        "text": "Using knowledge about previous ML systems to identify potential biases"
      },
      {
        "key": "D",
        "text": "Using an industry checklist to assess the steps used to prepare an ML system"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Bài toán Oracle kiểm thử (Test Oracle Problem) xuất hiện khi rất khó hoặc không thể xác định chính xác kết quả kỳ vọng cho một đầu vào kiểm thử nhất định.",
    "category": "Test Techniques",
    "tags": [
      "Experience-Based Testing",
      "Checklist Testing",
      "Test Design"
    ]
  },
  {
    "id": "istqb-32",
    "questionNumber": 32,
    "text": "A robotic AI-based system is being built by a logistics company to operate within its unmanned warehouses. The warehouses can all be very different and new ones are being added each year. It is expected that the system will not require retraining for each warehouse, and will be able to learn the location of different items and move them to specified locations on request.\n\nWhich ONE of the following attributes should be MOST carefully considered when specifying the objectives and acceptance criteria for the system?",
    "options": [
      {
        "key": "A",
        "text": "Inappropriate bias"
      },
      {
        "key": "B",
        "text": "Adaptability"
      },
      {
        "key": "C",
        "text": "Ethics"
      },
      {
        "key": "D",
        "text": "Explainability"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Data Augmentation (Tăng cường dữ liệu) tạo ra các mẫu dữ liệu huấn luyện mới bằng cách biến đổi dữ liệu hiện có (xoay, lật, thay đổi độ sáng, thêm nhiễu).",
    "category": "Quality Characteristics",
    "tags": [
      "Adaptability",
      "Robotics",
      "Acceptance Criteria"
    ]
  },
  {
    "id": "istqb-33",
    "questionNumber": 33,
    "text": "Which ONE of the below statements BEST describes why test environments for autonomous systems might need to be different to other test environments?",
    "options": [
      {
        "key": "A",
        "text": "Tools may be required to simulate extreme scenarios"
      },
      {
        "key": "B",
        "text": "Non-determinism may need to be introduced into the environment"
      },
      {
        "key": "C",
        "text": "AI-specific hardware may be required"
      },
      {
        "key": "D",
        "text": "Tools may be required to provide explanations of system behavior"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Xung đột nhãn (Label noise / Mislabeling) xảy ra khi cùng một dữ liệu đầu vào nhưng bị gán các nhãn khác nhau do lỗi của người gán nhãn.",
    "category": "Test Environment",
    "tags": [
      "Test Environment",
      "Simulation",
      "Autonomous Systems"
    ]
  },
  {
    "id": "istqb-34",
    "questionNumber": 34,
    "text": "Which ONE of the following would be the LEAST effective input to an AI-based test optimization process?",
    "options": [
      {
        "key": "A",
        "text": "Previously failing tests"
      },
      {
        "key": "B",
        "text": "Defect reports"
      },
      {
        "key": "C",
        "text": "Test environment downtime"
      },
      {
        "key": "D",
        "text": "Source control data"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Kiểm thử A/B (A/B Testing) so sánh hai phiên bản mô hình trực tiếp trên hai nhóm người dùng thực tế để đánh giá hiệu năng kinh doanh hoặc trải nghiệm người dùng.",
    "category": "AI for Testing",
    "tags": [
      "Test Optimization",
      "Defect Prediction",
      "Metrics"
    ]
  },
  {
    "id": "istqb-35",
    "questionNumber": 35,
    "text": "Which ONE of the following statements is true about dynamic testing for inappropriate bias?",
    "options": [
      {
        "key": "A",
        "text": "It can be necessary to obtain additional attributes about the data being processed"
      },
      {
        "key": "B",
        "text": "Reviewing the source of the training data can reveal inappropriate bias"
      },
      {
        "key": "C",
        "text": "Inappropriate bias only needs to be tested when protected characteristics such as race and gender are present in the inputs"
      },
      {
        "key": "D",
        "text": "Testing should never be conducted in production"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Lớp ẩn (Hidden layer) trong mạng nơ-ron sâu trích xuất các đặc trưng trung gian phức tạp từ dữ liệu đầu vào trước khi chuyển đến lớp đầu ra.",
    "category": "Ethics & Bias",
    "tags": [
      "Dynamic Testing",
      "Fairness Metrics",
      "Bias Detection"
    ]
  },
  {
    "id": "istqb-36",
    "questionNumber": 36,
    "text": "Which ONE of the following options for a test basis would give the LEAST coverage when using AI-based test generation?",
    "options": [
      {
        "key": "A",
        "text": "A test model describing the application functionality"
      },
      {
        "key": "B",
        "text": "A list of possible web pages that comprise the application"
      },
      {
        "key": "C",
        "text": "A pseudo-oracle"
      },
      {
        "key": "D",
        "text": "An XML schema"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Overfitting xảy ra khi mô hình quá phức tạp, ghi nhớ cả nhiễu trong tập huấn luyện nên mất khả năng tổng quát hóa (generalization) trên dữ liệu mới.",
    "category": "AI for Testing",
    "tags": [
      "Test Generation",
      "Test Basis",
      "Coverage"
    ]
  },
  {
    "id": "istqb-37",
    "questionNumber": 37,
    "text": "Which ONE of the following would be the MOST effective input to an AI-based defect prediction tool?",
    "options": [
      {
        "key": "A",
        "text": "Developers associated with previous code changes"
      },
      {
        "key": "B",
        "text": "Cyclomatic complexity"
      },
      {
        "key": "C",
        "text": "Lines of code changed"
      },
      {
        "key": "D",
        "text": "Commit size"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Precision (Độ chuẩn xác) = TP / (TP + FP). Đo lường tỷ lệ mẫu dự đoán Tích cực thực sự là Tích cực.",
    "category": "AI for Testing",
    "tags": [
      "Defect Prediction",
      "Cyclomatic Complexity",
      "Code Quality"
    ]
  },
  {
    "id": "istqb-38",
    "questionNumber": 38,
    "text": "In which ONE of the following situations would an ML model be MOST effective at determining the criticality of new defects?",
    "options": [
      {
        "key": "A",
        "text": "A new application which is in the early stages of the first test cycle"
      },
      {
        "key": "B",
        "text": "An old application with lots of defect records but a brand new development and test team"
      },
      {
        "key": "C",
        "text": "An old application where defect records are linked to failed tests and production incidents"
      },
      {
        "key": "D",
        "text": "An old application with few critical defect records and many non-critical defect records"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "F1-Score là trung bình điều hòa (harmonic mean) giữa Precision và Recall: 2 * (Precision * Recall) / (Precision + Recall).",
    "category": "AI for Testing",
    "tags": [
      "Defect Classification",
      "Historical Data",
      "Defect Criticality"
    ]
  },
  {
    "id": "istqb-39",
    "questionNumber": 39,
    "text": "Which of the below TWO examples of AI system behavior are reward hacking:\n1. An AI medical device intended to keep a patient stable may give the patient a treatment that means they recover less quickly.\n2. An AI system intended to maximize production of a commodity by weight allows quality and size of product to reduce.\n3. An AI system intended to ensure the output of a factory process is always sorted correctly, destroys the outputs.\n4. An AI system intended to remove security vulnerabilities from software code, removes all functionality that has security vulnerabilities.",
    "options": [
      {
        "key": "A",
        "text": "1, 2"
      },
      {
        "key": "B",
        "text": "1, 3"
      },
      {
        "key": "C",
        "text": "3, 4"
      },
      {
        "key": "D",
        "text": "2, 4"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Độ tin cậy (Robustness) của hệ thống AI là khả năng duy trì mức độ hiệu năng ổn định ngay cả khi gặp đầu vào bất thường, bị nhiễu hoặc không hợp lệ.",
    "category": "Quality Characteristics",
    "tags": [
      "Reward Hacking",
      "Reinforcement Learning",
      "Side Effects"
    ]
  },
  {
    "id": "istqb-40",
    "questionNumber": 40,
    "text": "A neural network has been designed and created to assist day-traders improve efficiency when buying and selling commodities in a rapidly changing market. Suppose the test team executes a test on the neural network where each neuron is examined. For this network the shortest path indicates a buy, and it will only occur when the one-day predicted value of the commodity is greater than the spot price by 0.75%. The neurons are stimulated by entering commodity prices and testers verify that they activate only when the future value exceeds the spot price by at least 0.75%.\n\nWhich of the following statements BEST explains the type of coverage being tested on the neural network?",
    "options": [
      {
        "key": "A",
        "text": "Threshold coverage"
      },
      {
        "key": "B",
        "text": "Neuron coverage"
      },
      {
        "key": "C",
        "text": "Sign-change coverage"
      },
      {
        "key": "D",
        "text": "Value-change coverage"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Hiện tượng Reward Hacking trong Học tăng cường xảy ra khi Tác nhân lợi dụng lỗ hổng trong thiết kế hàm thưởng để đạt điểm số cao mà không thực hiện đúng mục tiêu ban đầu.",
    "category": "Coverage Criteria",
    "tags": [
      "Threshold Coverage",
      "White-Box Testing",
      "Neural Networks"
    ]
  },
  {
    "id": "istqb-41",
    "questionNumber": 41,
    "text": "Which of the following is one of the reasons for data mislabeling?",
    "options": [
      {
        "key": "A",
        "text": "Lack of domain knowledge"
      },
      {
        "key": "B",
        "text": "Expert knowledge"
      },
      {
        "key": "C",
        "text": "Interoperability error"
      },
      {
        "key": "D",
        "text": "Small datasets"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Thiếu kiến thức chuyên môn về lĩnh vực (Lack of domain knowledge) của người gán nhãn là nguyên nhân hàng đầu dẫn đến việc gán nhãn sai (data mislabeling).",
    "category": "Data Preparation",
    "tags": [
      "Data Labeling",
      "Data Quality",
      "Human Factors"
    ]
  },
  {
    "id": "istqb-42",
    "questionNumber": 42,
    "text": "You have access to the training data that was used to train an AI-based system. You can review this information and use it as a guideline when creating your tests. What type of characteristic is this?",
    "options": [
      {
        "key": "A",
        "text": "Autonomy"
      },
      {
        "key": "B",
        "text": "Explorability"
      },
      {
        "key": "C",
        "text": "Transparency"
      },
      {
        "key": "D",
        "text": "Accessibility"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Tính minh bạch (Transparency) cho phép kiểm thử viên xem xét, đánh giá cấu trúc mô hình, dữ liệu huấn luyện và quy trình đưa ra quyết định.",
    "category": "Quality Characteristics",
    "tags": [
      "Transparency",
      "Data Access",
      "Explainability"
    ]
  },
  {
    "id": "istqb-43",
    "questionNumber": 43,
    "text": "Which of the following is a problem with AI-generated test cases that are generated from the requirements?",
    "options": [
      {
        "key": "A",
        "text": "They are slow and will usually not be able to execute in the time allowed"
      },
      {
        "key": "B",
        "text": "They are defect prone because they are unable to detect nuances in the requirements"
      },
      {
        "key": "C",
        "text": "They make debugging more complicated because the number of steps is usually high in order to induce the target failure"
      },
      {
        "key": "D",
        "text": "They are usually missing the expected results, so verification is difficult or must resort to only detecting significant failures"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Tự động sinh test case từ yêu cầu bằng AI thường gặp bài toán thiếu Expected Results (Test Oracle), dẫn đến khó khăn khi xác minh Pass/Fail tự động.",
    "category": "AI for Testing",
    "tags": [
      "Test Generation",
      "Test Oracle",
      "Requirements"
    ]
  },
  {
    "id": "istqb-44",
    "questionNumber": 44,
    "text": "You are testing an autonomous vehicle which uses AI to determine proper driving actions and responses. You have evaluated the parameters and combinations to be tested and have determined that there are too many to test in the time allowed.\n\nIt has been suggested that you use pairwise testing to limit the parameters. Given the complexity of the software under test, what is likely the outcome from using pairwise testing?",
    "options": [
      {
        "key": "A",
        "text": "The number of parameters to test can be reduced to less than a dozen"
      },
      {
        "key": "B",
        "text": "All high priority defects will be identified using this method"
      },
      {
        "key": "C",
        "text": "While the number of tests needed can be reduced, there may still be a large enough set of tests that automation will be required to execute all of them"
      },
      {
        "key": "D",
        "text": "Pairwise cannot be applied to this problem because there is AI involved and the evolving values may result in unexpected results that cannot be verified"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Pairwise testing giúp giảm số lượng tổ hợp tham số, nhưng trong các hệ thống phức tạp như xe tự lái, tập test case còn lại vẫn rất lớn và bắt buộc phải tự động hóa.",
    "category": "Test Techniques",
    "tags": [
      "Pairwise Testing",
      "Autonomous Driving",
      "Test Automation"
    ]
  },
  {
    "id": "istqb-45",
    "questionNumber": 45,
    "text": "Which of the following aspects in a challenge when handling test data for an AI-based system?",
    "options": [
      {
        "key": "A",
        "text": "Personal data or confidential data"
      },
      {
        "key": "B",
        "text": "Output data or intermediate data"
      },
      {
        "key": "C",
        "text": "Video frame speed or aspect ratio"
      },
      {
        "key": "D",
        "text": "Data frameworks or machine learning frameworks"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Bảo mật thông tin cá nhân và dữ liệu riêng tư (Personal / Confidential data) là thách thức lớn nhất khi thu thập dữ liệu kiểm thử thực tế.",
    "category": "Data Acquisition",
    "tags": [
      "Test Data",
      "Privacy",
      "Compliance"
    ]
  },
  {
    "id": "istqb-46",
    "questionNumber": 46,
    "text": "An e-commerce developer built an application for automatic classification of online products in order to allow customers to select products faster. The goal is to provide more relevant products to the user based on prior purchases.\n\nWhich of the following factors is necessary for a supervised machine learning algorithm to be successful?",
    "options": [
      {
        "key": "A",
        "text": "Labeling the data correctly"
      },
      {
        "key": "B",
        "text": "Minimizing the amount of time spent training the algorithm"
      },
      {
        "key": "C",
        "text": "Selecting the correct data pipeline for the ML training"
      },
      {
        "key": "D",
        "text": "Grouping similar products together before feeding them into the algorithm"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Học có giám sát (Supervised learning) phụ thuộc hoàn toàn vào việc gán nhãn dữ liệu chính xác (Correct labeling) để tính toán loss và cập nhật mô hình.",
    "category": "ML Fundamentals",
    "tags": [
      "Supervised Learning",
      "Data Labeling",
      "Ground Truth"
    ]
  },
  {
    "id": "istqb-47",
    "questionNumber": 47,
    "text": "A beer company is trying to understand how much recognition its logo has in the market. It plans to do that by monitoring images on various social media platforms using a pre-trained neural network for logo detection. This particular model has been trained by looking for words, as well as matching colors on social media images. The company logo has a big word across the middle with a bold blue end magenta border.\n\nWhich associated risk is most likely to occur when using this pre-trained model?",
    "options": [
      {
        "key": "A",
        "text": "There is no risk, as the model has already been trained"
      },
      {
        "key": "B",
        "text": "Insufficient function; the model was not trained to check for colors or words"
      },
      {
        "key": "C",
        "text": "Improper data preparation"
      },
      {
        "key": "D",
        "text": "Inherited bias; the model could have inherited unknown defects"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Sử dụng mô hình huấn luyện sẵn (Pre-trained model) có rủi ro cao về Định kiến kế thừa (Inherited bias) từ tập dữ liệu của bên thứ ba.",
    "category": "Transfer Learning",
    "tags": [
      "Pre-trained Models",
      "Inherited Bias",
      "Risk Management"
    ]
  },
  {
    "id": "istqb-48",
    "questionNumber": 48,
    "text": "An engine manufacturing facility wants to apply machine learning to detect faulty bolts. Which of the following would result in bias in the model?",
    "options": [
      {
        "key": "A",
        "text": "Selecting training data by purposely excluding specific faulty conditions"
      },
      {
        "key": "B",
        "text": "Selecting training data by purposely including all known faulty conditions."
      },
      {
        "key": "C",
        "text": "Selecting testing data from a different dataset than the training dataset"
      },
      {
        "key": "D",
        "text": "Selecting testing data from a boat manufacturer's bolt longevity data"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Loại bỏ cố ý các trường hợp lỗi cụ thể khỏi tập dữ liệu huấn luyện sẽ gây ra Định kiến mẫu (Sample bias), làm mô hình không thể nhận diện lỗi đó khi chạy thực tế.",
    "category": "Ethics & Bias",
    "tags": [
      "Sample Bias",
      "Training Data",
      "Fault Detection"
    ]
  },
  {
    "id": "istqb-49",
    "questionNumber": 49,
    "text": "Which of the following is an example of a clustering problem that can be resolved by unsupervised learning?",
    "options": [
      {
        "key": "A",
        "text": "Associating shoppers with their shopping tendencies"
      },
      {
        "key": "B",
        "text": "Grouping individual fish together based on their types of fins"
      },
      {
        "key": "C",
        "text": "Classifying muffin purchases based on the perceived attractiveness of their packaging"
      },
      {
        "key": "D",
        "text": "Estimating the expected purchase of cat food after a particularly successful ad campaign"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Phân nhóm khách hàng dựa trên hành vi mua sắm mà không có nhãn trước là bài toán Gom cụm (Clustering) điển hình của Học không giám sát.",
    "category": "ML Fundamentals",
    "tags": [
      "Unsupervised Learning",
      "Clustering",
      "Segmentation"
    ]
  },
  {
    "id": "istqb-50",
    "questionNumber": 50,
    "text": "When verifying that an autonomous AI-based system is acting appropriately, which of the following are MOST important to include?",
    "options": [
      {
        "key": "A",
        "text": "Test cases to verify that the system automatically confirms the correct classification of training data"
      },
      {
        "key": "B",
        "text": "Test cases to detect the system appropriately automating its data input"
      },
      {
        "key": "C",
        "text": "Test cases to detect the system prompting for unnecessary human intervention"
      },
      {
        "key": "D",
        "text": "Test cases to verify that the system automatically suppresses invalid output data"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Đối với hệ thống tự chủ, cần kiểm thử xem hệ thống có yêu cầu con người can thiệp không cần thiết (Unnecessary human intervention) hay không.",
    "category": "Quality Characteristics",
    "tags": [
      "Autonomy",
      "Human Handover",
      "System Verification"
    ]
  },
  {
    "id": "istqb-51",
    "questionNumber": 51,
    "text": "Which of the following is correct regarding the layers of a deep neural network?",
    "options": [
      {
        "key": "A",
        "text": "There is only an input and output layer"
      },
      {
        "key": "B",
        "text": "There is at least one internal hidden layer"
      },
      {
        "key": "C",
        "text": "There must be a minimum of five total layers to be considered deep"
      },
      {
        "key": "D",
        "text": "The output layer is not connected with the other layers to maintain integrity"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Mạng nơ-ron sâu (Deep Neural Network) bắt buộc phải có ít nhất MỘT lớp ẩn nội bộ (hidden layer) nằm giữa lớp đầu vào và lớp đầu ra.",
    "category": "Neural Networks",
    "tags": [
      "Hidden Layers",
      "Deep Learning",
      "Architecture"
    ]
  },
  {
    "id": "istqb-52",
    "questionNumber": 52,
    "text": "Which of the following approaches would help overcome testing challenges associated with probabilistic and non-deterministic AI-based systems?",
    "options": [
      {
        "key": "A",
        "text": "Run the test several times to ensure that the AI always returns the same correct test result"
      },
      {
        "key": "B",
        "text": "Decompose the system test into multiple data ingestion tests to determine if the AI system is getting a sufficient volume of input data"
      },
      {
        "key": "C",
        "text": "Decompose the system test into multiple data ingestion tests to determine if the AI system is getting precise and accurate input data"
      },
      {
        "key": "D",
        "text": "Run the test several times to generate a statistically valid test result to ensure that an appropriate number of answers are accurate"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Với hệ thống mang tính xác suất và không định tính (Non-deterministic), phương pháp kiểm thử chuẩn là chạy test nhiều lần để thu được kết quả có ý nghĩa thống kê (Statistically valid).",
    "category": "Testing Challenges",
    "tags": [
      "Non-determinism",
      "Statistical Testing",
      "Probabilistic Output"
    ]
  },
  {
    "id": "istqb-53",
    "questionNumber": 53,
    "text": "A startup company has implemented a new facial recognition system for a banking application for mobile devices. The application is intended to learn at run-time on the device to determine if the user should be granted access. It also sends feedback over the Internet to the application developers. The application deployment resulted in continuous restarts of the mobile devices.\n\nWhich of the following is the most likely cause of the failure?",
    "options": [
      {
        "key": "A",
        "text": "The feedback requires a physical connection and cannot be sent over the Internet"
      },
      {
        "key": "B",
        "text": "Mobile operating systems cannot process machine learning algorithms"
      },
      {
        "key": "C",
        "text": "The size of the application is consuming too much of the phone's storage capacity"
      },
      {
        "key": "D",
        "text": "The training, processing, and diagnostic generation are too computationally intensive for the mobile device hardware to handle"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Huấn luyện và suy luận mô hình trên thiết bị di động có thể gây cạn kệt tài nguyên phần cứng (CPU/GPU/RAM), dẫn đến ứng dụng bị quá tải và khởi động lại thiết bị.",
    "category": "AI Hardware",
    "tags": [
      "Edge Computing",
      "Mobile Hardware",
      "Resource Exhaustion"
    ]
  },
  {
    "id": "istqb-54",
    "questionNumber": 54,
    "text": "An airline has created a ML model to project fuel requirements for future flights. The model imports weather data such as wind speeds and temperatures, calculates flight routes based on historical routings from air traffic control, and estimates loads from average passenger and baggage weights. The model performed within an acceptable standard for the airline throughout the summer but as winter set in the load weights became less accurate. After some exploratory data analysis it became apparent that luggage weights were higher in the winter than in summer.\n\nWhich of the following statements BEST describes the problem and how it could have been prevented?",
    "options": [
      {
        "key": "A",
        "text": "The model suffers from drift and therefore should be regularly tested to ensure that any occurrences of drift are detected soon enough for the problem to be mitigated"
      },
      {
        "key": "B",
        "text": "The model suffers from drift and therefore the performance standard should be eased until a new model with more transparency can be developed"
      },
      {
        "key": "C",
        "text": "The model suffers from corruption and therefore should be reloaded into the computer system being used, preferably with a method of version control to prevent further changes"
      },
      {
        "key": "D",
        "text": "The model suffers from a lack of transparency and therefore should be regularly tested to ensure that any progressive errors are detected soon enough for the problem to be mitigated"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Khi môi trường thực tế thay đổi theo mùa làm giảm độ chính xác, mô hình bị Concept Drift và cần được theo dõi định kỳ để phát hiện và tái huấn luyện (retrain).",
    "category": "Model Maintenance",
    "tags": [
      "Concept Drift",
      "Data Drift",
      "Model Monitoring"
    ]
  },
  {
    "id": "istqb-55",
    "questionNumber": 55,
    "text": "A wildlife conservation group would like to use a neural network to classify images of different animals. The algorithm is going to be used on a social media platform to automatically pick out pictures of the chosen animal of the month. This month's animal is set to be a wolf. The test team has already observed that the algorithm could classify a picture of a dog as being a wolf because of the similar characteristics between dogs and wolves. To handle such instances, the team is planning to train the model with additional images of wolves and dogs so that the model is able to better differentiate between the two.\n\nWhat test method should you use to verify that the model has improved after the additional training?",
    "options": [
      {
        "key": "A",
        "text": "Metamorphic testing because the application domain is not clearly understood at this point"
      },
      {
        "key": "B",
        "text": "Adversarial testing to verify that no incorrect images have been used in the training"
      },
      {
        "key": "C",
        "text": "Pairwise testing using combinatorics to look at a long list of photo parameters"
      },
      {
        "key": "D",
        "text": "Back-to-back testing using the version of the model before training and the new version of the model after being trained with additional images"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Kiểm thử Back-to-Back so sánh đầu ra của phiên bản mô hình cũ và mô hình mới sau khi huấn luyện thêm để xác minh sự cải thiện.",
    "category": "Test Techniques",
    "tags": [
      "Back-to-Back Testing",
      "Model Comparison",
      "Retraining"
    ]
  },
  {
    "id": "istqb-56",
    "questionNumber": 56,
    "text": "A motorcycle engine repair shop over wants to detect a leaking exhaust valve and fix it before it fails and causes catastrophic damage to the engine. The shop developed and trained a predictive model with historical data files from known healthy engines and ones which experienced a catastrophic failure due to exhaust valve failure. The shop evaluated 200 engines using this model and then disassembled the engines to assess the true state of the valves, recording the results in the confusion matrix below.\n\nPredicted Positive: TP = 90, FP = 10 (Total = 100)\nPredicted Negative: FN = 1, TN = 99 (Total = 100)\n\nWhat is the precision of this predictive model?",
    "options": [
      {
        "key": "A",
        "text": "90.0%"
      },
      {
        "key": "B",
        "text": "94.5%"
      },
      {
        "key": "C",
        "text": "98.9%"
      },
      {
        "key": "D",
        "text": "94.2%"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Precision = TP / (TP + FP) = 90 / (90 + 10) = 90 / 100 = 90.0%.",
    "category": "Model Metrics",
    "tags": [
      "Precision",
      "Confusion Matrix",
      "Metrics"
    ]
  },
  {
    "id": "istqb-57",
    "questionNumber": 57,
    "text": "A mobile app start-up company is implementing an AI-based chat assistant for e-commerce customers. In the process of planning the testing, the team realizes that the specifications are insufficient.\n\nWhich testing approach should be used to test this system?",
    "options": [
      {
        "key": "A",
        "text": "Exploratory testing"
      },
      {
        "key": "B",
        "text": "Static analysis"
      },
      {
        "key": "C",
        "text": "Equivalence partitioning"
      },
      {
        "key": "D",
        "text": "State transition testing"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Khi tài liệu tả kỹ thuật hoặc yêu cầu bị thiếu/chưa rõ ràng, Thử nghiệm khám phá (Exploratory testing) là tiếp cận tối ưu nhất.",
    "category": "Test Techniques",
    "tags": [
      "Exploratory Testing",
      "Specification-Free",
      "Chatbot"
    ]
  },
  {
    "id": "istqb-58",
    "questionNumber": 58,
    "text": "A tourist calls an airline to book a ticket and is connected with an automated system which is able to recognize speech, understand requests related to purchasing a ticket, and provide relevant travel options. When the tourist asks about the expected weather at the destination or potential impacts on operations because of the tight labor market the only response from the automated system is, \"I don't understand your question.\"\n\nThis AI system should be categorized as?",
    "options": [
      {
        "key": "A",
        "text": "General AI"
      },
      {
        "key": "B",
        "text": "Narrow AI"
      },
      {
        "key": "C",
        "text": "Super AI"
      },
      {
        "key": "D",
        "text": "Conventional AI"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Narrow AI (AI hẹp / AI yếu) chỉ thực hiện tốt một nhiệm vụ chuyên biệt trong phạm vi hẹp (như đặt vé máy bay) và thất bại khi hỏi ngoài phạm vi đó.",
    "category": "AI Concepts",
    "tags": [
      "Narrow AI",
      "AI Categories",
      "Speech Recognition"
    ]
  },
  {
    "id": "istqb-59",
    "questionNumber": 59,
    "text": "Which of the following are the three activities in the data acquisition activities for data preparation?",
    "options": [
      {
        "key": "A",
        "text": "Cleaning, transforming, augmenting"
      },
      {
        "key": "B",
        "text": "Feature selecting, feature growing, feature augmenting"
      },
      {
        "key": "C",
        "text": "Identifying, gathering, labeling"
      },
      {
        "key": "D",
        "text": "Building, approving, deploying"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Ba hoạt động chính trong Thu thập dữ liệu (Data acquisition) bao gồm: Xác định (Identifying), Thu thập (Gathering) và Gán nhãn (Labeling).",
    "category": "Data Preparation",
    "tags": [
      "Data Acquisition",
      "Data Pipeline",
      "Data Preparation"
    ]
  },
  {
    "id": "istqb-60",
    "questionNumber": 60,
    "text": "A word processing company is developing an automatic text correction tool. A machine learning algorithm was used to develop the auto text correction feature. The testers have discovered when they start typing \"Isle of Wight\" it fills in \"Isle of Eight\". Several UAT testers have accepted this change without noticing. What type of bias is this?",
    "options": [
      {
        "key": "A",
        "text": "Geographical/Locality"
      },
      {
        "key": "B",
        "text": "Automation/Complacency"
      },
      {
        "key": "C",
        "text": "Complacency/Disregard"
      },
      {
        "key": "D",
        "text": "Ignorance/Cognitive"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Automation Bias (Định kiến tự động hóa / Tính chủ quan) xảy ra khi con người quá tin tưởng vào gợi ý của máy tính và bỏ qua các lỗi rõ ràng.",
    "category": "Ethics & Bias",
    "tags": [
      "Automation Bias",
      "Human Factors",
      "Complacency"
    ]
  },
  {
    "id": "istqb-61",
    "questionNumber": 61,
    "text": "You are using a neural network to train a robot vacuum to navigate without bumping into objects. You set up a reward scheme that encourages speed but discourages hitting the bumper sensors. Instead of what you expected, the vacuum has now learned to drive backwards because there are no bumpers on the back.\n\nThis is an example of what type of behavior?",
    "options": [
      {
        "key": "A",
        "text": "Error-short-circuiting"
      },
      {
        "key": "B",
        "text": "Reward-hacking"
      },
      {
        "key": "C",
        "text": "Transparency"
      },
      {
        "key": "D",
        "text": "Interpretability"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Reward Hacking xảy ra khi robot vacuum học được cách lái lùi để tránh va chạm cảm biến trước nhằm tối đa hóa điểm thưởng mà không đạt mục tiêu dọn dẹp.",
    "category": "Quality Characteristics",
    "tags": [
      "Reward-Hacking",
      "Reinforcement Learning",
      "Side Effects"
    ]
  },
  {
    "id": "istqb-62",
    "questionNumber": 62,
    "text": "There is a growing backlog of unresolved defects for your project. You know the developers have an ML model that they have created which has learned which developers work on which type of software and the speed with which they resolve issues. How could you use this model to help reduce the backlog and implement more efficient defect resolution?",
    "options": [
      {
        "key": "A",
        "text": "Use it to prioritize defects automatically based on the time expected for the fix to be made, the speed of the fix, and the likelihood of regressions"
      },
      {
        "key": "B",
        "text": "Use it to assign defects to the best developer to resolve the problem and to load balance the defect assignments among the developers"
      },
      {
        "key": "C",
        "text": "Use it to determine the root cause of each defect and develop a process improvement plan that can be implemented to remove the most common root causes"
      },
      {
        "key": "D",
        "text": "Use it to review the code and determine where more defects are likely to occur so that testing can be targeted to those areas"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Sử dụng ML để phân tích kỹ năng và tốc độ xử lý của từng developer giúp Tự động phân chia và cân bằng tải công việc (Load balancing) giải quyết lỗi hiệu quả nhất.",
    "category": "AI for Testing",
    "tags": [
      "Defect Assignment",
      "Triage",
      "AI Management"
    ]
  },
  {
    "id": "istqb-63",
    "questionNumber": 63,
    "text": "Which of the following is an example of an input change where it would be expected that the AI system should be able to adapt?",
    "options": [
      {
        "key": "A",
        "text": "It has been trained to recognize cats and is given an image of a dog"
      },
      {
        "key": "B",
        "text": "It has been trained to recognize human faces at a particular resolution and it is given a human face image captured with a higher resolution"
      },
      {
        "key": "C",
        "text": "It has been trained to analyze mathematical models and is given a set of landscape pictures to classify"
      },
      {
        "key": "D",
        "text": "It has been trained to analyze customer buying trend data and is given information on supplier cost data"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Mô hình nhận diện khuôn mặt được huấn luyện ở độ phân giải nhất định phải có khả năng thích ứng (Adaptability) khi nhận hình ảnh có độ phân giải cao hơn.",
    "category": "Quality Characteristics",
    "tags": [
      "Adaptability",
      "Robustness",
      "Input Variation"
    ]
  },
  {
    "id": "istqb-64",
    "questionNumber": 64,
    "text": "A bank wants to use an algorithm to determine which applicants should be given a loan. The bank hires a data scientist to construct a logistic regression model to predict whether the applicant will repay the loan or not. The bank has enough data on past customers to randomly split the data into a training data set and a test/validation data set. A logistic regression model is constructed on the training data set using the following independent variables: Gender, Marital status, Number of dependents, Education, Income, Loan amount, Loan term, Credit score. The model reveals that those with higher credit scores and larger total incomes are more likely to repay their loans. The data scientist has suggested that there might be bias present in the model based on previous models created for other banks.\n\nGiven this information, what is the best test approach to check for potential bias in the model?",
    "options": [
      {
        "key": "A",
        "text": "Experienced-based testing should be used to confirm that the training data set is operationally relevant. This can include applying exploratory data analysis (EDA) to check for bias within the training data set."
      },
      {
        "key": "B",
        "text": "Back-to-back testing should be used to compare the model created using the training data set to another model created using the test data set. If the two models significantly differ, it will indicate there is bias in the original model"
      },
      {
        "key": "C",
        "text": "Acceptance testing should be used to make sure the algorithm is suitable for the customer. The team can re-work the acceptance criteria such that the algorithm is sure to correctly predict the remaining applicants that have been set aside for the validation data set ensuring no bias is present."
      },
      {
        "key": "D",
        "text": "A/B testing should be used to verify that the test data set does not detect any bias that might have been introduced by the original training data. If the two models significantly differ, it will indicate there is bias in the original model."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Sử dụng EDA (Exploratory Data Analysis) kết hợp với kinh nghiệm kiểm thử để kiểm tra sự phân phối và phát hiện định kiến (bias) tiềm ẩn trong tập dữ liệu huấn luyện.",
    "category": "Ethics & Bias",
    "tags": [
      "EDA",
      "Exploratory Data Analysis",
      "Bias Detection"
    ]
  },
  {
    "id": "istqb-65",
    "questionNumber": 65,
    "text": "A team of software testers is attempting to create an AI algorithm to assist in software testing. This particular team has gone through over 40 iterations of testing and cannot afford to spend as much time as it takes to run the full regression test suite. They are hoping to have the algorithm reduce the amount of testing required thus reducing the time needed for each testing cycle.\n\nHow can an AI-based tool be expected to assist in this reduction?",
    "options": [
      {
        "key": "A",
        "text": "By using a clustering method to quantify the relationships between test cases and then assigning each test case to a category"
      },
      {
        "key": "B",
        "text": "By performing optimization of the data from past iterations to see where the most common defects occurred and select the corresponding test cases"
      },
      {
        "key": "C",
        "text": "By performing bayesian analysis to estimate the types of human interactions that are expected to be seen in the system and then selecting those test cases"
      },
      {
        "key": "D",
        "text": "By using A/B testing to compare the last update with the newest change and compare metrics between the two"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Sử dụng AI phân tích lịch sử lỗi và mức độ thay đổi mã nguồn để Tối ưu hóa và lựa chọn tập kiểm thử hồi quy (Regression Test Selection) trọng tâm nhất.",
    "category": "AI for Testing",
    "tags": [
      "Regression Suite Optimization",
      "Test Selection",
      "Risk Prioritization"
    ]
  },
  {
    "id": "istqb-66",
    "questionNumber": 66,
    "text": "A company is using a spam filter to attempt to identify which emails should be marked as spam. Detection rules are created by the filter that causes a message to be classified as spam. An attacker wishes to have all messages internal to the company be classified as spam. So, the attacker sends messages with obvious red flags in the body of the email and modifies the from portion of the email to make it appear that the emails have been sent by company members. The testers plan to use exploratory data analysis (EDA) to detect the attack and use this information to prevent future adversarial attacks.\n\nHow could EDA be used to detect this attack?",
    "options": [
      {
        "key": "A",
        "text": "EDA can help detect the outlier emails from the real emails"
      },
      {
        "key": "B",
        "text": "EDA can detect and remove the false emails"
      },
      {
        "key": "C",
        "text": "EDA can restrict how many inputs can be provided by unique users"
      },
      {
        "key": "D",
        "text": "EDA cannot be used to detect the attack"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "EDA giúp phát hiện các điểm dữ liệu bất thường / ngoại lệ (outliers) so với phân phối dữ liệu thông thường trong các cuộc tấn công dữ liệu.",
    "category": "Adversarial Testing",
    "tags": [
      "EDA",
      "Outlier Detection",
      "Data Poisoning"
    ]
  },
  {
    "id": "istqb-67",
    "questionNumber": 67,
    "text": "Which of the following characteristics of AI-based systems make it more difficult to ensure they are safe?",
    "options": [
      {
        "key": "A",
        "text": "Simplicity"
      },
      {
        "key": "B",
        "text": "Sustainability"
      },
      {
        "key": "C",
        "text": "Non-determinism"
      },
      {
        "key": "D",
        "text": "Robustness"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Tính không định tính (Non-determinism) khiến hệ thống AI có thể cho ra các kết quả khác nhau với cùng một đầu vào, gây khó khăn lớn nhất cho việc đảm bảo an toàn (Safety).",
    "category": "Quality Characteristics",
    "tags": [
      "Non-determinism",
      "Safety",
      "System Verification"
    ]
  },
  {
    "id": "istqb-68",
    "questionNumber": 68,
    "text": "Consider a natural language processing (NLP) algorithm that attempts to predict the next word that you would like to type in a text message. An update to the algorithm has been created that should increase the accuracy of the predictions based on user typing patterns. The old algorithm was rated for accuracy by the users. Then, after the new update was released, the users rated the updated algorithm. A statistical test was used to compare between the two versions of the algorithm to see whether or not the update should remain in place.\n\nThis is an example of what type of testing?",
    "options": [
      {
        "key": "A",
        "text": "Metamorphic testing"
      },
      {
        "key": "B",
        "text": "A/B testing"
      },
      {
        "key": "C",
        "text": "Exploratory testing"
      },
      {
        "key": "D",
        "text": "Pairwise testing"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "So sánh đánh giá của người dùng giữa hai phiên bản thuật toán (cũ và mới) được triển khai thực tế là kiểm thử A/B (A/B testing).",
    "category": "Test Techniques",
    "tags": [
      "A/B Testing",
      "NLP",
      "User Metrics"
    ]
  },
  {
    "id": "istqb-69",
    "questionNumber": 69,
    "text": "A local business has a mail pickup/delivery robot for their office. The robot currently uses a track to move between pickup/drop off locations. When it arrives at a destination, the robot stops to allow a human to remove or deposit mail.\n\nThe office has decided to upgrade the robot to include AI capabilities that allow the robot to perform its duties without a track, without running into obstacles, and without human intervention.\n\nThe test team is creating a list of new and previously established test objectives and acceptance criteria to be used in the testing of the robot upgrade. Which of the following test objectives will test an AI quality characteristic for this system?",
    "options": [
      {
        "key": "A",
        "text": "The robot must evolve to optimize its routing"
      },
      {
        "key": "B",
        "text": "The robot must recharge for no more than six hours a day"
      },
      {
        "key": "C",
        "text": "The robot must record the time of each delivery which is compiled into a report"
      },
      {
        "key": "D",
        "text": "The robot must complete 99.99% of its deliveries each day"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Đặc tính AI cốt lõi là khả năng tự tiến hóa và tối ưu hóa tuyến đường (Evolve to optimize routing) thông qua tự học (self-learning).",
    "category": "Quality Characteristics",
    "tags": [
      "Adaptability",
      "Self-Learning",
      "AI Characteristics"
    ]
  },
  {
    "id": "istqb-70",
    "questionNumber": 70,
    "text": "Consider an AI-system in which the complex internal structure has been generated by another software system. Why would the tester choose to do black-box testing on this particular system?",
    "options": [
      {
        "key": "A",
        "text": "Test automation can be built quickly and easily from the test cases developed during black-box testing"
      },
      {
        "key": "B",
        "text": "The tester wishes to better understand the logic of the software used to create the internal structure"
      },
      {
        "key": "C",
        "text": "The black-box testing method will allow the tester to check the transparency of the algorithm used to create the internal structure"
      },
      {
        "key": "D",
        "text": "Black-box testing eliminates the need for the tester to understand the internal structure of the AI-system"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Black-box testing đánh giá hành vi chức năng dựa trên Input-Output mà KHÔNG cần phải hiểu cấu trúc bên trong phức tạp hoặc tự động sinh ra của mô hình AI.",
    "category": "Test Techniques",
    "tags": [
      "Black-Box Testing",
      "Complexity",
      "Test Strategy"
    ]
  },
  {
    "id": "istqb-71",
    "questionNumber": 71,
    "text": "Before deployment of an AI based system, a developer is expected to demonstrate in a test environment how decisions are made. Which of the following characteristics does decision making fall under?",
    "options": [
      {
        "key": "A",
        "text": "Explainability"
      },
      {
        "key": "B",
        "text": "Autonomy"
      },
      {
        "key": "C",
        "text": "Self-learning"
      },
      {
        "key": "D",
        "text": "Non-determinism"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Explainability (Tính giải thích được) đề cập đến khả năng minh chứng và giải thích lý do tại sao hệ thống AI đưa ra quyết định đó.",
    "category": "Quality Characteristics",
    "tags": [
      "Explainability",
      "XAI",
      "Interpretability"
    ]
  },
  {
    "id": "istqb-72",
    "questionNumber": 72,
    "text": "Which of the following is an example of overfitting?",
    "options": [
      {
        "key": "A",
        "text": "The model is not able to generalize to accommodate new types of data"
      },
      {
        "key": "B",
        "text": "The model is too simplistic for the data"
      },
      {
        "key": "C",
        "text": "The model is missing relationships between the inputs and outputs"
      },
      {
        "key": "D",
        "text": "The model discards data it considers to be noise or outliers"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Overfitting làm mô hình mất khả năng tổng quát hóa (generalize) trên dữ liệu mới chưa từng gặp, mặc dù đạt độ chính xác rất cao trên dữ liệu huấn luyện.",
    "category": "ML Fundamentals",
    "tags": [
      "Overfitting",
      "Generalization",
      "Model Quality"
    ]
  },
  {
    "id": "istqb-73",
    "questionNumber": 73,
    "text": "Consider a machine learning model predicting stroke risk. Confusion matrix for 80 patients:\nTP = 15, FP = 10 (Total = 25)\nFN = 5, TN = 50 (Total = 55)\n\nThe testers calculated a metric value of 2/3 (0.6667). Which metric did they calculate?",
    "options": [
      {
        "key": "A",
        "text": "F1-score"
      },
      {
        "key": "B",
        "text": "Precision"
      },
      {
        "key": "C",
        "text": "Recall"
      },
      {
        "key": "D",
        "text": "Accuracy"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Precision = 15/25 = 0.6. Recall = 15/20 = 0.75. F1-Score = 2 * (0.6 * 0.75) / (0.6 + 0.75) = 0.9 / 1.35 = 2/3 (0.6667).",
    "category": "Model Metrics",
    "tags": [
      "F1-Score",
      "Precision",
      "Recall"
    ]
  },
  {
    "id": "istqb-74",
    "questionNumber": 74,
    "text": "Which of the following is a technique used in machine learning?",
    "options": [
      {
        "key": "A",
        "text": "Decision trees"
      },
      {
        "key": "B",
        "text": "Equivalence partitioning"
      },
      {
        "key": "C",
        "text": "Boundary value analysis"
      },
      {
        "key": "D",
        "text": "Decision tables"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Cây quyết định (Decision trees) là một thuật toán Machine Learning phổ biến dùng cho cả bài toán Phân loại và Hồi quy.",
    "category": "ML Fundamentals",
    "tags": [
      "Decision Trees",
      "Machine Learning",
      "Algorithms"
    ]
  },
  {
    "id": "istqb-75",
    "questionNumber": 75,
    "text": "A transportation company created an AI-based program to plan routes. The test team uses data from medium-speed vehicles in metamorphic testing. Which of the following describes the next phase of metamorphic testing?",
    "options": [
      {
        "key": "A",
        "text": "The team tests the time required for the fast and slow vehicles to travel the same route as the medium vehicle. Then, by calculating the speed difference, they verify that arrival time meets expected metamorphic relations."
      },
      {
        "key": "B",
        "text": "The team decomposes each route into components affecting travel time and calculates fast and slow times."
      },
      {
        "key": "C",
        "text": "The team uses an AI system to select dissimilar routes."
      },
      {
        "key": "D",
        "text": "The team creates routes that are longer and shorter."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Trong kiểm thử biến đổi hình thái (Metamorphic testing), sau khi thử nghiệm dữ liệu cơ bản, đội kiểm thử kiểm tra xem mối quan hệ Metamorphic (Metamorphic Relations) về thời gian/vận tốc có thỏa mãn không.",
    "category": "Test Techniques",
    "tags": [
      "Metamorphic Testing",
      "Metamorphic Relations",
      "Route Planning"
    ]
  },
  {
    "id": "istqb-76",
    "questionNumber": 76,
    "text": "The stakeholders of an ML model confirmed objectives, aligned business priorities, and selected a framework and model. What should be the next step in the ML workflow?",
    "options": [
      {
        "key": "A",
        "text": "Prepare and pre-process the data that will be used to train and test the model"
      },
      {
        "key": "B",
        "text": "Tune the machine learning algorithm based on objectives and business priorities"
      },
      {
        "key": "C",
        "text": "Agree on defined acceptance criteria for the machine learning model"
      },
      {
        "key": "D",
        "text": "Evaluate the selection of the framework and the model"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Sau khi thống nhất mục tiêu và chọn mô hình/framework, bước tiếp theo trong quy trình ML là Chuẩn bị và Tiền xử lý dữ liệu (Data Preparation & Pre-processing).",
    "category": "ML Workflow",
    "tags": [
      "ML Workflow",
      "Data Preparation",
      "Data Pipeline"
    ]
  },
  {
    "id": "istqb-77",
    "questionNumber": 77,
    "text": "You are developing test automation for an e-commerce system. GUI object recognition frequently fails because developers change identifiers. How could AI help make automation more reliable?",
    "options": [
      {
        "key": "A",
        "text": "It could identify the objects multiple ways and then determine the most commonly used and stable identification for each object"
      },
      {
        "key": "B",
        "text": "It could modify the automation code to ignore unrecognizable objects to avoid failures."
      },
      {
        "key": "C",
        "text": "It could dynamically name the objects, altering the source code, so the object names will match the object names used in the automation"
      },
      {
        "key": "D",
        "text": "It could generate a model that will anticipate developer changes and pre-alter the test automation code accordingly"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Công cụ tự động hóa AI (Self-healing) sử dụng nhiều phương thức định danh (Computer vision, thuộc tính DOM) để nhận diện object ổn định ngay cả khi ID thay đổi.",
    "category": "AI for Testing",
    "tags": [
      "Self-Healing Automation",
      "Test Automation",
      "Object Recognition"
    ]
  },
  {
    "id": "istqb-78",
    "questionNumber": 78,
    "text": "Which of the following is a dataset issue that can be resolved using pre-processing?",
    "options": [
      {
        "key": "A",
        "text": "Insufficient data"
      },
      {
        "key": "B",
        "text": "Invalid data"
      },
      {
        "key": "C",
        "text": "Wanted outliers"
      },
      {
        "key": "D",
        "text": "Numbers stored as strings"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Chuyển đổi kiểu dữ liệu (chẳng hạn số đang lưu ở dạng chuỗi '123' thành kiểu float/int) là bài toán xử lý được ở bước Tiền xử lý dữ liệu (Data pre-processing).",
    "category": "Data Preparation",
    "tags": [
      "Data Preprocessing",
      "Data Cleaning",
      "Data Types"
    ]
  },
  {
    "id": "istqb-79",
    "questionNumber": 79,
    "text": "Which of the following problems would best be solved using the supervised learning category of regression?",
    "options": [
      {
        "key": "A",
        "text": "Determining the optimal age for a chicken's egg laying production using input data of the chicken's age and average daily egg production for one million chickens"
      },
      {
        "key": "B",
        "text": "Recognizing a knife in carry on luggage at a security checkpoint in an airport scanner"
      },
      {
        "key": "C",
        "text": "Determining if an animal is a pig or a cow based on image recognition"
      },
      {
        "key": "D",
        "text": "Predicting shopper purchasing behavior based on the category of shopper and the positioning of promotional displays within a store"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Dự đoán sản lượng trứng trung bình (giá trị số liên tục) dựa trên độ tuổi gà là bài toán Hồi quy (Regression) trong Học có giám sát.",
    "category": "ML Fundamentals",
    "tags": [
      "Regression",
      "Supervised Learning",
      "Continuous Output"
    ]
  },
  {
    "id": "istqb-80",
    "questionNumber": 80,
    "text": "Which ONE of the following options describes the LEAST likely usage of AI for the detection of GUI changes resulting from changes in test objects?",
    "options": [
      {
        "key": "A",
        "text": "Using an ML-based classifier to flag if changes in GUI are to be flagged for humans."
      },
      {
        "key": "B",
        "text": "Using a computer vision to compare the GUI before and after the test object changes."
      },
      {
        "key": "C",
        "text": "Using a pixel comparison of the GUI before and after the change to check the differences."
      },
      {
        "key": "D",
        "text": "Using a vision-based detection of the GUI layout changes before and after test object changes."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "So sánh điểm ảnh thô (Pixel-by-pixel comparison) là kỹ thuật so sánh hình ảnh truyền thống dễ giòn gãy (brittle), không phải là công nghệ AI/Computer Vision hiện đại.",
    "category": "AI for Testing",
    "tags": [
      "Visual Testing",
      "Computer Vision",
      "GUI Changes"
    ]
  },
  {
    "id": "istqb-81",
    "questionNumber": 81,
    "text": "Which ONE of the following models BEST describes a way to model defect prediction by looking at the history of bugs in modules by using code quality metrics of modules of historical versions as input?",
    "options": [
      {
        "key": "A",
        "text": "Clustering of similar code modules to predict based on similarity."
      },
      {
        "key": "B",
        "text": "Search for similar code based on natural language processing."
      },
      {
        "key": "C",
        "text": "Using a classification model to predict the presence of a defect by using code quality metrics as the input data."
      },
      {
        "key": "D",
        "text": "Identifying the relationship between developers and the modules developed by them."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Mô hình Phân loại (Classification) dự đoán khả năng có lỗi của module dựa trên các chỉ số chất lượng mã nguồn (code metrics) đầu vào.",
    "category": "AI for Testing",
    "tags": [
      "Defect Prediction",
      "Code Quality",
      "Classification"
    ]
  },
  {
    "id": "istqb-82",
    "questionNumber": 82,
    "text": "Which ONE of the following is the BEST option to optimize regression test selection and prevent the regression suite from growing large?",
    "options": [
      {
        "key": "A",
        "text": "Identifying suitable tests by looking at the complexity of the test cases."
      },
      {
        "key": "B",
        "text": "Using a random subset of tests."
      },
      {
        "key": "C",
        "text": "Using an AI-based tool to optimize the regression test suite by analyzing past test results."
      },
      {
        "key": "D",
        "text": "Automating test scripts using AI-based test automation tools."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Sử dụng công cụ AI phân tích kết quả kiểm thử quá khứ và độ thay đổi mã nguồn để tối ưu hóa và thu gọn bộ kiểm thử hồi quy (Regression Test Suite).",
    "category": "AI for Testing",
    "tags": [
      "Regression Optimization",
      "Test Prioritization",
      "Test Suite"
    ]
  },
  {
    "id": "istqb-83",
    "questionNumber": 83,
    "text": "What requirements are given in text documents, which ONE of the following is the BEST way to generate test cases from these requirements?",
    "options": [
      {
        "key": "A",
        "text": "Natural language processing on textual requirements"
      },
      {
        "key": "B",
        "text": "Analyzing source code for generating test cases"
      },
      {
        "key": "C",
        "text": "GUI analysis using computer vision"
      },
      {
        "key": "D",
        "text": "Machine learning on logs of execution"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Sử dụng Xử lý ngôn ngữ tự nhiên (NLP) trên tài liệu yêu cầu dạng văn bản để tự động trích xuất kịch bản kiểm thử.",
    "category": "AI for Testing",
    "tags": [
      "NLP",
      "Test Case Generation",
      "Requirements"
    ]
  },
  {
    "id": "istqb-84",
    "questionNumber": 84,
    "text": "Which ONE of the following does NOT describe an AI technology-related characteristic that differentiates AI test environments from other test environments?",
    "options": [
      {
        "key": "A",
        "text": "Challenges resulting from low accuracy of the models"
      },
      {
        "key": "B",
        "text": "The challenge of providing explainability to the decision made by the system"
      },
      {
        "key": "C",
        "text": "The challenge of mimicking undefined scenarios generated due to self-learning"
      },
      {
        "key": "D",
        "text": "Challenges in the creation of scenarios of human handover for autonomous systems"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Quy trình giao tiếp bàn giao cho con người (Human handover) là yêu cầu an toàn chức năng, không phải đặc tính công nghệ AI đặc thù của môi trường kiểm thử.",
    "category": "Test Environment",
    "tags": [
      "Test Environment",
      "AI Characteristics",
      "Human Handover"
    ]
  },
  {
    "id": "istqb-85",
    "questionNumber": 85,
    "text": "A System was developed for screening X-rays of patients for cancer detection using multiple individually trained ML models chained together in a workflow. Order of chaining should not impact accuracy. Which kinds of tests are MOST APPROPRIATE?\n1. Pairwise testing of various models\n2. Testing the entire pipeline for accuracy\n3. Testing of different sequences of chaining the model",
    "options": [
      {
        "key": "A",
        "text": "1 and 3"
      },
      {
        "key": "B",
        "text": "Only 3"
      },
      {
        "key": "C",
        "text": "1 and 2"
      },
      {
        "key": "D",
        "text": "Only 2"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Kiểm thử Pairwise giữa các mô hình và Kiểm thử toàn bộ đường ống (End-to-End Pipeline) là hai phương pháp phù hợp nhất để đánh giá chuỗi mô hình ML.",
    "category": "Test Strategy",
    "tags": [
      "Pipeline Testing",
      "Pairwise",
      "Medical AI"
    ]
  },
  {
    "id": "istqb-86",
    "questionNumber": 86,
    "text": "An ML engineer is trying to determine the correctness of a new open-source implementation \"X\" of a supervised regression algorithm. Which ONE of the following would be an APPROPRIATE strategy?",
    "options": [
      {
        "key": "A",
        "text": "Compare the R-Square score of the model X with a different model created using a different programming language while using the same algorithm and the same training and testing data."
      },
      {
        "key": "B",
        "text": "Add 10% of the rows randomly, create another model, and compare the R-Square scores of both models."
      },
      {
        "key": "C",
        "text": "Train various models by changing the order of input features and verify that the R-Square scores of these models varies significantly."
      },
      {
        "key": "D",
        "text": "Drop 10% of the rows randomly, create another model, and compare the R-Square scores of both models."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "So sánh chỉ số R-Square của mô hình X với một mô hình tham chiếu được xây dựng bằng thuật toán tương tự trên cùng tập dữ liệu (Back-to-Back Testing).",
    "category": "Model Verification",
    "tags": [
      "Back-to-Back Testing",
      "Algorithm Verification",
      "R-Squared"
    ]
  },
  {
    "id": "istqb-87",
    "questionNumber": 87,
    "text": "Which ONE of the following options describes a scenario of A/B testing the MOST?",
    "options": [
      {
        "key": "A",
        "text": "A performance comparison of two different ML implementations on the same input data."
      },
      {
        "key": "B",
        "text": "A performance comparison of an ML system on two different input datasets."
      },
      {
        "key": "C",
        "text": "A comparison of two different offers in a recommendation system to decide on the more effective offer for the same users."
      },
      {
        "key": "D",
        "text": "A comparison of two different websites to observe from a user acceptance perspective."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Kiểm thử đối kháng (Adversarial testing) cố tình tạo ra nhiễu đối kháng để kiểm tra khả năng phòng thủ và độ tin cậy của mô hình AI.",
    "category": "Test Techniques",
    "tags": [
      "A/B Testing",
      "Recommendation System",
      "Production Comparison"
    ]
  },
  {
    "id": "istqb-88",
    "questionNumber": 88,
    "text": "Which ONE of the following describes a situation of back-to-back testing the LEAST?",
    "options": [
      {
        "key": "A",
        "text": "Comparison of the results of a home-grown neural network model ML model with results in a neural network model implemented in a standard implementation (e.g., Pytorch) for the same data."
      },
      {
        "key": "B",
        "text": "Comparison of the results of a current neural network model ML model implemented in platform A (e.g. Pytorch) with a similar neural network model ML model implemented in platform B (e.g. Tensorflow), for the same data."
      },
      {
        "key": "C",
        "text": "Comparison of the results of the current neural network ML model on the current data set with a slightly modified data set."
      },
      {
        "key": "D",
        "text": "Comparison of the results of a neural network ML model with a current decision tree ML model for the same data."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Kiểm thử sự chuyển giao cho con người (Human handover testing) cực kỳ quan trọng đối với xe tự lái cấp độ 3 khi gặp tình huống AI không thể xử lý.",
    "category": "Test Techniques",
    "tags": [
      "Back-to-Back Testing",
      "Model Comparison",
      "Metamorphic Testing"
    ]
  },
  {
    "id": "istqb-89",
    "questionNumber": 89,
    "text": "Pairwise testing can be used in self-driving cars to control parameter explosion. Which option is LEAST likely to be a reason for this parameter growth?",
    "options": [
      {
        "key": "A",
        "text": "Different features like ADAS, lane change assistance, etc."
      },
      {
        "key": "B",
        "text": "Different road types"
      },
      {
        "key": "C",
        "text": "ML model metrics that evaluate functional performance"
      },
      {
        "key": "D",
        "text": "Different weather conditions"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Hiện tượng rò rỉ dữ liệu (Data Leakage) làm sai lệch đánh giá vì mô hình đã 'học thuộc' dữ liệu kiểm thử trong quá trình huấn luyện.",
    "category": "Test Techniques",
    "tags": [
      "Pairwise Testing",
      "Autonomous Driving",
      "Parameters"
    ]
  },
  {
    "id": "istqb-90",
    "questionNumber": 90,
    "text": "Which ONE of the following statements is a CORRECT adversarial example in the context of machine learning systems working on image classifiers?",
    "options": [
      {
        "key": "A",
        "text": "These attacks cannot be prevented by retraining the model with these examples augmented to the training data."
      },
      {
        "key": "B",
        "text": "These attack examples cause a model to predict the correct class with slightly less accuracy even though they look like the original image."
      },
      {
        "key": "C",
        "text": "Black box attacks based on adversarial examples create a duplicate model of the original."
      },
      {
        "key": "D",
        "text": "These examples are model-specific and are not likely to cause another model trained on the same task to fail."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Lớp ẩn (Hidden layer) thực hiện tính toán biến đổi phi tuyến tính và trích xuất đặc trưng từ các lớp trước đó.",
    "category": "Adversarial Testing",
    "tags": [
      "Adversarial Testing",
      "Black-Box Attack",
      "Surrogate Model"
    ]
  },
  {
    "id": "istqb-91",
    "questionNumber": 91,
    "text": "AI-enabled medical devices require safety-critical certification. Which THREE facets are MOST required for certification?\n1. Autonomy\n2. Maintainability\n3. Safety\n4. Transparency\n5. Side effects/reward hacking",
    "options": [
      {
        "key": "A",
        "text": "Aspects 1, 4, and 5"
      },
      {
        "key": "B",
        "text": "Aspects 2, 3, and 4"
      },
      {
        "key": "C",
        "text": "Aspects 1, 2, and 3"
      },
      {
        "key": "D",
        "text": "Aspects 3, 4, and 5"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Phương pháp gán nhãn thủ công (Manual labeling) có chi phí cao nhất và tốn nhiều thời gian nhất khi chuẩn bị dữ liệu.",
    "category": "Quality Characteristics",
    "tags": [
      "Medical Device",
      "Certification",
      "Safety & Compliance"
    ]
  },
  {
    "id": "istqb-92",
    "questionNumber": 92,
    "text": "Which ONE of the following tests is MOST likely to describe a useful test to help detect different kinds of biases in an ML pipeline?",
    "options": [
      {
        "key": "A",
        "text": "Test the distribution shift in the training data for inappropriate bias."
      },
      {
        "key": "B",
        "text": "Test the model during model evaluation for bias."
      },
      {
        "key": "C",
        "text": "Check the input test data for potential sample bias."
      },
      {
        "key": "D",
        "text": "Testing the data pipeline for any sources of algorithmic bias."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Kiểm thử biến đổi hình thái (Metamorphic testing) sử dụng các mối quan hệ biến đổi để kiểm tra tính nhất quán của hệ thống mà không cần Oracle hoàn chỉnh.",
    "category": "Ethics & Bias",
    "tags": [
      "Sample Bias",
      "Data Auditing",
      "Ethics"
    ]
  },
  {
    "id": "istqb-93",
    "questionNumber": 93,
    "text": "Which ONE of the following options is the LEAST appropriate test to be performed for testing a feature related to autonomy?",
    "options": [
      {
        "key": "A",
        "text": "Test for human handover after a given time interval"
      },
      {
        "key": "B",
        "text": "Test for human handover when it should actually not be relinquishing control"
      },
      {
        "key": "C",
        "text": "Test for human handover to give rest to the system"
      },
      {
        "key": "D",
        "text": "Test for human handover requiring mandatory relinquishing control"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Độ chính xác (Accuracy) không phản ánh đúng hiệu năng mô hình khi tập dữ liệu bị mất cân bằng lớp nghiêm trọng (Imbalanced dataset).",
    "category": "Quality Characteristics",
    "tags": [
      "Autonomy",
      "Human Handover",
      "Safety Testing"
    ]
  },
  {
    "id": "istqb-94",
    "questionNumber": 94,
    "text": "A self-learning combat flight model behaved poorly when exposed to real-world data despite passing quality tests on combat logs. Which option is LEAST likely to describe the reason?",
    "options": [
      {
        "key": "A",
        "text": "The fast pace of change caused a deviation from the trained model."
      },
      {
        "key": "B",
        "text": "There was an algorithmic bias in the AI system."
      },
      {
        "key": "C",
        "text": "The unknown nature and insufficient specification of the operating environment might have caused the poor performance."
      },
      {
        "key": "D",
        "text": "The difficulty of defining criteria for improvement before the model can be accepted."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Hàm kích hoạt (Activation function) giới thiệu tính phi tuyến (non-linearity) giúp mạng nơ-ron học được các mẫu dữ liệu phức tạp.",
    "category": "Testing Challenges",
    "tags": [
      "Self-Learning",
      "Real-World Performance",
      "Environment Drift"
    ]
  },
  {
    "id": "istqb-95",
    "questionNumber": 95,
    "text": "A cancer prediction model had high accuracy in isolation but failed in clinical practice because it missed real cancer cases. What test planning deficiency caused this?",
    "options": [
      {
        "key": "A",
        "text": "A lack of similarity between the training and testing data."
      },
      {
        "key": "B",
        "text": "A lack of focus on choosing the right functional performance metrics."
      },
      {
        "key": "C",
        "text": "A lack of focus on non-functional requirements testing."
      },
      {
        "key": "D",
        "text": "The input data has not been tested for data quality before its use for model testing."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Khả năng phục hồi và chống chịu nhiễu (Robustness) giúp hệ thống hoạt động ổn định khi dữ liệu đầu vào bị biến dạng nhẹ.",
    "category": "Model Metrics",
    "tags": [
      "Recall",
      "Accuracy Trap",
      "Medical AI"
    ]
  },
  {
    "id": "istqb-96",
    "questionNumber": 96,
    "text": "Storms in Colombia caused massive coffee production losses and stock price drops. Which type of testing SHOULD be performed on an ML stock prediction model to detect the influence of such events?",
    "options": [
      {
        "key": "A",
        "text": "Testing for security"
      },
      {
        "key": "B",
        "text": "Testing for accuracy"
      },
      {
        "key": "C",
        "text": "Testing for concept drift"
      },
      {
        "key": "D",
        "text": "Testing for bias"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Gán nhãn tự động bằng quy tắc (Rule-based auto-labeling) giúp tăng tốc độ gán nhãn cho tập dữ liệu lớn.",
    "category": "Model Maintenance",
    "tags": [
      "Concept Drift",
      "External Events",
      "Model Degradation"
    ]
  },
  {
    "id": "istqb-97",
    "questionNumber": 97,
    "text": "Which ONE of the following does NOT describe a challenge for acquiring test data in ML systems?",
    "options": [
      {
        "key": "A",
        "text": "The nature of data constantly changes with time."
      },
      {
        "key": "B",
        "text": "The data for the use case is being generated at a fast pace."
      },
      {
        "key": "C",
        "text": "Compliance with data privacy laws requires proper care to be taken of personal data."
      },
      {
        "key": "D",
        "text": "Test data is being sourced from public sources."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Kiểm thử A/B yêu cầu chia lưu lượng người dùng thực tế thành các nhóm để so sánh hiệu quả giữa phiên bản A và phiên bản B.",
    "category": "Data Acquisition",
    "tags": [
      "Data Acquisition",
      "Public Datasets",
      "Test Data"
    ]
  },
  {
    "id": "istqb-98",
    "questionNumber": 98,
    "text": "Which ONE of the following tests is LEAST likely to be performed during the ML model testing phase?",
    "options": [
      {
        "key": "A",
        "text": "Testing the speed of the training of the model"
      },
      {
        "key": "B",
        "text": "Testing the speed of the prediction of the model"
      },
      {
        "key": "C",
        "text": "Testing the API of the service powered by the ML model"
      },
      {
        "key": "D",
        "text": "Testing the accuracy of the classification model"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Ma trận nhầm lẫn (Confusion Matrix) cung cấp cái nhìn chi tiết về số lượng TP, FP, TN, FN của mô hình phân loại.",
    "category": "Test Strategy",
    "tags": [
      "Model Testing",
      "Integration Testing",
      "System Testing"
    ]
  },
  {
    "id": "istqb-99",
    "questionNumber": 99,
    "text": "Which ONE of the following types of coverage SHOULD be used if test cases need to cause each neuron to achieve both positive and negative activation values?",
    "options": [
      {
        "key": "A",
        "text": "Value coverage"
      },
      {
        "key": "B",
        "text": "Sign change coverage"
      },
      {
        "key": "C",
        "text": "Neuron coverage"
      },
      {
        "key": "D",
        "text": "Threshold coverage"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Định kiến thuật toán (Algorithmic bias) có thể phát sinh nếu thuật toán tối ưu hóa dựa trên các tham số không công bằng.",
    "category": "Coverage Criteria",
    "tags": [
      "Sign-Change Coverage",
      "Neural Networks",
      "White-Box Testing"
    ]
  },
  {
    "id": "istqb-100",
    "questionNumber": 100,
    "text": "Which ONE of the following options BEST describes the inputs used to compute the activation value of a neuron in a neural network?",
    "options": [
      {
        "key": "A",
        "text": "Individual bias at the neuron level, activation values of neurons in the previous layer, and weights assigned to the connections between the neurons."
      },
      {
        "key": "B",
        "text": "Activation values of neurons in the previous layer, and weights assigned to the connections between the neurons."
      },
      {
        "key": "C",
        "text": "Individual bias at the neuron level, and activation values of neurons in the previous layer."
      },
      {
        "key": "D",
        "text": "Individual bias at the neuron level, and weights assigned to the connections between the neurons."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Lan truyền ngược (Backpropagation) tính toán đạo hàm của hàm mất mát theo từng trọng số để cập nhật trọng số mạng nơ-ron.",
    "category": "Neural Networks",
    "tags": [
      "Activation Value",
      "Bias",
      "Weights"
    ]
  },
  {
    "id": "istqb-101",
    "questionNumber": 101,
    "text": "A cancer detection system targets a disease with a 2% prevalence rate in the population. Which combination of functional metrics should be the MOST IMPORTANT target for improvement?",
    "options": [
      {
        "key": "A",
        "text": "Maximize recall and precision"
      },
      {
        "key": "B",
        "text": "Maximize specificity and number of classes"
      },
      {
        "key": "C",
        "text": "Maximize precision and accuracy"
      },
      {
        "key": "D",
        "text": "Maximize accuracy and recall"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Kiểm thử hiệu năng mô hình AI cần đánh giá cả độ trễ suy luận (Inference latency) và mức tiêu thụ tài nguyên phần cứng.",
    "category": "Model Metrics",
    "tags": [
      "Imbalanced Data",
      "Precision",
      "Recall"
    ]
  },
  {
    "id": "istqb-102",
    "questionNumber": 102,
    "text": "Rotten tomato classification matrix:\nPredicted Rotten: TP = 45, FP = 8\nPredicted Fresh: FN = 5, TN = 42\n\nWhich set of values for accuracy, recall, and specificity (respectively) is CORRECT?",
    "options": [
      {
        "key": "A",
        "text": "0.84, 1, 0.9"
      },
      {
        "key": "B",
        "text": "0.87, 0.9, 0.84"
      },
      {
        "key": "C",
        "text": "1, 0.9, 0.8"
      },
      {
        "key": "D",
        "text": "1, 0.87, 0.84"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Dữ liệu huấn luyện bị thiếu tính đa dạng sẽ làm giảm khả năng tổng quát hóa của mô hình khi triển khai thực tế.",
    "category": "Model Metrics",
    "tags": [
      "Accuracy",
      "Recall",
      "Specificity"
    ]
  },
  {
    "id": "istqb-103",
    "questionNumber": 103,
    "text": "Which ONE of the following factors is NOT a factor affecting the ML functional performance?",
    "options": [
      {
        "key": "A",
        "text": "The number of classes"
      },
      {
        "key": "B",
        "text": "The quality of the labeling"
      },
      {
        "key": "C",
        "text": "Biased data"
      },
      {
        "key": "D",
        "text": "The quality of the data pipeline"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Cập nhật mô hình liên tục (Continuous retraining) giúp giảm thiểu ảnh hưởng của hiện tượng Data Drift và Concept Drift.",
    "category": "Model Quality",
    "tags": [
      "Functional Performance",
      "Data Pipeline",
      "ML Factors"
    ]
  },
  {
    "id": "istqb-104",
    "questionNumber": 104,
    "text": "Which ONE of the following approaches to labeling requires the least time and effort?",
    "options": [
      {
        "key": "A",
        "text": "Pre-labeled dataset"
      },
      {
        "key": "B",
        "text": "Internal"
      },
      {
        "key": "C",
        "text": "Outsourced"
      },
      {
        "key": "D",
        "text": "AI-assisted"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Kiểm thử dựa trên rủi ro (Risk-based testing) giúp tập trung nguồn lực kiểm thử vào các tính năng AI có mức độ ảnh hưởng và rủi ro cao nhất.",
    "category": "Data Preparation",
    "tags": [
      "Pre-labeled Data",
      "Data Labeling",
      "Efficiency"
    ]
  },
  {
    "id": "istqb-105",
    "questionNumber": 105,
    "text": "Data used for an object detection ML system was found to have been labeled incorrectly in many cases. Which ONE of the following options is MOST likely the outcome?",
    "options": [
      {
        "key": "A",
        "text": "Privacy issues"
      },
      {
        "key": "B",
        "text": "Security issues"
      },
      {
        "key": "C",
        "text": "Robustness issues"
      },
      {
        "key": "D",
        "text": "Accuracy issues"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Kỹ thuật Dropout ngẫu nhiên tắt một số neuron trong quá trình huấn luyện để chống Overfitting.",
    "category": "Data Quality",
    "tags": [
      "Labeling Errors",
      "Accuracy",
      "Data Quality"
    ]
  },
  {
    "id": "istqb-106",
    "questionNumber": 106,
    "text": "Which ONE of the following combinations of training, validation, and test data is used during the process of learning/creating a model?",
    "options": [
      {
        "key": "A",
        "text": "Only training data and test data"
      },
      {
        "key": "B",
        "text": "All three: training data, validation data, and test data"
      },
      {
        "key": "C",
        "text": "Only training data and validation data"
      },
      {
        "key": "D",
        "text": "Only validation data and test data"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Kiểm thử hộp đen (Black-box testing) tập trung vào việc xác minh yêu cầu chức năng đầu ra mà không cần truy cập mã nguồn hay trọng số mô hình.",
    "category": "ML Workflow",
    "tags": [
      "Training Data",
      "Validation Data",
      "Model Learning"
    ]
  },
  {
    "id": "istqb-107",
    "questionNumber": 107,
    "text": "Which ONE of the following activities is MOST relevant when addressing the scenario where you have more than the required amount of data available for training?",
    "options": [
      {
        "key": "A",
        "text": "Data labeling"
      },
      {
        "key": "B",
        "text": "Data sampling"
      },
      {
        "key": "C",
        "text": "Feature selection"
      },
      {
        "key": "D",
        "text": "Data augmentation"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Xác minh tính công bằng (Fairness verification) đảm bảo mô hình không đưa ra quyết định phân biệt đối xử dựa trên các thuộc tính nhạy cảm.",
    "category": "Data Preparation",
    "tags": [
      "Data Sampling",
      "Dataset Size",
      "Subsampling"
    ]
  },
  {
    "id": "istqb-108",
    "questionNumber": 108,
    "text": "A consumer goods company wants to identify groups of people with similar tastes to target products. Which ML type represents the BEST solution?",
    "options": [
      {
        "key": "A",
        "text": "Association"
      },
      {
        "key": "B",
        "text": "Clustering"
      },
      {
        "key": "C",
        "text": "Regression"
      },
      {
        "key": "D",
        "text": "Classification"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Validation set được dùng để tinh chỉnh tham số siêu cấp (hyperparameters) và chọn mô hình tối ưu trước khi đánh giá trên Test set.",
    "category": "ML Fundamentals",
    "tags": [
      "Clustering",
      "Customer Segmentation",
      "Unsupervised Learning"
    ]
  },
  {
    "id": "istqb-109",
    "questionNumber": 109,
    "text": "Which ONE of the following options is the MOST APPROPRIATE stage of the ML workflow to set model and algorithm hyperparameters?",
    "options": [
      {
        "key": "A",
        "text": "Deploying the model"
      },
      {
        "key": "B",
        "text": "Data testing"
      },
      {
        "key": "C",
        "text": "Tuning the model"
      },
      {
        "key": "D",
        "text": "Evaluating the model"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Mô hình sinh (Generative AI) yêu cầu các tiêu chí kiểm thử đặc thù về độ an toàn nội dung, bản quyền và tính chân thực.",
    "category": "ML Workflow",
    "tags": [
      "Hyperparameters",
      "Model Tuning",
      "ML Workflow"
    ]
  },
  {
    "id": "istqb-110",
    "questionNumber": 110,
    "text": "Which ONE of the following options BEST describes clustering?",
    "options": [
      {
        "key": "A",
        "text": "Clustering is classification of a continuous quantity."
      },
      {
        "key": "B",
        "text": "Clustering is done without prior knowledge of output classes."
      },
      {
        "key": "C",
        "text": "Clustering is supervised learning."
      },
      {
        "key": "D",
        "text": "Clustering requires you to know the classes."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Giám sát sau triển khai (Post-deployment monitoring) giúp phát hiện sớm sự sụt giảm độ chính xác của mô hình trong môi trường thực tế.",
    "category": "ML Fundamentals",
    "tags": [
      "Clustering",
      "Unsupervised Learning",
      "Class Labels"
    ]
  },
  {
    "id": "istqb-111",
    "questionNumber": 111,
    "text": "A software component uses machine learning to recognize digits (0-9) from scans of handwritten numbers. Which type of ML is this?",
    "options": [
      {
        "key": "A",
        "text": "Clustering"
      },
      {
        "key": "B",
        "text": "Reinforcement learning"
      },
      {
        "key": "C",
        "text": "Regression"
      },
      {
        "key": "D",
        "text": "Classification"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Độ phủ neuron (Neuron coverage) đo lường tỷ lệ các neuron được kích hoạt trong quá trình chạy tập kiểm thử white-box.",
    "category": "ML Fundamentals",
    "tags": [
      "Classification",
      "Handwritten Digits",
      "Supervised Learning"
    ]
  },
  {
    "id": "istqb-112",
    "questionNumber": 112,
    "text": "Which ONE of the following characteristics is the LEAST likely to cause safety-related issues for an AI system?",
    "options": [
      {
        "key": "A",
        "text": "Non-determinism"
      },
      {
        "key": "B",
        "text": "High complexity"
      },
      {
        "key": "C",
        "text": "Robustness"
      },
      {
        "key": "D",
        "text": "Self-learning"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Kiểm thử gián đoạn (Disruption testing) đánh giá khả năng tự phục hồi của hệ thống AI khi mất kết nối mạng hoặc lỗi phần cứng.",
    "category": "Quality Characteristics",
    "tags": [
      "Robustness",
      "Safety",
      "Quality Characteristics"
    ]
  },
  {
    "id": "istqb-113",
    "questionNumber": 113,
    "text": "An image classification system for human faces has a training distribution of 70% for ethnicity A and 30% combined for ethnicities B, C, and D. Which option BEST describes this situation?",
    "options": [
      {
        "key": "A",
        "text": "This is an example of algorithmic bias."
      },
      {
        "key": "B",
        "text": "This is an example of hyperparameter bias."
      },
      {
        "key": "C",
        "text": "This is an example of expert system bias."
      },
      {
        "key": "D",
        "text": "This is an example of sample bias."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Sử dụng dữ liệu tổng hợp (Synthetic data) giúp bổ sung các kịch bản hiếm gặp (edge cases) mà dữ liệu thực tế khó thu thập.",
    "category": "Ethics & Bias",
    "tags": [
      "Sample Bias",
      "Data Distribution",
      "Ethics"
    ]
  },
  {
    "id": "istqb-114",
    "questionNumber": 114,
    "text": "Which ONE of the following BEST describes an example of a system with AI-based autonomous functions?",
    "options": [
      {
        "key": "A",
        "text": "A system that is fully able to respond to its environment."
      },
      {
        "key": "B",
        "text": "A system that utilizes a tool like Selenium."
      },
      {
        "key": "C",
        "text": "A fully automated manufacturing plant that uses no software."
      },
      {
        "key": "D",
        "text": "A system that utilizes human beings for all important decisions."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Mô hình cây quyết định có tính giải thích (Explainability) cao hơn so với các mô hình mạng nơ-ron sâu (Deep Learning).",
    "category": "Quality Characteristics",
    "tags": [
      "Autonomy",
      "Environment Response",
      "AI Functions"
    ]
  },
  {
    "id": "istqb-115",
    "questionNumber": 115,
    "text": "Which ONE of the following statements CORRECTLY describes the importance of flexibility for AI systems?",
    "options": [
      {
        "key": "A",
        "text": "AI systems require changing operational environments; therefore, flexibility is required."
      },
      {
        "key": "B",
        "text": "Flexible AI systems allow for easier modification of the system as a whole."
      },
      {
        "key": "C",
        "text": "Self-learning systems are expected to deal with new situations without explicitly having to program for them."
      },
      {
        "key": "D",
        "text": "AI systems are inherently flexible."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Kiểm thử tính bảo mật của mô hình AI bao gồm việc phòng chống các cuộc tấn công đánh cắp mô hình (Model Inversion/Extraction).",
    "category": "Quality Characteristics",
    "tags": [
      "Flexibility",
      "Self-Learning",
      "Generalization"
    ]
  },
  {
    "id": "istqb-116",
    "questionNumber": 116,
    "text": "Which ONE of the following hardware is MOST SUITABLE for implementing AI when using Machine Learning (ML)?",
    "options": [
      {
        "key": "A",
        "text": "Powerful CPUs"
      },
      {
        "key": "B",
        "text": "Hardware supporting fast matrix multiplication"
      },
      {
        "key": "C",
        "text": "Hardware supporting high-precision floating point operations"
      },
      {
        "key": "D",
        "text": "64-bit CPUs"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Quy trình MLOps tích hợp kiểm thử tự động ở các khâu chuẩn bị dữ liệu, huấn luyện mô hình và đóng gói triển khai.",
    "category": "AI Hardware",
    "tags": [
      "Hardware",
      "Matrix Multiplication",
      "GPU/NPU"
    ]
  },
  {
    "id": "istqb-117",
    "questionNumber": 117,
    "text": "Which ONE of the following technologies is MOST TYPICALLY used to implement AI?",
    "options": [
      {
        "key": "A",
        "text": "Genetic algorithms"
      },
      {
        "key": "B",
        "text": "Search engines"
      },
      {
        "key": "C",
        "text": "Procedural programming"
      },
      {
        "key": "D",
        "text": "Case-control structures"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Kiểm thử chấp nhận người dùng (UAT) đối với ứng dụng AI cần đánh giá mức độ hài lòng và niềm tin của người dùng vào quyết định của AI.",
    "category": "AI Concepts",
    "tags": [
      "Genetic Algorithms",
      "Optimization",
      "AI Technologies"
    ]
  },
  {
    "id": "istqb-118",
    "questionNumber": 118,
    "text": "Quote: \"In the near future, technology will have evolved, and AI will be able to learn multiple tasks by itself without needing to be retrained, allowing it to operate even in new environments. The cognitive abilities of AI will be similar to a child of 1-2 years.\" Which type of AI is this?",
    "options": [
      {
        "key": "A",
        "text": "Narrow AI"
      },
      {
        "key": "B",
        "text": "Super AI"
      },
      {
        "key": "C",
        "text": "Technological singularity"
      },
      {
        "key": "D",
        "text": "General AI"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Hệ thống AI tự chủ cần có cơ chế an toàn dừng khẩn cấp (Fail-safe mechanism) khi phát hiện sự cố không thể khắc phục.",
    "category": "AI Concepts",
    "tags": [
      "General AI",
      "AGI",
      "AI Evolution"
    ]
  },
  {
    "id": "istqb-119",
    "questionNumber": 119,
    "text": "In a conference, a speaker stated: \"the current implementation of AI using machine learning (ML) may NOT be considered AI in the future\". Is this statement CORRECT or INCORRECT and why?",
    "options": [
      {
        "key": "A",
        "text": "This statement is correct. In general, what is considered AI today may change over time."
      },
      {
        "key": "B",
        "text": "This statement is incorrect. Current AI is true AI, and there is no reason to believe that this fact will change over time."
      },
      {
        "key": "C",
        "text": "This statement is correct. In general, the term AI is presently utilized incorrectly."
      },
      {
        "key": "D",
        "text": "This statement is incorrect. What is considered AI today will continue to be AI even as technology evolves and changes."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Tài liệu kiểm thử AI cần ghi nhận rõ ràng các giả định về dữ liệu, ngưỡng chấp nhận độ chính xác và các giới hạn vận hành của mô hình.",
    "category": "AI Concepts",
    "tags": [
      "AI Effect",
      "Perception",
      "AI Definition"
    ]
  }
];
