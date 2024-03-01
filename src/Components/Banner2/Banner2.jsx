import shape3 from '../../assets/shape3.png';
import hero1 from '../../assets/hero1.png';
import hero2 from '../../assets/hero2.png';

const Banner2 = () => {
  return (
    <div>
      <div className="relative">
        <img src={shape3} alt="" />
        <div className=" w-2/4 absolute lg:top-[100px] lg:left-[329px]">
          <div className="flex items-center justify-between">
            <img className="lg:w-[300px] lg:h-[400px]" src={hero1} alt="" />
            <img className="lg:w-[300px] lg:h-[400px]" src={hero2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
