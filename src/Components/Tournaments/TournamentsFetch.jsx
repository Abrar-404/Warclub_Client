import { Link } from 'react-router-dom';
import tourPic from '../../assets/tourPic.png';
import { IoIosArrowForward } from 'react-icons/io';
import aboutBg from '../../assets/aboutusbg.png';
import sticker1 from '../../assets/sticker1.png';
import sticker2 from '../../assets/sticker2.png';

const TournamentsFetch = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${aboutBg})` }}>
        <div className="mx-auto pt-32 pb-32">
          <h1 className="text-white font-bold lg:text-3xl text-center">
            Tournaments
          </h1>

          <div className="text-white font-semibold text-sm text-center flex justify-center mx-auto items-center pt-2">
            <h1>
              <Link to="/">
                <span className="text-green-400">Home</span>
              </Link>{' '}
            </h1>
            <div>
              <IoIosArrowForward></IoIosArrowForward>
            </div>
            <div>Tournaments</div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h1 className="text-[#45F882] text-center font-semibold">
          # GAME STREAMING BATTLE
        </h1>
        <h1 className="text-white text-3xl text-center font-bold">
          Our Gaming Tournaments <span className="text-[#45F882]">!</span>
        </h1>
      </div>

      <div className="mt-20">
        <div>
          <img className="relative" src={tourPic} alt="" />

          <img className="absolute bottom-[-230px]" src={sticker1} alt="" />
          <img className="absolute" src={sticker2} alt="" />
        </div>
      </div>
    </>
  );
};

export default TournamentsFetch;
