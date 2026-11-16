
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "UPWAY-NEXORA | Digital Asset Brokerage",
    template: "%s | UPWAY-NEXORA",
  },
  description:
    "UPWAY-NEXORA is a digital asset brokerage platform designed for modern investors. Explore cryptocurrency markets, manage your portfolio and monitor your investments.",
  applicationName: "UPWAY-NEXORA",
  keywords: [
    "UPWAY-NEXORA",
    "Cryptocurrency",
    "Digital Assets",
    "Investment",
    "Crypto Brokerage",
    "Portfolio Management",
  ],
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
