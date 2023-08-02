import React from 'react'
import { IArticle } from '../types/IArticle'
import { Navigation, Pagination, A11y, EffectFade, Autoplay, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import GraphicTextHero from './graphic-text-hero'

import 'swiper/css'
import 'swiper/css/pagination'

type DataProps = {
  articles: Array<IArticle>
}

export default function IndexCarousel({ articles }: DataProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay, Scrollbar]}
      loop={true}
      autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
      pagination={{ type: 'progressbar' }}
      scrollbar={{ draggable: false, hide: true }}
      spaceBetween={10}
      slidesPerView={1}
      style={{
        // @ts-ignore:next-line
        '--swiper-navigation-color': '#ffffff',
        '--swiper-pagination-color': '#83B668',
      }}
      className='h-[60dvh] md:h-[70dvh]'
    >
      {articles.map((article, index) => {
        return (
          <SwiperSlide className="" key={index}>
            <GraphicTextHero title={article.title} description={article.description} image={article.heroImage.gatsbyImageData} link={`/announcements/${article.slug}`} is_index={true}/>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
