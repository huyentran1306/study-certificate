from __future__ import annotations

import argparse
import difflib
import json
import re
import unicodedata
from pathlib import Path

from pypdf import PdfReader


HEADERS = {
    "Claude Certified Architect - Foundations",
    "Internal Use Only",
    "TungNT179",
}


def compact(value: str) -> str:
    value = value.replace("\u00ad", "")
    value = re.sub(r"([A-Za-z])-\s*\n\s*([A-Za-z])", r"\1-\2", value)
    return re.sub(r"\s+", " ", value).strip()


def normalize(value: str) -> str:
    value = unicodedata.normalize("NFKD", value).lower()
    value = value.replace("’", "'").replace("“", '"').replace("”", '"')
    return re.sub(r"[^a-z0-9]+", " ", value).strip()


def similarity(left: str, right: str) -> tuple[float, float]:
    a, b = normalize(left), normalize(right)
    ratio = difflib.SequenceMatcher(None, a, b).ratio()
    aw, bw = set(a.split()), set(b.split())
    containment = len(aw & bw) / max(1, min(len(aw), len(bw)))
    return ratio, containment


def is_duplicate(left: str, right: str) -> bool:
    ratio, containment = similarity(left, right)
    return (
        normalize(left) == normalize(right)
        or ratio >= 0.96
        or containment >= 0.98
        or (ratio >= 0.85 and containment >= 0.84)
    )


def question_metrics(left: dict, right: dict) -> dict:
    def tokens(value: str) -> set[str]:
        return set(normalize(value).split())

    left_question, right_question = tokens(left["text"]), tokens(right["text"])
    left_options = tokens(" ".join(option["text"] for option in left["options"]))
    right_options = tokens(" ".join(option["text"] for option in right["options"]))

    def containment(a: set[str], b: set[str]) -> float:
        return len(a & b) / max(1, min(len(a), len(b)))

    def jaccard(a: set[str], b: set[str]) -> float:
        return len(a & b) / max(1, len(a | b))

    q_containment = containment(left_question, right_question)
    q_jaccard = jaccard(left_question, right_question)
    o_containment = containment(left_options, right_options)
    o_jaccard = jaccard(left_options, right_options)
    option_fingerprint_left = frozenset(normalize(option["text"]) for option in left["options"])
    option_fingerprint_right = frozenset(normalize(option["text"]) for option in right["options"])
    return {
        "question_containment": q_containment,
        "question_jaccard": q_jaccard,
        "option_containment": o_containment,
        "option_jaccard": o_jaccard,
        "combined": (q_containment + q_jaccard + o_containment + o_jaccard) / 4,
        "same_option_set": option_fingerprint_left == option_fingerprint_right,
    }


def duplicate_reason(left: dict, right: dict) -> tuple[str | None, dict]:
    ratio, word_containment = similarity(left["text"], right["text"])
    metrics = question_metrics(left, right)
    metrics.update({"sequence_similarity": ratio, "word_containment": word_containment})
    if is_duplicate(left["text"], right["text"]):
        return "question_text", metrics
    if metrics["same_option_set"] and len(left["options"]) >= 3:
        return "same_options", metrics
    if (
        metrics["combined"] >= 0.77
        and metrics["question_containment"] >= 0.79
        and metrics["option_containment"] >= 0.83
    ):
        return "source_variant", metrics
    return None, metrics


def strip_page_headers(text: str) -> str:
    lines = []
    for line in text.replace("\r", "").split("\n"):
        stripped = line.strip()
        if stripped in HEADERS:
            continue
        lines.append(line)
    return "\n".join(lines).strip()


