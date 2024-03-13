import bigPic from '../../assets/About.png';
import littlePic from '../../assets/about2.png';

const About = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-col lg:flex-row mx-auto ">
        <div>
          <img src={bigPic} alt="" />
        </div>

        <div>
          <div>
            <img src={littlePic} alt="" />
            <div>
              <h1 className=''># About Our Gaming Site</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
