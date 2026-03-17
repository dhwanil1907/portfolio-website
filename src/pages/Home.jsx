import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import useInView from '../hooks/useInView';

export default function Home() {
  const [ref, visible] = useInView();

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-24 pb-32 md:pt-44 md:pb-56">
        {/* Glow blob */}
        <div
          className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl -z-10 pointer-events-none"
          style={{ backgroundColor: 'var(--accent-glow)' }}
        />

        <div
          ref={ref}
          className={`max-w-3xl fade-up ${visible ? 'visible' : ''}`}
        >
          {/* Name label */}
          <p
            className="text-xs font-medium uppercase tracking-widest mb-5 font-mono-tech"
            style={{ color: 'var(--accent)' }}
          >
            {personalInfo.name}
          </p>

          {/* Headline */}
          <h1
            className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.05]"
            style={{ color: 'var(--text-primary)' }}
          >
            I turn messy data into{' '}
            <span style={{ color: 'var(--accent)' }}>systems that ship.</span>
          </h1>

          {/* Subtext */}
          <p
            className="text-lg md:text-xl mb-10 max-w-2xl leading-relaxed"
            style={{ color: 'var(--text-muted)' }}
          >
            Data Engineer &amp; ML Practitioner — pipelines, models, and dashboards built for production.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="#work"
              className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              View My Work <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-lg font-semibold border transition-all duration-200 hover:bg-white/5 hover:-translate-y-0.5"
              style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
            >
              Get in Touch
            </a>
          </div>

          {/* Availability line */}
          <p
            className="text-sm font-mono-tech"
            style={{ color: 'var(--text-muted)' }}
          >
            Open to full-time roles · Available for freelance · Based in San Jose, CA{/* TODO: fill city */}
          </p>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-5 h-5" style={{ color: 'var(--text-muted)' }} aria-hidden="true" />
        </div>
      </section>
    </div>
  );
}
