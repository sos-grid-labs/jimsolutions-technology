import type { Metadata } from 'next';
import { Barlow, Inter } from 'next/font/google';
import '@/lib/fontawesome';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';

/**
 * Display font — Barlow ExtraBold/Black used uppercase with tight tracking
 * to replicate the "Big Shoulders Display" look within the sandbox env.
 * CSS variable: --font-display
 */
const barlowDisplay = Barlow({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['700', '800'],
  display: 'swap',
});

/**
 * Body font — Inter.
 * CSS variable: --font-body
 */
const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

// --font-mono is set to a system monospace stack in globals.css

export const metadata: Metadata = {
  title: {
    template: '%s | Jimsolutions Technology',
    default: 'Jimsolutions Technology | Electrical, Solar & Home Solutions in Lagos',
  },
  description:
    'Jimsolutions Technology provides professional electrical wiring, solar installation, home appliances supply/setup, kitchen setups, and interior design across Lagos and Nigeria.',
  keywords: [
    'electrician in Lagos',
    'electrical services Lagos',
    'solar installation Lagos',
    'inverter installation Lagos',
    'home appliances Lagos',
    'kitchen installation Lagos',
    'interior design Nigeria',
    'laundry room setup',
    'solar company Nigeria',
    'electrical contractor Nigeria',
  ],
  metadataBase: new URL('https://jimsolutionstechnology.com.ng'),
  alternates: { canonical: '/' },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/img/logo/logo.jpg',
  },
  openGraph: {
    title: 'Jimsolutions Technology | Electrical, Solar & Home Solutions',
    description:
      'Professional electrical wiring, solar energy systems, kitchen installation, and interior design services in Lagos and nationwide. Daily 8am - 10pm.',
    url: 'https://jimsolutionstechnology.com.ng',
    siteName: 'Jimsolutions Technology',
    locale: 'en_NG',
    type: 'website',
    images: [
      {
        url: '/img/logo/logo.jpg',
        width: 800,
        height: 800,
        alt: 'Jimsolutions Technology Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jimsolutions Technology | Electrical, Solar & Home Solutions',
    description:
      'Professional electrical wiring, solar energy systems, kitchen installation, and interior design services in Lagos and nationwide. Daily 8am - 10pm.',
    images: ['/img/logo/logo.jpg'],
  },
  verification: {
    google: 'jZmEtNlxIOPvG8x4kvoO2hb_6H3MmdbkLcwAo-iM11I',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${barlowDisplay.variable} ${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
