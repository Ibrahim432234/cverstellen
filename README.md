# CV Erstellen - Professional CV Generator

Ein moderner, KI-gestützter Lebenslauf-Generator mit professionellen Vorlagen. Erstellen Sie beeindruckende CVs in wenigen Minuten!

## Features

- **5 Professionelle Vorlagen**: Modern, Klassisch, Kreativ, Minimal und Professionell
- **KI-gestützte Template-Vorschläge**: Automatische Vorlageempfehlung basierend auf Ihrem Beruf
- **Profilfoto-Upload**: Laden Sie Ihr Foto direkt hoch
- **Umfassende Datenerfassung**:
  - Persönliche Informationen
  - Professionelles Profil
  - Berufserfahrung
  - Ausbildung
  - Fähigkeiten mit Levelanzeige
  - Sprachen (nach CEFR-Standard)
  - Zertifikate
- **Live-Vorschau**: Sehen Sie Änderungen in Echtzeit
- **PDF-Export**: Exportieren Sie Ihren CV als PDF-Datei
- **Responsive Design**: Funktioniert auf Desktop, Tablet und Mobilgeräten
- **TypeScript**: Vollständig typsicher entwickelt

## Technologie-Stack

- **React 18** - Moderne UI-Bibliothek
- **TypeScript** - Typsichere Entwicklung
- **Vite** - Schnelles Build-Tool
- **html2canvas** - Screenshot-Funktionalität
- **jsPDF** - PDF-Generierung

## Installation

### Voraussetzungen

- Node.js (Version 16 oder höher)
- npm oder yarn

### Schritte

1. Repository klonen oder herunterladen:
```bash
git clone <repository-url>
cd cverstellen
```

2. Abhängigkeiten installieren:
```bash
npm install
```

3. Entwicklungsserver starten:
```bash
npm run dev
```

4. Öffnen Sie Ihren Browser und navigieren Sie zu `http://localhost:5173`

## Verwendung

### 1. Vorlage auswählen
Wählen Sie eine der 5 professionellen Vorlagen aus:
- **Modern**: Farbenfrohes Design mit klaren Linien
- **Klassisch**: Zeitloses Design für konservative Branchen
- **Kreativ**: Auffälliges Design für kreative Berufe
- **Minimal**: Schlichtes, minimalistisches Design
- **Professionell**: Ausgewogenes Design für alle Branchen

### 2. Daten eingeben
Füllen Sie die Formulare in den verschiedenen Bereichen aus:
- **Persönliche Daten**: Name, Kontaktinformationen, Adresse
- **Profilfoto**: Laden Sie Ihr Foto hoch (optional)
- **Profil**: Kurze Zusammenfassung Ihrer beruflichen Erfahrung
- **Berufserfahrung**: Fügen Sie Ihre Arbeitsstellen hinzu
- **Ausbildung**: Fügen Sie Ihre Ausbildungen hinzu
- **Fähigkeiten**: Listen Sie Ihre Fähigkeiten mit Level auf
- **Sprachen**: Geben Sie Ihre Sprachkenntnisse an
- **Zertifikate**: Fügen Sie relevante Zertifikate hinzu

### 3. KI-Vorschlag nutzen (optional)
Klicken Sie auf "🤖 KI-Vorlage vorschlagen", um eine passende Vorlage basierend auf Ihrer ersten Berufsposition zu erhalten.

### 4. Live-Vorschau
Die Vorschau wird automatisch aktualisiert, während Sie Ihre Daten eingeben.

### 5. PDF exportieren
Klicken Sie auf "📄 Als PDF exportieren", um Ihren fertigen CV herunterzuladen.

## Projektstruktur

```
cverstellen/
├── src/
│   ├── components/
│   │   ├── templates/
│   │   │   ├── CVTemplate.tsx       # Template-Wrapper
│   │   │   ├── ModernTemplate.tsx   # Modernes Template
│   │   │   └── ClassicTemplate.tsx  # Klassisches Template
│   │   └── CVForm.tsx               # Hauptformular
│   ├── types/
│   │   └── cv.ts                    # TypeScript-Typdefinitionen
│   ├── utils/
│   │   ├── templateConfigs.ts       # Template-Konfigurationen
│   │   └── pdfExport.ts             # PDF-Export-Logik
│   ├── App.tsx                      # Hauptkomponente
│   ├── App.css                      # Styling
│   ├── main.tsx                     # Einstiegspunkt
│   └── index.css                    # Globales Styling
├── index.html                       # HTML-Template
├── package.json                     # Abhängigkeiten
├── tsconfig.json                    # TypeScript-Konfiguration
├── vite.config.ts                   # Vite-Konfiguration
└── README.md                        # Diese Datei
```

## Build für Produktion

Um die Anwendung für die Produktion zu bauen:

```bash
npm run build
```

Die fertige Anwendung befindet sich im `dist/`-Verzeichnis und kann auf einem Webserver bereitgestellt werden.

## Vorschau der Produktion

```bash
npm run preview
```

## Anpassungen

### Neue Vorlagen hinzufügen

1. Erstellen Sie eine neue Template-Komponente in `src/components/templates/`
2. Fügen Sie die Konfiguration in `src/utils/templateConfigs.ts` hinzu
3. Importieren und verwenden Sie die neue Vorlage in `CVTemplate.tsx`

### Styling anpassen

- Globales Styling: `src/index.css`
- App-spezifisches Styling: `src/App.css`
- Template-spezifisches Styling: Inline-Styles in den Template-Komponenten

### KI-Vorschläge anpassen

Bearbeiten Sie die `suggestTemplate`-Funktion in `src/utils/templateConfigs.ts`, um die KI-Logik anzupassen.

## Browser-Unterstützung

- Chrome (neueste 2 Versionen)
- Firefox (neueste 2 Versionen)
- Safari (neueste 2 Versionen)
- Edge (neueste 2 Versionen)

## Lizenz

MIT License - Frei für persönliche und kommerzielle Nutzung

## Support

Bei Fragen oder Problemen öffnen Sie bitte ein Issue im Repository.

## Mitwirken

Pull Requests sind willkommen! Für größere Änderungen öffnen Sie bitte zuerst ein Issue, um zu diskutieren, was Sie ändern möchten.

---

Entwickelt mit ❤️ für professionelle Lebensläufe
