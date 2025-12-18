import React, { useState } from 'react';
import { Menu, X, Code2, User, Briefcase, Mail, FileText } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Projects', href: '#projects', icon: <Code2 size={18} /> },
    { name: 'Expertise', href: '#expertise', icon: <Briefcase size={18} /> },
    { name: 'About', href: '#about', icon: <User size={18} /> },
    { name: 'Resume', href: '#resume', icon: <FileText size={18} /> },
    { name: 'Contact', href: '#contact', icon: <Mail size={18} /> },
  ];

  return (
    <nav className="fixed w-full z-50 bg-dark/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
               <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">Rodney Mashele</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2"
                >
                  {item.icon}
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
