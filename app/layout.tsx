"use client";

import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import type { RootLayoutProps } from "./types";
import { usePathname } from "next/navigation";
import { Albert_Sans ,Montserrat_Alternates} from 'next/font/google'
import Desktop_Logo from '@/public/logo.png' 
import Mobile_Logo from '@/public/logo-mobile.png'

const albertSans = Albert_Sans({
  subsets: ['latin'],
  display: 'swap'
})

const montserratAlternates = Montserrat_Alternates({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100','200','300','400','500','600','700','800','900'],
  variable: '--font-montserrat-alternates'
})

export default function RootLayout({children}: RootLayoutProps) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={`${albertSans.className} ${montserratAlternates.variable}`}>
        <header className="mb-0 md:mb-10 bg-white">
          <div className="flex items-center justify-between px-4 md:px-10 py-4">
            <Link href="/">
              <div>
                {/* Mobile Logo */}
                <Image
                  src={Mobile_Logo}
                  alt="Mobile Logo"
                  // width={40}
                  // height={40} //no need to give manually
                  className="block md:hidden"
                />

                {/* Desktop Logo */}
                <Image
                  src={Desktop_Logo}
                  alt="Desktop Logo"
                  width={150}
                  height={50}
                  className="hidden md:block"
                />
              </div>
            </Link>

            <div className="flex gap-4 md:gap-10">
              <Link href='/3d-models' className="text-sm text-[#606060]">
              3D MODELS
              </Link>
              <Link
                href="/about"
                className={`text-sm  ${
                  pathname === "/about"
                    ? "text-[#F77429] border-b border-[#F77429]"
                    : "text-[#606060]"
                }`}
              >
                ABOUT
              </Link>
            </div>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
