import './globals.css'
import { Inter } from 'next/font/google'
import {Navbar} from "@/app/components/Navbar";
import {Banner} from "@/app/components/Banner";
import React from "react";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "دوره های آموزشی ول‌بیوتی",
  description: 'دوره ها ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />


      {children}
      <Footer />
      </body>
    </html>
  )
}
