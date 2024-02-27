// import { useContext, useState } from 'react';
// import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

// import { FcGoogle } from 'react-icons/fc';
// import { GiEnergyArrow } from 'react-icons/gi';

// import Swal from 'sweetalert2';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
// import { AuthContext } from '../../../Providers/AuthProvider';

// const Login = () => {
//   const { loginUser, googleSignIn, googleRegister } = useContext(AuthContext);
//   const [error, setError] = useState(null);
//   const naviGate = useNavigate();
//   const location = useLocation();

//   const handleGoogleSignIn = () => {
//     googleRegister()
//       .then(result => {
//         Swal.fire({
//           imageUrl: `https://i.ibb.co/H4HnLmL/yippee-yay.gif`,
//           title: 'WOOHOOO!!!! Welcome To The World!!!!',
//           width: 600,
//           padding: '3em',
//           color: '#7CFC00',
//           background: '#fff url()',
//           backdrop: `
//     rgba(0,0,123,0.4)
//     top
//     no-repeat
//   `,
//         });
//         console.log(result.user);
//         const loggedInGoogleUser = result?.user;
//         console.log(loggedInGoogleUser);
//         // const user = { email };
//         axios
//           .post('http://localhost:5000/jwt', loggedInGoogleUser, {
//             withCredentials: true,
//           })
//           .then(res => {
//             console.log(res.data);
//           });
//         naviGate(location?.state ? location.state : '/');
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   };

//   const handleLogin = e => {
//     e.preventDefault();
//     setError(null);

//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     console.log(email, password);

//     loginUser(email, password)
//       .then(result => {
//         const loggedInUser = result?.user;
//         console.log(loggedInUser);
//         const user = { email };
//         axios
//           .post('http://localhost:5000/jwt', user, {
//             withCredentials: true,
//           })
//           .then(res => {
//             console.log(res.data);
//             if (res.data?.success) {
//               naviGate(location?.state ? location.state : '/');
//             }
//           });
//         Swal.fire({
//           imageUrl: `https://i.ibb.co/H4HnLmL/yippee-yay.gif`,
//           title: 'WOOHOOO!!!! Welcome To The World!!!!',
//           width: 600,
//           padding: '3em',
//           color: '#7CFC00',
//           background: '#fff url()',
//           backdrop: `
//     rgba(0,0,123,0.4)
//     top
//     no-repeat
//   `,
//         });
//       })
//       .catch(error => {
//         console.error(error);
//         Swal.fire({
//           imageUrl: `https://i.ibb.co/ZLj6kP2/200w.gif`,
//           title: 'Email and Password did not match',
//           width: 600,
//           padding: '3em',
//           color: '#C70039 ',
//           background: '#fff url()',
//           backdrop: `
//     rgba(0,0,123,0.4)
//     top
//     no-repeat
//   `,
//         });
//       });
//   };

//   return (
//     <>
//       <ToastContainer />
//       <div className="hero  min-h-screen">
//         <div className="hero-content  flex-col lg:flex-row-reverse">
//           <div className="text-center items-center lg:text-left">
//             <h1 className="text-5xl w-full text-white font-bold">Login now!</h1>
//             <img
//               className="w-[200px] h-[180px] mt-10 rounded-full"
//               src="https://i.ibb.co/279NXhY/daniel-tolmachov-bluefire02.gif"
//               alt=""
//             />
//           </div>
//           <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-slate-700 bg-opacity-60">
//             {error && (
//               <div
//                 className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
//                 role="alert"
//               >
//                 {error}
//               </div>
//             )}
//             <form onSubmit={handleLogin} className="card-body">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text text-white font-bold">Email</span>
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="email"
//                   className="input input-bordered"
//                   required
//                   name="email"
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text text-white font-bold">
//                     Password
//                   </span>
//                 </label>
//                 <input
//                   type="password"
//                   placeholder="password"
//                   className="input input-bordered"
//                   required
//                   name="password"
//                 />
//                 <label className="label">
//                   <span className="label-text text-white font-bold">
//                     Password
//                   </span>
//                   <a
//                     href="#"
//                     className="label-text-alt link text-white font-bold link-hover"
//                   >
//                     Forgot password?
//                   </a>
//                 </label>
//               </div>
//               <div className="form-control mt-6">
//                 <button className="btn btn-primary">Login</button>
//               </div>
//               <p className="text-white font-medium">
//                 New to this World? Please{' '}
//                 <Link className="text-blue-700 font-bold" to="/register">
//                   Register
//                 </Link>
//               </p>
//               <div
//                 className="w-full justify-center items-center flex mx-auto"
//                 onClick={handleGoogleSignIn}
//               >
//                 <div className="text-3xl -rotate-45 w-9 text-red-600">
//                   <GiEnergyArrow></GiEnergyArrow>
//                 </div>
//                   <button className="text-3xl w-full text-center flex mx-auto">
//                     <FcGoogle></FcGoogle>
//                   </button>
//                 <div className="text-3xl w-9 -rotate-[225deg] text-red-600">
//                   <GiEnergyArrow></GiEnergyArrow>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;

