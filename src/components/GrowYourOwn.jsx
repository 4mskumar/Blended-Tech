import React from "react";
import RainbowStrip from "./RinbowStrip";
import GetStartedButton from "./GetStartedButton";

const GrowYourOwn = () => {
  return (
    <div className="relative w-full ">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/20 to-transparent z-10"></div>

      {/* Image */}
      <img
        src="https://cdn.prod.website-files.com/671fbe17abadacf3dc0bf0dc/6722207b1c6546626037e0cb_vineyard-with-mountain%20(1)-p-2000.webp"
        alt="Vineyard with Mountain"
        className="w-full h-[50rem] object-cover"
      />
      <div className="absolute inset-0 flex items-start justify-center text-9xl font-bold text-white z-20">
        <div
          id="hero_text"
          className="leading-0 translate-y-[5rem] opacity-0 flex flex-col items-center justify-center mt-32"
        >
          <h1 className="leading-0 text-5xl font-poppins text-gray-900 font-semibold tracking-tighter">
          Grow your winery with
          </h1>
          <h1 className="leading-0 text-5xl font-poppins text-gray-600 font-semibold tracking-tighter">
          modern tools
          </h1>
          <p className="text-xl mb-10 font-poppins font-medium text-gray-500 mt-8">
          Simplify your entire winemaking process with our comprehensive, easy-to-use platform.
          </p>
          <GetStartedButton />
        </div>
      </div>
      <RainbowStrip />
    </div>
  );
};

export default GrowYourOwn;