def parse_pdf(path: Path) -> list[dict]:
    reader = PdfReader(str(path))
    grouped: list[str] = []
    current = ""
    for page in reader.pages:
        text = strip_page_headers(page.extract_text() or "")
        if re.search(r"Question\s+\d+\s*:", text):
            if current:
                grouped.append(current)
            current = text
        elif current:
            current += "\n" + text
    if current:
        grouped.append(current)

    questions = []
    for block in grouped:
        match = re.search(
            r"Question\s+(\d+)\s*:\s*(.*?)\s*Answer choices:\s*(.*?)\s*Correct answer:\s*(.*?)\s*Explanations:\s*(.*)",
            block,
            re.S | re.I,
        )
        if not match:
            raise ValueError(f"Could not parse PDF question block: {block[:160]!r}")
        number = int(match.group(1))
        question = compact(match.group(2))
        option_block = match.group(3)
        option_matches = list(re.finditer(r"(?m)^\s*([A-Z])\.\s+", option_block))
        options = []
        for index, option_match in enumerate(option_matches):
            end = option_matches[index + 1].start() if index + 1 < len(option_matches) else len(option_block)
            options.append({"key": option_match.group(1), "text": compact(option_block[option_match.end():end])})
        correct_match = re.match(r"\s*([A-Z])\.", match.group(4))
        if not correct_match:
            raise ValueError(f"Could not parse correct answer for PDF question {number}")
        explanation_block = match.group(5)
        overall_match = re.search(r"Overall explanation:\s*(.*)", explanation_block, re.S | re.I)
        explanation = compact(overall_match.group(1) if overall_match else explanation_block)
        questions.append(
            {
                "source": "PDF",
                "source_number": number,
                "text": question,
                "options": options,
                "correctAnswers": [correct_match.group(1)],
                "source_explanation": explanation,
            }
        )

    expected = list(range(1, len(questions) + 1))
    actual = [item["source_number"] for item in questions]
    if actual != expected:
        raise ValueError(f"PDF question sequence is invalid: {actual}")
    return questions


def extract_json_array(html: str, constant_name: str) -> list[dict]:
    marker = re.search(rf"const\s+{re.escape(constant_name)}\s*=\s*", html)
    if not marker:
        raise ValueError(f"Could not find {constant_name} in HTML")
    start = html.index("[", marker.end())
    depth = 0
    in_string = False
    escaped = False
    for index in range(start, len(html)):
        char = html[index]
        if in_string:
            if escaped:
                escaped = False
            elif char == "\\":
                escaped = True
            elif char == '"':
                in_string = False
            continue
        if char == '"':
            in_string = True
        elif char == "[":
            depth += 1
        elif char == "]":
            depth -= 1
            if depth == 0:
                return json.loads(html[start:index + 1])
    raise ValueError(f"Unterminated {constant_name} array")


def parse_html(path: Path) -> list[dict]:
    html = path.read_text(encoding="utf-8")
    raw = extract_json_array(html, "RAW_DATA")
    translated = extract_json_array(html, "RAW_DATA_VN")
    if len(raw) != len(translated):
        raise ValueError(f"HTML source arrays differ: {len(raw)} English vs {len(translated)} Vietnamese")

    questions = []
    for source, vn in zip(raw, translated):
        options = [{"key": key, "text": compact(value)} for key, value in source["options"].items()]
        correct = source["correct"] if isinstance(source["correct"], list) else [source["correct"]]
        questions.append(
            {
                "source": "HTML",
                "source_number": int(source["id"]),
                "text": compact(source["question"]),
                "options": options,
                "correctAnswers": correct,
                "source_explanation": compact(source.get("explanation", "")),
                "vn_explanation": compact(vn.get("explanation", "")),
            }
        )
    return questions


def parse_existing(path: Path) -> list[dict]:
    text = path.read_text(encoding="utf-8")
    anchor = text.index("ccaQuestions")
    assignment = text.index("=", anchor)
    start = text.index("[", assignment)
    end = text.rfind("]")
    return json.loads(text[start:end + 1])


def best_match(question: str, candidates: list[dict]) -> tuple[dict | None, float, float]:
    best = None
    best_ratio = -1.0
    best_containment = -1.0
    for candidate in candidates:
        ratio, containment = similarity(question, candidate["text"])
        if (ratio, containment) > (best_ratio, best_containment):
            best, best_ratio, best_containment = candidate, ratio, containment
    return best, best_ratio, best_containment


