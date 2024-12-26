import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import React, { useEffect, useState } from 'react'
import { IoMdArrowRoundForward } from "react-icons/io";


const Carousel = ({slides, interval, head, text}) => {
  const [progress, setProgress] = useState(0)
  const [currInd, setCurrInd] = useState(0)
  useEffect(() => {
    const progressCurr = setInterval(() => {
      setProgress((prev) => {
        if(prev >= 100){
          setCurrInd((prevInd) => (prevInd + 1) % slides.length)
          return 0
        }

        
        return prev + 100 / (interval / 100)
      })
    }, 100)
    
    return () => {
      clearInterval(progressCurr)
    }
  }, [slides.length, interval])

  useGSAP(() => {
    gsap.fromTo('#carImg', {
      y:-10,
      opacity: 0,
    }, {    
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out'
    })
  })

  return (
    <div className='relative  h-52 px-24   w-full flex'>

      <div className='absolute h-full  w-[2px] left-[4rem] bottom-0'>
        <div className=' bg-red-600 h-[10rem] absolute left-[4rem] bottom-0 duration-100 z-10 transition-all ease-linear'>

        </div>
        <div style={{height: `${progress}%`}} className='linear z-20 bg-black duration-100 transition-all ease-linear'>

        </div>
      </div>
        <div className='w-[30rem] mt-5 absolute'>
          <h1 className='text-4xl font-poppins text-gray-700 font-semibold'>{head[currInd]}</h1>
          <p className='text-xl mt-5 font-poppins text-gray-700 '>{text[currInd]}</p>
          <div className='flex mt-5 gap-3 items-center'>
            <div className='bg-[#E4DEC4] cursor-pointer rounded-full p-1'>
              <IoMdArrowRoundForward  color='orange' size={25}/>
            </div>
            <p className='text-lg font-semibold cursor-pointer hover:scale-105 duration-150 transition-all ease-in-out text-orange-500'>Learn more</p>
          </div>
        </div>
      <div id='carImg' className='rounded-l-full '>
        <img className='w-[60rem] ml-[52.9rem] relative -top-[12rem] rounded-l-[7rem] rounded-r-[3rem]' src={slides[currInd]} />
      </div>
    </div>
  )
}

export default Carousel