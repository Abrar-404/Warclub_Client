import React from 'react';
import { FaMapMarkerAlt, FaCompass, FaSatelliteDish } from 'react-icons/fa';

export default function Map() {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-20">
      {/* Futuristic Map Header Bar */}
      <div className="bg-[#080E16] border border-gray-800 border-b-0 rounded-t-3xl p-4 sm:p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-[#45F882]/10 border border-[#45F882]/30 text-[#45F882]">
            <FaSatelliteDish size={18} className="animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#45F882] animate-cyber-pulse" />
              <span className="text-[#45F882] text-xs font-mono font-bold tracking-widest uppercase">
                RADAR GRID // GLOBAL HEADQUARTERS
              </span>
            </div>
            <h3 className="text-white font-orbitron font-bold text-sm sm:text-base mt-0.5">
              Warclub Esports Arena & HQ // Manchester, UK
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-gray-400 bg-[#04080D] px-4 py-2 rounded-xl border border-gray-800">
          <span className="flex items-center gap-1.5 text-gray-300">
            <FaCompass className="text-[#45F882]" /> 53.4831° N, 2.2285° W
          </span>
          <span className="text-gray-700">|</span>
          <span className="text-[#45F882] font-bold">UPLINK ACTIVE</span>
        </div>
      </div>

      {/* Cyber Map Frame */}
      <div className="relative w-full h-[420px] rounded-b-3xl overflow-hidden border border-gray-800 hover:border-[#45F882]/50 shadow-2xl transition duration-300 group bg-[#0A111A]">
        <iframe
          title="Warclub Esports Headquarters Location"
          src="https://maps.google.com/maps?q=4%20Naval%20St%2C%20Ancoats%2C%20Manchester%20M4%206EW%2C%20UK&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0 transition duration-500"
          style={{
            filter: 'invert(90%) hue-rotate(180deg) contrast(110%) brightness(95%)',
          }}
          loading="lazy"
          allowFullScreen
        />

        {/* Floating Targeting Reticle Overlay */}
        <div className="absolute top-4 left-4 pointer-events-none bg-black/80 backdrop-blur-md border border-[#45F882]/30 px-3.5 py-1.5 rounded-lg flex items-center gap-2">
          <FaMapMarkerAlt className="text-[#45F882] text-xs animate-bounce" />
          <span className="text-[11px] font-mono text-white font-bold tracking-wider">
            SECTOR: ANCOATS NAVAL ST
          </span>
        </div>
      </div>
    </div>
  );
}
