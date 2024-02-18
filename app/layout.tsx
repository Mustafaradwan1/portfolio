import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContaxtProvider from '@/Context/ContextProvider'

import ThemeColor from '@/components/ThemeColor'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mustafa | personal portfolio",
  description: "mustafa is a frontEnd developer with 2 years of experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden dark:bg-gray-900 dark:text-white bg-gray-50 pt-[10rem] relative text-gray-950 `}>
        <div className="bg-[#fbe2e3] dark:bg-[#946263] -z-10 rounded-full blur-[10rem] absolute top-[-6rem] right-[11rem] w-[31.25rem] h-[31.25rem] sm:w-[62.50rem]"></div>
        <div className="bg-[#dbd7fb] dark:bg-[#696394] -z-10 rounded-full blur-[10rem] absolute top-[-1rem] left-[-35rem] w-[50] h-[31.25rem] sm:w-[62.50rem] md:left-[-31rem] lg:left-[-28rem] xl:left-[-15rem]"></div>
       <ContaxtProvider>
          <Navbar/>
          <div className="w-[85%]  md:w-3/4 lg:w-[55%] m-auto">
          {children}
          </div>
          <Footer/>
       </ContaxtProvider>
      <ThemeColor/>
      </body>
    </html>
  );
}
