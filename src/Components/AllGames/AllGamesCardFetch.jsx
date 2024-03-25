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

// import React, { useEffect, useState } from 'react';
// import AllGamesCard from './AllGamesCard';
// import '../Styles/seemorebtn.css';

// const AllGamesCardFetch = () => {
//   const [games, setGames] = useState([]);
//   const [showAll, setShowAll] = useState(false);
//   const [visibleGames, setVisibleGames] = useState([]);
//   const [timer, setTimer] = useState(10); // Initial timer value in seconds

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
//       const response = await fetch('http://localhost:5000/games');
//       const data = await response.json();
//       setGames(data);
//       setVisibleGames(data.slice(0, 6));
//     } catch (error) {
//       console.error('Error fetching initial games:', error);
//     }
//   };

//   const fetchNewGameData = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/newGameData'); // Assuming this endpoint returns new game data
//       const newData = await response.json();
//       setGames(prevGames => [...prevGames, newData]); // Add new game data to existing games
//     } catch (error) {
//       console.error('Error fetching new game data:', error);
//     }
//   };

//   const toggleShowAll = () => {
//     setShowAll(prev => !prev);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimer(prevTimer => prevTimer - 1); // Decrement timer every second
//     }, 1000); // Update timer every second

//     // Clear the timer when it reaches 0
//     if (timer === 0) {
//       clearInterval(interval);
//       setTimer(10); // Reset the timer to 10 seconds
//       fetchNewGameData(); // Fetch new game data after 10 seconds
//     }

//     return () => clearInterval(interval); // Clear the timer on component unmount
//   }, [timer, fetchNewGameData]); // Re-run the effect whenever timer or fetchNewGameData function changes

//   const handleSeeMoreClick = () => {
//     toggleShowAll();
//     fetchNewGameData(); // Fetch new game data when "See More" button is clicked
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
//         <p className='text-white text-4xl'>Timer: {timer}s</p>
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
  const [timer, setTimer] = useState(60); // Initial timer value in seconds

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
      const response = await fetch('http://localhost:5000/timerGame'); // Assuming this endpoint returns new game data
      const newData = await response.json();
      setGames(prevGames => [...prevGames, newData]); // Add new game data to existing games
      setVisibleGames(prevVisibleGames => [...prevVisibleGames, newData]); // Update visible games with new data
    } catch (error) {
      console.error('Error fetching new game data:', error);
    }
  };

  const toggleShowAll = () => {
    setShowAll(prev => !prev);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1); // Decrement timer every second
    }, 1000); // Update timer every second

    // Clear the timer when it reaches 0
    if (timer === 0) {
      clearInterval(interval);
      setTimer(10); // Reset the timer to 10 seconds
      fetchNewGameData(); // Fetch new game data after 10 seconds
    }

    return () => clearInterval(interval); // Clear the timer on component unmount
  }, [timer, fetchNewGameData]); // Re-run the effect whenever timer or fetchNewGameData function changes

  const handleSeeMoreClick = () => {
    toggleShowAll();
    fetchNewGameData(); // Fetch new game data when "See More" button is clicked
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
        <p className="text-white text-4xl">Timer: {timer}s</p>
      </div>
    </allgamesfetch>
  );
};

export default AllGamesCardFetch;
