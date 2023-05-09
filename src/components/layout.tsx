import React from 'react'
import { Slice } from 'gatsby'

type LayoutProps = {
  children: JSX.Element
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Slice alias="navbar" />
      <main className="w-full min-h-full mx-auto bg-white max-w-7xl print:bg-transparent">{children}</main>
      <Slice alias="footer" />
    </>
  )
}
