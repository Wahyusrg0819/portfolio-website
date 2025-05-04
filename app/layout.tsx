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
  description: "Mahasiswa Teknik Informatika di Universitas Islam Riau. Spesialis pengembangan web dan keamanan siber.",
  keywords: [
    "Wahyu Muliadi Siregar",
    "portfolio",
    "web development",
    "front-end",
    "React",
    "Next.js",
    "Vue.js",
    "cybersecurity",
    "UI/UX",
    "web design"
  ],
  authors: [{ name: "Wahyu Muliadi Siregar" }],
  creator: "Wahyu Muliadi Siregar",
  publisher: "Wahyu Muliadi Siregar",
  icons: {
    icon: [
      { url: '/favicon.ico' },
    ],
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://yourdomain.com", // Update with your actual domain
    title: "Portfolio | Wahyu Muliadi Siregar",
    description: "Mahasiswa Teknik Informatika di Universitas Islam Riau. Spesialis pengembangan web dan keamanan siber.",
    siteName: "Wahyu Muliadi Siregar Portfolio",
    images: [
      {
        url: "/me.png", // Using existing image
        width: 1200,
        height: 630,
        alt: "Wahyu Muliadi Siregar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Wahyu Muliadi Siregar",
    description: "Mahasiswa Teknik Informatika di Universitas Islam Riau. Spesialis pengembangan web dan keamanan siber.",
    images: ["/me.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  alternates: {
    canonical: "https://yourdomain.com", // Update with your actual domain
  },
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
