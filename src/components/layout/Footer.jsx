import React from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

export default function Footer() {
  return (
    <footer>
      {/* CTA Section */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8 text-center"
        style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}
      >
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs font-medium uppercase tracking-widest mb-4 font-mono-tech"
            style={{ color: 'var(--accent)' }}
          >
            Let's work together
          </p>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Let's build something.
          </h2>
          <p className="text-lg mb-10" style={{ color: 'var(--text-muted)' }}>
            Open to internships, full-time data engineering / ML roles, and freelance data projects.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
              Send Email
            </a>
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold border transition-all duration-200 hover:bg-white/5 hover:-translate-y-0.5"
              style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
            >
              View Resume{/* TODO: link resume PDF */}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer bar */}
      <div
        className="py-6 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border)' }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} {personalInfo.name}. Built with React & Tailwind CSS.
          </p>
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.boxShadow = '0 0 12px var(--accent-glow)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.boxShadow = 'none'; }}
              aria-label="GitHub profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.boxShadow = '0 0 12px var(--accent-glow)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.boxShadow = 'none'; }}
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.boxShadow = '0 0 12px var(--accent-glow)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.boxShadow = 'none'; }}
              aria-label="Send email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
