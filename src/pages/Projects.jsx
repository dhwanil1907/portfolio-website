import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { MotionButton } from '../components/MotionButton';
import { projectsData } from '../data/portfolio';
import useInView from '../hooks/useInView';

function ProjectImage({ project }) {
  if (project.image) {
    return (
      <img
        src={encodeURI(project.image)}
        alt={project.title}
        className="w-full h-full object-contain p-6"
        style={{ backgroundColor: 'var(--surface-subtle)' }}
      />
    );
  }
  return (
    <div
      className="w-full h-full flex items-center justify-center text-sm"
      style={{ backgroundColor: 'var(--surface-subtle)', color: 'var(--text-muted)' }}
    >
      {project.categories?.join(' · ')}
    </div>
  );
}

function ProjectCard({ project, index }) {
  const [ref, visible] = useInView();
  const metrics = project.impact.split('·').map(s => s.trim()).filter(Boolean);
  const visibleTech = project.tech.slice(0, 3);
  const extraTech = project.tech.length - visibleTech.length;

  return (
    <article
      ref={ref}
      className={`card overflow-hidden flex flex-col fade-up ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      <div className="aspect-video w-full overflow-hidden" style={{ borderBottom: '1px solid var(--border)' }}>
        <ProjectImage project={project} />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>
            {project.title}
          </h3>
          {project.status && (
            <span
              className="tag"
              style={{
                fontSize: '10px',
                padding: '3px 8px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              {project.status}
            </span>
          )}
        </div>
        <p
          style={{
            margin: '0 0 12px',
            fontSize: '13px',
            color: 'var(--text-muted)',
            lineHeight: 1.6,
            flex: 1,
          }}
        >
          {project.description.length > 140
            ? `${project.description.slice(0, 140)}…`
            : project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {visibleTech.map(t => (
            <span key={t} className="tag" style={{ fontSize: '11px', padding: '4px 10px' }}>
              {t}
            </span>
          ))}
          {extraTech > 0 && (
            <span className="tag" style={{ fontSize: '11px', padding: '4px 10px' }}>
              +{extraTech}
            </span>
          )}
        </div>
        <ul className="m-0 mb-4 pl-4 text-xs" style={{ color: 'var(--text-muted)' }}>
          {metrics.slice(0, 3).map(m => (
            <li key={m} className="mb-1">
              {m}
            </li>
          ))}
        </ul>
        {(project.github || project.demo) && (
          <div className="flex gap-2 mt-auto">
            {project.github && (
              <MotionButton
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline flex-1"
                style={{ padding: '8px 12px', fontSize: '13px' }}
              >
                <Github size={14} />
                Code
              </MotionButton>
            )}
            {project.demo && (
              <MotionButton
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex-1"
                style={{ padding: '8px 12px', fontSize: '13px' }}
              >
                <ExternalLink size={14} />
                Demo
              </MotionButton>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const [ref, visible] = useInView();

  return (
    <section id="work" className="section">
      <div className="page-container">
        <div className={`section-header fade-up ${visible ? 'visible' : ''}`} ref={ref}>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of impactful data science projects showcasing machine
            learning, analytics, and full-stack development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
