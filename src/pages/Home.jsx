import { MotionButton } from '../components/MotionButton';
import { personalInfo } from '../data/portfolio';

export default function Home() {
  return (
    <section
      id="home"
      className="section flex flex-col min-h-[calc(100vh-64px)]"
      style={{ position: 'relative' }}
    >
      <div className="page-container hero-grid" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '620px' }}>
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
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
            color: 'var(--accent-text)',
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

        <div className="hero-enter hero-enter-4 flex flex-wrap items-center gap-x-6 gap-y-4">
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
          <nav className="hero-links" aria-label="Profiles and contact">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={`mailto:${personalInfo.email}`}>Email</a>
          </nav>
        </div>

        <ul className="hero-proof hero-enter hero-enter-5">
          <li><strong>ASA DataFest 2025 Best Overall Winner</strong> · Commercial lease forecasting, 8% MAPE</li>
          <li><strong>0.779 ROC-AUC on 307K loan applications</strong> · Home Credit Risk Scorer, served via FastAPI</li>
          <li><strong>President, Spartan Analytics</strong> · San Jose State University</li>
        </ul>
        </div>

        <img
          src="/Headshot.png"
          alt="Dhwanil Ranpura"
          className="hero-portrait hero-enter hero-enter-3"
        />
      </div>
    </section>
  );
}
