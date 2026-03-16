import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

export default function Footer() {
  return (
    <footer className="bg-[#1B1F2E] border-t border-[#3E5C4F] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center sm:flex-row sm:justify-between text-center sm:text-left">
        <div className="mb-4 sm:mb-0">
          <p className="text-[#EAF2EE] font-semibold mb-1">{personalInfo.name}</p>
          <p className="text-[#EAF2EE] opacity-80 description-text text-sm">Built with React & Tailwind CSS.</p>
        </div>
        <div className="flex gap-4">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-[#EAF2EE] hover:text-[#6EC99A] hover:bg-[#3E5C4F]/30 transition-colors duration-[250ms] border border-transparent hover:border-[#3E5C4F]">
            <span className="sr-only">GitHub</span>
            <Github className="w-5 h-5" />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-[#EAF2EE] hover:text-[#6EC99A] hover:bg-[#3E5C4F]/30 transition-colors duration-[250ms] border border-transparent hover:border-[#3E5C4F]">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="p-2 rounded-full text-[#EAF2EE] hover:text-[#6EC99A] hover:bg-[#3E5C4F]/30 transition-colors duration-[250ms] border border-transparent hover:border-[#3E5C4F]">
            <span className="sr-only">Email</span>
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
