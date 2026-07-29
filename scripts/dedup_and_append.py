import json
import re

def normalize_text(text):
    if not text:
        return ""
    # Remove markdown/formatting, punctuation, and extra whitespace
    t = re.sub(r'[^\w\s]', '', text.lower())
    return re.sub(r'\s+', ' ', t).strip()

def extract_existing_cca():
    with open('src/data/ccaQuestions.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract all question objects from file
    # We can match id: "cca..." and text: "..."
    items = []
    blocks = content.split('{\n    id: "')
    
    existing_texts = set()
    for b in blocks[1:]:
        lines = b.split('\n')
        qid = lines[0].split('"')[0]
        
        text_match = re.search(r'text:\s*"(.*?)"\n', b, re.DOTALL)
        if text_match:
            qtext = text_match.group(1).replace('\\"', '"')
            norm = normalize_text(qtext)
            existing_texts.add(norm)
            items.append({'id': qid, 'raw_text': qtext, 'norm': norm})

    return existing_texts, len(items)

print("Extractor initialized.")
