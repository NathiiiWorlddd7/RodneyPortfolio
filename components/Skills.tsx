import React from 'react';
import { SKILLS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section id="expertise" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Expertise</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Technical Competencies
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            A robust set of tools and technologies I use to build intelligent systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skillGroup, index) => (
            <div key={index} className="bg-card p-6 rounded-xl border border-gray-800 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="flex items-start">
                    <CheckCircle2 className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5 mr-3" />
                    <span className="text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};