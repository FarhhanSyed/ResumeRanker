const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const { spawn } = require("child_process");
const fs = require("fs");

app.use(
  cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());


const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage });

app.post(
  "/api/upload",
  upload.fields([
    { name: "resume", maxCount: 1 },
    { name: "jd", maxCount: 1 },
  ]),
  (req, res) => {
    const resumeF = req.files.resume?.[0];
    const jdFile = req.files.jd?.[0];

    if (!resumeF || !jdFile) {
      return res.status(400).json({ error: "Missing resume or JD file" });
    }

    const python = spawn("python", [
      "python/resume_ranker.py",
      resumeF.path,
      jdFile.path,
    ]);

    let output = "";
    let errorOutput = "";

    python.stdout.on("data", (data) => {
      output += data.toString();
    });

    python.stderr.on("data", (data) => {
      errorOutput += data.toString();
    });

    python.on("close", (code) => {
      if (code !== 0 || errorOutput) {
        console.error("❌ Python Error:", errorOutput);
        return res
          .status(500)
          .json({ error: "Python script failed", details: errorOutput });
      }

      try {
        const scores = JSON.parse(output.trim());
        console.log("✅ Final Scores:", scores);
        res.json(scores);

        fs.unlink(resumeF.path, () => {});
        fs.unlink(jdFile.path, () => {});
      } catch (err) {
        console.error("❌ Failed to parse JSON:", err);
        res.status(500).json({ error: "Invalid Python output" });
      }
    });
  }
);

app.get("/backend", (req, res) => {
  res.send("Backend working ✅");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
