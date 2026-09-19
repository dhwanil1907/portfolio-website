import React from 'react';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { MotionButton } from '../components/MotionButton';
import { personalInfo } from '../data/portfolio';
import useInView from '../hooks/useInView';

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/dhwanil-ranpura',
    href: personalInfo.linkedin,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: personalInfo.education.location,
    href: null,
  },
];

export default function Contact() {
  const [ref, visible] = useInView();

  return (
    <section id="contact" className="section">
      <div className="page-container">
        <div className={`section-header fade-up ${visible ? 'visible' : ''}`} ref={ref}>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            I&apos;m always interested in new opportunities and collaborations.
            Open to internships and full-time roles in data science, ML
            engineering, and data engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="flex flex-col gap-3">
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="card p-5 flex items-center gap-4">
                <div
                  className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'var(--surface-subtle)' }}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <p style={{ margin: '0 0 2px', fontSize: '13px', fontWeight: 600 }}>
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      style={{ fontSize: '14px', color: 'var(--text-muted)', textDecoration: 'none' }}
                    >
                      {value}
                    </a>
                  ) : (
                    <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-muted)' }}>
                      {value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            <div className="mt-4">
              <h3 style={{ margin: '0 0 8px', fontSize: '16px', fontWeight: 600 }}>
                Let&apos;s Connect
              </h3>
              <p style={{ margin: '0 0 12px', fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                Whether you have a project in mind or just want to chat about data
                science, feel free to reach out.
              </p>
              <ul className="m-0 pl-5 text-sm" style={{ color: 'var(--text-muted)' }}>
                <li>Available for internships &amp; full-time roles</li>
                <li>Open to freelance &amp; consulting</li>
                <li>Response within 24 hours</li>
              </ul>
            </div>
          </div>

          <div className="card p-8 flex flex-col justify-center text-center">
            <h3 style={{ margin: '0 0 12px', fontSize: '18px', fontWeight: 600 }}>
              Ready to work together?
            </h3>
            <p style={{ margin: '0 0 24px', fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.65 }}>
              Send me an email or connect on LinkedIn — I&apos;d love to hear from you.
            </p>
            <div className="flex flex-col gap-3">
              <MotionButton href={`mailto:${personalInfo.email}`} className="btn btn-primary">
                <Mail size={16} />
                Send Email
              </MotionButton>
              <MotionButton
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <Github size={16} />
                GitHub
              </MotionButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
