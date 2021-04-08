import * as React from 'react';

import Header from 'components/header/header';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => (
  <>
    <Header />
    <div className='container mt-5'>{children}</div>
  </>
);

export default Layout;
