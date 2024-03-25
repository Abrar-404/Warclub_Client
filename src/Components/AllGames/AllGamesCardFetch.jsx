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

import React, { useState, useEffect } from 'react';
import AllGamesCard from './AllGamesCard';
import axios from 'axios'; // Import axios for making HTTP requests
import '../Styles/seemorebtn.css';

const AllGamesCardFetch = () => {
  const [games, setGames] = useState([]);
  const [newGameData, setNewGameData] = useState(null); // State to store new game data

  useEffect(() => {
    // Fetch initial game data from the server
    fetchGames();

    // Setup WebSocket connection to the server
    const socket = new WebSocket('ws://localhost:5000');

    // Listen for new game data from the server
    socket.onmessage = event => {
      const data = JSON.parse(event.data);
      if (data.type === 'newGameData') {
        setNewGameData(data.payload); // Update new game data
      }
    };

    return () => {
      socket.close(); // Close WebSocket connection on component unmount
    };
  }, []);

  useEffect(() => {
    if (newGameData) {
      setGames(prevGames => [...prevGames, newGameData]); // Add new game data to games array
    }
  }, [newGameData]);

  const fetchGames = async () => {
    try {
      const response = await axios.get('http://localhost:5000/games');
      setGames(response.data); // Update games state with fetched data
    } catch (error) {
      console.error('Error fetching games:', error);
    }
  };

  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto max-w-5xl gap-10">
        {games.map(game => (
          <AllGamesCard key={game.id} gamesItems={game}></AllGamesCard>
        ))}
      </div>
      <div className="flex justify-center mt-20">
        <button className="bhututu rounded-xl">See More</button>
      </div>
    </div>
  );
};

export default AllGamesCardFetch;


