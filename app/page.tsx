import Image from 'next/image'
import Link from 'next/link'
import { MarqueeText } from './components/marquees'
import { getProductBySlug, getProductsByCategory } from '@/lib/swell/products'
import Carousel from './carousel'
import Details from './details'
import Button from './components/button'
import Section from './components/section'
import Mission from './mission'
import HelpUs from './help-us'
import { Key } from 'react'

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

  const products = await getProductsByCategory('64469ec56be7af00123ffca8')

  return (
   <main>
      <div className="h-full relative max-w-7xl mx-auto flex flex-col justify-center items-center py-5 md:py-10 px-3">

       <div className="grid grid-cols-1 md:grid-cols-5 gap-0 items-center">
          <div className="flex flex-col col-span-1 md:col-span-2">
            <h1 className="hidden md:block text-5xl text-center md:text-left font-black uppercase">Forbidden Tacos</h1>
            <h1 className="md:hidden text-6xl text-center md:text-left font-black uppercase">Forbidden <br /> Tacos</h1>
            <div className="hidden md:block">
              <p className="text-2xl md:text-4xl uppercase text-black font-light">Show your passion to bring back the ultimate dessert</p>
              <Button classes="bg-white border-4 border-black text-black px-5 py-3 rounded-sm mt-5 min-w-[250px] uppercase font-bold text-xl" cta="Wear For a Cause" id="product" />
            </div>
          </div>     

          <div className="-mt-24 md:mt-auto col-span-1 md:col-span-3 relative flex justify-center w-full h-[400px] md:h-[600px]">
            <Image src="/chaco-taco.gif" 
              alt="Chaco Taco" 
              fill
              className="w-full h-full object-contain object-center"
            />
          </div>

          <div className="md:hidden flex flex-col items-center justify-center">
            <p className="text-2xl md:text-4xl uppercase text-black font-light text-center">Show your passion to bring back the ultimate dessert</p>
            <Button classes="bg-white border-4 border-black text-black px-5 py-3 rounded-sm mt-5 min-w-[250px] uppercase font-bold text-xl" cta="Wear For a Cause" id="product" />
          </div>
        </div>
          
      </div>

      <Section id="forbidden">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 items-start">
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

      <HelpUs />

      <div className="my-5 md:my-10 py-5 relative bg-white w-full">
        <MarqueeText direction='right' repeat={20} speed='40' classes='font-black text-2xl md:text-5xl' text="SHOP" />
      </div>

      <Section id="product">
        <h3 className="text-2xl md:text-4xl font-black uppercase">Make A Statement</h3>
        <p className="text-xl font-light uppercase">Wear your support for bringing back The Forbidden Taco. Stand with us and
        together we can ensure the return of this classic dessert.</p>
        <div className="mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-2 md:gap-5 space-y-10 md:space-y-0">
          {products.map((product: any, index: Key | null | undefined) => (
            <div key={index} className="col-span-1 flex flex-col justify-between">
              <div className="w-full">
                <div className="relative w-full h-[400px] md:h-[600px]">
                  <Carousel product={product} />
                </div>
                <h1 className="text-3xl md:text-5xl font-black uppercase mt-5 md:mt-10">{product.name}</h1>
                <div className="mt-5 text-l md:text-xl text-bright-blue-900" dangerouslySetInnerHTML={{ __html: product.description }} />
              </div>
              <div className="w-full mt-10">
                <Details product={product} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact">
        <div className="grid grid-cols-1 gap-0 items-center">
          <div className="col-span-1">
            <div className="flex justify-center">
              <h2 className="text-7xl md:text-[12rem] font-bold uppercase flex items-center">Conta<img src="/taco-c.png" alt="taco-c" className="w-10 md:w-20" />t</h2>
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
                href="/discover" 
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
