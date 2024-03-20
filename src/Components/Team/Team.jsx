import teamImg from '../../assets/team.png';

const Team = () => {
  return (
    <div>
      <div>
        <div className="relative">
          <img src={teamImg} alt="" />
          <div className="absolute lg:top-[20%] lg:left-[10%]">
            <h1 className="text-[#43F27F] font-semibold"># World Best Gaming Site</h1> <br />
            <h1 className="text-white lg:text-3xl font-bold">
              Join Warclub Esports To Become <br /> Next{' '}
              <span className="text-[#43F27F] font-normal">
                PRO Gamer Today !
              </span>
            </h1>{' '}
            <br />
            <h1 className="text-[#6F7989]">
              Esports and gaming facilities requires thoughtful consideration of{' '}
              <br />
              various elements to create an environment that caters to the needs{' '}
              <br />
              of gamers and enhances the overall gaming experience.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
