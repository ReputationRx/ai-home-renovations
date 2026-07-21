import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LocalBusinessSchema } from "@/components/Schema";
import { BUSINESS } from "@/lib/constants";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS.name} | Home Renovation Experts in ${BUSINESS.baseLocation}`,
    template: `%s | ${BUSINESS.name}`,
  },
  description: `Professional home renovation services in ${BUSINESS.baseLocation}. Kitchen remodeling, bathroom renovation, basement finishing, and home additions. Licensed, insured, and trusted. Call ${BUSINESS.phoneFormatted} for a free estimate.`,
  keywords: [
    'home renovation',
    'remodeling',
    BUSINESS.baseLocation,
    'Fairless Hills',
    'kitchen remodeling',
    'bathroom renovation',
    'basement finishing',
    'home additions',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aihomerenovations.com',
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} | Home Renovation Experts`,
    description: `Professional home renovation services in ${BUSINESS.baseLocation}`,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    // Add Google Search Console verification when available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <GoogleAnalytics />
      </head>
      <body className="flex min-h-screen flex-col bg-[var(--background)] antialiased text-[var(--foreground)]">
        <ThemeProvider>
          <LocalBusinessSchema />
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
