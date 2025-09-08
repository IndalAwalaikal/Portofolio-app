"use client";

import React, { useState, useEffect } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import { FileText, X } from "lucide-react";
import type { Certificate } from "../types/certificate";

if (typeof window !== "undefined") {
  const pdfjsVersion = "3.11.174";
  pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`;
}

interface CertificateCardProps {
  cert: Certificate;
  index: number;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ cert, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pdfWidth, setPdfWidth] = useState(600);

  // Animasi muncul
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50 + index * 50);
    return () => clearTimeout(timer);
  }, [index]);

  // Ukuran PDF viewer responsif
  useEffect(() => {
    const handleResize = () => {
      setPdfWidth(window.innerWidth > 768 ? 800 : window.innerWidth - 60);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Warna berdasarkan kategori
  const getCategoryColors = (category: Certificate["category"]) => {
    switch (category) {
      case "development":
        return {
          bg: "from-blue-600/20 to-cyan-600/20",
          border: "border-blue-500/30",
          text: "text-blue-400",
          progress: "from-blue-500 to-cyan-500",
        };
      case "design":
        return {
          bg: "from-pink-600/20 to-rose-600/20",
          border: "border-pink-500/30",
          text: "text-pink-400",
          progress: "from-pink-500 to-rose-500",
        };
      case "data":
        return {
          bg: "from-green-600/20 to-emerald-600/20",
          border: "border-green-500/30",
          text: "text-green-400",
          progress: "from-green-500 to-emerald-500",
        };
      case "devops":
        return {
          bg: "from-purple-600/20 to-violet-600/20",
          border: "border-purple-500/30",
          text: "text-purple-400",
          progress: "from-purple-500 to-violet-500",
        };
      case "business":
        return {
          bg: "from-amber-600/20 to-orange-600/20",
          border: "border-amber-500/30",
          text: "text-amber-400",
          progress: "from-amber-500 to-orange-500",
        };
      default:
        return {
          bg: "from-slate-600/20 to-gray-600/20",
          border: "border-slate-500/30",
          text: "text-slate-400",
          progress: "from-slate-500 to-gray-500",
        };
    }
  };

  const colors = getCategoryColors(cert.category);

  return (
    <>
      {/* Certificate Card */}
      <div
        className={`group relative bg-gradient-to-br ${colors.bg} backdrop-blur-lg border ${colors.border} rounded-2xl overflow-hidden cursor-pointer hover:border-opacity-60 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: `${index * 0.1}s` }}
        onClick={() => setIsModalOpen(true)}
        role="button"
        tabIndex={0}
        aria-label={`Lihat sertifikat: ${cert.title}`}
      >
        {/* Thumbnail PDF */}
        <div className="relative aspect-video overflow-hidden bg-slate-800">
          {/* Container yang hanya menampilkan 50% bagian atas */}
          <div
            className="absolute inset-0 flex justify-center"
            style={{ clipPath: "inset(0 0 50% 0)" }}
          >
            <Document
              file={cert.pdf}
              onLoadSuccess={({ numPages }) => setNumPages(numPages)}
              loading=""
              error={
                <div className="flex items-center justify-center w-full h-full bg-slate-700 text-sm text-gray-300">
                  Gagal Muat
                </div>
              }
            >
              <Page
                pageNumber={1}
                width={620}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className="mx-auto"
              />
            </Document>
          </div>

          {/* Overlay Hover (full area) */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full">
              <FileText className="w-5 h-5" />
              <span className="text-sm font-medium">Lihat PDF</span>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-white truncate">{cert.title}</h3>
          <p className={`text-sm ${colors.text}`}>{cert.issuer}</p>
          <p className="text-xs text-gray-400 mt-1">{cert.date}</p>
        </div>
      </div>

      {/* Modal Lihat PDF */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Modal: ${cert.title}`}
        >
          <div
            className="relative w-full max-w-6xl max-h-[90vh] bg-slate-900 rounded-xl border border-slate-700 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div className="flex items-center justify-between p-4 border-b border-slate-700">
              <div>
                <h2 className="text-xl font-bold text-white">{cert.title}</h2>
                <p className="text-sm text-gray-400">
                  {cert.issuer} • {cert.date} •{" "}
                  {numPages ? `${numPages} halaman` : "..."}
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

            {/* Viewer PDF */}
            <div className="flex-1 overflow-y-auto p-4">
              <Document
                file={cert.pdf}
                loading={
                  <div className="flex items-center justify-center py-8 text-gray-400">
                    Memuat sertifikat...
                  </div>
                }
                error={
                  <div className="p-4 text-center text-red-400">
                    Gagal memuat PDF. Coba lagi.
                  </div>
                }
                className="flex flex-col items-center"
              >
                {numPages ? (
                  Array.from({ length: numPages }, (_, i) => (
                    <Page
                      key={`page_${i + 1}`}
                      pageNumber={i + 1}
                      width={pdfWidth}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                      className="mb-4 drop-shadow-lg rounded"
                    />
                  ))
                ) : (
                  <p className="text-center text-gray-400">
                    Sedang memuat jumlah halaman...
                  </p>
                )}
              </Document>
            </div>

            {/* Footer Info */}
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
