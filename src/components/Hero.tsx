import { useState, useEffect } from 'react';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  const titles = [
    "Senior Full-Stack Engineer",
    "Cloud-Native Architect",
    "Fintech & Payment Systems Specialist"
  ];
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: number;
    const currentTitle = titles[titleIndex];
    
    if (isDeleting) {
      timer = window.setTimeout(() => {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
      }, 30);
    } else {
      timer = window.setTimeout(() => {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
      }, 70);
    }

    if (!isDeleting && displayText === currentTitle) {
      timer = window.setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge">Senior Software Engineer</div>
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Harish Singla</span>
          </h1>
          <h2 className="hero-subtitle">
            Specializing in <span className="typing-text">{displayText}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-description">
            14+ years of experience across legacy banking infrastructure (HP NonStop Tandem, COBOL) and modern cloud-native platforms (Java, Spring Boot, Kubernetes, GCP). Currently leading payment service migrations at Deutsche Bank.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <button onClick={onContactClick} className="btn btn-secondary">Let's Connect</button>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/singlaHarish" target="_blank" rel="noreferrer" title="GitHub">
              <svg className="social-icon" viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504c.5.092.682-.217.682-.483c0-.237-.008-.868-.013-1.703c-2.782.605-3.369-1.343-3.369-1.343c-.454-1.158-1.11-1.466-1.11-1.466c-.908-.62.069-.608.069-.608c1.003.07 1.53 1.032 1.53 1.032c.892 1.53 2.341 1.088 2.91.832c.092-.647.35-1.088.636-1.338c-2.22-.253-4.555-1.113-4.555-4.951c0-1.093.39-1.988 1.029-2.688c-.103-.253-.446-1.272.098-2.65c0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027c.546 1.379.202 2.398.1 2.651c.64.7 1.028 1.595 1.028 2.688c0 3.848-2.339 4.695-4.566 4.943c.359.309.678.92.678 1.855c0 1.338-.012 2.419-.012 2.747c0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/harish-singla-333bab22/" target="_blank" rel="noreferrer" title="LinkedIn">
              <svg className="social-icon" viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="mailto:harishsingla89@gmail.com" title="Email">
              <svg className="social-icon" viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding-top: 8rem;
        }
        .hero-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hero-content {
          text-align: center;
          max-width: 850px;
        }
        .badge {
          display: inline-block;
          padding: 0.5rem 1.25rem;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.25);
          border-radius: 9999px;
          font-size: 0.85rem;
          font-weight: 700;
          color: #818cf8;
          margin-bottom: 1.5rem;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .hero-title {
          font-size: 4.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.25rem;
          letter-spacing: -1.5px;
        }
        .hero-subtitle {
          font-size: 2.2rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          height: 3.5rem;
        }
        .typing-text {
          color: var(--text-primary);
        }
        .cursor {
          color: var(--accent-indigo);
          animation: blink 0.8s infinite;
          margin-left: 2px;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .hero-description {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          max-width: 750px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.7;
        }
        .hero-cta {
          display: flex;
          gap: 1.25rem;
          justify-content: center;
          margin-bottom: 3rem;
        }
        .hero-socials {
          display: flex;
          justify-content: center;
          gap: 1.75rem;
        }
        .social-icon {
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          color: var(--text-primary);
          transform: translateY(-3px);
        }
        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem;
          }
          .hero-subtitle {
            font-size: 1.6rem;
            height: 4.5rem;
          }
          .hero-description {
            font-size: 1.05rem;
          }
        }
      `}</style>
    </section>
  );
}