import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';
import SocialLogin from './SocialLogin';
import { Helmet } from 'react-helmet-async';
import ReCAPTCHA from 'react-google-recaptcha';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Player } from '@lottiefiles/react-lottie-player';

const Login = () => {
  const { loginUser, user, passwordReset } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [verify, SetVerify] = useState(false);

  const from = location.state?.from?.pathname || '/';
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    loginUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        console.log('User created successfully');

        navigate(from, { replace: true });

        Swal.fire({
          title: 'User Login Successful.',
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
        });
      })
      .catch(error => console.log(error));
  };

  const onChange = value => {
    console.log('Captcha Value', value);
    SetVerify(true);
  };

  const passwordResetHandle = () => {
    const userEmail = user.email;
    passwordReset(userEmail)
      .then(() => {
        // Password reset email sent!
        // ..
        console.log('password reset done');
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div>
      {/* <Helmet>
        <title>Titans Arena || LogIn</title>
      </Helmet> */}
      <div className="hero min-h-screen  bg-[url('https://themedox.com/demo/mykd/assets/img/bg/area_bg02.jpg')]">
        <div className="hero-content flex-col my-20 lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
            <h1 className="text-5xl mb-5 mt-5 text-center font-mono font-bold text-green-500">
              Login To Titans Arena
            </h1>

            <div className="flex flex-col justify-center items-center rounded-md border-green-500 border lg:p-3 -mx-1 lg:mx-0 ">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="   shadow-md rounded px-8 pt-6 pb-8 w-full"
              >
                <div className="mb-2">
                  <label
                    className="block  text-green-400 text-xl font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', { required: true })}
                    className="p-3  outline-none bg-[#222222] hover:shadow-[#0b9817]  shadow-inner text-white  w-full rounded-md"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs italic">
                      Email is required.
                    </p>
                  )}
                </div>

                <div className="">
                  <label
                    className="block text-green-400 text-xl  font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    {...register('password', { required: true })}
                    className="p-3 mb-5 outline-none bg-[#222222] hover:shadow-[#0b9817]  shadow-inner text-white  w-full rounded-md"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs italic">
                      Password is required.
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="custom-button hover:bg-green-500 py-2 px-5 w-full"
                  >
                    Login
                  </button>
                </div>
              </form>
              <button
                onClick={passwordResetHandle}
                className=" text-purple-500"
              >
                Forget Password?
              </button>
              <div className="">
                <div className=" flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p className="mx-4 mb-0 text-center text-green-500 font-semibold ">
                    Or
                  </p>
                </div>
                <div className="ml-5">
                  <SocialLogin></SocialLogin>

                  <p className="mt-4 text-center text-green-500 flex items-center gap-3 mb-3">
                    Don't Have an Account Go To
                    <Link className="text-indigo-600 " to="/register">
                      Register{' '}
                    </Link>{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <Player
              className=" rounded-lg  sm:w-[500px] sm:h-[500px]"
              autoplay
              loop
              src="https://assets6.lottiefiles.com/packages/lf20_nc1bp7st.json"
              // style={{ height: "500px", width: "700px" }}
            ></Player>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
