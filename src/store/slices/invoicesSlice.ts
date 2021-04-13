import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';

import { RootState } from 'store/store';

interface IInvoice {
  invoice: string;
  nett: number;
  gross: number;
}

interface IinvoicesSlice {
  invoices: IInvoice[];
}

const initialState: IinvoicesSlice = {
  invoices: [],
};

export const getAllBySaleDate = createAsyncThunk(
  'invoices/getAllBySaleDate',
  async () => {
    try {
      const api = process.env.REACT_APP_fireApi;

      const data = '';

      const result = await axios
        .get(
          `https://app.firetms.com/api/invoices/sales/corrective?dateOfIssueFrom=2019-01-01&dateOfIssueTo=2019-03-30&page=1&sortBy=id&asc=true&pageSize=25`,
          {
            headers: {
              apiKey:
                'ae31ff6f-1936-4a2d-8390-5943c8e63cf0|Ot/H1wkNcJtoRvPnNaRY9w==',
            },
            data,
          },
        )
        .then((response: AxiosResponse) => {
          return response;
        });

      return result;
    } catch (err) {
      return err;
    }
  },
);

export const invoicesSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBySaleDate.fulfilled, (state, { payload }) => {
      state.invoices = payload;
    });
  },
});

export const selectInvoices = (state: RootState): IInvoice[] =>
  state.InvoicesReducer.invoices;

export default invoicesSlice.reducer;
