import React from 'react';
import { skillsData } from '../data/portfolio';

export default function SkillsSection({ visible }) {
  return (
    <div
      className={`fade-up ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: '0.15s' }}
    >
      <h3
        style={{
          fontSize: '2rem',
          fontWeight: 900,
          color: 'var(--text-primary)',
          fontFamily: "'Space Grotesk', sans-serif",
          marginBottom: '32px',
        }}
      >
        My broad <span className="highlight-pink">skill set</span>
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((cat, idx) => (
          <div
            key={idx}
            className="neo-card"
            style={{ padding: '24px' }}
          >
            <p
              style={{
                fontWeight: 700,
                fontSize: '16px',
                color: 'var(--text-primary)',
                fontFamily: "'Space Grotesk', sans-serif",
                marginBottom: '16px',
              }}
            >
              {cat.category}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {cat.skills.map((skill, i) => (
                <span
                  key={i}
                  style={{
                    backgroundColor: 'var(--skill-tag-bg)',
                    color: 'var(--skill-tag-fg)',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontFamily: "'JetBrains Mono', monospace",
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
