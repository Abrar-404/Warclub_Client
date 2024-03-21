import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import aboutBg from '../../assets/aboutusbg.png';
import GamingSlider from './GamingSlider';
import heroPic from '../../assets/herolanding.png'

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

      <div className="mt-48">
        <div>
          <div>
            <img src={heroPic} alt="" />
          </div>
          <GamingSlider></GamingSlider>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
