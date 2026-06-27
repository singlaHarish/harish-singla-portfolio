export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title"><span className="text-gradient">Get In Touch</span></h2>
        <p className="section-subtitle">
          Want to discuss payment systems, cloud migrations, or full-stack opportunities? Let's connect!
        </p>

        <div className="contact-card-container">
          <div className="contact-info card-glass">
            <h3>Contact Details</h3>
            <p>
              I am currently based in Frankfurt, Germany. Feel free to reach out directly via email or connect with me on professional platforms.
            </p>
            <div className="info-details">
              <div className="info-item">
                <span className="info-icon">✉️</span>
                <div className="info-text">
                  <span className="info-label">Email</span>
                  <a href="mailto:harishsingla89@gmail.com" className="info-link">harishsingla89@gmail.com</a>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">💼</span>
                <div className="info-text">
                  <span className="info-label">LinkedIn</span>
                  <a href="https://www.linkedin.com/in/harish-singla-333bab22/" target="_blank" rel="noreferrer" className="info-link">harish-singla-333bab22</a>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">🌐</span>
                <div className="info-text">
                  <span className="info-label">GitHub</span>
                  <a href="https://github.com/singlaHarish" target="_blank" rel="noreferrer" className="info-link">github.com/singlaHarish</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          position: relative;
          padding-bottom: 8rem;
        }
        .contact-card-container {
          max-width: 600px;
          margin: 0 auto;
        }
        .contact-info {
          padding: 3rem;
          text-align: center;
        }
        .contact-info h3 {
          font-size: 1.75rem;
          margin-bottom: 1.25rem;
          font-weight: 700;
        }
        .contact-info p {
          color: var(--text-secondary);
          font-size: 1.05rem;
          line-height: 1.6;
          margin-bottom: 2.5rem;
        }
        .info-details {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
          align-items: flex-start;
          max-width: 350px;
          margin: 0 auto;
        }
        .info-item {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          width: 100%;
        }
        .info-icon {
          font-size: 1.5rem;
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-glass);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .info-text {
          display: flex;
          flex-direction: column;
          text-align: left;
        }
        .info-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
          font-weight: 600;
        }
        .info-link {
          color: var(--text-primary);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
          word-break: break-all;
          font-size: 1.05rem;
        }
        .info-link:hover {
          color: var(--accent-indigo);
        }
        @media (max-width: 768px) {
          .contact-info {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
