import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { FaTrophy, FaCrosshairs, FaShieldAlt, FaStar, FaChevronRight } from 'react-icons/fa';

import player1 from '../../assets/player1.png';
import player2 from '../../assets/player2.png';
import player3 from '../../assets/player3.png';
import player4 from '../../assets/player4.png';
import player5 from '../../assets/player5.png';

import 'swiper/css';
import 'swiper/css/pagination';
import '../Styles/latestgames.css';

import { Autoplay } from 'swiper/modules';

const proRoster = [
  {
    id: 1,
    name: 'Mac Marsh',
    handle: 'SHADOW_WALKER',
    role: 'Duelist / Entry',
    kd: '1.84',
    winRate: '76.4%',
    ovr: '99',
    specialty: 'Headshot Ace',
    image: player1,
    team: 'Team Ninjas',
  },
  {
    id: 2,
    name: 'Robin Cloth',
    handle: 'VORTEX_IGL',
    role: 'In-Game Leader',
    kd: '1.62',
    winRate: '81.2%',
    ovr: '98',
    specialty: 'Strategy & Rotations',
    image: player2,
    team: 'Team Pandas',
  },
  {
    id: 3,
    name: 'Eva Raina',
    handle: 'VALKYRIE',
    role: 'Recon Specialist',
    kd: '1.75',
    winRate: '79.0%',
    ovr: '97',
    specialty: 'First Blood Queen',
    image: player3,
    team: 'Cyber Titans',
  },
  {
    id: 4,
    name: 'Max Alexis',
    handle: 'TITAN_CORE',
    role: 'Anchor / Controller',
    kd: '1.68',
    winRate: '74.8%',
    ovr: '96',
    specialty: 'Clutch Master',
    image: player4,
    team: 'Warclub Elite',
  },
  {
    id: 5,
    name: 'William Lili',
    handle: 'GHOST_OPS',
    role: 'Flex Operative',
    kd: '1.71',
    winRate: '77.5%',
    ovr: '97',
    specialty: 'Multi-kill Prodigy',
    image: player5,
    team: 'Shadow Unit',
  },
];

export default function Players() {
  const [hoveredPlayer, setHoveredPlayer] = useState(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 my-8">
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
        {proRoster.concat(proRoster).map((player, idx) => (
          <SwiperSlide key={`${player.id}-${idx}`}>
            <div
              onMouseEnter={() => setHoveredPlayer(idx)}
              onMouseLeave={() => setHoveredPlayer(null)}
              className="group relative rounded-2xl bg-[#090E17]/95 border border-gray-800 hover:border-[#45F882] overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_25px_rgba(69,248,130,0.25)] flex flex-col h-full"
            >
              {/* Top Card Badges */}
              <div className="absolute top-3 inset-x-3 z-20 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-[#0b131f]/90 border border-gray-700 text-[10px] font-mono text-[#45F882] uppercase tracking-wider backdrop-blur-sm">
                  {player.role}
                </span>

                <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#45F882] text-black font-orbitron font-extrabold text-xs shadow-md">
                  <FaStar className="text-[10px]" />
                  <span>{player.ovr} OVR</span>
                </div>
              </div>

              {/* Player Image Container */}
              <div className="relative w-full h-[280px] overflow-hidden bg-gradient-to-b from-[#121A28] to-[#090E17] flex items-end justify-center pt-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#45F882]/15 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                <img
                  src={player.image}
                  alt={player.name}
                  className="relative z-10 w-auto h-[260px] object-contain transition-transform duration-500 group-hover:scale-105 filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.9)]"
                />
              </div>

              {/* Player Telemetry Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between border-t border-gray-800/80 bg-[#070C14]">
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-500 font-mono mb-1">
                    <span>{player.team}</span>
                    <span className="text-[#45F882]">PRO ATHLETE</span>
                  </div>

                  <h3 className="text-xl font-orbitron font-extrabold text-white group-hover:text-[#45F882] transition-colors">
                    {player.name}
                  </h3>
                  <p className="text-xs text-gray-400 font-mono tracking-wider mb-4">
                    // {player.handle}
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-2 py-3 border-y border-gray-800 text-xs font-rajdhani">
                  <div className="bg-[#0e1624] px-2.5 py-1.5 rounded-lg border border-gray-800/60">
                    <span className="text-[10px] text-gray-500 block uppercase font-mono">K/D Ratio</span>
                    <strong className="text-sm font-orbitron text-white">{player.kd}</strong>
                  </div>
                  <div className="bg-[#0e1624] px-2.5 py-1.5 rounded-lg border border-gray-800/60">
                    <span className="text-[10px] text-gray-500 block uppercase font-mono">Win Rate</span>
                    <strong className="text-sm font-orbitron text-[#45F882]">{player.winRate}</strong>
                  </div>
                </div>

                {/* Specialty and Link */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-rajdhani flex items-center gap-1.5">
                    <FaCrosshairs className="text-[#45F882] text-[10px]" />
                    <span className="truncate max-w-[140px]">{player.specialty}</span>
                  </span>

                  <Link
                    to="/aboutUs"
                    className="inline-flex items-center gap-1 text-xs font-orbitron font-semibold text-[#45F882] group-hover:translate-x-1 transition-transform"
                  >
                    <span>STATS</span>
                    <FaChevronRight className="text-[9px]" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
