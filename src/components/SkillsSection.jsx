import React from 'react';
import { skillsData, projectsData } from '../data/portfolio';
import useInView from '../hooks/useInView';

function useCountUp(target, duration = 1500, start = false) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!start) return;

    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatItem({ value, label, visible }) {
  const numericValue = parseInt(value, 10);
  const count = useCountUp(numericValue, 1500, visible);

  return (
    <div>
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '3.5rem',
          fontWeight: 400,
          color: 'var(--accent)',
          lineHeight: 1,
          marginBottom: '8px',
        }}
      >
        {count}+
      </div>
      <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
        {label}
      </div>
    </div>
  );
}

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
            The tools I reach for when turning raw data into something that actually matters.
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
                    className="skill-item"
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
            <StatItem
              key={stat.label}
              value={stat.value}
              label={stat.label}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
