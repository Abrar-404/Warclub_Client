import React from 'react';
import { Trophy, ChevronRight, Zap, Shield, Play } from 'lucide-react';
import sticker1 from '../../assets/sticker1.png';
import sticker2 from '../../assets/sticker2.png';
import sticker3 from '../../assets/sticker3.png';
import sticker4 from '../../assets/sticker4.png';
import sticker5 from '../../assets/sticker5.png';
import sticker6 from '../../assets/sticker6.png';
import sticker7 from '../../assets/sticker7.png';
import sticker8 from '../../assets/sticker8.png';

const bracketData = {
  quarterFinals: [
    {
      id: 'qf1',
      round: 'QUARTERFINAL 1',
      time: 'Completed',
      status: 'FINAL',
      team1: { name: 'THE NINJAS', logo: sticker2, score: 2, winner: true, seed: '#1' },
      team2: { name: 'VIPER SQUAD', logo: sticker4, score: 0, winner: false, seed: '#8' },
      gameTitle: 'Valorant Champions Tour',
      date: 'Nov 22, 2026',
      prize: '$50,000 USD',
    },
    {
      id: 'qf2',
      round: 'QUARTERFINAL 2',
      time: 'Completed',
      status: 'FINAL',
      team1: { name: 'SHADOW WOLVES', logo: sticker5, score: 2, winner: true, seed: '#4' },
      team2: { name: 'SOLAR FLARE', logo: sticker6, score: 1, winner: false, seed: '#5' },
      gameTitle: 'Valorant Champions Tour',
      date: 'Nov 22, 2026',
      prize: '$50,000 USD',
    },
    {
      id: 'qf3',
      round: 'QUARTERFINAL 3',
      time: 'Completed',
      status: 'FINAL',
      team1: { name: 'THE PANDAS', logo: sticker1, score: 2, winner: true, seed: '#2' },
      team2: { name: 'CYBER KNIGHTS', logo: sticker7, score: 0, winner: false, seed: '#7' },
      gameTitle: 'Valorant Champions Tour',
      date: 'Nov 23, 2026',
      prize: '$50,000 USD',
    },
    {
      id: 'qf4',
      round: 'QUARTERFINAL 4',
      time: 'Completed',
      status: 'FINAL',
      team1: { name: 'PHANTOM ELITE', logo: sticker3, score: 2, winner: true, seed: '#3' },
      team2: { name: 'NEXUS REAPERS', logo: sticker8, score: 1, winner: false, seed: '#6' },
      gameTitle: 'Valorant Champions Tour',
      date: 'Nov 23, 2026',
      prize: '$50,000 USD',
    },
  ],
  semiFinals: [
    {
      id: 'sf1',
      round: 'SEMIFINAL 1',
      time: 'Today 06:00 PM',
      status: 'IN PLAY',
      team1: { name: 'THE NINJAS', logo: sticker2, score: 1, winner: false, seed: '#1' },
      team2: { name: 'SHADOW WOLVES', logo: sticker5, score: 1, winner: false, seed: '#4' },
      gameTitle: 'Valorant Champions Tour',
      date: 'Nov 24, 2026',
      prize: '$100,000 USD',
    },
    {
      id: 'sf2',
      round: 'SEMIFINAL 2',
      time: 'Today 08:30 PM',
      status: 'NEXT UP',
      team1: { name: 'THE PANDAS', logo: sticker1, score: 0, winner: false, seed: '#2' },
      team2: { name: 'PHANTOM ELITE', logo: sticker3, score: 0, winner: false, seed: '#3' },
      gameTitle: 'Valorant Champions Tour',
      date: 'Nov 24, 2026',
      prize: '$100,000 USD',
    },
  ],
  grandFinal: {
    id: 'gf',
    round: 'APEX GRAND FINAL',
    time: 'Nov 26 • 09:00 PM',
    status: 'DECIDER',
    team1: { name: 'TBD (SF1 WINNER)', logo: sticker2, score: '-', winner: false, seed: 'FINALIST A' },
    team2: { name: 'TBD (SF2 WINNER)', logo: sticker1, score: '-', winner: false, seed: 'FINALIST B' },
    gameTitle: 'Warclub Apex World Championship',
    date: 'Nov 26, 2026',
    prize: '$250,000 USD',
  },
};

