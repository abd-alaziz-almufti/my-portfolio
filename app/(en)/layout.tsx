import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans } from "next/font/google";
import "../globals.css";
import { themeScript } from "../theme-script";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://my-portfolio-zeta-three-9gki3si54m.vercel.app"),
  title: "Abdalaziz Almufti | Full Stack Developer (Laravel, Next.js)",
  description:
    "Full Stack Developer in Gaza, Palestine. Founder and tech lead of HealthyLife AI, an Arabic-first SaaS platform for nutrition specialists. Laravel, Next.js, multi-tenant architecture and AI integration.",
  alternates: { canonical: "/", languages: { en: "/", ar: "/ar" } },
  twitter: { card: "summary_large_image", images: ["/og-en.png"] },
  openGraph: {
    title: "Abdalaziz Almufti | Full Stack Developer",
    description:
      "Founder and tech lead of HealthyLife AI. Laravel, Next.js, multi-tenant SaaS and AI integration.",
    images: [{ url: "/og-en.png", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${plex.variable} h-full`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
