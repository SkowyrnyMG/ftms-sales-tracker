import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { routes } from 'utils/routes';
import { selectInvoices, selectPayments } from 'store/slices/invoicesSlice';
import { usePathname } from 'hooks/usePathname';

import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from 'assets/svg/logo.svg';
import Modal from 'components/organisms/modal/modal';
import { loginWithGoogle } from 'store/slices/dbSlice';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const invoicesLoaded = useSelector(selectInvoices);
  const [isInvoiceFileLoaded] = React.useState<boolean>(
    invoicesLoaded.length > 0,
  );
  const paymentsLoaded = useSelector(selectPayments);
  const [isPaymentsFileLoaded] = React.useState<boolean>(
    paymentsLoaded.length > 0,
  );
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(true);
  const currentPath = usePathname();

  const setActive = (path: string): string => {
    const bulmaIsActive = 'is-active';
    return currentPath === path ? bulmaIsActive : '';
  };

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const handleLogin = () => {
    dispatch(loginWithGoogle());
  };

  return (
    <>
      <Modal
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        title='Logowanie'
      >
        <div className='container has-background-light has-text-centered'>
          <button type='button' className='button' onClick={handleLogin}>
            Center me
          </button>
        </div>
      </Modal>
      <nav
        className='navbar is-secondary has-shadow'
        role='navigation'
        aria-label='main navigation'
      >
        <div className='navbar-brand'>
          <Link className='navbar-item' to={routes.home}>
            <div className='$size-2 container'>
              <LogoIcon className='$size-2' width='10rem' height='3rem' />
            </div>
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
            <Link
              className={`navbar-item is-tab ${setActive('/')}`}
              to={routes.home}
            >
              Głowna
            </Link>
            {isInvoiceFileLoaded && (
              <Link
                className={`navbar-item is-tab ${setActive(routes.invoices)}`}
                to={routes.invoices}
              >
                Faktury
              </Link>
            )}
            {isPaymentsFileLoaded && (
              <Link
                className={`navbar-item is-tab ${setActive(routes.payments)}`}
                to={routes.payments}
              >
                Płatności
              </Link>
            )}
          </div>

          {/* <div className='modal is-active'>
          <div className='modal-background' />
          <div className='modal-content is-huge container '>
            <header className='modal-card-head'>
              <p className='modal-card-title'>Raport sprzedaży</p>
            </header>
            <div className='is-flex doc-container'>123</div>
          </div>
        </div> */}

          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='buttons'>
                <button
                  type='button'
                  className='button is-link'
                  onClick={handleLogin}
                >
                  <strong>Zaloguj/załóż konto z Google</strong>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
