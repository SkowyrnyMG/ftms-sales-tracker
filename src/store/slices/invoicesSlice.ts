import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';

import { RootState } from 'store/store';

interface IinvoicesSlice {
  invoices: { invoice: string; nett: number; gross: number }[];
}

const initialState: IinvoicesSlice = {
  invoices: [],
};

export const getAllBySaleDate = createAsyncThunk(
  'invoices/getAllBySaleDate',
  async () => {
    try {
      // const raw = '';

      // const requestOptions = {
      //   method: 'GET',
      //   body: raw,
      //   redirect: 'follow',
      // };
      const api = process.env.REACT_APP_fireApi;

      const data = '';

      const result = await axios
        .get(
          `https://app.firetms.com/api/invoices/sales/issued?dateOfSaleFrom=2019-01-01&dateOfSaleTo=2019-03-30&key=${api}`,
          {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods':
                'GET,PUT,POST,DELETE,PATCH,OPTIONS',
              'Access-Control-Allow-Credentials': true,
            },
            data,
          },
        )
        .then((response: AxiosResponse) => {
          console.log(response);
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
});

export const selectInvoices = (
  state: RootState,
): { invoice: string; nett: number; gross: number }[] =>
  state.InvoicesReducer.invoices;

export default invoicesSlice.reducer;
