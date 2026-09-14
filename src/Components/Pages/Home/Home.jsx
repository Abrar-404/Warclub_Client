import React from 'react';
import About from '../../About/About';
import Banner from '../../Banner/Banner';
import Banner2 from '../../Banner2/Banner2';
import BlogSlider from '../../BlogsSlider/BlogsSlider';
import Facilities from '../../Facilities/Facilities';
import Footer from '../../Footer/Footer';
import GameThumb from '../../GameThumb/GameThumb';
import LatestGames from '../../LatestGames/LatestGames';
import MarqueeText from '../../MarqueeText/MarqueeText';
import Players from '../../Players/Players';
import StickerSlider from '../../StickerSlider/StickerSlider';
import Team from '../../Team/Team';

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* 1. Hero Command Station */}
      <Banner />

      {/* 2. Interactive Clan Battle / Versus Arena */}
      <Banner2 />

      {/* 3. Real-Time High-Speed Esports Ticker */}
      <MarqueeText />

      {/* 4. About Warclub Cyber Ecosystem */}
      <About />

      {/* 5. Featured Arena Releases Showcase */}
      <section className="mt-20 md:mt-28">
        <div className="text-center mb-10 px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#45F882]/10 border border-[#45F882]/30 mb-3">
            <span className="text-[11px] font-orbitron font-bold text-[#45F882] tracking-widest uppercase">
              FEATURED ARENA TITLES
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-orbitron font-extrabold text-white uppercase tracking-wider">
            EXPLORE THE <span className="text-[#45F882]">LATEST RELEASES</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm font-rajdhani max-w-xl mx-auto mt-2">
            Game On, Power Up, Win Big! Compete in top-tier multiplayer battle arenas with verified prize pools.
          </p>
        </div>
        <LatestGames />
      </section>

      {/* 6. World-Class Gaming Facilities */}
      <Facilities />

      {/* 7. Interactive 4K Cinematic Reels & Gameplay Video Player */}
      <GameThumb />

      {/* 8. Top Pro Players & Leaderboard Roster */}
      <section className="mt-20 md:mt-28">
        <div className="text-center mb-10 px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#45F882]/10 border border-[#45F882]/30 mb-3">
            <span className="text-[11px] font-orbitron font-bold text-[#45F882] tracking-widest uppercase">
              GLOBAL LEADERBOARD HEROES
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-orbitron font-extrabold text-white uppercase tracking-wider">
            TOP WORLD-CLASS <span className="text-[#45F882]">PRO PLAYERS</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm font-rajdhani max-w-xl mx-auto mt-2">
            Meet the verified champions dominating international esports circuits, LAN brackets, and scrim sets.
          </p>
        </div>
        <Players />
      </section>

      {/* 9. Warclub Clan Recruitment & Community Hub */}
      <Team />

      {/* 10. Esports News & Meta Dispatch */}
      <section className="mt-20 md:mt-28">
        <div className="text-center mb-10 px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#45F882]/10 border border-[#45F882]/30 mb-3">
            <span className="text-[11px] font-orbitron font-bold text-[#45F882] tracking-widest uppercase">
              WARCLUB DISPATCH & INTEL
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-orbitron font-extrabold text-white uppercase tracking-wider">
            LATEST ESPORTS <span className="text-[#45F882]">NEWS & ARTICLES</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm font-rajdhani max-w-xl mx-auto mt-2">
            Stay ahead of the meta with tactical patch breakdowns, tournament recaps, and pro athlete interviews.
          </p>
        </div>
        <BlogSlider />
      </section>

      {/* 11. Official Clan & Tournament Badges */}
      <section className="mt-16 md:mt-20">
        <div className="text-center mb-6 px-4">
          <span className="text-xs font-orbitron text-gray-500 uppercase tracking-widest">
            OFFICIAL TOURNAMENT CLANS & SQUAD BADGES
          </span>
        </div>
        <StickerSlider />
      </section>

      {/* 12. Master Cybernetic Footer */}
      <div className="mt-16 md:mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
