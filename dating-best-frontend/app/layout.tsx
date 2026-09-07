import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/organisms/header"

export const metadata: Metadata = {
  title: "Dating best",
  description: "Choose where to go",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body >
        <Header/>
        {children}
      </body>
    </html>
  );
}
