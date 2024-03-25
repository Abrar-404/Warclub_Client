

// import React, { useEffect, useState } from 'react';
// import AllGamesCard from './AllGamesCard';
// import '../Styles/seemorebtn.css';

// const AllGamesCardFetch = () => {
//   const [games, setGames] = useState([]);
//   const [showAll, setShowAll] = useState(false);
//   const [visibleGames, setVisibleGames] = useState([]);
//   const [timer, setTimer] = useState(60);

//   useEffect(() => {
//     fetchInitialGames();
//   }, []);

//   useEffect(() => {
//     if (showAll) {
//       setVisibleGames(games);
//     } else {
//       setVisibleGames(games.slice(0, 6));
//     }
//   }, [showAll, games]);

//   const fetchInitialGames = async () => {
//     try {
//       const response = await fetch(
//         'https://server-pi-opal-58.vercel.app/games'
//       );
//       const data = await response.json();
//       setGames(data);
//       setVisibleGames(data.slice(0, 6));
//     } catch (error) {
//       console.error('Error fetching initial games:', error);
//     }
//   };

//   const fetchNewGameData = async () => {
//     try {
//       const response = await fetch(
//         'https://server-pi-opal-58.vercel.app/timerGame'
//       );
//       const newData = await response.json();
//       setGames(prevGames => [...prevGames, newData]);
//       setVisibleGames(prevVisibleGames => [...prevVisibleGames, newData]);
//     } catch (error) {
//       console.error('Error fetching new game data:', error);
//     }
//   };

//   const toggleShowAll = () => {
//     setShowAll(prev => !prev);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimer(prevTimer => prevTimer - 1);
//     }, 1000);

//     // Clear the timer when it reaches 0
//     if (timer === 0) {
//       clearInterval(interval);
//       setTimer(60);
//       fetchNewGameData();
//     }

//     return () => clearInterval(interval);
//   }, [timer, fetchNewGameData]);

//   const handleSeeMoreClick = () => {
//     toggleShowAll();
//     fetchNewGameData();
//   };

//   return (
//     <allgamesfetch>
//       <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto max-w-5xl gap-10">
//         {visibleGames.map(game => (
//           <AllGamesCard key={game.id} gamesItems={game}></AllGamesCard>
//         ))}
//       </div>

//       <div className="flex justify-center mt-20">
//         <button className="bhututu rounded-xl" onClick={handleSeeMoreClick}>
//           {showAll ? 'See Less' : 'See More'}
//         </button>
//       </div>

//       <div className="flex justify-center mt-20">
//         <p className="text-white text-4xl">Timer: {timer}s</p>
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
  const [timer, setTimer] = useState(60);

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
      const response = await fetch(
        'https://server-pi-opal-58.vercel.app/games'
      );
      const data = await response.json();
      setGames(data);
      setVisibleGames(data.slice(0, 6));
    } catch (error) {
      console.error('Error fetching initial games:', error);
    }
  };

  const fetchNewGameData = async () => {
    try {
      const response = await fetch(
        'https://server-pi-opal-58.vercel.app/timerGame'
      );
      const newData = await response.json();
      setGames(prevGames => [...prevGames, newData]);
      setVisibleGames(prevVisibleGames => [...prevVisibleGames, newData]);
    } catch (error) {
      console.error('Error fetching new game data:', error);
    }
  };

  const toggleShowAll = () => {
    setShowAll(prev => !prev);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);

    // Clear the timer when it reaches 0
    if (timer === 0) {
      clearInterval(interval);
      setTimer(60);
      fetchNewGameData();
    }

    return () => clearInterval(interval);
  }, [timer, fetchNewGameData]);

  const formatTime = () => {
    const days = Math.floor(timer / (24 * 60 * 60));
    const hours = Math.floor((timer % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((timer % (60 * 60)) / 60);
    const seconds = timer % 60;

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  const handleSeeMoreClick = () => {
    toggleShowAll();
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
        <button className="bhututu rounded-xl" onClick={handleSeeMoreClick}>
          {showAll ? 'See Less' : 'See More'}
        </button>
      </div>

      <div className="flex justify-center mt-20">
        <p className="text-white text-4xl">Timer: {formatTime()}</p>
      </div>
    </allgamesfetch>
  );
};

export default AllGamesCardFetch;