const BracketMatchCard = ({ match, onInspect }) => {
  const { round, time, status, team1, team2 } = match;

  const handleClick = () => {
    onInspect({
      team1: team1.name,
      team2: team2.name,
      team1Logo: team1.logo,
      team2Logo: team2.logo,
      time: time,
      date: match.date,
      gameTitle: match.gameTitle,
      prize: match.prize,
      status: status,
    });
  };

  return (
    <div
      onClick={handleClick}
      className="bg-[#0b121b] border border-gray-800 hover:border-[#45F882]/70 rounded-2xl p-3.5 sm:p-4 shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(69,248,130,0.2)] cursor-pointer group relative overflow-hidden"
    >
      {/* Top Header Tag */}
      <div className="flex items-center justify-between mb-3 text-[10px] font-mono">
        <span className="text-[#45F882] font-bold tracking-wider uppercase">
          {round}
        </span>
        <span
          className={`px-2 py-0.5 rounded-full ${
            status === 'IN PLAY'
              ? 'bg-red-500/20 text-red-400 border border-red-500/50 animate-pulse'
              : status === 'FINAL'
              ? 'bg-gray-800 text-gray-400'
              : 'bg-[#45F882]/15 text-[#45F882] border border-[#45F882]/30'
          }`}
        >
          {status}
        </span>
      </div>

      {/* Team 1 Row */}
      <div
        className={`flex items-center justify-between p-2 rounded-xl mb-1.5 transition ${
          team1.winner
            ? 'bg-[#45F882]/10 border border-[#45F882]/40 text-white font-bold'
            : 'bg-[#0e1724] border border-gray-800/60 text-gray-300'
        }`}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <img
            src={team1.logo}
            alt={team1.name}
            className="w-6 h-6 object-contain flex-shrink-0"
          />
          <span className="text-xs font-orbitron truncate">{team1.name}</span>
        </div>
        <span
          className={`text-xs font-mono font-extrabold px-2 py-0.5 rounded ${
            team1.winner ? 'bg-[#45F882] text-black' : 'text-gray-400'
          }`}
        >
          {team1.score}
        </span>
      </div>

      {/* Team 2 Row */}
      <div
        className={`flex items-center justify-between p-2 rounded-xl transition ${
          team2.winner
            ? 'bg-[#45F882]/10 border border-[#45F882]/40 text-white font-bold'
            : 'bg-[#0e1724] border border-gray-800/60 text-gray-300'
        }`}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <img
            src={team2.logo}
            alt={team2.name}
            className="w-6 h-6 object-contain flex-shrink-0"
          />
          <span className="text-xs font-orbitron truncate">{team2.name}</span>
        </div>
        <span
          className={`text-xs font-mono font-extrabold px-2 py-0.5 rounded ${
            team2.winner ? 'bg-[#45F882] text-black' : 'text-gray-400'
          }`}
        >
          {team2.score}
        </span>
      </div>

      {/* Footer Inspect Cue */}
      <div className="mt-2.5 flex items-center justify-between text-[9px] font-mono text-gray-400 pt-2 border-t border-gray-800/60">
        <span>{time}</span>
        <span className="text-[#45F882] group-hover:underline flex items-center gap-0.5 font-bold">
          INSPECT <ChevronRight size={10} />
        </span>
      </div>
    </div>
  );
};

const TournamentBracketTree = ({ onInspectMatch }) => {
  return (
    <div className="w-full max-w-7xl mx-auto my-8 p-4 sm:p-8 rounded-3xl bg-[#080e16] border border-gray-800/90 shadow-2xl relative overflow-hidden">
      {/* Background Cyber Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#45F882 1px, transparent 1px), linear-gradient(90deg, #45F882 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Tree Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-8 pb-4 border-b border-gray-800/80">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#45F882]/10 border border-[#45F882]/30 text-[#45F882] text-xs font-mono mb-1">
            <Zap size={13} className="text-[#45F882]" />
            <span>PLAYOFF ELIMINATION BRACKET</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-orbitron font-extrabold text-white">
            Season 2026 Championship Tree
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
          <span className="w-2.5 h-2.5 rounded-full bg-[#45F882] animate-pulse" />
          <span>BO3 Elimination • Click any fixture to inspect</span>
        </div>
      </div>

      {/* Tree Grid Columns: Quarterfinals -> Semifinals -> Grand Final */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
        {/* Column 1: Quarterfinals */}
        <div className="space-y-4">
          <div className="text-center py-1.5 rounded-xl bg-[#0b131f] border border-gray-800 text-xs font-orbitron font-bold text-gray-300 uppercase tracking-wider">
            Quarterfinals (4 Matches)
          </div>
          <div className="space-y-3.5">
            {bracketData.quarterFinals.map((match) => (
              <BracketMatchCard
                key={match.id}
                match={match}
                onInspect={onInspectMatch}
              />
            ))}
          </div>
        </div>

        {/* Column 2: Semifinals */}
        <div className="space-y-4">
          <div className="text-center py-1.5 rounded-xl bg-[#0b131f] border border-gray-800 text-xs font-orbitron font-bold text-[#45F882] uppercase tracking-wider">
            Semifinals (2 Matches)
          </div>
          <div className="space-y-6 sm:space-y-12">
            {bracketData.semiFinals.map((match) => (
              <BracketMatchCard
                key={match.id}
                match={match}
                onInspect={onInspectMatch}
              />
            ))}
          </div>
        </div>

        {/* Column 3: Grand Final & Trophy Showcase */}
        <div className="space-y-4">
          <div className="text-center py-1.5 rounded-xl bg-gradient-to-r from-yellow-500/20 via-[#45F882]/20 to-yellow-500/20 border border-yellow-500/40 text-xs font-orbitron font-bold text-yellow-400 uppercase tracking-wider flex items-center justify-center gap-2">
            <Trophy size={14} className="text-yellow-400" />
            Grand Championship Final
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-[#131f13] to-[#0a121b] border-2 border-[#45F882] shadow-[0_0_35px_rgba(69,248,130,0.25)] relative">
            <div className="text-center mb-4">
              <span className="px-3 py-0.5 rounded-full bg-yellow-400/10 border border-yellow-400/40 text-yellow-400 font-mono text-[10px] font-bold uppercase tracking-wider">
                $250,000 GRAND PRIZE
              </span>
              <h4 className="text-base sm:text-lg font-orbitron font-extrabold text-white mt-2">
                WORLD CUP DECIDER
              </h4>
            </div>

            <BracketMatchCard
              match={bracketData.grandFinal}
              onInspect={onInspectMatch}
            />

            <div className="mt-4 p-3 rounded-xl bg-black/60 border border-gray-800 text-center">
              <p className="text-[10px] font-mono text-gray-400">
                OFFICIAL BROADCAST LIVESTREAM
              </p>
              <p className="text-xs font-orbitron font-bold text-[#45F882] mt-0.5">
                Warclub Arena Main Stage • London
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentBracketTree;
