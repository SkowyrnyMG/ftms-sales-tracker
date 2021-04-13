import { configureStore } from '@reduxjs/toolkit';
import InvoicesReducer from 'store/slices/invoicesSlice';
import UIReducer from 'store/slices/uiSlice';

const reducer = { InvoicesReducer, UIReducer };

export const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
