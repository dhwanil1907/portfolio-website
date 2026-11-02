import React from 'react';
import useInView from '../hooks/useInView';

const capabilities = [
  {
    title: 'Machine Learning',
    description:
      'Prediction models, classification pipelines, anomaly detection — built end-to-end and tuned until the numbers make sense.',
  },
  {
    title: 'Data Engineering',
    description:
      'ETL pipelines, dimensional warehouses, and automated workflows. Raw data in, clean decisions out.',
  },
  {
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
    <section id="about" className="section">
      <div className="page-container">
        <div className={`section-header fade-up ${visible ? 'visible' : ''}`} ref={ref}>
          <h2 className="section-title">About</h2>
          <p className="section-subtitle">
            Obsessed with financial data — building models, pipelines, and dashboards that turn numbers into decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className={`fade-up ${visible ? 'visible' : ''}`}>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, margin: '0 0 20px', fontSize: 'var(--text-base)' }}>
              I&apos;m a data scientist based in San Jose, studying at SJSU. My work gravitates toward financial data —
              loan defaults, credit risk, market trends, rent forecasting. I build the full stack: from raw ingestion
              to the model to the dashboard someone actually uses.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, margin: '0 0 36px', fontSize: 'var(--text-base)' }}>
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
                  <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--accent-text)', minWidth: '80px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {label}
                  </span>
                  <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          <ul
            className={`m-0 p-0 list-none fade-up ${visible ? 'visible' : ''}`}
            style={{ borderTop: '1px solid var(--divider)' }}
          >
            {capabilities.map(({ title, description }) => (
              <li
                key={title}
                style={{ padding: '20px 0', borderBottom: '1px solid var(--divider)' }}
              >
                <h3
                  style={{
                    margin: '0 0 6px',
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-lg)',
                    fontWeight: 400,
                    color: 'var(--text-primary)',
                  }}
                >
                  {title}
                </h3>
                <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
