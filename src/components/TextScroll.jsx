import React, { useEffect, useState } from "react";

const TextScroll = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("text-container");
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate the percentage of the container visible in the viewport
      const visibleHeight = Math.min(
        windowHeight,
        rect.bottom
      ) - Math.max(0, rect.top);
      const totalHeight = element.offsetHeight;

      const percentage = Math.max(0, Math.min(1, visibleHeight / totalHeight));
      setScrollPercent(percentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Transition from gray (#A0A0A0) to black (#000000)
  const color = `rgb(${Math.round(160 - scrollPercent * 160)}, ${Math.round(
    160 - scrollPercent * 160
  )}, ${Math.round(160 - scrollPercent * 160)})`;

  return (
    <div className="w-full flex overflow-hidden justify-center relative py-10 pb-28 ">
      <div className="w-1/2 flex flex-col overflow-hidden overflow-x-hidden items-center">
        <p
          id="text-container"
          className="text-center font-poppins text-4xl font-semibold transition-colors duration-700"
          style={{ color }}
        >
          Winemaking is built on tradition.
          <br />
          <br /> But that doesn’t mean your tools need to be.
          <br />
          <br />
          Blended streamlines winery operations, helping you craft exceptional
          wine and build a sustainable, data-driven business. Acting as an
          extension of your team, we automate repetitive tasks and enable
          faster responses through real-time insights. Blended connects your
          entire process – growing, crafting and fulfilling wine – in one
          seamless platform.
          <br />
          <br />
          Welcome to the future of winemaking.
        </p>

        <div data-scroll data-scrol-speed='.1' className="w-[15rem] absolute rounded-full -left-12 bottom-3 h-[15rem] bg-[#2E374B]"></div>
        <div data-scroll data-scrol-speed='-.1' className="w-[12rem] absolute rounded-full -right-12  h-[12rem] bg-[#E4DEC4]"></div>

        <button className="font-poppins mt-10 text-center px-5 py-3 border-[1px] border-black bg-[#E4DEC4] rounded-full text-gray-700">
          See how we can help
        </button>
      </div>
    </div>
  );
};

export default TextScroll;
