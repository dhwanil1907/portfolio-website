import React from 'react';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';
import { projectsData } from '../data/portfolio';

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#EAF2EE] mb-6">Projects</h1>
        <div className="w-20 h-1 bg-[#6EC99A] rounded-full mb-8"></div>
        <p className="text-xl font-light text-[#EAF2EE] opacity-85 max-w-2xl description-text">A selection of my technical work spanning full-stack applications, machine learning pipelines, and predictive analytics.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projectsData.map((project, idx) => (
          <div key={idx} className="bg-[#2A2F40] rounded-2xl border-[0.5px] border-[#3E5C4F] border-t-[3px] border-t-[#6EC99A] overflow-hidden hover:border-[#6EC99A] hover:border-[1px] hover:-translate-y-1 transition-all duration-[250ms] ease-in-out flex flex-col h-full group">
            
            {/* Top Tag & Actions */}
            <div className="px-8 pt-8 pb-4 flex justify-between items-start">
              <div className="flex gap-2 flex-wrap">
                {project.categories.map((cat, i) => (
                  <span key={i} className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${i === 0 ? 'bg-[#3E5C4F]/30 text-[#6EC99A] border border-[#3E5C4F]/50' : 'bg-[#1B1F2E] text-[#EAF2EE] opacity-90 border border-[#3E5C4F]'}`}>
                    {cat}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3 text-[#EAF2EE] opacity-80">
                {project.github && project.github !== '#' && (
                  <a href={project.github} className="hover:text-[#6EC99A] transition-colors duration-[250ms]" title="View Source">
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {project.demo && project.demo !== '#' && (
                  <a href={project.demo} className="hover:text-[#6EC99A] transition-colors duration-[250ms]" title="Live Demo">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
                {(!project.github || project.github === '#') && (!project.demo || project.demo === '#') && (
                  <FolderGit2 className="w-5 h-5" />
                )}
              </div>
            </div>

            {/* Content Area */}
            <div className="px-8 pb-6 flex-grow">
              <h2 className="text-2xl font-bold text-[#EAF2EE] mb-2">{project.title}</h2>
              <h3 className="text-sm font-semibold text-[#6EC99A] mb-4">{project.subtitle}</h3>
              <p className="text-[#EAF2EE] opacity-85 mb-6 description-text">
                {project.description}
              </p>
              <ul className="space-y-3 mb-8">
                {project.details.map((detail, i) => (
                  <li key={i} className="text-sm text-[#EAF2EE] opacity-85 flex items-start">
                    <span className="text-[#3E5C4F] mr-2 mt-0.5">—</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Footer */}
            <div className="px-8 py-6 bg-[#1B1F2E]/50 border-t border-[#3E5C4F] flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i} className="px-3 py-1.5 bg-[#1B1F2E] border border-[#3E5C4F] rounded-[20px] text-xs font-medium text-[#6EC99A]">
                  {t}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
