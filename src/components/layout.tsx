import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

type LayoutProps = {
  children: JSX.Element
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-full bg-white">
      <Navbar />
      <section className="min-h-full">{children}</section>
      <Footer />
    </div>
  )
}

