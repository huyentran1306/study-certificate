import json
import re
import glob
import os

def normalize_text(text):
    if not text:
        return ""
    # Strip punctuation & lower
    s = re.sub(r'[^\w\s]', '', text.lower())
    return re.sub(r'\s+', ' ', s).strip()

def load_cca_questions():
    with open('src/data/ccaQuestions.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to match each question block
    pattern = re.compile(
        r'{\s*\n\s*id:\s*"([^"]+)",\s*\n\s*questionNumber:\s*(\d+),\s*\n\s*text:\s*"([^"\\]*(?:\\.[^"\\]*)*)"',
        re.DOTALL
    )

    existing_items = []
    existing_texts = set()

    for match in pattern.finditer(content):
        qid = match.group(1)
        qnum = int(match.group(2))
        qtext = match.group(3).replace('\\"', '"')
        norm = normalize_text(qtext)
        existing_texts.add(norm)
        existing_items.append({
            'id': qid,
            'questionNumber': qnum,
            'text': qtext,
            'norm': norm
        })

    return content, existing_items, existing_texts

def process():
    content, existing_items, existing_texts = load_cca_questions()
    max_num = max([item['questionNumber'] for item in existing_items]) if existing_items else 0
    print(f"Existing count: {len(existing_items)}, Max Question Number: {max_num}")

    # Find all raw_dataset_p*.json and raw_part*.json files
    json_files = glob.glob('scripts/raw_*.json') + glob.glob('scripts/batch*.json') + glob.glob('scripts/part*.json')
    print(f"Found {len(json_files)} raw data files: {json_files}")

    all_raw = []
    for jf in json_files:
        try:
            with open(jf, 'r', encoding='utf-8') as f:
                data = json.load(f)
                all_raw.extend(data)
        except Exception as e:
            print(f"Error loading {jf}: {e}")

    print(f"Total raw items loaded: {len(all_raw)}")

    new_added = []
    dup_count = 0

    for item in all_raw:
        qtext = item.get('question') or item.get('text')
        if not qtext:
            continue
        
        norm = normalize_text(qtext)
        if norm in existing_texts:
            dup_count += 1
            continue

        existing_texts.add(norm)
        max_num += 1
        new_id = f"cca{max_num}"

        # Format options
        opts = item.get('options', {})
        if isinstance(opts, dict):
            formatted_opts = [{"key": k, "text": opts[k]} for k in sorted(opts.keys())]
        else:
            formatted_opts = opts

        correct = item.get('correct') or item.get('correctAnswers')
        if isinstance(correct, str):
            correct_answers = [correct]
        elif isinstance(correct, list):
            correct_answers = correct
        else:
            correct_answers = ["A"]

        explanation = item.get('explanation', '')

        # Categorize
        category = "Claude Architecture & Best Practices"
        tags = ["Claude Certified Architect", "CCAF"]

        new_q = {
            "id": new_id,
            "questionNumber": max_num,
            "text": qtext,
            "options": formatted_opts,
            "correctAnswers": correct_answers,
            "category": category,
            "explanation": explanation,
            "tags": tags
        }
        new_added.append(new_q)

    print(f"Duplicates skipped: {dup_count}")
    print(f"New unique questions to add: {len(new_added)}")

    return new_added

if __name__ == '__main__':
    process()
