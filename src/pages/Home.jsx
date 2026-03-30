import React from 'react';
import { Mail, FolderOpen } from 'lucide-react';
import useInView from '../hooks/useInView';

export default function Home() {
  const [ref, visible] = useInView();

  const primaryShadow = '3px 3px 0 var(--btn-shadow)';
  const primaryShadowHover = '5px 5px 0 var(--btn-shadow)';
  const outlineShadow = '3px 3px 0 var(--shadow-key)';
  const outlineShadowHover = '5px 5px 0 var(--shadow-key)';

  return (
    <div className="w-full">
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-12 pb-24 md:pt-16 md:pb-32">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 items-center fade-up ${visible ? 'visible' : ''}`}
        >
          <div>
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                color: 'var(--text-primary)',
                fontFamily: "'Space Grotesk', sans-serif",
                marginBottom: '24px',
              }}
            >
              I'm{' '}
              <span className="highlight-pink">Dhwanil</span>
              ,{' '}
              <br className="hidden sm:block" />
              a Data Scientist
              <br />
              from{' '}
              <span className="highlight-blue">San Jose</span>
            </h1>

            <p
              style={{
                fontSize: '17px',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                marginBottom: '36px',
                maxWidth: '480px',
              }}
            >
              ML Practitioner & Data Engineer — building pipelines, models,
              and dashboards for production. Currently seeking internships &amp; full-time roles.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  backgroundColor: 'var(--btn-primary-bg)',
                  color: 'var(--btn-primary-fg)',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '15px',
                  border: '2px solid var(--border)',
                  boxShadow: primaryShadow,
                  textDecoration: 'none',
                  fontFamily: "'Space Grotesk', sans-serif",
                  transition: 'transform 0.15s, box-shadow 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-2px,-2px)'; e.currentTarget.style.boxShadow = primaryShadowHover; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translate(0,0)'; e.currentTarget.style.boxShadow = primaryShadow; }}
              >
                <Mail style={{ width: '18px', height: '18px' }} />
                Get in touch
              </a>

              <a
                href="#work"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  backgroundColor: 'transparent',
                  color: 'var(--btn-secondary-fg)',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '15px',
                  border: '2px solid var(--border)',
                  boxShadow: outlineShadow,
                  textDecoration: 'none',
                  fontFamily: "'Space Grotesk', sans-serif",
                  transition: 'transform 0.15s, box-shadow 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-2px,-2px)'; e.currentTarget.style.boxShadow = outlineShadowHover; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translate(0,0)'; e.currentTarget.style.boxShadow = outlineShadow; }}
              >
                <FolderOpen style={{ width: '18px', height: '18px' }} />
                View portfolio
              </a>
            </div>

            <p
              style={{
                marginTop: '28px',
                fontSize: '13px',
                color: 'var(--text-muted)',
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Open to internships &amp; full-time · Based in San Jose, CA
            </p>
          </div>

          <div className="hidden lg:flex justify-center">
            <div
              style={{
                width: '340px',
                height: '340px',
                border: '1px solid var(--divider)',
                borderRadius: '24px',
                overflow: 'hidden',
                flexShrink: 0,
              }}
            >
              <img
                src="/IMG_9684.jpg"
                alt="Dhwanil Ranpura"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 22%',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
