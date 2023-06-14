import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import games from './slices/gamesSlice';

export const store = configureStore({
    reducer: { filter, games },
});
