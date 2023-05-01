'use client'
import { useRef } from 'react';
import Image from 'next/image';
import Section from './components/section';
import { motion, useScroll, useTransform} from 'framer-motion';


const HelpUs = () => {

 // create a motion variant for the floating effect

  const floating = {
    duration: 8,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "reverse",
  };

  return (

    <div id="help" className="my-5 md:my-10 pt-0 pb-5 md:py-10 max-w-7xl w-full mx-auto px-3 relative">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-cente overflow-hidden">
      <motion.div transition={{y: floating, x: floating}} animate={{y: ["-10px", "15px", "-5px", "15px"], x: ["-5px", "10px", "-15px", "12px"]}} className="col-span-1 md:-mr-32 flex justify-end items-center relative w-full h-[300px] md:h-[800px] p-5">
        <Image src="/taco-pouch.png" 
          alt="Chaco Taco" 
          fill
          className="object-contain object-center scale-110 md:scale-100 drop-shadow-md rotate-[55deg] md:rotate-0"
        />
      </motion.div>
      <div className="col-span-1">
        <h2 className="text-8xl md:text-9xl font-black uppercase">Help<span className="font-light">Us</span></h2>
        <p className="mt-5 text-xl font-light">You can join the fight to bring back the forbidden ice cream taco by helping us spread awareness of our mission. Here are the best ways to do that.</p>
        <ul className="list-disc list-inside ml-5">
          <li>Sharing on social media</li>
          <li>Telling your friends</li>
          <li>Calling your congressman</li>
          <li>Wearing our merch</li>
          <li>Getting our logo tattooed</li>
        </ul>
        <p className="mt-5 text-xl font-light">You can even use our media kit to get you started.</p>
      </div>
    </div>
  </div>
  )
}

export default HelpUs;