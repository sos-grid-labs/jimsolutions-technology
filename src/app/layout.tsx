import type { Metadata } from 'next';
import { Barlow } from 'next/font/google';
import '@/lib/fontawesome';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';

const barlow = Barlow({
  variable: '--font-barlow',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

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
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Jimsolutions Technology | Electrical, Solar & Home Solutions',
    description:
      'Professional electrical wiring, solar energy systems, kitchen installation, and interior design services in Lagos and nationwide. Daily 8am - 10pm.',
    url: 'https://jimsolutionstechnology.com.ng',
    siteName: 'Jimsolutions Technology',
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jimsolutions Technology | Electrical, Solar & Home Solutions',
    description:
      'Professional electrical wiring, solar energy systems, kitchen installation, and interior design services in Lagos and nationwide. Daily 8am - 10pm.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} h-full scroll-smooth`}>
      <body className="font-body min-h-full flex flex-col bg-background text-foreground antialiased">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
