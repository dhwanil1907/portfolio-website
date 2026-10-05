import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
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
      className="w-full h-full flex items-center justify-center text-sm font-medium"
      style={{
        background: 'linear-gradient(135deg, var(--surface-subtle) 0%, var(--bg-alt) 100%)',
        color: 'var(--accent)',
        letterSpacing: '0.03em',
      }}
    >
      {project.categories?.join(' · ')}
    </div>
  );
}

function ProjectCard({ project, index }) {
  const [ref, visible] = useInView();
  const [hovered, setHovered] = React.useState(false);
  const metrics = project.impact.split('·').map(s => s.trim()).filter(Boolean);
  const visibleTech = project.tech.slice(0, 3);
  const extraTech = project.tech.length - visibleTech.length;

  return (
    <article
      ref={ref}
      className={`card overflow-hidden flex flex-col fade-up ${visible ? 'visible' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transitionDelay: `${index * 0.05}s`,
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 8px 24px rgba(0,0,0,0.13)'
          : 'var(--shadow-card)',
      }}
    >
      <div className="aspect-video w-full overflow-hidden" style={{ borderBottom: '1px solid var(--border)' }}>
        <ProjectImage project={project} />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            <Link
              to={`/projects/${project.slug}`}
              style={{ color: 'inherit', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'inherit'}
            >
              {project.title}
            </Link>
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
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {project.description}
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
        <div style={{ flex: 1 }} />
        {(project.github || project.demo) && (
          <div className="flex gap-2 mt-2">
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

const ALL_CATEGORIES = ['All', 'Data Science', 'Machine Learning', 'Data Engineering', 'Full-Stack', 'AI/ML'];

export default function Projects() {
  const [ref, visible] = useInView();
  const [activeCategory, setActiveCategory] = React.useState('All');

  const featuredProjects = projectsData.slice(0, 3);
  const moreProjects = projectsData.slice(3).filter(p =>
    activeCategory === 'All' || p.categories?.includes(activeCategory)
  );

  return (
    <section id="work" className="section">
      <div className="page-container">
        <div className={`section-header fade-up ${visible ? 'visible' : ''}`} ref={ref}>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Financial data, ML systems, and full-stack tools — built to solve real problems.
          </p>
        </div>

        {/* Featured row — top 3 always visible */}
        <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '16px' }}>
          Featured
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ marginBottom: '48px' }}>
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          <span style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
            More projects
          </span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>

        {/* Category tabs */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
          {ALL_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={activeCategory === cat ? 'btn btn-primary' : 'btn btn-outline'}
              style={{ padding: '6px 16px', fontSize: '12px', fontWeight: 500, borderRadius: '20px' }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filtered grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moreProjects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
