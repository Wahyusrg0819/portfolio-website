import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | Wahyu Muliadi Siregar",
  description: "Mahasiswa Teknik Informatika di Universitas Islam Riau",
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
    {
      rel: 'shortcut icon',
      url: '/favicon.ico',
    }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${poppins.variable} ${inter.variable} font-poppins`}
        suppressHydrationWarning
      >
        <div id="root" suppressHydrationWarning>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
