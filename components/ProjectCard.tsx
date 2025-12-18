import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  return (
    <div 
      onClick={() => onViewDetails(project)}
      className="group relative bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-500 cursor-pointer h-full flex flex-col hover:shadow-2xl hover:shadow-blue-500/10"
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Category Tag */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 bg-slate-950/80 backdrop-blur-md text-white text-xs font-medium rounded-full border border-slate-800">
            {project.category}
          </span>
        </div>

        {/* Hover Overlay Button */}
        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/40 backdrop-blur-[2px]">
           <span className="px-6 py-2 bg-white text-slate-900 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
             View Project <ArrowRight className="w-4 h-4" />
           </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex-1 flex flex-col relative">
        <div className="flex-1">
          <h3 className="text-xl font-display font-bold text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-4">
            {project.description}
          </p>
        </div>
        
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50">
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="text-[10px] uppercase tracking-wider font-semibold bg-slate-800/50 text-slate-300 px-2 py-1 rounded-md border border-slate-700/50">
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
             <span className="text-[10px] bg-slate-800/50 text-slate-500 px-2 py-1 rounded-md border border-slate-700/50">+ {project.techStack.length - 3}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;