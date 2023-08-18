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
        <link rel='icon' href='/favicon.ico' />
        <Script id="gtag-script-1" async src="https://www.googletagmanager.com/gtag/js?id=AW-11302750203"></Script>
        <Script id="gtag-script-2" >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11302750203');
          `}
        </Script>

        <Script>
          {` 
            gtag('event', 'conversion', {'send_to': 'AW-11302750203/dygICJCi3dMYEPuPyY0q'}); 
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
