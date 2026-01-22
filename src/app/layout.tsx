import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import StarryBackground from "@/components/StarryBackground";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.teleport.beer"),
  title: {
    default: "TelePort™ — Высокоскоростной сетевой шлюз. Протоколы VLESS. Оплата картой РФ.",
    template: "TelePort™ — %s | Приватный канал",
  },
  description: "Высокоскоростной сетевой шлюз для безопасной передачи данных. Защита соединения по современным протоколам. Стабильный доступ к рабочим и личным ресурсам. Оплата картой РФ.",
  keywords: ["Сетевой шлюз", "Безопасное соединение", "Защита данных", "Быстрый интернет", "Network Gateway"],
  authors: [{ name: "TelePort Team" }],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://www.teleport.beer",
    siteName: "TelePort™",
    title: "TelePort™ — Высокоскоростной сетевой шлюз. Протоколы VLESS. Оплата картой РФ.",
    description: "Высокоскоростной сетевой шлюз для безопасной передачи данных. Защита соединения по современным протоколам. Стабильный доступ к рабочим и личным ресурсам. Оплата картой РФ.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TelePort VPN Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TelePort™ — Высокоскоростной сетевой шлюз. Протоколы VLESS. Оплата картой РФ.",
    description: "Высокоскоростной сетевой шлюз для безопасной передачи данных. Защита соединения по современным протоколам. Стабильный доступ к рабочим и личным ресурсам. Оплата картой РФ.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
  themeColor: "#0f172a",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "TelePort™",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "iOS, Android, Windows, macOS",
  "offers": {
    "@type": "Offer",
    "price": "99",
    "priceCurrency": "RUB"
  },
  "description": "Высокоскоростной сетевой шлюз для безопасной передачи данных. Защита соединения по современным протоколам. Стабильный доступ к рабочим и личным ресурсам. Оплата картой РФ.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1245"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark">
      <head>
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased bg-slate-950 text-slate-50 selection:bg-purple-500/30`}
      >
        <StarryBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
