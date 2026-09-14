import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import PageBanner from '../Common/PageBanner';
import GalleryLightbox from './GalleryLightbox';
import Footer from '../Footer/Footer';
import {
  Play,
  Pause,
  Shuffle,
  LayoutGrid,
  Grid,
  Maximize2,
  SlidersHorizontal,
  Flame,
  Heart,
  Camera,
} from 'lucide-react';

const mediaData = [
  {
    id: 1,
    title: "Baldur's Gate 3 Tactical Arena",
    category: 'Cinematic Lore',
    event: 'GLOBAL CAMPAIGN // 2026',
    res: '3840 x 2160 UHD',
    likes: 342,
    src: 'https://i.ibb.co/kBZy7RW/Baldurs-Gate-3.webp',
  },
  {
    id: 2,
    title: 'Star Wars Jedi: Survivor Duel',
    category: 'Cinematic Lore',
    event: 'LORE ARCHIVE // REEL 02',
    res: '4K MASTER',
    likes: 289,
    src: 'https://i.ibb.co/JxxV9Tp/survivor-16827508379411387348426.webp',
  },
  {
    id: 3,
    title: 'Horizon Forbidden Shores Main Stage',
    category: 'Arena Stages',
    event: 'LOS ANGELES ARENA // 2026',
    res: '3840 x 2160 UHD',
    likes: 412,
    src: 'https://i.ibb.co/MSp4QJd/horizon-forbidden-west-burning-shores-1-jpg.jpg',
  },
  {
    id: 4,
    title: 'Spider-Man Remastered Stage Battle',
    category: 'Pro Champions',
    event: 'CHAMPIONSHIP ROSTER // STAGE A',
    res: '4K ULTRA',
    likes: 518,
    src: 'https://i.ibb.co/F7xDbC0/Spider-Man-Remastered-Adding-Two-New-Costumes-featured-image-gaming-instincts.webp',
  },
  {
    id: 5,
    title: 'God of War Ragnarok Grand Finals',
    category: 'Championship Finals',
    event: 'STOCKHOLM MAJOR // FINALS',
    res: '3840 x 2160 UHD',
    likes: 674,
    src: 'https://i.ibb.co/r45Wd7F/God-of-War-Ragnarok-release-date-7ce4b11.jpg',
  },
  {
    id: 6,
    title: 'The Last of Us Part I Arena Screen',
    category: 'Cinematic Lore',
    event: 'WORLDS EXPO // MAIN CAGE',
    res: '4K MASTER',
    likes: 382,
    src: 'https://i.ibb.co/WVrtLXm/joel-ellie.webp',
  },
  {
    id: 7,
    title: 'Tekken 8 Global Tournament Cage',
    category: 'Championship Finals',
    event: 'TOKYO TOURNAMENT // DAY 3',
    res: '3840 x 2160 UHD',
    likes: 590,
    src: 'https://i.ibb.co/Fz8FkjT/TEKKEN-SITE.webp',
  },
  {
    id: 8,
    title: 'Cyber Warfare Combat Roster',
    category: 'Arena Stages',
    event: 'WARCLUB BERLIN HQ // STAGE B',
    res: '4K ULTRA',
    likes: 215,
    src: 'https://i.ibb.co/K0bm2VY/Ftq2i-XRa-DXrexx-Yr-Pe-QHd3.jpg',
  },
  {
    id: 9,
    title: 'Deathloop Speedrun Showdown',
    category: 'Pro Champions',
    event: 'INVITATIONAL CUP // FINALS',
    res: '3840 x 2160 UHD',
    likes: 334,
    src: 'https://i.ibb.co/5L64NQx/deathloop.webp',
  },
  {
    id: 10,
    title: 'Halo Reach Championship Tribute',
    category: 'Cinematic Lore',
    event: 'ANNIVERSARY ARENA // 2026',
    res: '4K MASTER',
    likes: 429,
    src: 'https://i.ibb.co/DzqsNw5/happy-13th-birthday-halo-reach-v0-bjylanxba8ob1.webp',
  },
  {
    id: 11,
    title: 'Back 4 Blood Survival Gauntlet',
    category: 'Pro Champions',
    event: 'SQUAD ELIMINATION // TIER 1',
    res: '3840 x 2160 UHD',
    likes: 198,
    src: 'https://i.ibb.co/LkJ6y0m/back-4-blood.webp',
  },
  {
    id: 12,
    title: 'Dark Survival Championship Night',
    category: 'Arena Stages',
    event: 'MIDNIGHT TOURNAMENT CUP',
    res: '4K ULTRA',
    likes: 310,
    src: 'https://i.ibb.co/N7SdtY5/best-horror-games-on-ps5-guide-1-large.jpg',
  },
  {
    id: 13,
    title: 'PlayStation Championship Showcase',
    category: 'Arena Stages',
    event: 'GLOBAL EXPO // MAIN FLOOR',
    res: '3840 x 2160 UHD',
    likes: 445,
    src: 'https://i.ibb.co/7vFFjYZ/PSV0538-11.webp',
  },
  {
    id: 14,
    title: "Assassin's Creed Valhalla Clan Cup",
    category: 'Championship Finals',
    event: 'PARIS CHAMPIONSHIP // FINAL',
    res: '4K MASTER',
    likes: 521,
    src: 'https://i.ibb.co/TwgjgWg/valhalla.webp',
  },
  {
    id: 15,
    title: 'Sifu Pro Martial Showcase',
    category: 'Pro Champions',
    event: 'ASIAN OPEN ARENA // ROUND 4',
    res: '3840 x 2160 UHD',
    likes: 377,
    src: 'https://i.ibb.co/Rp0wyv2/Sifu-game-1170x675.jpg',
  },
  {
    id: 16,
    title: 'Cyberpunk Night City Finals Cage',
    category: 'Championship Finals',
    event: 'APEX GRAND FINALS // STAGE 1',
    res: '3840 x 2160 UHD',
    likes: 720,
    src: 'https://i.ibb.co/DQgGpr2/10504eaac54f45039a015ff510a645c041aecd9c.webp',
  },
];

