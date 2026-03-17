import React from 'react';
import { experienceData } from '../data/portfolio';
import useInView from '../hooks/useInView';

const PILL_COLORS = {
  'Internship': { bg: '#6366f11a', color: 'var(--accent)', border: '#6366f133' },
  'Full-time':  { bg: '#10b9811a', color: '#10b981',       border: '#10b98133' },
};

function ExperienceCard({ exp, index }) {
  const [ref, visible] = useInView();
  const pill = PILL_COLORS[exp.type] || PILL_COLORS['Internship'];

  return (
    <div
      ref={ref}
      className={`relative pl-8 fade-up ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Timeline dot */}
      <div
        className="absolute left-0 top-1.5 w-3 h-3 rounded-full z-10"
        style={{ backgroundColor: 'var(--accent)', border: '2px solid var(--bg-primary)' }}
      />
      {/* Timeline line */}
      <div
        className="absolute left-1.5 top-5 bottom-0 w-px"
        style={{ backgroundColor: 'var(--border)' }}
      />

      <div
        className="rounded-xl p-6 border mb-8"
        style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
              {exp.role}
            </h3>
            <p className="font-medium mt-0.5" style={{ color: 'var(--accent)' }}>
              {exp.company}
            </p>
            <p className="text-sm mt-1 font-mono-tech" style={{ color: 'var(--text-muted)' }}>
              {exp.date} · {exp.location}
            </p>
          </div>
          <span
            className="self-start px-3 py-1 rounded-full text-xs font-semibold font-mono-tech shrink-0"
            style={{ backgroundColor: pill.bg, color: pill.color, border: `1px solid ${pill.border}` }}
          >
            {exp.type}
          </span>
        </div>

        {/* Achievement bullets */}
        <ul className="space-y-3">
          {exp.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: 'var(--accent)' }} />
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
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div ref={ref} className={`mb-16 fade-up ${visible ? 'visible' : ''}`}>
          <p
            className="text-xs font-medium uppercase tracking-widest mb-3 font-mono-tech"
            style={{ color: 'var(--accent)' }}
          >
            Experience
          </p>
          <h2 className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Where I've worked
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {experienceData.map((exp, idx) => (
            <ExperienceCard key={idx} exp={exp} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
