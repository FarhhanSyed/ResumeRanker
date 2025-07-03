# 🚀 ResumeRanker

**ResumeRanker** is a full-stack intelligent resume screening system that evaluates a candidate's resume against a given job description and assigns a **match score out of 10**. It uses **TF-IDF** and **cosine similarity** to compare extracted skills from resumes and JDs.

---

## 🔧 Tech Stack

| Layer       | Technology               |
|-------------|--------------------------|
| Frontend    | React.js                 |
| Backend     | Node.js, Express.js      |
| ML/NLP Core | Python (TF-IDF, cosine similarity) |
| File Handling | Multer (for uploading resumes as PDFs) |
| PDF Parsing | PyPDF2                   |


---

## ✅ Features

- 📄 Upload resume PDFs via frontend
- 🔍 Extract relevant skills from resumes and JDs
- 🧠 Score resumes based on skill match using TF-IDF + cosine similarity
- 🔙 Returns score (0–10) back to the frontend
- ⚡ Instant feedback for recruiters or job platforms

---

## 🧠 How It Works

1. **User uploads** a resume PDF and pastes a job description in the React frontend.
2. Resume is sent to **Express backend** using `FormData`.
3. Backend uses **Multer** to store the PDF and runs a **Python script** via `child_process.spawn()`.
4. The Python script:
   - Reads the PDF using `PyPDF2`
   - Extracts and matches skills using a predefined skill set
   - Computes similarity using `TfidfVectorizer` + `cosine_similarity`
5. The score (out of 10) is returned and displayed on the frontend.

---

