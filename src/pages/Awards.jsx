import React from 'react';
import { Award } from 'lucide-react';
import { awardsData } from '../data/portfolio';
import useInView from '../hooks/useInView';

function AwardCard({ award, index }) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className={`neo-card fade-up ${visible ? 'visible' : ''}`}
      style={{
        padding: '24px',
        display: 'flex',
        gap: '20px',
        alignItems: 'flex-start',
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '12px',
          backgroundColor: '#fbbf24',
          border: '2px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <Award style={{ width: '24px', height: '24px', color: '#0a0a0a' }} />
      </div>

      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '6px' }}>
          <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>
            {award.title}
          </h3>
          <span
            style={{
              padding: '3px 12px',
              borderRadius: '9999px',
              fontSize: '11px',
              fontFamily: "'JetBrains Mono', monospace",
              backgroundColor: '#fbbf24',
              color: '#0a0a0a',
              border: '1px solid var(--border)',
              flexShrink: 0,
            }}
          >
            {award.date}
          </span>
        </div>
        <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>
          {award.issuer}
        </p>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.65 }}>
          {award.description}
        </p>
      </div>
    </div>
  );
}

export default function Awards() {
  const [ref, visible] = useInView();

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className={`mb-12 fade-up ${visible ? 'visible' : ''}`}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 900,
              color: 'var(--text-primary)',
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Honors &amp; <span className="highlight-yellow">Awards</span>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {awardsData.map((award, idx) => (
            <AwardCard key={idx} award={award} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
