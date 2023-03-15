import React, { Fragment } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'gatsby'
import usePublishedManufacturers from '../hooks/use-published-manufacturers'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import type { IManufacturer } from '../types'
import LoopLogo from './logos/loop-logo'
import LoopLogoText from './logos/loop-logo-text'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar(props: any) {
  const _className = props.className || ''
  const opaqueClasses = {
    wrapperClass: 'px-0 md:px-0 py-0 md:py-4',
    navbarClass: 'px-6 py-6 md:px-12',
    textClass: 'text-dark-text',
    textFillStyle: 'rgb(95, 95, 95)',
  }
  const transparentClasses = {
    wrapperClass: 'px-0 md:px-12 py-0 md:py-4',
    navbarClass: 'p-4 md:p-6',
    textClass: 'text-dark-text',
    textFillStyle: 'rgb(95, 95, 95)',
  }

  const [navbarClasses, setNavbarClasses] = React.useState(opaqueClasses)
  const elementRef = React.useRef()

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (elementRef.current) {
        // @ts-ignore: Object is possibly 'null'.
        if (currPos.y < elementRef.current.clientHeight) {
          // setNavbarClasses(transparentClasses)
          setNavbarClasses(opaqueClasses)
        } else {
          setNavbarClasses(transparentClasses)
        }
      }
    },
    [setNavbarClasses],
    elementRef,
    true,
    300
  )

  const manufacturers = usePublishedManufacturers()

  return (
    <div
      className={`${_className} ${navbarClasses.wrapperClass} group sticky top-0 transition-all duration-300 z-50 max-w-7xl print:hidden mx-auto w-7xl`}
      style={props.style}
    >
      <Popover>
        <div
          className={`${navbarClasses.navbarClass} flex items-center justify-between transition-all duration-300 mx-auto bg-white max-w-7xl md:justify-start md:space-x-10`}
          ref={elementRef as any}
        >
          <div>
            <Link to="/" className="flex place-items-end">
              <span className="sr-only">Loop Architectural Materials</span>
              <LoopLogoText
                className="hidden h-12 rounded-md md:block"
                fillcolor="rgb(131, 182, 104)"
                textcolor={`${navbarClasses.textFillStyle}`}
              />
              <LoopLogo
                className="block h-12 rounded-md md:hidden"
                fillcolor="rgb(131, 182, 104)"
                textcolor="rgb(255, 255, 255)"
              />
              {/* <p>
                {JSON.stringify(navbarClasses)} {++rendersCount.current}
              </p> */}
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button
              className={`${navbarClasses.textClass} inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 hover:text-dark-text `}
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
                    <Popover.Button
                      className={classNames(
                        open ? 'text-dark-text' : `${navbarClasses.textClass}`,
                        `${navbarClasses.textClass} inline-flex items-center justify-center px-4 py-2 font-medium focus:outline-none`
                      )}
                    >
                      <span className="text-xs uppercase underline-offset-8 hover:underline focus:outline-none">
                        Manufacturers
                      </span>
                      <ChevronDownIcon
                        className={classNames(
                          open
                            ? `${navbarClasses.textClass}`
                            : `${navbarClasses.textClass}`,
                          'ml-2 h-5 w-5 group-hover:text-dark-text'
                        )}
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
                      <Popover.Panel className="absolute overflow-scroll z-30 w-screen max-w-md max-h-[100vh] shadow-md mt-3 -ml-4 transform -right-2 lg:max-w-3xl">
                        <div className="overflow-hidden border border-solid rounded-md ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-1 px-5 py-6 bg-white lg:gap-8 lg:p-8 lg:grid-cols-2">
                            {manufacturers.map((item: IManufacturer) => (
                              <Link
                                key={item.id}
                                to={`/${item.slug}`}
                                className="flex items-start p-0 -m-0 rounded-lg lg:-m-3 lg:p-3 hover:bg-loop-100"
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
                                  <p className="text-base font-medium text-dark-text">
                                    {item.title}
                                  </p>
                                  {item.tags && (
                                    <div className="break-before-avoid">
                                      <span className="inline-block mr-2 text-[.625rem] leading-5 font-medium text-medium-text line-clamp-1">
                                        {item.tags.join(', ')}
                                      </span>
                                      {/* {item.tags.map((tag: string) => (
                                      <span
                                        key={tag}
                                        className="inline-block mr-2 text-[.625rem] leading-5 font-medium text-medium-text"
                                      >
                                        {tag}
                                      </span>
                                    ))} */}
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
              <Link
                to="/contact"
                className={`${navbarClasses.textClass} inline-flex items-center justify-center p-2 text-xs font-normal uppercase hover:underline underline-offset-8 hover:${navbarClasses.textClass} `}
                activeClassName="underline"
              >
                Contact
              </Link>
              <Link
                to="/about-us"
                className={`${navbarClasses.textClass} inline-flex items-center justify-center p-2 text-xs font-normal uppercase hover:underline underline-offset-8 hover:${navbarClasses.textClass} `}
                activeClassName="underline"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
          >
            <div className="bg-white divide-y-2 rounded-lg shadow-lg divide-gray-50 ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <LoopLogo
                      className="h-12 rounded-md"
                      fillcolor="rgb(131, 182, 104)"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center p-2 bg-white rounded-md text-medium-text hover:bg-gray-100 hover:text-dark-text ">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <h2>Our Lines</h2>
                  <nav className="grid grid-cols-2 gap-6">
                    {manufacturers.map((item: IManufacturer) => (
                      <Link
                        key={item.id}
                        to={`/${item.slug}`}
                        className="flex items-center content-center p-3 py-4 -m-3 rounded-lg hover:bg-loop-200"
                      >
                        {/* <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md">
                        <img
                          className="w-32 h-8"
                          aria-hidden="true"
                          src={item.image_logo_dark.imageFile.publicURL}
                          alt=""
                        />
                      </div> */}
                        <div className="ml-4 text-base font-medium text-dark-text">
                          {item.title}
                        </div>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}
