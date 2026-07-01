import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Abhinav Anand | Software Developer",
  description:
    "Portfolio of Abhinav Anand, a B.Tech CSE student and competitive programmer building full-stack web applications.",
  keywords: [
    "Abhinav Anand",
    "Software Developer",
    "Full Stack",
    "Next.js",
    "Portfolio",
    "Competitive Programming",
  ],
  openGraph: {
    title: "Abhinav Anand | Software Developer",
    description:
      "Full-stack developer and competitive programmer. B.Tech CSE at ABES Engineering College.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        {children}
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  );
}
