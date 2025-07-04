import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft, FileText, Target, TrendingUp, Download, RefreshCw, Award } from 'lucide-react';

const ResultsDisplay = () => {
  const location = useLocation();
  const { finalScore = 0, skillsMatch = 0, experienceRelevance = 0 } = location.state || {};

  const finalScorePercent = Math.round(finalScore * 10);

  const getScoreColor = (score) => {
    if (score >= 8) return 'text-green-600';
    if (score >= 6) return 'text-blue-600';
    return 'text-orange-600';
  };

  const getScoreGradient = (score) => {
    if (score >= 8) return 'from-green-500 to-emerald-500';
    if (score >= 6) return 'from-blue-500 to-indigo-500';
    return 'from-orange-500 to-red-500';
  };

  const getScoreRating = (score) => {
    if (score >= 9) return 'Excellent Match';
    if (score >= 8) return 'Very Good Match';
    if (score >= 7) return 'Good Match';
    if (score >= 6) return 'Fair Match';
    return 'Needs Improvement';
  };

  const getRecommendation = (score) => {
    if (score >= 8) return 'Excellent match! This candidate strongly aligns with the job requirements and should be prioritized for interview.';
    if (score >= 6) return 'Good match! This candidate has relevant qualifications with some areas to explore during the interview process.';
    return 'Limited match. Consider if the candidate has transferable skills or potential for growth in the role.';
  };

  const getKeyStrengths = (score) => {
    const base = ['Technical Skills', 'Experience Level'];
    if (score >= 8) return [...base, 'Industry Knowledge', 'Leadership Experience'];
    if (score >= 6) return [...base, 'Relevant Experience'];
    return base;
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-80 h-80 bg-gradient-to-r from-blue-100/20 to-indigo-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-64 h-64 bg-gradient-to-r from-green-100/20 to-blue-100/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-slate-100/30 to-indigo-100/20 rounded-full blur-xl"></div>
        <div className="absolute top-20 right-40 w-20 h-20 border border-slate-200/40 rounded-lg rotate-12 opacity-30"></div>
        <div className="absolute bottom-20 left-40 w-16 h-16 border-2 border-blue-200/30 rounded-full opacity-40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,_rgba(148,163,184,0.1)_2px,_transparent_0)] bg-[length:50px_50px] opacity-60"></div>
      </div>

      <div className="relative max-w-6xl mx-auto p-8">
        <div className="mb-8">
          <Link to="/upload" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Upload
          </Link>
        </div>

        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <Award className="h-8 w-8" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Analysis Complete</h1>
          <p className="text-xl text-slate-600">Resume–Job Description Compatibility Score</p>
        </div>

        {/* Score Display */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm p-12 mb-8 text-center border border-slate-200">
          <div className={`text-8xl font-bold mb-4 bg-gradient-to-r ${getScoreGradient(finalScore)} bg-clip-text text-transparent`}>
            {finalScore.toFixed(2)}
          </div>
          <div className="text-lg text-slate-600 mb-2">Final Score (out of 10)</div>
          <div className={`text-2xl font-semibold mb-4 ${getScoreColor(finalScore)}`}>
            {getScoreRating(finalScore)}
          </div>
          <div className="w-full bg-slate-200 rounded-full h-4 mb-6">
            <div
              className={`h-4 rounded-full bg-gradient-to-r ${getScoreGradient(finalScore)} transition-all duration-1000 ease-out`}
              style={{ width: `${finalScorePercent}%` }}
            ></div>
          </div>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">{getRecommendation(finalScore)}</p>
        </div>

        {/* Breakdown */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-8 mb-8 border border-slate-200">
          <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
            <TrendingUp className="h-6 w-6 mr-3 text-blue-600" />
            Detailed Analysis Breakdown
          </h3>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50/80 to-blue-100/80 rounded-xl border border-blue-200/50">
              <div className="text-3xl font-bold text-blue-600 mb-2">{skillsMatch.toFixed(2)}</div>
              <div className="text-slate-700 font-medium">Skills Match</div>
              <div className="text-sm text-slate-600 mt-1">Technical & Soft Skills</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-indigo-50/80 to-indigo-100/80 rounded-xl border border-indigo-200/50">
              <div className="text-3xl font-bold text-indigo-600 mb-2">{experienceRelevance.toFixed(2)}</div>
              <div className="text-slate-700 font-medium">Experience Relevance</div>
              <div className="text-sm text-slate-600 mt-1">Years & Industry</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50/80 to-green-100/80 rounded-xl border border-green-200/50">
              <div className="text-3xl font-bold text-green-600 mb-2">{finalScore.toFixed(2)}</div>
              <div className="text-slate-700 font-medium">Final Score</div>
              <div className="text-sm text-slate-600 mt-1">Overall Match</div>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h4 className="text-lg font-semibold text-slate-800 mb-4">Key Strengths Identified</h4>
            <div className="flex flex-wrap gap-2">
              {getKeyStrengths(finalScore).map((strength, idx) => (
                <span
                  key={idx}
                  className="bg-gradient-to-r from-blue-100/80 to-indigo-100/80 text-slate-800 px-3 py-1 rounded-full text-sm font-medium border border-blue-200/50"
                >
                  {strength}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/upload"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200 transform hover:scale-105 font-medium"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Analyze Another Resume
          </Link>

        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;
