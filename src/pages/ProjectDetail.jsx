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
            fontSize: 'var(--text-sm)',
            color: 'var(--text-muted)',
            textDecoration: 'none',
            marginBottom: 'clamp(32px, 5vw, 48px)',
          }}
        >
          <ArrowLeft size={15} />
          All Projects
        </Link>

        {/* Header */}
        <div style={{ maxWidth: '720px', marginBottom: 'clamp(32px, 5vw, 48px)' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
            {(project.categories || []).map(cat => (
              <span key={cat} className="tag" style={{ fontSize: 'var(--text-xs)' }}>{cat}</span>
            ))}
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-subtle)', alignSelf: 'center', marginLeft: '4px' }}>
              {project.year}
            </span>
            {project.status && (
              <span className="tag" style={{ fontSize: 'var(--text-xs)', color: 'var(--accent-text)', borderColor: 'var(--accent)' }}>
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

          {project.subtitle && (
            <p style={{
              fontSize: 'var(--text-md)',
              color: 'var(--accent-text)',
              fontStyle: 'italic',
              fontFamily: 'var(--font-display)',
              margin: '0 0 20px',
            }}>
              {project.subtitle}
            </p>
          )}

          {project.impact && (
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-muted)', lineHeight: 1.7, margin: '0 0 28px' }}>
              {project.impact}
            </p>
          )}

          {(project.github || project.demo) && (
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
          )}
        </div>

        {/* Project image */}
        {project.image && (
          <div style={{
            width: '100%',
            borderRadius: 'var(--radius-card)',
            overflow: 'hidden',
            border: '1px solid var(--border)',
            marginBottom: 'clamp(40px, 6vw, 64px)',
          }}>
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              width="1672"
              height="941"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-12 items-start">
          <div>
            {project.description && (
              <section className="mb-12 last:mb-0">
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-xl)', margin: '0 0 16px' }}>
                  Overview
                </h2>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, margin: 0, maxWidth: '68ch' }}>
                  {project.description}
                </p>
              </section>
            )}

            {project.results?.metrics?.length > 0 && (
              <section className="mb-12 last:mb-0">
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-xl)', margin: '0 0 16px' }}>
                  Metrics &amp; Results
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 200px), 1fr))', gap: '16px', marginBottom: '20px' }}>
                  {project.results.metrics.map(metric => (
                    <div key={metric.label} className="card p-5">
                      <p style={{ margin: '0 0 6px', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--text-xl)', color: 'var(--accent-text)', lineHeight: 1.1, fontVariantNumeric: 'lining-nums tabular-nums', letterSpacing: '-0.01em' }}>
                        {metric.value}
                      </p>
                      <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
                {project.results.note && (
                  <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '68ch' }}>
                    {project.results.note}
                  </p>
                )}
              </section>
            )}
          </div>

          {project.tech?.length > 0 && (
            <aside className="card p-5">
              <h2 style={{ margin: '0 0 12px', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-primary)' }}>
                Stack
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {project.tech.map(t => (
                  <span key={t} className="tag" style={{ fontSize: 'var(--text-xs)' }}>{t}</span>
                ))}
              </div>
            </aside>
          )}
        </div>
      </div>
    </main>
  );
}
