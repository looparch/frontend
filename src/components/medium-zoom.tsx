import React from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

type MediumZoomProps = {
  image: {
    gatsbyImageData: IGatsbyImageData
  }
  title: string
}
const MediumZoom = ({ image, title }: MediumZoomProps) => {
  return (
    <div className="mb-3 border border-gray-500">
      <Zoom>
        <GatsbyImage image={image.gatsbyImageData} alt={title} />
      </Zoom>
    </div>
  )
}

export default MediumZoom
