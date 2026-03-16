import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

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

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Skills', href: '#skills' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="font-bold text-xl tracking-tight text-slate-900 hover:text-indigo-600 transition-colors">
            Dhwanil Ranpura
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
            <div className="h-4 w-px bg-slate-200"></div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/dhwanil1907" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/dhwanil-ranpura" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#0A66C2] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#contact" className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm">
                Contact Me
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-600 hover:text-slate-900">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-700 hover:text-indigo-600 px-2 py-2 rounded-md hover:bg-slate-50"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4 px-2 pt-4 border-t border-slate-100">
            <a href="https://github.com/dhwanil1907" className="text-slate-500 hover:text-slate-900">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/dhwanil-ranpura" className="text-slate-500 hover:text-[#0A66C2]">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 text-slate-500 hover:text-indigo-600">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
