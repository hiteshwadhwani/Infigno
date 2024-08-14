import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import Script from 'next/script'
import ZendeskChat from "@/components/zendesk";

const font = Readex_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: {
      url: `/icon.svg`,
      type: "image/svg+xml",
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
        <link rel="manifest" type="image/png" sizes="32x32" href="/favicon.png" />
      </head>
      <body className={font.className}>
        <Toaster />
        <Navbar />
        <ZendeskChat />
        {children}
        <Footer />

      </body>
    </html>
  );
}
