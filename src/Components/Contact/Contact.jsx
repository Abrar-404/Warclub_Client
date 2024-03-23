import { Link } from 'react-router-dom';
import aboutBg from '../../assets/aboutusbg.png';
import { IoIosArrowForward } from 'react-icons/io';
import ContactForm from './ContactForm';
import contactBg from '../../assets/ContactBG.png';

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

        <div style={{ backgroundImage: `url(${contactBg})` }}>
          <div className="pt-32">
            <ContactForm></ContactForm>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
