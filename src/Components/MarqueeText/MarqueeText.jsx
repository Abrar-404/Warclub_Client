import Marquee from 'react-fast-marquee';
import star from '../../assets/star.png';

const MarqueeText = () => {
  return (
    <div>
      <Marquee className="lg:mt-10 md:mt-48 mt-96 mx-auto">
        <div className="flex items-center lg:gap-10 md:gap-10 mx-auto">
          <div className="flex items-center gap-5 mx-auto">
            <h1 className="lg:text-4xl text-xl text-[#45F882] hover:text-white font-extrabold overflow-hidden ml-5">
              ACTION-PACKED
            </h1>
          </div>
          <img className="mr-5" src={star} alt="" />

          <div className="flex items-center gap-5 mx-auto">
            <h1 className="lg:text-4xl text-xl text-[#45F882] hover:text-white font-extrabold overflow-hidden">
              MIND-BENDING
            </h1>
          </div>
          <img className="pr-2" src={star} alt="" />

          <div className="flex items-center gap-5 mx-auto">
            <h1 className="lg:text-4xl text-xl text-[#45F882] hover:text-white font-extrabold overflow-hidden">
              Collection OG Games
            </h1>
          </div>
          <img className="pr-2" src={star} alt="" />

          <div className="flex items-center gap-5 mx-auto">
            <h1 className="lg:text-4xl text-xl text-[#45F882] hover:text-white font-extrabold overflow-hidden">
              Gaming Spanning
            </h1>
          </div>
          <img className="pr-2" src={star} alt="" />
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeText;
