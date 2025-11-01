// pages/certificates.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Certificate } from "../types/certificate";
import dynamic from "next/dynamic";

const CertificateCard = dynamic(
  () => import("@/components/CertificateCard"),
  {
    ssr: false,
    loading: () => (
      <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" />
    ),
  }
);

const certificates: readonly Certificate[] = [
  {
    title: "Frontend Web Development",
    issuer: "MySkill Academy",
    date: "April 2024",
    credentialId: "ABCD1234",
    pdf: "/certificates/frontend.pdf",
    preview: "/certificates/frontend.png", // ✅ tambahkan ini
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    level: "Advanced",
    category: "development",
  },
  // Tambahkan sertifikat lain dengan field `preview` jika diperlukan
];

export default function CertificatesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
      <Navbar />

      <section className="py-28 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          Sertifikat
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Klik untuk melihat sertifikat secara lengkap.
        </p>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
            Pencapaian Profesional
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {certificates.map((cert, index) => (
              <CertificateCard
                key={index}
                cert={cert}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}