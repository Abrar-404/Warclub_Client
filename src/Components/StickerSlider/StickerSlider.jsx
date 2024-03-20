import { Swiper, SwiperSlide } from 'swiper/react';

import sticker1 from '../../assets/sticker1.png';
import sticker2 from '../../assets/sticker2.png';
import sticker3 from '../../assets/sticker3.png';
import sticker4 from '../../assets/sticker4.png';
import sticker5 from '../../assets/sticker5.png';
import sticker6 from '../../assets/sticker6.png';
import sticker7 from '../../assets/sticker7.png';
import sticker8 from '../../assets/sticker8.png';
import sticker9 from '../../assets/sticker9.png';

import 'swiper/css';
import 'swiper/css/pagination';

import '../Styles/stickerslider.css';


import { Autoplay } from 'swiper/modules';

export default function StickerSlider() {
  return (
    <stickers>
      <Swiper
        slidesPerView={10}
        spaceBetween={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          '@1.75': {
            slidesPerView: 5,
            spaceBetween: 60,
          },
          '@2.00': {
            slidesPerView: 6,
            spaceBetween: 70,
          },
          '@2.50': {
            slidesPerView: 7,
            spaceBetween: 80,
          },
          '@2.75': {
            slidesPerView: 8,
            spaceBetween: 90,
          },
          '@3.00': {
            slidesPerView: 9,
            spaceBetween: 100,
          },
          '@3.50': {
            slidesPerView: 10,
            spaceBetween: 110,
          },
          '@3.75': {
            slidesPerView: 11,
            spaceBetween: 120,
          },
          '@4.00': {
            slidesPerView: 12,
            spaceBetween: 130,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <div className="">
          <SwiperSlide className="">
            <div className="hover-zoom">
              <img src={sticker1} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div className="hover-zoom">
              <img src={sticker2} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div className="hover-zoom">
              <img src={sticker3} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div className="hover-zoom">
              <img src={sticker4} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div className="hover-zoom">
              <img src={sticker5} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div className="hover-zoom">
              <img src={sticker6} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div className="hover-zoom">
              <img src={sticker7} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div className="hover-zoom">
              <img src={sticker8} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div className="hover-zoom">
              <img className="" src={sticker9} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div className="hover-zoom">
              <img className="" src={sticker1} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div className="hover-zoom">
              <img className="" src={sticker2} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div className="hover-zoom">
              <img className="" src={sticker3} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div className="hover-zoom">
              <img className="" src={sticker4} alt="" />
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </stickers>
  );
}
