import React from 'react'

const onRenderBody = ({ setBodyAttributes, setHtmlAttributes }) => {
  const bodyAttributes = {
    className: 'text-base subpixel-antialiased font-light text-dark-text bg-white font-inter font-feature-default h-full'
  }

  const HTMLAttributes = {
    lang: 'en',
    // className: 'scroll-smooth hover:scroll-auto',
  }
  setHtmlAttributes(HTMLAttributes);
  setBodyAttributes(bodyAttributes);
};

export { onRenderBody };
