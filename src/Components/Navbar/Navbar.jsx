import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../Styles/navbar.css';
import { AuthContext } from '../../Providers/AuthProvider';
import { useContext, useState } from 'react';
import logo from '../../assets/NavLogo.png';
import { FaSignOutAlt, FaSignInAlt } from 'react-icons/fa';

const Navbar = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [navImgError, setNavImgError] = useState(false);

  const handleLogOut = () => {
    userLogOut()
      .then(result => {
        navigate('/');
        console.log(result?.user);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const navOptions = (
    <>
      <li className="nav-link">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : 'default')}
        >
          Home
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink
          to="/aboutUs"
          className={({ isActive }) => (isActive ? 'active' : 'default')}
        >
          About Us
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink
          to="/allGames"
          className={({ isActive }) => (isActive ? 'active' : 'default')}
        >
          All GAMES
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink
          to="/blogs"
          className={({ isActive }) => (isActive ? 'active' : 'default')}
        >
          BLOGS
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? 'active' : 'default')}
        >
          CONTACT
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink
          to="/gallery"
          className={({ isActive }) => (isActive ? 'active' : 'default')}
        >
          Gallery
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink
          to="/tournament"
          className={({ isActive }) => (isActive ? 'active' : 'default')}
        >
          TOURNAMENTS
        </NavLink>
      </li>
      {user ? (
        <>
          <li className="nav-link">
            <NavLink
              to="/dashboard/profile"
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Dashboard
            </NavLink>
          </li>
        </>
      ) : (
        <></>
      )}
    </>
  );

  const navOptionsForMobile = (
    <>
      <li className="nav-link">
        <NavLink to="/">HOME</NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/aboutUs">About Us</NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/allGames">All GAMES</NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/blogs">BLOGS</NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/tournament">Tournaments</NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/gallery">Gallery</NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/dashboard/profile">Dashboard</NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50">
      {/* Top Futuristic Telemetry Bar */}
      <div className="bg-[#03070C] border-b border-gray-800/60 px-6 py-1 text-[11px] text-gray-400 font-mono hidden md:flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#45F882] animate-cyber-pulse inline-block" />
            <span className="text-[#45F882] font-bold tracking-wider">ARENA NETWORK:</span>
            <span className="text-gray-300">ONLINE</span>
          </span>
          <span className="text-gray-700">|</span>
          <span className="text-gray-400">TOURNAMENT SEASON 2026 ACTIVE</span>
        </div>
        <div className="flex items-center gap-4 text-gray-400">
          <span>LATENCY: <span className="text-[#45F882] font-bold">11ms</span></span>
          <span>TICKRATE: <span className="text-[#45F882] font-bold">128Hz</span></span>
          <span>SYSTEM: <span className="text-[#3EDC75]">NOMINAL</span></span>
        </div>
      </div>

      {/* Main Glassmorphic Navigation Bar */}
      <div className="backdrop-blur-xl bg-[#070D14]/85 border-b border-[#45F882]/20 shadow-[0_4px_30px_rgba(69,248,130,0.08)] mx-auto px-4 lg:px-8 transition-all">
        <div className="navbar p-0 min-h-[70px]">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="lg:hidden p-2 text-gray-300 hover:text-[#45F882] cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-4 shadow-2xl bg-[#0C141F]/95 backdrop-blur-2xl border border-[#45F882]/30 rounded-2xl w-60 z-10 text-white font-semibold space-y-2"
              >
                {navOptionsForMobile}
              </ul>
            </div>
            <Link to="/" className="normal-case text-xl flex items-center group">
              <img 
                className="w-[180px] h-[75px] object-contain transition duration-300 group-hover:brightness-125" 
                src={logo} 
                alt="Warclub Esports Logo" 
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex items-center gap-6">{navOptions}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="flex items-center gap-3">
                <Link to="/dashboard/profile" title="View Profile" className="hover:opacity-80 transition shrink-0">
                  <div className="avatar online cursor-pointer">
                    <div className="w-10 h-10 rounded-full ring-2 ring-[#45F882] shadow-[0_0_10px_rgba(69,248,130,0.3)] overflow-hidden bg-slate-800 flex items-center justify-center">
                      {user?.photoURL && !navImgError ? (
                        <img
                          src={user.photoURL}
                          alt={user?.displayName || 'User Avatar'}
                          referrerPolicy="no-referrer"
                          onError={() => setNavImgError(true)}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="font-orbitron font-bold text-xs text-[#45F882] select-none">
                          {user?.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
                <button
                  onClick={handleLogOut}
                  className="px-3.5 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 hover:border-red-500/60 text-red-400 font-mono font-bold text-xs rounded-xl transition shadow-md flex items-center gap-1.5 active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  <FaSignOutAlt size={11} /> LOGOUT
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-5 py-2.5 bg-gradient-to-r from-[#45F882] to-[#2bd468] hover:brightness-110 active:scale-95 text-black font-orbitron font-extrabold text-xs rounded-xl shadow-[0_0_15px_rgba(69,248,130,0.35)] transition flex items-center gap-2 tracking-wider uppercase whitespace-nowrap"
              >
                <FaSignInAlt size={12} /> LOGIN
              </Link>
            )}
          </div>
      </div>
    </div>
  </div>
  );
};

export default Navbar;
