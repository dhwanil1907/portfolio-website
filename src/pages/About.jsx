import React from 'react';
import { personalInfo, skillsData } from '../data/portfolio';
import useInView from '../hooks/useInView';

export default function About() {
  const [ref, visible] = useInView();

  return (
    <div
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div
          ref={ref}
          className={`mb-16 fade-up ${visible ? 'visible' : ''}`}
        >
          <p
            className="text-xs font-medium uppercase tracking-widest mb-3 font-mono-tech"
            style={{ color: 'var(--accent)' }}
          >
            About
          </p>
          <h2
            className="text-3xl font-bold"
            style={{ color: 'var(--text-primary)' }}
          >
            Who I am
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Bio + headshot */}
          <div className={`lg:col-span-2 fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
            {/* Circular headshot */}
            <div className="mb-8 flex items-center gap-6">
              <div
                className="w-[120px] h-[120px] rounded-full shrink-0 flex items-center justify-center text-2xl font-black"
                style={{
                  background: 'linear-gradient(135deg, var(--accent), #a855f7)',
                  padding: '3px'
                }}
              >
                <div
                  className="w-full h-full rounded-full flex items-center justify-center font-black text-2xl"
                  style={{ backgroundColor: 'var(--bg-card)', color: 'var(--accent)' }}
                >
                  DR {/* TODO: add photo */}
                </div>
              </div>
              <div>
                <p className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>{personalInfo.name}</p>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{personalInfo.tagline}</p>
              </div>
            </div>

            {/* 3-sentence bio */}
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
              I'm a Data Science student at San Jose State University building ML systems and full-stack data products that solve real-world problems.
              My work spans the full pipeline — from raw data ingestion and model training to production APIs and interactive dashboards.
              I lead Spartan Analytics and care deeply about making data literacy accessible.
            </p>

            {/* Currently block */}
            <div
              className="rounded-xl p-5 border"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              <p
                className="text-xs font-medium uppercase tracking-widest mb-4 font-mono-tech"
                style={{ color: 'var(--accent)' }}
              >
                Currently
              </p>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                <li>📚 Studying — B.S. Data Science @ SJSU (Class of 2027)</li>
                <li>💼 Seeking — Internship &amp; full-time Data Engineering / ML roles</li>
                <li>📍 Located — San Jose, CA</li>
              </ul>
            </div>
          </div>

          {/* Skill badges */}
          <div className={`fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <div className="space-y-6">
              {skillsData.map((cat, idx) => (
                <div
                  key={idx}
                  className="rounded-xl p-5 border"
                  style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
                >
                  <p
                    className="text-xs font-medium uppercase tracking-widest mb-4 font-mono-tech"
                    style={{ color: 'var(--accent)' }}
                  >
                    {cat.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-xs font-medium font-mono-tech transition-colors cursor-default"
                        style={{
                          backgroundColor: 'var(--bg-primary)',
                          border: '1px solid var(--border)',
                          color: 'var(--text-muted)'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
