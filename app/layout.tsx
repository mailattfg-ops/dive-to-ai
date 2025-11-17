import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

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
  title: "DiveTo.ai — Empowering Businesses to Innovate with AI",
  description:
    "DiveTo.ai helps businesses transform with AI. Get hands-on AI consulting, implementation, and product development support. Join 10,000+ professionals learning and building AI solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
         <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />

        <link rel="preload" as="image" href="/HomeBackGround.png" />
        <link rel="icon" type="image/x-icon" href="/BlackIcon.ico" />
        <link rel="icon" type="image/svg+xml" href="/Blacklogo.svg" />
        <link rel="shortcut icon" href="/BlackIcon.ico" />

        <link rel="apple-touch-icon" sizes="180x180" href="/Blacklogo.png" />
        <meta
          property="og:title"
          content="DiveTo.ai — Empowering Businesses to Innovate with AI"
        />
        <meta
          property="og:description"
          content="Master AI to transform your business — consulting, implementation, and hands-on product development challenges. Join 10,000+ professionals building with AI."
        />
        <meta property="og:type" content="website" />
      </head>
      <body
        className={`${calSans.variable} ${dmSans.variable} ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
