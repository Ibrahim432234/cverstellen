import React, { useState } from 'react';
import { CVData, TemplateConfig } from './types/cv';
import { CVForm } from './components/CVForm';
import { CVTemplate } from './components/templates/CVTemplate';
import { templateConfigs, suggestTemplate } from './utils/templateConfigs';
import { exportToPDF } from './utils/pdfExport';
import './App.css';

const initialData: CVData = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: ''
  },
  professionalSummary: '',
  workExperience: [],
  education: [],
  skills: [],
  languages: [],
  certifications: []
};

function App() {
  const [cvData, setCvData] = useState<CVData>(initialData);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateConfig>(templateConfigs.modern);
  const [showPreview, setShowPreview] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const handleDataChange = (newData: CVData) => {
    setCvData(newData);
  };

  const handlePhotoUpload = (photoUrl: string) => {
    console.log('Photo uploaded:', photoUrl.substring(0, 50) + '...');
  };

  const handleTemplateChange = (templateType: string) => {
    setSelectedTemplate(templateConfigs[templateType]);
  };

  const handleAISuggestion = () => {
    // Get the first work experience position to suggest a template
    const profession = cvData.workExperience[0]?.position || 'professional';
    const suggested = suggestTemplate(profession);
    setSelectedTemplate(suggested);
    alert(`KI-Empfehlung: ${suggested.name} Template wurde ausgewählt, basierend auf Ihrem Beruf!`);
  };

  const handleExportPDF = async () => {
    setIsExporting(true);
    try {
      const fileName = `CV_${cvData.personalInfo.firstName}_${cvData.personalInfo.lastName}.pdf`;
      await exportToPDF('cv-preview', fileName);
      alert('CV erfolgreich als PDF exportiert!');
    } catch (error) {
      console.error('Fehler beim Exportieren:', error);
      alert('Fehler beim Exportieren des PDFs');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>CV Erstellen - Professional CV Generator</h1>
        <p>Erstellen Sie professionelle Lebensläufe mit KI-generierten Vorlagen</p>
      </header>

      {/* Template Selection */}
      <div className="template-selector">
        <h2>Vorlage wählen</h2>
        <div className="template-options">
          {Object.keys(templateConfigs).map((key) => {
            const template = templateConfigs[key];
            return (
              <button
                key={key}
                className={`template-option ${selectedTemplate.type === template.type ? 'active' : ''}`}
                onClick={() => handleTemplateChange(key)}
                style={{
                  borderColor: selectedTemplate.type === template.type ? template.primaryColor : '#e2e8f0'
                }}
              >
                <div
                  className="template-color"
                  style={{ backgroundColor: template.primaryColor }}
                />
                <div>
                  <strong>{template.name}</strong>
                  <p>{template.description}</p>
                </div>
              </button>
            );
          })}
        </div>
        {cvData.workExperience.length > 0 && (
          <button className="ai-suggestion-btn" onClick={handleAISuggestion}>
            🤖 KI-Vorlage vorschlagen
          </button>
        )}
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="form-section">
          <div className="section-header">
            <h2>Ihre Daten eingeben</h2>
            <button
              className="preview-toggle"
              onClick={() => setShowPreview(!showPreview)}
            >
              {showPreview ? '📝 Formular anzeigen' : '👁️ Vorschau anzeigen'}
            </button>
          </div>
          <CVForm
            data={cvData}
            onChange={handleDataChange}
            onPhotoUpload={handlePhotoUpload}
          />
        </div>

        <div className="preview-section">
          <div className="section-header">
            <h2>Vorschau</h2>
            <button
              className="export-btn"
              onClick={handleExportPDF}
              disabled={isExporting || !cvData.personalInfo.firstName}
            >
              {isExporting ? '⏳ Exportiere...' : '📄 Als PDF exportieren'}
            </button>
          </div>
          <div className="preview-container" id="cv-preview">
            <CVTemplate data={cvData} config={selectedTemplate} />
          </div>
        </div>
      </div>

      {/* Mobile Preview Modal */}
      {showPreview && (
        <div className="mobile-preview-modal">
          <div className="modal-header">
            <h2>Vorschau</h2>
            <button onClick={() => setShowPreview(false)}>✕</button>
          </div>
          <div className="modal-content">
            <CVTemplate data={cvData} config={selectedTemplate} />
          </div>
          <div className="modal-footer">
            <button
              className="export-btn"
              onClick={handleExportPDF}
              disabled={isExporting || !cvData.personalInfo.firstName}
            >
              {isExporting ? '⏳ Exportiere...' : '📄 Als PDF exportieren'}
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <p>CV Erstellen - Professionelle Lebensläufe mit KI-Technologie erstellen</p>
      </footer>
    </div>
  );
}

export default App;
