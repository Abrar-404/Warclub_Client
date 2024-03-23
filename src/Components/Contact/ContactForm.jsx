import { useRef, useState } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import '../Styles/contactform.css';
import { FaRegUser } from 'react-icons/fa';
import '../Styles/form.css';
import { CiMail } from 'react-icons/ci';
import { FaRegAddressCard } from 'react-icons/fa';
import { FaRegMessage } from 'react-icons/fa6';
import mapImg from '../../assets/mapIcon.svg';
import phoneIcon from '../../assets/phoneIcon.svg';
import envelopIcon from '../../assets/envelop.svg';

const ContactForm = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_vr7e1xj',
        'template_zpyioxg',
        form.current,
        'QtXOYgGb2gzk-cpQc'
      )
      .then(
        result => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            color: '#45F882',
            title: 'Message Sent Successfully',
            showConfirmButton: false,
            background: '#2B3445',
            timer: 1500,
          });
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );

    // Reset the input fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <contactform>
      <div className="">
        <div>
          <div className="ml-5">
            <h1 className="text-[#45F882] text-base font-semibold">
              # GET IN TOUCH
            </h1>
          </div>

          <div className="ml-6">
            <h1 className="text-white text-2xl font-bold">
              Contact Us & Meet Our Team{' '}
              <span className="text-[#45F882]">!</span>
            </h1>
          </div>

          <div>
            <div>
              <div className="">
                <div className="form-container">
                  <form className="form" ref={form} onSubmit={sendEmail}>
                    <div className="flex justify-center lg:flex-row md:flex-col flex-col gap-6">
                      <div>
                        <div className="form-group">
                          <div className="relative">
                            <input
                              placeholder="Your Name..."
                              required=""
                              name="from_name"
                              className="inputuu"
                              id="name"
                              type="text"
                              value={name}
                              onChange={e => setName(e.target.value)}
                            ></input>

                            <div className="absolute lg:left-32 md:left-40 left-40 top-3 text-[#45F882]">
                              <FaRegUser></FaRegUser>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="form-group">
                          <div className="relative">
                            <input
                              placeholder="Email Address..."
                              required=""
                              name="user_email"
                              className="inputuu"
                              id="email"
                              type="email"
                              value={email}
                              onChange={e => setEmail(e.target.value)}
                            ></input>

                            <div className="absolute lg:left-32 md:left-40 left-40 top-3 text-[#45F882]">
                              <CiMail></CiMail>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-group">
                        <div className="relative">
                          <input
                            placeholder="Your Address..."
                            required=""
                            type="text"
                          ></input>

                          <div className="absolute lg:left-80 lg:top-4 md:left-80 left-80 top-4 text-[#45F882]">
                            <FaRegAddressCard></FaRegAddressCard>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-group">
                        <div className="relative">
                          <textarea
                            placeholder="Your Address..."
                            required=""
                            cols="50"
                            rows="10"
                            id="textarea"
                            name="user_message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            type="text"
                          ></textarea>

                          <div className="absolute lg:left-80 lg:top-4 md:left-80 left-80 top-4 text-[#45F882]">
                            <FaRegMessage></FaRegMessage>
                          </div>
                        </div>
                      </div>
                    </div>
                    <input
                      type="submit"
                      className="form-submit-btn"
                      name=""
                      id=""
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="ml-5">
            <h1 className="text-[#45F882] text-base font-semibold">
              # INFORMATION
            </h1>
          </div>

          <div className="ml-6">
            <h1 className="text-white text-2xl font-bold">
              Contact Information's <span className="text-[#45F882]">!</span>
            </h1>
          </div>

          <div>
            <div className="flex gap-5 mx-auto lg:w-[37%] md:w-[60%] items-center py-4 px-5 bg-[#0F1C23] border border-gray-400 hover:border-[#45F882] rounded-3xl">
              <div>
                <img src={mapImg} alt="" />
              </div>
              <div>
                <div>
                  <h1 className="text-white font-bold lg:text-lg ">ADDRESS:</h1>
                </div>
                <div>
                  <h1 className="text-gray-400 lg:text-sm md:text-xs text-xs">
                    Floor 2, 4 Naval St, Ancoats, Manchester M4 6EW, United{' '}
                    <br />
                    Kingdom
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </contactform>
  );
};

export default ContactForm;
