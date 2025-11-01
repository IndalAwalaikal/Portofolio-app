// pages/_app.tsx
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

// Optimalkan font loading — hanya load subset yang dibutuhkan
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // gunakan CSS variable untuk fleksibilitas
  display: 'swap', // meningkatkan FCP (First Contentful Paint)
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange // hindari flash saat ganti tema
    >
      <div className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}