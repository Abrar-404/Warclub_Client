// import { useEffect, useState } from 'react';
// import AllGamesCard from './AllGamesCard';
// import '../Styles/seemorebtn.css';

// const AllGamesCardFetch = () => {
//   const [games, setGames] = useState([]);
//   const [showAll, setShowAll] = useState(false);
//   const [visibleGames, setVisibleGames] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:5000/games')
//       .then(res => res.json())
//       .then(data => {
//         setGames(data);
//         setVisibleGames(data.slice(0, 6));
//       });
//   }, []);

//   const toggleShowAll = () => {
//     setShowAll(prev => !prev);
//     if (!showAll) {
//       setVisibleGames(games);
//     } else {
//       setVisibleGames(games.slice(0, 6));
//     }
//   };

//   return (
//     <allgamesfetch>
//       <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto max-w-5xl gap-10">
//         {visibleGames.map(game => (
//           <AllGamesCard key={game.id} gamesItems={game}></AllGamesCard>
//         ))}
//       </div>

//       <div className="flex justify-center mt-20">
//         <button className="bhututu rounded-xl" onClick={toggleShowAll}>
//           {showAll ? 'See Less' : 'See More'}
//         </button>
//       </div>
//     </allgamesfetch>
//   );
// };

// export default AllGamesCardFetch;


import React, { useEffect, useState } from 'react';
import AllGamesCard from './AllGamesCard';
import '../Styles/seemorebtn.css';

const AllGamesCardFetch = () => {
  const [games, setGames] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [visibleGames, setVisibleGames] = useState([]);

  useEffect(() => {
    fetchInitialGames();
  }, []);

  useEffect(() => {
    if (showAll) {
      setVisibleGames(games);
    } else {
      setVisibleGames(games.slice(0, 6));
    }
  }, [showAll, games]);

  const fetchInitialGames = async () => {
    try {
      const response = await fetch('http://localhost:5000/games');
      const data = await response.json();
      setGames(data);
      setVisibleGames(data.slice(0, 6));
    } catch (error) {
      console.error('Error fetching initial games:', error);
    }
  };

  const fetchNewGameData = async () => {
    try {
      const response = await fetch('http://localhost:5000/newGameData'); // Assuming this endpoint returns new game data
      const newData = await response.json();
      setGames(prevGames => [...prevGames, newData]); // Add new game data to existing games
    } catch (error) {
      console.error('Error fetching new game data:', error);
    }
  };

  const toggleShowAll = () => {
    setShowAll(prev => !prev);
  };

  const handleSeeMoreClick = () => {
    fetchNewGameData();
  };

  return (
    <allgamesfetch>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto max-w-5xl gap-10">
        {visibleGames.map(game => (
          <AllGamesCard key={game.id} gamesItems={game}></AllGamesCard>
        ))}
      </div>

      <div className="flex justify-center mt-20">
        <button className="bhututu rounded-xl" onClick={toggleShowAll}>
          {showAll ? 'See Less' : 'See More'}
        </button>
      </div>

      {!showAll && (
        <div className="flex justify-center mt-20">
          <button className="bhututu rounded-xl" onClick={handleSeeMoreClick}>
            See More
          </button>
        </div>
      )}
    </allgamesfetch>
  );
};

export default AllGamesCardFetch;
