import { createSlice } from '@reduxjs/toolkit';

type StagesState = {
    isProcessing: boolean;
    isStageTwoProcessing: boolean;
    isResultAvailable: boolean;
};

const initialState: StagesState = {
    isProcessing: false,
    isStageTwoProcessing: false,
    isResultAvailable: false,
};

const stagesSlice = createSlice({
    name: 'stages',
    initialState,
    reducers: {
        setProcessingState: (state, action) => {
            state.isProcessing = action.payload;
        },
        setStageTwoProcessing: (state, action) => {
            state.isStageTwoProcessing = action.payload;
        },
        finalizeProcessing: (state, action) => {
            state.isProcessing = false;
            state.isStageTwoProcessing = false;
            state.isResultAvailable = action.payload;
        },
        INITIALIZE_STATE_PROCESSING: (state) => {
            state.isProcessing = false;
            state.isStageTwoProcessing = false;
            state.isResultAvailable = false;
        }
    },
});


export const { setProcessingState, setStageTwoProcessing, finalizeProcessing, INITIALIZE_STATE_PROCESSING } = stagesSlice.actions;
export default stagesSlice.reducer;
