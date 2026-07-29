RAW_DATA_2 = [
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
        "explanation": "In Claude's agent architecture, subagents run concurrently when the coordinator emits multiple Task tool calls in a single assistant message — the harness executes parallel tool_use blocks from the same turn simultaneously."
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
        "explanation": "In the Claude Agent SDK, subagents defined via AgentDefinitions are launched through the Task tool; if allowedTools omits \"Task\", the coordinator can still verbally reason about delegating but has no mechanism to actually spawn subagents, and it silently continues without them."
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
        "explanation": "Anthropic's recommended multi-agent design is the orchestrator-worker pattern with a flat hierarchy: the coordinator itself spawns parallel subagents and aggregates their results, which cuts latency through parallelism while keeping all spawning, monitoring, and debugging centralized in one place."
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
        "explanation": "The failure is information loss at the synthesis stage, so the fix is to carry attribution as structured data end-to-end: subagents emit explicit claim-source mappings and the synthesis agent is required to preserve and merge them."
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
        "explanation": "The core problem is a rigid one-way pipeline where gap insights arrive after search is finished, so the fix is a closed feedback loop: the analysis agent surfaces its specific gaps as structured output to the coordinator, which triggers targeted follow-up searches and re-runs analysis iteratively until coverage is sufficient."
    },
    {
        "id": 11,
        "question": "After the web search and document analysis subagents complete their tasks, the coordinator needs to spawn the synthesis subagent to synthesize the findings. What is the correct approach for providing the synthesis subagent with the information it needs?",
        "options": {
            "A": "Provide the subagent with tool definitions that allow it to request outputs from other subagents via callbacks",
            "B": "Include the complete findings from both subagents directly in the synthesis subagent's prompt",
            "C": "Pass reference identifiers and configure the subagent with read access to a shared memory store where other subagents deposited their results",
            "D": "Spawn the subagent with only a brief task description, relying on automatic context inheritance from the coordinator"
        },
        "correct": "C",
        "explanation": "Anthropic's multi-agent best practice is for subagents to deposit their full outputs as artifacts in external/shared storage and pass lightweight references, so the synthesis subagent reads the prior results directly rather than receiving lossy or token-heavy copies through prompts."
    },
    {
        "id": 12,
        "question": "A user is expanding the research system beyond its single web search agent by adding specialized data sources. They add a financial API agent that returns structured JSON with revenue, margins, and growth rates; a news monitoring agent that returns prose summaries of recent developments; and a patent analysis agent that returns structured lists of technology areas. The synthesis agent combines these into executive briefings. Currently, it converts everything to bullet points, causing financial comparisons to lose tabular clarity and news summaries to lose narrative flow. What change would most improve briefing quality?",
        "options": {
            "A": "Add a format conversion layer between subagents and synthesis that transforms all outputs to a common intermediate representation",
            "B": "Update the synthesis agent to render each content type appropriately—financial data as tables, news as prose",
            "C": "Standardize all subagent outputs to prose summaries with inline citations",
            "D": "Standardize all subagent outputs to JSON with fields for claim, evidence, source, and confidence"
        },
        "correct": "B",
        "explanation": "The quality loss comes from flattening heterogeneous content into one uniform format (bullets); options A, C, and D just repeat that mistake with a different uniform representation."
    },
    {
        "id": 13,
        "question": "\"What year was the Paris Climate Agreement signed?\") traverse all four subagents sequentially, consuming 40+ seconds and significant tokens per query. Complex comparative research benefits from the full pipeline. Your query distribution is diverse and evolving as users discover new applications. What's the most effective approach to optimize for varying query complexity?",
        "options": {
            "A": "Create a fast-path for factual questions that bypasses subagents entirely, routing all other queries through the complete pipeline to ensure research thoroughness.",
            "B": "Implement pattern-based routing that categorizes queries by structure (single-fact vs. comparative vs. analytical) and maps each category to a predefined subagent combination.",
            "C": "Train a query complexity classifier on labeled historical data to predict optimal subagent combinations, retraining periodically as query patterns evolve.",
            "D": "Have the coordinator analyze each query and dynamically decide which subagents to invoke based on its assessment of query requirements."
        },
        "correct": "D",
        "explanation": "Anthropic's multi-agent research guidance recommends having the lead/orchestrator agent scale effort to query complexity, dynamically deciding how many and which subagents to invoke per query."
    },
    {
        "id": 14,
        "question": "The coordinator provides detailed step-by-step instructions to the web search subagent, specifying exact search queries, source priorities, and date filters. Production monitoring reveals three issues: (1) the subagent reports \"insufficient results\" rather than trying alternative approaches when pre-specified searches fail, (2) research quality drops for emerging topics that don't match expected patterns, and (3) the subagent rarely surfaces valuable tangential sources. What's the most effective way to improve subagent adaptability?",
        "options": {
            "A": "Specify research goals and quality criteria (coverage breadth, source diversity, recency) rather than procedural steps, letting the subagent determine its search strategy.",
            "B": "Remove procedural details entirely, delegating with simple goals like \"research X thoroughly\" and relying on the subagent's general capabilities.",
            "C": "Add explicit fallback directives to the detailed instructions: \"If specified searches yield fewer than N results, attempt alternative query formulations before reporting failure.\"",
            "D": "Implement a topic classification step where the coordinator categorizes requests as \"well-defined\" or \"exploratory\" and uses different instruction styles for each category."
        },
        "correct": "A",
        "explanation": "Anthropic's agent and multi-agent research guidance recommends delegating with clear objectives and success/quality criteria rather than prescriptive procedural scripts."
    },
    {
        "id": 15,
        "question": "The document analysis agent has a single analyze_document tool that takes a document and a free-text instruction parameter. During evaluation, requests like \"extract the key financial metrics\" often return narrative summaries, while \"summarize the methodology\" sometimes returns raw data tables. The synthesis agent reports that 35% of analysis results require re-requests with clarified instructions. What's the most effective way to improve reliability?",
        "options": {
            "A": "Split the generic tool into purpose-specific tools — extract_data_points, summarize_content, verify_claim_against_source — each with defined input/output contracts",
            "B": "Have the coordinator pre-classify each analysis request before passing instructions to the document analysis agent",
            "C": "Keep the single tool but add an analysis_type enum parameter requiring explicit selection between extraction, summarization, and verification modes",
            "D": "Enhance the tool description with detailed examples showing how different instruction phrasings should map to different output formats"
        },
        "correct": "A",
        "explanation": "Anthropic's tool-design guidance for agents recommends narrowly-scoped, purpose-specific tools with explicit input/output contracts rather than one generic free-text tool."
    }
]
