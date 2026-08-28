import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/portfolio';
import useInView from '../hooks/useInView';

const featured =
  projectsData.find(p => p.title === 'Verdict') ?? projectsData[0];
const remainingProjects = projectsData.filter(p => p.title !== featured.title);
const showcaseProjects = remainingProjects.slice(0, 3);
const compactProjects = remainingProjects.slice(3);

const cardBase =
  'border transition-all duration-300 overflow-hidden group/image';
const cardStyle = {
  backgroundColor: 'var(--bg-card)',
  borderColor: 'var(--border)',
  borderWidth: '1px',
  borderRadius: 'var(--radius-card)',
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
          style={{
            color: 'var(--text-primary)',
            textDecoration: 'none',
            fontFamily: 'var(--font-body)',
          }}
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
          style={{
            color: 'var(--accent)',
            textDecoration: 'none',
            fontFamily: 'var(--font-body)',
          }}
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
            fontFamily: 'var(--font-mono)',
            transition: 'background-color 0.18s, border-color 0.18s, color 0.18s',
            cursor: 'default',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = 'var(--accent-glow)';
            e.currentTarget.style.borderColor = 'var(--accent-ring)';
            e.currentTarget.style.color = 'var(--accent)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = 'var(--bg-card-hover)';
            e.currentTarget.style.borderColor = 'var(--border)';
            e.currentTarget.style.color = 'var(--text-muted)';
          }}
        >
          {t}
        </span>
      ))}
    </div>
  );
}

const BAR_HEIGHTS = [42, 68, 52, 88, 74];
const BAR_HEIGHTS_HOVER = [60, 52, 80, 65, 90];

function ProjectVisual({ project }) {
  const [hovered, setHovered] = React.useState(false);

  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover object-top"
      />
    );
  }

  return (
    <div
      className="flex h-full min-h-48 flex-col justify-between p-6"
      style={{
        background:
          'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-alt) 65%, var(--accent-glow) 100%)',
      }}
      aria-hidden="true"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center gap-2">
        {project.categories.map(category => (
          <span
            key={category}
            className="text-[9px] uppercase tracking-[0.15em]"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
          >
            {category}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-5 items-end gap-2">
        {BAR_HEIGHTS.map((height, index) => (
          <span
            key={index}
            style={{
              display: 'block',
              height: `${hovered ? BAR_HEIGHTS_HOVER[index] : height}px`,
              border: '1px solid var(--border)',
              borderRadius: '6px 6px 2px 2px',
              backgroundColor: index === 3 ? 'var(--accent)' : 'var(--surface-subtle)',
              opacity: index === 3 ? (hovered ? 1 : 0.75) : 1,
              transition: 'height 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease',
            }}
          />
        ))}
      </div>
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
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,0,0,0.28), 0 0 0 1px var(--accent-ring)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = 'var(--bg-card)';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div
          className="w-full lg:w-1/2 shrink-0 aspect-video lg:aspect-auto lg:min-h-[280px] transition-colors duration-200 border-b lg:border-b-0 lg:border-r border-solid group-hover/image:bg-[var(--bg-card-hover)]"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border)',
          }}
        >
          <ProjectVisual project={project} />
        </div>
        <div className="flex-1 p-8 lg:p-10 min-w-0">
          <p
            className="text-xs m-0 mb-3"
            style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}
          >
            {project.year}
          </p>
          <h3
            className="text-2xl sm:text-3xl font-bold m-0 mb-2 leading-tight"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}
          >
            {project.title}
          </h3>
          <p
            className="text-sm m-0 mb-4"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
          >
            {project.subtitle}
          </p>
          <span
            className="inline-block text-[11px] px-3 py-1.5 rounded-full mb-4"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--accent)',
              border: '1px solid var(--accent-ring)',
            }}
          >
            {project.impact}
          </span>
          <p
            className="text-sm m-0 leading-relaxed"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
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
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,0,0,0.28), 0 0 0 1px var(--accent-ring)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = 'var(--bg-card)';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div
          className="aspect-video w-full transition-colors duration-200 border-b border-solid group-hover/image:bg-[var(--bg-card-hover)]"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border)',
          }}
        >
          <ProjectVisual project={project} />
        </div>
        <div className="p-6">
          <p
            className="text-[11px] m-0 mb-2"
            style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}
          >
            {project.year}
          </p>
          <h3
            className="text-lg font-bold m-0 mb-1 leading-snug"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}
          >
            {project.title}
          </h3>
          <p
            className="text-xs m-0 mb-3"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
          >
            {project.subtitle}
          </p>
          <span
            className="inline-block text-[10px] px-2.5 py-1 rounded-full mb-3"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--accent)',
              border: '1px solid var(--accent-ring)',
            }}
          >
            {project.impact}
          </span>
          <p
            className="text-xs m-0 mb-4"
            style={{
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              fontFamily: 'var(--font-body)',
            }}
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

function CompactProjectCard({ project, index }) {
  const [ref, visible] = useInView();

  return (
    <article
      ref={ref}
      className={`fade-up grid gap-5 border-t py-7 md:grid-cols-[0.8fr_1.2fr] ${
        visible ? 'visible' : ''
      }`}
      style={{
        borderColor: 'var(--divider)',
        transitionDelay: `${index * 0.06}s`,
      }}
    >
      <div>
        <span
          style={{
            color: 'var(--accent)',
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
          }}
        >
          {project.year}
        </span>
        <h3
          className="mb-1 mt-2 text-xl font-semibold"
          style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}
        >
          {project.title}
        </h3>
        <p
          className="m-0 text-sm"
          style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
        >
          {project.subtitle}
        </p>
        <p
          className="mb-0 mt-4 text-xs"
          style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}
        >
          {project.impact}
        </p>
      </div>
      <div>
        <p
          className="m-0 text-sm leading-relaxed"
          style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
        >
          {project.description}
        </p>
        <TechTags tech={project.tech} />
        <ProjectLinks project={project} />
      </div>
    </article>
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

      <div className="flex flex-col gap-14">
        <FeaturedProject project={featured} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcaseProjects.map((project, idx) => (
            <GridProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
        <div>
          <div
            className="flex items-end justify-between border-b pb-5"
            style={{ borderColor: 'var(--divider)' }}
          >
            <h3
              className="m-0 text-2xl font-semibold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}
            >
              More work
            </h3>
            <span className="eyebrow">{compactProjects.length} projects</span>
          </div>
          {compactProjects.map((project, idx) => (
            <CompactProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
