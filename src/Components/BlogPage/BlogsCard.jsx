import React from 'react';
import { Calendar, MessageCircle, User, Clock, Heart, Share2, ArrowRight } from 'lucide-react';
import '../Styles/blogCard.css';

const BlogsCard = ({ blog, onReadMore, onLike, isLiked = false, likesCount = 12, onShare }) => {
  const { title, description, description2, image } = blog || {};

  const splitDescription = (text, wordsPerLine) => {
    const words = text?.split(' ') || [];
    const lines = [];
    for (let i = 0; i < words.length; i += wordsPerLine) {
      lines.push(words.slice(i, i + wordsPerLine).join(' '));
    }
    return lines.slice(0, 2);
  };

  const descriptionLines = splitDescription(description2 || description, 14);

  return (
    <div className="blog_card mb-8 lg:mx-0 md:mx-6 mx-4 group relative overflow-hidden transition-all duration-300 hover:border-[#45F882]/50 hover:shadow-[0_10px_30px_rgba(69,248,130,0.15)]">
      {/* Top Corner Glowing Accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#45F882]/5 rounded-bl-full pointer-events-none transition group-hover:bg-[#45F882]/15" />

      {/* Card Image Area with Badges */}
      <div
        className="blog_card-image relative cursor-pointer overflow-hidden rounded-2xl"
        onClick={() => onReadMore && onReadMore(blog)}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-[240px] sm:h-[300px] md:h-[340px] object-cover rounded-2xl transition duration-500 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B121A] via-transparent to-transparent opacity-80" />

        {/* Badges Over Image */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-[#080d14]/90 border border-[#45F882]/40 text-[#45F882] text-[10px] font-mono font-bold tracking-wider uppercase backdrop-blur-md shadow-md">
            ESPORTS INTEL
          </span>
        </div>

        <div className="absolute top-3.5 right-3.5">
          <span className="px-2.5 py-1 rounded-full bg-black/80 border border-gray-700 text-gray-300 text-[10px] font-mono flex items-center gap-1 backdrop-blur-md">
            <Clock size={11} className="text-[#45F882]" /> 4 MIN READ
          </span>
        </div>
      </div>

      {/* Author & Telemetry Row */}
      <div className="flex flex-wrap items-center gap-3 mt-4 text-xs font-mono text-gray-400">
        <div className="flex items-center gap-1 hover:text-[#45F882] transition">
          <User size={14} className="text-[#45F882]" />
          <span>By Warclub HQ</span>
        </div>
        <span className="text-gray-700">•</span>
        <div className="flex items-center gap-1 hover:text-[#45F882] transition">
          <Calendar size={14} className="text-[#45F882]" />
          <span>Sep 2026</span>
        </div>
        <span className="text-gray-700">•</span>
        <div className="flex items-center gap-1 hover:text-[#45F882] transition">
          <MessageCircle size={14} className="text-[#45F882]" />
          <span>3 Comments</span>
        </div>
      </div>

      {/* Title */}
      <h3
        onClick={() => onReadMore && onReadMore(blog)}
        className="font-orbitron font-bold text-xl sm:text-2xl text-white mt-3 leading-snug cursor-pointer group-hover:text-[#45F882] transition duration-200 line-clamp-2"
      >
        {title}
      </h3>

      {/* Excerpt Body */}
      <div className="text-gray-300 text-sm font-rajdhani mt-2.5 leading-relaxed line-clamp-2">
        {descriptionLines.length > 0 ? (
          descriptionLines.map((line, index) => <p key={index}>{line}</p>)
        ) : (
          <p>{description}</p>
        )}
      </div>

      {/* Action Footer */}
      <div className="mt-5 pt-4 border-t border-gray-800/80 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {/* Heart / Like Button */}
          <button
            onClick={() => onLike && onLike(blog)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono transition cursor-pointer ${
              isLiked
                ? 'bg-red-500/20 border-red-500/50 text-red-400'
                : 'bg-[#0B131D] border-gray-800 text-gray-400 hover:text-white hover:border-[#45F882]'
            }`}
            title="Like Dispatch"
          >
            <Heart size={13} className={isLiked ? 'fill-red-400' : ''} />
            <span>{likesCount}</span>
          </button>

          {/* Share Button */}
          <button
            onClick={() => onShare && onShare(blog)}
            className="p-1.5 rounded-lg bg-[#0B131D] border border-gray-800 text-gray-400 hover:text-[#45F882] hover:border-[#45F882] transition cursor-pointer"
            title="Share Dispatch"
          >
            <Share2 size={14} />
          </button>
        </div>

        {/* Read Intel Action Button */}
        <button
          onClick={() => onReadMore && onReadMore(blog)}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#45F882] to-[#27c760] text-black font-orbitron font-extrabold text-xs tracking-wider uppercase hover:brightness-110 active:scale-95 transition shadow-[0_0_12px_rgba(69,248,130,0.3)] cursor-pointer"
        >
          <span>READ INTEL</span>
          <ArrowRight size={13} />
        </button>
      </div>
    </div>
  );
};

export default BlogsCard;
