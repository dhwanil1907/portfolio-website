import React from 'react';
import { Users, Presentation, Rocket } from 'lucide-react';

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="md:w-1/2">
            <h2 className="text-sm font-bold text-indigo-400 tracking-widest uppercase mb-3">Community impact</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-4">Leadership</h3>
            <p className="text-slate-400 text-lg">
              Beyond engineering, I am passionate about cultivating analytical communities and mentoring the next generation of data scientists.
            </p>
          </div>
          
          <div className="md:w-1/3 bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-4">
              <div>
                <p className="text-slate-400 text-sm font-medium">Role</p>
                <h4 className="text-xl font-bold text-slate-100">President</h4>
              </div>
              <div className="text-right">
                <p className="text-slate-400 text-sm font-medium">Organization</p>
                <h4 className="text-indigo-400 font-bold">Spartan Analytics</h4>
              </div>
            </div>
            <div className="flex justify-between text-sm text-slate-400">
              <span>San Jose, CA</span>
              <span>Dec 2025 — Present</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-indigo-500/50 hover:bg-slate-800/80 transition-all group">
            <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
              <Users className="w-6 h-6 text-indigo-400" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-slate-100">Scaling Membership</h4>
            <p className="text-slate-400 leading-relaxed">
              Directing a team of 7 officers, overseeing recruitment strategy and execution. Successfully scaled paid club membership by <strong className="text-indigo-300">60%</strong> (from 25 to 40 individuals) through structured outreach.
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 hover:bg-slate-800/80 transition-all group">
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
              <Presentation className="w-6 h-6 text-purple-400" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-slate-100">Technical Workshops</h4>
            <p className="text-slate-400 leading-relaxed">
              Scoped, designed, and delivered interactive Python and SQL workshops for <strong className="text-purple-300">30+ students</strong>. Translated market needs into a structured curriculum culminating in a loan default prediction capstone.
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all group">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
              <Rocket className="w-6 h-6 text-emerald-400" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-slate-100">Data Competition</h4>
            <p className="text-slate-400 leading-relaxed">
              Established and launched an annual data competition owning the full lifecycle. Designed problem statements, evaluation criteria, and judging workflows engaging <strong className="text-emerald-300">30+ participants</strong>.
            </p>
          </div>

        </div>
        
      </div>
    </section>
  );
}
