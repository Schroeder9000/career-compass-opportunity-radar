import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const serif = Instrument_Serif({ variable: "--font-serif", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: { default: "Opportunity Radar | Career Compass", template: "%s | Opportunity Radar" },
  description: "Career Compass turns labor-market data into practical next moves.",
  icons: { icon: "/favicon.svg" },
  openGraph: { title: "Opportunity Radar", description: "Less career noise. More signal.", type: "website", images: ["/og.jpg"] },
  twitter: { card: "summary_large_image", title: "Opportunity Radar", description: "Less career noise. More signal.", images: ["/og.jpg"] },
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>;
}
