import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { FacebookAuthProvider } from 'firebase/auth';
import Swal from 'sweetalert2';
import { AuthContext } from './../../../Providers/AuthProvider';
import useAxiosSecure from './../../Hooks/useAxiosSecure';

const SocialLogin = () => {
  const { googleRegister, googleRegisterRedirect, FacebookSign } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [axiosSecure] = useAxiosSecure();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleFacebookLogin = () => {
    if (!FacebookSign) {
      Swal.fire({
        icon: 'info',
        title: 'Facebook Sign-In',
        text: 'Facebook sign-in is not configured yet. Please use Google or Email/Password.',
        background: '#1F2937',
        color: '#FFFFFF',
      });
      return;
    }
    FacebookSign()
      .then(userCredential => {
        const user = userCredential.user;
        navigate(from, { replace: true });
        Swal.fire({
          title: 'Login Successful!',
          icon: 'success',
          timer: 2000,
          background: '#1F2937',
          color: '#45F882',
        });
      })
      .catch(error => {
        console.error('Facebook error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Facebook Login Error',
          text: error.message,
          background: '#1F2937',
          color: '#FFFFFF',
        });
      });
  };

  const handleGoogleSignIn = () => {
    setLoading(true);
    googleRegister()
      .then(userCredential => {
        const user = userCredential.user;
        const savedUser = {
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        };

        axiosSecure
          .post('/users', savedUser)
          .catch(err => {
            console.warn('User already saved or server notice:', err.message);
          })
          .finally(() => {
            setLoading(false);
            Swal.fire({
              title: 'Login Successful!',
              text: `Welcome back, ${user.displayName || 'Player'}!`,
              icon: 'success',
              timer: 2000,
              showConfirmButton: false,
              background: '#1F2937',
              color: '#45F882',
            });
            navigate(from, { replace: true });
          });
      })
      .catch(error => {
        setLoading(false);
        console.error('Google Sign-In Error:', error);

        let title = 'Google Sign-In Failed';
        let text = error.message;

        if (error.code === 'auth/unauthorized-domain') {
          title = 'Unauthorized Domain in Firebase';
          text = `This domain (${window.location.hostname}) is not added to your Firebase Console yet. Please add "${window.location.hostname}" to Firebase Console -> Authentication -> Settings -> Authorized Domains.`;
        } else if (error.code === 'auth/popup-blocked') {
          title = 'Popup Blocked by Browser';
          text = 'Your browser (Brave / ad-blocker) blocked the Google sign-in popup. Opening via redirect...';
          // Fallback to direct redirect
          if (googleRegisterRedirect) {
            googleRegisterRedirect();
            return;
          }
        } else if (error.code === 'auth/popup-closed-by-user') {
          title = 'Sign-In Cancelled';
          text = 'The Google sign-in window was closed before completing.';
        }

        Swal.fire({
          icon: error.code === 'auth/popup-closed-by-user' ? 'info' : 'error',
          title: title,
          text: text,
          background: '#1F2937',
          color: '#FFFFFF',
          confirmButtonColor: '#45F882',
        });
      });
  };

  return (
    <div className="w-full space-y-3">
      {/* Prominent Google Sign-In Button */}
      <button
        onClick={handleGoogleSignIn}
        type="button"
        disabled={loading}
        className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold rounded-lg shadow-md transition duration-200 border border-gray-300 disabled:opacity-50 cursor-pointer"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
          />
        </svg>
        <span>{loading ? 'Opening Google...' : 'Continue with Google'}</span>
      </button>

      {/* Secondary Social Login (Facebook) */}
      <div className="flex justify-center">
        <button
          onClick={handleFacebookLogin}
          type="button"
          className="flex items-center gap-2 py-2 px-4 bg-[#1877F2]/20 hover:bg-[#1877F2]/40 text-[#1877F2] border border-[#1877F2]/50 text-sm font-medium rounded-lg transition duration-150"
        >
          <FaFacebook className="w-4 h-4" />
          <span>Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
