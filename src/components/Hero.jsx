import React from 'react';
import { ArrowRight, Github } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Abstract Background Elements */}
      <div className="absolute top-20 right-0 -z-10 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 -left-10 -z-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="max-w-3xl">
        <p className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-4">
          Hello, world.
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
          I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Dhwanil Ranpura</span>.
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed font-light">
          Data Science student and builder. I specialize in designing <strong className="font-semibold text-slate-800">machine learning systems</strong> and full-stack data products that solve real-world problems.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#projects" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-slate-900 text-white hover:bg-slate-800 font-medium transition-all hover:scale-105 active:scale-95 shadow-md hover:shadow-xl">
            View My Projects <ArrowRight className="w-5 h-5" />
          </a>
          <a href="https://github.com/dhwanil1907" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 font-medium transition-all shadow-sm hover:shadow-md">
            <Github className="w-5 h-5" /> GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
