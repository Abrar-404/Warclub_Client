import { useEffect, useState } from 'react';
import AllGamesCard from './AllGamesCard';

const AllGamesCardFetch = () => {
  const [getGames, setGetGames] = useState();

  useEffect(() => {
    fetch('http://localhost:5000/games')
      .then(res => res.json())
      .then(data => setGetGames(data));
  }, []);

  return (
    <div>
      <div>
        {getGames?.map(gamesItems => (
          <AllGamesCard
            key={gamesItems?.id}
            gamesItems={gamesItems}
          ></AllGamesCard>
        ))}
      </div>
    </div>
  );
};

export default AllGamesCardFetch;
