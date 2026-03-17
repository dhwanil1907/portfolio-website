import React from 'react';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import useInView from '../hooks/useInView';

export default function Contact() {
  const [ref, visible] = useInView();

  return (
    <div
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={ref} className={`mb-16 fade-up ${visible ? 'visible' : ''}`}>
          <p
            className="text-xs font-medium uppercase tracking-widest mb-3 font-mono-tech"
            style={{ color: 'var(--accent)' }}
          >
            Contact
          </p>
          <h2 className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Let's Connect
          </h2>
          <p className="mt-2 max-w-xl" style={{ color: 'var(--text-muted)' }}>
            Open to internships, collaborations, and data conversations. I reply within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info column */}
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: MapPin, label: 'Location', value: personalInfo.education.location, href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-4 rounded-xl border"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'var(--accent-glow)' }}
                >
                  <Icon className="w-5 h-5" style={{ color: 'var(--accent)' }} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-medium font-mono-tech uppercase tracking-wider" style={{ color: 'var(--accent)' }}>{label}</p>
                  {href
                    ? <a href={href} className="text-sm font-medium transition-colors hover:underline" style={{ color: 'var(--text-primary)' }}>{value}</a>
                    : <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{value}</p>
                  }
                </div>
              </div>
            ))}

            <div className="flex gap-3 pt-2">
              {[
                { icon: Github, href: personalInfo.github, label: 'GitHub profile' },
                { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn profile' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-xl border transition-all duration-200 hover:-translate-y-0.5"
                  style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)', color: 'var(--text-muted)' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3">
            <form
              className="space-y-5 p-8 rounded-2xl border"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
              onSubmit={e => e.preventDefault()}
            >
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Send a Message</h3>

              <div className="grid sm:grid-cols-2 gap-5">
                {['First Name', 'Last Name'].map(name => (
                  <div key={name}>
                    <label className="block text-xs font-medium font-mono-tech uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>{name}</label>
                    <input
                      type="text"
                      placeholder={name === 'First Name' ? 'John' : 'Doe'}
                      className="w-full px-4 py-3 rounded-lg text-sm transition-colors duration-200"
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-primary)',
                        outline: 'none'
                      }}
                      onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-xs font-medium font-mono-tech uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg text-sm transition-colors duration-200"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-primary)',
                    outline: 'none'
                  }}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              <div>
                <label className="block text-xs font-medium font-mono-tech uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>Message</label>
                <textarea
                  rows="5"
                  placeholder="How can I help you?"
                  className="w-full px-4 py-3 rounded-lg text-sm transition-colors duration-200 resize-none"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-primary)',
                    outline: 'none'
                  }}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold text-sm text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
                style={{ backgroundColor: 'var(--accent)' }}
              >
                Send Message <Send className="w-4 h-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
