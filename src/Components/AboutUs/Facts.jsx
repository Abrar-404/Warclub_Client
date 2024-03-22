import fact1pic1 from '../../assets/aboutusPic1.png';
import fact1pic2 from '../../assets/aboutusPic2.png';

import { CiCircleCheck } from 'react-icons/ci';

const Facts = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <h1 className="text-[#45F882] font-semibold text-left text-base">
              # Why Choose Our Gaming Site
            </h1>
          </div>
          <div>
            <h1 className="text-white lg:text-3xl md:text-2xl text-left text-xl font-bold">
              Our Values Inspire And Drive Our <br /> Every Move{' '}
              <span className="text-[#45F882]">!</span>
            </h1>
          </div>

          <div className="flex justify-start items-center">
            <div className="text-[#45F882]">
              <CiCircleCheck></CiCircleCheck>
            </div>
            <h1> Duis scelerisque nunc ac massa efficitur pulvinar.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
