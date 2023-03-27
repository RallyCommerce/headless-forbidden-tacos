import './globals.css'

import { StorefrontProvider } from '@/provider/storefront-provider'
import Navigation from '@/app/components/navigation'
import Cart from '@/app/components/cart/cart'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head />
      <body className="min-h-screen h-full gradient overflow-x-hidden">
      <StorefrontProvider>
          <Navigation />
          <Cart />
          {children}
        </StorefrontProvider>
      </body>
    </html>
  )
}
