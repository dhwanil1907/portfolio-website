import React from 'react';
import SkillsSection from '../components/SkillsSection';
import { personalInfo, leadershipData } from '../data/portfolio';
import useInView from '../hooks/useInView';

export default function About() {
  const [ref, visible] = useInView();
  const primaryOrg = leadershipData[0];

  return (
    <div className="py-16 sm:py-24 md:py-32 px-4 sm:px-8 max-w-[1200px] mx-auto">
      <div
        ref={ref}
        className={`flex flex-col lg:flex-row gap-16 lg:gap-20 items-start fade-up ${visible ? 'visible' : ''}`}
      >
        {/* Left — text */}
        <div className="w-full lg:w-[55%] shrink-0">

          {/* Heading */}
          <h2 className="section-heading mb-3">Meet Dhwanil.</h2>

          {/* Subtitle — broken up */}
          <p style={{
            fontSize: '15px',
            color: 'var(--accent)',
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: '0.02em',
            marginBottom: '28px',
          }}>
            {personalInfo.tagline} · {personalInfo.education.location}
          </p>

          {/* Bio paragraphs — no bullets */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
            <p style={{
              fontSize: '15px',
              color: 'var(--text-muted)',
              lineHeight: 1.8,
              fontFamily: "'Inter', system-ui, sans-serif",
              margin: 0,
            }}>
              I'm a data scientist and ML practitioner based in San Jose, studying at{' '}
              <span style={{ color: 'var(--text-primary)' }}>{personalInfo.education.university}</span>.
              I build end-to-end pipelines, machine learning models, and production-ready dashboards
              that turn raw data into decisions.
            </p>
            <p style={{
              fontSize: '15px',
              color: 'var(--text-muted)',
              lineHeight: 1.8,
              fontFamily: "'Inter', system-ui, sans-serif",
              margin: 0,
            }}>
              Outside of shipping projects, I lead{' '}
              <span style={{ color: 'var(--text-primary)' }}>{primaryOrg.organization}</span> as{' '}
              {primaryOrg.roles[0].title} — running workshops, competitions, and mentoring
              students breaking into data science.
            </p>
          </div>

          {/* Education rows */}
          <div style={{
            borderTop: '1px solid var(--divider)',
            paddingTop: '28px',
            borderLeft: '2px solid var(--accent)',
            paddingLeft: '20px',
          }}>
            {[
              { num: '01', label: 'University', value: personalInfo.education.university },
              { num: '02', label: 'Degree',     value: personalInfo.education.degree },
              { num: '03', label: 'Graduation', value: personalInfo.education.graduation },
            ].map((row, i, arr) => (
              <div
                key={row.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  padding: '12px 0',
                  borderBottom: i < arr.length - 1 ? '1px solid var(--divider)' : 'none',
                }}
              >
                <span style={{
                  fontSize: '10px',
                  color: 'var(--accent)',
                  fontFamily: "'JetBrains Mono', monospace",
                  flexShrink: 0,
                  opacity: 0.7,
                }}>
                  {row.num}
                </span>
                <span style={{
                  width: '90px',
                  flexShrink: 0,
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'var(--text-muted)',
                  fontFamily: "'JetBrains Mono', monospace",
                }}>
                  {row.label}
                </span>
                <span style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  fontFamily: "'Inter', system-ui, sans-serif",
                }}>
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — photo */}
        <div className="w-full lg:w-[45%]">
          <div
            style={{
              width: '100%',
              maxWidth: '420px',
              aspectRatio: '3 / 4',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid var(--border)',
              margin: '0 auto',
            }}
          >
            <img
              src="/headshot.jpg"
              alt={personalInfo.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 15%',
                display: 'block',
              }}
            />
          </div>
        </div>
      </div>

      <div className="mt-32 md:mt-44 lg:mt-56">
        <SkillsSection />
      </div>
    </div>
  );
}
