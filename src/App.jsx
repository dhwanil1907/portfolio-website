import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Leadership from './pages/Leadership';
import Awards from './pages/Awards';
import Contact from './pages/Contact';

function App() {
  return (
    <div
      className="flex flex-col min-h-screen font-sans"
      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      <Navbar />
      <main className="flex-grow pt-20 w-full overflow-hidden">
        <div id="home"><Home /></div>
        <div id="about"    className="scroll-mt-20"><About /></div>
        <div id="experience" className="scroll-mt-20"><Experience /></div>
        <div id="work"    className="scroll-mt-20"><Projects /></div>
        <div id="leadership" className="scroll-mt-20"><Leadership /></div>
        <div id="awards"  className="scroll-mt-20"><Awards /></div>
        <div id="contact" className="scroll-mt-20"><Contact /></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
