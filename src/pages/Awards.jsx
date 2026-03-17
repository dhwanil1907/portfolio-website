import React from 'react';
import { Award } from 'lucide-react';
import { awardsData } from '../data/portfolio';
import useInView from '../hooks/useInView';

export default function Awards() {
  const [ref, visible] = useInView();

  return (
    <div
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div ref={ref} className={`mb-12 fade-up ${visible ? 'visible' : ''}`}>
          <p
            className="text-xs font-medium uppercase tracking-widest mb-3 font-mono-tech"
            style={{ color: 'var(--accent)' }}
          >
            Recognition
          </p>
          <h2 className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Honors &amp; Awards
          </h2>
        </div>

        <div className="space-y-6">
          {awardsData.map((award, idx) => {
            const [cardRef, cardVisible] = useInView();
            return (
              <div
                key={idx}
                ref={cardRef}
                className={`flex gap-6 items-start p-6 rounded-xl border transition-all duration-[250ms] hover:-translate-y-0.5 fade-up ${cardVisible ? 'visible' : ''}`}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border)',
                  transitionDelay: `${idx * 0.1}s`
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border"
                  style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border)' }}
                >
                  <Award className="w-6 h-6" style={{ color: 'var(--accent)' }} aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                    <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {award.title}
                    </h3>
                    <span
                      className="self-start shrink-0 px-3 py-0.5 rounded-full text-xs font-semibold font-mono-tech"
                      style={{ backgroundColor: 'var(--accent-glow)', color: 'var(--accent)' }}
                    >
                      {award.date}
                    </span>
                  </div>
                  <p className="text-sm font-medium mb-2" style={{ color: 'var(--accent)' }}>
                    {award.issuer}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {award.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
