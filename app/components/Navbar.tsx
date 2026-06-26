"use client";

import Link from 'next/link'
import Image from 'next/image'
import Desktop_Logo from '@/public/logo.png' 
import Mobile_Logo from '@/public/logo-mobile.png'
import { usePathname } from "next/navigation";

const Navbar = () => {

    const pathname = usePathname();
  return (
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
              <Link href='/3d-models' className={`text-sm  ${
                  pathname === "/3d-models"
                    ? "text-[#F77429] border-b border-[#F77429]"
                    : "text-[#606060]"
                }`}>
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
  )
}

export default Navbar