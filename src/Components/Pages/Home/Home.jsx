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
        <div className="flex justify-center mx-auto">
          <h1 className="text-[#45F882] font-bold text-xl"># Explore The Latest Releases</h1>
        </div>
        <LatestGames></LatestGames>
      </div>
    </div>
  );
};

export default Home;
