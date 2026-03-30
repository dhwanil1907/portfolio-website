import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon, FileText } from 'lucide-react';
import { navLinks, personalInfo } from '../../data/portfolio';
import { useTheme } from '../../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

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

  const pillStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 10px',
    backgroundColor: 'var(--nav-surface)',
    border: '2px solid var(--border)',
    borderRadius: '9999px',
    boxShadow: 'var(--neo-shadow)',
    whiteSpace: 'nowrap',
  };

  const iconCircleStyle = {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: 'var(--nav-logo-bg)',
    color: 'var(--nav-logo-fg)',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 50,
          maxWidth: 'calc(100vw - 32px)',
        }}
      >
        <div style={pillStyle}>
          <a
            href="#home"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'var(--nav-logo-bg)',
              color: 'var(--nav-logo-fg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '11px',
              fontWeight: 800,
              textDecoration: 'none',
              flexShrink: 0,
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            DR
          </a>

          <div className="hidden lg:flex items-center">
            {navLinks.map(link => {
              const id = link.path.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={link.name}
                  href={link.path}
                  style={{
                    position: 'relative',
                    padding: '6px 14px',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: isActive ? 'var(--accent)' : 'var(--nav-ink)',
                    textDecoration: 'none',
                    transition: 'color 0.15s',
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {link.name}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '0px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--accent)',
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <button
            type="button"
            className="hidden lg:flex"
            onClick={toggleTheme}
            style={iconCircleStyle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun style={{ width: '16px', height: '16px' }} /> : <Moon style={{ width: '16px', height: '16px' }} />}
          </button>

          <a
            href={`mailto:${personalInfo.email}`}
            className="hidden lg:flex"
            style={{
              ...iconCircleStyle,
              textDecoration: 'none',
            }}
            aria-label="Send email"
          >
            <Mail style={{ width: '16px', height: '16px' }} />
          </a>

          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex"
            style={{
              ...iconCircleStyle,
              textDecoration: 'none',
            }}
            aria-label="Open resume (PDF)"
          >
            <FileText style={{ width: '16px', height: '16px' }} />
          </a>

          <button
            className="lg:hidden"
            type="button"
            style={{
              padding: '4px 10px',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--nav-ink)',
              display: 'flex',
              alignItems: 'center',
            }}
            onClick={() => setMobileMenuOpen(o => !o)}
            aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
          >
            {mobileMenuOpen ? <X style={{ width: '22px', height: '22px' }} /> : <Menu style={{ width: '22px', height: '22px' }} />}
          </button>
        </div>
      </nav>

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
                style={{
                  padding: '16px',
                  fontSize: '22px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  borderRadius: '12px',
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div
            className="mt-auto pt-8 border-t flex flex-col gap-4"
            style={{ borderColor: 'var(--pill-track)' }}
          >
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium w-full"
              style={{
                border: '2px solid var(--border)',
                color: 'var(--text-primary)',
                backgroundColor: 'var(--bg-alt)',
                cursor: 'pointer',
                fontFamily: "'Space Grotesk', sans-serif",
              }}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun style={{ width: '18px', height: '18px' }} /> : <Moon style={{ width: '18px', height: '18px' }} />}
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </button>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium"
                style={{ border: '2px solid var(--border)', color: 'var(--text-primary)', textDecoration: 'none' }}
                aria-label="GitHub profile"
              >
                <Github style={{ width: '18px', height: '18px' }} /> GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium"
                style={{ border: '2px solid var(--border)', color: 'var(--text-primary)', textDecoration: 'none' }}
                aria-label="LinkedIn profile"
              >
                <Linkedin style={{ width: '18px', height: '18px' }} /> LinkedIn
              </a>
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-2 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium"
                style={{ border: '2px solid var(--border)', color: 'var(--text-primary)', textDecoration: 'none' }}
                aria-label="Open resume (PDF)"
              >
                <FileText style={{ width: '18px', height: '18px' }} /> Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
