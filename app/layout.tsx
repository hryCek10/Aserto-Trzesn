import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aserto-trzesn.vercel.app";
const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aserto Trzesn - strona informacyjna",
    template: "%s | Aserto Trzesn"
  },
  description:
    "Aktualnosci, kadra, historia i informacje ligowe lokalnej druzyny pilkarskiej Aserto Trzesn.",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    title: "Aserto Trzesn",
    description:
      "Aktualnosci, kadra, historia i informacje ligowe lokalnej druzyny pilkarskiej.",
    url: siteUrl,
    siteName: "Aserto Trzesn"
  },
  twitter: {
    card: "summary_large_image",
    title: "Aserto Trzesn",
    description:
      "Mala strona informacyjna lokalnej druzyny: aktualnosci, kadra, historia i liga."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={poppins.variable}>
        <a className="skip-link" href="#main-content">
          Przejdz do tresci
        </a>
        <SiteHeader />
        <main id="main-content" className="container main-content">
          {children}
        </main>
        <footer className="site-footer">
          <div className="container footer-inner">
            <p>© {new Date().getFullYear()} Aserto Trzesn</p>
            <p>
              Oficjalne zrodla:{" "}
              <a href="https://www.facebook.com/AsertoTrzesn" target="_blank" rel="noreferrer">
                Facebook
              </a>{" "}
              oraz{" "}
              <a href="https://www.laczynaspilka.pl" target="_blank" rel="noreferrer">
                Laczy Nas Pilka
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
