import { Question } from '../types';

export const ccaoQuestions: Question[] = [
  {
    "id": "ccao-1",
    "questionNumber": 1,
    "text": "A strategy manager reviews a Claude-generated recommendation to merge the company’s two regional warehouses into a single location. The recommendation references three sources estimating cost savings and one source that confirms consolidation is operationally feasible. Two source documents also include estimates of one-time transition costs and a stakeholder concern about regional service levels, neither of which is included in the recommendation.  \n  \nWhich concern is most justified?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "The recommendation is acceptable for an initial round, but the missing material should be added in a separate appendix rather than reprompting the original output."
      },
      {
        "key": "B",
        "text": "The recommendation reflects selective use of the source documents and should be re-prompted to address the transition costs and the service-level concern before it is used."
      },
      {
        "key": "C",
        "text": "The recommendation should be rejected because it relies on only four sources, which is insufficient for a decision of this size."
      },
      {
        "key": "D",
        "text": "The recommendation is sound because every source it cites supports the consolidation conclusion."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Đề xuất quyết định phải tính đến bằng chứng quan trọng có thể ảnh hưởng đến kết quả. Việc bỏ qua chi phí chuyển đổi được ghi lại và mối lo ngại về mức độ dịch vụ trong khu vực chỉ đưa ra bằng chứng thuận lợi cho việc hợp nhất, do đó khuyến nghị cần được nhắc lại để giải quyết những vấn đề đó trước khi áp dụng.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 1",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/1-output-evaluation-and-validation",
    "lastVerifiedAt": "2026-10-23T08:07:35.141Z"
  },
  {
    "id": "ccao-2",
    "questionNumber": 2,
    "text": "You are an operations lead classifying proposed Claude use cases according to whether they are acceptable for your team to pursue.  \n  \nWhich two proposed use cases are acceptable for the team to pursue with Claude? (Choose two.)  \n  \nEach correct answer provides a complete solution.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "synthesizing themes across approved customer feedback under aggregation rules"
      },
      {
        "key": "B",
        "text": "summarizing performance review notes across a team to support a manager’s promotion decisions"
      },
      {
        "key": "C",
        "text": "drafting a preliminary symptom summary to support a clinician’s diagnostic review"
      },
      {
        "key": "D",
        "text": "drafting a legal summary that an attorney will review and edit before sharing with a client"
      },
      {
        "key": "E",
        "text": "drafting an internal training summary from approved internal documentation"
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Tổng hợp phản hồi của khách hàng đã được phê duyệt dưới các biện pháp kiểm soát tổng hợp và tạo bản tóm tắt đào tạo nội bộ từ tài liệu nội bộ đã được phê duyệt là các nhiệm vụ xử lý thông tin có giới hạn và có rủi ro thấp. Các quyết định thăng tiến là các quyết định có tác động cao liên quan đến việc làm, trong khi hỗ trợ chẩn đoán và soạn thảo pháp lý cho khách hàng lần lượt liên quan đến chăm sóc sức khỏe và hướng dẫn pháp lý; những miền này yêu cầu các biện pháp bảo vệ nâng cao và không phải là trường hợp sử dụng thông thường được nhóm phê duyệt chỉ vì con người đánh giá kết quả.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 2",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/2-governance-risk-and-responsible-use",
    "lastVerifiedAt": "2026-10-23T08:07:35.141Z"
  },
  {
    "id": "ccao-3",
    "questionNumber": 3,
    "text": "You are an analyst tackling a one-off, complex problem that truly requires multi-step reasoning across an extended chain of thought. Which model is most appropriate for this work?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "A non-Anthropic model, because the Claude lineup has no option for complex reasoning."
      },
      {
        "key": "B",
        "text": "Opus, because it is positioned as the most capable for advanced reasoning on complex specialized tasks."
      },
      {
        "key": "C",
        "text": "Haiku, because lightweight models are always preferred regardless of complexity."
      },
      {
        "key": "D",
        "text": "Any model, because reasoning depth does not vary across the lineup."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Opus là cấp mô hình có khả năng cao nhất của Anthropic và được thiết kế cho các nhiệm vụ lý luận nâng cao cũng như phức tạp, chuyên biệt. Điều đó làm cho nó trở thành sự lựa chọn thích hợp khi một vấn đề chỉ xảy ra một lần đòi hỏi một quá trình suy luận mở rộng gồm nhiều bước.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 3",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/3-product-and-model-selection",
    "lastVerifiedAt": "2026-10-23T08:07:35.141Z"
  },
  {
    "id": "ccao-4",
    "questionNumber": 4,
    "text": "Before uploading a customer file for Code Execution analysis, a customer-success associate at Noventra, Ltd. is reviewing the planned task.  \n  \nWhich two practices most closely align with sound data handling? (Choose two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Confirm that the planned Code Execution task aligns with the organization’s data classification policy and escalate to the appropriate contact if the data sensitivity exceeds approved use."
      },
      {
        "key": "B",
        "text": "Review the file for sensitive, confidential, or regulated fields before upload, and remove or redact any fields that are not required for the planned Code Execution analysis."
      },
      {
        "key": "C",
        "text": "Skip the upload review entirely on the basis of urgency, even though the file might contain regulated fields that organizational policy requires the user to redact before any code execution."
      },
      {
        "key": "D",
        "text": "Bypass the data classification policy because the task is internal, treating sandboxed processing as an exemption from the review the policy requires before sensitive data is uploaded."
      },
      {
        "key": "E",
        "text": "Upload the full unredacted customer file without review, on the assumption that a sandboxed execution environment removes the need to apply the organization’s data classification policy."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Dữ liệu phải được xử lý theo chính sách phân loại của tổ chức, với mức tăng dần khi kế hoạch sử dụng vượt quá giới hạn độ nhạy cảm đã được phê duyệt. Các tệp cũng phải được xem xét trước khi tải lên để loại bỏ hoặc loại bỏ các trường nhạy cảm, bí mật hoặc được quản lý, không cần thiết cho việc phân tích. Môi trường thực thi hộp cát không loại bỏ các chính sách và nghĩa vụ giảm thiểu dữ liệu này.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 4",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/4-governance-risk-and-responsible-use",
    "lastVerifiedAt": "2026-10-23T08:07:35.141Z"
  },
  {
    "id": "ccao-5",
    "questionNumber": 5,
    "text": "You are assessing proposed workflow changes to determine whether they materially improve the workflow. Which two proposed changes meaningfully improve a recurring Claude workflow? (Choose two.)  \n  \nEach correct answer provides a complete solution.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "updating the team’s shared workspace name to reflect the new workflow process"
      },
      {
        "key": "B",
        "text": "labeling each workflow step with descriptive names to improve readability for new team members"
      },
      {
        "key": "C",
        "text": "extracting the standard reference material into a Project to avoid repeating it"
      },
      {
        "key": "D",
        "text": "reorganizing the workflow document’s section headings to improve navigation"
      },
      {
        "key": "E",
        "text": "adding a quality check on outputs before they enter the downstream process"
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Dự án Claude sử dụng kiến ​​thức đã tải lên làm ngữ cảnh trên tất cả các cuộc trò chuyện trong Dự án, do đó, việc đặt tài liệu tham chiếu tiêu chuẩn ở đó sẽ tránh cung cấp nhiều lần cùng một ngữ cảnh trong quy trình làm việc định kỳ. Việc kiểm tra chất lượng trước khi đầu ra đi vào quy trình xuôi dòng sẽ ngăn chặn việc truyền bá các kết quả không chính xác hoặc không phù hợp. Tên không gian làm việc, nhãn bước và tiêu đề tài liệu cải thiện khả năng tổ chức hoặc khả năng đọc nhưng không thêm bối cảnh Claude có thể tái sử dụng hoặc cơ chế kiểm soát đầu ra.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 5",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/5-workflow-integration-and-solution-design",
    "lastVerifiedAt": "2026-10-23T08:07:35.141Z"
  },
  {
    "id": "ccao-6",
    "questionNumber": 6,
    "text": "You are evaluating a Claude-generated report that maintains a confident tone throughout. Which question most effectively distinguishes plausibility from verification?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Can each specific claim be traced to a credible source or to the supplied input material?"
      },
      {
        "key": "B",
        "text": "Does the response open with a clear, well-framed statement of the main finding?"
      },
      {
        "key": "C",
        "text": "Does the response cover the topic comprehensively based on its length and section count?"
      },
      {
        "key": "D",
        "text": "Does the response use varied sentence structure across sections?"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc xác minh yêu cầu kiểm tra xem các tuyên bố riêng lẻ có được hỗ trợ bởi các nguồn đáng tin cậy hoặc bằng tài liệu đầu vào được cung cấp hay không. Độ tin cậy, cách trình bày, độ dài, mức độ bao quát và sự đa dạng của câu có thể làm cho nội dung có vẻ hợp lý nhưng không chứng minh được rằng những tuyên bố của nó được chứng minh.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 6",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/6-output-evaluation-and-validation",
    "lastVerifiedAt": "2026-10-23T08:07:35.141Z"
  },
  {
    "id": "ccao-7",
    "questionNumber": 7,
    "text": "You are a marketing manager determining what to put in custom instructions for a writing-focused Project.  \n  \nWhich two items should be included in the custom instructions? (Choose two.)  \n  \nEach correct answer provides a complete solution.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "the brand voice and the tonal expectations the writing must follow"
      },
      {
        "key": "B",
        "text": "a representative sample of past writing that reflects the team’s preferred style and structure"
      },
      {
        "key": "C",
        "text": "the prompt author’s preferred response length for internal messages unrelated to external deliverables"
      },
      {
        "key": "D",
        "text": "the preferred writing style of the marketing manager who will review all final deliverables"
      },
      {
        "key": "E",
        "text": "the standard structure and the length expectations for typical deliverables"
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Hướng dẫn viết dự án phải đặt ra các yêu cầu có thể sử dụng lại áp dụng cho kết quả đầu ra của dự án, bao gồm các yêu cầu về giọng điệu và âm sắc thương hiệu, cũng như cấu trúc tiêu chuẩn và độ dài dự kiến ​​của các sản phẩm thông thường. Hướng dẫn của dự án có thể chỉ đạo cách ChatGPT phản hồi trong dự án đó, bao gồm cả phong cách, sự ngắn gọn và định dạng.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 7",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/7-configuration-and-knowledge-management",
    "lastVerifiedAt": "2026-10-23T08:07:35.141Z"
  },
  {
    "id": "ccao-8",
    "questionNumber": 8,
    "text": "You are a knowledge worker who broke a “draft a board memo” request into fifteen small steps and noticed that the output now feels disjointed because related ideas were separated.  \n  \nWhich adjustment is most appropriate?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Combine the original request back into one unstructured sentence."
      },
      {
        "key": "B",
        "text": "Subdivide each tiny step into ten more tiny steps for additional precision."
      },
      {
        "key": "C",
        "text": "Remove all sequencing so the steps run in random order."
      },
      {
        "key": "D",
        "text": "Consolidate related steps into fewer cohesive sections that group naturally connected ideas."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Công việc liên quan phải được hợp nhất thành các phần gắn kết để các ý tưởng được kết nối một cách tự nhiên với nhau, cải thiện tính mạch lạc mà không loại bỏ cấu trúc hữu ích của nhiệm vụ.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 8",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/8-prompting-and-task-execution",
    "lastVerifiedAt": "2026-10-23T08:07:35.141Z"
  },
  {
    "id": "ccao-9",
    "questionNumber": 9,
    "text": "You are a knowledge worker reviewing a Claude-generated brief that claims a “well-known industry standard” but does not identify any source. How should this claim be handled?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Treat the assertion as unverified, and either source it from an authoritative reference or remove it."
      },
      {
        "key": "B",
        "text": "Accept the assertion because the phrase \"well-known\" is reassuring."
      },
      {
        "key": "C",
        "text": "Republish the brief unchanged because the claim sounds authoritative."
      },
      {
        "key": "D",
        "text": "Strengthen the assertion by adding more confident wording."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Các tuyên bố về tiêu chuẩn ngành cần có sự hỗ trợ từ nguồn tham khảo có căn cứ và có thể nhận dạng được. Một khẳng định chưa được đặt tên vẫn chưa được xác minh và cần được ghi nguồn hoặc loại bỏ thay vì được chấp nhận hoặc củng cố chỉ dựa trên cách diễn đạt của nó.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 9",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/9-output-evaluation-and-validation",
    "lastVerifiedAt": "2026-10-23T08:07:35.141Z"
  },
  {
    "id": "ccao-10",
    "questionNumber": 10,
    "text": "You are breaking down a “build a customer journey map” request.  \n  \nWhich sequence of decomposed steps is correct?  \n  \n1. Identify the touchpoints the customer experiences during each stage.  \n2. Define the persona and the journey scope that will be mapped.  \n3. Document pain points and opportunities at every touchpoint.  \n4. Synthesize the findings into the finished journey-map artifact.  \n5. Identify the primary stages the persona progresses through.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "2, 5, 1, 3, 4"
      },
      {
        "key": "B",
        "text": "1, 2, 5, 3, 4"
      },
      {
        "key": "C",
        "text": "5, 2, 1, 3, 4"
      },
      {
        "key": "D",
        "text": "2, 1, 5, 3, 4"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Bản đồ hành trình của khách hàng dựa trên phạm vi hành trình và tính cách được xác định. Cấu trúc của nó sau đó được thiết lập bằng cách xác định các giai đoạn chính của cá nhân, tiếp theo là các điểm tiếp xúc trong các giai đoạn đó. Các điểm khó khăn và cơ hội được đánh giá tại các điểm tiếp xúc đó trước khi tất cả các phát hiện được tổng hợp vào bản đồ hành trình cuối cùng.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 10",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/10-prompting-and-task-execution",
    "lastVerifiedAt": "2026-10-23T08:07:35.141Z"
  },
  {
    "id": "ccao-11",
    "questionNumber": 11,
    "text": "A knowledge worker is using the AI Fluency Framework’s Description competency to revise an underperforming prompt. Which revision most accurately reflects Description principles?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Remove the existing context from the prompt and submit only the bare task statement, eliminating the audience, format, and constraint information that Description principles call for in a clear specification."
      },
      {
        "key": "B",
        "text": "Replace the specific instructions with generic phrasing that broadens the task scope, undoing the specification work that Description principles require for a reliable, useful output on the next run."
      },
      {
        "key": "C",
        "text": "Specify the task scope, the required output format, the audience, and the relevant constraints with sufficient clarity that the prompt produces a useful, reliable output on the next run."
      },
      {
        "key": "D",
        "text": "Add length to the prompt by inserting filler text that does not specify task scope, output format, audience, or constraints, leaving the original specification gaps in the underperforming prompt unaddressed."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Mô tả liên quan đến việc truyền đạt các mục tiêu đủ rõ ràng để thúc đẩy các hành vi và kết quả đầu ra hữu ích của AI. Việc xác định phạm vi nhiệm vụ, định dạng đầu ra bắt buộc, đối tượng mục tiêu và các ràng buộc có thể áp dụng sẽ cung cấp thông số kỹ thuật cần thiết để có được kết quả hữu ích, đáng tin cậy.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 11",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/11-prompting-and-task-execution",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-12",
    "questionNumber": 12,
    "text": "You are a knowledge worker moving from a long, drifting conversation to a fresh, focused session. What is the correct sequence of transition steps?  \n  \n1. Start a new chat and paste the summary as its initial context.  \n2. Summarize the goals, key decisions, and open questions from the lengthy conversation.  \n3. Determine which references should remain available beyond the current chat.  \n4. Place persistent references in a Project’s knowledge base or attach them as needed.  \n5. Verify that the new chat is on-task before resuming the work.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "1, 2, 3, 4, 5"
      },
      {
        "key": "B",
        "text": "2, 3, 4, 1, 5"
      },
      {
        "key": "C",
        "text": "2, 4, 3, 1, 5"
      },
      {
        "key": "D",
        "text": "3, 2, 4, 1, 5"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Phần tiếp theo tập trung cần có một bản tóm tắt có thể sử dụng được trước khi cuộc trò chuyện mới có thể nhận được ngữ cảnh bắt đầu. Các tài liệu tham khảo dành cho mục đích sử dụng lại phải được xác định và thêm vào nguồn Dự án hoặc được đính kèm trước khi tiếp tục, vì Dự án lưu giữ các cuộc trò chuyện, tệp và hướng dẫn liên quan cùng nhau để duy trì ngữ cảnh và duy trì nhiệm vụ. Sau đó, cuộc trò chuyện mới có thể được xác thực để căn chỉnh trước khi tiếp tục công việc.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 12",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/12-configuration-and-knowledge-management",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-13",
    "questionNumber": 13,
    "text": "An operations assistant is redesigning a recurring data-processing workflow step to use Code Execution. Which two design decisions best promote reliable integration? (Choose two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Vary the input file format from run to run to accommodate the different source systems that supply the data each week."
      },
      {
        "key": "B",
        "text": "Define a brief output verification step in which the human reviewer confirms the computed result against an expected range or sanity check before the output advances to downstream consumers."
      },
      {
        "key": "C",
        "text": "Embed the Code Execution step inside the workflow without documenting the expected output format or the fields it produces."
      },
      {
        "key": "D",
        "text": "Standardize the input file format the step expects, so each run of the Code Execution step receives consistent input and produces comparable, verifiable output across recurring weekly cycles."
      },
      {
        "key": "E",
        "text": "Eliminate the human review step that follows Code Execution, since the sandboxed environment already verifies that the code ran without errors."
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Quy trình xử lý tự động định kỳ là đáng tin cậy nhất khi mỗi lần thực thi nhận được cấu trúc đầu vào nhất quán, cho phép so sánh và xác minh đầu ra qua các chu kỳ. Việc thực thi mã thành công chỉ chứng tỏ rằng mã đã chạy; nó không chứng minh rằng kết quả tính toán có giá trị đối với bối cảnh kinh doanh. Việc kiểm tra mức độ chính xác hoặc phạm vi dự kiến ​​của người đánh giá sẽ cung cấp quyền kiểm soát trước khi người tiêu dùng ở hạ nguồn nhận được kết quả đầu ra.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 13",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/13-workflow-integration-and-solution-design",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-14",
    "questionNumber": 14,
    "text": "You are assessing proposed evaluation criteria for a Claude-generated business brief. Which two criteria are valid for evaluating a brief produced by Claude? (Choose two.)  \n  \nEach correct answer represents part of the solution.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "factual accuracy of the claims made against the supplied source material"
      },
      {
        "key": "B",
        "text": "consistency of the writing style with the organization’s established tone guidelines"
      },
      {
        "key": "C",
        "text": "total word count of the output relative to industry benchmarks for business briefs"
      },
      {
        "key": "D",
        "text": "presence of an executive summary section as a structural completeness check"
      },
      {
        "key": "E",
        "text": "alignment of the output with the requested format and length constraints"
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Đánh giá đáng tin cậy về bản tóm tắt kinh doanh do LLM tạo đo lường grounding thực tế dựa trên độ trung thực của tài liệu được cung cấp và nhiệm vụ đối với các yêu cầu đầu ra được yêu cầu, bao gồm cả định dạng và độ dài. Các tiêu chí này cụ thể, có thể đo lường được và liên quan trực tiếp đến mục đích sử dụng của bản tóm tắt.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 14",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/14-output-evaluation-and-validation",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-15",
    "questionNumber": 15,
    "text": "You are a member of an operations team preparing input to summarize customer feedback. The feedback file combines public quotations with personal contact information.  \n  \nWhich preparation method is most appropriate?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Extract only the feedback content needed for the summary, redact or anonymize personal contact details, and submit the trimmed input."
      },
      {
        "key": "B",
        "text": "Submit the entire file unchanged so Claude has complete context."
      },
      {
        "key": "C",
        "text": "Replace the feedback content with the personal contact details and ask Claude to invent the missing feedback."
      },
      {
        "key": "D",
        "text": "Strip out the feedback content and submit only the personal contact details."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Chỉ nên cung cấp những phản hồi cần thiết cho bản tóm tắt, còn thông tin liên hệ cá nhân phải được xóa, biên tập lại hoặc ẩn danh. Điều này bảo tồn thông tin cần thiết cho nhiệm vụ đồng thời giảm thiểu việc lộ thông tin nhận dạng cá nhân không cần thiết.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 15",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/15-governance-risk-and-responsible-use",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-16",
    "questionNumber": 16,
    "text": "You are an operations lead and observe that a Project’s outputs have been drifting away from the team’s current expectations. Which maintenance action should be attempted first?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Review the Project’s instructions and reference materials against current standards."
      },
      {
        "key": "B",
        "text": "Switch the Project to a different Claude model in the hope it behaves better."
      },
      {
        "key": "C",
        "text": "Continue using the Project and accept the drift as the new baseline of behavior."
      },
      {
        "key": "D",
        "text": "Retire the Project and rebuild a new one from scratch with fresh content."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Hướng dẫn của dự án xác định cách Claude nên cư xử và phản hồi trong các cuộc trò chuyện của Dự án, trong khi kiến ​​thức dự án được tải lên sẽ cung cấp bối cảnh chung. Việc xem xét các hướng dẫn và tài liệu tham khảo đó dựa trên các tiêu chuẩn hiện tại sẽ giải quyết được nguyên nhân trực tiếp nhất, có thể kiểm soát được dẫn đến sai lệch đầu ra trước khi xem xét thay đổi mô hình hoặc xây dựng lại Dự án.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 16",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/16-configuration-and-knowledge-management",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-17",
    "questionNumber": 17,
    "text": "A manager is determining which changes to make during a memory-maintenance review for a long-running workflow. Which two actions most effectively support memory quality over time? (Choose two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Delete all memories as the maintenance action to ensure a clean slate, then allow Claude to rebuild context organically through subsequent workflow runs."
      },
      {
        "key": "B",
        "text": "Disable Memory entirely to eliminate the risk of stale entries surfacing in future workflow runs."
      },
      {
        "key": "C",
        "text": "Identify and edit or delete entries that are stale, inaccurate, or no longer relevant, and add context Claude has not automatically captured but the workflow continues to need."
      },
      {
        "key": "D",
        "text": "Leave all memories untouched on the basis that the workflow has been running consistently and no output quality issues have been reported."
      },
      {
        "key": "E",
        "text": "Export the current memories as a backup before making changes, so prior context can be restored if a maintenance edit unintentionally removes information the workflow still depends on."
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc bảo trì bộ nhớ hiệu quả bao gồm việc xem xét và cập nhật ngữ cảnh được lưu trữ để ngữ cảnh đó luôn cập nhật, chính xác và hữu ích; Các mục nhập lỗi thời hoặc không chính xác phải được chỉnh sửa hoặc xóa, đồng thời bổ sung ngữ cảnh còn thiếu cần thiết. Việc sao lưu các bộ nhớ hiện có trước khi thay đổi sẽ cung cấp đường dẫn khôi phục nếu một chỉnh sửa vô tình xóa bỏ ngữ cảnh mà quy trình làm việc vẫn yêu cầu. Hướng dẫn về bộ nhớ của Anthropic khuyên bạn nên thường xuyên xem xét và cập nhật bộ nhớ khi dự án phát triển.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 17",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/17-configuration-and-knowledge-management",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-18",
    "questionNumber": 18,
    "text": "An HR business partner is creating a long-running workspace in which a team handbook, a leveling guide, and a policies-FAQ document will be used across many separate chats by several team members.  \n  \nWhich Claude feature is intended for this use case?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Connect the team’s Google Drive folder where the three documents live, so the connector surfaces them inside each chat at the moment the chat needs them."
      },
      {
        "key": "B",
        "text": "Generate an Artifact containing the three documents, which gives the team an editable surface for the reference content that persists across chats."
      },
      {
        "key": "C",
        "text": "Create a Project, which provides a persistent workspace with its own knowledge base and custom instructions shared across chats and members."
      },
      {
        "key": "D",
        "text": "Attach all three documents to each chat as needed, since per-chat attachments give the chat direct access to the documents without additional setup."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Claude Projects cung cấp một không gian làm việc ổn định với cơ sở kiến ​​thức về dự án có nội dung tải lên được sử dụng trong các cuộc trò chuyện trong dự án đó. Các dự án cũng có thể được chia sẻ với các thành viên khác trong tổ chức theo kế hoạch Nhóm và Doanh nghiệp, đồng thời hướng dẫn dự án áp dụng cho tất cả các cuộc trò chuyện trong dự án.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 18",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/18-configuration-and-knowledge-management",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-19",
    "questionNumber": 19,
    "text": "You are an analyst verifying facts in a Claude-generated report. Two cited sources provide conflicting dates for the same event. Which approach is correct?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Choose the more recent date on the basis that later sources typically reflect updated or corrected information."
      },
      {
        "key": "B",
        "text": "Average the two conflicting dates and use the average."
      },
      {
        "key": "C",
        "text": "Locate a primary or authoritative source for the event and use the date that source confirms."
      },
      {
        "key": "D",
        "text": "Publish both dates without resolving the conflict and let the reader choose."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Nguồn chính thống hoặc đáng tin cậy là cơ sở vững chắc nhất để thiết lập ngày diễn ra sự kiện và giải quyết xung đột giữa các nguồn được trích dẫn. Chỉ riêng thời điểm gần đây thì không xác lập được độ chính xác, ngày tháng không thể được tính trung bình một cách có ý nghĩa và xung đột chưa được giải quyết sẽ không được coi là sự kiện đã được xác minh.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 19",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/19-output-evaluation-and-validation",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-20",
    "questionNumber": 20,
    "text": "A business analyst is transforming a stakeholder’s sticky-note request into a structured prompt for Claude. What is the correct sequence of conversion steps?  \n  \n1. Confirm the audience and the decision that the response needs to support.  \n2. Submit the structured prompt to Claude.  \n3. Identify the underlying task concealed in the sticky-note language.  \n4. Specify the required length, tone, and output format.  \n5. Add the supporting facts and constraints that are relevant to the task.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "3, 5, 1, 4, 2"
      },
      {
        "key": "B",
        "text": "1, 3, 5, 4, 2"
      },
      {
        "key": "C",
        "text": "3, 1, 5, 4, 2"
      },
      {
        "key": "D",
        "text": "2, 3, 1, 5, 4"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Lời nhắc có cấu trúc hữu ích sẽ tiến triển từ nhiệm vụ cơ bản và đối tượng hoặc quyết định dự kiến ​​đến bối cảnh và ràng buộc có liên quan, sau đó là các yêu cầu đầu ra rõ ràng như độ dài, âm sắc và định dạng. Lời nhắc hoàn chỉnh chỉ được gửi sau khi các thành phần đó được xác định. Hướng dẫn Anthropic cũng đề xuất hướng dẫn rõ ràng, bối cảnh phù hợp và kết quả mong đợi rõ ràng.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 20",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/20-prompting-and-task-execution",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-21",
    "questionNumber": 21,
    "text": "You are a bank manager who receives a request to use Claude as the sole decision-maker for customer credit-line approvals. Which response is most appropriate?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Accept the sole-decision-maker design because Claude can process applications faster than a human review team."
      },
      {
        "key": "B",
        "text": "Expand the design so Claude both evaluates applications and issues final approval notices to customers directly."
      },
      {
        "key": "C",
        "text": "Implement the design on a pilot basis and notify compliance only if issues arise during production use."
      },
      {
        "key": "D",
        "text": "Decline the sole-decision-maker design and propose Claude assisting analysts who retain decision authority."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc phê duyệt hạn mức tín dụng của khách hàng là các quyết định tài chính mang tính hệ quả, đòi hỏi sự giám sát có ý nghĩa của con người và cơ quan quyết định có trách nhiệm. Claude có thể hỗ trợ các nhà phân tích đánh giá đơn đăng ký, nhưng các nhà phân tích phải giữ quyền phê duyệt cuối cùng.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 21",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/21-governance-risk-and-responsible-use",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-22",
    "questionNumber": 22,
    "text": "A Claude associate is determining the bottleneck in a content workflow that is taking too long to publish. The workflow includes five steps: research, drafting, internal review, legal review, and publication. Cycle-time data is available for each step from the past month.  \n  \nWhich signal most directly identifies the bottleneck?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "the step where individual contributors report the highest workload based on their weekly status updates"
      },
      {
        "key": "B",
        "text": "the step most recently added to the workflow, based on the assumption that process changes introduce the most friction"
      },
      {
        "key": "C",
        "text": "the step with the longest queue or the largest backlog of items waiting to enter it"
      },
      {
        "key": "D",
        "text": "the step with the highest average cycle time per item across the past month’s runs"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Nút thắt cổ chai là bước quy trình có khả năng hạn chế thông lượng của toàn bộ quy trình làm việc. Trong quy trình làm việc tuần tự được đo bằng thời gian chu kỳ, bước có thời gian chu kỳ trung bình cao nhất là giai đoạn chậm nhất và hạn chế trực tiếp nhất tốc độ tiến triển và xuất bản các mục. Kích thước hàng đợi có thể hỗ trợ phát hiện đó nhưng đó là triệu chứng gián tiếp và có thể là tạm thời.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 22",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/22-troubleshooting-and-optimization",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-23",
    "questionNumber": 23,
    "text": "You are setting up a new Claude Project for a particular recurring workload. Which Project-configuration step should be completed first?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Define the purpose of the Project and the recurring tasks it must support."
      },
      {
        "key": "B",
        "text": "Invite collaborators to the Project and confirm the appropriate access levels."
      },
      {
        "key": "C",
        "text": "Add reference materials and instructions that the Project will rely on."
      },
      {
        "key": "D",
        "text": "Test the configured Project on a representative request from the workload."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Mục đích của Dự án và các nhiệm vụ định kỳ mà Dự án sẽ hỗ trợ sẽ thiết lập bối cảnh cho cấu hình của Dự án. Tài liệu tham khảo, hướng dẫn dự án, quyền cộng tác và thử nghiệm đại diện phải được lựa chọn và đánh giá theo khối lượng công việc đã xác định đó.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 23",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/23-configuration-and-knowledge-management",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-24",
    "questionNumber": 24,
    "text": "You are a business analyst assessing prompt drafts prepared by teammates.  \n  \nWhich two components should be included in a well-structured prompt for a business task? (Choose two.)  \n  \nEach correct answer represents part of the solution.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a friendly, conversational tone instruction to make responses feel more approachable"
      },
      {
        "key": "B",
        "text": "a comprehensive list of company products and services to provide the model with business context"
      },
      {
        "key": "C",
        "text": "a short personal anecdote to make the prompt feel more conversational"
      },
      {
        "key": "D",
        "text": "a clear statement of the task that the model must perform"
      },
      {
        "key": "E",
        "text": "relevant context such as the audience and the goal of the task"
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Lời nhắc kinh doanh hiệu quả chỉ định nhiệm vụ mà mô hình dự kiến ​​sẽ thực hiện và cung cấp bối cảnh có liên quan—chẳng hạn như đối tượng dự kiến ​​và mục tiêu nhiệm vụ—để phản hồi có thể nhắm mục tiêu, phù hợp và hữu ích.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 24",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/24-prompting-and-task-execution",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-25",
    "questionNumber": 25,
    "text": "A project lead is assessing a Claude-generated status report against the project charter. The report will be presented to a steering committee that expects an accurate status update against committed milestones.  \n  \nWhich group of criteria offers the strongest evaluation framework?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "length, formatting consistency, and tone appropriateness for a steering committee audience"
      },
      {
        "key": "B",
        "text": "accuracy of facts against the charter, completeness against required reporting fields, and relevance to the audience receiving the report"
      },
      {
        "key": "C",
        "text": "readability, narrative flow, and whether the report tells a coherent story about the project’s progress"
      },
      {
        "key": "D",
        "text": "match to the prior status report’s structure, since the steering committee expects consistent reporting from period to period"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Khung đánh giá mạnh mẽ cho báo cáo trạng thái dự án sẽ xác minh tính chính xác về mặt thực tế so với điều lệ, xác nhận rằng tất cả các trường báo cáo bắt buộc đều đã hoàn chỉnh và đánh giá xem nội dung đó có phù hợp với khán giả của ban chỉ đạo hay không. Các tiêu chí này trực tiếp hỗ trợ việc báo cáo đáng tin cậy về các mốc quan trọng đã cam kết; chất lượng trình bày và tính nhất quán về cấu trúc thì không.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 25",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/25-output-evaluation-and-validation",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-26",
    "questionNumber": 26,
    "text": "A senior manager is reviewing a colleague’s practice of never updating their team’s Project configurations because “if it works once, it works forever.” Which feedback is most appropriate?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Configurations should be updated on a fixed schedule regardless of whether the underlying policies and source documents have changed, since regular maintenance prevents drift."
      },
      {
        "key": "B",
        "text": "Configurations should be updated only when output quality visibly degrades, since proactive updates risk introducing regressions in working configurations."
      },
      {
        "key": "C",
        "text": "Configurations should be reviewed and updated periodically because policies, terminology, and source documents change over time, even when output quality has not visibly degraded."
      },
      {
        "key": "D",
        "text": "Configurations should be left alone if the team is satisfied with current outputs, and any required updates should be handled at the chat level rather than the Project level."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Cấu hình dự án phải được xem xét và cập nhật định kỳ vì các chính sách, thuật ngữ và tài liệu nguồn mà chúng dựa vào có thể thay đổi ngay cả trước khi có bất kỳ sự suy giảm rõ ràng nào về chất lượng đầu ra.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 26",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/26-configuration-and-knowledge-management",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-27",
    "questionNumber": 27,
    "text": "You are organizing connected data sources for a team and must finish the planning steps before authorizing a connection. Which two planning steps must be completed **BEFORE** authorizing a new Connector? *(Choose two.)*  \n  \nEach correct answer represents part of the solution.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Migrate every existing report off the prior data source onto the new Connector."
      },
      {
        "key": "B",
        "text": "Confirm the Connector is on the approved-vendor list maintained by IT."
      },
      {
        "key": "C",
        "text": "Confirm the data classification of the source and the team’s permission to use it."
      },
      {
        "key": "D",
        "text": "Train every team member on the new Connector through formal training sessions."
      },
      {
        "key": "E",
        "text": "Decommission any unused legacy connectors that may still be authorized."
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc ủy ​​quyền một trình kết nối yêu cầu xác thực quản trị: trình kết nối phải được bộ phận CNTT phê duyệt, đồng thời phải xác nhận việc phân loại nguồn dữ liệu cũng như quyền sử dụng trình kết nối đó. Những bước kiểm tra này thiết lập sự tuân thủ của nhà cung cấp và quyền truy cập dữ liệu trước khi kết nối được cấp phép.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 27",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/27-workflow-integration-and-solution-design",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-28",
    "questionNumber": 28,
    "text": "While preparing a stakeholder communication about a proposed Claude use case, a senior manager is applying the AI Fluency Framework **Description** competency.  \n  \nWhich framing most closely reflects Description principles for stakeholder communication?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Describe what Claude can reliably produce for the use case, the known limitations, and the human oversight that will remain in place, calibrated to the audience’s familiarity with AI."
      },
      {
        "key": "B",
        "text": "Overstate Claude’s capabilities to secure stakeholder support, even though Description principles require accurate framing of what Claude can and cannot reliably produce for the proposed use case."
      },
      {
        "key": "C",
        "text": "Omit the human oversight that will remain in place from the communication, even though Description principles require setting expectations that reflect the actual capability boundaries of the use case."
      },
      {
        "key": "D",
        "text": "Understate Claude’s capabilities to lower stakeholder expectations, even though Description principles require accuracy in both directions rather than systematic minimization of what Claude can produce."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Mô tả hiệu quả sử dụng cách giao tiếp rõ ràng, có mục đích để truyền đạt kết quả và hành vi dự kiến ​​của AI. Việc định hình chính xác các bên liên quan sẽ truyền đạt những gì Claude có thể tạo ra một cách đáng tin cậy, các ranh giới năng lực đã biết của nó và sự giám sát của con người vẫn còn, phù hợp với mức độ quen thuộc về AI của khán giả.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 28",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/28-prompting-and-task-execution",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-29",
    "questionNumber": 29,
    "text": "You are a Claude associate conducting an ethics review of a Claude-assisted deliverable before it is published. What is the correct sequence of review steps?  \n  \n1. Confirm that transparency requirements are satisfied for the audience that will receive the deliverable.  \n2. Record the review result and any modifications made.  \n3. Identify the audience and the deliverable’s potential impact on that audience.  \n4. Make focused revisions, or escalate when a concern needs greater authority to resolve.  \n5. Review the content for unsupported generalizations, fairness concerns, and accuracy issues.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "5, 3, 1, 4, 2"
      },
      {
        "key": "B",
        "text": "3, 1, 5, 4, 2"
      },
      {
        "key": "C",
        "text": "3, 5, 1, 4, 2"
      },
      {
        "key": "D",
        "text": "1, 3, 5, 4, 2"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Quá trình đánh giá đạo đức phải xác định ai có thể bị ảnh hưởng và cách thức, đánh giá nội dung để tìm các vấn đề về tính công bằng và chính xác, xác định mức độ minh bạch cần thiết cho đối tượng đó, giải quyết hoặc báo cáo mối lo ngại đã được xác định và lưu giữ hồ sơ về kết quả cuối cùng cũng như những thay đổi.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 29",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/29-governance-risk-and-responsible-use",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-30",
    "questionNumber": 30,
    "text": "You are a business analyst assessing a Claude-generated business case against the agreed acceptance criteria. What is the correct sequence of evaluation steps?  \n  \n1. Compare the business case against the source data and required topics.  \n2. Record gaps and inaccuracies for follow-up or correction.  \n3. Reconfirm the acceptance criteria for the business case.  \n4. Determine whether to use the business case, iterate, or escalate.  \n5. Read the business case from start to finish to form an initial impression.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "3, 1, 5, 2, 4"
      },
      {
        "key": "B",
        "text": "1, 3, 5, 2, 4"
      },
      {
        "key": "C",
        "text": "5, 3, 1, 2, 4"
      },
      {
        "key": "D",
        "text": "3, 5, 1, 2, 4"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Đánh giá hợp lý sẽ thiết lập các tiêu chí chấp nhận trước khi xem xét, đọc trường hợp kinh doanh hoàn chỉnh để biết ngữ cảnh, xác thực trường hợp đó dựa trên dữ liệu nguồn và nội dung được yêu cầu, ghi lại các thiếu sót và chỉ sau đó mới quyết định xem trường hợp đó có được chấp nhận hay không, cần lặp lại hay nên được chuyển lên cấp cao hơn.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 30",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/30-output-evaluation-and-validation",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-31",
    "questionNumber": 31,
    "text": "A project manager is turning a Claude-generated draft into a polished board memo. The board reviews the memo before the meeting and expects it to be scannable, factually verified, and consistent with the organization’s standard terminology.  \n  \nWhich set of refinements is most suitable?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Apply consistent headings, tighten wording for executive scanability, align terminology with the organization’s standards, and verify each fact against source data."
      },
      {
        "key": "B",
        "text": "Apply consistent headings, expand each section to give the board full context, and align terminology with the organization's standards."
      },
      {
        "key": "C",
        "text": "Tighten wording for executive scanability and verify each fact against source data; leave heading structure and terminology as written to preserve the draft’s voice."
      },
      {
        "key": "D",
        "text": "Apply consistent headings and align terminology with the organization’s standards; rely on Claude’s verification of facts, since the draft was generated from the source data."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Bản ghi nhớ của hội đồng quản trị phải sử dụng các tiêu đề nhất quán và từ ngữ ngắn gọn để ban điều hành xem xét nhanh chóng, tuân theo thuật ngữ tiêu chuẩn của tổ chức và xác minh mọi tuyên bố thực tế dựa trên dữ liệu nguồn. Nội dung do AI tạo ra không loại bỏ nhu cầu kiểm tra thực tế độc lập.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 31",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/31-output-evaluation-and-validation",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-32",
    "questionNumber": 32,
    "text": "You are an operations lead assessing prompting strategies proposed by teammates for different task types.  \n  \nWhich two strategies are suitable matches between the strategy and task type? (Choose two.)  \n  \nEach correct answer provides part of the solution.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "rigid templated prompting for early-stage creative naming and tagline ideation"
      },
      {
        "key": "B",
        "text": "open exploratory prompting for legal contract redlining against a clause library"
      },
      {
        "key": "C",
        "text": "open exploratory prompting for early-stage strategic brainstorming on a new market"
      },
      {
        "key": "D",
        "text": "rigid templated prompting for casual customer-feedback summarization with no schema"
      },
      {
        "key": "E",
        "text": "rigid templated prompting for monthly compliance reports against a fixed schema"
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Lời nhắc khám phá mở hỗ trợ tư duy khác biệt trong quá trình động não chiến lược ở giai đoạn đầu cho một thị trường mới. Lời nhắc theo khuôn mẫu cứng nhắc hỗ trợ các báo cáo tuân thủ hàng tháng có thể lặp lại phải tuân theo một sơ đồ cố định.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 32",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/32-prompting-and-task-execution",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-33",
    "questionNumber": 33,
    "text": "A learning specialist is setting up a Claude Project for a recurring course-design workflow.  \n  \nWhich configuration approach makes the best use of a Skill together with other Project elements?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Configure the Project with custom instructions that contradict the Skill’s documented purpose, creating ambiguity about which guidance Claude should follow within the recurring course-design workflow."
      },
      {
        "key": "B",
        "text": "Add the relevant Skill to the Project, upload the supporting knowledge sources, and write custom instructions that reference both the Skill and the knowledge."
      },
      {
        "key": "C",
        "text": "Upload the supporting knowledge sources but disable the relevant Skill, eliminating the packaged capability the workflow needs and forcing each chat to reconstruct the procedure manually."
      },
      {
        "key": "D",
        "text": "Add the Skill to the Project but omit the supporting knowledge sources and any custom instructions, so the Project lacks the reference content and persistent guidance the workflow requires."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Các kỹ năng cung cấp các quy trình chuyên biệt, có thể lặp lại, trong khi cơ sở kiến ​​thức của Dự án cung cấp bối cảnh tham chiếu liên tục và các hướng dẫn dự án cung cấp hướng dẫn cho các cuộc trò chuyện trong Dự án đó. Việc thêm Kỹ năng liên quan, nguồn kiến ​​thức hỗ trợ và hướng dẫn tùy chỉnh phù hợp sẽ kết hợp các khả năng bổ sung đó cho quy trình làm việc định kỳ.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 33",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/33-configuration-and-knowledge-management",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-34",
    "questionNumber": 34,
    "text": "An operations assistant is using Claude to help optimize an existing intake workflow. The assistant can access the current process documentation and recent cycle-time data.  \n  \nWhich activity makes the best use of Claude to support this process-optimization task?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Generate an optimized version of the intake process based on industry benchmarks, then compare it to the current process to identify gaps."
      },
      {
        "key": "B",
        "text": "Apply Claude to predict the cycle-time impact of each proposed change and rank them so the team can implement improvements in priority order."
      },
      {
        "key": "C",
        "text": "Map the current intake process, identify likely bottlenecks based on the cycle-time data, and propose optimization options for human review."
      },
      {
        "key": "D",
        "text": "Use Claude to interview each team member who works on the intake process and synthesize the interview output into a redesigned workflow."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Claude có thể phân tích tài liệu được cung cấp và dữ liệu về thời gian chu kỳ để lập sơ đồ quy trình làm việc hiện tại, giải quyết các điểm nghẽn có thể xảy ra và đề xuất các giải pháp thay thế tối ưu hóa. Đánh giá của con người vẫn cần thiết vì kết quả đầu ra của mô hình ngôn ngữ phải dựa trên bằng chứng được cung cấp và xác nhận trước khi đưa ra quyết định vận hành.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 34",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/34-workflow-integration-and-solution-design",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-35",
    "questionNumber": 35,
    "text": "An associate is responding to an executive who asserts that Claude will remove the need for any human review of customer-facing content. The executive approves the team’s AI-tools budget.  \n  \nWhich response is most appropriate?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Escalate the executive’s claim to a senior leader outside the team before responding directly, since the issue affects more than just the associate’s team."
      },
      {
        "key": "B",
        "text": "Pilot the executive’s proposal on a low-risk subset of customer-facing content first, and use the pilot results to make the case for retaining human review on higher-risk content."
      },
      {
        "key": "C",
        "text": "Defer to the executive’s authority and remove the human review step from customer-facing content, monitoring the results closely for the first several weeks."
      },
      {
        "key": "D",
        "text": "Acknowledge the productivity gains, then explain that human review remains essential on customer-facing content because of accuracy and brand risk, with specific examples."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Đầu ra của mô hình sáng tạo vẫn có thể chứa lỗi thực tế, vi phạm chính sách của tổ chức hoặc không đáp ứng các tiêu chuẩn thương hiệu. Đánh giá của con người vẫn là biện pháp kiểm soát quan trọng đối với tài liệu giao tiếp với khách hàng, đặc biệt khi độ chính xác và danh tiếng là vấn đề quan trọng; thừa nhận những lợi ích về hiệu quả đồng thời giải thích những rủi ro đó bằng các ví dụ cụ thể là phản ứng thích hợp của các bên liên quan. Hướng dẫn hỗ trợ khách hàng của Anthropic đề xuất các biện pháp bảo vệ, kiểm tra thực tế và xác minh rằng phản hồi của đại lý phù hợp với chính sách của công ty và các sự kiện đã biết.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 35",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/35-governance-risk-and-responsible-use",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-36",
    "questionNumber": 36,
    "text": "A support representative is setting up a Project to draft customer-facing apology emails following service outages. The current custom instructions tell Claude to “be empathetic and casual, keep it short, and offer a goodwill credit.” The customer-service team has reported that recent drafts are too brief, offer goodwill credits when policy does not permit them, and use contractions prohibited by the brand voice guide.  \n  \nWhich change best aligns the configuration with the use case?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Replace “be empathetic and casual” with “match the brand voice guide,” remove the instruction to offer goodwill credits, and let each draft determine its own length based on the incident."
      },
      {
        "key": "B",
        "text": "Move the brand voice guide and the goodwill-credit policy into the Project knowledge base and rely on the documents alone to govern tone, length, and credit decisions, without changing the custom instructions."
      },
      {
        "key": "C",
        "text": "Specify the brand voice attributes (empathetic, formal, no contractions), set a minimum length, and instruct Claude to recommend a goodwill credit only when the attached eligibility policy permits one."
      },
      {
        "key": "D",
        "text": "Keep the existing instructions and add a sentence telling Claude to consult the brand voice guide and the goodwill-credit policy that are attached to the Project knowledge base."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Hướng dẫn tùy chỉnh phải nêu rõ các thuộc tính giọng nói bắt buộc và các ràng buộc hoạt động: ngôn ngữ đồng cảm nhưng trang trọng với các từ rút gọn no, độ dài dự thảo tối thiểu và các đề xuất tín dụng thiện chí chỉ khi chính sách đủ điều kiện đính kèm cho phép chúng. Điều này ngăn chặn các kết quả đầu ra quá ngắn gọn, ngẫu nhiên và không nhất quán về chính sách.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 36",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/36-configuration-and-knowledge-management",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-37",
    "questionNumber": 37,
    "text": "You are an HR specialist assessing model selections made by colleagues for different tasks. Which two model choices are appropriate matches between the model and the task? (Choose two.)  \n  \nEach correct answer provides a complete solution.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a higher-capability model selected solely because it is the most expensive option"
      },
      {
        "key": "B",
        "text": "a higher-capability model for one-line keyword extraction at high request volume"
      },
      {
        "key": "C",
        "text": "a higher-capability model for complex multi-step legal reasoning under review"
      },
      {
        "key": "D",
        "text": "a lighter, faster model for nuanced multi-document strategic synthesis"
      },
      {
        "key": "E",
        "text": "a lighter, faster model for routine FAQ-style replies under tight latency budgets"
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Các mô hình có khả năng cao hơn phù hợp với các nhiệm vụ lý luận phức tạp, gồm nhiều bước, chẳng hạn như phân tích pháp lý, trong đó cần có chất lượng lý luận mạnh mẽ hơn và sự đánh giá của con người có thể xác thực kết quả. Các mô hình nhẹ hơn, nhanh hơn phù hợp với các phản hồi Câu hỏi thường gặp thường xuyên, được xác định rõ ràng khi ưu tiên độ trễ thấp. Việc lựa chọn mô hình phải dựa trên độ phức tạp của nhiệm vụ, nhu cầu chất lượng, chi phí và độ trễ chứ không chỉ dựa trên giá cả.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 37",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/37-product-and-model-selection",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-38",
    "questionNumber": 38,
    "text": "You are a project manager at Orinexa, Inc. You are selecting a Claude model for a new production workload and must finish the requirements steps before testing candidates.  \n  \nWhich two steps must be completed **BEFORE** testing candidate models on a representative sample? *(Choose two.)*  \n  \nEach correct answer represents part of the solution.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Define the quality bar, the latency tolerance, and the expected request volume."
      },
      {
        "key": "B",
        "text": "Retest the selected model whenever a new model version is released."
      },
      {
        "key": "C",
        "text": "Choose a candidate model based on the requirements profile and known capabilities."
      },
      {
        "key": "D",
        "text": "Promote the selected model to production traffic for the workload."
      },
      {
        "key": "E",
        "text": "Sign off on the production rollout plan with the platform and security teams."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc đánh giá mô hình sản xuất cần có các tiêu chí thành công có thể đo lường được và các ràng buộc về hoạt động—bao gồm chất lượng, độ trễ và khối lượng yêu cầu dự kiến—để có thể đánh giá kết quả dựa trên yêu cầu của khối lượng công việc. Các mô hình ứng cử viên cũng phải được đưa vào danh sách rút gọn theo hồ sơ yêu cầu đó và khả năng đã biết của chúng trước khi chúng được đánh giá trên lưu lượng truy cập đại diện. Hướng dẫn Anthropic yêu cầu xác định tiêu chí thành công có thể đo lường trước khi xây dựng đánh giá và hướng dẫn AWS mô tả điểm chuẩn của các mô hình ứng viên dựa trên bộ đánh giá theo khối lượng công việc cụ thể sau khi xác định các đặc tính độ trễ và chất lượng cần thiết.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 38",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/38-product-and-model-selection",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-39",
    "questionNumber": 39,
    "text": "You are a communications specialist who is preparing to explain Claude’s role in a workflow to several stakeholder groups and must finish the preparation activities before drafting messages.  \n  \nWhich two preparation activities must be completed **BEFORE** drafting the stakeholder messages? *(Choose two.)*  \n  \nEach correct answer represents part of the solution.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Archive the drafted messages in the corporate communications repository."
      },
      {
        "key": "B",
        "text": "Identify the stakeholder groups and what each group needs to understand"
      },
      {
        "key": "C",
        "text": "Define the key facts about Claude’s role and the boundaries that apply."
      },
      {
        "key": "D",
        "text": "Send the drafted messages out and gather feedback for revision."
      },
      {
        "key": "E",
        "text": "Schedule a follow-up forum to handle questions raised by the messages."
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Thông điệp hiệu quả dành cho các bên liên quan yêu cầu xác định từng nhóm bên liên quan và những gì họ cần hiểu, cùng với việc xác định các thông tin chính về vai trò của Claude và các ranh giới áp dụng. Những thông tin đầu vào này thiết lập nội dung thông điệp và định hình đối tượng trước khi bắt đầu soạn thảo.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 39",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/39-workflow-integration-and-solution-design",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-40",
    "questionNumber": 40,
    "text": "You are an operations manager creating a quick-reference card for a team.  \n  \nWhich description accurately characterizes the three Claude model tiers in general terms?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Haiku is the most capable model for the deepest reasoning, while Opus is the lightweight model for quick replies."
      },
      {
        "key": "B",
        "text": "All three models offer the same reasoning depth and differ only in response speed and cost."
      },
      {
        "key": "C",
        "text": "Haiku is fast and lightweight, Sonnet is the balanced default for most everyday work, and Opus is the most capable for complex reasoning at higher latency and cost."
      },
      {
        "key": "D",
        "text": "Sonnet is the fastest of the three models because its architecture is optimized for speed rather than reasoning depth."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Claude Haiku là cấp độ nhẹ, nhanh, chi phí thấp hơn; Claude Sonnet cân bằng giữa năng lực, hiệu quả và chi phí cho công việc chung; và Claude Opus là cấp có khả năng cao nhất dành cho những lý luận phức tạp, đòi hỏi khắt khe, với chi phí cao hơn và độ trễ thường lớn hơn.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 40",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/40-product-and-model-selection",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-41",
    "questionNumber": 41,
    "text": "You are a project manager having an extended planning conversation with Claude and need to keep it productive as it expands. Which two practices help keep a long planning conversation productive? (Choose two.)  \n  \nEach correct answer provides a complete solution.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Open a new thread for every minor follow-up question to keep threads short."
      },
      {
        "key": "B",
        "text": "Restate constraints and goals when the focus shifts to a new subtopic."
      },
      {
        "key": "C",
        "text": "Periodically summarize decisions made so far to compress the working state."
      },
      {
        "key": "D",
        "text": "Switch context aggressively between unrelated planning topics within one thread"
      },
      {
        "key": "E",
        "text": "Avoid summarizing so the model retains every original word it has produced."
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc xác nhận lại các mục tiêu và ràng buộc khi cuộc thảo luận chuyển sang một chủ đề phụ mới sẽ duy trì sự phù hợp với các yêu cầu của dự án. Các quyết định tóm tắt định kỳ sẽ duy trì trạng thái làm việc quan trọng ở dạng nhỏ gọn, giúp mô hình duy trì sự mạch lạc khi cuộc trò chuyện tiến đến giới hạn cửa sổ ngữ cảnh.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 41",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/41-prompting-and-task-execution",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-42",
    "questionNumber": 42,
    "text": "A finance manager is preparing to discuss a confidential pre-announcement figure with Claude. Which two settings most closely follow sound privacy practices for this discussion? (Choose two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Skip the privacy setting decision and proceed with default behavior, since the conversation will not explicitly instruct Claude to remember the figure."
      },
      {
        "key": "B",
        "text": "Disable Memory contribution for the conversation if Incognito mode is not used, so the confidential figure is not retained as persistent context that could surface in later unrelated sessions."
      },
      {
        "key": "C",
        "text": "Treat the conversation as appropriate for default Memory settings, since the figure will only be discussed briefly and is unlikely to be retained."
      },
      {
        "key": "D",
        "text": "Enable Memory contribution for the conversation so the context carries forward to support follow-up analysis in future sessions."
      },
      {
        "key": "E",
        "text": "Open the conversation in Incognito mode, which prevents the conversation from contributing to Memory and avoids persistent retention of the confidential pre-announcement figure across sessions."
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Không được phép để thông tin tài chính bí mật trở thành bối cảnh cố định có thể xuất hiện trong các phiên không liên quan sau này. Tắt tính năng đóng góp Bộ nhớ của cuộc trò chuyện khi sử dụng cuộc trò chuyện tiêu chuẩn hoặc sử dụng chế độ Ẩn danh để ngăn cuộc trò chuyện đóng góp vào Bộ nhớ. Anthropic cũng khuyên bạn nên thận trọng khi chia sẻ thông tin tài chính có tính nhạy cảm cao và tài liệu kinh doanh bí mật.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 42",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/42-governance-risk-and-responsible-use",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-43",
    "questionNumber": 43,
    "text": "A knowledge worker is explaining how feedback can be used to improve Claude-supported work over time.  \n  \nWhich description is the most accurate?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Capture specific feedback after each run, translate it into targeted prompt or workflow changes, and observe whether subsequent runs improve."
      },
      {
        "key": "B",
        "text": "Capture feedback only after several runs so patterns emerge from the volume of observations, then apply changes based on the patterns rather than any single run."
      },
      {
        "key": "C",
        "text": "Capture feedback as an aggregate quality score per run, since aggregate scores show whether quality is improving without requiring detail on individual issues."
      },
      {
        "key": "D",
        "text": "Capture general impressions after each run and apply them as broad prompt rewrites, since broad rewrites cover more potential issues than targeted changes."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Một vòng cải tiến hiệu quả sẽ ghi lại phản hồi cụ thể sau mỗi lần chạy, ánh xạ phản hồi đó tới các điều chỉnh quy trình làm việc hoặc lời nhắc được nhắm mục tiêu, đồng thời kiểm tra các lần chạy sau để cải thiện có thể đo lường được. Phản hồi cụ thể, kịp thời giúp đánh giá nguyên nhân của sự thay đổi và ảnh hưởng của nó đến chất lượng đầu ra dễ dàng hơn.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 43",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/43-output-evaluation-and-validation",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-44",
    "questionNumber": 44,
    "text": "You are a Claude associate investigating a recurring instance of poor output.  \n  \nWhich diagnostic-step sequence is correct?  \n  \n1. Develop a hypothesis about the prompt element most likely responsible for the deficiency.  \n2. Make one targeted change and observe its effect on the output.  \n3. Read the output from beginning to end and identify the specific deficiency.  \n4. Compare the deficient output with the prompt to find mismatches between the input and output.  \n5. Record the root cause and resolution for future reference.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "1, 3, 4, 2, 5"
      },
      {
        "key": "B",
        "text": "4, 3, 1, 2, 5"
      },
      {
        "key": "C",
        "text": "3, 1, 4, 2, 5"
      },
      {
        "key": "D",
        "text": "3, 4, 1, 2, 5"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc khắc phục sự cố đầu ra theo lời nhắc hiệu quả trước tiên sẽ xác định lỗi đầu ra chính xác và so sánh lỗi đó với lời nhắc để xác định lỗi không khớp có liên quan. Bằng chứng thu được ủng hộ giả thuyết nhân quả, giả thuyết này cần được kiểm tra bằng cách chỉ thay đổi một yếu tố mục tiêu. Ghi lại nguyên nhân đã được xác nhận và cách giải quyết sẽ bảo tồn kết quả để sử dụng lại sau này.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 44",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/44-troubleshooting-and-optimization",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-45",
    "questionNumber": 45,
    "text": "You have revised a Claude prompt eight times, and output quality has plateaued during the last four attempts. Which conclusion is most appropriate?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Iteration should stop and the current output should be accepted as-is regardless of remaining issues."
      },
      {
        "key": "B",
        "text": "Iteration should stop and the task should be abandoned without communicating to stakeholders."
      },
      {
        "key": "C",
        "text": "Iteration has reached diminishing returns and the next step is human review or a different approach."
      },
      {
        "key": "D",
        "text": "Iteration should continue indefinitely because more attempts always improve quality."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Khi nhiều lần lặp lại dấu nhắc liên tiếp no cải thiện chất lượng đầu ra lâu hơn thì các bản sửa đổi tiếp theo sẽ tạo ra hiệu quả giảm dần. Đánh giá của con người hoặc một cách tiếp cận khác là bước thích hợp tiếp theo.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 45",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/45-troubleshooting-and-optimization",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-46",
    "questionNumber": 46,
    "text": "You are a project manager assessing workflow steps by the amount of leverage Claude integration provides. Which workflow step generally delivers the greatest Claude leverage for a knowledge-work team?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "approving final deliverables for external publication without further review"
      },
      {
        "key": "B",
        "text": "negotiating contractual terms with external parties on behalf of the company"
      },
      {
        "key": "C",
        "text": "drafting and synthesizing across many sources for a downstream reviewer"
      },
      {
        "key": "D",
        "text": "making final personnel decisions about hiring, promotion, or termination"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Claude hữu ích nhất trong việc soạn thảo và tổng hợp thông tin từ nhiều nguồn, nơi nó có thể đẩy nhanh quá trình chuẩn bị tài liệu trong khi người đánh giá tiếp theo vẫn chịu trách nhiệm xác thực và đưa ra phán quyết cuối cùng.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 46",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/46-workflow-integration-and-solution-design",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-47",
    "questionNumber": 47,
    "text": "You are conducting a weekly feedback-and-adjustment cycle.  \n  \nWhat is the correct sequence of cycle steps?  \n  \n1. Turn feedback into one or two focused adjustments for the next cycle.  \n2. Run the following cycle and compare its results with the previous cycle.  \n3. Record the specific feedback received during the review.  \n4. Document what changed, the effect it created, and any unresolved issues.  \n5. Determine whether to keep iterating, change approaches, or escalate.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "2, 3, 1, 4, 5"
      },
      {
        "key": "B",
        "text": "1, 3, 2, 4, 5"
      },
      {
        "key": "C",
        "text": "3, 1, 2, 4, 5"
      },
      {
        "key": "D",
        "text": "3, 2, 1, 4, 5"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Vòng phản hồi khép kín ghi lại phản hồi đánh giá trước khi chọn các điều chỉnh có mục tiêu. Sau đó, chu kỳ đã điều chỉnh sẽ được chạy và đo lường theo chu kỳ trước đó; những thay đổi và kết quả của nó được ghi lại để có cơ sở quyết định xem nên lặp lại thêm, thay đổi hướng đi hay leo thang.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 47",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/47-workflow-integration-and-solution-design",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-48",
    "questionNumber": 48,
    "text": "You are a content creator. Claude’s initial response is accurate but uses inconsistent terminology that does not align with your organization’s glossary. Which iterative revision addresses this issue most directly?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Increase the requested length so the inconsistent terminology appears more often."
      },
      {
        "key": "B",
        "text": "Ask Claude to invent additional terms unrelated to the glossary."
      },
      {
        "key": "C",
        "text": "Remove the topic from the prompt to avoid the terminology issue entirely."
      },
      {
        "key": "D",
        "text": "Provide the organization's glossary and instruct Claude to use only those terms throughout the response."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc cung cấp bảng thuật ngữ của tổ chức và yêu cầu sử dụng độc quyền các thuật ngữ của tổ chức sẽ mang lại cho Claude vốn từ vựng đã được phê duyệt và một ràng buộc rõ ràng để áp dụng nó một cách nhất quán trong suốt câu trả lời.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 48",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/48-configuration-and-knowledge-management",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-49",
    "questionNumber": 49,
    "text": "You are a knowledge manager organizing source material within the context window for a lengthy Claude evaluation task.  \n  \nWhich two practices result in more effective use of the context window? (Choose two.)  \n  \nEach correct answer provides a complete solution.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Paste every available document into context regardless of relevance to the task."
      },
      {
        "key": "B",
        "text": "Mark each source clearly with delimiters so the model can attribute claims correctly."
      },
      {
        "key": "C",
        "text": "Repeat the same instruction at the start, middle, and end to reinforce it."
      },
      {
        "key": "D",
        "text": "Mix sources together in a single block so the model can synthesize them freely."
      },
      {
        "key": "E",
        "text": "Place the most reference-critical material near the beginning or end of context."
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Các dấu phân cách mang tính mô tả, rõ ràng, chẳng hạn như thẻ XML, phân tách các tài liệu, siêu dữ liệu, hướng dẫn và thông tin đầu vào, giảm sự mơ hồ và hỗ trợ ghi nguồn chính xác. Đối với công việc có ngữ cảnh dài, việc đặt tài liệu tham khảo dạng dài ở gần đầu và truy vấn nhiệm vụ ở gần cuối sẽ cải thiện hiệu suất; do đó, nội dung quan trọng về tham chiếu phải được đặt gần ranh giới ngữ cảnh thay vì bị chôn vùi ở giữa.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 49",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/49-configuration-and-knowledge-management",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-50",
    "questionNumber": 50,
    "text": "A knowledge worker regularly switches between Claude and another AI service while working on a long-running project.  \n  \nWhich Claude feature most directly minimizes repetitive context-setting across sessions?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Enable Memory and use the import capability to bring relevant context from the other AI service into Claude as a starting point for the project’s work."
      },
      {
        "key": "B",
        "text": "Rely on a single static Artifact pasted into each chat as the only continuity mechanism, ignoring the Memory feature that is purpose-built for retaining work-relevant context across sessions."
      },
      {
        "key": "C",
        "text": "Open every Claude session in Incognito mode, which prevents the conversation from contributing to Memory and therefore eliminates the cross-session continuity the project would benefit from."
      },
      {
        "key": "D",
        "text": "Disable Memory entirely and re-paste the same context paragraphs at the start of every Claude session, even though Memory is designed to retain that context across conversations automatically."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Bộ nhớ Claude giữ lại bối cảnh liên quan đến công việc để sử dụng trong các cuộc trò chuyện mới và quy trình nhập tích hợp của nó có thể mang bộ nhớ liên quan từ một dịch vụ AI khác vào Claude. Điều này làm giảm nhu cầu cung cấp nhiều lần cùng một bối cảnh dự án trong các phiên.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 50",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/50-configuration-and-knowledge-management",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-51",
    "questionNumber": 51,
    "text": "An HR business partner is setting up a new Project for recurring policy questions from managers. The Project will be used across many chats by several HR team members.  \n  \nWhich content should belong in the Project knowledge base?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "the current employee handbook plus prior versions of the handbook going back five years, so Claude can answer questions about how policies have changed"
      },
      {
        "key": "B",
        "text": "the current employee handbook, the leveling guide, the policies-FAQ, and every email the HR team has sent about policy in the past year, for additional context"
      },
      {
        "key": "C",
        "text": "the current employee handbook only, with the leveling guide and the policies-FAQ attached at the start of each chat as needed for that chat’s topic"
      },
      {
        "key": "D",
        "text": "the current employee handbook, the leveling guide, and the policies-FAQ document referenced across the Project’s chats"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Cơ sở kiến ​​thức về Dự án cung cấp bối cảnh cho tất cả các cuộc trò chuyện trong Dự án đó, do đó, cơ sở này phải chứa các tài liệu tham khảo hiện tại, có liên quan rộng rãi cần thiết nhiều lần cho các câu hỏi về chính sách của người quản lý: sổ tay nhân viên hiện tại, hướng dẫn thăng cấp và Câu hỏi thường gặp về chính sách. Các chính sách được thay thế và các email lịch sử ngẫu nhiên có thể đưa ra bối cảnh lỗi thời hoặc không cần thiết, trong khi các tài liệu tham khảo định kỳ không cần phải đính kèm riêng vào mỗi cuộc trò chuyện.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 51",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/51-configuration-and-knowledge-management",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-52",
    "questionNumber": 52,
    "text": "A knowledge worker is briefing a stakeholder group about Claude’s limitations. The stakeholders will use Claude for customer-facing work, where confident-sounding output containing errors could cause real harm.  \n  \nWhich limitation is most important to communicate clearly?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Claude’s responses vary across runs of the same prompt, so stakeholders should run each prompt several times and compare outputs before using any single response."
      },
      {
        "key": "B",
        "text": "Claude can produce confident-sounding output that contains unsupported claims, so human review remains essential for high-impact work."
      },
      {
        "key": "C",
        "text": "Claude can produce long, detailed responses that take time to read, so stakeholders should request shorter outputs when working under tight deadlines."
      },
      {
        "key": "D",
        "text": "Claude’s knowledge has a training cutoff, so stakeholders must verify any time-sensitive claims against current sources before using them."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Claude đôi khi có thể bị ảo giác, tạo ra văn bản không đúng thực tế hoặc không nhất quán với bối cảnh được cung cấp mặc dù nghe có vẻ hợp lý hoặc tự tin. Các biện pháp giảm thiểu ảo giác không thể loại bỏ rủi ro này, vì vậy thông tin quan trọng và kết quả đầu ra có tác động cao đến khách hàng cần có sự xem xét và xác minh của con người.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 52",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/52-governance-risk-and-responsible-use",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-53",
    "questionNumber": 53,
    "text": "You are a knowledge worker preparing material for a Claude prompt.  \n  \nWhich data type most clearly needs additional handling, such as redaction or anonymization, before it is included in the prompt?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "public press releases the company has already published"
      },
      {
        "key": "B",
        "text": "customer government identifiers and full payment-card numbers tied to named individuals"
      },
      {
        "key": "C",
        "text": "job titles taken from the company’s public organizational chart"
      },
      {
        "key": "D",
        "text": "generic product descriptions available on the company’s marketing site"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Số nhận dạng chính phủ và số thẻ thanh toán đầy đủ được liên kết với những người có thể nhận dạng được là dữ liệu tài chính và cá nhân nhạy cảm. Việc biên tập lại hoặc ẩn danh chúng sẽ làm giảm việc tiết lộ thông tin nhận dạng cá nhân một cách không cần thiết; tài liệu của công ty đại chúng và thông tin chung về sản phẩm công cộng không tạo ra rủi ro về quyền riêng tư như nhau.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 53",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/53-governance-risk-and-responsible-use",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-54",
    "questionNumber": 54,
    "text": "You are an operations lead who is integrating Claude into a workflow used by multiple people.  \n  \nWhich integration step should be completed first?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Identify where Claude adds value and where each handoff to a human occurs."
      },
      {
        "key": "B",
        "text": "Pilot the integrated workflow with a small group on representative work."
      },
      {
        "key": "C",
        "text": "Iterate the integrated workflow based on the findings from the pilot."
      },
      {
        "key": "D",
        "text": "Document the integrated workflow and onboard the rest of the team to it."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Quy trình làm việc của con người-AI trước tiên phải xác định các nhiệm vụ mà Claude mang lại giá trị và các điểm mà tại đó trách nhiệm được chuyển cho con người. Những ranh giới đó thiết lập quy trình làm việc mà sau này có thể được thử nghiệm, tinh chỉnh từ kết quả thử nghiệm, ghi lại và triển khai. Hướng dẫn của Anthropic cũng nhấn mạnh đến việc luôn cập nhật thông tin cho con người và xác định các cổng tổ chức xung quanh công việc tổng đài.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 54",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/54-workflow-integration-and-solution-design",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-55",
    "questionNumber": 55,
    "text": "A Claude associate is assessing a proposed use case in which Claude would make final hiring decisions without any human review, using the AI Fluency Framework’s Delegation competency.  \n  \nWhich classification most accurately reflects Delegation principles?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Inappropriate for full AI delegation, because hiring decisions involve human judgment, accountability, and consequences that Delegation criteria reserve for human ownership rather than autonomous AI execution."
      },
      {
        "key": "B",
        "text": "Appropriate with light human review applied only to a sample of decisions, even though Delegation criteria reserve final hiring decisions for human ownership rather than sample-based oversight after the fact."
      },
      {
        "key": "C",
        "text": "Appropriate for full AI delegation, on the basis that processing speed outweighs the human judgment, accountability, and consequence considerations that Delegation criteria require for final hiring decisions."
      },
      {
        "key": "D",
        "text": "Inappropriate only because of system reliability concerns rather than accountability, even though Delegation criteria classify final hiring decisions as requiring human ownership regardless of system performance."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Ủy quyền bao gồm việc phân bổ công việc một cách chiến lược giữa con người và AI dựa trên tính chất của nhiệm vụ, khả năng và giới hạn của hệ thống cũng như nhu cầu về kiến ​​thức chuyên môn và khả năng phán đoán của con người. Các quyết định tuyển dụng cuối cùng mang tính chất phán đoán và trách nhiệm giải trình của con người, vì vậy chúng đòi hỏi quyền sở hữu của con người thay vì việc thực thi AI tự chủ.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 55",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/55-governance-risk-and-responsible-use",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-56",
    "questionNumber": 56,
    "text": "You are assessing a Claude output that seems to include hallucinated content. Which response step should be taken first when a hallucination is suspected?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Discard the entire output and regenerate the output with a fresh prompt."
      },
      {
        "key": "B",
        "text": "Document the hallucination pattern in the team’s risk register for future reference."
      },
      {
        "key": "C",
        "text": "Notify the user community that the output contains a hallucinated claim."
      },
      {
        "key": "D",
        "text": "Pinpoint the specific claim that appears to be unsupported by available evidence."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Ảo giác là một khẳng định thiếu bằng chứng thực tế hoặc mâu thuẫn với bằng chứng đáng tin cậy. Việc xác định chính xác xác nhận quyền sở hữu không được hỗ trợ sẽ thiết lập những gì phải được xác minh, sửa chữa, rút ​​lại hoặc chuyển lên cấp cao hơn; tái tạo, ghi lại rủi ro và thông báo cho người dùng là những hành động tiếp theo. Anthropic khuyên bạn nên xác minh các tuyên bố bằng các trích dẫn và nguồn hỗ trợ, đồng thời rút lại khiếu nại khi có thể tìm thấy trích dẫn hỗ trợ no.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 56",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/56-output-evaluation-and-validation",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-57",
    "questionNumber": 57,
    "text": "You are optimizing a recurring Claude workflow and must finish the diagnostic steps before modifying the workflow. Which two diagnostic steps must be completed **BEFORE** changing the recurring workflow? (Choose two.)  \n  \nEach correct answer represents part of the solution.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Notify executive leadership of the projected savings from the optimization."
      },
      {
        "key": "B",
        "text": "Identify the steps that contribute most to time, cost, or quality issues."
      },
      {
        "key": "C",
        "text": "Deploy the updated workflow across the team and monitor for adoption issues."
      },
      {
        "key": "D",
        "text": "Measure the current workflow's quality, time, and cost across recent runs."
      },
      {
        "key": "E",
        "text": "Document the revised workflow steps and update the team’s standard operating procedures."
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Tối ưu hóa quy trình làm việc yêu cầu đo lường cơ bản về chất lượng, thời gian và chi phí hiện tại, cùng với việc xác định các bước tạo ra vấn đề lớn nhất về thời gian, chi phí hoặc chất lượng. Những chẩn đoán đó thiết lập những gì cần thay đổi và cung cấp cơ sở để đánh giá xem liệu quy trình làm việc được sửa đổi có cải thiện kết quả hay không.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 57",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/57-troubleshooting-and-optimization",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-58",
    "questionNumber": 58,
    "text": "Before sharing a Claude-generated brief, an analyst applies the AI Fluency Framework’s Discernment competency to assess it. Which review most accurately reflects Discernment principles?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Accept the brief on the basis that it reads fluently and the subject matter aligns with the analyst’s professional knowledge of the topic."
      },
      {
        "key": "B",
        "text": "Skip the source material check during review and rely on overall tone and logical flow as proxies for factual accuracy."
      },
      {
        "key": "C",
        "text": "Review the opening paragraph and the conclusion of the brief, since these sections typically reflect the quality of the full document."
      },
      {
        "key": "D",
        "text": "Conduct a systematic check of the brief against the task requirements, source material, and professional standards before sharing it."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Sự sáng suốt bao gồm việc đánh giá một cách chu đáo và nghiêm túc các kết quả đầu ra của AI về chất lượng, bao gồm độ chính xác, mức độ liên quan, tính mạch lạc và sự phù hợp. Việc kiểm tra bản tóm tắt đầy đủ dựa trên các yêu cầu, nguồn cơ bản và tiêu chuẩn chuyên môn sẽ cung cấp bằng chứng cần thiết trước khi nó được chia sẻ.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 58",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/58-output-evaluation-and-validation",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-59",
    "questionNumber": 59,
    "text": "You are using Claude to redesign an employee onboarding workflow and must finish the high-level decomposition steps before defining detailed artifacts.  \n  \nWhich two decomposition steps must be completed **before** specifying the exact email content and schedule? (Choose two.)  \n  \nEach correct answer represents part of the solution.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Pilot the onboarding workflow with a small cohort of new hires."
      },
      {
        "key": "B",
        "text": "Identify the major phases of the onboarding experience."
      },
      {
        "key": "C",
        "text": "Negotiate the onboarding budget with the finance department."
      },
      {
        "key": "D",
        "text": "Define the overall objective of the onboarding experience."
      },
      {
        "key": "E",
        "text": "Roll out the onboarding workflow to every new hire across the company."
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Quá trình phân tách cấp cao hợp lý bắt đầu bằng cách xác định mục tiêu tổng thể của trải nghiệm làm quen và xác định các giai đoạn chính của trải nghiệm đó. Những quyết định đó thiết lập cấu trúc và mục đích mà các tạo phẩm chi tiết, chẳng hạn như lập kế hoạch và sao chép email chính xác, phải tuân theo.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 59",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/59-workflow-integration-and-solution-design",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-60",
    "questionNumber": 60,
    "text": "You are refining a prompt across several iterations. With every change, the output drifts farther from the requested template. Which step is most appropriate?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Discard all prior versions and start with no record of what worked."
      },
      {
        "key": "B",
        "text": "Continue making large simultaneous changes until the output happens to align."
      },
      {
        "key": "C",
        "text": "Revert to the version of the prompt that produced the closest match and adjust from that baseline."
      },
      {
        "key": "D",
        "text": "Stop iterating and accept the most off-target version."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Tính năng sàng lọc nhanh chóng có hiệu quả nhất khi nó tiếp tục từ phiên bản đáp ứng tốt nhất mẫu được yêu cầu. Đường cơ sở đó bảo tồn các yếu tố thành công và cho phép điều chỉnh nhỏ, có kiểm soát thay vì gộp lại.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 60",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/60-output-evaluation-and-validation",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-61",
    "questionNumber": 61,
    "text": "You are assessing items proposed for inclusion in a Project that supports policy summaries.  \n  \nWhich two items are suitable to include in the Project? (Choose two.)  \n  \nEach correct answer represents part of the solution.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "the summary format and the audience expectations the summaries must meet"
      },
      {
        "key": "B",
        "text": "the current policy library that the summaries are drawn from"
      },
      {
        "key": "C",
        "text": "presentation slides from a recent team training session on internal communication standards"
      },
      {
        "key": "D",
        "text": "active client case files maintained by a separate legal team for a different workstream"
      },
      {
        "key": "E",
        "text": "employee onboarding records used in a separate HR workflow managed by the same team"
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Hướng dẫn của dự án có thể xác định cách ChatGPT sẽ phản hồi, bao gồm cả định dạng bắt buộc và kỳ vọng của đối tượng. Dự án cũng có thể chứa các tài liệu tham khảo mà ChatGPT sử dụng để tạo ra kết quả sáng suốt, vì vậy thư viện chính sách hiện tại nằm trong quy trình làm việc tóm tắt chính sách. Các tài liệu đào tạo, trường hợp pháp lý và nhân sự không liên quan nằm ngoài quy trình làm việc đó và không được thêm vào làm bối cảnh của nó.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 61",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/61-configuration-and-knowledge-management",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-62",
    "questionNumber": 62,
    "text": "You are categorizing structural defects in Claude output by how much they undermine clarity. Which structural defect most seriously impairs the output’s clarity?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "A single subheading is shorter than the other subheadings in the document."
      },
      {
        "key": "B",
        "text": "Two adjacent paragraphs present the same information using inconsistent terminology."
      },
      {
        "key": "C",
        "text": "Typographic inconsistencies appear throughout multiple sections of the document."
      },
      {
        "key": "D",
        "text": "The main conclusion contradicts the evidence presented in the body."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Một kết luận chính mâu thuẫn với bằng chứng có trong cơ thể sẽ tạo ra sự mâu thuẫn logic cơ bản. Nó khiến người đọc không thể xác định tuyên bố nào được ủng hộ, làm suy yếu tính rõ ràng và độ tin cậy của thông điệp trọng tâm trong đầu ra.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 62",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/62-output-evaluation-and-validation",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-63",
    "questionNumber": 63,
    "text": "As a communications manager, you are validating a Claude-generated newsletter that contains a specific industry-growth figure. The figure is reported in three trade-press articles, but none links to the underlying study.  \n  \nWhich validation step is appropriate?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Accept the figure because three trade-press articles repeat it."
      },
      {
        "key": "B",
        "text": "Remove the source attribution and present the figure as common knowledge."
      },
      {
        "key": "C",
        "text": "Locate the original study referenced by the trade-press articles and verify the figure in the primary source."
      },
      {
        "key": "D",
        "text": "Use the highest figure across the three articles to make the newsletter more compelling."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Một con số lặp lại trên các bài báo thương mại thứ cấp có thể bắt nguồn từ cùng một tuyên bố chưa được xác minh. Việc xác thực nó đòi hỏi phải xác định được nghiên cứu cơ bản và xác nhận số liệu, phương pháp, phạm vi và bối cảnh của nó trong nguồn chính.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 63",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/63-output-evaluation-and-validation",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-64",
    "questionNumber": 64,
    "text": "You are preparing a document with mixed-sensitivity content for use with Claude.  \n  \nWhich data-handling action should be completed first?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Redact sensitive fields and replace them with appropriate placeholders."
      },
      {
        "key": "B",
        "text": "Classify the content of the document and identify which fields are sensitive."
      },
      {
        "key": "C",
        "text": "Submit the redacted document to Claude for the intended task."
      },
      {
        "key": "D",
        "text": "Review the redacted document with a peer to confirm the redaction is complete."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Các trường nhạy cảm phải được xác định thông qua quá trình phân loại nội dung trước khi có thể loại bỏ hoặc thay thế một cách an toàn. Điều này cũng ủng hộ nguyên tắc ít đặc quyền nhất: Claude không được nhận thông tin nhạy cảm mà nó không cần.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 64",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/64-governance-risk-and-responsible-use",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-65",
    "questionNumber": 65,
    "text": "A finance consultant is revising a Claude-generated narrative for a quarterly investor update. Investors have a fixed time window for the call and expect the headline result and forward outlook to be made clear early.  \n  \nWhich adaptation is most suitable for this audience?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Lead with the quarter’s operational highlights, present the financial result in the middle for context, and close with the forward outlook."
      },
      {
        "key": "B",
        "text": "Lead with the forward outlook, since investors are most interested in what comes next, and present the headline result and drivers afterward."
      },
      {
        "key": "C",
        "text": "Lead with the headline result, present the key drivers concisely, and close with the forward outlook."
      },
      {
        "key": "D",
        "text": "Lead with a chronological recap of the quarter’s events, present the headline result at the natural end of the recap, and conclude with the forward outlook."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Thông tin liên lạc hàng quý với nhà đầu tư nên ưu tiên sớm kết quả tài chính tiêu đề, sau đó là phần giải thích ngắn gọn về các động lực chính và triển vọng tương lai. Cấu trúc này làm cho thông tin liên quan đến quyết định trở nên rõ ràng nhất trong một khoảng thời gian giới hạn.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 65",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/65-prompting-and-task-execution",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-66",
    "questionNumber": 66,
    "text": "A knowledge worker is describing the purpose of an organizational AI governance framework to a colleague.  \n  \nWhich description is the most accurate?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "A governance framework defines approved tools, allowed data, required reviews, and reporting paths so AI is used consistently and accountably."
      },
      {
        "key": "B",
        "text": "A governance framework lists the AI tools the organization licenses and the cost of each, so users can pick the most cost-effective tool for each task."
      },
      {
        "key": "C",
        "text": "A governance framework defines the training every employee must complete before using AI tools, with separate requirements for each tool the organization licenses."
      },
      {
        "key": "D",
        "text": "A governance framework documents the AI policies the organization is legally required to adopt, focusing on regulatory compliance rather than day-to-day use."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Khung quản trị AI đặt ra các chính sách, quy trình, biện pháp kiểm soát, vai trò và trách nhiệm giải trình của tổ chức đối với AI trong suốt quá trình sử dụng. Nó có thể xác định các công cụ và dữ liệu được phép, xem xét các yêu cầu cũng như đường dẫn báo cáo hoặc báo cáo để AI được sử dụng một cách nhất quán, có trách nhiệm và có trách nhiệm. NIST xác định quản trị là thiết lập các chính sách, thủ tục và biện pháp kiểm soát minh bạch, với các vai trò và đường dây liên lạc được ghi lại để quản lý rủi ro AI.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 66",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/66-governance-risk-and-responsible-use",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-67",
    "questionNumber": 67,
    "text": "A senior project coordinator has been asked to use Claude to create an end-of-year report covering finance, operations, and customer outcomes. The three areas have distinct data owners and separate source documents.  \n  \nWhich decomposition approach is most likely to result in a strong report?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Define the report goals, gather inputs per section, draft each section in its own prompt, then synthesize the executive summary from the drafted sections."
      },
      {
        "key": "B",
        "text": "Draft the executive summary first to anchor the report's narrative, then draft each section so it supports the summary already written."
      },
      {
        "key": "C",
        "text": "Draft the three sections in parallel, each using a section-specific prompt, then concatenate and lightly edit the outputs into the final report."
      },
      {
        "key": "D",
        "text": "Prompt Claude once with all source documents and request the full report, including the executive summary, in a single pass."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Một báo cáo đa chức năng mạnh mẽ được phát triển bằng cách xác định mục tiêu, thu thập thông tin đầu vào thích hợp cho từng phần, soạn thảo các phần đó với lời nhắc tập trung và rút ra bản tóm tắt điều hành từ các phần đã hoàn thành. Điều này hỗ trợ khả năng truy xuất nguồn gốc của từng khu vực và đảm bảo rằng bản tóm tắt phản ánh những phát hiện thực tế của báo cáo.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 67",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/67-prompting-and-task-execution",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-68",
    "questionNumber": 68,
    "text": "A customer-success associate is preparing a prompt asking Claude to summarize a customer issue from a case file. The case file contains the customer’s full government identifier, home address, name, account number, and a description of the issue. The associate needs a summary focused on the issue.  \n  \nWhich approach is most appropriate?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Submit the full case file and include an instruction telling Claude not to reference the government identifier or the home address in the summary."
      },
      {
        "key": "B",
        "text": "Replace the government identifier with the customer’s name and the home address with the account number, since names and account numbers are less sensitive than identifiers and addresses."
      },
      {
        "key": "C",
        "text": "Remove or redact the government identifier and the home address before submitting the prompt, since neither is necessary for a summary of the issue."
      },
      {
        "key": "D",
        "text": "Submit only the description of the issue and add the customer’s name for context, since the description plus a name is sufficient to produce a summary."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Giảm thiểu dữ liệu yêu cầu chỉ cung cấp thông tin cần thiết cho nhiệm vụ dự định. Vì bản tóm tắt đề cập đến vấn đề nên mã nhận dạng do chính phủ cấp và địa chỉ nhà riêng là những dữ liệu nhạy cảm không cần thiết và cần được xóa hoặc biên tập lại trước khi gửi.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 68",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/68-governance-risk-and-responsible-use",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-69",
    "questionNumber": 69,
    "text": "You are a process consultant incorporating Claude into an existing weekly workflow. Which sequence of integration steps is correct?  \n  \n1. Pilot the integrated workflow with a small group and collect feedback.  \n2. Document the current workflow’s steps, owners, and decision points.  \n3. Update the documented workflow and deploy it to the broader team.  \n4. Identify the steps where Claude can augment work and where humans must remain.  \n5. Define the inputs Claude requires, the outputs Claude provides, and the hand-offs around each step.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "2, 4, 5, 1, 3"
      },
      {
        "key": "B",
        "text": "2, 5, 4, 1, 3"
      },
      {
        "key": "C",
        "text": "4, 2, 5, 1, 3"
      },
      {
        "key": "D",
        "text": "1, 2, 4, 5, 3"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc tích hợp quy trình làm việc nên bắt đầu bằng việc ghi lại quy trình hiện tại để hiểu rõ quyền sở hữu và các điểm quyết định của quy trình đó. Điều đó cho phép phân bổ hợp lý công việc do Claude hỗ trợ và kiểm soát bởi con người, sau đó là thông số kỹ thuật rõ ràng về đầu vào, đầu ra và bàn giao. Một chương trình thí điểm có giới hạn sẽ xác thực quy trình tích hợp và thu thập phản hồi trước khi sửa đổi quy trình làm việc và triển khai rộng rãi. Hướng dẫn tương tự của Anthropic cũng khuyến nghị chia tương tác thành các nhiệm vụ, xác định tiêu chí thành công và đánh giá nó một cách có hệ thống trước khi triển khai sản xuất.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 69",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/69-workflow-integration-and-solution-design",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-70",
    "questionNumber": 70,
    "text": "A customer-success team member reviews a Claude-generated customer health-check report against the agreed deliverable list. The report addresses all five required topics, but its renewal-risk section identifies only one risk factor, whereas the deliverable specification requires renewal risk to be evaluated across pricing, product fit, and stakeholder change.  \n  \nWhich conclusion is best supported?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "The report’s completeness cannot be assessed from the deliverable specification alone; the customer should review the output and confirm whether the renewal-risk depth is sufficient."
      },
      {
        "key": "B",
        "text": "The report does not meet the deliverable specification because a section that addresses only one of three required risk dimensions counts as a missing section."
      },
      {
        "key": "C",
        "text": "The report meets the deliverable specification because all five required topics appear and the renewal-risk section is present in the output."
      },
      {
        "key": "D",
        "text": "The report meets the topic-level requirements but the renewal-risk section is under-scoped against the specification and should be expanded before delivery."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Sản phẩm có thể phân phối có thể đáp ứng sự hiện diện của từng chủ đề được yêu cầu trong khi vẫn không đáp ứng yêu cầu về chiều sâu của từng chủ đề cụ thể. Rủi ro gia hạn phải bao gồm giá cả, sự phù hợp của sản phẩm và sự thay đổi của các bên liên quan; chỉ giải quyết được một yếu tố khiến phần đó nằm dưới phạm vi và yêu cầu mở rộng trước khi phân phối.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 70",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/70-output-evaluation-and-validation",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-71",
    "questionNumber": 71,
    "text": "An analyst has been asked to calculate summary statistics from an uploaded sales-data file and create a chart for a weekly report. Which output approach is the best fit for this task?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Ask Claude to estimate the summary statistics from a brief preview of the file, accepting unverified figures rather than running the calculations against the full uploaded dataset."
      },
      {
        "key": "B",
        "text": "Produce a written placeholder for the chart in the chat response without generating the actual visualization, leaving the weekly report without the visual output it requires."
      },
      {
        "key": "C",
        "text": "Request a narrative description of the data in the chat response without computing values, leaving the summary statistics and the chart unproduced and the weekly report incomplete."
      },
      {
        "key": "D",
        "text": "Use Code Execution to perform the calculations and generate the chart, then verify the computed results against the source data before sharing the output."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Thực thi mã có thể tính toán số liệu thống kê từ tập dữ liệu đầy đủ đã tải lên, tạo biểu đồ bắt buộc và hỗ trợ xác minh kết quả tính toán dựa trên dữ liệu nguồn cơ bản trước khi chúng được chia sẻ.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 71",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/71-workflow-integration-and-solution-design",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-72",
    "questionNumber": 72,
    "text": "You are preparing system-level instructions for a Project that supports recurring writing tasks.  \n  \nWhich action should be completed first when creating the system-level instructions?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Refine the drafted instructions based on observed gaps from validation runs."
      },
      {
        "key": "B",
        "text": "Validate the drafted instructions against representative requests for the Project."
      },
      {
        "key": "C",
        "text": "Define the purpose of the Project and the boundaries the instructions must respect."
      },
      {
        "key": "D",
        "text": "Distribute the finalized instructions to collaborators on the Project."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Các hướng dẫn hiệu quả ở cấp hệ thống bắt đầu bằng việc thiết lập mục đích của Dự án và các ranh giới chi phối hành vi của Dự án. Những yêu cầu đó xác định hướng dẫn nên hướng dẫn gì; việc soạn thảo, xác nhận, sàng lọc và phân phối chỉ có thể xảy ra sau khi nền tảng đó được xác định. Hướng dẫn dự án cung cấp hướng dẫn dành riêng cho dự án về cách ChatGPT sẽ trợ giúp trong Dự án.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 72",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/72-configuration-and-knowledge-management",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-73",
    "questionNumber": 73,
    "text": "A business analyst is asked to use Claude to extract requirements from a recorded stakeholder-interview transcript. The transcript is about 90 minutes long and addresses multiple topics.  \n  \nWhich approach is most likely to yield usable structured output?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Provide the transcript along with a structured prompt that requests must-haves, nice-to-haves, open questions, and conflicts as separate sections."
      },
      {
        "key": "B",
        "text": "Provide the transcript and ask Claude to produce a single ranked list of requirements, since a single list is easier for stakeholders to review than separate sections."
      },
      {
        "key": "C",
        "text": "Provide the transcript and ask Claude to summarize it; extract requirements from the summary in a second pass since two passes catch more detail."
      },
      {
        "key": "D",
        "text": "Provide the transcript and ask Claude to produce a chronological list of every statement that contains a verb, then classify each statement as a requirement or not."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc yêu cầu rõ ràng các danh mục riêng biệt cho yêu cầu bắt buộc, yêu cầu tùy chọn, câu hỏi chưa được giải quyết và xung đột sẽ mang lại cho mô hình một cấu trúc đầu ra rõ ràng và duy trì sự khác biệt cần thiết cho việc phân tích yêu cầu. Hướng dẫn định dạng rõ ràng, cụ thể giúp cải thiện khả năng kiểm soát định dạng phản hồi của Claude.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 73",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/73-prompting-and-task-execution",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-74",
    "questionNumber": 74,
    "text": "You received an imprecise request to “look at our pricing.” After discovery, the objective is confirmed: create a structured competitor-pricing summary the team can act on, rather than develop new pricing ideas.  \n  \nWhich strategy best suits the clarified task?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Use a divergent brainstorming approach to generate a wide range of possible competitor-pricing observations, then narrow to the most likely ones."
      },
      {
        "key": "B",
        "text": "Use a comparative analysis strategy that contrasts the company’s pricing against a single named competitor, since pairwise comparison produces the clearest output."
      },
      {
        "key": "C",
        "text": "Use a research strategy that gathers structured information about competitor pricing, names sources, and notes confidence in each finding."
      },
      {
        "key": "D",
        "text": "Use an open conversational strategy that explores competitor pricing iteratively across several prompts, allowing the structure to emerge from the conversation."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Bản tóm tắt về giá của đối thủ cạnh tranh có cấu trúc yêu cầu nghiên cứu thu thập thông tin về giá có thể so sánh được, xác định nguồn cho từng phát hiện và ghi lại mức độ tin cậy hoặc không chắc chắn để nhóm có thể đánh giá mức độ hữu dụng của thông tin. Đây là nhiệm vụ thu thập và tổng hợp bằng chứng chứ không phải động não, so sánh một đối thủ cạnh tranh bị hạn chế hoặc cuộc trò chuyện mở.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 74",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/74-prompting-and-task-execution",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-75",
    "questionNumber": 75,
    "text": "You are a customer-success manager deciding whether to escalate a Claude-generated response. Which factor most strongly increases the output’s impact and warrants escalation before it is used externally?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "The response is an internal draft summarizing the associate’s notes from a customer call for their own reference."
      },
      {
        "key": "B",
        "text": "The response is a casual rephrasing of an internal team status update."
      },
      {
        "key": "C",
        "text": "The response is a brief internal announcement about an upcoming team all-hands meeting."
      },
      {
        "key": "D",
        "text": "The response is an unchanged draft for a paying customer that includes a service-level commitment."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Một bản dự thảo không thay đổi hướng tới khách hàng đưa ra cam kết ở cấp độ dịch vụ có thể tạo ra lời hứa bên ngoài kèm theo những hậu quả về hợp đồng, hoạt động và tài chính. Tác động trực tiếp của nó đối với khách hàng trả tiền khiến cho việc đánh giá và báo cáo của con người trở nên phù hợp trước khi sử dụng. Anthropic khuyên chuyên gia có trình độ nên xem xét trước khi phổ biến nội dung hoặc quyết định nhạy cảm cho người tiêu dùng.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 75",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/75-governance-risk-and-responsible-use",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-76",
    "questionNumber": 76,
    "text": "An HR associate is getting ready to use Claude for a sensitive personnel matter. The organization’s AI policy expressly says that information concerning ongoing investigations must not be entered into AI tools.  \n  \nWhich response most closely follows the policy?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Enter the investigation-related information into Claude only after the investigation closes, since the policy applies during the investigation period."
      },
      {
        "key": "B",
        "text": "Refrain from entering investigation-related information into Claude and consult HR leadership for an approved alternative way to handle the matter."
      },
      {
        "key": "C",
        "text": "Enter the investigation-related information into Claude in an Incognito chat, since Incognito chats do not retain information and therefore fall outside the policy’s intent."
      },
      {
        "key": "D",
        "text": "Enter a paraphrased version of the investigation-related information that removes identifying details, since paraphrasing addresses the spirit of the policy."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Thông tin liên quan đến cuộc điều tra đang diễn ra không được nhập vào công cụ AI theo chính sách rõ ràng của tổ chức. Cách thích hợp là giữ kín thông tin với Claude và tham khảo ý kiến ​​của lãnh đạo nhân sự về một quy trình thay thế đã được phê duyệt.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 76",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/76-governance-risk-and-responsible-use",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-77",
    "questionNumber": 77,
    "text": "A knowledge worker is refining a prompt that has generated a partially acceptable response.  \n  \nWhich refinement practice yields the strongest learning across iterations?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Change one identifiable element per iteration, capture the change and its effect, and adjust another element only after the first is settled."
      },
      {
        "key": "B",
        "text": "Restart from a fresh prompt each iteration so that prior wording does not bias the next attempt, and pick the strongest response at the end."
      },
      {
        "key": "C",
        "text": "Make several related changes in one iteration when they target the same weakness, and revert the whole set if the combined change makes the output worse."
      },
      {
        "key": "D",
        "text": "Address every weakness the response showed in a single revision, then compare the revised output against the prior version."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Tính năng sàng lọc lời nhắc có kiểm soát thay đổi mỗi lần một biến có thể nhận dạng và ghi lại hiệu ứng thu được. Điều này giúp tách biệt những thay đổi nào gây ra sự cải thiện hoặc thụt lùi, cho phép học hỏi một cách đáng tin cậy và cân nhắc những điều chỉnh tiếp theo.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 77",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/77-prompting-and-task-execution",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-78",
    "questionNumber": 78,
    "text": "You are assessing Connector configurations that colleagues have suggested for different tasks. Which two Connector configurations are safe and suitable uses? (Choose two.)  \n  \nEach correct answer provides a complete solution.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a Connector that links to the personnel-records system for team leads to support scheduling tasks"
      },
      {
        "key": "B",
        "text": "a Connector that links to the team's project management workspace under approved scope"
      },
      {
        "key": "C",
        "text": "a Connector that links to a personal cloud storage account where team member’s store working drafts alongside personal files"
      },
      {
        "key": "D",
        "text": "a read-only Connector that links to the public knowledge base for reference content"
      },
      {
        "key": "E",
        "text": "a Connector that links to the payroll system to allow team members to submit expense reports directly"
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc sử dụng Trình kết nối phù hợp tuân theo đặc quyền tối thiểu, quyền truy cập trong phạm vi vai trò được phê duyệt và quyền truy cập chỉ đọc khi không cần thiết phải ghi. Trình kết nối được giới hạn ở không gian làm việc quản lý dự án nhóm đã được phê duyệt và Trình kết nối chỉ đọc cho nội dung tham chiếu công khai đáp ứng các ràng buộc đó. Hệ thống nhân sự, kho lưu trữ hỗn hợp cá nhân và hệ thống trả lương phơi bày dữ liệu nhạy cảm hoặc khả năng có tác động cao vượt quá nhu cầu đã nêu.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 78",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/78-governance-risk-and-responsible-use",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-79",
    "questionNumber": 79,
    "text": "A communications manager is preparing a prompt for Claude to create a quarterly newsletter for store managers across three regions. The agreed key messages, regional information, and a previous newsletter the team liked are all available.  \n  \nWhich prompt strategy is most likely to yield a usable first draft?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Attach the prior newsletter, and ask Claude to match its tone and structure while incorporating the new key messages for the three named regions."
      },
      {
        "key": "B",
        "text": "Attach the prior newsletter and the agreed key messages, and ask Claude to produce a similar newsletter for this quarter."
      },
      {
        "key": "C",
        "text": "Provide the agreed key messages and the three regions, and ask Claude to choose an appropriate length and tone for store managers."
      },
      {
        "key": "D",
        "text": "Name the audience, the three regions, the length, the tone, and the agreed key messages, and reference the prior newsletter only as a tone example."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Những hướng dẫn rõ ràng, rõ ràng về đối tượng mục tiêu, phạm vi khu vực, độ dài đầu ra, giọng điệu và các thông điệp chính bắt buộc mang lại cho Claude những ràng buộc cần thiết để tạo ra một bản nháp phù hợp. Bản tin trước có thể hướng dẫn một cách hiệu quả giọng điệu được yêu cầu mà không thay thế các yêu cầu nội dung hiện tại. Hướng dẫn kỹ thuật nhanh chóng của Anthropic khuyến nghị chỉ định rõ ràng đầu ra mong muốn và sử dụng các ví dụ cũng như chi tiết có liên quan.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 79",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/79-prompting-and-task-execution",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-80",
    "questionNumber": 80,
    "text": "You are an HR specialist categorizing potential ethical risks in a Claude-supported workflow.  \n  \nWhich two risks raise the greatest ethical concern in an HR-adjacent workflow? (Choose two.)  \n  \nEach correct answer represents a complete solution.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "decisions that materially affect a person’s employment without human accountability"
      },
      {
        "key": "B",
        "text": "a clerical typo in a routine internal calendar invitation"
      },
      {
        "key": "C",
        "text": "inconsistent tone and formatting across internal HR communications sent to employees"
      },
      {
        "key": "D",
        "text": "inconsistent use of the company’s preferred dash style across documents"
      },
      {
        "key": "E",
        "text": "outputs that systematically disadvantage members of a protected group"
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Các quyết định việc làm có tác động lớn đòi hỏi trách nhiệm giải trình của con người vì chúng có thể ảnh hưởng nghiêm trọng đến sinh kế của một người. Kết quả gây bất lợi một cách có hệ thống cho một nhóm được bảo vệ sẽ tạo ra tác hại mang tính phân biệt đối xử và do đó là mối lo ngại nghiêm trọng về mặt đạo đức.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 80",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/80-governance-risk-and-responsible-use",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-81",
    "questionNumber": 81,
    "text": "You are an operations assistant asking Claude to summarize 200 weekly metric records across several regions. Which output format presents the data most clearly?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a bulleted list of observations grouped by region without consistent metrics across entries"
      },
      {
        "key": "B",
        "text": "a narrative summary organized by region, describing trends and notable records in prose"
      },
      {
        "key": "C",
        "text": "a series of regional narrative briefs, each describing weekly performance in paragraph form"
      },
      {
        "key": "D",
        "text": "a structured table with one record per row and one metric per column, sorted by region"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Bảng có cấu trúc giúp tập dữ liệu lớn, nhiều vùng dễ dàng quét, so sánh, sắp xếp và phân tích vì các bản ghi và chỉ số chiếm các hàng và cột nhất quán.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 81",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/81-output-evaluation-and-validation",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-82",
    "questionNumber": 82,
    "text": "You are an analyst reviewing a Claude response that answers two of three required questions but omits the third. Which prompt element most likely needs to be strengthened?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "The context provided to Claude should be expanded with additional background detail about the subject matter."
      },
      {
        "key": "B",
        "text": "The output format should be revised to allow Claude to determine the appropriate structure for each question’s answer."
      },
      {
        "key": "C",
        "text": "The role assigned to Claude should be changed to a more specialized expert persona to increase response depth."
      },
      {
        "key": "D",
        "text": "The task statement should explicitly enumerate the three required questions and require an answer to each."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc liệt kê rõ ràng ba câu hỏi bắt buộc và hướng dẫn Claude trả lời từng câu hỏi sẽ làm cho các yêu cầu về mức độ hoàn thành nhiệm vụ trở nên rõ ràng và giảm nguy cơ bỏ qua một mục bắt buộc.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 82",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/82-output-evaluation-and-validation",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-83",
    "questionNumber": 83,
    "text": "An HR team member is reviewing a Claude-generated set of interview questions meant to be used with every candidate for one role. The questions will be asked in the same sequence to each candidate.  \n  \nWhich review practice best promotes fairness?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Review the questions to ensure they apply equally to all candidates, avoid assumptions about candidate backgrounds, and focus on the role’s actual requirements."
      },
      {
        "key": "B",
        "text": "Review the questions for length and tone, since the questions Claude drafts are well-aligned to role requirements by default and need only stylistic adjustment."
      },
      {
        "key": "C",
        "text": "Review the questions and add follow-up questions tailored to each candidate’s resume so each interview can explore the candidate’s specific experience."
      },
      {
        "key": "D",
        "text": "Review the questions and rotate the order across candidates so no candidate is consistently asked the hardest questions first."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Các câu hỏi phỏng vấn công bằng có liên quan đến công việc, tránh các giả định về lý lịch cá nhân hoặc được bảo vệ và có thể được áp dụng nhất quán cho mọi ứng viên. EEOC xác định việc đặt những câu hỏi tương tự cho một công việc và tập trung các câu hỏi trực tiếp vào vị trí đó là những biện pháp hỗ trợ cho việc đối xử không phân biệt đối xử.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 83",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/83-governance-risk-and-responsible-use",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-84",
    "questionNumber": 84,
    "text": "You are a marketing manager using Claude to research a new market segment. Which research step should be completed first?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Generate a final research report combining every Claude output produced."
      },
      {
        "key": "B",
        "text": "Submit a series of Claude prompts to gather information across the segment."
      },
      {
        "key": "C",
        "text": "Validate the gathered information against authoritative external sources."
      },
      {
        "key": "D",
        "text": "Define the specific research questions that must be answered for the segment."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Nghiên cứu phải bắt đầu bằng việc xác định các câu hỏi cụ thể cần trả lời vì chúng đặt ra phạm vi thu thập thông tin, xác thực nguồn và báo cáo cuối cùng. Hướng dẫn của Anthropic cũng nhấn mạnh việc xác định rõ ràng các mục tiêu cụ thể, có thể đo lường được trước công việc đánh giá tiếp theo.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 84",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/84-prompting-and-task-execution",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-85",
    "questionNumber": 85,
    "text": "An HR business partner is setting up two separate Projects for two different client engagements.  \n  \nWhich configuration most effectively prevents context bleed between the two engagements?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Set up each Project with its own distinct memory context, knowledge sources, and instructions, and verify that information from one Project does not appear in the other Project’s responses."
      },
      {
        "key": "B",
        "text": "Use a single shared Project for both client engagements with combined memory, knowledge sources, and instructions, on the assumption that Claude will keep the two clients’ contexts separate without configuration."
      },
      {
        "key": "C",
        "text": "Configure both Projects to share the same memory context to reduce setup effort, even though shared memory between unrelated client engagements is precisely the configuration that produces context bleed."
      },
      {
        "key": "D",
        "text": "Skip Project configuration entirely and use general chats for both engagements, which provides no scoped memory contexts and offers no structural separation between the two clients’ work streams."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Các dự án Claude riêng biệt cung cấp không gian làm việc khép kín với kiến ​​thức và hướng dẫn dành riêng cho dự án. Việc chỉ định bối cảnh, nguồn kiến ​​thức và hướng dẫn riêng biệt cho từng hoạt động tương tác của khách hàng sẽ duy trì ranh giới giữa công việc của họ và ngăn không cho thông tin của một khách hàng bị sử dụng trong hoạt động tương tác khác.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 85",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/85-configuration-and-knowledge-management",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-86",
    "questionNumber": 86,
    "text": "You are an operations assistant choosing a model for a recurring meeting-summary task that needs no deep reasoning and operates at moderate volume.  \n  \nWhich choice best balances cost, speed, and quality?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Haiku, which is suitable only when the task requires the fastest possible turnaround."
      },
      {
        "key": "B",
        "text": "Opus, which prioritizes depth at higher latency and rate-limit consumption."
      },
      {
        "key": "C",
        "text": "Sonnet, which provides solid quality at moderate latency and rate-limit consumption for everyday work."
      },
      {
        "key": "D",
        "text": "A custom model, which the Associate-level user would need to build and train independently."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Sonnet là cấp mô hình Claude cân bằng dành cho công việc thường ngày cần chất lượng đầu ra ổn định mà không có chi phí và độ trễ cao hơn liên quan đến Opus. Haiku được tối ưu hóa cho khối lượng công việc đơn giản hơn, tốc độ cao và khối lượng lớn, trong khi Opus dành cho các nhiệm vụ lý luận đòi hỏi khắt khe nhất.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 86",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/86-product-and-model-selection",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-87",
    "questionNumber": 87,
    "text": "You are a project manager assessing Claude usage methods that teammates have proposed for a project workflow.  \n  \nWhich two workflow steps are appropriate for Claude support? (Choose two.)  \n  \nEach correct answer provides a complete solution.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "approving a final external press release without any human review"
      },
      {
        "key": "B",
        "text": "issuing legally binding contractual commitments on behalf of the company"
      },
      {
        "key": "C",
        "text": "deciding promotion outcomes for staff based solely on the model’s judgment"
      },
      {
        "key": "D",
        "text": "synthesizing a literature review across many uploaded research documents"
      },
      {
        "key": "E",
        "text": "drafting a structured project status update from a set of meeting notes"
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Claude có thể tổng hợp thông tin trên các tài liệu nghiên cứu đã tải lên để hỗ trợ việc xem xét tài liệu và có thể biến các ghi chú cuộc họp thành bản nháp cập nhật trạng thái dự án có cấu trúc. Đây là các nhiệm vụ soạn thảo và tóm tắt hỗ trợ vẫn phải chịu sự xem xét của con người, không giống như phê duyệt báo chí cuối cùng tự chủ, các cam kết ràng buộc về mặt pháp lý hoặc các quyết định tuyển dụng theo mô hình duy nhất.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 87",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/87-workflow-integration-and-solution-design",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-88",
    "questionNumber": 88,
    "text": "You are an operations lead aligning production tasks with Claude’s model strengths to establish realistic expectations.  \n  \nWhich two production tasks most clearly match Claude’s strengths? (Choose two.)  \n  \nEach correct answer represents a complete solution.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "monitoring a live sensor data stream and flagging anomalies as they occur in real time"
      },
      {
        "key": "B",
        "text": "issuing a binding legal determination based solely on Claude’s analysis of case documents"
      },
      {
        "key": "C",
        "text": "drafting a tone-and-audience-aware customer-facing email under human review"
      },
      {
        "key": "D",
        "text": "calculating the precise settlement value of a derivative contract using live market inputs"
      },
      {
        "key": "E",
        "text": "synthesizing a single executive summary across many long source documents"
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Claude được thiết kế cho các nhiệm vụ ngôn ngữ và phân tích, bao gồm tạo văn bản và tóm tắt tài liệu nguồn. Nó có thể soạn thảo một email gửi đến khách hàng bằng cách sử dụng các yêu cầu về giọng điệu và đối tượng cụ thể dưới sự xem xét của con người, đồng thời khả năng ngữ cảnh lớn của nó hỗ trợ tổng hợp bản tóm tắt điều hành từ nhiều tài liệu dài. Các phán quyết pháp lý ràng buộc, tính toán giải quyết tài chính chính xác bằng cách sử dụng đầu vào trực tiếp và phát hiện bất thường theo thời gian thực yêu cầu các biện pháp kiểm soát chuyên biệt, dữ liệu có thẩm quyền hoặc quy trình quyết định mang tính xác định và có trách nhiệm ngoài các điểm mạnh của mô hình ngôn ngữ đó.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 88",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/88-product-and-model-selection",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-89",
    "questionNumber": 89,
    "text": "A learning specialist is setting up a Project for course-design work. The organization has an internal instructional-design standard and a preferred format for lesson outlines.  \n  \nWhich set of custom instructions best supports this use case?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Name Claude’s role as a course designer; let each chat’s prompt specify the standards and output structure for that lesson, since lessons vary widely."
      },
      {
        "key": "B",
        "text": "Name Claude’s role as a course designer and require alignment to the organization’s instructional-design standards; leave output structure to Claude based on the topic of each lesson."
      },
      {
        "key": "C",
        "text": "Specify only the preferred output structure for lesson outlines, since the structure carries the standards implicitly and naming the role adds no value."
      },
      {
        "key": "D",
        "text": "Name Claude’s role as a course designer, require alignment to the organization’s instructional-design standards, and specify the preferred output structure for lesson outlines."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Hướng dẫn của dự án áp dụng cho tất cả các cuộc trò chuyện trong Dự án và nhằm mục đích thiết lập bối cảnh cụ thể của dự án, nguyên tắc về quy trình làm việc, yêu cầu về nhiệm vụ cũng như vai trò hoặc quan điểm mà Claude nên áp dụng. Bao gồm vai trò thiết kế khóa học, các tiêu chuẩn thiết kế giảng dạy của tổ chức và cấu trúc đề cương bài học bắt buộc sẽ cung cấp hướng dẫn nhất quán cho mỗi bài học.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 89",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/89-configuration-and-knowledge-management",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-90",
    "questionNumber": 90,
    "text": "You are a project manager evaluating stakeholder messages that teammates have drafted regarding Claude’s role in a workflow. Which two messages are appropriate for stakeholder communication about Claude? (Choose two.)  \n  \nEach correct answer represents part of the solution.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a claim that the model never makes errors and requires no quality review"
      },
      {
        "key": "B",
        "text": "a vague reassurance that “the AI is taking care of it” without further detail"
      },
      {
        "key": "C",
        "text": "a claim that Claude will handle every task without any human involvement"
      },
      {
        "key": "D",
        "text": "a clear statement of the limits and known failure modes of the integration"
      },
      {
        "key": "E",
        "text": "an honest description of where Claude assists and where humans retain decisions"
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Claude có thể tạo ra kết quả không chính xác về mặt thực tế hoặc không nhất quán theo ngữ cảnh và các kỹ thuật giảm nhẹ không loại bỏ được rủi ro đó; thông tin quan trọng vẫn cần được xác nhận. Do đó, giao tiếp phù hợp với các bên liên quan nêu rõ các hạn chế của quá trình tích hợp và các phương thức thất bại đã biết, đồng thời xác định một cách trung thực vai trò hỗ trợ của Claude và các quyết định thuộc về con người.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 90",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/90-governance-risk-and-responsible-use",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-91",
    "questionNumber": 91,
    "text": "You are reviewing a competitor brief generated by Claude for unsupported claims.  \n  \nWhat is the correct sequence of review steps?  \n  \n1. Cross-check each specific claim against the provided source material or reliable external references.  \n2. Determine whether to correct, re-prompt, or escalate based on the findings.  \n3. Record every unsupported or inconsistent claim with its location and severity.  \n4. Identify the specific factual claims, statistics, and citations in the brief.  \n5. Read the brief from start to finish and flag any claims that seem surprising.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "1, 4, 5, 3, 2"
      },
      {
        "key": "B",
        "text": "4, 5, 1, 3, 2"
      },
      {
        "key": "C",
        "text": "5, 1, 4, 3, 2"
      },
      {
        "key": "D",
        "text": "5, 4, 1, 3, 2"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Quá trình xem xét xác nhận quyền sở hữu không được hỗ trợ hiệu quả bắt đầu bằng việc đọc qua hoàn chỉnh để phát hiện nội dung có thể có nghi vấn, sau đó là xác định chính xác các xác nhận, số liệu thống kê và trích dẫn cần xác thực. Sau đó, các mục đó được kiểm tra dựa trên bằng chứng xác thực, được ghi lại khi không được hỗ trợ hoặc không nhất quán và được sử dụng để xác định biện pháp khắc phục hoặc tăng cấp thích hợp.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 91",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/91-output-evaluation-and-validation",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-92",
    "questionNumber": 92,
    "text": "You are creating a checklist to evaluate Claude outputs and must finish the upstream steps before scoring an output. Which two steps must be completed **BEFORE** scoring a Claude output against the checklist? (Choose two.)  \n  \nEach correct answer represents part of the solution.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Define the evaluation criteria that matter for the task at hand."
      },
      {
        "key": "B",
        "text": "Promote the approved output into the downstream production process."
      },
      {
        "key": "C",
        "text": "Forward unacceptable outputs to a senior reviewer for second-pass review."
      },
      {
        "key": "D",
        "text": "Specify the threshold that distinguishes acceptable from unacceptable output."
      },
      {
        "key": "E",
        "text": "Document the final score and the reviewer comments for the audit trail."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Danh sách kiểm tra đánh giá yêu cầu các tiêu chí liên quan đến nhiệm vụ để xác định những khía cạnh chất lượng nào được đánh giá và ngưỡng chấp nhận để xác định xem đầu ra được đánh giá có đạt hay không. Những định nghĩa đó phải tồn tại trước khi có thể ấn định bất kỳ điểm nào; định tuyến sản xuất, leo thang và ghi chép kiểm tra là các hoạt động hạ nguồn.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 92",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/92-output-evaluation-and-validation",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-93",
    "questionNumber": 93,
    "text": "You are a business analyst determining which output-formatting and context-window practices to recommend to teammates. Which two practices constitute effective use of the context window? (Choose two.)  \n  \nEach correct answer provides part of the solution.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Reuse the same context block across multiple requests to avoid rebuilding it each time."
      },
      {
        "key": "B",
        "text": "Concatenate all source documents end-to-end with no separators between them."
      },
      {
        "key": "C",
        "text": "Paste full email threads related to the project into context so the model has complete conversational history."
      },
      {
        "key": "D",
        "text": "Trim irrelevant material before submitting the request to keep context focused."
      },
      {
        "key": "E",
        "text": "Use clear section headers to separate different parts of the input material."
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Cửa sổ ngữ cảnh có dung lượng đầu vào hữu hạn nên việc xóa nội dung không liên quan sẽ giúp các mã thông báo có sẵn tập trung vào thông tin cần thiết cho tác vụ. Các tiêu đề phần rõ ràng mô tả các tài liệu đầu vào riêng biệt và làm cho mô hình diễn giải mối quan hệ cũng như mục đích của chúng dễ dàng hơn. Đầu vào quá khổ có thể yêu cầu cắt bớt hoặc không thành công khi chúng vượt quá giới hạn đầu vào của mô hình.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 93",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/93-prompting-and-task-execution",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-94",
    "questionNumber": 94,
    "text": "When preparing an AI-assisted work product for external delivery, a senior manager is applying the AI Fluency Framework’s Diligence competency.  \n  \nWhich step most clearly reflects Diligence principles?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Deliver the work product without independent verification on the basis that AI assistance shifts accountability away from the human, even though Diligence holds the human fully accountable for the output."
      },
      {
        "key": "B",
        "text": "Delegate accountability for the AI-assisted work product to Claude itself rather than retaining it as a human obligation, contrary to the Diligence principle that humans remain accountable for AI-assisted outputs."
      },
      {
        "key": "C",
        "text": "Skip verification of any element on the assumption that fluent output implies accuracy, even though Diligence requires the human to verify and correct AI-assisted outputs before they are acted upon."
      },
      {
        "key": "D",
        "text": "Identify the elements of the work product that must be independently verified or corrected before delivery, and take ownership of those verifications as a professional accountability obligation."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Sự siêng năng triển khai yêu cầu con người sử dụng AI phải xác minh và đảm bảo các kết quả đầu ra sẽ được sử dụng hoặc chia sẻ. Trách nhiệm giải trình chuyên môn vẫn thuộc về con người, do đó, xác định những gì cần xác minh hoặc sửa chữa độc lập và sở hữu cá nhân những kiểm tra đó trước khi giao hàng bên ngoài đáp ứng yêu cầu.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 94",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/94-output-evaluation-and-validation",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-95",
    "questionNumber": 95,
    "text": "You are reviewing colleagues’ claims from a recent training about prompt iteration. Which two claims about prompt iteration are accurate? (Choose two.)  \n  \nEach correct answer provides a complete solution.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Repeated resubmission of the same prompt is the most reliable way to improve output."
      },
      {
        "key": "B",
        "text": "Output comparison against original criteria validates whether iteration helped."
      },
      {
        "key": "C",
        "text": "Iteration is most productive when each change targets a specific diagnosed weakness."
      },
      {
        "key": "D",
        "text": "Iteration should stop only after every possible alternative phrasing has been tried."
      },
      {
        "key": "E",
        "text": "More iterations always produce a better output regardless of what was changed."
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc lặp lại nhanh chóng phải được hướng dẫn bởi các tiêu chí đánh giá rõ ràng: việc so sánh kết quả đã sửa đổi với tiêu chí ban đầu sẽ cho thấy liệu thay đổi đó có hữu ích hay không. Việc lặp lại có hiệu quả nhất khi mỗi bản sửa đổi giải quyết được một điểm yếu cụ thể đã được xác định, thay vì thực hiện các thay đổi tùy tiện hoặc lặp đi lặp lại.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 95",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/95-prompting-and-task-execution",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-96",
    "questionNumber": 96,
    "text": "A Claude associate is examining Claude-generated customer-segment descriptions for an internal marketing brief. One description makes a generalization about a demographic group’s purchasing behavior that is not true for individual customers within that segment.  \n  \nWhich response is most appropriate?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Revise the description to focus on observed behaviors rather than generalizations about people, and validate the revision against actual customer data."
      },
      {
        "key": "B",
        "text": "Remove the entire customer-segment description from the brief, since any segmentation that involves demographic characteristics is likely to introduce similar issues."
      },
      {
        "key": "C",
        "text": "Keep the description as written for the internal brief, since internal use does not carry the same risk as external publication of demographic generalizations."
      },
      {
        "key": "D",
        "text": "Add a disclaimer to the description, noting that the generalization may not apply to all individuals in the segment, and keep the underlying description unchanged."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Phân khúc khách hàng phải mô tả các hành vi khách hàng có thể chứng minh được và được xác thực dựa trên dữ liệu khách hàng thực tế, thay vì áp dụng khái quát hóa nhân khẩu học không được hỗ trợ cho các cá nhân. Tuyên bố từ chối trách nhiệm hoặc chỉ sử dụng nội bộ sẽ không sửa được đặc tính cơ bản không chính xác.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 96",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/96-output-evaluation-and-validation",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-97",
    "questionNumber": 97,
    "text": "You are conducting an optimization pass on a recurring workflow.  \n  \nWhat is the correct sequence of optimization steps?  \n  \n1. Apply targeted optimization to the bottleneck step  \n2. Roll out the optimized workflow to the wider team and document the change  \n3. Identify the bottleneck step by using measured time per step and queue length  \n4. Map the existing workflow steps, owners, and decision points  \n5. Pilot the change with a small group and measure its effect against the previous baseline",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "4, 1, 3, 5, 2"
      },
      {
        "key": "B",
        "text": "4, 3, 1, 5, 2"
      },
      {
        "key": "C",
        "text": "3, 4, 1, 5, 2"
      },
      {
        "key": "D",
        "text": "1, 4, 3, 5, 2"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Tối ưu hóa quy trình làm việc bắt đầu bằng cách ánh xạ quy trình hiện tại, sau đó sử dụng các phép đo hiệu suất để xác định nút thắt cổ chai. Một cải tiến có mục tiêu sẽ được áp dụng cho hạn chế đó, được thử nghiệm trong một chương trình thí điểm có giới hạn dựa trên đường cơ sở đã được thiết lập và chỉ sau đó được triển khai rộng rãi cùng với tài liệu.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 97",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/97-troubleshooting-and-optimization",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-98",
    "questionNumber": 98,
    "text": "You are a customer-success lead operating an interactive workflow in which every turn must respond quickly and the reasoning required per turn is light. Which option best matches these requirements?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Choose any model because latency does not vary by model."
      },
      {
        "key": "B",
        "text": "Choose Haiku to keep latency low and to handle a light reasoning load efficiently at scale."
      },
      {
        "key": "C",
        "text": "Choose Opus to maximize reasoning depth despite higher latency."
      },
      {
        "key": "D",
        "text": "Choose a model based on the alphabetical order of its name."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Haiku là dòng mô hình thích hợp cho công việc đơn giản, khối lượng lớn và nhạy cảm với độ trễ. Hướng dẫn của Anthropic khuyến nghị sử dụng Haiku cho các tác vụ đơn giản và dành các mô hình có khả năng cao hơn cho lý luận phức tạp, để nó phù hợp với các lượt tương tác nhanh mà chỉ cần lý luận đơn giản.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 98",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/98-product-and-model-selection",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-99",
    "questionNumber": 99,
    "text": "As part of a workflow redesign, a process analyst is applying the AI Fluency Framework’s Delegation competency. Which two criteria most directly guide Delegation decisions? (Choose two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "The reversibility of the task and the consequence of an error, which together indicate whether the step is safe to delegate to Claude or should be retained for human decision-making."
      },
      {
        "key": "B",
        "text": "The need for human creativity, empathy, or judgment in the step, which indicates whether the task is appropriate for AI delegation or requires the human capabilities Claude cannot provide."
      },
      {
        "key": "C",
        "text": "The visual complexity of the workflow diagram, since steps with more connections and dependencies are more likely to require human oversight."
      },
      {
        "key": "D",
        "text": "The seniority of the team member who currently performs the step, since more senior roles typically involve higher-stakes tasks that warrant human retention."
      },
      {
        "key": "E",
        "text": "The length of time the workflow has existed in its current form, since well-established processes have been sufficiently validated for AI delegation."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Ủy quyền phân chia công việc giữa con người và AI một cách chiến lược dựa trên tính chất và tầm quan trọng của từng nhiệm vụ. Hậu quả của sai sót và khả năng đảo ngược xác định liệu việc ủy ​​quyền có an toàn ở mức chấp nhận được hay không, trong khi các nhiệm vụ đòi hỏi chuyên môn, tính sáng tạo, sự đồng cảm hoặc khả năng phán đoán của con người vẫn phải do con người chỉ đạo. Khung thông thạo AI xác định cụ thể chuyên môn, khả năng sáng tạo và khả năng phán đoán của con người là những điều cần cân nhắc khi phân phối công việc giữa con người và AI.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 99",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/99-workflow-integration-and-solution-design",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-100",
    "questionNumber": 100,
    "text": "A Claude associate is assessing whether to enable a Skill supplied by an unfamiliar third party. Which two checks best support a sound trust decision? (Choose two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Verify the source of the Skill against the organization’s approved-Skill list before enabling it within claude.ai or any Project the team uses for its work."
      },
      {
        "key": "B",
        "text": "Treat the Skill's appearance in a public listing as sufficient validation, without confirming the source, the requested permissions, or alignment with the organization’s approved-Skill list."
      },
      {
        "key": "C",
        "text": "Skip permission review on the assumption that the Skill cannot exceed the boundaries of the workflow, even though Skills can request access that the task does not require."
      },
      {
        "key": "D",
        "text": "Review the permissions and capabilities the Skill requests and confirm that the requested access is appropriate for the task the Skill is intended to perform."
      },
      {
        "key": "E",
        "text": "Enable the Skill immediately on the basis of strong external reviews, even though the source has not been validated against the organization’s approved-Skill list and the permissions remain unverified."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Các kỹ năng của bên thứ ba chỉ nên được kích hoạt từ các nguồn đáng tin cậy, được tổ chức phê duyệt. Đồng thời, các khả năng và quyền truy cập được yêu cầu của những nguồn này phải được xem xét để đảm bảo chúng cần thiết và phù hợp với nhiệm vụ dự kiến. Danh sách công khai hoặc đánh giá thuận lợi không thay thế cho việc xác thực nguồn gốc và áp dụng quyền truy cập ít đặc quyền nhất.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 100",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/100-governance-risk-and-responsible-use",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-101",
    "questionNumber": 101,
    "text": "You are a research associate assembling inputs for a lengthy task that refers to two long regulatory documents, but only particular sections are relevant.  \n  \nWhich approach best preserves context-window capacity?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Skip the documents entirely and rely on Claude to invent the missing context."
      },
      {
        "key": "B",
        "text": "Split each document into one-character pieces and feed them one at a time."
      },
      {
        "key": "C",
        "text": "Extract only the relevant sections from each document and include those, omitting unrelated chapters."
      },
      {
        "key": "D",
        "text": "Paste the full text of both documents without trimming to maximize available material."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc chỉ trích xuất và cung cấp các phần có liên quan sẽ giữ lại bối cảnh quy định cần thiết đồng thời tránh việc các chương không liên quan tiêu thụ mã thông báo, duy trì nhiều dung lượng cửa sổ ngữ cảnh hơn cho nhiệm vụ.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 101",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/101-prompting-and-task-execution",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-102",
    "questionNumber": 102,
    "text": "You are a project lead evaluating a teammate’s practice of using the same prompt template for every task, regardless of task type. Which feedback is most appropriate?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "The prompting strategy should be adapted to each task type because one template does not produce equally strong outputs across all tasks."
      },
      {
        "key": "B",
        "text": "The habit is ideal because a single template guarantees consistent quality across all task types."
      },
      {
        "key": "C",
        "text": "The prompting strategy should not change between tasks because adapting it wastes time and adds no value."
      },
      {
        "key": "D",
        "text": "Task type has no effect on the appropriate prompting strategy."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Chiến lược nhắc nhở phải được điều chỉnh cho phù hợp với loại nhiệm vụ vì các nhiệm vụ khác nhau yêu cầu hướng dẫn, ngữ cảnh, định dạng đầu ra, ràng buộc và tiêu chí đánh giá khác nhau. Một mẫu duy nhất không thể tạo ra kết quả mạnh mẽ như nhau một cách đáng tin cậy cho mọi loại nhiệm vụ.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 102",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/102-prompting-and-task-execution",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-103",
    "questionNumber": 103,
    "text": "You are a knowledge worker preparing a summary of common prompt-failure patterns for the team.  \n  \nWhich pattern is most likely to result in vague or off-target output?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a prompt that names a topic but does not state the task, audience, or required output structure"
      },
      {
        "key": "B",
        "text": "a prompt that adds clear constraints on length and tone"
      },
      {
        "key": "C",
        "text": "a prompt that explicitly names the role, task, audience, and required output format"
      },
      {
        "key": "D",
        "text": "a prompt that includes a representative example of the desired output"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Lời nhắc chỉ xác định một chủ đề sẽ không xác định được nhiệm vụ, đối tượng và cấu trúc phản hồi dự định. Những ràng buộc còn thiếu đó buộc mô hình phải suy ra các yêu cầu thiết yếu, làm tăng khả năng xảy ra phản hồi chung chung hoặc sai lệch.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 103",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/103-prompting-and-task-execution",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-104",
    "questionNumber": 104,
    "text": "You are an HR specialist assessing data items proposed for inclusion in a Claude prompt. Which two data items are suitable to include in a Claude prompt for a routine task? **(Choose two.)**  \n  \nEach correct answer provides a complete solution.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a redacted job description that the model will adapt for a posting"
      },
      {
        "key": "B",
        "text": "accommodation request notes from an employee’s HR file needed to draft a role adjustment memo"
      },
      {
        "key": "C",
        "text": "employee ID numbers and hire dates for the team roster included to help Claude personalize onboarding communications"
      },
      {
        "key": "D",
        "text": "a compensation band summary that includes employee names and current salary figures for a specific team"
      },
      {
        "key": "E",
        "text": "an anonymized summary of an HR policy that the model will rephrase"
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Bản mô tả công việc đã được biên tập lại và bản tóm tắt chính sách nhân sự ẩn danh được giảm thiểu một cách thích hợp và không chứa thông tin nhân viên có thể nhận dạng hoặc nhạy cảm. Hồ sơ chỗ ở của nhân viên, số nhận dạng và ngày tuyển dụng cũng như thông tin về lương được nêu tên là dữ liệu nhân sự bí mật và không phù hợp để nhắc nhở thông thường.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 104",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/104-prompting-and-task-execution",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-105",
    "questionNumber": 105,
    "text": "You are a Claude associate evaluating a proposed Claude use case before approving it for your team. What is the correct sequence of assessment steps?  \n  \n1. Identify the audience, decision impact, and reversibility of the outputs.  \n2. Identify the data types involved and whether sensitive data is implicated.  \n3. Compare the use case with the organization’s policies and the relevant regulatory considerations.  \n4. Decide whether the use case proceeds, needs modification, or is declined.  \n5. Document the assessment outcome and rationale for traceability.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "3, 1, 5, 4, 2"
      },
      {
        "key": "B",
        "text": "1, 3, 5, 4, 2"
      },
      {
        "key": "C",
        "text": "5, 3, 1, 4, 2"
      },
      {
        "key": "D",
        "text": "3, 5, 1, 4, 2"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Đánh giá trường hợp sử dụng hợp lý trước tiên phải xác định phạm vi thực tế của trường hợp sử dụng đó trước khi có thể kiểm tra nó dựa trên bất kỳ điều gì khác: xác định đối tượng, tác động của quyết định và khả năng đảo ngược của đầu ra (bước 1) thiết lập hồ sơ rủi ro của việc sử dụng được đề xuất. Chỉ khi có sẵn hồ sơ rủi ro đó thì việc so sánh trường hợp sử dụng với chính sách của tổ chức và các cân nhắc về quy định hiện hành mới có ý nghĩa (bước 3), vì các chính sách và quy định liên quan cần kiểm tra phụ thuộc vào ai bị ảnh hưởng cũng như kết quả và hậu quả có thể đảo ngược như thế nào. Sau đó, cơ sở đánh giá được viết ra để truy xuất nguồn gốc (bước 5) làm cơ sở cho việc xác định tiến hành/sửa đổi/từ chối thực tế (bước 4), với các loại dữ liệu cụ thể và độ nhạy liên quan (bước 2) được coi là kiểm tra cấp độ triển khai cuối cùng. Các trình tự đặt so sánh chính sách/quy định (bước 3) hoặc bước lập tài liệu (bước 5) trước phạm vi đối tượng/tác động/khả năng đảo ngược (bước 1) là không mạch lạc, vì chúng yêu cầu kiểm tra trường hợp sử dụng so với chính sách hoặc viết ra cơ sở lý luận của nó trước khi hồ sơ rủi ro của nó thậm chí còn được thiết lập.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 105",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/105-governance-risk-and-responsible-use",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-106",
    "questionNumber": 106,
    "text": "Claude’s first output is partly useful, but it has issues with tone and detail.  \n  \nWhich two refinement actions are most likely to result in a meaningfully better output? (Choose two.)  \n  \nEach correct answer provides a complete solution.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Provide an example of an output that meets the desired standard."
      },
      {
        "key": "B",
        "text": "Append the phrase “please do better” to the end of the original prompt."
      },
      {
        "key": "C",
        "text": "Add a specific tone descriptor and a concrete audience to the prompt."
      },
      {
        "key": "D",
        "text": "Increase the temperature setting and resubmit the unchanged prompt."
      },
      {
        "key": "E",
        "text": "Resubmit the same prompt several times and select the best response."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Một ví dụ điển hình cung cấp cho Claude một tiêu chuẩn cụ thể cho câu trả lời mong muốn, bao gồm cả giọng điệu và mức độ chi tiết. Việc đặt tên rõ ràng cho giọng điệu mong muốn và đối tượng khán giả cụ thể cũng đưa ra những hạn chế có thể thực hiện được nhằm hướng dẫn phong cách, từ vựng và độ sâu thích hợp. Anthropic đề xuất các hướng dẫn và ghi chú rõ ràng, rõ ràng mà Claude chú ý đến các chi tiết và ví dụ.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 106",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/106-prompting-and-task-execution",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-107",
    "questionNumber": 107,
    "text": "You are reviewing colleagues’ replies to feedback received on communications drafted by Claude. Which two feedback responses are productive? (Choose two.)  \n  \nEach correct answer represents a complete solution.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "declining to revise sections that were generated by Claude on the basis that the model’s output should be trusted as written"
      },
      {
        "key": "B",
        "text": "incorporating all feedback received, including contradictory suggestions, into the next draft simultaneously"
      },
      {
        "key": "C",
        "text": "deferring all feedback to a later revision cycle to avoid disrupting the current draft’s consistency"
      },
      {
        "key": "D",
        "text": "asking clarifying questions when feedback is ambiguous before acting on it"
      },
      {
        "key": "E",
        "text": "mapping each piece of feedback to the specific change made in the next draft"
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Những phản hồi mơ hồ cần được làm rõ trước khi áp dụng để các bản sửa đổi phản ánh ý nghĩa dự định của người đánh giá. Việc liên kết mọi mục phản hồi với thay đổi tương ứng của nó sẽ tạo ra một bản sửa đổi có thể kiểm tra được và giúp xác nhận rằng phản hồi đã được giải quyết. Nội dung do Claude tạo vẫn phải được xem xét và xác minh thay vì được coi là tự động sửa.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 107",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/107-output-evaluation-and-validation",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-108",
    "questionNumber": 108,
    "text": "A project manager is determining how Claude can assist with requirements analysis for an upcoming engagement. The team will conduct stakeholder interviews and review existing process documentation during discovery.  \n  \nWhich activity fits this domain?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Use Claude to generate a complete requirements list from the project name and a short description, since requirements for similar engagements are largely standard."
      },
      {
        "key": "B",
        "text": "Use Claude to prioritize the requirements the team has already gathered, leaving the gathering itself to manual analyst work since prioritization is more time-consuming."
      },
      {
        "key": "C",
        "text": "Use Claude to synthesize stakeholder inputs and existing process documentation into a structured list of requirements with traceability to each source."
      },
      {
        "key": "D",
        "text": "Use Claude to conduct the stakeholder interviews directly, with the analyst reviewing the recordings afterward to confirm the requirements Claude extracted."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Claude có thể tổng hợp thông tin từ các cuộc phỏng vấn các bên liên quan và xử lý tài liệu thành một bộ yêu cầu có cấu trúc. Khả năng truy xuất nguồn gốc giúp mỗi yêu cầu có thể kiểm tra được dựa trên đầu vào cơ bản, giúp các nhà phân tích xác thực kết quả và giảm các khiếu nại không được hỗ trợ. Tài liệu của Anthropic hỗ trợ phân tích các tài liệu được cung cấp và tạo các trích dẫn trỏ đến các vị trí nguồn cụ thể.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 108",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/108-workflow-integration-and-solution-design",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-109",
    "questionNumber": 109,
    "text": "An account manager used Claude to extract requirements from stakeholder notes. Three requirements seem to be in conflict: two stakeholders specified mutually exclusive workflow steps, and a third requirement presumes an outcome that the first two would prevent.  \n  \nWhich action is most appropriate?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Present all three conflicting requirements as alternative options in the requirements document, leaving the resolution to the project’s decision-making process later."
      },
      {
        "key": "B",
        "text": "Apply Claude to propose a compromise wording for each conflict and submit the compromise to stakeholders as the proposed resolution."
      },
      {
        "key": "C",
        "text": "Select the requirement that has the strongest business justification in the source notes, set the conflicting requirements aside, and proceed with the selected one."
      },
      {
        "key": "D",
        "text": "Flag the conflicts in the requirements document, document the source for each side, and route the conflicts back to the originating stakeholders for resolution."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Các xung đột về yêu cầu phải được ghi lại một cách rõ ràng với khả năng truy nguyên nguồn gốc và gửi lại cho các bên liên quan để giải quyết. Điều này đảm bảo trách nhiệm giải trình và ngăn chặn nhà phân tích hoặc công cụ AI đưa ra quyết định kinh doanh trái phép.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 109",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/109-output-evaluation-and-validation",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-110",
    "questionNumber": 110,
    "text": "A knowledge worker is describing the cost, speed, and quality trade-offs among Claude models to a colleague. Which generalization accurately characterizes this trade-off?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Speed and rate-limit consumption are independent of model capability; the difference between Haiku, Sonnet, and Opus is reasoning depth alone."
      },
      {
        "key": "B",
        "text": "More capable models generally consume more of the rate limit and run more slowly, while lighter models are faster and consume less of the rate limit."
      },
      {
        "key": "C",
        "text": "More capable models generally consume less of the rate limit because their reasoning is more efficient, even though they run more slowly than lighter models."
      },
      {
        "key": "D",
        "text": "Lighter models consume more of the rate limit per request than more capable models, since lighter models require multiple passes to match heavier-model quality."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Dòng mô hình của Claude thường đánh đổi hiệu quả lấy khả năng: các mô hình nhẹ hơn như Haiku dành cho công việc đơn giản hơn, nhanh chóng, chi phí thấp hơn, trong khi các mô hình có khả năng cao hơn như Sonnet và Opus được sử dụng cho lý luận phức tạp hơn và có mức giá mã thông báo cũng như mức tiêu thụ tài nguyên cao hơn. Điều này hỗ trợ mô hình chung về việc sử dụng giới hạn tốc độ lớn hơn và thực thi chậm hơn đối với các mô hình có khả năng cao hơn.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 110",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/110-product-and-model-selection",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-111",
    "questionNumber": 111,
    "text": "A finance manager needs to choose a Claude feature for work requiring deterministic calculations across a multi-tab spreadsheet. Which option best meets this requirement?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Use an Artifact alone for the calculations, which provides a stable editable surface for the result but does not perform the deterministic computation that Code Execution would run."
      },
      {
        "key": "B",
        "text": "Use Code Execution, which runs code in a sandbox to perform calculations on the uploaded file and produce verified outputs the associate can check."
      },
      {
        "key": "C",
        "text": "Use the Research feature for the calculations, which gathers and synthesizes external sources and is not the appropriate feature for deterministic computation on an uploaded spreadsheet."
      },
      {
        "key": "D",
        "text": "Use a standard chat prompt for the calculations, which generates text without running code and does not produce the verified deterministic output the multi-tab calculation task requires."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Claude Code Execution có thể chạy mã trong hộp cát an toàn, xử lý các tệp đã tải lên và thực hiện các phép tính phức tạp. Điều đó làm cho nó trở thành tính năng thích hợp cho các phép tính có thể lặp lại trên bảng tính nhiều tab.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 111",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/111-product-and-model-selection",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-112",
    "questionNumber": 112,
    "text": "A Claude associate is investigating a Claude response that answered only one of three required questions in a prompt. The prompt presented all three questions in one paragraph, separated by commas.  \n  \nWhich root cause is most likely?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "The prompt was too long and Claude focused on the question with the strongest grounding in the surrounding context."
      },
      {
        "key": "B",
        "text": "The prompt’s required questions were addressed implicitly across the response, even though the response did not visibly answer each question."
      },
      {
        "key": "C",
        "text": "The prompt’s task statement did not enumerate the three required questions explicitly enough for Claude to address each one in turn."
      },
      {
        "key": "D",
        "text": "The prompt’s audience and tone specification overshadowed the task statement, so Claude prioritized voice over coverage."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Khi lời nhắc chứa một số mục bắt buộc, việc đánh số hoặc liệt kê rõ ràng từng mục sẽ làm cho phạm vi yêu cầu trở nên rõ ràng và giúp đảm bảo rằng mỗi mục được trả lời theo trình tự. Việc kết hợp cả ba câu hỏi vào một đoạn văn được phân tách bằng dấu phẩy sẽ khiến cấu trúc bài tập không đủ rõ ràng.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 112",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/112-prompting-and-task-execution",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-113",
    "questionNumber": 113,
    "text": "A sales manager is refining a Claude-generated solution prototype after a stakeholder review identified two particular concerns. The remainder of the prototype was approved as written.  \n  \nWhich iteration approach is most likely to create a strong next version?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Rewrite the prototype from scratch incorporating the two specific concerns, since starting fresh integrates the feedback more cleanly than targeted edits."
      },
      {
        "key": "B",
        "text": "Address the two specific concerns and add a third improvement the associate identified, since combining stakeholder feedback with self- identified improvements is more efficient."
      },
      {
        "key": "C",
        "text": "Address the two specific concerns directly, leave unrelated parts unchanged, and document the changes for the next review."
      },
      {
        "key": "D",
        "text": "Address the two specific concerns and also revise unrelated sections to maintain consistent voice across the prototype after the edits."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Bản sửa đổi tập trung kết hợp phản hồi cụ thể của các bên liên quan trong khi vẫn giữ lại nội dung đã được chấp nhận. Việc ghi lại các thay đổi cũng làm cho việc đánh giá tiếp theo trở nên rõ ràng hơn và dễ theo dõi hơn.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 113",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/113-output-evaluation-and-validation",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-114",
    "questionNumber": 114,
    "text": "As a senior analyst, you use Claude to analyze requirements from several stakeholder sources.  \n  \nWhat is the correct sequence of steps?  \n  \n1. Group related requirements and flag conflicts or ambiguities for stakeholder review.  \n2. Validate the structured output against the original sources for accuracy and completeness.  \n3. Submit the consolidated inputs to Claude using a structured extraction prompt.  \n4. Gather and label the source materials so that every requirement can be traced.  \n5. Document the final requirements set with source traceability and status.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "4, 1, 3, 2, 5"
      },
      {
        "key": "B",
        "text": "4, 3, 1, 2, 5"
      },
      {
        "key": "C",
        "text": "1, 4, 3, 2, 5"
      },
      {
        "key": "D",
        "text": "3, 4, 1, 2, 5"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Tài liệu nguồn phải được thu thập và dán nhãn trước khi hợp nhất để mỗi yêu cầu vẫn có thể theo dõi được. Sau đó, tài liệu hợp nhất được gửi cho Claude với lời nhắc trích xuất có cấu trúc; các yêu cầu được trích xuất sau đó có thể được nhóm lại và xem xét để phát hiện những xung đột hoặc mơ hồ. Việc xác nhận dựa trên các nguồn ban đầu phải diễn ra trước khi ghi lại bộ yêu cầu cuối cùng, có thể theo dõi được. Tài liệu trích dẫn của Anthropic hỗ trợ cung cấp tài liệu cho Claude và giữ lại các tài liệu tham khảo nguồn để xác minh.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 114",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/114-workflow-integration-and-solution-design",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-115",
    "questionNumber": 115,
    "text": "You are assessing whether a request to “redesign new-hire onboarding” should be broken into parts before prompting Claude. Which characteristic of the request most strongly suggests that decomposition would be useful?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "The request is for a single structured document that can be produced from one set of inputs in one prompt."
      },
      {
        "key": "B",
        "text": "The request requires multiple distinct outputs: a process map, supporting materials, and a measurement plan."
      },
      {
        "key": "C",
        "text": "The request involves a single well-defined output with a clear input and a familiar format."
      },
      {
        "key": "D",
        "text": "The request involves content the associate has produced many times before and knows can be handled in a single well-structured prompt."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Sự phân tách có giá trị nhất khi tác phẩm chứa nhiều sản phẩm phân phối riêng biệt yêu cầu các loại nội dung và đánh giá khác nhau. Bản đồ quy trình, tài liệu hỗ trợ và kế hoạch đo lường là những kết quả đầu ra riêng biệt, do đó, việc xử lý chúng như các nhiệm vụ phụ được phối hợp sẽ cải thiện tính rõ ràng và khả năng kiểm soát.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 115",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/115-prompting-and-task-execution",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-116",
    "questionNumber": 116,
    "text": "You are a procurement associate breaking down a vendor-evaluation task. Which dependency sequence represents sound ordering?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Define evaluation criteria first, gather vendor data against those criteria, then score and rank."
      },
      {
        "key": "B",
        "text": "Rank vendors before any data is collected."
      },
      {
        "key": "C",
        "text": "Score vendors first and decide on the criteria afterward."
      },
      {
        "key": "D",
        "text": "Skip criteria and ask Claude to produce a vendor recommendation from no inputs."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Đánh giá nhà cung cấp có thể bảo vệ xác định các tiêu chí đánh giá trước khi thu thập bằng chứng, sau đó thu thập thông tin về nhà cung cấp phù hợp với các tiêu chí đó và cuối cùng sử dụng thông tin đó để chấm điểm và xếp hạng các nhà cung cấp.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 116",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/116-prompting-and-task-execution",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-117",
    "questionNumber": 117,
    "text": "You are a marketing manager using Claude to develop ideas for a campaign and must complete the framing steps before generating concepts. Which two framing steps must be completed BEFORE asking Claude to generate concepts? (Choose two.)  \n  \nEach correct answer represents part of the solution.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Select a finalist concept and prepare it for stakeholder approval."
      },
      {
        "key": "B",
        "text": "Define the goal of the campaign and the success metrics for the campaign."
      },
      {
        "key": "C",
        "text": "Review the Claude-generated concepts and select the two strongest for further development."
      },
      {
        "key": "D",
        "text": "Schedule the campaign launch and the rollout dates with the agency."
      },
      {
        "key": "E",
        "text": "Define the brand voice and the audience the concepts will speak to."
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Ý tưởng chiến dịch phải bắt đầu bằng mục tiêu rõ ràng và các số liệu thành công có thể đo lường được, cùng với đối tượng mục tiêu và tiếng nói thương hiệu hạn chế mức độ liên quan, giọng điệu và phong cách. Việc xem xét ý tưởng, lựa chọn người lọt vào vòng chung kết, chuẩn bị phê duyệt, lập kế hoạch triển khai và lập kế hoạch triển khai diễn ra sau khi các ý tưởng đã được hình thành.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 117",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/117-prompting-and-task-execution",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-118",
    "questionNumber": 118,
    "text": "You are a knowledge worker determining whether to escalate Claude-generated output. What is the correct sequence of decision steps?  \n  \n1. Identify the audience and the impact if the output is incorrect.  \n2. Document the decision and its rationale for traceability.  \n3. Compare the output’s risk profile with the organization’s escalation criteria.  \n4. Decide whether to use the output, iterate further, or escalate.  \n5. Evaluate the output’s accuracy, completeness, and any unverified claims.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "5, 1, 3, 4, 2"
      },
      {
        "key": "B",
        "text": "3, 1, 5, 4, 2"
      },
      {
        "key": "C",
        "text": "1, 5, 3, 4, 2"
      },
      {
        "key": "D",
        "text": "1, 3, 5, 4, 2"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc đánh giá đối tượng và hậu quả sẽ xác định tác động tiềm ẩn, trong khi đánh giá tính chính xác, đầy đủ và các tuyên bố chưa được xác minh sẽ xác định rủi ro về chất lượng của đầu ra. Sau đó, những yếu tố đó có thể được đo lường theo tiêu chí nâng cấp của tổ chức trước khi lựa chọn sử dụng, lặp lại hoặc tăng cấp; ghi lại quyết định và lý do cung cấp khả năng truy xuất nguồn gốc. Đầu ra của Claude có thể chứa các lỗi thực tế hoặc các tuyên bố không được hỗ trợ, vì vậy thông tin quan trọng và có tính rủi ro cao cần được xác thực.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 118",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/118-governance-risk-and-responsible-use",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  },
  {
    "id": "ccao-119",
    "questionNumber": 119,
    "text": "You are a product designer using Claude in a solution-design exercise. Which solution-design step should be completed first when using Claude?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Articulate the problem the solution must address and the constraints in play."
      },
      {
        "key": "B",
        "text": "Compare the candidate concepts against the constraints and select a finalist."
      },
      {
        "key": "C",
        "text": "Produce detailed mock-ups of the chosen solution for stakeholder review."
      },
      {
        "key": "D",
        "text": "Generate candidate solution concepts using Claude across diverse styles."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb- yellow) { màu nền: color-mix(in srgb, var(--accent) 55%, #000); màu sắc: #ffffff; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-green) { màu nền: color-mix(in srgb, var(--accent) 65%, #fff); màu: #172033; }\n[data-question-highlight-id=\"question-marker-R16ajmlfiv5tpfiv5uadb\"]::highlight(question-marker-R16ajmlfiv5tpfiv5uadb-pink) { màu nền: color-mix(in srgb, var(--accent) 35%, #fff); màu: #172033; }Việc xác định vấn đề cần giải quyết và các ràng buộc có thể áp dụng sẽ thiết lập các mục tiêu, ranh giới và tiêu chí đánh giá cho việc tạo khái niệm tiếp theo. Sau đó, các khái niệm ứng viên có thể được tạo ra, đánh giá dựa trên những ràng buộc đó, được chọn và phát triển thành các mô hình mô hình chi tiết. Hướng dẫn nhắc nhở của Anthropic đề xuất hướng dẫn rõ ràng, rõ ràng và ngữ cảnh phù hợp để Claude có thể tạo ra kết quả mục tiêu.",
    "category": "General",
    "tags": [
      "CCAO-F",
      "General"
    ],
    "sourceTitle": "Examcademy CCAO-F Question 119",
    "sourceUrl": "https://examcademy.com/exams/anthropic/ccao-f/q/119-workflow-integration-and-solution-design",
    "lastVerifiedAt": "2026-10-23T08:07:35.142Z"
  }
];
