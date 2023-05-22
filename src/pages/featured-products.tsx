import * as React from 'react'
import Layout from '../components/layout'
import useAllFeaturedProducts from '../hooks/use-all-featured-products'
import ProductCard from '../components/product-card'
import { IProduct } from '../types'

const FeaturedProductsPage = () => {
  const products = useAllFeaturedProducts()

  return (
    <Layout>
      <div className="max-w-6xl px-4 py-6 mx-auto sm:px-6 lg:py-8 lg:px-8">
        <h1 className="mt-2 mb-8 text-3xl font-bold tracking-tight md:mb-12 sm:text-4xl">
          Featured Products
        </h1>
        <ul
          role="list"
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-4"
        >
          {products.map((item: IProduct) => {
            return <ProductCard {...item} key={item.id} />
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default FeaturedProductsPage
