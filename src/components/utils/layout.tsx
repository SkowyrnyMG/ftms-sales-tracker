import * as React from 'react';

import Header from 'components/header/header';
import Footer from 'components/modules/footer/footer';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => (
  <>
    <Header />
    <div className='container my-5'>{children}</div>
    <Footer />
  </>
);

export default Layout;
