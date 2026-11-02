import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MotionButton } from '../components/MotionButton';
import { projectsData } from '../data/portfolio';
import useInView from '../hooks/useInView';

const FEATURED_COUNT = 3;

const compactButtonStyle = { padding: '6px 12px', fontSize: '12px', borderRadius: '20px' };

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
  const [hovered, setHovered] = React.useState(false);
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
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-2 mb-3" style={{ minHeight: '34px' }}>
          <span
            style={{
              fontSize: '11px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--accent)',
            }}
          >
            {project.categories?.[0]}
          </span>
          {(project.github || project.demo) && (
            <div className="flex gap-2 shrink-0">
              {project.demo && (
                <MotionButton
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={compactButtonStyle}
                >
                  <ExternalLink size={12} />
                  Demo
                </MotionButton>
              )}
              {project.github && (
                <MotionButton
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={compactButtonStyle}
                >
                  <Github size={12} />
                  Code
                </MotionButton>
              )}
            </div>
          )}
        </div>
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
          {project.summary}
        </p>
        {project.headline && (
          <p style={{ margin: '0 0 12px', fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.5 }}>
            {project.headline}
          </p>
        )}
        <div style={{ flex: 1 }} />
        <div className="flex flex-wrap items-center gap-1.5">
          {project.status && (
            <span
              className="tag"
              style={{
                fontSize: '10px',
                padding: '4px 10px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                color: 'var(--accent)',
              }}
            >
              {project.status}
            </span>
          )}
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

        <h3 style={{ margin: '0 0 16px', fontSize: '20px', fontWeight: 600 }}>
          Featured
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ marginBottom: '48px' }}>
          {FEATURED_PROJECTS.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} />
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
          <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 600 }}>
            More projects · {MORE_PROJECTS.length}
          </h3>
          <div role="group" aria-label="Filter projects by category" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={activeCategory === cat ? 'btn btn-primary' : 'btn btn-outline'}
                style={{ padding: '6px 16px', fontSize: '12px', fontWeight: 500, borderRadius: '20px' }}
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
