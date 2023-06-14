import React from 'react'
import { Partytown } from '@builder.io/partytown/react'

const onRenderBody = ({
  setBodyAttributes,
  setHtmlAttributes,
  setHeadComponents,
}) => {
  // Define the body attributes
  const bodyAttributes = {
    className:
      'text-base subpixel-antialiased font-light text-dark-text bg-white print:bg-transparent font-inter font-feature-default h-full relative',
  }

  // Define the HTML attributes
  const HTMLAttributes = {
    lang: 'en',
  }

  // Set the body and HTML attributes
  setBodyAttributes(bodyAttributes)
  setHtmlAttributes(HTMLAttributes)

  if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test')
    return

  setHeadComponents([
    <Partytown key="partytown" forward={['gtag']} />,
    <script
      key="google-analytics"
      type="text/partytown"
      src={`${process.env.GA_ORIGIN}/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
    />,
    <script
      key="google-analytics-config"
      type="text/partytown"
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag(){ window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.GA_MEASUREMENT_ID}', { send_page_view: false })`,
      }}
    />,
  ])
}

export { onRenderBody }
