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
        <LatestGames></LatestGames>
      </div>
    </div>
  );
};

export default Home;
