import json
import re

# We will load the existing questions from ccaQuestions.ts
def get_existing_questions():
    with open('src/data/ccaQuestions.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex to extract text blocks
    matches = re.findall(r'text:\s*"([^"\\]*(?:\\.[^"\\]*)*)"', content)
    # Also extract id
    ids = re.findall(r'id:\s*"([^"\\]*)"', content)
    
    # Return normalized texts
    normalized = set()
    for t in matches:
        # ignore options texts if short
        norm = re.sub(r'\s+', ' ', t).strip().lower()
        if len(norm) > 30:
            normalized.add(norm)
    return normalized, len(ids)

print("Existing questions loaded successfully.")
