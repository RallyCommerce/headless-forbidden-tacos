'use client'
import { useRef } from 'react';
import Image from 'next/image';
import Button from './components/button';
import Section from './components/section';
import { motion, useScroll, useTransform} from 'framer-motion';


const Mission = () => {
  let ref = useRef(null)
  let { scrollYProgress } =  useScroll({
    target: ref,
  });
  
  let y = useTransform(scrollYProgress, [0, 0.75], ["0%", "100%"])


  return (

    <Section id="mission" >   
      <motion.div style={{y}} className="hidden md:block absolute top-40 -left-44">
        <div className="relative">
          <Image 
            src="/taco-diagonal.png" 
            alt="Chaco Taco" 
            height={200}
            width={200}
            className=""
          />
        </div>
      </motion.div>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
        <div className="relative col-span-1 z-30">
          <div className="shrink-0">
            <h2 className="block shrink-0 border-4 border-black rounded-sm px-3 py-2 text-6xl font-black uppercase">Mission</h2>
          </div>
          <p className="mt-5 text-xl font-light">
            2022 signaled an ignoble infringement upon one of our most cherished traditions - the
            discontinuation of the taco-shaped ice cream that was widely loved by all.
          </p>
          <p className="mt-5 text-xl font-light">
            This decision was met with great displeasure and a strong call to action for its return was emanated across the lands.
          </p>
          <p className="mt-5 text-xl font-light">
            We can't stand by and let them get away with making this delicious treat "FORBIDDEN".
            We are taking action and joining forces in a grassroots campaign to bring back our precious dessert.  
          </p>
          <p className="mt-5 text-xl font-light">
            With the help of your voice of support and this relentless campaign, we have hope that we will not only prove that this icy treat should be brought back, but also show that this shall NEVER happen again.
          </p>
          <Button classes="bg-white border-2 border-black text-black px-5 py-3 rounded-sm mt-5 min-w-[250px] uppercase font-bold text-xl" cta="Wear For a Cause" id="product" />
          
          <motion.div style={{y}} className="z-10 hidden md:block absolute top-0 -right-44">
            <div className="relative">
              <Image src="/taco-diagonal-flip.png" 
                alt="Chaco Taco" 
                height={200}
                width={200}
                className="blur-xs"
              />
            </div>
          </motion.div>

        </div>

      </div>

      <motion.div style={{y}} className="hidden md:block absolute bottom-0 right-0 ">
        <div className="relative">
          <Image src="/taco-horizontal.png" 
            alt="Chaco Taco" 
            height={500}
            width={500}
            className="blur-sm"
          />
        </div>
      </motion.div>
      
    </Section>
  )
}

export default Mission;