import React from 'react';
import { CVData, TemplateConfig } from '../../types/cv';

interface Props {
  data: CVData;
  config: TemplateConfig;
}

export const ModernTemplate: React.FC<Props> = ({ data, config }) => {
  const { personalInfo, professionalSummary, workExperience, education, projects, skills, languages, certifications } = data;

  return (
    <div style={{
      fontFamily: config.fontFamily,
      maxWidth: '21cm',
      minHeight: '29.7cm',
      margin: '0 auto',
      backgroundColor: 'white',
      padding: '2rem',
      boxSizing: 'border-box'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '2rem',
        marginBottom: '2rem',
        paddingBottom: '1.5rem',
        borderBottom: `3px solid ${config.primaryColor}`
      }}>
        {personalInfo.profilePhoto && (
          <img
            src={personalInfo.profilePhoto}
            alt="Profile"
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: `4px solid ${config.primaryColor}`
            }}
          />
        )}
        <div style={{ flex: 1 }}>
          <h1 style={{
            margin: '0 0 0.5rem 0',
            color: config.primaryColor,
            fontSize: '2.5rem',
            fontWeight: 'bold'
          }}>
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
          <div style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
            <p style={{ margin: '0.25rem 0' }}>{personalInfo.email}</p>
            <p style={{ margin: '0.25rem 0' }}>{personalInfo.phone}</p>
            <p style={{ margin: '0.25rem 0' }}>
              {personalInfo.address}, {personalInfo.postalCode} {personalInfo.city}, {personalInfo.country}
            </p>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      {professionalSummary && (
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{
            color: config.primaryColor,
            fontSize: '1.4rem',
            marginBottom: '0.75rem',
            borderLeft: `4px solid ${config.accentColor}`,
            paddingLeft: '1rem'
          }}>
            Profil
          </h2>
          <p style={{ lineHeight: '1.6', color: '#475569', margin: '0' }}>
            {professionalSummary}
          </p>
        </section>
      )}

      {/* Work Experience */}
      {workExperience.length > 0 && (
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{
            color: config.primaryColor,
            fontSize: '1.4rem',
            marginBottom: '0.75rem',
            borderLeft: `4px solid ${config.accentColor}`,
            paddingLeft: '1rem'
          }}>
            Berufserfahrung
          </h2>
          {workExperience.map((exp) => (
            <div key={exp.id} style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h3 style={{
                  margin: '0 0 0.25rem 0',
                  color: '#1e293b',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>
                  {exp.position}
                </h3>
                <span style={{
                  color: config.accentColor,
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  {exp.startDate} - {exp.current ? 'Heute' : exp.endDate}
                </span>
              </div>
              <p style={{
                margin: '0.25rem 0',
                color: '#64748b',
                fontSize: '0.95rem',
                fontWeight: '500'
              }}>
                {exp.company} • {exp.location}
              </p>
              <p style={{ margin: '0.5rem 0 0 0', color: '#475569', lineHeight: '1.6' }}>
                {exp.description}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{
            color: config.primaryColor,
            fontSize: '1.4rem',
            marginBottom: '0.75rem',
            borderLeft: `4px solid ${config.accentColor}`,
            paddingLeft: '1rem'
          }}>
            Ausbildung
          </h2>
          {education.map((edu) => (
            <div key={edu.id} style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h3 style={{
                  margin: '0 0 0.25rem 0',
                  color: '#1e293b',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>
                  {edu.degree}
                </h3>
                <span style={{
                  color: config.accentColor,
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  {edu.startDate} - {edu.current ? 'Heute' : edu.endDate}
                </span>
              </div>
              <p style={{
                margin: '0.25rem 0',
                color: '#64748b',
                fontSize: '0.95rem',
                fontWeight: '500'
              }}>
                {edu.institution} • {edu.location}
              </p>
              {edu.description && (
                <p style={{ margin: '0.5rem 0 0 0', color: '#475569', lineHeight: '1.6' }}>
                  {edu.description}
                </p>
              )}
            </div>
          ))}
        </section>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        {/* Skills */}
        {skills.length > 0 && (
          <section>
            <h2 style={{
              color: config.primaryColor,
              fontSize: '1.4rem',
              marginBottom: '0.75rem',
              borderLeft: `4px solid ${config.accentColor}`,
              paddingLeft: '1rem'
            }}>
              Fähigkeiten
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {skills.map((skill) => (
                <div key={skill.id}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '0.25rem'
                  }}>
                    <span style={{ color: '#1e293b', fontWeight: '500' }}>{skill.name}</span>
                    <span style={{ color: '#64748b', fontSize: '0.9rem' }}>{skill.level}</span>
                  </div>
                  <div style={{
                    height: '6px',
                    backgroundColor: '#e2e8f0',
                    borderRadius: '3px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      height: '100%',
                      backgroundColor: config.accentColor,
                      width: skill.level === 'Expert' ? '100%' :
                             skill.level === 'Advanced' ? '75%' :
                             skill.level === 'Intermediate' ? '50%' : '25%'
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Languages */}
        {languages.length > 0 && (
          <section>
            <h2 style={{
              color: config.primaryColor,
              fontSize: '1.4rem',
              marginBottom: '0.75rem',
              borderLeft: `4px solid ${config.accentColor}`,
              paddingLeft: '1rem'
            }}>
              Sprachen
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {languages.map((lang) => (
                <div key={lang.id} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0.5rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '4px'
                }}>
                  <span style={{ color: '#1e293b', fontWeight: '500' }}>{lang.language}</span>
                  <span style={{ color: config.accentColor, fontWeight: '500' }}>{lang.level}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Certifications */}
      {certifications.length > 0 && (
        <section style={{ marginTop: '2rem' }}>
          <h2 style={{
            color: config.primaryColor,
            fontSize: '1.4rem',
            marginBottom: '0.75rem',
            borderLeft: `4px solid ${config.accentColor}`,
            paddingLeft: '1rem'
          }}>
            Zertifikate
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {certifications.map((cert) => (
              <div key={cert.id} style={{
                padding: '1rem',
                backgroundColor: '#f8fafc',
                borderRadius: '4px',
                borderLeft: `3px solid ${config.accentColor}`
              }}>
                <h4 style={{ margin: '0 0 0.25rem 0', color: '#1e293b' }}>{cert.name}</h4>
                <p style={{ margin: '0.25rem 0', color: '#64748b', fontSize: '0.9rem' }}>
                  {cert.issuer} • {cert.date}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
