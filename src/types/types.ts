import React from 'react';

export interface IRowPositionProps {
  invoice: string;
  nett: number;
  gross: number;
}

export type IInvoiceCsvDataType = [
  type: 'IInvoiceCsvDataType[]',
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

export interface IParsedInvoiceCsvData {
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

export type IPaymentsCsvDataType = [
  tags: string,
  invoice: string,
  status: string,
  payer: string,
  dueDate: string,
  toPay: number,
  toPayCurrency: string,
  leftToPay: number,
  leftToPayCurrency: string,
];

export interface IParsedPaymentsCsvData {
  tags: string;
  invoice: string;
  status: string;
  payer: string;
  dueDate: string;
  toPay: number;
  toPayCurrency: string;
  leftToPay: number;
  leftToPayCurrency: string;
}

export interface IReportData {
  name: string;
  value: number | string;
}

export interface IDateOfSummary {
  year: string | number;
  period: string;
}

export interface IExampleTable {
  pos: number;
  name: string;
  exampleData: string;
}

export interface IOptionalInput {
  inputID: string;
  placeholder?: string;
  inputValue: string;
  onValueChangeHandler?: React.ChangeEventHandler<HTMLInputElement>;
  inputName: string;
  onNameChangeHandler?: React.ChangeEventHandler<HTMLInputElement>;
  onDeleteHandler?: React.MouseEventHandler<HTMLButtonElement>;
}
