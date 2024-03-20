import { Swiper, SwiperSlide } from 'swiper/react';

import blogPic1 from '../../assets/blogPic1.png';
import blogPic2 from '../../assets/blogPic2.png';
import blogPic3 from '../../assets/blogPic3.png';
import blogPic4 from '../../assets/blogPic4.png';
import blogPic5 from '../../assets/blogPic5.png';
import { FaRegUser } from 'react-icons/fa';
import { SlCalender } from 'react-icons/sl';
import { IoIosArrowRoundForward } from 'react-icons/io';

import '../Styles/blogtextbtn.css';
import '../Styles/blogsliderbtn2.css';

import 'swiper/css';
import 'swiper/css/pagination';

import '../Styles/latestgames.css';

import { Autoplay } from 'swiper/modules';

export default function BlogSlider() {
  return (
    <latestgames>
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{ el: '.swiper-pagination', clickable: true }}
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
              <img src={blogPic1} alt="" />

              <div>
                <div className="flex justify-center items-center gap-3">
                  <span className="text-green-600">
                    {' '}
                    <FaRegUser></FaRegUser>
                  </span>
                  <h1 className="text-gray-500 lg:text-xs text-[7px] hover:text-[#46f882] font-semibold">
                    By Warclub
                  </h1>{' '}
                  <span className="text-white">|</span>
                  <span className="text-green-600">
                    {' '}
                    <SlCalender></SlCalender>
                  </span>
                  <h1 className="text-gray-500 lg:text-xs text-[7px] hover:text-[#46f882]  font-semibold">
                    20 January, 2024
                  </h1>
                </div>

                <div className="mt-2 butu">
                  <h1 className="lg:text-xl hover:text-[#46f882] md:text-base text-sm text-left font-semibold text-white hover-underline-animation">
                    Must-Visit Gaming Events <br />{' '}
                    <span className="">Worldwide</span>
                  </h1>
                </div>

                {/* button */}

                <div className="flex justify-start mt-2">
                  <button class="bitttii">
                    <div className="justify-center flex items-center">
                      <span class="hover-underline-animation text-[#46f882]">
                        {' '}
                        Read More{' '}
                      </span>

                      <div className="svg">
                        <IoIosArrowRoundForward></IoIosArrowRoundForward>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="px-5 rounded-xl py-5">
            <div>
              <img src={blogPic2} alt="" />

              <div>
                <div className="flex justify-center items-center gap-3">
                  <span className="text-green-600">
                    {' '}
                    <FaRegUser></FaRegUser>
                  </span>
                  <h1 className="text-gray-500 lg:text-xs text-[7px] hover:text-[#46f882] font-semibold">
                    By Warclub
                  </h1>{' '}
                  <span className="text-white">|</span>
                  <span className="text-green-600">
                    {' '}
                    <SlCalender></SlCalender>
                  </span>
                  <h1 className="text-gray-500 lg:text-xs text-[7px] hover:text-[#46f882]  font-semibold">
                    20 January, 2024
                  </h1>
                </div>

                <div className="mt-2 butu">
                  <h1 className="lg:text-xl hover:text-[#46f882] md:text-base text-sm text-left font-semibold text-white hover-underline-animation">
                    Influential Figures in the <br />{' '}
                    <span className="">History of Gaming</span>
                  </h1>
                </div>

                {/* button */}

                <div className="flex justify-start mt-2">
                  <button class="bitttii">
                    <div className="justify-center flex items-center">
                      <span class="hover-underline-animation text-[#46f882]">
                        {' '}
                        Read More{' '}
                      </span>

                      <div className="svg">
                        <IoIosArrowRoundForward></IoIosArrowRoundForward>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="px-5 rounded-xl py-5">
            <div>
              <img src={blogPic3} alt="" />

              <div>
                <div className="flex justify-center items-center gap-3">
                  <span className="text-green-600">
                    {' '}
                    <FaRegUser></FaRegUser>
                  </span>
                  <h1 className="text-gray-500 lg:text-xs text-[7px] hover:text-[#46f882] font-semibold">
                    By Warclub
                  </h1>{' '}
                  <span className="text-white">|</span>
                  <span className="text-green-600">
                    {' '}
                    <SlCalender></SlCalender>
                  </span>
                  <h1 className="text-gray-500 lg:text-xs text-[7px] hover:text-[#46f882]  font-semibold">
                    20 January, 2024
                  </h1>
                </div>

                <div className="mt-2 butu">
                  <h1 className="lg:text-lg hover:text-[#46f882] md:text-base text-sm text-left font-semibold text-white hover-underline-animation">
                    Pro Strategies for Dominating <br />{' '}
                    <span className=""> in FPS Games</span>
                  </h1>
                </div>

                {/* button */}

                <div className="flex justify-start mt-2">
                  <button class="bitttii">
                    <div className="justify-center flex items-center">
                      <span class="hover-underline-animation text-[#46f882]">
                        {' '}
                        Read More{' '}
                      </span>

                      <div className="svg">
                        <IoIosArrowRoundForward></IoIosArrowRoundForward>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="px-5 rounded-xl py-5">
            <div>
              <img src={blogPic4} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="px-5 rounded-xl py-5">
            <div>
              <img src={blogPic5} alt="" />
            </div>
          </SwiperSlide>

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
        </div>
      </Swiper>
    </latestgames>
  );
}
