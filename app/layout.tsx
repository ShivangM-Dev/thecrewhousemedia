
import './globals.css';
import type { Metadata } from 'next';
import { Inter, Dancing_Script } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
  display: 'swap',
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Crew House Media — We Build Digital Systems That Scale Brands',
  description:
    'From strategy to execution — we craft high-performing websites, powerful content, and data-driven campaigns that deliver real growth.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dancingScript.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
