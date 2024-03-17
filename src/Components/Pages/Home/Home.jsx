import About from '../../About/About';
import Banner from '../../Banner/Banner';
import Banner2 from '../../Banner2/Banner2';
import LatestGames from '../../LatestGames/LatestGames';
import MarqueeText from '../../MarqueeText/MarqueeText';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Banner2></Banner2>
      <MarqueeText></MarqueeText>
      <About></About>
      <div className="mt-48">
        <div className='mb-20'>
          <div className="flex justify-center mx-auto">
            <h1 className="text-[#45F882] font-bold text-xl">
              # Explore The Latest Releases
            </h1>
          </div>

          <div className="flex justify-center mx-auto">
            <h1 className="lg:text-4xl md:text-2xl text-xl font-bold text-white">
              Game On, Power Up, Win Big!
            </h1>
          </div>
        </div>
        <LatestGames></LatestGames>
      </div>
    </div>
  );
};

export default Home;
