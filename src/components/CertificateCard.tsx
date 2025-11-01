// src/components/CertificateCard.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { pdfjs } from "react-pdf";
import dynamic from "next/dynamic";
import { X } from "lucide-react";
import type { Certificate } from "../types/certificate";

const Document = dynamic(
  () => import("react-pdf").then((mod) => mod.Document),
  {
    ssr: false,
    loading: () => <div className="py-4 text-gray-400">Memuat...</div>,
  }
);

const Page = dynamic(() => import("react-pdf").then((mod) => mod.Page), {
  ssr: false,
});

interface CertificateCardProps {
  cert: Certificate;
  index: number;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ cert, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pdfWidth, setPdfWidth] = useState(600);

  // Inisialisasi worker PDF.js hanya di client
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`;
  }, []);

  // Animasi muncul
  useEffect(() => {
    const delay = Math.min(index * 50, 200);
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [index]);

  // Responsif PDF di modal
  const updatePdfWidth = useCallback(() => {
    setPdfWidth(window.innerWidth > 768 ? 800 : window.innerWidth - 60);
  }, []);

  useEffect(() => {
    updatePdfWidth();
    window.addEventListener("resize", updatePdfWidth);
    return () => window.removeEventListener("resize", updatePdfWidth);
  }, [updatePdfWidth]);

  // Warna berdasarkan kategori
  const getCategoryColors = (category: Certificate["category"]) => {
    const base = {
      bg: "from-slate-600/20 to-gray-600/20",
      border: "border-slate-500/30",
      text: "text-slate-400",
    };
    switch (category) {
      case "development":
        return {
          ...base,
          bg: "from-blue-600/20 to-cyan-600/20",
          border: "border-blue-500/30",
          text: "text-blue-400",
        };
      case "design":
        return {
          ...base,
          bg: "from-pink-600/20 to-rose-600/20",
          border: "border-pink-500/30",
          text: "text-pink-400",
        };
      case "data":
        return {
          ...base,
          bg: "from-green-600/20 to-emerald-600/20",
          border: "border-green-500/30",
          text: "text-green-400",
        };
      case "devops":
        return {
          ...base,
          bg: "from-purple-600/20 to-violet-600/20",
          border: "border-purple-500/30",
          text: "text-purple-400",
        };
      case "business":
        return {
          ...base,
          bg: "from-amber-600/20 to-orange-600/20",
          border: "border-amber-500/30",
          text: "text-amber-400",
        };
      default:
        return base;
    }
  };

  const colors = getCategoryColors(cert.category);

  return (
    <>
      {/* Card dengan preview gambar */}
      <div
        className={`group relative bg-gradient-to-br ${
          colors.bg
        } backdrop-blur-lg border ${
          colors.border
        } rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-opacity-60 hover:shadow-lg hover:-translate-y-1 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        onClick={() => setIsModalOpen(true)}
        onKeyDown={(e) => e.key === "Enter" && setIsModalOpen(true)}
        role="button"
        tabIndex={0}
        aria-label={`Lihat sertifikat: ${cert.title}`}
      >
        <div className="relative aspect-video bg-slate-800 overflow-hidden">
          <img
            src={cert.preview}
            alt={`Preview sertifikat ${cert.title}`}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-white truncate">
            {cert.title}
          </h3>
          <p className={`text-sm ${colors.text}`}>{cert.issuer}</p>
          <p className="text-xs text-gray-400 mt-1">{cert.date}</p>
        </div>
      </div>

      {/* Modal PDF */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Lihat sertifikat: ${cert.title}`}
        >
          <div
            className="relative w-full max-w-6xl max-h-[90vh] bg-slate-900 rounded-xl border border-slate-700 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-700">
              <div>
                <h2 className="text-xl font-bold text-white">{cert.title}</h2>
                <p className="text-sm text-gray-400">
                  {cert.issuer} • {cert.date}
                  {numPages && ` • ${numPages} halaman`}
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 text-gray-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
                aria-label="Tutup modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 bg-slate-950">
              <Document
                file={cert.pdf}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                loading={
                  <div className="flex items-center justify-center py-12 text-gray-400">
                    Memuat sertifikat...
                  </div>
                }
                error={
                  <div className="p-6 text-center text-red-400 bg-slate-900 rounded">
                    Gagal memuat PDF. Pastikan file tersedia di{" "}
                    <code className="font-mono">public{cert.pdf}</code>.
                  </div>
                }
                className="flex flex-col items-center"
              >
                {Array.from({ length: numPages || 0 }, (_, i) => (
                  <Page
                    key={`page_${i + 1}`}
                    pageNumber={i + 1}
                    width={pdfWidth}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    className="mb-6 drop-shadow-md rounded"
                  />
                ))}
              </Document>
            </div>

            <div className="p-3 bg-slate-800/50 text-xs text-gray-400 space-y-1">
              {cert.credentialId && (
                <p>
                  ID:{" "}
                  <span className="font-mono text-blue-300">
                    {cert.credentialId}
                  </span>
                </p>
              )}
              <p>
                <strong>Skill:</strong> {cert.skills.join(", ")}
              </p>
              {cert.level && (
                <p>
                  <strong>Level:</strong> {cert.level}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CertificateCard;
