import React from 'react';
import { personalInfo } from '../data/portfolio';
import useInView from '../hooks/useInView';

export default function Home() {
  const [ref, visible] = useInView();

  return (
    <div className="w-full relative">
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '600px',
          height: '600px',
          background: 'var(--glow-hero)',
          pointerEvents: 'none',
        }}
      />

      <section
        className="relative min-h-screen flex flex-col justify-center px-4 sm:px-8 max-w-[1200px] mx-auto"
        style={{ paddingTop: '80px', paddingBottom: '80px' }}
      >
        <div
          ref={ref}
          className="w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-20 items-center">

            {/* Left — text */}
            <div className={`hero-copy ${visible ? 'visible' : ''}`}>
              {/* Eyebrow pill */}
              <div
                className="inline-flex items-center gap-2 mb-6 sm:mb-8"
                style={{
                  border: '1px solid var(--border)',
                  borderRadius: '9999px',
                  padding: '6px 14px',
                  backgroundColor: 'var(--surface-subtle)',
                }}
              >
                <span
                  className="pulse-dot"
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent)',
                    display: 'inline-block',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: '13px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                  }}
                >
                  Data Science · ML · Engineering
                </span>
              </div>

              {/* Heading — word-level stagger */}
              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 'clamp(3rem, 6.5vw, 6.5rem)',
                  lineHeight: 1.0,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.04em',
                  marginBottom: '28px',
                }}
              >
                {['Building', 'data', 'systems', 'that'].map((word, i) => (
                  <span
                    key={word + i}
                    style={{
                      display: 'inline-block',
                      marginRight: '0.28em',
                      opacity: visible ? 1 : 0,
                      transform: visible ? 'translateY(0)' : 'translateY(22px)',
                      transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)`,
                      transitionDelay: `${180 + i * 55}ms`,
                    }}
                  >
                    {word}
                  </span>
                ))}
                <br />
                <span
                  style={{
                    color: 'var(--accent)',
                    display: 'inline-block',
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(22px)',
                    transition: 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)',
                    transitionDelay: '400ms',
                  }}
                >
                  actually work.
                </span>
              </h1>

              {/* Description */}
              <p
                style={{
                  fontSize: '16px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.75,
                  maxWidth: '520px',
                  marginBottom: '40px',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {personalInfo.description} Currently seeking internships &amp; full-time roles in data science and ML engineering.
              </p>

              {/* CTAs */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a
                  href="#contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '9999px',
                    padding: '13px 28px',
                    fontSize: '14px',
                    fontWeight: 600,
                    fontFamily: 'var(--font-body)',
                    backgroundColor: 'var(--accent)',
                    color: 'var(--accent-fg)',
                    textDecoration: 'none',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  Get in touch
                </a>
                <a
                  href="#work"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '9999px',
                    padding: '13px 28px',
                    fontSize: '14px',
                    fontWeight: 600,
                    fontFamily: 'var(--font-body)',
                    backgroundColor: 'transparent',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    border: '1px solid var(--border)',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--surface-hover-border)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                >
                  See projects
                </a>
              </div>
            </div>

            {/* Right — headshot */}
            <div
              className={`hidden lg:flex items-center justify-end fade-up ${
                visible ? 'visible' : ''
              }`}
              style={{ transitionDelay: '180ms' }}
            >
              <div style={{ position: 'relative' }}>
                {/* Soft glow behind photo */}
                <div style={{
                  position: 'absolute',
                  inset: '-24px',
                  borderRadius: '50%',
                  background: 'var(--glow-photo)',
                  filter: 'blur(24px)',
                  zIndex: 0,
                }} />
                {/* Ghost offset border */}
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  width: '340px',
                  height: '400px',
                  borderRadius: 'var(--radius-card)',
                  border: '1px solid var(--accent-ring)',
                  zIndex: 0,
                  pointerEvents: 'none',
                }} />
                <img
                  src="/headshot.jpg"
                  alt="Dhwanil Ranpura"
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    width: '340px',
                    height: '400px',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    borderRadius: 'var(--radius-card)',
                    border: '1px solid var(--border)',
                    display: 'block',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
