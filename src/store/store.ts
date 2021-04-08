import { configureStore } from '@reduxjs/toolkit';
import InvoicesReducer from 'store/slices/invoicesSlice';

const reducer = { InvoicesReducer };

export const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
