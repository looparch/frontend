import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { IArticle } from '../types/IArticle'
import { Link } from 'gatsby'
import { Navigation, Pagination, A11y, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

type DataProps = {
  articles: Array<IArticle>
}

export default function IndexCarousel({ articles }: DataProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, EffectFade]}
      effect={"fade"}
      rewind={true}
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      spaceBetween={10}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="h-[50vh]"
      style={{
        "--swiper-navigation-color": "#ffffff"
      }}
    >
      {articles.map((article, index) => {
        return (
          <SwiperSlide
            className="relative grid content-center h-full grid-cols-1 overflow-hidden justify-items-center"
            key={index}
          >
            <div className="absolute w-full h-full">
              <GatsbyImage
                image={article.heroImage.gatsbyImageData}
                className="object-cover w-full h-full"
                alt=""
              />
            </div>
            <div className="absolute inset-0 z-10 h-full opacity-50 bg-gradient-to-t from-black"></div>
            <div className="absolute z-30 p-8 text-white lg:p-60">
              <Link to={`/blogPosts/${article.slug}`}>
                <h2 className="text-6xl font-bold leading-tight drop-shadow-lg shadow-black">
                  {article.title}
                </h2>
              </Link>
              <div
                className="text-4xl"
                dangerouslySetInnerHTML={{
                  __html: article.description.childMarkdownRemark.html,
                }}
              />
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
