import React from 'react';
import branchData from '../Data/branchdata.js';

const BranchPDFs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-lg">
      <h1 className="text-4xl font-bold text-center text-white mb-10 drop-shadow-md">
        Branch-wise PDFs
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {branchData.map((branch) => (
          <div
            key={branch.name}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-xl p-6 text-white hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <h2 className="text-2xl font-semibold text-blue-300 mb-4">{branch.name}</h2>

            {branch.years.map((year) => (
              <div key={year.year} className="mb-4">
                <h3 className="text-lg font-medium text-white/80 mb-2">{year.year}</h3>
                <ul className="space-y-2">
                  {year.subjects.map((subject) => (
                    <li key={subject.name}>
                      <a
                        href={subject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 underline underline-offset-2 cursor-pointer"
                      >
                        📄 {subject.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BranchPDFs;
