import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"]
});

export const metadata: Metadata = {
  title: "10e23a — Precision AI Training",
  description:
    "10e23a builds disciplined AI training infrastructure with verifiable, predictable outcomes."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plexSans.className}>{children}</body>
    </html>
  );
}
