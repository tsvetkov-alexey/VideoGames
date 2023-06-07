import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categoryId: 10,
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
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        },
        setPage(state, action) {
            state.page = action.payload;
        },
    },
});

export const { setCategoryId, setSearchValue, setPage } = filterSlice.actions;

export default filterSlice.reducer;
