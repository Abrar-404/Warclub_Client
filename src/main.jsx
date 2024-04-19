import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Components/Layout/MainLayout.jsx';
import Home from './Components/Pages/Home/Home.jsx';
import Login from './Components/Pages/Login/Login';
import AboutUs from './Components/AboutUs/AboutUs';
import Contact from './Components/Contact/Contact';
import AllGames from './Components/AllGames/AllGames';
import AuthProvider from './Providers/AuthProvider.jsx';
import Gallery from './Components/Gallery/Gallery.jsx';
import TournamentsFetch from './Components/Tournaments/TournamentsFetch';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/aboutUs',
        element: <AboutUs></AboutUs>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/allGames',
        element: <AllGames></AllGames>,
      },
      {
        path: '/gallery',
        element: <Gallery></Gallery>,
      },
      {
        path: '/tournament',
        element: <TournamentsFetch></TournamentsFetch>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
