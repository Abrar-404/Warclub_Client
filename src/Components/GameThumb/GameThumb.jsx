import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import {
  FaPlay,
  FaTimes,
  FaFilm,
  FaGamepad,
  FaGoogle,
  FaExternalLinkAlt,
  FaShareAlt,
} from 'react-icons/fa';
import { ChevronLeft, ChevronRight, Search, Sparkles } from 'lucide-react';
import Swal from 'sweetalert2';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../Styles/GameThumb.css';

import img1 from '../../assets/sl1.webp';
import img2 from '../../assets/sl2.jpg';
import img3 from '../../assets/sl3.jpg';
import img4 from '../../assets/sl4.jpg';
import img5 from '../../assets/sl5.jpg';
import img6 from '../../assets/sl6.png';
import img7 from '../../assets/sl7.jfif';

import {
  Autoplay,
  EffectCoverflow,
  Pagination,
} from 'swiper/modules';

const cinematicReels = [
  {
    id: 1,
    title: 'Call of Duty: Mobile',
    subtitle: 'Wild West & Piccadilly Legends Reel',
    embedId: 'n4b8FRUDNZo',
    image: img1,
    genre: 'Tactical Mobile FPS',
    rating: '9.6 / 10',
    googleUrl: 'https://www.google.com/search?q=Call+of+Duty+Mobile+official+game',
  },
  {
    id: 2,
    title: 'Evil West',
    subtitle: 'Dark Fantasy Vampire Hunter Combat Reel',
    embedId: '2hP6IVcHRnQ',
    image: img2,
    genre: 'Dark Fantasy Action',
    rating: '9.2 / 10',
    googleUrl: 'https://www.google.com/search?q=Evil+West+official+game',
  },
  {
    id: 3,
    title: 'Cyberpunk 2077: Phantom Liberty',
    subtitle: 'Night City Mercenary & Combat Showcase',
    embedId: 'PbVKBoDuhZ0',
    image: img3,
    genre: 'Sci-Fi Action RPG',
    rating: '9.8 / 10',
    googleUrl: 'https://www.google.com/search?q=Cyberpunk+2077+Phantom+Liberty+official+game',
  },
  {
    id: 4,
    title: 'Ghost of Tsushima',
    subtitle: 'Way of the Ghost & Samurai Blade Reel',
    embedId: 'BWktKH0eW5I',
    image: img4,
    genre: 'Samurai Action-Adventure',
    rating: '9.9 / 10',
    googleUrl: 'https://www.google.com/search?q=Ghost+of+Tsushima+official+game',
  },
  {
    id: 5,
    title: 'Uncharted: Legacy of Thieves',
    subtitle: 'Nathan Drake & Chloe Frazer Treasure Reel',
    embedId: 'xeMA3O9pfiY',
    image: img5,
    genre: 'Cinematic Action-Adventure',
    rating: '9.7 / 10',
    googleUrl: 'https://www.google.com/search?q=Uncharted+Legacy+of+Thieves+Collection+official+game',
  },
  {
    id: 6,
    title: 'Sekiro: Shadows Die Twice',
    subtitle: 'One-Armed Wolf Shinobi Precision Reel',
    embedId: 'rXMX4YJ7Lks',
    image: img6,
    genre: 'Souls-like Action',
    rating: '9.9 / 10',
    googleUrl: 'https://www.google.com/search?q=Sekiro+Shadows+Die+Twice+official+game',
  },
  {
    id: 7,
    title: 'S.T.A.L.K.E.R. 2: Heart of Chornobyl',
    subtitle: 'Chornobyl Exclusion Zone Anomaly Showcase',
    embedId: '1dHmayETd4c',
    image: img7,
    genre: 'Survival Horror FPS',
    rating: '9.5 / 10',
    googleUrl: 'https://www.google.com/search?q=STALKER+2+Heart+of+Chornobyl+official+game',
  },
];

// Custom Navigation Controls powered directly by useSwiper hook
const SwiperControls = () => {
  const swiper = useSwiper();

  return (
    <>
      {/* Side Floating Arrows for Desktop / Wide screens */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          swiper.slidePrev();
        }}
        className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-[#080e18] hover:bg-[#45F882] text-[#45F882] hover:text-black border-2 border-[#45F882]/50 hover:border-[#45F882] items-center justify-center transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.8)] hover:shadow-[0_0_25px_rgba(69,248,130,0.6)] hover:scale-110 active:scale-95 cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          swiper.slideNext();
        }}
        className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-[#080e18] hover:bg-[#45F882] text-[#45F882] hover:text-black border-2 border-[#45F882]/50 hover:border-[#45F882] items-center justify-center transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.8)] hover:shadow-[0_0_25px_rgba(69,248,130,0.6)] hover:scale-110 active:scale-95 cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Bottom Center Controls & Pagination Bar */}
      <div className="flex items-center justify-center gap-4 mt-6 relative z-40">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            swiper.slidePrev();
          }}
          className="w-11 h-11 rounded-full bg-[#080e18] hover:bg-[#45F882] text-[#45F882] hover:text-black border-2 border-[#45F882]/50 hover:border-[#45F882] flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="swiper-pagination !relative !m-0 !w-auto"></div>

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            swiper.slideNext();
          }}
          className="w-11 h-11 rounded-full bg-[#080e18] hover:bg-[#45F882] text-[#45F882] hover:text-black border-2 border-[#45F882]/50 hover:border-[#45F882] flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </>
  );
};

