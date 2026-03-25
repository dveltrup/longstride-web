import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Longstride – Supplements für aktive 50+",
  description:
    "Hochwertige Nahrungsergänzungsmittel für Menschen ab 50. Entwickelt für Vitalität, Beweglichkeit und ein langes Leben.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
