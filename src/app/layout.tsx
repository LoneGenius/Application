import './globals.css'
import Link from 'next/link'
import { Briefcase, Layers, Compass, Home } from 'lucide-react' // added Home icon

export const metadata = {
  title: 'TechnologyKU',
  description: 'Discover inclusive careers, skills, and pathways',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {/* Navbar */}
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <nav className="container mx-auto flex items-center justify-between p-4">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              TechnologyKu
            </Link>
            <div className="flex gap-6 text-gray-700">
              <Link href="/" className="hover:text-indigo-600 flex items-center">
                <Home size={20} />
              </Link>
              <Link href="/careers" className="hover:text-indigo-600 flex items-center gap-1">
                <Briefcase size={18}/> Careers
              </Link>
              <Link href="/skills" className="hover:text-indigo-600 flex items-center gap-1">
                <Layers size={18}/> Skills
              </Link>
              <Link href="/pathways" className="hover:text-indigo-600 flex items-center gap-1">
                <Compass size={18}/> Pathways
              </Link>
            </div>
          </nav>
        </header>

        {/* Page content */}
        <main className="container mx-auto px-6 py-10">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-200 text-center text-sm py-4 mt-20">
          © {new Date().getFullYear()} LaunchPad — All rights reserved
        </footer>
      </body>
    </html>
  )
}
