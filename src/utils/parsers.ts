import type {
  IInvoiceCsvDataType,
  IParsedInvoiceCsvData,
  IPaymentsCsvDataType,
  IParsedPaymentsCsvData,
} from 'types/types';

// * Parse CSV Array of array into CSV Array of objects

export const invoicesParser = (
  data: IInvoiceCsvDataType[],
): IParsedInvoiceCsvData[] => {
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

export const paymentsParser = (
  data: IPaymentsCsvDataType[],
): IParsedPaymentsCsvData[] => {
  return Object.assign(
    data.map((pos) => {
      const [
        tags,
        invoice,
        status,
        payer,
        dueDate,
        toPay,
        toPayCurrency,
        leftToPay,
        leftToPayCurrency,
      ] = pos;
      return {
        tags,
        invoice,
        status,
        payer,
        dueDate,
        toPay,
        toPayCurrency,
        leftToPay,
        leftToPayCurrency,
      };
    }),
  );
};
