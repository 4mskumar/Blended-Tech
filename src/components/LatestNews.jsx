import React from "react";

const LatestNews = () => {
  return (
    <div className="py-24 px-[20rem] w-full h-screen">
      <div className="flex justify-between items-center  pt-5">
        <div>
          <p className="text-6xl font-semibold text-gray-900 font-poppins">
            Latest News
          </p>
          <p className="text-6xl font-semibold text-gray-500 font-poppins mt-1">
            & Resources
          </p>
        </div>
        <div>
          <button className="font-poppins px-5 py-3 border-[1px] border-black bg-[#E4DEC4] rounded-full text-gray-700">
            Book a demo
          </button>
        </div>
      </div>
      <div className="flex gap-2 justify-around mt-10">
        <div>
          <img
            className="h-[25rem] rounded-[3rem] hover:rounded-[6rem] transition-all ease-in-out duration-500 mt-16 object-cover w-[35rem]"
            src="https://cdn.prod.website-files.com/67236798c736c98f8d950d69/67461d3e774020805a5d31c4_Edit%20Anything-p-800.webp"
          />
          <div className="flex items-center mt-5 gap-4">
            <p className="bg-red-600 text-white px-[5px] text-sm font-semibold ">Winemaking</p>
            <p className="text-gray-900 font-semibold">2 min read</p>
          </div>
          <div>
            <p className="font-semibold text-2xl mt-4 text-gray-800 font-poppins">
              Edit Anything - No Exceptions, No Rollbacks
            </p>
          </div>
          <div>
            <p className="text-gray-700 w-[600px] mt-4 text-md font-poppins">
              Mistakes happen, with Blended you can edit anything without losing
              everything you've already done.
            </p>
          </div>
        </div>
        <div>
          <img
            className="h-[12rem] rounded-[2rem] hover:rounded-[5rem] transition-all ease-in-out duration-500 mt-16 object-cover w-[16rem]"
            src="https://cdn.prod.website-files.com/67236798c736c98f8d950d69/672368e668e3c69f9fd5cb93_White%2BWine_%2Bblog%20(1)-p-800.jpg"
          />
          <div className="flex items-center mt-5 gap-4">
            <p className="bg-red-600 text-white px-[5px] text-sm font-semibold ">Winemaking</p>
            <p className="text-gray-900 font-semibold">2 min read</p>
          </div>
          <div>
            <p className="font-semibold text-2xl mt-4 w-[250px] text-gray-800 font-poppins">
              Production protocols in Blended
            </p>
          </div>
          <div>
            <p className="text-gray-700 w-[250px] mt-4 text-md font-poppins">
              Blended’s wine production software includes a Production Protocol
              feature, which...
            </p>
          </div>
        </div>
        <div className="ml-10">
          <img
            className="h-[16rem] rounded-[2rem] hover:rounded-[5rem] transition-all ease-in-out duration-500 mt-16 object-cover w-[20rem]"
            src="https://cdn.prod.website-files.com/67236798c736c98f8d950d69/67239d5c4f218ec07309de49_Man%2Bwalking%2Binfront%2Bof%2Bbarrels%2Bcomp%20(1)-p-800.jpg"
          />
          <div className="flex items-center mt-5 gap-4">
            <p className="bg-red-600 text-white px-[5px] text-sm font-semibold ">Winemaking</p>
            <p className="text-gray-900 font-semibold">2 min read</p>
          </div>
          <div>
            <p className="font-semibold text-2xl mt-4 w-[250px] text-gray-800 font-poppins">
            Making Cider, Mead and Fruit Wines in Blended
            </p>
          </div>
          <div>
            <p className="text-gray-700 w-[250px] mt-4 text-md font-poppins">
            lended is ideal for production tracking of grape winemaking, but it’s so powerful and flexible...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
