import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

const font = Readex_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: {
      url: `/favicon.ico`,
      type: "image/x-icon",
    },
  }, 
  title: "Infigon Futures",
  description: "Infigon Futures CCP landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico'/>
      </head>
      <body className={font.className}>
          <Toaster />
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}
