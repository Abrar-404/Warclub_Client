import { FaStar } from 'react-icons/fa6';

const AllGamesCard = ({ gamesItems }) => {
  const { img, name, review, fee } = gamesItems || {};

  return (
    <div>
      <div className="border border-gray-400 pt-20 pb-10 w-[22%] pl-5 rounded-3xl">
        <div className="flex justify-center items-center mx-auto">
          <h1 className="text-white lg:text-xl font-semibold">{name}</h1>
          <div className="flex justify-center items-center mx-auto gap-1 bg-[#0F1C23] w-[14%] rounded-sm">
            <div className="text-[8px] text-[#FFBE18]">
              <FaStar></FaStar>
            </div>
            <h1 className="text-[10px] text-white">4.8</h1>
          </div>
        </div>

        <div className="flex items-center gap-20 mx-auto">
          <h1 className="text-white text-xs font-medium">
            Entry Fee : <span className="text-[#3EDC75]  text-xs">${fee}</span>
          </h1>
          <div>
            <h1 className="text-[10px] text-gray-400">( {review}k Review) </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllGamesCard;
