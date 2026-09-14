import React, { useState, useEffect } from 'react';
import PageBanner from '../Common/PageBanner';
import TournamentModal from './TournamentModal';
import TournamentBracketTree from './TournamentBracketTree';
import Footer from '../Footer/Footer';
import sticker1 from '../../assets/sticker1.png';
import sticker2 from '../../assets/sticker2.png';
import sticker3 from '../../assets/sticker3.png';
import sticker4 from '../../assets/sticker4.png';
import sticker5 from '../../assets/sticker5.png';
import sticker6 from '../../assets/sticker6.png';
import sticker7 from '../../assets/sticker7.png';
import sticker8 from '../../assets/sticker8.png';
import {
  Trophy,
  Clock,
  Calendar,
  Zap,
  CheckCircle2,
  Tv,
  Users,
  Grid,
  GitFork,
  Radio,
} from 'lucide-react';
import Swal from 'sweetalert2';

const Tournaments = () => {
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [viewMode, setViewMode] = useState('fixtures'); // 'fixtures' | 'bracket'

  // Dynamic Live Countdown to Grand Finals
  const [countdown, setCountdown] = useState({
    days: '04',
    hours: '18',
    minutes: '32',
    seconds: '45',
  });

  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 4);
    target.setHours(target.getHours() + 18);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = target - now;

      if (diff > 0) {
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const m = Math.floor((diff / 1000 / 60) % 60);
        const s = Math.floor((diff / 1000) % 60);

        setCountdown({
          days: String(d).padStart(2, '0'),
          hours: String(h).padStart(2, '0'),
          minutes: String(m).padStart(2, '0'),
          seconds: String(s).padStart(2, '0'),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Fan Voting & Prediction State
  const [matchVotes, setMatchVotes] = useState(() => {
    try {
      const saved = localStorage.getItem('warclub_tournament_votes');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const handleVote = (matchId, teamIndex) => {
    setMatchVotes((prev) => {
      const updated = {
        ...prev,
        [matchId]: teamIndex,
      };
      try {
        localStorage.setItem('warclub_tournament_votes', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });

    Swal.fire({
      title: 'Prediction Recorded!',
      text: 'Your fan vote has been locked into the live arena telemetry.',
      icon: 'success',
      background: '#0B121A',
      color: '#45F882',
      confirmButtonColor: '#45F882',
      timer: 1600,
      showConfirmButton: false,
    });
  };

  const handleMatchClick = (matchData) => {
    setSelectedMatch(matchData);
    setIsModalOpen(true);
  };

  const categories = [
    { id: 'all', name: 'All Matches' },
    { id: 'pubg', name: 'PUBG Mobile' },
    { id: 'cod', name: 'Call Of Duty' },
    { id: 'dota2', name: 'Dota 2' },
    { id: 'freefire', name: 'Free Fire' },
  ];

  const matchData = {
    all: [
      {
        id: 'm1',
        team1: 'THE PANDAS',
        team2: 'THE NINJAS',
        team1Logo: sticker1,
        team2Logo: sticker2,
        time: '06:30 PM',
        date: 'Nov 24, 2026',
        gameTitle: 'Valorant Champions Tour',
        prize: '$50,000 USD',
        status: 'UPCOMING',
        votesA: 64,
        votesB: 36,
      },
      {
        id: 'm2',
        team1: 'PHANTOM ELITE',
        team2: 'VIPER SQUAD',
        team1Logo: sticker3,
        team2Logo: sticker4,
        time: '08:00 PM',
        date: 'Nov 25, 2026',
        gameTitle: 'Counter-Strike 2 Global Cup',
        prize: '$75,000 USD',
        status: 'UPCOMING',
        votesA: 52,
        votesB: 48,
      },
      {
        id: 'm3',
        team1: 'SHADOW WOLVES',
        team2: 'SOLAR FLARE',
        team1Logo: sticker5,
        team2Logo: sticker6,
        time: '10:15 PM',
        date: 'Nov 26, 2026',
        gameTitle: 'Apex Legends Championship',
        prize: '$40,000 USD',
        status: 'UPCOMING',
        votesA: 71,
        votesB: 29,
      },
      {
        id: 'm4',
        team1: 'CYBER KNIGHTS',
        team2: 'NEXUS REAPERS',
        team1Logo: sticker7,
        team2Logo: sticker8,
        time: '07:45 PM',
        date: 'Nov 27, 2026',
        gameTitle: 'PUBG Mobile Pro League',
        prize: '$35,000 USD',
        status: 'UPCOMING',
        votesA: 45,
        votesB: 55,
      },
    ],
    pubg: [
      {
        id: 'm5',
        team1: 'DELTA FORCE',
        team2: 'ALPHA TITANS',
        team1Logo: sticker2,
        team2Logo: sticker5,
        time: '05:00 PM',
        date: 'Nov 29, 2026',
        gameTitle: 'PUBG Mobile Masters Cup',
        prize: '$30,000 USD',
        status: 'UPCOMING',
        votesA: 60,
        votesB: 40,
      },
      {
        id: 'm4',
        team1: 'CYBER KNIGHTS',
        team2: 'NEXUS REAPERS',
        team1Logo: sticker7,
        team2Logo: sticker8,
        time: '07:45 PM',
        date: 'Nov 30, 2026',
        gameTitle: 'PUBG Mobile Global Open',
        prize: '$45,000 USD',
        status: 'UPCOMING',
        votesA: 45,
        votesB: 55,
      },
    ],
    cod: [
      {
        id: 'm6',
        team1: 'GHOST RECON',
        team2: 'RED DRAGONS',
        team1Logo: sticker4,
        team2Logo: sticker6,
        time: '09:00 PM',
        date: 'Dec 02, 2026',
        gameTitle: 'Call of Duty World League',
        prize: '$60,000 USD',
        status: 'UPCOMING',
        votesA: 58,
        votesB: 42,
      },
    ],
    dota2: [
      {
        id: 'm7',
        team1: 'IMMORTAL ORDER',
        team2: 'AEGIS CLAN',
        team1Logo: sticker7,
        team2Logo: sticker1,
        time: '04:30 PM',
        date: 'Dec 05, 2026',
        gameTitle: 'Dota 2 International Circuit',
        prize: '$100,000 USD',
        status: 'UPCOMING',
        votesA: 66,
        votesB: 34,
      },
    ],
    freefire: [
      {
        id: 'm8',
        team1: 'FIRE STORM',
        team2: 'CYBER LIONS',
        team1Logo: sticker8,
        team2Logo: sticker3,
        time: '07:00 PM',
        date: 'Dec 08, 2026',
        gameTitle: 'Free Fire World Series',
        prize: '$20,000 USD',
        status: 'UPCOMING',
        votesA: 49,
        votesB: 51,
      },
    ],
  };

  const currentMatches = matchData[activeTab] || matchData.all;

  return (
    <>
      {/* Cybernetic Page Banner */}
      <PageBanner
        badge="ARENA CIRCUIT // SEASON 2026"
        title="TOURNAMENT"
        highlight="MATCHUPS"
        subtitle="Real-time elimination brackets, match telemetry, live schedules, and championship prize distribution."
        breadcrumb="Tournaments"
        stats={[
          { label: 'ACTIVE BRACKETS', value: '64 CUPS' },
          { label: 'TICKRATE', value: '128Hz' },
          { label: 'BOUNTY POOL', value: '$500,000' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 mt-10">
        {/* Dynamic Grand Finals Live Countdown Ribbon */}
        <div className="relative rounded-3xl overflow-hidden border border-[#45F882]/40 bg-gradient-to-r from-[#070e17] via-[#0b1726] to-[#070e17] p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.8)] mb-12">
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#45F882] to-transparent" />
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/15 border border-red-500/40 text-red-400 text-xs font-mono font-bold">
                <Radio size={13} className="animate-pulse" />
                <span>SEASON FINALE COUNTDOWN</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-orbitron font-extrabold text-white">
                Apex Grand Championship Showdown
              </h3>
              <p className="text-gray-400 text-xs font-rajdhani">
                Top 2 Qualifying Clans Clash for the $250,000 USD Bounty Pool & Champion Trophy
              </p>
            </div>

            {/* Countdown Clocks */}
            <div className="flex items-center gap-2 sm:gap-3">
              {[
                { label: 'DAYS', val: countdown.days },
                { label: 'HOURS', val: countdown.hours },
                { label: 'MINS', val: countdown.minutes },
                { label: 'SECS', val: countdown.seconds },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#0e1724] border border-[#45F882]/30 px-3 sm:px-4 py-2 rounded-xl text-center min-w-[62px] sm:min-w-[70px]"
                >
                  <span className="text-xl sm:text-2xl font-orbitron font-black text-[#45F882] block">
                    {item.val}
                  </span>
                  <span className="text-[9px] font-mono text-gray-400 uppercase">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View Mode & Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-gray-800">
          {/* View Switcher: Fixture Cards vs Bracket Tree */}
          <div className="flex items-center bg-[#070b13] p-1 rounded-2xl border border-gray-800">
            <button
              onClick={() => setViewMode('fixtures')}
              className={`px-4 py-2 rounded-xl text-xs font-orbitron font-bold transition flex items-center gap-2 cursor-pointer ${
                viewMode === 'fixtures'
                  ? 'bg-[#45F882] text-black shadow-[0_0_15px_rgba(69,248,130,0.3)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Grid size={14} />
              <span>MATCH FIXTURES</span>
            </button>
            <button
              onClick={() => setViewMode('bracket')}
              className={`px-4 py-2 rounded-xl text-xs font-orbitron font-bold transition flex items-center gap-2 cursor-pointer ${
                viewMode === 'bracket'
                  ? 'bg-[#45F882] text-black shadow-[0_0_15px_rgba(69,248,130,0.3)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <GitFork size={14} />
              <span>ELIMINATION BRACKET</span>
            </button>
          </div>

          {/* Game Categories (only relevant in fixtures mode) */}
          {viewMode === 'fixtures' && (
            <div className="flex items-center flex-wrap gap-2 justify-center sm:justify-end">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl font-orbitron text-xs font-bold transition duration-200 uppercase tracking-wider cursor-pointer border ${
                    activeTab === cat.id
                      ? 'bg-[#45F882] text-black border-[#45F882] shadow-[0_0_12px_rgba(69,248,130,0.3)]'
                      : 'bg-[#0B131D] text-gray-400 border-gray-800 hover:text-white hover:border-[#45F882]/40'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* View Mode 1: Fixture Cards */}
        {viewMode === 'fixtures' ? (
          <div className="space-y-6 max-w-5xl mx-auto">
            {currentMatches.map((m) => {
              const userVote = matchVotes[m.id];
              const pctA = m.votesA || 50;
              const pctB = m.votesB || 50;

              return (
                <div
                  key={m.id}
                  className="p-5 sm:p-7 rounded-3xl bg-[#090f18] border border-gray-800 hover:border-[#45F882]/60 transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(69,248,130,0.15)] relative overflow-hidden group"
                >
                  {/* Top Bar: Game Title & Prize */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-gray-800/80">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#45F882] animate-pulse" />
                      <span className="font-orbitron font-extrabold text-sm sm:text-base text-white">
                        {m.gameTitle}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-[#45F882]/10 border border-[#45F882]/30 text-[#45F882] font-mono text-xs font-bold">
                        🏆 {m.prize}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-gray-900 border border-gray-800 text-gray-400 font-mono text-xs">
                        128Hz
                      </span>
                    </div>
                  </div>

                  {/* Main Head to Head Area */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center mb-6">
                    {/* Team 1 */}
                    <div className="md:col-span-4 flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-slate-800/90 border border-[#45F882]/40 flex items-center justify-center p-2 shadow-lg flex-shrink-0">
                        <img
                          src={m.team1Logo}
                          alt={m.team1}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-mono text-[#45F882] uppercase tracking-wider block font-bold">
                          SEED #1 • ALPHA ROSTER
                        </span>
                        <h4 className="text-white font-orbitron font-extrabold text-lg sm:text-xl truncate">
                          {m.team1}
                        </h4>
                      </div>
                    </div>

                    {/* Center Schedule & VS */}
                    <div className="md:col-span-4 text-center py-2 px-4 rounded-2xl bg-[#0c1420] border border-gray-800/80">
                      <div className="inline-block px-2.5 py-0.5 rounded bg-red-500/20 text-red-400 font-orbitron font-black text-xs mb-1">
                        VS
                      </div>
                      <div className="text-xl sm:text-2xl font-orbitron font-black text-white">
                        {m.time}
                      </div>
                      <div className="text-[10px] font-mono text-gray-400 mt-0.5">
                        {m.date}
                      </div>
                    </div>

                    {/* Team 2 */}
                    <div className="md:col-span-4 flex items-center justify-start md:justify-end gap-4 text-left md:text-right">
                      <div className="min-w-0 order-2 md:order-1">
                        <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider block font-bold">
                          SEED #2 • BETA ROSTER
                        </span>
                        <h4 className="text-white font-orbitron font-extrabold text-lg sm:text-xl truncate">
                          {m.team2}
                        </h4>
                      </div>
                      <div className="w-14 h-14 rounded-2xl bg-slate-800/90 border border-purple-500/40 flex items-center justify-center p-2 shadow-lg flex-shrink-0 order-1 md:order-2">
                        <img
                          src={m.team2Logo}
                          alt={m.team2}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Fan Prediction / Voting Bar */}
                  <div className="p-3 rounded-2xl bg-[#0c1420] border border-gray-800/80 mb-5">
                    <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 mb-1.5">
                      <span className="flex items-center gap-1">
                        <Users size={12} className="text-[#45F882]" />
                        FAN PREDICTION POOL
                      </span>
                      <span>
                        {pctA}% {m.team1} vs {pctB}% {m.team2}
                      </span>
                    </div>

                    {/* Progress Percentage Split Bar */}
                    <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden flex mb-2.5">
                      <div
                        style={{ width: `${pctA}%` }}
                        className="h-full bg-gradient-to-r from-[#45F882] to-[#2ecc71] transition-all duration-500"
                      />
                      <div
                        style={{ width: `${pctB}%` }}
                        className="h-full bg-gradient-to-r from-[#9b59b6] to-[#8e44ad] transition-all duration-500"
                      />
                    </div>

                    {/* Vote Action Buttons */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleVote(m.id, 1)}
                        className={`flex-1 py-1 px-3 rounded-lg border text-[10px] font-mono font-bold transition cursor-pointer ${
                          userVote === 1
                            ? 'bg-[#45F882] text-black border-[#45F882]'
                            : 'bg-black/50 border-gray-800 text-gray-300 hover:text-white hover:border-[#45F882]'
                        }`}
                      >
                        {userVote === 1 ? '✓ VOTED FOR ' : 'VOTE '} {m.team1}
                      </button>

                      <button
                        onClick={() => handleVote(m.id, 2)}
                        className={`flex-1 py-1 px-3 rounded-lg border text-[10px] font-mono font-bold transition cursor-pointer ${
                          userVote === 2
                            ? 'bg-purple-500 text-white border-purple-500'
                            : 'bg-black/50 border-gray-800 text-gray-300 hover:text-white hover:border-purple-400'
                        }`}
                      >
                        {userVote === 2 ? '✓ VOTED FOR ' : 'VOTE '} {m.team2}
                      </button>
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-800/60">
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                      <CheckCircle2 size={13} className="text-[#45F882]" />
                      <span>Warclub Verified Match Protocol</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleMatchClick(m)}
                        className="px-5 py-2 rounded-full bg-gradient-to-r from-[#45F882] to-[#27c760] text-black font-orbitron font-extrabold text-xs tracking-wider uppercase hover:brightness-110 active:scale-95 shadow-[0_0_15px_rgba(69,248,130,0.3)] transition cursor-pointer"
                      >
                        INSPECT MATCH INTEL
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* View Mode 2: Visual Elimination Bracket Tree */
          <TournamentBracketTree onInspectMatch={handleMatchClick} />
        )}
      </div>

      {/* Tournament Details & Registration Modal */}
      <TournamentModal
        match={selectedMatch}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <div className="mt-20 md:mt-24">
        <Footer />
      </div>
    </>
  );
};

export default Tournaments;
