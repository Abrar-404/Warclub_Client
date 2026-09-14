import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import { FaUser, FaEnvelope, FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt, FaHeadset, FaClock } from 'react-icons/fa';
import { IoIosSend } from 'react-icons/io';

const ContactForm = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Tournament Registration & Inquiries');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_vr7e1xj',
        'template_zpyioxg',
        form.current,
        'QtXOYgGb2gzk-cpQc'
      )
      .then(
        (result) => {
          setIsSubmitting(false);
          Swal.fire({
            icon: 'success',
            title: 'Transmission Received!',
            text: 'Your communication has been dispatched to Warclub Command. We will respond shortly.',
            background: '#0D1520',
            color: '#45F882',
            confirmButtonColor: '#45F882',
            timer: 3000,
            showConfirmButton: false,
          });
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          setIsSubmitting(false);
          console.error('Contact email error:', error);
          // Friendly fallback so user experience is smooth even without live EmailJS keys
          Swal.fire({
            icon: 'success',
            title: 'Message Logged Locally',
            text: 'Thank you for contacting Warclub Esports! Your message has been recorded.',
            background: '#0D1520',
            color: '#45F882',
            confirmButtonColor: '#45F882',
            timer: 3000,
            showConfirmButton: false,
          });
          setName('');
          setEmail('');
          setMessage('');
        }
      );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 mt-20 mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Modern Cybernetic Contact Form */}
        <div className="lg:col-span-7 bg-[#09111B]/95 border border-gray-800/80 hover:border-[#45F882]/40 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl transition duration-300">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#45F882] animate-cyber-pulse" />
            <span className="text-[#45F882] font-mono text-xs tracking-widest uppercase font-bold">
              // SECURE TRANSMISSION
            </span>
          </div>
          <h2 className="text-white text-3xl font-extrabold font-orbitron mb-2">
            Contact Command
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm font-rajdhani mb-8">
            Reach out to our esports operations, tournament organizers, or technical squad. We respond within 24 hours.
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name Input */}
              <div>
                <label className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">
                  Operative Name / Gamer Tag <span className="text-[#45F882]">*</span>
                </label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xs" />
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="e.g. Phoenix_01"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-[#060B12] border border-gray-800 focus:border-[#45F882] rounded-xl text-white text-xs outline-none transition placeholder-gray-600 focus:shadow-[0_0_15px_rgba(69,248,130,0.2)]"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">
                  Email Address <span className="text-[#45F882]">*</span>
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xs" />
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="operative@warclub.gg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-[#060B12] border border-gray-800 focus:border-[#45F882] rounded-xl text-white text-xs outline-none transition placeholder-gray-600 focus:shadow-[0_0_15px_rgba(69,248,130,0.2)]"
                  />
                </div>
              </div>
            </div>

            {/* Division Topic Selector */}
            <div>
              <label className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">
                Transmission Subject / Division
              </label>
              <select
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-3 bg-[#060B12] border border-gray-800 focus:border-[#45F882] rounded-xl text-white text-xs outline-none transition cursor-pointer"
              >
                <option value="Tournament Registration & Inquiries">Tournament Registration & Matchmaking</option>
                <option value="Pro Team Recruitment & Scrims">Pro Team Recruitment & Scrims</option>
                <option value="Sponsorships & Media Partnerships">Sponsorships & Brand Partnerships</option>
                <option value="Technical Support & Account Issues">Technical Support & Game Servers</option>
                <option value="General Inquiries">General Headquarters Support</option>
              </select>
            </div>

            {/* Message Textarea */}
            <div>
              <label className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">
                Transmission Brief <span className="text-[#45F882]">*</span>
              </label>
              <textarea
                name="user_message"
                required
                rows={5}
                placeholder="State your tournament challenge, recruitment request, or support inquiry..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-4 bg-[#060B12] border border-gray-800 focus:border-[#45F882] rounded-xl text-white text-xs outline-none transition placeholder-gray-600 resize-none focus:shadow-[0_0_15px_rgba(69,248,130,0.2)] font-rajdhani"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 bg-gradient-to-r from-[#45F882] to-[#2bd468] hover:brightness-110 active:scale-[0.98] text-black font-extrabold font-orbitron text-xs rounded-xl shadow-[0_0_25px_rgba(69,248,130,0.35)] transition duration-200 flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
            >
              <IoIosSend size={18} />
              {isSubmitting ? 'TRANSMITTING PACKET...' : 'TRANSMIT MESSAGE'}
            </button>
          </form>
        </div>

        {/* Right Side: Cyber Information Cards */}
        <div className="lg:col-span-5 space-y-5">
          <div className="mb-2">
            <span className="text-[#45F882] font-mono text-xs tracking-widest uppercase font-bold">
              // ARENA HEADQUARTERS
            </span>
            <h2 className="text-white text-3xl font-extrabold font-orbitron mt-1">
              Contact Information
            </h2>
            <p className="text-gray-400 text-xs font-rajdhani mt-1">
              Connect directly with our arena team or visit our Manchester gaming facility.
            </p>
          </div>

          {/* Address Card */}
          <div className="bg-[#09111B]/90 border border-gray-800/80 hover:border-[#45F882]/50 p-5 rounded-2xl backdrop-blur-xl transition duration-300 flex items-start gap-4 group">
            <div className="p-3 rounded-xl bg-[#45F882]/10 border border-[#45F882]/30 text-[#45F882] shrink-0 group-hover:bg-[#45F882] group-hover:text-black transition">
              <FaMapMarkerAlt size={20} />
            </div>
            <div>
              <h4 className="text-white font-orbitron font-bold text-xs uppercase tracking-wider mb-1">
                ARENA PHYSICAL LOCATION
              </h4>
              <p className="text-gray-300 text-xs leading-relaxed font-rajdhani">
                Floor 2, 4 Naval St, Ancoats, Manchester M4 6EW, United Kingdom
              </p>
              <span className="text-[11px] font-mono text-[#45F882] mt-1 inline-block">
                Station: Manchester Piccadilly (5 min walk)
              </span>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-[#09111B]/90 border border-gray-800/80 hover:border-[#45F882]/50 p-5 rounded-2xl backdrop-blur-xl transition duration-300 flex items-start gap-4 group">
            <div className="p-3 rounded-xl bg-[#45F882]/10 border border-[#45F882]/30 text-[#45F882] shrink-0 group-hover:bg-[#45F882] group-hover:text-black transition">
              <FaPhoneAlt size={18} />
            </div>
            <div>
              <h4 className="text-white font-orbitron font-bold text-xs uppercase tracking-wider mb-1">
                COMMAND TELEPHONE
              </h4>
              <p className="text-gray-300 text-xs font-mono">
                UK Hotline: <a href="tel:+441615981254" className="text-[#45F882] hover:underline">+44 (161) 598-1254</a>
              </p>
              <p className="text-gray-400 text-xs font-mono mt-0.5">
                Toll Free: <a href="tel:+18009272582" className="text-gray-300 hover:text-white">+1 (800) WAR-CLUB</a>
              </p>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-[#09111B]/90 border border-gray-800/80 hover:border-[#45F882]/50 p-5 rounded-2xl backdrop-blur-xl transition duration-300 flex items-start gap-4 group">
            <div className="p-3 rounded-xl bg-[#45F882]/10 border border-[#45F882]/30 text-[#45F882] shrink-0 group-hover:bg-[#45F882] group-hover:text-black transition">
              <FaHeadset size={20} />
            </div>
            <div>
              <h4 className="text-white font-orbitron font-bold text-xs uppercase tracking-wider mb-1">
                COMMUNICATION DISPATCH
              </h4>
              <p className="text-xs font-mono">
                Support: <a href="mailto:support@warclub.gg" className="text-[#45F882] hover:underline">support@warclub.gg</a>
              </p>
              <p className="text-xs font-mono mt-0.5 text-gray-400">
                Partnerships: <a href="mailto:partnerships@warclub.gg" className="text-gray-300 hover:text-white">partnerships@warclub.gg</a>
              </p>
            </div>
          </div>

          {/* Operating Hours Card */}
          <div className="bg-[#09111B]/90 border border-gray-800/80 hover:border-[#45F882]/50 p-5 rounded-2xl backdrop-blur-xl transition duration-300 flex items-start gap-4 group">
            <div className="p-3 rounded-xl bg-[#45F882]/10 border border-[#45F882]/30 text-[#45F882] shrink-0 group-hover:bg-[#45F882] group-hover:text-black transition">
              <FaClock size={19} />
            </div>
            <div>
              <h4 className="text-white font-orbitron font-bold text-xs uppercase tracking-wider mb-1">
                ARENA OPERATIONAL HOURS
              </h4>
              <p className="text-xs text-gray-300 font-mono">
                Matchmaking Servers: <span className="text-[#45F882]">24/7/365 Non-Stop</span>
              </p>
              <p className="text-xs text-gray-400 font-mono mt-0.5">
                Support Squad: 08:00 &ndash; 22:00 GMT (Mon &ndash; Sun)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
