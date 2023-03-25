import './globals.css'

import Navigation from './components/navigation'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head />
      <body className="min-h-screen h-full gradient">
        <Navigation />
        {children}
      </body>
    </html>
  )
}
