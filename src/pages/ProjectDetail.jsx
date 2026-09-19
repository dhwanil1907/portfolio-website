import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/portfolio';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="page-container section" style={{ textAlign: 'center' }}>
        <h2 className="section-title">Project not found</h2>
        <Link to="/" className="btn btn-outline" style={{ marginTop: '16px' }}>
          ← Back home
        </Link>
      </div>
    );
  }

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <div className="page-container" style={{ paddingTop: '40px', paddingBottom: '80px' }}>

        {/* Back link */}
        <Link
          to="/#work"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '14px',
            color: 'var(--text-muted)',
            textDecoration: 'none',
            marginBottom: '48px',
          }}
        >
          <ArrowLeft size={15} />
          All Projects
        </Link>

        {/* Header */}
        <div style={{ maxWidth: '720px', marginBottom: '48px' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
            {project.categories.map(cat => (
              <span key={cat} className="tag" style={{ fontSize: '12px' }}>{cat}</span>
            ))}
            <span style={{ fontSize: '13px', color: 'var(--text-subtle)', alignSelf: 'center', marginLeft: '4px' }}>
              {project.year}
            </span>
            {project.status && (
              <span className="tag" style={{ fontSize: '12px', color: 'var(--accent)', borderColor: 'var(--accent)' }}>
                {project.status}
              </span>
            )}
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 400,
            margin: '0 0 12px',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}>
            {project.title}
          </h1>

          <p style={{
            fontSize: '1.1rem',
            color: 'var(--accent)',
            fontStyle: 'italic',
            fontFamily: "'Spectral', Georgia, serif",
            margin: '0 0 24px',
          }}>
            {project.subtitle}
          </p>

          <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7, margin: '0 0 32px' }}>
            {project.impact}
          </p>

          {/* Action buttons */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ gap: '8px' }}>
                <Github size={16} /> View Code
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ gap: '8px' }}>
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Project image */}
        {project.image && (
          <div style={{
            width: '100%',
            borderRadius: 'var(--radius-card)',
            overflow: 'hidden',
            border: '1px solid var(--border)',
            marginBottom: '64px',
          }}>
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', display: 'block', objectFit: 'cover' }}
            />
          </div>
        )}

        {/* Content grid — fill in next session */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '48px', alignItems: 'start' }}>

          {/* Main content — TO BE FILLED */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.5rem', margin: '0 0 16px' }}>
              Overview
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, margin: '0 0 48px' }}>
              {project.description}
            </p>

            {/* TODO next session: Problem, Approach, Results, Key Decisions sections */}
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

            {/* Tech stack */}
            <div className="card p-5">
              <p style={{ margin: '0 0 12px', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--accent)' }}>
                Stack
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {project.tech.map(t => (
                  <span key={t} className="tag" style={{ fontSize: '12px' }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Quick stats — TODO: add per-project stats next session */}
            <div className="card p-5">
              <p style={{ margin: '0 0 12px', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--accent)' }}>
                Impact
              </p>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                {project.impact}
              </p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
