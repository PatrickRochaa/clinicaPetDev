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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {/* Definindo o idioma como pt-BR */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AosInit /> {/* Inicializa o AOS uma vez */}
        {children}
      </body>
    </html>
  );
}
