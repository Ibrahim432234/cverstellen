import React, { useState } from 'react';
import { CVData, WorkExperience, Education, Skill, Language, Certification, Project } from '../types/cv';

interface Props {
  data: CVData;
  onChange: (data: CVData) => void;
  onPhotoUpload: (photoUrl: string) => void;
}

export const CVForm: React.FC<Props> = ({ data, onChange, onPhotoUpload }) => {
  const [activeSection, setActiveSection] = useState<string>('personal');

  const updatePersonalInfo = (field: string, value: string) => {
    onChange({
      ...data,
      personalInfo: { ...data.personalInfo, [field]: value }
    });
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        updatePersonalInfo('profilePhoto', result);
        onPhotoUpload(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const addWorkExperience = () => {
    const newExp: WorkExperience = {
      id: Date.now().toString(),
      position: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    };
    onChange({ ...data, workExperience: [...data.workExperience, newExp] });
  };

  const updateWorkExperience = (id: string, field: string, value: string | boolean) => {
    onChange({
      ...data,
      workExperience: data.workExperience.map(exp =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    });
  };

  const removeWorkExperience = (id: string) => {
    onChange({
      ...data,
      workExperience: data.workExperience.filter(exp => exp.id !== id)
    });
  };

  const addEducation = () => {
    const newEdu: Education = {
      id: Date.now().toString(),
      degree: '',
      institution: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    };
    onChange({ ...data, education: [...data.education, newEdu] });
  };

  const updateEducation = (id: string, field: string, value: string | boolean) => {
    onChange({
      ...data,
      education: data.education.map(edu =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    });
  };

  const removeEducation = (id: string) => {
    onChange({
      ...data,
      education: data.education.filter(edu => edu.id !== id)
    });
  };

  const addSkill = () => {
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: '',
      level: 'Intermediate'
    };
    onChange({ ...data, skills: [...data.skills, newSkill] });
  };

  const updateSkill = (id: string, field: string, value: string) => {
    onChange({
      ...data,
      skills: data.skills.map(skill =>
        skill.id === id ? { ...skill, [field]: value } : skill
      )
    });
  };

  const removeSkill = (id: string) => {
    onChange({
      ...data,
      skills: data.skills.filter(skill => skill.id !== id)
    });
  };

  const addLanguage = () => {
    const newLang: Language = {
      id: Date.now().toString(),
      language: '',
      level: 'B2'
    };
    onChange({ ...data, languages: [...data.languages, newLang] });
  };

  const updateLanguage = (id: string, field: string, value: string) => {
    onChange({
      ...data,
      languages: data.languages.map(lang =>
        lang.id === id ? { ...lang, [field]: value } : lang
      )
    });
  };

  const removeLanguage = (id: string) => {
    onChange({
      ...data,
      languages: data.languages.filter(lang => lang.id !== id)
    });
  };

  const addCertification = () => {
    const newCert: Certification = {
      id: Date.now().toString(),
      name: '',
      issuer: '',
      date: ''
    };
    onChange({ ...data, certifications: [...data.certifications, newCert] });
  };

  const updateCertification = (id: string, field: string, value: string) => {
    onChange({
      ...data,
      certifications: data.certifications.map(cert =>
        cert.id === id ? { ...cert, [field]: value } : cert
      )
    });
  };

  const removeCertification = (id: string) => {
    onChange({
      ...data,
      certifications: data.certifications.filter(cert => cert.id !== id)
    });
  };

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      name: '',
      description: '',
      technologies: [],
      role: '',
      startDate: '',
      endDate: '',
      current: false,
      githubUrl: '',
      liveUrl: '',
      highlights: ''
    };
    onChange({ ...data, projects: [...data.projects, newProject] });
  };

  const updateProject = (id: string, field: string, value: string | boolean | string[]) => {
    onChange({
      ...data,
      projects: data.projects.map(project =>
        project.id === id ? { ...project, [field]: value } : project
      )
    });
  };

  const removeProject = (id: string) => {
    onChange({
      ...data,
      projects: data.projects.filter(project => project.id !== id)
    });
  };

  const updateProjectTechnologies = (id: string, techString: string) => {
    const technologies = techString.split(',').map(t => t.trim()).filter(t => t.length > 0);
    updateProject(id, 'technologies', technologies);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.5rem',
    border: '1px solid #cbd5e1',
    borderRadius: '4px',
    fontSize: '0.95rem',
    marginBottom: '0.5rem'
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '0.25rem',
    fontWeight: '500',
    color: '#334155'
  };

  const buttonStyle: React.CSSProperties = {
    padding: '0.5rem 1rem',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '500'
  };

  const sections = [
    { id: 'personal', label: 'Persönliche Daten' },
    { id: 'summary', label: 'Profil' },
    { id: 'projects', label: 'Projekte' },
    { id: 'experience', label: 'Berufserfahrung' },
    { id: 'education', label: 'Ausbildung' },
    { id: 'skills', label: 'Fähigkeiten' },
    { id: 'languages', label: 'Sprachen' },
    { id: 'certifications', label: 'Zertifikate' }
  ];

  return (
    <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '1.5rem' }}>
      {/* Section Navigation */}
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        marginBottom: '1.5rem',
        flexWrap: 'wrap',
        borderBottom: '2px solid #e2e8f0',
        paddingBottom: '1rem'
      }}>
        {sections.map(section => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: activeSection === section.id ? '#3b82f6' : '#f1f5f9',
              color: activeSection === section.id ? 'white' : '#64748b',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: '500'
            }}
          >
            {section.label}
          </button>
        ))}
      </div>

      {/* Personal Information */}
      {activeSection === 'personal' && (
        <div>
          <h3 style={{ marginTop: 0, color: '#1e293b' }}>Persönliche Daten</h3>

          <div style={{ marginBottom: '1rem' }}>
            <label style={labelStyle}>Profilfoto</label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              style={inputStyle}
            />
            {data.personalInfo.profilePhoto && (
              <img
                src={data.personalInfo.profilePhoto}
                alt="Preview"
                style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginTop: '0.5rem' }}
              />
            )}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={labelStyle}>Vorname *</label>
              <input
                type="text"
                value={data.personalInfo.firstName}
                onChange={(e) => updatePersonalInfo('firstName', e.target.value)}
                style={inputStyle}
                placeholder="Max"
              />
            </div>
            <div>
              <label style={labelStyle}>Nachname *</label>
              <input
                type="text"
                value={data.personalInfo.lastName}
                onChange={(e) => updatePersonalInfo('lastName', e.target.value)}
                style={inputStyle}
                placeholder="Mustermann"
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={labelStyle}>E-Mail *</label>
              <input
                type="email"
                value={data.personalInfo.email}
                onChange={(e) => updatePersonalInfo('email', e.target.value)}
                style={inputStyle}
                placeholder="max.mustermann@beispiel.de"
              />
            </div>
            <div>
              <label style={labelStyle}>Telefon *</label>
              <input
                type="tel"
                value={data.personalInfo.phone}
                onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                style={inputStyle}
                placeholder="+49 123 456789"
              />
            </div>
          </div>

          <div>
            <label style={labelStyle}>Adresse *</label>
            <input
              type="text"
              value={data.personalInfo.address}
              onChange={(e) => updatePersonalInfo('address', e.target.value)}
              style={inputStyle}
              placeholder="Musterstraße 123"
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '1rem' }}>
            <div>
              <label style={labelStyle}>PLZ *</label>
              <input
                type="text"
                value={data.personalInfo.postalCode}
                onChange={(e) => updatePersonalInfo('postalCode', e.target.value)}
                style={inputStyle}
                placeholder="12345"
              />
            </div>
            <div>
              <label style={labelStyle}>Stadt *</label>
              <input
                type="text"
                value={data.personalInfo.city}
                onChange={(e) => updatePersonalInfo('city', e.target.value)}
                style={inputStyle}
                placeholder="Berlin"
              />
            </div>
            <div>
              <label style={labelStyle}>Land *</label>
              <input
                type="text"
                value={data.personalInfo.country}
                onChange={(e) => updatePersonalInfo('country', e.target.value)}
                style={inputStyle}
                placeholder="Deutschland"
              />
            </div>
          </div>

          <h4 style={{ marginTop: '1.5rem', marginBottom: '0.75rem', color: '#475569' }}>
            Online-Profile (optional)
          </h4>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={labelStyle}>GitHub</label>
              <input
                type="url"
                value={data.personalInfo.github || ''}
                onChange={(e) => updatePersonalInfo('github', e.target.value)}
                style={inputStyle}
                placeholder="https://github.com/username"
              />
            </div>
            <div>
              <label style={labelStyle}>LinkedIn</label>
              <input
                type="url"
                value={data.personalInfo.linkedin || ''}
                onChange={(e) => updatePersonalInfo('linkedin', e.target.value)}
                style={inputStyle}
                placeholder="https://linkedin.com/in/username"
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={labelStyle}>Portfolio</label>
              <input
                type="url"
                value={data.personalInfo.portfolio || ''}
                onChange={(e) => updatePersonalInfo('portfolio', e.target.value)}
                style={inputStyle}
                placeholder="https://portfolio.com"
              />
            </div>
            <div>
              <label style={labelStyle}>Website</label>
              <input
                type="url"
                value={data.personalInfo.website || ''}
                onChange={(e) => updatePersonalInfo('website', e.target.value)}
                style={inputStyle}
                placeholder="https://website.com"
              />
            </div>
          </div>
        </div>
      )}

      {/* Professional Summary */}
      {activeSection === 'summary' && (
        <div>
          <h3 style={{ marginTop: 0, color: '#1e293b' }}>Professionelles Profil</h3>
          <label style={labelStyle}>Über mich</label>
          <textarea
            value={data.professionalSummary}
            onChange={(e) => onChange({ ...data, professionalSummary: e.target.value })}
            style={{ ...inputStyle, minHeight: '150px', resize: 'vertical' }}
            placeholder="Beschreiben Sie kurz Ihre berufliche Erfahrung, Fähigkeiten und Karriereziele..."
          />
        </div>
      )}

      {/* Projects */}
      {activeSection === 'projects' && (
        <div>
          <h3 style={{ marginTop: 0, color: '#1e293b' }}>Projekte</h3>
          {data.projects.map((project) => (
            <div key={project.id} style={{
              border: '1px solid #e2e8f0',
              borderRadius: '4px',
              padding: '1rem',
              marginBottom: '1rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h4 style={{ margin: 0, color: '#475569' }}>Projekt</h4>
                <button
                  onClick={() => removeProject(project.id)}
                  style={{
                    ...buttonStyle,
                    backgroundColor: '#ef4444',
                    padding: '0.25rem 0.75rem'
                  }}
                >
                  Entfernen
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>Projektname</label>
                  <input
                    type="text"
                    value={project.name}
                    onChange={(e) => updateProject(project.id, 'name', e.target.value)}
                    style={inputStyle}
                    placeholder="z.B. E-Commerce Plattform"
                  />
                </div>
                <div>
                  <label style={labelStyle}>Rolle (optional)</label>
                  <input
                    type="text"
                    value={project.role || ''}
                    onChange={(e) => updateProject(project.id, 'role', e.target.value)}
                    style={inputStyle}
                    placeholder="z.B. Lead Developer"
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Technologien (kommagetrennt)</label>
                <input
                  type="text"
                  value={project.technologies.join(', ')}
                  onChange={(e) => updateProjectTechnologies(project.id, e.target.value)}
                  style={inputStyle}
                  placeholder="z.B. React, TypeScript, Node.js, MongoDB"
                />
                <small style={{ color: '#64748b', fontSize: '0.85rem' }}>
                  Tipp: Mehrere Technologien mit Komma trennen
                </small>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginTop: '0.5rem' }}>
                <div>
                  <label style={labelStyle}>Von</label>
                  <input
                    type="text"
                    value={project.startDate}
                    onChange={(e) => updateProject(project.id, 'startDate', e.target.value)}
                    style={inputStyle}
                    placeholder="01/2023"
                  />
                </div>
                <div>
                  <label style={labelStyle}>Bis</label>
                  <input
                    type="text"
                    value={project.endDate}
                    onChange={(e) => updateProject(project.id, 'endDate', e.target.value)}
                    style={inputStyle}
                    placeholder="06/2023"
                    disabled={project.current}
                  />
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                  <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginBottom: '0.5rem' }}>
                    <input
                      type="checkbox"
                      checked={project.current}
                      onChange={(e) => updateProject(project.id, 'current', e.target.checked)}
                      style={{ marginRight: '0.5rem' }}
                    />
                    Aktuell
                  </label>
                </div>
              </div>

              <div>
                <label style={labelStyle}>Beschreibung</label>
                <textarea
                  value={project.description}
                  onChange={(e) => updateProject(project.id, 'description', e.target.value)}
                  style={{ ...inputStyle, minHeight: '80px', resize: 'vertical' }}
                  placeholder="Beschreiben Sie das Projekt und Ihre Verantwortlichkeiten..."
                />
              </div>

              <div>
                <label style={labelStyle}>Highlights / Erfolge</label>
                <textarea
                  value={project.highlights}
                  onChange={(e) => updateProject(project.id, 'highlights', e.target.value)}
                  style={{ ...inputStyle, minHeight: '60px', resize: 'vertical' }}
                  placeholder="z.B. 50% Performance-Verbesserung, 10.000+ Nutzer, Award gewonnen..."
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>GitHub URL (optional)</label>
                  <input
                    type="url"
                    value={project.githubUrl || ''}
                    onChange={(e) => updateProject(project.id, 'githubUrl', e.target.value)}
                    style={inputStyle}
                    placeholder="https://github.com/username/project"
                  />
                </div>
                <div>
                  <label style={labelStyle}>Live Demo URL (optional)</label>
                  <input
                    type="url"
                    value={project.liveUrl || ''}
                    onChange={(e) => updateProject(project.id, 'liveUrl', e.target.value)}
                    style={inputStyle}
                    placeholder="https://project-demo.com"
                  />
                </div>
              </div>
            </div>
          ))}
          <button onClick={addProject} style={buttonStyle}>
            + Projekt hinzufügen
          </button>
        </div>
      )}

      {/* Work Experience */}
      {activeSection === 'experience' && (
        <div>
          <h3 style={{ marginTop: 0, color: '#1e293b' }}>Berufserfahrung</h3>
          {data.workExperience.map((exp) => (
            <div key={exp.id} style={{
              border: '1px solid #e2e8f0',
              borderRadius: '4px',
              padding: '1rem',
              marginBottom: '1rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h4 style={{ margin: 0, color: '#475569' }}>Position</h4>
                <button
                  onClick={() => removeWorkExperience(exp.id)}
                  style={{
                    ...buttonStyle,
                    backgroundColor: '#ef4444',
                    padding: '0.25rem 0.75rem'
                  }}
                >
                  Entfernen
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>Position</label>
                  <input
                    type="text"
                    value={exp.position}
                    onChange={(e) => updateWorkExperience(exp.id, 'position', e.target.value)}
                    style={inputStyle}
                    placeholder="z.B. Software Engineer"
                  />
                </div>
                <div>
                  <label style={labelStyle}>Unternehmen</label>
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) => updateWorkExperience(exp.id, 'company', e.target.value)}
                    style={inputStyle}
                    placeholder="z.B. Tech GmbH"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>Standort</label>
                  <input
                    type="text"
                    value={exp.location}
                    onChange={(e) => updateWorkExperience(exp.id, 'location', e.target.value)}
                    style={inputStyle}
                    placeholder="z.B. Berlin"
                  />
                </div>
                <div>
                  <label style={labelStyle}>Von</label>
                  <input
                    type="text"
                    value={exp.startDate}
                    onChange={(e) => updateWorkExperience(exp.id, 'startDate', e.target.value)}
                    style={inputStyle}
                    placeholder="01/2020"
                  />
                </div>
                <div>
                  <label style={labelStyle}>Bis</label>
                  <input
                    type="text"
                    value={exp.endDate}
                    onChange={(e) => updateWorkExperience(exp.id, 'endDate', e.target.value)}
                    style={inputStyle}
                    placeholder="12/2023"
                    disabled={exp.current}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={exp.current}
                    onChange={(e) => updateWorkExperience(exp.id, 'current', e.target.checked)}
                    style={{ marginRight: '0.5rem' }}
                  />
                  Aktuell in dieser Position
                </label>
              </div>

              <div>
                <label style={labelStyle}>Beschreibung</label>
                <textarea
                  value={exp.description}
                  onChange={(e) => updateWorkExperience(exp.id, 'description', e.target.value)}
                  style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' }}
                  placeholder="Beschreiben Sie Ihre Aufgaben und Erfolge..."
                />
              </div>
            </div>
          ))}
          <button onClick={addWorkExperience} style={buttonStyle}>
            + Berufserfahrung hinzufügen
          </button>
        </div>
      )}

      {/* Education */}
      {activeSection === 'education' && (
        <div>
          <h3 style={{ marginTop: 0, color: '#1e293b' }}>Ausbildung</h3>
          {data.education.map((edu) => (
            <div key={edu.id} style={{
              border: '1px solid #e2e8f0',
              borderRadius: '4px',
              padding: '1rem',
              marginBottom: '1rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h4 style={{ margin: 0, color: '#475569' }}>Ausbildung</h4>
                <button
                  onClick={() => removeEducation(edu.id)}
                  style={{
                    ...buttonStyle,
                    backgroundColor: '#ef4444',
                    padding: '0.25rem 0.75rem'
                  }}
                >
                  Entfernen
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>Abschluss</label>
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                    style={inputStyle}
                    placeholder="z.B. Bachelor of Science"
                  />
                </div>
                <div>
                  <label style={labelStyle}>Institution</label>
                  <input
                    type="text"
                    value={edu.institution}
                    onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                    style={inputStyle}
                    placeholder="z.B. Universität Berlin"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>Standort</label>
                  <input
                    type="text"
                    value={edu.location}
                    onChange={(e) => updateEducation(edu.id, 'location', e.target.value)}
                    style={inputStyle}
                    placeholder="z.B. Berlin"
                  />
                </div>
                <div>
                  <label style={labelStyle}>Von</label>
                  <input
                    type="text"
                    value={edu.startDate}
                    onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                    style={inputStyle}
                    placeholder="09/2015"
                  />
                </div>
                <div>
                  <label style={labelStyle}>Bis</label>
                  <input
                    type="text"
                    value={edu.endDate}
                    onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                    style={inputStyle}
                    placeholder="06/2019"
                    disabled={edu.current}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={edu.current}
                    onChange={(e) => updateEducation(edu.id, 'current', e.target.checked)}
                    style={{ marginRight: '0.5rem' }}
                  />
                  Aktuell in Ausbildung
                </label>
              </div>

              <div>
                <label style={labelStyle}>Beschreibung (optional)</label>
                <textarea
                  value={edu.description}
                  onChange={(e) => updateEducation(edu.id, 'description', e.target.value)}
                  style={{ ...inputStyle, minHeight: '80px', resize: 'vertical' }}
                  placeholder="z.B. Schwerpunkte, Abschlussnote..."
                />
              </div>
            </div>
          ))}
          <button onClick={addEducation} style={buttonStyle}>
            + Ausbildung hinzufügen
          </button>
        </div>
      )}

      {/* Skills */}
      {activeSection === 'skills' && (
        <div>
          <h3 style={{ marginTop: 0, color: '#1e293b' }}>Fähigkeiten</h3>
          {data.skills.map((skill) => (
            <div key={skill.id} style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr auto',
              gap: '1rem',
              alignItems: 'end',
              marginBottom: '0.75rem'
            }}>
              <div>
                <label style={labelStyle}>Fähigkeit</label>
                <input
                  type="text"
                  value={skill.name}
                  onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
                  style={inputStyle}
                  placeholder="z.B. JavaScript"
                />
              </div>
              <div>
                <label style={labelStyle}>Level</label>
                <select
                  value={skill.level}
                  onChange={(e) => updateSkill(skill.id, 'level', e.target.value)}
                  style={inputStyle}
                >
                  <option value="Beginner">Anfänger</option>
                  <option value="Intermediate">Fortgeschritten</option>
                  <option value="Advanced">Sehr gut</option>
                  <option value="Expert">Experte</option>
                </select>
              </div>
              <button
                onClick={() => removeSkill(skill.id)}
                style={{
                  ...buttonStyle,
                  backgroundColor: '#ef4444',
                  padding: '0.5rem 0.75rem',
                  marginBottom: '0.5rem'
                }}
              >
                X
              </button>
            </div>
          ))}
          <button onClick={addSkill} style={buttonStyle}>
            + Fähigkeit hinzufügen
          </button>
        </div>
      )}

      {/* Languages */}
      {activeSection === 'languages' && (
        <div>
          <h3 style={{ marginTop: 0, color: '#1e293b' }}>Sprachen</h3>
          {data.languages.map((lang) => (
            <div key={lang.id} style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr auto',
              gap: '1rem',
              alignItems: 'end',
              marginBottom: '0.75rem'
            }}>
              <div>
                <label style={labelStyle}>Sprache</label>
                <input
                  type="text"
                  value={lang.language}
                  onChange={(e) => updateLanguage(lang.id, 'language', e.target.value)}
                  style={inputStyle}
                  placeholder="z.B. Deutsch"
                />
              </div>
              <div>
                <label style={labelStyle}>Niveau</label>
                <select
                  value={lang.level}
                  onChange={(e) => updateLanguage(lang.id, 'level', e.target.value)}
                  style={inputStyle}
                >
                  <option value="A1">A1</option>
                  <option value="A2">A2</option>
                  <option value="B1">B1</option>
                  <option value="B2">B2</option>
                  <option value="C1">C1</option>
                  <option value="C2">C2</option>
                  <option value="Native">Muttersprache</option>
                </select>
              </div>
              <button
                onClick={() => removeLanguage(lang.id)}
                style={{
                  ...buttonStyle,
                  backgroundColor: '#ef4444',
                  padding: '0.5rem 0.75rem',
                  marginBottom: '0.5rem'
                }}
              >
                X
              </button>
            </div>
          ))}
          <button onClick={addLanguage} style={buttonStyle}>
            + Sprache hinzufügen
          </button>
        </div>
      )}

      {/* Certifications */}
      {activeSection === 'certifications' && (
        <div>
          <h3 style={{ marginTop: 0, color: '#1e293b' }}>Zertifikate</h3>
          {data.certifications.map((cert) => (
            <div key={cert.id} style={{
              border: '1px solid #e2e8f0',
              borderRadius: '4px',
              padding: '1rem',
              marginBottom: '1rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h4 style={{ margin: 0, color: '#475569' }}>Zertifikat</h4>
                <button
                  onClick={() => removeCertification(cert.id)}
                  style={{
                    ...buttonStyle,
                    backgroundColor: '#ef4444',
                    padding: '0.25rem 0.75rem'
                  }}
                >
                  Entfernen
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>Zertifikat</label>
                  <input
                    type="text"
                    value={cert.name}
                    onChange={(e) => updateCertification(cert.id, 'name', e.target.value)}
                    style={inputStyle}
                    placeholder="z.B. AWS Certified Solutions Architect"
                  />
                </div>
                <div>
                  <label style={labelStyle}>Aussteller</label>
                  <input
                    type="text"
                    value={cert.issuer}
                    onChange={(e) => updateCertification(cert.id, 'issuer', e.target.value)}
                    style={inputStyle}
                    placeholder="z.B. Amazon Web Services"
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Datum</label>
                <input
                  type="text"
                  value={cert.date}
                  onChange={(e) => updateCertification(cert.id, 'date', e.target.value)}
                  style={inputStyle}
                  placeholder="z.B. 06/2023"
                />
              </div>
            </div>
          ))}
          <button onClick={addCertification} style={buttonStyle}>
            + Zertifikat hinzufügen
          </button>
        </div>
      )}
    </div>
  );
};
