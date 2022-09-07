import React from 'react'

type LayoutProps = {
  children: JSX.Element
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <section className="max-w-5xl mx-auto">{children}</section>
    </div>
  )
}
