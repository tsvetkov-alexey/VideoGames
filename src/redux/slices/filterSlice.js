import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categoryId: 10,
    streamerId: 2,
    searchValue: '',
    page: 1,
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload;
        },
        setStreamerId(state, action) {
            state.streamerId = action.payload;
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        },
        setPage(state, action) {
            state.page = action.payload;
        },
    },
});

export const filterSelector = (state) => state.filter;

export const { setCategoryId, setStreamerId, setSearchValue, setPage } = filterSlice.actions;

export default filterSlice.reducer;
