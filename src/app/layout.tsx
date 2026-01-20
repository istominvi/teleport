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
    default: "TelePort™ — Безопасный высокоскоростной доступ к глобальному контенту.",
    template: "TelePort™ — %s | Глобальный доступ",
  },
  description: "TelePort — это высокоскоростной приватный протокол для доступа к глобальным медиа, онлайн-играм и стриминговым сервисам. Стабильное соединение для 4K-стриминга и быстрого гейминга. Оплата картой РФ (СБП) от 99₽.",
  keywords: ["приватная сеть", "vless", "высокая скорость", "стриминг 4k", "онлайн-игры", "глобальный доступ", "v2RayTun", "TelePort", "телепорт"],
  authors: [{ name: "TelePort Team" }],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://www.teleport.beer",
    siteName: "TelePort",
    title: "TelePort™ — Безопасный высокоскоростной доступ к глобальному контенту.",
    description: "TelePort — это высокоскоростной приватный протокол для доступа к глобальным медиа, онлайн-играм и стриминговым сервисам. Стабильное соединение для 4K-стриминга и быстрого гейминга.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TelePort Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TelePort™ — Безопасный высокоскоростной доступ к глобальному контенту.",
    description: "TelePort — это высокоскоростной приватный протокол для доступа к глобальным медиа, онлайн-играм и стриминговым сервисам. Стабильное соединение для 4K-стриминга и быстрого гейминга.",
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
  "name": "TelePort",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "iOS, Android, Windows, macOS",
  "offers": {
    "@type": "Offer",
    "price": "99",
    "priceCurrency": "RUB"
  },
  "description": "TelePort — это высокоскоростной приватный протокол для доступа к глобальным медиа, онлайн-играм и стриминговым сервисам. Стабильное соединение для 4K-стриминга и быстрого гейминга.",
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
