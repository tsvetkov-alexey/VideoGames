import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import games from './slices/gamesSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: { filter, games },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
