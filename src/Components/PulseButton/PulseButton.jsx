import { Link } from 'react-router-dom';
import '../Styles/pulsebutton.css';

const PulseButton = () => {
  return (
    <pulse>
      <div>
        <div className="container">
          <Link to="/allGames" aria-label="Explore All Games">
            <button className="pulse-button hover:bg-[white]" title="Play & Explore Games"></button>
          </Link>
        </div>
      </div>
    </pulse>
  );
};

export default PulseButton;