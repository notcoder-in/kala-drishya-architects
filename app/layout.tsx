import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kala Drishya Architects | Architecture · Interior · BIM · Surat",
  description:
    "Kala Drishya Architects is a Surat-based architecture and design firm specialising in architectural design, interior design, BIM services, project management, and 3D planning. 78+ projects completed since 2019.",
  keywords: [
    "Architects in Surat",
    "Interior Designers in Surat",
    "BIM Services India",
    "PMC Gujarat",
    "3D Rendering Surat",
    "Kala Drishya Architects",
    "Architecture firm Surat",
  ],
  authors: [{ name: "Kala Drishya Architects" }],
  openGraph: {
    title: "Kala Drishya Architects",
    description:
      "Designing spaces that reflect vision & function. Architecture · Interior · BIM · PMC · 3D Planning.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
