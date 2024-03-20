import teamImg from '../../assets/team.png'

const Team = () => {
  return (
    <div>
      <div>
        <img src={teamImg} alt="" />

        <div>
          <h1 className="text-[#43F27F]"># World Best Gaming Site</h1> <br />
          <h1 className='text-white lg:text-3xl'>
            Join Warclub Esports To Become Next{' '}
            <span className="text-[#43F27F]">PRO Gamer Today !</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Team;