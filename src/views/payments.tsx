import * as React from 'react';

import Layout from 'components/utils/layout';
import PaymentsTemplate from 'templates/payments-template';

const InvoicesView: React.FC = () => {
  return (
    <Layout>
      <PaymentsTemplate />
    </Layout>
  );
};

export default InvoicesView;
