

import type { Metadata } from "next";
import { DM_Sans, Cal_Sans, Inter } from "next/font/google"; // Import both fonts
import "./globals.css";


const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans", 
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", 
});


const calSans = Cal_Sans({
  subsets: ["latin"],
  weight: ["400"], 
  variable: "--font-cal-sans", 
});

export const metadata: Metadata = {
  title: "DiveTo.ai",
  description: "Empowering Businesses to Innovate with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} ${calSans.variable}`}>
        {children}
      </body>
    </html>
  );
}