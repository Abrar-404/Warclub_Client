import React from 'react';
import controller from '../../assets/controller.svg';
import controller2 from '../../assets/controller2.svg';
import controller3 from '../../assets/controller3.svg';
import '../Styles/facilities.css';

const Facilities = () => {
  const facilitiesData = [
    {
      id: 1,
      icon: controller,
      title: 'Esports Player Lounge',
      desc: 'Ultra-comfortable ergonomic gaming stations, VIP relaxation zones, refreshments, and social spaces designed for teams to recharge between tournament sets.',
      tag: 'Relaxation & Team Hub',
    },
    {
      id: 2,
      icon: controller2,
      title: 'Pro Training Facility',
      desc: 'Tournament-spec 360Hz monitors, ultra-low latency fiber networks, sound-isolated team voice suites, and coach telemetry stations for pro scrim analysis.',
      tag: 'High-FPS Battle Rigs',
    },
    {
      id: 3,
      icon: controller3,
      title: 'Broadcasting & Media Studio',
      desc: '4K multi-camera streaming pods, professional digital audio boards, green screens, and soundproof caster booths broadcasting global esports championships.',
      tag: 'Live Production Pods',
    },
  ];

  return (
    <section className="mt-40 mb-20 px-4">
      <div className="text-center mb-16">
        <h3 className="text-[#45F882] font-bold lg:text-xl text-base tracking-wider uppercase">
          # World-Class Gaming Infrastructure
        </h3>
        <h2 className="lg:text-5xl md:text-3xl text-2xl text-white font-extrabold mt-2">
          Warclub Comes Packed With Elite <br /> Esports Facilities{' '}
          <span className="text-[#45F882]">!</span>
        </h2>
        <p className="text-gray-400 text-sm max-w-xl mx-auto mt-3">
          Engineered for aspiring champions and seasoned professionals alike.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facilitiesData.map((facility) => (
          <div
            key={facility.id}
            className="group relative bg-[#0C1219]/90 border border-gray-800 hover:border-[#45F882] rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 shadow-2xl hover:shadow-green-500/10 flex flex-col justify-between"
          >
            <div>
              <div className="w-20 h-20 rounded-2xl bg-[#141E28] border border-gray-700/60 group-hover:border-[#45F882] flex items-center justify-center mb-6 transition duration-300">
                <img className="w-12 h-12 object-contain" src={facility.icon} alt={facility.title} />
              </div>

              <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 text-[#45F882] text-xs font-semibold rounded-full uppercase tracking-wider">
                {facility.tag}
              </span>

              <h3 className="text-white text-2xl font-bold mt-4 mb-3 group-hover:text-[#45F882] transition">
                {facility.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {facility.desc}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-500 group-hover:text-[#45F882] transition">
              <span>Facility Operational</span>
              <span className="w-2 h-2 rounded-full bg-[#45F882] animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;
