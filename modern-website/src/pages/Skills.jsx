import React from 'react';
import { skillsData } from '../data/portfolio';

export default function Skills() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      
      <div className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#EAF2EE] mb-6">Technical Tools</h1>
        <div className="w-20 h-1 bg-[#6EC99A] rounded-full mx-auto mb-8"></div>
        <p className="text-xl font-light text-[#EAF2EE] opacity-85 max-w-2xl mx-auto description-text">
          My primary stack spans the entire data lifecycle—from ingestion and modeling to full-stack frontend integration and deployment.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillsData.map((category, idx) => (
          <div key={idx} className="bg-[#2A2F40] p-4 rounded-[10px] border-[0.5px] border-[#3E5C4F]">
            <h3 className="text-lg font-semibold text-[#6EC99A] mb-4">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span key={i} className="px-[10px] py-[4px] bg-[#1B1F2E] border border-[#3E5C4F] rounded-md text-sm text-[#EAF2EE] transition-colors shadow-sm cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
