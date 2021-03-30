import * as React from 'react';

import Header from 'components/header/header';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => (
  <>
    <Header />
    <div className='container'>{children}</div>
  </>
);

export default Layout;
