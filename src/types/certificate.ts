// types/certificate.ts
export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  pdf: string;       // path ke file PDF asli, contoh: "/certificates/frontend.pdf"
  preview: string;   // path ke gambar preview, contoh: "/certificates/frontend-preview.jpg"
  skills: string[];
  level?: string;
  category: "development" | "design" | "data" | "devops" | "business";
};