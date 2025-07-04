import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Upload } from "lucide-react";
// import axios from "axios";

const UploadForm = () => {
  const [resumefileName, setResumeFileName] = useState("");
  const [jdfileName, setJdFileName] = useState("");
  const [formData, setFormData] = useState({
    resume: null,
    jd: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("resume", formData.resume);
    data.append("jd", formData.jd);
    // console.log(data.get("resume"));
    
  };

  const handleChange = (e) => {
    const { name, files } = e.target;
    if (name === "resume") {
      setResumeFileName(files[0].name);
    } else {
      setJdFileName(files[0].name);
    }
    setFormData((prev) => ({ ...prev, [name]: files[0] }));
  };

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-white overflow-hidden mt-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-100/30 to-indigo-100/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-slate-100/40 to-blue-100/30 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-to-r from-indigo-50/50 to-slate-50/50 rounded-full blur-xl"></div>

          <div className="absolute top-60 left-40 w-16 h-16 border-2 border-slate-200/60 rounded-lg rotate-45 opacity-50"></div>
          <div className="absolute bottom-40 right-40 w-20 h-20 border border-blue-200/40 rounded-full opacity-30"></div>
          <div className="absolute top-32 right-60 w-12 h-12 bg-blue-100/30 rounded-full opacity-40"></div>

          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
        </div>
        <div className="relative max-w-4xl mx-auto p-8 pt-12">
          <div className="text-center mt-2">
            <h1 className="font-bold text-4xl">Upload Your Documents</h1>
            <p className="text-xl text-slate-500 mt-2">
              Upload both resume and job description PDFs to get your
              compatibility score
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-2 mb-12 mt-12">
              <div className="bg-white backdrop-blur-sm shadow-sm rounded-lg border-1 border-gray-300 border-dashed hover:border-blue-300 border-2 transition-all duration-300 mx-auto px-10 py-10">
                <div className="w-14 h-14 bg-blue-300 rounded-full flex items-center justify-center mx-auto">
                  <FontAwesomeIcon
                    icon={faFile}
                    size="2x"
                    className="text-white"
                  />
                </div>
                <div className="text-center mx-auto mt-4">
                  <h1 className="text-lg font-semibold">Resume</h1>
                  <p className="text-slate-600 mt-1">
                    Upload your resume (PDF only, max 10MB){" "}
                  </p>
                  <input
                    type="file"
                    accept=".pdf"
                    className="hidden"
                    id="resume-upload"
                    name="resume"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="resume-upload"
                    className="inline-flex items-center bg-blue-400 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 cursor-pointer font-medium mt-6"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Choose File
                  </label>
                  {resumefileName && (
                    <p className="mt-1 text-slate-600">{resumefileName}</p>
                  )}
                </div>
              </div>
              <div className="bg-white backdrop-blur-sm rounded-lg shadow-sm border-gray-300 border-1 border-dashed mx-auto px-6 py-10 hover:border-indigo-600 border-2 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-indigo-300 flex justify-center items-center mx-auto">
                  <FontAwesomeIcon
                    icon={faFile}
                    size="2x"
                    className="text-white"
                  />
                </div>
                <div className="text-center mt-4">
                  <h1 className="text-lg font-semibold">Job Description</h1>
                  <p className="text-slate-600 mt-1">
                    Upload your Job Description (PDF only, max 10MB){" "}
                  </p>
                  <input
                    type="file"
                    accept=".pdf"
                    className="hidden"
                    id="jd-upload"
                    name="jd"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="jd-upload"
                    className="inline-flex items-center bg-indigo-400 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200 cursor-pointer font-medium mt-6"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Choose File
                  </label>
                  {jdfileName && (
                    <p className="mt-1 text-slate-600">{jdfileName}</p>
                  )}
                </div>
              </div>
            </div>
            <button>Start Analysis</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UploadForm;
