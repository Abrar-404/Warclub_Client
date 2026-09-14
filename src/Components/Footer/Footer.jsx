import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import footerPic from '../../assets/Footer.png';
import logo from '../../assets/NavLogo.png';
import Socials from './Socials';
import { 
  FaPaperPlane, 
  FaEnvelope, 
  FaShieldAlt, 
  FaChevronRight, 
  FaArrowUp,
  FaMapMarkerAlt,
  FaPhoneAlt
} from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!email) {
      Swal.fire({
        title: 'Please enter your email',
        icon: 'info',
        background: '#0B121C',
        color: '#FFFFFF',
        confirmButtonColor: '#45F882',
      });
      return;
    }
    Swal.fire({
      title: 'Transmission Confirmed!',
      text: 'You are now enlisted for tactical Warclub tournament updates and match alerts.',
      icon: 'success',
      timer: 2500,
      showConfirmButton: false,
      background: '#0B121C',
      color: '#45F882',
    });
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const serviceLinks = [
    { label: 'Gaming Arena', to: '/allGames' },
    { label: 'Tournaments', to: '/tournament' },
    { label: 'Latest News', to: '/blogs' },
    { label: 'Media Gallery', to: '/gallery' },
    { label: 'Pro Players', to: '/aboutUs' },
    { label: 'About Us', to: '/aboutUs' },
  ];

  const companyLinks = [
    { label: 'Help & Support', to: '/contact' },
    { label: 'About Us', to: '/aboutUs' },
    { label: 'Contact Us', to: '/contact' },
    { label: 'Our Blog', to: '/blogs' },
    { label: 'Player Portal', to: '/login' },
    { label: 'Support Desk', to: '/contact' },
  ];

  return (
    <footer className="relative w-full pb-10">
      {/* Outer Cybernetic Card Frame with Topographic Pattern */}
      <div
        className="relative rounded-2xl md:rounded-3xl border border-gray-800/80 bg-[#070b12] bg-cover bg-center overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(7, 11, 18, 0.88), rgba(7, 11, 18, 0.96)), url(${footerPic})`,
        }}
      >
        {/* Top glowing neon accent line */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#45F882] to-transparent opacity-80" />

        {/* Main Grid Content */}
        <div className="p-8 sm:p-10 md:p-12 lg:p-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
            {/* Column 1: Brand & Socials (lg:col-span-4) */}
            <div className="lg:col-span-4 flex flex-col space-y-4">
              <Link to="/" className="inline-block transition-transform hover:scale-105 duration-300 w-fit">
                <img
                  src={logo}
                  className="w-[160px] h-auto object-contain filter drop-shadow-[0_0_12px_rgba(69,248,130,0.3)]"
                  alt="Warclub Logo"
                />
              </Link>
              
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-rajdhani text-base">
                Beyond esports tournaments — your global hub for high-stakes competitive leagues, pro scrims, gaming conventions, and classified arena battles.
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#45F882]/10 border border-[#45F882]/30 w-fit">
                <span className="w-2 h-2 rounded-full bg-[#45F882] animate-pulse" />
                <span className="font-mono text-xs text-[#45F882] font-semibold tracking-wider">
                  ARENA STATUS: ONLINE
                </span>
              </div>

              <div className="pt-2">
                <h4 className="font-orbitron font-bold text-sm tracking-wider text-white uppercase mb-3 flex items-center gap-2">
                  <span>Follow</span>
                  <span className="text-[#45F882]">With Us:</span>
                </h4>
                <Socials />
              </div>
            </div>

            {/* Column 2: Services (lg:col-span-2) */}
            <div className="lg:col-span-2">
              <h4 className="font-orbitron font-bold text-base tracking-wider text-white uppercase mb-5 pb-1.5 border-b-2 border-[#45F882] inline-block">
                Services
              </h4>
              <ul className="space-y-2.5">
                {serviceLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.to}
                      className="group flex items-center gap-2 text-gray-400 hover:text-[#45F882] transition-colors duration-200 text-sm font-medium"
                    >
                      <FaChevronRight className="text-[10px] text-gray-600 group-hover:text-[#45F882] group-hover:translate-x-1 transition-all" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company & Contact Hub (lg:col-span-2) */}
            <div className="lg:col-span-2">
              <h4 className="font-orbitron font-bold text-base tracking-wider text-white uppercase mb-5 pb-1.5 border-b-2 border-[#45F882] inline-block">
                Company
              </h4>
              <ul className="space-y-2.5">
                {companyLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.to}
                      className="group flex items-center gap-2 text-gray-400 hover:text-[#45F882] transition-colors duration-200 text-sm font-medium"
                    >
                      <FaChevronRight className="text-[10px] text-gray-600 group-hover:text-[#45F882] group-hover:translate-x-1 transition-all" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Direct Tactical Contact Info */}
              <div className="mt-5 pt-3.5 border-t border-gray-800/80 text-xs text-gray-400 space-y-1.5 font-rajdhani">
                <div className="flex items-center gap-2 text-gray-300">
                  <FaMapMarkerAlt className="text-[#45F882] text-xs flex-shrink-0" />
                  <span className="truncate">Manchester, M4 6EW, UK</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 hover:text-[#45F882] transition-colors">
                  <FaPhoneAlt className="text-[#45F882] text-xs flex-shrink-0" />
                  <a href="tel:+163254736587">(+163)-2547-36587</a>
                </div>
              </div>
            </div>

            {/* Column 4: Tactical Newsletter (lg:col-span-4) */}
            <div className="lg:col-span-4">
              <h4 className="font-orbitron font-bold text-base tracking-wider text-white uppercase mb-5 pb-1.5 border-b-2 border-[#45F882] inline-block">
                Newsletter
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 font-rajdhani text-base">
                Subscribe to our tactical dispatch for instant alerts on tournament brackets, patch drops, and classified prize pools.
              </p>

              <form onSubmit={handleNewsletter} className="space-y-3">
                <div className="relative flex items-center">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                    <FaEnvelope className="text-sm" />
                  </div>
                  <input
                    type="email"
                    placeholder="operator@warclub.gg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-24 sm:pr-28 py-3 bg-[#0a0f18]/90 border border-gray-700/80 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#45F882] focus:ring-1 focus:ring-[#45F882] transition-all font-rajdhani"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 px-3.5 sm:px-4 py-2 bg-[#45F882] hover:bg-[#3be074] text-black font-orbitron font-bold text-xs uppercase tracking-wider rounded-lg hover:shadow-[0_0_15px_rgba(69,248,130,0.5)] active:scale-95 transition-all flex items-center gap-1.5"
                    aria-label="Subscribe to newsletter"
                  >
                    <span>JOIN</span>
                    <FaPaperPlane className="text-[10px]" />
                  </button>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <FaShieldAlt className="text-[#45F882] text-xs flex-shrink-0" />
                  <span>Zero spam. Enlist or withdraw with a single click.</span>
                </div>
              </form>
            </div>
          </div>

          {/* Bottom Bar: Copyright, Telemetry, and Back to Top */}
          <div className="mt-12 pt-6 border-t border-gray-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-rajdhani text-gray-400">
            <div className="flex items-center gap-1.5 text-center md:text-left">
              <span>© Copyright 2026</span>
              <span className="text-[#45F882] font-semibold">Warclub Esports</span>
              <span>— All rights reserved.</span>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 text-gray-400 text-xs">
              <Link to="/aboutUs" className="hover:text-[#45F882] transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link to="/aboutUs" className="hover:text-[#45F882] transition-colors">
                Terms of Service
              </Link>
              <span>•</span>
              <Link to="/tournament" className="hover:text-[#45F882] transition-colors">
                Fair Play Code
              </Link>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0d1520] border border-gray-800 hover:border-[#45F882] hover:text-[#45F882] transition-all text-xs font-orbitron"
              aria-label="Scroll to top"
            >
              <span>TOP</span>
              <FaArrowUp className="text-[10px] group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
