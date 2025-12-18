export type Section = 'home' | 'skills' | 'capstone' | 'projects' | 'certificates' | 'contact';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string; // For the modal detail
  fullDocumentation?: string; // Added for the new layout
  techStack: string[];
  liveLink: string; // Used in constants
  demoUrl?: string; // Mapped from liveLink for new component
  videoUrl?: string;
  repoLink?: string; // Used in constants
  repoUrl?: string; // Mapped from repoLink
  image: string;
  category: string;
}

export interface Skill {
  category: string;
  items?: string[]; // Legacy support
  name?: string; // New layout support
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
}

export interface Document {
  id: string;
  type: 'Certificate' | 'Badge' | 'Document';
  title: string;
  date: string;
  content: string;
  url?: string;
}
