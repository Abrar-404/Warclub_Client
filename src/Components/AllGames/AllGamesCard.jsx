import { FaStar } from 'react-icons/fa6';

const AllGamesCard = ({ gamesItems }) => {
  const { img, name, review } = gamesItems || {};

  return (
    <div>
      <div className="border border-gray-400 pt-20 pb-10 w-[25%] pl-5 rounded-3xl">
        <h1 className="text-white lg:text-xl font-semibold">{name}</h1>
      </div>
    </div>
  );
};

export default AllGamesCard;
