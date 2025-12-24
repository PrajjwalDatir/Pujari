import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pujari - The Ritual Matching Platform",
  description: "Connect with verified Pujaris for authentic Vedic ceremonies, Sanskaras, and Homas. Book trusted priests online.",
  keywords: ["pujari", "vedic rituals", "hindu priest", "puja booking", "pandit online"],
  openGraph: {
    title: "Pujari - Connect with the Sacred",
    description: "Find and book verified Vedic experts for your rituals.",
    type: "website",
    siteName: "Pujari",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pujari - The Ritual Matching Platform",
    description: "Connect with verified Pujaris for authentic Vedic ceremonies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
