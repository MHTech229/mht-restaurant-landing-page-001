import React from "react";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Réservation Restaurant - MHT",
  description: "Réservez facilement votre table en ligne.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} ${playfair.variable}`}>
        <main>{children}</main>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
