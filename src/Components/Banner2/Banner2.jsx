import shape3 from '../../assets/shape3.png';
import hero1 from '../../assets/hero1.png';
import hero2 from '../../assets/hero2.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const Banner2 = () => {
  return (
    <div className="flex justify-center ">
      <div className="relative border-red-600 border-2">
        <img className="" src={shape3} alt="" />

        <div className="">
          <img
            className="absolute lg:w-[200px] lg:h-[300px] md:w-[150px] md:h-[170px] lg:top-[120px] lg:left-[200px] md:top-[68px] md:left-[100px]"
            src={hero1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner2;

AOS.init();
