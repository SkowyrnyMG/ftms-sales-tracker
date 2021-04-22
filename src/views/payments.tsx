import * as React from 'react';
import { useSelector } from 'react-redux';

import { selectPayments } from 'store/slices/invoicesSlice';

import Layout from 'components/utils/layout';
import PaymentsTemplate from 'templates/payments-template';

const PaymentsView: React.FC = () => {
  const paymentsData = useSelector(selectPayments);
  return (
    <Layout>
      <PaymentsTemplate data={paymentsData} />
    </Layout>
  );
};

export default PaymentsView;
