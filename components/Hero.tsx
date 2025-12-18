import React from 'react';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { BIO, SOCIAL_LINKS, PERSONAL_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 pb-12 sm:pt-32 sm:pb-24 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="flex w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              Available for Hire
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
              Building the Future with <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                Artificial Intelligence
              </span>
            </h1>
            
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {BIO.short}
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20"
              >
                View Portfolio
                <ArrowRight className="ml-2 -mr-1" size={20} />
              </a>
              <div className="flex gap-4 justify-center">
                <a 
                  href={SOCIAL_LINKS.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-3 border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a 
                  href={SOCIAL_LINKS.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-3 border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:col-span-5 mt-12 lg:mt-0 relative flex justify-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              {/* Animated Background Blob */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-2xl opacity-40 animate-pulse"></div>
              
              {/* Profile Card Container with Modern Styling */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-gray-700/50 bg-gray-800/30 backdrop-blur-sm shadow-2xl transform hover:scale-[1.02] transition-all duration-500 ease-out group">
                
                {/* Glow Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <img
                  src={PERSONAL_INFO.profileImage}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Overlay Details */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-bold text-xl">{PERSONAL_INFO.name}</p>
                  <p className="text-primary font-medium">{PERSONAL_INFO.title}</p>
                </div>
              </div>

              {/* Decorative floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center shadow-lg animate-bounce delay-700">
                <span className="text-2xl">🤖</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center shadow-lg animate-bounce delay-1000">
                <span className="text-2xl">⚡</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};