import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, personalInfo } from '../../data/portfolio';

const pillNavStyle = {
  pointerEvents: 'auto',
  alignItems: 'center',
  gap: '0',
  height: '52px',
  padding: '0 8px',
  borderRadius: '9999px',
  border: '1px solid rgba(255,255,255,0.22)',
  backgroundColor: 'rgba(20,20,20,0.96)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  boxShadow: '0 8px 32px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)',
};

const logoStyle = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontWeight: 800,
  fontSize: '16px',
  color: '#ffffff',
  textDecoration: 'none',
  letterSpacing: '-0.01em',
  flexShrink: 0,
  marginLeft: '8px',
  marginRight: '12px',
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sectionIds = navLinks.map(l => l.path.replace('#', ''));
    const observers = [];
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
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
        {/* Mobile / tablet: compact pill — DR + menu */}
        <nav className="flex lg:hidden" style={pillNavStyle}>
          <a href="#home" style={logoStyle}>
            DR
          </a>
          <div
            style={{
              width: '1px',
              height: '18px',
              backgroundColor: 'rgba(255,255,255,0.15)',
              marginRight: '8px',
            }}
          />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(o => !o)}
            aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              marginRight: '4px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'rgba(255,255,255,0.7)',
              padding: 0,
              borderRadius: '9999px',
            }}
          >
            {mobileMenuOpen ? (
              <X style={{ width: '20px', height: '20px' }} strokeWidth={1.5} />
            ) : (
              <Menu style={{ width: '20px', height: '20px' }} strokeWidth={1.5} />
            )}
          </button>
        </nav>

        {/* Desktop: full pill */}
        <nav className="hidden lg:flex" style={pillNavStyle}>
          <a href="#home" style={logoStyle}>
            DR
          </a>

          <div
            style={{
              width: '1px',
              height: '18px',
              backgroundColor: 'rgba(255,255,255,0.15)',
              marginRight: '12px',
            }}
          />

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
                    color: isActive ? '#ffffff' : 'rgba(255,255,255,0.55)',
                    textDecoration: 'none',
                    backgroundColor: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                    transition: 'color 0.2s, background-color 0.2s',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.55)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div
            style={{
              width: '1px',
              height: '18px',
              backgroundColor: 'rgba(255,255,255,0.15)',
              marginLeft: '12px',
              marginRight: '12px',
            }}
          />

          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              padding: '7px 16px',
              borderRadius: '9999px',
              border: '1px solid rgba(255,255,255,0.28)',
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '13px',
              fontWeight: 500,
              color: '#ffffff',
              textDecoration: 'none',
              marginRight: '4px',
              transition: 'background-color 0.2s, border-color 0.2s',
              backgroundColor: 'rgba(255,255,255,0.06)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)';
            }}
          >
            Resume
            <span style={{ fontSize: '11px', opacity: 0.7 }}>↗</span>
          </a>
        </nav>
      </div>

      <div
        className="lg:hidden"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 40,
          backgroundColor: 'var(--bg-primary)',
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '88px',
          paddingLeft: '24px',
          paddingRight: '24px',
          paddingBottom: '32px',
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
                padding: '14px 4px',
                fontSize: '22px',
                fontWeight: 600,
                color: 'var(--text-primary)',
                textDecoration: 'none',
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
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            padding: '14px 24px',
            borderRadius: '9999px',
            border: '1px solid var(--border)',
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: '15px',
            fontWeight: 500,
            color: 'var(--text-primary)',
            textDecoration: 'none',
          }}
        >
          Resume ↗
        </a>
      </div>
    </>
  );
}
