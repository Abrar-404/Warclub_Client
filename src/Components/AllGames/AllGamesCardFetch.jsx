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

import { useEffect, useState } from 'react';
import AllGamesCard from './AllGamesCard';
import io from 'socket.io-client';
import '../Styles/seemorebtn.css';

const AllGamesCardFetch = () => {
  const [games, setGames] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [visibleGames, setVisibleGames] = useState([]);

  // Connect to socket.io server
  useEffect(() => {
    const socket = io('http://localhost:5000');

    // Listen for the event to add new game data
    socket.on('addGameData', gameData => {
      setGames(prevGames => [...prevGames, gameData]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/games')
      .then(res => res.json())
      .then(data => {
        setGames(data);
        setVisibleGames(data.slice(0, 6));
      });
  }, []);

  const toggleShowAll = () => {
    setShowAll(prev => !prev);
    if (!showAll) {
      setVisibleGames(games);
    } else {
      setVisibleGames(games.slice(0, 6));
    }
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
    </allgamesfetch>
  );
};

export default AllGamesCardFetch;

