import About from '../../About/About';
import Banner from '../../Banner/Banner';
import Banner2 from '../../Banner2/Banner2';
import Facilities from '../../Facilities/Facilities';
import GameThumb from '../../GameThumb/GameThumb';
import LatestGames from '../../LatestGames/LatestGames';
import MarqueeText from '../../MarqueeText/MarqueeText';
import Players from '../../Players/Players';
import Team from '../../Team/Team';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Banner2></Banner2>
      <MarqueeText></MarqueeText>
      <About></About>

      <div className="mt-48">
        <div className="mb-20">
          <div className="flex justify-center mx-auto">
            <h1 className="text-[#45F882] font-bold lg:text-xl md:text-xl text-lg">
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

      <Facilities></Facilities>

      <div className="mt-48">
        <GameThumb></GameThumb>
      </div>

      <div>
        <div className="flex justify-center mx-auto mt-20">
          <h1 className="text-[#45F882] font-bold lg:text-xl md:text-xl text-lg">
            # Top World Class Gamer
          </h1>
        </div>

        <div className="flex justify-center mx-auto mb-20">
          <h1 className="lg:text-4xl md:text-2xl text-xl font-bold text-white">
            Let’s See Our Pro Player
          </h1>
        </div>

        <Players></Players>
      </div>


      <div className='mt-48'>
        <Team></Team>
      </div>
    </div>
  );
};

export default Home;
