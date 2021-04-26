import {
  filterRows,
  format,
  sumColumn,
  countPositions,
} from 'utils/data-helper-functions';

import {
  IParsedInvoiceCsvData,
  IParsedPaymentsCsvData,
  IReportData,
} from 'types/types';

export const invoicesReportSchema = (
  data: IParsedInvoiceCsvData[],
): IReportData[] => [
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

export const paymentsReportSchema = (
  data: IParsedPaymentsCsvData[],
): IReportData[] => [
  {
    name: 'Ilosć faktur:',
    value: countPositions(data),
  },
  {
    name: 'Wartość opłaconych faktur w walucie PLN:',
    value: format(
      sumColumn(filterRows(data, 'toPayCurrency', 'PLN'), 'toPay') -
        sumColumn(filterRows(data, 'leftToPayCurrency', 'PLN'), 'leftToPay'),
    ),
  },
  {
    name: 'Wartość opłaconych faktur w walucie EUR:',
    value: format(
      sumColumn(filterRows(data, 'toPayCurrency', 'EUR'), 'toPay') -
        sumColumn(filterRows(data, 'leftToPayCurrency', 'EUR'), 'leftToPay'),
    ),
  },
  {
    name: 'Wartość pozostała do zapłaty faktur wystawionych w EUR:',
    value: format(
      sumColumn(filterRows(data, 'leftToPayCurrency', 'EUR'), 'leftToPay'),
    ),
  },
  {
    name: 'Wartość pozostała do zapłaty faktur wystawionych w PLN:',
    value: format(
      sumColumn(filterRows(data, 'leftToPayCurrency', 'PLN'), 'leftToPay'),
    ),
  },
];
