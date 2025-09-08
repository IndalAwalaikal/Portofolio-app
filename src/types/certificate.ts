// types/certificate.ts
export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  pdf: string;
  skills: string[];
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  category: 'development' | 'design' | 'data' | 'devops' | 'business' | 'other';
}