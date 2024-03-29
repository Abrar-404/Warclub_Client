import { Swiper, SwiperSlide } from 'swiper/react';

import player1 from '../../assets/player1.png';
import player2 from '../../assets/player2.png';
import player3 from '../../assets/player3.png';
import player4 from '../../assets/player4.png';
import player5 from '../../assets/player5.png';

import 'swiper/css';
import 'swiper/css/pagination';

import '../Styles/latestgames.css';

import { Autoplay } from 'swiper/modules';

export default function Players() {
  return (
    <playerall>
      <Swiper
        slidesPerView={5}
        spaceBetween={0}
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
            <div className="relative">
              <img src={player1} alt="" />
              <div className="absolute top-[91.5%] left-[33%]">
                <h1 className="text-white font-bold lg:text-lg md:text-[8px] text-[24px] hover:text-[#45F882]">
                  Mac Marsh
                </h1>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="px-5 rounded-xl py-5">
            <div className="relative">
              <img src={player2} alt="" />
              <div className="absolute top-[90.5%] left-[30%]">
                <h1 className="text-white font-bold lg:text-lg md:text-[8px] text-[24px] hover:text-[#45F882]">
                  Robin Cloth
                </h1>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="px-5 rounded-xl py-5">
            <div className="relative">
              <img src={player3} alt="" />
              <div className="absolute top-[91.5%] left-[33%]">
                <h1 className="text-white font-bold lg:text-lg md:text-[8px] text-[24px] hover:text-[#45F882]">
                  Eva Raina
                </h1>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="px-5 rounded-xl py-5">
            <div className="relative">
              <img src={player4} alt="" />
              <div className="absolute top-[91.5%] left-[33%]">
                <h1 className="text-white font-bold lg:text-lg md:text-[8px] text-[24px] hover:text-[#45F882]">
                  Max Alexis
                </h1>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="px-5 rounded-xl py-5">
            <div className="relative">
              <img src={player5} alt="" />
              <div className="absolute top-[91.5%] left-[33%]">
                <h1 className="text-white font-bold lg:text-lg md:text-[8px] text-[24px] hover:text-[#45F882]">
                  Willium Lili
                </h1>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="px-5 rounded-xl py-5">
            <div className="relative">
              <img src={player1} alt="" />
              <div className="absolute top-[91.5%] left-[33%]">
                <h1 className="text-white font-bold lg:text-lg md:text-[8px] text-[24px] hover:text-[#45F882]">
                  Mac Marsh
                </h1>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="px-5 rounded-xl py-5">
            <div className="relative">
              <img src={player2} alt="" />
              <div className="absolute top-[90.5%] left-[30%]">
                <h1 className="text-white font-bold lg:text-lg md:text-[8px] text-[24px] hover:text-[#45F882]">
                  Robin Cloth
                </h1>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="px-5 rounded-xl py-5">
            <div className="relative">
              <img src={player3} alt="" />
              <div className="absolute top-[91.5%] left-[33%]">
                <h1 className="text-white font-bold lg:text-lg md:text-[8px] text-[24px] hover:text-[#45F882]">
                  Eva Raina
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-5 rounded-xl py-5">
            <div className="relative">
              <img src={player4} alt="" />
              <div className="absolute top-[91.5%] left-[33%]">
                <h1 className="text-white font-bold lg:text-lg md:text-[8px] text-[24px] hover:text-[#45F882]">
                  Max Alexis
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-5 rounded-xl py-5">
            <div className="relative">
              <img src={player5} alt="" />
              <div className="absolute lg:top-[91.5%] lg:left-[33%] md:top-[92%] md:left-[32%] top-[92%] left-[32%]">
                <h1 className="text-white font-bold lg:text-lg md:text-[8px] text-[24px] hover:text-[#45F882]">
                  Willium Lili
                </h1>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </playerall>
  );
}
