import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import MEASUREMENTS from 'utils/constants/initialValues';
import { Image, PersonAttribute } from 'types';

interface MeasurementsState {
    skinTone: PersonAttribute | null;
    age: PersonAttribute | null; 
    isFemale: boolean;
    defaultImage: Image | null;
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
        INITIALIZE_STATE: () => {
            return { ...initialState };
        },
    },
});

export const { UPDATE_DATA, ADD_IMAGE, DELETE_IMAGE, INITIALIZE_STATE } = measurementsSlice.actions;
export default measurementsSlice.reducer;
