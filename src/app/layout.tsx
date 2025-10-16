import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const latoGoogle = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-lato-google',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Personal Assistant",
  description: "Your daily productivity companion",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${latoGoogle.variable}`}>
        <TanStackProvider>
          <div className="layout">
            <Header />
            <main className="main">{children}</main>
            <Footer />
          </div>
        </TanStackProvider>
      </body>
    </html>
  );
}
