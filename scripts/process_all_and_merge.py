import re
import json

# 1. Helper function to normalize text
def norm_text(t):
    if not t:
        return ""
    # strip punctuation & lower
    s = re.sub(r'[^\w\s]', '', t.lower())
    return re.sub(r'\s+', ' ', s).strip()

# 2. Extract existing questions from ccaQuestions.ts
def load_existing():
    with open('src/data/ccaQuestions.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract existing question numbers and question texts
    pattern = re.compile(
        r'{\s*\n\s*id:\s*"([^"]+)",\s*\n\s*questionNumber:\s*(\d+),\s*\n\s*text:\s*"([^"\\]*(?:\\.[^"\\]*)*)"',
        re.DOTALL
    )
    
    existing_items = []
    seen_norms = set()
    
    for match in pattern.finditer(content):
        qid = match.group(1)
        qnum = int(match.group(2))
        qtext = match.group(3).replace('\\"', '"')
        n = norm_text(qtext)
        seen_norms.add(n)
        existing_items.append({
            'id': qid,
            'questionNumber': qnum,
            'text': qtext,
            'norm': n
        })
        
    return existing_items, seen_norms

def format_options(opts_dict_or_list):
    if isinstance(opts_dict_or_list, dict):
        res = []
        for k in sorted(opts_dict_or_list.keys()):
            res.append({"key": k, "text": opts_dict_or_list[k]})
        return res
    elif isinstance(opts_dict_or_list, list):
        return opts_dict_or_list
    return []

print("Merge helper ready.")
