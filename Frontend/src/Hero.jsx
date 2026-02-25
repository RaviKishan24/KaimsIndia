import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import {Navigation,Autoplay,Pagination} from "swiper/modules"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import banner1 from "./assets/banner1.jpg"

import banner2 from "./assets/banner2.jpg"

import banner3 from "./assets/banner3.jpg"

import banner4 from "./assets/banner4.jpg"
import "./Hero.css"
function Hero() {

  return (
     <div className="hero">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide><img src={banner1} alt="banner" /></SwiperSlide>
        <SwiperSlide><img src={banner2} alt="banner" /></SwiperSlide>
        <SwiperSlide><img src={banner3} alt="banner" /></SwiperSlide>
          <SwiperSlide><img src={banner4} alt="banner" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero;
