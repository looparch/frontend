import React from 'react'
import Logos from '../components/logos'
import usePublishedBlogPosts from '../hooks/use-published-blog-posts'
import usePublishedManufacturers from '../hooks/use-published-manufacturers'
import useSiteMetadata from '../hooks/use-site-metadata'

export default function Footer() {
  const manufacturers = usePublishedManufacturers()
  const blogPosts = usePublishedBlogPosts()
  const siteMetadata = useSiteMetadata()
  const InstagramLogo = Logos['instagram']
  const LinkedInLogo = Logos['linked-in']

  return (
    <footer
      className="p-4 bg-loop-50 print:hidden md:p-6"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-0 py-12 mx-auto border-t max-w-8xl md:px-6 lg:py-16 lg:px-8">
        <div className="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-4">
            {/* <div className="md:grid md:grid-cols-2 md:gap-8"> */}
            <div>
              <h3 className="text-base font-medium text-dark-text">
                Manufacturers
              </h3>
              <ul role="list" className="grid grid-cols-2 gap-4 mt-4">
                {manufacturers.map(
                  (item: {
                    id: string | number | null | undefined
                    href: string | undefined
                    title:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | React.ReactFragment
                      | React.ReactPortal
                      | null
                      | undefined
                  }) => (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        className="text-base text-medium-text hover:text-light-text"
                      >
                        {item.title}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-base font-medium text-dark-text">
                Announcements
              </h3>
              <ul role="list" className="flex flex-col flex-wrap gap-4 mt-4">
                {blogPosts.map(
                  (item: {
                    id: string | number | null | undefined
                    slug: string | undefined
                    title:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | React.ReactFragment
                      | React.ReactPortal
                      | null
                      | undefined
                  }) => (
                    <li key={item.id}>
                      <a
                        href={item.slug}
                        className="text-base text-medium-text hover:text-light-text"
                      >
                        {item.title}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="pt-8 border-t border-gray-700 lg:flex lg:items-center lg:justify-between xl:mt-0">
          <div>
            <h3 className="text-base font-medium text-dark-text">
              Subscribe to our newsletter
            </h3>
            <p className="mt-2 text-base text-medium-text">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
          </div>
          <form className="mt-4 sm:flex sm:max-w-md lg:mt-0">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              className="w-full min-w-0 px-4 py-2 text-base"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md bg-loop-400 hover:bg-loop-500 focus:outline-none focus:ring-2 focus:ring-loop-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="pt-8 mt-8 border-t border-medium-text md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a
              href={'https://twitter.com/loop_io'}
              className="text-medium-text hover:text-light-text"
            >
              <span className="sr-only">Instagram</span>
              <InstagramLogo className="w-6 h-6" aria-hidden="true" />
            </a>
            <a
              href={'https://twitter.com/loop_io'}
              className="text-medium-text hover:text-light-text"
            >
              <span className="sr-only">LinkedIn</span>
              <LinkedInLogo className="w-6 h-6" aria-hidden="true" />
            </a>
            {/* {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-medium-text hover:text-light-text">
                <span className="sr-only">{item.name}</span>
                <item.icon className="w-6 h-6" aria-hidden="true" />
              </a>
            ))} */}
          </div>
          <p className="mt-8 text-base text-light-text md:order-1 md:mt-0">
            &copy; 2023 {siteMetadata.title} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
