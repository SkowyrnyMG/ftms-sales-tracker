import { createSlice } from '@reduxjs/toolkit';

interface IUISlice {
  loading: boolean;
}

const initialState: IUISlice = {
  loading: false,
};

export const UISlice = createSlice({
  name: 'UISlice',
  initialState,
  reducers: {
    setLoadingOn: (state) => {
      state.loading = true;
    },
    setLoadingOff: (state) => {
      state.loading = false;
    },
  },
});

export const { setLoadingOn, setLoadingOff } = UISlice.actions;

export default UISlice.reducer;
