import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Sections
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Leadership from './pages/Leadership';
import Projects from './pages/Projects';
import Awards from './pages/Awards';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1B1F2E] text-[#EAF2EE] font-sans selection:bg-[#6EC99A] selection:text-[#1B1F2E] text-[16px]">
      <Navbar />
      <main className="flex-grow pt-24 pb-12 w-full max-w-full overflow-hidden">
        <div className="animate-in fade-in duration-500 slide-in-from-bottom-4">
          <div id="home"><Home /></div>
          <hr className="border-[#3E5C4F] border-t-[1px]" />
          <div id="about" className="scroll-mt-24"><About /></div>
          <hr className="border-[#3E5C4F] border-t-[1px]" />
          <div id="experience" className="scroll-mt-24"><Experience /></div>
          <hr className="border-[#3E5C4F] border-t-[1px]" />
          <div id="leadership" className="scroll-mt-24"><Leadership /></div>
          <hr className="border-[#3E5C4F] border-t-[1px]" />
          <div id="projects" className="scroll-mt-24"><Projects /></div>
          <hr className="border-[#3E5C4F] border-t-[1px]" />
          <div id="awards" className="scroll-mt-24"><Awards /></div>
          <hr className="border-[#3E5C4F] border-t-[1px]" />
          <div id="skills" className="scroll-mt-24"><Skills /></div>
          <hr className="border-[#3E5C4F] border-t-[1px]" />
          <div id="contact" className="scroll-mt-24"><Contact /></div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
