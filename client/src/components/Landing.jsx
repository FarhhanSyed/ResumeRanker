import React from "react";
import { ArrowRight, Upload, BarChart3, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 overflow-hidden mt-18">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/20 to-transparent transform -skew-y-6 scale-150"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-100/15 to-transparent transform skew-y-12 scale-110"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-indigo-300/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-br from-indigo-200/25 to-blue-300/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-64 h-64 bg-gradient-to-br from-slate-200/30 to-blue-200/20 rounded-full blur-xl"></div>
        <div className="absolute top-20 right-1/4 w-4 h-4 bg-blue-400/60 rounded-full animate-bounce"></div>
        <div className="absolute top-40 left-1/3 w-6 h-6 bg-indigo-400/50 rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-slate-400/60 rounded-full"></div>
        <div className="absolute top-3/4 left-1/4 w-5 h-5 border-2 border-blue-300/60 rotate-12"></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,_rgba(99,102,241,0.1)_2px,_transparent_0)] bg-[length:60px_60px]"></div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-50/80 to-transparent"></div>
        <div className="absolute top-0 right-0 w-full h-32 bg-gradient-to-b from-indigo-50/60 to-transparent"></div>

        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-300/30 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center mb-20">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              AI-Powered Resume Matching
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Upload your resume and job description to get an instant
              compatibility score.
              <br />
              Improve your chances of getting shortlisted with ResumeRanker!
            </p>
          </div>

          <div className="animate-fade-in delay-300">
            <Link
              to="/upload"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Try It Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Upload className="h-8 w-8">Upload</Upload>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                1. Upload
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Submit your resume and job description (PDF format).
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100">
              <div className="bg-indigo-100 text-indigo-600 p-4 rounded-xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <BarChart3 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                2. Analyze
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We use NLP and ML to compare skills and content relevance.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100">
              <div className="bg-green-100 text-green-600 p-4 rounded-xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                3. Get Score
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Receive a score out of 100 along with useful feedback.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-sm border border-slate-100">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            Why ResumeRanker?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full p-2 mt-1">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">
                    Saves time before applying for jobs
                  </h4>
                  <p className="text-slate-600">
                    Know your match score before submitting applications
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full p-2 mt-1">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">
                    Helps improve resume relevance
                  </h4>
                  <p className="text-slate-600">
                    Get insights on how to better align your resume
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full p-2 mt-1">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">
                    Highlights missing keywords and skills
                  </h4>
                  <p className="text-slate-600">
                    Identify gaps in your resume content
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full p-2 mt-1">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">
                    Built using NLP, ML, Python & MERN Stack
                  </h4>
                  <p className="text-slate-600">
                    Powered by cutting-edge technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
