import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
});

export const metadata: Metadata = {
  title: 'GudPals | Meetups, Events, Travel, Health & Stores in your city',
  description: 'GudPals is India’s premier lifestyle & experience platform. Discover top tech meetups, stand-up comedy shows, weekend mountain treks, water sports, yoga studios, and curated local stores in Mumbai, Delhi NCR, Bangalore, and Kolkata.',
  keywords: ['Meetups', 'Events', 'Travel', 'Activities', 'Health', 'Stores', 'GudPals', 'Mumbai', 'Delhi', 'Bangalore', 'Kolkata'],
  authors: [{ name: 'GudPals Team' }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans min-h-screen bg-gray-950 text-white flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
