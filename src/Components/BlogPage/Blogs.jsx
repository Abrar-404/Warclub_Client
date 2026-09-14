import React, { useEffect, useState } from 'react';
import PageBanner from '../Common/PageBanner';
import BlogsCard from './BlogsCard';
import BlogReaderModal from './BlogReaderModal';
import '../Styles/blogCard.css';
import '../Styles/categoryBtn.css';
import { Search, X, Flame, ShieldAlert, Sparkles, SlidersHorizontal } from 'lucide-react';
import { apiFetch } from '../../Config/apiConfig';
import Footer from '../Footer/Footer';
import Swal from 'sweetalert2';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeBlog, setActiveBlog] = useState(null);
  const [likesState, setLikesState] = useState(() => {
    try {
      const saved = localStorage.getItem('warclub_blog_likes');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    apiFetch('/blogs')
      .then((res) => res.json())
      .then((data) => setBlogs(Array.isArray(data) ? data : []))
      .catch((err) => console.error('Error fetching blogs:', err));
  }, []);

  const handleLike = (blog) => {
    if (!blog?._id) return;
    setLikesState((prev) => {
      const current = prev[blog._id] || { count: 14, userLiked: false };
      const updated = {
        ...prev,
        [blog._id]: {
          count: current.userLiked ? current.count - 1 : current.count + 1,
          userLiked: !current.userLiked,
        },
      };
      try {
        localStorage.setItem('warclub_blog_likes', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  const handleShare = (blog) => {
    navigator.clipboard?.writeText(window.location.href);
    Swal.fire({
      title: 'Dispatch Link Copied!',
      text: `Link to "${blog.title}" copied to clipboard.`,
      icon: 'success',
      background: '#0B121A',
      color: '#45F882',
      confirmButtonColor: '#45F882',
      timer: 1800,
      showConfirmButton: false,
    });
  };

  const categories = [
    'All',
    'Gaming',
    'Fantasy',
    'Live Games',
    'MX-Xbox',
    'Shooting',
    'Uncategorized',
  ];

  const getCategoryCount = (cat) => {
    if (cat === 'All') return blogs.length;
    return blogs.filter(
      (b) =>
        b.title?.toLowerCase().includes(cat.toLowerCase()) ||
        b.description?.toLowerCase().includes(cat.toLowerCase()) ||
        b.description2?.toLowerCase().includes(cat.toLowerCase())
    ).length;
  };

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      !searchTerm ||
      blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description2?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' ||
      blog.title?.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      blog.description?.toLowerCase().includes(selectedCategory.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  const featuredBlog = blogs.length > 0 ? blogs[0] : null;

  return (
    <div>
      {/* Cybernetic Page Banner */}
      <PageBanner
        badge="TACTICAL BROADCAST // META REPORTS"
        title="ESPORTS"
        highlight="DISPATCH & INTEL"
        subtitle="Official patch notes, tournament analysis, clan roster changes, and competitive strategy guides."
        breadcrumb="Blogs & News"
        stats={[
          { label: 'DISPATCHES', value: `${blogs.length || 6}+ POSTS` },
          { label: 'META VERSION', value: 'v2.6.4' },
          { label: 'FREQUENCY', value: 'DAILY' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 mt-12 md:mt-16">
        {/* Featured Spotlight Article */}
        {featuredBlog && !searchTerm && selectedCategory === 'All' && (
          <div className="mb-14 relative rounded-3xl overflow-hidden border border-[#45F882]/40 bg-gradient-to-r from-[#070e17] via-[#0b1726] to-[#070e17] shadow-[0_15px_40px_rgba(0,0,0,0.8)] p-6 md:p-8">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#45F882]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#45F882] to-transparent" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#45F882]/15 border border-[#45F882]/40 text-[#45F882] text-xs font-mono font-bold">
                  <Flame size={14} className="text-[#45F882]" />
                  <span>FEATURED META SPOTLIGHT // CLASSIFIED</span>
                </div>

                <h2
                  onClick={() => setActiveBlog(featuredBlog)}
                  className="text-2xl sm:text-3xl md:text-4xl font-orbitron font-extrabold text-white leading-tight cursor-pointer hover:text-[#45F882] transition duration-200"
                >
                  {featuredBlog.title}
                </h2>

                <p className="text-gray-300 font-rajdhani text-sm sm:text-base leading-relaxed line-clamp-3">
                  {featuredBlog.description ||
                    'Full competitive meta briefing detailing game mechanics, map control protocols, and weapons tuning for upcoming major tournaments.'}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => setActiveBlog(featuredBlog)}
                    className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#45F882] to-[#27c760] text-black font-orbitron font-extrabold text-xs tracking-wider uppercase hover:brightness-110 active:scale-95 shadow-[0_0_20px_rgba(69,248,130,0.4)] transition cursor-pointer"
                  >
                    READ FULL DISPATCH
                  </button>

                  <span className="text-xs font-mono text-gray-400">
                    ⏱️ 5 MIN READ • OFFICIAL WARCLUB DESK
                  </span>
                </div>
              </div>

              <div
                className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-gray-800 cursor-pointer group"
                onClick={() => setActiveBlog(featuredBlog)}
              >
                <img
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                  className="w-full h-[260px] sm:h-[320px] object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 right-3 text-[10px] font-mono font-bold text-black bg-[#45F882] px-2.5 py-0.5 rounded-full">
                  TOP STORY
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Main 2-Column Content Layout: Left Feed, Right Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Blog Feed (8 cols on lg) */}
          <div className="lg:col-span-8 order-2 lg:order-1">
            {/* Results Filter Telemetry Bar */}
            <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-800">
              <div className="flex items-center gap-2">
                <span className="text-xs font-orbitron font-bold text-[#45F882] uppercase tracking-wider">
                  {selectedCategory === 'All' ? 'ALL DISPATCHES' : selectedCategory}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-gray-800 text-[10px] font-mono text-gray-300">
                  {filteredBlogs.length} results
                </span>
              </div>

              {(searchTerm || selectedCategory !== 'All') && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="text-xs font-mono text-[#45F882] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <X size={12} /> Reset Filters
                </button>
              )}
            </div>

            {/* Articles List */}
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => {
                const likeInfo = likesState[blog._id] || { count: 14, userLiked: false };
                return (
                  <BlogsCard
                    key={blog._id || blog.title}
                    blog={blog}
                    onReadMore={() => setActiveBlog(blog)}
                    onLike={() => handleLike(blog)}
                    isLiked={likeInfo.userLiked}
                    likesCount={likeInfo.count}
                    onShare={() => handleShare(blog)}
                  />
                );
              })
            ) : (
              <div className="text-center p-12 bg-[#0B121A] rounded-3xl border border-gray-800 text-gray-400 max-w-xl mx-auto my-8">
                <ShieldAlert size={36} className="text-[#45F882] mx-auto mb-3" />
                <p className="text-lg font-orbitron font-bold text-white mb-2">
                  No Intel Dispatches Found
                </p>
                <p className="text-sm font-rajdhani mb-5">
                  No tactical articles match &quot;{searchTerm || selectedCategory}&quot;
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="px-5 py-2.5 bg-[#45F882] text-black font-orbitron font-extrabold text-xs rounded-xl hover:brightness-110 transition cursor-pointer"
                >
                  RESET ALL FILTERS
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Search & Categories Sidebar (4 cols on lg) */}
          <div className="lg:col-span-4 order-1 lg:order-2 space-y-6">
            {/* Cyber Search Card */}
            <div className="p-5 rounded-2xl bg-[#090f18] border border-gray-800 shadow-lg">
              <h3 className="text-sm font-orbitron font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <Search size={16} className="text-[#45F882]" /> Search Intel
              </h3>

              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Filter by title, keywords..."
                  className="w-full bg-[#0d1624] border border-gray-800 focus:border-[#45F882] rounded-xl py-3 pl-4 pr-10 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none transition"
                />
                {searchTerm ? (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    <X size={16} />
                  </button>
                ) : (
                  <Search
                    size={16}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                  />
                )}
              </div>
            </div>

            {/* Tactical Categories Hub */}
            <div className="p-5 rounded-2xl bg-[#090f18] border border-gray-800 shadow-lg">
              <h3 className="text-sm font-orbitron font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                <SlidersHorizontal size={16} className="text-[#45F882]" />
                Dispatch Categories
              </h3>
              <div className="h-[2px] w-full bg-gradient-to-r from-[#45F882] via-[#27c760] to-transparent rounded-full mb-4" />

              <div className="space-y-2">
                {categories.map((cat) => {
                  const count = getCategoryCount(cat);
                  const isSelected = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs font-mono transition duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-[#45F882]/15 border-[#45F882] text-white font-bold shadow-[0_0_15px_rgba(69,248,130,0.2)]'
                          : 'bg-[#0b1320] border-gray-800/80 text-gray-300 hover:text-white hover:border-[#45F882]/40 hover:bg-[#0f1a2a]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isSelected ? 'bg-[#45F882] animate-pulse' : 'bg-gray-600'
                          }`}
                        />
                        <span className="uppercase">{cat}</span>
                      </div>
                      <span
                        className={`px-2 py-0.5 rounded-md text-[10px] font-mono ${
                          isSelected
                            ? 'bg-[#45F882] text-black font-bold'
                            : 'bg-black/50 text-gray-400'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Newsletter / Intel Dispatch Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0c1624] to-[#080d16] border border-[#45F882]/30 shadow-lg relative overflow-hidden">
              <div className="flex items-center gap-2 mb-2 text-[#45F882]">
                <Sparkles size={16} />
                <span className="text-xs font-orbitron font-bold uppercase tracking-wider">
                  WARCLUB VIP BRIEFING
                </span>
              </div>
              <h4 className="text-white font-orbitron font-bold text-sm mb-1">
                Receive Tournament Intel
              </h4>
              <p className="text-gray-400 text-xs font-rajdhani mb-3">
                Direct transmission of tournament brackets, prize updates, and meta analysis directly to your comms.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="operator@warclub.gg"
                  className="flex-1 bg-[#070b13] border border-gray-800 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#45F882]"
                />
                <button
                  onClick={() => {
                    Swal.fire({
                      title: 'Subscribed to VIP Feed!',
                      text: 'Daily meta dispatches will be transmitted to your email.',
                      icon: 'success',
                      background: '#0B121A',
                      color: '#45F882',
                      confirmButtonColor: '#45F882',
                    });
                  }}
                  className="px-3 py-2 rounded-lg bg-[#45F882] text-black font-orbitron font-bold text-xs hover:brightness-110 transition cursor-pointer"
                >
                  JOIN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Fullscreen Dispatch Reader Modal */}
      <BlogReaderModal
        blog={activeBlog}
        isOpen={Boolean(activeBlog)}
        onClose={() => setActiveBlog(null)}
        onLike={() => activeBlog && handleLike(activeBlog)}
        isLiked={activeBlog ? likesState[activeBlog._id]?.userLiked : false}
        likesCount={activeBlog ? likesState[activeBlog._id]?.count || 14 : 14}
      />

      <div className="mt-20 md:mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default Blogs;
