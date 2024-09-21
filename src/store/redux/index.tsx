import { configureStore } from '@reduxjs/toolkit';
import loaderCloSetReducer from './features/loaderCloSetState';
import popupSwitchReducer from './features/popupState';
import measurementsReducer from './features/valuesState'

const store = configureStore({
    reducer: {
        loaderCloSet: loaderCloSetReducer,
        popup: popupSwitchReducer,
        values: measurementsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
