import * as React from 'react';

import Layout from 'components/utils/layout';
import HomeTemplate from 'templates/home-template';

const HomeView: React.FC = () => {
  return (
    <Layout>
      <HomeTemplate />
    </Layout>
  );
};

export default HomeView;
