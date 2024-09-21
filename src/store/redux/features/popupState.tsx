import { createSlice } from '@reduxjs/toolkit';

type PopupState = {
  isOpen: boolean;
};

const initialState: PopupState = {
  isOpen: false,
};

const popupSwitch = createSlice({
  name: 'Popup',
  initialState,
  reducers: {
    handleSwitchStatusPopup: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { handleSwitchStatusPopup } = popupSwitch.actions;
export default popupSwitch.reducer;
