import { configureStore } from '@reduxjs/toolkit';
import favouritesReducer from './slices/favouritesSlice';

export const store = configureStore({
    reducer: {
        favourites: favouritesReducer,
    },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
