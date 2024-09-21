import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import MEASUREMENTS from 'utils/constants/initialValues';
import { Image } from 'types';

interface MeasurementsState {
    skin: string | number;
    age: string | number; 
    isFemale: boolean;
    defaultImage: string;
    uploadImage: Image | null; 
};

const initialState: MeasurementsState = { ...MEASUREMENTS };

const measurementsSlice = createSlice({
    name: 'measurements',
    initialState,
    reducers: {
        UPDATE_DATA: (state, action: PayloadAction<Partial<MeasurementsState>>) => {
            return { ...state, ...action.payload };
        },
        ADD_IMAGE: (state, action: PayloadAction<Image | null>) => {
            state.uploadImage = action.payload;
        },
        DELETE_IMAGE: (state) => {
            state.uploadImage = null;
        },
    },
});

export const { UPDATE_DATA, ADD_IMAGE, DELETE_IMAGE } = measurementsSlice.actions;
export default measurementsSlice.reducer;
