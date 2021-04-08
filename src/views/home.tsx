import * as React from 'react';
import { useDispatch } from 'react-redux';

import { getAllBySaleDate } from 'store/slices/invoicesSlice';

import Layout from 'components/utils/layout';

const HomeView: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllBySaleDate());
  });
  return (
    <Layout>
      <div className='box'>HomeView</div>
    </Layout>
  );
};

export default HomeView;
