import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ChevronRight } from 'lucide-react';
import { navLinks, personalInfo } from '../../data/portfolio';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on click
  useEffect(() => {
    const handleHashChange = () => setMobileMenuOpen(false);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1B1F2E]/90 backdrop-blur-md shadow-sm py-3 border-b border-[#3E5C4F]' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <a href="#home" className="font-bold text-xl tracking-tight text-[#EAF2EE] hover:text-[#6EC99A] transition-colors duration-[250ms] ease-in-out z-50">
            {personalInfo.name}
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex gap-1 bg-[#2A2F40]/50 p-1 rounded-full border border-[#3E5C4F] backdrop-blur-sm">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.path} 
                  className="px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-[250ms] ease-in-out text-[#EAF2EE] hover:text-[#6EC99A] hover:bg-[#3E5C4F]/30 border border-transparent"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-[#EAF2EE] hover:text-[#6EC99A] transition-colors duration-[250ms] ease-in-out">
                <span className="sr-only">GitHub</span>
                <Github className="w-5 h-5" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#EAF2EE] hover:text-[#6EC99A] transition-colors duration-[250ms] ease-in-out">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#contact" className="bg-[#6EC99A] hover:bg-[#5bb889] text-[#1B1F2E] px-5 py-2 rounded-lg text-sm font-medium transition-all duration-[250ms] ease-in-out flex items-center gap-1 group">
                Contact
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center z-50">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="p-2 rounded-lg text-slate-300 hover:bg-white/10 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-[#1B1F2E] z-40 lg:hidden transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-24 px-6 pb-8 overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.path} 
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-4 text-xl font-semibold rounded-xl transition-colors text-[#EAF2EE] hover:text-[#6EC99A] hover:bg-[#2A2F40]"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="mt-auto pt-8 border-t border-[#3E5C4F]">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <a href={personalInfo.github} className="flex items-center justify-center gap-2 py-3 rounded-lg bg-[#2A2F40] border border-[#3E5C4F] text-[#EAF2EE] hover:text-[#6EC99A] font-medium transition-colors">
                <Github className="w-5 h-5" /> GitHub
              </a>
              <a href={personalInfo.linkedin} className="flex items-center justify-center gap-2 py-3 rounded-lg bg-[#2A2F40] border border-[#3E5C4F] text-[#EAF2EE] hover:text-[#6EC99A] font-medium transition-colors">
                <Linkedin className="w-5 h-5" /> LinkedIn
              </a>
            </div>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center w-full py-4 text-center rounded-lg bg-[#6EC99A] hover:bg-[#5bb889] text-[#1B1F2E] font-bold text-lg transition-colors border border-[#6EC99A]">
              <Mail className="w-5 h-5 mr-2" /> Get in Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
