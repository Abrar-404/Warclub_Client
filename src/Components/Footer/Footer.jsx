import footerPic from '../../assets/Footer.png';
import '../Styles/footercss.css';
import { FaTelegramPlane } from 'react-icons/fa';
import logo from '../../assets/NavLogo.png';

const Footer = () => {
  return (
    <footercomp>
      <div>
        <div
          className=" bg-cover pt-14"
          style={{ backgroundImage: `url(${footerPic})` }}
        >
          <footer className="footer p-10 text-white">
            <aside>
              <img src={logo} className="w-[150px] h-[80px]" alt="" />
              <div>
                <h1 className="text-gray-400">
                  Beyond esports tournaments, include a <br /> broader calendar
                  of gaming events, <br /> conferences, and conventions.
                </h1>
              </div>

              <div>
                <h1 className="text-xl text-white font-bold">
                  Follow <span className="text-[#45F882]">With Us:</span>
                </h1>
              </div>
            </aside>
            <nav>
              <h6 className="font-bold text-2xl border-b-2 pb-1 border-green-400 text-white">
                Services
              </h6>
              <a className="link link-hover text-gray-600 hover:text-green-400">
                Gaming
              </a>
              <a className="link link-hover text-gray-600 hover:text-green-400">
                Latest News
              </a>
              <a className="link link-hover text-gray-600 hover:text-green-400">
                Our Gallery
              </a>
              <a className="link link-hover text-gray-600 hover:text-green-400">
                Tournaments
              </a>
              <a className="link link-hover text-gray-600 hover:text-green-400">
                All Players
              </a>
              <a className="link link-hover text-gray-600 hover:text-green-400">
                About Me
              </a>
            </nav>
            <nav>
              <h6 className="font-bold text-2xl border-b-2 pb-1 border-green-400 text-white">
                Company
              </h6>
              <a className="link link-hover text-gray-600 hover:text-green-400">
                Help & Support
              </a>
              <a className="link link-hover text-gray-600 hover:text-green-400">
                About Us
              </a>
              <a className="link link-hover text-gray-600 hover:text-green-400">
                Contact
              </a>
              <a className="link link-hover text-gray-600 hover:text-green-400">
                Our Blog
              </a>
              <a className="link link-hover text-gray-600 hover:text-green-400">
                My Account
              </a>
              <a className="link link-hover text-gray-600 hover:text-green-400">
                Support
              </a>
            </nav>
            <form>
              <h6 className="font-bold text-2xl border-b-2 pb-1 border-green-400 text-white">
                Newsletter
              </h6>
              <fieldset className="form-control w-80">
                <label className="label">
                  <span className="label-text  text-gray-600">
                    Subscribe to our newsletter to get our latest update & news
                    consenter
                  </span>
                </label>

                <div class="search">
                  <div class="search-box">
                    <div class="search-field">
                      <input
                        placeholder="Email Address"
                        class="input"
                        type="text"
                      />

                      <div className="search-box-icon">
                        <button className="btn-icon-content">
                          <div className="search-icon">
                            <div className="text-green-600">
                              <FaTelegramPlane></FaTelegramPlane>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
          </footer>

          <div>
            <h1 className="text-center font-medium text-sm text-white">
              © Copyright 2024 <span className="text-green-400">Warclub</span> -
              All right reserved
            </h1>
          </div>
        </div>
      </div>
    </footercomp>
  );
};

export default Footer;
