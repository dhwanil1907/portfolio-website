import React from 'react';
import { awardsData, projectsData, leadershipData } from '../data/portfolio';
import useInView from '../hooks/useInView';

const mono = (size = '11px', color = 'var(--text-muted)') => ({
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: size,
  color,
});

function clubMembersStat() {
  const text = leadershipData.map(o => o.bullets.join(' ')).join(' ');
  const match = text.match(/→\s*(\d+)\s+members/i) || text.match(/(\d+)\s+members/i);
  return match ? `${match[1]}+` : '40+';
}

function AwardCard({ award, index }) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className={`fade-up ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div style={{
        border: '1px solid var(--divider)',
        borderRadius: '16px',
        overflow: 'hidden',
        backgroundColor: 'rgba(255,255,255,0.02)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}>
        {/* Header strip */}
        <div style={{
          padding: '20px 24px 18px',
          borderBottom: '1px solid var(--divider)',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
            <span style={{
              ...mono('10px', 'var(--accent)'),
              border: '1px solid var(--accent-ring)',
              borderRadius: '9999px',
              padding: '3px 10px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}>
              {award.issuer}
            </span>
            <span style={mono('11px', 'var(--text-subtle)')}>{award.date}</span>
          </div>
          <h3 style={{
            margin: 0,
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '18px',
            fontWeight: 700,
            color: 'var(--text-primary)',
            lineHeight: 1.3,
          }}>
            {award.title}
          </h3>
        </div>

        {/* Body */}
        <div style={{ padding: '18px 24px 22px', flex: 1 }}>
          <p style={{
            margin: 0,
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: '14px',
            lineHeight: 1.7,
            color: 'var(--text-muted)',
          }}>
            {award.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Awards() {
  const [ref, visible] = useInView();
  const stats = [
    { value: String(awardsData.length), label: 'Awards Won' },
    { value: String(projectsData.length), label: 'Projects Built' },
    { value: clubMembersStat(), label: 'Club Members Led' },
  ];

  return (
    <div className="py-16 md:py-24 px-4 sm:px-8 max-w-[1200px] mx-auto">
      {/* Section header */}
      <div
        ref={ref}
        className={`fade-up ${visible ? 'visible' : ''}`}
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          borderBottom: '1px solid var(--divider)',
          paddingBottom: '20px',
          marginBottom: '48px',
        }}
      >
        <h2 className="section-heading" style={{ margin: 0 }}>Highlights.</h2>
        <span style={mono('11px', 'var(--text-muted)')}>Recognition</span>
      </div>

      {/* Stats strip */}
      <div
        className={`fade-up ${visible ? 'visible' : ''}`}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          border: '1px solid var(--divider)',
          borderRadius: '16px',
          overflow: 'hidden',
          marginBottom: '40px',
        }}
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            style={{
              padding: '28px 24px',
              borderRight: i < stats.length - 1 ? '1px solid var(--divider)' : 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              backgroundColor: 'rgba(255,255,255,0.02)',
            }}
          >
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '40px',
              fontWeight: 700,
              color: 'var(--accent)',
              lineHeight: 1,
            }}>
              {s.value}
            </span>
            <span style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '13px',
              color: 'var(--text-muted)',
            }}>
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Award cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {awardsData.map((award, idx) => (
          <AwardCard key={idx} award={award} index={idx} />
        ))}
      </div>
    </div>
  );
}
