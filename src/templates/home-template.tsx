import * as React from 'react';
import { useDispatch } from 'react-redux';

import { importInvoicesSchemaPl, importPaymentsSchemaPl } from 'content/home';
import { setDefault } from 'store/slices/invoicesSlice';

import ImportCSVBlock from 'components/organisms/import-csv-block/import-csv-block';
import Hero from 'components/modules/hero/hero';
import LoaderInvoicesCsv from 'components/organisms/loader-invoices-csv/loader-invoices-csv';
import LoaderPaymentsCsv from 'components/organisms/loader-payments-csv/loader-payments-csv';

const HomeTemplate: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setDefault());
  }, [dispatch]);
  return (
    <>
      <h1 className='title is-1 my-5 py-5 has-text-centered has-text-weight-bold'>
        Witaj w aplikacji ułatwiającej raporty z fireTMS!
      </h1>
      <Hero
        title='Raport sprzedaży'
        subtitle='Opcja ta pozwoli Ci szybko wygenerować najważniejsze informacje dotyczące sprzedaży ze wskazanego okresu dla Twojej księgowości!'
      />
      <ImportCSVBlock
        title='Schemat pliku CSV do importu faktur'
        loaderComponent={<LoaderInvoicesCsv />}
        tableSchema={importInvoicesSchemaPl}
      />
      <div className='block my-5'>&nbsp;</div>
      <Hero
        title='Raport płatności'
        subtitle='Opcja ta pozwoli Ci wygenerować wszystkie płatności z podziałem na kategornie, np. zapłacona w terminie, do zapłaty, etc.'
      />
      <ImportCSVBlock
        title='Schemat pliku CSV do importu płatności'
        loaderComponent={<LoaderPaymentsCsv />}
        tableSchema={importPaymentsSchemaPl}
      />
    </>
  );
};

export default HomeTemplate;
