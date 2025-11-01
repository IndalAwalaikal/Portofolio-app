// pages/projects.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import Link from "next/link";

// Data proyek (di luar komponen agar tidak dirender ulang)
const PROJECTS = [
  {
    id: 1,
    title: "LogicLeap Academy",
    description:
      "Sebuah platform pembelajaran algoritma dan pemrograman online yang menyediakan berbagai kursus dan materi edukasi interaktif.",
    technologies: ["Vite JS", "React", "Tailwind CSS", "TypeScript"],
    image: "/images/project/logicleap.png",
    link: "https://logicleap-academy.vercel.app/",
  },
  {
    id: 2,
    title: "COCONUT Event Registration",
    description:
      "Sebuah aplikasi pendaftaran kegiatan COCONUT Computer Club dengan fitur manajemen acara dan peserta.",
    technologies: ["Vite JS", "React", "Tailwind CSS", "TypeScript", "Golang", "MySQL"],
    image: "/images/project/join-event.png",
    link: "https://github.com/IndalAwalaikal/join-event-coconut.git",
  },
  {
    id: 3,
    title: "COCONUT Open Class",
    description:
      "Sebuah aplikasi pendaftaran kelas terbuka COCONUT Computer Club",
    technologies: ["Vite JS", "React", "Tailwind CSS", "TypeScript", "Golang", "MySQL"],
    image: "/images/project/coc.png",
    link: "https://pendaftaran-coc.vercel.app/",
  },
  {
    id: 4,
    title: "Inventory Management App",
    description:
      "Solusi manajemen inventaris modern untuk pengelolaan stok, penjualan, dan laporan bisnis yang efisien.",
    technologies: ["PHP", "MySQL"],
    image: "/images/placeholder-project.jpg",
    link: "https://github.com/IndalAwalaikal/inventaris_app",
  },
  {
    id: 5,
    title: "Cocopen Website",
    description:
      "Sebuah aplikasi website pendaftaran calon anggota COCONUT Computer Club dengan fitur test dan ujian online.",
    technologies: ["Next.js", "Go", "MySQL"],
    image: "/images/project/cocopen.png",
    link: "https://github.com/IndalAwalaikal/cocopen-web-Apps-Now-Open-COCONUT",
  },
] as const;

// Komponen kartu proyek — ekstrak untuk efisiensi dan reuse
interface ProjectCardProps {
  project: (typeof PROJECTS)[number];
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const delay = Math.min(index * 0.15, 0.6); // batas maks delay

  return (
    <AnimatedSection key={project.id} delay={delay}>
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="group bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
      >
        {/* Gambar Proyek */}
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            width={600}
            height={300}
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "/images/placeholder-project.jpg";
            }}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
        </div>

        {/* Konten */}
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Teknologi */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Tombol */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            title={`Lihat proyek: ${project.title}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all"
          >
            Lihat Proyek
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </motion.div>
    </AnimatedSection>
  );
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-28 px-6 text-center">
        <AnimatedSection className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Proyek
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Berikut adalah proyek-proyek yang saya kerjakan dengan teknologi
            modern, desain yang user-friendly, dan performa tinggi.
          </p>
        </AnimatedSection>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Karya Terbaru
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-10">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
