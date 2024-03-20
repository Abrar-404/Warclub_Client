import { Swiper, SwiperSlide } from 'swiper/react';

import blogPic1 from '../../assets/blogPic1.png'
import blogPic2 from '../../assets/blogPic2.png'
import blogPic3 from '../../assets/blogPic3.png'
import blogPic4 from '../../assets/blogPic4.png'
import blogPic5 from '../../assets/blogPic5.png'

import 'swiper/css';
import 'swiper/css/pagination';

import '../Styles/latestgames.css';

import { Pagination, Autoplay } from 'swiper/modules';

export default function BlogSlider() {
  return (
    <latestgames>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
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
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <div className="">
          <SwiperSlide className="px-5 rounded-xl py-5">
            <div>
              <img src={blogPic1} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="px-5 rounded-xl py-5">
            <div>
              <img src={blogPic2} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="px-5 rounded-xl py-5">
            <div>
              <img src={blogPic3} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="px-5 rounded-xl py-5">
            <div>
              <img src={blogPic4} alt="" />
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
