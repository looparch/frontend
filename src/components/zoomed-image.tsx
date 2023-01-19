import React from 'react'
import { GatsbyImage, GatsbyImageProps, getImage } from 'gatsby-plugin-image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css';

const wrapperStyle = {
  width: '100%',
  height: '100%'
}

const ZoomedImage = (props: GatsbyImageProps) => {
  return (
    <Zoom>
      <GatsbyImage {...props}/>
    </Zoom>
  )
}

export default ZoomedImage
