import { Link } from "react-router-dom";
import React from "react";
import { faFile, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-sm border-b border-gray-200 flex justify-between py-3 px-8">
      <div className="flex items-center space-x-4 ml-8">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-blue-600">
          <FontAwesomeIcon
            icon={faFile}
            size="2x"
            className="text-gray-100 cursor-pointer"
          />
        </div>
        <h1 className="font-bold text-2xl text-blue-600 cursor-pointer">
          ResumeRanker
        </h1>
      </div>
      <div className="flex items-center space-x-5 mr-5">
        <div className="flex items-center space-x-1 cursor-pointer">
          <FontAwesomeIcon
            icon={faHouse}
            className="text-gray-500 hover:text-blue-600"
          />
          <p className="text-gray-500 hover:text-blue-600">Home</p>
        </div>
        <button className="bg-blue-600 rounded-lg px-5 py-2 text-white font-semibold hover:bg-blue-700 cursor-pointer">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
