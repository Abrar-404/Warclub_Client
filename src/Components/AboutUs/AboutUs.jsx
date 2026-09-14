import React from 'react';
import PageBanner from '../Common/PageBanner';
import GamingSlider from './GamingSlider';
import heroPic from '../../assets/herolanding.png';
import Stats from './Stats';
import TourBanner from './TourBanner';
import Facts from './Facts';
import Players from '../Players/Players';
import StickerSlider from '../StickerSlider/StickerSlider';
import AboutFooter from './AboutFooter';
import { Sparkles, Shield, Trophy } from 'lucide-react';

const AboutUs = () => {
  return (
    <>
      {/* Cybernetic Page Banner */}
      <PageBanner
        badge="ORGANIZATION PROFILE // CLASSIFIED INTEL"
        title="ABOUT"
        highlight="WARCLUB ESPORTS"
        subtitle="Forging the future of competitive gaming, tournament integrity, and pro athlete development across global leagues."
        breadcrumb="About Us"
        stats={[
          { label: 'FOUNDED', value: 'EST. 2024' },
          { label: 'GLOBAL ATHLETES', value: '142,000+' },
          { label: 'TIER-1 PARTNERS', value: '48+ CLANS' },
        ]}
      />

      <div className="mt-12 md:mt-16 text-center">
        {/* Intro Mission Heading */}
        <div
          className="mb-12 max-w-3xl mx-auto px-4"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1200"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#45F882]/10 border border-[#45F882]/30 text-[#45F882] text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <Sparkles size={13} className="text-[#45F882]" />
            <span>WELCOME TO THE NEXT GENERATION ESPORTS NETWORK</span>
          </div>

          <h2 className="text-white font-orbitron font-extrabold text-2xl sm:text-3xl md:text-4xl mt-1">
            Forging Legends In The Global Gaming Universe
          </h2>
          <p className="text-gray-400 font-rajdhani text-sm sm:text-base max-w-2xl mx-auto mt-2">
            From grassroots community scrims to multi-million dollar stadium world championships, Warclub provides the technological backbone for modern competitive esports.
          </p>
        </div>

        {/* Hero Combat Chassis & Interactive Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto px-4 mb-16">
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative rounded-3xl overflow-hidden border border-[#45F882]/30 bg-gradient-to-b from-[#0e1724]/80 to-[#070c14] p-4 shadow-2xl group w-full max-w-[480px]">
              <img
                className="w-full h-auto object-contain transition duration-500 group-hover:scale-105"
                src={heroPic}
                alt="Warclub Combat Chassis"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 border border-[#45F882]/40 text-[#45F882] text-[10px] font-mono font-bold">
                OPERATOR AVATAR // CHASSIS V2
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <GamingSlider />
          </div>
        </div>

        {/* Live Arena Metrics */}
        <div className="my-16 md:my-20">
          <Stats />
        </div>

        {/* Championship Hall of Fame Heritage */}
        <div className="my-16 md:my-20">
          <TourBanner />
        </div>

        {/* Core Values & Authenticated Esports Pillars */}
        <div className="my-16 md:my-20">
          <Facts />
        </div>

        {/* Top World Class Gamers Roster */}
        <div className="my-16 md:my-24">
          <div
            className="mb-10 text-center max-w-2xl mx-auto px-4"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1200"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#45F882]/10 border border-[#45F882]/30 text-[#45F882] text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Trophy size={13} className="text-[#45F882]" />
              <span>TOP WORLD CLASS GAMERS</span>
            </div>
            <h2 className="text-white font-orbitron font-extrabold text-2xl sm:text-3xl md:text-4xl">
              Inspect Our Pro Athlete Roster
            </h2>
            <p className="text-gray-400 font-rajdhani text-sm mt-2">
              Verified competitors representing the Warclub banner across international leagues.
            </p>
          </div>
          <Players />
        </div>

        {/* Partner Clans Carousel */}
        <div className="my-12 md:my-16">
          <StickerSlider />
        </div>

        {/* Footer */}
        <div className="mt-20 md:mt-24">
          <AboutFooter />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
