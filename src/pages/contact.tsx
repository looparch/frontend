import React from 'react'
import { HeadFC } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import { SEO } from '../components/seo'
import FormContact from '../components/form-contact'

type DataProps = {
  location: {
    search: string
  }
}
const ContactPage = ({ location }: DataProps) => {
  const params = new URLSearchParams(location.search)
  const manufacturer = params.get('manufacturer') || ''

  return (
    <Layout>
      <div>
        <div className="hidden md:block">
          <StaticImage
            src="../images/map@2x.png"
            alt="map"
            layout="constrained"
            imgClassName="object-cover"
          />
        </div>
        <div className="max-w-6xl px-4 py-6 mx-auto sm:px-6 lg:py-8 lg:px-8">
          <h1 className="mt-2 mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Contact Us
          </h1>
          <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-3">
            <div className="order-last col-span-1 md:col-span-2 md:-order-last">
              <FormContact manufacturer={manufacturer} />
            </div>
            <div className="col-span-1 prose">
              <p>
                We’d love to hear from you. If you’re interested in receiving
                samples, scheduling a presentation or talking to us about any of
                our product lines, feel free to fill out the form.
              </p>
              <p>Our showroom address is:</p>
              <p>
                <strong>Loop Architectural Materials</strong> <br />
                3110 N 16 th Street <br />
                Phoenix, AZ 85016
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage

export const Head: HeadFC = ({ location }) => {
  return <SEO title="Contact Us" pathname={location.pathname} />
}
