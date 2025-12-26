import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import { Open_Sans, Poppins } from "next/font/google";

// ✅ Fonts (better than <link>)
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

// ✅ Proper Metadata API
export const metadata: Metadata = {
  title: "Teachers Recruiting Consult",
  description:
    "Connecting credible teachers and admin officers with top schools",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${poppins.variable}`}>
      <body className="bg-slate-50 text-slate-900 antialiased">
        {/* Flutterwave Inline Script */}
        <Script
          src="https://checkout.flutterwave.com/v3.js"
          strategy="afterInteractive"
        />

        {/* Global Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="min-h-screen">{children}</main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
