import React, { useState } from 'react';
import hamburgMenu from '../../assets/header/hamburg-menu.svg';
import close from '../../assets/header/close.svg';

import './styles.scss';

type IProps = {
  children: JSX.Element;
};

function SlideMenu({ children }: IProps): JSX.Element {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleMenuOpened = (): void => {
    setMenuOpened(!menuOpened);
  };

  return (
    <div>
      <button type="button" onClick={handleMenuOpened}>
        <img src={hamburgMenu} alt="Menu" className="max-w-none" />
      </button>
      <div className={`menu flex ${menuOpened ? 'active' : ''}`}>
        <div className="w-full h-full relative z-10">
          <button
            type="button"
            onClick={handleMenuOpened}
            className="top-3 right-3 absolute z-10"
          >
            <img src={close} alt="Close Button" />
          </button>
          {children}
        </div>
      </div>
      <div
        className={`closeButton absolute top-0 w-full h-full z-30 focus:outline-none bg-smoke ${
          menuOpened ? 'active' : ''
        }`}
      >
        <button
          type="button"
          onClick={handleMenuOpened}
          className="w-full h-full focus:outline-none"
        >
          <p className="hidden">Close</p>
        </button>
      </div>
    </div>
  );
}

export default SlideMenu;
