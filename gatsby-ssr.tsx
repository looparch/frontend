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

  // Set the head components to render in the <head> section.
  // const headComponents = [
  //   <Partytown key="partytown" debug={true} />,
  //   <script
  //     key="turnstile"
  //     type="text/partytown"
  //     src="https://challenges.cloudflare.com/turnstile/v0/api.js"
  //     async
  //     defer
  //   />,
  //   <meta
  //     key="viewport"
  //     name="viewport"
  //     content="width=device-width, initial-scale=1"
  //   />,
  // ]
  // setHeadComponents(headComponents)
}

export { onRenderBody }
