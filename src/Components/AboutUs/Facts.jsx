import fact1pic1 from '../../assets/aboutusPic1.png';
import fact1pic2 from '../../assets/aboutusPic2.png';

import { IoIosCheckmarkCircle } from 'react-icons/io';
import TextCircle from './TextCircle';

const Facts = () => {
  return (
    <div className="mt-32">
      <div className=" relative">
        <div className="flex justify-evenly lg:flex-row md:flex-col flex-col gap-10 mx-auto items-center">
          <div>
            <div>
              <h1 className="text-[#45F882] font-semibold lg:text-left md:text-center text-center text-base">
                # Why Choose Our Gaming Site
              </h1>
            </div>
            <div>
              <h1 className="text-white lg:text-3xl md:text-2xl lg:text-left md:text-center text-center text-xl font-bold">
                Our Values Inspire And Drive Our <br /> Every Move{' '}
                <span className="text-[#45F882]">!</span>
              </h1>
            </div>

            <div className="mt-5">
              <div className="flex justify-start gap-2 mt-1 items-center">
                <div className="text-[#45F882]">
                  <IoIosCheckmarkCircle></IoIosCheckmarkCircle>
                </div>
                <h1 className="text-gray-400 lg:text-base md:text-sm text-xs font-semibold">
                  {' '}
                  Duis scelerisque nunc ac massa efficitur pulvinar.
                </h1>
              </div>
              <div className="flex justify-start gap-2 mt-1 items-center">
                <div className="text-[#45F882]">
                  <IoIosCheckmarkCircle></IoIosCheckmarkCircle>
                </div>
                <h1 className="text-gray-400 lg:text-base md:text-sm text-xs font-semibold">
                  {' '}
                  Vivamus eget nisi scelerisque, iaculis risus vel, molestie
                  risus.
                </h1>
              </div>
              <div className="flex justify-start gap-2 mt-1 items-center">
                <div className="text-[#45F882]">
                  <IoIosCheckmarkCircle></IoIosCheckmarkCircle>
                </div>
                <h1 className="text-gray-400 lg:text-base md:text-sm text-xs font-semibold">
                  {' '}
                  Aliquam nec sapien vitae dui dapibus blandit.
                </h1>
              </div>
              <div className="flex justify-start gap-2 mt-1 items-center">
                <div className="text-[#45F882]">
                  <IoIosCheckmarkCircle></IoIosCheckmarkCircle>
                </div>
                <h1 className="text-gray-400 lg:text-base md:text-sm text-xs font-semibold">
                  {' '}
                  Sed non ipsum ut mauris dictum ullamcorper ac at nibh.
                </h1>
              </div>
            </div>
          </div>

          <div>
            <img className="rounded-3xl" src={fact1pic2} alt="" />
          </div>
        </div>

        <div className="flex justify-evenly lg:flex-row md:flex-col flex-col gap-10 mx-auto items-center mt-10">
          <div>
            <img className="rounded-3xl" src={fact1pic1} alt="" />
          </div>

          <div>
            <div className="text-left text-gray-400 lg:text-base md:text-sm text-xs font-semibold">
              Gamers can join local gaming meetups, participate in gaming <br />{' '}
              events, or connect with like-minded individuals through online{' '}
              <br /> forums and social media groups. Engaging with the community{' '}
              <br /> helps build connections and creates opportunities for
              collaborative <br /> gaming experiences.
            </div>

            <div className="text-left mt-5 text-gray-400 lg:text-base md:text-sm text-xs font-semibold">
              Storytelling is a crucial element in modern video game design,{' '}
              <br />
              creating immersive and engaging experiences. Games with <br />{' '}
              compelling narratives often resonate more with players, adding{' '}
              <br /> depth to the overall gaming experience.
            </div>
          </div>
        </div>

        <div className="absolute lg:top-[38%] lg:left-[87%] md:left-[125%] md:top-[41%] left-[95%] top-[40%] mx-auto">
          <TextCircle></TextCircle>
        </div>
      </div>
    </div>
  );
};

export default Facts;
