import React, { useEffect, useState } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
  Download,
  Share2,
  Camera,
  Maximize2,
  Calendar,
  Layers,
  Sparkles,
  Check,
} from 'lucide-react';
import Swal from 'sweetalert2';

const GalleryLightbox = ({
  images = [],
  currentIndex = 0,
  isOpen = false,
  onClose,
  onSelectIndex,
}) => {
  const [copied, setCopied] = useState(false);
  const [likes, setLikes] = useState({});

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, currentIndex, images]);

  if (!isOpen || images.length === 0) return null;

  const currentItem = images[currentIndex] || images[0];

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % images.length;
    onSelectIndex(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + images.length) % images.length;
    onSelectIndex(prevIdx);
  };

  const handleLike = () => {
    const id = currentItem.id;
    setLikes((prev) => ({
      ...prev,
      [id]: {
        count: (prev[id]?.count || currentItem.likes || 120) + (prev[id]?.userLiked ? -1 : 1),
        userLiked: !prev[id]?.userLiked,
      },
    }));
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(currentItem.src);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    Swal.fire({
      title: 'Image Link Copied!',
      text: 'High-res capture URL copied to clipboard.',
      icon: 'success',
      background: '#0B121A',
      color: '#45F882',
      confirmButtonColor: '#45F882',
      timer: 1800,
      showConfirmButton: false,
    });
  };

  const handleDownload = () => {
    window.open(currentItem.src, '_blank');
    Swal.fire({
      title: 'Opening High-Res Capture',
      text: 'Opening 4K master image in full resolution.',
      icon: 'info',
      background: '#0B121A',
      color: '#45F882',
      confirmButtonColor: '#45F882',
      timer: 2000,
      showConfirmButton: false,
    });
  };

  const currentLike = likes[currentItem.id] || {
    count: currentItem.likes || 142,
    userLiked: false,
  };

  return (
    <div
      className="fixed inset-0 z-[99995] bg-black/92 backdrop-blur-xl flex flex-col justify-between p-3 sm:p-6"
      onClick={onClose}
    >
      {/* Top HUD Header Bar */}
      <div
        className="flex items-center justify-between gap-4 w-full max-w-6xl mx-auto z-10 py-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-[#45F882]/15 border border-[#45F882]/40 text-[#45F882] text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase">
            {currentItem.category || 'ARENA MEDIA'}
          </span>
          <span className="text-gray-400 font-mono text-xs">
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Like Button */}
          <button
            onClick={handleLike}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono transition ${
              currentLike.userLiked
                ? 'bg-red-500/20 border-red-500 text-red-400'
                : 'bg-gray-900/80 border-gray-800 text-gray-300 hover:text-white hover:border-[#45F882]'
            }`}
          >
            <Heart size={14} className={currentLike.userLiked ? 'fill-red-400' : ''} />
            <span>{currentLike.count}</span>
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="p-2 rounded-lg bg-gray-900/80 border border-gray-800 text-gray-300 hover:text-[#45F882] hover:border-[#45F882] transition"
            title="Share"
          >
            {copied ? <Check size={16} className="text-[#45F882]" /> : <Share2 size={16} />}
          </button>

          {/* Download Original */}
          <button
            onClick={handleDownload}
            className="p-2 rounded-lg bg-gray-900/80 border border-gray-800 text-gray-300 hover:text-[#45F882] hover:border-[#45F882] transition"
            title="Open 4K Master"
          >
            <Download size={16} />
          </button>

          {/* Close Lightbox */}
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-gray-900/80 border border-gray-800 text-gray-400 hover:text-white hover:border-[#45F882] transition ml-2"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Center Display Area with Prev/Next Navigation */}
      <div
        className="relative flex-1 flex items-center justify-center max-w-6xl w-full mx-auto my-auto overflow-hidden px-2 sm:px-12"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous image"
          className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/70 border border-gray-800 text-white hover:bg-[#45F882] hover:text-black hover:border-[#45F882] transition cursor-pointer shadow-lg active:scale-95"
        >
          <ChevronLeft size={22} />
        </button>

        {/* High-Resolution Main Image Frame */}
        <div className="relative max-h-[72vh] max-w-full rounded-2xl overflow-hidden border border-[#45F882]/40 shadow-[0_0_50px_rgba(69,248,130,0.2)] group">
          <img
            src={currentItem.src}
            alt={currentItem.title || 'Warclub Media Capture'}
            className="max-h-[72vh] w-auto object-contain rounded-2xl transition duration-300"
          />

          {/* Corner Cyber HUD Accents */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#45F882] pointer-events-none" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#45F882] pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#45F882] pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#45F882] pointer-events-none" />
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          aria-label="Next image"
          className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/70 border border-gray-800 text-white hover:bg-[#45F882] hover:text-black hover:border-[#45F882] transition cursor-pointer shadow-lg active:scale-95"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Bottom Metadata Panel */}
      <div
        className="w-full max-w-4xl mx-auto z-10 bg-[#0a121c]/90 border border-gray-800/90 rounded-2xl p-4 sm:p-5 backdrop-blur-md shadow-2xl mt-3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-base sm:text-xl font-orbitron font-extrabold text-white">
              {currentItem.title || 'Championship Battleground'}
            </h3>
            <p className="text-xs text-gray-400 font-rajdhani mt-0.5">
              {currentItem.subtitle || 'Live broadcast capture from official Warclub esports circuit'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs font-mono text-gray-300">
            <span className="px-2.5 py-1 rounded-md bg-black/60 border border-gray-800 flex items-center gap-1">
              <Camera size={12} className="text-[#45F882]" />
              {currentItem.event || 'STAGE A // CAMERA 04'}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-black/60 border border-gray-800 flex items-center gap-1">
              <Maximize2 size={12} className="text-[#45F882]" />
              {currentItem.res || '3840 x 2160 (4K)'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryLightbox;
