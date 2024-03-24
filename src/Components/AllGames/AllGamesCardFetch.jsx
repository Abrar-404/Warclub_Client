// import { useEffect, useState } from 'react';
// import AllGamesCard from './AllGamesCard';

// const AllGamesCardFetch = () => {
//   const [getGames, setGetGames] = useState();

//   useEffect(() => {
//     fetch('http://localhost:5000/games')
//       .then(res => res.json())
//       .then(data => setGetGames(data));
//   }, []);

//   return (
//     <div>
//       <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto max-w-5xl gap-10">
//         {getGames?.map(gamesItems => (
//           <AllGamesCard
//             key={gamesItems?.id}
//             gamesItems={gamesItems}
//           ></AllGamesCard>
//         ))}
//       </div>

//       <div className='flex justify-center'>
//         <button className='btn btn-primary'>See More</button>
//       </div>
//     </div>
//   );
// };

// export default AllGamesCardFetch;


import { useEffect, useState } from 'react';
import AllGamesCard from './AllGamesCard';

const AllGamesCardFetch = () => {
  const [games, setGames] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [visibleGames, setVisibleGames] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/games')
      .then(res => res.json())
      .then(data => {
        setGames(data);
        setVisibleGames(data.slice(0, 6)); // Initially show only 6 games
      });
  }, []);

  const toggleShowAll = () => {
    setShowAll(prev => !prev);
    if (!showAll) {
      setVisibleGames(games); // Show all games
    } else {
      setVisibleGames(games.slice(0, 6)); // Show only 6 games
    }
  };

  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto max-w-5xl gap-10">
        {visibleGames.map(game => (
          <AllGamesCard key={game.id} gamesItems={game}></AllGamesCard>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="btn btn-primary" onClick={toggleShowAll}>
          {showAll ? 'See Less' : 'See More'}
        </button>
      </div>
    </div>
  );
};

export default AllGamesCardFetch;
