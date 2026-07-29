import json
import re

def parse_cca_questions():
    with open('src/data/ccaQuestions.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Match text property
    # text: "..."
    # We can split by 'id: "cca'
    items = []
    matches = re.findall(r'id:\s*"([^"]+)",\s*\n\s*questionNumber:\s*(\d+),\s*\n\s*text:\s*"([^"\\]*(?:\\.[^"\\]*)*)"', content)
    
    for m in matches:
        qid, qnum, qtext = m
        items.append({
            'id': qid,
            'questionNumber': int(qnum),
            'text': qtext.replace('\\"', '"')
        })
    return items

items = parse_cca_questions()
print(f"Parsed {len(items)} existing CCA questions.")
