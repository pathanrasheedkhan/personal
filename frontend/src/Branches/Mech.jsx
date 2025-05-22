// CseQuestionPapers.jsx

import React from "react";
import questionPaperData from "../Data/csequestion.js";

const aidsquestionPaperData = () => {
  return (
    <div className="min-h-screen  p-8">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-10 drop-shadow">
        AI & DS Question Papers
      </h2>

      {questionPaperData.map((yearBlock, index) => (
        <div key={index} className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-5">
            {yearBlock.year}
          </h3>

          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {yearBlock.subjects.map((subject, i) => (
              <li
                key={i}
                className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/30 p-6 shadow-xl hover:shadow-2xl transition duration-300"
              >
                <div className="font-semibold text-white text-lg mb-2">
                  {subject.name}
                </div>
                <a
                  href={subject.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 underline hover:text-white transition-colors duration-200"
                >
                  View Question Paper
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default aidsquestionPaperData;
