import React from 'react';
import { personalInfo } from '../data/portfolio';
import useInView from '../hooks/useInView';

export default function Home() {
  const [ref, visible] = useInView();

  return (
    <div className="w-full relative">
      {/* Sage glow — top right */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(ellipse, rgba(134,239,172,0.07) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <section
        className="relative min-h-screen flex flex-col justify-center px-4 sm:px-8 max-w-[1200px] mx-auto"
        style={{ paddingTop: '80px', paddingBottom: '80px' }}
      >
        <div
          ref={ref}
          className={`w-full fade-up ${visible ? 'visible' : ''}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* Left — text */}
            <div>
              {/* Eyebrow pill */}
              <div
                className="inline-flex items-center gap-2 mb-6 sm:mb-8"
                style={{
                  border: '1px solid var(--border)',
                  borderRadius: '9999px',
                  padding: '6px 14px',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--text-muted)',
                    display: 'inline-block',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontFamily: "'JetBrains Mono', monospace",
                    color: 'var(--text-muted)',
                  }}
                >
                  Data Science · ML · Engineering
                </span>
              </div>

              {/* Heading */}
              <h1
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                  lineHeight: 1.05,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                  marginBottom: '24px',
                }}
              >
                Building data<br />
                systems that<br />
                <span style={{ color: 'var(--accent)' }}>actually work.</span>
              </h1>

              {/* Description */}
              <p
                style={{
                  fontSize: '16px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.75,
                  maxWidth: '440px',
                  marginBottom: '40px',
                  fontFamily: "'Inter', system-ui, sans-serif",
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
                    fontFamily: "'Inter', system-ui, sans-serif",
                    backgroundColor: 'var(--accent)',
                    color: '#080C09',
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
                    fontFamily: "'Inter', system-ui, sans-serif",
                    backgroundColor: 'transparent',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    border: '1px solid var(--border)',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                >
                  See projects
                </a>
              </div>
            </div>

            {/* Right — headshot */}
            <div className="hidden lg:flex items-center justify-center">
              <div style={{ position: 'relative' }}>
                {/* Soft glow behind photo */}
                <div style={{
                  position: 'absolute',
                  inset: '-24px',
                  borderRadius: '50%',
                  background: 'radial-gradient(ellipse, rgba(134,239,172,0.12) 0%, transparent 70%)',
                  filter: 'blur(24px)',
                  zIndex: 0,
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
                    borderRadius: '24px',
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
