import { Question } from '../types';

export const ccaQuestions: Question[] = [
  {
    id: "cca1",
    questionNumber: 1,
    text: "Your structured data extraction system processes real estate listing documents. When listings describe property size with informal terms like \"spacious\" or \"generous open-plan living area\" instead of exact measurements, the model frequently fabricates numeric square footage values. Which approach would most effectively reduce these hallucinated values while preserving extraction accuracy for documents that contain explicit measurements?",
    options: [
      { key: "A", text: "Making the square_footage field required in the schema and adding a post-extraction validation step that rejects non-numeric values" },
      { key: "B", text: "Removing the square_footage field from the extraction schema entirely to eliminate the possibility of fabrication" },
      { key: "C", text: "Providing few-shot examples that demonstrate returning null for square footage when documents use informal descriptions, alongside examples that correctly extract explicit numeric measurements" },
      { key: "D", text: "Adding the instruction \"only extract values you are certain about\" to the system prompt" }
    ],
    correctAnswers: ["C"],
    category: "Prompt Engineering",
    explanation: "Cung cấp các ví dụ few-shot chỉ ra việc trả về 'null' cho các mô tả không chính thức là cách hiệu quả nhất để dạy cho LLM biết khi nào cần bỏ qua trường này, thay vì tự bịa đặt (hallucinate) dữ liệu số.",
    tags: ["Few-shot", "Structured Data", "Hallucination"]
  },
  {
    id: "cca2",
    questionNumber: 2,
    text: "A customer support agent calls the process_refund MCP tool, which fails because the requested refund amount exceeds the customer's original order total. Currently the tool returns a generic \"Operation failed\" message, preventing the agent from explaining the issue to the customer. How should the tool's error response be restructured to enable appropriate handling?",
    options: [
      { key: "A", text: "Return an error with errorCategory: \"validation\", isRetryable: false, and a description explaining the refund amount exceeds the order total" },
      { key: "B", text: "Return a successful empty result with a warning field embedded in the response content indicating the amount was too high" },
      { key: "C", text: "Return an error with errorCategory: \"permission\", isRetryable: true, and a description indicating the operation requires supervisor-level access" },
      { key: "D", text: "Return an error with errorCategory: \"transient\", isRetryable: true, and a description suggesting the agent retry with the same parameters after a delay" }
    ],
    correctAnswers: ["A"],
    category: "Model Context Protocol",
    explanation: "Lỗi logic nghiệp vụ không được thử lại (như vượt quá số tiền) cần được phân loại là lỗi kiểm định đầu vào ('validation') với 'isRetryable: false' để tác nhân hiểu được nguyên nhân gốc rễ và xử lý phù hợp thay vì tự động chạy lại.",
    tags: ["MCP Tools", "Error Handling", "Validation"]
  },
  {
    id: "cca3",
    questionNumber: 3,
    text: "A developer asks Claude to generate a complex recursive algorithm, and then within the same conversation asks Claude to review the generated code for correctness. Claude reports no issues, but a peer reviewer later finds a subtle logic error. What best explains why the same-session review failed to catch this bug?",
    options: [
      { key: "A", text: "The review prompt did not include explicit criteria for checking recursive boundary conditions" },
      { key: "B", text: "The generated code consumed most of the context window, leaving insufficient tokens for a thorough review" },
      { key: "C", text: "The model defaults to positive assessments to maintain conversational coherence with the user" },
      { key: "D", text: "The model retains its reasoning context from generation, making it less likely to question its own prior decisions in the same session" }
    ],
    correctAnswers: ["D"],
    category: "Evaluation & Bias",
    explanation: "Do mô hình giữ nguyên ngữ cảnh suy luận từ quá trình tạo trước đó, nó dễ gặp phải thiên kiến xác nhận (confirmation bias) và khó khăn trong việc độc lập rà soát lại lỗi logic của chính nó trong cùng một phiên hội thoại.",
    tags: ["Confirmation Bias", "Self-Review", "Context"]
  },
  {
    id: "cca4",
    questionNumber: 4,
    text: "The coordinator agent in the research platform is about to invoke the findings synthesis agent using a stateless agent call (so subagents do not inherit prior conversation context). Both the web search agent and the document analysis agent have already returned their results. How should the coordinator provide these prior findings to the synthesis agent?",
    options: [
      { key: "A", text: "Store the findings in an external database and give the synthesis agent credentials to query the results on its own" },
      { key: "B", text: "Include the complete findings from both agents directly in the synthesis agent's prompt so it has full access to all gathered information" },
      { key: "C", text: "Instruct the synthesis agent to re-invoke the web search and document analysis agents independently to collect the information it needs" },
      { key: "D", text: "Pass only a brief thematic summary to keep the synthesis agent's context lean and avoid exceeding token limits" }
    ],
    correctAnswers: ["B"],
    category: "Agentic Architecture",
    explanation: "Do các tác nhân con chạy không trạng thái (stateless) và không kế thừa ngữ cảnh, tác nhân điều phối (orchestrator) phải thu thập toàn bộ dữ liệu thô thu được và đưa trực tiếp vào prompt của tác nhân tổng hợp kế tiếp.",
    tags: ["Orchestrator-Worker", "Subagents", "Context Transfer"]
  },
  {
    id: "cca5",
    questionNumber: 5,
    text: "During a prolonged codebase exploration session, an agent begins referencing \"typical patterns\" and giving vague descriptions instead of citing the specific classes and method signatures it discovered in earlier turns. What technique most effectively counteracts this context degradation?",
    options: [
      { key: "A", text: "Have the agent maintain a scratchpad file that records key findings such as class names, method signatures, and file paths, and reference it when answering subsequent questions" },
      { key: "B", text: "Increase the max_tokens parameter so the agent can generate longer, more detailed responses" },
      { key: "C", text: "Restart the exploration session from scratch whenever the agent's responses become vague to ensure a clean context" },
      { key: "D", text: "Use /compact repeatedly throughout the session to free up context space for new discoveries" }
    ],
    correctAnswers: ["A"],
    category: "Prompt Engineering",
    explanation: "Hiện tượng suy thoái ngữ cảnh (context rot) trong các phiên chat dài hạn được xử lý tốt nhất bằng cách lưu trữ các thông tin cốt lõi (như tên lớp, hàm, đường dẫn) vào một file nháp (scratchpad) để neo thông tin một cách ổn định.",
    tags: ["Context Rot", "Scratchpad", "Memory"]
  },
  {
    id: "cca6",
    questionNumber: 6,
    text: "In the research automation platform, the orchestrator agent runs an agentic loop that sends requests to Claude, receives responses, and decides whether to continue or stop. What mechanism does the loop use to determine whether it should execute another tool call or present the final response?",
    options: [
      { key: "A", text: "The model includes a boolean \"continue\" field in its JSON response body that the loop evaluates after each iteration" },
      { key: "B", text: "The loop counts the number of tool calls made and stops after reaching a predefined maximum" },
      { key: "C", text: "The system prompt includes a termination keyword that the model outputs when it has finished processing" },
      { key: "D", text: "The stop_reason field in the API response indicates \"tool_use\" when the model wants to call a tool and \"end_turn\" when it considers the task complete" }
    ],
    correctAnswers: ["D"],
    category: "Agentic Architecture",
    explanation: "Sử dụng trường 'stop_reason' của Messages API là giải pháp chính thống và tin cậy nhất. Giá trị 'tool_use' nghĩa là vòng lặp cần gọi công cụ và tiếp tục, còn 'end_turn' nghĩa là tác nhân đã hoàn thành.",
    tags: ["Agentic Loop", "stop_reason", "Flow Control"]
  },
  {
    id: "cca7",
    questionNumber: 7,
    text: "After the coordinator collects web search results, it invokes the findings synthesis agent to combine all research. However, the synthesis output shows no awareness of the previously gathered search findings, even though they are clearly present in the coordinator's conversation history. What is the most likely cause?",
    options: [
      { key: "A", text: "The coordinator's context window exceeded its limit, causing the search results to be silently dropped before the synthesis agent was invoked" },
      { key: "B", text: "The synthesis agent's system prompt contains an instruction that explicitly excludes externally sourced data" },
      { key: "C", text: "The search results were returned in an encoding format that the synthesis agent cannot process" },
      { key: "D", text: "Subagents do not automatically inherit the coordinator's conversation history, so the search findings were never part of the synthesis agent's context" }
    ],
    correctAnswers: ["D"],
    category: "Agentic Architecture",
    explanation: "Do kiến trúc cô lập ngữ cảnh giữa các subagents để chống tràn token và nhiễu dữ liệu, các tác nhân con không tự thừa hưởng lịch sử chat từ điều phối viên trừ khi nó được truyền thủ công trong prompt.",
    tags: ["Context Isolation", "Subagents", "Data Passing"]
  },
  {
    id: "cca8",
    questionNumber: 8,
    text: "While implementing the orchestrator agent's agentic loop for the research platform, a developer decides to check whether the assistant's response text contains the phrase \"research complete\" to determine when the loop should terminate. Why is this approach considered an anti-pattern?",
    options: [
      { key: "A", text: "It relies on parsing non-deterministic natural language output instead of using the reliable stop_reason field, which may produce inconsistent termination behavior" },
      { key: "B", text: "It prevents the model from generating tool_use content blocks during subsequent loop iterations" },
      { key: "C", text: "It causes the API to return an error because response text cannot be inspected until the full conversation is complete" },
      { key: "D", text: "It forces the model to always output the phrase before it can use any tools, adding unnecessary latency to every iteration" }
    ],
    correctAnswers: ["A"],
    category: "Agentic Architecture",
    explanation: "Ngôn ngữ tự nhiên có tính phi xác định (non-deterministic). Việc dựa vào phân tích cú pháp chuỗi thô để phát hiện điều kiện dừng vòng lặp là rất dễ gãy hỏng, thay vào đó cần dùng 'stop_reason' có tính chất xác định.",
    tags: ["Anti-Pattern", "Determinism", "stop_reason"]
  },
  {
    id: "cca9",
    questionNumber: 9,
    text: "Your document extraction pipeline uses a two-step process: first, it calls extract_metadata to determine the document type, then calls extract_fields with a type-specific schema. You plan to migrate this pipeline to the Message Batches API to reduce costs on a nightly run of 500 documents. What limitation of the batch API requires you to redesign this workflow?",
    options: [
      { key: "A", text: "The Message Batches API does not support multi-turn tool calling within a single request, so you cannot execute a tool and return its result mid-request for a second tool call" },
      { key: "B", text: "The Message Batches API limits each submission to a maximum of 100 requests per batch" },
      { key: "C", text: "The Message Batches API does not support forced tool selection, allowing only tool_choice set to auto" },
      { key: "D", text: "The Message Batches API requires all requests in a batch to share the same system prompt and tool definitions" }
    ],
    correctAnswers: ["A"],
    category: "Message Batches API",
    explanation: "Message Batches API chỉ hỗ trợ xử lý không trạng thái một lượt (single-turn) bất đồng bộ. Nó không thể thực hiện chuỗi hội thoại nhiều lượt (gọi công cụ thứ nhất, đợi kết quả phản hồi rồi mới quyết định gọi tiếp công cụ thứ hai).",
    tags: ["Batch API", "Limitations", "Single-Turn"]
  },
  {
    id: "cca10",
    questionNumber: 10,
    text: "You spent yesterday investigating a bug in the customer service agent's refund flow. You named that investigation session \"refund-trace\" and identified several promising leads. Today you want to continue exactly where you left off, preserving the full conversation history from yesterday. Which command correctly resumes your named session?",
    options: [
      { key: "A", text: "claude --session refund-trace --continue" },
      { key: "B", text: "claude --load refund-trace" },
      { key: "C", text: "claude --fork refund-trace" },
      { key: "D", text: "claude --resume refund-trace" }
    ],
    correctAnswers: ["D"],
    category: "Claude Code CLI",
    explanation: "Trong Claude Code CLI, lệnh chuẩn xác để mở lại một phiên làm việc đã lưu trữ theo tên là 'claude --resume <tên_phiên>' (hoặc '-r <tên_phiên>').",
    tags: ["CLI Commands", "Claude Code", "Session Management"]
  },
  {
    id: "cca11",
    questionNumber: 11,
    text: "Your multi-agent system queries a documentation database containing thousands of technical articles organized by product area and topic. Agents currently make numerous exploratory tool calls to discover what documentation is available before performing their targeted searches, consuming significant tokens and increasing latency. What is the recommended approach to reduce these exploratory calls?",
    options: [
      { key: "A", text: "Cache the results of exploratory tool calls in a shared database that all agents query before initiating new searches" },
      { key: "B", text: "Increase each agent's max_tokens allocation to accommodate the additional exploratory tool call results" },
      { key: "C", text: "Expose a content catalog as an MCP resource that provides a browsable hierarchy of available documentation topics and article summaries" },
      { key: "D", text: "Pre-load complete summaries of all documentation articles into the system prompt for every agent invocation" }
    ],
    correctAnswers: ["C"],
    category: "Model Context Protocol",
    explanation: "Khai báo danh mục nội dung (content catalog) như một tài nguyên MCP (MCP Resource) cung cấp cấu trúc cây giúp tác nhân có cái nhìn bao quát từ trước, tránh các cuộc gọi công cụ thăm dò tốn kém và mất thời gian.",
    tags: ["MCP Resources", "Optimization", "Latency"]
  },
  {
    id: "cca12",
    questionNumber: 12,
    text: "Your team asks Claude Code to transform legacy configuration files from an INI format into YAML. Despite detailed prose instructions describing the mapping rules, Claude Code produces inconsistent key naming and indentation across different files. What is the most effective technique to resolve this inconsistency?",
    options: [
      { key: "A", text: "Add a general instruction in CLAUDE.md that says \"always be consistent when transforming configuration formats\"" },
      { key: "B", text: "Increase the length of the prose instructions by adding more detailed paragraphs explaining each mapping rule" },
      { key: "C", text: "Switch to plan mode and ask Claude Code to outline its transformation approach before applying any changes" },
      { key: "D", text: "Provide 2–3 concrete input/output examples showing the exact transformation from specific INI sections to the expected YAML output" }
    ],
    correctAnswers: ["D"],
    category: "Prompt Engineering",
    explanation: "Cung cấp các mẫu ví dụ vào/ra cụ thể (few-shot examples) là biện pháp tin cậy hàng đầu khi thực hiện các tác vụ định dạng hoặc chuyển đổi nghiêm ngặt, giúp mô hình bám sát cấu trúc mong muốn hơn văn bản mô tả.",
    tags: ["Few-Shot", "Configuration", "Consistency"]
  },
  {
    id: "cca13",
    questionNumber: 13,
    text: "A team added \"only report high-confidence findings\" to their CI code review prompt after developers complained about too many low-value findings. The false positive rate, however, has not improved. What is the most likely reason this instruction failed to reduce false positives?",
    options: [
      { key: "A", text: "The instruction conflicts with the default tool_choice setting, which forces the model to report all detected issues" },
      { key: "B", text: "The instruction does not define specific categories of issues to report or skip, so the model has no actionable criteria for filtering" },
      { key: "C", text: "The model always treats every finding as high-confidence because it cannot calibrate certainty without labeled training data" },
      { key: "D", text: "The CI pipeline's non-interactive mode prevents the model from processing system prompt instructions" }
    ],
    correctAnswers: ["B"],
    category: "Prompt Engineering",
    explanation: "Các chỉ thị mang tính chủ quan, mơ hồ như 'high-confidence' hay 'be conservative' không đem lại tác dụng thực tế vì mô hình thiếu tiêu chí khách quan để lọc. Cần chỉ ra danh mục hoặc trường hợp cụ thể được phép hoặc bị cấm báo cáo.",
    tags: ["Vague Instructions", "CI/CD", "Signal-to-Noise"]
  },
  {
    id: "cca14",
    questionNumber: 14,
    text: "When a web search subagent in a multi-agent research pipeline encounters a database timeout and returns the generic message \"search unavailable\" to the coordinator, what is the primary problem this creates?",
    options: [
      { key: "A", text: "It causes the coordinator to immediately terminate the entire research workflow" },
      { key: "B", text: "It prevents the coordinator from distinguishing between a transient timeout and a permanent access restriction, limiting its ability to choose an appropriate recovery strategy" },
      { key: "C", text: "It forces the coordinator to retry the same query indefinitely until the service becomes available" },
      { key: "D", text: "It causes all other subagents to halt their processing until the error is resolved" }
    ],
    correctAnswers: ["B"],
    category: "Agentic Architecture",
    explanation: "Lỗi chung chung ẩn giấu bản chất của sự cố. Việc che giấu này khiến tác nhân điều phối không thể phân biệt lỗi tạm thời (cần thử lại) với lỗi vĩnh viễn (cần bỏ qua hoặc chuyển hướng), làm giảm độ tin cậy của hệ thống.",
    tags: ["Error Context", "Recovery Strategy", "Subagents"]
  },
  {
    id: "cca15",
    questionNumber: 15,
    text: "You need to locate all migration script files across a large monorepo. These files follow the naming convention YYYYMMDD_description.sql and are distributed across multiple service directories at various nesting levels. Which built-in tool is the most appropriate choice for this task?",
    options: [
      { key: "A", text: "Read, loading each service directory to manually scan for migration files" },
      { key: "B", text: "Grep, searching file contents for SQL migration keywords like CREATE TABLE or ALTER TABLE" },
      { key: "C", text: "Bash, running a custom script that parses directory listings and filters by file extension" },
      { key: "D", text: "Glob, using a pattern like **/_.sql to match migration file paths across all directories" }
    ],
    correctAnswers: ["D"],
    category: "Claude Code CLI",
    explanation: "Công cụ 'Glob' được thiết kế chuyên biệt để duyệt và khớp tên file/đường dẫn một cách đệ quy trong thư mục dự án theo mẫu định sẵn, giúp tối ưu hóa hiệu suất và tiết kiệm cửa sổ ngữ cảnh hơn là quét nội dung hoặc dùng Bash.",
    tags: ["Glob Tool", "File Navigation", "Claude Code"]
  },
  {
    id: "cca16",
    questionNumber: 16,
    text: "The document analysis agent returns its findings as narrative text that blends source citations into flowing paragraphs. When the coordinator passes these results to the synthesis agent, the final report frequently contains misattributed or missing source references. Which change to the inter-agent data format would best address this problem?",
    options: [
      { key: "A", text: "Have the document analysis agent return findings in a structured format that separates each claim from its metadata, including source URLs, document names, and page numbers" },
      { key: "B", text: "Instruct the synthesis agent to search the original documents again to independently verify all citations before generating the report" },
      { key: "C", text: "Add a post-processing regular expression step that extracts citations from the narrative paragraphs after synthesis is complete" },
      { key: "D", text: "Increase the synthesis agent's context window budget so it can process longer narrative passages without losing citation details" }
    ],
    correctAnswers: ["A"],
    category: "Agentic Architecture",
    explanation: "Áp dụng định dạng truyền tin có cấu trúc (như JSON) giữa các tác nhân giúp chia tách rõ ràng giữa nội dung khẳng định và siêu dữ liệu (trích dẫn), ngăn chặn việc mô hình bị nhầm lẫn hoặc thất lạc trích dẫn gốc.",
    tags: ["Structured Handoffs", "JSON", "Citations"]
  },
  {
    id: "cca17",
    questionNumber: 17,
    text: "Your repository contains Python database migration files in three unrelated directories: db/migrations/, services/auth/migrations/, and tools/data/migrations/. All migration files must follow identical conventions for transaction handling and rollback patterns. What is the most maintainable approach to enforce these conventions?",
    options: [
      { key: "A", text: "Add all migration conventions to the root CLAUDE.md so they are always available, even when editing non-migration files" },
      { key: "B", text: "Place a CLAUDE.md file with identical content in each of the three migration directories" },
      { key: "C", text: "Create a shared migration-rules.md file and use @import in three separate subdirectory CLAUDE.md files to reference it" },
      { key: "D", text: "Create a single file in .claude/rules/ with a glob pattern like globs: [\"**/migrations/**/*.py\"] that matches migration files across all locations" }
    ],
    correctAnswers: ["D"],
    category: "Claude Code CLI",
    explanation: "Cách tối ưu nhất trong Claude Code là tạo một file quy tắc duy nhất trong thư mục '.claude/rules/' kèm thuộc tính 'globs' để tự động nạp chỉ khi tác nhân sửa các file Python nằm trong bất cứ thư mục migration nào.",
    tags: ["Project Configuration", "Memory rules", "Claude Code"]
  },
  {
    id: "cca18",
    questionNumber: 18,
    text: "A customer contacts your agent with a vague complaint: \"Something is wrong with my account. I've been overcharged and I think someone else has accessed it.\" The scope of each concern is unclear until initial lookups are performed. Which task decomposition strategy is most appropriate for handling this type of open-ended, multi-concern request?",
    options: [
      { key: "A", text: "A predefined decision tree that maps each keyword in the customer's message to a specific tool call sequence" },
      { key: "B", text: "A fixed sequential pipeline that always runs fetch_customer, then get_order for the last 10 orders, then issue_refund for any billing discrepancy found" },
      { key: "C", text: "Dynamic adaptive decomposition that investigates each concern based on what is discovered at each step, generating follow-up subtasks as findings emerge" },
      { key: "D", text: "A single comprehensive prompt that includes all available customer data and asks the agent to resolve every concern in one turn" }
    ],
    correctAnswers: ["C"],
    category: "Agentic Architecture",
    explanation: "Với các yêu cầu phức tạp và mơ hồ, chiến lược 'Dynamic adaptive decomposition' giúp tác nhân suy luận từng bước, tự khám phá manh mối và sinh các tiểu tác vụ tiếp nối dựa trên kết quả trung gian thu được.",
    tags: ["Task Decomposition", "Adaptive Agents", "Reasoning"]
  },
  {
    id: "cca19",
    questionNumber: 19,
    text: "In the research platform, the report generation agent must only produce a final report after the synthesis agent has confirmed that all research areas have adequate coverage. A developer enforces this ordering with a system prompt instruction telling the report agent to wait for synthesis confirmation. Why is a programmatic prerequisite gate a better choice?",
    options: [
      { key: "A", text: "Programmatic prerequisite gates provide deterministic enforcement, whereas prompt-based instructions have a non-zero failure rate and cannot guarantee compliance" },
      { key: "B", text: "System prompts cannot reference other agents, so the report agent has no way to know the synthesis step exists" },
      { key: "C", text: "Prompt instructions are only evaluated at the start of a session and are ignored during subsequent tool calls" },
      { key: "D", text: "Programmatic gates run faster than prompt-based instructions, reducing overall pipeline latency" }
    ],
    correctAnswers: ["A"],
    category: "Security & Guardrails",
    explanation: "Do mô hình mang tính chất xác suất, việc hướng dẫn bằng prompt không thể đảm bảo 100% tuân thủ trong các logic luồng công việc nghiêm ngặt. Rào chắn bằng mã lập trình (code-level gate) đem lại sự thực thi tuyệt đối mang tính xác định.",
    tags: ["Deterministic Gate", "Reliability", "Workflow Guardrails"]
  },
  {
    id: "cca20",
    questionNumber: 20,
    text: "A team provides four few-shot examples showing Claude how to distinguish acceptable defensive null-check patterns from genuine error-handling bugs during code review. After deployment, the agent correctly identifies a problematic error-handling pattern in a codebase written in a different language than any of the examples. What best explains this behavior?",
    options: [
      { key: "A", text: "The model defaulted to flagging the unfamiliar pattern because it did not match any known acceptable examples" },
      { key: "B", text: "The few-shot examples taught the model the underlying judgment criteria for evaluating error handling which it generalized to the structurally similar but previously unseen pattern" },
      { key: "C", text: "The model recognized the specific language syntax from its pre-training data and applied language-specific review rules" },
      { key: "D", text: "The model decomposed the novel pattern into exact sub-patterns that matched elements from the few-shot examples" }
    ],
    correctAnswers: ["B"],
    category: "Evaluation & Bias",
    explanation: "Mẫu few-shot không chỉ hướng dẫn cú pháp mà còn truyền đạt các tiêu chuẩn phán đoán trừu tượng (judgment criteria), cho phép mô hình học được khái niệm cốt lõi và suy luận rộng ra các ngôn ngữ lập trình khác.",
    tags: ["Generalization", "In-Context Learning", "Few-Shot"]
  },
  {
    id: "cca21",
    questionNumber: 21,
    text: "The get_order tool in your customer service agent sometimes fails in two distinct ways: a temporary database timeout that resolves on retry, and a business policy violation when a customer requests a refund on a non-returnable item. Currently, both failures return a generic message: \"Operation failed.\" Why is returning structured error metadata with distinct error categories critical for these two scenarios?",
    options: [
      { key: "A", text: "The MCP protocol requires every tool error to include a specific error category before the agent is allowed to continue the conversation" },
      { key: "B", text: "Without structured metadata distinguishing transient errors from business rule violations, the agent cannot determine whether to retry the call or explain the policy to the customer, leading to wasted retries or poor customer communication" },
      { key: "C", text: "Structured error metadata reduces token usage in the conversation history by replacing verbose error messages with compact error codes" },
      { key: "D", text: "Structured error metadata is primarily for logging and observability purposes and does not change how the agent responds to the customer" }
    ],
    correctAnswers: ["B"],
    category: "Model Context Protocol",
    explanation: "Nếu không có siêu dữ liệu cấu trúc phân biệt giữa lỗi tạm thời (timeout) và lỗi nghiệp vụ (vi phạm chính sách), tác nhân sẽ không biết khi nào cần thử lại (retry) hoặc giải thích từ chối cho khách hàng.",
    tags: ["MCP Tools", "Structured Errors", "Reliability"]
  },
  {
    id: "cca22",
    questionNumber: 22,
    text: "Your invoice extraction pipeline processes documents from multiple international vendors. Dates appear in varied formats across vendors, including \"15 March 2024,\" \"03/15/2024,\" and \"2024.03.15.\" The JSON schema enforces ISO 8601 format for date fields via tool_use, yet extracted dates occasionally retain the vendor's original format. What is the most effective way to ensure consistent date normalization across all vendor documents?",
    options: [
      { key: "A", text: "Adding a regex pattern constraint to the date field in the JSON schema to enforce the YYYY-MM-DD format" },
      { key: "B", text: "Including explicit format normalization rules in the extraction prompt and also enforcing the ISO 8601 date format in the output/tool schema (e.g., using format: \"date\" or strict tool use) so the model both normalizes and is validated" },
      { key: "C", text: "Creating a separate extraction schema for each vendor's known date format" },
      { key: "D", text: "Implementing a validation-retry loop that rejects extractions containing any non-ISO 8601 date" }
    ],
    correctAnswers: ["B"],
    category: "Prompt Engineering",
    explanation: "Cách tiếp cận đa tầng là hiệu quả nhất: Hướng dẫn rõ ràng việc chuyển đổi định dạng trong prompt (để định hướng suy luận) kết hợp với ràng buộc cấu trúc kiểu 'format: \"date\"' trong schema để kiểm định đầu ra.",
    tags: ["Normalization", "JSON Schema", "Multi-layered validation"]
  },
  {
    id: "cca23",
    questionNumber: 23,
    text: "Your team's project-level CLAUDE.md has grown to over 500 lines, covering testing conventions, API design standards, deployment procedures, and security policies. Engineers find it difficult to maintain, and Claude Code occasionally overlooks relevant guidelines. What is the recommended approach to improve organization and reliability of these configuration instructions?",
    options: [
      { key: "A", text: "Consolidate all guidelines into the system prompt configuration of the project's MCP servers" },
      { key: "B", text: "Move all content to user-level ~/.claude/CLAUDE.md so each engineer can maintain a personal copy of the instructions" },
      { key: "C", text: "Split the content into focused topic-specific files in .claude/rules/, such as testing.md, api-conventions.md, and deployment.md" },
      { key: "D", text: "Duplicate the full CLAUDE.md into every subdirectory of the project to ensure Claude Code always finds nearby instructions" }
    ],
    correctAnswers: ["C"],
    category: "Claude Code CLI",
    explanation: "Tách nhỏ tệp CLAUDE.md khổng lồ thành các file quy tắc chuyên biệt và đặt trong '.claude/rules/' giúp nạp thông tin động và đúng lúc, tối ưu cửa sổ ngữ cảnh và tăng sự tuân thủ quy định.",
    tags: ["Project Configuration", "rules", "Claude Code"]
  },
  {
    id: "cca24",
    questionNumber: 24,
    text: "Your customer support agent inconsistently decides when to escalate cases to human agents. Adding instructions like \"only escalate high-confidence cases\" and \"be conservative about escalation\" to the system prompt has not improved consistency. What approach would most effectively produce reliable escalation behavior?",
    options: [
      { key: "A", text: "Require the agent to attempt autonomous resolution for at least three turns before allowing any escalation" },
      { key: "B", text: "Implement sentiment analysis on customer messages and trigger escalation when negative sentiment exceeds a defined threshold" },
      { key: "C", text: "Have the agent self-report a confidence score on each turn and escalate whenever it falls below 60%" },
      { key: "D", text: "Add explicit escalation criteria and include few-shot examples in the prompt (for example, in the first user message) that demonstrate specific scenarios where the agent should escalate versus resolve autonomously" }
    ],
    correctAnswers: ["D"],
    category: "Prompt Engineering",
    explanation: "Thay thế các hướng dẫn chung chung bằng tiêu chí phân loại rõ ràng và kèm các ví dụ few-shot chỉ ra ranh giới giữa việc tự xử lý và việc cần chuyển giao cho con người là phương án tối ưu.",
    tags: ["Escalation", "Few-Shot", "Decision Boundaries"]
  },
  {
    id: "cca25",
    questionNumber: 25,
    text: "Your team must replace the project's logging library across 60+ source files. The migration involves auditing current usage patterns, selecting appropriate replacement APIs for different log levels, and applying consistent changes. What is the recommended workflow for completing this task in Claude Code?",
    options: [
      { key: "A", text: "Start 60 separate Claude Code sessions in parallel, one per file, each using direct execution independently" },
      { key: "B", text: "Use plan mode for the full duration of the migration, including both the investigation phase and every individual file modification" },
      { key: "C", text: "Use direct execution for the entire migration, processing each file one at a time without any upfront investigation" },
      { key: "D", text: "Start with plan mode to audit usage patterns and design the migration strategy, then switch to direct execution to apply the changes according to the plan" }
    ],
    correctAnswers: ["D"],
    category: "Claude Code CLI",
    explanation: "Quy trình chuẩn 'Khám phá -> Lên kế hoạch -> Thực thi' là tối ưu nhất. Lập kế hoạch trước qua '/plan' (đọc hiểu kiến trúc không sửa đổi), sau đó chuyển sang thực thi trực tiếp để viết code nhất quán.",
    tags: ["Plan Mode", "Workflow", "Refactoring"]
  },
  {
    id: "cca26",
    questionNumber: 26,
    text: "After the web search agent executes a tool and receives results during its agentic loop, the developer appends the tool results to the conversation history before sending the next API request. What is the primary purpose of including these results in the conversation?",
    options: [
      { key: "A", text: "To allow the API to deduplicate repeated tool calls and reduce unnecessary computation" },
      { key: "B", text: "To enable the API to cache the tool results server-side for faster processing of subsequent requests" },
      { key: "C", text: "To satisfy an API validation rule that requires strictly alternating message roles in the conversation array" },
      { key: "D", text: "To enable the model to incorporate the new information into its reasoning and determine the appropriate next action in the loop" }
    ],
    correctAnswers: ["D"],
    category: "Agentic Architecture",
    explanation: "Bằng cách chèn nội dung 'tool_result' như một tin nhắn mới của người dùng, mô hình nhận được đầu ra thực tế của công cụ để đưa vào suy luận tiếp nối, quyết định xem nhiệm vụ đã hoàn tất chưa.",
    tags: ["Tool Integration", "Loop Reasoning", "Messages API"]
  },
  {
    id: "cca27",
    questionNumber: 27,
    text: "One of your engineers creates a slash command that scaffolds a new REST API endpoint with standardized error handling and validation. The team agrees this command should be available to all developers working on the project without requiring any manual setup on individual machines. Which configuration achieves this goal?",
    options: [
      { key: "A", text: "Define the command inline within the root CLAUDE.md file using @import syntax" },
      { key: "B", text: "Place the command file in the project's .claude/commands/ directory and commit it to version control" },
      { key: "C", text: "Place the command file in ~/.claude/commands/ on the engineer's machine and share the file path in a wiki" },
      { key: "D", text: "Add the command as a SKILL.md file in ~/.claude/skills/ with argument-hint frontmatter configured" }
    ],
    correctAnswers: ["B"],
    category: "Claude Code CLI",
    explanation: "Claude Code cho phép lưu trữ các lệnh custom theo cấp dự án trong thư mục '.claude/commands/'. Khi đẩy lên Git, toàn bộ các thành viên khác nạp về đều tự động sử dụng được mà không cần cài đặt lại.",
    tags: ["Custom Commands", "Collaboration", "Claude Code"]
  },
  {
    id: "cca28",
    questionNumber: 28,
    text: "Your customer service agent connects to fetch_customer and get_order through MCP. The fetch_customer tool returns created_date as a Unix timestamp (e.g., 1718200000), while get_order returns order_date in ISO 8601 format (e.g., \"2024-06-12T15:00:00Z\"). The agent sometimes misinterprets these inconsistent formats when reasoning about order timelines. What is the recommended approach to ensure consistent date handling before the agent processes these results?",
    options: [
      { key: "A", text: "Use few-shot examples in the prompt showing the agent how to correctly interpret both Unix timestamps and ISO 8601 dates" },
      { key: "B", text: "Implement a PostToolUse hook that normalizes date formats from both tools into a consistent representation before the agent processes the results" },
      { key: "C", text: "Add instructions to the system prompt telling the agent to mentally convert all dates to a single format before reasoning about timelines" },
      { key: "D", text: "Modify each MCP tool server's internal implementation to always return dates in the same format" }
    ],
    correctAnswers: ["D"],
    category: "Model Context Protocol",
    explanation: "Chuẩn hóa dữ liệu tại gốc (ngay trong máy chủ MCP) là giải pháp bền vững và hiệu quả nhất, loại bỏ gánh nặng suy luận logic ngày tháng khỏi LLM và giúp tiết kiệm token.",
    tags: ["Data Normalization", "MCP Server", "Best Practices"]
  },
  {
    id: "cca29",
    questionNumber: 29,
    text: "Your automated code review agent flags too many false positives when checking whether code comments are accurate. Developers have started ignoring the agent's output entirely. Which prompt modification would most effectively reduce false positives in the comment accuracy checks?",
    options: [
      { key: "A", text: "Specifying \"flag comments only when the described behavior directly contradicts the actual code logic\"" },
      { key: "B", text: "Adding \"only report high-confidence findings about comment accuracy\" to the system prompt" },
      { key: "C", text: "Instructing the agent to \"be conservative and avoid flagging minor comment issues\"" },
      { key: "D", text: "Including a general instruction to \"prioritize precision over recall when reviewing code comments\"" }
    ],
    correctAnswers: ["A"],
    category: "Prompt Engineering",
    explanation: "Sử dụng quy tắc hành vi khách quan và chặt chẽ ('chỉ báo lỗi khi comment mâu thuẫn trực tiếp với logic code') giúp mô hình bỏ qua các phàn nàn nhỏ về câu từ hay phong cách, từ đó giảm thiểu false positives.",
    tags: ["Constraint Design", "False Positives", "Code Review"]
  },
  {
    id: "cca30",
    questionNumber: 30,
    text: "In a multi-agent research system, the synthesis subagent is responsible for combining findings from other agents into a cohesive report. During testing, you observe that this subagent frequently initiates its own web searches and document retrievals instead of synthesizing the provided findings. The synthesis agent currently has access to all 18 tools in the system. What is the most effective way to resolve this behavior?",
    options: [
      { key: "A", text: "Increase the amount of context provided to the synthesis agent so it has less reason to perform its own searches" },
      { key: "B", text: "Restrict the synthesis agent's allowedTools to only those relevant to its synthesis role removing search and retrieval tools" },
      { key: "C", text: "Configure tool_choice: \"any\" so the synthesis agent is forced to call a tool rather than returning text reducing off-task behavior" },
      { key: "D", text: "Add detailed prompt instructions telling the synthesis agent to focus only on combining findings and not to use search tools" }
    ],
    correctAnswers: ["B"],
    category: "Agentic Architecture",
    explanation: "Áp dụng nguyên tắc Đặc quyền tối thiểu (Principle of Least Privilege). Bằng cách giới hạn danh sách công cụ ('allowedTools') của tác nhân tổng hợp, bạn chặn đứng khả năng nó đi thực hiện các hành vi sai mục đích.",
    tags: ["Principle of Least Privilege", "Tool Scoping", "Off-task behavior"]
  },
  {
    id: "cca31",
    questionNumber: 31,
    text: "An engineer asks Claude Code to fix a bug where a single function throws an error when receiving a null input. The stack trace clearly identifies the file and line number, and the fix requires adding one conditional check. Which mode should the engineer use for this task?",
    options: [
      { key: "A", text: "Direct execution combined with the Explore subagent to verify no other functions have the same issue before making the change" },
      { key: "B", text: "Plan mode, because every code change benefits from an investigation phase before implementation" },
      { key: "C", text: "Plan mode, because null handling requires evaluating multiple valid implementation strategies across the codebase" },
      { key: "D", text: "Direct execution, because the task is well-scoped with a clear fix in a single file and does not require architectural exploration" }
    ],
    correctAnswers: ["D"],
    category: "Claude Code CLI",
    explanation: "Với các sửa đổi nhỏ, rõ ràng và đã biết trước vị trí, chế độ Thực thi trực tiếp (Direct execution) là nhanh chóng và tiết kiệm nhất, không cần thiết phải chạy qua chế độ lập kế hoạch quy mô lớn.",
    tags: ["Execution Mode", "Claude Code", "Efficiency"]
  },
  {
    id: "cca32",
    questionNumber: 32,
    text: "Your team wants the customer service agent to audit the resolution quality of 50 past support tickets. Each ticket involves different product categories, refund amounts, and escalation decisions. You need the agent to evaluate each ticket's handling individually and then identify systemic patterns across the full set. Which prompt chaining pattern best supports this workflow?",
    options: [
      { key: "A", text: "Send all 50 tickets in a single prompt and instruct the agent to evaluate quality and identify patterns in one pass" },
      { key: "B", text: "Randomly sample five tickets, evaluate them in a single prompt, and extrapolate the findings to the remaining 45 tickets" },
      { key: "C", text: "Have the agent process tickets in pairs, comparing each pair for similarities before aggregating all pair comparisons at the end" },
      { key: "D", text: "Run per-ticket analysis passes that evaluate each ticket individually, then run a separate cross-ticket synthesis pass to identify systemic patterns across all evaluations" }
    ],
    correctAnswers: ["D"],
    category: "Prompt Engineering",
    explanation: "Đây là mô hình Map-Reduce nổi tiếng trong prompt chaining: Phân tích từng thực thể riêng biệt (Map) để tránh loãng sự chú ý, sau đó chạy lượt tổng hợp (Reduce) để rút ra các mô thức toàn cục.",
    tags: ["Map-Reduce", "Prompt Chaining", "Batch Audit"]
  },
  {
    id: "cca33",
    questionNumber: 33,
    text: "Your CI code review system generates structured JSON findings for pull requests, and developers can dismiss findings they consider incorrect. Over the past quarter, the dismissal rate has risen to 40%, but you cannot determine which types of code constructs are triggering the most dismissed findings. What should you add to each structured finding to enable systematic analysis of why developers are dismissing specific results?",
    options: [
      { key: "A", text: "A review_instance_id field linking each finding to the specific Claude session that generated it" },
      { key: "B", text: "A detected_pattern field describing the specific code construct that triggered the finding enabling correlation between dismissed findings and recurring pattern types" },
      { key: "C", text: "A timestamp field recording when the finding was generated to correlate dismissals with time of day" },
      { key: "D", text: "A confidence_score field with a numeric value so dismissed findings can be filtered by the model's self-reported certainty" }
    ],
    correctAnswers: ["B"],
    category: "Security & Guardrails",
    explanation: "Bổ sung trường 'detected_pattern' chỉ ra chính xác loại lỗi mã nguồn giúp bạn phân loại và thống kê xem lỗi nào thường bị nhà phát triển bỏ qua nhất, từ đó tinh chỉnh lại prompt hệ thống có trọng tâm.",
    tags: ["Telemetry", "Review Accuracy", "JSON Feedback"]
  },
  {
    id: "cca34",
    questionNumber: 34,
    text: "A customer-facing support agent built with the Claude Agent SDK handles multi-issue sessions where customers raise several complaints in one conversation. After many turns, the agent begins confusing order details between different issues, such as applying the wrong refund amount to the wrong order. What is the most effective approach to prevent this problem?",
    options: [
      { key: "A", text: "Instruct the agent in the system prompt to carefully track all issue details throughout the conversation" },
      { key: "B", text: "Extract structured issue data such as order IDs, amounts, and statuses into a persistent case facts block included in each prompt" },
      { key: "C", text: "Summarize the full conversation every five turns to keep context usage low" },
      { key: "D", text: "Limit multi-issue sessions to a maximum of two issues and require the customer to start new sessions for additional complaints" }
    ],
    correctAnswers: ["B"],
    category: "Prompt Engineering",
    explanation: "Trích xuất và duy trì một vùng thông tin thực tế dạng cấu trúc cứng ('case facts block') ở đầu mỗi prompt là cách hiệu quả nhất để giữ mô hình không bị nhầm lẫn dữ liệu qua các lượt chat dài.",
    tags: ["State Management", "Case Facts", "SDK Best Practices"]
  },
  {
    id: "cca35",
    questionNumber: 35,
    text: "Your project enforces specific conventions for all Jest test files, including fixture usage patterns and assertion styles. These test files are distributed across dozens of directories throughout the repository (e.g., src/components/, src/services/, src/utils/, lib/helpers/). You need these conventions to load automatically only when Claude Code edits a test file. Which configuration correctly implements this?",
    options: [
      { key: "A", text: "Place the conventions in a user-level ~/.claude/CLAUDE.md file and instruct each developer to add them manually" },
      { key: "B", text: "Create a file in .claude/rules/ with YAML frontmatter containing paths: [\"**/*.test.ts\", \"**/*.test.tsx\"] to target test files across all directories" },
      { key: "C", text: "Add the testing conventions to the project-level CLAUDE.md so they are loaded during every interaction regardless of file type" },
      { key: "D", text: "Create a CLAUDE.md file inside each directory that contains test files, repeating the conventions in every location" }
    ],
    correctAnswers: ["B"],
    category: "Claude Code CLI",
    explanation: "Sử dụng quy tắc định vị theo đường dẫn (path-scoped rules) qua frontmatter YAML trong thư mục '.claude/rules/' giúp các chỉ thị luôn nằm im và chỉ kích hoạt khi nạp đúng các file kiểm thử tương ứng.",
    tags: ["Path Scoped Rules", "Project Rules", "Claude Code"]
  },
  {
    id: "cca36",
    questionNumber: 36,
    text: "After submitting 200 document extraction requests to the Message Batches API, you discover that 15 requests failed because the source documents exceeded context limits. You need to resubmit only the failed requests after chunking those documents into smaller sections. How should you identify which specific documents need resubmission?",
    options: [
      { key: "A", text: "Use the custom_id field assigned to each request to correlate failures back to the specific source documents" },
      { key: "B", text: "Query the batch status endpoint with the batch_id to retrieve an ordered index list of failed requests" },
      { key: "C", text: "Parse the error response bodies to extract document filenames from the original prompt text" },
      { key: "D", text: "Compare the count of successful results against the original ordered submission list to determine which entries are missing" }
    ],
    correctAnswers: ["A"],
    category: "Message Batches API",
    explanation: "Do kết quả trả về từ Batch API không bảo đảm thứ tự ban đầu, việc định danh duy nhất thông qua 'custom_id' cho mỗi yêu cầu là cơ chế chuẩn để khớp kết quả hoặc phát hiện lỗi của từng tài liệu.",
    tags: ["custom_id", "Batch Correlation", "Error Tracking"]
  },
  {
    id: "cca37",
    questionNumber: 37,
    text: "Within the research automation platform, the web search agent discovers a set of URLs that the document analysis agent needs to process. Which approach correctly follows the hub-and-spoke orchestration pattern?",
    options: [
      { key: "A", text: "The web search agent writes URLs to a shared memory store that the document analysis agent reads concurrently during its own execution" },
      { key: "B", text: "Both agents independently poll a shared message queue where the web search agent deposits URLs for the document analysis agent to consume" },
      { key: "C", text: "The web search agent invokes the document analysis agent directly through a peer-to-peer call, passing the URLs without coordinator involvement" },
      { key: "D", text: "The coordinator receives the URLs from the web search agent and includes them in the prompt when delegating work to the document analysis agent" }
    ],
    correctAnswers: ["D"],
    category: "Agentic Architecture",
    explanation: "Trong mô hình hình sao (hub-and-spoke / orchestrator-worker), các tác nhân con không trao đổi trực tiếp mà bắt buộc phải định tuyến thông tin qua điều phối viên trung tâm để kiểm soát luồng.",
    tags: ["Hub-and-Spoke", "Orchestration", "Subagents"]
  },
  {
    id: "cca38",
    questionNumber: 38,
    text: "A customer reaches your support agent and immediately says, \"I would like to speak with a real person, please.\" The agent has access to tools that could likely resolve the customer's underlying billing issue quickly. What is the correct agent behavior in this situation?",
    options: [
      { key: "A", text: "Inform the customer that billing issues can typically be resolved faster by the automated agent and proceed with investigation" },
      { key: "B", text: "Acknowledge the customer's request and immediately escalate to a human agent" },
      { key: "C", text: "Ask the customer to describe their issue so the agent can attempt a quick resolution before transferring" },
      { key: "D", text: "Investigate the billing issue silently and then escalate, providing the human agent with a complete resolution summary" }
    ],
    correctAnswers: ["B"],
    category: "Security & Guardrails",
    explanation: "Best practice hàng đầu của tác nhân hỗ trợ khách hàng là tuyệt đối tôn trọng yêu cầu trò chuyện với con người ngay khi được nhắc tới, tránh kéo dài thời gian gây bực bội cho người dùng.",
    tags: ["Human Handoff", "Agent Design", "UX Guidelines"]
  },
  {
    id: "cca39",
    questionNumber: 39,
    text: "A user submits a simple factual question to the research automation platform that can be fully answered with a single web lookup. The coordinator has access to the web search, document analysis, synthesis, and report generation subagents. How should the coordinator handle this query differently than a complex multi-faceted research topic?",
    options: [
      { key: "A", text: "Always invoke the full pipeline of all four subagents to ensure consistent and thorough output regardless of query complexity" },
      { key: "B", text: "Analyze the query requirements and invoke only the web search agent, skipping document analysis, synthesis, and report generation when they are unnecessary" },
      { key: "C", text: "Forward the question to the user interface without involving any subagents since it is a simple query" },
      { key: "D", text: "Route the query to the synthesis agent first so it can assess whether additional subagents are needed" }
    ],
    correctAnswers: ["B"],
    category: "Agentic Architecture",
    explanation: "Định tuyến động (dynamic routing) giúp tối ưu hóa chi phí và tốc độ bằng cách chỉ kích hoạt các subagents thực sự cần thiết cho độ phức tạp của câu hỏi hiện tại, lược bỏ các bước cồng kềnh thừa thãi.",
    tags: ["Dynamic Routing", "Cost Optimization", "Orchestrator"]
  },
  {
    id: "cca40",
    questionNumber: 40,
    text: "After completing an initial analysis of your customer service agent's escalation logic, you want to evaluate two alternative strategies: one using threshold-based triggers and another using policy-gap detection. Both strategies should build on the same baseline understanding of the current codebase without repeating the initial analysis. Which session management approach allows you to explore both independently from the shared baseline?",
    options: [
      { key: "A", text: "Start two new sessions from scratch and re-run the codebase analysis in each before exploring the respective strategy" },
      { key: "B", text: "Copy the session transcript into two new prompts manually and start fresh sessions with the pasted context" },
      { key: "C", text: "Resume the original session with --resume and explore both approaches sequentially, using /compact between them to clear context" },
      { key: "D", text: "Use fork_session to create two independent branches from the shared analysis baseline, exploring each strategy in its own branch" }
    ],
    correctAnswers: ["D"],
    category: "Claude Code CLI",
    explanation: "Tính năng chia nhánh phiên 'fork_session' (hoặc lệnh fork tương tự trong CLI) cho phép rẽ nhánh cuộc hội thoại từ một điểm mốc cố định, giúp thử nghiệm các chiến lược khác nhau mà không phải chạy lại từ đầu.",
    tags: ["fork_session", "Claude Code", "Experimentation"]
  },
  {
    id: "cca41",
    questionNumber: 41,
    text: "Your team's automated code review pipeline generates hundreds of findings weekly, but developers report that many are low-value. With limited reviewer bandwidth, which approach best ensures human reviewers focus on the findings most likely to be actionable?",
    options: [
      { key: "A", text: "Filter findings by source file directory and route only findings in security-critical paths to human reviewers" },
      { key: "B", text: "Run a verification pass where the model self-reports a confidence score alongside each finding then use confidence thresholds to route uncertain findings to human reviewers first" },
      { key: "C", text: "Count the lines of code affected by each finding and prioritize findings with the largest code surface area for review" },
      { key: "D", text: "Aggregate all findings by category and present only one representative example per category to reduce total reviewer volume" }
    ],
    correctAnswers: ["A"],
    category: "Security & Guardrails",
    explanation: "Lọc cảnh báo dựa trên mức độ rủi ro (như các thư mục nhạy cảm chứa code thanh toán, xác thực) là cách thiết thực nhất để điều tiết băng thông rà soát của con người vào các chỗ trọng yếu.",
    tags: ["Risk-based Filtering", "Noise Reduction", "Code Review"]
  },
  {
    id: "cca42",
    questionNumber: 42,
    text: "Within your customer service system, the agent has four well-described MCP tools: fetch_customer, get_order, issue_refund, and handoff_to_human. Despite clear tool descriptions, whenever a customer mentions the word \"refund,\" the agent consistently calls handoff_to_human instead of issue_refund, even for straightforward cases within policy. After reviewing the configuration, you find the system prompt includes: \"When a customer mentions a refund, always ensure a human is involved.\" What is the most likely cause of this behavior and how should it be resolved?",
    options: [
      { key: "A", text: "The handoff_to_human tool description overlaps with issue_refund, so both tools should be renamed to more distinctive names" },
      { key: "B", text: "The issue_refund tool description needs to explicitly state that it should be selected over handoff_to_human for standard refund requests" },
      { key: "C", text: "The keyword-sensitive instruction in the system prompt creates an unintended association that overrides the tool descriptions, so the prompt should be revised to specify precise conditions requiring human involvement" },
      { key: "D", text: "The agent's tool_choice setting should be changed to forced selection of issue_refund whenever refund-related keywords are detected in the input" }
    ],
    correctAnswers: ["C"],
    category: "Prompt Engineering",
    explanation: "Do chỉ thị trong prompt hệ thống có trọng số rất cao, một luật quá tuyệt đối về từ khóa ('luôn có người tham gia khi nhắc tới refund') sẽ đè lên mô tả chi tiết của công cụ. Cần tinh chỉnh prompt rõ ràng hơn.",
    tags: ["System Prompt weight", "Keyword Associations", "Tool selection conflict"]
  },
  {
    id: "cca43",
    questionNumber: 43,
    text: "A document analysis subagent encounters a timeout when accessing one of three external data sources, but it successfully retrieves data from the other two. Which error handling approach represents a best practice for this situation?",
    options: [
      { key: "A", text: "Queue the failed query for background retry and block the coordinator from proceeding until the retry completes or times out" },
      { key: "B", text: "Terminate the entire analysis workflow and report the timeout failure to the user" },
      { key: "C", text: "Return the results from the two successful sources as if all three queries succeeded, omitting any indication that one source failed" },
      { key: "D", text: "Attempt local recovery for the transient failure, and if unresolved, propagate structured error context with partial results to the coordinator" }
    ],
    correctAnswers: ["D"],
    category: "Agentic Architecture",
    explanation: "Trong hệ thống tác nhân phức tạp, chiến lược phục hồi lỗi tốt nhất là thử tự sửa chữa cục bộ, và nếu không được, trả về kết quả một phần kèm siêu dữ liệu mô tả phần lỗi để hệ thống hạ cấp mượt mà.",
    tags: ["Graceful Degradation", "Error Propagation", "Subagents"]
  },
  {
    id: "cca44",
    questionNumber: 44,
    text: "While updating a large configuration file, Claude Code's Edit tool fails with an error indicating the target text appears in multiple locations within the file. The specific section that needs modification contains boilerplate text identical to several other sections. What is the recommended fallback approach?",
    options: [
      { key: "A", text: "Use Bash to run a sed command that targets the specific line number for replacement" },
      { key: "B", text: "Use Read to load the full file contents, apply the modification, and then use Write to save the complete updated file" },
      { key: "C", text: "Split the configuration file into smaller files so that each section contains unique text for Edit to match" },
      { key: "D", text: "Retry the Edit tool with a larger context window setting to improve text matching precision" }
    ],
    correctAnswers: ["B"],
    category: "Claude Code CLI",
    explanation: "Edit dựa trên cơ chế so khớp chuỗi duy nhất. Nếu chuỗi bị trùng lặp nhiều nơi, phương án fallback an toàn và chuẩn mực nhất là đọc toàn bộ file ('Read'), thực hiện chỉnh sửa trong bộ nhớ rồi ghi đè lại ('Write').",
    tags: ["Edit Fallback", "Read-Write", "Claude Code"]
  },
  {
    id: "cca45",
    questionNumber: 45,
    text: "A user sends a single request to the research platform asking it to investigate three distinct subtopics: market size projections, regulatory developments, and competitive landscape. Which strategy should the coordinator agent use to handle this multi-faceted request efficiently?",
    options: [
      { key: "A", text: "Decompose the request into three distinct research items, delegate each to appropriate subagents for parallel investigation, then synthesize the results into a unified response" },
      { key: "B", text: "Ask the user to resubmit the request as three separate queries so each can be routed to the correct subagent independently" },
      { key: "C", text: "Route the full request to the synthesis agent, which determines what information it needs and delegates research accordingly" },
      { key: "D", text: "Forward the entire request to the web search agent and have it address all three subtopics sequentially within a single invocation" }
    ],
    correctAnswers: ["A"],
    category: "Agentic Architecture",
    explanation: "Chiến lược phân tách công việc (decomposing) và giao cho các subagents xử lý song song, sau đó gộp kết quả là cách vận hành chuẩn mực giúp giảm thời gian chờ đợi (latency) đáng kể.",
    tags: ["Task Decomposition", "Parallel Execution", "Orchestrator"]
  },
  {
    id: "cca46",
    questionNumber: 46,
    text: "Your extraction system has the model output field-level confidence scores to route low-confidence extractions to human review. However, reviewers report that many supposedly high-confidence extractions contain errors, while some flagged low-confidence ones are correct. What is the most effective way to improve the accuracy of this routing?",
    options: [
      { key: "A", text: "Lower the confidence threshold significantly so that nearly all extractions are routed to human review" },
      { key: "B", text: "Replace field-level confidence scores with a single document-level confidence score to simplify the routing logic" },
      { key: "C", text: "Remove confidence scoring entirely and instead route all extractions from specific document types known to be error-prone to human review" },
      { key: "D", text: "Calibrate the confidence score thresholds using a labeled validation set of known-correct extractions to align reported confidence with actual accuracy" }
    ],
    correctAnswers: ["D"],
    category: "Evaluation & Bias",
    explanation: "Mức độ tự tin tự khai báo (self-reported confidence) của LLM thường chưa được căn chỉnh chuẩn xác (uncalibrated). Việc đo đạc trên tập dữ liệu kiểm định nhãn chuẩn để hiệu chỉnh lại ngưỡng phân phối là chuẩn mực khoa học.",
    tags: ["Calibration", "Confidence Scores", "Human-in-the-loop"]
  },
  {
    id: "cca47",
    questionNumber: 47,
    text: "A team needs to integrate Claude's output with a downstream inventory management system that requires strictly valid JSON conforming to a predefined schema. They are evaluating different approaches to ensure the output never contains JSON syntax errors such as missing brackets, trailing commas, or unescaped characters. Which approach provides the strongest guarantee of schema-compliant, syntax-error-free output?",
    options: [
      { key: "A", text: "Defining the required structure as a tool's JSON schema input parameters and extracting data from the tool_use response" },
      { key: "B", text: "Providing a detailed JSON template in the system prompt with instructions to replicate the exact structure" },
      { key: "C", text: "Appending few-shot examples of correctly formatted JSON to every extraction prompt" },
      { key: "D", text: "Parsing the model's freeform text response with a JSON validator and requesting corrections when syntax errors are detected" }
    ],
    correctAnswers: ["A"],
    category: "Security & Guardrails",
    explanation: "Sử dụng 'Tool Use' (hoặc Structured Outputs của API) kích hoạt chế độ giải mã ràng buộc (constrained decoding), cam đoan về mặt toán học rằng văn bản sinh ra khớp 100% với JSON schema đã định nghĩa.",
    tags: ["Constrained Decoding", "Structured Outputs", "JSON Schema"]
  },
  {
    id: "cca48",
    questionNumber: 48,
    text: "A developer productivity agent has access to a generic fetch_url tool that can retrieve content from any URL on the internet. During testing, the agent occasionally fetches unrelated external websites when it should only load internal API documentation hosted on the company's documentation server. Which approach most reliably prevents this misuse?",
    options: [
      { key: "A", text: "Add a system prompt instruction specifying that fetch_url should only be used for internal documentation URLs" },
      { key: "B", text: "Set tool_choice to force fetch_url on every turn so the agent always uses the tool in a predictable manner" },
      { key: "C", text: "Replace fetch_url with a load_internal_docs tool that validates URLs against the internal documentation domain before making the request" },
      { key: "D", text: "Implement a PostToolUse hook that checks the fetched content and discards results from non-documentation domains" }
    ],
    correctAnswers: ["C"],
    category: "Security & Guardrails",
    explanation: "Quy tắc an ninh tối thượng: Đừng dựa vào prompt để phòng chống lạm dụng. Hãy thay thế công cụ vạn năng bằng công cụ có phạm vi cực kỳ hẹp và kiểm soát tên miền (allowlist) trực tiếp trong mã code nghiệp vụ.",
    tags: ["Tool Securing", "Security Boundaries", "Guardrails"]
  },
  {
    id: "cca49",
    questionNumber: 49,
    text: "You are building an invoice extraction pipeline where Claude extracts line items and totals from scanned invoices. Occasionally, extracted line item amounts do not add up to the extracted total, but both values exist in the source document. Which schema design most effectively enables automatic detection of these arithmetic discrepancies?",
    options: [
      { key: "A", text: "Include both a \"calculated_total\" field for the sum of extracted line items and a \"stated_total\" field for the document's printed total, then compare them programmatically to flag mismatches" },
      { key: "B", text: "Include a \"confidence_score\" field for the total amount and reject any extraction where the confidence falls below 0.9" },
      { key: "C", text: "Add a required \"total_verified\" boolean that the model must set to true after confirming the total matches the line items" },
      { key: "D", text: "Require the model to extract the total amount in two separate fields and average the two values to improve accuracy" }
    ],
    correctAnswers: ["A"],
    category: "Evaluation & Bias",
    explanation: "Do LLM làm toán rất kém và mang tính xác suất, thiết kế schema yêu cầu trích xuất dữ liệu thô (stated_total và line items) để nhường quyền tính toán và đối chiếu logic kiểm soát lại cho mã lập trình phía sau.",
    tags: ["Arithmetic Validation", "Schema Design", "Reliability"]
  },
  {
    id: "cca50",
    questionNumber: 50,
    text: "The agent in your customer service system has a single MCP tool called manage_account that handles profile updates, password resets, subscription changes, and account deactivation. During testing, the agent frequently sends incorrect parameters because it conflates these distinct operations. What is the recommended approach to improve the agent's tool selection reliability?",
    options: [
      { key: "A", text: "Implement a PostToolUse hook that validates the parameters after each manage_account call and retries with corrected parameters if the operation type was wrong" },
      { key: "B", text: "Use tool_choice forced selection to always call manage_account and add a required \"operation_type\" enum parameter to disambiguate the intended action" },
      { key: "C", text: "Add a comprehensive description to manage_account that lists all four operations with their respective required parameters and usage conditions" },
      { key: "D", text: "Split manage_account into purpose-specific tools such as update_profile, reset_password, change_subscription, and deactivate_account, each with clearly defined input/output contracts" }
    ],
    correctAnswers: ["D"],
    category: "Model Context Protocol",
    explanation: "Khuyến nghị cốt lõi của Anthropic về thiết kế công cụ: Tránh các siêu công cụ tích hợp quá nhiều thứ (all-in-one). Hãy phân tách thành các công cụ đơn chức năng, có tên rõ ràng và hợp đồng tham số đơn giản.",
    tags: ["Tool Design", "Single-purpose Tools", "MCP Tools"]
  },
  {
    id: "cca51",
    questionNumber: 51,
    text: "Your team's CI/CD pipeline is configured to run Claude Code for automated code review on every pull request. During the first test run, the pipeline job hangs indefinitely and eventually times out without producing any output. What is the most likely cause of this behavior?",
    options: [
      { key: "A", text: "The pull request diff exceeded the context window limit causing Claude Code to fail silently" },
      { key: "B", text: "Claude Code is waiting for interactive input because the -p flag was not included in the command" },
      { key: "C", text: "The CLAUDE.md file is missing review criteria causing Claude Code to loop indefinitely while searching for instructions" },
      { key: "D", text: "The --output-format flag was not specified preventing Claude Code from writing output to stdout" }
    ],
    correctAnswers: ["B"],
    category: "Claude Code CLI",
    explanation: "Khi chạy trong môi trường CI/CD (không tương tác), Claude Code cần có cờ '-p' (hoặc '--print') để kích hoạt chế độ in trực tiếp và thoát ngay sau khi hoàn tất, tránh bị treo chờ nhập phím.",
    tags: ["CI/CD Flags", "Claude Code", "Troubleshooting"]
  },
  {
    id: "cca52",
    questionNumber: 52,
    text: "Your company policy requires that any refund exceeding $500 must be approved by a human supervisor before processing. During testing, you discover that prompt instructions alone occasionally fail to prevent the agent from calling issue_refund for amounts above the threshold. Which implementation guarantees this business rule is enforced without exception?",
    options: [
      { key: "A", text: "Implement a tool call interception hook that inspects the amount parameter on issue_refund calls, blocks those exceeding $500, and redirects the workflow to handoff_to_human" },
      { key: "B", text: "Strengthen the system prompt by adding explicit instructions with bold emphasis: \"NEVER issue refunds above $500 without human approval\"" },
      { key: "C", text: "Include three few-shot examples in the prompt demonstrating correct escalation for high-value refunds" },
      { key: "D", text: "Set the issue_refund tool's JSON schema to define a maximum value constraint of 500 on the amount field" }
    ],
    correctAnswers: ["A"],
    category: "Security & Guardrails",
    explanation: "Để kiểm soát tuyệt đối không sai sót, giải pháp là chặn đầu cuộc gọi công cụ (programmatic interception hook) tại tầng ứng dụng để phân tích tham số, từ chối thực thi và chuyển giao sang người hỗ trợ.",
    tags: ["Interception Hook", "Deterministic Safety", "Guardrails"]
  },
  {
    id: "cca53",
    questionNumber: 53,
    text: "Your team needs to connect Claude Code to both Jira for issue tracking and a proprietary internal approval workflow system that is unique to your organization. A developer proposes building custom MCP servers for both integrations to keep the codebase consistent. What is the recommended approach?",
    options: [
      { key: "A", text: "Use a community MCP server for Jira and build a custom MCP server only for the proprietary approval workflow" },
      { key: "B", text: "Build a single custom MCP server that consolidates both Jira and approval workflow interactions behind a unified interface" },
      { key: "C", text: "Use community MCP servers for both integrations by adapting the proprietary approval workflow API to match an existing community server's interface" },
      { key: "D", text: "Build custom MCP servers for both integrations to ensure consistent implementation patterns and full control over tool behavior" }
    ],
    correctAnswers: ["A"],
    category: "Model Context Protocol",
    explanation: "Cách tiếp cận lai (hybrid approach) được khuyên dùng trong hệ sinh thái MCP: Tiết kiệm tài nguyên bằng cách tận dụng các dự án cộng đồng cho công cụ phổ biến (Jira), và chỉ viết code custom cho hệ thống nội bộ.",
    tags: ["Community Server", "MCP Architecture", "Best Practices"]
  },
  {
    id: "cca54",
    questionNumber: 54,
    text: "Your multi-agent research system produces a synthesis report that combines findings from web search and document analysis subagents. Two credible sources provide conflicting market size statistics, and the synthesis subagent must produce the final output. How should the report handle this conflict?",
    options: [
      { key: "A", text: "Average the two statistics to produce a single balanced figure and cite both sources" },
      { key: "B", text: "Omit the market size data point entirely to avoid presenting potentially inaccurate information" },
      { key: "C", text: "Present both statistics with full source attribution in a section that explicitly distinguishes contested findings from well-established ones, preserving each source's methodological context" },
      { key: "D", text: "Select the statistic from the most authoritative source based on publication recency and discard the conflicting value" }
    ],
    correctAnswers: ["C"],
    category: "Evaluation & Bias",
    explanation: "Tính trung thực tri thức (intellectual honesty) đòi hỏi tác nhân phải hiển thị cả hai số liệu mâu thuẫn kèm trích dẫn nguồn riêng biệt, thay vì bịa ra con số trung bình hoặc tự ý xóa bỏ thông tin có ích.",
    tags: ["Conflict Resolution", "Synthesis", "Factual Accuracy"]
  },
  {
    id: "cca55",
    questionNumber: 55,
    text: "Your team wants to enforce a universal rule that all generated TypeScript code must use named exports instead of default exports. This standard should apply automatically every time Claude Code writes or modifies any TypeScript file in the project. Where should this convention be defined?",
    options: [
      { key: "A", text: "In a user-scoped command under ~/.claude/commands/ that each developer runs at the start of their session" },
      { key: "B", text: "In the project-level CLAUDE.md or a .claude/rules/ file so it is always loaded for every interaction" },
      { key: "C", text: "In a custom slash command stored in .claude/commands/ that developers must remember to call before each task" },
      { key: "D", text: "In a skill file under .claude/skills/ with a SKILL.md that engineers invoke on demand before writing code" }
    ],
    correctAnswers: ["B"],
    category: "Claude Code CLI",
    explanation: "Các tiêu chuẩn dự án mang tính tự động hóa và bao trùm cần phải được viết tại tệp CLAUDE.md ở gốc dự án hoặc các quy tắc '.claude/rules/' chung để được nạp vô điều kiện trong mọi phiên làm việc.",
    tags: ["Named Exports", "Global Configuration", "Claude Code"]
  },
  {
    id: "cca56",
    questionNumber: 56,
    text: "Currently, your customer service agent has access to fetch_customer and get_order, but both tools have minimal one-line descriptions: \"Fetches customer data\" and \"Gets order information.\" When a customer asks about a recent purchase, the agent inconsistently alternates between calling fetch_customer and get_order. What is the primary reason for this unreliable tool selection?",
    options: [
      { key: "A", text: "The tool names are too similar in length, causing the model to confuse them regardless of their descriptions" },
      { key: "B", text: "Tool descriptions are the primary mechanism the model uses for tool selection, and the minimal descriptions do not provide enough information to differentiate when each tool should be used" },
      { key: "C", text: "The model requires tool_choice to be set to forced selection before it can reliably distinguish between any two tools" },
      { key: "D", text: "The agent's context window is exhausted by other content, leaving insufficient space to load both tool definitions simultaneously" }
    ],
    correctAnswers: ["B"],
    category: "Model Context Protocol",
    explanation: "Mô tả công cụ (tool description) là đầu mối thông tin quan trọng nhất để LLM quyết định kích hoạt. Việc viết mô tả hời hợt, một dòng sẽ trực tiếp làm suy giảm khả năng phân biệt ngữ cảnh sử dụng của tác nhân.",
    tags: ["Tool Selection", "Descriptions", "MCP Tools"]
  },
  {
    id: "cca57",
    questionNumber: 57,
    text: "A CI pipeline needs to run Claude Code to analyze pull requests and produce machine-parseable review findings that a downstream script posts as inline comments. Which combination of CLI flags ensures the output conforms to a predefined JSON structure?",
    options: [
      { key: "A", text: "--output-format json combined with --json-schema" },
      { key: "B", text: "-p combined with --json-schema only" },
      { key: "C", text: "--output-format structured combined with --schema-file" },
      { key: "D", text: "--format json-strict combined with --validate-output" }
    ],
    correctAnswers: ["A"],
    category: "Claude Code CLI",
    explanation: "Định dạng chuẩn để nhận được JSON có cấu trúc cứng từ Claude Code CLI là sự kết hợp của cờ '--output-format json' cùng định nghĩa '--json-schema' đi kèm.",
    tags: ["Structured JSON", "CLI Flags", "Claude Code"]
  },
  {
    id: "cca58",
    questionNumber: 58,
    text: "Your support agent calls a lookup_order MCP tool that returns over 40 fields per order, including shipping carrier details, warehouse codes, and internal tracking metadata. The agent only needs 5 fields to process a return. After several order lookups in one session, response quality noticeably declines. Which approach best addresses this issue?",
    options: [
      { key: "A", text: "Switch to a model with a larger context window so verbose tool outputs can be accommodated without impacting quality" },
      { key: "B", text: "Limit the agent to a maximum of three order lookups per session to prevent excessive context accumulation" },
      { key: "C", text: "Trim the tool output to include only return-relevant fields before appending the result to conversation context" },
      { key: "D", text: "Summarize the entire conversation history periodically using progressive summarization to reclaim token budget" }
    ],
    correctAnswers: ["C"],
    category: "Model Context Protocol",
    explanation: "Phương án tối ưu là chủ động rút gọn (trim) dữ liệu trả về từ công cụ ngay trước khi đẩy vào ngữ cảnh hội thoại, chỉ giữ lại các trường hữu ích, loại bỏ rác thông tin để chống loãng suy luận.",
    tags: ["Context Optimization", "Tool Output Trim", "Tokens"]
  },
  {
    id: "cca59",
    questionNumber: 59,
    text: "Your team is using Claude Code to implement a new CSV parsing module that must handle complex edge cases, including quoted delimiters, multiline fields, and malformed rows. Requirements are well-defined but numerous. Which approach best supports iterative refinement of the implementation?",
    options: [
      { key: "A", text: "Describe all edge cases in a single prompt and request that Claude Code generate both the implementation and tests in one pass" },
      { key: "B", text: "Write a comprehensive test suite covering expected behavior, edge cases, and malformed input handling first, then iterate by sharing test failures with Claude Code to guide corrections" },
      { key: "C", text: "Implement the module first without tests, then ask Claude Code to review its own output for issues in the same session" },
      { key: "D", text: "Generate the implementation with Claude Code, manually test each edge case by running the code, and file separate bug reports for each failure" }
    ],
    correctAnswers: ["B"],
    category: "Claude Code CLI",
    explanation: "Phát triển hướng kiểm thử (TDD) là cực kỳ hoàn hảo khi kết hợp với các tác nhân AI. Việc có bộ test xác thực rõ ràng giúp tạo lập vòng phản hồi chất lượng cao cho tác nhân tự sửa chữa code hiệu quả.",
    tags: ["TDD", "Iterative Refinement", "Claude Code"]
  },
  {
    id: "cca60",
    questionNumber: 60,
    text: "A new engineer on the team reports that Claude Code is not following the project's API naming conventions during code generation, even though other engineers on the same repository see the conventions applied correctly. What is the most effective first diagnostic step to identify the cause of this inconsistency?",
    options: [
      { key: "A", text: "Reinstall Claude Code on the engineer's machine to clear any corrupted cached configurations" },
      { key: "B", text: "Add the API naming conventions as inline comments in every source file so Claude Code reads them directly" },
      { key: "C", text: "Move all project configuration from .claude/rules/ into a single root-level CLAUDE.md to simplify the file structure" },
      { key: "D", text: "Ask the engineer to run the /memory command to verify which memory files are currently loaded in their session" }
    ],
    correctAnswers: ["D"],
    category: "Claude Code CLI",
    explanation: "Lệnh '/memory' là lệnh chẩn đoán tối ưu để xác minh xem tác nhân có đang nạp đúng và đủ các tệp cấu hình của dự án (như CLAUDE.md hoặc .claude/rules/) trên máy hiện tại hay không.",
    tags: ["/memory", "Diagnostics", "Claude Code"]
  },
  {
    id: "cca61",
    questionNumber: 61,
    text: "Based on the prompt caching architecture shown in the diagram, how should you structure your API requests to Claude 3.5 Sonnet to maximize cache hit rates and reduce overall API latency?",
    imageUrl: "/assets/cca_q61.jpg",
    options: [
      { key: "A", text: "Place frequently changing dynamic user messages at the beginning of the prompt, and the static system prompt and tools at the very end." },
      { key: "B", text: "Keep the system prompt, tools, and heavy reference documents static at the beginning of the request, and mark the end of the static segment with 'cache_control': {'type': 'ephemeral'}." },
      { key: "C", text: "Randomize the ordering of messages in each API call to allow the cache server to dynamically re-index all blocks." },
      { key: "D", text: "Prompt caching is automatically managed by the API gateway on any arbitrary message layout, requiring no explicit payload design." }
    ],
    correctAnswers: ["B"],
    category: "Architecture & Optimization",
    explanation: "Để tận dụng tối đa Prompt Caching của Anthropic, các khối dữ liệu tĩnh, kích thước lớn (như system prompt, định nghĩa tools, tài liệu hướng dẫn hoặc lịch sử hội thoại ổn định) phải được xếp ở đầu yêu cầu và được đánh dấu bộ nhớ đệm (ví dụ: 'cache_control': {'type': 'ephemeral'}). Bất kỳ thay đổi nhỏ nào ở phần trước điểm cache cũng sẽ làm mất hiệu lực bộ nhớ đệm (cache invalidation).",
    tags: ["Prompt Caching", "API Design", "Optimization"]
  },
  {
    id: "cca62",
    questionNumber: 62,
    text: "You are designing an enterprise desktop application that integrates Claude Code with multiple distinct data sources (local files, a relational database, and an external API). Based on the Model Context Protocol (MCP) architecture shown in the diagram, what is the correct protocol flow for tool invocation?",
    imageUrl: "/assets/cca_q62.jpg",
    options: [
      { key: "A", text: "The MCP Servers directly fetch user instructions from the LLM via webhooks, execute them, and return the output directly to the end-user UI." },
      { key: "B", text: "The client application communicates with the LLM. When the LLM decides to use a tool, it returns a tool use block to the Client. The Client routes this call to the respective MCP Server via standard JSON-RPC, receives the tool output, and sends it back to the LLM." },
      { key: "C", text: "Each MCP Server contains a localized instance of Claude that independently synthesizes user prompts before syncing via peer-to-peer WebSockets." },
      { key: "D", text: "The Client bypasses the LLM entirely, using local heuristic models to map user queries to MCP Server endpoints." }
    ],
    correctAnswers: ["B"],
    category: "Model Context Protocol",
    explanation: "MCP hoạt động theo mô hình Client-Server trong đó Client (như Claude Code, Claude Desktop) giữ vai trò trung gian điều phối. Server không bao giờ tự ý nói chuyện trực tiếp với LLM; thay vào đó, LLM trả về yêu cầu 'tool use' cho Client, Client gọi MCP Server tương ứng qua JSON-RPC (qua stdio/SSE) rồi gửi lại kết quả của công cụ về cho LLM.",
    tags: ["MCP Architecture", "JSON-RPC", "Tool Invocation"]
  },
  {
    id: "cca63",
    questionNumber: 63,
    text: "You are implementing a multi-agent workflow in an editor application using Claude 3.5 Sonnet. Based on the Orchestrator-Workers design pattern illustrated in the diagram, how should the Router/Supervisor agent coordinate the sub-agents to compile a comprehensive documentation portal?",
    imageUrl: "/assets/cca_q63.jpg",
    options: [
      { key: "A", text: "Provide all sub-agents with full read/write access to a shared global state, and let them execute concurrently without a supervisor." },
      { key: "B", text: "The Router agent analyzes the high-level task, breaks it down into structured sub-tasks, dynamically delegates each sub-task to specialized, isolated worker agents, gathers their individual outputs, and synthesizes the final comprehensive portal." },
      { key: "C", text: "Configure a single agent instance to run in a continuous loop, progressively mutating the same system prompt to simulate different personas." },
      { key: "D", text: "Force a strict circular chain workflow where each sub-agent must wait for the output of the previous agent regardless of task relevance." }
    ],
    correctAnswers: ["B"],
    category: "Agent Architecture",
    explanation: "Mô hình Orchestrator-Workers (hay Supervisor-Subagents) cực kỳ tối ưu cho các tác vụ phức tạp cần chia nhỏ. Tác nhân Router đóng vai trò phân rã bài toán lớn, giao việc cho các Sub-agents chuyên trách (được thiết kế prompts và tools riêng biệt để đạt độ chính xác cao), sau đó tổng hợp kết quả để tránh hiện tượng loãng ngữ cảnh và giảm sai sót.",
    tags: ["Multi-Agent", "Orchestrator Pattern", "Workflows"]
  },
  {
    id: "cca64",
    questionNumber: 64,
    text: "You are designing an AI customer support platform using Claude. To ensure enterprise compliance and prevent prompt injection or hallucinated policy violations, you implement safety guardrails as shown in the diagram. Which statement accurately describes the processing pipeline?",
    imageUrl: "/assets/cca_q64.jpg",
    options: [
      { key: "A", text: "Input guardrails classify user prompts for safety before sending them to Claude; output guardrails run synchronously on Claude's generated text to validate compliance before final rendering." },
      { key: "B", text: "Input guardrails dynamically rewrite user queries to include pre-approved responses, bypassing Claude entirely for any complex query." },
      { key: "C", text: "Output guardrails are executed asynchronously after the response is delivered to the user to avoid introducing latency." },
      { key: "D", text: "Guardrails replace Claude's core neural network weights dynamically during inference depending on the user's role." }
    ],
    correctAnswers: ["A"],
    category: "Evaluation & Bias",
    explanation: "Một đường ống Guardrails an toàn, toàn diện bao gồm: 1) Input Guardrails chặn lọc mã độc, prompt injection và nội dung độc hại ngay trước khi gửi tới LLM, và 2) Output Guardrails kiểm tra đồng bộ câu trả lời sinh ra từ LLM (về độ chính xác, chính sách bảo mật, thông tin nhạy cảm) trước khi hiển thị cho người dùng cuối.",
    tags: ["Guardrails", "AI Safety", "Compliance"]
  },
  {
    id: "cca65",
    questionNumber: 65,
    text: "You are building an advanced Retrieval-Augmented Generation (RAG) system for corporate policy documents using Claude. Based on the processing pipeline shown in the diagram, how does the integration of Hybrid Search and a Reranking model optimize the generation quality?",
    imageUrl: "/assets/cca_q65.jpg",
    options: [
      { key: "A", text: "Hybrid Search combines vector similarity (dense) with keyword matching (sparse) to capture both semantic meaning and exact jargon. The Reranker then filters and re-orders the top results, ensuring only the most relevant, high-signal contexts are injected into Claude's prompt." },
      { key: "B", text: "Hybrid Search replaces the vector database entirely, while the Reranker dynamically modifies Claude's system temperature settings." },
      { key: "C", text: "The Reranker translates user queries into multiple languages, while Hybrid Search performs parallel web lookups." },
      { key: "D", text: "The pipeline relies solely on keyword search, using the Reranker to randomly shuffle documents to introduce response variety." }
    ],
    correctAnswers: ["A"],
    category: "Architecture & Optimization",
    explanation: "Tìm kiếm lai (Hybrid Search) phối hợp sức mạnh của Dense Retrieval (tìm kiếm ngữ nghĩa bằng vector embeddings) và Sparse Retrieval (tìm kiếm từ khóa chính xác BM25). Bộ tái sắp xếp (Reranker) đánh giá lại mức độ khớp thông tin thực tế, chỉ lọc và đẩy các tài liệu có độ tương quan cao nhất vào prompt gửi đến Claude, giảm thiểu nhiễu thông tin và ngăn ngừa hiện tượng ảo tưởng (hallucination).",
    tags: ["RAG", "Hybrid Search", "Reranker", "Claude Context"]
  }
];
