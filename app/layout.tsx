import './globals.css'

import { StorefrontProvider } from '@/provider/storefront-provider'
import Navigation from '@/app/components/navigation'
import Cart from '@/app/components/cart/cart'
import Nav from '@/app/components/mobile-nav'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head />
      <body className="min-h-screen h-full gradient overflow-x-none">
        <StorefrontProvider>
          <Navigation />
          <Cart />
          <Nav />
          {children}
          <div className="bg-white w-full">
            <div className="flex justify-between items-center py-5 px-3">
              <div>
                <p className="text-sm font-bold">© 2023 Forbidden Tacos</p>
              </div>
              <div>
                <p className="text-sm font-bold uppercse">@FORBIDDEN_TACOS</p>
              </div>
            </div>
          </div>
        </StorefrontProvider>
      </body>
    </html>
  )
}
