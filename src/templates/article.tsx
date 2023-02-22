import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import ArticleHero from '../components/article-hero'
import type { IArticle } from '../types'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { renderRichText } from 'gatsby-source-contentful/rich-text';


type DataProps = {
  data: {
    article: IArticle
  }
}

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined): JSX.Element => <b className="font-bold">{text}</b>,
  },
  renderNode: {
    // [INLINES.HYPERLINK]: (node: any, children: any) => {
    //   const { uri } = node.data
    //   return (uri &&
    //     <a href={uri} className="underline">
    //       {children}
    //     </a>
    //   )
    // },
    [BLOCKS.HEADING_2]: (node: any, children: any) => {
      return (children && <h2>{children}</h2>)
    },
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { gatsbyImageData, description } = node.data.target
      const img = getImage(gatsbyImageData)
      return (img && (
        <GatsbyImage
          image={img}
          alt={description}
        />
      ))
    },
  },
}

const Article = ({ data: { article } }: DataProps) => {
  return (
    <Layout>
      <>
        <ArticleHero {...article}/>
        {/* <div>{renderRichText(article.description, options)}</div> */}
        <div className="max-w-6xl">
          {renderRichText(article.body, options)}
        </div>
      </>
    </Layout>
  )
}

export default Article

export const pageQuery = graphql`
  query ArticleById($id: String!) {
    article: contentfulArticle(id: {eq: $id}) {
      id
      title
      slug
      heroImage {
        url
        gatsbyImageData(width: 1200, height: 400, resizingBehavior: CROP, placeholder: BLURRED)
      }
      description {
        raw
      }
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            description
            gatsbyImageData(width: 1200)
            __typename
          }
        }
      }
    }
  }
`
