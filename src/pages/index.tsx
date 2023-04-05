import * as React from 'react'
import type { HeadFC } from 'gatsby'
import usePublishedManufacturers from '../hooks/use-published-manufacturers'
import usePublishedArticles from '../hooks/use-published-articles'
import usePublishedBlogPosts from '../hooks/use-published-blog-posts'
import Layout from '../components/layout'
import IndexCarousel from '../components/index-carousel'
import LogoSection from '../components/logo-section'
import ArticleSection from '../components/article-section'
import FeaturedProductsSection from '../components/featured-products-section'
import { SEO } from '../components/seo'

const IndexPage = () => {
  const manufacturers = usePublishedManufacturers()
  const blogPosts = usePublishedBlogPosts()
  const articles = usePublishedArticles()
  return (
    <Layout>
      <div className="w-full h-full">
        <IndexCarousel articles={blogPosts.slice(0, 3)} />

        <div className="w-full mx-auto">
          <FeaturedProductsSection />
          <LogoSection />
          <ArticleSection />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  return <SEO />
}
