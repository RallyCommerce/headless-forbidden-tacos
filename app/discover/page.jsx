// build a simple page with a title, a place for a youtube video embed, and a place for a description

import Image from 'next/image';
import Button from '@/app/components/button';

const DiscoverPage = () => {

 return (

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10 md:my-20 min-h-screen">

    <h1 className="text-2xl md:text-6xl font-black uppercase text-center">Create your own Headless Page with a customizable Checkout</h1>

    <div className="w-full flex justify-center mt-8 md:mt-12">
      <Button classes="bg-white border-4 border-black text-black px-5 py-3 rounded-sm mt-5 min-w-[250px] uppercase font-bold text-xl" cta="Deploy Your Own" id="deploy" />
    </div>

    <div className="relative flex justify-center mt-10 md:mt-16">
      <video className="w-full md:w-3/4 h-auto" controls>
        <source src="/taco-video.mp4" type="video/mp4" />
      </video>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 md:mt-20">
      <div className="col-span-1 flex items-center justify-center w-full">
        <Image src="/logos/nextjs.svg" alt="NextJS Logo" width={350} height={150} className="w-[250px] md:w-[350px] h-auto" />
      </div>
      <div className="col-span-1 relative h-[300px] w-full">
        <Image src="/next-screen.png" alt="NextJS screenshot" fill className="object-center object-contain" />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 md:mt-20">
      <div className="order-1 md:order-0 col-span-1 relative h-[300px] w-full">
        <Image src="/rally-screen.png" alt="Rally screenshot" fill className="object-center object-contain" />
      </div>
      <div className="col-span-1 flex items-center justify-center w-full">
       <Image src="/logos/rally.svg" alt="Rally Logo" width={350} height={150} className="w-[250px] md:w-[350px] h-auto" />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 md:mt-20">
      <div className="col-span-1 flex items-center justify-center w-full">
       <Image src="/logos/swell.svg" alt="Swell Logo" width={350} height={150} className="w-[250px] md:w-[350px] h-auto" />
      </div>
      <div className="col-span-1 relative h-[300px] w-full">
        <Image src="/swell-screen.png" alt="Swell screenshot" fill className="object-center object-contain" />
      </div>
    </div>


    <div id="deploy" className="mt-16 md:mt-20 relative flex flex-col items-center justify-center">
      <p className="text-xl md:text-5xl text-center max-w-4xl mx-auto w-full font-black uppercase">Deploy your own store with 1-click deploy on Vercel!</p>
      <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FRallyCommerce%2Fheadless-forbidden-tacos.git&env=NEXT_PUBLIC_RALLY_CLIENT_ID,SWELL_SECRET_KEY&redirect-url=https%3A%2F%2Fforbiddentaco.com&developer-id=oac_t8esngZ9dy3OT8AxmPHSlGAx&integration-ids=oac_t8esngZ9dy3OT8AxmPHSlGAx" className="mt-10">
        <img src="https://vercel.com/button" alt="Deploy with Vercel" className="w-[200px]" />
      </a>
    </div>
    
  </div>

 )

}

export default DiscoverPage;