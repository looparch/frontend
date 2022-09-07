import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

type LayoutProps = {
  children: JSX.Element
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      <section className="max-w-5xl mx-auto">{children}</section>
      <Footer />
    </div>
  )
}
