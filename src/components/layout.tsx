import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

type LayoutProps = {
  children: JSX.Element
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <section className="w-full min-h-full mx-auto">
        {children}
      </section>
      <Footer />
    </>
  )
}
