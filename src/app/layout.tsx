import type { Metadata } from "next";
import { Inter, Archivo_Black } from "next/font/google";
import "./globals.css";
import { config } from "@/data/config";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import AppOverlays from "@/components/app-overlays";
import { Providers } from "@/components/providers";
import { GoogleAnalytics } from "@next/third-parties/google";
import NeuralCursor from "@/components/ui/neural-cursor";
import EmojiBackground from "@/components/emoji-background";

export const metadata: Metadata = {
  title: config.title,
  description: config.description.long,
  keywords: config.keywords,
  authors: [{ name: config.author }],
  openGraph: {
    title: config.title,
    description: config.description.short,
    url: config.site,
    images: [
      {
        url: config.ogImg,
        width: 800,
        height: 600,
        alt: "Portfolio preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: config.description.short,
    images: [config.ogImg],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, archivoBlack.variable, "font-display"].join(" ")} suppressHydrationWarning flush-mount="true">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com https://frontend-cdn.perplexity.ai; img-src 'self' data: blob: https://shaker15s.github.io https://cdn.jsdelivr.net https://lh3.googleusercontent.com; connect-src 'self' wss: https://*.spline.design https://www.google-analytics.com https://unpkg.com; frame-src 'self' https://my.spline.design;"
        />
        {process.env.UMAMI_DOMAIN && process.env.UMAMI_SITE_ID && (
          <Script
            defer
            src={process.env.UMAMI_DOMAIN}
            data-website-id={process.env.UMAMI_SITE_ID}
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: config.author,
              url: config.site,
              jobTitle: "AI Engineer & Full-Stack Developer",
              sameAs: [
                config.social.linkedin,
                config.social.github,
                config.social.twitter,
                config.social.instagram,
              ],
              description: config.description.long,
            }),
          }}
        />
      </head>
      <body>
        <Providers>
          <NeuralCursor />
          <EmojiBackground />
          <Header />
          {children}
          <Footer />
          <AppOverlays />
        </Providers>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
