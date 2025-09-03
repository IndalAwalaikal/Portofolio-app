import SocialLinks from './SocialLinks'; 

export default function Footer() {
  return (
    <footer className="bg-slate-900/40 backdrop-blur-sm border-t border-blue-500/20 dark:border-cyan-500/20 py-10 mt-20">
      <div className="container mx-auto px-6">
        {/* Teks Utama */}
        <p className="text-center text-gray-300 mb-6 text-sm md:text-base">
          &copy; {new Date().getFullYear()}{' '}
          <span className="font-semibold text-white">Indal Awalaikal</span>. Dibuat dengan{' '}
          <span className="text-blue-400 font-mono">Next.js</span> &{' '}
          <span className="text-cyan-400 font-mono">Tailwind CSS</span>
        </p>

        {/* Gunakan komponen SocialLinks saja */}
        <div className="flex justify-center mb-6">
          <SocialLinks />
        </div>

        {/* Credit kecil */}
        <div className="text-center text-xs text-gray-500 dark:text-gray-500">
          🚀 Hosted with Vercel | Optimized for performance & accessibility
        </div>
      </div>
    </footer>
  );
}