import { useRef, useState } from "react";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';

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
    <div>
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

        </div>
      </div>
    </div>
  );
};

export default ContactForm;
