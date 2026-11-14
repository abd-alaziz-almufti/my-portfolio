import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "../../globals.css";
import { themeScript } from "../../theme-script";

const plexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://my-portfolio-zeta-three-9gki3si54m.vercel.app"),
  title: "عبدالعزيز المفتي | مطوّر Full Stack (Laravel, Next.js)",
  description:
    "مطوّر Full Stack من غزة، فلسطين. مؤسس والقائد التقني لـ HealthyLife AI، منصة SaaS عربية لأخصائيي التغذية. Laravel و Next.js ومعمارية multi-tenant وتكامل الذكاء الاصطناعي.",
  alternates: { canonical: "/ar", languages: { en: "/", ar: "/ar" } },
  twitter: { card: "summary_large_image", images: ["/og-ar.png"] },
  openGraph: {
    title: "عبدالعزيز المفتي | مطوّر Full Stack",
    description: "مؤسس والقائد التقني لـ HealthyLife AI. Laravel و Next.js وأنظمة SaaS وتكامل الذكاء الاصطناعي.",
    images: [{ url: "/og-ar.png", width: 1200, height: 630 }],
    type: "website",
    locale: "ar",
  },
};

export default function ArabicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className={`${plexArabic.variable} h-full`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
