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

export const metadata: Metadata = {
  metadataBase: new URL("https://aiautomate2026.dev"),
  title: "AI Automate 2026 | Build with ML & Automation",
  description:
    "AI Automate 2026 is a futuristic hackathon focused on AI agents, machine learning, and intelligent automation systems.",
  keywords: [
    "AI hackathon",
    "machine learning",
    "automation",
    "AI agents",
    "LLM",
    "innovation sprint",
  ],
  openGraph: {
    title: "AI Automate 2026",
    description:
      "Build the Future with Machine Learning & Automation. Join AI Automate 2026.",
    url: "https://aiautomate2026.dev",
    siteName: "AI Automate 2026",
    type: "website",
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
