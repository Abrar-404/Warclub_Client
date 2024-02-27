import '../Styles/customFont.css';
import shape1 from '../../assets/shape1.png';
import shape2 from '../../assets/shape2.png';

const Banner = () => {
  return (
    // <div className="bg-[url('https://wordpress.themeholy.com/bame/wp-content/uploads/2023/12/hero-bg1-1.png')] opacity-5 h-screen bg-no-repeat">
    //   </div>
    <div>
      <div className="pt-48">
        <h1 className="text-[#45F882] text-2xl rajdhani-medium mt-10 flex justify-center">
          # World Class ESports & Gaming Site
        </h1>
        <div className='flex items-center justify-center'>
          <img src={shape1} alt="" className="w-[200px] h-[200px]" />
          <h1 className='text-4xl text-white'>SHAPING THE FUTURE OF</h1>
          <img src={shape2} alt="" className="w-[200px] h-[200px]" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
