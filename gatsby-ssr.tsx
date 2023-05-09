import React from 'react'

const onRenderBody = ({
  setBodyAttributes,
  setHtmlAttributes,
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
}

export { onRenderBody }
