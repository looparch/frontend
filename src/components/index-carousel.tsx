import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { IArticle } from '../types/IArticle'
import { Link } from 'gatsby'
import { Navigation, Pagination, A11y, EffectFade, Autoplay } from 'swiper'
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
      modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
      effect={'fade'}
      rewind={true}
      // navigation={true}
      autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      spaceBetween={10}
      slidesPerView={1}
      style={{
        // @ts-ignore:next-line
        '--swiper-navigation-color': '#ffffff',
      }}
    >
      {articles.map((article, index) => {
        return (
          <SwiperSlide className="" key={index}>
            <div className="grid w-full grid-cols-12 grid-rows-1 max-h-[50rem] h-[50rem]">
              <div className="grid col-start-1 col-end-13 row-start-1 isolate -z-10">
                <GatsbyImage
                  image={article.heroImage.gatsbyImageData}
                  className="object-cover"
                  alt=""
                />
              </div>
              <div className="grid col-start-1 col-end-13 row-start-1 bg-gradient-to-t from-black to-transparent isolate -z-10" />
              <div className="grid col-start-3 col-end-11 row-start-1 row-end-1 text-center text-white drop-shadow-md isolate place-content-center">
                <Link to={`/blogPosts/${article.slug}`}>
                  <h2 className="text-6xl font-bold leading-tight drop-shadow-md shadow-black">
                    {article.title}
                  </h2>
                </Link>
                <div
                  className="text-2xl"
                  dangerouslySetInnerHTML={{
                    __html: article.description.childMarkdownRemark.html,
                  }}
                />
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
