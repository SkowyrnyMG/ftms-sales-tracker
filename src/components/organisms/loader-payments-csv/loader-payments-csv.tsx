import * as React from 'react';

import { setPayments } from 'store/slices/invoicesSlice';
import { routes } from 'utils/routes';

import CSVLoader from 'components/modules/csv-loader/csv-loader';

const LoaderPaymentsCsv: React.FC = () => {
  return <CSVLoader path={routes.payments} stateSetterFn={setPayments} />;
};

export default LoaderPaymentsCsv;
