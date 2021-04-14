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

interface IinvoicesSlice {
  invoices: IInvoice[];
}

const initialState: IinvoicesSlice = {
  invoices: [],
};

export const invoicesSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {
    setInvoices: (state, { payload }) => {
      state.invoices = payload;
    },
    setDefault: (state) => {
      state.invoices = [];
    },
  },
});

export const { setInvoices, setDefault } = invoicesSlice.actions;

export const selectInvoices = (state: RootState): IInvoice[] =>
  state.InvoicesReducer.invoices;

export default invoicesSlice.reducer;
