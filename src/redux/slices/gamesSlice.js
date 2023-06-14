import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGames = createAsyncThunk('games/fetchGamesStatus', async (params) => {
    const { page, searchRequest, category } = params;
    const { data } = await axios.get(
        `https://643274f83e05ff8b3726929d.mockapi.io/Games?page=${page}&limit=6${searchRequest}${category}`,
    );

    return data;
});

const initialState = {
    items: [],
    status: 'loading', //loading | success | error
};

const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
    },
    extraReducers: {
        [fetchGames.pending]: (state) => {
            state.status = 'loading';
            state.items = [];
        },
        [fetchGames.fulfilled]: (state, action) => {
            state.status = 'success';
            state.items = action.payload;
        },
        [fetchGames.rejected]: (state) => {
            state.status = 'error';
            state.items = [];
        },
    },
});

export const { setItems } = gamesSlice.actions;

export default gamesSlice.reducer;
