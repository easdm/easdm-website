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

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "EAS | Enterprise Application Solutions",
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
      <body className="min-h-full flex flex-col bg-[#0A1A2F] text-white relative">
        {/* Global Blueprint Tech Grid Background */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:40px_40px] opacity-75" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,155,255,0.05),_transparent_75%)]" />
        </div>
        <Header />
        <div className="flex-grow relative z-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
