import shape3 from '../../assets/shape3.png';
import hero1 from '../../assets/hero1.png';
import hero2 from '../../assets/hero2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner2 = () => {
  return (
    <div className="flex justify-center ">
      <div className="relative">
        <img className="" src={shape3} alt="" />

        <div className="">
          <img
            className="absolute lg:w-[250px] lg:h-[300px] md:w-[150px] md:h-[170px] lg:top-[120px] lg:left-[200px] md:top-[68px] md:left-[100px] w-[80px] h-[100px] top-[32px] left-[60px]"
            src={hero1}
            alt=""
          />
        </div>

        <div className="">
          <img
            className="absolute lg:w-[250px] lg:h-[300px] md:w-[150px] md:h-[170px] lg:top-[120px] lg:left-[870px] md:top-[68px] md:left-[480px] w-[80px] h-[100px] top-[32px] left-[280px]"
            src={hero2}
            alt=""
          />
        </div>

        <div>
          <h1 className="text-white lg:text-3xl md:text-xl text-sm font-bold absolute lg:top-[220px] lg:left-[515px]">
            Join The Tournaments
          </h1>
          <h1 className="text-gray-600 font-bold  lg:text-sm absolute lg:top-[270px] lg:left-[430px] text-center">
            Beyond esports tournaments, include a broader calendar of gaming
            events, <br /> conferences, and conventions. and connect with each
            other.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner2;

AOS.init();
