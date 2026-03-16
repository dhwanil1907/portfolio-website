import React from 'react';
import { Award } from 'lucide-react';
import { awardsData } from '../data/portfolio';

export default function Awards() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#EAF2EE] mb-6">Honors & Awards</h1>
        <div className="w-20 h-1 bg-[#6EC99A] rounded-full mb-8"></div>
        <p className="text-xl font-light text-[#EAF2EE] opacity-85 description-text">Recognition for building innovative data products and predictive systems.</p>
      </div>

      <div className="space-y-8">
        {awardsData.map((award, idx) => (
          <div key={idx} className="bg-[#2A2F40] rounded-2xl border-[0.5px] border-[#3E5C4F] p-8 flex flex-col md:flex-row gap-8 items-start hover:border-[#6EC99A] hover:-translate-y-1 transition-all duration-[250ms]">
            
            <div className="w-16 h-16 bg-[#1B1F2E] rounded-2xl flex items-center justify-center shrink-0 border border-[#3E5C4F]">
              <Award className="w-8 h-8 text-[#6EC99A]" />
            </div>

            <div className="w-full">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                <h3 className="text-2xl font-bold text-[#EAF2EE]">{award.title}</h3>
                <span className="bg-[#6EC99A] text-[#1B1F2E] px-[12px] py-[4px] rounded-[20px] text-sm font-semibold shrink-0">
                  {award.date}
                </span>
              </div>
              <p className="text-[#6EC99A] font-medium mb-4">{award.issuer}</p>
              <p className="text-[#EAF2EE] opacity-80 description-text max-w-2xl">
                {award.description}
              </p>
            </div>
            
          </div>
        ))}
      </div>
      
    </div>
  );
}
