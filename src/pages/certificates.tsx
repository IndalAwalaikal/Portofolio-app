// pages/certificates.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// ✅ Impor interface dari file terpisah
import { Certificate } from "../types/certificate";

// ✅ Dynamic import tanpa SSR
const CertificateCard = dynamic(() => import("@/components/CertificateCard"), {
  ssr: false,
});

// ✅ Daftar sertifikat
const certificates: Certificate[] = [
  {
    title: "Frontend Web Development",
    issuer: "MySkill Academy",
    date: "April 2024",
    credentialId: "ABCD1234",
    pdf: "/certificates/frontend.pdf",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    level: "Advanced",
    category: "development",
  },
];

export default function CertificatesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-28 px-6 text-center">
        <AnimatedSection>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Sertifikat
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Klik untuk melihat sertifikat secara lengkap.
          </p>
        </AnimatedSection>
      </section>

      {/* Grid Sertifikat */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Pencapaian Profesional
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-10">
            {certificates.map((cert, index) => {
              const delay = Math.min(index * 0.15, 0.8);
              return (
                <AnimatedSection key={cert.title} delay={delay}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CertificateCard cert={cert} index={index} />
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
