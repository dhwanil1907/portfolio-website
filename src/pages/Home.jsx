import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { MotionButton, MotionIconLink } from '../components/MotionButton';
import { personalInfo } from '../data/portfolio';

export default function Home() {
  return (
    <section
      id="home"
      className="section flex flex-col min-h-[calc(100vh-64px)]"
      style={{ position: 'relative' }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'radial-gradient(circle, var(--dot-color, rgba(108,92,72,0.2)) 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        className="page-container flex flex-row items-center justify-between flex-1 gap-12"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <div style={{ maxWidth: '560px' }}>
        <h1
          className="hero-enter hero-enter-1"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 7vw, 5rem)',
            fontWeight: 400,
            margin: '0 0 16px',
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
            lineHeight: 1.1,
          }}
        >
          {personalInfo.name}
        </h1>

        <p
          className="hero-enter hero-enter-2"
          style={{
            fontFamily: "'Spectral', Georgia, serif",
            fontStyle: 'italic',
            fontWeight: 500,
            fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
            color: 'var(--accent)',
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
            margin: '0 0 32px',
            maxWidth: '520px',
          }}
        >
          {personalInfo.description}
        </p>

        <div className="hero-enter hero-enter-4 flex flex-wrap items-center gap-3 mb-10">
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

        <div className="hero-enter hero-enter-5 flex items-center gap-5">
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

        <div
          className="hero-enter hero-enter-3 shrink-0"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <img
            src="/Headshot.png"
            alt="Dhwanil Ranpura"
            style={{
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              objectFit: 'cover',
              objectPosition: 'center 25%',
              border: '3px solid var(--accent-ring)',
              boxShadow: '0 0 0 6px var(--bg-primary), 0 0 0 7px var(--border)',
            }}
          />
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="hero-chevron hero-enter hero-enter-6 mt-12"
        style={{ color: 'var(--text-subtle)', position: 'relative', zIndex: 1 }}
      >
        <ChevronDown size={24} />
      </a>
    </section>
  );
}
