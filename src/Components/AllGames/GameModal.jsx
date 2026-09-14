import React, { useEffect } from 'react';
import { FaStar, FaTimes, FaGamepad, FaTrophy, FaUsers, FaPlay, FaGoogle, FaExternalLinkAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const GameModal = ({ game, isOpen, onClose }) => {
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

  if (!isOpen || !game) return null;

  const { img, name, review, fee, description } = game;

  const formatFee = (val) => {
    if (val === undefined || val === null || val === '' || val === 0 || val === '0') return 'Free';
    const str = String(val).trim();
    if (str.toLowerCase() === 'free') return 'Free';
    return str.startsWith('$') ? str : `$${str}`;
  };

  const formattedFee = formatFee(fee);

  const handlePlayNow = () => {
    Swal.fire({
      title: `Launching ${name}!`,
      text: formattedFee !== 'Free' 
        ? `Entry fee of ${formattedFee} confirmed. Connecting to the competitive game server...`
        : 'Connecting to matchmaking server...',
      icon: 'success',
      background: '#1F2937',
      color: '#45F882',
      confirmButtonColor: '#45F882',
      timer: 2500,
      showConfirmButton: false,
    });
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 custom-modal-backdrop"
      style={{ zIndex: 99990 }}
      onClick={onClose}
    >
      <div 
        className="bg-[#0D151D] border border-green-500/40 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative custom-modal-content animate-in fade-in zoom-in-95 duration-200"
        style={{ zIndex: 99995 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image with gradient overlay */}
        <div className="relative h-64 w-full overflow-hidden bg-gray-900">
          <img 
            src={img || 'https://i.ibb.co/kBZy7RW/Baldurs-Gate-3.webp'} 
            alt={name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D151D] via-black/40 to-transparent" />
          
          <button 
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 bg-black/60 hover:bg-red-600/80 text-white rounded-full p-2.5 transition duration-200 border border-white/10"
          >
            <FaTimes size={16} />
          </button>

          <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end">
            <div>
              <span className="px-3 py-1 bg-[#45F882]/10 text-[#45F882] text-xs font-mono font-bold uppercase rounded-full border border-[#45F882]/30 shadow-[0_0_10px_rgba(69,248,130,0.2)]">
                ● Official Esports Title
              </span>
              <h2 className="text-3xl font-black font-orbitron text-white mt-1 drop-shadow-md tracking-wide">
                {name}
              </h2>
            </div>
            <div className="flex items-center gap-1.5 bg-black/70 px-3 py-1.5 rounded-xl border border-yellow-500/30">
              <FaStar className="text-yellow-400 text-sm" />
              <span className="text-white text-sm font-mono font-bold">4.9</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-[#131F2A] border border-gray-800 rounded-2xl p-3 text-center">
              <p className="text-gray-400 text-xs font-mono flex items-center justify-center gap-1 mb-1">
                <FaTrophy className="text-[#45F882]" /> Entry Fee
              </p>
              <p className="text-lg font-bold font-mono text-white">
                {formattedFee}
              </p>
            </div>

            <div className="bg-[#131F2A] border border-gray-800 rounded-2xl p-3 text-center">
              <p className="text-gray-400 text-xs font-mono flex items-center justify-center gap-1 mb-1">
                <FaUsers className="text-[#45F882]" /> Community
              </p>
              <p className="text-lg font-bold font-mono text-white">
                {review ? `${review}k Players` : '12.4k Players'}
              </p>
            </div>

            <div className="bg-[#131F2A] border border-gray-800 rounded-2xl p-3 text-center">
              <p className="text-gray-400 text-xs font-mono flex items-center justify-center gap-1 mb-1">
                <FaGamepad className="text-[#45F882]" /> Mode
              </p>
              <p className="text-sm font-bold font-orbitron text-[#45F882] mt-1">
                Ranked 128Hz
              </p>
            </div>
          </div>

          {/* Game Description */}
          <div>
            <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider mb-2">
              // ARENA MISSION BRIEF
            </h4>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-rajdhani">
              {description || 
                `${name} is a premier title on Warclub Esports. Compete in seasonal ladders, participate in high-stakes bracket tournaments, earn team prize pools, and rise through the global rankings with competitive matchmaking.`}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap sm:flex-nowrap gap-3 pt-2">
            <button 
              onClick={handlePlayNow}
              className="flex-1 py-3.5 px-6 bg-gradient-to-r from-[#45F882] to-[#27c760] text-black font-extrabold font-orbitron text-xs rounded-2xl shadow-[0_0_20px_rgba(69,248,130,0.3)] hover:brightness-110 active:scale-95 transition flex items-center justify-center gap-2 tracking-wider uppercase cursor-pointer"
            >
              <FaPlay size={12} /> ENTER MATCHMAKING
            </button>

            <a
              href={`https://www.google.com/search?q=${encodeURIComponent(name + ' official game')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-5 bg-[#0e1724] hover:bg-[#45F882] text-gray-200 hover:text-black border border-gray-700 hover:border-[#45F882] font-orbitron font-bold text-xs rounded-2xl transition flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <FaGoogle size={12} />
              <span>GOOGLE INTEL</span>
              <FaExternalLinkAlt size={9} />
            </a>

            <button 
              onClick={onClose}
              className="py-3.5 px-5 bg-gray-800/80 hover:bg-gray-700 text-gray-300 hover:text-white font-semibold text-xs rounded-2xl border border-gray-700 transition cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameModal;
