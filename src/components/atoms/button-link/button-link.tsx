import * as React from 'react';

interface IButtonLinkProps {
  children: React.ReactNode;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonLink: React.FC<IButtonLinkProps> = ({ children, handleClick }) => (
  <button
    type='button'
    onClick={handleClick}
    className='button is-link is-outlined'
  >
    {children}
  </button>
);

export default ButtonLink;
