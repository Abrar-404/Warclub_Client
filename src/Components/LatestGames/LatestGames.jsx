import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import { FaGamepad, FaTrophy, FaArrowRight, FaStar, FaGoogle, FaExternalLinkAlt } from 'react-icons/fa';

import latest1 from '../../assets/latest1 (1).png';
import latest2 from '../../assets/latest2 (2).png';
import latest3 from '../../assets/latest3 (3).png';
import latest4 from '../../assets/latest4 (4).png';

import liitle1 from '../../assets/Littlelogo1.png';
import liitle2 from '../../assets/Littlelogo2.png';
import liitle3 from '../../assets/Littlelogo3.png';

import 'swiper/css';
import 'swiper/css/pagination';
import '../Styles/latestgames.css';

import { Autoplay } from 'swiper/modules';

const gamesList = [
  {
    id: 1,
    name: 'League of Legends',
    genre: '5v5 MOBA',
    fee: 'FREE',
    bounty: '$15,000',
    platform: 'PC / MAC',
    image: latest1,
    badge: liitle1,
    borderColor: 'border-[#F03AF9]/60 hover:border-[#F03AF9]',
    glowColor: 'hover:shadow-[0_0_25px_rgba(240,58,249,0.3)]',
  },
  {
    id: 2,
    name: 'Call of Duty: Modern Warfare II',
    genre: 'Tactical FPS / Warzone',
    fee: '$20.00',
    bounty: '$50,000',
    platform: 'PC / CONSOLE',
    image: latest2,
    badge: liitle2,
    borderColor: 'border-[#45F882]/60 hover:border-[#45F882]',
    glowColor: 'hover:shadow-[0_0_25px_rgba(69,248,130,0.3)]',
  },
  {
    id: 3,
    name: 'Stray',
    genre: 'Cyberpunk Adventure',
    fee: '$10.00',
    bounty: '$25,000',
    platform: 'PC / PS5',
    image: latest3,
    badge: liitle3,
    borderColor: 'border-[#0FA48D]/60 hover:border-[#0FA48D]',
    glowColor: 'hover:shadow-[0_0_25px_rgba(15,164,141,0.3)]',
  },
  {
    id: 4,
    name: 'The Hunter: Shadow Ops',
    genre: 'Survival Extraction',
    fee: '$10.00',
    bounty: '$30,000',
    platform: 'CROSS-PLAY',
    image: latest4,
    badge: liitle1,
    borderColor: 'border-[#E58829]/60 hover:border-[#E58829]',
    glowColor: 'hover:shadow-[0_0_25px_rgba(229,136,41,0.3)]',
  },
];

export default function LatestGames() {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper py-4"
      >
        {gamesList.concat(gamesList).map((game, idx) => (
          <SwiperSlide key={`${game.id}-${idx}`}>
            <div
              onClick={() => navigate('/allGames')}
              className={`relative rounded-2xl bg-[#090e17] border-2 ${game.borderColor} ${game.glowColor} overflow-hidden p-5 transition-all duration-300 transform group-hover:-translate-y-2 flex flex-col justify-between h-full shadow-xl cursor-pointer group`}
            >
              {/* Artwork */}
              <div className="relative w-full h-56 rounded-xl overflow-hidden bg-slate-900 flex items-center justify-center">
                <img
                  className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
                  src={game.image}
                  alt={game.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Platform Pill */}
                <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-black/75 border border-gray-700 text-[10px] font-mono text-gray-300 uppercase tracking-wider backdrop-blur-sm">
                  {game.platform}
                </span>

                {/* Google Search Link in Top Corner */}
                <a
                  href={`https://www.google.com/search?q=${encodeURIComponent(game.name + ' official game')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-2.5 left-2.5 p-1.5 rounded-full bg-black/80 hover:bg-[#45F882] text-gray-300 hover:text-black border border-gray-700 hover:border-[#45F882] text-xs transition backdrop-blur-sm cursor-pointer z-10"
                  title={`Find ${game.name} on Google`}
                >
                  <FaGoogle size={11} />
                </a>
              </div>

              {/* Team / Clan Emblem floating badge */}
              <div className="relative -mt-6 z-10 flex justify-center">
                <div className="w-12 h-12 rounded-full p-1 bg-[#090e17] border-2 border-[#45F882] shadow-lg flex items-center justify-center">
                  <img src={game.badge} alt="" className="w-8 h-8 object-contain" />
                </div>
              </div>

              {/* Details */}
              <div className="mt-3 text-center flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#45F882] uppercase tracking-wider block mb-1">
                    {game.genre}
                  </span>
                  <h3 className="text-lg font-orbitron font-bold text-white group-hover:text-[#45F882] transition-colors truncate">
                    {game.name}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-800 flex items-center justify-between text-xs font-rajdhani">
                  <div>
                    <span className="text-gray-500 block text-[10px]">ENTRY FEE</span>
                    <strong className="text-white font-orbitron font-bold text-sm">
                      {game.fee === 'FREE' ? (
                        <span className="text-[#45F882]">FREE</span>
                      ) : (
                        game.fee
                      )}
                    </strong>
                  </div>

                  <div className="text-right">
                    <span className="text-gray-500 block text-[10px]">PRIZE POOL</span>
                    <strong className="text-yellow-400 font-orbitron font-bold text-sm">
                      {game.bounty}
                    </strong>
                  </div>
                </div>

                {/* Interactive Dual Action Buttons */}
                <div className="mt-4 flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate('/allGames');
                    }}
                    className="flex-1 py-2 bg-[#121A26] hover:bg-[#45F882] text-gray-300 hover:text-black font-orbitron font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                  >
                    <span>ENLIST IN VAULT</span>
                    <FaArrowRight className="text-[10px]" />
                  </button>

                  <a
                    href={`https://www.google.com/search?q=${encodeURIComponent(game.name + ' official game')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="py-2 px-3 rounded-xl bg-[#0e1724] hover:bg-[#45F882] text-gray-400 hover:text-black border border-gray-800 hover:border-[#45F882] transition shadow-md flex items-center justify-center cursor-pointer gap-1 text-[11px] font-mono font-bold"
                    title={`Search ${game.name} on Google`}
                  >
                    <FaGoogle size={11} />
                    <FaExternalLinkAlt size={9} />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
