import React from 'react';
import { leadershipData } from '../data/portfolio';
import useInView from '../hooks/useInView';

function LeadershipCard({ item, index }) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className={`rounded-xl p-5 border fade-up ${visible ? 'visible' : ''}`}
      style={{
        backgroundColor: 'var(--bg-card)',
        borderColor: 'var(--border)',
        transitionDelay: `${index * 0.1}s`
      }}
    >
      {/* Org + latest role */}
      <div className="mb-4">
        <h3 className="text-base font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>
          {item.organization}
        </h3>
        <p className="text-xs font-mono-tech mt-0.5" style={{ color: 'var(--accent)' }}>
          {item.roles[0].title}
        </p>
        <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
          {item.roles[0].date}
        </p>
      </div>

      {/* Role progression pills */}
      {item.roles.length > 1 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {item.roles.slice(1).map((role, i) => (
            <span
              key={i}
              className="px-2 py-0.5 rounded text-xs font-mono-tech"
              style={{
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border)',
                color: 'var(--text-muted)'
              }}
            >
              {role.title}
            </span>
          ))}
        </div>
      )}

      {/* Bullets */}
      <ul className="space-y-2">
        {item.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: 'var(--accent)' }} />
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
    <div
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div ref={ref} className={`mb-12 fade-up ${visible ? 'visible' : ''}`}>
          <p
            className="text-xs font-medium uppercase tracking-widest mb-3 font-mono-tech"
            style={{ color: 'var(--accent)' }}
          >
            Leadership
          </p>
          <h2 className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Campus Involvement
          </h2>
        </div>

        {/* 2-column compact grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {leadershipData.map((item, idx) => (
            <LeadershipCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
