import { useState } from 'react';
import { Mail, LinkedinIcon, GithubIcon, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import useInView from '../hooks/useInView';

// Replace with your Formspree form ID from https://formspree.io
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

export default function Contact() {
  const [ref, visible] = useInView();
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    const form = e.target;
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const inputStyle = {
    backgroundColor: 'var(--bg-primary)',
    border: '1px solid var(--border)',
    color: 'var(--text-primary)',
    outline: 'none'
  };

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
                { icon: GithubIcon, href: personalInfo.github, label: 'GitHub profile' },
                { icon: LinkedinIcon, href: personalInfo.linkedin, label: 'LinkedIn profile' },
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
              onSubmit={handleSubmit}
            >
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Send a Message</h3>

              {status === 'success' && (
                <div className="flex items-center gap-3 p-4 rounded-lg" style={{ backgroundColor: 'var(--accent-glow)', color: 'var(--accent)' }}>
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <p className="text-sm font-medium">Message sent! I'll get back to you within 24 hours.</p>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 rounded-lg" style={{ backgroundColor: 'rgba(239,68,68,0.1)', color: '#ef4444' }}>
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <p className="text-sm font-medium">Something went wrong. Try emailing me directly.</p>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { label: 'First Name', name: 'firstName', placeholder: 'John' },
                  { label: 'Last Name',  name: 'lastName',  placeholder: 'Doe' },
                ].map(({ label, name, placeholder }) => (
                  <div key={name}>
                    <label className="block text-xs font-medium font-mono-tech uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>{label}</label>
                    <input
                      type="text"
                      name={name}
                      placeholder={placeholder}
                      required
                      className="w-full px-4 py-3 rounded-lg text-sm transition-colors duration-200"
                      style={inputStyle}
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
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 rounded-lg text-sm transition-colors duration-200"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              <div>
                <label className="block text-xs font-medium font-mono-tech uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>Message</label>
                <textarea
                  rows="5"
                  name="message"
                  placeholder="How can I help you?"
                  required
                  className="w-full px-4 py-3 rounded-lg text-sm transition-colors duration-200 resize-none"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold text-sm text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                style={{ backgroundColor: 'var(--accent)' }}
              >
                {status === 'loading' ? 'Sending…' : 'Send Message'}
                {status !== 'loading' && <Send className="w-4 h-4" aria-hidden="true" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
