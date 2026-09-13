import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anbu Spice Exports — Indian spices, sourced and shipped",
  description:
    "Export house shipping lab-tested Indian spices — turmeric, black pepper, cardamom, chilli and seed spices — to buyers in Europe, North America, Japan and the Gulf.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={display.variable + " " + sans.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
