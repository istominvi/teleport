import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"], // Added cyrillic since the menu items are in Russian
});

export const metadata: Metadata = {
  title: "TelePort™ VPN - Скоростной и безопасный доступ",
  description: "Next-generation VPN service for secure and fast internet access.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark">
      <body className={`${inter.variable} antialiased bg-slate-950 text-slate-50 selection:bg-purple-500/30`}>
        {children}
      </body>
    </html>
  );
}
