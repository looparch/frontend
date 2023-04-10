import React from 'react'
import { IArticle } from '../types/IArticle'
import { Navigation, Pagination, A11y, EffectFade, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import GraphicTextHero from './graphic-text-hero'

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
            <GraphicTextHero title={article.title} description={article.description} image={article.heroImage.gatsbyImageData} link={`/blogPosts/${article.slug}`} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
