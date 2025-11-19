import React from 'react';
import { CVData, TemplateConfig } from '../../types/cv';

interface Props {
  data: CVData;
  config: TemplateConfig;
}

export const CompactTemplate: React.FC<Props> = ({ data, config }) => {
  const { personalInfo, professionalSummary, workExperience, education, projects, skills, languages, certifications } = data;

  return (
    <div style={{
      fontFamily: "'Arial', 'Helvetica', sans-serif",
      maxWidth: '21cm',
      minHeight: '29.7cm',
      margin: '0 auto',
      backgroundColor: '#ffffff',
      padding: '1cm 1.2cm',
      boxSizing: 'border-box',
      fontSize: '8.5pt',
      lineHeight: '1.25',
      color: '#1e293b'
    }}>
      {/* Ultra Compact Header */}
      <div style={{
        display: 'flex',
        gap: '0.8rem',
        marginBottom: '0.5rem',
        paddingBottom: '0.4rem',
        borderBottom: `1.5px solid ${config.primaryColor}`,
        alignItems: 'center'
      }}>
        {personalInfo.profilePhoto && (
          <img
            src={personalInfo.profilePhoto}
            alt="Profile"
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '4px',
              objectFit: 'cover'
            }}
          />
        )}
        <div style={{ flex: 1 }}>
          <h1 style={{
            margin: '0',
            fontSize: '16pt',
            fontWeight: 'bold',
            color: config.primaryColor,
            letterSpacing: '-0.3px'
          }}>
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            fontSize: '7.5pt',
            color: '#475569',
            marginTop: '0.2rem'
          }}>
            <span>{personalInfo.email}</span>
            <span>•</span>
            <span>{personalInfo.phone}</span>
            <span>•</span>
            <span>{personalInfo.city}, {personalInfo.country}</span>
            {personalInfo.github && (
              <>
                <span>•</span>
                <a href={personalInfo.github} style={{ color: config.primaryColor, textDecoration: 'none' }}>GitHub</a>
              </>
            )}
            {personalInfo.linkedin && (
              <>
                <span>•</span>
                <a href={personalInfo.linkedin} style={{ color: config.primaryColor, textDecoration: 'none' }}>LinkedIn</a>
              </>
            )}
            {personalInfo.portfolio && (
              <>
                <span>•</span>
                <a href={personalInfo.portfolio} style={{ color: config.primaryColor, textDecoration: 'none' }}>Portfolio</a>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Two Column Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '0.8rem' }}>
        {/* Left Column - Skills, Languages, Certifications */}
        <div>
          {/* Skills */}
          {skills.length > 0 && (
            <section style={{ marginBottom: '0.6rem' }}>
              <h2 style={{
                fontSize: '9.5pt',
                fontWeight: 'bold',
                color: config.primaryColor,
                margin: '0 0 0.25rem 0',
                textTransform: 'uppercase',
                letterSpacing: '0.3px'
              }}>
                Skills
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.2rem' }}>
                {skills.map((skill) => (
                  <span
                    key={skill.id}
                    style={{
                      padding: '0.1rem 0.3rem',
                      backgroundColor: skill.level === 'Expert' || skill.level === 'Advanced' ? config.primaryColor : '#f1f5f9',
                      color: skill.level === 'Expert' || skill.level === 'Advanced' ? 'white' : '#334155',
                      borderRadius: '2px',
                      fontSize: '7pt',
                      fontWeight: '500',
                      lineHeight: '1.4'
                    }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Languages */}
          {languages.length > 0 && (
            <section style={{ marginBottom: '0.6rem' }}>
              <h2 style={{
                fontSize: '9.5pt',
                fontWeight: 'bold',
                color: config.primaryColor,
                margin: '0 0 0.25rem 0',
                textTransform: 'uppercase',
                letterSpacing: '0.3px'
              }}>
                Sprachen
              </h2>
              {languages.map((lang) => (
                <div key={lang.id} style={{ fontSize: '7.5pt', marginBottom: '0.1rem' }}>
                  <strong>{lang.language}</strong> <span style={{ color: '#64748b' }}>({lang.level})</span>
                </div>
              ))}
            </section>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <section style={{ marginBottom: '0.6rem' }}>
              <h2 style={{
                fontSize: '9.5pt',
                fontWeight: 'bold',
                color: config.primaryColor,
                margin: '0 0 0.25rem 0',
                textTransform: 'uppercase',
                letterSpacing: '0.3px'
              }}>
                Zertifikate
              </h2>
              {certifications.map((cert) => (
                <div key={cert.id} style={{ marginBottom: '0.3rem', fontSize: '7.5pt' }}>
                  <div style={{ fontWeight: 'bold', color: '#1e293b' }}>{cert.name}</div>
                  <div style={{ color: '#64748b', fontSize: '7pt' }}>{cert.issuer}, {cert.date}</div>
                </div>
              ))}
            </section>
          )}

          {/* Education */}
          {education.length > 0 && (
            <section>
              <h2 style={{
                fontSize: '9.5pt',
                fontWeight: 'bold',
                color: config.primaryColor,
                margin: '0 0 0.25rem 0',
                textTransform: 'uppercase',
                letterSpacing: '0.3px'
              }}>
                Ausbildung
              </h2>
              {education.map((edu) => (
                <div key={edu.id} style={{ marginBottom: '0.4rem' }}>
                  <div style={{ fontSize: '8pt', fontWeight: 'bold' }}>{edu.degree}</div>
                  <div style={{ fontSize: '7.5pt', color: '#64748b' }}>{edu.institution}</div>
                  <div style={{ fontSize: '7pt', color: '#64748b' }}>
                    {edu.startDate} - {edu.current ? 'Heute' : edu.endDate}
                  </div>
                </div>
              ))}
            </section>
          )}
        </div>

        {/* Right Column - Summary, Projects, Experience */}
        <div>
          {/* Summary */}
          {professionalSummary && (
            <section style={{ marginBottom: '0.6rem' }}>
              <h2 style={{
                fontSize: '9.5pt',
                fontWeight: 'bold',
                color: config.primaryColor,
                margin: '0 0 0.25rem 0',
                textTransform: 'uppercase',
                letterSpacing: '0.3px'
              }}>
                Profil
              </h2>
              <p style={{ margin: '0', fontSize: '8pt', textAlign: 'justify' }}>
                {professionalSummary}
              </p>
            </section>
          )}

          {/* Projects */}
          {projects && projects.length > 0 && (
            <section style={{ marginBottom: '0.6rem' }}>
              <h2 style={{
                fontSize: '9.5pt',
                fontWeight: 'bold',
                color: config.primaryColor,
                margin: '0 0 0.3rem 0',
                textTransform: 'uppercase',
                letterSpacing: '0.3px'
              }}>
                Projekte
              </h2>
              {projects.map((project) => (
                <div key={project.id} style={{ marginBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h3 style={{ margin: '0', fontSize: '9pt', fontWeight: 'bold' }}>
                      {project.name}
                    </h3>
                    <span style={{ fontSize: '7pt', color: '#64748b', whiteSpace: 'nowrap', marginLeft: '0.3rem' }}>
                      {project.startDate} - {project.current ? 'Heute' : project.endDate}
                    </span>
                  </div>

                  {project.technologies.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.2rem', margin: '0.15rem 0' }}>
                      {project.technologies.slice(0, 6).map((tech, idx) => (
                        <span
                          key={idx}
                          style={{
                            padding: '0.05rem 0.25rem',
                            backgroundColor: '#f1f5f9',
                            color: config.primaryColor,
                            fontSize: '6.5pt',
                            borderRadius: '2px',
                            fontWeight: '500'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <p style={{ margin: '0.15rem 0 0 0', fontSize: '7.5pt' }}>
                    {project.description}
                  </p>

                  {(project.githubUrl || project.liveUrl) && (
                    <div style={{ fontSize: '7pt', marginTop: '0.1rem' }}>
                      {project.githubUrl && (
                        <a href={project.githubUrl} style={{ color: config.primaryColor, marginRight: '0.5rem', textDecoration: 'none' }}>
                          GitHub
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} style={{ color: config.primaryColor, textDecoration: 'none' }}>
                          Live
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </section>
          )}

          {/* Work Experience */}
          {workExperience.length > 0 && (
            <section>
              <h2 style={{
                fontSize: '9.5pt',
                fontWeight: 'bold',
                color: config.primaryColor,
                margin: '0 0 0.3rem 0',
                textTransform: 'uppercase',
                letterSpacing: '0.3px'
              }}>
                Berufserfahrung
              </h2>
              {workExperience.map((exp) => (
                <div key={exp.id} style={{ marginBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h3 style={{ margin: '0', fontSize: '9pt', fontWeight: 'bold' }}>
                      {exp.position}
                    </h3>
                    <span style={{ fontSize: '7pt', color: '#64748b', whiteSpace: 'nowrap', marginLeft: '0.3rem' }}>
                      {exp.startDate} - {exp.current ? 'Heute' : exp.endDate}
                    </span>
                  </div>
                  <div style={{ fontSize: '8pt', color: '#64748b', margin: '0.1rem 0' }}>
                    {exp.company} • {exp.location}
                  </div>
                  <p style={{ margin: '0.15rem 0 0 0', fontSize: '7.5pt' }}>
                    {exp.description}
                  </p>
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  );
};
