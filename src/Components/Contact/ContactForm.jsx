import { useRef, useState } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import '../Styles/contactform.css';
import { FaRegUser } from 'react-icons/fa';
import '../Styles/form.css';
import { CiMail } from 'react-icons/ci';


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
      <div>
        <div>
          <h1 className="text-[#45F882] text-base font-semibold">
            # GET IN TOUCH
          </h1>
        </div>

        <div>
          <h1 className="text-white text-2xl font-bold">
            Contact Us & Meet Our Team <span className="text-[#45F882]">!</span>
          </h1>
        </div>

        <div>
          <div>
            <div>
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
                            placeholder='Email Address...'
                            required=""
                            name="user_email"
                            className='inputuu'
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
                    <label htmlFor="email">Email</label>
                    <input
                      required=""
                      name="user_email"
                      id="email"
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="textarea">Message</label>
                    <textarea
                      required=""
                      cols="50"
                      rows="10"
                      id="textarea"
                      name="user_message"
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                    ></textarea>
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

        {/* <div className="relative">
          <input
            placeholder="Enter your text..."
            class="inputuu"
            name="text"
            type="text"
          ></input>

          <div className="absolute left-44 top-3 text-[#45F882]">
            <FaRegUser></FaRegUser>
          </div>
        </div> */}
      </div>
    </contactform>
  );
};

export default ContactForm;
