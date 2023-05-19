import * as React from 'react'
import type { HeadFC } from 'gatsby'
import usePublishedBlogPosts from '../hooks/use-published-blog-posts'
import Layout from '../components/layout'
import IndexCarousel from '../components/index-carousel'
import IndexSectionLogos from '../components/index-section-logos'
import IndexSectionArticles from '../components/index-section-articles'
import IndexSectionFeaturedProducts from '../components/index-section-featured-products'
import IndexSectionPioneeringLines from '../components/index-section-pioneering-lines'
import IndexSectionProjectDiversity from '../components/index-section-project-diversity'
import IndexSectionEndToEnd from '../components/index-section-end-to-end'
import { SEO } from '../components/seo'

const IndexPage = () => {
  const blogPosts = usePublishedBlogPosts()
  return (
    <Layout>
      <div className="w-full h-full">
        <IndexCarousel articles={blogPosts.slice(0, 3)} />
        <IndexSectionLogos />
        <IndexSectionPioneeringLines />
        <IndexSectionProjectDiversity />
        <IndexSectionEndToEnd />
        <IndexSectionFeaturedProducts />
        <IndexSectionArticles />
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  return <SEO title=""/>
}
