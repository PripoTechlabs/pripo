import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pripo - Building Smarter Businesses with Technology That Lasts",
  description: "Empowering organizations with precision-engineered software solutions that drive efficiency, foster innovation, and create measurable business impact.",
  keywords: [
    "software solutions",
    "digital transformation",
    "custom applications",
    "enterprise platforms",
    "technology consulting",
    "UI/UX design",
    "cloud solutions",
    "web development",
    "mobile app development"
  ],
  authors: [{ name: "Pripo" }],
  creator: "Pripo",
  publisher: "Pripo",
  openGraph: {
    title: "Pripo - Building Smarter Businesses with Technology That Lasts",
    description: "Empowering organizations with precision-engineered software solutions that drive efficiency, foster innovation, and create measurable business impact.",
    url: "https://pripo.in",
    siteName: "Pripo",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pripo - Building Smarter Businesses with Technology That Lasts",
    description: "Empowering organizations with precision-engineered software solutions that drive efficiency, foster innovation, and create measurable business impact.",
    creator: "@pripo_tech",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
