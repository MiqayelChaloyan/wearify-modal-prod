import { configureStore } from '@reduxjs/toolkit';

import loaderCloSetReducer from './features/loaderCloSetState';
import popupSwitchReducer from './features/popupState';
import measurementsReducer from './features/valuesState';
import stagesReducer from './features/stagesState';
import popupFitSwitchReducer from './features/popupFitState';
import productsDataReducer from './features/productsDataState';

const store = configureStore({
    reducer: {
        loaderCloSet: loaderCloSetReducer,
        popupFit: popupFitSwitchReducer,
        popup: popupSwitchReducer,
        values: measurementsReducer,
        stages: stagesReducer,
        productsData: productsDataReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
