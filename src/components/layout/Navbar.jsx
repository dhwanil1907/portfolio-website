import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Linkedin, FileText } from 'lucide-react';
import { navLinks, personalInfo } from '../../data/portfolio';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map(l => l.path.replace('#', ''));
    const observers = [];

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 backdrop-blur-md border-b'
            : 'py-5'
        }`}
        style={isScrolled ? {
          backgroundColor: 'rgba(10,10,15,0.85)',
          borderColor: 'var(--border)'
        } : {}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            className="font-black text-lg tracking-tight transition-colors duration-200"
            style={{ color: 'var(--text-primary)' }}
          >
            {personalInfo.name}
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-1">
              {navLinks.map(link => {
                const id = link.path.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    className="relative px-4 py-2 text-sm font-medium transition-colors duration-200"
                    style={{ color: isActive ? 'var(--accent)' : 'var(--text-muted)' }}
                  >
                    {link.name}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                        style={{ backgroundColor: 'var(--accent)' }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 hover:bg-white/5"
              style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
              aria-label="View Resume"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg transition-colors hover:bg-white/10"
            style={{ color: 'var(--text-primary)' }}
            onClick={() => setMobileMenuOpen(o => !o)}
            aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden flex flex-col transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backgroundColor: 'var(--bg-primary)' }}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-8 overflow-y-auto">
          <div className="flex flex-col gap-1">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.path}
                onClick={closeMobile}
                className="px-4 py-4 text-xl font-semibold rounded-xl transition-colors"
                style={{ color: 'var(--text-primary)' }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-auto pt-8 border-t flex flex-col gap-4" style={{ borderColor: 'var(--border)' }}>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-lg border text-sm font-medium transition-colors"
                style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
                aria-label="GitHub profile"
              >
                <Github className="w-5 h-5" /> GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-lg border text-sm font-medium transition-colors"
                style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-5 h-5" /> LinkedIn
              </a>
            </div>
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobile}
              className="flex items-center justify-center gap-2 py-4 rounded-lg font-bold text-lg transition-colors"
              style={{ backgroundColor: 'var(--accent)', color: '#fff' }}
              aria-label="View resume"
            >
              <FileText className="w-5 h-5" /> Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
