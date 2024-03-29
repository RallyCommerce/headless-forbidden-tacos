'use client'

import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';

import { StorefrontContext } from '@/provider/storefront-provider';

import { Cross2Icon, UpdateIcon } from '@radix-ui/react-icons';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

const CartButton = dynamic(() => import('./cart-button'), { 
  loading: () => <p>Loading...</p>,
  ssr: false
});


const Cart = () => {

  const {
    cart,
    open,
    toggleCart,
    clearCart,
    removeItem,
    getCart
  } = useContext(StorefrontContext);

  const [loading, setLoading] = useState(false)


  const thumbnails = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }
  
  const thumbnail = {
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: (i * 0.3),
        type: "spring",
        stiffness: 50,
        ease: [0.56, 0.03, 0.12, 1.04],
      },
    }),
    hidden: { opacity: 0, y: -50 },
  }
  

  return ( 

    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 w-full h-screen bg-black bg-opacity-30 z-40"
            onClick={() => toggleCart(!open)}
          />
          <motion.div
            initial={{ opacity: 1, x: '350px',  scale: '1' }}
            animate={{ opacity: 1, x: '0', scale: '1' }}
            transition={{ duration: 0.5, ease: 'easeInOut'}}
            exit={{ opacity: 0, x: '350px', scale: '1' }}
            className="flex flex-col justify-between h-screen w-[350px] fixed top-0 right-0 z-50 bg-white"
          >
           
              <div>
                <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
                  <h2 className="text-xl font-bold">Your Cart</h2>
                  <button onClick={() => toggleCart(!open)} className="focus:outline-none">
                    <Cross2Icon className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <motion.div
                variants={thumbnails}
                initial="hidden"
                animate="visible"
                className={`flex flex-col jusitfy-start flex-grow border border-gray-100 space-y-5 overflow-y-auto p-3 ${loading ? 'blur-lg' : ''}`}>
                  {cart?.items?.map((item, i) => (
                    <motion.div 
                      key={item.id} 
                      custom={i}
                      variants={thumbnail}
                      className={`flex items-center space-x-5 shadow-sm ${loading ? 'blur-lg' : ''}`}>
                      <div className="h-20 w-20 relative">
                        <Image
                          src={item.variant?.images[0].file.url || item.product.images[0].file.url}
                          alt={item.product.name}
                          fill
                          className="rounded-sm object-cover object-center"
                          
                        />
                      </div>
                      <div className="flex justify-between items-center w-full pr-2">
                        <div>
                          <p className="font-bold">{item.product.name}</p>
                          <p className="text-sm">{item.variant?.name}</p>
                          {item.purchase_option?.type === 'subscription' && (
                            <span className="flex items-center space-x-1">
                              <UpdateIcon className="h-3 w-3" />
                              <p className="text-xs">{item.purchase_option?.plan_description}</p>
                            </span>
                          )}
                          <p className="text-xs">Q: {item.quantity}</p>
                        </div>
                       
                        <button 
                          type="button" 
                          className="focus:outline-none"
                          onClick={
                            () => {
                              setLoading(true)
                              removeItem(item?.id).then(
                                () => {
                                  getCart().then(
                                    () => {
                                      setLoading(false)
                                    }
                                  )
                                }
                              )
                            }}>
                          <Cross2Icon className="w-4 h-4" />
                        </button>
                      
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
              <div className="w-full">
                <div className="flex flex-col px-3 py-5 border-t border-gray-200 divide-y divide-gray-200">
                  <div className="flex justify-between py-2">
                    <p className="text-sm">Subtotal</p>
                    <p className="text-sm font-bold">${cart?.sub_total}</p>
                  </div>
                  <div className="flex justify-between py-2">
                    <p className="text-md">Total</p>
                    <p className="text-md font-bold">${cart?.grand_total}</p>
                  </div>
                </div>
                <div className="flex flex-col w-full pb-5">
                  <div className="mt-5 flex flex-col w-full items-center">
                    <CartButton customClass="w-full bg-red-600 text-white rounded-sm shadow-sm px-8 py-5" customText="Proceed to Checkout" />
                    <button 
                      type="button"
                      onClick={
                        () => {
                          setLoading(true)
                          clearCart().then(
                            () => {
                              getCart().then(
                                () =>{
                                  setLoading(false)
                                }
                              )
                             
                            }
                          )
                        }}
                      className="mt-3 cursor-pointer"
                    >
                        Clear Cart
                    </button>
                  </div>
                </div>
              </div>
         
          </motion.div>
        </>
      )}
  </AnimatePresence>
  )
};

export default Cart;