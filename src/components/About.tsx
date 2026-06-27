export default function About() {
  const skillCategories = [
    {
      category: "Backend & Payments",
      skills: ["Java 17/21", "Spring Boot 3/4", "Microservices", "REST & Apigee", "SWIFT (GPI, MT103, SEPA)", "Kafka"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["Google Cloud (GKE, Anthos)", "Kubernetes & Docker", "Helm (Charts & Secrets)", "Istio Service Mesh", "GitHub Actions & Jenkins", "Renovate Bot"]
    },
    {
      category: "Frontend & Legacy",
      skills: ["React & TypeScript", "JavaScript, HTML5 & CSS3", "HP NonStop Tandem", "COBOL & TACL", "Enscribe & SQL"]
    }
  ];

  const certifications = [
    {
      title: "Global Enterprise Engineer Programme",
      issuer: "Davies Global",
      date: "Nov 2025",
      link: "https://www.linkedin.com/posts/harish-singla-333bab22_gee-activity-7338653949094223876-gLuR?utm_source=share"
    },
    {
      title: "Oracle Certified Java Associate",
      issuer: "Oracle",
      date: "Mar 2022",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=1924A9FBC05D92A0F27B6831C22B48E8B847BE3EDF7"
    },
    {
      title: "Associate Cloud Engineer",
      issuer: "Google",
      date: "Jun 2021",
      link: "https://www.credential.net/263103a1-4ffd-4f74-945b-94cc2583507e#acc.LU3ONkcE"
    }
  ];

  const languages = [
    { name: "Punjabi", level: "Native" },
    { name: "Hindi", level: "Proficient (C2)" },
    { name: "English", level: "Independent (B2)" },
    { name: "German", level: "Beginner (A1)" },
    { name: "Japanese", level: "Beginner (A1)" }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title"><span className="text-gradient">About Me</span></h2>
        <p className="section-subtitle">
          Bridging the gap between robust, high-availability banking infrastructure and modern cloud-native systems.
        </p>

        <div className="about-grid">
          <div className="about-bio card-glass">
            <h3>Professional Profile</h3>
            <p>
              I am a <strong>Senior Full Stack Engineer</strong> with <strong>14+ years of experience</strong> spanning legacy banking infrastructure (HP NonStop Tandem, COBOL) and modern cloud-native architectures (Java, Spring Boot, Kubernetes, GCP).
            </p>
            <p style={{ marginTop: '1rem' }}>
              Currently, at <strong>Deutsche Bank</strong>, I lead payment service migrations from on-premises OpenShift to GCP GKE and build high-throughput transaction systems like <em>sLimits</em>. I specialize in designing highly concurrent backends, implementing secure CI/CD platforms, and optimizing distributed payment flows.
            </p>

            <div className="bio-stats">
              <div className="stat-item">
                <span className="stat-num text-gradient">14+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-num text-gradient">17+</span>
                <span className="stat-label">Deployments Migrated</span>
              </div>
            </div>

            <div className="languages-section" style={{ marginTop: '2rem' }}>
              <h4 style={{ marginBottom: '1rem', fontWeight: 700 }}>Languages</h4>
              <div className="languages-grid">
                {languages.map((lang, idx) => (
                  <div key={idx} className="lang-tag">
                    <span className="lang-name">{lang.name}</span>
                    <span className="lang-level">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-details">
            <div className="skills-card card-glass">
              <h3>Technical Expertise</h3>
              <div className="skills-categories">
                {skillCategories.map((cat, i) => (
                  <div key={i} className="skill-cat">
                    <h4>{cat.category}</h4>
                    <div className="skills-tags">
                      {cat.skills.map((skill, j) => (
                        <span key={j} className="skill-badge">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="certifications-card card-glass" style={{ marginTop: '1.5rem' }}>
              <h3>Certifications</h3>
              <div className="certs-list">
                {certifications.map((cert, idx) => (
                  <a key={idx} href={cert.link} target="_blank" rel="noreferrer" className="cert-item">
                    <div className="cert-icon">🏆</div>
                    <div className="cert-info">
                      <span className="cert-title">{cert.title}</span>
                      <span className="cert-meta">{cert.issuer} • {cert.date}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          position: relative;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 2rem;
          align-items: start;
        }
        .about-bio, .skills-card, .certifications-card {
          padding: 2.5rem;
        }
        .about-bio h3, .skills-card h3, .certifications-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          font-weight: 700;
        }
        .about-bio p {
          color: var(--text-secondary);
          font-size: 1.05rem;
          line-height: 1.7;
        }
        .bio-stats {
          display: flex;
          gap: 3rem;
          margin-top: 2rem;
        }
        .stat-item {
          display: flex;
          flex-direction: column;
        }
        .stat-num {
          font-size: 2.5rem;
          font-weight: 800;
        }
        .stat-label {
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          margin-top: 0.25rem;
        }
        .languages-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .lang-tag {
          display: flex;
          flex-direction: column;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: 8px;
        }
        .lang-name {
          font-size: 0.9rem;
          font-weight: 600;
        }
        .lang-level {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .skills-categories {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .skill-cat h4 {
          font-size: 1.1rem;
          margin-bottom: 0.75rem;
          color: var(--accent-indigo);
          font-weight: 700;
        }
        .skills-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .skill-badge {
          font-size: 0.85rem;
          padding: 0.4rem 0.8rem;
          background: rgba(99, 102, 241, 0.06);
          border: 1px solid rgba(99, 102, 241, 0.15);
          border-radius: 6px;
          font-weight: 500;
        }
        .certs-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .cert-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-decoration: none;
          color: inherit;
          padding: 0.75rem;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid transparent;
          transition: all 0.3s ease;
        }
        .cert-item:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--border-glass);
          transform: translateX(5px);
        }
        .cert-icon {
          font-size: 1.5rem;
        }
        .cert-info {
          display: flex;
          flex-direction: column;
        }
        .cert-title {
          font-weight: 600;
          font-size: 0.95rem;
        }
        .cert-meta {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
