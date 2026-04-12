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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {items.map((text, i) => (
        <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
          <span style={{ color: 'var(--text-muted)', marginTop: '2px', flexShrink: 0, fontSize: '14px' }}>—</span>
          <span style={{
            fontSize: '15px',
            lineHeight: 1.65,
            color: 'var(--text-primary)',
            opacity: 0.88,
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
              border: '1px solid rgba(134,239,172,0.3)',
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
            border: '1px solid rgba(134,239,172,0.3)',
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

function LeadershipEntry({ org, index, isLast }) {
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
            <div style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '14px',
              fontWeight: 600,
              color: 'var(--text-primary)',
              lineHeight: 1.45,
            }}>
              {org.organization}
            </div>
            <div style={{
              marginTop: '6px',
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '12px',
              color: 'var(--text-muted)',
              lineHeight: 1.5,
            }}>
              {org.location}
            </div>
          </div>
        </div>

        {/* Right — content */}
        <div style={{ paddingBottom: isLast ? 0 : '48px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '20px' }}>
            {org.roles.map((role, ri) => (
              <div
                key={ri}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '12px',
                  flexWrap: 'wrap',
                  padding: '10px 0',
                  borderBottom: ri < org.roles.length - 1 ? '1px solid var(--divider)' : 'none',
                }}
              >
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: ri === 0 ? '20px' : '14px',
                  fontWeight: ri === 0 ? 600 : 400,
                  color: ri === 0 ? 'var(--text-primary)' : 'var(--text-muted)',
                  flex: 1,
                }}>
                  {role.title}
                  {ri === 0 && (
                    <span style={{
                      marginLeft: '10px',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '10px',
                      color: 'var(--accent)',
                      border: '1px solid rgba(134,239,172,0.3)',
                      borderRadius: '9999px',
                      padding: '2px 8px',
                      verticalAlign: 'middle',
                      letterSpacing: '0.06em',
                    }}>
                      Current
                    </span>
                  )}
                </span>
                <span style={mono('11px', 'var(--text-subtle)')}>{role.date}</span>
              </div>
            ))}
          </div>
          <BulletList items={org.bullets} />
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden" style={{ paddingBottom: isLast ? 0 : '40px', borderBottom: isLast ? 'none' : '1px solid var(--divider)', marginBottom: isLast ? 0 : '40px' }}>
        <div style={{
          marginBottom: '8px',
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: '14px',
          fontWeight: 600,
          color: 'var(--text-primary)',
        }}>
          {org.organization}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '14px' }}>
          {org.roles.map((role, ri) => (
            <div key={ri} style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'baseline' }}>
              <span style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: '13px',
                fontWeight: ri === 0 ? 500 : 400,
                color: ri === 0 ? 'var(--text-primary)' : 'var(--text-muted)',
              }}>
                {role.title}
              </span>
              <span style={mono('11px', 'var(--text-muted)')}>{role.date}</span>
            </div>
          ))}
        </div>
        <BulletList items={org.bullets} />
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
        <span style={mono('11px', 'var(--text-muted)')}>Leadership</span>
      </div>

      <div
        ref={ref}
        className={`grid grid-cols-1 md:grid-cols-2 gap-6 fade-up ${visible ? 'visible' : ''}`}
      >
        {leadershipData.map((org, i) => {
          const current = org.roles[0];
          return (
            <div
              key={i}
              style={{
                border: '1px solid var(--divider)',
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: 'rgba(255,255,255,0.02)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Card header strip */}
              <div style={{
                padding: '24px 28px 20px',
                borderBottom: '1px solid var(--divider)',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '10px',
                    color: 'var(--accent)',
                    border: '1px solid rgba(134,239,172,0.3)',
                    borderRadius: '9999px',
                    padding: '3px 10px',
                    letterSpacing: '0.06em',
                    whiteSpace: 'nowrap',
                  }}>
                    Current
                  </span>
                  <span style={mono('11px', 'var(--text-subtle)')}>{current.date}</span>
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

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: '13px',
                    fontWeight: 500,
                    color: 'var(--text-muted)',
                  }}>
                    {org.organization}
                  </span>
                  <span style={{ color: 'var(--divider)', fontSize: '12px' }}>·</span>
                  <span style={mono('11px', 'var(--text-subtle)')}>{org.location}</span>
                </div>
              </div>

              {/* Bullets */}
              <div style={{ padding: '20px 28px 24px' }}>
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
