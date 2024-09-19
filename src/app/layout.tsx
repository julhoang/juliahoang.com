import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Julia Hoang 👩‍💻 | Freelance Web Developer",
    description:
        "Julia Hoang is a freelance web developer with a passion for building sleek and robust web applications.",
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
            </body>
        </html>
    );
}
