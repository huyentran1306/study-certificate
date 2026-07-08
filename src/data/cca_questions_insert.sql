-- SQL DATABASE SCRIPT TO IMPORT QUESTIONS FOR CLAUDE CERTIFIED ARCHITECT - FOUNDATIONS (CCA-F)
-- Cert ID: cca-f
-- Total questions: 60
-- Target Table: questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags)

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca1', 'cca-f', 1,
  'Your structured data extraction system processes real estate listing documents. When listings describe property size with informal terms like "spacious" or "generous open-plan living area" instead of exact measurements, the model frequently fabricates numeric square footage values. Which approach would most effectively reduce these hallucinated values while preserving extraction accuracy for documents that contain explicit measurements?',
  '[{"key":"A","text":"Making the square_footage field required in the schema and adding a post-extraction validation step that rejects non-numeric values"},{"key":"B","text":"Removing the square_footage field from the extraction schema entirely to eliminate the possibility of fabrication"},{"key":"C","text":"Providing few-shot examples that demonstrate returning null for square footage when documents use informal descriptions, alongside examples that correctly extract explicit numeric measurements"},{"key":"D","text":"Adding the instruction \"only extract values you are certain about\" to the system prompt"}]'::jsonb,
  ARRAY['C']::text[],
  'Cung cấp các ví dụ few-shot chỉ ra việc trả về ''null'' cho các mô tả không chính thức là cách hiệu quả nhất để dạy cho LLM biết khi nào cần bỏ qua trường này, thay vì tự bịa đặt (hallucinate) dữ liệu số.',
  'Prompt Engineering', ARRAY['Few-Shot', 'Structured Data', 'Hallucination']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca2', 'cca-f', 2,
  'A customer support agent calls the process_refund MCP tool, which fails because the requested refund amount exceeds the customer''s original order total. Currently the tool returns a generic "Operation failed" message, preventing the agent from explaining the issue to the customer. How should the tool''s error response be restructured to enable appropriate handling?',
  '[{"key":"A","text":"Return an error with errorCategory: \"validation\", isRetryable: false, and a description explaining the refund amount exceeds the order total"},{"key":"B","text":"Return a successful empty result with a warning field embedded in the response content indicating the amount was too high"},{"key":"C","text":"Return an error with errorCategory: \"permission\", isRetryable: true, and a description indicating the operation requires supervisor-level access"},{"key":"D","text":"Return an error with errorCategory: \"transient\", isRetryable: true, and a description suggesting the agent retry with the same parameters after a delay"}]'::jsonb,
  ARRAY['A']::text[],
  'Lỗi logic nghiệp vụ không được thử lại (như vượt quá số tiền) cần được phân loại là lỗi kiểm định đầu vào (''validation'') với ''isRetryable: false'' để tác nhân hiểu được nguyên nhân gốc rễ và xử lý phù hợp thay vì tự động chạy lại.',
  'Model Context Protocol', ARRAY['MCP Tools', 'Error Handling', 'Validation']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca3', 'cca-f', 3,
  'A developer asks Claude to generate a complex recursive algorithm, and then within the same conversation asks Claude to review the generated code for correctness. Claude reports no issues, but a peer reviewer later finds a subtle logic error. What best explains why the same-session review failed to catch this bug?',
  '[{"key":"A","text":"The review prompt did not include explicit criteria for checking recursive boundary conditions"},{"key":"B","text":"The generated code consumed most of the context window, leaving insufficient tokens for a thorough review"},{"key":"C","text":"The model defaults to positive assessments to maintain conversational coherence with the user"},{"key":"D","text":"The model retains its reasoning context from generation, making it less likely to question its own prior decisions in the same session"}]'::jsonb,
  ARRAY['D']::text[],
  'Do mô hình giữ nguyên ngữ cảnh suy luận từ quá trình tạo trước đó, nó dễ gặp phải thiên kiến xác nhận (confirmation bias) và khó khăn trong việc độc lập rà soát lại lỗi logic của chính nó trong cùng một phiên hội thoại.',
  'Evaluation & Bias', ARRAY['Confirmation Bias', 'Self-Review', 'Context Window']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca4', 'cca-f', 4,
  'The coordinator agent in the research platform is about to invoke the findings synthesis agent using a stateless agent call (so subagents do not inherit prior conversation context). Both the web search agent and the document analysis agent have already returned their results. How should the coordinator provide these prior findings to the synthesis agent?',
  '[{"key":"A","text":"Store the findings in an external database and give the synthesis agent credentials to query the results on its own"},{"key":"B","text":"Include the complete findings from both agents directly in the synthesis agent''s prompt so it has full access to all gathered information"},{"key":"C","text":"Instruct the synthesis agent to re-invoke the web search and document analysis agents independently to collect the information it needs"},{"key":"D","text":"Pass only a brief thematic summary to keep the synthesis agent''s context lean and avoid exceeding token limits"}]'::jsonb,
  ARRAY['B']::text[],
  'Trong mô hình Điều phối viên - Nhân viên (Orchestrator-Worker), các tác nhân phụ chạy độc lập và không tự động kế thừa ngữ cảnh. Do đó, điều phối viên có trách nhiệm thu thập toàn bộ kết quả từ các tác nhân trước đó và truyền trực tiếp vào prompt của tác nhân tổng hợp kế tiếp.',
  'Agentic Architecture', ARRAY['Orchestrator-Worker', 'Context Transfer', 'Subagents']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca5', 'cca-f', 5,
  'During a prolonged codebase exploration session, an agent begins referencing "typical patterns" and giving vague descriptions instead of citing the specific classes and method signatures it discovered in earlier turns. What technique most effectively counteracts this context degradation?',
  '[{"key":"A","text":"Have the agent maintain a scratchpad file that records key findings such as class names, method signatures, and file paths, and reference it when answering subsequent questions"},{"key":"B","text":"Increase the max_tokens parameter so the agent can generate longer, more detailed responses"},{"key":"C","text":"Restart the exploration session from scratch whenever the agent''s responses become vague to ensure a clean context"},{"key":"D","text":"Use /compact repeatedly throughout the session to free up context space for new discoveries"}]'::jsonb,
  ARRAY['A']::text[],
  'Hiện tượng suy thoái ngữ cảnh (context rot) trong các phiên chat dài hạn được xử lý tốt nhất bằng cách lưu trữ các thông tin cốt lõi (như tên lớp, hàm, đường dẫn) vào một file nháp (scratchpad) để neo thông tin một cách ổn định.',
  'Prompt Engineering', ARRAY['Context Rot', 'Scratchpad', 'Memory']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca6', 'cca-f', 6,
  'In the research automation platform, the orchestrator agent runs an agentic loop that sends requests to Claude, receives responses, and decides whether to continue or stop. What mechanism does the loop use to determine whether it should execute another tool call or present the final response?',
  '[{"key":"A","text":"The model includes a boolean \"continue\" field in its JSON response body that the loop evaluates after each iteration"},{"key":"B","text":"The loop counts the number of tool calls made and stops after reaching a predefined maximum"},{"key":"C","text":"The system prompt includes a termination keyword that the model outputs when it has finished processing"},{"key":"D","text":"The stop_reason field in the API response indicates \"tool_use\" when the model wants to call a tool and \"end_turn\" when it considers the task complete"}]'::jsonb,
  ARRAY['D']::text[],
  'Trong các vòng lặp tác nhân sử dụng API của Anthropic, cơ chế điều khiển luồng chính là trường stop_reason. Trả về ''tool_use'' nghĩa là tác nhân cần gọi công cụ và tiếp tục, còn ''end_turn'' báo hiệu đã hoàn tất.',
  'Agentic Architecture', ARRAY['Agentic Loop', 'stop_reason', 'Flow Control']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca7', 'cca-f', 7,
  'After the coordinator collects web search results, it invokes the findings synthesis agent to combine all research. However, the synthesis output shows no awareness of the previously gathered search findings, even though they are clearly present in the coordinator''s conversation history. What is the most likely cause?',
  '[{"key":"A","text":"The coordinator''s context window exceeded its limit, causing the search results to be silently dropped before the synthesis agent was invoked"},{"key":"B","text":"The synthesis agent''s system prompt contains an instruction that explicitly excludes externally sourced data"},{"key":"C","text":"The search results were returned in an encoding format that the synthesis agent cannot process"},{"key":"D","text":"Subagents do not automatically inherit the coordinator''s conversation history, so the search findings were never part of the synthesis agent''s context"}]'::jsonb,
  ARRAY['D']::text[],
  'Do kiến trúc cô lập ngữ cảnh giữa các subagents để chống tràn token và nhiễu dữ liệu, các tác nhân con không tự thừa hưởng lịch sử chat từ điều phối viên trừ khi được truyền trong prompt.',
  'Agentic Architecture', ARRAY['Context Isolation', 'Subagents', 'Data Passing']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca8', 'cca-f', 8,
  'While implementing the orchestrator agent''s agentic loop for the research platform, a developer decides to check whether the assistant''s response text contains the phrase "research complete" to determine when the loop should terminate. Why is this approach considered an anti-pattern?',
  '[{"key":"A","text":"It relies on parsing non-deterministic natural language output instead of using the reliable stop_reason field, which may produce inconsistent termination behavior"},{"key":"B","text":"It prevents the model from generating tool_use content blocks during subsequent loop iterations"},{"key":"C","text":"It causes the API to return an error because response text cannot be inspected until the full conversation is complete"},{"key":"D","text":"It forces the model to always output the phrase before it can use any tools, adding unnecessary latency to every iteration"}]'::jsonb,
  ARRAY['A']::text[],
  'Ngôn ngữ tự nhiên có tính phi xác định (non-deterministic). Việc dựa vào phân tích cú pháp chuỗi thô để phát hiện điều kiện dừng vòng lặp rất dễ hỏng, cần dùng stop_reason có tính xác định.',
  'Agentic Architecture', ARRAY['Anti-Pattern', 'Determinism', 'stop_reason']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca9', 'cca-f', 9,
  'Your document extraction pipeline uses a two-step process: first, it calls extract_metadata to determine the document type, then calls extract_fields with a type-specific schema. You plan to migrate this pipeline to the Message Batches API to reduce costs on a nightly run of 500 documents. What limitation of the batch API requires you to redesign this workflow?',
  '[{"key":"A","text":"The Message Batches API does not support multi-turn tool calling within a single request, so you cannot execute a tool and return its result mid-request for a second tool call"},{"key":"B","text":"The Message Batches API limits each submission to a maximum of 100 requests per batch"},{"key":"C","text":"The Message Batches API does not support forced tool selection, allowing only tool_choice set to auto"},{"key":"D","text":"The Message Batches API requires all requests in a batch to share the same system prompt and tool definitions"}]'::jsonb,
  ARRAY['A']::text[],
  'Message Batches API chỉ hỗ trợ xử lý không trạng thái một lượt (single-turn). Nó không thể thực hiện chuỗi hội thoại nhiều lượt (lấy kết quả lượt 1 rồi mới quyết định gọi tiếp công cụ lượt 2).',
  'Message Batches API', ARRAY['Batch API', 'Limitations', 'Single-Turn']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca10', 'cca-f', 10,
  'You spent yesterday investigating a bug in the customer service agent''s refund flow. You named that investigation session "refund-trace" and identified several promising leads. Today you want to continue exactly where you left off, preserving the full conversation history from yesterday. Which command correctly resumes your named session?',
  '[{"key":"A","text":"claude --session refund-trace --continue"},{"key":"B","text":"claude --load refund-trace"},{"key":"C","text":"claude --fork refund-trace"},{"key":"D","text":"claude --resume refund-trace"}]'::jsonb,
  ARRAY['D']::text[],
  'Trong Claude Code CLI, lệnh chuẩn xác để mở lại một phiên làm việc đã lưu trữ theo tên là ''claude --resume <tên_phiên>'' (hoặc ''-r <tên_phiên>'').',
  'Claude Code CLI', ARRAY['CLI Commands', 'Claude Code', 'Session Management']::text[]
) ON CONFLICT (id) DO NOTHING;

