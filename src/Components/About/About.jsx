import React from 'react';
import bigPic from '../../assets/About.png';
import littlePic from '../../assets/about2.png';
import feature1 from '../../assets/about_feature_1.svg';
import feature2 from '../../assets/feature2.svg';
import feature3 from '../../assets/feature3.svg';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import '../Styles/featureStyle.css';

const features = [
  {
    icon: feature1,
    title: '1,000+ Affiliate Game Programs',
    desc: 'Empowering cyber athletes and creators with verified publisher partnerships, brand sponsorships, and tournament prize syndicates.',
    tag: 'Ecosystem'
  },
  {
    icon: feature2,
    title: 'Championship Tier Tournaments',
    desc: 'Dynamic real-time brackets, double-elimination formats, automated dispute arbitration, and instant digital payout escrows.',
    tag: 'Leagues'
  },
  {
    icon: feature3,
    title: '24/7 Matchmaking & Support',
    desc: 'Sub-12ms server mesh, AI-assisted anti-cheat telemetry, and live tournament marshals standing by around the clock.',
    tag: 'Integrity'
  }
];

const About = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 mt-16 md:mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Side: Illustration */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#45F882]/20 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition duration-500 pointer-events-none" />
            <img
              className="relative z-10 w-full max-w-lg h-auto object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
              src={bigPic}
              alt="Warclub Gaming Universe"
            />
          </div>
        </div>

        {/* Right Side: Narrative & Features */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#45F882]/10 border border-[#45F882]/30 mb-3">
              <FaShieldAlt className="text-[#45F882] text-xs" />
              <span className="text-[11px] font-orbitron font-bold text-[#45F882] tracking-widest uppercase">
                ABOUT WARCLUB ECOSYSTEM
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-orbitron font-extrabold text-white uppercase leading-tight">
              FORGING LEGENDS IN THE <br />
              <span className="text-[#45F882] neon-text-green">GAMING UNIVERSE</span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base font-rajdhani leading-relaxed mt-3">
              Warclub unites elite competitive players, aspiring champions, and passionate fans under a single high-performance esports platform.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="space-y-4">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="group flex items-start gap-4 p-4 rounded-2xl bg-[#0a0f18]/85 border border-gray-800 hover:border-[#45F882]/60 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(69,248,130,0.15)]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#121a26] border border-gray-700/60 group-hover:border-[#45F882] flex items-center justify-center shrink-0 transition-colors">
                  <img src={feat.icon} alt="" className="w-7 h-7 object-contain" />
                </div>

                <div>
                  <h3 className="font-orbitron font-bold text-base text-white group-hover:text-[#45F882] transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 font-rajdhani mt-1 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Learn More Button */}
          <div className="pt-2">
            <Link to="/aboutUs" className="inline-block">
              <button className="px-6 py-3 bg-[#111924] hover:bg-[#45F882] text-white hover:text-black font-orbitron font-bold text-xs uppercase tracking-wider rounded-xl border border-gray-700 hover:border-[#45F882] shadow-md hover:shadow-[0_0_20px_rgba(69,248,130,0.4)] active:scale-95 transition-all flex items-center gap-2">
                <span>EXPLORE WARCLUB STORY</span>
                <FaArrowRight className="text-xs" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