const shuffleArray = (array) => {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('matrix'); // 'matrix' | 'cards'
  const [isAutoShuffle, setIsAutoShuffle] = useState(true);
  const [displayItems, setDisplayItems] = useState(mediaData);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const timerRef = useRef(null);

  const categories = [
    'All',
    'Championship Finals',
    'Arena Stages',
    'Cinematic Lore',
    'Pro Champions',
  ];

  // Filter media based on category
  const filteredData =
    selectedCategory === 'All'
      ? mediaData
      : mediaData.filter((item) => item.category === selectedCategory);

  // Sync display items on category change
  useEffect(() => {
    setDisplayItems(filteredData);
  }, [selectedCategory]);

  // Handle periodic shuffle when in matrix view and autoShuffle is active
  useEffect(() => {
    if (!isAutoShuffle || viewMode !== 'matrix') {
      if (timerRef.current) clearTimeout(timerRef.current);
      return;
    }

    const runShuffle = () => {
      setDisplayItems((prev) => shuffleArray(prev));
      timerRef.current = setTimeout(runShuffle, 4500);
    };

    timerRef.current = setTimeout(runShuffle, 4500);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isAutoShuffle, viewMode, selectedCategory]);

  const handleManualShuffle = () => {
    setDisplayItems(shuffleArray(filteredData));
  };

  const handleOpenLightbox = (item) => {
    const idx = filteredData.findIndex((m) => m.id === item.id);
    setLightboxIndex(idx !== -1 ? idx : 0);
    setIsLightboxOpen(true);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {/* Cybernetic Page Banner */}
      <PageBanner
        badge="VISUAL ARCHIVES // 4K MEDIA FEED"
        title="ARENA"
        highlight="MEDIA VAULT"
        subtitle="Immersive high-resolution snapshots from global championship stages, team celebrations, and tournament setups."
        breadcrumb="Gallery"
        stats={[
          { label: 'CAPTURES', value: `${mediaData.length} REELS` },
          { label: 'RESOLUTION', value: '4K ULTRA' },
          { label: 'STAGE EVENTS', value: 'GLOBAL' },
        ]}
      />

      {/* Interactive Gallery Control Toolbar */}
      <div className="mt-10 mb-8 p-4 rounded-2xl bg-[#090f18] border border-gray-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Filter Pills */}
        <div className="flex items-center flex-wrap gap-2 w-full md:w-auto">
          {categories.map((cat) => {
            const count =
              cat === 'All'
                ? mediaData.length
                : mediaData.filter((m) => m.category === cat).length;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition duration-200 cursor-pointer flex items-center gap-1.5 border ${
                  isSelected
                    ? 'bg-[#45F882] text-black border-[#45F882] shadow-[0_0_15px_rgba(69,248,130,0.3)]'
                    : 'bg-[#0b1320] border-gray-800 text-gray-400 hover:text-white hover:border-[#45F882]/40'
                }`}
              >
                <span>{cat.toUpperCase()}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-black/30 text-black font-extrabold' : 'bg-black/60 text-gray-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* View Mode & Shuffle Controls */}
        <div className="flex items-center gap-2.5 w-full md:w-auto justify-end">
          {/* Auto-Shuffle Toggle */}
          <button
            onClick={() => setIsAutoShuffle(!isAutoShuffle)}
            className={`px-3 py-1.5 rounded-xl border text-xs font-mono flex items-center gap-1.5 transition cursor-pointer ${
              isAutoShuffle
                ? 'bg-[#45F882]/15 border-[#45F882] text-[#45F882]'
                : 'bg-[#0b1320] border-gray-800 text-gray-400 hover:text-white'
            }`}
            title={isAutoShuffle ? 'Pause Auto-Shuffle' : 'Resume Auto-Shuffle'}
          >
            {isAutoShuffle ? (
              <>
                <Pause size={13} className="text-[#45F882]" />
                <span className="hidden sm:inline">AUTO-SHUFFLE ON</span>
              </>
            ) : (
              <>
                <Play size={13} />
                <span className="hidden sm:inline">AUTO-SHUFFLE PAUSED</span>
              </>
            )}
          </button>

          {/* Manual Shuffle Trigger */}
          <button
            onClick={handleManualShuffle}
            className="p-2 rounded-xl bg-[#0b1320] border border-gray-800 hover:border-[#45F882] text-gray-300 hover:text-[#45F882] transition cursor-pointer"
            title="Trigger Instant Matrix Shuffle"
          >
            <Shuffle size={15} />
          </button>

          {/* View Mode Toggle */}
          <div className="flex items-center bg-[#070b13] p-1 rounded-xl border border-gray-800">
            <button
              onClick={() => setViewMode('matrix')}
              className={`p-1.5 rounded-lg transition ${
                viewMode === 'matrix'
                  ? 'bg-[#45F882] text-black shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
              title="Cyber Matrix Grid"
            >
              <Grid size={15} />
            </button>
            <button
              onClick={() => setViewMode('cards')}
              className={`p-1.5 rounded-lg transition ${
                viewMode === 'cards'
                  ? 'bg-[#45F882] text-black shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
              title="Expanded 4K Vault Cards"
            >
              <LayoutGrid size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Gallery Display */}
      {viewMode === 'matrix' ? (
        /* Mode 1: Cybernetic Motion Matrix Grid */
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-7xl mx-auto min-h-[680px]">
          {displayItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              onClick={() => handleOpenLightbox(item)}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group border border-gray-800/80 hover:border-[#45F882] shadow-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(69,248,130,0.25)] hover:scale-[1.02]"
              style={{
                backgroundImage: `url(${item.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

              {/* Top HUD Badges */}
              <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="px-2 py-0.5 rounded-md bg-black/80 border border-[#45F882]/40 text-[#45F882] text-[9px] font-mono font-bold uppercase">
                  {item.category}
                </span>
                <span className="p-1 rounded-md bg-black/80 text-white hover:text-[#45F882]">
                  <Maximize2 size={13} />
                </span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-2.5 inset-x-2.5 opacity-0 group-hover:opacity-100 transition duration-300">
                <h4 className="text-white font-orbitron font-bold text-xs sm:text-sm line-clamp-1">
                  {item.title}
                </h4>
                <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 mt-1">
                  <span>{item.res}</span>
                  <span className="flex items-center gap-1 text-red-400">
                    <Heart size={10} className="fill-red-400" /> {item.likes}
                  </span>
                </div>
              </div>

              {/* Cyber Corner Brackets */}
              <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t border-l border-[#45F882] opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b border-r border-[#45F882] opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      ) : (
        /* Mode 2: Expanded 4K Media Cards */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredData.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              className="bg-[#0a121c] border border-gray-800 rounded-2xl overflow-hidden group cursor-pointer hover:border-[#45F882]/50 hover:shadow-[0_10px_30px_rgba(69,248,130,0.15)] transition duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a121c] via-transparent to-transparent opacity-80" />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/80 border border-[#45F882]/40 text-[#45F882] text-[10px] font-mono font-bold uppercase">
                  {item.category}
                </span>
                <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-gray-300 border border-gray-700">
                  {item.res}
                </span>
              </div>

              <div className="p-4">
                <h4 className="font-orbitron font-bold text-base text-white group-hover:text-[#45F882] transition line-clamp-1">
                  {item.title}
                </h4>
                <div className="flex items-center justify-between text-xs font-mono text-gray-400 mt-2.5 pt-2.5 border-t border-gray-800/80">
                  <span className="flex items-center gap-1">
                    <Camera size={12} className="text-[#45F882]" />
                    {item.event}
                  </span>
                  <span className="flex items-center gap-1 text-red-400">
                    <Heart size={12} className="fill-red-400" /> {item.likes}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Fullscreen 4K Lightbox Viewer */}
      <GalleryLightbox
        images={filteredData}
        currentIndex={lightboxIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onSelectIndex={(idx) => setLightboxIndex(idx)}
      />

      <div className="mt-20 md:mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default Gallery;
