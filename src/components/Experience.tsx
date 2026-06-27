export default function Experience() {
  const experiences = [
    {
      role: "Senior Engineer",
      company: "Deutsche Bank",
      location: "Frankfurt, Germany",
      period: "Mar 2023 - Present",
      description: "Part of a 14–16 engineer team across 3 Scrum teams developing and maintaining sLimits — a real-time funds check platform evaluating transaction hierarchies to prevent overdraft breaches.",
      highlights: [
        "Currently leading the Spring Boot 4 and Java 21 upgrade of the sLimits platform.",
        "Designed and implemented a centralised GitHub Actions CI/CD platform, migrating 17 deployments across 10 repositories.",
        "Led the migration of 6 microservices across 3 Helm release groups from OCP4 to GCP GKE Multi-Tenant.",
        "Conducted Java 21 Virtual Threads (Project Loom) and Kafka-based funds check Proof of Concepts (PoCs)."
      ]
    },
    {
      role: "Lead Software Engineer",
      company: "TSYS (Global Payments)",
      location: "Noida, India",
      period: "May 2022 - Mar 2023",
      description: "Led backend development on Taxon, a Java Spring Boot and React loyalty management platform serving retail banking clients.",
      highlights: [
        "Took full ownership of the OMR (Options Maintenance Request) module, enabling clients to self-serve credit card reward configurations.",
        "Integrated the OMR module with Jira to automatically raise and route tickets, improving traceability.",
        "Implemented secure file attachment support backed by AWS S3."
      ]
    },
    {
      role: "Assistant Consultant / IT Analyst / System Engineer",
      company: "Tata Consultancy Services",
      location: "Mumbai, India / Various",
      period: "Sep 2011 - May 2022",
      description: "Progressed through multiple roles over 10+ years, taking on increasing ownership of critical corporate banking payment systems.",
      highlights: [
        "Single-handedly designed, built, and deployed a Spring Boot + React portal on HP NonStop, surfacing configuration data from Enscribe files.",
        "Led the adoption of SWIFT GPI across DB-Internet to meet mandatory compliance requirements.",
        "Built a Java-based Enscribe query tool as an alternative to Enform for L2 support incident investigations.",
        "Migrated native HP NonStop Enscribe files to SQL tables using Comforte ESCORT SQL."
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title"><span className="text-gradient">Experience</span></h2>
        <p className="section-subtitle">
          My professional journey in enterprise banking and fintech platforms.
        </p>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content card-glass">
                <div className="timeline-header">
                  <div>
                    <h3 className="role-title">{exp.role}</h3>
                    <span className="company-name">{exp.company} <span className="location-text">({exp.location})</span></span>
                  </div>
                  <span className="time-period">{exp.period}</span>
                </div>
                <p className="exp-desc">{exp.description}</p>
                <ul className="exp-highlights">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-section {
          position: relative;
        }
        .timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding-left: 2rem;
        }
        .timeline::before {
          content: '';
          position: absolute;
          left: 8px;
          top: 5px;
          bottom: 5px;
          width: 2px;
          background: linear-gradient(to bottom, var(--accent-indigo), var(--accent-pink));
        }
        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
        }
        .timeline-item:last-child {
          margin-bottom: 0;
        }
        .timeline-dot {
          position: absolute;
          left: -28px;
          top: 24px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--bg-primary);
          border: 4px solid var(--accent-indigo);
          box-shadow: 0 0 10px var(--accent-indigo);
          z-index: 2;
        }
        .timeline-content {
          padding: 2.5rem;
        }
        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .role-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .company-name {
          font-size: 1.05rem;
          color: var(--accent-violet);
          font-weight: 600;
        }
        .location-text {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: normal;
        }
        .time-period {
          font-size: 0.9rem;
          font-weight: 600;
          padding: 0.25rem 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-glass);
          border-radius: 999px;
          color: var(--text-secondary);
        }
        .exp-desc {
          color: var(--text-secondary);
          font-size: 1.05rem;
          margin-bottom: 1.25rem;
          line-height: 1.6;
        }
        .exp-highlights {
          list-style-type: none;
          padding-left: 0;
        }
        .exp-highlights li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.75rem;
          color: var(--text-secondary);
          font-size: 0.95rem;
        }
        .exp-highlights li:last-child {
          margin-bottom: 0;
        }
        .exp-highlights li::before {
          content: '✦';
          position: absolute;
          left: 0;
          color: var(--accent-pink);
          font-size: 0.9rem;
        }
        @media (max-width: 768px) {
          .timeline-header {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
}
