import React from 'react';
import { ExternalLink, Github, Map, BarChart2, Briefcase, TrendingUp } from 'lucide-react';

const projects = [
  {
    title: 'SafeRoute',
    subtitle: 'AI Safety Navigation System',
    description: 'A full-stack AI web application offering context-aware safety routing based on real-time spatio-temporal crime data. Placed 3rd out of 91 teams in a judged hackathon.',
    details: [
      'Shipped real-time route alerts via WebSockets, reducing notification latency by 40%.',
      'Boosted model performance to 87% accuracy with crowdsourced inputs.',
      'Validated using live user feedback with rapid iteration loops.'
    ],
    tech: ['React', 'Firebase', 'Mapbox GL', 'Python', 'WebSockets'],
    icon: Map,
    github: '#', // Add actual link later if available
    live: '#'
  },
  {
    title: 'Commercial Lease Market Forecasting',
    subtitle: 'Predicting Rent Trends',
    description: 'Analyzed 194K+ commercial lease records to identify macroeconomic drivers of rent trends across the market. Earned Overall Winner at ASA DataFest.',
    details: [
      'Built ARIMA and regression forecasting models, achieving 92% accuracy (MAPE).',
      'Improved forecast performance by 18% using targeted feature engineering.',
      'Extracted actionable insights regarding market volatility.'
    ],
    tech: ['Python', 'R', 'ARIMA', 'Regression Pandas'],
    icon: BarChart2,
    github: '#'
  },
  {
    title: 'SBA Loan Default Prediction System',
    subtitle: 'Cost-Sensitive ML Modeling',
    description: 'Built and evaluated ML models (Decision Tree, Random Forest, Neural Network) to predict SBA loan outcomes on an 899K records dataset.',
    details: [
      'Tuned a cost-sensitive Decision Tree achieving 93% accuracy.',
      'Demonstrated $6.8M projected profit through business-impact optimized modeling.',
      'Compared predictive metrics directly with business financial impact.'
    ],
    tech: ['Python', 'Scikit-learn', 'Neural Networks', 'Decision Trees'],
    icon: Briefcase,
    github: '#'
  },
  {
    title: 'KPI Anomaly Detection System',
    subtitle: 'Automated Insight Generation',
    description: 'An end-to-end automated platform that replaces manual KPI monitoring with a modular ML pipeline and multi-model anomaly detection backend.',
    details: [
      'Shipped a Streamlit + FastAPI prototype as the user-facing product.',
      'Enabled non-technical stakeholders to surface deviations automatically.',
      'Documented clear specs to ensure simple handoff and future scaling.'
    ],
    tech: ['Python', 'Scikit-learn', 'Streamlit', 'FastAPI'],
    icon: TrendingUp,
    github: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-indigo-600 tracking-widest uppercase mb-3">What I've Built</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Featured Projects</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
              <div className="p-8 flex-grow">
                
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <project.icon className="w-6 h-6" />
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} className="text-slate-400 hover:text-slate-900 transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} className="text-slate-400 hover:text-indigo-600 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h4 className="text-2xl font-bold text-slate-900 mb-1">{project.title}</h4>
                <p className="text-indigo-600 font-medium text-sm mb-4">{project.subtitle}</p>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {project.details.map((detail, i) => (
                    <li key={i} className="text-sm text-slate-600 flex items-start">
                      <span className="text-indigo-400 mr-2 mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

              </div>
              
              <div className="px-8 py-5 bg-slate-50 border-t border-slate-100 flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-600 shadow-sm">
                    {t}
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
