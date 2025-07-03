import sys
import re
from PyPDF2 import PdfReader
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

skills_db={
    'python', 'java', 'c++', 'sql', 'html', 'css', 'javascript',
    'machine learning', 'deep learning', 'nlp', 'django', 'react',
    'flask', 'git', 'data analysis', 'tensorflow', 'pandas', 'numpy'
}

def extract_text_from_pdf(pdf_path):
    reader = PdfReader(pdf_path)
    text = ""
    for page in reader.pages:
        text += page.extract_text() or ""
    return text.lower()

def clean_text(text):
    return re.sub(r'[^a-zA-Z0-9\s]', '', text.lower())

def extract_skills(text):
    text = clean_text(text)
    words = text.split()
    found = set()

    for skill in skills_db:
        skill_tokens = skill.lower().split()
        if all(token in words for token in skill_tokens):
            found.add(skill)

    return list(found)

def score_similarity(resume_skills, jd_skills):
    vectorizer = TfidfVectorizer()
    vectors = vectorizer.fit_transform([" ".join(resume_skills), " ".join(jd_skills)])
    return round(cosine_similarity(vectors[0], vectors[1])[0][0] * 10, 2)

if __name__ =="__main__":
    resume_path=sys.argv[1]
    jd_path=sys.argv[2]
    
    resume_text=extract_text_from_pdf(resume_path)
    jd_text=extract_text_from_pdf(jd_path)
    
    resume_skills = extract_skills(resume_text)
    jd_skills = extract_skills(jd_text)
    
    print(score_similarity(resume_skills,jd_skills))