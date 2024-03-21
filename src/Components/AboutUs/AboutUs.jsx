import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div>
      <div>
        <h1 className="text-white font-bold lg:text-3xl text-center">
          About Us
        </h1>

        <div className="text-white font-semibold text-xl">
          <h1>
            <Link to='/'>
              <span className="text-green-400">Home</span>
            </Link>{' '}
            <IoIosArrowForward></IoIosArrowForward> About
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
