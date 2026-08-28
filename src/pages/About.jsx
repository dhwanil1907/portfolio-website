import React, { useState, useEffect } from 'react';
import SkillsSection from '../components/SkillsSection';
import {
  personalInfo,
  leadershipData,
  projectsData,
  awardsData,
} from '../data/portfolio';
import useInView from '../hooks/useInView';

function useCountUp(target, isVisible, duration = 900) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const step = Math.max(1, Math.ceil(target / (duration / 16)));
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target, duration]);
  return count;
}

export default function About() {
  const [ref, visible] = useInView();
  const [metricsRef, metricsVisible] = useInView();
  const primaryOrg = leadershipData[0];

  const projectCount = useCountUp(projectsData.length, metricsVisible);
  const awardsCount = useCountUp(awardsData.length, metricsVisible);
  const studentsCount = useCountUp(30, metricsVisible);

  return (
    <div className="py-16 sm:py-24 md:py-32 px-4 sm:px-8 max-w-[1200px] mx-auto">
      <div
        ref={ref}
        className={`flex flex-col lg:flex-row gap-16 lg:gap-20 items-start fade-up ${visible ? 'visible' : ''}`}
      >
        {/* Left — profile */}
        <div className="w-full lg:w-[55%] shrink-0">
          <h2 className="section-heading mb-3">Meet Dhwanil.</h2>

          {/* Subtitle — broken up */}
          <p style={{
            fontSize: '15px',
            color: 'var(--accent)',
            fontFamily: 'var(--font-mono)',
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
              fontFamily: 'var(--font-body)',
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
              fontFamily: 'var(--font-body)',
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
                  fontFamily: 'var(--font-mono)',
                  flexShrink: 0,
                  opacity: 0.7,
                }}>
                  {row.num}
                </span>
                <span style={{
                  width: '90px',
                  flexShrink: 0,
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-mono)',
                }}>
                  {row.label}
                </span>
                <span style={{
                  fontSize: '16px',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-body)',
                }}>
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — systems snapshot */}
        <div className="w-full lg:w-[45%]">
          <div className="data-system-card" ref={metricsRef}>
            <p className="eyebrow mb-8">How I work</p>
            <div className="data-flow" aria-label="Data to decision workflow">
              <div className="data-flow__node">Data</div>
              <div className="data-flow__node data-flow__node--active">Model</div>
              <div className="data-flow__node">Decision</div>
            </div>
            <div className="metric-grid">
              <div>
                <strong>{projectCount}</strong>
                <span>Projects</span>
              </div>
              <div>
                <strong>{awardsCount}</strong>
                <span>Awards</span>
              </div>
              <div>
                <strong>{studentsCount}+</strong>
                <span>Students</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 md:mt-32">
        <SkillsSection />
      </div>
    </div>
  );
}
