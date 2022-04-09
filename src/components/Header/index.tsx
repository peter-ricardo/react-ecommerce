import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/header/logo.png';
import search from '../../assets/header/search.svg';
import cart from '../../assets/header/cart.svg';
import user from '../../assets/header/user.svg';
import hamburgMenu from '../../assets/header/hamburg-menu.svg';

import './styles.scss';

function Header(): JSX.Element {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <header
      className={`z-50 w-full top-0 bg-grey-ligther ${
        menuOpened ? 'menuOpened' : ''
      }`}
    >
      <nav
        id="header"
        className="flex items-center justify-between flex-wrap lg:px-0"
      >
        <div
          id="menu"
          className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 py-[21px] px-5"
        >
          <div id="logo" className="col-span-2 flex flex-row items-center">
            <div className="mr-4 lg:hidden">
              <button
                type="button"
                onClick={() => {
                  setMenuOpened(!menuOpened);
                }}
              >
                <img src={hamburgMenu} alt="Menu" className="max-w-none" />
              </button>
            </div>
            <Link
              to="/"
              title="Company Logo"
              className="flex items-center lg:mr-14 w-fit"
            >
              <img src={logo} alt="Company Logo" />
            </Link>
          </div>
          <div id="search" className="flex col-span-4 pt-5 lg:pt-0">
            <input className="w-full lg:w-4/5 border border-grey-normal rounded-l px-4 py-2" />
            <button
              type="button"
              className="bg-grey-dark w-14 flex justify-center items-center rounded-r hover:bg-opacity-80 transition"
            >
              <img src={search} alt="Search button" />
            </button>
          </div>
          <div
            id="actions"
            className="w-full flex pt-4 md:pt-0 justify-center md:justify-end lg:w-auto"
          >
            <div>
              <button type="button" className="mr-7">
                <img src={user} alt="User Profile" />
              </button>
              <button type="button">
                <img src={cart} alt="Cart" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
