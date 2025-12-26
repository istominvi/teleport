import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StarryBackground from "@/components/StarryBackground";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"], // Added cyrillic since the menu items are in Russian
});

export const metadata: Metadata = {
  title: "TelePort™ - Защищенный канал связи",
  description: "Сервис для безопасной передачи данных. Современное шифрование и анонимность.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark">
      <body
        className={`${inter.variable} antialiased bg-slate-950 text-slate-50 selection:bg-purple-500/30`}
      >
        <StarryBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
