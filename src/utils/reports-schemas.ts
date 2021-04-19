import {
  filterRows,
  format,
  sumColumn,
  countPositions,
} from 'utils/data-helper-functions';

import { IParsedCsvData, IReportData } from 'types/types';

export const invoicesReportSchema = (data: IParsedCsvData[]): IReportData[] => [
  {
    name: 'Ilosć faktur:',
    value: countPositions(data),
  },
  {
    name: 'Wartość NETTO faktur wystawionych w EUR:',
    value: format(
      sumColumn(filterRows(data, 'nettCurrency', 'EUR'), 'nettValue'),
    ),
  },
  {
    name: 'Wartość podatku VAT faktur wystawionych w EUR:',
    value: format(
      sumColumn(filterRows(data, 'taxCurrency', 'EUR'), 'taxValue'),
    ),
  },
  {
    name: 'Wartość BRUTTO faktur wystawionych EUR:',
    value: format(
      sumColumn(filterRows(data, 'grossCurrency', 'EUR'), 'grossValue'),
    ),
  },
  {
    name: 'Wartość NETTO faktur wystawionych w PLN:',
    value: format(
      sumColumn(filterRows(data, 'nettCurrency', 'PLN'), 'nettValue'),
    ),
  },
  {
    name: 'Wartość podatku VAT faktur wystawionych PLN:',
    value: format(
      sumColumn(filterRows(data, 'taxCurrency', 'PLN'), 'taxValue'),
    ),
  },
  {
    name: 'Wartość BRUTTO faktur wystawionych w PLN:',
    value: format(
      sumColumn(filterRows(data, 'grossCurrency', 'PLN'), 'grossValue'),
    ),
  },
  {
    name: 'Wartność NETTO wszystkich faktur w walucie oddziału:',
    value: format(sumColumn(data, 'nettInBranchCurrencyValue')),
  },
  {
    name: 'Wartność podatku VAT wszystkich faktur w walucie oddziału:',
    value: format(sumColumn(data, 'taxInBranchCurrencyValue')),
  },
  {
    name: 'Wartność BRUTTO wszystkich faktur w walucie oddziału:',
    value: format(sumColumn(data, 'grossInBranchCurrencyValue')),
  },
];
