import React from 'react';
import { Brain, Database, LineChart } from 'lucide-react';
import { personalInfo, leadershipData, skillsData } from '../data/portfolio';
import useInView from '../hooks/useInView';

const capabilities = [
  {
    icon: Brain,
    title: 'Machine Learning',
    description:
      'End-to-end ML pipelines, model training, and production deployment with measurable impact.',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description:
      'Automated workflows, ETL pipelines, and dashboards that turn raw data into decisions.',
  },
  {
    icon: LineChart,
    title: 'Analytics & Insights',
    description:
      'Statistical modeling, KPI tracking, and visualization for stakeholders and teams.',
  },
];

export default function About() {
  const [ref, visible] = useInView();
  const primaryOrg = leadershipData[0];
  const topSkills = skillsData.flatMap(c => c.skills).slice(0, 8);

  return (
    <section id="about" className="section min-h-[calc(100vh-64px)]">
      <div className="page-container">
        <div className={`section-header fade-up ${visible ? 'visible' : ''}`} ref={ref}>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Data science student at {personalInfo.education.university}, building
            production-ready pipelines, models, and dashboards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className={`fade-up ${visible ? 'visible' : ''}`}>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, margin: '0 0 16px' }}>
              I&apos;m a data scientist and ML practitioner based in{' '}
              {personalInfo.education.location}, studying at{' '}
              {personalInfo.education.university}. I build end-to-end pipelines,
              machine learning models, and production-ready dashboards that turn
              raw data into decisions.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, margin: '0 0 28px' }}>
              Outside of shipping projects, I lead {primaryOrg.organization} as{' '}
              {primaryOrg.roles[0].title} — running workshops, competitions, and
              mentoring students breaking into data science.
            </p>
            <div className="flex flex-wrap gap-2">
              {topSkills.map(skill => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className={`flex flex-col gap-4 fade-up ${visible ? 'visible' : ''}`}>
            {capabilities.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card p-6 flex gap-4">
                <div
                  className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg"
                  style={{ backgroundColor: 'var(--surface-subtle)' }}
                >
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3
                    style={{
                      margin: '0 0 6px',
                      fontSize: '15px',
                      fontWeight: 600,
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '14px',
                      color: 'var(--text-muted)',
                      lineHeight: 1.6,
                    }}
                  >
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
