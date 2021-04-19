import * as React from 'react';
import { useSelector } from 'react-redux';

import Layout from 'components/utils/layout';
import InvoicesTemplate from 'templates/invoices-template';
import { selectInvoices } from 'store/slices/invoicesSlice';

const InvoicesView: React.FC = () => {
  const invoicesData = useSelector(selectInvoices);
  return (
    <Layout>
      <InvoicesTemplate data={invoicesData} />
    </Layout>
  );
};

export default InvoicesView;
