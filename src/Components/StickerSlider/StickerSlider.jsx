import { Swiper, SwiperSlide } from 'swiper/react';

import sticker1 from '../../assets/sticker1.png'
import sticker2 from '../../assets/sticker2.png'
import sticker3 from '../../assets/sticker3.png'
import sticker4 from '../../assets/sticker4.png'
import sticker5 from '../../assets/sticker5.png'
import sticker6 from '../../assets/sticker6.png'
import sticker7 from '../../assets/sticker7.png'
import sticker8 from '../../assets/sticker8.png'
import sticker9 from '../../assets/sticker9.png'

import 'swiper/css';
import 'swiper/css/pagination';

import '../Styles/latestgames.css';

import { Autoplay } from 'swiper/modules';

export default function StickerSlider() {
  return (
    <latestgames>
      <Swiper
        slidesPerView={1}
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
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <div className="">
          <SwiperSlide className="px-5 rounded-xl py-5">
            <div>
              <img src={sticker1} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="px-5 rounded-xl py-5">
            <div>
              <img src={sticker2} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="px-5 rounded-xl py-5">
            <div>
              <img src={sticker3} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="px-5 rounded-xl py-5">
            <div>
              <img src={sticker4} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="px-5 rounded-xl py-5">
            <div>
              <img src={sticker5} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="px-5 rounded-xl py-5">
            <div>
              <img src={sticker6} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="px-5 rounded-xl py-5">
            <div>
              <img src={sticker7} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="px-5 rounded-xl py-5">
            <div>
              <img src={sticker8} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="px-5 rounded-xl py-5">
            <div>
              <img src={sticker9} alt="" />
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </latestgames>
  );
}
