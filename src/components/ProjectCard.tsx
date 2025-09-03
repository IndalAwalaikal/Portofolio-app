// src/components/ProjectCard.tsx
'use client';

import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Code, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

// === INTERFACES ===
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  githubLink?: string;
  liveLink?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

// === KOMPONEN UTAMA ===
const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="group relative bg-slate-800/30 backdrop-blur-lg border border-blue-500/20 rounded-2xl overflow-hidden hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
    >
      {/* Gambar Proyek */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-600/20 to-cyan-600/20">
        {!imgError ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            onError={() => setImgError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 2} // Prioritas untuk proyek pertama
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <span className="text-gray-400 font-medium">Gambar tidak tersedia</span>
          </div>
        )}

        {/* Overlay Aksi saat Hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transform hover:scale-110 transition-all duration-300"
                aria-label={`Lihat detail proyek: ${project.title}`}
              >
                <Eye className="w-5 h-5" />
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-700 hover:bg-slate-600 text-white rounded-full transform hover:scale-110 transition-all duration-300"
                aria-label="Lihat kode sumber di GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-green-600 hover:bg-green-700 text-white rounded-full transform hover:scale-110 transition-all duration-300"
                aria-label="Buka demo langsung"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Nomor Proyek */}
        <div className="absolute top-4 left-4 w-8 h-8 bg-blue-600/90 rounded-full flex items-center justify-center text-white text-sm font-bold">
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      {/* Konten Teks */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
            {project.title}
          </h3>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              aria-label="Buka proyek"
            >
              <ArrowUpRight className="w-5 h-5" />
            </a>
          )}
        </div>

        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
          {project.description}
        </p>

        {/* Teknologi */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech} // ✅ tech sebagai key (unik dan stabil)
              className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium rounded-full hover:bg-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Tombol Aksi */}
        <div className="flex gap-3 pt-2 mt-auto">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5 transition-all duration-300 text-center"
            >
              Lihat Proyek
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-700/50 border border-blue-500/30 text-white text-sm font-medium rounded-lg hover:bg-slate-700/70 hover:border-blue-500/50 transition-all duration-300 flex items-center gap-2"
            >
              <Code className="w-4 h-4" />
              Kode
            </a>
          )}
        </div>
      </div>

      {/* Efek Glow saat Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/5 group-hover:to-cyan-600/5 transition-all duration-500 pointer-events-none" />
    </div>
  );
};

export default ProjectCard;