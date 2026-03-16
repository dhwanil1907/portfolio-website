import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-slate-800/50 mb-8">
          
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <a href="#" className="font-bold text-xl tracking-tight text-white mb-2 block">
              Dhwanil Ranpura
            </a>
            <p className="text-sm">Data Science Student & Software Engineer</p>
          </div>
          
          <div className="flex gap-6">
            <a href="https://github.com/dhwanil1907" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/dhwanil-ranpura" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A66C2] transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:dhwanil.ranpura@sjsu.edu" className="hover:text-indigo-400 transition-colors">
              <span className="sr-only">Email</span>
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm font-medium">
          <p>© {new Date().getFullYear()} Dhwanil Ranpura. Built with React & Tailwind CSS.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Back to top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
