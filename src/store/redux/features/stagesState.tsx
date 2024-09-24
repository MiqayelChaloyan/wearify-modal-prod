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
            console.log('proceedToStageTwo action dispatched'); // Add logging here
            state.isStageOneProcessing = false;
            state.isStageTwoProcessing = true;
        },
        finalizeProcessing: (state, action) => {
            console.log('finalizeProcessing action dispatched', action.payload); // Log action payload
            state.isStageTwoProcessing = false;
            state.isResultAvailable = action.payload;
        },
    },
});


export const { proceedToStageTwo, finalizeProcessing } = stagesSlice.actions;
export default stagesSlice.reducer;
