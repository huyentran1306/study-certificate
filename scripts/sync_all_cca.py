import json
import re
import glob

def normalize_text(text):
    if not text:
        return ""
    # Strip non-alphanumeric characters and lowercase
    s = re.sub(r'[^\w\s]', '', text.lower())
    return re.sub(r'\s+', ' ', s).strip()

def parse_existing_ts():
    with open('src/data/ccaQuestions.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to capture existing Question items
    pattern = re.compile(
        r'{\s*\n\s*id:\s*"([^"]+)",\s*\n\s*questionNumber:\s*(\d+),\s*\n\s*text:\s*"(.*?)",\s*\n\s*options:\s*(\[.*?\]),\s*\n\s*correctAnswers:\s*(\[.*?\]),\s*\n\s*category:\s*"(.*?)",\s*\n\s*explanation:\s*"(.*?)",\s*\n\s*tags:\s*(\[.*?\])\s*\n\s*}',
        re.DOTALL
    )

    items = []
    seen = set()

    for match in pattern.finditer(content):
        qid = match.group(1)
        qnum = int(match.group(2))
        qtext = match.group(3).replace('\\"', '"')
        opts_raw = match.group(4)
        corr_raw = match.group(5)
        cat = match.group(6)
        exp = match.group(7).replace('\\"', '"')
        tags_raw = match.group(8)

        norm = normalize_text(qtext)
        seen.add(norm)

        items.append({
            'id': qid,
            'questionNumber': qnum,
            'text': qtext,
            'opts_raw': opts_raw,
            'corr_raw': corr_raw,
            'category': cat,
            'explanation': exp,
            'tags_raw': tags_raw,
            'norm': norm
        })

    return items, seen

print("Sync script initialized.")
