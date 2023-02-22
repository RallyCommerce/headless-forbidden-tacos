// build a simple page with a title, a place for a youtube video embed, and a place for a description


const DiscoverPage = () => {

 return (

  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-10 md:my-20 min-h-screen">

    <h1 className="text-2xl md:text-5xl font-black uppercase">Learn How to Launch a Headless E-Commerce Landing Page!</h1>
    <p className="my-5 text-xl md:text-3xl font-light">This website was built with <a href="https://nextjs.com" className="underline">NextJS</a>, <a href="https://rallyon.com" className="underline">Rally</a>, and <a href="https://swell.is" className="underline">Swell</a></p>

    <div className="relative flex justify-center">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/T_EkBENsLdQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <p className="mt-5 text-lg">Learn how to build a simple e-commerce landing page with NextJS, Rally, and Swell. This video will show how to setup a headless e-commerce website using modern technology in 30 minutes!</p>

    <div className="mt-10 relative flex flex-col items-center justify-center">
      <p className="text-xl font-black uppercase">Deploy your own store with 1-click deploy on Vercel!</p>
      <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fstorefrontd[…]nis.storefront.dev&integration-ids=oac_t8esngZ9dy3OT8AxmPHSlGAx" className="mt-10">
        <img src="https://vercel.com/button" alt="Deploy with Vercel" className="w-[200px]" />
      </a>
    </div>
    
  </div>

 )

}

export default DiscoverPage;