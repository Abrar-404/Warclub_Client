import bigPic from '../../assets/About.png';
import littlePic from '../../assets/about2.png';

const About = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-col lg:flex-row mx-auto gap-20 justify-center">
        <div>
          <img src={bigPic} alt="" />
        </div>

        <div>
          <div className='flex items-center gap-5'>
            <img src={littlePic} alt="" />
            <div>
              <h1 className="text-[#45F882] font-bold lg:text-2xl">
                # About Our Gaming Site
              </h1>
              <h1 className="text-white text-5xl font-bold mt-5">
                Forging Legends In The <br /> Gaming Universe
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
