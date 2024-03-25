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
// import '../Styles/seemorebtn.css';
import '../Styles/bannerBtn.css'

const AllGamesCardFetch = () => {
  const [games, setGames] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [visibleGames, setVisibleGames] = useState([]);
  const [timer, setTimer] = useState(calculateInitialTimer()); // Initialize timer with initial value

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
      setTimer(calculateInitialTimer()); // Reset timer
      fetchNewGameData();
    }

    return () => clearInterval(interval);
  }, [timer, fetchNewGameData]);

  function calculateInitialTimer() {
    // Calculate initial timer value in seconds
    const daysInSeconds = 3 * 24 * 60 * 60;
    const hoursInSeconds = 23 * 60 * 60;
    const minutesInSeconds = 59 * 60;
    const seconds = 59;
    return daysInSeconds + hoursInSeconds + minutesInSeconds + seconds;
  }

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
        {/* <button className="bhututu rounded-xl" onClick={handleSeeMoreClick}>
          {showAll ? 'See Less' : 'See More'}
        </button> */}

        <button class="cta" onClick={handleSeeMoreClick}>
          <span class="span">{showAll ? 'See Less' : 'See More'}</span>
          <span class="second">
            <svg
              width="50px"
              height="20px"
              viewBox="0 0 66 43"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g
                id="arrow"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <path
                  class="one"
                  d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                  fill="#FFFFFF"
                ></path>
                <path
                  class="two"
                  d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                  fill="#FFFFFF"
                ></path>
                <path
                  class="three"
                  d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                  fill="#FFFFFF"
                ></path>
              </g>
            </svg>
          </span>
        </button>
      </div>

      <div className="flex justify-center mt-20">
        <p className="text-white text-4xl">Timer: {formatTime()}</p>
      </div>
    </allgamesfetch>
  );
};

export default AllGamesCardFetch;
