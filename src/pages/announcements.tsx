import * as React from 'react'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import useAllPublishedBlogPosts from '../hooks/use-all-published-blog-posts'
import CardTitleDescription from '../components/card-title-description'

type ArticleProps = {
  id: string
  title: string
  slug: string
  heroImage: {
    gatsbyImageData: IGatsbyImageData
  }
  description: {
    childMarkdownRemark: {
      html: string
      excerpt: string
    }
  }
  body: {
    childMarkdownRemark: {
      html: string
      excerpt: string
    }
  }
}

const AnnouncementsPage = () => {
  const announcements = useAllPublishedBlogPosts()
  console.log(announcements)
  return (
    <Layout>
      <div className="max-w-6xl px-4 py-6 mx-auto sm:px-6 lg:py-8 lg:px-8">
        <h1 className="mt-2 mb-8 text-3xl font-bold tracking-tight md:mb-12 sm:text-4xl">
          Announcements
        </h1>
        <article className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-4">
          {announcements.map((item: ArticleProps) => {
            return (
              <CardTitleDescription
                key={item.id}
                link={`/announcements/${item.slug}`}
                gatsbyImage={item.heroImage.gatsbyImageData}
                title={item.title}
                description={item.body.childMarkdownRemark.excerpt}
              />
            )
          })}
        </article>
      </div>
    </Layout>
  )
}

export default AnnouncementsPage
