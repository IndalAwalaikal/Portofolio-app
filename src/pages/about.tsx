// pages/about.tsx
import { NextPage } from "next";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// Jika AnimatedSection ringan (CSS-only), boleh dipakai. Jika tidak, hapus dan ganti dengan <section>
import AnimatedSection from "@/components/AnimatedSection";
import React from "react";

// === INTERFACES ===
interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

// === DATA STATIS (di luar komponen → aman untuk SSG) ===
const EXPERIENCES: readonly Experience[] = [
  {
    id: "coconut-backend",
    role: "Backend Development",
    company: "COCONUT Computer Club",
    period: "2025 - Sekarang",
    description:
      "Spesialisasi dalam pengembangan aplikasi web responsif menggunakan Golang dan teknologi backend modern.",
  },
];

const EDUCATION: readonly Education[] = [
  {
    id: "unikmak-if",
    degree: "Mahasiswa Teknik Informatika dan Komputer",
    institution: "Universitas Negeri Makassar",
    period: "2023 - Sekarang",
    description:
      "Fokus pada rekayasa perangkat lunak, pengembangan web, dan teknologi komputer modern.",
  },
];

// === TimelineItem: Gunakan React.memo untuk mencegah re-render tidak perlu ===
const TimelineItem = React.memo<{
  title: string;
  subtitle: string;
  period: string;
  description: string;
}>(({ title, subtitle, period, description }) => (
  <div className="bg-slate-800/30 backdrop-blur-lg border border-blue-500/20 rounded-2xl p-6 hover:border-blue-400/40 transition-colors duration-300">
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
      <div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-blue-300 font-medium">{subtitle}</p>
      </div>
      <time
        className="text-gray-400 font-medium mt-2 md:mt-0"
        dateTime={period}
      >
        {period}
      </time>
    </div>
    <p className="text-gray-300">{description}</p>
  </div>
));

TimelineItem.displayName = "TimelineItem";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tentang Saya - Portofolio Profesional</title>
        <meta
          name="description"
          content="Pelajari lebih lanjut tentang latar belakang, pengalaman, dan keahlian saya"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/about" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
        <Navbar />

        <main className="pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero */}
            <AnimatedSection>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-12 lg:mb-16 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Tentang Saya
              </h1>
            </AnimatedSection>

            {/* Cerita Pribadi */}
            <AnimatedSection>
              <section
                className="max-w-4xl mx-auto mb-16 lg:mb-20"
                aria-labelledby="journey-heading"
              >
                <div className="bg-slate-800/30 backdrop-blur-lg border border-blue-500/20 rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12">
                  <h2
                    id="journey-heading"
                    className="text-2xl sm:text-3xl font-bold mb-5 text-blue-300"
                  >
                    Perjalanan Saya
                  </h2>
                  <div className="space-y-5 text-base sm:text-lg text-gray-300 leading-relaxed">
                    <p>
                      Saat ini saya adalah mahasiswa semester 5 di Program Studi
                      Teknik Informatika dan Komputer, Universitas Negeri
                      Makassar, yang sedang menempuh pendidikan sejak tahun
                      2023. Perjalanan saya di dunia teknologi dimulai dari rasa
                      penasaran terhadap cara kerja aplikasi dan sistem
                      komputer, yang kemudian memicu minat saya untuk mendalami
                      pengembangan perangkat lunak.
                    </p>
                    <p>
                      Saya fokus pada pengembangan backend dengan teknologi
                      modern seperti Golang dan Python. Saya juga aktif
                      mengembangkan aplikasi full-stack, dengan penekanan pada
                      arsitektur yang solid, performa tinggi, dan kode yang
                      bersih serta mudah dipelihara.
                    </p>
                    <p>
                      Di luar kelas, saya terlibat dalam komunitas teknologi
                      seperti COCONUT Computer Club, tempat saya mengasah
                      keterampilan teknis, berkolaborasi dalam proyek nyata, dan
                      belajar langsung dari sesama pengembang. Saya juga senang
                      mengeksplorasi teknologi baru, berkontribusi pada proyek
                      open-source, dan membagikan pengetahuan melalui
                      dokumentasi atau mentoring sesama mahasiswa.
                    </p>
                  </div>
                </div>
              </section>
            </AnimatedSection>

            {/* Pengalaman Profesional */}
            <AnimatedSection>
              <section aria-labelledby="experience-heading" className="mb-16">
                <h2
                  id="experience-heading"
                  className="text-3xl sm:text-4xl font-bold text-center mb-10 lg:mb-12 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
                >
                  Pengalaman
                </h2>
                {EXPERIENCES.length > 0 ? (
                  <div className="space-y-6">
                    {EXPERIENCES.map((exp) => (
                      <TimelineItem
                        key={exp.id}
                        title={exp.role}
                        subtitle={exp.company}
                        period={exp.period}
                        description={exp.description}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-gray-400">
                    Belum ada pengalaman profesional.
                  </p>
                )}
              </section>
            </AnimatedSection>

            {/* Pendidikan */}
            <AnimatedSection>
              <section aria-labelledby="education-heading">
                <h2
                  id="education-heading"
                  className="text-3xl sm:text-4xl font-bold text-center mb-10 lg:mb-12 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
                >
                  Pendidikan
                </h2>
                {EDUCATION.length > 0 ? (
                  <div className="space-y-6">
                    {EDUCATION.map((edu) => (
                      <TimelineItem
                        key={edu.id}
                        title={edu.degree}
                        subtitle={edu.institution}
                        period={edu.period}
                        description={edu.description}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-gray-400">
                    Belum ada data pendidikan.
                  </p>
                )}
              </section>
            </AnimatedSection>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;
