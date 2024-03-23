const AllGamesCard = ({ gamesItems }) => {
  const { img, name, review } = gamesItems || {};

  return (
    <div>
      <div>
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default AllGamesCard;