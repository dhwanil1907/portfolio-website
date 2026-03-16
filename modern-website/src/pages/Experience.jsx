import React from 'react';
import { Briefcase } from 'lucide-react';
import { experienceData } from '../data/portfolio';

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#EAF2EE] mb-6">Experience</h1>
        <div className="w-20 h-1 bg-[#6EC99A] rounded-full"></div>
      </div>

      <div className="space-y-12">
        {experienceData.map((exp, idx) => (
          <div key={idx} className="relative pl-8 md:pl-0">
            
            {/* Mobile Timeline Node */}
            <div className="md:hidden absolute left-0 top-1.5 w-3 h-3 rounded-full bg-[#6EC99A] border-2 border-[#1B1F2E]"></div>
            {/* Mobile Vertical Line */}
            {idx !== experienceData.length - 1 && (
              <div className="md:hidden absolute left-1.5 top-6 bottom-[-3rem] w-px bg-[#3E5C4F]"></div>
            )}

            <div className="md:flex md:gap-8 bg-[#2A2F40]/40 md:bg-transparent rounded-2xl md:rounded-none border md:border-none border-[#3E5C4F] p-6 md:p-0 mb-4 md:mb-0">
              
              <div className="md:w-1/3 mb-4 md:mb-0 shrink-0">
                <div className="sticky top-28">
                  <h3 className="text-xl font-bold text-[#EAF2EE]">{exp.role}</h3>
                  <div className="text-[#6EC99A] font-medium mt-1 mb-2">{exp.company}</div>
                  <div className="flex flex-col gap-1 text-sm text-[#EAF2EE] opacity-85">
                    <span className="w-fit">{exp.date}</span>
                    <span className="mt-1">{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="md:w-2/3 md:border-l md:border-[#3E5C4F] md:pl-8 relative pb-8 md:pb-16">
                {/* Desktop Node */}
                <div className="hidden md:block absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[#6EC99A] border-2 border-[#1B1F2E]"></div>

                <ul className="space-y-4">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-[#EAF2EE] opacity-85 description-text flex items-start">
                      <span className="text-[#6EC99A] mr-3 mt-1.5 text-xs">◆</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
