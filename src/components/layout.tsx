import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

type LayoutProps = {
  children: JSX.Element
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-full">
      <Navbar />
      <section className="max-w-6xl px-2 mx-auto">{children}</section>
      <Footer />
    </div>
  )
}
