import { IoMdArrowRoundForward } from "react-icons/io";



const Footer = () => {
  return (
    <div className="w-full flex flex-col  px-[23rem] mt-[6rem] h-">
      <div className="flex justify-between">
        <div className="flex flex-col   gap-5 w-1/2">
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
          <div>
            <p className="text-2xl font-semibold font-poppins text-gray-900">
              A modern approach to
            </p>
            <p className="text-2xl font-semibold font-poppins text-gray-500">
              winery management.
            </p>
          </div>
          <div className="flex gap-5 mt-3">
            <input
              type="text"
              placeholder="Enter your email"
              className="rounded-full px-4 py- pr-14 2 border-[1px] border-gray-300"
            />
            <button className="font-poppins text-xs px-4 py-2 border-[1px] border-black bg-[#E4DEC4] rounded-full text-gray-500">
              Book a demo
            </button>
          </div>
          <div>
            <p className="text-xs text-gray-400">
              By subscribing you agree to with our Privacy Policy and provide
              consent to receive updates from our company.
            </p>
          </div>
        </div>
        <div className="flex gap-24">
          <div>
            <h1 className="text-md font-semibold font-gray-500 mb-5">
              Explore
            </h1>
            <div className="flex flex-col gap-4">
              {["Winemaking", "Case Goods", "Finance", "About", "Blog"].map(
                (val, ind) => (
                  <a className="text-gray-600 text-[0.80rem]">{val}</a>
                )
              )}
            </div>
          </div>
          <div>
            <h1 className="text-md font-semibold font-gray-500 mb-5">
              Connect
            </h1>
            <div className="flex flex-col gap-4">
              {[
                "Wine Industry Network",
                "LinkedIn",
                "hello@blendedtech.com",
                "Contact",
                "Book a demo",
              ].map((val, ind) => (
                <div className="flex justify-between items-center gap-2">
                  <a className="text-gray-600 text-[0.80rem]">{val}</a>
                  {ind === 0 || ind == 1 ? <span className="-rotate-45 hover:rotate-0 duration-150 cursor-pointer transition-all ease-in"><IoMdArrowRoundForward color="#5E5F5E" size={17} /></span> : ""}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-10 items-center justify-between w-full border-t py-12">
        <p className="text-gray-400 text-xs">
          © 2024 Blended Technology Inc. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <p className="text-xs text-gray-400">Privacy Policy</p>
          <p className="text-xs text-gray-400">Terms of Service</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
