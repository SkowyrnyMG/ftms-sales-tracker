import * as React from 'react';
import type { IParsedCsvData } from 'types/types';

import SelectOption from 'components/atoms/select-option/select-option';
import Hero from 'components/modules/hero/hero';

import {
  filterRows,
  format,
  sumColumn,
  countPositions,
} from 'utils/data-helper-functions';

interface IInvoicesTeplateProps {
  data: IParsedCsvData[];
}

interface IDateOfSummary {
  year: string | number;
  period: string;
}

const InvoicesTemplate: React.FC<IInvoicesTeplateProps> = ({ data }) => {
  const date = new Date();
  const [dateOfSummary, setDateOfSummary] = React.useState<IDateOfSummary>({
    year: date.getUTCFullYear(),
    period: '',
  });
  const invoicesCounter = countPositions(data);
  const nettInBranchValue = format(
    sumColumn(data, 'nettInBranchCurrencyValue'),
  );
  const taxInBranchValue = format(sumColumn(data, 'taxInBranchCurrencyValue'));
  const grossInBranchValue = format(
    sumColumn(data, 'grossInBranchCurrencyValue'),
  );
  const nettValueOfEurInvoices = format(
    sumColumn(filterRows(data, 'nettCurrency', 'EUR'), 'nettValue'),
  );
  const taxValueOfEurInvoices = format(
    sumColumn(filterRows(data, 'taxCurrency', 'EUR'), 'taxValue'),
  );
  const grossValueOfEurInvoices = format(
    sumColumn(filterRows(data, 'grossCurrency', 'EUR'), 'grossValue'),
  );
  const nettValueOfPlnInvoices = format(
    sumColumn(filterRows(data, 'nettCurrency', 'PLN'), 'nettValue'),
  );
  const taxValueOfPlnInvoices = format(
    sumColumn(filterRows(data, 'taxCurrency', 'PLN'), 'taxValue'),
  );
  const grossValueOfPlnInvoices = format(
    sumColumn(filterRows(data, 'grossCurrency', 'PLN'), 'grossValue'),
  );

  return (
    <div className='container'>
      <Hero
        title='Raport sprzedaży'
        subtitle='Podaj odpowiedni miesiąc i rok, aby wyświetlić poprawne dane na raporcie PDF.'
      />
      <div className='box'>
        <div className='columns'>
          <div className='column'>
            <input
              className='input is-info'
              type='text'
              placeholder='Wprowadź miesiąc, np. Styczeń'
              value={dateOfSummary.period}
              onChange={(e) =>
                setDateOfSummary((prevState) => ({
                  ...prevState,
                  period: e.target.value,
                }))
              }
            />
          </div>
          <div className='column'>
            <div className='select is-link is-focused is-hovered is-fullwidth'>
              <select
                value={dateOfSummary.year}
                onChange={(e) =>
                  setDateOfSummary((prevState) => ({
                    ...prevState,
                    year: e.target.value,
                  }))
                }
              >
                <SelectOption value={2021} />
                <SelectOption value={2020} />
                <SelectOption value={2019} />
                <SelectOption value={2018} />
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* -- End of input fields -- */}

      <div className='box is-size-5'>
        <div className='container my-3'>
          <h1 className='title is-2 has-text-centered has-text-weight-bold is-uppercase'>
            Podsumowanie
          </h1>
        </div>
        <div className='columns'>
          <div className='column is-four-fifths'>
            <div className='container my-3'>
              <span className='mr-2'>Miesiąc:</span>
              <span className='has-text-weight-bold'>
                {dateOfSummary.period}
              </span>
            </div>
            <div className='container my-3'>
              <span className='mr-2'>Rok:</span>
              <span className='has-text-weight-bold'>{dateOfSummary.year}</span>
            </div>
            <div className='container my-3'>
              <span className='mr-2'>Ilość faktur:</span>
              <span className='has-text-weight-bold'>{invoicesCounter}</span>
            </div>
            <div className='container my-3'>
              <span className='mr-2'>
                Wartność netto wszystkich faktur w walucie oddziału:
              </span>
              <span className='has-text-weight-bold'>{nettInBranchValue}</span>
            </div>
            <div className='container my-3'>
              <span className='mr-2'>
                Wartność podatku wszystkich faktur w walucie oddziału:
              </span>
              <span className='has-text-weight-bold'>{taxInBranchValue}</span>
            </div>
            <div className='container my-3'>
              <span className='mr-2'>
                Wartność BRUTTO wszystkich faktur w walucie oddziału:
              </span>
              <span className='has-text-weight-bold'>{grossInBranchValue}</span>
            </div>
            <div className='container my-3'>
              <span className='mr-2'>
                Wartość NETTO faktur wystawionych w EUR:
              </span>
              <span className='has-text-weight-bold'>
                {nettValueOfEurInvoices}
              </span>
            </div>
            <div className='container my-3'>
              <span className='mr-2'>
                Wartość podatku faktur wystawionych w EUR:
              </span>
              <span className='has-text-weight-bold'>
                {taxValueOfEurInvoices}
              </span>
            </div>
            <div className='container my-3'>
              <span className='mr-2'>
                Wartość BRUTTO faktur wystawionych EUR:
              </span>
              <span className='has-text-weight-bold'>
                {grossValueOfEurInvoices}
              </span>
            </div>
            <div className='container my-3'>
              <span className='mr-2'>Wartość faktur wystawionych w PLN:</span>
              <span className='has-text-weight-bold'>
                {nettValueOfPlnInvoices}
              </span>
            </div>
            <div className='container my-3'>
              <span className='mr-2'>
                Wartość podatku faktur wystawionych PLN:
              </span>
              <span className='has-text-weight-bold'>
                {taxValueOfPlnInvoices}
              </span>
            </div>
            <div className='container my-3'>
              <span className='mr-2'>
                Wartość BRUTTON faktur wystawionych w PLN:
              </span>
              <span className='has-text-weight-bold'>
                {grossValueOfPlnInvoices}
              </span>
            </div>
          </div>
          <div className='column has-border'>
            <div className='container'>
              <button type='button' className='button is-link is-outlined'>
                Exportuj PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicesTemplate;
