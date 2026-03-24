import React from 'react';
import { experienceData } from '../data/portfolio';
import useInView from '../hooks/useInView';

const CARD_COLORS = ['#4169ff', '#f59e0b', '#f4647a', '#10b981'];

function ExperienceCard({ exp, index }) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className={`fade-up ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s`, marginBottom: '16px' }}
    >
      <div
        style={{
          backgroundColor: 'var(--bg-card-solid)',
          border: '2px solid var(--border)',
          boxShadow: `4px 4px 0 var(--shadow-card)`,
          borderRadius: '16px',
          padding: '24px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <span style={{ fontSize: '13px', color: 'var(--text-subtle)', fontFamily: "'JetBrains Mono', monospace" }}>
            {exp.date}
          </span>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: CARD_COLORS[index % CARD_COLORS.length],
              border: '2px solid var(--border)',
              flexShrink: 0,
            }}
          />
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--divider)', marginBottom: '16px' }} />

        <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '4px' }}>
          {exp.role}
        </h3>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '12px' }}>
          {exp.company} · {exp.location}
        </p>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {exp.bullets.map((bullet, i) => (
            <li
              key={i}
              style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: 'var(--text-faint)', lineHeight: 1.6 }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: CARD_COLORS[index % CARD_COLORS.length],
                  flexShrink: 0,
                  marginTop: '7px',
                }}
              />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  const [ref, visible] = useInView();

  return (
    <div
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--inverse-bg)' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className={`grid lg:grid-cols-2 gap-16 fade-up ${visible ? 'visible' : ''}`} ref={ref}>
          <div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                fontWeight: 900,
                lineHeight: 1.15,
                color: 'var(--inverse-text)',
                fontFamily: "'Space Grotesk', sans-serif",
                marginBottom: '20px',
              }}
            >
              Take a look at my{' '}
              <span className="highlight-purple">past experience</span>
            </h2>

            <p style={{ fontSize: '16px', color: 'var(--inverse-muted)', lineHeight: 1.7, marginBottom: '32px', maxWidth: '380px' }}>
              Data automation, ML pipelines, documentation, and ethical AI — here's where I've applied my skills professionally.
            </p>
          </div>

          <div>
            {experienceData.map((exp, idx) => (
              <ExperienceCard key={idx} exp={exp} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
