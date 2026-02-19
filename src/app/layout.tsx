import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Renesh Naidu Para | Senior Software Engineer",
  description: "Senior Software Engineer specializing in C++, Linux systems, embedded development, and cloud infrastructure. 6+ years building scalable, high-performance systems.",
  keywords: [
    "software engineer",
    "C++",
    "Linux",
    "embedded systems",
    "Kubernetes",
    "backend",
    "system programming",
    "DevOps",
    "OpenShift",
    "cloud infrastructure",
    "device drivers",
    "observability",
    "EFK stack",
  ],
  authors: [{ name: "Renesh Naidu Para" }],
  creator: "Renesh Naidu Para",
  publisher: "Renesh Naidu Para",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Renesh Naidu Para | Senior Software Engineer",
    description: "Senior Software Engineer specializing in C++, Linux systems, embedded development, and cloud infrastructure. 6+ years building scalable, high-performance systems.",
    type: "website",
    locale: "en_US",
    siteName: "Renesh Naidu Para Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Renesh Naidu Para | Senior Software Engineer",
    description: "Senior Software Engineer specializing in C++, Linux systems, and cloud infrastructure.",
    creator: "@reneshnaidu",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LoadingScreen />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
