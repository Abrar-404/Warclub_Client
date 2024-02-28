import '../Styles/customFont.css';
import shape1 from '../../assets/shape1.png';
import shape2 from '../../assets/shape2.png';

const Banner = () => {
  return (
    // <div className="bg-[url('https://wordpress.themeholy.com/bame/wp-content/uploads/2023/12/hero-bg1-1.png')] opacity-5 h-screen bg-no-repeat">
    //   </div>
    <div>
      <div className="pt-48">
        <div data-aos="fade-up" data-aos-duration="1000">
          <h1 className="text-[#45F882] lg:text-4xl md:text-xl rajdhani-medium mt-10 flex justify-center">
            # World Class ESports & Gaming Site
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <img
              src={shape1}
              data-aos="fade-right"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
              alt=""
              className="lg:w-[150px] lg:h-[150px] md:w-[100px] md:h-[100px] w-[60px] h-[60px]"
            />
          </div>
          <h1 className="lg:text-6xl md:text-3xl text-xl text-white rajdhani-bold">
            SHAPING THE FUTURE OF
          </h1>
          <img
            src={shape2}
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            alt=""
            className="lg:w-[150px] lg:h-[150px] md:w-[100px] md:h-[100px] w-[60px] h-[60px]"
          />
        </div>
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-[#45F882] lg:text-8xl md:text-6xl text-4xl font-extrabold rajdhani-bold flex justify-center"
        >
          ESPORTS
        </h1>
      </div>
    </div>
  );
};

export default Banner;
