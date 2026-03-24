import React from 'react';
import { BadgeCheck, ExternalLink } from 'lucide-react';
import { certificationsData } from '../data/portfolio';
import useInView from '../hooks/useInView';

function CertificationCard({ cert, index }) {
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
          backgroundColor: '#10b981',
          border: '2px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <BadgeCheck style={{ width: '24px', height: '24px', color: '#0a0a0a' }} />
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '6px' }}>
          <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>
            {cert.title}
          </h3>
          <span
            style={{
              padding: '3px 12px',
              borderRadius: '9999px',
              fontSize: '11px',
              fontFamily: "'JetBrains Mono', monospace",
              backgroundColor: 'var(--cert-pill-bg)',
              color: 'var(--cert-pill-fg)',
              border: '1px solid var(--border)',
              flexShrink: 0,
            }}
          >
            {cert.date}
          </span>
        </div>
        <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>
          {cert.issuer}
        </p>
        {cert.skills?.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
            {cert.skills.map(s => (
              <span
                key={s}
                style={{
                  fontSize: '11px',
                  fontFamily: "'JetBrains Mono', monospace",
                  padding: '2px 8px',
                  borderRadius: '4px',
                  backgroundColor: 'var(--cert-skill-bg)',
                  border: '1px solid var(--border)',
                  color: 'var(--cert-skill-fg)',
                }}
              >
                {s}
              </span>
            ))}
          </div>
        )}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px' }}>
          <a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--text-primary)',
              textDecoration: 'none',
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            <ExternalLink style={{ width: '14px', height: '14px' }} />
            View credential
          </a>
          {cert.credentialId && (
            <span style={{ fontSize: '11px', fontFamily: "'JetBrains Mono', monospace", color: 'var(--text-subtle)' }}>
              ID: {cert.credentialId}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Certifications() {
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
            Licenses &amp; <span className="highlight-blue">Certifications</span>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {certificationsData.map((cert, idx) => (
            <CertificationCard key={`${cert.credentialId}-${idx}`} cert={cert} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
