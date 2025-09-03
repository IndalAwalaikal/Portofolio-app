import { NextPage } from "next";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import SocialLinks from "@/components/SocialLinks";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
}

interface Skill {
  name: string;
  level: number;
  category: string;
  technologies: string[];
}

const Home: NextPage = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Platform E-Commerce",
      description:
        "Solusi e-commerce full-stack dengan Next.js, TypeScript, dan integrasi pembayaran modern.",
      technologies: ["Next.js", "TypeScript", "Stripe", "Prisma"],
      image: "/api/placeholder/400/250",
      link: "https://github.com",
    },
    {
      id: 2,
      title: "Aplikasi Manajemen Tugas",
      description:
        "Aplikasi manajemen tugas kolaboratif dengan pembaruan real-time dan fitur kerja tim.",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      image: "/api/placeholder/400/250",
      link: "https://github.com",
    },
    {
      id: 3,
      title: "Dashboard Analitik",
      description:
        "Dashboard business intelligence dengan grafik interaktif dan visualisasi data real-time.",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      image: "/api/placeholder/400/250",
      link: "https://github.com",
    },
  ];

  const skills: Skill[] = [
    {
      name: "Pengembangan Frontend",
      level: 70,
      category: "frontend",
      technologies: ["React", "Next.js", "TypeScript"],
    },
    {
      name: "Pengembangan Backend",
      level: 90,
      category: "backend",
      technologies: ["Node.js", "Python", "PostgreSQL", "Golang", "FastAPI"],
    },
    {
      name: "Cloud & DevOps",
      level: 50,
      category: "devops",
      technologies: ["AWS", "Docker", "CI/CD"],
    },
    {
      name: "Desain UI/UX",
      level: 70,
      category: "design",
      technologies: ["Figma", "Tailwind", "Design Systems"],
    },
  ];

  return (
    <>
      <Head>
        <title>Portofolio Profesional</title>
        <meta
          name="description"
          content="Portofolio profesional modern dibuat dengan Next.js dan TypeScript"
        />
        <meta
          name="keywords"
          content="portofolio, pengembang, react, nextjs, typescript, backend, nodejs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        <Navbar />

        {/* Bagian Hero */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-600/10" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />

          <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
            <AnimatedSection delay={0.2} duration={1.4} className="mb-4">
              <h1 className="text-4xl md:text-6xl font-semibold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                Halo, saya
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.6} duration={1.6} className="mb-6">
              <h2 className="text-6xl md:text-8xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                  Indal Awalaikal
                </span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={1.0} duration={1.4} className="mb-8">
              <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed">
                Seorang{" "}
                <span className="text-cyan-300 font-medium">
                  Pengembang Full-Stack yang Bersemangat
                </span>
              </p>
            </AnimatedSection>

            <AnimatedSection delay={1.3} duration={1.3} className="mb-10">
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                Membuat pengalaman digital inovatif dengan teknologi modern dan solusi desain kreatif.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={1.6} duration={1.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#projects"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">Lihat Karya Saya</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 border border-blue-500/50 text-blue-300 rounded-full font-semibold hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300"
                >
                  Hubungi Saya
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Bagian Tentang Saya */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Teks Bagian Kiri */}
              <AnimatedSection delay={0.3} duration={1.4}>
                <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Tentang Saya
                </h2>
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    Halo, saya{" "}
                    <span className="font-semibold text-blue-300">
                      Indal Awalaikal
                    </span>
                    , seorang pengembang full-stack yang bersemangat dengan keahlian di bidang teknologi web modern. Saya suka mengubah ide menjadi pengalaman digital yang fungsional dan indah.
                  </p>
                  <p>
                    Dengan fondasi kuat di pengembangan frontend dan backend, saya fokus pada pembuatan aplikasi yang skalabel dan desain yang berpusat pada pengguna. Tujuan saya adalah menyelesaikan masalah kompleks dengan kode yang bersih, efisien, dan solusi kreatif.
                  </p>
                  <p>
                    Saya menggabungkan ketepatan teknis dengan pemikiran kreatif untuk menghadirkan proyek yang tidak hanya kuat, tetapi juga menyenangkan digunakan. Saya selalu mengeksplorasi teknologi baru untuk tetap berada di garis depan inovasi, dengan fokus utama pada pengembangan backend.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-4">
                    {[
                      "React",
                      "Next.js",
                      "Vite.js",
                      "TypeScript",
                      "Golang",
                      "Python",
                      "MySQL",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Gambar Bagian Kanan */}
              <AnimatedSection
                delay={0.7}
                duration={1.6}
                className="flex justify-center"
              >
                <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md aspect-square rounded-3xl overflow-hidden border border-blue-500/30 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:scale-105">
                  <img
                    src="/images/indal-awalaikal.jpg" // 👈 Ganti dengan path gambar kamu
                    alt="Indal Awalaikal - Pengembang Full-Stack"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Overlay gradien */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-cyan-600/10"></div>

                  {/* Elemen mengambang dekoratif */}
                  <div
                    className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-30 blur-xl animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="absolute -bottom-8 -right-6 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full opacity-30 blur-xl animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Bagian Keterampilan */}
        <section id="skills" className="py-20">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Keterampilan Teknis
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {skills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Bagian Proyek */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Proyek Unggulan
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Bagian Kontak */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Hubungi Saya
              </h2>
              <div className="max-w-2xl mx-auto">
                <div className="bg-slate-800/50 backdrop-blur-lg border border-blue-500/20 rounded-3xl p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <input
                        type="text"
                        placeholder="Nama Anda"
                        className="w-full px-4 py-3 bg-slate-700/50 border border-blue-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                      />
                      <input
                        type="email"
                        placeholder="Email Anda"
                        className="w-full px-4 py-3 bg-slate-700/50 border border-blue-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Subjek"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-blue-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    />
                    <textarea
                      placeholder="Pesan Anda"
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-blue-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
                    >
                      <span className="relative z-10">Kirim Pesan</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </form>

                  <div className="mt-8 pt-8 border-t border-blue-500/20">
                    <SocialLinks />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;