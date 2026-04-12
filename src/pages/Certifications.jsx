import React from 'react';
import { ExternalLink } from 'lucide-react';
import { certificationsData } from '../data/portfolio';
import useInView from '../hooks/useInView';

export default function Certifications() {
  const [ref, visible] = useInView();
  const count = certificationsData.length;

  return (
    <div
      className="py-16 md:py-24 px-4 sm:px-8 max-w-[1200px] mx-auto"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div ref={ref} className={`mb-14 fade-up ${visible ? 'visible' : ''}`}>
        <p className="eyebrow mb-4">Certifications</p>
        <h2 className="section-heading mb-3">Credentials.</h2>
        <p
          className="m-0 max-w-lg text-sm leading-relaxed"
          style={{ color: 'var(--text-muted)', fontFamily: "'Inter', system-ui, sans-serif" }}
        >
          Verified programs and job simulations — {count} credential{count === 1 ? '' : 's'} on file.
        </p>
      </div>

      <ul className="m-0 list-none p-0">
        {certificationsData.map((cert, idx) => (
          <li
            key={`${cert.credentialId}-${idx}`}
            className="-mx-2 rounded-sm border-b border-[var(--divider)] px-2 transition-[background-color,box-shadow] duration-200 last:border-b-0 md:hover:bg-[var(--bg-card)] md:hover:shadow-[inset_3px_0_0_var(--accent)]"
          >
            <div className="flex flex-col gap-4 py-6 pl-5 pr-4 sm:pl-6 sm:pr-5 md:grid md:grid-cols-[minmax(5.5rem,7rem)_minmax(0,1fr)_auto_auto] md:items-start md:gap-x-8 md:gap-y-3 md:py-6">
              <span
                className="shrink-0 font-medium md:pt-0.5"
                style={{
                  color: 'var(--accent)',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '12px',
                  letterSpacing: '0.02em',
                }}
              >
                {cert.issuer}
              </span>

              <div className="min-w-0 md:pt-0.5">
                <span
                  className="block text-[15px] font-medium leading-snug"
                  style={{ color: 'var(--text-primary)', fontFamily: "'Inter', system-ui, sans-serif" }}
                >
                  {cert.title}
                </span>
                {cert.skills?.length > 0 && (
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {cert.skills.map(skill => (
                      <span
                        key={skill}
                        className="rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          color: 'var(--text-muted)',
                          border: '1px solid var(--border)',
                          backgroundColor: 'var(--bg-alt)',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between gap-4 md:contents">
                <span
                  className="shrink-0 tabular-nums md:text-right md:pt-0.5"
                  style={{
                    color: 'var(--text-muted)',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '12px',
                  }}
                >
                  {cert.date}
                </span>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-md py-1 text-xs font-semibold text-[var(--accent)] transition-colors duration-200 hover:text-[var(--accent-hover)] md:justify-self-end md:pt-0.5"
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    textDecoration: 'none',
                  }}
                  aria-label={`View credential: ${cert.title}`}
                >
                  View
                  <ExternalLink className="h-3.5 w-3.5 opacity-80" strokeWidth={2} aria-hidden />
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
