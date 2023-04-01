'use client'

import React, { useContext } from 'react';

import { StorefrontContext } from '@/provider/storefront-provider';

import { Cross2Icon } from '@radix-ui/react-icons';
import { motion, AnimatePresence } from 'framer-motion';

import Button from './button';

const Nav = () => {

  const {
    navOpen,
    toggleNav
  } = useContext(StorefrontContext);

  return ( 

    <AnimatePresence>
      {navOpen && (
       <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 w-full h-full bg-black bg-opacity-30 z-40"
            onClick={() => toggleNav(!navOpen)}
          />
          <motion.div
            initial={{ opacity: 1, x: '-350px',  scale: '1' }}
            animate={{ opacity: 1, x: '0', scale: '1' }}
            transition={{ duration: 0.5, ease: 'easeInOut'}}
            exit={{ opacity: 0, x: '-350px', scale: '1' }}
            className="flex flex-col justify-between h-screen w-[350px] fixed top-0 left-0 z-50 bg-white"
          >
            <div className="flex flex-col p-5">
              <div className="flex justify-between items-center">
                <div className="flex items-center border-4 border-black px-3 w-[200px]">
                  <span className="uppercase text-black font-bold">Forbidden <br/> Tacos</span>
                </div>
                <Cross2Icon className="w-6 h-6 text-black" onClick={() => toggleNav(!navOpen)} />
              </div>
              <div>
                <div className="flex flex-col items-start mt-10">
                  <Button 
                    action={() => toggleNav(!navOpen)}
                    classes="text-black text-xl"
                    cta="Mission"
                    id="mission"
                  />
                  <Button 
                    onClick={() => toggleNav(!navOpen)}
                    classes="text-black text-xl"
                    cta="Help Us"
                    id="help"
                  />
                </div>
              </div>
            </div>
          </motion.div>
       </>
      )}
  </AnimatePresence>
  )
};

export default Nav;