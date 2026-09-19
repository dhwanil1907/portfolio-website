import React from 'react';
import { Brain, Database, LineChart } from 'lucide-react';
import { leadershipData } from '../data/portfolio';
import useInView from '../hooks/useInView';

const capabilities = [
  {
    icon: Brain,
    title: 'Machine Learning',
    description:
      'Prediction models, classification pipelines, anomaly detection — built end-to-end and tuned until the numbers make sense.',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description:
      'ETL pipelines, dimensional warehouses, and automated workflows. Raw data in, clean decisions out.',
  },
  {
    icon: LineChart,
    title: 'Analytics & Insights',
    description:
      'Charts, dashboards, and statistical models that surface what the data is actually trying to say.',
  },
];

const quickStats = [
  { label: 'Degree', value: 'B.S. Data Science · SJSU' },
  { label: 'Focus', value: 'Financial data & ML systems' },
  { label: 'Currently', value: 'President, Spartan Analytics' },
];

export default function About() {
  const [ref, visible] = useInView();

  return (
    <section id="about" className="section min-h-[calc(100vh-64px)]">
      <div className="page-container">
        <div className={`section-header fade-up ${visible ? 'visible' : ''}`} ref={ref}>
          <h2 className="section-title">About</h2>
          <p className="section-subtitle">
            Obsessed with financial data — building models, pipelines, and dashboards that turn numbers into decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className={`fade-up ${visible ? 'visible' : ''}`}>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, margin: '0 0 20px', fontSize: '15px' }}>
              I&apos;m a data scientist based in San Jose, studying at SJSU. My work gravitates toward financial data —
              loan defaults, credit risk, market trends, rent forecasting. I build the full stack: from raw ingestion
              to the model to the dashboard someone actually uses.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, margin: '0 0 36px', fontSize: '15px' }}>
              Outside of projects, I lead Spartan Analytics as President — running workshops, competitions, and a
              7-person exec team. If I&apos;m not writing code, I&apos;m probably deep in a dataset.
            </p>

            <div className="flex flex-col gap-3">
              {quickStats.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-baseline gap-3"
                  style={{ borderBottom: '1px solid var(--divider)', paddingBottom: '12px' }}
                >
                  <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--accent)', minWidth: '80px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {label}
                  </span>
                  <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`flex flex-col gap-4 fade-up ${visible ? 'visible' : ''}`}>
            {capabilities.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card p-6 flex gap-4">
                <div
                  className="shrink-0 flex items-center justify-center w-11 h-11 rounded-lg"
                  style={{ backgroundColor: 'rgba(201, 137, 42, 0.1)' }}
                >
                  <Icon size={22} strokeWidth={1.5} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <h3 style={{ margin: '0 0 6px', fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {title}
                  </h3>
                  <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.65 }}>
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
