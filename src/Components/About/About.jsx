import bigPic from '../../assets/About.png';
import littlePic from '../../assets/about2.png';
import feature1 from '../../assets/about_feature_1.svg';

const About = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-col lg:flex-row mx-auto gap-20 justify-center mt-48">
        <div>
          <img src={bigPic} alt="" />
        </div>

        <div>
          <div className="flex items-center gap-5">
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

          <div>
            <img src={feature1} alt="" />
            <div>
              <h1 className="text-white text-2xl font-bold">
                Over <span className="text-[#45f882]">1k+</span> Affiliate Game
                Programs
              </h1>
              <h1 className="text-[#9199AD] font-semibold mt-2">
                Keep users informed about the gaming industry with news <br />{' '}
                articles on releases, updates, and events.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
