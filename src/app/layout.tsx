import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leah Creighton | Professional Realtor",
  description: "Expert real estate services for buying, selling, and investing. Serving your community with dedication and excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased">
        <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
          <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4">
            <Link href="/" className="text-2xl font-bold tracking-tight text-slate-900 whitespace-nowrap">
              LEAH <span className="text-blue-700">CREIGHTON</span>
            </Link>
            
            <div className="flex items-center gap-6 lg:gap-12 ml-auto">
              <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider text-slate-600">
                <Link href="/buy" className="hover:text-blue-700 transition-colors">Buy</Link>
                <Link href="/sell" className="hover:text-blue-700 transition-colors">Sell</Link>
                <Link href="/blog" className="hover:text-blue-700 transition-colors">Blog</Link>
                <Link href="/contact" className="hover:text-blue-700 transition-colors font-semibold">Contact</Link>
              </nav>

              <div className="flex-shrink-0 h-16 w-auto py-2">
                <Image 
                  src="/images/lpt-logo.png" 
                  alt="LPT Realty Logo" 
                  width={150} 
                  height={60} 
                  className="h-full w-auto object-contain"
                  priority
                />
              </div>

              <div className="md:hidden">
                <button className="p-2 text-slate-900">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-slate-900 text-slate-300 py-12">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Leah Creighton</h3>
              <p className="text-sm leading-relaxed max-w-xs">
                Professional Realtor dedicated to helping families find their perfect home. Committed to excellence, integrity, and your satisfaction.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/buy" className="hover:text-white">Buying a Home</Link></li>
                <li><Link href="/sell" className="hover:text-white">Selling your Property</Link></li>
                <li><Link href="/blog" className="hover:text-white">Real Estate Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact Me</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Contact Info</h3>
              <ul className="space-y-2 text-sm">
                <li>Email: leah@example.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Address: 123 Realty Way, City, ST 12345</li>
              </ul>
            </div>
          </div>
          <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 text-center">
            &copy; {new Date().getFullYear()} Leah Creighton. All rights reserved. Equal Housing Opportunity.
          </div>
        </footer>
      </body>
    </html>
  );
}
