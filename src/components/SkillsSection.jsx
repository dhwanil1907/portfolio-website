import React from 'react';
import { skillsData, projectsData, awardsData } from '../data/portfolio';
import useInView from '../hooks/useInView';

const skillGroups = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'SQL', 'R', 'TypeScript'],
  },
  {
    title: 'Machine Learning',
    skills: ['Scikit-learn', 'XGBoost', 'TensorFlow', 'PyTorch'],
  },
  {
    title: 'Data Tools',
    skills: ['Pandas', 'NumPy', 'Streamlit', 'Power BI', 'Tableau'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Snowflake', 'FastAPI', 'Next.js', 'Git'],
  },
];

export default function SkillsSection() {
  const [ref, visible] = useInView();

  const stats = [
    { value: `${projectsData.length}+`, label: 'Projects Built' },
    { value: '2+', label: 'Years Experience' },
    { value: `${skillsData.flatMap(c => c.skills).length}+`, label: 'Technologies' },
  ];

  return (
    <section id="skills" className="section section--muted">
      <div className="page-container">
        <div className={`section-header fade-up ${visible ? 'visible' : ''}`} ref={ref}>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            A comprehensive toolkit for end-to-end data science and machine
            learning projects.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 fade-up ${
            visible ? 'visible' : ''
          }`}
        >
          {skillGroups.map(group => (
            <div key={group.title} className="card p-5">
              <h3
                style={{
                  margin: '0 0 16px',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              >
                {group.title}
              </h3>
              <ul className="m-0 p-0 list-none flex flex-col gap-2">
                {group.skills.map(skill => (
                  <li
                    key={skill}
                    style={{
                      fontSize: '13px',
                      color: 'var(--text-muted)',
                      paddingBottom: '8px',
                      borderBottom: '1px solid var(--divider)',
                    }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-8 text-center fade-up ${
            visible ? 'visible' : ''
          }`}
        >
          {stats.map(stat => (
            <div key={stat.label}>
              <div
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  lineHeight: 1,
                  marginBottom: '8px',
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
