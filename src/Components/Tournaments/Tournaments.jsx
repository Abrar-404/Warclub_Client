import { Link } from 'react-router-dom';
import tourPic from '../../assets/tourPic.png';
import { IoIosArrowForward } from 'react-icons/io';
import aboutBg from '../../assets/aboutusbg.png';
import sticker1 from '../../assets/sticker1.png';
import sticker2 from '../../assets/sticker2.png';
import sticker3 from '../../assets/sticker3.png';
import sticker4 from '../../assets/sticker4.png';
import sticker5 from '../../assets/sticker5.png';
import sticker6 from '../../assets/sticker6.png';
import sticker7 from '../../assets/sticker7.png';
import sticker8 from '../../assets/sticker8.png';
import sticker1 from '../../assets/sticker1.png';
import sticker2 from '../../assets/sticke2.png';
import upcoming from '../../assets/upcoming.png';
import '../Styles/tourbuttons.css';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';

const Tournaments = () => {
  const data = [
    {
      label: (
        <button className="bhutti rounded-2xl">
          <span>All Matches</span>
          <i></i>
        </button>
      ),
      value: 'html',
      desc: (
        <div>
          <div className="mt-20 relative">
            <div>
              <img className="" src={tourPic} alt="" />

              <img
                className="absolute lg:bottom-[40px] lg:left-[5.5%] lg:w-[10%] lg:h-[70%] md:w-[13%] md:h-[80%] w-[12%] h-[80%] md:bottom-[10%] bottom-[10%] md:left-[4%] left-[5%]"
                src={sticker1}
                alt=""
              />
              <img
                className="absolute lg:bottom-[40px] lg:right-[5.5%] lg:w-[10%] lg:h-[70%] md:w-[13%] md:h-[80%] w-[12%] h-[80%] md:bottom-[10%] bottom-[10%] md:right-[4%] right-[5%]"
                src={sticker2}
                alt=""
              />
            </div>

            <div className="absolute lg:bottom-[80px] lg:left-[28%] md:bottom-[20%] bottom-3 md:left-[24%] left-[23%] flex justify-center lg:gap-10 md:gap-7 gap-2">
              <div className="text-right ">
                <h1 className="text-[#45F882] lg:text-xl md:text-sm text-[8px] font-semibold">
                  VIDEO GAME
                </h1>
                <h1 className="lg:text-3xl font-bold md:text-xl text-[10px] text-white">
                  THE PANDAS
                </h1>
              </div>

              <div className="text-center bg-black rounded-3xl lg:p-3 md:p-3 p-2">
                <h1 className="text-white lg:text-5xl md:text-3xl text-sm font-semibold">
                  06:30
                </h1>
                <h1 className="lg:text-xs md:text-xs text-xs font-bold lg:pt-3 md:pt-2 pt-0 text-[#959DB1]">
                  April 19, 2024
                </h1>
              </div>

              <div className="text-left">
                <h1 className="text-[#45F882] lg:text-xl md:text-sm text-[8px] font-semibold">
                  VIDEO GAME
                </h1>
                <h1 className="lg:text-3xl font-bold md:text-xl text-[10px]">
                  THE NINJAS
                </h1>
              </div>
            </div>

            <div className="absolute lg:left-[41%] md:left-[36%] left-[27%] lg:bottom-[1%] md:bottom-[-5%] bottom-[-10%] flex justify-center items-center lg:gap-4 md:gap-2 gap-0">
              <div className="relative">
                <img className="md:w-[90%] w-[70%]" src={upcoming} alt="" />
                <h1 className="absolute bottom-[2px] lg:font-bold md:font-semibold lg:text-base md:text-base text-xs left-3 text-white">
                  Upcoming
                </h1>
              </div>
              <div className="relative ">
                <img className="md:w-[90%] w-[70%]" src={upcoming} alt="" />
                <h1 className="absolute bottom-[2px] lg:font-bold md:font-semibold lg:text-base md:text-base text-xs md:left-8 left-7 text-white">
                  0 / 0
                </h1>
              </div>
            </div>
          </div>

          <div className="mt-20 relative">
            <div>
              <img className="" src={tourPic} alt="" />

              <img
                className="absolute lg:bottom-[40px] lg:left-[4.5%] lg:w-[12%] lg:h-[70%] md:w-[13%] md:h-[80%] w-[12%] h-[80%] md:bottom-[10%] bottom-[10%] md:left-[4%] left-[5%]"
                src={sticker3}
                alt=""
              />
              <img
                className="absolute lg:bottom-[40px] lg:right-[4.5%] lg:w-[12%] lg:h-[70%] md:w-[13%] md:h-[80%] w-[12%] h-[80%] md:bottom-[10%] bottom-[10%] md:right-[4%] right-[5%]"
                src={sticker4}
                alt=""
              />
            </div>

            <div className="absolute lg:bottom-[80px] lg:left-[27%] md:bottom-[20%] bottom-3 md:left-[22%] left-[22%] flex justify-center lg:gap-10 md:gap-7 gap-2">
              <div className="text-right ">
                <h1 className="text-[#45F882] lg:text-xl md:text-sm text-[8px] font-semibold">
                  VIDEO GAME
                </h1>
                <h1 className="lg:text-3xl font-bold md:text-xl text-[10px] text-white">
                  THE HOLIGANS
                </h1>
              </div>

              <div className="text-center bg-black rounded-3xl lg:p-3 md:p-3 p-2">
                <h1 className="text-white lg:text-5xl md:text-3xl text-sm font-semibold">
                  06:30
                </h1>
                <h1 className="lg:text-xs md:text-xs text-xs font-bold lg:pt-3 md:pt-2 pt-0 text-[#959DB1]">
                  April 19, 2024
                </h1>
              </div>

              <div className="text-left">
                <h1 className="text-[#45F882] lg:text-xl md:text-sm text-[8px] font-semibold">
                  VIDEO GAME
                </h1>
                <h1 className="lg:text-3xl font-bold md:text-xl text-[10px]">
                  THE PLAYERS
                </h1>
              </div>
            </div>

            <div className="absolute lg:left-[41%] md:left-[36%] left-[27%] lg:bottom-[1%] md:bottom-[-5%] bottom-[-10%] flex justify-center items-center lg:gap-4 md:gap-2 gap-0">
              <div className="relative">
                <img className="md:w-[90%] w-[70%]" src={upcoming} alt="" />
                <h1 className="absolute bottom-[2px] lg:font-bold md:font-semibold lg:text-base md:text-base text-xs left-3 text-white">
                  Upcoming
                </h1>
              </div>
              <div className="relative ">
                <img className="md:w-[90%] w-[70%]" src={upcoming} alt="" />
                <h1 className="absolute bottom-[2px] lg:font-bold md:font-semibold lg:text-base md:text-base text-xs md:left-8 left-7 text-white">
                  0 / 0
                </h1>
              </div>
            </div>
          </div>

          <div className="mt-20 relative">
            <div>
              <img className="" src={tourPic} alt="" />

              <img
                className="absolute lg:bottom-[40px] lg:left-[4.5%] lg:w-[12%] lg:h-[70%] md:w-[13%] md:h-[80%] w-[12%] h-[80%] md:bottom-[10%] bottom-[10%] md:left-[4%] left-[5%]"
                src={sticker5}
                alt=""
              />
              <img
                className="absolute lg:bottom-[40px] lg:right-[4.5%] lg:w-[12%] lg:h-[70%] md:w-[13%] md:h-[80%] w-[12%] h-[80%] md:bottom-[10%] bottom-[10%] md:right-[4%] right-[5%]"
                src={sticker6}
                alt=""
              />
            </div>

            <div className="absolute lg:bottom-[80px] lg:left-[29%] md:bottom-[20%] bottom-3 md:left-[23%] left-[22%] flex justify-center lg:gap-10 md:gap-7 gap-2">
              <div className="text-right ">
                <h1 className="text-[#45F882] lg:text-xl md:text-sm text-[8px] font-semibold">
                  VIDEO GAME
                </h1>
                <h1 className="lg:text-3xl font-bold md:text-xl text-[10px] text-white">
                  THE LIONS
                </h1>
              </div>

              <div className="text-center bg-black rounded-3xl lg:p-3 md:p-3 p-2">
                <h1 className="text-white lg:text-5xl md:text-3xl text-sm font-semibold">
                  06:30
                </h1>
                <h1 className="lg:text-xs md:text-xs text-xs font-bold lg:pt-3 md:pt-2 pt-0 text-[#959DB1]">
                  April 19, 2024
                </h1>
              </div>

              <div className="text-left">
                <h1 className="text-[#45F882] lg:text-xl md:text-sm text-[8px] font-semibold">
                  VIDEO GAME
                </h1>
                <h1 className="lg:text-3xl font-bold md:text-xl text-[10px]">
                  THE ASSASSINS
                </h1>
              </div>
            </div>

            <div className="absolute lg:left-[41%] md:left-[36%] left-[27%] lg:bottom-[1%] md:bottom-[-5%] bottom-[-10%] flex justify-center items-center lg:gap-4 md:gap-2 gap-0">
              <div className="relative">
                <img className="md:w-[90%] w-[70%]" src={upcoming} alt="" />
                <h1 className="absolute bottom-[2px] lg:font-bold md:font-semibold lg:text-base md:text-base text-xs left-3 text-white">
                  Upcoming
                </h1>
              </div>
              <div className="relative ">
                <img className="md:w-[90%] w-[70%]" src={upcoming} alt="" />
                <h1 className="absolute bottom-[2px] lg:font-bold md:font-semibold lg:text-base md:text-base text-xs md:left-8 left-7 text-white">
                  0 / 0
                </h1>
              </div>
            </div>
          </div>

          <div className="mt-20 relative">
            <div>
              <img className="" src={tourPic} alt="" />

              <img
                className="absolute lg:bottom-[40px] lg:left-[4.5%] lg:w-[12%] lg:h-[70%] md:w-[13%] md:h-[80%] w-[12%] h-[80%] md:bottom-[10%] bottom-[10%] md:left-[4%] left-[5%]"
                src={sticker7}
                alt=""
              />
              <img
                className="absolute lg:bottom-[40px] lg:right-[4.5%] lg:w-[12%] lg:h-[70%] md:w-[13%] md:h-[80%] w-[12%] h-[80%] md:bottom-[10%] bottom-[10%] md:right-[4%] right-[5%]"
                src={sticker8}
                alt=""
              />
            </div>

            <div className="absolute lg:bottom-[80px] lg:left-[29%] md:bottom-[20%] bottom-3 md:left-[23%] left-[22%] flex justify-center lg:gap-10 md:gap-7 gap-2">
              <div className="text-right ">
                <h1 className="text-[#45F882] lg:text-xl md:text-sm text-[8px] font-semibold">
                  VIDEO GAME
                </h1>
                <h1 className="lg:text-3xl font-bold md:text-xl text-[10px] text-white">
                  CYBERPUNKS
                </h1>
              </div>

              <div className="text-center bg-black rounded-3xl lg:p-3 md:p-3 p-2">
                <h1 className="text-white lg:text-5xl md:text-3xl text-sm font-semibold">
                  06:30
                </h1>
                <h1 className="lg:text-xs md:text-xs text-xs font-bold lg:pt-3 md:pt-2 pt-0 text-[#959DB1]">
                  April 19, 2024
                </h1>
              </div>

              <div className="text-left">
                <h1 className="text-[#45F882] lg:text-xl md:text-sm text-[8px] font-semibold">
                  VIDEO GAME
                </h1>
                <h1 className="lg:text-3xl font-bold md:text-xl text-[10px]">
                  THE GORILLAS
                </h1>
              </div>
            </div>

            <div className="absolute lg:left-[41%] md:left-[36%] left-[27%] lg:bottom-[1%] md:bottom-[-5%] bottom-[-10%] flex justify-center items-center lg:gap-4 md:gap-2 gap-0">
              <div className="relative">
                <img className="md:w-[90%] w-[70%]" src={upcoming} alt="" />
                <h1 className="absolute bottom-[2px] lg:font-bold md:font-semibold lg:text-base md:text-base text-xs left-3 text-white">
                  Upcoming
                </h1>
              </div>
              <div className="relative ">
                <img className="md:w-[90%] w-[70%]" src={upcoming} alt="" />
                <h1 className="absolute bottom-[2px] lg:font-bold md:font-semibold lg:text-base md:text-base text-xs md:left-8 left-7 text-white">
                  0 / 0
                </h1>
              </div>
            </div>
          </div>

          <div className="mt-20 relative">
            <div>
              <img className="" src={tourPic} alt="" />

              <img
                className="absolute lg:bottom-[40px] lg:left-[4.5%] lg:w-[12%] lg:h-[70%] md:w-[13%] md:h-[80%] w-[12%] h-[80%] md:bottom-[10%] bottom-[10%] md:left-[4%] left-[5%]"
                src={sticker9}
                alt=""
              />
              <img
                className="absolute lg:bottom-[40px] lg:right-[4.5%] lg:w-[12%] lg:h-[70%] md:w-[13%] md:h-[80%] w-[12%] h-[80%] md:bottom-[10%] bottom-[10%] md:right-[4%] right-[5%]"
                src={sticker10}
                alt=""
              />
            </div>

            <div className="absolute lg:bottom-[80px] lg:left-[29%] md:bottom-[20%] bottom-3 md:left-[23%] left-[22%] flex justify-center lg:gap-10 md:gap-7 gap-2">
              <div className="text-right ">
                <h1 className="text-[#45F882] lg:text-xl md:text-sm text-[8px] font-semibold">
                  VIDEO GAME
                </h1>
                <h1 className="lg:text-3xl font-bold md:text-xl text-[10px] text-white">
                  CYBERPUNKS
                </h1>
              </div>

              <div className="text-center bg-black rounded-3xl lg:p-3 md:p-3 p-2">
                <h1 className="text-white lg:text-5xl md:text-3xl text-sm font-semibold">
                  06:30
                </h1>
                <h1 className="lg:text-xs md:text-xs text-xs font-bold lg:pt-3 md:pt-2 pt-0 text-[#959DB1]">
                  April 19, 2024
                </h1>
              </div>

              <div className="text-left">
                <h1 className="text-[#45F882] lg:text-xl md:text-sm text-[8px] font-semibold">
                  VIDEO GAME
                </h1>
                <h1 className="lg:text-3xl font-bold md:text-xl text-[10px]">
                  THE GORILLAS
                </h1>
              </div>
            </div>

            <div className="absolute lg:left-[41%] md:left-[36%] left-[27%] lg:bottom-[1%] md:bottom-[-5%] bottom-[-10%] flex justify-center items-center lg:gap-4 md:gap-2 gap-0">
              <div className="relative">
                <img className="md:w-[90%] w-[70%]" src={upcoming} alt="" />
                <h1 className="absolute bottom-[2px] lg:font-bold md:font-semibold lg:text-base md:text-base text-xs left-3 text-white">
                  Upcoming
                </h1>
              </div>
              <div className="relative ">
                <img className="md:w-[90%] w-[70%]" src={upcoming} alt="" />
                <h1 className="absolute bottom-[2px] lg:font-bold md:font-semibold lg:text-base md:text-base text-xs md:left-8 left-7 text-white">
                  0 / 0
                </h1>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: (
        <button className="bhutti rounded-2xl">
          <span>Upcoming Matches</span>
          <i></i>
        </button>
      ),
      value: 'react',
      desc: (
        <div className="mt-20 relative">
          <div>
            <img className="" src={tourPic} alt="" />

            <img
              className="absolute bottom-[70px] left-[7%]"
              src={sticker6}
              alt=""
            />
            <img
              className="absolute bottom-[70px] right-[7%]"
              src={sticker7}
              alt=""
            />
          </div>

          <div className="absolute bottom-[80px] left-[28%] flex justify-center gap-10">
            <div className="text-right ">
              <h1 className="text-[#45F882] text-xl font-semibold">
                VIDEO GAME
              </h1>
              <h1 className="text-3xl font-bold text-white">THE PANDAS</h1>
            </div>

            <div className="text-center bg-black rounded-3xl p-3">
              <h1 className="text-white text-5xl font-semibold">06:30</h1>
              <h1 className="text-xs font-bold pt-3 text-[#959DB1]">
                April 19, 2024
              </h1>
            </div>

            <div className="text-left">
              <h1 className="text-[#45F882] text-xl font-semibold">
                VIDEO GAME
              </h1>
              <h1 className="text-3xl font-bold text-white">THE NINJAS</h1>
            </div>
          </div>

          <div className="absolute left-[41%] bottom-[1%] flex justify-center items-center gap-4">
            <div className="relative">
              <img className="" src={upcoming} alt="" />
              <h1 className="absolute bottom-[2px] font-bold left-4 text-white">
                Upcoming
              </h1>
            </div>
            <div className="relative ">
              <img className="" src={upcoming} alt="" />
              <h1 className="absolute bottom-[2px] font-bold left-9 text-white">
                0 / 0
              </h1>
            </div>
          </div>
        </div>
      ),
    },

    {
      label: (
        <button className="bhutti rounded-2xl">
          <span>Finished Matches</span>
          <i></i>
        </button>
      ),
      value: 'vue',
      desc: (
        <div className="mt-20 relative">
          <div>
            <img className="" src={tourPic} alt="" />

            <img
              className="absolute bottom-[70px] left-[7%]"
              src={sticker1}
              alt=""
            />
            <img
              className="absolute bottom-[70px] right-[7%]"
              src={sticker2}
              alt=""
            />
          </div>

          <div className="absolute bottom-[80px] left-[28%] flex justify-center gap-10">
            <div className="text-right ">
              <h1 className="text-[#45F882] text-xl font-semibold">
                VIDEO GAME
              </h1>
              <h1 className="text-3xl font-bold text-white">THE PANDAS</h1>
            </div>

            <div className="text-center bg-black rounded-3xl p-3">
              <h1 className="text-white text-5xl font-semibold">06:30</h1>
              <h1 className="text-xs font-bold pt-3 text-[#959DB1]">
                April 19, 2024
              </h1>
            </div>

            <div className="text-left">
              <h1 className="text-[#45F882] text-xl font-semibold">
                VIDEO GAME
              </h1>
              <h1 className="text-3xl font-bold text-white">THE NINJAS</h1>
            </div>
          </div>

          <div className="absolute left-[41%] bottom-[1%] flex justify-center items-center gap-4">
            <div className="relative">
              <img className="" src={upcoming} alt="" />
              <h1 className="absolute bottom-[2px] font-bold left-4 text-white">
                Upcoming
              </h1>
            </div>
            <div className="relative ">
              <img className="" src={upcoming} alt="" />
              <h1 className="absolute bottom-[2px] font-bold left-9 text-white">
                0 / 0
              </h1>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <div style={{ backgroundImage: `url(${aboutBg})` }}>
        <div className="mx-auto pt-32 pb-32">
          <h1 className="text-white font-bold lg:text-3xl text-center">
            Tournaments
          </h1>

          <div className="text-white font-semibold text-sm text-center flex justify-center mx-auto items-center pt-2">
            <h1>
              <Link to="/">
                <span className="text-green-400">Home</span>
              </Link>{' '}
            </h1>
            <div>
              <IoIosArrowForward></IoIosArrowForward>
            </div>
            <div>Tournaments</div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h1 className="text-[#45F882] text-center font-semibold">
          # GAME STREAMING BATTLE
        </h1>
        <h1 className="text-white text-3xl text-center font-bold">
          Our Gaming Tournaments <span className="text-[#45F882]">!</span>
        </h1>
      </div>

      <div className="mt-10">
        <Tabs id="custom-animation" value="html">
          <TabsHeader className="mt-32">
            {data.map(({ label, value }) => (
              <Tab key={value} value={value} className="text-white">
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value} className="text-white">
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>

      {/* <div className="mt-20 relative">
        <div>
          <img className="" src={tourPic} alt="" />

          <img
            className="absolute bottom-[70px] left-[7%]"
            src={sticker1}
            alt=""
          />
          <img
            className="absolute bottom-[70px] right-[7%]"
            src={sticker2}
            alt=""
          />
        </div>

        <div className="absolute bottom-[80px] left-[28%] flex justify-center gap-10">
          <div className="text-right ">
            <h1 className="text-[#45F882] text-xl font-semibold">VIDEO GAME</h1>
            <h1 className="text-3xl font-bold text-white">THE PANDAS</h1>
          </div>

          <div className="text-center bg-black rounded-3xl p-3">
            <h1 className="text-white text-5xl font-semibold">06:30</h1>
            <h1 className="text-xs font-bold pt-3 text-[#959DB1]">
              April 19, 2024
            </h1>
          </div>

          <div className="text-left">
            <h1 className="text-[#45F882] text-xl font-semibold">VIDEO GAME</h1>
            <h1 className="text-3xl font-bold text-white">THE NINJAS</h1>
          </div>
        </div>

        <div className="absolute left-[41%] bottom-[1%] flex justify-center items-center gap-4">
          <div className="relative">
            <img className="" src={upcoming} alt="" />
            <h1 className="absolute bottom-[2px] font-bold left-4 text-white">
              Upcoming
            </h1>
          </div>
          <div className="relative ">
            <img className="" src={upcoming} alt="" />
            <h1 className="absolute bottom-[2px] font-bold left-9 text-white">
              0 / 0
            </h1>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Tournaments;
