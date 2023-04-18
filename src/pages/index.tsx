import * as React from 'react'
import type { HeadFC } from 'gatsby'
import usePublishedBlogPosts from '../hooks/use-published-blog-posts'
import Layout from '../components/layout'
import IndexCarousel from '../components/index-carousel'
import LogoSection from '../components/logo-section'
import ArticleSection from '../components/article-section'
import FeaturedProductsSection from '../components/section-featured-products'
import { SEO } from '../components/seo'

const IndexPage = () => {
  const blogPosts = usePublishedBlogPosts()
  return (
    <Layout>
      <div className="w-full h-full">
        <IndexCarousel articles={blogPosts.slice(0, 3)} />
        <LogoSection />
        <FeaturedProductsSection />
        <ArticleSection />
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  return <SEO />
}
