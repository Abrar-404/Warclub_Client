import { useState } from 'react';
import footerPic from '../../assets/Footer.png';
import '../Styles/footercss.css';
import { FaTelegramPlane } from 'react-icons/fa';
import logo from '../../assets/NavLogo.png';
import Socials from './Socials';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!email) {
      Swal.fire({
        title: 'Please enter your email',
        icon: 'info',
        background: '#1F2937',
        color: '#FFFFFF',
      });
      return;
    }
    Swal.fire({
      title: 'Subscribed Successfully!',
      text: 'You will now receive the latest updates from Warclub.',
      icon: 'success',
      timer: 2000,
      showConfirmButton: false,
      background: '#1F2937',
      color: '#45F882',
    });
    setEmail('');
  };
  return (
    <footercomp>
      <div>
        <div
          className=" bg-cover pt-14"
          style={{ backgroundImage: `url(${footerPic})` }}
        >
          <footer className="footer p-10 text-white flex lg:flex-row md:flex-col flex-col justify-center gap-20">
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

              <div><Socials></Socials></div>
            </aside>
            <nav>
              <h6 className="font-bold text-2xl border-b-2 pb-1 border-green-400 text-white">
                Services
              </h6>
              <Link to="/allGames" className="link link-hover text-gray-400 hover:text-green-400">
                Gaming
              </Link>
              <Link to="/blogs" className="link link-hover text-gray-400 hover:text-green-400">
                Latest News
              </Link>
              <Link to="/gallery" className="link link-hover text-gray-400 hover:text-green-400">
                Our Gallery
              </Link>
              <Link to="/tournament" className="link link-hover text-gray-400 hover:text-green-400">
                Tournaments
              </Link>
              <Link to="/aboutUs" className="link link-hover text-gray-400 hover:text-green-400">
                All Players
              </Link>
              <Link to="/aboutUs" className="link link-hover text-gray-400 hover:text-green-400">
                About Us
              </Link>
            </nav>
            <nav>
              <h6 className="font-bold text-2xl border-b-2 pb-1 border-green-400 text-white">
                Company
              </h6>
              <Link to="/contact" className="link link-hover text-gray-400 hover:text-green-400">
                Help & Support
              </Link>
              <Link to="/aboutUs" className="link link-hover text-gray-400 hover:text-green-400">
                About Us
              </Link>
              <Link to="/contact" className="link link-hover text-gray-400 hover:text-green-400">
                Contact
              </Link>
              <Link to="/blogs" className="link link-hover text-gray-400 hover:text-green-400">
                Our Blog
              </Link>
              <Link to="/login" className="link link-hover text-gray-400 hover:text-green-400">
                My Account
              </Link>
              <Link to="/contact" className="link link-hover text-gray-400 hover:text-green-400">
                Support
              </Link>
            </nav>
            <form onSubmit={handleNewsletter}>
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

                <div className="searching">
                  <div className="searching-box">
                    <div className="searching-field">
                      <input
                        placeholder="Email Address"
                        className="input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />

                      <div className="searching-box-icon">
                        <button type="submit" className="btn-icon-content" aria-label="Subscribe to newsletter">
                          <div className="searching-icon">
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

          <div className="pt-32">
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
