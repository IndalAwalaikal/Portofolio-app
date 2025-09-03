// pages/contact.tsx
import { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  User,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SocialLinks from "@/components/SocialLinks";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: NextPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format isi email
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Halo Indal,\n\nNama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}\n\nSalam,\n${formData.name}`
    );

    const mailtoLink = `mailto:indalawalaikal05@gmail.com?subject=${subject}&body=${body}`;

    // Buka email client
    window.location.href = mailtoLink;

    // Tampilkan status
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset setelah 5 detik
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 5000);
  };

  // Informasi kontak dengan ID unik
  const contactInfo = [
    {
      id: "email",
      icon: Mail,
      label: "Email",
      value: "indalawalaikal05@gmail.com",
      href: "mailto:indalawalaikal05@gmail.com",
    },
    {
      id: "phone",
      icon: Phone,
      label: "Phone",
      value: "+62 8575-7106-358",
      href: "tel:+6285757106358",
    },
    {
      id: "location",
      icon: MapPin,
      label: "Location",
      value: "Makassar, Indonesia",
      href: "#",
    },
    {
      id: "response",
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      href: "#",
    },
  ];

  interface FAQ {
    question: string;
    answer: string;
  }

  const faqs: FAQ[] = [
    {
      question: "Berapa lama waktu respons Anda biasanya?",
      answer:
        "Saya biasanya merespons email dalam waktu 24 jam pada hari kerja.",
    },
    {
      question: "Apakah Anda bekerja di akhir pekan?",
      answer:
        "Saya tersedia untuk masalah mendesak, tetapi lebih memilih menjadwalkan pertemuan di hari kerja.",
    },
    {
      question: "Proyek apa saja yang saat ini Anda tangani?",
      answer:
        "Saya terbuka untuk proyek pengembangan web, aplikasi mobile, dan konsultasi. Mari diskusikan kebutuhan Anda!",
    },
  ];

  return (
    <>
      <Head>
        <title>Kontak - Portofolio Profesional</title>
        <meta
          name="description"
          content="Hubungi saya untuk kolaborasi, proyek, atau sekadar sapaan"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        <Navbar />

        <div className="pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection>
              <h1 className="text-5xl md:text-7xl font-bold text-center mb-16 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Hubungi Saya
              </h1>
              <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-20">
                Saya selalu terbuka untuk peluang baru dan proyek menarik. Punya
                pertanyaan atau ingin berdiskusi? Jangan ragu untuk menghubungi!
              </p>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form Kontak */}
              <AnimatedSection>
                <div className="bg-slate-800/30 backdrop-blur-lg border border-blue-500/20 rounded-3xl p-8">
                  <h2 className="text-3xl font-bold mb-8 text-blue-300 flex items-center gap-3">
                    <MessageSquare className="w-8 h-8" />
                    Kirim Pesan
                  </h2>

                  {isSubmitted && (
                    <div
                      className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center gap-3"
                      role="alert"
                      aria-live="polite"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-green-300">
                        Email terbuka! Silakan kirim dari aplikasi email Anda.
                      </span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Nama
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-700/50 border border-blue-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                          placeholder="Nama Anda"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-700/50 border border-blue-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                          placeholder="email@contoh.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Subjek
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-blue-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                        placeholder="Tentang apa pesan ini?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Pesan
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-blue-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none"
                        placeholder="Ceritakan lebih tentang proyek Anda..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Membuka...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Kirim Pesan
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </form>
                </div>
              </AnimatedSection>

              {/* Informasi Kontak */}
              <div className="space-y-8">
                <AnimatedSection>
                  <div className="bg-slate-800/30 backdrop-blur-lg border border-blue-500/20 rounded-3xl p-8">
                    <h2 className="text-3xl font-bold mb-8 text-blue-300 flex items-center gap-3">
                      <User className="w-8 h-8" />
                      Informasi Kontak
                    </h2>
                    <div className="space-y-6">
                      {contactInfo.map((info) => {
                        const Icon = info.icon;
                        return (
                          <div
                            key={info.id}
                            className="flex items-center gap-4 group"
                          >
                            <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30 transition-colors duration-300">
                              <Icon className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                              <p className="text-gray-400 text-sm">
                                {info.label}
                              </p>
                              {info.href === "#" ? (
                                <p className="text-white font-medium">
                                  {info.value}
                                </p>
                              ) : (
                                <a
                                  href={info.href}
                                  className="text-white font-medium hover:text-blue-300 transition-colors duration-300"
                                  target={info.href.startsWith("mailto") || info.href.startsWith("tel") ? "_self" : "_blank"}
                                  rel="noopener noreferrer"
                                  title={`Hubungi via ${info.label}`}
                                >
                                  {info.value}
                                </a>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection>
                  <div className="bg-slate-800/30 backdrop-blur-lg border border-blue-500/20 rounded-3xl p-8">
                    <h2 className="text-2xl font-bold mb-6 text-blue-300">
                      Ikuti Saya
                    </h2>
                    <SocialLinks />
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* FAQ Section */}
            <AnimatedSection className="mt-20">
              <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Pertanyaan Umum
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {faqs.map((faq, index) => (
                  <AnimatedSection
                    key={faq.question}
                    delay={index * 0.1}
                    duration={0.5}
                    className="h-full"
                  >
                    <div className="bg-slate-800/30 backdrop-blur-lg border border-blue-500/20 rounded-2xl p-6 hover:border-blue-400/40 transition-all duration-300 h-full flex flex-col">
                      <h3 className="text-lg font-semibold text-blue-300 mb-3 group-hover:text-cyan-300 transition-colors duration-300 line-clamp-2">
                        {faq.question}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed flex-1">
                        {faq.answer}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

            {/* Call to Action */}
            <AnimatedSection className="mt-20 text-center">
              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg border border-blue-500/30 rounded-3xl p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Siap Memulai Proyek Anda?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Mari diskusikan bagaimana kita bisa mewujudkan ide Anda. Saya siap membantu Anda menciptakan sesuatu yang luar biasa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:indalawalaikal05@gmail.com"
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-2"
                    title="Kirim email sekarang"
                  >
                    <Mail className="w-5 h-5" />
                    Email Saya
                  </a>
                  <a
                    href="tel:+6285757106358"
                    className="px-8 py-4 bg-slate-700/50 border border-blue-500/30 text-white rounded-xl font-semibold hover:border-blue-400/50 hover:bg-slate-700/70 transition-all duration-300 inline-flex items-center justify-center gap-2"
                    title="Telepon sekarang"
                  >
                    <Phone className="w-5 h-5" />
                    Telepon Saya
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Contact;