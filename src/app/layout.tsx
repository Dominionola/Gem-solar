import type { Metadata } from "next";
import { Montserrat, Inter, JetBrains_Mono } from "next/font/google"; // [SEO] Optimized Font Loading
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | GemSolar Energy",
    default: "GemSolar Energy | Premium Solar Solutions in Ibadan",
  },
  description: "Reliable, 24/7 solar energy systems for Ibadan homes and businesses. Use our Load Calculator to find your perfect package.",
  keywords: ["Solar Ibadan", "Inverter Battery Nigeria", "Solar Installation Oyo", "GemSolar"],
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
