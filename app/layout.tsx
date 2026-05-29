import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackgroundFX } from "@/components/BackgroundFX";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | ${site.role}`,
  description: home_description(),
  openGraph: {
    title: `${site.name} | ${site.role}`,
    description: home_description(),
    url: site.url,
    siteName: site.name,
    type: "website",
  },
};

function home_description() {
  return "Precision full-stack engineering — high-performance web applications, architectural integrity, and seamless user interfaces.";
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="font-body-md text-on-surface antialiased">
        <BackgroundFX />
        <Navbar />
        <div className="relative z-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
