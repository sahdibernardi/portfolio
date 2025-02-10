import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const syne = Inter({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://www.example.com/"),
    title: "Sahra's Portfolio",
    description:
    "Sahra Di Bernardi is a full-stack Web Developer with a strong focus on front-end and user experience",
    generator: "Next.js",
    applicationName: "Sahra's Portfolio",
    icons: {
        icon: '/metadata.svg'
    },
    keywords: [
        "React",
        "developer",
        "frontend",
        "nextjs",
        "react",
        "frontend developer",
        "frontend engineer",
        "full-stack developer",
        "full-stack engineer",
        "creative",
        "creative developer",
        "creative engineer",
        "tech",
        "software",
        "software developer",
        "portfolio",
        "frontend developer portfolio",
        "full-stack developer portfolio",
        "creative developer portfolio",
        "creative engineer portfolio",
        "software developer portfolio",
        "frontend engineer portfolio",
        "full-stack engineer portfolio"
    ],
    colorScheme: "dark",
    openGraph: {
        title: "Portfolio - Sahra Di Bernardi",
        description:
      "Sahra Di Bernardi is a full-stack Web Developer with a strong focus on front-end and user experience",
        url: "",
        siteName: "",
        images: [
            {
                url: "./public/metadata.svg",
                width: 1200,
                height: 630,
                alt: "Sahra Di Bernardi",
            },
        ],
        locale: "en-US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Sahra Di Bernardi",
        description:
      "Sahra Di Bernardi is a Software Engineer specialized in React/Node development",
        creator: "@sahdibernardi",
        creatorId: "0000000000",
        images: ["./public/metadata.svg"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body
                className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
            >
                {children}
            </body>
        </html>
    );
}
