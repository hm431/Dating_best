import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";

import Header from "./components/header"
import localFont from 'next/font/local'

// Настройка шрифтов 
const inter = Inter({ 
  subsets: ["latin", "cyrillic"], 
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" >
      <body className={inter.variable}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
