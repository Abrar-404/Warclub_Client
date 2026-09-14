import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Player } from '@lottiefiles/react-lottie-player';
import SocialLogin from './SocialLogin';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';

const Register = () => {
  const { registerUser } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    setLoading(true);
    registerUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;

        // Update profile with name and photo URL
        updateProfile(loggedUser, {
          displayName: data.name,
          photoURL: data.photoURL || 'https://i.ibb.co/279NXhY/daniel-tolmachov-bluefire02.gif',
        })
          .then(() => {
            const savedUser = {
              name: data.name,
              email: data.email,
              photoURL: data.photoURL || 'https://i.ibb.co/279NXhY/daniel-tolmachov-bluefire02.gif',
            };

            // Request and store JWT token
            axiosSecure
              .post('/jwt', { email: data.email })
              .then(jwtRes => {
                if (jwtRes.data?.token) {
                  localStorage.setItem('access-token', jwtRes.data.token);
                }
              })
              .catch(jwtErr => console.warn('JWT notice:', jwtErr.message));

            axiosSecure
              .post('/users', savedUser)
              .catch(err => console.warn('Could not save user to DB:', err.message))
              .finally(() => {
                reset();
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Welcome to Warclub Esports!',
                  text: 'Account created successfully.',
                  showConfirmButton: false,
                  timer: 2000,
                  background: '#1F2937',
                  color: '#45F882',
                });
                navigate('/dashboard/profile', { replace: true });
              });
          })
          .catch(error => {
            console.error('Profile update error:', error);
            setLoading(false);
          });
      })
      .catch(error => {
        console.error('Register error:', error);
        setLoading(false);
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: error.message,
          background: '#1F2937',
          color: '#FFFFFF',
        });
      });
  };

  return (
    <div className="min-h-screen bg-[url('https://themedox.com/demo/mykd/assets/img/bg/area_bg02.jpg')] bg-cover bg-center py-12">
      <Helmet>
        <title>Warclub Esports || Register</title>
      </Helmet>
      <div className="max-w-5xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Registration Card */}
        <div className="w-full max-w-md bg-[#121820]/90 border border-green-500/50 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
          <h1 className="text-3xl font-extrabold text-white text-center mb-1">
            Join <span className="text-[#45F882]">Warclub Esports</span>
          </h1>
          <p className="text-gray-400 text-center text-xs mb-6">
            Create your player profile & compete in global tournaments
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-green-400 text-sm font-semibold mb-1" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Gamer tag or real name"
                {...register('name', { required: 'Name is required' })}
                className="w-full p-3 rounded-lg bg-[#222222] border border-gray-700 focus:border-green-400 text-white outline-none transition"
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-green-400 text-sm font-semibold mb-1" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="name@example.com"
                {...register('email', { required: 'Email is required' })}
                className="w-full p-3 rounded-lg bg-[#222222] border border-gray-700 focus:border-green-400 text-white outline-none transition"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-green-400 text-sm font-semibold mb-1" htmlFor="photoURL">
                Photo URL (Optional)
              </label>
              <input
                type="text"
                id="photoURL"
                placeholder="https://example.com/avatar.jpg"
                {...register('photoURL')}
                className="w-full p-3 rounded-lg bg-[#222222] border border-gray-700 focus:border-green-400 text-white outline-none transition"
              />
            </div>

            <div>
              <label className="block text-green-400 text-sm font-semibold mb-1" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Minimum 6 characters"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                })}
                className="w-full p-3 rounded-lg bg-[#222222] border border-gray-700 focus:border-green-400 text-white outline-none transition"
              />
              {errors.password && (
                <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#45F882] hover:bg-[#38d46e] text-black font-bold rounded-lg transition duration-200 mt-4 disabled:opacity-50"
            >
              {loading ? 'Creating Account...' : 'Register'}
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-700"></div>
            <p className="mx-4 text-sm text-gray-400">OR</p>
            <div className="flex-1 border-t border-gray-700"></div>
          </div>

          <SocialLogin />

          <p className="mt-6 text-center text-sm text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="text-green-400 hover:underline font-semibold">
              Login here
            </Link>
          </p>
        </div>

        {/* Lottie Animation */}
        <div className="hidden lg:block w-[450px]">
          <Player
            autoplay
            loop
            src="https://assets6.lottiefiles.com/packages/lf20_nc1bp7st.json"
            className="w-full h-full"
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
