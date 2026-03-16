import React from 'react';
import { leadershipData } from '../data/portfolio';

export default function Leadership() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#EAF2EE] mb-6">Leadership</h1>
        <div className="w-20 h-1 bg-[#6EC99A] rounded-full mb-8"></div>
        <p className="text-xl font-light text-[#EAF2EE] opacity-85 description-text">Building communities, organizing events, and mentoring aspiring data scientists at San Jose State University.</p>
      </div>

      <div className="grid gap-12">
        {leadershipData.map((item, idx) => (
          <div key={idx} className="bg-[#2A2F40] rounded-2xl border-[0.5px] border-[#3E5C4F] border-l-[3px] border-l-[#6EC99A] pl-4 overflow-hidden">
            
            {/* Header Area */}
            <div className="bg-[#1B1F2E]/30 px-4 py-6 border-b border-[#3E5C4F] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-[#EAF2EE]">{item.organization}</h3>
                <p className="text-[#6EC99A] text-sm mt-1">{item.location}</p>
              </div>
            </div>

            <div className="p-6 md:p-8">
              {/* Role Progression Timeline */}
              <div className="mb-10 pl-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#6EC99A] mb-5">Role Progression</h4>
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#6EC99A] before:to-[#3E5C4F]">
                  {item.roles.map((role, rIdx) => (
                    <div key={rIdx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      {/* Icon Node */}
                      <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-[#1B1F2E] bg-[#6EC99A] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 mx-[-0.35rem] md:mx-auto z-10 transition-colors"></div>
                      
                      {/* Role Details */}
                      <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pl-4 md:pl-0 md:group-odd:text-right md:group-even:text-left">
                        <div className="font-bold text-[#EAF2EE]">{role.title}</div>
                        <div className="text-sm font-medium text-[#6EC99A] mt-1">{role.date} <span className="text-[#EAF2EE] opacity-70 font-normal">({role.duration})</span></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Bullets */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#6EC99A] mb-4">Impact & Initiatives</h4>
                <ul className="space-y-4 bg-[#1B1F2E]/50 border border-[#3E5C4F] p-6 rounded-2xl">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="text-[#EAF2EE] opacity-85 description-text flex items-start">
                      <span className="text-[#3E5C4F] mr-3 mt-1.5 text-xs">◆</span>
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
