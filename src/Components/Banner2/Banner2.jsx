import shape3 from '../../assets/shape3.png';
import hero1 from '../../assets/hero1.png';
import hero2 from '../../assets/hero2.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const Banner2 = () => {
  return (
    <div className="flex justify-center">
      <div>
        <img className="relative" src={shape3} alt="" />

        <div className="absolute lg:top-[730px] lg:left-[200px] md:t">
          <img className="lg:w-[300px] lg:h-[400px] md:w-[190px] md:h-[200px]" src={hero1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner2;

AOS.init();
