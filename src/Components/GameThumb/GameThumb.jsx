import React, { useEffect } from 'react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Pagination, Navigation]);

function GameThumb() {
  useEffect(() => {
    const sliderSelector = '.swiper-container';
    const options = {
      init: false,
      loop: true,
      speed: 800,
      slidesPerView: 2, // or 'auto'
      // spaceBetween: 10,
      centeredSlides: true,
      effect: 'coverflow', // 'cube', 'fade', 'coverflow',
      coverflowEffect: {
        rotate: 50, // Slide rotate in degrees
        stretch: 0, // Stretch space between slides (in px)
        depth: 100, // Depth offset in px (slides translate in Z axis)
        modifier: 1, // Effect multipler
        slideShadows: true, // Enables slides shadows
      },
      grabCursor: true,
      parallax: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1023: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
      // Events
      on: {
        imagesReady: function () {
          this.el.classList.remove('loading');
        },
      },
    };

    const mySwiper = new Swiper(sliderSelector, options);

    // Initialize slider
    mySwiper.init();

    // Cleanup function
    return () => {
      mySwiper.destroy(true, true);
    };
  }, []);

  return (
    <section className="swiper-container loading">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
      >
        <SwiperSlide
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85)',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85"
            className="entity-img"
          />
          <div className="content">
            <p
              className="title"
              data-swiper-parallax="-30%"
              data-swiper-parallax-scale=".7"
            >
              Shaun Matthews
            </p>
            <span className="caption" data-swiper-parallax="-20%">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </span>
          </div>
        </SwiperSlide>
        {/* Repeat similar structure for other slides */}
      </Swiper>

      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev swiper-button-white"></div>
      <div className="swiper-button-next swiper-button-white"></div>
    </section>
  );
}

export default GameThumb;
