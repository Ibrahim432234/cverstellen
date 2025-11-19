import React from 'react';
import { CVData, TemplateConfig } from '../../types/cv';

interface Props {
  data: CVData;
  config: TemplateConfig;
}

export const DeveloperTemplate: React.FC<Props> = ({ data, config }) => {
  const { personalInfo, professionalSummary, workExperience, education, projects, skills, languages, certifications } = data;

  return (
    <div style={{
      fontFamily: "'Roboto Mono', 'Courier New', monospace",
      maxWidth: '21cm',
      minHeight: '29.7cm',
      margin: '0 auto',
      backgroundColor: '#ffffff',
      padding: '1.2cm 1.5cm',
      boxSizing: 'border-box',
      fontSize: '9pt',
      lineHeight: '1.3'
    }}>
      {/* Compact Header */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: personalInfo.profilePhoto ? '80px 1fr' : '1fr',
        gap: '1rem',
        marginBottom: '0.8rem',
        paddingBottom: '0.6rem',
        borderBottom: `2px solid ${config.primaryColor}`
      }}>
        {personalInfo.profilePhoto && (
          <img
            src={personalInfo.profilePhoto}
            alt="Profile"
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '6px',
              objectFit: 'cover',
              border: `2px solid ${config.primaryColor}`
            }}
          />
        )}
        <div>
          <h1 style={{
            margin: '0 0 0.3rem 0',
            color: config.primaryColor,
            fontSize: '20pt',
            fontWeight: 'bold',
            letterSpacing: '-0.5px'
          }}>
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>

          {/* Contact Info - Compact Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '0.15rem 1rem',
            fontSize: '8pt',
            color: '#475569'
          }}>
            <div>📧 {personalInfo.email}</div>
            <div>📱 {personalInfo.phone}</div>
            {personalInfo.github && (
              <div>
                <a href={personalInfo.github} style={{ color: config.primaryColor, textDecoration: 'none' }}>
                  🔗 {personalInfo.github.replace('https://', '')}
                </a>
              </div>
            )}
            {personalInfo.linkedin && (
              <div>
                <a href={personalInfo.linkedin} style={{ color: config.primaryColor, textDecoration: 'none' }}>
                  💼 LinkedIn
                </a>
              </div>
            )}
            {personalInfo.portfolio && (
              <div>
                <a href={personalInfo.portfolio} style={{ color: config.primaryColor, textDecoration: 'none' }}>
                  🌐 Portfolio
                </a>
              </div>
            )}
            <div>📍 {personalInfo.city}, {personalInfo.country}</div>
          </div>
        </div>
      </div>

      {/* Professional Summary - Compact */}
      {professionalSummary && (
        <section style={{ marginBottom: '0.8rem' }}>
          <h2 style={{
            color: config.primaryColor,
            fontSize: '11pt',
            margin: '0 0 0.3rem 0',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Profil
          </h2>
          <p style={{ margin: '0', fontSize: '8.5pt', color: '#334155', textAlign: 'justify' }}>
            {professionalSummary}
          </p>
        </section>
      )}

      {/* Two Column Layout for Skills */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem', marginBottom: '0.8rem' }}>
        {/* Technical Skills - Compact Tags */}
        {skills.length > 0 && (
          <section>
            <h2 style={{
              color: config.primaryColor,
              fontSize: '11pt',
              margin: '0 0 0.3rem 0',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Tech Stack
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
              {skills.map((skill) => (
                <span
                  key={skill.id}
                  style={{
                    display: 'inline-block',
                    padding: '0.15rem 0.4rem',
                    backgroundColor: skill.level === 'Expert' || skill.level === 'Advanced' ? config.primaryColor : '#e2e8f0',
                    color: skill.level === 'Expert' || skill.level === 'Advanced' ? 'white' : '#334155',
                    borderRadius: '3px',
                    fontSize: '7.5pt',
                    fontWeight: '500',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Languages - Compact */}
        {languages.length > 0 && (
          <section>
            <h2 style={{
              color: config.primaryColor,
              fontSize: '11pt',
              margin: '0 0 0.3rem 0',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Sprachen
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', fontSize: '8pt' }}>
              {languages.map((lang) => (
                <div key={lang.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: '500' }}>{lang.language}</span>
                  <span style={{ color: config.accentColor, fontWeight: 'bold' }}>{lang.level}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Projects - Key Section for Developers */}
      {projects && projects.length > 0 && (
        <section style={{ marginBottom: '0.8rem' }}>
          <h2 style={{
            color: config.primaryColor,
            fontSize: '11pt',
            margin: '0 0 0.4rem 0',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Projekte
          </h2>
          {projects.map((project) => (
            <div key={project.id} style={{ marginBottom: '0.6rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h3 style={{
                  margin: '0',
                  fontSize: '9.5pt',
                  fontWeight: 'bold',
                  color: '#1e293b'
                }}>
                  {project.name}
                  {project.role && <span style={{ fontSize: '8pt', fontWeight: 'normal', color: '#64748b', marginLeft: '0.3rem' }}>• {project.role}</span>}
                </h3>
                <span style={{ fontSize: '7.5pt', color: '#64748b', whiteSpace: 'nowrap' }}>
                  {project.startDate} - {project.current ? 'Heute' : project.endDate}
                </span>
              </div>

              {/* Technology Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.2rem', margin: '0.2rem 0' }}>
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: '0.1rem 0.3rem',
                      backgroundColor: '#f1f5f9',
                      color: config.primaryColor,
                      borderRadius: '2px',
                      fontSize: '7pt',
                      fontWeight: '500',
                      border: `1px solid ${config.primaryColor}40`
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p style={{ margin: '0.2rem 0 0 0', fontSize: '8pt', color: '#475569' }}>
                {project.description}
              </p>

              {project.highlights && (
                <p style={{ margin: '0.2rem 0 0 0', fontSize: '8pt', color: '#334155', fontStyle: 'italic' }}>
                  <strong>Highlights:</strong> {project.highlights}
                </p>
              )}

              {/* Links */}
              <div style={{ display: 'flex', gap: '0.8rem', marginTop: '0.2rem', fontSize: '7.5pt' }}>
                {project.githubUrl && (
                  <a href={project.githubUrl} style={{ color: config.primaryColor, textDecoration: 'none' }}>
                    📂 GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} style={{ color: config.primaryColor, textDecoration: 'none' }}>
                    🌐 Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Work Experience - Compact */}
      {workExperience.length > 0 && (
        <section style={{ marginBottom: '0.8rem' }}>
          <h2 style={{
            color: config.primaryColor,
            fontSize: '11pt',
            margin: '0 0 0.4rem 0',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Berufserfahrung
          </h2>
          {workExperience.map((exp) => (
            <div key={exp.id} style={{ marginBottom: '0.6rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h3 style={{
                  margin: '0',
                  fontSize: '9.5pt',
                  fontWeight: 'bold',
                  color: '#1e293b'
                }}>
                  {exp.position}
                </h3>
                <span style={{ fontSize: '7.5pt', color: '#64748b', whiteSpace: 'nowrap' }}>
                  {exp.startDate} - {exp.current ? 'Heute' : exp.endDate}
                </span>
              </div>
              <p style={{
                margin: '0.1rem 0',
                fontSize: '8.5pt',
                color: '#64748b',
                fontWeight: '500'
              }}>
                {exp.company} • {exp.location}
              </p>
              <p style={{ margin: '0.2rem 0 0 0', fontSize: '8pt', color: '#475569' }}>
                {exp.description}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Education - Compact */}
      {education.length > 0 && (
        <section style={{ marginBottom: '0.8rem' }}>
          <h2 style={{
            color: config.primaryColor,
            fontSize: '11pt',
            margin: '0 0 0.4rem 0',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Ausbildung
          </h2>
          {education.map((edu) => (
            <div key={edu.id} style={{ marginBottom: '0.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h3 style={{
                  margin: '0',
                  fontSize: '9.5pt',
                  fontWeight: 'bold',
                  color: '#1e293b'
                }}>
                  {edu.degree}
                </h3>
                <span style={{ fontSize: '7.5pt', color: '#64748b', whiteSpace: 'nowrap' }}>
                  {edu.startDate} - {edu.current ? 'Heute' : edu.endDate}
                </span>
              </div>
              <p style={{
                margin: '0.1rem 0',
                fontSize: '8.5pt',
                color: '#64748b'
              }}>
                {edu.institution} • {edu.location}
              </p>
              {edu.description && (
                <p style={{ margin: '0.2rem 0 0 0', fontSize: '8pt', color: '#475569' }}>
                  {edu.description}
                </p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Certifications - Compact Grid */}
      {certifications.length > 0 && (
        <section style={{ marginBottom: '0.5rem' }}>
          <h2 style={{
            color: config.primaryColor,
            fontSize: '11pt',
            margin: '0 0 0.3rem 0',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Zertifikate
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.3rem' }}>
            {certifications.map((cert) => (
              <div
                key={cert.id}
                style={{
                  fontSize: '8pt',
                  padding: '0.3rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '3px',
                  borderLeft: `2px solid ${config.primaryColor}`
                }}
              >
                <strong style={{ color: '#1e293b', fontSize: '8.5pt' }}>{cert.name}</strong>
                <div style={{ color: '#64748b', fontSize: '7.5pt' }}>
                  {cert.issuer} • {cert.date}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
