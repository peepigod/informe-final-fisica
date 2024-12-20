import "./globals.css";
import type { Metadata } from "next";
import {  DM_Sans } from "next/font/google";
import { cn } from "./components/utils";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "LosMasomaniaticos",
  description: "Grupo de Física",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body id="top" className={cn(dmSans.className, "text-white")}>
        {children}
      </body>
    </html>
  );
}
