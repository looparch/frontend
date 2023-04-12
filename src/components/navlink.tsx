import * as React from 'react'

type NavLinkProps = {
  children: React.ReactNode
}

const NavLink = ({ children }: NavLinkProps) => {
  return (
    <div
      className={`
        uppercase
        text-xs
        font-light
        text-black
        inline-block
        relative
        after:content-['']
        after:absolute
        after:w-full
        after:scale-x-0
        after:h-[1px]
        after:bottom-[-4px]
        after:left-0
        after:bg-black
        after:origin-bottom-left
        after:transition-all
        duration-300
        hover:after:scale-x-100
        `}
    >
      {children}
    </div>
  )
}

export default NavLink
