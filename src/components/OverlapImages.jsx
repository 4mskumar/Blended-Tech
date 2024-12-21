import { useGSAP } from '@gsap/react'
import {gsap} from 'gsap'

const OverlapImages = () => {

  useGSAP(() => {
    gsap.fromTo(
      "#hero_text",
      {
        y: "5rem",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut'
      }
    );
  })

  return (
    <div id="hero_text" className='flex items-end gap-20  justify-center'>
        <div data-scroll data-scroll-speed='0.03'>
            <img className='w-[25rem] rounded-xl shadow-lg height-[30rem]' src='https://cdn.prod.website-files.com/671fbe17abadacf3dc0bf0dc/672cfeaa0b76b69305537f0a_Homepage%20Section%201%20-%20image%203-p-800.webp' />
        </div>
        <div>
            <img className='w-[20rem] rounded-xl shadow-lg height-[30rem]' src='https://cdn.prod.website-files.com/671fbe17abadacf3dc0bf0dc/672ce74c14e3b1acc45773aa_HomePage%20Section%201.webp' />
        </div>
        <div data-scroll data-scroll-speed='0.03'>
            <img className='w-[14rem] rounded-xl shadow-lg height-[30rem]' src='https://cdn.prod.website-files.com/671fbe17abadacf3dc0bf0dc/67335af5beab8f11bb3eb092_blended-phone-demo-p-500.webp' />
        </div>
    </div>
  )
}

export default OverlapImages