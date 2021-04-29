import { configureStore } from '@reduxjs/toolkit';
import InvoicesReducer from 'store/slices/invoicesSlice';
import UIReducer from 'store/slices/uiSlice';
import DBReducer from 'store/slices/dbSlice';

const reducer = { InvoicesReducer, UIReducer, DBReducer };

export const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
