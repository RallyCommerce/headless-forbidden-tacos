'use client'

import { useEffect, useContext } from 'react'
import Link from 'next/link'

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { StorefrontContext } from "@/provider/storefront-provider";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {

  const {
    cart,
    open,
    toggleCart
  } = useContext(StorefrontContext);

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
    <header className="z-50 relative transition overflow-x-hidden">
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
          <div className="hidden col-span-2 md:grid grid-cols-2">
            <Link href="/" className="col-span-1 flex justify-end">Shop</Link>
            <Link href="/about" className="col-span-1 flex justify-end">Contact</Link>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {cart?.item_quantity > 0 && (
          <motion.button 
            type="button" 
            onClick={() => toggleCart(!open)} 
            initial={{ x: 50 }}
            animate={{ x: 5 }}
            transition={{ ease: "easeOut", type: "spring", stiffness: 100 }}
            exit={{ x: 50 }}
            className="absolute top-6 right-0 pl-3 pr-5 py-2 w-[50px] text-gray-700 font-semibold rounded-l-full bg-yellow-500  hover:bg-red-500 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
            {cart?.item_quantity || 0}
          </motion.button>
        )}
      </AnimatePresence>
    </header>  
  )
}

export default Navigation;