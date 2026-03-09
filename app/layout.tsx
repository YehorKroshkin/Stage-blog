import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";
import Footer from "@/components/Footer";
import { CookieConsentProvider } from "@/components/CoockieConsentContext";
import CookieConsentPopup from "@/components/CoockiePopUp";
import { CookieBlockerOverlay } from "@/components/CoockieBlocker";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WPL Stage",
  description: "My stage blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CookieConsentProvider>
          {children}
          <CookieConsentPopup pagePath="/" />
          {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
        </CookieConsentProvider>
      </body>
      
    </html>
  );
}
