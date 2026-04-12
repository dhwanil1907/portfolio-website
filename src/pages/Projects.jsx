import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/portfolio';
import useInView from '../hooks/useInView';

const featured =
  projectsData.find(p => p.title === 'Verdict') ?? projectsData[0];
const gridProjects = projectsData.filter(p => p.title !== featured.title);

const cardBase =
  'rounded-xl border transition-colors duration-200 overflow-hidden group/image';
const cardStyle = {
  backgroundColor: 'var(--bg-card)',
  borderColor: 'var(--border)',
  borderWidth: '1px',
};

function ProjectLinks({ project }) {
  return (
    <div className="flex flex-wrap gap-5 mt-6">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
          style={{ color: 'var(--text-primary)', textDecoration: 'none', fontFamily: "'Inter', system-ui, sans-serif" }}
        >
          <Github className="w-4 h-4" strokeWidth={1.5} />
          GitHub
        </a>
      )}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
          style={{ color: 'var(--accent)', textDecoration: 'none', fontFamily: "'Inter', system-ui, sans-serif" }}
        >
          <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
          Demo
        </a>
      )}
    </div>
  );
}

function TechTags({ tech }) {
  return (
    <div className="flex flex-wrap gap-2 mt-5">
      {tech.map(t => (
        <span
          key={t}
          className="rounded-full px-2.5 py-1 text-[11px] leading-tight"
          style={{
            backgroundColor: 'var(--bg-card-hover)',
            border: '1px solid var(--border)',
            color: 'var(--text-muted)',
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function FeaturedProject({ project }) {
  const [ref, visible] = useInView();

  return (
    <div ref={ref} className={`fade-up ${visible ? 'visible' : ''}`}>
      <div
        className={`${cardBase} flex flex-col lg:flex-row lg:items-stretch`}
        style={{
          ...cardStyle,
        }}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = 'var(--bg-card-hover)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = 'var(--bg-card)';
        }}
      >
        <div
          className="w-full lg:w-1/2 shrink-0 aspect-video lg:aspect-auto lg:min-h-[280px] transition-colors duration-200 border-b lg:border-b-0 lg:border-r border-solid group-hover/image:bg-[var(--bg-card-hover)]"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border)',
          }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
              style={{ minHeight: '100%' }}
            />
          ) : null}
        </div>
        <div className="flex-1 p-8 lg:p-10 min-w-0">
          <p
            className="text-xs m-0 mb-3"
            style={{ color: 'var(--accent)', fontFamily: "'JetBrains Mono', monospace" }}
          >
            {project.year}
          </p>
          <h3
            className="text-2xl sm:text-3xl font-bold m-0 mb-2 leading-tight"
            style={{ color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {project.title}
          </h3>
          <p
            className="text-sm m-0 mb-4"
            style={{ color: 'var(--text-muted)', fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            {project.subtitle}
          </p>
          <span
            className="inline-block text-[11px] px-3 py-1.5 rounded-full mb-4"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: 'var(--text-muted)',
              border: '1px solid var(--border)',
            }}
          >
            {project.impact}
          </span>
          <p
            className="text-sm m-0 leading-relaxed"
            style={{ color: 'var(--text-muted)', fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            {project.description}
          </p>
          <TechTags tech={project.tech} />
          <ProjectLinks project={project} />
        </div>
      </div>
    </div>
  );
}

function GridProjectCard({ project, index }) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className={`fade-up ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.06}s` }}
    >
      <div
        className={cardBase}
        style={cardStyle}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = 'var(--bg-card-hover)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = 'var(--bg-card)';
        }}
      >
        <div
          className="aspect-video w-full transition-colors duration-200 border-b border-solid group-hover/image:bg-[var(--bg-card-hover)]"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border)',
          }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          ) : null}
        </div>
        <div className="p-6">
          <p
            className="text-[11px] m-0 mb-2"
            style={{ color: 'var(--accent)', fontFamily: "'JetBrains Mono', monospace" }}
          >
            {project.year}
          </p>
          <h3
            className="text-lg font-bold m-0 mb-1 leading-snug"
            style={{ color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {project.title}
          </h3>
          <p
            className="text-xs m-0 mb-3"
            style={{ color: 'var(--text-muted)', fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            {project.subtitle}
          </p>
          <span
            className="inline-block text-[10px] px-2.5 py-1 rounded-full mb-3"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: 'var(--text-muted)',
              border: '1px solid var(--border)',
            }}
          >
            {project.impact}
          </span>
          <p
            className="text-xs m-0 mb-4 line-clamp-3"
            style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            {project.description}
          </p>
          <TechTags tech={project.tech.slice(0, 6)} />
          <ProjectLinks project={project} />
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [ref, visible] = useInView();

  return (
    <div
      className="py-16 md:py-24 px-4 sm:px-8 max-w-[1200px] mx-auto"
      style={{}}
    >
      <div ref={ref} className={`mb-14 fade-up ${visible ? 'visible' : ''}`}>
        <p className="eyebrow mb-4">Work</p>
        <h2 className="section-heading">Things I&apos;ve built.</h2>
      </div>

      <div className="flex flex-col gap-16">
        <FeaturedProject project={featured} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridProjects.map((project, idx) => (
            <GridProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
