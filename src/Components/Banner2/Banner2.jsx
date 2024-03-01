import shape3 from '../../assets/shape3.png';
import hero1 from '../../assets/hero1.png';
import hero2 from '../../assets/hero2.png';

const Banner2 = () => {
  return (
    <div>
      <div className="relative">
        <img src={shape3} alt="" />
        <div className=" lg:w-2/4 md:w-2/3 w-[57%] absolute lg:top-[100px] md:top-[40px] lg:left-[329px] md:left-[120px] top-[42px] left-[90px]">
          <div className="flex items-center justify-between">
            <img
              className="lg:w-[300px] lg:h-[400px] md:w-[200px] md:h-[200px] w-[70px] h-[90px]"
              src={hero1}
              alt=""
            />
            <img
              className="lg:w-[300px] lg:h-[400px] md:w-[200px] md:h-[200px] w-[70px] h-[90px]"
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
