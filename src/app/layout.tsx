import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "King Code Studio",
    template: "%s | King Code Studio",
  },
  description:
    "King Code Studio builds custom software, digital products and intelligent technology solutions for businesses worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}