import React from 'react';
import { useRouteError, Link, useNavigate } from 'react-router-dom';
import { FaExclamationTriangle, FaHome, FaRedo } from 'react-icons/fa';

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  console.error('Captured Route Error:', error);

  const status = error?.status || 500;
  const statusText = error?.statusText || 'Internal System Disruption';
  const errorMessage = error?.data?.message || error?.message || 'An unexpected glitch occurred in the arena matrix.';

  return (
    <div className="min-h-screen bg-[#070D14] flex items-center justify-center p-4 text-white relative overflow-hidden font-sans">
      {/* Background Cyber Ambient Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#45F882]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#F03AF9]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md w-full bg-[#0E1620]/90 border border-red-500/30 backdrop-blur-xl rounded-3xl p-8 text-center shadow-2xl relative z-10">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 mb-6 shadow-lg shadow-red-500/10">
          <FaExclamationTriangle size={36} />
        </div>

        <div className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono font-bold rounded-full mb-3 uppercase tracking-wider">
          System Code: {status}
        </div>

        <h1 className="text-2xl font-extrabold text-white mb-2">
          {status === 404 ? 'Sector Not Found' : 'Mission Malfunction'}
        </h1>

        <p className="text-gray-400 text-xs mb-4 leading-relaxed">
          {statusText}
        </p>

        <div className="bg-[#090F15] border border-gray-800 rounded-xl p-3 text-xs text-red-300/80 font-mono mb-6 break-words max-h-24 overflow-y-auto">
          {errorMessage}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => window.location.reload()}
            className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white font-semibold text-xs rounded-xl transition active:scale-95"
          >
            <FaRedo size={12} /> Reload System
          </button>
          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#45F882] to-[#2bd468] hover:brightness-110 text-black font-bold text-xs rounded-xl shadow-lg shadow-green-500/20 transition active:scale-95"
          >
            <FaHome size={13} /> Return to Arena
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
