import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { Link } from 'gatsby'
import usePublishedManufacturers from '../hooks/use-published-manufacturers'
import usePublishedArticles from '../hooks/use-published-articles'
import Layout from '../components/layout'

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
  const articles = usePublishedArticles()
  return (
    <Layout>
      <div>
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
          {articles.map((article: ManufacturerProps) => {
            return (
              <li key={article.id}>
                <Link to={`/articles/${article.slug}`}>{article.title}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
