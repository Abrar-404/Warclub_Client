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
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.request.use(config => {
      const token = localStorage.getItem('access-token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      response => response,
      async error => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logOut();
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );
  }, [axiosSecure, logOut, navigate]);

  return [axiosSecure];
};

export default useAxiosSecure;
