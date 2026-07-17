import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "EAS LLC | Enterprise Application Solutions",
  description: "Modern cloud, identity, endpoint, and application engineering for the digital enterprise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <header>
          {/* Brand Header */}
          <div className="w-full bg-[#0A1A2F] text-white py-4 px-6 animate-fade-in">
            <div className="mx-auto max-w-6xl">
              <h1 className="text-xl font-semibold">EAS LLC</h1>
              <p className="text-xs text-slate-300">Enterprise Application Solutions</p>
            </div>
          </div>

          {/* Navigation Bar */}
          <nav className="w-full bg-white shadow-sm py-3 px-6 sticky top-0 z-50 animate-slide-down">
            <div className="mx-auto max-w-6xl">
              <ul className="flex gap-6 text-sm font-medium text-slate-700">
                <li><Link href="/services/cloud-architecture">Services</Link></li>
                <li><Link href="/industries/government">Industries</Link></li>
                <li><Link href="/case-studies/coddleme">Case Studies</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
          </nav>
        </header>

        <main className="flex-grow pt-4">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
