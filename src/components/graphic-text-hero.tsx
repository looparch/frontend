import React, {Fragment, ReactNode } from 'react'
import type { IGatsbyImageData } from 'gatsby-plugin-image'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

type IDescription = {
  childMarkdownRemark: {
    html: string
  }
}

type IGraphicTextHeroProps = {
  title: string
  description: IDescription
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
    <div className="grid mx-auto mb-6 h-[24rem] md:h-[36rem]">
      <GatsbyImage
        image={image}
        alt={`${title} Banner`}
        className="object-cover"
        style={{ gridArea: '1/1' }}
      />

      <div
        className="relative z-20 grid content-center max-w-4xl p-6 mx-auto text-center text-white transition-all duration-1000 translate-x-10 align-items-center md:p-0"
        style={{ gridArea: '1/1' }}
      >
        <ConditionalWrapper
          condition={link}
          wrapper={(children) => {
            return <Link to={link as string}>{ children as ReactNode }</Link>
          }}
        >
          <Fragment>
            <h1 className="mb-6 text-5xl font-bold leading-none md:text-6xl drop-shadow-md">
              {title}
            </h1>
          </Fragment>
        </ConditionalWrapper>
        <div
          dangerouslySetInnerHTML={{
            __html: description.childMarkdownRemark.html,
          }}
          className="text-2xl font-light leading-tight md:text-4xl drop-shadow-md"
        />
      </div>

      <div
        className="relative z-10 opacity-70 bg-gradient-to-t from-black"
        style={{ gridArea: '1/1' }}
      ></div>
    </div>
  )
}
