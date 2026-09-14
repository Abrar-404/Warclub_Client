import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';
import SocialLogin from './SocialLogin';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Player } from '@lottiefiles/react-lottie-player';
import { apiFetch } from '../../../Config/apiConfig';
import { FaGamepad, FaEnvelope, FaLock, FaArrowRight } from 'react-icons/fa';

const Login = () => {
  const { loginUser, user, passwordReset } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const from = location.state?.from?.pathname || '/dashboard/profile';
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const result = await loginUser(data.email, data.password);
      const loggedUser = result.user;

      // Request and save JWT token
      try {
        const jwtRes = await apiFetch('/jwt', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: loggedUser.email }),
        });
        const jwtData = await jwtRes.json();
        if (jwtData?.token) {
          localStorage.setItem('access-token', jwtData.token);
        }
      } catch (tokenErr) {
        console.warn('JWT token request notice:', tokenErr.message);
      }

      Swal.fire({
        title: 'Welcome Back to Warclub!',
        text: 'Login successful. Connecting to player hub...',
        icon: 'success',
        showConfirmButton: false,
        timer: 1800,
        background: '#1F2937',
        color: '#45F882',
        confirmButtonColor: '#45F882',
      });

      navigate(from, { replace: true });
    } catch (error) {
      console.error('Login error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: error.message || 'Invalid credentials. Please try again.',
        background: '#1F2937',
        color: '#FFFFFF',
        confirmButtonColor: '#45F882',
      });
    } finally {
      setLoading(false);
    }
  };

  const passwordResetHandle = () => {
    const enteredEmail = getValues('email') || user?.email;
    if (!enteredEmail) {
      Swal.fire({
        title: 'Please enter your email',
        text: 'Type your registered email address into the form above.',
        icon: 'info',
        background: '#1F2937',
        color: '#FFFFFF',
        confirmButtonColor: '#45F882',
      });
      return;
    }

    if (passwordReset) {
      passwordReset(enteredEmail)
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Password Reset Email Sent',
            text: `A password reset link was dispatched to ${enteredEmail}. Please check your inbox.`,
            background: '#1F2937',
            color: '#45F882',
            confirmButtonColor: '#45F882',
          });
        })
        .catch((error) => {
          console.error('Password reset error:', error);
          Swal.fire({
            icon: 'error',
            title: 'Reset Request Failed',
            text: error.message,
            background: '#1F2937',
            color: '#FFFFFF',
            confirmButtonColor: '#45F882',
          });
        });
    }
  };

  return (
    <div className="min-h-screen py-12 flex items-center justify-center">
      <Helmet>
        <title>Warclub Esports || Player Login</title>
      </Helmet>

      <div className="max-w-5xl w-full mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Left Side: Animated Gamer Graphic */}
        <div className="hidden lg:flex flex-col items-center justify-center max-w-md text-center">
          <div className="p-4 rounded-3xl bg-slate-900/60 border border-green-500/20 shadow-2xl backdrop-blur-sm">
            <Player
              className="w-80 h-80"
              autoplay
              loop
              src="https://assets6.lottiefiles.com/packages/lf20_nc1bp7st.json"
            />
            <div className="mt-4 px-4 pb-2">
              <span className="px-3 py-1 bg-green-500/20 text-[#45F882] text-xs font-bold uppercase rounded-full border border-green-500/30">
                Next-Gen Esports Club
              </span>
              <h3 className="text-xl font-bold text-white mt-2">
                Compete, Climb, Conquer
              </h3>
              <p className="text-gray-400 text-xs mt-1">
                Access tournaments, team matchmaking, and player stats in one hub.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Login Form Card */}
        <div className="w-full max-w-md bg-[#0F1722]/90 border border-green-500/40 rounded-3xl p-8 shadow-2xl backdrop-blur-md">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-green-500/10 text-[#45F882] mb-3">
              <FaGamepad size={28} />
            </div>
            <h1 className="text-3xl font-extrabold text-white">
              Login to <span className="text-[#45F882]">Warclub</span>
            </h1>
            <p className="text-gray-400 text-xs mt-1">
              Enter your player credentials to resume your session
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-gray-300 text-xs font-semibold mb-1 flex items-center gap-1.5" htmlFor="email">
                <FaEnvelope className="text-[#45F882]" /> Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="player@warclub.gg"
                {...register('email', { required: 'Email address is required' })}
                className="w-full bg-[#16202D] border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#45F882] transition"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-gray-300 text-xs font-semibold flex items-center gap-1.5" htmlFor="password">
                  <FaLock className="text-[#45F882]" /> Password
                </label>
                <button
                  type="button"
                  onClick={passwordResetHandle}
                  className="text-xs text-green-400 hover:text-green-300 transition"
                >
                  Forgot Password?
                </button>
              </div>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                {...register('password', { required: 'Password is required' })}
                className="w-full bg-[#16202D] border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#45F882] transition"
              />
              {errors.password && (
                <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-6 bg-gradient-to-r from-[#45F882] to-[#2bd468] text-black font-extrabold text-sm rounded-xl shadow-lg shadow-green-500/20 hover:brightness-110 active:scale-95 transition flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
            >
              {loading ? 'Authenticating...' : 'Sign In'} <FaArrowRight size={12} />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6 flex items-center justify-center">
            <div className="border-t border-gray-800 w-full" />
            <span className="bg-[#0F1722] px-3 text-xs text-gray-500 uppercase tracking-wider font-semibold">
              Or Connect With
            </span>
            <div className="border-t border-gray-800 w-full" />
          </div>

          <div className="flex justify-center">
            <SocialLogin />
          </div>

          <p className="text-center text-xs text-gray-400 mt-6">
            New to Warclub?{' '}
            <Link to="/register" className="text-[#45F882] font-bold hover:underline">
              Create an Account
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
