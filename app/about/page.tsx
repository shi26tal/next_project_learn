"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const About = () => {
  const pathname = usePathname();
  return (
    <div>
      <header className="mb-10">
        <div className="flex items-center justify-between px-4 md:px-10 py-4">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={150}
              height={150}
              className="w-28 md:w-37.5"
            />
          </Link>

          <div className="flex gap-4 md:gap-10">
            <span className="text-sm text-[#606060]">3D MODELS</span>
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

      <main className="py-10">
        <div className="flex flex-col md:flex-row items-center px-6 md:px-20 lg:px-24 gap-10 md:gap-20">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <Image
              src="/about.png"
              alt="about-image"
              width={627}
              height={627}
              className="w-full max-w-90 md:max-w-155 h-auto"
            ></Image>
          </div>
          <div className="w-full lg:w-1/2">
            <p className="text-sm tracking-wider mb-4">ABOUT PRINTFORGE</p>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              Empowering makers worldwide
            </h1>
            <p className="text-xl leading-9 text-[#1E1E1E] mb-8">
              Founded in 2023, PrintForge has quickly become the go-to platform
              for 3D printing enthusiasts, makers, and professional designers to
              share and discover amazing STL files for 3D printing.
            </p>
            <p className="text-xl leading-9 text-[#1E1E1E]">
              Our mission is to foster a vibrant community where creativity
              meets technology, enabling anyone to bring their ideas to life
              through 3D printing.
            </p>
          </div>
        </div>
      </main>

      <section className="py-10 border-y border-[#DDDDDD]">
        <div className="flex flex-col md:flex-row justify-center">
          {/* 1 */}
          <div className="flex-1 px-6 mb-12 md:mb-0 md:pr-12 md:pl-34 md:border-r border-[#666666]">
            <div className="flex items-center gap-1 mb-4.5">
              <Image
                src="/Stack.png"
                alt="stack-icon"
                width={32}
                height={32}
              ></Image>
              <h3 className="text-[28px] font-bold text-[#1E1E1E]">
                100K+ Models
              </h3>
            </div>

            <p className="text-[#1E1E1E] text-[20px]">
              Access our vast library of community-created 3D models, from
              practical tools to artistic creations.
            </p>
          </div>

          {/* 2 */}
          <div className="flex-1 px-6 mb-12 md:mb-0 md:px-12 md:border-r border-[#666666]">
            <div className="flex items-center gap-1 mb-4.5">
              <Image
                src="/GlobeSimple.png"
                alt="globe"
                width={32}
                height={32}
              ></Image>
              <h3 className="text-[28px] font-bold text-[#1E1E1E]">
                Active Community
              </h3>
            </div>

            <p className="text-[#1E1E1E] text-[20px]">
              Join thousands of makers who share tips, provide feedback, and
              collaborate on projects.
            </p>
          </div>

          {/* 3 */}
          <div className="flex-1 px-6 md:pl-12 md:pr-34 ">
            <div className="flex items-center gap-1 mb-4.5">
              <Image src="/Flag.png" alt="flag" width={32} height={32}></Image>
              <h3 className="text-[28px] font-bold text-[#1E1E1E]">
                Free to Use
              </h3>
            </div>
            <p className="text-[#1E1E1E] text-[20px]">
              Most models are free to download, with optional premium features
              for power users.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="flex flex-col px-6 md:items-center md:mx-80 ">
          <div>
            <h1 className="text-[56px] font-bold">Our vision</h1>
            <p className="text-[28px] font-normal pb-8">
              At PrintForge, we believe that 3D printing is revolutionizing the
              way we create, prototype, and manufacture. Our platform serves as
              a bridge between designers and makers, enabling the sharing of
              knowledge and creativity that pushes the boundaries of what&apos;s
              possible with 3D printing.
            </p>
            <div className="flex justify-center">
              <Image src="/line.png" alt="line" width={245} height={5}></Image>
            </div>

            <p className="text-[28px] font-normal pt-8">
              Whether you&apos;re a hobbyist looking for your next weekend
              project, an educator seeking teaching materials, or a professional
              designer wanting to share your creations, PrintForge provides the
              tools and community to support your journey in 3D printing.
            </p>
          </div>
          <div className="my-28 flex justify-center">
            <Image
              src="/watermark.png"
              alt="logo"
              width={140}
              height={140}
            ></Image>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
