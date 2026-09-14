import React, { useEffect, useState } from 'react';
import {
  FaTimes,
  FaTrophy,
  FaCalendarAlt,
  FaClock,
  FaShieldAlt,
  FaCheckCircle,
  FaUserFriends,
  FaTv,
  FaGamepad,
} from 'react-icons/fa';
import Swal from 'sweetalert2';

const TournamentModal = ({ match, isOpen, onClose }) => {
  const [captainName, setCaptainName] = useState('');
  const [discordTag, setDiscordTag] = useState('');
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'roster' | 'register'

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !match) return null;

  const {
    team1 = 'THE PANDAS',
    team2 = 'THE NINJAS',
    gameTitle = 'Valorant Champions Tour',
    time = '06:30 PM',
    date = 'October 24, 2026',
    prize = '$50,000 USD',
    format = 'Best of 3 (Single Elimination)',
    team1Logo,
    team2Logo,
  } = match;

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!captainName.trim()) {
      Swal.fire({
        title: 'Captain Name Required',
        text: 'Please enter your team captain in-game name.',
        icon: 'warning',
        background: '#0B121A',
        color: '#45F882',
        confirmButtonColor: '#45F882',
      });
      return;
    }

    Swal.fire({
      title: 'Roster Submitted!',
      text: `Captain ${captainName} has been enlisted for the ${team1} vs ${team2} bracket! Match briefing has been transmitted.`,
      icon: 'success',
      background: '#0B121A',
      color: '#45F882',
      confirmButtonColor: '#45F882',
      timer: 3000,
      showConfirmButton: false,
    });
    setCaptainName('');
    setDiscordTag('');
    onClose();
  };

  const mapPool = [
    { name: 'BIND', status: `Picked by ${team1}`, mapImg: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&auto=format&fit=crop&q=80' },
    { name: 'HAVEN', status: `Picked by ${team2}`, mapImg: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&auto=format&fit=crop&q=80' },
    { name: 'ASCENT', status: 'Decider Map', mapImg: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&auto=format&fit=crop&q=80' },
  ];

  const team1Roster = [
    { ign: 'ViperX', role: 'Duelist / Entry', kd: '1.42' },
    { ign: 'Nexus_IGL', role: 'In-Game Leader', kd: '1.18' },
    { ign: 'PhantomSnipe', role: 'Sniper / Op', kd: '1.35' },
    { ign: 'Aegis_Shield', role: 'Sentinel / Anchor', kd: '1.08' },
    { ign: 'Ghost_Recon', role: 'Initiator / Info', kd: '1.12' },
  ];

  const team2Roster = [
    { ign: 'ShadowKing', role: 'Duelist / Ace', kd: '1.48' },
    { ign: 'CyberSensei', role: 'In-Game Leader', kd: '1.22' },
    { ign: 'FatalBullet', role: 'Sniper / Flex', kd: '1.29' },
    { ign: 'WallMaster', role: 'Controller / Smokes', kd: '1.05' },
    { ign: 'NeonHawk', role: 'Initiator / Recon', kd: '1.15' },
  ];

  return (
    <div
      className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 custom-modal-backdrop overflow-y-auto"
      style={{ zIndex: 99990 }}
      onClick={onClose}
    >
      <div
        className="bg-[#0B121A] border border-[#45F882]/50 rounded-3xl max-w-3xl w-full p-5 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.9)] relative custom-modal-content max-h-[92vh] overflow-y-auto custom-scrollbar animate-in fade-in zoom-in-95 duration-200 text-white"
        style={{ zIndex: 99995 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glowing Top Accent */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#45F882] to-transparent" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-gray-400 hover:text-white bg-gray-900 border border-gray-800 hover:border-[#45F882] p-2 rounded-full transition cursor-pointer"
        >
          <FaTimes size={16} />
        </button>

        {/* Header Badges */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#45F882]/10 border border-[#45F882]/30 text-[#45F882] text-xs font-mono font-bold uppercase rounded-full tracking-wider shadow-[0_0_12px_rgba(69,248,130,0.2)] mb-2">
            <span>WARCLUB ESPORTS MAJOR FIXTURE</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black font-orbitron text-white mt-1">
            {gameTitle}
          </h3>
          <p className="text-gray-400 text-xs mt-1 font-rajdhani">
            Championship Bracket Stage 2 // Official 128Hz Tournament Server
          </p>
        </div>

        {/* Head to Head Combat Card */}
        <div className="bg-[#111C27] border border-gray-800/80 rounded-2xl p-4 sm:p-6 mb-6">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Team 1 */}
            <div className="flex-1 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2 rounded-2xl bg-slate-800/80 flex items-center justify-center border-2 border-[#45F882]/50 overflow-hidden shadow-lg shadow-green-500/10">
                {team1Logo ? (
                  <img src={team1Logo} alt={team1} className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
                ) : (
                  <FaShieldAlt className="text-[#45F882] text-2xl" />
                )}
              </div>
              <h4 className="text-white font-extrabold font-orbitron text-sm sm:text-lg">{team1}</h4>
              <p className="text-[10px] sm:text-xs text-[#45F882] font-semibold font-mono">RANK #1 • 78% WR</p>
            </div>

            {/* VS Badge */}
            <div className="flex flex-col items-center justify-center px-2 sm:px-4">
              <div className="bg-black/80 px-3.5 py-1.5 rounded-xl border border-red-500/40 shadow-[0_0_15px_rgba(239,68,68,0.3)] mb-1">
                <span className="text-red-400 font-black font-orbitron text-base sm:text-lg">VS</span>
              </div>
              <span className="text-[9px] sm:text-[10px] text-gray-400 font-mono font-bold">
                {time}
              </span>
            </div>

            {/* Team 2 */}
            <div className="flex-1 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2 rounded-2xl bg-slate-800/80 flex items-center justify-center border-2 border-purple-500/50 overflow-hidden shadow-lg shadow-purple-500/10">
                {team2Logo ? (
                  <img src={team2Logo} alt={team2} className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
                ) : (
                  <FaShieldAlt className="text-purple-400 text-2xl" />
                )}
              </div>
              <h4 className="text-white font-extrabold font-orbitron text-sm sm:text-lg">{team2}</h4>
              <p className="text-[10px] sm:text-xs text-purple-400 font-semibold font-mono">RANK #2 • 74% WR</p>
            </div>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 mb-6 border-b border-gray-800 pb-3">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-1.5 rounded-xl text-xs font-orbitron font-bold transition cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-[#45F882] text-black shadow-[0_0_12px_rgba(69,248,130,0.3)]'
                : 'text-gray-400 hover:text-white bg-gray-900 border border-gray-800'
            }`}
          >
            MATCH OVERVIEW
          </button>
          <button
            onClick={() => setActiveTab('roster')}
            className={`px-4 py-1.5 rounded-xl text-xs font-orbitron font-bold transition cursor-pointer ${
              activeTab === 'roster'
                ? 'bg-[#45F882] text-black shadow-[0_0_12px_rgba(69,248,130,0.3)]'
                : 'text-gray-400 hover:text-white bg-gray-900 border border-gray-800'
            }`}
          >
            TEAM ROSTERS
          </button>
          <button
            onClick={() => setActiveTab('register')}
            className={`px-4 py-1.5 rounded-xl text-xs font-orbitron font-bold transition cursor-pointer ${
              activeTab === 'register'
                ? 'bg-[#45F882] text-black shadow-[0_0_12px_rgba(69,248,130,0.3)]'
                : 'text-gray-400 hover:text-white bg-gray-900 border border-gray-800'
            }`}
          >
            SQUAD REGISTRATION
          </button>
        </div>

        {/* Tab 1: Match Overview & Map Vetoes */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Match Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-[#111A24] p-3 rounded-xl border border-gray-800 text-center">
                <FaTrophy className="text-[#45F882] mx-auto text-sm mb-1" />
                <p className="text-[10px] text-gray-400 font-mono">Prize Bounty</p>
                <p className="text-xs font-bold font-orbitron text-white mt-0.5">{prize}</p>
              </div>

              <div className="bg-[#111A24] p-3 rounded-xl border border-gray-800 text-center">
                <FaClock className="text-[#45F882] mx-auto text-sm mb-1" />
                <p className="text-[10px] text-gray-400 font-mono">Match Schedule</p>
                <p className="text-xs font-bold font-orbitron text-white mt-0.5">{time}</p>
              </div>

              <div className="bg-[#111A24] p-3 rounded-xl border border-gray-800 text-center">
                <FaCalendarAlt className="text-[#45F882] mx-auto text-sm mb-1" />
                <p className="text-[10px] text-gray-400 font-mono">Date</p>
                <p className="text-xs font-bold font-orbitron text-white mt-0.5">{date}</p>
              </div>

              <div className="bg-[#111A24] p-3 rounded-xl border border-gray-800 text-center">
                <FaUserFriends className="text-[#45F882] mx-auto text-sm mb-1" />
                <p className="text-[10px] text-gray-400 font-mono">Format</p>
                <p className="text-xs font-bold font-orbitron text-white mt-0.5">BO3 Single Elim</p>
              </div>
            </div>

            {/* Map Pool Vetoes */}
            <div>
              <h4 className="text-xs font-orbitron font-bold text-white uppercase tracking-wider mb-2.5 flex items-center gap-2">
                <FaGamepad className="text-[#45F882]" /> Official Map Pool Vetoes
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {mapPool.map((map, idx) => (
                  <div
                    key={idx}
                    className="relative rounded-xl overflow-hidden border border-gray-800 p-3 bg-cover bg-center"
                    style={{ backgroundImage: `linear-gradient(to bottom, rgba(11, 18, 26, 0.75), rgba(11, 18, 26, 0.95)), url(${map.mapImg})` }}
                  >
                    <span className="text-xs font-orbitron font-bold text-white block">
                      MAP {idx + 1}: {map.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#45F882] font-semibold">
                      {map.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rules & Eligibility */}
            <div className="bg-[#111A24] p-4 rounded-xl border border-gray-800 text-xs text-gray-300 space-y-1.5 font-rajdhani">
              <p className="font-bold font-orbitron text-white mb-1 text-xs">TOURNAMENT REGULATIONS:</p>
              <p className="flex items-center gap-2">
                <FaCheckCircle className="text-[#45F882] flex-shrink-0" /> Anti-cheat client mandatory for all active roster members.
              </p>
              <p className="flex items-center gap-2">
                <FaCheckCircle className="text-[#45F882] flex-shrink-0" /> Check-in opens 45 minutes prior to match schedule.
              </p>
              <p className="flex items-center gap-2">
                <FaCheckCircle className="text-[#45F882] flex-shrink-0" /> Official caster streams hosted on Warclub Twitch & YouTube.
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Team Rosters */}
        {activeTab === 'roster' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Team 1 Roster */}
              <div className="p-4 rounded-2xl bg-[#0e1622] border border-gray-800">
                <h4 className="text-sm font-orbitron font-extrabold text-[#45F882] mb-3 flex items-center gap-2">
                  <FaShieldAlt /> {team1} Starting 5
                </h4>
                <div className="space-y-2">
                  {team1Roster.map((player, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2 rounded-xl bg-[#0a1018] border border-gray-800/80 text-xs"
                    >
                      <div>
                        <p className="font-orbitron font-bold text-white">{player.ign}</p>
                        <p className="text-[10px] font-mono text-gray-400">{player.role}</p>
                      </div>
                      <span className="font-mono text-[#45F882] font-bold text-xs">{player.kd} K/D</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team 2 Roster */}
              <div className="p-4 rounded-2xl bg-[#0e1622] border border-gray-800">
                <h4 className="text-sm font-orbitron font-extrabold text-purple-400 mb-3 flex items-center gap-2">
                  <FaShieldAlt /> {team2} Starting 5
                </h4>
                <div className="space-y-2">
                  {team2Roster.map((player, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2 rounded-xl bg-[#0a1018] border border-gray-800/80 text-xs"
                    >
                      <div>
                        <p className="font-orbitron font-bold text-white">{player.ign}</p>
                        <p className="text-[10px] font-mono text-gray-400">{player.role}</p>
                      </div>
                      <span className="font-mono text-purple-400 font-bold text-xs">{player.kd} K/D</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Squad Registration */}
        {activeTab === 'register' && (
          <form onSubmit={handleRegisterSubmit} className="space-y-4">
            <div className="p-4 rounded-2xl bg-[#0d1624] border border-[#45F882]/40">
              <h4 className="text-sm font-orbitron font-bold text-white mb-1">
                Enlist Squad in Backup Bracket
              </h4>
              <p className="text-xs text-gray-400 font-rajdhani mb-4">
                Enter your competitive clan details to receive tournament lobby access credentials.
              </p>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1">
                    TEAM CAPTAIN IN-GAME NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={captainName}
                    onChange={(e) => setCaptainName(e.target.value)}
                    placeholder="e.g. PhantomCaptain#001"
                    className="w-full bg-[#080e18] border border-gray-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#45F882]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1">
                    CAPTAIN DISCORD TAG
                  </label>
                  <input
                    type="text"
                    value={discordTag}
                    onChange={(e) => setDiscordTag(e.target.value)}
                    placeholder="e.g. captain_warclub"
                    className="w-full bg-[#080e18] border border-gray-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#45F882]"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-[#45F882] to-[#27c760] text-black font-orbitron font-extrabold text-xs tracking-wider uppercase rounded-xl shadow-lg shadow-green-500/20 hover:brightness-110 active:scale-95 transition cursor-pointer"
            >
              CONFIRM TEAM REGISTRATION
            </button>
          </form>
        )}

        {/* Actions Footer */}
        <div className="flex gap-3 mt-6 pt-4 border-t border-gray-800">
          <button
            onClick={() => setActiveTab('register')}
            className="flex-1 py-3 px-6 bg-gradient-to-r from-[#45F882] to-[#27c760] text-black font-orbitron font-extrabold text-xs tracking-wider uppercase rounded-xl shadow-lg shadow-green-500/20 hover:brightness-110 active:scale-95 transition cursor-pointer"
          >
            Register Team
          </button>
          <button
            onClick={onClose}
            className="py-3 px-5 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-gray-300 hover:text-white font-orbitron font-bold text-xs rounded-xl transition cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TournamentModal;
