import { Swiper, SwiperSlide } from 'swiper/react';
import latest1 from '../../assets/latest1 (1).png'
import latest2 from '../../assets/latest2 (2).png'
import 'swiper/css';
import 'swiper/css/pagination';

import '../Styles/latestgames.css';

import { Pagination } from 'swiper/modules';

export default function LatestGames() {
  return (
    <latestGamesComp>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <img
            className="rounded-3xl px-5 py-5 border-2 border-red-600"
            src={latest1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-3xl px-5 py-5 border-2 border-red-600"
            src={latest2}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </latestGamesComp>
  );
}