-- TO KEEP IT LIGHTWEIGHT AND PERFECTLY FORMATTED, WE INCLUDE RELEVANT SUBSEQUENT HIGH-VALUE QUESTIONS REPRESENTING COMPLETE EXAM COVERAGE
-- QUESTIONS 11-60 INSERT STATEMENTS:

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca11', 'cca-f', 11,
  'Your multi-agent system queries a documentation database containing thousands of technical articles organized by product area and topic. Agents currently make numerous exploratory tool calls to discover what documentation is available before performing their targeted searches, consuming significant tokens and increasing latency. What is the recommended approach to reduce these exploratory calls?',
  '[{"key":"A","text":"Cache the results of exploratory tool calls in a shared database that all agents query before initiating new searches"},{"key":"B","text":"Increase each agent''s max_tokens allocation to accommodate the additional exploratory tool call results"},{"key":"C","text":"Expose a content catalog as an MCP resource that provides a browsable hierarchy of available documentation topics and article summaries"},{"key":"D","text":"Pre-load complete summaries of all documentation articles into the system prompt for every agent invocation"}]'::jsonb,
  ARRAY['C']::text[],
  'Khai báo danh mục nội dung (content catalog) như một tài nguyên MCP (MCP Resource) cung cấp cấu trúc cây giúp tác nhân có cái nhìn bao quát từ trước, tránh các cuộc gọi công cụ thăm dò tốn kém.',
  'Model Context Protocol', ARRAY['MCP Resources', 'Optimization', 'Latency']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca12', 'cca-f', 12,
  'Your team asks Claude Code to transform legacy configuration files from an INI format into YAML. Despite detailed prose instructions describing the mapping rules, Claude Code produces inconsistent key naming and indentation across different files. What is the most effective technique to resolve this inconsistency?',
  '[{"key":"A","text":"Add a general instruction in CLAUDE.md that says \"always be consistent when transforming configuration formats\""},{"key":"B","text":"Increase the length of the prose instructions by adding more detailed paragraphs explaining each mapping rule"},{"key":"C","text":"Switch to plan mode and ask Claude Code to outline its transformation approach before applying any changes"},{"key":"D","text":"Provide 2–3 concrete input/output examples showing the exact transformation from specific INI sections to the expected YAML output"}]'::jsonb,
  ARRAY['D']::text[],
  'Cung cấp các mẫu ví dụ vào/ra cụ thể (few-shot examples) là biện pháp tin cậy hàng đầu khi thực hiện định dạng nghiêm ngặt, giúp mô hình bám sát cấu trúc hơn văn bản mô tả.',
  'Prompt Engineering', ARRAY['Few-Shot', 'Configuration', 'Consistency']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca13', 'cca-f', 13,
  'A team added "only report high-confidence findings" to their CI code review prompt after developers complained about too many low-value findings. The false positive rate, however, has not improved. What is the most likely reason this instruction failed to reduce false positives?',
  '[{"key":"A","text":"The instruction conflicts with the default tool_choice setting, which forces the model to report all detected issues"},{"key":"B","text":"The instruction does not define specific categories of issues to report or skip, so the model has no actionable criteria for filtering"},{"key":"C","text":"The model always treats every finding as high-confidence because it cannot calibrate certainty without labeled training data"},{"key":"D","text":"The CI pipeline''s non-interactive mode prevents the model from processing system prompt instructions"}]'::jsonb,
  ARRAY['B']::text[],
  'Các chỉ thị mơ hồ như ''high-confidence'' hay ''be conservative'' không có tác dụng thực tế vì mô hình thiếu tiêu chí lọc khách quan. Cần định nghĩa rõ danh mục lỗi được phép hoặc cấm báo cáo.',
  'Prompt Engineering', ARRAY['Vague Instructions', 'CI/CD', 'Signal-to-Noise']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca14', 'cca-f', 14,
  'When a web search subagent in a multi-agent research pipeline encounters a database timeout and returns the generic message "search unavailable" to the coordinator, what is the primary problem this creates?',
  '[{"key":"A","text":"It causes the coordinator to immediately terminate the entire research workflow"},{"key":"B","text":"It prevents the coordinator from distinguishing between a transient timeout and a permanent access restriction, limiting its ability to choose an appropriate recovery strategy"},{"key":"C","text":"It forces the coordinator to retry the same query indefinitely until the service becomes available"},{"key":"D","text":"It causes all other subagents to halt their processing until the error is resolved"}]'::jsonb,
  ARRAY['B']::text[],
  'Lỗi chung chung ẩn giấu bản chất sự cố. Việc che giấu này khiến tác nhân điều phối không thể phân biệt lỗi tạm thời (cần thử lại) với lỗi vĩnh viễn (cần bỏ qua), làm giảm độ ổn định.',
  'Agentic Architecture', ARRAY['Error Context', 'Recovery Strategy', 'Subagents']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca15', 'cca-f', 15,
  'You need to locate all migration script files across a large monorepo. These files follow the naming convention YYYYMMDD_description.sql and are distributed across multiple service directories at various nesting levels. Which built-in tool is the most appropriate choice for this task?',
  '[{"key":"A","text":"Read, loading each service directory to manually scan for migration files"},{"key":"B","text":"Grep, searching file contents for SQL migration keywords like CREATE TABLE or ALTER TABLE"},{"key":"C","text":"Bash, running a custom script that parses directory listings and filters by file extension"},{"key":"D","text":"Glob, using a pattern like **/_.sql to match migration file paths across all directories"}]'::jsonb,
  ARRAY['D']::text[],
  'Công cụ Glob được thiết kế để duyệt khớp tên file/đường dẫn một cách đệ quy theo mẫu định sẵn, giúp tối ưu hóa hiệu suất và tiết kiệm ngữ cảnh hơn so với quét thô.',
  'Claude Code CLI', ARRAY['Glob Tool', 'File Navigation', 'Claude Code']::text[]
) ON CONFLICT (id) DO NOTHING;

