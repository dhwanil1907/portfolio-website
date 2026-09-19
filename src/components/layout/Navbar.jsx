import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';
import { MotionButton, MotionButtonEl } from '../MotionButton';
import { navLinks, personalInfo } from '../../data/portfolio';
import useTheme from '../../hooks/useTheme';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const ids = ['home', ...navLinks.map(l => l.path.replace('#', ''))];
    const observers = ids.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'var(--nav-bg)',
        borderBottom: '1px solid var(--nav-border)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="page-container flex items-center justify-between h-16">
        <a
          href="#home"
          style={{
            fontWeight: 700,
            fontSize: '15px',
            color: 'var(--text-primary)',
            textDecoration: 'none',
          }}
        >
          {personalInfo.name}
        </a>

        <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {navLinks.map(link => {
            const id = link.path.replace('#', '');
            const active = activeSection === id;
            return (
              <a
                key={link.name}
                href={link.path}
                style={{
                  padding: '8px 14px',
                  paddingBottom: '6px',
                  fontSize: '14px',
                  fontWeight: active ? 500 : 400,
                  color: active ? 'var(--nav-link-active)' : 'var(--nav-link)',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  borderBottom: active ? '2px solid var(--accent)' : '2px solid transparent',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <MotionButtonEl
            type="button"
            onClick={toggle}
            aria-label="Toggle theme"
            className="hidden lg:flex items-center justify-center w-9 h-9 rounded-md border-0 bg-transparent cursor-pointer"
            style={{ color: 'var(--text-muted)' }}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </MotionButtonEl>

          <MotionButton
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline hidden lg:inline-flex"
            style={{ padding: '8px 16px', fontSize: '13px' }}
          >
            <Download size={14} />
            Resume
          </MotionButton>

          <MotionButtonEl
            type="button"
            className="lg:hidden flex items-center justify-center w-10 h-10 border-0 bg-transparent cursor-pointer"
            style={{ color: 'var(--text-primary)' }}
            onClick={() => setMobileOpen(o => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </MotionButtonEl>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="lg:hidden border-t px-6 py-4"
          style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-primary)' }}
        >
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-base font-medium no-underline"
              style={{ color: 'var(--text-primary)', borderBottom: '1px solid var(--divider)' }}
            >
              {link.name}
            </a>
          ))}
          <MotionButton
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline mt-4 w-full"
            onClick={() => setMobileOpen(false)}
          >
            <Download size={14} />
            Resume
          </MotionButton>
        </div>
      )}
    </header>
  );
}
