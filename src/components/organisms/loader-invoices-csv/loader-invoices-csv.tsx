import * as React from 'react';

import { setInvoices } from 'store/slices/invoicesSlice';
import { routes } from 'utils/routes';

import CSVLoader from 'components/modules/csv-loader/csv-loader';

const LoaderInvoicesCsv: React.FC = () => {
  return <CSVLoader path={routes.invoices} stateSetterFn={setInvoices} />;
};

export default LoaderInvoicesCsv;
