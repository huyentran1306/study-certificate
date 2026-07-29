export const BATCH_2 = [
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
        "explanation": "Anthropic's multi-agent best practice is for subagents to deposit their full outputs as artifacts in external/shared storage and pass lightweight references, so the synthesis subagent reads the prior results directly rather than receiving lossy or token-heavy copies through prompts. Callbacks between subagents (A) and automatic context inheritance (D) don't exist in this architecture, and inlining complete findings into the prompt (B) bloats context and risks information loss."
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
        "explanation": "The quality loss comes from flattening heterogeneous content into one uniform format (bullets); options A, C, and D just repeat that mistake with a different uniform representation. The best fix is to make the synthesis agent format-aware, rendering each content type in its natural form—tables for financial comparisons, prose for news narratives—preserving the strengths of each subagent's output."
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
        "explanation": "Anthropic's multi-agent research guidance recommends having the lead/orchestrator agent scale effort to query complexity, dynamically deciding how many and which subagents to invoke per query. Static fast-paths (A), hand-coded pattern routing (B), and a trained classifier needing labeled data and retraining (C) all break down as the query distribution is diverse and evolving, whereas the coordinator's LLM-based judgment adapts naturally without maintenance."
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
        "explanation": "Anthropic's agent and multi-agent research guidance recommends delegating with clear objectives and success/quality criteria rather than prescriptive procedural scripts, letting the capable subagent adapt its own search strategy — which directly fixes all three observed failures. Option B removes necessary guidance entirely (under- specified delegation is a known failure mode), C patches only failure (1), and D adds coordinator complexity while keeping the brittle scripted approach."
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
        "explanation": "Anthropic's tool-design guidance for agents recommends narrowly-scoped, purpose-specific tools with explicit input/output contracts rather than one generic free-text tool. The failures here are output-format ambiguity across distinct task types (extraction vs. summarization vs. verification), which splitting into dedicated tools with defined contracts fixes structurally; an enum (C) or better descriptions (D) still leave a single loosely-specified output contract, and pre-classification (B) doesn't change the unreliable tool interface."
    },
    {
        "id": 16,
        "question": "After the web search agent and document analysis agent complete their tasks, the coordinator invokes the synthesis agent. However, the synthesis agent responds that it cannot complete the task because no research findings were provided. What is the most likely cause of this issue?",
        "options": {
            "A": "The synthesis agent's context window is not large enough to hold the combined outputs from both previous agents.",
            "B": "The synthesis agent needs tools that can fetch results directly from the other agents' conversation histories.",
            "C": "The subagents need to share a single API connection to enable automatic context sharing between invocations.",
            "D": "The coordinator did not include the outputs from the previous agents in the synthesis agent's prompt."
        },
        "correct": "D",
        "explanation": "In a coordinator/orchestrator multi-agent pattern, each subagent call is a stateless API invocation with its own isolated context — there is no automatic context sharing between agents. The coordinator must explicitly inject the previous agents' outputs into the synthesis agent's prompt; failing to do so produces exactly this \"no research findings were provided\" response. Options A–C are wrong: a context-window overflow would cause a different error, and neither cross-agent history-fetching tools nor a shared API connection are how context is passed between agents."
    },
    {
        "id": 17,
        "question": "Production monitoring shows that follow-up queries like \"summarize what we learned about market trends\" consistently take 40+ seconds. Investigation reveals the coordinator spawns the synthesis subagent for each summarization request, passing 80K+ tokens of accumulated findings. The coordinator already has these findings in its context from orchestrating the research. What's the most effective way to improve response time for these follow-up summaries?",
        "options": {
            "A": "Pre-generate and cache summaries at multiple granularities whenever new findings accumulate.",
            "B": "Enable prompt caching on the synthesis subagent to reduce the overhead of repeatedly transferring the same research findings.",
            "C": "Have the coordinator handle straightforward summarization requests directly using its existing context, reserving subagent spawning for complex analytical tasks.",
            "D": "Spawn the synthesis subagent with reduced context and have it request specific findings from the coordinator on-demand."
        },
        "correct": "C",
        "explanation": "The coordinator already has all the findings in its context, so spawning a subagent and re-transferring 80K+ tokens per summary is pure latency overhead. Anthropic's multi-agent best practice is to delegate to subagents only when separate context windows or parallelism add value; simple summarization should be handled directly by the orchestrator, eliminating both the spawn cost and the token transfer."
    },
    {
        "id": 18,
        "question": "The synthesis agent receives summarized findings from the web search and document analysis agents, then passes a consolidated summary to the report generator. During testing, you discover the generated reports make factual claims without proper citations—the report generator cannot attribute statements to their original sources because that metadata was lost during the summarization steps. What's the most effective approach to ensure proper source attribution in the final reports?",
        "options": {
            "A": "Instruct the synthesis agent to embed source references inline within its summary text using a consistent citation format.",
            "B": "Have the report generator query the web search agent to re-locate sources for claims in the final report.",
            "C": "Skip summarization and pass full raw outputs from web search and document analysis directly to the report generator.",
            "D": "Have each agent output structured data separating content summaries from source metadata (URLs, document names, page numbers)."
        },
        "correct": "D",
        "explanation": "Structured outputs that explicitly separate summarized content from source metadata (URLs, document names, page numbers) guarantee provenance survives every handoff in the pipeline, which is the Anthropicrecommended pattern for multi-agent data flow. Inline citations in free text (A) are easily lost or mangled during downstream summarization, re-locating sources after the fact (B) is unreliable and can mis-attribute claims, and passing raw outputs (C) defeats the purpose of summarization and bloats the report generator's context."
    },
    {
        "id": 19,
        "question": "After the web search agent finds 25 sources (120K tokens of raw content), the document analysis agent extracts key insights (15K tokens), and the synthesis agent produces a coherent narrative draft (3K tokens), the coordinator must pass context to the report generation agent for the final output with proper source citations. What context-passing strategy provides the best balance of completeness and efficiency?",
        "options": {
            "A": "Pass only the synthesis draft and have a separate post-processing pipeline match claims to sources and insert citations after the report is generated.",
            "B": "Pass the synthesis draft along with a structured source index that maps key claims to their source URLs and relevant excerpts.",
            "C": "Pass a condensed summary of all prior stages that preserves the main findings and attributes them to sources by name only.",
            "D": "Pass the full accumulated context from all prior agents."
        },
        "correct": "B",
        "explanation": "Why it's correct: B. Correct. The synthesis gives the narrative; the source index gives the report generator exactly the binding it needs to cite without re-reading 120K tokens of raw content. Option breakdown: • A: Post-hoc matching is fragile — without the mapping the model used, you can't reliably bind claims to the right source. Hallucinated or misattributed citations are the usual failure mode. • B: Correct. The synthesis gives the narrative; the source index gives the report generator exactly the binding it needs to cite without re-reading 120K tokens of raw content. • C: Name-only attribution loses URLs and excerpts, so the report generator can't quote or verify — and 'by name only' tends to drift into vague citations. • D: Maximum completeness but wasteful — 120K+ tokens of raw search content is mostly irrelevant noise at the report-generation stage."
    },
    {
        "id": 20,
        "question": "The web search agent has gathered several relevant sources for a research topic. The document analysis agent now needs to examine these sources. How does information typically flow between these two specialized subagents?",
        "options": {
            "A": "The agents communicate through an event-driven message queue, with the document analysis agent subscribing to web search completion events.",
            "B": "The web search agent directly invokes the document analysis agent, passing the discovered sources as parameters.",
            "C": "The coordinator agent receives the web search agent's output and includes relevant findings in the prompt when invoking the document analysis agent.",
            "D": "Both agents access a shared memory store where the web search agent writes findings and the document analysis agent reads them."
        },
        "correct": "C",
        "explanation": "Why it's correct: C. Correct. In an orchestrator-worker pattern the coordinator is the hub. It collects each subagent's output and explicitly forwards the relevant parts into the next subagent's prompt. Option breakdown: • A: Event buses aren't part of the Claude subagent model. Subagents don't publish/subscribe to each other directly. • B: Subagents are isolated — they can't directly call sibling subagents. That would also tightly couple them and defeat the orchestrator pattern. • C: Correct. In an orchestrator-worker pattern the coordinator is the hub. It collects each subagent's output and explicitly forwards the relevant parts into the next subagent's prompt. • D: A shared store can be layered in as an optimization, but it's not how subagents typically communicate — and it introduces stale-read and consistency problems."
    }
];
