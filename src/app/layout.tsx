import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khozhiakbar",
  description: "Portfolio",
  keywords: ["hadzhi bachend", "hadzhi django", "hadzhi portfolio", "hadzhi"],
  creator: "Khozhiakbar Muhammad",
  publisher: "My Portfolio",

  openGraph: {
    title: "Hadzhi's Portfolio",
    description: "Hadzhi, Back-End developer portfolio",
    url: "https://dior-portfolio.netlify.app/",
    siteName: "Hadzhi's Portfolio",
    images: [
      {
        url: "https://example.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hadzhi's Portfolio",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className="bg-custom-black dark:bg-[#E8D4B7]">
        {children}
      </body>
    </html>
  );
}
