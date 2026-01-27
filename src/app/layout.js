import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Brand Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const hiltonSerif = localFont({
  src: "./fonts/HiltonSerif-Regular.ttf",
  variable: "--font-serif",
  display: "swap",
});

export const metadata = {
  title: "Hilton Team Showcase",
  description: "A premium showcase of team projects and innovations.",
};

import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${hiltonSerif.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
