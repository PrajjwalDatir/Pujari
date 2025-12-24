import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pujari | Authenticity in Every Ritual",
  description: "The premier matching platform for Vedic rituals. Connect with verified Pujaris for sacred ceremonies, Sanskaras, and astrological guidance. Experience tradition, digitized.",
  keywords: ["pujari", "vedic rituals", "hindu priest", "puja booking", "pandit online", "homa", "sanskaras", "spiritual services"],
  openGraph: {
    title: "Pujari - Connect with the Sacred",
    description: "Book verified Vedic experts for authentic rituals. Trusted by 10,000+ families.",
    type: "website",
    siteName: "Pujari",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pujari | The Ritual Matching Platform",
    description: "Connect with verified Pujaris for authentic Vedic ceremonies.",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
