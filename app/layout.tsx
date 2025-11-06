import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import I18nProvider from "@/components/I18nProvider";

// Base styles
import "./styles/bare.css";
import "./styles/design-system.css";

// Typography and fonts
import "./styles/fonts.css";
import "./styles/typography.css";

// Theme
import "./styles/themes.css";

// Component styles
import "./styles/components/section.css";
import "./styles/components/button.css";
import "./styles/components/cards.css";
import "./styles/components/header.css";
import "./styles/components/footer.css";
import "./styles/components/modals.css";
import "./styles/components/language-chooser.css";

// Additional styles
import "./styles/download.css";
import "./styles/gallery.css";
import "./styles/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://3.17.74.134"),
  title: "AQUA Wallet – Bitcoin Made Simple",
  description:
    "AQUA Wallet is a self-custodial Bitcoin and Liquid wallet designed for fast, private, and easy transactions. Manage BTC, USDt, and assets seamlessly with full control over your funds.",
  openGraph: {
    title: "AQUA Wallet – Bitcoin Made Simple",
    description:
      "AQUA Wallet is a fast, private, and self-custodial Bitcoin and Liquid wallet. Send, receive, and manage BTC and assets securely with ease.",
    url: "http://3.17.74.134/",
    siteName: "AQUA Wallet",
    images: [
      {
        url: "http://3.17.74.134/assets/images/aqua-social-card-2.jpg",
        width: 1920,
        height: 1080,
        alt: "AQUA Wallet Social Card",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AQUA Wallet – Bitcoin Made Simple",
    description:
      "A self-custodial Bitcoin & Liquid wallet for secure, seamless transactions. Full control. No compromises.",
    images: ["http://3.17.74.134/assets/images/aqua-social-card-2.jpg"],
    creator: "@aquawallet",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <I18nProvider>
          <Header />
          {children}
          <Footer />
        </I18nProvider>
        <Script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=b9f7ee6f-b831-4fe6-b298-a3e0d229f2bd"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
