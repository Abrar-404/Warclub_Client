import PageBanner from '../Common/PageBanner';
import AllGamesCardFetch from './AllGamesCardFetch';
import AboutFooter from '../AboutUs/AboutFooter';

const AllGames = () => {
  return (
    <div>
      <div>
        <PageBanner
          badge="CLASSIFIED ARMORY // TITLE REPOSITORY"
          title="WARCLUB"
          highlight="GAMES VAULT"
          subtitle="Explore, inspect, and deploy into competitive esports battlegrounds, cross-platform arenas, and community championships."
          breadcrumb="Games"
          stats={[
            { label: 'TOTAL TITLES', value: '24+ GAMES' },
            { label: 'CROSS-PLAY', value: 'ENABLED' },
            { label: 'PRIZE POOLS', value: '$500K' },
          ]}
        />


        <div>
          <AllGamesCardFetch></AllGamesCardFetch>
        </div>

        <div className='mt-20 md:mt-24'>
          <AboutFooter></AboutFooter>
        </div>
      </div>
    </div>
  );
};

export default AllGames;
