import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Elixir Dairy - Pure Elixir: Redefining Freshness',
  description: 'Premium milk supplier sourced from pristine farms, delivered with innovation. Discover our range of organic, sustainable dairy products crafted with cutting-edge technology.',
  keywords: ['premium milk', 'organic dairy', 'sustainable farming', 'fresh milk delivery', 'elixir dairy', 'plant-based milk', 'lactose-free milk'],
  authors: [{ name: 'Elixir Dairy' }],
  creator: 'Elixir Dairy',
  publisher: 'Elixir Dairy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://elixirdairy.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Elixir Dairy - Pure Elixir: Redefining Freshness',
    description: 'Premium milk supplier sourced from pristine farms, delivered with innovation.',
    url: 'https://elixirdairy.com',
    siteName: 'Elixir Dairy',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Elixir Dairy - Premium Milk Supplier',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elixir Dairy - Pure Elixir: Redefining Freshness',
    description: 'Premium milk supplier sourced from pristine farms, delivered with innovation.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  // Accessibility improvements
  other: {
    'theme-color': '#A8DADC',
    'color-scheme': 'light dark',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased min-h-screen overflow-x-hidden font-light`}>
        <Navigation />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}