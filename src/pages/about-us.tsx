import * as React from 'react'
import Layout from '../components/layout'
import { SEO } from '../components/seo'
import { HeadFC } from 'gatsby'

const AboutUsPage = () => {
  return (
    <Layout>
      <>
        <div className="w-full h-24 px-2 mx-auto bg-black md:px-6" />
        <h1>About Us Page</h1>
      </>
    </Layout>
  )
}

export default AboutUsPage

export const Head: HeadFC = () => <SEO title="About Us" />