def classify(text: str) -> tuple[str, list[str]]:
    lowered = text.lower()
    rules = [
        ("Model Context Protocol", ["mcp", "tool call", "tool description", "tool error", "resources", "stdio", "server"]),
        ("Claude Code CLI", ["claude code", "claude.md", "slash command", "hook", "subagent", "grep", "glob", "scratchpad"]),
        ("Prompt Engineering", ["prompt", "few-shot", "system instruction", "structured output", "xml", "hallucinat"]),
        ("Agentic Architecture", ["agent", "orchestrat", "workflow", "routing", "parallel", "coordinator", "multi-agent"]),
        ("Context Management", ["context window", "context", "token", "memory", "compaction", "conversation"]),
        ("Evaluation & Bias", ["evaluat", "benchmark", "metric", "test", "review", "bias", "reliab"]),
        ("Security & Guardrails", ["security", "permission", "prompt injection", "credential", "sensitive", "escalat", "human"]),
    ]
    scored = [(sum(term in lowered for term in terms), category, terms) for category, terms in rules]
    score, category, terms = max(scored)
    if score == 0:
        category, terms = "Claude Architecture & Best Practices", []
    tags = ["CCA-F", category]
    tags.extend(term.upper() if term == "mcp" else term.title() for term in terms if term in lowered)
    return category, list(dict.fromkeys(tags))[:5]


def enrich(items: list[dict], existing: list[dict]) -> None:
    category_aliases = {
        "Agent Architecture": "Agentic Architecture",
        "Architecture & Optimization": "Claude Architecture & Best Practices",
        "Claude Code": "Claude Code CLI",
        "Evaluation & Reliability": "Evaluation & Bias",
        "Security & Safety": "Security & Guardrails",
        "Claude Architecture Foundations": "Claude Architecture & Best Practices",
    }
    for item in items:
        match, ratio, containment = best_match(item["text"], existing)
        if match and (normalize(item["text"]) == normalize(match["text"]) or ratio >= 0.91 or containment >= 0.94):
            item["category"] = category_aliases.get(match.get("category"), match.get("category")) or "Claude Architecture & Best Practices"
            item["tags"] = list(dict.fromkeys(["CCA-F", *(match.get("tags") or [])]))
            item["explanation"] = compact(match.get("explanation") or "")
            item["enrichment_match"] = match.get("questionNumber")
        else:
            item["category"], item["tags"] = classify(item["text"])
            item["explanation"] = ""
            item["enrichment_match"] = None

        if not item["explanation"]:
            item["explanation"] = item.get("vn_explanation") or item["source_explanation"]


def sql_literal(value: str) -> str:
    return "'" + value.replace("'", "''") + "'"


def pg_array(values: list[str]) -> str:
    return "ARRAY[" + ", ".join(sql_literal(value) for value in values) + "]::text[]"


def build_sql(items: list[dict]) -> str:
    lines = [
        "-- Claude Certified Architect - Foundations (CCA-F)",
        "-- Full clean rebuild. PDF questions are first; unique HTML questions follow.",
        f"-- Total deduplicated questions: {len(items)}",
        "",
        "BEGIN;",
        "",
        "-- Clear stale learning history/progress when those optional tables exist.",
        "DO $$",
        "BEGIN",
        "  IF to_regclass('public.study_history') IS NOT NULL THEN",
        "    EXECUTE $sql$DELETE FROM public.study_history WHERE cert_id = 'cca-f'$sql$;",
        "  END IF;",
        "  IF to_regclass('public.user_progress') IS NOT NULL THEN",
        "    EXECUTE $sql$DELETE FROM public.user_progress WHERE cert_id = 'cca-f'$sql$;",
        "  END IF;",
        "END;",
        "$$;",
        "",
        "DELETE FROM questions WHERE cert_id = 'cca-f';",
        "",
        "INSERT INTO questions (",
        "  id, cert_id, question_number, text, options,",
        "  correct_answers, explanation, category, tags",
        ") VALUES",
    ]
    rows = []
    for index, item in enumerate(items, 1):
        options_json = json.dumps(item["options"], ensure_ascii=False, separators=(",", ":"))
        row = "\n".join(
            [
                "(",
                f"  {sql_literal(f'cca-f-question-{index:03d}')}, 'cca-f', {index},",
                f"  {sql_literal(item['text'])},",
                f"  {sql_literal(options_json)}::jsonb,",
                f"  {pg_array(item['correctAnswers'])},",
                f"  {sql_literal(item['explanation'])},",
                f"  {sql_literal(item['category'])},",
                f"  {pg_array(item['tags'])}",
                ")",
            ]
        )
        rows.append(row)
    lines.append(",\n".join(rows) + ";")
    lines.extend(
        [
            "",
            "DO $$",
            "DECLARE",
            "  actual_count integer;",
            "BEGIN",
            "  SELECT count(*) INTO actual_count FROM questions WHERE cert_id = 'cca-f';",
            f"  IF actual_count <> {len(items)} THEN",
            f"    RAISE EXCEPTION 'CCA-F rebuild failed: expected % questions, found %', {len(items)}, actual_count;",
            "  END IF;",
            "END;",
            "$$;",
            "",
            "COMMIT;",
            "",
            "SELECT cert_id, count(*) AS question_count, min(question_number) AS first_question, max(question_number) AS last_question",
            "FROM questions WHERE cert_id = 'cca-f' GROUP BY cert_id;",
            "",
        ]
    )
    return "\n".join(lines)


