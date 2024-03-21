import '../Styles/gamingslider.css';
import sliderSticker1 from '../../assets/sliderSticker1.svg';
import sliderSticker2 from '../../assets/sliderSticker2.svg';
import sliderSticker3 from '../../assets/sliderSticker3.svg';

const GamingSlider = () => {
  return (
    <gamingslider>
      <div>
        <div className="wrapper">
          <div className="outer">
            <div
              className="card border-2 border-green-400"
              style={{ '--delay': -1 }}
            >
              <div className="content">
                <div className="img">
                  <img src="./M ISMAIL.png" alt="" />
                </div>
                <div className="details">
                  <span className="name">1</span>
                  <p>Amazon Wholesaler</p>
                </div>
              </div>
              <a href="#">Follow</a>
            </div>

            <div
              className="card border-2 border-green-400"
              style={{ '--delay': 0 }}
            >
              <div className="content">
                <div className="img">
                  <img src="./komail-.jpg" alt="" />
                </div>
                <div className="details">
                  <span className="name">2</span>
                  <p>Youtuber & web developer</p>
                </div>
              </div>
              <a href="#">Follow</a>
            </div>

            <div
              className="card border-2 border-green-400"
              style={{ '--delay': 1 }}
            >
              <div className="content">
                <div className="img">
                  <img src="./murtaza.png" alt="" />
                </div>
                <div className="details">
                  <span className="name">3</span>
                  <p>Gamer & Youtuber</p>
                </div>
              </div>
              <a href="#">Follow</a>
            </div>

            <div
              className="card border-2 border-green-400"
              style={{ '--delay': 2 }}
            >
              <div className="content">
                <div className="img">
                  <img src="./Qalb.jpg" alt="" />
                </div>
                <div className="details">
                  <span className="name">4</span>
                  <p>Advertiser</p>
                </div>
              </div>
              <a href="#">Follow</a>
            </div>

            <div
              className="card border-2 border-green-400"
              style={{ '--delay': 2 }}
            >
              <div className="content">
                <div className="img">
                  <img src="./komail.jpg" alt="" />
                </div>
                <div className="details">
                  <span className="name">5</span>
                  <p>Youtuber & web developer</p>
                </div>
              </div>
              <a href="#">Follow</a>
            </div>
          </div>
        </div>
      </div>
    </gamingslider>
  );
};

export default GamingSlider;
