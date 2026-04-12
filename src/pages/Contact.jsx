import React from 'react';
import { personalInfo } from '../data/portfolio';
import useInView from '../hooks/useInView';

export default function Contact() {
  const [ref, visible] = useInView();

  return (
    <section
      style={{}}
    >
      <div
        ref={ref}
        className={`py-32 sm:py-40 px-4 sm:px-8 max-w-[1200px] mx-auto fade-up ${visible ? 'visible' : ''}`}
      >
      <div className="text-center max-w-2xl mx-auto">
        <p className="eyebrow mb-4">Contact</p>
        <h2 className="section-heading mb-6">Let&apos;s build something together.</h2>
        <p
          className="text-base mb-10"
          style={{ color: 'var(--text-muted)', lineHeight: 1.75, fontFamily: "'Inter', system-ui, sans-serif" }}
        >
          Open to internships and full-time roles in data science, ML engineering, and data engineering.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold transition-opacity duration-200 hover:opacity-90"
            style={{
              backgroundColor: '#818cf8',
              color: '#0d0d0d',
              textDecoration: 'none',
              fontFamily: "'Inter', system-ui, sans-serif",
            }}
          >
            Email
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold border transition-colors duration-200"
            style={{
              borderColor: '#2a2a2a',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              fontFamily: "'Inter', system-ui, sans-serif",
              backgroundColor: 'transparent',
            }}
          >
            LinkedIn
          </a>
        </div>
        <p
          className="text-xs mt-10"
          style={{ color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace" }}
        >
          {personalInfo.email} · Based in {personalInfo.education.location}
        </p>
      </div>
      </div>
    </section>
  );
}
