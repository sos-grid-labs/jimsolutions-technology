import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import '@/lib/fontawesome';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
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
    <html lang="en" className={`${inter.variable} ${manrope.variable} h-full scroll-smooth`}>
      <body className="font-body min-h-full flex flex-col bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
