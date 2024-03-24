import { useEffect, useState } from 'react';
import AllGamesCard from './AllGamesCard';
import '../Styles/seemorebtn.css';

const AllGamesCardFetch = () => {
  const [games, setGames] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [visibleGames, setVisibleGames] = useState([]);

  useEffect(() => {
    fetch('https://server-pi-opal-58.vercel.app/games')
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

// import { useEffect, useState } from 'react';
// import AllGamesCard from './AllGamesCard';
// import '../Styles/seemorebtn.css';

// const AllGamesCardFetch = () => {
//   const [games, setGames] = useState([]);
//   const [showAll, setShowAll] = useState(false);
//   const [visibleGames, setVisibleGames] = useState([]);
//   const [timer, setTimer] = useState(60);

//   useEffect(() => {
//     fetchGames();
//     startTimer();
//   }, []);

//   const fetchGames = () => {
//     fetch('http://localhost:5000/games')
//       .then(res => res.json())
//       .then(data => {
//         setGames(data);
//         setVisibleGames(data.slice(0, 6));
//       })
//       .catch(error => console.error('Error fetching games:', error));
//   };

//   const startTimer = () => {
//     const interval = setInterval(() => {
//       setTimer(prevTimer => {
//         if (prevTimer === 0) {
//           console.log('Timer reached zero, adding new game...');
//           addNewGame();
//           return 60;
//         } else {
//           return prevTimer - 1;
//         }
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   };

//   const addNewGame = () => {
//     fetch('http://localhost:5000/timerGame', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({}),
//     })
//       .then(res => res.json())
//       .then(data => {
//         console.log('New game added successfully:', data);
//         fetchGames();
//       })
//       .catch(error => console.error('Error adding new game:', error));
//   };

//   const fetchTimerGame = () => {
//     fetch('http://localhost:5000/timerGame')
//       .then(res => res.json())
//       .then(data => {
//         setGames(data);
//         setVisibleGames(data.slice(0, 6));
//       })
//       .catch(error => console.error('Error fetching timerGame:', error));
//   };

//   useEffect(() => {
//     fetchTimerGame();
//     startTimer();
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
//       <div className="text-3xl text-white">Timer: {timer}</div>
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
