import React from 'react';
import { Database, Layout, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div>
            <h2 className="text-sm font-bold text-indigo-600 tracking-widest uppercase mb-3">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Bridging Data Science and Software Engineering</h3>
            
            <div className="prose prose-slate prose-lg text-slate-600">
              <p className="mb-4">
                I am currently pursuing a Bachelor of Science in Data Science at San Jose State University, expecting to graduate in May 2027. 
              </p>
              <p className="mb-4">
                My passion lies at the intersection of modeling complex data and building accessible, user-facing applications. I don't just train machine learning models in notebooks; I focus on packaging them into full-stack predictive systems that drive business impact and user value.
              </p>
              <p>
                Whether it's automating workflows, engineering features for anomaly detection, or leading academic data science organizations, my approach is always centered around measurable impact and robust engineering.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            {/* Decorative background for cards */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <Database className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">ML Systems</h4>
              <p className="text-slate-600 text-sm">Building predictive pipelines from data engineering to model deployment.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow sm:mt-12">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Layout className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Full-Stack Data</h4>
              <p className="text-slate-600 text-sm">Translating analytical logic into interactive user interfaces using React and APIs.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow sm:-mt-6 sm:col-span-2 mx-auto sm:w-2/3">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2 text-center">Problem Solving</h4>
              <p className="text-slate-600 text-sm text-center">Tackling ambiguous operational and business challenges with analytical precision.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
