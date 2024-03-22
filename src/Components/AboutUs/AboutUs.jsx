import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import aboutBg from '../../assets/aboutusbg.png';
import GamingSlider from './GamingSlider';
import heroPic from '../../assets/herolanding.png';
import Stats from './Stats';
import TourBanner from './TourBanner';
import Facts from './Facts';

const AboutUs = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${aboutBg})` }}>
        <div className="mx-auto pt-32 pb-32">
          <h1 className="text-white font-bold lg:text-3xl text-center">
            About Us
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
            <div>About Us</div>
          </div>
        </div>
      </div>

      <div className="mt-48 text-center">
        <div className="mb-20">
          <div>
            <h1 className="text-[#3ED773] font-bold text-base">
              # WELCOME TO THE ESPORTS & GAMING SITE
            </h1>
          </div>

          <div>
            <h1 className="text-white font-bold text-2xl">
              Forging Legends In The Gaming Universe
            </h1>
          </div>
        </div>

        <div className="flex justify-evenly lg:flex-row md:flex-col flex-col gap-32 items-center mx-auto">
          <img className="w-[500px] h-[400px]" src={heroPic} alt="" />

          <div className=" lg:mr-48 lg:mt-0 md:mt-14 mt-20">
            <GamingSlider></GamingSlider>
          </div>
        </div>


        <div className='lg:mt-32 md:mt-48 mt-52'>
          <Stats></Stats>
        </div>

        <div>
          <TourBanner></TourBanner>
        </div>

        <div>
          <Facts></Facts>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
