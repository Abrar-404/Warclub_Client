import { Swiper, SwiperSlide } from 'swiper/react';

import latest1 from '../../assets/latest1 (1).png';
import latest2 from '../../assets/latest2 (2).png';
import latest3 from '../../assets/latest3 (3).png';
import latest4 from '../../assets/latest4 (4).png';

import 'swiper/css';
import 'swiper/css/pagination';

import '../Styles/latestgames.css';

import { Pagination } from 'swiper/modules';

export default function LatestGames() {
  return (
    <latestgames>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
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
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={latest1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={latest2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={latest3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={latest4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={latest1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={latest2} alt="" />
        </SwiperSlide>
         <SwiperSlide className='border-2 px-5 rounded-xl py-5 border-red-600'>
          <img src={latest3} alt="" />
        </SwiperSlide>
        <SwiperSlide className='border-2 px-5 rounded-xl py-5 border-red-600'>
          <img className="" src={latest4} alt="" />
        </SwiperSlide>
      </Swiper>
    </latestgames>
  );
}
