import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import footerBgPic from '../../assets/AboutFooter.png';
import Socials from '../Footer/Socials';
import '../Styles/inputform.css';

const AboutFooter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
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
      text: 'Thank you for subscribing to Warclub newsletter.',
      icon: 'success',
      timer: 2000,
      showConfirmButton: false,
      background: '#1F2937',
      color: '#45F882',
    });
    setEmail('');
  };
  return (
    <aboutfooter>
      <div
        style={{
          backgroundImage: `url(${footerBgPic})`,
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="">
          <div className="flex justify-center gap-14 items-center lg:flex-row md:flex-col flex-col pt-32">
            <Link to="/">
              <h1 className="text-white font-bold hover:text-[#45F882]">
                Home
              </h1>
            </Link>
            <Link to='/aboutUs'>
              <h1 className="text-white font-bold hover:text-[#45F882]">
                About Us
              </h1>
            </Link>
            <Link to="/blogs">
              <h1 className="text-white font-bold hover:text-[#45F882]">Blog</h1>
            </Link>
            <Link to="/gallery">
              <h1 className="text-white font-bold hover:text-[#45F882]">
                Gallery
              </h1>
            </Link>
            <Link to="/contact">
              <h1 className="text-white font-bold hover:text-[#45F882]">
                Contact
              </h1>
            </Link>
          </div>

          <div className="flex justify-center mx-auto lg:flex-row md:flex-col flex-col gap-20 mt-20 border-t-2 pt-5 border-b-2 border-b-gray-700 pb-5 border-t-gray-700">
            <div>
              <div>
                <h1 className="text-white font-bold text-lg text-left">
                  Office <span className="text-[#45f882]">Location:</span>
                </h1>
              </div>

              <div className="mt-2">
                <h1 className="text-left text-gray-400">
                  Floor 2, 4 Naval St, Ancoats, Manchester <br /> M4 6EW, United
                  Kingdom
                </h1>
              </div>
            </div>

            <div>
              <div>
                <h1 className="text-white font-bold text-lg text-left">
                  Contact <span className="text-[#45f882]">Information:</span>
                </h1>
              </div>

              <div className="mt-2">
                <div>
                  <h1 className="text-left text-gray-400 hover:text-[#45f882]">
                    (+163)-2547-36587
                  </h1>
                </div>{' '}
                <div>
                  <h1 className="text-left text-gray-400 hover:text-[#45f882]">
                    infohelp@bameexample.com
                  </h1>
                </div>
              </div>
            </div>

            <div>
              <div>
                <h1 className="text-white font-bold text-lg text-left">
                  Follow <span className="text-[#45f882]">With Us:</span>
                </h1>
              </div>

              <div>
                <Socials></Socials>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-20 pb-8">
            <form onSubmit={handleSubscribe} className="input-container">
              <input
                type="email"
                className="inputing"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="bhutu">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </aboutfooter>
  );
};

export default AboutFooter;
