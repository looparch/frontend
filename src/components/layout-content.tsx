import React from 'react'
import { Slice } from 'gatsby'
import SizeIndicator from './size-indicator'

type LayoutContentProps = {
  children: JSX.Element
}

export default function LayoutContent({ children }: LayoutContentProps) {
  return (
    <>
      <SizeIndicator />
      <div className="px-3 md:px-12">
        {children}
      </div>
    </>
  )
}
