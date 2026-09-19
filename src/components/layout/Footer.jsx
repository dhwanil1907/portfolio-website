import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { MotionIconLink } from '../MotionButton';
import { personalInfo, navLinks } from '../../data/portfolio';

export default function Footer() {
  return (
    <footer className="section--muted" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="page-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <p style={{ margin: '0 0 8px', fontWeight: 700, fontSize: '15px' }}>
              {personalInfo.name}
            </p>
            <p style={{ margin: '0 0 16px', fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              I find what the numbers are hiding. Mostly financial ones — building
              models, pipelines, and dashboards that mean something.
            </p>
            <div className="flex gap-4">
              <MotionIconLink href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: 'var(--text-muted)' }}>
                <Github size={18} />
              </MotionIconLink>
              <MotionIconLink href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: 'var(--text-muted)' }}>
                <Linkedin size={18} />
              </MotionIconLink>
              <MotionIconLink href={`mailto:${personalInfo.email}`} aria-label="Email" style={{ color: 'var(--text-muted)' }}>
                <Mail size={18} />
              </MotionIconLink>
            </div>
          </div>

          <div>
            <p style={{ margin: '0 0 12px', fontWeight: 600, fontSize: '14px' }}>
              Quick Links
            </p>
            <ul className="m-0 p-0 list-none flex flex-col gap-2">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    style={{ fontSize: '14px', color: 'var(--text-muted)', textDecoration: 'none' }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p style={{ margin: '0 0 12px', fontWeight: 600, fontSize: '14px' }}>
              Currently
            </p>
            <ul className="m-0 p-0 list-none flex flex-col gap-2">
              {[
                'Leading Spartan Analytics @ SJSU',
                'Building StockSage (ML + paper trading)',
                'Open to internships & full-time roles',
                'Obsessed with financial datasets',
              ].map(item => (
                <li key={item} style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p
          className="text-center m-0 pt-6 text-sm"
          style={{ color: 'var(--text-muted)', borderTop: '1px solid var(--divider)' }}
        >
          © 2026 {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
