import Image from "next/image";
import HomeImage from '@/public/home.png'


export default function Home() {
  return (
    <div>
      <main>
        <div className="flex flex-col md:flex-row items-center px-6 md:px-20 lg:px-24 gap-10 md:gap-20">
          {/* Text Section */}
          <div className="max-w-xl md:text-left py-8 md:py-24">
            <p className="text-sm md:text-base text-[#1E1E1E]">
              YOUR GO-TO PLATFORM FOR 3D PRINTING FILES
            </p>

            <h1 className="montserrat font-bold text-[40px] md:text-5xl lg:text-6xl text-[#1E1E1E] mt-3">
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
              src={HomeImage}
              alt="home-image"
              // width={500}
              // height={500}
              className="w-full max-w-90 md:max-w-125 h-auto"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
