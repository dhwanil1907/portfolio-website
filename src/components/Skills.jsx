import React from 'react';
import { Code2, BrainCircuit, LayoutTemplate, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    skills: ['Python', 'SQL', 'JavaScript', 'Java', 'R', 'HTML', 'CSS']
  },
  {
    title: 'AI & Machine Learning',
    icon: BrainCircuit,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'OpenAI API', 'LLMs', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn']
  },
  {
    title: 'Frontend & Backend',
    icon: LayoutTemplate,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
    skills: ['React', 'FastAPI', 'Flask', 'Firebase', 'Streamlit', 'WebSockets', 'Tailwind CSS']
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
    skills: ['Power BI', 'Tableau', 'Snowflake', 'MySQL', 'AWS', 'Git', 'GitHub', 'Power Automate']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-indigo-600 tracking-widest uppercase mb-3">Technical Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Skills</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group">
              <div className={`w-12 h-12 ${category.bgColor} ${category.color} flex items-center justify-center rounded-xl mb-6 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-4">{category.title}</h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
