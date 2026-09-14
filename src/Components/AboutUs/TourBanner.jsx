import React, { useState } from 'react';
import battle1 from '../../assets/battle1.png';
import battle2 from '../../assets/battle2.png';
import battle3 from '../../assets/battle3.png';
import { Trophy, Calendar, MapPin, Award, ArrowRight } from 'lucide-react';

const historyData = [
  {
    id: 0,
    season: 'SEASON 2024',
    title: 'Warclub Inaugural Arena Cup',
    subtitle: 'The Genesis of Competitive Clan Combat',
    champion: 'THE NINJAS CLAN',
    location: 'Seoul Olympic Hall, South Korea',
    prize: '$150,000 USD',
    mvp: 'Ninja_Ace (2.4 K/D)',
    bannerImg: battle1,
    matches: '128 CLANS • 32 NATIONS',
  },
  {
    id: 1,
    season: 'SEASON 2025',
    title: 'Global Apex Championship Circuit',
    subtitle: 'Cross-Platform Tier-1 World League',
    champion: 'PHANTOM ELITE',
    location: 'Tokyo Dome Arena, Japan',
    prize: '$300,000 USD',
    mvp: 'Phantom_Queen (98.4% HS)',
    bannerImg: battle2,
    matches: '256 CLANS • 48 NATIONS',
  },
  {
    id: 2,
    season: 'SEASON 2026',
    title: 'Warclub World Masters Tour',
    subtitle: 'Current Active Season & Hall of Fame',
    champion: 'REIGNING CHAMPIONSHIP',
    location: 'Manchester Arena & London ExCeL',
    prize: '$500,000 USD',
    mvp: 'Valkyrie_Strike (18-0 Streak)',
    bannerImg: battle3,
    matches: '512 CLANS • GLOBAL LEAGUE',
  },
];

const TourBanner = () => {
  const [selectedSeason, setSelectedSeason] = useState(2); // default to latest 2026

  const activeData = historyData[selectedSeason];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 my-16 md:my-24">
      {/* Section Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#45F882]/10 border border-[#45F882]/30 text-[#45F882] text-xs font-mono font-bold uppercase tracking-wider mb-2">
          <Trophy size={13} className="text-[#45F882]" />
          <span>HISTORY OF WARCLUB TROPHY // HALL OF FAME</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-orbitron font-extrabold text-white">
          Championship Heritage & Battle Records
        </h2>
        <p className="text-gray-400 font-rajdhani text-sm max-w-xl mx-auto mt-2">
          Explore the epic milestones, championship clans, and record-breaking matches that defined Warclub history.
        </p>
      </div>

      {/* Season Selector Tabs */}
      <div className="flex items-center justify-center flex-wrap gap-3 mb-8">
        {historyData.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setSelectedSeason(idx)}
            className={`px-5 py-2 rounded-xl text-xs font-orbitron font-bold transition duration-200 cursor-pointer flex items-center gap-2 border ${
              selectedSeason === idx
                ? 'bg-[#45F882] text-black border-[#45F882] shadow-[0_0_20px_rgba(69,248,130,0.35)] scale-105'
                : 'bg-[#0a121c] border-gray-800 text-gray-400 hover:text-white hover:border-[#45F882]/40'
            }`}
          >
            <Calendar size={13} />
            <span>{item.season}</span>
          </button>
        ))}
      </div>

      {/* Spotlight Era Display Card */}
      <div className="relative rounded-3xl overflow-hidden border border-[#45F882]/40 bg-gradient-to-br from-[#0a121c] via-[#070b13] to-[#0a121c] p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        {/* Glowing Top Line */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#45F882] to-transparent" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Era Details */}
          <div className="lg:col-span-6 space-y-4 text-left">
            <span className="px-3 py-1 rounded-full bg-[#45F882]/15 border border-[#45F882]/40 text-[#45F882] text-xs font-mono font-bold uppercase">
              {activeData.season} • {activeData.matches}
            </span>

            <h3 className="text-2xl sm:text-3xl font-orbitron font-extrabold text-white leading-tight">
              {activeData.title}
            </h3>

            <p className="text-gray-300 font-rajdhani text-sm sm:text-base leading-relaxed">
              {activeData.subtitle}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#0e1724] border border-gray-800">
                <span className="text-[10px] font-mono text-gray-400 block uppercase">
                  CHAMPION CLAN
                </span>
                <strong className="text-sm font-orbitron text-[#45F882]">
                  {activeData.champion}
                </strong>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0e1724] border border-gray-800">
                <span className="text-[10px] font-mono text-gray-400 block uppercase">
                  BOUNTY POOL
                </span>
                <strong className="text-sm font-orbitron text-white">
                  {activeData.prize}
                </strong>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0e1724] border border-gray-800">
                <span className="text-[10px] font-mono text-gray-400 block uppercase flex items-center gap-1">
                  <MapPin size={10} /> ARENA STAGE
                </span>
                <strong className="text-xs font-orbitron text-gray-200">
                  {activeData.location}
                </strong>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0e1724] border border-gray-800">
                <span className="text-[10px] font-mono text-gray-400 block uppercase flex items-center gap-1">
                  <Award size={10} /> TOURNAMENT MVP
                </span>
                <strong className="text-xs font-orbitron text-[#45F882]">
                  {activeData.mvp}
                </strong>
              </div>
            </div>
          </div>

          {/* Right: Championship Graphic Frame */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl group flex items-center justify-center p-2 bg-black/40">
            <img
              src={activeData.bannerImg}
              alt={activeData.title}
              className="w-full max-h-[360px] object-contain rounded-xl transition duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourBanner;
