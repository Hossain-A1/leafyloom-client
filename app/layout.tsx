import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lora } from "next/font/google";
import "./globals.css";

const inter = Lora({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html> 
  );
}
