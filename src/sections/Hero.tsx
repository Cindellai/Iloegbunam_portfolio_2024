import memojiImage from "@/assets/images/me.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import HeartIcon from "@/assets/icons/heart.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        {/* Background image */}
        <div className="absolute inset-0 -z-30 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }}></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* HeroOrbit components with shouldOrbit set to true */}
          <HeroOrbit size={800} rotation={-160} shouldOrbit orbitDuration="17s" shouldSpin spinDuration="5s">
            <HeartIcon className="size-16 text-pink-300" />
          </HeroOrbit>
          <HeroOrbit size={550} rotation={290} shouldOrbit orbitDuration="25s" shouldSpin spinDuration="2s">
            <HeartIcon className="size-8 text-pink-300" />
          </HeroOrbit>
          <HeroOrbit size={590} rotation={20} shouldOrbit orbitDuration="20s" shouldSpin spinDuration="3s">
            <HeartIcon className="size-12 text-pink-300/10" />
          </HeroOrbit>
          <HeroOrbit size={940} rotation={4} shouldOrbit orbitDuration="15s" shouldSpin spinDuration="2s">
            <SparkleIcon className="size-8 text-pink-300" />
            </HeroOrbit>
          <HeroOrbit size={640} rotation={4} shouldOrbit orbitDuration="15s" >
            <SparkleIcon className="size-8 text-pink-900" />
            </HeroOrbit> 
          
            <HeroOrbit size={840} rotation={9} shouldOrbit orbitDuration="40s" >
            <SparkleIcon className="size-8 text-pink-200/10" />
            </HeroOrbit> 
          <HeroOrbit size={890} rotation={-100} shouldOrbit orbitDuration="20s">
            <HeartIcon className="size-6 text-pink-300" />
          </HeroOrbit>
          <HeroOrbit size={440} rotation={4} shouldOrbit orbitDuration="10s" shouldSpin spinDuration="5s">
            <SparkleIcon className="size-8 text-pink-700" />
          </HeroOrbit>
          <HeroOrbit size={500} rotation={80} shouldOrbit orbitDuration="32s" >
            <HeartIcon className="size-10 text-pink-600" />
          </HeroOrbit>
          <HeroOrbit size={620} rotation={160} shouldOrbit orbitDuration="20s" shouldSpin spinDuration="4.5s">
            <HeartIcon className="size-14 text-pink-700/30" />
          </HeroOrbit>
          <HeroOrbit size={700} rotation={-50} shouldOrbit orbitDuration="30s">
            <HeartIcon className="size-12 text-pink-300" />
          </HeroOrbit>
        </div>
      </div>
      {/* Hero Image Section */}
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} className="size-[130px]" alt="Person looking over laptop" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 size-2.5 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>

            {/* Text Section */}
            <div className="text-sm font-medium">Available for new projects</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl text-center mt-8 tracking-wide">
            Crafting Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in building responsive and engaging web applications that prioritize user experience. My passion for design and development drives me to create solutions that are not only functional but also visually appealing.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl ">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
