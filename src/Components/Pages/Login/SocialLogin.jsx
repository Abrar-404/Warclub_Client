import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContext } from './../../../Providers/AuthProvider';
import useAxiosSecure from './../../Hooks/useAxiosSecure';

const SocialLogin = () => {
  const {
    googleRegister,
    googleRegisterRedirect,
    FacebookSign,
    facebookSignRedirect,
  } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleFacebookLogin = () => {
    if (!FacebookSign) {
      Swal.fire({
        icon: 'error',
        title: 'Facebook Sign-In Error',
        text: 'Facebook sign-in function is not available.',
        color: '#FFFFFF',
        background:
          'linear-gradient(90deg, #0c0e12 0%, rgba(31, 41, 53, 0.66078) 100%)',
        confirmButtonColor: '#45F882',
      });
      return;
    }

    FacebookSign()
      .then(userCredential => {
        const user = userCredential.user;
        const savedUser = {
          name: user.displayName || 'Facebook User',
          email: user.email,
          photoURL: user.photoURL,
        };

        // Request and persist JWT token
        axiosSecure
          .post('/jwt', { email: user.email })
          .then(jwtRes => {
            if (jwtRes.data?.token) {
              localStorage.setItem('access-token', jwtRes.data.token);
            }
          })
          .catch(jwtErr => console.warn('JWT notice:', jwtErr.message));

        axiosSecure
          .post('/users', savedUser)
          .catch(err => {
            console.warn('User already saved or server notice:', err.message);
          })
          .finally(() => {
            Swal.fire({
              title: 'Login Successful!',
              text: `Welcome to Warclub, ${savedUser.name}!`,
              icon: 'success',
              timer: 2000,
              color: '#45F882',
              background: '#1F2937',
              confirmButtonColor: '#45F882',
            });
            navigate(from, { replace: true });
          });
      })
      .catch(error => {
        console.error('Facebook error:', error);
        if (error.code === 'auth/popup-blocked' && facebookSignRedirect) {
          facebookSignRedirect();
          return;
        }

        let title = 'Facebook Sign-In Failed';
        let text = error.message;

        if (error.code === 'auth/operation-not-allowed') {
          title = 'Facebook Sign-In Not Configured';
          text =
            'Facebook provider is not enabled in Firebase Console. Please enable Facebook under Authentication -> Sign-in method with your Meta App ID & Secret.';
        } else if (error.code === 'auth/unauthorized-domain') {
          title = 'Unauthorized Domain';
          text = `This domain (${window.location.hostname}) is not added to Firebase Authorized Domains.`;
        } else if (error.code === 'auth/popup-closed-by-user') {
          title = 'Sign-In Cancelled';
          text = 'The sign-in popup was closed.';
        }

        Swal.fire({
          icon: error.code === 'auth/popup-closed-by-user' ? 'info' : 'error',
          title: title,
          text: text,
          color: '#FFFFFF',
          background: '#1F2937',
          confirmButtonColor: '#45F882',
        });
      });
  };

  const handleGooglesignIn = () => {
    googleRegister()
      .then(userCredential => {
        const user = userCredential.user;
        const savedUser = {
          name: user.displayName || 'Google User',
          email: user.email,
          photoURL: user.photoURL,
        };

        // Request and persist JWT token
        axiosSecure
          .post('/jwt', { email: user.email })
          .then(jwtRes => {
            if (jwtRes.data?.token) {
              localStorage.setItem('access-token', jwtRes.data.token);
            }
          })
          .catch(jwtErr => console.warn('JWT notice:', jwtErr.message));

        axiosSecure
          .post('/users', savedUser)
          .catch(err => {
            console.warn('User already saved or server notice:', err.message);
          })
          .finally(() => {
            Swal.fire({
              title: 'Login Successful!',
              text: `Welcome to Warclub, ${savedUser.name}!`,
              icon: 'success',
              timer: 2000,
              color: '#45F882',
              background: '#1F2937',
              confirmButtonColor: '#45F882',
            });
            navigate(from, { replace: true });
          });
      })
      .catch(error => {
        console.error('Google error:', error);
        if (error.code === 'auth/popup-blocked' && googleRegisterRedirect) {
          googleRegisterRedirect();
          return;
        }

        let title = 'Google Sign-In Failed';
        let text = error.message;

        if (error.code === 'auth/operation-not-allowed') {
          title = 'Google Sign-In Not Configured';
          text =
            'Google provider is not enabled in Firebase Console. Please enable Google under Authentication -> Sign-in method.';
        } else if (error.code === 'auth/unauthorized-domain') {
          title = 'Unauthorized Domain';
          text = `This domain (${window.location.hostname}) is not added to Firebase Authorized Domains.`;
        } else if (error.code === 'auth/popup-closed-by-user') {
          title = 'Sign-In Cancelled';
          text = 'The sign-in popup was closed.';
        }

        Swal.fire({
          icon: error.code === 'auth/popup-closed-by-user' ? 'info' : 'error',
          title: title,
          text: text,
          color: '#FFFFFF',
          background:
            'linear-gradient(90deg, #0c0e12 0%, rgba(31, 41, 53, 0.66078) 100%)',
          confirmButtonColor: '#45F882',
        });
      });
  };

  return (
    <div>
      <div className="flex flex-row mr-6 items-center justify-center">
        <p className="mb-0 text-lg"></p>

        <button
          onClick={handleFacebookLogin}
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          aria-label="Facebook Login"
          className="mx-1 h-9 w-9 rounded-full bg-green-500 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] cursor-pointer"
        >
          <FaFacebook className="mx-auto h-3.5 w-3.5" />
        </button>

        <button
          onClick={handleGooglesignIn}
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          aria-label="Google Login"
          className="mx-1 h-9 w-9 bg-green-500 rounded-full uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] cursor-pointer"
        >
          <FaGoogle className="mx-auto h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
