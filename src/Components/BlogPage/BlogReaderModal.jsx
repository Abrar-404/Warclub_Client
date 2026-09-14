import React, { useEffect, useState } from 'react';
import {
  X,
  Calendar,
  User,
  Clock,
  Heart,
  Share2,
  MessageSquare,
  Send,
  Check,
  Bookmark,
  ShieldCheck,
} from 'lucide-react';
import Swal from 'sweetalert2';

const BlogReaderModal = ({ blog, isOpen, onClose, onLike, isLiked, likesCount }) => {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'CyberPhantom_99',
      avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&auto=format&fit=crop&q=80',
      time: '2 hours ago',
      text: 'Insane meta breakdown! The patch adjustments to weapon spray patterns changed our entire scrim strategy yesterday.',
    },
    {
      id: 2,
      author: 'Valkyrie_Queen',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      time: '5 hours ago',
      text: 'Warclub analysis is always on point. Looking forward to testing these tournament comps this weekend.',
    },
  ]);
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

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

  if (!isOpen || !blog) return null;

  const {
    title = 'Tactical Meta Dispatch',
    description = '',
    description2 = '',
    image = '',
    category = 'Gaming',
    date = 'September 14, 2026',
    author = 'Warclub Editorial',
  } = blog;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    Swal.fire({
      title: 'Intel Copied!',
      text: 'Article dispatch link copied to clipboard.',
      icon: 'success',
      background: '#0c141f',
      color: '#45F882',
      confirmButtonColor: '#45F882',
      timer: 1800,
      showConfirmButton: false,
    });
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const commentObj = {
      id: Date.now(),
      author: 'Tactical Operator',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
      time: 'Just now',
      text: newComment.trim(),
    };

    setComments([commentObj, ...comments]);
    setNewComment('');
  };

  return (
    <div
      className="fixed inset-0 z-[99990] bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-[#090f18] border border-[#45F882]/40 rounded-2xl md:rounded-3xl max-w-4xl w-full my-auto max-h-[92vh] overflow-y-auto shadow-[0_0_50px_rgba(0,0,0,0.9)] text-white p-5 sm:p-8 custom-scrollbar animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glowing Top Accent Line */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#45F882] to-transparent" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close reader"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-gray-900/80 border border-gray-800 text-gray-400 hover:text-white hover:border-[#45F882] transition"
        >
          <X size={18} />
        </button>

        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          <span className="px-3 py-1 rounded-full bg-[#45F882]/10 border border-[#45F882]/40 text-[#45F882] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider">
            {category || 'TACTICAL INTEL'}
          </span>
          <span className="flex items-center gap-1 text-gray-400 text-xs font-mono">
            <Clock size={12} className="text-[#45F882]" /> 4 MIN READ
          </span>
          <span className="flex items-center gap-1 text-gray-400 text-xs font-mono">
            <Calendar size={12} className="text-[#45F882]" /> {date}
          </span>
        </div>

        {/* Article Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-orbitron font-extrabold text-white leading-tight mb-4 pr-8">
          {title}
        </h2>

        {/* Author & Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-3.5 px-4 rounded-xl bg-[#0e1724] border border-gray-800/80 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-800 border border-[#45F882]/40 flex items-center justify-center font-bold text-[#45F882] text-sm overflow-hidden">
              <User size={18} />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-orbitron font-bold text-sm text-white">
                  {author}
                </span>
                <ShieldCheck size={14} className="text-[#45F882]" />
              </div>
              <span className="text-[10px] text-gray-400 font-mono">Verified Warclub Analyst</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onLike}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono transition ${
                isLiked
                  ? 'bg-red-500/20 border-red-500 text-red-400'
                  : 'bg-gray-900 border-gray-800 text-gray-300 hover:text-white hover:border-[#45F882]'
              }`}
            >
              <Heart size={14} className={isLiked ? 'fill-red-400' : ''} />
              <span>{likesCount}</span>
            </button>

            <button
              onClick={() => setSaved(!saved)}
              className={`p-2 rounded-lg border text-xs transition ${
                saved
                  ? 'bg-[#45F882]/20 border-[#45F882] text-[#45F882]'
                  : 'bg-gray-900 border-gray-800 text-gray-300 hover:text-white'
              }`}
              title="Bookmark Dispatch"
            >
              <Bookmark size={14} className={saved ? 'fill-[#45F882]' : ''} />
            </button>

            <button
              onClick={handleShare}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gray-900 border border-gray-800 text-xs text-gray-300 hover:text-[#45F882] hover:border-[#45F882] transition"
              title="Share Dispatch"
            >
              {copied ? <Check size={14} className="text-[#45F882]" /> : <Share2 size={14} />}
              <span className="hidden sm:inline">{copied ? 'COPIED' : 'SHARE'}</span>
            </button>
          </div>
        </div>

        {/* Featured Image */}
        {image && (
          <div className="relative rounded-2xl overflow-hidden border border-gray-800 mb-6 group">
            <img
              src={image}
              alt={title}
              className="w-full max-h-[420px] object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090f18] via-transparent to-transparent opacity-80" />
            <span className="absolute bottom-3 left-4 text-[10px] font-mono text-gray-400 bg-black/70 px-2.5 py-1 rounded-md border border-gray-800">
              WARCLUB OFFICIAL MEDIA STREAM // ARCHIVE CAPTURE
            </span>
          </div>
        )}

        {/* Article Body Content */}
        <div className="prose prose-invert max-w-none text-gray-300 font-rajdhani text-base md:text-lg leading-relaxed space-y-4 mb-8">
          <p className="text-white text-lg md:text-xl font-medium leading-relaxed border-l-4 border-[#45F882] pl-4 py-1 italic bg-[#45F882]/5 rounded-r-lg">
            {description || 'The competitive gaming landscape continues its aggressive evolution with deep balance shifts, tournament roster shakeups, and technological upgrades.'}
          </p>

          <p>
            {description2 ||
              'Across multiple competitive leagues this season, data telemetry indicates unprecedented tactical adjustments. Pro squads are prioritizing high-mobility line-ups and aggressive map control protocols to counter traditional defensive setups.'}
          </p>

          {/* Tactical Takeaways Box */}
          <div className="my-6 p-5 rounded-2xl bg-[#0c1420] border border-[#45F882]/30 space-y-2">
            <h4 className="text-white font-orbitron font-bold text-sm tracking-wider uppercase text-[#45F882] flex items-center gap-2">
              <ShieldCheck size={16} /> Key Tactical Takeaways
            </h4>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 font-rajdhani">
              <li>Sub-12ms tickrate network servers deployed across all major tournament brackets.</li>
              <li>Weapon balance changes significantly alter opening round pistol / economy decisions.</li>
              <li>Upcoming prize pool distribution guarantees maximum rewards for top-4 qualifying clans.</li>
            </ul>
          </div>

          <p>
            As the season heats up toward the World Finals, fans can expect comprehensive real-time bracket telemetry, caster commentary, and tournament replays distributed across Warclub channels. Stay locked to this dispatch feed for real-time meta briefings.
          </p>
        </div>

        {/* Comments Section */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare size={18} className="text-[#45F882]" />
            <h3 className="text-lg font-orbitron font-bold text-white">
              Tactical Discussion ({comments.length})
            </h3>
          </div>

          {/* Post New Comment Form */}
          <form onSubmit={handleAddComment} className="flex gap-2.5 mb-6">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Transmit your thoughts or tactical feedback..."
              className="flex-1 bg-[#0e1724] border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#45F882] transition"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#45F882] to-[#2ecc71] text-black font-orbitron font-bold text-xs flex items-center gap-1.5 hover:brightness-110 active:scale-95 transition"
            >
              <Send size={13} />
              <span className="hidden sm:inline">POST</span>
            </button>
          </form>

          {/* Comments List */}
          <div className="space-y-3">
            {comments.map((comm) => (
              <div
                key={comm.id}
                className="p-3.5 rounded-xl bg-[#0c1420] border border-gray-800/80 flex items-start gap-3"
              >
                <img
                  src={comm.avatar}
                  alt={comm.author}
                  className="w-8 h-8 rounded-full object-cover border border-[#45F882]/30 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-orbitron font-bold text-white">
                      {comm.author}
                    </span>
                    <span className="text-[10px] font-mono text-gray-500">
                      {comm.time}
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 font-rajdhani leading-relaxed">
                    {comm.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogReaderModal;
