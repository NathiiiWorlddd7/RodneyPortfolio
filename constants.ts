import { Project, Skill, Experience, Education, Document } from './types';

export const SOCIAL_LINKS = {
  github: "https://github.com/NathiiiWorlddd7",
  linkedin: "https://www.linkedin.com/in/rodney-mashele-151ab21b3",
  email: "mailto:rodneynathi2@gmail.com"
};

export const PERSONAL_INFO = {
  name: "Rodney Mashele",
  title: "AI Engineer & Systems Developer",
  bio: "A motivated and detail-oriented Systems Development graduate with a strong foundation in full-stack web development, object-oriented programming, and network fundamentals. Passionate about building scalable digital solutions and always eager to learn and grow in dynamic tech environments.",
  objective: "A motivated and detail-oriented Systems Development graduate with a strong foundation in full-stack web development, object-oriented programming, and network fundamentals. Passionate about building scalable digital solutions and always eager to learn and grow in dynamic tech environments.",
  email: "rodneynathi2@gmail.com",
  phone: "0769326576",
  address: "Johannesburg, Gauteng",
  languages: ["Isizulu", "Setswana", "English"],
  socials: SOCIAL_LINKS,
  profileImage: "https://avatars.githubusercontent.com/u/165995552?v=4"
};

export const BIO = {
  short: PERSONAL_INFO.bio,
  long: "A motivated and detail-oriented Systems Development graduate with a strong foundation in full-stack web development, object-oriented programming, and network fundamentals. Passionate about building scalable digital solutions and always eager to learn and grow in dynamic tech environments. Proven experience in practical development projects and network configuration, with a commitment to excellence, collaboration, and continuous improvement."
};

export const PROJECTS: Project[] = [
  {
    id: 'end-to-end-ai',
    title: 'End-to-End AI Solution',
    description: 'A comprehensive AI-driven platform integrating multiple models for seamless automated workflows.',
    longDescription: 'This flagship project demonstrates a full-lifecycle AI application. It orchestrates data ingestion, processing, model inference, and result visualization in a unified dashboard. Designed to solve complex business automation problems.',
    fullDocumentation: 'Architecture: Microservices with FastAPI.\nModels: Custom TensorFlow models for prediction.\nFrontend: React dashboard for real-time monitoring.',
    techStack: ['Python', 'React', 'TensorFlow', 'FastAPI'],
    liveLink: 'https://areyeng.vercel.app/',
    demoUrl: 'https://areyeng.vercel.app/',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    category: 'Capstone'
  },
  {
    id: 'ai-concept-chatbot',
    title: 'AI Concept Chatbot',
    description: 'An intelligent conversational agent capable of explaining complex AI concepts to beginners.',
    longDescription: 'Built using Voiceflow, this chatbot leverages NLP to parse user intent and deliver educational content about Artificial Intelligence.',
    techStack: ['Voiceflow', 'NLP', 'Prompt Engineering'],
    liveLink: 'https://creator.voiceflow.com/share/68e8ee76929ec0030f475bb3/production',
    demoUrl: 'https://creator.voiceflow.com/share/68e8ee76929ec0030f475bb3/production',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1000',
    category: 'AI'
  },
  {
    id: 'sector-specific-ai',
    title: 'Sector-Specific AI Prototype',
    description: 'A specialized AI interface design tailored for industry-specific data analysis and visualization.',
    techStack: ['Figma', 'UI/UX Design', 'Prototyping'],
    liveLink: 'https://veto-repo-12732681.figma.site/',
    demoUrl: 'https://veto-repo-12732681.figma.site/',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    category: 'AI'
  },
  {
    id: 'ai-resume-builder',
    title: 'AI Resume Builder',
    description: 'Intelligent resume creation tool that optimizes content for ATS systems.',
    techStack: ['Next.js', 'Typescript', 'AI Integration'],
    liveLink: 'https://resumeproject-five.vercel.app/',
    demoUrl: 'https://resumeproject-five.vercel.app/',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1000',
    category: 'Web'
  }
];

export const SKILLS: Skill[] = [
  // Technical Proficiencies from CV
  { category: 'Languages', name: 'Java' },
  { category: 'Languages', name: 'Python' },
  { category: 'Languages', name: 'PHP' },
  { category: 'Languages', name: 'JavaScript' },
  { category: 'Frameworks', name: 'React' },
  { category: 'Databases', name: 'MongoDB' },
  { category: 'Databases', name: 'SQL' },
  { category: 'Tools', name: 'Android Studio' },
  { category: 'Tools', name: 'VS Code' },
  { category: 'Tools', name: 'NetBeans' },
  
  // Soft Skills from CV
  { category: 'Soft Skills', name: 'Problem-solving' },
  { category: 'Soft Skills', name: 'Communication' },
  { category: 'Soft Skills', name: 'TeamWork' },
  { category: 'Soft Skills', name: 'Attention to detail' },
  
  // Retaining some AI specific skills for the portfolio role
  { category: 'ML/AI', name: 'Prompt Engineering' },
  { category: 'ML/AI', name: 'NLP' },
  { category: 'ML/AI', name: 'Generative AI & LLMs' },
  { category: 'Frameworks', name: 'FastAPI' }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'exp1',
    role: "Java Developer Intern",
    company: "Studeliason",
    period: "Present",
    description: [
      "Practical development projects.",
      "Network configuration.",
      "Collaboration and continuous improvement."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: 'edu1',
    degree: "Diploma in IT In Systems Development",
    institution: "Boston City Campus",
    year: "2023" 
  }
];

export const DOCUMENTS: Document[] = [
  { 
    id: 'cert-azure', 
    type: 'Certificate', 
    title: 'Artificial Intelligence on Microsoft Azure', 
    date: 'Nov 24, 2025', 
    content: 'Authorized by Microsoft and offered through Coursera.', 
    url: 'https://coursera.org/verify/3G2V9XLR8VWI' 
  },
  { 
    id: 'cert-trustworthy', 
    type: 'Certificate', 
    title: 'Trustworthy AI: Managing Bias, Ethics, and Accountability', 
    date: 'Nov 24, 2025', 
    content: 'Authorized by Johns Hopkins University and offered through Coursera.', 
    url: 'https://coursera.org/verify/SV4TEN9Z09S5' 
  },
  { 
    id: 'cert-genai', 
    type: 'Certificate', 
    title: 'Generative AI for Everyone', 
    date: 'Nov 24, 2025', 
    content: 'Authorized by DeepLearning.AI and offered through Coursera.', 
    url: 'https://coursera.org/verify/G1FWTSRDW0RH' 
  },
  { 
    id: 'cert-responsible', 
    type: 'Certificate', 
    title: 'Introduction to Responsible AI', 
    date: 'Nov 24, 2025', 
    content: 'Authorized by Google Cloud and offered through Coursera.', 
    url: 'https://coursera.org/verify/E178Y5PJWXF8' 
  },
  { 
    id: 'cert-chatbots', 
    type: 'Certificate', 
    title: 'Building AI Powered Chatbots Without Programming', 
    date: 'Nov 24, 2025', 
    content: 'Authorized by IBM and offered through Coursera.', 
    url: 'https://coursera.org/verify/KGYUKLGCEISL' 
  },
  { 
    id: 'cert-python', 
    type: 'Certificate', 
    title: 'Python for Data Science, AI & Development', 
    date: 'Nov 24, 2025', 
    content: 'Authorized by IBM and offered through Coursera.', 
    url: 'https://coursera.org/verify/LWGTLXKPALAE' 
  }
];