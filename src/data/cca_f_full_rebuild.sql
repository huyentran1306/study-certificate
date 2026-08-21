-- Claude Certified Architect - Foundations (CCA-F)
-- Full clean rebuild. PDF questions are first; unique HTML questions follow.
-- Total deduplicated questions: 213

BEGIN;

-- Clear stale learning history/progress when those optional tables exist.
DO $$
BEGIN
  IF to_regclass('public.study_history') IS NOT NULL THEN
    EXECUTE $sql$DELETE FROM public.study_history WHERE cert_id = 'cca-f'$sql$;
  END IF;
  IF to_regclass('public.user_progress') IS NOT NULL THEN
    EXECUTE $sql$DELETE FROM public.user_progress WHERE cert_id = 'cca-f'$sql$;
  END IF;
END;
$$;

DELETE FROM questions WHERE cert_id = 'cca-f';

INSERT INTO questions (
  id, cert_id, question_number, text, options,
  correct_answers, explanation, category, tags
) VALUES
(
  'cca-f-question-001', 'cca-f', 1,
  'Your structured data extraction system processes real estate listing documents. When listings describe property size with informal terms like "spacious" or "generous open-plan living area" instead of exact measurements, the model frequently fabricates numeric square footage values. Which approach would most effectively reduce these hallucinated values while preserving extraction accuracy for documents that contain explicit measurements?',
  '[{"key":"A","text":"Making the square_footage field required in the schema and adding a post-extraction validation step that rejects non-numeric values"},{"key":"B","text":"Removing the square_footage field from the extraction schema entirely to eliminate the possibility of fabrication"},{"key":"C","text":"Providing few-shot examples that demonstrate returning null for square footage when documents use informal descriptions, alongside examples that correctly extract explicit numeric measurements"},{"key":"D","text":"Adding the instruction \"only extract values you are certain about\" to the system prompt"}]'::jsonb,
  ARRAY['C']::text[],
  'Cung cấp các ví dụ few-shot chỉ ra việc trả về ''null'' cho các mô tả không chính thức là cách hiệu quả nhất để dạy cho LLM biết khi nào cần bỏ qua trường này, thay vì tự bịa đặt (hallucinate) dữ liệu số.',
  'Prompt Engineering',
  ARRAY['CCA-F', 'Few-shot', 'Structured Data', 'Hallucination']::text[]
),
(
  'cca-f-question-002', 'cca-f', 2,
  'A customer support agent calls the process_refund MCP tool, which fails because the requested refund amount exceeds the customer''s original order total. Currently the tool returns a generic "Operation failed" message, preventing the agent from explaining the issue to the customer. How should the tool''s error response be restructured to enable appropriate handling?',
  '[{"key":"A","text":"Return an error with errorCategory: \"validation\", isRetryable: false, and a description explaining the refund amount exceeds the order total"},{"key":"B","text":"Return a successful empty result with a warning field embedded in the response content indicating the amount was too high"},{"key":"C","text":"Return an error with errorCategory: \"permission\", isRetryable: true, and a description indicating the operation requires supervisor-level access"},{"key":"D","text":"Return an error with errorCategory: \"transient\", isRetryable: true, and a description suggesting the agent retry with the same parameters after a delay"}]'::jsonb,
  ARRAY['A']::text[],
  'Lỗi logic nghiệp vụ không được thử lại (như vượt quá số tiền) cần được phân loại là lỗi kiểm định đầu vào (''validation'') với ''isRetryable: false'' để tác nhân hiểu được nguyên nhân gốc rễ và xử lý phù hợp thay vì tự động chạy lại.',
  'Model Context Protocol',
  ARRAY['CCA-F', 'MCP Tools', 'Error Handling', 'Validation']::text[]
),
(
  'cca-f-question-003', 'cca-f', 3,
  'A developer asks Claude to generate a complex recursive algorithm, and then within the same conversation asks Claude to review the generated code for correctness. Claude reports no issues, but a peer reviewer later finds a subtle logic error. What best explains why the same-session review failed to catch this bug?',
  '[{"key":"A","text":"The review prompt did not include explicit criteria for checking recursive boundary conditions"},{"key":"B","text":"The generated code consumed most of the context window, leaving insufficient tokens for a thorough review"},{"key":"C","text":"The model defaults to positive assessments to maintain conversational coherence with the user"},{"key":"D","text":"The model retains its reasoning context from generation, making it less likely to question its own prior decisions in the same session"}]'::jsonb,
  ARRAY['D']::text[],
  'Do mô hình giữ nguyên ngữ cảnh suy luận từ quá trình tạo trước đó, nó dễ gặp phải thiên kiến xác nhận (confirmation bias) và khó khăn trong việc độc lập rà soát lại lỗi logic của chính nó trong cùng một phiên hội thoại.',
  'Evaluation & Bias',
  ARRAY['CCA-F', 'Confirmation Bias', 'Self-Review', 'Context']::text[]
),
(
  'cca-f-question-004', 'cca-f', 4,
  'The coordinator agent in the research platform is about to invoke the findings synthesis agent using a stateless agent call (so subagents do not inherit prior conversation context). Both the web search agent and the document analysis agent have already returned their results. How should the coordinator provide these prior findings to the synthesis agent?',
  '[{"key":"A","text":"Store the findings in an external database and give the synthesis agent credentials to query the results on its own"},{"key":"B","text":"Include the complete findings from both agents directly in the synthesis agent''s prompt so it has full access to all gathered information"},{"key":"C","text":"Instruct the synthesis agent to re-invoke the web search and document analysis agents independently to collect the information it needs"},{"key":"D","text":"Pass only a brief thematic summary to keep the synthesis agent''s context lean and avoid exceeding token limits"}]'::jsonb,
  ARRAY['B']::text[],
  'Do các tác nhân con chạy không trạng thái (stateless) và không kế thừa ngữ cảnh, tác nhân điều phối (orchestrator) phải thu thập toàn bộ dữ liệu thô thu được và đưa trực tiếp vào prompt của tác nhân tổng hợp kế tiếp.',
  'Agentic Architecture',
  ARRAY['CCA-F', 'Orchestrator-Worker', 'Subagents', 'Context Transfer']::text[]
),
(
  'cca-f-question-005', 'cca-f', 5,
  'During a prolonged codebase exploration session, an agent begins referencing "typical patterns" and giving vague descriptions instead of citing the specific classes and method signatures it discovered in earlier turns. What technique most effectively counteracts this context degradation?',
  '[{"key":"A","text":"Have the agent maintain a scratchpad file that records key findings such as class names, method signatures, and file paths, and reference it when answering subsequent questions"},{"key":"B","text":"Increase the max_tokens parameter so the agent can generate longer, more detailed responses"},{"key":"C","text":"Restart the exploration session from scratch whenever the agent''s responses become vague to ensure a clean context"},{"key":"D","text":"Use /compact repeatedly throughout the session to free up context space for new discoveries"}]'::jsonb,
  ARRAY['A']::text[],
  'Hiện tượng suy thoái ngữ cảnh (context rot) trong các phiên chat dài hạn được xử lý tốt nhất bằng cách lưu trữ các thông tin cốt lõi (như tên lớp, hàm, đường dẫn) vào một file nháp (scratchpad) để neo thông tin một cách ổn định.',
  'Prompt Engineering',
  ARRAY['CCA-F', 'Context Rot', 'Scratchpad', 'Memory']::text[]
),
(
  'cca-f-question-006', 'cca-f', 6,
  'In the research automation platform, the orchestrator agent runs an agentic loop that sends requests to Claude, receives responses, and decides whether to continue or stop. What mechanism does the loop use to determine whether it should execute another tool call or present the final response?',
  '[{"key":"A","text":"The model includes a boolean \"continue\" field in its JSON response body that the loop evaluates after each iteration"},{"key":"B","text":"The loop counts the number of tool calls made and stops after reaching a predefined maximum"},{"key":"C","text":"The system prompt includes a termination keyword that the model outputs when it has finished processing"},{"key":"D","text":"The stop_reason field in the API response indicates \"tool_use\" when the model wants to call a tool and \"end_turn\" when it considers the task complete"}]'::jsonb,
  ARRAY['D']::text[],
  'Sử dụng trường ''stop_reason'' của Messages API là giải pháp chính thống và tin cậy nhất. Giá trị ''tool_use'' nghĩa là vòng lặp cần gọi công cụ và tiếp tục, còn ''end_turn'' nghĩa là tác nhân đã hoàn thành.',
  'Agentic Architecture',
  ARRAY['CCA-F', 'Agentic Loop', 'stop_reason', 'Flow Control']::text[]
),
(
  'cca-f-question-007', 'cca-f', 7,
  'After the coordinator collects web search results, it invokes the findings synthesis agent to combine all research. However, the synthesis output shows no awareness of the previously gathered search findings, even though they are clearly present in the coordinator''s conversation history. What is the most likely cause?',
  '[{"key":"A","text":"The coordinator''s context window exceeded its limit, causing the search results to be silently dropped before the synthesis agent was invoked"},{"key":"B","text":"The synthesis agent''s system prompt contains an instruction that explicitly excludes externally sourced data"},{"key":"C","text":"The search results were returned in an encoding format that the synthesis agent cannot process"},{"key":"D","text":"Subagents do not automatically inherit the coordinator''s conversation history, so the search findings were never part of the synthesis agent''s context"}]'::jsonb,
  ARRAY['D']::text[],
  'Do kiến trúc cô lập ngữ cảnh giữa các subagents để chống tràn token và nhiễu dữ liệu, các tác nhân con không tự thừa hưởng lịch sử chat từ điều phối viên trừ khi nó được truyền thủ công trong prompt.',
  'Agentic Architecture',
  ARRAY['CCA-F', 'Context Isolation', 'Subagents', 'Data Passing']::text[]
),
(
  'cca-f-question-008', 'cca-f', 8,
  'While implementing the orchestrator agent''s agentic loop for the research platform, a developer decides to check whether the assistant''s response text contains the phrase "research complete" to determine when the loop should terminate. Why is this approach considered an anti-pattern?',
  '[{"key":"A","text":"It relies on parsing non-deterministic natural language output instead of using the reliable stop_reason field, which may produce inconsistent termination behavior"},{"key":"B","text":"It prevents the model from generating tool_use content blocks during subsequent loop iterations"},{"key":"C","text":"It causes the API to return an error because response text cannot be inspected until the full conversation is complete"},{"key":"D","text":"It forces the model to always output the phrase before it can use any tools, adding unnecessary latency to every iteration"}]'::jsonb,
  ARRAY['A']::text[],
  'Ngôn ngữ tự nhiên có tính phi xác định (non-deterministic). Việc dựa vào phân tích cú pháp chuỗi thô để phát hiện điều kiện dừng vòng lặp là rất dễ gãy hỏng, thay vào đó cần dùng ''stop_reason'' có tính chất xác định.',
  'Agentic Architecture',
  ARRAY['CCA-F', 'Anti-Pattern', 'Determinism', 'stop_reason']::text[]
),
(
  'cca-f-question-009', 'cca-f', 9,
  'Your document extraction pipeline uses a two-step process: first, it calls extract_metadata to determine the document type, then calls extract_fields with a type-specific schema. You plan to migrate this pipeline to the Message Batches API to reduce costs on a nightly run of 500 documents. What limitation of the batch API requires you to redesign this workflow?',
  '[{"key":"A","text":"The Message Batches API does not support multi-turn tool calling within a single request, so you cannot execute a tool and return its result mid-request for a second tool call"},{"key":"B","text":"The Message Batches API limits each submission to a maximum of 100 requests per batch"},{"key":"C","text":"The Message Batches API does not support forced tool selection, allowing only tool_choice set to auto"},{"key":"D","text":"The Message Batches API requires all requests in a batch to share the same system prompt and tool definitions"}]'::jsonb,
  ARRAY['A']::text[],
  'Message Batches API chỉ hỗ trợ xử lý không trạng thái một lượt (single-turn) bất đồng bộ. Nó không thể thực hiện chuỗi hội thoại nhiều lượt (gọi công cụ thứ nhất, đợi kết quả phản hồi rồi mới quyết định gọi tiếp công cụ thứ hai).',
  'Message Batches API',
  ARRAY['CCA-F', 'Batch API', 'Limitations', 'Single-Turn']::text[]
),
(
  'cca-f-question-010', 'cca-f', 10,
  'You spent yesterday investigating a bug in the customer service agent''s refund flow. You named that investigation session "refund-trace" and identified several promising leads. Today you want to continue exactly where you left off, preserving the full conversation history from yesterday. Which command correctly resumes your named session?',
  '[{"key":"A","text":"claude --session refund-trace --continue"},{"key":"B","text":"claude --load refund-trace"},{"key":"C","text":"claude --fork refund-trace"},{"key":"D","text":"claude --resume refund-trace"}]'::jsonb,
  ARRAY['D']::text[],
  'Trong Claude Code CLI, lệnh chuẩn xác để mở lại một phiên làm việc đã lưu trữ theo tên là ''claude --resume <tên_phiên>'' (hoặc ''-r <tên_phiên>'').',
  'Claude Code CLI',
  ARRAY['CCA-F', 'CLI Commands', 'Claude Code', 'Session Management']::text[]
),
(
  'cca-f-question-011', 'cca-f', 11,
  'Your multi-agent system queries a documentation database containing thousands of technical articles organized by product area and topic. Agents currently make numerous exploratory tool calls to discover what documentation is available before performing their targeted searches, consuming significant tokens and increasing latency. What is the recommended approach to reduce these exploratory calls?',
  '[{"key":"A","text":"Cache the results of exploratory tool calls in a shared database that all agents query before initiating new searches"},{"key":"B","text":"Increase each agent''s max_tokens allocation to accommodate the additional exploratory tool call results"},{"key":"C","text":"Expose a content catalog as an MCP resource that provides a browsable hierarchy of available documentation topics and article summaries"},{"key":"D","text":"Pre-load complete summaries of all documentation articles into the system prompt for every agent invocation"}]'::jsonb,
  ARRAY['C']::text[],
  'Khai báo danh mục nội dung (content catalog) như một tài nguyên MCP (MCP Resource) cung cấp cấu trúc cây giúp tác nhân có cái nhìn bao quát từ trước, tránh các cuộc gọi công cụ thăm dò tốn kém và mất thời gian.',
  'Model Context Protocol',
  ARRAY['CCA-F', 'MCP Resources', 'Optimization', 'Latency']::text[]
),
(
  'cca-f-question-012', 'cca-f', 12,
  'Your team asks Claude Code to transform legacy configuration files from an INI format into YAML. Despite detailed prose instructions describing the mapping rules, Claude Code produces inconsistent key naming and indentation across different files. What is the most effective technique to resolve this inconsistency?',
  '[{"key":"A","text":"Add a general instruction in CLAUDE.md that says \"always be consistent when transforming configuration formats\""},{"key":"B","text":"Increase the length of the prose instructions by adding more detailed paragraphs explaining each mapping rule"},{"key":"C","text":"Switch to plan mode and ask Claude Code to outline its transformation approach before applying any changes"},{"key":"D","text":"Provide 2–3 concrete input/output examples showing the exact transformation from specific INI sections to the expected YAML output"}]'::jsonb,
  ARRAY['D']::text[],
  'Cung cấp các mẫu ví dụ vào/ra cụ thể (few-shot examples) là biện pháp tin cậy hàng đầu khi thực hiện các tác vụ định dạng hoặc chuyển đổi nghiêm ngặt, giúp mô hình bám sát cấu trúc mong muốn hơn văn bản mô tả.',
  'Prompt Engineering',
  ARRAY['CCA-F', 'Few-Shot', 'Configuration', 'Consistency']::text[]
),
(
  'cca-f-question-013', 'cca-f', 13,
  'A team added "only report high-confidence findings" to their CI code review prompt after developers complained about too many low-value findings. The false positive rate, however, has not improved. What is the most likely reason this instruction failed to reduce false positives?',
  '[{"key":"A","text":"The instruction conflicts with the default tool_choice setting, which forces the model to report all detected issues"},{"key":"B","text":"The instruction does not define specific categories of issues to report or skip, so the model has no actionable criteria for filtering"},{"key":"C","text":"The model always treats every finding as high-confidence because it cannot calibrate certainty without labeled training data"},{"key":"D","text":"The CI pipeline''s non-interactive mode prevents the model from processing system prompt instructions"}]'::jsonb,
  ARRAY['B']::text[],
  'Các chỉ thị mang tính chủ quan, mơ hồ như ''high-confidence'' hay ''be conservative'' không đem lại tác dụng thực tế vì mô hình thiếu tiêu chí khách quan để lọc. Cần chỉ ra danh mục hoặc trường hợp cụ thể được phép hoặc bị cấm báo cáo.',
  'Prompt Engineering',
  ARRAY['CCA-F', 'Vague Instructions', 'CI/CD', 'Signal-to-Noise']::text[]
),
(
  'cca-f-question-014', 'cca-f', 14,
  'When a web search subagent in a multi-agent research pipeline encounters a database timeout and returns the generic message "search unavailable" to the coordinator, what is the primary problem this creates?',
  '[{"key":"A","text":"It causes the coordinator to immediately terminate the entire research workflow"},{"key":"B","text":"It prevents the coordinator from distinguishing between a transient timeout and a permanent access restriction, limiting its ability to choose an appropriate recovery strategy"},{"key":"C","text":"It forces the coordinator to retry the same query indefinitely until the service becomes available"},{"key":"D","text":"It causes all other subagents to halt their processing until the error is resolved"}]'::jsonb,
  ARRAY['B']::text[],
  'Lỗi chung chung ẩn giấu bản chất của sự cố. Việc che giấu này khiến tác nhân điều phối không thể phân biệt lỗi tạm thời (cần thử lại) với lỗi vĩnh viễn (cần bỏ qua hoặc chuyển hướng), làm giảm độ tin cậy của hệ thống.',
  'Agentic Architecture',
  ARRAY['CCA-F', 'Error Context', 'Recovery Strategy', 'Subagents']::text[]
),
(
  'cca-f-question-015', 'cca-f', 15,
  'You need to locate all migration script files across a large monorepo. These files follow the naming convention YYYYMMDD_description.sql and are distributed across multiple service directories at various nesting levels. Which built-in tool is the most appropriate choice for this task?',
  '[{"key":"A","text":"Read, loading each service directory to manually scan for migration files"},{"key":"B","text":"Grep, searching file contents for SQL migration keywords like CREATE TABLE or ALTER TABLE"},{"key":"C","text":"Bash, running a custom script that parses directory listings and filters by file extension"},{"key":"D","text":"Glob, using a pattern like **/_.sql to match migration file paths across all directories"}]'::jsonb,
  ARRAY['D']::text[],
  'Công cụ ''Glob'' được thiết kế chuyên biệt để duyệt và khớp tên file/đường dẫn một cách đệ quy trong thư mục dự án theo mẫu định sẵn, giúp tối ưu hóa hiệu suất và tiết kiệm cửa sổ ngữ cảnh hơn là quét nội dung hoặc dùng Bash.',
  'Claude Code CLI',
  ARRAY['CCA-F', 'Glob Tool', 'File Navigation', 'Claude Code']::text[]
),
(
  'cca-f-question-016', 'cca-f', 16,
  'The document analysis agent returns its findings as narrative text that blends source citations into flowing paragraphs. When the coordinator passes these results to the synthesis agent, the final report frequently contains misattributed or missing source references. Which change to the inter-agent data format would best address this problem?',
  '[{"key":"A","text":"Have the document analysis agent return findings in a structured format that separates each claim from its metadata, including source URLs, document names, and page numbers"},{"key":"B","text":"Instruct the synthesis agent to search the original documents again to independently verify all citations before generating the report"},{"key":"C","text":"Add a post-processing regular expression step that extracts citations from the narrative paragraphs after synthesis is complete"},{"key":"D","text":"Increase the synthesis agent''s context window budget so it can process longer narrative passages without losing citation details"}]'::jsonb,
  ARRAY['A']::text[],
  'Áp dụng định dạng truyền tin có cấu trúc (như JSON) giữa các tác nhân giúp chia tách rõ ràng giữa nội dung khẳng định và siêu dữ liệu (trích dẫn), ngăn chặn việc mô hình bị nhầm lẫn hoặc thất lạc trích dẫn gốc.',
  'Agentic Architecture',
  ARRAY['CCA-F', 'Structured Handoffs', 'JSON', 'Citations']::text[]
),
(
  'cca-f-question-017', 'cca-f', 17,
  'Your repository contains Python database migration files in three unrelated directories: db/migrations/, services/auth/migrations/, and tools/data/migrations/. All migration files must follow identical conventions for transaction handling and rollback patterns. What is the most maintainable approach to enforce these conventions?',
  '[{"key":"A","text":"Add all migration conventions to the root CLAUDE.md so they are always available, even when editing non-migration files"},{"key":"B","text":"Place a CLAUDE.md file with identical content in each of the three migration directories"},{"key":"C","text":"Create a shared migration-rules.md file and use @import in three separate subdirectory CLAUDE.md files to reference it"},{"key":"D","text":"Create a single file in .claude/rules/ with a glob pattern like globs: [\"**/migrations/**/*.py\"] that matches migration files across all locations"}]'::jsonb,
  ARRAY['D']::text[],
  'Cách tối ưu nhất trong Claude Code là tạo một file quy tắc duy nhất trong thư mục ''.claude/rules/'' kèm thuộc tính ''globs'' để tự động nạp chỉ khi tác nhân sửa các file Python nằm trong bất cứ thư mục migration nào.',
  'Claude Code CLI',
  ARRAY['CCA-F', 'Project Configuration', 'Memory rules', 'Claude Code']::text[]
),
(
  'cca-f-question-018', 'cca-f', 18,
  'A customer contacts your agent with a vague complaint: "Something is wrong with my account. I''ve been overcharged and I think someone else has accessed it." The scope of each concern is unclear until initial lookups are performed. Which task decomposition strategy is most appropriate for handling this type of open-ended, multi-concern request?',
  '[{"key":"A","text":"A predefined decision tree that maps each keyword in the customer''s message to a specific tool call sequence"},{"key":"B","text":"A fixed sequential pipeline that always runs fetch_customer, then get_order for the last 10 orders, then issue_refund for any billing discrepancy found"},{"key":"C","text":"Dynamic adaptive decomposition that investigates each concern based on what is discovered at each step, generating follow-up subtasks as findings emerge"},{"key":"D","text":"A single comprehensive prompt that includes all available customer data and asks the agent to resolve every concern in one turn"}]'::jsonb,
  ARRAY['C']::text[],
  'Với các yêu cầu phức tạp và mơ hồ, chiến lược ''Dynamic adaptive decomposition'' giúp tác nhân suy luận từng bước, tự khám phá manh mối và sinh các tiểu tác vụ tiếp nối dựa trên kết quả trung gian thu được.',
  'Agentic Architecture',
  ARRAY['CCA-F', 'Task Decomposition', 'Adaptive Agents', 'Reasoning']::text[]
),
(
  'cca-f-question-019', 'cca-f', 19,
  'In the research platform, the report generation agent must only produce a final report after the synthesis agent has confirmed that all research areas have adequate coverage. A developer enforces this ordering with a system prompt instruction telling the report agent to wait for synthesis confirmation. Why is a programmatic prerequisite gate a better choice?',
  '[{"key":"A","text":"Programmatic prerequisite gates provide deterministic enforcement, whereas prompt-based instructions have a non-zero failure rate and cannot guarantee compliance"},{"key":"B","text":"System prompts cannot reference other agents, so the report agent has no way to know the synthesis step exists"},{"key":"C","text":"Prompt instructions are only evaluated at the start of a session and are ignored during subsequent tool calls"},{"key":"D","text":"Programmatic gates run faster than prompt-based instructions, reducing overall pipeline latency"}]'::jsonb,
  ARRAY['A']::text[],
  'Do mô hình mang tính chất xác suất, việc hướng dẫn bằng prompt không thể đảm bảo 100% tuân thủ trong các logic luồng công việc nghiêm ngặt. Rào chắn bằng mã lập trình (code-level gate) đem lại sự thực thi tuyệt đối mang tính xác định.',
  'Security & Guardrails',
  ARRAY['CCA-F', 'Deterministic Gate', 'Reliability', 'Workflow Guardrails']::text[]
),
(
  'cca-f-question-020', 'cca-f', 20,
  'A team provides four few-shot examples showing Claude how to distinguish acceptable defensive null-check patterns from genuine error-handling bugs during code review. After deployment, the agent correctly identifies a problematic error-handling pattern in a codebase written in a different language than any of the examples. What best explains this behavior?',
  '[{"key":"A","text":"The model defaulted to flagging the unfamiliar pattern because it did not match any known-acceptable examples"},{"key":"B","text":"The few-shot examples taught the model the underlying judgment criteria for evaluating error handling which it generalized to the structurally similar but previously unseen pattern"},{"key":"C","text":"The model recognized the specific language syntax from its pre-training data and applied language-specific review rules"},{"key":"D","text":"The model decomposed the novel pattern into exact sub-patterns that matched elements from the few-shot examples"}]'::jsonb,
  ARRAY['B']::text[],
  'Mẫu few-shot không chỉ hướng dẫn cú pháp mà còn truyền đạt các tiêu chuẩn phán đoán trừu tượng (judgment criteria), cho phép mô hình học được khái niệm cốt lõi và suy luận rộng ra các ngôn ngữ lập trình khác.',
  'Evaluation & Bias',
  ARRAY['CCA-F', 'Generalization', 'In-Context Learning', 'Few-Shot']::text[]
),
(
  'cca-f-question-021', 'cca-f', 21,
  'The get_order tool in your customer service agent sometimes fails in two distinct ways: a temporary database timeout that resolves on retry, and a business policy violation when a customer requests a refund on a non-returnable item. Currently, both failures return a generic message: "Operation failed." Why is returning structured error metadata with distinct error categories critical for these two scenarios?',
  '[{"key":"A","text":"The MCP protocol requires every tool error to include a specific error category before the agent is allowed to continue the conversation"},{"key":"B","text":"Without structured metadata distinguishing transient errors from business rule violations, the agent cannot determine whether to retry the call or explain the policy to the customer, leading to wasted retries or poor customer communication"},{"key":"C","text":"Structured error metadata reduces token usage in the conversation history by replacing verbose error messages with compact error codes"},{"key":"D","text":"Structured error metadata is primarily for logging and observability purposes and does not change how the agent responds to the customer"}]'::jsonb,
  ARRAY['B']::text[],
  'Nếu không có siêu dữ liệu cấu trúc phân biệt giữa lỗi tạm thời (timeout) và lỗi nghiệp vụ (vi phạm chính sách), tác nhân sẽ không biết khi nào cần thử lại (retry) hoặc giải thích từ chối cho khách hàng.',
  'Model Context Protocol',
  ARRAY['CCA-F', 'MCP Tools', 'Structured Errors', 'Reliability']::text[]
),
(
  'cca-f-question-022', 'cca-f', 22,
  'Your invoice extraction pipeline processes documents from multiple international vendors. Dates appear in varied formats across vendors, including "15 March 2024," "03/15/2024," and "2024.03.15." The JSON schema enforces ISO 8601 format for date fields via tool_use, yet extracted dates occasionally retain the vendor''s original format. What is the most effective way to ensure consistent date normalization across all vendor documents?',
  '[{"key":"A","text":"Adding a regex pattern constraint to the date field in the JSON schema to enforce the YYYY-MM-DD format"},{"key":"B","text":"Including explicit format normalization rules in the extraction prompt and also enforcing the ISO 8601 date format in the output/tool schema (e.g., using format: \"date\" or strict tool use) so the model both normalizes and is validated"},{"key":"C","text":"Creating a separate extraction schema for each vendor''s known date format"},{"key":"D","text":"Implementing a validation-retry loop that rejects extractions containing any non-ISO 8601 date"}]'::jsonb,
  ARRAY['B']::text[],
  'Cách tiếp cận đa tầng là hiệu quả nhất: Hướng dẫn rõ ràng việc chuyển đổi định dạng trong prompt (để định hướng suy luận) kết hợp với ràng buộc cấu trúc kiểu ''format: "date"'' trong schema để kiểm định đầu ra.',
  'Prompt Engineering',
  ARRAY['CCA-F', 'Normalization', 'JSON Schema', 'Multi-layered validation']::text[]
),
(
  'cca-f-question-023', 'cca-f', 23,
  'Your team''s project-level CLAUDE.md has grown to over 500 lines, covering testing conventions, API design standards, deployment procedures, and security policies. Engineers find it difficult to maintain, and Claude Code occasionally overlooks relevant guidelines. What is the recommended approach to improve organization and reliability of these configuration instructions?',
  '[{"key":"A","text":"Consolidate all guidelines into the system prompt configuration of the project''s MCP servers"},{"key":"B","text":"Move all content to user-level ~/.claude/CLAUDE.md so each engineer can maintain a personal copy of the instructions"},{"key":"C","text":"Split the content into focused topic-specific files in .claude/rules/, such as testing.md, api-conventions.md, and deployment.md"},{"key":"D","text":"Duplicate the full CLAUDE.md into every subdirectory of the project to ensure Claude Code always finds nearby instructions"}]'::jsonb,
  ARRAY['C']::text[],
  'Tách nhỏ tệp CLAUDE.md khổng lồ thành các file quy tắc chuyên biệt và đặt trong ''.claude/rules/'' giúp nạp thông tin động và đúng lúc, tối ưu cửa sổ ngữ cảnh và tăng sự tuân thủ quy định.',
  'Claude Code CLI',
  ARRAY['CCA-F', 'Project Configuration', 'rules', 'Claude Code']::text[]
),
(
  'cca-f-question-024', 'cca-f', 24,
  'Your customer support agent inconsistently decides when to escalate cases to human agents. Adding instructions like "only escalate high-confidence cases" and "be conservative about escalation" to the system prompt has not improved consistency. What approach would most effectively produce reliable escalation behavior?',
  '[{"key":"A","text":"Require the agent to attempt autonomous resolution for at least three turns before allowing any escalation"},{"key":"B","text":"Implement sentiment analysis on customer messages and trigger escalation when negative sentiment exceeds a defined threshold"},{"key":"C","text":"Have the agent self-report a confidence score on each turn and escalate whenever it falls below 60%"},{"key":"D","text":"Add explicit escalation criteria and include few-shot examples in the prompt (for example, in the first user message) that demonstrate specific scenarios where the agent should escalate versus resolve autonomously"}]'::jsonb,
  ARRAY['D']::text[],
  'Thay thế các hướng dẫn chung chung bằng tiêu chí phân loại rõ ràng và kèm các ví dụ few-shot chỉ ra ranh giới giữa việc tự xử lý và việc cần chuyển giao cho con người là phương án tối ưu.',
  'Prompt Engineering',
  ARRAY['CCA-F', 'Escalation', 'Few-Shot', 'Decision Boundaries']::text[]
),
(
  'cca-f-question-025', 'cca-f', 25,
  'Your team must replace the project''s logging library across 60+ source files. The migration involves auditing current usage patterns, selecting appropriate replacement APIs for different log levels, and applying consistent changes. What is the recommended workflow for completing this task in Claude Code?',
  '[{"key":"A","text":"Start 60 separate Claude Code sessions in parallel, one per file, each using direct execution independently"},{"key":"B","text":"Use plan mode for the full duration of the migration, including both the investigation phase and every individual file modification"},{"key":"C","text":"Use direct execution for the entire migration, processing each file one at a time without any upfront investigation"},{"key":"D","text":"Start with plan mode to audit usage patterns and design the migration strategy, then switch to direct execution to apply the changes according to the plan"}]'::jsonb,
  ARRAY['D']::text[],
  'Quy trình chuẩn ''Khám phá -> Lên kế hoạch -> Thực thi'' là tối ưu nhất. Lập kế hoạch trước qua ''/plan'' (đọc hiểu kiến trúc không sửa đổi), sau đó chuyển sang thực thi trực tiếp để viết code nhất quán.',
  'Claude Code CLI',
  ARRAY['CCA-F', 'Plan Mode', 'Workflow', 'Refactoring']::text[]
),
(
  'cca-f-question-026', 'cca-f', 26,
  'After the web search agent executes a tool and receives results during its agentic loop, the developer appends the tool results to the conversation history before sending the next API request. What is the primary purpose of including these results in the conversation?',
  '[{"key":"A","text":"To allow the API to deduplicate repeated tool calls and reduce unnecessary computation"},{"key":"B","text":"To enable the API to cache the tool results server-side for faster processing of subsequent requests"},{"key":"C","text":"To satisfy an API validation rule that requires strictly alternating message roles in the conversation array"},{"key":"D","text":"To enable the model to incorporate the new information into its reasoning and determine the appropriate next action in the loop"}]'::jsonb,
  ARRAY['D']::text[],
  'Bằng cách chèn nội dung ''tool_result'' như một tin nhắn mới của người dùng, mô hình nhận được đầu ra thực tế của công cụ để đưa vào suy luận tiếp nối, quyết định xem nhiệm vụ đã hoàn tất chưa.',
  'Agentic Architecture',
  ARRAY['CCA-F', 'Tool Integration', 'Loop Reasoning', 'Messages API']::text[]
),
(
  'cca-f-question-027', 'cca-f', 27,
  'One of your engineers creates a slash command that scaffolds a new REST API endpoint with standardized error handling and validation. The team agrees this command should be available to all developers working on the project without requiring any manual setup on individual machines. Which configuration achieves this goal?',
  '[{"key":"A","text":"Define the command inline within the root CLAUDE.md file using @import syntax"},{"key":"B","text":"Place the command file in the project''s .claude/commands/ directory and commit it to version control"},{"key":"C","text":"Place the command file in ~/.claude/commands/ on the engineer''s machine and share the file path in a wiki"},{"key":"D","text":"Add the command as a SKILL.md file in ~/.claude/skills/ with argument-hint frontmatter configured"}]'::jsonb,
  ARRAY['B']::text[],
  'Claude Code cho phép lưu trữ các lệnh custom theo cấp dự án trong thư mục ''.claude/commands/''. Khi đẩy lên Git, toàn bộ các thành viên khác nạp về đều tự động sử dụng được mà không cần cài đặt lại.',
  'Claude Code CLI',
  ARRAY['CCA-F', 'Custom Commands', 'Collaboration', 'Claude Code']::text[]
),
(
  'cca-f-question-028', 'cca-f', 28,
  'Your customer service agent connects to fetch_customer and get_order through MCP . The fetch_customer tool returns created_date as a Unix timestamp (e.g., 1718200000), while get_order returns order_date in ISO 8601 format (e.g., "2024-06-12T15:00:00Z"). The agent sometimes misinterprets these inconsistent formats when reasoning about order timelines. What is the recommended approach to ensure consistent date handling before the agent processes these results?',
  '[{"key":"A","text":"Use few-shot examples in the prompt showing the agent how to correctly interpret both Unix timestamps and ISO 8601 dates"},{"key":"B","text":"Implement a PostToolUse hook that normalizes date formats from both tools into a consistent representation before the agent processes the results"},{"key":"C","text":"Add instructions to the system prompt telling the agent to mentally convert all dates to a single format before reasoning about timelines"},{"key":"D","text":"Modify each MCP tool server''s internal implementation to always return dates in the same format"}]'::jsonb,
  ARRAY['D']::text[],
  'Chuẩn hóa dữ liệu tại gốc (ngay trong máy chủ MCP) là giải pháp bền vững và hiệu quả nhất, loại bỏ gánh nặng suy luận logic ngày tháng khỏi LLM và giúp tiết kiệm token.',
  'Model Context Protocol',
  ARRAY['CCA-F', 'Data Normalization', 'MCP Server', 'Best Practices']::text[]
),
(
  'cca-f-question-029', 'cca-f', 29,
  'Your automated code review agent flags too many false positives when checking whether code comments are accurate. Developers have started ignoring the agent''s output entirely. Which prompt modification would most effectively reduce false positives in the comment accuracy checks?',
  '[{"key":"A","text":"Specifying \"flag comments only when the described behavior directly contradicts the actual code logic\""},{"key":"B","text":"Adding \"only report high-confidence findings about comment accuracy\" to the system prompt"},{"key":"C","text":"Instructing the agent to \"be conservative and avoid flagging minor comment issues\""},{"key":"D","text":"Including a general instruction to \"prioritize precision over recall when reviewing code comments\""}]'::jsonb,
  ARRAY['A']::text[],
  'Sử dụng quy tắc hành vi khách quan và chặt chẽ (''chỉ báo lỗi khi comment mâu thuẫn trực tiếp với logic code'') giúp mô hình bỏ qua các phàn nàn nhỏ về câu từ hay phong cách, từ đó giảm thiểu false positives.',
  'Prompt Engineering',
  ARRAY['CCA-F', 'Constraint Design', 'False Positives', 'Code Review']::text[]
),
(
  'cca-f-question-030', 'cca-f', 30,
  'In a multi-agent research system, the synthesis subagent is responsible for combining findings from other agents into a cohesive report. During testing, you observe that this subagent frequently initiates its own web searches and document retrievals instead of synthesizing the provided findings. The synthesis agent currently has access to all 18 tools in the system. What is the most effective way to resolve this behavior?',
  '[{"key":"A","text":"Increase the amount of context provided to the synthesis agent so it has less reason to perform its own searches"},{"key":"B","text":"Restrict the synthesis agent''s allowedTools to only those relevant to its synthesis role removing search and retrieval tools"},{"key":"C","text":"Configure tool_choice: \"any\" so the synthesis agent is forced to call a tool rather than returning text reducing off-task behavior"},{"key":"D","text":"Add detailed prompt instructions telling the synthesis agent to focus only on combining findings and not to use search tools"}]'::jsonb,
  ARRAY['B']::text[],
  'Áp dụng nguyên tắc Đặc quyền tối thiểu (Principle of Least Privilege). Bằng cách giới hạn danh sách công cụ (''allowedTools'') của tác nhân tổng hợp, bạn chặn đứng khả năng nó đi thực hiện các hành vi sai mục đích.',
  'Agentic Architecture',
  ARRAY['CCA-F', 'Principle of Least Privilege', 'Tool Scoping', 'Off-task behavior']::text[]
),
(
  'cca-f-question-031', 'cca-f', 31,
  'An engineer asks Claude Code to fix a bug where a single function throws an error when receiving a null input. The stack trace clearly identifies the file and line number, and the fix requires adding one conditional check. Which mode should the engineer use for this task?',
  '[{"key":"A","text":"Direct execution combined with the Explore subagent to verify no other functions have the same issue before making the change"},{"key":"B","text":"Plan mode, because every code change benefits from an investigation phase before implementation"},{"key":"C","text":"Plan mode, because null handling requires evaluating multiple valid implementation strategies across the codebase"},{"key":"D","text":"Direct execution, because the task is well-scoped with a clear fix in a single file and does not require architectural exploration"}]'::jsonb,
  ARRAY['D']::text[],
  'Với các sửa đổi nhỏ, rõ ràng và đã biết trước vị trí, chế độ Thực thi trực tiếp (Direct execution) là nhanh chóng và tiết kiệm nhất, không cần thiết phải chạy qua chế độ lập kế hoạch quy mô lớn.',
  'Claude Code CLI',
  ARRAY['CCA-F', 'Execution Mode', 'Claude Code', 'Efficiency']::text[]
),
(
  'cca-f-question-032', 'cca-f', 32,
  'Your team wants the customer service agent to audit the resolution quality of 50 past support tickets. Each ticket involves different product categories, refund amounts, and escalation decisions. You need the agent to evaluate each ticket''s handling individually and then identify systemic patterns across the full set. Which prompt chaining pattern best supports this workflow?',
  '[{"key":"A","text":"Send all 50 tickets in a single prompt and instruct the agent to evaluate quality and identify patterns in one pass"},{"key":"B","text":"Randomly sample five tickets, evaluate them in a single prompt, and extrapolate the findings to the remaining 45 tickets"},{"key":"C","text":"Have the agent process tickets in pairs, comparing each pair for similarities before aggregating all pair comparisons at the end"},{"key":"D","text":"Run per-ticket analysis passes that evaluate each ticket individually, then run a separate cross-ticket synthesis pass to identify systemic patterns across all evaluations"}]'::jsonb,
  ARRAY['D']::text[],
  'Đây là mô hình Map-Reduce nổi tiếng trong prompt chaining: Phân tích từng thực thể riêng biệt (Map) để tránh loãng sự chú ý, sau đó chạy lượt tổng hợp (Reduce) để rút ra các mô thức toàn cục.',
  'Prompt Engineering',
  ARRAY['CCA-F', 'Map-Reduce', 'Prompt Chaining', 'Batch Audit']::text[]
),
(
  'cca-f-question-033', 'cca-f', 33,
  'Your CI code review system generates structured JSON findings for pull requests, and developers can dismiss findings they consider incorrect. Over the past quarter, the dismissal rate has risen to 40%, but you cannot determine which types of code constructs are triggering the most dismissed findings. What should you add to each structured finding to enable systematic analysis of why developers are dismissing specific results?',
  '[{"key":"A","text":"A review_instance_id field linking each finding to the specific Claude session that generated it"},{"key":"B","text":"A detected_pattern field describing the specific code construct that triggered the finding enabling correlation between dismissed findings and recurring pattern types"},{"key":"C","text":"A timestamp field recording when the finding was generated to correlate dismissals with time of day"},{"key":"D","text":"A confidence_score field with a numeric value so dismissed findings can be filtered by the model''s self-reported certainty"}]'::jsonb,
  ARRAY['B']::text[],
  'Bổ sung trường ''detected_pattern'' chỉ ra chính xác loại lỗi mã nguồn giúp bạn phân loại và thống kê xem lỗi nào thường bị nhà phát triển bỏ qua nhất, từ đó tinh chỉnh lại prompt hệ thống có trọng tâm.',
  'Security & Guardrails',
  ARRAY['CCA-F', 'Telemetry', 'Review Accuracy', 'JSON Feedback']::text[]
),
(
  'cca-f-question-034', 'cca-f', 34,
  'A customer-facing support agent built with the Claude Agent SDK handles multi-issue sessions where customers raise several complaints in one conversation. After many turns, the agent begins confusing order details between different issues, such as applying the wrong refund amount to the wrong order. What is the most effective approach to prevent this problem?',
  '[{"key":"A","text":"Instruct the agent in the system prompt to carefully track all issue details throughout the conversation"},{"key":"B","text":"Extract structured issue data such as order IDs, amounts, and statuses into a persistent case facts block included in each prompt"},{"key":"C","text":"Summarize the full conversation every five turns to keep context usage low"},{"key":"D","text":"Limit multi-issue sessions to a maximum of two issues and require the customer to start new sessions for additional complaints"}]'::jsonb,
  ARRAY['B']::text[],
  'Trích xuất và duy trì một vùng thông tin thực tế dạng cấu trúc cứng (''case facts block'') ở đầu mỗi prompt là cách hiệu quả nhất để giữ mô hình không bị nhầm lẫn dữ liệu qua các lượt chat dài.',
  'Prompt Engineering',
  ARRAY['CCA-F', 'State Management', 'Case Facts', 'SDK Best Practices']::text[]
),
(
  'cca-f-question-035', 'cca-f', 35,
  'Your project enforces specific conventions for all Jest test files, including fixture usage patterns and assertion styles. These test files are distributed across dozens of directories throughout the repository (e.g., src/components/, src/services/, src/utils/, lib/helpers/). You need these conventions to load automatically only when Claude Code edits a test file. Which configuration correctly implements this?',
  '[{"key":"A","text":"Place the conventions in a user-level ~/.claude/CLAUDE.md file and instruct each developer to add them manually"},{"key":"B","text":"Create a file in .claude/rules/ with YAML frontmatter containing paths: [\"**/*.test.ts\", \"**/*.test.tsx\"] to target test files across all directories"},{"key":"C","text":"Add the testing conventions to the project-level CLAUDE.md so they are loaded during every interaction regardless of file type"},{"key":"D","text":"Create a CLAUDE.md file inside each directory that contains test files, repeating the conventions in every location"}]'::jsonb,
  ARRAY['B']::text[],
  'Sử dụng quy tắc định vị theo đường dẫn (path-scoped rules) qua frontmatter YAML trong thư mục ''.claude/rules/'' giúp các chỉ thị luôn nằm im và chỉ kích hoạt khi nạp đúng các file kiểm thử tương ứng.',
  'Claude Code CLI',
  ARRAY['CCA-F', 'Path Scoped Rules', 'Project Rules', 'Claude Code']::text[]
),
(
  'cca-f-question-036', 'cca-f', 36,
  'After submitting 200 document extraction requests to the Message Batches API, you discover that 15 requests failed because the source documents exceeded context limits. You need to resubmit only the failed requests after chunking those documents into smaller sections. How should you identify which specific documents need resubmission?',
  '[{"key":"A","text":"Use the custom_id field assigned to each request to correlate failures back to the specific source documents"},{"key":"B","text":"Query the batch status endpoint with the batch_id to retrieve an ordered index list of failed requests"},{"key":"C","text":"Parse the error response bodies to extract document filenames from the original prompt text"},{"key":"D","text":"Compare the count of successful results against the original ordered submission list to determine which entries are missing"}]'::jsonb,
  ARRAY['A']::text[],
  'Do kết quả trả về từ Batch API không bảo đảm thứ tự ban đầu, việc định danh duy nhất thông qua ''custom_id'' cho mỗi yêu cầu là cơ chế chuẩn để khớp kết quả hoặc phát hiện lỗi của từng tài liệu.',
  'Message Batches API',
  ARRAY['CCA-F', 'custom_id', 'Batch Correlation', 'Error Tracking']::text[]
),
(
  'cca-f-question-037', 'cca-f', 37,
  'Within the research automation platform, the web search agent discovers a set of URLs that the document analysis agent needs to process. Which approach correctly follows the hub-and-spoke orchestration pattern?',
  '[{"key":"A","text":"The web search agent writes URLs to a shared memory store that the document analysis agent reads concurrently during its own execution"},{"key":"B","text":"Both agents independently poll a shared message queue where the web search agent deposits URLs for the document analysis agent to consume"},{"key":"C","text":"The web search agent invokes the document analysis agent directly through a peer-to-peer call, passing the URLs without coordinator involvement"},{"key":"D","text":"The coordinator receives the URLs from the web search agent and includes them in the prompt when delegating work to the document analysis agent"}]'::jsonb,
  ARRAY['D']::text[],
  'Trong mô hình hình sao (hub-and-spoke / orchestrator-worker), các tác nhân con không trao đổi trực tiếp mà bắt buộc phải định tuyến thông tin qua điều phối viên trung tâm để kiểm soát luồng.',
  'Agentic Architecture',
  ARRAY['CCA-F', 'Hub-and-Spoke', 'Orchestration', 'Subagents']::text[]
),
(
  'cca-f-question-038', 'cca-f', 38,
  'A customer reaches your support agent and immediately says, "I would like to speak with a real person, please." The agent has access to tools that could likely resolve the customer''s underlying billing issue quickly. What is the correct agent behavior in this situation?',
  '[{"key":"A","text":"Inform the customer that billing issues can typically be resolved faster by the automated agent and proceed with investigation"},{"key":"B","text":"Acknowledge the customer''s request and immediately escalate to a human agent"},{"key":"C","text":"Ask the customer to describe their issue so the agent can attempt a quick resolution before transferring"},{"key":"D","text":"Investigate the billing issue silently and then escalate, providing the human agent with a complete resolution summary"}]'::jsonb,
  ARRAY['B']::text[],
  'Best practice hàng đầu của tác nhân hỗ trợ khách hàng là tuyệt đối tôn trọng yêu cầu trò chuyện với con người ngay khi được nhắc tới, tránh kéo dài thời gian gây bực bội cho người dùng.',
  'Security & Guardrails',
  ARRAY['CCA-F', 'Human Handoff', 'Agent Design', 'UX Guidelines']::text[]
),
(
  'cca-f-question-039', 'cca-f', 39,
  'A user submits a simple factual question to the research automation platform that can be fully answered with a single web lookup. The coordinator has access to the web search, document analysis, synthesis, and report generation subagents. How should the coordinator handle this query differently than a complex multi-faceted research topic?',
  '[{"key":"A","text":"Always invoke the full pipeline of all four subagents to ensure consistent and thorough output regardless of query complexity"},{"key":"B","text":"Analyze the query requirements and invoke only the web search agent, skipping document analysis, synthesis, and report generation when they are unnecessary"},{"key":"C","text":"Forward the question to the user interface without involving any subagents since it is a simple query"},{"key":"D","text":"Route the query to the synthesis agent first so it can assess whether additional subagents are needed"}]'::jsonb,
  ARRAY['B']::text[],
  'Định tuyến động (dynamic routing) giúp tối ưu hóa chi phí và tốc độ bằng cách chỉ kích hoạt các subagents thực sự cần thiết cho độ phức tạp của câu hỏi hiện tại, lược bỏ các bước cồng kềnh thừa thãi.',
  'Agentic Architecture',
  ARRAY['CCA-F', 'Dynamic Routing', 'Cost Optimization', 'Orchestrator']::text[]
),
(
  'cca-f-question-040', 'cca-f', 40,
  'After completing an initial analysis of your customer service agent''s escalation logic, you want to evaluate two alternative strategies: one using threshold-based triggers and another using policy-gap detection. Both strategies should build on the same baseline understanding of the current codebase without repeating the initial analysis. Which session management approach allows you to explore both independently from the shared baseline?',
  '[{"key":"A","text":"Start two new sessions from scratch and re-run the codebase analysis in each before exploring the respective strategy"},{"key":"B","text":"Copy the session transcript into two new prompts manually and start fresh sessions with the pasted context"},{"key":"C","text":"Resume the original session with --resume and explore both approaches sequentially, using /compact between them to clear context"},{"key":"D","text":"Use fork_session to create two independent branches from the shared analysis baseline, exploring each strategy in its own branch"}]'::jsonb,
  ARRAY['D']::text[],
  'Tính năng chia nhánh phiên ''fork_session'' (hoặc lệnh fork tương tự trong CLI) cho phép rẽ nhánh cuộc hội thoại từ một điểm mốc cố định, giúp thử nghiệm các chiến lược khác nhau mà không phải chạy lại từ đầu.',
  'Claude Code CLI',
  ARRAY['CCA-F', 'fork_session', 'Claude Code', 'Experimentation']::text[]
),
(
  'cca-f-question-041', 'cca-f', 41,
  'Your team''s automated code review pipeline generates hundreds of findings weekly, but developers report that many are low-value. With limited reviewer bandwidth, which approach best ensures human reviewers focus on the findings most likely to be actionable?',
  '[{"key":"A","text":"Filter findings by source file directory and route only findings in security-critical paths to human reviewers"},{"key":"B","text":"Run a verification pass where the model self-reports a confidence score alongside each finding then use confidence thresholds to route uncertain findings to human reviewers first"},{"key":"C","text":"Count the lines of code affected by each finding and prioritize findings with the largest code surface area for review"},{"key":"D","text":"Aggregate all findings by category and present only one representative example per category to reduce total reviewer volume"}]'::jsonb,
  ARRAY['A']::text[],
  'Lọc cảnh báo dựa trên mức độ rủi ro (như các thư mục nhạy cảm chứa code thanh toán, xác thực) là cách thiết thực nhất để điều tiết băng thông rà soát của con người vào các chỗ trọng yếu.',
  'Security & Guardrails',
  ARRAY['CCA-F', 'Risk-based Filtering', 'Noise Reduction', 'Code Review']::text[]
),
(
  'cca-f-question-042', 'cca-f', 42,
  'Within your customer service system, the agent has four well-described MCP tools: fetch_customer, get_order, issue_refund, and handoff_to_human. Despite clear tool descriptions, whenever a customer mentions the word "refund," the agent consistently calls handoff_to_human instead of issue_refund, even for straightforward cases within policy. After reviewing the configuration, you find the system prompt includes: "When a customer mentions a refund, always ensure a human is involved." What is the most likely cause of this behavior and how should it be resolved?',
  '[{"key":"A","text":"The handoff_to_human tool description overlaps with issue_refund, so both tools should be renamed to more distinctive names"},{"key":"B","text":"The issue_refund tool description needs to explicitly state that it should be selected over handoff_to_human for standard refund requests"},{"key":"C","text":"The keyword-sensitive instruction in the system prompt creates an unintended association that overrides the tool descriptions, so the prompt should be revised to specify precise conditions requiring human involvement"},{"key":"D","text":"The agent''s tool_choice setting should be changed to forced selection of issue_refund whenever refund-related keywords are detected in the input"}]'::jsonb,
  ARRAY['C']::text[],
  'Do chỉ thị trong prompt hệ thống có trọng số rất cao, một luật quá tuyệt đối về từ khóa (''luôn có người tham gia khi nhắc tới refund'') sẽ đè lên mô tả chi tiết của công cụ. Cần tinh chỉnh prompt rõ ràng hơn.',
  'Prompt Engineering',
  ARRAY['CCA-F', 'System Prompt weight', 'Keyword Associations', 'Tool selection conflict']::text[]
),
(
  'cca-f-question-043', 'cca-f', 43,
  'A document analysis subagent encounters a timeout when accessing one of three external data sources, but it successfully retrieves data from the other two. Which error handling approach represents a best practice for this situation?',
  '[{"key":"A","text":"Queue the failed query for background retry and block the coordinator from proceeding until the retry completes or times out"},{"key":"B","text":"Terminate the entire analysis workflow and report the timeout failure to the user"},{"key":"C","text":"Return the results from the two successful sources as if all three queries succeeded, omitting any indication that one source failed"},{"key":"D","text":"Attempt local recovery for the transient failure, and if unresolved, propagate structured error context with partial results to the coordinator"}]'::jsonb,
  ARRAY['D']::text[],
  'Trong hệ thống tác nhân phức tạp, chiến lược phục hồi lỗi tốt nhất là thử tự sửa chữa cục bộ, và nếu không được, trả về kết quả một phần kèm siêu dữ liệu mô tả phần lỗi để hệ thống hạ cấp mượt mà.',
  'Agentic Architecture',
  ARRAY['CCA-F', 'Graceful Degradation', 'Error Propagation', 'Subagents']::text[]
),
(
  'cca-f-question-044', 'cca-f', 44,
  'While updating a large configuration file, Claude Code''s Edit tool fails with an error indicating the target text appears in multiple locations within the file. The specific section that needs modification contains boilerplate text identical to several other sections. What is the recommended fallback approach?',
  '[{"key":"A","text":"Use Bash to run a sed command that targets the specific line number for replacement"},{"key":"B","text":"Use Read to load the full file contents, apply the modification, and then use Write to save the complete updated file"},{"key":"C","text":"Split the configuration file into smaller files so that each section contains unique text for Edit to match"},{"key":"D","text":"Retry the Edit tool with a larger context window setting to improve text matching precision"}]'::jsonb,
  ARRAY['B']::text[],
  'Edit dựa trên cơ chế so khớp chuỗi duy nhất. Nếu chuỗi bị trùng lặp nhiều nơi, phương án fallback an toàn và chuẩn mực nhất là đọc toàn bộ file (''Read''), thực hiện chỉnh sửa trong bộ nhớ rồi ghi đè lại (''Write'').',
  'Claude Code CLI',
  ARRAY['CCA-F', 'Edit Fallback', 'Read-Write', 'Claude Code']::text[]
),
(
  'cca-f-question-045', 'cca-f', 45,
  'A user sends a single request to the research platform asking it to investigate three distinct subtopics: market size projections, regulatory developments, and competitive landscape. Which strategy should the coordinator agent use to handle this multi-faceted request efficiently?',
  '[{"key":"A","text":"Decompose the request into three distinct research items, delegate each to appropriate subagents for parallel investigation, then synthesize the results into a unified response"},{"key":"B","text":"Ask the user to resubmit the request as three separate queries so each can be routed to the correct subagent independently"},{"key":"C","text":"Route the full request to the synthesis agent, which determines what information it needs and delegates research accordingly"},{"key":"D","text":"Forward the entire request to the web search agent and have it address all three subtopics sequentially within a single invocation"}]'::jsonb,
  ARRAY['A']::text[],
  'Chiến lược phân tách công việc (decomposing) và giao cho các subagents xử lý song song, sau đó gộp kết quả là cách vận hành chuẩn mực giúp giảm thời gian chờ đợi (latency) đáng kể.',
  'Agentic Architecture',
  ARRAY['CCA-F', 'Task Decomposition', 'Parallel Execution', 'Orchestrator']::text[]
),
(
  'cca-f-question-046', 'cca-f', 46,
  'Your extraction system has the model output field-level confidence scores to route low-confidence extractions to human review. However, reviewers report that many supposedly high-confidence extractions contain errors, while some flagged low-confidence ones are correct. What is the most effective way to improve the accuracy of this routing?',
  '[{"key":"A","text":"Lower the confidence threshold significantly so that nearly all extractions are routed to human review"},{"key":"B","text":"Replace field-level confidence scores with a single document-level confidence score to simplify the routing logic"},{"key":"C","text":"Remove confidence scoring entirely and instead route all extractions from specific document types known to be error-prone to human review"},{"key":"D","text":"Calibrate the confidence score thresholds using a labeled validation set of known-correct extractions to align reported confidence with actual accuracy"}]'::jsonb,
  ARRAY['D']::text[],
  'Mức độ tự tin tự khai báo (self-reported confidence) của LLM thường chưa được căn chỉnh chuẩn xác (uncalibrated). Việc đo đạc trên tập dữ liệu kiểm định nhãn chuẩn để hiệu chỉnh lại ngưỡng phân phối là chuẩn mực khoa học.',
  'Evaluation & Bias',
  ARRAY['CCA-F', 'Calibration', 'Confidence Scores', 'Human-in-the-loop']::text[]
),
(
  'cca-f-question-047', 'cca-f', 47,
  'A team needs to integrate Claude''s output with a downstream inventory management system that requires strictly valid JSON conforming to a predefined schema. They are evaluating different approaches to ensure the output never contains JSON syntax errors such as missing brackets, trailing commas, or unescaped characters. Which approach provides the strongest guarantee of schema-compliant, syntax-error-free output?',
  '[{"key":"A","text":"Defining the required structure as a tool''s JSON schema input parameters and extracting data from the tool_use response"},{"key":"B","text":"Providing a detailed JSON template in the system prompt with instructions to replicate the exact structure"},{"key":"C","text":"Appending few-shot examples of correctly formatted JSON to every extraction prompt"},{"key":"D","text":"Parsing the model''s freeform text response with a JSON validator and requesting corrections when syntax errors are detected"}]'::jsonb,
  ARRAY['A']::text[],
  'Sử dụng ''Tool Use'' (hoặc Structured Outputs của API) kích hoạt chế độ giải mã ràng buộc (constrained decoding), cam đoan về mặt toán học rằng văn bản sinh ra khớp 100% với JSON schema đã định nghĩa.',
  'Security & Guardrails',
  ARRAY['CCA-F', 'Constrained Decoding', 'Structured Outputs', 'JSON Schema']::text[]
),
(
  'cca-f-question-048', 'cca-f', 48,
  'A developer productivity agent has access to a generic fetch_url tool that can retrieve content from any URL on the internet. During testing, the agent occasionally fetches unrelated external websites when it should only load internal API documentation hosted on the company''s documentation server. Which approach most reliably prevents this misuse?',
  '[{"key":"A","text":"Add a system prompt instruction specifying that fetch_url should only be used for internal documentation URLs"},{"key":"B","text":"Set tool_choice to force fetch_url on every turn so the agent always uses the tool in a predictable manner"},{"key":"C","text":"Replace fetch_url with a load_internal_docs tool that validates URLs against the internal documentation domain before making the request"},{"key":"D","text":"Implement a PostToolUse hook that checks the fetched content and discards results from non-documentation domains"}]'::jsonb,
  ARRAY['C']::text[],
  'Quy tắc an ninh tối thượng: Đừng dựa vào prompt để phòng chống lạm dụng. Hãy thay thế công cụ vạn năng bằng công cụ có phạm vi cực kỳ hẹp và kiểm soát tên miền (allowlist) trực tiếp trong mã code nghiệp vụ.',
  'Security & Guardrails',
  ARRAY['CCA-F', 'Tool Securing', 'Security Boundaries', 'Guardrails']::text[]
),
(
  'cca-f-question-049', 'cca-f', 49,
  'You are building an invoice extraction pipeline where Claude extracts line items and totals from scanned invoices. Occasionally, extracted line item amounts do not add up to the extracted total, but both values exist in the source document. Which schema design most effectively enables automatic detection of these arithmetic discrepancies?',
  '[{"key":"A","text":"Include both a \"calculated_total\" field for the sum of extracted line items and a \"stated_total\" field for the document''s printed total, then compare them programmatically to flag mismatches"},{"key":"B","text":"Include a \"confidence_score\" field for the total amount and reject any extraction where the confidence falls below 0.9"},{"key":"C","text":"Add a required \"total_verified\" boolean that the model must set to true after confirming the total matches the line items"},{"key":"D","text":"Require the model to extract the total amount in two separate fields and average the two values to improve accuracy"}]'::jsonb,
  ARRAY['A']::text[],
  'Do LLM làm toán rất kém và mang tính xác suất, thiết kế schema yêu cầu trích xuất dữ liệu thô (stated_total và line items) để nhường quyền tính toán và đối chiếu logic kiểm soát lại cho mã lập trình phía sau.',
  'Evaluation & Bias',
  ARRAY['CCA-F', 'Arithmetic Validation', 'Schema Design', 'Reliability']::text[]
),
(
  'cca-f-question-050', 'cca-f', 50,
  'The agent in your customer service system has a single MCP tool called manage_account that handles profile updates, password resets, subscription changes, and account deactivation. During testing, the agent frequently sends incorrect parameters because it conflates these distinct operations. What is the recommended approach to improve the agent''s tool selection reliability?',
  '[{"key":"A","text":"Implement a PostToolUse hook that validates the parameters after each manage_account call and retries with corrected parameters if the operation type was wrong"},{"key":"B","text":"Use tool_choice forced selection to always call manage_account and add a required \"operation_type\" enum parameter to disambiguate the intended action"},{"key":"C","text":"Add a comprehensive description to manage_account that lists all four operations with their respective required parameters and usage conditions"},{"key":"D","text":"Split manage_account into purpose-specific tools such as update_profile, reset_password, change_subscription, and deactivate_account, each with clearly defined input/output contracts"}]'::jsonb,
  ARRAY['D']::text[],
  'Khuyến nghị cốt lõi của Anthropic về thiết kế công cụ: Tránh các siêu công cụ tích hợp quá nhiều thứ (all-in-one). Hãy phân tách thành các công cụ đơn chức năng, có tên rõ ràng và hợp đồng tham số đơn giản.',
  'Model Context Protocol',
  ARRAY['CCA-F', 'Tool Design', 'Single-purpose Tools', 'MCP Tools']::text[]
),
(
  'cca-f-question-051', 'cca-f', 51,
  'Your team''s CI/CD pipeline is configured to run Claude Code for automated code review on every pull request. During the first test run, the pipeline job hangs indefinitely and eventually times out without producing any output. What is the most likely cause of this behavior?',
  '[{"key":"A","text":"The pull request diff exceeded the context window limit causing Claude Code to fail silently"},{"key":"B","text":"Claude Code is waiting for interactive input because the -p flag was not included in the command"},{"key":"C","text":"The CLAUDE.md file is missing review criteria causing Claude Code to loop indefinitely while searching for instructions"},{"key":"D","text":"The --output-format flag was not specified preventing Claude Code from writing output to stdout"}]'::jsonb,
  ARRAY['B']::text[],
  'Khi chạy trong môi trường CI/CD (không tương tác), Claude Code cần có cờ ''-p'' (hoặc ''--print'') để kích hoạt chế độ in trực tiếp và thoát ngay sau khi hoàn tất, tránh bị treo chờ nhập phím.',
  'Claude Code CLI',
  ARRAY['CCA-F', 'CI/CD Flags', 'Claude Code', 'Troubleshooting']::text[]
),
(
  'cca-f-question-052', 'cca-f', 52,
  'Your company policy requires that any refund exceeding $500 must be approved by a human supervisor before processing. During testing, you discover that prompt instructions alone occasionally fail to prevent the agent from calling issue_refund for amounts above the threshold. Which implementation guarantees this business rule is enforced without exception?',
  '[{"key":"A","text":"Implement a tool call interception hook that inspects the amount parameter on issue_refund calls, blocks those exceeding $500, and redirects the workflow to handoff_to_human"},{"key":"B","text":"Strengthen the system prompt by adding explicit instructions with bold emphasis: \"NEVER issue refunds above $500 without human approval\""},{"key":"C","text":"Include three few-shot examples in the prompt demonstrating correct escalation for high-value refunds"},{"key":"D","text":"Set the issue_refund tool''s JSON schema to define a maximum value constraint of 500 on the amount field"}]'::jsonb,
  ARRAY['A']::text[],
  'Để kiểm soát tuyệt đối không sai sót, giải pháp là chặn đầu cuộc gọi công cụ (programmatic interception hook) tại tầng ứng dụng để phân tích tham số, từ chối thực thi và chuyển giao sang người hỗ trợ.',
  'Security & Guardrails',
  ARRAY['CCA-F', 'Interception Hook', 'Deterministic Safety', 'Guardrails']::text[]
),
(
  'cca-f-question-053', 'cca-f', 53,
  'Your team needs to connect Claude Code to both Jira for issue tracking and a proprietary internal approval workflow system that is unique to your organization. A developer proposes building custom MCP servers for both integrations to keep the codebase consistent. What is the recommended approach?',
  '[{"key":"A","text":"Use a community MCP server for Jira and build a custom MCP server only for the proprietary approval workflow"},{"key":"B","text":"Build a single custom MCP server that consolidates both Jira and approval workflow interactions behind a unified interface"},{"key":"C","text":"Use community MCP servers for both integrations by adapting the proprietary approval workflow API to match an existing community server''s interface"},{"key":"D","text":"Build custom MCP servers for both integrations to ensure consistent implementation patterns and full control over tool behavior"}]'::jsonb,
  ARRAY['A']::text[],
  'Cách tiếp cận lai (hybrid approach) được khuyên dùng trong hệ sinh thái MCP: Tiết kiệm tài nguyên bằng cách tận dụng các dự án cộng đồng cho công cụ phổ biến (Jira), và chỉ viết code custom cho hệ thống nội bộ.',
  'Model Context Protocol',
  ARRAY['CCA-F', 'Community Server', 'MCP Architecture', 'Best Practices']::text[]
),
(
  'cca-f-question-054', 'cca-f', 54,
  'Your multi-agent research system produces a synthesis report that combines findings from web search and document analysis subagents. Two credible sources provide conflicting market size statistics, and the synthesis subagent must produce the final output. How should the report handle this conflict?',
  '[{"key":"A","text":"Average the two statistics to produce a single balanced figure and cite both sources"},{"key":"B","text":"Omit the market size data point entirely to avoid presenting potentially inaccurate information"},{"key":"C","text":"Present both statistics with full source attribution in a section that explicitly distinguishes contested findings from well-established ones, preserving each source''s methodological context"},{"key":"D","text":"Select the statistic from the most authoritative source based on publication recency and discard the conflicting value"}]'::jsonb,
  ARRAY['C']::text[],
  'Tính trung thực tri thức (intellectual honesty) đòi hỏi tác nhân phải hiển thị cả hai số liệu mâu thuẫn kèm trích dẫn nguồn riêng biệt, thay vì bịa ra con số trung bình hoặc tự ý xóa bỏ thông tin có ích.',
  'Evaluation & Bias',
  ARRAY['CCA-F', 'Conflict Resolution', 'Synthesis', 'Factual Accuracy']::text[]
),
(
  'cca-f-question-055', 'cca-f', 55,
  'Your team wants to enforce a universal rule that all generated TypeScript code must use named exports instead of default exports. This standard should apply automatically every time Claude Code writes or modifies any TypeScript file in the project. Where should this convention be defined?',
  '[{"key":"A","text":"In a user-scoped command under ~/.claude/commands/ that each developer runs at the start of their session"},{"key":"B","text":"In the project-level CLAUDE.md or a .claude/rules/ file so it is always loaded for every interaction"},{"key":"C","text":"In a custom slash command stored in .claude/commands/ that developers must remember to call before each task"},{"key":"D","text":"In a skill file under .claude/skills/ with a SKILL.md that engineers invoke on demand before writing code"}]'::jsonb,
  ARRAY['B']::text[],
  'Các tiêu chuẩn dự án mang tính tự động hóa và bao trùm cần phải được viết tại tệp CLAUDE.md ở gốc dự án hoặc các quy tắc ''.claude/rules/'' chung để được nạp vô điều kiện trong mọi phiên làm việc.',
  'Claude Code CLI',
  ARRAY['CCA-F', 'Named Exports', 'Global Configuration', 'Claude Code']::text[]
),
(
  'cca-f-question-056', 'cca-f', 56,
  'Currently, your customer service agent has access to fetch_customer and get_order, but both tools have minimal one-line descriptions: "Fetches customer data" and "Gets order information." When a customer asks about a recent purchase, the agent inconsistently alternates between calling fetch_customer and get_order. What is the primary reason for this unreliable tool selection?',
  '[{"key":"A","text":"The tool names are too similar in length, causing the model to confuse them regardless of their descriptions"},{"key":"B","text":"Tool descriptions are the primary mechanism the model uses for tool selection, and the minimal descriptions do not provide enough information to differentiate when each tool should be used"},{"key":"C","text":"The model requires tool_choice to be set to forced selection before it can reliably distinguish between any two tools"},{"key":"D","text":"The agent''s context window is exhausted by other content, leaving insufficient space to load both tool definitions simultaneously"}]'::jsonb,
  ARRAY['B']::text[],
  'Mô tả công cụ (tool description) là đầu mối thông tin quan trọng nhất để LLM quyết định kích hoạt. Việc viết mô tả hời hợt, một dòng sẽ trực tiếp làm suy giảm khả năng phân biệt ngữ cảnh sử dụng của tác nhân.',
  'Model Context Protocol',
  ARRAY['CCA-F', 'Tool Selection', 'Descriptions', 'MCP Tools']::text[]
),
(
  'cca-f-question-057', 'cca-f', 57,
  'A CI pipeline needs to run Claude Code to analyze pull requests and produce machine-parseable review findings that a downstream script posts as inline comments. Which combination of CLI flags ensures the output conforms to a predefined JSON structure?',
  '[{"key":"A","text":"--output-format json combined with --json-schema"},{"key":"B","text":"-p combined with --json-schema only"},{"key":"C","text":"--output-format structured combined with --schema-file"},{"key":"D","text":"--format json-strict combined with --validate-output"}]'::jsonb,
  ARRAY['A']::text[],
  'Định dạng chuẩn để nhận được JSON có cấu trúc cứng từ Claude Code CLI là sự kết hợp của cờ ''--output-format json'' cùng định nghĩa ''--json-schema'' đi kèm.',
  'Claude Code CLI',
  ARRAY['CCA-F', 'Structured JSON', 'CLI Flags', 'Claude Code']::text[]
),
(
  'cca-f-question-058', 'cca-f', 58,
  'Your support agent calls a lookup_order MCP tool that returns over 40 fields per order, including shipping carrier details, warehouse codes, and internal tracking metadata. The agent only needs 5 fields to process a return. After several order lookups in one session, response quality noticeably declines. Which approach best addresses this issue?',
  '[{"key":"A","text":"Switch to a model with a larger context window so verbose tool outputs can be accommodated without impacting quality"},{"key":"B","text":"Limit the agent to a maximum of three order lookups per session to prevent excessive context accumulation"},{"key":"C","text":"Trim the tool output to include only return-relevant fields before appending the result to conversation context"},{"key":"D","text":"Summarize the entire conversation history periodically using progressive summarization to reclaim token budget"}]'::jsonb,
  ARRAY['C']::text[],
  'Phương án tối ưu là chủ động rút gọn (trim) dữ liệu trả về từ công cụ ngay trước khi đẩy vào ngữ cảnh hội thoại, chỉ giữ lại các trường hữu ích, loại bỏ rác thông tin để chống loãng suy luận.',
  'Model Context Protocol',
  ARRAY['CCA-F', 'Context Optimization', 'Tool Output Trim', 'Tokens']::text[]
),
(
  'cca-f-question-059', 'cca-f', 59,
  'Your team is using Claude Code to implement a new CSV parsing module that must handle complex edge cases, including quoted delimiters, multiline fields, and malformed rows. Requirements are well-defined but numerous. Which approach best supports iterative refinement of the implementation?',
  '[{"key":"A","text":"Describe all edge cases in a single prompt and request that Claude Code generate both the implementation and tests in one pass"},{"key":"B","text":"Write a comprehensive test suite covering expected behavior, edge cases, and malformed input handling first, then iterate by sharing test failures with Claude Code to guide corrections"},{"key":"C","text":"Implement the module first without tests, then ask Claude Code to review its own output for issues in the same session"},{"key":"D","text":"Generate the implementation with Claude Code, manually test each edge case by running the code, and file separate bug reports for each failure"}]'::jsonb,
  ARRAY['B']::text[],
  'Phát triển hướng kiểm thử (TDD) là cực kỳ hoàn hảo khi kết hợp với các tác nhân AI. Việc có bộ test xác thực rõ ràng giúp tạo lập vòng phản hồi chất lượng cao cho tác nhân tự sửa chữa code hiệu quả.',
  'Claude Code CLI',
  ARRAY['CCA-F', 'TDD', 'Iterative Refinement', 'Claude Code']::text[]
),
(
  'cca-f-question-060', 'cca-f', 60,
  'A new engineer on the team reports that Claude Code is not following the project''s API naming conventions during code generation, even though other engineers on the same repository see the conventions applied correctly. What is the most effective first diagnostic step to identify the cause of this inconsistency?',
  '[{"key":"A","text":"Reinstall Claude Code on the engineer''s machine to clear any corrupted cached configurations"},{"key":"B","text":"Add the API naming conventions as inline comments in every source file so Claude Code reads them directly"},{"key":"C","text":"Move all project configuration from .claude/rules/ into a single root-level CLAUDE.md to simplify the file structure"},{"key":"D","text":"Ask the engineer to run the /memory command to verify which memory files are currently loaded in their session"}]'::jsonb,
  ARRAY['D']::text[],
  'Lệnh ''/memory'' là lệnh chẩn đoán tối ưu để xác minh xem tác nhân có đang nạp đúng và đủ các tệp cấu hình của dự án (như CLAUDE.md hoặc .claude/rules/) trên máy hiện tại hay không.',
  'Claude Code CLI',
  ARRAY['CCA-F', '/memory', 'Diagnostics', 'Claude Code']::text[]
),
(
  'cca-f-question-061', 'cca-f', 61,
  'Your pipeline reviews every PR using a single API call with a static prompt containing the diff and full text of each changed file — unchanged files are not included. Reviews are posted asynchronously and don''t block PR creation. Developers report that reviews consistently miss bugs involving cross-file interactions — for example, a PR renames a function''s parameters but the review doesn''t flag callers in unchanged files that still use the old argument order. Evaluation shows cross-file bugs account for 35% of production incidents from reviewed PRs. What is the most effective change to your review design?',
  '[{"key":"A","text":"Redesign the review as a turn-limited agentic task where the model can read files and search the codebase via tools, following references to verify cross-file findings."},{"key":"B","text":"Add chain-of-thought instructions asking the model to list all external references in the diff, then reason step-by-step about how each change might affect callers in other files."},{"key":"C","text":"Run parallel review passes per changed file with direct dependents included in each pass, then aggregate and deduplicate findings using a final summarization call."},{"key":"D","text":"Use static analysis to build a dependency graph of changed code, then expand the prompt to include all files within two dependency hops of any changed file."}]'::jsonb,
  ARRAY['A']::text[],
  'The failure is a missing-context problem: callers live in unchanged files the static prompt never includes, so chain-of-thought (B) cannot help the model reason about code it cannot see, and static heuristics (C, D) bloat context while still missing dynamic or multi-hop references. Anthropic''s agent guidance favors agentic search — letting the model retrieve exactly the context it needs via file-read/search tools — and the asynchronous, nonblocking review pipeline tolerates the added latency, while a turn limit bounds cost.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Certified Architect', 'CCAF']::text[]
),
(
  'cca-f-question-062', 'cca-f', 62,
  'An engineer asks your agent to add comprehensive tests to a legacy codebase with 200 files and minimal existing test coverage. The engineer hasn''t specified which modules to prioritize. How should the agent decompose this open-ended task?',
  '[{"key":"A","text":"Systematically read all 200 files to create a complete function inventory before writing any tests, ensuring the testing plan accounts for every function before beginning."},{"key":"B","text":"Create a fixed testing schedule upfront based on directory structure, allocating equal effort to each top-level directory regardless of code complexity or business importance."},{"key":"C","text":"Start writing tests for the first module alphabetically, using test failures and imports to discover related files organically."},{"key":"D","text":"Use Glob and Grep to map codebase structure, identify heavily-coupled modules, create a prioritized plan for high-impact areas, and revise as dependencies are discovered."}]'::jsonb,
  ARRAY['D']::text[],
  'Anthropic''s agent best practices favor efficient context gathering with search tools (Glob/Grep) over exhaustively reading every file, which would waste context and time. Prioritizing high-impact, heavily-coupled modules and iteratively revising the plan as dependencies surface is the correct way to decompose an open-ended task; A is wasteful, B ignores impact/complexity, and C is arbitrary and unplanned.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Certified Architect', 'CCAF']::text[]
),
(
  'cca-f-question-063', 'cca-f', 63,
  'An engineer submits two requests: • Request A: "Rename the getUserData function to fetchUserProfile everywhere it''s used." • Request B: "Improve error handling throughout the data processing module—add try/catch blocks, meaningful error messages, and ensure failures don''t silently corrupt data." For which request does specifying an explicit multi-phase workflow (such as analyze propose implement with review) most improve outcome quality?',
  '[{"key":"A","text":"Request B, the error handling task"},{"key":"B","text":"Both requests benefit equally"},{"key":"C","text":"Request A, the function rename task"},{"key":"D","text":"Neither request benefits significantly"}]'::jsonb,
  ARRAY['A']::text[],
  'Request B is open-ended and judgment-heavy — "improve error handling" requires analyzing current behavior, deciding where try/catch belongs, and choosing meaningful messages, so an explicit analyze propose implement-with-review workflow materially raises quality and catches bad design before code changes. Request A is a mechanical, well-defined rename that a simple find-and-replace-style execution handles fine, so the multi-phase structure adds little.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Certified Architect', 'CCAF']::text[]
),
(
  'cca-f-question-064', 'cca-f', 64,
  'Your code review assistant needs to analyze pull requests and provide feedback on three aspects: code style compliance, potential security issues, and documentation completeness. Each aspect requires reading files, running analysis tools, and generating a report section. The review process follows the same three-step workflow for every PR. Which task decomposition pattern is most appropriate for this workflow?',
  '[{"key":"A","text":"Single comprehensive prompt—include all instructions in one prompt and let the model handle all three aspects simultaneously."},{"key":"B","text":"Routing—classify each PR by type (feature, bugfix, refactor) first, then route to different review prompts optimized for that category."},{"key":"C","text":"Prompt chaining—break the review into sequential steps where each aspect (style, security, documentation) is analyzed separately, with outputs combined in a final synthesis step."},{"key":"D","text":"Orchestrator-workers—have a central LLM analyze each PR to dynamically determine which checks are needed, then delegate to specialized worker LLMs for each identified subtask."}]'::jsonb,
  ARRAY['C']::text[],
  'The scenario explicitly states the review "follows the same three-step workflow for every PR," which per Anthropic''s "Building Effective Agents" guidance is the textbook case for the prompt chaining workflow: a fixed, predictable sequence of subtasks each handled by a focused prompt, then synthesized. Orchestrator-workers (D) is only warranted when the needed subtasks vary unpredictably per input, and routing (B) applies when inputs fall into distinct categories needing different handling—neither fits a fixed, identical workflow.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Certified Architect', 'CCAF']::text[]
),
(
  'cca-f-question-065', 'cca-f', 65,
  'Your multi-agent research pipeline crashed after processing 12 of 28 documents. The web search agent had identified relevant sources, the document analyzer had partially completed extraction, and the synthesizer had begun pattern identification. You need to resume processing without repeating work or losing fidelity of prior findings. What state management approach best balances information fidelity with context efficiency when restoring agent state?',
  '[{"key":"A","text":"Have each agent maintain its own persistent state file and reload it independently at the start of each session."},{"key":"B","text":"Persist the coordinator''s conversation log containing all task delegations and responses, providing this to agents when resuming."},{"key":"C","text":"Index all agent outputs in a shared vector store. When resuming, each agent queries the store using semantic search to retrieve relevant prior findings."},{"key":"D","text":"Have each agent persist a structured export to a known location. On resume, the coordinator loads the manifest and injects relevant state into agent prompts."}]'::jsonb,
  ARRAY['D']::text[],
  'Anthropic''s multi-agent best practices recommend persisting structured artifacts to external storage and having the orchestrator selectively re-inject only the relevant state into each subagent''s context. This preserves fidelity (lossless structured exports plus a manifest of completed work) while staying context-efficient, whereas A lacks coordinated resume logic, B floods agents with an entire conversation log, and C''s semantic search is lossy and may miss or garble prior findings.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Certified Architect', 'CCAF']::text[]
),
(
  'cca-f-question-066', 'cca-f', 66,
  'Analysis reveals the coordinator invokes the web search subagent, waits for its response, then invokes the document analysis subagent and waits again. These tasks are independent—neither requires the other''s output. How should you modify the system to run these subagents concurrently?',
  '[{"key":"A","text":"Switch both subagents to use a Haiku-tier model instead of Sonnet to reduce their individual execution time."},{"key":"B","text":"Create an async orchestration layer outside the agent that spawns parallel threads, each running a separate coordinator-subagent pair, then aggregates results."},{"key":"C","text":"Structure the coordinator to emit both Task tool calls (for web search and document analysis) in a single response message rather than across separate conversation turns."},{"key":"D","text":"Add detailed instructions to the coordinator''s system prompt explaining the performance benefits of parallel execution and requesting it invoke both subagents at the same time."}]'::jsonb,
  ARRAY['C']::text[],
  'In Claude''s agent architecture, subagents run concurrently when the coordinator emits multiple Task tool calls in a single assistant message — the harness executes parallel tool_use blocks from the same turn simultaneously.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Certified Architect', 'CCAF']::text[]
),
(
  'cca-f-question-067', 'cca-f', 67,
  'The coordinator agent has AgentDefinitions configured for all four specialized subagents, each with appropriate descriptions, prompts, and tool restrictions. During testing, you notice the coordinator correctly reasons about when to delegate—it generates messages like "I''ll ask the web search agent to find sources on this topic"—but no subagent execution ever occurs. The coordinator then proceeds as if the delegation happened and continues with incomplete information. Logs show no errors. What is the most likely cause?',
  '[{"key":"A","text":"The AgentDefinitions are configured correctly, but the coordinator''s system prompt doesn''t explicitly list the available subagent types, preventing the model from knowing they can be invoked."},{"key":"B","text":"Subagent context isolation means task descriptions from the coordinator don''t automatically reach subagents; you need to configure explicit context forwarding in ClaudeAgentOptions."},{"key":"C","text":"The coordinator''s max_tokens setting is too low, causing the Task tool invocation to be truncated before the subagent type parameter can be specified."},{"key":"D","text":"The coordinator''s allowedTools configuration doesn''t include \"Task\", so while it can reason about delegation, it cannot invoke the tool required to spawn subagents."}]'::jsonb,
  ARRAY['D']::text[],
  'In the Claude Agent SDK, subagents defined via AgentDefinitions are launched through the Task tool; if allowedTools omits "Task", the coordinator can still verbally reason about delegating but has no mechanism to actually spawn subagents, and it silently continues without them.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Certified Architect', 'CCAF']::text[]
),
(
  'cca-f-question-068', 'cca-f', 68,
  'A landmark case citing 12 precedents takes over 3 minutes to analyze completely. What''s the most effective way to reduce this latency while preserving the coordinator''s ability to monitor and debug the system?',
  '[{"key":"A","text":"Have the coordinator spawn parallel document analysis subagents, each handling a subset of precedents, then aggregate results before synthesis"},{"key":"B","text":"Enable the document analysis subagent to spawn its own specialized subagents dynamically when it encounters cases with many citations"},{"key":"C","text":"Create a recursive agent hierarchy where analysis agents subdivide work among child agents until reaching single-precedent granularity"},{"key":"D","text":"Implement a message queue where precedent analysis tasks are processed asynchronously by a pool of worker agents"}]'::jsonb,
  ARRAY['A']::text[],
  'Anthropic''s recommended multi-agent design is the orchestrator-worker pattern with a flat hierarchy: the coordinator itself spawns parallel subagents and aggregates their results, which cuts latency through parallelism while keeping all spawning, monitoring, and debugging centralized in one place.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Certified Architect', 'CCAF']::text[]
),
(
  'cca-f-question-069', 'cca-f', 69,
  'Investigation shows that while the web search and document analysis agents correctly attach citations to their outputs, the synthesis agent loses track of which sources support which conclusions when combining findings. What''s the most effective architectural change?',
  '[{"key":"A","text":"Have the coordinator inject source identifier prefixes into text before each handoff, then parse these prefixes at report generation to reconstruct citations."},{"key":"B","text":"Maintain complete transcripts of all subagent interactions and add a citation-resolution agent to analyze logs and determine attributions before report generation."},{"key":"C","text":"Require all subagents to output structured claim-source mappings that the synthesis agent must preserve and merge when combining findings from multiple sources."},{"key":"D","text":"Add a verification step where the report generator uses semantic similarity matching against original sources to reconstruct which claims came from which documents."}]'::jsonb,
  ARRAY['C']::text[],
  'The failure is information loss at the synthesis stage, so the fix is to carry attribution as structured data end-to-end: subagents emit explicit claim-source mappings and the synthesis agent is required to preserve and merge them.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Certified Architect', 'CCAF']::text[]
),
(
  'cca-f-question-070', 'cca-f', 70,
  'Users report that final reports sometimes lack depth on specific subtopics. Investigation shows that the document analysis agent frequently identifies gaps—for instance, noting "the retrieved sources discuss API authentication but lack details on token refresh patterns"—but under the current strict pipeline, this insight isn''t actionable since search has already completed. What''s the most effective architectural change?',
  '[{"key":"A","text":"Have the coordinator review analysis output for gap indicators and re-invoke search with gapinformed queries when gaps are detected."},{"key":"B","text":"Have the synthesis agent attach confidence scores to each section and flag areas with insufficient coverage for manual review."},{"key":"C","text":"Add a research planning agent before the search phase that decomposes topics into specific sub- questions."},{"key":"D","text":"Have the analysis agent report specific gaps to the coordinator, which triggers targeted searches and re-invokes analysis until sufficient."}]'::jsonb,
  ARRAY['D']::text[],
  'The core problem is a rigid one-way pipeline where gap insights arrive after search is finished, so the fix is a closed feedback loop: the analysis agent surfaces its specific gaps as structured output to the coordinator, which triggers targeted follow-up searches and re-runs analysis iteratively until coverage is sufficient.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Certified Architect', 'CCAF']::text[]
),
(
  'cca-f-question-071', 'cca-f', 71,
  'After the web search and document analysis subagents complete their tasks, the coordinator needs to spawn the synthesis subagent to synthesize the findings. What is the correct approach for providing the synthesis subagent with the information it needs?',
  '[{"key":"A","text":"Provide the subagent with tool definitions that allow it to request outputs from other subagents via callbacks"},{"key":"B","text":"Include the complete findings from both subagents directly in the synthesis subagent''s prompt"},{"key":"C","text":"Pass reference identifiers and configure the subagent with read access to a shared memory store where other subagents deposited their results"},{"key":"D","text":"Spawn the subagent with only a brief task description, relying on automatic context inheritance from the coordinator"}]'::jsonb,
  ARRAY['C']::text[],
  'Best practice của Anthropic là để các subagent lưu kết quả đầy đủ dưới dạng artifact ở bộ nhớ dùng chung hoặc bộ nhớ ngoài, sau đó truyền các tham chiếu nhẹ (reference) cho synthesis subagent. Điều này giúp tránh việc sao chép lượng lớn dữ liệu vào prompt, giảm chi phí token và giảm nguy cơ mất thông tin.',
  'Agentic Architecture',
  ARRAY['CCA-F', 'Agentic Architecture', 'Agent', 'Coordinator']::text[]
),
(
  'cca-f-question-072', 'cca-f', 72,
  'A user is expanding the research system beyond its single web search agent by adding specialized data sources. They add a financial API agent that returns structured JSON with revenue, margins, and growth rates; a news monitoring agent that returns prose summaries of recent developments; and a patent analysis agent that returns structured lists of technology areas. The synthesis agent combines these into executive briefings. Currently, it converts everything to bullet points, causing financial comparisons to lose tabular clarity and news summaries to lose narrative flow. What change would most improve briefing quality?',
  '[{"key":"A","text":"Add a format conversion layer between subagents and synthesis that transforms all outputs to a common intermediate representation"},{"key":"B","text":"Update the synthesis agent to render each content type appropriately—financial data as tables, news as prose"},{"key":"C","text":"Standardize all subagent outputs to prose summaries with inline citations"},{"key":"D","text":"Standardize all subagent outputs to JSON with fields for claim, evidence, source, and confidence"}]'::jsonb,
  ARRAY['B']::text[],
  'Sự suy giảm chất lượng là do ép các loại nội dung khác nhau vào cùng một định dạng. Giải pháp tốt nhất là để synthesis agent hiểu kiểu dữ liệu và trình bày theo hình thức phù hợp: bảng cho dữ liệu tài chính, văn xuôi cho tin tức, danh sách có cấu trúc cho công nghệ.',
  'Agentic Architecture',
  ARRAY['CCA-F', 'Agentic Architecture', 'Agent']::text[]
),
(
  'cca-f-question-073', 'cca-f', 73,
  '"What year was the Paris Climate Agreement signed?") traverse all four subagents sequentially, consuming 40+ seconds and significant tokens per query. Complex comparative research benefits from the full pipeline. Your query distribution is diverse and evolving as users discover new applications. What''s the most effective approach to optimize for varying query complexity?',
  '[{"key":"A","text":"Create a fast-path for factual questions that bypasses subagents entirely, routing all other queries through the complete pipeline to ensure research thoroughness."},{"key":"B","text":"Implement pattern-based routing that categorizes queries by structure (single-fact vs. comparative vs. analytical) and maps each category to a predefined subagent combination."},{"key":"C","text":"Train a query complexity classifier on labeled historical data to predict optimal subagent combinations, retraining periodically as query patterns evolve."},{"key":"D","text":"Have the coordinator analyze each query and dynamically decide which subagents to invoke based on its assessment of query requirements."}]'::jsonb,
  ARRAY['D']::text[],
  'Anthropic khuyến nghị để orchestrator điều chỉnh mức độ nỗ lực tương ứng với độ phức tạp của từng truy vấn. Cách quyết định động giúp hệ thống thích ứng với các loại câu hỏi mới mà không cần các luật hoặc mô hình phân loại riêng.',
  'Context Management',
  ARRAY['CCA-F', 'Context Management', 'Token']::text[]
),
(
  'cca-f-question-074', 'cca-f', 74,
  'The coordinator provides detailed step-by-step instructions to the web search subagent, specifying exact search queries, source priorities, and date filters. Production monitoring reveals three issues: (1) the subagent reports "insufficient results" rather than trying alternative approaches when pre-specified searches fail, (2) research quality drops for emerging topics that don''t match expected patterns, and (3) the subagent rarely surfaces valuable tangential sources. What''s the most effective way to improve subagent adaptability?',
  '[{"key":"A","text":"Specify research goals and quality criteria (coverage breadth, source diversity, recency) rather than procedural steps, letting the subagent determine its search strategy."},{"key":"B","text":"Remove procedural details entirely, delegating with simple goals like \"research X thoroughly\" and relying on the subagent''s general capabilities."},{"key":"C","text":"Add explicit fallback directives to the detailed instructions: \"If specified searches yield fewer than N results, attempt alternative query formulations before reporting failure.\""},{"key":"D","text":"Implement a topic classification step where the coordinator categorizes requests as \"well-defined\" or \"exploratory\" and uses different instruction styles for each category."}]'::jsonb,
  ARRAY['A']::text[],
  'Anthropic khuyến nghị giao nhiệm vụ dưới dạng mục tiêu và tiêu chí thành công thay vì quy trình cứng nhắc. Điều này giúp subagent tự điều chỉnh chiến lược khi gặp các chủ đề mới, thiếu dữ liệu hoặc xuất hiện các hướng khám phá mới.',
  'Agentic Architecture',
  ARRAY['CCA-F', 'Agentic Architecture', 'Agent', 'Coordinator']::text[]
),
(
  'cca-f-question-075', 'cca-f', 75,
  'The document analysis agent has a single analyze_document tool that takes a document and a free-text instruction parameter. During evaluation, requests like "extract the key financial metrics" often return narrative summaries, while "summarize the methodology" sometimes returns raw data tables. The synthesis agent reports that 35% of analysis results require re-requests with clarified instructions. What''s the most effective way to improve reliability?',
  '[{"key":"A","text":"Split the generic tool into purpose-specific tools — extract_data_points, summarize_content, verify_claim_against_source — each with defined input/output contracts"},{"key":"B","text":"Have the coordinator pre-classify each analysis request before passing instructions to the document analysis agent"},{"key":"C","text":"Keep the single tool but add an analysis_type enum parameter requiring explicit selection between extraction, summarization, and verification modes"},{"key":"D","text":"Enhance the tool description with detailed examples showing how different instruction phrasings should map to different output formats"}]'::jsonb,
  ARRAY['A']::text[],
  'Best practice về thiết kế tool là tạo các tool chuyên biệt với đầu vào và đầu ra rõ ràng. Việc gộp nhiều loại tác vụ vào một interface text tự do gây mơ hồ và dẫn đến chất lượng đầu ra thiếu ổn định.',
  'Evaluation & Bias',
  ARRAY['CCA-F', 'Evaluation & Bias', 'Evaluat', 'Metric', 'Reliab']::text[]
),
(
  'cca-f-question-076', 'cca-f', 76,
  'After the web search agent and document analysis agent complete their tasks, the coordinator invokes the synthesis agent. However, the synthesis agent responds that it cannot complete the task because no research findings were provided. What is the most likely cause of this issue?',
  '[{"key":"A","text":"The synthesis agent''s context window is not large enough to hold the combined outputs from both previous agents."},{"key":"B","text":"The synthesis agent needs tools that can fetch results directly from the other agents'' conversation histories."},{"key":"C","text":"The subagents need to share a single API connection to enable automatic context sharing between invocations."},{"key":"D","text":"The coordinator did not include the outputs from the previous agents in the synthesis agent''s prompt."}]'::jsonb,
  ARRAY['D']::text[],
  'Trong mô hình orchestrator-worker, mỗi subagent hoạt động trong một context riêng biệt. Không có cơ chế tự động chia sẻ dữ liệu giữa các agent, vì vậy coordinator phải chủ động truyền kết quả từ các agent trước vào prompt của synthesis agent.',
  'Agentic Architecture',
  ARRAY['CCA-F', 'Agentic Architecture', 'Agent', 'Coordinator']::text[]
),
(
  'cca-f-question-077', 'cca-f', 77,
  'Production monitoring shows that follow-up queries like "summarize what we learned about market trends" consistently take 40+ seconds. Investigation reveals the coordinator spawns the synthesis subagent for each summarization request, passing 80K+ tokens of accumulated findings. The coordinator already has these findings in its context from orchestrating the research. What''s the most effective way to improve response time for these follow-up summaries?',
  '[{"key":"A","text":"Pre-generate and cache summaries at multiple granularities whenever new findings accumulate."},{"key":"B","text":"Enable prompt caching on the synthesis subagent to reduce the overhead of repeatedly transferring the same research findings."},{"key":"C","text":"Have the coordinator handle straightforward summarization requests directly using its existing context, reserving subagent spawning for complex analytical tasks."},{"key":"D","text":"Spawn the synthesis subagent with reduced context and have it request specific findings from the coordinator on-demand."}]'::jsonb,
  ARRAY['C']::text[],
  'Coordinator đã có toàn bộ dữ liệu cần thiết trong context. Việc tạo thêm subagent chỉ làm tăng độ trễ và chi phí truyền token. Các tác vụ tóm tắt đơn giản nên được xử lý trực tiếp bởi coordinator.',
  'Agentic Architecture',
  ARRAY['CCA-F', 'Agentic Architecture', 'Agent', 'Orchestrat', 'Coordinator']::text[]
),
(
  'cca-f-question-078', 'cca-f', 78,
  'The synthesis agent receives summarized findings from the web search and document analysis agents, then passes a consolidated summary to the report generator. During testing, you discover the generated reports make factual claims without proper citations—the report generator cannot attribute statements to their original sources because that metadata was lost during the summarization steps. What''s the most effective approach to ensure proper source attribution in the final reports?',
  '[{"key":"A","text":"Instruct the synthesis agent to embed source references inline within its summary text using a consistent citation format."},{"key":"B","text":"Have the report generator query the web search agent to re-locate sources for claims in the final report."},{"key":"C","text":"Skip summarization and pass full raw outputs from web search and document analysis directly to the report generator."},{"key":"D","text":"Have each agent output structured data separating content summaries from source metadata (URLs, document names, page numbers)."}]'::jsonb,
  ARRAY['D']::text[],
  'Metadata nguồn cần được duy trì dưới dạng dữ liệu có cấu trúc xuyên suốt pipeline. Việc tách riêng nội dung và nguồn dữ liệu giúp bảo toàn khả năng truy vết qua mọi bước xử lý.',
  'Evaluation & Bias',
  ARRAY['CCA-F', 'Evaluation & Bias', 'Test']::text[]
),
(
  'cca-f-question-079', 'cca-f', 79,
  'After the web search agent finds 25 sources (120K tokens of raw content), the document analysis agent extracts key insights (15K tokens), and the synthesis agent produces a coherent narrative draft (3K tokens), the coordinator must pass context to the report generation agent for the final output with proper source citations. What context-passing strategy provides the best balance of completeness and efficiency?',
  '[{"key":"A","text":"Pass only the synthesis draft and have a separate post-processing pipeline match claims to sources and insert citations after the report is generated."},{"key":"B","text":"Pass the synthesis draft along with a structured source index that maps key claims to their source URLs and relevant excerpts."},{"key":"C","text":"Pass a condensed summary of all prior stages that preserves the main findings and attributes them to sources by name only."},{"key":"D","text":"Pass the full accumulated context from all prior agents."}]'::jsonb,
  ARRAY['B']::text[],
  'Synthesis draft cung cấp phần nội dung tường thuật, còn source index cung cấp thông tin cần thiết để trích dẫn chính xác mà không cần đọc lại toàn bộ dữ liệu thô khổng lồ.',
  'Context Management',
  ARRAY['CCA-F', 'Context Management', 'Context', 'Token']::text[]
),
(
  'cca-f-question-080', 'cca-f', 80,
  'The web search agent has gathered several relevant sources for a research topic. The document analysis agent now needs to examine these sources. How does information typically flow between these two specialized subagents?',
  '[{"key":"A","text":"The agents communicate through an event-driven message queue, with the document analysis agent subscribing to web search completion events."},{"key":"B","text":"The web search agent directly invokes the document analysis agent, passing the discovered sources as parameters."},{"key":"C","text":"The coordinator agent receives the web search agent''s output and includes relevant findings in the prompt when invoking the document analysis agent."},{"key":"D","text":"Both agents access a shared memory store where the web search agent writes findings and the document analysis agent reads them."}]'::jsonb,
  ARRAY['C']::text[],
  'Trong mô hình orchestrator-worker, coordinator đóng vai trò trung tâm. Nó nhận đầu ra từ một subagent và chủ động truyền ngữ cảnh phù hợp sang subagent tiếp theo.',
  'Claude Code CLI',
  ARRAY['CCA-F', 'Claude Code CLI', 'Subagent']::text[]
),
(
  'cca-f-question-081', 'cca-f', 81,
  'When researching "renewable energy adoption," the web search agent returns recent statistics (2024: 35% adoption) while the document analysis agent extracts data from internal reports (2022: 18% adoption). The synthesis agent incorrectly flags these as contradictory sources rather than recognizing the data shows growth over time. What change would best enable the synthesis agent to correctly interpret such temporal differences?',
  '[{"key":"A","text":"Require subagents to include publication or data collection dates in their structured outputs."},{"key":"B","text":"Add a conflict resolution agent that automatically discards older data when newer data exists for the same metric."},{"key":"C","text":"Configure the web search agent to only return results from the past 6 months."},{"key":"D","text":"Instruct the synthesis agent to always treat the most recent data as authoritative and place older findings in a separate historical appendix."}]'::jsonb,
  ARRAY['A']::text[],
  'The synthesis agent misreads the data because it never sees the dates. Making each data point carry its own timestamp in the structured output lets synthesis reason about trends instead of contradictions.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Certified Architect', 'CCAF']::text[]
),
(
  'cca-f-question-082', 'cca-f', 82,
  'Production reviews reveal inconsistent handling of uncertainty in final reports. Sometimes conflicting subagent findings are synthesized into a single confident statement (losing nuance), while other times reports over-hedge with excessive qualifications (becoming unhelpful). When the web search agent returns "industry analysts estimate $50B market size (methodology varies)" and the document analysis agent returns "peer-reviewed study estimates 35B(±7B, 95% CI)," the coordinator either picks one arbitrarily or produces vague statements like "the market may be 35B−50B depending on factors." What systematic approach best addresses this?',
  '[{"key":"A","text":"Configure subagents to only report findings meeting a high-confidence threshold, filtering uncertain information before it reaches the coordinator."},{"key":"B","text":"Implement a confidence calibration layer that normalizes subagent uncertainty expressions to standardized probability scores (0.0-1.0), then weight-average findings by their calibrated confidence."},{"key":"C","text":"Instruct the synthesis agent to structure reports with explicit sections distinguishing well-established findings from contested ones, preserving original source characterizations and methodological context."},{"key":"D","text":"Add a verification subagent that cross-references findings across sources, only passing claims to synthesis that are corroborated by at least two independent sources."}]'::jsonb,
  ARRAY['C']::text[],
  'Report structure that keeps methodological context and separates settled vs. contested claims is how you get nuance without over-hedging.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Certified Architect', 'CCAF']::text[]
),
(
  'cca-f-question-083', 'cca-f', 83,
  'You''re building a security scanning workflow. When engineers need to locate all occurrences of a dangerous function like eval() across a large codebase, which tool should your agent use for content search?',
  '[{"key":"A","text":"Use Glob with a pattern like /*eval* to find files, then Read each matching file."},{"key":"B","text":"Use Grep to search for the pattern \"eval(\" across all files in the codebase."},{"key":"C","text":"Read the project''s main entry file and follow import statements to trace where eval might be used."},{"key":"D","text":"Use Bash to run ls -R | grep eval to recursively list files containing eval."}]'::jsonb,
  ARRAY['B']::text[],
  'Grep is the purpose-built content-search tool (ripgrep-based) for finding patterns inside file contents across a large codebase, which is exactly what locating all eval( call sites requires.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Certified Architect', 'CCAF']::text[]
),
(
  'cca-f-question-084', 'cca-f', 84,
  'This currently requires manually copy-pasting content into conversations. The team wants the agent to access this standard Jira ticket data directly. What''s the most effective approach?',
  '[{"key":"A","text":"Export Jira tickets to markdown files in the repository that the agent accesses using the Read tool."},{"key":"B","text":"Build a custom MCP server wrapping Jira''s API with tools designed specifically for this team''s code review workflow."},{"key":"C","text":"Integrate an existing Jira MCP server that exposes tickets, comments, and metadata through discoverable tool interfaces."},{"key":"D","text":"Use the Bash tool with curl to call Jira''s REST API, including authentication headers and parsing JSON responses inline."}]'::jsonb,
  ARRAY['C']::text[],
  'For standard third-party service data like Jira tickets, Anthropic''s recommended practice is to integrate an existing MCP server, which provides discoverable, typed tool interfaces with managed authentication.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Certified Architect', 'CCAF']::text[]
),
(
  'cca-f-question-085', 'cca-f', 85,
  'Developer Productivity An engineer asks the agent to find all files in the monorepo that import the @company/auth package to understand how authentication is used across services. Which built-in tool is most appropriate for this task?',
  '[{"key":"A","text":"Bash, to execute find . -type d -name \"*auth*\" and explore matching directories"},{"key":"B","text":"Read, starting with package.json files to trace dependency declarations"},{"key":"C","text":"Grep, to search for the import statement pattern across file contents"},{"key":"D","text":"Glob, to find files with \"auth\" in their filename or path"}]'::jsonb,
  ARRAY['C']::text[],
  'The task is to find every file whose contents contain an import of @company/auth, which is a content- search problem — exactly what the built-in Grep tool (ripgrep-based) is designed for.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Certified Architect', 'CCAF']::text[]
),
(
  'cca-f-question-086', 'cca-f', 86,
  'Your productivity agent connects to three MCP servers: an issue tracker (search_issues, get_issue, create_comment), a documentation wiki (search_docs, get_page, list_spaces), and a database explorer (run_query, get_schema, list_databases). When engineers ask cross-system questions like "What database tables are affected by the authentication refactor in PROJ-1234?", monitoring shows the agent makes 8-10 sequential tool calls, frequently issues exploratory calls because it lacks visibility into what content each server contains, and exhausts context space before completing complex investigations. What architectural change best leverages MCP capabilities to address these issues?',
  '[{"key":"A","text":"Consolidate all three servers into a unified MCP server with cross-referencing capabilities"},{"key":"B","text":"Expose each server''s content catalog as MCP resources—issue summaries, documentation hierarchy, database schemas"},{"key":"C","text":"Add a prepare_investigation tool to each server that accepts a natural language question and returns relevant content summaries"},{"key":"D","text":"Add an orchestrator that routes questions to a single server based on keywords"}]'::jsonb,
  ARRAY['B']::text[],
  'MCP resources are the protocol primitive designed for exactly this problem: servers expose browsable, application-controlled context that the agent can discover and read without exploratory tool-call round trips.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Certified Architect', 'CCAF']::text[]
),
(
  'cca-f-question-087', 'cca-f', 87,
  'During testing, agents frequently call tools outside their specialization—the synthesis agent attempts web searches, and the report generator tries to analyze documents. What is the primary cause of this poor tool selection behavior?',
  '[{"key":"A","text":"Choosing from 18 tools instead of 4-5 relevant ones increases decision complexity beyond reliable selection thresholds."},{"key":"B","text":"The coordinator cannot track which capabilities each subagent has, leading to misrouted tasks."},{"key":"C","text":"The agents'' role descriptions in their system prompts conflict with having access to tools outside that role."},{"key":"D","text":"The tool definitions consume too much context window space, leaving insufficient room for task content."}]'::jsonb,
  ARRAY['A']::text[],
  'Anthropic''s agent best practices recommend giving each subagent only a small, role-relevant tool set, because tool selection accuracy degrades as the number of available (especially irrelevant) tools grows.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Certified Architect', 'CCAF']::text[]
),
(
  'cca-f-question-088', 'cca-f', 88,
  'A customer returns 4 hours after their initial session about the same billing dispute. The previous 32-turn session contains lookup_order results showing "Status: PENDING, Expected resolution: 24-48 hours." In testing, you observe that when resuming sessions with stale tool results, the agent often references the outdated data in responses (e.g., "I see your refund is still being processed") even after subsequent fresh tool calls return different information. What approach most reliably handles returning customers?',
  '[{"key":"A","text":"Resume with full history but filter out previous tool_result messages before resuming, keeping only the human/assistant turns so the agent must re-fetch needed data."},{"key":"B","text":"Start a new session, inject a structured summary of the previous interaction (issue type, actions taken, resolution status), then make fresh tool calls before engaging."},{"key":"C","text":"Resume with full history and add a system prompt instruction telling the agent to always prefer the most recent tool results when multiple calls to the same tool exist in context."},{"key":"D","text":"Resume with full history and configure the agent to automatically re-call all previously-used tools at session start to ensure data freshness."}]'::jsonb,
  ARRAY['B']::text[],
  'A clean session with a summary keeps the narrative continuity while guaranteeing the agent isn''t reasoning over stale tool results.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Certified Architect', 'CCAF']::text[]
),
(
  'cca-f-question-089', 'cca-f', 89,
  'You''re implementing the escalation logic for when the agent should call escalate_to_human. Your team proposes four different approaches for triggering escalation. Which approach will most reliably identify cases that genuinely require human intervention?',
  '[{"key":"A","text":"Instruct the agent to escalate when the customer requests a human, when the issue requires policy exceptions, or when the agent cannot make meaningful progress."},{"key":"B","text":"Configure the agent to escalate after three consecutive tool calls that fail to resolve the customer''s stated issue, ensuring a reasonable attempt before involving a human."},{"key":"C","text":"Implement sentiment analysis that monitors for frustration indicators (negative language, repeated questions, exclamation marks) and trigger escalation when the frustration score exceeds a configured threshold."},{"key":"D","text":"Build a rules engine that maps specific issue types, customer segments, and product categories to escalation decisions, removing the need for model judgment calls."}]'::jsonb,
  ARRAY['A']::text[],
  'Escalation decisions are judgment calls about intent and progress — exactly what LLMs are good at. Clear criteria in natural language outperform rigid rules for the long tail.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Certified Architect', 'CCAF']::text[]
),
(
  'cca-f-question-090', 'cca-f', 90,
  'After investigating a billing dispute over 25+ turns, you''ve identified that duplicate charges occurred due to a payment gateway timeout triggering retry logic. The required refund ($847) exceeds your $500 authorization limit. You need to call escalate_to_human, and the human agent won''t have access to your conversation transcript. What context should you pass to enable effective resolution?',
  '[{"key":"A","text":"The customer''s original complaint verbatim plus the tool result excerpts showing duplicate transactions."},{"key":"B","text":"A structured summary: customer ID, root cause, refund amount, and recommended action."},{"key":"C","text":"The complete conversation transcript with all tool results."},{"key":"D","text":"Your diagnosis and the refund amount only."}]'::jsonb,
  ARRAY['B']::text[],
  'A structured handoff with identifiers, cause, amount, and recommended action is what a human agent needs to pick up the case instantly without re-investigating.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Certified Architect', 'CCAF']::text[]
),
(
  'cca-f-question-091', 'cca-f', 91,
  'Compliance requires that refunds exceeding $500 must automatically escalate to a human agent—this rule cannot be left to model discretion. Despite clear system prompt instructions, production logs show the agent occasionally processes high-value refunds directly (3% failure rate). How should you achieve guaranteed compliance?',
  '[{"key":"A","text":"Modify the refund tool to return an error with message \"Amount exceeds policy limit—please escalate\" when threshold is exceeded."},{"key":"B","text":"Add few-shot examples to the prompt showing correct escalation behavior at various refund amounts ($400, $500, $600)."},{"key":"C","text":"Implement a hook to intercept tool calls; when the refund process amount exceeds $500, block it and invoke human escalation."},{"key":"D","text":"Strengthen the system prompt with emphatic language: \"CRITICAL POLICY: Refunds over $500 MUST trigger human escalation. NEVER process these directly.\""}]'::jsonb,
  ARRAY['C']::text[],
  'Các yêu cầu tuân thủ bắt buộc phải được thực thi bằng cơ chế xác định (deterministic) nằm ngoài model. Hook chặn tool call đảm bảo quy tắc luôn được áp dụng bất kể model đưa ra quyết định gì.',
  'Security & Guardrails',
  ARRAY['CCA-F', 'Security & Guardrails', 'Escalat', 'Human']::text[]
),
(
  'cca-f-question-092', 'cca-f', 92,
  'During a billing dispute resolution, your agent successfully retrieves customer info via get_customer and order details via lookup_order, but when attempting to call process_refund, the tool returns a timeout error. The agent has enough information to explain the charges and verify refund eligibility, but cannot actually process the refund due to the backend failure. What approach best balances first-contact resolution with appropriate error handling?',
  '[{"key":"A","text":"Escalate immediately to a human agent since the refund action cannot be completed"},{"key":"B","text":"Implement automatic retries with exponential backoff for process_refund, keeping the conversation open until the refund is successfully processed"},{"key":"C","text":"Explain the billing, confirm refund eligibility, acknowledge the system issue preventing immediate processing, and offer escalation or retry later"},{"key":"D","text":"Confirm the refund will be processed and close the conversation, since the system has all necessary information to complete it automatically"}]'::jsonb,
  ARRAY['C']::text[],
  'Agent nên cung cấp giá trị tối đa có thể ở thời điểm hiện tại, trung thực về lỗi hệ thống và để khách hàng lựa chọn giữa escalation hoặc thử lại sau. Đây là cách graceful degradation phù hợp nhất.',
  'Agentic Architecture',
  ARRAY['CCA-F', 'Agentic Architecture', 'Agent']::text[]
),
(
  'cca-f-question-093', 'cca-f', 93,
  'A customer writes: "I''ve been going back and forth on this return for days. I just want to speak to someone who can actually help me." The agent has confirmed via lookup_order that the return is straightforward—within policy and eligible for immediate processing. What should the agent do?',
  '[{"key":"A","text":"Acknowledge frustration, inform them this is resolvable now, and offer to complete it or escalate"},{"key":"B","text":"Call escalate_to_human immediately to honor the customer''s request"},{"key":"C","text":"Process the refund via process_refund to resolve the underlying issue, then inform them it''s complete"},{"key":"D","text":"Ask what specifically hasn''t worked in previous attempts before deciding whether to escalate or resolve automatically"}]'::jsonb,
  ARRAY['A']::text[],
  'Cần tôn trọng cảm xúc của khách hàng đồng thời vẫn cung cấp con đường giải quyết nhanh nhất. Việc cho khách hàng quyền lựa chọn giữa xử lý ngay hoặc gặp nhân viên là cách cân bằng tốt nhất.',
  'Agentic Architecture',
  ARRAY['CCA-F', 'Agentic Architecture', 'Agent']::text[]
),
(
  'cca-f-question-094', 'cca-f', 94,
  'The agent verifies customer identity through a multi-step process before resetting passwords. During testing, you notice that after the customer answers the third verification question, the agent asks them to provide their name again, as if the earlier exchange never happened. What''s the most likely cause of this behavior?',
  '[{"key":"A","text":"The verification tool is clearing the agent''s internal state after each successful validation step."},{"key":"B","text":"The prompt lacks instructions telling Claude to remember information across multiple exchanges."},{"key":"C","text":"The conversation history isn''t being passed in subsequent API requests."},{"key":"D","text":"Claude''s memory retention is limited to two conversational turns by default, requiring explicit configuration to extend it."}]'::jsonb,
  ARRAY['C']::text[],
  'API là stateless. Mỗi request phải bao gồm toàn bộ message history cần thiết. Nếu chỉ gửi lượt gần nhất thì model sẽ không nhớ những thông tin đã cung cấp trước đó.',
  'Evaluation & Bias',
  ARRAY['CCA-F', 'Evaluation & Bias', 'Test']::text[]
),
(
  'cca-f-question-095', 'cca-f', 95,
  'Production logs reveal inconsistent error handling: when lookup_order fails, the agent sometimes retries 5+ times (wasteful when the order ID doesn''t exist), sometimes escalates immediately (premature for temporary network issues), and sometimes asks users for clarification (inappropriate when the issue is a backend permission error). Investigation shows your MCP tool returns uniform error responses: {"isError": true, "content": [{"type": "text", "text": "Operation failed"}]}. The agent cannot distinguish between error types. What''s the most effective improvement?',
  '[{"key":"A","text":"Enhance error responses with structured metadata: include errorCategory (transient/validation/permission), isRetryable boolean, and a description of what caused the failure."},{"key":"B","text":"Create an analyze_error MCP tool the agent calls after any failure to determine the error category and recommended action."},{"key":"C","text":"Implement retry logic with exponential backoff in your MCP server for all errors, returning to the agent only after retries are exhausted."},{"key":"D","text":"Add few-shot examples to the system prompt demonstrating how to interpret error message patterns and select appropriate responses for each."}]'::jsonb,
  ARRAY['A']::text[],
  'Agent không thể ra quyết định đúng nếu không biết bản chất lỗi. Việc cung cấp category, khả năng retry và nguyên nhân cụ thể giúp agent xử lý ổn định và chính xác hơn.',
  'Security & Guardrails',
  ARRAY['CCA-F', 'Security & Guardrails', 'Permission', 'Escalat']::text[]
),
(
  'cca-f-question-096', 'cca-f', 96,
  'When the agent calls lookup_order and receives order details showing the item was purchased 45 days ago, how does the agentic loop determine whether to call process_refund or escalate_to_human next?',
  '[{"key":"A","text":"The orchestration layer automatically routes to the next tool based on the order''s status field."},{"key":"B","text":"The agent follows a pre-configured decision tree mapping order attributes to specific tool calls."},{"key":"C","text":"The order details are added to the conversation and the model reasons about which action to take."},{"key":"D","text":"The agent executes the remaining steps in a tool sequence planned at the start of the request."}]'::jsonb,
  ARRAY['C']::text[],
  'Trong agentic loop, kết quả tool được thêm vào context hội thoại và model tự quyết định hành động tiếp theo dựa trên thông tin mới nhận được.',
  'Security & Guardrails',
  ARRAY['CCA-F', 'Security & Guardrails', 'Escalat', 'Human']::text[]
),
(
  'cca-f-question-097', 'cca-f', 97,
  'A customer sends: "This is frustrating. I''ve explained my issue twice and nothing is being resolved. I want to talk to a real person NOW." The agent has not yet called any tools to investigate their account. What should the agent do?',
  '[{"key":"A","text":"Acknowledge the frustration and ask one targeted question to understand the specific issue before escalating."},{"key":"B","text":"Briefly explain what the agent can help with and offer to resolve the issue quickly, escalating only if the customer repeats their request."},{"key":"C","text":"Immediately call escalate_to_human with the conversation history."},{"key":"D","text":"First call get_customer and lookup_order to gather account context, then escalate to a human agent."}]'::jsonb,
  ARRAY['A']::text[],
  'Một câu hỏi trọng tâm vừa thể hiện sự đồng cảm vừa tạo cơ hội giải quyết ngay trong lần liên hệ đầu tiên mà không bỏ qua nguyện vọng của khách hàng.',
  'Agentic Architecture',
  ARRAY['CCA-F', 'Agentic Architecture', 'Agent']::text[]
),
(
  'cca-f-question-098', 'cca-f', 98,
  'Your agent is handling a billing dispute. After calling get_customer and lookup_order, it identifies that the dispute involves a promotional pricing error requiring manager approval—beyond the agent''s authorization level. How should the workflow handle this mid-process escalation?',
  '[{"key":"A","text":"Call escalate_to_human passing only the customer''s original message."},{"key":"B","text":"Compile a structured handoff with customer details, order info, and the identified issue before calling escalate_to_human."},{"key":"C","text":"Attempt the refund with process_refund anyway, escalating only if the system rejects the transaction."},{"key":"D","text":"Persist the complete conversation and tool response history to a database, then call escalate_to_human with a reference ID."}]'::jsonb,
  ARRAY['B']::text[],
  'Một bản handoff có cấu trúc giúp nhân viên tiếp nhận hiểu đầy đủ bối cảnh và tiếp tục xử lý ngay mà không phải điều tra lại.',
  'Agentic Architecture',
  ARRAY['CCA-F', 'Agentic Architecture', 'Agent', 'Workflow']::text[]
),
(
  'cca-f-question-099', 'cca-f', 99,
  'A customer raises three separate issues during one session: a refund inquiry (turns 1-15), a subscription question (turns 16-30), and a payment method update (turns 31-45). At turn 48, the customer asks "What happened with my refund?" The conversation is approaching context limits. What strategy best maintains the agent''s ability to address all issues throughout the session?',
  '[{"key":"A","text":"Extract and persist structured issue data (order IDs, amounts, statuses) into a separate context layer."},{"key":"B","text":"Rely on MCP tools to re-fetch relevant information on demand when the customer references earlier issues."},{"key":"C","text":"Summarize earlier turns into a narrative description, preserving full message history only for the active issue."},{"key":"D","text":"Implement sliding window context that retains the most recent 30 turns."}]'::jsonb,
  ARRAY['C']::text[],
  'Progressive summarization là giải pháp phù hợp nhất cho các cuộc hội thoại dài nhiều chủ đề, cho phép giữ lại lịch sử quan trọng mà vẫn tiết kiệm context.',
  'Context Management',
  ARRAY['CCA-F', 'Context Management', 'Context', 'Conversation']::text[]
),
(
  'cca-f-question-100', 'cca-f', 100,
  'When implementing your lookup_order MCP tool, the backend sometimes returns errors (e.g., "Order not found" or temporary database failures). What is the correct pattern for communicating these errors back to the agent?',
  '[{"key":"A","text":"Log the error server-side and return an empty result to avoid confusing the model"},{"key":"B","text":"Return the error message in the tool result content with the isError flag set to true"},{"key":"C","text":"Throw an exception from the tool handler so the agent framework can catch and log it"},{"key":"D","text":"Return a success response with a \"status\" field indicating the error type"}]'::jsonb,
  ARRAY['B']::text[],
  'Đây là cách chuẩn của MCP: trả về lỗi qua content đồng thời đánh dấu isError=true để model vừa biết thao tác thất bại vừa hiểu nguyên nhân.',
  'Model Context Protocol',
  ARRAY['CCA-F', 'Model Context Protocol', 'MCP']::text[]
),
(
  'cca-f-question-101', 'cca-f', 101,
  'Your process_refund tool returns two types of errors: technical errors ("503 Service Unavailable", "Connection timeout") that are transient (5% of calls), and business errors ("Order exceeds 30-day return window", "Item already refunded") that are permanent (12% of calls). Monitoring shows the agent wastes 3-4 turns retrying business errors that can never succeed. Currently, both error types return only a plain text message to Claude. What''s the most effective way to reduce wasted retries while improving customer-facing response quality?',
  '[{"key":"A","text":"Return structured error responses with retryable: false for business errors and a customer-friendly explanation for Claude to use."},{"key":"B","text":"Add few-shot examples showing how to distinguish retryable from non-retryable errors by parsing error message text."},{"key":"C","text":"Add a check_refund_eligibility tool that must be called before process_refund to prevent business rule violations."},{"key":"D","text":"Implement automatic retry logic at the tool level for technical errors only, passing business errors to Claude without retries."}]'::jsonb,
  ARRAY['A']::text[],
  'Thuộc tính retryable giúp agent đưa ra quyết định chính xác một cách xác định thay vì phải suy luận từ chuỗi văn bản. Đồng thời phản hồi thân thiện giúp cải thiện trải nghiệm khách hàng.',
  'Agentic Architecture',
  ARRAY['CCA-F', 'Agentic Architecture', 'Agent']::text[]
),
(
  'cca-f-question-102', 'cca-f', 102,
  'Your agent has called lookup_order multiple times while investigating a customer''s return requests. Each response includes 40+ fields (items, shipping details, payment info, status history). Tool outputs now represent the majority of the conversation''s context. The customer mentions two more orders they want to discuss. What''s the most effective approach before making additional lookups?',
  '[{"key":"A","text":"Extract only return-relevant fields (items, purchase date, return window, status) from each existing order response, removing verbose details"},{"key":"B","text":"Have the model generate a natural language summary of each order''s key details, replacing structured responses with prose descriptions"},{"key":"C","text":"Move all tool responses to a vector database with semantic indexing, retrieving relevant portions as the conversation continues"},{"key":"D","text":"Proceed with additional lookups without modifying the existing tool output context"}]'::jsonb,
  ARRAY['A']::text[],
  'Cần giảm kích thước context bằng cách giữ lại những trường thực sự liên quan tới tác vụ hiện tại. Việc cắt tỉa dữ liệu có cấu trúc giúp tiết kiệm context mà vẫn giữ độ chính xác.',
  'Context Management',
  ARRAY['CCA-F', 'Context Management', 'Context', 'Conversation']::text[]
),
(
  'cca-f-question-103', 'cca-f', 103,
  'During initial testing of the automated review pipeline, you notice that reviews on large PRs (50+ changed files) sometimes take over 20 minutes and cost $8-12 per run due to extensive agentic loops — Claude reads files, runs analysis tools, and iterates many times. Your team needs each invocation to abort once it reaches a fixed iteration count and a fixed dollar amount, enforced by Claude Code itself rather than the surrounding job runner. Which configuration change directly enforces both of those per-invocation caps?',
  '[{"key":"A","text":"Add --max-turns 10 --max-budget-usd 2.00 to the claude -p invocation to cap iterations and spend."},{"key":"B","text":"Switch the --model flag to a smaller, cheaper model so each iteration uses fewer tokens and lower per- call cost."},{"key":"C","text":"Set timeout-minutes: 5 on the GitHub Actions job step and monitor per-run costs via the Anthropic Console usage dashboard."},{"key":"D","text":"Set --permission-mode dontAsk to auto-deny any tool permission requests not in the explicitly allowed set."}]'::jsonb,
  ARRAY['A']::text[],
  'Claude Code hỗ trợ trực tiếp --max-turns để giới hạn số vòng lặp agentic và --max-budget-usd để giới hạn chi phí tối đa cho mỗi lần thực thi. Đây là hai cơ chế native đáp ứng chính xác yêu cầu.',
  'Evaluation & Bias',
  ARRAY['CCA-F', 'Evaluation & Bias', 'Test', 'Review']::text[]
),
(
  'cca-f-question-104', 'cca-f', 104,
  'Your test generation produces unit tests for new code, but reviews show 55% are low-value: trivial assertions that only verify functions don''t throw exceptions, tests duplicating existing coverage, or tests ignoring your team''s fixture conventions. How do you reduce the rate of low-value tests being generated in the first place?',
  '[{"key":"A","text":"Add post-generation coverage analysis that automatically filters out any generated test that doesn''t increase line coverage beyond what existing tests provide."},{"key":"B","text":"Restrict test generation to directories where historical quality metrics show higher acceptance rates, disabling it for areas where generated tests consistently require heavy editing."},{"key":"C","text":"Document testing standards in CLAUDE.md including valuable test criteria, available fixtures with intended use cases, and examples distinguishing meaningful behavioral tests from trivial assertions."},{"key":"D","text":"Implement a two-phase generation where a second Claude call scores each test against quality criteria, filtering out low-scoring tests before presenting results to developers."}]'::jsonb,
  ARRAY['C']::text[],
  'Vấn đề cần được giải quyết ngay tại thời điểm sinh test. CLAUDE.md cung cấp ngữ cảnh về tiêu chuẩn kiểm thử và kỳ vọng của nhóm, giúp Claude tạo ra test phù hợp ngay từ đầu.',
  'Evaluation & Bias',
  ARRAY['CCA-F', 'Evaluation & Bias', 'Test', 'Review']::text[]
),
(
  'cca-f-question-105', 'cca-f', 105,
  'An engineer used Claude Code yesterday to investigate authentication flows in a legacy monolith, building up significant context over a 2-hour session. Today she wants to continue that specific investigation. She''s worked on three other codebases since then and knows the session was named "auth-deep-dive". How should she resume?',
  '[{"key":"A","text":"Use --continue to pick up where the most recent conversation left off"},{"key":"B","text":"Use --resume auth-deep-dive to load that specific session by name"},{"key":"C","text":"Use --session-id with the UUID from yesterday''s session transcript file"},{"key":"D","text":"Start fresh and re-read the same files"}]'::jsonb,
  ARRAY['B']::text[],
  'Tham số --resume cho phép nạp lại session theo tên hoặc ID. Vì phiên đã được đặt tên là auth-deep-dive nên đây là cách đơn giản và chính xác nhất.',
  'Context Management',
  ARRAY['CCA-F', 'Context Management', 'Context']::text[]
),
(
  'cca-f-question-106', 'cca-f', 106,
  'After integrating a local MCP server providing code analysis tools (analyze_dependencies, find_dead_code, calculate_complexity), you verify the server is healthy and tools appear in the tools/list response. However, you observe that the agent consistently uses Grep to search for import statements instead of calling analyze_dependencies—even when users explicitly ask about "code dependencies." Examining tool definitions reveals: - MCP: analyze_dependencies — "Analyzes dependency graph" - Built-in: Grep — "Search file contents for a pattern using regular expressions. Returns matching lines with line numbers and surrounding context." What''s the most effective approach to improve the agent''s selection of MCP tools?',
  '[{"key":"A","text":"Remove Grep from available tools when the MCP server is connected to eliminate functional overlap."},{"key":"B","text":"Split analyze_dependencies into granular tools (list_imports, resolve_transitive_deps, detect_circular_deps) so each has a focused purpose less likely to overlap with Grep."},{"key":"C","text":"Add routing instructions to the system prompt specifying that dependency-related questions should use MCP tools rather than Grep."},{"key":"D","text":"Expand MCP tool descriptions to detail capabilities and outputs—e.g., \"Builds dependency graph showing direct imports, transitive dependencies, and cycles.\""}]'::jsonb,
  ARRAY['D']::text[],
  'Mô tả tool là yếu tố chính ảnh hưởng tới việc lựa chọn tool. Tool MCP hiện quá mơ hồ nên thua Grep. Cần mô tả rõ giá trị và khả năng của tool.',
  'Model Context Protocol',
  ARRAY['CCA-F', 'Model Context Protocol', 'MCP', 'Server']::text[]
),
(
  'cca-f-question-107', 'cca-f', 107,
  'An engineer asks the agent to find all callers of a function before removing it. The function is defined in a core library but is also exposed through wrapper modules that rename the function for domain-specific use (e.g., calculateTax in the library becomes computeOrderTax in the orders module). What exploration strategy will most reliably identify all callers?',
  '[{"key":"A","text":"Search for the function name in project documentation to understand intended usage patterns and navigate to documented integration points."},{"key":"B","text":"Use Grep to search for the function''s original name across the codebase."},{"key":"C","text":"Read the library and wrapper modules to identify all exposed names for the function, then Grep for each name across the codebase."},{"key":"D","text":"Use Grep to find all files that import from the library or wrapper modules, then read each file to check whether it uses the function."}]'::jsonb,
  ARRAY['C']::text[],
  'Các wrapper có thể đổi tên hàm. Muốn tìm đầy đủ caller thì phải xác định tất cả alias trước rồi tìm kiếm cho từng alias.',
  'Evaluation & Bias',
  ARRAY['CCA-F', 'Evaluation & Bias', 'Reliab']::text[]
),
(
  'cca-f-question-108', 'cca-f', 108,
  'An engineer''s exploration subagent spent 30 minutes analyzing a legacy payment system, reading 47 files and documenting data flows. The session was interrupted when the engineer''s connection dropped. While away, a teammate merged a PR that renamed two utility functions. The engineer wants to continue the same exploration. What''s the most effective approach?',
  '[{"key":"A","text":"Resume the subagent from its previous transcript and inform it about the renamed functions."},{"key":"B","text":"Launch a fresh subagent and include the prior transcript in the initial prompt for context."},{"key":"C","text":"Launch a fresh subagent with a summary of prior findings."},{"key":"D","text":"Resume the subagent from its previous transcript without mentioning the changes—the architecture understanding remains valid."}]'::jsonb,
  ARRAY['A']::text[],
  'Tiếp tục transcript giữ nguyên toàn bộ tri thức đã thu thập, còn việc thông báo các file thay đổi giúp cập nhật phần đã lỗi thời.',
  'Claude Code CLI',
  ARRAY['CCA-F', 'Claude Code CLI', 'Subagent']::text[]
),
(
  'cca-f-question-109', 'cca-f', 109,
  'An engineer now asks it to understand how the physics engine integrates with rendering for collision debug overlays. You notice recent responses reference "typical rendering patterns" rather than the specific VulkanPipeline and FrameGraph classes it discovered earlier. What''s the most effective approach?',
  '[{"key":"A","text":"Use /clear to reset context completely, then start fresh with physics exploration using file paths from the project''s CLAUDE.md."},{"key":"B","text":"Spawn a sub-agent to explore physics independently, then manually synthesize its findings with the rendering knowledge accumulated in the main conversation."},{"key":"C","text":"Summarize key rendering findings, then spawn a sub-agent for physics exploration with that summary in its initial context."},{"key":"D","text":"Continue in the current context with more targeted prompts referencing the specific classes by name."}]'::jsonb,
  ARRAY['C']::text[],
  'Dấu hiệu này cho thấy context đã bị suy giảm chất lượng. Tóm tắt tri thức quan trọng rồi chuyển sang context mới là cách quản lý ngữ cảnh hiệu quả nhất.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Architecture & Best Practices']::text[]
),
(
  'cca-f-question-110', 'cca-f', 110,
  'An engineer asks the agent to understand how the caching layer works before adding a new cache invalidation trigger. After initial Grep searches, the agent has identified that caching logic spans 15 files including decorators, middleware, and service classes (~8,000 lines total). What''s the most effective next step for building understanding while managing context constraints?',
  '[{"key":"A","text":"Use Glob to find files matching common caching patterns (cache.py, caching/), prioritize the largest files by reading them first, then check smaller files for gaps."},{"key":"B","text":"Use the Read tool to sequentially load all 15 files, building complete understanding across the full caching implementation."},{"key":"C","text":"Use Grep to search for \"invalidate\" and \"expire\" patterns across all files, then Read only those specific line ranges with minimal surrounding context."},{"key":"D","text":"Analyze imports and class hierarchies to identify the base cache class, Read that file to understand the interface, then trace specific invalidation implementations."}]'::jsonb,
  ARRAY['D']::text[],
  'Bắt đầu từ abstraction chính (base cache class) giúp xây dựng hiểu biết hệ thống một cách có cấu trúc và tiết kiệm context.',
  'Context Management',
  ARRAY['CCA-F', 'Context Management', 'Context']::text[]
),
(
  'cca-f-question-111', 'cca-f', 111,
  'Your agent has analyzed a complex service module—reading 23 source files, tracing request flows, and identifying error handling patterns. A developer wants to compare two testing strategies before committing to one: end-to-end tests with mocked external services vs. snapshot tests capturing expected outputs. They need to independently develop both approaches to evaluate trade-offs. How should you manage the sessions?',
  '[{"key":"A","text":"Export the analysis session''s key findings to a file, then create two new sessions that reference this file."},{"key":"B","text":"Resume the analysis session with fork_session enabled, creating a separate branch for each testing strategy."},{"key":"C","text":"Start two fresh sessions, having each re-read the relevant source files before beginning."},{"key":"D","text":"Continue in the original session, developing end-to-end tests first, then snapshot tests sequentially."}]'::jsonb,
  ARRAY['B']::text[],
  'Resuming the analysis session with fork_session branches the session into new session IDs while preserving the full analysis context and leaving the original intact.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Certified Architect', 'CCAF']::text[]
),
(
  'cca-f-question-112', 'cca-f', 112,
  'Your codebase exploration tool stores session IDs to allow engineers to continue investigations across work sessions. An engineer spent an hour yesterday analyzing a legacy authentication module, building context about its architecture and dependencies. They want to continue today. The session ID is valid, but version control shows 3 of the 12 files the agent previously read were modified overnight by a teammate''s merge. What approach best balances efficiency and accuracy?',
  '[{"key":"A","text":"Resume the session and immediately have the agent re-read all 12 previously analyzed files"},{"key":"B","text":"Start a fresh session to ensure the agent works with current codebase state without stale assumptions"},{"key":"C","text":"Resume the session and inform the agent which specific files changed for targeted re-analysis"},{"key":"D","text":"Resume the session without informing the agent about the changed files"}]'::jsonb,
  ARRAY['C']::text[],
  'Resuming the session preserves the hour of accumulated context about the module''s architecture, while telling the agent exactly which 3 files changed allows targeted re-reading of only the stale files.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Certified Architect', 'CCAF']::text[]
),
(
  'cca-f-question-113', 'cca-f', 113,
  'During testing, you observe that in extended exploration sessions (30+ minutes), the agent starts giving inconsistent answers about code structure it discussed earlier. Engineers report having to repeat context about modules they''ve already explored. What''s the most effective approach to address this?',
  '[{"key":"A","text":"Have the agent maintain a scratchpad file that records key findings, referencing it for subsequent questions."},{"key":"B","text":"Switch to a higher-capacity model tier to provide more context window space for accumulated exploration data."},{"key":"C","text":"Implement automatic context clearing every 15 minutes to ensure the agent starts with fresh, uncontaminated context."},{"key":"D","text":"Create summaries of all source files before exploration begins, loading only these compressed representations into context."}]'::jsonb,
  ARRAY['A']::text[],
  'A scratchpad offloads findings to durable storage the agent can re-read on demand, giving it a stable ''memory'' independent of how crowded the context window gets.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Certified Architect', 'CCAF']::text[]
),
(
  'cca-f-question-114', 'cca-f', 114,
  'An engineer used the agent yesterday to analyze a legacy authentication module, identifying two distinct refactoring approaches: extracting a microservice versus refactoring in-place. Today, they want to explore both approaches in depth—having the agent propose specific code changes for each—before deciding which to implement. What''s the most effective way to structure this exploration?',
  '[{"key":"A","text":"Resume yesterday''s session to explore the first approach, then start a new session for the second, manually recreating the original context."},{"key":"B","text":"Start two fresh sessions, manually providing a summary of yesterday''s analysis findings to establish context."},{"key":"C","text":"Resume yesterday''s session and explore both approaches sequentially within the same conversation thread."},{"key":"D","text":"Use fork_session to create two branches from yesterday''s analysis, exploring one approach in each fork."}]'::jsonb,
  ARRAY['D']::text[],
  'Forking from yesterday''s session gives each approach its own independent context starting from the same analysis baseline — clean, parallel, no contamination.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Certified Architect', 'CCAF']::text[]
),
(
  'cca-f-question-115', 'cca-f', 115,
  'An engineer asks your agent to identify untested code paths in a legacy payment processing module spanning 45 files. After reading the first 8 source files, the agent''s responses are becoming noticeably less accurate—it''s forgetting previously discussed code patterns and hasn''t yet located all test files or traced critical payment flows. What''s the most effective approach to complete this investigation?',
  '[{"key":"A","text":"Document all current findings in a summary report, clear context completely, then use that report as the sole reference for continuing the investigation."},{"key":"B","text":"Spawn subagents to investigate specific questions (e.g., \"find all test files for payment processing\", \"trace refund flow dependencies\") while the main agent coordinates findings and preserves high-level understanding."},{"key":"C","text":"Clear context with /clear, then selectively re-read only the most critical files discovered so far, writing key findings to a scratchpad file that persists between context resets."},{"key":"D","text":"Switch to using Grep to search for specific function names instead of reading full files, reducing the content loaded into context for remaining exploration."}]'::jsonb,
  ARRAY['B']::text[],
  'Delegate well-scoped investigations to subagents with fresh context, while the main agent keeps the architectural overview.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Certified Architect', 'CCAF']::text[]
),
(
  'cca-f-question-116', 'cca-f', 116,
  'A developer asks the agent to investigate why a specific API endpoint intermittently returns 500 errors. The codebase has 200+ files and the developer doesn''t know which components are involved. The agent must trace the error through routing, middleware, business logic, and database layers. What task decomposition approach would be most effective?',
  '[{"key":"A","text":"Have the agent first create a comprehensive plan mapping all code paths through the endpoint before beginning any file exploration or code reading."},{"key":"B","text":"Have the agent dynamically generate investigation subtasks based on what it discovers at each step, adapting its exploration plan as new information about the error path emerges."},{"key":"C","text":"Define a fixed sequence of investigation steps upfront—grep for error patterns, then read error handlers, then check database queries, then examine middleware—executing each step regardless of intermediate findings."},{"key":"D","text":"Run parallel worker agents that simultaneously investigate all four layers, then synthesize their findings to identify where the error originates."}]'::jsonb,
  ARRAY['B']::text[],
  'Debugging là hoạt động mang tính thích ứng. Mỗi file được đọc có thể làm thay đổi hướng điều tra hiệu quả nhất tiếp theo. Vì vậy agent nên liên tục điều chỉnh kế hoạch dựa trên bằng chứng mới.',
  'Agentic Architecture',
  ARRAY['CCA-F', 'Agentic Architecture', 'Agent', 'Routing']::text[]
),
(
  'cca-f-question-117', 'cca-f', 117,
  'After adding an MCP server with specialized code refactoring tools (extract_function, rename_variable, inline_function), you notice the agent still uses basic text manipulation via Write and Bash sed commands for refactoring tasks. The MCP server is connected and healthy. Examining the configuration, you find each MCP tool has a minimal description like "extract_function: extracts a function from code." What''s the most effective way to improve adoption of the MCP refactoring tools?',
  '[{"key":"A","text":"Implement a request classifier that detects refactoring intent and automatically routes those requests to the MCP server before the agent processes them."},{"key":"B","text":"Remove the Write tool from the agent''s configuration for refactoring sessions so it must use the MCP tools for code modifications."},{"key":"C","text":"Accept this as expected behavior since simpler tools like sed are more predictable than specialized refactoring tools."},{"key":"D","text":"Enhance the MCP tool descriptions to explain when each tool is preferable to text manipulation and clarify expected inputs and outputs."}]'::jsonb,
  ARRAY['D']::text[],
  'Việc chọn tool phụ thuộc mạnh vào mô tả mà Claude nhìn thấy. Mô tả chi tiết giúp agent hiểu lợi ích của tool chuyên biệt và lựa chọn đúng công cụ hơn.',
  'Model Context Protocol',
  ARRAY['CCA-F', 'Model Context Protocol', 'MCP', 'Server']::text[]
),
(
  'cca-f-question-118', 'cca-f', 118,
  'Your agent needs to insert a new helper function into the middle of a 150-line utility module, between two existing functions. The Edit tool fails because its old_string parameter cannot find unique text to match — the file has repetitive docstrings, variable names, and structural patterns. What''s the most reliable way to complete this insertion?',
  '[{"key":"A","text":"Use Edit with an extremely long old_string capturing 30+ lines of context to guarantee uniqueness"},{"key":"B","text":"Use Edit''s replace_all parameter to target a common pattern and embed the new function in the replacement text"},{"key":"C","text":"Use Bash to append the function definition to the end of the file using heredoc syntax"},{"key":"D","text":"Use Read to load the file, add the function at the appropriate location, then Write the updated file"}]'::jsonb,
  ARRAY['D']::text[],
  'Khi không thể đảm bảo một chuỗi khớp duy nhất cho Edit, giải pháp đáng tin cậy nhất là đọc toàn bộ file, chỉnh sửa trực tiếp và ghi đè lại nội dung.',
  'Evaluation & Bias',
  ARRAY['CCA-F', 'Evaluation & Bias', 'Reliab']::text[]
),
(
  'cca-f-question-119', 'cca-f', 119,
  'An engineer who just joined the team asks the agent to help them understand the authentication and authorization architecture before making security improvements. The codebase has 800+ files across multiple services. What exploration strategy will most effectively build understanding, given Claude built-in tools and context limits?',
  '[{"key":"A","text":"Read any CLAUDE.md and README files first, then ask the engineer to specify which 10-15 files are most important for understanding the auth system."},{"key":"B","text":"Launch parallel subagents to explore different services simultaneously, then synthesize their findings into an architectural overview."},{"key":"C","text":"Use Grep to find authentication entry points, read those files, then follow imports and function calls to map the auth flow incrementally."},{"key":"D","text":"Read all files containing \"auth\", \"login\", \"permission\", or \"token\" in their content or filename."}]'::jsonb,
  ARRAY['C']::text[],
  'Bắt đầu từ các entry point thực tế như login, token verification hay middleware rồi lần theo luồng thực thi giúp xây dựng hiểu biết chính xác và tiết kiệm context.',
  'Security & Guardrails',
  ARRAY['CCA-F', 'Security & Guardrails', 'Security']::text[]
),
(
  'cca-f-question-120', 'cca-f', 120,
  'A critical bug is affecting production users. Error logs show exceptions in the OrderProcessing module with a clear stack trace pointing to a specific area, but you haven''t worked with this module before. What''s the most effective approach?',
  '[{"key":"A","text":"Use plan mode to analyze the error in context of the module''s design, enumerate potential root causes, and prioritize fixes systematically."},{"key":"B","text":"Start with direct execution to gather initial information, then switch to plan mode to design a comprehensive solution before implementing."},{"key":"C","text":"Use direct execution to examine the stack trace, read the relevant code, and implement a fix once you identify the root cause."},{"key":"D","text":"Enter plan mode to explore the module''s architecture and dependencies before attempting any fix."}]'::jsonb,
  ARRAY['C']::text[],
  'Stack trace đã chỉ rõ khu vực lỗi. Cách nhanh nhất và đáng tin cậy nhất là lần theo bằng chứng trực tiếp thay vì thực hiện phân tích kiến trúc quy mô lớn.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Architecture & Best Practices']::text[]
),
(
  'cca-f-question-121', 'cca-f', 121,
  'After deploying the automated review, you notice high precision but low recall — real bugs are slipping through undetected. Investigation reveals your review prompt instructs Claude to "only report high- confidence issues you are certain about" and "err on the side of not commenting." Developers appreciate the low noise, but a race condition that caused a production outage was visible in a reviewed PR and went unreported. You need to substantially improve bug detection while keeping false positive rates manageable for your team. What is the most effective approach?',
  '[{"key":"A","text":"Remove the conservative filtering instructions and prompt Claude to report all potential issues, then apply a programmatic filter to deduplicate and suppress categories that historically generate false positives."},{"key":"B","text":"Add detailed few-shot examples demonstrating bug categories Claude should flag — race conditions, null dereferences, error handling gaps — while keeping the high-confidence filtering instruction to maintain current precision levels."},{"key":"C","text":"Expand the context window by including related test files, recent git history, and the module''s dependency graph alongside the diff, giving Claude richer signals to assess issue severity."},{"key":"D","text":"Split the review into a finding stage where Claude''s goal is coverage — flagging every potential issue with confidence and severity metadata — and a separate stage that thresholds those findings."}]'::jsonb,
  ARRAY['D']::text[],
  'Anthropic khuyến nghị tách riêng giai đoạn phát hiện và giai đoạn lọc. Điều này tăng recall nhưng vẫn kiểm soát được false positive thông qua bước đánh giá sau.',
  'Prompt Engineering',
  ARRAY['CCA-F', 'Prompt Engineering', 'Prompt']::text[]
),
(
  'cca-f-question-122', 'cca-f', 122,
  'Your extraction system processes two document types: standard monthly reports (archived after processing) and urgent exception reports (must trigger business alerts within 30 minutes of receipt). Both use the same JSON schema. You want to minimize API costs while meeting latency requirements. How should you architect the processing pipeline?',
  '[{"key":"A","text":"Submit all documents to the real-time Messages API to ensure consistent processing latency across document types."},{"key":"B","text":"Submit all documents to the Batch API with custom_ids for tracking. When results arrive, immediately process urgent documents and trigger delayed alerts for exceptions."},{"key":"C","text":"Queue all documents and submit hourly batches, flagging urgent documents for expedited handling when batch results return."},{"key":"D","text":"Route standard reports to the Batch API for 50% cost savings, and route urgent exception reports to the real-time Messages API."}]'::jsonb,
  ARRAY['D']::text[],
  'Tài liệu thông thường được hưởng lợi từ chi phí thấp của Batch API, trong khi tài liệu khẩn cấp cần độ trễ thấp của API thời gian thực.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Architecture & Best Practices']::text[]
),
(
  'cca-f-question-123', 'cca-f', 123,
  'Your schema includes a skills: string[] field. Production monitoring reveals three consistency issues: (1) compound phrases like "Python and SQL" are sometimes kept as one entry, sometimes split; (2) implied but unstated skills occasionally appear in extractions; (3) similar documents produce wildly different array lengths (5-10 vs 40+ entries). Your prompt currently says "Extract all skills mentioned." What''s the most effective improvement?',
  '[{"key":"A","text":"Add few-shot examples demonstrating compound phrase handling, explicit mention criteria, and appropriate entry granularity."},{"key":"B","text":"Add constraints: \"Extract 10-20 skills maximum, one skill per entry, only explicitly named skills.\""},{"key":"C","text":"Add post-extraction normalization that maps skills to a canonical taxonomy and deduplicates similar entries."},{"key":"D","text":"Enrich the schema to {skill: string, confidence: float, source_quote: string}[] to capture extraction metadata."}]'::jsonb,
  ARRAY['A']::text[],
  'Các vấn đề đều xuất phát từ việc model chưa hiểu rõ thế nào được coi là một skill. Few-shot example là cách hiệu quả nhất để định nghĩa hành vi mong muốn.',
  'Prompt Engineering',
  ARRAY['CCA-F', 'Prompt Engineering', 'Prompt']::text[]
),
(
  'cca-f-question-124', 'cca-f', 124,
  'Your system has been operating with 100% human review for 3 months. Analysis shows that extractions with model confidence >90% have 97% accuracy overall. To reduce reviewer workload, you plan to automate high-confidence extractions. Before deploying, what validation step is most critical?',
  '[{"key":"A","text":"Analyze accuracy by document type and field to verify high-confidence extractions perform consistently across all segments, not just in aggregate."},{"key":"B","text":"Compare accuracy at different confidence thresholds (85%, 90%, 95%) to find the optimal cutoff that maximizes automation while minimizing errors."},{"key":"C","text":"Run a two-week pilot routing 25% of high-confidence extractions directly to downstream systems and monitor error reports."},{"key":"D","text":"Verify that 97% accuracy meets requirements for all downstream systems that consume the extracted data."}]'::jsonb,
  ARRAY['A']::text[],
  'Độ chính xác tổng thể có thể che giấu các phân khúc hoạt động kém. Cần kiểm tra theo từng loại tài liệu và từng field trước khi tự động hóa.',
  'Security & Guardrails',
  ARRAY['CCA-F', 'Security & Guardrails', 'Human']::text[]
),
(
  'cca-f-question-125', 'cca-f', 125,
  'Your extraction pipeline processes contracts that frequently include amendments. When a contract contains both original terms and later amendments (e.g., original clause specifies "30-day payment terms" while Amendment 1 changes this to "45 days"), the model inconsistently extracts one value or the other with no indication of which applies. What''s the most effective approach to improve extraction accuracy for documents with amendments?',
  '[{"key":"A","text":"Redesign the schema so amended fields capture multiple values, each with source location and effective date."},{"key":"B","text":"Add prompt instructions to always extract the most recent amendment value and ignore superseded original terms."},{"key":"C","text":"Preprocess documents with a classifier that identifies and removes superseded sections before the main extraction step."},{"key":"D","text":"Implement post-extraction validation using pattern matching to detect amendments and flag those extractions for manual review."}]'::jsonb,
  ARRAY['A']::text[],
  'Amendment bản chất là dữ liệu có phiên bản và thời điểm hiệu lực. Schema nên phản ánh đặc điểm này thay vì ép model chọn một giá trị duy nhất.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Architecture & Best Practices']::text[]
),
(
  'cca-f-question-126', 'cca-f', 126,
  'Your extraction system implements automatic retries when validation fails. On each retry, the specific validation error is appended to the prompt. This retry-with-error-feedback approach resolves most failures within 2-3 attempts. For which failure pattern would additional retries be LEAST effective?',
  '[{"key":"A","text":"The model extracts keywords as a nested object organized by category when the schema requires a flat array of strings"},{"key":"B","text":"The model extracts citation counts as locale-formatted strings (\"1,234\") when the schema requires integers"},{"key":"C","text":"The model extracts dates as ISO 8601 datetime strings (\"2023-03-15T00:00:00Z\") when the schema requires only the date portion (YYYY-MM-DD)"},{"key":"D","text":"The model extracts \"et al.\" for co-authors when the full list exists only in an external document not in the input"}]'::jsonb,
  ARRAY['D']::text[],
  'Retry chỉ có thể sửa các lỗi mà model có khả năng giải quyết từ dữ liệu đầu vào hiện có. Nếu thông tin không tồn tại trong input thì retry không giúp ích.',
  'Prompt Engineering',
  ARRAY['CCA-F', 'Prompt Engineering', 'Prompt']::text[]
),
(
  'cca-f-question-127', 'cca-f', 127,
  'Your extraction pipeline processes restaurant menus and must output structured JSON with fields for item names, descriptions, prices, and dietary tags. Some menus use inconsistent formatting—prices as "$12" vs "12.00", dietary info as icons vs text. What''s the most reliable approach?',
  '[{"key":"A","text":"Use separate extraction calls for each field to ensure consistent handling of each type."},{"key":"B","text":"Extract data as-is and normalize formats in post-processing code after Claude returns."},{"key":"C","text":"Request multiple extraction attempts per document and select the most common format."},{"key":"D","text":"Define a strict output schema and include format normalization rules in your prompt."}]'::jsonb,
  ARRAY['D']::text[],
  'Schema nghiêm ngặt kết hợp với quy tắc chuẩn hóa rõ ràng cho phép model vừa trích xuất vừa chuẩn hóa dữ liệu trong một bước.',
  'Evaluation & Bias',
  ARRAY['CCA-F', 'Evaluation & Bias', 'Reliab']::text[]
),
(
  'cca-f-question-128', 'cca-f', 128,
  'Your system extracts event metadata (date, location, organizer, attendee_count) from news articles using a JSON schema with all nullable fields. During evaluation, you observe the model frequently generates plausible but incorrect values for fields not mentioned in the article—for example, outputting "500" for attendee_count when the source contains no attendance information. What''s the most effective way to reduce these false extractions?',
  '[{"key":"A","text":"Add a post-processing step using a second LLM call to verify each extracted value exists in the source document."},{"key":"B","text":"Add prompt instructions to return null for any field where information is not directly stated in the source."},{"key":"C","text":"Make all schema fields required (non-nullable) with strict validation rules to ensure the model only outputs verifiable data."},{"key":"D","text":"Upgrade to a more capable model tier with improved instruction-following to reduce hallucination tendencies."}]'::jsonb,
  ARRAY['B']::text[],
  'Các field đã nullable, nên điều quan trọng là chỉ rõ chính sách: ưu tiên null thay vì suy đoán.',
  'Evaluation & Bias',
  ARRAY['CCA-F', 'Evaluation & Bias', 'Evaluat']::text[]
),
(
  'cca-f-question-129', 'cca-f', 129,
  'After implementing tool use with strict schema definitions, JSON syntax errors are eliminated, but 5% of extractions still have valid JSON with empty arrays or null values for required fields like citations and methodology. Spot-checking reveals that source documents contain this information, but in varied formats—inline citations vs. bibliographies, methodology sections vs. details embedded in introductions. What''s the most effective way to address these failures?',
  '[{"key":"A","text":"Implement retry logic that re-sends requests when validation detects empty required fields."},{"key":"B","text":"Build a regex-based post-processing layer that scans source documents for citation patterns and methodology keywords, populating empty fields when the model fails to extract."},{"key":"C","text":"Modify your schema to make citations and methodology optional, and flag incomplete records for manual review rather than failing validation."},{"key":"D","text":"Add few-shot examples demonstrating extractions from documents with varied structures—showing how to identify citations in different formats and locate methodology details across section types."}]'::jsonb,
  ARRAY['D']::text[],
  'Vấn đề là model chưa nhận diện được nhiều cấu trúc tài liệu khác nhau. Few-shot example trực tiếp dạy model cách tìm kiếm thông tin trong các định dạng đa dạng.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Architecture & Best Practices']::text[]
),
(
  'cca-f-question-130', 'cca-f', 130,
  'Your extraction pipeline processes invoices and extracts line items, subtotals, tax amounts, and grand totals. During evaluation, you discover that in 18% of extractions, the sum of extracted line item amounts doesn''t match the extracted grand total—sometimes due to OCR errors in the source document, sometimes due to extraction mistakes by the model. Downstream accounting systems reject records with mismatched totals. What''s the most effective approach to improve extraction reliability?',
  '[{"key":"A","text":"Add a \"calculated_total\" field where the model sums extracted line items alongside a \"stated_total\" field. Flag records for human review when values differ."},{"key":"B","text":"Extract line items and totals independently, then use a separate validation model to reconcile discrepancies by determining which extracted values are most likely correct."},{"key":"C","text":"Add few-shot examples demonstrating invoices where extracted line items sum correctly to the stated total, encouraging the model to produce mathematically consistent extractions."},{"key":"D","text":"Implement post-processing that automatically adjusts line item amounts proportionally when their sum doesn''t match the stated total."}]'::jsonb,
  ARRAY['A']::text[],
  'Việc lưu đồng thời tổng được tính toán và tổng được ghi trong hóa đơn biến sai lệch thành tín hiệu rõ ràng, giúp phát hiện cả lỗi OCR lẫn lỗi extraction và chỉ chuyển những trường hợp có vấn đề sang review.',
  'Evaluation & Bias',
  ARRAY['CCA-F', 'Evaluation & Bias', 'Evaluat', 'Reliab']::text[]
),
(
  'cca-f-question-131', 'cca-f', 131,
  'Your pipeline uses a tool called extract_metadata with a JSON schema for paper details. You''ve also defined lookup_citations and verify_doi tools for enrichment. During testing, you notice that when users include requests like "extract the metadata and tell me how cited it is," Claude sometimes calls lookup_citations first, which fails because it needs the DOI that extract_metadata would provide. What''s the most effective way to ensure structured metadata extraction happens first?',
  '[{"key":"A","text":"Set tool_choice to \"any\" so Claude must use a tool, combined with system prompt instructions prioritizing extract_metadata."},{"key":"B","text":"Set tool_choice to \"auto\" and reorder the tool definitions so extract_metadata appears first in the tools array, since Claude prioritizes earlier-listed tools."},{"key":"C","text":"Set tool_choice to {\"type\": \"tool\", \"name\": \"extract_metadata\"} and process the enrichment requests in subsequent turns after receiving the extracted metadata."},{"key":"D","text":"Set tool_choice to {\"type\": \"tool\", \"name\": \"extract_metadata\"} for every API call in the pipeline, ensuring Claude always extracts metadata before any enrichment can occur."}]'::jsonb,
  ARRAY['C']::text[],
  'Việc ép Claude sử dụng extract_metadata ở vòng đầu tiên đảm bảo DOI được trích xuất trước. Sau đó có thể chuyển lại sang chế độ auto để thực hiện các bước enrichment như lookup citation hoặc verify DOI.',
  'Model Context Protocol',
  ARRAY['CCA-F', 'Model Context Protocol', 'Tool Call']::text[]
),
(
  'cca-f-question-132', 'cca-f', 132,
  'Your extraction uses tool use with a JSON schema where property_type is defined as an enum: [''house'', ''apartment'', ''condo'', ''townhouse'']. After deployment, 8% of extractions fail schema validation. Investigation reveals listings mention many uncommon property types—"studio", "loft", "duplex", "mobile home", "tiny house", "converted warehouse"—and new types continue appearing regularly. What''s the most effective long-term solution?',
  '[{"key":"A","text":"Continuously expand the enum to include newly observed property types and add monitoring for additional edge cases."},{"key":"B","text":"Add an \"other\" value to your enum with a separate property_type_detail string field for specifics when \"other\" is selected."},{"key":"C","text":"Change property_type from an enum to a free-form string and implement a normalization step in post-processing."},{"key":"D","text":"Add few-shot examples to your prompt demonstrating how to map unexpected property types to the closest existing enum value."}]'::jsonb,
  ARRAY['B']::text[],
  'Giữ enum cho các trường hợp phổ biến giúp downstream xử lý nhất quán, trong khi ''other'' + detail field cung cấp cơ chế mở rộng ổn định khi xuất hiện loại mới.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Architecture & Best Practices']::text[]
),
(
  'cca-f-question-133', 'cca-f', 133,
  'Your extraction system parses e-commerce product descriptions to extract specifications like dimensions, weight, and materials into JSON. Despite having a well-defined schema, the model inconsistently extracts the "materials" field—sometimes returning "cotton blend", other times "Cotton/Polyester mix", and occasionally omitting the field when material information is clearly present in the source. What''s the most effective way to improve extraction consistency?',
  '[{"key":"A","text":"Make the \"materials\" field required instead of optional in the schema to force the model to always extract a value"},{"key":"B","text":"Switch to a more capable model tier since inconsistent extraction indicates insufficient model capability"},{"key":"C","text":"Set temperature to 0 to eliminate randomness and ensure deterministic outputs"},{"key":"D","text":"Add few-shot examples showing 2-3 complete input-output pairs with standardized material description formats"}]'::jsonb,
  ARRAY['D']::text[],
  'Few-shot examples giúp xác định chính xác định dạng chuẩn mong muốn và đồng thời cải thiện khả năng nhận diện thông tin vật liệu trong các mô tả khác nhau.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Architecture & Best Practices']::text[]
),
(
  'cca-f-question-134', 'cca-f', 134,
  'After deployment, you find that 12% of extractions contain semantic errors that pass JSON schema validation (e.g., a duration like "30 minutes" incorrectly placed in an ingredient quantity field). Human reviewers have capacity to check only 20% of extractions. Which approach most effectively allocates reviewer attention?',
  '[{"key":"A","text":"Have the model output field-level confidence scores, then calibrate review thresholds using a labeled validation set."},{"key":"B","text":"Randomly sample 20% of extractions for review, using corrections to track accuracy and identify error patterns."},{"key":"C","text":"Prioritize review of all extractions where required fields are empty or explicitly marked as not found."},{"key":"D","text":"Review all extractions from documents with formatting anomalies such as unusual layouts or mixed content types."}]'::jsonb,
  ARRAY['A']::text[],
  'Confidence theo từng trường giúp tập trung reviewer vào các extraction có rủi ro cao nhất thay vì phân bổ ngẫu nhiên.',
  'Security & Guardrails',
  ARRAY['CCA-F', 'Security & Guardrails', 'Human']::text[]
),
(
  'cca-f-question-135', 'cca-f', 135,
  'Your CI pipeline performs security-focused code reviews on approximately 50 PRs daily, currently costing $150/day using the synchronous API. Reviews are non-blocking—developers merge after tests pass and address findings in follow-up commits. You''re evaluating the Message Batches API for its 50% cost reduction. What factor most determines whether batch processing is appropriate for this use case?',
  '[{"key":"A","text":"Whether you can structure each review as a single request without multi-turn refinement."},{"key":"B","text":"Whether reducing per-review latency from 30-60 seconds to near-instant matters for your workflow."},{"key":"C","text":"Whether review feedback arriving up to 24 hours after PR creation remains actionable."},{"key":"D","text":"Whether your result processing can handle reviews arriving in a different order than submitted."}]'::jsonb,
  ARRAY['C']::text[],
  'Yếu tố quyết định là khả năng chấp nhận độ trễ lên đến 24 giờ của Message Batches API. Nếu feedback vẫn hữu ích sau khoảng thời gian đó thì batch processing là lựa chọn phù hợp.',
  'Evaluation & Bias',
  ARRAY['CCA-F', 'Evaluation & Bias', 'Evaluat', 'Test', 'Review']::text[]
),
(
  'cca-f-question-136', 'cca-f', 136,
  'Documents arrive continuously throughout business hours and need structured data extracted. To reduce costs, you want to use the Message Batches API (50% discount, up-to-24-hour processing window). Your SLA specifies that extraction results must be available within 30 hours of document arrival with 99.9% reliability. Which batching strategy is most appropriate?',
  '[{"key":"A","text":"Submit batches every 6 hours containing documents from that window"},{"key":"B","text":"Submit a single batch at end of day containing all documents from that day"},{"key":"C","text":"Submit batches every 4 hours containing documents from that window"},{"key":"D","text":"Use the real-time API for all documents instead of batch processing"}]'::jsonb,
  ARRAY['A']::text[],
  'Thời gian chờ tối đa 4 giờ trước khi vào batch cộng với SLA tối đa 24 giờ của Batch API tạo ra worst-case khoảng 28 giờ, vẫn còn khoảng đệm cho mục tiêu 30 giờ.',
  'Evaluation & Bias',
  ARRAY['CCA-F', 'Evaluation & Bias', 'Reliab']::text[]
),
(
  'cca-f-question-137', 'cca-f', 137,
  'After your daily batch of 10,000 documents completes, 300 documents (3%) failed with "context_length_exceeded" errors. The results file identifies each failure by custom_id. What''s the most cost-effective approach to process these failures?',
  '[{"key":"A","text":"Reprocess the entire batch with prompt caching enabled to reduce the cost of retrying requests with identical system prompts"},{"key":"B","text":"Resubmit only the 300 failed documents after chunking them into smaller pieces, then combine the partial extractions"},{"key":"C","text":"Resubmit the entire 10,000 document batch using a model tier with a larger context window"},{"key":"D","text":"Increase the max_tokens parameter for the 300 failed documents and resubmit them in a new batch"}]'::jsonb,
  ARRAY['B']::text[],
  'Lỗi phát sinh do kích thước đầu vào quá lớn. Chỉ cần xử lý lại các tài liệu lỗi bằng kỹ thuật chunking thay vì chạy lại cả batch.',
  'Context Management',
  ARRAY['CCA-F', 'Context Management', 'Context']::text[]
),
(
  'cca-f-question-138', 'cca-f', 138,
  'The synthesis agent completes its initial pass but flags that three key research questions remain unanswered because the web search and document analysis agents didn''t find relevant information on those specific subtopics. The coordinator currently proceeds directly to report generation, producing reports with incomplete coverage. What change would most effectively improve research completeness?',
  '[{"key":"A","text":"Have the coordinator evaluate synthesis output for gaps, then re-delegate to web search and document analysis with targeted queries before Invoking synthesis again."},{"key":"B","text":"Increase the initial breadth of queries sent to web search and document analysis to reduce the probability of missing relevant information."},{"key":"C","text":"Have the report generation agent note which research questions couldn''t be answered, so users understand the limitations of the final output."},{"key":"D","text":"Give the synthesis agent direct access to web search tools so it can autonomously fill knowledge gaps without returning control to the coordinator."}]'::jsonb,
  ARRAY['A']::text[],
  'Coordinator cần hoạt động theo vòng lặp lặp lại cho đến khi đáp ứng tiêu chí đầy đủ thay vì kết thúc ngay từ lần tổng hợp đầu tiên.',
  'Agentic Architecture',
  ARRAY['CCA-F', 'Agentic Architecture', 'Agent', 'Coordinator']::text[]
),
(
  'cca-f-question-139', 'cca-f', 139,
  'Your search products tool queries an external catalog API that returns paginated results (50 items per request). Production logs show queries frequently match 200+ products, and the design that auto-fetches all pages causes 15-20 second delays. How should you redesign the pagination handling?',
  '[{"key":"A","text":"Create separate search products and fetch more results tools for pagination."},{"key":"B","text":"Implement server-side relevance ranking and return only the top 50 most relevant items."},{"key":"C","text":"Add a max pages parameter (default: 2) that controls how many pages are fetched internally."},{"key":"D","text":"Return the first page with total match count and cursor for additional pages."}]'::jsonb,
  ARRAY['D']::text[],
  'Đây là mô hình phân trang chuẩn, giảm độ trễ ban đầu nhưng vẫn cho phép truy cập toàn bộ dữ liệu khi cần.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Architecture & Best Practices']::text[]
),
(
  'cca-f-question-140', 'cca-f', 140,
  'Your search Flights tool calls an external airline API that occasionally returns a 503 Service Unavailable error. What is the most effective way to handle this error in your tool implementation?',
  '[{"key":"A","text":"Return an empty flight list as if the search succeeded but found no matching flights."},{"key":"B","text":"Log the error internally and return an empty response, letting the model continue without the flight data."},{"key":"C","text":"Return an error message in the tool result explaining the service is temporarily unavailable."},{"key":"D","text":"Automatically retry the request up to five times with exponential backoff before returning results to the agent."}]'::jsonb,
  ARRAY['D']::text[],
  '503 là lỗi tạm thời (transient error), phù hợp để xử lý bằng retry trong tool thay vì đẩy cho agent.',
  'Model Context Protocol',
  ARRAY['CCA-F', 'Model Context Protocol', 'Tool Call']::text[]
),
(
  'cca-f-question-141', 'cca-f', 141,
  'Your MCP server implements a check_availability tool that queries an external calendar API. During testing, you encounter three error conditions: (1) the tool is called with a malformed request, missing the required user_email parameter (2) the calendar API returns a 404 because the specified user doesn''t exist in the calendar system (3) the calendar API returns a 503 because the service is temporarily unavailable. How should each error be reported according to MCP''s error handling design?',
  '[{"key":"A","text":"Report all three as tool results with isError: true"},{"key":"B","text":"Report errors 1 and 2 as JSON-RPC protocol errors, report error 3 as a tool result with isError: true"},{"key":"C","text":"Report error 1 as a JSON-RPC protocol error, report errors 2 and 3 as tool results with isError: true"},{"key":"D","text":"Report all three as JSON-RPC protocol errors."}]'::jsonb,
  ARRAY['C']::text[],
  'Lỗi tham số đầu vào là lỗi giao thức (protocol error). Các lỗi từ hệ thống nghiệp vụ bên ngoài nên trả qua tool result.',
  'Model Context Protocol',
  ARRAY['CCA-F', 'Model Context Protocol', 'MCP', 'Server']::text[]
),
(
  'cca-f-question-142', 'cca-f', 142,
  'Your documents (query) tool returns results as "Found 3 documents: Q2 Budget Proposal, Q2 Budget Forecast, Annual Review". You want the agent to document (4, multi) and doc (24, multi). What return format would best enable these multi-step workflows?',
  '[{"key":"A","text":"URLs that users can click to open the document in their browser."},{"key":"B","text":"Structured data containing document IDs and metadata for each result."},{"key":"C","text":"A JSON array of document titles extracted from the search results."},{"key":"D","text":"More detailed human-readable descriptions including the size and authors."}]'::jsonb,
  ARRAY['B']::text[],
  'Workflow nhiều bước cần các định danh ổn định để tham chiếu tới tài liệu ở các bước tiếp theo.',
  'Agentic Architecture',
  ARRAY['CCA-F', 'Agentic Architecture', 'Agent', 'Workflow']::text[]
),
(
  'cca-f-question-143', 'cca-f', 143,
  'Your agent has access to 50+ specialized API connectors for different external services. As the connector library grew, tool selection accuracy dropped to 58%. You design a search_connectors(description) tool that finds matching connectors, but in testing agents frequently skip searching and call connectors directly (often incorrectly), or search select wrong connectors from the filtered results. How should you design the tool composition pattern to address both issues?',
  '[{"key":"A","text":"Design connectors with built-in compatibility validation that return descriptive errors for mismatched requests."},{"key":"B","text":"Design a find_and_execute(description, params) composite tool that searches and immediately executes the best matching connector."},{"key":"C","text":"Enhance all connector descriptions with detailed usage samples, edge cases, and input requirements. Add few-shot examples showing the correct search-then-use workflow."},{"key":"D","text":"Design search_connectors to dynamically add matched connectors to the agent''s available tools. Connectors start unavailable and persist once discovered."}]'::jsonb,
  ARRAY['D']::text[],
  'Buộc agent phải khám phá connector trước rồi mới có thể sử dụng là cách mạnh nhất để đảm bảo luồng search-then-use.',
  'Evaluation & Bias',
  ARRAY['CCA-F', 'Evaluation & Bias', 'Test']::text[]
),
(
  'cca-f-question-144', 'cca-f', 144,
  'Your publish article tool calls an external CMS API that occasionally returns transient errors (network timeouts, 503s) and non-transient errors (403 permission denied, 422 validation failure). Currently, every error is returned directly to the agent, which leads to the agent retrying non-transient errors and wasting turns on failures that will never succeed. How should you partition error-handling responsibility between the tool implementation and the agent?',
  '[{"key":"A","text":"Handle all errors inside the tool: Implement retries with exponential backoff for every error type, and only surface a failure to the agent after a fixed number of retry attempts have been exhausted."},{"key":"B","text":"Handle transient errors (timeouts, 503s) with automatic retries inside the tool implementation, and surface non-transient errors (permission denied, validation fallures) to the agent with descriptive messages so it can take corrective action."},{"key":"C","text":"Surface all errors to the agent immediately with detailed context, and let the agent decide which errors to retry and how many times-keeping the tool implementation stateless and simple."},{"key":"D","text":"Implement a universal error handler that catches all exceptions and returns a generic \"tool unavailable- try again later\" message, shielding the agent from error complexity."}]'::jsonb,
  ARRAY['B']::text[],
  'Transient errors nên được xử lý trong tool. Non-transient errors cần được đưa cho agent để thực hiện hành động khắc phục phù hợp.',
  'Security & Guardrails',
  ARRAY['CCA-F', 'Security & Guardrails', 'Permission']::text[]
),
(
  'cca-f-question-145', 'cca-f', 145,
  'Your remove_team_member tool uses a dry_run: boolean parameter for previewing impacts before execution. Production monitoring shows the agent bypasses the preview step in 15% of calls by calling with dry_run=false directly. You need to ensure every removal is preceded by a preview that the user explicitly confirms. What is the most reliable approach?',
  '[{"key":"A","text":"Add server-side validation that permits dry_run=false only when a dry_run=true call with identical parameters occurred within the past 60 seconds."},{"key":"B","text":"Replace with two tools: preview_remove_member returns impact details and a single-use confirmation token; execute_remove_member requires that token, binding execution to the specific previewed action."},{"key":"C","text":"Annotate the tool as requiring confirmation and configure the orchestration layer to prompt the user for approval before forwarding any calls to annotated tools."},{"key":"D","text":"Add detailed instructions and few-shot examples to the tool description requiring the agent to always call with dry_run=true first and wait for user confirmation before calling with dry_run=false."}]'::jsonb,
  ARRAY['B']::text[],
  'Token một lần gắn với preview cụ thể giúp ràng buộc hành động thực thi vào một lần xem trước đã được xác nhận.',
  'Evaluation & Bias',
  ARRAY['CCA-F', 'Evaluation & Bias', 'Review', 'Reliab']::text[]
),
(
  'cca-f-question-146', 'cca-f', 146,
  'Your expense reimbursement agent processes employee requests using a process reimbursement tool. Company policy requires that reimbursements above $500 must be approved before funds are disbursed. The agent handles hundreds of requests daily, and you need the threshold enforcement to be tamper-proof regardless of how the agent is prompted ensures the $500 approval threshold cannot be bypassed?',
  '[{"key":"A","text":"The process reimbursement tool accepts an approved by manager parameter. The system prompt instructs the agent to only set this to true after confirming that a manager approved the request. A nightly audit script reviews all reimbursements where approved by manager was set to true."},{"key":"B","text":"Provide two tools: auto reimburse (hard-coded limit of $500) and manager approval. Include detailed system prompt instructions telling the agent to check the amount and use the appropriate tool. Add a Post ToolUse hook that logs which tool was called for auditing."},{"key":"C","text":"The process reimbursement tool accepts amount and details, and internally enforces the threshold; amounts <$500 are auto-disbursed and the tool returns a success confirmation. Amounts >$500 cause the tool to create a pending approval request and return a status indicating manager review is pending."},{"key":"D","text":"Implement the threshold check in a PreToolUse hook that inspects the amount parameter before process reimbursement executes. If the amount exceeds $500, the hook modifies the context to add a requires approval: true flag, which the tool checks before disbursing."}]'::jsonb,
  ARRAY['C']::text[],
  'Chính sách quan trọng phải được thực thi bên trong hệ thống nghiệp vụ thay vì phụ thuộc vào hành vi của model.',
  'Prompt Engineering',
  ARRAY['CCA-F', 'Prompt Engineering', 'Prompt']::text[]
),
(
  'cca-f-question-147', 'cca-f', 147,
  'Your order management system requires tools for three distinct operations: issuing refunds (requires amount and reason), canceling orders (requires reason), and res (requires shipping address). Each operation shares an order id parameter but has different additional requirements. You notice during testing that with your current frequently omits required parameters or includes irrelevant ones. What design change will most effectively improve parameter accuracy?',
  '[{"key":"A","text":"Split into three separate tools (each defining only the parameters required for that specific operation."},{"key":"B","text":"Keep one unified tool with all parameters marked optional, but add few-shot examples in the system prompt showing correct parameter combinations for each operation."},{"key":"C","text":"Keep one unified tool but add JSON Schema if-then-else conditionals to enforce that parameters like amount are required only when the operation type is \"refund\"."},{"key":"D","text":"Keep one unified tool with a nested operation object parameter whose internal structure varies by operation type, documented in the tool description."}]'::jsonb,
  ARRAY['A']::text[],
  'Các tool chuyên biệt với giao diện nhỏ và rõ ràng giúp giảm đáng kể lỗi lựa chọn tham số.',
  'Evaluation & Bias',
  ARRAY['CCA-F', 'Evaluation & Bias', 'Test']::text[]
),
(
  'cca-f-question-148', 'cca-f', 148,
  'Your portfolio value tool returns the total value of a user''s investment portfolio. You''re deciding between returning a structured JSON object with explicit fields versus returning information as a formatted text string. What is the primary advantage of using structured output with defined fields?',
  '[{"key":"A","text":"Structured JSON consumes significantly fewer tokens than natural language, substantially reducing API costs."},{"key":"B","text":"The agent can reliably extract specific values without parsing free form text, reducing errors in subsequent operations."},{"key":"C","text":"Structured JSON is processed deterministically by the model, significantly improving accuracy when extracting values."},{"key":"D","text":"JSON schemas automatically validate that the underlying API returned correct data before the agent processes it."}]'::jsonb,
  ARRAY['B']::text[],
  'Dữ liệu có cấu trúc cho phép agent sử dụng trực tiếp các trường cụ thể mà không phải trích xuất từ văn bản tự do, giúp giảm lỗi và tăng độ tin cậy cho các workflow nhiều bước.',
  'Prompt Engineering',
  ARRAY['CCA-F', 'Prompt Engineering', 'Structured Output']::text[]
),
(
  'cca-f-question-149', 'cca-f', 149,
  'Your scheduling agent uses get_available_slots(date, provider_id) to retrieve open appointment times, then book_appointment(provider_id, slot_time, patient_id) to reserve a slot. tickets show that 15% of booking attempts fall with "slot no longer available" because another user booked the slot between the availability check and the booking call. How should you r these tools?',
  '[{"key":"A","text":"Modify book_appointment to return detailed failure information including currently available alternative slots when the requested slot is unavailable, enabling the agent to retry with a di time."},{"key":"B","text":"Keep both tools but add retry logic to the agent''s system prompt, instructing it to call get_available_slots again and select a different time if booking fails."},{"key":"C","text":"Add a hold_slot(provider_id, slot_time) tool that creates a 60 second temporary reservation, requiring the agent to call it between checking availability and booking."},{"key":"D","text":"Combine both tools into a single find_and_book_appointment that atomically checks availability and books, returning either the confirmed booking or available alternatives."}]'::jsonb,
  ARRAY['D']::text[],
  'Vấn đề là race condition giữa hai thao tác. Gộp kiểm tra và đặt lịch thành một thao tác nguyên tử loại bỏ hoàn toàn cửa sổ xảy ra xung đột.',
  'Agentic Architecture',
  ARRAY['CCA-F', 'Agentic Architecture', 'Agent']::text[]
),
(
  'cca-f-question-150', 'cca-f', 150,
  'Your agent has a log_workout tool that accepts exercise_type (string), value (number), and measurement (string). Production monitoring shows the agent frequently passes mismatched combinations-using measurement: "reps" for cardio exercises like running, or measurement: "miles" for strength exercises like bench press. Your exercises naturally divide into two categories: cardio (measured in time or distance) and strength (measured in reps and sets). 23% of tool calls have invalid combinations. What approach would most effectively reduce these errors?',
  '[{"key":"A","text":"Implement server-side validation returning descriptive errors for invalid combinations, allowing the agent to retry with corrections."},{"key":"B","text":"Add enum constraints on measurement limiting values to \"minutes\", \"miles\", \"reps\", or \"sets\" to prevent arbitrary measurement strings."},{"key":"C","text":"Add explicit examples to the tool description showing valid combinations (e.g., \"For running: use minutes or miles. For push-ups: use reps\") with constraints for each exercise category."},{"key":"D","text":"Split into log_cardio_workout (with duration_minutes or distance_miles parameters) and log_strength_workout (with reps and sets parameters)."}]'::jsonb,
  ARRAY['D']::text[],
  'Tách tool theo miền nghiệp vụ giúp loại bỏ những tổ hợp tham số không hợp lệ ngay từ giao diện tool.',
  'Model Context Protocol',
  ARRAY['CCA-F', 'Model Context Protocol', 'Tool Call']::text[]
),
(
  'cca-f-question-151', 'cca-f', 151,
  'Your MCP server includes archive_file(file_id) and delete_file(file_id) tools. Production logs show the agent calls delete_file when users ask to "remove old backups," policy requires archiving backup files. Both tools currently have minimal descriptions: "Archives a file" and "Deletes a file." Which change most directly improves tool selection?',
  '[{"key":"A","text":"Add a confirmation step that requires users to type \"CONFIRM DELETE\" before delete_file executes."},{"key":"B","text":"Implement server-side validation that rejects delete_file calls for files tagged as backups, returning an error message suggesting archive_file."},{"key":"C","text":"Expand tool descriptions to clarify use cases, adding guidance like \"Do not use for backup files\" to delete_file."},{"key":"D","text":"Add few-shot examples to the system prompt demonstrating that requests involving \"backup\" or \"old\" should use archive_file."}]'::jsonb,
  ARRAY['C']::text[],
  'Mô tả tool là yếu tố quan trọng nhất ảnh hưởng đến việc lựa chọn tool. Làm rõ use case trong mô tả giúp model chọn đúng công cụ.',
  'Model Context Protocol',
  ARRAY['CCA-F', 'Model Context Protocol', 'MCP', 'Server']::text[]
),
(
  'cca-f-question-152', 'cca-f', 152,
  'Your CRM agent''s delete_contact tool handles requests like "delete the duplicate entry for Acme Corp." The database contains similarly named records (e.g., "Acme Corp," "Acme Corporation," "ACME Corp Inc."), and analytics show 8% of deletions are reversed within 24 hours due to misidentified records. Users have also complained that the current multi-step confirmation flow adds too much friction to routine cleanup tasks. Which approach most effectively reduces the error rate while maintaining workflow efficiency?',
  '[{"key":"A","text":"Present matched records with differentiating fields and require single-click confirmation of the intended target before executing deletion."},{"key":"B","text":"Require users to supply the exact record ID from the CRM Interface rather than using natural language references to contact names."},{"key":"C","text":"Deploy automated duplicate detection that identifies and merges probable duplicates, removing the need for manual deletion requests."},{"key":"D","text":"Implement soft-delete with a 30-day recovery window so users can undo mistakes without slowing down the deletion workflow."}]'::jsonb,
  ARRAY['A']::text[],
  'Cho người dùng xác nhận đúng đối tượng cần thao tác là cách trực tiếp nhất để giảm nhầm lẫn mà vẫn giữ quy trình ngắn gọn.',
  'Agentic Architecture',
  ARRAY['CCA-F', 'Agentic Architecture', 'Agent', 'Workflow']::text[]
),
(
  'cca-f-question-153', 'cca-f', 153,
  'The system processes product reviews using tool use with a defined schema: rating (integer 1-5), pros (string array), cons (string array), and overall_sentiment (enum: positive, ne Testing reveals two issues with brief or ambiguous reviews (-20% of the dataset): (1) for reviews like "Great product!", Claude fabricates specific pros and cons rather than Indica Information isn''t explicitly stated, and (2) for sarcastic reviews like "Well that was.. interesting", Claude picks sentiment arbitrarily since there''s no option for ambiguous cases. W modification best addresses both issues?',
  '[{"key":"A","text":"Make pros and cons optional fields, and add \"neutral\" and \"unclear\" to the sentiment enum"},{"key":"B","text":"Allow empty arrays for pros/cons as valid output, and add \"unclear\" ss the sentiment enum"},{"key":"C","text":"Add an extraction_confidence field (0.0-1.0) for each value, and filter outputs where any confidence falls below a threshold."},{"key":"D","text":"Allow null values for pros/cons, and add \"unclear\" to the sentiment earum."}]'::jsonb,
  ARRAY['B']::text[],
  'Mảng rỗng cho phép thể hiện ''không có thông tin'' mà không phải bịa dữ liệu, còn unclear giúp biểu diễn các trường hợp không xác định được sentiment.',
  'Evaluation & Bias',
  ARRAY['CCA-F', 'Evaluation & Bias', 'Test', 'Review']::text[]
),
(
  'cca-f-question-154', 'cca-f', 154,
  'Your invoice extraction uses tool use with strict JSON schemas. JSON syntax errors never occur, but 12% of extractions fail semantic validation--for example, line Item amounts don''t extracted total, or vendor IDs don''t match valid formats. These failures currently route to manual review. What''s the most effective approach to reduce manual review volume while m accuracy?',
  '[{"key":"A","text":"Retry the extraction up to 3 times when validation fallis, accepting the first result that passes validation."},{"key":"B","text":"Implement post-processing logic that automatically corrects common amors, such as recalculating totais from line items when sums don''t match."},{"key":"C","text":"When validation falls, make a follow-up request with the document, extraction, and validation errors for model correction."},{"key":"D","text":"Add stricter schema constraints with detailed field descriptions to prevent the model from generating invalid values initially."}]'::jsonb,
  ARRAY['C']::text[],
  'Validation errors cung cấp phản hồi cụ thể giúp model sửa thông tin không chính xác thay vì thực hiện một extraction hoàn toàn mới.',
  'Evaluation & Bias',
  ARRAY['CCA-F', 'Evaluation & Bias', 'Review']::text[]
),
(
  'cca-f-question-155', 'cca-f', 155,
  'Your team is extracting structured data from 50,000 legacy legal contracts under a two-week deadline. Initial testing with 500 sample documents shows 82% pass JSON schema first attempt, while the remaining 18% fall due to diverse issues—missing required fields, malformed dates, and incorrectly identified parties. Documents that fail typically need refinements targeting their specific failure modes before extraction succeeds. Which batch processing strategy is the most cost-efficient while still meeting the deadline?',
  '[{"key":"A","text":"Split documents into 10 sequential batches of 5,000 each, analysing results and refining prompts between batches to improve extraction quality progressively."},{"key":"B","text":"Submit all 50,000 documents via batch API, then submit failed extractions in successive batches— refining prompts between each batch—until all documents pass validation."},{"key":"C","text":"Use the real-time API for all 50,000 documents since the batch API''s 24-hour processing window creates unacceptable deadline risk."},{"key":"D","text":"Process 2,000 sample documents via real time API to identify failure patterns and refine prompts, then batch process all 50,000 with the optimized prompts."}]'::jsonb,
  ARRAY['B']::text[],
  'Batch API giúp giảm chi phí lớn nhất. Chỉ các trường hợp thất bại mới cần xử lý lại bằng các prompt đã tối ưu.',
  'Evaluation & Bias',
  ARRAY['CCA-F', 'Evaluation & Bias', 'Test']::text[]
),
(
  'cca-f-question-156', 'cca-f', 156,
  'Your system must extract event details from calendar invitations and output JSON that strictly conforms to a schema with fields for title, date, time, location, and attendees. Downstream reject any malformed or non- conformant JSON. What approach provides the most reliable schema compliance?',
  '[{"key":"A","text":"Define a tool with your target schema as input parameters and have Claude call it with the extracted data."},{"key":"B","text":"Pre-fill Claude''s response with an opening brace to force JSON output, then complete and parse the response."},{"key":"C","text":"Append instructions like \"Output only valid JSON matching the schema exactly\" and implement retry logic to re-prompt when JSON parsing fails."},{"key":"D","text":"Include detailed JSON formatting instructions and the target schema in your prompt, then parse Claude''s text response as JSON."}]'::jsonb,
  ARRAY['A']::text[],
  'Tool use với schema là cơ chế đáng tin cậy nhất để đảm bảo dữ liệu đầu ra tuân thủ cấu trúc mong muốn.',
  'Evaluation & Bias',
  ARRAY['CCA-F', 'Evaluation & Bias', 'Reliab']::text[]
),
(
  'cca-f-question-157', 'cca-f', 157,
  'Your extraction system uses tool_use with a JSON schema containing 12 fields and detailed descriptions, totaling approximately 2,500 tokens for the complete tool definition. Processing documents under 150K tokens yields 98% accuracy. For documents between 175-190K tokens, accuracy drops to 71%, with information from the final third consistently missed. The model''s context window is 200K tokens. What is the most likely cause?',
  '[{"key":"A","text":"Tool definitions consume input context tokens. Combined with system prompts and document content, the total approaches the context limit, degrading end-of-document processing."},{"key":"B","text":"Very long documents exceed the model''s effective attention span regardless of context limits, causing accuracy degradation for content farther from the prompt instructions."},{"key":"C","text":"The model distributes attention proportionally across input length, causing fields mentioned only once near the document''s end to receive insufficient processing focus."},{"key":"D","text":"Schemas exceeding 8-10 fields increase decision complexity during parameter generation, reducing extraction accuracy independent of document length."}]'::jsonb,
  ARRAY['A']::text[],
  'Tool definitions là một phần của context. Khi tổng lượng token tiến sát giới hạn cửa sổ ngữ cảnh, chất lượng xử lý ở cuối tài liệu thường suy giảm.',
  'Context Management',
  ARRAY['CCA-F', 'Context Management', 'Context Window', 'Context', 'Token']::text[]
),
(
  'cca-f-question-158', 'cca-f', 158,
  'The extraction pipeline receives documents of varying types—some are invoices, others are contracts, and some are receipts. You''ve defined separate extraction tools, each with its own schema tailored to the document type. During testing, you observe that with tool_choice: "auto", Claude sometimes returns conversational text instead of calling an extraction tool, causing downstream parsing failures. You need guaranteed structured output without knowing the document type in advance. What''s the most effective approach?',
  '[{"key":"A","text":"Consolidate all document types into a single unified-schema extraction tool and force that tool."},{"key":"B","text":"Keep tool_choice: \"auto\" with system prompt instructions requiring tool use."},{"key":"C","text":"Set tool_choice: \"any\" with all extraction tools defined."},{"key":"D","text":"Add a preliminary classification call, then make a second call with tool_choice forced to the identified extraction tool."}]'::jsonb,
  ARRAY['C']::text[],
  'tool_choice=''any'' buộc Claude phải sử dụng một tool thay vì trả về văn bản tự do, trong khi vẫn cho phép lựa chọn tool phù hợp.',
  'Prompt Engineering',
  ARRAY['CCA-F', 'Prompt Engineering', 'Structured Output']::text[]
),
(
  'cca-f-question-159', 'cca-f', 159,
  'Monitoring shows 12% of extractions fall Pydantic validation with specific errors like "expected float for quantity, got ''2 to 3". Retrying these requests without modification produces failures. What''s the most effective approach to recover from these validation failures?',
  '[{"key":"A","text":"Set temperature to 0 to eliminate output variability and ensure consistent formatting"},{"key":"B","text":"Send a follow-up request including the validation error, asking the model to correct its output"},{"key":"C","text":"Pre-process source documents to standardize problematic formats before sending them for extraction"},{"key":"D","text":"Implement a secondary pipeline using a larger model tier to reprocess documents that fail validation"}]'::jsonb,
  ARRAY['B']::text[],
  'Thông tin validation error cung cấp phản hồi cụ thể giúp model sửa dữ liệu đã trích xuất thay vì thử lại mù quáng.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Architecture & Best Practices']::text[]
),
(
  'cca-f-question-160', 'cca-f', 160,
  'After three months of weekly sessions, your conversation history has grown to 85,000 tokens. When users ask "What did we conclude about the theme of isolation?", the assistant provides generic literary analysis rather than referencing the group''s specific insights from earlier sessions. Discussions often build on previous meetings'' conclusions, so maintaining narrative context is important. What''s the most effective approach?',
  '[{"key":"A","text":"Add structured XML tags to mark significant discussion conclusions throughout the conversation history."},{"key":"B","text":"Use semantic embedding to index the full conversation history and retrieve only relevant past exchanges for each user query, replacing the linear conversation format with retrieved segments."},{"key":"C","text":"Implement rolling window truncation to keep only the most recent 25,000 tokens."},{"key":"D","text":"Implement progressive summarization where older conversation blocks are replaced with concise summaries that explicitly extract key conclusions, decisions, and recurring themes, keeping recent exchanges verbatim."}]'::jsonb,
  ARRAY['D']::text[],
  'Progressive summarization bảo toàn kiến thức tích lũy trong khi vẫn kiểm soát kích thước context.',
  'Context Management',
  ARRAY['CCA-F', 'Context Management', 'Context', 'Token', 'Conversation']::text[]
),
(
  'cca-f-question-161', 'cca-f', 161,
  'After a 40-minute session helping plan a dinner party, the conversation has grown to 78,000 tokens. The history includes: (1) the user mentioning a guest has a severe shellfish allergy, (2) measurements for scaling recipes to 8 servings, (3) the user''s clarification that "room temperature butter" means 68°F in their kitchen, and (4) general back-and-forth about meal timing and presentation. You need to implement context management before the window limit is reached. What approach best balances information preservation with token reduction?',
  '[{"key":"A","text":"Summarize the entire conversation history into a concise summary capturing main topics discussed, then append new messages going forward."},{"key":"B","text":"Implement a sliding window retaining only the most recent 20,000 tokens relying on users to re-state important information when relevant."},{"key":"C","text":"Store the full conversation externally and use semantic search to retrieve relevant portions for each turn, loading only matching segments into context."},{"key":"D","text":"Extract critical structured data (allergies, serving counts, user-defined terms) into a compact reference section, summarize general discussion, and retain recent exchanges verbatim."}]'::jsonb,
  ARRAY['D']::text[],
  'Kết hợp dữ liệu có cấu trúc cho các thông tin quan trọng với tóm tắt cho phần hội thoại chung sẽ tối ưu cả độ chính xác lẫn kích thước context.',
  'Context Management',
  ARRAY['CCA-F', 'Context Management', 'Context', 'Token', 'Conversation']::text[]
),
(
  'cca-f-question-162', 'cca-f', 162,
  'You''re Implementing a feature where users refine their playlist preferences through multiple conversation turns. After deploying, you notice Claude''s responses don''t reflect what us earlier in the same conversation— for example, a user says they love jazz, but two messages later Claude asks what genres they enjoy. What is the most likely cause?',
  '[{"key":"A","text":"The model''s context window has been exceeded by the conversation length"},{"key":"B","text":"The Claude API requires a session_id parameter that you haven''t configured"},{"key":"C","text":"Claude requires a vector database connection to maintain conversation memory"},{"key":"D","text":"Your application isn''t including prior messages in the messages array"}]'::jsonb,
  ARRAY['D']::text[],
  'Claude API là stateless. Mọi request phải chứa lịch sử hội thoại cần thiết nếu muốn model nhớ các trao đổi trước đó.',
  'Context Management',
  ARRAY['CCA-F', 'Context Management', 'Conversation']::text[]
),
(
  'cca-f-question-163', 'cca-f', 163,
  'Your fitness coaching assistant uses a system prompt with detailed conditional logic: "If the user mentions being a beginner, provide step-by-step form instructions. If they use term ''progressive overload'' or ''superset'', respond concisely. If they ask about injury history, always recommend consulting a physician." During evaluation, you find the assistant correct explicit expertise declarations but struggles when users don''t clearly state their level-often defaulting to overly detailed responses regardless of contextual cues like technical te Which change to the system prompt would most directly address this failure to pick up on implicit expertise signals?',
  '[{"key":"A","text":"Replace most conditionals with a general principle: \"Adapt explanation depth to match user expertise, mirroring their terminology.\" Keep only the safety-critical conditional abou consultations."},{"key":"B","text":"Add more conditional branches to cover additional expertise signals, such as \"If user mentions specific rep ranges or asks about periodization, treat as advanced.\""},{"key":"C","text":"Implement a pre-conversation intake that asks users to rate their experience level, then inject that rating into the system prompt as context for all subsequent responses."},{"key":"D","text":"Add an explicit instruction for the model to ask a clarifying question about experience level whenever the user''s expertise isn''t immediately clear from their first message."}]'::jsonb,
  ARRAY['A']::text[],
  'Các nguyên tắc tổng quát giúp model nhận diện linh hoạt tín hiệu chuyên môn thay vì phụ thuộc vào danh sách điều kiện cố định.',
  'Prompt Engineering',
  ARRAY['CCA-F', 'Prompt Engineering', 'Prompt']::text[]
),
(
  'cca-f-question-164', 'cca-f', 164,
  'During initial testing, you notice that Claude doesn''t seem to remember vocabulary words from earlier in the conversation. When a student asks "Can you quiz me on those words?", responds as if no words have been discussed. What is the most likely explanation?',
  '[{"key":"A","text":"Your system prompt needs explicit instructions telling Claude to remember information from earlier turns."},{"key":"B","text":"You''re not including prior messages in each API request—the stateless API doesn''t retain conversation history."},{"key":"C","text":"You need to enable conversation persistence by passing a session ID parameter with each API call."},{"key":"D","text":"The model''s context window has filled up, causing earlier conversation content to be dropped."}]'::jsonb,
  ARRAY['B']::text[],
  'Claude không lưu trạng thái giữa các request. Lịch sử hội thoại cần được gửi lại trong mỗi lần gọi API.',
  'Evaluation & Bias',
  ARRAY['CCA-F', 'Evaluation & Bias', 'Test']::text[]
),
(
  'cca-f-question-165', 'cca-f', 165,
  'Your home renovation planning assistant uses a system prompt defining an expert contractor persona with specific guidelines: always ask about budget, suggest alternatives at multiple price points, and confirm timeline requirements. During testing, responses follow these guidelines for turns 1-4, but by turn 7, the assistant gives generic advice without asking about budget or timeline. The conversation totals only 2,500 tokens. What is the most likely cause?',
  '[{"key":"A","text":"System prompts only establish initial behavior and don''t persist across all turns."},{"key":"B","text":"The system prompt is only sent with the first API request."},{"key":"C","text":"The assistant''s accumulated responses are diluting the system prompt''s influence."},{"key":"D","text":"The model''s attention on system prompt instructions naturally weakens as turns accumulate."}]'::jsonb,
  ARRAY['C']::text[],
  'Trong các hội thoại dài, nội dung tích lũy từ nhiều lượt trao đổi có thể làm giảm ảnh hưởng tương đối của chỉ dẫn ban đầu.',
  'Context Management',
  ARRAY['CCA-F', 'Context Management', 'Token', 'Conversation']::text[]
),
(
  'cca-f-question-166', 'cca-f', 166,
  'Users report that during extended conversations, the AI loses track of specific topics, examples, and preferences they mentioned earlier in the session. Your current implementation uses a sliding window that keeps only the most recent 25 message pairs to stay within context limits. What''s the most effective approach to maintain awareness of earlier conversation content while managing context size?',
  '[{"key":"A","text":"Replace the sliding window with a hybrid approach: summarize older messages while keeping recent messages verbatim."},{"key":"B","text":"Implement vector similarity search over the full conversation history, retrieving relevant past messages for each user query."},{"key":"C","text":"Increase the window size to 50 message pairs to retain more conversation history before truncation."},{"key":"D","text":"Add a separate API call each turn to summarize messages being dropped, prepending this running summary to the conversation."}]'::jsonb,
  ARRAY['A']::text[],
  'Tóm tắt các phần cũ giúp giữ lại thông tin quan trọng trong khi vẫn dành đủ context cho các trao đổi gần đây.',
  'Context Management',
  ARRAY['CCA-F', 'Context Management', 'Context', 'Conversation']::text[]
),
(
  'cca-f-question-167', 'cca-f', 167,
  'Users frequently send ambiguous requests like "book a venue for the party" without specifying date, guest count, or budget. Your evaluation shows the assistant asks an average of 4 questions before taking any action, causing 35% of users to abandon mid-conversation. However, when you reduce questions, users sometimes receive recommendations that don''t preferences. What''s the most effective approach to improve this trade-off?',
  '[{"key":"A","text":"Implement a structured intake form that collects all required parameters (date, guest count, budget, venue type) upfront before the assistant begins providing any recommendation"},{"key":"B","text":"Configure the assistant to proceed with reasonable defaults (medium sized venue, next weekend, moderate budget) without explicitly stating these assumptions, allowing users to corrections if results don''t match expectations"},{"key":"C","text":"Instruct the assistant to state explicit assumptions based on conversation status proceed with recommendations while inviting corrections, and reserve clarifying questions only Irreversible actions like confirming bookings."},{"key":"D","text":"Configure the assistant to consolidate all clarifying questions into a single compound question (e.g., \"What date, guest count, and budget are you considering?\") to reduce the total"}]'::jsonb,
  ARRAY['C']::text[],
  'Tiến hành dựa trên các giả định minh bạch giúp giảm số lần hỏi mà vẫn cho phép người dùng dễ dàng điều chỉnh khi giả định không chính xác.',
  'Evaluation & Bias',
  ARRAY['CCA-F', 'Evaluation & Bias', 'Evaluat']::text[]
),
(
  'cca-f-question-168', 'cca-f', 168,
  'During QA testing, you notice that Claude follows your system prompt guidelines consistently in the first 10- 15 turns, but by turn 25-30, responses begin deviating—using informal tone when formality was specified, occasionally skipping required formatting, or providing information types the guidelines restrict. Conversation length is well within context limits (typically 30,000 tokens out of 200,000 available). What''s the most effective approach to maintain consistent behavior throughout extended conversations?',
  '[{"key":"A","text":"Insert user-role messages that reinforce critical guidelines at natural conversation breakpoints, especially before complex requests."},{"key":"B","text":"Implement post-response validation that regenerates each response until it conforms to the specified guidelines."},{"key":"C","text":"Automatically start a new conversation after 20 turns, passing a summary of the prior context to maintain continuity."},{"key":"D","text":"Move behavioral guidelines from the system prompt into the first user message."}]'::jsonb,
  ARRAY['A']::text[],
  'Việc nhắc lại các hướng dẫn trọng yếu ở những thời điểm thích hợp giúp duy trì sự chú ý của model đối với các quy tắc quan trọng trong các cuộc hội thoại kéo dài.',
  'Context Management',
  ARRAY['CCA-F', 'Context Management', 'Context', 'Token', 'Conversation']::text[]
),
(
  'cca-f-question-169', 'cca-f', 169,
  'Performance analysis reveals your context is composed of accumulated RAG results from all previous queries, which is crowding out conversation history and causing coherence degradation after 15+ turns. Which approach best addresses this issue?',
  '[{"key":"A","text":"Implement semantic deduplication to identify and remove redundant information across the accumulated RAG results and conversation turns"},{"key":"B","text":"Implement a sliding window for RAG results from the last 2-3 queries while preserving conversation history"},{"key":"C","text":"Shift context budget to favor RAG results while reducing conversation history allocation"},{"key":"D","text":"Compress all RAG results into a consolidated summary document that updates incrementally after each retrieval"}]'::jsonb,
  ARRAY['B']::text[],
  'Các kết quả RAG thường có tính tạm thời hơn lịch sử hội thoại. Giữ lại các kết quả retrieval gần nhất giúp giảm context mà vẫn duy trì tính liên tục của cuộc trò chuyện.',
  'Context Management',
  ARRAY['CCA-F', 'Context Management', 'Context', 'Conversation']::text[]
),
(
  'cca-f-question-170', 'cca-f', 170,
  'Your music discovery assistant should consistently maintain an enthusiastic tone, explain its reasoning for each recommendation, and ask clarifying questions to better understand user preferences. You want this behavior to persist reliably across all user interactions. Where should you define these behavioral guidelines?',
  '[{"key":"A","text":"In the first assistant message, instructing Claude to follow these guidelines going forward"},{"key":"B","text":"Prepended to each user message before sending to the API"},{"key":"C","text":"In the system prompt"},{"key":"D","text":"In environmental variables that your application passes to the API client"}]'::jsonb,
  ARRAY['C']::text[],
  'System prompt là nơi phù hợp nhất để định nghĩa các hành vi và nguyên tắc nền tảng áp dụng xuyên suốt cuộc hội thoại.',
  'Evaluation & Bias',
  ARRAY['CCA-F', 'Evaluation & Bias', 'Reliab']::text[]
),
(
  'cca-f-question-171', 'cca-f', 171,
  'During a conversation about order tracking, your external system receives a webhook indicating the user''s package has shipped. The user is actively chatting and will likely send a follow-up message soon. You want the assistant to naturally incorporate this status change in its next response. What''s the most effective approach?',
  '[{"key":"A","text":"Immediately send an API request with the update as a synthetic user message, generating an unsolicited assistant response."},{"key":"B","text":"Append the status update as a prefix to the next user message before calling the API."},{"key":"C","text":"Configure the assistant to call a get_order_status tool at the start of every response."},{"key":"D","text":"Add the current shipping status to the system prompt before the next API call."}]'::jsonb,
  ARRAY['D']::text[],
  'Thông tin trạng thái mới là ngữ cảnh hệ thống. Đưa nó vào system prompt giúp model sử dụng tự nhiên trong phản hồi tiếp theo.',
  'Context Management',
  ARRAY['CCA-F', 'Context Management', 'Conversation']::text[]
),
(
  'cca-f-question-172', 'cca-f', 172,
  'A new user''s first message is "Set up my focus music," This could mean configure preferences, create a playlist, or play music immediately. Your system supports all three actions. What''s the effective approach?',
  '[{"key":"A","text":"Create a new \"Focus\" playlist with curated tracks and notify the user it''s ready."},{"key":"B","text":"Ask one clarifying question about action type: play now or configure for later"},{"key":"C","text":"Play popular focus tracks Immediately and let the user redirect if needed"},{"key":"D","text":"Start preference configuration by asking about genres, temps, and artists they prefer for focus."}]'::jsonb,
  ARRAY['B']::text[],
  'Một câu hỏi làm rõ duy nhất giúp giải quyết sự mơ hồ cốt lõi với chi phí hội thoại thấp nhất.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Architecture & Best Practices']::text[]
),
(
  'cca-f-question-173', 'cca-f', 173,
  'Users report that responses feel repetitive across turns—each message begins with phrases like "Certainly!" or "I''d be happy to help!" even deep into conversations. You want responses to feel more natural, without these repetitive openers. What''s the most effective approach?',
  '[{"key":"A","text":"Implement post-processing to detect and strip common greeting phrases from response beginnings"},{"key":"B","text":"Add system prompt instructions specifying phrases to avoid, such as \"Never begin responses with ''Certainly'' or similar affirmations\""},{"key":"C","text":"Lower the temperature parameter to make response openings more deterministic and less variable"},{"key":"D","text":"Append a partial assistant message with a direct response opening that the model will continue from"}]'::jsonb,
  ARRAY['D']::text[],
  'Assistant prefill là cách mạnh nhất để điều hướng cách bắt đầu phản hồi mà không phải hậu xử lý.',
  'Context Management',
  ARRAY['CCA-F', 'Context Management', 'Conversation']::text[]
),
(
  'cca-f-question-174', 'cca-f', 174,
  'Your update_user_profile tool accepts a user_id (required) and an optional fields_to_update object. In testing, Claude frequently omits user_id or passes incorrectly structured data. What is most critical for helping Claude understand what parameter values to provide?',
  '[{"key":"A","text":"Clear parameter descriptions explaining expected format, such as \"user_id : UUID of the user to update (required)\""},{"key":"B","text":"Verbose parameter names encoding format hints, such as user_id_string_uuid_format"},{"key":"C","text":"Strict JSON Schema type constraints marking user_id as required and defining fields_to_update as an object type"},{"key":"D","text":"Detailed error responses explaining why invalid parameter values were rejected"}]'::jsonb,
  ARRAY['A']::text[],
  'Mô tả tham số rõ ràng có tác động trực tiếp nhất tới khả năng điền đúng giá trị đầu vào.',
  'Evaluation & Bias',
  ARRAY['CCA-F', 'Evaluation & Bias', 'Test']::text[]
),
(
  'cca-f-question-175', 'cca-f', 175,
  'Production monitoring shows your search_catalog tool fails 12% of the time: 8% are network timeouts that succeed when immediately retried, while 4% are query syntax errors from malformed user-provided filters that never succeed regardless of retry attempts. Currently, both error types are returned to the agent identically, causing it to waste turns retrying syntax errors and telling users to "try again later" for timeouts. How should you modify the tool''s error handling?',
  '[{"key":"A","text":"Apply exponential backoff retry logic to all errors uniformly, returning a generic \"service temporarily unavailable\" message after max retries are exhausted."},{"key":"B","text":"Return all errors with a retryable boolean flag and error type details."},{"key":"C","text":"Implement automatic retry with backoff for network timeouts inside the tool; return syntax errors immediately with parameter validation details."},{"key":"D","text":"Add few-shot examples to your system prompt demonstrating how to distinguish network errors from syntax errors and handle each case appropriately."}]'::jsonb,
  ARRAY['C']::text[],
  'Transient errors nên được xử lý trong tool, còn lỗi do tham số đầu vào cần được trả lại ngay để người dùng hoặc agent sửa.',
  'Agentic Architecture',
  ARRAY['CCA-F', 'Agentic Architecture', 'Agent']::text[]
),
(
  'cca-f-question-176', 'cca-f', 176,
  'Your document extraction tool uses ML models to extract invoice fields (vendor, amount, date). The models return confidence scores (0.0-1.0) for each extracted field. In production, you observe: (1) the agent proceeds with low-confidence extractions that are incorrect 23% of the time, and (2) the agent requests unnecessary human review for 31% of extractions that were actually correct. How should you restructure the tool''s output?',
  '[{"key":"A","text":"Return fields with their raw confidence scores and add detailed few-shot examples to your system prompt demonstrating how to interpret different confidence ranges and when to request human review."},{"key":"B","text":"Compute an aggregate extraction quality score across all fields and return it alongside the extracted values. Include a text summary describing the overall extraction reliability."},{"key":"C","text":"Return fields with confidence scores, plus a requires_review boolean computed using your tested confidence thresholds, along with a review_reasons array explaining which fields triggered review."},{"key":"D","text":"Return fields organized into verified and needs_verification objects based on confidence thresholds."}]'::jsonb,
  ARRAY['C']::text[],
  'Việc đóng gói logic review thành dữ liệu có cấu trúc giảm gánh nặng cho agent và tăng tính nhất quán.',
  'Security & Guardrails',
  ARRAY['CCA-F', 'Security & Guardrails', 'Human']::text[]
),
(
  'cca-f-question-177', 'cca-f', 177,
  'Your agent includes an update_game_score tool that accepts game_date (string), home_team (string), and away_team (string) parameters. Production logs reveal recurring issues: the agent uses team nicknames instead of official names, applies inconsistent date formats, and selects the wrong game when teams have rematches in the same season. What tool interface change would effectively prevent these errors?',
  '[{"key":"A","text":"Add a season parameter to disambiguate rematches, and add a confirm_before_update flag that returns the resolved game details for the agent to verify before the score is committed."},{"key":"B","text":"Add detailed examples to the tool description showing the required date format and complete list of official team names."},{"key":"C","text":"Add enum constraints listing valid team names for both team parameters, and add a regex pattern enforcing ISO 8601 format for the date parameter."},{"key":"D","text":"Replace the three parameters with a single game_id parameter and a separate search_games lookup tool that returns matching game IDs."}]'::jsonb,
  ARRAY['D']::text[],
  'Định danh duy nhất (game_id) loại bỏ toàn bộ các lỗi liên quan đến tên đội, ngày tháng và trùng trận đấu.',
  'Agentic Architecture',
  ARRAY['CCA-F', 'Agentic Architecture', 'Agent']::text[]
),
(
  'cca-f-question-178', 'cca-f', 178,
  'Your resource allocation tool returns a simple acknowledgment message after provisioning is requested. Users frequently approve allocations and immediately ask "how much did that cost?" or "which project was that?" - indicating they confirmed without understanding the request. What tool design change would most effectively address this?',
  '[{"key":"A","text":"Add a user_acknowledged: boolean parameter that must be set true, with instructions for the agent to only set it after the user explicitly confirms they reviewed the details"},{"key":"B","text":"Implement a 60-second hold before execution completes, allowing users time to review pending allocations and cancel if needed"},{"key":"C","text":"Add a detail_level parameter with options \"minimal\" or \"comprehensive\" that controls how much context the agent presents in confirmations"},{"key":"D","text":"Return structured data including cost estimate, target project, resource specifications, and impact summary in the tool response"}]'::jsonb,
  ARRAY['D']::text[],
  'Trả về thông tin đầy đủ giúp người dùng hiểu chính xác hành động vừa được thực hiện.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Architecture & Best Practices']::text[]
),
(
  'cca-f-question-179', 'cca-f', 179,
  'Your conversation history includes two types of content: persistent story elements (character backgrounds, plot structure, world rules) that must remain consistent throughout, and extensive brainstorming discussion that''s mostly ephemeral. After 40+ turns, you''re hitting context limits and users report the assistant "forgets" established character traits, breaking narrative consistency. Which approach best ensures persistent story elements remain available to the model while reclaiming context space?',
  '[{"key":"A","text":"Separate persistent story elements into a retained \"story bible\" section at context start, applying trimming or summarization only to brainstorming discussion."},{"key":"B","text":"Store all history in a vector database and retrieve semantically similar passages for each new message, replacing conversation history with retrieved chunks."},{"key":"C","text":"Apply a sliding-window approach keeping only the most recent 25 turns, relying on the model to infer earlier context from recent discussion flow."},{"key":"D","text":"Summarize the entire conversation history into a condensed synopsis every 20 turns, replacing the full history to free up tokens."}]'::jsonb,
  ARRAY['A']::text[],
  'Thông tin nền tảng cần được duy trì riêng thay vì bị ảnh hưởng bởi các cơ chế cắt giảm context.',
  'Context Management',
  ARRAY['CCA-F', 'Context Management', 'Context', 'Conversation']::text[]
),
(
  'cca-f-question-180', 'cca-f', 180,
  'Your conversational assistant frequently generates multiple clarifying questions when users make ambiguous requests. When a user asks "Can you help me with the report?", the assistant responds: "I''d be happy to help! Could you tell me: 1) Which report? 2) What kind of help—drafting, reviewing, or formatting? 3) What''s your deadline?" User analytics show a 40% conversation abandonment rate after these multi-question responses. What''s the most effective way to reduce friction while appropriately handling ambiguity?',
  '[{"key":"A","text":"Limit the assistant to one clarifying question per turn, using conversation history to accumulate answers over multiple exchanges rather than requesting everything upfront."},{"key":"B","text":"Modify the system prompt to instruct the assistant to make reasonable assumptions from available context, state those assumptions explicitly, and offer to adjust if the interpretation is wrong."},{"key":"C","text":"Add a preprocessing step using a smaller model to classify request ambiguity on a 1-5 scale, routing high-ambiguity requests to a clarification dialog and low-ambiguity requests directly to the assistant."},{"key":"D","text":"Create a lookup table of common request patterns with predefined default interpretations, having the assistant respond with those defaults without stating the assumptions made."}]'::jsonb,
  ARRAY['B']::text[],
  'Đây là cách cân bằng tốt giữa tiến độ hội thoại và độ chính xác của việc hiểu ý định.',
  'Evaluation & Bias',
  ARRAY['CCA-F', 'Evaluation & Bias', 'Review']::text[]
),
(
  'cca-f-question-181', 'cca-f', 181,
  'Users frequently refine their search criteria mid-conversation. You notice a pattern: when users say things like "Actually, let''s raise the budget to $650K" or "I''d prefer a condo now instead of a house," the assistant sometimes continues referencing the original preferences in later responses—even though the updates are clearly present in the conversation history. Context usage is only at 35% capacity. Which solution most reliably ensures the model uses the current preferences?',
  '[{"key":"A","text":"Maintain a structured state object with current preferences, update it on changes, and include it in each request."},{"key":"B","text":"Implement conversation pruning to remove turns containing outdated preferences, ensuring only current ones remain in context."},{"key":"C","text":"Include few-shot examples showing the assistant correctly acknowledging and applying preference changes in responses."},{"key":"D","text":"Add system prompt instructions emphasizing that the model should always prioritize the most recently stated preferences over earlier ones."}]'::jsonb,
  ARRAY['A']::text[],
  'Trạng thái có cấu trúc giúp xác định rõ nguồn chân lý hiện tại thay vì phụ thuộc vào việc model suy luận từ lịch sử hội thoại.',
  'Context Management',
  ARRAY['CCA-F', 'Context Management', 'Context', 'Conversation']::text[]
),
(
  'cca-f-question-182', 'cca-f', 182,
  'Your conversational AI tutor has a 2,800-token system prompt containing teaching methodology, persona guidelines, and detailed written instructions for adapting explanations to different proficiency levels. User testing reveals that in conversations exceeding 12 turns (approximately 4,000 tokens of conversation history), the assistant increasingly ignores the proficiency-adaptation guidelines, defaulting to intermediate-level explanations regardless of the learner''s stated level. What''s the most effective approach to ensure consistent adherence to these guidelines throughout extended conversations?',
  '[{"key":"A","text":"Inject a condensed reminder of the proficiency requirements into the conversation as a system message every 4-5 turns."},{"key":"B","text":"Replace the verbose proficiency guidelines with few-shot examples demonstrating appropriate responses at each proficiency level, showing concrete differences in vocabulary, complexity, and explanation depth."},{"key":"C","text":"Restructure the system prompt to place the proficiency-adaptation rules in a clearly-marked final section immediately before the conversation history begins."},{"key":"D","text":"After each assistant response, make a separate API call to evaluate whether the difficulty level matched the learner''s profile, regenerating responses that don''t align."}]'::jsonb,
  ARRAY['B']::text[],
  'Few-shot examples thường hiệu quả hơn các mô tả dài vì chúng cung cấp hành vi mong muốn dưới dạng mẫu cụ thể.',
  'Context Management',
  ARRAY['CCA-F', 'Context Management', 'Token', 'Conversation']::text[]
),
(
  'cca-f-question-183', 'cca-f', 183,
  'After deploying an updated system prompt that improves response quality, users with multi-session conversations spanning several weeks report that the assistant now contradicts its earlier statements and has a noticeably different communication style. New users don''t experience these issues. What''s the best approach to resolve this?',
  '[{"key":"A","text":"Regenerate summaries of existing conversations using the new prompt and replace the stored histories to align past context with current behavior."},{"key":"B","text":"Add a transition message when sessions resume explaining that the assistant has been updated and behavior may differ."},{"key":"C","text":"Version system prompts and associate each conversation with the prompt version under which it started, applying updates only to new conversations."},{"key":"D","text":"Add instructions to the new system prompt directing the assistant to maintain consistency with any prior statements in the conversation history."}]'::jsonb,
  ARRAY['C']::text[],
  'Việc version hóa prompt giúp tránh mâu thuẫn giữa ngữ cảnh cũ và hành vi mới trong các cuộc hội thoại dài hạn.',
  'Prompt Engineering',
  ARRAY['CCA-F', 'Prompt Engineering', 'Prompt']::text[]
),
(
  'cca-f-question-184', 'cca-f', 184,
  'Evaluation shows 94% extraction accuracy on short meeting transcripts (<30 minutes) but only 68% on longer transcripts (>60 minutes) where discussions meander and key information is scattered throughout. Transcripts of both lengths fit within the model''s context window. What pattern most effectively improves accuracy on complex, lengthy documents?',
  '[{"key":"A","text":"Add few-shot examples demonstrating correct extraction from lengthy meetings with scattered Information."},{"key":"B","text":"Split lengthy transcripts Into chunks, extract from each chunk separately, then merge and deduplicate the results."},{"key":"C","text":"Upgrade to a more capable model tier for the extraction task,"},{"key":"D","text":"Add a pre-extraction step where the model summarizes key discussions and conclusions before performing structured extraction."}]'::jsonb,
  ARRAY['B']::text[],
  'Chunking giúp mỗi lần extraction tập trung hơn và giảm nguy cơ bỏ sót thông tin phân tán trong tài liệu dài.',
  'Context Management',
  ARRAY['CCA-F', 'Context Management', 'Context Window', 'Context']::text[]
),
(
  'cca-f-question-185', 'cca-f', 185,
  'Your system has been running for 3 weeks and human reviewers have corrected 847 extractions. Analysis reveals a recurring pattern: when recipes use informal measurements like "a handful" or "a splash," the model either invents specific amounts or leaves fields empty—accounting for 23% of all corrections. How should you use this feedback to improve extraction accuracy?',
  '[{"key":"A","text":"Update your JSON schema to add a \"measurement_type\" enum field (precise/informal)."},{"key":"B","text":"Add few-shot examples to your prompt demonstrating correct handling of informal measurements— extracting them verbatim rather than converting or omitting them."},{"key":"C","text":"Implement a post-processing layer that uses pattern matching to detect informal measurement phrases in source text and automatically populate values when the extraction is empty."},{"key":"D","text":"Fine-tune the model on the 847 corrected extractions."}]'::jsonb,
  ARRAY['B']::text[],
  'Few-shot trực tiếp dạy model cách xử lý đúng các trường hợp lỗi thường gặp nhất.',
  'Security & Guardrails',
  ARRAY['CCA-F', 'Security & Guardrails', 'Human']::text[]
),
(
  'cca-f-question-186', 'cca-f', 186,
  'The system routes documents with extraction confidence below 85% to human review. A quarterly audit reveals that 12% of high-confidence extractions (>85%) also contain errors—cases where the model finds plausible-but-incorrect values. Error sources vary: comparison tables showing competitor specs, appendices referencing different product variants, and ambiguous phrasing the model misinterprets. You need a sustainable strategy to catch these high-confidence errors and measure whether improvements reduce the error rate over time. What approach is most effective?',
  '[{"key":"A","text":"Implement heuristic rules that flag documents containing comparison tables or appendices for review regardless of confidence score."},{"key":"B","text":"Implement stratified random sampling reviewing a fixed percentage of high-confidence extractions weekly, enabling error rate measurement and novel pattern detection."},{"key":"C","text":"Add a verification pass that re-extracts from each high-confidence document, flagging cases where the two extraction attempts produce different results."},{"key":"D","text":"Lower the confidence threshold from 85% to 70%, routing a larger volume of extractions to human review."}]'::jsonb,
  ARRAY['B']::text[],
  'Lấy mẫu kiểm tra ngẫu nhiên có phân tầng cho phép đo lường thực tế chất lượng hệ thống và phát hiện mẫu lỗi mới.',
  'Security & Guardrails',
  ARRAY['CCA-F', 'Security & Guardrails', 'Human']::text[]
),
(
  'cca-f-question-187', 'cca-f', 187,
  'Your research assistant helps users analyze academic papers over extended conversations. User testing reveals a recurring issue: after conversations exceed 60K tokens, users ask follow-up questions requiring precise numerical details from papers discussed earlier—sample sizes, exact p-values, specific inclusion criteria. Your current approach summarizes paper discussions after 8 turns to stay within context limits. Users report that responses to these precision-dependent questions are often hedged or inaccurate. What''s the most effective architectural change?',
  '[{"key":"A","text":"Implement retrieval that re-injects relevant paper sections when the user''s question suggests they need specific numerical details."},{"key":"B","text":"Maintain a structured database of key facts extracted from each paper (sample sizes, statistics, methods) and retrieve relevant entries into context when precision-dependent questions are detected."},{"key":"C","text":"Keep source text from methodology and results sections in context permanently, while summarizing only the conversational discussion and interpretation portions."},{"key":"D","text":"Use a separate Claude call with explicit instructions to generate higher-fidelity summaries that preserve all numerical details and statistical values."}]'::jsonb,
  ARRAY['B']::text[],
  'Thông tin định lượng quan trọng nên được lưu ở dạng dữ liệu có cấu trúc thay vì chỉ tồn tại trong các bản tóm tắt ngôn ngữ tự nhiên.',
  'Context Management',
  ARRAY['CCA-F', 'Context Management', 'Context', 'Token', 'Conversation']::text[]
),
(
  'cca-f-question-188', 'cca-f', 188,
  'A security audit requires updating your authentication library from v2 to v3. The migration guide documents breaking changes: authenticate() now returns a Promise instead of accepting a callback, the User type has restructured fields, and three deprecated methods were removed. Grep shows the library is imported in 45 files across several modules. What''s the most effective approach?',
  '[{"key":"A","text":"Paste the migration guide''s breaking changes into your prompt and use direct execution to update all usages across the 45 files."},{"key":"B","text":"Enter plan mode to explore library usage across modules, map affected code paths, then create a migration strategy before implementing."},{"key":"C","text":"Update the dependency version, run the test suite, and use Claude Code to fix each failure as it appears."},{"key":"D","text":"Create a custom slash command encapsulating the migration transformations, then execute it against each file without prior codebase exploration."}]'::jsonb,
  ARRAY['B']::text[],
  'Một thay đổi lớn xuyên nhiều module cần được khảo sát và lập kế hoạch trước khi thực hiện.',
  'Security & Guardrails',
  ARRAY['CCA-F', 'Security & Guardrails', 'Security']::text[]
),
(
  'cca-f-question-189', 'cca-f', 189,
  'You need to add a date validation check ensuring event dates are in the future. This requires adding a conditional statement to one existing function in a single file. What is the most appropriate approach?',
  '[{"key":"A","text":"Enter plan mode to analyze how the validation might impact other parts of the reservation flow"},{"key":"B","text":"Start with extended thinking mode enabled to ensure thorough reasoning about the validation logic"},{"key":"C","text":"Use direct execution to make the change"},{"key":"D","text":"Enter plan mode first to create a detailed implementation strategy before making the change"}]'::jsonb,
  ARRAY['C']::text[],
  'Đây là thay đổi nhỏ, cục bộ và rõ ràng nên không cần plan mode.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Architecture & Best Practices']::text[]
),
(
  'cca-f-question-190', 'cca-f', 190,
  'Your team''s CLAUDE.md includes a rule: "Use 4-space indentation and always run Prettier formatting." Despite this, code reviews reveal that roughly 30% of files Claude Code generates use inconsistent formatting — sometimes 2-space indentation, sometimes missing trailing commas. Adding emphasis ("IMPORTANT: You MUST use Prettier formatting") reduces violations to about 15%, but doesn''t eliminate them. What is the most effective way to ensure all generated code is consistently formatted?',
  '[{"key":"A","text":"Extract the formatting rules into a dedicated skill that Claude loads automatically when generating code, with more detailed examples of correct formatting."},{"key":"B","text":"Add a Stop hook with a prompt-based check that evaluates whether generated code follows formatting standards and prompts Claude to fix violations."},{"key":"C","text":"Configure a Post ToolUse hook with an Edit|Write matcher that automatically runs Prettier on each file Claude modifies."},{"key":"D","text":"Split the formatting rules into path-scoped .claude/rules/ files that load when Claude works on matching file types."}]'::jsonb,
  ARRAY['C']::text[],
  'Thực thi tự động bằng hook đáng tin cậy hơn là chỉ dựa vào việc model nhớ và tuân thủ quy tắc.',
  'Claude Code CLI',
  ARRAY['CCA-F', 'Claude Code CLI', 'Claude Code', 'Claude.Md']::text[]
),
(
  'cca-f-question-191', 'cca-f', 191,
  'You''ve asked Claude Code to build a PDF report generation feature. The initial implementation queries the database correctly, but the output has formatting issues: table columns are too narrow causing content truncation, dates display without proper formatting, and page break handling is incorrect. You''ve noticed these issues interact— changing column widths affects how dates render, and page breaks depend on content height. What''s the most effective approach for iterating toward a working solution?',
  '[{"key":"A","text":"Address the column width issue first with specific measurements, verify it works, then fix date formatting within the corrected columns, then adjust page breaks— testing after each change."},{"key":"B","text":"Provide all three issues in a single detailed message with exact specifications for each, allowing Claude to address them together in one update."},{"key":"C","text":"Show Claude an example of a correctly formatted report and ask it to match that output, rather than listing the specific technical issues."},{"key":"D","text":"Start fresh with a detailed prompt specifying all formatting requirements upfront."}]'::jsonb,
  ARRAY['A']::text[],
  'Khi các vấn đề có ảnh hưởng lẫn nhau, cách tiếp cận lặp từng bước và kiểm chứng sau mỗi thay đổi giúp xác định nguyên nhân và kiểm soát rủi ro tốt nhất.',
  'Claude Code CLI',
  ARRAY['CCA-F', 'Claude Code CLI', 'Claude Code']::text[]
),
(
  'cca-f-question-192', 'cca-f', 192,
  'You''re implementing a caching layer for API responses to speed up the /products endpoint. You have a rough idea—Redis with a 5-minute TTL—but you''re new to production caching and aren''t sure what other considerations a robust implementation requires. What''s the most effective way to start your iterative workflow?',
  '[{"key":"A","text":"Ask Claude to interview you about the caching requirements before implementing, surfacing considerations like invalidation strategies, cache layers, consistency guarantees, and failure modes."},{"key":"B","text":"Use plan mode to analyze the current/products endpoint implementation, then provide your caching requirements once Claude explains how the existing code is structured."},{"key":"C","text":"Start with a minimal request: \"Add Redis caching to/products with 5-minute TTL.\" Add features and fix issues through follow-up prompts as problems surface during testing."},{"key":"D","text":"Write a specification with your known requirements and \"TBD\" markers for uncertain areas, having Claude propose solutions for each TBD as it implements."}]'::jsonb,
  ARRAY['A']::text[],
  'Đối với các miền kỹ thuật chưa quen thuộc, việc khám phá yêu cầu và các trade-off trước khi triển khai giúp tránh bỏ sót các vấn đề quan trọng.',
  'Agentic Architecture',
  ARRAY['CCA-F', 'Agentic Architecture', 'Workflow']::text[]
),
(
  'cca-f-question-193', 'cca-f', 193,
  'You''re implementing a complex graph traversal algorithm with specific performance requirements and edge cases to handle (disconnected nodes, cycles, weighted edges). You want to structure your workflow for efficient iterative refinement with Claude. What approach will most effectively enable progressive improvement across multiple iterations?',
  '[{"key":"A","text":"Write a test suite covering expected behavior, edge cases, and performance requirements before implementation. Ask Claude to write code that passes the tests, then iterate by sharing test failures with each refinement request."},{"key":"B","text":"Provide Claude with a detailed natural language specification of the algorithm, including all requirements and edge cases. Review each output manually and provide descriptive feedback on what behavior needs to change."},{"key":"C","text":"Provide Claude with a reference implementation from documentation, then ask it to rewrite the code to match your codebase style and add the required edge case handling, comparing outputs against the reference."},{"key":"D","text":"Have Claude extensively research the algorithm and create a detailed implementation plan using extended thinking, then implement the complete solution based on that plan."}]'::jsonb,
  ARRAY['A']::text[],
  'Test-driven iteration cung cấp phản hồi khách quan và rõ ràng cho mỗi vòng cải tiến.',
  'Agentic Architecture',
  ARRAY['CCA-F', 'Agentic Architecture', 'Workflow']::text[]
),
(
  'cca-f-question-194', 'cca-f', 194,
  'Your team is configuring MCP servers in Claude Code. You want to add a shared venue lookup server that all team members should have access to, and you personally want to add an experimental music playlist server that only you are testing. Which configuration approach correctly applies MCP server scopes?',
  '[{"key":"A","text":"Add venue server to .mcp.json and playlist server to ~/.claude.json"},{"key":"B","text":"Add both servers to the project-level .mcp.json file"},{"key":"C","text":"Add venue server to ~/.claude.json and playlist server to .mcp.json"},{"key":"D","text":"Add both servers to your local ~/.claude.json"}]'::jsonb,
  ARRAY['A']::text[],
  'Project-level dành cho tài nguyên dùng chung của nhóm, user-level dành cho cấu hình cá nhân.',
  'Model Context Protocol',
  ARRAY['CCA-F', 'Model Context Protocol', 'MCP', 'Server']::text[]
),
(
  'cca-f-question-195', 'cca-f', 195,
  'Your infrastructure-as-code repository includes Terraform modules (/terraform/), Kubernetes manifests (/kubernetes/), and CI/CD pipeline scripts (/pipelines/). Each requires different conventions, but your single root CLAUDE.md has grown to 500+ lines. When developers work on Kubernetes files, Terraform-specific rules load into context unnecessarily, consuming tokens. What is the best approach to reorganize so only relevant guidance loads when editing specific file types?',
  '[{"key":"A","text":"Restructure the root CLAUDE.md into clearly labeled sections with headers (e.g., \"## Terraform Conventions\"), improving organization and readability."},{"key":"B","text":"Split content into subdirectory CLAUDE.md files (/terraform/CLAUDE.md, /kubernetes/CLAUDE.md), so Claude loads directory-specific guidance."},{"key":"C","text":"Keep the root CLAUDE.md and use @path/to/import syntax to modularly include tool-specific guidance files from separate documents."},{"key":"D","text":"Create files in .claude/rules/ with YAML frontmatter path-scoping (e.g., paths: [\"terraform/**/*\"]), loading rules only when editing matching files."}]'::jsonb,
  ARRAY['D']::text[],
  'Path-scoped rules chỉ được tải khi chỉnh sửa các file phù hợp, tiết kiệm context nhất.',
  'Context Management',
  ARRAY['CCA-F', 'Context Management', 'Context', 'Token']::text[]
),
(
  'cca-f-question-196', 'cca-f', 196,
  'Your team frequently migrates React components to Vue. You''ve written a step-by-step workflow for Claude Code to follow during each migration, and you want every developer on the team to invoke it by typing /migrate-component. The workflow should stay in sync as the team iterates on it. Where should you place the skill file?',
  '[{"key":"A","text":"In ~/.claude/skills/migrate-component/SKILL.md on each developer''s machine"},{"key":"B","text":"In the project''s .claude/settings.json using a skillOverrides entry to register and define the workflow"},{"key":"C","text":"In .claude/skills/migrate-component/SKILL.md at the project root, committed to version control"},{"key":"D","text":"As a detailed instruction block in the project''s root CLAUDE.md file"}]'::jsonb,
  ARRAY['C']::text[],
  'Skill đặt trong project giúp mọi thành viên dùng chung và đồng bộ qua version control.',
  'Claude Code CLI',
  ARRAY['CCA-F', 'Claude Code CLI', 'Claude Code']::text[]
),
(
  'cca-f-question-197', 'cca-f', 197,
  'You''re implementing a new payment processing module that must follow your project''s established patterns for database transactions, error handling, and audit logging. You''ve identified three existing modules that exemplify these patterns: db_utils.py, error_handlers.py, and audit_logger.py. This is a one-off integration task—these patterns are well-documented in your team wiki and don''t need additional project-level documentation. What''s the most effective approach?',
  '[{"key":"A","text":"Describe the patterns from the three modules in natural language in your prompt, explaining the transaction handling approach, error format, and logging conventions Claude should follow."},{"key":"B","text":"Use @references to include the three modules directly in your prompt, giving Claude concrete code examples of the patterns to follow."},{"key":"C","text":"Ask Claude to explore your codebase to find and understand the transaction, error handling, and logging patterns before generating the new module."},{"key":"D","text":"Add documentation of each pattern to your CLAUDE.md file, establishing them as project conventions that Claude will apply automatically."}]'::jsonb,
  ARRAY['B']::text[],
  'Cung cấp trực tiếp mã nguồn mẫu đáng tin cậy hơn mô tả bằng lời và không cần cập nhật quy tắc dự án.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Architecture & Best Practices']::text[]
),
(
  'cca-f-question-198', 'cca-f', 198,
  'You''ve asked Claude to write a data migration script, but the initial output doesn''t correctly handle records with null values in required fields. What''s the most effective way to iterate toward a working solution?',
  '[{"key":"A","text":"Provide a test case with example input containing null values and the expected output, then ask Claude to fix it."},{"key":"B","text":"Manually edit the generated code to fix the null handling, then continue working with Claude on other parts."},{"key":"C","text":"Describe the null value problem in detail and ask Claude to regenerate the entire script with improved edge case handling."},{"key":"D","text":"Add \"think harder about edge cases\" to your prompt and request a complete rewrite of the migration logic."}]'::jsonb,
  ARRAY['A']::text[],
  'Ví dụ cụ thể cùng expected output là phản hồi chính xác nhất cho vòng lặp cải tiến.',
  'Claude Architecture & Best Practices',
  ARRAY['CCA-F', 'Claude Architecture & Best Practices']::text[]
),
(
  'cca-f-question-199', 'cca-f', 199,
  'You''ve documented API error handling conventions in a CLAUDE.md file at your project root, specifying that endpoint handlers should use a custom ApiError class. After several sessions, you notice Claude Code sometimes follows these conventions and sometimes uses generic try/catch blocks with string messages. The inconsistency appears random across different coding sessions. What''s the most efficient first diagnostic step?',
  '[{"key":"A","text":"Add more detailed code examples to your CLAUDE.md showing the exact ApiError usage pattern for different endpoint types."},{"key":"B","text":"Run /memory to check which memory files are loaded and verify your CLAUDE.md is included."},{"key":"C","text":"Search for conflicting instructions in ~/.claude/CLAUDE.md or ~/.claude/rules/ that might override your project conventions."},{"key":"D","text":"Create path-specific rules in claude/rules/handlers.md with YAML frontmatter scoping the error handling instructions to your API handler files."}]'::jsonb,
  ARRAY['B']::text[],
  'Trước khi thay đổi cấu hình, cần xác minh rằng file hướng dẫn thực sự đang được nạp.',
  'Claude Code CLI',
  ARRAY['CCA-F', 'Claude Code CLI', 'Claude Code', 'Claude.Md']::text[]
),
(
  'cca-f-question-200', 'cca-f', 200,
  'Your monorepo contains shared coding standards in /docs/standards/security-rules.md (for services handling user data), testing-patterns.md (for all packages), and api-conventions.md (for API-facing services). Your 15 packages are organized by feature domain (/packages/auth/, /packages/billing/, /packages/notifications/, etc.) without naming conventions indicating which handle user data or expose APIs. Package maintainers are expected to configure their own local development settings, as they understand their package''s domain requirements. Currently, all package CLAUDE.md files duplicate all three standards, applying irrelevant guidance. What''s the most effective approach?',
  '[{"key":"A","text":"Create claude/rules/ files for each standard with YAML frontmatter paths listing every package directory where that standard should apply."},{"key":"B","text":"Create a shared-standards.nd that uses @imports to combine all three standards, then have each package''s CLAUDE.md import that combined file."},{"key":"C","text":"Put all standards in the root CLAUDE.md with override instructions like \"ignore security-rules.md when working in packages that don''t handle user data.\""},{"key":"D","text":"Use @imports in each package''s CLAUDE.md to reference only the specific standard files relevant to that package, based on the maintainer''s domain knowledge."}]'::jsonb,
  ARRAY['D']::text[],
  'Cho phép từng package chỉ tải đúng những tiêu chuẩn cần thiết.',
  'Security & Guardrails',
  ARRAY['CCA-F', 'Security & Guardrails', 'Security']::text[]
),
(
  'cca-f-question-201', 'cca-f', 201,
  'The system needs to extract candidate information (name, contact details, skills, work experience, education) from uploaded resumes. The extracted data must strictly conform to a predefined JSON schema, as missing required fields or incorrect data types will cause downstream validation failures. What is the most reliable approach to ensure Claude''s output consistently matches the schema?',
  '[{"key":"A","text":"Define a tool with an input schema matching your required JSON structure and extract the data from Claude''s tool_use response."},{"key":"B","text":"Include detailed JSON formatting instructions and a template example in the system prompt, asking Claude to output only valid JSON."},{"key":"C","text":"Parse Claude''s text response with regex patterns to extract JSON objects, using retry logic for malformed responses."},{"key":"D","text":"Make two separate API calls—first extracting information as text, then asking Claude to format that text as JSON."}]'::jsonb,
  ARRAY['A']::text[],
  'Tool use với schema là cơ chế đáng tin cậy nhất để bảo đảm cấu trúc đầu ra.',
  'Evaluation & Bias',
  ARRAY['CCA-F', 'Evaluation & Bias', 'Reliab']::text[]
),
(
  'cca-f-question-202', 'cca-f', 202,
  'After deploying automated code review, developers report that approximately 35% of flagged findings are false positives falling into consistent patterns: style suggestion contradicting team conventions, security warnings for patterns safe in your deployment context, and performance suggestions that would degrade your specific use ca. You want to reduce false positives while maintaining the ability to catch genuine issues. Which approach best enables the model to generalize its judgment to novel co patterns it hasn''t seen before?',
  '[{"key":"A","text":"Include few-shot examples in your prompt showing annotated code snippets that distinguish acceptable patterns from genuine issues in each category."},{"key":"B","text":"Implement post-processing that uses keyword matching to filter out findings containing terms like \"convention,\" \"context-dependent,\" or \"trade-off.\""},{"key":"C","text":"Add instructions to your system prompt to \"be conservative,\" \"only flag definite issues,\" and \"consider that some patterns may be intentional.\""},{"key":"D","text":"Create a comprehensive written specification of all patterns that should not be flagged, then include this full documentation in the system prompt."}]'::jsonb,
  ARRAY['A']::text[],
  'Few-shot cho phép mô hình học nguyên tắc phân loại thay vì chỉ ghi nhớ quy tắc.',
  'Security & Guardrails',
  ARRAY['CCA-F', 'Security & Guardrails', 'Security']::text[]
),
(
  'cca-f-question-203', 'cca-f', 203,
  'After expanding the agent''s MCP tools with delivery-specific capabilities (check_delivery_status, contact_driver, issue_credit, apply_promo_code, update_delivery_address, reschedule_delivery), the total tool count has grown from 4 to 10. Your evaluation suite shows tool selection accuracy has dropped to 71%. Log analysis reveals the majority of errors involve the agent selecting between semantically overlapping tools- calling issue_credit when process_refund is correct, and calling check_delivery_status when lookup_order already returns the needed data. Which approach structurally eliminates the semantic overlaps that are being logged as the error source?',
  '[{"key":"A","text":"Split the tools across two sub-agents - a \"financial resolution\" agent with process_refund, issue_credit, and apply_promo_code, and a \"delivery\" agent with the remaining delivery tools - with a coordinator routing between them."},{"key":"B","text":"Add few-shot examples to the system prompt demonstrating correct selection for each ambiguous tool pair, such as showing when issue_credit or process_refund is appropriate."},{"key":"C","text":"Consolidate semantically overlapping tools-merge issue_credit and process_refund into a single resolve_compensation tool with an optional include_tracking flag."},{"key":"D","text":"Enable the tool search tool with defer_loading on the six new tools, keeping the original four always loaded, so the agent dynamically calls it when needed."}]'::jsonb,
  ARRAY['C']::text[],
  'Giảm số lượng tool có chức năng tương tự sẽ loại bỏ nguyên nhân gốc rễ của lỗi chọn tool.',
  'Model Context Protocol',
  ARRAY['CCA-F', 'Model Context Protocol', 'MCP']::text[]
),
(
  'cca-f-question-204', 'cca-f', 204,
  'Anthropic''s tool use documentation states: "Write instructive error messages. Instead of generic errors like ''failed'', include what went wrong and what Claude should try next." A billing dispute agent uses lookup_order, which catches all exceptions and returns a tool_result with is_error: true and the message "execution failed". Monitoring shows two failure modes: the agent retries the identical call until hitting the turn limit, or it immediately calls escalate_to_human without trying alternative tools. Which change follows the documented recommendation and gives Claude the information it needs to select the correct recovery action for each error type?',
  '[{"key":"A","text":"Implement retry logic with exponential backoff inside each tool implementation so transient errors are resolved transparently within the tool before any failure result is surfaced to Claude in the agentic loop."},{"key":"B","text":"Return error-type-specific messages with is_error: true, e.g., \"order not found-try get_customer to search by phone\" for data errors and \"Database timeout (transient)-retry should succeed\" for infrastructure errors."},{"key":"C","text":"Remove is_error: true and return the error details as normal tool content, so Claude reasons about the response as data rather than treating it as a flagged failure condition that biases retry behavior."},{"key":"D","text":"Add an error classification step in the agentic loop that intercepts tool errors before Claude sees them, tags each as \"retry\" \"try_alternative,\" or \"escalate,\" and adds that recommendation to the tool result."}]'::jsonb,
  ARRAY['B']::text[],
  'Thông điệp lỗi giàu ngữ cảnh giúp agent hiểu nguyên nhân và chọn hành động khôi phục chính xác.',
  'Security & Guardrails',
  ARRAY['CCA-F', 'Security & Guardrails', 'Escalat', 'Human']::text[]
),
(
  'cca-f-question-205', 'cca-f', 205,
  'Your code review prompts include both implementation changes and the corresponding test file, but the LLM''s review comments fail to point out untested code paths. Analysis reveals the model correctly flags functions that have no tests at all, but fails to identify when conditional branches or error-handling paths within tested functions that have no tests at all, but fails to identify when conditional branches or error-handling paths within tested functio lack coverage. What''s the most effective way to improve detection of branch-level coverage gaps without overcomplicating the pipeline?',
  '[{"key":"A","text":"Implement a multi-pass pipeline where separate LLM calls first extract all conditional branches, then cross-reference each against test assertions in a second pass."},{"key":"B","text":"Include few-shot examples showing code with an uncovered branch paired with the review comment identifying the specific missing test case."},{"key":"C","text":"Add explicit instructions directing the model to enumerate each conditional branch and exception path, then verify each has a corresponding test assertion."},{"key":"D","text":"Restructure the prompt to interleave implementation and tests, presenting each function followed immediately by its test cases"}]'::jsonb,
  ARRAY['B']::text[],
  'Few-shot examples giúp mô hình học được mẫu nhận diện khoảng trống coverage ở mức nhánh xử lý.',
  'Evaluation & Bias',
  ARRAY['CCA-F', 'Evaluation & Bias', 'Test', 'Review']::text[]
),
(
  'cca-f-question-206', 'cca-f', 206,
  'Your automated reviewer uses a single prompt covering security issues, API design, and business logic correctness. Your evaluation suite shows strong recall findings (82%) but poor recall for business logic edge cases in quiz scoring (34%). When you add few-shot examples of logic bugs to the prompt, logic recall is 41% but API design recall drops to 68%. How should you address this trade-off to improve detection across both categories?',
  '[{"key":"A","text":"Split the review into separate focused prompts - one for security and API design, another for business logic - each with dedicated examples, then combine findings before posting."},{"key":"B","text":"Upgrade to a more capable model tier, since its stronger reasoning will handle both concern types in a single prompt and eliminate the recall trade-off."},{"key":"C","text":"Provide the full repository as context instead of just the changed files and surrounding code, giving the model deeper visibility into business logic."},{"key":"D","text":"Replace the few-shot examples with a detailed checklist of specific logic edge cases to verify, such as division-by-zero in score calculation or grading thresholds."}]'::jsonb,
  ARRAY['A']::text[],
  'Các prompt chuyên biệt giúp tối ưu hiệu quả trên từng loại lỗi mà không cạnh tranh context với nhau.',
  'Prompt Engineering',
  ARRAY['CCA-F', 'Prompt Engineering', 'Prompt', 'Few-Shot']::text[]
),
(
  'cca-f-question-207', 'cca-f', 207,
  'Production logs show that when the agent handles complex billing disputes requiring 6+ tool calls, it sometimes exhausts its max_turns limit after gathering data and before completing resolution or escalating. The team''s goal is to guarantee that every customer interaction ends with either a completed resolution or a human escalation, regardless of how the agent loop terminates. Which approach achieves this guarantee?',
  '[{"key":"A","text":"Add orchestration-layer code that checks the agent''s outcome after each loop termination - if the loop ended without a completed resolution or escalation, programmatically call escalate_to_human with the accumulated conversation context and tool results."},{"key":"B","text":"Implement a pre-tool-use hook that counts tool invocations and terminates the loop with an automatic escalation once the agent reaches 80% of its remaining actions."},{"key":"C","text":"Add system prompt instructions telling the agent to call escalate_to_human with a summary of its findings whenever it determines it cannot resolve the dispute."},{"key":"D","text":"Split the workflow into two sequential agent invocations — a first agent gathers information via get_customer and lookup_order, then the second agent uses that data and handles process_refund or escalate_to_human, each with separate turn budgets."}]'::jsonb,
  ARRAY['A']::text[],
  'Cơ chế orchestration bên ngoài model mới có thể đảm bảo được yêu cầu này một cách tuyệt đối.',
  'Security & Guardrails',
  ARRAY['CCA-F', 'Security & Guardrails', 'Escalat', 'Human']::text[]
),
(
  'cca-f-question-208', 'cca-f', 208,
  'Production monitoring shows the research phase takes longer than expected. Analysis reveals the coordinator invokes the web search subagent, then invokes the document analysis subagent and waits again. These tasks are independent—neither requires the other''s output. What is the most effective way to run these subagents concurrently?',
  '[{"key":"A","text":"Switch both subagents to use a Haiku-tier model instead of Sonnet to reduce their individual execution time."},{"key":"B","text":"Create an async orchestration layer outside the agent that spawns parallel threads, each running a separate coordinator."},{"key":"C","text":"Structure the coordinator to emit both Task tool calls (for web search and document analysis) in a single response message."},{"key":"D","text":"Add detailed instructions to the coordinator''s system prompt explaining the performance benefits of parallel execution at the same time."}]'::jsonb,
  ARRAY['C']::text[],
  'Nhiều Task tool call trong cùng một lượt cho phép các subagent chạy đồng thời.',
  'Agentic Architecture',
  ARRAY['CCA-F', 'Agentic Architecture', 'Agent', 'Coordinator']::text[]
),
(
  'cca-f-question-209', 'cca-f', 209,
  'Your automated review calls the Claude API for each PR, using tool_use with a report_findings tool that returns a JSON array of finding objects (each with file_path, line_number, severity, category, and description). During testing on a large PR touching 30+ files, the response hits the max_tokens limit and the output is truncated mid-JSON, causing your pipeline''s parser to fail. What is the most effective way to handle this?',
  '[{"key":"A","text":"Increase max_tokens to the model''s maximum and instruct Claude to keep finding descriptions under 50 words each."},{"key":"B","text":"Switch from tool_use to prompting Claude to return findings as a markdown list."},{"key":"C","text":"Split the review into multiple API calls that each analyze a subset of the changed files, then merge the resulting findings arrays."},{"key":"D","text":"Add retry logic that detects truncated JSON and re-sends the request with instructions to report only critical and high severity findings."}]'::jsonb,
  ARRAY['C']::text[],
  'Phân chia workload giúp tránh vượt giới hạn token và vẫn giữ dữ liệu ở định dạng có cấu trúc.',
  'Evaluation & Bias',
  ARRAY['CCA-F', 'Evaluation & Bias', 'Test', 'Review']::text[]
),
(
  'cca-f-question-210', 'cca-f', 210,
  'You are setting up a non-interactive automated code review pipeline using Claude Code. You want Claude to analyze a pulled Git diff (git diff) against the main branch and apply a custom set of code review instructions. However, you notice that when you run the pipeline, Claude only looks at the raw diff text itself and completely stops using its file-reading or code navigation tools. As a result, it fails to inspect the broader codebase repository context, which is critical because the diff modifies a core function called by many other external modules. Which change to the CLI invocation will cause Claude to read related files in the repository while still successfully applying your custom review instructions?',
  '[{"key":"A","text":"Replace --system-prompt with --append-system-prompt so your review instructions are added to Claude Code''s default prompt instead of overwriting the built-in guidance for using file-reading and code navigation tools."},{"key":"B","text":"Keep --system-prompt and add --allowedTools \"Read, Glob, Grep\" so that the non-interactive mode permits file system tools that it otherwise disables."},{"key":"C","text":"Stop piping the diff via stdin and instead embed the diff contents inside the prompt string, so Claude Code treats the invocation as an agentic session rather than a stream-processing one."},{"key":"D","text":"Remove --system-prompt entirely and place the review instructions in a CLAUDE.md file at the repo root, since --system-prompt is incompatible with tool use under -p."}]'::jsonb,
  ARRAY['A']::text[],
  'Việc ghi đè hoàn toàn system prompt có thể làm mất các chỉ dẫn mặc định về cách sử dụng tool.',
  'Evaluation & Bias',
  ARRAY['CCA-F', 'Evaluation & Bias', 'Review']::text[]
),
(
  'cca-f-question-211', 'cca-f', 211,
  'A developer uses Claude Code to refactor a function during their development session. Before committing, they ask the same Claude session to review the code for issues. Later, a separate automated CI review catches several bugs that the same-session review missed. What best explains this discrepancy?',
  '[{"key":"A","text":"The CI environment has access to the full codebase context while the local session only sees the current file"},{"key":"B","text":"The CI review uses a more specific prompt tailored for catching bugs, while the developer''s request was too general"},{"key":"C","text":"Claude retains context about its prior reasoning in the session, making it less likely to question its own decisions"},{"key":"D","text":"The extended session length caused the context window to fill with conversation history, leaving less room for thorough analysis"}]'::jsonb,
  ARRAY['C']::text[],
  'Self-review trong cùng một session dễ bị ảnh hưởng bởi các giả định và kết luận đã hình thành trước đó.',
  'Evaluation & Bias',
  ARRAY['CCA-F', 'Evaluation & Bias', 'Review']::text[]
),
(
  'cca-f-question-212', 'cca-f', 212,
  'An engineer sees an unfamiliar error message "SYNC_CONFLICT: entity version mismatch detected" in production logs but doesn''t know which of the 12 services in the codebase generates it. They ask the agent to help locate the source code. What exploration approach will most efficiently find the responsible code?',
  '[{"key":"A","text":"Use Grep to search for distinctive text from the error message (like \"SYNC_CONFLICT\" or \"entity version mismatch\"), then Read the matching files to understand context."},{"key":"B","text":"Use Glob to find files in directories commonly associated with error handling (such as errors/, exceptions/, or handlers/) across services, then Read each matching file."},{"key":"C","text":"Use Grep to find all files that import the project''s error handling module, then Read those files to locate custom error definitions."},{"key":"D","text":"Read the project''s README and service configuration files to understand the architecture, then systematically Read source files in service directory."}]'::jsonb,
  ARRAY['A']::text[],
  'Tìm kiếm theo chuỗi lỗi cụ thể là cách trực tiếp và hiệu quả nhất.',
  'Agentic Architecture',
  ARRAY['CCA-F', 'Agentic Architecture', 'Agent']::text[]
),
(
  'cca-f-question-213', 'cca-f', 213,
  'You''ve configured your Claude agent with three MCP servers: one for git operations, one for Jira ticket management, and one for documentation search. When a user asks the agent to "create a branch for JIRA- 123 and add documentation links to the ticket," how does the agent access tools across these servers?',
  '[{"key":"A","text":"The agent queries each server sequentially to determine which handles each tool, routing calls based on tool name prefixes."},{"key":"B","text":"Tools from all configured MCP servers are discovered at connection time and available simultaneously to the agent."},{"key":"C","text":"You must specify which MCP server to use for each turn, and the agent can only access one server''s tools at a time."},{"key":"D","text":"The agent automatically selects the most relevant server based on the request and loads only that server''s tools."}]'::jsonb,
  ARRAY['B']::text[],
  'Các tool từ các MCP server đã kết nối cùng tồn tại trong không gian công cụ của agent.',
  'Model Context Protocol',
  ARRAY['CCA-F', 'Model Context Protocol', 'MCP', 'Server']::text[]
);

DO $$
DECLARE
  actual_count integer;
BEGIN
  SELECT count(*) INTO actual_count FROM questions WHERE cert_id = 'cca-f';
  IF actual_count <> 213 THEN
    RAISE EXCEPTION 'CCA-F rebuild failed: expected % questions, found %', 213, actual_count;
  END IF;
END;
$$;

COMMIT;

SELECT cert_id, count(*) AS question_count, min(question_number) AS first_question, max(question_number) AS last_question
FROM questions WHERE cert_id = 'cca-f' GROUP BY cert_id;
