import React from "react";
import Cards from "./Cards";
import { IoMdArrowDown } from "react-icons/io";

const Your_phone = () => {
  return (
    <div className="relative flex justify-center">
      <div className="w-full h-[50rem] bg-gray-900">
        <div>
          <img
            src="https://cdn.prod.website-files.com/671fbe17abadacf3dc0bf0dc/67221db3751e28f9c862eccf_vineyard-from-sky%20(1).avif"
            className="object-cover absolute w-full h-full opacity-50"
          />
        </div>
        <div className="z-[99rem] absolute mt-[7rem] ml-[12rem]">
          <h1 className="text-6xl tracking-tighter opacity-100 font-semibold font-poppins text-white">
            Your phone isn’t from the 2000’s,
          </h1>
          <h1 className="text-6xl tracking-tighter font-semibold font-poppins text-gray-100 opacity-70">
            your software shouldn’t be either
          </h1>
        </div>
        <div className="absolute flex gap-6 justify-center items-center mt-[20rem] ml-[40rem]">
            <Cards head={'15'}
            sub={'H'}
            spantext={'Save time: '}
            para={'15 hours per week saved on average'}/>
            <Cards head={'50'}
            sub={'%'}
            spantext={'Fewer clicks: '}
            para={'50% less clicks to complete the same tasks'}/>
            <Cards head={<IoMdArrowDown />}
            sub={''}
            spantext={'Reduce mistakes: '}
            para={'Blended users experience more accurate work orders, better barrel tracking, and improved blend management.'}/>
        </div>
      </div>
    </div>
  );
};

export default Your_phone;
