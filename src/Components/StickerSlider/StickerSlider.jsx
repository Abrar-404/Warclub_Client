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
          <SwiperSlide className="border-2 px-5 rounded-xl py-5 border-[#F03AF9]">
            <div>
              <div className="hover-zoom rounded-xl relative">
                <img
                  className="lg:h-[250px] lg:w-[250px] w-[120px] h-[75px]"
                  src={latest1}
                  alt=""
                />
              </div>

              <div className="absolute top-[246px] left-[120px] mx-auto">
                <img className="w-[60px] h-[50px]" src={liitle1} alt="" />
              </div>

              <div className="mt-10">
                <h1 className="text-white hover:text-[#45F882] lg:text-2xl text-xs font-semibold">
                  Mobile Legends
                </h1>
                <h1 className="text-white lg:text-base font-semibold text-xs">
                  Entry Fee : <span className="text-[#45F882]">Free</span>
                </h1>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="border-2 px-5 rounded-xl py-5 border-[#0FA48D]">
            <div>
              <div className="hover-zoom rounded-xl relative">
                <img
                  className="lg:h-[250px] lg:w-[250px] w-[120px] h-[75px]"
                  src={latest2}
                  alt=""
                />
              </div>

              <div className="absolute top-[246px] left-[120px] mx-auto">
                <img className="w-[60px] h-[50px]" src={liitle1} alt="" />
              </div>

              <div className="mt-10">
                <h1 className="text-white hover:text-[#45F882] lg:text-2xl text-xs font-semibold">
                  COD Black Ops
                </h1>
                <h1 className="text-white lg:text-base font-semibold text-xs">
                  Entry Fee : <span className="text-[#45F882]">$20.00</span>
                </h1>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="border-2 px-5 rounded-xl py-5 border-[#F03AF9]">
            <div>
              <div className="hover-zoom rounded-xl relative">
                <img
                  className="lg:h-[250px] lg:w-[250px] w-[120px] h-[75px]"
                  src={latest3}
                  alt=""
                />
              </div>

              <div className="absolute top-[246px] left-[120px] mx-auto">
                <img className="w-[60px] h-[50px]" src={liitle3} alt="" />
              </div>

              <div className="mt-10">
                <h1 className="text-white hover:text-[#45F882] lg:text-2xl text-xs font-semibold">
                  Ghostwire Tokyo
                </h1>
                <h1 className="text-white lg:text-base font-semibold text-xs">
                  Entry Fee : <span className="text-[#45F882]">$10.00</span>
                </h1>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="border-2 px-5 rounded-xl py-5 border-[#E58829]">
            <div>
              <div className="hover-zoom rounded-xl relative">
                <img
                  className="lg:h-[250px] lg:w-[250px] w-[120px] h-[75px]"
                  src={latest4}
                  alt=""
                />
              </div>

              <div className="absolute top-[246px] left-[120px] mx-auto">
                <img className="w-[60px] h-[50px]" src={liitle2} alt="" />
              </div>

              <div className="mt-10">
                <h1 className="text-white hover:text-[#45F882] lg:text-2xl text-xs font-semibold">
                  The Hunter Killer
                </h1>
                <h1 className="text-white lg:text-base font-semibold text-xs">
                  Entry Fee : <span className="text-[#45F882]">$10.00</span>
                </h1>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="border-2 px-5 rounded-xl py-5 border-[#F03AF9]">
            <div>
              <div className="hover-zoom rounded-xl relative">
                <img
                  className="lg:h-[250px] lg:w-[250px] w-[120px] h-[75px]"
                  src={latest1}
                  alt=""
                />
              </div>

              <div className="absolute top-[246px] left-[120px] mx-auto">
                <img className="w-[60px] h-[50px]" src={liitle1} alt="" />
              </div>

              <div className="mt-10">
                <h1 className="text-white hover:text-[#45F882] lg:text-2xl text-xs font-semibold">
                  Mobile Legends
                </h1>
                <h1 className="text-white lg:text-base font-semibold text-xs">
                  Entry Fee : <span className="text-[#45F882]">Free</span>
                </h1>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="border-2 px-5 rounded-xl py-5 border-[#0FA48D]">
            <div>
              <div className="hover-zoom rounded-xl relative">
                <img
                  className="lg:h-[250px] lg:w-[250px] w-[120px] h-[75px]"
                  src={latest2}
                  alt=""
                />
              </div>

              <div className="absolute top-[246px] left-[120px] mx-auto">
                <img className="w-[60px] h-[50px]" src={liitle3} alt="" />
              </div>

              <div className="mt-10">
                <h1 className="text-white hover:text-[#45F882] lg:text-2xl text-xs font-semibold">
                  COD Black Ops
                </h1>
                <h1 className="text-white lg:text-base font-semibold text-xs">
                  Entry Fee : <span className="text-[#45F882]">$20.00</span>
                </h1>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="border-2 px-5 rounded-xl py-5 border-[#F03AF9]">
            <div>
              <div className="hover-zoom rounded-xl relative">
                <img
                  className="lg:h-[250px] lg:w-[250px] w-[120px] h-[75px]"
                  src={latest3}
                  alt=""
                />
              </div>

              <div className="absolute top-[246px] left-[120px] mx-auto">
                <img className="w-[60px] h-[50px]" src={liitle2} alt="" />
              </div>

              <div className="mt-10">
                <h1 className="text-white hover:text-[#45F882] lg:text-2xl text-xs font-semibold">
                  Ghostwire Tokyo
                </h1>
                <h1 className="text-white lg:text-base font-semibold text-xs">
                  Entry Fee : <span className="text-[#45F882]">$10.00</span>
                </h1>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="border-2 px-5 rounded-xl py-5 border-[#E58829]">
            <div>
              <div className="hover-zoom rounded-xl relative">
                <img
                  className="lg:h-[250px] lg:w-[250px] w-[120px] h-[75px]"
                  src={latest4}
                  alt=""
                />
              </div>

              <div className="absolute top-[246px] left-[120px] mx-auto">
                <img className="w-[60px] h-[50px]" src={liitle1} alt="" />
              </div>

              <div className="mt-10">
                <h1 className="text-white hover:text-[#45F882] lg:text-2xl text-xs font-semibold">
                  The Hunter Killer
                </h1>
                <h1 className="text-white lg:text-base font-semibold text-xs">
                  Entry Fee : <span className="text-[#45F882]">$10.00</span>
                </h1>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </latestgames>
  );
}
