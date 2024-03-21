import { IoIosArrowForward } from 'react-icons/io';

const AboutUs = () => {
  return (
    <div>
      <div>
        <h1 className="text-white font-bold lg:text-3xl text-center">
          About Us
        </h1>

        <div className='text-white font-semibold text-xl'>
          <h1>
            <span>Home</span> <IoIosArrowForward></IoIosArrowForward> About
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
