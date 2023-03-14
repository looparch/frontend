import React from 'react'
import { Slice } from 'gatsby'

type LayoutProps = {
  children: JSX.Element
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Slice alias="navbar" />
      {/* <Navbar /> */}
      <section className="w-full min-h-full mx-auto">{children}</section>
      <Slice alias="footer" />
    </>
  )
}
