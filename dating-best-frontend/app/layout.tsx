import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";

import Header from "@/components/organisms/header"

export const metadata: Metadata = {
  title: "Dating best",
  description: "Choose where to go",
};

const inter = Inter({
  subsets: ["latin"],
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
