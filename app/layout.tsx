import type { Metadata } from "next";
import { Geist, Geist_Mono, Press_Start_2P } from "next/font/google";
import { } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pressStart2P = Press_Start_2P({
  weight: "400",
  variable: "--font-press-start",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pokedex Next",
  description: "Pokedex Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pressStart2P.variable}`}
      >
        <header
          style={{
            backgroundColor: "var(--primary)",
            color: "#ffcb05",
            padding: "1rem",
            textAlign: "center",
            fontFamily: "var(--font-press-start)",
          }}
        >
          <h2
            style={{
              textShadow: "4px 4px 2px #2a75bb", 
              fontSize: "1.5rem", 
            }}
          >
            Pokédex
          </h2>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
