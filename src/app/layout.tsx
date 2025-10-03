import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "KheeHoo - Innovative Business Solutions",
  description: "Empowering businesses with innovative solutions and cutting-edge technology to drive growth and success in the digital age.",
  keywords: "business solutions, technology, innovation, web development, AI solutions",
  authors: [{ name: "KheeHoo Team" }],
  openGraph: {
    title: "KheeHoo - Innovative Business Solutions",
    description: "Empowering businesses with innovative solutions and cutting-edge technology",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "KheeHoo - Innovative Business Solutions",
    description: "Empowering businesses with innovative solutions and cutting-edge technology",
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
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
