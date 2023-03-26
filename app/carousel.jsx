'use client'
import Image from 'next/image'


const Carousel = ({ product }) => {

  return (
    <div className="relative w-full h-full">
      <Image src={product.images[0].file.url} alt={product.name} fill className="object-cover object-center" />
    </div>
  )
}

export default Carousel