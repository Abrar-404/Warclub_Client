import '../Styles/gamingslider.css'
import sliderSticker1 from '../../assets/sliderSticker1.svg'
import sliderSticker2 from '../../assets/sliderSticker2.svg'
import sliderSticker3 from '../../assets/sliderSticker3.svg'

const GamingSlider = () => {
  return (
    <gamingslider>
      <div>
        <div className="wrapper">
          <div className="outer">
            <div
              className="card border-2 border-green-400"
              style={{ '--delay': -2 }}
            >
              <div className="content">
                <div className="img">
                  <img src={sliderSticker1} alt="" />
                </div>
                <div className="details">
                  <span className="name">M Ismail Hazara</span>
                  <p>Amazon Wholesaler</p>
                </div>
              </div>
              <a href="#">Follow</a>
            </div>

            <div
              className="card border-2 border-green-400"
              style={{ '--delay': -1 }}
            >
              <div className="content">
                <div className="img">
                  <img src={sliderSticker2} alt="" />
                </div>
                <div className="details">
                  <span className="name">M Komail Hazara</span>
                  <p>Youtuber & web developer</p>
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
                  <img src={sliderSticker3} alt="" />
                </div>
                <div className="details">
                  <span className="name">Murtaza</span>
                  <p>Gamer & Youtuber</p>
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
                  <img src={sliderSticker1} alt="" />
                </div>
                <div className="details">
                  <span className="name">Qalb-e-Abbas</span>
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
                  <img src={sliderSticker2} alt="" />
                </div>
                <div className="details">
                  <span className="name">M Komail Hazara</span>
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
