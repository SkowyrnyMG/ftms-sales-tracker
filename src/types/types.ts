export interface IRowPositionProps {
  invoice: string;
  nett: number;
  gross: number;
}

export type CsvDataType = [
  invoice: string,
  status: string,
  payer: string,
  saleDate: Date,
  issueDate: Date,
  dueDate: Date,
  nettValue: number,
  nettCurrency: string,
  taxValue: number,
  taxCurrency: string,
  grossValue: number,
  grossCurrency: string,
  nettInBranchCurrencyValue: number,
  nettInBranchCurrency: string,
  taxInBranchCurrencyValue: number,
  taxInBranchCurrency: string,
  grossInBranchCurrencyValue: number,
  grossInBranchCurrency: string,
];

export interface IParsedCsvData {
  invoice: string;
  status: string;
  payer: string;
  saleDate: Date;
  issueDate: Date;
  dueDate: Date;
  nettValue: number;
  nettCurrency: string;
  taxValue: number;
  taxCurrency: string;
  grossValue: number;
  grossCurrency: string;
  nettInBranchCurrencyValue: number;
  nettInBranchCurrency: string;
  taxInBranchCurrencyValue: number;
  taxInBranchCurrency: string;
  grossInBranchCurrencyValue: number;
  grossInBranchCurrency: string;
}
