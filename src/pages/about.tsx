// pages/about.tsx
import { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';

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

const About: NextPage = () => {
  const experiences: Experience[] = [
    {
      id: 'coconut-backend',
      role: 'Backend Development',
      company: 'COCONUT Computer Club',
      period: '2025 - Sekarang',
      description:
        'Spesialisasi dalam pengembangan aplikasi web responsif menggunakan Golang dan teknologi backend modern.',
    },
  ];

  const education: Education[] = [
    {
      id: 'unikmak-if',
      degree: 'Mahasiswa Teknik Informatika dan Komputer',
      institution: 'Universitas Negeri Makassar',
      period: '2023 - Sekarang',
      description:
        'Fokus pada rekayasa perangkat lunak, pengembangan web, dan teknologi komputer modern.',
    },
  ];

  return (
    <>
      <Head>
        <title>Tentang Saya - Portofolio Profesional</title>
        <meta
          name="description"
          content="Pelajari lebih lanjut tentang latar belakang, pengalaman, dan keahlian saya"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        <Navbar />

        <div className="pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            {/* Hero */}
            <AnimatedSection>
              <h1 className="text-5xl md:text-7xl font-bold text-center mb-16 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Tentang Saya
              </h1>
            </AnimatedSection>

            {/* Cerita Pribadi */}
            <AnimatedSection>
              <section className="max-w-4xl mx-auto mb-20">
                <div className="bg-slate-800/30 backdrop-blur-lg border border-blue-500/20 rounded-3xl p-8 md:p-12">
                  <h2
                    id="journey-heading"
                    className="text-3xl font-bold mb-6 text-blue-300"
                  >
                    Perjalanan Saya
                  </h2>
                  <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                    <p>
                      Saat ini saya adalah mahasiswa semester 5 di Program Studi
                      Teknik Informatika dan Komputer, Universitas Negeri
                      Makassar, yang sedang menempuh pendidikan sejak tahun
                      2023. Perjalanan saya di dunia teknologi dimulai dari rasa
                      penasaran terhadap cara kerja aplikasi dan sistem komputer,
                      yang kemudian memicu minat saya untuk mendalami pengembangan
                      perangkat lunak.
                    </p>
                    <p>
                      Saya fokus pada pengembangan backend dengan teknologi
                      modern seperti Golang dan Python. Saya juga aktif
                      mengembangkan aplikasi full-stack, dengan penekanan pada
                      arsitektur yang solid, performa tinggi, dan kode yang bersih
                      serta mudah dipelihara.
                    </p>
                    <p>
                      Di luar kelas, saya terlibat dalam komunitas teknologi
                      seperti COCONUT Computer Club, tempat saya mengasah
                      keterampilan teknis, berkolaborasi dalam proyek nyata, dan
                      belajar langsung dari sesama pengembang. Saya juga senang
                      mengeksplorasi teknologi baru, berkontribusi pada proyek
                      open-source, dan membagikan pengetahuan melalui dokumentasi
                      atau mentoring sesama mahasiswa.
                    </p>
                  </div>
                </div>
              </section>
            </AnimatedSection>

            {/* Pengalaman Profesional */}
            <AnimatedSection>
              <section className="mb-20">
                <h2
                  id="experience-heading"
                  className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
                >
                  Pengalaman
                </h2>
                {experiences.length > 0 ? (
                  <div className="space-y-8">
                    {experiences.map((exp) => (
                      <div
                        key={exp.id}
                        className="bg-slate-800/30 backdrop-blur-lg border border-blue-500/20 rounded-2xl p-6 hover:border-blue-400/40 transition-all duration-300"
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white">
                              {exp.role}
                            </h3>
                            <p className="text-blue-300 font-medium">
                              {exp.company}
                            </p>
                          </div>
                          <time
                            className="text-gray-400 font-medium mt-2 md:mt-0"
                            dateTime={exp.period}
                          >
                            {exp.period}
                          </time>
                        </div>
                        <p className="text-gray-300">{exp.description}</p>
                      </div>
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
              <section>
                <h2
                  id="education-heading"
                  className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
                >
                  Pendidikan
                </h2>
                {education.length > 0 ? (
                  <div className="space-y-8">
                    {education.map((edu) => (
                      <div
                        key={edu.id}
                        className="bg-slate-800/30 backdrop-blur-lg border border-blue-500/20 rounded-2xl p-6 hover:border-blue-400/40 transition-all duration-300"
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white">
                              {edu.degree}
                            </h3>
                            <p className="text-blue-300 font-medium">
                              {edu.institution}
                            </p>
                          </div>
                          <time
                            className="text-gray-400 font-medium mt-2 md:mt-0"
                            dateTime={edu.period}
                          >
                            {edu.period}
                          </time>
                        </div>
                        <p className="text-gray-300">{edu.description}</p>
                      </div>
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
        </div>

        <Footer />
      </div>
    </>
  );
};

export default About;