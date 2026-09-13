import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Shield, LogOut, ArrowLeft, Gamepad2, Trophy, BookOpen } from 'lucide-react';
import aboutBg from '../../../assets/aboutusbg.png';

const Profile = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    if (userLogOut) {
      userLogOut()
        .then(() => navigate('/'))
        .catch(err => console.error('Logout error:', err));
    }
  };

  return (
    <div className="min-h-screen bg-[#080E14] text-white">
      {/* Header Banner */}
      <div
        className="w-full bg-cover bg-center py-24 text-center relative"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-2">User Profile & Dashboard</h1>
          <p className="text-gray-300">Welcome to your Warclub player account</p>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-[#0f1722] border border-gray-800 rounded-2xl p-8 shadow-2xl">
          {/* User Header */}
          <div className="flex flex-col md:flex-row items-center gap-6 pb-8 border-b border-gray-800">
            <div className="avatar">
              <div className="w-28 h-28 rounded-full ring-4 ring-[#45F882] ring-offset-base-100 ring-offset-2 overflow-hidden bg-slate-700 flex items-center justify-center">
                {user?.photoURL ? (
                  <img src={user.photoURL} alt={user?.displayName || 'User'} className="object-cover w-full h-full" />
                ) : (
                  <User size={48} className="text-[#45F882]" />
                )}
              </div>
            </div>

            <div className="text-center md:text-left flex-1">
              <h2 className="text-2xl font-bold text-white mb-1">
                {user?.displayName || 'Player One'}
              </h2>
              <p className="text-gray-400 flex items-center justify-center md:justify-start gap-2 mb-2">
                <Mail size={16} className="text-[#45F882]" /> {user?.email || 'No email provided'}
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-950/60 border border-green-700/50 rounded-full text-xs text-[#45F882]">
                <Shield size={14} /> Active Warclub Member
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={handleLogOut}
                className="flex items-center gap-2 px-5 py-2.5 bg-red-600/20 hover:bg-red-600/40 border border-red-500/50 text-red-400 rounded-xl transition duration-200"
              >
                <LogOut size={16} /> Logout
              </button>
            </div>
          </div>

          {/* Quick Actions / Shortcuts */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Navigation</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                to="/allGames"
                className="flex items-center gap-4 p-4 bg-gray-900/60 hover:bg-gray-800/80 border border-gray-800 hover:border-[#45F882] rounded-xl transition duration-200 group"
              >
                <div className="p-3 bg-green-500/10 text-[#45F882] rounded-lg group-hover:bg-[#45F882] group-hover:text-black transition">
                  <Gamepad2 size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">All Games</h4>
                  <p className="text-xs text-gray-400">Explore full library</p>
                </div>
              </Link>

              <Link
                to="/tournament"
                className="flex items-center gap-4 p-4 bg-gray-900/60 hover:bg-gray-800/80 border border-gray-800 hover:border-[#45F882] rounded-xl transition duration-200 group"
              >
                <div className="p-3 bg-green-500/10 text-[#45F882] rounded-lg group-hover:bg-[#45F882] group-hover:text-black transition">
                  <Trophy size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Tournaments</h4>
                  <p className="text-xs text-gray-400">View upcoming matches</p>
                </div>
              </Link>

              <Link
                to="/blogs"
                className="flex items-center gap-4 p-4 bg-gray-900/60 hover:bg-gray-800/80 border border-gray-800 hover:border-[#45F882] rounded-xl transition duration-200 group"
              >
                <div className="p-3 bg-green-500/10 text-[#45F882] rounded-lg group-hover:bg-[#45F882] group-hover:text-black transition">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Gaming News</h4>
                  <p className="text-xs text-gray-400">Read latest articles</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-10 pt-6 border-t border-gray-800 flex justify-between items-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#45F882] transition duration-200"
            >
              <ArrowLeft size={18} /> Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
