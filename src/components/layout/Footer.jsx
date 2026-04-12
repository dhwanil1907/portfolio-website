import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

export default function Footer() {
  return (
    <footer
      className="px-8"
      style={{
        borderTopWidth: '1px',
        borderTopColor: 'var(--border)',
        borderTopStyle: 'solid',
        paddingTop: '24px',
        paddingBottom: '24px',
        backgroundColor: 'var(--bg-primary)',
      }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span
          className="text-sm order-2 sm:order-1"
          style={{
            color: 'var(--text-subtle)',
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
          }}
        >
          {personalInfo.name}
        </span>
        <span
          className="text-xs order-1 sm:order-2"
          style={{ color: 'var(--text-muted)', fontFamily: "'Inter', system-ui, sans-serif" }}
        >
          © 2026
        </span>
        <div className="flex items-center gap-6 order-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="transition-colors duration-200"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={e => {
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'var(--text-muted)';
            }}
          >
            <Github className="w-5 h-5" strokeWidth={1.5} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="transition-colors duration-200"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={e => {
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'var(--text-muted)';
            }}
          >
            <Linkedin className="w-5 h-5" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  );
}
