import type { Metadata, Viewport } from "next";
import {
  Fraunces,
  Instrument_Serif,
  Sora,
  Noto_Nastaliq_Urdu,
} from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Preloader from "@/components/Preloader";
import IntroFilm from "@/components/IntroFilm";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const nastaliq = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: "400",
  variable: "--font-urdu",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hoteltuba.in"),
  title: "Hotel Tuba — The No.1 Biryani in Aurangabad | Since 2012",
  description:
    "Twelve years of dum, smoke and soul at Champa Chowk. Hotel Tuba serves Aurangabad's most-loved biryani, chicken naan qaliya, beef chaab and tandoori kebabs — with private family seating and an FSSAI-compliant kitchen.",
  keywords: [
    "Hotel Tuba",
    "best biryani in Aurangabad",
    "Tuba Hotel Champa Chowk",
    "naan qaliya Aurangabad",
    "beef chaab",
    "family restaurant Aurangabad",
    "Mughlai restaurant Chhatrapati Sambhajinagar",
  ],
  openGraph: {
    title: "Hotel Tuba — The No.1 Biryani in Aurangabad",
    description:
      "Rich, aromatic, generous. Since 2012 at Champa Chowk, Aurangabad.",
    images: [{ url: "/images/biryani-bucket.webp", width: 1200, height: 1534 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Tuba — The No.1 Biryani in Aurangabad",
    description:
      "Rich, aromatic, generous. Since 2012 at Champa Chowk, Aurangabad.",
    images: ["/images/biryani-bucket.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0807",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${instrument.variable} ${sora.variable} ${nastaliq.variable}`}
    >
      <body>
        <Preloader />
        <IntroFilm />
        <Cursor />
        <SmoothScroll />
        <div className="grain" aria-hidden="true" />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
