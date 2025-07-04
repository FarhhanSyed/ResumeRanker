import sys
import re
import json
from PyPDF2 import PdfReader
from sentence_transformers import SentenceTransformer, util

bert_model = SentenceTransformer("all-MiniLM-L6-v2")

skills_db = {
    'python', 'java', 'c++', 'sql', 'html', 'css', 'javascript',
    'machine learning', 'deep learning', 'nlp', 'django', 'react',
    'flask', 'git', 'data analysis', 'tensorflow', 'pandas', 'numpy',
    'scikit-learn', 'linux', 'excel', 'aws', 'azure', 'cloud computing',
    'data visualization', 'data preprocessing', 'matplotlib', 'seaborn'
}

def extract_text_from_pdf(pdf_path):
    reader = PdfReader(pdf_path)
    text = ""
    for page in reader.pages:
        text += page.extract_text() or ""
    return text.lower()

def clean_text(text):
    return re.sub(r'[^a-zA-Z0-9\s]', ' ', text.lower())

def preprocess_for_experience(text):
    text = clean_text(text)
    text = re.sub(r'\b(email|phone|contact|linkedin|github|skills|education|resume|curriculum vitae)\b', '', text)
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

def extract_skills(text):
    text = clean_text(text)
    words = text.split()
    found = set()
    for skill in skills_db:
        skill_tokens = skill.lower().split()
        if all(token in words for token in skill_tokens):
            found.add(skill)
    return found

def score_skills_match(resume_skills, jd_skills):
    if not jd_skills:
        return 0.0
    match_score = len(resume_skills & jd_skills) / len(jd_skills)
    return round(match_score * 10, 2)

def score_experience_relevance_bert(resume_text, jd_text):
    resume_clean = preprocess_for_experience(resume_text)
    jd_clean = preprocess_for_experience(jd_text)

    if not resume_clean or not jd_clean:
        return 0.0

    embeddings = bert_model.encode([resume_clean, jd_clean], convert_to_tensor=True)
    similarity = util.cos_sim(embeddings[0], embeddings[1]).item()
    return round(similarity * 10, 2)

if __name__ == "__main__":
    resume_path = sys.argv[1]
    jd_path = sys.argv[2]

    resume_text = extract_text_from_pdf(resume_path)
    jd_text = extract_text_from_pdf(jd_path)

    resume_skills = extract_skills(resume_text)
    jd_skills = extract_skills(jd_text)

    skills_match = score_skills_match(resume_skills, jd_skills)
    experience_relevance = score_experience_relevance_bert(resume_text, jd_text)

    final_score = round((skills_match * 0.6 + experience_relevance * 0.4), 2)

    scores = {
        "skillsMatch": skills_match,
        "experienceRelevance": experience_relevance,
        "finalScore": final_score
    }

    print(json.dumps(scores))
