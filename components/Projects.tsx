import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, X, Info } from 'lucide-react';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="py-20 bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Portfolio</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Featured Projects
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            A collection of my recent work in AI, Machine Learning, and Web Development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group bg-card rounded-xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer flex flex-col"
              onClick={() => openProject(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                <span className="absolute top-4 right-4 bg-primary/90 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                  {project.category}
                </span>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-3 mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded border border-gray-700">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                     <span className="text-xs text-gray-500 px-1 py-1">+ {project.techStack.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeProject}
          ></div>
          
          <div className="bg-card border border-gray-700 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl animate-fadeIn">
            <button 
              onClick={closeProject}
              className="absolute top-4 right-4 p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-full relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card lg:bg-gradient-to-r lg:from-transparent lg:to-card"></div>
              </div>

              <div className="p-8 lg:p-10 flex flex-col">
                <div className="mb-6">
                  <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {selectedProject.longDescription || selectedProject.description}
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-800 text-blue-200 text-sm rounded-full border border-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex flex-col sm:flex-row gap-4">
                  {selectedProject.liveLink !== '#' ? (
                    <a 
                      href={selectedProject.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-blue-600 text-white font-medium rounded-lg transition-colors group"
                    >
                      View Live Project
                      <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <button disabled className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gray-800 text-gray-500 font-medium rounded-lg cursor-not-allowed">
                      Coming Soon
                    </button>
                  )}
                  
                  {selectedProject.repoLink && (
                    <a 
                      href={selectedProject.repoLink}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors"
                    >
                      <Github className="mr-2 w-5 h-5" />
                      Source Code
                    </a>
                  )}
                </div>
                
                <div className="mt-4 flex items-center text-xs text-gray-500 bg-gray-900/50 p-3 rounded-lg border border-gray-800">
                  <Info size={14} className="mr-2 text-primary" />
                  <span>
                    Clicking "View Live Project" opens the deployed app in a new tab. 
                    This portfolio will remain open here.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
