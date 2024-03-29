'use client'

import { useEffect, useContext } from 'react'
import Link from 'next/link'
import Button from './button'
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { StorefrontContext } from "@/provider/storefront-provider";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {

  const {
    cart,
    open,
    navOpen,
    toggleCart,
    toggleNav,
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
    <>
      <header className="z-30 transition overflow-x-hidden">
        <div className="max-w-7xl w-full mx-auto px-3 py-3 bg-transparent">
          <div className="grid grid-cols-2 md:grid-cols-5 items-center">
            <div className="hidden col-span-2 md:grid grid-cols-2">
              <Button 
                classes="text-black text-xl"
                cta="Mission"
                id="mission"
              />
              <Button 
                classes="text-black text-xl"
                cta="Help Us"
                id="help"
              />
            </div>
            <div className="col-span-1 flex justify-start md:justify-center items-center">
              <button type="button" className="md:hidden">
                <HamburgerMenuIcon onClick={() => toggleNav(!navOpen)} className="w-6 h-6 mr-2 text-black" />
              </button>
              <Link href="/" className="flex items-center border-4 border-black px-3">
                <span className="uppercase text-black font-bold">Forbidden <br/> Tacos</span>
              </Link>
            </div>
            <div className="hidden col-span-2 md:grid grid-cols-2 flex items-center">
              <div className="flex justify-center items-center">
                <Button 
                  classes="text-white bg-black rounded-sm px-5 py-2 text-xl shrink-0"
                  cta="Shop"
                  id="product"
                />
              </div>
              <Button 
                classes="text-black text-xl"
                cta="Contact"
                id="contact"
              />
               <AnimatePresence>
                {cart?.item_quantity > 0 && (
                  <motion.button 
                    type="button" 
                    onClick={() => toggleCart(!open)} 
                    initial={{ x: 50 }}
                    animate={{ x: 5 }}
                    transition={{ ease: "easeOut", type: "spring", stiffness: 100 }}
                    exit={{ x: 50 }}
                    className="hidden md:block fixed right-10 px-3 py-2 min-w-[50px] text-sm text-gray-700 font-semibold rounded-full bg-yellow-400  hover:bg-red-500 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 flex items-center"
                  >
                    <span className="uppercase mr-1">Cart</span>
                    {cart?.item_quantity || 0}
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
            <div className="md:hidden col-span-1 flex justify-end md:justify-center items-center">
              <AnimatePresence>
                {cart?.item_quantity > 0 && (
                  <motion.button 
                    type="button" 
                    onClick={() => toggleCart(!open)} 
                    initial={{ x: 50 }}
                    animate={{ x: 5 }}
                    transition={{ ease: "easeOut", type: "spring", stiffness: 100 }}
                    exit={{ x: 50 }}
                    className="px-3 py-2 min-w-[50px] text-sm text-gray-700 font-semibold rounded-full bg-yellow-400  hover:bg-red-500 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 flex items-center"
                  >
                    <span className="uppercase mr-1">Cart</span>
                    {cart?.item_quantity || 0}
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </header>  
    </>
  )
}

export default Navigation;