function GameThumb() {
  const [activeVideo, setActiveVideo] = useState(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveVideo(null);
    };
    if (activeVideo) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeVideo]);

  const handleShareReel = (reel) => {
    navigator.clipboard?.writeText(window.location.href);
    Swal.fire({
      title: 'Trailer Link Copied!',
      text: `Link to ${reel.title} trailer copied to clipboard.`,
      icon: 'success',
      background: '#090f18',
      color: '#45F882',
      confirmButtonColor: '#45F882',
      timer: 1800,
      showConfirmButton: false,
    });
  };

  const openGoogle = (e, url) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const openTrailer = (e, reel) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveVideo(reel);
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 my-16">
      {/* Section Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#45F882]/10 border border-[#45F882]/30 mb-3">
          <FaFilm className="text-[#45F882] text-xs animate-pulse" />
          <span className="text-[11px] font-orbitron font-bold text-[#45F882] tracking-widest uppercase">
            IMMERSIVE CINEMATIC ARCHIVES
          </span>
        </div>
        <h2 className="text-2xl md:text-4xl font-orbitron font-extrabold text-white uppercase tracking-wider">
          WATCH ELITE <span className="text-[#45F882]">GAMEPLAY REELS</span>
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm font-rajdhani max-w-xl mx-auto mt-2">
          Click any combat reel to launch full-screen 4K championship gameplay trailers or explore official titles directly on Google.
        </p>
      </div>

      {/* Swiper Coverflow */}
      <div className="container mx-auto relative">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          rewind={true}
          preventClicks={false}
          preventClicksPropagation={false}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.2,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          className="swiper_container"
        >
          {cinematicReels.map((reel) => (
            <SwiperSlide key={reel.id} className="w-[310px] sm:w-[460px] md:w-[600px]">
              <div className="group relative rounded-2xl overflow-hidden border-2 border-gray-800 hover:border-[#45F882] shadow-2xl transition-all duration-300 bg-[#060a10]">
                {/* Background Game Poster */}
                <img
                  className="w-full h-[250px] sm:h-[320px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  src={reel.image}
                  alt={reel.title}
                />

                {/* Dark Gradient Overlay - pointer-events-none ensures it never blocks clicks */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060a10] via-black/40 to-transparent opacity-85 group-hover:opacity-70 transition-opacity pointer-events-none" />

                {/* Top Badges & Google Search Button */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-20 pointer-events-auto">
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-black/80 border border-[#45F882]/40 text-[#45F882] font-semibold backdrop-blur-md">
                    {reel.genre}
                  </span>

                  {/* Interactive Google Link Button */}
                  <a
                    href={reel.googleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => openGoogle(e, reel.googleUrl)}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/85 hover:bg-[#45F882] text-white hover:text-black border border-gray-700 hover:border-[#45F882] text-[10px] font-mono font-bold transition-all shadow-md backdrop-blur-md cursor-pointer active:scale-95 z-30"
                    title={`Search ${reel.title} on Google`}
                  >
                    <FaGoogle className="text-[11px]" />
                    <span>GOOGLE INTEL</span>
                    <FaExternalLinkAlt className="text-[9px]" />
                  </a>
                </div>

                {/* Centered Play Button Container - pointer-events-none so surrounding area passes through */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                  <button
                    type="button"
                    onClick={(e) => openTrailer(e, reel)}
                    className="pointer-events-auto relative group/btn flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#45F882] text-black shadow-[0_0_35px_rgba(69,248,130,0.6)] hover:bg-[#3be074] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
                    aria-label={`Play trailer for ${reel.title}`}
                  >
                    <span className="absolute -inset-2 rounded-full border-2 border-[#45F882] animate-ping opacity-30 pointer-events-none" />
                    <FaPlay className="text-black text-xl sm:text-2xl ml-1" />
                  </button>
                </div>

                {/* Bottom Caption & Action Buttons */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-black via-black/85 to-transparent z-20 pointer-events-auto">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-mono text-gray-400">
                      RATING: <strong className="text-[#45F882]">{reel.rating}</strong>
                    </span>
                    <span className="text-[10px] font-mono text-gray-400 hidden sm:inline">
                      4K UHD 60FPS
                    </span>
                  </div>

                  <h3
                    onClick={(e) => openTrailer(e, reel)}
                    className="font-orbitron font-bold text-base sm:text-xl text-white truncate hover:text-[#45F882] transition-colors cursor-pointer"
                  >
                    {reel.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-rajdhani truncate mt-0.5">
                    {reel.subtitle}
                  </p>

                  {/* Dual Action Buttons Strip */}
                  <div className="flex items-center gap-2.5 mt-3 pt-2.5 border-t border-gray-800/80">
                    <button
                      type="button"
                      onClick={(e) => openTrailer(e, reel)}
                      className="flex-1 py-2 px-3 rounded-xl bg-[#45F882] hover:bg-[#39e672] text-black font-orbitron font-extrabold text-[10px] sm:text-xs flex items-center justify-center gap-1.5 shadow-[0_0_12px_rgba(69,248,130,0.3)] transition cursor-pointer active:scale-95"
                    >
                      <FaPlay size={10} />
                      <span>WATCH TRAILER</span>
                    </button>

                    <a
                      href={reel.googleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => openGoogle(e, reel.googleUrl)}
                      className="flex-1 py-2 px-3 rounded-xl bg-[#0e1724] hover:bg-[#45F882] text-gray-200 hover:text-black border border-gray-700 hover:border-[#45F882] font-orbitron font-bold text-[10px] sm:text-xs flex items-center justify-center gap-1.5 transition cursor-pointer active:scale-95 shadow-md"
                    >
                      <FaGoogle size={11} className="text-[#45F882] group-hover:text-black" />
                      <span>FIND ON GOOGLE</span>
                      <FaExternalLinkAlt size={9} />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Interactive Custom Swiper Navigation Controls */}
          <SwiperControls />
        </Swiper>
      </div>

      {/* High-Definition Interactive Video Trailer Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#080d16] border-2 border-[#45F882]/60 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(69,248,130,0.3)] animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#0d1522] border-b border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#45F882] animate-pulse flex-shrink-0" />
                <div>
                  <h4 className="font-orbitron font-bold text-white text-sm sm:text-base">
                    {activeVideo.title}
                  </h4>
                  <span className="text-xs text-gray-400 font-rajdhani hidden sm:inline">
                    {activeVideo.subtitle}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Search on Google Link in Modal */}
                <a
                  href={activeVideo.googleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => openGoogle(e, activeVideo.googleUrl)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#142234] hover:bg-[#45F882] text-gray-200 hover:text-black border border-gray-700 hover:border-[#45F882] text-xs font-mono font-bold transition cursor-pointer"
                  title="Search on Google"
                >
                  <FaGoogle size={12} />
                  <span className="hidden sm:inline">GOOGLE GAME INTEL</span>
                  <FaExternalLinkAlt size={10} />
                </a>

                {/* Direct YouTube watch link */}
                <a
                  href={`https://www.youtube.com/watch?v=${activeVideo.embedId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/40 text-xs font-mono font-bold transition cursor-pointer"
                  title="Watch on YouTube"
                >
                  <FaFilm size={12} />
                  <span className="hidden sm:inline">YOUTUBE</span>
                  <FaExternalLinkAlt size={10} />
                </a>

                <button
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-800/60 hover:bg-red-500/20 text-gray-400 hover:text-red-400 border border-gray-700 hover:border-red-500/40 transition cursor-pointer"
                  aria-label="Close Trailer"
                >
                  <FaTimes className="text-base" />
                </button>
              </div>
            </div>

            {/* 16:9 Video Container */}
            <div className="relative w-full pb-[56.25%] bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo.embedId}?autoplay=1&rel=0`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            {/* Modal Footer with Actions */}
            <div className="px-4 sm:px-6 py-3.5 bg-[#0a101b] border-t border-gray-800 flex flex-wrap items-center justify-between gap-3 text-xs font-rajdhani text-gray-400">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <FaGamepad className="text-[#45F882]" />
                  <span>GENRE: <strong className="text-white">{activeVideo.genre}</strong></span>
                </div>
                <span>•</span>
                <span>RATING: <strong className="text-[#45F882]">{activeVideo.rating}</strong></span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleShareReel(activeVideo)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-[#45F882] transition cursor-pointer font-mono text-xs"
                >
                  <FaShareAlt size={11} />
                  <span>SHARE</span>
                </button>

                <a
                  href={activeVideo.googleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => openGoogle(e, activeVideo.googleUrl)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#45F882] text-black font-orbitron font-extrabold text-xs hover:brightness-110 transition cursor-pointer shadow-[0_0_12px_rgba(69,248,130,0.3)]"
                >
                  <FaGoogle size={11} />
                  <span>OPEN ON GOOGLE ↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default GameThumb;
