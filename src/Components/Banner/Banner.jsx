import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaGamepad,
  FaTrophy,
  FaBolt,
  FaShieldAlt,
  FaFire,
  FaChevronRight,
  FaWifi,
  FaUsers,
} from 'react-icons/fa';
import herolanding from '../../assets/herolanding.png';
import shape1 from '../../assets/shape1.png';
import shape2 from '../../assets/shape2.png';
import '../Styles/customFont.css';

const Banner = () => {
  // Live ticking active combatants for futuristic realism
  const [activePlayers, setActivePlayers] = useState(148290);
  const [latency, setLatency] = useState(11);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePlayers((prev) => prev + (Math.floor(Math.random() * 7) - 3));
      setLatency((prev) => Math.max(8, Math.min(14, prev + (Math.random() > 0.5 ? 1 : -1))));
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden pt-28 pb-20 cyber-grid-bg min-h-[92vh] flex flex-col justify-center">
      {/* Dynamic Cyberpunk Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-[#45F882]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[450px] h-[350px] bg-[#00D8FF]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[400px] bg-[#F03AF9]/12 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Cyber Grid Overlay Lines */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#45F882]/60 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      {/* Subtle background curved shapes floating on edges */}
      <img
        src={shape1}
        alt=""
        className="absolute -left-20 top-32 w-64 h-64 object-contain opacity-10 pointer-events-none filter invert"
      />
      <img
        src={shape2}
        alt=""
        className="absolute -right-20 bottom-32 w-64 h-64 object-contain opacity-10 pointer-events-none filter invert"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Telemetry Beacon Badge */}
        <div className="flex justify-center lg:justify-start mb-6" data-aos="fade-down" data-aos-duration="1200">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#081018]/90 border border-[#45F882]/40 text-[#45F882] text-xs font-mono tracking-widest uppercase shadow-[0_0_25px_rgba(69,248,130,0.25)] backdrop-blur-xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#45F882] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#45F882]" />
            </span>
            <span>NEURAL ESPORTS ARENA // SEASON 2026 // TICKRATE 128Hz</span>
          </div>
        </div>

        {/* Main 2-Column Hero Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Mission Directives & Typography */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div data-aos="fade-right" data-aos-duration="1400" className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#45F882] hidden lg:inline-block" />
              <p className="text-gray-400 font-mono text-xs sm:text-sm tracking-widest uppercase">
                // COMPETITIVE CYBERNETIC WARFARE
              </p>
            </div>

            <h1
              data-aos="fade-up"
              data-aos-duration="1600"
              className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl text-white font-extrabold font-orbitron tracking-tight uppercase leading-[1.08]"
            >
              SHAPING THE FUTURE OF{' '}
              <span className="block mt-1 sm:mt-2 text-[#45F882] neon-text-green cyber-shimmer-text">
                WARCLUB
              </span>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-duration="1800"
              className="text-gray-300 max-w-xl text-sm sm:text-base md:text-lg mt-5 leading-relaxed font-rajdhani"
            >
              Enter the next-generation battleground where elite cyber athletes clash for global
              rankings, bracket supremacy, and massive prize pools. Instant matchmaking with
              hardware-accelerated anti-cheat.
            </p>

            {/* High-Tech Feature Badges */}
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 mt-6 text-xs font-mono"
            >
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0E1825]/90 border border-gray-800 text-gray-300 shadow-sm">
                <FaBolt className="text-[#45F882] text-xs" />
                <span>128-TICK SERVERS</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0E1825]/90 border border-gray-800 text-gray-300 shadow-sm">
                <FaShieldAlt className="text-[#00D8FF] text-xs" />
                <span>KERNEL ANTI-CHEAT</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0E1825]/90 border border-gray-800 text-gray-300 shadow-sm">
                <FaTrophy className="text-[#FFBE18] text-xs" />
                <span>$500K ANNUAL POOL</span>
              </div>
            </div>

            {/* Futuristic Action Buttons */}
            <div
              data-aos="fade-up"
              data-aos-duration="2200"
              className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto"
            >
              <Link to="/allGames" className="w-full sm:w-auto">
                <button className="relative group w-full sm:w-auto h-13 px-8 py-3.5 bg-gradient-to-r from-[#45F882] via-[#3ce076] to-[#2bd468] hover:from-[#5cff93] hover:to-[#45F882] text-black font-orbitron font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-[0_0_35px_rgba(69,248,130,0.5)] active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer overflow-hidden">
                  <span className="absolute inset-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
                  <FaGamepad className="text-base animate-pulse" />
                  <span>ENTER ARENA NOW</span>
                  <FaChevronRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <Link to="/tournament" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto h-13 px-8 py-3.5 bg-[#0A121C]/90 hover:bg-[#121F30] border border-[#45F882]/50 hover:border-[#45F882] text-white hover:text-[#45F882] font-orbitron font-bold text-xs uppercase tracking-wider rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.8)] active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer backdrop-blur-md">
                  <FaTrophy className="text-[#45F882] text-sm" />
                  <span>VIEW TOURNAMENTS</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column: 3D Holographic Cyber Warrior Stage */}
          <div
            data-aos="zoom-in"
            data-aos-duration="1800"
            className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0"
          >
            {/* Rotating Holographic Radar Rings */}
            <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[480px] md:h-[480px] rounded-full border border-dashed border-[#45F882]/25 animate-spin-slow pointer-events-none" />
            <div className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] rounded-full border border-dotted border-[#F03AF9]/25 pointer-events-none" />
            <div className="absolute w-[360px] h-[360px] bg-gradient-to-tr from-[#45F882]/15 via-transparent to-[#F03AF9]/15 rounded-full blur-3xl pointer-events-none" />

            {/* Cyber Hero Character */}
            <div className="relative z-10 animate-cyber-float">
              <img
                src={herolanding}
                alt="Cyber Warrior Hero"
                className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[460px] h-auto object-contain filter drop-shadow-[0_0_40px_rgba(69,248,130,0.35)] transform transition duration-500 hover:scale-105"
              />
            </div>

            {/* Floating Holographic Telemetry Badge #1: Top Right */}
            <div className="absolute -top-3 right-0 sm:right-4 z-20 animate-cyber-float-delayed bg-[#09121B]/95 border border-[#45F882]/60 px-3.5 py-2 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl pointer-events-none hidden sm:flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#45F882]/15 border border-[#45F882]/40 flex items-center justify-center text-[#45F882]">
                <FaFire className="text-sm animate-bounce" />
              </div>
              <div className="text-left font-orbitron">
                <div className="text-[10px] text-gray-400 font-mono tracking-wider">RANK #01 WARRIOR</div>
                <div className="text-xs font-bold text-white">WIN RATE: <span className="text-[#45F882]">89.6%</span></div>
              </div>
            </div>

            {/* Floating Holographic Telemetry Badge #2: Left Center */}
            <div className="absolute bottom-16 -left-2 sm:-left-6 z-20 animate-cyber-float bg-[#09121B]/95 border border-[#00D8FF]/60 px-3.5 py-2 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl pointer-events-none hidden sm:flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#00D8FF]/15 border border-[#00D8FF]/40 flex items-center justify-center text-[#00D8FF]">
                <FaWifi className="text-xs" />
              </div>
              <div className="text-left font-orbitron">
                <div className="text-[10px] text-gray-400 font-mono tracking-wider">NEURAL LINK</div>
                <div className="text-xs font-bold text-[#00D8FF]">128Hz SUB-FRAME</div>
              </div>
            </div>

            {/* Floating Holographic Telemetry Badge #3: Bottom Right */}
            <div className="absolute -bottom-4 right-2 sm:right-8 z-20 animate-cyber-float-delayed bg-[#09121B]/95 border border-[#F03AF9]/60 px-3.5 py-2 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl pointer-events-none hidden md:flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#F03AF9]/15 border border-[#F03AF9]/40 flex items-center justify-center text-[#F03AF9]">
                <FaTrophy className="text-xs" />
              </div>
              <div className="text-left font-orbitron">
                <div className="text-[10px] text-gray-400 font-mono tracking-wider">SEASON VAULT</div>
                <div className="text-xs font-bold text-white">$500,000 USD</div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Metrics Telemetry Strip */}
        <div
          className="mt-16 lg:mt-20 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4"
          data-aos="fade-up"
          data-aos-duration="2200"
        >
          <div className="bg-[#0A121C]/90 hover:bg-[#0E1A29] border border-gray-800/80 hover:border-[#45F882]/60 p-4 sm:p-5 rounded-2xl backdrop-blur-xl transition-all duration-300 group shadow-lg hover:shadow-[0_10px_30px_rgba(69,248,130,0.15)]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-[11px] font-mono tracking-wider">ACTIVE COMBATANTS</span>
              <span className="w-2 h-2 rounded-full bg-[#45F882] animate-ping" />
            </div>
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold font-orbitron text-white group-hover:text-[#45F882] transition">
              {activePlayers.toLocaleString()}+
            </p>
            <p className="text-[10px] text-gray-500 font-rajdhani mt-1 flex items-center gap-1">
              <FaUsers className="text-[#45F882] text-[10px]" /> Live in Matchmaking
            </p>
          </div>

          <div className="bg-[#0A121C]/90 hover:bg-[#0E1A29] border border-gray-800/80 hover:border-[#45F882]/60 p-4 sm:p-5 rounded-2xl backdrop-blur-xl transition-all duration-300 group shadow-lg hover:shadow-[0_10px_30px_rgba(69,248,130,0.15)]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-[11px] font-mono tracking-wider">ANNUAL PRIZE POOL</span>
              <FaTrophy className="text-[#FFBE18] text-xs" />
            </div>
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold font-orbitron text-[#45F882] transition">
              $500,000+
            </p>
            <p className="text-[10px] text-gray-500 font-rajdhani mt-1">
              Season 2026 Guaranteed
            </p>
          </div>

          <div className="bg-[#0A121C]/90 hover:bg-[#0E1A29] border border-gray-800/80 hover:border-[#F03AF9]/60 p-4 sm:p-5 rounded-2xl backdrop-blur-xl transition-all duration-300 group shadow-lg hover:shadow-[0_10px_30px_rgba(240,58,249,0.15)]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-[11px] font-mono tracking-wider">LEAGUES & CUPS</span>
              <FaBolt className="text-[#F03AF9] text-xs" />
            </div>
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold font-orbitron text-white group-hover:text-[#F03AF9] transition">
              64+ BRACKETS
            </p>
            <p className="text-[10px] text-gray-500 font-rajdhani mt-1">
              Weekly Tiered Tourneys
            </p>
          </div>

          <div className="bg-[#0A121C]/90 hover:bg-[#0E1A29] border border-gray-800/80 hover:border-[#00D8FF]/60 p-4 sm:p-5 rounded-2xl backdrop-blur-xl transition-all duration-300 group shadow-lg hover:shadow-[0_10px_30px_rgba(0,216,255,0.15)]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-[11px] font-mono tracking-wider">GLOBAL MESH</span>
              <FaWifi className="text-[#00D8FF] text-xs" />
            </div>
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold font-orbitron text-white group-hover:text-[#00D8FF] transition">
              &lt; {latency}ms
            </p>
            <p className="text-[10px] text-gray-500 font-rajdhani mt-1">
              Sub-frame Tickrate 128
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
