import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Mail, Linkedin, Github, FileText, Download } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Career Materials Section */}
        <div id="resume" className="bg-primary/10 rounded-2xl p-8 mb-16 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Ready to Collaborate?</h3>
            <p className="text-gray-300">Download my resume or view my job application strategy.</p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors font-medium">
              <Download size={20} />
              Download Resume (ATS Optimized)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
               <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                   <span className="text-white font-bold">R</span>
               </div>
               <span className="text-xl font-bold text-white">Rodney Mashele</span>
            </div>
            <p className="text-gray-400">
              Transforming ideas into intelligent reality. Specializing in End-to-End AI solutions and modern web applications.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary flex items-center gap-2 transition-colors">
                  <Linkedin size={18} /> LinkedIn Profile
                </a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary flex items-center gap-2 transition-colors">
                  <Github size={18} /> GitHub Profile
                </a>
              </li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-4">Contact</h4>
             <ul className="space-y-3">
              <li>
                <a href={SOCIAL_LINKS.email} className="text-gray-400 hover:text-primary flex items-center gap-2 transition-colors">
                  <Mail size={18} /> contact@rodneymashele.com
                </a>
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                 <FileText size={18} /> Johannesburg, South Africa
              </li>
             </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Rodney Mashele. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
