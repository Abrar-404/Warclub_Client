import axios from 'axios';
import React, { useContext, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { API_BASE_URL } from '../../Config/apiConfig';

const axiosSecure = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { userLogOut } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const reqInterceptor = axiosSecure.interceptors.request.use(config => {
      const token = localStorage.getItem('access-token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    const resInterceptor = axiosSecure.interceptors.response.use(
      response => response,
      async error => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          if (userLogOut) {
            await userLogOut();
          }
          localStorage.removeItem('access-token');
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosSecure.interceptors.request.eject(reqInterceptor);
      axiosSecure.interceptors.response.eject(resInterceptor);
    };
  }, [userLogOut, navigate]);

  return [axiosSecure];
};

export default useAxiosSecure;
