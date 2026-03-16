import React from 'react';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      
      <div className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#EAF2EE] mb-6">Let's Connect</h1>
        <div className="w-20 h-1 bg-[#6EC99A] rounded-full mx-auto mb-8"></div>
        <p className="text-xl font-light text-[#EAF2EE] opacity-85 description-text max-w-2xl mx-auto">
          Currently open for internship opportunities, collaborations, or just chatting about data and technology.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-12 bg-transparent text-[#EAF2EE]">
        
        {/* Info Column */}
        <div className="lg:col-span-2 bg-[#2A2F40] rounded-[2rem] p-8 md:p-12 text-[#EAF2EE] relative overflow-hidden flex flex-col justify-between border-[0.5px] border-[#3E5C4F] shadow-lg">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#3E5C4F] rounded-full mix-blend-screen filter blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="z-10 relative">
            <h3 className="text-2xl font-bold mb-2 text-[#EAF2EE]">Reach Out</h3>
            <p className="text-[#EAF2EE] opacity-85 mb-12">I generally reply within 24 hours.</p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1B1F2E] rounded-full flex items-center justify-center border border-[#3E5C4F]">
                  <Mail className="w-5 h-5 text-[#6EC99A]" />
                </div>
                <div>
                  <p className="text-[#6EC99A] text-sm font-semibold">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="font-medium text-[#EAF2EE] hover:text-[#6EC99A] transition-colors duration-[250ms]">{personalInfo.email}</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1B1F2E] rounded-full flex items-center justify-center border border-[#3E5C4F]">
                  <MapPin className="w-5 h-5 text-[#6EC99A]" />
                </div>
                <div>
                  <p className="text-[#6EC99A] text-sm font-semibold">Location</p>
                  <p className="font-medium text-[#EAF2EE]">{personalInfo.education.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 sm:mt-24 z-10 relative hidden">
            <div className="flex gap-4">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0A66C2] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Form Column */}
        <div className="lg:col-span-3 lg:p-12 flex flex-col justify-center">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-[#EAF2EE]">Send a Message</h3>
            <div className="flex gap-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-[#6EC99A] hover:opacity-75 transition-opacity duration-[250ms]">
                <Github size={24} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#6EC99A] hover:opacity-75 transition-opacity duration-[250ms]">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#6EC99A] mb-2">First Name</label>
                <input type="text" className="w-full px-5 py-4 rounded-lg bg-[#2A2F40] border border-[#3E5C4F] text-[#EAF2EE] focus:outline-none focus:ring-1 focus:ring-[#6EC99A] focus:border-[#6EC99A] transition-all duration-[250ms] placeholder-[#EAF2EE]/50" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#6EC99A] mb-2">Last Name</label>
                <input type="text" className="w-full px-5 py-4 rounded-lg bg-[#2A2F40] border border-[#3E5C4F] text-[#EAF2EE] focus:outline-none focus:ring-1 focus:ring-[#6EC99A] focus:border-[#6EC99A] transition-all duration-[250ms] placeholder-[#EAF2EE]/50" placeholder="Doe" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-[#6EC99A] mb-2">Email Address</label>
              <input type="email" className="w-full px-5 py-4 rounded-lg bg-[#2A2F40] border border-[#3E5C4F] text-[#EAF2EE] focus:outline-none focus:ring-1 focus:ring-[#6EC99A] focus:border-[#6EC99A] transition-all duration-[250ms] placeholder-[#EAF2EE]/50" placeholder="john@example.com" />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-[#6EC99A] mb-2">Message</label>
              <textarea rows="5" className="w-full px-5 py-4 rounded-lg bg-[#2A2F40] border border-[#3E5C4F] text-[#EAF2EE] focus:outline-none focus:ring-1 focus:ring-[#6EC99A] focus:border-[#6EC99A] transition-all duration-[250ms] resize-none placeholder-[#EAF2EE]/50" placeholder="How can I help you?"></textarea>
            </div>
            
            <button type="submit" className="w-full sm:w-auto px-10 py-4 bg-[#6EC99A] hover:bg-[#5bb889] text-[#1B1F2E] rounded-lg font-semibold text-lg transition-colors duration-[250ms] flex items-center justify-center gap-2">
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>

    </div>
  );
}
