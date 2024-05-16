import React, { Fragment, useState } from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Popover, Dialog, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import NavLink from './navlink'
import usePublishedManufacturers from '../hooks/use-published-manufacturers'
import type { IManufacturer } from '../types'
import LoopLogo from './logos/loop-logo'
import LoopLogoText from './logos/loop-logo-text'

export default function Navbar(props: any) {
  const _className = props.className || ''
  const navbarClasses = {
    wrapperClass: 'px-0 md:px-0',
    navbarClass: 'px-3 py-3 md:px-12 md:py-6 bg-white',
    textClass:
      'text-dark-text text-xs uppercase underline-offset-8 focus:outline-none inline-flex items-center justify-center px-4 py-2',
    textFillStyle: 'rgb(95, 95, 95)',
  }

  const manufacturers = usePublishedManufacturers()

  const [open, setOpen] = useState(false)

  return (
    <div
      className={`${_className} ${navbarClasses.wrapperClass} group sticky top-0 transition-all duration-300 z-50 max-w-7xl print:hidden mx-auto w-full`}
      style={props.style}
    >
      <Popover>
        <div
          className={`${navbarClasses.navbarClass} flex items-center
            justify-between transition-all duration-300 mx-auto
            bg-pure-white max-w-8xl md:justify-start md:space-x-10
          `}
        >
          <div>
            <Link to="/" className="flex place-items-end">
              <span className="sr-only">Loop Architectural Materials</span>
              <LoopLogoText
                className="hidden h-12 rounded-md md:block"
                fillcolor="rgb(4, 149, 95)"
                textcolor={`${navbarClasses.textFillStyle}`}
              />
              <LoopLogo
                className="block h-12 rounded-md md:hidden"
                fillcolor="rgb(4, 149, 95)"
                textcolor={`${navbarClasses.textFillStyle}`}
              />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button
              className={`${navbarClasses.textClass} inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 hover:text-dark-text `}
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-end">
            <Popover.Group as="nav" className="flex space-x-10">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button className={`${navbarClasses.textClass}`}>
                      <NavLink>Manufacturers</NavLink>
                      <ChevronDownIcon
                        className={'ml-2 h-5 w-5 group-hover:text-dark-text'}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute overflow-scroll z-30 w-screen max-w-xl max-h-[100vh] shadow-md mt-3 -ml-4 transform -right-2 lg:max-w-3xl">
                        <div className="overflow-hidden border border-solid rounded-md ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-1 px-5 py-6 bg-pure-white md:gap-6 md:p-6 md:grid-cols-2">
                            {manufacturers.map((item: IManufacturer) => (
                              <Link
                                key={item.id}
                                to={`/${item.slug}`}
                                className="flex items-center p-0 -m-0 rounded-md md:-m-3 md:p-3 hover:bg-gray-50"
                              >
                                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 overflow-hidden text-white rounded-sm lg:w-32 lg:h-16">
                                  <GatsbyImage
                                    image={
                                      item.image_hero.imageFile.childImageSharp
                                        .gatsbyImageData
                                    }
                                    alt={`${item.title} Menu Image`}
                                  />
                                </div>
                                <div className="ml-4">
                                  <p className="text-base font-semibold text-black">
                                    {item.title}
                                  </p>
                                  {item.tags && (
                                    <div className="break-before-avoid">
                                      <span className="inline-block mr-2 text-[.625rem] leading-5 font-medium text-medium-text line-clamp-1">
                                        {item.tags.join(', ')}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
            <div className="flex items-center space-x-10 md:ml-12">
              <NavLink>
                <Link
                  to="/contact"
                  activeClassName="underline underline-offset-8"
                >
                  Contact
                </Link>
              </NavLink>
              <Link
                to="/search"
                className={`${navbarClasses.textClass}`}
                activeClassName="underline"
              >
                <span className="sr-only">Search Our Website</span>
                <MagnifyingGlassIcon className="w-6 h-6 transition-transform text-dark-text hover:scale-150" />
              </Link>
            </div>
          </div>
        </div>
      </Popover>
      <Transition show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-start justify-center h-full text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-x-full"
                enterTo="opacity-100 translate-x-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 translate-x-full"
              >
                <Dialog.Panel className="relative w-full h-full overflow-hidden transition-all transform bg-white">
                  <div className="flex items-center justify-between w-full p-3 pr-0">
                    <LoopLogo
                      className="block h-12 rounded-md md:hidden"
                      fillcolor="rgb(4, 149, 95)"
                      textcolor="rgb(255, 255, 255)"
                    />
                    
                    <button
                      type="button"
                      className={`${navbarClasses.textClass} inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 hover:text-dark-text `}
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="grid h-full grid-cols-1 overflow-y-scroll">
                    <h4 className="block p-3 pb-1 font-semibold text-left">
                      Manufacturers
                    </h4>
                    {manufacturers.map((item: IManufacturer) => (
                      <Link
                        key={item.id}
                        to={`/${item.slug}`}
                        className="block pl-6 p-3 pb-1 text-left text-normal hover:bg-gray-100"
                      >
                        {item.title}
                      </Link>
                    ))}

                    <Link
                      key="search"
                      to={`/search`}
                      className="block p-3 pb-1 text-left font-semibold hover:bg-gray-100"
                    >
                      Search
                    </Link>
                    <Link
                      key="contact"
                      to={`/contact`}
                      className="block p-3 pb-1 text-left font-semibold hover:bg-gray-100"
                    >
                      Contact
                    </Link>
                    <div className="h-[20dvh]"></div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
