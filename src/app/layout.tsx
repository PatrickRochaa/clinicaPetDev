import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AosInit } from "../app/_components/aos-init"; // ajuste o caminho conforme necessário

import Head from "next/head"; // Importa o Head do Next.js

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PetDev - Clínica Veterinária e Pet Shop",
  description:
    "PetDev é uma clínica veterinária e pet shop dedicada ao bem-estar dos seus animais de estimação.",
  icons: "/petshop.png", // <-- Aqui resolve o favicon
  keywords: ["petshop", "clínica veterinária", "veterinário"], // palavras chaves 
  openGraph: {
    images: ["https://clinica-pet-dev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-1.970eebd7.png&w=1920&q=100"]
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /* Definindo o idioma como pt-BR */
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AosInit /> {/* Inicializa o AOS uma vez */}
        {children}
      </body>
    </html>
  );
}
