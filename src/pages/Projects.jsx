import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MotionButton } from '../components/MotionButton';
import { projectsData } from '../data/portfolio';
import useInView from '../hooks/useInView';

const FEATURED_COUNT = 3;

const cardLinkClass = 'inline-flex items-center gap-1 rounded-sm underline-offset-4 hover:underline';
const cardLinkStyle = { fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--text-primary)' };

// Categories kept on projects (shown on detail pages) but not offered as filter pills.
const HIDDEN_FILTERS = ['Research', 'Software Engineering'];

// 'All' plus every category in the data, most common first, ties alphabetical.
function deriveCategories(projects) {
  const counts = new Map();
  projects.forEach(project => {
    (project.categories || []).forEach(cat => counts.set(cat, (counts.get(cat) || 0) + 1));
  });
  const sorted = [...counts.entries()]
    .filter(([cat]) => !HIDDEN_FILTERS.includes(cat))
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([cat]) => cat);
  return ['All', ...sorted];
}

const FEATURED_PROJECTS = projectsData.slice(0, FEATURED_COUNT);
const MORE_PROJECTS = projectsData.slice(FEATURED_COUNT);
const CATEGORIES = deriveCategories(MORE_PROJECTS);

function ProjectCard({ project, index }) {
  const [ref, visible] = useInView();
  const [entered, setEntered] = React.useState(false);
  const visibleTech = project.tech.slice(0, 4);
  const extraTech = project.tech.length - visibleTech.length;

  // The stagger delay must only apply to the entrance, or it also delays hover transitions.
  const handleTransitionEnd = event => {
    if (event.target === event.currentTarget && event.propertyName === 'opacity') {
      setEntered(true);
    }
  };

  return (
    <article
      ref={ref}
      className={`card project-card overflow-hidden flex flex-col fade-up ${visible ? 'visible' : ''}`}
      style={entered ? undefined : { transitionDelay: `${index * 0.05}s` }}
      onTransitionEnd={entered ? undefined : handleTransitionEnd}
    >
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-2 mb-3" style={{ minHeight: '20px' }}>
          <span
            style={{
              fontSize: 'var(--text-xs)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--accent-text)',
            }}
          >
            {project.categories?.[0]}
          </span>
          {(project.github || project.demo) && (
            <div className="flex gap-4 shrink-0">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardLinkClass}
                  style={cardLinkStyle}
                >
                  <ExternalLink size={14} aria-hidden="true" />
                  Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardLinkClass}
                  style={cardLinkStyle}
                >
                  <Github size={14} aria-hidden="true" />
                  Code
                </a>
              )}
            </div>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <h3 style={{ margin: 0, fontSize: 'var(--text-base)', fontWeight: 600, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            <Link
              to={`/projects/${project.slug}`}
              className="project-link"
            >
              {project.title}
            </Link>
          </h3>
        </div>
        <p
          style={{
            margin: '0 0 12px',
            fontSize: 'var(--text-base)',
            color: 'var(--text-muted)',
            lineHeight: 1.6,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {project.summary}
        </p>
        {project.headline && (
          <p style={{ margin: '0 0 12px', fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.5 }}>
            {project.headline}
          </p>
        )}
        <div style={{ flex: 1 }} />
        <p className="project-card-tech">
          {project.status && <strong>{project.status}</strong>}
          {project.status && ' · '}
          {visibleTech.join(' · ')}
          {extraTech > 0 && ` · +${extraTech} more`}
        </p>
      </div>
    </article>
  );
}

function FeaturedProject({ project }) {
  const [ref, visible] = useInView();

  return (
    <article
      ref={ref}
      className={`featured-project fade-up ${visible ? 'visible' : ''}`}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="featured-project-media"
        aria-label={`${project.title} deep dive`}
        tabIndex={-1}
      >
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          width="1672"
          height="941"
          loading="lazy"
        />
      </Link>
      <div className="featured-project-body">
        <h3 className="featured-project-title">
          <Link to={`/projects/${project.slug}`} className="project-link">
            {project.title}
          </Link>
        </h3>
        <p className="featured-project-metric">{project.headline}</p>
        <p className="featured-project-summary">{project.summary}</p>
        <p className="featured-project-tech">{project.tech.join(' · ')}</p>
        <div className="flex flex-wrap items-center gap-3">
          <Link to={`/projects/${project.slug}`} className="btn btn-primary">
            View deep dive
          </Link>
          {project.github && (
            <MotionButton
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <Github size={14} />
              Code
            </MotionButton>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [ref, visible] = useInView();
  const [activeCategory, setActiveCategory] = React.useState('All');

  const shownProjects = MORE_PROJECTS.filter(p =>
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

        <div className="featured-projects">
          {FEATURED_PROJECTS.map(project => (
            <FeaturedProject key={project.slug} project={project} />
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '24px',
          }}
        >
          <h3 style={{ margin: 0, fontSize: 'var(--text-lg)', fontWeight: 600 }}>
            More projects · {MORE_PROJECTS.length}
          </h3>
          <div role="group" aria-label="Filter projects by category" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={activeCategory === cat ? 'btn btn-primary' : 'btn btn-outline'}
                style={{ padding: '6px 16px', fontSize: 'var(--text-xs)', fontWeight: 500, borderRadius: '20px' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shownProjects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
