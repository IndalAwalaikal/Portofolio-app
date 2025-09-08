'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang', href: '/about' },
    { name: 'Proyek', href: '/projects' },
    { name: 'Sertifikat', href: '/certificates' },
    { name: 'Kontak', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-blue-500/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            Portfolio
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <div
                  key={item.href}
                  className="relative group"
                  style={{ willChange: 'transform' }}
                >
                  <Link
                    href={item.href}
                    className={`text-lg font-medium transition-colors duration-300 px-2 py-1 ${
                      isActive ? 'text-blue-300' : 'text-gray-300 hover:text-blue-300'
                    }`}
                  >
                    {item.name}
                  </Link>

                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 origin-left pointer-events-none"
                    layout
                    initial={{ width: 0 }}
                    animate={{ width: isActive ? '100%' : '0%' }}
                    whileHover={{ width: '100%' }}
                    transition={{
                      width: {
                        duration: 0.4,
                        ease: 'easeInOut',
                      },
                    }}
                  />
                </div>
              );
            })}
          </div>

          <MobileMenuButton items={navItems} />
        </div>
      </div>
    </nav>
  );
}

function MobileMenuButton({ items }: { items: { name: string; href: string }[] }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-300 focus:outline-none"
        aria-expanded={isOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden mt-4 bg-slate-800/90 backdrop-blur-md rounded-xl p-4 border border-blue-500/20"
        >
          {items.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 text-lg font-medium rounded-lg mb-2 transition-colors duration-300 ${
                  isActive
                    ? 'text-blue-300 bg-blue-500/10 border-l-2 border-blue-400'
                    : 'text-gray-300 hover:text-blue-300 hover:bg-slate-700'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </motion.div>
      )}
    </>
  );
}
