import { createSlice } from '@reduxjs/toolkit';

import { RootState } from 'store/store';

interface IInvoice {
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

interface IPayments {
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

interface IinvoicesSlice {
  invoices: IInvoice[];
  payments: IPayments[];
}

const initialState: IinvoicesSlice = {
  invoices: [],
  payments: [],
};

export const invoicesSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {
    setInvoices: (state, { payload }) => {
      state.invoices = payload;
    },
    setPayments: (state, { payload }) => {
      state.payments = payload;
    },
    setDefault: (state) => {
      state.invoices = [];
      state.payments = [];
    },
  },
});

export const { setInvoices, setPayments, setDefault } = invoicesSlice.actions;

export const selectInvoices = (state: RootState): IInvoice[] =>
  state.InvoicesReducer.invoices;

export const selectPayments = (state: RootState): IPayments[] =>
  state.InvoicesReducer.payments;

export default invoicesSlice.reducer;
