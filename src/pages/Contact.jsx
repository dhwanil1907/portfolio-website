import React from 'react';
import { Mail } from 'lucide-react';
import { MotionButton } from '../components/MotionButton';
import { personalInfo } from '../data/portfolio';
import useInView from '../hooks/useInView';

export default function Contact() {
  const [ref, visible] = useInView();

  return (
    <section id="contact" className="section">
      <div className="page-container">
        <div className={`section-header fade-up ${visible ? 'visible' : ''}`} ref={ref}>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Whether you&apos;re hiring, have a project, or just want to talk data — I&apos;m here.
          </p>
          <div className="flex flex-col items-center gap-5 mt-8">
            <MotionButton href={`mailto:${personalInfo.email}`} className="btn btn-primary">
              <Mail size={16} />
              Send Email
            </MotionButton>
            <p className="hero-links justify-center">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
