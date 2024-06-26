import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diego | Portfolio ",
  description: "Diego is a full-stack developer with 2+ years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} bg-stone-50 text-gray-950 relative pt-28 sm:pt-36`}
      >
        {/* <div className="bg-[#efcfce] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#e4d0c3] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div> */}
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Toaster position="top-right" />
          <Footer />
        </ActiveSectionContextProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
