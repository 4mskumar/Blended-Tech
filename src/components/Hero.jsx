import { IoMdArrowRoundForward } from "react-icons/io";
import OverlapImages from "./OverlapImages";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import GetStartedButton from "./GetStartedButton";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#hero_text",
      {
        y: "5rem",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut'
      }
    );
    
    gsap.fromTo(
      "#hero_bg",
      {
        y: "-5rem",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut'
      }
    );
    
  }, []);



  return (
    <div className="">
      <div
        id="hero_text"
        className="leading-0 translate-y-[5rem] opacity-0 flex flex-col items-center justify-center mt-32"
      >
        <h1 className="leading-0 text-8xl font-poppins text-gray-900 font-bold tracking-tighter">
          A modern approach to
        </h1>
        <h1 className="leading-0 text-8xl font-poppins text-gray-700 font-bold tracking-tighter">
          winery management
        </h1>
        <p className="text-xl font-poppins text-gray-500 mt-8">
          Smart, intuitive software designed for winemakers like you.
        </p>
          <GetStartedButton />
      </div>
      <div id="hero_bg" className="px-20 relative mt-10 flex justify-between bg-[url('https://cdn.prod.website-files.com/671fbe17abadacf3dc0bf0dc/67221db3751e28f9c862eccf_vineyard-from-sky%20(1).avif)]">
        <div className="w-[30rem] rounded-full overflow-hidden h-[15rem]">
          <img src="https://cdn.prod.website-files.com/671fbe17abadacf3dc0bf0dc/672283fb29fe8ec90dae2d8b_green-vineyard-with-hills%20(1)-p-800.avif"></img>
        </div>
        <div
          data-scroll
          data-scroll-speed="0.1"
          className="bg-[#C44BC1] mt-[6rem] h-[13rem] w-[13rem] rounded-full"
        ></div>
        <div
          data-scroll
          data-scroll-speed="0.2"
          className="h-[17rem] mt-[9rem] overflow-hidden  bg-no-repeat w-[17rem] rounded-full"
        >
          <img
            className="w-full h-full object-cover"
            src="https://cdn.prod.website-files.com/671fbe17abadacf3dc0bf0dc/672508ceb7fc0795378b2cff_man-with-grapes%20(1)-p-500.webp"
          />
        </div>
        <div className="w-[30rem] h-[30rem] overflow-hidden rounded-3xl">
          <img
            className="w-full h-full object-cover"
            src="https://cdn.prod.website-files.com/671fbe17abadacf3dc0bf0dc/67221db3751e28f9c862eccf_vineyard-from-sky%20(1).avif"
          />
        </div>
        <div  className="absolute ml-[22rem] -mb-20">
          <OverlapImages />
        </div>
      </div>
    </div>
  );
};

export default Hero;
