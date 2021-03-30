import * as React from 'react';

import { Link } from 'react-router-dom';

import { routes } from 'utils/routes';

const Header: React.FunctionComponent = () => (
  <nav className='navbar' role='navigation' aria-label='main navigation'>
    <div className='navbar-brand'>
      <Link className='navbar-item' to={routes.home}>
        <span className='is-size-3 is-family-secondary'>Tracker</span>
      </Link>

      <button
        type='button'
        className='navbar-burger'
        aria-label='menu'
        aria-expanded='false'
        data-target='navbarBasicExample'
      >
        <span aria-hidden='true' />
        <span aria-hidden='true' />
        <span aria-hidden='true' />
      </button>
    </div>

    <div id='navbarBasicExample' className='navbar-menu'>
      <div className='navbar-start'>
        <Link className='navbar-item' to={routes.home}>
          Home
        </Link>

        <Link className='navbar-item' to={routes.charges}>
          Charges
        </Link>
      </div>

      <div className='navbar-end'>
        <div className='navbar-item'>
          <div className='buttons'>
            <a className='button is-primary' href='/'>
              <strong>Sign up</strong>
            </a>
            <a className='button is-light' href='/'>
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
