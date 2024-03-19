import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../Styles/navbar.css';
import { AuthContext } from '../../Providers/AuthProvider';
import { useContext } from 'react';
import '../Styles/loginbtn.css';

const Navbar = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    userLogOut()
      .then(result => {
        navigate('/');
        console.log(result?.user);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const navOptions = (
    <>
      <li className="nav-link">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : 'default')}
        >
          HOME
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink
          to="/gallery"
          className={({ isActive }) => (isActive ? 'active' : 'default')}
        >
          GALLERY
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink
          to="/allgame"
          className={({ isActive }) => (isActive ? 'active' : 'default')}
        >
          All GAMES
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink
          to="/blogs"
          className={({ isActive }) => (isActive ? 'active' : 'default')}
        >
          BLOGS
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink
          to="/support"
          className={({ isActive }) => (isActive ? 'active' : 'default')}
        >
          SUPPORT
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink
          to="/tournament"
          className={({ isActive }) => (isActive ? 'active' : 'default')}
        >
          TOURNAMENTS
        </NavLink>
      </li>
      {user ? (
        <>
          <li className="nav-link">
            <NavLink
              to="/dashboard/profile"
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Dashboard
            </NavLink>
          </li>
        </>
      ) : (
        <></>
      )}
    </>
  );

  const navOptionsForMobile = (
    <>
      <li className="nav-link">
        <NavLink to="/">HOME</NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/gallery">GALLERY</NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/allgame">All GAMES</NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/blogs">BLOGS</NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/support">SUPPORT</NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/tournament">Tournaments</NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/dashboard/profile">Dashboard</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar px-4 lg:px-12  fixed z-50 bg-black bg-opacity-25 mx-auto">
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
              {navOptionsForMobile}
            </ul>
          </div>
          <Link to="/" className="normal-case text-xl flex items-center">
            <img
              className=""
              src="https://raw.githubusercontent.com/alaminh63/Titans_Arena/main/public/logoTest41.png"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-4 lg:ml-28">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <div>
            <div className="navbar-end">
              {user ? (
                <>
                  <div className="flex gap-4 ">
                    <div className="avatar online">
                      <div className="w-10 rounded-full">
                        <img
                          className=""
                          src={user?.photoURL}
                          alt="User Avatar"
                        />
                      </div>
                    </div>
                    {/* <button
                      className="custom-button hover:bg-green-500 py-2 px-4"
                      onClick={handleLogOut}
                    >
                      Logout
                    </button> */}
                    <div class="radio-wrapper">
                      <input
                        type="radio"
                        checked="true"
                        id="value-2"
                        name="btn"
                        class="input"
                        onClick={handleLogOut}
                      />
                      <div class="login_btn ">
                        Logout <span aria-hidden=""></span>
                        <span aria-hidden="" class="login_btn__glitch">
                          Logout
                        </span>
                        <label class="number">r2</label>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <Link to="/login">
                  <div class="radio-wrapper">
                    <input
                      type="radio"
                      checked="true"
                      id="value-2"
                      name="btn"
                      class="input"
                    />
                    <div class="login_btn">
                      Login <span aria-hidden="">_</span>
                      <span aria-hidden="" class="login_btn__glitch">
                        Login
                      </span>
                      <label class="number">r2</label>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>

          {/* <Link to="/login" className="bt-primary font-bold">
            Sign Up
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
