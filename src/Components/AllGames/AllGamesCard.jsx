import React from 'react';
import { FaStar, FaPlay, FaShieldAlt } from 'react-icons/fa';
import '../Styles/latestgames.css';

const AllGamesCard = ({ gamesItems, onSelectGame }) => {
  const { img, name, review, fee } = gamesItems || {};

  const handleCardClick = () => {
    if (onSelectGame) {
      onSelectGame(gamesItems);
    }
  };

  const formatFee = (val) => {
    if (val === undefined || val === null || val === '' || val === 0 || val === '0') return 'Free';
    const str = String(val).trim();
    if (str.toLowerCase() === 'free') return 'Free';
    return str.startsWith('$') ? str : `$${str}`;
  };

  const formattedFee = formatFee(fee);
  const ratingVal = review ? Number(review).toFixed(1) : '4.8';

  return (
    <div className="mt-28">
      <div 
        onClick={handleCardClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') handleCardClick(); }}
        className="group relative bg-[#09111B]/90 hover:bg-[#0E1A29] border border-gray-800/80 hover:border-[#45F882]/80 pt-28 pb-6 px-5 rounded-3xl transition-all duration-300 shadow-xl hover:shadow-[0_10px_35px_-5px_rgba(69,248,130,0.2)] cursor-pointer backdrop-blur-xl"
      >
        {/* Top Header Information */}
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-white lg:text-lg font-bold font-orbitron group-hover:text-[#45F882] transition truncate max-w-[190px]" title={name}>
            {name}
          </h3>
          <div className="flex items-center gap-1.5 bg-[#050A10] px-2.5 py-1 rounded-lg border border-gray-800/80 shadow-inner">
            <FaStar className="text-[11px] text-[#FFBE18]" />
            <span className="text-xs text-white font-mono font-bold">{ratingVal}</span>
          </div>
        </div>

        {/* Pricing & Rating Info */}
        <div className="flex justify-between items-center text-xs text-gray-400 pt-1 font-rajdhani">
          <div className="flex items-center gap-1.5">
            <span className="text-gray-500 font-mono text-[11px]">FEE:</span>
            <span className={`font-mono font-bold text-xs px-2 py-0.5 rounded-md ${
              formattedFee === 'Free' 
                ? 'bg-[#45F882]/10 text-[#45F882] border border-[#45F882]/30' 
                : 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/20'
            }`}>
              {formattedFee}
            </span>
          </div>
          <div className="text-[11px] text-gray-400 font-mono">
            {Math.round(Number(review || 4) * 2.5)}k Players
          </div>
        </div>

        {/* Action Button Strip */}
        <div className="mt-5 pt-3.5 border-t border-gray-800/60 flex items-center justify-between text-xs text-gray-300 group-hover:text-[#45F882] transition font-mono">
          <span className="flex items-center gap-1.5 tracking-wider">
            <FaShieldAlt className="text-[#45F882] text-xs" /> MATCHMAKING
          </span>
          <span className="p-2 rounded-xl bg-[#45F882]/10 text-[#45F882] group-hover:bg-[#45F882] group-hover:text-black transition-all shadow-md">
            <FaPlay size={10} />
          </span>
        </div>

        {/* Floating Futuristic Game Thumbnail */}
        <div className="absolute -top-24 left-4 right-4 flex justify-center">
          <div className="w-full h-44 rounded-2xl overflow-hidden border border-gray-700/60 group-hover:border-[#45F882] group-hover:scale-[1.02] transition-all duration-300 shadow-2xl bg-black relative">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={img || 'https://i.ibb.co/kBZy7RW/Baldurs-Gate-3.webp'}
              alt={name}
              loading="lazy"
              onError={(e) => {
                e.target.src = 'https://i.ibb.co/kBZy7RW/Baldurs-Gate-3.webp';
              }}
            />
            {/* Live Badge Overlay */}
            <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold text-gray-200 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#45F882] animate-cyber-pulse" />
              RANKED
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllGamesCard;
