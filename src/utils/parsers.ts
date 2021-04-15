import type { CsvDataType, IParsedCsvData } from 'types/types';

// * Parse CSV Array of array into CSV Array of objects
export const invoicesParser = (data: CsvDataType[]): IParsedCsvData[] => {
  return Object.assign(
    data.map((pos) => {
      const [
        invoice,
        status,
        payer,
        saleDate,
        issueDate,
        dueDate,
        nettValue,
        nettCurrency,
        taxValue,
        taxCurrency,
        grossValue,
        grossCurrency,
        nettInBranchCurrencyValue,
        nettInBranchCurrency,
        taxInBranchCurrencyValue,
        taxInBranchCurrency,
        grossInBranchCurrencyValue,
        grossInBranchCurrency,
      ] = pos;
      return {
        invoice,
        status,
        payer,
        saleDate,
        issueDate,
        dueDate,
        nettValue,
        nettCurrency,
        taxValue,
        taxCurrency,
        grossValue,
        grossCurrency,
        nettInBranchCurrencyValue,
        nettInBranchCurrency,
        taxInBranchCurrencyValue,
        taxInBranchCurrency,
        grossInBranchCurrencyValue,
        grossInBranchCurrency,
      };
    }),
  );
};
