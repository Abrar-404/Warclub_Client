import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/pulsebutton.css';

const PulseButton = () => {
  return (
    <div>
      <div className="container">
        <Link to="/allGames" aria-label="Explore All Games">
          <button className="pulse-button hover:bg-[white]" title="Play & Explore Games"></button>
        </Link>
      </div>
    </div>
  );
};

export default PulseButton;