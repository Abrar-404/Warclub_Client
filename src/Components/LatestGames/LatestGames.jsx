import { Swiper, SwiperSlide } from 'swiper/react';

import latest1 from '../../assets/latest1 (1).png';
import latest2 from '../../assets/latest2 (2).png';
import latest3 from '../../assets/latest3 (3).png';
import latest4 from '../../assets/latest4 (4).png';

import liitle1 from '../../assets/Littlelogo1.png';

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
        <SwiperSlide className="border-2 px-5 rounded-xl py-5 border-[#F03AF9]">
          <div className="hover-zoom rounded-xl">
            <img src={latest1} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="border-2 px-5 rounded-xl py-5 border-[#0FA48D]">
          <div className="hover-zoom rounded-xl">
            <img src={latest2} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="border-2 px-5 rounded-xl py-5 border-[#F03AF9]">
          <div className="hover-zoom rounded-xl">
            <img src={latest3} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="border-2 px-5 rounded-xl py-5 border-[#E58829]">
          <div className="hover-zoom rounded-xl">
            <img className="h-[250px]" src={latest4} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="border-2 px-5 rounded-xl py-5 border-[#F03AF9]">
          <div className="hover-zoom rounded-xl">
            <img src={latest1} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="border-2 px-5 rounded-xl py-5 border-[#0FA48D]">
          <div className="hover-zoom rounded-xl">
            <img src={latest2} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="border-2 px-5 rounded-xl py-5 border-[#F03AF9]">
          <div className="hover-zoom rounded-xl">
            <img src={latest3} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="border-2 px-5 rounded-xl py-5 border-[#E58829]">
          <div>
            <div className="hover-zoom rounded-xl relative">
              <img className="h-[250px]" src={latest4} alt="" />
            </div>

            <div className="absolute top-[200px] left-10 mx-auto">
              <img className="w-[60px] h-[50px]" src={liitle1} alt="" />
            </div>

            <div className='mt-5'>
              <h1 className='text-white'>The Hunter Killer</h1> <br />
              <h1>
                Entry Fee <span className="text-[#45F882]">$10.00</span>
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </latestgames>
  );
}
