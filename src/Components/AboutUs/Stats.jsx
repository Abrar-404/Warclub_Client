import CountUp from 'react-countup';
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';

const Stats = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="flex justify-center">
          <div className="stats text-center w-[1100px] bg-transparent mx-auto pb-7 lg:stats-horizontal stats-vertical shadow">
            <div className="stat">
              <div className="stat-value">
                {counterOn && (
                  <CountUp
                    start={1000}
                    end={2347}
                    duration={2.75}
                    className="font-script text-white font-bold mx-auto"
                    delay={0}
                  ></CountUp>
                )}{' '}
                <span className="text-[#45F882] text-4xl">+</span>
              </div>
              <div className="stat-desc text-[#45F882] font-bold">
                Our Daily Game Users
              </div>
            </div>

            <div className="stat">
              <div className="stat-value">
                {counterOn && (
                  <CountUp
                    start={20}
                    end={50}
                    duration={2.75}
                    className="font-script text-white font-bold mx-auto"
                    delay={0}
                  ></CountUp>
                )}{' '}
                <span className="text-white">M</span>
                <span className="text-[#45F882] text-4xl">+</span>
              </div>
              <div className="stat-desc text-[#45F882] font-bold">
                Game Downloads
              </div>
            </div>

            <div className="stat">
              <div className="stat-value">
                {counterOn && (
                  <CountUp
                    start={100}
                    end={200}
                    duration={2.75}
                    className="font-script text-white font-bold mx-auto"
                    delay={0}
                  ></CountUp>
                )}{' '}
                <span className="text-[#45F882] text-4xl">+</span>
              </div>
              <div className="stat-desc text-[#45F882] font-bold">
                Game Launched
              </div>
            </div>

            <div className="stat">
              <div className="stat-value">
                {counterOn && (
                  <CountUp
                    start={10}
                    end={30}
                    duration={2.75}
                    className="font-script text-white font-bold mx-auto"
                    delay={0}
                  ></CountUp>
                )}{' '}
                <span className="text-white">M</span>
                <span className="text-[#45F882] text-4xl">+</span>
              </div>
              <div className="stat-desc text-[#45F882] font-bold">
                Gaming Project Delivered
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
};

export default Stats;
