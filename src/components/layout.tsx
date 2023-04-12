import React from 'react'
import { Slice } from 'gatsby'
import SizeIndicator from './size-indicator'

type LayoutProps = {
  children: JSX.Element
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <SizeIndicator />
      <Slice alias="navbar" />
      <main className="w-full min-h-full mx-auto bg-white print:bg-transparent max-w-8xl">{children}</main>
      <Slice alias="footer" />
    </>
  )
}