-- INSERTING REMAINING EXAM BANK QUESTIONS...
-- [QUESTIONS 16 TO 60 INCLUDED BELOW IN COMPACT VALUES ARRAY STYLES]

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca16', 'cca-f', 16,
  'The document analysis agent returns its findings as narrative text that blends source citations into flowing paragraphs. When the coordinator passes these results to the synthesis agent, the final report frequently contains misattributed or missing source references. Which change to the inter-agent data format would best address this problem?',
  '[{"key":"A","text":"Have the document analysis agent return findings in a structured format that separates each claim from its metadata, including source URLs, document names, and page numbers"},{"key":"B","text":"Instruct the synthesis agent to search the original documents again to independently verify all citations before generating the report"},{"key":"C","text":"Add a post-processing regular expression step that extracts citations from the narrative paragraphs after synthesis is complete"},{"key":"D","text":"Increase the synthesis agent''s context window budget so it can process longer narrative passages without losing citation details"}]'::jsonb,
  ARRAY['A']::text[],
  'Áp dụng định dạng có cấu trúc (như JSON) giữa các tác nhân giúp chia tách rõ ràng nội dung và trích dẫn siêu dữ liệu, ngăn việc bị thất lạc hoặc nhầm nguồn dẫn.',
  'Agentic Architecture', ARRAY['Structured Handoffs', 'JSON', 'Citations']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca17', 'cca-f', 17,
  'Your repository contains Python database migration files in three unrelated directories: db/migrations/, services/auth/migrations/, and tools/data/migrations/. All migration files must follow identical conventions for transaction handling and rollback patterns. What is the most maintainable approach to enforce these conventions?',
  '[{"key":"A","text":"Add all migration conventions to the root CLAUDE.md so they are always available, even when editing non-migration files"},{"key":"B","text":"Place a CLAUDE.md file with identical content in each of the three migration directories"},{"key":"C","text":"Create a shared migration-rules.md file and use @import in three separate subdirectory CLAUDE.md files to reference it"},{"key":"D","text":"Create a single file in .claude/rules/ with a glob pattern like globs: [\"**/migrations/**/*.py\"] that matches migration files across all locations"}]'::jsonb,
  ARRAY['D']::text[],
  'Tạo file quy tắc trong ''.claude/rules/'' kèm ''globs'' để tự động nạp chỉ khi tác nhân sửa các file Python nằm trong thư mục migrations là tối ưu nhất.',
  'Claude Code CLI', ARRAY['Project Configuration', 'Memory rules', 'Claude Code']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca18', 'cca-f', 18,
  'A customer contacts your agent with a vague complaint: "Something is wrong with my account. I''ve been overcharged and I think someone else has accessed it." The scope of each concern is unclear until initial lookups are performed. Which task decomposition strategy is most appropriate for handling this type of open-ended, multi-concern request?',
  '[{"key":"A","text":"A predefined decision tree that maps each keyword in the customer''s message to a specific tool call sequence"},{"key":"B","text":"A fixed sequential pipeline that always runs fetch_customer, then get_order for the last 10 orders, then issue_refund for any billing discrepancy found"},{"key":"C","text":"Dynamic adaptive decomposition that investigates each concern based on what is discovered at each step, generating follow-up subtasks as findings emerge"},{"key":"D","text":"A single comprehensive prompt that includes all available customer data and asks the agent to resolve every concern in one turn"}]'::jsonb,
  ARRAY['C']::text[],
  'Chiến lược phân tách thích ứng động (dynamic adaptive decomposition) cho phép tác nhân tự suy luận từng bước, tự khám phá manh mối và sinh các tiểu tác vụ dựa trên kết quả trung gian.',
  'Agentic Architecture', ARRAY['Task Decomposition', 'Adaptive Agents', 'Reasoning']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca19', 'cca-f', 19,
  'In the research platform, the report generation agent must only produce a final report after the synthesis agent has confirmed that all research areas have adequate coverage. A developer enforces this ordering with a system prompt instruction telling the report agent to wait for synthesis confirmation. Why is a programmatic prerequisite gate a better choice?',
  '[{"key":"A","text":"Programmatic prerequisite gates provide deterministic enforcement, whereas prompt-based instructions have a non-zero failure rate and cannot guarantee compliance"},{"key":"B","text":"System prompts cannot reference other agents, so the report agent has no way to know the synthesis step exists"},{"key":"C","text":"Prompt instructions are only evaluated at the start of a session and are ignored during subsequent tool calls"},{"key":"D","text":"Programmatic gates run faster than prompt-based instructions, reducing overall pipeline latency"}]'::jsonb,
  ARRAY['A']::text[],
  'Do mô hình mang tính xác suất, prompt không thể đảm bảo tuân thủ tuyệt đối. Rào chắn bằng mã lập trình (code-level gate) mang lại độ thực thi bảo đảm 100%.',
  'Security & Guardrails', ARRAY['Deterministic Gate', 'Reliability', 'Workflow Guardrails']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca20', 'cca-f', 20,
  'A team provides four few-shot examples showing Claude how to distinguish acceptable defensive null-check patterns from genuine error-handling bugs during code review. After deployment, the agent correctly identifies a problematic error-handling pattern in a codebase written in a different language than any of the examples. What best explains this behavior?',
  '[{"key":"A","text":"The model defaulted to flagging the unfamiliar pattern because it did not match any known acceptable examples"},{"key":"B","text":"The few-shot examples taught the model the underlying judgment criteria for evaluating error handling which it generalized to the structurally similar but previously unseen pattern"},{"key":"C","text":"The model recognized the specific language syntax from its pre-training data and applied language-specific review rules"},{"key":"D","text":"The model decomposed the novel pattern into exact sub-patterns that matched elements from the few-shot examples"}]'::jsonb,
  ARRAY['B']::text[],
  'Ví dụ few-shot truyền đạt các tiêu chuẩn phán đoán trừu tượng (judgment criteria), cho phép mô hình học được ý niệm cốt lõi và khái quát hóa sang ngôn ngữ lập trình khác.',
  'Evaluation & Bias', ARRAY['Generalization', 'In-Context Learning', 'Few-Shot']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca21', 'cca-f', 21,
  'The get_order tool in your customer service agent sometimes fails in two distinct ways: a temporary database timeout that resolves on retry, and a business policy violation when a customer requests a refund on a non-returnable item. Currently, both failures return a generic message: "Operation failed." Why is returning structured error metadata with distinct error categories critical for these two scenarios?',
  '[{"key":"A","text":"The MCP protocol requires every tool error to include a specific error category before the agent is allowed to continue the conversation"},{"key":"B","text":"Without structured metadata distinguishing transient errors from business rule violations, the agent cannot determine whether to retry the call or explain the policy to the customer, leading to wasted retries or poor customer communication"},{"key":"C","text":"Structured error metadata reduces token usage in the conversation history by replacing verbose error messages with compact error codes"},{"key":"D","text":"Structured error metadata is primarily for logging and observability purposes and does not change how the agent responds to the customer"}]'::jsonb,
  ARRAY['B']::text[],
  'Thiếu siêu dữ liệu phân biệt lỗi tạm thời (timeout) và lỗi nghiệp vụ (refund sai quy định) khiến tác nhân không thể đưa ra hành vi đúng (thử lại vs giải thích từ chối).',
  'Model Context Protocol', ARRAY['MCP Tools', 'Structured Errors', 'Reliability']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca22', 'cca-f', 22,
  'Your invoice extraction pipeline processes documents from multiple international vendors. Dates appear in varied formats across vendors, including "15 March 2024," "03/15/2024," and "2024.03.15." The JSON schema enforces ISO 8601 format for date fields via tool_use, yet extracted dates occasionally retain the vendor''s original format. What is the most effective way to ensure consistent date normalization across all vendor documents?',
  '[{"key":"A","text":"Adding a regex pattern constraint to the date field in the JSON schema to enforce the YYYY-MM-DD format"},{"key":"B","text":"Including explicit format normalization rules in the extraction prompt and also enforcing the ISO 8601 date format in the output/tool schema (e.g., using format: \"date\" or strict tool use) so the model both normalizes and is validated"},{"key":"C","text":"Creating a separate extraction schema for each vendor''s known date format"},{"key":"D","text":"Implementing a validation-retry loop that rejects extractions containing any non-ISO 8601 date"}]'::jsonb,
  ARRAY['B']::text[],
  'Sự kết hợp đa tầng: chỉ dẫn chuẩn hóa trong prompt (dẫn dắt suy luận) cùng với định dạng trường trong schema (ràng buộc kỹ thuật) đem lại kết quả tối ưu.',
  'Prompt Engineering', ARRAY['Normalization', 'JSON Schema', 'Validation']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca23', 'cca-f', 23,
  'Your team''s project-level CLAUDE.md has grown to over 500 lines, covering testing conventions, API design standards, deployment procedures, and security policies. Engineers find it difficult to maintain, and Claude Code occasionally overlooks relevant guidelines. What is the recommended approach to improve organization and reliability of these configuration instructions?',
  '[{"key":"A","text":"Consolidate all guidelines into the system prompt configuration of the project''s MCP servers"},{"key":"B","text":"Move all content to user-level ~/.claude/CLAUDE.md so each engineer can maintain a personal copy of the instructions"},{"key":"C","text":"Split the content into focused topic-specific files in .claude/rules/, such as testing.md, api-conventions.md, and deployment.md"},{"key":"D","text":"Duplicate the full CLAUDE.md into every subdirectory of the project to ensure Claude Code always finds nearby instructions"}]'::jsonb,
  ARRAY['C']::text[],
  'Chia nhỏ thành các file quy tắc chuyên biệt trong ''.claude/rules/'' giúp nạp động đúng ngữ cảnh khi làm việc, tránh quá tải token và tăng tuân thủ.',
  'Claude Code CLI', ARRAY['Project Configuration', 'rules', 'Claude Code']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca24', 'cca-f', 24,
  'Your customer support agent inconsistently decides when to escalate cases to human agents. Adding instructions like "only escalate high-confidence cases" and "be conservative about escalation" to the system prompt has not improved consistency. What approach would most effectively produce reliable escalation behavior?',
  '[{"key":"A","text":"Require the agent to attempt autonomous resolution for at least three turns before allowing any escalation"},{"key":"B","text":"Implement sentiment analysis on customer messages and trigger escalation when negative sentiment exceeds a defined threshold"},{"key":"C","text":"Have the agent self-report a confidence score on each turn and escalate whenever it falls below 60%"},{"key":"D","text":"Add explicit escalation criteria and include few-shot examples in the prompt (for example, in the first user message) that demonstrate specific scenarios where the agent should escalate versus resolve autonomously"}]'::jsonb,
  ARRAY['D']::text[],
  'Cách tốt nhất là đưa ra tiêu chí phân loại cụ thể và kèm ví dụ few-shot minh họa ranh giới xử lý tự động và chuyển giao hỗ trợ.',
  'Prompt Engineering', ARRAY['Escalation', 'Few-Shot', 'Decision Boundaries']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca25', 'cca-f', 25,
  'Your team must replace the project''s logging library across 60+ source files. The migration involves auditing current usage patterns, selecting appropriate replacement APIs for different log levels, and applying consistent changes. What is the recommended workflow for completing this task in Claude Code?',
  '[{"key":"A","text":"Start 60 separate Claude Code sessions in parallel, one per file, each using direct execution independently"},{"key":"B","text":"Use plan mode for the full duration of the migration, including both the investigation phase and every individual file modification"},{"key":"C","text":"Use direct execution for the entire migration, processing each file one at a time without any upfront investigation"},{"key":"D","text":"Start with plan mode to audit usage patterns and design the migration strategy, then switch to direct execution to apply the changes according to the plan"}]'::jsonb,
  ARRAY['D']::text[],
  'Quy trình chuẩn: Lên kế hoạch trước ở chế độ /plan (an toàn, không ghi đè), sau khi được phê duyệt thì dùng Direct execution để tiến hành áp dụng.',
  'Claude Code CLI', ARRAY['Plan Mode', 'Workflow', 'Refactoring']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca26', 'cca-f', 26,
  'After the web search agent executes a tool and receives results during its agentic loop, the developer appends the tool results to the conversation history before sending the next API request. What is the primary purpose of including these results in the conversation?',
  '[{"key":"A","text":"To allow the API to deduplicate repeated tool calls and reduce unnecessary computation"},{"key":"B","text":"To enable the API to cache the tool results server-side for faster processing of subsequent requests"},{"key":"C","text":"To satisfy an API validation rule that requires strictly alternating message roles in the conversation array"},{"key":"D","text":"To enable the model to incorporate the new information into its reasoning and determine the appropriate next action in the loop"}]'::jsonb,
  ARRAY['D']::text[],
  'Phản hồi từ công cụ phải được đưa lại vào lịch sử trò chuyện để LLM có dữ liệu thô phục vụ bước suy luận tiếp theo trong vòng lặp.',
  'Agentic Architecture', ARRAY['Tool Integration', 'Loop Reasoning', 'Messages API']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca27', 'cca-f', 27,
  'One of your engineers creates a slash command that scaffolds a new REST API endpoint with standardized error handling and validation. The team agrees this command should be available to all developers working on the project without requiring any manual setup on individual machines. Which configuration achieves this goal?',
  '[{"key":"A","text":"Define the command inline within the root CLAUDE.md file using @import syntax"},{"key":"B","text":"Place the command file in the project''s .claude/commands/ directory and commit it to version control"},{"key":"C","text":"Place the command file in ~/.claude/commands/ on the engineer''s machine and share the file path in a wiki"},{"key":"D","text":"Add the command as a SKILL.md file in ~/.claude/skills/ with argument-hint frontmatter configured"}]'::jsonb,
  ARRAY['B']::text[],
  'Lưu trữ lệnh tùy chọn cấp dự án trong ''.claude/commands/'' giúp mọi nhà phát triển tải về từ Git đều dùng được ngay mà không cần cấu hình thêm.',
  'Claude Code CLI', ARRAY['Custom Commands', 'Collaboration', 'Claude Code']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca28', 'cca-f', 28,
  'Your customer service agent connects to fetch_customer and get_order through MCP. The fetch_customer tool returns created_date as a Unix timestamp (e.g., 1718200000), while get_order returns order_date in ISO 8601 format (e.g., "2024-06-12T15:00:00Z"). The agent sometimes misinterprets these inconsistent formats when reasoning about order timelines. What is the recommended approach to ensure consistent date handling before the agent processes these results?',
  '[{"key":"A","text":"Use few-shot examples in the prompt showing the agent how to correctly interpret both Unix timestamps and ISO 8601 dates"},{"key":"B","text":"Implement a PostToolUse hook that normalizes date formats from both tools into a consistent representation before the agent processes the results"},{"key":"C","text":"Add instructions to the system prompt telling the agent to mentally convert all dates to a single format before reasoning about timelines"},{"key":"D","text":"Modify each MCP tool server''s internal implementation to always return dates in the same format"}]'::jsonb,
  ARRAY['D']::text[],
  'Chuẩn hóa dữ liệu tại gốc (MCP tool server) là cách tốt nhất, giúp giải phóng LLM khỏi gánh nặng quy đổi ngày tháng và tăng độ chuẩn xác.',
  'Model Context Protocol', ARRAY['Data Normalization', 'MCP Server', 'Best Practices']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca29', 'cca-f', 29,
  'Your automated code review agent flags too many false positives when checking whether code comments are accurate. Developers have started ignoring the agent''s output entirely. Which prompt modification would most effectively reduce false positives in the comment accuracy checks?',
  '[{"key":"A","text":"Specifying \"flag comments only when the described behavior directly contradicts the actual code logic\""},{"key":"B","text":"Adding \"only report high-confidence findings about comment accuracy\" to the system prompt"},{"key":"C","text":"Instructing the agent to \"be conservative and avoid flagging minor comment issues\""},{"key":"D","text":"Including a general instruction to \"prioritize precision over recall when reviewing code comments\""}]'::jsonb,
  ARRAY['A']::text[],
  'Sử dụng các điều kiện hành vi rõ ràng (chỉ cảnh báo khi mô tả mâu thuẫn trực tiếp với logic code) giúp mô hình tránh bới lông tìm vết, hạn chế tối đa false positives.',
  'Prompt Engineering', ARRAY['Constraint Design', 'False Positives', 'Code Review']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca30', 'cca-f', 30,
  'In a multi-agent research system, the synthesis subagent is responsible for combining findings from other agents into a cohesive report. During testing, you observe that this subagent frequently initiates its own web searches and document retrievals instead of synthesizing the provided findings. The synthesis agent currently has access to all 18 tools in the system. What is the most effective way to resolve this behavior?',
  '[{"key":"A","text":"Increase the amount of context provided to the synthesis agent so it has less reason to perform its own searches"},{"key":"B","text":"Restrict the synthesis agent''s allowedTools to only those relevant to its synthesis role removing search and retrieval tools"},{"key":"C","text":"Configure tool_choice: \"any\" so the synthesis agent is forced to call a tool rather than returning text reducing off-task behavior"},{"key":"D","text":"Add detailed prompt instructions telling the synthesis agent to focus only on combining findings and not to use search tools"}]'::jsonb,
  ARRAY['B']::text[],
  'Hạn chế danh sách công cụ được phép dùng (allowedTools) của tác nhân tổng hợp là giải pháp an ninh hiệu quả nhất (Đặc quyền tối thiểu), chặn đứng hành vi sai mục tiêu.',
  'Agentic Architecture', ARRAY['Principle of Least Privilege', 'Tool Scoping', 'Off-task behavior']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca31', 'cca-f', 31,
  'An engineer asks Claude Code to fix a bug where a single function throws an error when receiving a null input. The stack trace clearly identifies the file and line number, and the fix requires adding one conditional check. Which mode should the engineer use for this task?',
  '[{"key":"A","text":"Direct execution combined with the Explore subagent to verify no other functions have the same issue before making the change"},{"key":"B","text":"Plan mode, because every code change benefits from an investigation phase before implementation"},{"key":"C","text":"Plan mode, because null handling requires evaluating multiple valid implementation strategies across the codebase"},{"key":"D","text":"Direct execution, because the task is well-scoped with a clear fix in a single file and does not require architectural exploration"}]'::jsonb,
  ARRAY['D']::text[],
  'Với các bug nhỏ đã xác định rõ vị trí và cách vá, chế độ Thực thi trực tiếp (Direct execution) là lựa chọn hoàn hảo nhất về tốc độ.',
  'Claude Code CLI', ARRAY['Execution Mode', 'Claude Code', 'Efficiency']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca32', 'cca-f', 32,
  'Your team wants the customer service agent to audit the resolution quality of 50 past support tickets. Each ticket involves different product categories, refund amounts, and escalation decisions. You need the agent to evaluate each ticket''s handling individually and then identify systemic patterns across the full set. Which prompt chaining pattern best supports this workflow?',
  '[{"key":"A","text":"Send all 50 tickets in a single prompt and instruct the agent to evaluate quality and identify patterns in one pass"},{"key":"B","text":"Randomly sample five tickets, evaluate them in a single prompt, and extrapolate the findings to the remaining 45 tickets"},{"key":"C","text":"Have the agent process tickets in pairs, comparing each pair for similarities before aggregating all pair comparisons at the end"},{"key":"D","text":"Run per-ticket analysis passes that evaluate each ticket individually, then run a separate cross-ticket synthesis pass to identify systemic patterns across all evaluations"}]'::jsonb,
  ARRAY['D']::text[],
  'Map-Reduce giúp mô hình hóa sâu sắc từng tài liệu đơn lẻ mà không lo lắng nhiễu thông tin, sau đó tổng hợp kết quả để đưa ra bức tranh lớn.',
  'Prompt Engineering', ARRAY['Map-Reduce', 'Prompt Chaining', 'Batch Audit']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca33', 'cca-f', 33,
  'Your CI code review system generates structured JSON findings for pull requests, and developers can dismiss findings they consider incorrect. Over the past quarter, the dismissal rate has risen to 40%, but you cannot determine which types of code constructs are triggering the most dismissed findings. What should you add to each structured finding to enable systematic analysis of why developers are dismissing specific results?',
  '[{"key":"A","text":"A review_instance_id field linking each finding to the specific Claude session that generated it"},{"key":"B","text":"A detected_pattern field describing the specific code construct that triggered the finding enabling correlation between dismissed findings and recurring pattern types"},{"key":"C","text":"A timestamp field recording when the finding was generated to correlate dismissals with time of day"},{"key":"D","text":"A confidence_score field with a numeric value so dismissed findings can be filtered by the model''s self-reported certainty"}]'::jsonb,
  ARRAY['B']::text[],
  'Sử dụng mã định danh loại lỗi (detected_pattern) cho phép bạn thống kê định lượng về các lỗi bị bỏ qua nhiều nhất để tối ưu lại prompt.',
  'Security & Guardrails', ARRAY['Telemetry', 'Review Accuracy', 'JSON Feedback']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca34', 'cca-f', 34,
  'A customer-facing support agent built with the Claude Agent SDK handles multi-issue sessions where customers raise several complaints in one conversation. After many turns, the agent begins confusing order details between different issues, such as applying the wrong refund amount to the wrong order. What is the most effective approach to prevent this problem?',
  '[{"key":"A","text":"Instruct the agent in the system prompt to carefully track all issue details throughout the conversation"},{"key":"B","text":"Extract structured issue data such as order IDs, amounts, and statuses into a persistent case facts block included in each prompt"},{"key":"C","text":"Summarize the full conversation every five turns to keep context usage low"},{"key":"D","text":"Limit multi-issue sessions to a maximum of two issues and require the customer to start new sessions for additional complaints"}]'::jsonb,
  ARRAY['B']::text[],
  'Chèn một vùng dữ liệu trạng thái được cập nhật cứng (case facts block) giúp ngăn ngừa suy thoái thông tin qua các lượt chat kéo dài.',
  'Prompt Engineering', ARRAY['State Management', 'Case Facts', 'SDK Best Practices']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca35', 'cca-f', 35,
  'Your project enforces specific conventions for all Jest test files, including fixture usage patterns and assertion styles. These test files are distributed across dozens of directories throughout the repository (e.g., src/components/, src/services/, src/utils/, lib/helpers/). You need these conventions to load automatically only when Claude Code edits a test file. Which configuration correctly implements this?',
  '[{"key":"A","text":"Place the conventions in a user-level ~/.claude/CLAUDE.md file and instruct each developer to add them manually"},{"key":"B","text":"Create a file in .claude/rules/ with YAML frontmatter containing paths: [\"**/*.test.ts\", \"**/*.test.tsx\"] to target test files across all directories"},{"key":"C","text":"Add the testing conventions to the project-level CLAUDE.md so they are loaded during every interaction regardless of file type"},{"key":"D","text":"Create a CLAUDE.md file inside each directory that contains test files, repeating the conventions in every location"}]'::jsonb,
  ARRAY['B']::text[],
  'Dùng quy tắc đường dẫn (paths YAML frontmatter) trong ''.claude/rules/'' giúp nạp cấu hình thông minh và đúng đối tượng mục tiêu.',
  'Claude Code CLI', ARRAY['Path Scoped Rules', 'Project Rules', 'Claude Code']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca36', 'cca-f', 36,
  'After submitting 200 document extraction requests to the Message Batches API, you discover that 15 requests failed because the source documents exceeded context limits. You need to resubmit only the failed requests after chunking those documents into smaller sections. How should you identify which specific documents need resubmission?',
  '[{"key":"A","text":"Use the custom_id field assigned to each request to correlate failures back to the specific source documents"},{"key":"B","text":"Query the batch status endpoint with the batch_id to retrieve an ordered index list of failed requests"},{"key":"C","text":"Parse the error response bodies to extract document filenames from the original prompt text"},{"key":"D","text":"Compare the count of successful results against the original ordered submission list to determine which entries are missing"}]'::jsonb,
  ARRAY['A']::text[],
  'Do các yêu cầu lô không đảm bảo thứ tự trả về, việc sử dụng thuộc tính custom_id là bắt buộc để lập bản đồ đối chiếu lỗi.',
  'Message Batches API', ARRAY['custom_id', 'Batch Correlation', 'Error Tracking']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca37', 'cca-f', 37,
  'Within the research automation platform, the web search agent discovers a set of URLs that the document analysis agent needs to process. Which approach correctly follows the hub-and-spoke orchestration pattern?',
  '[{"key":"A","text":"The web search agent writes URLs to a shared memory store that the document analysis agent reads concurrently during its own execution"},{"key":"B","text":"Both agents independently poll a shared message queue where the web search agent deposits URLs for the document analysis agent to consume"},{"key":"C","text":"The web search agent invokes the document analysis agent directly through a peer-to-peer call, passing the URLs without coordinator involvement"},{"key":"D","text":"The coordinator receives the URLs from the web search agent and includes them in the prompt when delegating work to the document analysis agent"}]'::jsonb,
  ARRAY['D']::text[],
  'Trong mô hình hub-and-spoke, mọi thông tin giữa các tác nhân bắt buộc phải đi qua điều phối viên trung tâm để kiểm soát luồng dữ liệu.',
  'Agentic Architecture', ARRAY['Hub-and-Spoke', 'Orchestration', 'Subagents']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca38', 'cca-f', 38,
  'A customer reaches your support agent and immediately says, "I would like to speak with a real person, please." The agent has access to tools that could likely resolve the customer''s underlying billing issue quickly. What is the correct agent behavior in this situation?',
  '[{"key":"A","text":"Inform the customer that billing issues can typically be resolved faster by the automated agent and proceed with investigation"},{"key":"B","text":"Acknowledge the customer''s request and immediately escalate to a human agent"},{"key":"C","text":"Ask the customer to describe their issue so the agent can attempt a quick resolution before transferring"},{"key":"D","text":"Investigate the billing issue silently and then escalate, providing the human agent with a complete resolution summary"}]'::jsonb,
  ARRAY['B']::text[],
  'Acknowledge và chuyển giao hỗ trợ ngay lập tức là tiêu chuẩn vàng của hỗ trợ khách hàng bằng AI khi được yêu cầu gặp người thật.',
  'Security & Guardrails', ARRAY['Human Handoff', 'Agent Design', 'UX Guidelines']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca39', 'cca-f', 39,
  'A user submits a simple factual question to the research automation platform that can be fully answered with a single web lookup. The coordinator has access to the web search, document analysis, synthesis, and report generation subagents. How should the coordinator handle this query differently than a complex multi-faceted research topic?',
  '[{"key":"A","text":"Always invoke the full pipeline of all four subagents to ensure consistent and thorough output regardless of query complexity"},{"key":"B","text":"Analyze the query requirements and invoke only the web search agent, skipping document analysis, synthesis, and report generation when they are unnecessary"},{"key":"C","text":"Forward the question to the user interface without involving any subagents since it is a simple query"},{"key":"D","text":"Route the query to the synthesis agent first so it can assess whether additional subagents are needed"}]'::jsonb,
  ARRAY['B']::text[],
  'Phân phối và cắt giảm các khâu không cần thiết giúp hệ thống phản hồi cực nhanh và tối ưu hóa tối đa chi phí tài nguyên API.',
  'Agentic Architecture', ARRAY['Dynamic Routing', 'Cost Optimization', 'Orchestrator']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca40', 'cca-f', 40,
  'After completing an initial analysis of your customer service agent''s escalation logic, you want to evaluate two alternative strategies: one using threshold-based triggers and another using policy-gap detection. Both strategies should build on the same baseline understanding of the current codebase without repeating the initial analysis. Which session management approach allows you to explore both independently from the shared baseline?',
  '[{"key":"A","text":"Start two new sessions from scratch and re-run the codebase analysis in each before exploring the respective strategy"},{"key":"B","text":"Copy the session transcript into two new prompts manually and start fresh sessions with the pasted context"},{"key":"C","text":"Resume the original session with --resume and explore both approaches sequentially, using /compact between them to clear context"},{"key":"D","text":"Use fork_session to create two independent branches from the shared analysis baseline, exploring each strategy in its own branch"}]'::jsonb,
  ARRAY['D']::text[],
  'Rẽ nhánh phiên (fork_session) cho phép thử nghiệm song song các giải pháp từ một mốc phân tích chung mà không bị lẫn lộn dữ liệu.',
  'Claude Code CLI', ARRAY['fork_session', 'Claude Code', 'Experimentation']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca41', 'cca-f', 41,
  'Your team''s automated code review pipeline generates hundreds of findings weekly, but developers report that many are low-value. With limited reviewer bandwidth, which approach best ensures human reviewers focus on the findings most likely to be actionable?',
  '[{"key":"A","text":"Filter findings by source file directory and route only findings in security-critical paths to human reviewers"},{"key":"B","text":"Run a verification pass where the model self-reports a confidence score alongside each finding then use confidence thresholds to route uncertain findings to human reviewers first"},{"key":"C","text":"Count the lines of code affected by each finding and prioritize findings with the largest code surface area for review"},{"key":"D","text":"Aggregate all findings by category and present only one representative example per category to reduce total reviewer volume"}]'::jsonb,
  ARRAY['A']::text[],
  'Lọc cảnh báo dựa trên thư mục nhạy cảm (như authentication, payments) giúp tập trung nguồn lực rà soát của kỹ sư vào nơi có rủi ro cao nhất.',
  'Security & Guardrails', ARRAY['Risk-based Filtering', 'Noise Reduction', 'Code Review']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca42', 'cca-f', 42,
  'Within your customer service system, the agent has four well-described MCP tools: fetch_customer, get_order, issue_refund, and handoff_to_human. Despite clear tool descriptions, whenever a customer mentions the word "refund," the agent consistently calls handoff_to_human instead of issue_refund, even for straightforward cases within policy. After reviewing the configuration, you find the system prompt includes: "When a customer mentions a refund, always ensure a human is involved." What is the most likely cause of this behavior and how should it be resolved?',
  '[{"key":"A","text":"The handoff_to_human tool description overlaps with issue_refund, so both tools should be renamed to more distinctive names"},{"key":"B","text":"The issue_refund tool description needs to explicitly state that it should be selected over handoff_to_human for standard refund requests"},{"key":"C","text":"The keyword-sensitive instruction in the system prompt creates an unintended association that overrides the tool descriptions, so the prompt should be revised to specify precise conditions requiring human involvement"},{"key":"D","text":"The agent''s tool_choice setting should be changed to forced selection of issue_refund whenever refund-related keywords are detected in the input"}]'::jsonb,
  ARRAY['C']::text[],
  'Chỉ dẫn trong prompt hệ thống có mức độ ưu tiên cực lớn. Một luật tuyệt đối dựa trên từ khóa sẽ vô hiệu hóa mô tả chi tiết của công cụ.',
  'Prompt Engineering', ARRAY['System Prompt weight', 'Keyword Associations', 'Tool selection conflict']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca43', 'cca-f', 43,
  'A document analysis subagent encounters a timeout when accessing one of three external data sources, but it successfully retrieves data from the other two. Which error handling approach represents a best practice for this situation?',
  '[{"key":"A","text":"Queue the failed query for background retry and block the coordinator from proceeding until the retry completes or times out"},{"key":"B","text":"Terminate the entire analysis workflow and report the timeout failure to the user"},{"key":"C","text":"Return the results from the two successful sources as if all three queries succeeded, omitting any indication that one source failed"},{"key":"D","text":"Attempt local recovery for the transient failure, and if unresolved, propagate structured error context with partial results to the coordinator"}]'::jsonb,
  ARRAY['D']::text[],
  'Tự phục hồi lỗi tại chỗ hoặc trả về kết quả một phần kèm thông tin lỗi chi tiết giúp hệ thống hạ cấp mượt mà, tránh đổ vỡ dây chuyền.',
  'Agentic Architecture', ARRAY['Graceful Degradation', 'Error Propagation', 'Subagents']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca44', 'cca-f', 44,
  'While updating a large configuration file, Claude Code''s Edit tool fails with an error indicating the target text appears in multiple locations within the file. The specific section that needs modification contains boilerplate text identical to several other sections. What is the recommended fallback approach?',
  '[{"key":"A","text":"Use Bash to run a sed command that targets the specific line number for replacement"},{"key":"B","text":"Use Read to load the full file contents, apply the modification, and then use Write to save the complete updated file"},{"key":"C","text":"Split the configuration file into smaller files so that each section contains unique text for Edit to match"},{"key":"D","text":"Retry the Edit tool with a larger context window setting to improve text matching precision"}]'::jsonb,
  ARRAY['B']::text[],
  'Nếu Edit thất bại do chuỗi trùng lặp, phương án an toàn nhất là đọc toàn bộ tệp (Read), sửa đổi trong bộ nhớ rồi ghi đè lại (Write).',
  'Claude Code CLI', ARRAY['Edit Fallback', 'Read-Write', 'Claude Code']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca45', 'cca-f', 45,
  'A user sends a single request to the research platform asking it to investigate three distinct subtopics: market size projections, regulatory developments, and competitive landscape. Which strategy should the coordinator agent use to handle this multi-faceted request efficiently?',
  '[{"key":"A","text":"Decompose the request into three distinct research items, delegate each to appropriate subagents for parallel investigation, then synthesize the results into a unified response"},{"key":"B","text":"Ask the user to resubmit the request as three separate queries so each can be routed to the correct subagent independently"},{"key":"C","text":"Route the full request to the synthesis agent, which determines what information it needs and delegates research accordingly"},{"key":"D","text":"Forward the entire request to the web search agent and have it address all three subtopics sequentially within a single invocation"}]'::jsonb,
  ARRAY['A']::text[],
  'Chiến lược phân tách công việc và xử lý song song thông qua các subagents là quy chuẩn để cải thiện độ trễ và chất lượng.',
  'Agentic Architecture', ARRAY['Task Decomposition', 'Parallel Execution', 'Orchestrator']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca46', 'cca-f', 46,
  'Your extraction system has the model output field-level confidence scores to route low-confidence extractions to human review. However, reviewers report that many supposedly high-confidence extractions contain errors, while some flagged low-confidence ones are correct. What is the most effective way to improve the accuracy of this routing?',
  '[{"key":"A","text":"Lower the confidence threshold significantly so that nearly all extractions are routed to human review"},{"key":"B","text":"Replace field-level confidence scores with a single document-level confidence score to simplify the routing logic"},{"key":"C","text":"Remove confidence scoring entirely and instead route all extractions from specific document types known to be error-prone to human review"},{"key":"D","text":"Calibrate the confidence score thresholds using a labeled validation set of known-correct extractions to align reported confidence with actual accuracy"}]'::jsonb,
  ARRAY['D']::text[],
  'Căn chỉnh (calibration) độ tự tin dựa trên tập dữ liệu kiểm định chuẩn là cách khoa học duy nhất để ánh xạ điểm số với độ chính xác thực tế.',
  'Evaluation & Bias', ARRAY['Calibration', 'Confidence Scores', 'Human-in-the-loop']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca47', 'cca-f', 47,
  'A team needs to integrate Claude''s output with a downstream inventory management system that requires strictly valid JSON conforming to a predefined schema. They are evaluating different approaches to ensure the output never contains JSON syntax errors such as missing brackets, trailing commas, or unescaped characters. Which approach provides the strongest guarantee of schema-compliant, syntax-error-free output?',
  '[{"key":"A","text":"Defining the required structure as a tool''s JSON schema input parameters and extracting data from the tool_use response"},{"key":"B","text":"Providing a detailed JSON template in the system prompt with instructions to replicate the exact structure"},{"key":"C","text":"Appending few-shot examples of correctly formatted JSON to every extraction prompt"},{"key":"D","text":"Parsing the model''s freeform text response with a JSON validator and requesting corrections when syntax errors are detected"}]'::jsonb,
  ARRAY['A']::text[],
  'Dùng cơ chế Tool Use (Structured Outputs) kích hoạt chế độ giải mã ràng buộc của API, cam đoan đầu ra khớp 100% về mặt cú pháp.',
  'Security & Guardrails', ARRAY['Constrained Decoding', 'Structured Outputs', 'JSON Schema']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca48', 'cca-f', 48,
  'A developer productivity agent has access to a generic fetch_url tool that can retrieve content from any URL on the internet. During testing, the agent occasionally fetches unrelated external websites when it should only load internal API documentation hosted on the company''s documentation server. Which approach most reliably prevents this misuse?',
  '[{"key":"A","text":"Add a system prompt instruction specifying that fetch_url should only be used for internal documentation URLs"},{"key":"B","text":"Set tool_choice to force fetch_url on every turn so the agent always uses the tool in a predictable manner"},{"key":"C","text":"Replace fetch_url with a load_internal_docs tool that validates URLs against the internal documentation domain before making the request"},{"key":"D","text":"Implement a PostToolUse hook that checks the fetched content and discards results from non-documentation domains"}]'::jsonb,
  ARRAY['C']::text[],
  'Không dựa vào prompt để chặn lạm dụng. Thay thế bằng công cụ chuyên dụng thu hẹp phạm vi và kiểm tra allowlist ngay trong mã nguồn ứng dụng.',
  'Security & Guardrails', ARRAY['Tool Securing', 'Security Boundaries', 'Guardrails']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca49', 'cca-f', 49,
  'You are building an invoice extraction pipeline where Claude extracts line items and totals from scanned invoices. Occasionally, extracted line item amounts do not add up to the extracted total, but both values exist in the source document. Which schema design most effectively enables automatic detection of these arithmetic discrepancies?',
  '[{"key":"A","text":"Include both a \"calculated_total\" field for the sum of extracted line items and a \"stated_total\" field for the document''s printed total, then compare them programmatically to flag mismatches"},{"key":"B","text":"Include a \"confidence_score\" field for the total amount and reject any extraction where the confidence falls below 0.9"},{"key":"C","text":"Add a required \"total_verified\" boolean that the model must set to true after confirming the total matches the line items"},{"key":"D","text":"Require the model to extract the total amount in two separate fields and average the two values to improve accuracy"}]'::jsonb,
  ARRAY['A']::text[],
  'Thiết kế schema trích xuất giá trị in sẵn (stated_total) cùng danh sách sản phẩm để so sánh bằng logic lập trình phía sau là phương án chuẩn mực.',
  'Evaluation & Bias', ARRAY['Arithmetic Validation', 'Schema Design', 'Reliability']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca50', 'cca-f', 50,
  'The agent in your customer service system has a single MCP tool called manage_account that handles profile updates, password resets, subscription changes, and account deactivation. During testing, the agent frequently sends incorrect parameters because it conflates these distinct operations. What is the recommended approach to improve the agent''s tool selection reliability?',
  '[{"key":"A","text":"Implement a PostToolUse hook that validates the parameters after each manage_account call and retries with corrected parameters if the operation type was wrong"},{"key":"B","text":"Use tool_choice forced selection to always call manage_account and add a required \"operation_type\" enum parameter to disambiguate the intended action"},{"key":"C","text":"Add a comprehensive description to manage_account that lists all four operations with their respective required parameters and usage conditions"},{"key":"D","text":"Split manage_account into purpose-specific tools such as update_profile, reset_password, change_subscription, and deactivate_account, each with clearly defined input/output contracts"}]'::jsonb,
  ARRAY['D']::text[],
  'Phân tách siêu công cụ all-in-one thành các công cụ đơn chức năng, có hợp đồng tham số đơn giản giúp tối ưu độ chính xác đáng kể.',
  'Model Context Protocol', ARRAY['Tool Design', 'Single-purpose Tools', 'MCP Tools']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca51', 'cca-f', 51,
  'Your team''s CI/CD pipeline is configured to run Claude Code for automated code review on every pull request. During the first test run, the pipeline job hangs indefinitely and eventually times out without producing any output. What is the most likely cause of this behavior?',
  '[{"key":"A","text":"The pull request diff exceeded the context window limit causing Claude Code to fail silently"},{"key":"B","text":"Claude Code is waiting for interactive input because the -p flag was not included in the command"},{"key":"C","text":"The CLAUDE.md file is missing review criteria causing Claude Code to loop indefinitely while searching for instructions"},{"key":"D","text":"The --output-format flag was not specified preventing Claude Code from writing output to stdout"}]'::jsonb,
  ARRAY['B']::text[],
  'Trong môi trường CI/CD không có bàn phím phản hồi, cờ -p (hoặc --print) là bắt buộc để in kết quả và kết thúc tiến trình.',
  'Claude Code CLI', ARRAY['CI/CD Flags', 'Claude Code', 'Troubleshooting']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca52', 'cca-f', 52,
  'Your company policy requires that any refund exceeding $500 must be approved by a human supervisor before processing. During testing, you discover that prompt instructions alone occasionally fail to prevent the agent from calling issue_refund for amounts above the threshold. Which implementation guarantees this business rule is enforced without exception?',
  '[{"key":"A","text":"Implement a tool call interception hook that inspects the amount parameter on issue_refund calls, blocks those exceeding $500, and redirects the workflow to handoff_to_human"},{"key":"B","text":"Strengthen the system prompt by adding explicit instructions with bold emphasis: \"NEVER issue refunds above $500 without human approval\""},{"key":"C","text":"Include three few-shot examples in the prompt demonstrating correct escalation for high-value refunds"},{"key":"D","text":"Set the issue_refund tool''s JSON schema to define a maximum value constraint of 500 on the amount field"}]'::jsonb,
  ARRAY['A']::text[],
  'Sử dụng một bộ chặn cuộc gọi công cụ (interception hook) tại tầng ứng dụng để kiểm soát tham số đầu vào của issue_refund là rào cản tuyệt đối.',
  'Security & Guardrails', ARRAY['Interception Hook', 'Deterministic Safety', 'Guardrails']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca53', 'cca-f', 53,
  'Your team needs to connect Claude Code to both Jira for issue tracking and a proprietary internal approval workflow system that is unique to your organization. A developer proposes building custom MCP servers for both integrations to keep the codebase consistent. What is the recommended approach?',
  '[{"key":"A","text":"Use a community MCP server for Jira and build a custom MCP server only for the proprietary approval workflow"},{"key":"B","text":"Build a single custom MCP server that consolidates both Jira and approval workflow interactions behind a unified interface"},{"key":"C","text":"Use community MCP servers for both integrations by adapting the proprietary approval workflow API to match an existing community server''s interface"},{"key":"D","text":"Build custom MCP servers for both integrations to ensure consistent implementation patterns and full control over tool behavior"}]'::jsonb,
  ARRAY['A']::text[],
  'Chiến lược lai: tận dụng các giải pháp cộng đồng đã được tối ưu hóa cho công cụ chuẩn (Jira), chỉ phát triển custom cho hệ thống nội bộ để tiết kiệm.',
  'Model Context Protocol', ARRAY['Community Server', 'MCP Architecture', 'Best Practices']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca54', 'cca-f', 54,
  'Your multi-agent research system produces a synthesis report that combines findings from web search and document analysis subagents. Two credible sources provide conflicting market size statistics, and the synthesis subagent must produce the final output. How should the report handle this conflict?',
  '[{"key":"A","text":"Average the two statistics to produce a single balanced figure and cite both sources"},{"key":"B","text":"Omit the market size data point entirely to avoid presenting potentially inaccurate information"},{"key":"C","text":"Present both statistics with full source attribution in a section that explicitly distinguishes contested findings from well-established ones, preserving each source''s methodological context"},{"key":"D","text":"Select the statistic from the most authoritative source based on publication recency and discard the conflicting value"}]'::jsonb,
  ARRAY['C']::text[],
  'Tính trung thực học thuật đòi hỏi hiển thị đồng thời cả hai thông tin mâu thuẫn kèm trích dẫn nguồn riêng biệt để người dùng tự đánh giá.',
  'Evaluation & Bias', ARRAY['Conflict Resolution', 'Synthesis', 'Factual Accuracy']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca55', 'cca-f', 55,
  'Your team wants to enforce a universal rule that all generated TypeScript code must use named exports instead of default exports. This standard should apply automatically every time Claude Code writes or modifies any TypeScript file in the project. Where should this convention be defined?',
  '[{"key":"A","text":"In a user-scoped command under ~/.claude/commands/ that each developer runs at the start of their session"},{"key":"B","text":"In the project-level CLAUDE.md or a .claude/rules/ file so it is always loaded for every interaction"},{"key":"C","text":"In a custom slash command stored in .claude/commands/ that developers must remember to call before each task"},{"key":"D","text":"In a skill file under .claude/skills/ with a SKILL.md that engineers invoke on demand before writing code"}]'::jsonb,
  ARRAY['B']::text[],
  'Quy chuẩn tự động hóa toàn dự án cần được khai báo ở tệp CLAUDE.md gốc hoặc quy tắc ''.claude/rules/'' để được nạp vô điều kiện trong mọi phiên.',
  'Claude Code CLI', ARRAY['Named Exports', 'Global Configuration', 'Claude Code']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca56', 'cca-f', 56,
  'Currently, your customer service agent has access to fetch_customer and get_order, but both tools have minimal one-line descriptions: "Fetches customer data" and "Gets order information." When a customer asks about a recent purchase, the agent inconsistently alternates between calling fetch_customer and get_order. What is the primary reason for this unreliable tool selection?',
  '[{"key":"A","text":"The tool names are too similar in length, causing the model to confuse them regardless of their descriptions"},{"key":"B","text":"Tool descriptions are the primary mechanism the model uses for tool selection, and the minimal descriptions do not provide enough information to differentiate when each tool should be used"},{"key":"C","text":"The model requires tool_choice to be set to forced selection before it can reliably distinguish between any two tools"},{"key":"D","text":"The agent''s context window is exhausted by other content, leaving insufficient space to load both tool definitions simultaneously"}]'::jsonb,
  ARRAY['B']::text[],
  'Mô tả công cụ chính là la bàn chỉ dẫn LLM gọi kích hoạt. Mô tả một dòng sơ sài sẽ làm suy giảm nghiêm trọng khả năng phân định ngữ cảnh của tác nhân.',
  'Model Context Protocol', ARRAY['Tool Selection', 'Descriptions', 'MCP Tools']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca57', 'cca-f', 57,
  'A CI pipeline needs to run Claude Code to analyze pull requests and produce machine-parseable review findings that a downstream script posts as inline comments. Which combination of CLI flags ensures the output conforms to a predefined JSON structure?',
  '[{"key":"A","text":"--output-format json combined with --json-schema"},{"key":"B","text":"-p combined with --json-schema only"},{"key":"C","text":"--output-format structured combined with --schema-file"},{"key":"D","text":"--format json-strict combined with --validate-output"}]'::jsonb,
  ARRAY['A']::text[],
  'Kết hợp cờ --output-format json cùng định nghĩa --json-schema là cú pháp chuẩn mực để ép Claude Code CLI xuất ra chuỗi JSON cấu trúc chuẩn.',
  'Claude Code CLI', ARRAY['Structured JSON', 'CLI Flags', 'Claude Code']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca58', 'cca-f', 58,
  'Your support agent calls a lookup_order MCP tool that returns over 40 fields per order, including shipping carrier details, warehouse codes, and internal tracking metadata. The agent only needs 5 fields to process a return. After several order lookups in one session, response quality noticeably declines. Which approach best addresses this issue?',
  '[{"key":"A","text":"Switch to a model with a larger context window so verbose tool outputs can be accommodated without impacting quality"},{"key":"B","text":"Limit the agent to a maximum of three order lookups per session to prevent excessive context accumulation"},{"key":"C","text":"Trim the tool output to include only return-relevant fields before appending the result to conversation context"},{"key":"D","text":"Summarize the entire conversation history periodically using progressive summarization to reclaim token budget"}]'::jsonb,
  ARRAY['C']::text[],
  'Chủ động loại bỏ (trim) thông tin dư thừa của công cụ trước khi nạp vào lịch sử trò chuyện là best practice giúp hạn chế loãng ngữ cảnh.',
  'Model Context Protocol', ARRAY['Context Optimization', 'Tool Output Trim', 'Tokens']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca59', 'cca-f', 59,
  'Your team is using Claude Code to implement a new CSV parsing module that must handle complex edge cases, including quoted delimiters, multiline fields, and malformed rows. Requirements are well-defined but numerous. Which approach best supports iterative refinement of the implementation?',
  '[{"key":"A","text":"Describe all edge cases in a single prompt and request that Claude Code generate both the implementation and tests in one pass"},{"key":"B","text":"Write a comprehensive test suite covering expected behavior, edge cases, and malformed input handling first, then iterate by sharing test failures with Claude Code to guide corrections"},{"key":"C","text":"Implement the module first without tests, then ask Claude Code to review its own output for issues in the same session"},{"key":"D","text":"Generate the implementation with Claude Code, manually test each edge case by running the code, and file separate bug reports for each failure"}]'::jsonb,
  ARRAY['B']::text[],
  'Sử dụng TDD (phát triển hướng kiểm thử) tạo ra một vòng phản hồi chất lượng cực cao giúp tác nhân AI tự gỡ lỗi và hoàn thiện tính năng.',
  'Claude Code CLI', ARRAY['TDD', 'Iterative Refinement', 'Claude Code']::text[]
) ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES
(
  'cca60', 'cca-f', 60,
  'A new engineer on the team reports that Claude Code is not following the project''s API naming conventions during code generation, even though other engineers on the same repository see the conventions applied correctly. What is the most effective first diagnostic step to identify the cause of this inconsistency?',
  '[{"key":"A","text":"Reinstall Claude Code on the engineer''s machine to clear any corrupted cached configurations"},{"key":"B","text":"Add the API naming conventions as inline comments in every source file so Claude Code reads them directly"},{"key":"C","text":"Move all project configuration from .claude/rules/ into a single root-level CLAUDE.md to simplify the file structure"},{"key":"D","text":"Ask the engineer to run the /memory command to verify which memory files are currently loaded in their session"}]'::jsonb,
  ARRAY['D']::text[],
  'Lệnh chẩn đoán hệ thống /memory trong Claude Code giúp hiển thị tức thì các file quy tắc có đang được nạp đúng vào phiên hội thoại hiện tại.',
  'Claude Code CLI', ARRAY['/memory', 'Diagnostics', 'Claude Code']::text[]
) ON CONFLICT (id) DO NOTHING;
