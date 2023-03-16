import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { Link } from 'gatsby'
import usePublishedManufacturers from '../hooks/use-published-manufacturers'
import usePublishedArticles from '../hooks/use-published-articles'
import usePublishedBlogPosts from '../hooks/use-published-blog-posts'
import Layout from '../components/layout'
import IndexCarousel from '../components/index-carousel'
import LogoSection from '../components/logo-section'
import ArticleSection from '../components/article-section'
import FeaturedProductsSection from '../components/featured-products-section'
import { SEO } from '../components/seo'

type ManufacturerProps = {
  id: string
  title: string
  slug: string
}

type ArticleProps = {
  id: string
  title: string
  slug: string
}

const IndexPage = () => {
  const manufacturers = usePublishedManufacturers()
  const blogPosts = usePublishedBlogPosts()
  const articles = usePublishedArticles()
  return (
    <Layout>
      <div className="w-full h-full">
        <IndexCarousel articles={blogPosts.slice(0, 3)} />

        <div className="px-2 mx-auto max-w-7xl">
          <FeaturedProductsSection />
          <LogoSection />
          <ArticleSection />
          <ul>
            {manufacturers.map((manufacturer: ManufacturerProps) => {
              return (
                <li key={manufacturer.id}>
                  <Link to={`/${manufacturer.slug}`}>{manufacturer.title}</Link>
                </li>
              )
            })}
          </ul>

          <ul>
            {articles.map((article: ArticleProps) => {
              return (
                <li key={article.id}>
                  <Link to={`/articles/${article.slug}`}>
                    Article - {article.title}
                  </Link>
                </li>
              )
            })}
          </ul>

          <ul>
            {blogPosts.map((article: ArticleProps) => {
              return (
                <li key={article.id}>
                  <Link to={`/blogPosts/${article.slug}`}>{article.title}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  return <SEO />
}
