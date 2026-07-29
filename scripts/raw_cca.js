export const RAW_DATA = [
    {
        "id": 1,
        "question": "Your pipeline reviews every PR using a single API call with a static prompt containing the diff and full text of each changed file — unchanged files are not included. Reviews are posted asynchronously and don't block PR creation. Developers report that reviews consistently miss bugs involving cross-file interactions — for example, a PR renames a function's parameters but the review doesn't flag callers in unchanged files that still use the old argument order. Evaluation shows cross-file bugs account for 35% of production incidents from reviewed PRs. What is the most effective change to your review design?",
        "options": {
            "A": "Redesign the review as a turn-limited agentic task where the model can read files and search the codebase via tools, following references to verify cross-file findings.",
            "B": "Add chain-of-thought instructions asking the model to list all external references in the diff, then reason step-by-step about how each change might affect callers in other files.",
            "C": "Run parallel review passes per changed file with direct dependents included in each pass, then aggregate and deduplicate findings using a final summarization call.",
            "D": "Use static analysis to build a dependency graph of changed code, then expand the prompt to include all files within two dependency hops of any changed file."
        },
        "correct": "A",
        "explanation": "The failure is a missing-context problem: callers live in unchanged files the static prompt never includes, so chain-of-thought (B) cannot help the model reason about code it cannot see, and static heuristics (C, D) bloat context while still missing dynamic or multi-hop references. Anthropic's agent guidance favors agentic search — letting the model retrieve exactly the context it needs via file-read/search tools — and the asynchronous, nonblocking review pipeline tolerates the added latency, while a turn limit bounds cost."
    },
    {
        "id": 2,
        "question": "An engineer asks your agent to add comprehensive tests to a legacy codebase with 200 files and minimal existing test coverage. The engineer hasn't specified which modules to prioritize. How should the agent decompose this open-ended task?",
        "options": {
            "A": "Systematically read all 200 files to create a complete function inventory before writing any tests, ensuring the testing plan accounts for every function before beginning.",
            "B": "Create a fixed testing schedule upfront based on directory structure, allocating equal effort to each top-level directory regardless of code complexity or business importance.",
            "C": "Start writing tests for the first module alphabetically, using test failures and imports to discover related files organically.",
            "D": "Use Glob and Grep to map codebase structure, identify heavily-coupled modules, create a prioritized plan for high-impact areas, and revise as dependencies are discovered."
        },
        "correct": "D",
        "explanation": "Anthropic's agent best practices favor efficient context gathering with search tools (Glob/Grep) over exhaustively reading every file, which would waste context and time. Prioritizing high-impact, heavily-coupled modules and iteratively revising the plan as dependencies surface is the correct way to decompose an open-ended task; A is wasteful, B ignores impact/complexity, and C is arbitrary and unplanned."
    },
    {
        "id": 3,
        "question": "An engineer submits two requests: • Request A: \"Rename the getUserData function to fetchUserProfile everywhere it's used.\" • Request B: \"Improve error handling throughout the data processing module—add try/catch blocks, meaningful error messages, and ensure failures don't silently corrupt data.\" For which request does specifying an explicit multi-phase workflow (such as analyze propose implement with review) most improve outcome quality?",
        "options": {
            "A": "Request B, the error handling task",
            "B": "Both requests benefit equally",
            "C": "Request A, the function rename task",
            "D": "Neither request benefits significantly"
        },
        "correct": "A",
        "explanation": "Request B is open-ended and judgment-heavy — \"improve error handling\" requires analyzing current behavior, deciding where try/catch belongs, and choosing meaningful messages, so an explicit analyze propose implement-with-review workflow materially raises quality and catches bad design before code changes. Request A is a mechanical, well-defined rename that a simple find-and-replace-style execution handles fine, so the multi-phase structure adds little."
    },
    {
        "id": 4,
        "question": "Your code review assistant needs to analyze pull requests and provide feedback on three aspects: code style compliance, potential security issues, and documentation completeness. Each aspect requires reading files, running analysis tools, and generating a report section. The review process follows the same three-step workflow for every PR. Which task decomposition pattern is most appropriate for this workflow?",
        "options": {
            "A": "Single comprehensive prompt—include all instructions in one prompt and let the model handle all three aspects simultaneously.",
            "B": "Routing—classify each PR by type (feature, bugfix, refactor) first, then route to different review prompts optimized for that category.",
            "C": "Prompt chaining—break the review into sequential steps where each aspect (style, security, documentation) is analyzed separately, with outputs combined in a final synthesis step.",
            "D": "Orchestrator-workers—have a central LLM analyze each PR to dynamically determine which checks are needed, then delegate to specialized worker LLMs for each identified subtask."
        },
        "correct": "C",
        "explanation": "The scenario explicitly states the review \"follows the same three-step workflow for every PR,\" which per Anthropic's \"Building Effective Agents\" guidance is the textbook case for the prompt chaining workflow: a fixed, predictable sequence of subtasks each handled by a focused prompt, then synthesized. Orchestrator-workers (D) is only warranted when the needed subtasks vary unpredictably per input, and routing (B) applies when inputs fall into distinct categories needing different handling—neither fits a fixed, identical workflow."
    },
    {
        "id": 5,
        "question": "Your multi-agent research pipeline crashed after processing 12 of 28 documents. The web search agent had identified relevant sources, the document analyzer had partially completed extraction, and the synthesizer had begun pattern identification. You need to resume processing without repeating work or losing fidelity of prior findings. What state management approach best balances information fidelity with context efficiency when restoring agent state?",
        "options": {
            "A": "Have each agent maintain its own persistent state file and reload it independently at the start of each session.",
            "B": "Persist the coordinator's conversation log containing all task delegations and responses, providing this to agents when resuming.",
            "C": "Index all agent outputs in a shared vector store. When resuming, each agent queries the store using semantic search to retrieve relevant prior findings.",
            "D": "Have each agent persist a structured export to a known location. On resume, the coordinator loads the manifest and injects relevant state into agent prompts."
        },
        "correct": "D",
        "explanation": "Anthropic's multi-agent best practices recommend persisting structured artifacts to external storage and having the orchestrator selectively re-inject only the relevant state into each subagent's context. This preserves fidelity (lossless structured exports plus a manifest of completed work) while staying context-efficient, whereas A lacks coordinated resume logic, B floods agents with an entire conversation log, and C's semantic search is lossy and may miss or garble prior findings."
    },
    {
        "id": 6,
        "question": "Analysis reveals the coordinator invokes the web search subagent, waits for its response, then invokes the document analysis subagent and waits again. These tasks are independent—neither requires the other's output. How should you modify the system to run these subagents concurrently?",
        "options": {
            "A": "Switch both subagents to use a Haiku-tier model instead of Sonnet to reduce their individual execution time.",
            "B": "Create an async orchestration layer outside the agent that spawns parallel threads, each running a separate coordinator-subagent pair, then aggregates results.",
            "C": "Structure the coordinator to emit both Task tool calls (for web search and document analysis) in a single response message rather than across separate conversation turns.",
            "D": "Add detailed instructions to the coordinator's system prompt explaining the performance benefits of parallel execution and requesting it invoke both subagents at the same time."
        },
        "correct": "C",
        "explanation": "In Claude's agent architecture, subagents run concurrently when the coordinator emits multiple Task tool calls in a single assistant message — the harness executes parallel tool_use blocks from the same turn simultaneously. Option A only speeds up each serial step, B adds unnecessary external infrastructure duplicating what the agent loop already supports, and D merely explains/requests parallelism without ensuring the structural mechanism (same-message tool calls) that actually produces concurrent execution."
    },
    {
        "id": 7,
        "question": "The coordinator agent has AgentDefinitions configured for all four specialized subagents, each with appropriate descriptions, prompts, and tool restrictions. During testing, you notice the coordinator correctly reasons about when to delegate—it generates messages like \"I'll ask the web search agent to find sources on this topic\"—but no subagent execution ever occurs. The coordinator then proceeds as if the delegation happened and continues with incomplete information. Logs show no errors. What is the most likely cause?",
        "options": {
            "A": "The AgentDefinitions are configured correctly, but the coordinator's system prompt doesn't explicitly list the available subagent types, preventing the model from knowing they can be invoked.",
            "B": "Subagent context isolation means task descriptions from the coordinator don't automatically reach subagents; you need to configure explicit context forwarding in ClaudeAgentOptions.",
            "C": "The coordinator's max_tokens setting is too low, causing the Task tool invocation to be truncated before the subagent type parameter can be specified.",
            "D": "The coordinator's allowedTools configuration doesn't include \"Task\", so while it can reason about delegation, it cannot invoke the tool required to spawn subagents."
        },
        "correct": "D",
        "explanation": "In the Claude Agent SDK, subagents defined via AgentDefinitions are launched through the Task tool; if allowedTools omits \"Task\", the coordinator can still verbally reason about delegating but has no mechanism to actually spawn subagents, and it silently continues without them—matching the symptom of no execution and no errors. Truncated max_tokens (C) or missing prompt listings (A) would produce errors or different behavior, and context isolation (B) doesn't prevent invocation."
    },
    {
        "id": 8,
        "question": "A landmark case citing 12 precedents takes over 3 minutes to analyze completely. What's the most effective way to reduce this latency while preserving the coordinator's ability to monitor and debug the system?",
        "options": {
            "A": "Have the coordinator spawn parallel document analysis subagents, each handling a subset of precedents, then aggregate results before synthesis",
            "B": "Enable the document analysis subagent to spawn its own specialized subagents dynamically when it encounters cases with many citations",
            "C": "Create a recursive agent hierarchy where analysis agents subdivide work among child agents until reaching single-precedent granularity",
            "D": "Implement a message queue where precedent analysis tasks are processed asynchronously by a pool of worker agents"
        },
        "correct": "A",
        "explanation": "Anthropic's recommended multi-agent design is the orchestrator-worker pattern with a flat hierarchy: the coordinator itself spawns parallel subagents and aggregates their results, which cuts latency through parallelism while keeping all spawning, monitoring, and debugging centralized in one place. Options B and C create nested/recursive agent hierarchies that severely degrade observability and debuggability, and D introduces asynchronous queue infrastructure that decouples work from the coordinator's direct visibility."
    },
    {
        "id": 9,
        "question": "Investigation shows that while the web search and document analysis agents correctly attach citations to their outputs, the synthesis agent loses track of which sources support which conclusions when combining findings. What's the most effective architectural change?",
        "options": {
            "A": "Have the coordinator inject source identifier prefixes into text before each handoff, then parse these prefixes at report generation to reconstruct citations.",
            "B": "Maintain complete transcripts of all subagent interactions and add a citation-resolution agent to analyze logs and determine attributions before report generation.",
            "C": "Require all subagents to output structured claim-source mappings that the synthesis agent must preserve and merge when combining findings from multiple sources.",
            "D": "Add a verification step where the report generator uses semantic similarity matching against original sources to reconstruct which claims came from which documents."
        },
        "correct": "C",
        "explanation": "The failure is information loss at the synthesis stage, so the fix is to carry attribution as structured data end-to-end: subagents emit explicit claim-source mappings and the synthesis agent is required to preserve and merge them. This matches Anthropic's multi-agent best practice of structured outputs over fragile text-prefix conventions (A), costly post-hoc log analysis (B), or unreliable semantic-similarity reconstruction (D)."
    },
    {
        "id": 10,
        "question": "Users report that final reports sometimes lack depth on specific subtopics. Investigation shows that the document analysis agent frequently identifies gaps—for instance, noting \"the retrieved sources discuss API authentication but lack details on token refresh patterns\"—but under the current strict pipeline, this insight isn't actionable since search has already completed. What's the most effective architectural change?",
        "options": {
            "A": "Have the coordinator review analysis output for gap indicators and re-invoke search with gapinformed queries when gaps are detected.",
            "B": "Have the synthesis agent attach confidence scores to each section and flag areas with insufficient coverage for manual review.",
            "C": "Add a research planning agent before the search phase that decomposes topics into specific sub- questions.",
            "D": "Have the analysis agent report specific gaps to the coordinator, which triggers targeted searches and re-invokes analysis until sufficient."
        },
        "correct": "D",
        "explanation": "The core problem is a rigid one-way pipeline where gap insights arrive after search is finished, so the fix is a closed feedback loop: the analysis agent surfaces its specific gaps as structured output to the coordinator, which triggers targeted follow-up searches and re-runs analysis iteratively until coverage is sufficient. This matches Anthropic's orchestrator-worker agent pattern of iterating until a verifiable success criterion is met; option A is a weaker partial loop (coordinator inferring gaps from output, no re-analysis until sufficiency), while B and C don't make the gap insight actionable at runtime."
    }
];
