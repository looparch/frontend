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

export default function NewNavbar(props: any) {
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
    <>
      <header className="sticky top-0 z-50 flex flex-wrap w-full py-3 text-sm bg-white md:justify-start md:flex-nowrap md:py-0">
        <nav
          className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="relative md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-between">
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
              <div className="md:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 p-2 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-md shadow-sm hs-collapse-toggle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600"
                  data-hs-collapse="#navbar-collapse-with-animation"
                  aria-controls="navbar-collapse-with-animation"
                  aria-label="Toggle navigation"
                >
                  <svg
                    className="w-4 h-4 hs-collapse-open:hidden"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                  <svg
                    className="hidden w-4 h-4 hs-collapse-open:block"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </button>
              </div>
            </div>

            <div
              id="navbar-collapse-with-animation"
              className="hidden overflow-hidden transition-all duration-300 hs-collapse basis-full grow md:block"
            >
              <div className="overflow-hidden overflow-y-auto max-h-[75vh] scrollbar-y">
                <div className="flex flex-col mt-5 divide-y divide-gray-200 gap-x-0 divide-dashed md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:pl-7 md:divide-y-0 md:divide-solid">
                  <a
                    className="py-3 font-medium text-blue-600 md:py-6"
                    href="#"
                    aria-current="page"
                  >
                    Landing
                  </a>

                  <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none]  py-3 md:py-6">
                    <button
                      type="button"
                      className="flex items-center w-full font-medium text-gray-800 hover:text-gray-600"
                    >
                      Company
                      <svg
                        className="ml-2 w-2.5 h-2.5 text-gray-600"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                    </button>

                    <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-80 hidden z-10 bg-white md:shadow-2xl rounded-lg py-2 md:p-2 before:absolute top-full before:-top-5 before:left-0 before:w-full before:h-5">
                      <a
                        className="inline-flex w-full p-4 text-gray-600 rounded-md gap-x-5 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                        href="#"
                      >
                        <svg
                          className="flex-shrink-0 w-5 h-5 mt-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM3 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm2 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                          <path d="M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v2H2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1V7h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm0 7v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-3-4v2H4V7h8z" />
                        </svg>
                        <div className="grow">
                          <span className="block mb-1 font-semibold text-gray-800">
                            Data
                          </span>
                          How you get the most accurate and up-to-date data
                        </div>
                      </a>

                      <div className="my-2 border-t border-gray-100"></div>

                      <a
                        className="inline-flex w-full p-4 text-gray-600 rounded-md gap-x-5 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                        href="#"
                      >
                        <svg
                          className="flex-shrink-0 w-5 h-5 mt-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                        </svg>
                        <div className="grow">
                          <span className="block mb-1 font-semibold text-gray-800">
                            Team{' '}
                            <span className="inline px-2 py-1 ml-1 text-xs text-white bg-blue-600 rounded-full">
                              We're hiring
                            </span>
                          </span>
                          Meet the people building products to help your
                          business grow
                        </div>
                      </a>

                      <div className="my-2 border-t border-gray-100"></div>

                      <a
                        className="inline-flex w-full p-4 text-gray-600 rounded-md gap-x-5 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                        href="#"
                      >
                        <svg
                          className="flex-shrink-0 w-5 h-5 mt-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
                          <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
                        </svg>
                        <div className="grow">
                          <span className="block mb-1 font-semibold text-gray-800">
                            Blog
                          </span>
                          The latest news, feature releases, and how to grow
                          with data
                        </div>
                      </a>
                    </div>
                  </div>

                  <a
                    className="py-3 font-medium text-gray-800 hover:text-gray-600 md:py-6"
                    href="#"
                  >
                    Resources
                  </a>

                  <a
                    className="py-3 font-medium text-gray-800 hover:text-gray-600 md:py-6"
                    href="#"
                  >
                    Work
                  </a>

                  <div className="pt-3 md:pt-0">
                    <a
                      className="inline-flex justify-center items-center gap-x-2 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-2.5 px-3"
                      href="#"
                    >
                      Request demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
