import { Question } from '../types';

export const ccarpQuestions: Question[] = [
  {
    "id": "ccarp-1",
    "questionNumber": 1,
    "text": "You are evaluating a customer-support agent’s configuration. Each prospective tool belongs to one of four categories: (1) required to carry out defined tasks, (2) frequently used and reduces hand-offs, (3) occasionally helpful for unrelated work, (4) speculative future utility.  \n  \nWhich categories should generally stay in the agent configuration?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Only category 3, because occasionally useful tools for unrelated work provide broader coverage and should take priority over tools required for the agent’s defined tasks."
      },
      {
        "key": "B",
        "text": "Only category 4, because speculative future-utility tools provide the most flexibility and should be configured even when no defined task currently requires them."
      },
      {
        "key": "C",
        "text": "Categories 1 and 2 only, because they map to defined tasks and the agent’s regular hand-offs."
      },
      {
        "key": "D",
        "text": "All four categories, because broader tool access is categorically better for agent performance regardless of whether the tools map to defined tasks or regular hand-offs."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Các công cụ dành cho tổng đài viên nên được giới hạn ở những khả năng hỗ trợ các nhiệm vụ đã xác định và quy trình hoạt động thông thường. Các công cụ cần thiết cho phép thực hiện công việc dự định của tổng đài viên và các công cụ được sử dụng thường xuyên giúp giảm việc chuyển giao sẽ cải thiện việc thực hiện thường lệ của nó. Đôi khi các công cụ hữu ích không liên quan và các công cụ mang tính suy đoán trong tương lai không biện minh cho việc truy cập hiện tại và mở rộng bộ công cụ có sẵn một cách không cần thiết. API của OpenAI hỗ trợ ràng buộc mô hình với một bộ công cụ được phép xác định trước.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 1",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/1-solution-design-architecture",
    "lastVerifiedAt": "2026-10-23T08:33:44.469Z"
  },
  {
    "id": "ccarp-2",
    "questionNumber": 2,
    "text": "A technical team is cataloguing risks particular to Claude’s use in a document-grounded Q&A system.  \n  \nWhich two items are failure modes inherent to LLM-based systems rather than generic software defects? (Select two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "An expired TLS certificate blocks outbound API calls to Claude."
      },
      {
        "key": "B",
        "text": "A database connection timeout causes retrieval to return an empty result set."
      },
      {
        "key": "C",
        "text": "The model refuses a legitimate query because surface features trigger an overly broad safety pattern."
      },
      {
        "key": "D",
        "text": "A misconfigured load balancer routes requests to a deprecated API version."
      },
      {
        "key": "E",
        "text": "The model generates a plausible-sounding answer unsupported by any retrieved document."
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Các cơ chế an toàn có thể từ chối yêu cầu hợp pháp khi trình phân loại xác định các tính năng liên quan đến danh mục bị hạn chế; Anthropic lưu ý rằng công việc vô hại có thể gây ra một số danh mục từ chối. LLM cũng có thể gây ảo giác, tạo ra nội dung không chính xác về mặt thực tế hoặc không nhất quán với ngữ cảnh được cung cấp, do đó, một câu trả lời hợp lý có thể thiếu sự hỗ trợ trong các tài liệu được truy xuất. Chứng chỉ hết hạn, hết thời gian truy xuất và định tuyến cân bằng tải không chính xác là các lỗi cấu hình hoặc cơ sở hạ tầng thông thường.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 2",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/2-governance-safety-risk-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.469Z"
  },
  {
    "id": "ccarp-3",
    "questionNumber": 3,
    "text": "You are adding human review to a high-volume classification pipeline in which reviewing every output is impractical.  \n  \nWhich sampling strategy best balances throughput and quality oversight?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "No sampling, relying entirely on user complaints to reveal quality and safety problems after they affect users."
      },
      {
        "key": "B",
        "text": "Risk-stratified sampling that reviews all low-confidence and high-impact outputs and a smaller random sample of high-confidence routine outputs."
      },
      {
        "key": "C",
        "text": "Inverse sampling that reviews only high-confidence routine outputs and skips low-confidence and high-impact outputs."
      },
      {
        "key": "D",
        "text": "Universal review of every output regardless of confidence or throughput impact."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc lấy mẫu phân tầng rủi ro hướng quá trình đánh giá của con người đến những kết quả đầu ra có khả năng xảy ra hoặc chi phí xảy ra lỗi cao nhất—các trường hợp có độ tin cậy thấp và tác động cao—trong khi việc lấy mẫu ngẫu nhiên các kết quả đầu ra có độ tin cậy cao thường quy giúp kiểm tra liên tục các vấn đề chất lượng tiềm ẩn. Điều này duy trì thông lượng có thể mở rộng mà không bỏ qua sự giám sát.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 3",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/3-evaluation-testing-optimization",
    "lastVerifiedAt": "2026-10-23T08:33:44.469Z"
  },
  {
    "id": "ccarp-4",
    "questionNumber": 4,
    "text": "You operate an interactive assistant where per-turn latency is the primary performance constraint. Quality on routine turns is already acceptable.  \n  \nWhich configuration change most directly improves latency without disproportionately harming quality?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Disable prompt caching entirely to ensure fresh context processing on every request, preventing stale prefix content from affecting latency-sensitive interactions."
      },
      {
        "key": "B",
        "text": "Reduce retrieval depth to the top-k passages that historically cover the answer, and cache stable system-prompt content."
      },
      {
        "key": "C",
        "text": "Increase retrieval depth to the corpus maximum to improve recall regardless of latency."
      },
      {
        "key": "D",
        "text": "Switch every turn to the heaviest available model to maximize output quality, accepting that the increased model latency will worsen the per-turn SLO rather than improve it."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc chỉ truy xuất các đoạn văn top-k cung cấp thông tin cần thiết về mặt lịch sử sẽ làm giảm công việc truy xuất và ngữ cảnh nhanh chóng được xử lý trong mỗi lượt, trong khi vẫn duy trì chất lượng câu trả lời thông thường. Nội dung nhắc hệ thống ổn định được lưu vào bộ nhớ đệm tránh việc xử lý lại tiền tố không thay đổi. Quá trình truy xuất bổ sung tính toán và các chuyến đi khứ hồi, đồng thời duy trì ngữ cảnh được lưu trong bộ nhớ đệm giúp cải thiện việc sử dụng bộ nhớ đệm.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 4",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/4-evaluation-testing-optimization",
    "lastVerifiedAt": "2026-10-23T08:33:44.469Z"
  },
  {
    "id": "ccarp-5",
    "questionNumber": 5,
    "text": "You are evaluating patterns for a batch document-classification job with fixed stages: extract metadata, classify, summarize, and persist.  \n  \nWhich pattern is the best fit, and why?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "A workflow pattern, because agentic patterns do not support tool invocations and therefore cannot execute the persist step that writes results to the downstream store."
      },
      {
        "key": "B",
        "text": "An agentic pattern, because the open-ended planning capability of agents produces more consistent structured outputs than a fixed workflow graph on classification tasks."
      },
      {
        "key": "C",
        "text": "An agentic pattern, because agents are categorically more accurate than workflows and therefore always preferable regardless of step predictability."
      },
      {
        "key": "D",
        "text": "A workflow pattern, because the steps are well-defined and predictable per-request token cost is preferred over flexibility."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Mẫu quy trình công việc phù hợp với quy trình hàng loạt xác định có các giai đoạn được biết trước. Nó cung cấp khả năng điều phối lặp lại và chi phí mã thông báo theo yêu cầu có thể dự đoán được, trong khi tính linh hoạt của tác nhân và lập kế hoạch mở là không cần thiết đối với trình tự cố định này.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 5",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/5-solution-design-architecture",
    "lastVerifiedAt": "2026-10-23T08:33:44.469Z"
  },
  {
    "id": "ccarp-6",
    "questionNumber": 6,
    "text": "A pilot AI assistant for procurement specialists has an 89 percent first-response acceptance rate, but follow-up surveys show that specialists often override the assistant’s vendor recommendations after considering criteria the assistant did not assess. The pilot owner wants to launch the assistant unchanged because of the strong acceptance rate.  \n  \nWhich two Discernment-competency observations should you raise **BEFORE** approving the launch? *(Select two.)*",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "The acceptance rate alone proves readiness for general production use."
      },
      {
        "key": "B",
        "text": "The survey response rate may not be statistically representative of all specialists."
      },
      {
        "key": "C",
        "text": "The unconsidered criteria represent a scope gap in the assistant’s input space."
      },
      {
        "key": "D",
        "text": "Acceptance does not establish whether recommendations remain correct after specialist review."
      },
      {
        "key": "E",
        "text": "The pilot duration was probably too short to demonstrate reliability across the full year."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc ghi đè của các chuyên gia sau khi xem xét các tiêu chí lựa chọn nhà cung cấp bị bỏ qua cho thấy rằng không gian đầu vào được đánh giá của trợ lý là chưa đầy đủ. Tỷ lệ chấp nhận ban đầu cao đo lường mức độ chấp nhận sớm của người dùng, chứ không phải liệu các đề xuất có còn đúng sau khi có sự xem xét đầy đủ hơn của chuyên gia cần thiết để đưa ra quyết định mua sắm hay không.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 6",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/6-evaluation-testing-optimization",
    "lastVerifiedAt": "2026-10-23T08:33:44.469Z"
  },
  {
    "id": "ccarp-7",
    "questionNumber": 7,
    "text": "You are a solution architect building a Claude-based assistant that has access to 60 internal tools across multiple business domains. Loading every tool definition with each request increases token usage and time to first response.  \n  \nWhich design pattern best resolves this issue without reducing capability breadth?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Apply progressive tool discovery so a curated initial subset is exposed and additional tools are loaded on demand based on the task."
      },
      {
        "key": "B",
        "text": "Use a separate model call to summarize all 60 tool definitions before each user turn."
      },
      {
        "key": "C",
        "text": "Increase the maximum context length and load all 60 tool definitions on every request, accepting the higher token cost and latency as necessary for full capability."
      },
      {
        "key": "D",
        "text": "Hard-code a fixed set of five tools per request to reduce token usage, regardless of whether those tools are relevant to the current task."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Tính năng khám phá công cụ lũy tiến giúp cung cấp danh mục công cụ đầy đủ trong khi trì hoãn các định nghĩa công cụ không cần thiết cho đến khi chúng phù hợp với nhiệm vụ. Điều này làm giảm mức sử dụng mã thông báo ngữ cảnh ban đầu và thời gian cho phản hồi đầu tiên mà không giới hạn trợ lý ở một tập hợp con công cụ cố định vĩnh viễn. Tài liệu Anthropic trì hoãn việc tải công cụ bằng tính năng tìm kiếm công cụ dành riêng cho các bộ công cụ lớn để chỉ những công cụ có liên quan mới được hiển thị cho một truy vấn.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 7",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/7-solution-design-architecture",
    "lastVerifiedAt": "2026-10-23T08:33:44.469Z"
  },
  {
    "id": "ccarp-8",
    "questionNumber": 8,
    "text": "You are investigating an MCP server that fails on its initial launch but works on later runs. System permission dialogs appeared during that first launch.  \n  \nWhich response is the most appropriate?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Recognize the first-run permission grant as the cause, document the expected behavior in onboarding guidance, and confirm that subsequent runs succeed."
      },
      {
        "key": "B",
        "text": "Reinstall the operating system to clear all permission state without first confirming whether the one-time permission grant caused the failure."
      },
      {
        "key": "C",
        "text": "Disable operating-system permission dialogs entirely, accept the resulting security implications, and proceed without confirming whether the failure recurs."
      },
      {
        "key": "D",
        "text": "Treat the first-run failure as a permanent fault, replace the MCP server, and do not verify whether subsequent runs succeed."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc cấp quyền cho hệ điều hành lần đầu tiên có thể tạm thời chặn quá trình khởi động cho đến khi người dùng cấp quyền truy cập cần thiết. Nếu các lần khởi chạy sau này thành công, phản hồi thích hợp là xác nhận hành vi đó và ghi lại bước ủy quyền dự kiến ​​để triển khai thay vì coi đó là lỗi vĩnh viễn.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 8",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/8-integration",
    "lastVerifiedAt": "2026-10-23T08:33:44.469Z"
  },
  {
    "id": "ccarp-9",
    "questionNumber": 9,
    "text": "An engineering organization is rolling out Claude Code across 200 developers. A team lead proposes that AI-generated pull requests bypass the standard code-review process for changes under 50 lines, because small changes are viewed as low risk and review capacity is limited.  \n  \nWhich two Diligence-competency objections should you raise? Each correct answer presents part of the solution. (Select two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Removing review eliminates the verification mechanism required for AI-generated output across the workflow."
      },
      {
        "key": "B",
        "text": "Code-review capacity should be expanded to handle every code change submitted across the team."
      },
      {
        "key": "C",
        "text": "The threshold should be increased to 200 lines to capture more changes."
      },
      {
        "key": "D",
        "text": "AI-generated pull requests should be rejected by default across the organization."
      },
      {
        "key": "E",
        "text": "Line count is a poor proxy for the actual risk introduced by a code change."
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Những thay đổi do AI tạo ra vẫn yêu cầu xác minh trước khi tích hợp; Hướng dẫn bảo mật của Anthropic giao cho người dùng trách nhiệm xem xét mã được đề xuất và khuyên nên xem xét tất cả các thay đổi được đề xuất trước khi phê duyệt. Số dòng không thể hiện mức độ bảo mật, tính chính xác, ủy quyền, cấu hình, sự phụ thuộc hoặc tác động hoạt động của một thay đổi, do đó, nó không thể xác định một cách an toàn liệu việc xem xét có thể bị bỏ qua hay không. Đánh giá tự động có thể bổ sung nhưng không thay thế các biện pháp bảo mật và đánh giá mã thủ công hiện có.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 9",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/9-governance-safety-risk-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.469Z"
  },
  {
    "id": "ccarp-10",
    "questionNumber": 10,
    "text": "You are choosing a model for a new production workload and must complete the upstream steps before empirically testing candidate models.  \n  \nWhich two steps must be completed **BEFORE** testing a representative sample on a candidate model? Each correct answer is part of the solution. (Select two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Select the lightest model that consistently meets the quality bar across the sample."
      },
      {
        "key": "B",
        "text": "Retest the model choice when a new model version becomes available."
      },
      {
        "key": "C",
        "text": "Choose a candidate model based on the requirements profile and known capabilities."
      },
      {
        "key": "D",
        "text": "Define the quality bar, latency tolerance, and expected volume for the workload."
      },
      {
        "key": "E",
        "text": "Sign off the production rollout plan with the platform and security teams."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Bạn nên chọn một mô hình đề xuất dựa trên các yêu cầu đã xác định của khối lượng công việc—chất lượng đầu ra bắt buộc, khả năng chịu độ trễ và khối lượng dự kiến—cùng với các khả năng đã biết của mô hình. Đánh giá đại diện được thực hiện sau khi các tiêu chí đó và một ứng cử viên ban đầu được thiết lập. Lựa chọn mô hình nhẹ nhất đã vượt qua quá trình đánh giá, thử nghiệm lại các phiên bản mới và nhận được phê duyệt triển khai là các hoạt động tiếp theo.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 10",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/10-evaluation-testing-optimization",
    "lastVerifiedAt": "2026-10-23T08:33:44.469Z"
  },
  {
    "id": "ccarp-11",
    "questionNumber": 11,
    "text": "You are developing a test strategy for a Claude-based pipeline that processes sensitive financial data.  \n  \nWhich two testing types should be prioritized to address both safety under attack and correctness across components? (Select two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Adversarial tests using prompt-injection and malformed-input cases."
      },
      {
        "key": "B",
        "text": "Regression tests against a stable reference set of previously known-good outputs."
      },
      {
        "key": "C",
        "text": "Smoke tests that verify core paths after each deployment."
      },
      {
        "key": "D",
        "text": "Integration tests that verify end-to-end pipeline behavior across all components."
      },
      {
        "key": "E",
        "text": "Unit tests targeting only individual prompt-template rendering logic."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Thử nghiệm đối nghịch xác thực khả năng chống lại các đầu vào thù địch như chèn nhanh và dữ liệu không đúng định dạng, giúp bảo vệ thông tin nhạy cảm và ngăn chặn hành vi không an toàn. Thử nghiệm tích hợp từ đầu đến cuối xác minh rằng các thành phần của quy trình tương tác và hoạt động chính xác như một hệ thống hoàn chỉnh; cùng với nhau, các thử nghiệm này bao gồm cả khả năng phục hồi sau cuộc tấn công và tính chính xác của nhiều thành phần.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 11",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/11-evaluation-testing-optimization",
    "lastVerifiedAt": "2026-10-23T08:33:44.469Z"
  },
  {
    "id": "ccarp-12",
    "questionNumber": 12,
    "text": "You are evaluating model-selection claims used by a peer team.  \n  \nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "questionType": "statement_matrix",
    "statements": [
      {
        "id": "1",
        "text": "Heavier-reasoning models typically consume more of the rate limit and run more slowly than lighter models on the same input.",
        "correctAnswer": "Yes"
      },
      {
        "id": "2",
        "text": "A representative-sample evaluation on the target workload is the right basis for confirming a model selection.",
        "correctAnswer": "Yes"
      },
      {
        "id": "3",
        "text": "The most capable model is always the right choice regardless of the workload profile.",
        "correctAnswer": "No"
      },
      {
        "id": "4",
        "text": "Tiered routing can serve routine traffic with a lighter model while reserving a heavier model for traffic that needs its capability.",
        "correctAnswer": "Yes"
      },
      {
        "id": "5",
        "text": "Selecting a model based on which version was most recently announced is the right basis for production decisions.",
        "correctAnswer": "No"
      }
    ],
    "options": [
      {
        "key": "Yes",
        "text": "Yes"
      },
      {
        "key": "No",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "1:Yes",
      "2:Yes",
      "3:No",
      "4:Yes",
      "5:No"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R2cqjmlfiv5tpfiv5uadb\"]::highlight(question-marker-R2cqjmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R2cqjmlfiv5tpfiv5uadb\"]::highlight(question-marker-R2cqjmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R2cqjmlfiv5tpfiv5uadb\"]::highlight(question-marker-R2cqjmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Nỗ lực lý luận cao hơn đánh đổi độ trễ tăng lên và việc sử dụng mã thông báo để lý luận sâu hơn, do đó, nó có thể tiêu tốn nhiều công suất giới hạn tốc độ hơn. Việc lựa chọn mô hình phải được xác nhận thông qua các đánh giá thể hiện khối lượng công việc sản xuất cũng như các yêu cầu về chất lượng, độ trễ và chi phí của nó. Mô hình có khả năng nhất không phải lúc nào cũng phù hợp: các mô hình nhỏ hơn có thể tốt hơn cho công việc thường ngày nhạy cảm với chi phí hoặc nhạy cảm với độ trễ. Định tuyến theo từng cấp hướng các yêu cầu đơn giản đến mô hình nhẹ hơn một cách thích hợp và dành mô hình mạnh hơn cho các yêu cầu phức tạp. Thông báo gần đây không chứng minh được sự phù hợp trong sản xuất; đo được hiệu suất trên khối lượng công việc mục tiêu.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 12",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/12-evaluation-testing-optimization",
    "lastVerifiedAt": "2026-10-23T08:33:44.469Z"
  },
  {
    "id": "ccarp-13",
    "questionNumber": 13,
    "text": "You are assessing instrumentation in a multi-agent system.  \n  \nWhich two findings represent valid observability gaps in the instrumentation? Each correct answer provides a complete solution. (Select two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Trace spans for each agent step are exported to the shared distributed-tracing backend."
      },
      {
        "key": "B",
        "text": "Latency and token usage on every span are emitted to the central metrics pipeline."
      },
      {
        "key": "C",
        "text": "Tool-call payloads and outcomes are recorded with redaction applied to known sensitive fields."
      },
      {
        "key": "D",
        "text": "Model identity and version on each turn are not recorded with the turn artifacts."
      },
      {
        "key": "E",
        "text": "Request-scoped correlation identifiers do not propagate across agent and tool calls."
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Danh tính và phiên bản của mô hình phải được ghi lại trong mỗi lượt để hành vi, độ trễ, mức sử dụng mã thông báo, lỗi và hồi quy có thể được quy cho cấu hình mô hình cụ thể. Giá trị nhận dạng tương quan trong phạm vi yêu cầu phải truyền qua các cuộc gọi tác nhân và công cụ để các khoảng thời gian và phép đo từ xa của chúng vẫn được kết nối trong một dấu vết phân tán. OpenTelemetry xác định các thuộc tính mô hình GenAI và giải thích rằng việc truyền bá ngữ cảnh cho phép tương quan giữa các ranh giới dịch vụ phân tán.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 13",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/13-evaluation-testing-optimization",
    "lastVerifiedAt": "2026-10-23T08:33:44.469Z"
  },
  {
    "id": "ccarp-14",
    "questionNumber": 14,
    "text": "An engineer accidentally commits an API key to the repository by placing it in `.claude/settings.json`.  \n  \nWhich configuration design principle was breached?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Project-scope configuration should always override user-scope configuration."
      },
      {
        "key": "B",
        "text": "Managed configuration must be applied before project-scope configuration is read."
      },
      {
        "key": "C",
        "text": "Credentials must be resolved at runtime from a secret store and never stored in version-controlled files."
      },
      {
        "key": "D",
        "text": "MCP server definitions must reside in environment variables to prevent scope conflicts."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Khóa API là thông tin xác thực và không được dành riêng cho các tệp cấu hình do phiên bản kiểm soát, nơi quyền truy cập và lịch sử kho lưu trữ có thể làm lộ chúng. Chúng phải được cung cấp một cách an toàn trong thời gian chạy, chẳng hạn như thông qua kho lưu trữ bí mật hoặc cơ chế dựa trên môi trường được bảo vệ. Tài liệu Anthropic sử dụng trình trợ giúp khóa để truy xuất khóa từ bí mật Vault cho thông tin xác thực động.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 14",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/14-an-engineer-accidentally-commits-an-api-key-to-the-repositor",
    "lastVerifiedAt": "2026-10-23T08:33:44.469Z"
  },
  {
    "id": "ccarp-15",
    "questionNumber": 15,
    "text": "A document-analysis service handles legal filings that average 80,000 tokens each. Attorneys query every filing an average of 14 times during a case. The current architecture sends the entire filing with every query. The CFO has asked you to lower per-query costs while maintaining response quality. The security officer requires that filing content not be stored outside Fabrikam's tenancy.  \n  \nWhich optimization approach should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Summarize each filing once at intake and run all subsequent queries against the summary."
      },
      {
        "key": "B",
        "text": "Cache the filing as the prompt prefix for reuse across the 14 queries per case."
      },
      {
        "key": "C",
        "text": "Index filings in a vector store and retrieve only the relevant passages per query."
      },
      {
        "key": "D",
        "text": "Move the workload to a smaller Claude model to reduce the per-token cost paid."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Bộ nhớ đệm tiền tố nhắc nhở sử dụng lại bản trình bày đã được xử lý của việc sắp xếp không thay đổi trong các truy vấn lặp lại, giảm chi phí và độ trễ của mã thông báo đầu vào trong khi vẫn duy trì bối cảnh tài liệu đầy đủ và chất lượng phản hồi. Azure OpenAI prompt caching được thiết kế cho các tiền tố dài giống hệt nhau, không làm thay đổi nội dung phản hồi và không chia sẻ bộ đệm nhắc giữa các đăng ký Azure.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 15",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/15-claude-models-prompting-context-engineering",
    "lastVerifiedAt": "2026-10-23T08:33:44.469Z"
  },
  {
    "id": "ccarp-16",
    "questionNumber": 16,
    "text": "You are creating an ethics-review checklist for AI-supported deployments.  \n  \nWhich two checks should be included on the list? Each correct answer provides a complete solution. (Select two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Confirm that vendor licensing terms permit the planned production use of the model."
      },
      {
        "key": "B",
        "text": "Verify that outputs do not rely on generalizations about people that the underlying data does not support."
      },
      {
        "key": "C",
        "text": "Confirm that high-impact decisions retain human accountability rather than being attributed to the model."
      },
      {
        "key": "D",
        "text": "Restrict ethics review to outputs that exceed a defined model-confidence threshold."
      },
      {
        "key": "E",
        "text": "Confirm that latency and throughput targets are met across supported user populations."
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc triển khai AI có đạo đức đòi hỏi sự công bằng trong cách đại diện và đối xử với mọi người, vì vậy, kết quả đầu ra không được đưa ra những khái quát hóa không có căn cứ về con người. Nó cũng yêu cầu trách nhiệm giải trình rõ ràng của con người: mọi người và tổ chức triển khai vẫn chịu trách nhiệm về các quyết định mang tính hệ quả và phải duy trì sự giám sát phù hợp thay vì giao trách nhiệm cho một mô hình.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 16",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/16-governance-safety-risk-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.469Z"
  },
  {
    "id": "ccarp-17",
    "questionNumber": 17,
    "text": "You are classifying chunking strategies by the corpus type to which each is best suited.  \n  \nFor each chunking strategy, select the applicable corpus type: “Long Structured Documents,” “Heterogeneous Short Records,” or “Code or Hierarchical Specs.”",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "[data-question-highlight-id=\"question-marker-R17ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R17ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R17ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R17ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R17ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R17ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Ranh giới cấp chức năng và nhận biết cây duy trì thứ bậc logic của mã nguồn và thông số kỹ thuật. Các đoạn chồng chéo trên mỗi bản ghi và có kích thước cố định phù hợp với các bản ghi ngắn, có ý nghĩa độc lập. Ranh giới đoạn/mệnh đề ngữ nghĩa và hệ thống phân cấp phần tài liệu bảo toàn ngữ cảnh và cấu trúc của các tài liệu dài.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 17",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/17-solution-design-architecture",
    "lastVerifiedAt": "2026-10-23T08:33:44.469Z"
  },
  {
    "id": "ccarp-18",
    "questionNumber": 18,
    "text": "You are choosing a pattern for a compliance Q&A assistant that must respond to policy questions with citations from the authoritative internal source set. Latency, cost, and audit predictability are priorities.  \n  \nWhich pattern is the best fit?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Augmented LLM with retrieval-augmented generation over the indexed authoritative corpus and citation rendering on each answer."
      },
      {
        "key": "B",
        "text": "Multi-agent orchestration with a planner, researcher, and writer agent for every query."
      },
      {
        "key": "C",
        "text": "A pure agent loop with open web-browsing tools to surface the most current policy information, without constraining retrieval to the authoritative internal corpus."
      },
      {
        "key": "D",
        "text": "A static prompt with the entire policy corpus concatenated into every request."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Tính năng tạo tăng cường truy xuất truy xuất tài liệu có liên quan từ kho chính sách có thẩm quyền được lập chỉ mục cho mỗi phản hồi, cho phép trích dẫn dựa trên nguồn và khả năng kiểm tra có thể dự đoán được. Nó thường hiệu quả và được kiểm soát hơn so với phối hợp nhiều tác nhân, truy xuất web không hạn chế hoặc bao gồm toàn bộ kho tài liệu trong mỗi lời nhắc.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 18",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/18-solution-design-architecture",
    "lastVerifiedAt": "2026-10-23T08:33:44.469Z"
  },
  {
    "id": "ccarp-20",
    "questionNumber": 20,
    "text": "For each statement, select Yes if it reflects a sound architectural practice. Otherwise, select No.",
    "questionType": "statement_matrix",
    "statements": [
      {
        "id": "1",
        "text": "Authentication and authorization run before retrieval so retrieval can filter by identity.",
        "correctAnswer": "Yes"
      },
      {
        "id": "2",
        "text": "An asynchronous queue absorbs bursty traffic between intake and the model invocation layer.",
        "correctAnswer": "Yes"
      },
      {
        "id": "3",
        "text": "Tax computation is encoded directly in the system prompt rather than in code.",
        "correctAnswer": "No"
      },
      {
        "id": "4",
        "text": "Conversation logs include unredacted government identifiers to maximize signal for tuning.",
        "correctAnswer": "No"
      }
    ],
    "options": [
      {
        "key": "Yes",
        "text": "Yes"
      },
      {
        "key": "No",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "1:Yes",
      "2:Yes",
      "3:No",
      "4:No"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R2cqjmlfiv5tpfiv5uadb\"]::highlight(question-marker-R2cqjmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R2cqjmlfiv5tpfiv5uadb\"]::highlight(question-marker-R2cqjmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R2cqjmlfiv5tpfiv5uadb\"]::highlight(question-marker-R2cqjmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc ủy ​​quyền trước khi truy xuất sẽ bật tính năng lọc quyền truy cập dựa trên danh tính. Xếp hàng lưu lượng truy cập liên tục một cách trơn tru và tách yêu cầu đầu vào khỏi quá trình xử lý mô hình không đồng bộ. Tính toán thuế yêu cầu logic ứng dụng có tính xác định, có thể kiểm tra được thay vì hành vi nhanh chóng. Giá trị nhận dạng của chính phủ là PII nhạy cảm, vì vậy nhật ký nên loại bỏ hoặc che giấu chúng và hạn chế sử dụng chúng.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 20",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/20-solution-design-architecture",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-21",
    "questionNumber": 21,
    "text": "You are building an evaluation pipeline for a Claude-based deployment and must finish the specification steps before running the deployment against the dataset.  \n  \nWhich two steps must be completed BEFORE running the deployment against the evaluation dataset? Each correct answer represents part of the solution. (Select two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Publish the aggregated metrics to a dashboard and gate releases on threshold checks."
      },
      {
        "key": "B",
        "text": "Curate and label the evaluation dataset to match the defined slices."
      },
      {
        "key": "C",
        "text": "Review failure cases with subject matter experts to refine the scoring rubric."
      },
      {
        "key": "D",
        "text": "Define the metrics and slices the framework will report across representative, edge, and adversarial cases."
      },
      {
        "key": "E",
        "text": "Score the deployment outputs against the reference labels and aggregate the metrics."
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc đánh giá yêu cầu các tiêu chí thành công có thể đo lường được, được xác định trước và một bộ đánh giá phản ánh việc phân bổ nhiệm vụ dự kiến, bao gồm cả các trường hợp đặc biệt. Số liệu và lát cắt thiết lập những gì sẽ được đo lường, trong khi các nhãn tham chiếu được quản lý cho phép tính điểm kết quả đầu ra. Việc tổng hợp điểm số, xem xét lỗi và xuất bản kết quả bảng thông tin diễn ra sau khi quá trình triển khai đã được chạy trên tập dữ liệu đó.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 21",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/21-evaluation-testing-optimization",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-22",
    "questionNumber": 22,
    "text": "A managed agent deployment for claims triage has expanded from 6 tools to 34 tools over 18 months as product teams added capabilities. Triage accuracy has declined from 91 percent to 78 percent, and average tool-selection latency has risen by 2.3 seconds. A junior engineer has proposed placing a tool-router agent in front of the existing agent to filter the tool list for each request.  \n  \nWhich two findings should you present to support capability decomposition before adding the router? Each correct answer represents part of the solution. (Select two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Tool descriptions overlap across multiple claim categories within the agent’s tool set."
      },
      {
        "key": "B",
        "text": "Several tools have not been invoked across the most recent 90 days of traffic."
      },
      {
        "key": "C",
        "text": "The 34 tools serve four distinct claim-workflow domains within the triage scope."
      },
      {
        "key": "D",
        "text": "The router pattern is well documented across publicly available agent literature."
      },
      {
        "key": "E",
        "text": "The proposed router introduces an additional model call on every incoming request."
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Bốn miền quy trình xác nhận quyền sở hữu riêng biệt cung cấp ranh giới khả năng rõ ràng để phân chia trách nhiệm phân loại rộng thành các tác nhân tập trung với bộ công cụ nhỏ hơn, dành riêng cho miền cụ thể. Việc thêm bộ định tuyến sẽ giới thiệu một lệnh gọi mô hình khác cho mọi yêu cầu, điều này kết hợp độ trễ thay vì giải quyết tình trạng quá tải cơ bản được tạo ra bởi một tác nhân duy nhất chọn trong số hàng chục công cụ. Hướng dẫn dành cho đại lý của Microsoft lưu ý rằng việc lựa chọn công cụ sẽ giảm xuống khi tổng đài viên tích lũy nhiều công cụ và mỗi lần gọi đại diện được ủy quyền sẽ tăng thêm độ trễ.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 22",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/22-solution-design-architecture",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-23",
    "questionNumber": 23,
    "text": "An architect is assessing a Claude-based candidate-screening tool before deployment. A stakeholder claims that no bias evaluation is needed because the model was not trained on company data.  \n  \nWhich two responses most accurately dispute this claim? (Select two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Transparency obligations are satisfied by disclosing that an AI system is in use, without further evaluation."
      },
      {
        "key": "B",
        "text": "Fairness testing is required only when the training dataset is known to contain protected-class labels."
      },
      {
        "key": "C",
        "text": "The model may carry demographic biases from pretraining that manifest in screening outcomes regardless of fine-tuning."
      },
      {
        "key": "D",
        "text": "The system should be evaluated on outcome-disparity metrics across protected groups before deployment."
      },
      {
        "key": "E",
        "text": "Bias evaluation is unnecessary when the model provider has published a responsible-use policy."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Một mô hình có thể giữ lại những thành kiến ​​về nhân khẩu học từ quá trình đào tạo trước trên diện rộng ngay cả khi mô hình đó chưa được đào tạo về dữ liệu của tổ chức. Đối với trường hợp sử dụng sàng lọc việc làm, việc đánh giá tính công bằng sẽ đo lường xem liệu kết quả có khác nhau giữa các nhóm được bảo vệ hay không trước khi triển khai. Hướng dẫn của NIST yêu cầu đánh giá tính công bằng và thiên vị, đồng thời sử dụng các số liệu theo ngữ cảnh cụ thể để đánh giá hiệu suất và tác hại giữa các nhóm.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 23",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/23-governance-safety-risk-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-24",
    "questionNumber": 24,
    "text": "You are ordering decomposed components in an invoice-processing pipeline.  \n  \nFor every decomposed component, choose the execution layer to which it belongs: “Pre-Processing”, “Model Stage”, or “Post-Processing”.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "[data-question-highlight-id=\"question-marker-R17ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R17ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R17ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R17ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R17ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R17ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Quy trình xử lý trước chuẩn bị dữ liệu đầu vào hóa đơn để suy luận, bao gồm OCR và biên tập lại văn bản nhạy cảm trước khi gọi mô hình. Giai đoạn mô hình thực hiện phân loại Claude và trích xuất dữ liệu có cấu trúc. Quá trình xử lý hậu kỳ xác thực kết quả được trích xuất dựa trên lược đồ của nó và chỉ lưu giữ các bản ghi đã được xác thực vào hệ thống bản ghi.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 24",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/24-solution-design-architecture",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-25",
    "questionNumber": 25,
    "text": "You are creating a prompt for a ticket-triage classifier with thirty clearly defined categories and clear descriptions of each category in the prompt.  \n  \nWhich technique is the most appropriate starting point?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "A chain-of-thought prompt for a routing decision that does not require multi-step reasoning."
      },
      {
        "key": "B",
        "text": "A zero-shot prompt that specifies the categories with their descriptions and the required output format."
      },
      {
        "key": "C",
        "text": "A prompt that demands the model invent new categories when the supplied ones do not fit."
      },
      {
        "key": "D",
        "text": "A prompt with no category descriptions, expecting the model to infer the category set."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Để phân loại theo phân loại cố định, lời nhắc không bắn phải nêu rõ các danh mục được phép, xác định chúng rõ ràng và chỉ định định dạng phản hồi bắt buộc. Điều này tạo cơ sở cho mô hình trong bộ nhãn dự kiến ​​và tạo ra các quyết định định tuyến nhất quán, máy có thể đọc được.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 25",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/25-you-are-creating-a-prompt-for-a-ticket-triage-classifier-wit",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-26",
    "questionNumber": 26,
    "text": "You are evaluating a Claude-based system whose primary risk is undetected quality drift in safety-relevant outputs after a model-version upgrade.  \n  \nWhich assessment activity most directly mitigates this risk?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Disable adversarial evaluation entirely during model-version upgrade cycles to reduce evaluation cost, accepting that safety drift will go undetected until it appears in production."
      },
      {
        "key": "B",
        "text": "Rotate adversarial inputs randomly so no two upgrades are scored on the same set."
      },
      {
        "key": "C",
        "text": "Skip evaluation on each model-version upgrade and rely on user-submitted complaints to surface safety drift after the upgraded model has already served production traffic."
      },
      {
        "key": "D",
        "text": "Maintain an adversarial evaluation set with version-attributed scoring so each upgrade is measured against the same set before promotion."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Một bộ đánh giá đối thủ ổn định, được phiên bản mô hình cho điểm và ghi lại trước khi được thăng hạng, cung cấp một so sánh hồi quy có kiểm soát có thể phát hiện sự sai lệch về chất lượng an toàn do bản nâng cấp gây ra. Anthropic khuyên bạn nên thử nghiệm kỹ lưỡng các ứng dụng có kiểu máy mới hơn trước khi chuyển sang chúng.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 26",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/26-evaluation-testing-optimization",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-27",
    "questionNumber": 27,
    "text": "You are conducting a risk assessment for a planned Claude-based deployment and must finish the inventory steps before evaluating threats against assets.  \n  \nWhich two actions must be completed **before** assessing threats against assets to estimate likelihood and impact? Each correct answer represents part of the solution. *(Select two.)*",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Document the assessment outcome with risks, mitigations, residual risk, and acceptance owners."
      },
      {
        "key": "B",
        "text": "Recommend mitigations and residual-risk acceptance for the risks that remain after analysis."
      },
      {
        "key": "C",
        "text": "Identify the assets that the deployment touches, along with the sensitivity of each asset."
      },
      {
        "key": "D",
        "text": "Recommend mitigations and residual-risk acceptance for risks that remain."
      },
      {
        "key": "E",
        "text": "Enumerate the threat actors and attack vectors relevant to the deployment."
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Chỉ có thể ước tính khả năng và tác động của rủi ro sau khi xác định các tài sản bị ảnh hưởng bởi việc triển khai và mức độ nhạy cảm của chúng, sau đó xác định các tác nhân đe dọa có liên quan và các phương hướng tấn công. Độ nhạy của tài sản xác định hậu quả tiềm ẩn của sự xâm phạm, trong khi các tác nhân và vectơ đe dọa xác định các kịch bản đe dọa hợp lý. Các khuyến nghị giảm thiểu, chấp nhận rủi ro tồn dư và tài liệu về kết quả sẽ được đưa ra sau quá trình phân tích.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 27",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/27-governance-safety-risk-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-28",
    "questionNumber": 28,
    "text": "Following an update to a prompt template, several test cases that had previously passed now generate unexpected outputs.  \n  \nWhich test type is specifically intended to identify this kind of failure?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Integration tests that validate cross-component pipeline behavior."
      },
      {
        "key": "B",
        "text": "Adversarial tests that probe for prompt-injection vulnerabilities."
      },
      {
        "key": "C",
        "text": "Regression tests scored against a stable reference set of known-good behavior."
      },
      {
        "key": "D",
        "text": "Smoke tests that confirm high-level system availability after the change."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Kiểm tra hồi quy phát hiện những thay đổi ngoài ý muốn trong hành vi đúng trước đây bằng cách đánh giá hệ thống đã cập nhật dựa trên các trường hợp tham chiếu ổn định, nổi tiếng.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 28",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/28-evaluation-testing-optimization",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-29",
    "questionNumber": 29,
    "text": "A platform team runs a self-hosted, multi-agent system on Kubernetes that coordinates seven specialized agents for invoice processing. The team uses approximately 40 percent of its engineering capacity for infrastructure maintenance, message-bus reliability, and agent-state recovery. The CFO has asked for an evaluation of a move to managed agent infrastructure to recover engineering capacity. The security officer requires all customer financial data to stay within an approved network boundary.  \n  \nWhich factor should carry the greatest weight in your recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Whether the current seven agents map cleanly to the patterns supported by managed agents."
      },
      {
        "key": "B",
        "text": "Whether managed agents reduce per-invoice token costs across the existing processing volume."
      },
      {
        "key": "C",
        "text": "Whether managed agents support the current bus topology used by the platform team."
      },
      {
        "key": "D",
        "text": "Whether managed agent data handling satisfies the network boundary required by security."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc tuân thủ ranh giới mạng đã được phê duyệt đối với dữ liệu tài chính của khách hàng là một hạn chế bảo mật bắt buộc. Các lợi ích vận hành như giảm nỗ lực bảo trì, giảm chi phí mã thông báo hoặc khả năng tương thích về kiến ​​trúc không thể biện minh cho việc áp dụng một dịch vụ được quản lý không đáp ứng được yêu cầu xử lý dữ liệu đó.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 29",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/29-governance-safety-risk-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-30",
    "questionNumber": 30,
    "text": "You are determining where human review must remain in a proposed automated pipeline.  \n  \nWhich placement represents sound human-in-the-loop design?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Place a human reviewer only after the irreversible action has already executed, making the review a post-hoc audit rather than a meaningful pre-action check or approval gate."
      },
      {
        "key": "B",
        "text": "Place a human reviewer between the model’s output and any high-impact, irreversible action, with explicit criteria for what the reviewer must check before approval."
      },
      {
        "key": "C",
        "text": "Place a human reviewer in the loop for a randomly selected sample of requests, without defining criteria for what the reviewer should check or which output categories require mandatory review."
      },
      {
        "key": "D",
        "text": "Remove all human review steps from the pipeline to maximize throughput, accepting that high-impact and irreversible actions will be taken without any human approval or oversight."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc đánh giá của con người phải diễn ra sau khi mô hình tạo ra kết quả đầu ra nhưng trước bất kỳ hành động có tác động lớn, không thể đảo ngược nào và người đánh giá cần có tiêu chí phê duyệt rõ ràng. Điều này duy trì sự giám sát có ý nghĩa và cho phép can thiệp trước khi xảy ra tổn hại hoặc hậu quả không thể khắc phục được.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 30",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/30-you-are-determining-where-human-review-must-remain-in-a-prop",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-31",
    "questionNumber": 31,
    "text": "A Claude architect at a health services organization is establishing evaluation metrics for a clinical-summary pipeline. The pipeline must stay within a per-query cost ceiling and must never expose patient data to unauthorized roles.  \n  \nWhich two metrics directly address these requirements? (Select two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "BLEU score computed against a human-annotated reference summary set"
      },
      {
        "key": "B",
        "text": "Role-based access-control enforcement rate measured on a red-team dataset"
      },
      {
        "key": "C",
        "text": "Throughput measured as successful requests processed per minute"
      },
      {
        "key": "D",
        "text": "Per-query token cost measured against the defined cost ceiling"
      },
      {
        "key": "E",
        "text": "Response latency at the 95th percentile across a one-week sample window"
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Chi phí mã thông báo cho mỗi truy vấn trực tiếp kiểm tra việc tuân thủ mức trần chi phí đã xác định. Tỷ lệ thực thi RBAC được đo trên các trường hợp thử nghiệm đối nghịch trực tiếp kiểm tra xem các biện pháp kiểm soát ủy quyền có ngăn chặn các vai trò trái phép truy cập dữ liệu bệnh nhân hay không. Chi phí API Claude được điều chỉnh bởi việc sử dụng mã thông báo và RBAC chỉ định quyền cho người dùng hoặc nhóm được ủy quyền.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 31",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/31-evaluation-testing-optimization",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-32",
    "questionNumber": 32,
    "text": "A Claude-based research assistant starts generating responses that confidently contradict its retrieved source documents, even though the retrieval pipeline has not changed.  \n  \nWhich two diagnostic actions most directly identify the root cause of this behavior? (Select two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Increase the context-window size to allow more retrieved chunks per query."
      },
      {
        "key": "B",
        "text": "Switch the retrieval index to a denser embedding model to improve chunk-relevance scores."
      },
      {
        "key": "C",
        "text": "Determine whether the failure reproduces on the previous model version to test for a model mismatch."
      },
      {
        "key": "D",
        "text": "Reduce the temperature setting to lower response variance across all query types."
      },
      {
        "key": "E",
        "text": "Inspect the system-prompt grounding instructions to determine whether citation constraints remain intact."
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc tái tạo hành vi bằng phiên bản mô hình trước đó có thể tách biệt sự không khớp giữa phiên bản mô hình hoặc định tuyến mô hình khi quá trình truy xuất không thay đổi. Việc xem lại lời nhắc của hệ thống sẽ xác minh rằng các hướng dẫn yêu cầu câu trả lời phải căn cứ vào nội dung được truy xuất và bị ràng buộc bởi các trích dẫn chưa bị xóa hoặc bị suy yếu. Các bản cập nhật mô hình Claude có thể thay đổi hành vi tuân theo hướng dẫn, vì vậy Anthropic khuyên bạn nên thử nghiệm các ứng dụng khi thay đổi mô hình.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 32",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/32-evaluation-testing-optimization",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-33",
    "questionNumber": 33,
    "text": "You are assessing prompting claims in a peer’s design document.  \n  \nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "questionType": "statement_matrix",
    "statements": [
      {
        "id": "1",
        "text": "Zero-shot is appropriate as a starting point for closed-set classification when categories and descriptions are provided in the prompt.",
        "correctAnswer": "Yes"
      },
      {
        "id": "2",
        "text": "Adding a few-shot example set with exact field names anchors output formatting on extraction tasks.",
        "correctAnswer": "Yes"
      },
      {
        "id": "3",
        "text": "Chain-of-thought should be the default on every task regardless of complexity.",
        "correctAnswer": "No"
      },
      {
        "id": "4",
        "text": "Leading-question framing is best mitigated by asking for an even-handed comparison with stated criteria.",
        "correctAnswer": "Yes"
      },
      {
        "id": "5",
        "text": "Behavioral differences across model versions can be ignored once a prompt has been validated on one version.",
        "correctAnswer": "No"
      }
    ],
    "options": [
      {
        "key": "Yes",
        "text": "Yes"
      },
      {
        "key": "No",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "1:Yes",
      "2:Yes",
      "3:No",
      "4:Yes",
      "5:No"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R2cqjmlfiv5tpfiv5uadb\"]::highlight(question-marker-R2cqjmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R2cqjmlfiv5tpfiv5uadb\"]::highlight(question-marker-R2cqjmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R2cqjmlfiv5tpfiv5uadb\"]::highlight(question-marker-R2cqjmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc phân loại không cần thực hiện có hiệu quả khi nhãn và định nghĩa của chúng được chỉ định rõ ràng. Các ví dụ Few-shot với các trường lược đồ chính xác củng cố định dạng trích xuất mong muốn. Chuỗi suy nghĩ chỉ nên được áp dụng khi hữu ích cho nhiệm vụ chứ không phải như một mặc định chung. So sánh trung lập với tiêu chí rõ ràng phản ánh khung dẫn đầu. Hoạt động của mô hình có thể khác nhau tùy theo phiên bản, vì vậy, lời nhắc yêu cầu xác thực sau khi thay đổi phiên bản.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 33",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/33-claude-models-prompting-context-engineering",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-34",
    "questionNumber": 34,
    "text": "You are designing a content-moderation classifier that handles high volumes of user-generated comments under a tight per-message latency budget and uses well-defined classification labels.  \n  \nWhich model selection best fits this workload?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Opus, because every moderation decision requires maximum reasoning depth regardless of classification complexity."
      },
      {
        "key": "B",
        "text": "Haiku, because its latency and cost profile align with high-volume classification workloads that require limited reasoning depth."
      },
      {
        "key": "C",
        "text": "Sonnet, because larger general-purpose models are preferred even when workload latency requirements are strict."
      },
      {
        "key": "D",
        "text": "Sonnet with extended thinking enabled, because deeper reasoning should be applied to every moderation request to improve edge-case handling."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Claude Haiku được thiết kế cho công việc có khối lượng lớn, nhạy cảm với độ trễ như phân loại, trích xuất và định tuyến. Cấu hình nhanh hơn, chi phí thấp hơn của nó phù hợp với các nhãn kiểm duyệt được xác định rõ ràng và không yêu cầu lý luận sâu sắc, trong khi các mô hình lớn hơn hoặc tư duy bổ sung sẽ làm tăng độ trễ mà không cần thiết cho khối lượng công việc này.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 34",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/34-claude-models-prompting-context-engineering",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-35",
    "questionNumber": 35,
    "text": "A revenue-projection assistant is 38 percent above its monthly cost target. Profiling identifies three contributors: a 6,000-token policy preamble repeated on every call (45 percent of cost), retrieval of historical sales chunks averaging 3,000 tokens per call (30 percent), and inference on a flagship-tier model (25 percent). Stakeholders require that projection accuracy remain unchanged.  \n  \nWhich two optimizations should you sequence first to reduce cost without affecting accuracy? Each correct answer represents part of the solution. (Select two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Reduce the number of historical sales chunks retrieved across each query run."
      },
      {
        "key": "B",
        "text": "Truncate the policy preamble to remove non-essential clauses from the prompt."
      },
      {
        "key": "C",
        "text": "Enable prompt caching on the static policy preamble across the recurring calls."
      },
      {
        "key": "D",
        "text": "Switch the workload to a smaller, faster Claude model tier across all queries."
      },
      {
        "key": "E",
        "text": "Cache common retrieved sales chunks accessed across many of the daily queries."
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Prompt caching cho phép các yêu cầu định kỳ sử dụng lại tiền tố ổn định giống hệt nhau, chẳng hạn như phần mở đầu chính sách hoặc ngữ cảnh được sử dụng lại thường xuyên, với chi phí xử lý đầu vào thấp hơn nhiều trong khi vẫn giữ được nội dung chính xác được cung cấp cho mô hình. Do đó, việc lưu chính sách tĩnh vào bộ nhớ đệm và các phần lịch sử-bán hàng thường được sử dụng lại sẽ giảm hai chi phí liên quan đến dấu nhắc có thể lặp lại lớn nhất mà không thay đổi đầu vào dự báo hoặc cấp mô hình.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 35",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/35-evaluation-testing-optimization",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-36",
    "questionNumber": 36,
    "text": "You are assessing retrieval-strategy claims used by a peer team.  \n  \nFor each claim, select **Yes** when it is generally accurate; otherwise, select **No**.",
    "questionType": "statement_matrix",
    "statements": [
      {
        "id": "1",
        "text": "Dense vector retrieval is well suited to recovering paraphrased intent against unstructured text.",
        "correctAnswer": "Yes"
      },
      {
        "id": "2",
        "text": "Sparse term-matching retrieval recovers exact terms (such as identifiers and rare tokens) more reliably than dense alone.",
        "correctAnswer": "Yes"
      },
      {
        "id": "3",
        "text": "Structured query retrieval is the right fit for filter-and-aggregate workloads against a relational store with schema and indexes.",
        "correctAnswer": "Yes"
      },
      {
        "id": "4",
        "text": "Hybrid retrieval is identical to dense-only retrieval and shares the same recall characteristics.",
        "correctAnswer": "No"
      },
      {
        "id": "5",
        "text": "Random sampling of a data store is a sound retrieval strategy for production Q&A.",
        "correctAnswer": "No"
      }
    ],
    "options": [
      {
        "key": "Yes",
        "text": "Yes"
      },
      {
        "key": "No",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "1:Yes",
      "2:Yes",
      "3:Yes",
      "4:No",
      "5:No"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R2cqjmlfiv5tpfiv5uadb\"]::highlight(question-marker-R2cqjmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R2cqjmlfiv5tpfiv5uadb\"]::highlight(question-marker-R2cqjmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R2cqjmlfiv5tpfiv5uadb\"]::highlight(question-marker-R2cqjmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }vector search dày đặc nắm bắt được sự tương đồng về ngữ nghĩa, hỗ trợ truy xuất diễn giải. Truy xuất từ ​​vựng thưa thớt là mạnh nhất đối với các chuỗi chính xác, số nhận dạng và thuật ngữ hiếm. Các truy vấn và chỉ mục quan hệ hỗ trợ việc lọc và tổng hợp xác định. Truy xuất kết hợp kết hợp các cách tiếp cận thưa thớt và dày đặc, mang lại cho nó hành vi truy xuất và thu hồi khác với tìm kiếm chỉ dày đặc. Lấy mẫu ngẫu nhiên cung cấp sự đảm bảo về mức độ liên quan của no, do đó, nó không phù hợp để truy xuất câu trả lời cho câu hỏi sản xuất.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 36",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/36-evaluation-testing-optimization",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-37",
    "questionNumber": 37,
    "text": "An operations engineer says that a Claude-based pipeline started returning malformed JSON responses after a scheduled maintenance window, resulting in downstream processing failures.  \n  \nWhich two investigative actions most directly isolate the root cause? (Select two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Clear the prompt cache and resubmit all pending requests to eliminate stale cached prefixes."
      },
      {
        "key": "B",
        "text": "Compare the current system prompt and output schema configuration against the last known good version from before the maintenance window."
      },
      {
        "key": "C",
        "text": "Switch to a different Claude model tier to rule out provider-side changes as a contributing factor."
      },
      {
        "key": "D",
        "text": "Increase the max_tokens limit to determine whether output truncation is causing incomplete JSON structures."
      },
      {
        "key": "E",
        "text": "Replay a set of premaintenance requests against the current configuration and inspect the raw model output before downstream parsing."
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc so sánh cấu hình có thể cho biết liệu việc bảo trì có làm thay đổi các hướng dẫn hệ thống hoặc các yêu cầu về lược đồ đầu ra chi phối định dạng JSON hay không. Việc phát lại các đầu vào bảo trì tốt đã biết dựa trên cấu hình hiện tại và kiểm tra phản hồi thô của Claude sẽ tách đầu ra của mô hình không đúng định dạng khỏi các lỗi do quá trình phân tích cú pháp xuôi dòng gây ra. Các hướng dẫn và ràng buộc định dạng đầu ra rõ ràng rất quan trọng để có hành vi định dạng mô hình nhất quán.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 37",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/37-developer-productivity-operational-enablement",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-38",
    "questionNumber": 38,
    "text": "You are a solution architect evaluating candidate use cases for a Claude-based program.  \n  \nFor each scenario, select Yes if Claude is appropriate as the primary solution at the architectural level. Otherwise, select No.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "[data-question-highlight-id=\"question-marker-R17ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R17ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R17ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R17ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R17ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R17ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Claude rất phù hợp với việc soạn thảo báo cáo từ văn bản bán cấu trúc, xem xét các tài liệu dài, trích xuất các mệnh đề có cấu trúc, xác định các sai lệch, phân loại phiếu hỗ trợ và giải thích các phân loại. Một quyết định gian lận phát trực tuyến dưới 50 ms cần tính điểm chuyên biệt có độ trễ thấp và có thể dự đoán được thay vì LLM làm giải pháp chính. Việc truy xuất ngữ nghĩa trên hàng triệu tài liệu yêu cầu chỉ mục vectơ hoặc hệ thống truy xuất tương đương; Claude có thể sử dụng các kết quả được truy xuất nhưng không thay thế chỉ mục đó.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 38",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/38-solution-design-architecture",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-39",
    "questionNumber": 39,
    "text": "You are assembling factors that should guide the selection among Model Context Protocol (MCP), direct API integration, and agent-to-agent handoff.  \n  \nWhich two factors should be included on the list? Each correct answer provides a complete solution. (Select two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Whether the vendor publishes detailed reference documentation for each candidate protocol."
      },
      {
        "key": "B",
        "text": "Whether the team has prior implementation experience with any of the candidate protocols."
      },
      {
        "key": "C",
        "text": "Whether the underlying transport supports encryption in transit between the integrated services."
      },
      {
        "key": "D",
        "text": "Whether the integration must be portable across multiple AI clients in the ecosystem."
      },
      {
        "key": "E",
        "text": "Whether the interaction is stateless and latency-sensitive or stateful and longer-running."
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Tính di động trên nhiều máy khách AI ưu tiên MCP vì nó cung cấp giao thức máy khách-máy chủ được tiêu chuẩn hóa mà các máy chủ tương thích có thể sử dụng. Vòng đời tương tác cũng xác định phương pháp tích hợp: API trực tiếp phù hợp với các hoạt động phản hồi yêu cầu đơn giản, có độ trễ thấp, trong khi chuyển giao tác nhân chuyển giao quyền kiểm soát và duy trì bối cảnh cho công việc có trạng thái, chạy lâu hơn giữa các tác nhân chuyên biệt.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 39",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/39-integration",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-40",
    "questionNumber": 40,
    "text": "You are choosing a protocol for one low-latency, stateless tool call from a Claude-based assistant to an internal pricing service that already offers a stable HTTP API.  \n  \nWhich integration mechanism is most appropriate?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "A direct API call to the existing endpoint with the appropriate scoped credentials."
      },
      {
        "key": "B",
        "text": "A long-lived stateful session protocol for a stateless single-call interaction."
      },
      {
        "key": "C",
        "text": "A bespoke streaming protocol layered over an unrelated asynchronous message bus."
      },
      {
        "key": "D",
        "text": "An agent-to-agent handoff that introduces another Claude-based agent in front of the pricing service."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Cuộc gọi trực tiếp đến điểm cuối HTTP hiện có là cách tích hợp đơn giản nhất và có độ trễ thấp nhất cho một hoạt động không trạng thái. Thông tin xác thực có phạm vi thực thi quyền truy cập có đặc quyền tối thiểu, trong khi giao thức phiên liên tục, lớp phát trực tuyến tùy chỉnh hoặc tác nhân can thiệp sẽ tăng thêm độ phức tạp và độ trễ mà không đáp ứng yêu cầu đã nêu. Claude hỗ trợ tool use phía máy khách, trong đó ứng dụng thực hiện lệnh gọi công cụ và trả về kết quả của nó.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 40",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/40-integration",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-41",
    "questionNumber": 41,
    "text": "You are assessing an integration specification for security weaknesses.  \n  \nWhich two findings represent valid security gaps in the specification? Each correct answer provides a complete solution. (Select two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Tool calls execute server-side under a least-privilege service principal scoped to the requested action."
      },
      {
        "key": "B",
        "text": "Service credentials are placed in the prompt context, where they can leak into logs and traces."
      },
      {
        "key": "C",
        "text": "Role-based access control is enforced only at the response-rendering layer after the model accesses restricted data."
      },
      {
        "key": "D",
        "text": "Per-user OAuth tokens are exchanged with scope-restricted permissions and refreshed within the active session."
      },
      {
        "key": "E",
        "text": "Tool inputs and outputs are encrypted in transit using transport-layer security between services."
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Không được đưa thông tin đăng nhập dịch vụ vào ngữ cảnh kịp thời vì chúng có thể bị lộ thông qua quá trình ghi nhật ký và theo dõi. Việc ủy ​​quyền phải được thực thi trước khi một mô hình hoặc công cụ truy cập dữ liệu bị hạn chế; RBAC chỉ dành cho lớp phản hồi cho phép truy cập trái phép xảy ra trước khi quá trình hiển thị bị chặn.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 41",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/41-governance-safety-risk-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-42",
    "questionNumber": 42,
    "text": "The platform team at Trenova Systems, Inc. must lower per-query cost and p95 latency for a high-volume Claude pipeline without reducing output quality for the core use case.  \n  \nWhich two optimizations directly address both cost and latency at the same time? (Select two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Enable prompt caching on the static system-prompt prefix to reduce billable input tokens on repeated calls."
      },
      {
        "key": "B",
        "text": "Route straightforward query types to a smaller, faster Claude model and reserve the full model for complex cases."
      },
      {
        "key": "C",
        "text": "Increase max_tokens to reduce the frequency of truncated responses requiring follow-up calls."
      },
      {
        "key": "D",
        "text": "Add a retrieval step that fetches the full source corpus into the context window before generation."
      },
      {
        "key": "E",
        "text": "Expand the system prompt to include additional few-shot examples on every request."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Prompt caching cho phép các cuộc gọi lặp lại sử dụng lại tiền tố tĩnh của lời nhắc hệ thống, do đó dữ liệu đầu vào được lưu vào bộ nhớ đệm sẽ được tính phí ở mức thấp hơn và tránh việc xử lý lại tiền tố đó. Việc định tuyến các yêu cầu đơn giản đến mô hình nhỏ hơn, nhanh hơn sẽ giảm chi phí suy luận và thời gian phản hồi, đồng thời dành mô hình lớn hơn cho các yêu cầu phức tạp để duy trì chất lượng ở những nơi quan trọng. Việc tăng giới hạn đầu ra, truy xuất toàn bộ kho văn bản hoặc mở rộng mọi lời nhắc sẽ thêm quá trình xử lý hoặc mã thông báo thay vì trực tiếp giảm cả hai số liệu.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 42",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/42-evaluation-testing-optimization",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-43",
    "questionNumber": 43,
    "text": "You are implementing monitoring for a Claude-based deployment and must complete the specification steps before instrumenting the deployment.  \n  \nWhich two steps must be completed **BEFORE** instrumenting the deployment to emit metrics and traces? Each correct answer is part of the solution. *(Select two.)*",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Define the metrics and the slices the deployment will monitor across normal and adversarial traffic."
      },
      {
        "key": "B",
        "text": "Tune the alert thresholds based on observed normal-state distributions to reduce false positives."
      },
      {
        "key": "C",
        "text": "Define the service-level objectives (SLOs) and the error budgets the deployment will be held to."
      },
      {
        "key": "D",
        "text": "Build the dashboards that surface metrics across slices at the cadence the team operates on."
      },
      {
        "key": "E",
        "text": "Document the dashboards, alerts, and runbooks for the on-call rotation that will respond."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Thiết bị đo phải được thiết kế để đưa ra các số liệu và thứ nguyên lưu lượng truy cập cần thiết để phân biệt hành vi bình thường và hành vi đối nghịch. Các phép đo đó hỗ trợ các chỉ báo mức dịch vụ được sử dụng để thiết lập SLO; đến lượt SLO xác định mức lỗi của nó. Ngưỡng cảnh báo yêu cầu phân phối cơ sở được quan sát, trong khi bảng thông tin và tài liệu theo yêu cầu sẽ sử dụng kết quả đo từ xa sau khi thiết kế giám sát được thiết lập.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 43",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/43-evaluation-testing-optimization",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-44",
    "questionNumber": 44,
    "text": "During discovery, you are differentiating functional requirements from non-functional requirements.  \n  \nWhich item is a non-functional requirement?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "The system must extract a defined set of specific fields from invoice attachments and populate a downstream data record."
      },
      {
        "key": "B",
        "text": "The system must produce a draft response that a human reviewer can edit before sending."
      },
      {
        "key": "C",
        "text": "The system must classify inbound tickets into a defined set of categories."
      },
      {
        "key": "D",
        "text": "The system must respond at p95 latency under 800 milliseconds at the expected request volume."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Mục tiêu độ trễ p95 dưới 800 mili giây với khối lượng yêu cầu dự kiến ​​là một hạn chế về hiệu suất có thể đo lường được nhằm xác định mức độ hệ thống phải hoạt động tốt như thế nào. Trích xuất trường, tạo bản nháp có thể chỉnh sửa của con người và phân loại vé chỉ định các chức năng mà hệ thống phải thực hiện. Microsoft xác định các yêu cầu chức năng là những gì ứng dụng thực hiện và các yêu cầu phi chức năng là mức độ hoạt động của ứng dụng, bao gồm cả độ trễ.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 44",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/44-solution-design-architecture",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-45",
    "questionNumber": 45,
    "text": "A healthcare organization is assessing two Claude-powered AI architectures for a clinical-documentation assistant. Architecture X delivers higher output-quality scores, but costs $0.18 per documentation session and averages 4.2 seconds per response. Architecture Y scores slightly lower on quality metrics, but costs $0.09 per session and averages 2.1 seconds per response. The stated SLA requires responses in under 3 seconds, and the projected annual volume is 2 million documentation sessions.  \n  \nWhich evaluation approach properly applies business-value pillar analysis to this decision?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Select Architecture Y based solely on the 50% cost reduction, since solution cost is the most important value pillar in healthcare budget-constrained environments."
      },
      {
        "key": "B",
        "text": "Select Architecture X because the higher quality scores justify the cost premium, and any SLA gap can be addressed through infrastructure optimization after deployment."
      },
      {
        "key": "C",
        "text": "Eliminate Architecture X on SLA grounds, then evaluate Architecture Y against the efficiency and solution cost pillars by calculating annual cost difference and assessing whether the quality delta materially impacts clinical workflow productivity."
      },
      {
        "key": "D",
        "text": "Recommend a hybrid approach using Architecture X for complex cases and Architecture Y for routine cases, without additional analysis, since this preserves quality where it matters most."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }SLA độ trễ bắt buộc là một hạn chế về tính khả thi: Mức trung bình 4,2 giây của Kiến trúc X không đáp ứng yêu cầu dưới 3 giây, trong khi mức trung bình 2,1 giây của Kiến trúc Y thì đáp ứng được. Với 2 triệu phiên, mức chi tiêu hàng năm là 360.000 USD cho X và 180.000 USD cho Y, mang lại chênh lệch 180.000 USD hàng năm. Quyết định còn lại là liệu việc giảm chất lượng của Y có làm giảm đáng kể năng suất của quy trình làm việc lâm sàng đủ để vượt trội hơn so với hiệu suất tuân thủ và chi phí thấp hơn hay không. Tương tự, hướng dẫn của AWS yêu cầu loại bỏ các tùy chọn không đáp ứng yêu cầu về khối lượng công việc, sau đó chọn và thử nghiệm các tùy chọn đáp ứng các yêu cầu về độ trễ, thông lượng và chất lượng phản hồi trong khi đánh giá sự cân bằng giữa chi phí và hiệu suất của chúng.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 45",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/45-evaluation-testing-optimization",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-46",
    "questionNumber": 46,
    "text": "You are troubleshooting a Claude Code session in which its subagent uses 50,000 context tokens before the engineer types even a single message.  \n  \nWhich root cause is most likely?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "The developer's keyboard layout or input-method configuration is the cause of the elevated context consumption, introducing extra tokens before the engineer types any message."
      },
      {
        "key": "B",
        "text": "Many MCP servers are configured, each contributing tool definitions to the context budget; Tool Search is not enabled, so all definitions load upfront."
      },
      {
        "key": "C",
        "text": "The model has internal personal preferences or default behaviors that silently consume large portions of context budget before any user message is processed, independent of tool configuration."
      },
      {
        "key": "D",
        "text": "The font rendering or display-scaling settings of the IDE are converting visual output into additional context tokens, causing the high pre-session context consumption."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Khi Tìm kiếm công cụ bị tắt, Claude Code sẽ tải tất cả các định nghĩa công cụ MCP đã định cấu hình vào cửa sổ ngữ cảnh khi khởi động. Do đó, một bộ sưu tập lớn các máy chủ MCP có thể tiêu thụ hàng chục nghìn mã thông báo trước khi bất kỳ thông báo kỹ sư nào được nhập.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 46",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/46-claude-models-prompting-context-engineering",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-47",
    "questionNumber": 47,
    "text": "You are assisting an engineer whose newly added MCP server is not appearing in their Claude Code session.  \n  \nWhich diagnostic step should be attempted first?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Disable every MCP server in the configuration to isolate the issue, removing all tool access rather than confirming whether the new server is registered."
      },
      {
        "key": "B",
        "text": "Switch the team to a different Claude product family unrelated to the existing workflow, abandoning the current configuration rather than diagnosing the registration issue."
      },
      {
        "key": "C",
        "text": "Verify the MCP server is registered using the listing command, then reconnect the session if needed, since configuration changes typically require a restart to take effect."
      },
      {
        "key": "D",
        "text": "Reinstall the developer’s operating system from scratch, discarding all local configuration and tool state before attempting any targeted diagnostic steps."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }`claude mcp list` xác nhận xem máy chủ MCP có được định cấu hình hay không và báo cáo trạng thái hoạt động của nó, chẳng hạn như đã kết nối, yêu cầu xác thực hoặc không kết nối được. Điều này xác định xem vấn đề là do đăng ký hay kết nối phiên trước khi thực hiện hành động gây rối; kết nối lại phiên có thể làm mới trạng thái MCP đang hoạt động khi cần thiết.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 47",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/47-integration",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-48",
    "questionNumber": 48,
    "text": "You are identifying characteristics of strong architectural-decision communication.  \n  \nWhich two characteristics should be included on the list? Each correct answer represents a complete solution. (Select two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Ownership and review cadence for revisiting the decision when conditions or assumptions change."
      },
      {
        "key": "B",
        "text": "Distribution to a standing review forum with mandatory attendance from senior engineering leaders."
      },
      {
        "key": "C",
        "text": "Omission of rejected alternatives to keep the decision document focused and concise for readers."
      },
      {
        "key": "D",
        "text": "Alternatives considered along with the criteria that were used to evaluate each alternative."
      },
      {
        "key": "E",
        "text": "Use of a consistent template across the team to standardize the visual presentation of decisions."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Hồ sơ quyết định mang tính kiến ​​trúc vững chắc truyền đạt cả trách nhiệm giải trình và lý do căn bản. Quyền sở hữu với nhịp độ đánh giá giúp duy trì quyết định khi các giả định hoặc điều kiện của nó thay đổi, đồng thời ghi lại các lựa chọn thay thế được xem xét và tiêu chí đánh giá của chúng giúp cho sự đánh đổi và biện minh có thể hiểu được đối với các bên liên quan hiện tại và tương lai. Hướng dẫn ADR chính thức yêu cầu quyền sở hữu và ghi lại bối cảnh, bao gồm các giải pháp khả thi được xem xét và hậu quả của quyết định.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 48",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/48-stakeholder-communication-lifecycle-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-49",
    "questionNumber": 49,
    "text": "A Claude architect is designing a HIPAA-compliant pipeline that handles patient records.  \n  \nWhich two design decisions directly support HIPAA compliance requirements? (Select two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Setting max_tokens to a low value to minimize the volume of text generated per request."
      },
      {
        "key": "B",
        "text": "Selecting the highest-capability Claude model to maximize diagnostic accuracy."
      },
      {
        "key": "C",
        "text": "Enforcing role-based access controls so that PHI is retrievable only by authorized personnel."
      },
      {
        "key": "D",
        "text": "Ensuring patient data is never included in training feedback loops sent to the model provider without a BAA in place."
      },
      {
        "key": "E",
        "text": "Using streaming responses to reduce perceived latency for clinical users."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Các biện pháp bảo vệ của HIPAA bao gồm các biện pháp kiểm soát quyền truy cập nhằm hạn chế thông tin sức khỏe được bảo vệ bằng điện tử (ePHI) đối với các thành viên lực lượng lao động được ủy quyền. Khi nhà cung cấp dịch vụ nhận PHI như một phần của việc thực hiện dịch vụ, thỏa thuận liên kết kinh doanh (BAA) phải xác định và hạn chế việc sử dụng và tiết lộ được phép cũng như yêu cầu các biện pháp bảo vệ thích hợp; Do đó, PHI không được gửi đến nhà cung cấp mô hình để lấy ý kiến ​​phản hồi về đào tạo nếu không có BAA hiện hành.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 49",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/49-governance-safety-risk-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-50",
    "questionNumber": 50,
    "text": "An architect reviews a set of architecture-documentation packages before transferring a Claude-based pipeline to an implementation team.  \n  \nWhich two characteristics show that a documentation package is sufficient to enable implementation without continued involvement from the architect? (Select two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "The document specifies integration contracts, configuration schemas, and expected input/output shapes for each component."
      },
      {
        "key": "B",
        "text": "The document includes a decision log that records the rationale for key architectural choices and the alternatives rejected."
      },
      {
        "key": "C",
        "text": "The document provides a high-level narrative description of the business problem without component-level detail."
      },
      {
        "key": "D",
        "text": "The document includes the architect’s contact information for questions arising during implementation."
      },
      {
        "key": "E",
        "text": "The document lists all Claude models that were evaluated but does not specify which was selected or why."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Nhóm triển khai cần có hợp đồng tích hợp rõ ràng, lược đồ cấu hình và hình dạng đầu vào/đầu ra dự kiến ​​để xây dựng và kết nối các thành phần một cách chính xác. Nhật ký quyết định cũng lưu giữ cơ sở hợp lý cho các lựa chọn kiến ​​trúc then chốt và các phương án thay thế bị từ chối, cho phép nhóm áp dụng những đánh đổi đã dự định mà không cần dựa vào kiến ​​trúc sư.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 50",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/50-stakeholder-communication-lifecycle-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-51",
    "questionNumber": 51,
    "text": "The engineering lead at Trenova Systems, Inc. is assessing two proposals to improve developer workflows with Claude-assisted tooling. Proposal A integrates Claude Code into the IDE for inline code generation and review. Proposal B sends all code-generation requests through a shared Slack bot with no IDE integration.  \n  \nWhich two observations most accurately assess these proposals against workflow-improvement objectives? (Select two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Proposal B is superior because centralizing requests in Slack creates an auditable log of all code-generation activity."
      },
      {
        "key": "B",
        "text": "Proposal B introduces workflow friction by requiring developers to leave the IDE, undermining the productivity objective."
      },
      {
        "key": "C",
        "text": "Proposal A reduces context switching by providing AI assistance at the point of development without requiring a separate tool."
      },
      {
        "key": "D",
        "text": "Proposal B improves workflow velocity because Slack notifications create an asynchronous review queue."
      },
      {
        "key": "E",
        "text": "Both proposals are equivalent because the model capabilities are identical regardless of the integration point."
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Hỗ trợ AI được tích hợp trực tiếp vào IDE giúp giảm việc chuyển đổi ngữ cảnh và hỗ trợ việc tạo và đánh giá mã tại thời điểm diễn ra công việc phát triển. Việc yêu cầu các nhà phát triển gửi yêu cầu thông qua Slack sẽ đưa họ ra khỏi môi trường đó và gây thêm cản trở cho quy trình làm việc, điều này làm suy yếu mục tiêu năng suất.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 51",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/51-developer-productivity-operational-enablement",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-52",
    "questionNumber": 52,
    "text": "You are reviewing a peer’s draft architecture decision record (ADR). The ADR records the decision and technical details but omits the alternatives considered and the trade-offs accepted.  \n  \nWhich response is most appropriate?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Delete the ADR entirely and rely on the engineering team’s collective memory to reconstruct the decision context, alternatives, and trade-offs during future audits or onboarding."
      },
      {
        "key": "B",
        "text": "Ask the author to add the alternatives considered and the trade-offs accepted before publishing the ADR."
      },
      {
        "key": "C",
        "text": "Approve the ADR as written on the grounds that the decision itself is documented, accepting that reviewers and future maintainers will lack the context to evaluate or revisit it."
      },
      {
        "key": "D",
        "text": "Replace the ADR with a different decision unrelated to the one drafted."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }ADR phải ghi lại không chỉ quyết định mà còn cả các lựa chọn thay thế được đánh giá và hậu quả hoặc sự đánh đổi được chấp nhận. Điều này duy trì cơ sở lý luận cần thiết cho việc xem xét, bảo trì, kiểm tra và triển khai trong tương lai.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 52",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/52-you-are-reviewing-a-peer-s-draft-architecture-decision-recor",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-53",
    "questionNumber": 53,
    "text": "A Claude architect is setting up a shared Claude Code environment for a 12-person development team.  \n  \nWhich two configuration choices most directly create a consistent, secure team environment? (Select two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Commit shared MCP server definitions and tool permissions in project-scope configuration files alongside the repository."
      },
      {
        "key": "B",
        "text": "Apply managed configuration to enforce non-overridable security and compliance policies across all team members."
      },
      {
        "key": "C",
        "text": "Set editor theme and display preferences at the project scope so they are uniform across workstations."
      },
      {
        "key": "D",
        "text": "Instruct each engineer to configure their preferred Claude model in personal user-scope settings."
      },
      {
        "key": "E",
        "text": "Store the team’s shared API key in the project-scope settings.json so all engineers use the same credential."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Cấu hình trong phạm vi dự án có thể được cam kết với kho lưu trữ để tất cả những người đóng góp đều nhận được cùng một định nghĩa máy chủ MCP và đường cơ sở cấp phép công cụ. Cấu hình được quản lý được ưu tiên hơn cài đặt của người dùng và dự án, đồng thời không thể bị ghi đè, cho phép thực thi các chính sách tuân thủ và bảo mật trên toàn tổ chức. Thông tin xác thực phải được giữ ngoài các cài đặt dự án đã cam kết và được cung cấp thông qua các cơ chế xác thực an toàn hoặc các biến môi trường.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 53",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/53-a-claude-architect-is-setting-up-a-shared-claude-code-enviro",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-54",
    "questionNumber": 54,
    "text": "A security team is assessing two proposed controls. Control A implements an outbound tool allow-list with destination restrictions and per-call review. Control B evaluates responses against a stable adversarial evaluation set after every model-version change.  \n  \nWhich two risk categories are correctly matched to these controls? (Select two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Control A — prompt injection from adversarial content in retrieved data"
      },
      {
        "key": "B",
        "text": "Control A — silent quality drift after a model-version upgrade"
      },
      {
        "key": "C",
        "text": "Control A — data exfiltration via outbound tool calls"
      },
      {
        "key": "D",
        "text": "Control B — data exfiltration via outbound tool calls"
      },
      {
        "key": "E",
        "text": "Control B — silent quality drift after a model-version upgrade"
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Danh sách cho phép của công cụ gửi đi, các hạn chế về đích đến và hạn chế phê duyệt mỗi cuộc gọi trong đó nhân viên hỗ trợ có thể truyền thông tin, giảm thiểu việc đánh cắp dữ liệu thông qua các lệnh gọi công cụ. Việc chạy lại bộ đánh giá đối nghịch ổn định sau khi thay đổi phiên bản mô hình sẽ phát hiện sự hồi quy về hành vi và sự trôi dạt chất lượng thầm lặng do thay đổi phiên bản gây ra.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 54",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/54-governance-safety-risk-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-55",
    "questionNumber": 55,
    "text": "A Claude Architect reviews a post-deployment performance report for an AI-assisted legal-document summarization system.  \n  \nThe report contains these observations:  \n  \n1. Average summarization time decreased from 47 minutes to 6 minutes per document.  \n2. Associates spend less time on summaries, but overall billable output has not measurably changed.  \n3. Infrastructure costs increased by 22% because redundant retry logic generated additional API calls.  \n4. Some summaries require attorney correction, adding an average of 8 minutes of review per document.  \n  \nWhich analysis correctly assigns each observation to the appropriate business-value pillar?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Observations 1 and 2 both indicate efficiency gains; Observation 3 is a solution-cost issue; Observation 4 is a performance-SLA issue."
      },
      {
        "key": "B",
        "text": "Observation 1 is a transformation outcome; Observation 2 is an efficiency gain; Observation 3 is a performance-SLA degradation; Observation 4 is a solution-cost issue."
      },
      {
        "key": "C",
        "text": "Observations 1 and 4 together indicate a net performance-SLA improvement; Observation 2 is a transformation gap; Observation 3 is a productivity drain from over-engineering."
      },
      {
        "key": "D",
        "text": "Observation 1 indicates an efficiency gain; Observation 2 shows that productivity has not yet been realized; Observation 3 is a solution-cost issue; Observation 4 is an efficiency loss that partially offsets Observation 1."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Giảm thời gian tóm tắt là một lợi ích hiệu quả vì nó giảm thời gian lao động trên mỗi tài liệu. Giảm nỗ lực không trở thành tăng năng suất cho đến khi nó tạo ra sản lượng bổ sung có thể đo lường được hoặc sản lượng thực tế khác. Các lệnh gọi API bổ sung nhằm tăng chi tiêu cho cơ sở hạ tầng là một vấn đề về chi phí giải pháp. Thời gian sửa lỗi của luật sư sẽ bổ sung thêm công việc vào quy trình, tạo ra sự mất mát về hiệu quả mà bù đắp một phần thời gian tiết kiệm được bằng cách tóm tắt tự động.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 55",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/55-evaluation-testing-optimization",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-56",
    "questionNumber": 56,
    "text": "A team manager needs every engineer working in the same repository to use identical MCP server definitions, without manually keeping them in sync.  \n  \nWhich configuration approach meets this requirement?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "managed configuration pushed to all endpoints by the administrator"
      },
      {
        "key": "B",
        "text": "environment variables set at the operating-system level on each workstation"
      },
      {
        "key": "C",
        "text": "project-scope .claude/settings.json and .mcp.json files committed to the repository"
      },
      {
        "key": "D",
        "text": "each engineer maintains a personal ~/.claude/settings.json with the shared definitions"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Các máy chủ MCP ở phạm vi dự án được lưu trữ trong `.mcp.json` của kho lưu trữ và được thiết kế để cam kết kiểm soát phiên bản, cho phép tất cả những người đóng góp dự án chia sẻ cùng một định nghĩa máy chủ MCP. Tệp cài đặt dự án đã cam kết có thể đi kèm với cấu hình kho lưu trữ được chia sẻ đó.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 56",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/56-developer-productivity-operational-enablement",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-57",
    "questionNumber": 57,
    "text": "An architect at Trenova Systems, Inc. is evaluating two draft communication packages for the same architectural decision. Package 1 includes a threat model, residual-risk register, and control-mapping table. Package 2 includes a list of delivered capabilities and feature-level roadmap dependencies.  \n  \nWhich two audiences are correctly matched to these packages? (Select two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Package 1 engineering implementation team"
      },
      {
        "key": "B",
        "text": "Package 2 executive sponsor"
      },
      {
        "key": "C",
        "text": "Package 1 security and compliance reviewer"
      },
      {
        "key": "D",
        "text": "Package 2 product manager owning the roadmap"
      },
      {
        "key": "E",
        "text": "Package 2 security and compliance reviewer"
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Mô hình mối đe dọa, sổ đăng ký rủi ro còn lại và bảng ánh xạ kiểm soát hỗ trợ đảm bảo an ninh, chấp nhận rủi ro và đánh giá tuân thủ, vì vậy Gói 1 phù hợp với người đánh giá tuân thủ và bảo mật. Các khả năng được cung cấp và các phần phụ thuộc của lộ trình ở cấp tính năng hỗ trợ việc lập kế hoạch và ưu tiên sản phẩm, vì vậy Gói 2 phù hợp với người quản lý sản phẩm sở hữu lộ trình.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 57",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/57-an-architect-at-trenova-systems-inc",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-58",
    "questionNumber": 58,
    "text": "A research-summarization assistant has been in production for six months. A user reports that a generated summary included a fabricated citation. The product team asks whether the incident needs architectural action or is an isolated occurrence.  \n  \nWhich two Diligence-competency actions should you take? Each correct answer represents part of the solution. *(Select two.)*",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Sample recent summaries to estimate the fabrication frequency across the population."
      },
      {
        "key": "B",
        "text": "Disable the assistant immediately for all current users without any prior diagnostic analysis."
      },
      {
        "key": "C",
        "text": "Review whether citation-grounding controls exist anywhere in the current generation pipeline."
      },
      {
        "key": "D",
        "text": "Communicate to users that the assistant does not fabricate output as a matter of design."
      },
      {
        "key": "E",
        "text": "Treat the incident as an anecdotal isolated case and take no further investigative action."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc đánh giá mẫu tóm tắt gần đây sẽ xác định liệu việc bịa đặt trích dẫn có phải là vấn đề về chất lượng sản xuất rộng hơn hay không và cung cấp bằng chứng để quyết định phạm vi của nó. Việc xem xét quy trình tạo các biện pháp kiểm soát trích dẫn-grounding xác định liệu hệ thống có cơ chế hiệu quả để liên kết các trích dẫn với các nguồn hỗ trợ và bộc lộ lỗ hổng kiến ​​trúc hệ thống hay không. NIST mô tả việc đánh giá có hệ thống về grounding thực tế và đánh giá trích dẫn tự động, trong khi Microsoft khuyến nghị xác thực và giám sát việc truy xuất cũng như các thành phần grounding.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 58",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/58-governance-safety-risk-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-59",
    "questionNumber": 59,
    "text": "You are presenting an architecture decision to a mixed audience that includes an executive sponsor and the engineering leads responsible for implementing the decision.  \n  \nWhich presentation approach best serves both audiences?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Open with a deep dive into low-level implementation details targeted at engineering leads, and stop there without addressing the business outcomes or trade-offs the executive sponsor needs."
      },
      {
        "key": "B",
        "text": "Lead with the decision, the business outcomes it serves, and the trade-offs accepted; follow with the technical rationale, alternatives, and implementation implications for the engineering audience."
      },
      {
        "key": "C",
        "text": "Skip the rationale, alternatives, and trade-off discussion entirely and simply announce the chosen decision, leaving both audiences without the context needed to implement or validate it."
      },
      {
        "key": "D",
        "text": "Present a single undifferentiated narrative that addresses technical and business concerns with equal weight throughout, treating both audiences as requiring the same depth on every section."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Bản trình bày quyết định về kiến ​​trúc hiệu quả bắt đầu bằng quyết định, kết quả kinh doanh mà nó hỗ trợ và những đánh đổi được chấp nhận để các bên liên quan điều hành có thể đánh giá giá trị và rủi ro. Sau đó, nó cung cấp cơ sở kỹ thuật, các lựa chọn thay thế được xem xét và các ý nghĩa triển khai cần thiết của kỹ thuật để xác nhận và thực hiện quyết định.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 59",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/59-stakeholder-communication-lifecycle-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-60",
    "questionNumber": 60,
    "text": "You are identifying characteristics of robust guardrail design for an enterprise deployment.  \n  \nWhich two characteristics should be on the list? Each correct answer provides a complete solution. (Select two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Centralized log retention for guardrail violations with quarterly review by the security team."
      },
      {
        "key": "B",
        "text": "Per-role tool allow-lists enforced at the orchestration layer before any tool call executes."
      },
      {
        "key": "C",
        "text": "User feedback channels that route reported guardrail failures into the product backlog for triage."
      },
      {
        "key": "D",
        "text": "Periodic refresh of the system prompt wording to keep refusal language current and clear."
      },
      {
        "key": "E",
        "text": "Adversarial-input coverage in the evaluation set with regression tracking on guardrail performance."
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Các biện pháp bảo vệ doanh nghiệp mạnh mẽ thực thi đặc quyền tối thiểu ở ranh giới hành động: danh sách cho phép công cụ theo vai trò cụ thể ngăn chặn lệnh gọi công cụ trái phép trước khi nó thực thi, thay vì dựa vào lệnh mô hình để từ chối lệnh đó. Chất lượng lan can cũng cần thử nghiệm đối nghịch lặp đi lặp lại và theo dõi hồi quy để ngăn chặn các nỗ lực tiêm nhanh và bỏ qua khác cũng như phát hiện các hư hỏng theo thời gian. Hướng dẫn của OpenAI hỗ trợ hạn chế các công cụ được phép và các ứng dụng nhóm đỏ chống lại đầu vào đối nghịch.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 60",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/60-governance-safety-risk-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-61",
    "questionNumber": 61,
    "text": "You are establishing a feedback-and-alignment routine for a deployment with multiple stakeholders.  \n  \nWhich two practices should be included in the routine? Each correct answer provides a complete solution. *(Select two.)*",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Record each session and distribute the recording to stakeholders who could not attend live."
      },
      {
        "key": "B",
        "text": "Escalate any disagreement among stakeholders to the executive sponsor for binding resolution."
      },
      {
        "key": "C",
        "text": "Rotate facilitation among the participating stakeholder groups to share ownership of the routine."
      },
      {
        "key": "D",
        "text": "Set a regular cadence for revisiting expectations and assumptions as conditions evolve over time."
      },
      {
        "key": "E",
        "text": "Reconcile divergent stakeholder positions explicitly rather than papering over them in the moment."
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Một nhịp độ thường xuyên để đánh giá lại các kỳ vọng và giả định giúp duy trì sự đồng bộ của các bên liên quan khi điều kiện triển khai thay đổi. Việc dung hòa một cách rõ ràng các quan điểm khác nhau của các bên liên quan sẽ giải quyết được các xung đột thực chất thay vì giấu kín chúng, tạo ra sự liên kết bền vững.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 61",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/61-stakeholder-communication-lifecycle-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-62",
    "questionNumber": 62,
    "text": "You are establishing an SLA for a Claude-based assistant.  \n  \nWhich SLA definition is the most operationally meaningful?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "A target tied to a stakeholder sentiment measure such as “the team feels satisfied,” which cannot be measured objectively or used to trigger a documented breach response."
      },
      {
        "key": "B",
        "text": "A measurable target with a defined metric, threshold, evaluation window, and consequence for breach—for example, “p95 per-request latency under 800 ms over a 28-day window.”"
      },
      {
        "key": "C",
        "text": "A qualitative commitment such as “the system will be fast and reliable,” which names no metric, threshold, or evaluation window."
      },
      {
        "key": "D",
        "text": "A target that names the metric and threshold but omits the evaluation window and breach consequence, leaving compliance periods and remediation triggers undefined."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }SLA hoạt động xác định chỉ số khách quan, ngưỡng có thể chấp nhận, khoảng thời gian dùng để đánh giá sự tuân thủ và hậu quả hoặc phản hồi được ghi lại đối với hành vi vi phạm. Những yếu tố này làm cho hiệu suất có thể đo lường được và thiết lập khi nào cần khắc phục.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 62",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/62-stakeholder-communication-lifecycle-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-63",
    "questionNumber": 63,
    "text": "You are explaining Claude Code configuration-scope precedence to the team.  \n  \nWhich ordering of precedence, from highest to lowest, is correct?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Local → managed → user → command-line arguments → project"
      },
      {
        "key": "B",
        "text": "Project → user → managed → local → command-line arguments"
      },
      {
        "key": "C",
        "text": "Managed → command-line arguments → local → project → user"
      },
      {
        "key": "D",
        "text": "User → project → local → command-line arguments → managed"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Claude Code ưu tiên cao nhất cho cài đặt do tổ chức quản lý, tiếp theo là cài đặt dòng lệnh, cài đặt dự án cục bộ, cài đặt dự án dùng chung và cài đặt người dùng. Cài đặt có mức độ ưu tiên cao hơn sẽ ghi đè cùng một khóa ở các cấp độ thấp hơn.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 63",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/63-developer-productivity-operational-enablement",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-64",
    "questionNumber": 64,
    "text": "You are establishing transparency practices for a customer-facing assistant whose responses are materially influenced by AI.  \n  \nWhich transparency practice most directly promotes responsible deployment?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Misrepresent the AI’s role in producing responses in order to make the assistant feel more trustworthy or more human, undermining informed user consent and organizational transparency."
      },
      {
        "key": "B",
        "text": "Refuse to answer any user question about how the responses were produced or whether AI was involved, treating the AI’s role as confidential operational information."
      },
      {
        "key": "C",
        "text": "Disclose AI involvement to end users in line with the organization’s transparency policy and provide a documented path to reach a human when needed."
      },
      {
        "key": "D",
        "text": "Disclose AI involvement only to internal staff and operators while withholding that information from the end users whose interactions are materially shaped by the AI system."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc triển khai có trách nhiệm đòi hỏi phải tiết lộ rõ ​​ràng về sự tham gia của AI cho những người bị ảnh hưởng bởi hệ thống, giúp họ hiểu được bản chất của sự tương tác và điều chỉnh mức độ tin cậy của họ một cách thích hợp. Một lộ trình hỗ trợ con người được ghi lại, dễ tiếp cận cũng hỗ trợ việc giám sát và báo cáo khi trợ lý không thể giải quyết nhu cầu một cách thích hợp. Hướng dẫn của Microsoft yêu cầu tiết lộ AI rõ ràng cho các tác nhân làm việc bên ngoài và các tùy chọn tương tác hoặc chuyển giao trực quan của con người.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 64",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/64-governance-safety-risk-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-65",
    "questionNumber": 65,
    "text": "You are auditing a procurement-assistant agent whose defined responsibility is drafting purchase requests for review. For each currently configured tool, select Yes if it should remain after a least-privilege audit. Otherwise, select No if it should be removed.  \n  \nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "questionType": "statement_matrix",
    "statements": [
      {
        "id": "1",
        "text": "a read-only catalog lookup tool that returns vendor and SKU information",
        "correctAnswer": "Yes"
      },
      {
        "id": "2",
        "text": "an inbox-send tool that emails purchase requests to vendors directly",
        "correctAnswer": "No"
      },
      {
        "id": "3",
        "text": "a draft-write tool that creates purchase-request drafts in the review queue",
        "correctAnswer": "Yes"
      },
      {
        "id": "4",
        "text": "a production-database admin tool unrelated to procurement",
        "correctAnswer": "No"
      },
      {
        "id": "5",
        "text": "A read-only policy-document tool that returns the relevant procurement policies",
        "correctAnswer": "Yes"
      }
    ],
    "options": [
      {
        "key": "Yes",
        "text": "Yes"
      },
      {
        "key": "No",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "1:Yes",
      "2:No",
      "3:Yes",
      "4:No",
      "5:Yes"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R2cqjmlfiv5tpfiv5uadb\"]::highlight(question-marker-R2cqjmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R2cqjmlfiv5tpfiv5uadb\"]::highlight(question-marker-R2cqjmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R2cqjmlfiv5tpfiv5uadb\"]::highlight(question-marker-R2cqjmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Đặc quyền tối thiểu cho phép tra cứu chính sách và danh mục chỉ đọc cần thiết để chuẩn bị các bản nháp theo yêu cầu mua hàng tuân thủ, cùng với khả năng ghi bản nháp cần thiết để đưa các bản nháp vào hàng đợi xem xét. Việc gửi email trực tiếp của nhà cung cấp vượt quá trách nhiệm chỉ dành cho người xem xét và việc quản lý cơ sở dữ liệu sản xuất không liên quan là không cần thiết và có đặc quyền quá mức.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 65",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/65-governance-safety-risk-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-66",
    "questionNumber": 66,
    "text": "You are establishing escalation criteria for ambiguous cases in an automated workflow.  \n  \nWhich set of criteria best enables consistent escalation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "No escalation criteria; the model decides independently on every turn whether to escalate, without explicit confidence thresholds, impact categories, or classifier-based ambiguity flags."
      },
      {
        "key": "B",
        "text": "Escalation only after an affected customer has contacted support to complain, after the automated workflow has already completed without human review."
      },
      {
        "key": "C",
        "text": "Escalation at the discretion of whoever is available when the team’s on-call engineer has spare capacity, without a defined threshold, category, or ambiguity criterion."
      },
      {
        "key": "D",
        "text": "A confidence score below a defined threshold, presence of high-impact decision categories, ambiguity flags raised by content classifiers, and the user’s explicit request for review."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Mức tăng nhất quán phụ thuộc vào các yếu tố kích hoạt rõ ràng, có thể lặp lại: ngưỡng tin cậy được xác định, các danh mục quyết định có tác động cao được chỉ định, các tín hiệu không rõ ràng dựa trên bộ phân loại và yêu cầu xem xét của người dùng. Các tiêu chí này cho phép quy trình làm việc xác định các trường hợp cần có sự giám sát của con người trước khi đưa ra quyết định tự động có khả năng gây hậu quả.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 66",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/66-governance-safety-risk-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-67",
    "questionNumber": 67,
    "text": "A loan pre-qualification assistant produces approval recommendations that agree with the human underwriter’s decision 94 percent of the time. The fairness team has evaluated approval-rate parity across protected groups and found no significant difference. A board member asks whether this evidence is enough to declare the assistant fair.  \n  \nWhich two Discernment-competency findings should you report? Each correct answer provides part of the solution. (Select two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Approval rate parity does not by itself assess error rate parity across protected groups."
      },
      {
        "key": "B",
        "text": "Match with human underwriters does not establish freedom from underwriter-introduced bias."
      },
      {
        "key": "C",
        "text": "The 94 percent match rate is sufficient evidence of fairness for the assistant’s decisions."
      },
      {
        "key": "D",
        "text": "The fairness team’s review process likely missed at least some of the protected groups studied."
      },
      {
        "key": "E",
        "text": "A larger sample is needed before any meaningful fairness claim can be made about the model."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Chỉ tính tương đương của tỷ lệ phê duyệt không xác định liệu tỷ lệ lỗi, chẳng hạn như tỷ lệ dương tính giả hoặc âm tính giả, có thể so sánh được giữa các nhóm được bảo vệ hay không. Thỏa thuận với những người bảo lãnh là con người cũng không chứng minh được sự công bằng, bởi vì người trợ lý có thể tìm hiểu và duy trì sự thiên vị gắn liền với các quyết định của con người được sử dụng làm tài liệu tham khảo.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 67",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/67-governance-safety-risk-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-68",
    "questionNumber": 68,
    "text": "You are integrating Claude Code into the team’s pull-request workflow. The team wants AI-assisted reviews while retaining human approval.  \n  \nWhich integration design best meets this requirement?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Claude Code reviews the pull request and posts a structured analysis as a comment, while a human reviewer retains the approval decision under the existing branch-protection rules."
      },
      {
        "key": "B",
        "text": "Claude Code merges every pull request automatically after completing its analysis, bypassing human approval and the existing branch-protection rules."
      },
      {
        "key": "C",
        "text": "Claude Code disables all existing branch-protection rules to streamline the merge process, removing human approval as a required gate."
      },
      {
        "key": "D",
        "text": "Claude Code silently deletes pull requests it assesses as low quality without posting a comment or notifying the author."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Claude Code có thể chạy quy trình đánh giá theo yêu cầu kéo và cung cấp phản hồi đánh giá tự động. Duy trì yêu cầu bảo vệ chi nhánh hiện tại về việc phê duyệt đánh giá của con người sẽ duy trì quyền kiểm soát của con người đối với quyết định sáp nhập; Bảo vệ nhánh GitHub có thể yêu cầu phê duyệt đánh giá trước khi yêu cầu kéo được hợp nhất.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 68",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/68-integration",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-69",
    "questionNumber": 69,
    "text": "The compliance team at a firm has approved a Claude Skill that produces client-facing investment summaries. The Skill contains the firm’s required disclaimers and prohibited-language list. A product manager has asked whether extra guardrails are required in the application layer, or whether the Skill alone is adequate.  \n  \nWhich two guardrail responsibilities must remain at the application layer instead of the Skill? Each correct answer represents part of the solution. (Select two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Log every generated summary to the firm’s compliance audit trail for retention."
      },
      {
        "key": "B",
        "text": "Verify the requesting user is authorized to generate investment summaries at all."
      },
      {
        "key": "C",
        "text": "Format output sections according to the firm’s standardized house style guidelines."
      },
      {
        "key": "D",
        "text": "Apply the disclaimer template that the compliance team has standardized firm-wide."
      },
      {
        "key": "E",
        "text": "Apply the prohibited-language list that the compliance team maintains and updates."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Ủy quyền là một quyết định kiểm soát quyền truy cập ở cấp ứng dụng vì nó phụ thuộc vào danh tính và quyền của người dùng yêu cầu. Việc lưu giữ kiểm toán tuân thủ cũng là một trách nhiệm ở cấp độ ứng dụng vì ứng dụng phải ghi lại mọi bản tóm tắt được tạo một cách đáng tin cậy trong quá trình kiểm toán của công ty. Kỹ năng được phê duyệt có thể áp dụng tập trung tuyên bố từ chối trách nhiệm có thể sử dụng lại và kiểm soát nội dung bằng ngôn ngữ bị cấm. Hướng dẫn của Anthropic mô tả xác thực tập trung và ghi nhật ký kiểm tra dưới dạng cơ sở hạ tầng hoặc khả năng cổng xung quanh các tương tác mô hình.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 69",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/69-governance-safety-risk-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-70",
    "questionNumber": 70,
    "text": "You are addressing inefficiency in a Claude Code workflow in which every engineer must manually re-explain the project’s conventions and architecture during each session.  \n  \nWhich change most directly eliminates this inefficiency?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Forbid the use of Claude Code on the project entirely to avoid the session-initialization overhead, accepting that the team loses all AI-assisted development productivity for this codebase."
      },
      {
        "key": "B",
        "text": "Capture the project's conventions and architecture in a project-scoped CLAUDE.md (or equivalent persistent project-context file) committed to the repository, so each session loads it automatically."
      },
      {
        "key": "C",
        "text": "Tell each engineer to retype the project conventions and architecture context more quickly at the start of each session, reducing time lost without eliminating the repeated manual effort."
      },
      {
        "key": "D",
        "text": "Remove all documented project conventions and architectural standards so engineers have nothing to re-explain at session start, accepting the loss of consistency and shared coding standards."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; } CLAUDE.md trong phạm vi dự án, được cam kết với kho lưu trữ liên tục lưu trữ các quy ước và bối cảnh kiến ​​trúc được chia sẻ, cho phép các phiên Claude Code trong dự án đó tải thông tin tự động thay vì yêu cầu giải thích thủ công nhiều lần.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 70",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/70-developer-productivity-operational-enablement",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-71",
    "questionNumber": 71,
    "text": "You are deploying a standardized Claude Code configuration to an engineering team and need to complete the planning activities before piloting the configuration.  \n  \nWhich two steps must be completed **BEFORE** piloting the configuration with a small group of engineers? Each correct answer represents part of the solution. *(Select two.)*",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Define the project-scope baseline covering Model Context Protocol (MCP) servers, permission rules, and subagents."
      },
      {
        "key": "B",
        "text": "Onboard every engineer in the organization to the new configuration through mandatory training sessions."
      },
      {
        "key": "C",
        "text": "Roll out the stabilized configuration to additional teams with documentation and a defined support channel."
      },
      {
        "key": "D",
        "text": "Identify the team workflows, security boundaries, and which decisions belong to managed configuration versus project scope."
      },
      {
        "key": "E",
        "text": "Iterate the configuration based on the pilot findings and stabilize the baseline before broader rollout."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Một chương trình thí điểm có kiểm soát yêu cầu xác định các quy trình làm việc hiện hành của nhóm và ranh giới bảo mật, bao gồm cả các biện pháp kiểm soát phải được quản lý tập trung và biện pháp kiểm soát nào thuộc về một dự án. Quyết định đó tạo ra đường cơ sở trong phạm vi dự án cho các máy chủ MCP được chia sẻ, quy tắc cấp phép và tác nhân phụ. Claude Code phân biệt cài đặt được quản lý tập trung với cài đặt dự án được chia sẻ và các máy chủ MCP trong phạm vi dự án được dành cho cấu hình chia sẻ nhóm. Đào tạo trên toàn tổ chức, triển khai rộng hơn và sàng lọc sau thí điểm diễn ra sau thay vì đi trước thí điểm.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 71",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/71-stakeholder-communication-lifecycle-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-72",
    "questionNumber": 72,
    "text": "You are assembling a diagnostic toolkit for Claude Code operational problems.  \n  \nWhich two diagnostic actions should be included in the toolkit? Each correct answer provides a complete solution. (Select two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Increase the model sampling temperature so that intermittent issues surface more frequently for analysis."
      },
      {
        "key": "B",
        "text": "File a support ticket with vendor support before any local reproduction or evidence collection."
      },
      {
        "key": "C",
        "text": "Reproduce the issue with a minimal reproduction case that isolates one variable at a time."
      },
      {
        "key": "D",
        "text": "Roll back to the previous Claude Code version immediately to confirm whether the issue is version specific."
      },
      {
        "key": "E",
        "text": "List the configured Model Context Protocol (MCP) servers and inspect server status to identify connection failures."
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc sao chép tối thiểu nhằm tách biệt một biến tại một thời điểm sẽ xác định liệu một điều kiện đầu vào, cấu hình hoặc môi trường cụ thể có gây ra lỗi hay không và đưa ra bằng chứng có thể xử lý được. Máy chủ MCP là các máy chủ phụ thuộc hoạt động bên ngoài; Claude Code ghi lại trạng thái và quản lý máy chủ MCP, do đó, việc liệt kê các máy chủ được định cấu hình và kiểm tra trạng thái của chúng có thể phát hiện lỗi kết nối hoặc cấu hình. Việc tăng cường hỗ trợ sẽ hiệu quả hơn sau khi đã thu thập được bằng chứng chẩn đoán, trong khi việc thay đổi nhiệt độ mô hình hoặc khôi phục ngay phiên bản không tạo thành một phương pháp chẩn đoán hoàn chỉnh, có mục tiêu.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 72",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/72-developer-productivity-operational-enablement",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-73",
    "questionNumber": 73,
    "text": "You are incorporating Claude Code into a workflow that operates against a production database.  \n  \nWhich guardrail design most directly maintains safety for data-modifying operations?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Allow Claude Code to write directly to the production database without subagent scoping, read-only credential defaults, or human confirmation gates on data-modifying operations."
      },
      {
        "key": "B",
        "text": "Configure the database MCP server with a fully privileged credential that can perform any read or write operation, and allow all operations to proceed without explicit human confirmation."
      },
      {
        "key": "C",
        "text": "Disable all logging and auditing on database operations through the MCP server to reduce alert noise, removing the observability needed to detect unintended data modifications."
      },
      {
        "key": "D",
        "text": "Configure the database MCP server with a read-only credential by default, restrict the subagent’s tool list to read-only operations, and require explicit human confirmation on any operation that would modify data."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Theo mặc định, thông tin xác thực cơ sở dữ liệu chỉ đọc và danh sách công cụ được giới hạn ở các hoạt động chỉ đọc sẽ ngăn chặn việc ghi ngoài ý muốn, trong khi xác nhận rõ ràng của con người sẽ cung cấp một cổng phê duyệt trước bất kỳ hành động thay đổi dữ liệu nào. Điều này áp dụng biện pháp bảo vệ theo chiều sâu và ít đặc quyền nhất đối với quyền truy cập sản xuất. Claude Code hỗ trợ hạn chế các công cụ có sẵn và lời nhắc cấp phép cho các hành động yêu cầu phê duyệt.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 73",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/73-governance-safety-risk-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-74",
    "questionNumber": 74,
    "text": "You need to present an architectural recommendation for deploying a Claude-based contract review assistant to a steering committee that includes the CFO, general counsel, and CIO. Each stakeholder focuses on different aspects of the decision.  \n  \nHow should you organize the recommendation document?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Lead with the technical architecture diagram and the full component list before any other section."
      },
      {
        "key": "B",
        "text": "Lead with detailed cost projections across the full multi-year horizon before the rationale section."
      },
      {
        "key": "C",
        "text": "Present the same dense narrative throughout with no stakeholder differentiation in any section."
      },
      {
        "key": "D",
        "text": "Lead with the architectural decision, then address each stakeholder’s primary concerns directly."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Khuyến nghị điều hành hiệu quả bắt đầu bằng quyết định kiến ​​trúc, sau đó trực tiếp giải quyết các mối lo ngại về tài chính của CFO, các mối lo ngại về pháp lý và rủi ro của cố vấn chung cũng như các mối lo ngại về kỹ thuật, bảo mật và hoạt động của CIO. Điều này làm cho cơ sở lý luận trở nên phù hợp và có thể áp dụng được đối với mỗi người ra quyết định mà không đưa ra khuyến nghị chi tiết về kỹ thuật hoặc chi phí quá sớm.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 74",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/74-stakeholder-communication-lifecycle-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-75",
    "questionNumber": 75,
    "text": "You are moving a Claude-based deployment from the design phase into implementation.  \n  \nWhich handoff package most directly enables a smooth transition?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "The most recent set of design presentation slides without component-level diagrams, interface contracts, an evaluation framework with a reference set, runbooks, or a known-limitations register."
      },
      {
        "key": "B",
        "text": "A verbal walkthrough conducted on the day of handoff with no written architecture overview, ADRs, component contracts, evaluation framework, runbooks, playbook, or known limitations."
      },
      {
        "key": "C",
        "text": "Architecture overview, ADRs, component contracts, evaluation framework with reference set, runbooks, on-call playbook, and known limitations."
      },
      {
        "key": "D",
        "text": "Source code alone with no integrating architecture overview, ADRs, component contracts, evaluation framework, runbooks, on-call playbook, or known-limitations register to support the delivery team."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc chuyển giao triển khai hoàn chỉnh cần có tổng quan về kiến ​​trúc và ADR để truyền tải cơ sở lý luận và thiết kế hệ thống; hợp đồng thành phần để xác định ranh giới hội nhập; một khung đánh giá với một bộ tham chiếu để xác nhận hành vi; sổ điều hành và sổ tay theo yêu cầu để hỗ trợ hoạt động; và một bản ghi các giới hạn đã biết để làm rõ các rủi ro và ràng buộc.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 75",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/75-stakeholder-communication-lifecycle-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-76",
    "questionNumber": 76,
    "text": "You are identifying indicators that a deployment should return to design instead of continuing to iterate in place.  \n  \nWhich indicator most directly shows that a new design cycle is needed?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "A runbook step requires a clarification edit to improve on-call guidance accuracy, which can be handled as a documentation update without changes to component responsibilities or core contracts."
      },
      {
        "key": "B",
        "text": "A dashboard alert threshold needs a small numerical adjustment to reduce false-positive noise, which can be handled as an operational configuration change without a new design cycle."
      },
      {
        "key": "C",
        "text": "A minor copy edit is requested in a customer-facing string within the existing UI, which can be handled as a localized content change without altering component responsibilities or contracts."
      },
      {
        "key": "D",
        "text": "The system’s current architecture cannot meet the new requirements without changes to component responsibilities or core contracts."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Cần có chu trình thiết kế mới khi không thể đáp ứng các yêu cầu mới trong kiến ​​trúc hiện tại nếu không thay đổi trách nhiệm của thành phần hoặc hợp đồng cốt lõi. Những thay đổi đó làm thay đổi ranh giới thiết kế cơ bản thay vì thực hiện cập nhật nội dung, tài liệu, cấu hình hoặc hoạt động cục bộ.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 76",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/76-evaluation-testing-optimization",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-77",
    "questionNumber": 77,
    "text": "A Claude architect notices that, after a recent model-version upgrade, grounded responses started to include claims that are not supported by the retrieved source documents.  \n  \nWhich mitigation most directly addresses this failure mode?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Constrain responses to source-supported content, require citations, and add a verification step."
      },
      {
        "key": "B",
        "text": "Score each new model version against a stable adversarial evaluation set."
      },
      {
        "key": "C",
        "text": "Replace the shared API key with per-user OAuth tokens to restrict data access."
      },
      {
        "key": "D",
        "text": "Treat retrieved data as untrusted and apply input classifiers at ingestion time."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Ràng buộc Source-grounding, trích dẫn bắt buộc và bước xác minh trực tiếp giảm các xác nhận quyền sở hữu không được hỗ trợ bằng cách yêu cầu nội dung phản hồi phải được theo dõi và kiểm tra đối với các tài liệu được truy xuất.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 77",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/77-evaluation-testing-optimization",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-78",
    "questionNumber": 78,
    "text": "You are reviewing a colleague’s Claude Code permission rules for an enterprise rollout. The rules provide unrestricted Bash access across all projects for every developer.  \n  \nWhich response is most appropriate?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Add unrestricted access to additional tool categories as well, so that Bash is not asymmetrically more permissive than other tools, expanding the attack surface further in the name of consistency."
      },
      {
        "key": "B",
        "text": "Approve the unrestricted Bash access as written on the grounds that narrowing the rules would add configuration complexity, accepting the full attack surface for all engineers across all projects."
      },
      {
        "key": "C",
        "text": "Replace unrestricted Bash with narrowly scoped tool patterns that allow only the specific commands the workflows require, and add explicit deny rules for sensitive operations."
      },
      {
        "key": "D",
        "text": "Disable all permission rules for the enterprise rollout so every command across every project runs without any tool-pattern scoping or explicit deny rules for sensitive operations."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Các quyền Claude Code dành cho doanh nghiệp phải tuân theo đặc quyền tối thiểu: chỉ cho phép các mẫu lệnh Bash được yêu cầu bởi quy trình làm việc đã được phê duyệt và từ chối rõ ràng các hoạt động nhạy cảm. Claude Code hỗ trợ các mẫu cho phép `Bash(.)` trong phạm vi và cơ chế `--disallowedTools`, tránh rủi ro bảo mật khi thực thi shell tùy ý trên tất cả các dự án.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 78",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/78-governance-safety-risk-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-79",
    "questionNumber": 79,
    "text": "A solutions architect is reviewing stakeholder feedback gathered after the first quarter of a Claude-powered procurement automation deployment.  \n  \nThe feedback contains four statements:  \n  \n(1) “Our procurement team is processing 3x more purchase orders per analyst per day.”  \n  \n(2) “We have eliminated the manual data entry role entirely and redeployed those staff to vendor relationship management.”  \n  \n(3) “The API integration costs are running 40% over the projected per-transaction budget.”  \n  \n(4) “Response latency during end-of-month batch runs is averaging 11 seconds, against our committed 5-second SLA.”  \n  \nWhich option correctly identifies the primary business-value pillar represented by each stakeholder statement?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Statement 1: Efficiency; Statement 2: Transformation; Statement 3: Solution Cost; Statement 4: Performance SLA"
      },
      {
        "key": "B",
        "text": "Statement 1: Productivity; Statement 2: Efficiency; Statement 3: Solution Cost; Statement 4: Performance SLA"
      },
      {
        "key": "C",
        "text": "Statement 1: Transformation; Statement 2: Productivity; Statement 3: Solution Cost; Statement 4: Efficiency"
      },
      {
        "key": "D",
        "text": "Statement 1: Efficiency; Statement 2: Productivity; Statement 3: Performance SLA; Statement 4: Solution Cost"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc xử lý số lượng đơn đặt hàng nhiều gấp ba lần cho mỗi nhà phân tích sẽ tăng thông lượng và giảm nỗ lực cho mỗi giao dịch trong quy trình làm việc hiện tại, đó là Hiệu quả. Việc loại bỏ công việc nhập dữ liệu thủ công và chuyển nhân viên sang quản lý mối quan hệ với nhà cung cấp sẽ thiết kế lại các trách nhiệm xung quanh công việc có giá trị cao hơn, đó là Chuyển đổi. Chi phí API vượt quá 40% là mối lo ngại về Chi phí giải pháp, trong khi độ trễ 11 giây so với mục tiêu 5 giây đã cam kết là vấn đề SLA hiệu suất. Anthropic mô tả quá trình tự động hóa giúp giải phóng các chuyên gia cho công việc mang tính chiến lược giống như việc chuyển đổi quy trình làm việc.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 79",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/79-stakeholder-communication-lifecycle-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-80",
    "questionNumber": 80,
    "text": "You are creating an architecture guide for a new deployment and must finish the planning activities before drafting each guide section.  \n  \nWhich two activities must be completed **BEFORE** drafting every section of the guide? Each correct answer represents part of the solution. *(Select two.)*",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Identify the audience and the questions the guide must answer for that audience."
      },
      {
        "key": "B",
        "text": "Translate the guide into the supported regional languages for the candidate population."
      },
      {
        "key": "C",
        "text": "Validate the guide with the implementation team and incorporate corrections."
      },
      {
        "key": "D",
        "text": "Establish the document under version control with a defined review cadence and approver list."
      },
      {
        "key": "E",
        "text": "Outline the guide sections covering the overview, components, contracts, flows, runbooks, and limitations."
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Hướng dẫn kiến ​​trúc phải được lập kế hoạch phù hợp với đối tượng mục tiêu và thông tin mà đối tượng cần. Nó cũng phải có một dàn ý sắp xếp nội dung được yêu cầu—chẳng hạn như phần tổng quan, các thành phần, hợp đồng, quy trình, sổ sách và các giới hạn—trước khi các phần riêng lẻ được soạn thảo.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 80",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/80-solution-design-architecture",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-81",
    "questionNumber": 81,
    "text": "You are supporting an EU-based deployment subject to GDPR obligations.  \n  \nWhich combination of measures best supports the deployment’s GDPR posture?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "enterprise-tier deployment with a signed Data Processing Addendum, defined data-retention configuration, redaction of personal data not needed for the task, and documented data-subject-rights handling"
      },
      {
        "key": "B",
        "text": "disabling all data-retention configuration, redaction controls, and data-subject-rights handling to simplify day-to-day operations, accepting the resulting GDPR compliance exposure"
      },
      {
        "key": "C",
        "text": "using a personal Claude account tier for processing EU personal data at scale, with no signed Data Processing Addendum and no documented data-subject-rights handling procedure"
      },
      {
        "key": "D",
        "text": "pasting full EU personal data into every prompt to “give Claude complete context” without considering purpose limitation, data minimization, or the organization’s Data Processing Addendum obligations"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }GDPR yêu cầu dữ liệu cá nhân phải được giới hạn ở mức cần thiết, no được lưu giữ lâu hơn mức cần thiết và được nhà cung cấp dịch vụ xử lý theo thỏa thuận xử lý ràng buộc thích hợp. Việc biên tập lại dữ liệu cá nhân không cần thiết, xác định việc lưu giữ, duy trì Phụ lục xử lý dữ liệu và ghi lại các thủ tục về quyền của chủ thể dữ liệu hỗ trợ các nghĩa vụ này. Claude Enterprise cũng cung cấp các điều khiển lưu giữ dữ liệu có thể định cấu hình.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 81",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/81-governance-safety-risk-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-82",
    "questionNumber": 82,
    "text": "You support a team whose Claude Code sessions routinely load 60 or more MCP tools from numerous servers, exhausting the context budget before a session starts.  \n  \nWhich change most directly resolves this problem without removing capability?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Enable Tool Search so tool definitions are deferred and discovered on demand rather than loaded into context upfront."
      },
      {
        "key": "B",
        "text": "Disable every MCP server in the configuration to free up context budget, accepting that the team loses all tool access and cannot perform any MCP-dependent task in the session."
      },
      {
        "key": "C",
        "text": "Increase the prompt’s verbosity with additional instructions and context, which consumes more of the context budget rather than reducing the tool-definition overhead causing the issue."
      },
      {
        "key": "D",
        "text": "Add additional MCP servers to give the team more capability, which increases rather than reduces the number of tool definitions loaded into the session’s context budget."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Tìm kiếm công cụ hỗ trợ tải trì hoãn, ngăn chặn các mô tả công cụ MCP bị trì hoãn nhập vào ngữ cảnh ban đầu của mô hình. Các công cụ này vẫn có sẵn và các định nghĩa của chúng tải theo yêu cầu khi được phát hiện thông qua tìm kiếm, giảm chi phí ngữ cảnh ban đầu mà không loại bỏ khả năng MCP.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 82",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/82-claude-models-prompting-context-engineering",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-83",
    "questionNumber": 83,
    "text": "During an architecture review, the security team identifies a risk that adversarial content inserted into retrieved documents could influence the model’s behavior.  \n  \nWhich mitigation most directly addresses this threat?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Treat all retrieved content as untrusted input and apply input classifiers with output validation."
      },
      {
        "key": "B",
        "text": "Require citations for each claim and constrain responses to source-supported content."
      },
      {
        "key": "C",
        "text": "Restrict outbound tool calls to an approved destination allow-list."
      },
      {
        "key": "D",
        "text": "Score outputs against a stable adversarial evaluation set on each model-version change."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Tài liệu được truy xuất có thể chứa hướng dẫn chèn nhắc gián tiếp. Xử lý tất cả nội dung được truy xuất là không đáng tin cậy, áp dụng bộ phân loại hoặc phát hiện tiêm trước khi nội dung đó đến mô hình và xác thực kết quả đầu ra sẽ thiết lập các biện pháp kiểm soát tại ranh giới tin cậy có liên quan.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 83",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/83-governance-safety-risk-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-84",
    "questionNumber": 84,
    "text": "You are selecting the appropriate level of detail for an implementation guide. The audience is a delivery team that will build the deployment.  \n  \nWhich guidance composition best supports them?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Component responsibilities, contracts between components, sequence diagrams of the dominant flows, configuration parameters with defaults, and operational runbooks."
      },
      {
        "key": "B",
        "text": "Component responsibilities and interface contracts only, without sequence diagrams of the dominant flows, configuration parameters with defaults, or runbooks to guide operational tasks."
      },
      {
        "key": "C",
        "text": "An architecture overview and sequence diagrams for the dominant flows, without interface contracts, configuration-parameter tables, or operational runbooks for the delivery team to follow."
      },
      {
        "key": "D",
        "text": "An architecture overview and a list of known limitations, without component-level diagrams, interface contracts, configuration parameters, or operational runbooks to support implementation."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Nhóm phân phối cần hướng dẫn ở cấp độ triển khai bao gồm các trách nhiệm của thành phần, hợp đồng giữa các thành phần, trình tự luồng chi phối, thông số cấu hình và mặc định cũng như quy trình vận hành. Cùng với nhau, các tạo phẩm này hỗ trợ xây dựng, tích hợp, định cấu hình và vận hành quá trình triển khai.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 84",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/84-stakeholder-communication-lifecycle-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-85",
    "questionNumber": 85,
    "text": "You are incorporating Claude Code into a team workflow and must complete the design and configuration steps before piloting the integrated workflow with a small group.  \n  \nWhich two steps must be completed BEFORE piloting the integrated workflow? Each correct answer represents part of the solution. (Select two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Document the integrated workflow with handoff criteria, permission boundaries, and on-call runbooks."
      },
      {
        "key": "B",
        "text": "Identify the workflow steps where AI-assisted tooling adds value and where human authority must remain."
      },
      {
        "key": "C",
        "text": "Negotiate the workflow change with affected teams and obtain formal sign-off from each manager."
      },
      {
        "key": "D",
        "text": "Iterate the integrated workflow based on pilot findings before broader rollout to the team."
      },
      {
        "key": "E",
        "text": "Configure the project-scope MCP servers, permissions, subagents, and persistent project context."
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Phi công Claude Code cần có sự phân chia rõ ràng giữa các hoạt động trong quy trình công việc, trong đó sự hỗ trợ của AI sẽ tăng thêm giá trị và các hoạt động vẫn thuộc thẩm quyền của con người. Nó cũng cần có sẵn cấu hình hoạt động của dự án: tích hợp MCP, kiểm soát quyền, các tác nhân phụ chuyên biệt và hướng dẫn/ngữ cảnh liên tục của dự án. Claude Code ghi lại thiết lập, quyền, tác nhân phụ và bộ nhớ dự án của MCP trong phạm vi dự án dưới dạng các cơ chế cấu hình riêng biệt nhằm thiết lập các khả năng và ranh giới đó.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 85",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/85-integration",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-86",
    "questionNumber": 86,
    "text": "You are documenting an architectural decision to enable future audit and onboarding.  \n  \nWhich artifact is the best fit?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "A slide deck in a presentation folder with no accompanying written rationale."
      },
      {
        "key": "B",
        "text": "A code comment in a single file that contains an opinion of one engineer."
      },
      {
        "key": "C",
        "text": "An Architecture Decision Record that states the context, the decision, the alternatives considered, the consequences, and the date and authors."
      },
      {
        "key": "D",
        "text": "A short verbal note shared during a hallway conversation with no written record."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Bản ghi Quyết định Kiến trúc lưu giữ bối cảnh và cơ sở lý luận cho một lựa chọn kiến ​​trúc, bao gồm các lựa chọn thay thế, kết quả quyết định và hậu quả. Bản ghi có thể quy kết bằng văn bản của nó hỗ trợ các cuộc kiểm tra sau này và giúp các thành viên mới trong nhóm hiểu lý do tại sao kiến ​​trúc lại có hình thức hiện tại.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 86",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/86-solution-design-architecture",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-87",
    "questionNumber": 87,
    "text": "You are a platform architect building an internal Claude-based assistant for both finance analysts and external auditors. Each group must be able to access only the documents authorized for its role.  \n  \nAt which point in the pipeline should role-based access control be enforced?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Inside the system prompt as a natural-language instruction for Claude to ignore unauthorized documents."
      },
      {
        "key": "B",
        "text": "At the retrieval layer, before any role-restricted content reaches the prompt-construction step or the model."
      },
      {
        "key": "C",
        "text": "Nowhere in the pipeline; rely on the model’s general refusal behavior to reject unauthorized document access without any enforced access control."
      },
      {
        "key": "D",
        "text": "After the response is generated, by post-filtering content that should not have been retrieved."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Role-based access control thuộc về thời điểm truy xuất, trước khi tài liệu được truy xuất được thêm vào lời nhắc hoặc hiển thị với mô hình. Việc thực thi ủy quyền ở đó ngăn chặn nội dung trái phép xâm nhập vào bối cảnh mô hình; hướng dẫn chỉ nhắc nhở, hành vi từ chối chung và lọc sau phản hồi không cung cấp ranh giới bảo mật đó. Amazon Bedrock ghi lại truy xuất nhận biết ACL dưới dạng lọc trước truy xuất chỉ trả về những tài liệu mà người dùng được cung cấp được phép truy cập.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 87",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/87-governance-safety-risk-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-88",
    "questionNumber": 88,
    "text": "A Claude architect is implementing safety controls for a customer-facing advice assistant that must never give regulated investment recommendations.  \n  \nWhich two guardrail implementations most directly enforce this requirement? (Select two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Increase response temperature to introduce variability that reduces the likelihood of specific recommendations."
      },
      {
        "key": "B",
        "text": "Add an output classifier that detects and blocks responses containing regulated investment-recommendation language."
      },
      {
        "key": "C",
        "text": "Limit session length to reduce the volume of queries processed per user per day."
      },
      {
        "key": "D",
        "text": "Log all user queries to a SIEM for post-hoc compliance review."
      },
      {
        "key": "E",
        "text": "Define explicit out-of-scope categories in the system prompt with fixed refusal phrasing for investment advice requests."
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Trình phân loại đầu ra có thể chặn ngôn ngữ đề xuất đầu tư bị cấm trước khi nó được gửi, trong khi các ranh giới rõ ràng do hệ thống nhắc nhở và từ ngữ từ chối được quy định sẽ hướng dẫn trợ lý từ chối các yêu cầu tư vấn đầu tư ngoài phạm vi. Hướng dẫn của Anthropic đề xuất các lời nhắc hệ thống được củng cố nhằm nêu rõ các ranh giới pháp lý và đạo đức cũng như cách từ chối, đồng thời mô tả các bộ lọc như một cách để thực thi các rào cản đầu ra.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 88",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/88-governance-safety-risk-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-89",
    "questionNumber": 89,
    "text": "A business sponsor has asked for an AI solution to “improve customer experience.” The sponsor cannot specify which customer journey is failing, which metric demonstrates that failure, or which decisions the AI should support. The sponsor is asking you to start design work next week.  \n  \nWhich delegation-competency action should you take first?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Recommend that the sponsor revise the request and resubmit it later for evaluation."
      },
      {
        "key": "B",
        "text": "Begin prototyping a generic assistant against the broad request before the next deadline."
      },
      {
        "key": "C",
        "text": "Propose a fixed scope that you commit to by default based on your own assumptions."
      },
      {
        "key": "D",
        "text": "Facilitate a structured discovery to define the failing decision and the target metric."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Phiên khám phá có cấu trúc sẽ thiết lập quyết định không thành công cụ thể, hành trình của khách hàng bị ảnh hưởng và kết quả mục tiêu có thể đo lường được trước khi bắt đầu thiết kế giải pháp. Những định nghĩa này cung cấp phạm vi vấn đề và tiêu chí thành công cần thiết để xác định liệu AI có phù hợp hay không và nó sẽ hỗ trợ những gì.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 89",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/89-stakeholder-communication-lifecycle-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-90",
    "questionNumber": 90,
    "text": "You are evaluating data-exfiltration risk in a Claude-based assistant that has tools for internal-document retrieval and outbound HTTP calls.  \n  \nWhich scenario most directly signals a data-exfiltration risk?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "The outbound HTTP tool returns a 200 response when the assistant calls an allow-listed domain to fulfil a user-initiated data-lookup request."
      },
      {
        "key": "B",
        "text": "The user submits a routine question and receives a routine answer."
      },
      {
        "key": "C",
        "text": "Adversarial content in a retrieved document instructs the model to call the outbound HTTP tool and send sensitive content to an attacker-controlled URL."
      },
      {
        "key": "D",
        "text": "The internal-document retrieval tool returns a document that the user is authorized to view."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Các hướng dẫn bất lợi được nhúng trong nội dung được truy xuất có thể chuyển hướng trợ lý gọi một công cụ gửi đi và truyền dữ liệu nhạy cảm đến điểm cuối do kẻ tấn công kiểm soát. Đây là đường dẫn tiêm nhắc gián tiếp cho phép trích xuất dữ liệu trái phép.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 90",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/90-governance-safety-risk-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-91",
    "questionNumber": 91,
    "text": "A Claude architect must ensure that, once it is set, a security-hardening flag cannot be disabled by any individual engineer.  \n  \nWhich configuration scope correctly enforces this requirement?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "User scope (~/.claude/settings.json) on each engineer’s machine"
      },
      {
        "key": "B",
        "text": "Environment variable defined in the CI/CD pipeline only"
      },
      {
        "key": "C",
        "text": "Managed configuration applied centrally and marked as non-overridable"
      },
      {
        "key": "D",
        "text": "Project scope (.claude/settings.json) committed to the repository"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Claude Code áp dụng các cài đặt được quản lý tập trung trên cấu hình người dùng, dự án, cục bộ và dòng lệnh, ngăn kỹ sư ghi đè chính sách bảo mật đã thực thi. Do đó, chính sách được quản lý là phạm vi thích hợp cho cờ tăng cường không thể ghi đè trên toàn tổ chức.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 91",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/91-governance-safety-risk-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-92",
    "questionNumber": 92,
    "text": "You are setting up a HIPAA-eligible deployment for a healthcare customer.  \n  \nWhich configuration enables HIPAA compliance when using Anthropic-provided tools?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Claude Free with no contractual addendum, since consumer products meet HIPAA requirements out of the box."
      },
      {
        "key": "B",
        "text": "Claude Enterprise with a signed Business Associate Agreement, Zero Data Retention enabled, and audit logging configured for compliance tracking."
      },
      {
        "key": "C",
        "text": "Disabling all audit logging so that no PHI is recorded in any log store, on the assumption that the absence of logs satisfies HIPAA requirements without a signed BAA."
      },
      {
        "key": "D",
        "text": "An ad-hoc personal Claude account used by individual clinicians for PHI-related tasks, with no Business Associate Agreement, no Zero Data Retention, and no audit logging configured."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc triển khai Anthropic đủ điều kiện HIPAA phải tuân theo Thỏa thuận liên kết kinh doanh phù hợp cho dịch vụ được phê duyệt. Ghi nhật ký kiểm tra và lưu giữ dữ liệu bằng không hỗ trợ các biện pháp kiểm soát trách nhiệm và xử lý cần thiết, trong khi tài khoản cá nhân và người tiêu dùng không có BAA không cung cấp phạm vi bảo hiểm HIPAA theo hợp đồng. Việc triển khai cũng phải tuân theo các giới hạn tính năng và cấu hình dành riêng cho HIPAA của Anthropic.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 92",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/92-governance-safety-risk-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-93",
    "questionNumber": 93,
    "text": "A Claude architect is leading the discovery phase of a new AI-powered customer-service solution.  \n  \nWhich two activities are typical of structured discovery and requirements gathering for a Claude-based deployment? (Select two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Facilitating stakeholder workshops to surface latency, accuracy, and compliance constraints before scoping begins."
      },
      {
        "key": "B",
        "text": "Selecting the Claude model tier based on the architect’s prior project experience before stakeholder input is collected."
      },
      {
        "key": "C",
        "text": "Generating an initial prototype and iterating based on user reaction rather than written requirements."
      },
      {
        "key": "D",
        "text": "Documenting explicit success criteria and failure thresholds that will gate production deployment."
      },
      {
        "key": "E",
        "text": "Deferring constraint documentation until the integration design phase to avoid scope creep."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Khám phá có cấu trúc đưa ra các hạn chế về hoạt động, hiệu suất và tuân thủ từ các bên liên quan trước khi xác định phạm vi để giải pháp có thể được thiết kế theo yêu cầu thực tế. Mức độ sẵn sàng sản xuất cũng phụ thuộc vào các tiêu chí thành công rõ ràng, có thể đo lường được và ngưỡng thất bại có thể đóng vai trò là cổng triển khai. Hướng dẫn của Anthropic khuyến nghị xác định các tiêu chí thành công có thể đo lường được và đánh giá việc triển khai hỗ trợ khách hàng dựa trên các tiêu chuẩn đã thiết lập.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 93",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/93-solution-design-architecture",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-94",
    "questionNumber": 94,
    "text": "When presenting an architectural decision to a security and compliance reviewer, which set of content best aligns with that audience’s primary concerns?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Feature delivery schedule, roadmap dependencies, and scope boundaries for the product manager."
      },
      {
        "key": "B",
        "text": "Implementation timeline, component interfaces, and deployment sequence for the engineering team."
      },
      {
        "key": "C",
        "text": "Threat model, control mappings, residual-risk acceptance criteria, and audit traceability."
      },
      {
        "key": "D",
        "text": "Decision rationale, business outcomes, and high-level risk summary for executive review."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Đánh giá về tính bảo mật và tuân thủ tập trung vào các mối đe dọa đã xác định, ánh xạ từ yêu cầu đến biện pháp kiểm soát, tiêu chí chấp nhận rủi ro còn sót lại và bằng chứng có thể theo dõi để kiểm tra. Những tạo phẩm này chứng minh rằng kiến ​​trúc giải quyết các nghĩa vụ bảo mật và có thể được đánh giá về mức độ tuân thủ.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 94",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/94-governance-safety-risk-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-95",
    "questionNumber": 95,
    "text": "You are addressing a stakeholder request that adds significant scope to a deployment already underway.  \n  \nWhich response best aligns expectations while respecting the stakeholder’s underlying need?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Hide the scope-addition request from the broader delivery team to avoid a difficult conversation, allowing the change to proceed without team awareness of its timeline implications."
      },
      {
        "key": "B",
        "text": "Decline the request outright without acknowledging the stakeholder’s underlying need or offering alternatives such as deferral, descoping, or timeline extension."
      },
      {
        "key": "C",
        "text": "Acknowledge the request, describe the scope and timeline implications transparently, and propose options—defer it, descope something else, or extend the timeline—for the stakeholder to choose."
      },
      {
        "key": "D",
        "text": "Accept the additional scope into the current release without describing the timeline or descoping implications, allowing the delivery plan to absorb unacknowledged changes until they surface as delays."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc quản lý phạm vi hiệu quả làm cho hiệu quả phân phối và tiến trình của công việc được thêm vào trở nên rõ ràng, đồng thời duy trì mục tiêu cơ bản của bên liên quan thông qua các lựa chọn thay thế rõ ràng như trì hoãn yêu cầu, loại bỏ phạm vi khác hoặc kéo dài lịch trình.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 95",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/95-stakeholder-communication-lifecycle-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-96",
    "questionNumber": 96,
    "text": "You are preparing an operational runbook for a service based on Claude.  \n  \nWhich content is essential to include in the runbook?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Dashboard and log references only, without alert definitions, triage steps, escalation paths, or rollback procedures for the on-call engineer to act on."
      },
      {
        "key": "B",
        "text": "Common alerts and their triage steps, escalation paths, rollback procedures, and references to the relevant dashboards and logs."
      },
      {
        "key": "C",
        "text": "Alert definitions and triage steps only, without escalation paths, rollback procedures, or references to dashboards and logs for on-call use."
      },
      {
        "key": "D",
        "text": "Escalation paths and rollback procedures only, without alert definitions, triage steps, or dashboard references to guide initial incident response."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Một sổ tay chạy hiệu quả cung cấp cho các kỹ sư đang làm việc các quy trình có thể thực hiện được đối với các cảnh báo phổ biến, bao gồm hướng dẫn phân loại và điều tra, đường dẫn báo cáo, quy trình khôi phục hoặc khôi phục cũng như các liên kết đến trang tổng quan và nhật ký cần thiết để chẩn đoán dịch vụ. Hướng dẫn vận hành của AWS cũng yêu cầu một quy trình cho mỗi cảnh báo và các đường dẫn leo thang được xác định trong sổ tay và sổ tay giải quyết.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 96",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/96-developer-productivity-operational-enablement",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-97",
    "questionNumber": 97,
    "text": "You are assisting an engineer whose Claude Code session shows a permission denial when the engineer expected the action to be permitted.  \n  \nWhich resolution step is most appropriate?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Tell the engineer to retry the denied action verbatim repeatedly until the denial stops appearing, without inspecting the active permission rules to determine whether the denial is intentional."
      },
      {
        "key": "B",
        "text": "Disable the permission system entirely across all scopes to remove the denial, eliminating all tool-pattern and deny-rule controls rather than identifying and amending the specific rule."
      },
      {
        "key": "C",
        "text": "Inspect the active permission rules across all scopes—managed, command-line, local, project, and user—to identify which rule is denying the action and confirm whether it should be amended or remain denied."
      },
      {
        "key": "D",
        "text": "Grant the engineer unrestricted Bash access to bypass the specific rule causing the denial, removing all tool-pattern constraints rather than amending only the rule in question."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Claude Code hiển thị các quy tắc cấp phép và tệp `settings.json` mà mỗi quy tắc bắt nguồn. Các quy tắc từ chối của nó được đánh giá trước các quy tắc hỏi và cho phép, trong khi các cài đặt có thể được cung cấp ở phạm vi được quản lý, dòng lệnh, dự án cục bộ, dự án dùng chung và người dùng. Việc kiểm tra các quy tắc đang hoạt động và nguồn của chúng sẽ xác định liệu việc từ chối cụ thể là cố ý hay liệu quy tắc có phạm vi hẹp có cần được sửa đổi mà không loại bỏ các biện pháp bảo vệ không liên quan hay không.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 97",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/97-developer-productivity-operational-enablement",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-98",
    "questionNumber": 98,
    "text": "A technical team is deciding whether to implement a new capability that generates regulatory filings from internal data as a Claude Skill or an MCP server. The capability requires a fixed authoring procedure with embedded examples, does not need to invoke live external systems, and must be portable across three Claude deployments: claude.ai, an internal API integration, and Claude Code.  \n  \nWhich factor most strongly supports implementing the capability as a Skill?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "The capability needs to query a live database for the most recent regulatory filings."
      },
      {
        "key": "B",
        "text": "The capability must also be callable from a developer’s command-line interface."
      },
      {
        "key": "C",
        "text": "The capability requires direct authentication against the corporate identity provider."
      },
      {
        "key": "D",
        "text": "The capability is procedural knowledge with no live external-system calls required."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Kỹ năng Claude là các gói kiến ​​thức quy trình có thể tái sử dụng, bao gồm quy trình công việc, hướng dẫn, tài nguyên và ví dụ, đồng thời các Kỹ năng tùy chỉnh được hỗ trợ trong claude.ai, API Claude và Claude Code. Máy chủ MCP được thiết kế để hiển thị các hệ thống bên ngoài như nguồn dữ liệu và công cụ. Do đó, một quy trình soạn thảo cố định có các lệnh gọi hệ thống bên ngoài trực tiếp no được thể hiện tốt nhất dưới dạng Kỹ năng.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 98",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/98-solution-design-architecture",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-99",
    "questionNumber": 99,
    "text": "A customer-support team proposes assigning customer refund decisions to a Claude-driven workflow without human review for refunds below 50 USD. The team argues that small refunds are low risk and that human review would eliminate the efficiency benefit.  \n  \nWhich Delegation-competency principle should guide your response?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Delegation should always include human review on every decision the workflow produces."
      },
      {
        "key": "B",
        "text": "Delegation scope should reflect the type of risk involved, not the transaction size alone."
      },
      {
        "key": "C",
        "text": "Delegation scope should be set primarily by maximizing efficiency gains across the workflow."
      },
      {
        "key": "D",
        "text": "Delegation should be avoided entirely wherever financial transactions occur in the workflow."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc ủy ​​quyền phải được điều chỉnh theo tính chất rủi ro trong công việc được giao. Các quyết định hoàn trả tài chính có thể gây ra rủi ro về gian lận, tuân thủ chính sách, tính công bằng và tác động đến khách hàng mà không chỉ được xác định bởi số tiền hoàn trả; hiệu quả không tự nó biện minh cho sự phê duyệt hoàn toàn tự chủ. Hướng dẫn Ủy quyền của Anthropic coi việc phân bổ nhiệm vụ là sự phân bổ công việc chu đáo dựa trên nhiệm vụ cũng như khả năng và giới hạn của hệ thống AI.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 99",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/99-governance-safety-risk-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-100",
    "questionNumber": 100,
    "text": "You are assembling guardrail tactics for a customer-facing assistant.  \n  \nWhich two tactics should be included on the guardrail list?  \n  \nEach correct answer provides a complete solution.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Embed approved override phrases that let trusted users relax guardrails on demand."
      },
      {
        "key": "B",
        "text": "Lower sampling temperature globally to reduce the chance of off-policy completions."
      },
      {
        "key": "C",
        "text": "Validate the model output against a structured schema before downstream actions are taken."
      },
      {
        "key": "D",
        "text": "Layer prompt-level guardrails with runtime content checks rather than relying on either alone."
      },
      {
        "key": "E",
        "text": "Rely on a single hardened system prompt that enumerates every disallowed behavior."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc xác thực đầu ra dựa trên lược đồ có cấu trúc trước khi thực hiện các thao tác tiếp theo sẽ hạn chế dữ liệu mà các thao tác đó có thể nhận được. An toàn AI hiệu quả cũng sử dụng khả năng phòng thủ theo chiều sâu: hướng dẫn ở cấp độ nhắc nhở phải được bổ sung bằng cách kiểm tra nội dung thời gian chạy, vì lời nhắc hoặc điều khiển duy nhất của no tự nó đã cung cấp đủ khả năng bảo vệ.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 100",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/100-governance-safety-risk-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-101",
    "questionNumber": 101,
    "text": "You are planning a feedback session for a deployment that is in progress.  \n  \nWhich structure most effectively supports productive stakeholder feedback?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Hold an open-ended meeting with no pre-distributed agenda or artifacts, and rely on participants’ memory to carry decisions and follow-up owners forward."
      },
      {
        "key": "B",
        "text": "Define a focused agenda, share the artifacts in advance, capture decisions and follow-ups in writing, and confirm action owners and dates."
      },
      {
        "key": "C",
        "text": "Distribute artifacts at the session start rather than in advance, so stakeholders review materials in real time without preparation before the discussion begins."
      },
      {
        "key": "D",
        "text": "End the session without recording decisions, follow-up items, action owners, or dates, relying on participant memory to carry the session’s outcomes forward."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Một chương trình nghị sự tập trung và phân phối trước các hiện vật cho phép các bên liên quan chuẩn bị thông tin đầu vào có ý nghĩa. Việc ghi lại các quyết định và hành động tiếp theo, sau đó xác nhận chủ sở hữu và ngày đến hạn, tạo ra trách nhiệm chung và đảm bảo phản hồi được thực hiện.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 101",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/101-stakeholder-communication-lifecycle-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-102",
    "questionNumber": 102,
    "text": "A senior architect is developing briefing materials for a new retrieval architecture. The executive sponsor has asked for a summary of the architectural decision.  \n  \nWhich framing is most suitable for that audience?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Technical alternatives evaluated, implementation implications, and component-level consequences."
      },
      {
        "key": "B",
        "text": "Business outcomes achieved, trade-offs accepted, and high-level risks acknowledged."
      },
      {
        "key": "C",
        "text": "Capabilities delivered, scope implications, and feature-level dependencies on the roadmap."
      },
      {
        "key": "D",
        "text": "Threat model, control mappings, residual-risk acceptance, and audit traceability."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Truyền thông kiến ​​trúc ở cấp điều hành nên tập trung vào kết quả kinh doanh do quyết định mang lại, những đánh đổi đáng kể liên quan và những rủi ro cấp cao cần có nhận thức hoặc tài trợ.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 102",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/102-a-senior-architect-is-developing-briefing-materials-for-a-ne",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-103",
    "questionNumber": 103,
    "text": "You are setting up Claude Code for a team that requires every engineer to use the same MCP server set, permission rules, and project context throughout the engineering monorepo.  \n  \nWhich configuration scope best meets this requirement?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "[data-question-highlight-id=\"question-marker-R17ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R17ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R17ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R17ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R17ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R17ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Phạm vi dự án lưu trữ cấu hình cấp kho lưu trữ có thể được kiểm soát phiên bản và chia sẻ với tất cả cộng tác viên. Phạm vi người dùng và cục bộ là dành riêng cho cá nhân hoặc máy cụ thể, do đó, chúng không thể thực thi một cách đáng tin cậy một bộ máy chủ MCP chung, các quyền và bối cảnh dự án trong một nhóm.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 103",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/103-developer-productivity-operational-enablement",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-104",
    "questionNumber": 104,
    "text": "You are conducting a discovery session with a business sponsor who requests “an AI system to fix our customer escalations.”  \n  \nWhich approach is most likely to produce actionable requirements?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Accept the sponsor’s original phrasing as a complete and final requirement and proceed directly to design without asking targeted questions to surface actors, triggers, or constraints."
      },
      {
        "key": "B",
        "text": "Decompose the request by asking targeted questions about who escalates, what triggers escalation, what good resolution looks like, and which constraints—latency, cost, audit, and data sensitivity—apply."
      },
      {
        "key": "C",
        "text": "Defer the discovery session indefinitely on the grounds that the sponsor must fully specify the system before the architect can ask any clarifying or scoping questions."
      },
      {
        "key": "D",
        "text": "Assume the requirement matches the architect’s previous engagement in a different industry and proceed with that context, without validating actors, triggers, or constraints for this sponsor."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Các yêu cầu có thể thực hiện được yêu cầu làm rõ những người có liên quan, các sự kiện bắt đầu leo ​​thang, định nghĩa mong muốn về cách giải quyết thành công và các ràng buộc phi chức năng hiện hành như độ trễ, chi phí, khả năng kiểm tra và độ nhạy cảm của dữ liệu. Những chi tiết này biến một yêu cầu giải pháp mơ hồ thành các yêu cầu về phạm vi và thiết kế.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 104",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/104-you-are-conducting-a-discovery-session-with-a-business-spons",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-105",
    "questionNumber": 105,
    "text": "You are incorporating AI-assisted tools into the team’s documentation workflow. The team wants generated documentation to remain grounded in the actual code.  \n  \nWhich integration approach best meets this requirement?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Generate documentation from the model’s training-data recall without reading any of the actual repository code, accepting that the output will not reflect the current implementation."
      },
      {
        "key": "B",
        "text": "Have the subagents publish generated documentation directly to the public-facing site without passing through the team’s normal review workflow or any human approval step."
      },
      {
        "key": "C",
        "text": "Configure subagents that read the relevant code files via filesystem and code-search tools, generate the documentation, and emit changes through the team’s normal review workflow."
      },
      {
        "key": "D",
        "text": "Disable all filesystem and code-search tools so the subagents cannot read any repository code, accepting that documentation generation will be entirely disconnected from the actual implementation."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Tài liệu có căn cứ yêu cầu nhân viên kiểm tra mã kho lưu trữ có liên quan thông qua hệ thống tệp và các công cụ tìm kiếm mã, để nội dung phản ánh cách triển khai hiện tại. Việc định tuyến các thay đổi được tạo ra thông qua quy trình đánh giá thông thường sẽ duy trì sự giám sát của con người và các biện pháp kiểm soát chất lượng đã được thiết lập của nhóm.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 105",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/105-integration",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-106",
    "questionNumber": 106,
    "text": "You are assembling team-setup practices for a Claude Code rollout across an engineering organization.  \n  \nWhich two practices should be included on the list? Each correct answer provides a complete solution. (Select two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Use project scope for team-shared Model Context Protocol (MCP) servers and permission rules under version control."
      },
      {
        "key": "B",
        "text": "Apply managed configuration centrally for security-critical settings that must not be overridden by individual engineers."
      },
      {
        "key": "C",
        "text": "Use local scope for security-critical permission rules so each engineer can adapt them to ongoing work."
      },
      {
        "key": "D",
        "text": "Use user scope for team-shared MCP servers so every engineer on the team has consistent access."
      },
      {
        "key": "E",
        "text": "Use project scope for personal editor preferences so the preferences apply consistently within the project."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Các máy chủ MCP trong phạm vi dự án được lưu trữ trong `.mcp.json` và cam kết kiểm soát phiên bản để các thành viên trong nhóm nhận được các công cụ tương tự. Cài đặt dự án được chia sẻ cũng có thể cung cấp các quy tắc cấp phép cho nhóm. Các cài đặt được quản lý là phạm vi thích hợp cho các yêu cầu về bảo mật và tuân thủ vì chúng được ưu tiên hơn các cài đặt cá nhân, dự án và cục bộ và không thể bị từng kỹ sư ghi đè.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 106",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/106-developer-productivity-operational-enablement",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-107",
    "questionNumber": 107,
    "text": "You are determining the highest-impact optimization for a deployment whose token cost is dominated by a long, recurring system prompt and a large retrieved context for each request.  \n  \nWhich optimization most directly addresses the dominant cost driver?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Increase retrieval depth on every request to maximize recall, worsening the dominant cost driver by adding more retrieved tokens per request rather than reducing them."
      },
      {
        "key": "B",
        "text": "Add additional repeated content to the system prompt to give the model more guidance."
      },
      {
        "key": "C",
        "text": "Move the long, repeated system prompt into a cacheable prefix and trim retrieved context to the spans relevant to each query."
      },
      {
        "key": "D",
        "text": "Switch every request to the heaviest available model to maximize output quality, accepting that higher per-request inference cost compounds rather than addresses the dominant cost driver."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc lưu vào bộ nhớ đệm tiền tố nhắc nhở ổn định, lặp lại cho phép mã thông báo đầu vào được tính phí ở tốc độ đầu vào được lưu vào bộ nhớ đệm thấp hơn khi được hỗ trợ và việc hạn chế truy xuất trong các khoảng thời gian liên quan đến truy vấn sẽ làm giảm số lượng mã thông báo đầu vào được gửi trên mỗi yêu cầu. Cùng với nhau, các biện pháp này trực tiếp làm giảm chi phí nhắc lại và truy xuất ngữ cảnh.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 107",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/107-evaluation-testing-optimization",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-108",
    "questionNumber": 108,
    "text": "You are reviewing a peer's draft system prompt containing conflicting instructions: one section says never to speculate beyond the supplied source, while another instructs the model to confidently fill in any gaps.  \n  \nWhich response is most appropriate?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Add a priority instruction directing the model to evaluate all instructions and apply whichever appears most contextually appropriate on each request."
      },
      {
        "key": "B",
        "text": "Remove or rewrite the gap-filling instruction so the prompt consistently constrains the model to source-supported content."
      },
      {
        "key": "C",
        "text": "Increase temperature so output randomness masks the contradiction."
      },
      {
        "key": "D",
        "text": "Keep both instructions and rely on the model to decide which one to follow on each request."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Lời nhắc của hệ thống phải đưa ra hướng dẫn nhất quán, rõ ràng. Việc xóa hoặc viết lại hướng dẫn để lấp đầy các khoảng trống đảm bảo mô hình không phát minh ra thông tin không được hỗ trợ và vẫn bị hạn chế ở nội dung được nguồn cung cấp hỗ trợ.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 108",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/108-claude-models-prompting-context-engineering",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-109",
    "questionNumber": 109,
    "text": "You are assessing an evaluation set used to score a Claude-based hiring-support tool. The set comes from a single geographic region and a single tenure band.  \n  \nWhich response is most appropriate?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Discard all quantitative evaluation and replace it with qualitative impressions collected from a small, convenience-selected group that may not represent the tool’s full user population."
      },
      {
        "key": "B",
        "text": "Expand the evaluation set to cover the geographic regions and tenure bands the tool will serve, and rescore the system on the expanded set before broader release."
      },
      {
        "key": "C",
        "text": "Reduce the evaluation set further to a single demographic subgroup to simplify score interpretation, narrowing coverage rather than expanding it to match the intended user population."
      },
      {
        "key": "D",
        "text": "Continue using the narrow evaluation set drawn from one region and one tenure band because the existing benchmark scores are already high on that subset."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Bộ đánh giá phải thể hiện tập hợp liên quan và các điều kiện mà hệ thống sẽ được triển khai. Chỉ kiểm tra một khu vực và một nhóm nhiệm kỳ không thể tạo ra hiệu suất đáng tin cậy hoặc công bằng cho số lượng tuyển dụng rộng hơn; việc mở rộng tập hợp và tính điểm lại trước khi phát hành rộng rãi hơn sẽ cung cấp bằng chứng về phạm vi phủ sóng dự định.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 109",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/109-evaluation-testing-optimization",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-110",
    "questionNumber": 110,
    "text": "You are conducting a controlled experiment to compare two prompts and must finish the design steps before running the experiment.  \n  \nWhich two steps must be completed **BEFORE** running the experiment with random assignment? Each correct answer presents part of the solution. *(Select two.)*",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Determine the minimum detectable effect size and the sample size needed for power."
      },
      {
        "key": "B",
        "text": "Decide whether to promote, reject, or iterate the candidate based on the analysis."
      },
      {
        "key": "C",
        "text": "Define the hypothesis and the primary success metric for the comparison."
      },
      {
        "key": "D",
        "text": "Analyze the results against the predefined success metric and significance threshold."
      },
      {
        "key": "E",
        "text": "Document the recommendation, the trade-offs accepted, and the alternatives considered."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Một thử nghiệm hợp lệ được thiết kế trước khi phân công bằng cách xác định giả thuyết và chỉ số thành công chính, sau đó lập kế hoạch về sức mạnh thống kê. Hiệu ứng tối thiểu có thể phát hiện được và cỡ mẫu yêu cầu xác định liệu thử nghiệm có thể phát hiện một cách đáng tin cậy sự khác biệt có ý nghĩa hay không. Phân tích kết quả, quyết định phát hành và tài liệu diễn ra sau khi dữ liệu được thu thập.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 110",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/110-evaluation-testing-optimization",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-111",
    "questionNumber": 111,
    "text": "You are assessing a Claude-based deployment for compliance with a particular regulation.  \n  \nWhich two steps must be performed **before** mapping the deployment’s data flows to individual regulatory clauses? Each correct answer represents part of the solution. *(Select two.)*",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Compare the in-place controls against the regulatory requirements to identify any compliance gaps."
      },
      {
        "key": "B",
        "text": "Identify the applicability of the regulation based on data types, jurisdiction, and audience."
      },
      {
        "key": "C",
        "text": "Schedule the remediation work with the engineering team based on the prioritized gap findings."
      },
      {
        "key": "D",
        "text": "Document the identified gaps along with recommended remediations and residual risk for sign-off."
      },
      {
        "key": "E",
        "text": "Inventory the vendor-provided compliance tooling and confirm which compliance affordances are in place."
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Khả năng áp dụng quy định phải được thiết lập từ các loại dữ liệu, khu vực pháp lý và đối tượng trước khi có thể xác định phạm vi phân tích ở cấp điều khoản. Công cụ tuân thủ sẵn có của nhà cung cấp và khả năng chi trả tuân thủ được kích hoạt cũng phải được xác định để các biện pháp kiểm soát thực tế và khả năng xử lý dữ liệu có thể được ánh xạ tới các điều khoản áp dụng. Phân tích lỗ hổng, lập kế hoạch khắc phục và phê duyệt tuân theo bản đồ đó.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 111",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/111-governance-safety-risk-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-112",
    "questionNumber": 112,
    "text": "You are an architect supporting the iteration phase of a deployed Claude-based system.  \n  \nWhich activity most directly aligns with this phase?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Rebuild the entire system architecture from scratch at the start of every iteration cycle regardless of what production telemetry, evaluations, and stakeholder feedback indicate is needed."
      },
      {
        "key": "B",
        "text": "Stop measuring production outcomes once the deployment has successfully launched, treating the go-live milestone as the end of the evaluation and iteration cycle."
      },
      {
        "key": "C",
        "text": "Discard the evaluation framework and reference set once the deployment is in production, accepting that future iterations will have no structured basis for measuring the impact of changes."
      },
      {
        "key": "D",
        "text": "Review production telemetry, sampled output evaluations, and stakeholder feedback to identify the highest-impact change for the next cycle, then plan the change against the evaluation framework."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Hệ thống LLM được triển khai phải duy trì khung đánh giá và sử dụng phương pháp đo từ xa về hoạt động, chất lượng đầu ra được lấy mẫu cũng như phản hồi của người dùng hoặc bên liên quan để ưu tiên cải tiến có giá trị nhất. Sau đó, thay đổi theo kế hoạch có thể được đo lường dựa trên các tiêu chí thành công đã xác định và bộ đánh giá đã được thiết lập, cho phép lặp lại dựa trên bằng chứng.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 112",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/112-evaluation-testing-optimization",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-113",
    "questionNumber": 113,
    "text": "You are conducting a discovery engagement for a new Claude-based capability and must complete the requirements-gathering activities before validating the captured requirements with stakeholders.  \n  \nWhich two steps must be completed **BEFORE** validating the captured requirements with stakeholders? Each correct answer presents part of the solution. *(Select two.)*",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Produce architecture decision records that capture the rationale for major design choices."
      },
      {
        "key": "B",
        "text": "Capture the business goals, success criteria, and the in-scope user population for the engagement."
      },
      {
        "key": "C",
        "text": "Document the consolidated requirements with traceability to the source stakeholder for each item."
      },
      {
        "key": "D",
        "text": "Schedule the rollout milestones and dependencies with engineering and product partners."
      },
      {
        "key": "E",
        "text": "Identify the non-functional constraints covering latency, cost, audit, data sensitivity, and regulatory needs."
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Mục tiêu kinh doanh, tiêu chí thành công có thể đo lường, phạm vi và đối tượng người dùng dự kiến ​​sẽ xác định kết quả mà khả năng này phải đáp ứng. Các ràng buộc phi chức năng như độ trễ, chi phí, khả năng kiểm toán, độ nhạy cảm của dữ liệu và các nghĩa vụ pháp lý ràng buộc giải pháp nào được chấp nhận. Những đầu vào này phải được gợi ra trước khi các bên liên quan có thể xác nhận các yêu cầu một cách có ý nghĩa.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 113",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/113-you-are-conducting-a-discovery-engagement-for-a-new-claude-b",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-114",
    "questionNumber": 114,
    "text": "You are setting up tool permissions for a Claude-based assistant. Its defined duties require read access to a knowledge base and write access to a draft queue, with no other access.  \n  \nWhich scoping design best enforces least privilege?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Allow access to all tools with read permissions globally and restrict write permissions to the draft-queue tool, without scoping to only the specific tools required for defined tasks."
      },
      {
        "key": "B",
        "text": "Per-role allow-list of exactly the read-knowledge-base and write-draft-queue tools, enforced at the orchestration layer."
      },
      {
        "key": "C",
        "text": "Allow access to every tool in the catalog and rely on the model to decline tools it should not use."
      },
      {
        "key": "D",
        "text": "Disable all tools entirely to achieve a minimal permission surface, accepting that the assistant can no longer perform the read-knowledge-base or write-draft-queue tasks it was designed for."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Đặc quyền tối thiểu yêu cầu chỉ cấp những khả năng cụ thể cần thiết để thực hiện các nhiệm vụ đã xác định. Danh sách cho phép theo từng vai trò chỉ cho phép công cụ đọc cơ sở kiến ​​thức và công cụ ghi hàng đợi nháp, được thực thi bởi lớp điều phối, ngăn chặn quyền truy cập vào các công cụ không liên quan trong khi vẫn giữ được chức năng cần thiết.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 114",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/114-governance-safety-risk-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-115",
    "questionNumber": 115,
    "text": "The compliance team has developed a regulatory-disclosure procedure that must be used identically across customer-service, sales, and onboarding workflows. Regulators update the procedure four to six times per year. You are designing how to package the procedure for Claude’s use across all three workflows.  \n  \nWhich two design decisions should you make? Each correct answer represents part of the solution. (Select two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Package the procedure as a Claude Skill owned directly by the compliance team."
      },
      {
        "key": "B",
        "text": "Embed the procedure text into each workflow’s system prompt at integration time."
      },
      {
        "key": "C",
        "text": "Store the procedure in a shared retrieval corpus accessed by all three workflows."
      },
      {
        "key": "D",
        "text": "Have each workflow team rewrite the procedure for its own context."
      },
      {
        "key": "E",
        "text": "Reference the same Claude Skill from all three workflow integrations."
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Claude Skill thuộc sở hữu tuân thủ tập trung quy trình đã được phê duyệt dưới dạng quy trình làm việc được quản lý và có thể tái sử dụng. Việc tham chiếu cùng một Kỹ năng đó từ cả ba hoạt động tích hợp giúp giữ cho việc triển khai dịch vụ khách hàng, bán hàng và triển khai được nhất quán và cho phép các bản cập nhật tuân thủ được phổ biến từ một nguồn được duy trì. Anthropic ghi lại các Kỹ năng như một cách để phân phối quy trình làm việc được tiêu chuẩn hóa, đã được phê duyệt một cách nhất quán, bao gồm cả việc quản lý và cập nhật trên toàn tổ chức.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 115",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/115-claude-models-prompting-context-engineering",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-116",
    "questionNumber": 116,
    "text": "A senior architect is overseeing stakeholder expectations for a Claude-based reporting assistant midway through development. Stakeholders have growing concerns about response latency.  \n  \nWhich two actions most directly align stakeholder expectations in this situation? (Select two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Present measured p50 and p95 latency baselines against the agreed SLA thresholds so stakeholders have accurate data."
      },
      {
        "key": "B",
        "text": "Pause all development and reallocate engineering resources entirely to latency optimization."
      },
      {
        "key": "C",
        "text": "Communicate that latency concerns are a known LLM limitation and outside the architecture team’s control."
      },
      {
        "key": "D",
        "text": "Replace the current Claude model with a third-party model that may offer lower latency without evaluation."
      },
      {
        "key": "E",
        "text": "Revise the SLA definition collaboratively with stakeholders if current targets are not achievable given production constraints."
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Độ trễ p50 và p95 được đo so với ngưỡng SLA đã thỏa thuận mang lại cái nhìn khách quan, chung về hiệu suất thực tế. Nếu những hạn chế về sản xuất khiến các mục tiêu hiện tại không thể đạt được, thì việc cộng tác sửa đổi SLA sẽ điều chỉnh lại cam kết dịch vụ với những kỳ vọng về hiệu suất khả thi. Độ trễ là một chỉ báo cấp độ dịch vụ tiêu chuẩn có thể được đánh giá bằng cách sử dụng phần trăm và các mục tiêu dịch vụ được công bố đặt ra kỳ vọng của người dùng.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 116",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/116-stakeholder-communication-lifecycle-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-117",
    "questionNumber": 117,
    "text": "You are deciding when to introduce a project subagent instead of relying on Claude Code’s general capabilities.  \n  \nWhich scenario most directly warrants a dedicated subagent?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "The team has a recurring specialized task, such as database schema review, that requires a focused system prompt, narrow tool permissions, and a specific model selection across many sessions."
      },
      {
        "key": "B",
        "text": "The team has a one-time ad hoc question that will not recur and does not require a focused system prompt, narrow tool permissions, or dedicated model selection."
      },
      {
        "key": "C",
        "text": "The team has no recurring specialized tasks and uses Claude Code only for isolated general-purpose work that does not justify a dedicated system prompt or tool scope."
      },
      {
        "key": "D",
        "text": "The team wants every Claude Code interaction to use the same generic system prompt with no task-specific specialization, narrow tool permissions, or dedicated model selection."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Một tác nhân phụ chuyên dụng phù hợp cho công việc chuyên môn định kỳ cần lời nhắc hệ thống có phạm vi chặt chẽ, quyền hạn chế đối với công cụ và tùy chọn một mô hình riêng biệt. Các tác nhân phụ Claude Code tùy chỉnh có thể tái sử dụng và có thể được định cấu hình bằng lời nhắc hệ thống, quyền truy cập công cụ và mô hình của riêng chúng.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 117",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/117-developer-productivity-operational-enablement",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-118",
    "questionNumber": 118,
    "text": "You are creating a human-in-the-loop validation workflow for a new Claude-based deployment and must finish the design steps before running a pilot of the workflow.  \n  \nWhich two steps must be completed **BEFORE** piloting the workflow using a representative subset of traffic? Each correct answer represents part of the solution. *(Select two.)*",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Define the sampling strategy and the escalation criteria at each oversight point in the pipeline."
      },
      {
        "key": "B",
        "text": "Iterate the workflow design based on observed pilot findings before broader rollout to production."
      },
      {
        "key": "C",
        "text": "Onboard the reviewer pool with role-specific training on the check criteria and escalation procedures."
      },
      {
        "key": "D",
        "text": "Document the workflow with check criteria, escalation paths, and service-level agreements (SLAs) for each step."
      },
      {
        "key": "E",
        "text": "Identify the decision points in the pipeline that require human oversight by impact and reversibility."
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Thiết kế xác thực con người trong vòng lặp phải xác định các quyết định trong quy trình đảm bảo sự giám sát của con người tùy theo tác động và khả năng đảo ngược của chúng, đồng thời xác định tiêu chí lấy mẫu và báo cáo cho từng điểm giám sát. Những biện pháp kiểm soát đó thiết lập phạm vi và hành vi được thử nghiệm trong chương trình thí điểm; những sửa đổi dựa trên những phát hiện thí điểm sẽ diễn ra sau đó.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 118",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/118-evaluation-testing-optimization",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-119",
    "questionNumber": 119,
    "text": "Engineering leadership plans to deploy Claude Skills to 280 developers across 14 teams. The Skills will capture internal coding standards, code-review checklists, and incident-postmortem templates. Leadership has asked how Skill authorship should be governed so that Skills stay trustworthy without creating a bottleneck around one central team.  \n  \nWhich governance model should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Per-developer authorship across the 280 engineers with no team-level coordination required."
      },
      {
        "key": "B",
        "text": "Centralized authorship by a single platform team responsible for every Skill produced."
      },
      {
        "key": "C",
        "text": "Fully decentralized authorship across the 14 teams with no review before publication."
      },
      {
        "key": "D",
        "text": "Federated authorship across the 14 teams with a central review and publication gate."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Quyền tác giả liên kết cho phép mỗi nhóm tạo và duy trì Kỹ năng cho miền riêng của mình, phân bổ khối lượng công việc tác giả. Cổng đánh giá và xuất bản trung tâm đảm bảo rằng các Kỹ năng được chia sẻ đáp ứng các yêu cầu về chất lượng, bảo mật, tính nhất quán và độ tin cậy trên toàn tổ chức trước khi chúng được phổ biến rộng rãi.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 119",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/119-governance-safety-risk-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-120",
    "questionNumber": 120,
    "text": "You are assembling continuity practices that extend across the deployment lifecycle.  \n  \nWhich two practices should be included on the list? Each correct answer provides a complete solution. (Select two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Maintain a stakeholder register and notify the listed parties at every phase transition event."
      },
      {
        "key": "B",
        "text": "Carry the evaluation framework and reference set forward across iterations rather than rebuilding each time."
      },
      {
        "key": "C",
        "text": "Archive every phase deliverable in long-term storage to preserve a record of what was produced."
      },
      {
        "key": "D",
        "text": "Capture lessons learned at the end of each phase and surface them as inputs to the next phase."
      },
      {
        "key": "E",
        "text": "Lock decisions made in early phases to prevent revisiting them as later phases begin."
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Vòng đời triển khai liên tục sử dụng khung đánh giá liên tục và bộ tham chiếu để có thể phát hiện các kết quả có thể so sánh được qua các lần lặp lại và hồi quy. Nó cũng kết hợp các bài học kinh nghiệm từ từng giai đoạn sang giai đoạn tiếp theo, cho phép cải tiến một cách có hệ thống. Hướng dẫn của Microsoft mô tả quá trình đánh giá được vận hành liên tục và đề xuất các kết quả thử nghiệm để nắm bắt các bài học triển khai.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 120",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/120-governance-safety-risk-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-121",
    "questionNumber": 121,
    "text": "A Claude architect is reviewing configuration-scope assignments.  \n  \nWhich two statements correctly describe an appropriate use of user-scope configuration versus other scopes? (Select two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Persisting personal editor theme preferences that follow an engineer across projects."
      },
      {
        "key": "B",
        "text": "Saving a preferred Claude response language that applies to all repositories the engineer uses."
      },
      {
        "key": "C",
        "text": "Enforcing a company-wide policy that disables a feature for all engineers."
      },
      {
        "key": "D",
        "text": "Defining MCP server endpoints shared by all contributors to a specific repository."
      },
      {
        "key": "E",
        "text": "Storing API authentication keys so they are not committed to version control."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Cài đặt phạm vi người dùng áp dụng cho một người trong mọi dự án trên máy của người đó và dành cho các sở thích cá nhân, chẳng hạn như chủ đề. Do đó, ngôn ngữ phản hồi ưa thích cá nhân được sử dụng trên tất cả các kho lưu trữ thuộc phạm vi người dùng. Các hạn chế trên toàn tổ chức yêu cầu cài đặt được quản lý, điểm cuối MCP của kho lưu trữ dùng chung yêu cầu cấu hình dự án dùng chung và thông tin xác thực phải được giữ ở cấu hình cục bộ riêng tư, không được cam kết.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 121",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/121-governance-safety-risk-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-122",
    "questionNumber": 122,
    "text": "You are choosing the documentation set that should accompany a Claude-based deployment at handoff.  \n  \nWhich set is the most complete?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Architecture overview, ADRs, component-level diagrams, runbooks for common operations, an on-call playbook, and a list of known limitations."
      },
      {
        "key": "B",
        "text": "Code comments scattered across individual source files with no integrating architecture overview, no ADRs, no runbooks, and no on-call playbook to orient operators or new team members."
      },
      {
        "key": "C",
        "text": "A single one-page architecture diagram with no ADRs, no runbooks, no on-call playbook, and no list of known limitations to support operators or future maintainers."
      },
      {
        "key": "D",
        "text": "A verbal handover walkthrough conducted on the day of transition, with no written architecture overview, ADRs, runbooks, playbook, or known limitations captured for future reference."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Gói bàn giao triển khai hoàn chỉnh ghi lại kiến ​​trúc tổng thể và thiết kế thành phần, ghi lại các quyết định về kiến ​​trúc, cung cấp sổ tay cho các hoạt động thông thường và sổ tay hỗ trợ theo yêu cầu, đồng thời xác định các hạn chế đã biết đối với người vận hành và người bảo trì trong tương lai.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 122",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/122-you-are-choosing-the-documentation-set-that-should-accompany",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-123",
    "questionNumber": 123,
    "text": "A security audit identifies two issues:  \n  \n1. All end users use one shared API key.  \n2. Tool calls run without logging the user who initiated them.  \n  \nWhich two mitigations directly remediate these specific findings? (Select two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Validate structured outputs against a schema before downstream actions are executed."
      },
      {
        "key": "B",
        "text": "Enforce RBAC at the retrieval layer before content enters the model context."
      },
      {
        "key": "C",
        "text": "Move credentials out of the prompt context and resolve them from a server-side secret store."
      },
      {
        "key": "D",
        "text": "Add actor attribution to tool-call logs so each call records the initiating user identity."
      },
      {
        "key": "E",
        "text": "Replace the shared API key with per-user OAuth tokens carrying scope-restricted permissions."
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Mã thông báo OAuth cho mỗi người dùng thay thế thông tin xác thực được chia sẻ bằng quyền truy cập có phạm vi giới hạn, có thể phân bổ riêng lẻ. Việc đưa danh tính của người dùng bắt đầu vào nhật ký cuộc gọi công cụ sẽ thiết lập trách nhiệm giải trình và dấu vết kiểm tra cho từng hành động.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 123",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/123-governance-safety-risk-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-124",
    "questionNumber": 124,
    "text": "You are categorizing token-management tactics by the request-lifecycle stage at which each applies.  \n  \nFor each tactic, select its applicable request-lifecycle stage.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "[data-question-highlight-id=\"question-marker-R17ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R17ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R17ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R17ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R17ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R17ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc chuẩn bị đầu vào làm giảm hoặc thu gọn cuộc hội thoại và truy xuất ngữ cảnh trước khi tập hợp. Việc xây dựng lời nhắc xác định thứ tự và tiền tố có thể lưu trong bộ nhớ đệm ổn định của lời nhắc. Xử lý đầu ra xác thực dữ liệu có cấu trúc được tạo và duy trì các kết quả đã xác thực để sử dụng và kiểm tra tiếp theo.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 124",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/124-claude-models-prompting-context-engineering",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-125",
    "questionNumber": 125,
    "text": "You are addressing an adversarial input pattern where users insert text that claims administrative authority and directs the model to circumvent safety restrictions.  \n  \nWhich combination of controls most effectively mitigates this attack pattern?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Trusting that the model will intrinsically recognize and reject all bypass attempts without prompt-level instructions, runtime classifiers, scoped permissions, or audit logging."
      },
      {
        "key": "B",
        "text": "Prompt-level instructions that treat user content as untrusted data, runtime classifiers that detect override attempts, scoped tool permissions that cannot be elevated by user content, and audit logging of attempts."
      },
      {
        "key": "C",
        "text": "Removing all safety restrictions and guardrails to eliminate the attack surface that bypass attempts target, accepting that this makes the assistant unrestricted for all inputs."
      },
      {
        "key": "D",
        "text": "Granting users any privilege level they assert in their message content, on the assumption that cooperative behavior requires honoring self-declared authority without independent verification."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Văn bản do người dùng cung cấp phải được coi là không đáng tin cậy và không thể cấp đặc quyền hoặc ghi đè các quy tắc an toàn có mức độ ưu tiên cao hơn. Các biện pháp giảm thiểu theo lớp—hướng dẫn nhắc nhở, phát hiện các lần ghi đè trong thời gian chạy, các quyền của công cụ có đặc quyền tối thiểu mà nội dung người dùng không thể nâng cao và ghi nhật ký kiểm tra—giảm cả khả năng và tác động của các lần thử chèn nhắc nhở.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 125",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/125-governance-safety-risk-management",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-126",
    "questionNumber": 126,
    "text": "When the support agent invokes escalate_to_human, human agents report they must re-read the entire raw conversation to understand each case, and average handle time for escalated tickets has risen. What should the agent do at the moment of escalation to fix this?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Attach the full untrimmed transcript of the conversation so the human has complete information."
      },
      {
        "key": "B",
        "text": "Enable extended thinking on the escalation turn so the model reasons longer before handing off."
      },
      {
        "key": "C",
        "text": "Escalate earlier in ambiguous cases so humans receive tickets before much conversation has accumulated."
      },
      {
        "key": "D",
        "text": "Produce a structured handoff summary — the customer's issue, verified identifiers, tool results and account state gathered, actions already attempted, and the specific recommended next step."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Tại sao D đúng. Việc chuyển giao hiệu quả của con người đòi hỏi một bản tóm tắt có cấu trúc hiển thị trước chính xác những gì con người cần: vấn đề, số nhận dạng đã được xác nhận, nội dung đã được thử và đề xuất. Đó là điều giúp loại bỏ gánh nặng đọc lại và rút ngắn thời gian xử lý. Việc hủy bản ghi đầy đủ (A) là phương thức lỗi hiện tại - nó buộc con người phải tự xây dựng lại vụ việc. Tư duy mở rộng (B) cải thiện khả năng suy luận của chính mô hình nhưng tạo ra tạo tác no cho con người. Báo cáo những thay đổi trước đó (C) khi yêu cầu đến, chứ không phải vấn đề thiếu thông tin và có thể sẽ làm giảm khả năng giải quyết trong lần liên hệ đầu tiên.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 126",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/126-solution-design-architecture",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  },
  {
    "id": "ccarp-127",
    "questionNumber": 127,
    "text": "You are evaluating two configurations for an internal compliance Q&A assistant. Configuration X decreases top-k retrieval and uses a lighter model, reducing p95 latency by 38 percent but resulting in a measured 2 percent decrease in the accuracy benchmark. Configuration Y keeps the current top-k retrieval setting and heavier model, with no change to p95 latency and no measurable accuracy change. The deployment’s declared priorities are accuracy first and latency second.  \n  \nWhich configuration is the better recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Configuration X, because the 2 percent accuracy reduction falls within normal benchmark variance and is not a meaningful regression."
      },
      {
        "key": "B",
        "text": "Configuration Y, because the deployment’s stated priority is accuracy first, and Configuration X produces a measured reduction in accuracy."
      },
      {
        "key": "C",
        "text": "Configuration X, because lower latency generally matters more than accuracy, regardless of the deployment’s stated priorities."
      },
      {
        "key": "D",
        "text": "Configuration X, because a 38 percent latency improvement outweighs a 2 percent accuracy reduction as a general rule across compliance deployments."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Khi độ chính xác là ưu tiên triển khai chính thì cấu hình duy trì độ chính xác đo được sẽ phù hợp hơn. Cấu hình Y duy trì độ chính xác, trong khi Cấu hình X giới thiệu hồi quy độ chính xác đo được; việc cải thiện độ trễ của nó chỉ là thứ yếu so với mức độ ưu tiên đã nêu.",
    "category": "General",
    "tags": [
      "CCAR-P",
      "General"
    ],
    "sourceTitle": "Examcademy CCAR-P Question 127",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccar-p/q/127-you-are-evaluating-two-configurations-for-an-internal-compli",
    "lastVerifiedAt": "2026-10-23T08:33:44.470Z"
  }
];
