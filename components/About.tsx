import React from 'react';
import { BIO } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-dark border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-12 shadow-xl border border-gray-700">
          <div className="flex flex-col md:flex-row gap-8 items-start">
             <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {BIO.long}
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Career Objective</h3>
                  <p className="text-gray-400">
                    To secure a challenging position as an AI/ML Engineer in a forward-thinking company where I can apply my skills in model development, data analysis, and full-stack integration to build impactful products.
                  </p>
                </div>
             </div>
             <div className="w-full md:w-1/3 bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-white font-bold mb-4">Quick Stats</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center border-b border-gray-700 pb-2">
                    <span className="text-gray-400">Experience</span>
                    <span className="text-primary font-semibold">Bootcamp Graduate</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-700 pb-2">
                    <span className="text-gray-400">Projects</span>
                    <span className="text-primary font-semibold">7+ Deployed</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-700 pb-2">
                    <span className="text-gray-400">Focus</span>
                    <span className="text-primary font-semibold">AI & Full Stack</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-400">Location</span>
                    <span className="text-primary font-semibold">Open to Remote</span>
                  </li>
                </ul>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
