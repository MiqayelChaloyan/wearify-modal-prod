import { createSlice } from '@reduxjs/toolkit';

type LoaderState = {
  isLoading: boolean;
};

const initialState: LoaderState = {
  isLoading: false,
};

const LoaderCloSet = createSlice({
  name: 'Clo-Set',
  initialState,
  reducers: {
    handleSwitchLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { handleSwitchLoading } = LoaderCloSet.actions;
export default LoaderCloSet.reducer;
