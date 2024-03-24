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
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto max-w-5xl gap-10">
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
