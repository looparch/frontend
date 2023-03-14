import * as React from 'react'
import Layout from '../components/layout'
import { SEO } from '../components/seo'

const ContactPage = () => {
  return (
    <Layout>
      <>
        <div className="w-full h-24 px-2 mx-auto bg-black md:px-6" />
        <h1>Contact Page</h1>
      </>
    </Layout>
  )
}

export default ContactPage

export const Head = () => <SEO title="Contact" />
