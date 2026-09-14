import React, { useState, useEffect } from 'react';
import hero1 from '../../assets/hero1.png';
import hero2 from '../../assets/hero2.png';
import vs from '../../assets/vs.png';
import { Link } from 'react-router-dom';
import { FaFire, FaTrophy, FaGamepad, FaClock, FaShieldAlt } from 'react-icons/fa';

const Banner2 = () => {
  // Live ticking match countdown for interactivity
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 14, seconds: 36 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 2, minutes: 30, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNum = (num) => String(num).padStart(2, '0');

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Cybernetic Arena Card */}
      <div className="relative rounded-3xl border border-gray-800 bg-[#070B12]/95 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-6 md:p-10 lg:p-12">
        {/* Background Grid & Ambient Glows */}
        <div className="absolute inset-0 cyber-grid-bg opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#45F882]/10 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#F03AF9]/10 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#45F882] to-transparent opacity-75" />

        {/* Top Header Telemetry */}
        <div className="relative z-10 text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#45F882]/10 border border-[#45F882]/30 mb-3">
            <FaFire className="text-[#45F882] text-xs animate-bounce" />
            <span className="text-[11px] font-orbitron font-bold text-[#45F882] tracking-widest uppercase">
              FEATURED MATCHUP // APEX GRAND FINALS
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-orbitron font-extrabold text-white uppercase tracking-wider">
            CLASH OF THE <span className="text-[#45F882]">TITANS</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm font-rajdhani max-w-xl mx-auto mt-2">
            Watch the world's most feared esports squads duel in high-stakes bracket elimination. 
            Choose your side and witness cybernetic dominance.
          </p>
        </div>

        {/* Main Versus Arena Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Contender: Team Shadow */}
          <div className="lg:col-span-4 flex flex-col items-center text-center order-2 lg:order-1">
            <div className="relative group w-full h-64 sm:h-72 md:h-80 lg:h-88 flex items-end justify-center">
              <div className="absolute inset-x-8 bottom-0 h-44 bg-gradient-to-t from-[#45F882]/25 via-[#45F882]/5 to-transparent rounded-2xl blur-xl opacity-40 group-hover:opacity-80 transition duration-300" />
              <img
                src={hero1}
                alt="Team Ninja"
                className="relative max-h-full w-auto object-contain filter drop-shadow-[0_0_20px_rgba(69,248,130,0.3)] transform transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="mt-5 space-y-1.5 w-full flex flex-col items-center text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-[#45F882]/10 border border-[#45F882]/40 text-[#45F882] font-mono text-xs font-semibold uppercase tracking-wider">
                FACTION 01 // SHADOW STRIKE
              </span>
              <h3 className="text-xl sm:text-2xl font-orbitron font-extrabold text-white tracking-wide">
                THE NINJAS
              </h3>
              <div className="flex items-center justify-center gap-3 text-xs font-rajdhani text-gray-400">
                <span>WIN RATE: <strong className="text-[#45F882]">78.4%</strong></span>
                <span>•</span>
                <span>STREAK: <strong className="text-white">8 WINS</strong></span>
              </div>
            </div>
          </div>

          {/* Center Versus Hub & Countdown */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center text-center order-1 lg:order-2">
            {/* VS Emblem */}
            <div className="relative mb-5">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#45F882]/20 via-transparent to-[#F03AF9]/20 rounded-full blur-xl animate-pulse" />
              <img
                src={vs}
                alt="Versus"
                className="relative w-20 sm:w-24 h-auto object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
              />
            </div>

            {/* Countdown Box */}
            <div className="w-full max-w-xs bg-[#0C121B]/90 border border-gray-800 rounded-2xl p-4 shadow-xl mb-5">
              <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 font-orbitron mb-2">
                <FaClock className="text-[#45F882]" />
                <span className="tracking-wider uppercase">BATTLE STARTS IN</span>
              </div>
              <div className="flex items-center justify-center gap-3 font-orbitron font-bold text-xl sm:text-2xl text-white">
                <div className="flex flex-col items-center">
                  <span className="px-2.5 py-1 bg-[#141E2B] rounded-lg border border-gray-700/60 text-[#45F882]">
                    {formatNum(timeLeft.hours)}
                  </span>
                  <span className="text-[9px] text-gray-500 font-mono mt-1">HOURS</span>
                </div>
                <span className="text-gray-600">:</span>
                <div className="flex flex-col items-center">
                  <span className="px-2.5 py-1 bg-[#141E2B] rounded-lg border border-gray-700/60 text-[#45F882]">
                    {formatNum(timeLeft.minutes)}
                  </span>
                  <span className="text-[9px] text-gray-500 font-mono mt-1">MINS</span>
                </div>
                <span className="text-gray-600">:</span>
                <div className="flex flex-col items-center">
                  <span className="px-2.5 py-1 bg-[#141E2B] rounded-lg border border-gray-700/60 text-white animate-pulse">
                    {formatNum(timeLeft.seconds)}
                  </span>
                  <span className="text-[9px] text-gray-500 font-mono mt-1">SECS</span>
                </div>
              </div>
            </div>

            {/* Bounty Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F03AF9]/10 border border-[#F03AF9]/30 text-xs font-orbitron text-[#F03AF9] mb-5">
              <FaTrophy className="text-xs" />
              <span>BOUNTY POOL: $25,000 USD</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
              <Link to="/tournament" className="flex-1">
                <button className="w-full h-11 px-5 bg-[#45F882] hover:bg-[#3be074] border border-[#45F882] text-black font-orbitron font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-[0_0_20px_rgba(69,248,130,0.4)] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer">
                  <FaGamepad />
                  <span>ENTER ARENA</span>
                </button>
              </Link>
              <Link to="/contact" className="flex-1">
                <button className="w-full h-11 px-5 bg-[#121A26] hover:bg-[#182333] border border-gray-700 hover:border-[#45F882] text-white font-orbitron font-semibold text-xs uppercase tracking-wider rounded-xl transition-all active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer">
                  <FaShieldAlt className="text-gray-400 text-xs" />
                  <span>REGISTER</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Right Contender: Team Titan */}
          <div className="lg:col-span-4 flex flex-col items-center text-center order-3">
            <div className="relative group w-full h-64 sm:h-72 md:h-80 lg:h-88 flex items-end justify-center">
              <div className="absolute inset-x-8 bottom-0 h-44 bg-gradient-to-t from-[#F03AF9]/25 via-[#F03AF9]/5 to-transparent rounded-2xl blur-xl opacity-40 group-hover:opacity-80 transition duration-300" />
              <img
                src={hero2}
                alt="Team Pandas"
                className="relative max-h-full w-auto object-contain filter drop-shadow-[0_0_20px_rgba(240,58,249,0.3)] transform transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="mt-5 space-y-1.5 w-full flex flex-col items-center text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-[#F03AF9]/10 border border-[#F03AF9]/40 text-[#F03AF9] font-mono text-xs font-semibold uppercase tracking-wider">
                FACTION 02 // CYBER VANGUARD
              </span>
              <h3 className="text-xl sm:text-2xl font-orbitron font-extrabold text-white tracking-wide">
                THE PANDAS
              </h3>
              <div className="flex items-center justify-center gap-3 text-xs font-rajdhani text-gray-400">
                <span>WIN RATE: <strong className="text-[#F03AF9]">75.1%</strong></span>
                <span>•</span>
                <span>STREAK: <strong className="text-white">6 WINS</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
