import type { Metadata } from "next";
import { Inter, Lora, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Navber from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Lora({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navber />
        {children}
        <Footer />
      </body>
    </html>
  );
}
