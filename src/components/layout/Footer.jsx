import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

export default function Footer() {
  return (
    <footer>
      <section
        className="py-24 px-4 sm:px-6 lg:px-8 text-center"
        style={{ backgroundColor: 'var(--inverse-bg)' }}
      >
        <div className="max-w-3xl mx-auto">
          <p
            style={{
              fontSize: '12px',
              fontFamily: "'JetBrains Mono', monospace",
              color: 'var(--inverse-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '16px',
            }}
          >
            Let's work together
          </p>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
              fontWeight: 900,
              color: 'var(--inverse-text)',
              fontFamily: "'Space Grotesk', sans-serif",
              marginBottom: '16px',
              lineHeight: 1.1,
            }}
          >
            Let's build{' '}
            <span className="highlight-yellow">something.</span>
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--inverse-muted)', marginBottom: '40px' }}>
            Open to internships, full-time data engineering / ML roles, and freelance data projects.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            <a
              href={`mailto:${personalInfo.email}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 32px',
                backgroundColor: 'var(--inverse-cta-bg)',
                color: 'var(--inverse-cta-fg)',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '15px',
                border: '2px solid var(--inverse-cta-bg)',
                boxShadow: '3px 3px 0 var(--btn-shadow)',
                textDecoration: 'none',
                fontFamily: "'Space Grotesk', sans-serif",
                transition: 'transform 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-2px,-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translate(0,0)'; }}
            >
              <Mail style={{ width: '18px', height: '18px' }} />
              Send Email
            </a>
          </div>
        </div>
      </section>

      <div
        style={{
          padding: '24px 24px',
          backgroundColor: 'var(--inverse-bg)',
          borderTop: '1px solid var(--inverse-border)',
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p style={{ fontSize: '13px', color: 'var(--inverse-muted)' }}>
            © {new Date().getFullYear()} {personalInfo.name}. Built with React & Tailwind CSS.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {[
              { icon: Github, href: personalInfo.github, label: 'GitHub profile' },
              { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn profile' },
              { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Send email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Send email' ? '_blank' : undefined}
                rel={label !== 'Send email' ? 'noopener noreferrer' : undefined}
                aria-label={label}
                style={{
                  padding: '8px',
                  borderRadius: '8px',
                  color: 'var(--inverse-muted)',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--inverse-text)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--inverse-muted)'; }}
              >
                <Icon style={{ width: '20px', height: '20px' }} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
