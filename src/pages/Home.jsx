import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { MotionButton, MotionIconLink } from '../components/MotionButton';
import { personalInfo } from '../data/portfolio';

export default function Home() {
  return (
    <section
      id="home"
      className="section flex flex-col items-center justify-center text-center min-h-[calc(100vh-64px)]"
    >
      <div className="page-container" style={{ maxWidth: '720px' }}>
        <h1
          className="hero-enter hero-enter-1"
          style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            margin: '0 0 12px',
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
          }}
        >
          Hi, I&apos;m {personalInfo.name}
        </h1>

        <p
          className="hero-enter hero-enter-2"
          style={{
            fontSize: '1.125rem',
            color: 'var(--text-muted)',
            margin: '0 0 24px',
          }}
        >
          {personalInfo.tagline}
        </p>

        <p
          className="hero-enter hero-enter-3"
          style={{
            fontSize: '1rem',
            color: 'var(--text-muted)',
            lineHeight: 1.75,
            margin: '0 auto 32px',
            maxWidth: '560px',
          }}
        >
          {personalInfo.description} I transform complex data into actionable
          insights using machine learning, statistical analysis, and data
          visualization. Currently seeking internships &amp; full-time roles in
          data science and ML engineering.
        </p>

        <div className="hero-enter hero-enter-4 flex flex-wrap items-center justify-center gap-3 mb-10">
          <MotionButton href="#work" className="btn btn-primary">
            View My Work
          </MotionButton>
          <MotionButton
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Download Resume
          </MotionButton>
        </div>

        <div className="hero-enter hero-enter-5 flex items-center justify-center gap-5">
          <MotionIconLink
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{ color: 'var(--text-muted)' }}
          >
            <Github size={20} strokeWidth={1.5} />
          </MotionIconLink>
          <MotionIconLink
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{ color: 'var(--text-muted)' }}
          >
            <Linkedin size={20} strokeWidth={1.5} />
          </MotionIconLink>
          <MotionIconLink
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            style={{ color: 'var(--text-muted)' }}
          >
            <Mail size={20} strokeWidth={1.5} />
          </MotionIconLink>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="hero-chevron hero-enter hero-enter-6 mt-12"
        style={{ color: 'var(--text-subtle)' }}
      >
        <ChevronDown size={24} />
      </a>
    </section>
  );
}
