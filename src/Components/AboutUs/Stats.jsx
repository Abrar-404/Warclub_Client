import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { Users, Download, Gamepad2, Trophy, ShieldCheck } from 'lucide-react';

const statsData = [
  {
    start: 1000,
    end: 2347,
    suffix: '+',
    label: 'Daily Active Gamers',
    sublabel: 'Concurrent Arena Matchups',
    icon: Users,
  },
  {
    start: 10,
    end: 50,
    suffix: 'M+',
    label: 'Game Client Downloads',
    sublabel: 'Across PC, Console & Mobile',
    icon: Download,
  },
  {
    start: 50,
    end: 200,
    suffix: '+',
    label: 'Tournaments Hosted',
    sublabel: 'Official Global Circuits',
    icon: Gamepad2,
  },
  {
    start: 5,
    end: 30,
    suffix: 'M+',
    label: 'Prize Money Distributed',
    sublabel: 'Guaranteed Escrow Payouts',
    icon: Trophy,
  },
];

const Stats = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="relative rounded-3xl overflow-hidden border border-[#45F882]/40 bg-gradient-to-br from-[#0a121c] via-[#070b13] to-[#0a121c] p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          {/* Top & Bottom Neon Lines */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#45F882] to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#45F882]/40 to-transparent" />

          {/* Header Badge */}
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#45F882]/10 border border-[#45F882]/30 text-[#45F882] text-xs font-mono font-bold uppercase tracking-wider">
              <ShieldCheck size={14} /> LIVE WARCLUB ARENA METRICS
            </span>
          </div>

          {/* 4-Column Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsData.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#0c1522]/90 border border-gray-800 hover:border-[#45F882]/60 transition-all duration-300 text-center group hover:shadow-[0_0_20px_rgba(69,248,130,0.15)] relative"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#122032] border border-[#45F882]/30 flex items-center justify-center text-[#45F882] group-hover:scale-110 transition duration-300">
                    <IconComponent size={22} />
                  </div>

                  <div className="text-3xl sm:text-4xl font-orbitron font-black text-white tracking-tight">
                    {counterOn ? (
                      <CountUp
                        start={stat.start}
                        end={stat.end}
                        duration={2.5}
                      />
                    ) : (
                      stat.start
                    )}
                    <span className="text-[#45F882] ml-0.5">{stat.suffix}</span>
                  </div>

                  <h4 className="text-white font-orbitron font-bold text-xs sm:text-sm mt-2 uppercase tracking-wide">
                    {stat.label}
                  </h4>
                  <p className="text-gray-400 font-rajdhani text-xs mt-1">
                    {stat.sublabel}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default Stats;
