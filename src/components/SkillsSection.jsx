import React from 'react';
import { skillsData } from '../data/portfolio';
import useInView from '../hooks/useInView';

export default function SkillsSection() {
  const [ref, visible] = useInView();

  return (
    <div ref={ref} className={`fade-up ${visible ? 'visible' : ''}`}>
      {/* Section header */}
      <div style={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        borderBottom: '1px solid var(--divider)',
        paddingBottom: '20px',
        marginBottom: '48px',
      }}>
        <h2 className="section-heading" style={{ margin: 0 }}>What I work with.</h2>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '11px',
          color: 'var(--text-muted)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}>
          Skills
        </span>
      </div>

      {/* Two-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1px', backgroundColor: 'var(--divider)' }}>
        {skillsData.map((cat, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: 'var(--bg-primary)',
              padding: '32px',
            }}
          >
            {/* Category header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '10px',
                color: 'var(--accent)',
                opacity: 0.7,
              }}>
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--text-muted)',
              }}>
                {cat.category}
              </span>
            </div>

            {/* Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {cat.skills.map(skill => (
                <span
                  key={skill}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    border: '1px solid var(--divider)',
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: '13px',
                    color: 'var(--text-primary)',
                    letterSpacing: '0.01em',
                    transition: 'border-color 0.2s, background-color 0.2s, color 0.2s',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--accent-ring)';
                    e.currentTarget.style.backgroundColor = 'var(--accent-glow)';
                    e.currentTarget.style.color = 'var(--accent)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--divider)';
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
