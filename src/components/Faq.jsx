import { useState, useRef } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { gsap } from "gsap";

export const Faq = () => {
  const faqs = [
    {
      question: "What size wineries is Blended Technologies designed for?",
      answer:
        "Blended is built for wineries of all sizes, from single owner-winemakers to larger teams with dedicated production staff. It’s designed to adapt to your winemaking style, without imposing rigid structures. This flexibility lets Blended bridge the gap between diverse workflows and grow with you as your needs evolve.",
    },
    {
      question: "How long does the onboarding process take?",
      answer:
        "We can get you set up and online in minutes! Before onboarding, we'll craft a personalized plan tailored to your winery's process, timeline, and data. Onboarding usually takes one to four weeks, but if you're in a hurry, we can have everything ready to go in as little as a day.",
    },
    {
      question:
        "I’ve been using winemaking software and have built up a long history of data. What happens to it?",
      answer:
        "Your historical data is valuable, and we make sure it comes with you! Our custom-built importers help us read and recreate your data in Blended. Depending on your current system, we’ve successfully imported complete histories before kickoff. We’ll go over this in detail during the sales process as we build out your onboarding plan.",
    },
    {
      question: "Do you offer customer support and training?",
      answer:
        "Absolutely! We see our customers as partners and are fully committed to your success. If you prefer self-service, we have a comprehensive help center with articles and an AI chatbot for quick answers. Prefer a personal touch? You'll have direct access to your dedicated success manager by email and phone. Support goes beyond onboarding—just ask, and we’ll arrange personalized training sessions whenever you need them.",
    },
    {
      question: "How secure is my winery’s data on your platform?",
      answer:
        "Data security and privacy are top priorities for us. Blended is built on Amazon Web Services, so your data is securely backed up, fully private, and protected by industry-leading cloud security.",
    },
  ];

  const [index, setIndex] = useState(null);
  const answerRefs = useRef([]); // Store references for each answer div

  const toggleOpen = (i) => {
    if (index === i) {
      // If the same question is clicked, close it
      gsap.to(answerRefs.current[i], {
        height: 0,
        duration: 0.5,
        ease: "power2.out",
      });
      setIndex(null);
    } else {
      // Close previously open answer
      if (index !== null) {
        gsap.to(answerRefs.current[index], {
          height: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      }

      // Open the newly clicked answer
      gsap.to(answerRefs.current[i], {
        height: answerRefs.current[i].scrollHeight,
        duration: 0.5,
        ease: "power2.out",
      });
      setIndex(i);
    }
  };

  return (
    <div className="px-[20rem] flex h-[80vh] py-[10rem]  items-start justify-between  w-full">
      <div className="w-[30rem]">
        <p className="text-5xl font-semibold text-gray-900 font-poppins">
          Frequently asked
        </p>
        <p className="text-5xl font-semibold text-gray-400 font-poppins">
          question
        </p>
      </div>
      <div className="w-1/2">
        {faqs.map((faq, i) => (
          <div key={i} className="border-t-[1px] border-gray-400 overflow-hidden">
            {/* Question Row */}
            <div
              className={`flex justify-between py-5 items-center cursor-pointer ${
                i === faqs.length - 1 ? "border-b-[1px]" : ""
              }`}
              onClick={() => toggleOpen(i)}
            >
              <p>{faq.question}</p>
              <IoMdArrowRoundForward
                className={`transform transition-transform duration-300 ${
                  index === i ? "-rotate-90" : "rotate-90"
                }`}
              />
            </div>

            {/* Expandable Answer */}
            <div
              ref={(el) => (answerRefs.current[i] = el)} // Store ref for each answer
              style={{ height: 0 }}
            //   className="overflow-hidden"
            >
              <div className="py-5">
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    
    </div>
  );
};
