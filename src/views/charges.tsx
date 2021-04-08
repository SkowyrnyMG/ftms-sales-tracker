import * as React from 'react';

import Layout from 'components/utils/layout';
import InvoicesTemplate from 'templates/invoices-template';

const dummyData = [
  {
    invoice: '3125412csacsa',
    nett: 100,
    gross: 123,
  },
  {
    invoice: '3123',
    nett: 100,
    gross: 200,
  },
];

const InvoicesView: React.FunctionComponent = () => (
  <Layout>
    <InvoicesTemplate data={dummyData} />
  </Layout>
);

export default InvoicesView;
