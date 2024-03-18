import React from 'react';
import './GameThumb.css'

const GameThumb = () => {
  return (
    <div>
      <games>
        <div id="app">
          {/* Carousel slider */}
          <div className="swiper swiper-carousel swiper-initialized swiper-horizontal swiper-watch-progress">
            <div
              className="swiper-wrapper"
              style={{
                cursor: 'grab',
                transitionDuration: '300ms',
                transform: 'translate3d(-5380px, 0px, 0px)',
              }}
            >
              <div
                className="swiper-slide"
                data-swiper-slide-index={6}
                style={{
                  transform: 'translateX(2200%) scale(-1.2)',
                  zIndex: 3,
                  opacity: 0,
                  transitionDuration: '300ms',
                }}
              >
                <div
                  className="swiper-carousel-animate-opacity"
                  style={{ opacity: '-2.63', transitionDuration: '300ms' }}
                >
                  <img src="./images/eternals.jpg" alt="" />
                  <div className="slide-content">
                    <h2>Eternals </h2>
                    <p>
                      In 5000 BC, ten superpowered Eternals—Ajak, Sersi, Ikaris,
                      Kingo, Sprite, Phastos, Makkari, Druig, Gilgamesh, and
                      Thena—are sent by the Celestial Arishem to Earth on their
                      starship, the Domo, to exterminate the invasive Deviants.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                data-swiper-slide-index={7}
                style={{
                  transform: 'translateX(1850%) scale(-1)',
                  zIndex: 4,
                  opacity: 0,
                  transitionDuration: '300ms',
                }}
              >
                {/* elements with  "swiper-carousel-animate-opacity" class will have animated opacity */}
                <div
                  className="swiper-carousel-animate-opacity"
                  style={{ opacity: '-2.3', transitionDuration: '300ms' }}
                >
                  <img src="./images/guardians-of-the-galaxy.jpg" alt="" />
                  <div className="slide-content">
                    <h2>Guardians Of The Galaxy</h2>
                    <p>
                      A group of intergalactic criminals must pull together to
                      stop a fanatical warrior with plans to purge the universe.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                data-swiper-slide-index={8}
                style={{
                  transform: 'translateX(1530%) scale(-0.8)',
                  zIndex: 5,
                  opacity: 0,
                  transitionDuration: '300ms',
                }}
              >
                <div
                  className="swiper-carousel-animate-opacity"
                  style={{ opacity: '-1.97', transitionDuration: '300ms' }}
                >
                  <img src="./images/justice-league.jpg" alt="" />
                  <div className="slide-content">
                    <h2>Justice League</h2>
                    <p>
                      Determined to ensure Superman's ultimate sacrifice was not
                      in vain, Bruce Wayne aligns forces with Diana Prince with
                      plans to recruit a team of metahumans to protect the world
                      from an approaching threat of catastrophic proportions.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                data-swiper-slide-index={9}
                style={{
                  transform: 'translateX(1240%) scale(-0.6)',
                  zIndex: 6,
                  opacity: 0,
                  transitionDuration: '300ms',
                }}
              >
                <div
                  className="swiper-carousel-animate-opacity"
                  style={{ opacity: '-1.64', transitionDuration: '300ms' }}
                >
                  <img src="./images/spider-man.jpg" alt="" />
                  <div className="slide-content">
                    <h2>Spider-Man: Far from Home</h2>
                    <p>
                      Following the events of Avengers: Endgame (2019),
                      Spider-Man must step up to take on new threats in a world
                      that has changed forever.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                data-swiper-slide-index={10}
                style={{
                  transform: 'translateX(980%) scale(-0.4)',
                  zIndex: 7,
                  opacity: 0,
                  transitionDuration: '300ms',
                }}
              >
                <div
                  className="swiper-carousel-animate-opacity"
                  style={{ opacity: '-1.31', transitionDuration: '300ms' }}
                >
                  <img src="./images/suicide-squad.jpg" alt="" />
                  <div className="slide-content">
                    <h2>The Suicide Squad</h2>
                    <p>
                      Supervillains Harley Quinn, Bloodsport, Peacemaker and a
                      collection of nutty cons at Belle Reve prison join the
                      super-secret, super-shady Task Force X as they are dropped
                      off at the remote, enemy-infused island of Corto Maltese.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                data-swiper-slide-index={11}
                style={{
                  transform: 'translateX(750%) scale(-0.2)',
                  zIndex: 8,
                  opacity: 0,
                  transitionDuration: '300ms',
                }}
              >
                <div
                  className="swiper-carousel-animate-opacity"
                  style={{ opacity: '-0.98', transitionDuration: '300ms' }}
                >
                  <img src="./images/thor-ragnarok.jpg" alt="" />
                  <div className="slide-content">
                    <h2>Thor: Ragnarok</h2>
                    <p>
                      Imprisoned on the planet Sakaar, Thor must race against
                      time to return to Asgard and stop Ragnarök, the
                      destruction of his world, at the hands of the powerful and
                      ruthless villain Hela.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                data-swiper-slide-index={12}
                style={{
                  transform: 'translateX(550%) scale(0)',
                  zIndex: 9,
                  opacity: 0,
                  transitionDuration: '300ms',
                }}
              >
                <div
                  className="swiper-carousel-animate-opacity"
                  style={{ opacity: '-0.65', transitionDuration: '300ms' }}
                >
                  <img src="./images/dr-strange.jpg" alt="" />
                  <div className="slide-content">
                    <h2>Doctor Strange</h2>
                    <p>
                      America Chavez and a version of Stephen Strange are chased
                      by a demon in the space between universes while searching
                      for the Book of Vishanti
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                data-swiper-slide-index={13}
                style={{
                  transform: 'translateX(380%) scale(0.2)',
                  zIndex: 10,
                  opacity: 0,
                  transitionDuration: '300ms',
                }}
              >
                <div
                  className="swiper-carousel-animate-opacity"
                  style={{ opacity: '-0.32', transitionDuration: '300ms' }}
                >
                  <img src="./images/eternals.jpg" alt="" />
                  <div className="slide-content">
                    <h2>Eternals </h2>
                    <p>
                      In 5000 BC, ten superpowered Eternals—Ajak, Sersi, Ikaris,
                      Kingo, Sprite, Phastos, Makkari, Druig, Gilgamesh, and
                      Thena—are sent by the Celestial Arishem to Earth on their
                      starship, the Domo, to exterminate the invasive Deviants.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                data-swiper-slide-index={0}
                style={{
                  transform: 'translateX(240%) scale(0.4)',
                  zIndex: 11,
                  opacity: 1,
                  transitionDuration: '300ms',
                }}
              >
                {/* elements with  "swiper-carousel-animate-opacity" class will have animated opacity */}
                <div
                  className="swiper-carousel-animate-opacity"
                  style={{ opacity: '0.01', transitionDuration: '300ms' }}
                >
                  <img src="./images/guardians-of-the-galaxy.jpg" alt="" />
                  <div className="slide-content">
                    <h2>Guardians Of The Galaxy</h2>
                    <p>
                      A group of intergalactic criminals must pull together to
                      stop a fanatical warrior with plans to purge the universe.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                data-swiper-slide-index={1}
                style={{
                  transform: 'translateX(130%) scale(0.6)',
                  zIndex: 12,
                  opacity: 1,
                  transitionDuration: '300ms',
                }}
              >
                <div
                  className="swiper-carousel-animate-opacity"
                  style={{ opacity: '0.34', transitionDuration: '300ms' }}
                >
                  <img src="./images/justice-league.jpg" alt="" />
                  <div className="slide-content">
                    <h2>Justice League</h2>
                    <p>
                      Determined to ensure Superman's ultimate sacrifice was not
                      in vain, Bruce Wayne aligns forces with Diana Prince with
                      plans to recruit a team of metahumans to protect the world
                      from an approaching threat of catastrophic proportions.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-visible swiper-slide-prev"
                data-swiper-slide-index={2}
                style={{
                  transform: 'translateX(50%) scale(0.8)',
                  zIndex: 13,
                  opacity: 1,
                  transitionDuration: '300ms',
                }}
              >
                <div
                  className="swiper-carousel-animate-opacity"
                  style={{ opacity: '0.67', transitionDuration: '300ms' }}
                >
                  <img src="./images/spider-man.jpg" alt="" />
                  <div className="slide-content">
                    <h2>Spider-Man: Far from Home</h2>
                    <p>
                      Following the events of Avengers: Endgame (2019),
                      Spider-Man must step up to take on new threats in a world
                      that has changed forever.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-visible swiper-slide-fully-visible swiper-slide-active"
                data-swiper-slide-index={3}
                style={{
                  transform: 'translateX(0%) scale(1)',
                  zIndex: 14,
                  opacity: 1,
                  transitionDuration: '300ms',
                }}
              >
                <div
                  className="swiper-carousel-animate-opacity"
                  style={{ opacity: 1, transitionDuration: '300ms' }}
                >
                  <img src="./images/suicide-squad.jpg" alt="" />
                  <div className="slide-content">
                    <h2>The Suicide Squad</h2>
                    <p>
                      Supervillains Harley Quinn, Bloodsport, Peacemaker and a
                      collection of nutty cons at Belle Reve prison join the
                      super-secret, super-shady Task Force X as they are dropped
                      off at the remote, enemy-infused island of Corto Maltese.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-visible swiper-slide-next"
                data-swiper-slide-index={4}
                style={{
                  transform: 'translateX(-50%) scale(0.8)',
                  zIndex: 13,
                  opacity: 1,
                  transitionDuration: '300ms',
                }}
              >
                <div
                  className="swiper-carousel-animate-opacity"
                  style={{ opacity: '0.67', transitionDuration: '300ms' }}
                >
                  <img src="./images/thor-ragnarok.jpg" alt="" />
                  <div className="slide-content">
                    <h2>Thor: Ragnarok</h2>
                    <p>
                      Imprisoned on the planet Sakaar, Thor must race against
                      time to return to Asgard and stop Ragnarök, the
                      destruction of his world, at the hands of the powerful and
                      ruthless villain Hela.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                data-swiper-slide-index={5}
                style={{
                  transform: 'translateX(-130%) scale(0.6)',
                  zIndex: 12,
                  opacity: 1,
                  transitionDuration: '300ms',
                }}
              >
                <div
                  className="swiper-carousel-animate-opacity"
                  style={{ opacity: '0.34', transitionDuration: '300ms' }}
                >
                  <img src="./images/dr-strange.jpg" alt="" />
                  <div className="slide-content">
                    <h2>Doctor Strange</h2>
                    <p>
                      America Chavez and a version of Stephen Strange are chased
                      by a demon in the space between universes while searching
                      for the Book of Vishanti
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
          <div className="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal">
            <span className="swiper-pagination-bullet" />
            <span className="swiper-pagination-bullet" />
            <span className="swiper-pagination-bullet" />
            <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
            <span className="swiper-pagination-bullet" />
            <span className="swiper-pagination-bullet" />
            <span className="swiper-pagination-bullet" />
            <span className="swiper-pagination-bullet" />
            <span className="swiper-pagination-bullet" />
            <span className="swiper-pagination-bullet" />
            <span className="swiper-pagination-bullet" />
            <span className="swiper-pagination-bullet" />
            <span className="swiper-pagination-bullet" />
            <span className="swiper-pagination-bullet" />
          </div>
        </div>
        {/* Cloudflare Pages Analytics */}
        {/* Cloudflare Pages Analytics */}
        <div
          id="monica-content-root"
          className="monica-widget"
          data-darkreader-mode="dynamic"
          data-darkreader-scheme="dark"
        >
          <meta name="darkreader" content="d0f4661d869144efa6a9db1b38470c54" />
        </div>
      </games>
    </div>
  );
};

export default GameThumb;