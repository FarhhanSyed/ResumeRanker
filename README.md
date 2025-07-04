# 🚀 ResumeRanker

**ResumeRanker** is a full-stack intelligent resume screening system that evaluates a candidate's resume against a given job description and assigns a **match score out of 10**.

This upgraded version uses **BERT embeddings + cosine similarity** to compute **semantic relevance** between resumes and job descriptions, alongside direct skill matching — resulting in much more accurate and meaningful scores.

---

## 🔧 Tech Stack

| Layer        | Technology                                                  |
|--------------|-------------------------------------------------------------|
| Frontend     | React.js                                                    |
| Backend      | Node.js, Express.js                                         |
| ML/NLP Core  | Python (`sentence-transformers`, cosine similarity, PyPDF2) |
| File Upload  | Multer (for uploading resume and JD as PDFs)                |
| Integration  | `child_process.spawn()` to run Python from Node             |
| PDF Parsing  | PyPDF2                                                      |

---

## ✅ Features

- 📄 Upload **resume** and **JD** PDFs from frontend
- 🔍 Extract relevant **skills** from both files
- 🧠 Evaluate **semantic relevance** using **BERT + cosine similarity**
- 🎯 Compute final **match score (0–10)**
- ⚡ Instant feedback for recruiters or platforms
- 📦 JSON output returned from backend to frontend
- 🧼 Temporary PDF cleanup (optional)

---

## 🧠 Scoring Criteria

| Metric                  | Description                                                                              |
|-------------------------|------------------------------------------------------------------------------------------|
| **Skills Match**         | Compares extracted skills from resume and JD using set intersection                     |
| **Experience Relevance** | Uses **BERT embeddings** + **cosine similarity** to compare full text meaningfully       |
| **Final Score**          | Weighted average: `60% Skills Match + 40% Experience Relevance`                         |

---

