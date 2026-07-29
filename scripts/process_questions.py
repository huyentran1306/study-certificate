import json
import re
import os

# Read existing ccaQuestions.ts
cca_file = 'src/data/ccaQuestions.ts'

with open(cca_file, 'r', encoding='utf-8') as f:
    cca_content = f.read()

# Extract question texts from ccaQuestions.ts
# Matches text: "..."
existing_texts = set()
pattern = re.compile(r'text:\s*"(.*?)",?\n', re.DOTALL)
for match in pattern.finditer(cca_content):
    # Normalize text for deduplication
    norm = re.sub(r'\s+', ' ', match.group(1)).strip().lower()
    if len(norm) > 20:
        existing_texts.add(norm)

print(f"Loaded {len(existing_texts)} existing question texts from ccaQuestions.ts")
