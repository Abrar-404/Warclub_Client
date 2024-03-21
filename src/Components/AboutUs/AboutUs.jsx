import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div>
      <div className="mx-auto">
        <h1 className="text-white font-bold lg:text-3xl text-center">
          About Us
        </h1>

        <div className="text-white font-semibold text-sm text-center flex justify-center mx-auto">
          <h1>
            <Link to="/">
              <span className="text-green-400">Home</span>
            </Link>{' '}
          </h1>
          <div>
            <IoIosArrowForward></IoIosArrowForward>
          </div>
          <div>About</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
