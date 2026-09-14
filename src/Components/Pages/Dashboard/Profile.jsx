import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import {
  User,
  Mail,
  Shield,
  LogOut,
  ArrowLeft,
  Gamepad2,
  Trophy,
  BookOpen,
  PlusCircle,
  Award,
  Zap,
  Flame,
} from 'lucide-react';
import AddGameModal from '../../AllGames/AddGameModal';
import Footer from '../../Footer/Footer';
import PageBanner from '../../Common/PageBanner';

const Profile = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isAddGameOpen, setIsAddGameOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleLogOut = () => {
    if (userLogOut) {
      userLogOut()
        .then(() => {
          localStorage.removeItem('access-token');
          navigate('/');
        })
        .catch((err) => console.error('Logout error:', err));
    }
  };

  return (
    <div className="min-h-screen text-white">
      {/* Header Banner */}
      <PageBanner
        badge="AUTHENTICATED OPERATOR // COMMAND CENTER"
        title="PLAYER"
        highlight="DASHBOARD & PROFILE"
        subtitle="Manage your enlisted games, tournament credentials, match stats, and squad affiliations."
        breadcrumb="Dashboard"
        stats={[
          { label: 'COMPETITIVE TIER', value: 'DIAMOND II' },
          { label: 'WIN RATE', value: '68.4%' },
          { label: 'OPERATOR STATUS', value: 'VERIFIED' },
        ]}
      />

      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-[#0f1722]/90 border border-green-500/30 rounded-3xl p-6 md:p-10 shadow-2xl backdrop-blur-sm">
          {/* User Header */}
          <div className="flex flex-col md:flex-row items-center gap-6 pb-8 border-b border-gray-800">
            <div className="avatar">
              <div className="w-28 h-28 rounded-full ring-4 ring-[#45F882] ring-offset-base-100 ring-offset-2 overflow-hidden bg-slate-800 flex items-center justify-center shadow-xl">
                {user?.photoURL && !imageError ? (
                  <img
                    src={user.photoURL}
                    alt={user?.displayName || 'User'}
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="object-cover w-full h-full"
                  />
                ) : user?.displayName ? (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-[#45F882] font-orbitron font-bold text-3xl select-none">
                    {user.displayName.charAt(0).toUpperCase()}
                  </div>
                ) : (
                  <User size={48} className="text-[#45F882]" />
                )}
              </div>
            </div>

            <div className="text-center md:text-left flex-1">
              <h2 className="text-3xl font-extrabold text-white mb-1">
                {user?.displayName || 'Pro Gamer'}
              </h2>
              <p className="text-gray-400 flex items-center justify-center md:justify-start gap-2 mb-3 text-sm">
                <Mail size={16} className="text-[#45F882]" />{' '}
                {user?.email || 'player@warclub.gg'}
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-950/60 border border-green-700/50 rounded-full text-xs font-semibold text-[#45F882]">
                <Shield size={14} /> Active Warclub Member
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setIsAddGameOpen(true)}
                className="flex items-center gap-2 px-5 py-2.5 bg-[#45F882] hover:bg-green-400 text-black font-bold text-xs rounded-xl shadow-lg shadow-green-500/20 transition duration-200"
              >
                <PlusCircle size={16} /> Add Game
              </button>

              <button
                onClick={handleLogOut}
                className="flex items-center gap-2 px-5 py-2.5 bg-red-600/20 hover:bg-red-600/40 border border-red-500/50 text-red-400 rounded-xl transition duration-200 text-xs font-semibold"
              >
                <LogOut size={16} /> Logout
              </button>
            </div>
          </div>

          {/* Esports Player Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            <div className="p-4 bg-gray-900/60 border border-gray-800 rounded-2xl text-center">
              <Flame className="text-[#45F882] mx-auto mb-1" size={20} />
              <p className="text-xs text-gray-400">Competitive Tier</p>
              <p className="text-lg font-black text-white mt-0.5">Diamond II</p>
            </div>

            <div className="p-4 bg-gray-900/60 border border-gray-800 rounded-2xl text-center">
              <Zap className="text-[#45F882] mx-auto mb-1" size={20} />
              <p className="text-xs text-gray-400">Matches Played</p>
              <p className="text-lg font-black text-white mt-0.5">142 Sets</p>
            </div>

            <div className="p-4 bg-gray-900/60 border border-gray-800 rounded-2xl text-center">
              <Award className="text-[#45F882] mx-auto mb-1" size={20} />
              <p className="text-xs text-gray-400">Win Rate</p>
              <p className="text-lg font-black text-white mt-0.5">68.4%</p>
            </div>

            <div className="p-4 bg-gray-900/60 border border-gray-800 rounded-2xl text-center">
              <Trophy className="text-[#45F882] mx-auto mb-1" size={20} />
              <p className="text-xs text-gray-400">Tournament Cups</p>
              <p className="text-lg font-black text-white mt-0.5">5 Trophies</p>
            </div>
          </div>

          {/* Quick Actions / Shortcuts */}
          <div className="mt-10">
            <h3 className="text-lg font-bold text-white mb-4">
              Player Hub Navigation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                to="/allGames"
                className="flex items-center gap-4 p-4 bg-gray-900/60 hover:bg-gray-800/80 border border-gray-800 hover:border-[#45F882] rounded-2xl transition duration-200 group"
              >
                <div className="p-3 bg-green-500/10 text-[#45F882] rounded-xl group-hover:bg-[#45F882] group-hover:text-black transition">
                  <Gamepad2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Browse Games</h4>
                  <p className="text-xs text-gray-400">Explore full library</p>
                </div>
              </Link>

              <Link
                to="/tournament"
                className="flex items-center gap-4 p-4 bg-gray-900/60 hover:bg-gray-800/80 border border-gray-800 hover:border-[#45F882] rounded-2xl transition duration-200 group"
              >
                <div className="p-3 bg-green-500/10 text-[#45F882] rounded-xl group-hover:bg-[#45F882] group-hover:text-black transition">
                  <Trophy size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Active Tournaments</h4>
                  <p className="text-xs text-gray-400">View upcoming matches</p>
                </div>
              </Link>

              <Link
                to="/blogs"
                className="flex items-center gap-4 p-4 bg-gray-900/60 hover:bg-gray-800/80 border border-gray-800 hover:border-[#45F882] rounded-2xl transition duration-200 group"
              >
                <div className="p-3 bg-green-500/10 text-[#45F882] rounded-xl group-hover:bg-[#45F882] group-hover:text-black transition">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Esports Articles</h4>
                  <p className="text-xs text-gray-400">Read meta reports</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-10 pt-6 border-t border-gray-800 flex justify-between items-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#45F882] text-sm transition duration-200"
            >
              <ArrowLeft size={16} /> Back to Homepage
            </Link>
          </div>
        </div>
      </div>

      {/* Add Game Modal */}
      <AddGameModal
        isOpen={isAddGameOpen}
        onClose={() => setIsAddGameOpen(false)}
      />

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
