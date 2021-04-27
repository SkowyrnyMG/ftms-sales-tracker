import {
  filterRows,
  format,
  sumColumn,
  countPositions,
} from 'utils/data-helper-functions';

import {
  IOptionalInput,
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
): IReportData[] => {
  const branchCurrency = data[0].toPayCurrency;
  return [
    {
      name: 'Ilosć faktur:',
      value: countPositions(data),
    },
    {
      name: 'Waluta oddziału:',
      value: branchCurrency,
    },
    {
      name: `Wartość opłaconych faktur w walucie oddziału:`,
      value: format(
        sumColumn(filterRows(data, 'toPayCurrency', branchCurrency), 'toPay') -
          sumColumn(
            filterRows(data, 'leftToPayCurrency', branchCurrency),
            'leftToPay',
          ),
      ),
    },
    {
      name: 'Wartość pozostała do zapłaty w walucie oddziału:',
      value: format(
        sumColumn(
          filterRows(data, 'leftToPayCurrency', branchCurrency),
          'leftToPay',
        ),
      ),
    },
  ];
};

export const paymentsReportAdditionalFieldsSchema = (
  data: IParsedPaymentsCsvData[],
  reportFields: IOptionalInput[],
): IReportData[] => {
  if (reportFields) {
    return reportFields.map((field) => ({
      name: field.inputName,
      value:
        field.countOption === 'deductToPayAndLeftToPay'
          ? format(
              sumColumn(filterRows(data, 'tags', field.inputValue), 'toPay') -
                sumColumn(
                  filterRows(data, 'tags', field.inputValue),
                  'leftToPay',
                ),
            )
          : format(
              sumColumn(
                filterRows(data, 'tags', field.inputValue),
                field.countOption,
              ),
            ),
    }));
  }
  return [];
};

//  [
//   {
//     name: 'Ilosć faktur:',
//     value: format(
//       sumColumn(filterRows(data, 'nettCurrency', 'PLN'), 'nettValue'),
//     ),
//   },
// ];
