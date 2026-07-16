import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project AURUM",
  description: "Invito Laurea Ciro Esposito",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      // Rimosso h-full: lo gestiamo con dvh su body e main
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className={`${cormorant.className} h-dvh w-dvw overflow-hidden m-0 p-0`}>
        {children}
      </body>
    </html>
  );
}