import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { navLinks, personalInfo } from '../../data/portfolio';
import useTheme from '../../hooks/useTheme';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, toggle } = useTheme();

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
    pointerEvents: 'auto',
    alignItems: 'center',
    gap: '0',
    height: '52px',
    padding: '0 8px',
    borderRadius: '9999px',
    border: '1px solid var(--nav-border)',
    backgroundColor: 'var(--nav-bg)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    boxShadow: 'var(--nav-shadow)',
  };

  const logoStyle = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 800,
    fontSize: '16px',
    color: 'var(--nav-logo)',
    textDecoration: 'none',
    letterSpacing: '-0.01em',
    flexShrink: 0,
    marginLeft: '8px',
    marginRight: '12px',
  };

  const dividerStyle = {
    width: '1px',
    height: '18px',
    backgroundColor: 'var(--nav-divider)',
  };

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: '20px',
          left: 0,
          right: 0,
          zIndex: 50,
          display: 'flex',
          justifyContent: 'center',
          padding: '0 16px',
          pointerEvents: 'none',
        }}
      >
        {/* Mobile pill */}
        <nav className="flex lg:hidden" style={pillStyle}>
          <a href="#home" style={logoStyle}>DR</a>
          <div style={{ ...dividerStyle, marginRight: '8px' }} />

          {/* Theme toggle — mobile */}
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle theme"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '36px', height: '36px', marginRight: '4px',
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--nav-link)', padding: 0, borderRadius: '9999px',
            }}
          >
            {theme === 'dark'
              ? <Sun style={{ width: '16px', height: '16px' }} strokeWidth={1.5} />
              : <Moon style={{ width: '16px', height: '16px' }} strokeWidth={1.5} />
            }
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(o => !o)}
            aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '40px', height: '40px', marginRight: '4px',
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--nav-link)', padding: 0, borderRadius: '9999px',
            }}
          >
            {mobileMenuOpen
              ? <X style={{ width: '20px', height: '20px' }} strokeWidth={1.5} />
              : <Menu style={{ width: '20px', height: '20px' }} strokeWidth={1.5} />
            }
          </button>
        </nav>

        {/* Desktop pill */}
        <nav className="hidden lg:flex" style={pillStyle}>
          <a href="#home" style={logoStyle}>DR</a>

          <div style={{ ...dividerStyle, marginRight: '12px' }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
            {navLinks.map(link => {
              const id = link.path.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={link.name}
                  href={link.path}
                  style={{
                    position: 'relative',
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: '14px',
                    fontWeight: isActive ? 500 : 400,
                    color: isActive ? 'var(--nav-link-active)' : 'var(--nav-link)',
                    textDecoration: 'none',
                    backgroundColor: isActive ? 'var(--nav-link-active-bg)' : 'transparent',
                    transition: 'color 0.2s, background-color 0.2s',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--nav-link-active)';
                      e.currentTarget.style.backgroundColor = 'var(--nav-link-hover-bg)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--nav-link)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div style={{ ...dividerStyle, marginLeft: '12px', marginRight: '12px' }} />

          {/* Theme toggle — desktop */}
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle theme"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '34px', height: '34px', marginRight: '6px',
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--nav-link)', padding: 0, borderRadius: '9999px',
              transition: 'color 0.2s',
              flexShrink: 0,
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--nav-link-active)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--nav-link)'; }}
          >
            {theme === 'dark'
              ? <Sun style={{ width: '15px', height: '15px' }} strokeWidth={1.5} />
              : <Moon style={{ width: '15px', height: '15px' }} strokeWidth={1.5} />
            }
          </button>

          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '5px',
              padding: '7px 16px', borderRadius: '9999px',
              border: '1px solid var(--nav-resume-border)',
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '13px', fontWeight: 500,
              color: 'var(--nav-logo)',
              textDecoration: 'none', marginRight: '4px',
              transition: 'background-color 0.2s, border-color 0.2s',
              backgroundColor: 'var(--nav-resume-bg)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'var(--nav-resume-hover-bg)';
              e.currentTarget.style.borderColor = 'var(--nav-resume-hover-border)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'var(--nav-resume-bg)';
              e.currentTarget.style.borderColor = 'var(--nav-resume-border)';
            }}
          >
            Resume
            <span style={{ fontSize: '11px', opacity: 0.7 }}>↗</span>
          </a>
        </nav>
      </div>

      {/* Mobile drawer */}
      <div
        className="lg:hidden"
        style={{
          position: 'fixed', inset: 0, zIndex: 40,
          backgroundColor: 'var(--bg-primary)',
          display: 'flex', flexDirection: 'column',
          paddingTop: '88px', paddingLeft: '24px',
          paddingRight: '24px', paddingBottom: '32px',
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease',
          overflowY: 'auto',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.path}
              onClick={closeMobile}
              style={{
                padding: '14px 4px', fontSize: '22px', fontWeight: 600,
                color: 'var(--text-primary)', textDecoration: 'none',
                fontFamily: "'Space Grotesk', sans-serif",
                borderBottom: '1px solid var(--divider)',
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href={personalInfo.resume}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMobile}
          style={{
            marginTop: '32px',
            display: 'inline-flex', alignItems: 'center',
            justifyContent: 'center', gap: '6px',
            padding: '14px 24px', borderRadius: '9999px',
            border: '1px solid var(--border)',
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: '15px', fontWeight: 500,
            color: 'var(--text-primary)', textDecoration: 'none',
          }}
        >
          Resume ↗
        </a>
      </div>
    </>
  );
}
