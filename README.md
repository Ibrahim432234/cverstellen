# CV Erstellen - Professional CV Generator für Informatiker

Ein moderner, KI-gestützter Lebenslauf-Generator speziell optimiert für IT-Profis und Software-Entwickler. Erstellen Sie beeindruckende CVs mit Projekt-Portfolios in wenigen Minuten!

## ✨ Highlights

- 🎯 **Speziell für Informatiker**: Optimierte Templates für IT-Berufe
- 📦 **Projekt-Portfolio**: Zeigen Sie Ihre Hobby- und professionellen Projekte
- 🔗 **Social Links**: GitHub, LinkedIn, Portfolio-Website Integration
- 📄 **Kompakt auf 2 Seiten**: Intelligentes Layout passt alles auf maximal 2 Seiten
- 🎨 **7 Professionelle Vorlagen**: Developer, Kompakt, Modern, Klassisch, Kreativ, Minimal, Professionell
- 🤖 **KI-Template-Empfehlung**: Automatische Vorschlagung basierend auf Ihrem Beruf

## Features

### IT-spezifische Features
- **Projekte-Sektion**:
  - Projektname, Rolle und Zeitraum
  - Technologie-Tags (React, TypeScript, Node.js, etc.)
  - GitHub und Live-Demo Links
  - Projekt-Highlights und Erfolge
  - Detaillierte Beschreibungen

- **Online-Profile**:
  - GitHub Integration
  - LinkedIn Profil
  - Portfolio-Website
  - Persönliche Website

### Template-Varianten
- **Developer**: Monospace-Font, kompakt, projekt-fokussiert (Standard für IT)
- **Kompakt**: Ultra-kompakt, 2-Spalten-Layout, ideal für viele Informationen
- **Modern**: Farbenfrohes Design mit klaren Linien
- **Klassisch**: Traditionelles, zeitloses Design
- **Kreativ**: Auffälliges Design für kreative Berufe
- **Minimal**: Schlichtes, minimalistisches Design
- **Professionell**: Ausgewogenes Design für alle Branchen

### Umfassende Datenerfassung
- ✅ Persönliche Informationen mit Profilfoto
- ✅ Professionelles Profil / Zusammenfassung
- ✅ **Projekte** (NEU!) mit Technologie-Tags
- ✅ Berufserfahrung
- ✅ Ausbildung
- ✅ Fähigkeiten mit Levelanzeige (Beginner → Expert)
- ✅ Sprachen (A1-C2 + Muttersprache)
- ✅ Zertifikate

### Weitere Features
- **Live-Vorschau**: Sehen Sie Änderungen in Echtzeit
- **PDF-Export**: Exportieren Sie Ihren CV als professionelles PDF
- **Responsive Design**: Funktioniert auf Desktop, Tablet und Mobilgeräten
- **TypeScript**: Vollständig typsicher entwickelt
- **Technologie-Tags**: Visuelle Darstellung Ihres Tech-Stacks

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
Wählen Sie eine der 7 professionellen Vorlagen aus:
- **Developer** (Standard): Optimiert für IT/Software-Entwickler mit Projekt-Fokus
- **Kompakt**: Ultra-kompakt, alles auf 2 Seiten, 2-Spalten-Layout
- **Modern**: Farbenfrohes Design mit klaren Linien
- **Klassisch**: Zeitloses Design für konservative Branchen
- **Kreativ**: Auffälliges Design für kreative Berufe
- **Minimal**: Schlichtes, minimalistisches Design
- **Professionell**: Ausgewogenes Design für alle Branchen

### 2. Daten eingeben
Füllen Sie die Formulare in den verschiedenen Bereichen aus:
- **Persönliche Daten**:
  - Name, E-Mail, Telefon, Adresse
  - GitHub, LinkedIn, Portfolio, Website (optional)
  - Profilfoto hochladen (optional)
- **Profil**: Kurze Zusammenfassung Ihrer beruflichen Erfahrung und Ziele
- **Projekte** (NEU!):
  - Projektname, Rolle, Zeitraum
  - Technologien (kommagetrennt: React, TypeScript, Node.js...)
  - Beschreibung und Highlights
  - GitHub & Live-Demo Links
- **Berufserfahrung**: Fügen Sie Ihre Arbeitsstellen hinzu
- **Ausbildung**: Fügen Sie Ihre Ausbildungen hinzu
- **Fähigkeiten**: Listen Sie Ihre Tech-Stack mit Level auf (Beginner → Expert)
- **Sprachen**: Geben Sie Ihre Sprachkenntnisse an (A1-C2, Muttersprache)
- **Zertifikate**: Fügen Sie relevante Zertifikate hinzu

💡 **Tipp für Informatiker**: Fokussieren Sie sich auf die Projekte-Sektion! Zeigen Sie Ihre besten Hobby- und professionellen Projekte mit konkreten Technologien und Links.

### 3. KI-Vorschlag nutzen (optional)
Klicken Sie auf "🤖 KI-Vorlage vorschlagen", um eine passende Vorlage basierend auf Ihrer Berufsposition zu erhalten. Die KI erkennt IT-Berufe automatisch und schlägt das Developer-Template vor.

### 4. Live-Vorschau
Die Vorschau wird automatisch aktualisiert, während Sie Ihre Daten eingeben. Auf mobilen Geräten nutzen Sie den "👁️ Vorschau anzeigen" Button.

### 5. PDF exportieren
Klicken Sie auf "📄 Als PDF exportieren", um Ihren fertigen CV herunterzuladen. Das PDF behält das gewählte Design bei und ist druckfertig.

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
