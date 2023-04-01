import Image from 'next/image'
import Link from 'next/link'
import { MarqueeText } from './components/marquees'
import { getProductBySlug } from '@/lib/swell/products'
import Carousel from './carousel'
import Details from './details'
import Button from './components/button'
import Section from './components/section'
import Mission from './mission'


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
      <div className="h-full relative max-w-7xl mx-auto flex flex-col justify-center items-center py-5 md:py-10 px-3">

       <div className="grid grid-cols-1 md:grid-cols-5 gap-0 items-center">
          <div className="flex flex-col col-span-1 md:col-span-2">
            <h1 className="hidden md:block text-5xl text-center md:text-left font-black uppercase">Forbidden Tacos</h1>
            <h1 className="md:hidden text-6xl text-center md:text-left font-black uppercase">Forbidden <br /> Tacos</h1>
            <div className="hidden md:block">
              <p className="text-2xl md:text-4xl uppercase text-black font-light">Show your passion to bring back the ultimate dessert</p>
              <Button classes="bg-white border-2 border-black text-black px-5 py-3 rounded-sm mt-5 min-w-[250px] uppercase font-bold text-xl" cta="Wear For a Cause" id="product" />
            </div>
          </div>     

          <div className="-mt-24 md:mt-auto col-span-1 md:col-span-3 relative flex justify-center w-full h-[400px] md:h-[600px]">
            <Image src="/chaco-taco.gif" 
              alt="Chaco Taco" 
              fill
              className="w-full h-full object-contain object-center"
            />
          </div>

          <div className="block md:hidden flex flex-col items-center justify-center">
            <p className="text-2xl md:text-4xl uppercase text-black font-light text-center">Show your passion to bring back the ultimate dessert</p>
            <Button classes="bg-white border-2 border-black text-black px-5 py-3 rounded-sm mt-5 min-w-[250px] uppercase font-bold text-xl" cta="Wear For a Cause" id="product" />
          </div>
        </div>
          
      </div>

      <Section id="forbidden">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 items-center">
          {forbidden.map((item, index) => (
            <div key={index} className="mt-5">
              <span className="flex-shrink border-4 border-black rounded-sm px-3 py-2 font-black uppercase text-2xl md:text-4xl">Forbidden</span>
              <div className="mt-3 md:mt-5 col-span-1 flex flex-col justify-center">
                <p className="font-light uppercase text-2xl md:text-4xl">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Mission />

      <Section id="help" >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
          <div className="col-span-1 md:-mr-32 flex justify-end items-center relative w-full h-[300px] md:h-[800px] p-5">
            <Image src="/taco-pouch.png" 
              alt="Chaco Taco" 
              fill
              className="object-contain object-center"
            />
          </div>
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
      </Section>

      <div className="my-5 md:my-10 py-5 relative bg-white w-full">
        <MarqueeText direction='right' repeat={20} speed='40' classes='font-black text-2xl md:text-5xl' text="SHOP" />
      </div>

      <Section id="product">
        <h3 className="text-2xl md:text-4xl font-black uppercase">Make A Statement</h3>
        <p className="text-xl font-light uppercase">Wear your support for bringing back The Forbidden Taco. Stand with us and
        together we can ensure the return of this classic dessert.</p>
        <div className="mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-3 md:gap-5">
          <div className="col-span-1 md:col-span-2 h-[400px] md:h-[700px]">
            <Carousel product={product} />
          </div>
          <div className="col-span-1">
            <Details product={product} />
          </div>
        </div>
      </Section>

      <Section id="contact">
        <div className="grid grid-cols-1 gap-0 items-center">
          <div className="col-span-1">
            <div className="flex justify-center">
              <h2 className="text-7xl md:text-9xl font-bold uppercase flex items-center">Conta<img src="/taco-c.png" alt="taco-c" className="w-12 md:w-16" />t</h2>
            </div>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2">
              <div className="col-span-1">
              </div>
              <div className="col-span-1">
                <p className="font-light uppercase text-xl">Send us a message on an imaginary taco</p>
                <p className="font-bold uppercase text-l">Email: Tacos@ForbiddenTacos.com</p>
                <p className="font-bold uppercase text-l">Phone: Please don't call</p>
                <p className="font-bold uppercase text-l">Carrier Pigeon: Ummmm...</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="learn">
        <div className="grid grid-cols-1 gap-0 items-center">
          <div className="col-span-1">
            <h2 className="text-2xl md:text-4xl font-bold uppercase">Learn More About This Website</h2>
            <p className="text-xl font-light uppercase">learn more about how this website was built using composable commerce. </p>
            <div className="mt-5">
              <Link 
                href="/" 
                className="bg-white border-2 border-black text-black px-5 py-3 rounded-sm mt-5 min-w-[250px] uppercase font-bold text-xl">
                  Discover
              </Link>
            </div>
          </div>
        </div>
      </Section>

      
   </main>
  )
}
