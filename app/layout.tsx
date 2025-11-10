import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const calSans = localFont({
  src: "../public/font/CalSans-Regular.ttf",
  variable: "--font-cal-sans",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DiveTo.ai",
  description: "Empowering Businesses to Innovate with AI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/HomeBackGround.png" />
          <link rel="icon" type="image/svg+xml" href="/Blacklogo.svg" />
      </head>
      <body className={`${calSans.variable} ${dmSans.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
