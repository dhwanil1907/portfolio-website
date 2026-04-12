import React from 'react';
import { certificationsData } from '../data/portfolio';
import useInView from '../hooks/useInView';

export default function Certifications() {
  const [ref, visible] = useInView();

  return (
    <div
      className="py-16 md:py-24 px-4 sm:px-8 max-w-[1200px] mx-auto"
      style={{}}
    >
      <div ref={ref} className={`mb-12 fade-up ${visible ? 'visible' : ''}`}>
        <p className="eyebrow mb-4">Certifications</p>
        <h2 className="section-heading">Credentials.</h2>
      </div>

      <ul className="m-0 p-0 list-none">
        {certificationsData.map((cert, idx) => (
          <li key={`${cert.credentialId}-${idx}`}>
            <div
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-5"
              style={{ borderBottomWidth: idx < certificationsData.length - 1 ? '1px' : 0, borderBottomColor: 'var(--divider)', borderBottomStyle: 'solid' }}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 flex-1 min-w-0">
                <span
                  className="text-xs shrink-0"
                  style={{ color: 'var(--accent)', fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {cert.issuer}
                </span>
                <span
                  className="text-sm font-medium"
                  style={{ color: 'var(--text-primary)', fontFamily: "'Inter', system-ui, sans-serif" }}
                >
                  {cert.title}
                </span>
                <span
                  className="text-xs sm:ml-auto shrink-0"
                  style={{ color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {cert.date}
                </span>
              </div>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium shrink-0 transition-colors duration-200 hover:opacity-90"
                style={{ color: 'var(--accent)', fontFamily: "'Inter', system-ui, sans-serif", textDecoration: 'none' }}
              >
                View
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
