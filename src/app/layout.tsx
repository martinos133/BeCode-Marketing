import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Becode – Agentúra pre B2B marketing",
  description: "Výsledky, ktoré hovoria samy za seba. PPC, SEO a obsahová stratégia.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" suppressHydrationWarning>
      <body className={`${geistSans.variable} font-sans antialiased bg-black text-white`} suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
