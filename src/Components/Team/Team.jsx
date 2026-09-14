import React from 'react';
import teamImg from '../../assets/team.png';
import { Link } from 'react-router-dom';
import { FaDiscord, FaUsers, FaTrophy, FaBolt, FaShieldAlt } from 'react-icons/fa';

const Team = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 my-12">
      {/* Clan Hub Banner Frame */}
      <div className="relative rounded-3xl border border-gray-800 bg-[#070b13] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
        {/* Background Image with Cyber Gradients */}
        <div 
          className="absolute inset-0 bg-cover bg-right md:bg-center opacity-40 mix-blend-luminosity pointer-events-none"
          style={{ backgroundImage: `url(${teamImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070B13] via-[#070B13]/90 to-transparent pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#45F882] to-transparent opacity-80" />

        {/* Content Container */}
        <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#45F882]/10 border border-[#45F882]/30 mb-4">
            <FaShieldAlt className="text-[#45F882] text-xs" />
            <span className="text-[11px] font-orbitron font-bold text-[#45F882] tracking-widest uppercase">
              GLOBAL CLAN & SQUAD RECRUITMENT
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-orbitron font-extrabold text-white uppercase leading-tight">
            JOIN WARCLUB TO BECOME THE NEXT <br className="hidden sm:inline" />
            <span className="text-[#45F882] neon-text-green">PRO CHAMPION</span> TODAY!
          </h2>

          <p className="text-gray-300 text-sm sm:text-base font-rajdhani leading-relaxed mt-4">
            Connect with thousands of competitive athletes, find verified scrim partners, recruit teammates, and compete in our official Discord community hub with 24/7 moderation.
          </p>

          {/* Quick Perks Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6 text-xs font-rajdhani">
            <div className="flex items-center gap-2 bg-[#0c1420]/80 border border-gray-800 px-3 py-2 rounded-xl">
              <FaUsers className="text-[#45F882] text-sm flex-shrink-0" />
              <div>
                <strong className="text-white block font-orbitron text-xs">45,000+</strong>
                <span className="text-gray-400 text-[10px]">Active Members</span>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-[#0c1420]/80 border border-gray-800 px-3 py-2 rounded-xl">
              <FaTrophy className="text-[#F03AF9] text-sm flex-shrink-0" />
              <div>
                <strong className="text-white block font-orbitron text-xs">$500K+</strong>
                <span className="text-gray-400 text-[10px]">Annual Bounties</span>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-[#0c1420]/80 border border-gray-800 px-3 py-2 rounded-xl col-span-2 sm:col-span-1">
              <FaBolt className="text-yellow-400 text-sm flex-shrink-0" />
              <div>
                <strong className="text-white block font-orbitron text-xs">DAILY</strong>
                <span className="text-gray-400 text-[10px]">Tier-1 Scrims</span>
              </div>
            </div>
          </div>

          {/* Interactive CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto px-7 py-3.5 bg-[#5865F2] hover:bg-[#4752c4] text-white font-orbitron font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-[0_0_20px_rgba(88,101,242,0.4)] active:scale-95 transition-all flex items-center justify-center gap-2">
                <FaDiscord className="text-base" />
                <span>JOIN OUR DISCORD</span>
              </button>
            </a>

            <Link to="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-7 py-3.5 bg-[#121A26] hover:bg-[#182333] border border-gray-700 hover:border-[#45F882] text-white font-orbitron font-semibold text-xs uppercase tracking-wider rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2">
                <FaUsers className="text-gray-400 text-xs" />
                <span>CONTACT RECRUITERS</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
