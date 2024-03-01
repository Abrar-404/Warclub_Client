import shape3 from '../../assets/shape3.png';
import hero1 from '../../assets/hero1.png';
import hero2 from '../../assets/hero2.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const Banner2 = () => {
  return (
    <div className="flex justify-center">
      <div className="relative">
        <img className="" src={shape3} alt="" />

        <div>
          <img className='absolute w-[300px] h-[400px] top-[100px]' src={hero1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner2;

AOS.init();
