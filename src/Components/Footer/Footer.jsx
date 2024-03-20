import footerPic from '../../assets/Footer.png';
import '../Styles/footercss.css';
import { FaTelegramPlane } from 'react-icons/fa';

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
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                className="fill-current"
              >
                <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
              </svg>
              <p>
                ACME Industries Ltd.
                <br />
                Providing reliable tech since 1992
              </p>
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
                {/* <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item"
                />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div> */}

                <div class="search">
                  <div class="search-box">
                    <div class="search-field">
                      <input
                        placeholder="Search..."
                        class="input"
                        type="text"
                      />
                      {/* <div class="search-box-icon">
                        <button class="btn-icon-content">
                          <i class="search-icon">
                            <svg
                              xmlns="://www.w3.org/2000/svg"
                              version="1.1"
                              viewBox="0 0 512 512"
                            >
                              <path
                                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                                fill="#fff"
                              ></path>
                            </svg>
                          </i>
                        </button>
                      </div> */}

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
