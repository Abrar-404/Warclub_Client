import Marquee from 'react-fast-marquee';
import star from '../../assets/star.png'

const MarqueeText = () => {
  return (
    <div>
      <Marquee className="lg:mt-10 md:mt-48 mt-96">
        <div className="flex items-center lg:gap-10 md:gap-20 mx-auto">
          <div>
            <h1 className="text-4xl text-[#45F882] hover:text-white font-extrabold">
              ACTION-PACKED
            </h1>
          </div>
          <h1 className="text-4xl text-[#45F882] hover:text-white font-extrabold">
            MIND-BENDING
          </h1>
          <h1 className="text-4xl text-[#45F882] hover:text-white font-extrabold">
            Collection OG Games
          </h1>
          <h1 className="text-4xl text-[#45F882] hover:text-white font-extrabold">
            Gaming Spanning
          </h1>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeText;
