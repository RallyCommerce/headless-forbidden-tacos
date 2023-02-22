'use client'
import React, {useEffect, useState} from 'react'
import { swell } from '@/lib/swell/init/client'
import { useCart } from '@/lib/swell/hooks'



export const StorefrontContext = React.createContext()

export const StorefrontProvider = ({ children }) => {

// set the state of the cart and update it when the cart changes

  const [open, setOpen] = useState(false);
  const [navOpen, setNavOpen ] = useState(false)
  const [loading, setLoading] = useState(false);
  const [body, setBody] = useState(null);

  useEffect(() => {
    setBody(document.querySelector("body"))
  }, [])


  const { cart, setCart } = useCart()


  const getCart = async () => {
    const cart = await swell.cart.get()
    setCart(cart)
  }
  const addItem = async (item) => {
    await swell.cart.addItem(item)
  }

  const removeItem = async (item) => {
    await swell.cart.removeItem(item);
  }

  const clearCart = async () => {
    await swell.cart.setItems([])
  }

  const toggleCart = () => {
    setOpen(!open)
    body.classList.toggle("overflow-hidden")
  }


  const toggleNav = () => {
    setNavOpen(!navOpen)
    body.classList.toggle("overflow-hidden")
  }


  return (
    <StorefrontContext.Provider 
      value={{
        cart,
        getCart,
        addItem,
        removeItem,
        clearCart,
        open,
        navOpen,
        setNavOpen,
        setOpen,
        loading,
        setLoading,
        toggleCart,
        toggleNav,
      }}>
      {children}
    </StorefrontContext.Provider>
  )
}
