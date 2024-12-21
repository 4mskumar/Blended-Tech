import React, { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import MArque from "./components/MArque";
import LocomotiveScroll from "locomotive-scroll";
import TextScroll from "./components/TextScroll";
import Carousel from "./components/Carousel";
import GetStartedButton from "./components/GetStartedButton";

const App = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  });

  const slides = [
    "https://cdn.prod.website-files.com/671fbe17abadacf3dc0bf0dc/673359dc4bc47afd676ef28d_finance-screenshot.webp",
    "https://cdn.prod.website-files.com/671fbe17abadacf3dc0bf0dc/673359dc2c54f1ac2be5dca2_case-goods-screenshot.webp",
    "https://cdn.prod.website-files.com/671fbe17abadacf3dc0bf0dc/673359dc2c54f1ac2be5dca2_case-goods-screenshot.webp",
  ];
  const head = ["Wine Making", "Finance", "Case Goods"];
  const text = [
    "Capture the work you're doing from anywhere in less clicks",
    "Track product-level cost of goods in real-time, at the level of detail you need.",
    "Manage bottled inventory by tax status and across locations so your team stays in sync.",
  ];
  return (
    <div>
      <Nav />
      <Hero />
      <MArque />
      <TextScroll />
      <div className="py-32 pb-64 flex flex-col relative justify-center items-center gap-[17rem] bg-gray-200">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-6xl font-bold font-poppins text-gray-900">
            All-in-one platform
          </h1>
          <h1 className="text-6xl font-bold font-poppins text-gray-700">
            for wine production
          </h1>
          <p className="mt-5 text-xl text-gray-700">
            From vineyard management to bottling, our platform streamlines the
            entire process.
          </p>
        </div>
        <Carousel slides={slides} interval={6500} head={head} text={text} />
      <div className="absolute left-[5rem] bottom-0 ">

      <GetStartedButton className='absolute' />
      </div>
      </div>
    </div>
  );
};

export default App;
