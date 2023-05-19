import React from 'react'
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
      className="p-4 bg-loop-50 print:hidden md:p-6"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-0 py-12 mx-auto max-w-7xl md:px-6 lg:py-16 lg:px-8">
        <div className="flex flex-col pt-8 border-t md:flex-row">
          <div className="w-full md:w-1/2">
            <h3 className="text-base font-medium text-dark-text">
              Subscribe to our newsletter
            </h3>
            <p className="mt-2 text-base text-medium-text">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
          </div>
          <div className="w-full mt-6 md:mt-0 md:w-1/2">
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
