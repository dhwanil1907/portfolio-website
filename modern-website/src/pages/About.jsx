import React from 'react';
import { personalInfo } from '../data/portfolio';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#EAF2EE] mb-6">About Me</h1>
        <div className="w-20 h-1 bg-[#6EC99A] rounded-full"></div>
      </div>

      <div className="prose prose-slate prose-invert prose-lg md:prose-xl text-[#EAF2EE] opacity-90 max-w-none description-text">
        <p className="lead text-2xl text-[#EAF2EE] font-medium mb-8">
          I am a builder focused on the intersection of data science and software engineering, currently pursuing my B.S. in Data Science at San Jose State University.
        </p>

        <div className="grid md:grid-cols-5 gap-12 items-start mt-12">
          
          <div className="md:col-span-3 space-y-6">
            <p>
              My journey started with a fascination for uncovering patterns in raw data, but I quickly realized that a model trained in a Jupyter notebook has no impact until it's accessible. That realization drove me to learn full-stack development, enabling me to build end-to-end data products.
            </p>
            <p>
              I believe in <strong>product-minded engineering</strong>. Whether I'm designing a spatio-temporal crime prediction model or building out a React interface, I always start with the user problem. I thrive in environments where analytics meet operations—where we don't just ask "what is the accuracy?", but rather, "how does this reduce latency, improve underwriting decisions, or optimize processes?"
            </p>
            <p>
              When I'm not coding, you can find me leading the Spartan Analytics organization, organizing hackathons, and teaching technical workshops to scale data literacy across my campus.
            </p>
          </div>

          <div className="md:col-span-2 bg-[#2A2F40] p-8 rounded-2xl border-[0.5px] border-[#3E5C4F]">
            <h3 className="text-lg font-bold text-[#6EC99A] mb-4 tracking-wider">Background</h3>
            
            <ul className="space-y-4 text-base">
              <li>
                <strong className="block text-[#EAF2EE]">Education</strong>
                <span className="text-[#EAF2EE] opacity-85">{personalInfo.education.degree}</span> <br/>
                <span className="text-[#EAF2EE] opacity-85">{personalInfo.education.university} (Class of 2027)</span>
              </li>
              <li>
                <strong className="block text-[#EAF2EE]">Location</strong>
                <span className="text-[#EAF2EE] opacity-85">{personalInfo.education.location}</span>
              </li>
              <li>
                <strong className="block text-[#EAF2EE]">Focus Areas</strong>
                <span className="text-[#EAF2EE] opacity-85">Machine Learning Systems, Frontend Architecture, Data Engineering</span>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
      
    </div>
  );
}
