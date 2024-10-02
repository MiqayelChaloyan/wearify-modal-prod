import { createSlice } from '@reduxjs/toolkit';

type PopupFitState = {
  isOpen: boolean;
};

const initialState: PopupFitState = {
  isOpen: false,
};

const opupFitSwitch = createSlice({
  name: 'PopupFit',
  initialState,
  reducers: {
    handleSwitchStatusPopupFit: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { handleSwitchStatusPopupFit } = opupFitSwitch.actions;
export default opupFitSwitch.reducer;
