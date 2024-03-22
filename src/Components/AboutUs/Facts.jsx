import fact1pic1 from '../../assets/aboutusPic1.png';
import fact1pic2 from '../../assets/aboutusPic2.png';

import { IoIosCheckmarkCircle } from 'react-icons/io';

const Facts = () => {
  return (
    <div>
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
              <h1 className="text-[#545967] font-semibold">
                {' '}
                Duis scelerisque nunc ac massa efficitur pulvinar.
              </h1>
            </div>
            <div className="flex justify-start gap-2 mt-1 items-center">
              <div className="text-[#45F882]">
                <IoIosCheckmarkCircle></IoIosCheckmarkCircle>
              </div>
              <h1 className="text-[#545967] font-semibold">
                {' '}
                Vivamus eget nisi scelerisque, iaculis risus vel, molestie
                risus.
              </h1>
            </div>
            <div className="flex justify-start gap-2 mt-1 items-center">
              <div className="text-[#45F882]">
                <IoIosCheckmarkCircle></IoIosCheckmarkCircle>
              </div>
              <h1 className="text-[#545967] font-semibold">
                {' '}
                Aliquam nec sapien vitae dui dapibus blandit.
              </h1>
            </div>
            <div className="flex justify-start gap-2 mt-1 items-center">
              <div className="text-[#45F882]">
                <IoIosCheckmarkCircle></IoIosCheckmarkCircle>
              </div>
              <h1 className="text-[#545967] font-semibold">
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
    </div>
  );
};

export default Facts;
