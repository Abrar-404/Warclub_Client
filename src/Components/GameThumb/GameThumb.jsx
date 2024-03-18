import React, { useEffect } from 'react';
import Swiper from 'swiper';

const GameThumb = () => {
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
        modifier: 1, // Effect multiplier
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
    mySwiper.init();

    // Cleanup function
    return () => {
      mySwiper.destroy(true, true);
    };
  }, []);

  return (
    <gamethumbcomp>
      <section className="swiper-container loading">
        <div className="swiper-wrapper">
          {/* First slide */}
          <div
            className="swiper-slide"
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
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </span>
            </div>
          </div>
          {/* Second slide */}
          <div
            className="swiper-slide"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1500643752441-4dc90cda350a?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85)',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1500643752441-4dc90cda350a?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85"
              className="entity-img"
            />
            <div className="content">
              <p
                className="title"
                data-swiper-parallax="-30%"
                data-swiper-parallax-scale=".7"
              >
                Alexis Berry
              </p>
              <span className="caption" data-swiper-parallax="-20%">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </span>
            </div>
          </div>
          {/* More slides */}
        </div>

        {/* If we need pagination */}
        <div className="swiper-pagination"></div>
        {/* If we need navigation buttons */}
        <div className="swiper-button-prev swiper-button-white"></div>
        <div className="swiper-button-next swiper-button-white"></div>
      </section>
    </gamethumbcomp>
  );
};

export default GameThumb;
