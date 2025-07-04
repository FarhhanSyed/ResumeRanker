// import React from "react";
// import axios from "axios";
// import { useState } from "react";
// const App = () => {
//   const [formData, setFormData] = useState({
//     resume: null,
//     jd: null,
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(formData);
//     console.log(formData.jd);
//     const data = new FormData();
//     data.append("resume", formData.resume);
//     data.append("jd", formData.jd);
//     console.log(data.get("resume"));
//     await axios.post(
//       "/api/upload",
//       data,
//       { withCredentials: true },
//       { headers: { "Content-Type": "multipart/form-data" } }
//     );
//   };
//   const handleChange = (e) => {
//     const { name, files } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: files[0] }));
//   };

//   return (
//     <div>
//       <h1>Upload Resume and JD</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="resume">Upload Resume(pdf) : </label>
//         <br></br>
//         <br></br>
//         <input
//           id="resume"
//           type="file"
//           placeholder="upload resume"
//           name="resume"
//           accept=".pdf"
//           onChange={handleChange}
//         />
//         <br></br>
//         <br></br>
//         <label htmlFor="jd">Upload JS(pdf) : </label>
//         <br></br>
//         <br></br>
//         <input
//           id="jd"
//           type="file"
//           placeholder="upload js"
//           name="jd"
//           accept=".pdf"
//           onChange={handleChange}
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UploadPage from "./pages/UploadPage";
import ResultPage from "./pages/ResultPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
