import { Link } from 'react-router-dom';
import aboutBg from '../../assets/aboutusbg.png';
import { IoIosArrowForward } from 'react-icons/io';
import ContactForm from './ContactForm';
import Map from './Map';
import AboutFooter from '../AboutUs/AboutFooter';

const Contact = () => {
  return (
    <>
      <div>
        <div style={{ backgroundImage: `url(${aboutBg})` }}>
          <div className="mx-auto pt-32 pb-32">
            <h1 className="text-white font-bold lg:text-3xl text-center">
              Contact Us
            </h1>

            <div className="text-white font-semibold text-sm text-center flex justify-center mx-auto items-center pt-2">
              <h1>
                <Link to="/">
                  <span className="text-green-400">Home</span>
                </Link>{' '}
              </h1>
              <div>
                <IoIosArrowForward></IoIosArrowForward>
              </div>
              <div>Contact Us</div>
            </div>
          </div>
        </div>

        <div>
          <ContactForm></ContactForm>
        </div>

        <div className="mt-32">
          <Map></Map>
        </div>

        <div>
          <AboutFooter></AboutFooter>
        </div>
      </div>
    </>
  );
};

export default Contact;
