import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const MArque = () => {
  return (
    <div className="w-full flex px-20 gap-20 justify-center bg-white py-[5rem]">
      {/* Header */}
      <div className="flex gap-3 items-center mb-8">
        <p className="text-xl text-gray-500 font-poppins">Proudly trusted by</p>
        <FaArrowRight color="#151D2D" />
      </div>

      {/* Marquee */}
      <div className="relative flex overflow-hidden items-center">
        {/* Left Gradient */}
        <div className="absolute left-0 z-10 w-[10rem] h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>

        {/* Scrolling Logos */}
        <motion.div
          className="flex items-center w-[60rem] gap-10"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 10, // Adjust speed here
          }}
        >
          {[
            "https://cdn.prod.website-files.com/671fbe17abadacf3dc0bf0dc/672cda872789ad83f581079a_Doffo_Script_Logo_Black%201.webp",
            "https://cdn.prod.website-files.com/671fbe17abadacf3dc0bf0dc/672cda1bacf267a012779351_alapay-cellars-logo%201.webp",
            "https://cdn.prod.website-files.com/671fbe17abadacf3dc0bf0dc/672cda3e0b9f832e373b934d_HHW_Logo_est2013-204ddc49-1920w%201.webp",
            "https://cdn.prod.website-files.com/671fbe17abadacf3dc0bf0dc/672cda9f7b7c0f29b639da85_Renz-logo-5b%201.webp",
            "https://cdn.prod.website-files.com/671fbe17abadacf3dc0bf0dc/672cd8e7d9ccb696e21914a2_Paloma-Vineyard-Dove.png%201.webp",
          ].map((src, index) => (
            <img
              key={index}
              className="w-[10rem] h-auto"
              src={src}
              alt={`Logo ${index + 1}`}
            />
          ))}
          {/* Duplicate content for smooth loop */}
          {[
            "https://cdn.prod.website-files.com/671fbe17abadacf3dc0bf0dc/672cda872789ad83f581079a_Doffo_Script_Logo_Black%201.webp",
            "https://cdn.prod.website-files.com/671fbe17abadacf3dc0bf0dc/672cda1bacf267a012779351_alapay-cellars-logo%201.webp",
            "https://cdn.prod.website-files.com/671fbe17abadacf3dc0bf0dc/672cda3e0b9f832e373b934d_HHW_Logo_est2013-204ddc49-1920w%201.webp",
            "https://cdn.prod.website-files.com/671fbe17abadacf3dc0bf0dc/672cda9f7b7c0f29b639da85_Renz-logo-5b%201.webp",
            "https://cdn.prod.website-files.com/671fbe17abadacf3dc0bf0dc/672cd8e7d9ccb696e21914a2_Paloma-Vineyard-Dove.png%201.webp",
            "https://cdn.prod.website-files.com/671fbe17abadacf3dc0bf0dc/672cda872789ad83f581079a_Doffo_Script_Logo_Black%201.webp",
            "https://cdn.prod.website-files.com/671fbe17abadacf3dc0bf0dc/672cda1bacf267a012779351_alapay-cellars-logo%201.webp",
            "https://cdn.prod.website-files.com/671fbe17abadacf3dc0bf0dc/672cda3e0b9f832e373b934d_HHW_Logo_est2013-204ddc49-1920w%201.webp",
            "https://cdn.prod.website-files.com/671fbe17abadacf3dc0bf0dc/672cda9f7b7c0f29b639da85_Renz-logo-5b%201.webp",
            "https://cdn.prod.website-files.com/671fbe17abadacf3dc0bf0dc/672cd8e7d9ccb696e21914a2_Paloma-Vineyard-Dove.png%201.webp",
          ].map((src, index) => (
            <img
              key={`duplicate-${index}`}
              className="w-[10rem] h-auto"
              src={src}
              alt={`Logo ${index + 1}`}
            />
          ))}
        </motion.div>

        {/* Right Gradient */}
        <div className="absolute right-0 z-10 w-[10rem] h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default MArque;
