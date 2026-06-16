import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* <header>
        <div className="flex flex-row justify-between">
          <div>
            <Image
              src="/logo.png"
              alt="logo"
              width={150}
              height={150}
              className="ml-10 mt-3.5 mb-3.5"
            ></Image>
          </div>
          <div className="mr-10 mt-7 mb-7">
            <span className="text-[#606060] font-[14px] mr-10">3D MODELS</span>
            <span className="text-[#606060] font-[14px]">ABOUT</span>
          </div>
        </div>
      </header> */}

       <header className="mb-0 md:mb-10">
        <div className="flex items-center justify-between px-4 md:px-10 py-4">
          <Link href='/'>
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
            <Link href='/about' className="text-sm text-[#606060]">ABOUT</Link>
          </div>
        </div>
      </header>

      {/* <main>
        <div className="flex flex-row px-23 gap-25">
          <div className="py-32 max-w-150">
            <p className="text-[16px] font-[#1E1E1E]">YOUR GO-TO PLATFORM FOR 3D PRINTING FILES</p>
            <h1 className="font-bold text-[56px] font-[#1E1E1E]">Discover what&apos;s possible with 3D printing</h1>
            <p className="text-[28px] font-normal font-[#1E1E1E] mb-18">Join our community of creators and explore a vast library of user-submitted models.</p>
            <button className="text-[20px] font-semibold border-2 p-3">BROWSE MODELS</button>
          </div>
          <div>
            <Image src='/home.png' alt="home-image" width={500} height={500} className="py-15"></Image>
          </div>
        </div>
      </main> */}

      <main>
        <div className="flex flex-col md:flex-row items-center px-6 md:px-20 lg:px-24 gap-10 md:gap-20">
          {/* Text Section */}
          <div className="max-w-xl md:text-left py-8 md:py-24">
            <p className="text-sm md:text-base text-[#1E1E1E]">
              YOUR GO-TO PLATFORM FOR 3D PRINTING FILES
            </p>

            <h1 className="font-bold text-[40px] md:text-5xl lg:text-6xl text-[#1E1E1E] mt-3">
              Discover what&apos;s possible with 3D printing
            </h1>

            <p className="text-[24px] md:text-2xl text-[#1E1E1E] mt-6 mb-10">
              Join our community of creators and explore a vast library of
              user-submitted models.
            </p>

            <button className="text-base text-[20px] md:text-xl font-semibold border-2 px-6 py-3">
              BROWSE MODELS
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full flex justify-center">
            <Image
              src="/home.png"
              alt="home-image"
              width={500}
              height={500}
              className="w-full max-w-90 md:max-w-125 h-auto"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