def validate_final(items: list[dict]) -> None:
    if not items:
        raise ValueError("No questions were produced")
    seen_ids = set()
    for index, item in enumerate(items, 1):
        if not item["text"] or not item["explanation"] or not item["category"]:
            raise ValueError(f"Question {index} has a blank required learning field")
        keys = [option["key"] for option in item["options"]]
        if len(keys) < 2 or len(keys) != len(set(keys)):
            raise ValueError(f"Question {index} has invalid option keys: {keys}")
        if not set(item["correctAnswers"]).issubset(keys):
            raise ValueError(f"Question {index} has an answer outside its options")
        normalized = normalize(item["text"])
        if normalized in seen_ids:
            raise ValueError(f"Question {index} is still an exact duplicate")
        seen_ids.add(normalized)

    html_started = False
    for index, item in enumerate(items, 1):
        if item["source"] == "HTML":
            html_started = True
        elif html_started:
            raise ValueError(f"PDF priority ordering is broken at question {index}")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--pdf", required=True, type=Path)
    parser.add_argument("--html", required=True, type=Path)
    parser.add_argument("--existing", required=True, type=Path)
    parser.add_argument("--sql", required=True, type=Path)
    parser.add_argument("--report", required=True, type=Path)
    args = parser.parse_args()

    pdf_items = parse_pdf(args.pdf)
    html_items = parse_html(args.html)
    existing = parse_existing(args.existing)

    final = []
    duplicates = []
    for candidate in [*pdf_items, *html_items]:
        duplicate_candidates = []
        for kept in final:
            reason, metrics = duplicate_reason(candidate, kept)
            if reason:
                duplicate_candidates.append((metrics["combined"], reason, metrics, kept))
        if duplicate_candidates:
            _, reason, metrics, match = max(duplicate_candidates, key=lambda value: value[0])
            duplicates.append(
                {
                    "removed_source": candidate["source"],
                    "removed_source_number": candidate["source_number"],
                    "kept_source": match["source"],
                    "kept_source_number": match["source_number"],
                    "reason": reason,
                    "sequence_similarity": round(metrics["sequence_similarity"], 4),
                    "question_containment": round(metrics["question_containment"], 4),
                    "option_containment": round(metrics["option_containment"], 4),
                }
            )
        else:
            final.append(candidate)

    enrich(final, existing)
    for index, item in enumerate(final, 1):
        item["questionNumber"] = index
    validate_final(final)

    report = {
        "pdf_pages": len(PdfReader(str(args.pdf)).pages),
        "pdf_questions": len(pdf_items),
        "html_questions": len(html_items),
        "duplicates_removed": len(duplicates),
        "final_questions": len(final),
        "source_order": {"PDF": sum(item["source"] == "PDF" for item in final), "HTML": sum(item["source"] == "HTML" for item in final)},
        "question_types": {"multiple_choice": len(final)},
        "categories": {},
        "unmatched_enrichment": [item["questionNumber"] for item in final if item["enrichment_match"] is None],
        "blank_explanations": [item["questionNumber"] for item in final if not item["explanation"]],
        "duplicates": duplicates,
    }
    for item in final:
        report["categories"][item["category"]] = report["categories"].get(item["category"], 0) + 1

    args.sql.write_text(build_sql(final), encoding="utf-8", newline="\n")
    args.report.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8", newline="\n")
    print(json.dumps({key: report[key] for key in ["pdf_pages", "pdf_questions", "html_questions", "duplicates_removed", "final_questions", "source_order", "question_types", "categories", "unmatched_enrichment", "blank_explanations"]}, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
