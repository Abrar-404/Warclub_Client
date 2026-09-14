import React, { useEffect, useState, useCallback } from 'react';
import AllGamesCard from './AllGamesCard';
import GameModal from './GameModal';
import AddGameModal from './AddGameModal';
import '../Styles/bannerBtn.css';
import { MdDoubleArrow } from 'react-icons/md';
import { FaPlus, FaSearch, FaFilter, FaGamepad } from 'react-icons/fa';
import GameThumb from '../GameThumb/GameThumb';
import sticker1 from '../../assets/sticker2.png';
import sticker2 from '../../assets/sticker3.png';
import { apiFetch } from '../../Config/apiConfig';

const AllGamesCardFetch = () => {
  const [games, setGames] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [timer, setTimer] = useState(calculateInitialTimer());

  // Modal states
  const [selectedGame, setSelectedGame] = useState(null);
  const [isGameModalOpen, setIsGameModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    fetchInitialGames();
  }, []);

  const fetchInitialGames = async () => {
    try {
      const response = await apiFetch('/games');
      const data = await response.json();
      if (Array.isArray(data)) {
        setGames(data);
      }
    } catch (error) {
      console.error('Error fetching initial games:', error);
    }
  };

  const fetchNewGameData = useCallback(async () => {
    try {
      const response = await apiFetch('/timerGame');
      const newData = await response.json();
      if (newData && newData._id) {
        setGames((prevGames) => {
          if (prevGames.some((g) => g._id === newData._id)) return prevGames;
          return [...prevGames, newData];
        });
      }
    } catch (error) {
      console.error('Error fetching new game data:', error);
    }
  }, []);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    if (timer <= 0) {
      clearInterval(interval);
      setTimer(calculateInitialTimer());
      fetchNewGameData();
    }

    return () => clearInterval(interval);
  }, [timer, fetchNewGameData]);

  function calculateInitialTimer() {
    const daysInSeconds = 3 * 24 * 60 * 60;
    const hoursInSeconds = 23 * 60 * 60;
    const minutesInSeconds = 59 * 60;
    const seconds = 59;
    return daysInSeconds + hoursInSeconds + minutesInSeconds + seconds;
  }

  const formatTime = () => {
    const days = Math.floor(timer / (24 * 60 * 60));
    const hours = Math.floor((timer % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((timer % (60 * 60)) / 60);
    const seconds = timer % 60;

    return (
      <div className="text-[#45F882] font-mono font-bold text-sm tracking-wider">
        {`${days}d ${hours}h ${minutes}m ${seconds}s`}
      </div>
    );
  };

  const handleSeeMoreClick = () => {
    toggleShowAll();
    fetchNewGameData();
  };

  const handleOpenGameDetails = (game) => {
    setSelectedGame(game);
    setIsGameModalOpen(true);
  };

  const handleGameAdded = (newGame) => {
    setGames((prev) => [newGame, ...prev]);
  };

  // Live Category & Search Filtering
  const filteredGames = games.filter((g) => {
    const title = String(g.name || '').toLowerCase();
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch = !query || title.includes(query);
    if (!matchesSearch) return false;

    const feeNum = Number(g.fee);
    const isFree = !g.fee || g.fee === 0 || g.fee === '0' || String(g.fee).toLowerCase() === 'free';

    if (activeCategory === 'FREE') return isFree;
    if (activeCategory === 'TIER1') return !isFree && feeNum > 0 && feeNum <= 30;
    if (activeCategory === 'PREMIUM') return !isFree && feeNum > 30;
    return true;
  });

  const visibleGames = showAll ? filteredGames : filteredGames.slice(0, 6);

  return (
    <section className="mt-8 px-4 max-w-7xl mx-auto">
      {/* Top Futuristic Command Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8 bg-[#0B131D]/80 border border-gray-800/80 p-6 rounded-3xl backdrop-blur-xl shadow-2xl">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#45F882] animate-cyber-pulse" />
            <span className="text-[#45F882] text-xs font-mono tracking-widest uppercase font-bold">
              ARENA ROSTER // LIVE QUEUES
            </span>
          </div>
          <h2 className="text-white text-3xl font-extrabold font-orbitron">
            Competitive Game Titles
          </h2>
          <p className="text-gray-400 text-xs mt-1 font-rajdhani">
            Select an esports title to enter instant matchmaking queues, inspect tickrates, and challenge rivals.
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#45F882] to-[#2bd468] hover:brightness-110 active:scale-95 text-black font-extrabold font-orbitron text-xs rounded-xl shadow-[0_0_20px_rgba(69,248,130,0.3)] transition"
        >
          <FaPlus size={12} /> ADD NEW TITLE
        </button>
      </div>

      {/* Cyber Search & Filter Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
          <input
            type="text"
            placeholder="Search titles by keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 bg-[#0A111A] border border-gray-800 hover:border-gray-700 focus:border-[#45F882] text-white text-xs rounded-xl outline-none transition placeholder-gray-500"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {[
            { id: 'ALL', label: 'ALL TITLES', count: games.length },
            { id: 'FREE', label: 'FREE TO PLAY' },
            { id: 'TIER1', label: 'TIER 1 (≤$30)' },
            { id: 'PREMIUM', label: 'HIGH ROLLER (>$30)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition duration-200 border ${
                activeCategory === tab.id
                  ? 'bg-[#45F882] text-black border-[#45F882] shadow-[0_0_15px_rgba(69,248,130,0.35)]'
                  : 'bg-[#0E1722]/80 text-gray-400 border-gray-800 hover:text-white hover:border-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Games Grid */}
      {filteredGames.length === 0 ? (
        <div className="text-center py-20 bg-[#091018]/60 border border-gray-800 rounded-3xl p-8 max-w-lg mx-auto">
          <FaGamepad className="text-gray-600 text-5xl mx-auto mb-4" />
          <h3 className="text-white font-bold font-orbitron text-lg mb-2">No Titles Found</h3>
          <p className="text-gray-400 text-xs mb-6">
            No active competitive titles matched your search criteria.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('ALL');
            }}
            className="px-5 py-2 bg-gray-800 hover:bg-gray-700 text-white text-xs font-mono font-bold rounded-xl transition"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto max-w-6xl gap-12">
          {visibleGames.map((game, idx) => (
            <AllGamesCard
              key={game._id || game.id || idx}
              gamesItems={game}
              onSelectGame={handleOpenGameDetails}
            />
          ))}
        </div>
      )}

      {/* See More Button */}
      {filteredGames.length > 6 && (
        <div className="flex justify-center mt-20">
          <button className="cta" onClick={handleSeeMoreClick}>
            <span className="span">{showAll ? 'See Less' : 'See More'}</span>
            <span className="second">
              <svg
                width="50px"
                height="20px"
                viewBox="0 0 66 43"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g id="arrow" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <path
                    className="one"
                    d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                    fill="#FFFFFF"
                  />
                  <path
                    className="two"
                    d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                    fill="#FFFFFF"
                  />
                  <path
                    className="three"
                    d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                    fill="#FFFFFF"
                  />
                </g>
              </svg>
            </span>
          </button>
        </div>
      )}

      {/* Upcoming Games Feature Banner */}
      <div className="mt-32 mb-10 bg-gradient-to-r from-[#0C1520] via-[#101D2C] to-[#0C1520] border border-[#45F882]/30 rounded-3xl p-8 lg:p-12 shadow-[0_0_40px_rgba(69,248,130,0.1)]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#45F882]/10 border border-[#45F882]/30 text-[#45F882] text-xs font-mono mb-3">
              <span>● CLASSIFIED RELEASES</span>
            </div>
            <h2 className="text-white text-3xl font-extrabold font-orbitron">
              Upcoming <span className="text-[#45F882]">Arena Games</span>
            </h2>
            <p className="text-gray-400 text-xs mt-2 max-w-md">
              Next-generation competitive titles currently in alpha testing. Sign up for early access passes and closed scrims.
            </p>
          </div>

          <div className="flex items-center gap-6 bg-[#080E16] border border-gray-800 p-6 rounded-2xl">
            <div className="text-center">
              <span className="text-gray-500 text-xs font-mono uppercase block mb-1">LAUNCHING IN</span>
              {formatTime()}
            </div>
          </div>
        </div>
      </div>

      {/* Countdown & Showcase */}
      <div className="mb-20">
        <div className="flex justify-center items-center gap-12 lg:flex-row md:flex-col flex-col">
          <div className="flex justify-start items-center text-7xl relative">
            <MdDoubleArrow
              style={{
                animation: 'fadeInOut2 .5s ease-in-out infinite',
                color: 'white',
              }}
            />
            <div className="text-7xl absolute left-11">
              <MdDoubleArrow
                style={{
                  animation: 'fadeInOut .5s ease-in-out infinite',
                  color: '#45f882',
                }}
              />
            </div>
          </div>

          <div className="w-full">
            <GameThumb />
          </div>
        </div>

        <style>
          {`
          @keyframes fadeInOut {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
          }
          @keyframes fadeInOut2 {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}
        </style>
      </div>

      {/* Render Modals */}
      <GameModal
        game={selectedGame}
        isOpen={isGameModalOpen}
        onClose={() => setIsGameModalOpen(false)}
      />

      <AddGameModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onGameAdded={handleGameAdded}
      />
    </section>
  );
};

export default AllGamesCardFetch;
