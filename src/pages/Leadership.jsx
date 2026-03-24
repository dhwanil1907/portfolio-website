import React from 'react';
import { leadershipData } from '../data/portfolio';
import useInView from '../hooks/useInView';

function LeadershipCard({ item, index }) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className={`neo-card fade-up ${visible ? 'visible' : ''}`}
      style={{
        padding: '24px',
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      <div style={{ marginBottom: '16px' }}>
        <h3
          style={{
            fontSize: '16px',
            fontWeight: 700,
            color: 'var(--text-primary)',
            fontFamily: "'Space Grotesk', sans-serif",
            marginBottom: '6px',
          }}
        >
          {item.organization}
        </h3>
        <span
          style={{
            display: 'inline-block',
            backgroundColor: '#6c4fff',
            color: '#ffffff',
            padding: '3px 12px',
            borderRadius: '9999px',
            fontSize: '12px',
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            marginBottom: '4px',
          }}
        >
          {item.roles[0].title}
        </span>
        <p style={{ fontSize: '12px', color: 'var(--text-subtle)', fontFamily: "'JetBrains Mono', monospace" }}>
          {item.roles[0].date}
        </p>
      </div>

      {item.roles.length > 1 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
          {item.roles.slice(1).map((role, i) => (
            <span
              key={i}
              style={{
                padding: '3px 10px',
                borderRadius: '9999px',
                fontSize: '11px',
                backgroundColor: 'var(--skill-tag-bg)',
                color: 'var(--skill-tag-fg)',
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              {role.title}
            </span>
          ))}
        </div>
      )}

      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {item.bullets.map((b, i) => (
          <li
            key={i}
            style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#6c4fff',
                flexShrink: 0,
                marginTop: '7px',
              }}
            />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Leadership() {
  const [ref, visible] = useInView();

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--bg-alt)' }}>
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className={`mb-12 fade-up ${visible ? 'visible' : ''}`}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 900,
              color: 'var(--text-primary)',
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Campus <span className="highlight-pink">Involvement</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {leadershipData.map((item, idx) => (
            <LeadershipCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
