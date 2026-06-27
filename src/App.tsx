import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setActiveSection('contact');
    }
  };

  return (
    <div className="portfolio-app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#home" className="nav-logo" onClick={() => setActiveSection('home')}>
            Harish<span className="text-gradient">.dev</span>
          </a>
          <ul className="nav-links">
            <li>
              <a 
                href="#home" 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => setActiveSection('home')}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => setActiveSection('about')}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
                onClick={() => setActiveSection('experience')}
              >
                Experience
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={() => setActiveSection('projects')}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => setActiveSection('contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content Sections */}
      <main>
        <Hero onContactClick={scrollToContact} />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="portfolio-footer">
        <div className="container footer-container">
          <p className="footer-text">
            © {new Date().getFullYear()} Harish Singla. All rights reserved.
          </p>
          <p className="footer-subtext">
            Built with React, TypeScript & Vite.
          </p>
        </div>
      </footer>

      <style>{`
        .portfolio-app {
          position: relative;
          min-height: 100vh;
        }
        .portfolio-footer {
          border-top: 1px solid var(--border-glass);
          background: rgba(11, 15, 25, 0.8);
          padding: 2.5rem 0;
          text-align: center;
          margin-top: 4rem;
        }
        .footer-container {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: center;
        }
        .footer-text {
          font-weight: 600;
          color: var(--text-primary);
          font-size: 0.95rem;
        }
        .footer-subtext {
          color: var(--text-muted);
          font-size: 0.85rem;
        }
      `}</style>
    </div>
  );
}
