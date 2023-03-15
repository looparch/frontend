import React, { Fragment, ReactNode } from 'react'
import type { IGatsbyImageData } from 'gatsby-plugin-image'
import { GatsbyImage } from 'gatsby-plugin-image'
import Navbar from './navbar'
import { Link } from 'gatsby'

type IDescription = {
  childMarkdownRemark: {
    html: string
  }
}
interface ReferenceProps {
  contentful_id: string
  title: string
  description: string
  gatsbyImageData: IGatsbyImageData
  __typename: string
}

type IArticleDesctiption = {
  raw: string
  references: Array<ReferenceProps>
}

type IGraphicTextHeroProps = {
  title: string
  description: any
  image: IGatsbyImageData
  link?: string
}

type IConditionalWrapperProps = {
  condition?: string
  children: React.ReactElement
  wrapper: React.FC
}

const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
}: IConditionalWrapperProps) => (condition ? wrapper(children) : children)

export default function GraphicTextHero(params: IGraphicTextHeroProps) {
  const { image, title, description, link } = params

  return (
    <div className="max-w-full mx-auto h-[90vh] md:h-[80vh] mb-6">
      <div className="grid object-cover w-full h-full px-2 mx-auto max-w-7xl">
        {/* <Navbar style={{ gridArea: '1/1' }} /> */}
        <GatsbyImage
          image={image}
          alt={`${title} Banner`}
          className="object-cover"
          style={{ gridArea: '1/1' }}
        />

        <div
          className="relative z-20 grid content-center max-w-4xl p-6 mx-auto text-center text-white align-items-center md:p-0"
          style={{ gridArea: '1/1' }}
        >
          <ConditionalWrapper
            condition={link}
            wrapper={(children) => {
              return <Link to={link as string}>{children as ReactNode}</Link>
            }}
          >
            <Fragment>
              <h1 className="mb-6 text-5xl font-bold leading-none md:text-6xl drop-shadow-md">
                {title}
              </h1>

              <div
                dangerouslySetInnerHTML={{
                  __html: description.childMarkdownRemark.html,
                }}
                className="text-2xl font-light leading-tight md:text-4xl drop-shadow-md"
              />
            </Fragment>
          </ConditionalWrapper>
        </div>

        <div
          className="relative z-10 bg-[#000000] opacity-50 mix-blend-multiply"
          style={{ gridArea: '1/1' }}
        ></div>
      </div>
    </div>
  )
}
