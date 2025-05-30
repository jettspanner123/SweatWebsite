import type {Metadata} from "next";
import {Geist, Geist_Mono, Oswald} from "next/font/google";
import "./globals.css";
import React from "react";
import {NextFont, NextFontWithVariable} from "next/dist/compiled/@next/font";

const geistSans: NextFontWithVariable = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const oswald: NextFontWithVariable = Oswald({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700"],
    variable: "--font-oswald"
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "SweatIt Official Website",
    description: "Your Workout, Diet and AI Coach.",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>): React.JSX.Element {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased ${oswald.variable}`}
        >
        {children}
        </body>
        </html>
    );
}
