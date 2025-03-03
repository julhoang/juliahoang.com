import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Julia Hoang 👩‍💻 | Software Engineer & Web Developer in Vancouver",
  description:
    "Julia Hoang is a software engineer and web developer based in Vancouver, specializing in crafting modern and user-friendly web applications.",
  keywords:
    "software engineer, web developer, full stack developer, UI/UX, React, Node.js, freelance, Vancouver, TypeScript, JavaScript, frontend, backend",
  authors: [{ name: "Julia Hoang" }],
  robots: "index, follow",
  openGraph: {
    title: "Julia Hoang | Software Engineer & Web Developer",
    description:
      "Building sleek and high-performance web applications with a focus on great user experiences.",
    url: "https://www.juliahoang.com",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}

        <GoogleAnalytics gaId={process.env.GA_MEASUREMENT_ID!} />
        <SpeedInsights />
      </body>
    </html>
  );
}
