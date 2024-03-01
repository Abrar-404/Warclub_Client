import shape3 from '../../assets/shape3.png';
import hero1 from '../../assets/hero1.png';
import hero2 from '../../assets/hero2.png';

const Banner2 = () => {
  return (
    <div>
      <div className="relative">
        <img src={shape3} alt="" />
        <div className=" lg:w-2/4 md:w-2/3 absolute lg:top-[100px] md:top-[40px] lg:left-[329px] md:left-[120px]">
          <div className="flex items-center justify-between">
            <img
              className="lg:w-[300px] lg:h-[400px] md:w-[200px] md:h-[200px]"
              src={hero1}
              alt=""
            />
            <img
              className="lg:w-[300px] lg:h-[400px] md:w-[200px] md:h-[200px]"
              src={hero2}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
