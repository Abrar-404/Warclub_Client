import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaChevronRight } from 'react-icons/fa';
import defaultBg from '../../assets/aboutusbg.png';

const PageBanner = ({
  badge = 'WARCLUB ARENA NETWORK',
  title = 'Page Title',
  highlight = '',
  subtitle = '',
  breadcrumb = 'Page',
  bgImage = defaultBg,
  stats = [],
}) => {
  return (
    <div className="relative w-full overflow-hidden my-4">
      {/* Outer Cybernetic Banner Card Frame */}
      <div
        className="relative w-full rounded-2xl md:rounded-3xl border border-gray-800/90 bg-[#070b13] bg-cover bg-center overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] py-14 sm:py-20 md:py-24 px-6 md:px-12 text-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(7, 11, 19, 0.82), rgba(7, 11, 19, 0.94)), url(${bgImage})`,
        }}
      >
        {/* Top & Bottom Glowing Neon Accent Lines */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#45F882] to-transparent opacity-85" />
        <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#45F882]/40 to-transparent" />

        {/* Cyber Corner HUD Brackets */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#45F882]/50 pointer-events-none" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#45F882]/50 pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#45F882]/50 pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#45F882]/50 pointer-events-none" />

        {/* Subtle Cyber Grid Texture */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#45F882 1px, transparent 1px), linear-gradient(90deg, #45F882 1px, transparent 1px)`,
            backgroundSize: '36px 36px',
          }}
        />

        {/* Ambient Radial Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-64 bg-[#45F882]/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Banner Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          {/* Tagline / Tactical Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#45F882]/10 border border-[#45F882]/30 mb-4 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#45F882] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-orbitron font-bold text-[#45F882] tracking-widest uppercase">
                {badge}
              </span>
            </div>
          )}

          {/* Main Title with Optional Highlight */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-orbitron font-extrabold text-white uppercase tracking-wider leading-tight drop-shadow-md">
            {title}{' '}
            {highlight && (
              <span className="text-[#45F882] neon-text-green">{highlight}</span>
            )}
          </h1>

          {/* Subtitle / Description */}
          {subtitle && (
            <p className="text-gray-300 text-xs sm:text-sm md:text-base font-rajdhani max-w-2xl mt-3 leading-relaxed">
              {subtitle}
            </p>
          )}

          {/* Futuristic Breadcrumbs Pill */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a101b]/90 border border-gray-800 text-xs font-mono backdrop-blur-md shadow-md">
            <Link
              to="/"
              className="text-gray-400 hover:text-[#45F882] flex items-center gap-1.5 transition-colors font-medium"
            >
              <FaHome className="text-xs" />
              <span>HOME</span>
            </Link>
            <FaChevronRight className="text-[9px] text-gray-600" />
            <span className="text-[#45F882] font-semibold uppercase tracking-wider">
              {breadcrumb}
            </span>
          </div>

          {/* Quick Metrics / Telemetry Strip */}
          {stats.length > 0 && (
            <div className="mt-8 pt-6 border-t border-gray-800/80 w-full max-w-2xl grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-rajdhani">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[#0b131f]/80 border border-gray-800 px-3 py-2 rounded-xl text-center"
                >
                  <span className="text-gray-400 text-[10px] font-mono block uppercase">
                    {stat.label}
                  </span>
                  <strong className="text-white font-orbitron text-xs sm:text-sm">
                    {stat.value}
                  </strong>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
