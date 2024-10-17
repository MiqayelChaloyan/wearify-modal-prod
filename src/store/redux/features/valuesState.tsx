import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Image, PersonAttribute, Skin } from 'types';

import { v4 as uuidv4 } from 'uuid';

import { loacl } from 'utils/helpers';
import MEASUREMENTS from 'utils/constants/initialValues';


interface MeasurementsState {
    skinTone: PersonAttribute | null;
    age: PersonAttribute | null;
    isFemale: number;
    defaultImage: Image | null;
    uploadImage: Image | null;
    height: number;
    weight: number;
    skin: Skin | null;
    closetUrl?: string;
    closetUrlAPI?: string;
    plan?: number;
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
        INITIALIZE_STATE: (state) => {
            let url = state.closetUrlAPI;
            return { ...initialState, closetUrlAPI: url };
        },
        UPDATE_DEFAULT_IMAGE: (state, action: PayloadAction<number>) => {
            const defaultImageObj = loacl.find(item => item.gender == action.payload);
            if (defaultImageObj) {
                state.defaultImage = {
                    id: uuidv4(),
                    source: defaultImageObj.imagePath,
                };
            }
        },
        ADD_CLOSET_URL: (state, action: PayloadAction<string>) => {
            state.closetUrl = action.payload
            state.closetUrlAPI = action.payload
        },
        INITIALIZE_LINK: (state, action: PayloadAction<string>) => {
            state.closetUrl = action.payload
        }
    },
});


export const { UPDATE_DATA, ADD_IMAGE, DELETE_IMAGE, UPDATE_DEFAULT_IMAGE, INITIALIZE_STATE, ADD_CLOSET_URL, INITIALIZE_LINK } = measurementsSlice.actions;
export default measurementsSlice.reducer;
