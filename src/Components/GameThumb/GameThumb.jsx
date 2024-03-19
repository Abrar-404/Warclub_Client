import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Styles/GameThumb.css';
import img1 from '../../assets/sl1.webp';
import img2 from '../../assets/sl2.jpg';
import img3 from '../../assets/sl3.jpg';
import img4 from '../../assets/sl4.jpg';
import img5 from '../../assets/sl5.jpg';
import img6 from '../../assets/sl6.png';
import img7 from '../../assets/sl7.jfif';

import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from 'swiper/modules';
import PulseButton from '../PulseButton/PulseButton';

function GameThumb() {
  return (
    <game>
      <div className="container">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide className="">
            <div className="relative">
              <img
                className="lg:h-[400px] lg:w-[600px] md:h-[200px] md:w-[400px] h-[100px] w-[300px] border-2 border-green-600 rounded-xl"
                src={img1}
                alt="slide_image"
              />
              <div className="absolute top-[130px]">
                <PulseButton></PulseButton>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="h-[200px] w-[300px]">
            <img
              className="lg:h-[400px] lg:w-[600px] md:h-[200px] md:w-[400px] h-[100px] w-[300px] border-2 border-green-600 rounded-xl"
              src={img2}
              alt="slide_image"
            />
          </SwiperSlide>

          <SwiperSlide className="h-[200px] w-[300px]">
            <img
              className="lg:h-[400px] lg:w-[600px] md:h-[200px] md:w-[400px] h-[100px] w-[300px] border-2 border-green-600 rounded-xl"
              src={img3}
              alt="slide_image"
            />
          </SwiperSlide>

          <SwiperSlide className="h-[200px] w-[300px]">
            <img
              className="lg:h-[400px] lg:w-[600px] md:h-[200px] md:w-[400px] h-[100px] w-[300px] border-2 border-green-600 rounded-xl"
              src={img4}
              alt="slide_image"
            />
          </SwiperSlide>

          <SwiperSlide className="h-[200px] w-[300px]">
            <img
              className="lg:h-[400px] lg:w-[600px] md:h-[200px] md:w-[400px] h-[100px] w-[300px] border-2 border-green-600 rounded-xl"
              src={img5}
              alt="slide_image"
            />
          </SwiperSlide>

          <SwiperSlide className="h-[200px] w-[300px]">
            <img
              className="lg:h-[400px] lg:w-[600px] md:h-[200px] md:w-[400px] h-[100px] w-[300px] border-2 border-green-600 rounded-xl"
              src={img6}
              alt="slide_image"
            />
          </SwiperSlide>

          <SwiperSlide className="h-[200px] w-[300px]">
            <img
              className="lg:h-[400px] lg:w-[600px] md:h-[200px] md:w-[400px] h-[100px] w-[300px] border-2 border-green-600 rounded-xl"
              src={img7}
              alt="slide_image"
            />
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </game>
  );
}

export default GameThumb;
