import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/navbar.css';

const Navbar = () => {
  const navOptions = (
    <>
      <li className="nav-link">
        <Link to="/" className="default">
          HOME
        </Link>
      </li>
      <li className="nav-link">
        <Link to="/gallery" className="default">
          GALLERY
        </Link>
      </li>
      <li className="nav-link">
        <Link to="/allgame" className="default">
          All GAMES
        </Link>
      </li>
      <li className="nav-link">
        <Link to="/blogs" className="default">
          BLOGS
        </Link>
      </li>
      <li className="nav-link">
        <Link to="/support" className="default">
          SUPPORT
        </Link>
      </li>
      <li className="nav-link">
        <Link to="/tournament" className="default">
          TOURNAMENTS
        </Link>
      </li>
    </>
  );

  return (
    <nav>
      <div className="navbar px-4 lg:px-12  fixed z-50 bg-black bg-opacity-25 ">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-800 rounded-box w-52 z-10 text-white font-semibold"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/" className="normal-case text-xl flex items-center">
            <img className="" src="" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-4 lg:ml-28">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <div>
            <div className="navbar-end">
              <Link to="/login">
                <button className="custom-button hover:bg-green-500 py-2 px-5">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
