import React, { useEffect, useRef } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Leadership from './pages/Leadership';
import Awards from './pages/Awards';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';

function App() {
  const progressRef = useRef(null);

  useEffect(() => {
    const bar = progressRef.current;
    if (!bar) return;
    const update = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      bar.style.width = total > 0 ? `${(scrolled / total) * 100}%` : '0%';
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[var(--bg-primary)] text-[var(--text-primary)] transition-[background-color,color] duration-200">
      {/* Scroll progress bar */}
      <div
        ref={progressRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '2px',
          width: '0%',
          backgroundColor: 'var(--accent)',
          zIndex: 200,
          transition: 'width 0.08s linear',
          pointerEvents: 'none',
        }}
      />
      <Navbar />
      <main className="flex-grow w-full overflow-hidden">
        <div id="home"><Home /></div>
        <div id="about" className="section-band section-band--alt scroll-mt-20">
          <About />
        </div>
        <div id="experience" className="section-band scroll-mt-20">
          <Experience />
        </div>
        <div id="work" className="section-band section-band--alt scroll-mt-20">
          <Projects />
        </div>
        <div id="leadership" className="section-band scroll-mt-20">
          <Leadership />
        </div>
        <div id="awards" className="section-band section-band--alt scroll-mt-20">
          <Awards />
        </div>
        <div id="certifications" className="section-band scroll-mt-20">
          <Certifications />
        </div>
        <div id="contact" className="section-band section-band--alt scroll-mt-20">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
