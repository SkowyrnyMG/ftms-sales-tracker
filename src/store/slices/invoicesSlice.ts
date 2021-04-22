import { createSlice } from '@reduxjs/toolkit';

import { RootState } from 'store/store';
import { IParsedPaymentsCsvData, IParsedInvoiceCsvData } from 'types/types';

// interface IInvoice {
//   invoice: string;
//   status: string;
//   payer: string;
//   saleDate: Date;
//   issueDate: Date;
//   dueDate: Date;
//   nettValue: number;
//   nettCurrency: string;
//   taxValue: number;
//   taxCurrency: string;
//   grossValue: number;
//   grossCurrency: string;
//   nettInBranchCurrencyValue: number;
//   nettInBranchCurrency: string;
//   taxInBranchCurrencyValue: number;
//   taxInBranchCurrency: string;
//   grossInBranchCurrencyValue: number;
//   grossInBranchCurrency: string;
// }

interface IinvoicesSlice {
  invoices: IParsedInvoiceCsvData[];
  payments: IParsedPaymentsCsvData[];
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

export const selectInvoices = (state: RootState): IParsedInvoiceCsvData[] =>
  state.InvoicesReducer.invoices;

export const selectPayments = (state: RootState): IParsedPaymentsCsvData[] =>
  state.InvoicesReducer.payments;

export default invoicesSlice.reducer;
