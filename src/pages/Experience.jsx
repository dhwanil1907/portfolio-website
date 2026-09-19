import React, { useState } from 'react';
import { Briefcase, GraduationCap, Users } from 'lucide-react';
import { MotionButton, MotionButtonEl } from '../components/MotionButton';
import {
  experienceData,
  leadershipData,
  personalInfo,
  awardsData,
  certificationsData,
} from '../data/portfolio';
import useInView from '../hooks/useInView';

const tabs = [
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'leadership', label: 'Leadership', icon: Users },
];

function ExperienceCard({ title, org, date, location, summary, bullets, tags }) {
  return (
    <div className="card p-6 mb-4">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
        <div>
          <h3 style={{ margin: '0 0 4px', fontSize: '17px', fontWeight: 600 }}>
            {title}
          </h3>
          <p style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>
            {org}
          </p>
        </div>
        <div className="text-left sm:text-right shrink-0">
          <p style={{ margin: '0 0 2px', fontSize: '13px', color: 'var(--text-muted)' }}>
            {date}
          </p>
          <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)' }}>
            {location}
          </p>
        </div>
      </div>
      {summary && (
        <p style={{ margin: '0 0 12px', fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.65 }}>
          {summary}
        </p>
      )}
      {bullets?.length > 0 && (
        <>
          <p style={{ margin: '0 0 8px', fontSize: '13px', fontWeight: 600 }}>
            Key Achievements:
          </p>
          <ul className="m-0 mb-4 pl-5" style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.65 }}>
            {bullets.map(b => (
              <li key={b} className="mb-1">
                {b}
              </li>
            ))}
          </ul>
        </>
      )}
      {tags?.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {tags.map(t => (
            <span key={t} className="tag" style={{ fontSize: '11px', padding: '4px 10px' }}>
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function LeadershipSection() {
  return null;
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState('experience');
  const [ref, visible] = useInView();

  const edu = personalInfo.education;

  return (
    <>
      <section id="experience" className="section section--muted">
        <div className="page-container">
          <div className={`section-header fade-up ${visible ? 'visible' : ''}`} ref={ref}>
            <h2 className="section-title">
              Experience <span style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}>&amp;</span> Education
            </h2>
            <p className="section-subtitle">
              My professional journey in data science — from internships and
              volunteer work to campus leadership and continuous learning.
            </p>
          </div>

          <div
            className="flex justify-center mb-8 p-1 rounded-full mx-auto"
            style={{ backgroundColor: 'var(--surface-subtle)', maxWidth: '420px' }}
          >
            {tabs.map(({ id, label, icon: Icon }) => (
              <MotionButtonEl
                key={id}
                type="button"
                onClick={() => setActiveTab(id)}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border-0 cursor-pointer text-sm font-medium transition-colors"
                style={{
                  backgroundColor: activeTab === id ? 'var(--bg-card)' : 'transparent',
                  color: activeTab === id ? 'var(--text-primary)' : 'var(--text-muted)',
                  boxShadow: activeTab === id ? 'var(--shadow-card)' : 'none',
                }}
              >
                <Icon size={15} />
                {label}
              </MotionButtonEl>
            ))}
          </div>

          <div className={`fade-up ${visible ? 'visible' : ''}`}>
            {activeTab === 'experience' &&
              experienceData.map(exp => (
                <ExperienceCard
                  key={exp.role + exp.company}
                  title={exp.role}
                  org={exp.company}
                  date={exp.date}
                  location={exp.location}
                  bullets={exp.bullets}
                  tags={[exp.type]}
                />
              ))}

            {activeTab === 'education' && (
              <ExperienceCard
                title={edu.degree}
                org={edu.university}
                date={edu.graduation}
                location={edu.location}
                bullets={[]}
                tags={['Machine Learning', 'Statistics', 'Data Engineering', 'Python']}
              />
            )}

            {activeTab === 'leadership' &&
              leadershipData.map(org => (
                <ExperienceCard
                  key={org.organization}
                  title={org.roles[0].title}
                  org={org.organization}
                  date={org.roles[0].date}
                  location={org.location}
                  summary={org.description}
                  bullets={org.bullets?.length ? org.bullets : undefined}
                  tags={['Leadership', 'Python', 'SQL', 'Workshops']}
                />
              ))}
          </div>
        </div>
      </section>

      <section id="awards" className="section">
        <div className="page-container">
          <div className="section-header">
            <h2 className="section-title">
              Awards <span style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}>&amp;</span> Recognition
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {awardsData.map(award => (
              <div key={award.title} className="card p-6">
                <div className="flex justify-between gap-4 mb-2">
                  <span className="tag" style={{ fontSize: '11px' }}>
                    {award.issuer}
                  </span>
                  <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                    {award.date}
                  </span>
                </div>
                <h3 style={{ margin: '0 0 10px', fontSize: '16px', fontWeight: 600 }}>
                  {award.title}
                </h3>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="section section--muted">
        <div className="page-container">
          <div className="section-header">
            <h2 className="section-title">Certifications</h2>
            <p className="section-subtitle">
              Verified programs and job simulations — {certificationsData.length}{' '}
              credentials on file.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {certificationsData.map(cert => (
              <div
                key={cert.credentialId}
                className="card p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
              >
                <div>
                  <p style={{ margin: '0 0 4px', fontSize: '12px', color: 'var(--text-muted)' }}>
                    {cert.issuer} · {cert.date}
                  </p>
                  <p style={{ margin: 0, fontSize: '15px', fontWeight: 500 }}>
                    {cert.title}
                  </p>
                </div>
                <MotionButton
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline shrink-0"
                  style={{ padding: '8px 16px', fontSize: '13px' }}
                >
                  View
                </MotionButton>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
