import React from 'react';
import { awardsData, projectsData, leadershipData } from '../data/portfolio';
import useInView from '../hooks/useInView';

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
      <div
        className="h-full p-6 rounded-xl border"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--border)',
          borderWidth: '1px',
        }}
      >
        <p className="eyebrow mb-3">{award.issuer}</p>
        <h3
          className="text-lg font-semibold m-0 mb-3 leading-snug"
          style={{ color: 'var(--text-primary)', fontFamily: "'Inter', system-ui, sans-serif" }}
        >
          {award.title}
        </h3>
        <p
          className="text-xs m-0 mb-4"
          style={{ color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace" }}
        >
          {award.date}
        </p>
        <p
          className="text-sm m-0 leading-relaxed"
          style={{ color: 'var(--text-muted)', fontFamily: "'Inter', system-ui, sans-serif" }}
        >
          {award.description}
        </p>
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
    <div
      className="py-16 md:py-24 px-4 sm:px-8 max-w-[1200px] mx-auto"
      style={{}}
    >
      <div ref={ref} className={`mb-14 fade-up ${visible ? 'visible' : ''}`}>
        <p className="eyebrow mb-4">Recognition</p>
        <h2 className="section-heading mb-10 md:mb-16">Highlights.</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 mb-12 md:mb-20">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="flex flex-col items-center text-center px-4 sm:px-8 relative"
            >
              {i > 0 && (
                <div
                  className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12"
                  style={{ backgroundColor: 'var(--border)' }}
                />
              )}
              <span
                className="text-5xl font-bold leading-none mb-3"
                style={{ color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {s.value}
              </span>
              <span
                className="text-xs sm:text-sm"
                style={{ color: 'var(--text-muted)', fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {awardsData.map((award, idx) => (
          <AwardCard key={idx} award={award} index={idx} />
        ))}
      </div>
    </div>
  );
}
