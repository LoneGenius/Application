// src/app/layout.tsx
import './globals.css';
import Link from 'next/link';
import { Home, User, Code, Layers, Users } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'TechnologyKu',
  description: 'Discover inclusive careers, skills, and pathways',
  icons: '/favicon.ico',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {/* Navbar */}
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <nav className="container mx-auto flex items-center justify-between p-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.jpg"
                alt="TechnologyKu Logo"
                width={50}
                height={50}
                className="rounded-full object-cover"
                priority
              />
              <span className="text-2xl font-bold text-indigo-700 hover:text-indigo-800">
                TechnologyKu
              </span>
            </Link>

            <div className="flex gap-6 text-gray-700 font-medium">
              <Link href="/" className="hover:text-indigo-600 flex items-center gap-1">
                <Home size={18} /> Home
              </Link>
              <Link href="/about" className="hover:text-indigo-600 flex items-center gap-1">
                <User size={18} /> About Us
              </Link>
              <Link href="/framework" className="hover:text-indigo-600 flex items-center gap-1">
                <Code size={18} /> Methodology
              </Link>
              <Link href="/analytics" className="hover:text-indigo-600 flex items-center gap-1">
                <Layers size={18} /> Analytics
              </Link>
              <Link href="/chat" className="hover:text-indigo-600 flex items-center gap-1">
                <Users size={18} /> Career Guidance
              </Link>
            </div>
          </nav>
        </header>

        <main className="container mx-auto px-6 py-10">{children}</main>

        <footer className="bg-gray-200 text-center text-sm py-4 mt-20">
          © {new Date().getFullYear()} LaunchPad — All rights reserved
        </footer>
      </body>
    </html>
  );
}
