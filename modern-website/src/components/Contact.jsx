import React from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-slate-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-sm font-bold text-indigo-400 tracking-widest uppercase mb-3">Get In Touch</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's Connect</h3>
        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
          Whether you're looking to discuss a potential project, a full-time opportunity, or just want to chat about data, I'm currently open to new connections.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
          <a href="mailto:dhwanil.ranpura@sjsu.edu" className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-indigo-500/30">
            <Mail className="w-5 h-5" /> say hello
          </a>
          <a href="https://linkedin.com/in/dhwanil-ranpura" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-full font-semibold transition-all shadow-sm">
            <Linkedin className="w-5 h-5" /> LinkedIn
          </a>
          <a href="https://github.com/dhwanil1907" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-full font-semibold transition-all shadow-sm">
            <Github className="w-5 h-5" /> GitHub
          </a>
        </div>

      </div>
    </section>
  );
}
