import React from 'react';
import { experienceData, leadershipData } from '../data/portfolio';
import useInView from '../hooks/useInView';

const mono = (size = '12px', color = 'var(--text-muted)') => ({
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: size,
  color,
  lineHeight: 1.5,
  fontWeight: 400,
});

function BulletList({ items }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {items.map((text, i) => (
        <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <span
            aria-hidden
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: 'var(--text-muted)',
              flexShrink: 0,
              marginTop: '9px',
            }}
          />
          <span style={{
            fontSize: '14px',
            lineHeight: 1.6,
            color: 'var(--text-primary)',
            opacity: 0.92,
            fontFamily: "'Inter', system-ui, sans-serif",
          }}>
            {text}
          </span>
        </div>
      ))}
    </div>
  );
}

function ExperienceJobEntry({ exp, index, isLast }) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className={`fade-up ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s`, position: 'relative' }}
    >
      {/* Desktop */}
      <div className="hidden md:grid" style={{ gridTemplateColumns: '180px 1fr', gap: '0 40px' }}>
        {/* Left — timeline column */}
        <div style={{ position: 'relative', paddingRight: '28px' }}>
          <div style={{
            position: 'absolute',
            right: 0,
            top: '10px',
            bottom: isLast ? 'auto' : '-48px',
            width: '1px',
            backgroundColor: 'var(--border)',
          }} />
          <div style={{
            position: 'absolute',
            right: '-5px',
            top: '8px',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: 'var(--accent)',
            border: '2px solid var(--bg-primary)',
          }} />

          <div style={{ paddingRight: '12px' }}>
            <div style={mono('12px', 'var(--text-muted)')}>{exp.date}</div>
            <div style={{
              marginTop: '12px',
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '14px',
              fontWeight: 600,
              color: 'var(--text-primary)',
              lineHeight: 1.45,
            }}>
              {exp.company}
            </div>
            <div style={{
              marginTop: '6px',
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '12px',
              fontWeight: 400,
              color: 'var(--text-muted)',
              lineHeight: 1.5,
            }}>
              {exp.location}
            </div>
          </div>
        </div>

        {/* Right — content */}
        <div style={{ paddingBottom: isLast ? 0 : '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
            <h3 style={{
              margin: 0,
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '20px',
              fontWeight: 600,
              color: 'var(--text-primary)',
            }}>
              {exp.role}
            </h3>
            <span style={{
              ...mono('10px', 'var(--accent)'),
              border: '1px solid var(--accent-ring)',
              borderRadius: '9999px',
              padding: '3px 10px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>
              {exp.type}
            </span>
          </div>
          <BulletList items={exp.bullets} />
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden" style={{ paddingBottom: isLast ? 0 : '40px', borderBottom: isLast ? 'none' : '1px solid var(--divider)', marginBottom: isLast ? 0 : '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px', flexWrap: 'wrap' }}>
          <span style={mono('12px', 'var(--text-muted)')}>{exp.date}</span>
          <span style={{
            ...mono('10px', 'var(--accent)'),
            border: '1px solid var(--accent-ring)',
            borderRadius: '9999px',
            padding: '2px 8px',
          }}>
            {exp.type}
          </span>
        </div>
        <h3 style={{
          margin: '8px 0 2px',
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '18px',
          fontWeight: 600,
          color: 'var(--text-primary)',
        }}>
          {exp.role}
        </h3>
        <div style={{
          marginBottom: '14px',
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: '13px',
          color: 'var(--text-muted)',
          lineHeight: 1.5,
        }}>
          <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{exp.company}</span>
          <span style={{ color: 'var(--text-muted)' }}> · {exp.location}</span>
        </div>
        <BulletList items={exp.bullets} />
      </div>
    </div>
  );
}

export function LeadershipSection() {
  const [ref, visible] = useInView();

  return (
    <div className="py-16 md:py-24 px-4 sm:px-8 max-w-[1200px] mx-auto">
      <div style={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        borderBottom: '1px solid var(--divider)',
        paddingBottom: '20px',
        marginBottom: '48px',
      }}>
        <h2 className="section-heading" style={{ margin: 0 }}>How I give back.</h2>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '12px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
          }}
        >
          Leadership
        </span>
      </div>

      <div
        ref={ref}
        className={`grid grid-cols-1 md:grid-cols-2 gap-6 fade-up ${visible ? 'visible' : ''}`}
      >
        {leadershipData.map((org, i) => {
          const current = org.roles[0];
          const isCurrent = /present/i.test(current.date);
          return (
            <div
              key={i}
              style={{
                border: '1px solid var(--border)',
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-card)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{
                padding: '24px 28px 20px',
                borderBottom: '1px solid var(--divider)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', width: '100%' }}>
                  {isCurrent && (
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '11px',
                      fontWeight: 500,
                      color: 'var(--accent)',
                      border: '1px solid var(--accent-ring)',
                      borderRadius: '9999px',
                      padding: '4px 12px',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap',
                    }}>
                      Current
                    </span>
                  )}
                  <span
                    style={{
                      marginLeft: isCurrent ? 'auto' : 0,
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '13px',
                      fontWeight: 400,
                      color: 'var(--text-muted)',
                      lineHeight: 1.4,
                    }}
                  >
                    {current.date}
                  </span>
                </div>

                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '22px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  lineHeight: 1.2,
                }}>
                  {current.title}
                </div>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: '14px',
                  lineHeight: 1.45,
                }}>
                  <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                    {org.organization}
                  </span>
                  <span style={{ color: 'var(--text-muted)' }}>·</span>
                  <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}>
                    {org.location}
                  </span>
                </div>
              </div>

              <div style={{ padding: '22px 28px 26px' }}>
                <BulletList items={org.bullets} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <div className="py-16 md:py-24 px-4 sm:px-8 max-w-[1200px] mx-auto">
      <div style={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        borderBottom: '1px solid var(--divider)',
        paddingBottom: '20px',
        marginBottom: '48px',
      }}>
        <h2 className="section-heading" style={{ margin: 0 }}>Where I&apos;ve worked.</h2>
        <span style={mono('11px', 'var(--text-muted)')}>Experience</span>
      </div>
      {experienceData.map((exp, i) => (
        <ExperienceJobEntry key={i} exp={exp} index={i} isLast={i === experienceData.length - 1} />
      ))}
    </div>
  );
}
