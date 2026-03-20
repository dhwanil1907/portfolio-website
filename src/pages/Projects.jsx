import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projectsData } from '../data/portfolio';
import useInView from '../hooks/useInView';

const ALL_CATEGORIES = ['All', ...Array.from(new Set(projectsData.flatMap(p => p.categories)))];
const DEFAULT_SHOW = 4;

function ProjectCard({ project, index }) {
  const [ref, visible] = useInView();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={`fade-up ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div
        className="rounded-2xl overflow-hidden flex flex-col h-full border transition-all duration-[250ms] ease-out cursor-default"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: hovered ? 'var(--accent)' : 'var(--border)',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          boxShadow: hovered ? '0 8px 32px var(--accent-glow)' : 'none',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Gradient visual area (180px) */}
        <div
          className={`h-[180px] bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
        >
          <div className="absolute inset-0 flex items-end p-4 gap-2">
            <span
              className="px-2.5 py-1 rounded-full text-xs font-semibold font-mono-tech backdrop-blur-sm"
              style={{ backgroundColor: 'rgba(0,0,0,0.4)', color: '#fff' }}
            >
              {project.categories[0]}
            </span>
            <span
              className="px-2.5 py-1 rounded-full text-xs font-mono-tech backdrop-blur-sm"
              style={{ backgroundColor: 'rgba(0,0,0,0.4)', color: 'rgba(255,255,255,0.8)' }}
            >
              {project.year}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Title */}
          <h3 className="text-xl font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
            {project.title}
          </h3>

          {/* Impact line */}
          <p className="text-xs font-medium font-mono-tech mb-3" style={{ color: 'var(--accent)' }}>
            {project.impact}
          </p>

          {/* Description */}
          <p className="text-sm leading-relaxed mb-4 flex-grow" style={{ color: 'var(--text-muted)' }}>
            {project.description}
          </p>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded text-xs font-mono-tech"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-muted)'
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 mt-auto">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-150"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                aria-label={`GitHub: ${project.title}`}
              >
                <Github className="w-4 h-4" /> Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-150"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                aria-label={`Live demo: ${project.title}`}
              >
                <ExternalLink className="w-4 h-4" /> Demo
              </a>
            )}
          </div>
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
    <div
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={ref} className={`mb-8 fade-up ${visible ? 'visible' : ''}`}>
          <p
            className="text-xs font-medium uppercase tracking-widest mb-3 font-mono-tech"
            style={{ color: 'var(--accent)' }}
          >
            Portfolio
          </p>
          <h2 className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Selected Work
          </h2>
        </div>

        {/* Category filters */}
        <div className={`flex flex-wrap gap-2 mb-10 fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.05s' }}>
          {ALL_CATEGORIES.map(cat => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className="px-4 py-1.5 rounded-full text-xs font-semibold font-mono-tech border transition-all duration-150"
                style={{
                  backgroundColor: isActive ? 'var(--accent)' : 'transparent',
                  borderColor: isActive ? 'var(--accent)' : 'var(--border)',
                  color: isActive ? '#fff' : 'var(--text-muted)',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>

        {/* Show All toggle */}
        {!showAll && filtered.length > DEFAULT_SHOW && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 rounded-lg text-sm font-semibold border transition-all duration-200 hover:bg-white/5"
              style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
            >
              Show All ({filtered.length})
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
