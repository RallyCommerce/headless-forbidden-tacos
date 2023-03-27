import Image from 'next/image'
import { MarqueeText } from './components/marquees'
import { getProductBySlug } from '@/lib/swell/products'
import Carousel from './carousel'
import Details from './details'
import Button from './components/button'

const forbidden = [
  {
    description: "Help Bring It Back"
  },
  {
    description: "Lost But Not Forgotton"
  },
  {
    description: "Fight For Our Right"
  },
  {
    description: "In Our Hearts 4Ever"
  },

]

export default async function Home() {

  const product = await getProductBySlug('forbidden-taco-shirt')

  return (
   <main>
      <div className="h-full relative flex flex-col justify-center items-center w-full mx-auto overflow-x-hidden">
          <div className="absolute inset-y-0 flex flex-col items-center justify-center w-full">
            <MarqueeText speed='40' classes='text-8xl md:text-[20rem]' text="Lost, But Not Forgotten." />
          </div>
          {/* <p className="text-4xl uppercase text-black">Show your passion to bring back the ultimate dessert</p>
          <button type="button" className="bg-white border-2 border-black text-black px-5 py-3 rounded-sm mt-5 min-w-[250px] uppercase font-bold text-xl">Wear For a Cause</button> */} 
        
          <Image src="/chaco-taco.gif" 
            alt="Chaco Taco" 
            width={700}
            height={700}
          />
          
      </div>
      <div className="flex flex-col items-center justify-cetner">
        <p className="text-2xl md:text-4xl uppercase text-black px-5 text-center">Show your passion to bring back the ultimate dessert</p>
        <Button cta="Wear For a Cause" id="product" />
      </div>     

      <div className="my-5 md:my-10 py-10 max-w-7xl w-full mx-auto px-3">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 items-center">
          {forbidden.map((item, index) => (
            <div key={index} className="mt-5">
              <span className="flex-shrink border-4 border-black rounded-sm px-3 py-2 font-bold uppercase text-2xl md:text-4xl">Forbidden</span>
              <div className="mt-3 md:mt-5 col-span-1 flex flex-col justify-center">
                <p className="text-light uppercase text-2xl md:text-4xl">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="my-5 py-5 max-w-7xl w-full mx-auto px-3 relative">   
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
          <div className="col-span-1">
            <h2 className="border-4 border-black rounded-sm px-3 py-2 text-6xl font-bold uppercase">Mission</h2>
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
          </div>

          <div className="relative hidden md:flex justify-center w-full h-[200px] md:h-[600px]">
            <Image src="/chaco-taco.gif" 
              alt="Chaco Taco" 
              fill
              className="w-full h-full object-contain object-center"
            />
          </div>
        </div>
      </div>

      <div className="my-5 py-5 max-w-7xl w-full mx-auto px-3 relative">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
          <div className="col-span-1 flex justify-end items-center relative w-full h-[300px] md:h-[1000px] p-5">
            <Image src="/white-taco-pouch.png" 
              alt="Chaco Taco" 
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="col-span-1">
            <h2 className="text-8xl md:text-9xl font-bold uppercase">Help<span className="font-light">Us</span></h2>
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

      <div className="my-5 md:my-10 py-5 relative bg-white w-full">
        <MarqueeText direction='right' repeat={20} speed='40' classes='text-5xl md:text-9xl' text="SHOP" />
      </div>

      <div id="product" className="my-5 md:my-10 py-10 max-w-7xl w-full mx-auto px-3 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5">
          <div className="col-span-1 md:col-span-2 h-[400px] md:h-[700px]">
            <Carousel product={product} />
          </div>
          <div className="col-span-1">
            <Details product={product} />
          </div>
        </div>
      </div>

      <div className="my-5 md:my-10 py-10 max-w-7xl w-full mx-auto px-3 relative">

        <div className="grid grid-cols-1 gap-0 items-center">
          <div className="col-span-1 flex justify-center">
            <h2 className="text-7xl md:text-9xl font-bold uppercase">Contact</h2>
          </div>
        </div>
      </div>

      
   </main>
  )
}
