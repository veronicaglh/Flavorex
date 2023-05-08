// Component needed to create swiper effect 

// Import statements
import React from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper';
import Board from './board'; 
import SplashPage from './splash_page';

// Import statements for css files 
import 'swiper/css';
import 'swiper/swiper-bundle.min.css'


export default function SwiperPage({}) {
  
  return (
    <>
    <div>
  

    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}

      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      effect={"cube"}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
    >
      
      {/* Creating the slides */ }
      {/* First slide will be the splash page (starter page) while the second slide will contain the board */ }

      <SwiperSlide><SplashPage/></SwiperSlide>
      <SwiperSlide><Board/></SwiperSlide>
      
    </Swiper>

    </div>
    </>
  )
}
