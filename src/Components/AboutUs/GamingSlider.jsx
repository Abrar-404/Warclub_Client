import React, { useState, useEffect } from 'react';
import sliderSticker1 from '../../assets/sliderSticker1.svg';
import sliderSticker2 from '../../assets/sliderSticker2.svg';
import sliderSticker3 from '../../assets/sliderSticker3.svg';
import { Trophy, Radio, Shield, Users, ArrowRight } from 'lucide-react';

const features = [
  {
    id: 0,
    icon: sliderSticker1,
    title: 'Tier-1 Tournament Circuits',
    tag: 'ARENA INFRASTRUCTURE',
    description:
      'Official 128-tick rate dedicated servers with sub-12ms ping, anti-cheat kernel protocols, and automated bracket matchmaking.',
    metric: '64 ACTIVE CUPS',
  },
  {
    id: 1,
    icon: sliderSticker2,
    title: '4K Multi-POV Live Streams',
    tag: 'BROADCAST NETWORK',
    description:
      'Ultra-high bitrate official casting with player biometric feeds, drone cams, and multi-language analyst desks.',
    metric: '1080P 120FPS',
  },
  {
    id: 2,
    icon: sliderSticker3,
    title: 'Instant Escrow Prize Payouts',
    tag: 'FINANCIAL INTEGRITY',
    description:
      'Smart-contract secured championship prize pools with instant distribution to verified clan wallets upon victory verification.',
    metric: '$500,000 ANNUAL',
  },
  {
    id: 3,
    icon: sliderSticker1,
    title: 'Pro Athlete Scouting & Academy',
    tag: 'TALENT PIPELINE',
    description:
      'Direct development pathways from grassroots weekend cups into franchised global championship rosters.',
    metric: '142K+ ATHLETES',
  },
];

const GamingSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto text-left">
      {/* Feature Navigation Pills */}
      <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2 custom-scrollbar">
        {features.map((feat, idx) => (
          <button
            key={feat.id}
            onClick={() => setActiveIndex(idx)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition duration-200 cursor-pointer flex-shrink-0 border ${
              activeIndex === idx
                ? 'bg-[#45F882] text-black border-[#45F882] shadow-[0_0_15px_rgba(69,248,130,0.35)]'
                : 'bg-[#0a121c] text-gray-400 border-gray-800 hover:text-white hover:border-[#45F882]/40'
            }`}
          >
            0{idx + 1} // {feat.tag}
          </button>
        ))}
      </div>

      {/* Active Featured Card Spotlight */}
      <div className="relative rounded-3xl overflow-hidden border border-[#45F882]/50 bg-gradient-to-br from-[#0c1624] via-[#09101a] to-[#070c14] p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.7)] transition-all duration-500">
        {/* Glowing Top Line */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#45F882] to-transparent" />

        <div className="flex items-start gap-4 mb-4">
          <div className="w-14 h-14 rounded-2xl bg-[#111e2f] border border-[#45F882]/40 flex items-center justify-center p-2.5 shadow-lg flex-shrink-0">
            <img
              src={features[activeIndex].icon}
              alt=""
              className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(69,248,130,0.4)]"
            />
          </div>

          <div className="flex-1">
            <span className="text-[10px] font-mono text-[#45F882] uppercase tracking-wider font-bold block mb-1">
              WARCLUB PILLAR // {features[activeIndex].tag}
            </span>
            <h3 className="text-xl sm:text-2xl font-orbitron font-extrabold text-white leading-tight">
              {features[activeIndex].title}
            </h3>
          </div>
        </div>

        <p className="text-gray-300 font-rajdhani text-sm sm:text-base leading-relaxed mb-6">
          {features[activeIndex].description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-800/80">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#45F882] animate-pulse" />
            <span className="text-xs font-mono font-extrabold text-[#45F882]">
              {features[activeIndex].metric}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-mono text-gray-400">
            <span>PILLAR {activeIndex + 1} OF 4</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamingSlider;
