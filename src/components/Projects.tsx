export default function Projects() {
  const projectsList = [
    {
      title: "sLimits",
      description: "A real-time, high-throughput funds checking platform sitting at the heart of the payment processing chain at Deutsche Bank. Evaluates transactions against complex client hierarchies.",
      tags: ["Java 21", "Spring Boot 4", "GCP GKE", "Apigee", "Istio", "Kafka", "Prometheus"],
      github: "https://github.com/singlaHarish",
      demo: "#"
    },
    {
      title: "ChanakyaIQ",
      description: "A premium fintech stock simulator built to practice Indian-market trading. Integrates with the Upstox API for real-time quotes and features Google OAuth2 login.",
      tags: ["Java 21", "Spring Boot", "React", "TypeScript", "Vite", "OpenAPI", "H2 Database"],
      github: "https://github.com/singlaHarish/chanakyaiq",
      demo: "#"
    },
    {
      title: "Invoice Generator UI & Backend",
      description: "A full-stack invoice generation system. Built with a responsive TypeScript frontend and a robust Python backend service.",
      tags: ["TypeScript", "React", "Python", "REST API"],
      github: "https://github.com/singlaHarish/invoice-generator-ui",
      demo: "#"
    },
    {
      title: "Spring Boot Prometheus Grafana",
      description: "An example Java application demonstrating end-to-end metrics collection, scraping configuration, and dashboard visualization using Prometheus and Grafana.",
      tags: ["Java", "Spring Boot", "Prometheus", "Grafana", "Metrics"],
      github: "https://github.com/singlaHarish/sping-boot-prometheus-grafana",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title"><span className="text-gradient">Featured Projects</span></h2>
        <p className="section-subtitle">
          Enterprise platforms and open-source repositories from my GitHub profile.
        </p>

        <div className="projects-grid">
          {projectsList.map((project, index) => (
            <div key={index} className="project-card card-glass">
              <div className="project-header">
                <span className="project-icon">📂</span>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" title="View Source Code">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855c0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                  </a>
                  {project.demo !== "#" && (
                    <a href={project.demo} target="_blank" rel="noreferrer" title="View Live Demo">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-section {
          position: relative;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 2rem;
        }
        .project-card {
          padding: 2.2rem;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        .project-icon {
          font-size: 2rem;
        }
        .project-links {
          display: flex;
          gap: 1.25rem;
        }
        .project-links a {
          color: var(--text-secondary);
          transition: color 0.3s ease;
        }
        .project-links a:hover {
          color: var(--text-primary);
        }
        .project-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }
        .project-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .project-tag {
          font-size: 0.8rem;
          padding: 0.25rem 0.6rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-glass);
          border-radius: 6px;
          color: var(--text-secondary);
          font-weight: 500;
        }
      `}</style>
    </section>
  );
}
