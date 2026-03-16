import React from 'react';
import { ArrowRight, Map, TrendingUp } from 'lucide-react';
import { personalInfo, projectsData } from '../data/portfolio';

export default function Home() {
  const featuredProjects = projectsData.slice(0, 2);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-20 pb-32 md:pt-40 md:pb-48">
        
        {/* Subtle decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3E5C4F]/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-3xl">
          <p className="text-[#6EC99A] font-semibold tracking-wide text-sm mb-4">
            Welcome
          </p>
          <h1 className="text-5xl sm:text-7xl font-bold text-[#EAF2EE] tracking-tight mb-6 leading-[1.1]">
            I build intelligent <br />
            <span className="text-[#6EC99A]">data products.</span>
          </h1>
          <p className="text-[#EAF2EE] mb-10 description-text font-light text-xl md:text-2xl">
            I'm <strong className="font-semibold">{personalInfo.name}</strong>, engineering scalable machine learning systems and full-stack applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-lg bg-[#6EC99A] text-[#1B1F2E] hover:bg-[#5bb889] font-medium transition-colors duration-[250ms] ease-in-out">
              View Work <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-lg bg-transparent text-[#6EC99A] border border-[#6EC99A] hover:bg-[#6EC99A]/10 font-medium transition-colors duration-[250ms] ease-in-out">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Quick Highlights / Featured Work */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[#EAF2EE]">Featured Work</h2>
              <p className="text-[#6EC99A] mt-2 font-medium">A glimpse into recent projects.</p>
            </div>
            <a href="#projects" className="hidden sm:flex items-center text-sm font-semibold text-[#6EC99A] hover:text-[#5bb889] transition-colors duration-[250ms] ease-in-out">
              See all projects <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, idx) => (
              <div key={idx} className="group bg-[#2A2F40] rounded-2xl border-[0.5px] border-[#3E5C4F] border-t-[3px] border-t-[#6EC99A] p-8 hover:border-[#6EC99A] hover:border-[1px] hover:-translate-y-1 transition-all duration-[250ms] ease-in-out">
                <div className="w-12 h-12 bg-[#3E5C4F]/30 rounded-xl flex items-center justify-center text-[#6EC99A] mb-6 transition-all duration-[250ms] ease-in-out">
                  {idx === 0 ? <Map className="w-6 h-6" /> : <TrendingUp className="w-6 h-6" />}
                </div>
                <h3 className="text-xl font-bold text-[#EAF2EE] mb-2">{project.title}</h3>
                <p className="description-text text-base text-[#EAF2EE] opacity-85 mb-6 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-[#1B1F2E] border border-[#3E5C4F] rounded-[20px] text-xs font-medium text-[#6EC99A]">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && <span className="px-3 py-1 bg-[#1B1F2E] border border-[#3E5C4F] rounded-[20px] text-xs font-medium text-[#6EC99A]">+{project.tech.length - 3}</span>}
                </div>
                <a href="#projects" className="text-sm font-semibold text-[#6EC99A] flex items-center hover:text-[#5bb889] transition-colors duration-[250ms] ease-in-out group-hover:text-[#6EC99A]">
                  View Case Study <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-[250ms] ease-in-out" />
                </a>
              </div>
            ))}
          </div>
          
          <div className="mt-8 sm:hidden">
            <a href="#projects" className="flex justify-center items-center w-full py-4 rounded-lg bg-transparent text-[#6EC99A] border border-[#6EC99A] hover:bg-[#6EC99A]/10 font-medium transition-colors duration-[250ms] ease-in-out">
              See all projects
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
