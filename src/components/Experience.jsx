import React from 'react';
import { Briefcase, TrendingUp, Workflow, Award } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-indigo-600 tracking-widest uppercase mb-3">Professional Journey</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Experience</h3>
        </div>

        <div className="relative border-l-2 border-slate-200 pl-8 ml-4 md:ml-0 md:pl-0 md:border-none space-y-12">
          
          {/* Timeline Item */}
          <div className="relative md:flex items-start justify-between group">
            
            {/* Desktop Timeline Node */}
            <div className="hidden md:flex flex-col items-center absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-8">
              <div className="w-px h-full bg-slate-200 group-hover:bg-indigo-200 transition-colors"></div>
              <div className="absolute top-2 w-10 h-10 rounded-full bg-indigo-50 border-4 border-white shadow-sm flex items-center justify-center text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Briefcase className="w-4 h-4" />
              </div>
            </div>

            {/* Mobile Timeline Node */}
            <div className="md:hidden absolute -left-[2.6rem] top-2 w-10 h-10 rounded-full bg-indigo-50 border-4 border-white shadow-sm flex items-center justify-center text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
              <Briefcase className="w-4 h-4" />
            </div>

            {/* Left Side: Empty on Desktop, Role info on Mobile */}
            <div className="md:w-[45%] text-left md:text-right pr-0 md:pr-12 md:pt-4">
              <h4 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">Data Automation Intern</h4>
              <p className="text-slate-600 font-medium mt-1">Language & Culture Worldwide</p>
              <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start sm:items-center md:items-end lg:items-center justify-start md:justify-end gap-2 sm:gap-4 md:gap-2 lg:gap-4 mt-2 text-sm text-slate-500">
                <span className="bg-slate-100 px-3 py-1 rounded-full text-slate-700 font-medium">Sep 2024 — Feb 2025</span>
                <span>Chicago, IL (Remote)</span>
              </div>
            </div>

            {/* Right Side: Description */}
            <div className="md:w-[45%] pl-0 md:pl-12 mt-6 md:mt-0 pt-1 border border-slate-100 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <Workflow className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                  <span className="text-slate-600"><strong className="text-slate-800">Automated end-to-end data workflows</strong> using Microsoft Power Automate, streamlining recurring operational processes and cutting manual processing time by <span className="bg-indigo-50 text-indigo-700 font-semibold px-2 py-0.5 rounded">30%+</span>.</span>
                </li>
                <li className="flex gap-3">
                  <TrendingUp className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                  <span className="text-slate-600">Built <strong className="text-slate-800">Power BI dashboards</strong> for 10+ initiatives. Collaborated cross-functionally with operations teams to define requirements, track KPIs, and enable faster leadership decisions.</span>
                </li>
                <li className="flex gap-3">
                  <Award className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                  <span className="text-slate-600">Analyzed operational bottlenecks across teams, delivering reporting tools that closed the loop with a <strong className="text-slate-800">15% engagement improvement</strong> among stakeholders.</span>
                </li>
              </ul>
            </div>
            
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
