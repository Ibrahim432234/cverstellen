import { TemplateConfig } from '../types/cv';

export const templateConfigs: Record<string, TemplateConfig> = {
  modern: {
    type: 'modern',
    name: 'Modern',
    description: 'Ein modernes, farbenfrohes Design mit klaren Linien',
    primaryColor: '#2563eb',
    accentColor: '#3b82f6',
    fontFamily: "'Inter', sans-serif"
  },
  classic: {
    type: 'classic',
    name: 'Klassisch',
    description: 'Traditionelles, zeitloses Design für konservative Branchen',
    primaryColor: '#1e3a8a',
    accentColor: '#334155',
    fontFamily: "'Georgia', serif"
  },
  creative: {
    type: 'creative',
    name: 'Kreativ',
    description: 'Auffälliges Design für kreative Berufe',
    primaryColor: '#7c3aed',
    accentColor: '#ec4899',
    fontFamily: "'Poppins', sans-serif"
  },
  minimal: {
    type: 'minimal',
    name: 'Minimal',
    description: 'Schlichtes, minimalistisches Design',
    primaryColor: '#0f172a',
    accentColor: '#64748b',
    fontFamily: "'Helvetica Neue', sans-serif"
  },
  professional: {
    type: 'professional',
    name: 'Professionell',
    description: 'Ausgewogenes Design für alle Branchen',
    primaryColor: '#059669',
    accentColor: '#10b981',
    fontFamily: "'Arial', sans-serif"
  },
  developer: {
    type: 'developer',
    name: 'Developer',
    description: 'Optimiert für IT & Software-Entwickler mit Projekt-Fokus',
    primaryColor: '#0891b2',
    accentColor: '#06b6d4',
    fontFamily: "'Roboto Mono', monospace"
  },
  compact: {
    type: 'compact',
    name: 'Kompakt',
    description: 'Ultra-kompakt: Alles auf 2 Seiten - ideal für viele Infos',
    primaryColor: '#4f46e5',
    accentColor: '#6366f1',
    fontFamily: "'Arial', sans-serif"
  }
};

// AI-powered template suggestion based on profession
export const suggestTemplate = (profession: string): TemplateConfig => {
  const professionLower = profession.toLowerCase();

  // Creative professions
  if (professionLower.includes('design') ||
      professionLower.includes('künstler') ||
      professionLower.includes('kreativ') ||
      professionLower.includes('marketing') ||
      professionLower.includes('werbung')) {
    return templateConfigs.creative;
  }

  // Traditional professions
  if (professionLower.includes('anwalt') ||
      professionLower.includes('rechts') ||
      professionLower.includes('bank') ||
      professionLower.includes('finanz') ||
      professionLower.includes('versicherung')) {
    return templateConfigs.classic;
  }

  // Tech professions - Developer template
  if (professionLower.includes('entwickler') ||
      professionLower.includes('programmierer') ||
      professionLower.includes('software') ||
      professionLower.includes('developer') ||
      professionLower.includes('engineer') ||
      professionLower.includes('backend') ||
      professionLower.includes('frontend') ||
      professionLower.includes('fullstack') ||
      professionLower.includes('devops') ||
      professionLower.includes('data scientist') ||
      professionLower.includes('informatik')) {
    return templateConfigs.developer;
  }

  // General IT/Tech professions
  if (professionLower.includes('it') ||
      professionLower.includes('tech')) {
    return templateConfigs.compact;
  }

  // Minimalist preference
  if (professionLower.includes('architekt') ||
      professionLower.includes('beratung') ||
      professionLower.includes('consultant')) {
    return templateConfigs.minimal;
  }

  // Default to professional
  return templateConfigs.professional;
};
