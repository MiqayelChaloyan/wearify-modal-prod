import { createSlice } from '@reduxjs/toolkit';

type StagesState = {
    isStageOneProcessing: boolean;
    isStageTwoProcessing: boolean;
    isResultAvailable: boolean;
};

const initialState: StagesState = {
    isStageOneProcessing: true,
    isStageTwoProcessing: false,
    isResultAvailable: false,
};
const stagesSlice = createSlice({
    name: 'stages',
    initialState,
    reducers: {
        proceedToStageTwo: (state) => {
            state.isStageOneProcessing = false;
            state.isStageTwoProcessing = true;
        },
        finalizeProcessing: (state, action) => {
            state.isStageTwoProcessing = false;
            state.isResultAvailable = action.payload;
        },
    },
});


export const { proceedToStageTwo, finalizeProcessing } = stagesSlice.actions;
export default stagesSlice.reducer;
