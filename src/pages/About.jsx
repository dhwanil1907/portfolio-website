import React from 'react';
import { User } from 'lucide-react';
import SkillsSection from '../components/SkillsSection';
import useInView from '../hooks/useInView';

export default function About() {
  const [ref, visible] = useInView();
  const btnShadow = '3px 3px 0 var(--btn-shadow)';
  const btnShadowHover = '5px 5px 0 var(--btn-shadow)';

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-5xl mx-auto">

        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-16 items-center mb-24 fade-up ${visible ? 'visible' : ''}`}
        >
          <div className="flex justify-center lg:justify-start">
            <div
              style={{
                width: '280px',
                height: '280px',
                borderRadius: '50%',
                backgroundColor: 'var(--pink)',
                border: '3px solid var(--border)',
                boxShadow: '6px 6px 0 var(--shadow-key)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <span
                style={{
                  fontSize: '64px',
                  fontWeight: 900,
                  color: '#ffffff',
                  fontFamily: "'Space Grotesk', sans-serif",
                  lineHeight: 1,
                }}
              >
                DR
              </span>
            </div>
          </div>

          <div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                fontWeight: 900,
                lineHeight: 1.15,
                color: 'var(--text-primary)',
                fontFamily: "'Space Grotesk', sans-serif",
                marginBottom: '20px',
              }}
            >
              Who's behind all this{' '}
              <span className="highlight-blue">great work?</span>
            </h2>

            <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '28px', maxWidth: '420px' }}>
              I'm a Data Science student at San Jose State University building ML systems and full-stack data products that solve real-world problems.
              My work spans the full pipeline — from raw data ingestion and model training to production APIs and interactive dashboards.
              I lead Spartan Analytics and care deeply about making data literacy accessible.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
              {[
                { color: '#6c4fff', text: 'President, Spartan Analytics @ SJSU' },
                { color: '#f4647a', text: 'B.S. Data Science @ SJSU, Class of 2027' },
                { color: '#4169ff', text: 'Open to internships & full-time Data Engineering / ML roles' },
              ].map(({ color, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <span
                    style={{
                      width: '14px',
                      height: '14px',
                      backgroundColor: color,
                      border: '2px solid var(--border)',
                      flexShrink: 0,
                      marginTop: '3px',
                    }}
                  />
                  <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                backgroundColor: 'var(--btn-primary-bg)',
                color: 'var(--btn-primary-fg)',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '15px',
                border: '2px solid var(--border)',
                boxShadow: btnShadow,
                textDecoration: 'none',
                fontFamily: "'Space Grotesk', sans-serif",
                transition: 'transform 0.15s, box-shadow 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-2px,-2px)'; e.currentTarget.style.boxShadow = btnShadowHover; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translate(0,0)'; e.currentTarget.style.boxShadow = btnShadow; }}
            >
              <User style={{ width: '18px', height: '18px' }} />
              More about me
            </a>
          </div>
        </div>

        <SkillsSection visible={visible} />

      </div>
    </div>
  );
}
