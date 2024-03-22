import '../Styles/tourbanner.css';
import battle1 from '../../assets/battle1.png';
import battle2 from '../../assets/battle2.png';
import battle3 from '../../assets/battle3.png';

const TourBanner = () => {
  return (
    <tourbanner>
      <div className="mt-32">
        <div>
          <h1 className="text-[#45f882] font-bold text-sm space-x-1">
            # HISTORY OF WARCLUB TROPHY
          </h1>
        </div>

        <div className="">
          <h1 className="text-white lg:text-3xl font-bold">
            Our All Tournaments History{' '}
            <span className="text-[#45f882]">!</span>
          </h1>
        </div>

        <div className="flex justify-center mx-auto mt-32">
          <img className="w-auto h-auto" src={battle1} alt="" />
        </div>

        <div className="flex justify-center mx-auto mt-20">
          <img className="w-auto h-auto" src={battle2} alt="" />
        </div>

        <div className="flex justify-center mx-auto mt-20">
          <img className="w-auto h-auto" src={battle3} alt="" />
        </div>
      </div>
    </tourbanner>
  );
};

export default TourBanner;
