import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Code, Cpu, BookOpen, Mail, ChevronRight, Github, Linkedin, Brain, Award, ExternalLink, Sparkles, Heart, Rocket, Phone, Globe, Layers, MapPin } from 'lucide-react';
import { jsPDF } from 'jspdf';
import { PERSONAL_INFO, PROJECTS, DOCUMENTS, SKILLS, EXPERIENCE, EDUCATION } from './constants';
import { Section, Project } from './types';
import ProjectCard from './components/ProjectCard';
 
const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 
  // Close mobile menu on section change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [activeSection]);
 
  const generateResumePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    let y = 20;
 
    // Helper for section headers in PDF
    const addSectionHeader = (title: string, customY?: number) => {
      let currentY = customY !== undefined ? customY : y;
      if (customY === undefined && currentY > 270) {
        doc.addPage();
        currentY = 20;
        y = 20;
      } else if (customY === undefined) {
        y += 10;
        currentY = y;
      }
 
      doc.setFont("helvetica", "normal");
      doc.setFontSize(14);
      doc.setTextColor(0, 0, 0);
     
      const titleUpper = title.toUpperCase();
      doc.text(titleUpper, margin, currentY);
      
      const lineY = currentY + 2;
      doc.setLineWidth(0.5);
      doc.line(margin, lineY, pageWidth - margin, lineY);
     
      if (customY === undefined) y += 8;
    };
 
    // --- Header ---
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.text(PERSONAL_INFO.name.toUpperCase(), margin, y + 10);
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    let contactY = 20;
   
    const contactInfo = [
        PERSONAL_INFO.phone,
        PERSONAL_INFO.email,
        PERSONAL_INFO.address
    ];
   
    contactInfo.forEach(text => {
        doc.text(text, pageWidth - margin, contactY, { align: 'right' });
        contactY += 5;
    });

    if (PERSONAL_INFO.languages && PERSONAL_INFO.languages.length > 0) {
       contactY += 2;
       doc.setFont("helvetica", "italic");
       doc.text(PERSONAL_INFO.languages.join(", "), pageWidth - margin, contactY, { align: 'right' });
    }
 
    y += 25;

    // --- SUMMARY ---
    addSectionHeader("PROFESSIONAL SUMMARY");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    const summaryLines = doc.splitTextToSize(PERSONAL_INFO.bio, pageWidth - margin * 2);
    doc.text(summaryLines, margin, y);
    y += summaryLines.length * 5 + 5;

    // --- SKILLS ---
    addSectionHeader("TECHNICAL SKILLS");
    const skillList = SKILLS.map(s => s.name || s.items?.[0] || "").join(" • ");
    const skillLines = doc.splitTextToSize(skillList, pageWidth - margin * 2);
    doc.text(skillLines, margin, y);
    y += skillLines.length * 5 + 5;
 
    // --- EXPERIENCE ---
    addSectionHeader("EXPERIENCE");
    EXPERIENCE.forEach(exp => {
        if (y > 260) { doc.addPage(); y = 20; }
        doc.setFont("helvetica", "bold");
        doc.text(exp.company, margin, y);
        doc.setFont("helvetica", "normal");
        doc.text(exp.period, pageWidth - margin, y, { align: 'right' });
        y += 5;
        
        doc.setFont("helvetica", "italic");
        doc.text(exp.role, margin, y);
        y += 6;
        
        doc.setFont("helvetica", "normal");
        exp.description.forEach(desc => {
             const lines = doc.splitTextToSize("• " + desc, pageWidth - margin * 2 - 5);
             if (y + lines.length * 5 > 280) { doc.addPage(); y = 20; }
             doc.text(lines, margin + 5, y);
             y += lines.length * 5;
        });
        y += 4;
    });
 
    // --- EDUCATION ---
    addSectionHeader("EDUCATION");
    EDUCATION.forEach(edu => {
        if (y > 270) { doc.addPage(); y = 20; }
        doc.setFont("helvetica", "bold");
        doc.text(edu.institution, margin, y);
        doc.setFont("helvetica", "normal");
        doc.text(edu.year, pageWidth - margin, y, { align: 'right' });
        y += 5;
        doc.text(edu.degree, margin, y);
        y += 10;
    });
 
    doc.save("Rodney_Mashele_Resume.pdf");
  };
 
  const NavLink = ({ section, label }: { section: Section, label: string }) => (
    <button
      onClick={() => setActiveSection(section)}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
        activeSection === section
          ? 'bg-white text-slate-900 shadow-lg shadow-white/10'
          : 'text-slate-400 hover:text-white hover:bg-white/5'
      }`}
    >
      {label}
    </button>
  );
 
  return (
    <div className="min-h-screen flex flex-col bg-dark text-slate-100 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* Background Elements */}
      <div className="fixed inset-0 bg-grid-white opacity-[0.05] pointer-events-none z-0"></div>
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none animate-pulse-slow z-0" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px] pointer-events-none animate-pulse-slow z-0" />

      {/* Navigation */}
      <div className="fixed top-0 inset-x-0 z-50 flex justify-center pt-6 px-4">
        <nav className={`transition-all duration-500 rounded-full border border-white/10 ${scrolled ? 'glass-nav py-2 px-2 shadow-2xl shadow-black/50' : 'bg-transparent py-4 px-6 border-transparent'}`}>
          <div className="flex items-center gap-1 md:gap-2">
             <div className="hidden md:flex items-center gap-1 mr-4 pl-2">
                 <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg">R</div>
             </div>
             
             <div className="hidden md:flex bg-slate-900/50 rounded-full p-1 border border-white/5 backdrop-blur-md">
                <NavLink section="home" label="Home" />
                <NavLink section="skills" label="Expertise" />
                <NavLink section="capstone" label="Capstone" />
                <NavLink section="projects" label="Projects" />
                <NavLink section="certificates" label="Certificates" />
                <NavLink section="contact" label="Contact" />
             </div>

             {/* Mobile Menu Toggle */}
             <div className="md:hidden flex items-center justify-between w-full min-w-[300px]">
                <span className="font-bold text-lg tracking-tight pl-2">Rodney M.</span>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 text-slate-200 hover:text-white bg-slate-800/50 rounded-full"
                >
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
             </div>
          </div>
        </nav>
      </div>
 
      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden animate-fade-in-up">
           <button onClick={() => setMobileMenuOpen(false)} className="absolute top-6 right-6 p-2 text-slate-400">
             <X size={32} />
           </button>
           {['home', 'skills', 'capstone', 'projects', 'certificates', 'contact'].map((s) => (
             <button
               key={s}
               onClick={() => { setActiveSection(s as Section); setMobileMenuOpen(false); }}
               className={`text-2xl font-bold ${activeSection === s ? 'text-blue-400' : 'text-slate-400'}`}
             >
               {s.charAt(0).toUpperCase() + s.slice(1)}
             </button>
           ))}
        </div>
      )}
 
      {/* Main Content Area */}
      <main className="flex-grow relative z-10 pt-24 md:pt-32 pb-20">
 
        {/* Project Modal Detail View */}
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
             <div 
               className="absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
               onClick={() => setSelectedProject(null)}
             ></div>
             
             <div className="bg-slate-900 border border-slate-700 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative flex flex-col lg:flex-row animate-fade-in-up overflow-hidden">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-20 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-all backdrop-blur-sm"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Modal Image */}
                <div className="lg:w-2/5 relative min-h-[300px] lg:min-h-full">
                  <img src={selectedProject.image} alt={selectedProject.title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900"></div>
                </div>

                {/* Modal Content */}
                <div className="lg:w-3/5 p-8 lg:p-10 flex flex-col">
                   <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                         <span className="px-3 py-1 text-xs font-bold tracking-wider text-blue-400 uppercase bg-blue-500/10 rounded-full border border-blue-500/20">
                           {selectedProject.category}
                         </span>
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">{selectedProject.title}</h2>
                      <p className="text-slate-300 text-lg leading-relaxed mb-6">
                        {selectedProject.longDescription || selectedProject.description}
                      </p>
                   </div>

                   {/* Tech Stack */}
                   <div className="mb-8">
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Tech Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map(t => (
                          <span key={t} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-lg text-sm border border-slate-700">
                            {t}
                          </span>
                        ))}
                      </div>
                   </div>

                   {/* Documentation if available */}
                   {selectedProject.fullDocumentation && (
                      <div className="mb-8 p-4 bg-slate-950/50 rounded-xl border border-slate-800 text-sm font-mono text-slate-400">
                         {selectedProject.fullDocumentation}
                      </div>
                   )}

                   {/* Actions */}
                   <div className="mt-auto flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-800">
                      {selectedProject.demoUrl && (
                        <a
                          href={selectedProject.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white py-3.5 rounded-xl font-bold text-center transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group"
                        >
                          <Rocket className="w-5 h-5 group-hover:-translate-y-1 transition-transform" /> 
                          Launch Project
                        </a>
                      )}
                      <p className="text-xs text-slate-500 mt-2 text-center sm:hidden">
                        (Opens in new tab)
                      </p>
                   </div>
                </div>
             </div>
          </div>
        )}
 
        {/* HOME SECTION */}
        {activeSection === 'home' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
            <div className="flex flex-col items-center text-center pt-6 pb-20">
               
               {/* Profile Image with Glow Effect */}
               <div className="relative mb-8 animate-fade-in-up" style={{animationDelay: '0s'}}>
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl transform scale-125"></div>
                  <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full p-1.5 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-2xl">
                    <img 
                      src={PERSONAL_INFO.profileImage} 
                      alt={PERSONAL_INFO.name} 
                      className="w-full h-full object-cover rounded-full border-4 border-slate-950"
                    />
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -bottom-2 -right-2 bg-slate-900 border border-slate-700 p-3 rounded-2xl shadow-lg animate-bounce">
                     <span className="text-2xl">🚀</span>
                  </div>
               </div>

               {/* Status Badge */}
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm mb-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-sm font-medium text-slate-300">Available for innovative projects</span>
               </div>

               {/* Hero Text */}
               <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white mb-6 leading-[1.1] animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                 Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Intelligence</span> <br className="hidden md:block"/>
                 into Reality
               </h1>
               
               <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                 I'm <span className="text-white font-semibold">Rodney Mashele</span>, an AI Engineer bridging the gap between complex machine learning models and intuitive user experiences.
               </p>

               {/* Hero Actions */}
               <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                  <button 
                    onClick={() => setActiveSection('projects')}
                    className="px-8 py-4 bg-white text-slate-950 rounded-full font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
                  >
                    View My Work <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={generateResumePDF}
                    className="px-8 py-4 bg-slate-800/50 text-white border border-slate-700 hover:bg-slate-800 hover:border-slate-600 rounded-full font-bold transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                  >
                    <Download className="w-4 h-4" /> Download Resume
                  </button>
               </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
               <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl flex items-center gap-4 hover:border-blue-500/30 transition-all">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400"><Brain className="w-6 h-6" /></div>
                  <div>
                    <h3 className="font-bold text-white text-lg">AI & ML</h3>
                    <p className="text-sm text-slate-400">Specialized in End-to-End Solutions</p>
                  </div>
               </div>
               <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl flex items-center gap-4 hover:border-purple-500/30 transition-all">
                  <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400"><Layers className="w-6 h-6" /></div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Full Stack</h3>
                    <p className="text-sm text-slate-400">React, Python, FastAPI</p>
                  </div>
               </div>
               <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl flex items-center gap-4 hover:border-pink-500/30 transition-all">
                  <div className="p-3 bg-pink-500/10 rounded-xl text-pink-400"><Rocket className="w-6 h-6" /></div>
                  <div>
                    <h3 className="font-bold text-white text-lg">7+ Projects</h3>
                    <p className="text-sm text-slate-400">Deployed & Production Ready</p>
                  </div>
               </div>
            </div>
          </div>
        )}
 
        {/* EXPERTISE SECTION */}
        {activeSection === 'skills' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16 animate-fade-in-up">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Tech Stack</h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                  A comprehensive toolkit for building scalable, intelligent systems from data ingestion to user interface.
                </p>
             </div>
 
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
               {/* Skills Grouped */}
               {['ML/AI', 'Languages', 'Frameworks', 'Tools', 'Databases', 'Soft Skills'].map((category, idx) => (
                  <div key={category} className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl hover:bg-slate-900/60 transition-colors">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                       {category === 'ML/AI' && <Brain className="w-5 h-5 text-purple-400" />}
                       {category === 'Languages' && <Code className="w-5 h-5 text-blue-400" />}
                       {category === 'Frameworks' && <Layers className="w-5 h-5 text-green-400" />}
                       {category === 'Tools' && <Cpu className="w-5 h-5 text-orange-400" />}
                       {category === 'Databases' && <Globe className="w-5 h-5 text-cyan-400" />}
                       {category === 'Soft Skills' && <Heart className="w-5 h-5 text-pink-400" />}
                       {category}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {SKILLS.filter(s => s.category === category).map(skill => (
                        <div key={skill.name} className="bg-slate-800 text-slate-300 px-4 py-2 rounded-lg text-sm font-medium border border-slate-700/50 hover:border-slate-500 hover:text-white transition-all cursor-default">
                           {skill.name}
                        </div>
                      ))}
                    </div>
                  </div>
               ))}
             </div>
          </div>
        )}
 
        {/* CAPSTONE SECTION */}
        {activeSection === 'capstone' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <span className="text-blue-500 font-bold tracking-widest text-sm uppercase mb-2 block">Featured Work</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">The Capstone</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">An End-to-End AI Solution integrating advanced model orchestration with a modern frontend.</p>
            </div>
           
            <div className="max-w-4xl mx-auto h-[500px] animate-fade-in-up" style={{animationDelay: '0.2s'}}>
               {PROJECTS.filter(p => p.category === 'Capstone').map((project) => (
                  <div key={project.id} className="h-full">
                    <ProjectCard project={project} onViewDetails={setSelectedProject} />
                  </div>
               ))}
            </div>
          </div>
        )}
 
        {/* PROJECTS SECTION */}
        {activeSection === 'projects' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Selected Projects</h2>
              <p className="text-slate-400 max-w-2xl text-lg">Innovative solutions across AI, Web, and Design.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[400px]">
              {PROJECTS.map((project, index) => (
                <div key={project.id} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <ProjectCard project={project} onViewDetails={setSelectedProject} />
                </div>
              ))}
            </div>
          </div>
        )}
 
        {/* CERTIFICATES SECTION */}
        {activeSection === 'certificates' && (
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="mb-16 animate-fade-in-up">
                 <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Credentials & Certifications</h2>
                 <p className="text-slate-400 text-lg">Verified accomplishments in Artificial Intelligence and Development.</p>
             </div>
 
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {DOCUMENTS.map((doc, idx) => (
                  <div key={doc.id} className="group bg-slate-900/50 p-8 rounded-3xl border border-slate-800 hover:border-slate-600 hover:bg-slate-800/50 transition-all flex flex-col justify-between h-full animate-fade-in-up" style={{animationDelay: `${idx * 0.1}s`}}>
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-bold border bg-slate-800 text-slate-300 border-slate-700">
                          {doc.type}
                        </span>
                        <Award className="w-6 h-6 text-yellow-500/50 group-hover:text-yellow-400 transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 leading-tight">{doc.title}</h3>
                      <p className="text-slate-400 text-sm mb-2 font-mono">{doc.date}</p>
                      <p className="text-slate-500 text-sm">{doc.content}</p>
                    </div>
                    <div className="pt-6 mt-4 border-t border-slate-800">
                       <a href={doc.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-bold transition-colors">
                           Verify Credential <ExternalLink className="w-4 h-4" />
                       </a>
                    </div>
                  </div>
                ))}
             </div>
           </div>
        )}
 
        {/* CONTACT SECTION */}
        {activeSection === 'contact' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
             <div className="bg-slate-900 border border-slate-800 rounded-[3rem] p-10 md:p-16 text-center shadow-2xl animate-fade-in-up">
                <span className="text-6xl mb-6 block">📬</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Let's Create Something Amazing</h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-12 text-left max-w-2xl mx-auto">
                    <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                       <h3 className="text-slate-400 text-sm uppercase tracking-wider font-bold mb-2">Email Me</h3>
                       <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xl text-white font-bold hover:text-blue-400 transition-colors break-all">
                          {PERSONAL_INFO.email}
                       </a>
                    </div>
                    <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                       <h3 className="text-slate-400 text-sm uppercase tracking-wider font-bold mb-2">Call Me</h3>
                       <p className="text-xl text-white font-bold">
                          {PERSONAL_INFO.phone}
                       </p>
                    </div>
                </div>

                <div className="flex justify-center gap-6">
                   <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" className="p-4 bg-slate-800 rounded-full text-white hover:bg-white hover:text-slate-900 transition-all transform hover:scale-110">
                      <Github className="w-8 h-8" />
                   </a>
                   <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="p-4 bg-slate-800 rounded-full text-white hover:bg-[#0077b5] hover:text-white transition-all transform hover:scale-110">
                      <Linkedin className="w-8 h-8" />
                   </a>
                </div>
             </div>
          </div>
        )}
 
      </main>
 
      {/* Footer */}
      <footer className="border-t border-slate-800/50 py-12 bg-slate-950 relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <div className="flex justify-center items-center gap-2 mb-4">
              <span className="font-display font-bold text-2xl text-white">Rodney Mashele</span>
           </div>
           <p className="text-slate-500 text-sm">© 2025 All rights reserved.</p>
           <p className="text-slate-600 text-xs mt-4 flex items-center justify-center gap-1">
             Engineered with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> and React
           </p>
        </div>
      </footer>
    </div>
  );
};
 
export default App;