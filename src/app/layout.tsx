import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ismail ZAHIR . Software Engineer",
  authors: [{ name: 'Ismail ZAHIR'}],
  description: "I'm Ismail ZAHIR, a Software Engineering and Computer Systems Integration student with a strong foundation in software engineering. I'm passionate about innovation and love exploring blockchain and artificial intelligence. Join me in creating exceptional software experiences and embracing the potential of technology.",
  keywords: ["Ismail ZAHIR", "Software Engineer", "Blockchain", "Artificial Intelligence", "Software Engineering", "Computer Systems Integration"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
