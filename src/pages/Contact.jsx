import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import useInView from '../hooks/useInView';

export default function Contact() {
  const [ref, visible] = useInView();
  const btnShadow = '3px 3px 0 var(--btn-shadow)';

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`mb-16 fade-up ${visible ? 'visible' : ''}`}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 900,
              color: 'var(--text-primary)',
              fontFamily: "'Space Grotesk', sans-serif",
              marginBottom: '12px',
            }}
          >
            Let's <span className="highlight-blue">Connect</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)', maxWidth: '480px' }}>
            Open to internships, collaborations, and data conversations. I reply within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: '#4169ff' },
              { icon: MapPin, label: 'Location', value: personalInfo.education?.location || 'San Jose, CA', href: null, color: '#f4647a' },
            ].map(({ icon: Icon, label, value, href, color }) => (
              <div
                key={label}
                className="neo-card"
                style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    backgroundColor: color,
                    border: '2px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon style={{ width: '20px', height: '20px', color: '#ffffff' }} />
                </div>
                <div>
                  <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-subtle)', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {label}
                  </p>
                  {href
                    ? <a href={href} style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', textDecoration: 'none' }}>{value}</a>
                    : <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>{value}</p>
                  }
                </div>
              </div>
            ))}

            <div style={{ display: 'flex', gap: '12px', paddingTop: '8px' }}>
              {[
                { icon: Github, href: personalInfo.github, label: 'GitHub profile' },
                { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn profile' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--btn-primary-bg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--btn-primary-fg)',
                    textDecoration: 'none',
                    border: '2px solid var(--border)',
                    transition: 'transform 0.15s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-2px,-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translate(0,0)'; }}
                >
                  <Icon style={{ width: '20px', height: '20px' }} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '2px solid var(--border)',
                borderRadius: '20px',
                boxShadow: 'var(--neo-shadow-lg)',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  fontFamily: "'Space Grotesk', sans-serif",
                  marginBottom: '-4px',
                }}
              >
                Get in touch
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.65, margin: 0 }}>
                Email is the fastest way to reach me for opportunities, project ideas, or a quick chat. You can also connect on LinkedIn or GitHub.
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '14px 32px',
                  backgroundColor: 'var(--btn-primary-bg)',
                  color: 'var(--btn-primary-fg)',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '15px',
                  border: '2px solid var(--border)',
                  boxShadow: btnShadow,
                  textDecoration: 'none',
                  fontFamily: "'Space Grotesk', sans-serif",
                  transition: 'transform 0.15s',
                  alignSelf: 'flex-start',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-2px,-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translate(0,0)'; }}
              >
                <Mail style={{ width: '18px', height: '18px' }} />
                Email me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
