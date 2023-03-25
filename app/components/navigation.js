'use client'

import { useEffect } from 'react'
import Link from 'next/link'

const Navigation = () => {

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const header = document.querySelector('header')
      if (window.scrollY >= 250) {
        header.classList.add('sticky', 'top-0', 'bg-white', 'shadow-lg')
      } else if (window.scrollY < 250) {
        header.classList.remove('sticky', 'top-0', 'bg-white', 'shadow-lg')
      }
    })
  }, [])

  return (
    <header className="z-50 transition">
      <div className="max-w-7xl w-full mx-auto px-3 py-5 bg-transparent">
        <div className="grid grid-cols-2 md:grid-cols-5 items-center">
          <div className="hidden col-span-2 md:grid grid-cols-2">
            <Link href="/">Mission</Link>
            <Link href="/about">Help Us</Link>
          </div>
          <div className="col-span-1 flex justify-start md:justify-center items-center">
            <div className="flex items-center border-4 border-black px-3">
              <span className="uppercase text-black font-bold">Forbidden <br/> Tacos</span>
            </div>
          </div>
          <div className="col-span-1 flex md:hidden justify-end items-center">
            <div className="flex items-center">
              CART
            </div>
          </div>
          <div className="hidden col-span-2 md:grid grid-cols-2">
            <Link href="/" className="col-span-1 flex justify-end">Shop</Link>
            <Link href="/about" className="col-span-1 flex justify-end">Contact</Link>
          </div>
        </div>
      </div>
    </header>  
  )
}

export default Navigation;