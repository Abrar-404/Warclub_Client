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
                    className="font-script text-orange-400 font-bold mx-auto"
                    delay={0}
                  ></CountUp>
                )}{' '}
                <span className="font-script">+</span>
              </div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
              <div className="stat-value">
                {counterOn && (
                  <CountUp
                    start={3000}
                    end={4000}
                    duration={2.75}
                    className="font-script text-orange-400 font-bold mx-auto"
                    delay={0}
                  ></CountUp>
                )}{' '}
                <span className="font-script">+</span>
              </div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
              <div className="stat-value">
                {counterOn && (
                  <CountUp
                    start={2000}
                    end={3000}
                    duration={2.75}
                    className="font-script text-orange-400 font-bold mx-auto"
                    delay={0}
                  ></CountUp>
                )}{' '}
                <span className="font-script">+</span>
              </div>
              <div className="stat-desc">↗︎ 90 (14%)</div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
};

export default Stats;
