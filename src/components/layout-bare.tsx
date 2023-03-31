import React from 'react'
import { Slice } from 'gatsby'

type LayoutProps = {
  children: JSX.Element
}

export default function LayoutBare({ children }: LayoutProps) {
  return (
    <>
      <section className="w-full min-h-full mx-auto bg-white max-w-8xl">{children}</section>
    </>
  )
}
