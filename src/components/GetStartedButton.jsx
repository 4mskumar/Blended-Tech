import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import {gsap} from 'gsap'

const GetStartedButton = () => {
  const mouseEnterAnimation = () => {
    gsap.to("#button1", {
      duration: 0.4,
      x: 100,
      ease: "power2.inOut",
    });
    gsap.fromTo(
      "#button2",
      {
        duration: 0.4,
        x: -100,
        ease: "power2.inOut",
      },
      {
        duration: 0.4,
        x: 0,
        ease: "power2.inOut",
        opacity: 1,
      }
    );
    gsap.to("#parent_button", {
      duration: 0.4,
      ease: "power2.inOut",
      backgroundColor: "black",
    });
  };
  const mouseLeaveAnimation = () => {
    gsap.to("#button1", {
      duration: 0.4,
      x: 0,
      ease: "power2.inOut",
    });
    gsap.fromTo(
      "#button2",
      {
        duration: 0.4,
        x: -0,
        ease: "power2.inOut",
      },
      {
        duration: 0.4,
        x: -100,
        ease: "power2.inOut",
        opacity: 1,
      }
    );
    gsap.to("#parent_button", {
      duration: 0.4,
      ease: "power2.inOut",
      backgroundColor: "white",
    });
  };
  return (
    <button
      onMouseEnter={mouseEnterAnimation}
      onMouseLeave={mouseLeaveAnimation}
      className="px-2 py-2 justify-between flex items-center gap-3 text-lg font-medium tracking-tighter rounded-full mt-8 pl-7 text-white font-worksans bg-orange-600"
    >
      Get started
      <div
        id="parent_button"
        className="p-3 flex rounded-full relative overflow-hidden text-black bg-white"
      >
        <IoMdArrowRoundForward
          id="button1"
          className=" "
          color="black"
          size={20}
        />
        <IoMdArrowRoundForward
          id="button2"
          className="opacity-0  absolute"
          color="white"
          size={20}
        />
      </div>
    </button>
  );
};

export default GetStartedButton;
