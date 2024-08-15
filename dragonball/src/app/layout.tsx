import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

import "./components/Navbar.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dragon Ball Z",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="pt-br">
        <head>
          <link rel="shortcut icon" href="/icon.ico" />
        </head>
        <body className={inter.className}>
          {/* <Navbar /> */}
          {children}
        </body>
      </html>
    </>
  );
}
