import shape3 from '../../assets/shape3.png'
import hero1 from '../../assets/hero1.png'
import hero2 from '../../assets/hero2.png'

const Banner2 = () => {
  return (
    <div>
      <div className='relative'>
        <img src={shape3} alt="" />
        <div className='flex items-center absolute'>
          <img className='w-[300px] h-[400px]' src={hero1} alt="" />
          <img src={hero2} alt="" />
      </div>
      </div>
    </div>
  );
};

export default Banner2;