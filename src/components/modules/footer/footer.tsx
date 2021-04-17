import * as React from 'react';

const Footer: React.FC = () => (
  <footer className='footer py-5'>
    <div className='content has-text-centered'>
      <p>
        <strong>fireTRACKER</strong> autorstwa{' '}
        <a href='https://mateuszgruzla.pl'>Mateusza Gruźli</a>.
      </p>
      <p>
        Aplikacja ta powstała w celu ułatwienia pracy wszystkim klientom fireTMS
      </p>
    </div>
  </footer>
);

export default Footer;
