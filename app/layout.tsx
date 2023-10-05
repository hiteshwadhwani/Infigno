import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import Script from 'next/script'

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
        <Script id="gtag-script-1" async src="https://www.googletagmanager.com/gtag/js?id=AW-11302750203"></Script>
        <Script id="gtag-script-2" >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11302750203');
          `}
        </Script>
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
