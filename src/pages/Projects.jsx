import React, { useState } from 'react';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/portfolio';
import useInView from '../hooks/useInView';

const ALL_CATEGORIES = ['All', ...Array.from(new Set(projectsData.flatMap(p => p.categories)))];
const DEFAULT_SHOW = 4;

const PANEL_COLORS = ['#6c4fff', '#4169ff', '#f4647a', '#fbbf24', '#10b981'];

function ProjectCard({ project, index }) {
  const [ref, visible] = useInView();
  const [imgHovered, setImgHovered] = React.useState(false);
  const panelColor = PANEL_COLORS[index % PANEL_COLORS.length];

  return (
    <div
      ref={ref}
      className={`fade-up ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div
        style={{
          display: 'flex',
          border: '2px solid var(--border)',
          borderRadius: '20px',
          boxShadow: 'var(--neo-shadow-lg)',
          overflow: 'hidden',
          minHeight: '220px',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.02)';
          e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,0,0,0.18)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = 'var(--neo-shadow-lg)';
        }}
      >
        <div
          style={{
            flex: 1,
            padding: '32px',
            backgroundColor: 'var(--bg-card-solid)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <span
              style={{
                display: 'inline-block',
                backgroundColor: 'var(--btn-primary-bg)',
                color: 'var(--btn-primary-fg)',
                padding: '4px 12px',
                borderRadius: '9999px',
                fontSize: '11px',
                fontFamily: "'JetBrains Mono', monospace",
                marginBottom: '16px',
              }}
            >
              {project.categories[0]}
            </span>

            <span
              style={{
                display: 'inline-block',
                marginLeft: '8px',
                backgroundColor: 'var(--tag-bg)',
                color: 'var(--text-muted)',
                padding: '4px 10px',
                borderRadius: '9999px',
                fontSize: '11px',
                fontFamily: "'JetBrains Mono', monospace",
                border: '1px solid var(--tag-border)',
              }}
            >
              {project.year}
            </span>

            <h3
              style={{
                fontSize: '20px',
                fontWeight: 700,
                color: 'var(--text-primary)',
                fontFamily: "'Space Grotesk', sans-serif",
                marginBottom: '6px',
                lineHeight: 1.3,
              }}
            >
              {project.title}
            </h3>

            <p
              style={{
                fontSize: '12px',
                color: 'var(--accent)',
                fontFamily: "'JetBrains Mono', monospace",
                marginBottom: '10px',
              }}
            >
              {project.impact}
            </p>

            <p
              style={{
                fontSize: '13px',
                color: 'var(--text-muted)',
                lineHeight: 1.65,
                marginBottom: '16px',
              }}
            >
              {project.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
              {project.tech.slice(0, 5).map((t, i) => (
                <span
                  key={i}
                  style={{
                    padding: '3px 8px',
                    borderRadius: '4px',
                    fontSize: '11px',
                    backgroundColor: 'var(--tag-bg)',
                    border: '1px solid var(--tag-border)',
                    color: 'var(--text-muted)',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            {project.github && project.github !== '#' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                <Github style={{ width: '15px', height: '15px' }} /> Code
              </a>
            )}
            {project.demo && project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                <ExternalLink style={{ width: '15px', height: '15px' }} /> Demo
              </a>
            )}
            <span
              style={{
                marginLeft: 'auto',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--text-primary)',
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              View project <ArrowRight style={{ width: '14px', height: '14px' }} />
            </span>
          </div>
        </div>

        <div
          className="hidden sm:flex"
          style={{
            width: '38%',
            backgroundColor: panelColor,
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {project.image ? (
            <div
              onMouseEnter={() => setImgHovered(true)}
              onMouseLeave={() => setImgHovered(false)}
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                position: 'relative',
                zIndex: imgHovered ? 10 : 1,
                overflow: 'visible',
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  borderRadius: '10px',
                  boxShadow: imgHovered
                    ? '0 24px 64px rgba(0,0,0,0.55)'
                    : '0 8px 24px rgba(0,0,0,0.35)',
                  display: 'block',
                  transform: imgHovered ? 'scale(1.08) translateY(-6px)' : 'scale(1) translateY(0)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                }}
              />
            </div>
          ) : (
            <span
              style={{
                fontSize: '80px',
                fontWeight: 900,
                color: 'rgba(255,255,255,0.2)',
                fontFamily: "'Space Grotesk', sans-serif",
                lineHeight: 1,
                userSelect: 'none',
              }}
            >
              {project.year}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [ref, visible] = useInView();

  const filtered = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.categories.includes(activeCategory));
  const displayed = showAll ? filtered : filtered.slice(0, DEFAULT_SHOW);

  function handleCategoryChange(cat) {
    setActiveCategory(cat);
    setShowAll(false);
  }

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className={`mb-8 fade-up ${visible ? 'visible' : ''}`}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 900,
              color: 'var(--text-primary)',
              fontFamily: "'Space Grotesk', sans-serif",
              marginBottom: '12px',
            }}
          >
            Take a look at my{' '}
            <span className="highlight-yellow">design portfolio</span>
          </h2>
        </div>

        <div className={`flex flex-wrap gap-2 mb-10 fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.05s' }}>
          {ALL_CATEGORIES.map(cat => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                style={{
                  padding: '6px 18px',
                  borderRadius: '9999px',
                  fontSize: '13px',
                  fontWeight: 600,
                  border: '2px solid var(--border)',
                  backgroundColor: isActive ? 'var(--btn-primary-bg)' : 'transparent',
                  color: isActive ? 'var(--btn-primary-fg)' : 'var(--text-primary)',
                  cursor: 'pointer',
                  fontFamily: "'Space Grotesk', sans-serif",
                  transition: 'background-color 0.15s, color 0.15s',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {displayed.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>

        {!showAll && filtered.length > DEFAULT_SHOW && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              style={{
                padding: '12px 32px',
                borderRadius: '9999px',
                fontSize: '14px',
                fontWeight: 700,
                border: '2px solid var(--border)',
                backgroundColor: 'transparent',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                boxShadow: '3px 3px 0 var(--shadow-key)',
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Show All ({filtered.length})
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
