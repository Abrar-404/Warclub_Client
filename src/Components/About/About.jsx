import bigPic from '../../assets/About.png';
import littlePic from '../../assets/about2.png'

const About = () => {
  return (
    <div>
      <div>
        <img src={bigPic} alt="" />

        <div>
<img src={littlePic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;