const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const { error } = require("console");
const { spawn } = require("child_process");

app.use(
  cors({
    origin: "/http:localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
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
    // console.log(resumeF);
    // console.log(jdFile);
    if (!resumeF || !jdFile) {
      res.status(400).json({ error: "Missing resume and jd file" });
    }
    const python = spawn("python", [
      "python/resume_ranker.py",
      resumeF.path,
      jdFile.path,
    ]);
    let output = "";
    let error = "";
    python.stdout.on("data", (data) => (output += data.toString()));
    python.stderr.on("data", (data) => (error += data.toString()));
    python.on("close", (code) => {
      if (code !== 0 || error) {
        console.error("Python error:", error);
        return res
          .status(500)
          .json({ error: "Python script failed", details: error });
      }

      const score = parseFloat(output.trim());
      console.log("Score:", score);
      res.json({ score }); // ✅ send response after Python finishes
    });
  }
);

app.get("/backend", (req, res) => {
  console.log("backend working");
  res.send("hello");
});

let port = 8080;
app.listen(port, () => {
  console.log("Server started on port 8080");
});
