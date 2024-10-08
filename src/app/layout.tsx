import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Julia Hoang 👩‍💻 | Freelance Software Developer in Vancouver",
    description:
        "Julia Hoang is a freelance software developer with a passion for building sleek and robust web applications.",
    keywords:
        "freelancer, web developer, computer science, student, freelance, startup, co-founder",
    authors: [{ name: "Julia Hoang" }],
    robots: "index, follow",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={inter.variable}
        >
            <body>
                {children}

                <GoogleAnalytics gaId={process.env.GA_MEASUREMENT_ID!} />
                <Script src="../actions/navbar.js" />
            </body>
        </html>
    );
}
