import React from 'react'
import { Slice } from 'gatsby'

type LayoutProps = {
  children: JSX.Element
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Slice alias="navbar" />
      <section className="w-full min-h-full mx-auto bg-white max-w-8xl">{children}</section>
      <Slice alias="footer" />
    </>
  )
}
