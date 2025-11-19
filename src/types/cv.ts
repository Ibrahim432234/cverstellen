export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  dateOfBirth?: string;
  nationality?: string;
  profilePhoto?: string;
  // IT-specific fields
  github?: string;
  linkedin?: string;
  portfolio?: string;
  website?: string;
}

export interface WorkExperience {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export interface Language {
  id: string;
  language: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' | 'Native';
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  expiryDate?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[]; // e.g., ['React', 'TypeScript', 'Node.js']
  role?: string; // e.g., 'Lead Developer', 'Solo Project'
  startDate: string;
  endDate: string;
  current: boolean;
  githubUrl?: string;
  liveUrl?: string;
  highlights: string; // Key achievements or features
}

export interface CVData {
  personalInfo: PersonalInfo;
  professionalSummary: string;
  workExperience: WorkExperience[];
  education: Education[];
  projects: Project[];
  skills: Skill[];
  languages: Language[];
  certifications: Certification[];
  hobbies?: string;
}

export type TemplateType = 'modern' | 'classic' | 'creative' | 'minimal' | 'professional' | 'developer' | 'compact';

export interface TemplateConfig {
  type: TemplateType;
  name: string;
  description: string;
  primaryColor: string;
  accentColor: string;
  fontFamily: string;
}
