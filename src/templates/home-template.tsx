import * as React from 'react';
import { useDispatch } from 'react-redux';

import ImportCSVBlock from 'components/organisms/import-csv-block/import-csv-block';
import Hero from 'components/modules/hero/hero';

import { importInvoicesSchemaPl } from 'content/home';
import { setDefault } from 'store/slices/invoicesSlice';

const HomeTemplate: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setDefault());
  });
  return (
    <>
      <h1 className='title is-1 my-5 py-5 has-text-centered has-text-weight-bold'>
        Witaj w aplikacji ułatwiającej raporty z fireTMS!
      </h1>
      <Hero
        title='Raport sprzedaży'
        subtitle='Opcja ta pozwoli Ci szybko wygenerować najważniejsze informacje dotyczące sprzedaży ze wskazanego okresu dla Twojej księgowości!'
      />
      <div className='box'>
        <ImportCSVBlock title='Schemat pliku CSV do importu faktur'>
          <p className='ml-1 mb-2'>
            Przygotuj plik CSV z danymi w kolejności, jak poniżej:
          </p>
          <table className='table is-bordered is-hoverable is-fullwidth'>
            <thead>
              <tr>
                <th>Pozycja kolumny</th>
                <th>Nazwa kolumny</th>
                <th>Przykładowe adane</th>
              </tr>
            </thead>
            <tbody>
              {importInvoicesSchemaPl.map(({ pos, name, exampleData }) => (
                <tr key={name}>
                  <th>{pos}</th>
                  <td>{name}</td>
                  <td>{exampleData}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className='ml-1'>
            Jeżeli Twój plik CSV jest przygotowany zgodnie z powyższym schematem
            zaimportuj go poniżej, żeby wytworzyć raport sprzedaży.
          </p>
        </ImportCSVBlock>
      </div>
    </>
  );
};

export default HomeTemplate;
