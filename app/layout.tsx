import './globals.css'
import { Inter } from 'next/font/google'
import {Navbar} from "@/app/components/Navbar";
import React from "react";
import Footer from "@/app/components/Footer";
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "دوره های آموزشی ول‌بیوتی",
  description: 'دوره ها ',
}
const IranSans = localFont({
    src: [
        {
            path: '../public/fonts/IRANSansRegular.ttf',
            weight: '400'
        },
        {
            path: '../public/fonts/IRANSansUltraLight.ttf',
            weight: '200'
        },
        {
            path: '../public/fonts/IRANSansMedium.ttf',
            weight: '500'
        }
    ],
    variable: '--font-IRANSans'
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${IranSans.variable} font-sans`}>
      <body className={inter.className}>
      <Navbar />


      {children}
      <Footer />
      </body>
    </html>
  )
}
