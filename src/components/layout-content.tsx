import React from 'react'
import { Slice } from 'gatsby'

type LayoutContentProps = {
  children: JSX.Element
}

export default function LayoutContent({ children }: LayoutContentProps) {
  return (
    <>
      <div className="px-3 md:px-12">
        {children}
      </div>
    </>
  )
}
