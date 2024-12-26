import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Nav = () => {
  const [showOptions, setShowOptions] = useState(null);
  const [showOptions1, setShowOptions1] = useState(false);
  const [first, setfirst] = useState(false)
  return (
    <div className=" flex justify-between items-center px-[20rem] pt-5">
      <div className="flex gap-2">
        <div className="w-10 h-10 bg-orange-400"></div>
        <div>
          <p className="text-xl font-worksans font-semibold leading-none text-gray-700">
            BLENDED
          </p>
          <p className="text-xl font-worksans leading-none text-gray-700">
            TECH
          </p>
        </div>
      </div>
      <div className="flex gap-10">
        <div className="flex gap-1 relative items-center">
          <a className="font-poppins text-gray-700">Products</a>
          <div
            onClick={() => setShowOptions((prev) => !prev)}

            className={`${
              showOptions
                ? "rotate-180 ease transition-all duration-150"
                : "rotate-0 transition-all duration-150 ease-in"
            } cursor-pointer rotate-0 `}
          >
            <MdKeyboardArrowDown
            className=""
              height={50}
              size={25}
              color="#151D2D"
              width={50}
            />
          </div>
          {showOptions && (
            <div className="absolute top-0 left-0 bg-white border-[1px] mt-8 flex flex-col gap-3 w-[130%] rounded-lg p-3">
              {["Wine Making", "Case Goods", "Finance"].map((val, ind) => (
                <a className="hover:bg-gray-200 cursor-pointer p-1">{val}</a>
              ))}
            </div>
          )}
        </div>
        <div className="flex relative gap-1 items-center">
          <a className="font-poppins text-gray-700">Resources</a>
          <div
            onClick={() => setShowOptions1((prev) => !prev)}
            className={`${
              showOptions1
                ? "rotate-180 ease transition-all duration-150"
                : "rotate-0 transition-all duration-150 ease-in"
            } cursor-pointer rotate-0`}
          >
            <MdKeyboardArrowDown
              height={50}
              size={25}
              color="#151D2D"
              width={50}
            />
          </div>
          {showOptions1 && (
            <div className="absolute top-0 left-0 bg-white border-[1px] mt-8 flex flex-col gap-3 w-[130%] rounded-lg p-4">
              {["About Us", "Blog", "Help Center"].map((val, ind) => (
                <a className="hover:bg-gray-200 cursor-pointer p-1">{val}</a>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-10 items-center">
        <p className="font-poppins text-gray-700">Log in</p>
        <button className="font-poppins px-5 py-3 border-[1px] border-black bg-[#E4DEC4] rounded-full text-gray-700">
          Book a demo
        </button>
      </div>
    </div>
  );
};

export default Nav;
