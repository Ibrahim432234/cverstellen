import React from 'react';
import { CVData, TemplateConfig } from '../../types/cv';

interface Props {
  data: CVData;
  config: TemplateConfig;
}

export const ClassicTemplate: React.FC<Props> = ({ data, config }) => {
  const { personalInfo, professionalSummary, workExperience, education, skills, languages, certifications } = data;

  return (
    <div style={{
      fontFamily: config.fontFamily,
      maxWidth: '21cm',
      minHeight: '29.7cm',
      margin: '0 auto',
      backgroundColor: 'white',
      padding: '3rem',
      boxSizing: 'border-box'
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: `2px solid ${config.primaryColor}` }}>
        {personalInfo.profilePhoto && (
          <img
            src={personalInfo.profilePhoto}
            alt="Profile"
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginBottom: '1rem'
            }}
          />
        )}
        <h1 style={{
          margin: '0 0 1rem 0',
          color: config.primaryColor,
          fontSize: '2rem',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <div style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.8' }}>
          <p style={{ margin: '0.25rem 0' }}>
            {personalInfo.address}, {personalInfo.postalCode} {personalInfo.city}, {personalInfo.country}
          </p>
          <p style={{ margin: '0.25rem 0' }}>
            {personalInfo.phone} • {personalInfo.email}
          </p>
        </div>
      </div>

      {/* Professional Summary */}
      {professionalSummary && (
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{
            color: config.primaryColor,
            fontSize: '1.2rem',
            marginBottom: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            borderBottom: `1px solid ${config.primaryColor}`,
            paddingBottom: '0.5rem'
          }}>
            Professionelles Profil
          </h2>
          <p style={{ lineHeight: '1.7', color: '#334155', textAlign: 'justify' }}>
            {professionalSummary}
          </p>
        </section>
      )}

      {/* Work Experience */}
      {workExperience.length > 0 && (
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{
            color: config.primaryColor,
            fontSize: '1.2rem',
            marginBottom: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            borderBottom: `1px solid ${config.primaryColor}`,
            paddingBottom: '0.5rem'
          }}>
            Berufserfahrung
          </h2>
          {workExperience.map((exp) => (
            <div key={exp.id} style={{ marginBottom: '1.5rem' }}>
              <h3 style={{
                margin: '0 0 0.25rem 0',
                color: '#1e293b',
                fontSize: '1rem',
                fontWeight: 'bold'
              }}>
                {exp.position}
              </h3>
              <p style={{
                margin: '0.25rem 0',
                color: '#64748b',
                fontSize: '0.9rem',
                fontStyle: 'italic'
              }}>
                {exp.company}, {exp.location} | {exp.startDate} - {exp.current ? 'Heute' : exp.endDate}
              </p>
              <p style={{ margin: '0.5rem 0 0 0', color: '#475569', lineHeight: '1.6', textAlign: 'justify' }}>
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
            fontSize: '1.2rem',
            marginBottom: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            borderBottom: `1px solid ${config.primaryColor}`,
            paddingBottom: '0.5rem'
          }}>
            Ausbildung
          </h2>
          {education.map((edu) => (
            <div key={edu.id} style={{ marginBottom: '1.5rem' }}>
              <h3 style={{
                margin: '0 0 0.25rem 0',
                color: '#1e293b',
                fontSize: '1rem',
                fontWeight: 'bold'
              }}>
                {edu.degree}
              </h3>
              <p style={{
                margin: '0.25rem 0',
                color: '#64748b',
                fontSize: '0.9rem',
                fontStyle: 'italic'
              }}>
                {edu.institution}, {edu.location} | {edu.startDate} - {edu.current ? 'Heute' : edu.endDate}
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

      {/* Skills & Languages */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
        {skills.length > 0 && (
          <section>
            <h2 style={{
              color: config.primaryColor,
              fontSize: '1.2rem',
              marginBottom: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              borderBottom: `1px solid ${config.primaryColor}`,
              paddingBottom: '0.5rem'
            }}>
              Fähigkeiten
            </h2>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#475569', lineHeight: '1.8' }}>
              {skills.map((skill) => (
                <li key={skill.id}>
                  <strong>{skill.name}</strong> ({skill.level})
                </li>
              ))}
            </ul>
          </section>
        )}

        {languages.length > 0 && (
          <section>
            <h2 style={{
              color: config.primaryColor,
              fontSize: '1.2rem',
              marginBottom: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              borderBottom: `1px solid ${config.primaryColor}`,
              paddingBottom: '0.5rem'
            }}>
              Sprachen
            </h2>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#475569', lineHeight: '1.8' }}>
              {languages.map((lang) => (
                <li key={lang.id}>
                  <strong>{lang.language}</strong> ({lang.level})
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Certifications */}
      {certifications.length > 0 && (
        <section>
          <h2 style={{
            color: config.primaryColor,
            fontSize: '1.2rem',
            marginBottom: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            borderBottom: `1px solid ${config.primaryColor}`,
            paddingBottom: '0.5rem'
          }}>
            Zertifikate
          </h2>
          {certifications.map((cert) => (
            <div key={cert.id} style={{ marginBottom: '0.75rem' }}>
              <strong style={{ color: '#1e293b' }}>{cert.name}</strong>
              <span style={{ color: '#64748b', fontSize: '0.9rem' }}> - {cert.issuer}, {cert.date}</span>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};
