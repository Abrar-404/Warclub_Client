import React from 'react';
import fact1pic1 from '../../assets/aboutusPic1.png';
import fact1pic2 from '../../assets/aboutusPic2.png';
import logosamp from '../../assets/logosamp.png';
import {
  ShieldCheck,
  Zap,
  Lock,
  Trophy,
  Users,
  CheckCircle2,
  Cpu,
} from 'lucide-react';

const pillars = [
  {
    icon: Zap,
    title: 'Sub-12ms 128Hz Dedicated Servers',
    desc: 'Bare-metal infrastructure deployed globally ensuring zero tickrate drops and absolute competitive fairness in high-stakes matches.',
  },
  {
    icon: Lock,
    title: 'Proprietary Kernel Anti-Cheat',
    desc: 'Automated memory integrity verification protecting all official bracket fixtures against unauthorized software.',
  },
  {
    icon: Trophy,
    title: 'Guaranteed Escrow Bounty Distribution',
    desc: 'Automated and verified prize pools with instant payout execution to clan treasuries upon championship victory.',
  },
  {
    icon: Users,
    title: 'Direct Pro Athlete Scouting Pipeline',
    desc: 'Top ladder performers receive invitations to franchised clan trials and pro coaching bootcamps.',
  },
];

const Facts = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 my-16 md:my-24">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#45F882]/10 border border-[#45F882]/30 text-[#45F882] text-xs font-mono font-bold uppercase tracking-wider mb-2">
          <ShieldCheck size={13} className="text-[#45F882]" />
          <span>WHY CHOOSE WARCLUB // COMPETITIVE EDGE</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-orbitron font-extrabold text-white">
          Our Values Inspire And Drive Every Arena Move
        </h2>
        <p className="text-gray-400 font-rajdhani text-sm max-w-xl mx-auto mt-2">
          Engineered by competitive gamers for the next generation of esports champions.
        </p>
      </div>

      {/* Row 1: Core Values Grid + Feature Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
        {/* Left: 4 Authentic Pillars */}
        <div className="lg:col-span-7 space-y-4 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#0a121c] border border-gray-800 hover:border-[#45F882]/60 transition-all duration-300 shadow-lg group hover:shadow-[0_0_20px_rgba(69,248,130,0.15)]"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#122032] border border-[#45F882]/30 flex items-center justify-center text-[#45F882] mb-3 group-hover:scale-110 transition">
                    <IconComp size={18} />
                  </div>
                  <h4 className="text-white font-orbitron font-bold text-xs sm:text-sm mb-1.5 leading-snug">
                    {pillar.title}
                  </h4>
                  <p className="text-gray-400 font-rajdhani text-xs leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Immersive Stage Visual with Rotating Warclub Seal */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden border border-[#45F882]/40 shadow-2xl group">
            <img
              src={fact1pic2}
              alt="Warclub Arena Setup"
              className="w-full h-[360px] object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-left">
              <span className="text-[10px] font-mono text-[#45F882] uppercase font-bold tracking-wider">
                MAIN STAGE EXPO // LONDON
              </span>
              <p className="text-white font-orbitron font-bold text-sm">
                Next-Gen Esports Hardware & Broadcast Tech
              </p>
            </div>
          </div>

          {/* Clean Anchored Floating Rotating Badge */}
          <div className="absolute -bottom-6 -right-4 w-24 h-24 rounded-full bg-[#080e18] border-2 border-[#45F882] shadow-[0_0_25px_rgba(69,248,130,0.4)] p-1.5 flex items-center justify-center animate-spin-slow pointer-events-none">
            <img
              src={logosamp}
              alt="Warclub Seal"
              className="w-full h-full object-contain rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Row 2: Community & Lore Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl p-6 sm:p-8 bg-[#09101a] border border-gray-800">
        <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-gray-800">
          <img
            src={fact1pic1}
            alt="Warclub Athletes"
            className="w-full h-[280px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>

        <div className="lg:col-span-7 space-y-4 text-left">
          <span className="text-xs font-mono text-[#45F882] font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Cpu size={14} /> COMMUNITY & ATHLETE ECOSYSTEM
          </span>
          <h3 className="text-xl sm:text-2xl font-orbitron font-extrabold text-white">
            Built For Athletes, Caster Communities & Fans
          </h3>
          <p className="text-gray-300 font-rajdhani text-sm sm:text-base leading-relaxed">
            Gamers can join local gaming meetups, participate in certified tournament scrims, or connect with like-minded roster candidates through verified clan channels. Warclub provides the social fabric, telemetry analytics, and prize distribution infrastructure empowering competitive players worldwide.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400 pt-1">
            <span className="flex items-center gap-1.5 text-white">
              <CheckCircle2 size={14} className="text-[#45F882]" /> Certified League Matchmaking
            </span>
            <span className="flex items-center gap-1.5 text-white">
              <CheckCircle2 size={14} className="text-[#45F882]" /> 24/7 Marshall Arbitration Desk
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
