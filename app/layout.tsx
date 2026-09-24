import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
const montserrat = Montserrat({ variable: "--font-montserrat", subsets: ["latin"] });
const cormorant = Cormorant_Garamond({ variable: "--font-cormorant", subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"] });
export const metadata: Metadata = {
  title: "The Sibarita Makers | Coming Soon",
  description: "Discover The Sibarita Makers — curators of luxury heritage textiles and crafts. A world of timeless craftsmanship is coming soon.",
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={`${montserrat.variable} ${cormorant.variable} h-full antialiased`}><body>{children}</body></html>;
}
