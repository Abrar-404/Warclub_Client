import React from 'react';
import Marquee from 'react-fast-marquee';
import star from '../../assets/star.png';
import { FaBolt, FaTrophy, FaGamepad, FaBroadcastTower } from 'react-icons/fa';

const tickerItems = [
  { icon: FaBroadcastTower, text: 'LIVE ARENA SEASON 2026 ACTIVE', color: 'text-[#45F882]' },
  { icon: FaTrophy, text: '$500,000 GUARANTEED PRIZE POOL', color: 'text-[#F03AF9]' },
  { icon: FaGamepad, text: '64 ELITE ESPORTS CLANS ENLISTED', color: 'text-white' },
  { icon: FaBolt, text: 'SUB-12MS TICKRATE 128 SERVERS', color: 'text-[#45F882]' },
  { icon: FaTrophy, text: 'GLOBAL CHAMPIONSHIP FINALS TICKETS NOW LIVE', color: 'text-yellow-400' },
  { icon: FaGamepad, text: '142,000+ WARCLUB ATHLETES MATCHMAKING', color: 'text-white' },
];

const MarqueeText = () => {
  return (
    <div className="relative w-full my-6 overflow-hidden">
      {/* Sleek Ticker Ribbon */}
      <div className="border-y border-[#45F882]/25 bg-[#070C14]/90 backdrop-blur-md py-3.5 shadow-[0_0_20px_rgba(69,248,130,0.1)]">
        <Marquee speed={50} pauseOnHover={true} gradient={false}>
          <div className="flex items-center gap-10">
            {tickerItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="flex items-center gap-4">
                  <div className="flex items-center gap-2.5">
                    <IconComp className={`text-sm ${item.color} animate-pulse`} />
                    <span className={`font-orbitron font-extrabold text-sm sm:text-base tracking-wider uppercase ${item.color} hover:text-white transition-colors cursor-pointer select-none`}>
                      {item.text}
                    </span>
                  </div>
                  <img src={star} alt="★" className="w-4 h-4 object-contain opacity-70 ml-6" />
                </div>
              );
            })}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeText;
