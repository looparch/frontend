import React from 'react'
import { Link } from 'gatsby'
import Logos from '../components/logos'
import usePublishedBlogPosts from '../hooks/use-published-blog-posts'
import usePublishedManufacturers from '../hooks/use-published-manufacturers'
import useSiteMetadata from '../hooks/use-site-metadata'

import FormSignup from './form-signup'

export default function Footer() {
  const manufacturers = usePublishedManufacturers()
  const blogPosts = usePublishedBlogPosts()
  const siteMetadata = useSiteMetadata()
  const InstagramLogo = Logos['instagram']
  const LinkedInLogo = Logos['linked-in']

  return (
    <footer
      className="p-6 shadow-2xl bg-loop-50 print:hidden md:p-0 shadow-loop-600"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-0 py-12 mx-auto max-w-7xl md:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold leading-tight text-dark-text">
              Representing
            </h3>
            <div className="flex flex-wrap gap-2 my-6">
              {manufacturers.map((item: any) => {
                return (
                  <Link
                    key={item.id}
                    to={`/${item.slug}`}
                    className="p-2 text-xs font-semibold text-black hover:bg-loop-500 hover:text-white"
                  >
                    {item.title}
                  </Link>
                )
              })}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold leading-tight text-dark-text">
              Announcements
            </h3>
            <div className="flex flex-wrap gap-2 my-6">
              {blogPosts.map((item: any) => {
                return (
                  <Link
                    key={item.id}
                    to={`/announcements/${item.slug}`}
                    className="p-2 text-xs font-semibold text-black hover:bg-loop-500 hover:text-white"
                  >
                    {item.title}
                  </Link>
                )
              })}
              <Link
                to={`/announcements/`}
                className="p-2 text-xs font-semibold text-black hover:bg-loop-500 hover:text-white"
              >
                View more...
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold leading-tight text-dark-text">
              Subscribe to our newsletter
            </h3>
            <p className="my-6 text-base text-medium-text">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <FormSignup />
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-loop-300 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a
              href={'https://twitter.com/loop_io'}
              className="text-medium-text hover:text-light-text"
            >
              <span className="sr-only">Instagram</span>
              <InstagramLogo aria-hidden="true" className="w-8 h-8" />
            </a>
            <a
              href={'https://twitter.com/loop_io'}
              className="text-medium-text hover:text-light-text"
            >
              <span className="sr-only">LinkedIn</span>
              <LinkedInLogo aria-hidden="true" className="w-8 h-8" />
            </a>
          </div>
          <p className="mt-8 text-base text-light-text md:order-1 md:mt-0">
            &copy; 2023 {siteMetadata.title} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
