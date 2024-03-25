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
import '../Styles/seemorebtn.css';

const AllGamesCardFetch = () => {
  const [games, setGames] = useState([]);
  const [visibleGames, setVisibleGames] = useState([]);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/timerGames');
        const data = await response.json();
        setGames(data);
        setVisibleGames(data.slice(0, 1)); // Show only one data initially
        startTimer(); // Start the timer
      } catch (error) {
        console.error('Error fetching timer games:', error);
      }
    };

    fetchData();

    // Clean up function to clear the timer when component unmounts
    return () => clearInterval(timer);
  }, []);

  const startTimer = () => {
    // Set the timer to fetch the next data after 10 seconds
    const timerInterval = setInterval(() => {
      // Show the next data if available, otherwise reset to the beginning
      setVisibleGames(prevVisibleGames => {
        const currentIndex = games.indexOf(prevVisibleGames[0]);
        const nextIndex =
          currentIndex === games.length - 1 ? 0 : currentIndex + 1;
        return [games[nextIndex]];
      });
    }, 10000); // 10 seconds interval

    // Set the timer state
    setTimer(timerInterval);
  };

  return (
    <allgamesfetch>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto max-w-5xl gap-10">
        {visibleGames.map(game => (
          <AllGamesCard key={game.id} gamesItems={game}></AllGamesCard>
        ))}
      </div>
    </allgamesfetch>
  );
};

export default AllGamesCardFetch;

