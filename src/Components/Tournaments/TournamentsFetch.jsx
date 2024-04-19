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

      <div className="mt-20 relative">
        <div>
          <img className="" src={tourPic} alt="" />

          <img
            className="absolute bottom-[80px] left-[7%]"
            src={sticker1}
            alt=""
          />
          <img
            className="absolute bottom-[80px] right-[7%]"
            src={sticker2}
            alt=""
          />

          <div className="text-right absolute bottom-[80px] left-[40%]">
            <div>
              <h1 className="text-[#45F882] text-xl font-semibold">
                VIDEO GAME
              </h1>
              <h1 className="text-3xl font-bold text-white">THE PANDAS</h1>
            </div>

            <div className="text-center bg-black rounded-3xl">
              <h1 className="text-white text-5xl font-semibold">06:30</h1>
              <h1 className="text-xs font-bold pt-3 text-[#959DB1]">
                April 19, 2024
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TournamentsFetch;
