import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface FilterSliceState {
    categoryId: number;
    streamerId: number;
    searchValue: string;
    page: number;
}

const initialState: FilterSliceState = {
    categoryId: 10,
    streamerId: 2,
    searchValue: '',
    page: 1,
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload;
        },
        setStreamerId(state, action: PayloadAction<number>) {
            state.streamerId = action.payload;
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },
    },
});

export const filterSelector = (state: RootState) => state.filter;

export const { setCategoryId, setStreamerId, setSearchValue, setPage } = filterSlice.actions;

export default filterSlice.reducer;
